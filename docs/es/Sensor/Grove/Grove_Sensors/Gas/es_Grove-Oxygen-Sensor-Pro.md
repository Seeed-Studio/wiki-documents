---
description: Grove - Sensor de Oxígeno Pro(GGC2330-O2)
title: Grove - Sensor de Oxígeno Pro(GGC2330-O2)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Oxygen-Sensor-Pro
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png" alt="pir" width={600} height="auto" /></p>

Grove - Sensor de Oxígeno Pro(GGC2330-O2) es un tipo de sensor para probar la concentración de oxígeno en el aire, que se basa en el principio de la celda electroquímica para el trabajo original. Cuando comienza a funcionar, producirá una corriente proporcional a la concentración de oxígeno, luego puedes determinar la concentración de oxígeno midiendo el tamaño de la corriente.

Grove - Sensor de Oxígeno Pro(GGC2330-O2) es una versión mejorada del Grove - Sensor de Oxígeno(GG2020-O2). Comparado con el Grove - Sensor de Oxígeno(GG2020-O2), tiene un sensor de temperatura incorporado para hacer compensación de temperatura, que puede corregir el error de medición causado por la diferencia de temperatura y hacer la medición más precisa. Además de eso, está equipado con un microprocesador de alto rendimiento, que le permite tener capacidades de salida digital y salida de voltaje analógico al mismo tiempo, haciendo que el sensor sea más fácil de usar y calibrar y acortando el período de desarrollo.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)

:::tip
    Hemos lanzado la [Guía de Selección de Sensores de Gas Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::

## Características

- Pre-calibración(Con MCU incorporado y sensor de temperatura)
- Alta precisión y resolución
- Larga vida útil, bajo consumo de energía
- Fuerte capacidad anti-interferencia
- Buena estabilidad
- Salida de señal UART

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

|Elementos  | Parámetro |
|-------|---------------|
|Gas Objetivo | O2 |
|Resolución| 0.1%VOL |
|Rango de Medición  | 0-25%VOL |
|Voltaje de Operación  | DC 5±0.1V DC |
|Corriente de Operación | ＜ 10 mA |
|Salida| Salida UART(Nivel eléctrico TTL, 3V)Voltaje analógico(consulta la tabla 2 para la señal de amplificación original del sensor) |
|Condiciones de Operación| -20～25℃/15～90%RH(sin condensación) |
|Condiciones de Almacenamiento|  -20～50℃/15～90%RH(sin condensación) |
|Tamaño | ø23.5mm*24.5mm |
|Expectativa de Vida    | 2 años(en aire)|

:::note
    El tiempo de envejecimiento del encendido no es menor a 5min; 
    Evite el contacto prolongado con solventes orgánicos volátiles; 
    El entorno de uso o almacenamiento no puede ser un entorno ácido-base.
:::

## Aplicaciones

* Detector de gas portátil
- Alarma y detector de gas fijo
  
## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------| -->
<!-- | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Este capítulo está basado en Win10 y Arduino IDE 1.7.9
:::
Este nuevo método de uso del Grove - Oxygen Sensor Pro(GGC2330-O2) no se usa de la misma manera que el Grove - Oxygen Sensor(GG2020-O2) [GG2020-O2](https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-O2-MIX8410/).

Aquí te mostraremos cómo funciona este Grove - Oxygen Sensor Pro(GGC2330-O2) a través de una demostración simple. Primero que nada, necesitas preparar las siguientes cosas:

| Seeeduino Cortex-M0+ | Grove - Oxygen Sensor Pro(GGC2330-O2) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki210x158.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/Grove_Oxygen_Sensor_Pro_Preview-07-210x157.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={500} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### Conexión

Gracias al beneficio de los módulos de la serie Grove, no necesitas hacer soldaduras o usar una protoboard, lo que necesitas hacer es conectar los módulos al puerto correcto del Base Shield. Para esta demostración, tenemos solo un módulo Grove.

- Grove - Oxygen Sensor Pro(GGC2330-O2) es un módulo de entrada analógica, lo conectamos a **UART** en esta demostración.

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg" alt="pir" width={600} height="auto" /></p>

### Subir el código a Arduino

Copia el código de abajo al IDE de Arduino.

```
void setup() {
  Serial.begin(9600);
  Serial2.begin(9600);
}
void loop() {
  if (Serial2.available()){
    uint8_t begin_code = Serial2.read();
    delay(10);
    uint8_t state_code = Serial2.read();
    delay(10);
    uint8_t high_code = Serial2.read();
    delay(10);
    uint8_t low_code = Serial2.read();
    delay(10);
    uint8_t check_code = Serial2.read();
    delay(10);
    uint8_t checkk_code = Serial2.read();
    delay(10);
    uint8_t checkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkkk_code = Serial2.read();
    delay(10);

    if(begin_code == 255 && state_code == 134){
 
      float O2_val = ((high_code * 256) + low_code) * 0.1 ;
      Serial.print("O2: ");
      Serial.print(O2_val);
      Serial.println(" %");
      }
    }
    while(Serial2.read()>=0);    //clear buffer
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

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Grove - Hoja de Datos del Sensor de Oxígeno Pro](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GGC2330-O2-1.0.pdf)
- [Esquemático en Archivo Eagle](http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip)
- [Repositorio Github de este Documento](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
- [PDF SCH](#files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GroveOxygenSensorProv1.0sch.pdf)

## Proyectos

**LoRa IoTea**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Una Caja de Plantas con Iluminación y Lluvia** Nunca has visto tal manera de regar tu planta.

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
