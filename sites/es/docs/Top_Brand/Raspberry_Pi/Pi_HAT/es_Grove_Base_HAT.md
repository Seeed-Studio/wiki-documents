---
description: Grove Base HAT
title: Grove Base HAT
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Base_HAT
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Grove%20Base%20HAT.JPG)

Grove Base HAT es una placa complementaria que lleva los sensores Grove a la Raspberry Pi. Es compatible con Raspberry Pi 2 Model B, Raspberry Pi 3 Model B y Raspberry Pi B+. Tiene cuatro orificios de montaje, que coinciden bien con el tamaño normal de Raspberry Pi. También mantiene el espacio para los cables de la cámara.

## Versión

<table className="tg">
  <tbody><tr>
      <th className="tg-yw4l">Versión del Producto</th>
      <th className="tg-yw42">Cambios</th>
      <th className="tg-yw4l">Fecha de Lanzamiento</th>
    </tr>
    <tr>
      <td className="tg-4eph">Grove Base HAT</td>
      <td className="tg-4eph">Inicial</td>
      <td className="tg-b7b8">15 de diciembre, 2017</td>
    </tr>
  </tbody></table>

## Características

* 2 puertos digitales

* 2 puertos analógicos
* 3 puertos I2C
* 1 puerto UART
* 1 interruptor de alimentación

## Descripción general del hardware

Las imágenes a continuación muestran una descripción general de las características del hardware del Grove Base HAT. El diagrama de pines y las funciones alternativas de varios pines del Grove Base HAT se muestran en el diagrama de pines. Esto podría usarse como referencia rápida.

![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Hardware_overview.jpg)

* **<font face size={5} font color="00b0f0">❶</font>Puerto Digital:**
2 puertos Grove digitales se utilizan para conectar sensores digitales Grove.

* **<font face size={5} font color="00b0f0">❷</font>Puerto Analógico:**
2 puertos Grove analógicos se utilizan para conectar sensores analógicos Grove. Raspberry Pi no soporta señales analógicas. Por lo tanto, utilizamos el chip ADS1015 para transferir la señal ADC a señal I2C.

* **<font face size={5} font color="00b0f0">❸</font>Puerto I2C:**
3 puertos Grove I2C se utilizan para conectar sensores Grove I2C.

* **<font face size={5} font color="00b0f0">❹</font>UART:**
1 puerto Grove UART se utiliza para conectar sensores Grove UART. El UART de Raspberry Pi 3 es utilizado por bluetooth. Por favor sigue [THE RASPBERRY PI UARTS
](https://www.raspberrypi.org/documentation/configuration/uart.md) para habilitar el UART.

* **<font face size={5} font color="00b0f0">❺</font>Interruptor de Alimentación del Sistema:**
El interruptor deslizante se utiliza para cambiar el nivel lógico y el voltaje de operación de la placa a 5V o 3.3V.

* **<font face size={5} font color="00b0f0">❻</font>ADS1015:**
 ADS1015 es un convertidor analógico-digital (ADC) de precisión con 12 bits de resolución. Los datos se transfieren a través de una interfaz serie compatible con I2C.

* **<font face size={5} font color="00b0f0">❼</font>TXS0108:**
Este traductor no inversor de 8 bits utiliza dos rieles de alimentación configurables separados. El puerto A rastrea el voltaje de alimentación del pin VCCA. El pin VCCA acepta cualquier voltaje de alimentación entre 1.2 V y 3.6 V. Los puertos A están conectados a Raspberry. El puerto B rastrea el voltaje de alimentación del pin VCCB. El pin VCCB acepta cualquier voltaje de alimentación entre 1.65 V y 5.5 V. Los puertos B están conectados a sensores Grove.

* **<font face size={5} font color="00b0f0">❽</font>LIBRE:**
Los pines LIBRES no son utilizados por el Grove Base HAT.

## Primeros pasos

### Hardware

* Paso 1. Prepara los siguientes elementos:

| Raspberry pi | Grove base HAT |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Grove%20Base%20HAT_s.JPG)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|

* Paso 2. Conecta el Grove Base HAT al Raspberry.

* Paso 3. Conecta el Raspberry a la PC a través del cable USB.

### Software

* Paso 1. Configura I2C, I2C no está activado por defecto. Podemos usar raspi-config para habilitarlo. Ejecuta "sudo raspi-config".

* Paso 2. Navega hacia abajo hasta 5 interfacing Options y presiona "enter" para seleccionar.
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.1.png)

* Paso 3. Navega hacia abajo hasta P5 I2C y presiona "enter" para seleccionar.
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.2.png)

* Paso 4. Selecciona "Yes" para habilitarlo.
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.3.png)

* Paso 5. Selecciona "Ok".
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.4.png)

* Paso 6. Selecciona "Finish" para guardar los cambios.
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.5.png)

* Paso 7. Descarga [ADS1X15_Driver](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ADS1X15_Driver.zip) a la carpeta /home/pi del Raspberry y descomprime.

```
wget https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ADS1X15_Driver.zip
unzip ADS1X15_Driver.zip
```

* Paso 8. Ve a la carpeta singleended y ejecuta make. Veremos el archivo Singleended resaltado en Verde.

```
pi@raspberrypi:~ $ cd ~/Adafruit_ADS1X15_Linux/examples/singleended
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ make
g++ -o singleended.o -c singleended.cpp -I../../ -W -Wall
g++ -o Singleended singleended.o -lads1015 -L../../
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ ls
Makefile  Singleended  singleended.cpp  singleended.o

```

* Paso 9. Ejecuta singleended para leer los datos.

```
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ ./Singleended
Hello!
Getting single-ended readings from AIN0..3
ADC Range: +/- 6.144V (1 bit = 3mV/ADS1015, 0.1875mV/ADS1115)
AIN0: 4095
AIN1: 4095
AIN2: 4095
AIN3: 4095
```

## Preguntas Frecuentes

Por favor haz clic **[aquí](http://support.seeedstudio.com/knowledgebase/articles/1831468-grove-base-hat-sku-tbd)** para ver todas las preguntas frecuentes de Grove_Base_HAT.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Raspberry%20Pi%20Grove%20Base%20HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[PDF]** [Descargar Wiki PDF](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Grove_Base_HAT.pdf)

* **[Eagle]** [Archivo de esquemático Grove Base HAT](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Raspberry%20Pi%20Grove%20Base%20HAT.zip)
* **[Hoja de datos]** [ADS1015](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ads1015.pdf)
* **[Hoja de datos]** [TXS0108](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/txs0108e.pdf)
* **[PDF]** [Mecánico Grove Base HAT](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/hat-board-mechanical.pdf)
* **[Github]** [HAT](https://github.com/raspberrypi/hats)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

