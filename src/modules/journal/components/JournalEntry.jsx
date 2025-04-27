import React, { useState } from 'react';

function JournalEntry({ entry, onDelete }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      dateStyle: 'full',
      timeStyle: 'short'
    }).format(date);
  };
  
  const formatTime = (timeString) => {
    if (!timeString) return '-';
    return timeString;
  };
  
  const getMoodLabel = (mood) => {
    const moods = {
      'sangat-baik': 'Sangat Baik',
      'baik': 'Baik',
      'netral': 'Netral',
      'kurang-baik': 'Kurang Baik',
      'buruk': 'Buruk'
    };
    return moods[mood] || mood;
  };
  
  const getMoodColor = (mood) => {
    const colors = {
      'sangat-baik': 'bg-green-100 text-green-800',
      'baik': 'bg-emerald-100 text-emerald-800',
      'netral': 'bg-blue-100 text-blue-800',
      'kurang-baik': 'bg-amber-100 text-amber-800',
      'buruk': 'bg-red-100 text-red-800'
    };
    return colors[mood] || 'bg-gray-100 text-gray-800';
  };
  
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold mb-1">{formatDate(entry.date)}</h3>
          {entry.programName && (
            <p className="text-sm text-indigo-600 mb-2">
              Program: {entry.programName}
            </p>
          )}
        </div>
        <div>
          {entry.mood && (
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getMoodColor(entry.mood)}`}>
              {getMoodLabel(entry.mood)}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap mb-3 text-sm text-slate-600">
        <div className="mr-4">
          <span className="font-medium">Waktu Tidur:</span> {formatTime(entry.sleepTime)}
        </div>
        <div>
          <span className="font-medium">Waktu Bangun:</span> {formatTime(entry.wakeTime)}
        </div>
      </div>
      
      <div className="mb-3">
        <h4 className="font-medium text-slate-700 mb-1">Pengalaman:</h4>
        <p className="text-slate-600 whitespace-pre-line">{entry.experience}</p>
      </div>
      
      {entry.results && (
        <div className="mb-3">
          <h4 className="font-medium text-slate-700 mb-1">Hasil/Observasi:</h4>
          <p className="text-slate-600 whitespace-pre-line">{entry.results}</p>
        </div>
      )}
      
      <div className="mt-4 text-right">
        {showConfirmDelete ? (
          <div className="flex justify-end space-x-2">
            <button 
              className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm cursor-pointer"
              onClick={() => onDelete(entry.id)}
            >
              Hapus
            </button>
            <button 
              className="px-3 py-1 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 text-sm cursor-pointer"
              onClick={() => setShowConfirmDelete(false)}
            >
              Batal
            </button>
          </div>
        ) : (
          <button 
            className="text-red-600 hover:text-red-700 text-sm cursor-pointer"
            onClick={() => setShowConfirmDelete(true)}
          >
            Hapus
          </button>
        )}
      </div>
    </div>
  );
}

export default JournalEntry;