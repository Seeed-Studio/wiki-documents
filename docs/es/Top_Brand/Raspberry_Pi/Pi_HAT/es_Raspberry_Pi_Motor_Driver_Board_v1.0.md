---
description: Raspberry Pi Motor Driver Board v1.0
title: Raspberry Pi Motor Driver Board v1.0
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Raspberry_Pi_Motor_Driver_Board_v1.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0.jpg)

Raspberry Pi Motor Driver Board v1.0 está basado en el IC de potencia dual H-Bridge MC33932 de Freescale, que puede controlar cargas inductivas con corrientes de hasta 5.0A pico por puente individual. Te permite controlar dos motores DC con tu Raspberry Pi B/B+/A+ y Pi 2 Model B, controlando la velocidad y dirección de cada uno independientemente.

Raspberry Pi Motor Driver Board v1.0 soporta un rango muy amplio de voltaje de entrada de 6V~28V. Además, el convertidor DC/DC integrado soporta un rango muy amplio de voltaje de entrada, y puede proporcionar una fuente de alimentación de 5V para la Raspberry Pi con una corriente máxima de 1000mA. Por lo tanto, solo necesitas una fuente de alimentación para controlar los motores y alimentar la Raspberry Pi.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

Características
---------------

- Protección contra cortocircuito de salida (cortocircuito a VPWR o GND)
- Limitación de sobrecorriente (regulación) mediante PWM interno de tiempo de apagado constante
- Reducción del umbral de límite de corriente dependiente de la temperatura
- Compatible con Raspberry Pi 3B/3B+/4

Especificaciones
----------------

<table border="1" cellspacing="0" width="600">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Operación
</th>
<td>
6
</td>
<td>
/
</td>
<td>
28
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Salida DC/DC:
</th>
<td>
/
</td>
<td>
5V/1000mA
</td>
<td>
/
</td>
<td>
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Salida (Para Cada Canal)
</th>
<td>
/
</td>
<td>
2 (operación continua)
</td>
<td>
5 (pico)
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Frecuencia PWM
</th>
<td>
/
</td>
<td>
/
</td>
<td>
11
</td>
<td>
kHz
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Ciclo de Trabajo de Salida
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %
</td>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Entrada Lógica
</th>
<td>
-0.3
</td>
<td>
/
</td>
<td>
7
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura de Operación
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
120
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensiones
</th>
<td colspan="3">
91.20 *56.15* 32
</td>
<td>
mm
</td>
</tr>
</table>

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p3.jpg)

- **J1**: Conector de entrada DC.
- **J2**: Conector de salida del controlador de motor.
- **EN,FT**: Puentes para control EN y detección de bandera de falla. Si cortocircuitas el puente EN, la señal EN se mapea al pin D4, puedes controlar la deshabilitación de salida del puente H o restablecer la bandera de falla mediante el pin D4. Si cortocircuitas el puente FT, la señal de bandera de falla se mapea al pin D3, también puedes leer la bandera de falla desde el pin D3.
- **IO**: Puente selector de nivel de voltaje lógico. Puedes elegir el nivel de voltaje lógico de control desde este puente.
- **Fuente de Alimentación**: Tienes que alimentar el shield desde J1 (conector de entrada DC). El rango de voltaje de entrada puede configurarse hasta 6Vdc ~ 28Vdc. El convertidor DC/DC a bordo puede convertir el voltaje de entrada DC a voltaje de salida de 5Vdc para alimentar el circuito lógico. El convertidor DC/DC también puede alimentar la placa del microcontrolador (Arduino/Seeeduino) desde el pin "5V" para un máximo de 100mA de corriente.
- **Interfaz del Motor**: Out 1 y Out 2 (Out 3 y Out 4) conectan el Motor A(B) para motor DC.

:::caution
No toques el IC del puente H o la placa PCB durante el funcionamiento. Su temperatura puede alcanzar hasta 100 grados en el caso de operación a carga completa.
:::

Uso
-----

Esta demostración utiliza Raspberry Pi B para mostrar que la Placa Controladora de Motor Raspberry Pi v1.0 puede usarse para controlar el motor DC hacia adelante y hacia atrás.

### Instalación del Hardware

- Raspberry Pi B & Placa Controladora de Motor Raspberry Pi v1.0
- Conexión del hardware como se muestra

Conectar a la red y alimentación.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p6.jpg)

### Parte del Software

1. Descarga [Motor_Driver.py](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Motor_Driver.py) y [PiSoftPwn.py](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/PiSoftPwm.py) en la misma carpeta. Aquí está el código de Motor_Driver.py.

```
#!/usr/bin/python
import RPi.GPIO as GPIO
import time
import signal   

from PiSoftPwm import *

#print 'Go_1...'
#frequency = 1.0 / self.sc_1.GetValue()
#speed = self.sc_2.GetValue()

class Motor():
    def __init__(self):
    # MC33932 pins
        self.PWMA = 25  
        self.PWMB = 22
        self._IN1 = 23  
        self._IN2 = 24 
        self._IN3 = 17
        self._IN4 = 27

    # Initialize PWMA PWMB 
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.PWMA, GPIO.OUT)
        GPIO.setup(self.PWMB, GPIO.OUT)
        GPIO.output(self.PWMA, True)
        GPIO.output(self.PWMB, True)

    # Initialize PWM outputs
        self.OUT_1  = PiSoftPwm(0.1, 100, self._IN1, GPIO.BCM)
        self.OUT_2  = PiSoftPwm(0.1, 100, self._IN2, GPIO.BCM)
        self.OUT_3  = PiSoftPwm(0.1, 100, self._IN3, GPIO.BCM)
        self.OUT_4  = PiSoftPwm(0.1, 100, self._IN4, GPIO.BCM)

        # Close pwm output
        self.OUT_1.start(0)
        self.OUT_2.start(0)
        self.OUT_3.start(0)
        self.OUT_4.start(0)

        self.frequency = 0.01
        self.duty = 60

    def Setting(self, frequency, duty):
        self.frequency = frequency
        self.duty = duty

    def Go_1(self):
        self.OUT_1.changeBaseTime(self.frequency)
        self.OUT_2.changeBaseTime(self.frequency)
        self.OUT_1.changeNbSlicesOn(self.duty)
        self.OUT_2.changeNbSlicesOn(0)

    def Back_1(self):
        self.OUT_1.changeBaseTime(self.frequency)
        self.OUT_2.changeBaseTime(self.frequency)
        self.OUT_1.changeNbSlicesOn(0)
        self.OUT_2.changeNbSlicesOn(self.duty)

    def Go_2(self):
        self.OUT_3.changeBaseTime(self.frequency)
        self.OUT_4.changeBaseTime(self.frequency)
        self.OUT_3.changeNbSlicesOn(0)
        self.OUT_4.changeNbSlicesOn(self.duty)

    def Back_2(self):
        self.OUT_3.changeBaseTime(self.frequency)
        self.OUT_4.changeBaseTime(self.frequency)
        self.OUT_3.changeNbSlicesOn(self.duty)
        self.OUT_4.changeNbSlicesOn(0)

    def Stop(self):
        self.OUT_1.changeNbSlicesOn(0)
        self.OUT_2.changeNbSlicesOn(0)
        self.OUT_3.changeNbSlicesOn(0)
        self.OUT_4.changeNbSlicesOn(0)

if __name__=="__main__":
    motor=Motor()
    # Called on process interruption. Set all pins to "Input" default mode.
    def endProcess(signalnum = None, handler = None):
        motor.OUT_1.stop()
        motor.OUT_2.stop()
        motor.OUT_3.stop()
        motor.OUT_4.stop()
        motor.GPIO.cleanup()
        exit(0)

    # Prepare handlers for process exit
    signal.signal(signal.SIGTERM, endProcess)
    signal.signal(signal.SIGINT, endProcess)
    signal.signal(signal.SIGHUP, endProcess)
    signal.signal (signal.SIGQUIT, endProcess)

    motor.Setting(0.01, 60)
    print 'motor start...'
    while True:
        print 'motor A turning forward...'
        motor.Go_1()
        time.sleep(1)
        print 'motor A turning backward...'
        motor.Back_1()
        time.sleep(1)
        print 'motor A stop...'
     motor.Stop()
     time.sleep(1)
        print 'motor B turning forward...'
        motor.Go_2()
        time.sleep(1)
        print 'motor B turning backward...'
        motor.Back_2()
        time.sleep(1)
        print 'motor B stop...'
     motor.Stop()
     time.sleep(1)

```

2.Ejecuta este programa. LED1, LED2 en Raspberry Pi Motor Driver Board v1.0 se encenderán alternativamente; LED3, LED4 también se encenderán alternativamente.

Esto significa que Out 1 y Out 2 (Out 3 y Out 4) conectan el Motor A(B) hacia adelante y hacia atrás.

3.Puedes ver el fenómeno como sigue:

Consola serie:

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p4.jpg)

Raspberry Pi Motor Driver Board v1.0:
LED verde y LED azul se encienden alternativamente.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p5.jpg)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle Raspberry Pi Motor Driver Board v1.0](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip)
- [PDF Raspberry Pi Motor Driver Board v1.0](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0.pdf)
- [Hoja de datos MC33932VW](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/MC33932VW.pdf)
- [Hoja de datos TD1519A](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/TD1519A.pdf)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0 -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

