import React, { createContext, useContext, useEffect, useState } from 'react';
import { Modal, useModalNew } from '@/components/hooks/useModal';
import { Confirm } from '@/components/organisms/Modal';

type ContextType = {
  modal: Modal;
  setMessages: (messages: ReadonlyArray<string>) => void;
  setSubmit: (onSubmit: { execute: () => Promise<void> }) => void;
};

const initialValue: ContextType = {
  modal: {
    isOpen: false,
    open: () => {
      throw new Error('Context does not inject.');
    },
    close: () => {
      throw new Error('Context does not inject.');
    }
  },
  setMessages: _ => {
    throw new Error('Context does not inject.');
  },
  setSubmit: _ => {
    throw new Error('Context does not inject.');
  }
};

const Context = createContext(initialValue);

export const ConfirmModalProvider: React.FC = ({ children }) => {
  const modal = useModalNew();
  const [messages, setMessages] = useState<ReadonlyArray<string>>([]);
  const [onSubmit, setOnSubmit] = useState<{ execute: () => Promise<void> }>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    execute: async () => {}
  });
  return (
    <Context.Provider
      value={{ modal, setMessages: setMessages, setSubmit: setOnSubmit }}
    >
      {children}
      <Confirm modal={modal} messages={messages} onSubmit={onSubmit.execute} />
    </Context.Provider>
  );
};

export const useConfirmModal = (messages: ReadonlyArray<string>) => {
  const { modal, setMessages, setSubmit } = useContext(Context);
  useEffect(() => {
    setMessages(messages);
  }, []);
  return (onSubmit: () => Promise<void>) => {
    setSubmit({ execute: onSubmit });
    modal.open();
  };
};
