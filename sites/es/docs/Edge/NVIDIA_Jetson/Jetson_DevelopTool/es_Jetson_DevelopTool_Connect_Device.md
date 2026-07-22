---
description: Cómo conectar tu dispositivo Seeed Jetson al PC host usando Seeed Jetson DevelopTool vía USB o Ethernet.
title: Conectar dispositivo
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - connect device
  - SSH
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_connect_device
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/jetson_developtool_connect_device/
---

Seeed Jetson DevelopTool se conecta a tu dispositivo Jetson de dos maneras según la tarea:

| Tipo de conexión | Usado para |
|-----------------|------------|
| **USB (Modo Recovery)** | Flasheo de firmware a través de Flash Center |
| **Ethernet / SSH** | Gestión del dispositivo, desarrollo remoto, App Market, Skills, uso compartido de red del PC |

## Conexión USB (Modo Recovery)

Se requiere el modo Recovery para flashear firmware. Para entrar en modo Recovery:

1. Apaga el dispositivo Jetson.
2. Mantén presionado el botón **Recovery** en el dispositivo.
3. Mientras mantienes presionado Recovery, conecta el cable USB-C entre el dispositivo y tu PC host (o enciende el dispositivo).
4. Suelta el botón Recovery después de 2 segundos.

En DevelopTool, abre **Flash Center** y haz clic en **Detect Device** para confirmar que se reconoce la conexión USB.

:::tip
En Linux, puedes verificar que el dispositivo aparece con:

```bash
lsusb | grep NVIDIA
```

Deberías ver una entrada como `NVIDIA Corp. APX`.
:::

:::caution
En Windows, el passthrough USB mediante WSL2 requiere la herramienta `usbipd`. Se recomienda Linux nativo para un flasheo fiable.
:::

## Conexión Ethernet / SSH

Para todas las funciones que no son de flasheo, DevelopTool se conecta a Jetson por SSH a través de Ethernet (o Wi‑Fi si está configurado).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-device-connection.png" style={{width:800, height:'auto'}}/></div>

**Pasos:**

1. Conecta Jetson y el PC host a la misma red, o usa un cable Ethernet directo con [PC Network Sharing](/es/jetson_developtool_remote_development) habilitado.
2. En DevelopTool, abre la pestaña **Remote Dev**.
3. Introduce la dirección IP de Jetson, el nombre de usuario SSH y la contraseña en el panel **Device Connection**.
4. Haz clic en **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-device-connection.png" style={{width:800, height:'auto'}}/></div>

Una vez conectado, el panel de estado del dispositivo muestra información en tiempo real de CPU, GPU, memoria y temperatura.

:::tip
Si no conoces la dirección IP de tu Jetson, usa el asistente serie [Jetson Init](/es/jetson_developtool_remote_development) en el primer arranque para configurar la red y mostrar la IP asignada.
:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
