---
description: Guía para grabar firmware en tu SenseCAP Watcher Agent
title: Activación visual y flasheo de IA
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
slug: /visual_trigger_and_ai_flash
last_update:
  date: 12/04/2025
  author: Twelve
translation:
  skip: [zh-CN]
createdAt: '2025-10-17'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/es/visual_trigger_and_ai_flash/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Flashear modelos de IA en el SenseCAP Watcher

## Descripción general

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

Esta guía se centra en cómo flashear el SenseCAP Watcher con el firmware de Conversación Activada por Reconocimiento Visual y cómo reemplazar o actualizar el modelo de IA en el dispositivo. Está pensada como una guía práctica e instructiva para estas operaciones.

Para una introducción completa a las funciones, aplicaciones y casos de uso de Watcher, consulta: [SenseCAP Watcher - Asistente de IA que interactúa activamente con el mundo](https://wiki.seeedstudio.com/es/solutions/hello_watcher_llms/)

## Requisitos previos

### Hardware necesario

- Dispositivo SenseCAP Watcher  
- Cable de datos USB Tipo C  
- PC con Windows  

:::note
Si vas a flashear el **Firmware de Activación Visual** y el modelo de tu dispositivo Watcher **no es -EN**, también tendrás que flashear manualmente el archivo de autenticación para un uso normal (solo se requiere una vez).  
Para obtener instrucciones detalladas, consulta la [Guía de flasheo de firmware de Watcher Agent](https://wiki.seeedstudio.com/es/flash_watcher_agent_firmware/).
:::

## Proceso de flasheo del firmware

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI" default>

<!-- :::caution Note
The following guide is for an internal testing website that has not yet been released.
The official version will be available soon.
Please use another method to flash the firmware for now.
::: -->

**Requisitos previos**

- [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

**Paso 1.** Accede al espacio de trabajo de SenseCAP Watcher a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`**, o utiliza este [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/37).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_workspace.png" style={{width:800, height:'auto'}}/></div>

**Paso 2. Conéctate a nuestra plataforma por puerto serie**

- Haz clic en `Connect`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- Selecciona el puerto serie correcto (terminado en “A”)

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

:::note
Si utilizas macOS o Linux, elige el puerto con el número más pequeño.
:::

- Haz clic en `Connect`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

**Paso 3. Comprobar y actualizar la versión del dispositivo**

- Haz clic en `Update`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI9.png" style={{width:500, height:'auto'}}/></div>

- Selecciona el puerto serie correcto (terminado en "B")

  :::note
  Si utilizas macOS o Linux, elige el puerto con el número más grande.
  :::

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI10.png" style={{width:500, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

- Haz clic en 'Connect'

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI11.png" style={{width:500, height:'auto'}}/></div>

- Selecciona la versión que quieres flashear y haz clic en `Confirm`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI12.png" style={{width:500, height:'auto'}}/></div>

- Espera al proceso de actualización y reinicio

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI13.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher1" label="Flash Download Tool">

**Requisitos previos**

- **Firmware de Activación Visual v2.0.4**: [Enlace de descarga](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 o posterior)

**Paso 1. Conecta el dispositivo (puerto Type-C en la parte inferior del dispositivo) y abre tu Flash Download Tool**

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

**Paso 2. Configura los ajustes del firmware**

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 3. Selecciona el puerto COM y la configuración de flasheo**

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

- Si el flasheo no comienza después de hacer clic en START, haz clic en STOP y confirma que has seleccionado el puerto COM que termina en “B”.

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

**Paso 4. Borrar y flashear**

- Haz clic en el botón `ERASE` para borrar el firmware existente
- Espera a que se complete el proceso de borrado
- Haz clic en el botón `START` para iniciar el flasheo
- Deberías ver información de progreso en la ventana de registro
- Si no aparece progreso o falla, prueba con el otro puerto COM

**Paso 5. Verificar el éxito**

- El proceso de flasheo se completa cuando ves el mensaje de éxito en la ventana de registro.

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

**Paso 6. Reinicia el dispositivo**

- Localiza el orificio de reinicio en tu dispositivo Watcher
- Usa un pin para presionar suavemente el botón de reinicio
- El dispositivo se reiniciará con el nuevo firmware

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher2" label="Command Line" default>

- Requisitos previos

  - **Firmware de Activación Visual v2.0.4**: [Enlace de descarga](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [esptool.py](https://github.com/espressif/esptool)

**Paso 1. Extrae el paquete de firmware descargado y utiliza esptool.py para realizar el flasheo**

```shell
esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
```

*(Nota: Ajusta el puerto `/dev/ttyACM0` según tu sistema, por ejemplo, `COM3` en Windows)*

**Paso 2. Reinicia el dispositivo**

- Localiza el orificio de reinicio en tu dispositivo Watcher
- Usa un pin para presionar suavemente el botón de reinicio
- El dispositivo se reiniciará con el nuevo firmware

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="compile" label="Compile from Source (For Developers)">
- Requisitos previos

  - [ESP-IDF v5.5.1](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html#manual-installation)

  - [Repositorio de código abierto (colaboración Xiaozhi AI)](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

**Paso 1. Abre ESP-IDF CMD y navega a la carpeta del proyecto**

```shell
cd xiaozhi-esp32
```

**Paso 2. Establece el chip de destino**

```shell
idf.py set-target esp32s3
```

**Paso 3. Abre el menú de configuración**

```shell
idf.py menuconfig
```

**Paso 4. Establece el tipo de placa como SenseCAP Watcher**

- Selecciona Xiaozhi Assistant

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig1.png" style={{width:700, height:'auto'}}/></div>

- Selecciona el tipo de placa

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig2.png" style={{width:700, height:'auto'}}/></div>

- Selecciona SenseCAP Watcher

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig3.png" style={{width:700, height:'auto'}}/></div>

**Paso 5. Configura ajustes adicionales según tus necesidades (opcional)**

- Idioma de visualización predeterminado y AEC (Cancelación Automática de Eco / gestión de interrupción de voz)

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig4.png" style={{width:700, height:'auto'}}/></div>

- Palabras de activación y disparadores

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig5.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig6.png" style={{width:700, height:'auto'}}/></div>

- Otros parámetros opcionales específicos de tu aplicación

- Después de completar tu configuración, guarda y sal del menú

**Paso 7. Compila y flashea el firmware**

```shell
idf.py build flash
```

</TabItem>
</Tabs>

:::note
Solo el firmware versión 1.8.8 o superior admite la función de activación visual.
El firmware por encima de la versión v2.0.3 requiere decir “Enciende el interruptor de inferencia” a Xiaozhi para habilitar la detección visual.
:::

## Proceso de flasheo del modelo de IA

- Requisitos previos

  - [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

**Paso 1.** Accede al espacio de trabajo de SenseCAP Watcher a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`**, o utiliza este [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/37).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_workspace.png" style={{width:800, height:'auto'}}/></div>

**Paso 2. Conéctate a nuestra plataforma por puerto serie**

- Haz clic en `Connect`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- Selecciona el puerto serie correcto (terminado en “A”)

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

:::note
Si estás usando macOS o Linux, elige el puerto con el número más pequeño.
:::

- Haz clic en `Connect`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

**Paso 3. Ver el modelo existente y cambiar a un modelo nuevo**

- Ver el nombre del modelo y la versión del modelo

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI5.png" style={{width:500, height:'auto'}}/></div>

- Haz clic en `Select Model...` y haz clic en el modelo que quieres grabar

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI6.png" style={{width:500, height:'auto'}}/></div>

- Haz clic en `Confirm`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI7.png" style={{width:500, height:'auto'}}/></div>

**Paso 4. Previsualizar el efecto y ajustar el parámetro**

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI8.png" style={{width:400, height:'auto'}}/></div>

La función actual de activación visual ofrece las siguientes opciones de configuración:

- **ID de objetivo** (`target`): Especifica el ID de objetivo a detectar. Este ID depende del modelo visual utilizado; el valor predeterminado es 0.
- **Duración de detección** (`duration`): La unidad es segundos, se utiliza para ajustar la sensibilidad de la activación visual. El valor predeterminado es 1 segundo (este valor predeterminado no incluye el procesamiento de rebote de 1 segundo).
- **Umbral de confianza** (`threshold`): El límite inferior de confianza para que el modelo visual reconozca un objeto, utilizado para ajustar la sensibilidad de detección. Se representa como un porcentaje, el valor predeterminado es 75%.
- **Período de enfriamiento** (`interval`): La unidad es segundos, indica el tiempo de espera requerido después de que termina una conversación antes de volver a activarse, utilizado para evitar interrupciones frecuentes por el mismo objeto. El valor predeterminado es 8 segundos.

Por ejemplo, puedes ajustar la sensibilidad del modelo modificando el parámetro `threshold`. Si consideras que el umbral actual es demasiado estricto, simplemente dile a Watcher: "Please set the confidence threshold to 60%".

## Solución de problemas

### Problemas comunes

1. **No se detecta ningún puerto COM**
   - Asegúrate de estar usando el puerto Type-C inferior
   - Prueba con otro cable USB
   - Comprueba si los controladores USB están instalados correctamente

2. **La grabación falla**
   - Al grabar Himax, selecciona el puerto COM que termina en “A”.
   - Al grabar ESP32-S3, selecciona el puerto COM que termina en “B”.

3. **El dispositivo no responde**
   - Usa un pin para presionar suavemente el botón de reinicio
   - Intenta borrar antes de grabar

4. **El dispositivo no se activa con la detección visual**
   - Comprueba si hay mensajes de registro relevantes en la salida serie.
   - La versión de firmware v2.0.3 requiere decir “Turn on inference switch” a Xiaozhi para habilitar esta función.

5. **El puerto serie muestra registros de reconocimiento visual pero el dispositivo aún no puede activarse**
   - Ve a la plataforma SenseCraft AI y graba el modelo Person en el chip de IA.

## Preguntas frecuentes

**P: ¿Puedo grabar otros modelos de IA en Himax?**

R: Actualmente, solo se admiten los modelos Face y Person. La grabación de otros modelos aún no es compatible y estará disponible en una actualización futura.

## Soporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>