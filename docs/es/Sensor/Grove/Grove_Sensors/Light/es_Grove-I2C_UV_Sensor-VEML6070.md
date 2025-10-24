---
description: Grove - Sensor UV I2C (VEML6070)
title: Grove - Sensor UV I2C (VEML6070)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-I2C_UV_Sensor-VEML6070
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/perspective.jpg" /></div>

El Grove - Sensor UV I2C (VEML6070) es un sensor avanzado de luz ultravioleta (UV) con interfaz de protocolo I2C. La radiación ultravioleta (UV) es radiación electromagnética con una longitud de onda de 10 nm a 400 nm, más corta que la de la luz visible pero más larga que los rayos X. Este sensor detecta luz de 320-410nm de manera más efectiva, y convierte la intensidad de la luz UV solar en datos digitales.

Este módulo está basado en el VEML6070, que tiene sensibilidad lineal a la luz UV solar y es fácilmente ajustable mediante una resistencia externa.

Además, la función de reconocimiento activo (ACK) con configuración de ventanas de umbral permite al sensor UV enviar un mensaje de alerta UVI. Bajo una condición de UVI solar fuerte, la señal ACK inteligente puede implementarse fácilmente mediante programación de software.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Excelente rendimiento de medición de radiación UV bajo exposición prolongada a UV solar
- Excelente sensibilidad UV y linealidad
- Excelente compensación de temperatura
- Alta resolución de detección dinámica
- Soporte para función de reconocimiento (ACK)

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Rango de sensibilidad espectral|320 ~ 410 nm|
|Sensibilidad Pico|355 nm|
|Sensibilidad UVA|5 μW/cm2/paso (típico) |
|Interfaz|I2C|
|Dirección I2C|0x38(Data LSB) / 0x39(Data MSB)|

:::caution
        En realidad, este sensor tiene 3 direcciones I2C, cada dirección
:::

## Aplicaciones típicas

- Indicador UV solar
- Producto portátil cosmético / deportivo al aire libre
- Productos de consumo

## Descripción general del hardware

### Distribución de pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out_back.jpg" /></div>

## Plataformas compatibles

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

| Seeeduino V4.2 | Base Shield | Grove - I2C UV Sensor (VEML6070) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - I2C UV Sensor (VEML6070) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/connect.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove   | Grove - I2C UV Sensor (VEML6070) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V      | Rojo               | VCC |
| SDA            | Blanco             | SDA |
| SCL            | Amarillo           | SCL |

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Seeed_VEML6070](https://github.com/Seeed-Studio/Seeed_VEML6070) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Seeed_VEML6070 --> INT_mode**.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_1.jpg" /></div>

    2. Ábrelo en tu computadora haciendo clic en **INT_mode.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_VEML6070-master\examples\INT_mode**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_2.jpg" /></div>

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "Seeed_VEML6070.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

VEML6070 sensor;

char *UV_str[]={"low level","moderate level","high_level","very high","extreme"};

err_t read_UV()
{
    err_t ret=NO_ERROR;
    u16 step;
    sensor.wait_for_ready();
    CHECK_RESULT(ret,sensor.read_step(step));
    SERIAL.print("UV step = ");
    SERIAL.println(step);
    RISK_LEVEL level=sensor.convert_to_risk_level(step);
    SERIAL.print("UV level is ");
    SERIAL.println(UV_str[level]);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    return ret;
}


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    delay(1000);
    if(sensor.init())
    {
      SERIAL.println("init failed!!!");
    }
    /*threshold is 145 steps*/
    /*enable*/
    sensor.set_interrupt(INT_145_STEP,ENABLE);
}


void loop()
{
    if(read_UV())
    {
      SERIAL.print("read UV sensor failed!!");
    }
    //sensor.enable();
    //sensor.disable();
    delay(1000);
}
```

:::note
**Hay 2 demos en la biblioteca:**  
**basic_demo.ino**
        >Este ejemplo puede obtener el índice UV y el nivel UV desde el puerto serie. Sondeo de datos.

**INT_mode.ino**  
        >Hay un pad INT en el módulo sensor que se conecta al pin ACK del VEML6070. Puedes establecer el umbral UV por 102 pasos o 145 pasos (solo dos opciones). El pin INT emite bajo cuando el valor UV supera el límite. Puedes conectar el pin INT a un pin de interrupción del host, para mejorar la eficiencia de la operación del programa.  
:::

:::caution
El archivo de biblioteca puede ser actualizado. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube el demo. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
Si todo va bien, cuando uses luz UV para iluminar este módulo, verás información como:
:::

```
4serial start!!
cmd reg=32
UV step = 20
UV level is low level
 
 
 
UV step = 125
UV level is low level
 
 
 
UV step = 511
UV level is low level

```

#### Función de Alerta

Como podemos ver en la parte de Descripción General del hardware, hay un pin ACK para que el usuario lo use como señal de interrupción. La buena noticia es que hay dos umbrales para elegir: paso 102 y paso 145, la mala es que no puedes establecer tu propio número, solo 102 y 145 son válidos. El pin ACK por defecto emite bajo, una vez que el valor UV excede el umbral que estableciste, el pin ACK emite Alto. Volvamos al código de ejemplo **INT_mode.ino**.

Línea 46, la configuración por defecto del umbral es 145, si quieres usar el 102, solo debes cambiar el código como se muestra a continuación:

```cxx title="old.ino"
sensor.set_interrupt(INT_145_STEP,ENABLE); //change this line 
```

```cxx title="modify.ino"
sensor.set_interrupt(INT_102_STEP,ENABLE); // modified
```

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor UV I2C (VEML6070)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div> |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div> |
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove - I2C UV Sensor (VEML6070) al puerto **I2C** del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/UV_Hat.jpg" /></div>

#### Software

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo e instalar grove.py en tu raspberry pi.
- **Paso 2**. Ejecuta los siguientes comandos para ejecutar el código.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_uv_sensor
```

A continuación se muestra el código de grove_uv_sensor.py.

```python
from __future__ import print_function
from grove.i2c import Bus
import time


# I2C address of the device
VEML6070_DEFAULT_ADDRESS				= 0x38

# VEML6070 Command Set
VEML6070_CMD_ACK_DISABLE				= 0x00 # Acknowledge Disable
VEML6070_CMD_ACK_ENABLE					= 0x20 # Acknowledge Enable
VEML6070_CMD_ACK_THD_102				= 0x00 # Acknowledge threshold 102 Steps
VEML6070_CMD_ACK_THD_145				= 0x10 # Acknowledge threshold 145 Steps
VEML6070_CMD_IT_1_2T					= 0x00 # Integration time = 1/2T
VEML6070_CMD_IT_1T						= 0x04 # Integration time = 1T
VEML6070_CMD_IT_2T						= 0x08 # Integration time = 2T
VEML6070_CMD_IT_4T						= 0x0C # Integration time = 4T
VEML6070_CMD_RESERVED					= 0x02 # Reserved, Set to 1
VEML6070_CMD_SD_DISABLE					= 0x00 # Shut-down Disable
VEML6070_CMD_SD_ENABLE					= 0x01 # Shut-down Enable
VEML6070_CMD_READ_LSB					= 0x38 # Read LSB of the data
VEML6070_CMD_READ_MSB					= 0x39 # Read MSB of the data

class VEML6070():
	def __init__(self, address = VEML6070_DEFAULT_ADDRESS):
		self._addr = address
		self._bus  = Bus()
		self.write_command()
	
	def write_command(self):
		"""Select the UV light command from the given provided values"""
		COMMAND_CONFIG = (VEML6070_CMD_ACK_DISABLE | VEML6070_CMD_IT_1_2T | VEML6070_CMD_SD_DISABLE | VEML6070_CMD_RESERVED)
		self._bus.write_byte(VEML6070_DEFAULT_ADDRESS, COMMAND_CONFIG)
	
	def read_uvlight(self):
		"""Read data back VEML6070_CMD_READ_MSB(0x73) and VEML6070_CMD_READ_LSB(0x71), uvlight MSB, uvlight LSB"""
		data0 = self._bus.read_byte(VEML6070_CMD_READ_MSB)
		data1 = self._bus.read_byte(VEML6070_CMD_READ_LSB)
		
		# Convert the data
		uvlight = data0 * 256 + data1
		
		return {'u' : uvlight}


def main():

	veml6070 = VEML6070()

	## Exit handlers ##
	# This function stops python from printing a stacktrace when you hit control-C
	def SIGINTHandler(signum, frame):
		raise SystemExit

	# This function lets you run code on exit, including functions from abpdrrt005pg2a5
	def exitHandler():
		print("Exiting")
		sys.exit(0)
	
	while True:
		light = veml6070.read_uvlight()
		print("UV Value: {0}".format(light['u']))
		print(" *********************************** ")
		time.sleep(1)

if __name__ == '__main__':
	main()
```

:::tip
Si todo va bien, podrás ver el siguiente resultado
:::

```python

(env)pi@raspberrypi:~ grove_uv_sensor
UV Value: 0
UV Value: 0
UV Value: 0
UV Value: 0
^CExiting

```

Puedes salir de este programa simplemente presionando `ctrl`+`c`.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - I2C UV Sensor (VEML6070) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip)

- **[Zip]** [Librería Seeed VEML6070](https://github.com/Seeed-Studio/Seeed_VEML6070/archive/master.zip)

- **[PDF]** [Hoja de Datos VEML6070](https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/VEML6070.pdf)

- **[PDF]** [Nota de Aplicación VEML6070](https://github.com/Seeed-Studio/Seeed_VEML6070/raw/master/doc/designingveml6070.pdf)

## Proyecto

Este es el Video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
