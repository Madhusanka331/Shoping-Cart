const traderProfile = new Map();
const createTraderProfile = ({ name, email, age }) => {
  const _traderProfile = {
    name,
    email,
    age,
  };
  traderProfile.set(_traderProfile.name, _traderProfile);
};

//get
const getTraderProfile = () => {
  return [...traderProfile.values()];
};

module.exports = { createTraderProfile, getTraderProfile };
