---
description: Herramienta de depuración de engranajes de dirección para SO-ARM en Lerobot.
title: Herramienta de depuración de engranajes de dirección para SO-ARM en Lerobot
keywords:
  - Lerobot
  - SO-ARM
  - Robótica
  - Servo
  - Calibración
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/es/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# Herramienta de depuración de engranajes de dirección para SO-ARM en Lerobot

## Introducción

La herramienta de depuración de engranajes de dirección (Seeed_RoboController) es una herramienta gráfica de depuración para los brazos robóticos Lerobot/SO-ARM. Con esta herramienta, puedes detectar rápidamente el estado de los servos, recalibrar los ID de los servos, escribir valores neutros, controlar servos individuales y gestionar archivos de calibración del brazo robótico, lo que facilita el montaje, la depuración y el mantenimiento de los brazos líder y seguidor.

## 1. Instalación

Para sistemas Windows, Ubuntu y Mac.

1\. Primero, clona el repositorio.

```Plain
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

2\. Se recomienda instalar la herramienta en el entorno virtual de Lerobot. Si prefieres una instalación independiente, crea un nuevo entorno virtual para evitar contaminar el Python del sistema.

```Plain
pip install -r requirements.txt
```

3\. Comprueba el entorno. Si devuelve `[OK] Environment check passed`, el proyecto está listo para ejecutarse.

```Plain
python setup.py
```

4\. Inicia la herramienta.

Ejecuta el siguiente comando para iniciar la selección interactiva de puertos.

```Plain
python -m src.gui.factory_calibration_tool
```

(Opcional) Especifica manualmente los puertos si están ocupados.

```Plain
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

## 2. Primeros pasos (aplicable al brazo líder y al brazo seguidor)

### 1. Comprobar si los servos son normales

Si los servos 1-6 se detectan todos correctamente, significa que los servos se reconocen con normalidad y que las funciones básicas están funcionando.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

Si algunos servos aparecen como no detectados, primero comprueba si el cableado es correcto, cierra la página y vuelve a abrirla. Si siguen sin detectarse, es posible que los ID de los servos estén duplicados (posiblemente porque el comando para calibrar el brazo robótico se introdujo accidentalmente como el comando para calibrar los servos). En este caso, es necesario recalibrar los ID de estos servos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

### 2. Retirar los mazos de cables de los servos

Primero retira el mazo de cables de conexión entre el servo 6 y el servo 5.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" />
</div>

Luego retira el mazo de cables de conexión entre el servo 5 y el servo 4.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" />
</div>

Retira el mazo de cables de conexión entre el servo 4 y el servo 3.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" />
</div>

Retira el mazo de cables de conexión entre el servo 3 y el servo 2.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" />
</div>

Retira el mazo de cables de conexión entre el servo 2 y el servo 1.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" />
</div>

Retira el mazo de cables de conexión entre el servo 1 y la placa de control.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" />
</div>

### 3. Recalibrar los ID de los servos

Asegúrate de que solo un servo esté conectado al brazo robótico.

(Al flashear un ID en un servo, dado que los servos comparten un bus serie, si existen ID duplicados —por ejemplo, cambiar el ID 4 a 6—, todos los servos con ID 4 en el bus se cambiarán a 6. Por lo tanto, todos los servos deben retirarse y reprogramarse uno por uno).

Por ejemplo, puedes conectar el servo n.º 6 a la placa controladora como se muestra a continuación. Otros servos se conectan de forma similar, por lo que puedes evitar desmontar el brazo robótico.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

Como se muestra en la figura, solo se reconoce el servo n.º 4, pero el servo realmente conectado es el n.º 6. Esto indica que el ID del servo es incorrecto y debe cambiarse de nuevo a 6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

En este punto, puedes hacer clic en el servo n.º 4 y cambiar su ID a 6. Repite la misma operación para los demás servos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

Una vez completada la calibración de los servos, puedes volver a conectar los cables uno por uno para finalizar.

### 4. Escribir el valor neutro en el servo

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1\. Haz clic en **Serial Port Neutral Test** para comprobar si la posición neutra del brazo robótico es como se muestra arriba. Si es aproximadamente la misma, el valor neutro del brazo robótico es normal.

2\. Si no lo es, mueve el brazo robótico a la posición neutra y luego haz clic en **Serial Port Neutral Calibration**. El brazo robótico escribirá la posición actual como el valor neutro en el servo.

3\. Haz clic en **Serial Port Disable Motors**, y el brazo robótico quedará flojo; tendrás que sostenerlo con la mano.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### 5. Control de un solo servo

De forma predeterminada, todos los servos de la página están en sus posiciones neutras, como se muestra en la figura.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

Primero habilita el par. Puedes habilitar todos los pares con un solo clic o habilitar el par de un solo servo, luego deslizar el control deslizante para mover el servo a la posición correspondiente. Sin embargo, asegúrate de moverlo lentamente. Debido a que las piezas impresas del brazo robótico bloquearán físicamente ciertas posiciones, el brazo no puede alcanzar realmente las posiciones límite; hay límites máximos y mínimos de movimiento, por lo que no deslices el control deslizante hasta 0 ni hasta el máximo. Después de deshabilitar el par, el brazo robótico quedará flojo.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" />
</div>

Como se muestra arriba, después de habilitar el par, el movimiento del servo correspondiente cambiará.

Pos: Posición

V: Voltaje

T: Temperatura

Spd: Velocidad

Load: Par

Cur: Corriente

Mov: Estado de movimiento

Model: Modelo, autoridad

Status: El estado mostrará Normal, Overcurrent o Overload

### 6. Herramientas avanzadas

Puedes leer los datos de la dirección de registro correspondiente y escribir los datos correspondientes.

Se puede modificar la tasa de baudios.

Se pueden restaurar los ajustes de fábrica.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>

### 7. Gestión de archivos de calibración del brazo robótico

Puedes seleccionar el archivo de calibración correspondiente del brazo seguidor o del brazo líder para ejecutarlo, modificarlo o eliminarlo.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" />
</div>

### 8. Crear un nuevo archivo de calibración del brazo robótico

Haz clic en **GUI Calibration Wizard** y selecciona el brazo robótico y el número de puerto correspondientes.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" />
</div>

Puedes realizar la calibración mínima, máxima y neutra para cada servo.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" />
</div>

Primero, registra el valor neutro de cada servo. Coloca cada servo en la posición que se muestra en la figura y luego haz clic en **Record Neutral Value** para los servos 1-6 por turno.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" />
</div>

Luego haz clic en **Start Recording Range** para cada servo, gira el servo hasta los rangos máximo y mínimo y luego haz clic en **Stop Recording Range**. Repite la operación anterior para cada servo, luego nombra el archivo de calibración y guárdalo.
