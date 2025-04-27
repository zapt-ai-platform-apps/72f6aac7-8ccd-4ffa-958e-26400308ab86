import localforage from 'localforage';
import * as Sentry from '@sentry/browser';

// Initialize storage
localforage.config({
  name: 'kontak-pikiran',
  storeName: 'subjective_communication_data'
});

// Storage keys
const STORAGE_KEYS = {
  PROGRAMS: 'subjective_communication_programs',
  JOURNAL: 'subjective_communication_journal'
};

/**
 * Load programs from storage
 * @returns {Promise<Array>} Array of saved programs
 */
export const loadPrograms = async () => {
  try {
    const programs = await localforage.getItem(STORAGE_KEYS.PROGRAMS);
    console.log('Loaded programs from storage:', programs);
    return programs || [];
  } catch (error) {
    console.error('Error loading programs:', error);
    Sentry.captureException(error, {
      extra: { context: 'loadPrograms' }
    });
    return [];
  }
};

/**
 * Save programs to storage
 * @param {Array} programs Array of programs to save
 * @returns {Promise<void>}
 */
export const savePrograms = async (programs) => {
  try {
    await localforage.setItem(STORAGE_KEYS.PROGRAMS, programs);
    console.log('Saved programs to storage:', programs);
  } catch (error) {
    console.error('Error saving programs:', error);
    Sentry.captureException(error, {
      extra: { context: 'savePrograms', programs }
    });
    throw error;
  }
};

/**
 * Load journal entries from storage
 * @returns {Promise<Array>} Array of journal entries
 */
export const loadJournal = async () => {
  try {
    const journal = await localforage.getItem(STORAGE_KEYS.JOURNAL);
    return journal || [];
  } catch (error) {
    console.error('Error loading journal:', error);
    Sentry.captureException(error, {
      extra: { context: 'loadJournal' }
    });
    return [];
  }
};

/**
 * Save journal entries to storage
 * @param {Array} journal Array of journal entries to save
 * @returns {Promise<void>}
 */
export const saveJournal = async (journal) => {
  try {
    await localforage.setItem(STORAGE_KEYS.JOURNAL, journal);
  } catch (error) {
    console.error('Error saving journal:', error);
    Sentry.captureException(error, {
      extra: { context: 'saveJournal', journal }
    });
    throw error;
  }
};