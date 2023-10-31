export function fetchLoggedInOrders(userId) {
  
  return new Promise(async (resolve) => {
    try {
      const res = await fetch(`http://localhost:8050/orders/?user.id=`+userId);
      const data = await res.json();
      resolve({ data });
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching products:", error);
      resolve([]); // Return an empty array or handle the error as needed
    }
  });
}