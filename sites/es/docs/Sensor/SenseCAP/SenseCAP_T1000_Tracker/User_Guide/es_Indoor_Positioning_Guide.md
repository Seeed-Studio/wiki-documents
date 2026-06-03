---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: Guía del Sistema de Posicionamiento en Interiores SenseCAP T1000
keywords:
  - Rastreador
  - BLE
  - Posicionamiento
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /IPS_For_SenseCAP_T1000_Traker
sku: E2025081201,E2025081501
last_update:
  date: 10/20/2023
  author: Jessie
createdAt: '2023-10-19'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/IPS_For_SenseCAP_T1000_Traker/
---


Este capítulo proporcionará una guía general sobre cómo integrar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) en una solución de posicionamiento en interiores utilizando Traxmate.

[Traxmate](https://traxmate.io/) es una plataforma IoT que permite a ti o a tus clientes desplegar de forma fácil y eficiente una solución integral de rastreo IoT, con capacidades fluidas de posicionamiento, seguimiento y enrutamiento tanto en interiores como en exteriores.

:::tip ¿Buscas una alternativa autoalojada?
Si prefieres ejecutar tu propio panel sin una suscripción a una plataforma de terceros, consulta el **[Sistema de Posicionamiento por Balizas BLE a Nivel de Campus](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)**: una solución de balizas BLE + LoRaWAN lista para desplegar que puedes lanzar con un solo clic con SenseCraft Solution (o autoalojar mediante Docker).
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## Descripción general de la arquitectura

A continuación encontrarás breves resúmenes, pero lee el resto del documento para obtener la visión completa.

● Inicia sesión en Traxmate y crea tu(s) edificio(s).<br/>
● Despliega más redes Wi‑Fi y/o [E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/es/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) (si es necesario).<br/>
● Realiza un estudio en interiores para comprobar la precisión proporcionada por tu infraestructura Wi‑Fi y/o Bluetooth ya instalada.<br/>
● Realiza un nuevo estudio en interiores para validar.<br/>
● Repite los pasos anteriores o empieza a utilizar la solución de posicionamiento en interiores.<br/>
● Conecta el dispositivo a [TTN](https://www.thethingsnetwork.org/) y envía datos a Traxmate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## Desplegar las balizas Wi‑Fi/Bluetooth

Si aún no tienes una infraestructura instalada de puntos de acceso Wi‑Fi y/o balizas Bluetooth, puedes hacer un despliegue optimizado para posicionamiento. La mayoría de las infraestructuras de puntos de acceso Wi‑Fi ya desplegadas se han colocado probablemente para optimizar el alcance y el rendimiento de la conexión de datos. Cuando también se considera el posicionamiento, piensa en “distribuirlos y mantenerlos cerca de esquinas y paredes, y con una mayor densidad en las zonas donde quieras mayor precisión”.

:::tip
Las balizas Bluetooth suelen funcionar con baterías y, por lo tanto, pueden desplegarse más fácilmente. Los puntos de acceso Wi‑Fi tienen un mayor alcance. Una cuadrícula densa de balizas Bluetooth proporciona mejor precisión que una cuadrícula dispersa de puntos de acceso Wi‑Fi.
:::

Consulta [E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/es/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) para más detalles.

## Añadir lugares

Navega a `Places` -> `Add New`, luego haz clic en el mapa o busca una dirección o un nombre, haz clic en la ventana emergente `Add place` y envía los detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

El siguiente paso es especificar el número de pisos del edificio y subir los planos de planta de los pisos donde quieras habilitar el posicionamiento en interiores. La carga de planos de planta admite archivos PNG y JPEG. Una vez que hayas subido el archivo, utiliza las herramientas para escalarlo, rotarlo y colocarlo correctamente en el mapa. También hay una herramienta para recortar el archivo PNG/JPEG siguiendo la forma del edificio.

Después de configurar el edificio, haz clic en `SAVE`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## Realizar el estudio

Una vez que se haya añadido el edificio y se hayan subido los planos de planta, es momento de realizar el estudio utilizando la app Traxmate (versión para Android).

:::note
La versión para iOS de la app Traxmate no se puede utilizar, ya que iOS no admite el escaneo de Wi‑Fi por parte de aplicaciones de terceros.
:::

:::tip
Android normalmente tiene una limitación sobre la frecuencia con la que las aplicaciones pueden escanear Wi‑Fi; está configurada en una vez cada 30 segundos. Para obtener un estudio más preciso se recomienda desactivar esta limitación. Debes poner Android en modo desarrollador para poder hacerlo.

Ve a `Settings` > `Developer options` > busca "Wi-Fi scan throttling" > desactívalo (o Settings>System>Advanced>Developer options).
Con la limitación de escaneo Wi‑Fi desactivada en tu Android, puedes estar seguro de que NetSpot hará todo lo posible durante el estudio, escaneando y analizando el área de tu red inalámbrica.<br/>
Consulta más información [aquí](https://developer.android.com/guide/topics/connectivity/wifi-scan
).
:::

Abre la app e inicia sesión, selecciona `Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`.

La app escaneará continuamente Wi‑Fi y Bluetooth. Debes entrenar el sistema de posicionamiento en interiores colocando repetidamente Puntos de Referencia. Cuantos más Puntos de Referencia, mejor. El Punto de Referencia debe colocarse en el mapa en el lugar que represente dónde te encuentras físicamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● Coloca el punto de referencia acercando y desplazando el mapa de modo que el lugar donde estás quede bajo la mira. Cuando hayas apuntado correctamente, haz clic en el botón con el signo más (+).<br/><br/>
● Luego continúa caminando, intentando caminar en línea recta y a velocidad constante.
Se recomienda caminar un poco más despacio que la velocidad normal. Apunta a un nuevo buen lugar para usar como Punto de Referencia. Buenos lugares son aquellos fácilmente reconocibles en el mapa, como esquinas, intersecciones, puertas, ascensores, escaleras y similares.<br/><br/>
● Coloca Puntos de Referencia al menos cada 5‑10 metros. Cuanto más precisamente coloques los Puntos de Referencia, más preciso será el posicionamiento en interiores.<br/><br/>
● Cuando hayas estudiado toda la sección o piso, detén el estudio pulsando el botón rojo de parada. El estudio se enviará al servidor y se procesará. En uno o un par de minutos habrá un nuevo Modelo de Edificio (consulta el capítulo sobre modelos de edificio) publicado automáticamente para tu edificio (si el estudio ha contribuido de buena manera y ha mejorado la precisión).

## Evaluar la precisión proporcionada actualmente

Una vez que hayas realizado los estudios en interiores, debes evaluar los resultados. Inicia sesión en el [portal de Traxmate](https://online.traxmate.io/) y visita la pestaña Positioning de tu Lugar/Edificio.
Los datos en bruto de los estudios serán procesados por los servidores de back‑end y los resultados estarán disponibles como Modelos de Edificio. Los detalles del último Modelo de Edificio publicado se muestran en la pestaña Positioning.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>Esta imagen muestra que tiene un error medio de 4,33 metros. El 51% del edificio ha sido cubierto por los estudios realizados, y se ha comprobado que las redes Wi‑Fi y Bluetooth (Cobertura RF) cubren el 13% del edificio</i></center>

### Modelos de edificio y el error medio

Un modelo de edificio es una representación electrónica de dónde se colocan las balizas dentro de un edificio. El modelo de edificio se genera cuando un usuario (o varios) realiza estudios o recorridos de referencia. Tan pronto como estos se finalizan, se envían al sistema para ser calculados en un modelo de edificio.

Para cada modelo de edificio se calcula un error medio. El error medio se basa en la diferencia (el error) entre el recorrido de referencia/terreno real (generado por el punto de referencia colocado durante el estudio) y el recorrido calculado (basado en el posicionamiento en interiores proporcionado por la Combain Location API). El sistema selecciona automáticamente publicar el mejor modelo de edificio disponible. El algoritmo para determinar el “mejor” se basa en una combinación de la tasa de cobertura y el error medio.

El proceso automático puede anularse publicando manualmente un modelo de edificio seleccionado. Los modelos de edificio se pueden editar. Los usuarios pueden añadir o editar balizas para mejorar aún más el esfuerzo de posicionamiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>Se muestra el modelo de edificio publicado 1892 para el edificio Mattehuset1. Tiene en total 98 modelos de edificio disponibles. El modelo de edificio actual incluye 179 direcciones MAC Wi‑Fi únicas y cubre 4 de 6 pisos. El error medio para todos los pisos es de 4,33 m. El mejor piso (ver Imagen 9) fue el Piso 3 y tiene un error medio de 3,9 m.</i></center>

### Cobertura del estudio, Cobertura RF y mapa de error medio

Al evaluar un modelo de edificio específico, para ver si y cómo se podría mejorar la precisión, puede ser útil echar un vistazo a los mapas de Cobertura del estudio, Cobertura RF y Error medio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### Cómo mejorar la precisión del posicionamiento en interiores

Al revisar el mapa de Error medio y ver que el error medio proporcionado no está alineado con los requisitos de tu caso de uso, es momento de analizar cómo se puede mejorar la precisión.

●  **Paso 1** - Más estudios<br/>
¿Has realizado estudios en todas las áreas del edificio donde pretendes utilizar el posicionamiento en interiores?
Si no es así, realiza más estudios.

●  **Paso 2** - Aumentar la cobertura Wi‑Fi y Bluetooth<br/>
¿Tienes Wi‑Fi y Bluetooth en todas las áreas del edificio donde pretendes utilizar el posicionamiento en interiores?
Si no es así, despliega más redes Wi‑Fi y balizas Bluetooth en estas áreas y realiza estudios en estas zonas.

●  **Paso 3** - Aumentar la densidad de Wi‑Fi y Bluetooth<br/>
Tienes Wi‑Fi y Bluetooth en todas las áreas del edificio, pero la precisión sigue sin ser suficiente.
Revisa la densidad de Wi-Fi y Bluetooth en estas áreas. Compárala con las tablas del Apéndice 1 y comprueba si, desde una perspectiva teórica y simulada, se recomienda aumentar la densidad de Wi-Fi y Bluetooth para cumplir tus requisitos. Si es así, despliega más puntos de acceso Wi-Fi y balizas Bluetooth en estas áreas.

●  **Paso 4** - Aumentar la precisión de la encuesta<br/>
Tienes Wi-Fi y Bluetooth en todas las áreas del edificio y la densidad está de acuerdo con los niveles teóricos sugeridos por el Apéndice 1 para cumplir tus requisitos, PERO la precisión sigue sin ser lo suficientemente buena.
Realiza encuestas más detalladas. Asegúrate de colocar puntos de referencia tan a menudo como puedas (uno por metro cuadrado es lo óptimo) y con la mayor precisión posible. Es importante que seas preciso y correcto al colocar el punto de referencia en el mapa. Es bastante fácil cometer errores y colocarlos en otros lugares distintos de donde realmente te encuentras.

## Empezar a usar

El rastreador SenseCAP T1000 recopila la información de escaneo de Wi-Fi y Bluetooth, direcciones MAC y potencia de la señal y la envía a The Things Stack, luego la envía al portal Traxmate a través de la API.

Primero consulta [Connect to TTN](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN/) para configurar correctamente el rastreador.

### Añadir dispositivo

Inicia sesión en el portal Traxmate, navega a `Devices` -> `Add new` -> `Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### Configuración de TTS

Inicia sesión en [The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3), navega a `Integrations` → `Webhooks` y haz clic en `Add Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Elige la plantilla `Custom Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

Asigna un nombre a tu ID de Webhook y selecciona el formato `JSON`, luego copia la URL base.

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
Navega a `Settings` -> `Account` y copia el Service Token.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

Habilita el siguiente tipo de evento recomendado y luego haz clic en `Add webhook`.

- Mensaje de subida (Uplink)
- Subida normalizada (Normalized uplink)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### Comprobar los datos del dispositivo

Cuando el dispositivo se haya conectado correctamente, volvemos al portal Traxmate y verás los datos del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## Apéndice

### Requisitos de precisión

**El método y la tecnología que describimos en este capítulo son adecuados para los casos de uso que requieren alrededor de 2-10 metros de error medio.**

Todos los requisitos de precisión deben basarse en las necesidades de los casos de uso. Algunos casos de uso tienen requisitos más altos que otros y algunos casos de uso tienen un presupuesto disponible más alto para la infraestructura de posicionamiento en interiores que otros. La solución debe aspirar a encontrar un equilibrio entre los requisitos de precisión y el presupuesto disponible. La regla general es que, cuanto más dinero y esfuerzo se invierta en la infraestructura, mejor será la precisión. Pero ten en cuenta que muchos casos de uso pueden ser soportados utilizando una infraestructura ya existente.

Los siguientes gráficos muestran qué precisión puedes esperar si tienes una cierta cantidad de Wi-Fi/Bluetooth para un determinado número de metros cuadrados.

### Matriz estimada de precisión en interiores

Las tablas siguientes muestran qué precisión estimada puedes esperar en un entorno interior utilizando el posicionamiento en interiores basado en IA (ANN). La precisión dependerá del área a cubrir y de la cantidad de puntos de acceso Wi-Fi (AP) o balizas Bluetooth desplegados.

La precisión del error medio es:

● VERDE de 1 hasta 5 metros<br/>
● AMARILLO de 5 hasta 10<br/>
● ROJO 10 metros<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>Tabla que muestra la precisión si has realizado una encuesta muy detallada con un punto de referencia por cada 1 metro cuadrado.</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>Tabla que muestra la precisión si has realizado una encuesta detallada con un punto de referencia por cada 4 metros cuadrados.</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>Tabla que muestra la precisión si has realizado una encuesta dispersa con un punto de referencia por cada 100 metros cuadrados.</i></center>
