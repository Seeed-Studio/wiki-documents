---
sidebar_position: 8
description: Este artículo describe cómo enviar los resultados de reconocimiento de un modelo a través de GPIO.
title: Salida del Modelo Vía GPIO
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/xiaoesp32s3sense.webp
slug: /es/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao
aliases:
  - /es/sensecraft_ai_output_gpio_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# Configurando la Salida del Modelo y GPIO en SenseCraft AI para XIAO ESP32S3 Sense

Este artículo wiki proporciona una guía paso a paso sobre cómo configurar la salida del modelo y las configuraciones de GPIO para la placa XIAO ESP32S3 Sense usando la plataforma SenseCraft AI. Siguiendo estas instrucciones, aprenderás cómo activar cambios de nivel GPIO basados en condiciones de eventos específicos detectados por tu modelo entrenado.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

1. Placa XIAO ESP32S3 Sense
2. Cable de datos USB-C
3. Placa Base de Expansión para XIAO con OLED
4. LED Grove

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
      <th>Placa Base de Expansión para XIAO con OLED</th>
      <th>LED Grove</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Paso 1. Acceder al Espacio de Trabajo de SenseCraft AI Vision y conectar el XIAO ESP32S3 Sense

Abre tu navegador web y navega a la página del Espacio de Trabajo de SenseCraft AI Vision.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Directo con Un Clic 🖱️</font></span></strong>
    </a>
</div><br />

Selecciona la placa XIAO ESP32S3 Sense de los dispositivos disponibles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

Usando el cable USB-C, conecta tu placa XIAO ESP32S3 Sense a tu computadora. Una vez conectada, haz clic en el botón **Conectar** ubicado en la esquina superior izquierda de la página del Espacio de Trabajo de SenseCraft AI Vision.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Paso 2. Asegurar que un Modelo esté Cargado en el XIAO ESP32S3 Sense

Antes de proceder, asegúrate de que tu placa XIAO ESP32S3 Sense tenga un modelo entrenado cargado. Si aún no has cargado un modelo, consulta la documentación de SenseCraft AI sobre cómo entrenar e implementar modelos en tu dispositivo.

- [Usando un modelo para XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/sensecraft_ai_pretrained_models_for_xiao/)

Si quieres usar tu propio modelo entrenado, puedes consultar los siguientes dos Wikis.

- [Tipo de entrenamiento - Clasificación](https://wiki.seeedstudio.com/es/sensecraft_ai_training_classification/)
- [Tipo de entrenamiento - Detección de Objetos](https://wiki.seeedstudio.com/es/sensecraft_ai_training_object_detection/)

## Paso 3. Configurar la Salida GPIO

En la barra lateral izquierda de la página del Espacio de Trabajo de Vision, haz clic en la opción **Salida**. De las opciones de salida disponibles, selecciona **GPIO** para acceder a las configuraciones de GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/45.png" style={{width:800, height:'auto'}}/></div>

En el lado derecho de la página, haz clic en el botón **Activar acción cuando se cumplan las condiciones del evento**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

Aparecerá un cuadro de diálogo, solicitándote que ingreses varios parámetros que servirán como condiciones de activación para cambiar el nivel GPIO. Estos parámetros incluyen:

- **Objeto**: Especifica el objeto que tu modelo debe detectar para activar el cambio de nivel GPIO. Por ejemplo, "cara" si quieres que el GPIO cambie cuando se detecte una cara.

- **Condición**: Elige la condición que debe cumplirse para que ocurra la activación. Las opciones incluyen "Mayor que", "Menor que", "Igual a", etc. Por ejemplo, seleccionar "Mayor que" significa que el GPIO cambiará cuando el nivel de confianza del objeto detectado sea mayor que el valor especificado.

- **Confianza**: Establece el nivel mínimo de confianza requerido para que la detección de objetos active el cambio GPIO. Este valor va de 1 a 100, siendo 100 la confianza más alta.

- **GPIO**: Selecciona el pin GPIO específico en el XIAO ESP32S3 Sense que quieres controlar. Las opciones disponibles incluyen GPIO1(DO), GPIO2(D1), etc.

- **Estado Predeterminado**: Elige el estado predeterminado del pin GPIO seleccionado. Las opciones incluyen "Nivel Bajo" y "Nivel Alto".

- **Estado Activo**: Especifica el estado al que debe cambiar el pin GPIO cuando se cumplan las condiciones de activación. Las opciones incluyen "Nivel Bajo" y "Nivel Alto".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/47.png" style={{width:600, height:'auto'}}/></div>

Después de configurar las condiciones de activación deseadas, haz clic en el botón **Confirmar** para guardar la configuración. Finalmente, haz clic en el botón **Enviar** para transmitir el comando de activación GPIO a tu placa XIAO ESP32S3 Sense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/48.png" style={{width:1000, height:'auto'}}/></div>

La placa XIAO ahora ejecutará el comando, y podrás observar el efecto en el LED Grove conectado a través de la Placa Base de Expansión para XIAO con OLED Grove.

:::caution
Ten en cuenta que la funcionalidad de salida GPIO depende de la conexión basada en web entre la plataforma SenseCraft AI y tu placa XIAO ESP32S3 Sense. Si la conexión se pierde o se interrumpe, la función de cambio de nivel GPIO basada en detección de modelo dejará de funcionar. Asegúrate de mantener una conexión estable durante todo el proceso.
:::

## Conclusión

Siguiendo esta guía paso a paso, has aprendido cómo configurar la salida del modelo y las configuraciones GPIO en la plataforma SenseCraft AI para la placa XIAO ESP32S3 Sense. Ahora puedes activar cambios de nivel GPIO basados en condiciones de eventos específicos detectados por tu modelo entrenado. Esta funcionalidad abre una amplia gama de posibilidades para crear proyectos y aplicaciones interactivas usando el XIAO ESP32S3 Sense y SenseCraft AI. Recuerda mantener una conexión estable entre la plataforma web y tu dispositivo para un funcionamiento sin problemas.

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
