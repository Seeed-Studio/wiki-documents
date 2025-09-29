---
description: Primeros pasos con la serie Seeed Studio XIAO ESP32S3.
title: Primeros pasos con la serie Seeed Studio XIAO ESP32S3
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_getting_started
sku: 113991114, 113991115, 102010671
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con la serie Seeed Studio XIAO ESP32S3


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
			<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
			</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
			<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
			</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
			<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
			</a>
		</div></td>
	</tr>
</table>

## Introducción

La Serie Seeed Studio XIAO son placas de desarrollo diminutas, que comparten una estructura de hardware similar, donde el tamaño es literalmente del tamaño de un pulgar. El nombre en clave "XIAO" aquí representa su característica media "Tiny" (Pequeño), y la otra mitad será "Puissant" (Poderoso).
Seeed Studio XIAO ESP32S3 Sense integra sensor de cámara, micrófono digital y soporte para tarjeta SD. Combinando el poder de cómputo de ML embebido y capacidad de fotografía, esta placa de desarrollo puede ser tu gran herramienta para comenzar con IA de voz y visión inteligente.

:::tip
La **cámara OV2640** ha sido descontinuada, y el subsecuente XIAO ESP32S3 Sense usa el modelo de **cámara OV3660**. Sin embargo, el código de ejemplo Wiki para la cámara aún aplica.
:::
### Especificación

<table align="center">
	<tr>
	    <th>Elemento</th>
	    <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3</th>
        <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Sense</th>
		<th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Plus</th>
	</tr>
	<tr>
	    <th>Procesador</th>
	    <td align="center" colspan="3">ESP32-S3R8 <br></br> Xtensa LX7 dual-core, procesador de 32 bits que opera hasta 240 MHz </td>
	</tr>
	<tr>
	    <th>Inalámbrico</th>
	    <td align="center" colspan="3">Subsistema Wi-Fi completo de 2.4GHz <br></br> BLE: Bluetooth 5.0, Bluetooth mesh</td>
	</tr>
    <tr>
	    <th>Sensores Integrados</th>
	    <td align="center"> - </td>
        <td align="center">Sensor de cámara OV2640 para 1600*1200<br></br> Sensor de cámara OV3660 para 2048*1536<br></br>Micrófono digital</td>
		<td align="center"> - </td>
	</tr>
    <tr>
	    <th>Memoria</th>
	    <td align="center">8M PSRAM integrada y 8MB Flash</td>
        <td align="center">8M PSRAM integrada y 8MB Flash <br></br> Ranura para tarjeta SD integrada, soporta 32GB FAT</td>
		<td align="center">8M PSRAM integrada y <strong>16MB</strong> Flash</td>
	</tr>
    <tr>
	    <th>Interfaz</th>
	    <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x LED de Usuario, 1x LED de Carga  <br></br> 1x Botón de Reset, 1x Botón de Boot</td>
        <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x LED de Usuario, 1x LED de Carga, 1x Conector B2B (con 2 GPIOs adicionales), 1x Botón de Reset, 1x Botón de Boot</td>
		<td><strong>2</strong>x UART, 1x IIC, 1x IIS, <strong>2</strong>x SPI, <strong>18</strong>x GPIOs (PWM), 9x ADC, 1x LED de Usuario, 1x LED de Carga, 1x Conector B2B, 1x Botón de Reset, 1x Botón de Boot</td>
	</tr>
    <tr>
	    <th>Dimensiones</th>
	    <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8 x 15mm (con placa de expansión)</td>
		<td align="center">21 x 17.8mm</td>
	</tr>
    <tr>
	    <th rowspan="5">Alimentación</th>
	    <td colspan="3" align="center">Voltaje de entrada (Type-C): 5V <br></br> Voltaje de entrada (BAT): 4.2V</td>
	</tr>
    <tr>
	    <td>Voltaje de operación del circuito (listo para operar): <br></br> - Type-C: 5V@<strong>19mA</strong> <br></br> - BAT: 3.8V@<strong>22mA</strong></td>
        <td>Voltaje de operación del circuito (listo para operar): <br></br> - Type-C: 5V@<strong>38.3mA</strong> <br></br> - BAT: 3.8V@<strong>43.2mA</strong> (con placa de expansión)</td>
		<td>Voltaje de operación del circuito (listo para operar): <br></br> - Type-C: 5V@<strong>28mA</strong> <br></br> - BAT: 3.8V@<strong>35mA</strong></td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td align="center">Aplicación web de cámara web: <br></br> - Type-C: <br></br> - - Consumo promedio de energía: 5V/<strong>220mA</strong> <br></br> - Batería: <br></br> - - Consumo promedio de energía: 4.2V/<strong>212mA</strong></td>
		<td align="center"> - </td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td align="center">Grabación de micrófono y escritura en tarjeta SD:  <br></br> - Type-C: <br></br> - - Consumo promedio de energía: 5V/<strong>46.5mA</strong> <br></br> - - Consumo pico de energía: 5V/<strong>89.6mA</strong> <br></br> - Batería: <br></br> - - Consumo promedio de energía: 3.8V/<strong>54.4mA</strong> <br></br> - - Consumo pico de energía: 3.8V/<strong>108mA</strong></td>
		<td align="center"> - </td>
	</tr>
    <tr>
		<td align="center" colspan="3">Corriente de carga de batería: <strong>100mA</strong></td>
	</tr>
    <tr>
        <th>Modelo de Bajo Consumo de Energía</th>
        <td>Modelo Modem-sleep: <strong>3.8V/25 mA</strong> <br></br> Modelo Light-sleep: <strong>3.8V/2 mA</strong> <br></br> Modelo Deep Sleep: <strong>3.8V/14 μA</strong></td>
        <td>Sin ningún periférico: <br></br> - Modelo Modem-sleep: <strong>3.8V/25.5 mA</strong> <br></br> - Modelo Light-sleep: <strong>3.8V/2.4 mA</strong> <br></br> - Modelo Deep Sleep: <strong>3.8V/63.768 μA</strong> <br></br> Conectar la cámara: <br></br> - Modelo Modem-sleep: <strong>3.8V/44.57 mA</strong> <br></br> - Modelo Light-sleep: <strong>3.8V/5.47 mA</strong> <br></br> - Modelo Deep Sleep: <strong>3.8V/3.00 mA</strong> <br></br> Conectar una tarjeta SD: <br></br> - Modelo Modem-sleep: <strong>3.8V/32.8 mA</strong> <br></br> - Modelo Light-sleep: <strong>3.8V/3.48 mA</strong> <br></br> - Modelo Deep Sleep: <strong>3.8V/1.08 mA</strong><br></br> Conectar simultáneamente la cámara y la tarjeta SD: <br></br> - Modelo Modem-sleep: <strong>3.8V/55.72 mA</strong> <br></br> - Modelo Light-sleep: <strong>3.8V/6.56 mA</strong> <br></br> - Modelo Deep Sleep: <strong>3.8V/3.98 mA</strong></td>
		<td>Modelo Modem-sleep: <strong>3.8V/26.5 mA</strong> <br></br> Modelo Light-sleep: <strong>3.8V/2.2 mA</strong> <br></br> Modelo Deep Sleep: <strong>3.8V/69 μA</strong></td>
    </tr>
    <tr>
        <th>Consumo de Energía con Wi-Fi Habilitado</th>
        <td align="center">Modelo Activo: <strong>~ 100 mA</strong></td>
        <td align="center">Modelo Activo: <strong>~ 110 mA</strong> (con placa de expansión)</td>
		<td align="center">Modelo Activo: <strong>~ 85 mA</strong></td>
    </tr>
    <tr>
        <th>Consumo de Energía con BLE Habilitado</th>
        <td align="center">Modelo Activo: <strong>~ 85 mA</strong></td>
        <td align="center">Modelo Activo: <strong>~ 102 mA</strong> (con placa de expansión)</td>
		<td align="center">Modelo Activo: <strong>~ 77 mA</strong></td>
    </tr> 
    <tr>
        <th>Temperatura de Trabajo</th>
        <td colspan="3" align="center">-40°C ~ 65°C</td>
    </tr>
</table>

### Características

- **Placa MCU Potente**: Incorpora el chip procesador ESP32S3 de 32 bits, doble núcleo, Xtensa que opera hasta 240 MHz, con múltiples puertos de desarrollo montados, compatible con Arduino / MicroPython
- **Funcionalidad Avanzada** (para Sense): Sensor de cámara **OV2640 desmontable para resolución 1600x1200** y **sensor de cámara OV3660 para 2048x1536** compatible con sensor de cámara OV5640, integrando micrófono digital adicional
- **Diseño de Alimentación Elaborado**: Capacidad de gestión de carga de batería de litio, ofrece 4 modelos de consumo de energía que permite modo de sueño profundo con consumo de energía tan bajo como 14μA
- **Gran Memoria para más Posibilidades**: Ofrece 8MB PSRAM y 8MB FLASH (16MB en versión **Plus**), compatible con ranura para tarjeta SD para memoria FAT externa de 32GB (solo para XIAO ESP32S3)
- **Rendimiento RF Excepcional**: Soporta comunicación inalámbrica dual Wi-Fi 2.4GHz y BLE, soporta comunicación remota de 100m+ cuando se conecta con antena U.FL
- **Diseño Compacto del Tamaño del Pulgar**: 21 x 17.8mm, adoptando el factor de forma clásico de XIAO, adecuado para proyectos con espacio limitado como dispositivos portátiles

<table align="center">
	<tr>
	    <th>Elemento</th>
	    <th style={{width:300, height:'auto'}}>Cámara OV3660</th>
        <th style={{width:300, height:'auto'}}>Cámara OV2640</th>
	</tr>
    <tr>
        <th>Consumo de Energía MÁX en (640*480)</th>
        <td align="center">Modelo Activo: <strong>~ 0.6A</strong></td>
        <td align="center">Modelo Activo: <strong>~ 0.65A</strong></td>
    </tr>
    <tr>
        <th>Consumo de Energía PROM en (640*480)</th>
        <td align="center">Modelo Activo: <strong>~ 0.12A</strong></td>
        <td align="center">Modelo Activo: <strong>~ 0.24A</strong></td>
    </tr> 
    <tr>
        <th>Consumo de Energía MÍN en (640*480)</th>
        <td align="center">Modelo Activo: <strong>~ 0.12A</strong></td>
        <td align="center">Modelo Activo: <strong>~ 0.15A</strong></td>
    </tr> 
</table>

## Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Seeed Studio XIAO ESP32S3.

<Tabs>
<TabItem  value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
	<tr>
	    <th>Diagrama de indicación frontal XIAO ESP32S3/XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Diagrama de indicación trasera XIAO ESP32S3/XIAO ESP32S3 Sense</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Lista de Pines XIAO ESP32S3/XIAO ESP32S3 Sense</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus" default>

<table align="center">
	<tr>
		<th>Diagrama de indicación frontal del XIAO ESP32S3 Plus</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
		" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
		<th>Diagrama de indicación trasera del XIAO ESP32S3 Plus</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
		" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	<th>Lista de pines del XIAO ESP32S3 Plus</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
		" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

:::tip
El conector B2B del XIAO ESP32S3 Plus es compatible con la [placa de extensión Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) pero no con la placa de sensor de cámara Plug-in.
:::

</TabItem>

</Tabs>

### Pines de Alimentación
- 5V - Esta es la salida de 5v del puerto USB. También puedes usar esto como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, señal, potencia) entre tu fuente de alimentación externa y este pin con ánodo a la batería, cátodo al pin 5V.
- 3V3 - Esta es la salida regulada del regulador integrado. Puedes extraer 700mA
- GND - Tierra de alimentación/datos/señal

### Pines de Configuración

En cada inicio o reinicio, un chip requiere algunos parámetros de configuración inicial, como en qué modo de arranque cargar el chip, voltaje de la memoria flash, etc. Estos parámetros se pasan a través de los pines de configuración. Después del reinicio, los pines de configuración operan como pines IO regulares.

Los parámetros controlados por los pines de configuración dados en el reinicio del chip son los siguientes:

- **Modo de arranque del chip** – GPIO0 y GPIO46
- **Voltaje VDD_SPI** – GPIO45
- **Impresión de mensajes ROM** – GPIO46
- **Fuente de señal JTAG** – GPIO3

GPIO0, GPIO45 y GPIO46 están conectados a las resistencias internas débiles de pull-up/pull-down del chip en el reinicio del chip.
Estas resistencias determinan los valores de bit predeterminados de los pines de configuración. Además, estas resistencias determinan los valores de bit si los pines de configuración están conectados a un circuito externo de alta impedancia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

Para cambiar los valores de bit, los pines de configuración deben conectarse a resistencias externas de pull-down/pull-up. Si el ESP32-S3 se usa como dispositivo por un MCU host, los niveles de voltaje de los pines de configuración también pueden ser controlados por el MCU host.

Todos los pines de configuración tienen pestillos. En el reinicio del sistema, los pestillos muestrean los valores de bit de sus respectivos pines de configuración y los almacenan hasta que el chip se apaga o se cierra. Los estados de los pestillos no pueden cambiarse de ninguna otra manera. Esto hace que los valores de los pines de configuración estén disponibles durante toda la operación del chip, y los pines quedan libres para ser usados como pines IO regulares después del reinicio.

Con respecto a los requisitos de temporización para los pines de configuración, hay parámetros como tiempo de configuración y tiempo de retención.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>


## Primeros Pasos

Para permitirte comenzar con el XIAO ESP32S3 más rápido, por favor lee la preparación de hardware y software a continuación para preparar el XIAO.

1. **XIAO ESP32S3**

El programa de fábrica preestablecido en la versión regular es el programa de iluminación por pin táctil. Cuando enciendes el XIAO, toca algunos de sus pines y el indicador de usuario naranja se iluminará.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

El XIAO ESP32S3 Sense se envía con el programa de muestra WebCam preinstalado. Puedes usar este programa dando al XIAO una buena instalación de antena y encendiéndolo. Para detalles, puedes leer el Wiki sobre este programa.

- [Transmisión de Video](https://wiki.seeedstudio.com/es/xiao_esp32s3_camera_usage#project-ii-video-streaming)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### Preparación de Hardware

#### Soldar cabecera

El XIAO ESP32S3 se envía sin cabeceras de pines por defecto, necesitas preparar tus propias cabeceras de pines y soldarlas a los pines correspondientes del XIAO para que puedas conectar a la placa de expansión o sensor.

Debido al tamaño miniatura del XIAO ESP32S3, por favor ten cuidado al soldar las cabeceras, no pegues diferentes pines juntos, y no pegues soldadura al blindaje u otros componentes. De lo contrario, puede causar que el XIAO haga cortocircuito o no funcione correctamente, y las consecuencias causadas por esto serán responsabilidad del usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### Instalación de antena

En la parte inferior izquierda del frente del XIAO ESP32S3, hay un "Conector de Antena WiFi/BT" separado. Para obtener una mejor señal WiFi/Bluetooth, necesitas sacar la antena del interior del paquete e instalarla en el conector.

Hay un pequeño truco para la instalación de la antena, si presionas fuerte directamente sobre ella, encontrarás que es muy difícil de presionar y tus dedos dolerán! La forma correcta de instalar la antena es poner un lado del conector de la antena en el bloque conector primero, luego presionar un poco hacia abajo en el otro lado, y la antena se instalará.

Remover la antena también es el caso, no uses fuerza bruta para tirar de la antena directamente, aplica fuerza en un lado para levantar, la antena es fácil de quitar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### Instalación de placas de expansión (para Sense)

Si estás comprando el XIAO ESP32S3 Sense, entonces también deberías incluir una placa de expansión. Esta placa de expansión tiene un sensor de cámara 1600x1200 OV2640/2048x1536 OV3660, ranura para tarjeta SD integrada y micrófono digital.

Al instalar la placa de expansión con el XIAO ESP32S3 Sense, puedes usar las funciones en la placa de expansión.

Instalar la placa de expansión es muy simple, solo necesitas alinear el conector en la placa de expansión con el conector B2B en el XIAO ESP32S3, presionarlo fuerte y escuchar un "clic", la instalación está completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Ahora tenemos una nueva cámara potente totalmente compatible con XIAO ESP32S3 Sense, la OV5640, en nuestros estantes, y si la compras, puedes reemplazar la cámara para usarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
				</a>
</div>

Si necesitas conocer la información detallada de los parámetros de la ov5640, puedes consultar la siguiente tabla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Todos los programas sobre cámaras en la Wiki son compatibles con las cámaras OV5640, OV2640 y OV3660.
:::

#### Instalación del Disipador de Calor Mejorado

Asegura un enfriamiento óptimo para tu XIAO ESP32S3 Sense instalando nuestro disipador de calor mejorado. Este nuevo diseño está adaptado para abordar las deficiencias de enfriamiento observadas con los modelos anteriores, particularmente durante operaciones intensivas como el uso de la cámara. Los comentarios destacaron que el disipador de calor original no disipaba adecuadamente el calor, lo que llevó al desarrollo de una solución más efectiva.

<details>
<summary>Haz clic para Ver la Comparación de Rendimiento</summary>

Nuestras pruebas han demostrado los beneficios del disipador de calor mejorado sobre la configuración original:

| Muestra de Prueba           | Temperatura Máxima en la Parte Trasera |
| --------------------- | ---------------------------- |
| **Sin Disipador de Calor** | 63.6°C                       |
| **Con Disipadores de Calor Duales** | 53.5°C (🔻10°C)           |

***Detalles de la Prueba:***
- **Entorno**: Habitación con aire acondicionado (aproximadamente 27°C)
- **Herramienta de Medición de Temperatura**: Termopar OMEGA CL3515R
- **Ubicación de Medición**: Almohadilla térmica trasera del XIAO ESP32S3
- **Firmware de Prueba**: WebCamera
- **Fuente de Alimentación**: Tipo-C 5V
- **Duración de Operación**: 1 hora

***Resultado clave:***
- El dispositivo equipado con el disipador de calor mantuvo una operación estable durante más de una hora, alcanzando su temperatura máxima sin degradación del rendimiento.
- Durante las pruebas con la WebCamera en modo SVGA (800x600):
  - El XIAO ESP32S3 operó sin problemas.
  - La salida de video fue fluida.
  - Hubo una reducción significativa en la temperatura, asegurando un rendimiento confiable sin caídas de fotogramas o desconexiones.

</details>

***Reúne los siguientes elementos antes de comenzar la instalación:***

- Disipador de calor seleccionado (simple o doble)
- Un ESP32S3 limpio

Asegúrate de que tu dispositivo esté apagado y desconectado de cualquier fuente de alimentación antes de comenzar.

:::tip notice

***Nota de Compra:*** Al comprar tu XIAO ESP32S3 Sense, es importante tener en cuenta que solo **los modelos equipados con cámara** vienen con un disipador de calor incluido. Si tienes una versión del ESP32S3 que no incluye cámara, necesitarás comprar un disipador de calor por separado.

***Consejo de Instalación:*** Prioriza cubrir la Almohadilla Térmica con el disipador de calor, ya que está directamente sobre el chip ESP32S3, la fuente principal de calor. La alineación adecuada asegura una disipación óptima del calor, y ten en cuenta mantener los pines BAT lo más despejados posible.
:::

Ahora, comencemos el proceso de instalación:

***Paso 1. Preparar el Disipador de Calor:***
Comienza removiendo la cubierta protectora del disipador de calor para exponer el adhesivo térmico. Esto preparará el disipador de calor para una fijación segura al chip ESP32S3.

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***Paso 2. Ensamblar el Disipador de Calor:***

<Tabs>
  <TabItem value="single" label="Disipador de Calor Simple" default>

Esta opción más pequeña y compacta es suficiente para uso regular y permite acceso completo a todos los pines GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="Disipadores de Calor Dobles">

La opción más grande proporciona refrigeración superior, que es ideal para tareas de alto rendimiento pero puede limitar el acceso a algunos pines GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>


:::note
Si quieres usar el pin BAT del XIAO ESP32S3 Plus, este disipador de calor doble no es adecuado para ello.
:::

  </TabItem>
</Tabs>

***Paso 3: Inspección Final y Pruebas***

Después de la instalación, asegúrate de que todo esté correctamente asegurado sin riesgo de cortocircuitos. Verifica que el disipador de calor esté correctamente alineado y firmemente fijado.

### Preparación del Software

La herramienta de programación recomendada para el XIAO ESP32S3 es el Arduino IDE, por lo que como parte de la preparación del software, necesitarás completar la instalación de Arduino.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable del Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

- **Paso 2.** Inicia la aplicación Arduino.

- **Paso 3.** Añade el paquete de placas ESP32 a tu Arduino IDE.

<Tabs>
<TabItem value='For Windows'>

Navega a **Archivo > Preferencias**, y completa **"URLs Adicionales del Gestor de Placas"** con la url de abajo:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

Navega a **Herramientas > Placa > Gestor de placas...**, escribe la palabra clave **esp32** en el cuadro de búsqueda, selecciona la última versión de **esp32** e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
El paquete integrado para XIAO ESP32S3 requiere la versión **2.0.8** o superior para estar disponible.
:::

- **Paso 4.** Selecciona tu placa y puerto.

En la parte superior del IDE de Arduino, puedes seleccionar el puerto directamente. Es probable que sea COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos serie de hardware).

</TabItem>
<TabItem value='Para Mac OS'>

Navega a **IDE de Arduino > Preferencias**, y completa **"URLs adicionales del gestor de placas"** con la url de abajo:

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

Navega a **Herramientas > Placa > Gestor de placas...**, escribe la palabra clave **esp32** en el cuadro de búsqueda, selecciona la última versión de **esp32** e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
El paquete de placa para XIAO ESP32S3 requiere la versión **2.0.8** y superior para estar disponible.
:::

- **Paso 4.** Selecciona tu placa y puerto.

En la parte superior del IDE de Arduino puedes seleccionar directamente el puerto. Probablemente será el que tenga "usbmodem" o "usbserial" en el nombre. Si no estás seguro, desconecta y conecta de nuevo para ver qué puerto falta.

</TabItem>
</Tabs>

<!-- :::tip
Ahora hemos enviado una solicitud de fusión a ESP32 y podremos buscar y usar XIAO ESP32S3 en el IDE de Arduino cuando ESP32 lance la próxima versión de la actualización del paquete de placa.

Hasta entonces, puedes añadir manualmente el paquete de placa XIAO ESP32S3 al directorio de Arduino para usarlo.
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Paquete</font></span></strong></a></div>

Después de haber descargado el zip anterior, por favor descomprímelo y verás dos archivos. Uno es la **carpeta XIAO_ESP32S3**, y el otro es **boards.txt**.

- **En PC Windows**

    La ruta de almacenamiento predeterminada del paquete de placa para ESP32 en Windows es:

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    Necesitamos copiar el archivo **boards.txt** descargado a la ruta anterior, sobrescribiendo el archivo **boards.txt** original en esta ruta.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    Luego ve a la **carpeta variants** y copia la **carpeta XIAO_ESP32S3** en ella.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **En PC MacOS**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    Necesitamos copiar el archivo **boards.txt** descargado a la ruta anterior, sobrescribiendo el archivo **boards.txt** original en esta ruta.

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    Luego ve a la **carpeta variants** y copia la **carpeta XIAO_ESP32S3** en ella.


- **Paso 4.** Cierra el IDE de Arduino y ábrelo de nuevo.-->

<Tabs>
<TabItem value="(Sense)" label="para XIAO ESP32S2 (Sense)" default>

También, busca **xiao** en la placa de desarrollo de la izquierda. selecciona **XIAO_ESP32S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="para XIAO ESP32S3 Plus" default>

Se lanzará pronto; mantente atento a futuras actualizaciones.

</TabItem>
</Tabs>

Con esta preparación, puedes comenzar a escribir programas para XIAO ESP32S3 para compilar y cargar.

### Modo BootLoader

A veces, usar el programa incorrecto puede hacer que el XIAO pierda su puerto o no funcione correctamente. Los problemas comunes incluyen:

- El XIAO está conectado a la computadora, pero *no se encuentra ningún número de puerto*.
- El XIAO está conectado, y aparece un número de puerto, pero *la carga del programa falla*.

Cuando encuentres las dos situaciones anteriores, puedes intentar poner XIAO en modo BootLoader, que puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- **Paso 1**. Presiona y mantén presionado el botón `BOOT` en el XIAO ESP32S3 sin soltarlo.
- **Paso 2**. Mantén presionado el botón `BOOT` y luego conéctalo a la computadora a través del cable de datos. Suelta el botón `BOOT` después de conectar a la computadora.
- **Paso 3**. Carga el programa **Archivo > Ejemplos > 01.Basics > Blink** para verificar el funcionamiento del XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### Reset

Cuando el programa funciona de manera anormal, puedes presionar `Reset` una vez durante el encendido para que XIAO vuelva a ejecutar el programa cargado.

Cuando presionas y mantienes presionada la tecla `BOOT` mientras enciendes y luego presionas la tecla `Reset` una vez, también puedes entrar al modo BootLoader.

### Ejecuta tu primer programa Blink

A estas alturas, creo que tienes una buena comprensión de las características y hardware del XIAO ESP32S3. A continuación, tomemos el programa Blink más simple como ejemplo y realicemos el primer parpadeo para tu XIAO ESP32S3!

- **Paso 1.** Inicia la aplicación Arduino.
- **Paso 2.** Navega a **Archivo > Ejemplos > 01.Basics > Blink**, abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa como **XIAO ESP32S3**, y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el programa se haya cargado exitosamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO ESP32S3 está parpadeando.

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
	</tr>
</table>

¡Felicidades, has aprendido cómo escribir y cargar programas para el XIAO ESP32S3!

:::note
El LED solo se apagará cuando el pin del LED de usuario en el XIAO ESP32S3 se establezca en un nivel alto, y solo se encenderá cuando el pin se establezca en un nivel bajo.
:::

## Uso de Batería

La serie XIAO ESP32S3 tiene un chip de gestión de energía integrado que permite que el XIAO ESP32S3 sea alimentado independientemente usando una batería o cargar la batería a través del puerto USB del XIAO ESP32S3.

Si quieres conectar la batería para XIAO, te recomendamos que compres una batería de litio recargable de 3.7V calificada. Al soldar la batería, ten cuidado de distinguir entre los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe estar en el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación está en el lado alejado del puerto USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
Dado que todos los pines GPIO del XIAO ESP32S3 tienen asignadas sus propias funciones, no tenemos un GPIO configurado para el pin de la batería. esto significa que no podemos obtener el voltaje de la batería a nivel de software leyendo el valor analógico de uno de los GPIOs. Si es necesario, puedes considerar conectar los terminales positivo y negativo de la batería a dos de los pines para medir el voltaje de la batería.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
Cuando uses alimentación por batería, no habrá voltaje en el pin de 5V.
:::

Al mismo tiempo, diseñamos una luz indicadora roja para la carga de la batería, a través de la pantalla de la luz indicadora para informar al usuario del estado actual de la batería en la carga.

1. Cuando el XIAO ESP32S3 no está conectado a la batería, la luz roja se enciende cuando se conecta el cable Type-C y se apaga después de 30 segundos.
2. La luz roja parpadea cuando la batería está conectada y el cable Type-C está conectado para cargar.
3. Cuando se conecta Type-C para cargar completamente la batería, la luz roja se apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

Entendemos que algunos usuarios buscan flashear archivos UF2 directamente al XIAO, lo que habilitará el proceso de flasheo de programas en lote. Aquí describiremos este método.

<Tabs>
<TabItem value="method1" label="Método I" default>

:::note
Este método actualmente solo está disponible en sistemas Windows.
:::

**Paso 1**: Descargar y Extraer el Script

Descarga el archivo zip del script requerido y extráelo a tu máquina local:

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**Paso 2**: Convertir Archivos BIN a Archivos UF2

Después de compilar y guardar un programa de Arduino, puedes exportar el archivo binario `BIN`. Este archivo se generará en tu carpeta de proyecto de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

Copia el archivo `BIN` al directorio **xiaos3-bin2uf2** que extrajiste anteriormente. Luego, ejecuta el script **convert_uf2.bat** para generar un archivo UF2, que requerirá el nombre de tu archivo `bin`.

**Paso 3**: Entrar al Modo UF2 BootLoader

Conecta el XIAO a tu computadora y ejecuta el script **boot_uf2.bat**. El XIAO aparecerá en tu computadora como una unidad USB, indicando que ha entrado exitosamente al modo UF2 BootLoader.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**Paso 4**: Copiar el Archivo UF2 al XIAO ESP32S3

Accede a la unidad USB del XIAO ESP32S3 y copia el archivo UF2 convertido a ella. Una vez que se complete la copia, la unidad USB del XIAO desaparecerá automáticamente, y el programa comenzará a ejecutarse.

:::tip
1. Asegúrate de que tu programa esté compilado y ejecutándose correctamente; de lo contrario, el archivo UF2 puede no ejecutarse como se espera.
2. Se proporciona un archivo UF2 de muestra para Blink en la carpeta **xiaos3-bin2uf2**. Cuando se carga, el LED naranja en el XIAO ESP32S3 parpadeará. Puedes usar este archivo UF2 como prueba.
:::

**Paso 5**: Re-entrar al Modo UF2 BootLoader

Si necesitas re-entrar al modo UF2 BootLoader para cargar otro archivo UF2, presiona rápidamente el botón **Reset** seguido del botón **Boot**. No hay necesidad de ejecutar el script boot_uf2.bat nuevamente.

:::note
¡Presiona Reset, luego Boot, rápidamente!
:::

</TabItem>

<TabItem value="method2" label="Método II" >

El proyecto está compuesto de personalizar el bootloader de 2da etapa de IDF y la aplicación de fábrica UF2 como bootloader de 3ra etapa.

**Nota:** dado que IDF se desarrolla activamente y cambia muy a menudo, se incluye como submódulo en lib/esp-idf, por favor ejecuta el script de exportación allí para tener tu entorno configurado correctamente.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div>

</TabItem>
</Tabs>

## Solución de problemas

### P1: ¿Qué debo hacer si el programa de carga falla/el programa funciona de manera anormal/no se encuentra el puerto del dispositivo?

Si encuentras el problema anterior, se recomienda que primero intentes presionar el botón de reinicio en el XIAO ESP32S3 para intentar que el programa funcione nuevamente. Si el problema persiste, por favor revisa nuevamente tu programa y lee los métodos proporcionados en **[Modo BootLoader](#bootloader-mode)** para restaurar el dispositivo.

### P2: ¿Por qué mi XIAO tiene el problema de no estar alineado en las esquinas redondeadas? ¿Es esto un problema de calidad?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

En primer lugar, debe señalarse que esto no es un problema de calidad y no afectará la función normal del XIAO.

XIAO ESP32S3 es el más complejo de todos los XIAO debido a su alta integración, y la PCB necesita ser ensamblada en la producción de fábrica. Debido al alto nivel de integración, la conexión de la placa de empalme solo puede colocarse en las cuatro esquinas redondeadas, lo que llevará al problema de esquinas redondeadas desiguales en la imagen. Intentaremos mejorar el proceso para asegurar que este problema se resuelva en la producción posterior.

### P3: ¿Cómo flashear el firmware de fábrica al XIAO ESP32S3 proporcionado en la sección de recursos?

El script proporcionado en la sección de recursos es compatible con Windows. Después de descargar el archivo zip, encontrarás los siguientes archivos:

<Tabs>
<TabItem value="normal" label="Firmware de fábrica XIAO ESP32S3" >

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
<TabItem value="sense" label="Firmware de fábrica XIAO ESP32S3 Sense" >

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

Para flashear el firmware, simplemente ejecuta el archivo `.bat` apropiado. Si el proceso de flasheo falla, copia la línea de comandos del prompt y ejecútala manualmente en la terminal donde se encuentran los archivos.

## Recursos

[PDF] **[Hoja de datos ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Para Seeed Studio XIAO ESP32S3

- **[PDF]** [Esquemático Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- **[ZIP]** [Librerías Eagle Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Dimensiones Seeed Studio XIAO ESP32S3 en DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Footprint Eagle Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Firmware de fábrica Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Hoja de pines Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Modelo 3D Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)

- 🔗 **[Kicad]** [FootPrint Seeed Studio XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Para Seeed Studio XIAO ESP32S3 Sense

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[PDF]** [Esquemático Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)
- **[Ebook]** [XIAO: Gran Potencia, Placa Pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
- **[ZIP]** [Librerías KiCAD Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)
- **[ZIP]** [Librerías Eagle Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)
- **[DXF]** [Dimensiones Seeed Studio XIAO ESP32S3 Sense en DXF (superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)
- **[DXF]** [Dimensiones Seeed Studio XIAO ESP32S3 Sense en DXF (inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)
- **[ZIP]** [Firmware de fábrica Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip)
- **[XLSX]** [Hoja de pines Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Modelo 3D Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip)
- 🔗 **[Kicad]** [FootPrint Seeed Studio XIAO ESP32S3 Sense](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


### Para Seeed Studio XIAO ESP32S3 Plus


- **[ZIP]** [Esquemático Seeed Studio XIAO ESP32S3 Plus](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.0_SCH_PCB.zip)
- **[ZIP]** [Librerías KiCAD Seeed Studio XIAO ESP32S3 Plus](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_KiCAD_Library2.zip)
- **[DXF]** [Dimensiones Seeed Studio XIAO ESP32S3 Plus en DXF (superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf)
- **[DXF]** [Dimensiones Seeed Studio XIAO ESP32S3 Plus en DXF (inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf)
- **[XLSX]** [Hoja de pines Seeed Studio XIAO ESP32S3 Plus](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx)
- **[ZIP]** [Archivo KiCAD Seeed Studio XIAO ESP32S3 Plus](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_V1.0_SCH%26PCB_KICAD.zip)
- **[ZIP]** [Base Seeed Studio XIAO Plus con pads inferiores expuestos](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)
- **[ZIP]** [Base Seeed Studio XIAO Plus sin pads inferiores expuestos](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

### Para Cámara Seeed Studio XIAO ESP32S3 Sense
- **[PDF]** [Hoja de datos OV3660](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV3660_datasheet.pdf)
- **[PDF]** [Hoja de datos OV5640](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV5640_datasheet.pdf)
- **[PDF]** [Hoja de datos OV2640](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV2640_datasheet.pdf)

## Recursos del Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### Otros

- **[STP]** [Diseño de carcasa XIAO ESP32S3 Sense (superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [Diseño de carcasa XIAO ESP32S3 Sense (inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*El material de código abierto restante se está compilando, ¡así que mantente atento!*

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