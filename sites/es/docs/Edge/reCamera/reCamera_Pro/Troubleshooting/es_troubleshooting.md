---
description: Problemas comunes de reCamera Pro y sus soluciones, organizados por síntoma. Cubre errores de Wi‑Fi, fallos en la vista previa de video, bloqueos con modelos FP16, red por USB y restablecimiento de fábrica.
title: Solución de problemas por síntoma
keywords:
  - reCamera
  - reCamera Pro
  - FAQ
  - troubleshooting
  - FP16
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_faqs/
---

# Solución de problemas por síntoma

Esta página agrupa los problemas comunes de reCamera Pro según **lo que ves**, para que puedas ir directamente a la solución. Si ninguno coincide, [recopila registros](/es/recamera_pro_collect_logs/) y compártelos con el soporte.

| Síntoma | Sección |
| --- | --- |
| La WebUI muestra repetidamente errores de Wi‑Fi / no puede mostrar la vista previa | [1. Errores de Wi‑Fi y sin vista previa](#1-errores-de-wi-fi-y-sin-vista-previa) |
| Subir un modelo FP16 bloquea la WebUI | [2. La carga de un modelo FP16 bloquea la WebUI](#2-la-carga-de-un-modelo-fp16-bloquea-la-webui) |
| Windows no puede acceder a `192.168.42.1` por USB | [3. Fallo de conexión USB en Windows](#3-fallo-de-conexión-usb-en-windows) |
| Se pierde el acceso a Internet tras conectar el USB | [4. El ordenador host pierde Internet por USB](#4-el-ordenador-host-pierde-internet-por-usb) |
| El dispositivo necesita un restablecimiento completo | [5. Restablecimiento de fábrica](#5-restablecimiento-de-fábrica) |

---

## 1. Errores de Wi‑Fi y sin vista previa

**Síntoma**: la WebUI muestra repetidamente errores de conexión Wi‑Fi y no puede mostrar la vista previa en vivo.

**Solución**:

- Comprueba si el dispositivo está alimentado correctamente: una alimentación inestable es la causa más común.
- Si se alimenta a través de la interfaz Type‑C, asegúrate de que el adaptador sea compatible con el **protocolo PD**.
- Para un funcionamiento fiable, utiliza el cable de alimentación de CC suministrado de fábrica (12 V, 3 A).
- Después de corregir la alimentación, verifica la conexión Wi‑Fi en **Device Info → Network Settings** y confirma que el LED verde esté fijo antes de volver a abrir la vista previa.

## 2. La carga de un modelo FP16 bloquea la WebUI

**Síntoma**: en el firmware **V1.1.1 y anteriores**, subir un modelo de precisión FP16 hace que el proceso principal del sistema se bloquee y la WebUI deje de responder.

:::note Terminology
Este problema se aplica a la cuantificación de modelos **FP16** (coma flotante de 16 bits). Parte de la documentación antigua usaba la abreviatura "FB16"; ambas se refieren al mismo formato de cuantificación.
:::

**Solución**: utiliza el método que tengas disponible:

### Opción A: Restablecimiento de fábrica

Mantén **pulsado el botón lateral del dispositivo durante 15 segundos** para restaurar los ajustes de fábrica. El dispositivo se reiniciará con una configuración limpia y el modelo problemático eliminado. Consulta [Actualización y recuperación de firmware](/es/recamera_pro_firmware_update/) para ver el flujo completo de restablecimiento.

### Opción B: Editar el archivo de configuración por SSH

1. Conéctate al dispositivo por USB e inicia sesión por SSH.
2. Abre `/userdata/config/rkipc.ini` para editarlo.
3. En la sección `[rc_model.0]`, cambia el campo `model` a `yolox_s.rknn`.
4. Guarda y reinicia el dispositivo.

{/* TODO(verify): confirm whether this freeze is fixed on firmware versions after V1.1.1, and state the first firmware version where FP16 models can be uploaded without freezing. */}

## 3. Fallo de conexión USB en Windows

**Síntoma**: después de conectar el cable Type‑C, `http://192.168.42.1` no se carga en el navegador en Windows.

**Solución**: normalmente el adaptador de red virtual de Windows no obtuvo una dirección IP automáticamente.

1. Abre **Control Panel → Network and Internet → Network and Sharing Center → Change adapter settings**.
2. Busca el adaptador llamado algo como `Remote NDIS based Internet Sharing Device` o relacionado con reCamera (desconecta y vuelve a conectar para ver qué adaptador desaparece y reaparece: esa es la interfaz de reCamera Pro).
3. Clic derecho → **Properties**.
4. Doble clic en **Internet Protocol Version 4 (TCP/IPv4)**.
5. Selecciona **Obtain an IP address automatically** y **Obtain DNS server address automatically**.
6. Haz clic en OK e intenta de nuevo con `http://192.168.42.1`.

<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4"
  controls
  width="100%"
  preload="metadata">
  Tu navegador no admite la reproducción de este video.
</video>

{/* TODO(verify): add equivalent steps for macOS and Linux if the USB connection exposes a network interface on those platforms too. */}

## 4. El ordenador host pierde Internet por USB

**Síntoma**: después de conectar la reCamera al ordenador por USB, el ordenador host no puede acceder a Internet.

Esto ocurre porque el adaptador de red USB tiene prioridad en la tabla de enrutamiento del sistema operativo. Consulta el [diagrama de solución de problemas de conexión de red](https://wiki.seeedstudio.com/es/recamera_network_connection/#error-de-red-del-ordenador) para aplicar la corrección.

## 5. Restablecimiento de fábrica

Si nada de lo anterior aplica y el dispositivo sigue comportándose de forma anómala, restaura los ajustes de fábrica:

- **Hardware**: mantén pulsado el botón lateral durante **~15 segundos** hasta oír un sonido de aviso. Espera a que el LED verde permanezca encendido de forma continua.
- **WebUI**: **Device Info → System Settings → Factory Reset**.

Consulta [Actualización y recuperación de firmware](/es/recamera_pro_firmware_update/) para saber qué se conserva y qué se borra.

## Otros problemas

- Problemas de RTSP, grabación o almacenamiento → [Configuración de grabación de eventos](/es/recamera_pro_record_settings/) y [Buscar grabaciones y almacenamiento](/es/recamera_pro_storage/).
- Problemas de conversión o inferencia de modelos → [Configuración de inferencia de IA](/es/recamera_pro_ai_inference/); para modelos personalizados consulta [Elegir una ruta de despliegue de modelos](/es/recamera_pro_model_path/).
- Fallos en llamadas de API → [Solución de problemas de API](/es/recamera_pro_api_faq/) (marcador de posición B4 / T3).

{/* TODO(verify): cross-reference RTSP/recording/storage and API troubleshooting issues from real support tickets once T3 (api_troubleshooting.md) lands. */}

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
