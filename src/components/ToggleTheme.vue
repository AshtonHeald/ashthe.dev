<script setup lang="ts">
import { toggleDark } from "@/utils/theme";
</script>

<template>
    <button class="select-none" title="Toggle Color Scheme" @click="toggleDark">
        <div class="icon i-ri-sun-line dark:i-ri-moon-line" />
    </button>
</template>
