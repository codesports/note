import { h } from 'vue'
import type { Theme } from 'vitepress'
import { inBrowser } from "vitepress"; // 判断是否在浏览器中

import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css' // 引入图标库
import "./style/index.css" // 引入自定义的样式
import "vitepress-markdown-timeline/dist/theme/index.css"; //引入时间线组件样式

// 不蒜子
import DataPanel from "./components/DataPanel.vue"

// 路由加载进度条
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
// 通知
import { Notice } from '@theojs/lumen'
// 百度统计
import { baiduAnalytics, trackPageview } from '@theojs/lumen'
// 下划线
import type { EnhanceAppContext } from 'vitepress' // 引入类型
import { Underline } from '@theojs/lumen' // 引入下划线组件
// 侧边栏
import { Aside } from '@theojs/lumen'
import { Aside_Data } from './composables/AsideData'
// 链接卡片组件
import { BoxCube, Card, Links, Pill } from '@theojs/lumen'
// 复制文本
import { CopyText } from '@theojs/lumen'

// 返回顶部
import backtotop from "./components/backtotop.vue";
// 纸屑
import confetti from "./components/confetti.vue";
// 友情链接
import Linkcard from "./components/Linkcard.vue";
// 更新日志
// import update from "./components/update.vue";

// 滚动进度条
import ScrollProgressBar from './components/ScrollProgressBar.vue'

// 复制代码并顶部提示【原创】
import { useCopyEvent } from "./composables/useCopyEvent";

const theme = {
  enhanceApp: ({ app, router, siteData }: EnhanceAppContext) => {
    // 百度统计
    baiduAnalytics({ baiduId: 'bed925b24301ce4f46f42e2db76f0d90' })
    if (typeof window !== 'undefined') {
      trackPageview('bed925b24301ce4f46f42e2db76f0d90', window.location.href)
      // 监听复制代码并顶部提示
      useCopyEvent();
    }
    app.component('Linkcard', Linkcard); // 注册友情链接卡片组件
    // app.component('update', update); // 注册更新日志组件
    app.component('Home', Underline) // 注册下划线组件
    app.component('Pill', Pill) // 注册卡片组件
    app.component('Links', Links) // 注册卡片组件
    app.component('Card', Card) // 注册卡片组件
    app.component('BoxCube', BoxCube) // 注册卡片组件
    app.component('Copy', CopyText) // 注册复制文本组件
    app.component("confetti", confetti); // 纸屑
    app.component("backtotop", backtotop); // 返回顶部
    app.component("ScrollProgressBar", ScrollProgressBar); // 滚动进度条
    app.component('DataPanel', DataPanel) // 不蒜子


    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChanged = () => {
        NProgress.done() // 停止进度条
      };
    }
  },
  extends: DefaultTheme,

  //markdown配置
  // markdown: {
  //   // 对markdown中的内容进行替换或者批量处理
  //   config: (md) => {
  //     // 创建 markdown-it 插件
  //     md.use((md) => {
  //       // 组件插入h1标题下
  //       md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
  //         let htmlResult = slf.renderToken(tokens, idx, options)
  //         if (tokens[idx].tag === 'h1') htmlResult += `<weiz-title-meta />`
  //         return htmlResult
  //       }
  //     })
  //   }
  // },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => [
        h(ScrollProgressBar), // 滚动进度条
      ],
      'doc-footer-before': () => h(backtotop), // 返回顶部
      'aside-ads-before': () => h(Aside, { Aside_Data }), // 侧边栏
      'home-hero-info-before': () => h(Notice) // 通知
    })
  },
} as unknown as Theme

export default theme

