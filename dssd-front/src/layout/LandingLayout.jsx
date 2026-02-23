import { useState } from "react";
import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Formulario from '../components/Formulario';

export default function LandingLayout({ children }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 👇 Aquí inyectamos la función en todos los children
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onOpenModal: handleOpenModal });
    }
    return child;
  });

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      
      <Header onOpenModal={handleOpenModal} />

      <main>
        {childrenWithProps}
      </main>

      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <Formulario />
      </Modal>

    </div>
  );
}