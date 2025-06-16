import React, { useState } from 'react';
import styles from './DeleteButton.module.css';
import ConfirmationDialog from './ConfirmationDialog';

function DeleteButton({ onDelete }) {
  const [showDialog, setShowDialog] = useState(false);

  const handleDeleteClick = () => setShowDialog(true);
  const handleConfirm = () => {
    setShowDialog(false);
    if (onDelete) onDelete();
  };
  const handleCancel = () => setShowDialog(false);

  return (
    <>
      <button className={styles.deleteButton} onClick={handleDeleteClick}>
        Delete
      </button>
      {showDialog && (
        <ConfirmationDialog
          message="Are you sure you want to delete this post?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default DeleteButton;
