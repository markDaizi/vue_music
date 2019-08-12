<template>
<ul>
    <slot></slot>
</ul>
</template>

<script>
    export default {
        name: "my-ul"
    }
</script>

<style lang="scss" scoped>
    .list_container {
        overflow: hidden;
        margin-right: -8px;
    }
</style>
