import React from 'react';
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom
import classes from './Allprojects.module.css'; // تأكد من أن ملف CSS موجود

// افتراضًا، لديك بيانات للمشاريع
const projectsData = [
  {
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'المشروع 1',
    description: 'وصف قصير للمشروع.',
    id: 1 // إضافة معرّف فريد لكل مشروع
  },
  {
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'المشروع 2',
    description: 'نظرة عامة قصيرة على المشروع الثاني.',
    id: 2
  },
  {
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'المشروع 3',
    description: 'وصف لهذا المشروع الثالث.',
    id: 3
  },
  // أضف المزيد من المشاريع حسب الحاجة
];

const AllProjects = () => {
  return (
    <div className={classes.projectsContainer}>
      <h2 className={classes.title}>جميع المشاريع</h2>
      <div className={classes.projectList}>
        {projectsData.map((project) => (
          <div key={project.id} className={classes.projectCard}>
            <img src={project.image} alt={project.title} className={classes.projectImage} />
            <h3 className={classes.projectTitle}>{project.title}</h3>
            <p className={classes.projectDescription}>{project.description}</p>
            {/* استخدام Link للتنقل إلى صفحة التفاصيل */}
            <Link to={`/projectdetails/${project.id}`} className={classes.projectButton}>عرض التفاصيل</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
