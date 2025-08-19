---
description: Configure_the_Parameters_of_Wio_Tracker_1110 
title: Configura tu Toolchain
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/setup_toolchain_for_wio_tracker
last_update:
  date: 05/21/2025
  author: Guillermo
---


La placa Wio Tracker 1110 Dev Board utiliza Arduino para mejorar tu experiencia de programación. Antes de comenzar el desarrollo, necesitas configurar tu cadena de herramientas (toolchain).

### Configura tu cadena de herramientas

#### Instalar Arduino IDE

El Arduino IDE (Entorno de Desarrollo Integrado) es un software de código abierto, principalmente utilizado para escribir, compilar y subir código a casi todos los módulos Arduino.  
Está disponible para todos los sistemas operativos, es decir, Mac, Windows, Linux y funciona sobre la plataforma Java que incluye funciones y comandos incorporados que juegan un papel vital en la depuración, edición y compilación del código.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descarga Arduino IDE </font></span></strong>
    </a>
</div>

:::tip
Si es la primera vez que usas Arduino, te recomendamos mucho consultar [Comenzando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

#### Añadir la placa Seeed

Navega en el `Arduino IDE` a `Preferencias` (Preferences).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png" alt="pir" width={800} height="auto" /></p>

Copia esta URL en `URLs adicionales para el gestor de placas` y haz clic en `OK`.

```cpp
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Gestor de placas` (Board Manager).  
Busca `Seeed nRF52 Boards` e instálalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>

Luego debes seleccionar la placa y el puerto.<br/>
Busca `Seeed Wio Tracker 1110`, selecciónala, elige el puerto y haz clic en `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>

:::info
El puerto debería verse como 'Puerto Serial (USB)'
:::




#### Ejemplos para Wio Tracker 1110

SenseCAP proporciona `Ejemplos para Wio Tracker 1110` para que los usuarios puedan comenzar rápidamente.

Navega a la pestaña `Archivo` (File), selecciona `Ejemplos` -> `Ejemplos para Wio Tracker 1110`, luego elige el que necesites.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png" alt="pir" width={800} height="auto" /></p>



### Añadir librerías

En Arduino IDE, puedes buscarlas en el `Gestor de librerías` (Library Manager), por ejemplo `Seeed_Arduino_AHT20`, y luego instalarlas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png" alt="pir" width={800} height="auto" /></p>
<details>
<summary>Haz clic para ver instalación offline</summary>

Para instalar *offline*, puedes **descargar el ZIP del repositorio** desde GitHub, luego en Arduino ir a **Sketch** -> **Incluir librería** -> **Añadir librería .ZIP**, y seleccionar las librerías descargadas.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

:::note Librerías de referencia
[Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)<br/>
[Adafruit SPI Flash](https://github.com/adafruit/Adafruit_SPIFlash)<br/>
[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)<br/>
[Sensirion I2C SGP41 Arduino Library](https://github.com/Sensirion/arduino-i2c-sgp41)<br/>
[Sensirion I2C SHT4X Arduino Library](https://github.com/Sensirion/arduino-i2c-sht4x)<br/>
[Sensirion Gas Index Algorithm Arduino Library](https://github.com/Sensirion/arduino-gas-index-algorithm)
:::
