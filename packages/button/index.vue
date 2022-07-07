<template>
    <div class="v-button">
        <button :class="buttonClass">
            <slot></slot>
        </button>
    </div>
</template>
<script lang="ts">
export default {
    name: "tButton",
};
</script>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
    type: {
        type: String,
        default: "default",
    },
});
const buttonClass = computed(()=>{
    return [`v-button-${props.type}`]
})
</script>

<style scoped lang="scss">
button {
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
    transition: all 0.5s linear 0s;
    &:hover{
        box-shadow: #ccc 0px 0px 5px;
    }
}

.v-button {
    button {
        padding: 12px 24px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }

}
.v-button-success{
    background:green
}
.v-button-default{
    background:null
}
</style>