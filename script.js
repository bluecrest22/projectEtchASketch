function createGrid(squaresPerSide) {
    const container = document.querySelector(".container");
    const gridSize = squaresPerSide * squaresPerSide;
    const divWidth = 1000 / squaresPerSide;
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.style.width = `${divWidth}px`;
        div.style.height = `${divWidth}px`;
        container.appendChild(div);

        let opacity = 1;
        div.addEventListener("mouseenter", () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
            div.style.opacity = `{opacity}`;
            opacity -= 0.1;
        });
    }
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.replaceChildren();
    let squaresPerSide = prompt("Enter the number of squares per side.");
    squaresPerSide = parseInt(squaresPerSide, 10);
    createGrid(squaresPerSide);
});