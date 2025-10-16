---
description: Grove - Sensor de Gas(O₂)
title: Grove - Sensor de Gas(O₂) 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Gas_Sensor-O2
last_update:
  date: 1/3/2023
  author: shuxu hu
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Sensor de Oxígeno(ME2-O2-Ф20) es un tipo de sensor para probar la concentración de oxígeno en el aire, que se basa en el principio de la celda electroquímica para el trabajo original. Puedes conocer claramente la concentración actual de oxígeno cuando produces valores de voltaje proporcionales a la concentración de oxígeno y te refieres al gráfico de características lineales de concentración de oxígeno. Es muy adecuado para detectar la concentración de oxígeno en la protección del medio ambiente. Grove - Sensor de Gas(O2) es un módulo de reacción orgánica, puede proporcionar una pequeña corriente mientras se coloca en el aire, no necesitamos proporcionarle una alimentación externa, y el voltaje de salida cambiará a medida que la corriente de tiempo cambie.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)

:::tip
    Hemos lanzado la [Guía de Selección de Sensores de Gas Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::
## Características

- Alta precisión
- Alta sensibilidad
- Amplio rango de linealidad
- Fuerte capacidad anti-interferencia
- Confiabilidad extraordinaria

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
## Especificaciones

|Elementos | Parámetro |
|-------|---------------|
|Rango de Medición | 0-25% |
| Vida de Detección | dos años |
|Sensibilidad | 0.05~0.15 mA(en aire) |
|Rango de Temperatura | -20 oC~50 oC |
|Tiempo de Precalentamiento | 20 minutos|
|Voltaje de entrada|3.3V / 5V|

## Hardware

**Conversor de Voltaje**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png" alt="pir" width={600} height="auto" /></p>

El XC6206332MR convierte una entrada de 3.3v/5v a 3.3v.

**Fuente de corriente ME2-O2**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png" alt="pir" width={600} height="auto" /></p>

El ME2-O2 es una fuente de corriente. El voltaje del punto etiquetado #3 es R7 * Corriente(ME2-O2).

**Amplificador**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png" alt="pir" width={600} height="auto" /></p>

La ganancia del amplificador es 121, el voltaje SIGA es 121 veces el voltaje del punto etiquetado #3.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png" alt="pir" width={600} height="auto" /></p>

Aquí está la correlación entre la corriente de salida del ME2-O2 y la concentración de O2. La corriente de concentración de O2 al 20% es alrededor de 120uA. Entonces el voltaje SIGA de Grove @ concentración 20% = R7 *Corriente(ME2-O2)* 121 = 100 *120uA* 121 = 1.452V.

:::warning
    El rango de corriente del ME2-O2 es 80uA~160uA debido a diferencias individuales. Por lo tanto, el voltaje de salida del sensor también será diferente. Por favor exponga el sensor al aire fresco y obtenga la lectura del voltaje de salida como referencia al inicio. Puede referirse a [este ejemplo](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip) para obtener la calibración al inicio y luego leer los valores del sensor.   
:::

## Plataformas Soportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Este capítulo está basado en Win10 y Arduino IDE 1.6.9
:::
Este es un módulo fácil de usar, lo que necesitas hacer es conectar el pin de señal (el pin AMARILLO del cable Grove) a la entrada ADC de tu controlador. Si no hay ADC interno en tu controlador, se recomienda [Grove - I2C ADC](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html).

Aquí te mostraremos cómo funciona este Grove - Sensor de Gas(O2) a través de una demostración simple. Primero que todo, necesitas preparar las siguientes cosas:

| Seeeduino V4 | Grove - Sensor de Oxígeno(ME2-O2-Ф20) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/gas_sensor_210.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### Conexión

Gracias al beneficio de los módulos de la serie Grove, no necesitas hacer soldaduras o usar una protoboard, lo que necesitas hacer es conectar los módulos al puerto correcto del Base Shield. Para esta demostración, tenemos solo un módulo Grove.

- Grove - Sensor de Oxígeno(ME2-O2-Ф20) es un módulo de entrada analógica, lo conectamos a **A0** en esta demostración

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/connection.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/connection.jpeg" alt="pir" width={600} height="auto" /></p>

### Sube el código a Arduino

Copia el código de abajo al IDE de Arduino.

```
// Grove - Gas Sensor(O2) test code
// Note:
// 1. It need about about 5-10 minutes to preheat the sensor
// 2. modify VRefer if needed

const float VRefer = 3.3;       // voltage of adc reference

const int pinAdc   = A0;

void setup() 
{
    // put your setup code here, to run once:
    Serial.begin(9600);
    Serial.println("Grove - Gas Sensor Test Code...");
}

void loop() 
{
    // put your main code here, to run repeatedly:
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, Concentration of O2 is ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }
    
    sum >>= 5;
    
    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout samples are with reference to 3.3V
    float MeasuredVout = readO2Vout();
    
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //when its output voltage is 2.0V,
    float Concentration = MeasuredVout * 0.21 / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}

```

Luego elige la placa correcta y el puerto COM, y después haz clic en el botón Upload, este proceso toma unos segundos.

### Obtener datos

Abre el monitor serie de tu Arduino IDE, y ahora obtendrás los datos.

:::warning
    Se necesitan aproximadamente 20~30 minutos para precalentar el sensor, o obtendrás un valor mayor.
:::
<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Hoja de Datos ME2-O2](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/ME2-O2-D20%200-25%25%20Manual%20%28ver1.2%29.pdf)
- [Esquema en Archivo Eagle](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip)
- [Repositorio Github de este Documento](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)

## Proyectos

**LoRa IoTea**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Una Caja de Plantas con Iluminación y Lluvia** Nunca has visto tal forma de regar tu planta.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

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

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah, y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8-en-1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
