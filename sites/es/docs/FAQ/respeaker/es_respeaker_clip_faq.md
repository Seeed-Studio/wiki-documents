---
title: Preguntas frecuentes sobre reSpeaker Clip
description: Preguntas frecuentes sobre la documentación oficial, la creación de prototipos de transcripción en vivo y los recursos mecánicos para reSpeaker Clip.
slug: /respeaker_clip_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker Clip FAQ
  - reSpeaker Clip documentation
  - live transcription
  - mechanical drawing
createdAt: '2026-09-01'
url: https://wiki.seeedstudio.com/es/respeaker_clip_faq/
updatedAt: '2026-09-03'
---

<div class="respeaker-faq-page">

# Preguntas frecuentes sobre reSpeaker Clip

Esta página contiene respuestas verificadas para reSpeaker Clip. Cada respuesta indica la variante de producto y el modo de firmware al que se aplica, junto con la fecha en que se verificó por última vez con las fuentes oficiales actuales.

## Antes de comenzar

- Confirma la variante exacta del producto y el modo de firmware (USB o I2S) en el que se está ejecutando el dispositivo.
- Comprueba la versión actual del firmware antes de aplicar pasos específicos de una versión.
- Las respuestas de esta página se verificaron por última vez el 2026-09-01; vuelve a comprobar las fuentes oficiales enlazadas si estás leyendo esto más tarde.

<!-- RESPEAKER_FAQ_AUTO_START -->
## Documentación y uso {#documentation-and-usage}

### ¿Dónde puedo encontrar la documentación oficial actual de ReSpeaker Clip? {#official-documentation}

**Se aplica a:** Usuarios y desarrolladores de ReSpeaker Clip

**Última verificación:** 2026-09-01

Comienza con la página actual de Introducción de ReSpeaker Clip. Usa la guía del SDK básico para el control desde el host y la transferencia de grabaciones, y usa la guía de Desarrollo de firmware solo cuando cambies el firmware del lado del dispositivo. La URL antigua `/respeaker_clip_getting_started/` está obsoleta y no debe guardarse en marcadores.

**Requisitos previos:**

- Identificar si la tarea es uso normal del producto, integración del SDK en el host o desarrollo de firmware del dispositivo

1. Abre Getting Started para la configuración, flujos de trabajo de la app, especificaciones y la lista actual de recursos.
2. Abre la guía del SDK básico para controlar la grabación, gestionar sesiones o transferir archivos por BLE o Wi‑Fi.
3. Abre la guía de Desarrollo de firmware solo para compilar, flashear, depurar o cambiar el comportamiento del lado del dispositivo.
4. Si un enlace guardado sigue fallando, sustitúyelo por la URL actual correspondiente del Wiki antes de informar de una caída de la documentación.

**Criterios de éxito:**

- La guía actual seleccionada se carga y cubre la capa prevista de producto, SDK en el host o desarrollo de firmware

**Notas:**

- Algunos recursos en Getting Started siguen marcados explícitamente como `Coming soon`; que una guía esté publicada no implica que se haya publicado cada artefacto mecánico o de firmware.

**Referencias:**

- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/es/respeaker_clip/)
- [ReSpeaker Clip Basic SDK guide](https://wiki.seeedstudio.com/es/respeaker_clip_basic_sdk_guide/)
- [ReSpeaker Clip Firmware Development guide](https://wiki.seeedstudio.com/es/respeaker_clip_firmware_development_guide/)

### ¿Se puede usar ReSpeaker Clip para crear prototipos de transcripción de conversaciones en vivo? {#live-conversation-transcription}

**Se aplica a:** Prototipos de ReSpeaker Clip que muestran voz a texto en vivo en un ordenador o navegador aparte

**Última verificación:** 2026-09-01

Sí, como parte de un prototipo con host y nube. El ejemplo oficial de Live STT transmite audio de micrófono desde firmware de Clip compatible con RTC a través de BLE, convierte los enunciados de voz completados en texto mediante un proveedor STT externo y muestra la transcripción en un navegador. Esto no está documentado como transcripción autónoma en el propio dispositivo.

**Requisitos previos:**

- Firmware de ReSpeaker Clip con compatibilidad de transmisión en vivo RTC
- Python 3.10 o posterior y un adaptador BLE funcional
- Acceso a red y una clave de API para el proveedor STT usado por el ejemplo oficial

1. Sigue la guía oficial de la aplicación Live STT e instala sus dependencias de Python.
2. Conéctate a ReSpeaker Clip por BLE e introduce la clave del proveedor STT en la configuración de la aplicación.
3. Selecciona `Start Streaming`, habla y espera a que cada enunciado completado aparezca en la transcripción del navegador.
4. Mide la latencia y la precisión de la transcripción en el entorno acústico previsto antes de tratar el prototipo como una ayuda de accesibilidad.

**Criterios de éxito:**

- La sesión RTC se inicia por BLE y los enunciados hablados aparecen como texto en vivo en el navegador
- La latencia y la precisión probadas se registran para el entorno e idioma previstos

**Notas:**

- Live STT usa BLE para la transmisión de audio RTC; la ruta por Wi‑Fi documentada es para los flujos de trabajo de grabar y procesar, no para Live STT.
- El ejemplo público depende de un servicio de transcripción externo y no se ha presentado como un dispositivo médico o de asistencia certificado. Revisa la privacidad, conectividad, latencia y el comportamiento ante fallos para el despliegue real.

**Referencias:**

- [ReSpeaker Clip Live STT application guide](https://wiki.seeedstudio.com/es/respeaker_clip_python_build_app/)
- [ReSpeaker Clip RTC streaming guide](https://wiki.seeedstudio.com/es/respeaker_clip_rtc_streaming/)
- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/es/respeaker_clip/)

### ¿Dónde puedo obtener las dimensiones oficiales de ReSpeaker Clip o un plano mecánico? {#mechanical-drawing-status}

**Se aplica a:** Diseño de carcasas, fijaciones o accesorios vestibles para ReSpeaker Clip

**Última verificación:** 2026-09-01

Actualmente no se ha publicado un plano mecánico con etiqueta de revisión. La tabla de recursos oficial de Getting Started sigue marcando `Mechanical Drawing` como `Coming soon`, y su tabla de parámetros físicos no proporciona dimensiones completas de la carcasa.

**Requisitos previos:**

- La revisión exacta del hardware de producción a la que debe ajustarse el diseño mecánico

1. Comprueba la fila Mechanical Drawing en la tabla de recursos oficial actual.
2. No obtengas dimensiones de producción a partir de fotos, renders de marketing o un prototipo sin etiquetar.
3. Para trabajo de diseño inmediato, mide la unidad física exacta y solicita un plano oficial con etiqueta de revisión antes de congelar utillajes o holguras.

**Criterios de éxito:**

- El diseño mecánico se basa en un plano oficial con etiqueta de revisión o en mediciones verificadas de la revisión exacta de producción

**Notas:**

- Esta es una respuesta sensible al tiempo sobre el estado de publicación y debe volver a comprobarse cuando cambie la tabla de recursos.
- La ausencia de un plano público no implica que no exista ningún archivo mecánico interno.

**Referencias:**

- [ReSpeaker Clip specifications and resources](https://wiki.seeedstudio.com/es/respeaker_clip/)

## Producto y negocio {#product-and-business}

### ¿La app de reSpeaker Clip requiere una suscripción mensual y puedo usar OpenAI o mis propios modelos STT y LLM autoalojados? {#app-subscription-and-custom-providers}

**Se aplica a:** Usuarios de la app de reSpeaker Clip que eligen entre la suscripción reSpeaker AI y su propio proveedor STT/LLM, en la versión actual de la app

**Última verificación:** 2026-10-26

No. La suscripción es opcional. Puedes ejecutar la app completamente sobre servicios STT y LLM que configures tú mismo — incluido un modelo autoalojado expuesto en una Base URL — y esa ruta no consume cuota de reSpeaker AI. La suscripción opcional a reSpeaker AI es para usuarios que prefieren no gestionar credenciales y facturación de proveedores.

En la página AI CONFIG de la app, el servicio STT requiere Provider, Base URL, API key y Language; el servicio LLM requiere una API key, Base URL y Model Name. Ambos proporcionan una acción Test Connection, de modo que un servicio alojado en OpenAI o un modelo que alojes tú mismo se pueden comprobar antes de usarse siempre que expongan una API compatible.

| Plan | China continental | Extranjero | Minutos de IA | Notas |
| --- | --- | --- | --- | --- |
| Bono de activación del dispositivo | ¥0 | \$0 | 300 una sola vez | Una vez por cuenta, dispositivo y cuenta de pago; válido 180 días |
| Lite | ¥19/mes o ¥179/año | \$4.99/mes o \$49.99/año | 300/mes | Nivel de pago más bajo |
| Pro | ¥59/mes o ¥649/año | \$12.99/mes o \$129/año | 1,200/mes | Nivel principal recomendado |
| Max | ¥115/mes o ¥1,249/año | \$23.99/mes o \$249/año | 2,400/mes | Cola de procesamiento de alta prioridad |
| Paquete de recarga | ¥9/100 min; ¥25/300 min | \$1.99/100 min; \$4.99/300 min | 100 o 300 | Solo suscriptores activos; válido hasta que termine el ciclo mensual actual |

Un minuto de IA de la plataforma cubre una transcripción más un resumen básico de esa grabación.

**Requisitos previos:**

- La app de reSpeaker Clip con la página AI CONFIG y un dispositivo grabando para hacer pruebas
- Para la ruta de proveedor personalizado: la Base URL y la API key del proveedor, o un endpoint autoalojado accesible desde el teléfono
- Para la ruta de suscripción: una cuenta de reSpeaker con un plan o el bono de activación del dispositivo

1. Abre AI CONFIG en la app y comprueba las entradas STT Service y LLM Service.
2. Para STT, introduce Provider, Base URL, API key y Language, toca Test Connection y luego Save Configuration.
3. Para el LLM, introduce la API key, Base URL y Model Name, toca Test Connection y luego Save Configuration.
4. Procesa una grabación y confirma que tanto la transcripción como el resumen provienen del proveedor configurado.
5. Para usar en su lugar la suscripción reSpeaker AI, selecciona el servicio de IA de la plataforma en la app; la transcripción y el resumen consumirán entonces los minutos de IA del plan.

**Criterios de éxito:**

- Test Connection se completa correctamente tanto para los servicios STT como LLM
- Una grabación de prueba se transcribe y resume a través del proveedor configurado
- En la ruta de proveedor personalizado, no se consume cuota de reSpeaker AI

**Notas:**

- Los planes, cuotas y precios son a fecha de 2026-10-26. La app muestra el precio actual y cualquier variación regional, y los precios y cuotas pueden cambiar.
- La cuota de la suscripción mensual no se acumula. Un paquete de recarga solo es válido hasta que termine el ciclo mensual actual y tampoco se acumula. Cancelar la renovación automática mantiene el plan utilizable hasta el final del período pagado.
- En la ruta de proveedor personalizado la plataforma no mide el uso; los cargos del proveedor, límites de tasa y disponibilidad son tu responsabilidad.
- Un endpoint autoalojado debe ser accesible desde el teléfono y exponer una API compatible; la acción Test Connection debe completarse correctamente antes de que el servicio pueda usarse.
- Se planea una opción más sencilla de LLM autoimplementado para una versión posterior. Hasta entonces, ya se puede configurar un LLM autoalojado mediante los campos personalizados Base URL y Model Name.

**Referencias:**

- [reSpeaker Clip Getting Started (AI CONFIG, STT and LLM provider settings)](https://wiki.seeedstudio.com/es/respeaker_clip/)
- [reSpeaker Clip Live STT application guide](https://wiki.seeedstudio.com/es/respeaker_clip_python_build_app/)

<!-- RESPEAKER_FAQ_AUTO_END -->

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

</div>
