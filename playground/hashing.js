const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var passsword = '123abc!';

// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(passsword,salt,(err,hash)=>{
//         console.log(hash);
//     });
// });
var hashedPassword = '$2a$10$cRJxExFGnbPuYOySMY2uI.g1Ocufh3xpb8yAnXVpBWWVtUq6Vepc6';
bcrypt.compare(passsword,hashedPassword,(err,res)=>{
    console.log(res);
});

// var data = {
//     id:7
// };
// var token = jwt.sign(data,'123abc');
// console.log(`Message ${token}`);
// var decoded = jwt.verify(token + '1','123abc');
// console.log(`Decoded ${decoded}`)

// var message ="I am user number 7";

// var hash = SHA256(message).toString();

// console.log(`Message ${message}`);
// console.log(`Hash ${hash}`);

// var data ={
//     id:4
// };

// var token = {
//     data,
//     hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecrete').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('data was changed');
// }