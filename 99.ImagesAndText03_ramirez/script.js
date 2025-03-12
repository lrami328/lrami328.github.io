document.addEventListener("DOMContentLoaded", function () {
    const textBox = document.getElementById("imageText");
    const images = document.querySelectorAll(".image-wrapper img");

    const textArray = [
        "B&W photo of the photographer’s shadow being cast down a short flight of concrete stairs. Several rocks lay at the bottom along with a door.",
        "B&W photo of a college student walking through an outdoor concrete walkway. They walk towards a distant staircase that leads to a long road ahead. The student passes several large windows directly to their right side. To their left, beyond the walkway’s barrier, are several leafless trees.",
        "B&W photo of a man fishing at a river. He casts a dark and stark shadow behind him. His bag/equipment lies behind him too. It also casts a sharp shadow of its own. There are many thin curved branches on either side of the frame (closer to the camera). ",
        "B&W photo of a narrow driveway that leads to a garage. The house casts a shadow that nearly covers the whole driveway. Just outside of the shadow’s reach, lays a black and white tuxedo cat. It loafs in the sun while looking at the camera.",
        "B&W photo of a wide city alleyway to the right and a house blocked by barren trees on the left. Several pairs of trash cans line the alleyway. Leading to the house is a short staircase with a metal railing and a metal fence. At the top of the stairs is a black and white dog looking at the camera.",
        "B&W photo of a medium size flowerpot upside down in a pile of small leaves and branches. The pile rests in some kind of divider made of wood. It lays next to a concrete staircase.",
        "B&W photo of a street intersection. The camera took the photo at one of the corners. The road going past the camera to the right has the green light. A man looking at his phone walks across the crosswalk. Nearby, a two-seat beetle car drives past a large, light-colored abandoned building. The sun shines above said building.",
        "B&W photo of several large trees blocking the sun over a hill. The sun casts long shadows across the grass below. A black fence stretches across the lower part of the image. There is someone walking to the right at the top of the hill.",
        "B&W photo of two leafless trees in an open field. The sun shines down from the upper right corner, giving the two trees very stark and defined shadows. There are several more leafless trees in the distant background. There are also a few that have kept their leaves. Among them is a lamp post.",
        "B&W photo of a public bench in a small field surrounded by leafless trees. Dark, long shadows line the grass. Beyond the trees are some tall buildings.",
        "B&W photo of two tree trunks conjoined at their bases. Next to them is a school building with many tree branch shadows covering it.",
        "B&W photo of many leafless branches set against a sunny and cloudy sky. The branches are very dark while the sky is quite bright (thanks to the sun shining just behind the branches)."
    ];

    function updateText() {
        let scrollPosition = document.querySelector(".image-container").scrollTop;
        let imageHeight = images[0].clientHeight + 10; // Including margin
        let index = Math.round(scrollPosition / imageHeight);

        if (index >= 0 && index < textArray.length) {
            textBox.textContent = textArray[index];
        }
    }

    document.querySelector(".image-container").addEventListener("scroll", updateText);
});
// JavaScript Document