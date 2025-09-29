---
description: Controlador de Motor Dual Hercules 15A 6-20V
title: Controlador de Motor Dual Hercules 15A 6-20V
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Hercules_Dual_15A_6-20V_Motor_Controller
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/Hercules_03.jpg)

El Controlador de Motor Dual Hercules 15A 6-20V es una placa de control de accionamiento de motor de alta corriente. Incluye procesador microcontrolador, circuito de accionamiento de motor, circuito de carga y circuito de protección. Presenta una solución completa para alimentación, control y accionamiento.

Comparado con el L298, su controlador de motor de medio puente IR2104 y N-MOSFET toman una ventaja prominente para accionar dispositivos de carga pesada con corriente de salida incluso hasta 15A. El controlador de motor dual Hercules está diseñado con alimentación amplia, por lo que la batería lipo universal de 7.4~11.1V en el coche remoto y avión modelo también puede ser aplicada. El fusible protegerá la placa mientras esté sobrecargada, el LED correspondiente muestra el estado de protección.

Este controlador de motor es compatible con Arduino. Lo mejor de todo es que se enfoca en alta expansión. Los puertos estándar Grove reservados te brindan un acceso conveniente a módulos abundantes en la plataforma de coche motor, como Servo y Encoder, por lo tanto abraza multi-funciones que puedes construir obras maestras versátiles.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Hercules-Dual-15A-6-20V-Motor-Controller-p-1515.html)

Características
---------------

- Circuito de accionamiento de puente completo basado en MOSFET soporta dos canales independientes, cada canal hasta 15A
- LED muestra el estado de protección del fusible
- Varios puertos Grove, conecta convenientemente con servo, encoder y sensores
- Controlador ATMega328, compatible con Arduino

Especificaciones
----------------

| Elemento                        | Mín | Típico | Máx  | Unidad |
|---------------------------------|-----|--------|------|--------|
| Voltaje de Trabajo              | 6.0 | -      | 20.0 | VDC    |
| Corriente de Motor por Canal    | -   | -      | 15   | A      |
| Voltaje de E/S                  | -   | 5      | -    | VDC    |
| Lógica de E/S(TTL)              | -   | 5      | -    | VDC    |
| Rango de Temperatura            | -40 |        | +125 | C      |

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot_Controller_Interface_Function.jpg)

**A:** Conectores de Encoder.

**B:** Conectores Grove.

**C**: Conectores de Servo.

**D:** IC ATMega328P.

**E:** Conector SPI.

**F:** Conector de Programación.

**G:** Botón de Reset.

**H:** Fusible de Protección del Motor Canal 1.

**J:** Fusible de Protección del Motor Canal 2.

**K:** Terminales de Tornillo del Motor DC Canal 1.

**L:** Terminales de Tornillo del Motor DC Canal 2.

**M:** Terminales de Tornillo de Entrada de Batería.

Uso
-----

### Descripción General de Conectores

**Conectores de Encoder**

Hay encoders en los motores de la [plataforma Hercules](https://wiki.seeedstudio.com/es/Skeleton_Bot-4WD_hercules_mobile_robotic_platform) para medir la velocidad del motor. Estos dos Conectores se utilizan para conectar estos encoders. El header también suministra 5VDC para alimentar el encoder.

**Conectores Grove**

Estos Conectores de Servo están configurados para headers estilo servo estándar GND, +5V y Señal para controlar el ángulo del servo.

**Terminales de Tornillo de Entrada de Batería**

Los conectores de batería están marcados con GND y VM en el terminal de tornillo de entrada. VM es el lado positivo de la batería. El GND es el lado negativo de la batería. Por favor asegúrese de que el rango de voltaje de entrada esté en 6~20v para evitar cualquier daño.

**Terminales de Tornillo del Motor**

Los terminales de tornillo del motor están marcados con M1A / M1B para el canal 1 y M2A / M2B para el canal 2. No hay polaridades específicas para los motores. Si el motor gira en la dirección opuesta a la que desea, puede invertir los cables del motor para invertir la rotación. Tenga en cuenta que J21&J20, J22&J23 están conectados en paralelo, es decir, debe conectar los 2 motores izquierdos del [Hercules](https://wiki.seeedstudio.com/es/Skeleton_Bot-4WD_hercules_mobile_robotic_platform) a un canal, y los 2 motores derechos al otro canal.

### El Uso

<div class="admonition note">
<p class="admonition-title">Nota</p>
El controlador no puede ser alimentado directamente desde el conector de programación que se conecta a la PC para la descarga de código.
</div>

El controlador debe ser alimentado desde el tornillo de Alimentación J1, por baterías o una fuente DC (6-20V). El controlador utiliza 2 fusibles de acción lenta de 15A para proteger los puentes "H". Después de conectar la fuente de alimentación:

- Conecte un Motor DC a los Terminales de Tornillo del Canal 1.
- Conecte el controlador a su computadora con UartSBee V4 y un cable USB.

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/IMG_0204-1-.JPG)

- Cargue la [Librería del Controlador de Motor](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motor_Controller_Library.zip) y ejecute el programa "motorDriverDemo".

```
    #include "motordriver_4wd.h"
    #include <seeed_pwm.h>

    void setup()
    {
        MOTOR.init(); //Init all pin
    }

    void loop()
    {
        MOTOR.setSpeedDir(DIRF, 80); //Set motor 1 and motor 2 direction:DIRF, Speed:80 (range:0-100).
        delay(3000);
        MOTOR.setSpeedDir(DIRR, 80); //Set motor 1 and motor 2 direction:DIRR, Speed:80 (range:0-100).
        delay(3000);
    }
```

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  El motor tiene dos direcciones de funcionamiento: DIRF(adelante) y DIRR(atrás). Si el motor gira en sentido contrario, puedes invertir los cables del motor para invertir la rotación.
</div>

- Desconecta el controlador de tu computadora.
- Conecta el controlador a una batería o fuente de alimentación DC mediante los terminales de tornillo de entrada de batería.
- Ahora puedes ver el motor girar a una velocidad.

### Referencia

El "motorDriverDemo" contiene algunas funciones. Para entender cómo cada línea afecta el resultado, tienes que estudiar los comentarios cuidadosamente. Por favor consulta las siguientes funciones definidas en la biblioteca motodriver_4wd.

**1. setStop1()**

Descripción: Detener motor 1

**2. setStop2()**

Descripción: Detener motor 2

**3. void setSpeedDir(int ispeed, unsigned char dir)**

Descripción: Establecer la velocidad y dirección del motor1 y motor2

**4. void setSpeedDir1(int ispeed, unsigned char dir)**

Descripción: Establecer velocidad y dirección del motor1

**5. void setSpeedDir2(int ispeed, unsigned char dir)**

Descripción: Establecer velocidad y dirección del motor2

Uso Expandido
------------

Basado en el Controlador de Motor Dual Hercules 15A 6-20V, hemos diseñado un Carro de Control Remoto que tiene gran potencia y buen efecto de absorción de impactos.

### Control remoto

**Elementos Requeridos:**

- Módulo RFBee
- Grove - Thumb Joystick
- Grove - XBee Carrier
- Batería

Módulo RFBee: Usado para envío remoto de datos.

Un Grove - Thumb Joystick: Usándolo para controlar remotamente el carro.

Grove - XBee Carrier: Ofrece conveniencia para usar RFbee. Podemos usar el Socket MiniUSB para cargar código para RFBee.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Puedes conectar a PC usando cable USB para reemplazar la Batería.
</div>

- Conecta RFBee en el Socket Bee de Grove - XBee Carrier.
- Descarga la [Biblioteca RFBee](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/RFBee_Library.zip) y Descomprímela en el archivo libraries del IDE de Arduino por la ruta: ..\arduino-1.0.1\libraries.
- Descarga y Carga la demo: [Remote lvc](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Remote_lvc.zip) a un RFbee. Antes de cargar, necesitas seleccionar Tools->Board->Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega168 y elegir el puerto serie correcto del menú Tools.
- Conecta Grove - Thumb Joystick al Conector Grove IIC de Grove - XBee Carrier.
- Conecta la batería al Conector de Batería de Grove - XBee Carrier.

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/Remote_Control.jpg)

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  Puedes consultar la función de Interfaz del wiki de Grove - XBee Carrier para el conector.
</div>

### Receptor

**Elementos Requeridos:**

- Módulo RFBee
- Grove - XBee Carrier
- Controlador de Motor Dual Hercules 15A 6-20V

Módulo RFBee: Usado para envío remoto de datos.

Grove - XBee Carrier: Ofrece conveniencia para usar RFbee. Podemos usar el Socket MiniUSB para cargar código para RFBee.

El Controlador de Motor 15A 6-20V: Impulsa el Motor para girar.

- Conecta RFBee en el Socket Bee de Grove - XBee Carrier.
- Conecta IIC de Grove - XBee Carrier al Conector IIC del Controlador de Motor.
- Conecta cuatro motores a Motor1A/Motor1B(Motor2A/Motor2B).

Usamos la **plataforma robótica móvil hercules 4WD** para el controlador de motor como se muestra a continuación:
![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot_Car_Body.jpg)

- Carga el código a otro módulo RFBee.

```
    // demo of rfbee send and recv
    #include <Arduino.h>
    #include <EEPROM.h>
    #include <RFBeeSendRev.h>
    #include <RFBeeCore.h>
    #include <Wire.h>

    #define FRAMESTART1                 0x53                // data frame start1
    #define FRAMESTART2                 0x01                // data frame start2
    #define FRAMEEND1                   0x2f                // data frame end1
    #define FRAMEEND2                   0x45                // data frame end2

    void sendToI2C(unsigned char ilen, unsigned char *idata)
    {
        Wire.beginTransmission(4);                           // transmit to device #4
        for(int i = 0; i<ilen; i++) {Wire.write(idata[i]);}  // sends one byte
        Wire.endTransmission();                              // stop transmitting
        
    }

    void setup(){

        pinMode(10, OUTPUT);
        RFBEE.init();
        Wire.begin();
        Serial.begin(38400);
        Serial.println("ok");
    }

    unsigned char rxData1[200];               // data len
    unsigned char len1;                       // len
    unsigned char srcAddress1;
    unsigned char destAddress1;
    char rssi1;
    unsigned char lqi1;
    int result1;

    unsigned char cntGetDta = 5;

    void loop()
    {
        if(RFBEE.isDta())
        {
            result1 = receiveData(rxData1, &len1, &srcAddress1, &destAddress1, (unsigned char *)&rssi1 , &lqi1);
            Serial.println(len1);
            for(int i = 0; i< len1; i++)
            {
                Serial.print(rxData1[i]);Serial.print("\t");
            }
            
            Serial.println();
            
            sendToI2C(6, rxData1);
        }
    }
```

- La Biblioteca [Motodriver 4wd.zip](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motodriver_4wd.zip) para el Controlador de Motor. Antes de cargar, necesitas seleccionar Herramientas->Placa->Arduino Duemilanove w/ ATmega328.

### Resultado

El Coche de Control Remoto basado en el Controlador de Motor Hercules Dual 15A 6-20V y la plataforma robótica móvil hercules 4WD puede cargar un contenedor de agua cuya capacidad es de 19L.

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot.jpg)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Source_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle del Controlador de Robot 4WD](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Source_file.zip)
- [Esquema del Controlador de Robot 4WD.pdf](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/4WD_Robot_Controller_Schematic.pdf)
- [Biblioteca del Controlador de Motor](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motor_Controller_Library.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller -->

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
