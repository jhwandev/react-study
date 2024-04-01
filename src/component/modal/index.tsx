// [과제 1]
// Modal 컴포넌트를 만들어 주세요.
// 1. forwardRef, useImperativeHandle을 이용해 구현해 주세요
// 2. open, close, toggle 함수를 ref에서 사용할 수 있도록 구현해 주세요
// 3. children 요소로 모달에 띄워질 페이지를 넣을 수 있게 구현해 주세요
// 4. ReactDOM.createPortal 함수를 사용해 body의 자식 요소로 모달이 띄워지게 해주세요.

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './style.scss';

// # Test
// ref.current?.open();
// ref.current?.close();
// ref.current?.toggle();

// <button onClick={() => ref.current?.toggle()}>Modal Toggle</button>
// ...
// <Modal ref={ref} ><SomePage /></Modal>

interface ModalProps {
  children: React.ReactNode;
}

const modalBackgroundStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '20px',
  position: 'relative',
};

const closeButton: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
};

export const Modal = forwardRef(function Modal({ children }: ModalProps, ref: any) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
    },
    close() {
      setIsOpen(false);
    },
    toggle() {
      setIsOpen(!isOpen);
    },
  }));

  return (
    isOpen && (
      <div
        data-component="modal"
        style={modalBackgroundStyle}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div
          className="modal-content"
          style={modalContentStyle}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            style={closeButton}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </button>
          {children}
        </div>
      </div>
    )
  );
});

export default Modal;
