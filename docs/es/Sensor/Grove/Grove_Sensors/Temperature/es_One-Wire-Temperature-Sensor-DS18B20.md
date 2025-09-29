---
description: Sensor de Temperatura One Wire DS18B20
title: Sensor de Temperatura One Wire DS18B20
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/One-Wire-Temperature-Sensor-DS18B20
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/one-wire.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Este Sensor de Temperatura One Wire de 2m de largo tiene una sonda impermeable y forma de cable largo, adecuado para detección de temperatura por inmersión. El chip dentro de este sensor es **DS18B20** que es ampliamente adoptado. El original incluye tres cables en su interior, necesitas añadir una resistencia extra para que funcione. Para este sensor, lo ajustamos a un puerto Grove y tuvimos una resistencia pre-ensamblada en el interior para que puedas usarlo como un sensor Grove regular. ¡Este artículo va a ilustrar el uso del sensor en Raspberry Pi y divertirse!

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para detección ambiental. Por favor consulta el Sensor Inalámbrico de Temperatura y Humedad S2101 con mayor rendimiento y robustez para monitoreo de calidad del aire. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8-en-1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

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

---

- Requiere solo un cable para la interfaz de datos
- Resistente al agua
- Compatible con Grove
- Acepta alimentación de 3.0V a 5.5V
- Amplio rango de temperatura: -55°C a +125°C
- Alta precisión: ±0.5°C (-10°C a +85°C)

:::caution
La parte del cable no puede estar expuesta a temperaturas superiores a 70°C durante largos períodos.
:::

## Especificaciones

|||
|--------|---------|
|Voltaje de Operación |3.0-5.5V|
|Chip|DS18B20|
|Longitud |2m|
|Temperatura de Operación| -55°C a +125°C |


## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Comenzando

---
Después de esta sección, puedes hacer funcionar el Sensor de Temperatura One Wire con solo unos pocos pasos.

### Jugar con Arduino

#### Materiales Requeridos

| Seeeduino Lotus V1.1 |Sensor de Temperatura One Wire|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### Conexión de Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/hardware-1-wire.jpg" /></div>

:::tip
Por favor conecta el cable USB y la Interfaz del Sensor de Temperatura One Wire al Seeeduino Lotus V1.1 con cuidado, de lo contrario podrías dañar el puerto.
:::

- **Paso 1.** Conecta el Sensor de Temperatura One Wire a la interfaz **D2** del Seeeduino Lotus V1.1 con un cable Grove.

- **Paso 2.** Conecta el Seeeduino Lotus V1.1 a la PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Ejecuta el código y el resultado se mostrará en la pantalla del **Monitor Serie** en tu Arduino IDE.

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la [Librería para Onewire](https://github.com/PaulStoffregen/OneWire/archive/master.zip) y la [Librería para Control de Temperatura de Arduino](https://github.com/milesburton/Arduino-Temperature-Control-Library/archive/master.zip)

- **Paso 2.** Copia todos los archivos de **OneWire** y **Arduino-Temperature-Control-Library** y pégalos en tu carpeta de librerías del Arduino IDE.

- **Paso 3.** Sube el código de demostración del **Código de Software** que aparece a continuación. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

**Código de Software**

```cpp
// Include the libraries we need
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire is plugged into port 2 on the Arduino
#define ONE_WIRE_BUS 2


// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature sensors(&oneWire);

/*
 * The setup function. We only start the sensors here
 */
void setup(void)
{
  // start serial port
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // Start up the library
  sensors.begin();
}

/*
 * Main function, get and show the temperature
 */
void loop(void)
{ 
  // call sensors.requestTemperatures() to issue a global temperature 
  // request to all devices on the bus
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures(); // Send the command to get temperatures
  Serial.println("DONE");
  // After we got the temperatures, we can print them here.
  // We use the function ByIndex, and as an example get the temperature from the first sensor only.
  float tempC = sensors.getTempCByIndex(0);

  // Check if reading was successful
  if(tempC != DEVICE_DISCONNECTED_C) 
  {
    Serial.print("Temperature for the device 1 (index 0) is: ");
    Serial.println(tempC);
  } 
  else
  {
    Serial.println("Error: Could not read temperature data");
  }
}
```

:::tip
  Si todo va bien, puedes ir al **Monitor Serie** para ver un resultado como el siguiente:
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/outcome-1-wire.png" alt="1-wire'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

### Jugar con Raspberry Pi

#### Materiales requeridos

| Raspberry Pi 4 Model B |Grove - Base Hat for Raspberry Pi|One Wire Temperature Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### Conectando el hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/connection.jpg" /></div>

**Paso 1.** Conecta el Sensor de Temperatura One Wire al puerto **D5** del Grove - Base Hat para Raspberry Pi, conectado a la Raspberry Pi 4 Model B. Y luego conecta la Raspberry Pi 4 Model B con una PC.

**Paso 2.** Después de acceder al sistema de Raspberry Pi, clona con git **[Seeed_Python_DS18B20](https://github.com/Seeed-Studio/Seeed_Python_DS18B20.git)** e instala **grove.py** insertando el siguiente comando:

```shell
pip3 install Seeed-grove.py
```

O en sistemas GNU/Linux compatibles como la Raspberry Pi, puedes instalar el controlador localmente desde PyPI:

```Shell
pip3 install seeed-python-Ds18b20
```

**Paso 3.** Para instalar en todo el sistema (esto puede ser requerido en algunos casos):

```Shell
sudo pip3 install seeed-python-Ds18b20
```

Y puedes insertar el siguiente comando para actualizar el controlador localmente desde PyPI:

```Shell
pip3 install --upgrade seeed-python-Ds18b20
```

#### Software

```python
import seeed_ds18b20
import time

def main():
    DS18B20 = seeed_ds18b20.grove_ds18b20()
    print("Please use Ctrl C to quit")
    while True:
        temp_c,temp_f = DS18B20.read_temp
        print('temp_c %.2f C   temp_f %.2f F' % (temp_c,temp_f),end=" ")
        print('\r', end='')
        time.sleep(0.5)

if __name__ == "__main__":
    main()   
```

:::caution
Al ejecutar el código de demostración en Raspberry Pi, es **POSIBLE** que se te recuerde habilitar la interfaz **1-Wire**. Entonces deberías usar el comando **sudo raspi-config** y reiniciar para habilitar el dispositivo 1-Wire:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/1.png" /></div>

**Paso 4.** Ejecuta la demostración con el siguiente comando:

```Shell
cd Seeed_Python_DS18B20
```

```Shell
python3 examples/BasicRead.py 
```

:::tip
          El resultado se mostrará como sigue si todo va bien:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/TEM.png" /></div>

## Recursos

**[PDF]** [DS18B20-Datasheet](https://files.seeedstudio.com/wiki/One-Wire-Temperature/res/DS18B20-Datasheet.pdf).

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

