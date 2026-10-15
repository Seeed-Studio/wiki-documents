---
description: OpenWrt-FAQ
title: Read Only Root filesystem エラーが発生した場合のデバイス修復方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /fix_device_ReadOnlyRootFilesystem
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2025-08-12'
updatedAt: '2025-08-12'
url: https://wiki.seeedstudio.com/ja/fix_device_ReadOnlyRootFilesystem/
---

 <!-- Q4: How do I fix my device when I faced the "Read Only Root filesystem"? -->

"Read Only Root filesystem"状態のデバイスに対しては、`e2fsck`を使用してシステムをチェックし、修復することができます。ターミナルウィンドウを開いて、以下のコマンドを実行してください：

```
e2fsck /dev/mmcblk0p2
```