---
description: Conecta reCamera Pro a tu red Wi‑Fi, encuentra su dirección IP LAN y cambia de la conexión USB directa a una gestión totalmente inalámbrica.
title: Acceder al dispositivo por Wi‑Fi
keywords:
  - reCamera
  - reCamera Pro
  - Wi-Fi
  - wireless access
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_wifi_access
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_wifi_access/
---

# Acceder al dispositivo por Wi‑Fi

Nada más sacarlo de la caja, accedes a reCamera Pro a través del cable USB Type‑C en `192.168.42.1`. Para permitir que el dispositivo acceda a Internet, o para gestionarlo desde cualquier lugar de tu red local, conéctalo a Wi‑Fi y cambia a su dirección IP LAN.

## 1. Conectarse a una red Wi‑Fi

1. Inicia sesión en la interfaz web (consulta la [guía rápida](/es/recamera_pro_getting_started/) si aún no lo has hecho).
2. Haz clic en **Device Info** en la barra de navegación izquierda.
3. Abre **Network Settings**. reCamera Pro tiene un módulo Wi‑Fi integrado: habilita Wi‑Fi si está desactivado y el sistema buscará redes cercanas.
4. Selecciona el SSID de tu Wi‑Fi, introduce la contraseña y conéctate.

![Diagrama de pasos de configuración de red inalámbrica](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

## 2. Encontrar la dirección IP LAN del dispositivo

Después de conectarte, haz clic en el icono de información de la red conectada (el signo de exclamación a su derecha) para ver la información detallada de la red: la dirección IP asignada, la dirección MAC y más.

![Diagrama de visualización de detalles de Wi‑Fi](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

![Detalles de red en Device Info](https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png)

## 3. Cambiar al acceso inalámbrico y verificar

1. En un ordenador conectado a la **misma red local**, abre un navegador y ve a la IP LAN que acabas de encontrar, por ejemplo `http://192.168.4.200`.
2. Inicia sesión con tu contraseña de administrador: deberías acceder a la misma interfaz web que usaste por USB.
3. Abre **Real-time Preview** y haz clic en **Start** para confirmar también las transmisiones de vídeo por Wi‑Fi.

:::tip Desconecta el cable USB para un funcionamiento totalmente inalámbrico
Una vez que la interfaz web funcione a través de la IP LAN, puedes **desconectar con seguridad el cable USB Type‑C**. La conexión USB solo transporta datos: el dispositivo sigue funcionando con su propia fuente de alimentación.
:::

:::note Sigue siendo necesaria la alimentación
Quitar el cable USB **no** corta la alimentación: reCamera Pro debe permanecer conectado a su fuente de alimentación de 12 V CC (u otra fuente de alimentación adecuada) para seguir funcionando.

{/* TODO(verify): confirm supported power options when the USB cable is unplugged (DC barrel only, or also PD over Type-C) and state them explicitly here. */}
:::

## Notas

- Si el ordenador y el dispositivo están en redes diferentes (por ejemplo, SSID de 2,4 GHz frente a 5 GHz que aíslan a los clientes, o una red de invitados), es posible que la IP LAN no sea accesible: pon ambos en la misma red.
- La dirección Wi‑Fi puede cambiar cuando el dispositivo se vuelva a conectar. Para una instalación permanente, reserva una dirección fija para la MAC del dispositivo en tu router y completa el resto de la configuración de red en [Network, time and access control](/es/recamera_pro_device_info/).
- Fallos de conexión durante este paso: consulta [Troubleshoot by symptom](/es/recamera_pro_faqs/).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
