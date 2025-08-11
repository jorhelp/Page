<template>
    <div class="cal-background">
        <div class="calculator">
            <!-- 显示屏 -->
            <div class="display-container">
                <div id="display">0</div>
            </div>

            <!-- 按钮区域 -->
            <div class="buttons">
                <!-- 第一行 -->
                <button class="calc-btn btn-light-gray" data-action="clear">AC</button>
                <button class="calc-btn btn-light-gray" data-action="sign">±</button>
                <button class="calc-btn btn-light-gray" data-action="percent">%</button>
                <button class="calc-btn btn-orange" data-action="divide">÷</button>

                <!-- 第二行 -->
                <button class="calc-btn btn-gray" data-number="7">7</button>
                <button class="calc-btn btn-gray" data-number="8">8</button>
                <button class="calc-btn btn-gray" data-number="9">9</button>
                <button class="calc-btn btn-orange" data-action="multiply">×</button>

                <!-- 第三行 -->
                <button class="calc-btn btn-gray" data-number="4">4</button>
                <button class="calc-btn btn-gray" data-number="5">5</button>
                <button class="calc-btn btn-gray" data-number="6">6</button>
                <button class="calc-btn btn-orange" data-action="subtract">−</button>

                <!-- 第四行 -->
                <button class="calc-btn btn-gray" data-number="1">1</button>
                <button class="calc-btn btn-gray" data-number="2">2</button>
                <button class="calc-btn btn-gray" data-number="3">3</button>
                <button class="calc-btn btn-orange" data-action="add">+</button>

                <!-- 第五行 -->
                <button class="calc-btn btn-gray btn-zero" data-number="0">0</button>
                <button class="calc-btn btn-gray" data-number=".">.</button>
                <button class="calc-btn btn-orange" data-action="equals">=</button>
            </div>
        </div>
    </div>

</template>


<style lang="less" scoped>
@ios-gray: #333333;
@ios-light-gray: #a5a5a5;
@ios-orange: #ff9f0a;
@ios-dark: #1c1c1c;
@ios-white: #ffffff;

@shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
@button-size: 80vh * 0.09;
@button-gap: 80vh * 0.01;

* {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.cal-background {
    .calculator {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: @ios-dark;
        padding: @button-gap * 3;
        display: flex;
        flex-direction: column;

        /* 显示屏样式 */
        .display-container {
            flex-grow: 1;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            margin-bottom: 1rem;
            padding-right: 5px;
            overflow: auto;
            scrollbar-width: none;

            #display {
                font-size: 4rem;
                font-weight: 400;
                text-align: right;
                white-space: nowrap;
                max-width: 100%;
                line-height: 1;
                color: @ios-white;
            }
        }

        /* 按钮区域样式 */
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: @button-gap;

            .calc-btn {
                width: @button-size;
                height: @button-size;
                border-radius: 50%;
                border: none;
                font-size: 2rem;
                font-weight: 500;
                justify-self: center;
                align-self: center;
                &:active {
                    transform: scale(0.9);
                }
            }
            .btn-zero {
                grid-column: span 2;
                width: calc(@button-size * 2 + @button-gap);
                border-radius: 2.3rem;
                justify-content: flex-start;
                padding-left: 1.4rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: @shadow;
                transition: all 0.1s ease;
                user-select: none;
            }
        }
    }
}

.btn-gray {
    background-color: @ios-gray;
    color: white;
}

.btn-gray:hover {
    background-color: #555555;
}

.btn-light-gray {
    background-color: @ios-light-gray;
    color: black;
}

.btn-light-gray:hover {
    background-color: #cccccc;
}

.btn-orange {
    background-color: @ios-orange;
    color: white;
}

.btn-orange:hover {
    background-color: #ffb74d;
}

.btn-orange-active {
    background-color: white;
    color: @ios-orange;
}

/* 滚动条样式 */
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}
</style>


<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // 获取DOM元素
    const numberButtons = document.querySelectorAll('[data-number]')
    const display = document.getElementById('display')
    const operatorButtons = document.querySelectorAll('[data-action="add"], [data-action="subtract"], [data-action="multiply"], [data-action="divide"]')
    //const historyContainer = document.getElementById('history-container')
    //const historyToggle = document.getElementById('history-toggle')
    //const clearHistoryBtn = document.getElementById('clear-history')
    const clearButton = document.querySelector('[data-action="clear"]')
    const actionButtons = document.querySelectorAll('[data-action]')
    // 计算器状态
    let currentValue = '0'
    let previousValue = null
    let operator = null
    let resetOnNextInput = false
    let hasDecimal = false
    let lastActionWasOperator = false
    let calculationExpression = '' // 用于记录计算表达式
    let history = [] // 存储历史记录

    // 初始化 - 从localStorage加载历史记录
    function init() {
        //const savedHistory = localStorage.getItem('calculatorHistory')
        //if (savedHistory) {
        //    history = JSON.parse(savedHistory)
        //    renderHistory()
        //}
    }
    // 高亮按钮的辅助函数
    function highlightButton(selector) {
        const button = document.querySelector(selector)
        if (button) {
            button.style.transform = 'scale(0.9)'
            setTimeout(() => {
                button.style.transform = 'scale(1)'
            }, 100)
        }
    }

    // 更新显示屏
    function updateDisplay() {
        // 处理大数字的显示
        if (currentValue.length > 9) {
            // 尝试使用科学计数法
            const num = parseFloat(currentValue)
            if (!isNaN(num)) {
                display.textContent = num.toExponential(5)
                return
            }
        }

        if (display) {
            display.textContent = currentValue

            // 自动滚动到显示末尾
            display.scrollLeft = display.scrollWidth
        }
    }

    // 重置运算符按钮样式
    function resetOperatorButtons() {
        operatorButtons.forEach(btn => {
            btn.classList.remove('btn-orange-active')
            btn.classList.add('btn-orange')
        })
    }

    // 高亮当前运算符按钮
    function highlightOperatorButton(action) {
        resetOperatorButtons()
        const btn = document.querySelector(`[data-action="${action}"]`)
        if (btn) {
            btn.classList.remove('btn-orange')
            btn.classList.add('btn-orange-active')
        }
    }

    // 处理数字输入
    function handleNumberInput(number) {
        // 更新清除按钮文本
        clearButton.textContent = 'C'

        // 如果需要重置显示（例如刚计算完或刚输入运算符）
        if (resetOnNextInput) {
            currentValue = '0'
            resetOnNextInput = false
            hasDecimal = false
        }

        // 处理小数点
        if (number === '.') {
            if (hasDecimal) return // 已经有小数点
            hasDecimal = true
            if (currentValue === '0') {
                currentValue += number
            } else {
                currentValue += number
            }
        }
        // 处理数字
        else {
            if (currentValue === '0') {
                currentValue = number
            } else {
                // 限制最大长度
                if (currentValue.length < 9) {
                    currentValue += number
                }
            }
        }

        lastActionWasOperator = false
        updateDisplay()
    }

    // 处理操作符
    function handleOperator(action) {
        // 特殊操作：清除
        if (action === 'clear') {
            // 如果当前显示不是0，只清除当前输入
            if (currentValue !== '0' || previousValue !== null) {
                currentValue = '0'
                hasDecimal = false
                resetOnNextInput = false
                resetOperatorButtons()
                updateDisplay()

                // 如果长按清除按钮，重置所有状态
                let clearTimeout
                clearButton.textContent = 'AC'

                clearTimeout = setTimeout(() => {
                    previousValue = null
                    operator = null
                    calculationExpression = ''
                    updateDisplay()
                }, 800)

                // 清除长按定时器
                const clearLongPress = () => {
                    clearTimeout(clearTimeout)
                    clearButton.textContent = currentValue === '0' && previousValue === null ? 'AC' : 'C'
                }

                clearButton.addEventListener('mouseup', clearLongPress, { once: true })
                clearButton.addEventListener('mouseleave', clearLongPress, { once: true })
            }
            return
        }

        // 特殊操作：正负号
        if (action === 'sign') {
            if (currentValue !== '0') {
                currentValue = currentValue.startsWith('-')
                    ? currentValue.substring(1)
                    : '-' + currentValue
                updateDisplay()
            }
            return
        }

        // 特殊操作：百分比
        if (action === 'percent') {
            const value = parseFloat(currentValue) / 100
            currentValue = value.toString()
            hasDecimal = currentValue.includes('.')
            // 限制小数位数
            if (currentValue.includes('.') && currentValue.length > 10) {
                currentValue = parseFloat(currentValue).toFixed(6)
                // 移除末尾的0
                currentValue = currentValue.replace(/\.?0+$/, '')
            }
            updateDisplay()
            return
        }

        // 处理等号
        if (action === 'equals' && operator && previousValue !== null) {
            // 保存完整表达式
            const fullExpression = `${calculationExpression} ${currentValue}`
            calculateResult()

            //// 添加到历史记录
            //if (currentValue !== '错误') {
            //    addToHistory(fullExpression, currentValue)
            //}

            resetOperatorButtons()
            operator = null
            previousValue = null
            calculationExpression = ''
            resetOnNextInput = true
            lastActionWasOperator = false
            return
        }

        // 处理其他运算符
        if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
            // 如果之前已经有运算符，先计算结果
            if (operator && previousValue !== null && !lastActionWasOperator) {
                calculateResult()
                previousValue = currentValue
            } else {
                // 保存当前值作为前一个值
                previousValue = currentValue
            }

            // 更新计算表达式
            if (calculationExpression === '') {
                calculationExpression = currentValue
            } else {
                calculationExpression = currentValue
            }

            // 添加运算符符号
            switch (action) {
                case 'add':
                    calculationExpression += ' +'
                    break
                case 'subtract':
                    calculationExpression += ' −'
                    break
                case 'multiply':
                    calculationExpression += ' ×'
                    break
                case 'divide':
                    calculationExpression += ' ÷'
                    break
            }

            // 记录当前运算符并高亮
            operator = action
            highlightOperatorButton(action)
            resetOnNextInput = true
            lastActionWasOperator = true
        }
    }

    // 计算结果
    function calculateResult() {
        const prev = parseFloat(previousValue)
        const current = parseFloat(currentValue)
        let result

        switch (operator) {
            case 'add':
                result = prev + current
                break
            case 'subtract':
                result = prev - current
                break
            case 'multiply':
                result = prev * current
                break
            case 'divide':
                if (current === 0) {
                    result = '错误'
                } else {
                    result = prev / current
                }
                break
            default:
                return
        }

        // 处理计算结果
        if (result === '错误') {
            currentValue = result
            hasDecimal = false
        } else {
            // 处理小数位数，最多9位
            let resultStr = result.toString()
            if (resultStr.includes('.') && resultStr.length > 10) {
                // 四舍五入到合适的小数位数
                const integerPart = resultStr.split('.')[0]
                const maxDecimalDigits = 9 - integerPart.length
                if (maxDecimalDigits > 0) {
                    result = parseFloat(result.toFixed(maxDecimalDigits))
                } else {
                    // 如果整数部分太长，使用整数
                    result = Math.round(result)
                }
                resultStr = result.toString()
            }

            // 去除末尾的0和多余的小数点
            if (resultStr.includes('.')) {
                resultStr = resultStr.replace(/\.?0+$/, '')
            }

            currentValue = resultStr
            hasDecimal = currentValue.includes('.')
        }

        // 更新前一个值为当前结果，以便连续计算
        previousValue = currentValue
        updateDisplay()
    }
    // 绑定数字按钮事件
    numberButtons.forEach(button => {
        // 鼠标点击
        button.addEventListener('click', () => {
            handleNumberInput(button.getAttribute('data-number'))
        })

        // 触摸设备支持
        button.addEventListener('touchstart', (e) => {
            e.preventDefault()
            button.style.transform = 'scale(0.9)'
        })

        button.addEventListener('touchend', (e) => {
            e.preventDefault()
            button.style.transform = 'scale(1)'
            handleNumberInput(button.getAttribute('data-number'))
        })
    })

    // 绑定操作按钮事件
    actionButtons.forEach(button => {
        // 鼠标点击
        button.addEventListener('click', () => {
            handleOperator(button.getAttribute('data-action'))
        })

        // 触摸设备支持
        button.addEventListener('touchstart', (e) => {
            e.preventDefault()
            button.style.transform = 'scale(0.9)'
        })

        button.addEventListener('touchend', (e) => {
            e.preventDefault()
            button.style.transform = 'scale(1)'
            handleOperator(button.getAttribute('data-action'))
        })
    })

    // 添加键盘支持
    document.addEventListener('keydown', (e) => {
        // 数字键
        if (e.key >= '0' && e.key <= '9') {
            e.preventDefault()
            handleNumberInput(e.key)
            highlightButton(`[data-number="${e.key}"]`)
        }

        // 小数点
        if (e.key === '.' || e.key === ',') {
            e.preventDefault()
            handleNumberInput('.')
            highlightButton('[data-number="."]')
        }

        // 运算符
        if (e.key === '+') {
            e.preventDefault()
            handleOperator('add')
            highlightButton('[data-action="add"]')
        }

        if (e.key === '-') {
            e.preventDefault()
            handleOperator('subtract')
            highlightButton('[data-action="subtract"]')
        }

        if (e.key === '*') {
            e.preventDefault()
            handleOperator('multiply')
            highlightButton('[data-action="multiply"]')
        }

        if (e.key === '/') {
            e.preventDefault()
            handleOperator('divide')
            highlightButton('[data-action="divide"]')
        }

        // 等号
        if (e.key === '=' || e.key === 'Enter') {
            e.preventDefault()
            handleOperator('equals')
            highlightButton('[data-action="equals"]')
        }

        // 清除
        if (e.key === 'Backspace' || e.key === 'Delete') {
            e.preventDefault()
            handleOperator('clear')
            highlightButton('[data-action="clear"]')
        }

        // 正负号
        if (e.key === 's' || e.key === 'S') {
            e.preventDefault()
            handleOperator('sign')
            highlightButton('[data-action="sign"]')
        }

        // 百分比
        if (e.key === '%') {
            e.preventDefault()
            handleOperator('percent')
            highlightButton('[data-action="percent"]')
        }
    })

    // 初始化
    init()
    updateDisplay()
})
</script>