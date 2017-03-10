module.exports = (mongoose) => {
  const Schema = mongoose.Schema;

  let configSchema = new Schema({
    name: {type: String, required: true},
    headline: {type: String, required: true},
    bio: {type: String, required: true}
  });

  return mongoose.model('Config', configSchema);
};
