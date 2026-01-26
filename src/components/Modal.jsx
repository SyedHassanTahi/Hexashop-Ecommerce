import React, { useEffect, useRef } from 'react';
import { X } from "lucide-react";
const Modal = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef(null);
    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [isOpen]);
    return (
        <dialog
            className="fixed inset-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm m-auto rounded-lg p-6"
            ref={dialogRef}
            onCancel={onClose}
        >
            <button className="absolute top-4 right-4 hover:opacity-70" onClick={onClose}>
                <X size={28} />
            </button>
            {children}
        </dialog>

    )
}

export default Modal