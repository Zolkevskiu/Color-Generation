const button = document.querySelectorAll("button")
const cols = document.querySelectorAll(".col")

function generationColor() {
    let text = ""
    let possible = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return '#' + text
}
function colorCols() {
    cols.forEach(col => {
        const textColor = col.querySelector("h2")
        const ColorGenerate = generationColor()

        textColor.textContent = ColorGenerate
        col.style.background = ColorGenerate
    })
}


document.addEventListener("keydown", (event) => {
    if (event.code.toLowerCase() == "space") {
        colorCols()
    }
})

button.forEach(e => {
    e.addEventListener("click", () => {

    })
})
cols.forEach(col => {
    const textColor = col.querySelector("h2")

    textColor.addEventListener("click", () => {
        text = textColor.textContent
        navigator.clipboard.writeText(text)
    })
})
colorCols()