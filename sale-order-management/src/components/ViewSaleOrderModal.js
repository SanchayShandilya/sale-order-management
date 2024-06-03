import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const ViewSaleOrderModal = ({ order, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>View Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl>
              <FormLabel>Customer</FormLabel>
              <Input value={order.customer} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Items</FormLabel>
              <Input value={order.items} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Total</FormLabel>
              <Input value={order.total} isReadOnly />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewSaleOrderModal;
