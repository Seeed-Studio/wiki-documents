---
description: SenseCAP Watcher es un observador de IA para ayudarte a monitorear anomalías dentro de un espacio y luego tomar acciones. Simplemente habla con Watcher para dar comandos, y ejecutará las tareas deseadas cuando ocurra el evento.
title: Guía de Inicio Rápido
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg
slug: /getting_started_with_watcher
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2025-12-05'
url: https://wiki.seeedstudio.com/es/getting_started_with_watcher/
---

# Guía de Inicio Rápido de SenseCAP Watcher

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

## Video de Guía de Inicio Rápido

Esta es la Guía de Inicio Rápido de SenseCAP Watcher que te ayudará a desembalar y usar el dispositivo por primera vez.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yufEUFEB0Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Introducción

SenseCAP Watcher es un observador de IA para ayudarte a monitorear anomalías dentro de un espacio y luego tomar acciones. Simplemente habla con Watcher para dar comandos, y ejecutará las tareas deseadas cuando ocurra el evento.

Como un recién llegado al sistema de edificios inteligentes / hogar inteligente, SenseCAP Watcher es mucho más inteligente comparado con los sensores y actuadores actuales. Entiende lo que está sucediendo dentro del espacio y luego toma acciones en consecuencia.

## Obligatorio

Antes de usar Watcher como asistente de espacio, debemos asegurar que los siguientes tres pasos se realicen exitosamente, lo cual es la base para todos los pasos posteriores.

### Paso 1. Empaque de Instalación

El Watcher viene con un empaque único que funciona como un soporte elegante, similar a un calendario. Al colocar el Watcher dentro de este soporte, puedes crear una decoración atractiva para tu hogar. Sigue las instrucciones paso a paso a continuación y consulta el video adjunto para una guía visual sobre cómo instalar tu Watcher en su soporte.

<div class="table-center">
<iframe width="760" height="415" src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Paso 2. Encender

:::caution
Por favor usa un enchufe de alimentación que sea compatible con el Watcher; el Watcher debe ser alimentado por una fuente de 5V y puede quemarse si usas un adaptador de corriente no compatible o una fuente de alimentación con un voltaje mayor a 5V!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

El gráfico anterior muestra las especificaciones recomendadas del adaptador. Si no sabes dónde puedes comprar el adaptador correcto, puedes elegir comprarlo directamente en el enlace de abajo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>
:::

Para encender tu dispositivo Watcher, presiona y mantén presionado el botón de rueda ubicado en la esquina superior derecha por aproximadamente 3 segundos hasta que aparezca el logo de Seeed Studio en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

Una vez que se muestre el logo, suelta el botón y permite que el dispositivo complete su proceso de inicialización. Después de unos momentos, el Watcher mostrará su menú principal, indicando que está listo para usar.

:::tip
Si el dispositivo no se enciende con una presión larga, el dispositivo puede estar bajo de batería y puede que necesites conectar un cable para alimentarlo antes de poder despertar el Watcher.
:::

### Paso 3. Vinculación del Dispositivo

:::caution
[SenseCraft Pro](https://wiki.seeedstudio.com/es/watcher_price/) activará automáticamente el servicio de prueba cuando tu dispositivo esté vinculado a la APP SenseCraft.
:::

Después de encender tu Watcher, si no ha sido previamente vinculado a un dispositivo, te pedirá que te conectes a la app SenseCraft. Alternativamente, puedes encontrar la opción "Connect to APP" en el menú de Configuración. El Watcher entonces mostrará un código QR para descargar la app SenseCraft.

Puedes escanear el código QR o usar el enlace proporcionado para descargar la app.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar APP 🖱️</font></span></strong>
    </a>
</div>

<br />

Para proceder con la vinculación de tu Watcher a la app SenseCraft, sigue estos pasos:

**1.** En tu Watcher, gira el botón de rueda en sentido horario para entrar a la interfaz de código QR para vincular el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg" style={{width:550, height:'auto'}}/></div>

**2.** Abre la app SenseCraft en tu dispositivo móvil y toca el signo más (+) en la esquina superior derecha para agregar tu Watcher escaneando el código QR.

:::tip
Asegúrate de que los permisos de Bluetooth de tu dispositivo móvil estén habilitados, ya que el proceso de vinculación requiere una conexión Bluetooth.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg" style={{width:550, height:'auto'}}/></div>

**3.** Después de escanear exitosamente el código QR, la app navegará a la página de configuración de red. Selecciona una red Wi-Fi de 2.4GHz para conectar tu Watcher a internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg" style={{width:550, height:'auto'}}/></div>

Toca el botón "Next" para proceder.

**4.** Elige un nombre para tu Watcher y selecciona un grupo apropiado para él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg" style={{width:550, height:'auto'}}/></div>

Toca el botón "Finish" para completar el proceso de configuración.

**5.** La app SenseCraft mostrará una página de tutorial, proporcionando orientación sobre cómo usar tu Watcher. Tómate un momento para familiarizarte con las instrucciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg" style={{width:550, height:'auto'}}/></div>

Una vez que la configuración esté completa, la app abrirá una ventana de chat para comunicarse con tu Watcher, mientras que el Watcher regresará a su menú principal.

Con el proceso de vinculación terminado, tu Watcher ahora está conectado a la app SenseCraft, y puedes comenzar a explorar sus características y capacidades. La app sirve como una forma conveniente de interactuar con tu Watcher, ajustar configuraciones y recibir notificaciones remotamente.

## Programar una tarea para Watcher

A continuación, selecciona el método que quieres usar para programar una tarea ejecutable para Watcher.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Built-in task templates" label="Plantillas de tareas integradas">

Para ejecutar una tarea desde las Plantillas de Tareas en tu Watcher, sigue estos pasos:

**1.** Desde el menú principal, usa el botón de rueda para navegar a la opción **Task Templates**.

**2.** Presiona el botón de rueda para entrar al submenú de Plantillas de Tareas.

**3.** Desplázate por las plantillas de tareas disponibles usando el botón de rueda hasta que encuentres la tarea modelo deseada.

**4.** Presiona el botón de rueda para seleccionar y comenzar a ejecutar la tarea elegida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:650, height:'auto'}}/></div>

<br />

Una vez que la tarea comience, el Watcher mostrará una cara emoji animada en la pantalla. Este emoji indica que el dispositivo está monitoreando activamente el objeto objetivo especificado por la plantilla de tarea seleccionada.

Cuando el Watcher detecte el objeto objetivo, la pantalla cambiará de la animación emoji a una vista en tiempo real del objeto detectado. Esto te permite ver lo que el Watcher ha identificado.

Si el objeto objetivo se mueve fuera de la vista del Watcher o ya no es detectado, la pantalla regresará automáticamente a la cara emoji animada, indicando que el dispositivo aún está monitoreando el objetivo.

Plantillas de Tareas:

- Detección Humana:
  - Esta plantilla de tarea está diseñada para detectar la presencia de seres humanos.
  - Cuando el Watcher identifique una **persona**, activará una notificación de alarma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-people-detected.png" style={{width:210, height:'auto'}}/></div><br />

- Detección de Mascotas:
  - La plantilla de tarea de Detección de Mascotas se enfoca en reconocer gatos o perros.
  - Si el Watcher detecta un **gato**, activará una notificación de alarma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-pet.png" style={{width:210, height:'auto'}}/></div><br />

- Detección de Gestos:
  - Esta plantilla de tarea está configurada para identificar el gesto de mano "papel".
  - Cuando el Watcher reconozca el **gesto de papel**, activará una notificación de alarma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-gesture.png" style={{width:210, height:'auto'}}/></div><br />

Cada una de estas plantillas de tareas tiene condiciones específicas de activación de alarma basadas en la detección de sus respectivos objetivos: humanos, gatos o el gesto de papel. Al usar estas plantillas, puedes configurar rápidamente el Watcher para monitorear el objeto deseado sin necesidad de una configuración extensa.

</TabItem>

<TabItem value="Through the APP" label="A través de la APP">

:::danger
Pueden aplicarse tarifas por usar algunos de los servicios de SenseCraft AI, consulta la documentación a continuación para más detalles:

**[Planes y Beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/es/watcher_price/)**
:::

La APP SenseCraft te permite enviar Tareas a tu dispositivo Watcher. En este ejemplo, demostraremos el proceso de enviar una tarea usando una de las tareas de muestra proporcionadas por Watcher. Usemos el comando *Si ves una vela, por favor notifícame*.

**1.** Abre la APP SenseCraft y navega a la ventana de chat para tu dispositivo Watcher conectado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg" style={{width:550, height:'auto'}}/></div><br />

**2.** En la ventana de chat, selecciona la tarea deseada de las opciones disponibles o escribe manualmente el comando *Si ves una vela, por favor notifícame*. Envía el comando a tu Watcher tocando el botón de envío o presionando enter.

**3.** Al recibir el comando, Watcher lo interpretará y lo desglosará en un flujo de tareas que consiste en componentes de **Cuándo**, **Hacer** y **Frecuencia de Captura**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg" style={{width:550, height:'auto'}}/></div>

<br />

Revisa el flujo de tareas analizado para asegurar que Watcher haya entendido correctamente tu comando. La app mostrará los detalles de la tarea interpretada para tu verificación. Si alguna parte del flujo de tareas no se alinea con tu comando previsto, puedes modificar los detalles de la tarea accediendo a la sección **Detail Config** dentro de la app.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg" style={{width:550, height:'auto'}}/></div>

<br />

**4.** Una vez que hayas confirmado o ajustado los detalles de la tarea, haz clic en el botón **Run** para enviar la tarea finalizada a tu Watcher.

Watcher descargará las instrucciones de la tarea, y una vez que la descarga esté completa, se transformará en un sistema de monitoreo vigilante, listo para detectar cualquier instancia de velas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg" style={{width:700, height:'auto'}}/></div>

<br />

**5.** Si Watcher identifica una vela, enviará una alerta basada en la configuración predefinida, que puede incluir luces parpadeantes, alarmas audibles y notificaciones a través de la APP SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg" style={{width:550, height:'auto'}}/></div>

:::note
Ten en cuenta que debido a las limitaciones de tiempo del flujo de tareas, **habrá un intervalo mínimo entre alertas consecutivas para evitar notificaciones excesivas**.
:::

Siguiendo estos pasos, puedes enviar comandos efectivamente a tu Watcher usando la APP SenseCraft, permitiéndole realizar tareas de monitoreo específicas y notificarte cuando se cumplan las condiciones especificadas.

Recuerda revisar y ajustar regularmente la configuración y flujos de tareas de tu Watcher para asegurar un rendimiento óptimo y alineación con tus requisitos de monitoreo. Para una descripción y explicación más detallada de las tareas y opciones de la APP, así como una descripción detallada de los intervalos, lee **[Guía de Asignación de Tareas del Watcher](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/)** para aprender más.

</TabItem>

<TabItem value="By Voice" label="Por Voz">

:::danger
Pueden aplicarse tarifas por usar algunos de los servicios de SenseCraft AI, consulta la documentación a continuación para más detalles:

**[Planes y Beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/es/watcher_price/)**
:::

El Watcher ofrece una forma conveniente e intuitiva de enviar tareas o entablar conversaciones usando comandos de voz, gracias a su función "Push to Talk". Esta funcionalidad es accesible desde cualquier pantalla o interfaz en el dispositivo, facilitando la interacción con el Watcher sin navegar por menús. Aquí tienes una guía paso a paso sobre cómo usar esta función:

1. Activar Push to Talk:

   - Localiza el Botón de Rueda en la esquina superior derecha del Watcher.
   - Presiona y mantén presionado el Botón de Rueda para entrar a la interfaz de entrada de voz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. Habla tu Comando o Mensaje:

   - Mientras mantienes presionado el Botón de Rueda, habla claramente tu tarea o mensaje al Watcher.
   - Puedes asignar tareas, como "Dime si el bebé está llorando" o "Si el perro está robando comida, di alto Copper". (Copper es el nombre de mi perro.)

3. Suelta el Botón de Rueda:

   - Una vez que hayas terminado de hablar, suelta el Botón de Rueda.
   - El Watcher procesará tu entrada de voz y determinará si es una asignación de tarea.

4. Asignación de Tarea:

   - Si el Watcher reconoce tu entrada de voz como una asignación de tarea, automáticamente desglosará tu tarea en componentes relevantes.
   - El Watcher mostrará tarjetas en su pantalla, mostrando el **Objeto** (qué monitorear), **Comportamiento** (qué acción buscar), **Notificación** (cómo alertarte), **Rango de Tiempo** (cuándo monitorear) y **Frecuencia** (con qué frecuencia monitorear).
   - Revisa la información mostrada para asegurar que represente con precisión tu tarea prevista.
   - Si los detalles son correctos, confirma la tarea, y el Watcher comenzará a ejecutarla según los parámetros especificados.
   - Si Watcher malinterpreta tu tarea, mantén presionado el botón de la rueda de desplazamiento y puedes continuar a través del diálogo para tratar de corregir la comprensión de Watcher sobre la tarea. Si aún no puede entenderla correctamente después de varios intentos, recomendamos que uses la APP SenseCraft para colocar la tarea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

Consejos para Uso Óptimo:

- Habla claramente y a un ritmo moderado para asegurar un reconocimiento de voz preciso.
- Al hablar, acércate lo más posible al Watcher, aproximadamente **3 ~ 10cm** de distancia para que la precisión del reconocimiento del habla sea mejor.
- Minimiza el ruido de fondo para mejorar la capacidad del Watcher de entender tus comandos de voz.
- Sé específico y conciso al asignar tareas para ayudar al Watcher a interpretar con precisión tus intenciones.

Al aprovechar la función Push to Talk, puedes enviar tareas sin esfuerzo y entablar conversaciones con el Watcher, haciendo tu interacción con el dispositivo más natural y eficiente.

:::note
Si encuentras un error **0x7002**, significa que el estado actual de la red del Watcher no es bueno y la llamada del servicio de audio falló, cambia la red o ubicación e inténtalo de nuevo.
:::

</TabItem>

</Tabs>

## Para finalizar una tarea en ejecución

1. Toca la pantalla una vez o presiona el botón de rueda.

2. Aparecerá una ventana emergente de confirmación con dos opciones: **Main Menu** y **End Task**. Para terminar la tarea, toca **End Task** en la pantalla o usa la rueda de desplazamiento para navegar a "End Task" y presiona el botón de la rueda de desplazamiento para confirmar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end_task.png" style={{width:210, height:'auto'}}/></div><br />

3. Alternativamente, puedes finalizar la tarea a través de la APP SenseCraft en tu dispositivo móvil presionando el botón **End** en la tarjeta de tarea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end-task-phone.png" style={{width:250, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
