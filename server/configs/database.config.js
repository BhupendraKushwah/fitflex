const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI).then(() => {
    console.log(`Database connection established`);
}).catch(error => {
    console.error(error, 'Could not establish mongoose connection');
});
