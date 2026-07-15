---
sidebar_position: 8
description: Este artículo describe cómo enviar los resultados de reconocimiento de un modelo a través de GPIO.
title: Salida del modelo vía GPIO
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-12-05'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao/
---

# Configuración de la salida del modelo y GPIO en SenseCraft AI para XIAO ESP32S3 Sense

Este artículo de la wiki proporciona una guía paso a paso sobre cómo configurar la salida del modelo y los ajustes de GPIO para la placa XIAO ESP32S3 Sense usando la plataforma SenseCraft AI. Siguiendo estas instrucciones, aprenderás cómo activar cambios de nivel en los GPIO basados en condiciones de eventos específicas detectadas por tu modelo entrenado.

## Requisitos previos

Antes de comenzar, asegúrate de contar con lo siguiente:

1. Placa XIAO ESP32S3 Sense
2. Cable de datos USB-C
3. Placa base de expansión para XIAO con OLED
4. Grove LED

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
      <th>Placa base de expansión para XIAO con OLED</th>
      <th>Grove LED</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Paso 1. Accede al espacio de trabajo de XIAO ESP32S3 Sense y conecta el dispositivo

Accede al espacio de trabajo de XIAO ESP32S3 Sense a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`XIAO ESP32S3 Sense`**, o utiliza el [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/32).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/xiao_esp32s3_sense_workspace.png" style={{width:1000, height:'auto'}}/></div>

Usando el cable USB-C, conecta tu placa XIAO ESP32S3 Sense a tu ordenador. Una vez conectada, haz clic en el botón **Connect** situado en la esquina superior izquierda de la página del espacio de trabajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Paso 2. Asegúrate de que haya un modelo cargado en la XIAO ESP32S3 Sense

Antes de continuar, asegúrate de que tu placa XIAO ESP32S3 Sense tenga un modelo entrenado cargado. Si aún no has cargado un modelo, consulta la documentación de SenseCraft AI sobre cómo entrenar y desplegar modelos en tu dispositivo.

- [Uso de un modelo para XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/sensecraft_ai_pretrained_models_for_xiao/)

Si quieres usar tu propio modelo entrenado, puedes consultar los dos wikis siguientes.

- [Tipo de entrenamiento - Clasificación](https://wiki.seeedstudio.com/es/sensecraft_ai_training_classification/)
- [Tipo de entrenamiento - Detección de objetos](https://wiki.seeedstudio.com/es/sensecraft_ai_training_object_detection/)

## Paso 3. Configurar la salida GPIO

En la barra lateral izquierda de la página del espacio de trabajo, haz clic en la opción **Output**. De las opciones de salida disponibles, selecciona **GPIO** para acceder a los ajustes de configuración de GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

En el lado derecho de la página, haz clic en el botón **Trigger action when event conditions are met**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

Aparecerá un cuadro de diálogo que te pedirá introducir varios parámetros que servirán como condiciones de activación para cambiar el nivel del GPIO. Estos parámetros incluyen:

- **Object**: Especifica el objeto que tu modelo debe detectar para activar el cambio de nivel del GPIO. Por ejemplo, "face" si quieres que el GPIO cambie cuando se detecte una cara.

- **Condition**: Elige la condición que debe cumplirse para que se produzca la activación. Las opciones incluyen "Greater than", "Less than", "Equal to", etc. Por ejemplo, seleccionar "Greater than" significa que el GPIO cambiará cuando el nivel de confianza del objeto detectado sea mayor que el valor especificado.

- **Confidence**: Establece el nivel mínimo de confianza requerido para que la detección del objeto active el cambio de GPIO. Este valor va de 1 a 100, siendo 100 la confianza más alta.

- **GPIO**: Selecciona el pin GPIO específico en la XIAO ESP32S3 Sense que quieres controlar. Las opciones disponibles incluyen GPIO1(DO), GPIO2(D1), etc.

- **Default Status**: Elige el estado predeterminado del pin GPIO seleccionado. Las opciones incluyen "Low Level" y "High Level".

- **Active Status**: Especifica el estado al que debe cambiar el pin GPIO cuando se cumplan las condiciones de activación. Las opciones incluyen "Low Level" y "High Level".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

Después de configurar las condiciones de activación deseadas, haz clic en el botón **Confirm** para guardar los ajustes. Finalmente, haz clic en el botón **Send** para enviar el comando de activación GPIO a tu placa XIAO ESP32S3 Sense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

La placa XIAO ahora ejecutará el comando y podrás observar el efecto en el Grove LED conectado a través de la placa base de expansión para XIAO con Grove OLED.

:::caution
Ten en cuenta que la funcionalidad de salida GPIO depende de la conexión basada en la web entre la plataforma SenseCraft AI y tu placa XIAO ESP32S3 Sense. Si la conexión se pierde o se interrumpe, la función de cambio de nivel de GPIO basada en la detección del modelo dejará de funcionar. Asegúrate de mantener una conexión estable durante todo el proceso.
:::

## Conclusión

Siguiendo esta guía paso a paso, has aprendido cómo configurar la salida del modelo y los ajustes de GPIO en la plataforma SenseCraft AI para la placa XIAO ESP32S3 Sense. Ahora puedes activar cambios de nivel en los GPIO basados en condiciones de eventos específicas detectadas por tu modelo entrenado. Esta funcionalidad abre una amplia gama de posibilidades para crear proyectos y aplicaciones interactivas usando la XIAO ESP32S3 Sense y SenseCraft AI. Recuerda mantener una conexión estable entre la plataforma web y tu dispositivo para un funcionamiento sin interrupciones.

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
