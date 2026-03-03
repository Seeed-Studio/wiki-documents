---
description: usar cámara IMX477 con placa portadora A603 Jetson
title: Usar Cámara IMX477 con Placa Portadora A603 Jetson
keywords:
- reComputer
- Cámara IMX477
- A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board
last_update:
  date: 05/22/2024
  author: Youjiang
---

## Jetpack 5.1.2

Si necesitas usar la cámara IMX477, por favor descarga [este paquete de controladores](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERJdh3pvdYZOqJWugsnMJKEBMkGXtU8ngY03kJeLDWSkLw?e=TuLWmL) y sigue [este tutorial](https://wiki.seeedstudio.com/es/reComputer_A603_Flash_System/) para volver a flashear el sistema Jetpack.

:::caution
Ten en cuenta que necesitas usar el BSP para [ **JP5.1.2** ](https://developer.nvidia.com/embedded/jetson-linux-r3541).
:::

## Jetpack 6.0

Si necesitas usar la cámara IMX477, por favor descarga [este paquete de controladores](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ETIsoZ25I69KsSiA6TweK4UBVfo7gBrvPyKX9pJ68J8oIA?e=a9uumE) y sigue [este tutorial](https://wiki.seeedstudio.com/es/reComputer_A603_Flash_System/) para volver a flashear el sistema Jetpack.

:::caution
Ten en cuenta que necesitas usar el BSP para [ **JP6.0** ](https://developer.nvidia.com/embedded/jetson-linux-r363).
:::

Después de que se complete el flasheo del sistema, conecta la cámara CSI y usa el siguiente comando para iniciar la cámara:

```bash
nvgstcapture-1.0 --sensor-id=0
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera.png" /></div>


## Jetpack 6.2

Si necesitas usar la cámara IMX477, por favor descarga [este paquete de controladores](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC58VP43oyWQY48K__qIXBsAfz5meLpWtldH6SML_BgvCE?e=dXXvuK) y sigue [este tutorial](https://wiki.seeedstudio.com/es/reComputer_A603_Flash_System/) para volver a flashear el sistema Jetpack.

:::caution
Ten en cuenta que necesitas usar el BSP para [ **JP6.2** ](https://developer.nvidia.com/embedded/jetson-linux-r3643).
:::

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>