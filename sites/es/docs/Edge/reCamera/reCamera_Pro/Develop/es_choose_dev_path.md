---
description: Compara las cuatro rutas de desarrollo para reCamera Pro — Web API, desarrollo con SDK nativo, agentes de programación con IA y la imagen experimental de Debian 13 — y elige la adecuada para tu proyecto.
title: Elige una ruta de desarrollo
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Web API
  - RKNN
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_dev_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_dev_path/
---

# Elige una ruta de desarrollo

reCamera Pro (Rockchip RV1126B, aarch64 Linux) admite varias formas de crear tu propia aplicación, desde configuración sin código hasta desarrollo nativo completo. Esta página te ayuda a elegir el punto de partida adecuado.

## Comparación de rutas

| Ruta | Ideal para | Habilidad requerida | Dónde empezar |
| --- | --- | --- | --- |
| Apps sin código en WebUI | Flujos de trabajo de detección, grabación y alertas configurados en el navegador | Ninguna | [Crea tu propia app](/es/recamera_pro_ai_inference/) |
| Web API | Integrar un dispositivo existente en tu propio backend o script | Conceptos básicos de HTTP/JSON | [Introducción al API](/es/recamera_pro_api_introduction/) |
| SDK nativo (C/C++ + RKNN) | Aplicaciones de IA personalizadas en el dispositivo con control total | C/C++, compilación cruzada | [SDK y aplicación mínima](/es/recamera_pro_sdk_setup/) |
| Agentes de programación con IA | Crear aplicaciones nativas mediante conversaciones en lenguaje natural con Codex, Claude Code, Copilot, Cursor o Gemini CLI | Habilidad de prompting; el agente gestiona los detalles de la toolchain | [Desarrollar con agentes de programación con IA](/es/recamera_pro_development_cpp_skill/) |
| Debian 13 experimental | Usuarios que necesitan `apt`, CMake o Docker en el propio dispositivo | Administración de Linux | [Imagen experimental de Debian 13](/es/recamera_pro_debian/) |

## Apps sin código en WebUI

El firmware Buildroot de fábrica incluye una interfaz web para inferencia de IA, grabación de eventos y salidas de alerta (MQTT, HTTP, puerto serie). Si tu proyecto puede expresarse como "detecta esto, luego graba o notifica", configúralo primero en la WebUI: no se requiere código. Consulta la sección Crea tu propia app de este wiki.

## Web API

El dispositivo expone una Web API basada en HTTP para información del dispositivo, configuración del sistema, gestión de red, control de audio/vídeo, inferencia de IA, gestión de archivos y actualizaciones de firmware.

| Elemento | Descripción |
| --- | --- |
| Protocolo | HTTP o HTTPS |
| Ruta base | `/cgi-bin/entry.cgi` (la mayoría de endpoints); `/api/v1/...` para endpoints de puerto serie y archivos |
| Tipo de contenido | `application/json` |
| Autenticación | Token JWT vía Cookie |

Elige esta ruta cuando un sistema externo (servicio backend, hub de automatización del hogar, script) necesite controlar el dispositivo o leer de él. Comienza con la [Introducción al API](/es/recamera_pro_api_introduction/) y el [Inicio rápido](/es/recamera_pro_api_quick_start/).

## SDK nativo (C/C++ + RKNN)

Para aplicaciones de IA personalizadas en el dispositivo, el contrato objetivo es:

| Elemento | Configuración compatible |
| --- | --- |
| SoC | Rockchip RV1126B |
| Arquitectura objetivo | aarch64 Linux |
| Formato de modelo | Entrada ONNX, salida RKNN |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| Framework de cámara | GStreamer |
| Lenguaje de la aplicación nativa | C/C++ |

Compilas de forma cruzada en un host Linux (o WSL) contra un sysroot compatible con reCamera Pro y despliegas el binario más los modelos RKNN en el dispositivo. Consulta [SDK y aplicación mínima](/es/recamera_pro_sdk_setup/) para la configuración del entorno y un ejemplo completo, y [Desarrollo de cámara, audio e inferencia](/es/recamera_pro_media_dev/) para detalles del pipeline de medios.

:::note
Esta plataforma es específica de **reCamera Pro con el SoC RV1126B y aarch64 Linux**. No es compatible con la plataforma reCamera SG2002/riscv64.
:::

## Agentes de programación con IA

La [reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) empaqueta el mismo conocimiento de desarrollo nativo — conversión de modelos, compilación cruzada, cámara, audio, GStreamer y guía de RTSP más una plantilla de aplicación en C++ — para agentes de programación con IA. Si prefieres describir una aplicación en lenguaje natural y dejar que un agente gestione la toolchain, comienza con [Desarrollar con agentes de programación con IA](/es/recamera_pro_development_cpp_skill/).

## Imagen experimental de Debian 13

Una imagen comunitaria de Debian 13 sustituye el sistema Buildroot de fábrica y te ofrece `apt`, CMake y Docker directamente en el dispositivo. La cámara, el micrófono, el altavoz y el Wi-Fi funcionan con los controladores de fábrica de Seeed; Bluetooth no es compatible y el adaptador de red virtual USB-C original no está disponible.

:::warning
El firmware Debian 13 es experimental. Seeed no lo mantiene en este momento; se proporciona como una opción de desarrollo adicional. Consulta [Imagen experimental de Debian 13](/es/recamera_pro_debian/) para detalles de flasheo y recuperación.
:::

{/* TODO(verify): confirm which stock-firmware features (WebUI, vendor AI services, OTA update) are lost when the Debian 13 image is flashed, and document the official path back to factory firmware */}

## Guía de decisión

- **"Quiero alertas/grabaciones basadas en un modelo preentrenado o personalizado"** → WebUI, más [Usa tu propio modelo](/es/recamera_pro_model_path/) si necesitas un detector personalizado.
- **"Quiero que mi backend controle el dispositivo"** → Web API.
- **"Quiero una aplicación totalmente personalizada en el dispositivo"** → SDK nativo, opcionalmente gestionado por un agente de programación con IA.
- **"Quiero un ordenador Linux de propósito general con cámara"** → Debian 13 experimental.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
