import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function JournalForm({ onSubmit, programs }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const processSubmit = async (data) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      // Find the program name if programId is provided
      if (data.programId) {
        const program = programs.find(p => p.id === data.programId);
        if (program) {
          data.programName = program.title;
        }
      }
      
      onSubmit(data);
    } catch (error) {
      console.error('Error submitting journal entry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(processSubmit)}>
      <div className="mb-4">
        <label className="form-label">Program Terkait (Opsional)</label>
        <select 
          className="form-input"
          {...register('programId')}
        >
          <option value="">-- Pilih Program --</option>
          {programs.map(program => (
            <option key={program.id} value={program.id}>
              {program.title}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="form-label">
          Waktu Tidur
        </label>
        <input
          type="time"
          className="form-input"
          {...register('sleepTime')}
        />
      </div>
      
      <div className="mb-4">
        <label className="form-label">
          Waktu Bangun
        </label>
        <input
          type="time"
          className="form-input"
          {...register('wakeTime')}
        />
      </div>
      
      <div className="mb-4">
        <label className="form-label">
          Pengalaman
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="form-textarea"
          placeholder="Ceritakan pengalaman Anda ketika bangun dan melakukan komunikasi subjektif..."
          {...register('experience', { required: 'Pengalaman harus diisi' })}
        ></textarea>
        {errors.experience && (
          <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label className="form-label">
          Hasil/Observasi (Opsional)
        </label>
        <textarea
          className="form-textarea"
          placeholder="Catat hasil atau perubahan yang Anda observasi setelah melakukan praktik..."
          {...register('results')}
        ></textarea>
      </div>
      
      <div className="mb-4">
        <label className="form-label">Mood Setelah Praktik</label>
        <select 
          className="form-input"
          {...register('mood')}
        >
          <option value="sangat-baik">Sangat Baik</option>
          <option value="baik">Baik</option>
          <option value="netral">Netral</option>
          <option value="kurang-baik">Kurang Baik</option>
          <option value="buruk">Buruk</option>
        </select>
      </div>
      
      <div className="text-right">
        <button 
          type="submit" 
          className="btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Menyimpan...' : 'Simpan Catatan'}
        </button>
      </div>
    </form>
  );
}

export default JournalForm;