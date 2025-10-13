---
description: DS1307 RTC (Reloj de Tiempo Real) para Raspberry Pi
title: DS1307 RTC (Reloj de Tiempo Real) para Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Pi_RTC-DS1307
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/main.jpg)

El Pi RTC está basado en el chip de reloj DS1307, puede proporcionar un reloj de tiempo real (RTC) para raspberry pi a través de la interfaz I2C. El reloj de tiempo real de este módulo cuenta segundos, minutos, horas, fecha del mes, mes, día de la semana y año con compensación de año bisiesto válida hasta 2100. El reloj opera en formato de 24 horas o 12 horas con indicador AM/PM. Si deseas mantener este módulo funcionando cuando la Raspberry Pi esté apagada, necesitas colocar una celda de litio CR1225 de 3 voltios en el portapilas.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Pi-RTC-DS1307.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::note
        La batería no está incluida.
:::

## Características

- Compatible con Raspberry Pi 2/ 3 B/B+/4/Zero
- Soporta segundos, minutos, horas, día de la semana, mes, año
- Soporta formato de 24 horas o 12 horas con indicador AM/PM
- RAM no volátil (NV) de 56 bytes respaldada por batería para almacenamiento de datos
- Interfaz serie de dos cables
- Señal de salida de onda cuadrada programable
- Detección automática de falla de energía y circuito de conmutación

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|5V|
|Interfaz|I2C|
|Dirección I2C|0x68|

## Aplicaciones típicas

Cualquier aplicación que necesite Tiempo Real en Raspberry.

## Distribución de pines

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/pin_out.jpg)

:::note
RX/TX no se usa en este módulo, pero el conector de 5x2 ocupa el pin RX/TX del Raspberry Pi, por lo que sacamos el RX/TX y viene con un conector de 2 pines.
:::

### Esquemático

**Circuito cambiador de nivel bidireccional**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/schematic.jpg)

Este es un circuito cambiador de nivel bidireccional típico para conectar dos secciones de voltaje diferentes de un bus I^2^C. El bus I<sup>2</sup>C del Raspberry Pi usa 3.3V, sin embargo el chip DS1307 funciona a 5V, por lo que este circuito será necesario. En el esquemático anterior, **Q1** y **Q2** son MOSFET de Canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas soportadas

|                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|  ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Materiales requeridos

|Raspberry Pi|Pi RTC(DS1307)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|

:::note
Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
:::

### Instalación

El controlador que proporcionamos solo se aplica para Raspbian Jessie/Stretch.

:::tip
Si no sabes cómo usar una raspberry pi, por favor revisa [aquí](https://www.raspberrypi.org/documentation/) antes de comenzar.
:::

- **Paso 1. Instalación del Controlador**

Escribe el siguiente comando en tu terminal

```
git clone https://github.com/Seeed-Studio/pi-hats.git
```

Cuando termine la descarga, ejecuta el siguiente comando en tu terminal

```
cd ~/pi-hats/tools
sudo ./install.sh -u rtc_ds1307
```

- **Paso 2. Apagar la Raspberry Pi**

```
sudo shutdown -h now
```

- **Paso 3. Insertar el HAT en la Raspberry Pi**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/connect.jpg)

Por favor, asegúrate de conectar el pin 1 de este hat en el pin 1 del GPIO de la raspberry, tal como se muestra en la imagen anterior.

- **Paso 4. Encender la Raspberry Pi**

### Uso

Ahora puedes usar el comando para verificar si el controlador se instaló correctamente.

```
./install.sh -l
```

Si quieres desinstalar el controlador puedes usar el comando a continuación:

```
sudo ./install.sh -u
```

Ahora veamos qué puede hacer el módulo RTC:

___
Leer el reloj de hardware e imprimir el resultado

```
sudo hwclock -r
```

___

Establecer la hora del sistema desde el reloj de hardware

```
sudo hwclock -s
```

___

Establecer el reloj de hardware desde la hora actual del sistema

```
sudo hwclock -w
```

___

Más usos

```
hwclock --help
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos Eagle Pi RTC(DS1307)](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip)

- **[http]** [Librería Seeed Pi RTC](https://github.com/Seeed-Studio/pi-hats)

- **[PDF]** [Hoja de Datos DS1307](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/DS1307.pdf)

## Proyecto

Este es el video de introducción de este producto

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
