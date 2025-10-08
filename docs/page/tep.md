<<<<<<< HEAD
---
layout: page
---

<!-- iconify 图标 + 无链接 -->
<Pill :icon="{ icon: 'line-md:iconify2-static', color: '#1769AA' }" size="16" name="Iconify" />

<Pill icon="vscode-icons:file-type-vue" name="Vue" link="https://vuejs.org/" />

<!-- 深浅模式的 iconify 图标 -->
<Pill
  :icon="{ light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } }"
  name="<p style='margin:0; font-style: italic;'>Vercel</p>"
  link="https://vercel.com/"
/>

<Pill
  :icon="{ light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }"
  name="Vite"
  link="https://vitejs.dev/"
/>


<!-- iconify 图标 + 无链接 -->
<Links
  :items="[
    {
      icon: { icon: 'line-md:iconify2-static', color: '#1769AA' },
      size: 48,
      name: 'iconify',
      desc: '开源的图标库，提供了数以万计的矢量图标，支持多种框架和平台。它允许开发者轻松地在项目中使用各种图标，并且支持深浅模式切换。'
    }
  ]"
/>

<Links
  :grid="3"
  :items="[
    // 深浅色模式的 iconify 图标 + v-html 渲染
    {
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } },
      name: `<p style='margin:0; font-style: italic;'>Vercel</p>`,
      desc: '适用于前端框架的无服务器部署平台，支持静态生成和即时预览。',
      link: 'https://vercel.com/'
    },
    // 深浅模式 iconify 图标，无 color
    {
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' },
      name: 'Vite',
      desc: '极速的现代前端构建工具，支持热更新与按需加载。',
      link: 'https://vitejs.dev/'
    },
    // 无图标
    {
      name: 'MDN Web Docs',
      desc: '权威的 Web 技术文档库，涵盖 HTML、CSS 和 JavaScript。',
      link: 'https://developer.mozilla.org/'
    }
  ]"
/>


<Copy label="显示的文本" text="hello world" />
<Copy type="auto" text="无图标" noIcon />
<Copy type="info" text="加粗文本" bold />
<Copy type="tip" text="复制这段文字" toolTip="Copied" toolTipPos="bottom" />
<Copy type="warning" text="更换图标" icon="material-symbols:content-copy" />
<Copy type="danger" text="使用图片" image="https://i.theojs.cn/logo/lumen-logo-mini.svg" />


<Linkcard url="你的网址" title="标题" description="描述" logo="logo图片路径"/>

比如：

=======
---
layout: page
---

<!-- iconify 图标 + 无链接 -->
<Pill :icon="{ icon: 'line-md:iconify2-static', color: '#1769AA' }" size="16" name="Iconify" />

<Pill icon="vscode-icons:file-type-vue" name="Vue" link="https://vuejs.org/" />

<!-- 深浅模式的 iconify 图标 -->
<Pill
  :icon="{ light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } }"
  name="<p style='margin:0; font-style: italic;'>Vercel</p>"
  link="https://vercel.com/"
/>

<Pill
  :icon="{ light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }"
  name="Vite"
  link="https://vitejs.dev/"
/>


<!-- iconify 图标 + 无链接 -->
<Links
  :items="[
    {
      icon: { icon: 'line-md:iconify2-static', color: '#1769AA' },
      size: 48,
      name: 'iconify',
      desc: '开源的图标库，提供了数以万计的矢量图标，支持多种框架和平台。它允许开发者轻松地在项目中使用各种图标，并且支持深浅模式切换。'
    }
  ]"
/>

<Links
  :grid="3"
  :items="[
    // 深浅色模式的 iconify 图标 + v-html 渲染
    {
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } },
      name: `<p style='margin:0; font-style: italic;'>Vercel</p>`,
      desc: '适用于前端框架的无服务器部署平台，支持静态生成和即时预览。',
      link: 'https://vercel.com/'
    },
    // 深浅模式 iconify 图标，无 color
    {
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' },
      name: 'Vite',
      desc: '极速的现代前端构建工具，支持热更新与按需加载。',
      link: 'https://vitejs.dev/'
    },
    // 无图标
    {
      name: 'MDN Web Docs',
      desc: '权威的 Web 技术文档库，涵盖 HTML、CSS 和 JavaScript。',
      link: 'https://developer.mozilla.org/'
    }
  ]"
/>


<Copy label="显示的文本" text="hello world" />
<Copy type="auto" text="无图标" noIcon />
<Copy type="info" text="加粗文本" bold />
<Copy type="tip" text="复制这段文字" toolTip="Copied" toolTipPos="bottom" />
<Copy type="warning" text="更换图标" icon="material-symbols:content-copy" />
<Copy type="danger" text="使用图片" image="https://i.theojs.cn/logo/lumen-logo-mini.svg" />


<Linkcard url="你的网址" title="标题" description="描述" logo="logo图片路径"/>

比如：

>>>>>>> 1143b0b8c1465ed55ae36b2b602035ac5ce26be3
<Linkcard url="https://vitepress.yiov.top/" title="Vitepress中文搭建教程" description="https://vitepress.yiov.top/" logo="https://vitepress.yiov.top/logo.png"/>