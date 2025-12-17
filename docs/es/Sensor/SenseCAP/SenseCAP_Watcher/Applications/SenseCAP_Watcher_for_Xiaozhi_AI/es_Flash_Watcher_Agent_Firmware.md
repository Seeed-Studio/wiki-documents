---
description: Guía para flashear firmware a tu SenseCAP Watcher Agent
title: Flashear Firmware del Watcher Agent
sidebar_position: 1
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /es/flash_watcher_agent_firmware
last_update:
  date: 12/04/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# Flashear Firmware del Watcher Agent

## Descripción General

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

Esta guía proporciona instrucciones para flashear el firmware del Watcher Agent a tu dispositivo SenseCAP Watcher usando la herramienta Flash Download Tool de Espressif.

:::danger Nota
El firmware proporcionado en esta guía puede requerir información de autenticación. Si es necesario, por favor contacta a [sensecap@seeed.cc](mailto:sensecap@seeed.cc).
:::

## Prerrequisitos

### Hardware Requerido

- Dispositivo SenseCAP Watcher
- Cable de datos USB Type-C
- PC con Windows

### Software Requerido

- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 o posterior)
- [Archivo binario del firmware Watcher Agent](https://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)

:::note
Si ya posees un dispositivo Watcher y su modelo **no es -EN**, necesitarás flashear manualmente la información de autenticación después de flashear el firmware.  
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
Para más detalles, por favor consulta [Flashear Información de Autenticación](#flashear-información-de-autenticación).
:::

## Proceso de Flasheo

### Paso 1. Descargar e Instalar Flash Download Tool

1. Descarga la Flash Download Tool desde el sitio web oficial de Espressif:
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. Extrae el archivo zip descargado a un directorio de tu elección
3. No se requiere instalación - simplemente haz doble clic en el archivo ejecutable para ejecutar la herramienta

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### Paso 2. Preparar el Archivo de Firmware

1. Descarga el [archivo binario](https://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin) del firmware Watcher Agent
:::caution Nota
Asegúrate de que todas las rutas no contengan símbolos especiales.
:::

### Paso 3. Conectar el Dispositivo

1. Conecta tu Watcher a tu computadora usando el puerto Type-C en la parte inferior del dispositivo
2. Haz doble clic en `flash_download_tool_3.9.7.exe` para iniciar la herramienta
3. Configura las siguientes opciones:
   - ChipType: Selecciona `ESP32-S3`
   - WorkMode: Selecciona `Develop`
   - LoadMode: Selecciona `UART`

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 4. Configurar Ajustes del Firmware

1. Haz clic en el botón "..." en la primera fila para navegar y seleccionar el archivo binario del firmware que descargaste
2. Asegúrate de que la casilla de verificación junto al archivo de firmware esté seleccionada
3. Ingresa `0x0` en el campo de dirección después de la selección del archivo de firmware

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### Paso 5. Seleccionar Puerto COM y Configuraciones de Flash

Configura las siguientes opciones:

- SPI SPEED: 80MHz
- SPI MODE: DIO
- FLASH SIZE: 32Mbit
- COM: En el Administrador de Dispositivos, encuentra el puerto COM cuyo nombre termine con "B" — selecciona este para el flasheo.

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

:::note
Si el flasheo no comienza después de hacer clic en START, haz clic en STOP y confirma que has seleccionado el puerto COM que termina con "B".
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
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

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 9. Reiniciar el Dispositivo

1. Localiza el orificio de reinicio en tu dispositivo Watcher
2. Usa un alfiler para presionar suavemente el botón de reinicio
3. El dispositivo se reiniciará con el nuevo firmware

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

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

### Flashear Información de Autenticación

Si tu modelo de Watcher **no es -EN**, debes flashear manualmente la información de autenticación después de flashear el firmware.  

**Pasos:**

1. Verifica la **dirección MAC** de tu dispositivo.  
   - Puedes encontrarla en la etiqueta del producto o a través del puerto serie.  
   - Si estás usando el firmware nativo, también puedes encontrarla en **Settings->About Device->WI-FI Mac** del dispositivo.  

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/mac.jpg" style={{width:600, height:'auto'}}/></div>

:::danger nota
Por favor asegúrate de que la dirección STA MAC que proporciones sea correcta.  
El archivo de autenticación solo puede ser flasheado **una vez**, y usar una dirección incorrecta impedirá que el dispositivo se vincule correctamente.  
También ten en cuenta que el archivo de autenticación solo necesita ser flasheado una vez.
:::

2. Envía un correo electrónico a **sensecap@seeed.cc** con tu dirección STA MAC y solicita el archivo de autenticación y la herramienta de flasheo. Este script será proporcionado en el paquete que te enviemos.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools.jpg" style={{width:500, height:'auto'}}/></div>
3. Ve al terminal esp-idf y navega a la carpeta que te enviamos, ejecuta el **script de flasheo de Python**.
:::note
Si aún no has instalado esp-idf, ve al [Sitio Web ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html) y sigue la guía oficial para descargarlo e instalarlo.
:::
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash1.jpg" style={{width:500, height:'auto'}}/></div>
4. Sigue las instrucciones del programa e ingresa el puerto serie correspondiente, serialB e ingresa ""BURN"" para flashear.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash5.jpg" style={{width:800, height:'auto'}}/></div>
5. Una vez que el proceso esté completo, presiona el botón de reinicio en el dispositivo.  
6. Después de los pasos anteriores, podrás registrarte en la [plataforma SenseCraft AI-Watcher Agent](https://sensecraft.seeed.cc/ai/watcher-agent)

:::note
Si encuentras el siguiente problema, entonces ve al terminal esp-idf y navega a la carpeta e ingresa manualmente los siguientes dos comandos:
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash4.jpg" style={{width:800, height:'auto'}}/></div>

```bash
espefuse.py -p <your_correct_serial_port> burn_block_data BLOCK_USR_DATA serial_number
espefuse.py -p <your_correct_serial_port> burn_key BLOCK_KEY0 license_key HMAC_UP
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash2.jpg" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash3.jpg" style={{width:800, height:'auto'}}/></div>
:::

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
