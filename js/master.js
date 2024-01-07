let main = document.getElementsByTagName('main')[0]
let nymachild = document.getElementById('nymachild')
let nyma = document.getElementById('nyma')
let menuli2 = document.querySelectorAll('.menuli2')
let D = document.getElementById('studiod')
let menu = document.getElementById('menu')
let studio = document.querySelectorAll('#studio')
let text1 = document.getElementById('text1')
let textdesign = document.getElementById('textdesign')
let sec2 = document.getElementById('sec2')
let services = document.querySelectorAll('.services')
let fig2 = document.getElementById('fig2')
let fig3 = document.getElementById('fig3')
let sec3 = document.getElementById('sec3')
let sec4 = document.getElementById('sec4')
let project2 = document.getElementById('project2')
let project3 = document.getElementById('project3')
let wolgadreef = document.getElementById('wolgadreef')
let cobercokwartier = document.getElementById('cobercokwartier')
let wolgadreefchild = document.getElementById('wolgadreefchild')
let cobercokwartierchild = document.getElementById('cobercokwartierchild')
let sec5 = document.getElementById('sec5')
let one = document.getElementById('one')
let two = document.getElementById('two')
let tree = document.getElementById('tree')
let four = document.getElementById('four')
let five = document.getElementById('five')
let aboutus = document.getElementById('aboutus')
let white = document.querySelectorAll('.white')


main.addEventListener('scroll', () => {






    let st = main.scrollTop
    let x = (sec4.offsetTop - sec3.offsetTop) / 3
    let zero = st - sec3.offsetTop
    let aboutoffset = sec4.offsetTop + aboutus.offsetTop
    console.log(aboutoffset);

    if (st > 100) {
        studio.forEach((val) => {
            val.classList.add('[transform:_translateY(100%)]')
        })
        D.classList.add('delay-[0.8s]')
        D.classList.add('[transform:_translateX(-350%)]')
    } else {
        studio.forEach((val) => {
            val.classList.remove('[transform:_translateY(100%)]')
        })
        D.classList.remove('delay-[0.8s]')
        D.classList.remove('[transform:_translateX(-350%)]')
    }




    if (st > ((text1.offsetTop) - 550)) {
        document.querySelectorAll('.text1child').forEach((val) => {
            val.classList.remove('translate-y-[100%]')
            val.classList.remove('opacity-0')
            setTimeout(() => {
                val.classList.remove('duration-[0.4s]')
            }, 500);
        })
    }




    if (st < 400) {
        textdesign.style.transform = 'translateY(' + (Math.floor(st / 5)) + 'px)'
    }

    if (st > ((sec2.offsetTop) - 350)) {
        services.forEach((val) => {
            val.style.transform = 'translateY(-' + ((st - (sec2.offsetTop - 350)) / 5) + 'px)'
        })
    }







    if (st >= (sec3.offsetTop - 400)) {
        let x = st - (sec3.offsetTop - 400)
        if (st <= 4000) {
            sec2.style.transform = 'translateY(' + Math.floor(x) + 'px)'
        }
    }


    // image and text changer
    // image and text changer
    // image and text changer
    if (st >= sec3.offsetTop) {



        let y = fig2.computedStyleMap().get('top')
        y = y.value
        let z = fig3.computedStyleMap().get('top')
        z = z.value
        if ((st - sec3.offsetTop) - (x / 2) < x / 2) {
            fig2.style.top = Math.floor(((st - sec3.offsetTop) - (x / 2))) + 'px'
            project2.style.top = Math.floor(((st - sec3.offsetTop) - (x / 2))) + 'px'
        }
        if (y >= x / 2) {
            fig2.style.top = Math.floor(x / 2)
            project2.style.top = Math.floor(x / 2)
        }



        if (((st - sec3.offsetTop) - ((x / 2) * 3)) < (x / 2)) {
            fig3.style.top = Math.floor(((st - sec3.offsetTop) - ((x / 2) * 3))) + 'px'
            project3.style.top = Math.floor(((st - sec3.offsetTop) - ((x / 2) * 3))) + 'px'
        }
        if (z >= (x / 2)) {
            fig3.style.top = Math.floor((x / 2) * 3)
            project3.style.top = Math.floor((x / 2) * 3)
        }
    }




    if (st >= (sec3.offsetTop - 500)) {
        white.forEach((val) => {
            val.classList.add('text-white')
        })
    } else {
        white.forEach((val) => {
            val.classList.remove('text-white')
        })
    }

    if (st >= (sec4.offsetTop - 500)) {
        white.forEach((val) => {
            val.classList.remove('text-white')
            val.classList.add('text-black')
        })
    }

    if (st >= (sec5.offsetTop - 500)) {
        white.forEach((val) => {
            val.classList.remove('text-black')
            val.classList.add('text-white')
        })
    }


    // sec3 small part
    // sec3 small part
    // sec3 small part
    if (st >= sec3.offsetTop) {

        if (st <= 3650) {
            wolgadreef.style.transform = 'translateY(' + zero / 2 + 'px)'
            wolgadreefchild.style.transform = 'translateY(-' + zero / 2 + 'px)'
        }
    }
    if (st >= (sec3.offsetTop + x)) {
        if (st <= 4350) {
            cobercokwartier.style.transform = 'translateY(' + (zero - x) / 2 + 'px)'
            cobercokwartierchild.style.transform = 'translateY(-' + (zero - x) / 2 + 'px)'
        }
    }




    if (st >= (sec4.offsetTop - 350)) {
        let x = st - (sec4.offsetTop - 350)
        sec3.style.transform = 'translateY(' + x / 2 + 'px)'
        console.log(x);
    }




    if (st >= ((sec4.offsetTop + x) - 450)) {
        sec4.classList.remove('bg-white')
        sec4.classList.add('bg-[#f2ede4]')
    }
    if (st < ((sec4.offsetTop + x) - 450)) {
        sec4.classList.add('bg-white')
        sec4.classList.remove('bg-[#f2ede4]')
    }




    if (st >= sec5.offsetTop) {
        menu.classList.remove('bg-black')
        menu.classList.add('bg-white')
        line1.classList.add('bg-black')
        line1.classList.remove('bg-white')
        line2.classList.add('bg-black')
        line2.classList.remove('bg-white')
        line3.classList.add('bg-black')
        line3.classList.remove('bg-white')
        D.classList.remove('text-black')
        D.classList.add('text-white')

    } else {
        menu.classList.add('bg-black')
        menu.classList.remove('bg-white')
        line1.classList.remove('bg-black')
        line1.classList.add('bg-white')
        line2.classList.remove('bg-black')
        line2.classList.add('bg-white')
        line3.classList.remove('bg-black')
        line3.classList.add('bg-white')
        D.classList.add('text-black')
        D.classList.remove('text-white')

    }


    if (st >= (sec2.offsetTop - 300)) {
        one.style.top = '-100%'
        two.style.top = '0%'
    }
    if (st <= (sec2.offsetTop - 300)) {
        one.style.top = '0%'
        two.style.top = '100%'
    }

    if (st >= (sec3.offsetTop - 300)) {
        two.style.top = '-100%'
        tree.style.top = '0%'
    }
    if (st <= (sec3.offsetTop - 300) && st >= (sec2.offsetTop - 300)) {
        two.style.top = '0%'
        tree.style.top = '100%'
    }

    if (st >= (sec4.offsetTop - 300)) {
        tree.style.top = '-100%'
        four.style.top = '0%'
    }
    if (st <= (sec4.offsetTop - 300) && st >= (sec3.offsetTop - 300)) {
        tree.style.top = '0%'
        four.style.top = '100%'
    }

    if (st >= (aboutoffset - 300)) {
        four.style.top = '-100%'
        five.style.top = '0%'
    }
    if (st <= (aboutoffset - 300) && st >= (sec4.offsetTop - 300)) {
        four.style.top = '0%'
        five.style.top = '100%'
    }

})



// menuli
// menuli
// menuli
let a = document.querySelectorAll('.menuli')
a.forEach((val) => {
    val.addEventListener('mouseenter', (() => {
        let span = val.children[0]
        span.classList.add('left-0')
        span.classList.remove('right-0')
        span.style.width = '100%'

    }))
    val.addEventListener('mouseleave', () => {
        let span = val.children[0]
        span.classList.remove('left-0')
        span.classList.add('right-0')
        span.style.width = '0%'
    })
})

// menu click
// menu click
// menu click
let flag = 1
menu.addEventListener('click', () => {

    let line1 = document.getElementById('line1')
    let line2 = document.getElementById('line2')
    let line3 = document.getElementById('line3')
    let menusection = document.getElementById('menusection')

    if (flag % 2) {
        line2.parentElement.style.opacity = '0'
        studio.forEach((val) => {
            val.classList.add('text-white')
        })
        menusection.classList.add('top-0')
        menusection.classList.remove('top-[-100%]')
        D.classList.add('text-white')
        setTimeout(() => {
            a.forEach((val) => {
                val.classList.remove('translate-y-[-100%]')
                val.classList.add('translate-y-[0]')
            })
        }, 500);
        setTimeout(() => {
            line2.parentElement.style.display = 'none'
            line1.classList.add('[transform:_rotate(45deg)]')
            line3.classList.add('[transform:_rotate(-45deg)]')
            line1.classList.add('bg-black')
            line3.classList.add('bg-black')
            line1.classList.remove('bg-white')
            line3.classList.remove('bg-white')
            line1.parentElement.style.transform = 'translateY(50%) '
            line3.parentElement.style.transform = 'translateY(-50%) '
        }, 400);
        menu.classList.add('bg-white')
        menu.classList.remove('bg-black')

        flag++


    } else {
        menusection.classList.add('top-[-100%]')
        menusection.classList.remove('top-0')
        line2.parentElement.style.display = 'flex'
        a.forEach((val) => {
            val.classList.add('translate-y-[-100%]')
            val.classList.remove('translate-y-[0]')
        })
        setTimeout(() => {
            line2.parentElement.style.opacity = '1'
            studio.forEach((val) => {
                val.classList.remove('text-white')
            })
            D.classList.remove('text-white')
        }, 400);
        line1.classList.remove('[transform:_rotate(45deg)]')
        line3.classList.remove('[transform:_rotate(-45deg)]')
        line1.classList.remove('bg-black')
        line3.classList.remove('bg-black')
        line1.classList.add('bg-white')
        line3.classList.add('bg-white')
        line1.parentElement.style.transform = 'translateY(0%)'
        line3.parentElement.style.transform = 'translateY(0%)'
        menu.classList.remove('bg-white')
        menu.classList.add('bg-black')

        flag++
    }
})

// end menu click
// end menu click
// end menu click


menuli2.forEach((val) => {
    val.addEventListener('mouseenter', (() => {
        let span = val.children[0]
        span.classList.add('left-0')
        span.classList.remove('right-0')
        span.style.width = '100%'

    }))
    val.addEventListener('mouseleave', () => {
        let span = val.children[0]
        span.classList.remove('left-0')
        span.classList.add('right-0')
        span.style.width = '0%'
    })
})


// loading
// loading
// loading
function loading() {
    let video = document.getElementById('video')
    let animation = document.getElementById('animation')
    let loadstudio = document.getElementById('loadstudio')
    let loadtransform = document.getElementById('loadtransform')
    let loaddesign = document.getElementById('loaddesign')
    let spatialdesign = document.querySelectorAll('.spatialdesign')
    setTimeout(() => {
        loadstudio.style.display = 'none'
        setTimeout(() => {
            loadtransform.style.display = 'none'
            setTimeout(() => {
                loaddesign.style.display = 'none'
            }, 1200);
        }, 1200);
    }, 1200);
    let width = video.getBoundingClientRect().width
    let height = video.getBoundingClientRect().height
    let top = video.getBoundingClientRect().top
    let left = video.getBoundingClientRect().left

    // console.log( width+ ',,,,' +height);
    console.log(top);
    console.log(left);
    console.log(width);
    console.log(height);
    console.log(video.getBoundingClientRect());
    setTimeout(() => {
        setTimeout(() => {
            animation.style.width = '96%'
            animation.style.height = '94%'
            animation.style.top = '4%'
            animation.style.left = '2%'
            setTimeout(() => {
                animation.style.width = width+'px'
                animation.style.height = height+'px'
                animation.style.top = top+'px'
                animation.style.left = left+'px'
                setTimeout(() => {
                    animation.style.display = 'none'
                    main.classList.remove('opacity-0')
                    spatialdesign.forEach((val)=>{
                        val.classList.remove('opacity-0')
                        val.classList.remove('translate-y-[100%]')
                    })
                }, 1000);
            }, 1000);
        }, 1000);
    }, 3600);
}

setTimeout(() => {
    loading()
}, 1000);
