const mongoose = require('mongoose');

module.exports = () => {
  
    return mongoose.connect("mongodb+srv://babli:babli12@cluster0.ftssi.mongodb.net/manager");
}
