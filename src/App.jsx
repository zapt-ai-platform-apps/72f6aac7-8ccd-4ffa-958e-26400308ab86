import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './modules/core/context/AppProvider';
import Layout from './modules/core/components/Layout';
import Home from './modules/home/components/Home';
import TargetManager from './modules/target/components/TargetManager';
import ProgrammingGuide from './modules/programming/components/ProgrammingGuide';
import AlphaCondition from './modules/alpha/components/AlphaCondition';
import CommunicationGuide from './modules/communication/components/CommunicationGuide';
import VisualizationGuide from './modules/visualization/components/VisualizationGuide';
import Journal from './modules/journal/components/Journal';
import InfoPage from './modules/info/components/InfoPage';
import ProgramsList from './modules/programs/components/ProgramsList';
import ProgramCreation from './modules/programs/components/ProgramCreation';
import ProgramExecution from './modules/programs/components/ProgramExecution';

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 text-slate-800">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/target" element={<TargetManager />} />
              <Route path="/programming" element={<ProgrammingGuide />} />
              <Route path="/alpha" element={<AlphaCondition />} />
              <Route path="/communication" element={<CommunicationGuide />} />
              <Route path="/visualization" element={<VisualizationGuide />} />
              <Route path="/programs" element={<ProgramsList />} />
              <Route path="/programs/create" element={<ProgramCreation />} />
              <Route path="/programs/execute/:id" element={<ProgramExecution />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;