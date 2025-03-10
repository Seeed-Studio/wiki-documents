---
description: Este artículo cubre el hardware y las interfaces de la serie reComputer Mini J40, incluidos la alimentación, la pantalla, las ranuras M.2 para Wi-Fi y SSD, los puertos USB, el RTC, la gestión de ventiladores, etc. Proporciona instrucciones de configuración y consejos de pruebas de rendimiento para ayudar a los usuarios a ampliar sus proyectos.
title: Uso del hardware y las interfaces de reComputer Mini
tags:
  - reComputer
  - reComputer mini
  - Computadora embebida
  - robots
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /es/recomputer_jetson_mini_hardware_interfaces_usage
last_update:
  date: 12/16/2024
  author: Youjiang
---

Esta wiki presenta los distintos hardware e interfaces de la serie reComputer mini J40 y cómo utilizarlos para ampliar tus ideas de proyectos.

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"/>
</div>


## Carrier Board

### Alimentación

La reComputer Mini está equipada con una interfaz de alimentación **9-60V (XT30)**, compatible con un amplio rango de entrada de voltaje (9V a 60V), lo que lo hace adecuada para diversos métodos de suministro de energía.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/power.png"/>  
</div>


### Monitor

El producto está equipado con un puerto tipo C con funcionalidad Host + DP (DisplayPort), lo que significa que no solo admite la transferencia de datos sino que también le permite conectar un monitor a través de este puerto, lo que permite una salida de vídeo de alta calidad.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/display.png"/>  
</div>


### M.2 Key E para WIFI y Bluetooth

La reComputer Mini cuenta con una interfaz M.2 Key E, a través de la cual puedes ampliar las capacidades de Bluetooth y Wi-Fi del dispositivo.

Recomendamos utilizar la NIC inalámbrica Intel Dual Band RTL8822CE.

#### Conexión de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/wifi.png"/>
</div>

#### Instrucciones de uso

Después de instalar el módulo Wi-Fi y encender el dispositivo, podemos configurar los ajustes de Wi-Fi y Bluetooth del dispositivo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Por supuesto, también podremos comprobar el estado de funcionamiento del dispositivo mediante los siguientes comandos.
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

### M.2 Key M para SSD

M.2 Key M es una interfaz diseñada para unidades de estado sólido (SSD) de alta velocidad, que proporciona velocidades de transferencia de datos ultrarrápidas, ideal para aplicaciones de alto rendimiento.

Fuera de la caja, la reComputer Industrial incluye un SSD de grado industrial de 128 GB conectado a la ranura M.2 Key M con x4 PCIe Gen3, que está preinstalado con el sistema JetPack.

#### Conexión de Hardware

Si deseas quitar el SSD incluido e instalar uno nuevo, debes asegurarte de que tu SSD cumpla con dos condiciones:

- Admite la ranura **M.2 Key M con interfaz x4 PCIe Gen3**.
- Cumple con la especificación de tamaño **2242**.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/ssd.png"/>
</div>

#### Instrucciones de uso

Abre la terminal en el dispositivo Jetson e ingresa el siguiente comando para probar la velocidad de lectura y escritura del SSD.

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::Peligro
Ejecuta el comando `sudo rm tempfile` para eliminar los archivos de caché una vez completada la prueba.
:::

### USB

La Carrier Board reComputer Mini tiene un total de 4 puertos USB: 2 puertos USB 3.2 Tipo-A, 1 puerto USB 2.0 Micro-B para flash y 1 puerto USB 2.0 GH1.25.

### Instrucciones de uso

Podemos ingresar `watch -n 1 lsusb -tv` en la terminal Jetson para sondear los puertos USB. Una vez que se conecta un dispositivo USB, la información detallada sobre ese puerto se mostrará aquí.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Además, puedes consultar [M.2 Key M](#m2-key-m-for-ssd) para probar la velocidad de lectura y escritura de los dispositivos de almacenamiento USB.

:::nota
Ten en cuenta que, antes de realizar la prueba, utiliza el comando `cd` para navegar a la carpeta donde está montado el dispositivo de almacenamiento USB.
:::

:::info
Para conocer el uso de la interfaz USB Micro-B, consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/) para obtener un tutorial detallado.
:::

<!-- ### UART -->

<!-- ### Button and Lights -->

### RTC

La reComputer Mini cuenta con interfaces RTC, que proporcionan un cronometraje preciso incluso cuando el sistema está apagado.

#### Conexiones

Conecta una batería de tipo botón CR2032 de 3 V con conector JST al conector JST de 2 pines de 1,25 mm de la placa.

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/rtc.png"/>
</div>

<!-- #### Usage Instruction -->


### Ventilador

La interfaz del ventilador integrada de la reComputer Mini es administrada por el daemon nvfancontrol, que ajusta de forma adaptativa la velocidad del ventilador según el estado operativo del módulo Jetson. Podemos configurar el modo de trabajo del daemon a través de su archivo de configuración `/etc/nvfancontrol.conf`.

:::nota
Para más información haz click [aquí](https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Además, podemos configurar manualmente la velocidad del ventilador usando la herramienta **jtop**.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>


<!-- ### Expansion Connector -->


<!-- ## Expansion Board -->

<!-- ### Network -->

<!-- ### USB -->

<!-- ### CAN -->

<!-- ### I2C -->

<!-- ### SPI -->


## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
