<script setup>
import { computed} from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  title: String,
  text: String,
  headercolor: String,
  textcolor: String,
  useicon: Boolean,
  icon: Object,
  fadein: Boolean
})

const styleObj = computed(() => {
  return {
    "--headercolor" : props.headercolor,
    "--textcolor" : props.textcolor
  }
})

</script>

<template>
  <div :class="{'fade-in' : fadein}" class="text-with-header">
    <h1 :style="styleObj">{{title}} <FontAwesomeIcon :icon="icon" v-if="useicon"/></h1>
    <br/>
    <p :style="styleObj">{{text}}</p>
  </div>
</template>

<style scoped>
h1 {
  text-decoration: none;
  color: var(--headercolor);
}

p {
  color: var(--textcolor);
  line-height: 150%;
  font-size: 22px;
}

.text-with-header {
  text-align: left;
}
</style>