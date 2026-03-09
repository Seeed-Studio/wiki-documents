---
description: Guía completa de diagnóstico y resolución de problemas de motores para Reachy Mini usando la app Testbench para detectar y solucionar problemas de motor.
title: Diagnóstico y resolución de problemas de motores
slug: /reachymini_troubleshooting_motors_diagnosis
keywords:
  - motors
  - diagnosis
  - troubleshooting
  - testbench
  - dynamixel
  - motor detection
  - reflashing
  - repair
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reachymini_troubleshooting_motors_diagnosis/
---

# Guía de diagnóstico y resolución de problemas de motores

Este documento proporciona una guía para diagnosticar y solucionar problemas comunes relacionados con los motores del robot Reachy Mini.

## App Reachy Mini Testbench
Para ayudar a diagnosticar problemas de motor, hemos desarrollado la [Reachy Mini Testbench app](https://huggingface.co/spaces/pollen-robotics/reachy_mini_testbench). Esta app te permite probar motores individuales, comprobar su estado e identificar posibles problemas.
Necesitas instalar esta app en el robot antes de usarla. Si tienes una versión lite, tendrás que ejecutar el daemon sin autostart en una terminal y acceder al dashboard, como se explica a continuación:
<details>
<summary>Instrucciones para la versión Lite</summary>

- _Entorno virtual:_ Asegúrate de estar ejecutando dentro de tu entorno virtual (`.venv`, `reachy_mini_env`,...).
- _Actualización del SDK:_ Asegúrate de tener la última versión.
    Con `pip`, ejecuta :
    ```bash
    pip install -U reachy-mini
    ```
    Con `uv`, ejecuta :
    ```bash
    uv pip install -U reachy-mini
    ```

- _Daemon:_ Ejecuta el daemon `reachy-mini-daemon --no-autostart`
- _Acceder al Dashboard:_ Abre tu navegador web y ve a `http://localhost:8000/`.
Allí, puedes encontrar la app Testbench en la sección "Apps", instálala y luego ejecútala.


</details>

## Proceso típico de resolución de problemas de motores
Si tienes alguno de los siguientes síntomas, sigue los pasos de diagnóstico que se indican a continuación.
- Los motores parpadean en rojo y no responden/no se mueven.
- No hay error pero los motores no responden a los comandos.
- Los motores muestran errores como "Overload Error"
- Falta de motores: "No motor found on port", "Missing motor", etc.

### Diagnóstico
- Enciende el robot.
- Abre la Reachy Mini Testbench app.
- Haz un escaneo de motores haciendo clic en el botón "Scan Motors".

### Posibles resultados

**1. Se detectan todos los motores:**
Entonces todos los motores están físicamente conectados y funcionando.

![All_motors_detected](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/all_motors_found.png)

Si aún tienes problemas, puede que no estén en el orden correcto o con la configuración adecuada.
Haz clic en "Check all motors" para verificar que todas las configuraciones de los motores coinciden con los valores esperados.

![Check_all_motors](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/check_motor_configuration.png)

=> Si algo no es correcto, el daemon volverá a flashear todos los motores cuando lo reinicies.
Si todo es correcto pero aún tienes problemas, consulta las verificaciones siguientes.

**Inversión de motores:** Si obtienes "Motor hardware errors: ['Overload Error']" y leds parpadeando unos segundos después de encender el robot **por primera vez** y tienes dos motores del brazo apuntando hacia arriba.
Es MUY probable que haya motores colocados en la ranura incorrecta, por ejemplo, el motor 1 en la ranura 2.

![Motors inversion symptom](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/motors_upward.png)

**Comprueba la orientación del brazo en el horn del motor**:
Retira el motor defectuoso, luego coloca el brazo hacia arriba como en la imagen adjunta. Después comprueba si puedes ver las dos marcas de línea alineadas como se muestra:

![Marks_aligned](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/marks_aligned.png)

Si no lo están, retira los dos tornillos que sujetan el brazo y vuelve a colocarlo haciendo coincidir las dos líneas.


**Comprueba el exceso de longitud del cable USB dentro de la cabeza:**
Si es demasiado largo dentro de la cabeza, puede que no haya suficiente holgura debajo y la cabeza no pueda moverse libremente.
Entonces los motores fuerzan demasiado y pueden dañarse.

![usb_cable_length](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/usb_cable_length.jpg)

Deja algo de holgura al cable USB para permitir que la cabeza se mueva libremente, incluso hasta su posición de altura máxima.



**Un motor parece roto:**
Hemos identificado un problema que afecta a un lote de producción limitado de robots Reachy Mini, relacionado con un lote defectuoso de motores Dynamixel.

En la mayoría de los casos reportados, el problema afecta al motor número 4 o a uno con etiqueta QC n°2544.

Si uno de tus motores, **parpadea en rojo y se siente inusualmente duro de mover cuando está apagado** [(video de ejemplo aquí)](https://drive.google.com/file/d/1UHTqUcb21aFThqlr2Qcx23VWqvj_y-ly/view?usp=sharing), y estás 100% seguro de que el motor estaba en la ranura correcta.

Probablemente sea un motor roto.

Primero, intenta actualizar tu robot a la última versión de software y luego reinícialo. Esto volverá a flashear tus motores.
Si el problema persiste, ponte en contacto con el soporte.

**2. Algunos motores no se detectan:**.

![Some_motors_missing](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/missing_motors.png)

- Solo falta un motor: Comprueba la conexión física de ese motor según las instrucciones de montaje.
Si estás 100% seguro de que la conexión está bien, también puede ser un motor que no se ha flasheado correctamente. Consulta la sección **Flashing issue** más abajo.

- Si faltan motores con IDs sucesivos (por ejemplo, faltan los motores 1-2-3, o 4-5-6, o 17-18), comprueba las conexiones físicas entre la placa de alimentación del pie y los motores 3 y 4. Si el problema ocurre en 17-18, comprueba la conexión entre el motor "R" y la placa PCB de la cabeza.

- Si **faltan dos motores** pero la conexión está bien, entonces puede que tengas dos motores con el mismo ID en tu kit. Tres es muy poco probable. Consulta la sección "Flashing issue" más abajo.

- Si **faltan todos los motores**, comprueba la conexión del motor central "F" (ID10). Este motor es el primero de la cadena y si no se detecta, entonces todos los motores siguientes tampoco se detectarán.
Este motor debe estar conectado al pie con un cable de 100 mm y a la cabeza con un cable de 300 mm. Asegúrate de que estos cables estén bien conectados en cada extremo y no estén dañados.

### Flashing issue
Si uno o más motores no se detectan, puede deberse a un problema de flashing que afecta a los IDs de los motores o al baudrate.

Para resolver esto, necesitarás:
1. Hacer clic en el botón "Scan all baudrates" en la app Testbench.
Los motores deben detectarse con baudrate 1000000.
Los IDs de los motores deben ir de 10 a 18 sin duplicados ni números faltantes.

2. Si hay un motor con un baudrate o/y ID incorrecto, tendrás que volver a flashearlo con los parámetros correctos.
Para hacerlo, sigue el procedimiento de flashing que se indica a continuación:
- En la sección de reflash de motor, elige el motor con el ID o baudrate incorrecto.
- Elige el preset de lo que debería ser el motor (por ejemplo, motor 10 para la rotación de la base).
- Haz clic en "Reflash motor".

![Reflash_motor](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reflash_motors.png)

3. Si tienes varios motores que faltan y estás seguro de que las conexiones están bien, tendrás que volver a flashear todos los motores defectuosos/faltantes uno por uno, siguiendo el mismo procedimiento que arriba pero desconectando todos los demás motores defectuosos para evitar conflictos de ID.
