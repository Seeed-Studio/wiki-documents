---
description: Grove - Sensor Reflectivo Infrarrojo
title: Grove - Sensor Reflectivo Infrarrojo
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Infrared_Reflective_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/main.jpg" /></div>

Grove - Sensor Reflectivo Infrarrojo se utiliza para detectar la presencia de un objeto dentro de un rango específico. El sensor consiste en un par de LED IR y un fotosensor (fototransistor). La luz emitida por el LED IR se refleja en cualquier objeto colocado frente al sensor y esta reflexión es detectada por el fotosensor (fototransistor). Cualquier superficie de color blanco (o más claro) refleja más que una superficie de color negro (o más oscuro).

Cuando se detecta la luz reflejada, produce una salida **Digital LOW** (o Binario **0**) en el pin **SIG**. El indicador LED a bordo también se encenderá. Si no se detecta reflexión o si el objeto está demasiado lejos del sensor, la salida en el pin **SIG** permanece en **Digital High** (Binario **1**). El indicador LED a bordo también estará apagado. El rango detectable de este sensor es de 4–16 mm. El módulo incorpora un Amplificador Operacional Rail-to-Rail para amplificar la salida del fototransistor. Hay un potenciómetro que se puede usar para ajustar la ganancia del amplificador, es decir, la sensibilidad de detección.

Con este sensor, puedes construir las siguientes aplicaciones (pero no limitadas a): **robots seguidores de línea**, **codificadores ópticos** y **aplicaciones de conteo de objetos**.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

:::caution
Este producto también es ligeramente sensible a radiaciones no IR y por lo tanto cualquier luz brillante en el fotosensor deteriora o perturba la detección de luz IR.
:::

## Seguimiento de Versiones

| Versión del producto         | Cambios        |Fecha de lanzamiento |
|------------------------------|--------------|----------------|
| Versiones anteriores a v1.2 | Inicial  |Junio 2012‎    |
| Versión 1.2 (versión actual) | Diseño optimizado  | Abril 2016   |

## Características

- Compatible con Grove y fácil de usar
- Altamente sensible y confiable
- Huella pequeña
- Sensibilidad ajustable para diferentes ocasiones

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Parámetro                                    | Valor                                                                          |
|----------------------------------------------|--------------------------------------------------------------------------------|
| Voltaje de operación(V)                      | 3.3–5V                                                                       |
| Corriente de operación(mA)                   | 14.69–15.35 mA                                                                 |
| Distancia de detección efectiva              | 4–15 mm                                                                     |
| Tiempo de respuesta                          | 10 μs                                                                          |
| Fototransistor: Longitud de onda de sensibilidad máxima | 800 nm                                                                         |
| LED IR: Longitud de onda de emisión de luz máxima       | 940 nm                                                                         |
| Fotosensor reflectivo                        | [hoja de datos](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR-220.pdf)          |
| Amplificadores operacionales de salida       | [hoja de datos](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf) |
| Peso                                         | 4 g                                                                            |

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción General del Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Grove-Infrared_Reflective_Sensor_v1.2_hardware_overview_1200_z.jpg" /></div>

- **Fotosensor reflectivo RPR220** - Fotosensor reflectivo altamente sensible.
- **LMV358** - amplificador operacional rail-to-rail.
- **Indicador LED** - El LED se encenderá cuando la intensidad de luz infrarroja recibida exceda un nivel preestablecido.
- **Potenciómetro de ajuste de sensibilidad a la luz** - ajusta la sensibilidad del fotosensor a la luz.

## Primeros Pasos

Veamos cómo implementar algunas aplicaciones básicas con este módulo:

### Jugar con Arduino

#### Seguimiento de Línea

Este sensor puede ser usado para ayudar a un coche robótico a seguir una línea negra.

##### Hardware

- **Paso 1.** Prepara los siguientes materiales:

| Seeeduino V4.2 | Base Shield| Grove - Sensor Reflectivo Infrarrojo | Papel blanco y bolígrafo negro|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>||
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|   🙂   |

- **Paso 2.** Conecta Grove - Infrared Reflective Sensor a cualquier puerto del Grove-Base Shield mediante el cable Grove, usamos **D2** en esta demostración.

- **Paso 3.** Coloca este sensor a 12mm por encima del papel blanco (u otro color brillante).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-4.JPG" /></div>

- **Paso 4.** Ajusta el potenciómetro con un destornillador para cambiar la sensibilidad del fotosensor reflectivo, hasta que el indicador LED se encienda. Al rotar en sentido horario, el fotosensor reflectivo será más sensible a la luz.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-5.JPG" /></div>

:::note
Usa un destornillador apropiado para ajustar el pequeño potenciómetro. Aplicar presión excesiva o ajustes frecuentes podría dañar el cursor del potenciómetro.
:::

- **Paso 5.** Mantén la distancia vertical, mueve el sensor horizontalmente hacia la línea negra. El LED indicador debería apagarse sobre la línea negra. Si aún está encendido, ajusta el potenciómetro hasta que se apague.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-6.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-7.JPG" /></div>

#### Detección de Velocidad Rotacional

Implementemos un codificador óptico simple para detectar la velocidad de un motor

##### Hardware

- **Paso 1.** Prepara los siguientes materiales:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | Motor DC 3V/5V|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/N30%203V%20DC%2012000RPM%20DC%20Motor.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|  [Obtener Uno Ahora](https://www.seeedstudio.com/N30-3V-DC-12000RPM-DC-Motor-p-1886.html)   |

- **Paso 2.** Conecta el Sensor Reflectivo Infrarrojo al puerto **D2** del Grove - Base Shield y conecta el motor al **D6** (De hecho, puedes simplemente conectar VCC y GND para alimentar el motor).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_arduino.jpg" /></div>

- **Paso 3.** Fija un plato de papel redondo y blanco (con una línea negra marcada en él) al motor. Coloca el sensor cerca de este codificador rotatorio. Ejecuta el motor.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-9.JPG" /></div>

##### Software

- **Paso 1.** Descarga la biblioteca [Arduino timer1 *library*](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip) y agrégala al archivo de bibliotecas del Arduino IDE. Una [guía](/es/Guide_to_use_demos_downloaded_from_Seeed-s_Github/) sobre cómo ejecutar nuestro código de demostración.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Abre un nuevo sketch y copia el siguiente código en el sketch.

```cpp
unsigned int counter=0;
void blink()
{
    counter++;
}
void timerIsr()
{
    Timer1.detachInterrupt();  //disable the timer1
    Serial.print("The speed of the motor: ");
    Serial.print(counter,DEC);
    Serial.println("round/s");
    counter=0;
    Timer1.attachInterrupt( timerIsr );  //enable the timer1
}
void setup()
{
    Serial.begin(9600);
    Timer1.initialize(1000000); // set a timer of length 1sec
    attachInterrupt(0, blink, RISING);  //INT0
    Timer1.attachInterrupt( timerIsr ); // attach the service routine here
}
void loop()
{

}
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás la velocidad.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-10.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-12.JPG" /></div>

### Jugar con Raspberry Pi

#### Hardware

- **Paso 1.** Prepara los siguientes materiales:

| Raspberry pi | GrovePi_Plus | Grove - Sensor Reflectivo Infrarrojo |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 3.** Conecta Grove - Infrared Reflective Sensor al puerto **D4** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a la PC mediante cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_pi.jpg" /></div>

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente del GrovePi.

:::tip
En esta wiki usamos la ruta **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.
:::

:::note
Te sugerimos encarecidamente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::

- **Paso 3.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Verifica el código.

```python

cd ~/GrovePi/Software/Python
sudo nano grove_infrared_reflective_sensor.py

```

Entonces el código debería ser así:

```
import time
import grovepi
 
# Connect the Grove Infrared Reflective Sensor to digital port D4
# SIG,NC,VCC,GND
sensor = 4
 
grovepi.pinMode(sensor,"INPUT")
 
while True:
    try:
        # Sensor returns HIGH on a black surface and LOW on a white surface
        if grovepi.digitalRead(sensor) == 1:
            print "black surface detected"
        else:
            print "white surface detected"
 
        time.sleep(.5)
 
    except IOError:
        print "Error"
```

Luego presiona ++ctrl+x++ para salir de nano.

- **Paso 5.** Para ejecutar la demostración, ejecuta el siguiente comando en la terminal:

```
sudo python grove_infrared_reflective_sensor.py

```

El resultado debería ser como:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_infrared_reflective_sensor.py
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected
white surface detected
white surface detected
white surface detected
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected

```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]**  [Archivos Eagle del Sensor Reflectivo Infrarrojo Grove v1.2](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip)
- **[Zip]**  [Librería Arduino Timer1](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip)
- **[Pdf]**  [Hoja de Datos RPR220](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR220_datasheet.pdf)
- **[Pdf]** [Hoja de Datos](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Infrared_Reflective_Sensor -->

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

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
