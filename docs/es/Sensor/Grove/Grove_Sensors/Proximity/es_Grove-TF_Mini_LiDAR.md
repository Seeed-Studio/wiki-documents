---
title: Grove - TF Mini LiDAR
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-TF_Mini_LiDAR/
slug: /es/Grove-TF_Mini_LiDAR
last_update:
  date: 12/30/2022
  author: gunengyu
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR.JPG" alt="pir" width={600} height="auto" /></p>

Este producto está basado en el principio ToF (Tiempo de Vuelo) e integrado con diseños ópticos y eléctricos únicos, para lograr una detección de distancia estable, precisa, de alta sensibilidad y alta velocidad.

ToF es la abreviatura de la tecnología Time of Flight (Tiempo de Vuelo), y su principio de funcionamiento es el siguiente: se envía una luz infrarroja cercana modulada desde el sensor y se refleja en un objeto; la distancia al objeto a medir puede ser convertida por el sensor calculando la diferencia de tiempo o diferencia de fase entre el envío de luz y la reflexión de luz, para así producir la información de profundidad.

[![Obtener Uno Ahora](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)

:::warning
    Evite que el polvo o cualquier otra materia extraña entre en la lente; de lo contrario puede afectar la transmisión de luz.
:::

## Versión

| Versión del Producto         | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-TF Mini LiDAR V1.0 | Inicial | Nov 2017      |

## Especificación

---
| Nombre del Producto                         | TFmini                           |
|---------------------------------------------|----------------------------------|
| Rango de operación                          | 0.3m-12m                         |
| Rango máximo de operación al 10% de reflectividad | 5m                               |
| Consumo promedio de energía                 | 0.6W                            |
| Rango de voltaje aplicable                  | 4.5V-6V                          |
| Ángulo de aceptación                        | 2.3°                             |
| Relación mínima de resolución               | 1cm                              |
| Frecuencia                                  | 100Hz                            |
| Precisión                                   | 1%   (menos de 6m), 2% (6m-12m) |
| Unidad de detección de distancia            | cm                               |
| Longitud de onda                            | 850nm                            |
| Tamaño                                      | 42mm×15mm×16mm                   |
| Temperatura de operación                    | -20℃-60℃                       |
| Sensibilidad a la luz                       | 70,000lux                        |
| Peso                                        | 4.7g                             |
| Interfaz de comunicación                    | UART 115200                      |
| Corriente pico del LED                      | 800ma                            |
| Nivel de voltaje TTL del puerto serie       | 3.3V                              |
| Compatibilidad Electromagnética (EMC)       | EN 55032 Clase B                  |

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

---

### Jugar Con Arduino

#### Hardware

- **Paso 1**. Prepara los siguientes elementos:

|Seeeduino V4.2| Base Shield|Grove-TF Mini LiDAR|
|--------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR_S.JPG)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR.html)|

- **Paso 2**. Conecta Grove-TF-Mini-LiDAR al puerto **D2** del Base Shield y conecta Seeeduino a la PC a través de un cable USB.

- **Paso 3**. Descarga el [código de demostración](https://github.com/Seeed-Studio/Seeed_Arduino_TFlidar/archive/master.zip) y copia todo el archivo **Seeed_Arduino_TFlidar** y pégalo en tu archivo de biblioteca del Arduino IDE.

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/hardware_connection2.jpg)

#### Software

- **Paso 1**. El Grove-TF Mini LiDAR es una salida de datos hexadecimal. Cada dato de trama está codificado con 9 bytes, incluyendo 1 dato de distancia (Dist). Cada dato de distancia tiene información de intensidad de señal correspondiente (Strength). El final de la trama es el bit de paridad de datos.

| Byte  | Interpretación de codificación de datos     |
|-------|---------------------------------------------|
| Byte1 | 0x59, encabezado de trama, todas las tramas son iguales |
| Byte2 | 0x59, encabezado de trama, todas las tramas son iguales |
| Byte3 | Dist_L valor de distancia es un 8-bit bajo. |
| Byte4 | Dist_H valor de distancia es un 8-bit alto. |
| Byte5 | Strength_L es un 8-bit bajo.               |
| Byte6 | Strength_H es un 8-bit alto.               |
| Byte7 | Tiempo de integración.                      |
| Byte8 | Bytes reservados.                           |
| Byte9 | Paridad de suma de verificación.            |


- **Paso 2**. Copia el código en el Arduino IDE y súbelo.

```cpp
#include "TFLidar.h"

#define USETFMINI
// #define USETFLUNA

#define SERIAL Serial

#if defined(SEEED_XIAO_M0)
    #define uart  Serial1
#elif defined(SEEED_WIO_TERMINAL)
    #define uart  Serial1
#else
    SoftwareSerial uart(2, 3);
#endif

#ifdef USETFLUNA
TFLuna SeeedTFLuna;
TFLidar SeeedTFLidar(&SeeedTFLuna);
#endif

#ifdef USETFMINI
TFMini SeeedTFMini;
TFLidar SeeedTFLidar(&SeeedTFMini);
#endif 


void setup() {
  // put your setup code here, to run once:
  SERIAL.begin(9600);
  while(!Serial);
  SeeedTFLidar.begin(&uart,115200);
}

void loop() {
  while(!SeeedTFLidar.get_frame_data()){
    delay(1); 
  }
  // put your main code here, to run repeatedly:
  SERIAL.print("dist = ");
  SERIAL.print(SeeedTFLidar.get_distance()); //output measure distance value of LiDAR
  SERIAL.print('\t');
  SERIAL.print("strength = ");
  SERIAL.print(SeeedTFLidar.get_strength()); //output signal strength value
#ifdef USETFLUNA
  SERIAL.print("\t Chip Temprature = ");
  SERIAL.print(SeeedTFLidar.get_chip_temperature());
  SERIAL.print(" celcius degree"); //output chip temperature of Lidar
#endif
  SERIAL.println(" ");
  // delay(1000);
}
```

- **Paso 3**. Veremos la visualización de la distancia en la terminal. La **curva azul** es la distancia y la **roja** es la Intensidad.

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/curve.png)

:::note
      Puedes eliminar la **Línea 41** a la **Línea 43** del código de demostración si solo se requiere la **Distancia**:
:::

```cpp
SERIAL.print("strength = ");
SERIAL.print(SeeedTFLidar.get_strength()); //output signal strength value
```

### Jugar con Wio Terminal

#### Hardware

| Wio Terminal |  Grove-TF-Mini-LiDAR | Puente |
|--------------|-----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR_S.JPG)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Jumper.png)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)|

#### Conexión de Hardware

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/hardware_connection.jpg)

#### Pinout

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/pinout_wio.png" alt="Grove-TF_Mini_LiDAR'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

:::tip
     Por favor consulta las instrucciones de pinout anteriores antes de comenzar a conectar Wio Terminal con Jumpers.
:::

**Paso 1** Conecta Grove-TF-Mini-LiDAR a Wio Terminal mediante Jumpers y también conecta Wio Terminal a la PC a través de un cable USB.

**Paso 2** Descarga el [código de demostración](https://github.com/Seeed-Studio/Seeed_Arduino_Linechart/archive/master.zip) y copia todo el archivo **Seeed_Arduino_Linechart** y pégalo en tu archivo de biblioteca del Arduino IDE.

**Paso 3** Copia el código de demostración en tu Arduino IDE.

#### Software

```cpp
#include"seeed_line_chart.h" //include the library
#include "TFLidar.h"
#define LINE_DIS 0X00
#define STRING_DIS 0X01
TFMini SeeedTFMini;
TFLidar SeeedTFLidar(&SeeedTFMini);
#define uart  Serial1

TFT_eSPI tft;
 
#define max_size 10 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 
 
void setup() {
    Serial.begin(115200);
    pinMode(WIO_KEY_C, INPUT_PULLUP);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    SeeedTFLidar.begin(&uart,115200);
}
uint8_t mode = LINE_DIS;
void loop() {
    
    if (digitalRead(WIO_KEY_C) == LOW) {
        mode ++;
        if(mode > STRING_DIS ) mode = LINE_DIS;
        while(!digitalRead(WIO_KEY_C));
    }
    display(get_Lidar_data(),mode);
    delay(50);
}

uint16_t get_Lidar_data()
{
    while(!SeeedTFLidar.get_frame_data()){
        delay(1); 
    }
    return SeeedTFLidar.get_distance();
}

void display(uint16_t lidar_data,uint8_t mode){

    spr.fillSprite(TFT_WHITE);
    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Lidar Terminal")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .color(green)
                .thickness(3);
    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font
    if (LINE_DIS == mode){
        if (data.size() == max_size) {
            data.pop();//this is used to remove the first read variable
        }
        data.push(lidar_data); //read variables and store in data
    //Settings for the line graph
        auto content = line_chart(10, header.height()); //(x,y) where the line graph begins
            content
                    .height(tft.height() - header.height() * 1.5) //actual height of the line chart
                    .width(tft.width() - content.x() * 2) //actual width of the line chart
                    .based_on(0.0) //Starting point of y-axis, must be a float
                    .show_circle(false) //drawing a cirle at each point, default is on.
                    .value(data) //passing through the data to line graph
                    .color(TFT_RED) //Setting the color for the line
                    .draw();
    }
    else if (STRING_DIS == mode){
        for(int8_t line_index = 0;line_index < 5 ; line_index++)
        {
            spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
        }        
        auto header =  text(0, 0)
                    .thickness(1);
        spr.setFreeFont(&FreeSansBoldOblique24pt7b); 
        spr.setTextColor(TFT_BLUE);
        spr.drawFloat(lidar_data / 100.00,2,80,110);
        spr.drawString(" M",80 + 90,110,1);

    }
    spr.pushSprite(0, 0);

}
```

:::success
     Una imagen se mostrará en la pantalla del terminal Wio como se muestra a continuación si todo va bien.
:::

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Outcome_wio.jpg)

## Recursos

---

- **[Hoja de datos]** [Grove-TF-Mini-LiDAR
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/SJ-PM-TF-Luna-A03-Product-Manual.pdf)
- **[Hoja de datos]** [Grove-TF-Luna-LiDAR
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/DE-LiDAR%20TFmini%20Datasheet-V1.7-EN.pdf)
- **[ZIP]** [Seeed_Arduino_TFlidar](https://github.com/Seeed-Studio/Seeed_Arduino_TFlidar/archive/master.zip)
- **[ZIP]** [Seeed_Arduino_Linechart](https://github.com/Seeed-Studio/Seeed_Arduino_Linechart/archive/master.zip)

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
