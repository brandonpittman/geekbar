<template>
  <div class="wrapper">
    <h1>
      <slot name="title"></slot>
    </h1>
    <slot></slot>
  </div>
</template>

<style scoped>
h1 {
  font-size: 6vw;
}

aside {
  font-size: 3rem;
}
</style>
