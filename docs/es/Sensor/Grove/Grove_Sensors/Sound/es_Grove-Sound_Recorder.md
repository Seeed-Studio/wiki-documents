---
title: Grove - Grabadora de Sonido
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Sound_Recorder/
slug: /es/Grove-Sound_Recorder
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Grove-Sound_Recorder.jpg)

La Grove-Grabadora de Sonido está basada en [APR9600](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf), que ofrece verdadera grabación de voz de un solo chip, almacenamiento no volátil y capacidad de reproducción de 32 a 60 segundos. La muestra es de 8k y el total de 32s para la Seeed Twig-Grabadora de Sonido, dividida en 4 secciones, cada sección puede ser controlada por separado. Además, esta Grabadora de Sonido también tiene interfaz compatible con Grove y puede ser controlada manualmente o con Arduino/Seeeduino.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)

Características
--------

- Interfaz compatible con Grove
- Puede ser controlada tanto manualmente como por MCU
- Tecnología de memoria Flash no volátil, no requiere respaldo de batería
- Amigable para el usuario, operación fácil de usar
- Bajo consumo de energía
- Tasa de muestreo y duración cambiables reemplazando una sola resistencia.
:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Ideas de Aplicación
-----------------

- Juguetes

Especificaciones
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Operación
</th>
<td colspan="3">
25
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente en Espera
</th>
<td colspan="3">
1
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Rango
</th>
<td colspan="3">
±1.5
</td>
<td>
g
</td>
</tr>
</table>

Uso
---

Este Grove-Grabador de Sonido soporta 4 segmentos de mensaje de duración fija. Cada segmento puede ser controlado manualmente o por el MCU(Arduino/Seeeduino). Y la duración de cada segmento puede ser cambiada por el cliente.
[Método del Grabador](http://ijam.com.au/)

Controlar el grabador manualmente es muy fácil. OK, echemos un vistazo: El interruptor(SW1) es para seleccionar grabación/reproducción, empújalo a "Rec" cuando quieras grabar voz, y empújalo a "Play" cuando quieras reproducir la voz en el grabador. Los 4 botones(K1~K4) son los botones de control, puedes controlar qué segmento grabar/reproducir presionando el botón relacionado. El conector de salida es para conectar un altavoz de 8 0.5w, y el conector Grove es para alimentación y control del MCU.

### Cómo controlarlo manualmente

Paso 1: Alimenta el grabador. Podrías conectar el "control" al Base Shield a través del cable grove de 4 pines o cualquier fuente de voltaje de 5V.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Si lo conectas al Base Shield a través del cable de 4 pines, debes asegurarte de que SEL1 y SEL2 estén en bajo programando los pines conectados.
</div>

Conecté el conector "Control" al puerto Digital D1. Y configuré D1 y D2 en bajo mediante:

```
const int D1 =  1;
const int D2 =  2;
int State = LOW;
void setup() {
    pinMode(D1, OUTPUT);
    pinMode(D2, OUTPUT);
    digitalWrite(D1, State );
    digitalWrite(D2, State );
}
void loop()
{
}
```

Paso 2: Empuja el SW1 a "rec".

Paso 3: Mantén presionado el botón del segmento relacionado, K1 por ejemplo, para comenzar la grabación, y suelta el botón para detener la grabación, y escucharás "DI" tanto al comenzar como al detener la grabación.

<div class="admonition note">
<p class="admonition-title">Nota</p>
El tiempo de grabación para cada segmento no debe ser más de 15s, o se detendrá automáticamente incluso si mantienes el botón presionado.
</div>

Paso 4: Cuando quieras reproducir el sonido que grabaste, simplemente empuja el SW1 a "Play", y presiona el botón relacionado (No necesitas mantenerlo presionado), entonces escucharás el sonido que has grabado en este segmento.

### Cómo controlar la Grabadora por Arduino/Seeeduino

La Grabadora también puede ser controlada por el MCU (Arduino o Seeeduino), esta característica hace que este módulo grabador sea adecuado para muchas más aplicaciones y le da al usuario una sensación fantástica.
Ok, comencemos el control MCU para esta grabadora. Nota que definimos los 4 segmentos que son controlados por K1/K2/K3/K4 como Sección_1/Sección_2/Sección_3/Sección_4.

Paso 1: Prepara el hardware: conecta el conector "Control" al puerto digital D2 del Base Shield. Y empuja el SW1 a "Rec".

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/D2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sel.jpg)

Paso 2: Prepara el software. Para controlar la selección de la sección para Grabar/Reproducir, cada decodificación de Sel_1 y Sel_2 apunta a una sección diferente.

| Sel_1(D2)/Sel_2(D1) | Segmento seleccionado           |
|---------------------|---------------------------------|
| 0 0                 | Ninguno *(No hay segmento seleccionado)* |
| 0 1                 | Sección_2                       |
| 1 0                 | Sección_3                       |
| 1 1                 | Sección_4                       |


<div class="admonition note">
<p class="admonition-title">Nota</p>
Cuando es controlado por MCU, la Sección_1 no puede ser seleccionada.
</div>

*¿No te interesa tal tabla, es confusa! ¿Solo quieres el código?*
Descarga el siguiente código a tu Arduino/Seeeduino.

```
/****************************************************************************/

#include "APR9600.h"

/*macro definition of the Grove interface on the Sounder Recorder*/
#define SEL1 2
#define SEL2 3
ARP9600 recorder(SEL1,SEL2);

/*Store the command from the serial monitor you type.*/
char index;//can be '2','3','4',that is the index of section 2,section 3,section 4
char control;//control byte, can be 'r' for record, 's' for stop recording,
//'p' for play

void setup()
{
    Serial.begin(9600);
    recorder.begin();
}
void loop()
{
    getCommand();
    delay(50);
}
void getCommand()
{
    if (Serial.available()>0)
    {
        /*Get the command from the serial monitor*/
        index = Serial.read();
        control = Serial.read();
    }
    while(Serial.available()>0)Serial.read();//clear the receive buffer
    if((index > '1')&&(index < '5'))// index should be 2~4
    {
        if(control == 'r')//if it is record command?
        {
            recorder.record(index - 0x30);
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("begin to record section_");
            Serial.println(index - 0x30);
        }
        else if(control == 'p')//if it is play command
        {
            recorder.play(index - 0x30);
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("begin to play section_");
            Serial.println(index - 0x30);
        }
        else if(control == 's')//if it is stop command
        {
            recorder.stop();//stop recording
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("stop recording");
        }
            /*Clear the command*/
        index = 0;
        control = 0;
    }
}
```

Ahora, puedes comenzar a controlar la grabadora, con el siguiente comando (Velocidad de Baudios: 9600):

|         |                                 |              |
|---------|--------------------------------|--------------|
| Comando | Descripción                    | Estado de SW1 |
| 2rb     | Comenzar a grabar Sección_2    | REC          |
| 2rs     | Detener grabación Sección_2    | REC          |
| 2p      | Reproducir Sección_2           | Play         |
| 3rb     | Comenzar a grabar Sección_3    | REC          |
| 3rs     | Detener grabación Sección_3    | REC          |
| 3p      | Reproducir Sección_3           | Play         |
| 4rb     | Comenzar a grabar Sección_4    | REC          |
| 4rs     | Detener grabación Sección_4    | REC          |
| 4p      | Reproducir Sección_4           | Play         |

<div class="admonition note">
<p class="admonition-title">Nota</p>
Section_1 no puede ser controlada por el MCU.
</div>

Después de descargar el firmware a tu Arduino/Seeeduino, asegúrate de que el conector "Control" esté conectado a D2&D3&V&G.

Cambia el SW1 a Rec, y escribe el comando con cualquier transceptor de puerto serie. OCTOPUS por ejemplo. Escribe primero el comando "2rb" para comenzar a grabar la section_2, escribe "2rs" para detener la grabación. Ten en cuenta que la grabación terminará automáticamente después de aproximadamente 15s si no se escribió "2rs".

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2rb.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2b.jpg)

Y ahora, puedes escribir "2p" para reproducir la Section_2, ten en cuenta que debes asegurarte de que el SW1 esté empujado a "Play".

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2p.jpg)

Puedes grabar las 3 Secciones (Section_2, Section_3, Section_4) primero, y luego, con el puerto serie, controlar qué sección quieres reproducir.

### Cómo cambiar la frecuencia de muestreo y duración para cada sección

Puedes controlar el equilibrio calidad/duración controlando la frecuencia de muestreo. La frecuencia del oscilador puede cambiarse modificando la resistencia**(R7 en la PCB)** desde el pin OscR a GND. La tabla resume los valores de resistencia y las frecuencias de muestreo correspondientes, así como el ancho de banda de entrada y la duración resultantes.

| Resistencia | Frecuencia de Muestreo | Ancho de Banda de Entrada | Duración |
|-------------|------------------------|----------------------------|----------|
| 44 K        | 4.2 KHZ                | 2.1 KHZ                    | 60 S     |
| 38 K        | 6.4 KHZ                | 3.2 KHZ                    | 40 S     |
| 24 K        | 8.0 KHZ                | 4.0 KHZ                    | 32 S     |

El R7 es de 24K cuando se envía a tus manos, puedes cambiarlo a 38K/44K para obtener una duración de grabación más larga, con el compromiso de una menor frecuencia de muestreo.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle del Grove-Sound Recorder](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip)
- [Hoja de Datos APR9600](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf)
- [Librería de Software Contribuida por Usuario que Funciona (Usar Arduino IDE / Software Antiguo)](https://github.com/wendellinfinity/GroveSoundRecorder)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Sound_Recorder -->

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
