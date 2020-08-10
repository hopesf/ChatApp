const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect(process.env.DB_STRING ,{ useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('open',() =>{
        console.log('uzak db bağlandı.') ;
    });

    mongoose.connection.on('error',(err)=>{
        console.log('uzak db bağlanamadı',err) ;
    });
};