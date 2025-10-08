// 侧边栏
export default {
    '/前端/html/': [
        {   // 标题
            text: '第一章',
            // 展开
            collapsed: false,
            items: [
                { text: '文章 1', link: '/前端/html/01.md' },
                { text: '文章 2', link: '/前端/html/02.md' },
            ],
        },
        {   // 标题
            text: '第二章',
            // 展开
            collapsed: false,
            items: [
                { text: '文章 1', link: '/前端/html/01.md' },
                { text: '文章 2', link: '/前端/html/02.md' },
            ],
        }
    ],
    '/前端/css/': [
        {   // 标题
            // text: '第一章',
            // 展开
            collapsed: false,
            items: [
                { text: '文章 1', link: '/前端/css/01.md' },
                { text: '文章 2', link: '/前端/css/02.md' },
            ],
        },
    ],
    '/后端/python/': [
        {   // 标题
            // text: '第一章',
            // 展开
            collapsed: false,
            items: [
                { text: '安装', link: '/后端/python/01' },
                { text: '注释', link: '/后端/python/02' },
                { text: '变量', link: '/后端/python/03' },
                { text: '数据类型', link: '/后端/python/04' },
                { text: '运算符', link: '/后端/python/05' },
                // { text: '流程控制', link: '/后端/python/06' },
                { text: '函数', link: '/后端/python/function' },
                // { text: '类', link: '/后端/python/08' },
                // { text: '异常', link: '/后端/python/function' },
            ],
        },
        {   // 标题
            text: '流程控制',
            // 展开
            collapsed: false,
            items: [
                { text: '流程控制', link: '/后端/python/流程控制/index' },
                { text: 'if 判断', link: '/后端/python/流程控制/if' },
                { text: 'for 遍历', link: '/后端/python/流程控制/for' },
                { text: 'while 循环', link: '/后端/python/流程控制/while' },
                { text: '中断语句', link: '/后端/python/流程控制/break' },
            ],
        },
    ],
};

