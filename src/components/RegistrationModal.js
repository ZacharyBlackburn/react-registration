import React from 'react';

// components
import RegistrationForm from './RegistrationForm';

// css
import styles from "./RegistrationModal.module.css"
import { RiCloseLine } from "react-icons/ri";

const RegistrationModal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />

      <div className={styles.centered}>
        
        <div className={styles.modal}>

          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Awesome Healthcare Software Company</h5>
            <hr className={styles.lineBreak} />
          </div>

          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          
          <div className={styles.modalContent}>
            <RegistrationForm />
          </div>

        </div>

        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
            <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default RegistrationModal;