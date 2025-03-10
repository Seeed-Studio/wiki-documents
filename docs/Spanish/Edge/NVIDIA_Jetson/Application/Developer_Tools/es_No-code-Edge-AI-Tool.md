---
description: Herramientas para Edge AI sin código
title: Herramientas para Edge AI sin código
keywords:
  - Edge
  - Aplicación con la reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/No-code-Edge-AI-Tool
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Herramienta de Edge AI sin código

Nos complace mostrarles nuestro último desarrollo de la reComputer, potenciada por la Nvidia Jetson Nano para un reconocimiento de objetos rápido y sencillo.

Con solo unos pocos comandos simples, el entorno se puede descargar e implementar, y el proceso de monitorear, identificar y generar resultados desde una pantalla en vivo no puede ser más simple que tres bloques.

## Video Demo

**Demo de seguridad en almacenes**

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**Demo guardian de la granja**

<iframe width={560} height={315} src="https://www.youtube.com/embed/Jt66IG4E6uM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Pasos previos

En este ejemplo, veremos cómo descargar e instalar lo que necesitamos en nuestro dispositivo NVIDIA Jetson, luego abriremos la herramienta Edge AI y realizaremos la detección de objetos con una cámara en vivo. A continuación se muestra una descripción general de los pasos.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/step.png" /></div>

1. Descargar y desplegar
2. Acomodar los bloques
3. Mostrar los resultados

### Requerimiento de Hardware

Antes de empezar, necesitarás contar con el siguiente Hardware:

<table>
  <thead>
    <tr>
      <th>Hardware Image</th>
      <th>Hardware Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/reComputer-Jetson-Nano.jpg" width={210} /></td>
      <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010 with Jetson Nano module</a><br />o <br /><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020 with Jetson Nano module</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/3.png" width={210} /></td>
      <td>Logitech C270 HD Webcam<br />o<br /><a href="https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano" target="_blank" rel="noopener noreferrer">otra cámara V4L2 USB Camera soportada por Jetson</a></td>
    </tr>
  </tbody>
</table>

¡¡¡Atención!!!
    Este ejemplo solo se ejecutará en la reComputer potenciada por la Jetson Nano. Ten en cuenta que la reComputer potenciada por la Jetson Xavier NX no es compatible para la aplicación desarrollada en esta wiki, pero será compatible en el futuro.

### Requerimientos de Software

Antes de comenzar, asegúrate que tu dispositivo tenga actualizado [JetPack 4.6.1] (https://developer.nvidia.com/embedded/jetpack-sdk-461). Si deseas actualizar Jetson Nano eMMC con JetPack 4.6.1, consulta [este link](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html).

Puedes verificar la versión de JetPack instalada escribiendo lo siguiente en la terminal:

```sh
cat /etc/nv_tegra_release
```

Y el output debe lucir como a continuación:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/node-red/check-jp-version.png" /></div>

**Nota:** R32.7.1 corresponde a JetPack 4.6.1

## Primeros pasos

Una vez que el hardware y el software estén listos, pasemos a la experiencia de Edge AI Tool. En este ejemplo, conectarás ru pantalla, mouse o teclado según tus preferencias; también puedes controlar tu NVIDIA Jetson de forma remota a través de SSH o VNC Viewer.

### Paso 1. Descargar y desplegar

Abre una línea de comandos en tu dispositivo NVIDIA Jetson e ingresa el siguiente comando para descargar los archivos necesarios en la Jetson.

```sh
git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git
```

Una vez que se complete la descarga, ejecuta el siguiente comando para iniciar la ventana acoplable requerida.

```sh
cd node-red-contrib-ml
sudo ./docker-ubuntu.sh
```

Todo el proceso de instalación y puesta en marcha tardará entre 7 y 9 minutos.

### Paso 2. Acomodo de los bloques

Una vez completada la instalación, usa el navegador Google Chrome que viene en tu sistema NVIDIA Jetson para ingresar la siguiente URL y acceder a la interfaz operativa.

```
127.0.0.1:1880
```

También puedes ingresar la dirección IP más el número de puerto (1880) en la barra de direcciones para acceder a la página de acciones.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/6.png" /></div>

Podemos ver la distribución de las operaciones de Edge AI Tool en el siguiente diagrama.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/8.png" /></div>

- **Block Area: (Área de bloques)** Este área alberga una serie de bloques que pueden ser manipulados por el usuario.

- **Programming Area: (Área de programación)** Esta área es de programación. El usuario puede arrastrar y soltar bloques desde el Área de bloques al Área de programación para completar el programa.

- **Setup Area: (Área de configuración)** En el extremo derecho está el área de configuración. Aquí podemos ver el flujo del Área de programación y podemos completar algunas configuraciones necesarias o configurar operaciones en bloques, etc.

En el Área de bloques, hay una sección llamada **seeed reComputer** donde nos centraremos en el uso de estos tres bloques.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/7.png" /></div>

- **video input: (video de entrada)** Este bloque se utiliza para obtener la transmisión de video desde la entrada de la cámara. Este bloque se puede configurar para seleccionar una cámara web o una cámara USB V4L2 local, etc.

- **detection: (Detección)** Este bloque se utiliza para seleccionar el modelo a reconocer. La transmisión de vídeo de entrada se reconocerá utilizando el modelo que haya seleccionado. Por el momento, en esta versión solo se puede utilizar el **conjunto de datos COCO**.

- **video view: (vista de video)** Este bloque se utiliza para generar la transmisión de video procesada en la pantalla.

A continuación podemos echar un vistazo a la composición de los bloques. Toma el bloque de construcción **video input** como ejemplo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/12.png" /></div>

A la izquierda de este bloque hay un área cuadrada azul. Cuando este área está oculta, significa que la entrada de transmisión de video está apagada.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/11.png" /></div>

Cuando se muestra este área, significa que la entrada de transmisión de video está activa.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/13.png" /></div>

De manera similar, el bloque de visualización de video tiene un bloque cuadrado como este en el lado derecho.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/14.png" /></div>

Si hay un punto azul en la parte superior derecha del bloque, esto es un recordatorio de que el bloque ha sido editado, pero no implementado. Por cierto, todo el proyecto se ejecuta y debe programarse con bloques e implementarse antes de que se muestren los resultados.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/15.png" /></div>

El cuadrado gris a la derecha del bloque es donde se conectan los bloques. Haz click con el botón izquierdo del mouse aquí y arrástralo al siguiente bloque a la izquierda de la conexión, luego podrás conectar los dos bloques para formar un flujo de programa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/16.png" /></div>

Cabe señalar que el flujo del programa se ejecuta de **izquierda a derecha** y que la unión de la izquierda solo se puede conectar con la unión de la derecha.

Si no hay ninguna unión a la izquierda del bloque, se debe utilizar como nodo inicial del flujo del programa. Si el lado derecho del bloque no tiene conexiones, entonces debe usarse como el nodo final de todo el flujo del programa.

Un bloque con dos uniones, como **object detection** (detección de objetos), significa que se pueden enviar varios contenidos diferentes al bloque. Entonces es posible generar tanto transmisiones de vídeo como registros.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/17.png" /></div>

Los bloques son muy fáciles y rápidos de usar. Puedes arrastrar el bloque que deseas usar presionando prolongadamente el botón izquierdo del mouse y luego arrastrándolo al Área de programación de la pantalla principal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/9.png" /></div>

Con base en la descripción anterior de los bloques, podemos diseñar un procedimiento de bloque simple de la siguiente manera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/18.png" /></div>

El programa que se muestra arriba es el que toma la transmisión de video de entrada de la cámara y luego usa la detección del modelo para ingresar el resultado del reconocimiento del objeto.

### Paso 3. Mostrar resultados

Una vez que se han colocado los bloques, aún necesitamos realizar una configuración simple de los bloques antes de que puedan usarse. Si deseas configurar un bloque en particular, puedes hacer doble click en él y aparecerá el cuadro de configuración correspondiente en el lado derecho.

Comencemos por configurar el bloque **video input** (Entrada de video).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/19.png" /></div>

- **Device type (Tipo de dispositivo):** Aquí puedes configurar el tipo de cámara que tienes; actualmente se admiten dos tipos de cámara, cámara web y cámara local.

- **Video:** Selecciona tu cámara aquí. Si no hay ninguna cámara disponible, verifica que tu cámara sea compatible y que esté conectada correctamente.

- **URL:** Si has seleccionado una cámara web, el campo "Vídeo" se convertirá en una URL. Completa la fuente de entrada de la cámara web.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/20.png" /></div>

- **Resolution (Resolución):** Selecciona la resolución de tu cámara. Seleccionar la resolución incorrecta puede provocar errores en tiempo de ejecución.

Para el bloque de **object detection** (Detección de objetos), la configuración es la siguiente:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/21.png" /></div>

- **Model name (Nombre del modelo):** Aquí selecciona el nombre del modelo para el reconocimiento de objetos; actualmente solo se admite el conjunto de datos COCO.

¡¡¡Nota!!!
    COCO es un conjunto de datos de detección, segmentación, etc, de objetos a gran escala. COCO tiene varias características:
    - Segmentación de objetos
    - Reconocimiento en contexto
    - Segmentación de cosas de superpíxeles
    - 330K imágenes (>200K etiquetadas)
    - 1.5 millones de instancias de objetos
    - 80 clases de objetos
    - 91 clases de cassos
    - 5 subtítulos por imágen
    - 250,000 personas con puntos clave

    <div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>

Una vez que lo hayas hecho, haz click en el botón **deploy** en la esquina superior derecha de la interfaz y la secuencia del programa comenzará a ejecutarse.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/23.png" /></div>

Si todo está bien, podrás ver que los objetos identificados por la transmisión de video están rodeados por cuadros y se les asignan valores de confianza.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/24.png" /></div>

## Operación a profundidad

Experimentamos el programa Edge AI Tool en su forma más simple en el capítulo anterior. En esta sección, te guiaremos a través de más extensiones de Edge AI Tool.

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

### Descarga de bloques

Además de los bloques de la sección de bloques, podremos descargar tantos bloques como necesitemos para completar proyectos más complejos.

En el Área de Configuración a la derecha, hay un botón para más opciones, selecciona **Manage palette**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/25.png" /></div>

En la página emergente, podrás ver los bloques instalados y seleccionar **Install** para descargar más bloques. Aquí, tomamos el ejemplo del bloque de buzón.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/27.png" /></div>

Después de la instalación, los bloques recién instalados se pueden ver en la parte inferior de la sección de bloques.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/30.png" /></div>

### Importando otros proyectos

Hay ocasiones en las que quizás te gustaría compartir tus proyectos para que otros los experimenten. O tal vez sea el proyecto de otra persona que te gustaría utilizar, puedes consultar las siguientes formas.

En el Área de Configuración a la derecha, hay un botón para más opciones, selecciona **Import**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/33.png" /></div>

A continuación podremos pegar el código que hemos compartido u obtenido en la ventana emergente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/34.png" /></div>

En este ejemplo, compartiremos contigo un maravilloso proyecto que se centra en la capacidad de detectar, en tiempo real, si alguien ha ingresado al entorno a través de una cámara y enviar una notificación por correo electrónico si se detecta a una persona.

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

Ten en cuenta que el código no se puede utilizar directamente; deberás completar `"rtsp": "",` con la fuente de entrada de tu cámara web. Completa `"servidor": "",` con la dirección de tu servidor de correo electrónico y `"credentials": {
            "userid": "",
            "password": ""
        },` con tu usuario y contraseña.

Cuando todo esté listo, deberías poder probar el programa, el cual te envía un correo electrónico cuando detecta actividad humana frente a la cámara.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/36.png" /></div>

En este proyecto, se utilizan dos bloques nuevos, **switch** y **email**.

El bloque de construcción del interruptor es hacia donde sientes que se dirige el programa según la información de juicio que configuraste. Por ejemplo, en este programa nombré el bloque de interruptores **person intrusion detected** y completé la propiedad **payload.labels**. **payload.labels** es el valor clave del bloque anterior **Object detection**. Cuando el valor de la propiedad es igual a **person**, se ejecuta el bloque conectado después del cambio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/31.png" /></div>

El bloque de correo electrónico es un poco más fácil de configurar, sólo necesitas completar la dirección de correo electrónico y la dirección del servidor desde el que deseas recibir mensajes, según el protocolo que admita tu buzón.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/32.png" /></div>

Por supuesto, si copias el código directamente y completas los cambios en el código, no podrás realizar más cambios en los bloques. Si te sientes más cómodo usando la interfaz gráfica, también puedes completar la configuración de estos elementos en los ajustes del bloque.

## Solución de problemas

### ¿Qué debo hacer si la ventana acoplable no se inicia correctamente y la Seeed reComputer no está disponible en los bloques?

Podemos cerrar Docker y reiniciarlo con el siguiente comando.

```sh
cd node-red-contrib-ml/
sudo docker-compose --file docker-compose.yaml down
sudo docker-compose --file docker-compose.yaml up
```

### ¿Qué debo hacer si no puedo observar los resultados o si hay errores en la depuración?

Utiliza el siguiente comando para ver si la instalación de Docker fue exitosa. Deberías obtener los tres acopladores que se muestran en el diagrama. Si falta alguno de ellos, vuelve al primer paso de **Getting Started** y reinstala la ventana acoplable.

```sh
sudo docker image ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/37.png" /></div>

Si la instalación coincide con la imagen, verifica el estado de ejecución de la ventana acoplable iniciada usando el siguiente comando.

```sh
sudo docker ps
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/38.png" /></div>

Si no hay ninguna ventana acoplable iniciada como en la imagen de arriba, intenta reiniciarla o verifica si el modelo y la versión del sistema del dispositivo cumplen con los requisitos.

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
