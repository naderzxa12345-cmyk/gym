let but = document.querySelector('.but');


window.onscroll = function() {
    if (window.scrollY >= 200) {
        but.style.display = 'block';
    } else {
        but.style.display = 'none';
    }
}

but.onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

let btu = document.querySelectorAll('.btu');
let details = document.querySelectorAll('.details')
let arrow = document.querySelectorAll('.arrow');
btu.forEach((btu, index) => {
    btu.onclick = function () {
        details[index].classList.toggle('Show');

        if (arrow[index].innerHTML === '▼') {
            arrow[index].innerHTML = '▲'
        } else {
            arrow[index].innerHTML = '▼'
        }

    }

})






