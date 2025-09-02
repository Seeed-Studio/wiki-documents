---
description: Detección de objetos con Edge Impulse y reTerminal DM
title: Detección de objetos con Edge Impulse y reTerminal DM
keywords:
  - Edge
  - reTerminalDM Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-edgeimpulse
last_update:
  date: 04/03/2025
  author: Erick González
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## Introducción

En el panorama digital actual, la integración de IA en el edge y tecnologías IoT (Internet de las Cosas) ha abierto posibilidades emocionantes para desarrolladores y aficionados. Una de las plataformas que facilita la creación de modelos de aprendizaje automático para dispositivos de borde es Edge Impulse. En esta guía paso a paso, te mostraremos cómo instalar Edge Impulse en tu dispositivo reTerminal DM y crear una solución local de detección de objetos.

Lo que aprenderás:

- Instalar dependencias esenciales para tu reTerminal DM.
- Configurar Node.js y npm para tu proyecto.
- Implementar la herramienta CLI de Edge Impulse para Linux.
- Crear y entrenar un modelo de detección de objetos en Edge Impulse.
- Implementar y probar tu modelo de forma local en el dispositivo reTerminal DM.

Al final de esta guía, tendrás un entendimiento práctico de cómo aprovechar el poder de Edge Impulse para la detección de objetos en dispositivos de borde como el reTerminal DM. ¡Vamos a sumergirnos en el apasionante mundo de la detección de objetos impulsada por IA local!


### Preparación de hardware
<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulse es una plataforma versátil dedicada a simplificar el desarrollo de modelos de aprendizaje automático diseñados para dispositivos de borde, como microcontroladores y sistemas embebidos. Ofrece una solución integral que cubre todo el flujo de trabajo de aprendizaje automático: recolección de datos, preprocesamiento, entrenamiento de modelos, implementación y monitoreo, todo dentro de un entorno unificado. Una de sus características destacadas es su interfaz fácil de usar, que permite recolectar y etiquetar datos sin dificultad, además de proporcionar una biblioteca de bloques de procesamiento de señales y algoritmos de aprendizaje automático para el desarrollo eficiente de modelos.

Edge Impulse está diseñado para un rendimiento de inferencia óptimo en dispositivos de borde con recursos limitados, lo que garantiza el procesamiento en tiempo real sin necesidad de conexión continua a internet. También se integra a la perfección con una amplia gama de plataformas de hardware populares, permitiendo a los desarrolladores implementar modelos con facilidad.

### Preparación de software

Recomendamos instalar la última versión de Raspberry Pi OS de 64 bits desde su sitio oficial. Si prefieres un nuevo Raspbian OS, sigue estos [pasos](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os).

:::note
Si no estás utilizando reTerminal DM (con cámara y PoE) y deseas configurar la cámara de Raspberry Pi, sigue [esta guía](https://wiki.seeedstudio.com/reterminal-dm-hardware-guide/#install-camera).
:::

Necesitarás una cuenta en Edge Impulse para comenzar; crea una en este [enlace](https://edgeimpulse.com/). Por defecto, se creará un proyecto inicial.

## Instalar dependencias en tu dispositivo reTerminal DM

**Para configurar este dispositivo en Edge Impulse, ejecuta los siguientes comandos uno por uno**


```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## Conectarse a Edge Impulse

Con todo el software listo, conecta tu cámara o micrófono al reTerminal DM. Deberás proporcionar tu correo y contraseña asociados a tu cuenta de Edge Impulse, además de un nombre de dispositivo.

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectingdevice.PNG" /></center>

## Verificar que tu dispositivo esté conectado

¡Eso es todo! Tu dispositivo ya está conectado a Edge Impulse. Para verificarlo, ve a tu proyecto en Edge Impulse y haz clic en **Devices**. El dispositivo aparecerá aquí.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectdevice.PNG" /></center>

## Detectar objetos

### Construir un dataset

Puedes recolectar datos de la cámara Raspberry Pi conectada directamente al reTerminal DM o subir datos preexistentes desde tu almacenamiento local.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/datacollection.png" /></center>

Al seleccionar 'Camera' como sensor y proporcionar un nombre de etiqueta, puedes iniciar el proceso de muestreo de datos.

### Etiquetar datos

Todas las imágenes recolectadas se mostrarán en la "labeling queue" para su anotación. Etiquetar tus objetos es tan sencillo como arrastrar un cuadro alrededor del objeto y escribir la etiqueta. Luego haz clic en Guardar etiqueta.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/labeling.PNG" /></center>

### Reequilibrar tu dataset

Para validar la efectividad de tu modelo, es esencial reservar alrededor del 20% de tus datos como 'test set'. Estos datos no se usan durante el entrenamiento, sino sólo para validación. Puedes alternar entre train y test con los botones sobre el widget "Data collected". Si recopilaste datos en la placa de desarrollo y no hay datos en el test set, ve a **Dashboard > Perform train/test split**.

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/split.PNG" /></center>

### Crear un Impulse

En este tutorial usamos imágenes de 96x96, pero Edge Impulse maneja otras resoluciones mientras las imágenes sean cuadradas. Para configurarlo:
- Ve a **Create Impulse**
- Fija **image width** y **image height** (p.ej. 96,160,320)
- Elige **Fit shortest axis** como **resize mode**
- Añade **Images** y **Object Detection (Images)** blocks
- Haz clic en **Save Impulse**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/impulse.PNG" /></center>

### Generar características

En este paso:
- Redimensionas todos los datos
- Aplicas el bloque de procesamiento a todo el dataset
- Generas una visualización 3D de todos tus datos
- Haz clic en 'Generate features'

Luego se cargará el 'Feature explorer', un gráfico de todos los datos del dataset. Como las imágenes tienen muchas dimensiones, usamos 'dimensionalidad reducida' antes de la visualización.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/generatf.PNG" /></center>

### Entrenamiento

En la pestaña '**Object Detection**', puedes entrenar tu dataset. Ajusta parámetros y escoge el modelo que usarás. Aquí optamos por FOMO, que, según su web, revoluciona la forma de ejecutar modelos de detección de objetos en dispositivos con recursos limitados. FOMO ofrece detección de objetos, seguimiento y conteo en tiempo real en microcontroladores, superando en velocidad a MobileNet SSD por un factor de 30, y funcionando con menos de 200K de RAM.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/training.PNG" /></center>

Tras completar el entrenamiento, obtendrás una matriz de confusión similar a esta:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/confutionmat.PNG" height="auto"/></center>

### Validar tu modelo

Con el modelo entrenado, pruébalo con datos de prueba. Durante la recolección, dividimos el dataset en train y test. El modelo sólo vio train data. Así, con test data comprobamos su desempeño real, evitando sobreajuste. Para validarlo:

Ve a **Model Testing** y elige **Classify all**

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/test.png" height="auto"/></center>

### Ejecutar el modelo en reTerminal DM

en una terminal nueva:

```sh
edge-impulse-linux-runner
```

Esto compilará y descargará el modelo, ejecutándolo en tu reTerminal DM. Si estás en la misma red, puedes acceder a la vista en vivo de la cámara y ver resultados de clasificación desde tu reTerminal DM. Ve a la URL que indica el dispositivo:

```sh
Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912
```

## Conclusión

En conclusión, la integración fluida de reTerminal DM y Edge Impulse permite a los desarrolladores explotar todo el potencial de la IA en el edge. reTerminal DM, con su robusto hardware y capacidades versátiles, es una plataforma excelente para ejecutar soluciones de detección de objetos en tiempo real. Combinado con Edge Impulse —que simplifica la creación e implementación de modelos de aprendizaje automático en dispositivos con recursos limitados— las posibilidades se vuelven infinitas. Ya sea en aplicaciones IoT, robótica o cualquier proyecto que requiera IA en el dispositivo, esta potente sinergia entre reTerminal DM y Edge Impulse abre un mundo de innovación en la vanguardia de la tecnología.

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para distintas preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>