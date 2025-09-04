---
description: Herramienta de IA Edge sin código
title: Herramienta de IA Edge sin código
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/No-code-Edge-AI-Tool
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Herramienta de IA Edge sin código

Nos complace presentarle nuestra nueva experiencia en el reComputer construido con Jetson Nano para el reconocimiento de objetos rápido y fácil.

Con solo unos pocos comandos simples, el entorno se puede descargar e implementar, y el proceso de monitorear, identificar y generar resultados desde una pantalla en vivo no puede ser más simple que tres bloques.

## Video de Demostración

**Demo de Seguridad de Almacén**

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**Demo de Guardias de Granja**

<iframe width={560} height={315} src="https://www.youtube.com/embed/Jt66IG4E6uM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Preparación Preliminar

En este ejemplo, repasaremos cómo descargar e instalar lo que necesitamos bajo un sistema NVIDIA Jetson nuevo, luego abrir la Herramienta de IA Edge y realizar detección de objetos con una cámara en vivo. A continuación se muestra una descripción general de los pasos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/step.png" /></div>

1. Descargar e implementar
2. Colocar bloques
3. Mostrar resultados

### Requisitos de Hardware

Antes de comenzar, necesitará tener el siguiente hardware listo.

<table>
  <thead>
    <tr>
      <th>Imagen del Hardware</th>
      <th>Nombre del Hardware</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/reComputer-Jetson-Nano.jpg" width={210} /></td>
      <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010 con módulo Jetson Nano</a><br />o <br /><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020 con módulo Jetson Nano</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/3.png" width={210} /></td>
      <td>Logitech C270 HD Webcam<br />o<br /><a href="https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano" target="_blank" rel="noopener noreferrer">otra Cámara USB V4L2 compatible con Jetson</a></td>
    </tr>
  </tbody>
</table>

!!!Attention
    Este ejemplo solo funcionará en el reComputer construido con Jetson Nano. Tenga en cuenta que el reComputer construido con Jetson Xavier NX no es compatible para funcionar en este momento, pero será compatible en el futuro.

### Requisitos de Software

Antes de comenzar, asegúrese de que su dispositivo esté flasheado con [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461). Si desea volver a flashear la eMMC del Jetson Nano con JetPack 4.6.1, consulte [aquí](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html).

Puede verificar la versión de JetPack instalada escribiendo lo siguiente en la terminal:

```sh
cat /etc/nv_tegra_release
```

Y la salida debería verse así

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/node-red/check-jp-version.png" /></div>

**Nota:** R32.7.1 corresponde a JetPack 4.6.1

## Primeros Pasos

Una vez que el hardware y software estén listos como se describe arriba, pasemos a la experiencia de la Herramienta de IA Edge. En este ejemplo, por favor conecta tu pantalla, ratón o teclado según sea necesario, también puedes controlar tu NVIDIA Jetson remotamente vía SSH o VNC.

### Paso 1. Descargar e implementar

Abre una ventana de línea de comandos en NVIDIA Jetson e ingresa el siguiente comando para descargar los archivos requeridos a Jetson.

```sh
git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git
```

Una vez que se complete la descarga, ejecuta el siguiente comando para iniciar el docker requerido.

```sh
cd node-red-contrib-ml
sudo ./docker-ubuntu.sh
```

Todo el proceso de instalación e inicio tomará aproximadamente de 7 a 9 minutos.

### Paso 2. Colocar bloques

Una vez que la instalación esté completa, usa el navegador Google Chrome que viene con tu sistema NVIDIA Jetson para ingresar la siguiente URL y acceder a la interfaz de operación.

```
127.0.0.1:1880
```

También puedes introducir la dirección IP más el número de puerto (1880) en la barra de direcciones para acceder a la página de acción.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/6.png" /></div>

Podemos ver la distribución de las operaciones de Edge AI Tool en el diagrama a continuación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/8.png" /></div>

- **Área de Bloques:** Esta área alberga una serie de bloques que pueden ser manipulados por el usuario.

- **Área de Programación:** Esta área es el Área de Programación del usuario. El usuario puede arrastrar y soltar bloques desde el Área de Bloques al Área de Programación para completar el programa.

- **Área de Configuración:** En el extremo derecho está el Área de Configuración. Aquí podemos ver el flujo del Área de Programación y podemos completar algunas configuraciones necesarias o configurar operaciones en bloques, etc. en esta área.

En el Área de Bloques, hay una sección llamada **seeed recomputer** donde nos enfocaremos en el uso de estos tres bloques.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/7.png" /></div>

- **video input:** Este bloque se utiliza para obtener el flujo de video desde la entrada de la cámara. Este bloque puede configurarse para seleccionar una webcam o una cámara USB V4L2 local, etc.

- **detection:** Este bloque se utiliza para seleccionar el modelo a ser reconocido. El flujo de video de entrada será reconocido usando el modelo que hayas seleccionado. Por el momento, solo se puede usar el **conjunto de datos COCO** bajo esta versión.

- **video view:** Este bloque se utiliza para mostrar el flujo de video procesado en la pantalla.

A continuación podemos echar un vistazo a la composición de los bloques. Tomemos como ejemplo el bloque **video input**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/12.png" /></div>

A la izquierda de este bloque hay un área cuadrada azul. Cuando esta área está oculta, significa que la entrada de flujo de video está desactivada.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/11.png" /></div>

Cuando esta área se muestra, significa que la entrada de flujo de video está activada.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/13.png" /></div>

De manera similar, el bloque video view tiene un bloque cuadrado como este en el lado derecho. Ocultar desactiva la visualización de la salida del flujo de video, lo contrario es verdadero.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/14.png" /></div>

Si hay un punto azul en la parte superior derecha del bloque, esto es un recordatorio de que el bloque ha sido editado, pero no desplegado. Por cierto, todo el proyecto se ejecuta y necesita ser programado con bloques y desplegado antes de que se muestren los resultados.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/15.png" /></div>

El cuadrado gris a la derecha del bloque es donde se conectan los bloques. Haz clic izquierdo aquí y arrástralo al siguiente bloque a la izquierda de la conexión, entonces puedes conectar los dos bloques para formar un flujo de programa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/16.png" /></div>

Debe notarse que el flujo del programa se ejecuta de **izquierda a derecha** en este orden, y que la unión de la izquierda solo puede conectarse a la unión de la derecha.

Si no hay unión a la izquierda del bloque, debe usarse como el nodo de inicio del flujo del programa. Si el lado derecho del bloque no tiene conexiones, entonces debe usarse como el nodo final de todo el flujo del programa.

Un bloque con dos uniones, como **object detection**, significa que varios contenidos diferentes pueden ser enviados al bloque. Entonces es posible enviar tanto flujos de video como registros.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/17.png" /></div>

Los bloques también son muy fáciles y rápidos de usar. Puedes arrastrar el bloque que quieras usar manteniendo presionado el botón izquierdo del ratón y luego arrastrarlo al Área de Programación de la pantalla principal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/9.png" /></div>

Basándose en la descripción anterior de los bloques, podemos diseñar un procedimiento de bloques simple como sigue.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/18.png" /></div>

El programa mostrado arriba es el que toma el flujo de video de entrada desde la cámara y luego usa detección de modelo para introducir el resultado de reconocer el objeto.

### Paso 3. Mostrar resultados

Una vez que los bloques han sido colocados, aún necesitamos hacer una configuración simple de los bloques antes de que puedan ser usados. Si quieres configurar un bloque en particular, puedes hacer doble clic en él y el cuadro de configuración correspondiente aparecerá en el lado derecho.

Comencemos configurando el bloque **video input**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/19.png" /></div>

- **Device type:** Aquí puedes configurar el tipo de cámara que tienes, actualmente se soportan dos tipos de cámara, webcam y cámara local.

- **Video:** Selecciona tu cámara aquí. Si no hay cámara disponible aquí, por favor verifica dos veces que la cámara sea soportada o que esté conectada exitosamente.

- **URL:** Si has seleccionado una webcam, el campo Video se convertirá en una URL. Aquí por favor llena la fuente de entrada de la webcam.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/20.png" /></div>

- **Resolution:** Selecciona la resolución de tu cámara aquí. Seleccionar la resolución incorrecta puede resultar en un error de tiempo de ejecución.

Para el bloque **object detection**, las configuraciones son las siguientes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/21.png" /></div>

- **Model name:** Aquí seleccionas el nombre del modelo para reconocimiento de objetos, actualmente solo se soporta el conjunto de datos COCO.

!!!Note
    COCO es un conjunto de datos de detección de objetos, segmentación y subtitulado a gran escala. COCO tiene varias características:
    - Segmentación de objetos
    - Reconocimiento en contexto
    - Segmentación de superpíxeles
    - 330K imágenes (>200K etiquetadas)
    - 1.5 millones de instancias de objetos
    - 80 categorías de objetos
    - 91 categorías de elementos
    - 5 subtítulos por imagen
    - 250,000 personas con puntos clave

    <div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>

Una vez que hayas hecho esto, haz clic en el botón **deploy** en la esquina superior derecha de la interfaz y el flujo del programa comenzará a ejecutarse.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/23.png" /></div>

Si todo está bien, puedes ver que los objetos identificados por el flujo de video están rodeados por cajas y se les dan valores de confianza.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/24.png" /></div>

## Operación en Profundidad

Experimentamos el programa Edge AI Tool en su forma más simple en el capítulo anterior. En esta sección te llevaremos a través de más extensiones de Edge AI Tool.

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

### Descarga de Bloques

Además de los bloques en la sección de bloques, podemos descargar tantos bloques como necesitemos para completar proyectos más complejos.

En el Área de Configuración a la derecha, hay un botón para más opciones, seleccionamos **Manage palette**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/25.png" /></div>

En la página emergente, puedes ver los bloques instalados y seleccionar **Install** para descargar más bloques. Aquí, tomamos el ejemplo del bloque de buzón de correo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/27.png" /></div>

Después de la instalación, los bloques recién instalados se pueden ver en la parte inferior de la sección de bloques.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/30.png" /></div>

### Importando proyectos de otros

Hay veces cuando quizás te gustaría compartir tus proyectos interesantes para que otros los experimenten. O tal vez es el proyecto de alguien más que te gustaría usar tú mismo, entonces puedes referirte a las siguientes formas.

En el Área de Configuración a la derecha, hay un botón para más opciones, seleccionamos **Import**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/33.png" /></div>

A continuación podemos pegar el código que hemos compartido u obtenido en la ventana emergente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/34.png" /></div>

En este ejemplo, compartiremos contigo un proyecto maravilloso que se enfoca en la capacidad de detectar, en tiempo real, si alguien ha entrado al ambiente a través de una cámara y enviar una notificación por correo electrónico si se detecta una persona.

```json
[
    {
        "id": "7963f97f362cdfc6",
        "type": "tab",
        "label": "warning email",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "41a8f267df4eb722",
        "type": "video input",
        "z": "7963f97f362cdfc6",
        "name": "",
        "deviceType": "rtsp",
        "rtsp": "",
        "local": "video0",
        "resolution": "2560",
        "frequency": "60",
        "senderr": true,
        "active": false,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "c5fef75b0ab418c6"
            ]
        ]
    },
    {
        "id": "c5fef75b0ab418c6",
        "type": "detection",
        "z": "7963f97f362cdfc6",
        "name": "",
        "modelName": "coco_dataset",
        "showResult": true,
        "senderr": true,
        "x": 380,
        "y": 200,
        "wires": [
            [
                "40523cc8b61cfcc9"
            ],
            [
                "689c67f6610be9e2"
            ]
        ]
    },
    {
        "id": "40523cc8b61cfcc9",
        "type": "video view",
        "z": "7963f97f362cdfc6",
        "name": "",
        "width": 640,
        "data": "payload",
        "dataType": "msg",
        "thumbnail": false,
        "active": false,
        "pass": false,
        "outputs": 0,
        "x": 650,
        "y": 140,
        "wires": []
    },
    {
        "id": "689c67f6610be9e2",
        "type": "switch",
        "z": "7963f97f362cdfc6",
        "name": "person intrusion detected",
        "property": "payload.labels",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "person",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 540,
        "wires": [
            [
                "40f6ca0fbb322dd5"
            ]
        ]
    },
    {
        "id": "40f6ca0fbb322dd5",
        "type": "e-mail",
        "z": "7963f97f362cdfc6",
        "server": "",
        "port": "465",
        "secure": true,
        "tls": true,
        "name": "",
        "dname": "warning email",
        "credentials": {
            "userid": "",
            "password": ""
        },
        "x": 720,
        "y": 620,
        "wires": []
    },
    {
        "id": "80a51065a9ee835e",
        "type": "ui_spacer",
        "z": "7963f97f362cdfc6",
        "name": "spacer",
        "group": "529bf2dedebe9911",
        "order": 2,
        "width": 12,
        "height": 1
    },
    {
        "id": "529bf2dedebe9911",
        "type": "ui_group",
        "name": "Default",
        "tab": "ad4ccf9922566f44",
        "order": 1,
        "disp": true,
        "width": 20,
        "collapse": false,
        "className": ""
    },
    {
        "id": "ad4ccf9922566f44",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

Tenga en cuenta que el código no es directamente utilizable, necesitará completar `"rtsp": "",` con la fuente de entrada de su cámara web. Complete `"server": "",` con la dirección de su servidor de correo electrónico y `"credentials": {
            "userid": "",
            "password": ""
        },` complete su nombre de usuario y contraseña.

Cuando todo esté listo, el programa de bloques funciona y le envía un correo electrónico cuando detecta actividad.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/36.png" /></div>

En este proyecto, se utilizan dos nuevos bloques, **switch** y **email**.

El bloque de construcción switch es donde siente que el programa va basándose en la información de juicio que establezca. Por ejemplo, en este programa he nombrado el bloque switch **person intrusion detected** y completé la propiedad **payload.labels**. **payload.labels** es el valor clave del bloque anterior **object detection**. Cuando el valor de la propiedad es igual a **person**, se ejecuta el bloque conectado después de switch.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/31.png" /></div>

El bloque email es un poco más fácil de configurar, solo necesita completar la dirección de correo electrónico y la dirección del servidor del que desea recibir mensajes, dependiendo del protocolo que soporte su buzón de correo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/32.png" /></div>

Por supuesto, si copia el código directamente y completa los cambios de código, puede no hacer más cambios a los bloques. Si se siente más cómodo usando la interfaz gráfica, también puede completar la configuración de estos elementos en la configuración de bloques.

## Solución de problemas

### ¿Qué debo hacer si docker no inicia exitosamente y si no hay seed recomputer en los bloques?

Podemos cerrar docker y reiniciarlo con el siguiente comando.

```sh
cd node-red-contrib-ml/
sudo docker-compose --file docker-compose.yaml down
sudo docker-compose --file docker-compose.yaml up
```

### ¿Qué debo hacer si no puedo observar los resultados o si hay errores en la depuración?

Por favor, usa el siguiente comando para ver si la instalación de docker es correcta. Deberías obtener los tres dockers mostrados en el diagrama. Si falta alguno de ellos, regresa al primer paso en **Primeros Pasos** y reinstala el docker.

```sh
sudo docker image ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/37.png" /></div>

Si la instalación coincide con la imagen, entonces verifica el estado de ejecución del docker lanzado usando el siguiente comando.

```sh
sudo docker ps
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/38.png" /></div>

Si no hay docker iniciado como en la imagen anterior, intenta reiniciar el docker o verifica si el modelo y la versión del sistema del dispositivo coinciden con los requisitos.

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
