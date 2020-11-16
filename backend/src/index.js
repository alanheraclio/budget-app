const server = require("./server");
const router = require("./routes/balance.routes");
require('./database');

const port = server.get('port');

server.use(router);

server.listen(port, ()=>{
    console.log("the budget-app server running on port:",port);
});