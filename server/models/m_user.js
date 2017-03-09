module.exports = (mongoose) => {
  const Schema = mongoose.Schema;

  let userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    admin: Boolean,

    created_at: Date,
    updated_at: Date
  });

  userSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;

    if (!this.created_at){
      this.created_at = currentDate;
    }
    
    next();
  });

  return mongoose.model('User', userSchema);
};
