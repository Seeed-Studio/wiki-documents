---
description: Shield RS-485 para Raspberry Pi
title: Shield RS-485 para Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RS-485_Shield_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/main.jpg)

RS-485 es una solución rentable en redes de comunicación serie. Puede utilizarse hasta velocidades de datos de 10 Mbit/s o distancias de hasta 1200m a velocidades más bajas. Este Shield RS-485 es una placa complementaria estándar para Raspberry Pi. Está integrado con terminal de tornillo simple así como interfaz DB9.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Shield RS-485 para Raspberry Pi | Inicial                                                                                               | Sep 2018      |

## Característica

- Un controlador y un receptor por parte
- Minimización del ruido EMI
- Velocidad de transmisión de hasta 2.5Mbps
- Sin limitación de velocidad de cambio del controlador
- Corriente de cortocircuito limitada
- Aplicaciones a prueba de fallos
- Compatible con Raspberry Pi 3B/3B+/4

<!-- <div class="page"/></div> -->

## Especificación

|Elemento|Valor|
|:---|:---|
|Voltaje de Alimentación de Funcionamiento|3.3V|
|Interfaz|Interfaz RS-485 DB9 X1<br />Interfaz de Tornillo RS-485 X1 <br /> Cabezal Hembra 2×13 Para Raspberry X1<br />  Cabezal Hembra de Expansión 2×13 X1<br />  Interfaz I2C Grove X1|
|Velocidad de Datos|2.5Mbps|
|Número de Receptores en|32|
|Rango de Temperatura de Almacenamiento|-65～160℃|
|Número de Canales|8|
|Resolución|12-Bit|
|Consumo de Energía|Diferente consumo de energía dependiendo de la velocidad de transmisión|
|tamaño|L: 62mm A: 39.2mm H: 21.8mm|
|Peso|23g|
|Tamaño del Paquete|L: 140mm A: 75mm H: 25mm|
|Peso Bruto|42g|

<!-- <div class="page"/></div> -->

## Aplicaciones Típicas

- Transceptores RS-485 de Bajo Consumo
- Traductores de Nivel
- Transceptores para Aplicaciones Sensibles a EMI Redes de Área Local de Control Industrial
- Aplicaciones half-duplex

## Descripción General del Hardware

### Distribución de Pines

**Descripción General**

![Pin_map](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map.jpg)

<!-- <div class="page"/></div> -->

---
**Interfaz RS-485 DB9 e Interfaz RS-485 de Tornillo**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/8.jpg)

La interfaz 485 utiliza transmisión de señal diferencial. Por favor asegúrese de que el puerto A se conecte al puerto A del dispositivo 485, y el puerto B se conecte al puerto B del dispositivo 485.

>485-A: El extremo A del cable de transmisión de datos RS485, conectar al pin A del chip MAX485.  
>485-B: El extremo B del cable de transmisión de datos RS485, conectar al pin B del chip MAX485.  
>GND: Conectar al GND de Raspberry Pi.

[![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg)](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg)

<p style={{textAlign: 'center'}}><font color="green">Puedes hacer clic en la imagen para ver el archivo original</font></p>

Como puedes ver, GPIO14 y GPIO15 se aplican para la transmisión de datos, y usamos GPIO18 como la señal de habilitación.

Para la definición de señales lógicas, por favor consulta la tabla a continuación.

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/function_table.jpg)

---
**Conectores Hembra hacia Raspberry**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/5.jpg)

Usamos un Conector Hembra 2X13 para conectar este módulo a la Raspberry Pi, por favor asegúrate de que los pines estén alineados.

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map_2.jpg)

---
**Conectores Hembra de Extensión**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/6.jpg)

Este Shield RS-485 ocupa 26 pines de Raspberry Pi, y solo 5 pines GPIO se usan realmente. Sacamos estos 26 pines en caso de que necesites esos pines para otros propósitos.

>Lista de GPIO Ocupados

Número GPIO|Función
:---:|---
GPIO02|SDA para Puerto Grove I2C
GPIO03|SCL para Puerto Grove I2C
GPIO14|Conectar al pin **DI** del chip Max485, para transmisión de datos.
GPIO15|Conectar al pin **RO** del chip Max485, para transmisión de datos.
GPIO18|Conectar a los pines **RE** y **DE** del chip Max485, funciona como la señal de habilitación.

---
**Puerto Grove I2C**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/3.jpg)

Hemos reservado la interfaz I2C para que puedas usarla fácilmente con dispositivos I2C. Debe notarse que el VCC de este puerto es 5V, necesitas confirmar si el módulo es compatible con voltaje de 5V.

>SCL: Reloj serie I2C, conectar al GPIO03 de Raspberry Pi.  
>SDA: Datos serie I2C, conectar al GPIO02 de Raspberry Pi.  
>VCC: Conectar al pin 5V de Raspberry Pi.  
>GND: Conectar al pin GND de Raspberry Pi.

<!-- <div class="page"/></div> -->

---
**Chip Max485**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/7.jpg)

Usamos el IC MAX485ESA para este shield, para más detalles sobre este IC, por favor consulta la [Hoja de Datos MAX485](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf)

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

<!-- <div class="page"/></div> -->

## Comenzando

### Hardware

**Materiales requeridos**

|Raspberry pi|Shield RS-485 para Raspberry Pi|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/thumbnail.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html)|

- **Paso 1.** Conecta el Shield RS-485 para Raspberry Pi en la Raspberry Pi.

- **Paso 2.** Conecta el **485-A** al cable 485 A, conecta el **485-B** al cable 485 B.

:::note
    Si el cable está invertido, la comunicación no será posible.
:::

- **Paso 3.** Alimenta la Raspberry Pi con cable micro-usb.

### Software

#### Código de prueba de comunicación

Puedes crear un nuevo archivo python y copiar el siguiente código en el nuevo archivo, o puedes descargar el archivo fuente en el área de descarga de recursos. Luego ejecútalo en tu terminal.

<!-- <div class="page"/></div> -->

**Código de Envío.**

```python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

send_str = "*******rs485888888--\n"

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200)

Tx_Enable = LED(18)
Tx_Enable.on()

while 1:
    ser.write(send_str)
    time.sleep(1)

```

<!-- <div class="page"/></div> -->

**Código de Recepción**

```python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200,timeout=1)
data = ''

Rx_Disable = LED(18)
Rx_Disable.off()

while True:
    str = ser.readall()  
    if str:  
        print str 

```

Necesitas dos shields y dos raspberry para probar el código anterior, o puedes usar la herramienta serial en la PC para comunicarte con tu raspberry pi.

<!-- <div class="page"/></div> -->

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos Eagle del RS-485 Shield para Raspberry Pi](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip)

- **[Zip]** [Código de Prueba en Python](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/Python_test.zip)

- **[PDF]** [Hoja de Datos del MAX485](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf)

- **[PDF]** [Wiki en Formato PDF](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485_Shield_for_Raspberry_Pi.pdf)

## Soporte Técnico y Discusión de Productos

 .
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
