---
description: 24GHz mmWave Human Static Presence
title: Sensor mmWave 24GHz - Módulo de Presencia Humana Estática
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR24HPB1
last_update:
  date: 07/18/2025
  author: Guillermo
---

# Sensor mmWave 24GHz - Módulo de Presencia Humana Estática (MR24HPB1)

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html" target="_blank">
    <strong>
      <span>
        <font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font>
      </span>
    </strong>
  </a>
</div>

## Introducción

El Sensor Radar de Presencia Humana Estática es un módulo mmWave autónomo, seguro y que protege la privacidad, operando a 24GHz. Con el radar Doppler mejorado de Infineon y el algoritmo estándar, el módulo es una solución ideal para aplicaciones individuales como hogar inteligente, hotel inteligente y alarma de peligro.

### Aplicación

- Hogar Inteligente

### **Características**

- Tecnología confiable: Radar industrial FMCW mmWave de Infineon
- Teoría habilitada: Aplica tecnología de radar Doppler con Sensor de Distancia Cercana (NDS) operando a 24GHz
- Algoritmo estándar: Distingue condiciones ocupadas/no ocupadas e identifica actividades humanas en un entorno de auto-adaptación
- Protección perfecta de privacidad: Provee capacidades de vigilancia sin identificación
- Ubicación flexible de instalación: Funciona correctamente independientemente de obstrucciones
- Estado de funcionamiento inofensivo: Emite potencia de energía inofensiva de 10 dBm
- Alta precisión: Reduce interferencias de objetos no vivos y logra más del 95% de precisión en resultados
- Alta robustez: Mantiene funcionamiento adecuado en entornos complejos con diferentes temperaturas, humedad, ruido, corrientes de aire, polvo, luz, etc.
- Antena de alto rendimiento: Detecta incluso micromovimientos en patrón de haz en abanico con Horizontal 90° / Vertical 60°
- Distancia de medición:
  - Distancia máxima percepción de movimiento: hasta 12 metros
  - Distancia máxima percepción de micromovimiento: hasta 5 metros
  - Distancia máxima percepción corporal: hasta 3 metros
- Tiempo de detección:
  - Estado de desocupado a ocupado: dentro de 0.5 segundos
  - Estado de ocupado a desocupado: más de 1 minuto
- Radar personalizable: Soporta desarrollo secundario incluyendo parámetros del radar, protocolo, antena, función

### **Descripción del Hardware**

![](https://files.seeedstudio.com/wiki/mmWave-radar/yinjiaotu.png)

1. Salida S1: nivel alto - ocupado, nivel bajo - desocupado.
2. Salida S2: nivel alto - activo, nivel bajo - estático
3. GP1 a GP4 son controles de selección de parámetros, que pueden redefinirse según los requerimientos del usuario.
4. Las señales de salida de esta interfaz son todas a nivel 3.3V.

:::caution  
El consumo de energía del producto es de 500mW, por lo que no es adecuado para alimentación a largo plazo.
:::

### **Características**

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar1.png)

## Primeros Pasos

### Resumen de la Librería Arduino

:::tip
Si es la primera vez que usas Arduino, te recomendamos consultar [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

El código de la librería usada en este ejemplo puede descargarse haciendo clic en el icono siguiente.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

Antes de empezar a desarrollar un sketch, veamos las funciones disponibles en la librería.

- `void recvRadarBytes()` —— Esta función recibe la longitud del frame actual retornado por el radar. Los frames se almacenan en un arreglo según esa longitud.  
  **Parámetros de entrada:** Ninguno  
  **Valor de retorno:** Ninguno

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— Los datos retornados por el radar contienen mucha información física. El usuario puede ajustar la información de movimiento detectada basándose en los datos de signos y el algoritmo de decodificación provisto. El resultado se muestra por el puerto serial.  
  **Parámetros de entrada:**  
  - `byte inf[]` —— Frames de datos enviados por el radar.  
  - `float Move_min` —— Umbral para determinar si el usuario está en estado estacionario o desocupado.  
  - `float Move_max` —— Umbral para determinar si el usuario está en estado estacionario o en movimiento.

  **Valor de retorno:** Ninguno  
  Sobre la descripción de los parámetros de signo: Teóricamente, los valores calculados van de **0 a 100**.  
  Cuando el valor es **0**, significa que **nadie** es detectado en el entorno.  
  Valor **1** indica entorno ocupado y en estado **estacionario**.  
  Valores de **2 a 100** indican entorno ocupado y **activo**.

- `void Situation_judgment(byte inf[])` —— Esta función detecta si un cuerpo humano se acerca o se aleja del radar y determina el movimiento según el algoritmo. La información se muestra por puerto serial.  
  **Parámetros de entrada:**  
  - `byte inf[]` —— Frames de datos enviados por el radar.

  **Valor de retorno:** Ninguno

- `void Fall_inf(byte inf[])` —— Decodifica la información de detección de caídas enviada por el radar y muestra resultados por puerto serial.  
  **Parámetros de entrada:**  
  - `byte inf[]` —— Frames de datos enviados por el radar.

  **Valor de retorno:** Ninguno

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— Genera checksum CRC16.  
  **Parámetros de entrada:**  
  - `unsigned char *lpuc_Frame` —— Frame de datos para enviar al radar (sin incluir los 2 bytes de checksum final).  
  - `unsigned short int lus_Len` —— Longitud del frame a enviar.

  **Valor de retorno:** Dígito de verificación de 2 bytes tipo entero.

- `void SerialInit()` —— Configura la velocidad en baudios del puerto serial del radar a 9600. Para placa Seeeduino, configura puerto serial software RX: 2, TX: 3.  
  **Parámetros de entrada:** Ninguno  
  **Valor de retorno:** Ninguno

### Instalación

**Paso 1.** Instalar el software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Ejecutar la aplicación Arduino.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Seleccionar modelo de placa y agregarla al IDE Arduino.

- Para **Seeeduino V4.2**, consulta [este tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/).
- Para **Seeeduino XIAO**, consulta [este tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software).
- Para **XIAO RP2040**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup).
- Para **XIAO BLE**, consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup).

**Paso 4.** Instalar la librería Arduino.

Descarga el código base desde [GitHub](https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor).

Luego, en el IDE Arduino, ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo zip descargado. Si la instalación fue exitosa, verás el mensaje **Library added to your libraries**.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

### Materiales Requeridos

Antes de hacer los ejemplos, prepara lo siguiente.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Radar mmWave 24GHz**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)|**Cable cinta de 2mm a 2.54mm**|

**Paso 1.** Conecta el dispositivo a la computadora a través de la placa principal. El esquema de conexión es:

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor Radar</td>
      <td align="center" />
      <td align="center">Placa Principal</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>

**Paso 2.** En la barra de menú superior izquierda del IDE Arduino, selecciona **Herramientas**, elige tu placa y puerto serial correspondiente.

:::tip
En **MacOS**, el puerto serial suele comenzar con **/dev/cu.usbmodem xxx**, y en **Windows** con **COM**, seguido del nombre del dispositivo.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

En este ejemplo, mostraremos cómo funciona el radar con el popular producto XIAO BLE.

### Demo1: Obtener movimiento humano usando análisis de parámetros de características

Entre la gran cantidad de datos retornados por el radar, la información física es la mayor parte. A veces, confiar demasiado en los algoritmos del radar puede no ser suficiente en algunos escenarios. Por eso, podemos usar la información retornada para hacer ajustes adecuados según la aplicación real.

El código de este ejemplo es:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.png"/></div>

```cpp
//Physical_Parameters_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Bodysign_judgment(dataMsg, 1, 15); //Output of human movement using sign parameters
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

Una vez que se obtiene el arreglo `dataMsg`, podemos pasar los datos de este arreglo como primer argumento a la función `Bodysign_judgment()`, que se encarga de analizar los parámetros de signos vitales.

El segundo y tercer parámetro de la función `Bodysign_judgment()` son los valores críticos que se usan para juzgar los estados de: no ocupado, cuerpo humano en reposo y cuerpo humano en movimiento, respectivamente.

(1, 15) significa que cuando el valor calculado del signo corporal es menor a 1, se interpreta que **no hay nadie** en el entorno.  
Cuando el valor está entre **1 (inclusive) y menor a 15**, se considera que **hay alguien en estado estacionario**.  
Cuando el valor del signo corporal es **mayor o igual a 35**, se interpreta que **hay alguien en movimiento** en el entorno.

Carga el programa. Al abrir el monitor serial a una velocidad de 9600 baudios deberías ver un resultado similar al de la imagen siguiente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip  
Los valores que siguen al frame de datos de salida representan los **valores calculados de signos vitales**.  
:::

### Demo 2 Enviar datos al radar

El radar ofrece una gran cantidad de interfaces para obtener información y configurar la sensibilidad o el tipo de escena.  
En esta rutina se explica cómo usar el **manual del usuario** para enviar mensajes de datos al radar con el fin de ajustar sus parámetros o consultar información específica.

**Paso 1.** Obtener los frames de datos según la consulta deseada.

Descarga el [manual del usuario](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) desde la sección de Recursos.  
En el **Capítulo 8.2**, encuentra el contenido correspondiente a los frames que deseas consultar o configurar, y organízalos.

Por ejemplo, si quieres consultar el **ID del radar**, en el manual deberías encontrar el código de función deseado, así como las direcciones 1 y 2 necesarias.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**Paso 2.** Abre el ejemplo de código en el IDE de Arduino.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

El código en este ejemplo es el siguiente:

```c
//CRC_Checksum_Generation.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;
char buff[30];

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
  //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
  unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
  
  unsigned int length = sizeof(data)/sizeof(unsigned char);
  unsigned char datas[length + 2];
  for (int n = 0; n < length; n++)datas[n] = data[n];
  unsigned short int crc_data = radar.us_CalculateCrc16(data, length);
  sprintf(buff, "The CRC16 values is: %04x", crc_data);
  Serial.println(buff);
  datas[length] = (crc_data & 0xff00) >> 8;
  datas[length+1] = crc_data & 0xff;
  Serial.print("The datas send to the radar: ");
  for (int n = 0; n < length + 2; n++){
    char buffsend[1];
    sprintf(buffsend, "0x%02x ", datas[n]);
    Serial.print(buffsend);
  }
  Serial.println();
  delay(6000);
}
```

**Paso 3.** Modifica el contenido del frame de datos para generar el frame completo que se enviará al radar.

Lo que necesitas modificar es el arreglo `data[]` dentro del loop.

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

Debes cambiar el **segundo elemento**, así como del **cuarto hasta el último** del arreglo.  
- El primer byte del encabezado (`0x55`) es **fijo**, no necesita cambiarse.  
- El **segundo byte** representa la **longitud del frame** y debe ajustarse según la cantidad de datos que vas a enviar.  
- El **tercer byte** está fijado en `0x00`.  
- El **cuarto byte** es el **código de función**.  
- El **quinto byte** es la **dirección 1**, y así sucesivamente.

:::tip  
**Sobre el cálculo del frame de longitud:**  
Longitud = Código de Función + Dirección 1 + Dirección 2 + Datos + Checksum  
(Los encabezados **no** se cuentan)

Consulta el **Capítulo 8** del [manual del usuario](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) para más información sobre el formato y reglas de los frames.
:::

Carga el programa. Al abrir el monitor serial a 9600 baudios, deberías ver un resultado similar al de la imagen siguiente:

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

Los datos completos que deben enviarse al radar se mostrarán en el monitor serial.

### **Otras formas**

Si no deseas usar un microcontrolador para generar los frames completos, también puedes pegar el siguiente código en un editor compatible con programas en C. Sigue el mismo procedimiento anterior y rellena los valores del arreglo con el contenido de tus frames personalizados.

```c
#include <stdio.h>

const unsigned char cuc_CRCHi[256]= {
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40
};

const unsigned char  cuc_CRCLo[256]= {
  0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7,
  0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E,
  0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09, 0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9,
  0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC,
  0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
  0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32,
  0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D,
  0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A, 0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38,
  0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF,
  0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
  0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1,
  0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4,
  0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F, 0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB,
  0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA,
  0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
  0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0,
  0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97,
  0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C, 0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E,
  0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89,
  0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
  0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83,
  0x41, 0x81, 0x80, 0x40
};

static unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len){
  unsigned char luc_CRCHi = 0xFF;
  unsigned char luc_CRCLo = 0xFF;
  int li_Index=0;
  while(lus_Len--){
    li_Index = luc_CRCLo ^ *( lpuc_Frame++);
    luc_CRCLo = (unsigned char)( luc_CRCHi ^ cuc_CRCHi[li_Index]);
    luc_CRCHi = cuc_CRCLo[li_Index];
  }
  return (unsigned short int )(luc_CRCLo << 8 | luc_CRCHi);
}

int main() {
    //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
    unsigned char data[] = {0x55, 0x07, 0x00, 0x01, 0x01, 0x01};

    unsigned short int crc_data = 0x0000;
    unsigned int length = sizeof(data)/sizeof(unsigned char);
    unsigned char datas[length + 2];
    for (int n = 0; n < length; n++)datas[n] = data[n];
    printf("The data frame length is: %d\n", length);
    crc_data = us_CalculateCrc16(data, length);
    datas[length] = (crc_data & 0xff00) >> 8;
    datas[length+1] = crc_data & 0xff;
    printf("The last two CRC check digits are: %04x\n", crc_data);
    printf("The datas send to the radar: ");
    for (int n = 0; n < length + 2; n++){
        printf("0x%02x ", datas[n]);
    }
    printf("\n");
    return 0;
}
```

Después de ejecutar el editor, también es posible obtener como salida los **frames de datos completos** que deben enviarse al radar.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**Paso 4.** Enviar los frames de datos al radar

Conecta el radar directamente al puerto USB de la computadora usando un dispositivo [**UART a USB**](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products).  
El esquema de conexión se muestra en la siguiente tabla:

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/22.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor Radar</td>
      <td align="center" />
      <td align="center">Placa Principal</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

Utiliza un software como **Serial Debug Assistant** para seleccionar el puerto serial donde está conectado el radar.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution  
El radar de 24GHz requiere alimentación de **5V**, de lo contrario **puede no funcionar correctamente**.  
:::

Tras una conexión exitosa, el radar empezará a enviar datos de forma continua.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

Pega el frame de datos completo obtenido en el **paso 3** en el área de envío del software y haz clic en **Send**.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

Debes buscar un conjunto de datos recibidos en el que el **tercer elemento sea 0x03**. Ese conjunto corresponde a la información de respuesta a la consulta realizada.  
Si envías datos para ajustar parámetros del radar, también recibirás información similar como confirmación.

:::caution  
Si eliges el formato **ASCII** para enviar los datos, cada byte debe ir precedido de **0x**.  
Si eliges el formato **HEX**, entonces **no** es necesario anteponer **0x** a cada byte.  
:::

## Resolución de Problemas

**FAQ1: ¿Cómo aplicar el código en Seeeduino (o Arduino)?**

> Debido al diseño del hardware, las placas **XIAO** o **Wio Terminal** usan `Serial1`, mientras que **Seeeduino** o **Arduino** requieren usar puerto serial por software.  
> En el caso de Seeeduino, puedes usar el puerto serial por software con los pines **2 (RX)** y **3 (TX)**.
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: ¿Qué hago si el XIAO BLE y el radar recogen datos por mucho tiempo y no puedo volver a subir código?**

> En ese caso, puedes presionar suavemente el botón de reinicio en la parte superior del **XIAO BLE** para volver a subir el programa.

## Recursos

- **[PDF]** [Manual de Usuario - Detección de Presencia Humana](https://files.seeedstudio.com/wiki/mmWave-radar/Human_Presence_User_Manual.pdf)  
- **[ZIP]** [Esquemático respiratorio 24GHz](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)  
- **[PPTX]** [Serie de sensores mmWave de Seeed V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## Soporte Técnico y Discusión del Producto

Gracias por elegir nuestros productos. Estamos aquí para ayudarte a que tu experiencia sea lo más fluida posible.  
Ofrecemos diferentes canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
