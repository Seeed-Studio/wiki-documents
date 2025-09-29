---
title: Kit de Enlace Transmisor y Receptor RF - 315MHz/433MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz/
slug: /es/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz
last_update:
  date: 02/03/2022
  author: gunengyu
---

# Kit de Enlace Transmisor y Receptor RF - 315MHz/433MHz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Front-05.png" alt="pir" width={600} height="auto" /></p>


Este es un conjunto de enlace de radiofrecuencia de ultra larga distancia de 315MHz o 433MHz, con tecnología VCO y PLL, frecuencia estable y fuerte capacidad anti-interferencia. Puedes usarlo directamente para tus proyectos, como transmisión inalámbrica de datos y control remoto.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz-p-5077.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Características

- Bajo consumo de energía: 5V aproximadamente 6.0mA / 3.3V aproximadamente 5mA
- Alta sensibilidad de recepción: -110dBm@10kbps
- Larga distancia de emisión: 2km (Área abierta sin interferencia)
- Amplio rango de temperatura: -20~75℃
- Aplicación flexible, compatible con breadboard y PCB
- Fuerte capacidad de supresión de radiación: sin interferencia mutua, sin influencia en la distancia de recepción.

## Especificaciones

| Parámetro             | Valor/Rango  |
|-----------------------|--------------|
| Voltaje de operación  | Transmisor(3-9V),Receptor(3-5V) |
| Corriente de trabajo  | 50mA(9VDC)   |
| Principio de funcionamiento | Superheterodino（VCO, PLL）|
| Modulación            |   OOK/ASK     |
| Banda de trabajo      | 315MHz ; 433.92MHz (servicio de personalización disponible)|
| Temperatura de operación | -20℃ a +75℃ |
| Ancho de banda        | 200KHZ       |
| Sensibilidad         	|-110dBm (50Ω) |
| Tasa de modulación	  |＜10Kbps      |
| Forma de decodificación | PT2272       |
| Longitud de antena	  |18cm(Tx)、24cm (Rx) |
| Distancia de emisión	|2KM(Área abierta sin interferencia)|
| Modos de salida de trabajo	| Desbloqueado, entrelazado, auto-bloqueado|

## Ideas de Aplicación

- Control remoto de interruptor de puerta de automóvil
- Abridor de puerta con control remoto
- Alarma de seguridad inalámbrica
- Máquina de cortinas con control remoto
- Controlador industrial inalámbrico
- Transmisión de datos inalámbrica
- Modelo de control remoto inalámbrico
- Control de juguetes inalámbricos

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Preview-07.png" alt="pir" width={1000} height="auto" /></p>


1.Transmisor-Interfaz de pines: 7PIN (paso: 2.54mm)
2.Receptor-Interfaz de pines: 7PIN (paso: 2.54mm)
3.Antena transmisora(La antena debe estar enderezada durante el uso.)
4.Antena receptora de resorte

## Primeros Pasos

Aquí, usaremos un kit transceptor RF, un LED, un botón interruptor, una placa de desarrollo para proporcionar energía, y algunos cables para lograr una demostración simple de control inalámbrico de encendido y apagado de LED.

- **Paso 1.** Prepare el kit transceptor RF, cables, protoboards o placas de desarrollo, y otros componentes relacionados con las funciones que desea implementar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Component list diagram.png" alt="pir" width={1000} height="auto" /></p>


Tomando como ejemplo nuestra demostración simple de control de iluminación inalámbrica, usaremos:

| Nombre             | Valor|
|--------------------|------|
| Kit transceptor RF |	*1 |
| Protoboards	       |  *1 |
| LED	               |  *1 |
| Interruptor de tecla |	*1 |
| Seeeduino XIAO     |	*1 |
| Cables	             | Algunos |

- **Paso 2.** Sigue las instrucciones a continuación para conectar el sistema de circuito.

**Nota:** Todos los puertos de señal se utilizan en el diagrama a continuación, pero la conexión de circuito real que proporcionamos utiliza solo un puerto.

### Diagrama de conexión

<p style={{textAlign: 'left'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Tx).png" alt="pir" width={390} height="auto" /></p>
<div>
  RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Rx).png" alt="pir" width="360" height="auto"&gt;<p />
</div>


### Diagrama de conexión de circuito real

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Actual_circuit_connection_diagram.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** En esta demostración de control de iluminación inalámbrica RF, utilizamos la placa de desarrollo Seeeduino XIAO (salida de 3.3V) como el sistema de alimentación común, y construimos el módulo transmisor y el módulo receptor en la misma placa. En la práctica, el módulo transceptor remoto generalmente es alimentado por su propia fuente de alimentación. Por ejemplo, puedes usar directamente alimentación de paquete de baterías.

- **Paso 3.** Para suministrar energía al sistema, presiona el interruptor de botón.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Result.png" alt="pir" width={1000} height="auto" /></p>


**Nota:** Puedes cambiar la luz LED en la demostración de control de luz inalámbrica RF por el objeto que deseas controlar, y usar múltiples puertos de señal para lograr el control inalámbrico de una variedad de sistemas de señal.

También puedes usar el Seeedino XIAO en la demostración para lograr más funciones, como conectar un sensor de luz para hacer que la luz se encienda y apague y que el brillo de la luz sea controlado de forma inalámbrica según la intensidad de la luz. Este proceso puede enviar señales sin operación manual.

## Recursos

- **[Hoja de datos]** [Hoja de datos para PT2272 y PT2262](https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/res/Datasheet_for_PT2272_and_PT2262.pdf)


## Soporte Técnico y Discusión de Productos
si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>