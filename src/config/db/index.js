const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tienbippro:tienbippro@atnstore.5u33ngn.mongodb.net/atn_store?retryWrites=true&w=majority', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        });
        console.log('connect successful');
    } catch (error) {
        console.log('connect failed!!!');
    }
}

module.exports = { connect };