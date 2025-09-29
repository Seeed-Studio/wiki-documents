---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: Guía del Sistema de Posicionamiento Interior SenseCAP T1000
keywords:
- Tracker
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/IPS_For_SenseCAP_T1000_Traker
last_update:
  date: 10/20/2023
  author: Jessie
---


Este capítulo proporcionará una guía general sobre cómo integrar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) en una solución de posicionamiento interior utilizando Traxmate.

[Traxmate](https://traxmate.io/) es una plataforma IoT que te permite a ti o a tus clientes desplegar fácil y eficientemente una solución integral de seguimiento IoT, completa con capacidades de posicionamiento, seguimiento y enrutamiento tanto interior como exterior sin interrupciones.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## Descripción General de la Arquitectura

A continuación encontrarás resúmenes breves, pero por favor lee el resto del documento para obtener la imagen completa.

● Inicia sesión en Traxmate y crea tu(s) edificio(s).<br/>
● Despliega algunos Wi-Fi adicionales y/o [Despliegue de Balizas de Ubicación Bluetooth E5](https://wiki.seeedstudio.com/es/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) (Si es necesario).<br/>
● Realiza un estudio interior para verificar la precisión proporcionada por tu infraestructura Wi-Fi y/o Bluetooth ya instalada.<br/>
● Haz un nuevo estudio interior para validar.<br/>
● Ya sea repite los pasos anteriores o comienza a usar la solución de posicionamiento interior.<br/>
● Conecta el dispositivo a [TTN](https://www.thethingsnetwork.org/) y envía datos a Traxmate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## Desplegar las Balizas Wi-Fi/Bluetooth

Si aún no tienes una infraestructura instalada de puntos de acceso Wi-Fi y/o balizas Bluetooth, puedes hacer un despliegue que esté optimizado para posicionamiento. La mayoría de las infraestructuras ya desplegadas de puntos de acceso Wi-Fi han sido colocadas muy probablemente para optimizar el alcance y rendimiento de la conexión de datos. Cuando consideres también el posicionamiento - piensa "distribúyelo y mantenlo cerca de esquinas y paredes, y con mayor densidad en áreas donde quieras mayor precisión".

:::tip
Las balizas Bluetooth funcionan principalmente con batería, y por tanto pueden desplegarse más fácilmente. Los puntos de acceso Wi-Fi tienen un alcance mayor. Una cuadrícula densa de balizas Bluetooth proporciona mejor precisión que una cuadrícula dispersa de puntos de acceso Wi-Fi.
:::

Consulta [Despliegue de Balizas de Ubicación Bluetooth E5](https://wiki.seeedstudio.com/es/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) para más detalles.

## Agregar Lugares

Navega a `Places` -> `Add New`, luego haz clic en el mapa o busca una dirección o un nombre, haz clic en el popup `Add place` y envía los detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

El siguiente paso es especificar el número de pisos del edificio y subir mapas de planta a los pisos donde te gustaría habilitar el posicionamiento interior. La subida de mapas de planta soporta archivos PNG y JPEG. Una vez que hayas subido el archivo usas herramientas para escalar, rotar y colocarlo correctamente en el mapa. También hay una herramienta para recortar el archivo PNG/JPEG siguiendo la forma del edificio.

Después de configurar el edificio, haz clic en `SAVE`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## Realizar la encuesta

Una vez que el edificio ha sido añadido y los mapas de planta subidos, es momento de realizar la encuesta utilizando la Aplicación Traxmate (Versión Android).

:::note
La versión iOS de la Aplicación Traxmate no puede ser utilizada ya que iOS no soporta el escaneo de Wi-Fi por aplicaciones de terceros.
:::

:::tip
Android normalmente tiene una limitación de qué tan frecuentemente las aplicaciones pueden escanear Wi-Fi, está configurado a una vez cada 30 segundos. Con el propósito de obtener una encuesta más precisa se recomienda desactivar esta limitación. Tienes que configurar Android en modo desarrollador para poder hacer esto.

Ve a `Configuración` > `Opciones de desarrollador` > busca "Limitación de escaneo Wi-Fi" > desactívala (o Configuración>Sistema>Avanzado>Opciones de desarrollador).
Con la limitación de escaneo WiFi desactivada en tu Android, puedes estar seguro de que NetSpot hará su mejor esfuerzo mientras realiza la encuesta, escaneando y analizando tu área de red inalámbrica.<br/>
Consulta más información [aquí](https://developer.android.com/guide/topics/connectivity/wifi-scan
).
:::

Abre la aplicación e inicia sesión, selecciona `Lugares` -> `Selecciona tu Lugar` -> `Selecciona Planta` -> `Iniciar Encuesta`.

La aplicación entonces escaneará continuamente Wi-Fis y Bluetooth. Debes entrenar el sistema de posicionamiento interior colocando repetidamente Puntos de Referencia. Mientras más Puntos de Referencia, mejor. El Punto de Referencia debe ser colocado en el mapa que representa donde estás ubicado físicamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● Colocas el punto de referencia haciendo zoom y desplazando el mapa para que el lugar donde estás quede bajo la cruz. Cuando hayas apuntado correctamente, haces clic en el botón con el signo más (+).<br/><br/>
● Luego continúas caminando, tratando de caminar en línea recta con velocidad constante.
Se recomienda una velocidad un poco más lenta que la velocidad normal de caminar. Apunta hacia un nuevo buen lugar para usar como Punto de Referencia. Los buenos lugares son lugares fácilmente reconocibles en el mapa, como esquinas, cruces, puertas, elevadores, escaleras y similares.<br/><br/>
● Coloca Puntos de Referencia al menos cada 5-10 metros. Mientras más precisamente coloques los Puntos de Referencia, más preciso será el posicionamiento interior.<br/><br/>
● Cuando hayas encuestado toda la sección o planta, detienes la encuesta presionando el botón rojo de parar. La encuesta será enviada al lado del servidor y procesada. En uno o un par de minutos habrá un nuevo Modelo de Edificio (ver el capítulo sobre modelos de edificio) automáticamente publicado para tu edificio (si la encuesta contribuyó de buena manera y mejoró la precisión).

## Evaluar la precisión actualmente proporcionada

Una vez que hayas realizado las Encuestas Interiores, entonces necesitas evaluar los resultados. Inicias sesión en el [portal Traxmate](https://online.traxmate.io/) y visitas la pestaña Posicionamiento de tu Lugar/Edificio.
Los datos en bruto de las encuestas serán procesados por los servidores de back-end y los resultados estarán disponibles como Modelos de Edificio. Los detalles del último Modelo de Edificio publicado se muestran en la pestaña Posicionamiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>Esta imagen muestra que tiene 4.33 metros en error mediano. El 51% del edificio ha sido cubierto por las encuestas realizadas, y se ha encontrado que Wi-Fis y Bluetooth (Cobertura RF) cubren el 13% del edificio</i></center>

### Modelos de Edificio y el Error Mediano

Un modelo de edificio es una representación electrónica de dónde están colocados los beacons dentro de un edificio. El modelo de edificio se genera cuando un usuario (o varios) realiza encuestas o pistas de referencia. Tan pronto como estas se finalizan, son enviadas al sistema para ser calculadas en un modelo de edificio.

Para cada modelo de edificio se calcula un error mediano. El error mediano se basa en la diferencia (el error) entre la pista de verdad fundamental/referencia (generada por el punto de referencia colocado durante la encuesta) y la pista calculada (basada en el posicionamiento interior proporcionado por la API de Ubicación Combain). El sistema automáticamente selecciona publicar el mejor modelo de edificio disponible. El algoritmo para "mejor" se basa en una combinación de tasa de cobertura y error mediano.

El proceso automático puede ser anulado publicando manualmente un modelo de edificio seleccionado. Los modelos de edificio pueden ser editados. Los usuarios pueden añadir – o editar beacons para mejorar aún más el esfuerzo de posicionamiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>Mostrando el modelo de edificio publicado 1892 para el edificio Mattehuset1. Tiene en total 98 modelos de edificio disponibles. El modelo de edificio actual incluye 179 direcciones MAC Wi-Fi únicas y cubre 4 de 6 plantas. El error mediano para todas las plantas es 4.33 m. La mejor planta (ver Imagen 9) fue la Planta 3 y tiene 3.9 m de error mediano.</i></center>

### Cobertura de Encuesta, Cobertura RF y mapa de Error Mediano

Al evaluar un modelo de edificio específico, para ver si y cómo la precisión podría ser mejorada, puede ser útil echar un vistazo a los mapas de Cobertura de Encuesta, Cobertura RF y Error Mediano.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### Cómo Mejorar la Precisión del Posicionamiento Interior

Al revisar el mapa de Error Mediano y encuentras que el error mediano proporcionado no está alineado con los requisitos de tu caso de uso, entonces es momento de ver cómo la precisión puede ser mejorada.

●  **Paso 1** - Más Encuestas<br/>
¿Has realizado encuestas en todas las áreas del edificio donde pretendes usar el posicionamiento interior?
Si no, realiza más encuestas.

●  **Paso 2** - Aumentar la cobertura de Wi-Fi y Bluetooth<br/>
¿Tienes Wi-Fi y Bluetooth en todas las áreas del edificio donde pretendes usar el posicionamiento interior?
Si no, despliega más Wi-Fis y beacons Bluetooth en estas áreas y realiza encuestas en estas áreas.

●  **Paso 3** - Aumentar la densidad de Wi-Fi y Bluetooth<br/>
Tienes Wi-Fi y Bluetooth en todas las áreas del edificio, pero la precisión aún no es lo suficientemente buena.
Revisa la densidad del Wi-Fi y Bluetooth en estas áreas. Compara con las tablas en el Apéndice 1 y verifica si desde una perspectiva teórica y simulada se recomienda aumentar la densidad de Wi-Fi y Bluetooth para cumplir con tus requisitos. Si es así, despliega más Wi-Fi y beacons Bluetooth en estas áreas.

●  **Paso 4** - Aumentar la precisión del Levantamiento<br/>
Tienes Wi-Fi y Bluetooth en todas las áreas del edificio y la densidad está de acuerdo con los niveles teóricos sugeridos por el Apéndice 1 para cumplir con tus requisitos, PERO la precisión aún no es lo suficientemente buena.
Realiza levantamientos más detallados. Asegúrate de colocar puntos de referencia tan frecuentemente como puedas (una vez por metro cuadrado es lo óptimo) y tan precisamente como puedas. Es importante que seas preciso y correcto al colocar el punto de referencia en el mapa. Es bastante fácil cometer errores y colocarlos en otros lugares diferentes a donde realmente estás ubicado.

## Comenzar a Usar

El SenseCAP T1000 Tracker recopila la información de escaneo de Wi-Fi y Bluetooth, direcciones MAC y fuerza de señal y envía esto a The Things Stack, luego lo envía al portal Traxmate a través de la API.

Por favor revisa primero [Conectar a TTN](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN/) para configurar el tracker correctamente.

### Agregar dispositivo

Inicia sesión en el portal Traxmate, navega a `Devices` -> `Add new` -> `Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### Configuración TTS

Inicia sesión en [The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3), navega a `Integrations` → `Webhooks`, y haz clic en `Add Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Elige la plantilla `Custom Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

Nombra tu Webhook ID y selecciona el formato a `JSON`, luego copia la Base URL.

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
Navega a `Settings` -> `Account`, y copia el Service Token.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

Habilita el siguiente tipo de evento recomendado, luego haz clic en `Add webhook`.

* Uplink message
* Normalized uplink

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### Verificar los datos del dispositivo

Cuando el dispositivo esté conectado exitosamente, regresamos al portal de traxmate, verás los datos del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## Apéndice

### Requisitos de precisión

**El método y la tecnología que describimos en este capítulo son adecuados para los casos de uso que requieren algo alrededor de 2-10 metros de error mediano.**

Todos los requisitos de precisión deben basarse en las necesidades de los casos de uso. Algunos casos de uso tienen requisitos más altos que otros y algunos casos de uso tienen un presupuesto disponible más alto para la infraestructura de posicionamiento interior que otros. La solución debe apuntar a encontrar un equilibrio entre los requisitos de precisión y el presupuesto disponible. La regla general es, mientras más dinero y esfuerzo se invierta en infraestructura, mejor precisión. Pero nota, muchos casos de uso pueden ser soportados usando una infraestructura ya existente.

Los siguientes gráficos muestran qué precisión puedes esperar si tienes una cierta cantidad de Wi-Fis/Bluetooth para un cierto número de metros cuadrados.

### Matriz de Precisión Interior Estimada

Las tablas a continuación muestran qué precisión estimada puedes esperar en un ambiente interior usando el posicionamiento interior basado en AI (ANN). La precisión dependerá del Área a cubrir y la cantidad de puntos de acceso Wi-Fi (APs) o beacons Bluetooth desplegados.

La precisión del error mediano es:

● VERDE de 1 hasta 5 metros<br/>
● AMARILLO 5 hasta 10<br/>
● Rojo 10 metros<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>Tabla que muestra la precisión si has realizado un levantamiento muy detallado con un punto de referencia por 1 metro cuadrado.</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>Tabla que muestra la precisión si has realizado un levantamiento detallado con un punto de referencia por 4 metros cuadrados.</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>Tabla que muestra la precisión si has realizado un levantamiento disperso con un punto de referencia por 100 metros cuadrados.</i></center>
