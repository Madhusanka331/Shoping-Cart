const items = new Map();
const addItems = ({ itemName, price, quantity }) => {
  console.log(itemName, price, quantity);
  const _items = {
    itemName,
    price,
    quantity,
  };
  
  items.set(_items.itemName, _items);
};

//get
const getItems = () => {
  return [...items.values()];
};
const getItemsById = (id) => {
  return items.get(id);
}

const updateItemsById = (id ,  {itemName,price, quantity})=> {
  items.set(id, { itemName, price, quantity});
}

module.exports = { addItems, getItems ,  getItemsById , updateItemsById};