import React, { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
     <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Register Today!
      </button>
      {isOpen && <RegistrationModal setIsOpen={setIsOpen} />}
    </>
  );
}

export default RegistrationPage;