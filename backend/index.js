const express = require('express');

//SETINGS
const app = express();
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

//MIDDLEWARES

//ROUTES

//STARTING SERVER
app.listen(port, ()=>{
    console.log("the budget-app server running on port:",port)
});