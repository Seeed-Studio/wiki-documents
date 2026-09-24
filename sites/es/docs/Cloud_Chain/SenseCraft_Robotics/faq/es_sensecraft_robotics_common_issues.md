---
title: Problemas comunes de SenseCraft Robotics
description: Preguntas frecuentes sobre la conexión del dispositivo SenseCraft Robotics, calibración, recopilación de datos, entrenamiento y ejecución de modelos.
keywords:
  - SenseCraft Robotics
  - FAQ
  - troubleshooting
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/calibration-joint-error.webp
slug: /sensecraft_robotics_common_issues
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

## Conexión y detección del dispositivo

### ¿Qué debo hacer si no se pueden encontrar los puertos serie?

Comprueba lo siguiente:

- Asegúrate de que el cable USB admite transferencia de datos.
- Asegúrate de que el brazo robótico está encendido.
- Asegúrate de que el brazo líder está conectado antes que el brazo seguidor.
- En macOS / Linux, asegúrate de que el sistema permite el acceso al puerto serie.
- Asegúrate de que ningún otro programa está ocupando el puerto serie.

Prueba lo siguiente:

1. Desconecta y vuelve a conectar el dispositivo.
2. Haz clic en "Scan Serial Ports".
3. Si la página informa de un problema de permisos, completa el flujo de permisos.
4. Si sigue fallando, reinicia el software o el ordenador.

### ¿Qué debo hacer si B601 RS no puede encontrar CAN?

Comprueba lo siguiente:

- Asegúrate de que el adaptador y el controlador CAN están instalados.
- En Linux / Jetson, comprueba que existe la interfaz SocketCAN, por ejemplo `can0`.
- En macOS / Windows, comprueba que el runtime de PCAN está disponible.
- Asegúrate de que el nombre del canal CAN es correcto.

### ¿Qué debo hacer si la cámara no tiene imagen o la tasa de fotogramas es baja?

Sugerencias:

- Reduce la resolución o la calidad de imagen.
- Reduce la velocidad de muestreo.
- Cierra las previsualizaciones innecesarias.
- Evita usar la cámara en varios programas al mismo tiempo.
- Vuelve a escanear y vincular la cámara.

## Calibración y teleoperación

### ¿Qué debo hacer si la calibración falla?

Sugerencias:

- Comprueba que los modelos de brazo líder y brazo seguidor están seleccionados correctamente.
- Comprueba si los enlaces de puertos están invertidos.
- Vuelve a colocar los brazos robóticos en la postura recomendada.
- Detén la calibración y vuelve a iniciarla.
- Revisa los registros de diagnóstico para determinar si el problema está relacionado con los puertos serie, los servos, CAN o la etapa de postura.

### ¿Qué debo hacer si la dirección de teleoperación está invertida o el movimiento tiene retardo?

Sugerencias:

- Calibra de nuevo.
- Comprueba que los roles de brazo líder y brazo seguidor están conectados correctamente.
- Muévete con suavidad y evita tirones bruscos.
- Para B601 RS, reduce el paso máximo de movimiento.
- Revisa los registros de diagnóstico de teleoperación.

## Recopilación de datos y entrenamiento

### ¿Qué debo hacer si la calidad de los datos grabados es mala?

Sugerencias:

- Vuelve a grabar los episodios de baja calidad.
- Mantén cada demostración completa, estable y con un ritmo constante.
- Mantén estable la posición de la cámara y la iluminación.
- Usa la página Dataset para inspeccionar vídeos, fotogramas de muestra y curvas de articulaciones.
- Al fusionar conjuntos de datos, solo fusiona datos con la misma descripción de tarea.

### ¿Qué debo hacer si el entrenamiento no puede empezar?

Comprueba lo siguiente:

- Asegúrate de que se ha seleccionado un conjunto de datos entrenable.
- Asegúrate de haber iniciado sesión en tu cuenta de SenseCraft para el entrenamiento en la nube.
- Asegúrate de que el runtime de entrenamiento local está completo.
- Para GR00T, asegúrate de que las comprobaciones de token de HF, acceso restringido, runtime y caché del modelo se superan correctamente.

### ¿Qué debo hacer si no aparece ningún modelo en la página Run?

Causas comunes:

- El entrenamiento no se ha completado correctamente.
- Los resultados del entrenamiento en la nube no se han descargado al ordenador local.
- El registro del modelo local ha fallado.

Prueba lo siguiente:

1. Vuelve a Training y comprueba el estado de la tarea.
2. Espera a que el entrenamiento termine.
3. Asegúrate de que el modelo se ha descargado / registrado.
4. Actualiza la página Run.

### ¿Qué debo hacer si la calibración informa de "anomalía detectada en la articulación del brazo robótico"?

Si este error aparece después de hacer clic en "Start Calibration", comprueba primero el brazo líder.

Comprueba en este orden:

1. Asegúrate de que la fuente de alimentación del brazo robótico está encendida y de que el voltaje cumple los requisitos del dispositivo.
2. Vuelve a "Device Pairing" y confirma que el modelo de dispositivo seleccionado coincide con el brazo robótico real.
3. Comprueba el paso "Bind Serial Port" y confirma que los puertos serie de líder y seguidor no están invertidos.
4. Comprueba el cableado del brazo líder, la conexión en cadena y la conexión USB.

![Ejemplo de error de anomalía en la articulación del brazo robótico](https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/calibration-joint-error.webp)

### ¿Qué debo hacer si la calibración informa de que el puerto serie está desconectado o que la escritura ha fallado?

Si durante la calibración aparece un error como "dm-serial write failed" o fallo de escritura serie, normalmente el enlace serie no está conectado correctamente, el dispositivo no se reconoce o los roles serie están vinculados de forma incorrecta.

Detén primero la calibración y luego comprueba las fuentes de alimentación de líder y seguidor, el cable USB, los enlaces de puertos serie y el modelo de dispositivo. Después de restaurar la conexión, haz clic de nuevo en "Scan Serial Ports" y vuelve a calibrar.

![Ejemplo de error de fallo de escritura serie](https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/calibration-serial-write-failed.webp)

### ¿Qué debo hacer si el brazo seguidor informa de un error después de completar la calibración del brazo líder?

Si la calibración del brazo líder se completa pero aparece un error al cambiar a la calibración del brazo seguidor, centra la resolución de problemas en el brazo seguidor.

Comprueba si el brazo seguidor está encendido, si el voltaje cumple el estándar y si el cableado del seguidor, la cadena de servos, CAN o la conexión serie son normales. Si es necesario, vuelve a vincular el puerto del seguidor antes de iniciar la calibración.

![Ejemplo de error de calibración del brazo seguidor](https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/follower-calibration-error.webp)

### ¿A qué debo prestar atención para la calibración automática de SoArm?

Antes de la calibración automática de SoArm, asegúrate de que hay suficiente espacio alrededor del brazo robótico para evitar lesiones a las personas o colisiones con objetos sobre la mesa.

Confirma también si la muñeca del brazo robótico tiene un límite de movimiento. Si la muñeca no tiene límite, no se recomienda la calibración automática porque el movimiento puede tirar de los cables. Para otros problemas de calibración, consulta las comprobaciones de ReBot/B601: fuente de alimentación, modelo de dispositivo, enlace de puertos y estado del cableado.

### ¿Qué debo hacer si la validación de teleoperación falla?

Si la validación de teleoperación falla, primero confirma que los brazos líder y seguidor están conectados y emparejados correctamente.

Comprueba en este orden:

1. Asegúrate de que la alimentación está encendida y de que el voltaje cumple el estándar.
2. Asegúrate de que el dispositivo seleccionado en Device Pairing coincide con el modelo real de brazo robótico.
3. Comprueba si los puertos serie de líder y seguidor están invertidos.
4. Comprueba si el cableado del brazo líder es normal.
5. Calibra de nuevo y luego realiza la validación de teleoperación con movimientos pequeños y lentos.

![Ejemplo de fallo en la validación de teleoperación](https://files.seeedstudio.com/wiki/sensecraft-robotics/faq/teleoperation-validation-failed.webp)

## Cámara y rendimiento de recopilación

### ¿Qué combinaciones de cámaras se recomiendan cuando se producen errores de cámara durante la recopilación en macOS?

Si se producen errores relacionados con la cámara durante la recopilación en macOS, prueba primero estas combinaciones:

1. Dos cámaras Hikvision: mantén la tasa de fotogramas del brazo robótico en no más de 60 fps. La recopilación a 120 fps puede fallar. Esto suele funcionar, pero aún pueden aparecer problemas de compatibilidad en algunos entornos.
2. Una cámara Hikvision + Logi Webcams C270 HD Webcam: actualmente más estable y también puede usarse para recopilación del brazo robótico a 120 fps.
3. Dos Webcams C270 HD Webcam: también una combinación estable que cubre las tasas de fotogramas de recopilación de brazo robótico más comunes.

### ¿Qué problemas puede causar un rendimiento de recopilación insuficiente?

Cuando el rendimiento de recopilación es insuficiente, botones como omitir episodio actual, volver a grabar episodio actual y finalizar recopilación pueden responder lentamente. También pueden producirse caídas de fotogramas. Por ejemplo, si un episodio se configura en 15 segundos, la página Dataset puede mostrar una duración real inferior a 15 segundos.

Se recomienda mantener una sola sesión de grabación en unas 20 episodios y luego organizar los datos más tarde con la fusión de conjuntos de datos. Demasiados episodios en una sola sesión de recopilación pueden aumentar el riesgo de corrupción del conjunto de datos o errores de escritura.

## Ejecución de modelos

### ¿Qué debo confirmar antes de ejecutar un modelo?

Antes de ejecutar un modelo, usa la teleoperación para confirmar que el hardware del brazo robótico, la conexión, la calibración y el comportamiento de seguimiento son normales. Asegúrate también de que la disposición de cámaras seleccionada coincide con la disposición de cámaras utilizada al recopilar los datos de entrenamiento del modelo; de lo contrario, la calidad de la inferencia puede verse afectada.
