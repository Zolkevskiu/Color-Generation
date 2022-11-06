const buttonLock = document.querySelectorAll("button")
const cols = document.querySelectorAll(".col")
const fontLock = document.querySelectorAll(".font-lock")
const titleColor = document.querySelectorAll("h2")

titleColor.forEach(element => {
    const textHover = document.querySelector(".hover-text")
    element.addEventListener("mouseleave", ()=> {
        textHover.style.display = "none"
    })
    element.addEventListener("mousemove", ()=> {
        let textX = event.pageX
        textHover.style.transform  = `translateX(${textX}px)`
        textHover.style.display = "flex"
    })
});

function generationColor() {
    let text = ""
    let possible = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return "#" + text
}

fontLock.forEach(element => {
    element.addEventListener("click", ()=> {
        element.classList.toggle("fa-lock-open")
        element.classList.toggle("fa-lock")
    })
})

function colorCols() {
    cols.forEach(col => {
        const textColor = col.querySelector("h2")
        let buttonCol = col.querySelector("i").classList.contains("fa-lock")
        const ColorGenerate = generationColor()

        if(buttonCol) {
            return
        }
        
        textColor.textContent = ColorGenerate
        col.style.background = ColorGenerate
    })
}

document.addEventListener("keydown", (event) => {
    if (event.code.toLowerCase() == "space") {
        colorCols()
    } 
})
cols.forEach(col => {
    const textColor = col.querySelector("h2")

    textColor.addEventListener("click", () => {
        text = textColor.textContent
        navigator.clipboard.writeText(text)
    })
})

document.querySelector(".text-space").addEventListener("click", ()=> {
    colorCols()
})

colorCols()
