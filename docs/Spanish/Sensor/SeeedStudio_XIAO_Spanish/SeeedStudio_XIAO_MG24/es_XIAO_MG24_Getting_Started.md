---
title: Comenzando con XIAO MG24(Sense) de Seeed Studio
description: |
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /es/xiao_mg24_getting_started
keywords:
  - XIAO
  - MG24
last_update:
  date: 02/16/2025
  author: Guillermo
sidebar_position: 0
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg" style={{width:600, height:'auto'}}/></div>
<br />


# Comenzando con XIAO MG24(Sense) de Seeed Studio

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>




## Introducción

**Seeed Studio XIAO MG24** es una placa de desarrollo miniatura basada en el MG24 de Silicon Labs. XIAO MG24 está basada en el **núcleo ARM Cortex-M33**, arquitectura **RISC de 32 bits** con una velocidad de reloj máxima de 78 MHz, soporta instrucciones DSP y operaciones de punto flotante FPU, posee una potente capacidad de procesamiento y un **acelerador de hardware AL/ML MVP** integrado, que puede procesar de manera eficiente algoritmos de IA/aprendizaje automático. Además, tiene un excelente rendimiento en RF, con una **potencia de transmisión de hasta +19.5 dBm** y una sensibilidad de recepción tan **baja como -105.4 dBm**. Soporta múltiples protocolos IoT y de transmisión inalámbrica como **Matter, Thread, Zigbee, Bluetooth LE 5.3, Bluetooth mesh**, entre otros.


### Especificaciones

<table align="center">
	<tr>
	    <th>Artículo</th>
	    <th>Seeed Studio XIAO MG24</th>
        <th>Seeed Studio XIAO MG24 Sense</th>
	</tr>
	<tr>
	    <th>Procesador</th>
	    <td align="center" colspan="2">Silicon Labs EFR32MG24 <br></br>ARM Cortex-M33 @ 78MHz </td>
	</tr>
	<tr>
	    <th>Inalámbrico</th>
	    <td align="center" colspan="2">Subsistema Wi-Fi completo de 2.4GHz <br></br> BLE: Bluetooth 5.3, Bluetooth mesh</td>
	</tr>
    <tr>
	    <th>Sensores incorporados</th>
	    <td align="center"> - </td>
        <td align="center">IMU de 6 ejes(LSM6DS3TR-C) <br></br>Micrófono analógico(MSM381ACT001)</td>
	</tr>
    <tr>
	    <th>Memoria</th>
	    <td align="center">256kB RAM & 1538KB + 4MB Flash</td>
        <td align="center">256kB RAM & 1538KB + 4MB Flash</td>
	</tr>
    <tr>
	    <th>interfaz</th>
	    <td>2x UART, 1x IIC, 2x SPI, 18x Analog, 18x Digital, ALL PWM, 1x User LED, 1x Charge LED <br></br> 1x Botón de reinicio, </td>
	    <td>2x UART, 1x IIC, 2x SPI, 18x Analog, 18x Digital, ALL PWM, 1x User LED, 1x Charge LED <br></br> 1x Botón de reinicio, </td>
	</tr>
    <tr>
	    <th>Dimensiones</th>
	    <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8mm</td>
	</tr>
    <tr>
	    <th rowspan="2">Energía</th>
	    <td colspan="2" align="center">Voltaje de entrada (Tipo-C): 5V@14mA <br></br> Voltaje de entrada (BAT): 3.7V@7mA</td>
	</tr>
    <tr>
	    <td align="center">Corriente de batería en carga: <strong>200mA</strong></td>
		<td align="center">Corriente de batería en carga: <strong>200mA</strong></td>
	</tr>
    <tr>
        <th>Modelo de bajo consumo de energía</th>
        <td>Normal: <strong>3.7V/6.71 mA</strong> <br></br> Modelo de sueño: <strong>3.7V/1.91mA</strong> <br></br> Modelo de sueño profundo: <strong>3.7V/1.95μA</strong></td>
        <td>Normal: <strong>3.7V/6.71 mA</strong> <br></br> Modelo de sueño: <strong>3.7V/1.91mA</strong> <br></br> Modelo de sueño profundo: <strong>3.7V/1.95μA</strong></td>
    </tr>
    <tr>
        <th>Temperatura de trabajo</th>
        <td colspan="2" align="center">-20°C ~ 70°C</td>
    </tr>
</table>


## Características

- **CPU Potente**: Núcleo ARM Cortex-M33, con una velocidad de reloj máxima de 78 MHz, soportando instrucciones DSP y operaciones de punto flotante FPU, arquitectura RISC de 32 bits.
- **Bajo Consumo de Energía**: Corriente RX 4.6mA/Corriente TX 5mA (0dBm), múltiples modos de suspensión de bajo consumo.
- **Potente IA**: Acelerador de hardware AI/ML integrado MVP, capaz de procesar eficientemente algoritmos de IA/aprendizaje automático.
- **Transmisión inalámbrica de múltiples estilos**: Transceptor inalámbrico multiprotocolo integrado de 2.4GHz, soportando múltiples protocolos IoT como Matter, OpenThread, Zigbee, Bluetooth LE 5.3, Bluetooth mesh, etc.
- **Mejor Rendimiento RF**: Excelente rendimiento RF, con una potencia de transmisión de hasta +19.5 dBm y una sensibilidad de recepción tan baja como -105.4 dBm (250kbps DSSS).
- **Seguridad Potente**: Potentes características de seguridad de Secure Vault, incluyendo arranque seguro, encriptación, generación de números aleatorios, protección contra manipulaciones, depuración segura, etc.
- **Tamaño Ultra-pequeño**:
- **Recursos internos ricos**: Máximo de 1536KB de Flash y 256KB de RAM, con amplio espacio de almacenamiento.
- **Interfaces ricas**: Integrado con ADC de 12 bits a 1Msps, sensor de temperatura, comparador analógico, DCDC y otros periféricos, y hasta 22 pines, 2 USART, 2 UART de bajo consumo, 1 IIC y otras interfaces.

## Visión general del hardware

<table align="center">
	<tr>
	    <th>XIAO MG24 Sense diagrama de indicación</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24sense_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
  	<tr>
	    <th>XIAO MG24 diagrama de indicación</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO MG24/ XIAO MG24(Sense) Lista de pines</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/modifyMG24.png" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

:::tip
  La diferencia entre las dos placas de desarrollo es que la MG24 Sense tiene un sensor de micrófono y un sensor de aceleración de seis ejes, mientras que la MG24 no tiene ninguno de estos.
:::

- 5V - Esta es la salida de 5V desde el puerto USB. También puedes usarla como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, señal, de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo hacia la batería y el cátodo hacia el pin de 5V.
- 3V3 - Esta es la salida regulada desde el regulador integrado.
- GND - Tierra de energía/datos/señal.

## Empezando

Para ayudarte a comenzar más rápido con el XIAO MG24, por favor lee la preparación de hardware y software a continuación para preparar el XIAO.

### Procedimiento de fábrica

Preprogramamos cada XIAO MG24 y XIAO MG24 Sense con un programa de fábrica simple.

1. **XIAO MG24**

El programa de fábrica preestablecido en la versión regular es Blink Light. Cuando enciendas el XIAO, el indicador naranja de usuario se encenderá.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

2. **XIAO MG24 Sense**

El programa de fábrica preestablecido en la versión regular es "Cuanto más grites, más brillante será la luz".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/99.gif" style={{width:500, height:'auto'}}/></div>

### Preparación de Hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- 1 x Computadora
- 1 x Cable USB Tipo-C

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes revisar [Soporte USB 3.1 de Seeed USB Tipo-C](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Preparación de Software

La herramienta de programación recomendada para el XIAO MG24 es el Arduino IDE, por lo que debes completar la instalación de Arduino como parte de la preparación del software.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Empezando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::


- **Paso 1.** Descarga e instala la versión estable de Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **Paso 2.** Inicia la aplicación Arduino.
- **[Paso 3](#add-board).** Agrega el paquete de la placa XIAO MG24 al IDE de Arduino y haz clic en `OK`.
- **Paso 4.** Cierra el IDE de Arduino y vuelve a abrirlo.

#### Agregar la Placa XIAO MG24 {#add-board}

Para instalar la placa XIAO MG24, sigue estos pasos:

```
https://siliconlabs.github.io/arduino/package_arduinosilabs_index.json 
```

1. Agrega la URL del gestor de placas mencionada anteriormente a las preferencias de tu IDE de Arduino.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/13(1).png" style={{width: 'auto', height: 'auto'}}/></div>

2. Descarga el paquete de la placa XIAO MG24.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/14(1).png" style={{width: 'auto', height: 'auto'}}/></div>

:::tip 
Si no puedes encontrarla después de ingresarlo, por favor, vuelve a abrir el IDE de Arduino.
:::
3. Selecciona la variante `XIAO_MG24`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/15.png" style={{width:1000, height:'auto'}}/></div>

Ahora disfruta programando ✨.

## Ejecuta tu primer programa Blink

- **Paso 1.** Inicia la aplicación Arduino.

- **Paso 2.** Navega a **Archivo > Ejemplos > 01.Básicos > Blink**, y abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/12(1).png" style={{width:1000, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa como **XIAO MG24** y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/16.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el programa se haya cargado correctamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO MG24 está parpadeando.



<div class="table-center">
	<table align="center">
		<tr>
			<th>MG24 BLink Code</th>
			<th>LED BLink DisPlay</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/7.png" style={{width:700, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/8.gif" style={{width:400, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

## Uso de la Batería

El XIAO MG24 es capaz de usar una batería de litio de 3.7V como fuente de alimentación de entrada. Puedes consultar el siguiente diagrama para el método de conexión.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/4444.png" alt="pir" width="800" height="auto"/></div>

:::caution
Por favor, ten cuidado de no cortocircuitar los terminales positivo y negativo y de no quemar la batería y el equipo al soldar.
:::

**Instrucciones sobre el uso de baterías:**

1. Por favor, usa baterías calificadas que cumplan con las especificaciones.
2. El XIAO puede conectarse a tu dispositivo de computadora mediante cable de datos mientras usa la batería; ten la seguridad de que el XIAO tiene un chip de protección integrado, lo cual es seguro.
3. El XIAO MG24 no tendrá ningún LED encendido cuando esté alimentado por batería (a menos que hayas escrito un programa específico). Por favor, no juzgues si el XIAO MG24 está funcionando o no por el estado del LED, juzga razonablemente según tu programa.
4. Lo sentimos, actualmente no tenemos manera de ayudarte a verificar el nivel restante de la batería mediante software (porque no hay más pines de chip disponibles). Necesitarás cargar la batería regularmente o usar un multímetro para verificar el nivel de la batería.

## Probar voltaje
### Código de software
```cpp
/*
  AnalogReadSerial

  Lee una entrada analógica en el pin 0 y muestra el resultado en el Monitor Serial.
  La representación gráfica está disponible usando el Serial Plotter (Herramientas > Serial Plotter en el menú).
  Conecta el pin central de un potenciómetro al pin A0, y los pines exteriores a +5V y tierra.

  Este código de ejemplo está en el dominio público.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// La rutina de configuración se ejecuta una vez cuando presionas el botón de reset:
void setup() {
  Serial.begin(115200);
  pinMode(PD3, OUTPUT);
  digitalWrite(PD3, HIGH);
}

void loop() {
  int voltageValue = analogRead(PD4);
  float voltage = voltageValue * (5.0 / 4095.0);
  
  Serial.print("Voltaje: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(1000);  // retraso entre lecturas para estabilidad
}
```
### Resultado

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/55.png" alt="pir" width="800" height="auto"/></div>

## Sueño Profundo y Ejemplo de Sueño

### Demo 1: Modo de sueño con despertador temporizado

```cpp
/*
   Ejemplo de sueño temporizado con ArduinoLowPower

   El ejemplo muestra el uso básico de la biblioteca Arduino Low Power al poner el dispositivo en modo de sueño por un período de tiempo.
   El dispositivo entrará en modo de sueño durante 2000ms. Durante el sueño, la CPU se detiene, pero la RAM mantiene su contenido.

   Este ejemplo es compatible con todas las placas Arduino de Silicon Labs.

   Autor: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Dormir con despertador temporizado");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Durmiendo a %lu\n", millis());
  LowPower.sleep(2000);
  Serial.printf("Despertó a %lu\n", millis());
}
```

### Demo 2: Modo de sueño profundo y despertador

```cpp
/*
   Ejemplo de sueño profundo con ArduinoLowPower con despertador externo o temporizado

   El ejemplo muestra el uso básico de la biblioteca Arduino Low Power al poner el dispositivo en sueño profundo.
   El dispositivo permanecerá en sueño profundo hasta que el temporizador de sueño expire.
   Durante el sueño profundo, todo el dispositivo se apaga excepto un conjunto mínimo de periféricos (como la RAM de respaldo y el RTC).
   Esto significa que la CPU se detiene y el contenido de la RAM se pierde, por lo que el dispositivo comenzará desde el principio del programa después de despertarse.

   Este ejemplo es compatible con todas las placas Arduino de Silicon Labs.

   Autor: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Sueño profundo con despertador temporizado");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Durmiendo profundamente por 10s a %lu\n", millis());
  LowPower.deepSleep(10000);
}
```

#### Demo3: Modo de sueño profundo con flash y despertador

:::tip
Si deseas configurar el flash en modo de sueño profundo, necesitas habilitar el registro 0xb9.
:::

```cpp
/*
   Ejemplo de sueño profundo con ArduinoLowPower con despertador externo o temporizado

   El ejemplo muestra el uso básico de la biblioteca Arduino Low Power al poner el dispositivo en sueño profundo.
   El dispositivo permanecerá en sueño profundo hasta que el temporizador de sueño expire.
   Durante el sueño profundo, todo el dispositivo se apaga excepto un conjunto mínimo de periféricos (como la RAM de respaldo y el RTC).
   Esto significa que la CPU se detiene y el contenido de la RAM se pierde, por lo que el dispositivo comenzará desde el principio del programa después de despertarse.

   Este ejemplo es compatible con todas las placas Arduino de Silicon Labs.

   Autor: Tamas Jozsi (Silicon Labs)
 */
#include <Arduino.h>
#include "ArduinoLowPower.h"

#define CS_PIN PA6
#define CLK_PIN PA3
#define MOSI_PIN PA5
#define MISO_PIN PA4

#define READ_DATA 0x03
#define WRITE_ENABLE 0x06
#define PAGE_PROGRAM 0x02
#define SECTOR_ERASE 0x20

void sendSPI(byte data) {
  for (int i = 0; i < 8; i++) {
    digitalWrite(MOSI_PIN, data & 0x80);
    data <<= 1;
    digitalWrite(CLK_PIN, HIGH);
    delayMicroseconds(1);
    digitalWrite(CLK_PIN, LOW);
    delayMicroseconds(1);
  }
}

void writeEnable() {
  digitalWrite(CS_PIN, LOW);
  sendSPI(WRITE_ENABLE);
  digitalWrite(CS_PIN, HIGH);
}

void setup()
{
  //Serial.begin(115200);
  pinMode(PA7, OUTPUT);
  digitalWrite(PA7, LOW);

  pinMode(CS_PIN, OUTPUT);
  pinMode(CLK_PIN, OUTPUT);
  pinMode(MOSI_PIN, OUTPUT);
  pinMode(MISO_PIN, INPUT);

  //SW
  pinMode(PD3, OUTPUT);
  pinMode(PB5, OUTPUT);
  pinMode(PB1, OUTPUT);
  pinMode(PB0, OUTPUT);
  pinMode(PA6, OUTPUT);
  digitalWrite(PD3, LOW); //VBAT
  digitalWrite(PB5, LOW); //RF_SW
  digitalWrite(PB1, LOW); //IMU
  digitalWrite(PB0, LOW); //MIC
  digitalWrite(PA6, HIGH);  //FLASH

  //Serial.println("Despertar con temporizador en sueño profundo");
  writeEnable();
  digitalWrite(CS_PIN, LOW);
  sendSPI(0xB9);
  digitalWrite(CS_PIN, HIGH);
}

void loop()
{
  delay(12000);  
  digitalWrite(PA7, HIGH);
  delay(500);

  //Serial.printf("Durmiendo profundamente por 10s a %lu\n", millis());
  LowPower.deepSleep(600000);
}

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/100.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

### Para Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense datasheet](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense Schematic](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Sense Wireless SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Seeed Studio XIAO MG24 Sense FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


### Para Seeed Studio XIAO MG24
- 📄 **[PDF]** [Seeed Studio XIAO MG24 datasheet](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Schematic](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO MG24 Wireless SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Seeed Studio XIAO MG24 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)



## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte en diferentes áreas y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
