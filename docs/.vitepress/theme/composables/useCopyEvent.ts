// 监听复制事件，并在页面顶部展示一个轻量提示组件
// 仅在复制代码块或与代码相关的区域/按钮时触发

import { createApp, h } from 'vue';
import CopyToast from '../components/CopyToast.vue';
import confetti from 'canvas-confetti';

let isBound = false;
let appRoot: HTMLElement | null = null;
let vm: any | null = null;

export function useCopyEvent(): void {
    if (isBound) return;
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const ensureToastApp = () => {
        if (vm) return vm;
        appRoot = document.createElement('div');
        document.body.appendChild(appRoot);
        const app = createApp({
            render() {
                return h(CopyToast, { ref: 'toast' });
            }
        });
        vm = app.mount(appRoot) as any;
        return vm;
    };

    // 简单节流，避免短时间内频繁弹出
    let lastShown = 0;
    const THROTTLE_MS = 500;

    const isCodeCopy = (target: EventTarget | null): boolean => {
        if (!(target instanceof Element)) return false;
        // 常见的 VitePress 代码区域选择器与复制按钮
        return (
            target.closest('pre, code, .vp-code, .vp-doc .copy, .copy, [data-copy]') !== null
        );
    };

    const showToast = () => {
        const now = Date.now();
        if (now - lastShown < THROTTLE_MS) return;
        lastShown = now;

        const inst = ensureToastApp();
        // 调用组件暴露的 show()
        if (inst && inst.$refs && inst.$refs.toast && typeof inst.$refs.toast.show === 'function') {
            inst.$refs.toast.show();
        }
    };

    const onCopy = (e: ClipboardEvent) => {
        // 仅在与代码相关的复制场景显示
        const active = document.activeElement;
        if (isCodeCopy(e.target as Element) || isCodeCopy(active)) {
            showToast();
        }
    };

    document.addEventListener('copy', onCopy);

    // 事件委托：支持自定义复制按钮 <button class="copy" title="Copy Code"></button>
    const onClick = async (e: MouseEvent) => {
        const target = e.target as Element | null;
        if (!target) return;
        const copyBtn = target.closest('button.copy, .copy[data-copy]');
        if (!copyBtn) return;

        // 启发式查找：在按钮附近寻找代码文本
        // 1) 在兄弟或父级容器中查找 <pre><code>
        const container = (copyBtn as Element).closest('.vp-code, pre, code, .code-block, .shiki, .language-') || copyBtn.parentElement;
        let text = '';
        if (container) {
            const pre = container.querySelector('pre');
            const code = container.querySelector('code');
            const el = (pre || code || container) as HTMLElement;
            text = el.innerText || el.textContent || '';
        }

        // 2) 兜底：使用按钮的 data-copy 属性
        if (!text && (copyBtn as HTMLElement).dataset && (copyBtn as HTMLElement).dataset.copy) {
            text = (copyBtn as HTMLElement).dataset.copy as string;
        }

        if (!text) return;

        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                // 旧浏览器兜底方案
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                textarea.style.pointerEvents = 'none';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                textarea.remove();
            }
            // 成功：显示成功动画
            const inst = ensureToastApp();
            if (inst && inst.$refs && inst.$refs.toast && typeof inst.$refs.toast.showSuccess === 'function') {
                inst.$refs.toast.showSuccess();
            } else {
                showToast();
            }
            // 轻量彩带特效
            try {
                confetti && confetti({
                    particleCount: 36,
                    spread: 45,
                    startVelocity: 35,
                    gravity: 0.9,
                    ticks: 120,
                    origin: { y: 0.18 }
                });
            } catch { }
        } catch {
            // 失败：显示失败动画
            const inst = ensureToastApp();
            if (inst && inst.$refs && inst.$refs.toast && typeof inst.$refs.toast.showError === 'function') {
                inst.$refs.toast.showError();
            } else {
                showToast();
            }
        }
    };

    document.addEventListener('click', onClick);

    window.addEventListener('beforeunload', () => {
        document.removeEventListener('copy', onCopy);
        document.removeEventListener('click', onClick);
        if (appRoot) {
            try { appRoot.remove(); } catch { }
            appRoot = null;
        }
    });

    isBound = true;
}


