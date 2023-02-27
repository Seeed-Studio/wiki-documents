---
description: Create a doc page with rich content.
title: A doc with tags
tags:
  - Demo
  - Getting started
keywords:
  - docs
  - docusaurus
image: https://avatars.githubusercontent.com/u/10758833
slug: /template
last_update:
  date: 11/21/2022
  author: w0x7ce

no_comments: false # for Disqus

---

# Hello from Seeed Studio

## Headers

:::tip

will show up on the table of contents on the upper right

So that your users will know what this page is all about without scrolling down or even without reading too much.

:::

## Only h2 and h3 will be in the TOC by default

:::note
You can configure the TOC heading levels either per-document or in the theme configuration.

The headers are well-spaced so that the hierarchy is clear.

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times
:::

## Custom ID headers {#custom-id}

:::caution

With `{#custom-id}` syntax you can set your own header ID.
:::

## Struct

```bash
website # Root directory of your site
└── docs
   ├── greeting.md
   └── guide
      └── hello.md
```

## Force change url

:::danger

By default hello.md will be available at /docs/guide/hello. You can change its URL location to /docs/bonjour:

```bash
---
slug: /bonjour
---
```

:::

## Center align content

<div style={{textAlign: 'center'}}>

![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg)

</div>

<center>

| 1X1 | 1X2 | 1X3 | 2X2 | 2X3 |
|:---:|:-----:|:------:|:-----:|:----:|
|20x20mm|20x40mm|20x60mm|40x40mm|40x60mm|

</center>

## links between documents and tags

Eg. In **reTerminal.md** need to link to **#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g** tag in **reTerminal-FAQ.md**

```markdown
[More Info](Edge/reTerminal/reTerminal-FAQ#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g)
```

[More Info](Edge/reTerminal/reTerminal-FAQ#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g)

### code

[Support language](https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js)

```jsx title="demo.js"
  function HelloCodeTitle(props) {
    return <h1>Hello, {props.name}</h1>;
  }
```

```jsx

  ```jsx title="/src/components/HelloCodeTitle.js"
  function HelloCodeTitle(props) {
    return <h1>Hello, {props.name}</h1>;
  }

```
