import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { loadPrograms, savePrograms } from '../services/storageService';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [programs, setPrograms] = useState([]);
  const [journal, setJournal] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Load data from localStorage on mount
  useEffect(() => {
    const initializeData = async () => {
      try {
        const savedPrograms = await loadPrograms();
        setPrograms(savedPrograms || []);
      } catch (error) {
        console.error('Failed to load programs:', error);
        Sentry.captureException(error, {
          extra: { context: 'Loading programs from storage' }
        });
      } finally {
        setLoading(false);
      }
    };
    
    initializeData();
  }, []);
  
  // Save programs to localStorage whenever they change
  useEffect(() => {
    if (!loading) {
      try {
        savePrograms(programs);
      } catch (error) {
        console.error('Failed to save programs:', error);
        Sentry.captureException(error, {
          extra: { context: 'Saving programs to storage' }
        });
      }
    }
  }, [programs, loading]);
  
  const addProgram = (program) => {
    setPrograms(prevPrograms => [...prevPrograms, program]);
  };
  
  const updateProgram = (id, updatedProgram) => {
    setPrograms(prevPrograms => 
      prevPrograms.map(program => 
        program.id === id ? { ...program, ...updatedProgram } : program
      )
    );
  };
  
  const deleteProgram = (id) => {
    setPrograms(prevPrograms => 
      prevPrograms.filter(program => program.id !== id)
    );
  };
  
  const addJournalEntry = (entry) => {
    setJournal(prevEntries => [entry, ...prevEntries]);
  };
  
  const value = {
    programs,
    journal,
    loading,
    addProgram,
    updateProgram,
    deleteProgram,
    addJournalEntry,
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};