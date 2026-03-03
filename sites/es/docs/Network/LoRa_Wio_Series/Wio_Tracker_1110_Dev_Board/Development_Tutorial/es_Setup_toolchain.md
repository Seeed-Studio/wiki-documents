---
description: Configure_the_Parameters_of_Wio_Tracker_1110 
title: Configurar tu Cadena de Herramientas
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/setup_toolchain_for_wio_tracker
last_update:
  date: 9/19/2023
  author: Jessie
---


La Placa de Desarrollo Wio Tracker 1110 aprovecha Arduino para mejorar tu experiencia de codificación, antes de comenzar el desarrollo, necesitas configurar tu cadena de herramientas primero.


### Configurar tu cadena de herramientas

#### Instalar Arduino IDE

El Arduino IDE (Entorno de Desarrollo Integrado) es un software de código abierto, utilizado principalmente para escribir, compilar y cargar código a casi todos los Módulos Arduino.
Está disponible para todos los sistemas operativos, es decir, MAC, Windows, Linux y se ejecuta en la Plataforma Java que viene con funciones y comandos integrados que juegan un papel vital en la depuración, edición y compilación del código.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descarga de Arduino IDE </font></span></strong>
    </a>
</div>

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

#### Agregar Placa Seeed

Navega a `Arduino IDE` -> `Preferencias`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png" alt="pir" width={800} height="auto" /></p>

Copia esta URL a `URLs adicionales del gestor de placas`, luego haz clic en `OK`.

```cpp
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Gestor de Placas`.
Busca `Seeed nRF52 Boards` e instálalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>


Luego necesitas seleccionar la Placa y el Puerto.<br/>
Busca `Seeed Wio Tracker 1110` y selecciónalo, elige el puerto y haz clic en `OK`.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>

:::info
El puerto debería ser como 'Puerto Serie(USB)'
:::


#### Ejemplos de Wio Tracker 1110

SenseCAP proporciona `Ejemplos de Wio Tracker 1110` para que los usuarios puedan comenzar rápidamente.

Navega a la pestaña `Archivo`, selecciona `Ejemplo`-> `Ejemplos de Wio Tracker 1110`, luego elige el que necesites.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png" alt="pir" width={800} height="auto" /></p>


### Agregar Librerías


En el Arduino IDE, puedes buscarla en el `Gestor de Librerías`, por ejemplo `Seeed_Arduino_AHT20`, y luego instalarla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png" alt="pir" width={800} height="auto" /></p>
<details>
<summary>Haz clic para previsualizar la instalación sin conexión</summary>

Para instalarla *sin conexión*, puedes **descargar el zip del repositorio** desde GitHub, navegar a **Programa** -> **Incluir Librería** -> **Agregar Librería .ZIP**, luego seleccionar las librerías que descargaste.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

:::note Librerías para referencia
[Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)<br/>
[Adafruit SPI Flash](https://github.com/adafruit/Adafruit_SPIFlash)<br/>
[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)<br/>
[Sensirion I2C SGP41 Arduino Library](https://github.com/Sensirion/arduino-i2c-sgp41)<br/>
[Sensirion I2C SHT4X Arduino Library](https://github.com/Sensirion/arduino-i2c-sht4x)<br/>
[Sensirion Gas Index Algorithm Arduino Library](https://github.com/Sensirion/arduino-gas-index-algorithm)
:::