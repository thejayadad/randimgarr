
let pics = ["pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

let picslength = pics.length;
let ranNum = Math.random();
ranNum = ranNum*picslength;
ranNum = Math.floor(ranNum);
let pickpics = pics[ranNum];
image.src = pickpics;