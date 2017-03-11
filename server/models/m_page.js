module.exports = (mongoose) => {
  const Schema = mongoose.Schema;

  let pageSchema = new Schema({
    name: {type: String, required: true},
    url: {type: String, required: true },
    content: String,
    homepage: Boolean,
    subpages: {type: Array, default: []}
  });

  return mongoose.model('Page', pageSchema);
};
