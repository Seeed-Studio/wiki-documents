---
description: Motor Bridge Cape v1.0
title: Motor Bridge Cape v1.0
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Motor_Bridge_Cape_v1.0
last_update:
  date: 1/10/2022
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_bridge_driver.jpg)

El Motor Bridge Cape cuenta con control bidireccional de motores utilizando dos TB6612FNG integrados de doble puente H, por lo que puede controlar dos motores paso a paso o cuatro motores DC con escobillas con alimentación DC de 6 ~15V y aproximadamente 1A de consumo de corriente por motor. El cape proporciona alimentación regulada de 5V al BBG o BBB con un voltaje de entrada máximo de 15V. También tiene seis interfaces de control de servo y seis E/S de expansión. Todas las características son proporcionadas por el coprocesador STM32F0 integrado. El MCU puede comunicarse con BeagleBone® mediante interfaz I<sup>2</sup>C o UART.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)

Características
--------

- Puede manejar 4 motores DC o 2 motores paso a paso
- Puede manejar 6 servos
- Plataforma Mbed
- Coprocesador STM32F0
- Dos TB6612FNG
- 6 E/S de expansión
- Se comunica con BBG mediante interfaz I<sup>2</sup>C o UART

Especificaciones
--------------

- Voltaje de entrada de batería: 6~15V
- Voltaje de trabajo del puente H: 6~15V
- Corriente de salida DC/DC 5V: 2A máx
- Corriente de salida 3V3: 350mA máx
- 4 controladores de puente H, cada uno con corriente nominal: 1.2A, corriente pico: 3.2A
- 6 controladores de servo, voltaje de trabajo: 5V, la corriente total no es más de 1.5A
- Protección contra conexión inversa de entrada
- Protección contra sobrecorriente: fusible rápido de una sola vez de 3A

Descripción general del hardware
-----------------

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_Bridge_Hardware_overview.jpg)

- **Fusible de una vez de 3A**: Protección contra sobrecorriente
- **Botón de reinicio**: Reinicia el coprocesador
- **Interfaz SWD**: Interfaz de depuración
- **Placa de prototipos**: Extiende otros circuitos
- **GPIOs**: Extiende otros circuitos
- **Servos**: Interfaz de motor servo
- **STM32F030R8**: El coprocesador
- **DC/DC**: Circuito de conversión de voltaje
- **TB6612FNG**: IC de puente H
- **Indicador**: Lámpara indicadora para dirección del motor
- **Interruptor de modo de trabajo**: En espera o funcionando
- **Protección contra inversión de entrada**: Protege el circuito
- **Motor4/Motor3**: Maneja 2 motores DC o 1 motor paso a paso
- **Motor2/Motor1**: Maneja 2 motores DC o 1 motor paso a paso
- **Batería**: Suministra energía para el motor

Primeros pasos
---------------

Después de esta sección, te mostraré cómo usar el Motor Bridge Cape en BBG. Antes de comenzar, por favor descarga el código de la biblioteca del controlador Motor Bridge Cape desde [Github](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB).

Para usar la biblioteca Motor Bridge Cape simplemente añade el archivo MotorBridge.py a tu proyecto. E importa el archivo python a tu proyecto, y crea un objeto del Motor Bridge Cape.

```
import MotorBridge
motor = MotorBridge.MotorBridgeCape()
```

### Instalar las dependencias

```
sudo apt-get update
sudo apt-get install build-essential python-pip python-dev python-smbus git
sudo pip install Adafruit-GPIO
```

### Motor paso a paso

La interfaz del motor paso a paso del Motor Bridge Cape es como muestra la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/StepperMotor.jpg)

#### Las funciones del motor paso a paso

Aquí está la descripción breve sobre la función del motor paso a paso.

**<u>StepperMotorAInit()</u>**

*Descripción*: Inicializa el puerto del motor paso a paso A.

**<u>StepperMotorAMove(MoveSteps,StepDelayTime)</u>**

*Descripción*: Maneja el motor paso a paso A.

*MoveSteps*: Cuántos pasos se moverá el motor paso a paso. **Positivo** significa dirección en sentido horario. **Negativo** significa dirección en sentido antihorario.

*StepDelayTime*: El tiempo muerto para cada paso. unidad: us.

**<u>StepperMotorBInit()</u>**

*Descripción*: Inicializa el puerto del motor paso a paso B.

**<u>StepperMotorBMove(MoveSteps,StepDelayTime)</u>**

*Descripción*: Maneja el motor paso a paso B.

*MoveSteps*: Cuántos pasos se moverá el motor paso a paso. **Positivo** significa dirección en sentido horario. **Negativo** significa dirección en sentido antihorario.

*StepDelayTime*: El tiempo muerto para cada paso. unidad: us.

#### Ejemplo de motor paso a paso

Copia el siguiente código a tu proyecto y guárdalo como un archivo python.

```
import MotorBridge
import time
 
def StepperMotorATest():
    print 'Hello From MotorBridge'
    motor.StepperMotorAInit()
    motor.StepperMotorAMove(1000,1000) # 1000 pasos  1000us cada paso
    time.sleep(1)
    motor.StepperMotorAMove(-1000,1000) #1000 pasos  1000us cada paso
    time.sleep(1)
 
def StepperMotorBTest():
    print 'Hello From MotorBridge'
    motor.StepperMotorBInit()
    motor.StepperMotorBMove(1000,1000) # 1000 pasos  1000us cada paso
    time.sleep(1)
    motor.StepperMotorBMove(-1000,1000) # 1000 pasos  1000us cada paso
    time.sleep(1)
 
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    StepperMotorATest()
    StepperMotorBTest()
```

### Motor DC

La interfaz del motor DC del Motor Bridge Cape es como muestra la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/DCMotorBBG.jpg)

#### Las funciones del motor DC

Aquí está la descripción breve sobre las funciones del motor DC.

**<u>DCMotorInit(MotorName,Frequency)</u>**

*Descripción*: Inicializa el motor DC y establece la frecuencia.

*MotorName*: 1 ~ 4 representa Motor1 ~ Motor4.

*Frequency*: Establece la frecuencia del motor DC.

:::note
Si cambias la frecuencia del motor DC, la frecuencia de los otros motores DC también cambiará.
:::

**<u>DCMotorMove(MotorName,Direction,PWMDuty)</u>**

*Descripción*: Maneja el motor DC. Establece la dirección y PWMDuty.

*MotorName*: 1 ~ 4 representa Motor1 ~ Motor4.

*Dirección*: 1 significa sentido horario. 2 significa sentido antihorario. 3 Detiene el motor.

*PWMDuty*: 0 ~ 100 representa 0%~ 100% del ciclo de trabajo pwm.

**<u>motor.DCMotorStop(MotorName)</u>**

*Descripción*: Detiene el motor DC.

*MotorName*: 1 ~ 4 representa Motor1 ~ Motor4.

#### Ejemplo de motor DC

Copia el siguiente código a tu proyecto y guárdalo como un archivo python.

```
import MotorBridge
import time
 
MotorName        = 1
ClockWise        = 1
CounterClockWise = 2
PwmDuty          = 90
Frequency        = 1000
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.DCMotorInit(MotorName,Frequency)
    while True:
        motor.DCMotorMove(MotorName,ClockWise,PwmDuty)
        time.sleep(2)
        motor.DCMotorMove(MotorName,CounterClockWise,PwmDuty)
        time.sleep(2)
        print "hello"
        motor.DCMotorStop(MotorName)
        time.sleep(2)
```

### Servo

La Interfaz de Servo del Motor Bridge Cape tal como muestra la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/ServoBBG.jpg)

#### Las funciones de Servo

Aquí está la descripción breve sobre las funciones de Servo.

**<u>ServoInit(ServoName,Frequency)</u>**

*Descripción*: Inicializa el Servo y establece la frecuencia.

*ServoName*: 1 ~ 6 representa Servo1 ~ Servo6.

*Frequency*: Establece la frecuencia del Servo, el valor por defecto es 50 Hz.

**<u>ServoMoveAngle(ServoName,Angle)</u>**

*Descripción*: Controla el Servo. Establece el ángulo del Servo.

*ServoName*: 1 ~ 6 representa Servo1 ~ Servo6.

*Angle*: 0 ~ 180 representa de 0 grados a 180 grados.

#### Ejemplo de Servo

Copia el siguiente código a tu proyecto y guárdalo como un archivo python.

```
import MotorBridge
import time
ServoName   =  2
Frequency   =  50
Angle1      =  20
Angle2      =  160
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.ServoInit(ServoName,Frequency)
 
    while True:
        print 'Servo Test'
        motor.ServoMoveAngle(ServoName,Angle1)
        time.sleep(2)
        motor.ServoMoveAngle(ServoName,Angle2)
        time.sleep(2)
```

Actualizar el Firmware
----------------------

Si hay algo mal con tu cape, intenta actualizarlo. Esta sección muestra cómo actualizar el Firmware del Motor Bridge Cape usando BeagleBone® Green. También funciona en BBGW y BBB.

1.Inserta el Motor Bridge Cape en BBG/BBGW/BBB, y conecta BBG a tu computadora vía cable USB.

2.Haz que tu BBG se conecte a internet, y accede a él vía SSH como muestra la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG1.PNG)

3.Descarga el código desde Github ejecutando los siguientes comandos

```
git clone https://github.com/Seeed-Studio/MotorBridgeCapeFirmware
```

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG2.PNG)

4.Navega a "MotorBridgeCapeFirmware" y ejecuta el comando "make flash" para flashear el firmware.

```
cd MotorBridgeCapeFirmware/ && make flash
```

Después de unos segundos, puedes ver la información "Verification OK" desde la terminal

5.Verifica si el firmware está flasheado correctamente ejecutando el siguiente comando

```
i2cdetect -y -r 1
```

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG3.PNG)

Si encuentras la dirección I2C 0x4b, significa que ya has actualizado el firmware exitosamente.

### Problemas conocidos

#### No se puede encontrar la dirección I2C

P: Ya he actualizado el firmware, pero no puedo detectar la dirección i2c?

R：Asegúrate de que el Pin P9_23 esté en Alto, ya que el P9_23 está conectado al pin Reset del STM32, establezco el pin P9_23 a nivel alto en la función de inicialización de la clase MotorBridgeCape.

#### No se puede actualizar el firmware

P: Cuando actualizo el firmware, la información de error dice que no puede encontrar el UART2?

R: Deberías habilitar el BB-UART2, ya que el BBG flashea el firmware al Motor Bridge Cape por UART2..

    vi /boot/uEnv.txt

Luego descomenta "cape_enable=capemgr.enable_partno=BB-UART2". Guarda y sal del editor, por último reinicia tu placa.

#### El Cape aún no está funcionando

P: Ya he actualizado el firmware exitosamente y puedo detectar la dirección I2C, pero ¿por qué aún no puedo hacer funcionar el cape?

R: Por favor ten en cuenta que hay un interruptor de modo de trabajo en la placa, asegúrate de que el interruptor esté en posición de trabajo. Si aún tienes otras preguntas, por favor ven a nuestro foro.

#### falla al ejecutar make flash

P: No puedo ejecutar make flash con código de error "Can't init. Ensure BOOT0=1 BOOT1=0, and reset Device"

R: Por favor sigue los pasos a continuación para resolver el problema.

- Paso 1: Ejecuta sudo nano /boot/uEnv.txt y luego añade las siguientes 2 líneas al final del uEnv.txt.

```
uboot_overlay_addr0=/lib/firmware/BB-UART2-00A0.dtbo
enable_uboot_cape_universal=1  
```

- Paso 2. Reinicia el BBGW
- Paso 3. Ejecuta el Sudo make flash nuevamente.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor%20Bridge%20Cape%20v1.0%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Tenemos esta parte disponible en [geppetto](https://geppetto.seeedstudio.com/), diseño electrónico modular fácil con Seeed y Geppeto. Constrúyelo Ahora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

Recursos
--------

- [Esquema en PDF](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0_sch.pdf)
- [PCB en Archivo Eagle](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0brd.rar)
- [Esquema en Archivo Eagle](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0sch.rar)
- [Librería Motor Bridge Cape](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB)
- [Código Fuente del Firmware Motor Bridge Cape](https://github.com/Lee-Kevin/MotorBridgeCapeFirmwareSourceCode)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0 -->

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