import React from 'react';
const ItemDetail = ({itemDetail}) => {

  if (Object.keys(itemDetail).length === 0){
    return (<div>LOADING</div>);
  }
  else {
  return (
    <ul className="item-detail">
      <li><h3>{itemDetail.name}</h3></li>
      <li>{itemDetail.price}</li>
      <li>{itemDetail.happiness}</li>
    </ul>
  );}
};


export default ItemDetail;
