---
title: Grove BLE v1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-BLE_v1/
slug: /es/Grove-BLE_v1
last_update:
  date: 01/06/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_front.png)![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_Back.png)

Grove - BLE v1 (Grove - Bluetooth Low Energy v1) utiliza un módulo Bluetooth de Baja Energía -- **HM-11**, basado en el chip TI CC2540, que tiene soporte para comandos AT. Como producto Grove, es conveniente usar Grove - BLE con la placa Arduino a través del Base Shield.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-BLE-p-1929.html)

Parámetros
----------

| Especificaciones    | Nombre                                                           |
|---------------------|------------------------------------------------------------------|
| Versión BT          | Especificación Bluetooth V4.0 BLE                               |
| Frecuencia de trabajo | Banda ISM de 2.4GHz                                           |
| Método de modulación | GFSK(Gaussian Frequency Shift Keying)                          |
| Potencia RF         | -23dbm, -6dbm, 0dbm, 6dbm, se puede modificar mediante el Comando AT AT+POWE |
| Velocidad           | Asíncrono: 6K Bytes, Síncrono: 6K Bytes                        |
| Sensibilidad        | ≤-84dBm al 0.1% BER                                            |
| Seguridad           | Autenticación y encriptación                                   |
| Servicio            | Central & Periférico UUID FFE0,FFE1                            |
| Alimentación        | 3.3v - 5v                                                      |
| Temperatura de trabajo | –5 ~ +65 Centígrados                                        |
| Tamaño              | 40cm x 20cm                                                     |
| Corriente de trabajo | &lt; 10 mA                                                    |
| Corriente de suministro | &lt; 20 mA                                                |
| Corriente en reposo | &lt; 1 mA                                                      |

:::note
La alimentación del HM-11 es de 3.3v, pero el Grove - BLE es de 3.3V a 5V.
:::

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

### Pinout

El conector Grove tiene cuatro cables: GND, VCC, RX, TX.

### Características del Diseño

Hemos usado el chip TD6810 como regulador de voltaje, por lo que el rango de la alimentación puede ser de 3.3v a 5v. Además, hay un circuito de cambio de nivel que asegura la precisión de la transmisión de datos.

### Comandos AT

**1）Consultar dirección del módulo**

Enviar： AT+ADDR?

Recibir：OK+LADD:address

**2） Consultar velocidad de baudios**

Enviar：AT+BAUD?

Recibir：OK+Get:[para1]

Rango： 0~8; 0--9600，1--19200，2--38400，3--57600，4--115200，5--4800，6--2400，7--1200，8--230400

Por defecto: 0--9600.

**Establecer velocidad de baudios**

Enviar：AT+BAUD[para1]

Recibir：OK+Set:[para1]

Ej.：Enviar ：AT+BAUD1 ，Recibir：OK+Set:1. La velocidad de baudios ha sido establecida a 19200

<!-- <div class="admonition note">
<p class="admonition-title">Note</p> -->
:::note
Si se configura a un valor 7, después del siguiente encendido, el módulo no soportará ningún comando AT, hasta que se presione PIO0, el módulo cambiará la velocidad de baudios a 9600.
:::
<!-- </div> -->

**3） Intentar conectar a una dirección**

Enviar：AT+CON[para1]

Recibir：OK+CONN[para2]

Rango ：A,E,F

Ej.：Intentar conectar a un dispositivo cuya dirección MAC es 00:17:EA:09:09:09

Enviar: AT+CON0017EA090909

Puede recibir una respuesta: OK+CONNA --> Aceptar solicitud, conectando ; OK+CONNE --> Error de conexión ; OK+CONN --> Conectado , si AT+NOTI1 está configurado ; OK+CONNF --> Conexión fallida , después de 10 segundos

<!-- <div class="admonition note">
<p class="admonition-title">Note</p> -->
:::note
Solo se usa el rol central. Si el dispositivo remoto ya está conectado a otro dispositivo o está apagado, "OK+CONNF" se recibirá después de aproximadamente 10 segundos.
:::
<!-- </div> -->

**4） Limpiar dirección del último dispositivo conectado**

Enviar：AT+CLEAR

Recibir：OK+CLEAR

**5） Consultar modo de trabajo del módulo**

Enviar：AT+MODE?

Recibir：OK+Get:[para]

Rango： 0~2;

0--Modo de transmisión, 1--Modo de recolección PIO + Modo 0, 2--Modo de control remoto + Modo 0 .

Por defecto: 0

**Establecer modo de trabajo del módulo**

Enviar：AT+MODE[]

Recibir：OK+Set:[para]

**6） Consultar nombre del módulo**

Enviar：AT+NAME?

Recibir：OK+NAME[para1]

**Establecer nombre del módulo**

Enviar：AT+NAME[para1]

Recibir：OK+Set:[para1]

Ej.：Enviar: AT+NAMESeeed， Recibir : OK+Set:Seeed

<!-- <div class="admonition note">
<p class="admonition-title">Note</p> -->
:::note
El nombre cambiaría después del siguiente encendido.
:::
<!-- </div> -->

**7） Consultar código PIN**

Enviar：AT+PASS?

Recibir：OK+PASS:[para1]

Rango : 000000~999999.

Por defecto : 000000.

**Establecer código PIN**

Enviar: AT+PASS[para1]

Recibir：OK+Set:[para1]

**8） Restaurar todos los valores de configuración a la configuración de fábrica**

Enviar：AT+RENEW

Recibir：OK+RENEW

**9） Reiniciar módulo**

Enviar：AT+RESET

Recibir：OK+RESET

**10）Consultar rol maestro y esclavo**

Enviar：AT+ROLE[para1]

Recibir：OK+Set:[para1]

Rango : 0~1;

0--Periférico : 1--Central : Por defecto: 0.

Para más comandos AT, consulte la hoja de datos del módulo BLE.

Comunicación SoftwareSerial
----------------------------

![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_connection1.png)

Grove - BLE puede usarse como maestro o esclavo, puedes usar uno a través de diferentes demostraciones.**Si vas a usar el siguiente programa SoftwareSerial, por favor consulta la forma de conexión en la imagen anterior. TX-->D2, RX-->D3.**

Abre Arduino IDE, copia el siguiente programa y súbelo a la placa Arduino/Seeeduino. Y entonces dos módulos BLE pueden comunicarse entre sí.

**Demo : BLE Esclavo**

```
    #include <SoftwareSerial.h>   //Software Serial Port
    #define RxD 2
    #define TxD 3

    #define DEBUG_ENABLED  1

    SoftwareSerial BLE(RxD,TxD);

    void setup()
    {
      Serial.begin(9600);
      pinMode(RxD, INPUT);
      pinMode(TxD, OUTPUT);
      setupBleConnection();

    }

    void loop()
    {
      char recvChar;
      while(1){
        if(BLE.available()){//check if there's any data sent from the remote BLE
          recvChar = BLE.read();
          Serial.print(recvChar);
        }
        if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
          recvChar  = Serial.read();
          BLE.print(recvChar);
        }
      }
    }

    void setupBleConnection()
    {
      BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
      BLE.print("AT+CLEAR"); //clear all previous setting
      BLE.print("AT+ROLE0"); //set the bluetooth name as a slaver
      BLE.print("AT+SAVE1");  //don't save the connect information
    }
```

**Demo : BLE Master**

```
    #include <SoftwareSerial.h>   //Software Serial Port
    #define RxD 2
    #define TxD 3

    #define DEBUG_ENABLED  1

    SoftwareSerial BLE(RxD,TxD);

    void setup()
    {
      Serial.begin(9600);
      pinMode(RxD, INPUT);
      pinMode(TxD, OUTPUT);
      setupBleConnection();

    }

    void loop()
    {
      char recvChar;
      while(1){
        if(BLE.available()){//check if there's any data sent from the remote BLE
          recvChar = BLE.read();
          Serial.print(recvChar);
        }
        if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
          recvChar  = Serial.read();
          BLE.print(recvChar);
        }
      }
    }

    void setupBleConnection()
    {
      BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
      BLE.print("AT+CLEAR"); //clear all previous setting
      BLE.print("AT+ROLE1"); //set the bluetooth name as a master
      BLE.print("AT+SAVE1");  //don't save the connect information
    }
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [BLE_apk_para_Android](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/HMBLEComAssistant.rar)
- [Hoja de datos del módulo BLE](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Bluetooth4_en.pdf)
- [Esquemático](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_BLE_v1 -->

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
