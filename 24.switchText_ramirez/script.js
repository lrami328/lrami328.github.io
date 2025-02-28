let texts = [
    "A black and white photo of a city alleyway with a dog guarding a metal gate.",
    "This is just a photo I took for class last year. I like how it looks.",
    "Reminds me of my childhood dog and how I used to play with her in my backyard.",
    "This is like a metaphor for dangerous things laying in wait in dark places... dude, I don't know it's just a photograph.",
    "Every dog has his day, unless he loses his tail, then he has a weak-end."
];
let index = 0;

function changeText() {
    document.getElementById("text-box").innerText = texts[index];
    index = (index + 1) % texts.length;
}
// JavaScript Document