---
sidebar_position: 2
description: Cómo usar un modelo para Grove Vision AI V2
title: Uso de un modelo para Grove Vision AI V2
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2
aliases:
  - /sensecraft_ai_pretrained_models_for_grove_visionai_v2
last_update:
  date: 12/02/2024
  author: Citric
createdAt: '2024-12-02'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2/
---

# Uso de un modelo para Grove Vision AI V2

SenseCraft AI es una potente plataforma que ofrece una amplia gama de modelos de IA compatibles con varios dispositivos, incluido el Grove Vision AI V2. El Grove Vision AI V2 es un módulo integral de visión por IA que combina una cámara, un procesador y capacidades de IA, lo que facilita la integración de aplicaciones de visión por computadora en tus proyectos. En este tutorial, te guiaremos a través del proceso de uso de un modelo de SenseCraft AI en el Grove Vision AI V2 y de previsualización de la salida del modelo. También exploraremos algunos conceptos y ajustes clave para ayudarte a comprender y optimizar el rendimiento del modelo.

## Requisitos previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- **Grove Vision AI V2**: Asegúrate de tener el módulo Grove Vision AI V2 listo y correctamente conectado a tu placa de desarrollo o computadora.

- **Módulo de cámara OV5647-62 FOV para Raspberry Pi 3B+4B**: Se utiliza para la entrada de imagen.

- **Cable USB-C**: Necesitarás un cable USB para conectar el módulo Grove Vision AI V2 a tu computadora para la programación y la alimentación.

- **Acceso a la página web del repositorio de modelos de SenseCraft AI**: Asegúrate de tener una conexión a Internet estable y poder acceder al sitio web de SenseCraft AI.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
      <th>Módulo de cámara OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Paso 1. Filtrar modelos para Grove Vision AI V2

Abre tu navegador web y navega hasta el repositorio de modelos de SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

La página del repositorio de modelos muestra una amplia gama de modelos de IA disponibles para diferentes dispositivos y aplicaciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

En la barra lateral izquierda de la página web, localiza la sección **Supported Devices**. En la lista de dispositivos, haz clic en **Grove - Vision AI V2** para filtrar los modelos compatibles con tu dispositivo específico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

Este paso garantiza que solo veas los modelos que se pueden desplegar y ejecutar en el módulo Grove Vision AI V2.

## Paso 2. Elegir un modelo

Para los fines de este tutorial, utilizaremos como ejemplo el modelo de **Person Detection**. Sin embargo, siéntete libre de explorar y experimentar con otros modelos según tus intereses y requisitos.

Haz clic en el modelo **Person Detection** para abrir su página dedicada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

En la página del modelo, encontrarás información detallada sobre el modelo, incluida su descripción, la precisión del modelo (Model Precision) y el formato del modelo (Model Format).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

En la página del modelo, haz clic en el botón **Deploy Model** situado en la parte superior de la página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

Esta acción iniciará el proceso de despliegue para el modelo seleccionado, preparándolo para ser descargado y ejecutado en tu módulo Grove Vision AI V2.

## Paso 3. Conectar tu dispositivo

Después de desplegar el modelo, haz clic en el botón **Connect Device** que aparece debajo de la página de despliegue.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

Se abrirá una nueva página; en este punto, conecta tu Grove Vision AI V2 a tu computadora mediante un cable USB-C.

En la página de conexión del dispositivo, verás un resumen de la información del modelo, incluido su nombre y el id del modelo. Revisa los detalles cuidadosamente para asegurarte de que el modelo seleccionado sea el correcto para tu Grove Vision AI V2. Si la información es correcta, haz clic en el botón **Confirm** para continuar con el despliegue del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

Después de confirmar la información del modelo, aparecerá una ventana emergente pidiéndote que selecciones el puerto serie de tu módulo Grove Vision AI V2. El puerto serie es el canal de comunicación entre tu computadora y el módulo Grove Vision AI V2. Elige el número de puerto correcto correspondiente a tu Grove Vision AI V2. Si no estás seguro, puedes consultar el administrador de dispositivos de tu sistema operativo o la documentación del módulo para identificar el puerto correcto.

Haz clic en el botón **Connect** para establecer la conexión entre tu computadora y el módulo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## Paso 4. Carga del modelo

Una vez establecida la conexión, el modelo seleccionado comenzará a descargarse en tu módulo Grove Vision AI V2. El proceso de carga del modelo puede tardar aproximadamente de 3 a 5 minutos, dependiendo del tamaño del modelo y de la velocidad de tu conexión a Internet. Durante este paso, los archivos necesarios del modelo y sus dependencias se transfieren al módulo Grove Vision AI V2, preparándolo para ejecutar el modelo de IA localmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## Paso 5. Vista previa del modelo

Después de que la carga del modelo se complete correctamente, la función de vista previa se iniciará automáticamente. La ventana de vista previa mostrará un flujo de video en tiempo real desde la cámara de tu Grove Vision AI V2, junto con los resultados de detección del modelo superpuestos sobre el video. En el caso del modelo Person Detection, verás cuadros delimitadores dibujados alrededor de las personas detectadas en el flujo de video. Cada cuadro delimitador representa a una persona que el modelo ha identificado. La función de vista previa te permite ver la salida del modelo en tiempo real, proporcionando una retroalimentación visual inmediata sobre su rendimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## Ajuste fino del modelo (opcional)

1. Si deseas optimizar el rendimiento del modelo o adaptarlo a tu caso de uso específico, puedes ajustar finamente la configuración del modelo utilizando las opciones disponibles debajo de la sección de vista previa.

2. Dos parámetros importantes que puedes ajustar son el "Confidence Threshold" y el "Intersection over Union (IoU) Threshold".

   - **Confidence Threshold**: Este valor determina el nivel mínimo de confianza requerido para que el modelo considere una detección como válida. Un umbral de confianza más alto dará como resultado menos detecciones pero con mayor certeza, mientras que un umbral más bajo permitirá más detecciones pero puede incluir algunos falsos positivos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**: IoU es una métrica que mide la superposición entre el cuadro delimitador predicho y el cuadro delimitador de referencia (ground truth). Se utiliza para determinar la precisión de la detección de objetos. El umbral de IoU establece el valor mínimo de IoU requerido para que una detección se considere un verdadero positivo. Ajustar este umbral puede ayudar a afinar la precisión y el recall del modelo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Experimenta con diferentes valores para el Confidence Threshold y el IoU Threshold para encontrar el equilibrio óptimo entre detectar personas con precisión y minimizar los falsos positivos. La mejor configuración puede variar según tu aplicación específica y las características de las imágenes o del flujo de video.

## Conclusión

¡Enhorabuena! Has desplegado correctamente un modelo de SenseCraft AI de Person Detection en tu módulo Grove Vision AI V2, has previsualizado su salida y has aprendido cómo ajustar finamente el rendimiento del modelo.

Siguiendo los pasos descritos en este tutorial, puedes explorar y experimentar fácilmente con varios modelos de IA disponibles en el repositorio de SenseCraft AI en tu módulo Grove Vision AI V2. La plataforma SenseCraft AI proporciona una interfaz fácil de usar y una amplia gama de modelos entre los que elegir, lo que la hace accesible tanto para principiantes como para desarrolladores experimentados.

Recuerda consultar la documentación y los recursos proporcionados por SenseCraft AI y por el módulo Grove Vision AI V2 para obtener más información sobre los modelos compatibles, sus capacidades y cualquier opción de configuración adicional disponible.

No dudes en explorar otros modelos, experimentar con diferentes configuraciones y adaptarlos a tus proyectos o aplicaciones específicas. La combinación de SenseCraft AI y el módulo Grove Vision AI V2 abre un mundo de posibilidades para aplicaciones de visión por computadora.

¡Disfruta experimentando y creando con los modelos de SenseCraft AI en tu Grove Vision AI V2!

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
