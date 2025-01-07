import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '文档', link: '/docs', activeMatch: '^/docs' },
  { text: '快捷技巧', link: '/quick-tips' },
  { text: '交个朋友', link: '/make-a-friend' },
]