---
description: El Seguidor de línea - Grove está diseñado para robot seguidor de línea.
title: Seguidor de linea
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Line_Finder_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/images/Grovelinefinder1.jpg)

El Seguidor de línea - Grove está diseñado para robot seguidor de línea. Tiene un LED emisor de infrarrojo y un fototransistor sensible a infrarrojo. Puede emitir señal digital a un microcontrolador para que el robot pueda seguir una línea negra sobre fondo blanco, o viceversa.

[![](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)

## Versión

| Versión de producto          | Cambios                    | Fecha de lanzamiento |
| ---------------------------- | -------------------------- | -------------------- |
| Seguidor de línea-Grove V1.0 | Inicial                    | 29 Junio 2010        |
| Seguidor de línea-Grove V1.1 | Se añaden puntos de prueba | 28 Dic 2015          |

## Especificaciones

| Detalle                | Valor/Rango                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| Fuente de alimentación | 5                                                                 |
| Modo de salida digital | TTL (HIGH cuando se detecta negro, LOW cuando se detecta blanco ) |
| Conector               | Interfaz de 4 pines abrochados- Grove                             |
| Dimensiones            | 20mm\*20mm                                                        |
| ROHS                   | Sí                                                                |
| Diodo fotorreflectante | RS-06WD                                                           |
| Comparador             | MV358                                                             |

Consejo:
Para más información sobre los módulos Grove, visita [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/)

## Plataformas compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

### Juega con Arduino

#### Hardware

- Paso 1. Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                           | Shield Base                                                                                                           | Seguidor de línea - Grove                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/img/line_finder_s.jpg) |
| [Obtenlo ahora](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                   | [Obtenlo ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                               | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)                                      |

- Paso 2. Conecta el Seguidor de línea- Grove al puerto D3 del Shield Base.
- Paso 3. Conecta el Shield Base - Grove al Seeeduino.
- Paso 4. Conecta el Seeeduino a tu PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/img/seeeduino_line_finder.jpg)

Nota:
Si no tienes el Shield Base, también puedes conectar el Seguidor de línea - Grove directamente al Seeeduino como se muestra a continuación.

| Seeeduino    | Seguidor de línea - Grove |
| ------------ | ------------------------- |
| 5V           | Rojo                      |
| GND          | Negro                     |
| No conectado | Blanco                    |
| D3           | Amarillo                  |

#### Software

- Paso 1. Copia el código en el IDE de Arduino y cárgalo.

```c
//------------------------------------------------------------
//Nombre: Seguidor de línea modo digital
//Función: detecta línea negra o línea blanca
//Parámetro: Cuando la señal digital es HIGH, línea negra
//           Cuando la señal digital es LOW, línea blanca
//-------------------------------------------------------------
int signalPin =  3;    // conectado al pin digital 3
void setup()   {
  pinMode(signalPin, INPUT); // inicializa el pin digital como salida:
  Serial.begin(9600);  // inicializa comunicación serial a 9600 bps:
}
// the loop() method runs over and over again,
// as long as the Arduino has power
void loop()
{
  if(HIGH == digitalRead(signalPin))
    Serial.println("black");
  else  Serial.println("white");  // muestra el color
  delay(1000);                  // espera un segundo
}
```

- Paso 2. Abre el puerto serie y verás "black" cuando el sensor detecte línea negra y "white" cuando el sensor detecte línea blanca.

```
white
white
white
black
black
black
black
black
```

### Juega con Codecraft

#### Hardware

**Paso 1.** Conecta el Seguidor de línea - Grove al puerto D3 del Shield Base.

**Paso 2.** Conecta el Shield Base al Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC con un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino y arrastra un procedimiento principal al área de trabajo.

Nota:
Si es la primera vez que usas Codecraft, visita [Guía para Codecraft usando Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra los bloques como se muestra en la imagen o descarga el archivo cdc que se encuentra al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Line_Finder/master/img/cc_Line_Finder.png)

Carga el programa a tu Seeeduino/Arudino.

¡Éxito!
Cuando el código termine de cargar, verás línea encontrada o no en el Monitor Serie.

### Juega con Raspberry Pi

#### Hardware

- Paso 1. Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Seguidor de línea - Grove                                                                                            |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/img/line_finder_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                  | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)                                      |

- Paso 2. Conecta el GrovePi_Plus a la Raspberry.
- Paso 3. Conecta el Seguidor de línea - Grove al puerto D7 del GrovePi_Plus.
- Paso 4. Conecta la Raspberry a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/img/rasp_line_finder.jpg)

#### Software

- Paso 1. Sigue [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- Paso 2. Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Paso 3. Ejecuta los siguientes comandos:

```
cd ~/GrovePi/Software/Python
python grove_line_finder.py
```

Aquí está el código grove_line_finder.py

```python
import time
import grovepi

# Conecta el Seguidor de línea Grove al puerto digital al D7
# SIG,NC,VCC,GND
line_finder = 7

grovepi.pinMode(line_finder,"INPUT")

while True:
    try:
        # Regresa HIGH cuando detecta línea negra, y LOW cuando detecta línea blanca
        if grovepi.digitalRead(line_finder) == 1:
            print ("black line detected")
        else:
            print ("white line detected")

        time.sleep(.5)

    except IOError:
        print ("Error")
```

- Paso 4. Verás línea negra detectada cuando el sensor la detecte.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_line_finder.py
black line detected
black line detected
white line detected
white line detected

```

## Recursos

- **[Eagle&PDF]** [Seguidor de línea -Grove Esquemático V1.0](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip)
- **[Eagle&PDF]** [Seguidor de línea - Grove Esquemático V1.1](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip)
- **[Datasheet]** [LMV358.PDF](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/res/Lmv358.pdf)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_Line_Finder/master/res/Grove_Line_Finder_CDC_File.zip)

## Soporte técnico

Por favor envía cualquier problema técnico o duda a nuestro [foro](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
