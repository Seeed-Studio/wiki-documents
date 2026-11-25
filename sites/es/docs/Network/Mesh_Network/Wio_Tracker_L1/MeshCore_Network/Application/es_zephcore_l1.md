---
description: Explora ZephCore, un firmware MeshCore basado en Zephyr, en dispositivos de malla LoRa de Seeed Studio.
title: Desarrollo con Zephyr
keywords:
  - ZephCore
  - Zephyr RTOS
  - MeshCore
  - LoRa mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" 
slug: /zephcore_getting_started
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 11/24/2026
  author: Michelle Huang
createdAt: 2026-11-24T00:00:00.000Z
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/es/zephcore_getting_started/
---

## Cómo se relaciona ZephCore con MeshCore

MeshCore permite que los dispositivos LoRa intercambien mensajes fuera de la red. El [proyecto ZephCore](https://github.com/liquidraver/ZephCore) es un port comunitario de MeshCore construido sobre el sistema operativo Zephyr. Puedes probar ZephCore en un dispositivo y enviar un mensaje a un amigo que ejecute MeshCore. Ambas radios necesitan configuraciones coincidentes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" alt="Proyecto ZephCore en GitHub" width={800} height="auto" /></p>

| ¿Qué cambia para ti? | Firmware MeshCore | Firmware ZephCore |
| --- | --- | --- |
| Plataforma de firmware | Firmware MeshCore basado en Arduino | Un port construido sobre Zephyr RTOS |
| Red LoRa | Una malla LoRa de MeshCore | La misma malla MeshCore |
| APP móvil | App MeshCore con un Companion BLE | Misma app con una compilación compatible de Companion BLE |

## ¿Qué es Zephyr?

Zephyr es un sistema operativo de tiempo real de código abierto para dispositivos pequeños. En un rastreador, puede despertar el procesador cuando se pulsa un botón, leer un receptor GPS o actualizar una pantalla. ZephCore usa esos servicios para ejecutar un nodo de malla.

## Elige tu dispositivo

Elige **Companion** si quieres enviar mensajes desde tu teléfono por Bluetooth. Elige **Repeater** si quieres que el dispositivo reenvíe mensajes para nodos cercanos.

| Dispositivo | Imagen | Nombre de placa en ZephCore |
| --- | --- | --- |
| [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="Wio Tracker L1 Pro en la guía de inicio de MeshCore" width={160} height="auto" /></p> | `wio_tracker_l1` |
| [SenseCAP MeshTracker X1](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html) | <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" alt="SenseCAP MeshTracker X1 en la guía de inicio de MeshCore" width={160} height="auto" /></p> | `meshtracker_x1` |
| [SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="SenseCAP T1000-E en la guía de inicio de MeshCore" width={160} height="auto" /></p> | `t1000_e` |
| [SenseCAP Solar Node P1 Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="SenseCAP Solar Node P1 Pro en la guía de inicio de MeshCore" width={160} height="auto" /></p> | `sensecap_solar` es el nombre de placa relacionado |

Comprueba qué compilaciones están disponibles para tu placa en la [lista de placas](https://github.com/liquidraver/ZephCore/blob/master/docs/supported_boards.md) y en las [versiones de firmware](https://github.com/liquidraver/ZephCore/releases).

## Flashear ZephCore

Antes de cambiar el firmware, guarda la configuración de tu radio y haz una copia de seguridad de la identidad de tu nodo si quieres conservarla. Cambiar el firmware requiere configurar el nodo de nuevo.

1. **Conecta.** Enchufa el dispositivo a tu ordenador con un cable de datos USB. Abre el [ZephCore Web Flasher](https://zephcore.meshcore.dev/) en Chrome o Edge.
2. **Selecciona.** Elige tu placa y rol exactos usando la tabla anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephcoreSeeedproduct.png" alt="Dispositivos de Seeed Studio en ZephCore Web Flasher" width={900} height="auto" /></p>

3. **Flashea.** Sigue las indicaciones para seleccionar el dispositivo USB e instalar el firmware. Espera a que el flasher informe que ha finalizado.
4. **Prueba.** Selecciona el mismo ajuste preestablecido regional de radio que un nodo MeshCore cercano. Para un Companion, empareja en la app MeshCore, envía un mensaje y pide una respuesta. Para un Repeater, comprueba que un mensaje llega a un segundo nodo a través del repetidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorefirst.jpg" alt="Pantalla de inicio de ZephCore en el L1 Pro" width={550} height="auto" /></p>

## ¿Qué puedes probar con ZephCore?

### Medir el consumo de batería

Escuchar paquetes LoRa consume energía incluso cuando nadie envía un mensaje. En radios SX126x compatibles, ZephCore puede escuchar en ventanas cortas para **reducir la corriente media**. 

### Comprobar el L1 Pro sin sacar el teléfono

En el L1 Pro, usa el joystick para recorrer las pantallas de estado OLED y comprobar el nivel de batería en el dispositivo. Esto es útil cuando el rastreador está en tu mano y tu teléfono está guardado. En los X1 y T1000-E sin pantalla, usa la app MeshCore para ver el estado del Companion.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephCore%20Menu.jpg" alt="Menú de ZephCore en el OLED del L1 Pro" width={550} height="auto" /></p>

### Explorar juegos en Zephyr

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcoregame.gif" alt="Demostración de juego de ZephCore" width={480} height="auto" /></p>

## Compila tu primer firmware ZephCore

Instala Git, las herramientas de Zephyr y el SDK requerido por tu revisión de ZephCore. [Instrucciones de compilación de ZephCore](https://github.com/liquidraver/ZephCore)

Desde una carpeta nueva, descarga el proyecto y sus dependencias:

```bash
git clone https://github.com/liquidraver/ZephCore.git zephcore
west init -l zephcore
west update
```

Desde la misma carpeta, compila el firmware para el L1 Pro:

```bash
west build -b wio_tracker_l1 zephcore --pristine
```

Aquí, `west` es la herramienta de línea de comandos de Zephyr y `-b` selecciona la placa. El comando compila el firmware en tu ordenador. Para probar una primera edición, cambia una etiqueta en la pantalla de estado del L1 Pro, vuelve a compilar y sigue las instrucciones del proyecto para instalar tu compilación local. La nueva etiqueta te da una comprobación visible de que tu propio firmware se está ejecutando.

A medida que explores el código fuente, busca **Devicetree** para ver cómo está conectado el hardware y **Kconfig** para ver qué funciones habilita una compilación.

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>