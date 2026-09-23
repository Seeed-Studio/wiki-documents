---
description: Una lista de verificación previa al despliegue para reCamera Pro - verifica la alimentación, la red, la hora, el almacenamiento, el modelo de IA y el comportamiento de reinicio antes de que el dispositivo salga al campo.
title: Lista de verificación previa al despliegue
keywords:
  - reCamera
  - reCamera Pro
  - deployment
  - checklist
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_deploy_checklist
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_deploy_checklist/
---

# Lista de verificación previa al despliegue

Ejecuta esta lista de verificación **en el banco, antes de montar reCamera Pro en su ubicación final**. Cada elemento tiene un criterio de aprobación concreto: si un elemento falla, arréglalo primero (guías enlazadas) o recopila registros y contacta con soporte. Un dispositivo que supera las seis comprobaciones puede desplegarse sin supervisión.

| # | Comprobación | Criterio de aprobación |
| --- | --- | --- |
| 1 | Alimentación | El dispositivo arranca hasta un LED verde fijo con la fuente de alimentación final |
| 2 | Red | La interfaz web es accesible en la dirección LAN desde tu ordenador de monitorización |
| 3 | Hora | El reloj del dispositivo coincide con la hora real y se mantiene tras un reinicio |
| 4 | Almacenamiento | Almacenamiento de grabación dimensionado para la retención que necesitas; política de disco lleno configurada |
| 5 | Modelo de IA | El modelo correcto se ejecuta y detecta tu objetivo del mundo real |
| 6 | Reinicio | El dispositivo vuelve automáticamente, con la configuración y la detección intactas |

{/* TODO(verify): validate each check below on a real device in the field-installation orientation, and add measured pass/fail thresholds (e.g. minimum supply voltage, Wi-Fi signal level, retention days per GB) once tested. */}

## 1. Alimentación

- Usa la fuente de alimentación de fábrica de 12 V CC (12 V, 1 A como mínimo; la fuente de fábrica es de 12 V, 3 A) o una fuente igual de estable en el cableado **final**, no el cable USB de banco.
- Si alimentas por Type-C, el adaptador debe ser compatible con el protocolo PD; una alimentación inestable se manifiesta como errores de Wi-Fi repetidos y fallos en la vista previa.
- **Aprobado**: LED verde fijo después del arranque, y el dispositivo se mantiene encendido durante una sesión completa de vista previa + inferencia. Consulta la sección de hardware en el [inicio rápido](/es/recamera_pro_getting_started/).

## 2. Red

- Conecta el dispositivo a la red/Wi‑Fi de producción, reserva una dirección fija para su MAC en el router (o anota la dirección asignada) y confirma que la interfaz web se abre desde el ordenador que lo va a monitorizar.
- Configura el acceso de forma deliberada: habilita SSH solo si lo necesitas, revisa la configuración HTTP y cambia la contraseña predeterminada.
- **Aprobado**: la interfaz web es accesible en la dirección LAN después de desconectar el cable USB. Consulta [Acceder al dispositivo por Wi‑Fi](/es/recamera_pro_wifi_access/) y [Red, hora y control de acceso](/es/recamera_pro_device_info/).

## 3. Hora

- Los horarios de grabación y las marcas de tiempo de los archivos dependen de un reloj correcto. Configura la hora del sistema (y la fuente de hora) en **Device Info → Time Settings**.
- **Aprobado**: la hora mostrada coincide con la hora real, y las marcas de tiempo de los archivos grabados caen en el directorio de fecha correcto, incluso después de un reinicio.

## 4. Almacenamiento

- Inserta/verifica el almacenamiento en el que realmente vas a grabar y, luego, en **Recording Settings → Storage Management**: comprueba el uso de disco, establece el tamaño/cuota de almacenamiento disponible y decide la política de disco lleno (sobrescribir los más antiguos frente a detenerse).
- **Aprobado**: cuota + política configuradas, y una grabación de prueba aparece en **File Preview**. Consulta [Buscar grabaciones y almacenamiento](/es/recamera_pro_storage/).

## 5. Modelo de IA

- Carga el modelo que ejecutarás en producción (precargado o propio), configura sus categorías de detección y umbrales, habilita la inferencia y verifica que detecta **tu objetivo real en la posición de montaje real**, incluyendo iluminación, ángulo y distancia.
- **Aprobado**: la monitorización de inferencia en tiempo real muestra el `class_name`/`score` correctos para tu objetivo, a un FPS aceptable. Consulta [Configuración de inferencia de IA](/es/recamera_pro_ai_inference/); para modelos personalizados consulta [Elegir una ruta de despliegue de modelo](/es/recamera_pro_model_path/).

## 6. Reinicio

- Reinicia el dispositivo desde **Device Info → System Settings** (o apágalo y vuelve a encenderlo) como prueba final.
- **Aprobado**: el dispositivo arranca por sí solo hasta un LED verde fijo, mantiene su hora, red, contraseña, reglas de grabación y modelo en ejecución, y vuelve a empezar a detectar sin ningún paso manual.

## Antes de cerrar la caja

- [Haz una copia de seguridad de la configuración](/es/recamera_pro_backup_restore/) y guarda el archivo exportado de forma segura: es tu vía de recuperación más rápida.
- Anota la versión de firmware que se muestra en **Device Info → System Settings** en tu inventario de activos; ten a mano la guía de [actualización y recuperación de firmware](/es/recamera_pro_firmware_update/).
- Anota la dirección LAN del dispositivo, la política de la cuenta de administrador y la ubicación de montaje en tu propia documentación de operaciones.

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
