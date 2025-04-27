import React from 'react';
import { Link } from 'react-router-dom';

function TargetManager() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 mb-2 inline-block">&larr; Kembali ke Beranda</Link>
        <h1 className="text-3xl font-bold">Penentuan Target</h1>
        <p className="text-slate-600">
          Langkah pertama dalam Subjective Communication adalah menentukan target komunikasi Anda.
        </p>
      </header>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Target Individual</h2>
        <p>
          Target individual adalah orang tertentu yang ingin Anda pengaruhi. Anda harus mengetahui:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Nama lengkap target</li>
          <li>Gelar atau jabatan (jika ada)</li>
          <li>Informasi lain yang dapat membantu Anda membayangkan target dengan jelas</li>
        </ul>
        <p>
          Semakin jelas Anda mengenal target, semakin efektif komunikasi subyektif yang akan Anda lakukan.
        </p>
      </div>
      
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-3">Target Massal</h2>
        <p>
          Target massal adalah sekelompok orang yang ingin Anda pengaruhi. Contohnya:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Calon pelanggan untuk bisnis Anda</li>
          <li>Pemirsa presentasi atau audiens pidato Anda</li>
          <li>Kelompok profesional tertentu</li>
          <li>Komunitas dengan minat spesifik</li>
        </ul>
        <p>
          Untuk target massal, tentukan kategori yang jelas dan spesifik agar komunikasi subyektif tetap fokus.
        </p>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">Tips Menentukan Target</h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Pilih target yang memiliki kemampuan untuk memenuhi keinginan Anda</li>
          <li>Pastikan Anda dapat membayangkan target dengan jelas</li>
          <li>Untuk pemula, mulai dengan target individual yang Anda kenal baik</li>
          <li>Jangan memilih terlalu banyak target sekaligus, fokus pada satu target utama</li>
        </ul>
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/programs/create" className="btn-primary">
          Buat Program dengan Target
        </Link>
      </div>
    </div>
  );
}

export default TargetManager;