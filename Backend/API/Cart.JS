const profile = new Map();
const createCart = ({ name, age, gender }) => {
  const _profile = {
    name,
    age,
    gender,
  };
  profile.set(_profile.name, _profile);
};

//get
const getProfiles = () => {
  return [...profile.values()];
};

module.exports = { createProfile, getProfiles };