---
description: BTHome Protocol for Home Assistant usage on Seeed Studio XIAO nRF52840 Sense
title: Protocolo BTHome con XIAO nRF52840 Sense (CircuitPython) 
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/XIAO_BLE_HA
last_update:
  date: 02/16/2025
  author: Guillermo
---

### Resumen del Proyecto

En este tutorial, mostraremos cómo usar las capacidades BLE de Bluetooth 5.0 del Seeed Studio XIAO nRF52840 junto con el sensor de temperatura y humedad Grove (DHT20) para transmitir las mediciones de temperatura y humedad a Home Assistant utilizando el protocolo BTHome.

Utilizaremos **CircuitPython** para el código.

## Comenzando

Para seguir este tutorial, necesitas el siguiente hardware:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
        <th>Seeed Studio Grove Sensor de temperatura y humedad v2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del Hardware

El sensor Grove DHT20 utiliza I2C para la comunicación. Necesitamos conectarlo a los pines I2C del XIAO nRF52840 Sense:

- Podemos usar un XIAO Grove Shield con un cable universal de 4 pines sin bloqueos.
- Conectar el sensor DHT20 directamente al XIAO nRF52840 Sense usando un cable de conversión de 4 pines hembra a Grove de 4 pines.

#### Aquí está el pinout para el XIAO nRF52840 Sense y el XIAO Grove Shield:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### Configuración del Hardware

El cableado es sencillo. Ya sea usando el Shield o no, el siguiente esquema de Fritzing muestra cómo conectar los componentes entre sí. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## Preparación del Software

Vamos a usar el software Thonny IDE (Linux) y algunas bibliotecas y archivos relacionados. Estos son los pasos que vamos a seguir:

1. Instalar CircuitPython en el XIAO nRF52840 Sense
2. Instalar las bibliotecas necesarias
3. Programar nuestro sensor utilizando el protocolo BTHome
4. Configurar Home Assistant

### Paso 1 - Instalar CircuitPython

Comencemos con la instalación de CircuitPython.

Ve a <a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a> y descargar una versión para el XIAO nRF52840 Sense. 
Elige Downloads y en el campo de búsqueda empieza a escribir XIAO nRF52840 hasta que aparezcan los resultados correspondientes al sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

Luego, presiona el botón de descarga para obtener el archivo para nuestro dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

Deberías obtener un archivo .uf2. Para instalarlo, necesitamos entrar en el modo de arranque. Conecta el XIAO nRF52840 Sense a tu computadora y presiona el botón de reset dos veces.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

Un nuevo disco debería haber aparecido en tu computadora llamado XIAO-SENSE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

A continuación, copia el archivo descargado en ese disco.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

Después de un momento, aparecerá un nuevo disco llamado CIRCUITPY. Esto indica que CircuitPython se ha instalado correctamente en tu microcontrolador. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### Paso 2 - Instalar bibliotecas

Para utilizar nuestro sensor Grove de temperatura y humedad V2.0 (DHT20), necesitamos la <a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> librería AHT20 de Adafruit</span></a>.

El sitio web anterior tiene instrucciones sobre cómo instalar las bibliotecas.

Después de instalar, deberíamos tener los siguientes archivos (estos son los necesarios para nuestro sensor DHT20):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### Paso 3 - Subir el Código

Antes de ir al código, necesitamos entender qué es BTHome.

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome es un estándar abierto para transmitir datos de sensores y presiones de botones a través de Bluetooth de Baja Energía (BLE). Está diseñado para ser eficiente en el consumo de energía, flexible y seguro. BTHome es compatible con plataformas populares de automatización del hogar, como Home Assistant, de forma nativa.

Algunos beneficios de BTHome:

- Es un estándar abierto, por lo que los dispositivos de diferentes fabricantes pueden trabajar juntos.
- Los dispositivos están diseñados para ser eficientes en el consumo de energía, por lo que pueden funcionar durante mucho tiempo con una sola batería.
- Los datos están cifrados, por lo que son seguros contra el acceso no autorizado.
- Es un formato flexible, por lo que puede utilizarse para transmitir una variedad de datos de sensores y presiones de botones.

BTHome es un estándar versátil y potente para transmitir datos de sensores y presiones de botones a través de BLE. Es una buena opción para cualquiera que quiera agregar datos de sensores y presiones de botones a su hogar inteligente.

Puedes leer más sobre ello y aprender sobre el formato de datos en el <a href="https://bthome.io/" target="_blank"><span>sitio oficial</span></a>.

#### Código

Aquí está el código de CircuitPython.

<details>
<summary>Haz click para copiar el código CircuitPython</summary>

```python
/*
   BTHome con DHT20
   Este código está basado en el excelente código de Koen Vervloesem
   https://github.com/koenvervloesem/BTHome-Inertial-Sensor-in-CircuitPython
   No usamos el modo de sueño profundo porque simplemente no funciona
   en el XIAO nRF52840 Sense. Es una pena. 
*/

from _bleio import adapter
from time import sleep
import board
# para el sensor Grove
import adafruit_ahtx0


# El tamaño del nombre es importante.
DEVICE_NAME = "XIAO nRF52840 Sense"
INTERVAL = 0.1

# Debido a que esto solo demora 0.1 segundos - 100 milisegundos, no necesitamos leer los
# valores del sensor cada vez. Sería excesivo, leemos solo cada 5 minutos.
# Creamos un temporizador que sumará cada INTERVALO
# cuando llegue a 30, serán 5 minutos pasados
# entonces leemos el sensor
# INTERVALO * 60 segundos * 5 minutos
# CONVERTIR 0.1ms a segundos * 60s * minutos = 300
MINUTES_PER_READING = 5
readTimer = INTERVAL * 10 * 60 * MINUTES_PER_READING


# Convertir el valor de la medición al formato BTHome
def value_to_little_endian (measurement):
    
    # Calcular el valor entero dividiendo la temperatura por el factor
    integer_value = int(measurement / 0.01)

    # Extraer los bytes inferior y superior para la representación little-endian
    lower_byte = integer_value & 0xFF
    upper_byte = (integer_value >> 8) & 0xFF

    # Invertir el orden de los bytes
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
        # temperatura
        # cambiar valores según corresponda - 
        temp = value_to_little_endian (temperature)
        # el valor devuelto es una lista
        adv_svc_data[6] = temp[1]
        adv_svc_data[7] = temp[0]
        # humedad
        # cambiar valores según corresponda - 
        hum = value_to_little_endian (humidity)
        # el valor devuelto es una lista
        adv_svc_data[9] = hum[1]
        adv_svc_data[10] = hum[0]
        adv_data.extend(adv_svc_data)
        adv_data.extend(self.adv_local_name)
        return adv_data


# BTHome
bthome = BTHomeAdvertisement(DEVICE_NAME)

# Crear el objeto del sensor
sensor = adafruit_ahtx0.AHTx0(board.I2C())

# porque queremos una lectura inicial
# inicializamos con la variable readTimer
# así forzamos que el script lea los valores
currentTimer = 0
# lectura inicial
temp = sensor.temperature
hum = sensor.relative_humidity

#DEBUG
#print("\nTemperatura: %0.1f C" % temp)
#print("Humedad: %0.1f %%" % hum)
 
while True:
    adv_data = bthome.adv_data(temp, hum)
    adapter.start_advertising(
        adv_data, scan_response=None, connectable=False, interval=INTERVAL * 2
    )
    sleep(INTERVAL)
    adapter.stop_advertising()
    # aumentar currentTimer
    currentTimer += INTERVAL
    #print (f"Temporizador actual: {currentTimer}")
    if (currentTimer >= readTimer):
        #print (f'Releer nuevos valores')
        # Leer nuevos valores
        temp = sensor.temperature
        hum = sensor.relative_humidity
        # reiniciar contador
        currentTimer = 0


```
</details>

Recuerda guardarlo como `code.py` para que se ejecute al iniciar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### Un poco de explicación del código

- El código está lleno de comentarios para explicarlo un poco.
- Básicamente, cada 0.2 segundos está transmitiendo la temperatura y humedad provenientes del sensor DHT20.
- Debido a que no queremos sobrecargar el sensor y leer valores cada 0.2 segundos, hemos colocado un temporizador. Solo leerá los valores cada 5 minutos. Este tiempo está controlado por la variable `MINUTES_PER_READING`.

### Paso 4 - Mostrar los datos en Home Assistant

#### Paso 4.1 - Agregar XIAO nRF52840 Sense en Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistant is a free and open-source software for home automation. It is designed to be a central control system for smart home devices with a focus on local control and privacy.

Home Assistant acts as a central smart home controller hub by combining different devices and services in a single place and integrating them as entities. The provided rule-based system for automation allows creating custom routines based on a trigger event, conditions and actions, including scripts. These enable building automation, alarm management of security alarms and video surveillance for home security system as well as monitoring of energy measuring devices. 

Puedes leer más sobre eso en el <a  href="https://www.home-assistant.io/" target="_blank"><span>sitio oficial</span></a>.

#### Requisitos

Un requisito crucial es que HA (Home Assistant) **tenga Bluetooth**. Si estás ejecutando HA en una Raspberry Pi, es probable que lo tengas. Todo depende de la versión del RPi.

#### Configuración

En el "Paso 3 - Subir Código", programamos el XIAO nRF52840 y para el siguiente paso, debe estar en funcionamiento, para que HA pueda detectarlo.

Abre tu instalación de HA. Ve a Configuración -> Dispositivos y Servicios  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  
Ahora, se mostrará la página de Integraciones. Selecciona Bluetooth  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>  

Y la Integración debería aparecer.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

<b>NOTA:</b> Si algo no está funcionando, verifica que el escaneo pasivo <b>no esté seleccionado</b>  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Al ingresar a la página de Integraciones, si el XIAO nRF52840 Sense está conectado, ya debería haber sido detectado y aparecerá en la página.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Presiona "Configurar" para configurar esta nueva Integración. Presiona Enviar.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Ahora solo necesitas seleccionar el área donde colocar este nuevo sensor y listo.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

A continuación, ve nuevamente a Configuración -> Integraciones y selecciona la nueva integración BTHome  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Se nos llevará a la página de la integración. Podemos ver que tenemos 1 dispositivo y 3 entidades.  
Las entidades son la temperatura, humedad y la intensidad de la señal.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Si hacemos clic en las entidades, llegamos a una nueva página donde podemos verlas todas.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Si en lugar de eso, presionamos en el dispositivo, llegamos a la página del dispositivo con todas las opciones, así como los valores actuales. Usando esta página, podemos agregarlo al tablero.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Al presionar "AGREGAR al TABLERO", podemos elegir la vista donde ponerlo.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Después de eso, veremos la vista de la tarjeta. Solo presiona "AGREGAR AL TABLERO" para agregarla al tablero.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

Si vamos al tablero, nuestra tarjeta recién agregada con la temperatura y humedad transmitida por el XIAO nRF52840 Sense aparecerá.  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>  

## Más - Función de Sueño Profundo

No pude hacerlo funcionar. Si alguien tiene una solución, por favor deje un comentario. Puedes compartir tus pensamientos en [GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)

## ✨ Proyecto del Contribuidor

- Este proyecto está respaldado por el [Proyecto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a los [esfuerzos de Bruno](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237), tu trabajo será [exhibido](https://wiki.seeedstudio.com/Honorary-Contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
