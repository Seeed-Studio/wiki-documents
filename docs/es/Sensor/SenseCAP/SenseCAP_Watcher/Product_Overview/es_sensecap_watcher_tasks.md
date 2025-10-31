---
description: Obtendrás una base sólida para comprender los diferentes tipos de tareas que Watcher puede realizar y cómo se organizan dentro del ecosistema SenseCraft.
title: Guía de Asignación de Tareas
image: https://files.seeedstudio.com/wiki/watcher_getting_started/85_1.webp
slug: /es/getting_started_with_watcher_task
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---


# SenseCAP Watcher Guía de Asignación de Tareas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/85.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Video de Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio Github</font></span></strong>
    </a>
</div><br />

Bienvenido al tutorial sobre asignación de tareas a Watcher. En esta guía, te guiaremos a través del proceso de emitir comandos a Watcher, permitiéndote utilizar efectivamente sus capacidades para tus necesidades de monitoreo.

Watcher es una herramienta poderosa que depende de comandos emitidos por el usuario para realizar diversas tareas de monitoreo y análisis. Al enviar instrucciones precisas a Watcher, puedes dirigirlo para que se enfoque en objetivos específicos, recopile datos y proporcione información valiosa.

En las siguientes secciones, profundizaremos en los detalles de categorización de tareas, selección de modelos e información de precios. Nuestro objetivo es equiparte con el conocimiento y las habilidades necesarias para asignar tareas eficientemente a Watcher y aprovechar al máximo sus funcionalidades. Exploraremos los diferentes tipos de tareas disponibles, te guiaremos en la selección de los modelos apropiados para tus requerimientos y proporcionaremos claridad sobre los costos asociados.

Al final de este tutorial, tendrás una comprensión sólida de cómo comunicar efectivamente tus necesidades de monitoreo a Watcher. Podrás asignar tareas con confianza, personalizar configuraciones y obtener los resultados deseados.

¡Prepárate para tomar control de Watcher y desbloquear su potencial completo. Embarquémonos en este viaje de asignación de tareas y descubramos cómo Watcher puede ayudarte a lograr tus objetivos de monitoreo!

## SenseCAP Watcher Configuración Avanzada

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher es el primer agente LLM físico para lugares inteligentes, capaz de monitorear escenas, activar acciones e interactuar basándose en comandos. Este video introducirá cómo SenseCAP Watcher selecciona modelos de activación de escena basados en análisis de tareas: modelo en dispositivo y modelo LLM. También mostraremos cómo configurar la luz RGB y las alertas de Pantalla y Sonido, y el modo de notificación push: APP, UART, HTTP.

## Concepto de la Tarea

Para comenzar con Watcher y para que Watcher pueda entender lo que quieres que haga, tienes que leer este artículo sobre tareas y las cosas que se deben y no se deben hacer al colocar tareas.

### Tres componentes principales de las Tareas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_1.png" style={{width:1000, height:'auto'}}/></div>

Una tarea de Watcher consiste en tres componentes principales:

- **Objeto**: El objeto especificado influye directamente en el modelo de tarea de reconocimiento local invocado por Watcher. Si el modelo seleccionado no está disponible en SenseCraft AI, se llama directamente al motor de modelo grande basado en la nube para el reconocimiento.

- **Haciendo Algo (Opcional)**: La presencia o ausencia de una descripción de acción en la instrucción de la tarea determina si Watcher invoca el motor de modelo de lenguaje grande basado en la nube.

- **Acción**: La acción ejecutada al activar la tarea de Watcher. Ejemplos de acciones incluyen parpadeo de luz RGB, notificación push, sonido de Watcher, SNS, y más.

Estos componentes trabajan juntos para definir el comportamiento del Watcher cuando se activa una tarea específica. Al combinar el objeto, la descripción de acción opcional y la acción deseada, los usuarios pueden crear tareas personalizadas adaptadas a sus necesidades de monitoreo.

:::caution
Los ejemplos de tareas mostrados en las imágenes son solo para facilitar la lectura y comprensión, y la sintaxis y condiciones no necesariamente necesitan ser exactamente como se muestra en las imágenes, pero asegúrate de que las instrucciones de tarea que proporciones contengan los tres componentes mencionados anteriormente.
:::

A continuación, revisamos algunos ejemplos de tareas para entender algunos de los conceptos y servicios invocados.

### Servicio de IA Local de Watcher

Cuando se establece una persona como el objeto en una tarea de Watcher, el dispositivo selecciona automáticamente el modo de Servicio de IA Local. En este modo, Watcher primero verifica si un modelo preentrenado para detección de personas está disponible en la biblioteca de SenseCraft AI. Si el modelo existe, Watcher lo descarga y realiza la detección localmente en el propio dispositivo, sin depender de ningún servicio basado en la nube.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_2.png" style={{width:1000, height:'auto'}}/></div>

La imagen ilustra este proceso. Cuando se especifica una persona como el objeto, Watcher llama al **modelo de IA local** para la detección de personas. El modelo analiza la transmisión de video capturada por la cámara del dispositivo y detecta la presencia de una persona en **tiempo real**. Si se identifica una persona, el Watcher activa la acción especificada, que en este caso es reproducir el sonido "Hola, soy Watcher" a través del altavoz del dispositivo.

Al aprovechar el Servicio de IA Local, Watcher puede realizar la detección de personas de manera eficiente e independiente, sin la necesidad de una conexión constante a la nube o el uso de modelos de lenguaje grandes (LLMs). Esto asegura tiempos de respuesta rápidos y mantiene la privacidad del usuario, ya que todo el procesamiento ocurre localmente en el dispositivo.

Sin embargo, si el modelo de objeto requerido no está disponible en la biblioteca de SenseCraft AI, Watcher cambiará a usar servicios LLM basados en la nube para realizar la detección. Este mecanismo de respaldo asegura que el dispositivo aún pueda llevar a cabo sus tareas incluso si un modelo específico no está presente localmente. Ver [modo LLM puro](#pure-llm-mode).

Entonces, si colocas una tarea que se juzga que está usando Servicios de IA Local, entonces en la APP SenseCraft, la página de Configuración de Tarea se mostrará aproximadamente como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local-app.png" style={{width:1000, height:'auto'}}/></div>

### Servicio LLM Basado en la Nube de Watcher

#### Servicio LLM Puro Basado en la Nube

Si estableces "vela" como el objeto en una tarea de Watcher, pero no hay modelos preentrenados para detección de velas disponibles en la biblioteca de SenseCraft AI, el dispositivo **cambiará automáticamente a usar el servicio de Modelo de Lenguaje Grande (LLM) basado en la nube para la detección**.

:::danger
Pueden aplicarse tarifas por usar algunos de los servicios de SenseCraft AI, por favor consulta la documentación a continuación para más detalles:

**[Planes y Beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/es/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_3.png" style={{width:1000, height:'auto'}}/></div>

Como se muestra en la imagen, cuando el Watcher detecta una vela usando el servicio LLM, ejecuta la acción especificada, que en este caso es enviar una notificación push a la aplicación móvil conectada. **Esto asegura que el usuario sea alertado prontamente sobre la presencia de la vela, aunque el dispositivo no pudo realizar la detección localmente**.

Al aprovechar el poder de los servicios LLM basados en la nube, Watcher aún puede identificar objetos con precisión y activar acciones apropiadas, incluso cuando un modelo específico no está disponible en la biblioteca de SenseCraft AI. Este mecanismo de respaldo mejora la versatilidad del dispositivo y asegura que pueda adaptarse a una amplia gama de escenarios de detección.

Sin embargo, es importante notar que usar el servicio LLM basado en la nube puede resultar en tiempos de respuesta ligeramente más lentos comparado con la detección local, ya que los datos necesitan ser procesados remotamente. Además, este modo requiere una conexión activa a internet para que el dispositivo se comunique con los servicios en la nube.

:::note
Los usuarios solo necesitan tener un entendimiento básico de estos tres modos de tarea sin profundizar en el proceso completo y los detalles intrincados. La introducción de estos modos es para asegurar que los usuarios no se confundan o preocupen cuando encuentren diferentes interfaces de usuario durante la configuración de tareas. Cada modo tiene su página de configuración de aplicación única, que puede variar dependiendo del modo seleccionado. Los usuarios deben seguir las instrucciones basadas en sus requisitos específicos para configurar sus tareas de Watcher efectivamente.
:::

Si colocas una tarea que se juzga que está usando LLM puro, entonces en la APP SenseCraft, la página de Configuración de Tarea se mostrará aproximadamente como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

Además de las funciones de configuración y ejecución de tareas, el Servicio LLM Puro Basado en la Nube también permite a los usuarios participar en conversaciones puramente basadas en texto con el Modelo de Aprendizaje de Lenguaje (LLM).

Esta funcionalidad te permite interactuar con el LLM directamente, sin necesidad de un dispositivo Watcher o cualquier entrada basada en imágenes. Simplemente puedes escribir tus mensajes o consultas en la interfaz de chat, y el LLM responderá en consecuencia. Consulta [Escribir la tarea](#type-the-task) para más detalles.

#### IA Local + Servicio LLM Basado en la Nube

El tercer modo de operación para el dispositivo Watcher es una combinación del servicio de IA Local y el servicio LLM basado en la nube. **Este modo entra en juego cuando el servicio de IA local del Watcher reconoce el objeto especificado, pero requiere un análisis adicional del servicio LLM en la nube para determinar el comportamiento o estado del objeto**.

:::danger
Pueden aplicarse tarifas por usar algunos de los servicios de SenseCraft AI, consulta la documentación a continuación para más detalles:

**[Planes y Beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/es/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_4.png" style={{width:1000, height:'auto'}}/></div>

En el ejemplo mostrado en la imagen, el objeto está configurado como "gato" y la acción es "luz parpadeante". Cuando el Watcher detecta un gato usando su modelo de IA local para detección de mascotas, luego recurre al servicio LLM en la nube para analizar el comportamiento del gato y determinar si está "comiendo".

Si el servicio LLM en la nube confirma que el gato está efectivamente comiendo, el Watcher ejecuta la acción especificada, que en este caso es hacer parpadear la luz RGB en el dispositivo. Esta combinación de servicios locales y basados en la nube permite una detección y análisis más sofisticados, permitiendo al Watcher no solo identificar objetos sino también entender sus acciones o estados.

Al aprovechar tanto el servicio de IA Local como el servicio LLM en la nube, el Watcher puede manejar escenarios complejos que requieren múltiples niveles de análisis. El modelo de IA local primero detecta la presencia del objeto especificado, mientras que el servicio LLM en la nube proporciona contexto adicional y comprensión del comportamiento del objeto.

Si colocas una tarea que se juzga que está usando local + LLM, entonces en la APP SenseCraft, la página de Configuración de Tareas se mostrará aproximadamente como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

### Resúmenes

Aquí hay una tabla comparativa de los tres modos basada en eficiencia, costo y elección:

<div class="table-center">
	<table align="center">
		<tr>
            <th rowspan="2"> </th>
			<th>Servicio completamente local</th>
			<th colspan="2">Dependencia de servicios en la nube</th>
		</tr>
        <tr>
            <th>Servicio de IA Local</th>
			<th>Servicio LLM Basado en la Nube</th>
			<th>IA Local + Servicio LLM Basado en la Nube</th>
		</tr>
		<tr>
            <th>Eficiencia</th>
			<td align="center">Tiempo de alarma: <strong>2s</strong><br />Intervalo mínimo de tiempo para activar alarma: <strong>5s</strong></td>
			<td align="center">Tiempo de alarma: <strong>10s</strong><br />Intervalo mínimo de tiempo para activar alarma: <strong>30s</strong></td>
			<td align="center">Tiempo de alarma: <strong>10s</strong><br />Intervalo mínimo de tiempo para activar alarma: <strong>30s</strong></td>
		</tr>
		<tr>
            <th>Costo</th>
			<td align="center">❎</td>
			<td align="center">☑️</td>
			<td align="center">☑️</td>
		</tr>
		<tr>
            <th>Cómo Elegir</th>
            <td><strong>Ventaja</strong>: depende completamente del servicio de IA local del Watcher, sin gastos adicionales, y tiene tiempos de reconocimiento y respuesta más rápidos. Si hay un modelo específico, entonces teóricamente también habrá una mayor precisión de reconocimiento.<br /><strong>Contras</strong>: Si no tienes un modelo, no puedes usar el servicio. Tampoco es posible usar solo el servicio local si se requiere análisis de comportamiento de objetos.</td>
            <td><strong>Ventajas</strong>: Puede reconocer una amplia gama de objetos, incluso si no hay modelos pre-entrenados disponibles en la biblioteca de SenseCraft AI. Adecuado para tareas que requieren análisis de comportamiento de objetos.<br /><strong>Contras</strong>: Requiere una conexión activa a internet. Puede incurrir en costos adicionales por usar servicios basados en la nube, especialmente después de que termine la fase de pruebas públicas gratuitas. Tiempos de respuesta ligeramente más lentos comparado con el modo de Servicio de IA Local.</td>
            <td><strong>Ventajas</strong>: Comparado con el modo de Servicio LLM Basado en la Nube, este modo usa el Servicio de IA Local para filtrar objetos no específicos antes de llamar al Servicio LLM Basado en la Nube. Para objetos que no siempre están presentes pero tienen modelos disponibles, este modo puede reducir enormemente el costo de llamar al Servicio LLM Basado en la Nube al realizar análisis de comportamiento solo en imágenes que contienen los objetos identificados.<br /><strong>Contras</strong>: Puede aún incurrir en costos adicionales por usar el servicio LLM basado en la nube en combinación con el servicio de IA local, aunque los costos serían menores que usar el modo de Servicio LLM Basado en la Nube exclusivamente. Requiere una conexión activa a internet para el análisis de comportamiento basado en la nube. Tiempos de respuesta generales ligeramente más lentos comparado con el modo de Servicio de IA Local.</td>
		</tr>
	</table>
</div>

1. El significado de "Tiempo de Alarma" varía dependiendo del modo:

    - **Modo de Servicio de IA Local**:
        "Tiempo de Alarma" se refiere a la duración que las luces RGB del Watcher o el Altavoz permanecen activos después de que se activa una alarma.

    - **Modo de Servicio LLM basado en la Nube**:
        "Tiempo de Alarma" indica no solo la duración de la activación de las luces RGB y el Altavoz, sino también el tiempo que la pantalla de la cámara mostrada permanece pausada. Esta pausa tiene en cuenta el tiempo requerido para transferir la imagen al servidor en la nube para su análisis.

2. La configuración "Intervalo mínimo de tiempo para activar alarma" es independiente del "Tiempo de Alarma" y no representa una relación secuencial. Esta configuración especifica el tiempo mínimo que debe transcurrir entre dos activaciones de alarma consecutivas. Al configurar una tarea, los usuarios **no están permitidos** establecer un tiempo de alarma más corto que este intervalo mínimo. Esta limitación asegura que el sistema tenga tiempo suficiente para procesar y responder a cada evento de alarma antes de que otro pueda ser activado. Esta limitación asegura que el sistema tenga tiempo de procesamiento suficiente y previene activaciones de alarma excesivas o continuas, promoviendo una operación estable y confiable.

:::danger
Pueden aplicarse tarifas por usar algunos de los servicios de SenseCraft AI, por favor consulta la documentación a continuación para más detalles:

**[Planes y Beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/es/watcher_price/)**
:::


## Colocar tareas a través de la APP SenseCraft

Después de entender la clasificación y conceptos básicos de las tareas, echemos un vistazo más detallado a cómo emitir comandos al Watcher en la APP SenseCraft con todos los detalles. Asumamos que has completado el proceso de emparejamiento del Watcher y has llegado a la página de chat del Watcher. Si aún no sabes cómo vincular un dispositivo, por favor consulta [Vinculación de Dispositivo y Actualización OTA](https://wiki.seeedstudio.com/es/getting_started_with_watcher/#device-binding-and-ota-upgrade).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/workflow.png" style={{width:1000, height:'auto'}}/></div>

### Escribir la tarea

Cada dispositivo Watcher tiene su propia ventana de chat dedicada dentro de la APP SenseCraft. Para emitir comandos a un Watcher específico, navega a su ventana de chat y usa el campo de entrada para ingresar tu comando deseado. Puedes escribir el comando manualmente o usar la funcionalidad de entrada de voz de tu teclado para mayor comodidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/21.png" style={{width:250, height:'auto'}}/></div>

Al redactar un comando, es crucial proporcionar instrucciones claras y detalladas para asegurar que el Watcher entienda y ejecute la tarea con precisión. Tu comando debe incluir la siguiente información:

- El objeto específico u objetos que quieres que el Watcher reconozca.

- Cualquier acción adicional o comportamiento asociado con el/los objeto(s), si aplica.

- La acción deseada o respuesta que esperas del Watcher tras el reconocimiento exitoso.

Al proporcionar instrucciones comprensivas, permites que el Watcher comprenda efectivamente y lleve a cabo la tarea asignada. Recuerda ser tan específico y descriptivo como sea posible para lograr los mejores resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/22.png" style={{width:250, height:'auto'}}/></div>

Además de las características de configuración y ejecución de tareas, el Servicio LLM Puro basado en la Nube también permite a los usuarios participar en conversaciones puramente basadas en texto con el Modelo de Lenguaje de Aprendizaje (LLM).

La característica de chat basado en texto del Servicio LLM Puro basado en la Nube abre nuevas posibilidades para que los usuarios interactúen directamente con el LLM. Proporciona una manera conveniente de acceder al conocimiento y capacidades del LLM sin la necesidad de un dispositivo Watcher físico.

Ya sea que tengas preguntas, necesites asistencia con un tema particular, o simplemente quieras explorar las capacidades del LLM, la característica de chat basado en texto ofrece una manera fluida e intuitiva de comunicarse con el modelo de IA.

Siéntete libre de aprovechar esta característica cuando requieras información, orientación, o simplemente quieras participar en una conversación informativa con el LLM.

:::danger
Pueden aplicarse tarifas por usar algunos de los servicios de SenseCraft AI, por favor consulta la documentación a continuación para más detalles:

**[Planes y Beneficios de SenseCraft AI para Watcher](https://wiki.seeedstudio.com/es/watcher_price/)**
:::

### Identificar o configurar tareas para descomposición

Después de completar la entrada de tu comando de tarea, sigue estos pasos para confirmar y ejecutar el comando:

1. Haz clic en el botón **Enviar** ubicado en la esquina inferior derecha de la ventana de chat para enviar tu comando.

2. El sistema backend procesará y descompondrá tu comando de tarea en sus partes constituyentes.

3. Se te devolverá una pequeña tarjeta, mostrando la interpretación del Watcher de tu tarea. La tarjeta principalmente muestra la siguiente información:

   - **Cuándo**: Las condiciones o disparadores que iniciarán la ejecución de la tarea.
   - **Hacer**: Las acciones o respuestas que el Watcher realizará tras el reconocimiento exitoso del objeto.
   - **Frecuencia de Captura**: El intervalo de tiempo en el cual la tarea será activada y ejecutada.

4. Revisa la información en la tarjeta para asegurar que el Watcher haya entendido correctamente las instrucciones de tu tarea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div>

5. Si estás satisfecho con la interpretación del Watcher, haz clic en el botón **Ejecutar** en la tarjeta para desplegar la tarea al Watcher y comenzar la ejecución.

6. (Opcional) Para una revisión más detallada de la descomposición de la tarea, haz clic en el botón **Configuración Detallada** en la tarjeta. Esto te proporcionará información adicional sobre la configuración de la tarea.

Si descubres alguna interpretación errónea o deseas realizar cambios en la configuración de la tarea, utiliza la opción "Configuración Detallada" para modificar manualmente los ajustes según tus requisitos. Como se describe en el [capítulo Concepto de la Tarea](#concept-of-the-task), la página de Configuración Detallada varía de modo a modo. Solo necesitas seleccionar o modificar los elementos de configuración según la situación real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/24.png" style={{width:800, height:'auto'}}/></div>

En la sección "Configuración Detallada", puedes encontrar varios ajustes que te permiten afinar tu configuración de tarea. Aquí tienes una descripción general de los ajustes disponibles:

1. **Usar Modelo Local**:
- Este ajuste aparece cuando la tarea requiere el uso de servicios de IA locales.
- El sistema selecciona automáticamente el modelo apropiado de la biblioteca SenseCraft AI basándose en tu tarea proporcionada.
- Tienes la opción de deshabilitar el uso de servicios de IA locales, lo que resultará en la utilización directa de servicios basados en la nube para el análisis de imágenes.
- También puedes modificar manualmente la selección del modelo y elegir entre los modelos disponibles públicamente en la biblioteca SenseCraft AI.
- Ten en cuenta que si la tarea es completamente local, no se te permite deshabilitar la opción "Usar Modelo Local".<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/25.png" style={{width:250, height:'auto'}}/></div>

2. **Escenario**:
- Esta sección muestra las condiciones de activación para la Acción.
- Puedes ajustar el número de clases y modificar las declaraciones de activación según tus requisitos.
- Si se involucra un escenario más complejo, puede ajustarse de manera flexible agregando una condición.<br /><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/26.png" style={{width:600, height:'auto'}}/></div>

3. **Acción**:
- Aquí, puedes configurar el comportamiento del Watcher después de que se active una alarma.
- Especifica las acciones que quieres que el Watcher realice, como encender luces RGB, reproducir sonidos a través del Altavoz, o enviar notificaciones.<br /><br />

4. **Frecuencia de Captura**:
   - Este ajuste determina el intervalo de tiempo en el que se ejecutará la tarea.
   - Ajusta la frecuencia basándote en tus intervalos de monitoreo deseados y los requisitos específicos de tu tarea.<br /><br />

:::caution
En la sección "Configuración Detallada", se establecerá automáticamente un valor predeterminado para **Frecuencia de Captura**. Para el Servicio LLM basado en la nube de Watcher, la "Frecuencia de Captura" **no puede establecerse por debajo de 60 segundos**. Si estás usando los Servicios de IA Local de Watcher, el ajuste de "Frecuencia de Captura" no estará disponible, ya que el dispositivo proporcionará alertas en tiempo real.
:::

5. **Marco de Tiempo de Trabajo**:
- Este ajuste te permite definir el rango de tiempo durante el cual la tarea estará activa.
- Especifica las horas de inicio y fin para la operación de la tarea, asegurando que el monitoreo ocurra solo dentro del marco de tiempo designado.
- Ten en cuenta que para que este ajuste funcione correctamente, el reloj interno del Watcher debe estar sincronizado con la hora del sistema de tu dispositivo móvil. Las inconsistencias entre ambos pueden llevar a problemas con el flujo de la tarea.<br />

Al explorar y configurar estos ajustes en la sección "Configuración Detallada", puedes personalizar tu tarea para satisfacer tus necesidades específicas. Tómate el tiempo para revisar y ajustar cada configuración cuidadosamente para asegurar un rendimiento óptimo y alineación con tus objetivos de monitoreo.

7. Una vez que hayas verificado que todo está configurado correctamente y coincide con tus expectativas, haz clic en el botón **Ejecutar** para iniciar la ejecución de la tarea.

Siguiendo estos pasos, puedes asegurar que el Watcher haya entendido con precisión tu comando de tarea y que la ejecución se alinee con tus objetivos previstos. El proceso de confirmación permite una revisión final y la oportunidad de hacer cualquier ajuste necesario antes de desplegar la tarea al Watcher.

### Ejecutar tarea

Después de haber revisado cuidadosamente y configurado los ajustes de la tarea en la sección "Configuración Detallada", estás listo para desplegar la tarea a tu dispositivo Watcher. Para iniciar la ejecución de la tarea, sigue estos pasos:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/27.png" style={{width:800, height:'auto'}}/></div>

1. Haz clic en el botón "Ejecutar" ubicado en la tarjeta de configuración de la tarea.

2. Al hacer clic en "Ejecutar", la tarea configurada será transmitida al Watcher a través de la red.

3. El proceso de despliegue de la tarea puede tomar algún tiempo, ya que involucra dos etapas principales:

   - Recepción de la Tarea: El Watcher necesita recibir y procesar los datos de configuración de la tarea enviados desde la APP SenseCraft.

   - Descarga del Modelo (si aplica): Si la tarea requiere el uso de servicios de IA locales, el Watcher puede necesitar descargar los modelos de IA necesarios para realizar la tarea localmente.

4. Durante el proceso de despliegue de la tarea, puedes monitorear el progreso a través de la APP SenseCraft:

   - El estado de la tarjeta de la tarea cambiará para indicar la etapa actual del despliegue.

   - Mantén un ojo en las actualizaciones de estado para rastrear el progreso de la recepción de la tarea y la descarga del modelo (si aplica).

5. Una vez que el despliegue de la tarea esté completo, observarás un cambio en el comportamiento del Watcher:

   - El Watcher mostrará automáticamente una expresión de monitoreo o indicará que está listo para comenzar la tarea.

   - Este cambio en el comportamiento del Watcher significa que la ejecución de la tarea ha comenzado.

### Ver tareas actuales y verificar alarmas

La APP SenseCraft proporciona una manera conveniente de monitorear el progreso y estado de tus tareas en ejecución, así como revisar cualquier alarma activada y fotogramas clave asociados.

- En esta sección, encontrarás información sobre la tarea actualmente en ejecución en tu dispositivo Watcher.

- La tarea actual será representada por una pequeña tarjeta, mostrando el nombre de la tarea y el dispositivo Watcher asociado.

- La tarjeta indicará si la tarea está actualmente en progreso o no, proporcionando una visión general rápida del estado de la tarea.

Cuando una tarea activa una alarma basada en las condiciones configuradas, la APP SenseCraft te notificará a través de notificaciones push o alertas dentro de la aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/28.png" style={{width:250, height:'auto'}}/></div>

En la sección "Historial de Detección", encontrarás una lista de todas las alarmas activadas por tus tareas en ejecución. Cada alarma estará representada por una tarjeta o un elemento de lista, mostrando información como el nombre de la tarea, dispositivo Watcher, marca de tiempo y una breve descripción de la condición activada. Toca en una tarjeta de alarma para ver información más detallada sobre la alarma, incluyendo las imágenes de fotogramas clave asociadas.

Las imágenes de fotogramas clave son capturadas por el dispositivo Watcher en el momento en que se activó la alarma, proporcionando evidencia visual del escenario detectado. Puedes revisar las imágenes de fotogramas clave para analizar la situación y tomar las acciones apropiadas si es necesario. La aplicación también puede proporcionar opciones para reconocer o descartar las alarmas, dependiendo de tus preferencias y la gravedad de la situación.

### Finalizar tarea

Cuando necesites detener una tarea que está ejecutándose actualmente en tu dispositivo Watcher, tienes dos opciones convenientes disponibles:

Opción 1: Finalizar la Tarea a través de la APP SenseCraft
1. Abre la APP SenseCraft en tu dispositivo móvil y navega a la sección "Tareas Actuales".
2. Localiza la tarjeta de tarea que representa la tarea actualmente en ejecución en tu dispositivo Watcher y toca el botón "FINALIZAR".
3. La aplicación enviará una solicitud al dispositivo Watcher para detener la tarea, y la tarjeta de tarea se actualizará para reflejar el estado terminado de la tarea.

Opción 2: Finalizar la Tarea directamente en el Dispositivo Watcher
1. Toca ligeramente la pantalla del dispositivo Watcher o presiona el botón de rueda de desplazamiento para mostrar el menú u opciones.
2. Selecciona la opción "Finalizar Tarea", y el dispositivo Watcher terminará inmediatamente la tarea y regresará a su estado inactivo.
3. La tarjeta de tarea en la APP SenseCraft se actualizará automáticamente para reflejar el estado terminado de la tarea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/29.png" style={{width:250, height:'auto'}}/></div><br />

Ambos métodos proporcionan una forma simple e intuitiva de detener la ejecución de la tarea cuando sea necesario. Elige el método que sea más conveniente para ti basándote en tu situación actual y proximidad al dispositivo Watcher.

## Enviar Tarea por Voz

El Watcher ofrece una forma conveniente e intuitiva de enviar tareas usando comandos de voz, gracias a su función "Presionar para Hablar". Esta funcionalidad es accesible desde cualquier pantalla o interfaz en el dispositivo, haciendo fácil interactuar con el Watcher sin navegar a través de menús. Aquí tienes una guía paso a paso sobre cómo usar esta función:

1. Activar Presionar para Hablar:

   - Localiza el Botón de Rueda en la esquina superior derecha del Watcher.
   - Presiona y mantén presionado el Botón de Rueda para entrar a la interfaz de entrada de voz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. Habla tu Comando o Mensaje:

   - Mientras mantienes presionado el Botón de Rueda, habla claramente tu tarea o mensaje al Watcher.
   - Puedes asignar tareas, como "Dime si el bebé está llorando" o "Si el perro está robando comida, di alto cobre".
   - Alternativamente, puedes entablar conversación haciendo preguntas o declaraciones, como "Cuéntame un chiste".

3. Suelta el Botón de Rueda:

   - Una vez que hayas terminado de hablar, suelta el Botón de Rueda.
   - El Watcher procesará tu entrada de voz y determinará si es una asignación de tarea o una conversación.

4. Asignación de Tarea:

   - Si el Watcher reconoce tu entrada de voz como una asignación de tarea, automáticamente desglosará tu tarea en componentes relevantes.
   - El Watcher mostrará tarjetas en su pantalla, mostrando el **Objeto** (qué monitorear), **Comportamiento** (qué acción buscar), **Notificación** (cómo alertarte), **Rango de Tiempo** (cuándo monitorear), y **Frecuencia** (qué tan seguido monitorear).
   - Revisa la información mostrada para asegurar que represente con precisión tu tarea prevista.
   - Si los detalles son correctos, confirma la tarea, y el Watcher comenzará a ejecutarla de acuerdo con los parámetros especificados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

Consejos para Uso Óptimo:

- Habla claramente y a un ritmo moderado para asegurar un reconocimiento de voz preciso.
- Cuando hables, por favor acércate lo más posible al Watcher, aproximadamente **3 ~ 10cm** de distancia la precisión de reconocimiento del habla es mejor.
- Minimiza el ruido de fondo para mejorar la capacidad del Watcher de entender tus comandos de voz.
- Sé específico y conciso al asignar tareas para ayudar al Watcher a interpretar con precisión tus intenciones.
- Si el Watcher malinterpreta tu tarea o conversación, simplemente presiona y mantén presionado el Botón de Rueda nuevamente para proporcionar aclaraciones o correcciones.

Al aprovechar la función Presionar para Hablar, puedes enviar tareas sin esfuerzo y entablar conversaciones con el Watcher, haciendo tu interacción con el dispositivo más natural y eficiente.

:::note
Si encuentras un error de **0x7002**, significa que el estado actual de la red del Watcher no es bueno y la llamada del servicio de audio falló, por favor cambia la red o ubicación e inténtalo de nuevo.
:::

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


