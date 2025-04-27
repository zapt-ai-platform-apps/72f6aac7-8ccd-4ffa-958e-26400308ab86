import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../core/context/AppProvider';
import JournalEntry from './JournalEntry';
import JournalForm from './JournalForm';
import { loadJournal, saveJournal } from '../../core/services/storageService';

function Journal() {
  const { programs } = useAppContext();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  // Load journal entries on component mount
  useEffect(() => {
    const fetchJournal = async () => {
      try {
        const journalData = await loadJournal();
        setEntries(journalData || []);
      } catch (error) {
        console.error('Error loading journal:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJournal();
  }, []);
  
  // Save journal entries when they change
  useEffect(() => {
    if (!loading) {
      saveJournal(entries);
    }
  }, [entries, loading]);
  
  const addEntry = (entry) => {
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    
    setEntries(prevEntries => [newEntry, ...prevEntries]);
    setShowForm(false);
  };
  
  const deleteEntry = (id) => {
    setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Jurnal Praktik</h1>
        <button 
          className="btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Batal' : 'Tambah Catatan'}
        </button>
      </div>
      
      {showForm && (
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Tambah Catatan Baru</h2>
          <JournalForm 
            onSubmit={addEntry} 
            programs={programs}
          />
        </div>
      )}
      
      {loading ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Memuat jurnal...</p>
        </div>
      ) : entries.length > 0 ? (
        <div className="space-y-4">
          {entries.map(entry => (
            <JournalEntry 
              key={entry.id} 
              entry={entry} 
              onDelete={deleteEntry}
            />
          ))}
        </div>
      ) : (
        <div className="card text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Belum Ada Catatan</h2>
          <p className="text-slate-600 mb-4">
            Catat pengalaman dan hasil dari praktik Subjective Communication Anda.
          </p>
          {!showForm && (
            <button 
              className="btn-primary"
              onClick={() => setShowForm(true)}
            >
              Tambah Catatan Pertama
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Journal;