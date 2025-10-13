---
description: Grove - Sensor de Polvo
title: Grove - Sensor de Polvo
keywords:
- Grove Grove_Sensors Air_Quality
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Dust_Sensor
last_update:
  date: 1/20/2023
  author: jianjing huang
---


![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust1.JPG)

Este Sensor de Polvo proporciona una buena indicación de la calidad del aire en un entorno midiendo la concentración de polvo. El nivel de Material Particulado (nivel PM) en el aire se mide contando el tiempo de Ocupación de Pulso Bajo (tiempo LPO) en una unidad de tiempo determinada. El tiempo LPO es proporcional a la concentración de PM. Este sensor puede proporcionar datos confiables para sistemas purificadores de aire; es sensible a PM de diámetro 1μm.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/4df5kaaKa6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::caution

- Este sensor utiliza el método de conteo para medir la concentración de polvo, no el método de pesaje, y la unidad es pcs/L o pcs/0.01cf.
- Por favor preste atención a las advertencias listadas aquí:
  - Por favor manténgalo en posición vertical.
  - Se requiere un tiempo de precalentamiento de 3 min al usarlo por primera vez.
  - La operación arbitraria puede causar daños inesperados.
  - Los siguientes widgets (marcados con rectángulo rojo) se usan solo para la configuración de fábrica. Por favor **NO** cambie la configuración predeterminada.

:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## Versión

| Versión del Producto         | Cambios                                   | Fecha de Lanzamiento |
|------------------------------|-------------------------------------------|----------------------|
|Grove-Sensor de Polvo V1.0   | Inicial                                   | Nov 2012             |

## Características

- Detección estable y sensible no solo de humo de cigarrillo sino también de polvo doméstico que son desencadenantes de asma en interiores.
- El aire es auto-aspirado con el mecanismo de generación de corriente de aire con un calentador incorporado.
- Fácil mantenimiento. La alta sensibilidad dura a largo plazo.
- Salida dual para el tamaño de partícula superior a 1 micrón y 2.5 micrones (aprox).
- Más compacto y ligero, y fácil instalación.

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

|Elemento| Norma| Unidad |
|----|-----|-------|
|VCC | 4.75~5.75| V    |
|Suministro de Corriente en Espera| 90| mA|
|Rango detectable de concentración| 0~28,000 / 0 ~ 8000 | pcs/litro / pcs/0.01cf|
|Rango de Temperatura de Operación| 0~45| °C|
|Método de Salida| Lógica Negativa, Salida digital, Alto: superior a 4.0V(Rev.2), Bajo: inferior a 0.7V|-|
|Detección del diámetro de partícula| >1 |μm|
|Dimensiones| 59(W) × 45(H) × 22(D) |mm|
|Rango de Humedad| 95% rh o menos|-|

:::note
    En la última versión, la salida de Alto Voltaje se cambió de 4.0V a 4.5V.
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Ideas de Aplicación

- Purificador de Aire
- Monitor de Calidad del Aire
- Aire Acondicionado
- Ventilador

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-Sensor de Polvo |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **Paso 2.** Conecta el Sensor de Polvo Grove al puerto **D8** del Shield Base Grove.
- **Paso 3.** Conecta el Shield Base Grove al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/seeeduino_dust.jpg)

:::note
Si no tenemos el Shield Base Grove, también podemos conectar directamente el Sensor de Polvo Grove al Seeeduino como se muestra a continuación.
:::

| Seeeduino |  Sensor de Sonoridad Grove |
|-----------|-----------------|
| 5V        | Rojo             |
| GND       | Negro           |
| NC        | Blanco           |
| D8        | Amarillo          |

**Software**

- **Paso 1.** Por favor copia el código de abajo al IDE de Arduino y súbelo al arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```
int pin = 8;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 30000;//sampe 30s ;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

void setup() 
{
    Serial.begin(9600);
    pinMode(pin,INPUT);
    starttime = millis();//get the current time;
}

void loop() 
{
    duration = pulseIn(pin, LOW);
    lowpulseoccupancy = lowpulseoccupancy+duration;

    if ((millis()-starttime) > sampletime_ms)//if the sampel time == 30s
    {
        ratio = lowpulseoccupancy/(sampletime_ms*10.0);  // Integer percentage 0=>100
        concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; // using spec sheet curve
        Serial.print(lowpulseoccupancy);
        Serial.print(",");
        Serial.print(ratio);
        Serial.print(",");
        Serial.println(concentration);
        lowpulseoccupancy = 0;
        starttime = millis();
    }
}

```

- **Paso 2.** En este programa, el Seeeduino muestrea la duración total de "lógica baja" en 30s, y esta duración ilustra la densidad de polvo del ambiente. Abre el Monitor Serie, podemos obtener el valor de calidad del aire detectado por el sensor desde el puerto serie de la PC.

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Serial.png)

**Terminología：**

- **"Lowpulseoccupancy"** representa el Tiempo de Ocupación de Pulso Bajo (Tiempo LPO) detectado en los 30s dados. Su unidad es microsegundos.

- **"Ratio"** refleja en qué nivel el Tiempo LPO ocupa todo el tiempo de muestra.

- **"Concentration"** es una cifra que tiene un significado físico. Se calcula a partir del gráfico característico de abajo usando el tiempo LPO.
![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Characteristics.jpg)

- Aquí hay un gráfico de la concentración de polvo medida en la oficina :

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Dust_sensor_4.jpg)

Podemos ver que la concentración de polvo es muy baja en la noche, pero es más alta en la tarde. Se puede establecer un umbral cuando la concentración esté por encima de un valor. Además, si quieres hacer el sensor más sensible puedes añadir un ventilador en el sensor, y añadir una resistencia de 10kΩ entre el Pin5 y Tierra. Para más información por favor visita el [blog de A.J](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/).

### Jugar Con Raspberry Pi

**Hardware**

- **Paso 1.** Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Grove-Dust Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Dust Sensor al puerto **D2** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/rpi_dust.jpg)

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona con Git el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para monitorear el polvo.

```python
cd ~/GrovePi/Software/Python
python grove_dust_sensor.py
```

Aquí está el código de grove_dust_sensor.py.

```python
import time
import grovepi
import atexit

atexit.register(grovepi.dust_sensor_dis)

print("Reading from the dust sensor")
grovepi.dust_sensor_en()
while True:
    try:
  [new_val,lowpulseoccupancy] = grovepi.dustSensorRead()
  if new_val:
   print(lowpulseoccupancy)
  time.sleep(5) 

    except IOError:
        print ("Error")

```

- **Paso 4.** Veremos el estado del polvo como se muestra a continuación.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_dust_sensor.py 
Reading from the dust sensor
14029
2621
1725
1978
2533
1619
```

## Proyectos Relacionados

Si quieres hacer algunos proyectos increíbles con Grove - Sensor de Polvo, aquí tienes un proyecto de referencia.

**Caja de Calidad del Aire**

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Overview0.png)

Esta sección es una demostración de IoT hecha con Seeeduino y [Grove](https://www.seeedstudio.com/wiki/Grove_System).

Hoy en día se presta más atención a la calidad del aire ambiental porque las partículas diminutas en el aire circundante pueden poner en grave peligro la salud de las personas. Siempre obtenemos la información del medio ambiente de nuestro departamento gubernamental. Pero es el valor promedio de toda la ciudad/sección. No puede reflejar con precisión el ambiente que te rodea.

[![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Air-Quality-Test-Box/?ALLSTEPS)

## Preguntas Frecuentes

**P1: ¿Cómo se puede usar Grove - Sensor de Polvo (con lógica de 5V) con Seeeduino Stalker (con lógica de 3.3V)?**

R1: La señal de salida del Sensor de Polvo necesita ser reducida a lógica de 3.3V para funcionar con Seeeduino Stalker (o cualquier placa similar). La salida del Sensor de Polvo es 0.7V para Lógica Baja y mayor que 4.0V para Lógica Alta. Podrías usar un divisor de voltaje para escalar la salida para que sea compatible con lógica de 3.3V o usar un traductor de nivel lógico TTL.

## Recursos

- **[Hoja de Datos]** [Hoja de datos de Grove-Sensor de polvo](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/Grove_-_Dust_sensor.pdf)
- **[Hoja de Datos]** [Deconstrucción del sensor de polvo Shinyei PPD42NS Hecho por Tracy Allen](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/ShinyeiPPD42NS_Deconstruction_TracyAllen.pdf)
- **[Demo]**[Construyendo un monitor PM2.5 en red de bajo costo](https://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/) -- Hecho por A.J.
- **[Demo]** [Midiendo el Pickle Jr. – un PPD42 modificado con un ventilador adjunto.](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/) -- Hecho por A.J.
- **[Demo]** [Probando el Shinyei PPD42NS](http://irq5.io/2013/07/24/testing-the-shinyei-ppd42ns/) -- Hecho por darell tan
- **[Demo]** [Monitoreo de Calidad del Aire](http://www.howmuchsnow.com/arduino/airquality/grovedust/) -- Hecho por Chris Nafis

## Proyectos

**Caja de Calidad del Aire**: Monitorea la calidad del aire a tu alrededor

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ye-xiaobo/air-quality-box-d7658a/embed' width='350'></iframe>

**Cultivos Inteligentes: ¡Implementando IoT en la Agricultura Convencional!**: Nuestra misión con la naturaleza es preservarla, diseñando e implementando tecnologías y métodos de monitoreo con la ayuda de IoT a través de Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**LoRa IoTea**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

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

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
