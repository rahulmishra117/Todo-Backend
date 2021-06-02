const mongoose=require('mongoose');
// yaha atlas use krna pdaga


mongoose.connect('mongodb+srv://Rahul:rahul@mycluster0.v5bvh.mongodb.net/Todo_app?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost/todo_app');
const db = mongoose.connection;
//mongoose.connect(url);

// try {
//     // Connect to the MongoDB cluster
//      mongoose.connect(
//       url,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       () => console.log(" Mongoose is connected")
//     );

//   } catch (e) {
//     console.log("could not connect");
//   }



// const db=mongoose.connection;

db.on('error',console.error.bind(console,'error is find'));

db.once('open',function(){
    console.log('Successfully connected to the database');
});


