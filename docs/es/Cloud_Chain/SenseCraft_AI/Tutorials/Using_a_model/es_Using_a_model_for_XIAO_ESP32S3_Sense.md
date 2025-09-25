---
sidebar_position: 1
description: Cómo usar un modelo para XIAO ESP32S3 Sense
title: Usando un modelo para XIAO ESP32S3 Sense
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.webp
slug: /es/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao
aliases:
  - /es/sensecraft_ai_pretrained_models_for_xiao
last_update:
  date: 12/02/2024
  author: Citric
---

# Usando un modelo para XIAO ESP32S3 Sense

SenseCraft AI es una plataforma poderosa que proporciona un vasto repositorio de modelos de IA compatibles con varios dispositivos. Permite a desarrolladores y entusiastas desplegar y experimentar fácilmente con diferentes modelos de IA en su hardware. En este tutorial integral, te guiaremos a través del proceso de usar un modelo de SenseCraft AI en la placa XIAO ESP32S3 Sense y previsualizar la salida del modelo. También profundizaremos en algunos conceptos clave y configuraciones para ayudarte a entender y optimizar el rendimiento del modelo.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- **Placa XIAO ESP32S3 Sense**: Esta es una placa de desarrollo compacta y versátil que combina el poder del microcontrolador ESP32-S3 con una gama de sensores y periféricos.

- **Cable USB-C**: Necesitarás un cable USB para conectar la placa XIAO ESP32S3 Sense a tu computadora para programación y suministro de energía.

- **Acceso a la página web del repositorio de modelos de SenseCraft AI**: Asegúrate de tener una conexión a internet estable y poder acceder al sitio web de SenseCraft AI.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Paso 1. Filtrar modelos para XIAO ESP32S3 Sense

Abre tu navegador web y navega al repositorio de modelos de SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

La página del repositorio de modelos muestra una amplia gama de modelos de IA disponibles para diferentes dispositivos y aplicaciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

En la barra lateral izquierda de la página web, localiza la sección **Supported Devices**. De la lista de dispositivos, haz clic en **XIAO ESP32S3 Sense** para filtrar los modelos compatibles con tu dispositivo específico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png" style={{width:1000, height:'auto'}}/></div>

Este paso asegura que solo veas los modelos que pueden ser desplegados y ejecutados en la placa XIAO ESP32S3 Sense.

## Paso 2. Elegir un Modelo

Para el propósito de este tutorial, usaremos el modelo **Face Detection** como ejemplo. Sin embargo, siéntete libre de explorar y experimentar con otros modelos basados en tus intereses y requerimientos.

Haz clic en el modelo **Face Detection** para abrir su página dedicada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png" style={{width:1000, height:'auto'}}/></div>

En la página del modelo, encontrarás información detallada sobre el modelo, incluyendo su descripción, Model Precision y Model Format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png" style={{width:1000, height:'auto'}}/></div>

En la página del modelo, haz clic en el botón **Deploy Model** ubicado en la parte superior de la página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png" style={{width:1000, height:'auto'}}/></div>

Esta acción iniciará el proceso de despliegue para el modelo seleccionado, preparándolo para ser descargado y ejecutado en tu placa XIAO ESP32S3 Sense.

## Paso 3. Conectar Tu Dispositivo

Después de hacer clic en el botón Deploy Model, haz clic en el botón **Connect Device** que aparece debajo de la página de despliegue.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

Se abrirá una nueva página, en este punto, por favor conecta tu XIAO ESP32S3 Sense a tu computadora vía cable USB-C.

En la página de conexión del dispositivo, verás un resumen de la información del modelo, incluyendo su nombre e id del modelo. Revisa los detalles cuidadosamente para asegurar que el modelo correcto esté seleccionado para tu placa XIAO ESP32S3 Sense. Si la información es precisa, haz clic en el botón **Confirm** para proceder con el despliegue del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png" style={{width:1000, height:'auto'}}/></div>

Después de confirmar la información del modelo, aparecerá una ventana pidiéndote que selecciones el puerto serie para tu placa XIAO. El puerto serie es el canal de comunicación entre tu computadora y la placa XIAO ESP32S3 Sense. Elige el número de puerto correcto correspondiente a tu XIAO ESP32S3 Sense. Si no estás seguro, puedes referirte al administrador de dispositivos de tu sistema operativo o a la documentación de la placa para identificar el puerto correcto.

Haz clic en el botón **Connect** para establecer la conexión entre tu computadora y la placa XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## Paso 4. Carga del Modelo

Una vez que se establece la conexión, el modelo seleccionado comenzará a descargarse a tu placa XIAO. El proceso de carga del modelo puede tomar aproximadamente 1-2 minutos, dependiendo del tamaño del modelo y la velocidad de tu conexión a internet. Durante este paso, los archivos del modelo necesarios y las dependencias se transfieren a la placa XIAO ESP32S3 Sense, preparándola para ejecutar el modelo de IA localmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png" style={{width:1000, height:'auto'}}/></div>

## Paso 5. Vista Previa del Modelo

Después de que la carga del modelo sea exitosa, la función de vista previa se iniciará automáticamente. La ventana de vista previa mostrará una transmisión de video en tiempo real desde la cámara de tu XIAO ESP32S3 Sense, junto con los resultados de detección del modelo superpuestos en el video. En el caso del modelo de Detección de Rostros, verás cuadros delimitadores dibujados alrededor de los rostros detectados en la transmisión de video. Cada cuadro delimitador representa un rostro que el modelo ha identificado. La función de vista previa te permite ver la salida del modelo en tiempo real, brindándote una retroalimentación visual inmediata de su rendimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png" style={{width:1000, height:'auto'}}/></div>

## Ajuste Fino del Modelo (Opcional)

1. Si deseas optimizar el rendimiento del modelo o adaptarlo a tu caso de uso específico, puedes ajustar finamente la configuración del modelo usando las opciones disponibles debajo de la sección de vista previa.

2. Dos parámetros importantes que puedes ajustar son el "Umbral de Confianza" y el "Umbral de Intersección sobre Unión (IoU)".

   - **Umbral de Confianza**: Este valor determina el nivel mínimo de confianza requerido para que el modelo considere una detección como válida. Un umbral de confianza más alto resultará en menos detecciones pero con mayor certeza, mientras que un umbral más bajo permitirá más detecciones pero puede incluir algunos falsos positivos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **Umbral IoU**: IoU es una métrica que mide la superposición entre el cuadro delimitador predicho y el cuadro delimitador de verdad fundamental. Se utiliza para determinar la precisión de la detección de objetos. El umbral IoU establece el valor mínimo de IoU requerido para que una detección sea considerada un verdadero positivo. Ajustar este umbral puede ayudar en el ajuste fino de la precisión y recuperación del modelo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Experimenta con diferentes valores para el Umbral de Confianza y el Umbral IoU para encontrar el equilibrio óptimo entre detectar rostros con precisión y minimizar los falsos positivos. La mejor configuración puede variar dependiendo de tu aplicación específica y las características de las imágenes o transmisión de video.

## Conclusión

¡Felicitaciones! Has desplegado exitosamente un modelo de Detección de Rostros de SenseCraft AI en tu placa XIAO ESP32S3 Sense, previsualizaste su salida y aprendiste cómo ajustar finamente el rendimiento del modelo.

Siguiendo los pasos descritos en este tutorial, puedes explorar y experimentar fácilmente con varios modelos de IA disponibles en el repositorio de SenseCraft AI en tu XIAO ESP32S3 Sense. La plataforma SenseCraft AI proporciona una interfaz fácil de usar y una amplia gama de modelos para elegir, haciéndola accesible tanto para principiantes como para desarrolladores experimentados.

Recuerda consultar la documentación y recursos proporcionados por SenseCraft AI y la placa XIAO ESP32S3 Sense para más información sobre modelos compatibles, sus capacidades y cualquier opción de configuración adicional disponible.

Siéntete libre de explorar otros modelos, experimentar con diferentes configuraciones y adaptarlos a tus proyectos o aplicaciones específicas. Las posibilidades son infinitas con la combinación de SenseCraft AI y la placa XIAO ESP32S3 Sense.

¡Feliz experimentación y creación con modelos de SenseCraft AI en tu XIAO ESP32S3 Sense!

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
