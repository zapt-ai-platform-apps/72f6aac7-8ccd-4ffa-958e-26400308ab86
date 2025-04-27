import React from 'react';
import { Link } from 'react-router-dom';
import StepCard from './StepCard';

const steps = [
  { 
    id: 1, 
    title: 'Penentuan Target', 
    description: 'Tentukan target komunikasi Anda, baik individu maupun massal.',
    path: '/target',
    icon: '👤'
  },
  { 
    id: 2, 
    title: 'Pemrograman Pikiran', 
    description: 'Program pikiran Anda sebelum tidur dengan kalimat afirmasi.',
    path: '/programming',
    icon: '💭'
  },
  { 
    id: 3, 
    title: 'Persiapan Setelah Terbangun', 
    description: 'Tetap terjaga setelah terbangun karena adanya kontak pikiran.',
    path: '/alpha',
    icon: '⏰'
  },
  { 
    id: 4, 
    title: 'Mencapai Kondisi Alfa', 
    description: 'Masuk ke kondisi gelombang alfa (7-13 Hz) untuk komunikasi efektif.',
    path: '/alpha',
    icon: '🧠'
  },
  { 
    id: 5, 
    title: 'Melakukan Komunikasi Subyektif', 
    description: 'Lakukan komunikasi subyektif dengan win-win solution.',
    path: '/communication',
    icon: '📡'
  },
  { 
    id: 6, 
    title: 'Visualisasi Kreatif', 
    description: 'Visualisasikan hasil yang diinginkan seolah telah tercapai.',
    path: '/visualization',
    icon: '🌈'
  }
];

function Home() {
  return (
    <div>
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
          Subjective Communication
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Aplikasi ini membantu Anda mempraktikkan teknik Subjective Communication untuk mempengaruhi pikiran target sesuai dengan prinsip win-win solution.
        </p>
        
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/programs/create" className="btn-primary">
            Buat Program Baru
          </Link>
          <Link to="/programs" className="btn-secondary">
            Lihat Program Saya
          </Link>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Langkah-langkah Teknik Subjective Communication</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map(step => (
            <StepCard 
              key={step.id} 
              title={step.title} 
              description={step.description} 
              path={step.path} 
              icon={step.icon}
              number={step.id}
            />
          ))}
        </div>
      </section>
      
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Mulai Praktik Lebih Cepat</h2>
        <p className="mb-6">
          Buat program Subjective Communication Anda sendiri dan pantau hasilnya dalam jurnal praktik.
        </p>
        <Link to="/programs/create" className="btn-primary">
          Buat Program Sekarang
        </Link>
      </section>
    </div>
  );
}

export default Home;