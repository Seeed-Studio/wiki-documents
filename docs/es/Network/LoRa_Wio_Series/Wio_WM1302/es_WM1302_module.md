---
description: Introducción al Módulo Gateway LoRaWAN® WM1302.
title: Módulo Gateway LoRaWAN® WM1302
keywords:
  - wio 
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /es/WM1302_module
last_update:
  date: 4/24/2025
  author: Leo
---

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.

:::note
Recientemente hemos lanzado la Serie Wio-E5 basada en el módulo Wio-E5.

Haz clic [aquí](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conocer los nuevos miembros de la familia LoRa-E5 desde el [Módulo Wio-E5](https://wiki.seeedstudio.com/es/LoRa-E5_STM32WLE5JC_Module/) [módulo Grove](https://wiki.seeedstudio.com/es/Grove_LoRa_E5_New_Version/), [placas de desarrollo mini](https://wiki.seeedstudio.com/es/LoRa_E5_mini/) hasta el [Kit de Desarrollo](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/).

Para aprender más sobre la creación de un Nodo Final LoRaWAN® con el Paquete MCU STM32Cube para la serie STM32WL (SDK), para unirse y enviar datos a la Red LoRaWAN®, lee más en las páginas wiki para [placas de desarrollo mini](https://wiki.seeedstudio.com/es/LoRa_E5_mini/) y [Kit de Desarrollo](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/).
:::

El módulo WM1302 es una nueva generación de módulo gateway LoRaWAN® con factor de forma mini-PCIe. Basado en el chip LoRaWAN® de banda base Semtech® SX1302, el WM1302 desbloquea el mayor potencial de capacidad de transmisión inalámbrica de largo alcance para productos gateway. Presenta mayor sensibilidad, menor consumo de energía y menor temperatura de operación que los chips LoRa® anteriores SX1301 y SX1308.

El módulo gateway LoRaWAN® WM1302 tiene versiones SPI y USB en las bandas de frecuencia US915 y EU868, permitiéndote tener una amplia gama de opciones de planes de frecuencia LoRaWAN® para elegir incluyendo EU868, US915, AS923, AS920, AU915, KR920 e IN865.

El módulo WM1302 está certificado CE, FCC y Telec, lo que ayuda a simplificar el proceso de desarrollo y certificación de los dispositivos gateway LoRaWAN®.

El WM1302 está diseñado para aplicaciones M2M e IoT y puede ser ampliamente aplicado en escenarios compatibles con gateway LPWAN. Sería una elección perfecta para reducir significativamente las dificultades técnicas y el tiempo de consumo al desarrollar dispositivos gateway LoRa®, incluyendo gateway LoRaWAN®, hotspots, etc.

## Características

- **Alimentado por el chip LoRa® de banda base Semtech® SX1302**, consumo de energía extremadamente bajo y alto rendimiento.
- **Factor de forma Mini-PCIe con el conector dorado estándar de 52 pines**, fácil de integrar con varios dispositivos gateway.
- **Temperatura de operación ultra-baja**, no se necesita disipación de calor adicional, reduciendo el tamaño del gateway LoRaWAN®.
- **Alta sensibilidad** hasta -139 dBm @SF12 con front-end TX/RX SX1250; potencia TX hasta 26 dBm @3.3V.
- **Certificado con CE, FCC y TELEC**. Simplifica el proceso de certificación del producto final.

## Descripción General del Hardware

### Diagrama

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### Pinout

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

<br />

#### Mapeo de Pinout de Raspberry Pi

<table class="tg">
<thead>
<tr>
<th class="tg-4onr">Pin No. 40 (BOARD#)</th><th class="tg-ev79">Raspberry Pi GPIO(BCM#)</th><th class="tg-ev79">Pinout WM1302 Pi HAT</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="tg-4onr">1</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">2</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">3</td>
  <td class="tg-f42p">GPIO 2</td>
  <td class="tg-f42p">I2C_SDA</td>
</tr>

<tr>
  <td class="tg-4onr">4</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">5</td>
  <td class="tg-f42p">GPIO 3</td>
  <td class="tg-f42p">I2C_SCL</td>
</tr>

<tr>
  <td class="tg-4onr">6</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">7</td>
  <td class="tg-f42p">GPIO 4</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">8</td>
  <td class="tg-f42p">GPIO 14</td>
  <td class="tg-f42p">GPS_RXD</td>
</tr>

<tr>
  <td class="tg-4onr">9</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">10</td>
  <td class="tg-f42p">GPIO 15</td>
  <td class="tg-f42p">GPS_TXD</td>
</tr>

<tr>
  <td class="tg-4onr">11</td>
  <td class="tg-f42p">GPIO 17</td>
  <td class="tg-f42p">SX1302_RESET<br />Versión SPI: Activo ALTO<br />Versión USB: Activo BAJO</td>
</tr>

<tr>
  <td class="tg-4onr">12</td>
  <td class="tg-f42p">GPIO 18</td>
  <td class="tg-f42p">SX1262_BUSY</td>
</tr>

<tr>
  <td class="tg-4onr">13</td>
  <td class="tg-f42p">GPIO 27</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">14</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">15</td>
  <td class="tg-f42p">GPIO 22</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">16</td>
  <td class="tg-f42p">GPIO 23</td>
  <td class="tg-f42p">SX1262_DIO1</td>
</tr>

<tr>
  <td class="tg-4onr">17</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">18</td>
  <td class="tg-f42p">GPIO 24</td>
  <td class="tg-f42p">SX1262_DIO2</td>
</tr>

<tr>
  <td class="tg-4onr">19</td>
  <td class="tg-f42p">GPIO 10</td>
  <td class="tg-f42p">SPI_MOSI</td>
</tr>

<tr>
  <td class="tg-4onr">20</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">21</td>
  <td class="tg-f42p">GPIO 9</td>
  <td class="tg-f42p">SPI_MISO</td>
</tr>

<tr>
  <td class="tg-4onr">22</td>
  <td class="tg-f42p">GPIO 25</td>
  <td class="tg-f42p">GPS_RST</td>
</tr>

<tr>
  <td class="tg-4onr">23</td>
  <td class="tg-f42p">GPIO 11</td>
  <td class="tg-f42p">SPI_SCK</td>
</tr>

<tr>
  <td class="tg-4onr">24</td>
  <td class="tg-f42p">GPIO 8</td>
  <td class="tg-f42p">SX1302_CS</td>
</tr>

<tr>
  <td class="tg-4onr">25</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">26</td>
  <td class="tg-f42p">GPIO 7</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">27</td>
  <td class="tg-f42p">GPIO 0</td>
  <td class="tg-f42p">I2C_SDA(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">28</td>
  <td class="tg-f42p">GPIO 1</td>
  <td class="tg-f42p">I2C_SCL(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">29</td>
  <td class="tg-f42p">GPIO 5</td>
  <td class="tg-f42p">SX1262_RST</td>
</tr>

<tr>
  <td class="tg-4onr">30</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">31</td>
  <td class="tg-f42p">GPIO 6</td>
  <td class="tg-f42p">SX1262_CS</td>
</tr>

<tr>
  <td class="tg-4onr">32</td>
  <td class="tg-f42p">GPIO 12</td>
  <td class="tg-f42p">GPS_WAKE_UP</td>
</tr>

<tr>
  <td class="tg-4onr">33</td>
  <td class="tg-f42p">GPIO 13</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">34</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">35</td>
  <td class="tg-f42p">GPIO 19</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">36</td>
  <td class="tg-f42p">GPIO 16</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">37</td>
  <td class="tg-f42p">GPIO 26</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">38</td>
  <td class="tg-f42p">GPIO 20</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">39</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">40</td>
  <td class="tg-f42p">GPIO 21</td>
  <td class="tg-f42p">NC</td>
</tr>

</tbody>
</table>


## Especificaciones

<table class="tg">
<thead>
<tr><th class="tg-4onr">Región</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">Frecuencia</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">Sensibilidad</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">Potencia TX</td>
    <td class="tg-f42p">26 dBm (con fuente de alimentación de 3.3V)</td>
    <td class="tg-f42p">25 dBm (con fuente de alimentación de 3.3V)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LEDs</td>
    <td class="tg-f42p" colspan="2">Alimentación: Verde Config: Rojo TX: Verde RX: Azul</td>
  </tr>
  <tr>
    <td class="tg-4onr">Factor de Forma</td>
    <td class="tg-f42p" colspan="2">Mini PCIe, Conector Dorado de 52 pines</td>
  </tr>
  <tr>
    <td class="tg-4onr">Consumo de Energía (versión SPI)</td>
    <td class="tg-f42p" colspan="2">Standby: 7.5 mA<br />TX potencia máxima: 415 mA<br />RX: 40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">Consumo de Energía (versión USB)</td>
    <td class="tg-f42p" colspan="2">Standby: 20 mA<br />TX potencia máxima: 425 mA<br />RX: 53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT(Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">Soporte</td>
  </tr>
  <tr>
    <td class="tg-4onr">Conector de Antena</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">Temperatura de Funcionamiento</td>
    <td class="tg-f42p" colspan="2">-40°C a 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">Dimensiones</td>
    <td class="tg-f42p" colspan="2">30 mm (ancho) × 50.95 mm (largo)</td>
  </tr>
  <tr>
    <td class="tg-4onr">Certificación</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## Aplicación

- Desarrollo de dispositivos Gateway LPWAN

- Desarrollo de cualquier aplicación de comunicación inalámbrica de larga distancia

- Aprendizaje e investigación de aplicaciones LoRa® y LoRaWAN®

## Dimensión

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## Introducción

### Diferencia entre la versión SPI y la versión USB

Para el Módulo Gateway LoRaWAN® WM1302 versión SPI, los chips Semtech SX1302 y SX126x están conectados a Raspberry Pi a través del mismo bus SPI con diferentes pines de selección de chip (CS).

Para el Módulo Gateway LoRaWAN® WM1302 versión USB, los chips Semtech SX1302 y SX126x están conectados a un MCU STM32L4, y este MCU programado de fábrica funcionará como un dispositivo USB, convirtiéndose en un puente entre Raspberry Pi y SX1302/SX126x.

### Inicio Rápido con WM1302

#### Hardware Requerido

- Módulo Gateway LoRaWAN® WM1302

- Placas Raspberry Pi con conector GPIO de 40 pines (ej. Raspberry Pi 4B o Raspberry 3B+)

- WM1302 Pi Hat para Raspberry Pi

- Adaptador de Alimentación para Raspberry Pi

- Una antena LoRa®

- Una tarjeta SD de 8G o mayor y un lector de tarjetas

- Un cable USB Type C si usas el Módulo Gateway LoRaWAN® WM1302 versión USB

#### Software Requerido

- [Imagen más reciente de Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems/): Se recomienda Raspberry Pi OS Lite

- [Balena Etcher](https://www.balena.io/etcher/): Para grabar la imagen de Raspberry Pi OS en la tarjeta SD

- [putty](https://www.putty.org/): Para conectarse a Raspberry Pi vía SSH en Windows

<br />

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Version" label="Versión SPI WM1302">

#### Paso1. Montaje del WM1302 Raspberry Pi Hat e instalación del módulo WM1302

Apaga primero la Raspberry Pi, inserta el módulo WM1302 en el Pi Hat como se muestra en la siguiente imagen y atorníllalo.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>


#### Paso2. Habilitar las interfaces I2C y SPI de Raspbian

El módulo WM1302 se comunica con Raspberry Pi a través de las interfaces SPI e I2C. Pero estas dos interfaces no están habilitadas por defecto en Raspbian, por lo que el desarrollador necesita habilitarlas antes de usar WM1302. Aquí, introducimos una forma de línea de comandos para habilitar las interfaces SPI e I2C.

Primero, inicia sesión en Raspberry Pi vía SSH o usando un monitor (no uses la consola serie ya que el módulo GPS en el Pi Hat toma control de los pines UART de hardware del Pi), luego escribe `sudo raspi-config` en la línea de comandos para abrir la Herramienta de Configuración de Software de Raspberry Pi:

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. Selecciona `Interface Options`

2. Selecciona `SPI`, luego selecciona `Yes` para habilitarlo

3. Selecciona `I2C`, luego selecciona `Yes` para habilitarlo

4. Selecciona `Serial Port`, luego selecciona `No` para "Would you like a login shell..." y selecciona `Yes` para "Would you like the serial port hardware..."

5. Después de esto, por favor reinicia Raspberry Pi para asegurar que estas configuraciones funcionen.

#### Paso3. Obtener y compilar el código fuente SX1302

Ahora instalemos `git` y descarguemos `sx1302_hal` (biblioteca y programas para SX1302 LoRa Gateway) desde github:

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Muévete a la carpeta `sx1302_hal` y compila todo:

```shell
cd ~/sx1302_hal
make
```

#### Paso4. Ejecutar el reenviador de paquetes Semtech SX1302

Copia `reset_lgw.sh` a la carpeta `packet_forwarder`, y modifica el `reset pin` para SX1302 y SX1261 en el script `reset_lgw.sh` con el editor de texto `nano`:

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder
nano tools/reset_lgw.sh
```

Verás el `reset pin` por defecto como sigue:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Modifica el `SX1302_RESET_PIN`, `SX1302_POWER_EN_PIN` y `SX1261_RESET_PIN` como sigue:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Guarda estos cambios presionando `CTRL + x`, seguido de `y` y `Enter` para cerrar el editor de texto.

<br />

También puedes consultar el script completo a continuación:

<details>
<summary>reset_lgw.sh</summary>

```shell
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0

```
</details>

<br />

Elige tu Servidor de Red LoRaWAN preferido `server_address` y el EUI del gateway `gateway_ID` en el correspondiente `global_conf.json.sx1250.xxxxx` basado en el módulo que estés usando, y modifica el `up/down port` a `1700`. Luego ejecuta el siguiente código para iniciar el concentrador:


```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

</TabItem>
<TabItem value="WM1302 USB Version" label="Versión USB WM1302">

#### Paso1. Montaje del WM1302 Raspberry Pi Hat e instalación del módulo WM1302

Apaga primero la Raspberry Pi, inserta el módulo WM1302 en el Pi Hat como se muestra en la siguiente imagen y atorníllalo. Conecta su puerto Type C a uno de los puertos USB de Raspberry Pi con un cable USB Type C.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### Paso2. Habilitar las interfaces I2C y SPI de Raspbian

El módulo WM1302 se comunica con Raspberry Pi con SPI e I2C. Pero estas dos interfaces no están habilitadas por defecto en Raspbian, por lo que el desarrollador necesita habilitarlas antes de usar WM1302. Aquí, introducimos una forma de línea de comandos para habilitar las interfaces SPI e I2C.

Primero, inicia sesión en Raspberry Pi vía SSH o usando un monitor (no uses la consola serie ya que el módulo GPS en el Pi Hat toma control de los pines UART de hardware del Pi), luego escribe `sudo raspi-config` en la línea de comandos para abrir la Herramienta de Configuración de Software de Raspberry Pi:


```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. Selecciona `Interface Options`

2. Selecciona `SPI`, luego selecciona `Yes` para habilitarlo

3. Selecciona `I2C`, luego selecciona `Yes` para habilitarlo

4. Selecciona `Serial Port`, luego selecciona `No` para "Would you like a login shell..." y selecciona `Yes` para "Would you like the serial port hardware..."

5. Después de esto, por favor reinicia la Raspberry Pi para asegurar que estas configuraciones funcionen.

#### Paso 3. Obtener y compilar el código fuente de SX1302

Ahora instalemos `git` y descarguemos `sx1302_hal` (biblioteca y programas para SX1302 LoRa Gateway) desde github:

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Ve a la carpeta `sx1302_hal` y compila todo:

```shell
cd ~/sx1302_hal
make
```

#### Paso 4. Ejecutar el reenviador de paquetes Semtech SX1302

Para obtener el puerto USB específico, sigue los pasos a continuación:

```shell
lsusb
```

En mi caso, el ID de `Product` de nuestro módulo WM1302 es `8047`

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ lsusb
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 2109:3431 VIA Labs, Inc. Hub
Bus 001 Device 003: ID 2886:8047 Seeed Technology Co., Ltd. WM1302 USB Port  
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
```

Luego obtén el dispositivo USB con el `Product ID` `8047`.

```shell
sudo dmesg | grep 8047
sudo modprobe cdc_acm
```

En mi caso, el número de puerto USB es `1-1.3`.

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 8047
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
```

Ahora podemos obtener el puerto del dispositivo usando:

```shell
sudo dmesg | grep 1-1.3
```

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 1-1.3
[  215.364299] usb 1-1.3: new full-speed USB device number 3 using xhci_hcd
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
[  215.459643] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  215.459657] usb 1-1.3: Product: WM1302 USB Port  
[  215.459669] usb 1-1.3: Manufacturer: SEEED
[  215.459680] usb 1-1.3: SerialNumber: 4E100336FF7F
[  215.543301] cdc_acm 1-1.3:1.0: ttyACM0: USB ACM device
```

Así que en mi caso, el dispositivo USB es `ttyACM0`. La configuración predeterminada del dispositivo USB en `global_conf.json.sx1250.xxxxx.USB` es `ttyACM0`, por lo que no necesitamos hacer nada aquí.

Si tu dispositivo usa otro puerto USB, podemos usar el comando `sed` `sed -i 's/search_string/replacement_string/g' filename` para modificar el archivo de configuración `global_conf.json.sx1250.xxxxx.USB` para la región correspondiente.

<br />

Elige tu servidor de red LoRaWAN preferido `server_address` y el EUI del gateway `gateway_ID` en el `global_conf.json.sx1250.xxxxx` correspondiente basado en el módulo que estés usando, y modifica el `up/down port` a `1700`. Luego ejecuta el siguiente código para iniciar el concentrador:

```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

</TabItem>
</Tabs>

<!-- Code END -->

---

Ahora, el reenviador de paquetes puede ejecutarse correctamente. Para reenviar exitosamente los datos a nuestro Servidor de Red LoRaWAN (por ejemplo, TTN o ChirpStack), aún necesitamos hacer algunas configuraciones en el lado del servidor.

Para hacer eso, necesitamos registrar primero el Gateway de Raspberry Pi que acabamos de construir en nuestro Servidor de Red LoRa. Tomando [TTN](https://www.thethingsindustries.com/docs/getting-started/) como ejemplo, inicia sesión en la [consola TTN](https://eu1.cloud.thethings.network/console), haz clic en el botón `Gateways` en el panel del lado izquierdo y haz clic en `Register gateway`. Completa el `Gateway EUI`, `Gateway Server address` y `Frequency plan`, deja las otras opciones con la configuración predeterminada.

- **Gateway EUI:** Un identificador único de 64 bits para tu gateway.

- **Gateway Server address:** La URL del clúster en el que está desplegado el servidor de red (`eu1.cloud.thethings.network` por ejemplo).

- **Frequency plan:** Configura el plan de frecuencia correspondiente basado en tu región. `Europe 863-870 MHz (SF9 for RX2-recommended)` para Europa, `United States 902-928 MHz, FSB 2` para EE.UU.

<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>

<br />

Después de registrar exitosamente el gateway, presiona `CTRL + c` para detener `lora_pkt_fwd`, luego edita y verifica el archivo de configuración `global_conf.json.sx1250.xxxx` para asegurar que las entradas `"gateway_ID"` y `"server_address"` coincidan exactamente con la configuración en LNS.

```json
    ...
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
    ...
```

Reinicia `lora_pkt_fwd` usando el comando `./lora_pkt_fwd -c global_conf.json.sx1250.xxxxx`, y deberías poder encontrar que tu Gateway de Raspberry Pi está conectado a TTN.

## Preguntas Frecuentes

<details>
<summary>¿Por qué mis dispositivos no pueden unirse al servidor de red incluso si todas las configuraciones son correctas?</summary>

<br />

Hemos observado que ciertos módulos (versión USB WM1302-US915) pueden fallar al transmitir paquetes de datos de enlace descendente correctamente debido a diferencias del hardware. Para solucionar este problema, por favor modifica el valor de la macro `TX_JIT_DELAY` (puedes encontrar esta macro en `/sx1302_hal/packet_forwarder/src/jitqueue.c`) de 40000 a 120000 y recompila el sx1302_hal.


</details>

## Fuentes

- [Hoja de datos Semtech SX1302](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## Certificados

- [Certificado CE WM1302(USB)](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [Certificado CE WM1302(SPI)](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## Soporte Técnico y Discusión de Productos

Por favor envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
