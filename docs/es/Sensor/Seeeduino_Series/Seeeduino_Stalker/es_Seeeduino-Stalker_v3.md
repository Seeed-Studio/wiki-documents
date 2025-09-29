---
description: Seeeduino Stalker V3
title: Seeeduino Stalker V3
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-Stalker_v3
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-6.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-7.png)

Seeeduino Stalker v3.0 es un nodo de **Red de Sensores Inalámbricos** compatible con Arduino rico en características, especialmente útil para aplicaciones de **registro de datos** al aire libre. Tiene una placa portadora X-Bee para usar con módulos X-Bee, como GPS Bee, Bluetooth Bee y Wifi Bee, etc. Su estructura modular y periféricos integrados lo hacen conveniente para registrar datos de sensores con marca de tiempo de forma periódica. Seeeduino Stalker viene con un RTC con alimentación de respaldo, Socket para Tarjeta SD, Socket Bee y Cargador de Batería Li-Ion basado en Solar_. El Seeeduino Stalker es un buen candidato para todos tus proyectos de seguimiento, monitoreo y control._

**NOTA:** Seeeduino Stalker v3.0 es la versión más reciente de esta placa. Por favor mira [aquí](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker) para comparación con versiones anteriores de esta placa. Seeeduino Stalker V3 tiene muchas características y ofrece formas de modificar las funcionalidades soldando o desconectando puentes PCB. Por favor entiende este documento y consulta el esquemático antes de programar.

<span >Nota</span> que hemos actualizado y hecho algunas modificaciones al Seeeduino Stalker. Y lo cubriremos más adelante en la sección **Descripción General del Hardware** de esta página.

### Seguimiento de Versiones

| Versión del producto                      | Fecha de lanzamiento | Estado de soporte | Notas |
|-------------------------------------------|----------------------|-------------------|-------|
| Seeeduino Stalker v3(v3.0, versión anterior) | Oct 2015             | Oct 2015          | Ninguna |
| Seeeduino Stalker v3(v3.1, versión anterior) | Julio 2016           | Soportado         | Ninguna |

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Stalker-v3-p-1882.html)  

## Características

* Compatible con Seeeduino (los puertos I/O usan Lógica de 3.3V). Puede ser programado con el lenguaje de procesamiento Arduino.

* Microcontrolador integrado: **ATMega328P**

* Chip de Reloj de Tiempo Real integrado DS1337S (Socket para una pila de moneda CR1220, que actúa como fuente de alimentación de respaldo para RTC)

* Interfaz serial con DTR para reinicio automático durante la programación cuando opera en modo independiente. (Para programación, [UartSBee](https://seeeddoc.github.io/UartSBee/) debe comprarse por separado).

* Socket para tarjeta microSD
* Cabecera de pines I2C (voltaje de operación es seleccionable: 5.0V o 3.3V)

* Interfaz Grove (voltaje de operación es seleccionable: 5.0V o 3.3V)

* Botones de reinicio para Módulos XBee y ATMega328P

* Socket **serie Bee** - 2*10 pines con paso de 2.0mm (que se acoplará con - uno a la vez - cualquiera de los módulos inalámbricos: **XBee**, [BluetoothBee](/Bluetooth_Bee "Bluetooth Bee"), [GPSBee](https://seeeddoc.github.io/Bluetooth_Bee/) o [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/).)

## Especificación

<table >
<tr>
<th>Parámetro</th>
<th>Valor</th>
</tr>
<tr>
<td>MCU</td>
<td>ATmega328</td>
</tr>
<tr>
<td>Oscilador de Cristal</td>
<td>8 MHz</td>
</tr>
<tr>
<td>RTC</td>
<td>DS1337S</td>
</tr>
<tr>
<td>Lógica de E/S</td>
<td>3.3v</td>
</tr>
<tr>
<td>Placa para Arduino IDE</td>
<td>Arduino Pro o Pro Mini (**3.3v** , 8 MHz)w/ATmega328</td>
</tr>
<tr>
<td>Fuente de Alimentación</td>
<td>Batería LiPo de 3.7v, Usar panel solar de 5VDC para cargar la batería.</td>
</tr>
<tr>
<td>Conector de Alimentación</td>
<td>JST de 2 pines/ USB</td>
</tr>
<tr>
<td>Conectividad</td>
<td>I<sup>2</sup>C, UART, SPI</td>
</tr>
<tr>
<td>Corriente de Circuito Abierto</td>
<td>6 mA máx</td>
</tr>
<tr>
<td>Corriente de Carga</td>
<td>300mA</td>
</tr>
<tr>
<td>Corriente Máxima en puerto de 3.3v</td>
<td>800mA</td>
</tr>
<tr>
<td>Tamaño de PCB</td>
<td>86.74mm x 60.96mm</td>
</tr>
</table>

## Ideas de Aplicación

* Red de Sensores Inalámbricos (usando **XBee** - se compra por separado)

* Registro GPS (usando [GPSBee](https://seeeddoc.github.io/GPS_Bee_kit/) - se compra por separado)

* Sistema de Adquisición de Datos capaz de comunicarse con una App ejecutándose en iPhone/Teléfono Android (usando [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) - se compra por separado).

* Control Remoto RF (usando [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) - se compra por separado).

* Como una plataforma simple independiente de computación física compatible con Arduino ([UartSBee](https://seeeddoc.github.io/UartSBee/) debe comprarse por separado para programación).

## Descripción General del Hardware

<span >Nota</span> que hemos actualizado y hecho algunas modificaciones al Seeeduino Stalker (de la versión v3.0 a v3.1).

 1. Agregamos un interruptor para seleccionar entre puertos serie de hardware (a través de D0, D1) y puerto serie de software (es decir, puerto serie virtual; a través de D5, D6). El interruptor está marcado en rectángulo azul como sigue.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.1_serial_port_switch_1200_s.jpg)

2. Para el circuito RTC, ahora solo hay una fuente de alimentación (de batería de litio). Y el modelo de batería de polímero de litio aplicable es CR1120.

3. Para el circuito RTC, agregamos dos interruptores de palanca para habilitar dos interrupciones (INT A e INT B del RTC corresponden a INT0 e INT1 del MCU) al MCU. Ambas interrupciones se usan para activar el MCU desde el modo de suspensión. Necesitas cambiar esos interruptores a **ON** antes de querer enviar una interrupción.

4. Como el MCU está en modo de suspensión, puedes controlar (habilitar o deshabilitar) la entrada de energía en el conector Bee y todos los pines VCC de 3.3 V o 5V, enviando una señal con el pin D9.
5. En modo de suspensión (para todos los módulos), la corriente de trabajo será tan baja como 100 μA.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3.png)

* **RST para Bee:** Presiona este botón para reiniciar el módulo Bee. Sin embargo, este botón de reinicio no afecta el estado de la placa principal (ATmega328).

* **RST para ATmega328:** Presiona este botón para reiniciar la placa principal.

* **ATmega328:** El microcontrolador de la placa principal. Y el oscilador de cristal es de 8MHz.

* **Socket SD:** Es conveniente almacenar datos en una tarjeta SD. **Hay una almohadilla (P2) para soldar para activar o desactivar la fuente de alimentación de la tarjeta SD** a través del pin Digital **D4**.

* **Socket Bee:** Hay provisión para que la placa principal se comunique con otros módulos inalámbricos a través del socket Bee. **Hay una almohadilla (P1) para activar o desactivar la fuente de alimentación** a través del pin Digital **D5**.

* **Panel Solar:** Captura la luz solar y la transfiere a energía a través del panel solar, sin la restricción del cable USB.

* **BAT Li-Po:** Proporciona suministro de energía a la placa principal a través de BAT Li-Po; La batería puede cargarse mediante panel solar.

* **CN3065:** Cargador de batería de iones de litio para sistemas alimentados por energía solar. También hay dos luces directoras en la placa, son "**OK**" y "**CH**" en el lado de BAT Li-Po, que significan "**Cargada**" y "**Cargando**" respectivamente.

* **TD6810:** Regulador Reductor Síncrono de 1.5MHz 800mA Dropout, que proporciona suministro de energía de 3.3v a la placa principal.

* **RTC:** Reloj de Tiempo Real Serie I2C -- DS1337S. **Y dos pines de señal de interrupción opcionales han sido extraídos como almohadillas (P3 y P4).** Estas almohadillas de puente pueden usarse para conectar el pin RTC /INTA al Pin Digital **D2** y RTC /INTB al pin Digital **D3**.

* **BAT para RTC:** Una batería CR1220, para proporcionar suministro de energía al RTC independientemente.

* **Conectores Grove:** En la placa hay dos conectores Grove, es decir, I2C y D7. Y puedes conectar productos Grove directamente a la placa a través de estos conectores Grove.

* **Headers UartSBee:** Los headers UartSBee se usan con UartSBee v4, puedes cargar programas a la placa principal a través de estos headers.

### Almohadillas de Puente PCB

El lado inferior del Seeeduino Stalker V3 tiene muchas almohadillas de puente PCB que opcionalmente cambian la configuración / funcionalidad. La tabla siguiente proporciona detalles sobre las mismas.

| Nombre de Almohadillas de Puente | Aplicación                                                                                                                                                                                                                                                                                                                                                 | Circuito                                                                                                             |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| P1               | Soldar estos puentes habilita al pin Digital D5 para activar o desactivar el suministro de energía del Socket Bee                                                                                                                                                                                                                                                       | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P1.jpg)       |
| P2               | Soldar estas almohadillas de puente habilita al pin Digital D4 para activar o desactivar el suministro de energía de SD.                                                                                                                                                                                                                                                  | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P2.jpg)       |
| P3               | Soldar estas almohadillas de puente conecta el pin RTC /INTA al Pin Digital **D2(INT0)**.                                                                                                                                                                                                                                                                             | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P3.jpg)       |
| P4               | Soldar estas almohadillas de puente conecta RTC /INTB al pin Digital **D3(INT1)**.                                                                                                                                                                                                                                                                                 | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P4.jpg)       |
| P5               | Este puente por defecto conecta BEE_TXD al pin Digital D0 (H/W UART TXD). Cortando la conexión PCB existente y soldando a la almohadilla adyacente, BEE_TXD puede conectarse al pin Digital **D7** para Serie S/W. **Nota**: Hay un error de hardware conocido. Por favor lee [aquí](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#Known_Issue) para una solución alternativa. | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |
| P6               | Este puente por defecto conecta BEE_RXD al pin Digital D0 (H/W UART RXD). Cortando la conexión PCB existente y soldando a la almohadilla adyacente, BEE_RXD puede conectarse al pin Digital **D6** para Serie S/W.                                                                                                                                              | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |

Además de estos, hay otras almohadillas de puente para WIRELESS_PROGRAMMING, RSSI_STATUS y CH_STATUS. Estas están conectadas por defecto y por favor consulte el esquemático si desea modificar alguna funcionalidad.

## Primeros Pasos

Si eres nuevo en el mundo de la "Computación Física" y si **Seeeduino Stalker v3.0** es la primera plataforma de computación física con la que quieres comenzar, entonces te sugerimos que comiences con [Seeeduino](https://seeeddoc.github.io/Seeeduino_v4.0/).

Los siguientes pasos te ayudarán a ensamblar los recursos de hardware y software para comenzar con **Seeeduino Stalker v3.0**.

#### Paso 1. Adquirir el hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-1.png)

La imagen de arriba muestra el hardware y componentes requeridos para que Seeeduino Stalker v3 se comunique con PC. El Stalker no tiene funcionalidad USB a Serial. Por lo tanto, **UartSBee** es necesario para programar Stalker vía PC. Otra placa convertidora USB a Serial puede ser usada para reemplazar UartSBee v4.

**Nota: UartSBee v4 necesita ser comprado por separado**.

#### Paso 2: Instalar los controladores y conectar el hardware  

1. [UartSBee](https://seeeddoc.github.io/UartSBee/) es como la navaja suiza multiusos del mundo de la Computación Física. Hay un procedimiento muy detallado para usar UartSBee tanto para usuarios de Windows como de GNU/Linux [aquí](https://seeeddoc.github.io/UartSBee/).  En nuestro caso, realizará tres funciones:
    * Programar el Seeeduino Stalker.
    * Comunicarse con Seeeduino Stalker.
    * Proporcionar energía (desde la alimentación USB de PC) a Seeeduino Stalker (incluyendo cualquier periférico conectado a él).

2. UartSBee tiene un regulador de voltaje integrado y un interruptor para seleccionar el voltaje de la placa objetivo (ya sea 5.0V o 3.3V). En el caso de Seeeduino Stalker, configure este interruptor deslizante a 5.0V.

3. El esquema de conexión del cableado del hardware es **"<font >Computadora</font><font >→(Cable Mini USB)→</font><font >UartSBee </font><font >→(Cable Plano)→</font><font >Seeeduino Stalker</font>"**. Los cables puente deben estar conectados entre UartSBee y Seeeduino Stalker antes de conectar el UartSBee a la Computadora. **Nota: Los pines TXD y RXD deben estar conectados de forma cruzada como se muestra en la tabla**.
4. Conecte el cable Mini USB desde UartSBee a PC. Si está usando una PC basada en Windows, aparecerá el globo "Nuevo Hardware Encontrado" y en unos momentos se instalarán los controladores FT232.

<font >**La siguiente tabla muestra la conexión entre Seeeduino Stalker v3 y UartSBee v4.**</font>

<table >
<caption>Conexión de pines</caption>
<tr><th>Seeeduino Stalker v3</th><th></th><th>UartSBee v4</th></tr>
<tr><td>5V</td><td>↔</td><td>VCC</td></tr>
<tr><td><font>RXD</font></td><td>↔</td><td><font>TXD</font></td></tr>
<tr><td><font>TXD</font></td><td>↔</td><td><font>RXD</font></td></tr>
<tr><td>GND</td><td>↔</td><td>GND</td></tr>
<tr><td>DTR</td><td>↔</td><td>DTR</td></tr>
</table>

## Demos

Descarga e instala la biblioteca DS1337 y los sketches disponibles en la sección de recursos. La biblioteca DS1337 incluye una versión modificada de la clase DateTime por Jean-Claude Wippler en [JeeLabs](http://jeelabs.net/projects/cafe/wiki/)

* Los sketches de demostración del datalogger hacen uso de la Biblioteca SD de Arduino.

### 1.RTC

<font >**Por favor presta atención: Necesitas soldar algunos pads mientras usas la demo de "Interrupts"**</font>

<table >
<caption><font>Cómo soldar</font></caption>
<tr><th>Pines en RTC</th><th>Pads en Seeeduino Stalker v3</th><th>Pines en ATmega328</th></tr>
<tr><td>INTA</td><td>P3</td><td>digital 2</td></tr>
<tr><td>INTB</td><td>P4</td><td>digital 3</td></tr>
</table>

#### Ajustar Fecha/Hora

* * *

* Configura la placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`.

* Abre el ejemplo **adjust.ino** de la librería DS1337

* Configura la fecha/hora actual usando el objeto de la Clase DateTime **dt** en el ejemplo:

  * `DateTime dt(año, mes, fecha, hora, min, seg, día-de-la-semana(comienza desde 0 y va hasta 6));`

    * **Ej:-** `DateTime dt(2015, 10, 1, 11, 43, 0, 4);`

* compila y sube a **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_adjust.png)

#### Obtener Fecha/Hora Actual

* * *

* Configura la placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` .

* Abre el ejemplo **now.ino** de la librería DS1337

* La fecha/hora actual se lee desde DS1337 usando la función ` RTC.now() `.

  * **Ej:- `DateTime now = RTC.now();`**

* compila y sube a **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_now.png)

#### Ejemplo de Interrupciones DS1337

* * *

Este ejemplo es una demostración de detección de interrupciones desde la salida <span >INT</span> del DS1337. Esta característica es útil para la funcionalidad de registrador de datos donde el MCU se pone en modo de suspensión cuando no está en uso y el <span >INT</span> del DS1337 despierta la CPU periódicamente. Esto extiende la energía de la batería. La operación completa está documentada en el código.

* Solda el puente P3.

  * Esto conecta el pin de salida de interrupción del DS1337 al pin INT0 del ATmega328.

* Configura la placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`.

* Abre el ejemplo **interrupts.ino** de la librería DS1337

* compila y sube a **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_interrupt.png)

#### Ejemplo de Registrador de Datos

* * *

La aplicación principal del Seeeduino Stalker v3.0 es el registro de datos de señales de sensores como voltaje de batería, etc. junto con la marca de tiempo. Este sketch pone el MCU en modo de suspensión cuando no está realizando operaciones de muestreo / registro de datos. La implementación completa está muy bien documentada en el código. La siguiente sección da una visión general:

1. **StalkerV30_DataLogger_10Sec.ino**

    * Este sketch registra datos de voltaje de batería en la tarjeta SD configurada por la función **`RTC.enableInterrupts(_h, m, s_)`**.
    * La _periodicidad_ se proporciona usando h, m y s. Una vez que se detecta una interrupción, el tiempo de la siguiente interrupción se actualiza avanzando el valor de h, m y s. La Clase DateTime resulta útil para esto.

        * ej:- `interruptTime = DateTime(interruptTime.get() + interruptInterval);  //decide el tiempo para la siguiente interrupción`

        * Este sketch también produce salida detallada, es decir, los diversos eventos que ocurren dentro del MCU se muestran en el terminal serie.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Stalker_v3.0_datalogger_flowchart.png)

### Leer el estado de carga

* * *

El estado de carga de la batería se puede leer usando el siguiente sketch. La batería se puede cargar conectando un panel solar a la placa o a través del UartSBee.

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

### Lectura del voltaje de la batería Li-Po BAT

* * *

El voltaje de la batería Li-Po conectada al Seeeduino Stalker V3 puede leerse mediante el pin analógico A7. El siguiente sketch demuestra esto.

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

_Referencia: [analogReference](https://arduino.cc/en/Reference/AnalogReference)_

## Información adicional para usar el módulo Bee

Las siguientes tablas muestran la conexión UART predeterminada entre el Socket Bee y el MCU ATMega328.

<table>
<caption><font>Cómo usar</font></caption>
<tr><th>Pines en el socket Bee</th><th>Pines en ATmega328</th></tr>
<tr><td>BEE_TXD</td><td>digital 0</td></tr>
<tr><td>BEE_RXD</td><td>digital 1</td></tr>
</table>


También, puedes encender o apagar la fuente de alimentación del módulo Bee mediante el pad opcional.

<font >Operación： En la parte posterior del Seeeduino Stalker v3, puedes encontrar un pad de soldadura "P1". Solda el P1 y usa el siguiente código para cortar la fuente de alimentación. </font>

<pre>
digitalWrite(5,HIGH);
</pre>

## Problema conocido

**Usuarios afectados**: Este problema afecta a aquellos que desean usar la característica opcional de conectar el Socket Bee al puerto serie por software en lugar del puerto serie H/W (predeterminado).

**Problema**: El jumper P5 no se puede configurar para usar el puerto serie por software cortando la conexión predeterminada y resoldando (es decir) BEE_RXD no se puede conectar a PD7 en lugar del PD1 predeterminado simplemente cortando/soldando el jumper según la [descripción de P5](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#PCB_Jumper_Pads). Hay un error de hardware.

**Solución alternativa**:

1. En la capa superior corta el enrutamiento desde la señal PD1/TXD al resistor R16 como se muestra en las siguientes imágenes. Por favor usa un cuchillo afilado y corta suavemente la conexión:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/StalkerV3.0_P6Issue_1.jpg)

Antes de la modificación

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/StalkerV3.0_P6Issue_Workaround.jpg)

Después de la modificación

2.Ahora aplica el procedimiento mencionado en <a href="/es/Seeeduino-Stalker_v3#pcb-jumper-pads" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a> (es decir) corta el jumper y solda el pad central del Jumper P5 a PD7.

## Diseño de la placa

Las imágenes están tomadas de los archivos EAGLE

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Board.PNG)

Seeeduino_Stalker_v3.0_Board

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_1.PNG)

Alimentación

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_2.PNG)

Arduino

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_3.PNG)

BEE TF

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_4.PNG)

RTC I2C

## Visor de esquemático en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino_Stalker_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* Software:

  * [Seeeduino Stalker V3 - Librería RTC DS1337](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DS1337.zip)

  * [Seeeduino Stalker V3.0 - Ejemplo de registrador de datos](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/StalkerV30_DataLogger_10Sec.zip)

* Diseño:

  * [Seeeduino Stalker v3.0 - Esquemático PDF y archivos EAGLE](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino_Stalker_v3.0.zip)

  * [Seeeduino Stalker v3.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino%20Stalker%20v3.0.pdf)

* [Seeeduino Stalker v3.0 sch](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino%20Stalker%20v3.0.sch)

* Hojas de datos:

  * [Hoja de datos del DS1337S](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DS1337-DS1337C-99519.pdf)

  * [Hoja de datos del CN3065)](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/CN3065.pdf)
  * [Hoja de datos del CN3065 (Inglés)](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DSE-CN3065.pdf)

  * [Hoja de datos del TD6810](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/TD6810.pdf)

* Otros:

  * [Bootloader vía AVRISP MKII](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/ATmegaBOOT_168_atmega328_pro_8MHz.hex.zip)

  * [Archivo completo vía Offline-AVRISP](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Stalker_V2_Final.Prjt.zip)

## Soporte Técnico y Discusión de Productos

   <br />
 ¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
