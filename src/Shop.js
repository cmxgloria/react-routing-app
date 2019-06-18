import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '048bc666a548048036609cb410b1dd3a'
      }
    });
    const result = await response.json();
    console.log(result.data);
    setItems(result.data);

  }
  return (
    <div>
      {items.map(item => (<h1 key={item.itemId}><Link to={`/shop/${item.itemId}`}>{item.item.name}</Link></h1>))}
    </div>
  );
}
export default Shop;
