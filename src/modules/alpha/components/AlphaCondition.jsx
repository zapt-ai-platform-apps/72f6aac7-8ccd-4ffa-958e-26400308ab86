import React from 'react';
import { Link } from 'react-router-dom';

function AlphaCondition() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 mb-2 inline-block">&larr; Kembali ke Beranda</Link>
        <h1 className="text-3xl font-bold">Mencapai Kondisi Alfa</h1>
        <p className="text-slate-600">
          Mencapai kondisi gelombang alfa (7-13 Hz) adalah kunci untuk komunikasi subjektif yang efektif.
        </p>
      </header>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Apa itu Kondisi Alfa?</h2>
        <p>
          Kondisi alfa adalah keadaan pikiran di mana otak Anda menghasilkan gelombang otak dengan frekuensi 7-13 Hz. 
          Pada kondisi ini, pikiran Anda berada dalam keadaan rileks namun tetap waspada, yang merupakan kondisi optimal 
          untuk melakukan komunikasi subjektif.
        </p>
        <p>
          Kondisi alfa sering dicapai saat seseorang berada dalam keadaan meditatif, rileks, atau dalam peralihan 
          antara sadar penuh dan tidur.
        </p>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Persiapan Setelah Terbangun</h2>
        <p>
          Saat Anda terbangun di malam hari (kemungkinan karena kontak pikiran telah terjadi), ikuti langkah-langkah ini:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            <strong>Tetap di tempat tidur</strong> dalam posisi nyaman, hindari gerakan berlebihan
          </li>
          <li>
            <strong>Buka mata secukupnya</strong> untuk membantu Anda tetap terjaga
          </li>
          <li>
            <strong>Tarik napas dalam beberapa kali</strong> untuk meningkatkan kesadaran
          </li>
          <li>
            <strong>Jangan terburu-buru</strong> untuk bangun sepenuhnya
          </li>
        </ol>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Teknik Mencapai Kondisi Alfa</h2>
        <p className="mb-3">
          Setelah Anda terbangun dan siap, gunakan salah satu teknik berikut untuk mencapai kondisi alfa:
        </p>
        
        <div className="mb-4 border-l-4 border-indigo-400 pl-4">
          <h3 className="font-medium mb-1">1. Hitungan Mundur</h3>
          <p>
            Mulai menghitung mundur dari 100 atau 50 sambil membayangkan setiap angka. Hitung dengan
            ritme lambat dan biarkan diri Anda semakin rileks seiring hitungan menurun.
          </p>
        </div>
        
        <div className="mb-4 border-l-4 border-indigo-400 pl-4">
          <h3 className="font-medium mb-1">2. Visualisasi Tempat Damai</h3>
          <p>
            Bayangkan diri Anda berada di tempat yang sangat tenang dan damai. Gunakan semua
            indera Anda untuk merasakan tempat tersebut: apa yang Anda lihat, dengar, rasakan, cium, dan
            sentuh di tempat tersebut.
          </p>
        </div>
        
        <div className="mb-4 border-l-4 border-indigo-400 pl-4">
          <h3 className="font-medium mb-1">3. Teknik Pernapasan</h3>
          <p>
            Fokus pada napas Anda. Tarik napas dalam selama 4 hitungan, tahan selama 4 hitungan,
            dan hembuskan selama 8 hitungan. Ulangi proses ini beberapa kali sambil merasakan tubuh
            Anda semakin rileks.
          </p>
        </div>
        
        <div className="border-l-4 border-indigo-400 pl-4">
          <h3 className="font-medium mb-1">4. Centering Exercise (Jose Silva)</h3>
          <p>
            Rilekskan tubuh dari kepala hingga kaki secara bertahap. Kemudian bayangkan jumlah 3
            tiga kali dan rasakan diri Anda semakin rileks. Lanjutkan dengan membayangkan angka 2
            tiga kali dan 1 tiga kali, dengan semakin rileks di setiap angka.
          </p>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">Cara Mengetahui Anda Telah Mencapai Kondisi Alfa</h2>
        <p>
          Anda mungkin merasakan beberapa tanda berikut saat mencapai kondisi alfa:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Perasaan sangat rileks namun tetap sadar</li>
          <li>Sensasi tubuh yang terasa ringan atau mengambang</li>
          <li>Pikiran yang tenang namun fokus</li>
          <li>Perasaan damai dan harmonis</li>
          <li>Pernafasan yang menjadi lebih dalam dan teratur</li>
          <li>Berkurangnya kesadaran akan gangguan eksternal</li>
        </ul>
        <p>
          Jika Anda merasakan beberapa tanda ini, Anda siap untuk melakukan komunikasi subjektif dengan target Anda.
        </p>
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/communication" className="btn-primary">
          Lanjut ke Komunikasi Subjektif
        </Link>
      </div>
    </div>
  );
}

export default AlphaCondition;