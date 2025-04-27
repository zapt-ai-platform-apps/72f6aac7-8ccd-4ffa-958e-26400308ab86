import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../core/context/AppProvider';
import ProgramCard from './ProgramCard';

function ProgramsList() {
  const { programs, loading, deleteProgram } = useAppContext();
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Program Saya</h1>
        <Link to="/programs/create" className="btn-primary">
          Buat Program Baru
        </Link>
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Memuat program...</p>
        </div>
      ) : programs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map(program => (
            <ProgramCard 
              key={program.id}
              program={program}
              onDelete={deleteProgram}
            />
          ))}
        </div>
      ) : (
        <div className="card text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Belum Ada Program</h2>
          <p className="text-slate-600 mb-4">
            Buat program Subjective Communication pertama Anda untuk mulai mempraktikkan teknik ini.
          </p>
          <Link to="/programs/create" className="btn-primary">
            Buat Program Pertama
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProgramsList;