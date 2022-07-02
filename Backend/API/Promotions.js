const promotions = new Map();
const addPromotions = ({ promotionName, discount }) => {
  const _promotions = {
    promotionName,
    discount
  };
  promotions.set(_promotions.itemName, _promotions);
};

//get
const getPromotions = () => {
  return [...promotions.values()];
};

module.exports = { addPromotions, getPromotions };