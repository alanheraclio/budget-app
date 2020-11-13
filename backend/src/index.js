const server = require("./server");
const morgan = require("morgan");
const router = require("./routes/balance.routes");

const port = server.get('port');

server.use(morgan("dev"));

server.use(router);

server.listen(port, ()=>{
    console.log("the budget-app server running on port:",port);
});