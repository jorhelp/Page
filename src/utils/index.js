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

function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => func.apply(this, args), delay)
    }
}

function isMobile() {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag
}

class Drag {
    constructor(targetQuery, containerQuery) {
        this.$target = document.querySelector(targetQuery)
        this.$container = document.querySelector(containerQuery)
        this.initPos = { x: 0, y: 0, z: 0 }
        this.dHListener = null
    }
    rotate(x, y) {
        x = (this.initPos.x + x / 40)
        y = (this.initPos.y - y / 40)
        this.initPos.x = x
        this.initPos.y = y
        this.$target.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`
    }
    drag(downHandler, moveHandler, upHandler) {
        const pos0 = {}
        const _moveHandler = throttle(e => {
            e.preventDefault()
            moveHandler && moveHandler(e.clientX - pos0.x, e.clientY - pos0.y)
        }, 50)
        const _upHandler = () => {
            this.$container.removeEventListener('pointermove', _moveHandler, false)
            upHandler && upHandler()
        }
        this.dHListener = this.$container.addEventListener('pointerdown', e => {
            if (e.target === this.$container) {
                this.$container.onTouchStart = e => e.preventDefault()
                e.preventDefault()
                pos0.x = e.clientX
                pos0.y = e.clientY
                downHandler && downHandler()
                this.$container.addEventListener('pointermove', _moveHandler, false)
                this.$container.addEventListener('pointerup', _upHandler)
            }
        })
    }
    run() {
        this.$container.removeEventListener('pointerdown', this.dHListener)
        this.drag(null, (x, y) => this.rotate(x, y), null)
    }
}

function drawArc(options) {
    if (!options.$father) return
    const $father = options.$father
    const radius = options.radius || '50px'
    const height = options.height || '50px'
    const color = options.color || '#eee'
    const count = options.count || 10
    const deg = options.deg || 90
    const classList = options.classList || []

    const $dom = document.createElement('div')
    $dom.style.transformStyle = 'preserve-3d'
    for (let cls of classList) $dom.classList.add(cls)

    const itemHeight = `calc(${radius} * 2 * ${Math.sin((deg / count / 2) * Math.PI / 180)})`
    const itemWidth = height
    let transZ = '', transY = ''
    for (let i = 0; i < count; i++) {
        const $item = document.createElement('div')
        $item.style.height = `calc(${itemHeight} + 2px)`  // 2px 来填充块与块之间的微小空隙
        $item.style.width = itemWidth
        $item.style.background = color
        $item.style.transformOrigin = 'center top'
        $item.style.position = 'absolute'

        const curDeg = i * (deg / (count - 1))
        const preDeg = i === 0 ? 0 : (i - 1) * (deg / (count - 1))

        if (transZ !== '') transZ += ' + '
        if (transY !== '') transY += ' + '
        transZ += `${itemHeight} * ${Math.sin(preDeg * Math.PI / 180)}`
        transY += `${itemHeight} * ${Math.cos(preDeg * Math.PI / 180)}`
        $item.style.transform = `translate3d(0, calc(${transY}), calc(${transZ})) rotateX(${curDeg}deg)`

        $dom.appendChild($item)
    }
    $father.appendChild($dom)
}

function getTime() {
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    h = h < 10 ? `0${h}` : h
    m = m < 10 ? `0${m}` : m
    return `${h}:${m}`
}


export { debounce, throttle, Drag, drawArc, isMobile, getTime }