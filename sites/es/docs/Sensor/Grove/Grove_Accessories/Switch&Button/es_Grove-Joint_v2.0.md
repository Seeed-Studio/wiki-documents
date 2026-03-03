---
description:  Grove - Joint v2.0
title: Grove - Joint v2.0
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Joint_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint.jpg)

Grove - Joint v2.0 comparte muchas similitudes con Seeeduino Lotus. Es una placa de desarrollo de microcontrolador ATMEGA328 mini. Utiliza un Atmel ATMEGA328P-MU y CH340. ATMEGA328P-MU es un microcontrolador AVR de 8 bits de alto rendimiento y bajo consumo. CH340 es un chip convertidor de bus USB que puede realizar una interfaz USB a serie. Grove - Joint v2.0 tiene dos interfaces Grove incluidas puerto I<sup>2</sup>C y dos E/S digitales. También soporta alimentación por batería. Puedes hacer algunas aplicaciones simples con él.


##   Especificaciones

*   Microcontrolador: ATmega328P-MU

*   Voltaje de Operación: 5V

*   Pines de E/S Digital: 2

*   Puerto I2C: 1

*   Canales de Entrada Analógica: 2 (multiplexados con I<sup>2</sup>C)

*   Corriente DC por Pin de E/S: 40 mA

*   Memoria Flash: 32 KB (ATmega328P-MU)

*   RAM: 2 KB (ATmega328P-MU)

*   EEPROM: 1 KB (ATmega328P-MU)

*   Velocidad de Reloj: 12 MHz

##  Descripción General del Hardware

Aquí está el diagrama de bloques del módulo Grove - Joint que consiste en las siguientes partes.

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_instruction1_.jpg)

*   **Interfaz de Batería** - Este módulo puede ser alimentado por batería.
*   **Sensor de Luz** - Hay un sensor de luz en la placa que está conectado al pin **A0**.
*   **LED de Estado** - Hay 3 LEDs que indican el estado de la placa. TX(**D1**), RX(**D0**) y L(**D10**)

*   **Puerto INPUT** - El Puerto INPUT es una interfaz Grove I<sup>2</sup>C así como dos canales analógicos(**A4** &amp; **A5**).

*   **Puerto OUTPUT** - El Puerto OUTPUT es también una Interfaz Grove que incluye dos E/S digitales (**D3** &amp; **D5**).

*   **Botón** - El botón está conectado a **D2**, También puede ser usado como un interruptor.
*   **Puerto Micro USB** - Puede ser usado para suministro de energía y descargar el código.
*   **LED de Alimentación** - El LED+ se conecta a VCC y LED- se conecta a **D6**, puedes poner **D6** en HIGH para apagar este led y ahorrar energía.

*   **LED CHRG** - El LED+ se conecta a VCC y LED- se conecta a **A3**, puedes poner **A3** en HIGH para apagar este led y ahorrar energía.

##   Ideas de Aplicación

*   Juguetes Alimentados por Batería

*   Mini Aplicaciones

*   Electrónicos portátiles

*   Monitor de bebé

##   Comenzando

Ahora, Comencemos a usar la placa Arduino mini.

###   Instalación del Controlador

Grove - Joint v2.0 usa CH340 para descargar. Necesita un controlador para ser instalado.

#####   Windows/Linux

Totalmente compatible con programa de aplicación serie en sistema operativo Windows de computadora terminal

*   1) Conéctalo al Puerto USB de la computadora.

*   2) Espera hasta que lo encuentres en el Administrador de Dispositivos.

*   3) Si no encuentras el puerto, por favor descarga el Controlador desde [Aquí](http://www.wch.cn/downloads.php?name=pro&amp;proid=5)

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/CH340_Driver.jpg)

#####   Mac OS

Descarga el controlador desde aquí:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

En Mac OS Yosemite:

*   1) Descarga e instala el paquete de controlador CH340/CH341

*   2) Abre el programa Terminal (ubicado en /Applications/Utilities/)

*   3) Escribe el comando: `sudo nvram boot-args="debug=0x146 kext-dev-mode=1"`

*   4) Ingresa tu contraseña para sudo

*   5) Reinicia tu computadora

El controlador no está firmado en Yosemite, así que necesitas omitir la verificación de controlador firmado.

Si quieres restaurar la configuración de tu Mac, puedes salir del modo desarrollador redefiniendo el boot-arg a tus configuraciones previas, o limpiar tus boot-args como sigue: `sudo nvram -d boot-args`

Para ver cuáles son los boot-args actuales, si los hay, escribe: `sudo nvram boot-args`

###  Preparaciones

Ahora estamos haciendo una demostración para Grove - Joint v2.0 que requiere los siguientes módulos.

*   [Grove Sensor de Ángulo Rotatorio](https://www.seeedstudio.com/depot/Grove-Rotary-Angle-Sensor-p-770.html)

*   [Tira LED RGB Digital Flexible](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-60-LED-1-Meter-p-1666.html)

Grove - Joint es compatible con Arduino.
Si esta es tu primera vez usando Arduino, Por favor pon mano en Getting_Started_with_Seeeduino para comenzar tu viaje con Arduino.

###   Instalación del Hardware

Grove - Joint tiene dos conectores Grove para conectar los dos módulos anteriores:
Ellos son:

*   Grove Sensor de Ángulo Rotatorio - conectar al puerto Grove Input

*   Tira LED RGB Digital Flexible Grove - conectar al puerto Grove Output

Como se muestra abajo:

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_demo_.jpg)

###   Trabajo de Software

Conecta Grove - Joint a la computadora usando un cable micro USB, si el LED de estado no parpadea, presiona el botón.

Haz clic [aquí](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_demo.rar) para descargar el código de prueba y descomprímelo en cualquier carpeta (ej. Unidad D o escritorio)

<!-- Now you need simple [configurations for Arduino](/es/How_To_Use_Sketchbook) sketchbook. -->

Inicia Arduino IDE y haz clic en File&gt;Preferences y agrega la ubicación absoluta para el código de prueba descargado en la ubicación Sketchbook.

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo1.jpg)

Después de las configuraciones, por favor reinicia Arduino, haz clic en File&gt;Sketchbook y elige la demostración Grove- Joint después de lo cual aparecerá el código de prueba.

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo2.jpg)

Haz clic en Tools&gt;Board para elegir Arduino Fio y selecciona el puerto serie respectivo.

<!-- Now click Upload(CTRL+U) to burn testing code. Please refer to [here](/Arduino_Common_Error "Arduino Common Error") for any error prompt and you can also add comment on [forum](http://forum.seeedstudio.com/) -->

###  Revisar Resultados

Después de que la carga se complete, puedes rotar el sensor de ángulo entonces encontrarás que el LED RGB se enciende uno por uno.

###  Obtener Voltaje de la Batería

El Battery+ está conectado a A2. Puedes leer este pin para obtener el voltaje de la batería.

Carga el código de abajo para obtener el voltaje de la batería.
```
// Grove - Joint get Battery

const int pinBattery = A2;

int getAnalogData(int pin)
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum+=analogRead(pin);
    }
    return (sum>>5);
}
void setup()
{
    Serial.begin(9600);
    Serial.println("Grove - Joint V2 test - Battery");
}

void loop()
{
    int value = getAnalogData(pinBattery);

    float voltage = value/1023.0*5.0;
    Serial.print(voltage, 2);
    Serial.println(" V");
    delay(1000);
}
```

**Nota** que cuando insertas Grove Joint a una PC, la batería se cargó, por lo que tal vez el voltaje que lees no sea correcto.


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos

*   [Esquemático en Eagle](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar)

*   [Esquemático en PDF](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_SCH.rar)

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
