---
description: Grove - Sensor TDS
title: Grove - Sensor TDS
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-TDS-Sensor
last_update:
  date: 7/12/2024
  author: Harrison Xu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg" alt="pir" width={600} height="auto" /></p>
El Grove - Sensor TDS detecta los niveles de Sólidos Disueltos Totales (TDS) en el agua, lo cual puede utilizarse para indicar la calidad del agua. El Grove - Sensor TDS puede aplicarse en aplicaciones de calidad del agua como medidor TDS, agua de pozo, acuario, hidroponía, etc.

Soporta voltaje de entrada de 3.3 / 5V y voltaje de salida de 0 ~ 2.3V, lo que facilita la compatibilidad con todas las placas Arduino. El sensor también proporciona una sonda impermeable, haciendo que el proceso de prueba sea mucho más fácil de manejar.
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)

## Características

- Señal analógica, fácil de implementar
- Soporta voltaje de entrada de 3.3 / 5V
- Buena compatibilidad con Arduino, donde el voltaje de salida de 0 ~ 2.3V puede implementarse fácilmente en sistemas de control de 3.3 / 5V
- Sonda TDS impermeable

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de entrada|3.3V / 5V|
|Voltaje de salida| 0 ~ 2.3V |
|Corriente de trabajo| 3 ~ 6 mA|
|Rango de medición TDS|0 ~ 1000ppm|
|Interfaz de conexión|Grove 4-Pin / XHB 2.54mm 2P|
|Interfaz|Analógica|
|Longitud del cable|60cm|
|Interfaz de conexión|XHB 2.54mm 2P|

## Descripción General del Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" /></a></p>
  </figure>
</div>

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Jugar con Arduino

#### Materiales requeridos

| Seeeduino V4.2 | Base Shield | Grove - Sensor TDS|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

#### Conexión de Hardware

- **Paso 1.** Conecta Grove - Sensor TDS al puerto **A0** de Grove - Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a una PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.**  Abre el IDE de Arduino y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp showLineNumbers
#define SERIAL Serial
#define sensorPin A0

int sensorValue = 0;
float tdsValue = 0;
float Voltage = 0;

void setup() {
    SERIAL.begin(9600);
}
void loop() {
    sensorValue = analogRead(sensorPin);
    Voltage = sensorValue*5/1024.0; //Convert analog reading to Voltage
    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convert voltage value to TDS value
    SERIAL.print("TDS Value = "); 
    SERIAL.print(tdsValue);
    SERIAL.println(" ppm");
    delay(1000);
}
```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**.

- **Paso 5.** El resultado debería ser así cuando la sonda esté en agua:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Results.gif" /></div>

### Jugar con Raspberry Pi

#### Materiales requeridos

| Raspberry Pi | Grove Base Hat para RasPi | Grove - Sensor TDS|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

- **Paso 2.** Conecta el Grove Base Hat al Raspberry Pi.

- **Paso 3.** Conecta el sensor Grove - TDS al puerto **A0** del Base Hat.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Conecta el Raspberry Pi a la PC a través del cable USB.

#### Software

- **Paso 1.** Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.

- **Paso 2.** Descarga el archivo fuente clonando la biblioteca python de grove.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Paso 3.** Ejecuta los siguientes comandos para crear el código python.

```sh
cd grove.py/grove/
nano TDS.py
```

- **Paso 4.** Copia el siguiente código en el archivo:

```py showLineNumbers
import math
import sys
import time
from grove.adc import ADC

class GroveTDS:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def TDS(self):
        value = self.adc.read(self.channel)
        if value != 0:
            voltage = value*5/1024.0
            tdsValue = (133.42*voltage*voltage*voltage-255.86*voltage*voltage+857.39*voltage)*0.5
            return tdsValue
        else:
            return 0

Grove = GroveTDS

def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveTDS(int(sys.argv[1]))
    print('Detecting TDS...')

    while True:
        print('TDS Value: {0}'.format(sensor.TDS))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

- **Paso 5.** Usa **Ctrl+O** para guardar y **Ctrl+X** para salir.

- **Paso 6**. Ejecuta lo siguiente para ejecutar:

```sh
python TDS.py 0
```

Si todo va bien, podrás ver el siguiente resultado:

```sh
pi@raspberrypi:~/grove.py/grove$ python TDS.py 0
Detecting TDS...
TDS Value: 0
TDS Value: 0
TDS Value: 0
TDS Value: 0
TDS Value: 2.41591963768
TDS Value: 28.5884239197
TDS Value: 33.2677587509
TDS Value: 30.9311414242
TDS Value: 30.9311414242
```

## FAQ

**P1:** ¿Limitaciones del Grove - Sensor/Medidor TDS Para Calidad del Agua (Sólidos Disueltos Totales)?

**R1:** Las limitaciones son las siguientes:

- La sonda TDS impermeable no puede usarse en agua por encima de 70°C.
- El sensor no puede usarse para medir agua en movimiento.
- El sensor no puede usarse para medir agua con alta concentración de contaminación.
- El sensor Grove en sí mismo no es impermeable.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo de esquemático del Grove - Sensor/Medidor TDS Para Calidad del Agua (Sólidos Disueltos Totales)](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip)
- **[PDF]** [Hoja de datos LMV324](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/LMV324-Datasheet.pdf)
- **[PDF]** [Hoja de datos CD4060BM](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/CD4060BM-Datasheet.pdf)

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

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
