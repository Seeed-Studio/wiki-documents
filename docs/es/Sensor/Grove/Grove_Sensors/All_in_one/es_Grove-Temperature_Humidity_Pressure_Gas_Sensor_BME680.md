---
description: Grove - Sensor de Temperatura Humedad Presión Gas (BME680)
title: Grove - Sensor de Temperatura Humedad Presión Gas (BME680)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.webp
slug: /es/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680
sku: 101020513
last_update:
  date: 4/14/2025
  author: Priyanshu Roy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" /></div>

El Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) es un sensor multifunción que puede medir temperatura, presión, humedad y gas al mismo tiempo. Está basado en el módulo BME680 y puedes usar este sensor en tu GPS, dispositivos IoT u otros dispositivos que necesiten esos cuatro parámetros.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::note
  El 'gas' significa calidad del aire que está principalmente afectada por los [COV](https://en.wikipedia.org/wiki/Volatile_organic_compound) (compuestos orgánicos volátiles). En este momento, 8 de agosto de 2018, este módulo no soporta medición de gas para algunas placas Arduino. Solo está disponible para placas Arduino con plataformas arduino de gran memoria como ATMEGA2560. Si usas otra plataforma arduino, como: arduino uno, seeedunio v4.2... el valor de gas que obtienes no es preciso.
:::

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para detección ambiental. Por favor consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temp. y Humedad del Aire</strong></a></td>
    </tr>
  </tbody>
</table>

## Características

- 4 en 1 para múltiples mediciones
- Bajo consumo
- Amplio rango de medición
- Salida opcional:

    Los sensores individuales de humedad, presión y gas pueden ser habilitados/deshabilitados independientemente

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de funcionamiento|3.3V/5V|
|Rango de operación|-40~+85℃; 0-100% r.H.; 300-1100hPa|
|Interfaz digital|I2C(hasta 3.4MHZ)/ SPI(3 y 4 hilos, hasta 10MHz)|
|Dirección I2C|0x76(predeterminada)/ 0x77(opcional)|


## Descripción General del Hardware

### Mapa de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map_back.jpg" /></div>

:::caution
        Si deseas cambiar la configuración predeterminada, es posible que necesites cortar la almohadilla y soldar por ti mismo, por favor sigue la imagen de arriba y ten cuidado cuando uses cuchillo o soldador.
:::

## Plataformas Compatibles

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove-BME680 |
|--------------|-------------|-----------------|
|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/7.jpg" /></div>

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

- **Paso 1.** Descarga la librería [Grove BME680](https://github.com/Seeed-Studio/Seeed_BME680) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo "BME680" a través de la ruta: **File --> Examples --> Seeed BME680 --> seeed_bme680_test**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/demo_path.jpg" /></div>

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [How to upload code](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Serial Monitor** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás el resultado.

El resultado debería ser como:

```c
Serial start!!!
temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.51 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.64 Kohms


temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.77 %
gas ===>> 101.64 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.80 %
gas ===>> 101.76 Kohms

```

:::note
        1 - Para obtener un valor estable y preciso, necesitas dejar que el arduino ejecute el código durante aproximadamente 2 horas. El resultado es mucho más confiable entonces.

        2 - Para la parte del gas, es una resistencia variable que refleja el valor del gas VOC, por lo que la unidad es Kohms. 
        
        3 - Si quieres obtener un resultado confiable para la parte del gas, por favor usa Arduino Mega y revisa [aquí](https://github.com/Seeed-Studio/Seeed_BME680_V1)
:::

### Jugar Con ESP-IDF

#### Hardware

**Materiales requeridos**

<table align="center">
  <tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove BME680 Environmental Sensor</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) a la Base Grove para XIAO usando el cable Grove.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/XIAO_Grove_BME680.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2.** Conecta XIAO ESP32C3 a la PC mediante un cable USB.

#### Software

:::note
Si esta es la primera vez que trabajas con ESP-IDF, te recomendamos encarecidamente que veas [Getting Started with ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) antes de comenzar.
:::

- **Paso 1.** Instala ESP-IDF siguiendo la [guía oficial](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html).

- **Paso 2.** Crea un nuevo proyecto usando la plantilla ESP-IDF.

- **Paso 3.** Clona el repositorio del componente BME680:
```bash
cd <your_project>/components
git clone --recursive https://github.com/Priyanshu0901/grove_bme680.git
```

- **Paso 4.** Configura los pines I2C en el archivo `sdkconfig` de tu proyecto o usando menuconfig:
```bash
idf.py menuconfig
```

Navega a `Component config -> BME680 Sensor Configuration` y configura:
- I2C SDA Pin: 6
- I2C SCL Pin: 7

- **Paso 5.** Copia el código de ejemplo del directorio `examples` del componente al directorio `main` de tu proyecto.

- **Paso 6.** Compila y flashea el proyecto:
```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

La salida debería ser similar a:

```
I (251) main_task: Started on CPU0
I (251) main_task: Calling app_main()
I (251) BME680_EXAMPLE: BME680 sensor example started
I (261) BME680_EXAMPLE: Initializing BME680 sensor...
I (261) BME680_IF: I2C interface initialized with address: 0x76
I (271) BME680_IF: BME680 interface initialized successfully
I (281) BME680: BME680 configured successfully
I (281) BME680: BME680 initialized successfully
I (281) BME680_EXAMPLE: BME680 initialized, waiting for sensor to stabilize...
I (1291) BME680_EXAMPLE: Performing first sensor reading...
I (1411) BME680_EXAMPLE: First sensor reading successful on attempt 1
I (1411) BME680_EXAMPLE: Sensor Data:
I (1411) BME680_EXAMPLE:   Temperature: 30.46 °C
I (1411) BME680_EXAMPLE:   Pressure: 910.34 hPa
I (1411) BME680_EXAMPLE:   Humidity: 51.17 %
I (1421) BME680_EXAMPLE:   Gas Resistance: 12561.98 kOhm
I (1421) BME680_EXAMPLE:   Gas Valid: Yes
I (1431) BME680_EXAMPLE:   Data Valid: Yes
I (1561) BME680_EXAMPLE: Sensor Data:
I (1561) BME680_EXAMPLE:   Temperature: 30.50 °C
I (1561) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (1561) BME680_EXAMPLE:   Humidity: 51.20 %
I (1561) BME680_EXAMPLE:   Gas Resistance: 136.83 kOhm
I (1571) BME680_EXAMPLE:   Gas Valid: Yes
I (1571) BME680_EXAMPLE:   Data Valid: Yes
I (3691) BME680_EXAMPLE: Sensor Data:
I (3691) BME680_EXAMPLE:   Temperature: 30.50 °C
I (3691) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (3691) BME680_EXAMPLE:   Humidity: 51.04 %
I (3691) BME680_EXAMPLE:   Gas Resistance: 96.77 kOhm
I (3701) BME680_EXAMPLE:   Gas Valid: Yes
I (3701) BME680_EXAMPLE:   Data Valid: Yes
```

:::note
1. El código de ejemplo incluye mecanismos de manejo de errores y recuperación para fallos de lectura del sensor.
2. El sensor requiere algo de tiempo para estabilizarse después de la inicialización, por lo que las primeras lecturas podrían no ser precisas.
3. El valor de resistencia del gas está en kOhms y representa la calidad del aire.
4. El sensor soporta tanto interfaces I2C como SPI, pero el ejemplo usa I2C por defecto.
5. Asegúrate de usar los pines I2C correctos (GPIO6 para SDA y GPIO7 para SCL) cuando uses con XIAO ESP32C3.
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivo Eagle de Grove-BME680](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip)
- **[Librería]** [Librería Seeed BME680](https://github.com/Seeed-Studio/Seeed_BME680)
- **[PDF]** [Hoja de datos del BME680](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/BME680.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/O3oHtW2TlXY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto


¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
