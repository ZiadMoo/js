for (let i = 0; i < document.getElementsByClassName("input").length; i++) {
    document.getElementsByClassName("input")[i].style = "display : block; padding : 10px;margin :auto;width:300px;box-sizing:border-box;margin-bottom:10px;outline:none;border:1px solid #777;border-radius: 6px; "
}
document.getElementsByClassName("submit")[0].style = "margin:auto;display:block;background-color:#009688; width :300px;padding:10px;color:white;outline:none;border:none;border-radius: 6px;"
document.forms[0].style = "margin:20px 0"
let number = document.querySelectorAll("input")[0];
let txt = document.querySelectorAll("input")[1];
let type = document.getElementsByClassName("input")[2];
let mainElement = document.getElementsByClassName("results")[0]

document.forms[0].onsubmit = function (event) {
    mainElement.innerHTML = ""
    event.preventDefault();
    mainElement.style = "display:grid;justify-content:center;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px"
    for (let i = 0; i < number.value; i++) {
        let theElement = document.createElement(type.value);
        let maintxt = document.createTextNode(txt.value)
        theElement.appendChild(maintxt);
        theElement.className = "box"
        theElement.title = "Element"
        theElement.id = `id-${i + 1}`
        theElement.style = "margin-top:20px;background-color:#009688; color :white; text-align:center ; border-radius:3px;padding: 10px 0"
        mainElement.appendChild(theElement)
    }
} 