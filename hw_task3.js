var beep = require('beepbeep');
var colors = require('colors');

console.log('Продвинутый блок: создать с помощью Node.js API консольную программу, которая будет выводить что-либо в консоль разными цветами и издавать звук(и) с помощью модуля или модулей, отличных от рассмотренного на уроке');

beep(1);
console.log('STOP!'.red);
beep(1);
console.log('Wait...'.yellow);
beep(1);
console.log('GO!'.green);