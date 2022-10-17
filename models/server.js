const cors = require('cors');
const express = require('express');
class Server{

constructor(){
    this.app =  express();
    this.port = process.env.PORT || 440;
    this.path = '/api';
    this.middelwares();
    this.routes();
}

middelwares(){
       //use files json
       this.app.use((express.json({limit: '50mb'})));
       this.app.use(express.urlencoded({limit: '50mb'}));

}

routes(){
    this.app.use(this.path,require('../routes/scraping'))
}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`server run in : http://localhost:${this.port}/api`);
    })

}


}

module.exports = Server;