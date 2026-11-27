---
description: Protocolo BTHome para uso con Home Assistant en Seeed Studio XIAO nRF52840 Sense
title: Protocolo BTHome con XIAO nRF52840 Sense (CircuitPython)
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_BLE_HA
last_update:
  date: 09/18/2023
  author: Bruno Santos (Feiticeir0)
createdAt: '2023-09-17'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/XIAO_BLE_HA/
---

# Descripción del proyecto

En este wiki, mostraremos cómo usar las capacidades Bluetooth 5.0 BLE del Seeed Studio XIAO nRF52840 con el Seeed Studio Grove Temperature & Humidity Sensor (DHT20) para transmitir las mediciones de temperatura y humedad a Home Assistant usando el protocolo BTHome.

Usaremos **CircuitPython** para el código.

## Primeros pasos

Para seguir este tutorial, necesitas el siguiente hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
        <th>Seeed Studio Grove Temperature&Humidity Sensor V2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del hardware

El sensor Grove DHT20 usa I2C para la comunicación. Necesitamos conectarlo a los pines I2C del XIAO nRF52840 Sense:

- Podemos usar un XIAO Grove Shield con un cable Universal de 4 pines sin hebilla
- Conectar el sensor DHT20 directamente al XIAO nRF52840 Sense usando un cable de conversión de 4 pines Jumper hembra a Grove de 4 pines

#### Aquí está el pinout del XIAO nRF52840 Sense y del XIAO Grove Shield

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### Configuración del hardware

El cableado es sencillo. Usando el Shield o no, el siguiente esquema de Fritzing muestra cómo cablear los componentes entre sí.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## Preparación del software

Vamos a usar el software Thonny IDE (Linux) y algunas bibliotecas y archivos relacionados. Estos son los pasos que vamos a seguir:

1. Instalar CircuitPython en el XIAO nRF52840 Sense
2. Instalar las bibliotecas necesarias
3. Programar nuestro sensor usando el protocolo BTHome
4. Configurar Home Assistant

### Paso 1 - Instalar CircuitPython

Vamos a instalar CircuitPython.

Ve a <a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a> y descarga una versión para el XIAO nRF52840 Sense.
Elige Downloads y en el campo de búsqueda empieza a escribir XIAO nRF52840 hasta que los resultados muestren el sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

A continuación, pulsa el botón de descarga para obtener el archivo para nuestro dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

Deberías tener un archivo .uf2. Para instalarlo necesitamos entrar en modo bootloader. Conecta el XIAO nRF52840 Sense a tu ordenador y pulsa el botón de reinicio dos veces.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

Debería haber aparecido una nueva unidad en tu ordenador llamada XIAO-SENSE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

A continuación, copia el archivo descargado a la unidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

Al cabo de un rato, aparece una nueva unidad llamada CIRCUITPY. Ya tenemos CircuitPython instalado en nuestro microcontrolador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### Paso 2 - Instalar bibliotecas

Para usar nuestro Grove Temperature & Humidity sensor V2.0 (DHT20), necesitamos la <a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> biblioteca AHT20 de Adafruit</span></a>.

La página web anterior tiene instrucciones sobre cómo instalar bibliotecas.

Una vez instaladas, deberíamos tener los siguientes archivos (estos son los necesarios para nuestro sensor DHT20):
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### Paso 3 - Subir el código

Antes de ir al código, necesitamos entender qué es BTHome.

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome es un estándar abierto para transmitir datos de sensores y pulsaciones de botones mediante Bluetooth Low Energy (BLE). Está diseñado para ser eficiente en energía, flexible y seguro. BTHome es compatible de forma nativa con plataformas de automatización del hogar populares, como Home Assistant.

Algunos beneficios de BTHome:

- Es un estándar abierto, por lo que dispositivos de diferentes fabricantes pueden funcionar juntos.
- Los dispositivos están diseñados para ser eficientes en energía, por lo que pueden funcionar durante mucho tiempo con una sola batería.
- Los datos están cifrados, por lo que están protegidos frente a accesos no autorizados.
- Es un formato flexible, por lo que se puede usar para transmitir una variedad de datos de sensores y pulsaciones de botones.

BTHome es un estándar versátil y potente para transmitir datos de sensores y pulsaciones de botones mediante BLE. Es una buena opción para cualquiera que quiera añadir datos de sensores y pulsaciones de botones a su hogar inteligente.

Puedes leer más al respecto y aprender sobre el formato de datos en el <a  href="https://bthome.io/" target="_blank"><span>sitio oficial</span></a>.

#### Código

Aquí está el código en CircuitPython.

<details>
<summary>Haz clic para copiar el código CircuitPython</summary>

```python
# BTHome with DHT20
# This code is based on the excelent code by Koen Vervloesem
# https://github.com/koenvervloesem/BTHome-Inertial-Sensor-in-CircuitPython
# We don't use deep sleep because it just doesn't work
# on the XIAO nRF52840 Sense. It's a pitty. 

from _bleio import adapter
from time import sleep
import board
# for the Grove sensor
import adafruit_ahtx0


# The size of the name is important. 
DEVICE_NAME = "XIAO nRF52840 Sense"
INTERVAL = 0.1

# Because this is delaying just 0.1s - 100 milliseconds, we don't need to read the sensor
# values everytime. It's overkill - let's just read every 5 minutes. 
# Let's create a timer that will add every INTERVAL
# when it reaches 30 - it will be 5 minutes passed
# then we read the sensor
# INTERVAL * 60 seconds * 5 minutes
# CONVERTING 0.1ms to seconds * 60s * minutes = 300
MINUTES_PER_READING = 5
readTimer = INTERVAL * 10 * 60 * MINUTES_PER_READING


# convert the measurement value to the BTHome format
def value_to_little_endian (measurement):

    # Calculate the integer value by dividing the temperature by the factor
    integer_value = int(measurement / 0.01)

    # Extract the lower and upper bytes for little-endian representation
    lower_byte = integer_value & 0xFF
    upper_byte = (integer_value >> 8) & 0xFF

    # Reverse the order of the bytes
    little_endian_bytes = bytes([upper_byte, lower_byte])
    return little_endian_bytes

class BTHomeAdvertisement:
    _ADV_FLAGS = [0x02, 0x01, 0x06]
    _ADV_SVC_DATA = [0x0a, 0x16, 0xd2, 0xfc, 0x40, 0x02, 0x00, 0x00, 0x03, 0xbf, 0x13]    

    def _name2adv(self, local_name):
        adv_element = bytearray([len(local_name) + 1, 0x09])
        adv_element.extend(bytes(local_name, "utf-8"))
        return adv_element

    def __init__(self, local_name=None):
        if local_name:
            self.adv_local_name = self._name2adv(local_name)
        else:
            self.adv_local_name = self._name2adv(adapter.name)

    def adv_data(self, temperature, humidity):
        adv_data = bytearray(self._ADV_FLAGS)
        adv_svc_data = bytearray(self._ADV_SVC_DATA)
        # temperature
        # change values according - 
        temp = value_to_little_endian (temperature)
        # returned value is list
        adv_svc_data[6] = temp[1]
        adv_svc_data[7]= temp[0]
        # humidity
        # change values according - 
        hum = value_to_little_endian (humidity)
        # returned value is list
        adv_svc_data[9] = hum[1]
        adv_svc_data[10]= hum[0]
        adv_data.extend(adv_svc_data)
        adv_data.extend(self.adv_local_name)
        return adv_data


# BTHome
bthome = BTHomeAdvertisement(DEVICE_NAME)

# Create sensor object
sensor = adafruit_ahtx0.AHTx0(board.I2C())

# because we want a initial reading
# let's initialize with the readTimer variable
# so we force the script to read the values
currentTimer = 0
# inital reading
temp = sensor.temperature
hum = sensor.relative_humidity

#DEBUG
#print("\nTemperature: %0.1f C" % temp)
#print("Humidity: %0.1f %%" % hum)

while True:
    adv_data = bthome.adv_data(temp,hum)
    adapter.start_advertising(
        adv_data, scan_response=None, connectable=False, interval=INTERVAL * 2
    )
    sleep(INTERVAL)
    adapter.stop_advertising()
    # increase currentTimer
    currentTimer += INTERVAL
    #print (f"Current timer: {currentTimer}")
    if (currentTimer >= readTimer):
        #print (f'Read new values')
        # Read new values
        temp = sensor.temperature
        hum = sensor.relative_humidity
        #reset counter
        currentTimer = 0


```

</details>

Recuerda guardarlo como `code.py` para que se ejecute al arrancar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### Un poco de explicación del código

- El código está lleno de comentarios para explicarlo un poco.
- Básicamente, cada 0,2 s está transmitiendo la temperatura y la humedad que provienen del sensor DHT20.
- Como no queremos sobrecargar el sensor y leer valores cada 0,2 s, hemos colocado un temporizador. Solo leerá los valores cada 5 minutos. Este tiempo está controlado por la variable `MINUTES_PER_READING`.

### Paso 4 - Mostrar datos en Home Assistant

#### Paso 4.1 - Añadir XIAO nRF52840 Sense en Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistant es un software gratuito y de código abierto para la automatización del hogar. Está diseñado para ser un sistema de control central para dispositivos de hogar inteligente con un enfoque en el control local y la privacidad.

Home Assistant actúa como un concentrador central de control del hogar inteligente al combinar diferentes dispositivos y servicios en un solo lugar e integrarlos como entidades. El sistema de automatización basado en reglas permite crear rutinas personalizadas basadas en un evento desencadenante, condiciones y acciones, incluidos scripts. Estos permiten construir automatización, gestión de alarmas de seguridad y videovigilancia para sistemas de seguridad del hogar, así como la monitorización de dispositivos de medición de energía.

Puedes leer más al respecto en el <a  href="https://www.home-assistant.io/" target="_blank"><span>sitio oficial</span></a>.

#### Requisitos

Un requisito crucial es que HA (Home Assistant) **tenga Bluetooth**. Si estás ejecutando HA en una Raspberry PI, es probable que lo tengas. Todo depende de la versión de la RPi.

#### Configuración

En el "Paso 3 - Cargar código", programamos el XIAO nRF52840 y, para el siguiente paso, debe estar en ejecución para que HA pueda detectarlo.

Abre tu instalación de HA. Ve a Settings -> Devices and Services
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Ahora, se muestra tu página de Integrations. Selecciona Bluetooth
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>

Y la integración debería aparecer.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

<b>NOTA:</b> Si algo no funciona, comprueba que Passive scanning <b>no esté seleccionado</b>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Al entrar en la página de Integrations, si tienes conectado el XIAO nRF52840 Sense, ya debería haber sido detectado y aparecerá en la página.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Pulsa "Configure" para configurar esta nueva integración. Pulsa Submit.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Ahora solo necesitas seleccionar el área donde colocar este nuevo sensor y hemos terminado.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

A continuación, ve de nuevo a Settings -> Integrations y selecciona la nueva integración BTHome
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Luego se nos lleva a la página de la integración. Podemos ver que tenemos 1 dispositivo y 3 entidades.
Las entidades son la temperatura, la humedad y la intensidad de la señal
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Si hacemos clic en las entidades, obtenemos una nueva página donde podemos verlas todas.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Si en su lugar pulsamos en device, obtenemos la página del dispositivo con todas las opciones, así como los valores actuales. Usando esta página, podemos añadirlo al panel.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Al pulsar "ADD to DASHBOARD", podemos elegir la vista donde colocarlo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Después de eso, obtenemos una vista de la tarjeta. Solo pulsa "ADD TO DASHBOARD" para añadirla al panel.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Si vamos al panel, veremos nuestra tarjeta recién añadida con la temperatura y la humedad transmitidas por el XIAO nRF52840 Sense.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

## Qué más - Función de Deep Sleep

No pude hacer que funcionara. Si alguien tiene una solución, por favor deja un comentario. Puedes compartir tus ideas en [GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a los [esfuerzos de Bruno](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
