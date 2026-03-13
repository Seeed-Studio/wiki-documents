---
description: OpenWrt-FAQ
title: Como corrigir o dispositivo quando ocorrer "Read Only Root filesystem"
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /fix_device_ReadOnlyRootFilesystem
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-07-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/fix_device_ReadOnlyRootFilesystem/
---

 <!-- Q4: How do I fix my device when I faced the "Read Only Root filesystem"? -->

Para dispositivos com o "Read Only Root filesystem", podemos usar `e2fsck` para verificar o sistema e corrigi-lo. Abra a janela do terminal e execute o seguinte comando:

```
e2fsck /dev/mmcblk0p2
```