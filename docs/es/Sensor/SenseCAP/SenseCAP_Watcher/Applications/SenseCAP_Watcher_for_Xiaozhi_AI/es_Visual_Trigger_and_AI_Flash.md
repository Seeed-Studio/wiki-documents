---
description: Guía para flashear firmware a tu SenseCAP Watcher Agent
title: Activación Visual y Flash de IA
sidebar_position: 4
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
- Visual
- Activate
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /es/visual_trigger_and_ai_flash
last_update:
  date: 12/04/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Flasheando Modelos de IA en el SenseCAP Watcher

## Descripción General

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

Esta guía se enfoca en cómo flashear el SenseCAP Watcher con el firmware de Conversación Activada por Reconocimiento Visual y cómo reemplazar o actualizar el modelo de IA en el dispositivo. Está destinada como una guía instructiva práctica para estas operaciones.

Para una introducción completa a las características, aplicaciones y casos de uso del Watcher, consulte: [SenseCAP Watcher - Asistente de IA que interactúa activamente con el mundo](https://wiki.seeedstudio.com/es/solutions/hello_watcher_llms/)

## Prerrequisitos

### Hardware Requerido

- Dispositivo SenseCAP Watcher  
- Cable de datos USB Type-C  
- PC con Windows  

:::note
Si está flasheando el **Firmware de Activación Visual**, y el modelo de su dispositivo Watcher **no es -EN**, también necesitará flashear manualmente el archivo de autenticación para uso normal (solo requerido una vez).  
Para instrucciones detalladas, consulte [Guía de Flasheo de Firmware del Watcher Agent](https://wiki.seeedstudio.com/es/flash_watcher_agent_firmware/).
:::

## Proceso de Flasheo de Firmware

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI" default>

<!-- :::caution Note
The following guide is for an internal testing website that has not yet been released.
The official version will be available soon.
Please use another method to flash the firmware for now.
::: -->

- Prerrequisitos

  - [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

- Paso 1. Abra nuestra plataforma y Seleccione SenseCAP Watcher en el Espacio de Trabajo

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>

- Paso 2. Conéctese a nuestra Plataforma por puerto serie

  -  Haga clic en `Connect` 

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

  - Seleccione el puerto serie correcto (que termine con "A")

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

  :::note
  Si está usando macOS o Linux, elija el puerto con el número menor.
  :::

  - Haga clic en `Connect`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

- Paso 3. Verifique y Actualice la Versión del Dispositivo

  - Haga clic en `Update`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI9.png" style={{width:500, height:'auto'}}/></div>

  - Seleccione el puerto serie correcto (que termine con "B")
  :::note
  Si está usando macOS o Linux, elija el puerto con el número mayor.
  :::

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI10.png" style={{width:500, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div> 

  - Haga clic en 'Connect'

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI11.png" style={{width:500, height:'auto'}}/></div>

  - Seleccione la versión que desea flashear y Haga clic en `Confirm`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI12.png" style={{width:500, height:'auto'}}/></div>

  - Espere el proceso de actualización y reinicio

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI13.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher1" label="Herramienta de Descarga Flash">

- Prerrequisitos

  - **Firmware de Activación Visual v2.0.4**: [Enlace de Descarga](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [Herramienta de Descarga Flash](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 o posterior)

- Paso 1. Conéctese al dispositivo (puerto Type-C en la parte inferior del dispositivo) y Abra su Herramienta de Descarga Flash

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

- Paso 2. Configure las Configuraciones del Firmware

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

- Paso 3. Seleccione el Puerto COM y Configuraciones de Flash

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

  - Si el flasheo no comienza después de hacer clic en START, haga clic en STOP y confirme que ha seleccionado el puerto COM que termina con "B".
    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

- Paso 4. Borrar y Flashear
  - Haga clic en el botón `ERASE` para limpiar el firmware existente
  - Espere a que se complete el proceso de borrado
  - Haga clic en el botón `START` para comenzar el flasheo
  - Debería ver información de progreso en la ventana de registro
  - Si no aparece progreso o falla, pruebe el otro puerto COM

- Paso 5. Verificar Éxito

  - El proceso de flasheo está completo cuando vea el mensaje de éxito en la ventana de registro.

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

- Paso 6. Reiniciar el Dispositivo

  - Localice el orificio de reinicio en su dispositivo Watcher
  - Use un alfiler para presionar suavemente el botón de reinicio
  - El dispositivo se reiniciará con el nuevo firmware

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher2" label="Línea de Comandos" default>

- Prerrequisitos

  - **Firmware de Activación Visual v2.0.4**: [Enlace de Descarga](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [esptool.py](https://github.com/espressif/esptool)

- Paso 1. Extraiga el paquete de firmware descargado y use esptool.py para realizar el flash

  ```shell
  esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
  ```
  *(Nota: Ajuste el puerto `/dev/ttyACM0` según su sistema, ej., `COM3` en Windows)*

- Paso 2. Reiniciar el Dispositivo

  - Localice el orificio de reinicio en su dispositivo Watcher
  - Use un alfiler para presionar suavemente el botón de reinicio
  - El dispositivo se reiniciará con el nuevo firmware

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="compile" label="Compilar desde Código Fuente (Para Desarrolladores)">
- Prerrequisitos

  - [ESP-IDF v5.5.1](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html#manual-installation)

  - [Repositorio de Código Abierto (Colaboración Xiaozhi AI)](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

- Paso 1. Abra ESP-IDF CMD y Navegue a la carpeta del proyecto
  ```shell
  cd xiaozhi-esp32
  ```

- Paso 2. Configure el chip objetivo
  ```shell
  idf.py set-target esp32s3
  ```

- Paso 3. Abra el menú de configuración
  ```shell
  idf.py menuconfig
  ```

- Paso 4. Configure el Tipo de Placa como SenseCAP Watcher

  - Seleccione el Asistente Xiaozhi

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig1.png" style={{width:700, height:'auto'}}/></div>

  - Seleccione Tipo de Placa

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig2.png" style={{width:700, height:'auto'}}/></div>

  - Seleccione SenseCAP Watcher

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig3.png" style={{width:700, height:'auto'}}/></div>

- Paso 5. Configure Configuraciones Adicionales Según Sus Necesidades (Opcional)

  - Idioma de visualización predeterminado y AEC (Cancelación Automática de Eco / manejo de interrupción de voz)

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig4.png" style={{width:700, height:'auto'}}/></div>

  - Palabras de activación y disparadores

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig5.png" style={{width:700, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig6.png" style={{width:700, height:'auto'}}/></div>

  - Otros parámetros opcionales específicos para su aplicación

  - Después de completar su configuración, guarde y salga del menú

- Paso 7. Compile y flashee el firmware
  ```shell
  idf.py build flash
  ```

</TabItem>
</Tabs>

:::note
Solo la versión de firmware 1.8.8 o superior soporta funcionalidad de activación visual.
La versión de firmware superior a v2.0.3 requiere decir "Turn on the inference switch" a Xiaozhi para habilitar la detección visual.
:::

## Proceso de Flasheo de Modelo de IA

### Prerrequisitos
- [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

### Paso 1. Abra nuestra plataforma y Seleccione SenseCAP Watcher en el Espacio de Trabajo

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>

### Paso 2. Conéctese a nuestra Plataforma por puerto serie

- Haga clic en `Connect` 
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- Selecciona el puerto serie correcto (que termine con "A")
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>
:::note
Si estás usando macOS o Linux, por favor elige el puerto con el número menor.
:::

- Haz clic en `Connect`
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

### Paso 3. Ver el modelo existente y cambiar a un nuevo modelo

- Ver el nombre del modelo y la versión del modelo

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI5.png" style={{width:500, height:'auto'}}/></div>

- Haz clic en `Select Model...` y haz clic en el modelo que quieres flashear

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI6.png" style={{width:500, height:'auto'}}/></div>

- Haz clic en `Confirm`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI7.png" style={{width:500, height:'auto'}}/></div>

### Paso 4. Previsualizar el efecto y ajustar los parámetros

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI8.png" style={{width:400, height:'auto'}}/></div>

La función actual de activación visual ofrece las siguientes opciones de configuración:

- **ID de Objetivo** (`target`): Especifica el ID de objetivo a detectar. Este ID depende del modelo visual utilizado; el valor predeterminado es 0.
- **Duración de Detección** (`duration`): La unidad es segundos, se usa para ajustar la sensibilidad de la activación visual. El valor predeterminado es 1 segundo (este valor predeterminado no incluye el procesamiento de rebote de 1 segundo).
- **Umbral de Confianza** (`threshold`): El límite inferior de confianza para que el modelo visual reconozca un objeto, se usa para ajustar la sensibilidad de detección. Se representa como porcentaje, el valor predeterminado es 75%.
- **Período de Enfriamiento** (`interval`): La unidad es segundos, indica el tiempo de espera requerido después de que termine una conversación antes de activarse nuevamente, se usa para evitar interrupciones frecuentes por el mismo objeto. El valor predeterminado es 8 segundos.

Por ejemplo, puedes ajustar la sensibilidad del modelo modificando el parámetro `threshold`. Si encuentras que el umbral actual es demasiado estricto, simplemente dile a Watcher: "Por favor establece el umbral de confianza al 60%".

## Solución de Problemas

### Problemas Comunes

1. **No se Detecta Puerto COM**
   - Asegúrate de estar usando el puerto Type-C inferior
   - Prueba con un cable USB diferente
   - Verifica si los controladores USB están instalados correctamente

2. **Falla el Flasheo**
   - Al flashear Himax, selecciona el puerto COM que termine con "A".
   - Al flashear ESP32-S3, selecciona el puerto COM que termine con "B".

3. **El Dispositivo No Responde**
   - Usa un pin para presionar suavemente el botón de reset
   - Intenta borrar antes de flashear

4. **El dispositivo no se activa con detección visual**
   - Verifica si hay mensajes de registro relevantes en la salida serie.
   - La versión de firmware v2.0.3 requiere decir "Turn on inference switch" a Xiaozhi para habilitar esta función.

5. **El puerto serie muestra registros de reconocimiento visual pero el dispositivo aún no puede activarse**
   - Ve a la Plataforma SenseCraft AI y flashea el modelo Person al chip AI.

## Preguntas Frecuentes

**P: ¿Puedo flashear otros modelos AI a Himax?**

R: Actualmente, solo se admiten los modelos Face y Person. El flasheo de otros modelos aún no está soportado y estará disponible en una actualización futura.

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>