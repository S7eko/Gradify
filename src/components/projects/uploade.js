import React, { useState } from 'react';
import supabase from '../../supabase';
import classes from './UpLoader.module.css';

const UpLoader = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type === 'application/pdf') {
      setPdfFile(file);
    } else if (file.type.startsWith('image/')) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let pdfUrl = '';
      let imageUrl = '';

      // رفع ملف PDF
      if (pdfFile) {
        const { error: uploadPdfError } = await supabase.storage
          .from('project-files')
          .upload(`pdfs/${Date.now()}_${pdfFile.name}`, pdfFile);

        if (uploadPdfError) throw uploadPdfError;

        const { data: pdfPublic } = supabase.storage
          .from('project-files')
          .getPublicUrl(`pdfs/${Date.now()}_${pdfFile.name}`);
        pdfUrl = pdfPublic.publicUrl;
      }

      // رفع صورة
      if (imageFile) {
        const { error: uploadImageError } = await supabase.storage
          .from('project-files')
          .upload(`images/${Date.now()}_${imageFile.name}`, imageFile);

        if (uploadImageError) throw uploadImageError;

        const { data: imagePublic } = supabase.storage
          .from('project-files')
          .getPublicUrl(`images/${Date.now()}_${imageFile.name}`);
        imageUrl = imagePublic.publicUrl;
      }

      // إدخال البيانات لجدول projects
      const { error: insertError } = await supabase
        .from('projects')
        .insert([
          {
            title,
            short_description: shortDescription,
            long_description: longDescription,
            pdf_url: pdfUrl,
            image_url: imageUrl,
          },
        ]);

      if (insertError) throw insertError;

      alert('✅ تم رفع المشروع بنجاح');
      setTitle('');
      setShortDescription('');
      setLongDescription('');
      setPdfFile(null);
      setImageFile(null);
    } catch (error) {
      console.error('❌ خطأ أثناء رفع البيانات:', error.message);
      alert('حدث خطأ أثناء رفع المشروع');
    }
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
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>رفع صورة للمشروع:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={classes.input}
          />
        </div>
        <button type="submit" className={classes.submitButton}>
          رفع المشروع
        </button>
      </form>
    </div>
  );
};

export default UpLoader;
