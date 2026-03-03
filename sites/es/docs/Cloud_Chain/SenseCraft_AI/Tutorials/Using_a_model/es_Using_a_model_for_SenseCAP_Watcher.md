---
sidebar_position: 3
description: Cómo usar un modelo para SenseCAP Watcher
title: Usando un modelo para SenseCAP Watcher
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.webp
slug: /es/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-watcher
aliases:
  - /es/sensecraft_ai_pretrained_models_for_watcher
last_update:
  date: 12/03/2024
  author: Citric
---

SenseCAP Watcher es un potente dispositivo de monitoreo que puede configurarse para reconocer objetos específicos y activar alarmas basadas en tareas definidas por el usuario. Para mejorar las capacidades de reconocimiento de objetos de Watcher, los usuarios pueden aprovechar modelos personalizados del repositorio de modelos SenseCraft AI. Este artículo wiki te guiará a través del proceso de usar estos modelos personalizados en tus tareas de monitoreo de Watcher.

## Prerrequisitos

Antes de comenzar a usar modelos personalizados del repositorio de modelos SenseCraft AI, asegúrate de tener lo siguiente:

- **SenseCAP Watcher**: Debes tener un dispositivo SenseCAP Watcher configurado y listo para usar. Si aún no lo has hecho, sigue las instrucciones en la [Guía de Inicio Rápido de SenseCAP Watcher](https://wiki.seeedstudio.com/es/getting_started_with_watcher/) para configurar tu dispositivo.

- **APP SenseCraft**: Instala la APP SenseCraft en tu dispositivo móvil. La aplicación está disponible para plataformas iOS y Android y puede descargarse desde las respectivas tiendas de aplicaciones.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar APP 🖱️</font></span></strong>
    </a>
</div>

<br />

- **Cuenta SenseCraft**: Para acceder al repositorio de modelos SenseCraft AI y usar modelos personalizados, necesitas tener una cuenta SenseCraft AI. Si no tienes una cuenta, regístrate a través de la APP SenseCraft o el sitio web oficial de SenseCraft AI.

- **Conectividad de Red**: Asegúrate de que tu dispositivo SenseCAP Watcher y el dispositivo móvil que ejecuta la APP SenseCraft estén conectados a internet. Se requiere una conexión de red estable para acceder al repositorio de modelos SenseCraft AI y descargar modelos personalizados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Video de Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio Github</font></span></strong>
    </a>
</div>

## Paso 1. Asignar una Tarea de Monitoreo a Watcher a través de la APP SenseCraft

Para comenzar, abre la APP SenseCraft y navega al dispositivo Watcher que deseas configurar. La aplicación proporciona una interfaz intuitiva para crear y gestionar tareas de monitoreo. Para este ejemplo, creemos una tarea que diga, *Si se reconoce un teclado, reproduce el sonido 'El teclado es increíble'*.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/31.png" style={{width:250, height:'auto'}}/></div>

Al crear una tarea, es esencial ser claro y específico sobre el objeto que quieres que Watcher reconozca y la acción que quieres que tome cuando se detecte el objeto. Esto ayuda a asegurar que Watcher entienda y ejecute la tarea con precisión.

Si no sabes lo suficiente sobre cómo Watcher asigna una tarea apropiada, lee la [Guía de Asignación de Tareas](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

## Paso 2. Habilitar el Uso de un Modelo TinyML Personalizado

Después de asignar la tarea a través de la APP, haz clic en la tarjeta de la tarea para entrar a la página **Configuraciones Detalladas**. Esta página te permite ajustar varios aspectos de tu tarea de monitoreo, incluyendo la selección de un modelo TinyML personalizado.

En la sección **Escenario** en la parte superior de la página, encontrarás la opción **Usar Modelo TinyML**. Al marcar esta opción, habilitas a Watcher para usar un modelo personalizado del repositorio de modelos SenseCraft AI para el reconocimiento de objetos. Haz clic en el campo del nombre del modelo para buscar o seleccionar directamente el modelo deseado, como un modelo de **detección de teclado**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.png" style={{width:1000, height:'auto'}}/></div>

El repositorio de modelos SenseCraft AI aloja una amplia gama de modelos pre-entrenados que pueden usarse para varias tareas de reconocimiento de objetos. Estos modelos han sido optimizados para su uso con Watcher, asegurando alta precisión y rendimiento.

:::note

1. Después de seleccionar un modelo, las palabras de alarma de Watcher pueden borrarse y necesitan ser reingresadas antes de que se pueda hacer clic en el botón Ejecutar Tarea.

2. Después de seleccionar el modelo, por favor configura razonablemente el Umbral de Confianza debajo del modelo. el valor predeterminado es 0. Si lo envías directamente a la tarea con 0 como umbral, puede llevar a que cualquier cosa sea reconocida como un objeto incorrecto, por favor ajusta este valor según la situación real para lograr el mejor efecto de detección.

:::

Además de los modelos pre-entrenados disponibles en el repositorio de modelos SenseCraft AI, también puedes usar tus propios modelos entrenados personalizados. Si tienes un objeto específico o escenario que no está cubierto por los modelos existentes, puedes entrenar tu propio modelo y compartirlo con la comunidad SenseCraft AI.

:::tip
Watcher puede buscar y usar modelos privados bajo la misma cuenta SenseCraft. Si eliges no hacer públicos tus modelos, también puedes usar tus modelos privados siempre que Watcher esté vinculado a tu cuenta.
:::

## Paso 3. Confirmar la Tarea e Iniciar el Monitoreo

Después de seleccionar el modelo personalizado y confirmar otros detalles de configuración de la tarea, haz clic en el botón "Ejecutar Tarea" para iniciar la tarea de monitoreo. Esta acción despliega la tarea a tu dispositivo Watcher y comienza el proceso de monitoreo.

Al recibir la tarea, Watcher descargará automáticamente el modelo seleccionado del repositorio de modelos SenseCraft AI y lo usará como base para activar acciones de alarma. Esta integración perfecta asegura que Watcher tenga el modelo más actualizado y relevante para un reconocimiento preciso de objetos.

Con el modelo personalizado en su lugar, Watcher monitoreará continuamente su entorno para detectar la presencia del objeto especificado. En este ejemplo, cuando Watcher reconoce un teclado usando el modelo seleccionado, activará la acción de alarma especificada—reproduciendo el sonido "Keyboard is awesome".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/33.png" style={{width:600, height:'auto'}}/></div>

La combinación de modelos personalizados y tareas definidas por el usuario permite que Watcher se adapte a una amplia gama de escenarios de monitoreo. Al aprovechar el poder del repositorio de modelos de SenseCraft AI y la flexibilidad de la APP SenseCraft, los usuarios pueden adaptar las capacidades de Watcher a sus necesidades específicas, asegurando un reconocimiento de objetos confiable y preciso y la activación de alarmas.

## Conclusión

El uso de modelos personalizados del repositorio de modelos de SenseCraft AI empodera a los usuarios de SenseCAP Watcher para mejorar las capacidades de reconocimiento de objetos del dispositivo y expandir sus escenarios de aplicación de monitoreo y alarma. La APP SenseCraft proporciona una interfaz intuitiva para buscar, seleccionar y aplicar estos modelos personalizados a las tareas de monitoreo de Watcher. Siguiendo los pasos descritos en este artículo wiki, los usuarios pueden configurar fácilmente Watcher para reconocer objetos específicos y activar alarmas basadas en sus requisitos únicos. Ya sea usando modelos pre-entrenados o modelos entrenados personalizados compartidos con la comunidad de SenseCraft AI, Watcher ofrece una solución poderosa y adaptable para diversas necesidades de monitoreo.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
