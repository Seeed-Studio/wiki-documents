---
title: Grove - Relé Optoacoplador (M281)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Optocoupler_Relay-M281/
slug: /es/Grove-Optocoupler_Relay-M281
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/preview.png)

Este módulo es un relé de estado sólido (SSR) bidireccional SPSD (unipolar, unidireccional), normalmente abierto. El Grove Relé Optoacoplador (M281) ofrece una resistencia de encendido muy baja, lo que permite una alta capacidad de corriente de carga.

A diferencia de los otros SSR TRIAC en nuestro sitio web, este relé está basado en MOSFET, por lo que puede manejar tanto cargas AC como DC. Si necesitas usar un SSR con carga DC, ¡esto es lo que quieres!

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-Relé Optoacoplador (M281) | Inicial                                                                                               | Dic 2018      |

## Características

- Baja resistencia en conducción (0.5Ω MÁX.)
- 1A de corriente de carga continua
- Clasificación de voltaje de carga de 60V
- Baja corriente de control de entrada (3mA TÍP.)
- Alto aislamiento entrada-salida (1.5kV MÍN.)

## Aplicaciones

- Equipos de Prueba Automatizados
- Sistemas de lectura de medidores
- Equipos médicos
- Monitoreo de baterías
- Multiplexores

## Especificación

  |Parámetro|Valor|
  |---|---|
  |Voltaje de alimentación|3.3V / 5V|
  |Temperatura de operación| -40 – 85℃|
  |Temperatura de almacenamiento|- 55°C – 125°C|
  |Voltaje de bloqueo|60 V|
  |Corriente de carga continua|1A|
  |Corriente de fuga|0.2 uA(TÍP.)<br />1 uA(Máx.)|
  |Resistencia en conducción|0.5 Ω(TÍP.)<br />0.7 Ω(Máx.)|
  |Resistencia de aislamiento|100 GΩ|
  |Tiempo de encendido|1.4 ms(TÍP.)<br />5 ms(Máx.)|
  |Tiempo de apagado|0.2 ms(TÍP.)<br />2 ms(Máx.)|
  |Interfaz|Digital|
  |Tamaño|L: 40mm A: 20mm H: 13mm|
  |Peso|10.6g|
  |Tamaño del paquete|L: 135mm A: 85mm H: 13mm|
  |Peso bruto|11g|
  <div align="center"><b>Tabla 1.</b><i>Especificación General</i></div>

## Descripción del Hardware

### Distribución de pines

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" /></a></p>
    <figcaption><b>Figura 1</b>. <i>Distribución de pines</i></figcaption>
  </figure>
</div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## Comenzando

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Optocoupler Relay (M281)|LED Rojo|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/led.jpg)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

**Conexión de Hardware**

- **Paso 1.** Conecta Grove - Base Shield en Seeeduino.

- **Paso 2.** Conecta el Grove - Optocoupler Relay (M281) al puerto **D5** del Base Shield.

- **Paso 3.** Conecta el LED y el Grove - Optocoupler Relay (M281) a los pines **3.3V** y **GND** del Grove - Base Shield.(Por favor consulta la figura a continuación)

- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" /></a></p>
    <figcaption><b>Figura 2</b>. <i>Diagrama de pines, por favor asegúrate de conectar al pin de 3.3v, 5v dañará este LED.</i></figcaption>
  </figure>
</div>

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Copia el siguiente código en un nuevo sketch en el IDE de Arduino

```cpp
const int Pinout = 5;      

void setup() {
 pinMode(Pinout, OUTPUT);
 Serial.begin(9600);
}

void loop() {

  digitalWrite(Pinout, HIGH); 
  delay(500);
  digitalWrite(Pinout, LOW); 
  delay(500);
}
```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
  Si todo va bien, veremos el LED parpadeando.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo de esquemas Grove - Optocoupler Relay (M281)](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip)
- **[PDF]** [Hoja de datos M281](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/M281_Datasheet.pdf)

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
