const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDb', (err) => {
    if (!err) {
        console.log('Db connected successfully...');
    }
    else {
        console.log('Error in Db connection : ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;