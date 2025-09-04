---
description: Grove - Kit de Socket LED
title: Grove - Kit de Socket LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-LED_Socket_Kit
last_update:
  date: 1/7/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-White-LED-p-2016.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-White-LED-p-2016.jpeg" alt="pir" width={600} height="auto" /></p>

Grove - LED está diseñado para principiantes de Arduino/Seeeduino para monitorear controles desde puertos digitales. Se puede montar fácilmente en la superficie de tu caja o escritorio y usarse como lámpara piloto para energía o señal. Su brillo se puede ajustar mediante potenciómetro.


## Características
---
*   Interfaz compatible con Grove

*   Compatible con 3.3V/5V

*   Orientación del LED ajustable

*   Brillo del LED ajustable

## Especificaciones
---
<table>
  <tbody><tr>
      <td width={400}> **Elemento**</td>
      <td width={400}> **Descripción**</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Modo de Control del LED</td>
      <td> Pin Digital de Arduino</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Voltaje de Trabajo</td>
      <td> 5V</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Modo de Alimentación</td>
      <td> Interfaz Grove</td>
    </tr>
  </tbody>
</table>


##  Comenzar con Arduino
---
Aquí mostramos cómo usar Arduino para controlar el estado del LED.

1.Conecta el LED al **puerto digital 2** del Base Shield con el cable Grove de 4 pines. Por supuesto puedes cambiar a otros puertos digitales válidos si es necesario y las definiciones del puerto también deben cambiarse.

2.Conéctalo al Arduino/Seeeduino. Conecta la placa a la PC usando el cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-LED.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-LED.jpg" alt="pir" width={600} height="auto" /></p>

3.Copia el código de demostración a tu sketch, luego súbelo a la placa Arduino o Seeeduino. Por favor haz clic [aquí](https://www.seeedstudio.com/wiki/Upload_Code) si no sabes cómo subir código.

Verás el LED parpadear cada segundo.
```
/*************************************************************************
* File Name          : GroveLEDDemoCode.ino
* Author             : Seeedteam
* Version            : V1.1
* Date               : 18/2/2012
* Description        : Demo code for Grove - LED
*************************************************************************/

#define LED 2 //connect LED to digital pin2
void setup() {
    // initialize the digital pin2 as an output.
    pinMode(LED, OUTPUT);
}

void loop() {
    digitalWrite(LED, HIGH);   // set the LED on
    delay(500);               // for 500ms
    digitalWrite(LED, LOW);   // set the LED off
    delay(500);
}
```
##  Comenzar con Raspberry Pi
---
Conecta el **LED al Puerto D4** y enciende la Raspberry Pi, usando el conector de cable Grove. Esta es una prueba para hacer parpadear el led. Puedes conectarlo al GrovePi+ como se muestra en la imagen a continuación.
```
# GrovePi LED Blink example

import time
from grovepi import *

# Connect the Grove LED to digital port D4
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        #Blink the LED
        digitalWrite(led,1)		# Send HIGH to switch on LED
        time.sleep(1)

        digitalWrite(led,0)		# Send LOW to switch off LED
        time.sleep(1)

    except KeyboardInterrupt:	# Turn LED off before stopping
        digitalWrite(led,0)
        break
    except IOError:				# Print "Error" if communication error encountered
        print "Error"
```
###  Ejecutar el Programa

*   Encuentra la ruta al archivo (Según tu propia ruta)
```
cd GrovePi/Software/Python/
```

*   Ejecutar Programa
```
sudo python grove_led_blink.py
```

# Grove - LED
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - LED v1.3
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.3_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
*   [Archivos fuente de Grove - LED V1.3 (Eagle y pdf)](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.3_Schematics.zip)

*   [Archivos fuente de Grove - LED (Eagle y pdf)](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.0_Source_File.zip)

*   [GroveLEDDemoCode](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/GroveLEDDemoCode.zip)

*   [Kit de Socket LED Grove](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_Socket_Eagle_File.zip)

## Soporte Técnico y Discusión de Productos
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>