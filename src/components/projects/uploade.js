import React, { useState } from 'react';
import Swal from 'sweetalert2';
import classes from './UpLoader.module.css';

const UpLoader = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type === 'application/pdf') {
      setPdfFile(file);
    } else if (file.type.startsWith('image/')) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!pdfFile) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يجب رفع ملف PDF للمشروع',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('short_description', shortDescription);
      formData.append('long_description', longDescription);

      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (pdfFile) {
        formData.append('pdfUrl', pdfFile);
      }

      const response = await fetch('https://project-uploader.vercel.app/api/v1/projects', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `خطأ في الخادم: ${response.status}`);
      }

      await Swal.fire({
        icon: 'success',
        title: 'تم بنجاح',
        text: 'تم رفع المشروع بنجاح',
        confirmButtonText: 'حسناً'
      });

      resetForm();
    } catch (error) {
      console.error('❌ خطأ أثناء رفع البيانات:', error.message);
      await Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: `حدث خطأ أثناء رفع المشروع: ${error.message}`,
        confirmButtonText: 'حسناً'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setShortDescription('');
    setLongDescription('');
    setPdfFile(null);
    setImageFile(null);
    setImagePreview(null);
    document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>رفع مشروع جديد</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <label className={classes.label}>اسم المشروع:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={classes.input}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>الوصف القصير:</label>
          <input
            type="text"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className={classes.input}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>الوصف الطويل:</label>
          <textarea
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            className={classes.textarea}
            required
          />
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label}>رفع ملف PDF:</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className={classes.input}
          />
          {pdfFile && (
            <p className={classes.fileInfo}>
              <i className="fas fa-file-pdf"></i> {pdfFile.name}
            </p>
          )}
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label}>رفع صورة للمشروع:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={classes.input}
          />
          {imagePreview && (
            <div className={classes.imagePreviewContainer}>
              <img
                src={imagePreview}
                alt="معاينة الصورة المختارة"
                className={classes.imagePreview}
              />
              <button
                type="button"
                className={classes.removeImage}
                onClick={() => {
                  setImageFile(null);
                  setImagePreview(null);
                  document.querySelector('input[type="file"][accept="image/*"]').value = '';
                }}
              >
                <i className="fas fa-times"></i> إزالة الصورة
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className={classes.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> جاري الرفع...
            </>
          ) : (
            <>
              <i className="fas fa-cloud-upload-alt"></i> رفع المشروع
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default UpLoader;