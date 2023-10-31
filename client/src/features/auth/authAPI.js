export function createUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = fetch("http://localhost:8050/users/signup", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' }
    })
    if(res.ok){
      const data = await res.json();
      resolve({data})
    }else{
      const error = await res.json();
      reject({error})
    }
    } catch (error) {
      reject({error});
    } 
      
  });
}

export function checkUserById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`http://localhost:8050/users/${id}`,{
        method: 'POST',
        body: JSON.stringify(id),
        headers: { 'content-type': 'application/json' }
      });
      if(res.ok){
        const data = await res.json();
        resolve({data})
      }else{
        const error = await res.json();
        reject(error)
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function checkUser(LogInInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`http://localhost:8050/users/login`,{
        method: 'POST',
        body: JSON.stringify(LogInInfo),
        headers: { 'content-type': 'application/json' }
      });
      if(res.ok){
        const data = await res.json();
        resolve({data})
      }else{
        const error = await res.json();
        reject(error)
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function updateUser(update) {
  return new Promise((resolve, reject) => {
    fetch( `http://localhost:8050/users/`+update.id  , {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          // Handle non-successful HTTP responses, e.g., HTTP error codes
          reject(new Error('Failed to create user'));
        } else {
          return res.json();
        }
      })
      .then((data) => {
        resolve({data});
      })
      .catch((error) => {
        // Handle any potential errors here
        console.error("Error creating user:", error);
        reject(error);
      });
  });
}


export function signOut(userId) {
  return new Promise(async (resolve, reject) => {
     
    resolve({data:'success'});
  });
}