---
description: Guía para flashear el firmware repetidor MeshCore en el ESP32S3 mediante Web USB, junto con la configuración de la app para la región LoRa y el ajuste de la ruta.
title: Primeros pasos con ESP32 MeshCore
keywords:
  - Meshcore
  - ESP32 MeshCore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ESP32S3Series.png
slug: /get_started_with_esp32s3_meshcore
sku: 102010611,113110064
sidebar_position: 3
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/es/get_started_with_esp32s3_meshcore/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ESP32S3Series.png" alt="pir" width={800} height="auto" /></p>

[MeshCore](https://meshcore.io/) es un sistema de código abierto para habilitar comunicaciones seguras basadas en texto utilizando hardware LoRa Mesh. Puedes usar el repetidor MeshCore y el nodo compañero MeshCore para construir tu red MeshCore. El [XIAO ESP32S3 & Wio-SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) es una solución flexible para desarrollar un nodo MeshCore.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## Flasheo de firmware

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve al [Meshcore Web Flasher](https://meshcore.io/flasher). 

Elige `Seeed Studio Xiao S3 Wio` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ScreenShot_2026-04-20_140721_194.png" alt="pir" width={800} height="auto" /></p>

Elige `Repeater`. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RepeaterFirmware.png" alt="pir" width={800} height="auto" /></p>


Selecciona la versión de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FirmwareVersion.png" alt="pir" width={600} height="auto" /></p>

Mientras mantienes pulsado el botón `Boot(B)`, pulsa el botón `Reset(R)` para entrar en modo de flasheo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RB.png" alt="pir" width={300} height="auto" /></p>

Elige `Erase device `, luego haz clic en `Flash` y selecciona el puerto serie llamado `Xiao xxx` o `debug unit xxx`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Flash1.png" alt="pir" width={800} height="auto" /></p>

Cuando la barra de progreso esté completamente llena, indica que el flasheo se ha completado. Entonces el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FlashigComplete.png" alt="pir" width={800} height="auto" /></p>

Haz clic en el botón `Reset(R)` para reiniciar el dispositivo.

## Conexión del dispositivo

### Conectado al SX-1262

El SX-1262 se puede conectar al Xiao ESP32-S3 mediante la interfaz B2B. El SX-1262 utiliza SPI para comunicarse con el Xiao ESP32-S3.

El siguiente diagrama muestra el mapeo de pines B2B entre XIAO ESP32S3 y Wio-SX1262.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="B2B pin mapping between XIAO ESP32S3 and Wio-SX1262"/>
</div>
:::warning
El SX-1262 compatible solo se puede comprar dentro del kit.
:::

### (Opcional) Conectado a la batería

El XIAO ESP32S3 tiene un chip de gestión de energía integrado que permite alimentar el XIAO ESP32S3 de forma independiente usando una batería o cargar la batería a través del puerto USB del XIAO ESP32S3.

Si quieres conectar la batería para XIAO, te recomendamos comprar una batería recargable `3.7V lithium` calificada con `protection circuit`. Al soldar la batería, ten cuidado de distinguir entre los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe ser el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación es el lado más alejado del puerto USB.

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### (Opcional) Conectado a la placa de expansión

La placa de expansión sería una buena herramienta para la conexión y aplicaciones adicionales, como añadir fácilmente sensores y módulos Grove.

<table align="center">
  <tbody>
    <tr>
      <th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic</th>
      <th>(Opcional) Placa de expansión</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg"
            style={{ width: 330, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Expansion.jpg"
            style={{ width: 330, height: 'auto' }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Consigue uno ahora🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Consigue uno ahora🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Configuración

### Configuración inicial

Cuando el firmware de repetidor MeshCore se flashea en un dispositivo MeshCore por primera vez, es necesario configurar la frecuencia del dispositivo para que utilice la frecuencia que es legal en tu país o región.

[Haz clic aquí](https://config.meshcore.io/) para configurar el repetidor.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cambia la región LoRa y guarda la configuración. Entonces el dispositivo se reiniciará automáticamente. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Configure.png" alt="pir" width={800} height="auto" /></p>

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** debe cumplir una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::

Entonces puedes empezar a probar tu propia red Mesh.

### Enviar anuncio

Haz clic en "send advert" para permitir que otros dispositivos Meshcore vean este repetidor. Entonces el repetidor se podrá ver en la lista de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

### Inicio de sesión de administrador

La contraseña de administrador predeterminada para un repetidor es `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Admin.png" alt="pir" width={800} height="auto" /></p>

Después de iniciar sesión, puedes ver la página de configuración. Ahora puedes ajustar la configuración del repetidor en la app hone.

### Configurar ruta

Antes de añadir el repetidor a tu ruta, es posible que necesites usar el repetidor para enviar primero un anuncio. El repetidor enviará anuncios automáticamente a intervalos regulares. Este intervalo puede ser de varias horas (por defecto 3 horas). Así que necesitas enviar el anuncio manualmente o, de lo contrario, tendrás que esperar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

Puedes configurar manualmente la ruta de envío de mensajes. Conecta tu dispositivo compañero Bluetooth a la app de tu teléfono. Abre una ventana de mensaje privado. Entonces podrás elegir el repetidor detectado para formar tu ruta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

Después de configurar la ruta, el método de transmisión cambiará a "n hop". Por ejemplo, si añades 1 repetidor en tu ruta, cambiará a 1 salto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

### (Opcional) Otros ajustes

Si quieres mostrar la posición del repetidor en un mapa de nodos MeshCore, primero necesitas instalar un módulo GPS para el kit. 

<table align="center">
  <tbody>
    <tr>
      <th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic</th>
      <th>Kit XIAO ESP32S3 & Wio-SX1262 con carcasa</th>
      <th>(Opcional) Módulo L76K GNSS</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg"
            style={{ width: 300, height: 'auto' }}
          />
        </div>
      </td]
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/XiaoESP32S3Casing.jpg"
            style={{ width: 300, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg"
            style={{ width: 350, height: 'auto' }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Consigue uno ahora🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Consigue uno ahora🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                Consigue uno ahora🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:800, height:'auto'}}/></div>

Luego inicia sesión en el administrador para habilitar el GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Además, puedes ajustar el intervalo de difusión de anuncios. El rango de intervalo de `auto zero hop advert` es de 60-240 minutos. El rango de intervalo de `auto flood advert` es de 3-168 horas. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

## Preguntas frecuentes

### El dispositivo pierde la configuración guardada después de un corte de energía

Si el nombre del dispositivo, la Región LoRa u otros ajustes parecen haberse guardado correctamente en la aplicación pero desaparecen después de apagar el dispositivo, comprueba si la tabla de particiones de la memoria flash del ESP32-S3 es anormal.

Puedes usar [ESPConnect](https://thelastoutpostworkshop.github.io/ESPConnect/) para inspeccionar la tabla de particiones de la memoria flash del ESP32-S3. ESPConnect solo es aplicable a dispositivos ESP y no se puede usar con dispositivos nRF52840.

1. Abre ESPConnect y selecciona una velocidad en baudios de `115200`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-2.png" alt="Selección de velocidad en baudios en ESPConnect" width={800} height="auto" /></p>

2. Haz clic en **Connect**, luego selecciona **USB JTAG/serial debug unit**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-3.png" alt="Seleccionar unidad de depuración USB JTAG serial en ESPConnect" width={600} height="auto" /></p>

3. Después de que el dispositivo esté conectado, abre la página **Partitions**.
4. Comprueba si `spiffs` existe en la lista de particiones.

Si la tabla de particiones es anormal, la página **Partitions** de ESPConnect puede mostrar solo:

- `nvs`
- `phy_init`
- `factory`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-4.png" alt="Tabla de particiones de ESPConnect sin SPIFFS" width={800} height="auto" /></p>

Sin embargo, el firmware oficial MeshCore v1.15 `merged.bin` debería incluir:

- `nvs`
- `otadata`
- `app0`
- `app1`
- `spiffs` 1.5 MB
- `coredump`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-5.png" alt="Tabla de particiones de ESPConnect con SPIFFS" width={800} height="auto" /></p>

MeshCore v1.15 escribe el nombre del dispositivo y la configuración de Región en `/new_prefs` en SPIFFS. Si la partición `spiffs` no existe, estos ajustes solo se mantienen en la RAM. La aplicación móvil puede mostrar que la configuración se guardó correctamente, pero se perderá después de quitar la alimentación.

Esto suele ocurrir cuando se flashea el archivo de firmware normal, por ejemplo:

```text
Xiao_S3_WIO_companion_radio_ble-v1.15.0-dee3e26.bin
```

En su lugar, se debe flashear el firmware completo combinado, por ejemplo:

```text
Xiao_S3_WIO_companion_radio_ble-v1.15.0-dee3e26-merged.bin
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-1.png" alt="Opciones de descarga del flasheador MeshCore para firmware normal y combinado" width={800} height="auto" /></p>

Para solucionar este problema, borra el dispositivo y vuelve a flashear la versión de firmware combinada.

## Recursos
- **[PDF]**[Diagrama esquemático del SX1262 compatible con Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Hoja de datos del módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Archivo 3D de Wio-SX1262 para XlAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Esquemático de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [Biblioteca Kicad del kit XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Modelo 3D de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Bibliotecas Eagle de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Dimensiones en DXF de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Huella Eagle de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Firmware de fábrica de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Hoja de pines de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Huella de Seeed Studio XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Archivo 3D de la carcasa](https://www.thingiverse.com/thing:6888371)
## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
