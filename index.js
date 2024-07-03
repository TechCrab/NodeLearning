const fs = require('fs');
const {v4:uuid} = require('uuid')
const {format} = require("date-fns")
const path =require('path')
const fsPromise = require('fs').promises


const logEvents = async (message)=>{
    const date = format(new Date(),'dd-mm-yyyy')
    const log = `${date}\t${uuid()}\t${message}`
    console.log(log);
    try {
        if(!fs.existsSync(path.join(__dirname,'logs'))) {
         await fs.mkdir(path.join(__dirname,'logs'))
        }
        
        await fsPromise.appendFile(path.join(__dirname,'logs','eventFile.txt'),log)
    } catch(err) {
        console.err(err);
    }
}

module.exports = logEvents