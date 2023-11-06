import { useState } from "react";
import {nanoid} from "nanoid";

export default function CartList(){
  console.log('CartList component rendereed');
  const [items,setItems] = useState([
    {id:nanoid(),name:'Hat',quantity:2},
    {id:nanoid(),name:'Tie',quantity:2},
    {id:nanoid(),name:'Belt',quantity:1},
  ]);

let itemCount= 0;
for (const item of items){
  if(item && item.quantity){
    itemCount+=item.quantity;
  }
}

function onNameChange(evt, item){
  const newItems= [...items];
  const index = items.indexOf(item);
  console.log(index);
  newItems[index].name = evt.target.value;
  setItems(newItems);
}

function onAddQuantity(item){
  const newItems = [...items];
  const index = items.indexOf(item);
  newItems[index].quantity++;
  setItems(newItems);
}

function onSubtractQuantity(item){
  const newItems = [...items];
  const index = items.indexOf(item);
  newItems[index].quantity--;
  setItems(newItems);
}

  return(
    <>
    <div className="container">
      <h1 className="fs-1 text-primary me-4">Shopping Cart</h1>
      <span className="fs-3 mb-4 badge rounded-circle text-bg-primary">{itemCount}</span>
      <br />
      <button type="button" className ="btn btn-primary mb-4" onClick={() => setItems([...items, {id:nanoid(), name:'', quantity:1}])}>Add Item</button>
      {items.map(item => 
      <div className="row" key={item.id}>
        <div className="col-4">
      <input type='text' className="form-control" value={item.name} onChange={(evt) =>onNameChange(evt,item)} />
      </div>
      <div className="col-1">
        <span>{item.quantity}</span>
        </div>
      <div className="col-4">
        <button className="btn btn-danger rounded-circle me-3" onClick={() => onSubtractQuantity(item)}>-</button>
        <button className="btn btn-success rounded-circle" onClick={() => onAddQuantity(item)}>+</button>
        </div>
    </div>
    )}
    </div>
    </>
  )
}