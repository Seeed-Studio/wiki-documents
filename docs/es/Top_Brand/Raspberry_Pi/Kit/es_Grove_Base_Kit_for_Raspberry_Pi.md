---
description: Kit Base Grove para Raspberry Pi
title: Kit Base Grove para Raspberry Pi
keywords:
- Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Base_Kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


## SISTEMA GROVE

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png)

Grove es un sistema de prototipado modular que consiste en una unidad base y varios módulos con conector estandarizado. La unidad base es generalmente un microprocesador que permite comunicar, procesar y controlar la entrada o salida de los módulos Grove. Cada módulo Grove individual típicamente aborda una sola función, desde un simple botón hasta un sensor de ritmo cardíaco más complejo. El conector Grove estandarizado permite al usuario ensamblar unidades Grove con un enfoque de bloques de construcción, comparado con el sistema basado en jumpers o soldadura es mucho más fácil de ensamblar o desensamblar, lo que simplifica el sistema de aprendizaje para experimentar, construir y crear prototipos.
También proporcionamos Convertidor Grove a Pin Header o Grove Base HAT disponible para variedad de plataformas de desarrollo para aquellos que quieren usar módulos de sensores y actuadores grove sin la Placa de Desarrollo del Sistema Grove.

Los usuarios del sistema Grove necesitan tener al menos algunos conocimientos básicos de electrónica, de lo contrario necesitas pasar por este tutorial básico para aprender algunas operaciones básicas en el sistema Grove, la primera parte de este tutorial consiste en una lista de información básica sobre los componentes incluidos en el kit de inicio, seguido por la configuración básica del Arduino IDE para Seeeduino Lotus. Luego, las 11 sesiones de tutorial proporcionan la operación básica en cada componente individual en el kit de inicio y las aplicaciones combinando múltiples módulos juntos, lo que da al aprendiz algunas ideas y conocimiento básico sobre conectar y codificar con el sistema Grove.

## KIT BASE GROVE PARA RASPBERRY PI

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/kit.jpg)

El kit de inicio Grove contiene un Grove Base Hat (para Raspberry Pi) y 10 módulos Grove. La información detallada se lista a continuación.

### Detalle del Producto

#### Grove Base Hat

**[Grove Base Hat para Raspberry Pi](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)

Hoy, la serie grove de sensores, actuadores y pantallas ha crecido hasta convertirse en una gran familia. Más y más módulos grove se unirán al ecosistema Grove en el futuro. Vemos que Grove ayuda a makers, ingenieros, profesores, estudiantes e incluso artistas a construir, hacer, crear... Siempre sentimos que es nuestra responsabilidad hacer que el módulo Grove sea compatible con más plataformas. Ahora te traemos el Grove Base Hat para Raspberry Pi y Grove Base Hat para Raspberry Pi Zero, en otras palabras, traemos a la Raspberry Pi el Sistema Grove.

El Grove Base Hat para Raspberry Pi proporciona puerto Digital/Analógico/I2C/PWM/UART para satisfacer todas tus necesidades. Con la ayuda del MCU integrado, un ADC de 12 bits y 8 canales también está disponible para Raspberry Pi.

**Características**

- Soporta Raspberry 2/3B/3B+/Zero
- MCU integrado
- ADC de 12 bits
- Puerto Grove de múltiples tipos

**Descripción General del Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pi_pinout.jpg)

GPIO: La misma distribución de pines que la raspberry pi.

PWM: El Puerto PWM Grove se conecta al pin GPIO/BCM pin12(PWM0) y GPIO/BCM pin13(PWM1), que es el pin PWM de hardware de Raspberry Pi, además, puedes usar todos los pines GPIO como pin PWM por software.

:::note

- Todos los números de pin de la capa de serigrafía junto al puerto Grove son el número de pin BCM. La diferencia entre pines BCM y los pines físicos por favor consulta [aquí](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

- Comparado con PWM de hardware, el PWM por software no es tan preciso y tendrá problemas en altas frecuencias.

- El pin GPIO/BCM pin18 también está marcado como PWM0, en realidad el GPIO/BCM 12 y el GPIO/BCM 18 comparten el mismo canal PWM, así que no pueden configurarse a diferentes velocidades.

- La salida del conector de audio también usa PWM 0 y PWM 1, así que no puedes tener salida de audio en ese conector y usar los PWMs al mismo tiempo.

:::

UART: El puerto UART Grove se conecta al GPIO14(UART0 TX) y GPIO15(UART0 RX). UART se usa comúnmente en la Pi como una forma conveniente de controlarla sobre el GPIO, o acceder a los mensajes de arranque del kernel desde la consola serie (habilitada por defecto). También puede usarse como una forma de interfaz con un Arduino, ATmega con bootloader, ESP8266, etc con tu Pi.

Digital: Hay 6 conectores Grove digitales en esta placa, normalmente el cable amarillo (que se conecta al pin superior del conector Grove de 4 pines) del cable Grove es el cable de señal, así que nombramos el puerto Grove digital D5/D16/D18/D22/D24/D26.

Analógico: Como sabemos, no hay ADC en la Raspberry Pi, así que no puede trabajar con sensor analógico directamente. Ahora con la ayuda del MCU integrado STM32, el grove base hat puede trabajar como un ADC externo de 12 bits, lo que significa que puedes usar sensor analógico con tu Raspberry Pi. Aún más agradable es que no uno sino cuatro conectores Grove analógicos están disponibles. El sensor analógico introduce el voltaje analógico en el ADC de 12 bits. Después de que el ADC convierte los datos analógicos a datos digitales, introduce los datos digitales a la Raspberry Pi a través de la interfaz I2C.

I2C: Hay tres puertos I2C disponibles en esta placa, todos se conectan al pin I2C de la raspberry directamente. Puedes considerar esta parte como un hub I2C. La mayoría de los nuevos módulos grove de seeed tienen interfaz I2C, puedes encontrar que esos tres puertos son extremadamente útiles.

SWD: Usamos el puerto SWD para grabar el firmware a este hat. Además, puedes ver 3 pines GPIO en esta sección, es decir, pin 9/pin 10/pin 11. Esos tres pines no son usados por ningún puerto Grove, eres libre de usarlos sin preocuparte por conflictos de pines.

#### Módulos Grove

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer.jpg)

Este módulo utiliza un zumbador piezoeléctrico como componente principal, puede producir un tono agudo cuando está conectado a una salida digital y el nivel lógico está configurado en Alto, de lo contrario puede producir varios tonos según las frecuencias generadas desde la salida PWM analógica que está conectada a él. (nota: el rango de frecuencia que el oído humano normal puede distinguir está entre 20 Hz y 20kHz.)

**[Grove - Botón LED Rojo](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDButton.jpg)

El Grove - Botón LED está compuesto por Grove - Botón Amarillo, Grove - Botón LED Azul y Grove - Botón LED Rojo. Este botón es estable y confiable con una vida útil larga de 100 000 veces. Con el LED incorporado, puedes aplicarlo a muchos proyectos interesantes, es realmente útil usar el LED para mostrar el estado del botón.

**[Grove - Sensor de Luz](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lightsensor.jpg)

El Grove - Sensor de luz integra una foto-resistencia (resistor dependiente de la luz) para detectar la intensidad de la luz. La resistencia de la foto-resistencia disminuye cuando la intensidad de la luz aumenta. Un chip OpAmp dual LM358 a bordo produce voltaje correspondiente a la intensidad de la luz (es decir, basado en el valor de resistencia). La señal de salida es un valor analógico, mientras más brillante sea la luz, mayor será el valor.

**[Grove - Sensor de Humedad](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Moisture_sensor.jpg)

Este Sensor de Humedad puede ser usado para detectar la humedad del suelo o juzgar si hay agua alrededor del sensor, permitiendo que la planta en tu jardín pueda pedir ayuda humana cuando tenga sed. Este sensor es muy fácil de usar, simplemente puedes insertarlo en el suelo y leer los datos. Con este sensor, puedes hacer un pequeño proyecto que puede permitir que la planta te envíe un mensaje como "Tengo sed ahora, por favor dame un poco de agua."

**[Grove - Sensor de movimiento PIR mini](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/miniPIR.jpg)

Grove - sensor de movimiento PIR mini te permite detectar movimiento, usualmente movimiento humano en su rango. Simplemente conéctalo al Grove - Base shield y prográmalo, cuando alguien se mueva en su rango de detección, el sensor producirá una salida HIGH en su pin SIG.

**[Grove - Servo](https://www.seeedstudio.com/Grove-Servo-p-1241.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Servo.jpg)

Grove - Servo es un motor DC con engranajes y sistema de retroalimentación. Se usa en el mecanismo de conducción de robots. El módulo es un producto adicional para los amantes de Grove. Regulamos el servo de tres cables en un conector estándar Grove. Ahora puedes conectarlo y usarlo como un módulo Grove típico, sin el desorden de cables puente.

**[Grove - Sensor de Temperatura y Humedad (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/DHT11.jpg)

Este sensor de temperatura y humedad proporciona una salida digital pre-calibrada. Un elemento sensor capacitivo único mide la humedad relativa y la temperatura se mide mediante un termistor de coeficiente de temperatura negativo (NTC). Tiene excelente confiabilidad y estabilidad a largo plazo. Ten en cuenta que este sensor no funcionará para temperaturas por debajo de 0 grados.

**[Grove - Relé](https://www.seeedstudio.com/Grove-Relay-p-769.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Relay.jpg)

El módulo Grove-Relé es un interruptor digital normalmente abierto. A través de él, puedes controlar circuitos de alto voltaje con bajo voltaje, digamos 5V en el controlador. Hay un LED indicador en la placa, que se encenderá cuando los terminales controlados se cierren.

**[Grove - Medidor Ultrasónico](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Ultrasonic.jpg)

Este Grove - medidor ultrasónico es un módulo de medición de distancia sin contacto que funciona a 40KHz. Cuando proporcionamos una señal de pulso disparador con más de 10uS a través del pin de señal, el Grove_Ultrasonic_Ranger emitirá 8 ciclos de nivel de ciclo de 40kHz y detectará el eco. El ancho de pulso de la señal de eco es proporcional a la distancia medida. Aquí está la fórmula: Distancia = tiempo alto de señal de eco * Velocidad del sonido (340M/S)/2. El trig y la señal de eco del Grove_Ultrasonic_Ranger comparten 1 pin SIG.

**[Grove - LCD 16 x 2 (Blanco sobre Azul)](https://www.seeedstudio.com/Grove-16-x-2-LCD-White-on-Blu-p-3196.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd.jpg)

Este módulo Grove – LCD 162 es una pantalla LCD de 16 Caracteres 2 Líneas, utiliza la interfaz de bus I2C para comunicarse con la placa de desarrollo, por lo tanto esto reducirá el encabezado de pines de 10 a 2 lo cual es muy conveniente para el sistema Grove. Este módulo de pantalla LCD también soporta caracteres personalizados, puedes crear y mostrar símbolos de corazón o figuras de palitos en este módulo LCD a través de una configuración de codificación simple.

## PRIMEROS PASOS

### Requisitos Mínimos

- cable micro USB
- Raspberry Pi
- tarjeta SD
- Grove Base Kit para Raspberry Pi

### Tutorial Básico

#### Configuración básica del IDE de Arduino

#### Cómo grabar una imagen de Raspbian

**1. Descarga de Raspbian Stretch**

Descarga [Raspbian Stretch](https://www.raspberrypi.org/downloads/raspbian/) desde el sitio web oficial de Raspberry Pi y selecciona la versión "with desktop and recommended software".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss0.png)

**2. Win32 Disk Imager**

- Descarga el [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/) desde la página del Proyecto Sourceforge como archivo instalador, y ejecútalo para instalar el software.

- Inserta la tarjeta SD en tu lector de tarjetas SD y conéctala a tu PC.

- Ejecuta la utilidad Win32DiskImager desde tu escritorio o menú.

- En el cuadro de dispositivo, selecciona la letra de unidad correspondiente de la tarjeta SD. Ten cuidado de seleccionar la unidad correcta: ¡si eliges la unidad incorrecta podrías destruir los datos del disco duro de tu computadora! Si estás usando una ranura de tarjeta SD en tu computadora, y no puedes ver la unidad en la ventana de Win32DiskImager, intenta usar un adaptador SD externo.

- Haz clic en 'Write' y espera a que se complete la escritura.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss1.png)

- Completado.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss2.png)

- Sal del grabador y expulsa la tarjeta SD.

#### Configuración Básica

**Conexión inalámbrica y SSH**

**1.** Crea un archivo llamado "wpa_supplicant.conf" en la carpeta /boot, y copia el siguiente código.

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
El nombre y contraseña del Wi-Fi deben ser los mismos que los de tu Wi-Fi local al que está conectada tu PC (asegúrate de que tu PC y Raspberry Pi estén en la misma LAN).
:::

**2.** Crea un archivo en blanco llamado "ssh" en la carpeta /boot.

**3.** Inserta la tarjeta SD con Raspbian en la Raspberry Pi

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** Conecta la Raspberry Pi a la fuente de alimentación y enciéndela.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** Abre putty para conectar la PC a la Raspberry Pi.

Descargar putty： [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
Nombre de usuario predeterminado : pi
Contraseña predeterminada : raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**Configuración VNC**

**1.** Abre raspi-config escribiendo el siguiente comando en la terminal.

```bash
sudo raspi-config
```

Presiona la flecha hacia abajo hasta 5 Opciones de interfaz y presiona "enter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

Presiona la flecha hacia abajo hasta P3 VNC y presiona "enter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

Selecciona "Yes" para habilitarlo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

Selecciona "Ok".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** Instalar VNC Viewer

Descargar [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

Abre VNC Viewer e ingresa la dirección IP de Raspberry Pi. Puedes encontrar la dirección IP escribiendo el comando `ifconfig` en la terminal de Raspberry Pi (o puedes ingresar raspberrypi.local).

:::note
Si usas raspberrypi.local para iniciar sesión en tu Pi, debes asegurarte de que solo haya una Raspberry Pi en uso en tu LAN.
:::

Ingresa el nombre de usuario y contraseña predeterminados, ¡y ahora puedes acceder al escritorio remoto de Raspberry Pi!

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

¡Éxito!

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

**Configuración del Base Hat**

**1.** Apagar la Raspberry Pi

```bash
sudo shutdown -h now
```

Conecta el Grove Base Hat para Raspberry Pi en la Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pi&hat.jpg)

**2.**Enciende la Raspberry Pi con el cable micro-usb para habilitar I2C

Abre raspi-config escribiendo el siguiente comando en la terminal.

```bash
sudo raspi-config
```

Presiona la flecha hacia abajo hasta 5 interfacing Options y presiona "enter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

Presiona la flecha hacia abajo hasta P5 I2C y presiona "enter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss13.png)

Selecciona "Yes" para habilitarlo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss14.png)

Selecciona "Ok".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss15.png)

Selecciona "Finish" para guardar los cambios.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss16.png)

**3.** Instalación con un clic, inicio rápido, como quieras llamarlo, con el único comando a continuación.

```bash
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss12.PNG)

si todo va bien, verás el siguiente aviso.

```bash
Successfully installed grove.py-0.6
#######################################################
Lastest Grove.py from github install complete   !!!!!
#######################################################
```

**4.** Además de la instalación con un clic, también puedes [instalar todas las dependencias](https://github.com/Seeed-Studio/grove.py#installation)).

**5.** Clona la biblioteca del repositorio python.py más reciente.

```bash
git clone https://github.com/Seeed-Studio/grove.py
```

### Grove – Demostración de botón LED

Después de toda la configuración básica de Raspberry Pi, ahora podemos ejecutar el código de demostración del LED. Nota: Debes completar los pasos anteriores primero para poder continuar con lo siguiente.

**Conexión de Hardware**

Paso 1: Conecta el Grove - Red LED Button al puerto D5 del Base Hat

Paso 2: Inserta el Base Hat en la Raspberry Pi

Paso 3: Conecta la Raspberry Pi a la fuente de alimentación mediante un cable micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDbutton.png)

**Subir Código**

Paso 1: Ejecuta los siguientes comandos para crear un archivo python

```bash
cd grove.py
nano example.py
```

Paso 2: Copia el siguiente código en el archivo python

:::caution
 Por favor asegúrate de que el editor de texto esté en formato unix.
:::

```python
#!/usr/bin/env python

import time
from grove.grove_ryb_led_button import GroveLedButton

def main():
    ledbtn = GroveLedButton(5)
    
    while True:
        ledbtn.led.light(True)
        time.sleep(1)
        
        ledbtn.led.light(False)
        time.sleep(1)

if __name__ == '__main__':
    main()
```

Paso 3: ejecutar el programa

```bash
sudo chmod +x  example.py
sudo ./example.py
```

Cuando hagas un solo clic en el botón LED, el LED cambiará al modo "ON", "OFF" si lo mantienes presionado. Si haces doble clic en el botón LED, el LED parpadeará.

```bash
pi@raspberrypi:~/grove.py $ sudo ./example.py
turn on  LED
turn on  LED
turn off LED
turn on  LED
blink    LED
^CTraceback (most recent call last):
  File "./example.py", line 17, in <module>
    main()
  File "./example.py", line 14, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

**Explicación del código de parpadeo**

En python, como los módulos se referencian entre sí, diferentes módulos pueden tener diferentes definiciones de "**main**", y solo puede haber un programa de entrada cada vez. La selección del programa de entrada depende del valor de **name**. "if__name__=='**main**'" es igual, significa que es la entrada de la emulación de python.

```python
if __name__ == '__main__':
    main()
```

## Kit Base Grove para Raspberry Pi

Ahora, ¿estás listo para explorar el sistema Grove? Hemos diseñado 8 tutoriales para que comiences con algunos módulos básicos de Grove. Esta sección te introduce cómo los módulos pueden combinarse y aplicarse en aplicaciones de la vida real.

### Prerrequisito

Para comenzar con el tutorial de Grove, necesitas conocimientos fundamentales de Raspberry Pi y el lenguaje de programación Python. Por favor, asegúrate de haber completado exitosamente el tutorial de configuración básica anterior y terminado la demostración de parpadeo LED y asegurar que funcione completamente con tu Raspberry Pi con el Hat Base Grove.

### Resultado de aprendizaje

- Ser capaz de usar el Hat Base Grove para construir aplicaciones con módulos Grove.
- Ser capaz de demostrar cada componente del Kit de Inicio Grove y utilizar el módulo relevante en tus propios proyectos después de este tutorial
- Ser capaz de identificar el tipo de módulos incluidos en este Kit y sus aplicaciones.
- Entender la diferencia entre la señal analógica y digital.

### Lección 1: Zumbador

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer.jpg)

**Objetivo**

Usar el zumbador para generar algo de ruido y también configurar frecuencia específica para producir algunos tonos.

**Requerimiento de hardware**

Auto-preparar

- cable micro-USB
- Raspberry Pi 3 Model B
- Computadora

Incluido en el kit

- Hat Base Grove
- cable Grove
- Grove – Zumbador

**Conexión de hardware**

**Paso 1.** Usa el cable Grove para conectar Grove - Zumbador al puerto PWM del Hat Base e inserta el Hat en la Raspberry Pi.

**Paso 2.** Conecta la Raspberry Pi a la fuente de alimentación mediante un cable micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/buzzer&pi.jpg)

**Programación de software**

:::note
Por favor, asegúrate de haber clonado la biblioteca del repositorio python.py en tu Raspberry Pi.
:::

Paso 1: Ejecuta los siguientes comandos para crear un archivo python

```bash
cd grove.py
nano lesson_1.py
```

Paso 2: Copia el siguiente código

```python
#!/usr/bin/env python
import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    CHORDS = [upmBuzzer.BUZZER_DO, upmBuzzer.BUZZER_RE, upmBuzzer.BUZZER_MI, 
        upmBuzzer.BUZZER_FA, upmBuzzer.BUZZER_SOL, upmBuzzer.BUZZER_LA, 
        upmBuzzer.BUZZER_SI]
    for i in range(0, len(CHORDS)):
        buzzer.playSound(CHORDS[i], 500000)
        time.sleep(0.1)
    
    del buzzer
    print('application exiting...')

if __name__ == '__main__':
    main()
```

Paso 3: ejecutar el programa

```bash
sudo chmod +x lesson_1.py
sudo ./lesson_1.py
```

Si todo va bien, deberías notar que el zumbador está haciendo el sonido "Do Re Mi Fa Sol La Si".

### Lección 2: Botón LED Rojo

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LEDButton.jpg)

**Objetivo**

Usar Grove - Botón LED Rojo para controlar el parpadeo de los LEDs y hacer que Grove - Zumbador produzca diferentes efectos de sonido.

**Requisitos de hardware**

Preparar por cuenta propia

- cable micro-USB
- Raspberry Pi 3 Model B
- Computadora

Incluido en el kit

- Grove Base Hat
- cable Grove
- Grove - Botón LED Rojo
- Grove – Zumbador

**Conexión de hardware**

**Paso 1.** Usar cable Grove para conectar Grove - Zumbador al puerto PWM y Grove - Botón LED Rojo a D5 del Base Hat e insertar el Hat en la Raspberry Pi.

**Paso 2.** Conectar Raspberry Pi a la fuente de alimentación mediante un cable micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/Buzzer&Button.png)

**Programación de software**

:::note
Por favor asegúrate de haber clonado la biblioteca del repositorio python.py en tu Raspberry Pi.
:::

Paso 1: Ejecuta los siguientes comandos para crear un archivo python

```bash
cd grove.py
nano lesson_2.py
```

Paso 2: Copia el siguiente código

```python
#!/usr/bin/env python

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

from grove.button import Button
from grove.grove_ryb_led_button import GroveLedButton

def main():
    # Grove - LED Button connected to port D5
    button = GroveLedButton(5)
    
    # Grove - Buzzer connected to PWM port
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    def on_event(index, event, tm):
        if event & Button.EV_SINGLE_CLICK:
            print('single click')
            button.led.light(True)
            buzzer.playSound(upmBuzzer.BUZZER_DO, 500000)
            
        elif event & Button.EV_LONG_PRESS:
            print('long press')
            button.led.light(False)
            buzzer.playSound(upmBuzzer.BUZZER_DO, 1000000)
            
    button.on_event = on_event
    
    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()
```

Paso 3: ejecutar el programa

```bash
sudo chmod +x lesson_2.py
sudo ./lesson_2.py
```

:::tip
Si todo va bien, encontrarás que cuando mantienes presionado el botón LED, el LED se apagará y el zumbador emitirá un sonido largo "Do". Sin embargo, cuando lo presionas una sola vez, el LED se encenderá y el zumbador hará un sonido corto "Do".
:::

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_2.py
single click
single click
single click
long press
single click
long press
long press
Traceback (most recent call last):
  File "./lesson2.py", line 34, in <module>
    main()
  File "./lesson2.py", line 31, in main
    time.sleep(1)
KeyboardInterrupt
^Cpi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LED&Buz_demo.jpg)

### Lección 3: Sensor de Luz

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lightsensor.jpg)

**Objetivo**

En esta lección, te mostraremos cómo usar Grove - Light Sensor para controlar Grove - Servo. En este caso, el ángulo de rotación del servo varía con la intensidad de la luz.

**Requisitos de hardware**

Preparar por cuenta propia

- cable micro-USB
- Raspberry Pi 3 Model B
- Computadora

Incluido en el kit

- Grove Base Hat
- cable Grove
- Grove - Light Sensor
- Grove - Servo

**Conexión de hardware**

**Paso 1** Conecta Grove - Light Sensor al puerto A0，Grove - Servo al puerto PWM.

**Paso 2** Inserta el Base Hat en la Raspberry Pi.

**Paso 3** Conecta la Raspberry Pi a la fuente de alimentación mediante un cable micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/servo&light.png)

**Programación de software**

:::note
Por favor asegúrate de haber clonado la biblioteca del repositorio python.py en tu Raspberry Pi.
:::

Paso 1: Ejecuta los siguientes comandos para crear un archivo python

```bash
cd grove.py
nano lesson_3.py
```

Paso 2: Copia el siguiente código

```python
#!/usr/bin/env python

import time

from grove.grove_servo import GroveServo
from grove.grove_light_sensor_v1_2 import GroveLightSensor

def main():
    # Grove - Servo connected to PWM port
    servo = GroveServo(12)

    # Grove - Light Sensor connected to port A0
    sensor = GroveLightSensor(0)

    while True:
        angle = sensor.light * 180 / 1000
        print('light value {}, turn to {} degree.'.format(sensor.light, angle))
        servo.setAngle(angle)

        time.sleep(1)

if __name__ == '__main__':
    main()
```

Paso 3: ejecutar el programa

```bash
sudo chmod +x lesson_3.py
sudo ./lesson_3.py
```

Si todo va bien, el cambio de intensidad de luz resultará en diferentes ángulos de rotación del servo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/light_on&off.jpg)

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_3.py
light value 300, turn to 113 degree.
light value 80, turn to 80 degree.
light value 166, turn to 165 degree.
light value 498, turn to 132 degree.
light value 601, turn to 60 degree.
light value 200, turn to 21 degree.
light value 459, turn to 99 degree.
light value 172, turn to 173 degree.
light value 319, turn to 138 degree.
^CTraceback (most recent call last):
  File "./lesson3.py", line 23, in <module>
    main()
  File "./lesson3.py", line 20, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

### Lección 4: Sensor de Movimiento y Relé

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir+relay.jpg)
<!-- 图片链接缺失 -->
**Objetivo**

Usar el sensor de movimiento PIR mini Grove para detectar movimiento, encender la luz si viene gente.

**Requisitos de hardware**

Preparar por cuenta propia

- cable micro-USB
- Raspberry Pi 3 Model B
- Computadora

Incluido en el kit

- Grove Base Hat
- cable Grove
- sensor de movimiento PIR mini Grove
- Grove - Relé

**Conexión de Hardware**

**Paso 1** Conectar el sensor de movimiento PIR mini Grove al puerto D5, Grove - Relé al puerto D16 del Base Hat.

**Paso 2** Insertar el Base Hat en la Raspberry Pi

**Paso 3** Conectar la Raspberry Pi a la fuente de alimentación mediante un cable micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir&relay.png)

**Programación de software**

:::note
Por favor asegúrate de haber clonado la biblioteca del repositorio python.py en tu Raspberry Pi.
:::

Paso 1: Ejecuta los siguientes comandos para crear un archivo python

```bash
cd grove.py
nano lesson_4.py
```

Paso 2: Copia el siguiente código

```python
#!/usr/bin/env python

import time

from grove.grove_mini_pir_motion_sensor import GroveMiniPIRMotionSensor
from grove.grove_relay import GroveRelay

def main():
    # Grove - mini PIR motion sensor connected to port D5
    sensor = GroveMiniPIRMotionSensor(5)
    
    # Grove - Relay connected to port D16
    relay = GroveRelay(16)
    
    def on_detect():
        print('motion detected')
        
        relay.on()
        print('relay on')
        
        time.sleep(1)
        
        relay.off()
        print('relay off')
    
    sensor.on_detect = on_detect
    
    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()
```

Paso 3: ejecute el programa

```bash
sudo chmod +x lesson_4.py
sudo ./lesson_4.py
```

Si todo va bien, deberías ver el relé encenderse/apagarse una vez que detecte movimiento.

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_4.py
motion detected
relay on
relay off
motion detected
relay on
relay off
^CTraceback (most recent call last):
  File "./lesson_4.py", line 33, in <module>
    main()
  File "./lesson_4.py", line 30, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/pir_light.jpg)

### Lección 5: Sensor Ultrasónico y Relé

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra+relay.jpg)

**Objetivo**

En esta lección, usamos Grove - Ultrasonic Ranger para detectar la distancia, una vez que alguien se acerque, la luz en el Grove - Relay debería estar "ENCENDIDA".

**Requisitos de hardware**

Preparar por cuenta propia

- cable micro-USB
- Raspberry Pi 3 Model B
- Computadora

Incluido en el kit

- Grove Base Hat
- cable Grove
- Grove - Ultrasonic Ranger
- Grove - Relay

**Conexión de hardware**

**Paso 1** Conecta Grove - Ultrasonic Ranger al puerto D5, Grove - Relay al puerto D16 del Base Hat.

**Paso 2** Inserta el Base Hat en la Raspberry Pi

**Paso 3** Conecta la Raspberry Pi a la fuente de alimentación mediante un cable micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra&relay.png)

**Programación de software**

:::note
Por favor asegúrate de haber clonado la biblioteca del repositorio python.py en tu Raspberry Pi.
:::

Paso 1: Ejecuta los siguientes comandos para crear un archivo python

```bash
cd grove.py
nano lesson_5.py
```

Paso 2: Copia el siguiente código

```python
#!/usr/bin/env python

import time

from grove.grove_relay import GroveRelay
from grove.grove_ultrasonic_ranger import GroveUltrasonicRanger

def main():
    # Grove - Ultrasonic Ranger connected to port D5
    sensor = GroveUltrasonicRanger(5)
    
    # Grove - Relay connected to port D16
    relay = GroveRelay(16)
    
    while True:
        distance = sensor.get_distance()
        print('{} cm'.format(distance))
        
        if distance < 20:
            relay.on()
            print('relay on')
            
            time.sleep(1)
            
            relay.off()
            print('relay off')
            
            continue
        
        time.sleep(1)

if __name__ == '__main__':
    main()
```

Paso 3: ejecutar el programa

```bash
sudo chmod +x lesson_5.py
sudo ./lesson_5.py
```

Si todo va bien, el cambio en la intensidad de la luz resultará en diferentes ángulos de rotación del servo.

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_5.py
253.722585481 cm
253.739028141 cm
252.896341784 cm
1.20442489098 cm
relay on
relay off
4.51762100746 cm
relay on
relay off
253.985668051 cm
^CTraceback (most recent call last):
  File "./lesson_5.py", line 34, in <module>
    main()
  File "./lesson_5.py", line 31, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $ 
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ultra_light.jpg)

Ahora, compara el resultado de la lección cuatro y la lección cinco, ¿eres capaz de enumerar las ventajas y desventajas del sensor de movimiento PIR mini Grove y el sensor ultrasónico Grove?

### Lección 6: LCD

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd.jpg)

**Objetivo**

Usa la pantalla LCD de 16*2 Grove para mostrar "Hello World".

**Requisitos de hardware**

Preparar por cuenta propia

- cable micro-USB
- Raspberry Pi 3 Model B
- Computadora

Incluido en el kit

- Grove Base Hat
- cable Grove
- Grove - LCD 16*2

**Conexión de hardware**

**Paso 1** Conecta Grove - LCD 16*2 al puerto I2C del Base Hat.

**Paso 2** Inserta el Base Hat en la Raspberry Pi.

**Paso 3** Conecta la Raspberry Pi a la fuente de alimentación mediante un cable micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/LCD.png)

**Programación de software**

:::note
Por favor asegúrate de haber clonado la biblioteca del repositorio python.py en tu Raspberry Pi.
:::

Paso 1: Ejecuta los siguientes comandos para crear un archivo python

```bash
cd grove.py
nano lesson_6.py
```

Paso 2: Copia el siguiente código

```python
#!/usr/bin/env python

import time

from grove.display.jhd1802 import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) connected to I2C port
    lcd = JHD1802()

    lcd.setCursor(0, 0)
    lcd.write('hello, world!!!')

    print('application exiting...')

if __name__ == '__main__':
    main()
```

Paso 3: ejecutar el programa

```bash
sudo chmod +x lesson_6.py
sudo ./lesson_6.py
```

Deberías ver "hello, world!!!" mostrado en la pantalla LCD.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/helloworld.jpg)

Si quieres usar la pantalla LCD Grove - 16*2 para mostrar algunos otros caracteres, simplemente puedes cambiar `lcd.write('hello, world!!!')` en el código.

### Lección 7: LCD y Sensor de Temperatura y Humedad

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd+dht11.jpg)

**Objetivo**

Usa la pantalla LCD Grove - 16*2 para mostrar datos (temperatura y humedad) del Sensor de Temperatura y Humedad Grove

**Requisitos de hardware**

Preparar por cuenta propia

- cable micro-USB
- Raspberry Pi 3 Model B
- Computadora

Incluido en el kit

- Grove Base Hat
- cable Grove
- Grove - 16*2 LCD
- Grove - Sensor de Temperatura y Humedad

**Conexión de hardware**

**Paso 1** Conecta Grove - 16*2 LCD al puerto I2C，Grove - Sensor de Temperatura y Humedad al puerto D5.

**Paso 2** Inserta el Base Hat en la Raspberry Pi.

**Paso 3** Conecta la Raspberry Pi a la fuente de alimentación mediante un cable micro USB.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/DHT11&LCD.png)

**Programación de software**

:::note
Por favor asegúrate de haber clonado la biblioteca del repositorio python.py en tu Raspberry Pi.
:::

Paso 1: Ejecuta los siguientes comandos para crear un archivo python e instalar seeed-python-dht.

```bash
sudo pip3 install seeed-python-dht
cd grove.py
nano lesson_7.py
```

Paso 2: Copia el siguiente código

```python
#!/usr/bin/env python3

import time

from seeed_dht import DHT
from grove.display.jhd1802 import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) connected to I2C port
    lcd = JHD1802()

    # Grove - Temperature&Humidity Sensor connected to port D5
    sensor = DHT('11', 5)

    while True:
        humi, temp = sensor.read()
        print('temperature {}C, humidity {}%'.format(temp, humi))

        lcd.setCursor(0, 0)
        lcd.write('temperature: {0:2}C'.format(temp))

        lcd.setCursor(1, 0)
        lcd.write('humidity: {0:5}%'.format(humi))

        time.sleep(1)

if __name__ == '__main__':
    main()

```

Paso 3: ejecutar el programa

```bash
sudo chmod +x lesson_7.py
sudo ./lesson_7.py
```

Si todo va bien, deberías ver los valores actuales de temperatura y humedad mostrados en la pantalla LCD

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_7.py
temperature 23C, humidity 16%
temperature 22C, humidity 17%
temperature 22C, humidity 17%
^CTraceback (most recent call last):
  File "./lesson_7.py", line 28, in <module>
    main()
  File "./lesson_7.py", line 25, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/temp&humi_LCD.jpg)

### Lección 8: LCD y Sensor de Humedad y Zumbador

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lcd+moisture+buzzer.jpg)

**Objetivo**

Usar Grove - LCD 16 * 2 para mostrar el nivel actual de humedad. Cuando el estado de humedad sea "húmedo", el Grove - Zumbador debe alertarte.

**Requisitos de hardware**

Preparar por cuenta propia

- cable micro-USB
- Raspberry Pi 3 Model B
- Computadora

Incluido en el kit

- Grove Base Hat
- cable Grove
- Grove - LCD 16*2
- Grove - Sensor de Humedad
- Grove - Zumbador

**Conexión de hardware**

**Paso 1** Conecta Grove - LCD 16*2 al puerto I2C, Grove - Sensor de Humedad al puerto A0 y Grove - Zumbador al puerto PWM del Grove Base Hat.

**Paso 2** Inserta el Base Hat en la Raspberry Pi.

**Paso 3** Usa micro USB para conectar la Raspberry Pi con la PC.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lesson8.png)

**Programación de software**

:::note
Por favor asegúrate de haber clonado la biblioteca del repositorio python.py en tu Raspberry Pi.
:::

Paso 1: Ejecuta los siguientes comandos para crear un archivo python

```bash
cd grove.py
nano lesson_8.py
```

Paso 2: Copia el siguiente código

```python
#!/usr/bin/env python

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

from grove.grove_moisture_sensor import GroveMoistureSensor
from grove.lcd.sh1107g import JHD1802

def main():
    # Grove - 16x2 LCD(White on Blue) connected to I2C port
    lcd = JHD1802()
    
    # Grove - Moisture Sensor connected to port A0
    sensor = GroveMoistureSensor(0)
    
    # Grove - Buzzer connected to port PWM
    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))
    
    while True:
        mois = sensor.moisture
        if 0 <= mois and mois < 300:
            level = 'dry'
        elif 300 <= mois and mois < 600:
            level = 'moist'
        else:
            level = 'wet'
            buzzer.playSound(upmBuzzer.BUZZER_DO, 200000)
        
        print('moisture: {}, {}'.format(mois, level))
        
        lcd.setCursor(0, 0)
        lcd.write('moisture: {0:>6}'.format(mois))
        
        lcd.setCursor(1, 0)
        lcd.write('{0:>16}'.format(level))
        
        time.sleep(1)

if __name__ == '__main__':
    main()
```

Paso 3: ejecutar el programa

```bash
sudo chmod +x lesson_8.py
sudo ./lesson_8.py
```

Si todo va bien, podrás ver el nivel de humedad en la pantalla LCD. El zumbador se usa para alertar a las personas una vez que el nivel de humedad alcance "húmedo".

```bash
pi@raspberrypi:~/grove.py $ sudo ./lesson_8.py
moisture: 0, dry
moisture: 0, dry
moisture: 396, moist
moisture: 398, moist
moisture: 407, wet
moisture: 418, wet
^CTraceback (most recent call last):
  File "./lesson_8.py", line 41, in <module>
    main()
  File "./lesson_8.py", line 38, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py $
```

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/lesson8.png)

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
