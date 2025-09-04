---
title: Grove - RTC de Alta Precisión (Reloj de Tiempo Real)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove_High_Precision_RTC/
slug: /es/Grove_High_Precision_RTC
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Grove-High_Precision_RTC.jpg)

Grove - RTC de Alta Precisión basado en el chip de reloj PCF85063TP que es un Reloj de Tiempo Real (RTC) CMOS y calendario optimizado para bajo consumo de energía. Un registro de compensación permite el ajuste fino del reloj. Todas las direcciones y datos se transfieren serialmente a través del bus I2C y la velocidad máxima del bus es de 400 kbit/s.

Comparado con [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html), este módulo puede proporcionar un resultado más preciso. Y proporciona una salida de reloj programable para dispositivos periféricos así como interrupción de minuto y medio minuto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html)

## Características

---

- Voltaje de Funcionamiento: 5V/3.3V
- Proporciona año, mes, día, día de la semana, horas, minutos y segundos basado en un cristal de cuarzo de 32.768 kHz
- Corriente baja: típicamente 0.22 uA a VDD = 3.3 V y Tamb = 25 ℃
- Interfaz de bus I2C de dos líneas de 400 kHz (a VDD = 1.8 V a 5.5 V)
- Salida de reloj programable para dispositivos periféricos (32.768 kHz, 16.384 kHz, 8.192 kHz, 4.096 kHz, 2.048 kHz, 1.024 kHz, y 1 Hz)
- Interrupción de minuto y medio minuto
- Función de detección de parada del oscilador
- Reset de Encendido Interno (POR)
- Registro de compensación programable para ajuste de frecuencia
- Interfaz: Grove - I2C(SCL,SDA,VCC,GND)
- Tamaño: 20*40mm
- Librerías de Arduino listas para usar

## Plataformas Soportadas

## Función de la Interfaz

---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Interface.jpg)

1. Interfaz Grove
2. Interfaz de salida de reloj programable
3. Interfaz de salida de interrupción de minuto y medio minuto
4. Chip de reloj PCF85063TP
5. Portabaterías CR1225

## Ideas de Aplicación

---

- Cámara digital fija
- Cámara de video digital
- Impresoras
- Máquinas copiadoras
- Dispositivos alimentados por batería

## Primeros Pasos

Después de esta sección, puedes hacer que **Grove - RTC de Alta Precisión** funcione con solo unos pocos pasos.

### Preparaciones

Ahora estamos haciendo una demostración para el módulo Grove - RTC de Alta Precisión, en esta demostración usaremos un terminal para ver los datos. Esto es lo que necesitamos usar para esta demostración.

- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)*1
- [Grove - RTC de Alta Precisión](https://www.seeedstudio.com/)*1

Si esta es tu primera vez usando [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html), por favor consulta [la wiki de Seeeduino Lotus](https://wiki.seeedstudio.com/es/Seeeduino_Lotus/).

Seeeduino Lotus es completamente compatible con Arduino que funciona tan simple como Arduino.

Si esta es tu primera vez usando Arduino, por favor echa un vistazo [aquí](https://arduino.cc) para comenzar tu viaje con Arduino.

### Conectando el hardware

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) es una combinación de Seeeduino y Base Shield. Podemos conectar el módulo RTC al socket I2C directamente como muestra la imagen de abajo.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/connect.jpg)

### Descargar la librería

Haz clic para descargar la librería e instalarla ([Cómo instalar una Librería de Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/)).

[![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/library.png)](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP/archive/master.zip)

### Abrir el ejemplo

Después de instalar la librería, por favor reinicia Arduino, haz clic en File>Examples>SetTimeAndDisplay.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/demo2.jpg)

### Revisar Resultados

Después de completar la carga, puedes abrir el monitor serie para ver el resultado.

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/result.jpg)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Librería y Ejemplos de Grove - RTC de Alta Precisión](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP)
- [Archivo Eagle de Grove - RTC de Alta Precisión](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip)
- [Archivo pdf del Esquemático de Grove - RTC de Alta Precisión](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_pdf.pdf)
- [Hoja de Datos PCF85063TP](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/PCF85063TP.pdf)
- [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>