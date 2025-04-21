import React, { useState } from "react";
import classes from './content.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Input Field Component
const InputField = ({ type, id, placeholder, value, onChange }) => (
  <div className={classes.form_group}>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError("");
    setSuccess("");
    setLoading(true);

    if (!name || !email || !password) {
      setError("جميع الحقول مطلوبة");
      setLoading(false);
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%&!*^])[A-Za-z\d@#$%&!*^]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل، ورمز خاص مثل (@, #, $, %)، وطول لا يقل عن 8 أحرف.");
      setLoading(false);
      return;
    }

    const userData = {
      email,
      password,
      userName: name,
      role,
    };

    try {
      const response = await fetch(
        "https://skillbridge.runasp.net/api/Users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const rawResponse = await response.text();
      console.log("Raw Response:", rawResponse);

      let result;
      try {
        result = JSON.parse(rawResponse);
      } catch (jsonError) {
        console.error("خطأ في تحويل الرد إلى JSON:", jsonError);
        setError("حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.");
        setLoading(false);
        return;
      }

      if (!response.ok) {
        if (result.errors) {
          const errorMessages = Object.values(result.errors).join(", ");
          setError(errorMessages);
        } else {
          setError(result.message || "فشل التسجيل. يرجى المحاولة مرة أخرى.");
        }
        setLoading(false);
        return;
      }

      setSuccess("تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
    } catch (err) {
      console.error("خطأ في التسجيل:", err);
      setError("حدث خطأ. يرجى المحاولة مرة أخرى لاحقًا.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.login}>
      <div className={classes.login_content}>

        <div className={classes.login_body}>
          {/* Left Side */}
          <section className={classes.login_body_left}>
            <div className={classes.login_body_left_image}>
              <h1>One Step Closer to Your Dream</h1>
              <p>A free E-Learning service ready to help you become an expert.</p>
            </div>
          </section>

          {/* Right Side */}
          <section className={classes.login_body_right}>
            <div className={classes.login_body_right_text}>
              <h1>تسجيل</h1>
              <p>استعد لمستقبل مليء بالنجوم.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <InputField
                type="text"
                id="name"
                placeholder="الاسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                type="email"
                id="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                id="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Role Selection */}
              <div className={classes.select}>
                <label className={`${classes.role} ${role === "student" ? classes.active : ""}`}>
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={role === "student"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  طالب
                </label>

                <label className={`${classes.role} ${role === "instructor" ? classes.active : ""}`}>
                  <input
                    type="radio"
                    name="role"
                    value="instructor"
                    checked={role === "instructor"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  مدرس
                </label>
              </div>

              <div className={classes.form_group}>
                <button type="submit" disabled={loading}>
                  {loading ? "جاري التسجيل..." : "تسجيل"}
                </button>
              </div>

              {error && <p className={classes.error}>{error}</p>}
              {success && <p className={classes.success}>{success}</p>}

              <span>
                لديك حساب بالفعل؟{" "}
                <a href="/course/login">تسجيل الدخول</a>
              </span>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
