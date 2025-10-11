---
description: Grove - Sensor PM2.5 Láser (HM3301)
title: Grove - Sensor PM2.5 Láser (HM3301)
keywords:
- Grove Grove_Sensors Air_Quality
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Laser_PM2.5_Sensor-HM3301
last_update:
  date: 1/20/2023
  author: jianjing huang
---

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/main.jpg)

El Grove - Sensor PM2.5 Láser (HM3301) es una nueva generación de sensor de detección de polvo láser, que se utiliza para la detección continua y en tiempo real de polvo en el aire.

A diferencia del sensor de detección de polvo por bombeo, el HM-3301 utiliza de manera innovadora aspas de ventilador para impulsar el aire, y el aire que fluye a través de la cámara de detección se utiliza como muestra de prueba para realizar pruebas en tiempo real y continuas sobre polvo de diferentes tamaños de partículas en el aire.

Este módulo es adecuado para detectores de polvo, purificadores de aire inteligentes, aires acondicionados inteligentes, ventiladores de ventilación inteligentes, pruebas de calidad del aire, medidores de neblina, monitoreo ambiental y productos y aplicaciones relacionadas

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/zQj8RRJcZsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Alta sensibilidad en partículas de polvo de 0.3 μm o mayores
- Detección en tiempo real y continua de la concentración de polvo en el aire
- Basado en tecnología de dispersión de luz láser, las lecturas son precisas, estables y consistentes
- Bajo ruido
- Consumo de energía ultra bajo

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Temperatura de operación|-10～60℃|
|Humedad de operación|10%～90%RH (sin condensación)|
|Tamaño de partícula|3 canales-- 1.0µm, 2.5µm, 10µm |
|Rango<br />(Valor estándar PM2.5)|1~500µg/ m<sup>3</sup> (Rango efectivo)<br />1000 µg/ m<sup>3</sup> (Rango máximo)|
|Resolución|Concentración: 1µg/ m<sup>3</sup> <br />Concentración de conteo: 1s/0.1L|
|Tiempo de estabilidad|30 segundos después del encendido|
|Interfaz|I2C|
|Dirección I2C|0x40|

## Aplicaciones típicas

- Purificador de aire / aire acondicionado
- Equipo de prueba de calidad del aire
- Análisis industrial de valores PM
- Detección y análisis de polvo y humo
- Detector en tiempo real de PM2.5, PM10, TSP
- Contador de partículas multicanal
- Equipo de pruebas ambientales

## Descripción general del hardware

### Distribución de pines

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/pin_out.jpg)

## Principio de funcionamiento

El sensor de polvo HM-3301 se basa en la teoría avanzada de dispersión de Mie. Cuando la luz pasa a través de partículas con cantidad igual o mayor que la longitud de onda de la luz, producirá dispersión de luz. La luz dispersa se concentra en un fotodiodo altamente sensible, que luego es amplificada y analizada por un circuito. Con un modelo matemático específico y algoritmo, se obtiene la concentración de recuento y concentración de masa de las partículas de polvo.

El sensor de polvo HM-3301 está compuesto por componentes principales como un ventilador, una fuente láser infrarroja, un espejo condensador, un tubo fotosensible, un circuito amplificador de señal y un circuito de clasificación de señal.

![Diagrama de estructura del módulo HM-3301](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/principle.jpg "Diagrama de estructura del módulo HM-3301")

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

| Seeeduino V4.2 | Base Shield | Grove - Sensor Láser PM2.5 (HM3301) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Sensor PM2.5 Láser (HM3301) al puerto **I^2^C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/connect.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - Sensor PM2.5 Láser (HM3301) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V      | Rojo               | VCC |
| SDA            | Blanco             | SDA |
| SCL            | Amarillo           | SCL |

#### Software

:::caution
Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Seeed_PM2_5_sensor_HM3301](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> PM2.5 sensor --> basic_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path1.jpg)

    2. Ábrelo en tu computadora haciendo clic en **basic_demo.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_PM2_5_sensor_HM3301-master\examples\basic_demo**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path2.jpg)

    3. O, simplemente puedes hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp

#include "Seeed_HM330X.h"

#ifdef  ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif


HM330X sensor;
u8 buf[30];


const char *str[]={"sensor num: ","PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                    "PM1.0 concentration(Atmospheric environment,unit:ug/m3): ",
                    "PM2.5 concentration(Atmospheric environment,unit:ug/m3): ",
                    "PM10 concentration(Atmospheric environment,unit:ug/m3): ",
                    };

err_t print_result(const char* str,u16 value)
{
    if(NULL==str)
        return ERROR_PARAM;
    SERIAL.print(str);
    SERIAL.println(value);
    return NO_ERROR;
}

/*parse buf with 29 u8-data*/
err_t parse_result(u8 *data)
{
    u16 value=0;
    err_t NO_ERROR;
    if(NULL==data)
        return ERROR_PARAM;
    for(int i=1;i<8;i++)
    {
         value = (u16)data[i*2]<<8|data[i*2+1];
         print_result(str[i-1],value);

    }
}

err_t parse_result_value(u8 *data)
{
    if(NULL==data)
        return ERROR_PARAM;
    for(int i=0;i<28;i++)
    {
        SERIAL.print(data[i],HEX);
        SERIAL.print("  ");
        if((0==(i)%5)||(0==i))
        {
            SERIAL.println(" ");
        }
    }
    u8 sum=0;
    for(int i=0;i<28;i++)
    {
        sum+=data[i];
    }
    if(sum!=data[28])
    {
        SERIAL.println("wrong checkSum!!!!");
    }
    SERIAL.println(" ");
    SERIAL.println(" ");
    return NO_ERROR;
}


/*30s*/
void setup()
{
    SERIAL.begin(115200);
    delay(100);
    SERIAL.println("Serial start");
    if(sensor.init())
    {
        SERIAL.println("HM330X init failed!!!");
        while(1);
    }
    
}


void loop()
{
    if(sensor.read_sensor_value(buf,29))
    {
        SERIAL.println("HM330X read result failed!!!");
    }
    parse_result_value(buf);
    parse_result(buf);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    delay(5000);
}

```

:::caution
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas `ctrl`+`shift`+`m` al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
        Si todo va bien, cuando abras el Monitor Serie puede mostrarse como se indica a continuación:
:::

```c
Serial start
0   
FF  0  0  0  2D   
0  3F  0  45  0   
22  0  32  0  3B   
0  0  0  0  0   
0  0  0  0  0   
0  0   
 
sensor num: 0
PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): 45
PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): 63
PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): 69
PM1.0 concentration(Atmospheric environment,unit:ug/m3): 34
PM2.5 concentration(Atmospheric environment,unit:ug/m3): 50
PM10 concentration(Atmospheric environment,unit:ug/m3): 59
```

:::note
El **valor estándar de concentración de masa de material particulado** se refiere al valor de concentración de masa obtenido por conversión de densidad de partículas metálicas industriales como partículas equivalentes, y es adecuado para su uso en talleres de producción industrial y similares. La **concentración de material particulado en el ambiente atmosférico** se convierte por la densidad de los principales contaminantes en el aire como partículas equivalentes, y es adecuada para ambientes atmosféricos interiores y exteriores ordinarios. Por eso puedes ver que hay dos conjuntos de datos arriba.
:::

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Laser PM2.5 Sensor (HM3301) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip)

- **[Zip]** [Biblioteca de Software Seeed_PM2_5_sensor_HM3301](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301/archive/master.zip)

- **[PDF]** [Hoja de Datos HM3301](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/HM-3300%263600_V2.1.pdf)

## Proyectos

**Visualización de Contaminación Atmosférica**：El problema de contaminación del aire atrae cada vez más atención. Esta vez intentamos monitorear PM2.5 con Wio LTE y el nuevo Sensor Láser PM2.5.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah, y el poderoso soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
