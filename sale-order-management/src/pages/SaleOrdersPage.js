import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import CreateSaleOrderModal from '../components/CreateSaleOrderModal';
import EditSaleOrderModal from '../components/EditSaleOrderModal';
import ViewSaleOrderModal from '../components/ViewSaleOrderModal';

const fetchSaleOrders = async () => {
  // Simulate an API call
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve([
      { id: 1, customer: 'Customer 1', items: 3, total: '$150', status: 'active' },
      { id: 2, customer: 'Customer 2', items: 5, total: '$250', status: 'completed' },
    ]), 1000)
  );
  return response;
};

const SaleOrdersPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['saleOrders'],
    queryFn: fetchSaleOrders,
  });

  const [orders, setOrders] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [activeOrder, setActiveOrder] = useState(null);
  const [viewOrder, setViewOrder] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setOrders(data);
      const maxId = Math.max(...data.map(order => order.id));
      setNextId(maxId + 1);
    }
  }, [data]);

  const handleCreate = (newOrder) => {
    newOrder.id = nextId;
    newOrder.status = 'active'; // Set default status to active
    setNextId(nextId + 1);
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const handleEdit = (updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map(order => (order.id === updatedOrder.id ? updatedOrder : order))
    );
    setActiveOrder(null);
  };

  const activeOrders = orders.filter(order => order.status === 'active');
  const completedOrders = orders.filter(order => order.status === 'completed');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching sale orders</div>;

  return (
    <Box>
      <Button onClick={() => setActiveOrder({})}>+ Sale Order</Button>
      <Button ml={4} onClick={() => { /* handle active sale orders logic */ }}>Active Sale Orders</Button>
      <Button ml={4} onClick={() => { /* handle completed sale orders logic */ }}>Completed Sale Orders</Button>

      <CreateSaleOrderModal onCreate={handleCreate} isOpen={!!activeOrder} onClose={() => setActiveOrder(null)} />
      {activeOrder && (
        <EditSaleOrderModal
          order={activeOrder}
          onSave={handleEdit}
          isOpen={!!activeOrder}
          onClose={() => setActiveOrder(null)}
        />
      )}
      {viewOrder && (
        <ViewSaleOrderModal
          order={viewOrder}
          isOpen={!!viewOrder}
          onClose={() => setViewOrder(null)}
        />
      )}

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer</Th>
            <Th>Items</Th>
            <Th>Total</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {activeOrders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customer}</Td>
              <Td>{order.items}</Td>
              <Td>{order.total}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  onClick={() => setActiveOrder(order)}
                  mr={2}
                />
                <IconButton
                  icon={<ViewIcon />}
                  onClick={() => setViewOrder(order)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer</Th>
            <Th>Items</Th>
            <Th>Total</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {completedOrders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customer}</Td>
              <Td>{order.items}</Td>
              <Td>{order.total}</Td>
              <Td>
                <IconButton
                  icon={<ViewIcon />}
                  onClick={() => setViewOrder(order)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SaleOrdersPage;
