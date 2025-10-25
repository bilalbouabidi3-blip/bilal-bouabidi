
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Teachers from './components/Teachers';
import Levels from './components/Levels';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white text-gray-800">
      <Header onRegisterClick={openModal} />
      <main>
        <Hero onRegisterClick={openModal} />
        <Teachers />
        <Levels />
      </main>
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
