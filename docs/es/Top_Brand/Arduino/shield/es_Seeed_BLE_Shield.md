---
description:  Seeed BLE Shield v1
title:  Seeed BLE Shield v1
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeed_BLE_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Seeed BLE Shield v1
category: Shield
bzurl: https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html
oldwikiname:   Seeed BLE Shield v1
prodimagename:  Seeed_BLE-4.png
surveyurl: https://www.research.net/r/Seeed_BLE_Shield_v1
sku:  113030013
--- -->
![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-4.png)

Este Seeed BLE Shield utiliza un módulo HM-11 para proporcionar a tu Arduino/Seeeduino funcionalidad BLE serie. Solo necesita dos pines del microcontrolador para comunicar tu dispositivo con este shield. Con soporte para una APK BLE ComAssistant, este BLE Shield puede comunicarse con tu teléfono móvil más fácilmente sin emparejamiento. Puedes usarlo en muchas condiciones, como controles de robot o equipos de control remoto, etc. Preparamos un conjunto de comandos fácil y conveniente para este shield para que puedas usar código limpio y conciso para ejecutar la función.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html)

## Especificaciones

---
<table>
  <tr>
    <th>Especificaciones</th>
    <th>Valor</th>
  </tr>
  <tr>
    <td width="300px">Versión BT</td>
    <td width="500px">Especificación Bluetooth V4.0 BLE</td>
  </tr>
  <tr>
    <td>Frecuencia de Trabajo</td>
    <td>Banda ISM de 2.4GHz</td>
  </tr>
  <tr>
    <td>Corriente de Trabajo</td>
    <td>&lt; 15 mA</td>
  </tr>
  <tr>
    <td>Corriente de Suministro</td>
    <td>&lt; 30 mA</td>
  </tr>
  <tr>
    <td>Corriente en Reposo</td>
    <td>&lt; 3 mA</td>
  </tr>
  <tr>
    <td>Método de Modulación</td>
    <td>GFSK(Gaussian Frequency Shift Keying)</td>
  </tr>
  <tr>
    <td>Potencia RF</td>
    <td>-23dbm, -6dbm, 0dbm, 6dbm, se puede modificar a través del Comando AT AT+POWE</td>
  </tr>
  <tr>
    <td>Velocidad</td>
    <td>Asíncrono: 6K Bytes, Síncrono: 6K Bytes</td>
  </tr>
  <tr>
    <td>Sensibilidad</td>
    <td>≤-84dBm al 0.1% BER</td>
  </tr>
  <tr>
    <td>Seguridad</td>
    <td>Autenticación y encriptación</td>
  </tr>
  <tr>
    <td>Servicio</td>
    <td>Central &amp; Periférico UUID FFE0,FFE1</td>
  </tr>
  <tr>
    <td>Alimentación</td>
    <td>5v</td>
  </tr>
  <tr>
    <td>Temperatura de Trabajo</td>
    <td>–5 ~ +65 Centígrados</td>
  </tr>
  <tr>
    <td>Tamaño</td>
    <td>68mm x 43mm</td>
  </tr>
  <tr>
    <td>Código PIN</td>
    <td>000000(por defecto)</td>
  </tr>
</table>

## Descripción del Hardware

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/BLE_Shield.png)

* HM-11: El módulo básico es HM-11, para más información puedes consultar este wiki de [HM-11](/es/Bluetooth_V4.0_HM_11_BLE_Module).

* Lámpara indicadora: La lámpara parpadeará si nadie se conecta al BLE, pero la lámpara se mantendrá encendida después de que el BLE haya sido conectado.

* Conectores Grove: Hay dos conectores Grove en el shield BLE, puedes conectar productos Grove en la placa convenientemente.

* Puerto serie por hardware o software: Puedes elegir dos de siete pines digitales como canal de comunicación. Solo conecta los jumpers en los headers. **Hay dos errores en la serigrafía, por favor considera "WIFI_TX" y "WIFI_RX" como "BLE_TX" y "BLE_RX".**

* Pines reservados del HM-11: Hay algunos pines reservados del módulo HM-11, como CTS1, RTS1 y PIO2, etc.

* Botón de reset: Presiona el botón de reset si necesitas reiniciar el BLE Shield. Sin embargo, este botón de reset no afecta el estado de la placa principal (como Arduino Uno) si el BLE Shield está conectado a la placa principal.

## Aplicaciones

---

### Conexión de Hardware

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-2.png)

Conecta el Seeed BLE Shield directamente al Arduino/Seeeduino. **Por favor presta atención a la posición de los jumpers en el BLE Shield.**

### Comunicación SoftwareSerial

El Seeed BLE Shield puede actuar como maestro o esclavo, puedes usar uno a través de diferentes demos. **Si vas a usar el siguiente programa SoftwareSerial, por favor consulta la forma de conexión en la imagen anterior. BLE_TX--&gt;D2, BLE_RX--&gt;D3.**

Abre Arduino IDE, copia el siguiente programa y súbelo a la placa Arduino/Seeeduino. Y entonces dos BLE Shields pueden comunicarse entre sí.

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
        if(BLE.available()){//check if there's any data sent from the remote BLE shield
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

**Demo : BLE Maestro**

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
        if(BLE.available()){//check if there's any data sent from the remote BLE shield
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

### Comunicación HardwareSerial

Además, puedes usar BLE Shield a través de comandos AT sin ningún programa, **pero necesitas cambiar las posiciones de dos jumpers. BLE_TX--&gt;D1, BLE_RX--&gt;D0.**

Luego abre una Herramienta de Puerto Serie, como CoolTerm u otras. Las siguientes son algunas configuraciones: **Baudrate: 9600(por defecto), Data Bits: 8, Parity: none, Stop Bits: 1.**

Primero, puedes enviar un(os) comando(s) "AT" a BLE Shield para hacer una prueba. Si devuelve un "OK", entonces puedes hacer los siguientes pasos. **Si no, puedes cargar un programa en blanco a Arduino/Seeeduino**, y ver si puedes obtener respuesta de la Herramienta de Puerto Serie a través de la operación anterior.

```
void setup()
{
}

void loop()
{
}
```

Luego, envía un comando "AT+ROLE0" al BLE Shield; devolverá un "OK+Set:0", lo que significa que ahora el BLE Shield está listo para actuar como esclavo.

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-3.png)

### Comandos AT

Para más información sobre los Comandos AT, consulta la hoja de datos del módulo BLE. Puedes descargarla desde el espacio de Recursos.

## Lectura Relacionada

---

* [FAQ sobre Seeed BLE Shield](/es/Seeed_BLE_Shield). _También puedes acceder a la página de FAQ haciendo clic en el botón "FAQ" que está en el lado derecho de la página wiki del producto._

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

[Esquema del Seeed BLE Shield](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip)

[BLE_apk_para_Android](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/HMBLEComAssistant.rar)

[Hoja de Datos del módulo BLE](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/Bluetooth4_en.pdf)

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
