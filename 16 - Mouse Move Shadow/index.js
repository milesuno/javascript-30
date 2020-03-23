const titleDiv = document.querySelector(".hero");
const title = titleDiv.querySelector("h1");
const travelDistance = 250;

titleDiv.addEventListener("mousemove", handleMouseOver);

function handleMouseOver(e) {
    let { offsetWidth: width, offsetHeight: height } = titleDiv;
    let { offsetX: x, offsetY: y } = e;
    if (e.target !== titleDiv) return;
    let xtravel = Math.round((x / width) * travelDistance - travelDistance / 2);
    let ytravel = Math.round((y / height) * travelDistance - travelDistance / 2);

    console.log(xtravel, ytravel)
    title.style.textShadow = `${xtravel}px ${ytravel}px 0 red`;
}