---
description: Enciende reCamera Pro, inicia sesión en la interfaz web, comienza la vista previa en vivo y confirma tu primer resultado de detección de IA: el camino más rápido desde el desempaquetado hasta una cámara de IA en funcionamiento.
title: 'Inicio rápido: ve tu primera detección de IA'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - quick start
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_getting_started/
---

# Inicio rápido: ve tu primera detección de IA

Esta guía te lleva desde una reCamera Pro recién desempaquetada hasta una vista previa de video en vivo con resultados de detección de IA, en unos 10 minutos:

1. [Conecta el hardware](#1-conecta-el-hardware)
2. [Inicia sesión en la interfaz web](#2-inicia-sesión-en-la-interfaz-web)
3. [Inicia la vista previa en vivo](#3-inicia-la-vista-previa-en-vivo)
4. [Confirma que la detección de IA funciona](#4-confirma-que-la-detección-de-ia-funciona)

{/* TODO(verify): add a "detection success" screenshot showing the live preview with a bounding box overlaid on a person, and confirm which model ships preloaded on current firmware and which firmware versions this first-login flow applies to. */}

## 1. Conecta el hardware

Antes de empezar, asegúrate de tener:

- **Fuente de alimentación**: el cable de alimentación de CC (especificación: **12 V, 1 A** como mínimo; la fuente de alimentación de fábrica es de 12 V, 3 A).
- **Cable de datos**: un cable USB tipo C que admita **transferencia de datos** (no solo carga), para la conexión directa inicial a tu ordenador.

Pasos de conexión:

1. Conecta el cable de alimentación de CC de 12 V a la interfaz de alimentación del dispositivo. Conecta un extremo del cable USB tipo C a reCamera Pro y el otro extremo a tu ordenador (host Windows mostrado abajo).
2. Observa el indicador de estado: cuando el **LED verde está fijo**, el dispositivo ha terminado de arrancar.

![System status light and cable connection diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

### Referencia del indicador de estado

El LED verde muestra el estado del sistema; el LED rojo es el indicador de alimentación.

| Estado del LED verde | Significado |
| --- | --- |
| Respirando | El dispositivo se está encendiendo |
| Encendido fijo | El dispositivo está funcionando con normalidad |
| Apagado | Estado anómalo: el proceso principal no se está ejecutando |
| Parpadeo de 100 ms | Actualización OTA en curso |
| Parpadeo corto | Se detectó una tarjeta SD con un sistema de archivos sucio |

## 2. Inicia sesión en la interfaz web

reCamera Pro tiene una interfaz web integrada, sin software cliente que instalar. Con el cable USB conectado, tu ordenador accede directamente al dispositivo en su dirección predeterminada.

:::note
Asegúrate de que el cable USB tipo C esté correctamente conectado y de que el LED verde esté fijo antes de iniciar sesión.
:::

1. Abre un navegador en tu ordenador (se recomienda Chrome o Edge).
2. Ve a la dirección IP predeterminada: `http://192.168.42.1`.
3. **Primer inicio de sesión**: la contraseña inicial es `recamera`. Se te pedirá que establezcas una nueva contraseña; introdúcela y luego inicia sesión con el nombre de usuario `admin` y tu nueva contraseña.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />

4. Después de iniciar sesión, llegarás a la interfaz principal (la página de **Vista previa en tiempo real** de forma predeterminada).

![Web login and main interface diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip ¿No puedes acceder a 192.168.42.1 en Windows?
Si la página no se carga, normalmente el adaptador de red virtual de Windows no obtuvo una dirección IP automáticamente. Consulta [Solución de problemas por síntoma](/es/recamera_pro_faqs/) para ver la corrección del adaptador paso a paso.
:::

:::info ¿Quieres ir por Wi‑Fi?
La conexión USB solo es necesaria para la primera configuración. Para gestionar el dispositivo a través de tu red local, sigue [Accede al dispositivo por Wi‑Fi](/es/recamera_pro_wifi_access/).
:::

## 3. Inicia la vista previa en vivo

En la página de **Vista previa en tiempo real**, haz clic en **Start** para comenzar la reproducción. Deberías ver la transmisión de video en vivo de la cámara en tu navegador; úsala para apuntar la cámara, ajustar la lente y confirmar la calidad de imagen.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

La página de vista previa también permite tomar fotos, grabar manualmente y cambiar entre la transmisión principal y la subtransmisión. Detalles: [Vista previa, captura y grabación manual](/es/recamera_pro_live_preview/).

## 4. Confirma que la detección de IA funciona

La vista previa en vivo por sí sola solo demuestra que la ruta de video funciona. Para confirmar la ruta de **detección de IA**, ejecuta la tarea de inferencia y observa su salida:

1. Abre **AI Inference** en la barra de navegación izquierda.
2. En **Inference Configuration**, asegúrate de que **Inference Enable** esté activado, selecciona el modelo en ejecución (un modelo de detección viene precargado en el dispositivo) y haz clic en **Save Configuration**.
3. Comprueba que **Inference Status** muestre **Running** y que los FPS en tiempo real sean distintos de cero.
4. Mira el área de **Real-time Inference Monitoring**: cuando un objetivo aparece en el campo de visión, los resultados de detección llegan en forma de registros con los campos `class_name`, `score`, `bbox` y `detection_count`.

**Cómo verificarlo**: ponte delante de la cámara (o muestra una imagen de un teléfono/persona). En uno o dos segundos deberías ver entradas como `class_name: person` con una `score` de confianza, y un cuadro delimitador dibujado en la vista previa. Si aparecen resultados, tu primera detección de IA queda confirmada.

La referencia completa de configuración de inferencia (selección de modelo, categorías de detección, umbrales de confianza/IOU, frecuencia de inferencia, controles de monitorización) está en la [página de configuración de AI Inference](/es/recamera_pro_ai_inference/).

{/* TODO(verify): confirm the exact preloaded model name shown in Running Model on current shipping firmware, and capture a screenshot of Real-time Inference Monitoring with a person detection. */}

## Próximos pasos

- [Primera tarea: detectar y grabar](/es/recamera_pro_first_recording/) — convierte una detección en una grabación de evento y reprodúcela.
- [Accede al dispositivo por Wi‑Fi](/es/recamera_pro_wifi_access/) — desconecta el cable USB y gestiona el dispositivo de forma inalámbrica.
- [Lista de comprobación previa al despliegue](/es/recamera_pro_deploy_checklist/) — antes de instalar el dispositivo sobre el terreno.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
