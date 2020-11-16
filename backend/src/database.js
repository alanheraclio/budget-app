const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/budget-app',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db=>console.log("budget-app db is connected"))
  .catch(err => console.log(err));