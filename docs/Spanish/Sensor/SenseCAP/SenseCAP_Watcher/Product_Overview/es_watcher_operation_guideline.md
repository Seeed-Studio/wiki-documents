---
description: Operation guideline of the SenseCAP Watcher.
title: Guía de Operación
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0_1.webp
slug: /es/watcher_operation_guideline
sidebar_position: 2
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía Operativa SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>  Video del Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio de Github</font></span></strong>
    </a>
</div>

En esta sección de la Wiki te proporcionaremos información sobre la lógica de operación del SenseCAP Watcher, su gestión de tareas y el uso de las funciones del dispositivo.

## Operaciones Básicas

Por favor, lee aquí para aprender y comprender el funcionamiento básico del Watcher, de modo que puedas dominar con éxito las ideas y métodos para usarlo.

### Encendido

:::caution
Por favor usa un enchufe de alimentación compatible con el Watcher; el Watcher debe alimentarse con una fuente de 5V y puede dañarse si usas un adaptador no compatible o una fuente con voltaje mayor a 5V.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

La tabla anterior muestra las especificaciones recomendadas del adaptador. Si no sabes dónde comprar el adaptador correcto, puedes adquirirlo directamente en el enlace siguiente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>
:::

Para encender tu dispositivo Watcher, mantén presionado el botón rueda ubicado en la esquina superior derecha durante aproximadamente 3 segundos hasta que aparezca el logo de Seeed Studio en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

Cuando se muestre el logo, suelta el botón y permite que el dispositivo complete su proceso de inicialización. Después de unos momentos, el Watcher mostrará su menú principal, indicando que está listo para usarse.

:::tip
Si el dispositivo no enciende con una pulsación larga, puede que la batería esté baja y necesites conectar un cable para alimentarlo antes de poder despertarlo.
:::

### Apagado

Para apagar el Watcher, debes acceder al menú Configuración. Usando el botón rueda, navega hasta la opción Configuración y presiona el botón para entrar al menú. Una vez dentro, desplázate hacia abajo hasta la opción Apagar y presiona el botón rueda para seleccionarla. Finalmente, desliza el control deslizante de izquierda a derecha para confirmar el apagado, y el Watcher se apagará.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:650, height:'auto'}}/></div>

:::tip
Si tu Watcher está conectado a un cable de alimentación, el botón Apagar cambia a Reiniciar, y el dispositivo no podrá apagarse. De igual forma, un dispositivo apagado se encenderá automáticamente cuando se conecte el cable de alimentación.
:::

En la parte inferior de tu Watcher hay un pequeño orificio. Este orificio da acceso al botón de apagado por hardware, que permite apagar el dispositivo cuando sea necesario.

Para apagar el Watcher usando el botón de hardware, sigue estos pasos:

1. Busca un objeto delgado y puntiagudo, como un clip o una aguja pequeña.

2. Inserta cuidadosamente el objeto puntiagudo en el orificio pequeño en la parte inferior del Watcher.

3. Presiona suavemente el botón de apagado dentro del orificio y el Watcher se apagará.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off_button.gif" style={{width:650, height:'auto'}}/></div><br />

:::note
Es importante tener precaución al usar un objeto puntiagudo para presionar el botón reset. Sé gentil y evita aplicar fuerza excesiva para no dañar el dispositivo.

Ten en cuenta que realizar un reinicio por hardware no borrará ningún dato de usuario almacenado en tu Watcher. Esta operación está diseñada para reiniciar el dispositivo en caso de problemas de software o si el dispositivo no responde.

Si tienes problemas persistentes con tu Watcher que no se solucionan con un reinicio por hardware, puedes considerar hacer un restablecimiento de fábrica desde el menú de configuración. Sin embargo, ten en cuenta que el restablecimiento de fábrica borrará todos los datos de usuario, por lo que solo debe usarse como último recurso.

Recuerda manejar tu Watcher con cuidado y usar el botón de reinicio por hardware solo cuando sea necesario para asegurar la longevidad y correcto funcionamiento del dispositivo.
:::

### Lógica de operación

La lógica de operación del Watcher gira en torno al botón rueda, que sirve como el medio principal para navegación y selección. Girar el botón rueda en sentido antihorario permite desplazarse hacia arriba o a la izquierda dentro de los menús, mientras que girarlo en sentido horario permite desplazarse hacia abajo o a la derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/logic.gif" style={{width:650, height:'auto'}}/></div>

<br />

Para confirmar una selección o entrar a un submenú, simplemente presiona el botón rueda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:650, height:'auto'}}/></div>

<br />

Sin embargo, es importante notar que en ciertas situaciones donde puede haber ambigüedad operativa, la lógica de selección y confirmación del botón rueda puede desviarse de esta norma. En tales casos, la pantalla táctil ofrece un medio alternativo de interacción, permitiéndote completar la acción deseada tocando los elementos correspondientes en pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/touch.gif" style={{width:650, height:'auto'}}/></div><br />

A lo largo de la Wiki se proporcionarán instrucciones específicas para navegar y seleccionar opciones en cada menú, considerando excepciones a la lógica general del botón rueda. Al familiarizarte con ambos controles, botón rueda y pantalla táctil, podrás operar tu Watcher de manera eficiente y acceder a sus diversas funciones y configuraciones.

### Pulsar para hablar (Push to Talk)

La función Push to Talk del Watcher te permite interactuar con el dispositivo mediante comandos de voz desde cualquier pantalla o interfaz. Simplemente mantén presionado el botón rueda ubicado en la esquina superior derecha para activar la entrada de voz. Mientras mantienes presionado el botón, habla tu comando o mensaje, como asignar una tarea o iniciar una conversación. Al soltar el botón, el Watcher procesará tu entrada de voz y responderá en consecuencia. Si se necesita aclaración adicional, vuelve a presionar y mantener el botón para proporcionar más entrada de voz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

:::tip
1. Actualmente el diálogo de voz solo soporta el uso de inglés. Ten en cuenta que si usas otros idiomas, podrían ocurrir situaciones inesperadas.

2. Si inicias un diálogo mientras el Watcher está ejecutando una tarea, primero pausará la tarea actual y luego volverá a ella una vez finalizado el diálogo.

3. Para saber cómo asignar tareas, lee primero los tutoriales **[Run - Sending Task to Watcher by Speaking](#run---sending-task-to-watcher-by-speaking)** y **[Cómo asignar tareas al Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)**.
:::

## Descripción General de Funciones

El Watcher ofrece cuatro opciones principales en el menú: **Plantillas de Tarea**, **Tarea Actual**, **Extensión** y **Configuración**. Estos menús brindan acceso a diversas funciones y características del dispositivo.

### Plantillas de Tarea

El menú Plantillas de Tarea contiene una selección de tareas preconfiguradas listas para usarse. Estas tareas incluyen detección de personas, detección de mascotas y detección de gestos. Al elegir una de estas plantillas, puedes configurar rápidamente el Watcher para realizar la tarea deseada sin necesidad de configuraciones extensas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

### Tarea Actual

La opción de menú Tarea Actual proporciona una forma conveniente de acceder y gestionar la tarea que se está ejecutando en ese momento en el Watcher. Si necesitas salir de la tarea actual para ajustar configuraciones del dispositivo como el volumen, brillo o el interruptor de la luz LED, puedes volver fácilmente a tu tarea seleccionando la opción Tarea Actual desde el menú principal, asegurando así una experiencia fluida y eficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

### Extensión

El menú Extensión, actualmente disponible en el Watcher, funciona como un centro para mostrar datos de sensores Grove compatibles, específicamente los sensores **[Grove SHT41](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT41-p-5383.html)**, **[Grove SHT40](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)** y **[Grove SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)**.

Esta función permite a los usuarios integrar fácilmente uno de estos sensores Grove compatibles al Watcher, habilitando el monitoreo y visualización de datos en tiempo real. Navegando al menú Extensión, puedes ver los valores e información recolectada por el sensor conectado, lo que te permite tomar decisiones basadas en datos.

A medida que evoluciona la plataforma Watcher, el menú Extensión podría expandirse para incluir compatibilidad con más sensores Grove y funciones adicionales, mejorando aún más la experiencia y capacidades del dispositivo. ¡Mantente atento a futuras actualizaciones!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/connect_grove.gif" style={{width:700, height:'auto'}}/></div>

### Configuración

Por último, el menú Configuración es donde puedes acceder y modificar los ajustes generales del Watcher. Este menú proporciona opciones para personalizar diversos aspectos del dispositivo, como el brillo de la pantalla, volumen del sonido, configuración de conectividad y más. Explora este menú para adaptar el rendimiento y comportamiento del Watcher a tus preferencias.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>

## Configuración del Watcher

Esta guía te explicará las diferentes opciones de configuración disponibles en tu dispositivo Watcher y sus respectivas funciones.

- **Conectar App**:
   - Permite establecer la conexión entre tu Watcher y una aplicación móvil complementaria.
   - Al conectarlo, obtienes funciones adicionales, control remoto y notificaciones en tu dispositivo móvil.

- **Wi-Fi**:
   - Muestra la información de la red inalámbrica actualmente conectada.
   - Si no se ha configurado una red, no se mostrará ninguna información.
   - Ten en cuenta que la configuración de redes Wi-Fi solo puede realizarse desde la app móvil y no desde el Watcher.

- **Bluetooth**:
   - Permite activar o desactivar la funcionalidad Bluetooth.

- **Sonido**:
   - Ajusta el volumen de salida de audio del Watcher.
   - Puedes aumentarlo o disminuirlo según tus preferencias o entorno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:650, height:'auto'}}/></div>

<br />

- **Brillo**:
   - Controla el nivel de brillo de la pantalla.
   - Ajustarlo mejora la visibilidad según las condiciones de luz y ayuda a conservar batería.

- **Luz RGB**:
   - Permite encender o apagar la luz LED indicadora.

- **Acerca del dispositivo**:
   - Muestra información importante como número de modelo, versión de firmware y número de serie.
   - Útil para diagnóstico o verificación de actualizaciones.

- **Apagar/Reiniciar**:
   - Permite reiniciar o apagar el dispositivo, según la fuente de alimentación.
   - Si está conectado a la corriente, solo aparece la opción "Reiniciar".
   - Si está funcionando con batería, aparece la opción "Apagar".

- **Restablecer de Fábrica**:
   - Restaura el Watcher a su configuración original.
   - Esta acción borra todos los datos y configuraciones del usuario.
   - Úsala con precaución, ya que no puede deshacerse y tendrás que configurar el dispositivo nuevamente.

Familiarizándote con estas configuraciones podrás personalizar y optimizar tu experiencia con Watcher. Recuerda que algunas configuraciones como Wi-Fi y Bluetooth solo pueden modificarse desde la app móvil complementaria.

## Soporte Técnico y Comunidad

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para ajustarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

