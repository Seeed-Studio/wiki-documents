---
description: Esta guía le ayudará a completar la conexión de hardware, iniciar sesión en la interfaz web del dispositivo, configurar la red inalámbrica y solucionar fallos de conexión comunes.
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

Bienvenido a **reCamera Pro**. Esta guía le ayudará a completar la conexión de hardware, iniciar sesión en la interfaz web del dispositivo, configurar la red inalámbrica y solucionar fallos de conexión comunes.

---

## 1. Conexión de hardware

Antes de comenzar la configuración, asegúrese de haber preparado el siguiente hardware:
* **Cable de datos**: Un cable USB Type-C con capacidad de transmisión de datos (no utilice un cable que solo admita carga).
* **Fuente de alimentación**: Un cable de alimentación de CC (requisitos de especificación: **12V, 1A**, la fuente de alimentación estándar de fábrica es: 12V, 2A).

### Pasos de conexión

1. Como se muestra en la figura siguiente, conecte el cable de alimentación de CC de 12V a la interfaz de alimentación del dispositivo, conecte un extremo del cable USB Type-C a la reCamera Pro y conecte el otro extremo a su equipo host con Windows (Host PC).
2. Observe el indicador de estado del dispositivo. Cuando la **luz verde esté fija**, indica que el dispositivo se ha iniciado correctamente y ha entrado en estado de funcionamiento.

![Diagrama de la luz de estado del sistema y conexión de cables](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

---

## 2. Iniciar sesión en la interfaz web de gestión del dispositivo

reCamera Pro incorpora un sistema de gestión web intuitivo, que le permite configurarlo directamente a través de un navegador.

:::note Atención
Antes de intentar iniciar sesión en la interfaz web, asegúrese de que el cable USB Type-C esté correctamente conectado al ordenador y de que el dispositivo haya completado su inicialización de arranque.
:::

### Pasos de operación

1. Abra un navegador en el equipo host (se recomienda el navegador Chrome o Edge).
2. Introduzca la dirección IP predeterminada en la barra de direcciones: `192.168.42.1` y pulse Intro.
3. Tras entrar en la interfaz de inicio de sesión, introduzca la contraseña de inicio de sesión de su dispositivo.
4. Marque las dos opciones de conformidad y recordar situadas debajo del botón de inicio de sesión y haga clic en iniciar sesión para entrar en la interfaz principal del sistema de reCamera Pro (por defecto en la página de "Vista previa en tiempo real").

![Diagrama de inicio de sesión web e interfaz principal](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip Solución de problemas comunes
Si la página no se carga después de introducir `192.168.42.1` en el sistema Windows, vaya directamente a la sección [4. Frequently Asked Questions and Troubleshooting (FAQ)](#4-preguntas-frecuentes-y-solución-de-problemasfaq) al final de este documento para realizar una comprobación del adaptador de red.
:::

---

## 3. Configuración de la red inalámbrica (Wi-Fi)

Para permitir que el dispositivo acceda a Internet o habilitar la gestión inalámbrica dentro de la red de área local, configúrele una conexión Wi-Fi.

### Pasos de operación

1. Después de iniciar sesión correctamente en la interfaz web principal, haga clic en **Device Info** en la barra de navegación izquierda.
2. En el submenú o en el área de configuración de la derecha, haga clic en **Network Settings**.
3. Active la función Wi-Fi (si está desactivada por defecto) y el sistema escaneará automáticamente las redes inalámbricas cercanas.
4. Seleccione el SSID de su Wi-Fi de la lista de redes disponibles, introduzca la contraseña inalámbrica correcta y haga clic en conectar.

![Diagrama de los pasos de configuración de la red inalámbrica](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

### Conexión remota inalámbrica (Paso opcional)

Después de conectarse correctamente al Wi-Fi, puede hacer clic en el nombre del Wi-Fi conectado para ver su información de red detallada (por ejemplo, dirección IP asignada, dirección MAC, etc.).

![Diagrama de visualización de detalles de Wi-Fi](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

:::tip Desconecte el cable Type-C para la gestión inalámbrica
Después de obtener la IP de red local asignada por el Wi-Fi (por ejemplo, `192.168.4.200`), siempre que su ordenador y la reCamera Pro estén dentro de la misma red de área local, puede introducir directamente esta dirección IP (por ejemplo, `http://192.168.4.200`) en el navegador para iniciar sesión en el dispositivo.
En este punto, puede **desconectar el cable USB Type-C** de forma segura para lograr una operación y gestión completamente inalámbricas.
:::

---

## 4. Preguntas frecuentes y solución de problemas (FAQ)

### P1: ¿Qué debo hacer si no puedo entrar en la interfaz de inicio de sesión mediante 192.168.42.1 en el sistema Windows?

Si no puede abrir la interfaz web después de conectar el cable Type-C, normalmente se debe a que la tarjeta de red virtual del sistema Windows no obtuvo correctamente una dirección IP. Siga estos pasos para solucionar el problema:

1. Abra el **Panel de control** en el equipo host con Windows.
2. Haga clic para entrar secuencialmente en **Redes e Internet** -> **Centro de redes y recursos compartidos** -> **Cambiar configuración del adaptador**.
3. En la lista emergente de conexiones de red, busque la tarjeta de red virtual con un nombre similar a `Remote NDIS based Internet Sharing Device` o relacionada con reCamera (puede intentar desconectar y volver a conectar el dispositivo para ver qué puerto de red desaparece y reaparece; ese puerto es la interfaz de la tarjeta de red virtual de reCamera Pro).
4. Haga clic con el botón derecho en este adaptador de red y seleccione **Propiedades**.
5. Haga doble clic en **Protocolo de Internet versión 4 (TCP/IPv4)** en la lista.
6. Asegúrese de que la configuración tenga marcadas **Obtener una dirección IP automáticamente** y **Obtener la dirección del servidor DNS automáticamente**.
7. Haga clic en Aceptar para guardar la configuración y vuelva a acceder a `192.168.42.1` en el navegador.

<video 
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4" 
  controls 
  width="100%" 
  preload="metadata">
  Su navegador no admite la reproducción de este vídeo.
</video>


### P2: Después de conectar la reCamera al ordenador mediante el cable USB, el ordenador no pudo acceder a Internet

Si su ordenador MAC no puede acceder a Internet después de conectar la reCamera mediante un cable USB, se debe a que la tarjeta de red virtual se hará cargo del WIFI de su MAC, impidiendo que su MAC se conecte a Internet. Siga los pasos siguientes para resolver el problema:

1. Abra los ***System Settings of your MAC -> Network***.
2. En la esquina inferior derecha (o en la parte inferior derecha), localice un icono que es un ***círculo con tres puntos '...' dentro*** (o una flecha hacia abajo, según la versión de su MAC).
3. Haga clic en ***Set Service Order...(Set Service Order...)***.
4. En la lista emergente, arrastre el WIFI a la parte superior para asegurarse de que esté colocado antes de la tarjeta de red virtual USB (como USB_Gadget).
5. Haga clic en "OK" para guardar. A partir de entonces, cuando utilice el MAC para acceder a Internet, dará prioridad a la conexión WIFI. Solo cuando acceda a la reCamera utilizará la conexión USB.

---

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerle diversos tipos de soporte para garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>