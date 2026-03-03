---
description: Este artículo cubre el hardware y las interfaces de la serie reComputer Mini J40, incluyendo alimentación, pantalla, ranuras M.2 para Wi-Fi y SSD, puertos USB, RTC, gestión del ventilador, y más. Proporciona instrucciones de configuración y consejos de pruebas de rendimiento para ayudar a los usuarios a expandir sus proyectos.
title: Hardware y Uso de Interfaces del reComputer Mini
tags:
  - reComputer
  - reComputer mini
  - embedded computer
  - robots
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /es/recomputer_jetson_mini_hardware_interfaces_usage
sku: 114993553,114993551,102111001,102110999,114993592,114993593
last_update:
  date: 12/16/2024
  author: Youjiang
---

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"/>
</div>

Esta wiki introduce los diversos hardware e interfaces diferentes en la serie reComputer mini J40 y cómo usarlos para expandir las ideas de tu proyecto.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>

## Descripción General de la Interfaz de Hardware

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>
</div>

## Alimentación

El reComputer Mini está equipado con una interfaz de alimentación **12-54V (XT30)**, compatible con un amplio rango de entrada de voltaje (12V a 54V), haciéndolo adecuado para varios entornos de suministro de energía.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/power.png"/>  
</div>

## Pantalla

El producto está equipado con un puerto Type-C que cuenta con funcionalidad Host + DP (DisplayPort), lo que significa que no solo soporta transferencia de datos sino que también te permite conectar un monitor a través de este puerto, habilitando salida de video de alta calidad.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/display.png"/>  
</div>

## M.2 Key E para WIFI y Bluetooth

El reComputer Mini cuenta con una interfaz M.2 Key E, a través de la cual puedes expandir las capacidades de Bluetooth y Wi-Fi del dispositivo.

Recomendamos usar la NIC Inalámbrica Intel Dual Band RTL8822CE.

### Conexión de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/wifi.png"/>
</div>

### Instrucciones de Uso

Después de instalar el módulo Wi-Fi y encender el dispositivo, podemos configurar las opciones de Wi-Fi y Bluetooth del dispositivo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Por supuesto, también podemos verificar el estado de funcionamiento del dispositivo usando los siguientes comandos.

```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

```bash
bluetoothctl
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/bluetoothctl.png"/>
</div>

## M.2 Key M para SSD

M.2 Key M es una interfaz diseñada para unidades de estado sólido (SSD) de alta velocidad, que proporciona velocidades de transferencia de datos ultrarrápidas, ideal para aplicaciones de alto rendimiento.

De fábrica, reComputer Industrial incluye un SSD de grado industrial de 128GB conectado al slot M.2 Key M con x4 PCIe Gen3, que viene preinstalado con el sistema JetPack.

### Conexión de Hardware

Si deseas remover el SSD incluido e instalar uno nuevo, necesitas asegurar que tu SSD cumpla con las siguientes dos condiciones:

- Soportar la interfaz **M.2 Key M slot con x4 PCIe Gen3**.
- Cumplir con la especificación de tamaño **2242**.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/ssd.png"/>
</div>

### Instrucciones de Uso

Abre la terminal en el dispositivo Jetson e ingresa el siguiente comando para probar la velocidad de lectura y escritura del SSD.

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
Por favor, ejecuta el comando `sudo rm tempfile` para eliminar los archivos de caché una vez completada la prueba.
:::

## Ethernet

### Conexión de Hardware

El reComputer Mini cuenta con un **puerto Ethernet Gigabit RJ45 (10/100/1000M)** en la placa de expansión.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_photo.png"/>
</div>

### Instrucciones de Uso

Ingresa `ifconfig` en la terminal, y puedes ver que el nombre del dispositivo mapeado por la interfaz Ethernet es `eth0`:
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_ifconfig.png"/>
</div>

Conecta el **reComputer Mini** a la **PC** usando un cable Ethernet Gigabit RJ45. Con la herramienta `iperf`, podemos probar brevemente la velocidad de transmisión de la interfaz Ethernet.
Abre una terminal e instala `iperf3` tanto en la **PC** como en el **reComputer Mini**.

```bash
sudo apt update
sudo apt install iperf3
```

Abre la terminal en la PC e ingresa `iperf3 -s`.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/iperf3PC.jpg"/>
</div>

Luego, abre la terminal en el **reComputer Mini** e ingresa `iperf3 -c <IP de tu PC>`.
En este caso, la dirección IP de la interfaz de red de mi PC es `192.168.12.211`. El comando de ejemplo es el siguiente:

```bash
iperf3 -c 192.168.12.211
```

Luego, basándose en los resultados mostrados en la figura a continuación, puede ver que la velocidad de transmisión Ethernet del reComputer Mini puede alcanzar el nivel de gigabit.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/networkspeed.jpg"/>
</div>

## USB

### Conexión de Hardware

La placa portadora del reComputer Mini tiene un total de 4 puertos USB: 2 puertos USB 3.2 Tipo-A, 1 puerto USB 2.0 Micro-B para flash, y 1 puerto USB 2.0 GH1.25. Y la placa de expansión tiene 4 puertos USB 3.0 Tipo-A.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBshow.jpg"/>
</div>

En la [hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), puede encontrar el diagrama de cableado para la interfaz **USB 2.0** de 5 pines GH-1.25 como se muestra a continuación:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb2.0-datasheet.png"/>
</div>

Podemos referirnos al siguiente procedimiento para conectar un dispositivo de almacenamiento al reComputer mini a través de USB 3.2/USB 2.0/USB 3.0 para probar las velocidades de lectura y escritura USB. Las **Instrucciones de Uso** mostrarán los siguientes pasos.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBLINK.jpg"/>
</div>

### Instrucciones de Uso

Podemos ingresar `watch -n 1 lsusb -tv` en la terminal de Jetson para sondear los puertos USB. Una vez que se conecta un dispositivo USB, la información detallada sobre ese puerto se mostrará aquí.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Después de conectar el dispositivo de almacenamiento a través de USB 3.2/USB 2.0/USB 3.0, ingrese el siguiente comando en la terminal para ver la partición mapeada por el dispositivo de almacenamiento:

```bash
ls /dev/sd*
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/sda1.png"/>
</div>

**/dev/sda1** es la partición mapeada por un dispositivo de almacenamiento conectado vía USB. Si se insertan múltiples dispositivos, pueden tener diferentes nombres de partición mapeados. Por ejemplo: **/dev/sdb1**.

Descarga y ejecuta el programa de prueba desde **GitHub** para medir las velocidades de escritura y lectura del USB. El programa escribirá y luego leerá **1GB** de datos temporales, que serán eliminados después de completarse la prueba.
El parámetro después de `sudo ./USBIO` depende de la partición mapeada del dispositivo de almacenamiento conectado vía USB.

```bash
git clone https://github.com/jjjadand/Mini_USBIO_test.git
cd Mini_USBIO_test/
gcc -o USBIO USB_test.c
sudo ./USBIO /dev/sda1
```

Las velocidades de lectura y escritura para una transferencia de datos de 1GB en un SSD externo conectado vía USB 3.2 son las siguientes:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb-write-read.jpg"/>
</div>
El programa también es aplicable para probar otras interfaces USB.

:::info
Para el uso de la interfaz USB Micro-B, por favor consulta [esta wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_mini_getting_started/) para un tutorial detallado.
:::

## UART

La placa portadora reComputer Mini tiene dos interfaces UART GH-1.25 de 4 pines: **UART1** y **UART-DEBUG**.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart_photo.png"/>
</div>

### UART1

#### Conexión de Hardware

En la [hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), puedes encontrar el diagrama de cableado para la interfaz **UART1** GH-1.25 de 4 pines como se muestra a continuación:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart1_datasheet.png"/>
</div>

Para probar y monitorear la funcionalidad de transmisión y recepción de **UART1**, selecciona un módulo [UART-a-USB](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InVhcnQgdXNiIiwiY19zZWFyY2hfcmVzdWx0X3BvcyI6MSwiY190b3RhbF9yZXN1bHRzIjoxMywiY19zZWFyY2hfcmVzdWx0X3R5cGUiOiJQcm9kdWN0IiwiY19zZWFyY2hfZmlsdGVycyI6InN0b3JlQ29kZTpbcmV0YWlsZXJdICYmIHF1YW50aXR5X2FuZF9zdG9ja19zdGF0dXM6WzFdIn0%3D) adecuado (basado en tus requerimientos), conéctalo según el diagrama de cableado en la hoja de datos, y luego instala cutecom.

Conecta un extremo a la interfaz GH-1.25 de 4 pines de **UART1**, y conecta el otro extremo al puerto USB, asegurándote de que Tx esté conectado a Rx y Rx a Tx.
Las Instrucciones de Uso mostrarán los siguientes pasos.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTLINK.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart2usb.png"/>
</div>

#### Instrucciones de Uso

El número de puerto serie reconocido por el sistema para UART1 es: **/dev/ttyTHS1**. Puedes verificarlo ingresando el siguiente comando en la terminal:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/ttyTHS.png"/>
</div>

Instala **Cutecom** para probar la transmisión y recepción de datos de **UART1**:

```bash
sudo apt update
sudo apt install cutecom
```

Abre **Cutecom** en dos terminales diferentes.

```bash
sudo cutecom
```

Configura los parámetros según la figura a continuación: En una terminal, selecciona **/dev/ttyTHS1** para la opción "device". En la otra terminal, el "device" debe elegirse **basándose en el módulo UART-a-USB que estés usando**. Puedes introducir mensajes en el campo "Input" para probar la transmisión y recepción de datos.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart1.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart.png"/>
</div>

### UART-DEBUG

#### Conexión de Hardware

En la [hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), puedes encontrar el diagrama de cableado para la interfaz UART-DEBUG de 4 pines GH-1.25 como se muestra a continuación:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG.png"/>
</div>

Para probar **UART-DEBUG**, también necesitas un módulo **UART-a-USB**, que debe conectarse a tu **PC** como se muestra en la figura a continuación.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTDBdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG_photo.jpg"/>
</div>

#### Instrucciones de Uso

Después de completar las conexiones de hardware.

Instala la herramienta de inicio de sesión por puerto serie [**MobaXterm**](https://mobaxterm.mobatek.net/) en tu PC primero.
Luego abre el **"Administrador de dispositivos"** en tu PC para verificar el puerto COM mapeado por el módulo **UART-a-USB**.
Para probar **UART-DEBUG**, también necesitas un módulo **UART-a-USB**, que debe conectarse a tu **PC** como se muestra en la figura a continuación.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax1.png"/>
</div>

Abre [**MobaXterm**](https://mobaxterm.mobatek.net/) en **PC**, haz clic en "Session," y luego haz clic en "Serial." Selecciona el puerto COM basándote en el mapeado en el **"Administrador de dispositivos"**, y establece la velocidad de baudios a 115200.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax2.png"/>
</div>

Después de introducir el nombre de usuario y la contraseña, iniciarás sesión en la terminal del reComputer Mini a través de **UART-DEBUG**.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax3.png"/>
</div>

<!-- ### Button and Lights -->

## RTC

El reComputer Mini cuenta con interfaces RTC, proporcionando cronometraje preciso incluso cuando el sistema está apagado.

Conecta una batería de celda de moneda CR2032 de 3V con conector JST al socket JST de 1.25mm de 2 pines en la placa.

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/rtc.png"/>
</div>

<!-- #### Usage Instruction -->

## FAN

La interfaz de ventilador integrada del reComputer Mini es gestionada por el daemon nvfancontrol, que ajusta adaptativamente la velocidad del ventilador basándose en el estado operativo del módulo Jetson. Podemos configurar el modo de trabajo del daemon a través de su archivo de configuración `/etc/nvfancontrol.conf`.

:::note
Para más información, por favor consulta [aquí](https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Además, podemos configurar manualmente la velocidad del ventilador usando la herramienta **jtop**.

Puedes ingresar el siguiente comando en la terminal para instalar **jtop**.

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

Luego reinicia tu reComputer Mini:

```bash
sudo reboot
```

Después de instalar **jtop**, puedes ejecutarlo en la terminal:

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

<!-- ### 5G module -->

## CAN

El reComputer mini cuenta con dos interfaces CAN, con cuatro interfaces CAN externas en la placa de expansión. **CAN0** consta de dos **conectores XT30 (2+2)**, mientras que **CAN1** consta de dos conectores **GH-1.25 de 4 pines**.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can-photo.png"/>
</div>

### Comunicación CAN0/CAN1

#### Conexión de Hardware

En la [hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), puede encontrar el diagrama de cableado para la interfaz CAN0/CAN1 como se muestra a continuación:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can1-datasheet.png"/>
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

Antes de usar CAN0 y CAN1, retire la cubierta inferior y configure ambas resistencias de terminación de 120Ω en la posición ON.
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

Aquí, demostraremos el envío de datos continuamente desde CAN0 a CAN1 a una velocidad de baudios de 125 kbps durante 30 segundos.
Primero, como se muestra en la figura a continuación, conecte las líneas de señal de CAN0 a las de CAN1. Específicamente, conecte **CAN0_H a CAN1_H** y **CAN0_L a CAN1_L**.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CANdraw.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0toCAN1.jpg"/>
</div>

#### Instrucciones de Uso

Después de completar las conexiones de hardware.

Ingrese el siguiente comando en la terminal para ver los nombres de dispositivo asignados a CAN0 y CAN1:

```bash
ifconfig -a
```

Aquí, `can0` corresponde a la interfaz **CAN0**, y `can1` corresponde a la interfaz **CAN1**.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can_express.jpg"/>
</div>

Instala `can-utils` en la terminal:

```bash
sudo apt-get update
sudo apt-get install can-utils
```

Abre una **Terminal 1** e ingresa el siguiente comando para monitorear el número de bytes de datos enviados desde `can0`:

```bash
watch -n 1 'ifconfig can0 | grep "TX packets"'
```

Abre una **Terminal 2**. Descarga el script para probar la comunicación CAN desde GitHub y ejecútalo:

```bash
git clone https://github.com/jjjadand/Mini_CANtest.git
cd Mini_CANtest
sudo ./canTest.sh
```

Al observar las dos terminales, puedes ver que en **Terminal 1**, el número de bytes enviados desde **CAN0** está aumentando.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canTX.jpg"/>
</div>

**Terminal 2** imprimirá los datos recibidos por **CAN1** desde **CAN0**.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canRX.jpg"/>
</div>

Debes habilitar **CAN** antes de usarlo en tu programa. Ejecuta este comando en la terminal:

```bash
sudo gpioset --mode=wait 0 106=0 #enable CAN1
sudo gpioset --mode=wait 0 43=0 #enable CAN0
```

### Salida de Alimentación CAN0

El voltaje de salida de **CAN0-PPOWER** teóricamente es igual al voltaje de entrada **DC** actual del reComputer Mini. El rango de voltaje de entrada **DC** es `12-54V`. Por lo tanto, el rango de salida de alimentación de **CAN0 XT30 (2+2)** también es `12-54V`.

Suministraremos diferentes voltajes a la entrada **DC** y luego mediremos el voltaje de salida de **CAN0-PPOWER**.
Usa una fuente de alimentación estable y un multímetro, y conecta según el diagrama a continuación.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0connet.png"/>
</div>

Cuando la entrada **DC** es `26.3V`, el multímetro mide que la salida de **CAN0-POWER** es `26.03V`.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power1.jpg"/>
</div>

Cuando la entrada **DC** es `12.6V`, el multímetro mide que la salida de **CAN0-POWER** es `12.48V`.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power2.jpg"/>
</div>

Basándose en los resultados de las pruebas anteriores, se puede ver que la salida de **CAN0-POWER** está cerca de la entrada **DC**.
Si quieres conocer más detalles, puedes consultar el [esquemático](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z).

## I2C

### Conexión de Hardware

La placa de expansión del reComputer cuenta con dos interfaces IIC **4-pin GH-1.25**, IIC0 e IIC1.

En la [hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), puedes encontrar el diagrama de cableado para la interfaz IIC0/IIC1 4-pin GH-1.25 como se muestra a continuación:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC0-datasheet.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC1-datasheet.jpg"/>
</div>

Selecciona un dispositivo de interfaz IIC para pruebas; la elección depende de ti. Aquí, un [sensor de interfaz IIC](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6IkkyYyIsImNfc2VhcmNoX3Jlc3VsdF9wb3MiOjQ3LCJjX3RvdGFsX3Jlc3VsdHMiOjUxLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D) está conectado a I2C0/I2C1 con fines de prueba.

El proceso de prueba aquí implica escanear las direcciones de los dispositivos conectados externamente en IIC0/IIC1.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IICdraw.png"/>
</div>

### Instrucciones de Uso

Después de completar las conexiones de hardware.

Necesitamos instalar las herramientas para pruebas IIC. Ingresa lo siguiente en la terminal antes de escanear el dispositivo:

```bash
sudo apt update
sudo apt-get install i2c-tools
```

Luego, ingresa el siguiente comando en la terminal para ver los nombres mapeados en el bus IIC.

```bash
i2cdetect -l
```

La interfaz externa **IIC0-J7** en la placa de expansión corresponde a `i2c-1 i2c c240000.i2c`, y la interfaz externa **IIC1-J7** corresponde a `i2c-7 i2c c250000.i2c`.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic-l.jpg"/>
</div>

Después de conectar el dispositivo I2C externo y configurar su dirección, abra dos terminales diferentes e ingrese los siguientes comandos para escanear en I2C0 e I2C1:

```bash
sudo i2cdetect -y -r 1
sudo i2cdetect -y -r 7
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic0-addr.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic1-addr.png"/>
</div>

Podemos ver que el dispositivo conectado a **I2C0** está configurado con la dirección `0x15`, y el dispositivo conectado a **I2C1** está configurado con la dirección `0x19`.

## SPI

### Conexión de Hardware

La placa de expansión del reComputer cuenta con una interfaz SPI externa **6-pin GH-1.25**.

En la [hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), puedes encontrar el diagrama de cableado para la interfaz SPI 6-pin GH-1.25 como se muestra a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-datasheet.jpg"/>
</div>

Si no usas un módulo externo SPI-a-USB, puedes auto-conectar la interfaz **6-pin GH-1.25** SPI para probar la transmisión y recepción de datos. Conecta **MOSI** a **MISO**, y **CS0** a **SCK**.
El diagrama de cableado es el siguiente:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/SPIdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-photo.jpg"/>
</div>

### Instrucciones de Uso

Después de completar las conexiones de hardware.

Luego, descarga el código para pruebas SPI desde GitHub y compílalo:

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

Ingresa el siguiente comando en la terminal para ver el nombre del dispositivo mapeado por SPI. Por ejemplo, `/dev/spidev0.0` corresponde a SPI0 en la Placa de Extensión (J17).

```bash
ls -l /dev/spi*
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-dev.png"/>
</div>

Ingresa el siguiente comando en la terminal para ejecutar el programa de prueba de SPI：

```bash
sudo ./spidev_test -v
```

Puedes observar los datos siendo transmitidos y recibidos en SPI0 en la Placa de Extensión (J17).
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-res.jpg"/>
</div>

## Recursos

- [Hoja de Datos del reComputer Mini](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [Esquemáticos del reComputer Mini](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [Modelo 3D del reComputer Mini](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
