---
description: Grove - Kit de Sensor de Presión Integrado
title: Grove - Kit de Sensor de Presión Integrado
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Integrated-Pressure-Sensor-Kit
last_update:
  date: 1/5/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-wiki.jpg" alt="pir" width={600} height="auto" /></p>

Kit de sensor de presión integrado Grove (MPX5700AP), este módulo adopta el sensor de presión de silicio integrado avanzado MPX5700AP, que tiene las ventajas de alta precisión, buena confiabilidad y sin calibración. Es muy adecuado para la construcción de sistemas de medición de presión Arduino, capaz de medir la presión del aire en el rango de 15Kpa a 700Kpa. Incluimos una jeringa y un tubo de goma en el kit.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html)

## Características

- 2.5% Error Máximo en el rango de 0° a 85°C
- Disponible en Configuraciones Absoluta, Diferencial y de Calibre
- Galga Extensométrica de Tensión de Corte de Silicio Patentada
- Elemento Unibody de Epoxi Duradero

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

|Parámetro|Valor/Rango|
|---|---|
|Voltaje de Operación| 3.3V/5V DC|
| interfaz de salida | analógica |
|Rango de Medición|15Kpa-700Kpa|
|Tamaño de apariencia|&lt;20*40mm|

## Descripción General del Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-pin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-pin.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Compatibles

<!-- | Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

| Arduino | Raspberry Pi | BeagleBone | Wio | LinkIt ONE |
|---------|--------------|------------|-----|------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" /></p> |<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" /></p>  |

:::caution  

    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

:::note

    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

**Materiales requeridos**

| Seeeduino V4.2 | Grove-Integrated-Pressure-Sensor-Kit | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-210-157.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

:::note

 **1** Por favor, conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor, usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
 **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexión de Hardware

- **Paso 1.** Conecta el Sensor de Presión Integrado Grove al puerto **A0** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-con.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-con.jpg" alt="pir" width={600} height="auto" /></p>

:::note

    Si no tenemos Grove Base Shield, también podemos conectar directamente el Grove-Integrated-Pressure-Sensor-Kit al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove-Integrated-Pressure-Sensor-Kit |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| A0            | Amarillo                  |

#### Software

:::note

    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Copia el código de abajo en el IDE de Arduino y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
int rawValue; // A/D readings
int offset = 410; // zero pressure adjust
int fullScale = 9630; // max pressure (span) adjust
float pressure; // final pressure
#define SERIAL Serial

void setup() {
  SERIAL.begin(9600);
}

void loop() {
  rawValue = 0;
  for (int x = 0; x < 10; x++) rawValue = rawValue + analogRead(A0);
  pressure = (rawValue - offset) * 700.0 / (fullScale - offset); // pressure conversion

  SERIAL.print("Raw A/D is  ");
  SERIAL.print(rawValue);
  SERIAL.print("   Pressure is  ");
  SERIAL.print(pressure, 1); // one decimal places
  SERIAL.println("  kPa");
  delay(1000);
}
```

- **Paso 2.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.**  Ahora puedes usar este sensor, y la salida será así:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result2.png" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove-Integrated-Pressure-Sensor-Kit-(MPX5700AP).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Diagrama esquemático del Sensor de Presión Integrado Grove](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove-Integrated-Pressure-Sensor-Kit-(MPX5700AP).zip)

- **[PDF]** [Hoja de Datos LMV358](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/LMV358_datasheet.pdf)

- **[PDF]** [Hoja de Datos MPX5700AP](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/MPX5700AP_datasheet.pdf)

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
