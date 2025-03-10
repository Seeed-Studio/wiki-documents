---
description: Getting Started with Seeed Studio XIAO ESP32S3 Series.
title: Introducción a la serie XIAO ESP32S3 de Seeed Studio
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_getting_started
last_update:
  date: 02/11/2025
  author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comenzando con la serie XIAO ESP32S3 de Seeed Studio

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Seeed Studio XIAO ESP32S3 Sense</th>
			<th>Seeed Studio XIAO ESP32S3 Plus</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


## Introducción

La serie XIAO de Seeed Studio son pequeñas placas de desarrollo, que comparten una estructura de hardware similar, con un tamaño literalmente del tamaño de un pulgar. El nombre en clave "XIAO" representa su característica "Tiny" (pequeño) y la otra mitad será "Puissant" (potente).  

Seeed Studio XIAO ESP32S3 Sense integra un sensor de cámara, micrófono digital y soporte para tarjeta SD. Combinando el poder de cómputo ML embebido y la capacidad fotográfica, esta placa de desarrollo puede ser una excelente herramienta para comenzar con inteligencia artificial en voz y visión.

### Especificaciones

<table align="center">
	<tr>
	    <th>Item</th>
	    <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3</th>
        <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Sense</th>
		<th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Plus</th>
	</tr>
	<tr>
	    <th>Procesador</th>
	    <td align="center" colspan="3">ESP32-S3R8 <br></br> Xtensa LX7 dual-core, procesador de 32-bit que opera hasta 240 MHz </td>
	</tr>
	<tr>
	    <th>Wireless</th>
	    <td align="center" colspan="3">Subsistema Wi-Fi completo de 2.4GHz <br></br> BLE: Bluetooth 5.0, Bluetooth mesh</td>
	</tr>
    <tr>
	    <th>Built-in Sensors</th>
	    <td align="center"> - </td>
        <td align="center">sensor de cámara OV2640 de 1600*1200 <br></br> Micrófono digital</td>
		<td align="center"> - </td>
	</tr>
    <tr>
	    <th>Memory</th>
	    <td align="center">On-chip 8M PSRAM & 8MB Flash</td>
        <td align="center">On-chip 8M PSRAM & 8MB Flash <br></br> Ranura de tarjeta SD, compatible con SD FAT de 32GB</td>
		<td align="center">On-chip 8M PSRAM & <strong>16MB</strong> Flash</td>
	</tr>
    <tr>
	    <th>Interfaz</th>
	    <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x User LED, 1x Charge LED  <br></br> 1x Reset button, 1x Boot button</td>
        <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x User LED, 1x Charge LED, 1x Conector B2B (con 2 GPIOs adicionales), 1x Botón de reinicio, 1x botón de Booteo</td>
		<td><strong>2</strong>x UART, 1x IIC, 1x IIS, <strong>2</strong>x SPI, <strong>18</strong>x GPIOs (PWM), 9x ADC, 1x User LED, 1x Charge LED, 1x Conector B2B, 1x Botón de reinicio, 1x Botón de Booteo</td>
	</tr>
    <tr>
	    <th>Dimensiones</th>
	    <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8 x 15mm (con placa de expansión)</td>
		<td align="center">21 x 17.8mm</td>
	</tr>
    <tr>
	    <th rowspan="5">Power</th>
	    <td colspan="3" align="center">Voltaje de entrada (Type-C): 5V <br></br> Voltaje de entrada (BAT): 4.2V</td>
	</tr>
    <tr>
	    <td>Voltaje de operación del circuito  (Listo para operar): <br></br> - Type-C: 5V@<strong>19mA</strong> <br></br> - BAT: 3.8V@<strong>22mA</strong></td>
        <td>Voltaje de funcionamiento del circuito  (Listo para operar): <br></br> - Type-C: 5V@<strong>38.3mA</strong> <br></br> - BAT: 3.8V@<strong>43.2mA</strong> (con placa de expansión)</td>
		<td>Voltaje de funcionamiento del circuito  (Listo para operar): <br></br> - Type-C: 5V@<strong>28mA</strong> <br></br> - BAT: 3.8V@<strong>35mA</strong></td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td align="center">Aplicación Webcam Web: <br></br> - Type-C: <br></br> - - Consumo promedio de energía: 5V/<strong>138mA</strong> <br></br> - - Momento de la foto: 5V/<strong>341mA</strong> <br></br> - Battery: <br></br> - - Consumo promedio de energía: 3.8V/<strong>154mA</strong> <br></br> - - Momento de la foto: 3.8V/<strong>304mA</strong></td>
		<td align="center"> - </td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td align="center">Grabación de micrófono y grabación en tarjeta SD:  <br></br> - Type-C: <br></br> - - Consumo promedio de energía: 5V/<strong>46.5mA</strong> <br></br> - - Consumo de energía máxima: 5V/<strong>89.6mA</strong> <br></br> - Battery: <br></br> - - Consumo promedio de energía: 3.8V/<strong>54.4mA</strong> <br></br> - - Consumo de energía máxima: 3.8V/<strong>108mA</strong></td>
		<td align="center"> - </td>
	</tr>
    <tr>
		<td align="center" colspan="3">Carga de corriente de batería: <strong>100mA</strong></td>
	</tr>
    <tr>
        <th>Low Power Consumption Model</th>
        <td>Modem-sleep Model: <strong>3.8V/25 mA</strong> <br></br> Light-sleep Model: <strong>3.8V/2 mA</strong> <br></br> Deep Sleep Model: <strong>3.8V/14 μA</strong></td>
        <td>Without any peripherals: <br></br> - Modem-sleep Model: <strong>3.8V/25.5 mA</strong> <br></br> - Light-sleep Model: <strong>3.8V/2.4 mA</strong> <br></br> - Deep Sleep Model: <strong>3.8V/63.768 μA</strong> <br></br> Connect the camera: <br></br> - Modem-sleep Model: <strong>3.8V/44.57 mA</strong> <br></br> - Light-sleep Model: <strong>3.8V/5.47 mA</strong> <br></br> - Deep Sleep Model: <strong>3.8V/3.00 mA</strong> <br></br> Connecting an SD Card: <br></br> - Modem-sleep Model: <strong>3.8V/32.8 mA</strong> <br></br> - Light-sleep Model: <strong>3.8V/3.48 mA</strong> <br></br> - Deep Sleep Model: <strong>3.8V/1.08 mA</strong><br></br> Simultaneously connect the camera and the SD card: <br></br> - Modem-sleep Model: <strong>3.8V/55.72 mA</strong> <br></br> - Light-sleep Model: <strong>3.8V/6.56 mA</strong> <br></br> - Deep Sleep Model: <strong>3.8V/3.98 mA</strong></td>
		<td>Modem-sleep Model: <strong>3.8V/26.5 mA</strong> <br></br> Light-sleep Model: <strong>3.8V/2.2 mA</strong> <br></br> Deep Sleep Model: <strong>3.8V/69 μA</strong></td>
    </tr>
    <tr>
        <th>Consumo de energía con Wi-Fi habilitado</th>
        <td align="center">Active Model: <strong>~ 100 mA</strong></td>
        <td align="center">Active Model: <strong>~ 110 mA</strong> (con tarjeta de expansión)</td>
		<td align="center">Active Model: <strong>~ 85 mA</strong></td>
    </tr>
    <tr>
        <th>Consumo de energía con BLE habilitado</th>
        <td align="center">Active Model: <strong>~ 85 mA</strong></td>
        <td align="center">Active Model: <strong>~ 102 mA</strong> (con tarjeta de expansión)</td>
		<td align="center">Active Model: <strong>~ 77 mA</strong></td>
    </tr> 
    <tr>
        <th>Temperatura de trabajo</th>
        <td colspan="3" align="center">-40°C ~ 65°C</td>
    </tr>
</table>

### Características

- **Placa MCU Potente**: Incorpora el chip procesador de 32 bits y doble núcleo ESP32S3, Xtensa, con un rendimiento de hasta 240 MHz, con múltiples puertos de desarrollo, compatible con Arduino / MicroPython.
- **Funcionalidad Avanzada** (para Sense): Sensor de cámara OV2640 desmontable para resolución de 1600x1200, compatible con el sensor de cámara OV5640, integrando micrófono digital adicional.
- **Diseño de Potencia Elaborado**: Capacidad de gestión de carga para batería de litio, ofrece 4 modelos de consumo de energía que permiten el modo de sueño profundo con un consumo tan bajo como 14μA.
- **Gran Memoria para más Posibilidades**: Ofrece 8MB de PSRAM y 8MB de FLASH (16MB en la versión **Plus**), soportando una ranura para tarjeta SD para memoria externa de 32GB FAT (solo para XIAO ESP32S3).
- **Rendimiento RF Sobresaliente**: Soporta comunicación inalámbrica dual 2.4GHz Wi-Fi y BLE, soporta comunicación remota de más de 100m cuando se conecta con antena U.FL.
- **Diseño Compacto del Tamaño de un Pulgar**: 21 x 17.8mm, adoptando el factor de forma clásico de XIAO, adecuado para proyectos con limitación de espacio, como dispositivos portátiles.

## Visión General del Hardware

Antes de comenzar, es importante tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características de Seeed Studio XIAO ESP32S3.

<Tabs>
<TabItem  value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
	<tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense diagrama de indicación delantero</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense diagrama de indicación trasero</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense Lista de Pines</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus" default>

<table align="center">
	<tr>
		<th>XIAO ESP32S3 Plus diagrama de indicación delantero</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
		" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
		<th>XIAO ESP32S3 Plus diagrama de indicación trasero</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
		" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	<th>XIAO ESP32S3 Plus Lista de Pines</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
		" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

:::tip
El conector B2B del XIAO ESP32S3 Plus es compatible con la [placa de expansión Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html), pero no con la placa de sensor de cámara Plug-in.
:::

</TabItem>

</Tabs>

- 5V: Esta es la salida de 5V desde el puerto USB. También puedes usarla como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, señal, o de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo hacia la batería y el cátodo hacia el pin de 5V.
- 3V3: Esta es la salida regulada del regulador a bordo. Puedes extraer hasta 700mA.
- GND: Tierra de alimentación/datos/señales.

### Pines de Configuración (Strapping Pins)

En cada inicio o reinicio, el chip necesita algunos parámetros de configuración inicial, como en qué modo de arranque cargar el chip, el voltaje de la memoria flash, etc. Estos parámetros se pasan a través de los pines de configuración. Después del reinicio, los pines de configuración funcionan como pines de entrada/salida regulares.

Los parámetros controlados por los pines de configuración dados en el reinicio del chip son los siguientes:

- **Modo de arranque del chip** – GPIO0 y GPIO46
- **Voltaje de VDD_SPI** – GPIO45
- **Impresión de mensajes ROM** – GPIO46
- **Fuente de señales JTAG** – GPIO3

GPIO0, GPIO45 y GPIO46 están conectados a los resistores internos de pull-up/pull-down débiles del chip en el reinicio del chip.
Estos resistores determinan los valores predeterminados de los pines de configuración. También determinan los valores de los bits si los pines de configuración están conectados a un circuito externo de alta impedancia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

Para cambiar los valores de los bits, los pines de configuración deben estar conectados a resistencias externas de pull-down/pull-up. Si el ESP32-S3 se utiliza como un dispositivo por un MCU host, los niveles de voltaje de los pines de configuración también pueden ser controlados por el MCU host.

Todos los pines de configuración tienen registros de retención (latches). Al reiniciar el sistema, los registros de retención muestrean los valores de los bits de sus respectivos pines de configuración y los almacenan hasta que el chip se apague o se apague completamente. Los estados de los registros de retención no pueden ser cambiados de ninguna otra manera. Esto permite que los valores de los pines de configuración estén disponibles durante toda la operación del chip, y los pines se liberan para ser utilizados como pines de entrada/salida regulares después del reinicio.

En cuanto a los requisitos de tiempo para los pines de configuración, existen parámetros como el tiempo de configuración (setup time) y el tiempo de retención (hold time).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>


## Comenzando

Para que puedas comenzar con el XIAO ESP32S3 más rápido, por favor lee la preparación de hardware y software a continuación para preparar el XIAO.

### Procedimiento de fábrica

Programamos previamente cada XIAO ESP32S3 y XIAO ESP32S3 Sense con un programa de fábrica simple.

1. **XIAO ESP32S3**

El programa de fábrica preestablecido en la versión estándar es el programa de encendido de luces del pin táctil. Cuando enciendas el XIAO, toca algunos de sus pines y el indicador naranja de usuario se encenderá.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

El XIAO ESP32S3 Sense se envía con el programa de muestra WebCam preinstalado. Puedes usar este programa al proporcionar una buena instalación de antena al XIAO y encenderlo. Para más detalles, puedes leer la Wiki sobre este programa.

- [Video Streaming](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage#project-ii-video-streaming)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### Preparación de Hardware

#### Soldadura de pines

El XIAO ESP32S3 se envía sin pines soldados por defecto. Debes preparar tus propios pines y soldarlos a los pines correspondientes del XIAO para poder conectarlo a la placa de expansión o sensor.

Debido al tamaño miniatura del XIAO ESP32S3, ten mucho cuidado al soldar los pines. No conectes diferentes pines entre sí ni pongas soldadura en el escudo u otros componentes. De lo contrario, esto podría causar un cortocircuito en el XIAO o que no funcione correctamente, y las consecuencias de esto serán responsabilidad del usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### Instalación de la antena

En la parte inferior izquierda del frente del XIAO ESP32S3, hay un conector separado para la "Antena WiFi/BT". Para obtener una mejor señal de WiFi/Bluetooth, debes sacar la antena del paquete e instalarla en el conector.

Hay un pequeño truco para la instalación de la antena. Si presionas directamente con fuerza, te será muy difícil hacerlo y te lastimarás los dedos. La forma correcta de instalar la antena es colocar un lado del conector de la antena en el bloque del conector primero, luego presionar un poco el otro lado, y la antena se instalará.

Para quitar la antena, también es importante no usar fuerza bruta para jalarla directamente. Levanta un lado con cuidado y la antena saldrá fácilmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### Instalación de las placas de expansión (para Sense)

Si has adquirido el XIAO ESP32S3 Sense, también deberías incluir una placa de expansión. Esta placa de expansión tiene un sensor de cámara OV2640 de 1600*1200, una ranura para tarjeta SD integrada y un micrófono digital.

Al instalar la placa de expansión con el XIAO ESP32S3 Sense, podrás utilizar las funciones de la placa de expansión.

Instalar la placa de expansión es muy sencillo, solo debes alinear el conector de la placa de expansión con el conector B2B en el XIAO ESP32S3, presionarlo firmemente y escuchar un "clic", lo que indica que la instalación ha sido completada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Ahora tenemos una nueva cámara potente completamente compatible con XIAO ESP32S3 Sense, la OV5640, disponible en nuestras estanterías. Si la adquieres, podrás reemplazar la cámara original y utilizar esta nueva.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
</div>

Si necesitas conocer la información detallada sobre los parámetros de la OV5640, puedes consultar el siguiente diagrama.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Todos los programas relacionados con cámaras en la Wiki son compatibles tanto con las cámaras OV5640 como con las OV2640.
:::

#### Instalación del disipador de calor mejorado

Asegura una refrigeración óptima para tu XIAO ESP32S3 Sense instalando nuestro disipador de calor mejorado. Este nuevo diseño está hecho para abordar las deficiencias de refrigeración observadas con los modelos anteriores, especialmente durante operaciones intensivas como el uso de la cámara. Los comentarios señalaron que el disipador de calor original no disipaba adecuadamente el calor, lo que llevó al desarrollo de una solución más eficaz.

<details><summary>Haz click para ver la comparación de rendimiento</summary>

Nuestra prueba ha demostrado los beneficios del disipador de calor mejorado frente a la configuración original:

| Muestra de prueba     | Temperatura máxima en la parte posterior |
| --------------------- | ---------------------------------------- |
| **Sin disipador de calor** | 63.6°C                                   |
| **Con disipadores de calor dobles** | 53.5°C (🔻10°C)                     |

***Detalles de la prueba:***
- **Entorno**: Sala con aire acondicionado (aproximadamente 27°C)
- **Herramienta de medición de temperatura**: Termopar OMEGA CL3515R
- **Ubicación de medición**: Almohadilla térmica en la parte posterior de XIAO ESP32S3
- **Firmware de prueba**: WebCamera
- **Fuente de alimentación**: Tipo-C 5V
- **Duración de operación**: 1 hora

***Resultado clave:***
- El dispositivo equipado con el disipador de calor mantuvo una operación estable durante más de una hora, alcanzando su temperatura máxima sin degradación del rendimiento.
- Durante las pruebas con la WebCamera en modo SVGA (800x600):
  - El XIAO ESP32S3 funcionó de manera fluida.
  - La salida de video fue continua.
  - Se redujo significativamente la temperatura, asegurando un rendimiento confiable sin caídas de cuadros ni desconexiones.

</details>




***Reúne los siguientes elementos antes de comenzar la instalación:***

- Disipador de calor seleccionado (individual o doble)
- Un ESP32S3 limpio

Asegúrate de que tu dispositivo esté apagado y desconectado de cualquier fuente de alimentación antes de comenzar.

:::tip notice

***Nota de compra:*** Al comprar tu XIAO ESP32S3 Sense, es importante tener en cuenta que solo los **modelos equipados con una cámara** incluyen el disipador de calor. Si tienes una versión del ESP32S3 que no incluye cámara, necesitarás comprar el disipador de calor por separado.

***Consejo de instalación:*** Prioriza cubrir el PAD térmico con el disipador de calor, ya que está directamente sobre el chip ESP32S3, la principal fuente de calor. Asegúrate de alinear correctamente el disipador para garantizar una disipación óptima del calor, y ten en cuenta que los pines BAT deben permanecer lo más despejados posible.
:::

Ahora, comencemos con el proceso de instalación:

***Paso 1. Preparar el disipador de calor:***
Comienza retirando la cubierta protectora del disipador de calor para exponer el adhesivo térmico. Esto preparará el disipador para una sujeción segura al chip ESP32S3.

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***Paso 2. Ensamblar el disipador de calor:***

<Tabs>
  <TabItem value="single" label="Single Heat Sink" default>

Esta opción más pequeña y compacta es suficiente para un uso regular y permite un acceso completo a todos los pines GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="Dual Heat Sinks">

La opción más grande ofrece una refrigeración superior, lo que es ideal para tareas de alto rendimiento, pero puede limitar el acceso a algunos pines GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>


:::note
Si deseas usar el pin BAT del XIAO ESP32S3 Plus, este caso con disipador de calor doble no es adecuado para ello.
:::

  </TabItem>
</Tabs>

***Paso 3: Inspección final y pruebas***

Después de la instalación, asegúrate de que todo esté bien asegurado sin riesgo de cortocircuitos. Verifica que el disipador de calor esté correctamente alineado y bien sujeto.

### Preparación del software

La herramienta de programación recomendada para el XIAO ESP32S3 es el IDE de Arduino, por lo que, como parte de la preparación del software, necesitarás completar la instalación de Arduino.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Introducción a Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

- ****Paso 1:** Descarga e instala la versión estable de Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descarga Arduino IDE</font></span></strong>
    </a>
</div>

- **Paso 2.** Abre la aplicación de Arduino.

- **Paso 3.** Agrega el paquete de placas ESP32 a tu IDE de Arduino.

<Tabs>
<TabItem value='For Windows'>

Ve a **Archivo > Preferencias**, y llena el campo **"URLs adicionales del gestor de placas"** con la siguiente URL:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

Ve a **Herramientas > Placa > Gestor de Placas...**, escribe **esp32** en el cuadro de búsqueda, selecciona la última versión de **esp32** e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
El paquete de placa para XIAO ESP32S3 requiere la versión **2.0.8** o superior para estar disponible.
:::

- **Paso 4.** Selecciona tu placa y puerto.

En la parte superior del IDE de Arduino, puedes seleccionar el puerto directamente. Este probablemente será COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos seriales de hardware).

</TabItem>
<TabItem value='For Mac OS'>

Ve a **Arduino IDE > Preferencias** y llena el campo **"URLs adicionales del gestor de placas"** con la siguiente URL:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Ve a **Herramientas > Placa > Gestor de Placas...**, escribe la palabra clave **esp32** en el cuadro de búsqueda, selecciona la versión más reciente de **esp32** e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
El paquete de placa para XIAO ESP32S3 requiere que la versión **2.0.8** o superior esté disponible.
:::

- **Paso 4.** Selecciona tu placa y puerto.

En la parte superior de la IDE de Arduino, puedes seleccionar directamente el puerto. Probablemente será el que tenga "usbmodem" o "usbserial" en el nombre. Si no estás seguro, desconéctalo y vuelve a conectarlo para ver cuál puerto desaparece.

</TabItem>
</Tabs>

<!-- :::tip
Ahora hemos enviado una solicitud de fusión a ESP32 y podremos buscar y usar XIAO ESP32S3 en la IDE de Arduino cuando ESP32 publique la próxima actualización del paquete integrado.

Hasta entonces, puedes agregar manualmente el paquete integrado de XIAO ESP32S3 al directorio de Arduino para usarlo.

:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip"><strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Paquete</font></span></strong></a></div>

Después de descargar el archivo zip anterior, descomprímelo y verás dos archivos. Uno es la **carpeta XIAO_ESP32S3**, y el otro es **boards.txt**.

- **En PC con Windows**

    La ruta predeterminada de almacenamiento del paquete integrado para ESP32 en Windows es:

    `C:\Users\${NombreDeUsuario}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    Debes copiar el archivo **boards.txt** descargado a la ruta anterior, reemplazando el archivo **boards.txt** original en esa ruta.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${NombreDeUsuario}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    Luego ve a la **carpeta variants** y copia la **carpeta XIAO_ESP32S3** allí.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **En PC con MacOS**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    Debes copiar el archivo **boards.txt** descargado a la ruta anterior, reemplazando el archivo **boards.txt** original en esa ruta.

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    Luego ve a la **carpeta variants** y copia la **carpeta XIAO_ESP32S3** allí.

- **Paso 4.** Cierra la IDE de Arduino y vuelve a abrirla.-->

<Tabs>
<TabItem value="(Sense)" label="for XIAO ESP32S2 (Sense)" default>

También, busca **xiao** en la lista de placas de desarrollo a la izquierda y selecciona **XIAO_ESP32S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="for XIAO ESP32S3 Plus" default>

Se lanzará pronto; quedate pendiente para futuras actualizaciones.

</TabItem>
</Tabs>

Con esta preparación, ya puedes comenzar a escribir programas para el XIAO ESP32S3, compilar y cargar.

### Modo BootLoader

A veces, usar el programa incorrecto puede causar que el XIAO pierda su puerto o no funcione correctamente. Los problemas más comunes son:

- El XIAO está conectado al ordenador, pero *no se encuentra el número de puerto*.
- El XIAO está conectado y aparece un número de puerto, pero *la carga del programa falla*.

Cuando te enfrentes a estas dos situaciones, puedes intentar poner el XIAO en modo BootLoader, lo cual resuelve la mayoría de los problemas de dispositivos no reconocidos y fallos de carga. El método específico es:

- **Paso 1**. Mantén presionado el botón `BOOT` del XIAO ESP32S3 sin soltarlo.
- **Paso 2**. Sigue manteniendo presionado el botón `BOOT` y luego conecta el cable de datos al ordenador. Suelta el botón `BOOT` después de conectar el XIAO al ordenador.
- **Paso 3**. Carga el programa **Archivo > Ejemplos > 01.Basics > Blink** para verificar el funcionamiento del XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### Reinicio

Cuando el programa funcione de manera anormal, puedes presionar el botón `Reset` una vez durante el encendido para que el XIAO vuelva a ejecutar el programa cargado.

Si mantienes presionado el botón `BOOT` mientras enciendes el dispositivo y luego presionas el botón `Reset`, también podrás ingresar al modo BootLoader.

## Ejecuta tu primer programa Blink

Ahora que tienes una buena comprensión de las características y el hardware del XIAO ESP32S3, vamos a tomar el programa más sencillo, Blink, como ejemplo y realizar el primer parpadeo para tu XIAO ESP32S3.

- **Paso 1.** Abre la aplicación Arduino.
- **Paso 2.** Ve a **Archivo > Ejemplos > 01.Basics > Blink** y abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de la placa como **XIAO ESP32S3** y elige el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el programa se haya cargado con éxito, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO ESP32S3 parpadea.

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
	</tr>
</table>

¡Felicidades, has aprendido a escribir y cargar programas para el XIAO ESP32S3!

:::note
La LED solo se apagará cuando el pin de la LED del usuario en el XIAO ESP32S3 esté configurado a un nivel alto, y solo se encenderá cuando el pin esté configurado a un nivel bajo.
:::

## Uso de la batería

La serie XIAO ESP32S3 cuenta con un chip de gestión de energía integrado que permite alimentar el XIAO ESP32S3 de forma independiente mediante una batería o cargar la batería a través del puerto USB del XIAO ESP32S3.

Si deseas conectar la batería al XIAO, te recomendamos que adquieras una batería recargable de litio de 3.7V de buena calidad. Al soldar la batería, por favor ten cuidado de distinguir los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe estar en el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación debe estar en el lado opuesto al puerto USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
Dado que todos los pines GPIO del XIAO ESP32S3 tienen funciones asignadas, no tenemos un GPIO configurado para el pin de la batería. Esto significa que no podemos obtener el voltaje de la batería a nivel de software leyendo el valor analógico de uno de los GPIO. Si es necesario, puedes considerar conectar los terminales positivo y negativo de la batería a dos de los pines para medir el voltaje de la batería.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
Cuando utilizas energía de la batería, no habrá voltaje en el pin de 5V.
:::

Igualmente, diseñamos una luz indicadora roja para la carga de la batería, la cual informa al usuario sobre el estado actual de la batería durante la carga.

1. Cuando el XIAO ESP32S3 no está conectado a la batería, la luz roja se enciende al conectar el cable Tipo-C y se apaga después de 30 segundos.
2. La luz roja parpadea cuando la batería está conectada y el cable Type-C está conectado para cargar.
3. Al conectar el Tipo-C para cargar la batería completamente, la luz roja se apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

Entendemos que algunos usuarios desean flashear archivos UF2 directamente al XIAO, lo que permitirá el proceso de flasheo por lotes de programas. A continuación, describimos este método.

<Tabs>
<TabItem value="method1" label="Method I" default>

:::note
Este método actualmente solo está disponible en los sistemas de Windows.
:::

**Paso 1**: Descargar y extraer el script

Descarga el archivo zip del script requerido y extrae su contenido a tu máquina local:

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**Paso 2**: Convertir archivos BIN a archivos UF2

Después de compilar y guardar un programa en Arduino, puedes exportar el archivo binario `BIN`. Este archivo se generará en la carpeta de tu proyecto de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

Copia el archivo `BIN` en el directorio **xiaos3-bin2uf2** que extrajiste previamente. Luego, ejecuta el script **convert_uf2.bat** para generar un archivo UF2, el cual requerirá el nombre de tu archivo `bin`.

**Paso 3**: Entrar en el modo UF2 BootLoader

Conecta el XIAO a tu computadora y ejecuta el script **boot_uf2.bat**. El XIAO aparecerá en tu computadora como una unidad USB, lo que indica que ha entrado correctamente en el modo UF2 BootLoader.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**Paso 4**: Copiar el archivo UF2 al XIAO ESP32S3

Accede a la unidad USB del XIAO ESP32S3 y copia el archivo UF2 convertido. Una vez que la copia se haya completado, la unidad USB del XIAO desaparecerá automáticamente y el programa comenzará a ejecutarse.

:::tip
1. Asegúrate de que tu programa esté compilado y funcionando correctamente; de lo contrario, el archivo UF2 puede no ejecutarse como se espera.
2. Un archivo UF2 de muestra para el programa Blink se proporciona en la carpeta **xiaos3-bin2uf2**. Cuando se cargue, el LED naranja del XIAO ESP32S3 comenzará a parpadear. Puedes usar este archivo UF2 como prueba.
:::

**Paso 5**: Volver a ingresar al modo UF2 BootLoader

Si necesitas volver a ingresar al modo UF2 BootLoader para cargar otro archivo UF2, presiona rápidamente el botón **Reset** seguido del botón **Boot**. No es necesario ejecutar nuevamente el script **boot_uf2.bat**.

:::note
Prensa Reset, luego Boot, ¡rápidamente!
:::

</TabItem>

<TabItem value="method2" label="Method II" >

El proyecto consiste en personalizar el cargador de arranque de segunda etapa de IDF y la aplicación de fábrica UF2 como cargador de arranque de tercera etapa.

**Nota:** Dado que IDF se desarrolla activamente y cambia con frecuencia, se incluye como submódulo en **lib/esp-idf**. Por favor, ejecuta el script de exportación allí para configurar correctamente tu entorno.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div>

</TabItem>
</Tabs>

## Solución de problemas

### P1: ¿Qué debo hacer si la carga del programa falla/el programa no funciona correctamente/no se encuentra el puerto del dispositivo?

Si encuentras el problema mencionado, se recomienda intentar presionar el botón de reinicio en el XIAO ESP32S3 para intentar que el programa se ejecute nuevamente. Si el problema persiste, revisa nuevamente tu programa y sigue los métodos proporcionados en **[Modo BootLoader](#bootloader-mode)** para restaurar el dispositivo.

### P2: ¿Por qué mi XIAO tiene el problema de no estar plano en las esquinas redondeadas? ¿Es esto un problema de calidad?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

Primero que todo, debe tenerse en cuenta que esto no es un problema de calidad y no afectará el funcionamiento normal del XIAO.

El XIAO ESP32S3 es el más complejo de todos los XIAO debido a su alta integración, y la PCB debe ensamblarse durante la producción en fábrica. Debido al alto nivel de integración, la conexión de la placa de unión solo puede colocarse en las cuatro esquinas redondeadas, lo que lleva al problema de las esquinas desiguales que se ve en la imagen. Intentaremos mejorar el proceso para garantizar que este problema se resuelva en la producción futura.

### P3: ¿Cómo flashear el firmware de fábrica a XIAO ESP32S3 proporcionado en la sección de recursos?

El script proporcionado en la sección de recursos es compatible con Windows. Después de descargar el archivo zip, encontrarás los siguientes archivos:

<Tabs>
<TabItem value="normal" label="XIAO ESP32S3 Factory firmware" >

```shell
.
├── boot_app0.bin
├── esp32_flasher.py
├── esptool.exe
├── project_config.json
├── xiao_esp32s3_firmware.bin
├── xiao_esp32s3_firmware.bootloader.bin
├── xiao_esp32s3_firmware.partitions.bin
└── xiao_esp32s3_firmware_win.bat
```
</TabItem>
<TabItem value="sense" label="XIAO ESP32S3 Sense Factory firmware" >

```shell
.
├── CameraWebServer.bin
├── boot_app0.bin
├── bootloader.bin
├── esp32_flasher.py
├── esptool.exe
├── partition-table.bin
├── project_config.json
└── xiao_esp32s3_sense_firmware_win.bat
```

</TabItem>
</Tabs>

Para flashear el firmware, simplemente ejecuta el archivo `.bat` correspondiente. Si el proceso de flasheo falla, copia la línea de comando desde el terminal y ejecútala manualmente en la terminal donde se encuentran los archivos.

## Recursos

[PDF] **[ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Para XIAO ESP32S3 de Seeed Studio 

- **[PDF]** [Seeed Studio XIAO ESP32S3 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Dimension in DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle footprint](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D Model](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Certification files](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Certification.zip)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Para XIAO ESP32S3 Sense de Seeed Studio 

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)
- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Factory firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D Model](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 Sense FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


### Para XIAO ESP32S3 Plus de Seeed Studio 


- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.0_SCH_PCB.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD Libraries](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_KiCAD_Library.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus Dimension in DXF (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus Dimension in DXF (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Plus pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD file](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_V1.0_SCH%26PCB_KICAD.zip)
## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### Otros

- **[STP]** [XIAO ESP32S3 Sense housing design (top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense housing design (bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*El material restante de código abierto se está compilando, ¡así que mantente atento!*

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diversos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>