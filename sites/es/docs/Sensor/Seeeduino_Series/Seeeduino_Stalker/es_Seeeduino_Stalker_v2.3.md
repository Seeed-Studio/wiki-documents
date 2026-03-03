---
description: Seeeduino Stalker v2.3
title: Seeeduino Stalker v2.3
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Stalker_v2.3
last_update:
  date: 1/31/2023
  author: shuxu hu
---


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeduino_Stalker_v2.2.jpg)

Seeeduino Stalker es un nodo de **Red de Sensores Inalámbricos** compatible con Arduino rico en características. Su estructura modular y periféricos integrados lo hacen conveniente para registrar datos de sensores con marca de tiempo de forma periódica. Seeeduino Stalker viene con un sensor de temperatura, RTC con alimentación de respaldo, socket para tarjeta SD, socket Bee y cargador de batería solar de iones de polímero de litio. El Seeeduino Stalker es un buen candidato para todos sus proyectos de seguimiento, monitoreo y control.
La revisión 2.3 es casi igual que la revisión 2.2, la razón por la que la actualizamos es para corregir el error agregando un diodo rectificador entre LI_BAT y USB5V.

Modelo: [ARD104D2P](https://www.seeedstudio.com/depot/seeeduino-stalker-v2-p-727.html?cPath=80)

**A continuación se muestran las ediciones anteriores：**

- [Seeeduino Stalker v1.0](https://seeeddoc.github.io/Seeeduino_Stalker_v1.0/)
- **Seeeduino Stalker v2.0b** : Beta de la nueva versión mejorada con más características

  - [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/) : Versión final no-beta (mejoras menores en la serigrafía inferior)

  - [Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/) : RTC DS3231, soporte CR2032, nuevo socket para tarjeta SD

  - [Seeeduino_Stalker_v2.2](https://seeeddoc.github.io/Seeeduino_Stalker_v2.2/): Cambio en el método de lectura del estado de carga de la batería

  - [Seeeduino_Stalker_v2.3](https://seeeddoc.github.io/Seeeduino_Stalker_v2.3/): Agregar un diodo rectificador entre LI_BAT y USB5V.

**Y Seeeduino Stalker es una buena herramienta en las siguientes áreas:**

- Red de Sensores Inalámbricos (usando **XBee** - se compra por separado)

- Registro GPS (usando **GPSBee** - se compra por separado)

- Sistema de Adquisición de Datos capaz de comunicarse con una aplicación que se ejecuta en iPhone/teléfono Android/teléfono Nokia (usando [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)  - se compra por separado)

- Control Remoto RF (usando [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)  - se compra por separado)

- Como una plataforma simple independiente de computación física compatible con Arduino ([UartSBee](https://seeeddoc.github.io/UartSBee/)  debe comprarse por separado para programación)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.1_and_the_Bees.jpg)

**NOTA:**

- Tenga en cuenta que [UartSBee](https://seeeddoc.github.io/UartSBee/)  no se puede insertar en el socket de la serie Bee presente en Seeeduino Stalker. El [UartSBee](https://seeeddoc.github.io/UartSBee/)  está destinado para conectar los otros módulos Bee (mostrados en la foto de arriba) a una computadora y no puede insertarse en el socket destinado para estos otros módulos Bee. Hay un cabezal de pines de 5 vías separado presente tanto en UartSBee como en Seeeduino Stalker para conectarlos entre sí. Este cabezal de pines está compuesto por: VCC (para suministrar energía al Stalker), TXD, RXD, DTR (para controlar la señal de Reset del Stalker) y GND.

- El producto se proporciona tal como está sin una carcasa aislante. Observe las precauciones ESD especialmente en clima seco (baja humedad).

- Desactive los puertos serie bluetooth cuando use una máquina de desarrollo basada en Windows para evitar que el IDE de Arduino se congele.

## Especificaciones ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.2_diagram.jpg)

- Microcontrolador: ATmega328P

- Cristal a Bordo: 8 MHz

- Tamaño PCB: 92.71mm X 60.96mm

- Indicadores: Reset, Alimentación, LED en PB5 (Pin 13 de Arduino)

- Fuente de alimentación: 3.7-5V

- Conector de Alimentación: 2.0mm JST/ USB

- Cantidad de E/S: 20

- Entrada ADC: 4 canales dedicados (ADC0~ADC3, resolución de 10 bits)

- Conectividad: I2C, UART, SPI

- Precisión RTC: ±2ppm de 0°C a +40°C / ±3.5ppm de -40°C a +85°C

- Precisión del Sensor de Temperatura DS3231: ±3°C

- Voltaje de Entrada JST de Batería: 3.5-4.2V

- Voltaje de Entrada JST Solar: 4.6-6V

- Consumo de Corriente Global: Ver [nota](https://wiki.seeedstudio.com/es/Seeeduino_Stalker_v2.3)

- Velocidad de Baudios UART (durante programación): 115200 bps

## Demostración ##

### Primeros Pasos ###

Los siguientes pasos te ayudarán a ensamblar los recursos de hardware y software para comenzar con Seeeduino Stalker

#### Paso 1: Adquirir el Hardware ####

Necesitarás el siguiente hardware para ejecutar tu primer programa.

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeduino_Stalker_v2.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Uartsb40.jpg)|
|---|---|
|**Seeeduino Stalker v2.e**|**UartsBee v4.0**    Requerido para programar el Seeeduino Stalker.[Comprar Aquí](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Miniusb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/JumperWire100n.jpg)|
|**Cable Mini USB**      Probablemente tengas uno por ahí, o si no, compra uno [aquí](https://www.seeedstudio.com/depot/mini-usb-cable-110cm-p-252.html). Lo usaremos para conectar el UartsBee a uno de los puertos USB de tu computadora.|**Cable puente de 1 pin dual-hembra** Requerido para conectar el UartsBee al Seeeduino Stalker. Puede que ya tengas algunos en tu espacio de trabajo. Si no, puedes comprar uno colorido [aquí](https://www.seeedstudio.com/depot/1-pin-dualfemale-jumper-wire-100mm-50pcs-pack-p-260.html?cPath=175_187).|

#### Paso 2: Instalación de los controladores y conexión del hardware ####

1.[UartSBee](https://seeeddoc.github.io/UartSBee/) es como la navaja suiza multiusos del mundo de la Computación Física. Hay un procedimiento muy detallado para usar UartSBee tanto para usuarios de Windows como de GNU/Linux [aquí](https://seeeddoc.github.io/UartSBee/). En nuestro caso realizará tres funciones:

- Nos permitirá programar el Seeeduino Stalker.

- Nos permitirá comunicarnos con el Seeeduino Stalker.

- Proporcionar energía (desde la alimentación USB de tu computadora) al Seeeduino Stalker (incluyendo cualquier periférico conectado a él).

2.Las primeras dos funciones del UartSBee (programación y comunicación) se logran a través de un Circuito Integrado llamado FT232RL que está presente en él. Antes de que el FT232RL pueda ser usado para estos propósitos, sus controladores (ciertos programas disponibles gratuitamente del fabricante del FT232RL) deben ser instalados en tu PC basado en windows/ubuntu. Así que antes de proceder más, descarga el archivo de configuración del controlador [desde aquí](https://www.ftdichip.com/Drivers/VCP.htm) e instálalo en tu PC con Windows. (Los controladores para OS X también están disponibles y son requeridos para OS X)

3.UartSBee tiene un regulador de voltaje integrado y un interruptor para permitirte seleccionar qué voltaje (5.0V o 3.3V) te gustaría suministrar a la placa de circuito objetivo. En nuestro caso la placa de circuito objetivo es Seeeduino Stalker y por lo tanto necesitarías configurar este interruptor deslizante a 5.0 voltios

4.El esquema de conexión de cableado de nuestro hardware es "**Computadora**→(Cable Mini USB)→**UartSBee** →(Cable de Cinta Plano)→**Seeeduino Stalker**". Los cables puente deben ser conectados entre UartSBee y Seeeduino Stalker antes de conectar el UartSBee a la Computadora. Consulta las fotos a continuación y asegúrate de que las líneas de señal se alineen como se muestra en la tabla (**Nota: Los pines TXD y RXD deben estar conectados de forma cruzada como se muestra en la tabla**).

5.A continuación conecta el cable Mini USB desde UartSBee a tu computadora. Si estás usando una PC basada en Windows, aparecerá el globo "Se encontró nuevo hardware" y en unos momentos se instalarán los controladores para FT232RL (es decir, UartSBee).

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_Uartsbee_3.1_Connection.jpg)

 Conexiones de cables puente

 |Seeeduino Stalker||UartSBee|
 |---|---|---|
 |USB5V| ↔  |VCC|
|RXD  |  ↔  |TXD|
| TXD  |  ↔  |RXD|
| GND| ↔  |GND|
 |DTR| ↔  |DTR|

### Notas de Conexión ###

- **Socket serie Bee** - 2*10 pines con paso de 2.0mm (que se acoplará con - uno a la vez - cualquiera de los **módulos inalámbricos** : **XBee** , [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) , **GPSBee** o **RFBee**.) La comunicación con estos módulos se realiza a través de UART.

- **Interfaz serial** – Para ahorrar espacio y reducir costos, la conectividad USB&lt;-&gt;Serial no se proporciona por defecto. Puedes usar el [UartSBee](https://seeeddoc.github.io/UartSBee/) basado en FT232 u otras placas adaptadoras de USB a serial para hacer la programación o comunicarte con la PC.

- **LED de usuario** – Se ha proporcionado un LED integrado para uso en tu aplicación según se desee.

- **Interfaz I2C**: El IC cambiador de nivel I2C integrado proporciona traducción de voltaje entre dispositivos de 3.3V y 5V. Esto te permite conectar dispositivos I2C al Stalker cuando está operando a 3.3 Voltios. El voltaje de operación del dispositivo I2C depende del voltaje externo (LIPO_BAT y USB5V).

- **Interfaz Grove** – Añade interfaz Grove que está usando D7/D8. Esto te permite conectar módulos Grove de 3.3V y 5.0V al Stalker cuando está operando a 3.3 Voltios. El voltaje de operación del módulo Grove depende del voltaje externo (LIPO_BAT y USB5V).

### Puentes y Conectores ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.3_bottom.jpg)

#### Relacionado con Tarjeta microSD (Tarjeta TransFlash) ####

- **CS_TF**(Tipo de puente: **puente antiguo - 2 vías**, Ubicación: **Inferior**, Estado de fábrica: **SS y PB2 conectados por una pista delgada**)
Este puente es un puente de dos vías compuesto por tres pads: PB1, SS y PB2. SS es la señal de Selección de Chip de la tarjeta microSD. Por defecto SS está conectado por una pista delgada a PB2 - Pin Digital 10 (PB2) del microcontrolador. Si en su lugar quieres conectar la señal de Selección de Chip de la tarjeta microSD al pin digital 9 (PB1), simplemente corta la pista entre PB2 y SS y pon una gota de soldadura entre SS y PB1.

- **POWER_TF**(Tipo de puente: **Puente de soldadura**, Ubicación: **Inferior**, Estado de fábrica: **Desconectado**)

  Por defecto EN está conectado a VCC para siempre alimentar la tarjeta TF. Si quieres controlar la alimentación de la tarjeta TF con el pin digital 4(PD4) del microcontrolador, simplemente pon una gota de soldadura entre EN y PD4. Por el contrario, si quieres que la tarjeta TF esté siempre disponible por defecto para ser alimentada, corta la soldadura que habías puesto.

#### Relacionado con Módulo Bee ####

- **POWER_BEE**(Tipo de puente: **Puente de soldadura**, Ubicación: **Inferior**, Estado de fábrica: **Desconectado**)
Por defecto EN está conectado a VCC para siempre alimentar xbee. Si quieres controlar la alimentación del xbee con el pin digital 5(PD5) del microcontrolador, simplemente pon una gota de soldadura entre EN y PD5. Por el contrario, si quieres que xbee esté siempre disponible por defecto para ser alimentado, corta la soldadura que habías puesto.

#### Relacionado con Módulo Bee - Solo relacionado con XBee ####

- **WIRELESS_PROGRAMMING**(Tipo de puente: **Puente de soldadura**, Ubicación: **Inferior**, Estado de fábrica: **Conectado por una pista delgada**)
Puedes usar los módulos XBee de Digi para programar inalámbricamente el ATmega328P en tu Seeeduino Stalker. Un módulo XBee debe ser configurado e instalado en tu Seeeduino Stalker y otro módulo XBee debe estar conectado a tu Laptop a través de un UartSBee. El pin DIO3 en el Seeeduino Stalker será usado para controlar el Pin de Reset del ATmega328P. Este puente te permite habilitar o deshabilitar (por defecto: habilitado) el control del Pin de Reset del ATmega328P por el pin DIO3 del módulo XBee. Puedes cortar la pista entre los pads de este puente si no quieres que el pin DIO3 controle el pin de Reset del ATmega328P. Lady Ada tiene un buen [tutorial](http://www.ladyada.net/make/xbee/arduino.html) sobre cómo programar remotamente tu producto basado en Arduino usando XBee. (NOTA: Ambos XBee - el que está en Stalker y el que está conectado a la PC deben ser preconfigurados una vez usando el software X-CTU antes del uso.)

- **RSSI_STATUS**(Tipo de jumper: **Puente de soldadura**, Ubicación: **Superior**, Estado de fábrica: **conectado por una pista delgada**)
Un LED rojo presente en el lado superior de la PCB está conectado al pin RSSI (Indicador de Intensidad de Señal Recibida) del módulo XBee. XBee emite una señal PWM en este pin que es directamente proporcional a la calidad del enlace RF cuando el último paquete fue recibido por él. Esta señal PWM cuando se aplica al LED variaría su brillo según la calidad del enlace RF - mejor el enlace, más brillante el LED. Dado que este LED consumiría energía, puedes cortar la pista entre las almohadillas de este jumper para conservar la energía de la batería en el campo. El valor RSSI también está disponible a través del UART usando el comando DB (medido en -dBm). (NOTA: El valor DB solo indica la intensidad de señal recibida del último salto. Si una transmisión abarca múltiples saltos, el valor DB no proporciona indicación de la ruta de transmisión general, o la calidad del peor enlace – solo indica la calidad del último enlace y debe usarse con moderación.)

#### Relacionado con LED de Usuario ####

- **D13_LED**(Tipo de jumper: **Puente de soldadura**, Ubicación: **Inferior**, Estado de fábrica: **conectado por una pista delgada**)
Un LED rojo presente en el lado superior de la PCB está conectado al Pin Digital 13 (PB5) del microcontrolador. El LED está libre para uso por ti en tu programa para cualquier propósito que desees. Dado que este LED consumiría energía, puedes cortar la pista entre las almohadillas de este jumper para conservar la energía de la batería en el campo y usar el Pin Digital 13 para otros propósitos como controlar un shield.

#### Relacionado con Batería ####

- **CH_STATUS**(Tipo de jumper: **Puente de soldadura**, Ubicación: **Superior**, Estado de fábrica: **conectado por una pista delgada**)
Dos LEDs presentes en la placa Seeeduino Stalker indican el estado de carga de la Batería LiPo. El LED SMD Rojo está conectado al pin CHRG (o CH) del IC cargador de Batería de Litio (CN3083 o CN3063) que cuando se enciende, indica que el ciclo de carga de la batería está activo. El LED SMD Verde está conectado al pin DONE (o OK) del IC cargador de Batería de Litio (CN3083 o CN3063) que cuando se enciende, indica que la batería ahora está completamente cargada. Cuando operes Seeeduino Stalker en el campo, puedes cortar la pista que conecta las almohadillas CH_STATUS para desconectar estos LEDs de C_VIN y por lo tanto conservar energía que de otro modo habría sido consumida en encender estos LEDs.

#### Relacionado con Reloj de Tiempo Real (RTC) ####

- **INT**(Tipo de jumper: **Puente de soldadura**, Ubicación: **Inferior**, Estado de fábrica: **Desconectado**)
Cierra este jumper para permitir que el Reloj de Tiempo Real (RTC) despierte el ATmega328P a una hora especificada. Este jumper conectará INT del Chip RTC (DS3231) a PD2 (INT0) del ATmega328P.

- **RST/32K**(Tipo de jumper: **Puente de soldadura - 2 vías**, Ubicación: **Inferior**, Estado de fábrica: **Desconectado**)
Si el puente de soldadura está conectado a RST, el RTC será reiniciado si PD3 (Pin Digital 3) va a LOW.
El 32K es una Salida de 32kHz del RTC en PD3 (Pin Digital 3 / INT1).

## Programación ##

Debes configurar tu tipo de placa como **Arduino Pro o Pro Mini (3.3V, 8MHz) w/ ATmega 328**

### RTC Y Temperatura ###

- Descarga e instala la librería DS3231 y sketches disponibles en la sección de recursos. La librería DS3231 incluye una versión modificada de la clase DateTime por Jean-Claude Wippler en **JeeLabs**
- Los sketches de demostración hacen uso de la Librería Arduino fat16lib para acceder a la Tarjeta SD. Por favor instala la Librería FAT16 desde **la página del proyecto de fat16lib**.

#### Ajustar Fecha/Hora ####

- Configura la placa Arduino como `Arduino Pro o Pro Mini (3.3V, 8MHz) w/ ATmega 328` desde el Menú Herramientas-->Placa del IDE de Arduino.

- Abre el ejemplo adjust.pde de la librería DS3231

- Configura la fecha/hora actual usando el objeto de clase DateTime dt en el ejemplo:

- `DateTime dt(año, mes, fecha, hora, min, seg, día-de-la-semana(comienza desde 0 y va hasta 6));`
    Ej:-`DateTime dt(2011, 11, 10, 15, 18, 0, 5);`
- `DateTime dt(__DATE__, __TIME__); // Usa el tiempo de compilación para configurar el reloj`

- compila y sube a Stalker.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_adjust.png)

#### Obtener Fecha/Hora Actual ####

- Configura la placa Arduino como `Arduino Pro o Pro Mini (3.3V, 8MHz) w/ ATmega 328` desde el Menú Herramientas-->Placa del IDE de Arduino.

- Abre el ejemplo now.pde de la librería DS3231

- La fecha/hora actual se lee del DS3231 usando la función `RTC.now()`.

    Ej:- `DateTime now = RTC.now();`

- compila y sube a Stalker.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_now.png)

#### Leer Temperatura DS3231 ####

---

- Configura la placa Arduino como `Arduino Pro o Pro Mini (3.3V, 8MHz) w/ ATmega 328` desde el Menú Herramientas-->Placa del IDE de Arduino.

- Abre el ejemplo temperature.pde de la librería DS3231

- La temperatura actual en grados C se lee del DS3231 usando la función `RTC.getTemperature()`.

- El registro de temperatura del DS3231 normalmente se actualiza solo una vez cada 64 Segundos.

- Por lo tanto, una conversión forzada tiene que ser iniciada usando `RTC.convertTemperature()`
- Ej:-

```
RTC.convertTemperature();             //convert current temperature into registers
Serial.print(RTC.getTemperature());   //read registers and display the temperature
Serial.println("deg C");

```

- compilar y subir al Stalker.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_temp.png)

#### Interrupciones DS3231 ####

Este ejemplo es una demostración de detección de interrupciones desde la salida INT del DS3231. Esta característica es útil para la funcionalidad de registrador de datos donde el MCU se pone en modo de suspensión cuando no está en uso y el INT del DS3231 despierta la CPU periódicamente. Esto extiende la energía de la batería. La operación completa está documentada en el código.

- Soldar los pines PD2 e INT del puente INT.

- Esto conecta el pin de salida de interrupción del DS3231 al pin INT0 del ATmega328.

- Configurar la placa Arduino como `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328` desde el menú Herramientas-->Placa del IDE de Arduino.

- Abrir el ejemplo interrupts.pde de la librería DS3231

- compilar y subir al Stalker.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_interrupts.png)

### Lectura del Estado de Carga ###

Conectar la batería y el panel solar al Stalker, la batería puede cargarse a través del panel solar y USB5v. El voltaje de entrada más bajo para cargar la batería es 4.4v, así que si estás usando un panel solar, debes llevarlo a un lugar al aire libre con suficiente luz solar. Después, subir el siguiente código al Stalker para leer el estado de carga del Stalker.

```
void setup()
{
  Serial.begin(57600);
  analogReference(INTERNAL);
  //analogRead(6);
}

void loop()
{
  char CH_status_print[][4]=
  {
    "off","on ","ok ","err"
  };
  unsigned char CHstatus = read_charge_status();//read the charge status
  Serial.print("charge status -->");
  Serial.println(CH_status_print[CHstatus]);
  delay(500);
}


unsigned char read_charge_status(void)
{
  unsigned char CH_Status=0;
  unsigned int ADC6=analogRead(6);
  if(ADC6>900)
  {
    CH_Status = 0;//sleeping
  }
  else if(ADC6>550)
  {
    CH_Status = 1;//charging
  }
  else if(ADC6>350)
  {
    CH_Status = 2;//done
  }
  else
  {
    CH_Status = 3;//error
  }
  return CH_Status;
}

```

### Reading Battery Voltage ###

Si quieres conocer el voltaje de tu batería en el Pin Analógico 7, este es un ejemplo simple.

```
void setup(){
    Serial.begin(57600);
    analogReference(INTERNAL);
}

void loop() {

float voltage;
int BatteryValue;

    BatteryValue = analogRead(A7);
    voltage = BatteryValue * (1.1 / 1024)* (10+2)/2;  //Voltage devider

    Serial.print("Battery Voltage -> ");
    Serial.print(voltage);
    Serial.print("V   ");
    Serial.println();

    delay(500);
}

```

### Usando una Librería de Batería ###

Hay una librería disponible para voltaje de batería, porcentaje y más.

```
/*
Battery.cpp (Version 0.3) - Library for Battery infos on Seeeduino Stalker V2.3
Created by Stefan, March 2013.

Notes:
 - read lipo battery voltage -> analog pin 7
 - current capacity (in %)
 - charging status -> analog pin 6
 - flashing LED for battery indication
*/

#include <Battery.h>

int LEDPin=13;
int flashesforfull=10; // 1 blink =10%
int chcnt=0;

Battery battery;

void setup(){
  Serial.begin(57600);
  Serial.println("Battery Library for Seeeduino Stalker V2.3");
}

void loop(){
  battery.update();
  battery.ledflashStatus(LEDPin,flashesforfull);
  float voltage = battery.getVoltage();
  int percentage = battery.getPercentage();
  char* CS = battery.getChStatus();
  bool ch = battery.isCharging();
  if(ch) chcnt++;

  Serial.print("battery: ");
  Serial.print(voltage);
  Serial.print("V  -> ");
  Serial.print(percentage);
  Serial.print("%     Charge Status: ");
  Serial.print(CS);
  Serial.print("     charging counter: ");
  Serial.println(chcnt);
  delay(2000);

}
```

### Ejemplos de Registrador de Datos ###

La aplicación principal de Stalker es el registro de datos de señales de sensores como temperatura junto con la marca de tiempo. Hemos proporcionado 3 sketches junto con la biblioteca DS3231 que demuestran 3 implementaciones diferentes. Estos sketches ponen el MCU en modo de suspensión cuando no está realizando operaciones de muestreo/registro de datos. La implementación completa está muy bien documentada en el código. La siguiente sección proporciona una descripción general:

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_SolarPanel.png)
Seeeduino Stalker v2.1 SolarPanel.png

1.StalkerV21_DataLogger_Periodic.pde

- Este sketch registra datos de temperatura periódicamente en la tarjeta SD configurada por la función `RTC.enableInterrupts(periodicity)`.
- La periodicidad se proporciona usando constantes predefinidas EverySecond o EveryMinute o EveryHour
- Este sketch produce salida detallada, es decir, los diversos eventos que ocurren dentro del MCU se muestran en el terminal serie.

2.StalkerV21_DataLogger_5min.pde

- Este sketch registra datos de temperatura en la tarjeta SD configurada por la función `RTC.enableInterrupts(h, m, s)`.
- La periodicidad se proporciona usando h, m y s. Una vez que se detecta una interrupción, el tiempo de la siguiente interrupción se actualiza avanzando el valor h, m y s. La Clase DateTime resulta útil para esto.
- ej:- `interruptTime = DateTime(interruptTime.get() + 300); //decide the time for next interrupt`
- Este sketch también produce salida detallada, es decir, los diversos eventos que ocurren dentro del MCU se muestran en el terminal serie.

3.StalkerV21_DataLogger_15Sec_NoSerialPort.pde

- Esto es similar al sketch anterior con diferente intervalo de registro de datos. Todo el código relacionado con el Puerto Serie está comentado para reducir el consumo de energía.
- No hay reducción significativa en el consumo de energía al eliminar el código relacionado con el Puerto Serie.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.1_datalogger_flowchart.png)

##### Una nota sobre el consumo de energía #####

La siguiente captura de pantalla muestra la medición de consumo de corriente de **Stalker** @ 3.3V de entrada conectado a LIPO_BAT. En la aplicación real LIPO_BAT está conectado a una batería LiPo de 3.7V. Por lo tanto, ¡considera la siguiente medición con cautela!
Aquí en el [foro](https://forum.seeedstudio.com/viewtopic.php?f=16&amp;t=3911&amp;hilit=Stalker) hay algunas discusiones sobre el consumo de energía.
Parece que solo el RTC tiene una Corriente de Suministro en Espera de 110µA. [Aquí](http://www.gammon.com.au/forum/?id=11497) hay información sobre Consumo de Baja Potencia.

Pero no te pongas triste ahora, incluso si logras reducir a un consumo promedio de 1mA, obtienes 980 mAh/1 mA = 980h = **40.8** Días sin cargar

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_datalogger_15S_Current_Measurement.png)

- Vemos picos de modo activo cada 15 Segundos. En modo activo el MCU muestrea la temperatura y la almacena en la tarjeta SD.

- El consumo de corriente en modo de suspensión es **95.82 uA** @ 3.3V (es decir **316.206 uW** de consumo de energía). Ten en cuenta que el VCC de la Tarjeta SD aún está alimentado en esta demostración. Para reducir aún más la corriente del modo de suspensión, apaga la Tarjeta SD usando el pin de habilitación LDO reconfigurando el jumper POWER_TF. Esto también podría aumentar el tiempo necesario para que la tarjeta SD se estabilice cuando se aplica VCC.

- El consumo de corriente en el pico de modo activo es **22.43 mA** @ 3.3V (es decir **74.019 mW** de consumo de energía)

- El consumo de corriente en el segundo pico de modo activo es **3.64 mA** @ 3.3V (es decir **12.012 mW** de consumo de energía)

- El modo activo dura **400mS** o 0.4 Segundos.

 Nota: Si compras el "Lector de tarjetas microSD (en una cápsula)", no necesitarías el "cable Mini USB" ya que el primero también funciona como

## Recursos ##

### Accesorios ###

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/StalkerEnclosure600.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Microsdcard2gb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Smartcable_04_LRG.jpg) |
|---|---|---|
|[Carcasa impermeable para Seeeduino Stalker v2.0](https://www.seeedstudio.com/depot/seeeduino-stalker-v2-enclosure-p-734.html?cPath=178_184) | [Tarjeta microSD SanDisk de 2GB](https://www.seeedstudio.com/depot/sandisk-microsd-card-2gb-p-546.html?cPath=178_182)|[Lector de tarjetas microSD (en una cápsula)](https://www.seeedstudio.com/depot/sd-card-reading-miniusb-cable-in-a-capsule-p-575.html?cPath=190)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Miniusbcable.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/JumperWire100n.jpg)|
|[Cable Mini USB para usar con UartSBee durante la programación](https://www.seeedstudio.com/depot/mini-usb-cable-100cm-p-252.html?cPath=178_179)|[Cable individual - Cables puente](https://www.seeedstudio.com/depot/6-pin-dualfemale-jumper-wire-100mm-5-pcs-pack-p-129.html?cPath=175_187)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Lithium-lon-polymer-batteries2A.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Solar-panel55.jpg) |
|[Batería de polímero de litio (LiPo)](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;keyword=Lithium+Ion+polymer+Battery&amp;x=51&amp;y=12)|[Panel solar para cargar batería LiPo a través de Stalker](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;keyword=solar+panel&amp;x=0&amp;y=0)|

### Hojas de Datos de Componentes ###

- [DS3231](http://datasheets.maxim-ic.com/en/ds/DS3231.pdf) - Reloj de Tiempo Real con sensor de Temperatura Digital a bordo del Seeeduino Stalker v2.1
- [CN3063](http://www.openhacks.com/uploadsproductos/dse-cn3063.pdf) - Controlador de carga para baterías de Litio (carga usando panel solar)
- [Si2305DS](http://www.vishay.com/docs/70833/70833.pdf) - MOSFET de Canal P de 1.25-W, 1.8-V (G-S).

## FAQ ##

Aquí está el FAQ del Seeeduino Stalker, los usuarios pueden listar las Preguntas Frecuentes aquí, ejemplo como se muestra a continuación:

1.¿Se ha eliminado el interruptor definido por el usuario en la versión 2.x del Seeeduino Stalker?

   Sí, hemos eliminado el botón de usuario en la versión 2.x

2.En la versión 1.0 del Seeeduino Stalker el microcontrolador podía despertarse del modo de suspensión mediante interrupción del módulo Bee. ¿Esta misma característica también está disponible en la versión 2.0?

   En la versión anterior (es decir, 1.0), el microcontrolador podía despertarse al recibir paquetes de datos RF por el módulo Bee a través de su pin 15 que estaba conectado a INT0 (PD2) del microcontrolador. En la versión más nueva, el pin INT0 (PD2) del microcontrolador está conectado por un jumper ([INT_RTC](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/#Real_Time_Clock_.28RTC.29_Related) ) al pin INT del chip RTC que puede despertarlo a una hora preconfigurada (o periódicamente). Dado que el Seeeduino Stalker está destinado para uso como nodo de red de sensores inalámbricos, esta modificación sería útil en casos donde el microcontrolador debe despertarse periódicamente para transmitir lecturas de sensores y volver a dormir.

3.Los conectores de pines I2C en la Versión 1.0 del Seeeduino Stalker permitían conexión fácil a dispositivos externos de 3.3V así como de 5.0V. ¿Está disponible la misma característica en la versión 2.x?

   Sí, de hecho lo hemos mejorado - anteriormente se usaba PCA9306 para traducción de nivel en el bus I2C. Pero ahora usamos MOSFETs de canal N para traducción - esta técnica tiene muchas ventajas (consulte la Nota de Aplicación de NXP **AN97055**.

4.No hay hoja de datos en inglés para el CN3083, ¿qué hago?

   Habíamos usado CN3083 en la revisión beta de la versión 2.1 del Seeeduino Stalker (v2.1). La versión final v2.0 tendrá CN3063 en ella. La hoja de datos para CN3083 solo está disponible en idioma chino. Por otro lado, CN3063 tiene una hoja de datos en idioma inglés y se adjunta arriba. Ambas partes: CN3063 así como CN3083 son muy similares en operación.

5.Encuentro la explicación de los jumpers relacionados con la batería dada arriba un poco confusa, necesito una explicación más simple.

  BAT_READ - Te permite leer el voltaje de la batería a través del Pin Analógico 7 del microcontrolador usando su Conversor Analógico a Digital incorporado.

  CH_READ y CH_STATUS  Ya no están conectados a Pines Digitales (6 y 7) sino al Pin Analógico 6, cada uno con una Resistencia, así que funcionan como se muestra en el ejemplo de arriba

   CH_STATUS - Las dos señales anteriores (CH_READ y OK_READ) también tienen LEDs conectados a ellas. El jumper CH_STATUS te permite deshabilitar estos LEDs y disminuir el consumo de energía.

## Licencias ##

Esta documentación está licenciada bajo la Licencia Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo varias licencias de código abierto, consulte los archivos de código fuente para detalles.

## Visor de Esquemático en Línea Stalker v2.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.3_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor de Esquemático en Línea Stalker v2.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

### Biblioteca y Archivo Eagle ###

**Nota:** Si deseas usar los Sketches de Datalogger, primero debes descargar e instalar Fat16lib Arduino 1.0 Version desde **fat16lib**

- **[Software]** [SeeeduinoStalker_Software(Arduino_1.0).zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/SeeeduinoStalkerV2.1_Software-Arduino_1.0-.zip)

- **[Software]** [SeeeduinoStalker_BatteryLibrary_V0.3](https://drive.google.com/file/d/0B_woEJs7VW-hc2dBcUJfOVlDTk0/edit?usp=sharing)

- **[Eagle]**[Stalker v2.3 Eagle Files.zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.3_Eagle_Files.zip)

- **[PDF]**[Stalker v2.3 PCB](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker%20v2.3.pdf)

- **[PDF]**[Stalker v2.3 SCH](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker%20v2.3%20SCH.pdf)

- **[Eagle]**[Stalker v2.2 Eagle Files.zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.2_eagle.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
