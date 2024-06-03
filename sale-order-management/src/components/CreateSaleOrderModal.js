import React from 'react';
import { useForm } from 'react-hook-form';
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
  useDisclosure,
} from '@chakra-ui/react';

const CreateSaleOrderModal = ({ onCreate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onCreate(data);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>+ Sale Order</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="create-sale-order-form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.customer}>
                <FormLabel>Customer</FormLabel>
                <Input
                  placeholder="Customer Name"
                  {...register('customer', { required: 'Customer is required' })}
                />
              </FormControl>
              <FormControl isInvalid={errors.items}>
                <FormLabel>Items</FormLabel>
                <Input
                  placeholder="Items"
                  {...register('items', { required: 'Items are required' })}
                />
              </FormControl>
              <FormControl isInvalid={errors.total}>
                <FormLabel>Total</FormLabel>
                <Input
                  placeholder="Total Amount"
                  {...register('total', { required: 'Total is required' })}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} form="create-sale-order-form" type="submit">
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateSaleOrderModal;
