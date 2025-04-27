import React from 'react';
import { Link } from 'react-router-dom';

function VisualizationGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 mb-2 inline-block">&larr; Kembali ke Beranda</Link>
        <h1 className="text-3xl font-bold">Visualisasi Kreatif</h1>
        <p className="text-slate-600">
          Setelah melakukan komunikasi subjektif, langkah selanjutnya adalah melakukan visualisasi kreatif 
          untuk memperkuat pesan Anda.
        </p>
      </header>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Apa itu Visualisasi Kreatif?</h2>
        <p>
          Visualisasi kreatif adalah teknik membayangkan hasil yang diinginkan seolah-olah sudah tercapai. 
          Dalam konteks Subjective Communication, visualisasi dilakukan dengan menggunakan formula <strong>"past sense"</strong> 
          di mana Anda membayangkan keinginan Anda telah terwujud.
        </p>
        <p>
          Teknik ini memperkuat pesan yang telah Anda sampaikan melalui komunikasi subjektif dan membantu 
          menanamkannya lebih dalam di pikiran bawah sadar target.
        </p>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Cara Melakukan Visualisasi Kreatif</h2>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            <strong>Tetap dalam kondisi alfa</strong> setelah melakukan komunikasi subjektif
          </li>
          <li>
            <strong>Bayangkan dengan jelas</strong> bahwa keinginan Anda sudah tercapai
          </li>
          <li>
            <strong>Gunakan formula "past sense"</strong> - seolah-olah kejadian yang diinginkan sudah terjadi
          </li>
          <li>
            <strong>Libatkan semua indera Anda</strong> dalam visualisasi (penglihatan, pendengaran, perasaan, dll.)
          </li>
          <li>
            <strong>Rasakan emosi positif</strong> yang muncul dari tercapainya keinginan Anda
          </li>
          <li>
            <strong>Tambahkan detail spesifik</strong> untuk membuat visualisasi lebih nyata
          </li>
        </ol>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Contoh Visualisasi Kreatif</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-1">
            <h3 className="font-medium mb-1">Untuk Mendapatkan Pekerjaan:</h3>
            <p className="italic">
              "Saya melihat diri saya menerima telepon dengan kabar baik. Pewawancara mengatakan bahwa saya 
              diterima untuk posisi tersebut. Saya merasakan kegembiraan dan rasa bangga. Saya melihat diri 
              saya menandatangani kontrak kerja dan memulai hari pertama dengan penuh semangat. Saya melihat 
              wajah puas dan senang dari atasan dan rekan kerja saya."
            </p>
          </div>
          
          <div className="border-l-4 border-indigo-400 pl-4 py-1">
            <h3 className="font-medium mb-1">Untuk Meningkatkan Bisnis:</h3>
            <p className="italic">
              "Saya melihat target saya menghubungi saya dengan antusias, berkata bahwa mereka tertarik dengan 
              produk/jasa saya. Kami telah menandatangani kontrak kerjasama yang menguntungkan kedua belah pihak. 
              Saya melihat target tersenyum puas dengan hasil yang mereka dapatkan. Bisnis mereka berkembang 
              berkat solusi yang saya berikan."
            </p>
          </div>
          
          <div className="border-l-4 border-indigo-400 pl-4 py-1">
            <h3 className="font-medium mb-1">Untuk Hubungan Interpersonal:</h3>
            <p className="italic">
              "Saya melihat hubungan saya dengan [nama target] telah membaik. Kami berkomunikasi dengan lancar 
              dan saling pengertian. Saya merasakan kehangatan dan keakraban dalam interaksi kami. Kami telah 
              menyelesaikan masalah yang ada dan menciptakan hubungan yang lebih harmonis."
            </p>
          </div>
        </div>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Mengakhiri Sesi</h2>
        <p>
          Setelah selesai melakukan visualisasi kreatif, ikuti langkah-langkah berikut untuk mengakhiri sesi:
        </p>
        <ol className="list-decimal pl-6 space-y-1 mb-4">
          <li>Tarik napas dalam beberapa kali</li>
          <li>Rasakan rasa syukur dan kepuasan bahwa proses telah selesai dengan baik</li>
          <li>Perlahan-lahan kembalikan kesadaran Anda ke kondisi normal</li>
          <li>Buka mata Anda dan gerakkan tangan dan kaki Anda secara perlahan</li>
          <li>Jika Anda melakukan sesi di malam hari, Anda dapat kembali tidur</li>
        </ol>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">Tips Visualisasi Efektif</h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Buat visualisasi sedetail mungkin untuk meningkatkan daya realisasinya</li>
          <li>Fokus pada emosi positif yang timbul saat keinginan Anda terwujud</li>
          <li>Gunakan bahasa present tense atau past tense, hindari future tense</li>
          <li>Jangan ragu untuk menyesuaikan visualisasi dengan kepribadian dan preferensi Anda</li>
          <li>Praktikkan visualisasi secara konsisten untuk hasil yang optimal</li>
        </ul>
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/programs/create" className="btn-primary">
          Buat Program Lengkap
        </Link>
      </div>
    </div>
  );
}

export default VisualizationGuide;