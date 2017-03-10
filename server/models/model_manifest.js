module.exports = (mongoose) => {
  const pre = './m_'
  return{
    // Models to load:
    User: require(pre + 'user')(mongoose),
    Config: require(pre + 'config')(mongoose),
  };
};
