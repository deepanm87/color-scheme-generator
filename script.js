const initialColor = document.getElementById("initial")
const colorSelect = document.getElementById("colors")
const dispArray = document.getElementsByClassName("color-disp")
const hexValArray = document.getElementsByClassName("color-hex")
const colorBtn = document.getElementById("color-btn")

colorBtn.addEventListener("click", showColors())

function generateRandomColor() {
    let maxVal = 0xFFFFFF
    let randomNumber = Math.floor(Math.random() * maxVal).toString(16)
    let randomColor = randomNumber.padStart(6, 0)
    return `#${randomColor.toUpperCase()}`
}

initialColor.value = generateRandomColor()

function arrangeColors(object) {
    for (let i = 0; i < 5; i++) {
        dispArray[i].style.backgroundColor = object.colors[i].hex.value
        hexValArray[i].textContent = object.colors[i].hex.value
        hexValArray[i].value = object.colors[i].hex.value
    }
}

function showColors() {
        const colorCode = initialColor.value.slice(1)
        fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorSelect.value}&count=5`)
            .then(res => res.json())
            .then(data => arrangeColors(data))
    
}

function copyText(index) {
    let copiedText = hexValArray[index]
    console.log(copiedText.value)
    navigator.clipboard.writeText(copiedText.value)
    if (copiedText.value != undefined) {
        alert("Copied the color: " + copiedText.value)
    }
}