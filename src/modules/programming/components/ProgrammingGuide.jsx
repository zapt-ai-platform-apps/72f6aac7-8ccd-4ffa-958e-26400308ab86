import React from 'react';
import { Link } from 'react-router-dom';

function ProgrammingGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 mb-2 inline-block">&larr; Kembali ke Beranda</Link>
        <h1 className="text-3xl font-bold">Pemrograman Pikiran Sebelum Tidur</h1>
        <p className="text-slate-600">
          Pemrograman pikiran sebelum tidur adalah langkah awal yang penting dalam praktik Subjective Communication.
        </p>
      </header>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Apa itu Pemrograman Pikiran?</h2>
        <p>
          Sebelum tidur, Anda perlu memprogramkan pikiran Anda dengan kalimat afirmasi yang menyatakan intensi untuk berkomunikasi dengan target Anda saat pikiran Anda aktif saat Anda sedang tidur.
        </p>
        <p>
          Kalimat pemrograman ini mempersiapkan pikiran bawah sadar Anda untuk melakukan kontak pikiran dengan target Anda.
        </p>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Cara Melakukan Pemrograman Pikiran</h2>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            <strong>Tempatkan diri dalam posisi nyaman</strong> sebelum tidur, tutup mata Anda
          </li>
          <li>
            <strong>Rilekskan tubuh Anda</strong> dengan menarik napas dalam dan menghembuskannya secara perlahan
          </li>
          <li>
            <strong>Ucapkan kalimat pemrograman 10-20 kali</strong> dalam hati atau dengan suara pelan
          </li>
          <li>
            <strong>Bayangkan target Anda</strong> dengan jelas saat mengucapkan kalimat pemrograman
          </li>
          <li>
            <strong>Tidur dengan posisi nyaman</strong> dan biarkan pikiran bawah sadar Anda bekerja
          </li>
        </ol>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Contoh Kalimat Pemrograman</h2>
        <p className="italic mb-2">
          "Malam ini, saat saya tidur, pikiran saya akan berkomunikasi dengan pikiran [nama target]. Saya akan terbangun saat kontak pikiran terjadi dan saya akan mengingat untuk tetap terjaga."
        </p>
        <p className="italic mb-4">
          "Pikiran saya akan terhubung dengan pikiran [nama target] malam ini. Saya akan terbangun dan siap melakukan komunikasi subjektif yang efektif."
        </p>
        <p>
          Anda dapat memodifikasi kalimat-kalimat ini sesuai dengan kebutuhan Anda, tetapi pastikan selalu menyertakan:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nama atau identitas target</li>
          <li>Niat untuk terbangun saat kontak pikiran terjadi</li>
          <li>Tekad untuk tetap terjaga dan melanjutkan proses</li>
        </ul>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">Tips Pemrograman Efektif</h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Lakukan pemrograman dalam keadaan rileks</li>
          <li>Ulangi kalimat pemrograman dengan penuh keyakinan</li>
          <li>Cobalah untuk tidur lebih awal, karena Anda kemungkinan akan terbangun pada malam hari</li>
          <li>Jangan minum alkohol atau obat tidur yang dapat mengganggu proses ini</li>
          <li>Konsisten melakukan pemrograman setiap malam hingga Anda berhasil</li>
        </ul>
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/programs/create" className="btn-primary">
          Buat Program dengan Pemrograman Pikiran
        </Link>
      </div>
    </div>
  );
}

export default ProgrammingGuide;