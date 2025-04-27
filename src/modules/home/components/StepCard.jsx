import React from 'react';
import { Link } from 'react-router-dom';

function StepCard({ title, description, path, icon, number }) {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl mr-4">
          {icon}
        </div>
        <div>
          <div className="font-medium text-slate-500 mb-1">Langkah {number}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-slate-600 mb-4">{description}</p>
          <Link 
            to={path} 
            className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer"
          >
            Pelajari Lebih Lanjut &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StepCard;