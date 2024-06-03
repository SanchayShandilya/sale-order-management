import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

const LoginPage = ({ onLogin }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onLogin(data);
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input {...register('username')} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password')} />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>Login</Button>
      </form>
    </Box>
  );
};

export default LoginPage;
