---
description: You will gain a solid foundation in understanding the different types of tasks that Watcher can perform and how they are organized within the SenseCraft ecosystem.
title: Guía para Asignar Tareas
image: https://files.seeedstudio.com/wiki/watcher_getting_started/85_1.webp
slug: /es/getting_started_with_watcher_task
sidebar_position: 3
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía para Asignar Tareas en SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/85.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquiere uno ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Video de Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio en Github</font></span></strong>
    </a>
</div><br />

Bienvenido al tutorial sobre cómo asignar tareas a Watcher. En esta guía, te acompañaremos en el proceso de emitir comandos a Watcher para que puedas aprovechar eficazmente sus capacidades para tus necesidades de monitoreo.

Watcher es una herramienta potente que depende de comandos emitidos por el usuario para realizar diversas tareas de monitoreo y análisis. Al enviar instrucciones precisas a Watcher, puedes indicarle que se enfoque en objetivos específicos, recopile datos y proporcione información valiosa.

En las siguientes secciones, profundizaremos en la categorización de tareas, selección de modelos e información sobre precios. Nuestro objetivo es dotarte del conocimiento y las habilidades necesarias para asignar tareas eficientemente y sacar el máximo provecho de sus funcionalidades. Exploraremos los diferentes tipos de tareas disponibles, te guiaremos para seleccionar los modelos adecuados según tus requerimientos y aclararemos los costos asociados.

Al finalizar este tutorial, tendrás un entendimiento sólido sobre cómo comunicar eficazmente tus necesidades de monitoreo a Watcher. Podrás asignar tareas con confianza, personalizar configuraciones y obtener los resultados deseados.

Prepárate para tomar el control de Watcher y desbloquear todo su potencial. ¡Empecemos este recorrido de asignación de tareas y descubre cómo Watcher puede ayudarte a cumplir tus objetivos de monitoreo!

## Configuración Avanzada de SenseCAP Watcher

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher es el primer agente físico LLM para lugares inteligentes, capaz de monitorear escenas, activar acciones e interactuar con base en comandos. Este video presenta cómo SenseCAP Watcher selecciona modelos basados en análisis de tareas: modelos locales y LLM. También muestra cómo configurar la luz RGB, alertas de pantalla y sonido, y modos de notificación: APP, UART, HTTP.

## Concepto de la Tarea

Para empezar con Watcher y que entienda lo que quieres que haga, debes leer este artículo sobre tareas y lo que se debe y no se debe hacer al colocarlas.

### Tres componentes principales de las tareas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_1.png" style={{width:1000, height:'auto'}}/></div>

Una tarea de Watcher consiste en tres componentes principales:

- **Objeto**: El objeto especificado influye directamente en el modelo de reconocimiento local que Watcher invoca. Si el modelo no está disponible en SenseCraft AI, se utiliza directamente el motor de modelos grandes basado en la nube.

- **Acción (Opcional)**: La presencia o ausencia de una descripción de acción en la instrucción determina si Watcher invoca el motor de modelos grandes en la nube.

- **Acción a ejecutar**: La acción que se ejecuta al activarse la tarea, por ejemplo, parpadeo de luz RGB, notificación push, sonido del Watcher, SNS, etc.

Estos componentes trabajan juntos para definir el comportamiento de Watcher cuando se activa una tarea específica. Combinando objeto, acción opcional y acción deseada, los usuarios pueden crear tareas personalizadas para sus necesidades de monitoreo.

:::caution
Los ejemplos de tareas mostrados son para facilitar la lectura y comprensión, la sintaxis y condiciones no deben ser necesariamente exactas a las imágenes, pero asegúrate que las instrucciones de tarea contengan los tres componentes mencionados.
:::

A continuación, veremos algunos ejemplos para entender conceptos y servicios invocados.

### Servicio Local AI de Watcher

Cuando se establece "persona" como objeto en una tarea Watcher, el dispositivo selecciona automáticamente el modo Servicio Local AI. En este modo, Watcher verifica si existe un modelo pre-entrenado para detección de personas en la biblioteca SenseCraft AI. Si existe, Watcher lo descarga y realiza la detección localmente, sin depender de servicios en la nube.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_2.png" style={{width:1000, height:'auto'}}/></div>

La imagen ilustra este proceso. Al especificar persona, Watcher llama al **modelo local AI** para detección en tiempo real. Si detecta una persona, Watcher ejecuta la acción especificada, que en este caso es reproducir el sonido "Hola, soy Watcher" en el altavoz.

Con el Servicio Local AI, Watcher detecta personas eficientemente y de forma independiente, sin conexión constante a la nube ni uso de modelos grandes. Esto asegura respuesta rápida y privacidad, ya que todo el procesamiento es local.

Si el modelo requerido no está disponible localmente, Watcher cambia a usar servicios LLM basados en la nube para la detección. Este mecanismo asegura que el dispositivo pueda cumplir su función aunque no exista un modelo local. Ver [Modo Pure LLM](#pure-llm-mode).

Si colocas una tarea que se evalúa para usar Servicios Local AI, en la app SenseCraft la configuración de la tarea se verá más o menos así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local-app.png" style={{width:1000, height:'auto'}}/></div>

### Servicio LLM basado en la nube de Watcher

#### Servicio Pure Cloud-based LLM

Si configuras "vela" como objeto en una tarea Watcher, pero no hay modelos pre-entrenados para vela en la biblioteca SenseCraft AI, el dispositivo **cambiará automáticamente a usar el servicio LLM basado en la nube para la detección**.

:::danger
Pueden aplicarse tarifas por usar algunos servicios SenseCraft AI, consulta la documentación para más detalles:

**[Planes y beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_3.png" style={{width:1000, height:'auto'}}/></div>

Como muestra la imagen, cuando Watcher detecta una vela usando el servicio LLM, ejecuta la acción especificada: enviar una notificación push a la app móvil. **Esto garantiza que el usuario reciba alertas oportunas sobre la presencia de la vela, aunque la detección no sea local**.

El uso del servicio LLM en la nube permite identificar objetos y ejecutar acciones adecuadas incluso sin modelos locales, aumentando la versatilidad del dispositivo.

Es importante notar que este modo puede tener tiempos de respuesta un poco más lentos, ya que el procesamiento es remoto y requiere conexión activa a internet.

:::note
Los usuarios solo necesitan entender los tres modos de tarea sin profundizar en todo el proceso. La introducción de estos modos es para que no haya confusión al ver diferentes interfaces en la configuración. Cada modo tiene su página de configuración propia, y el usuario debe seguir las instrucciones según sus necesidades para configurar las tareas.
:::

Si colocas una tarea que se evalúa para usar pure LLM, en la app SenseCraft la configuración de la tarea se verá más o menos así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

Además de configuración y ejecución, el Servicio Pure Cloud-based LLM permite interactuar en conversaciones puramente textuales con el modelo LLM.

Esta función permite interactuar directamente con el LLM sin necesidad de dispositivo Watcher ni entrada de imágenes. Puedes escribir mensajes o consultas y el LLM responderá. Ver [Escribe la tarea](#type-the-task) para más detalles.

#### Servicio Local AI + LLM basado en la nube

El tercer modo de operación combina el servicio Local AI con el servicio LLM en la nube. **Este modo aplica cuando el Local AI detecta el objeto, pero se requiere análisis adicional del LLM para determinar comportamiento o estado del objeto**.

:::danger
Pueden aplicarse tarifas por usar algunos servicios SenseCraft AI, consulta la documentación para más detalles:

**[Planes y beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_4.png" style={{width:1000, height:'auto'}}/></div>

En el ejemplo, el objeto es "gato" y la acción es "luz intermitente". Cuando Watcher detecta un gato con su modelo local para mascotas, llama al servicio LLM para analizar si el gato está "comiendo".

Si el LLM confirma que está comiendo, Watcher ejecuta la acción, en este caso hacer parpadear la luz RGB.

Esta combinación permite detección y análisis más sofisticados, entendiendo no sólo objetos sino su comportamiento o estado.

Si colocas una tarea que se evalúa para usar local + LLM, en la app SenseCraft la configuración de la tarea se verá más o menos así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

### Resumenes

Aquí tienes una tabla comparativa de los tres modos basada en eficiencia, costo y recomendación:

<div class="table-center">
	<table align="center">
		<tr>
            <th rowspan="2"> </th>
			<th>Servicio totalmente local</th>
			<th colspan="2">Dependencia de servicios en la nube</th>
		</tr>
        <tr>
            <th>Servicio Local AI</th>
			<th>Servicio LLM basado en la nube</th>
			<th>Servicio Local AI + LLM en la nube</th>
		</tr>
		<tr>
            <th>Eficiencia</th>
			<td align="center">Tiempo de alarma: <strong>2s</strong><br />Intervalo mínimo para activar alarma: <strong>5s</strong></td>
			<td align="center">Tiempo de alarma: <strong>10s</strong><br />Intervalo mínimo para activar alarma: <strong>30s</strong></td>
			<td align="center">Tiempo de alarma: <strong>10s</strong><br />Intervalo mínimo para activar alarma: <strong>30s</strong></td>
		</tr>
		<tr>
            <th>Costo</th>
			<td align="center">❎</td>
			<td align="center">☑️</td>
			<td align="center">☑️</td>
		</tr>
		<tr>
            <th>Cómo elegir</th>
            <td><strong>Ventaja</strong>: se basa totalmente en el servicio Local AI de Watcher, sin gastos adicionales, con reconocimiento y respuesta más rápidos. Si hay modelo objetivo, teóricamente la precisión será mayor.<br /><strong>Contras</strong>: Si no tienes modelo, no puedes usarlo. Tampoco permite sólo servicio local si se requiere análisis de comportamiento.</td>
            <td><strong>Ventajas</strong>: Reconoce amplia variedad de objetos aunque no haya modelos preentrenados en SenseCraft AI. Ideal para tareas que requieren análisis de comportamiento.<br /><strong>Contras</strong>: Requiere conexión activa a internet. Puede tener costos adicionales por uso de servicios en nube, especialmente tras la fase pública gratuita. Respuesta un poco más lenta que el modo Local AI.</td>
            <td><strong>Ventajas</strong>: Comparado con solo LLM en nube, usa el servicio Local AI para filtrar objetos no específicos antes de llamar al LLM. Para objetos con modelos disponibles pero no siempre presentes, reduce costos al analizar en nube solo imágenes con objetos identificados.<br /><strong>Contras</strong>: Puede tener costos adicionales combinando servicios local y en nube, aunque menores que sólo LLM en nube. Requiere internet activo para análisis en nube. Respuesta global un poco más lenta que Local AI.</td>
		</tr>
	</table>
</div>

1. El significado de "Tiempo de alarma" varía según el modo:

    - **Modo Servicio Local AI**:  
      "Tiempo de alarma" indica cuánto tiempo permanecen activos las luces RGB o el altavoz del Watcher tras activar la alarma.

    - **Modo Servicio LLM en la nube**:  
      "Tiempo de alarma" indica además del tiempo de luces y altavoz, la duración en que la pantalla de la cámara queda pausada, para dar tiempo a transferir la imagen al servidor en la nube para análisis.

2. El ajuste "Intervalo mínimo para activar alarma" es independiente del "Tiempo de alarma" y no implica secuencia. Define el tiempo mínimo entre dos activaciones consecutivas de alarma. Al configurar la tarea, **no se puede fijar un tiempo de alarma menor a este intervalo**, asegurando que el sistema tenga tiempo suficiente para procesar y responder cada evento, evitando alarmas excesivas y manteniendo operación estable.

:::danger
Pueden aplicar tarifas por usar algunos servicios SenseCraft AI, consulta la documentación para detalles:

**[Planes y beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/watcher_price/)**
:::

## Colocar tareas vía SenseCraft APP

Después de entender la clasificación y conceptos básicos, veamos cómo emitir comandos a Watcher en la SenseCraft APP con todo detalle. Asumamos que ya completaste el emparejamiento y estás en la página de chat del Watcher. Si no sabes cómo enlazar un dispositivo, revisa [Emparejamiento de dispositivos y actualización OTA](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/workflow.png" style={{width:1000, height:'auto'}}/></div>

### Escribe la tarea

Cada dispositivo Watcher tiene su ventana de chat dedicada en la SenseCraft APP. Para dar comandos, entra a su chat y usa el campo de texto para escribir el comando. Puedes escribir manualmente o usar el dictado por voz del teclado para mayor comodidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/21.png" style={{width:250, height:'auto'}}/></div>

Al componer el comando, es fundamental dar instrucciones claras y detalladas para que Watcher entienda y ejecute la tarea correctamente. Tu comando debe incluir:

- El objeto u objetos que deseas que Watcher reconozca.

- Acciones o comportamientos adicionales asociados a dichos objetos, si aplica.

- La acción o respuesta que esperas de Watcher tras la detección exitosa.

Instrucciones completas permiten a Watcher comprender y realizar la tarea eficazmente. Sé específico y descriptivo para mejores resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/22.png" style={{width:250, height:'auto'}}/></div>

Además de configurar y ejecutar tareas, el Servicio Pure Cloud-based LLM permite a usuarios mantener conversaciones puramente textuales con el modelo de lenguaje (LLM).

La función de chat basada en texto abre nuevas posibilidades para interactuar con el LLM directamente, sin necesidad de dispositivo Watcher ni entrada de imágenes. Puedes hacer preguntas, pedir ayuda o explorar capacidades del modelo de forma sencilla e intuitiva.

Aprovecha esta función cuando requieras información, guía o simplemente una charla informativa con el LLM.

:::danger
Pueden aplicar tarifas por usar algunos servicios SenseCraft AI, consulta la documentación para detalles:

**[Planes y beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/watcher_price/)**
:::

### Identificar o configurar tareas para desglosar

Después de ingresar el comando de tarea, sigue estos pasos para confirmar y ejecutar el comando:

1. Haz clic en el botón **Enviar** ubicado en la esquina inferior derecha de la ventana de chat para enviar tu comando.

2. El sistema backend procesará y desglosará tu comando de tarea en sus partes constituyentes.

3. Se te devolverá una pequeña tarjeta que muestra la interpretación que Watcher hizo de tu tarea. La tarjeta muestra principalmente:

   - **Cuándo**: Las condiciones o disparadores que iniciarán la ejecución de la tarea.  
   - **Hacer**: Las acciones o respuestas que Watcher ejecutará tras reconocer el objeto.  
   - **Frecuencia de captura**: El intervalo de tiempo con que se activará y ejecutará la tarea.

4. Revisa la información en la tarjeta para asegurarte de que Watcher haya comprendido correctamente tu instrucción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div>

5. Si estás satisfecho con la interpretación de Watcher, haz clic en el botón **Ejecutar (Run)** de la tarjeta para desplegar la tarea en Watcher y comenzar su ejecución.

6. (Opcional) Para revisar más a fondo el desglose, haz clic en **Configuración Detallada (Detail Config)** en la tarjeta. Esto te dará más detalles de la configuración.

    Si detectas alguna mala interpretación o deseas modificar la configuración, usa esta opción para ajustar manualmente según tus necesidades. Como se describió en el capítulo [Concepto de la Tarea](#concept-of-the-task), la página de Configuración Detallada varía según el modo. Solo debes seleccionar o modificar los ítems según el caso.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/24.png" style={{width:800, height:'auto'}}/></div>

    En la sección de "Configuración Detallada" puedes afinar varios ajustes para personalizar la tarea. Aquí un resumen:

    1. **Usar Modelo Local**:  
    - Aparece si la tarea requiere uso de servicios locales AI.  
    - El sistema selecciona automáticamente el modelo adecuado de la librería SenseCraft AI según tu tarea.  
    - Puedes desactivar el uso de servicio local, lo que hará que se use directamente el servicio en la nube para análisis de imagen.  
    - También puedes cambiar manualmente el modelo entre los públicos de la librería.  
    - Nota: Si la tarea es completamente local, no puedes desactivar esta opción.<br /><br />

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/25.png" style={{width:250, height:'auto'}}/></div>

    2. **Escenario**:  
    - Muestra las condiciones que disparan la acción.  
    - Puedes ajustar el número de clases y modificar las condiciones de activación.  
    - Si el escenario es más complejo, puedes agregar condiciones adicionales.<br /><br />

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/26.png" style={{width:600, height:'auto'}}/></div>

    3. **Acción**:  
    - Configura el comportamiento del Watcher tras activarse la alarma.  
    - Especifica las acciones: encender luces RGB, reproducir sonidos, enviar notificaciones, etc.<br /><br />

    4. **Frecuencia de Captura**:  
    - Define el intervalo de tiempo para la ejecución periódica de la tarea.  
    - Ajusta según el intervalo deseado y requisitos de monitoreo.<br /><br />

    :::caution
    En "Configuración Detallada" el valor por defecto para **Frecuencia de Captura** se ajusta automáticamente.  
    Para Watcher con servicio LLM en la nube, la frecuencia **no puede ser menor a 60 segundos**.  
    Si usas servicio AI local, esta opción no estará disponible porque la alerta es en tiempo real.
    :::

    5. **Horario de Trabajo**:  
    - Define el rango horario en que la tarea estará activa.  
    - Especifica la hora de inicio y fin para que la monitorización ocurra solo en ese periodo.  
    - Nota: Para funcionar bien, el reloj interno del Watcher debe estar sincronizado con el tiempo del sistema móvil. Desincronizaciones pueden afectar el flujo de la tarea.<br />

    Al explorar y configurar estos ajustes, puedes personalizar la tarea para que se ajuste a tus necesidades específicas. Revisa y ajusta cada parámetro para optimizar rendimiento y alineación con tus objetivos.

7. Una vez verificado todo y conforme a tus expectativas, haz clic en **Ejecutar (Run)** para iniciar la tarea.

Siguiendo estos pasos, garantizas que Watcher entienda tu comando y la ejecución sea acorde a tus objetivos. Este proceso de confirmación permite revisar y corregir antes de desplegar la tarea.

### Ejecutar tarea

Tras revisar y configurar la tarea en "Configuración Detallada", estás listo para desplegarla en Watcher. Para iniciar la ejecución:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/27.png" style={{width:800, height:'auto'}}/></div>

1. Pulsa el botón **Ejecutar (Run)** en la tarjeta de configuración de tarea.

2. Al hacerlo, la tarea configurada se transmitirá a Watcher vía red.

3. El despliegue puede tardar algo, pues incluye:

   - Recepción de tarea: Watcher recibe y procesa la configuración enviada desde la app SenseCraft.  
   - Descarga de modelo (si aplica): Si la tarea requiere servicios AI locales, Watcher descargará los modelos necesarios para funcionar localmente.

4. Durante el despliegue puedes monitorear el progreso en la app SenseCraft:

   - El estado de la tarjeta mostrará la etapa actual.  
   - Observa las actualizaciones para seguir recepción y descarga (si aplica).

5. Cuando finalice el despliegue, notarás un cambio en Watcher:

   - Mostrará una expresión de monitoreo o indicará que está listo para empezar la tarea.  
   - Esto indica que la ejecución ha comenzado.

### Ver tareas actuales y revisar alarmas

La app SenseCraft facilita monitorear el estado y progreso de tus tareas en ejecución, así como revisar alarmas disparadas y sus imágenes clave.

- Aquí verás la tarea activa en tu Watcher.

- La tarea se representa con una tarjeta pequeña que indica el nombre y el dispositivo Watcher asociado.

- La tarjeta muestra si la tarea está activa o no, para darte una vista rápida del estado.

Cuando una tarea dispare una alarma según las condiciones, la app te notificará mediante notificaciones push o alertas internas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/28.png" style={{width:250, height:'auto'}}/></div>

En la sección "Historial de Detecciones (Detect History)" verás una lista de todas las alarmas disparadas por tareas activas. Cada alarma aparece como tarjeta o ítem con información como nombre de tarea, dispositivo Watcher, hora y breve descripción del evento. Toca la tarjeta para ver más detalles, incluyendo imágenes clave asociadas.

Las imágenes clave son capturadas en el momento que se activó la alarma, dando evidencia visual del evento detectado. Puedes revisar estas imágenes para analizar la situación y tomar acciones si es necesario. La app puede ofrecer opciones para reconocer o descartar alarmas, según preferencias y gravedad.

### Finalizar una tarea

Cuando necesites detener una tarea en ejecución en tu dispositivo Watcher, tienes dos opciones prácticas:

**Opción 1: Finalizar la tarea desde la app SenseCraft**

1. Abre la app SenseCraft en tu móvil y ve a la sección **"Tareas actuales (Current Tasks)"**.  
2. Localiza la tarjeta de la tarea que está en ejecución y pulsa el botón **END**.  
3. La app enviará la orden para detener la tarea en Watcher y la tarjeta se actualizará para reflejar que la tarea terminó.

**Opción 2: Finalizar la tarea directamente en Watcher**

1. Toca ligeramente la pantalla del Watcher o presiona el botón de rueda (scroll wheel) para desplegar el menú u opciones.  
2. Selecciona la opción **"End Task"** para que Watcher termine la tarea y vuelva al estado de espera.  
3. La tarjeta de la tarea en la app SenseCraft se actualizará automáticamente para mostrar que la tarea terminó.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/29.png" style={{width:250, height:'auto'}}/></div><br />

Ambos métodos son sencillos e intuitivos para detener la tarea cuando sea necesario. Elige el que te resulte más cómodo según la situación y tu cercanía al dispositivo.

## Enviar tareas por voz

Watcher cuenta con una función práctica e intuitiva llamada **Push to Talk**, que permite enviar tareas mediante comandos de voz desde cualquier pantalla o interfaz del dispositivo. Aquí tienes una guía paso a paso para usar esta función:

1. **Activar Push to Talk**:

   - Ubica el botón de rueda (Wheel Button) en la esquina superior derecha de Watcher.  
   - Presiona y mantén pulsado este botón para activar la interfaz de entrada por voz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. **Habla tu comando o mensaje**:

   - Mientras mantienes presionado el botón, di claramente la tarea o mensaje que quieres asignar a Watcher.  
   - Puedes pedir tareas como: _"Dime si el bebé está llorando"_ o _"Si el perro está robando comida, di para el ladrón"_.  
   - También puedes tener una conversación, por ejemplo: _"Cuéntame un chiste"_.

3. **Suelta el botón de rueda**:

   - Al terminar de hablar, suelta el botón.  
   - Watcher procesará la entrada de voz y decidirá si es un comando para tarea o una conversación.

4. **Asignación de tarea**:

   - Si Watcher reconoce la voz como tarea, desglosará automáticamente la tarea en sus componentes:  
     - **Objeto** a monitorear  
     - **Comportamiento** a observar  
     - **Notificación** para alertarte  
     - **Horario** de monitoreo  
     - **Frecuencia** del monitoreo  
   - Revisa la información que se muestra para verificar que represente correctamente tu intención.  
   - Si todo es correcto, confirma para que Watcher inicie la ejecución según los parámetros dados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

**Consejos para mejor uso:**

- Habla claro y a un ritmo moderado para mejor reconocimiento.  
- Acércate lo más posible al Watcher (unos **3 a 10 cm**) para optimizar precisión.  
- Reduce ruido ambiental para facilitar que Watcher entienda tus comandos.  
- Sé específico y conciso para que Watcher interprete bien tus tareas.  
- Si Watcher malinterpreta tu voz, vuelve a presionar el botón y corrige o aclara tu comando.

Gracias a Push to Talk, enviar tareas y conversar con Watcher es mucho más natural y eficiente.

:::note
Si ves un error **0x7002**, significa que la conexión de red del Watcher es deficiente y falló la llamada al servicio de audio. Cambia de red o ubicación y vuelve a intentarlo.
:::

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea óptima. Ofrecemos diversos canales de comunicación para atender tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


