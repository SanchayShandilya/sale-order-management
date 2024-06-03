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

const EditSaleOrderModal = ({ order, onSave, isOpen, onClose }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: order
  });

  React.useEffect(() => {
    setValue('customer', order.customer);
    setValue('items', order.items);
    setValue('total', order.total);
  }, [order, setValue]);

  const onSubmit = (data) => {
    onSave({ ...order, ...data });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="edit-sale-order-form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Customer</FormLabel>
              <Input placeholder="Customer Name" {...register('customer', { required: 'Customer is required' })} />
            </FormControl>
            <FormControl>
              <FormLabel>Items</FormLabel>
              <Input placeholder="Items" {...register('items', { required: 'Items are required' })} />
            </FormControl>
            <FormControl>
              <FormLabel>Total</FormLabel>
              <Input placeholder="Total Amount" {...register('total', { required: 'Total is required' })} />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} form="edit-sale-order-form" type="submit">
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditSaleOrderModal;
