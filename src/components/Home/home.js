import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './home.module.css';
import Courses from '../projects/progect'; // مغيرتش الاستيراد

function Home() {
    const navigate = useNavigate();

    const handleBrowseProjects = () => {
        navigate('/challenges'); // لسه محتاج تغيرها لـ /projects لو انت عامل Route كده
    };

    return (
        <div className={classes.home}>
            <section className={classes.hero}>
                <h1 className={classes.heroTitle}>مرحبًا بك في منصة مشاريع التخرج</h1>
                <p className={classes.heroDescription}>
                    تصفح مشاريع التخرج السابقة، واستلهم أفكارًا لمشروعك، أو شارك مشروعك مع الآخرين.
                </p>
                <button onClick={handleBrowseProjects} className={classes.ctaBtn}>
                    تصفح المشاريع
                </button>
            </section>

            <section className={classes.features}>
                <div className={classes.feature}>
                    <h2 className={classes.featureTitle}>عرض المشاريع</h2>
                    <p className={classes.featureDescription}>
                        استعرض مشاريع الطلاب السابقة في مجالات متنوعة مثل الذكاء الاصطناعي، الويب، الأمن السيبراني، وغيرها.
                    </p>
                    <button onClick={handleBrowseProjects} className={classes.featureButton}>
                        عرض المشاريع
                    </button>
                </div>

                <div className={classes.feature}>
                    <h2 className={classes.featureTitle}>أفضل المشاريع</h2>
                    <p className={classes.featureDescription}>
                        تعرف على المشاريع الأعلى تقييمًا وشاهد ما حققه طلاب السنوات السابقة.
                    </p>
                    <button onClick={() => navigate('/top-projects')} className={classes.featureButton}>
                        أفضل المشاريع
                    </button>
                </div>

                <div className={classes.feature}>
                    <h2 className={classes.featureTitle}>لكل المستويات</h2>
                    <p className={classes.featureDescription}>
                        المشاريع متاحة لجميع التخصصات والمستويات، سواء كنت مبتدئًا أو متقدمًا.
                    </p>
                </div>
            </section>

            <Courses /> {/* نفس اسم المكون زي ما هو */}

            <section className={classes.cta}>
                <h2 className={classes.ctaTitle}>شارك مشروعك الآن!</h2>
                <p className={classes.ctaDescription}>
                    قم بالتسجيل وابدأ برفع مشروعك لتلهم طلاب آخرين، وكن جزءًا من مجتمع الإبداع الطلابي.
                </p>
                <button onClick={() => navigate('/register')} className={classes.ctaBtn}>
                    سجل وشارك مشروعك
                </button>
            </section>
        </div>
    );
}

export default Home;
