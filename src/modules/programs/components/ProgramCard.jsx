import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProgramCard({ program, onDelete }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  return (
    <div className="card hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
      
      <div className="mb-3 text-sm text-slate-500">
        Dibuat: {formatDate(program.createdAt)}
      </div>
      
      <div className="mb-3">
        <div className="font-medium text-slate-700 mb-1">Target:</div>
        <p className="text-slate-600">{program.targetType === 'individual' ? program.targetName : program.targetGroup}</p>
      </div>
      
      <div className="mb-4">
        <div className="font-medium text-slate-700 mb-1">Tujuan:</div>
        <p className="text-slate-600 line-clamp-2">{program.goal}</p>
      </div>
      
      <div className="flex justify-between mt-4">
        <Link 
          to={`/programs/execute/${program.id}`}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Praktikkan
        </Link>
        
        {showConfirmDelete ? (
          <div className="flex space-x-2">
            <button 
              className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm cursor-pointer"
              onClick={() => onDelete(program.id)}
            >
              Hapus
            </button>
            <button 
              className="px-3 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 text-sm cursor-pointer"
              onClick={() => setShowConfirmDelete(false)}
            >
              Batal
            </button>
          </div>
        ) : (
          <button 
            className="text-red-600 hover:text-red-700 cursor-pointer"
            onClick={() => setShowConfirmDelete(true)}
          >
            Hapus
          </button>
        )}
      </div>
    </div>
  );
}

export default ProgramCard;