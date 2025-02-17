import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import LoginForm from './LoginForm';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav>
      <h1>MagicSketch</h1>
      <div className="header-components">
        <Link to="/">Home&nbsp;</Link>
        <Link to="/about">About</Link>
        <a onClick={openModal}>Login</a>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LoginForm onClose = {closeModal} />
      </Modal>
    </nav>
  );
};
