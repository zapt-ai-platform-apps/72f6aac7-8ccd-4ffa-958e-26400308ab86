import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../core/context/AppProvider';
import * as Sentry from '@sentry/browser';

function ProgramExecution() {
  const { id } = useParams();
  const { programs, loading } = useAppContext();
  const [program, setProgram] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [timer, setTimer] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const navigate = useNavigate();
  
  // Find the program when the component loads
  useEffect(() => {
    if (!loading && programs.length > 0) {
      const foundProgram = programs.find(p => p.id === id);
      if (foundProgram) {
        setProgram(foundProgram);
      }
    }
  }, [id, programs, loading]);
  
  // Set up timer for alpha state
  useEffect(() => {
    if (currentStep === 3 && !timer) {
      const intervalId = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
      setTimer(intervalId);
    } else if (currentStep !== 3 && timer) {
      clearInterval(timer);
      setTimer(null);
      setTimeElapsed(0);
    }
    
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [currentStep, timer]);
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  const renderAlphaMethodGuide = () => {
    const method = program?.alphaMethod || 'countdown';
    
    switch (method) {
      case 'countdown':
        return (
          <div>
            <h3 className="font-medium mb-2">Hitungan Mundur:</h3>
            <p>
              Mulai menghitung mundur dari 50 ke 1 dengan perlahan. Bayangkan setiap angka saat Anda menghitung.
              Rasakan diri Anda semakin rileks dengan setiap hitungan.
            </p>
          </div>
        );
      case 'visualization':
        return (
          <div>
            <h3 className="font-medium mb-2">Visualisasi Tempat Damai:</h3>
            <p>
              Bayangkan diri Anda berada di tempat yang sangat damai dan indah. Rasakan suasananya,
              dengarkan suara-suara di sekitar, rasakan angin sepoi-sepoi. Biarkan diri Anda tenggelam
              dalam perasaan damai.
            </p>
          </div>
        );
      case 'breathing':
        return (
          <div>
            <h3 className="font-medium mb-2">Teknik Pernapasan:</h3>
            <p>
              Tarik napas dalam selama 4 hitungan, tahan selama 4 hitungan, dan hembuskan selama 8 hitungan.
              Ulangi pola ini sambil fokus pada aliran udara yang masuk dan keluar dari tubuh Anda.
            </p>
          </div>
        );
      case 'centering':
        return (
          <div>
            <h3 className="font-medium mb-2">Centering Exercise (Jose Silva):</h3>
            <p>
              Rilekskan tubuh Anda dari kepala hingga kaki secara bertahap. Bayangkan angka 3 tiga kali dan rasakan
              diri Anda semakin rileks. Lanjutkan dengan membayangkan angka 2 tiga kali, dan akhirnya angka 1 tiga kali.
            </p>
          </div>
        );
      default:
        return (
          <div>
            <h3 className="font-medium mb-2">Hitungan Mundur:</h3>
            <p>
              Mulai menghitung mundur dari 50 ke 1 dengan perlahan. Bayangkan setiap angka saat Anda menghitung.
              Rasakan diri Anda semakin rileks dengan setiap hitungan.
            </p>
          </div>
        );
    }
  };
  
  if (loading) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p>Memuat program...</p>
      </div>
    );
  }
  
  if (!program) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="card text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Program Tidak Ditemukan</h2>
          <p className="text-slate-600 mb-4">
            Program yang Anda cari tidak ditemukan atau telah dihapus.
          </p>
          <Link to="/programs" className="btn-primary">
            Kembali ke Daftar Program
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <Link to="/programs" className="text-indigo-600 hover:text-indigo-700 mb-2 inline-block">&larr; Kembali ke Program Saya</Link>
        <h1 className="text-3xl font-bold">{program.title}</h1>
        <p className="text-slate-600">
          Praktikkan program komunikasi subjektif ini dengan mengikuti instruksi di bawah.
        </p>
      </header>
      
      {/* Progress indicator */}
      <div className="mb-6 bg-white rounded-full h-2.5 shadow-sm">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${(currentStep / 5) * 100}%` }}
        ></div>
      </div>
      
      {/* Step 1: Persiapan */}
      {currentStep === 1 && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">1. Persiapan</h2>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">Target:</h3>
            <p className="text-slate-600">
              {program.targetType === 'individual' ? program.targetName : program.targetGroup}
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">Tujuan Komunikasi:</h3>
            <p className="text-slate-600">
              {program.goal}
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">Manfaat bagi Target:</h3>
            <p className="text-slate-600">
              {program.benefits}
            </p>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
            <h3 className="font-medium text-amber-800 mb-1">Penting:</h3>
            <p className="text-amber-700">
              Pastikan Anda berada di lingkungan yang tenang dan tidak akan terganggu.
              Matikan notifikasi perangkat Anda dan atur waktu yang cukup untuk praktik ini.
            </p>
          </div>
          
          <div className="text-right">
            <button onClick={nextStep} className="btn-primary">
              Lanjutkan
            </button>
          </div>
        </div>
      )}
      
      {/* Step 2: Pemrograman Pikiran */}
      {currentStep === 2 && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">2. Pemrograman Pikiran Sebelum Tidur</h2>
          
          <div className="mb-4">
            <p className="text-slate-600 mb-4">
              Sebelum tidur, ucapkan kalimat pemrograman berikut 10-20 kali sambil membayangkan target Anda:
            </p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <p className="italic text-indigo-800">
                {program.programmingSentence}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Langkah-langkah:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Berbaring di tempat tidur dalam posisi yang nyaman</li>
              <li>Rilekskan tubuh Anda dengan napas dalam</li>
              <li>Bayangkan target Anda dengan jelas</li>
              <li>Ucapkan kalimat pemrograman 10-20 kali</li>
              <li>Setelah selesai, biarkan diri Anda tertidur secara alami</li>
            </ol>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-700">
              Saat Anda terbangun di malam hari (kemungkinan karena kontak pikiran telah terjadi),
              lanjutkan ke langkah berikutnya. Jika Anda tidak terbangun malam ini, coba lagi besok malam.
            </p>
          </div>
          
          <div className="flex justify-between">
            <button onClick={prevStep} className="btn-secondary">
              Kembali
            </button>
            <button onClick={nextStep} className="btn-primary">
              Lanjutkan (Saya Sudah Bangun)
            </button>
          </div>
        </div>
      )}
      
      {/* Step 3: Kondisi Alfa */}
      {currentStep === 3 && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">3. Mencapai Kondisi Alfa</h2>
          
          <div className="mb-4">
            <p className="text-slate-600 mb-4">
              Setelah terbangun, tetap di tempat tidur dalam posisi nyaman dan ikuti panduan berikut untuk 
              mencapai kondisi gelombang alfa (7-13 Hz).
            </p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              {renderAlphaMethodGuide()}
            </div>
          </div>
          
          <div className="mb-6 text-center">
            <div className="text-3xl font-mono mb-2">{formatTime(timeElapsed)}</div>
            <p className="text-sm text-slate-500">Waktu dalam kondisi alfa</p>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h3 className="font-medium text-green-800 mb-1">Tanda-tanda Kondisi Alfa:</h3>
            <ul className="list-disc pl-6 text-green-700">
              <li>Perasaan sangat rileks namun tetap sadar</li>
              <li>Sensasi tubuh yang terasa ringan atau mengambang</li>
              <li>Pikiran yang tenang namun fokus</li>
              <li>Perasaan damai dan harmonis</li>
            </ul>
          </div>
          
          <div className="flex justify-between">
            <button onClick={prevStep} className="btn-secondary">
              Kembali
            </button>
            <button onClick={nextStep} className="btn-primary">
              Lanjutkan
            </button>
          </div>
        </div>
      )}
      
      {/* Step 4: Komunikasi Subjektif */}
      {currentStep === 4 && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">4. Melakukan Komunikasi Subjektif</h2>
          
          <div className="mb-4">
            <p className="text-slate-600 mb-4">
              Tetap dalam kondisi alfa, bayangkan target Anda berada di hadapan Anda dan lakukan komunikasi subjektif berikut:
            </p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <p className="italic text-indigo-800 whitespace-pre-line">
                {program.communicationScript}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Langkah-langkah:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Bayangkan target Anda dengan jelas di hadapan Anda</li>
              <li>Sapa target secara mental dengan namanya</li>
              <li>Sampaikan pesan komunikasi subjektif dari atas</li>
              <li>Ulangi pesan tersebut 3-7 kali dengan penuh keyakinan</li>
              <li>Pastikan emosi Anda positif dan tulus</li>
            </ol>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
            <p className="text-purple-700">
              Fokus pada prinsip win-win solution. Pesan yang menguntungkan kedua belah pihak akan jauh lebih efektif.
            </p>
          </div>
          
          <div className="flex justify-between">
            <button onClick={prevStep} className="btn-secondary">
              Kembali
            </button>
            <button onClick={nextStep} className="btn-primary">
              Lanjutkan
            </button>
          </div>
        </div>
      )}
      
      {/* Step 5: Visualisasi Kreatif */}
      {currentStep === 5 && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">5. Visualisasi Kreatif & Penutupan</h2>
          
          <div className="mb-4">
            <p className="text-slate-600 mb-4">
              Setelah komunikasi subjektif, lakukan visualisasi kreatif dengan formula "past sense" berikut:
            </p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <p className="italic text-indigo-800 whitespace-pre-line">
                {program.visualization}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Langkah-langkah Penutupan:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Tarik napas dalam beberapa kali</li>
              <li>Rasakan rasa syukur dan kepuasan</li>
              <li>Perlahan-lahan kembalikan kesadaran Anda</li>
              <li>Buka mata dan gerakkan tangan dan kaki secara perlahan</li>
              <li>Anda dapat kembali tidur jika masih malam</li>
            </ol>
          </div>
          
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
            <h3 className="font-medium text-teal-800 mb-1">Tips:</h3>
            <ul className="list-disc pl-6 text-teal-700">
              <li>Catat pengalaman Anda di jurnal praktik</li>
              <li>Lakukan praktik secara teratur untuk hasil optimal</li>
              <li>Perhatikan tanda-tanda bahwa komunikasi subjektif telah berhasil</li>
              <li>Jangan menyerah jika tidak langsung mendapat hasil</li>
            </ul>
          </div>
          
          <div className="flex justify-between">
            <button onClick={prevStep} className="btn-secondary">
              Kembali
            </button>
            <div className="flex space-x-3">
              <Link to="/journal" className="btn-secondary">
                Catat di Jurnal
              </Link>
              <Link to="/programs" className="btn-primary">
                Selesai
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgramExecution;