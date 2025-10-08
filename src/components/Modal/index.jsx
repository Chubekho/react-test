import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import clsx from "clsx";
import styles from "./Modal.module.scss";

const Modal = forwardRef(
  (
    {
      isOpen: _isOpen = false,
      shouldCloseOnOverlayClick = true,
      shouldCloseOnEsc = true,
      children,
      closeTimeoutMS = 0,
      className,
      bodyOpenClassName,
      overlayClassName,
      onRequestClose,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(_isOpen);


    useEffect(() => {
      setIsOpen(_isOpen)
    }, [_isOpen])

    useImperativeHandle(
      ref,
      () => {
        return {
          open() {
            setIsOpen(true);
          },
          close() {
            setIsOpen(false);
          },
          toggle() {
            setIsOpen(!_isOpen)
          }
        };
      },
      [_isOpen]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRequestClose = () => {
      setTimeout(onRequestClose, closeTimeoutMS);
    };

    useEffect(() => {
      if (!shouldCloseOnEsc) return;

      const handle = (e) => {
        if (e.code === "Escape") {
          handleRequestClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keyup", handle);
      }

      return () => {
        document.removeEventListener("keyup", handle);
      };
    }, [isOpen, shouldCloseOnEsc, onRequestClose, handleRequestClose]);

    useEffect(() => {
      document.body.classList.add(bodyOpenClassName);
      return () => document.body.classList.remove(bodyOpenClassName);
    }, [bodyOpenClassName]);

    if (!isOpen) return null;

    return (
      <div className={styles.modal}>
        <div className={clsx(styles.content, className)}>
          <button
            className={styles.closeBtn}
            onClick={handleRequestClose}
          >
            &times;
          </button>
          {/* Children */}
          <div className={styles.body}>{children}</div>
        </div>

        {/* Overlay */}
        <div
          className={clsx(styles.overlay, overlayClassName)}
          onClick={() => {
            if (shouldCloseOnOverlayClick) handleRequestClose();
          }}
        />
      </div>
    );
  }
);

export default Modal;
