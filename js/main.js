// -----------Cached Elements------------
const input = document.getElementById('numberInput')
const addButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const result = document.getElementById('endResult')
const allClick = document.getElementById('operators')


// -----------Event Listeners---------------
addButton.addEventListener('click', additionBtn)
minusButton.addEventListener('click', subtractionBtn)


// ---------------Functions------------------
function additionBtn(x, y) {
    let total = Number(result.value) + Number(input.value)
    result.value = total
}

function subtractionBtn(x, y) {
    let total = Number(result.value) - Number(input.value)
    result.value = total
}
