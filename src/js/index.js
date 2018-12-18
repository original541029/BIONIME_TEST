// import 'jquery';
// import 'bootstrap/dist/js/bootstrap';
// import siteAdd from "./site-add.js"
// import siteList from "./site-list.js"
// import styles from "../scss/index.scss"
// window.onload = () => {
//   siteAdd();
//   siteList();
  
// }
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

// const arr = ['mike', 'andy', '111', '123'];
// arr.map(obj => console.log(obj))F