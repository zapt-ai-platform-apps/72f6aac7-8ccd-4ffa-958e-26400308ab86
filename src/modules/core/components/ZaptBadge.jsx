import React from 'react';

const ZaptBadge = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center bg-white rounded-full px-3 py-1.5 text-xs shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <span className="font-semibold text-gray-800">Made on ZAPT</span>
      </a>
    </div>
  );
};

export default ZaptBadge;