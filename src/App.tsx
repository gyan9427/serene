import React, { useState } from 'react';
import { Cover } from './components/Cover';
import { Book } from './components/Book';
import { pages } from './data/content';

function App() {
  const [isBookOpen, setIsBookOpen] = useState(false);

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-2 sm:p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full sm:w-auto">
        <Cover onClick={() => setIsBookOpen(true)} />
        <Book 
          pages={pages}
          isOpen={isBookOpen}
          onClose={() => setIsBookOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;