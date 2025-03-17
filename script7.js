console.log("This is a message log");
console.error("This is an error");
console.warn("This is a warning");

console.log("screen width : ",screen.width);
console.log("Screen height : ",screen.height);
console.log("Screen orientation : ",screen.orientation);

console.log(("Location url : "), location.href);
console.log("Location : ", location.pathname);


const div_content = document.getElementById('content');

console.log(div_content.innerText);
console.log(div_content.innerHTML);

const paras = document.getElementsByClassName('message');

console.log(paras);
console.log(paras[0].innerText);

const all_p = document.getElementsByTagName('p');

console.log(all_p);

const paral = document.querySelector('.message');
console.log("First para: ",paral.innerText);
paral.innerText = "Here is the changed text !!!";
console.log(paral.innerText);