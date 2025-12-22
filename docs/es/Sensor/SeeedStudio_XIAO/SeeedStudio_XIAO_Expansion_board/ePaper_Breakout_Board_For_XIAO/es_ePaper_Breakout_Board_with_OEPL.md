---
description: Usa el generador de configuración OpenEPaperLink para generar la configuración para el papel electrónico
title: Constructor de Configuración OpenEPaperLink para ePaper
keywords:
- XIAO eInk Expansion
- XIAO
- OEPL Config Builder
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/OEPL_Config_img.webp
slug: /es/epaper_breakout_board_with_oepl
sidebar_position: 2
last_update:
  date: 10/23/2025
  author: Zovey
---

# Constructor de configuración OpenEPaperLink y ePaper

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/seeed_logo_2.jpg" style={{width:500, height:'auto'}}/></div>

## Introducción

[OpenEPaperLink](https://openepaperlink.de/) (El siguiente texto se referirá a este proyecto como "OEPL") es un protocolo alternativo e implementación de firmware para etiquetas electrónicas de estantería. Se admiten múltiples pantallas con puntos de acceso basados en ESP32 y comunicación por radio 802.15.4. Este es un sistema de comunicación de etiquetas de papel electrónico de código abierto, que permite a los usuarios actualizar el contenido de la pantalla de tinta electrónica de forma inalámbrica. El sistema consta de un punto de acceso (AP) y dispositivos de etiqueta, y admite varios tipos de pantallas de tinta electrónica. Proporciona una amplia gama de funciones de generación y transmisión de contenido. Ahora, este proyecto también es compatible con Seeed Studio XIAO nRF52840 Sense Plus.

Después de comprar la Placa de Expansión ePaper, es posible que tengas la necesidad de reemplazar la pantalla de papel electrónico con una especificación diferente. En este tutorial, utilizaremos dos herramientas para el proceso: OPEL Config Builder se usa para modificar los parámetros del papel electrónico, y OEPL Image Uploader se usa para cargar imágenes.

[OEPL Config Builder](https://config.openepaperlink.org/) es una herramienta de configuración de parámetros de papel electrónico de bajo código que utiliza el protocolo BLE para transmisión inalámbrica. Los usuarios ya no necesitan escribir códigos de configuración complicados; simplemente pueden operar el ratón en el sitio web para completar la configuración.

[OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html) también es una herramienta que realiza transmisión inalámbrica a través del protocolo BLE. La diferencia es que esta herramienta transmite fotos.

## Preparación del Hardware

<table align="center">
  <tr>
    <th>Pantalla ePaper Monocromática de 4.26"</th>
    <th>Placa de Expansión ePaper para Seeed Studio XIAO</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
El MCU de la serie XIAO nRF52840 admite esta herramienta, no limitado al XIAO nRF52840 Sense Plus. La pantalla ePaper solo admite una pantalla de 4.26 pulgadas. Sin embargo, continuaremos actualizando en el futuro para admitir más tamaños de pantalla.
:::

## Uso del OEPL Config Builder

### Paso 1: Grabar el firmware BLE

El primer paso es que puedes obtener el firmware OEPL_BLE del repositorio oficial de OEPL.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

Después de conectar Seeed Studio XIAO nRF52840 Sense Plus, la Placa de Expansión ePaper y la pantalla juntos. Luego conecta la computadora al nRF52840 usando un cable de datos USB, y luego presiona el botón de reinicio dos veces consecutivamente. Entonces verás aparecer un administrador de archivos en el lado de la PC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

Luego, copia el archivo `.uf2` que se obtuvo de la unidad USB al administrador de archivos del nRF52840. La próxima vez que el MCU se encienda, ejecutará automáticamente este firmware `.uf2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

### Paso 2: Usar BLE para conectar al Builder

En la interfaz del Builder, conecta los dispositivos a través del protocolo BLE (Si no se muestra ningún dispositivo, por favor vuelve a grabar el firmware). Este sitio web solo puede lograr la siguiente función de carga inalámbrica cuando está conectado a través del protocolo BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

Si la conexión es exitosa, puedes ver las palabras "Connected" en la caja del terminal.

- **Read Config**: Leer la configuración en el MCU.
- **Write Config**: Escribir la configuración al MCU.
- **Reboot**: Reiniciar el MCU.

### Paso 3: Panel del Builder

Simplemente selecciona las variables correspondientes o ingresa parámetros en el panel para completar la configuración.

- **Parámetros del Config Builder**
  - **system_config**: Contiene información sobre el IC host y los pines de gestión de energía
  - **manufacturer_data**: Identificador del fabricante e información de la placa
  - **power_option**: Opciones relacionadas con la fuente de alimentación y el sueño
  - **display**: Información de pantalla/panel (opcional). Puede aparecer múltiples veces para dispositivos con varias pantallas.
  - **led**: Configuración opcional de LED (repetible).
  - **sensor_data**: Lecturas/definiciones opcionales de sensores (repetible).
  - **data_bus**: Definiciones globales de bus (I2C/SPI etc).
  - **binary_inputs**: Entradas binarias opcionales (botones, interruptores).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

Si quieres guardar la configuración que has establecido, puedes exportarla como un archivo `.bin`, `Hex` y `JSON` dentro de este panel. Por el contrario, este panel también admite la importación de archivos `JSON` para propósitos de configuración. El archivo de configuración de pantalla de 4.26 se puede obtener aquí.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

Después de configurar la configuración, puedes cargarla al MCU usando la función **Write Config**.

## Uso del OEPL Image Uploader

OEPL Image Uploader es una herramienta de carga de papel electrónico en línea, y también opera a través del protocolo BLE. Esta herramienta es extremadamente liviana y sin código, eliminando la molestia de la velocidad de actualización lenta del papel electrónico tradicional. Su método de uso es similar al OEPL Config Builder.

### Paso 1: Conectar al Uploader

El método de conexión es similar al del Builder. El dispositivo se conecta a través de BLE. Sin embargo, debe notarse que debido a algunos conflictos entre el firmware anterior y los pines requeridos para esta carga de imagen, algunas modificaciones al firmware son necesarias antes de usar esta función web. Aquí, se proporciona un nuevo firmware para grabar. Solo sigue los pasos mencionados anteriormente para realizar el proceso de grabado.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener</button></p>
</a>
</div>

La variable en la sección "E-Paper prefix filter(s)" necesita ser cambiada a "OEPL"; de lo contrario, el dispositivo no puede ser recuperado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

### Paso 2: Subir Imagen

Luego haz clic en el botón "Select File" para elegir un archivo local para subir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

Después de que se complete la transferencia del archivo, simplemente haz clic en el botón "Upload Image" para subirlo al papel electrónico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

Cuando se muestre "Upload Complete", indica que el proceso de grabación ha sido exitoso. Entonces podrás ver que la imagen en la pantalla ha cambiado.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
