import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/quick-tips/': [
    {
      text: '快捷技巧',
      items: [
        { text: '快捷技巧', link: '/quick-tips' },
        { text: '标签页分组', link: '/quick-tips/tab-group' },
      ]
    }
  ]
}
