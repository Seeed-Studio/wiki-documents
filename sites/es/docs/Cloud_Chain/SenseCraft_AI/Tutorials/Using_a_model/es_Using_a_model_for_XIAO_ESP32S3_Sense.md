---
sidebar_position: 1
description: Cómo usar un modelo para XIAO ESP32S3 Sense
title: Uso de un modelo para XIAO ESP32S3 Sense
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao
aliases:
  - /sensecraft_ai_pretrained_models_for_xiao
last_update:
  date: 12/02/2024
  author: Citric
createdAt: '2024-12-02'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao/
---

# Uso de un modelo para XIAO ESP32S3 Sense

SenseCraft AI es una potente plataforma que proporciona un amplio repositorio de modelos de IA compatibles con varios dispositivos. Permite a desarrolladores y entusiastas desplegar y experimentar fácilmente con diferentes modelos de IA en su hardware. En este completo tutorial, te guiaremos a través del proceso de uso de un modelo de SenseCraft AI en la placa XIAO ESP32S3 Sense y de previsualización de la salida del modelo. También profundizaremos en algunos conceptos y ajustes clave para ayudarte a comprender y optimizar el rendimiento del modelo.

## Requisitos previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- **Placa XIAO ESP32S3 Sense**: Es una placa de desarrollo compacta y versátil que combina la potencia del microcontrolador ESP32-S3 con una variedad de sensores y periféricos.

- **Cable USB-C**: Necesitarás un cable USB para conectar la placa XIAO ESP32S3 Sense a tu ordenador para la programación y la alimentación.

- **Acceso a la página web del repositorio de modelos de SenseCraft AI**: Asegúrate de tener una conexión a Internet estable y poder acceder al sitio web de SenseCraft AI.

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Paso 1. Filtrar modelos para XIAO ESP32S3 Sense

Abre tu navegador web y navega hasta el repositorio de modelos de SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Acceso directo con un clic 🖱️</font></span></strong>
    </a>
</div><br />

La página del repositorio de modelos muestra una amplia gama de modelos de IA disponibles para diferentes dispositivos y aplicaciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

En la barra lateral izquierda de la página web, localiza la sección **Supported Devices**. En la lista de dispositivos, haz clic en **XIAO ESP32S3 Sense** para filtrar los modelos compatibles con tu dispositivo específico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png" style={{width:1000, height:'auto'}}/></div>

Este paso garantiza que solo veas los modelos que se pueden desplegar y ejecutar en la placa XIAO ESP32S3 Sense.

## Paso 2. Elegir un modelo

Para los fines de este tutorial, utilizaremos como ejemplo el modelo de **detección de rostros (Face Detection)**. Sin embargo, siéntete libre de explorar y experimentar con otros modelos según tus intereses y necesidades.

Haz clic en el modelo **Face Detection** para abrir su página dedicada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png" style={{width:1000, height:'auto'}}/></div>

En la página del modelo encontrarás información detallada sobre el mismo, incluida su descripción, precisión del modelo (Model Precision) y formato del modelo (Model Format).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png" style={{width:1000, height:'auto'}}/></div>

En la página del modelo, haz clic en el botón **Deploy Model** situado en la parte superior de la página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png" style={{width:1000, height:'auto'}}/></div>

Esta acción iniciará el proceso de despliegue del modelo seleccionado, preparándolo para ser descargado y ejecutado en tu placa XIAO ESP32S3 Sense.

## Paso 3. Conecta tu dispositivo

Después de hacer clic en el botón Deploy Model, haz clic en el botón **Connect Device** que aparece debajo de la página de despliegue.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

Se abrirá una nueva página; en este punto, conecta tu XIAO ESP32S3 Sense a tu ordenador mediante un cable USB-C.

En la página de conexión del dispositivo, verás un resumen de la información del modelo, incluido su nombre e ID de modelo. Revisa los detalles cuidadosamente para asegurarte de que el modelo seleccionado sea el correcto para tu placa XIAO ESP32S3 Sense. Si la información es correcta, haz clic en el botón **Confirm** para continuar con el despliegue del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png" style={{width:1000, height:'auto'}}/></div>

Tras confirmar la información del modelo, aparecerá una ventana emergente pidiéndote que selecciones el puerto serie de tu placa XIAO. El puerto serie es el canal de comunicación entre tu ordenador y la placa XIAO ESP32S3 Sense. Elige el número de puerto correcto correspondiente a tu XIAO ESP32S3 Sense. Si no estás seguro, puedes consultar el administrador de dispositivos de tu sistema operativo o la documentación de la placa para identificar el puerto correcto.

Haz clic en el botón **Connect** para establecer la conexión entre tu ordenador y la placa XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## Paso 4. Carga del modelo

Una vez establecida la conexión, el modelo seleccionado comenzará a descargarse en tu placa XIAO. El proceso de carga del modelo puede tardar aproximadamente 1-2 minutos, dependiendo del tamaño del modelo y de la velocidad de tu conexión a Internet. Durante este paso, los archivos y dependencias necesarios del modelo se transfieren a la placa XIAO ESP32S3 Sense, preparándola para ejecutar el modelo de IA localmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png" style={{width:1000, height:'auto'}}/></div>

## Paso 5. Vista previa del modelo

Después de que la carga del modelo se complete correctamente, la función de vista previa se iniciará automáticamente. La ventana de vista previa mostrará un vídeo en tiempo real desde la cámara de tu XIAO ESP32S3 Sense, junto con los resultados de detección del modelo superpuestos sobre el vídeo. En el caso del modelo de detección de rostros, verás cuadros delimitadores dibujados alrededor de los rostros detectados en el flujo de vídeo. Cada cuadro delimitador representa un rostro que el modelo ha identificado. La función de vista previa te permite ver la salida del modelo en tiempo real, proporcionándote una retroalimentación visual inmediata sobre su rendimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png" style={{width:1000, height:'auto'}}/></div>

## Ajuste fino del modelo (opcional)

1. Si deseas optimizar el rendimiento del modelo o adaptarlo a tu caso de uso específico, puedes ajustar finamente la configuración del modelo utilizando las opciones disponibles debajo de la sección de vista previa.

2. Dos parámetros importantes que puedes ajustar son el "Confidence Threshold" y el "Intersection over Union (IoU) Threshold".

   - **Confidence Threshold**: Este valor determina el nivel mínimo de confianza requerido para que el modelo considere una detección como válida. Un umbral de confianza más alto dará como resultado menos detecciones pero con mayor certeza, mientras que un umbral más bajo permitirá más detecciones pero puede incluir algunos falsos positivos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**: IoU es una métrica que mide la superposición entre el cuadro delimitador predicho y el cuadro delimitador de referencia (ground truth). Se utiliza para determinar la precisión de la detección de objetos. El umbral de IoU establece el valor mínimo de IoU requerido para que una detección se considere un verdadero positivo. Ajustar este umbral puede ayudar a afinar la precisión y el recall del modelo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Experimenta con diferentes valores para el Confidence Threshold y el IoU Threshold para encontrar el equilibrio óptimo entre detectar rostros con precisión y minimizar los falsos positivos. La mejor configuración puede variar según tu aplicación específica y las características de las imágenes o del flujo de vídeo.

## Conclusión

¡Enhorabuena! Has desplegado correctamente un modelo de detección de rostros de SenseCraft AI en tu placa XIAO ESP32S3 Sense, has previsualizado su salida y has aprendido cómo ajustar finamente el rendimiento del modelo.

Siguiendo los pasos descritos en este tutorial, puedes explorar y experimentar fácilmente con varios modelos de IA disponibles en el repositorio de SenseCraft AI en tu XIAO ESP32S3 Sense. La plataforma SenseCraft AI proporciona una interfaz fácil de usar y una amplia gama de modelos entre los que elegir, lo que la hace accesible tanto para principiantes como para desarrolladores con experiencia.

Recuerda consultar la documentación y los recursos proporcionados por SenseCraft AI y por la placa XIAO ESP32S3 Sense para obtener más información sobre los modelos compatibles, sus capacidades y cualquier opción de configuración adicional disponible.

Siéntete libre de explorar otros modelos, experimentar con diferentes ajustes y adaptarlos a tus proyectos o aplicaciones específicos. Las posibilidades son infinitas con la combinación de SenseCraft AI y la placa XIAO ESP32S3 Sense.

¡Disfruta experimentando y creando con modelos de SenseCraft AI en tu XIAO ESP32S3 Sense!

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
