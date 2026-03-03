---
description: Este artículo proporciona una guía de configuración detallada para configurar el dispositivo Watcher en tres flujos de implementación de procesamiento diferentes, incluyendo Flujo de Procesamiento Eficiente en la Nube, Flujo de Procesamiento Inteligente Híbrido y Flujo de Procesamiento Seguro Local. Ofrece una visión general del marco de servicios de software de Watcher, ilustrando las interacciones entre el usuario, la aplicación SenseCraft Mate y el dispositivo Watcher.
title: Introducción al Servicio de Software de Watcher
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /es/watcher_software_service_framework
sidebar_position: 2
last_update:
  date: 10/09/2024
  author: Evelyn Chen
---


## Visión General del Marco

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.png" style={{width:800, height:'auto'}}/></div>

Este es el marco de servicios de software para el Watcher, que ilustra las interacciones y el flujo de tareas entre el usuario, la aplicación SenseCraft Mate y el dispositivo Watcher. Ofrecemos múltiples opciones de configuración que permiten a los usuarios personalizar su implementación de servicios según sus requisitos de seguridad de datos y calidad de servicio.

El marco integra servicios de IA en la nube e implementaciones de IA locales, combinados con servicios de datos, servicios de comunicación de dispositivos, orquestación de tareas, servicios de análisis de imágenes, agentes de canales de alerta y servicios de entrenamiento de modelos.
puedes elegir implementar tu LLM en la nube o en infraestructura local. Los datos originales y los resultados también pueden elegirse para almacenarse o transmitirse en la nube o en dispositivos locales.
La nube comparada con soluciones de almacenamiento local, así como la necesidad de almacenamiento de mayor rendimiento dentro de máquinas virtuales habilitadas con GPU.

Estos componentes forman tres opciones de implementación para que los usuarios elijan:

1. **Flujo de Procesamiento Eficiente en la Nube**
2. **Flujo de Procesamiento Inteligente Híbrido**
3. **Flujo de Procesamiento Seguro Local**

Las siguientes secciones proporcionan una explicación detallada del marco y te guían a través de la configuración de cada una de las tres opciones de implementación.

**Servicio de Datos**

Watcher ofrece servicios de datos flexibles, permitiéndote conectarte a la plataforma de datos SenseCraft para cargar datos de alerta, estado del dispositivo e imágenes de vista previa. La plataforma SenseCraft proporciona una dirección de broker MQTT y token a través de una solicitud HTTP. Alternativamente, puedes elegir cargar datos a plataformas de terceros a través de la configuración Bluetooth en la aplicación, omitiendo completamente la plataforma SenseCraft.

**Servicio de Comunicación de Dispositivos**

Para la comunicación de dispositivos, Watcher soporta flujos de tareas remotas y actualizaciones OTA de firmware a través de MQTT. Puedes usar la aplicación SenseCraft Mate para crear tareas y enviarlas al dispositivo a través de la plataforma SenseCraft. La aplicación también verifica la versión más reciente del firmware, y cuando esté disponible, te notificará. Después de confirmar, la plataforma enviará la actualización al dispositivo.

**Servicio de Orquestación de Tareas**

El servicio de orquestación de tareas de Watcher permite interacciones de voz directas, donde tu diálogo se envía al servicio vía HTTP, se procesa, y el flujo de tareas se devuelve al dispositivo. La aplicación SenseCraft Mate también puede recuperar flujos de tareas y enviarlos remotamente al dispositivo.

**Servicio de Análisis de Visión**

En términos de análisis de visión, Watcher ofrece un servicio unificado de análisis de imágenes. Puedes elegir entre SenseCraft, OpenAI o un agente de IA de terceros a través de la configuración Bluetooth e introducir las claves API relevantes. Cuando el dispositivo envía una imagen, utilizará el servicio seleccionado, ya sea el llava local o un servicio de terceros como OpenAI.

**Servicio de Notificación de Alertas**

Para las notificaciones de alerta, Watcher permite múltiples opciones, incluyendo notificaciones push de la aplicación desde la nube SenseCraft, conexiones UART a otro hardware, y conexiones HTTP a servidores locales o plataformas de terceros. Las alertas también pueden enviarse a plataformas como Discord usando formatos de datos estándar. Además, Watcher puede reenviar estas notificaciones a otras plataformas como Home Assistant, IFTTT o Webhooks, usando formatos compatibles. Para más detalles, consulta la Aplicación de Proxy HTTP.

Tienes la flexibilidad de elegir entre múltiples opciones de implementación y configurar fácilmente tu asistente Watcher personalizado. Ya sea que tu prioridad sea la seguridad de datos o la eficiencia de procesamiento, ofrecemos tres soluciones adaptables: Flujo de Procesamiento Eficiente en la Nube, Flujo de Procesamiento Inteligente Híbrido y Flujo de Procesamiento Seguro Local. ¡Personaliza tu asistente Watcher para proporcionarte la mejor experiencia de servicio inteligente!

## Flujo de Procesamiento Eficiente en la Nube

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/20.png" style={{width:500, height:'auto'}}/></div>

Este diagrama proporciona una visión general del Flujo de Procesamiento Eficiente en la Nube, ilustrando las interacciones entre el usuario, los servicios en la nube y las aplicaciones locales. En esta configuración, todos los servicios se ejecutan a través de la nube SenseCraft para ofrecer un flujo de trabajo optimizado y eficiente. Después de comenzar y completar la vinculación del dispositivo, puedes seleccionar los servicios en la nube o locales apropiados según tus necesidades.

Las siguientes secciones explican cada parte del Flujo de Procesamiento Eficiente en la Nube y proporcionan orientación sobre cómo configurarlo:

**Paso 1**. Configuración Inicial:
Después de completar la [configuración](https://www.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade) y seleccionar SenseCraft AI Services, puedes comenzar a usar los servicios en la nube del Watcher.

**Paso 2**. Interacción del Usuario:
Hay dos formas de activar los servicios SenseCraft y asignar tareas al Watcher, detalladas a continuación (consulta la sección XXX):

* Opción 1: A través de la App: Los usuarios pueden habilitar los servicios SenseCraft AI a través de la aplicación móvil. Luego enviar mensajes de tareas en el chat.
* Opción 2: A través de Comandos de Voz: Los usuarios pueden asignar tareas a través del chat de voz directamente con el Watcher.

**Paso 3**. Orquestación de Tareas:
Una vez que SenseCraft está activado, funciona como una Plataforma como Servicio (PaaS) para proporcionar servicios de orquestación de tareas. Esto incluye tres elementos centrales:

* STT (Speech-to-Text): Convierte comandos hablados en texto.
* TTS (Text-to-Speech): Convierte respuestas basadas en texto en salida hablada.
* Servicios AI: Responsables de entender, procesar y orquestar tareas. Basándose en el contenido de la tarea, el servicio selecciona los modelos más adecuados del repositorio de modelos SenseCraft, incluyendo modelos de lenguaje grandes (LLMs) y modelos TinyML.

Además de seleccionar manualmente modelos TinyML locales en la configuración manual, las tareas también pueden procesarse automáticamente basándose en tu prompt de entrada. Después de que el modelo de orquestación de tareas interprete tu prompt, puede llamar al modelo TinyML apropiado de la biblioteca SenseCraft. Por ejemplo, si un usuario solicita, "Notifícame cuando veas un pájaro," el servicio de orquestación de tareas seleccionará un modelo de reconocimiento de pájaros de la biblioteca TinyML para optimizar la velocidad de respuesta.

En la *configuración manual*, puedes elegir entre el **Vision LLM** (para mayor precisión) o el **modelo TinyML** (para procesamiento más rápido).

**Paso 4**. Despacho de Tareas después de la Orquestación
Una vez que la orquestación de tareas está completada, el método para despachar tareas dependerá del estado de la función SenseCraft Remote Control:

* Si el control remoto está habilitado: El sistema utilizará el servicio de datos PaaS y el servicio de comunicación del dispositivo para enviar resultados de tareas al Watcher a través del broker MQTT.
* Si el control remoto está deshabilitado: Las tareas se despacharán al Watcher a través de Bluetooth. Si el dispositivo está fuera del rango de Bluetooth, necesitarás habilitar el control remoto para la transmisión de tareas.

**Paso 5**. Procesamiento de Tareas de Análisis de Visión

Después de recibir la tarea de SenseCraft, el dispositivo Watcher invocará el Servicio de Análisis Visual. Analizará la tarea usando el modelo AI elegido por el usuario o determinado por el servicio de orquestación de tareas.

**Paso 6**. Notificaciones del Sistema
El Watcher puede notificar al usuario o a un sistema local usando varios métodos:

* Notificaciones push de la app
* Salida por puerto serie/UART
* Notificaciones push HTTP

Watcher también puede enviar datos a servidores locales, aplicaciones de terceros, o servicios de alerta como Discord, Home Assistant, o IFTTT.
Para más detalles, consulta la sección Aplicación HTTP Proxy.

## Flujo de Procesamiento Inteligente Híbrido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/3.png" style={{width:800, height:'auto'}}/></div>

Este diagrama ilustra el Flujo de Procesamiento Inteligente Híbrido, que involucra interacciones del usuario, algunos servicios en la nube y aplicaciones locales. El enfoque híbrido equilibra la seguridad de datos, la experiencia del usuario y la eficiencia combinando la orquestación de tareas basada en la nube con modelos visuales locales.

**Paso 1**. Configuración Inicial
Después de [comenzar y vincular el dispositivo](https://wiki.seeedstudio.com/es/getting_started_with_watcher/#device-binding-and-ota-upgrade), los usuarios pueden seleccionar los servicios locales apropiados según sus necesidades, habilitar el servicio privado de Watcher e ingresar la URL del servidor Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**Paso 2**. Interacción del Usuario:
Los usuarios pueden enviar tareas a través de la aplicación SenseCraft, lo que iniciará el servicio de orquestación de tareas dentro de la plataforma.

**Paso 3**. Orquestación de Tareas:
Una vez que se recibe una tarea, la plataforma SenseCraft, funcionando como un PaaS (Plataforma como Servicio), orquestará la tarea utilizando tres servicios principales:

* STT (servicio de Voz a Texto)
* TTS (servicio de Texto a Voz)
* Servicios de IA para comprensión, procesamiento y orquestación de tareas.

El servicio de orquestación de tareas interpreta la tarea y selecciona el modelo apropiado de la biblioteca de modelos SenseCraft o LLM (Modelo de Lenguaje Grande), dependiendo de los requisitos de la tarea.

Además de seleccionar manualmente modelos TinyML locales en la configuración manual, las tareas también pueden procesarse automáticamente basándose en su prompt de entrada. Después de que el modelo de orquestación de tareas interprete su prompt, puede llamar al modelo TinyML apropiado de la biblioteca SenseCraft. Por ejemplo, si un usuario solicita, "Notifícame cuando veas un pájaro," el servicio de orquestación de tareas seleccionará un modelo de reconocimiento de pájaros de la biblioteca TinyML para optimizar la velocidad de respuesta.

En la *configuración manual*, puede elegir entre el **Vision LLM** (para mayor precisión) o el **modelo TinyML** (para procesamiento más rápido).

**Paso 4**. Despacho de Tareas después de la Orquestación
Después de la orquestación de tareas, el sistema elegirá el método de despacho dependiendo del estado del Control Remoto SenseCraft:

* Si el control remoto está habilitado: El sistema utilizará el servicio de datos PaaS y el servicio de comunicación de dispositivos para enviar resultados de tareas a Watcher vía broker MQTT.
* Si el control remoto está deshabilitado: Las tareas serán despachadas a Watcher vía Bluetooth. Si el dispositivo está fuera del rango de Bluetooth, el control remoto debe habilitarse para continuar la operación.

**Paso 5**. Procesamiento de Tareas de Análisis Visual
Una vez que el Watcher recibe la tarea, invocará el servicio de análisis visual local desplegado en un servidor local. La tarea será analizada utilizando el modelo de IA seleccionado por el usuario u orquestado por el servicio de tareas SenseCraft.

**Paso 6**. Notificaciones del Sistema
El Watcher puede notificar al usuario o a un sistema local utilizando varios métodos:

* Notificaciones push de la aplicación
* Salida por puerto serie/UART
* Notificaciones push HTTP

Watcher también puede enviar datos a servidores locales, aplicaciones de terceros o servicios de alerta como Discord, Home Assistant o IFTTT.
Para más detalles, consulte la sección Aplicación Proxy HTTP.

## Flujo de Procesamiento Seguro Local

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/4.png" style={{width:800, height:'auto'}}/></div>

Este diagrama describe el "Flujo de Procesamiento Seguro Local", que se enfoca en la interacción completa del usuario con aplicaciones desplegadas localmente. Para garantizar la privacidad de los datos, la orquestación de tareas y los servicios de análisis de imágenes se despliegan completamente en el servidor local, ofreciendo protección total de la privacidad. Sin embargo, este método limita la funcionalidad, ya que los servicios en la nube de SenseCraft no están disponibles. Las tareas solo pueden iniciarse mediante comandos de voz en el campo, y los usuarios deben configurar servicios de notificación para ver datos históricos.

**Paso 1**. Configuración Inicial
Después de [comenzar y vincular el dispositivo](https://wiki.seeedstudio.com/es/getting_started_with_watcher/#device-binding-and-ota-upgrade), los usuarios pueden seleccionar los servicios locales apropiados según sus necesidades, habilitar el servicio privado de Watcher e ingresar la URL del servidor Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**Paso 2**. Interacción del Usuario:
Los usuarios pueden emitir tareas presionando el botón de rueda en el dispositivo Watcher y enviando comandos a través de chat de voz.

**Paso 3**. Orquestación de Tareas:

El servidor Watcher alojado en el servidor local proporciona servicios de orquestación de tareas, similar al sistema de orquestación de tareas de SenseCraft. Este sistema local consta de tres servicios principales:

* STT (servicio de Voz a Texto)
* TTS (servicio de Texto a Voz)
* Servicios de IA para entender, procesar y orquestar tareas.

Después de interpretar la tarea, el servicio de orquestación de tareas local despacha tareas al Watcher.

**Paso 4**. Procesamiento de Tareas de Análisis Visual
Una vez que el Watcher recibe la tarea, llamará al servicio de análisis visual local desplegado en el servidor local. La tarea será analizada usando el modelo de IA seleccionado durante la orquestación de tareas.

**Paso 5**. Notificaciones del Sistema
Watcher puede notificar a los usuarios o sistemas locales usando los siguientes métodos:

* Salida por puerto serie/UART
* Notificaciones push HTTP

Además, Watcher puede enviar datos a servidores locales, aplicaciones de terceros o servicios de alerta como Discord, Home Assistant e IFTTT.
Para más detalles, consulte la sección Aplicación Proxy HTTP.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
