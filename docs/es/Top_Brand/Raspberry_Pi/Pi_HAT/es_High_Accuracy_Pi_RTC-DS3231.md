---
description: DS3231 RTC de Alta Precisión (Reloj de Tiempo Real) para Raspberry Pi
title: DS3231 RTC de Alta Precisión (Reloj de Tiempo Real) para Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/High_Accuracy_Pi_RTC-DS3231
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/main.jpg"/></div>

El RTC Pi de Alta Precisión está basado en el chip de reloj DS3231. El DS3231 es un reloj de tiempo real (RTC) I2C de bajo costo y extremadamente preciso. Proporciona un RTC para Raspberry Pi a través de la interfaz I2C. Con la fuente de reloj del TCXO (oscilador de cristal compensado por temperatura), el RTC mantiene información de segundos, minutos, horas, día, fecha, mes y año. La fecha al final del mes se ajusta automáticamente para meses con menos de 31 días, incluyendo correcciones para años bisiestos. El reloj opera en formato de 24 horas o 12 horas con un indicador AM/PM. El reloj proporciona dos alarmas programables de hora del día y salida de onda cuadrada programable. El pin INT/SQW genera una interrupción debido a una condición de alarma o emite una señal de onda cuadrada y la selección se controla mediante el bit INTCN.

Si deseas conservar la información de tiempo incluso cuando la Raspberry Pi esté apagada, necesitas insertar una celda de litio CR1225 de 3V en el portapilas. Y si estás buscando un RTC para tu proyecto Arduino, por favor también echa un vistazo a nuestro blog Tutorial RTC Arduino: Usando DS1307 RTC con Arduino para comenzar fácilmente.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-%28DS3231%29-p-3214.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| RTC Pi de Alta Precisión (DS3231) | Inicial                                                                                               | Sep 2018      |

:::note
        La batería no está incluida.
:::

## Características

- Compatible con Raspberry Pi 2/ 3 B/B+/4/Zero
- Admite segundos, minutos, horas, día de la semana, mes, año
- Admite formato de 24 horas o 12 horas con indicador AM/PM
- Bajo Consumo de Energía
- Dos Alarmas de Hora del Día
- Interfaz I2C Rápida (400kHz)

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V|
|Temperatura de Operación|0℃ a +70℃|
|Precisión|±2ppm de 0°C a +40°C|
|Interfaz|I2C|
|Dirección I2C|0x68|
|Tamaño|L: 25mm A: 25mm H: 8mm|
|Peso|4.2g|
|Tamaño del paquete|L: 85mm A: 75mm H: 25mm|
|Peso bruto|15g|

## Aplicaciones típicas

Cualquier aplicación que necesite Tiempo Real en Raspberry.

## Comenzar

### Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

### Materiales requeridos

|Raspberry Pi|High Accuracy Pi RTC(DS3231)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-DS3231.html" target="_blank">Obtener Uno Ahora</a>|

:::note
Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.
:::

### Distribución de Pines

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/pin_out.jpg)

:::note

- El chip en sí mismo soporta la función de alarma, también reservamos la interfaz de hardware relevante, pero nuestra biblioteca de software no incluye esta función(pin S/INT), necesitas llevar a cabo el desarrollo de software relacionado.

- RX/TX no se usa en este módulo, pero el conector 6x2 ocupa el pin RX/TX del Raspberry Pi, así que sacamos el RX/TX y viene con un conector de 2 pines.

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
cd pi-hats
sudo ./install.sh -u rtc_ds3231
```

- **Paso 2. Apagar Raspberry Pi**

```
sudo shutdown -h now
```

- **Paso 3. Insertar el HAT en la Raspberry Pi**

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/connect.jpg)

Por favor, asegúrese de conectar el pin 1 de este hat en el pin 1 del GPIO de la raspberry, tal como se muestra en la imagen anterior.

- **Paso 4. Encender la Raspberry Pi**

## Uso

Ahora puede usar el comando para verificar si el controlador se instaló correctamente.

```
./install.sh -l
```

Si deseas desinstalar el controlador puedes usar el comando a continuación:

```
sudo ./install.sh -u
```

**Ahora veamos qué puede hacer el módulo RTC:**

Leer el reloj de hardware e imprimir el resultado

```
sudo hwclock -r
```

Establecer la hora del sistema desde el reloj de hardware

```
sudo hwclock -s
```

Establecer el reloj de hardware desde la hora actual del sistema

```
sudo hwclock -w
```

Más usos

```
hwclock --help
```

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos Eagle del RTC Pi de Alta Precisión (DS3231)](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip)

- **[PDF]** [Hoja de Datos DS3231](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/datasheet.pdf)

## Proyecto

Este es el video de introducción de este producto

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
