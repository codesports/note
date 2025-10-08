<!-- 代码复制弹窗 -->
<template>
    <transition name="copy-toast-fade">
        <div v-if="visible" class="copy-toast" :class="stateClass" role="status" aria-live="polite">
            <svg v-if="isSuccess" class="copy-toast__icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" :fill="successBg" />
                <path class="copy-toast__tick" fill="currentColor"
                    d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <svg v-else class="copy-toast__icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" :fill="errorBg" />
                <path class="copy-toast__cross" fill="currentColor"
                    d="M15.54 8.46 12 12l3.54 3.54-1.41 1.41L10.59 13.4l-3.54 3.55-1.41-1.41L9.17 12 5.64 8.46 7.05 7.05 10.59 10.6l3.54-3.55z" />
            </svg>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineExpose, computed } from 'vue'

const props = defineProps<{ duration?: number }>()

const visible = ref(false)
const isSuccess = ref(true)
let hideTimer: number | undefined

function show() {
    visible.value = true
    if (hideTimer) window.clearTimeout(hideTimer)
    hideTimer = window.setTimeout(() => {
        visible.value = false
    }, props.duration ?? 1400)
}

function showSuccess() {
    isSuccess.value = true
    show()
}

function showError() {
    isSuccess.value = false
    show()
}

defineExpose({ show, showSuccess, showError })

const stateClass = computed(() => (isSuccess.value ? 'is-success' : 'is-error'))
const successBg = 'rgba(76,175,80,0.18)'
const errorBg = 'rgba(244,67,54,0.18)'

onBeforeUnmount(() => {
    if (hideTimer) window.clearTimeout(hideTimer)
})
</script>

<style scoped>
.copy-toast {
    position: fixed;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    color: #2ecc71;
    background: rgba(46, 204, 113, 0.10);
    border-radius: 999px;
    box-shadow: 0 8px 28px rgba(46, 204, 113, 0.35), 0 0 0 1px rgba(46, 204, 113, 0.25);
    backdrop-filter: saturate(140%) blur(4px);
    -webkit-backdrop-filter: saturate(140%) blur(4px);
}

.copy-toast.is-error {
    color: #ff5252;
    background: rgba(255, 82, 82, 0.10);
    box-shadow: 0 8px 28px rgba(255, 82, 82, 0.35), 0 0 0 1px rgba(255, 82, 82, 0.25);
}

.copy-toast__icon {
    width: 22px;
    height: 22px;
    animation: pop-in 220ms ease-out both, pulse 1.2s ease-out 1 120ms;
}

.copy-toast__tick {
    transform-origin: center;
    animation: tick-in 380ms cubic-bezier(.2, .7, .2, 1) 80ms both;
}

.copy-toast-fade-enter-active,
.copy-toast-fade-leave-active {
    transition: opacity 0.18s ease, transform 0.18s ease;
}

.copy-toast-fade-enter-from,
.copy-toast-fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

@keyframes pop-in {
    from {
        transform: scale(.8);
        opacity: .4;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes tick-in {
    0% {
        transform: scale(0.4) rotate(-12deg);
        opacity: 0;
    }

    60% {
        transform: scale(1.05) rotate(0);
        opacity: 1;
    }

    100% {
        transform: scale(1) rotate(0);
        opacity: 1;
    }
}

@keyframes pulse {
    0% {
        filter: drop-shadow(0 0 0 rgba(46, 204, 113, 0));
    }

    50% {
        filter: drop-shadow(0 0 10px rgba(46, 204, 113, 0.45));
    }

    100% {
        filter: drop-shadow(0 0 0 rgba(46, 204, 113, 0));
    }
}

.copy-toast__cross {
    transform-origin: center;
    animation: cross-in 380ms cubic-bezier(.2, .7, .2, 1) 80ms both;
}

@keyframes cross-in {
    0% {
        transform: scale(0.4) rotate(12deg);
        opacity: 0;
    }

    60% {
        transform: scale(1.05) rotate(0);
        opacity: 1;
    }

    100% {
        transform: scale(1) rotate(0);
        opacity: 1;
    }
}

/* 保持移动端同样顶部居中 */
</style>
