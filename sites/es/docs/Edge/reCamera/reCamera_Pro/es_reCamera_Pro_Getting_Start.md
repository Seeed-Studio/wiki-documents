---
description: Esta guía te ayudará a completar la conexión de hardware, iniciar sesión en la interfaz web del dispositivo, configurar la red inalámbrica y solucionar fallos de conexión comunes.
title: Guía de inicio rápido de reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 
sidebar_position: 12
last_update:
  date: 06/01/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/es/recamera_pro_getting_started/
---

# Guía de inicio rápido de reCamera Pro

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## Introducción

Bienvenido a **reCamera Pro**. Esta guía te ayudará a completar la conexión de hardware, iniciar sesión en la interfaz web del dispositivo, configurar la red inalámbrica y solucionar fallos de conexión comunes.

---

## 1. Conexión de hardware

Antes de comenzar la configuración, asegúrate de haber preparado el siguiente hardware:
* **Cable de datos**: Un cable USB Type-C con capacidad de transmisión de datos (no uses un cable que solo admita carga).
* **Fuente de alimentación**: Un cable de alimentación de CC (requisitos de especificación: **12V, 1A**, la fuente de alimentación estándar de fábrica es: 12V, 2A).

### Pasos de conexión

1. Como se muestra en la figura siguiente, conecta el cable de alimentación de CC de 12V a la interfaz de alimentación del dispositivo, conecta un extremo del cable USB Type-C a la reCamera Pro y el otro extremo a tu equipo host con Windows (Host PC).
2. Observa el indicador de estado del dispositivo. Cuando la **luz verde esté fija**, indica que el dispositivo se ha iniciado correctamente y ha entrado en estado de funcionamiento.

![Diagrama de luz de estado del sistema y conexión de cables](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

---

## 2. Iniciar sesión en la interfaz web de gestión del dispositivo

reCamera Pro incorpora un sistema de gestión web intuitivo, que te permite configurarlo directamente a través de un navegador.

:::note Atención
Antes de intentar iniciar sesión en la interfaz web, asegúrate de que el cable USB Type-C esté correctamente conectado al ordenador y de que el dispositivo haya completado su inicialización de arranque.
:::

### Pasos de operación

1. Abre un navegador en el equipo host (se recomienda el navegador Chrome o Edge).
2. Introduce la dirección IP predeterminada en la barra de direcciones: `192.168.42.1` y pulsa Intro.
3. Tras entrar en la interfaz de inicio de sesión, introduce la contraseña de inicio de sesión de tu dispositivo.
4. Marca las dos opciones de conformidad y recordar que se encuentran debajo del botón de inicio de sesión y haz clic en iniciar sesión para entrar en la interfaz principal del sistema de reCamera Pro (por defecto en la página de "Vista previa en tiempo real").

![Diagrama de inicio de sesión web e interfaz principal](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip Solución de problemas comunes
Si la página no se carga después de introducir `192.168.42.1` en el sistema Windows, ve directamente a la sección [4. Preguntas frecuentes y solución de problemas (FAQ)](#4-preguntas-frecuentes-y-solución-de-problemasfaq) al final de este documento para realizar una comprobación del adaptador de red.
:::

---

## 3. Configuración de la red inalámbrica (Wi-Fi)

Para permitir que el dispositivo acceda a Internet o habilitar la gestión inalámbrica dentro de la red local, configura una conexión Wi‑Fi para él.

### Pasos de operación

1. Tras iniciar sesión correctamente en la interfaz web principal, haz clic en **Device Info** en la barra de navegación izquierda.
2. En el submenú o en el área de configuración de la derecha, haz clic en **Network Settings**.
3. Activa la función Wi‑Fi (si está desactivada por defecto) y el sistema escaneará automáticamente las redes inalámbricas cercanas.
4. Selecciona el SSID de tu Wi‑Fi de la lista de redes disponibles, introduce la contraseña inalámbrica correcta y haz clic en conectar.

![Diagrama de pasos de configuración de red inalámbrica](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

### Conexión remota inalámbrica (paso opcional)

Después de conectarte correctamente al Wi‑Fi, puedes hacer clic en el nombre del Wi‑Fi conectado para ver su información de red detallada (por ejemplo, dirección IP asignada, dirección MAC, etc.).

![Diagrama de visualización de detalles de Wi‑Fi](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

:::tip Desconecta el cable Type‑C para la gestión inalámbrica
Después de obtener la IP de red local asignada por el Wi‑Fi (por ejemplo, `192.168.4.200`), siempre que tu ordenador y la reCamera Pro estén dentro de la misma red local, puedes introducir directamente esta dirección IP (por ejemplo, `http://192.168.4.200`) en el navegador para iniciar sesión en el dispositivo.
En este punto, puedes **desconectar el cable USB Type‑C** de forma segura para lograr una operación y gestión completamente inalámbricas.
:::

---

## 4. Preguntas frecuentes y solución de problemas (FAQ)

### P1: ¿Qué debo hacer si no puedo entrar en la interfaz de inicio de sesión mediante 192.168.42.1 en el sistema Windows?

Si no puedes abrir la interfaz web después de conectar el cable Type‑C, normalmente se debe a que la tarjeta de red virtual del sistema Windows no obtuvo correctamente una dirección IP. Sigue estos pasos para solucionar el problema:

1. Abre el **Panel de control** en el equipo host con Windows.
2. Haz clic secuencialmente en **Network and Internet** -> **Network and Sharing Center** -> **Change adapter settings**.
3. En la lista emergente de conexiones de red, encuentra la tarjeta de red virtual llamada algo como `Remote NDIS based Internet Sharing Device` o relacionada con reCamera (puedes intentar desconectar y volver a conectar el dispositivo para ver qué puerto de red desaparece y vuelve a aparecer; ese puerto es la interfaz de tarjeta de red virtual de reCamera Pro).
4. Haz clic derecho en este adaptador de red y selecciona **Properties**.
5. Haz doble clic en **Internet Protocol Version 4 (TCP/IPv4)** en la lista.
6. Asegúrate de que la configuración tenga marcadas **Obtain an IP address automatically** y **Obtain DNS server address automatically**.
7. Haz clic en OK para guardar la configuración y vuelve a acceder a `192.168.42.1` en el navegador.

<video 
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4" 
  controls 
  width="100%" 
  preload="metadata">
  Tu navegador no admite la reproducción de este vídeo.
</video>

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>