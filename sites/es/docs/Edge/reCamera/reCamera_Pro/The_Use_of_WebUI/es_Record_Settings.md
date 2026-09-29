---
description: recamera_pro_record_settings
title: Configuración de grabación
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_record_settings_legacy
draft: true
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/es/recamera_pro_record_settings_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Build_Your_App/configure_event_recording.md (https://wiki.seeedstudio.com/es/recamera_pro_record_settings/), which now serves the original slug /recamera_pro_record_settings. This file is kept for history as a draft (slug /recamera_pro_record_settings_legacy) and is excluded from production builds. Do not link here. -->

## Índice de migración de contenido (Página heredada)

| Sección original | Nuevo destino |
| --- | --- |
| Recording Configuration (AI Inference Trigger, Scheduled, Loop) | [Configure Event Recording](https://wiki.seeedstudio.com/es/recamera_pro_record_settings/) (este slug) |
| Recording Configuration (Sound Event Trigger) | [Sound-Triggered Capture](https://wiki.seeedstudio.com/es/recamera_pro_sound_trigger/) |
| Recording Configuration (GPIO / Serial / HTTPS Trigger) | [External Trigger over UART](https://wiki.seeedstudio.com/es/recamera_pro_uart_usage/) |
| Storage Management, File Preview | [Find Recordings and Storage](https://wiki.seeedstudio.com/es/recamera_pro_storage/) |

reCamera Pro tiene grabación de vídeo integrada activada por reglas. Los usuarios pueden personalizar reglas para establecer el momento de la grabación de vídeo y de la captura.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

## Configuración de grabación

reCamera Pro proporciona una página de configuración de grabación donde los usuarios pueden configurar reglas de grabación de vídeo, métodos de activación, formatos de grabación y horarios de grabación en la Web UI, así como gestionar el almacenamiento y previsualizar archivos. Esta función es adecuada para escenarios como vigilancia de seguridad, registro de evidencias, registro de resultados de detección por IA y grabación programada.

Después de entrar en la Web UI, haz clic en **Recording Settings** en el menú lateral izquierdo para acceder a la página de configuración de grabación.

### Descripción general de las funciones de la página

La página de configuración de grabación incluye principalmente los siguientes módulos funcionales:

- **Recording Configuration**: Configura las reglas de activación de la grabación de vídeo, los formatos de vídeo y los horarios de grabación.
- **Storage Management**: Visualiza y gestiona el espacio de almacenamiento del dispositivo.
- **File Preview**: Visualiza los archivos de vídeo grabados.
- **Schedule Management**: Establece los periodos de tiempo efectivos para las reglas de grabación.

En la página de configuración de grabación, los usuarios pueden seleccionar diferentes métodos de activación y aplicarlos a las tareas de grabación.

### Formato de grabación

La parte superior de la página permite seleccionar el formato de archivo de grabación, por ejemplo:

| Parámetro   | Descripción                                                              |
| ----------- | ------------------------------------------------------------------------ |
| Recording Format | Establece el formato para guardar los archivos de vídeo, como datos de vídeo MP4, datos de imagen JPG y datos de imagen original RAW. |
Si se selecciona el formato MP4 para la grabación, cada grabación tendrá una duración fija de 1 minuto.

### Métodos de activación

reCamera Pro admite múltiples métodos de activación de grabación de vídeo. Los usuarios pueden elegir las reglas de activación adecuadas según sus escenarios de aplicación reales.

#### Activación por inferencia de IA

La **Activación por inferencia de IA** se utiliza para activar automáticamente la grabación en función de los resultados del reconocimiento del modelo de IA. Los usuarios pueden configurar categorías de detección, rangos de puntuación de confianza y áreas de activación. Cuando aparece en la vista de la cámara un objetivo que cumple las condiciones, el sistema iniciará automáticamente la grabación.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

Los elementos de configuración admitidos por la Activación por inferencia de IA incluyen:

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Inference Task     | Selecciona la tarea de inferencia de IA para activar la grabación |
| Confidence Range   | Establece el rango de umbral de confianza para los resultados de reconocimiento de IA |
| Category Filter    | Selecciona las categorías de objetivo para activar la grabación |
| Trigger Area       | Define el área de la pantalla para la detección de activación |

El filtrado por categoría admite la selección basada en las categorías de salida del modelo, como Person, Vehicle, Hardhat, Mask, Safety Vest, Machinery, etc. Los usuarios pueden seleccionar solo las categorías que les interesan para reducir activaciones de eventos irrelevantes.

El área de activación admite el dibujo de regiones poligonales en el fotograma de vídeo. Cuando no se dibuja ninguna región, de forma predeterminada se activa en toda la pantalla. Después de dibujar una región, el sistema solo activará la grabación dentro del área especificada. Esta función es adecuada para escenarios de monitorización clave como entradas/salidas, zonas peligrosas y áreas de equipos.

#### Activación programada

La **Activación programada** se utiliza para activar la grabación a intervalos de tiempo fijos. Los usuarios pueden configurar el intervalo de activación y el sistema ejecutará automáticamente las tareas de grabación en los ciclos de tiempo establecidos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Trigger Interval   | Establece el intervalo de tiempo para las activaciones programadas, en segundos |

Este método es adecuado para escenarios de grabación periódica, como capturar vídeos del sitio a intervalos fijos, registrar el estado de funcionamiento de equipos o para inspección y archivado.

#### Activación por GPIO

La **Activación por GPIO** se utiliza para activar la grabación mediante señales de hardware externas. Los usuarios pueden seleccionar el pin GPIO, el estado del pin, la señal de activación y la duración del antirrebote.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| GPIO Pin Name      | Selecciona el pin GPIO para la activación        |
| Pin State          | Establece el estado predeterminado del pin, por ejemplo, flotante |
| Trigger Signal     | Establece el nivel de activación, por ejemplo, nivel alto   |
| Debounce Duration  | Establece el tiempo de antirrebote para la señal de activación, en milisegundos |

La Activación por GPIO es adecuada para la integración con sensores externos, botones, contactos magnéticos de puerta, sensores PIR, relés y otros dispositivos. Cuando un dispositivo externo emite una señal de nivel especificado, reCamera Pro puede iniciar automáticamente la grabación.

#### Activación por puerto serie

La **Activación por puerto serie** se utiliza para activar la grabación mediante comandos serie. Los usuarios pueden seleccionar el nombre del puerto serie y configurar el comando de activación. Cuando el dispositivo recibe un comando coincidente a través del puerto serie especificado, puede activar la tarea de grabación.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Serial Port Name   | Selecciona el puerto serie a escuchar, por ejemplo, ttyS4 |
| Trigger Command    | Establece el comando serie para activar la grabación |

Este método es adecuado para la integración con controladores externos, MCUs, equipos industriales o sistemas host personalizados.

#### Activación por HTTPS

La **Activación por HTTPS** proporciona un método de activación de grabación basado en solicitudes de red. La página mostrará la dirección de activación HTTPS correspondiente, a la que los sistemas externos pueden acceder para activar la grabación.

Este método es adecuado para la integración con plataformas de terceros, sistemas de negocio, sistemas de alarma o scripts de automatización. Por ejemplo, cuando un sistema externo detecta un evento, puede notificar a reCamera Pro para iniciar la grabación mediante una solicitud HTTPS.

#### Activación en bucle

La **Activación en bucle** se utiliza para la ejecución continua o cíclica de tareas de grabación. Este método es adecuado para escenarios que requieren grabación continua a largo plazo, como monitorización todo el día, vigilancia en sitio y adquisición continua de datos.

#### Activación por evento de sonido

La **Activación por evento de sonido** se utiliza para activar la grabación en función de eventos de audio. Los usuarios pueden entrar en el Sound Lab para visualizar, entrenar o cambiar modelos de sonido y seleccionar las categorías de sonido que deberían activar la grabación.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

Los elementos de configuración admitidos por la Activación por evento de sonido incluyen:

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Sound Category Filter | Selecciona las categorías de sonido para activar la grabación |
| Continuous Activity Window | Establece la duración de la actividad continua requerida para la activación, en milisegundos |
| Confidence Range   | Establece el rango de umbral de confianza para los resultados de reconocimiento de sonido |

Las categorías de sonido que se pueden seleccionar en la página incluyen Background Noise, Unknown, Stop, Yes, No, Zero, One, Two, etc. Las categorías específicas dependen del modelo de reconocimiento de sonido cargado actualmente.

Esta función es adecuada para escenarios como detección de sonidos anómalos, reconocimiento de sonidos de estado de equipos y activación mediante comandos de voz.

### Gestión de horarios

La página de configuración de grabación proporciona una función de gestión de horarios, que permite a los usuarios establecer el tiempo efectivo de las reglas de grabación mediante un calendario horario.

El horario se muestra por día de la semana y hora. Los usuarios pueden hacer clic o arrastrar celdas de tiempo para seleccionar periodos de grabación, y se pueden establecer múltiples periodos de tiempo.

La página proporciona botones de acceso rápido:

| Opción rápida | Descripción                               |
| --------------- | ----------------------------------------- |
| Weekdays (9 AM - 6 PM) | Selecciona rápidamente el horario laboral diurno |
| Night (6 PM - 6 AM) | Selecciona rápidamente las horas de grabación nocturna |
| All Day (24 Hours) | Configura rápidamente la grabación durante todo el día |
| Clear           | Borra los periodos de tiempo seleccionados actualmente |

Mediante la gestión de horarios, los usuarios pueden hacer que las reglas de grabación sean efectivas solo durante periodos de tiempo especificados, por ejemplo, habilitar la grabación solo por la noche o registrar eventos solo durante el horario laboral.

### Configuración de la aplicación

En el lado derecho de cada método de activación, hay botones de **Configure** y **Apply**.

- Haz clic en **Configure**: introduce la configuración detallada de parámetros para este método de activación.
- Haz clic en **Apply**: habilita el método de activación actual y lo aplica a la tarea de grabación.
- El estado en la parte superior mostrará el método de activación que se está utilizando, por ejemplo, "Current: Sound Event Trigger".

Después de la configuración, el sistema ejecutará automáticamente las tareas de grabación según el método de activación actual, el formato de grabación y la programación.

### Casos de uso típicos

La función de configuración de grabación es adecuada para los siguientes escenarios:

- Grabación automática cuando se detectan personas, vehículos o objetivos especificados.
- Grabación programada dentro de períodos de tiempo especificados.
- Activación de la grabación mediante sensores GPIO externos.
- Interconexión con equipos industriales mediante comandos serie.
- Integración con sistemas de alarma de terceros mediante interfaces HTTPS.
- Grabación automática al detectar eventos de sonido especificados.
- Configuración de horarios de grabación durante todo el día o solo por la noche.

A través de la página de configuración de grabación, los usuarios pueden configurar de forma flexible la estrategia de grabación de reCamera Pro, logrando un ciclo cerrado completo desde la vista previa en tiempo real hasta la grabación activada por eventos.

## Gestión de almacenamiento

En esta página, puedes ver el uso actual del disco del dispositivo y la ubicación donde se guardan los archivos, lo que facilita comprobar rápidamente el estado del dispositivo y la ubicación de almacenamiento del material.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_65N6rhHetJ.png" />

En la configuración de almacenamiento, también puedes establecer el tamaño de almacenamiento disponible y configurar cuotas. También puedes configurar si se sobrescriben los archivos antiguos para garantizar que los archivos grabados más recientes se guarden siempre.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WZBl9MEr7Z.png" />

## Vista previa de archivos

Aquí puedes ver los archivos que se han grabado. Cada archivo se guarda en un directorio diferente según la fecha.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_0qrpATtHyA.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_hkMMlkzm7i.png" />

Al abrir el archivo correspondiente, se permite la vista previa en línea y las operaciones sobre el material.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_Dr3Rfk11yn.jpg" />

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
