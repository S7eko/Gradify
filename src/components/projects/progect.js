// src/Projects.js (هتبقى صفحة "حول المنصة")
import React from 'react';
import classes from './projects.module.css'; // تقدر تغير اسم الملف لو حبيت
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className={classes.aboutContainer}>
            <section className={classes.intro}>
                <h1 className={classes.mainTitle}>منصة مشاريع التخرج العالمية</h1>
                <p className={classes.mainDescription}>
                    مرحبًا بك في المنصة العالمية الأولى لعرض ومشاركة مشاريع التخرج من مختلف الجامعات حول العالم.
                    تتيح المنصة للطلاب والباحثين إمكانية تصفح، ومشاركة، واكتشاف المشاريع المتميزة في مجالات متعددة مثل التكنولوجيا، الهندسة، الطب، التصميم، وغيرها.
                </p>
            </section>

            <section className={classes.features}>
                <div className={classes.feature}>
                    <h2>هدفنا</h2>
                    <p>
                        نهدف إلى خلق مجتمع معرفي يربط الطلاب، الأساتذة، والمهتمين من مختلف الدول، ليتبادلوا الأفكار، الإلهام، والخبرات.
                    </p>
                </div>

                <div className={classes.feature}>
                    <h2>لماذا هذه المنصة؟</h2>
                    <p>
                        مشاريع التخرج غالبًا ما تُنسى بعد التخرج. نحن نمنحها حياة جديدة عبر توثيقها ومشاركتها مع العالم ليستفيد منها الآخرون.
                    </p>
                </div>

                <div className={classes.feature}>
                    <h2>من يمكنه الاستفادة؟</h2>
                    <p>
                        - الطلاب الباحثون عن أفكار جديدة<br />
                        - الأساتذة الجامعيون لتقييم الاتجاهات البحثية<br />
                        - الشركات لتوظيف المواهب المبدعة<br />
                        - أي شخص مهتم بالإبداع الأكاديمي
                    </p>
                </div>
            </section>

            <section className={classes.cta}>
                <h2>ابدأ رحلتك الآن!</h2>
                <p>سجّل وكن جزءًا من مجتمع الإبداع الطلابي.</p>
                <Link to="/register" className={classes.ctaBtn}>سجل الآن</Link>
            </section>
        </div>
    );
};

export default Projects;
