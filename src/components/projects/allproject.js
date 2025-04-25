import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import classes from './Allprojects.module.css';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrentUser();
    fetchProjects();
  }, []);

  const fetchCurrentUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      setIsLoadingUser(false);
      return;
    }

    try {
      const response = await fetch("https://skillbridge.runasp.net/api/Users/currentUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    } finally {
      setIsLoadingUser(false);
    }
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://project-uploader.vercel.app/api/v1/projects');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      let projectsData = [];

      if (Array.isArray(result)) {
        projectsData = result;
      } else if (result.data && Array.isArray(result.data)) {
        projectsData = result.data;
      } else if (result.projects && Array.isArray(result.projects)) {
        projectsData = result.projects;
      }

      setProjects(projectsData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      const result = await Swal.fire({
        title: 'هل أنت متأكد؟',
        text: "لن تتمكن من استعادة هذا المشروع!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'نعم، احذفه!',
        cancelButtonText: 'إلغاء',
        reverseButtons: true
      });

      if (result.isConfirmed) {
        const response = await fetch(`https://project-uploader.vercel.app/api/v1/projects/${projectId}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error('فشل في حذف المشروع');
        }

        await fetchProjects();

        Swal.fire(
          'تم الحذف!',
          'تم حذف المشروع بنجاح.',
          'success'
        );
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      Swal.fire(
        'خطأ!',
        'حدث خطأ أثناء محاولة حذف المشروع.',
        'error'
      );
    }
  };

  if (loading || isLoadingUser) {
    return <div className={classes.loadingContainer}>جاري تحميل المشاريع...</div>;
  }

  if (error) {
    return (
      <div className={classes.errorContainer}>
        <p>حدث خطأ أثناء جلب البيانات: {error}</p>
        <button onClick={fetchProjects} className={classes.retryButton}>
          حاول مرة أخرى
        </button>
      </div>
    );
  }

  return (
    <div className={classes.projectsContainer}>
      <h2 className={classes.title}>جميع المشاريع</h2>

      {projects.length === 0 ? (
        <div className={classes.emptyState}>
          <p className={classes.noProjects}>لا توجد مشاريع متاحة حالياً</p>
          <Link to="/upload" className={classes.uploadLink}>
            أضف مشروعاً جديداً
          </Link>
        </div>
      ) : (
        <div className={classes.projectList}>
          {projects.map((project) => (
            <div key={project.id || project._id} className={classes.projectCard}>
              <div className={classes.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={classes.projectImage}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Error+Loading+Image';
                  }}
                />
              </div>
              <div className={classes.projectContent}>
                <h3 className={classes.projectTitle}>{project.title}</h3>
                <p className={classes.projectDescription}>
                  {project.short_description || 'لا يوجد وصف متاح'}
                </p>
                <div className={classes.actions}>
                  <Link
                    to={`/projects/${project.id || project._id}`}
                    className={classes.projectButton}
                  >
                    عرض التفاصيل
                  </Link>
                  {user?.role === 'Instructor' && (
                    <button
                      onClick={() => handleDelete(project.id || project._id)}
                      className={classes.deleteButton}
                    >
                      حذف
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProjects;
