---
description: Bluetooth Bee
title: Bluetooth Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bluetooth_Bee
last_update:
  date: 1/13/2023
  author: jianjing Huang
---
<!-- ---
name:  Bluetooth Bee
category: Discontinued
bzurl:
oldwikiname: Bluetooth_Bee
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Bluetooth-Bee
sku: 113050001
tags:
--- -->

![](http://bz.seeedstudio.com/depot/images/product/bbee_LRG.jpg)

**Bluetooth Bee** es un módulo <font size={4} face="黑体">Bluetooth Serial Port Profile(SPP)</font> fácil de usar, compatible con sockets **Xbee** existentes, diseñado para configuración transparente de conexión serial inalámbrica.
El módulo Bluetooth de puerto serial está completamente calificado con Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation con transceptor de radio completo de 2.4GHz y banda base. Utiliza **CSR Bluecore 04**-External, sistema Bluetooth de chip único con tecnología CMOS y con AFH(Adaptive Frequency Hopping Feature). Tiene la huella más pequeña de **12.7mm x 27mm**

Modelo:[WLS125E1P](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

## Características ##

### Características de Hardware ###

- Sensibilidad típica de -80dBm.

- Hasta +4dBm de potencia de transmisión RF.

- Bluetooth V2.0+EDR 3Mbps Modulation completamente calificado.

- Operación de bajo consumo 1.8V, 1.8 a 3.6V I/O.

- Control PIO.

- Interfaz UART con velocidad de baudios programable.

- Antena PCB integrada.

- Conectores compatibles con xBee.

### Características de Software ###

- Velocidad de baudios por defecto: <font size={4} font face="黑体">38400</font>, Bits de datos:8, Bit de parada:1, Paridad:Sin paridad, Control de datos: tiene.

- Velocidades de baudios soportadas: 9600,19200,38400,57600,115200,230400,460800.

- Usa CTS y RTS para controlar el flujo de datos.

- Cuando se detecta un pulso ascendente en PIO0, el dispositivo se desconectará.

- Puerto de instrucción de estado PIO1: bajo-desconectado, alto-conectado;

- PIO10 está conectado al led <font color="red" font>rojo</font>, PIO11 está conectado al led verde. Cuando maestro y esclavo están emparejados, los leds rojo y verde parpadean 1 vez / 2s en intervalos, mientras que desconectado solo el led verde parpadea 2 veces/ s.

- Auto-conectar al último dispositivo al encender por defecto.

- Permitir conexión de dispositivo emparejado por defecto.

- PINCODE por defecto:"0000".

- Auto-reconectar en 30 min cuando se desconecta como resultado de estar fuera del rango de conexión.

## Ideas de Aplicación ##

- Como Puerto Serial Inalámbrico para Arduino / [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) y otros MCUs

- Como Puerto Serial Bluetooth para PC cuando se conecta con UartSBee

## Precauciones ##

- Mientras se usa con Seeeduino / Arduino, configurar el voltaje de operación a 3.3V. De lo contrario usar un convertidor de nivel lógico apropiado.

- Mientras se usa con UartSBee, configurar el voltaje de operación a 3.3V

- El comando para cambiar la velocidad de baudios es persistente incluso después del reset. Por lo tanto recordar la velocidad de baudios para el próximo uso.

- Cuando se usa SoftwareSerial, no configurar la velocidad de baudios por encima de 38400

## Esquemático ##

[Archivos de Esquemático y Placa de Bluetooth Bee en Formato Eagle s](https://aps-solver.com/services/transportation/refrigerated-cargo/)[servicio de transporte refrigerado](https://aps-solver.com/services/transportation/refrigerated-cargo/) de la empresa de carga APS

## Definición de pines y Clasificación ##

Vista inferior:
![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-pin.jpg)

| Pin   | #  | Tipo de Pad   | Descripción                    |
|-------|----|----------------------------------------------------|--------------------------------|
| PI09  | 29 | Bi-Direccional                                       | Línea de entrada/salida programable |
| PI08  | 28 | Bi-Direccional                                       |                  Línea de entrada/salida programable              |
| PIO7  | 27 | Bi-Direccional                                       |               Línea de entrada/salida programable                 |
| PIO6  | 26 | Bi-Direccional                                       |                 Línea de entrada/salida programable               |
| RTS   | 25 | Salida CMOS, tri-estado con pull-up interno débil |                  UART solicitud de envío, activo bajo           |
| PIO5  | 24 | Bi-Direccional                                       |                 Línea de entrada/salida programable               |
| PI04  | 23 | Bi-Direccional                                       |                     Línea de entrada/salida programable              |
| PCMSY | 22 | Bi-Direccional                                       |                   Datos PCM síncronos             |
|     CTS  |   21 |         Salida CMOS, tri-estado con pull-up interno débil                                            |                    UART listo para enviar, activo bajo            |
|  PIO3     |   20 |             Bi-Direccional                                       |           Línea de entrada/salida programable                        |
|    PIO2   |   19 |               Bi-Direccional                                     |               Línea de entrada/salida programable                    |
|    USBDP   |  18  |           Bi-Direccional                                         |                                |
|    USBDN   |   17 |        Bi-Direccional                                            |                                  |
|    CLK   |   16 |     Salida CMOS, tri-estado con pull-up interno débil                                                      |                  Reloj de SPI (Interfaz periférica serie)              |
|  MI     |   15 |        Salida CMOS, tri-estado con pull-up interno débil                                                   |        Salida de datos SPI                        |
|     MO  |   14 |              Salida CMOS, tri-estado con pull-up interno débil                                             |               Salida de datos SPI                   |
|    CS   |   13 |             Salida CMOS, tri-estado con pull-up interno débil                                              |   Selección de chip para interfaz periférica serie, activo bajo                           |
|     AIO1  |   12 |          Bi-Direccional                           |         Línea de entrada/salida programable                        |
|    AIO0   |   11 |              Bi-Direccional                                      |              Línea de entrada/salida programable                   |
|  GND     |   10 |                   VSS                                 |           Puerto de tierra                     |
|  PCMIN     |   9 |            Entrada CMO                                        |               Entrada de datos PCM síncronos
|     PCMOT  |   8 |                Salida CMOS                                    |          Entrada de datos PCM síncronos                        |
|     PCMCK  |   7 |          Bidireccional                                          |               Entrada de datos PCM síncronos                   |
|   PIO1    |   6 |           Bidireccional                                         |                Línea de entrada/salida programable                 |
|    IRST   |   5 |            Salida CMOS, tri-estado con pull-up interno débil                                                |          Reinicio si está bajo, la entrada debe estar baja por >5ms para causar un reinicio                      |
|   PIO0    |   4 |        Bidireccional                                             |              Línea de entrada/salida programable                   |
|RX       |   3 |                Salida CMOS, tri-estado con pull-up interno débil                                               |      Entrada de datos UART                          |
|  TX     |   2 |               Salida CMOS, tri-estado con pull-up interno débil                                                | Entrada de datos UART                                 |
|    3V3   |   1 |     3.3V                                               |                   Suministro integrado de 3.3v(+) con salida de regulador lineal en chip dentro de 3.15-3.3v             |

## Dimensiones Mecánicas ##

La placa Bluetooth Bee tiene un tamaño de 12.7mm x 27mm.

## Uso ##

### Instalación de Hardware ###

#### Conectando a Arduino con XBee Shield ####

Usa un [XBee® Shield](https://seeeddoc.github.io/XBee-Shield/) para conectar **Bluetooth Bee** a Seeeduino / Arduino. Consulta la documentación del [XBee® Shield](https://seeeddoc.github.io/XBee-Shield/) sobre cómo configurar los interruptores de palanca en las posiciones correctas.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

#### Conectando a PC con UartSbee ####

Usa un UartSBee para conectar **Bluetooth Bee** a PC. Configura el interruptor de selección de alimentación a 3.3V antes de conectar BlueTooth Bee.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BluetoothBee_with_UartSBee.JPG)

### Instrucciones de Software ###

#### Mapa de Esquema de Funcionamiento ####

El siguiente esquema presenta una visión general de la operación de **Bluetooth Bee** en modo maestro y esclavo.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-1.jpg)

#### Diagrama de Flujo ####

El siguiente diagrama de flujo proporciona una guía de inicio rápido para la programación de **Bluetooth Bee**.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-2.jpg)

#### Comandos para cambiar la configuración predeterminada ####

1. Configurar MODO de trabajo

|  \r\n+STWMOD=0\r\n |   Configurar el modo de trabajo del dispositivo como cliente (esclavo). Guardar y Reiniciar. |
|--|||
| **\r\n+STWMOD=1\r\n** | **Configurar el modo de trabajo del dispositivo como servidor (maestro). Guardar y Reiniciar.**  |

**Nota:**\r\n es necesario para la operación y el valor son **80x0D 0x0A** en Hex. **\r** y **\n** representan **retorno de carro** y **avance de línea**(o siguiente línea),

2.Establecer BAUDRATE

|   \r\n+STBD=115200\r\n | Establecer baudrate 115200. Guardar y Reiniciar.  |
|---|---|
|    **Baudrate soportado: 9600, 19200,38400,57600,115200,230400,460800.**|  ||

 3.Establecer NOMBRE del Dispositivo

|  \r\n+STNA=abcdefg\r\n  | Establecer nombre del dispositivo como "abcdefg". Guardar y Reiniciar.   |
|---|---|
||||

 \r\n+STNA=abcdefg\r\n
 Establecer nombre del dispositivo como "abcdefg". Guardar y Reiniciar.

4.Conectar automáticamente el último dispositivo emparejado al encender

| \r\n+STAUTO=0\r\n  |Conexión automática prohibida. Guardar y Reiniciar.   |
|---|---|
|  **\r\n+STAUTO=1\r\n** |  **Permitir conexión automática. Guardar y Reiniciar.** |

5.Permitir que el dispositivo emparejado se conecte conmigo

| \r\n+STOAUT=0\r\n   |   Prohibido. Guardar y Reiniciar. |
|---|---|
| **\r\n+STOAUT=1\r\n**  | **Permitir. Guardar y Reiniciar.** |

6.Establecer CÓDIGO PIN

|  \r\n +STPIN=2222\r\n |  Establecer código pin "2222", Guardar y Reiniciar.  |
|---|
|||                     |

7.Eliminar CÓDIGO PIN(introducir CÓDIGO PIN por MCU)

|   \r\n+DLPIN\r\n |  Eliminar código pin. Guardar y Reiniciar. |
|---|---|
|   |   ||

8.Leer CÓDIGO DE DIRECCIÓN local

  |\r\n+RTADDR\r\n |             Devolver dirección del dispositivo.  |
|---|---|
|   |   ||

9.Reconexión automática cuando el dispositivo maestro está fuera del rango válido (el dispositivo esclavo se reconectará automáticamente en 30 min cuando esté fuera del rango válido)

|  \r\n+LOSSRECONN=0\r\n  |  Prohibir reconexión automática.  |
|---|---|
| **\r\n+LOSSRECONN=1\r\n** |  **Permitir reconexión automática.** |

#### Comandos para Operación Normal ####

#### 1.Consultar

#### a) Maestro

| \r\n+INQ=0\r\n  | Detener Consulta   |
|---|---|
|  **\r\n+INQ=1\r\n**  |  **Iniciar/Reiniciar Consulta**  |

#### b) Esclavo

|   \r\n+INQ=0\r\n | Deshabilitar ser consultado  |
|---|---|
| **\r\n+INQ=1\r\n** |  **Habilitar ser consultado** |

Cuando el comando **+INQ=1** es exitoso, los LEDs rojo y verde parpadean alternativamente.

#### 2.El módulo Bluetooth devuelve el resultado de la consulta

|  \r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n |Se consulta el dispositivo Bluetooth serie con la dirección "aa,bb,cc,dd,ee,ff" y el nombre "name"   |
|---|---|
|   |   ||

#### 3.Conectar dispositivo

| \r\n+CONN=aa,bb,cc,dd,ee,ff\r\n  | Conectar a un dispositivo con dirección "aa,bb,cc,dd,ee,ff"  |
|---|---|
|   |   ||

#### 4.El módulo Bluetooth solicita ingresar PINCODE

\r\n+INPIN\r\n

#### 5.Ingresar PINCODE

|  \r\n+RTPIN=code\r\n  |   |
|---|---|
|   **Ejemplo: RTPIN=0000** | **Ingresar PINCODE que son cuatro ceros** |

#### 6. Desconectar dispositivo

Poner PIO0 en alto desconectará el dispositivo Bluetooth que esté funcionando actualmente.

#### 7. Devolver estado

\r\n+BTSTA:xx\r\n

xx estado:

- 0 - Inicializando

- 1 - Listo

- 2 - Consultando

- 3 - Conectando

- 4 - Conectado

(**Nota**: Este no es un comando, sino la información devuelta por el módulo después de cada comando)

### Programación ###

#### Implementación Basada en Control de Flujo ####

El siguiente sketch configura **Bluetooth Bee** para [Transportunternehmen](http://aps-solver.de/leistungen/) como Dispositivo Esclavo y espera solicitud de conexión desde PC u otro dispositivo maestro.
Bluetooth Bee está conectado a Seeeduino a través de XBee Shield como se muestra arriba. Bluetooth Bee está conectado a los Pines digitales 11 y 12 de Arduino / Seeduino. Usamos la librería NewSoftSerial para soportar comunicación serial en estos pines. El puerto serial por hardware de Arduino está disponible para cargar sketch o depurar. Este sketch usa un mecanismo de control de flujo usando CheckOK(). Evita usar retardo arbitrario entre cada comando. Si CheckOK() no es requerido, use un retardo de al menos 3 segundos entre comandos.

```cpp
/*
BluetoothBee Demo Code - Flowcontrol Based Implementation
2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R

This demo code is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

For more details about the product please check https://www.seeedstudio.com/depot/

*/


/* Upload this sketch to Seeeduino and press reset*/

#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 11
#define TxD 12

#define DEBUG_ENABLED  1

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBlueToothConnection();

}

void loop()
{
  //Typical Bluetoth command - response simulation:

  //Type 'a' from PC Bluetooth Serial Terminal
  //See Bluetooth Bee - Wiki for instructions

  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("You are connected");
    //You can write you BT communication logic here
  }

}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeeduinoBluetooth\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n +STPIN=0000\r\n");
    delay(2000); // This delay is required.
    sendBlueToothCommand("\r\n+INQ=1\r\n");
    delay(2000); // This delay is required.
}

//Checks if the response "OK" is received
void CheckOK()
{
  char a,b;
  while(1)
  {
    if(blueToothSerial.available())
    {
    a = blueToothSerial.read();

    if('O' == a)
    {
      // Wait for next character K. available() is required in some cases, as K is not immediately available.
      while(blueToothSerial.available())
      {
         b = blueToothSerial.read();
         break;
      }
      if('K' == b)
      {
        break;
      }
    }
   }
  }

  while( (a = blueToothSerial.read()) != -1)
  {
    //Wait until all other response chars are received
  }
}

void sendBlueToothCommand(char command[])
{
    blueToothSerial.print(command);
    CheckOK();   
}
```

#### Implementación Basada en Retardo ####

El siguiente sketch es una modificación del programa anterior usando delay() en lugar de CheckOK(). En este caso el puerto serie por hardware se usa para propósitos de depuración. Abre el monitor serie con configuración de 9600 baudios. La comunicación completa entre MCU y Bluetooth Bee será visible en el monitor serie.

```cpp
/*
BluetoothBee Demo Code - Delay Based Implementaion
2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R

This demo code is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

For more details about the product please check https://www.seeedstudio.com/depot/

*/

/* Upload this sketch into Seeeduino and press reset*/

#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 11
#define TxD 12

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    Serial.begin(9600);          //Serial port for debugging, Comment this line if not required  
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBlueToothConnection();

}

void loop()
{

  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("You are connected to Bluetooth Bee");
    //You can write you BT communication logic here
  }
}

void setupBlueToothConnection()
{
    Serial.print("Setting up Bluetooth link");       //For debugging, Comment this line if not required    
    blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=modem\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n+STPIN=0000\r\n");
    delay(2000); // This delay is required.
    blueToothSerial.print("\r\n+INQ=1\r\n");
    delay(2000); // This delay is required.
    Serial.print("Setup complete");

}

void sendBlueToothCommand(char command[])
{
    char a;
    blueToothSerial.print(command);
    Serial.print(command);                          //For debugging, Comment this line if not required    
    delay(3000);

    while(blueToothSerial.available())              //For debugging, Comment this line if not required  
    {                                               //For debugging, Comment this line if not required   
       Serial.print(char(blueToothSerial.read()));  //For debugging, Comment this line if not required  
    }                                               //For debugging, Comment this line if not required   
}
```

#### Conectando Bluetooth Bee a PC (vía Dongle Bluetooth) bajo GNU/Linux ####

Este procedimiento demuestra cómo **Bluetooth Bee** puede conectarse a PC bajo el SO GNU/Linux. Se utiliza un Dongle Bluetooth USB en el lado del PC para comunicarse con **Bluetooth Bee**. El sketch de implementación de control de flujo se carga en Seeeduino.

- Instalar gnome-bluetooth

`
sudo apt-get install gnome-bluetooth
`

- Abrir la aplicación bluetooth-properties desde el shell

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config0.png)

- Hacer clic en Set up new device

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config1.png)

y hacer clic en Forward

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config2.png)

- Abrir PIN options...

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config2.1.png)

- Establecer Fixed PIN 0000. 0000 es el pin predeterminado utilizado en el sketch anterior.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config3.png)

- Se abre la ventana Device Setup

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config4.png)

- y se abre el diálogo Setup Completed. Hacer clic en Close.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config5.png)

- La dirección del **Bluetooth Bee** 00:13:EF:00:00:24 se muestra en el shell.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config6.png)

- Vincular el **Bluetooth Bee** al puerto rfcomm. Aquí la dirección del **Bluetooth Bee** se vincula a un dispositivo de puerto serie /dev/rfcomm0

```
user@user-desktop:~$ sudo rfcomm bind 0 00:13:EF:00:00:24 1
user@user-desktop:~$ ls /dev/rfcomm*
/dev/rfcomm0
```

- Este puerto serie /dev/rfcomm0 puede ser accedido por cualquier terminal de puerto serie como cutecom.

- Abrir /dev/rfcomm0 con velocidad de baudios: 38400, Bits de datos: 8, Bits de parada: 1 y Sin Control de Flujo
- Enviar el carácter 'a'

- Seeeduino + Bluetooth Bee responderá con **"You are connected to Bluetooth Bee"**

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config8.png)

#### Conectando Bluetooth Bee a PC (vía Dongle Bluetooth) bajo Windows ####

- Instalar los controladores predeterminados de Microsoft Bluetooth. Abrir Panel de Control -> Dispositivos Bluetooth

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows0.jpg)

- Hacer clic en el botón Agregar.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows1.jpg)

- Marcar Mi dispositivo está configurado y listo para ser encontrado y hacer clic en el botón Siguiente

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows2.jpg)

- Seleccionar el dispositivo "SeeedBlueToothBee" y hacer clic en Siguiente.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows3.jpg)

- Seleccionar Usar la clave de acceso encontrada en la documentación e ingresar 0000

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows4.jpg)

- Las claves de acceso se intercambian y se asigna un puerto serie saliente COM5 para nuestra comunicación.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows5.jpg)

- Un globo de la barra de tareas muestra que se agregó un nuevo enlace de Puerto Serie Bluetooth.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows6.jpg)

- COM5 se asigna para comunicación. Este puerto debe usarse para comunicar la PC con Bluetooth Bee.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows7.jpg)

- Este puerto serie COM5 puede ser accedido por cualquier terminal de Puerto Serie.

- Abrir COM5 con velocidad de baudios: 38400, Bits de datos: 8, Bits de parada: 1 y Sin Control de Flujo
- Enviar el carácter 'a'

- Seeeduino + Bluetooth Bee responderá con "You are connected to Bluetooth Bee"

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows8.jpg)

#### Conectando Bluetooth Bee a PC usando UartsBee en Modo Maestro ####

Esta demostración usa la configuración de hardware descrita en [Instalación de Hardware - UartSBee. Conectar UartSbee a PC usando un cable mini USB.

- Abrir una terminal serie y conectar al dispositivo de puerto serie UartSBee como COM1 en Windows o /dev/ttyUSB0 en GNU/Linux con velocidad de baudios: 38400, Bits de datos: 8, Bits de parada: 1 y Sin Control de Flujo

- Enviar el comando \r\n+STWMOD=1\r\n. Esto configura el **Bluetooth Bee** en modo maestro.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master1.png)

- Enviar el comando \r\n+INQ=1\r\n. **Bluetooth Bee** busca dispositivos Bluetooth disponibles en el vecindario y lista la dirección de los dispositivos. En este caso con +RTINQ=0,19,86,0,19,1E;desktop, donde desktop es una PC con interfaz Bluetooth. Mientras consulta, los leds rojo y verde parpadean alternativamente.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master2.png)

- Enviar \r\n+CONN=0,19,86,0,19,1E\r\n donde 0,19,86,0,19,1E es la dirección de desktop.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master3.png)

- Ingresar el pin 0000 en el lado de la PC y completar la conexión.

## Lista de Materiales (BOM) /lista de partes ##

- [PCB desnudo Bluetooth Bee](https://seeeddoc.github.io/w/index.php?title=Bluetooth_Bee_bare_PCB&action=edit&redlink=1)
- [Módulo bluetooth de puerto serie (Maestro/Esclavo)](https://seeeddoc.github.io/Serial_port_bluetooth_module-Master-Slave/)

## Soporte ##

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o [wish](http://wish.seeedstudio.com) para discutir.

## Seguimiento de Versiones ##

| Revisión  |  Descripciones  |  Lanzamiento |
|---|---|---|
|v1.0   | Lanzamiento público inicial  |  14 Dic, 2009  |
|  v1.1  |  Modificar comando Inquire y añadir algunas notas | 15 Mar, 2010  |
| v1.2  |  Modificar características de Hardware y Software | 04 Abr, 2010  |
|  v1.3  | Actualizar el perfil, añadir el estado de retorno, eliminar comando ECHO.  |  21 Abr, 2010 |
|  v2.0 | Actualizar el módulo como HM－01（El mismo que el shield Bluetooth más reciente）. El comando AT no puede ser compatible con versiones anteriores.  |   4 Dic, 2014 |

## Rastreador de Errores ##

El Rastreador de Errores es el lugar donde puedes publicar cualquier error que creas haber encontrado durante el uso. Por favor escribe lo que tengas que decir, tus respuestas nos ayudarán a mejorar nuestros productos.

## Idea Adicional ##

- Implementar un Teclado / Mouse PS/2 inalámbrico.

- Control inalámbrico de un robot de juguete desde PC.

## Cómo comprar ##

Haz clic aquí para comprar:[https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142).

## Licencias ##

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## Proyectos Relacionados ##

Si quieres hacer algunos proyectos increíbles con Bluetooth Bee, aquí tienes algunos proyectos de referencia.

### Seeed Pet ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Seeed_pet.jpg)

Esta es una demostración interesante hecha con seeduino y [Grove](https://seeeddoc.github.io/Grove_System/) (title=undefined).
SEEED PET es una especie de mascota electrónica en nuestro estudio. Es una plataforma para que los ingenieros novatos se familiaricen con los productos de nuestra empresa y practiquen. Cada ingeniero novato añadirá algunas ideas nuevas o elementos al SEEED PET.

[Quiero hacerlo.](https://community.seeedstudio.com/project_detail.html?id=16)

### Comparte Tus Proyectos Increíbles con Nosotros ###

Nacido con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.

Y solo por esto, la comunidad de código abierto puede ser tan próspera como es hoy.

No importa quién eres y qué has hecho, hacker, maker, artista e ingenieros,

mientras comiences a compartir tus trabajos con otros,

estás siendo parte de la comunidad de código abierto y estás haciendo tus contribuciones.

Ahora comparte tus proyectos increíbles con nosotros en [Recipe](https://community.seeedstudio.com/projects.html#recipe), y gana la oportunidad de convertirte en Usuario Principal de Seeed.

- Los Usuarios Principales, son aquellos que muestran alto interés y contribuciones significativas en los productos de Seeed.

- Cooperamos con nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier producto nuevo de Seeed antes de su lanzamiento oficial, y a cambio esperamos comentarios valiosos de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y en la mayoría de los casos si nuestros Usuarios Principales tienen buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios de PCBA así como soporte técnico. Además, una mayor cooperación comercial con los Usuarios Principales es altamente posible.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/es/images/f/f6/Bluetooth_Bee_Schematic_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]** [Archivos de Esquemático y Placa de Bluetooth Bee](https://wiki.seeedstudio.com/es/images/f/f6/Bluetooth_Bee_Schematic_Board.zip)

- **[PDF]**[Bluetooth_Bee_v2.0_SCH_PCB.zip](http://images/0/06/Bluetooth_Bee_v2.0_SCH_PCB.zip)

- **[Biblioteca]** [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

- **[Información]** [Información sobre cómo configurar conexiones entre Bluetooth Bees está disponible en el Foro de Seeedstudio](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

- **[Información]** [PC conectando Bluetooth Bee en el Foro de Seeedstudio](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

- **[Hoja de Datos]**  [Hoja de datos de Bluetooth Bee](https://files.seeedstudio.com/wiki/Bluetooth-Bee/res/Bluetooth_Bee_datasheet.pdf)

- **[Hoja de Datos]**[HM－01_Datasheet](https://files.seeedstudio.com/wiki/Bluetooth-Bee/res/HM%EF%BC%8D01_Datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
