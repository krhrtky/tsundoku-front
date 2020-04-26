import React, { createContext, useContext, useState } from 'react';
import { Modal, useModalNew } from '@/components/hooks/useModal';
import { Confirm } from '@/components/organisms/Modal';

type ContextType = {
  modal: Modal;
  setMessages: (messages: ReadonlyArray<string>) => void;
  setSubmit: (onsubmit: () => Promise<void>) => void;
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
  const [msgs, setMsgs] = useState<ReadonlyArray<string>>([]);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const [onSbmt, setOnSubmit] = useState<() => Promise<void>>(async () => {});
  const setMessages = (messages: ReadonlyArray<string>) => setMsgs(messages);
  const setSubmit = (onSubmit: () => Promise<void>) => setOnSubmit(onSubmit);
  return (
    <Context.Provider value={{ modal, setMessages, setSubmit }}>
      {children}
      <Confirm modal={modal} messages={msgs} onSubmit={onSbmt} />
    </Context.Provider>
  );
};

export const useConfirmModal = (
  messages: ReadonlyArray<string>,
  onSubmit: () => Promise<void>
) => {
  const { modal, setMessages, setSubmit } = useContext(Context);
  setMessages(messages);
  setSubmit(onSubmit);
  return modal.open;
};
