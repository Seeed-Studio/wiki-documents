---
description: Configura el entorno de compilación cruzada del SDK de reCamera Pro y recorre la compilación y el despliegue de una aplicación nativa mínima, usando el proyecto Visual Wake + STT como ejemplo práctico.
title: SDK y aplicación mínima
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - cross-compilation
  - RKNN
  - GStreamer
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_sdk_setup/
---

# SDK y aplicación mínima

Esta página explica cómo preparar un entorno host para compilar aplicaciones nativas de reCamera Pro y cómo funciona un ciclo completo de compilación y despliegue. Los pasos se demuestran con el proyecto [Visual Wake and Offline Speech Recognition](/es/recamera_pro_visual_wake_stt/), una aplicación real de RKNN + GStreamer que se ejecuta completamente en el dispositivo.

Para el contrato general de desarrollo (versiones de toolchain, formatos de modelo, lenguajes), consulta [Choose a Development Path](/es/recamera_pro_dev_path/). Si prefieres que un agente de programación con IA dirija este flujo de trabajo, consulta [Develop with AI Coding Agents](/es/recamera_pro_development_cpp_skill/).

## Requisitos previos

- Una reCamera Pro (RV1126B, aarch64) accesible a través de Ethernet virtual por USB (`192.168.42.1` por defecto) o LAN
- Un ordenador con Linux, o un ordenador con Windows y WSL, para la conversión de modelos y la compilación cruzada
- Un SDK de reCamera Pro funcional en el host
- RKNN-Toolkit2 2.3.2 y RKNN Runtime 2.3.2 — no mezcles versiones arbitrarias de RKNN Runtime

{/* TODO(verify): documentar dónde descargar el SDK de reCamera Pro, su estructura de directorios esperada y cómo verificar la versión del SDK; el proyecto fuente solo hace referencia a una ruta local del SDK */}

## Configurar la ruta del SDK

Los scripts de compilación en los proyectos de reCamera Pro normalmente localizan el SDK mediante una variable de entorno. Para el proyecto Visual Wake, `scripts/build_recamera.sh` busca el SDK en una ruta local predeterminada; en su lugar, apúntalo a tu propio checkout del SDK:

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

El script de compilación también valida `librknnrt.so`. Si tu SDK o runtime lo almacena en otro lugar, actualiza la ruta `qualified_rknnrt` en el script a un runtime RKNN 2.3.2 verificado, manteniendo el paso de validación de checksum.

## Obtener un proyecto y compilar de forma cruzada

Clona el repositorio del proyecto y ejecuta su script de compilación cruzada desde la raíz del proyecto:

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
bash scripts/build_recamera.sh
```

El script valida el SDK, carga su entorno de compilación y genera un paquete de despliegue:

```text
build-recamera/deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

Una aplicación mínima propia sigue la misma estructura: un ejecutable aarch64, sus archivos de modelo RKNN y cualquier recurso web o de configuración, todo dispuesto en un solo directorio.

## Desplegar en el dispositivo

Copia el **contenido** del directorio de despliegue en un único directorio del dispositivo, luego conéctate por SSH y haz que el binario sea ejecutable:

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
Mantén los directorios `models/` y `web/` en sus rutas relativas. La aplicación carga sus recursos usando esas rutas relativas predeterminadas.
:::

## Ejecutar y verificar

Ejecuta la aplicación desde su directorio de despliegue:

```bash
./visual_wake_app
```

Durante el funcionamiento normal, los eventos accionables aparecen en la terminal:

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

Usa `--help` para listar todas las opciones de ejecución. Por ejemplo, este comando solo verifica la canalización visual y desactiva los servicios de red:

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

Un despliegue satisfactorio significa: el binario se inicia en el dispositivo, carga sus modelos RKNN, abre la cámara e imprime eventos reconocibles o resultados de inferencia.

## Problemas comunes de entorno

| Problema | Posible causa | Solución |
| --- | --- | --- |
| La compilación no puede encontrar OpenCV o RKNN | Falta el entorno del SDK o el runtime es incompatible | Verifica `RECAMERA_PRO_SDK`, carga el `env.sh` del SDK y usa RKNN 2.3.2 |
| No se pueden encontrar los archivos de modelo en tiempo de ejecución | No se preservó la estructura de despliegue | Confirma que `models/` y `web/` existen en el directorio de ejecución |
| El ejecutable es x86-64 | Se usó el compilador del host en lugar del compilador cruzado aarch64 | Vuelve a compilar con un compilador compatible con el destino y el sysroot de reCamera Pro |
| El binario no puede cargar una biblioteca | El sysroot, el ABI o la ruta de búsqueda de runtime no coincide con la placa | Inspecciona las dependencias ELF y compara cada biblioteca de destino con la del dispositivo |

{/* TODO(verify): añadir la salida esperada de un comando de comprobación de versión (versión del SDK, versión de librknnrt.so en el dispositivo) para que los usuarios puedan confirmar la compatibilidad entre host y dispositivo antes de desplegar */}

## Próximos pasos

- [Camera, Audio, and Inference Development](/es/recamera_pro_media_dev/) — detalles de captura de cámara con GStreamer, audio ALSA y salida RTSP
- [Develop with AI Coding Agents](/es/recamera_pro_development_cpp_skill/) — automatiza la conversión de modelos y las compilaciones nativas con un agente de IA
- [Visual Wake and Offline Speech Recognition](/es/recamera_pro_visual_wake_stt/) — el ejemplo completo utilizado en esta página

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
