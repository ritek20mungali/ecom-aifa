// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>{
    const res=fetch("http://localhost:8000")
    const data= res.json();
    resolve(data)
  }
  );
}
