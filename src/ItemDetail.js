import React, { useState, useEffect } from 'react';
import './App.css';

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match)
  }, []);

  const [item, setItem] = useState({});
  // const itemid = this.props.match.params.id;
  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '048bc666a548048036609cb410b1dd3a'
        }
      });
    const item = await fetchItem.json();
    setItem(item.data.item);
    console.log(item);
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item && item.images && item.images.icon} alt='' />
    </div>
  );
}
export default ItemDetail;