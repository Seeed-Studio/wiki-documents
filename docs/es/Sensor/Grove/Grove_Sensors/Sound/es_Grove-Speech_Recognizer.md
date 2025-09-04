---
title:  Grove - Reconocedor de Voz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Speech_Recognizer/
slug: /es/Grove-Speech_Recognizer
last_update:
  date: 01/06/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cover.jpg)

Usar la voz para interactuar con las cosas que te rodean siempre puede ser una de las cosas más interesantes de las aplicaciones IoT, queremos hacer algo más diferente y genial. Recientemente lanzamos la solución de control por voz "Respeaker" en Kickstarter y se convirtió en un éxito rotundo. Sin embargo, no todo el mundo necesita un Respeaker para construir un proyecto de control por voz, a veces la gente solo necesita una solución simple, aquí nos gustaría presentar la primera generación del reconocedor de voz grove para realizar tu sueño de hogar inteligente de manera fácil y rápida.

Grove reconocedor de voz está diseñado para aplicaciones de control por voz como hogar inteligente, juguete inteligente, robot de control por voz, cualquier cosa que te gustaría controlar a través de la voz, vale la pena intentarlo. La placa incluye un Nuvoton ISD9160, un micrófono, 1 flash SPI, 1 conector grove, 1 conector de altavoz y 1 led para reflejar tu voz.

Nuvoton ISD9160 es un (SoC) Chipcorder basado en Cortex™-M0, proporciona una solución fuerte y económica para aplicaciones de control por voz. ISD9160 no es lo único increíble en este grove. Veamos el micrófono. ¿Recuerdas el momento incómodo cuando tienes que hablar directamente y de cerca al dispositivo reconocedor de voz para asegurarte de que pueda escucharte? ¡No pasará esta vez! El micrófono en grove-reconocedor de voz es omnidireccional, lo que significa que ya sea que un usuario hable al micrófono desde el frente, atrás, izquierda o derecha, el micrófono grabará las señales todas con ganancia igual.

Este reconocedor de voz puede reconocer 22 piezas de comandos incluyendo 'start', 'stop', 'Play music' y así sucesivamente. Cada vez que reconoce un comando, devuelve un valor y luego el altavoz que está conectado a él repetirá el comando. Este valor puede ser usado para controlar otros dispositivos como motor, reproductor de música. Lo hemos probado durante horas para asegurar que posee una alta tasa de reconocimiento y una muy baja activación falsa.

Aquí hay algunas notas que debes saber antes de usarlo:
Palabra de Activación: Hicell (Por favor pronúnciala como una palabra)
Cuando reconoce la palabra de activación, el LED se vuelve rojo, entonces puedes decir la palabra de comando, si reconoce la palabra de comando, el LED se volverá azul.

:::note
    El firmware del módulo fue escrito por el proveedor tercero, no es código abierto.
:::

## Ideas de Aplicación

* Internet de las Cosas
* Casa Inteligente
* Interfaz Humano Máquina
* Control de Iluminación
* Centro de Sensores
* Robot

## Características

* Reconocimiento de Voz Local
* Muy baja tasa de activación falsa
* Conector de altavoz (JST2.0, altavoz no incluido)
* Micrófono incorporado
* Voltaje de trabajo 3.3/5V
* 22 entradas de reconocimiento
* Baudrate por defecto: 9600

:::tip
    Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

**Soporte de Plataforma**

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## Especificación

| Elemento  | Mín |Típ | Máx | Condición |
|---|-------|-----|--------|-----------|
| Voltaje de Operación |3V     |3.3V |5V |25 ℃|
|Corriente de Operación  |25mA   |26.5mA |80mA@reproduciendo |VCC = 3.3V 25℃|
|Corriente de Operación  | 25mA | 26.5mA |130mA@reproduciendo| VCC = 5V 25℃|
|Temperatura de Operación| 0℃ |25℃ |85℃ | |
|Tamaño | | 40*20mm  | | |
|Peso | | 5g  | |
|Flash | | 2Mbytes | |
|Sensibilidad del Micrófono |-43dB | -40dB | -37dB | VCC = 5V 25℃ |
|SNR del Micrófono | 58dB  || | |
|Directividad del Micrófono | |Omnidireccional | | |
|Potencia del Altavoz| | |1W |VCC = 5V 25℃|
|Núcleo del Procesador| |Cortex-M0| | |
|Frecuencia del Procesador | |32.768MHz|50MHz|VCC = 5V 25℃|

## Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/hw.png)

1. Conector Grove
2. Led Rojo - se enciende cuando se reconoce "HIcell"
3. Led Azul - se enciende cuando se reconoce un comando
4. Conector de Altavoz - Puedes conectar un altavoz para obtener la respuesta de voz
5. Micrófono
6. ISD9160CFI - controlador

## Retorno de Comandos

| Comando | Valor |
|-------------|--------|
|Encender la luz |1|
|Apagar la luz |2|
|Reproducir música |3|
|Pausar  |4|
|Siguiente  |5|
|Anterior  |6|
|Arriba  |7|
|Abajo |8|
|Encender la TV |9|
|Apagar la TV |10|
|Aumentar temperatura |11|
|Disminuir temperatura |12|
|Qué hora es |13|
|Abrir la puerta |14|
|Cerrar la puerta |15|
|Izquierda |16|
|Derecha  |17|
|Parar  |18|
|Iniciar |19|
|Modo 1 |20|
|Modo 2 |21|
|Ir |22|

## Comenzando

Aquí te mostraremos cómo funciona este Grove - Reconocedor de Voz a través de una demostración simple. Primero que nada, necesitas preparar las siguientes cosas:

| Seeeduino V4 | Grove - Reconocedor de Voz | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Light-Sensor%28P%29-p-1253.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

**Conexión de Hardware**

Gracias al beneficio de los módulos de la serie Grove, no necesitas hacer soldaduras o usar una protoboard, lo que necesitas hacer es conectar los módulos al puerto correcto del Base Shield. Para esta demostración, conectamos Grove - Speech Recognizer al puerto D2.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/connect.jpeg)

**Software**

Copia el código de abajo y pégalo en tu Arduino IDE, y súbelo a tu Seeeduino V4. Después de subir el código a un Arduino, abre el monitor serie.

```
#include <SoftwareSerial.h>

#define SOFTSERIAL_RX_PIN  2
#define SOFTSERIAL_TX_PIN  3

SoftwareSerial softSerial(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

const char *voiceBuffer[] =
{
    "Turn on the light",
    "Turn off the light",
    "Play music",
    "Pause",
    "Next",
    "Previous",
    "Up",
    "Down",
    "Turn on the TV",
    "Turn off the TV",
    "Increase temperature",
    "Decrease temperature",
    "What's the time",
    "Open the door",
    "Close the door",
    "Left",
    "Right",
    "Stop",
    "Start",
    "Mode 1",
    "Mode 2",
    "Go",
};

void setup()
{
    Serial.begin(9600);
    softSerial.begin(9600);
    softSerial.listen();
}

void loop()
{
    char cmd;

    if(softSerial.available())
    {
        cmd = softSerial.read();
        Serial.println(voiceBuffer[cmd - 1]);
    }
}

```

**Despertar el módulo**

El módulo se despertará cuando haya el comando **Hicell**, entonces el led rojo se encenderá. Inténtalo de nuevo cuando el led rojo no esté encendido.

:::note
    El led rojo durará 5 segundos. Si el led rojo se apaga antes de que el comando sea reconocido, debes decir **Hicell** de nuevo.
:::

**Comando**

Después de que el módulo esté despierto, puedes pronunciar el comando. Como por ejemplo

    "Turn on the TV"
Si el led azul se enciende (dura aproximadamente 1s), eso significa que el comando fue reconocido correctamente. Echa un vistazo a tu Monitor Serie, el comando fue impreso en él.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/monitor.png)

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Speech Recognizer al puerto D2 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cc_Speech_Recognizer.PNG)

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, di Hicell para despertarlo, y puedes decir otro comando cuando el LED rojo se encienda.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemas en Eagle](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip)
* [Esquemas en PDF](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove%20-%20Speech%20Recognizer%20v1.0.pdf)
* [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove_Speech_Recognizer_CDC_File.zip)

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah, y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

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
