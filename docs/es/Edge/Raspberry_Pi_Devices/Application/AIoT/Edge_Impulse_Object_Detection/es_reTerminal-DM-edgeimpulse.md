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
  date: 9/21/2023
  author: Kasun Thushara
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## Introducción

En el panorama digital actual, la integración de tecnologías de IA de borde e IoT (Internet de las Cosas) ha abierto posibilidades emocionantes para desarrolladores y entusiastas. Una de estas plataformas poderosas que simplifica la creación de modelos de aprendizaje automático para dispositivos de borde es Edge Impulse. En esta guía paso a paso, te guiaremos a través del proceso de instalar Edge Impulse en tu dispositivo reTerminal DM y crear una solución local de detección de objetos.

Lo que aprenderás:

- Instalar dependencias esenciales para tu reTerminal DM.
- Configurar Node.js y npm para tu proyecto.
- Desplegar la herramienta Edge Impulse Linux CLI.
- Crear y entrenar un modelo de detección de objetos dentro de Edge Impulse.
- Desplegar y probar tu modelo localmente en el dispositivo reTerminal DM.

Al final de esta guía, tendrás una comprensión práctica de cómo aprovechar el poder de Edge Impulse para la detección de objetos en dispositivos de borde como el reTerminal DM. Así que, ¡sumerjámonos y exploremos el emocionante mundo de la detección de objetos impulsada por IA local!

### Preparación del hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulse es una plataforma versátil dedicada a simplificar el desarrollo de modelos de aprendizaje automático adaptados para dispositivos edge, como microcontroladores y sistemas embebidos. Esta solución integral simplifica todo el flujo de trabajo de aprendizaje automático, abarcando la recolección de datos, preprocesamiento, entrenamiento de modelos, despliegue y monitoreo, todo dentro de un entorno unificado. Una de sus características destacadas es su interfaz fácil de usar, que permite a los usuarios recopilar y etiquetar datos sin esfuerzo, mientras ofrece una biblioteca de bloques de procesamiento de señales preconfigurados y algoritmos de aprendizaje automático para el desarrollo eficiente de modelos. Edge Impulse está diseñado para un rendimiento de inferencia óptimo en dispositivos edge con recursos limitados, asegurando procesamiento en tiempo real sin depender de conectividad continua a internet. Se ve mejorado además por la integración perfecta con una amplia gama de plataformas de hardware populares, empoderando a los desarrolladores para desplegar modelos con facilidad.

### Preparación del software

Recomendamos instalar la versión más reciente del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [guía](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os).

:::note
Si no estás utilizando el reTerminal DM (con cámara y PoE) y deseas configurar la cámara de Raspberry Pi, debes seguir las instrucciones proporcionadas en esta [guía](https://wiki.seeedstudio.com/es/reterminal-dm-hardware-guide/#install-camera).
:::

Necesitarás una cuenta de Edge Impulse para comenzar, así que por favor crea una visitando este [enlace](https://edgeimpulse.com/). Por defecto se creará un proyecto inicial.

## Instalar Dependencias en tu dispositivo reTerminal DM

**Para configurar este dispositivo en Edge Impulse, ejecuta los siguientes comandos uno por uno**

```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## Conectando a Edge Impulse

Con todo el software configurado, conecta tu cámara o micrófono a tu reTerminal DM. Necesitarás proporcionar tu dirección de correo electrónico, contraseña vinculada a tu cuenta de Edge Impulse y un nombre de dispositivo.

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectingdevice.PNG" /></center>

## Verificando que tu dispositivo está conectado

¡Eso es todo! Tu dispositivo ahora está conectado a Edge Impulse. Para verificar esto, ve a tu proyecto de Edge Impulse y haz clic en Devices. El dispositivo aparecerá listado aquí.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/connectdevice.PNG" /></center>

## Detectar objetos

### Construyendo un conjunto de datos

Tienes la opción de recopilar datos desde la cámara Raspberry Pi conectada directamente a través del reTerminal DM o de cargar datos previamente recopilados desde tu almacenamiento local.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/datacollection.png" /></center>

Al seleccionar 'Camera' como sensor y proporcionar un nombre de etiqueta, puedes iniciar el proceso de muestreo de datos.

### Etiquetando datos

Todas tus imágenes recopiladas estarán preparadas para anotación en la "cola de etiquetado". Etiquetar tus objetos es tan fácil como arrastrar una caja alrededor del objeto e introducir una etiqueta. Luego haz clic en guardar etiqueta.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/labeling.PNG" /></center>

### Rebalanceando tu conjunto de datos

Para validar la efectividad de tu modelo, es esencial reservar una porción de tus datos, usualmente alrededor del 20%, como un 'conjunto de prueba'. Estos datos no deben usarse durante el entrenamiento del modelo sino únicamente para propósitos de validación. Puedes cambiar fácilmente entre tus conjuntos de entrenamiento y prueba usando los dos botones ubicados arriba del widget 'Data collected'. Si has recopilado datos en tu placa de desarrollo y actualmente no hay datos en el conjunto de prueba, puedes resolver esto navegando a **Dashboard > Perform train/test split.**

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/split.PNG" /></center>

### Crear un impulso

En este tutorial, hemos estado trabajando con imágenes de 96x96, pero es importante notar que Edge Impulse puede manejar otras resoluciones siempre que las imágenes sean cuadradas. Para configurar esto, sigue estos pasos: Primero, ve a **Create Impulse,** luego establece el **image width** e **image height** a las dimensiones deseadas (ej., 96,160 o 320). A continuación, elige **Fit shortest axis** como el **resize mode,** y añade los bloques **Images** y **Object Detection (Images)**. Finalmente, haz clic en **Save Impulse** para aplicar estas configuraciones.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/impulse.PNG" /></center>

### Generación de características

En este paso, realizarás las siguientes tareas:

- Redimensionar todos los datos.
- Aplicar el bloque de procesamiento a todo el conjunto de datos.
- Generar una visualización 3D de tu conjunto de datos completo.
- Haz clic en 'Generate features' para iniciar el proceso.

Después, se cargará el 'Feature explorer'. Este explorador de características representa un gráfico de todos los datos en tu conjunto de datos. Dado que las imágenes tienen numerosas dimensiones, utilizamos una técnica llamada 'reducción de dimensionalidad' en el conjunto de datos antes de visualizarlo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/generatf.PNG" /></center>

### Entrenamiento

Dentro de la pestaña '**Object Detection**', tienes la opción de entrenar tu conjunto de datos. Para hacer esto, necesitarás configurar parámetros específicos y seleccionar el modelo que pretendes usar. En este tutorial, estamos optando por el modelo FOMO, que, según su sitio web, introduce un enfoque revolucionario para ejecutar modelos de detección de objetos en dispositivos con recursos limitados. FOMO es un algoritmo innovador que aporta capacidades de detección, seguimiento y conteo de objetos en tiempo real a microcontroladores, marcando un hito significativo. Notablemente, FOMO cuenta con una ventaja de velocidad notable, superando a MobileNet SSD por un factor de 30, y puede operar con menos de 200K de RAM.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/training.PNG" /></center>

Después de completar el proceso de entrenamiento, recibirás una matriz de confusión que se asemeja a la siguiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/confutionmat.PNG" height="auto"/></center>

### Validando tu modelo

Ahora que el modelo está entrenado, pongámoslo a prueba usando algunos datos de prueba. Durante la recopilación de datos, dividimos el conjunto de datos en subconjuntos de entrenamiento y prueba. El modelo fue entrenado exclusivamente con los datos de entrenamiento. Por lo tanto, podemos emplear el conjunto de datos de prueba para evaluar qué tan efectivamente funcionará el modelo en escenarios del mundo real. Este paso de validación es crucial para asegurar que el modelo no haya sobreajustado los datos de entrenamiento, un problema común. Para validar nuestro modelo, navega a **Model Testing** y selecciona **Classify all**

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/test.png" height="auto"/></center>

### Ejecutando el modelo en tu dispositivo reTerminal DM

en una nueva terminal en blanco ejecuta la siguiente línea de comandos.

```sh
edge-impulse-linux-runner
```

Esta acción activará la construcción y descarga del modelo. Luego se ejecutará en tu reTerminal DM. Si estás en la misma red, puedes acceder a una vista en vivo de la transmisión de la cámara y ver los resultados de clasificación directamente desde tu reTerminal DM. Ve a la URL que sugiere el dispositivo.

```sh
Want to see a feed of the camera and live classification in your browser? Go to http://192.168.8.117:4912
```

## Conclusión

En conclusión, la integración perfecta de reTerminal DM y Edge Impulse permite a los desarrolladores desbloquear todo el potencial de la IA en el borde. reTerminal DM, con su hardware robusto y capacidades versátiles, sirve como una excelente plataforma para ejecutar soluciones de detección de objetos en tiempo real. Cuando se combina con Edge Impulse, que simplifica la creación e implementación de modelos de aprendizaje automático en dispositivos con recursos limitados, las posibilidades se vuelven ilimitadas. Ya sea que estés trabajando en aplicaciones IoT, robótica, o cualquier proyecto que demande IA eficiente en el dispositivo, esta poderosa sinergia entre reTerminal DM y Edge Impulse abre un mundo de innovación en el borde de la tecnología.

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
