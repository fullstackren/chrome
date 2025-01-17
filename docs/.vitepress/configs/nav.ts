import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '开发者工具', link: '/dev-tools', activeMatch: '^/dev-tools' },
  { text: '快捷技巧', link: '/quick-tips' },
  { text: '交个朋友', link: '/make-a-friend' },
]