<template>
    <span>{{ displayText }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
    texts: string[];
}>();

const texts = props.texts;
const displayText = ref(texts[0]);

let currentTextIndex = 0;
let charIndex = texts[0].length;
let isDeleting = true;
let isFirstRender = true;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenWords = 2500;
const initialPause = 2500;

function type() {
    const currentText = texts[currentTextIndex];

    if (isFirstRender) {
        isFirstRender = false;
        setTimeout(type, initialPause);
        return;
    }

    if (isDeleting) {
        displayText.value = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
    } else {
        const nextText = texts[currentTextIndex];
        displayText.value = nextText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === nextText.length) {
            isDeleting = true;
            setTimeout(type, pauseBetweenWords);
            return;
        }
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

onMounted(() => {
    type();
});
</script>
