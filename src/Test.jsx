import React, { useEffect } from 'react';

export default function Test() {

 let API = "https://jsonplaceholder.typicode.com/posts";

  const fetchApiData = async (url) => {
    try {
      const data = await fetch(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <h1>Posts</h1>
    </>
  );
  
}
