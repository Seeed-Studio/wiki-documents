---
description: Grove Base Hat para Raspberry Pi
title: Grove Base Hat para Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Hat_for_Raspberry_Pi
sku: 103030275
last_update:
  date: 12/29/2025
  author: Brandy
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg)

Hoy en día, la serie Grove de sensores, actuadores y pantallas ha crecido hasta convertirse en una gran familia. Cada vez más módulos Grove se unirán a todo el ecosistema Grove en el futuro. Vemos que Grove ayuda a makers, ingenieros, profesores, estudiantes e incluso artistas a construir, hacer, crear... Siempre sentimos que es nuestra responsabilidad hacer que el módulo Grove sea compatible con más plataformas. Ahora te traemos el Grove Base Hat para Raspberry Pi y [Grove Base Hat para Raspberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html), en otras palabras, le traemos a la Raspberry Pi todo el Sistema Grove.

El Grove Base Hat para Raspberry Pi proporciona puertos Digital/Analógico/I2C/PWM/UART para satisfacer todas tus necesidades. Con la ayuda del MCU integrado, un ADC de 12 bits y 8 canales también está disponible para Raspberry Pi.

Francamente hablando, son aproximadamente 60 módulos Grove los que soportan el Grove Base Hat para Raspberry Pi ahora. Sin embargo, continuaremos agregando nuevos módulos compatibles, cuanto más uses, más Grove se agregará.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Soporta Raspberry Pi 2/3B/3B+/4/Zero
- MCU integrado
- ADC de 12 bits
- Puerto Grove de múltiples tipos  

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V|
|MCU|STM32/MM32|
|ADC|12 bits 8 canales|
|Puerto Grove|    6 Digital <br />4 Analógico <br /> 3 I2C <br /> 1 PWM  <br /> 1UART|
|Bus de comunicación Raspberry pi|I2C|
|Dirección I2C|0x04/0x08|

:::caution
El voltaje de operación es 3.3V, por favor no ingreses más de 3.3V, de lo contrario puede dañar la Raspberry Pi. Además, este hat no puede funcionar con módulos Grove de 5V a través del puerto Grove, por favor usa módulos Grove compatibles con 3.3V.
:::

## Descripción General del Hardware

### Distribución de Pines

**Descripción General**

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/overview.jpg)

**GPIO**

La misma distribución de pines que la Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/1.jpg)

**PWM(modulación por ancho de pulso)**

El Puerto PWM Grove se conecta al pin GPIO/BCM 12(PWM0) y al pin GPIO/BCM 13(PWM1), que es el pin PWM de hardware de Raspberry Pi, además, puedes usar todos los pines GPIO como pin PWM por software.

:::note
0- Todos los números de pin de la capa de serigrafía junto al puerto Grove son números de pin BCM. La diferencia entre los pines BCM y los pines físicos por favor consulta [aquí](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

1- Comparado con el PWM de hardware, el PWM por software no es tan preciso y tendrá problemas en altas frecuencias.

2- El pin GPIO/BCM 18 también está marcado como PWM0, en realidad el GPIO/BCM 12 y el GPIO/BCM 18 comparten el mismo canal PWM, por lo que no pueden configurarse a diferentes velocidades.

3- La salida del conector de audio también usa PWM 0 y PWM 1, por lo que no puedes tener salida de audio en ese conector y usar los PWMs al mismo tiempo.
:::

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/3.jpg)

**UART**

El puerto UART Grove se conecta al GPIO14(UART0 TX) y GPIO15(UART0 RX). UART se usa comúnmente en la Pi como una forma conveniente de controlarla a través del GPIO, o acceder a los mensajes de arranque del kernel desde la consola serie (habilitada por defecto). También se puede usar como una forma de interfaz con un Arduino, ATmega con bootloader, ESP8266, etc con tu Pi.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/2.jpg)

**Digital**

Hay 6 conectores Grove digitales en esta placa, normalmente el cable amarillo (que se conecta al pin superior del conector Grove de 4 pines) del cable Grove es el cable de señal, por lo que nombramos los puertos Grove digitales **D5/D16/D18/D22/D24/D26**.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/4.jpg)

**Analógico**

Como sabemos, no hay ADC en la Raspberry Pi, por lo que no puede funcionar con sensores analógicos directamente. Ahora con la ayuda del MCU integrado STM32, el Grove base hat puede funcionar como un ADC externo de 12 bits, lo que significa que puedes usar sensores analógicos con tu Raspberry Pi. Aún más agradable es que no uno sino cuatro conectores Grove analógicos están disponibles.

El sensor analógico ingresa el voltaje analógico al ADC de 12 bits. Después de que el ADC convierte los datos analógicos a datos digitales, ingresa los datos digitales a la Raspberry Pi a través de la interfaz I2C.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/5.jpg)

**I2C**

Hay tres puertos I2C disponibles en esta placa, todos se conectan directamente al pin I2C de la Raspberry. Puedes considerar esta parte como un hub I2C. La mayoría de los nuevos módulos Grove de Seeed tienen interfaz I2C, puedes encontrar que esos tres puertos son extremadamente útiles.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/7.jpg)

**SWD**

Usamos el puerto SWD para grabar el firmware a este hat. Además, puedes ver 3 pines GPIO en esta sección, es decir, **pin 9/pin 10/pin 11**. Esos tres pines no son usados por ningún puerto Grove, eres libre de usarlos sin preocuparte por conflictos de pines.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/6.jpg)

**Grove Base Hat para Raspberry Pi Vs. GrovePi+**

| Parámetro                   | [Grove Base Hat para Raspberry Pi](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/es/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Voltaje de Trabajo          | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Puertos Grove               | 6 x Digital(3.3V); 4 x Analógico(3.3V) ; 3 x I2C(3.3V); 1 x PWM(3.3V) ; 1 x RPISER(UART) conecta a Raspberry Pi(3.3V) ; 1 x SWD | 7 x Digital(5V); 3 x Analógico(5V) ;3 x I2C(5V) ;1 x SERIAL: Conecta a ATMEGA328P D0/1(5V) ; 1 x RPISER: Conecta a Raspberry Pi(3.3V) ;1 x ISP |
| Grove-Digital               | Conecta a Raspberry Pi directamente                                                                               | Conecta a pines digitales ATMEGA328P y transfiere a señal I2C, luego a través de convertidor de nivel a Raspberry Pi            |
| Grove-Analógico             | Conecta a STM32F030F4P6(ADC 12bit) y luego transfiere a señal I2C, enruta a Raspberry Pi directamente            | Conecta a pines analógicos ATMEGA328P(ADC 10bit) y luego transfiere a señal I2C, luego a través de convertidor de nivel a Raspberry Pi |
| Grove-I2C                   | Conecta a Raspberry Pi directamente                                                                               | Conecta a través de convertidor de nivel a Raspberry Pi                                                                         |
| Grove-PWM                   | Conecta a Raspberry Pi directamente                                                                               | NA                                                                                                                               |
| RPISER                      | Conecta a Raspberry Pi directamente                                                                               | Conecta a Raspberry Pi directamente                                                                                              |
| SERIAL                      | NA                                                                                                                | Conecta a pines digitales ATMEGA328P D0/D1 y transfiere a señal I2C, luego a través de convertidor de nivel a Raspberry Pi     |
| SWD                         | Graba firmware a STM32F030F4P6                                                                                    | NA                                                                                                                               |
| ISP                         | NA                                                                                                                | Graba firmware a ATMEGA328P                                                                                                      |
| Pines del Conector Raspberry Pi | 40                                                                                                                | 26                                                                                                                               |

## Primeros Pasos

### Hardware

#### Materiales requeridos

-- [Raspberry Pi x1](https://www.seeedstudio.com/Raspberry-Pi-3-Model--p-3037.html)  
-- Grove Base Hat para Raspberry Pi x1  
-- Módulo Grove

- **Paso 1.** Conecta el Grove Base Hat para Raspberry Pi en la Raspberry Pi.

- **Paso 2.** Conecta el módulo Grove en el puerto Grove correspondiente.

- **Paso 3.** Alimenta la Raspberry Pi con cable micro-usb.

:::caution
Recomendamos que enciendas las Raspberry Pis después de que todas las conexiones de hardware estén completas. Por favor, no conectes en caliente el módulo sensor, de lo contrario la Raspberry Pi puede fallar.
:::

### Software

:::caution
Actualmente, esta placa está disponible en dos versiones en el mercado: la versión STM32 (V1.1) y la versión MM32 (V1.0). La versión de envío actual es la versión STM32.

Si experimentas problemas usando el Grove Base Hat para Pi con la librería `grove.py`, por favor verifica la versión de tu placa:  

1. **Si es la versión STM32**, la dirección I2C es `0x04`. Necesitas cambiar la dirección I2C en `/home/username/.local/lib/python3.9/site-packages/adc.py` a `0x04`.  
2. **Si es la versión MM32**, la dirección I2C es `0x08`. Necesitas cambiar la dirección I2C en `/home/username/.local/lib/python3.9/site-packages/adc.py` a `0x08`.  

:::

En esta sección introduciremos cómo instalar la librería **seeed grove.py** y cómo usar los puertos I2C, PWM, Digital y analógico del Grove Base Hat para Raspberry Pi.

:::tip
Si no sabes cómo usar una raspberry pi, por favor revisa [aquí](https://www.raspberrypi.org/documentation/) antes de comenzar.
:::

#### Arquitectura

Para operar sensores grove, grove.py depende de muchas librerías de interfaz de hardware como mraa/smbus2/rpi.gpi/rpi_ws281x.

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>

#### Instalación

:::tip
Un entorno virtual es actualmente la forma más estable y recomendada para replicar en Bookworm.
:::

##### Instalar Dependencias

**Agregar repositorio**

```linux
echo "deb https://seeed-studio.github.io/pi_repo/ stretch main" | sudo tee /etc/apt/sources.list.d/seeed.list
```

**Agregar clave GPG pública**

```linux
curl https://seeed-studio.github.io/pi_repo/public.key | sudo tee /etc/apt/trusted.gpg.d/seeed.gpg > /dev/null
sudo apt update
```

**Instalar dependencias subyacentes (global está bien)**

```linux
# Optional: Seeed binary package (not needed for most sensors)
sudo apt install libbmi088 libbma456
# Required: Python layer dependencies
pip install smbus2 pyserial seeed-python-dht   # DHT DHT series required
```

**Habilitar interfaz I2C**

```linux
sudo raspi-config
```

- Selecciona Interfacing Options>I2C>Yes>Ok>Finish
- Habilita la interfaz I2C

**Instalar paquetes requeridos**
:::tip
En la última versión de Python3, se recomienda usar *virtualenv* para gestión aislada de paquetes.
:::

:::tip
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**. La siguiente instrucción funciona en Bookworm OS.
:::

<Tabs>

<TabItem value="env" label="entorno virtual" default>

```linux
# Create once
mkdir ~/grove_env && cd ~/grove_env
python3 -m venv --system-site-packages env
# From now on, you need to run this first every time you open the terminal.
source ~/grove_env/env/bin/activate 
```

</TabItem>
</Tabs>




##### Instalar grove.py

Para principiantes o solo usuarios de librería, por favor instala con el método en línea.

- Instalación automática de dependencias y despliegue de librería.
- Rápido para comenzar, no se requiere operación manual.

Para desarrolladores o usuarios avanzados, por favor instala dependencias y luego instala grove.py con código fuente.

- Incluye el repositorio completo de `grove.py`, código fuente, ejemplos y documentación
- Adecuado para ver código fuente y ejemplos, modificar funciones de librería

<Tabs>
<TabItem  value="Beginner" label="Para principiantes o usuarios de librería" default>

Para instalar en el entorno global, puedes escribir el siguiente comando:

```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

Si quieres instalar en un entorno virtual, primero activa tu virtualenv y escribe el siguiente comando:

```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | bash -s -- --user-local --bypass-gui-installation
```

</TabItem>
<TabItem  value="Developer" label="Para desarrolladores o usuarios avanzados" default>




Para instalar en el entorno global, puedes escribir el siguiente comando:

```linux
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

Si quieres instalar en un entorno virtual, primero activa tu virtualenv y escribe el siguiente comando:

```linux
# Execute in a virtual environment
cd ~/grove_env
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
pip3 install .
```

</TabItem>
</Tabs>

:::note

 Debido a actualizaciones en la Raspberry Pi, el script de instalación de un clic es relativamente antiguo y puede no funcionar para instalación de un clic. Se recomienda usar el segundo método - el método de código fuente más estable para descargar la librería Grove.

:::

**Plantilla General para Ejecutar Rutinas (Cada Vez que se Abre una Nueva Terminal)**

Entorno virtual
```linux
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
python grove_xxx.py          # xxx = Module Name
```

Entorno global
```linux
 grove_xxx.py          # xxx = Module Name
```

### Uso

Ahora puedes usar el Grove Base Hat para Raspberry Pi con docenas de módulos Grove, escribe el comando **grove_** y presiona la tecla ++tab++ para verificar [la lista de Grove soportados](https://github.com/Seeed-Studio/grove.py/tree/master/doc).

```linux
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
grove_loudness_sensor
grove_mech_keycap
grove_mini_pir_motion_sensor
grove_moisture_sensor
grove_multi_switch
grove_multi_switch_poll
grove_oled_display_128x64
grove_optical_rotary_encoder
grove_piezo_vibration_sensor
grove_pwm_buzzer
grove_recorder_v3_0
grove_relay
grove_rotary_angle_sensor
grove_round_force_sensor
grove_ryb_led_button
grove_servo
grove_slide_potentiometer
grove_sound_sensor
grove_step_counter_bma456
grove_switch
grove_temperature_humidity_bme680
grove_temperature_humidity_sht31
grove_temperature_sensor
grove_thumb_joystick
grove_tilt_switch
grove_time_of_flight_distance
grove_touch_sensor
grove_ultrasonic_ranger
grove_uv_sensor
grove_water_sensor
grove_ws2813_rgb_led_strip
```

Luego te mostraremos cómo usarlos según el tipo de puerto.

**Puerto Digital**

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

Tomaremos el [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) como ejemplo para introducir el puerto Digital.

*Diagrama de conexión de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

Escribe el siguiente comando `grove_ultrasonic_ranger 5 6` en la interfaz de línea de comandos.

```python
pi@raspberrypi:~$  grove_ultrasonic_ranger 5 6
Detecting distance...
6.979909436456088 cm
7.966469074117726 cm
12.451204760321255 cm
15.184797089675378 cm
17.429220265355603 cm
18.73230112010035 cm
20.717752390894397 cm
19.83807004731277 cm
17.3059003106479 cm

^CTraceback (most recent call last):
  File "/usr/local/bin/grove_ultrasonic_ranger", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_ultrasonic_ranger')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt

```

Cuando cambies la distancia entre el Grove - Ultrasonic Ranger y el objeto objetivo, el valor de medición cambiará en consecuencia.
Presiona ++ctrl+c++ para salir.

:::caution
Para la mayoría de módulos grove, necesitas agregar el parámetro de número de pin, como `grove_ultrasonic_ranger 5 6`, **5** y **6** son los pines GPIO/BCM. Sin embargo, puedes haber notado que en el primer ejemplo `grove_pwm_buzzer`, no agregamos un parámetro después del comando. Esto es porque el puerto PWM y el puerto I2C no requieren parámetros de número de pin. Puedes encontrar el número de pin serigrafiado justo al lado del socket Grove.
:::

**Puerto Analógico**

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

Tomaremos el [Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html) como ejemplo para introducir el puerto Analógico.

*Diagrama de conexión de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

Escribe el siguiente comando `grove_air_quality_sensor_v1_3 0 1` en la interfaz de línea de comandos.

```python
pi@raspberrypi:~$  grove_air_quality_sensor_v1_3 0 1
Detecting ...
62, Air Quality OK.
63, Air Quality OK.
61, Air Quality OK.
61, Air Quality OK.
59, Air Quality OK.
62, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
59, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.

57, Air Quality OK.
^CTraceback (most recent call last):
  File "/usr/local/bin/grove_air_quality_sensor_v1_3", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_air_quality_sensor_v1_3')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt

```

Puedes usar este sensor para detectar la calidad del aire. Presiona ++ctrl+c++ para salir.

:::note
Puede que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

**I2C**

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comando **solo con Python3**.
:::

Tomaremos el [Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html) como ejemplo para introducir el puerto I2C.

*Diagrama de conexión de hardware*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg)

Escribe el siguiente comando `grove_oled_display_128x64` en la interfaz de línea de comandos.

```
(env)pi@raspberrypi:~$ python grove_oled_display_128x64
```

Parece que no pasó nada, sin embargo puedes encontrar la frase más famosa del mundo cibernético si revisas tu oled.😄

:::note
Si usas la herramienta I2C para escanear la dirección I2C del módulo Grove, puedes encontrar dos o más direcciones. 0x04 es la dirección del *Grove Base Hat for Raspberry Pi*.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br></br>

:::noteChange Nota:

Debido a que los chips de la serie ST32 están agotados globalmente, los precios han aumentado varias veces y no hay una fecha de entrega clara. No tenemos más opción que cambiar al chip MM32. Los modelos de reemplazo específicos son los siguientes: STM32F030F4P6TR es reemplazado por MM32F031F6P6. Después de que el chip es reemplazado, las funciones del producto, características, métodos de uso y códigos permanecen sin cambios. Debe notarse que la versión del firmware ha cambiado, y el firmware de fábrica ha sido ajustado según diferentes chips. Si necesitas volver a grabar el firmware, por favor descarga el firmware correspondiente al chip.
:::

## Recursos

- **[Zip]** [Archivos Eagle de Grove Base Hat para Raspberry Pi](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip)

- **[Zip]** [Librería Seeed Grove.py](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [STM32F030F4P6TR-Firmware](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[Zip]** [MM32F031F6P6-Firmware](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_firmware.zip)

- **[PDF]** [Hoja de Datos STM32](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_Datasheet.pdf)

## Proyecto

Este es el video de introducción de este producto.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
