---
description: Grove - Sensor de Presencia Humana (AK9753)
title: Grove - Sensor de Presencia Humana (AK9753)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Human_Presence_Sensor-AK9753
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Sensor de Presencia Humana (AK9753)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020554
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/main.jpg)

El Grove - Sensor de Presencia Humana puede utilizarse para detectar la presencia del cuerpo humano o cualquier otro objeto infrarrojo. Además, está compuesto por cuatro sensores IR cuánticos y un circuito integrado (IC) para compensación de características, por lo que puede utilizarse para detectar el movimiento del objeto IR y la posición relativa donde se mueve el objeto IR. Un convertidor analógico-digital integral proporciona salidas de datos de 16 bits. Este módulo es adecuado para detector humano de varios pies.

Puedes encontrar muchos sensores infrarrojos en nuestro sitio web, este será uno de los más interesantes. Con un cierto algoritmo, incluso puede lograr reconocimiento de gestos. Esperamos que lo disfrutes.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Sensor IR de Tipo Cuántico con Cuatro Elementos IR
- Salidas Digitales de 16 bits al bus I2C
- Sensor de temperatura integrado
- Función de Interrupción
- Bajo Consumo de Corriente

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Temperatura de Operación|-30℃ ~ 85℃|
|Rango de Detección de Presencia Humana| < 3m|
|Resolución de Salida IR|16 bit|
|Rango de Medición de Temperatura|-10℃ ~ 60 ℃|
|Interfaz|I2C|
|Dirección I2C|0x64(por defecto)<br />0x65 / 0x66(configurable)|

## Aplicaciones típicas

- Detección del cuerpo humano
- Sensor de proximidad
- Detección de movimiento

## Descripción general del hardware

### Distribución de pines

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout1.png)

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout_back.jpg)

### Esquemático

**Alimentación**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic.jpg)

El AK9763 funciona con un voltaje de operación bajo--1.71~3.63V, por lo que usamos el chip [XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para proporcionar un 3.3V estable. La entrada del XC6206P33 varía de 1.8V a 6.0V, por lo que puedes usar este módulo con tu Arduino tanto en 3.3V como en 5V.

**Circuito cambiador de nivel bidireccional**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic1.jpg)

Este es un circuito cambiador de nivel bidireccional típico para conectar dos secciones de voltaje diferentes de un bus I2C. El bus I<sup>2</sup>C de este sensor usa 3.3V, si el bus I<sup>2</sup>C del Arduino usa 5V, este circuito será necesario. En el esquemático anterior, **Q1** y **Q2** son MOSFET de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Sensor de Presencia Humana (AK9753) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Human Presence Sensor (AK9753) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/connect.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - Human Presence Sensor (AK9753) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V      | Rojo               | VCC |
| SDA            | Blanco             | SDA |
| SCL            | Amarillo           | SCL |

#### Software

:::caution
Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Grove_Human_Presence_Sensor](https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Ahora puedes encontrar cuatro demos en el Arduino IDE haciendo clic en **File --> Examples --> Grove Human Presence Sensor Library**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path1.jpg)

>**Example1-BasicReading**: Este ejemplo lee los datos en bruto (uint16_t) de cuatro sensores IR, e imprime estos datos en bruto en el serial.  
>**Example2-PlotDiff**: Lee los datos en bruto y los grafica en el plotter serial.  
>**Example3-DetectPresence**: Detecta la presencia de objetos IR.  
>**Example4-PlotMovement**: Detecta el movimiento y lo grafica en el plotter serial.

O, encuéntralos en tu computadora en la carpeta **C:XXXX\Arduino\libraries\Grove_Human_Presence_Sensor-master\examples**, **XXXX** es la ubicación donde instalaste el Arduino IDE.

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path2.jpg)

- **Paso 4.** Elige un demo, sube el código. Si no sabes cómo subir el código, por favor revisa [How to upload code](https://wiki.seeedstudio.com/es/Upload_Code/).

Ahora veamos qué pasará entonces:

---

**Example1-BasicReading:**

Cuando subas el código del ejemplo1, abre el **Serial Monitor** del Arduino IDE haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**.  
Puedes ver los siguientes resultados：

```cpp
Grove - Human Presence Sensor example
1:[432], 2:[288], 3[248], 4:[384], temp[20.87], millis[109]
1:[424], 2:[296], 3[232], 4:[400], temp[20.87], millis[215]
1:[448], 2:[280], 3[224], 4:[360], temp[20.87], millis[319]
1:[424], 2:[280], 3[224], 4:[368], temp[20.87], millis[424]
1:[440], 2:[256], 3[248], 4:[376], temp[20.87], millis[530]
1:[440], 2:[280], 3[224], 4:[384], temp[20.75], millis[634]
1:[464], 2:[296], 3[216], 4:[392], temp[20.75], millis[740]
1:[416], 2:[288], 3[240], 4:[376], temp[20.75], millis[844]
1:[432], 2:[288], 3[216], 4:[392], temp[20.75], millis[950]
1:[440], 2:[296], 3[208], 4:[384], temp[20.75], millis[1055]
1:[424], 2:[248], 3[192], 4:[376], temp[20.75], millis[1160]
1:[432], 2:[264], 3[200], 4:[384], temp[20.75], millis[1265]
1:[440], 2:[248], 3[208], 4:[352], temp[20.75], millis[1371]
1:[400], 2:[256], 3[192], 4:[320], temp[20.75], millis[1475]
1:[368], 2:[208], 3[152], 4:[296], temp[20.75], millis[1581]
1:[608], 2:[384], 3[368], 4:[560], temp[20.75], millis[1686]
1:[1320], 2:[912], 3[736], 4:[960], temp[20.75], millis[1790]
1:[2168], 2:[1664], 3[1336], 4:[1752], temp[20.75], millis[1896]
1:[2544], 2:[2192], 3[2112], 4:[2376], temp[20.75], millis[2001]
1:[2536], 2:[2256], 3[2280], 4:[2520], temp[20.75], millis[2107]
1:[2144], 2:[2064], 3[2168], 4:[2328], temp[20.75], millis[2212]
```

El `1:[]` significa los datos de medición del sensor IR1, `2:[]` significa los datos de medición del sensor IR2, `3:[]` significa los datos de medición del sensor IR3, `4:[]` significa los datos de medición del sensor IR4. Todos estos parámetros tienen un rango de valores de -32767 ~ 32767. Este parámetro refleja la intensidad de la luz infrarroja detectada. Cuanto más fuerte sea la intensidad infrarroja, mayor será el valor del parámetro.

El `temp[]` significa los datos de medición del sensor de temperatura integrado, con un rango de -10℃ a +60℃.

El `millis[109]` significa el tiempo del sistema desde que este programa comenzó, proporcionado por Arduino.

---

**Ejemplo2-PlotDiff**

Cuando subas el código del ejemplo2, abre el **Plotter Serie** del IDE de Arduino haciendo clic en **Herramientas-> Plotter Serie**. O presiona las teclas ++ctrl+shift+l++ al mismo tiempo. Establece la velocidad de baudios a **9600**.  
Puedes ver los siguientes resultados：

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result1.png)

Este ejemplo lee los datos de cuatro sensores IR y los convierte en corriente (pA), luego grafica **diff13** y **diff24** en el Plotter Serie del IDE de Arduino.

>diff13 = IR1 - IR3  // <font color="blue">línea azul</font>  
>diff24 = IR2 - IR4  // <font color="red">línea roja</font>

---

**Ejemplo3-DetectPresence**

Cuando subas el código del ejemplo1, abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**.  
Puedes ver los siguientes resultados：

```cpp
Grove - Human Presence Sensor example
o o x o  millis: 16949
o x x o  millis: 17050
x x x x  millis: 17153
x x x x  millis: 17254
x x x x  millis: 17355
x x x x  millis: 17457
```

Este ejemplo detecta la presencia de objetos IR. La detección se basa en la derivada del valor del sensor. Si la derivada es mayor que un umbral, consideramos que algún objeto IR entró en el campo de visión del sensor. La derivada de cada canal se calcula mediante la siguiente fórmula:

<div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0', fontFamily: 'monospace', fontSize: '16px' }}><strong>derivativeIR1 = ΔIR1 / Δt</strong></div>

Δt representa el intervalo de tiempo y ΔIR1 representa el cambio del valor de salida del Sensor IR1 durante el intervalo de tiempo.

En la salida, **O** significa sin detección, **X** significa detectado. El orden de las salidas corresponde a la ubicación física de los sensores IR.  
ej.

```
o o x o
```

Significa que el tercer sensor IR detectó el objeto IR y los otros no (El objeto IR puede venir desde arriba). Puedes encontrar la ubicación física del sensor IR en <a href="#pin-out" target="_self">Distribución de Pines</a>

---

**Ejemplo4-PlotMovement**

Cuando subas el código del ejemplo4, Abre el **Plotter Serie** del IDE de Arduino haciendo clic en **Herramientas-> Plotter Serie**. O presiona las teclas ++ctrl+shift+l++ al mismo tiempo. Establece la velocidad de baudios a **9600**.  
Puedes ver los siguientes resultados：

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result2.png)

La detección se basa en la derivada del valor de diferencia de IR1_IR3 o IR2_IR4. La derivada de IR1_IR3 o IR2_IR4 se calcula mediante la siguiente fórmula:

<div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0', fontFamily: 'monospace', fontSize: '16px' }}><strong>derivativeIR1_IR3 = Δ(IR1-IR3) / Δt</strong></div>

El significado de cada curva en la figura es:: (en orden)

- diff13  // <font color="blue">IR1-IR3, línea azul</font>
- Movimiento en la dirección 1-3  // <font color="red">derivativeIR1_IR3, línea roja</font>  
(un pulso, pulso positivo significa de 1 a 3, de lo contrario de 3 a 1)
- diff24  // <font color="green">IR2-IR4, línea verde</font>
- Movimiento en la dirección 2-4  // <font color="orange">derivativeIR1_IR3, línea naranja</font>  
(un pulso, pulso positivo significa de 2 a 4, de lo contrario de 4 a 2)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Human Presence Sensor (AK9753) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip)

- **[Zip]** [Librería del Sensor de Presencia Humana de Seeed](https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor/archive/master.zip)

- **[PDF]** [Hoja de Datos AK9753](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/AK9753.pdf)

- **[PDF]** [HOJA DE DATOS XC6206](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Soporte Técnico y Discusión de Productos

 <br />
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
