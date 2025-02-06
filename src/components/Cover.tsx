import React from 'react';
import { Heart } from 'lucide-react';

interface CoverProps {
  onClick: () => void;
}

export const Cover: React.FC<CoverProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer transform hover:scale-105 transition-transform duration-300 w-full px-4 sm:px-0 sm:w-auto"
    >
      <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-12 rounded-lg shadow-2xl max-w-2xl mx-auto text-center relative overflow-hidden hover:shadow-rose-300/50">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-100 opacity-50" />
        <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-rose-600 mx-auto mb-4 sm:mb-6 relative z-10" />
        <h1 className="font-serif text-3xl sm:text-5xl mb-3 sm:mb-4 text-rose-800 relative z-10">
          Happy Rose Day, My Love
        </h1>
        <p className="text-lg sm:text-xl text-rose-700 font-serif italic relative z-10">
          Click to open a special message written just for you...
        </p>
        <div className="mt-4 sm:mt-6 text-sm text-rose-600/80 relative z-10">
          ❤ Touch to open ❤
        </div>
      </div>
    </div>
  );
};