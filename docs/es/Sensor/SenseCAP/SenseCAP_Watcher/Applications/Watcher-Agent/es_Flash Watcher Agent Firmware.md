---
description: Guía para flashear firmware a tu Agente SenseCAP Watcher
title: Flashear Firmware del Agente Watcher
sidebar_position: 1
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
image: https://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /es/flash_watcher_agent_firmware
last_update:
  date: 2025/08/20
  author: Twelve
---

# Flashear Firmware del Agente Watcher

## Descripción General

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

Esta guía proporciona instrucciones para flashear el firmware del Agente Watcher a tu dispositivo SenseCAP Watcher usando la Herramienta de Descarga Flash de Espressif.

:::danger Nota
El firmware proporcionado en esta guía puede requerir información de autenticación. Si es necesario, por favor contacta a [sensecap@seeed.cc](mailto:sensecap@seeed.cc).
:::

## Prerrequisitos

### Hardware Requerido

- Dispositivo SenseCAP Watcher
- Cable de datos USB Type-C
- PC con Windows

### Software Requerido

- [Herramienta de Descarga Flash](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 o posterior)
- [Archivo binario del firmware del Agente Watcher](https://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)

## Proceso de Flasheo

### Paso 1. Descargar e Instalar la Herramienta de Descarga Flash

1. Descarga la Herramienta de Descarga Flash del sitio web oficial de Espressif:
   [Herramienta de Descarga Flash v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. Extrae el archivo zip descargado a un directorio de tu elección
3. No se requiere instalación - simplemente haz doble clic en el archivo ejecutable para ejecutar la herramienta

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### Paso 2. Preparar el Archivo de Firmware

1. Descarga el [archivo binario](https://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin) del firmware del Agente Watcher
:::caution Nota
Asegúrate de que toda la ruta no contenga símbolos especiales.
:::

### Paso 3. Conectar el Dispositivo

1. Conecta tu Watcher a tu computadora usando el puerto Type-C en la parte inferior del dispositivo
2. Haz doble clic en `flash_download_tool_3.9.7.exe` para iniciar la herramienta
3. Configura las siguientes opciones:
   - ChipType: Selecciona `ESP32-S3`
   - WorkMode: Selecciona `Develop`
   - LoadMode: Selecciona `UART`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 4. Configurar Ajustes del Firmware

1. Haz clic en el botón "..." en la primera fila para navegar y seleccionar el archivo binario del firmware que descargaste
2. Asegúrate de que la casilla de verificación junto al archivo de firmware esté seleccionada
3. Ingresa `0x0` en el campo de dirección después de la selección del archivo de firmware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### Paso 5. Seleccionar Puerto COM y Configuraciones de Flash

Configura las siguientes opciones:

- SPI SPEED: 80MHz
- SPI MODE: DIO
- FLASH SIZE: 32Mbit
- COM: En el Administrador de Dispositivos, encuentra el puerto COM cuyo nombre termine con "B" — selecciona este para el flasheo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

:::note
Si el flasheo no comienza después de hacer clic en START, haz clic en STOP y confirma que has seleccionado el puerto COM que termina con "B".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
:::

### Paso 6. Borrar Flash

1. Haz clic en el botón `ERASE` para limpiar el firmware existente
2. Espera a que el proceso de borrado se complete

### Paso 7. Flashear el Firmware

1. Haz clic en el botón `START` para comenzar el flasheo
2. Deberías ver información de progreso en la ventana de registro
3. Si no aparece progreso o falla, prueba el otro puerto COM

### Paso 8. Verificar Éxito

El proceso de flasheo está completo cuando veas el mensaje de éxito en la ventana de registro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 9. Reiniciar el Dispositivo

1. Localiza el orificio de reinicio en tu dispositivo Watcher
2. Usa un alfiler para presionar suavemente el botón de reinicio
3. El dispositivo se reiniciará con el nuevo firmware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## Solución de Problemas

### Problemas Comunes

1. **No se Detecta Puerto COM**
   - Asegúrate de estar usando el puerto Type-C inferior
   - Prueba un cable USB diferente
   - Verifica si los controladores USB están instalados correctamente

2. **El Flasheo Falla**
   - Prueba el otro puerto COM
   - Verifica si la dirección (0x0) está ingresada correctamente

3. **El Dispositivo No Responde**
   - Usa un alfiler para presionar suavemente el botón de reinicio
   - Intenta borrar antes de flashear

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
