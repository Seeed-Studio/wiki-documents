---
description: Eagleye_530s
title: Eagleye 530s
keywords:
- Eagleye_530s
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Eagleye_530s
last_update:
  date: 01/20/2023
  author: Matthew
---

![enter image description here](https://files.seeedstudio.com/wiki/Eagleye_530s/img/eagleye_530s.JPG)

Seeed es un diseñador experimentado de kits de desarrollo para plataformas de tecnología IoT. Nuestro último kit de desarrollo—el Eagleye 530s,--está diseñado para ayudarte a comenzar a desarrollar productos y servicios para la [plataforma IoT Samsung ARTIK™](https://www.artik.io/).

El Eagleye 530s es un kit de desarrollo de alto rendimiento, pre-probado, rentable y listo para producción que incorpora el Samsung ARTIK™ 530s--un sistema-en-módulo (SoM) de 1GB-- en una placa personalizada del tamaño de una tarjeta de crédito. Para más información sobre ARTIK™ 530s, por favor haz clic aquí.

¿Qué es Samsung ARTIK™? Samsung ARTIK™ es una plataforma IoT pre-integrada que consiste en sistemas-en-módulos (SoMs) de grado empresarial, servicios en la nube, y seguridad de extremo a extremo para el diseño y desarrollo de soluciones IoT robustas. Los desarrolladores frecuentemente subestiman la importancia de la seguridad al diseñar y construir productos IoT. Los servicios de seguridad integrados de ARTIK para SoMs y la nube hacen que sea más fácil para ti hacer que tus productos sean seguros.

Como se mencionó anteriormente, el Eagleye530s está basado en el SoM ARTIK 530s de 1GB, que es un Quad Core Cortex® A9 ejecutándose @ 1.2 GHz con memoria Flash de 4 GB, características de seguridad basadas en hardware, y SO Linux (Ubuntu). El Eagleye 530s también proporciona un GPIO de 40 pines e interfaz de accesorios para Micro SD, Ethernet 10/100/1000, Wi-Fi 802.11 a/b/g/n, Bluetooth BLE 4.2 802.15.4, y ZigBee/Thread. También soporta HDMI completo, interfaces de cámara MIPI, video, y medios de audio.

Dado que el Eagleye 530s es compatible en pines con muchos accesorios de hardware "maker", permite a los desarrolladores de Samsung ARTIK™ acceder fácilmente al extenso mercado de accesorios "maker" y crear prototipos y construir con sensores disponibles comercialmente (ej. [GrovePi+](https://www.seeedstudio.com/GrovePi%2B-p-2241.html),[sensores Grove](https://www.seeedstudio.com/grove.html)), reconocimiento de voz (ej. [ReSpeaker 2-mic array](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) y [ReSpeaker 4-mic array](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)), relés, GPS, conectividad celular, y más, proporcionando muchas opciones para desarrolladores empresariales que crean pruebas de concepto (PoC) ricas en características o productos listos para producción.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4IR768d8Ins" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Eagleye-530s-p-3035.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Versión

| Versión del Producto | Cambios | Fecha de Lanzamiento |
|---------------------|---------|----------------------|
| Eagleye 530s Rev1.0 | Inicial | Feb 28 2018          |

## Características

- Impulsado por la plataforma Samsung ARTIK™ IoT.
- Incorpora ARTIK 530s 1GB SoM, un Quad Core Cortex® A9 funcionando a 1.2 GHz.
- Incluye interfaz de 40 pines GPIO y accesorios.
- Soporte para Micro SD, Ethernet 10/100/1000, Wi-Fi 802.11 a/b/g/n, Bluetooth BLE 4.2 802.15.4, y ZigBee/Thread.
- Soporta HDMI completo, interfaz de cámara MIPI, video y medios de audio.

## Especificación

| Parámetro        |                        | Valor/Rango                                                               |
|------------------|------------------------|---------------------------------------------------------------------------|
| Procesador       |                        |                                                                           |
|                  | CPU                    | Quad core ARM® Cortex®-A9@1.2GHz                                          |
|                  | GPU                    | Acelerador de gráficos 3D                                                 |
| Medios           |                        |                                                                           |
|                  | I/F de Cámara          | MIPI CSI de 4 carriles hasta 5M (1920x1080@30fps)                         |
|                  | Pantalla               | MIPI DSI de 4 carriles y HDMI1.4a (1920x1080p@60fps) o LVDS (1280x720p@60fps) |
|                  | Audio                  | Dos entradas/salidas de audio I2S                                        |
| Memoria          |                        |                                                                           |
|                  | DRAM                   | 512MB/1GB DDR3                                                            |
|                  | FLASH                  | 4GB eMMC v4.5                                                             |
| Seguridad        |                        |                                                                           |
|                  | Elemento Seguro        | Autenticación punto a punto segura y transferencia de datos              |
| Radio            |                        |                                                                           |
|                  | WLAN                   | IEEE 802.11a/b/g/n, banda dual SISO                                      |
|                  | Bluetooth®             | 4.2 (BLE+Classic)                                                         |
|                  | 802.15.4               | ZigBee®/Thread                                                            |
| Gestión de Energía |                      |                                                                           |
|                  | PMIC                   | Proporciona toda la energía del Módulo ARTIK 530 usando bucks y LDO's integrados |
| Interfaces       |                        |                                                                           |
|                  | Ethernet               | 10/100/1000Base-T MAC (PHY externo requerido)                            |
|                  | E/S Analógica y Digital | GPIO, UART, I2C, SPI, USB Host, USB OTG, HSIC, ADC, PWM, I2S, JTAG        |

## Descripción General del Hardware

**Diagrama de Bloques**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/block_digram.png)

**Interfaces**

Las siguientes figuras muestran la vista general de la PARTE SUPERIOR e INFERIOR del Eagleye 530s.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/eagleye_530s_front.JPG)

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/eagleye_530s_back.JPG)

- <font face size={5} font color="ff0000">ⓐ</font> <strong>Alimentación DC:</strong> Fuente de alimentación DC de 5V.

- <font face size={5} font color="ff0000">ⓑ</font><strong> Interfaz USB Host 2.0</strong>: tiene dos interfaces USB 2.0.

- <font face size={5} font color="ff0000">ⓒ</font> <strong>Ethernet:</strong> La interfaz Ethernet está basada en 802.3az-2010 cumpliendo con el estándar Energy Efficient Ethernet (EEE). La velocidad teórica máxima de la interfaz es 1000Mbps.

- <font face size={5} font color="ff0000">ⓓ</font> <strong>Conector de Auriculares:</strong> tiene una interfaz de conector de auriculares de 4 pines que soporta audio estéreo

- <font face size={5} font color="ff0000">ⓔ</font> <strong>Interruptor de Arranque:</strong> Cuando se selecciona 'eMMc 1st Boot' como opción de arranque, el sistema primero intentará arrancar desde eMMc, si esto falla el sistema buscará una tarjeta SD para arrancar desde ella. Si el arranque desde la tarjeta SD también falla, el sistema intenta arrancar desde USB. Cuando se elige la opción de arranque desde tarjeta SD, el sistema comienza arrancando desde SD, y si esto falla continuará intentando un arranque USB. Cuando se selecciona USB como el mecanismo de arranque de elección, solo se intentará un arranque USB.

| SW402 | eMMc 1st Boot | SD Card 1st Boot | USB 1st Boot |
|-------|---------------|------------------|--------------|
| 1     | Off           | Off              | On           |
| 2     | Off           | Off              | On           |
| 3     | X             | X                | X            |
| 4     | Off           | On               | X            |

- <font face size={5} font color="ff0000">ⓕ</font> <strong>HDMI:</strong> tiene un conector HDMI 1.4a. Se admiten los siguientes formatos de video:
  - 480p/480i @59.94Hz/60Hz, 576p/576i@50Hz
  - 720p/720i @50Hz/59.94Hz/60Hz
  - 1080p/1080i @50Hz/59.94Hz/60Hz

- <font face size={5} font color="ff0000">ⓖ</font> <strong>USB OTG:</strong> tiene un USB OTG.

- <font face size={5} font color="ff0000">ⓗ</font> <strong>USB UART:</strong> tiene un USB UART.

- <font face size={5} font color="ff0000">ⓘ</font> <strong>Botón de Usuario S4:</strong> interruptor denominado S4, mapeado al GPIO 54.

- <font face size={5} font color="ff0000">ⓚ</font> <strong>LED de Encendido:</strong> El LED se encenderá cuando la placa se encienda.

- <font face size={5} font color="ff0000">ⓛ</font> <strong>LED de Alimentación:</strong> El LED se encenderá cuando la placa reciba alimentación.

- <font face size={5} font color="ff0000">ⓜ</font> <strong>LED de Tarjeta SD:</strong> El LED se encenderá cuando la SD se conecte a la placa.

- <font face size={5} font color="ff0000">ⓝ</font> <strong>Botón de Usuario S3:</strong> interruptor denominado S3, mapeado al GPIO 50.

- <font face size={5} font color="ff0000">ⓞ</font> <strong>MIPI CSI:</strong> La interfaz MIPI CSI puede tener una resolución estática de 5M píxeles o una resolución dinámica para captura de video de 1080P.

- <font face size={5} font color="ff0000">ⓟ</font> <strong>ANT(802.11):</strong> Si se requiere funcionalidad 802.11 o Bluetooth®, debe conectarse la antena que se incluye como parte del Eagleye 530s.

- <font face size={5} font color="ff0000">ⓠ</font> <strong>Reset:</strong> reinicio de la placa.

- <font face size={5} font color="ff0000">ⓡ</font> <strong>Alimentación:</strong> Una vez que el interruptor de alimentación esté encendido, presione el botón de encendido (S1), durante aproximadamente 1 segundo.

- <font face size={5} font color="ff0000">ⓢ</font> <strong>ANT(802.11):</strong> Si se requiere funcionalidad 802.11 o Bluetooth®, debe conectarse la antena que se incluye como parte del Eagleye 530s.

- <font face size={5} font color="ff0000">ⓣ</font> <strong>Pines de Usuario:</strong> Para convertirlos en dispositivos versátiles de control y monitoreo, el Eagleye 530s proporciona muchos pines de señal programables. Estos pines manejan directamente tareas como controlar relés, generar voltajes analógicos y monitorear sensores analógicos, así como tareas complejas que involucran comunicación paralela y serial con dispositivos de control y sensores más sofisticados.

- <font face size={5} font color="ff0000">ⓤ</font> <strong>ANT(Zigbee):</strong> Si se requiere funcionalidad Zigbee, debe conectarse la antena que se incluye como parte del Eagleye 530s.

- <font face size={5} font color="ff0000">ⓥ</font> <strong>Interruptor de Alimentación:</strong> A través de la selección de los Jumpers JP1 y JP2, se puede seleccionar la fuente de alimentación. Cuando se proporciona alimentación desde un Adaptador DC-5V, se colocarán los jumpers JP2 y se conectará la posición 3-4.
Cuando los jumpers JP1 están en la posición 1-2, la alimentación se proporciona desde el usb-uart. Cuando el Eagleye 530s se usa con un adaptador de alimentación externo, asegúrese de usar un adaptador de 5V-2.5A con un conector de 2.1x5.5mm.

:::warning
    ¡NUNCA conecte ambos al mismo tiempo!
:::

- <font face size={5} font color="ff0000">ⓦ</font> <strong>Ranura para tarjeta SD:</strong> tiene una interfaz SD-CARD que admite SD3.0.

- <font face size={5} font color="ff0000">ⓧ</font> <strong>JTAG:</strong> tiene una interfaz JTAG.

**Dibujo Mecánico**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/MECHANICAL1.png)
![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/MECHANICAL2.png)
![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/MECHANICAL5.png)
![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/MECHANICAL4.png)

:::note
    Todas las dimensiones del Dibujo Mecánico están en [mm].
:::

## Ideas de Aplicación

- DIY
- IoT y Hogar Inteligente
- Robot

## Primeros Pasos

**Demo de Desempaquetado**

Esta sección describirá cómo comenzar a trabajar con tu Entorno de Desarrollo Eagleye 530s configurando una conexión serie en tu PC de desarrollo e iniciando el Entorno de Desarrollo Eagleye 530s.

**Hardware**

- Paso 1. Configura el interruptor de alimentación (nombrado como número 21 en la descripción general del hardware) a USB.
- Paso 2. Conecta el cable USB desde la PC al USB UART (nombrado como número 8 en la descripción general del hardware).
- Paso 3. Presiona el botón de Encendido por más de 1 segundo y veremos que los LEDs Verde/Rojo (consulta el Número 10/11 en la descripción general del hardware) se encienden.

  ![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/usb_connection.jpg)

**Software**

Configurar una conexión con el Módulo Eagleye 530s se puede hacer de manera cableada o inalámbrica. Aquí elegimos instalar PuTTY, una consola serie gratuita. El software se puede descargar desde [http://www.putty.org/](http://www.putty.org/). Una vez descargado, sigue los siguientes pasos:

- Paso 1. Abre el administrador de dispositivos en el panel de control.
- Paso 2. Cuando uses una PC, instala el controlador USB a Serie. El controlador se puede encontrar en la siguiente ubicación: [https://www.ftdichip.com/Drivers/CDM/CDM21218_Setup.zip](https://www.ftdichip.com/Drivers/CDM/CDM21218_Setup.zip). Para otros controladores, por favor visita [https://www.ftdichip.com/Drivers/D2XX.htm](https://www.ftdichip.com/Drivers/D2XX.htm).
- Paso 3. Verifica el número de puerto COM en tu PC cuando conectes el cable serie USB. En nuestro caso, el puerto COM asignado es COM9.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Com.png)

- Paso 4. Configura la configuración de PuTTY como sigue:
  - Configura la "Línea serie" como el número de puerto COM encontrado en el paso 3.
  - Configura la velocidad COM a "115200".
  - Configura el tipo de conexión a "Serie".
  - Guarda la sesión bajo Eagleye 530s.
- Paso 5. Selecciona tu sesión guardada y haz clic en el botón "Abrir".

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_setup.png)

- Paso 6. El nombre de usuario y la contraseña son root.
- Paso 7. Veremos la terminal como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_normal_boot.png)

**Jugar con los LEDs integrados**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/leds_buttons.jpg)

- Paso 1. Descarga [blink_led.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/blink_led.py) o copia el código de abajo y pégalo en blink_led.py.

```python
#!/usr/bin/python

import time
import sys

print "Blink an LED"
ledpin = 159 # Blink the blue led, please change to 43 for red led

#export GPIO pin by opening file and writing the pin number to it
pinctl = open("/sys/class/gpio/export", "wb", 0)
try:
    pinctl.write( str(ledpin))
    print "Exported pin", str(ledpin)
except:
    print "Pin ", str(ledpin), " has been exported"
pinctl.close()

#set GPIO pin to be digital output
filename = '/sys/class/gpio/gpio%d/direction' % ledpin
pinctldir = open(filename, "wb", 0)
try:
    pinctldir.write("out")
    print "Set pin ", str(ledpin), " as digital output"
except:
    print "Failed to set pin direction"
pinctldir.close()

#unexport GPIO pin when we are done
def exit_gpio():
    pinctl = open("/sys/class/gpio/unexport", "wb", 0)
    try:
        pinctl.write( str(ledpin))
        print "Unexported pin", str(ledpin)
    except:
        print "Pin ", str(ledpin), " has been unexported"
    pinctl.close()

#change GPIO pin value every 10 seconds
filename = '/sys/class/gpio/gpio%d/value' % ledpin
while True:
    try:
        pin = open(filename, "wb", 0)
        pin.write( str(1) )
        time.sleep(1)

        pin.write( str(0) )
        time.sleep(1)
        pin.close()
    except:
        exit_gpio()
        sys.exit(0)
```

- Paso 2. Ejecutar 'python blink_led.py'
- Paso 3. Veremos el LED parpadear.

**Jugar con los Botones integrados**

- Paso 1. Descargar [read_button.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/read_button.py) o copiar el código de abajo a read_button.py.

```python
#!/usr/bin/python

import time
import sys

print "Toggle a button"
buttonpin = 54 # Read S4 button, please change to 50 for S3 button

#export pin 8 by opening file and writing the pin number to it
pinctl = open("/sys/class/gpio/export", "wb", 0)
try:
    pinctl.write( str(buttonpin))
    print "Exported pin", str(buttonpin)
except:
    print "Pin ", str(buttonpin), " has been exported"
pinctl.close()

#set pin to be digital input
filename = '/sys/class/gpio/gpio%d/direction' % buttonpin
pinctldir = open(filename, "wb", 0)
try:
    pinctldir.write("in")
    print "Set pin ", str(buttonpin), " as digital input"
except:
    print "Failed to set pin direction"
pinctldir.close()

def exit_gpio():
    #unexport pin
    pinctl = open("/sys/class/gpio/unexport", "wb", 0)
    try:
        pinctl.write( str(buttonpin))
        print "Unexported pin", str(buttonpin)
    except:
        print "Pin ", str(buttonpin), " has been unexported"
    pinctl.close()

#pin value changes when the button is pressed
filename = '/sys/class/gpio/gpio%d/value' % buttonpin
while True:
    try:
        pin = open(filename, "rb", 0)
        print pin.read()
        time.sleep(1)
        pin.close()
    except KeyboardInterrupt:
        exit_gpio()
        sys.exit(0)
```

- Paso 2. Ejecutar 'python read_button.py'
- Paso 3. Veremos la información del terminal como se muestra a continuación.

```
[root@artik ~]# python read_button.py
Toggle a button
Pin  54  has been exported
Set pin  54  as digital input
1
1
0
0
```

**Redes Ethernet y Wi-Fi**

Las siguientes instrucciones explican cómo configurar una red de área local (LAN) cableada o inalámbrica. El puerto LAN Ethernet (cableado) está siempre disponible. Un circuito LAN inalámbrico (WLAN) está disponible por separado, y puede configurarse mediante Connection Manager.

- Paso 1. Escanear puntos de acceso inalámbricos. Ingrese los comandos como sigue.
connmanctl para obtener el prompt >.
- Paso 2. scan wifi para escanear puntos de acceso disponibles (espere hasta que termine).
- Paso 3. services para listarlos.
- Paso 4. Seleccione un punto de acceso. Aún dentro del prompt >, ingrese los comandos como sigue.
- Paso 5. agent on si desea que Connection Manager le solicite una contraseña.
- Paso 6. connect wifi_xxxx para elegir el punto de acceso deseado (puede usar la tecla tab para comenzar, y para autocompletar, su entrada).
- Paso 7. Responda a la consulta del agente por una contraseña si es necesario.
- Paso 8. quit cuando termine.
- Paso 9. No necesitaremos repetir este proceso en el futuro: La conexión ocurre automáticamente de ahora en adelante.

Aquí está la información del terminal.

```
[root@artik ~]# connmanctl
Error getting VPN connections: The name net.connman.vpn was not provided by any connmanctl> scan wifi
Scan completed for wifi
connmanctl> scan wifi
connmanctl> services
*AO Wired                ethernet_000000000000_cable
    seeed                wifi_722c1f37ca11_XXXXXXXX_managed_psk
    ReSpeaker1DD346      wifi_722c1f37ca11_XXXXXXXX_managed_none
connmanctl> agent on
Agent registered
connmanctl> connect wifi_722c1f37ca11_XXXXXXXX_managed_psk
Agent RequestInput wifi_722c1f37ca11_XXXXXXXX_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
Passphrase? 2018seeed
connmanctl> quit
[root@artik ~]#
```

**Actualización de Firmware**

- Paso 1. Descarga el [firmware](https://developer.artik.io/documentation/downloads.html#firmware), los archivos para el "ARTIK 530s 1G".
- Paso 2. Usa la herramienta [Etcher](https://etcher.io/) para grabar el firmware en la tarjeta SD.
- Paso 3. Conecta la tarjeta SD en la ranura SD del Eagleye 530s.
- Paso 4. Cambia el interruptor de arranque (nombrado como número 21 en la descripción general del hardware) Pin4 a encendido.
- Paso 5. Conecta el cable USB desde la PC al USB UART (nombrado como número 8 en la descripción general del hardware).
- Paso 6. Presiona el botón de encendido por más de 1 segundo y veremos que los LEDs Verde/Rojo/Azul (consulta los números 10/11/12 en la descripción general del hardware) se encienden.
- Paso 7. Veremos el mensaje de abajo y el firmware se descarga exitosamente.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_firmware.png)

- Paso 8. Por favor apaga la placa, retira la tarjeta SD y cambia el interruptor de arranque Pin4 de vuelta a apagado.

## Jugar con Programación de Pines

Las placas Eagleye proporcionan muchos pines de señal programables. Algunos de estos son pines de Entrada/Salida de Propósito General (GPIO), mientras que otros son pines de propósito fijo para entrada analógica, salida modulada por ancho de pulso y comunicación serializada.

- Entrada Digital (GPIO) – detectar un nivel de señal DC en bajo (GND) o alto (Vcc)
- Salida Digital (GPIO) – manejar un nivel DC (GND o Vcc) que puede ser controlado dinámicamente
- Salida de Forma de Onda (PWM) – conmutar niveles DC mediante un circuito de Modulación por Ancho de Pulso con frecuencia y ciclo de trabajo que pueden ser programados dinámicamente.
- Puertos Serie (I2C y UART) – enviar y recibir datos según protocolos estándar de la industria.
- Entrada Analógica (ADC) – leer un nivel de señal variable y procesar a través de un convertidor analógico-digital

La funcionalidad sysfs del kernel de Linux proporciona bibliotecas para controlar y monitorear pines programables. Los detalles están disponibles en la [referencia](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt).

Aquí está el diagrama de pines de los conectores con su significado.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/pin_map.png)

| Descripción | Nombre del Pin | Número de Pin | Número de Pin | Nombre del Pin | Descripción |
|-------------|----------------|---------------|---------------|----------------|-------------|
| 3.3V        | 3.3V           | 1             | 2             | 5V             | 5V          |
| I2C         | XI2C0_SDA      | 3             | 4             | 5V             | 5V          |
| I2C         | XI2C0_SCL      | 5             | 6             | GND            | GND         |
| GPIO_161    | XAGPIO0        | 7             | 8             | XUART0_TX      | UART        |
| GND         | GND            | 9             | 10            | XUART0_RX      | UART        |
| GPIO_128    | XGPIO0         | 11            | 12            | I2SBCK1        | I2S         |
| GPIO_129    | XGPIO1         | 13            | 14            | GND            | GND         |
| PWM         | PWM2           | 15            | 16            | XGPIO2         | GPIO_130    |
| 3.3V        | 3.3V           | 17            | 18            | XGPIO3         | GPIO_46     |
| SPI     | XSPIO_MOSI     | 19            | 20            | GND            | GND         |
| SPI     | XSPIO_MISO     | 21            | 22            | PWM0           | PWM         |
| SPI     | XSPIO_CLK      | 23            | 24            | XSPIO0_CS      | SPI     |
| GND         | GND            | 25            | 26            | XGPIO4         | GPIO_14     |
| NC          | NC             | 27            | 28            | NC             | NC          |
| GPIO_27     | XGPIO9         | 29            | 30            | GND            | GND         |
| GPIO_25     | XGPIO6         | 31            | 32            | XGPIO7         | GPIO_0      |
| GPIO_26     | XGPIO8         | 33            | 34            | GND            | GND         |
| I2S         | I2SLRCLK1      | 35            | 36            | XADC0          | ADC         |
| ADC         | XADC1          | 37            | 38            | I2SDIN1        | I2S         |
| GND         | GND            | 39            | 40            | I2SDOUT1       | I2S         |

**Control de GPIO a través de Sysfs**

Por ejemplo, el pin 11 es GPIO y puede usarse como entrada o salida digital. Para usar un GPIO particular, primero estableceríamos su dirección (modo) como entrada o salida, y luego leer desde o escribir hacia él según sea necesario.

Los tutoriales [Jugar con LEDs integrados](https://files.seeedstudio.com/wiki/Eagleye_530s/res/blink_led.py) y [Jugar con botones integrados](https://files.seeedstudio.com/wiki/Eagleye_530s/res/read_button.py) proporcionaron ejemplos de la programación necesaria para pines de E/S digitales.

:::caution
Por favor cambie el número específico del pin GPIO en el programa python de led/botón.
:::

**Control PWM a través de Sysfs**

Por ejemplo, el pin 22 es PWM. Podemos conectar PWM de LED al PWM de 40 Pines y GND también. Podemos establecer period y duty_cycle (El límite máximo es 1,000,000,000 (expresado en ns).) Duty_cycle siempre debe ser menor que period.

El siguiente ejercicio demuestra el uso de un pin PWM, estableciendo una tasa de parpadeo fija.

- Paso 1. Exportar PWM0

    ```
    echo 0 > /sys/class/pwm/pwmchip0/export
    ```

Se crea un subdirectorio pwm0. (Podemos usar echo 0 para crear pwm0, echo 2 para crear pwm2.)

- Paso 2. Establecer atributos

  - a) Establecer period (Unidad: ns) a 1 seg

    ```
    echo 1000000000 > /sys/class/pwm/pwmchip0/pwm0/period
    ```

  - b) Establecer duty_cycle (Unidad: ns) a 500 mseg

    ```
    echo 500000000 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle
    ```

  - c) Habilitar PWM0

    ```
    echo 1 > /sys/class/pwm/pwmchip0/pwm0/enable
    ```

  - d) Deshabilitar PWM0

    ```
    echo 0 > /sys/class/pwm/pwmchip0/pwm0/enable
    ```

- Paso 3. Desexportar PWM0

    ```
    echo 0 > /sys/class/pwm/pwmchip0/unexport
    ```

Aquí está la información del terminal para pwm0.

```
[root@artik pwmchip0]# echo 0 > /sys/class/pwm/pwmchip0/export    # please change to echo 2 for pwm2
[root@artik pwmchip0]# echo 1000000000 > /sys/class/pwm/pwmchip0/pwm0/period # please change to pwm2 from pwm0 for pwm2
[root@artik pwmchip0]# echo 500000000 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle # please change to pwm2 from pwm0 for pwm2
[root@artik pwmchip0]# echo 1 > /sys/class/pwm/pwmchip0/pwm0/enable  # please change to pwm2 from pwm0 for pwm2
[root@artik pwmchip0]# echo 0 > /sys/class/pwm/pwmchip0/pwm0/enable # please change to pwm2 from pwm0 for pwm2
```

**Control ADC a través de Sysfs**

Por ejemplo, el pin 36 es ADC0. Los siguientes ejemplos de línea de comandos demuestran cómo leer el valor actual de ADC0.

```
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
0
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
1211
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
2027
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
3017
[root@artik dev]# cat /sys/devices/platform/c0000000.soc/c0053000.adc/iio:device0/in_voltage0_raw
4095
```

:::note
Por favor cambia in_voltage0_raw a in_voltage1_raw si usamos el pin37 (ADC1).
:::

**Control UART**

- Paso 1. Ejecuta el siguiente comando para habilitar UART0, y podemos ver ttyAMA4 en la lista, probado con [ARTIK 530s 1G Secure Module Firmware (Ubuntu): A533s_os_18.05.00](https://developer.artik.io/downloads/2768bd32-383a-44cf-9e90-9292712a96ba/download).

```
cd /sys/kernel/config/device-tree/overlays/
mkdir ttyAMA4
cd /boot/overlays
cat s5p4418-artik533-compy-serial4.dtbo  > /sys/kernel/config/device-tree/overlays/ttyAMA4/dtbo
cd /dev
ls tty*
```

- Paso 2. Conecta el UART0 TX/RX al adaptador USB2Serial.

| Número de Pin | Nombre del Pin | Adaptador USB2Serial |
|---------------|----------------|----------------------|
| 6             | GND            | GND                  |
| 8             | XUART0_TX      | RX                   |
| 10            | XUART0_RX      | TX                   |

- Paso 3. Envía "hello" al UART0

```
stty -F /dev/ttyAMA4 
echo "hello .." > /dev/ttyAMA4
```

- Paso 4. Podemos ver el monitor serie como se muestra a continuación.

```
hello ..
hello ..
hello ..
```

## Juega con los Micrófonos ReSpeakers

**Juega con 2 Mics Pi HAT**

**Hardware**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/2_Mics.jpg)

**Instalar el Controlador de 2 Mics**

- Paso 1. Descarga el controlador Seeed-Voicecard.

```
[root@artik ~]# apt update
[root@artik ~]# apt install git
[root@artik ~]# git clone https://github.com/respeaker/seeed-voicecard
[root@artik ~]# cd seeed-voicecard
[root@artik seeed-voicecard]# git checkout remotes/origin/artikpi -b artiki
```

- Paso 2. Instalar el controlador Seeed-Voicecard.

```
[root@artik ~]# cd seeed-voicecard/
[root@artik seeed-voicecard]# mount -o remount,rw /lib/modules
[root@artik seeed-voicecard]# sudo mkdir -p /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/
[root@artik seeed-voicecard]# sudo cp snd-soc-ac108.ko.0533GS0F-44U-01Q5 /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/snd-soc-ac108.ko
[root@artik seeed-voicecard]# sudo cp snd-soc-wm8960.ko.0533GS0F-44U-01Q5 /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/snd-soc-wm8960.ko
[root@artik seeed-voicecard]# sudo depmod -a
```

- Paso 3. Habilitar 2 Micrófonos.

```
[root@artik ~]# cd seeed-voicecard
[root@artik seeed-voicecard]# su root
[root@artik seeed-voicecard]# mkdir /sys/kernel/config/device-tree/overlays/seeed-voicecard
[root@artik seeed-voicecard]# cat seeed-2mic-voicecard-artik.dtbo > /sys/kernel/config/device-tree/overlays/seeed-voicecard/dtbo
[root@artik seeed-voicecard]# cp wm8960_asound.state /var/lib/alsa/asound.state
[root@artik seeed-voicecard]# alsactl --file=wm8960_asound.state restore
```

:::warning
Por favor, ejecuta el Paso 3 nuevamente después del reinicio, o de lo contrario no podrá detectar la seeed voicecard.
:::

- Paso 4. Usa arecord para listar los dispositivos de grabación.

```
[root@artik seeed-voicecard]# arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
pulse
    PulseAudio Sound Server
default
    Playback/recording through the PulseAudio sound server
playback
dmixed
ac108
sysdefault:CARD=Audio
    Artik530 raptor Audio,
    Default Audio Device
dmix:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct sample mixing device
dsnoop:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct sample snooping device
hw:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct hardware device without any conversions
plughw:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Hardware device with all software conversions
sysdefault:CARD=seeed2micvoicec
    seeed-2mic-voicecard,
    Default Audio Device
dmix:CARD=seeed2micvoicec,DEV=0
    seeed-2mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed2micvoicec,DEV=0
    seeed-2mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed2micvoicec,DEV=0
    seeed-2mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed2micvoicec,DEV=0
    seeed-2mic-voicecard,
    Hardware device with all software conversions
```

**Capturar/Reproducir Audio**

- Comenzar a grabar usando la Línea de Comandos

```
arecord -f cd -Dplughw:1,0 /tmp/test.wav
aplay -Dplughw:1,0 /tmp/test.wav
```

Aquí está la configuración del hardware. Podemos escuchar la reproducción desde el conector de audio de 2 Mics.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/2_Mics_Playback.jpg)

- Iniciar grabación usando Python

  - Paso 1. Instalar el paquete pyaudio con los siguientes comandos

      ```
      apt install python-pyaudio
      ```

  - Paso 2. Usar un editor de texto como vi para crear este archivo de código [recorder_2Mics.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/recorder_2Mics.py), que graba un clip de audio de 10 segundos llamado test.wav.

```python
import pyaudio
import wave

FORMAT = pyaudio.paInt16
CHANNELS = 2
RATE = 48000
CHUNK = 1024
RECORD_SECONDS = 10
WAVE_OUTPUT_FILENAME = "test.wav"

audio = pyaudio.PyAudio()

# start Recording
stream = audio.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True, frames_per_buffer=CHUNK)
print "recording audio..."
frames = []

threshold = 800
for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
   data = stream.read(CHUNK)
   frames.append(data)
print "done recording"

# stop Recording
stream.stop_stream()
stream.close()
audio.terminate()

waveFile = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
waveFile.setnchannels(CHANNELS)
waveFile.setsampwidth(audio.get_sample_size(FORMAT))
waveFile.setframerate(RATE)
waveFile.writeframes(b''.join(frames))
waveFile.close()
```

:::caution
Para más información, como jugar con google assistant, consulte [ReSpeaker 2-Mics Pi HAT](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT/).
:::

**Jugar con 4 Mics Pi HAT**

**Hardware**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/4_Mics.jpg)

**Instalar el Controlador de 4 Mics**

- Paso 1. Descargue el controlador Seeed-Voicecard.

```
[root@artik ~]# apt update
[root@artik ~]# apt install git
[root@artik ~]# git clone https://github.com/respeaker/seeed-voicecard
[root@artik ~]# cd seeed-voicecard
[root@artik seeed-voicecard]# git checkout remotes/origin/artikpi -b artiki
```

- Paso 2. Instalar el controlador Seeed-Voicecard.

```
[root@artik seeed-voicecard]# mount -o remount,rw /lib/modules
[root@artik seeed-voicecard]# sudo mkdir -p /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/
[root@artik seeed-voicecard]# sudo cp snd-soc-ac108.ko.0533GS0F-44U-01Q5 /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/snd-soc-ac108.ko
[root@artik seeed-voicecard]# sudo cp snd-soc-wm8960.ko.0533GS0F-44U-01Q5 /lib/modules/4.4.113-0533GS0F-44U-01Q5/kernel/sound/soc/codecs/snd-soc-wm8960.ko
[root@artik seeed-voicecard]# sudo depmod -a
```

- Paso 3. Habilitar 4 Micrófonos.

```
[root@artik ~]# cd seeed-voicecard
[root@artik seeed-voicecard]# su root
[root@artik seeed-voicecard]# mkdir /sys/kernel/config/device-tree/overlays/seeed-voicecard
[root@artik seeed-voicecard]# cat seeed-4mic-voicecard-artik.dtbo > /sys/kernel/config/device-tree/overlays/seeed-voicecard/dtbo
[root@artik seeed-voicecard]#
[  574.305000] Please set data-protocol.
[  574.310000]  i2c_id number :0
[  574.310000]  ac108  codec_index :0
[  574.315000]  ac108  I2S data protocol type :1
[  574.335000] ac108_write error->[REG-0x00,val-0x12]
[  574.550000] AC108 PLL freq_in match:24000000, freq_out:24576000
[  574.550000]
[  574.640000] AC108 PLL freq_in match:24000000, freq_out:24576000
[  574.640000]

[root@artik seeed-voicecard]# cp ac108_asound.state /var/lib/alsa/asound.state
[root@artik seeed-voicecard]# cp ac108_plugin/libasound_module_pcm_ac108.so  /usr//lib/arm-linux-gnueabihf/alsa-lib/
[root@artik seeed-voicecard]# cp  asound_4mic.conf   /etc/asound.conf
[root@artik seeed-voicecard]# alsactl --file=ac108_asound.state restore
```

:::caution
Por favor, ejecuta el Paso 3 nuevamente después del reinicio, o de lo contrario no podrá detectar la tarjeta de voz seeed.
:::

- Paso 4. Usa arecord para listar los dispositivos de grabación.

```
[root@artik seeed-voicecard]# arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
pulse
    PulseAudio Sound Server
default
    Playback/recording through the PulseAudio sound server
playback
dmixed
ac108
sysdefault:CARD=Audio
    Artik530 raptor Audio,
    Default Audio Device
dmix:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct sample mixing device
dsnoop:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct sample snooping device
hw:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Direct hardware device without any conversions
plughw:CARD=Audio,DEV=0
    Artik530 raptor Audio,
    Hardware device with all software conversions
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard,
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Hardware device with all software conversions
```

**Capturar Audio**

- Comenzar la grabación usando la Línea de Comandos

```
arecord -Dac108 -f S16_LE -r 48000  -c 4 /tmp/test.wav
```

- Comenzar la grabación usando Python

  - Paso 1. Instalar el paquete pyaudio con los siguientes comandos

      ```
      apt install python-pyaudio
      ```

  - Paso 2. Usar un editor de texto como vi para crear este archivo de código [recorder_4Mics.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/recorder_4Mics.py), que graba un clip de audio de 10 segundos llamado test.wav.

```python
import pyaudio
import wave

FORMAT = pyaudio.paInt16
CHANNELS = 4
RATE = 48000
CHUNK = 1024
RECORD_SECONDS = 10
WAVE_OUTPUT_FILENAME = "test.wav"

audio = pyaudio.PyAudio()

# start Recording
stream = audio.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True, frames_per_buffer=CHUNK)
print "recording audio..."
frames = []

threshold = 800
for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
   data = stream.read(CHUNK)
   frames.append(data)
print "done recording"

# stop Recording
stream.stop_stream()
stream.close()
audio.terminate()

waveFile = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
waveFile.setnchannels(CHANNELS)
waveFile.setsampwidth(audio.get_sample_size(FORMAT))
waveFile.setframerate(RATE)
waveFile.writeframes(b''.join(frames))
waveFile.close()
```

:::caution
Para más información, como jugar con Alexa/DuerOS, consulte [ReSpeaker 4-Mic Array para Raspberry Pi](https://wiki.seeedstudio.com/es/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/).
:::

**Jugar con Mic Array v2.0**

**Hardware**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/usb_4Mics.jpg)

**Capturar Audio**

- Iniciar grabación usando la Línea de Comandos

```python
arecord -D plughw:1,0 -f cd test.wav # record, please use the arecord -l to check the card and hardware first
aplay -D plughw:1,0 -f cd test.wav # play, please use the aplay -l to check the card and hardware first
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

- Comenzar grabación usando Python

  - Paso 1, Necesitamos ejecutar el siguiente script para obtener el número de índice del dispositivo del Mic Array:

    ```python
    apt install python-pip
    pip install pyaudio
    cd ~
    nano get_index.py
    ```

  - Paso 2, copiar el código de abajo y pegarlo en [get_index.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/get_index.py).

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- Paso 3, presiona Ctrl + X para salir y presiona Y para guardar.

- Paso 4, ejecuta 'sudo python get_index.py' y veremos el ID del dispositivo como se muestra a continuación.

```
Input Device id  0  -  Artik530 raptor Audio: - (hw:0,0)
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
Input Device id  3  -  sysdefault
Input Device id  4  -  pulse
Input Device id  8  -  default
```

- Paso 5, cambia `RESPEAKER_INDEX = 2` al número de índice. Ejecuta el script de python [record.py](https://files.seeedstudio.com/wiki/Eagleye_530s/res/record.py) para grabar un discurso.

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 1 # change base on firmwares, default_firmware.bin as 1 or i6_firmware.bin as 6
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

:::caution
Para más información, como trabajar con DOA/LEDs, consulte [ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/es/ReSpeaker_Mic_Array_v2.0/).
:::

## Trabajar con GrovePi+

**Instalar dependencias**

```
apt install g++ libi2c-dev
apt install python-dev
apt install python-smbus
apt install libffi-dev
apt install python-pip
pip install setuptools
pip install smbus-cffi
pip install numpy
```

**I2C usando Python con GrovePi+ Shield**

- Paso 1. Descarga los archivos desde github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- Paso 2. Modifica el código fuente /root/GrovePi/Software/Cpp/grovepi.cpp y añade una línea como se muestra.

```cpp
void GrovePi::SMBusName(char *smbus_name)
{
 unsigned int hw_revision = gpioHardwareRevision();
 unsigned int smbus_rev;

 if(hw_revision < 4)
  // type 1
  smbus_rev = 1;
 else if(hw_revision < 16)
  // type 2
  smbus_rev = 2;
 else
  // type 3
  smbus_rev = 3;

 if(smbus_rev == 2 || smbus_rev == 3)
  strcpy(smbus_name, "/dev/i2c-1");
 else
  strcpy(smbus_name, "/dev/i2c-0");
  strcpy(smbus_name, "/dev/i2c-1"); //add this line to enable the I2C for eagleye_530s
}
```

- Paso 3. Modifica el código fuente /root/GrovePi/Software/Python/grovepi.py
 y comenta como se muestra.

```python
if sys.platform == 'uwp':
 import winrt_smbus as smbus
 bus = smbus.SMBus(1)
else:
 import smbus
# import RPi.GPIO as GPIO
# rev = GPIO.RPI_REVISION
# if rev == 2 or rev == 3:
 bus = smbus.SMBus(1)
# else:
#  bus = smbus.SMBus(0)
```

- Paso 4. Cada vez que reiniciemos la placa, ejecuta los siguientes dos comandos. Ponlos en un archivo bash para hacerlo automático.

```
mkdir /sys/kernel/config/device-tree/overlays/i2c
cat /boot/overlays/s5p4418-artik533-compy-i2c1.dtbo > /sys/kernel/config/device-tree/overlays/i2c/dtbo
```

:::caution
    Por favor ejecuta los comandos del Paso 4 después de reiniciar.
:::

- Paso 5. Por favor conecta el Grove-Led y el Grove-Rotary Angle Sensor al GrovePi como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/GrovePi_Demo.jpg)

- Paso 6. Ejecuta python grove_rotary_angle_sensor.py.

```
cd ~/GrovePi/Software/Python/
python grove_rotary_angle_sensor.py
```

Aquí está el código.

```python
import time
import grovepi

# Connect the Grove Rotary Angle Sensor to analog port A0
# SIG,NC,VCC,GND
potentiometer = 0

# Connect the LED to digital port D5
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(potentiometer,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

# Reference voltage of ADC is 5v
adc_ref = 5

# Vcc of the grove interface is normally 5v
grove_vcc = 5

# Full value of the rotary angle is 300 degrees, as per it's specs (0 to 300)
full_angle = 300

while True:
    try:
        # Read sensor value from potentiometer
        sensor_value = grovepi.analogRead(potentiometer)

        # Calculate voltage
        voltage = round((float)(sensor_value) * adc_ref / 1023, 2)

        # Calculate rotation in degrees (0 to 300)
        degrees = round((voltage * full_angle) / grove_vcc, 2)

        # Calculate LED brightess (0 to 255) from degrees (0 to 300)
        brightness = int(degrees / full_angle * 255)

        # Give PWM output to LED
        grovepi.analogWrite(led,brightness)

        print("sensor_value = %d voltage = %.2f degrees = %.1f brightness = %d" %(sensor_value, voltage, degrees, brightness))
    except KeyboardInterrupt:
        grovepi.analogWrite(led,0)
        break
    except IOError:
        print ("Error")

```

- Paso 7. El LED cambiará el brillo mientras el sensor de ángulo rotatorio esté girando. También vemos la información del terminal como se muestra a continuación.

```
[root@artik Python]# python grove_rotary_angle_sensor.py
sensor_value = 246 voltage = 1.20 degrees = 72.0 brightness = 61
sensor_value = 247 voltage = 1.21 degrees = 72.6 brightness = 61
sensor_value = 258 voltage = 1.26 degrees = 75.6 brightness = 64
sensor_value = 274 voltage = 1.34 degrees = 80.4 brightness = 68
sensor_value = 296 voltage = 1.45 degrees = 87.0 brightness = 73
sensor_value = 318 voltage = 1.55 degrees = 93.0 brightness = 79
sensor_value = 340 voltage = 1.66 degrees = 99.6 brightness = 84
sensor_value = 363 voltage = 1.77 degrees = 106.2 brightness = 90
sensor_value = 387 voltage = 1.89 degrees = 113.4 brightness = 96
```

:::caution:
Para más sensores Grove, consulte la [Biblioteca Python de DexterInd](https://github.com/DexterInd/GrovePi). No probamos la compatibilidad de todos los sensores con Eagleye 530s. Póngase en contacto con soporte técnico si tiene algún problema.
:::

## Jugar con Shield

**Jugar con Placas de Relé**

**Hardware**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/relay_shield.jpg)

**Software**

- Paso 1. Ejecute el siguiente comando para habilitar el I2C.

```
mkdir /sys/kernel/config/device-tree/overlays/i2c
cat /boot/overlays/s5p4418-artik533-compy-i2c1.dtbo > /sys/kernel/config/device-tree/overlays/i2c/dtbo
```

:::caution
Cada vez que reiniciemos la placa, ejecuta los siguientes dos comandos. Ponlos en un archivo bash para hacerlo automático.
:::

- Paso 2. Ejecuta i2cdetect para detectar el shield de relé.

```
[root@artik ~]# i2cdetect -y -r 1
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: 20 -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```

- Paso 3. Ejecuta los siguientes comandos para ejecutar relay_lib_seeed_test.py.

```
[root@artik ~]# cd ~
[root@artik ~]# git clone https://github.com/johnwargo/Seeed-Studio-Relay-Board.git
[root@artik ~]# cd Seed-Studio-Relay-Board/
[root@artik Seed-Studio-Relay-Board]# python relay_lib_seeed_test.py
Turning all relays ON
Turning all relays OFF
Turning relay 1 ON
Turning relay 1 OFF
Turning relay 2 ON
Turning relay 2 OFF
Turning relay 3 ON
Turning relay 3 OFF
Turning relay 4 ON
Turning relay 4 OFF
```

:::caution
Para más información, consulte [Raspberry Pi Relay Board v1.0](https://wiki.seeedstudio.com/es/Raspberry_Pi_Relay_Board_v1.0/).
:::

**Jugar con Placas RS232**

**Hardware**

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/rs232_shield.jpg)

- Paso 1. Conecte el cable USB a la fuente de alimentación.
- Paso 2. Conecte el cable RS232 entre el shield RS232 y la PC.

**Software**

- Paso 1. Abra [putty](https://www.putty.org/) en el lado de la PC y configure como se muestra a continuación. El COM debe configurarse como el administrador de dispositivos. En nuestro caso, el puerto COM asignado es COM9.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Com.png)

- Paso 2. Configure la configuración de PuTTY de la siguiente manera:
  - Configure la "Línea serie" como el número de puerto COM encontrado en el paso 3.
  - Configure la velocidad COM a "115200".
  - Configure el tipo de conexión a "Serial".
  - Guarde la sesión bajo Eagleye 530s.
- Paso 3. Seleccione su sesión guardada y haga clic en el botón "Abrir".

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_setup.png)

- Paso 4. El nombre de usuario y la contraseña son root.
- Paso 5. Veremos el terminal como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Putty_normal_boot.png)

:::caution
Para más información, consulte [Raspberry Pi RS232 Board v1.0](https://wiki.seeedstudio.com/es/Raspberry_Pi_R232_Board_v1.0/).
:::

**Jugar con Placa Breakout**

Raspberry Pi Breakout Board, también proporciona alimentación, luz indicadora de estado, botón y transistor universal, como NPN, PNP, N-MOS, P-MOS. Funciona bien con Eagleye_530s.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/breakout_shield.jpg)

:::caution
Para más información, consulte [Raspberry Pi Breakout Board v1.0](https://wiki.seeedstudio.com/es/Raspberry_Pi_Breakout_Board_v1.0/).
:::

## Preguntas Frecuentes

- P1: ¿Es Eagleye 530s compatible con las carcasas de Raspberry Pi?

R1: Sí. Aquí está la lista de compatibles.

| SKU       | Descripción                                                                                                    | Comentarios                             |
|-----------|----------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| 103010002 | [GrovePi+](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                 | Consulte Jugar con Grovepi+            |
| 103030030 | [Raspberry Pi Breakout Board v1.0](https://www.seeedstudio.com/s/Raspberry-Pi-Breakout-Board-v1.0-p-2410.html) | Consulte Jugar con Shield              |
| 103030029 | [Raspberry Pi Relay Board v1.0](https://www.seeedstudio.com/Raspberry-Pi-Relay-Board-v1.0-p-2409.html)         | Consulte Jugar con Shield              |
| 103030028 | [Raspberry Pi RS232 Board v1.0](https://www.seeedstudio.com/Raspberry-Pi-RS232-Board-v1.0-p-2408.html)         | Consulte Jugar con Shield              |
| 114990835 | [Raspberry Pi HDMI LCD (7 inch)](https://www.seeedstudio.com/Raspberry-Pi-HDMI-LCD-%287-inch%29-p-2763.html)   | La pantalla funciona bien excepto el tacto. |

- P2: ¿Cómo configurar la función de arranque automático?

R2: Encuentra el diodo D401 como se muestra en la imagen de abajo, retira el diodo D401 mediante soldadura, cortocircuita los dos pines del D401 soldando un punto de soldadura.

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Auto_boot_1.jpg)

![](https://files.seeedstudio.com/wiki/Eagleye_530s/img/Auto_boot_2.jpg)

## Recursos

- **[PDF]** [Hoja de datos del módulo ARTIK™ 530s SoM](https://developer.artik.io/downloads/hw-datasheet-artik-530-v1-0-pdf/download)
- **[Certificación]** [Certificado y Reporte CE](https://files.seeedstudio.com/wiki/Eagleye_530s/res/CE%20Certificate%26Report.zip)
- **[Certificación]** [Certificado y Reporte IC](https://files.seeedstudio.com/wiki/Eagleye_530s/res/IC%20Certificate%26Report.zip)
- **[Certificación]** [Certificado y Reporte FCC](https://files.seeedstudio.com/wiki/Eagleye_530s/res/FCC%20Certificate%26Report.zip)
- **[PDF]** [Guía de usuario Eagleye 530s](https://files.seeedstudio.com/wiki/Eagleye_530s/res/Eagleye%20530s%20User%20Guide.pdf)
- **[Lectura adicional]** [ARTIK™ 530s](https://www.artik.io/modules/artik-530/)
- **[Lectura adicional]** [Plataforma IoT Samsung ARTIK™](https://developer.artik.io/documentation/artik/getting-started/)
- **[Lectura adicional]** [Proyecto de reconocimiento facial](https://developer.artik.io/documentation/artik/projects/facial-recog.html)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
