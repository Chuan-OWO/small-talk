//ES6 匯入
import {person} from './personES6.mjs'
import './main.css'; //要找到css loader
console.log(`${person.fN} ${person.lN}`)
const myDiv = document.querySelector('#div1');
myDiv.innerHTML = `<h2>${person.fN} ${person.lN}</h2>`;
//執行 node main.js

//開發階段希望模組化 提升編輯程式效率
//執行時希望打包成一包 提高網頁效能