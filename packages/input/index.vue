<template>
    <div>
        <input type="text" :value="modelValue" @input="input">
    </div>
</template>
<script lang="ts">
export default {
    name: "vInput"
}
</script>
<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type:String
    }
})
const input = (e:any) => {
    emits("update:modelValue",e.target.value)
} 
</script>

<style scoped>
</style>