import {
  Modal as ChakraUiModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  component: React.ReactNode;
}> = ({ isOpen, onClose, title, component }) => {
  return (
    <ChakraUiModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{component}</ModalBody>
      </ModalContent>
    </ChakraUiModal>
  );
};

export default Modal;
