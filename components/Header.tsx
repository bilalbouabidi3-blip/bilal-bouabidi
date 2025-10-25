import React from 'react';

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 space-x-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3.5a1 1 0 00.02 1.84l7 3.5a1 1 0 00.748 0l7-3.5a1 1 0 00.02-1.84l-7-3.5zM3 9.363l7 3.5 7-3.5v3.953l-7 3.5-7-3.5V9.363z" />
          </svg>
          <h1 className="text-2xl font-extrabold text-gray-800">The Future Academy</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          <a href="#teachers" className="text-gray-600 hover:text-indigo-600 transition-colors">الأساتذة</a>
          <a href="#levels" className="text-gray-600 hover:text-indigo-600 transition-colors">المستويات</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">تواصل معنا</a>
        </nav>
        <button
          onClick={onRegisterClick}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
        >
          سجل الآن
        </button>
      </div>
    </header>
  );
};

export default Header;
