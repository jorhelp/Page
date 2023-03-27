function throttle(func, delay) {
    let timer = null
    return function (...args) {
        if (!timer)
            timer = setTimeout(() => {
                func.apply(this, args)
                timer = null
            }, delay)
    }
}

const drag = ($el, dH, mH, uH) => {
    const pos0 = {}
    const moveHandler = throttle(e => {
        e.preventDefault()
        mH && mH(e.clientX - pos0.x, e.clientY - pos0.y)
    }, 50)
    const upHandler = () => {
        $el.removeEventListener('pointermove', moveHandler, false)
        uH && uH()
    }
    $el.addEventListener('pointerdown', e => {
        $el.onTouchStart = e => e.preventDefault()
        e.preventDefault();
        pos0.x = e.clientX
        pos0.y = e.clientY
        dH && dH()
        $el.addEventListener('pointermove', moveHandler, false)
        $el.addEventListener('pointerup', upHandler)
    })
}

const keyboard = {
    $keyboard: document.querySelector('.keyboard'),
    $keys: document.querySelectorAll('.key'),
    $tips: document.querySelector('.tips'),
    $tipsBtn: document.querySelector('.tips__btn'),
    initPos: {x: 0, y: 0, z: 0},
    keyboardRotate(x, y) {
        x = (this.initPos.x + x / 40)
        y = (this.initPos.y - y / 40)
        this.initPos.x = x
        this.initPos.y = y
        this.$keyboard.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`
    },
    run() {
        this.keyboardRotate(0, -500)
        drag(document.querySelector('body'), null, (x, y) => this.keyboardRotate(x, y), null)

        // tips disappear
        this.$tipsBtn.addEventListener('click', e => {
            e.preventDefault()
            this.$tips.classList.add('disappear')
        })

        document.addEventListener('keydown', e => {
            for (let key of this.$keys)
                if (key.dataset.key) {
                    let keycodes = key.dataset.key.split(' ')
                    if (keycodes.includes(e.code) || keycodes.includes(e.key))
                        key.classList.add('active')
                }
        })
        document.addEventListener('keyup', e => {
            for (let key of this.$keys)
                if (key.dataset.key) {
                    let keycodes = key.dataset.key.split(' ')
                    if (keycodes.includes(e.code) || keycodes.includes(e.key))
                        key.classList.remove('active')
                }
        })
    }
}

keyboard.run()