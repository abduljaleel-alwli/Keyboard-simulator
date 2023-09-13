const text = document.getElementById('text');
const keys = document.querySelectorAll('#key');
const textArea = document.getElementById('textArea')

const word = 'My keyboard'

window.onload = function () {
    text.innerText = word
    textArea.focus()
}

// #40a8f6

function onkey(k){
    addEventListener('keydown', function keydown(keydown) {
        if (keydown.key == k.innerText) {
            k.style = `background: #0c0cce !important; color: white !important;`
            setTimeout(() => {
                k.style = `background: #000103 !important; color: white !important;`
            }, 300);
        }
        textArea.focus()
    })
}

keys.forEach(key => {
    onkey(key)
    key.onclick = function () {
        textArea.value += key.innerText
    }
});

addEventListener('keydown', function keydown(keydown) {
    console.log(keydown.key);
    keys.style = `background: #40a8f6 !important;`
})
