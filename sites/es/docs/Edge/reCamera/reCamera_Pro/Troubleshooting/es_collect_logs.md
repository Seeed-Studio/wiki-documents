---
description: Cómo recopilar registros del sistema, versión de firmware e información del dispositivo de reCamera Pro para la resolución de problemas o solicitudes de soporte técnico.
title: Recopilar registros para soporte
keywords:
  - reCamera
  - reCamera Pro
  - logs
  - troubleshooting
  - support
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_collect_logs
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_collect_logs/
---

# Recopilar registros para soporte

Cuando [Solucionar problemas por síntoma](/es/recamera_pro_faqs/) no resuelve un problema, el siguiente paso es recopilar registros e información del dispositivo. El soporte solicitará:

1. **Versión de firmware e información básica del dispositivo**: qué está ejecutando el dispositivo.
2. **Registros del sistema**: qué estaba haciendo el dispositivo cuando ocurrió el problema.
3. **Pasos para reproducir**: cómo provocar el problema de forma fiable.

{/* TODO(verify): confirm whether the device or WebUI offers a one-click "export support bundle" feature on current firmware, and document it here if available. */}

## 1. Versión de firmware e información básica del dispositivo

Abre **Device Info** en la barra de navegación izquierda:

- **Basic Information**: información de versión de hardware/software y uso de recursos del sistema.
- **System Settings**: versión de firmware actual.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

Registra lo siguiente e inclúyelo en tu solicitud de soporte:

| Elemento | Dónde encontrarlo |
| --- | --- |
| Versión de firmware | Device Info → System Settings |
| Modelo de hardware / SKU | Basic Information |
| Versiones de software | Basic Information |
| Uso de recursos del sistema (CPU, memoria, almacenamiento) | Basic Information |

## 2. Registros del sistema

Abre **Terminal** en la barra de navegación izquierda y luego cambia al área **System Log**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/20260708190224_6_2.png" />

Desde aquí puedes:

- Ver la salida del registro del sistema en tiempo real.
- Filtrar registros por nivel de registro o palabras clave.
- Borrar la visualización actual.
- **Descargar los archivos de registro**: esto es lo que necesita el soporte.

### Qué capturar en los registros

- Reproduce el problema mientras el registro del sistema se está transmitiendo.
- Descarga el registro **inmediatamente después** de que ocurra el problema, para que las entradas relevantes sigan en el búfer.
- Si el problema es intermitente, descarga los registros después de cada aparición y anota la marca de tiempo de cada evento.

## 3. Consola de terminal (opcional, para usuarios avanzados)

La **consola de Terminal** dentro de Terminal te permite iniciar sesión en el shell del sistema de reCamera Pro directamente desde la Web UI, sin una herramienta SSH independiente.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

Credenciales predeterminadas para la consola de terminal:

```
Username: root
Password: recamera
```

:::caution
La consola de terminal otorga acceso completo al sistema. Ejecuta solo comandos que entiendas y no modifiques archivos del sistema a menos que el soporte te lo indique.

{/* TODO(verify): confirm whether the default terminal password is still `recamera` on current firmware, and whether changing the WebUI admin password also changes the terminal root password. */}
:::

Si has [habilitado SSH](/es/recamera_pro_device_info/) en Connection Settings, también puedes conectarte por SSH para recopilar registros; esto es útil si la propia WebUI no responde.

## 4. Pasos para reproducir

El soporte preguntará cómo provocar el problema. Anota:

- Qué estabas haciendo cuando apareció el problema (por ejemplo, subiendo un modelo, iniciando una grabación, conectándote a Wi-Fi).
- Qué esperabas que sucediera frente a lo que realmente sucedió.
- Si el problema es reproducible, intermitente o de una sola vez.
- La versión de firmware y cualquier cambio reciente (carga de modelo, importación de configuración, actualización de firmware).

## Envío al soporte

Una solicitud de soporte completa incluye:

| Elemento | Fuente |
| --- | --- |
| Versión de firmware | Paso 1 |
| Captura de pantalla de la información básica del dispositivo | Paso 1 |
| Archivo de registro del sistema descargado | Paso 2 |
| Pasos para reproducir | Paso 4 |

Adjunta todo esto al abrir un ticket. Cuanto más completa sea la información inicial, más rápida será la resolución.

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
