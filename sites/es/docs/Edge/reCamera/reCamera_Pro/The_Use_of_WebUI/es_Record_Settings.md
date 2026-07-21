---
description: recamera_pro_record_settings
title: Configuración de grabación
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_record_settings
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/es/recamera_pro_record_settings/
---

reCamera Pro tiene grabación de video integrada activada por reglas. Los usuarios pueden personalizar reglas para establecer el tiempo de grabación de video y de captura.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

## Configuración de grabación

reCamera Pro proporciona una página de configuración de grabación donde los usuarios pueden configurar reglas de grabación de video, métodos de activación, formatos de grabación y horarios de grabación en la Web UI, así como gestionar el almacenamiento y previsualizar archivos. Esta función es adecuada para escenarios como vigilancia de seguridad, registro de evidencias, registro de resultados de detección por IA y grabación programada.

Después de entrar en la Web UI, haz clic en **Recording Settings** en el menú lateral izquierdo para acceder a la página de configuración de grabación.

### Descripción general de las funciones de la página

La página de configuración de grabación incluye principalmente los siguientes módulos funcionales:

- **Configuración de grabación**: Configura las reglas de activación de grabación de video, los formatos de video y los horarios de grabación.
- **Gestión de almacenamiento**: Visualiza y gestiona el espacio de almacenamiento del dispositivo.
- **Previsualización de archivos**: Visualiza los archivos de video grabados.
- **Gestión de horarios**: Establece los periodos de tiempo efectivos para las reglas de grabación.

En la página de configuración de grabación, los usuarios pueden seleccionar diferentes métodos de activación y aplicarlos a las tareas de grabación.

### Formato de grabación

La parte superior de la página permite seleccionar el formato de archivo de grabación, por ejemplo:

| Parámetro   | Descripción                                                              |
| ----------- | ------------------------------------------------------------------------ |
| Formato de grabación | Establece el formato para guardar los archivos de video, como datos de video MP4, datos de imagen JPG y datos de imagen original RAW. |
Si se selecciona el formato MP4 para la grabación, cada grabación tendrá una duración fija de 1 minuto.

### Métodos de activación

reCamera Pro admite múltiples métodos de activación de grabación de video. Los usuarios pueden elegir las reglas de activación adecuadas según sus escenarios de aplicación reales.

#### Activación por inferencia de IA

La **Activación por inferencia de IA** se utiliza para activar automáticamente la grabación en función de los resultados de reconocimiento del modelo de IA. Los usuarios pueden configurar categorías de detección, rangos de puntuación de confianza y áreas de activación. Cuando aparece en la vista de la cámara un objetivo que cumple las condiciones, el sistema iniciará automáticamente la grabación.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

Los elementos de configuración admitidos por la Activación por inferencia de IA incluyen:

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Tarea de inferencia     | Selecciona la tarea de inferencia de IA para activar la grabación |
| Rango de confianza   | Establece el rango de umbral de confianza para los resultados de reconocimiento de IA |
| Filtro de categorías    | Selecciona las categorías de objetivos para activar la grabación |
| Área de activación       | Define el área de la pantalla para la detección de activación |

El filtrado por categorías admite la selección según las categorías de salida del modelo, como Persona, Vehículo, Casco, Mascarilla, Chaleco de seguridad, Maquinaria, etc. Los usuarios pueden seleccionar solo las categorías que les interesan para reducir activaciones de eventos irrelevantes.

El área de activación admite dibujar regiones poligonales en el fotograma de video. Cuando no se dibuja ninguna región, de forma predeterminada se activa en toda la pantalla. Después de dibujar una región, el sistema solo activará la grabación dentro del área especificada. Esta función es adecuada para escenarios de monitoreo clave como entradas/salidas, áreas peligrosas y zonas de equipos.

#### Activación programada

La **Activación programada** se utiliza para activar la grabación a intervalos de tiempo fijos. Los usuarios pueden configurar el intervalo de activación y el sistema ejecutará automáticamente las tareas de grabación en los ciclos de tiempo establecidos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Intervalo de activación   | Establece el intervalo de tiempo para las activaciones programadas, en segundos |

Este método es adecuado para escenarios de grabación periódica, como capturar videos del sitio a intervalos fijos, registrar el estado de funcionamiento de equipos o para inspección y archivo.

#### Activación por GPIO

La **Activación por GPIO** se utiliza para activar la grabación mediante señales de hardware externas. Los usuarios pueden seleccionar el pin GPIO, el estado del pin, la señal de activación y la duración del anti-rebote.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Nombre del pin GPIO      | Selecciona el pin GPIO para la activación        |
| Estado del pin          | Establece el estado predeterminado del pin, por ejemplo, flotante |
| Señal de activación     | Establece el nivel de activación, por ejemplo, nivel alto   |
| Duración del anti-rebote  | Establece el tiempo de anti-rebote para la señal de activación, en milisegundos |

La Activación por GPIO es adecuada para la integración con sensores externos, botones, contactos magnéticos de puerta, sensores PIR, relés y otros dispositivos. Cuando un dispositivo externo emite una señal de nivel especificado, reCamera Pro puede iniciar automáticamente la grabación.

#### Activación por puerto serie

La **Activación por puerto serie** se utiliza para activar la grabación mediante comandos serie. Los usuarios pueden seleccionar el nombre del puerto serie y configurar el comando de activación. Cuando el dispositivo recibe un comando coincidente a través del puerto serie especificado, puede activar la tarea de grabación.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Nombre del puerto serie   | Selecciona el puerto serie a escuchar, por ejemplo, ttyS4 |
| Comando de activación    | Establece el comando serie para activar la grabación |

Este método es adecuado para la integración con controladores externos, MCUs, equipos industriales o sistemas host personalizados.

#### Activación por HTTPS

La **Activación por HTTPS** proporciona un método de activación de grabación basado en solicitudes de red. La página mostrará la dirección de activación HTTPS correspondiente, a la que los sistemas externos pueden acceder para activar la grabación.

Este método es adecuado para la integración con plataformas de terceros, sistemas de negocio, sistemas de alarma o scripts de automatización. Por ejemplo, cuando un sistema externo detecta un evento, puede notificar a reCamera Pro para iniciar la grabación mediante una solicitud HTTPS.

#### Activación en bucle

La **Activación en bucle** se utiliza para la ejecución continua o cíclica de tareas de grabación. Este método es adecuado para escenarios que requieren grabación continua a largo plazo, como monitoreo todo el día, vigilancia en sitio y adquisición continua de datos.

#### Activación por evento de sonido

La **Activación por evento de sonido** se utiliza para activar la grabación en función de eventos de audio. Los usuarios pueden entrar en el Sound Lab para visualizar, entrenar o cambiar modelos de sonido y seleccionar las categorías de sonido que deben activar la grabación.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

Los elementos de configuración admitidos por la Activación por evento de sonido incluyen:

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Filtro de categorías de sonido | Selecciona las categorías de sonido para activar la grabación |
| Ventana de actividad continua | Establece la duración de actividad continua requerida para la activación, en milisegundos |
| Rango de confianza   | Establece el rango de umbral de confianza para los resultados de reconocimiento de sonido |

Las categorías de sonido que se pueden seleccionar en la página incluyen Ruido de fondo, Desconocido, Stop, Yes, No, Zero, One, Two, etc. Las categorías específicas dependen del modelo de reconocimiento de sonido cargado actualmente.

Esta función es adecuada para escenarios como detección de sonidos anormales, reconocimiento de sonidos de estado de equipos y activación por comandos de voz.

### Gestión de horarios

La página de configuración de grabación proporciona una función de gestión de horarios, que permite a los usuarios establecer el tiempo efectivo de las reglas de grabación mediante una tabla de horarios.

El horario se muestra por día de la semana y hora. Los usuarios pueden hacer clic o arrastrar celdas de tiempo para seleccionar periodos de grabación, y se pueden establecer múltiples periodos de tiempo.

La página proporciona botones de acceso rápido:

| Opción rápida | Descripción                               |
| --------------- | ----------------------------------------- |
| Días laborables (9 AM - 6 PM) | Selecciona rápidamente el horario laboral diurno |
| Noche (6 PM - 6 AM) | Selecciona rápidamente las horas de grabación nocturna |
| Todo el día (24 horas) | Configura rápidamente la grabación durante todo el día |
| Borrar           | Borra los periodos de tiempo seleccionados actualmente |

Mediante la gestión de horarios, los usuarios pueden hacer que las reglas de grabación sean efectivas solo durante periodos de tiempo especificados, por ejemplo, habilitar la grabación solo por la noche o registrar eventos solo durante el horario laboral.

### Configuración de aplicación

En el lado derecho de cada método de activación, hay botones de **Configure** y **Apply**.

- Haz clic en **Configure**: Entra en la configuración detallada de parámetros para este método de activación.
- Haz clic en **Apply**: Habilita el método de activación actual y lo aplica a la tarea de grabación.
- El estado en la parte superior mostrará el método de activación utilizado actualmente, por ejemplo, "Current: Sound Event Trigger".

Después de la configuración, el sistema ejecutará automáticamente las tareas de grabación de acuerdo con el método de activación actual, el formato de grabación y el horario.

### Casos de uso típicos

La función de configuración de grabación es adecuada para los siguientes escenarios:

- Grabación automática cuando se detectan personas, vehículos u objetivos especificados.
- Grabación programada dentro de periodos de tiempo especificados.
- Activación de la grabación mediante sensores GPIO externos.
- Interconexión con equipos industriales mediante comandos serie.
- Integración con sistemas de alarma de terceros mediante interfaces HTTPS.
- Grabación automática al detectar eventos de sonido especificados.
- Configuración de horarios de grabación todo el día o solo nocturnos.

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
