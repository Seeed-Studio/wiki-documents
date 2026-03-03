---
description: Grove - Interruptor de 5 Vías
title: Grove - Interruptor de 5 Vías
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-5-Way_Switch
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Interruptor de 5 Vías
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020048
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/main.jpg)

El Grove - Interruptor de 5 Vías puede utilizarse para detectar la posición del interruptor y eventos como clic simple/doble clic/pulsación larga, etc. Puede detectar 5 direcciones: izquierda/derecha/arriba/abajo/centro.
El interruptor de 5 vías será una excelente opción para control multifunción.

¡Con solo un pequeño interruptor para satisfacer todas tus necesidades de control de interruptor!

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Interruptor de 5 Vías | Inicial                                                                                               | Jun 2018      |

## Características

- Interruptor individual de 5 vías
- Buena resistencia al calor
- Larga vida útil de funcionamiento
- Compatible con Grove

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de funcionamiento|3.3V / 5V|
|Interfaz|I^2^C|
|Dirección I^2^C por defecto|0x03|
|Tamaño|L: 40mm A: 20mm H: 10mm|
|Peso|4.1g|
|Tamaño del paquete|L: 140mm A: 90mm H: 10mm|
|Peso bruto|10g|


## Aplicaciones

- Control de juegos
- Control multifunción

## Descripción del Hardware

### Mapa de Pines

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/pin_map.jpg)
![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/pin_map_back.jpg)

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - 5-Way Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - 5-Way Switch al puerto **I^2^C** del Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/connect.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove - 5-Way Switch           |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo a través de la ruta: **Archivo --> Ejemplos --> Grove Multi Switch Library --> Grove_Switch_Events**.

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/path.jpg)

O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "Grove_Multi_Switch.h"

GroveMultiSwitch mswitch[1];
const char* grove_5way_tactile_keys[] = {
 "KEY A",
 "KEY B",
 "KEY C",
 "KEY D",
 "KEY E",
};
const char* grove_6pos_dip_switch_keys[] = {
 "POS 1",
 "POS 2",
 "POS 3",
 "POS 4",
 "POS 5",
 "POS 6",
};

const char** key_names;

int deviceDetect(void) {
 if (!mswitch->begin()) {
  Serial.println("***** Device probe failed *****");
  return -1;
 }

 Serial.println("***** Device probe OK *****");
 if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
  Serial.println("Grove 5-Way Tactile Switch Inserted!");
  key_names = grove_5way_tactile_keys;
 } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
  Serial.println("Grove 6-Position DIP Switch Inserted!");
  key_names = grove_6pos_dip_switch_keys;
 }

 // enable event detection
 mswitch->setEventMode(true);

 // report device model
 Serial.print("A ");
 Serial.print(mswitch->getSwitchCount());
 Serial.print(" Button/Switch Device ");
 Serial.println(mswitch->getDevVer());
 return 0;
}

void setup()
{
 Serial.begin(115200);
 Serial.println("Grove Multi Switch");

 // Initial device probe
 if (deviceDetect() < 0) {
  Serial.println("Insert Grove 5-Way Tactile");
  Serial.println("or Grove 6-Position DIP Switch");
  for (;;);
 }

 return;
}

void loop()
{
 GroveMultiSwitch::ButtonEvent_t* evt;

 delay(1);

 evt = mswitch->getEvent();
 if (!evt) {
  // dynamic device probe
  deviceDetect();
  delay(1000);
  return;
 }

 if (!(evt->event & GroveMultiSwitch::BTN_EV_HAS_EVENT)) {
  #if 0
  Serial.print("No event, errno = ");
  Serial.println(mswitch->errno);
  #endif
  return;
 }

 for (int i = 0; i < mswitch->getSwitchCount(); i++) {
  Serial.print(key_names[i]);
  Serial.print(": RAW - ");
  Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
               "HIGH ": "LOW ");
  if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
                "RELEASED ": "PRESSED ");
  } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
                "OFF ": "ON ");
  }
  Serial.println("");
 }

 for (int i = 0; i < mswitch->getSwitchCount(); i++) {
  if (evt->button[i] & ~GroveMultiSwitch::BTN_EV_RAW_STATUS) {
   Serial.println("");
   Serial.print(key_names[i]);
   Serial.print(": EVENT - ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_SINGLE_CLICK) {
   Serial.print("SINGLE-CLICK ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_DOUBLE_CLICK) {
   Serial.print("DOUBLE-CLICK ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LONG_PRESS) {
   Serial.print("LONG-PRESS ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LEVEL_CHANGED) {
   Serial.print("LEVEL-CHANGED ");
  }
 }
 Serial.println("");
}

```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
Si todo va bien, obtendrás el resultado. Cuando presiones la **TECLA E**, activará **KEY E: RAW - LOW PRESSED**
:::

```cpp
Grove Multi Switch
***** Device probe  Device BN-5E-0.1
Grove Multi Switch
***** Device probe OK *****
Grove 5-Way Tactile Switch Inserted!
A 5 Button/Switch Device BN-5E-0.1
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - LOW PRESSED 

KEY E: EVENT - LEVEL-CHANGED 
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 

KEY E: EVENT - SINGLE-CLICK LEVEL-CHANGED 
KEY A: RAW - LOW PRESSED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 

KEY A: EVENT - LEVEL-CHANGED 
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos eagle de Grove - 5-Way Switch](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip)
- **[Zip]** [Librería Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch/archive/master.zip)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

<br />
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
