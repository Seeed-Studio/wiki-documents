---
sidebar_position: 2
description: Cómo usar un modelo para Grove Vision AI V2
title: Usando un modelo para Grove Vision AI V2
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /es/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2
aliases:
  - /es/sensecraft_ai_pretrained_models_for_grove_visionai_v2
last_update:
  date: 12/02/2024
  author: Citric
---

# Usando un modelo para Grove Vision AI V2

SenseCraft AI es una plataforma poderosa que ofrece una amplia gama de modelos de IA compatibles con varios dispositivos, incluyendo el Grove Vision AI V2. El Grove Vision AI V2 es un módulo integral de visión AI que combina una cámara, procesador y capacidades de IA, facilitando la integración de aplicaciones de visión por computadora en tus proyectos. En este tutorial, te guiaremos a través del proceso de usar un modelo de SenseCraft AI en el Grove Vision AI V2 y previsualizar la salida del modelo. También exploraremos algunos conceptos clave y configuraciones para ayudarte a entender y optimizar el rendimiento del modelo.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- **Grove Vision AI V2**: Asegúrate de tener el módulo Grove Vision AI V2 listo y correctamente conectado a tu placa de desarrollo o computadora.

- **Módulo de Cámara OV5647-62 FOV para Raspberry Pi 3B+4B**: Usado para entrada de imagen.

- **Cable USB-C**: Necesitarás un cable USB para conectar el módulo Grove Vision AI V2 a tu computadora para programación y suministro de energía.

- **Acceso a la página web del repositorio de modelos SenseCraft AI**: Asegúrate de tener una conexión a internet estable y poder acceder al sitio web de SenseCraft AI.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
      <th>Módulo de Cámara OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Paso 1. Filtrar modelos para Grove Vision AI V2

Abre tu navegador web y navega al repositorio de modelos de SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Directo con Un Clic 🖱️</font></span></strong>
    </a>
</div><br />

La página del repositorio de modelos muestra una amplia gama de modelos de IA disponibles para diferentes dispositivos y aplicaciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

En la barra lateral izquierda de la página web, localiza la sección **Dispositivos Compatibles**. De la lista de dispositivos, haz clic en **Grove - Vision AI V2** para filtrar los modelos compatibles con tu dispositivo específico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

Este paso asegura que solo veas los modelos que pueden ser desplegados y ejecutados en el módulo Grove Vision AI V2.

## Paso 2. Elegir un Modelo

Para el propósito de este tutorial, usaremos el modelo **Detección de Personas** como ejemplo. Sin embargo, siéntete libre de explorar y experimentar con otros modelos basados en tus intereses y requerimientos.

Haz clic en el modelo **Detección de Personas** para abrir su página dedicada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

En la página del modelo, encontrarás información detallada sobre el modelo, incluyendo su descripción, Precisión del Modelo y Formato del Modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

En la página del modelo, haz clic en el botón **Desplegar Modelo** ubicado en la parte superior de la página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

Esta acción iniciará el proceso de despliegue para el modelo seleccionado, preparándolo para ser descargado y ejecutado en tu módulo Grove Vision AI V2.

## Paso 3. Conectar Tu Dispositivo

Después de desplegar el modelo, haz clic en el botón **Conectar Dispositivo** que aparece debajo de la página de despliegue.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

Se abrirá una nueva página, en este punto, por favor conecta tu Grove Vision AI V2 a tu computadora vía cable USB-C.

En la página de conexión del dispositivo, verás un resumen de la información del modelo, incluyendo su nombre e id del modelo. Revisa los detalles cuidadosamente para asegurar que el modelo correcto esté seleccionado para tu Grove Vision AI V2. Si la información es correcta, haz clic en el botón **Confirmar** para proceder con el despliegue del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

Después de confirmar la información del modelo, aparecerá una ventana pidiéndote que selecciones el puerto serie para tu módulo Grove Vision AI V2. El puerto serie es el canal de comunicación entre tu computadora y el módulo Grove Vision AI V2. Elige el número de puerto correcto correspondiente a tu Grove Vision AI V2. Si no estás seguro, puedes consultar el administrador de dispositivos de tu sistema operativo o la documentación del módulo para identificar el puerto correcto.

Haz clic en el botón **Conectar** para establecer la conexión entre tu computadora y el módulo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## Paso 4. Carga del Modelo

Una vez establecida la conexión, el modelo seleccionado comenzará a descargarse a tu módulo Grove Vision AI V2. El proceso de carga del modelo puede tomar aproximadamente 3-5 minutos, dependiendo del tamaño del modelo y la velocidad de tu conexión a internet. Durante este paso, los archivos del modelo necesarios y las dependencias se transfieren al módulo Grove Vision AI V2, preparándolo para ejecutar el modelo de IA localmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## Paso 5. Vista Previa del Modelo

Después de que la carga del modelo sea exitosa, la función de vista previa se iniciará automáticamente. La ventana de vista previa mostrará una transmisión de video en tiempo real desde la cámara de tu Grove Vision AI V2, junto con los resultados de detección del modelo superpuestos en el video. En el caso del modelo de Detección de Personas, verás cajas delimitadoras dibujadas alrededor de las personas detectadas en la transmisión de video. Cada caja delimitadora representa una persona que el modelo ha identificado. La función de vista previa te permite ver la salida del modelo en tiempo real, proporcionando retroalimentación visual inmediata sobre su rendimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## Ajuste Fino del Modelo (Opcional)

1. Si quieres optimizar el rendimiento del modelo o adaptarlo a tu caso de uso específico, puedes ajustar finamente la configuración del modelo usando las opciones disponibles debajo de la sección de vista previa.

2. Dos parámetros importantes que puedes ajustar son el "Umbral de Confianza" y el "Umbral de Intersección sobre Unión (IoU)".

   - **Umbral de Confianza**: Este valor determina el nivel mínimo de confianza requerido para que el modelo considere una detección como válida. Un umbral de confianza más alto resultará en menos detecciones pero con mayor certeza, mientras que un umbral más bajo permitirá más detecciones pero puede incluir algunos falsos positivos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **Umbral IoU**: IoU es una métrica que mide la superposición entre la caja delimitadora predicha y la caja delimitadora de verdad fundamental. Se usa para determinar la precisión de la detección de objetos. El umbral IoU establece el valor mínimo de IoU requerido para que una detección sea considerada un verdadero positivo. Ajustar este umbral puede ayudar en el ajuste fino de la precisión y recuperación del modelo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Experimenta con diferentes valores para el Umbral de Confianza y el Umbral IoU para encontrar el equilibrio óptimo entre detectar personas con precisión y minimizar los falsos positivos. La mejor configuración puede variar dependiendo de tu aplicación específica y las características de las imágenes o transmisión de video.

## Conclusión

¡Felicitaciones! Has desplegado exitosamente un modelo de Detección de Personas de SenseCraft AI en tu módulo Grove Vision AI V2, previsualizaste su salida y aprendiste cómo ajustar finamente el rendimiento del modelo.

Siguiendo los pasos descritos en este tutorial, puedes explorar y experimentar fácilmente con varios modelos de IA disponibles en el repositorio de SenseCraft AI en tu módulo Grove Vision AI V2. La plataforma SenseCraft AI proporciona una interfaz fácil de usar y una amplia gama de modelos para elegir, haciéndola accesible tanto para principiantes como para desarrolladores experimentados.

Recuerda consultar la documentación y recursos proporcionados por SenseCraft AI y el módulo Grove Vision AI V2 para más información sobre modelos soportados, sus capacidades y cualquier opción de configuración adicional disponible.

Siéntete libre de explorar otros modelos, experimentar con diferentes configuraciones y adaptarlos a tus proyectos o aplicaciones específicas. La combinación de SenseCraft AI y el módulo Grove Vision AI V2 abre un mundo de posibilidades para aplicaciones de visión por computadora.

¡Feliz experimentación y creación con modelos de SenseCraft AI en tu Grove Vision AI V2!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
