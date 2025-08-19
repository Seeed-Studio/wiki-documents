---
description: SenseCAP Watcher is an AI watcher to help you monitor anomalies within a space and then take actions. Simply speak to Watcher to give commands, and it will execute your desired tasks when the event occurs.
title: Guía de Inicio Rápido
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg
slug: /es/getting_started_with_watcher
sidebar_position: 2
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía Rápida de Inicio SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Comprar Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Video del Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio en Github</font></span></strong>
    </a>
</div>

## Video Guía Rápida de Inicio

Esta es la guía rápida de SenseCAP Watcher que te ayudará a desempacar y usar el dispositivo por primera vez.

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yufEUFEB0Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Introducción

SenseCAP Watcher es un observador inteligente basado en IA que te ayuda a monitorear anomalías en un espacio y tomar acciones. Simplemente habla con Watcher para darle comandos, y ejecutará las tareas deseadas cuando ocurra el evento.

Como novedad para sistemas inteligentes de edificios o casas, SenseCAP Watcher es mucho más inteligente que sensores y actuadores convencionales. Entiende lo que sucede en el espacio y actúa en consecuencia.

## Pasos Obligatorios

Antes de usar Watcher como asistente del espacio, debes asegurarte de completar con éxito los siguientes tres pasos, que son la base para todo lo que sigue.

### Paso 1. Empaque e Instalación

El Watcher viene con un empaque único que también funciona como un soporte estilo calendario. Al colocar el Watcher dentro del soporte, creas una decoración atractiva para tu hogar. Sigue las instrucciones paso a paso a continuación y consulta el video para una guía visual sobre cómo instalar tu Watcher en su soporte.

<div class="table-center">
<iframe width="760" height="415" src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Paso 2. Encendido

:::caution  
Por favor usa un adaptador de corriente compatible con Watcher; el Watcher debe alimentarse con 5V, ¡y puede quemarse si usas un adaptador o fuente con voltaje mayor a 5V!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

La tabla muestra las especificaciones recomendadas del adaptador. Si no sabes dónde comprar el adaptador correcto, puedes adquirirlo directamente en el siguiente enlace:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Comprar Ahora 🖱️</font></span></strong>
    </a>
</div>
:::

Para encender tu Watcher, mantén presionado el botón rueda ubicado en la esquina superior derecha por aproximadamente 3 segundos, hasta que aparezca el logo de Seeed Studio en pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

Cuando el logo aparezca, suelta el botón y espera a que el dispositivo complete su proceso de inicialización. Después de unos segundos, Watcher mostrará su menú principal, indicando que está listo para usar.

:::tip  
Si el dispositivo no enciende con una pulsación larga, puede estar con poca batería y necesitarás conectarlo a la corriente para cargarlo antes de despertar el Watcher.  
:::

### Paso 3. Vinculación del Dispositivo

:::caution  
[SenseCraft Pro](https://wiki.seeedstudio.com/watcher_price/) activará automáticamente el servicio de prueba cuando vincules tu dispositivo a la app SenseCraft.  
:::

Después de encender tu Watcher, si no está previamente vinculado, mostrará un mensaje para conectarse a la app SenseCraft. También puedes encontrar la opción **"Connect to APP"** en el menú de configuración. Watcher mostrará un código QR para descargar la app SenseCraft.

Puedes escanear el código QR o usar el enlace proporcionado para descargar la app.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Descargar APP 🖱️</font></span></strong>
    </a>
</div>

<br />

Para continuar vinculando tu Watcher a SenseCraft, sigue estos pasos:

**1.** En tu Watcher, gira el botón rueda en sentido horario para entrar a la interfaz del código QR para vincular el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg" style={{width:550, height:'auto'}}/></div>

**2.** Abre la app SenseCraft en tu móvil y toca el símbolo de más (+) en la esquina superior derecha para añadir tu Watcher escaneando el código QR.

:::tip  
Asegúrate que el Bluetooth de tu móvil está habilitado, ya que la vinculación requiere conexión Bluetooth.  
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg" style={{width:550, height:'auto'}}/></div>

**3.** Tras escanear el código QR, la app te llevará a la página de configuración de red. Selecciona una red Wi-Fi de 2.4 GHz para conectar el Watcher a Internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg" style={{width:550, height:'auto'}}/></div>

Toca el botón **Siguiente** para continuar.

**4.** Elige un nombre para tu Watcher y selecciona un grupo apropiado para él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg" style={{width:550, height:'auto'}}/></div>

Toca **Finalizar** para completar el proceso.

**5.** La app SenseCraft mostrará una página de tutorial con instrucciones para usar tu Watcher. Tómate un momento para familiarizarte con ellas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg" style={{width:550, height:'auto'}}/></div>

Una vez completada la configuración, la app abrirá una ventana de chat para comunicarte con tu Watcher, mientras el Watcher volverá a su menú principal.

Con la vinculación finalizada, tu Watcher estará conectado a la app SenseCraft y podrás explorar sus funciones y características. La app te permite interactuar con tu Watcher, ajustar configuraciones y recibir notificaciones de forma remota.

## Programar una tarea para Watcher

A continuación, selecciona el método que prefieras para programar una tarea ejecutable en Watcher.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Plantillas de tarea integradas" label="Plantillas de tarea integradas">

Para ejecutar una tarea desde las Plantillas de Tareas en tu Watcher, sigue estos pasos:

**1.** En el menú principal, usa el botón rueda para navegar hasta la opción **Plantillas de Tareas**.

**2.** Presiona el botón rueda para entrar al submenú de Plantillas de Tareas.

**3.** Desplázate por las plantillas disponibles usando el botón rueda hasta encontrar la tarea deseada.

**4.** Presiona el botón rueda para seleccionar y comenzar a ejecutar la tarea elegida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:650, height:'auto'}}/></div>

<br />

Una vez que la tarea inicia, el Watcher mostrará una cara emoji animada en pantalla. Este emoji indica que el dispositivo está monitoreando activamente el objeto objetivo especificado en la plantilla seleccionada.

Cuando el Watcher detecta el objeto objetivo, la pantalla cambiará de la animación emoji a una vista en tiempo real del objeto detectado, permitiéndote ver qué ha identificado el Watcher.

Si el objeto objetivo se mueve fuera del campo visual o deja de ser detectado, la pantalla volverá automáticamente a la animación del emoji, indicando que el dispositivo sigue monitoreando.

**Plantillas de tareas:**

- **Detección de personas**:  
   - Esta plantilla está diseñada para detectar la presencia de seres humanos.  
   - Cuando Watcher identifica una **persona**, activará una notificación de alarma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-people-detected.png" style={{width:210, height:'auto'}}/></div><br />

- **Detección de mascotas**:  
   - Esta plantilla se centra en reconocer gatos o perros.  
   - Si Watcher detecta un **gato**, activará una notificación de alarma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-pet.png" style={{width:210, height:'auto'}}/></div><br />

- **Detección de gestos**:  
   - Esta plantilla está configurada para identificar el gesto de mano "papel".  
   - Cuando Watcher reconozca el **gesto papel**, activará una notificación de alarma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-gesture.png" style={{width:210, height:'auto'}}/></div><br />

Cada una de estas plantillas tiene condiciones específicas para activar la alarma basadas en la detección de su objetivo: personas, gatos o el gesto de papel. Usando estas plantillas, puedes configurar rápidamente el Watcher para monitorear el objeto deseado sin necesidad de configuraciones avanzadas.

</TabItem>

<TabItem value="A través de la APP" label="A través de la APP">

:::danger
Es posible que algunos servicios de SenseCraft AI tengan costos adicionales, por favor consulta la documentación para más detalles:

**[Planes y Beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/watcher_price/)**
:::

La APP SenseCraft te permite enviar tareas a tu dispositivo Watcher. En este ejemplo, mostraremos cómo enviar una tarea usando uno de los comandos de muestra que proporciona Watcher. Usaremos el comando *Si ves una vela, por favor notifícame*.

**1.** Abre la APP SenseCraft y navega a la ventana de chat con tu dispositivo Watcher conectado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg" style={{width:550, height:'auto'}}/></div><br />

**2.** En la ventana de chat, selecciona la tarea deseada de las opciones disponibles o escribe manualmente el comando *Si ves una vela, por favor notifícame*. Envía el comando tocando el botón de enviar o presionando enter.

**3.** Al recibir el comando, Watcher lo interpretará y lo dividirá en un flujo de tarea que contiene los componentes **Cuando**, **Hacer** y **Frecuencia de captura**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg" style={{width:550, height:'auto'}}/></div>

<br />

Revisa el flujo de tarea interpretado para asegurarte que Watcher entendió correctamente tu comando. La app mostrará los detalles para tu verificación. Si alguna parte no coincide con tu intención, puedes modificar los detalles en la sección **Configuración Detallada** dentro de la app.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg" style={{width:550, height:'auto'}}/></div>

<br />

**4.** Una vez confirmados o ajustados los detalles, haz clic en **Ejecutar** para enviar la tarea final a tu Watcher.

Watcher descargará las instrucciones, y al completar la descarga, se transformará en un sistema de vigilancia listo para detectar velas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg" style={{width:700, height:'auto'}}/></div>

<br />

**5.** Si Watcher identifica una vela, enviará una alerta según la configuración: luces intermitentes, alarma sonora y notificaciones vía la APP SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg" style={{width:550, height:'auto'}}/></div>

:::note
Ten en cuenta que debido a las limitaciones de tiempo en el flujo de tareas, **habrá un intervalo mínimo entre alertas consecutivas para evitar notificaciones excesivas**.
:::

Siguiendo estos pasos puedes enviar comandos a tu Watcher mediante la APP, permitiéndole realizar tareas específicas y notificarte cuando se cumplan las condiciones.

Revisa y ajusta regularmente las configuraciones y flujos de tareas para un rendimiento óptimo. Para una descripción detallada de las tareas, opciones e intervalos, consulta la guía **[Watcher Task Assignment Guideline](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)**.

</TabItem>

<TabItem value="Por voz" label="Por voz">

:::danger
Es posible que algunos servicios de SenseCraft AI tengan costos adicionales, por favor consulta la documentación para más detalles:

**[Planes y Beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/watcher_price/)**
:::

Watcher ofrece una manera cómoda e intuitiva de enviar tareas o conversar usando comandos de voz gracias a la función "Presiona para hablar". Esta funcionalidad está disponible desde cualquier pantalla o interfaz del dispositivo, facilitando la interacción sin navegar por menús. Aquí tienes una guía paso a paso para usarla:

1. Activar Presiona para hablar:

   - Ubica el botón rueda en la esquina superior derecha del Watcher.
   - Presiona y mantén presionado el botón rueda para entrar a la interfaz de entrada de voz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. Habla tu comando o mensaje:

   - Mientras mantienes presionado el botón rueda, habla claramente la tarea o mensaje al Watcher.
   - Puedes asignar tareas como "Dime si el bebé está llorando" o "Si el perro está robando comida, dile que pare". (Copper es el nombre de mi perro).

3. Suelta el botón rueda:

   - Cuando termines de hablar, suelta el botón.
   - Watcher procesará la entrada de voz y determinará si es una asignación de tarea.

4. Asignación de tarea:

   - Si Watcher reconoce la entrada como tarea, la dividirá en componentes relevantes.
   - Mostrará tarjetas en pantalla con **Objeto** (qué monitorear), **Comportamiento** (qué acción buscar), **Notificación** (cómo alertarte), **Rango de tiempo** (cuándo monitorear) y **Frecuencia** (con qué frecuencia).
   - Revisa la información para confirmar que representa tu intención.
   - Si es correcta, confirma la tarea y Watcher la ejecutará según los parámetros.
   - Si Watcher no entiende bien la tarea, mantén presionado el botón rueda y podrás continuar el diálogo para corregir la interpretación. Si persiste el error, recomendamos usar la APP SenseCraft para asignar la tarea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

Consejos para mejor uso:

- Habla claro y a un ritmo moderado para asegurar reconocimiento correcto.
- Habla lo más cerca posible del Watcher, a unos **3 ~ 10 cm** para mejor precisión.
- Minimiza ruido ambiental para mejorar reconocimiento.
- Sé específico y conciso para ayudar a Watcher a entender mejor la tarea.

Con la función Presiona para hablar, puedes enviar tareas y conversar con Watcher de forma natural y sencilla.

:::note
Si aparece el error **0x7002**, significa que la conexión de red del Watcher es deficiente y la llamada al servicio de audio falló, cambia de red o ubicación e intenta de nuevo.
:::

</TabItem>
</Tabs>

## Para terminar una tarea en ejecución

1. Toca la pantalla una vez o presiona el botón rueda.

2. Aparecerá un popup de confirmación con dos opciones: **Menú Principal** y **Terminar Tarea**. Para detener la tarea, toca **Terminar Tarea** en pantalla o usa el botón rueda para seleccionar "Terminar Tarea" y confirma presionando el botón rueda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end_task.png" style={{width:210, height:'auto'}}/></div><br />

3. También puedes terminar la tarea desde la APP SenseCraft en tu móvil, presionando el botón **Terminar** en la tarjeta de la tarea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end-task-phone.png" style={{width:250, height:'auto'}}/></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes canales de soporte para que tu experiencia sea lo más fluida posible. Ofrecemos varias formas de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
