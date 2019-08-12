<template>
  <div class="mine">
    <mt-cell title="标题文字"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell
            title="标题文字"
            to="//github.com"
            is-link
            value="带链接">
    </mt-cell>
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="标题文字">
      <span>icon 是图片</span>
      <img slot="icon" src="../assets/logo.png" width="24" height="24">
    </mt-cell>
    <mt-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>
  </div>
</template>
