---
description: Grove - Sensor de Alcohol
title: Grove - Sensor de Alcohol
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Alcohol_Sensor
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg" alt="pir" width={600} height="auto" /></p>


Grove - Sensor de Alcohol es un módulo completo de sensor de alcohol para Arduino o Seeeduino. Está construido con el sensor de alcohol semiconductor [MQ303A](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf). Tiene buena sensibilidad y respuesta rápida al alcohol. Es adecuado para hacer un Alcoholímetro. Este Grove implementa toda la circuitería necesaria para el MQ303A como acondicionamiento de energía y suministro de energía del calentador. Este sensor produce un voltaje inversamente proporcional a la concentración de alcohol en el aire.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)

<div class="admonition danger">
<p class="admonition-title">Nota</p>
El valor del sensor solo refleja la tendencia aproximada de la concentración de gas en un rango de error permisible, NO representa la concentración exacta de gas. La detección de ciertos componentes en el aire generalmente requiere un instrumento más preciso y costoso, lo cual no se puede hacer con un solo sensor de gas. Si tu proyecto está dirigido a obtener la concentración de gas a un nivel muy preciso, entonces no recomendamos este sensor de gas.
</div>

:::tip
    Hemos lanzado la [Guía de Selección de Sensores de Gas de Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::
Características
--------

-   Voltaje de Entrada: 5V
-   Corriente de Trabajo: 120mA
-   Concentración Detectable: 20-1000ppm
-   Conector Compatible con Grove
-   Altamente sensible al alcohol.
-   Respuesta rápida y se recupera rápidamente después de la exposición al alcohol.
-   Larga vida útil.
-   Factor de forma compacto.

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Soportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::


Uso
---

### Instalación de Hardware

Los productos Grove tienen un ecosistema y todos tienen el mismo conector que se puede conectar al Grove Base Shield. Conecta este módulo al puerto A0 del Base Shield, sin embargo, también puedes conectar el sensor de gas a Arduino sin Base Shield usando cables jumper.

| Arduino UNO | Sensor de Alcohol |
|-------------|-------------------|
| 5V          | VCC               |
| GND         | GND               |
| Analog A1   | SCL               |
| Analog A0   | DAT               |

Puedes obtener el voltaje presente a través del pin DAT del sensor. <font color="Red">Ten en cuenta que el mejor tiempo de precalentamiento del sensor es superior a 48 horas</font>. Para información detallada sobre el sensor de alcohol, consulta la hoja de datos.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg" alt="pir" width={600} height="auto" /></p>


### Descargar Código y Subir

Hay dos pasos que necesitas hacer antes de obtener la concentración de gas.

Primero, conecta el módulo con Grove Shield usando A0 como en la imagen de arriba. Y coloca el sensor en aire limpio y usa el programa de abajo.

```
#define heaterSelPin 15

void setup() {
    Serial.begin(9600);
    pinMode(heaterSelPin,OUTPUT);   // set the heaterSelPin as digital output.
    digitalWrite(heaterSelPin,LOW); // Start to heat the sensor
}

void loop() {
    float sensor_volt;
    float RS_air; //  Get the value of RS via in a clear air
    float sensorValue = 0;

/*--- Get a average data by testing 100 times ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
/*-----------------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = sensor_volt/(5.0-sensor_volt); // omit *R16
    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    Serial.print("RS_air = ");
    Serial.println(RS_air);
    delay(1000);
}
```

Luego, abre el monitor del IDE de Arduino, puedes ver que se imprimen algunos datos, anota el valor de RS_air y necesitas usarlo en el siguiente programa. Durante este paso, puedes tomarte un tiempo para probar el valor de RS_air.

```
#define heaterSelPin 15

void setup() {
    Serial.begin(9600);
    pinMode(heaterSelPin,OUTPUT);   // set the heaterSelPin as digital output.
    digitalWrite(heaterSelPin,LOW); // Start to heat the sensor
}

void loop() {

    float sensor_volt;
    float RS_gas; // Get value of RS in a GAS
    float ratio; // Get ratio RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = sensor_volt/(5.0-sensor_volt); // omit *R16

  /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/
    ratio = RS_gas/RS_air;  // ratio = RS/R0
  /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");
    delay(1000);
}
```

Ahora, podemos obtener la concentración de gas de la figura a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png" alt="pir" width={600} height="auto" /></p>


Según la figura, podemos ver que la concentración mínima que podemos probar es 20ppm y la máxima es 10000ppm, en otras palabras, podemos obtener una concentración de gas entre 0.002% y 1%. Sin embargo, no podemos proporcionar una fórmula porque la relación entre la proporción y la concentración es no lineal.

<div class="admonition note">
<p class="admonition-title">Notas</p>
<p> a. El valor varía entre 500 - 905. Por lo tanto, cualquier valor por encima de 650 indica vapor de alcohol en las proximidades.</p>
<p> b. Una vez expuesto al vapor de alcohol, el sensor toma algún tiempo para que el valor disminuya completamente.</p>
<p> c. Sin embargo, cualquier nueva exposición mostrará un aumento instantáneo en el valor del sensor.</p>
</div>


<div class="admonition danger">
<p class="admonition-title">Precaución</p>
<p> a. El sensor de alcohol es un dispositivo semiconductor muy sensible. Manéjelo con cuidado.</p>
<p> b. No exponga a vapor de silicio orgánico, álcali o gases corrosivos.</p>
<p> c. No use congelación o derrame agua.</p>
<p> d. Mantenga el voltaje de trabajo adecuado.</p>
</div>

# Grove-Alcohol Sensor
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove-Alcohol Sensor v1.2
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Recursos
---------

- [Archivo Eagle del Grove-Alcohol Sensor](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip)
- [Archivo Eagle del Grove-Alcohol Sensor v1.2](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip)
- [Esquemas en Formato PDF](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove%20-%20Alcohol%20Sensor%20v1.2.pdf)
- [Cómo Elegir un Sensor de Gas](#/How_to_Chose_A_Gas_Sensor)
- [MQ303A](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Alcohol_Sensor -->

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
Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

