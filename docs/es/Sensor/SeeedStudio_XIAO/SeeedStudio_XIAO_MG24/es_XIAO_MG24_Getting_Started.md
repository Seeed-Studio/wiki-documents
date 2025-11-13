---
title: Introducción a Seeed Studio XIAO MG24
description: |
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /es/xiao_mg24_getting_started
keywords:
  - XIAO
  - MG24
last_update:
  date: 10/17/2024
  author: Jason
sidebar_position: 0
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg" style={{width:600, height:'auto'}}/></div>
<br />

# Introducción a Seeed Studio XIAO MG24(Sense)

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
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introducción

**Seeed Studio XIAO MG24** es una placa de desarrollo mini basada en el MG24 de Silicon Labs. XIAO MG24 está basado en el **núcleo ARM Cortex-M33**, arquitectura **RISC de 32 bits** con una velocidad de reloj máxima de 78MHz, soportando instrucciones DSP y operaciones de punto flotante FPU, poseyendo un potente poder de cómputo, y con **acelerador de hardware AL/ML MVP** integrado, que puede procesar eficientemente algoritmos de AI/aprendizaje automático. En segundo lugar, tiene un excelente rendimiento RF, con una **potencia de transmisión de hasta +19.5 dBm** y una sensibilidad de recepción tan **baja como -105.4 dBm**. Soporta múltiples protocolos IoT y de transmisión inalámbrica como **Matter, Thread, Zigbee, Bluetooth LE 5.3, Bluetooth mesh** etc.

### Especificaciones

<table align="center">
 <tr>
     <th>Elemento</th>
     <th>Seeed Studio XIAO MG24</th>
        <th>Seeed Studio XIAO MG24 Sense</th>
 </tr>
 <tr>
     <th>Procesador</th>
     <td align="center" colspan="2">Silicon Labs EFR32MG24 <br></br>ARM Cortex-M33 @ 78MHz </td>
 </tr>
 <tr>
     <th>Inalámbrico</th>
     <td align="center" colspan="2">Propietario 2.4 GHz <br></br> Protocolos Zigbee PRO/Green Power <br></br> BLE: Bluetooth 5.3, Bluetooth mesh</td>
 </tr>
    <tr>
     <th>Sensores Integrados</th>
     <td align="center"> - </td>
        <td align="center">IMU de 6 Ejes(LSM6DS3TR-C) <br></br>Micrófono Analógico(MSM381ACT001)</td>
 </tr>
    <tr>
     <th>Memoria</th>
     <td align="center">256kB RAM & 1538KB + 4MB Flash</td>
        <td align="center">256kB RAM & 1538KB + 4MB Flash</td>
 </tr>
    <tr>
     <th>Interfaz</th>
     <td>2x UART, 1x IIC, 2x SPI, 18x Analógico, 18x Digital, TODO PWM, 1x LED de Usuario, 1x LED de Carga <br></br> 1x Botón de Reset, </td>
     <td>2x UART, 1x IIC, 2x SPI, 18x Analógico, 18x Digital, TODO PWM, 1x LED de Usuario, 1x LED de Carga <br></br> 1x Botón de Reset, </td>
 </tr>
    <tr>
     <th>Dimensiones</th>
     <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8mm</td>
 </tr>
    <tr>
     <th rowspan="2">Alimentación</th>
     <td colspan="2" align="center">Voltaje de entrada (Type-C): 5V@14mA <br></br> Voltaje de entrada (BAT): 3.7V@7mA</td>
 </tr>
    <tr>
     <td align="center">Corriente de carga de batería: <strong>200mA</strong></td>
  <td align="center">Corriente de carga de batería: <strong>200mA</strong></td>
 </tr>
    <tr>
        <th>Modelo de Bajo Consumo</th>
        <td>Normal: <strong>3.7V/6.71 mA</strong> <br></br> Modo Sleep: <strong>3.7V/1.91mA</strong> <br></br> Modo Deep Sleep: <strong>3.7V/1.95μA</strong></td>
        <td>Normal: <strong>3.7V/6.71 mA</strong> <br></br> Modo Sleep: <strong>3.7V/1.91mA</strong> <br></br> Modo Deep Sleep: <strong>3.7V/1.95μA</strong></td>
    </tr>
    <tr>
        <th>Temperatura de Funcionamiento</th>
        <td colspan="2" align="center">-20°C ~ 70°C</td>
    </tr>
</table>

### Características

- **CPU Potente**: Núcleo ARM Cortex-M33, con una velocidad de reloj máxima de 78MHz, soportando instrucciones DSP y operaciones de punto flotante FPU, arquitectura RISC de 32 bits.
- **Ultra Bajo Consumo**: Corriente RX 4.6mA/Corriente TX 5mA (0dBm), múltiples modos de sleep de bajo consumo
- **AI Potente**: Acelerador de hardware AI/ML MVP integrado, capaz de procesar eficientemente algoritmos de AI/aprendizaje automático.
- **Transmisión inalámbrica multi-estilo**: Transceptor inalámbrico multi-protocolo de 2.4GHz integrado, soportando múltiples protocolos IoT como Matter, OpenThread, Zigbee, Bluetooth LE 5.3, Bluetooth mesh, etc.
- **Mejor Rendimiento RF**: Excelente rendimiento RF, con una potencia de transmisión de hasta +19.5 dBm y una sensibilidad de recepción tan baja como -105.4 dBm (250kbps DSSS)
- **Seguridad potente**: Características de seguridad potentes de Secure Vault, incluyendo arranque seguro, encriptación, generación de números aleatorios, a prueba de manipulación, depuración segura, etc.
- **Tamaño ultra-pequeño**: 21 x 17.8mm.
- **Recursos on-chip ricos**: Máximo 1536KB Flash y 256KB RAM, con amplio espacio de almacenamiento.
- **Interfaces ricas**: Integrado con ADC de 12 bits 1Msps, sensor de temperatura, comparador analógico, DCDC y otros periféricos ricos, y hasta 22 Pin, 2 USART, 2 UART de bajo consumo, 1 IIC y otras interfaces.

## Descripción general del hardware

<table align="center">
 <tr>
     <th>Diagrama de indicación XIAO MG24 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24sense_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
   <tr>
     <th>Diagrama de indicación XIAO MG24</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de Pines XIAO MG24/ XIAO MG24(Sense)</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/modifyMG24.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip
  La diferencia entre las dos placas de desarrollo es que MG24 Sense tiene un sensor de micrófono y un sensor de aceleración de seis ejes, mientras que MG24 no los tiene.
:::

- 5V - Esta es la salida de 5v del puerto USB. También puedes usar esto como entrada de voltaje pero debes tener algún tipo de diodo (schottky, señal, potencia) entre tu fuente de alimentación externa y este pin con ánodo a batería, cátodo al pin 5V.
- 3V3 - Esta es la salida regulada del regulador a bordo.
- GND - Tierra de alimentación/datos/señal

## Primeros pasos

Para permitirte comenzar con el XIAO MG24 más rápido, por favor lee la preparación de hardware y software a continuación para preparar el XIAO.

### Procedimiento de fábrica

Pre-programamos cada nuevo XIAO MG24 y XIAO MG24 Sense con un programa de fábrica simple.

1. **XIAO MG24**

El programa de fábrica preestablecido en la versión regular es Blink Light. Cuando enciendas el XIAO, el indicador de usuario naranja se encenderá.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

2. **XIAO MG24 Sense**

El programa de fábrica preestablecido en la versión regular es Cuanto más fuerte grites, más brillante será la luz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/99.gif" style={{width:500, height:'auto'}}/></div>

### Preparación de Hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- 1 x Computadora
- 1 x Cable USB Type-C

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Preparación de Software

La herramienta de programación recomendada para el XIAO MG24 es el Arduino IDE, por lo que necesitas completar la instalación de Arduino como parte de la preparación de software.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e Instala la versión estable de Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **Paso 2.** Inicia la aplicación Arduino.
- **[Paso 3](#agregar-placa).**  Agrega el paquete de placa XIAO MG24 al Arduino IDE y haz clic en `OK`.
- **Paso 4.** Cierra el Arduino IDE y ábrelo de nuevo.

#### Agregar la Placa XIAO MG24 {#agregar-placa}

Para instalar la placa XIAO MG24, sigue estos pasos:

```
https://siliconlabs.github.io/arduino/package_arduinosilabs_index.json 
```

1. Agrega la URL del gestor de placas anterior a las preferencias de tu Arduino IDE.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/13(1).png" style={{width: 'auto', height: 'auto'}}/></div>

2. Descarga el paquete de placa XIAO MG24.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/14(1).png" style={{width: 'auto', height: 'auto'}}/></div>

:::tip
Si no puedes encontrarlo después de ingresar, por favor reabre el Arduino IDE.
:::

3. Opta por la variante `XIAO_MG24`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/15.png" style={{width:1000, height:'auto'}}/></div>

Ahora disfruta programando ✨.

#### Ejecuta tu primer programa Blink

- **Paso 1.** Inicia la aplicación Arduino.

- **Paso 2.** Navega a **File > Examples > 01.Basics > Blink**, abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/12(1).png" style={{width:1000, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa como **XIAO MG24**, y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/16.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el programa se haya cargado exitosamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO MG24 está parpadeando.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Código Blink MG24</th>
   <th>Visualización Parpadeo LED</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/7.png" style={{width:700, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/8.gif" style={{width:400, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

## Uso de Batería

El XIAO MG24 tiene un chip de gestión de energía integrado que permite al XIAO MG24 ser alimentado independientemente usando una batería o cargar la batería a través del puerto USB del XIAO MG24.

Si quieres conectar la batería para XIAO, te recomendamos que compres una batería de litio recargable de 3.7V calificada. Al soldar la batería, ten cuidado de distinguir entre los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe estar en el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación está en el lado alejado del puerto USB.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/4444.png" alt="pir" width="800" height="auto"/></div>

:::caution
Ten cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar.
:::

**Instrucciones sobre el uso de baterías:**

1. Por favor usa baterías calificadas que cumplan con las especificaciones.
2. XIAO puede conectarse a tu dispositivo de computadora a través de cable de datos mientras usa la batería, ten la seguridad de que XIAO tiene un chip de protección de circuito integrado, que es seguro.
3. El XIAO MG24 no tendrá ningún LED encendido cuando esté alimentado por batería (a menos que hayas escrito un programa específico), por favor no juzgues si el XIAO MG24 está funcionando o no por la condición del LED, por favor júzgalo razonablemente por tu programa.
4. Lo sentimos, actualmente no tenemos forma de ayudarte a verificar el nivel de batería restante a través de software (porque no hay más pines de chip disponibles), necesitas cargar la batería regularmente o usar un multímetro para verificar el nivel de batería.

Al mismo tiempo, diseñamos una luz indicadora roja para la carga de la batería, a través de la visualización de la luz indicadora para informar al usuario del estado actual de la batería en carga.

1. Cuando el XIAO MG24 no está conectado a la batería, la luz roja se enciende cuando se conecta el cable Type-C y se apaga después de 30 segundos.
2. La luz roja parpadea cuando la batería está conectada y el cable Type-C está conectado para cargar.
3. Cuando se conecta Type-C para cargar completamente la batería, la luz roja se apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/battery_mg24.jpg" style={{width:600, height:'auto'}}/></div>

## Lectura del Voltaje de la Batería

**Código de software**

```cpp
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  Serial.begin(115200);
  pinMode(PD3, OUTPUT);
  digitalWrite(PD3, HIGH);
}

void loop() {
  int voltageValue = analogRead(PD4);
  float voltage = voltageValue * (2 * 3.3 / 4095.0);

  Serial.print("Voltage: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(1000);  // delay in between reads for stability
}
```

**Resultado de Visualización**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/55.png" alt="pir" width="800" height="auto"/></div>

## Ejemplo de Sueño Profundo y Sueño

#### Demo1 : Modo de Sueño y despertar

```cpp

/*
   ArduinoLowPower timed sleep example

   The example shows the basic usage of the Arduino Low Power library by putting the device to sleep for a period of time.
   The device will enter sleep mode for 2000ms. During sleep the CPU is stopped but the RAM retains its contents.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Sleep with timed wakeup");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Going to sleep at %lu\n", millis());
  LowPower.sleep(2000);
  Serial.printf("Woke up at %lu\n", millis());
}
```

#### Demo2 : Modo de Sueño Profundo y despertar

```cpp
/*
   ArduinoLowPower deep sleep example with external or timed wakeup

   The example shows the basic usage of the Arduino Low Power library by putting the device into deep sleep.
   The device will remain in deep sleep until the sleep timer expires.
   During deep sleep the whole device is powered down except for a minimal set of peripherals (like the Back-up RAM and RTC).
   This means that the CPU is stopped and the RAM contents are lost - the device will start from the beginning of the sketch after waking up.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Deep sleep timed wakeup");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Going to deep sleep for 10s at %lu\n", millis());
  LowPower.deepSleep(10000);
}


```

#### Demo3 : Modo de Sueño Profundo con flash y despertar

:::tip
Si quieres configurar flash para sueño profundo, necesitas habilitar el registro 0xb9
:::

```cpp
/*
   ArduinoLowPower deep sleep example with external or timed wakeup

   The example shows the basic usage of the Arduino Low Power library by putting the device into deep sleep.
   The device will remain in deep sleep until the sleep timer expires.
   During deep sleep the whole device is powered down except for a minimal set of peripherals (like the Back-up RAM and RTC).
   This means that the CPU is stopped and the RAM contents are lost - the device will start from the beginning of the sketch after waking up.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
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

  //Serial.println("Deep sleep timed wakeup");
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

  //Serial.printf("Going to deep sleep for 10s at %lu\n", millis());
  LowPower.deepSleep(600000);
}

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/100.png" style={{width:1000, height:'auto'}}/></div>

### Prevenir que el XIAO MG24 se Bloquee Durante el Sueño Profundo

El **XIAO MG24** es una placa de microcontrolador potente de Seeed Studio, pero los usuarios han reportado problemas donde el dispositivo se vuelve no responsivo ("bloqueado") después de entrar en modo de Sueño Profundo. Este tutorial explica la causa del problema, proporciona un método de recuperación detallado, y ofrece medidas preventivas para evitar bloquear tu XIAO MG24.

El XIAO MG24 entra en un **modo de Sueño Profundo** (EM4) para conservar energía, pero en algunos casos, falla al despertar correctamente, impidiendo que se carguen nuevos sketches. A diferencia de otras placas XIAO, el MG24 no tiene un **botón BOOT** dedicado o un método documentado para entrar en modo boot, haciendo la recuperación desafiante.

#### Medidas Preventivas

Para evitar bloquear tu XIAO MG24 mientras usas el modo de Sueño Profundo, sigue estos pasos:

1. Usar el Pin de Escape (PC1)

El XIAO MG24 tiene un **mecanismo de escape** integrado para prevenir el bloqueo. Si **PC1** se pone en **LOW** durante el reset, el dispositivo entra en un bucle infinito, permitiéndote cargar un nuevo sketch.

- Conecta **PC1** a **GND** antes de resetear el dispositivo.
- Después de resetear, carga tu sketch mientras el dispositivo está en el bucle.

2. Modifica tu Sketch
Agrega el siguiente código a tu sketch para detectar un interruptor de usuario y entrar en un bucle infinito si se presiona. Esto te permite subir un nuevo sketch mientras el dispositivo está en bucle:

```cpp
#define USER_SW  PC3   // Example pin for user switch

void setup() {
  // Other setup code...

  pinMode(USER_SW, INPUT_PULLUP);
  if (digitalRead(USER_SW) == LOW) {
    Serial.println("Enable to upload new sketch");
    while (true) {
      digitalWrite(LED_BUILTIN, LOW);
      delay(50);
      digitalWrite(LED_BUILTIN, HIGH);
      delay(50);
    }
  }
}
```

3. Evita el Modo de Suspensión Innecesario de la Flash

Asegúrate de que tu sketch no ponga la memoria flash en modo de suspensión (`Deep Power Down`) a menos que sea absolutamente necesario. Esto puede prevenir problemas al subir nuevos sketches.

#### Agradecimientos

Agradecimientos especiales a la **comunidad de Seeed Studio** por sus valiosas contribuciones y soluciones a este problema. Los métodos de recuperación y medidas preventivas discutidos en este tutorial fueron desarrollados basándose en las ideas de miembros de la comunidad como **[msfujino](https://forum.seeedstudio.com/u/msfujino)** y **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso)**.  

Para más detalles y discusiones, visita el hilo original del foro:  
[DeepSleep bricks XIAO_MG24 - Seeed Studio Forum](https://forum.seeedstudio.com/t/deepsleep-bricks-xiao-mg24/284889)

## Desbloqueo

El XIAO MG24 es actualmente el único modelo XIAO equipado con un chip de puerto serie. A diferencia de otros modelos XIAO, no tiene un botón BOOT o un método de recuperación BOOT. Esta omisión de diseño puede causar problemas cuando el dispositivo entra en modo de suspensión o encuentra anomalías de software, haciendo imposible subir un programa a través del puerto serie. Para abordar esto, hemos proporcionado un método para despertar el puerto serie y restaurar la funcionalidad.

### Solución para Windows

1. **Descarga y Extrae el Paquete**  
   - Descarga el archivo ZIP proporcionado.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_windows.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - Extrae el contenido a una carpeta en tu computadora.

2. **Conecta el XIAO MG24**  
   - Usa un cable USB para conectar el XIAO MG24 que no responde a tu computadora.

3. **Ejecuta el Script**  
   - Abre la carpeta extraída y localiza el script `flash_erase.bat`.  
   - Haz doble clic en el script para ejecutarlo.  
   - El script borrará la memoria flash y reiniciará el dispositivo.

4. **Verifica la Recuperación**  
   - Después de que el script se complete, el XIAO MG24 debería estar restaurado y listo para usar.

### Solución para macOS

1. **Descarga y Extrae el Paquete**  
   - Descarga el archivo ZIP proporcionado (el enlace se agregará aquí).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_macos.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - Extrae el contenido a una carpeta en tu computadora.

2. **Conecta el XIAO MG24**  
   - Usa un cable USB para conectar el XIAO MG24 que no responde a tu computadora.

3. **Permite el Acceso a Terminal**  
   - Abre **System Preferences** > **Security & Privacy** > **Privacy**.  
   - Bajo **Accessibility**, asegúrate de que **Terminal** tenga permitido controlar tu computadora.  
   - Si Terminal no está listado, haz clic en el botón **+** para agregarlo manualmente.

4. **Ejecuta el Script**  
   - Abre **Terminal**.  
   - Navega a la carpeta extraída usando el comando `cd`. Por ejemplo:  

     ```bash
     cd /path/to/extracted/folder
     ```  

   - Ejecuta el script `xiao_mg24_erase.sh` usando el siguiente comando:  

     ```bash
     ./xiao_mg24_erase.sh
     ```  

   - El script usará OpenOCD para borrar la memoria flash y reiniciar el dispositivo.  

5. **Verifica la Recuperación**  
   - Después de que el script se complete, el XIAO MG24 debería estar restaurado y listo para usar.

:::note

- Si macOS falla en reconocer OpenOCD, asegúrate de que OpenOCD esté instalado y que se use la ruta correcta en el script.  
- Los scripts proporcionados están diseñados específicamente para el XIAO MG24 y no deben usarse con otros modelos XIAO.  

:::

## Recursos

### Para Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Hoja de datos de Seeed Studio XIAO MG24 Sense](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Esquemático de Seeed Studio XIAO MG24 Sense](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [SoC Inalámbrico de Seeed Studio XIAO MG24 Sense](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Huella de Seeed Studio XIAO MG24 Sense](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- 📄 **[ZIP]** [PCB y Esquemático de Seeed Studio XIAO MG24 Sense](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_Sense_v1.0_SCH&PCB.zip)

### Para Seeed Studio XIAO MG24

- 📄 **[PDF]** [Hoja de datos de Seeed Studio XIAO MG24](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)
- 📄 **[PDF]** [Esquemático de Seeed Studio XIAO MG24](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)
- 📄 **[PDF]** [SoC Inalámbrico de Seeed Studio XIAO MG24](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)
- 🔗 **[Kicad]** [Huella de Seeed Studio XIAO MG24](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- 📄 **[ZIP]** [PCB y Esquemático de Seeed Studio XIAO MG24](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_v1.0_SCH&PCB.zip)

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
