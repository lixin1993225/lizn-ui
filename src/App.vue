<template>
  <div>
    <tButton >点击</tButton>
    <vInput v-model="val"></vInput>
    <p>{{val}}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const  val = ref("")
</script> 

<style lang="scss" scoped>

</style>