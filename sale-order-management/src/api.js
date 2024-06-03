// src/api.js

export const fetchSaleOrders = async () => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            customer_profile: {
              name: 'John Doe',
            },
            items: [
              {
                id: 1,
                name: 'Item 1',
                quantity: 2,
              },
            ],
          },
          {
            id: 2,
            customer_profile: {
              name: 'Jane Smith',
            },
            items: [
              {
                id: 2,
                name: 'Item 2',
                quantity: 3,
              },
            ],
          },
        ]);
      }, 1000);
    });
  };
  