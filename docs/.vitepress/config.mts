import { defineConfig } from 'vitepress';
import nav from './nav.mts'; // 导入导航
// import sidebar from './sidebar.mts'; // 导入侧边栏
import footer from './footer.mts'; // 导入页脚
import socialLinks from './socialLinks.mts'; // 导入社交链接
import { withSidebar } from 'vitepress-sidebar'; // 导入生成侧边栏
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'; // 导入分组图标插件
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid'; // 导入mermaid插件
import timeline from "vitepress-markdown-timeline"; // 导入时间线插件

const vitePressConfigs = {
  // ico标题
  title: "惊鸿博客",
  // 描述
  description: "记录学习与生活",
  // ico
  // head: [{ rel: 'icon', href: '/favicon.ico' }],
  // 清除 .html 后缀
  cleanUrls: false,
  // markdown设置
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin); // 代码组图标
      md.use(MermaidMarkdown); // mermaid插件
      md.use(timeline); // 时间线插件
    },
    // 代码块显示行数
    lineNumbers: true,
    // 数学公式
    math: true,
    // 默认禁用图片懒加载
    image: {
      lazyLoading: true
    }
  },
  vite: {
    plugins: [
      MermaidPlugin(),
      groupIconVitePlugin()
    ],
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
  },
  themeConfig: {
    // 站点名称
    siteTitle: '惊鸿博客',
    // logo
    logo: '/svg/index.png',
    // 本地搜索
    search: {
      provider: 'local'
    },
    // 大纲标题
    outlineTitle: '本文目录',
    // 目录等级
    outline: {
      level: [2, 4],
      label: "本文目录",
    },
    // 用于自定义深色模式开关标签，该标签仅在移动端视图中显示
    darkModeSwitchLabel: "黑暗模式",
    // 返回顶部按钮
    returnToTopLabel: '返回顶部',
    // 自定义配置上次更新的文本和日期格式
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 站点地图
    // sitemap: {
    //   hostname: 'https://penx.cn',
    // },
    //编辑本页
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', // 改成自己的仓库
    //   text: '在GitHub编辑本页'
    // },
    // 导航栏
    nav,
    // 页脚
    footer,
    // 社交链接
    socialLinks,
  }
};

export default defineConfig(
  withSidebar(vitePressConfigs, [
    {
      documentRootPath: 'docs', // 文档根目录
      scanStartPath: 'python/', // 扫描起始路径
      basePath: '/python/', // 基础路径
      resolvePath: '/python/', // 解析路径
      collapsed: true, // 折叠
      useTitleFromFileHeading: true, // 使用文件标题作为侧边栏标题
      // useTitleFromFrontmatter: true, // 使用frontmatter标题作为侧边栏标题
      frontmatterTitleFieldName: 'title', // 使用frontmatter标题作为侧边栏标题
      prefixSeparator: '.', // 前缀分隔符
      sortMenusOrderNumericallyFromLink: true, // 按链接数字排序
      removePrefixAfterOrdering: true, // 排序后删除前缀
    },
    {
      documentRootPath: 'docs', // 文档根目录
      scanStartPath: 'MathOne/', // 扫描起始路径
      basePath: '/MathOne/', // 基础路径
      resolvePath: '/MathOne/', // 解析路径
      collapsed: true, // 折叠
      useTitleFromFileHeading: true, // 使用文件标题作为侧边栏标题
      // useTitleFromFrontmatter: true, // 使用frontmatter标题作为侧边栏标题
      frontmatterTitleFieldName: 'title', // 使用frontmatter标题作为侧边栏标题
      prefixSeparator: '.', // 前缀分隔符
      sortMenusOrderNumericallyFromLink: true, // 按链接数字排序
      removePrefixAfterOrdering: true, // 排序后删除前缀
    },
  ])
);
