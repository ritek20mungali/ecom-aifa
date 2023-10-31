export function createOrder(item) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8050/orders", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'content-type': 'application/json' }
      });

      if (!response.ok) {
        // Handle non-successful HTTP responses, e.g., HTTP error codes
        throw new Error('Failed to add item to the cart');
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });

  
}