<template>
<li>
    <slot></slot>
</li>
</template>

<script>
    export default {
        name: "My-li"
    }
</script>

<style lang="scss" scoped>
    li {
        float: left;
        width: 50%;
        -webkit-box-sizing: border-box;
        padding-right: 8px;
        margin-bottom: 10px;
        overflow: hidden;
    }
</style>
