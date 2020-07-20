const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const findOrCreate= require('mongoose-find-or-create');

const userSchema = new Schema({
    Id:{
        type: String,
        unique: true
    },
    name: String,
    kadi: String,
    sifre: String,
    profilePhotoUrl: String
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('users', userSchema);