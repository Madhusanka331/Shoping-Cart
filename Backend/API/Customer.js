const profile = new Map();
const createProfile = ({ name, email, age }) => {
  const _profile = {
    name,
    email,
    age,
    
  };
  profile.set(_profile.name, _profile);
};

//get
const getProfiles = () => {
  return [...profile.values()];
};

module.exports = { createProfile, getProfiles };
