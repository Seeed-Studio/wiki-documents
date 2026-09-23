---
description: Configura la grabación activada por eventos en reCamera Pro usando detección por IA, temporizadores programados, GPIO, puerto serie, HTTPS, bucle o disparadores por eventos de sonido.
title: Configurar grabación por eventos
keywords:
  - reCamera
  - reCamera Pro
  - recording
  - event trigger
  - GPIO
  - AI trigger
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_record_settings
sku: 10003420
sidebar_position: 6
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_record_settings/
---

# Configurar grabación por eventos

reCamera Pro admite grabación de vídeo activada por reglas. En la interfaz web, haz clic en **Recording Settings** en el menú de la izquierda y luego en **Recording Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

La página tiene cuatro módulos:

- **Recording Configuration** — reglas de activación, formato de vídeo, programación de grabación
- **Storage Management** — espacio de almacenamiento del dispositivo
- **File Preview** — archivos de vídeo grabados
- **Schedule Management** — periodos de tiempo efectivos para las reglas de grabación

## Formato de grabación

| Parámetro | Descripción |
|---|---|
| Recording Format | Datos de vídeo MP4, imagen JPG o imagen original RAW |

Cuando se selecciona MP4, cada grabación tiene una duración fija de 1 minuto.

## Métodos de activación

En la página de configuración de grabación, cada método de activación tiene botones de **Configure** y **Apply**. Haz clic en **Configure** para establecer los parámetros y luego en **Apply** para habilitarlo. El estado en la parte superior muestra el método de activación actualmente activo, por ejemplo, "Current: Sound Event Trigger".

### Activación por inferencia de IA

Activa automáticamente la grabación cuando los resultados de reconocimiento del modelo de IA coinciden con tus condiciones.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

| Elemento de configuración | Descripción |
|---|---|
| Inference Task | Selecciona la tarea de inferencia de IA para activar la grabación |
| Confidence Range | Rango de umbral de confianza para los resultados de reconocimiento de IA |
| Category Filter | Categorías objetivo para activar la grabación (por ejemplo, Person, Vehicle, Hardhat) |
| Trigger Area | Región poligonal de la pantalla para la activación; por defecto es todo el fotograma |

{/* TODO(verify): confirm whether multiple trigger methods can be active simultaneously or are mutually exclusive */}

### Activación programada

Activa la grabación a intervalos de tiempo fijos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| Elemento de configuración | Descripción |
|---|---|
| Trigger Interval | Intervalo de tiempo en segundos |

:::note
**Scheduled Trigger** inicia la grabación a un intervalo fijo. **Schedule Management** (más abajo) controla *cuándo* se permite que cualquier disparador se active. Son funciones independientes.
:::

### Activación por GPIO

Activa la grabación mediante señales de hardware externas.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| Elemento de configuración | Descripción |
|---|---|
| GPIO Pin Name | Selecciona el pin GPIO |
| Pin State | Estado predeterminado del pin, por ejemplo, flotante |
| Trigger Signal | Nivel de activación, por ejemplo, nivel alto |
| Debounce Duration | Tiempo de rebote en milisegundos |

Adecuado para la integración con sensores externos, botones, contactos magnéticos de puerta, sensores PIR o relés.

### Activación por puerto serie

Activa la grabación mediante comandos serie.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| Elemento de configuración | Descripción |
|---|---|
| Serial Port Name | Puerto serie a escuchar, por ejemplo, ttyS4 |
| Trigger Command | Comando serie para activar la grabación |

Adecuado para la integración con controladores externos, MCUs o equipos industriales.

### Activación por HTTPS

Activa la grabación mediante solicitudes de red. La página muestra la dirección de activación HTTPS que los sistemas externos pueden invocar.

Adecuado para la integración con plataformas de terceros, sistemas de alarma o scripts de automatización.

{/* TODO(verify): document the exact HTTPS trigger URL format, authentication method, and request body schema */}

### Activación en bucle

Grabación continua o cíclica para monitorización todo el día o adquisición continua de datos.

### Activación por evento de sonido

Activa la grabación en función de eventos de audio reconocidos por el modelo de sonido.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

| Elemento de configuración | Descripción |
|---|---|
| Sound Category Filter | Categorías de sonido para activar la grabación |
| Continuous Activity Window | Duración de la actividad continua requerida (ms) |
| Confidence Range | Umbral de confianza para el reconocimiento de sonido |

Para entrenar modelos de sonido personalizados, consulta [Train a Sound Model](/es/recamera_pro_acoustic_lab_usage/).

## Gestión de horarios

Configura los periodos de tiempo efectivos para las reglas de grabación usando un horario semanal (rejilla día × hora). Haz clic o arrastra las celdas para seleccionar los periodos.

| Atajo | Descripción |
|---|---|
| Weekdays (9 AM – 6 PM) | Horario laboral diurno |
| Night (6 PM – 6 AM) | Grabación nocturna |
| All Day (24 Hours) | Grabación todo el día |
| Clear | Borrar los periodos seleccionados |

## Páginas relacionadas

- [Buscar grabaciones y almacenamiento](/es/recamera_pro_storage/)
- [Train a Sound Model](/es/recamera_pro_acoustic_lab_usage/)
- [Activar captura por sonido](/es/recamera_pro_sound_trigger/)
- [Activar captura desde dispositivos externos](/es/recamera_pro_uart_usage/)

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
