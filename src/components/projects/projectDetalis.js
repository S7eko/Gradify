import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import classes from './ProjectDetails.module.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // تنسيق البيانات المستلمة من الـ API لتناسب هيكل التطبيق
  const normalizeProjectData = (apiData) => {
    const actualData = apiData.data || apiData;
    return {
      id: actualData._id || actualData.id || id,
      title: actualData.title || `المشروع ${id}`,
      image: actualData.image || actualData.image_url || null,
      short_description: actualData.short_description || 'لا يوجد وصف قصير متاح.',
      long_description: actualData.long_description || 'لا يوجد وصف كامل متاح.',
      pdf_url: actualData.pdfUrl || actualData.pdf_url || null,
      rawData: apiData,
    };
  };

  // جلب تفاصيل المشروع عند تحميل الصفحة أو تغيير الـ ID
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://project-uploader.vercel.app/api/v1/projects/${id}`);

        if (!response.ok) {
          throw new Error(`فشل الاتصال بالسيرفر: ${response.status}`);
        }

        const apiData = await response.json();
        const normalizedData = normalizeProjectData(apiData);
        setProject(normalizedData);
      } catch (err) {
        console.error('حدث خطأ أثناء جلب البيانات:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  // فتح ملف PDF في نافذة جديدة
  const handleOpenPdf = (pdfUrl) => {
    const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');

  };

  // معالجة حالات التحميل أو الخطأ أو عدم وجود مشروع
  if (loading) {
    return <div className={classes.loadingContainer}>جاري تحميل بيانات المشروع...</div>;
  }

  if (error) {
    return (
      <div className={classes.errorContainer}>
        <h2>حدث خطأ أثناء تحميل المشروع</h2>
        <p>{error}</p>
        <Link to="/projects" className={classes.backButton}>
          العودة إلى قائمة المشاريع
        </Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={classes.notFoundContainer}>
        <h2>المشروع غير متوفر</h2>

        <Link to="/AllProjects" className={classes.backButton}>
          الرجوع إلى القائمة
        </Link>
      </div>
    );
  }

  // واجهة عرض تفاصيل المشروع
  return (
    <div className={classes.projectDetailsContainer}>
      <div className={classes.projectHeader}>
        <Link to="/AllProjects" className={classes.backButton}>
          ← 
        </Link>
      </div>

      <div className={classes.projectContent}>
        {/* صورة المشروع */}
        <div className={classes.imageContainer}>
          <img
            src={project.image || 'https://via.placeholder.com/800x400?text=لا+توجد+صورة'}
            alt={project.title}
            className={classes.projectImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/800x400?text=تعذر+تحميل+الصورة';
            }}
          />
        </div>

        {/* تفاصيل المشروع */}
        <div className={classes.detailsSection}>
          {/* عنوان المشروع */}
          <div className={classes.descriptionBox}>
            <h2 className={classes.sectionTitle}>عنوان المشروع</h2>
            <p className={classes.projectDescription}>{project.title}</p>
          </div>

          {/* الوصف المختصر */}
          <div className={classes.descriptionBox}>
            <h2 className={classes.sectionTitle}>الوصف المختصر</h2>
            <p className={classes.projectDescription}>{project.short_description}</p>
          </div>

          {/* الوصف التفصيلي */}
          <div className={classes.descriptionBox}>
            <h2 className={classes.sectionTitle}>الوصف التفصيلي</h2>
            <p className={classes.fullDescription}>{project.long_description}</p>
          </div>

          {/* قسم PDF */}
          {project.pdf_url && (
            <div className={classes.pdfSection}>
              <h2 className={classes.sectionTitle}>ملف المشروع (PDF)</h2>
              <div className={classes.pdfActions}>
                <button
                  onClick={() => handleOpenPdf(project.pdf_url)}
                  className={classes.pdfButton}
                >
                  📄 عرض الملف
                </button>
            
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
