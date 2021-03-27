const fs = require('fs');
const { EventEmitter } = require('events');
const homework = new EventEmitter();

const readFileTxt = fs.readFileSync('./Homeworks.txt', "utf-8");

homework.on('data', (a) => {
    console.log(a);
});

homework.emit('data',readFileTxt);