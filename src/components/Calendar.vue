<template>
    <div class="calendar-widget">
        <div class="calendar-header">
            <div class="month-year" id="current-month-year">2023年10月</div>
        </div>

        <div class="weekdays">
            <div class="weekday">日</div>
            <div class="weekday">一</div>
            <div class="weekday">二</div>
            <div class="weekday">三</div>
            <div class="weekday">四</div>
            <div class="weekday">五</div>
            <div class="weekday">六</div>
        </div>

        <div class="days" id="calendar-days">
            <!-- 日期将通过JavaScript动态生成 -->
        </div>

    </div>
</template>


<style lang="less">
@ios-card-bg: #f5f7fa;
@ios-text-primary: #1c1c1e;
@ios-text-secondary: #8e8e93;
@ios-today: #ff3b30;

.calendar-widget {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: @ios-card-bg;
    box-sizing: border-box;
    padding: .5rem;
    display: flex;
    flex-direction: column;

    .calendar-header .month-year {
        font-size: .95rem;
        font-weight: 600;
        color: @ios-today;
        padding-bottom: .3rem;
    }

    .weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);

        .weekday {
            text-align: center;
            font-size: .7rem;
            color: @ios-text-secondary;
            font-weight: bold;
        }
    }

    .days {
        display: grid;
        flex-grow: 1;
        grid-template-columns: repeat(7, 1fr);

        .day {
            text-align: center;
            font-size: .7rem;
            color: @ios-text-primary;
            position: relative;
            cursor: pointer;

            &.other-month {
                color: @ios-text-secondary;
                opacity: 0.6;
            }

            &.today {
                color: @ios-card-bg;
                font-weight: bold;
                z-index: 1;

                &::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, -15%);
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    background-color: @ios-today;
                    z-index: -1;
                }
            }
        }
    }
}
</style>


<script setup>
import { onMounted } from 'vue'


onMounted(() => {
    // 获取当前日期
    const today = new Date()
    let currentDate = new Date(today.getFullYear(), today.getMonth(), 1)

    // DOM元素
    const daysContainer = document.getElementById('calendar-days')
    const monthYearEl = document.getElementById('current-month-year')

    // 更新日历显示
    function renderCalendar() {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()

        // 更新月份和年份显示
        const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        monthYearEl.textContent = `${year}年${monthNames[month]}`

        // 清空日历
        daysContainer.innerHTML = ''

        // 获取当月第一天是星期几（0是星期日）
        const firstDay = new Date(year, month, 1).getDay()

        // 获取当月的天数
        const daysInMonth = new Date(year, month + 1, 0).getDate()

        // 获取上个月的天数
        const daysInPrevMonth = new Date(year, month, 0).getDate()

        // 添加上个月的最后几天
        for (let i = 0; i < firstDay; i++) {
            const day = document.createElement('div')
            day.classList.add('day', 'other-month')
            day.textContent = daysInPrevMonth - firstDay + i + 1
            daysContainer.appendChild(day)
        }

        // 添加当月的天数
        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div')
            day.classList.add('day')
            day.textContent = i

            // 标记今天
            if (i === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()) {
                day.classList.add('today')
            }

            daysContainer.appendChild(day)
        }

        // 计算需要添加多少天才能填满最后一行
        const totalDays = firstDay + daysInMonth
        const daysToAdd = 7 - (totalDays % 7 || 7)

        // 添加下个月的前几天
        for (let i = 1; i <= daysToAdd; i++) {
            const day = document.createElement('div')
            day.classList.add('day', 'other-month')
            day.textContent = i
            daysContainer.appendChild(day)
        }
    }

    // 初始化日历
    renderCalendar()
})
</script>