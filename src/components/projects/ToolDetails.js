import { useParams } from "react-router-dom";
import styles from "./toolsdiscraption.module.css"; // استيراد ملف التنسيق
import toolsData from "./projectsData"; // استيراد البيانات من الملف المنفصل

const ToolDetails = () => {
  const { id } = useParams();
  const project = toolsData.find((item) => item.id === id);

  if (!project) return <div className="text-center mt-5">المشروع غير موجود</div>;

  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.description}</p>

      <h4 className={styles.subheading}>الأدوات المطلوبة:</h4>
      {project.tools && project.tools.length > 0 ? (
        <ul className={styles.list}>
          {project.tools.map((tool, idx) => (
            <li key={idx}>
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                {tool.name}
              </a>: {tool.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>لا توجد أدوات مذكورة لهذا المشروع.</p>
      )}

      <h4 className={styles.subheading}>خطوات التنفيذ:</h4>
      {project.steps && project.steps.length > 0 ? (
        <ol className={styles.list}>
          {project.steps.map((step, idx) => (
            <li key={idx}>
              <strong>{step.title}</strong>
              <ul>
                {step.details.map((detail, detailIdx) => (
                  <li key={detailIdx}>{detail}</li>
                ))}
              </ul>
              {step.resources && step.resources.length > 0 && (
                <div>
                  <p>الموارد:</p>
                  <ul>
                    {step.resources.map((resource, resourceIdx) => (
                      <li key={resourceIdx}>
                        {resource.type}:{" "}
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ol>
      ) : (
        <p>لا توجد خطوات مذكورة لهذا المشروع.</p>
      )}

      {/* قسم الأخطاء الشائعة */}
      <h4 className={styles.subheading}>الأخطاء الشائعة:</h4>
      {project.commonMistakes && project.commonMistakes.length > 0 ? (
        <ul className={styles.list}>
          {project.commonMistakes.map((mistake, idx) => (
            <li key={idx}>{mistake}</li>
          ))}
        </ul>
      ) : (
        <p>لا توجد أخطاء شائعة مذكورة لهذا المشروع.</p>
      )}

      {/* قسم نصائح النجاح */}
      <h4 className={styles.subheading}>نصائح لنجاح المشروع:</h4>
      {project.successTips && project.successTips.length > 0 ? (
        <ul className={styles.list}>
          {project.successTips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      ) : (
        <p>لا توجد نصائح لنجاح المشروع مذكورة.</p>
      )}

      <h4 className={styles.subheading}>أمثلة مشاريع:</h4>
      {project.projectExamples && project.projectExamples.length > 0 ? (
        <div className={styles.examplesContainer}>
          {project.projectExamples.map((example, idx) => (
            <div key={idx} className={styles.exampleCard}>
              <h5>{example.title}</h5>
              <p>{example.description}</p>
              <p>
                <strong>التقنيات المستخدمة:</strong> {example.technologies.join("، ")}
              </p>
              {example.githubLink && (
                <a href={example.githubLink} target="_blank" rel="noopener noreferrer">
                  عرض على GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>لا توجد أمثلة مشاريع مذكورة.</p>
      )}

      <h4 className={styles.subheading}>معايير التقييم:</h4>
      {project.evaluationCriteria && project.evaluationCriteria.length > 0 ? (
        <ul className={styles.list}>
          {project.evaluationCriteria.map((criterion, idx) => (
            <li key={idx}>
              <strong>{criterion.criterion}</strong> - {criterion.weight}: {criterion.details}
            </li>
          ))}
        </ul>
      ) : (
        <p>لا توجد معايير تقييم مذكورة لهذا المشروع.</p>
      )}

      {/* قسم منصات البلوك تشين (يظهر فقط إذا كانت موجودة) */}
      {project.blockchainPlatforms && project.blockchainPlatforms.length > 0 && (
        <>
          <h4 className={styles.subheading}>منصات البلوك تشين:</h4>
          <ul className={styles.list}>
            {project.blockchainPlatforms.map((platform, idx) => (
              <li key={idx}>
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  {platform.name}
                </a>: {platform.description}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* قسم نصائح الأمان (يظهر فقط إذا كانت موجودة) */}
      {project.securityTips && project.securityTips.length > 0 && (
        <>
          <h4 className={styles.subheading}>نصائح الأمان:</h4>
          <ul className={styles.list}>
            {project.securityTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </>
      )}

      {/* قسم مجموعات البيانات (يظهر فقط إذا كانت موجودة) */}
      {project.datasets && project.datasets.length > 0 && (
        <>
          <h4 className={styles.subheading}>مجموعات البيانات المقترحة:</h4>
          <ul className={styles.list}>
            {project.datasets.map((dataset, idx) => (
              <li key={idx}>
                <a href={dataset.link} target="_blank" rel="noopener noreferrer">
                  {dataset.name}
                </a>: {dataset.description}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* قسم قوالب التقارير (يظهر فقط إذا كانت موجودة) */}
      {project.reportTemplate && (
        <>
          <h4 className={styles.subheading}>قالب التقرير:</h4>
          <div className={styles.reportTemplate}>
            <h5>هيكل التقرير:</h5>
            <ol>
              {project.reportTemplate.structure.map((section, idx) => (
                <li key={idx}>{section}</li>
              ))}
            </ol>

            {project.reportTemplate.tips && (
              <>
                <h5>نصائح للكتابة:</h5>
                <ul>
                  {project.reportTemplate.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </>
            )}

            {project.reportTemplate.downloadLink && (
              <a href={project.reportTemplate.downloadLink} className={styles.downloadLink}>
                تحميل قالب التقرير
              </a>
            )}
          </div>
        </>
      )}

      {/* قسم نصائح العرض التقديمي (يظهر فقط إذا كانت موجودة) */}
      {project.presentationTips && project.presentationTips.length > 0 && (
        <>
          <h4 className={styles.subheading}>نصائح العرض التقديمي:</h4>
          <ul className={styles.list}>
            {project.presentationTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ToolDetails;