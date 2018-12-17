import siteAdd from "./site-add.js"
import siteList from "./site-list.js"
import styles from "../scss/app.scss"

import {
  EMLINK
} from "constants";

window.onload = () => {
  siteAdd();
  siteList();
}
class ForLoop {
  static basicLoop(ary, strElm, elm) {
    let str = ``;
    for (let val of ary) {
      console.log(val)
      str += `<${strElm}>${val}</${strElm}>`
    }
    elm.innerHTML = str;
  }
}
let ary = ['新增站點', '站點列表', '新增護士', '護士列表']
let navGroup=document.querySelector('.nav-group');
ForLoop.basicLoop(ary,`li`,navGroup)
// const arr = ['mike', 'andy', '111', '123'];
// arr.map(obj => console.log(obj))F