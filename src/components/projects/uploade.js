import React, { useState } from 'react';
import Swal from 'sweetalert2';
import classes from './UpLoader.module.css';

const UpLoader = () => {
  // Form state
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Handle file selection
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

  // Handle form submission with progress tracking
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!title || !shortDescription || !longDescription || !pdfFile) {
      Swal.fire({
        icon: 'error',
        title: 'بيانات ناقصة',
        text: 'الرجاء ملء جميع الحقول المطلوبة ورفع ملف PDF',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    setIsLoading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('short_description', shortDescription);
    formData.append('long_description', longDescription);
    formData.append('pdfUrl', pdfFile);
    if (imageFile) formData.append('image', imageFile);

    const xhr = new XMLHttpRequest();

    // Progress tracking
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percentComplete);
      }
    });

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        setIsLoading(false);

        if (xhr.status >= 200 && xhr.status < 300) {
          // Success
          Swal.fire({
            icon: 'success',
            title: 'تم الرفع بنجاح',
            text: 'تم حفظ المشروع في قاعدة البيانات',
            confirmButtonText: 'حسناً'
          }).then(() => {
            resetForm();
          });
        } else {
          // Error
          let errorMessage = 'حدث خطأ أثناء رفع المشروع';
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            errorMessage = errorResponse.message || errorMessage;
          } catch (e) {
            console.error('Error parsing response:', e);
          }

          Swal.fire({
            icon: 'error',
            title: 'خطأ في الرفع',
            text: errorMessage,
            confirmButtonText: 'حسناً'
          });
        }
      }
    };

    xhr.open('POST', 'https://project-uploader.vercel.app/api/v1/projects', true);
    xhr.send(formData);
  };

  // Reset form fields
  const resetForm = () => {
    setTitle('');
    setShortDescription('');
    setLongDescription('');
    setPdfFile(null);
    setImageFile(null);
    setImagePreview(null);
    setUploadProgress(0);
    document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>نموذج رفع مشروع جديد</h1>

      <form onSubmit={handleSubmit} className={classes.form}>
        {/* Project Title */}
        <div className={classes.formGroup}>
          <label className={classes.label}>عنوان المشروع *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={classes.input}
            placeholder="أدخل عنوان المشروع"
            required
          />
        </div>

        {/* Short Description */}
        <div className={classes.formGroup}>
          <label className={classes.label}>وصف مختصر *</label>
          <input
            type="text"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className={classes.input}
            placeholder="وصف مختصر للمشروع"
            required
          />
        </div>

        {/* Long Description */}
        <div className={classes.formGroup}>
          <label className={classes.label}>وصف تفصيلي *</label>
          <textarea
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            className={classes.textarea}
            placeholder="وصف كامل للمشروع"
            rows="5"
            required
          />
        </div>

        {/* PDF File Upload */}
        <div className={classes.formGroup}>
          <label className={classes.label}>ملف المشروع (PDF) *</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className={classes.fileInput}
            required
          />
          {pdfFile && (
            <div className={classes.fileInfo}>
              <i className="fas fa-file-pdf"></i>
              <span>{pdfFile.name}</span>
              <button
                type="button"
                onClick={() => setPdfFile(null)}
                className={classes.removeFile}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
        </div>

        {/* Image Upload */}
        <div className={classes.formGroup}>
          <label className={classes.label}>صورة المشروع (اختياري)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={classes.fileInput}
          />
          {imagePreview && (
            <div className={classes.imagePreviewContainer}>
              <img
                src={imagePreview}
                alt="معاينة الصورة"
                className={classes.imagePreview}
              />
              <button
                type="button"
                onClick={() => {
                  setImageFile(null);
                  setImagePreview(null);
                }}
                className={classes.removeImage}
              >
                <i className="fas fa-times"></i> إزالة
              </button>
            </div>
          )}
        </div>

        {/* Submit Button with Integrated Progress */}
        <div className={classes.formGroup}>
          <button
            type="submit"
            className={`${classes.submitButton} ${isLoading ? classes.uploading : ''}`}
            disabled={isLoading}
          >
            <span className={classes.buttonContent}>
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>{uploadProgress}%</span>
                </>
              ) : (
                <>
                  <i className="fas fa-cloud-upload-alt"></i>
                  <span>رفع المشروع</span>
                </>
              )}
            </span>
            {isLoading && (
              <span
                className={classes.buttonProgress}
                style={{ width: `${uploadProgress}%` }}
              ></span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpLoader;