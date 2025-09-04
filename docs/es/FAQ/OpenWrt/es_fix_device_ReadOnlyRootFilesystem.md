---
description: OpenWrt-FAQ
title: Cómo reparar el dispositivo cuando aparece "Read Only Root filesystem"
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/fix_device_ReadOnlyRootFilesystem
last_update:
  date: 6/21/2023
  author: Seraphina
---

 <!-- Q4: How do I fix my device when I faced the "Read Only Root filesystem"? -->

Para dispositivos con "Read Only Root filesystem", podemos usar `e2fsck` para verificar el sistema y repararlo. Por favor, abre la ventana del terminal y ejecuta el siguiente comando:

```
e2fsck /dev/mmcblk0p2
```