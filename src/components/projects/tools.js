import { useNavigate } from "react-router-dom";
import styles from "./tools.module.css";
import projects from "./projectsData";

const Tools = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>الدليل التقني لمشاريع التخرج</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            onClick={() => navigate(`/tools/${project.id}`)}
          >
            <div className={styles.cardBody}>
              <img
                src={project.imageUrl }
                alt={project.title}
                className={styles.cardImage}
              />
              <h4 className={styles.title}>{project.title}</h4>
              <p className={styles.description}>{project.description}</p>
              <h6 className={styles.subheading}>الأدوات الأساسية:</h6>
              <ul className={styles.list}>
                {project.tools.map((tool, idx) => (
                  <li key={idx}>{tool.name}</li>
                ))}
              </ul>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
