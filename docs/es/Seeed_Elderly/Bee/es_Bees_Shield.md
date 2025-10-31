---
description: Bees Shield
title: Bees Shield
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bees_Shield
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Bees_Shield/img/bees%20shield.jpg)

Bees_Shield hará que la interfaz con múltiples módulos estilo Bee (XBee, GPRS Bee, Bluetooth Bee y otros) sea más fácil que nunca. Además de dos conectores estilo Bee de 20 pines con paso de 2.0, también tiene una gran área de prototipado y un puerto serie por software personalizable para facilitar el prototipado.

[![Obtener Uno Ahora](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Bees-Shield-p-672.html)

## Versiones
---------------

| Revisión | Descripciones  | Lanzamiento        |
|----------|--------------|----------------|
| v2.12| Lanzamiento público inicial| 08 de junio, 2010  |


## Características
-------------------
- Doble conector tipo Bee
- 3 LED indicadores (ON/Sleep, RSSI, ASSOC) para cada Xbee
- Tamaño completo con perforaciones libres
- Botón de reinicio para cada Xbee
- Botón de reinicio para la placa base
- Proporciona máximo 500mA bajo 3.3V
- Conexión completa para cada Bee
- Comunicación conmutable con FTDI-USB/Placa base

## Descripción del Hardware

![](https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees%20Shield%20Hardware.jpg)

## Plataformas Soportadas
-------------------

## Primeros Pasos
-------------------
### Trabajar con Bee1

#### Conexión
- Conecta el módulo Xbee en el conector Bee 1, configurando los jumpers como se muestra a continuación. Usamos Bee1 SoftwareSerial para la comunicación.

| Pines de Arduino   | Pines de Bee1     |
| :------------- | :-------------|
| Pin Digital 7   | Bee1_TX       |
| Pin Digital 8   | Bee1_RX       |

- Conecta Bees Shield en Arduino.
- Conecta Arduino a la PC mediante un cable USB.

#### Software
- Copia y sube el código a Arduino.

```
#include <SoftwareSerial.h>
SoftwareSerial mySerial(7, 8);

void setup() {
  Serial.begin(9600);
  Serial.println("Goodnight moon!");

  // set the data rate for the SoftwareSerial port
  mySerial.begin(9600);
  mySerial.println("Hello, world?");
}

void loop() {
  // run over and over
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}

```
- Cuando esté subido, abre el monitor serie.

### Trabajar con Bee2

#### Conexión
- Conecta el módulo RFbee en el conector Bee 2, cambia el interruptor al lado USB.

:::note
    Cambia el interruptor al lado del Atmega si no estás subiendo un sketch al Bee2. NO funciona si el arduino está usando ATmega168 – necesitamos al menos ATmega328 para pasar la comunicación serie.
:::
- Conecta Bees Shield en Arduino.
- Conecta Arduino a la PC mediante un cable USB.

#### Software
- Por favor copia y sube el código a Arduino para deshabilitar primero el puerto Uart0 del IC Atmega.

```
void setup() {
   DDRD=0x00;
}

void loop() {}

```

### Programación inalámbrica de Arduino con Bee2

#### Conexión
- Solda el bloque JP1 en la placa para programación inalámbrica.
- Conecta Bees Shield en Arduino.

#### Software
- Descarga el [perfil de configuración Xbee](https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip) al Xbee transmisor usando X-CTU.
- Usemos la programación inalámbrica.

#### Función de expansión

- Primero tenemos que soldar dos conectores hembra de 8 pines y dos conectores hembra de 6 pines en el Bees shield.
- Después de la expansión podemos insertar shields pequeños como music shield en el Bees shield y podemos controlarlo de forma inalámbrica.

![](https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees-Shield-expan2.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
-------------------
- **[Eagle]** [Archivo Eagle de Bees_Shield ](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip)
- **[PDF]** [Esquemas de Bees_Shield](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20Sch.pdf)
- **[PDF]** [PCB de Bees_Shield](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20PCB.pdf)
- **[Herramientas]** [Perfiles de configuración Xbee](https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>