---
title: LTE Cat 1 Pi HAT
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/LTE_Cat_1_Pi_HAT/
slug: /es/LTE_Cat_1_Pi_HAT
last_update:
  date: 01/11/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

El LTE CAT.1 Pi HAT de Seeed es un módem de extensión celular de código abierto para Raspberry Pi,
basado en la serie u-blox LARA-R2xx. Es compatible con Raspberry Pi 1 Model B+ y versiones posteriores.

El LTE CAT.1 Pi HAT está diseñado para redes LTE Categoría 1 y con respaldo 2G (solo versión EU). Incorpora protocolos comunes, como TCP/UDP, HTTP.

El LTE CAT.1 Pi HAT soporta interfaces UART y USB. Por UART, Raspberry Pi se comunica con LTE CAT.1 Pi HAT vía comando AT sin ningún controlador especial. Es muy adecuado para construir prototipos rápidamente.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

|Versión|Enlaces|
|--|--|
|Europa<br/>|<p style={{}}><a href="https://www.seeedstudio.com/TE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|USA-AT&T<br/> |<p style={{}}><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|USA-VZW<br />|<p style={{}}><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|

## Versión

| Versión del Producto         | Cambios | Fecha de Lanzamiento |
|------------------------------|---------|----------------------|
| LTE Cat 1 Pi HAT(USA-AT&T)   | Inicial | Dic 2017             |
| LTE Cat 1 Pi HAT(USA-VZW)    | Inicial | Dic 2017             |
| LTE Cat 1 Pi HAT(Europe)     | Inicial | Dic 2017             |

## Especificaciones

- Compatible con Raspberry Pi 1 Model
B+ y versiones posteriores

- LTE CAT.1 y soporte de respaldo 2G (solo
versión EU)

- Interfaz UART y USB para
comunicación

- Soporte para conector Grove I2C y Digital

- Protocolos en módulo celular

- Pila TCP/UDP integrada

- HTTP, FTP, SSL integrados

- Pila dual IPV4/IPV6

- Comando AT estándar 3GPP TS 27.007 [8], TS 27.005 [9]

## Aplicaciones

- Puerta de enlace IoT
- Registrador de datos
- Máquina expendedora
- POS
- Dispositivos de hogar inteligente
- Robot
- Publicidad
- Otros escenarios que necesiten redes celulares

## Descripción General del Hardware

**Interfaces**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)

- **LTE CAT.1**: Módulo LTE CAT.1 de la serie U-blox LARA-R2xx, consulte la [página del producto de la serie u-blox LARA-R2](https://www.u-blox.com/en/product/lara-r2-series) para más información.
- **Puerto Grove**: 2 Puertos Grove I2C/Digital, conectados a SDA_RPI, SCL_RPI, puede usarse como puerto I2C o GPIO.
- **Conmutador**: Controla el voltaje del puerto Grove como 5V o 3.3V
- **Interfaz USB**: Puede usarse para alimentar el LTE Cat.1 Pi HAT y raspberry juntos, y también como puerto de depuración. Consulte FAQ Q1 sobre cómo usar como puerto de depuración.
- **Soporte de Batería**: MP2617 se usa para la gestión de energía de la batería. Si la batería no está conectada, el LED CHG parpadeará a una frecuencia de 6HZ. Estará apagado durante la carga y encendido cuando termine la carga. El conector es estándar JST2.0.
- **Botón de reinicio Lara-R2XX**: Reinicia el módulo Lara-R2xx.
- **Botón de encendido Lara-R2XX**: Presione 2 segundos para encender el módulo Lara-R2xx.
- **Antena**: Incluye 2 antenas, una es principal y la otra es div. La antena principal se usa tanto para enviar como para recibir señales. Debe estar conectada. La antena div se usa solo para recepción y para mejorar la sensibilidad del receptor. Es opcional.
- **Rpi 40 pines**: Consulte el diagrama de pines.
- **Ranura para tarjeta SIM**: Siga la dirección de la serigrafía para insertar la tarjeta SIM LTE.

:::caution
    Para la batería, sugerimos batería Li-ion de 3.7V y conectar a JST2.0. Especialmente para Lara-R211(Europa) Pi HAT, incluye la función GSM con alto consumo de energía. Si no hay señal LTE alrededor, el LTE CAT.1 Pi HAT también consume mucha energía. Por lo tanto, recomendamos encarecidamente conectar la batería.
:::

**Diagrama de Pines**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg .tg-us36{border-color:inherit;vertical-align:top}\n" }} />

<table className="tg">
    <tbody><tr>
        <th className="tg-us36">Pin Usado</th>
        <th className="tg-us36">Python (BCM)</th>
        <th className="tg-us36">WiringPi GPIO</th>
        <th className="tg-us36">Nombre</th>
        <th className="tg-us36" colSpan={2}>Número de Pin P1</th>
        <th className="tg-us36">Nombre</th>
        <th className="tg-us36">WiringPi GPIO</th>
        <th className="tg-us36">Python (BCM)</th>
        <th className="tg-us36">Pin Usado</th>
      </tr>
      <tr>
        <td className="tg-us36">3V3_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Alimentación DC 3.3v</td>
        <td className="tg-us36">1</td>
        <td className="tg-us36">2</td>
        <td className="tg-us36">Alimentación DC 5v</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">5V_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">SDA_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36">8</td>
        <td className="tg-us36">GPIO02 (SDA1, I2C)</td>
        <td className="tg-us36">3</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">Alimentación DC 5v</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">5V_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">SCL_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36">9</td>
        <td className="tg-us36">GPIO03 (SCL1, I2C)</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">Tierra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">7</td>
        <td className="tg-us36">GPIO04</td>
        <td className="tg-us36">7</td>
        <td className="tg-us36">8</td>
        <td className="tg-us36">GPIO14 (TXD0)</td>
        <td className="tg-us36">15</td>
        <td className="tg-us36" />
        <td className="tg-us36">TX_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Tierra</td>
        <td className="tg-us36">9</td>
        <td className="tg-us36">10</td>
        <td className="tg-us36">GPIO15 (RXD0)</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36" />
        <td className="tg-us36">RX_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">RTS_RPI</td>
        <td className="tg-us36">17</td>
        <td className="tg-us36">0</td>
        <td className="tg-us36">GPIO17</td>
        <td className="tg-us36">11</td>
        <td className="tg-us36">12</td>
        <td className="tg-us36">GPIO18</td>
        <td className="tg-us36">1</td>
        <td className="tg-us36">18</td>
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">2</td>
        <td className="tg-us36">GPIO27</td>
        <td className="tg-us36">13</td>
        <td className="tg-us36">14</td>
        <td className="tg-us36">Tierra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">3</td>
        <td className="tg-us36">GPIO22</td>
        <td className="tg-us36">15</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36">GPIO23</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">3V3_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Alimentación DC 3.3v</td>
        <td className="tg-us36">17</td>
        <td className="tg-us36">18</td>
        <td className="tg-us36">GPIO24</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36" />
        <td className="tg-us36">12</td>
        <td className="tg-us36">GPIO10 (SPI0_MOSI)</td>
        <td className="tg-us36">19</td>
        <td className="tg-us36">20</td>
        <td className="tg-us36">Tierra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36" />
        <td className="tg-us36">13</td>
        <td className="tg-us36">GPIO09 (SPI0_MISO)</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">GPIO25 </td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36" />
        <td className="tg-us36">14</td>
        <td className="tg-us36">GPIO11 (SPI0 SCLK)</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">GPIO08 (SPI0_CS0)</td>
        <td className="tg-us36">10</td>
        <td className="tg-us36" />
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Tierra</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">GPIO07 (SPI0_CS1)</td>
        <td className="tg-us36">11</td>
        <td className="tg-us36" />
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36" />
        <td className="tg-us36">30</td>
        <td className="tg-us36">Reservado</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">28</td>
        <td className="tg-us36">Reservado</td>
        <td className="tg-us36">31</td>
        <td className="tg-us36" />
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LARA_PWR</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">GPIO05</td>
        <td className="tg-us36">29</td>
        <td className="tg-us36">30</td>
        <td className="tg-us36">Tierra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">LARA_RST</td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">GPIO06</td>
        <td className="tg-us36">31</td>
        <td className="tg-us36">32</td>
        <td className="tg-us36">GPIO12</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">12</td>
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36">13</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">GPIO13</td>
        <td className="tg-us36">33</td>
        <td className="tg-us36">34</td>
        <td className="tg-us36">Tierra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36">19</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">GPIO19(SPI1 MISO)</td>
        <td className="tg-us36">35</td>
        <td className="tg-us36">36</td>
        <td className="tg-us36">GPIO16(SPI1 CS0)</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36">CTS_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">LIBRE</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">GPIO26</td>
        <td className="tg-us36">37</td>
        <td className="tg-us36">38</td>
        <td className="tg-us36">GPIO20(SPI1 MOSI)</td>
        <td className="tg-us36">28</td>
        <td className="tg-us36">20</td>
        <td className="tg-us36">LIBRE</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Tierra</td>
        <td className="tg-us36">39</td>
        <td className="tg-us36">40</td>
        <td className="tg-us36">GPIO21(SPI1 SCLK)</td>
        <td className="tg-us36">29</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">LIBRE</td>
      </tr>
    </tbody></table>

</div>

**Dimensiones**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=eeee1715-69fe-4e5e-a643-15a3c1f3510d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

**Versiones**

Ahora hemos fabricado tres versiones del LTE Cat 1 Pi HAT. Además de soportar diferentes redes, son casi iguales. Y puedes prestar atención a que solo la versión europea soporta red 2G.

| Versión  | Módulo    | Red     |
|----------|-----------|---------|
| Europa   | LARA-R211 | 2G/4G   |
| USA-AT&T | LARA-R203 | 4G      |
| USA-VZW  | LARA-R204 | 4G      |

## Comenzando

### Hardware

:::note
    Usamos la Raspberry Pi3 con 2018-04-18 [RASPBIAN STRETCH WITH DESKTOP](https://www.raspberrypi.org/downloads/raspbian/) para la demostración a continuación.
:::

- Paso 1. Apila el LTE Cat 1 Pi HAT encima de la Raspberry y conecta las 2 antenas.

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

- Paso 2. Conecta también el ratón, teclado y monitor.
- Paso 3. Enciende la Raspberry Pi.

### Software

- Paso 1. Usa dtoverlay=pi3-disable-bt para habilitar el UART0 de Raspberry Pi3/Pi4.

```
sudo nano /boot/config.txt
```

Luego añade `dtoverlay=pi3-disable-bt` y `enable_uart=1` al final del archivo config.txt. Debería verse así.

```bash
[all]
#dtoverlay=vc4-fkms-v3d
dtoverlay=pi3-disable-bt
enable_uart=1
```

- Paso 2. Deshabilitar el servicio del sistema para usar el UART0.

```
sudo systemctl disable hciuart 
```

:::note
    Pi3-disable-bt desactiva el dispositivo Bluetooth y restaura UART0/ttyAMA0 a los GPIOs 14 y 15. También es necesario desactivar el servicio del sistema que inicializa el módem para que no use la UART: sudo systemctl disable hciuart.
:::

- Paso 3. Elimina console=serial0,115200 en cmdline.txt.

```
sudo nano /boot/cmdline.txt
```

Luego elimina console=serial0,115200 de la cadena.

- Paso 4. Reinicia la Raspberry Pi3/Pi4

```
sudo reboot
```

- Paso 5. Ejecuta los siguientes comandos para ejecutar la demostración

```
cd ~
git clone https://github.com/Seeed-Studio/ublox_lara_r2_pi_hat.git
cd ublox_lara_r2_pi_hat
sudo python setup.py install
cd test
sudo python test01.py
```

- Paso 6. Aquí está la salida de la terminal.

```
pi@raspberrypi:~/Desktop/ublox_lara_r2_pi_hat/examples $ sudo python test01.py
40-pin GPIO header detected
Enabling CTS0 and RTS0 on GPIOs 16 and 17
rts cts on
waking up...
module name:  LARA-R211
RSSI:  3
```

## FAQ

**P1: ¿Podemos comunicarnos con LTE Cat 1 Pi HAT directamente con PC?**

R1: Sí, hay 2 formas. Una es USB y la otra es puerto UART.

- Para USB, por favor use el cable USB para conectar el Pi HAT con PC directamente. Luego descargue e instale el [controlador USB de Windows para u-blox Cellular, v2.0](https://www.u-blox.com/sites/default/files/ubloxCell_usbcdc_windows_3264_v2.0.0.0.exe.zip). Los COM3 y COM4 se usan para comandos AT en el administrador de dispositivos. Podemos usar cualquier herramienta de monitor COM serie para ejecutar comandos AT o usar
el software de evaluación [m-center para Windows, versión 1.11.0](https://www.u-blox.com/sites/default/files/products/tools/m-center-01.11.00.exe) para windows.

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

- Para el puerto UART, por favor use el [adaptador usb a serie](https://www.seeedstudio.com/UartSBee-V5-p-1752.html), siga la conexión de abajo y use la velocidad de baudios como 115200. Podemos usar cualquier herramienta de monitor COM serie para ejecutar comandos AT.

|   Adaptador USB a UART | LTE Cat1 Pi HAT              |
|-----------------------|------------------------------|
| GND                   | Pin6-GND                     |
| TX                    | Pin8-TX_RPI                  |
| RX                    | Pin10-RX_RPI                 |
| NA                    | Pin11-RTS_RPI Conectar a Pin9-GND |

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/UART.png)

:::caution
    Por favor, conecta el RTS_RPI a GND como se marca en rojo en la imagen de arriba si usamos el puerto UART para comunicación.
:::
**P2: ¿Tienes una lista de comandos AT?**

R2: Aquí está [u-blox-CEL_ATCommands](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf).

**P3: ¿Cuáles son las diferencias entre el Lara-R203/204/211?**

R3: Por favor consulta la [página de producto de la serie u-blox LARA-R2](https://www.u-blox.com/en/product/lara-r2-series).

**P4: ¿Cómo registrarse en la red AT&T para LARA-203?**

R4: Por favor ejecuta los siguientes comandos.

```
AT+COPS=2
AT+UMNOCONF=2
AT+COPS=0
```

Puedes probar el siguiente comando para verificar la conexión de red AT&T.

```
AT+UPSD=0,1,"AT&T"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

**P5: ¿Cómo registrarse en la red Verizon para LARA-204?**

R5: Por favor ejecute los siguientes comandos.

```
AT+COPS=2
AT+UMNOCONF=3
AT+COPS=0
```

Puedes probar el siguiente comando para verificar la conexión de red de Verizon.

```
AT+UPSD=0,1,"vzwinternet"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

## Recursos

- **[PDF]** [Esquemático del LTE Cat.1 Pi HAT](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LTE%20CAT.1%20Pi%20HAT%20v1.0.pdf)
- **[PDF]** [u-blox-CEL_ATCommands](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf)
- **[PDF]** [Hoja de Datos LARA-R2](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_DataSheet_(UBX-16005783).pdf)
- **[PDF]** [Manual de Integración del Sistema LARA-R2](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_SysIntegrManual_(UBX-16010573).pdf)
- **[PDF]** [Nota de Aplicación de Ejemplos de Comandos AT](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/AT-CommandsExamples_AppNote_(UBX-13001820).pdf)

Tenemos esta parte disponible en [geppetto](https://geppetto.seeedstudio.com/), diseño electrónico modular fácil con Seeed y Geppeto. Constrúyelo Ahora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## Proyectos

**Cerradura Inteligente con Reconocimiento Facial con LTE Pi HAT**: El reconocimiento facial se está utilizando cada vez más ampliamente, podemos usarlo para hacer una cerradura inteligente.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/face-recognization-smart-lock-with-lte-pi-hat-abcec9/embed' width='350'></iframe>

## Soporte Técnico y Discusión del Producto

si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
