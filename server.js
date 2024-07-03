console.log('welcome')
const os = require('os')
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
const math = require('./math');
const path = require('path');

const {v4:uuid} = require('uuid')

console.log(math.add(10,10));
const fs = require('fs');
const { error } = require('console');
const {format} = require("date-fns")


fs.readFile(path.join(__dirname,'files','start.txt'),'utf8',(err,data)=>{
    if(err) throw err ;
    console.log(data)

})
fs.writeFile(path.join(__dirname,'files','end.txt'),'hello welcome to node learning',(err)=>{
    if(err) throw err ;
    console.log('writing complete')
    fs.rename(path.join(__dirname,'files','end.txt'),path.join(__dirname,'files','finish.txt'),(err)=>{
        if(err) throw err ;
        console.log('file name changing complete')
    
    })


})

console.log('my New ID : ',uuid())
console.log('my date is : ',format(new Date(),'mm-yy-dd\thh:mm:ss'));
// fs.mkdir('./new',(err)=>{
//     if(err) throw err   
//     console.log('created');
// })



