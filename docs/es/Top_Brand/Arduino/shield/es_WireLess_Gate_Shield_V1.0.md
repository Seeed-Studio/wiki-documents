---
description: WireLess_Gate_Shield_V1.0
title: WireLess Gate Shield V1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/WireLess_Gate_Shield_V1.0
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_h.jpg" alt="pir" width={600} height="auto" /></p>

WireLess Gate Shield es una tarjeta de expansión compatible con Arduino diseñada para construir un sistema de recepción/transmisión y difusión de varios comandos y datos inalámbricos. Para la máxima cobertura posible, las interfaces de comunicación inalámbrica en la placa tienen una interfaz de receptor IR para conectar el popular transceptor nRF24L01+ y RFM69HW. Además, la placa tiene un módulo de reloj de tiempo real DS1307.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_intro.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/WireLess-Gate-Shield-p-2117.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

---

* Interfaz para conectar el transceptor 315/433/868/915 MHz (dependiendo de la versión) [RFM69HW](http://devicter.ru/goods/RFM69HW-RF-transceiver)

* Interfaz para conectar el transceptor a 2.4 GHz [nRF24L01+](https://www.seeedstudio.com/depot/s/nRF24L01.html?search_in_description=0)

* Receptor IR
* Módulo de reloj de tiempo real basado en DS1307 con respaldo de batería
* LED de actividad automática de módulos de radio
* LED para usuario
* Botón de reloj para operar
* Conector compatible con [GROVE](https://www.seeedstudio.com/depot/Grove-t-3.html?ref=top): I2C
* Totalmente compatible con [Ethernet Shield](https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html)

## Diseño y esquemas

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-top.png" alt="pir" width={600} height="auto" /></p>

En el lado izquierdo del WireLess Gate Shield están las interfaces para módulos inalámbricos:

* nRF24l01+, incluyendo la versión mejorada ("PA") (arriba)
* RFM69HW (abajo).

Entre los módulos inalámbricos hay un conector U.FL para antena externa para RFM69HW. Si planeas usar la antena regular (trozo de cable de longitud requerida) - es posible soldarlo directamente a la placa Shield (cerca del conector U.FL)

A la derecha y ligeramente arriba del módulo RFM69HW está el LED LED1 "RF433"

En la parte central de la placa hay una ranura para una batería de respaldo para el módulo de reloj DS1307

A la derecha y ligeramente debajo de la ranura para la batería - conector I2C.

En el lado derecho está (de arriba hacia abajo):

* LED LED2 "RF24"
* Receptor IR
* LED LED3 - usuario
* Botón de reloj S1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-Scheme.PNG" alt="pir" width={600} height="auto" /></p>

## Funcionalidad básica

---
En la versión básica (sin el uso de Ethernet Shield) se puede organizar una puerta de enlace inalámbrica entre las radios y el receptor IR.

Los comandos (o datos) pueden ser difundidos entre las tres interfaces inalámbricas según la lógica de ese programa que el usuario programe.

La disponibilidad del módulo de reloj de tiempo real automatizará el envío de cualquier dato o comando con referencia a la fecha/hora.

La gestión del dispositivo puede organizarse usando un botón ubicado en el Shield.

## Capacidades de Expansión

---
Adicionalmente, WireLess Gate Shield puede conectar cualquier dispositivo i2c usando conexiones compatibles con Grove (sensores, pantallas, etc.).

WireLess Gate Shield fue diseñado para ser completamente compatible con [Ethernet Shield](https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html) - por lo que puedes usar estos dos Shield juntos para crear un dispositivo de control inalámbrico aún más avanzado (registro en tarjeta SD y presentación de datos en una página web, gestión de dispositivos inalámbricos vía web).

## Interfaces

---

* Interfaz para módulo RF nRF24L01+:
  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D7 - RF24_CE

    * D8 - RF24_CSN

    * D2 - RF24_IRQ

* Interfaz para módulo RF RFM69HW:
  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D9 - RF433_NSS

    * A0 - RF433_RESET

    * D3 - RF433_IRQ

* A4 (SDA), A5 (SCL) - mostrados en el conector "I2C" (los otros dos pines en el conector - VCC y GND para alimentación del sensor)
* A4 (SDA), A5 (SCL) - están involucrados en paralelo para RTC DS1307
* A1 - Botón
* D6 - LED Personalizado (LED3)

## Características de WireLess Gate Shield

---

### Módulos Inalámbricos

Ambos módulos inalámbricos RFM69HW y nRF24l01+ están conectados al bus de hardware SPI.

La selección de un módulo inalámbrico particular es un potencial bajo para el establecimiento del pin de selección de chip apropiado:

* CSN (D8) para el módulo nRF24l01+
* NSS (D9) para el módulo RFM69HW

_'Advertencia', 'Si tienes instalado, pero el software no está involucrado RFM69HW, asegúrate de instalar el pin NSS de este módulo en estado HIGH (de lo contrario interferirá con la operación normal de nRF24l01+ y Ethernet Shield._

### Visualización automática de los módulos inalámbricos

La indicación LED del módulo inalámbrico está implementada de la siguiente manera:

* El cátodo LED LED1 "RF24" conectado al pin CSN (D8) del módulo nRF24l01+, el ánodo del LED (a través de una resistencia limitadora de corriente) - al pin SCK del bus SPI (D13)
* El cátodo LED LED2 "RF433" conectado al pin NSS (D9) del módulo RFM69HW, el ánodo del LED (a través de una resistencia limitadora de corriente) - al pin SCK del bus SPI (D13)

Cuando los radios no están activos - en los pines apropiados de selección de chip (CSN y NSS) hay un potencial alto, con la aparición del reloj en el pin SCK no conduce al encendido de los LEDs.
Si el mismo MK "se comunica" con cualquier módulo inalámbrico para seleccionarlo en el Pin apropiado (CSN y NSS) se establece un potencial bajo y al mismo tiempo los pulsos de temporización en el pin SCK "encienden" el LED correspondiente.

Por lo tanto, no se requiere que el usuario organice ningún trabajo de programación adicional en el MC para indicar la operación del módulo.

### Características

Si es necesario, reemplazar el SMD-LED por las salidas usuales (por ejemplo, para incrustar el dispositivo terminado en una carcasa bonita con pantalla):

* La placa está cerca del equipo correspondiente LED es el asiento donde puedes soldar terminales de LEDs (o el cable apropiado).
* La resistencia limitadora de corriente está en la placa (para la salida del LED no se requiere resistencia en serie)
* El SMD-LED cuando se configura la salida del LED debe ser removido de la placa

### Modificación para control vía IR

El LED personalizado puede ser reemplazado por el pin LED3 con LED IR y así expandir aún más el uso de WireLess Gate Shield (por ejemplo, un comando enviado vía cualquier interfaz inalámbrica o LAN - controlar dispositivos usando comandos infrarrojos).

## Bibliotecas

### Biblioteca Requerida

Para usar el WireLess Gate Shield se requieren las siguientes bibliotecas:

* Trabajar con el transceptor nRF24L01 + - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

* Trabajar con el transceptor RFM69HW - [RFM69](https://github.com/LowPowerLab/RFM69/archive/master.zip)

* Reloj de tiempo real (RTC) - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

* Receptor IR - [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip)

Bibliotecas adicionales requeridas que se usan cuando se trabaja con RF24 y pantalla LCD:

* SPI

Las bibliotecas son ejemplos de ellas solo para entender cómo funcionan.

### Características de uso de bibliotecas

**NRF24l01 +**

La inicialización del módulo nRF24l01 + es la siguiente:

```cpp
//RF24 radio(CE,CSN);
RF24 radio(7,8);
```

**RFM69HW**

Para trabajar con un módulo inalámbrico RFM69HW es necesario hacer correcciones menores al archivo RFM69.h como sigue:

Al principio del archivo encontrar la línea:

```cpp
#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328
#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)
```

Y reemplázalos con:

```cpp
//#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328
//#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)
#define SPI_CS               9 // SS is the SPI slave select pin, for WireLess Gate Shield - D9
#define RF69_IRQ_PIN          3 // INT1 on AVRs should be connected to DIO0 (ex on Atmega328 it's D3)
```

Además, el archivo RFM69.cpp necesita encontrar la línea:

```cpp
void RFM69::isr0() { selfPointer->interruptHandler(); }
```

Y reemplázalos con:

```cpp
//void RFM69::isr0() { selfPointer->interruptHandler(); }
void RFM69::isr1() { selfPointer->interruptHandler(); }
```

La inicialización del módulo RFM69HW es la siguiente:

```cpp
  resetRFM69();
  radio.setCS(9); // NSS - D9
  radio.initialize(FREQUENCY,NODEID,NETWORKID);
```

_'Nota:'_ Trabajar con RFM69HW está determinado por el estado de sus registros. Para más tinturas para endpoints específicos requeridos por las reglas en el archivo RFM69.cpp función RFM69 :: initialize
Para entender mejor el propósito de los registros lee el archivo RFM69registers.h (también incluido en la biblioteca), y la documentación [radio RFM69HW](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

## Demostración

### Código para la unidad principal con WireLess Gate Shield (funciona con RTC, IR, RFM69HW, nRF24l01 +)

* Envía una estructura a otro RFM69HW y recibe una respuesta (ping-pong).
* Escucha nRF24l01 + llega y si el paquete es apropiado - lo envía al monitor
* Acepta comandos vía receptor IR (los comandos reconocidos se muestran en el monitor) y enciende LED personalizado

Todos los resultados se muestran en el Monitor Serie

```cpp
#include <RFM69.h>
#include <SPI.h>
#include "RF24.h"
#include <IRremote.h>
#include <Wire.h>
#include "RTClib.h"

RF24 radio24(7,8);

RTC_DS1307 RTC;

int RECV_PIN = 5;

IRrecv irrecv(RECV_PIN);

decode_results results;

// create a framework for the transmission of values
typedef struct{
    int SensorID;        // ID sensor
    int CommandTo;       // command module number ...
    int Command;         // command
    // 0 - answer
    // 1 - get the value
    // 2 - set the value
    int ParamID;         // parameter identifier
    float ParamValue;    // value
    boolean Status;      // status
    // 0 - read-only (RO)
    // 1 -  can change the (RW)
    char Comment[16];    // comment
}
Message;

Message sensor;

const uint64_t pipes[2] = {
0xF0F0F0F0E1LL, 0xF0F0F0F0D2LL };

volatile boolean waitRF24 = false;

#define NODEID      99
#define NETWORKID   100
#define GATEWAYID   1
#define FREQUENCY   RF69_433MHZ //Match this with the version of your Moteino! (others: RF69_433MHZ, RF69_868MHZ)
#define KEY         "thisIsEncryptKey" //has to be same 16 characters/bytes on all nodes, not more not less!
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // # of ms to wait for an ack

#define RFM69_RESET 14  //A0
#define RFM69_NSS 9
#define RFM69_DIO0 3

#define BUTTON 15 // A1

#define MOSI 11
#define MISO 12
#define SCK 13

int TRANSMITPERIOD = 500; //transmit a packet to gateway so often (in ms)
byte sendSize=0;
boolean requestACK = false;
RFM69 radio;

int delta=2000;

unsigned long blinkStop;
unsigned long timeReady;

typedef struct {
    int           nodeId; //store this nodeId
    unsigned long uptime; //uptime in ms
    float         temp;   //temperature maybe?
}
Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);

    pinMode(LED, OUTPUT);

    pinMode(RFM69_NSS, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(8, OUTPUT);
    pinMode(MOSI, OUTPUT);
    pinMode(MISO, INPUT);
    pinMode(SCK, OUTPUT);

    pinMode(RFM69_RESET, OUTPUT);
    pinMode(RFM69_DIO0, INPUT);

    pinMode(BUTTON, INPUT);

    digitalWrite(RFM69_NSS, HIGH);
    digitalWrite(7, HIGH);

    resetRFM69();
    radio.setCS(RFM69_NSS);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //uncomment only for RFM69HW!

    radio.encrypt(KEY);
    char buff[50];
    sprintf(buff, "\nTransmitting at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);

    radio24.begin();
    // optionally, increase the delay between retries & # of retries
    radio24.setRetries(15,15);
    radio24.setChannel(119);
    // по умолчанию СЛУШАЕМ
    radio24.openWritingPipe(pipes[1]);
    radio24.openReadingPipe(1,pipes[0]);
    radio24.startListening();

    delay(20);

    attachInterrupt(0, isr_RF24, FALLING);

    irrecv.enableIRIn();

    Wire.begin();
    RTC.begin();

    if (! RTC.isrunning()) {
        Serial.println("RTC is NOT running!");
        // following line sets the RTC to the date & time this sketch was compiled
        RTC.adjust(DateTime(__DATE__, __TIME__));
    }
}

long lastPeriod = -1;
void loop() {

    //check for any received packets
    if (radio.receiveDone())
    {
        Serial.print('[');
        Serial.print(radio.SENDERID, DEC);
        Serial.print("] ");
        for (byte i = 0; i < radio.DATALEN; i++)
        Serial.print((char)radio.DATA[i]);
        Serial.print("   [RX_RSSI:");
        Serial.print(radio.readRSSI());
        Serial.print("]");

        if (radio.ACK_REQUESTED)
        {
            radio.sendACK();
            Serial.print(" - ACK sent");
            delay(10);
        }
        Serial.println();
    }

    int currPeriod = millis()/TRANSMITPERIOD;
    if (currPeriod != lastPeriod)
    {
        //fill in the struct with new values
        theData.nodeId = NODEID;
        theData.uptime = millis();
        theData.temp = radio.readTemperature();//91.23; //it's hot!

        Serial.print("Sending struct (");
        Serial.print(sizeof(theData));
        Serial.print(" bytes) ... ");
        if (radio.sendWithRetry(GATEWAYID, (const void*)(&theData), sizeof(theData)))
        Serial.print(" ok!");
        else Serial.print(" nothing...");
        Serial.println();
        lastPeriod=currPeriod;
    }

    listenRF24();

    if (irrecv.decode(&results)) {
        Serial.println(results.value, HEX);
        irrecv.resume(); // Receive the next value
        blinkStop=millis()+100;
        digitalWrite(LED, HIGH);
    }

    if (digitalRead(BUTTON)==LOW) {
        blinkStop=millis()+1000;
        digitalWrite(LED, HIGH);
    }

    if (millis()>blinkStop) {
        digitalWrite(LED, LOW);
    }

    if(millis()>timeReady){
        timeReady=millis()+2000;
        DateTime now = RTC.now();

        Serial.print(now.year(), DEC);
        Serial.print('/');
        Serial.print(now.month(), DEC);
        Serial.print('/');
        Serial.print(now.day(), DEC);
        Serial.print(' ');
        Serial.print(now.hour(), DEC);
        Serial.print(':');
        Serial.print(now.minute(), DEC);
        Serial.print(':');
        Serial.print(now.second(), DEC);
        Serial.println();
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}

void isr_RF24(){
    waitRF24 = true;
}

void listenRF24() {
    if (waitRF24) {
        waitRF24 = false;
        if ( radio24.available() )
        {
            bool done = false;
            while (!done)
            {
                done = radio24.read( &sensor, sizeof(sensor) );
                if(sensor.Command == 0) {
                    Serial.print(sensor.SensorID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamValue);
                    Serial.print(" ");
                    Serial.println(sensor.Comment);
                }
            }
        }
    }
}
```

### Código para "receptor" (para la prueba se usó Arduino Nano y módulo RFM69HW en la protoboard)

* Toma usando estructura RFM69HW
* Responsable de la recepción
* Imprime información adicional sobre el módulo RFM69HW (registros, etc.)

```cpp
#include <RFM69.h>
#include <SPI.h>

#define NODEID      1
#define NETWORKID   100
#define FREQUENCY   RF69_433MHZ //Match this with the version of your Moteino! (others: RF69_433MHZ, RF69_868MHZ)
#define KEY         "thisIsEncryptKey" //has to be same 16 characters/bytes on all nodes, not more not less!
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // # of ms to wait for an ack

#define RFM69_RESET 14

RFM69 radio;
bool promiscuousMode = false; //set to 'true' to sniff all packets on the same network

typedef struct {
    int           nodeId; //store this nodeId
    unsigned long uptime; //uptime in ms
    float         temp;   //temperature maybe?
} Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);
    pinMode(RFM69_RESET, OUTPUT);
    pinMode(3, INPUT);
    resetRFM69();
    radio.setCS(9);
    //delay(10);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //uncomment only for RFM69HW!

    radio.encrypt(KEY);
    radio.promiscuous(promiscuousMode);
    char buff[50];
    sprintf(buff, "\nListening at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);
}

byte ackCount=0;
void loop() {
    //process any serial input
    if (Serial.available() > 0)
    {
        char input = Serial.read();
        if (input == 'r') //d=dump all register values
        radio.readAllRegs();
        if (input == 'E') //E=enable encryption
        radio.encrypt(KEY);
        if (input == 'e') //e=disable encryption
        radio.encrypt(null);
        if (input == 'p')
        {
            promiscuousMode = !promiscuousMode;
            radio.promiscuous(promiscuousMode);
            Serial.print("Promiscuous mode ");Serial.println(promiscuousMode ? "on" : "off");
        }

        if (input == 'd') //d=dump flash area
        {
            Serial.println("Flash content:");
            int counter = 0;

            while(counter<=256){
                //Serial.print(flash.readByte(counter++), HEX);
                Serial.print('.');
            }
            //while(flash.busy());
            Serial.println();
        }
        if (input == 'D')
        {
            Serial.print("Deleting Flash chip content... ");
            //flash.chipErase();
            //while(flash.busy());
            Serial.println("DONE");
        }
        if (input == 'i')
        {
            Serial.print("DeviceID: ");
            //word jedecid = flash.readDeviceId();
            //Serial.println(jedecid, HEX);
        }
    }

    if (radio.receiveDone())
    {
        Serial.print('[');Serial.print(radio.SENDERID, DEC);Serial.print("] ");
        Serial.print(" [RX_RSSI:");Serial.print(radio.readRSSI());Serial.print("]");
        if (promiscuousMode)
        {
            Serial.print("to [");Serial.print(radio.TARGETID, DEC);Serial.print("] ");
        }

        if (radio.DATALEN != sizeof(Payload))
        Serial.print("Invalid payload received, not matching Payload struct!");
        else
        {
            theData = *(Payload*)radio.DATA; //assume radio.DATA actually contains our struct and not something else
            Serial.print(" nodeId=");
            Serial.print(theData.nodeId);
            Serial.print(" uptime=");
            Serial.print(theData.uptime);
            Serial.print(" temp=");
            Serial.print(theData.temp);
        }

        if (radio.ACK_REQUESTED)
        {
            byte theNodeID = radio.SENDERID;
            radio.sendACK();
            Serial.print(" - ACK sent.");

            // When a node requests an ACK, respond to the ACK
            // and also send a packet requesting an ACK (every 3rd one only)
            // This way both TX/RX NODE functions are tested on 1 end at the GATEWAY
            if (ackCount++%3==0)
            {
                Serial.print(" Pinging node ");
                Serial.print(theNodeID);
                Serial.print(" - ACK...");
                delay(3); //need this when sending right after reception .. ?
                if (radio.sendWithRetry(theNodeID, "ACK TEST", 8, 0))  // 0 = only 1 attempt, no retries
                Serial.print("ok!");
                else Serial.print("nothing");
            }
        }
        Serial.println();
        Blink(LED,3);
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}
```

## Versiones del producto

<table cellPadding="5" cellSpacing="0">
  <tbody>
    <tr>
      <td width="150"> <strong>Revisión</strong> </td>
      <td width="450"> <strong>Descripción</strong> </td>
      <td width="80"> <strong>Lanzamiento</strong> </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 0.9 </td>
      <td> Prototipo </td>
      <td> 05.05.2014 </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 1.0 </td>
      <td> Versión pública </td>
      <td> 05.07.2014 </td>
    </tr>
  </tbody>
</table>

## Aplicaciones

* Puerta de Enlace Inalámbrica Universal RF2.4 GHz (nRF24l01 +), RF433 MHz (RFM69HW), IR y LAN (usando Ethernet Shield)
* Sistema de registro de comandos y datos de dispositivos inalámbricos con la hora (usando el Ethernet Shield)
* Diseño y construcción de administración de varios comandos inalámbricos en un momento determinado (por ejemplo, "encender la luz el 23 de agosto de 2014 a las 18:02" o "todos los días incluir un riego automático a las 5:00")

## Preguntas y Respuestas

* Blog WireLess Gate Shield RU

* Haz una pregunta por correo electrónico support@devicter.ru

## Cómo comprar

Este producto se puede comprar:

China (envío mundial)

[Tienda Elecrow](http://www.elecrow.com/wireless-gate-shield-p-1139.html)

[Tienda Seeed](https://www.seeedstudio.com/depot/wireless-gate-shield.html)

Rusia

[Tienda Devicter](http://devicter.ru/goods/WireLess-Gate-Shield)

## Enlaces

* [Descripción RFM69HW](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

* [Descripción nRF24l01+](ftp://imall.iteadstudio.com/Modules/IM120606002_nRF24L01_module/DS_nRF24L01.pdf)

* [esquema del dispositivo](http://wiki.devicter.ru/images/c/c7/Wl-Scheme.PNG)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
