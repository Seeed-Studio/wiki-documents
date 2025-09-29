---
description: Grove - Sensor de CO2, Temperatura y Humedad (SCD41)
title: Grove - Sensor de CO2, Temperatura y Humedad (SCD41)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/101020952_Preview-07.png" /></div>

El Grove - Sensor de CO2, Temperatura y Humedad - SCD41 es un módulo pequeño pero potente fabricado por Sensirion. Es un sensor multifunción que puede medir temperatura, presión, humedad y CO2 al mismo tiempo. Está basado en el módulo SCD41 y puedes usar este sensor en tu GPS, dispositivos IoT u otros dispositivos que necesiten esos cuatro parámetros.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- 3 en 1 para medición múltiple
- Bajo consumo de energía
- Amplio rango de medición
- Interfaz I2C
- Amplio rango de voltaje de alimentación

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de trabajo|2.4V~5V|
|Rango de operación|-10~+60℃; 0-100% r.H.; 0-40,000ppm|
| Dirección I2C | 0x62 |

## Descripción General del Hardware

### Mapa de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/1111.jpg" /></div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Sensor de CO2, Temperatura y Humedad - SCD41 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/thumbnail.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB suavemente, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/2222.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove-BME680           |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

:::note
Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [arduino-i2c-scd4x](https://github.com/Sensirion/arduino-i2c-scd4x) y la dependencia [arduino-core](https://github.com/Sensirion/arduino-core) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo **Sensirion I2c SCD4x** a través de la ruta: **File --> Examples --> Sensirion I2c SCD4x --> exampleUsage**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/6267778524616.png" /></div>

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [How to upload code](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Serial Monitor** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás el resultado.

El resultado debería ser como:

```c
Serial: 0x6A565F073B88
Waiting for first measurement... (5 sec)
Co2:868 Temperature:33.08 Humidity:49.40
Co2:845 Temperature:32.72 Humidity:50.13
Co2:852 Temperature:32.28 Humidity:51.54
```

:::note
- Para obtener un valor estable y preciso, necesitas dejar que el arduino ejecute el código durante aproximadamente 2 horas. El resultado es mucho más confiable entonces.
:::

## Jugar en RaspberryPi

**Materiales requeridos**

| Raspberry pi | Grove Base Hat para Raspberry Pi | Grove - Pantalla OLED 1.12" V3.0|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/thumbnail.png" /></div>
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### Prepararse para RaspberryPi

#### Conexión I2C

- **Paso 1.** Conecta Grove - Sensor de CO2, Temperatura y Humedad - SCD41 al puerto **I2C** del Grove - Base Hat.

- **Paso 2.** Conecta Grove - Base Hat en RaspberryPi.

- **Paso 3.** Conecta RaspberryPi a una PC vía Serial o SSH.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/9dfb870f961902feae92f4bde5bdeaf.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/GPIO-Pinout-Diagram.png" /></div>

#### Software

- **Paso 1.**  Habilitar I2C en RaspberryPi

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

Sigue las imágenes para habilitar I2C y SPI en tu RaspberryPi.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" /></div>

Y luego reinicia tu RaspberryPi

```shell
sudo reboot
```

- **Paso 2.** Instalar las librerías necesarias

```shell
sudo apt-get install wget gcc make unzip -y
```

Instalar la Biblioteca WiringPi

*Si usas WiringPi, necesitas actualizar WiringPi a la versión 2.52. Esta biblioteca puede no estar actualizada. Se recomiendan otras bibliotecas*

```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

Instalar bcm2835

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

Para más información y las bibliotecas más recientes, consulte el sitio web: [bcm2835](http://www.airspayce.com/mikem/bcm2835/)

- **Paso 3.** Descargue el controlador desde la [Página de GitHub de Sensirion](https://github.com/Sensirion/raspberry-pi-i2c-scd4x/tags) y extraiga el archivo `.zip` en su Raspberry Pi

- **Paso 4.** Compile el controlador

**1**.Abra una terminal

**2**.Navegue al directorio del controlador. Por ejemplo, cd ~/raspberry-pi-i2c-scd4x

**3**.Ejecute el comando make para compilar el controlador

Salida:

```shell
rm -f scd4x_i2c_example_usage
cc -Os -Wall -fstrict-aliasing -Wstrict-aliasing=1 -Wsign-conversion -fPIC -I. -o scd4x_i2c_example_usage  scd4x_i2c.h scd4x_i2c.c sensirion_i2c_hal.h sensirion_i2c.h sensirion_i2c.c \
sensirion_i2c_hal.c sensirion_config.h sensirion_common.h sensirion_common.c scd4x_i2c_example_usage.c
```

- **Paso 5.** Prueba tu sensor conectado

Ejecuta `./scd4x_i2c_example_usage` en el mismo directorio que usaste para compilar el controlador.

Salida:

```c
serial: 0xbff79f073b51
CO2: 799
Temperature: 20.92
Humidity: 35.95
CO2: 900
Temperature: 20.92
Humidity: 36.47
CO2: 926
Temperature: 20.81
Humidity: 36.85
...
```

Para más información, consulte [Sensirion/raspberry-pi-i2c-scd4x en GitHub](https://github.com/Sensirion/raspberry-pi-i2c-scd4x).

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Hoja de Datos de Sensores de CO2 Sensirion SCD4x](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/Sensirion_CO2_Sensors_SCD4x_Datasheet.pdf)
- **[STEP]** [Archivo STEP de Sensores de CO2 Sensirion SCD4x](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/Sensirion_CO2_Sensors_SCD4x_STEP_file.step)
- **[ZIP]** [Archivo de Placa Grove - Sensor de CO2, Temperatura y Humedad - SCD41](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip)

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