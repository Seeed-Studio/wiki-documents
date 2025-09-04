---
description: SenseCAP S2100 LoRaWAN Data Logger
title: SenseCAP S2100 LoRaWAN Data Logger
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
---


# SenseCAP S2100 LoRaWAN Data Logger


<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"/></div>


El SenseCAP S2100 Data Logger es un dispositivo versátil que puede conectarse a sensores MODBUS-RTU RS485/Analógicos/GPIO, permitiendo la transmisión fácil de datos a la red LoRaWAN. Con su diseño LoRa e IP66, este dispositivo cuenta con una estabilidad y confiabilidad impresionantes, y puede cubrir un rango de transmisión largo mientras mantiene un consumo de energía ultra bajo. Es perfecto para uso exterior, y puede ser alimentado por batería o conectado a una fuente de alimentación externa de 12V para mayor flexibilidad. Cuando se conecta a la fuente de alimentación de 12V, la batería incorporada reemplazable actúa como fuente de energía de respaldo. Además, el S2100 Data Logger está optimizado para OTA con Bluetooth incorporado, haciendo que la configuración y actualizaciones sean rápidas y simples. Para completar, el convertidor S2110 permite al S2100 Data Logger conectarse a Sensores Grove, convirtiéndolo en una excelente opción para sensores LoRaWAN de nivel industrial DIY y despliegue a pequeña escala.
<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

# Características
- Fuerte Compatibilidad con diferentes Sensores: soporta todos los sensores MODBUS-RTU RS485/Analógicos(4 ~ 20mA/0~10V) / GPIO(nivel/pulso).
- Compatible con Redes LoRaWAN® Mundiales: Compatible con el protocolo LoRaWAN® V1.0.3 y puede trabajar con gateway LoRaWAN®. (soporta el plan de frecuencia universal de 863MHz ~928MHz).
- Largo Alcance y Alimentado por Batería Reemplazable: Con transmisión inalámbrica LoRaWAN®, S2100 soporta batería incorporada de 19Ah y 12V DC externo para alimentar dispositivos, y rango de transmisión ultra amplio de 2km en escenas urbanas y 10km en escenas de línea de vista.
- Diseñado para Usar en Ambientes Hostiles: temperatura de operación de -40℃ ~ 85℃ y carcasa clasificada IP66, adecuado para uso exterior, alta exposición UV, lluvia intensa, condiciones polvorientas, etc.
- Configuración y gestión remota: Seeed proporciona la APP SenseCAP Mate y SenseCAP Portal, permite a los usuarios gestionar datos remotamente y configurar.

# Especificación
## Interfaz
|Elemento|Valor|
|---|---|
|Entrada de Corriente|4 a 20 mA (2 canales)|
|Entrada de Voltaje|0 a 10V (2 canales)|
|RS485|Protocolo RS485 Modbus-RTU|

## Parámetros Generales

|Elemento|Valor|
|---|---|
|Modelo del Producto|SenseCAP S2100|
|Microcontrolador|Wio-E5|
|Protocolo Soportado|LoRaWAN v1.0.3 Clase A|
|Bluetooth Incorporado|Herramienta de App para cambiar parámetros y establecer algoritmo de conversión de datos|
|Plan de Canal de Largo Alcance|IN865/EU868/US915/AU915/ AS923|
|Potencia Máxima Transmitida|19dBm|
|Sensibilidad|-136dBm@SF12 BW=125KHz|
|Distancia de Comunicación|2 a 10km (dependiendo del ambiente)|
|Clasificación IP|IP66|
|Temperatura de Operación|-40 a +85 °C|
|Humedad de Operación|0 a 100 %RH (sin condensación)|
|Peso del Dispositivo|280g|
|Certificación|CE / FCC / RoHS|

## Batería (Contenida en el equipo)
|Elemento|Valor|
|---|---|
|Vida de la Batería|Hasta 10 años|
|Capacidad de la Batería|19Ah (no recargable)|
|Tipo de Batería|Batería SOCl2 Estándar tamaño D|

# Arquitectura


<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/2.png"/></div>


# Opción de Fuente de Energía

- Opción 1: el data logger puede trabajar en modo Periódico. Alimentado por una batería incorporada de 19Ah Li-SOCl2 estándar tamaño D que es fácil de comprar en línea, puede ser instalado y desplegado en un ambiente exterior sin energía adicional.


- Opción 2: el data logger puede trabajar en modo de Energía Constante con una fuente de alimentación externa de 12V DC. Proporcionamos un Kit de Caja de Conexiones correspondiente para que el data logger pueda ser ensamblado rápidamente.


<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/3.png"/></div>


# Soporta Sensores Industriales de Diferentes Interfaces

S2100 LoRaWAN Data Logger es un recolector de canal único, y solo soporta uno de los siguientes protocolos a la vez:

RS485: Soporta protocolo estándar RS485 Modbus-RTU
Analógico: 2 x 0 ~ 10V o 2 x 4 ~ 20mA.
GPIO: 1 x GPIO, recolecta señal de nivel o pulso

:::tip
Modbus-RTU: Este protocolo utiliza principalmente interfaces seriales RS-232 o RS-485 para comunicaciones y es soportado por cada SCADA comercial, HMI, servidor OPC y programa de software de adquisición de datos en el mercado. Esto hace muy fácil integrar equipos compatibles con Modbus en aplicaciones de monitoreo y control nuevas o existentes.

GPIO: significa Entrada/Salida de Propósito General. Es una interfaz estándar utilizada para conectar microcontroladores a otros dispositivos electrónicos. Por ejemplo, puede ser utilizada con sensores, diodos, pantallas y módulos System-on-Chip.
:::
# Aplicación

<div align="center"><img width="{800}" src="https://wdcdn.qpic.cn/MTY4ODg1NTA2NTM1OTkxNw_136830_-0LyGczsW0uya6Pi_1670038120?w=1280&h=696.6093366093365"/></div>