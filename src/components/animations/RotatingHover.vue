<template>
 <div class="rotating-anim">
   <slot/>
 </div>
</template>

<style scoped>
.rotating-anim {
  transition: all .2s ease-in-out;
}

.rotating-anim:hover {
  transform: rotate3d(-0.3, 1, 0.3, 25deg);
}
</style>