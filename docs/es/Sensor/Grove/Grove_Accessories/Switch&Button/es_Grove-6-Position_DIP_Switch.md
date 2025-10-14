---
description: Grove - Interruptor DIP de 6 Posiciones
title: Grove - Interruptor DIP de 6 Posiciones
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-6-Position_DIP_Switch
last_update:
  date: 1/10/2023
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/main.jpg" /></div>

El Grove - Interruptor DIP de 6 Posiciones tiene 6 posiciones de interruptor individuales, que utilizan I2C para transmitir datos. Funciona muy bien como interruptores de control multicanal.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Interruptor DIP de 6 Posiciones | Inicial                                                                                               | Jun 2018      |

## Características

- 6 interruptores individuales
- Buena resistencia al calor
- Larga vida útil de funcionamiento
- Compatible con Grove

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de funcionamiento|3.3V / 5V|
|Interfaz|I2C|
|Dirección I2C por defecto|0x03|
|Tamaño|L: 40mm W: 20mm H: 13mm|
|Peso|5g|
|Tamaño del paquete|L: 140mm W: 90mm H: 10mm|
|Peso bruto|11g|


## Aplicaciones

- Control multifunción

## Descripción general del hardware

### Mapa de pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/pin_map_back.jpg" /></div>

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - 6-Position DIP Switch |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - 6-Position DIP Switch al puerto **I2C** del Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/connect.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove - 6-Position DIP Switch           |
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

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo a través de la ruta: **Archivo --> Ejemplos --> Grove Multi Switch Library --> Grove_Switch_Events**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/path.jpg" /></div>

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

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas `ctrl`+`shift`+`m` al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
Si todo va bien, obtendrás el resultado. Por ejemplo, el interruptor predeterminado está en off-High, cuando cambies el **Switch6** a **ON**, la salida será **POS 6: RAW - LOW ON**.
:::

```cpp
Grove Multi Switch
***** Device probe OK *****
Grove 6-Position DIP Switch Inserted!
A 6 Button/Switch Device BN-6--0.1
POS 1: RAW - HIGH OFF 
POS 2: RAW - HIGH OFF 
POS 3: RAW - HIGH OFF 
POS 4: RAW - HIGH OFF 
POS 5: RAW - HIGH OFF 
POS 6: RAW - LOW ON 

POS 6: EVENT - LEVEL-CHANGED 
POS 1: RAW - LOW ON 
POS 2: RAW - HIGH OFF 
POS 3: RAW - HIGH OFF 
POS 4: RAW - HIGH OFF 
POS 5: RAW - HIGH OFF 
POS 6: RAW - LOW ON 
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos eagle de Grove - Interruptor DIP de 6 Posiciones](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip)
- **[Zip]** [Librería Grove Multi Switch](https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/res/Grove-6-Position_DIP_Switch.zip)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
