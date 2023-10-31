export function addToCart(item) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8050/cart", {
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


export function updateCart(update) {
  console.log({update});
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8050/cart/`+update.id, {
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: { 'content-type': 'application/json' }
      });

      if (!response.ok) {
        // Handle non-successful HTTP responses, e.g., HTTP error codes
        throw new Error('Failed to add item to the cart');
      }
    
      const data = await response.json();
      console.log(data);
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8050/cart/`+itemId, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
      });

      if (!response.ok) {
        // Handle non-successful HTTP responses, e.g., HTTP error codes
        throw new Error('Failed to add item to the cart');
      }

      const data = await response.json();
      resolve({ data :{id:itemId}});
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchItemsByUserId(userId) {
  
  return new Promise(async (resolve) => {
    try {
      const res = await fetch(`http://localhost:8050/cart?user=`+userId);
      const data = await res.json();
      resolve({ data });
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching products:", error);
      resolve([]); // Return an empty array or handle the error as needed
    }
  });
}

export async function resetCart(userId) {
  console.log("userId", userId);

  try {
    const response = await fetchItemsByUserId(userId);
    const items = await response.data; // Use await to parse JSON response.

    for (let item of items) {
      await deleteItemFromCart(item.id);
    }

    return { status: "success" };
  } catch (error) {
    // Handle errors or reject the promise if needed.
    console.error("Error resetting cart:", error);
    throw error;
  }
}



