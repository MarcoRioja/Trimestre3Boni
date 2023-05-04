const mDark = document.getElementById('mDark');
const mClear = document.getElementById('mClear');
const body = document.querySelector("body");

var actMode;

if (localStorage.getItem("actMode")) {
    actMode = Number(localStorage.getItem('actMode'));
}

setMode(actMode);

mDark.addEventListener('click', changeMode);
mClear.addEventListener('click', changeMode);

function changeMode() {
    let actMode = localStorage.getItem('actMode');
    if (actMode == 0) {
        localStorage.setItem('actMode', 1);
        setMode(1);
    }
    else {
        localStorage.setItem('actMode', 0);
        setMode(0);
    }
}

function setMode(mode) {
    if (mode == 0) {
        body.classList.remove('clear');
        body.classList.add('dark');
        mClear.style.display = "flex";
        mDark.style.display = "none";
    }
    else {
        body.classList.remove('dark');
        body.classList.add('clear');
        mClear.style.display = "none";
        mDark.style.display = "flex";
    }
}