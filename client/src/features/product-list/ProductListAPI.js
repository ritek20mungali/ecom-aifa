
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    try {
      const res = await fetch("http://localhost:8050/products");
      const data = await res.json();
      resolve({ data });
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching products:", error);
      resolve([]); // Return an empty array or handle the error as needed
    }
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    try {
      const res = await fetch(`http://localhost:8050/products/`+id);
      const data = await res.json();
      resolve({ data });
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching products:", error);
      resolve([]); // Return an empty array or handle the error as needed
    }
  });
}


export function fetchProductsByFilters(filter, sort, pagination) {
  let queryString = '';
console.log(filter)
  for (let key in filter) {

    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    try {
      const res = await fetch(`http://localhost:8050/products?${queryString}`);
      const data = await res.json();
      const totalItems = await res.headers.get('X-Total-Count');
      resolve({ data: { products: data, totalItems: +totalItems } });
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching products:", error);
      resolve([]);
    } 
  });
}


export function fetchCategory() {
  return new Promise(async (resolve) => {
    try {
      const res = await fetch("http://localhost:8050/category");
      const data = await res.json();
      resolve({ data });
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching products:", error);
      resolve([]); // Return an empty array or handle the error as needed
    }
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    try {
      const res = await fetch("http://localhost:8050/brands");
      const data = await res.json();
      resolve({ data });
    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching products:", error);
      resolve([]); // Return an empty array or handle the error as needed
    }
  });
}