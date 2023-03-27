<template>
    <el-empty>
        <template class="empty-img" #image>
            <img src="/img/empty.gif" alt="">
        </template>
        <template #description>
            Still developing...
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chuizi"></use>
            </svg>
        </template>
    </el-empty>
</template>


<style lang="less" scoped>
.el-empty {
    height: 100%;
    width: 100%;

    .icon {
        font-size: 1.3rem;
    }
}
</style>