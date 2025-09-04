---
description: Grove - Electroimán
title: Grove - Electroimán
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Electromagnet
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Electroimán
category: Sensor
bzurl: https://seeedstudio.com/Grove-Electromagnet-p-1820.html
oldwikiname: Grove_-_Electromagnet
prodimagename: Grove_Electromagnet_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove Electromagnet.jpg
surveyurl: https://www.research.net/r/Grove-Electromagnet
sku: 101020073
tags: grove_digital, io_5v, plat_duino, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02.jpg)

Un electroimán es un tipo de imán en el cual el campo magnético es producido por corriente eléctrica. Una corriente eléctrica que fluye en un alambre crea un campo magnético alrededor del alambre, debido a la ley de Ampère (ver dibujo abajo). Para concentrar el campo magnético, en un electroimán el alambre se enrolla en una bobina con muchas vueltas de alambre una al lado de la otra. El campo magnético de todas las vueltas del alambre pasa a través del centro de la bobina, creando un campo magnético fuerte allí. Grove - Electroimán puede succionar 1KG de peso y mantenerlo. Es fácil de usar, para aprender el principio del electroimán.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Características

- Forma Grove
- Succión máxima de 1KG
- Baja corriente en espera

## Especificaciones

| Elemento           | Valor |
|-------------------|-------|
| Voltaje de Trabajo | DC 5V |
| Corriente de Trabajo | 400mA |
| Corriente en Espera | 200uA |
| Peso de Carga      | 1KG   |

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar Con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|Grove-Electromagnet|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **Paso 2.** Conecta Grove-Electromagnet al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/2-connect.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-Electromagnet al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove-Ultrasonic Ranger |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D2            | Amarillo                  |


**Software**

- **Paso 1.** Por favor copia el código de abajo al IDE de Arduino y súbelo al arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
/*
  Turns on an Electromagnet on for one second, then off for one second, repeatedly.
  This example code is in the public domain.
*/

int Electromagnet = 2;
int LED = 13;

// the setup routine runs once when you press reset:
void setup() {
    // initialize the digital pin as an output.
    pinMode(Electromagnet, OUTPUT);
    pinMode(LED, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
    digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)
    digitalWrite(LED, HIGH);            // turn the LED on (HIGH is the voltage level)
    delay(1000);                        // wait for a second
    digitalWrite(Electromagnet, LOW);   // turn the Electromagnet off by making the voltage LOW
    digitalWrite(LED, LOW);             // turn the LED off by making the voltage LOW
    delay(1000);                        // wait for a second
}
```

- **Paso 2.** Grove-Electromagnet funcionó.

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet-3.png)

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - Electromagnet al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/cc_Electromagnet.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, puedes intentar acercar el objeto de hierro al electroimán. El LED en el pin 13 del Arduino se encenderá cuando el electroimán esté funcionando.
:::

### Jugar Con Raspberry Pi

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove-Electromagnet |
|--------------|--------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 3.** Conecta el Grove-Electromagnet al puerto **D4** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/1_pi_connect.jpg)

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente del GrovePi.

:::tip
En esta wiki usamos la ruta **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.
:::

:::note
Te sugerimos firmemente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::

- **Paso 3.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Navega al directorio de las demostraciones:

```
cd yourpath/GrovePi/Software/Python/
```

Aquí está el código grove_electromagnet.py.

```python
    import time
    import grovepi

    # The electromagnet can hold a 1KG weight

    # Connect the Grove Electromagnet to digital port D4
    # SIG,NC,VCC,GND
    electromagnet = 4

    grovepi.pinMode(electromagnet,"OUTPUT")
    time.sleep(1)

    while True:
        try:
            # Switch on electromagnet
            grovepi.digitalWrite(electromagnet,1)
            print "on"
            time.sleep(2)

            # Switch off electromagnet
            grovepi.digitalWrite(electromagnet,0)
            print "off"
            time.sleep(2)

        except KeyboardInterrupt:
            grovepi.digitalWrite(electromagnet,0)
            break
        except IOError:
            print "Error"
```

5.Run the demo.

```
    sudo python grove_electromagnet.py
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- **[**Eagle**]**[Grove Electromagnet v1.0 SCH PCB.zip](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip)
- **[**Hoja de Datos**]**[Hoja de Datos ZYE1-P20-15 PDF](https://files.seeedstudio.com/wiki/Bazaar_file/101020073/ZYE1-P%20electro%20holding%20magnets.pdf)
- **[**Codecraft**]**[Archivo CDC](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_CDC_File.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_Electromagnet -->

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

