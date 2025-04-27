import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppContext } from '../../core/context/AppProvider';
import { v4 as uuidv4 } from 'uuid';

function ProgramCreation() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const targetType = watch('targetType', 'individual');
  
  const { addProgram } = useAppContext();
  const navigate = useNavigate();
  
  const steps = [
    { number: 1, name: 'Target & Tujuan' },
    { number: 2, name: 'Pemrograman Pikiran' },
    { number: 3, name: 'Komunikasi & Visualisasi' },
  ];
  
  const onSubmit = async (data) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const newProgram = {
        ...data,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
      };
      
      addProgram(newProgram);
      navigate('/programs');
    } catch (error) {
      console.error('Error creating program:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <Link to="/programs" className="text-indigo-600 hover:text-indigo-700 mb-2 inline-block">&larr; Kembali ke Program Saya</Link>
        <h1 className="text-3xl font-bold">Buat Program Subjective Communication</h1>
        <p className="text-slate-600">
          Ikuti langkah-langkah berikut untuk membuat program komunikasi subjektif Anda.
        </p>
      </header>
      
      {/* Progress steps */}
      <div className="flex mb-8">
        {steps.map((step) => (
          <div key={step.number} className="flex-1">
            <div className={`flex items-center ${step.number !== steps.length ? 'after:content-[""] after:w-full after:h-1 after:border-b after:border-gray-300 after:border-4 after:inline-block' : ''}`}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= step.number ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'} transition-colors duration-200`}>
                {step.number}
              </div>
            </div>
            <div className="text-center mt-2">
              <span className={`text-sm ${currentStep >= step.number ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                {step.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Target & Tujuan */}
        {currentStep === 1 && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Target & Tujuan</h2>
            
            <div className="mb-4">
              <label className="form-label">
                Judul Program
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Contoh: Mendapatkan Klien Baru"
                {...register('title', { required: 'Judul program harus diisi' })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label className="form-label">
                Tipe Target
                <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="individual"
                    className="mr-2"
                    {...register('targetType', { required: true })}
                  />
                  <span>Individual</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="group"
                    className="mr-2"
                    {...register('targetType', { required: true })}
                  />
                  <span>Kelompok/Massal</span>
                </label>
              </div>
            </div>
            
            {targetType === 'individual' ? (
              <div className="mb-4">
                <label className="form-label">
                  Nama Target
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Nama lengkap target komunikasi"
                  {...register('targetName', { 
                    required: targetType === 'individual' ? 'Nama target harus diisi' : false
                  })}
                />
                {errors.targetName && (
                  <p className="text-red-500 text-sm mt-1">{errors.targetName.message}</p>
                )}
              </div>
            ) : (
              <div className="mb-4">
                <label className="form-label">
                  Deskripsi Kelompok Target
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Contoh: Calon Pelanggan Bisnis Saya"
                  {...register('targetGroup', { 
                    required: targetType === 'group' ? 'Deskripsi kelompok target harus diisi' : false
                  })}
                />
                {errors.targetGroup && (
                  <p className="text-red-500 text-sm mt-1">{errors.targetGroup.message}</p>
                )}
              </div>
            )}
            
            <div className="mb-4">
              <label className="form-label">
                Tujuan Komunikasi
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="form-textarea"
                placeholder="Jelaskan apa yang ingin Anda capai dengan komunikasi subjektif ini..."
                {...register('goal', { required: 'Tujuan komunikasi harus diisi' })}
              ></textarea>
              {errors.goal && (
                <p className="text-red-500 text-sm mt-1">{errors.goal.message}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label className="form-label">
                Manfaat Bagi Target (Win-Win Solution)
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="form-textarea"
                placeholder="Jelaskan manfaat yang akan diperoleh target jika memenuhi keinginan Anda..."
                {...register('benefits', { required: 'Manfaat bagi target harus diisi' })}
              ></textarea>
              {errors.benefits && (
                <p className="text-red-500 text-sm mt-1">{errors.benefits.message}</p>
              )}
            </div>
            
            <div className="text-right">
              <button 
                type="button"
                className="btn-primary"
                onClick={nextStep}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Pemrograman Pikiran */}
        {currentStep === 2 && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Pemrograman Pikiran</h2>
            
            <div className="mb-6">
              <p className="text-slate-600 mb-4">
                Pemrograman pikiran dilakukan sebelum tidur dengan mengucapkan kalimat pemrograman 10-20 kali.
                Kalimat ini membantu pikiran bawah sadar Anda untuk terhubung dengan target saat Anda tidur.
              </p>
              
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <h3 className="font-medium mb-2">Contoh Kalimat Pemrograman:</h3>
                <p className="italic">
                  "Malam ini, saat saya tidur, pikiran saya akan berkomunikasi dengan pikiran [nama target]. 
                  Saya akan terbangun saat kontak pikiran terjadi dan saya akan mengingat untuk tetap terjaga."
                </p>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="form-label">
                Kalimat Pemrograman
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="form-textarea"
                placeholder="Tuliskan kalimat pemrograman yang akan Anda ucapkan sebelum tidur..."
                {...register('programmingSentence', { required: 'Kalimat pemrograman harus diisi' })}
              ></textarea>
              {errors.programmingSentence && (
                <p className="text-red-500 text-sm mt-1">{errors.programmingSentence.message}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label className="form-label">
                Cara Mencapai Kondisi Alfa
              </label>
              <select
                className="form-input"
                {...register('alphaMethod')}
              >
                <option value="countdown">Hitungan Mundur (50-1)</option>
                <option value="visualization">Visualisasi Tempat Damai</option>
                <option value="breathing">Teknik Pernapasan</option>
                <option value="centering">Centering Exercise (Jose Silva)</option>
              </select>
            </div>
            
            <div className="flex justify-between">
              <button 
                type="button"
                className="btn-secondary"
                onClick={prevStep}
              >
                Kembali
              </button>
              <button 
                type="button"
                className="btn-primary"
                onClick={nextStep}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Komunikasi & Visualisasi */}
        {currentStep === 3 && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Komunikasi & Visualisasi</h2>
            
            <div className="mb-6">
              <p className="text-slate-600 mb-4">
                Setelah mencapai kondisi alfa, Anda akan melakukan komunikasi subjektif dengan target
                kemudian melakukan visualisasi kreatif tentang hasil yang diinginkan.
              </p>
            </div>
            
            <div className="mb-4">
              <label className="form-label">
                Kalimat Komunikasi Subjektif
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="form-textarea"
                placeholder="Contoh: 'Halo [nama target]. Anda akan menemukan bahwa produk saya sangat bermanfaat untuk bisnis Anda...'"
                {...register('communicationScript', { required: 'Kalimat komunikasi subjektif harus diisi' })}
              ></textarea>
              {errors.communicationScript && (
                <p className="text-red-500 text-sm mt-1">{errors.communicationScript.message}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label className="form-label">
                Visualisasi Kreatif
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="form-textarea"
                placeholder="Jelaskan bagaimana Anda memvisualisasikan hasil yang diinginkan (past sense)..."
                {...register('visualization', { required: 'Visualisasi kreatif harus diisi' })}
              ></textarea>
              {errors.visualization && (
                <p className="text-red-500 text-sm mt-1">{errors.visualization.message}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label className="form-label">Pengingat</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="setReminder"
                  className="mr-2"
                  {...register('setReminder')}
                />
                <label htmlFor="setReminder">
                  Ingatkan saya untuk melakukan pemrograman pikiran sebelum tidur
                </label>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                type="button"
                className="btn-secondary"
                onClick={prevStep}
              >
                Kembali
              </button>
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Menyimpan...' : 'Simpan Program'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default ProgramCreation;