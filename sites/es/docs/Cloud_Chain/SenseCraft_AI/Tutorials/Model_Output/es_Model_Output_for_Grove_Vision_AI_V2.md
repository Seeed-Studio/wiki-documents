---
sidebar_position: 7
description: Este artículo describe cómo obtener salidas utilizando Grove Vision AI V2 y SenseCraft AI.
title: Salida del modelo para Grove Vision AI V2
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai/
---

# Configuración de la salida del modelo en SenseCraft AI para Grove Vision AI V2

Este artículo de la wiki proporciona una guía completa sobre cómo configurar los ajustes de salida del modelo para el dispositivo Grove Vision AI V2 utilizando la plataforma SenseCraft AI. Siguiendo estas instrucciones paso a paso, aprenderás a configurar condiciones de activación y acciones basadas en la salida de tu modelo entrenado que se ejecuta en el Grove Vision AI V2.

## Requisitos previos

Antes de comenzar, asegúrate de contar con lo siguiente:

1. Dispositivo Grove Vision AI V2

2. Cable USB-C para conectar el Grove Vision AI V2 a tu ordenador

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Paso 1. Accede al espacio de trabajo de Grove Vision AI V2 y conecta el dispositivo

Accede al espacio de trabajo de Grove Vision AI V2 a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home)** > **`Models`** > **`Workspace`** > **`Grove Vision AI V2`**, o utiliza el [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/36).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/grove_vision_ai_v2_workspace.png" style={{width:1000, height:'auto'}}/></div>

Usando el cable USB-C, conecta tu dispositivo Grove Vision AI V2 a tu ordenador. Una vez que el dispositivo esté conectado, haz clic en el botón **Connect** situado en la esquina superior izquierda de la página del espacio de trabajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Paso 2. Asegúrate de que haya un modelo cargado en el Grove Vision AI V2

Antes de continuar, asegúrate de que tu dispositivo Grove Vision AI V2 tenga un modelo entrenado desplegado en él. Si aún no has desplegado un modelo, consulta la documentación de SenseCraft AI para obtener instrucciones sobre cómo entrenar y desplegar modelos en tu dispositivo.

- [Uso de un modelo para Grove Vision AI V2](https://wiki.seeedstudio.com/es/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

Si deseas utilizar tu propio modelo entrenado, puedes consultar los siguientes dos wikis.

- [Tipo de entrenamiento - Clasificación](https://wiki.seeedstudio.com/es/sensecraft_ai_training_classification/)
- [Tipo de entrenamiento - Detección de objetos](https://wiki.seeedstudio.com/es/sensecraft_ai_training_object_detection/)

## Paso 3. Accede a la configuración de salida

En la barra lateral izquierda de la página del espacio de trabajo, haz clic en la opción **Output** para acceder a la configuración de salida de tu dispositivo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

En el lado derecho de la página, haz clic en el botón **Trigger action when event conditions are met**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

Aparecerá un cuadro de diálogo que te pedirá que introduzcas varios parámetros que servirán como condiciones de activación para las acciones deseadas. Estos parámetros incluyen:

- **Object**: Especifica el objeto que tu modelo debe detectar para activar la acción. Por ejemplo, "person" si quieres que la acción ocurra cuando se detecte una persona.

- **Condition**: Elige la condición que debe cumplirse para que se produzca la activación. Las opciones incluyen "Greater than", "Less than", "Equal to", etc. Por ejemplo, seleccionar "Greater than" significa que la acción se activará cuando el nivel de confianza del objeto detectado sea mayor que el valor especificado.

- **Confidence**: Establece el nivel mínimo de confianza requerido para que la detección del objeto active la acción. Este valor va de 1 a 100, siendo 100 la confianza más alta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

Después de configurar las condiciones de activación deseadas, haz clic en el botón **Confirm** para guardar la configuración.

## Paso 4. Selecciona las acciones de activación deseadas

El Grove Vision AI V2 admite dos tipos de acciones de activación:

- **Encender el LED**: Cuando se selecciona esta opción, el LED integrado en el Grove Vision AI V2 se encenderá cuando se cumplan las condiciones de activación.

- **Guardar imagen en la tarjeta SD**: Cuando se selecciona esta opción, el Grove Vision AI V2 guardará la imagen capturada en la tarjeta MicroSD insertada en el dispositivo cuando se cumplan las condiciones de activación.

Selecciona la casilla junto a la(s) acción(es) de activación deseada(s) para habilitarlas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## Paso 5. Envía la configuración de activación a Grove Vision AI V2

Por último, haz clic en el botón **Send** para transmitir la configuración de activación a tu dispositivo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

El Grove Vision AI V2 ahora ejecutará las acciones de activación configuradas cuando se cumplan las condiciones especificadas, proporcionando una indicación visual de la salida del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>

:::caution
Ten en cuenta que la funcionalidad de salida depende de la conexión basada en la web entre la plataforma SenseCraft AI y tu dispositivo Grove Vision AI V2. Si la conexión se pierde o se interrumpe, las acciones de activación configuradas dejarán de funcionar. Asegúrate de mantener una conexión estable durante todo el proceso.
:::

## Conclusión

Siguiendo esta guía paso a paso, has aprendido a configurar los ajustes de salida del modelo y las acciones de activación en la plataforma SenseCraft AI para el dispositivo Grove Vision AI V2. Ahora puedes configurar tu dispositivo para realizar acciones específicas, como encender el LED integrado o guardar imágenes capturadas, basadas en la salida de tu modelo entrenado. Esta funcionalidad te permite crear aplicaciones y proyectos interactivos utilizando el Grove Vision AI V2 y SenseCraft AI. Recuerda mantener una conexión estable entre la plataforma web y tu dispositivo para un funcionamiento sin interrupciones.

El Grove Vision AI V2 sigue siendo esencialmente un sensor de cámara con IA, por lo que no podemos esperar hacer mucho más que cosas propias de sensores con él. Si tienes un MCU adicional, puedes realizar proyectos más interesantes con la interfaz Grove o la interfaz Pin to Pin; SenseCraft AI es solo un medio para entregar el modelo. Para más rutinas de Arduino en el modelo Grove Vision AI V2, consulta [Primeros pasos con Grove Vision AI V2](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_software_support/).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
