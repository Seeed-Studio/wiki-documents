---
description: Guía de operación del SenseCAP Watcher.
title: Guía de Operación
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0_1.webp
slug: /es/watcher_operation_guideline
sidebar_position: 2
last_update:
  date: 10/18/2024
  author: Citric
---

# Guía de Operación del SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Video del Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio de Github</font></span></strong>
    </a>
</div>

Dentro de esta sección del Wiki, te proporcionaremos información sobre la lógica operativa del SenseCAP Watcher, asignación de tareas y el uso de las características del dispositivo.

## Operaciones Básicas

Por favor lee aquí para aprender y entender la operación básica del Watcher para que puedas dominar exitosamente las ideas y métodos de uso del Watcher.

### Encendido

:::caution
Por favor usa un enchufe de alimentación que sea compatible con el Watcher; el Watcher debe ser alimentado por una fuente de alimentación de 5V y puede quemarse si usas un adaptador de corriente no compatible o una fuente de alimentación con un voltaje mayor a 5V!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

El gráfico anterior muestra las especificaciones recomendadas del adaptador. Si no sabes dónde puedes comprar el adaptador correcto, puedes elegir comprarlo directamente en el enlace de abajo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>
:::

Para encender tu dispositivo Watcher, presiona y mantén presionado el botón de rueda ubicado en la esquina superior derecha durante aproximadamente 3 segundos hasta que el logo de Seeed Studio aparezca en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

Una vez que el logo se muestre, suelta el botón y permite que el dispositivo complete su proceso de inicialización. Después de unos momentos, el Watcher mostrará su menú principal, indicando que está listo para usar.

:::tip
Si el dispositivo no se enciende con una pulsación larga, el dispositivo puede estar bajo de energía y puede que necesites conectar un cable para alimentarlo antes de que puedas despertar el Watcher.
:::

### Apagado

Para apagar el Watcher, necesitas acceder al menú de Configuración. Usando el botón de rueda, navega a la opción de Configuración y presiona el botón para entrar al menú. Una vez dentro, desplázate hacia abajo a la opción de Apagar y presiona el botón de rueda para seleccionarla. Finalmente, desliza el control deslizante de izquierda a derecha para confirmar el proceso de apagado, y el Watcher se apagará.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:650, height:'auto'}}/></div>

:::tip
Si tu Watcher está conectado a un cable de alimentación, el botón de Apagar del dispositivo se convierte en un botón de Reiniciar, en cuyo punto el dispositivo no está permitido apagarse. De manera similar, un dispositivo que está apagado se encenderá automáticamente cuando se conecte el cable de alimentación.
:::

En la parte inferior de tu dispositivo Watcher, encontrarás un pequeño orificio. Este orificio proporciona acceso al botón de apagado por hardware, que te permite apagar el dispositivo cuando sea necesario.

Para apagar tu Watcher usando el botón de hardware, sigue estos pasos:

1. Localiza un objeto delgado y puntiagudo, como un clip o una aguja pequeña.

2. Inserta cuidadosamente el objeto puntiagudo en el pequeño orificio en la parte inferior de tu Watcher.

3. Presiona suavemente el botón de apagado dentro del orificio y tu Watcher se apagará.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off_button.gif" style={{width:650, height:'auto'}}/></div><br />

:::note
Es importante ejercer precaución cuando uses un objeto puntiagudo para presionar el botón de reinicio. Sé suave y evita aplicar fuerza excesiva para prevenir daños al dispositivo.

Ten en cuenta que realizar un reinicio por hardware no borrará ningún dato de usuario almacenado en tu Watcher. La operación de reinicio está diseñada para reiniciar el dispositivo en caso de cualquier problema relacionado con el software o si el dispositivo se vuelve no responsivo.

Si encuentras problemas persistentes con tu Watcher que no se resuelven con un reinicio por hardware, puede que necesites considerar realizar un reinicio de fábrica a través del menú de configuración del dispositivo. Sin embargo, ten en cuenta que un reinicio de fábrica borrará todos los datos de usuario, por lo que solo debe usarse como último recurso.

Recuerda manejar tu Watcher con cuidado y solo usar el botón de reinicio por hardware cuando sea necesario para asegurar la longevidad y el funcionamiento adecuado de tu dispositivo.
:::

### Lógica Operativa

La lógica operativa del Watcher gira en torno al botón de rueda, que sirve como el medio principal de navegación y selección. Rotar el botón de rueda en sentido antihorario te permite moverte hacia arriba o a la izquierda dentro de los menús, mientras que rotarlo en sentido horario te permite moverte hacia abajo o a la derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/logic.gif" style={{width:650, height:'auto'}}/></div>

<br />

Para confirmar una selección o ingresar a un submenú, simplemente presiona el botón de la rueda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:650, height:'auto'}}/></div>

<br />

Sin embargo, es importante tener en cuenta que en ciertas situaciones donde puede haber potencial para ambigüedad operacional, la lógica de selección y confirmación del botón de la rueda puede desviarse de este estándar. En tales casos, la interfaz de pantalla táctil proporciona un medio alternativo de interacción, permitiéndote completar la acción deseada tocando los elementos apropiados en pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/touch.gif" style={{width:650, height:'auto'}}/></div><br />

A lo largo de la Wiki, se proporcionarán instrucciones específicas para navegar y seleccionar opciones dentro de cada menú, teniendo en cuenta cualquier excepción a la lógica general del botón de la rueda. Al familiarizarte tanto con los controles del botón de la rueda como de la pantalla táctil, podrás operar eficientemente tu dispositivo Watcher y acceder a sus diversas características y configuraciones.

### Push to Talk

La función Push to Talk del Watcher te permite interactuar con el dispositivo usando comandos de voz desde cualquier pantalla o interfaz. Simplemente mantén presionado el Botón de la Rueda ubicado en la esquina superior derecha del dispositivo para activar la interfaz de entrada de voz. Mientras mantienes presionado el botón, habla tu comando o mensaje, como asignar una tarea o iniciar una conversación. Una vez que sueltes el botón, el Watcher procesará tu entrada de voz y responderá en consecuencia. Si se necesita mayor aclaración, mantén presionado el botón nuevamente para proporcionar entrada de voz adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

:::tip
1. Actualmente el diálogo de voz solo soporta el uso del inglés. Ten en cuenta que si usas otros idiomas, pueden ocurrir situaciones inesperadas.

2. Si inicias un diálogo mientras Watcher está ejecutando una tarea, entonces Watcher primero pausará la tarea actual, y luego volverá a ingresar a tu tarea original una vez que el diálogo termine.

3. Para saber cómo asignar tareas, lee primero el tutorial **[Cómo asignar tareas a Watcher](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/)**.
:::

## Resumen de Funciones

El Watcher ofrece cuatro opciones principales de menú: **Plantillas de Tareas**, **Tarea Actual**, **Extensión** y **Configuración**. Estos menús proporcionan acceso a varias características y funciones del dispositivo.

### Plantillas de Tareas

El menú de Plantillas de Tareas contiene una selección de tareas preconfiguradas que están listas para usar. Estas tareas incluyen detección humana, detección de mascotas y detección de gestos. Al elegir una de estas plantillas, puedes configurar rápidamente el Watcher para realizar la tarea deseada sin necesidad de configuración extensa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

### Tarea Actual

La opción de menú Tarea Actual proporciona una manera conveniente de acceder y gestionar la tarea que se está ejecutando activamente en el Watcher. Si necesitas navegar fuera de la tarea actual para ajustar configuraciones del dispositivo como volumen, brillo o interruptor de luz LED, puedes regresar fácilmente a tu tarea seleccionando la opción Tarea Actual del menú principal, asegurando una experiencia de usuario fluida y eficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

### Extensión

El menú de Extensión, actualmente accesible en el Watcher, sirve como un centro para mostrar datos de un rango selecto de sensores Grove conectados, específicamente el **[Grove SHT41](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT41-p-5383.html)**, **[Grove SHT40](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)** y **[Grove SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)**.

Esta característica permite a los usuarios integrar sin problemas uno de estos sensores Grove compatibles a la vez con su dispositivo Watcher, habilitando monitoreo en tiempo real y visualización de datos del sensor. Al navegar al menú de Extensión, los usuarios pueden ver los valores y lecturas de su sensor conectado, empoderándolos para recopilar información y tomar decisiones informadas basadas en los datos recolectados.

Mientras la plataforma Watcher continúa evolucionando, el menú de Extensión puede expandirse para incluir soporte para una gama más amplia de sensores Grove y características y funcionalidades adicionales, mejorando aún más las capacidades del dispositivo y la experiencia del usuario. Mantente atento a actualizaciones y anuncios sobre futuras mejoras al menú de Extensión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/connect_grove.gif" style={{width:700, height:'auto'}}/></div>

### Configuración

Por último, el menú de Configuración es donde puedes acceder y modificar las configuraciones generales del Watcher. Este menú proporciona opciones para personalizar varios aspectos del dispositivo, como brillo de pantalla, volumen de sonido, configuraciones de conectividad y más. Al explorar el menú de Configuración, puedes adaptar el rendimiento y comportamiento del Watcher a tus preferencias, asegurando una experiencia de usuario personalizada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>

## Configuración del Watcher

Esta guía te llevará a través de las diversas opciones de configuración disponibles en tu dispositivo Watcher y explicará sus funciones.

- **Conectar App**:
   - La configuración de Conectar App te permite establecer una conexión entre tu Watcher y una aplicación móvil complementaria.
   - Al conectar tu Watcher a la app, puedes acceder a características adicionales, capacidades de control remoto y recibir notificaciones en tu dispositivo móvil.

- **Wi-Fi**:
   - La configuración de Wi-Fi en el dispositivo Watcher muestra información sobre la red inalámbrica actualmente conectada.
   - Si no se ha configurado ninguna red, la configuración de Wi-Fi no mostrará ninguna información.
   - Ten en cuenta que la configuración de redes Wi-Fi solo se puede hacer a través de la aplicación móvil complementaria y no es compatible en el dispositivo Watcher mismo.

- **Bluetooth**:
   - La configuración de Bluetooth te permite activar o desactivar la funcionalidad Bluetooth.

- **Sonido**:
   - La configuración de Sonido te permite ajustar el volumen de la salida de audio de tu Watcher.
   - Puedes aumentar o disminuir el volumen para adaptarlo a tus preferencias o entorno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:650, height:'auto'}}/></div>

<br />

- **Brillo**:
   - La configuración de Brillo te permite controlar el nivel de brillo de la pantalla de tu Watcher.
   - Ajustar el brillo puede ayudar a mejorar la visibilidad en diferentes condiciones de iluminación y conservar la vida de la batería.

- **Luz RGB**:
   - La configuración de Luz RGB es un interruptor que te permite encender o apagar la luz indicadora LED.

- **Acerca del Dispositivo**:
   - La sección Acerca del Dispositivo proporciona información importante sobre tu Watcher, como el número de modelo, versión del firmware y número de serie.
   - Esta información puede ser útil al solucionar problemas o verificar actualizaciones disponibles.

- **Apagar/Reiniciar**:
   - La configuración de Apagar/Reiniciar te permite reiniciar o apagar tu dispositivo Watcher, dependiendo de la fuente de alimentación.
   - Cuando el Watcher está conectado a una fuente de alimentación, se mostrará la opción "Reiniciar", permitiéndote reiniciar el dispositivo. No se permite apagar mientras esté conectado a la alimentación.
   - Cuando el Watcher está funcionando con batería, la opción "Apagar" estará disponible, permitiéndote apagar el dispositivo.

- **Restablecimiento de Fábrica**:
   - La opción de Restablecimiento de Fábrica restaura tu Watcher a su configuración original de fábrica.
   - Esta acción borrará todos los datos del usuario, preferencias y configuraciones, devolviendo el dispositivo a su estado predeterminado.
   - Usa esta opción con precaución, ya que no se puede deshacer, y necesitarás configurar tu Watcher nuevamente después de un restablecimiento de fábrica.

Al familiarizarte con estas opciones de configuración, puedes personalizar y optimizar tu experiencia con el Watcher para que se adapte mejor a tus necesidades. Ten en cuenta que ciertas configuraciones, como la configuración de Wi-Fi y Bluetooth, solo se pueden acceder y modificar a través de la aplicación móvil complementaria.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

