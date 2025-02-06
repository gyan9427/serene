import React, { useState } from 'react';
import { PageContent } from '../data/content';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface BookProps {
  pages: PageContent[];
  isOpen: boolean;
  onClose: () => void;
}

export const Book: React.FC<BookProps> = ({ pages, isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isAnimating) {
      setDirection('next');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setDirection('prev');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-[#FDF5E6] w-full max-w-7xl rounded-lg shadow-2xl flex flex-col sm:flex-row h-[90vh] sm:h-[80vh] relative">
        {/* Book Pages Container */}
        <div className="w-full h-full flex flex-col sm:flex-row relative overflow-y-auto sm:overflow-hidden">
          {/* Left Page */}
          <div 
            className={`w-full sm:w-1/2 p-4 sm:p-8 sm:border-r border-[#8B4513] flex flex-col transition-transform duration-300 ${
              isAnimating ? (direction === 'next' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="flex-1 flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-full h-[200px] sm:h-[300px] relative">
                <img 
                  src={pages[currentPage].leftPage.image} 
                  alt={pages[currentPage].leftPage.caption}
                  className="w-full h-full object-contain rounded-lg shadow-md transition-all duration-300"
                />
              </div>
              <p className="mt-3 sm:mt-4 text-[#8B4513] font-serif italic text-sm sm:text-base">
                {pages[currentPage].leftPage.caption}
              </p>
            </div>
          </div>
          
          {/* Right Page */}
          <div 
            className={`w-full sm:w-1/2 p-4 sm:p-8 flex flex-col transition-transform duration-300 ${
              isAnimating ? (direction === 'next' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="max-w-md w-full">
                <p className="whitespace-pre-line font-serif text-[#8B4513] text-base sm:text-lg leading-relaxed">
                  {pages[currentPage].rightPage.poem}
                </p>
                <p className="mt-3 sm:mt-4 text-right text-[#8B4513] italic text-sm sm:text-base">
                  - {pages[currentPage].rightPage.author}
                </p>
              </div>
            </div>
          </div>

          {/* Page Number Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#8B4513] font-serif">
            Page {currentPage + 1} of {pages.length}
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          <button 
            onClick={prevPage}
            disabled={currentPage === 0 || isAnimating}
            className="p-2 bg-[#8B4513] text-white rounded-full disabled:opacity-50 transition-opacity duration-300"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={nextPage}
            disabled={currentPage === pages.length - 1 || isAnimating}
            className="p-2 bg-[#8B4513] text-white rounded-full disabled:opacity-50 transition-opacity duration-300"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-[#8B4513] text-white rounded-full hover:bg-[#654321] z-20"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};