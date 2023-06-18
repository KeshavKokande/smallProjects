const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    // automatically copies the text whenever button is clicked
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

// init call
getColor();