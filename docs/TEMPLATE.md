---
description: Create a doc page with rich content.
title: A doc with tags
tags:
  - Demo
  - Getting started
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
last_update:
  date: 1/1/2020
  author: w0x7ce
---

# Hello from Seeed Studio

## Headers

:::tip

will show up on the table of contents on the upper right

So that your users will know what this page is all about without scrolling down or even without reading too much.

:::

## Only h2 and h3 will be in the TOC by default.

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