import React from 'react';
import { Link } from 'react-router-dom';

function CommunicationGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 mb-2 inline-block">&larr; Kembali ke Beranda</Link>
        <h1 className="text-3xl font-bold">Melakukan Komunikasi Subjektif</h1>
        <p className="text-slate-600">
          Setelah mencapai kondisi alfa, Anda siap untuk melakukan komunikasi subjektif dengan target Anda.
        </p>
      </header>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Prinsip Dasar Komunikasi Subjektif</h2>
        <p>
          Komunikasi subjektif harus selalu berdasarkan prinsip <strong>win-win solution</strong>. 
          Artinya, Anda harus memastikan bahwa apa yang Anda inginkan juga memberikan manfaat bagi target Anda.
        </p>
        <p>
          Pendekatan win-win ini tidak hanya lebih etis, tetapi juga terbukti lebih efektif karena 
          pikiran bawah sadar target cenderung lebih reseptif terhadap pesan yang menguntungkan dirinya.
        </p>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Langkah-langkah Komunikasi Subjektif</h2>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            <strong>Bayangkan target Anda dengan jelas</strong> di hadapan Anda
          </li>
          <li>
            <strong>Sapa target</strong> secara mental dengan nama lengkapnya
          </li>
          <li>
            <strong>Sampaikan pesan Anda</strong> dengan kalimat yang jelas dan positif
          </li>
          <li>
            <strong>Jelaskan manfaat</strong> yang akan diperoleh target
          </li>
          <li>
            <strong>Gunakan kalimat afirmasi</strong> yang langsung dan spesifik
          </li>
          <li>
            <strong>Ulangi pesan 3-7 kali</strong> dengan penuh keyakinan
          </li>
        </ol>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Contoh Kalimat Komunikasi Subjektif</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-1">
            <h3 className="font-medium mb-1">Untuk Mendapatkan Pekerjaan:</h3>
            <p className="italic">
              "Halo [nama pewawancara]. Anda akan menemukan bahwa saya adalah kandidat terbaik untuk posisi ini. 
              Keahlian dan pengalaman saya akan sangat membantu tim Anda mencapai target. Anda akan merasa puas 
              dan bangga dengan keputusan Anda mempekerjakan saya."
            </p>
          </div>
          
          <div className="border-l-4 border-indigo-400 pl-4 py-1">
            <h3 className="font-medium mb-1">Untuk Meningkatkan Bisnis:</h3>
            <p className="italic">
              "Halo [nama target]. Produk/jasa saya akan menyelesaikan masalah yang Anda hadapi dan 
              meningkatkan efisiensi bisnis Anda. Anda akan mendapatkan nilai lebih dari investasi Anda 
              dan merasa puas dengan hasilnya."
            </p>
          </div>
          
          <div className="border-l-4 border-indigo-400 pl-4 py-1">
            <h3 className="font-medium mb-1">Untuk Memotivasi Anak:</h3>
            <p className="italic">
              "Halo [nama anak]. Kamu memiliki potensi luar biasa dalam [bidang]. Saat kamu belajar dan 
              berlatih dengan tekun, kamu akan merasakan kepuasan dan kebanggaan atas pencapaianmu. 
              Kamu akan menikmati proses belajar ini."
            </p>
          </div>
          
          <div className="border-l-4 border-indigo-400 pl-4 py-1">
            <h3 className="font-medium mb-1">Untuk Menagih Hutang:</h3>
            <p className="italic">
              "Halo [nama orang yang berhutang]. Dengan membayar hutangmu, kamu akan merasa lega dan bebas 
              dari beban mental. Hubungan kita akan semakin baik dan kamu akan merasa bangga telah memenuhi 
              tanggung jawabmu."
            </p>
          </div>
        </div>
        
        <p className="mt-4">
          Ingat untuk selalu menyesuaikan kalimat dengan situasi spesifik Anda dan selalu fokus pada manfaat bagi target.
        </p>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">Tips Komunikasi Subjektif Efektif</h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Gunakan kata-kata positif dan hindari kata negatif seperti "tidak", "jangan", atau "berhenti"</li>
          <li>Sampaikan pesan dengan penuh keyakinan dan kepercayaan diri</li>
          <li>Fokus pada manfaat nyata bagi target, bukan hanya keinginan Anda</li>
          <li>Buat pesan singkat, jelas, dan mudah dimengerti</li>
          <li>Sampaikan pesan dengan perasaan tulus dan niat baik</li>
          <li>Hindari memaksakan kehendak atau memanipulasi</li>
        </ul>
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/visualization" className="btn-primary">
          Lanjut ke Visualisasi Kreatif
        </Link>
      </div>
    </div>
  );
}

export default CommunicationGuide;