module.exports = (mongoose) => {
  const Schema = mongoose.Schema;

  let pageSchema = new Schema({
    p_id: Number,
    name: {type: String, required: true},
    content: String,
    homepage: Boolean,
    subpages: {type: Array, default: []}
  });

  return mongoose.model('Page', pageSchema);
};
