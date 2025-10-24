---
description: Grove - Amplificador de Termopar I2C (MCP9600)
title: Grove - Amplificador de Termopar I2C (MCP9600)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-I2C_Thermocouple_Amplifier-MCP9600
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Main.jpg" /></div>

El Grove - Amplificador de Termopar I2C (MCP9600) es un convertidor de termopar a digital con junta fría integrada y protocolo de comunicación I2C. Este módulo está diseñado para ser usado en conjunto con un termopar tipo k. Los termopares tienen un rango de medición mucho mayor que los termistores. Por ejemplo, este [termopar tipo k](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) en nuestro sitio web tiene un rango de medición de -50℃ a +600℃.

También proporcionamos la función de alerta para este módulo, puedes usar el pin de alerta programable para proporcionar una señal de interrupción al controlador.

Nuevamente, este módulo no puede funcionar solo, debe trabajar con un termopar tipo k, si no tienes uno, puedes considerar el [Sensor de Temperatura Termopar Tipo K-1M](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) en nuestro bazar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-%28MCP9600%29-p-3199.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Amplificador de Termopar I2C (MCP9600) | Inicial                                                                                               | Ago 2018      |

## Características

- Compensación de Unión Fría Integrada
- Tipos Soportados (designados por NIST ITS-90): Tipo K, J, T, N, S, E, B y R
- Cuatro Salidas de Alerta de Temperatura Programables:
  - Monitorear temperaturas de Unión Caliente o Fría
  - Detectar temperaturas ascendentes o descendentes
  - Hasta 255°C de Histéresis Programable
- Filtro Digital Programable para Temperatura
- Bajo Consumo

:::note
El Grove - Amplificador de Termopar I2C (MCP9600) sí soporta los tipos K, J, T, N, S, E, B y R a nivel de hardware, sin embargo, actualmente, nuestra biblioteca no soporta ningún otro tipo de termopar excepto el tipo K.
:::

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V/5V|
|Temperatura Ambiente|-40℃ ~ +125℃|
|Temperatura de Almacenamiento|-65℃ ~ +150℃|
|Temperatura Máxima de Unión|+150℃|
|Precisión de Unión Caliente|±1.5°C (Máx.)|
|Resolución de Medición|Uniones Caliente y Fría: 0.0625°C (típica)|
|Interfaz|I2C|
|Dirección I2C|0x60(predeterminada) / 0x67(opcional)|
|Tamaño|L: 40mm A: 20mm H: 18mm|
|Peso|4.8g|
|Tamaño del Paquete|L: 130mm A: 85mm H: 20mm|
|Peso Bruto|11g|

## Aplicaciones

- Gestión Térmica Petroquímica
- Equipos de Medición Portátiles
- Gestión Térmica de Equipos Industriales
- Hornos
- Monitor Térmico de Motores Industriales
- Bastidores de Detección de Temperatura

## Descripción General del Hardware

### Mapa de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map_back.jpg" /></div>

### Esquemático

**Alimentación**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_1.jpg" /></div>

El rango de voltaje de operación del MCP9600 es de 2.7V ~ 5.5V, utilizamos un chip de conversión de energía *XC6206P332MR-G* para proporcionar un 3.3V estable para el MCP9600.

**Conector de Entrada**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic.jpg" /></div>

Debido a los pequeños niveles de señal involucrados, tomamos muchas medidas para filtrar el ruido.

- **1--L1,L2**  Utilizamos termopares de hasta 1 metro de longitud. Cables tan largos pueden considerarse como antenas, que recibirán interferencia de campo eléctrico espacial y generarán ruido de alta frecuencia. Por lo tanto, utilizamos dos inductancias para filtrar el ruido de alta frecuencia.

- **2--C1**  Es fuertemente recomendado por el fabricante del chip agregar un capacitor diferencial cerámico de montaje superficial de 100nF, colocado a través de los pines T+ y T-, para filtrar el ruido en las líneas del termopar.

- **3--D1** Utilizamos el SUPRESOR DE VOLTAJE BIDIRECCIONAL DUAL SZNUP2105LT3G para proteger este módulo de ESD (descarga electrostática).

**Circuito elevador de nivel bidireccional**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_2.jpg" /></div>

Este es un circuito elevador de nivel bidireccional típico para conectar dos secciones de voltaje diferentes de un bus I2C. El bus I<sup>2</sup>C de este sensor utiliza 3.3V, si el bus I<sup>2</sup>C del Arduino utiliza 5V, este circuito será necesario. En el esquemático anterior, **Q1** y **Q5** son MOSFET de Canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - I2C Thermocouple Amplifier |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - I2C Thermocouple Amplifier (MCP9600) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/connect.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Cable Grove |Grove - I2C Thermocouple Amplifier       |
|---------------|-------------------------|--------|
| GND            |     Negro               |GND |
| 5V / 3.3V          |   Rojo                    | VCC |
| SDA           | Blanco                   |  SDA  |
| SCL           | Amarillo                  |  SCL  |

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Seeed_MCP9600](https://github.com/Seeed-Studio/Seeed_MCP9600) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove Temperature sensor MCP9600 --> MCP9600_4channel_INT_demo**.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path.jpg" /></div>

    2. Ábrelo en tu computadora haciendo clic en **MCP9600_4channel_INT_demo.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_MCP9600-master\examples\MCP9600_4channel_INT_demo**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path_1.jpg" /></div>

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "Seeed_MCP9600.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

MCP9600 sensor;

/**@brief interruption cfg.
 * 
 * 
 * */
err_t sensor_INT_config()
{
    err_t ret=NO_ERROR;
    CHECK_RESULT(ret,sensor.set_filt_coefficients(FILT_MID));

    for(int i=0;i<4;i++)
    {
        /*Conver temp num to 16bit data*/
        CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));
        /*Set hysteresis.for example,set hysteresis to 2℃,when the INT limitation is 30℃,interruption will be generated when 
        the temp ecceed limitation,and the interruption flag will stay unless the temp below 30-2(limitation-hysteresis) 28℃. */
        CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); 

         /*Set when interruption generated the pin's status*/
        CHECK_RESULT(ret,sensor.set_alert_bit(i,ACTIVE_LOW));

        CHECK_RESULT(ret,sensor.clear_int_flag(i));

        /*default is comparator mode*/
        CHECK_RESULT(ret,sensor.set_alert_mode_bit(i,COMPARE_MODE));

        /*Set alert pin ENABLE.*/
        CHECK_RESULT(ret,sensor.set_alert_enable(i,ENABLE));
       
        

    }    

    /*device cfg*/
    CHECK_RESULT(ret,sensor.set_cold_junc_resolution(COLD_JUNC_RESOLUTION_0_25));
    CHECK_RESULT(ret,sensor.set_ADC_meas_resolution(ADC_14BIT_RESOLUTION));
    CHECK_RESULT(ret,sensor.set_burst_mode_samp(BURST_32_SAMPLE));
    CHECK_RESULT(ret,sensor.set_sensor_mode(NORMAL_OPERATION));

    return NO_ERROR;
}


err_t get_temperature(float *value)
{
    err_t ret=NO_ERROR;
    float hot_junc=0;
    float junc_delta=0;
    float cold_junc=0;
    bool stat=true;
    
    CHECK_RESULT(ret,sensor.check_data_update(&stat));
    if(stat)
    {
        CHECK_RESULT(ret,sensor.read_hot_junc(&hot_junc));
        CHECK_RESULT(ret,sensor.read_junc_temp_delta(&junc_delta));
        
        CHECK_RESULT(ret,sensor.read_cold_junc(&cold_junc));
        
        *value=hot_junc;
    }
    else
    {
        SERIAL.println("data not ready!!");
    }

    return NO_ERROR;
}


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    if(sensor.init(THER_TYPE_K))
    {
        SERIAL.println("sensor init failed!!");
    }
    sensor_INT_config();
}


void loop()
{
    float temp=0;
    u8 byte=0;
    u8 stat=0;
 

    get_temperature(&temp);
    SERIAL.print("temperature ==============================>>");
    SERIAL.println(temp);

    sensor.read_INT_stat(&stat);

    SERIAL.println(" ");
    SERIAL.println(" ");

    delay(1000);
}
```

:::note
        Hay 2 demos en la biblioteca:  
**MCP9600_basic_demo.ino**
        >Este ejemplo es un uso de muestra del sensor de temperatura, necesitas hacer polling para obtener datos.  

**MCP9600_4channel_INT_demo.ino**  
        >hay cuatro pads de alerta en el módulo del sensor que se conectan al pin de alerta. Puedes establecer límites de temperatura llamando a la API que proporcionamos. El pin de alerta emite bajo cuando el valor de temperatura supera el límite. Puedes conectar el pin de alerta a un pin de interrupción del host, para mejorar la eficiencia de la operación del programa.
:::

- **Paso 4.** Sube el demo. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
Si todo va bien, cuando abras el Monitor Serie, verás el valor de temperatura y la información de alerta.
:::

```cpp
serial start!!
version =4011

temperature ==============================>>25.81
 
 
temperature ==============================>>27.62
 
 
temperature ==============================>>29.37
channel 0generate interruption!!!
channel 1generate interruption!!!
 
 
temperature ==============================>>30.81
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!
 
 
temperature ==============================>>31.56
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!
channel 3generate interruption!!!


temperature ==============================>>28.56
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!


temperature ==============================>>27.33
channel 0generate interruption!!!
channel 1generate interruption!!!


temperature ==============================>>26.71
channel 0generate interruption!!!
```

#### Función de Alerta

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Function_ep.jpg" /></div>

Como puedes ver, hay una histéresis cuando la temperatura sube y la temperatura baja desencadena una interrupción. Por ejemplo, cuando la temperatura sube, cuando alcanza 28℃, el pin de alerta 0 se activará, y cuando la temperatura baja, el punto límite se convierte en 26℃. Solo cuando la temperatura se vuelve menor que 26℃, el pin de alerta 0 se liberará.

```
hysteresis= 28℃-26℃ = 2℃
```

El pin de alerta 1, el pin de alerta 2 y el pin de alerta 3 siguen el mismo principio. Puedes cambiar el valor de histéresis y el límite modificando la línea 23 y la línea 26.

```cpp
CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));

/*Set hysteresis.for example,set hysteresis to 2℃,when the INT limitation is 30℃,interruption will be generated when 
the temp ecceed limitation,and the interruption flag will stay unless the temp below 30-2(limitation-hysteresis) 28℃. */

CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); 
```

Usa el parámetro **i** para elegir el número de pin de alerta, y el parámetro **28** es el valor límite, en cuanto a la histéresis, usamos la función **sensor.set_alert_hys(i,2)**.
El parámetro **2** es el valor de histéresis.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - I2C Thermocouple Amplifier (MCP9600) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip)

- **[Zip]** [Librería Seeed MCP9600](https://github.com/Seeed-Studio/Seeed_MCP9600/archive/master.zip)

- **[PDF]** [Hoja de Datos del MCP9600](https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/MCP9600.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah, y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
