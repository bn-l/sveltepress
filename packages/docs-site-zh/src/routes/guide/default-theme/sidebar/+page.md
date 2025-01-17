---
title: 侧边栏
---

## 使用方式

传递 `sidebar` 选项给默认主题来配置侧边栏

## 示例

```js
const sidebar = {
  '/foo/': [
    {
      title: 'Bar',
      to: '/foo/bar/',
    },
    {
      title: 'Zoo',
      collapsible: true,
      items: [
        {
          title: 'Sub item',
          to: '/sub/item/link'
        }
      ]
    },
    {
      title: 'GitHub 外部链接',
      to: 'https://github.com'
    }
  ]
}
```

### `title`

文字

### `to`

地址

:::info[自动的外部链接图标]{icon=ic:sharp-rocket-launch}
与导航栏不一样，侧边栏使用的是 [`Link`](/guide/default-theme/builtin-components/#Link) 组件.  
这意味着以 `http(s)` 开头的链接将会被自动识别为外部链接，从而展示外部链接的图标
:::

### `collapsible`

组是否可折叠，默认为 `false`

### `items`

组内的子项