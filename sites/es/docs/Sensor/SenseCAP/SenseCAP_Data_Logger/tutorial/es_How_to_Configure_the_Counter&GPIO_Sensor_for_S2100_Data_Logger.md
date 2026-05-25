---
description: Configurar el sensor de contador y GPIO
title: Configurar el sensor de contador y GPIO
keywords:
  - SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
createdAt: '2023-02-24'
updatedAt: '2026-03-10'
url: https://wiki.seeedstudio.com/es/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger/
---

# # Primeros pasos con el S2100 y el sensor de contador y GPIO

Comencemos aprendiendo cómo usar el S2100 con el sensor de contador y GPIO. Una vez que lo tengamos claro, pasaremos a lo básico de la aplicación del S2100. Esto te dará una buena idea de cómo conectar tu propio sensor personalizado en el futuro.

## Sonda del sensor

Prepara estos elementos:

- Registrador de datos
- Pluviómetro sensor de lluvia RG-15 (como ejemplo)
- Cable de 8 pines
- Destornillador de cruz (cruz No.2)
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"/></div>

# Conectar la sonda del sensor

## Desmontar el registrador de datos

1. Desatornilla tres tornillos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"/></div>

2. Retira la tapa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"/></div>

3. Retira la tapa roscada y pásala a través del cable del sensor, pásala a través de la tapa inferior y conéctala al terminal de cableado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"/></div>

| **N.º** | **Pin** | **Descripción** |
| --- | --- | --- |
| 1 | 12V | Tensión de entrada externa de 12V. El registrador de datos puede alimentarse con una fuente de alimentación externa de 12V CC. Cuando se utiliza una fuente de alimentación de 12V, la batería servirá como fuente de alimentación de respaldo. |
| 2 | 5V | Tensión de salida de 5V, proporcionando 5V de tensión al sensor. |
| 3 | 3V | Tensión de salida de 3V, proporcionando 3V de tensión al sensor. |
| 4 | IO | Nivel de adquisición o entrada de pulsos |
| 5 | V1 | Se recoge la entrada de tensión de 0 a 10V |
| 6 | V2 | Se recoge la entrada de tensión de 0 a 10V |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | Recoge la entrada de corriente de 4 a 20mA |
| 10 | I2 | Recoge la entrada de corriente de 4 a 20mA |
| 11 | GND | Pin de tierra |
| 12 | GND | Pin de tierra |

## Opciones de alimentación del sensor

El registrador de datos admite dos modos de alimentación, elegimos el modo de batería integrada:

| **Modo** | **Descripción** |
| --- | --- |
| Batería integrada | El registrador de datos y los sensores se alimentan con baterías. En este caso, el registrador de datos se puede conectar a un sensor de 5V. |

## Conectar al registrador de datos

Secuencia de cables del registrador de datos:

| **Tipo de cable** | **Descripción** |
| --- | --- |
| Cable rojo | 5V |
| Cable negro | GND (cualquier puerto está bien). |
| Cable amarillo | IO |

1. Pasa el cable de 8 pines a través de la tapa inferior y conéctalo a la base del registrador de datos según los requisitos de la secuencia de cables;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"/></div>

2. Conecta la tapa superior, la junta de goma y la tapa roscada en secuencia

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"/></div>

3. **Aprieta los tornillos y las tapas roscadas** para comprobar la estanqueidad. Si el diámetro del cable es demasiado fino, añade cinta impermeable para el enrollado.

**\*Nota:** Al montar el dispositivo, es necesario instalar la almohadilla impermeable del registrador de datos y de la caja adaptadora, y apretar la tapa roscada y el tornillo, ¡de lo contrario se puede ver afectada la estanqueidad del dispositivo!

Si el diámetro del cable es demasiado pequeño, se puede envolver con cinta impermeable, como se muestra a continuación:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"/></div>

## Conectar al sensor de pluviómetro

Secuencia de cables del sensor de pluviómetro:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"/></div>

1. Desatornilla cuatro tornillos, retira la tapa. Pasa el cable de 8 pines a través de la tapa inferior y conéctalo a la base del J1 según los requisitos de la secuencia de cables;

|Tipo de cable|Descripción|
| --- | --- |
|Rojo|  V+|
|Negro| GND|
|Amarillo|OUT|

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"/></div>

2. Pon el interruptor DIP **1** de la base del sensor de lluvia S1 en ON, pon el interruptor **2** en OFF, y pon el **3** y el **4** en OFF;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"/></div>

3. Instala la tapa y aprieta los tornillos. Completa la conexión.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"/></div>

Hemos terminado el cableado en este punto. Ahora, configuremos el S2100 y configúralo en nuestra APP

## Conectar al detector de fugas de agua

Secuencia de cables del sensor detector de fugas de agua:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/37.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/38.png"/></div>

|Tipo de cable|Descripción|
| --- | --- |
|Rojo|V+|
|Azul|NC (señal normalmente cerrada)|
|Amarillo|COM|
|Blanco|IN IO|
|Marrón|V-|

1. Pasa el cable de 5 núcleos a través de la tapa inferior y conéctalo a la base del registrador de datos según los requisitos del orden de cableado;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/39.png"/></div>

| **Color del cable del sensor** | **Función** | **Terminal en S2100** |
| --- | --- | --- |
| **Rojo** | Alimentación positiva | **`5V OUT`** |
| **Marrón** | Alimentación negativa | **`GND`** |
| **Amarillo** | Común de señal | **`GND`** |
| **Blanco** | Señal de interruptor digital | **`IO IN`** |
| **Azul** | Señal normalmente cerrada | *(Déjalo sin conectar y aísla con cinta)* |

2. Vuelve a instalar la tapa superior, la junta de goma y la tuerca del cable en secuencia.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/41.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/42.png"/></div>

# Configurar el S2100

## Conectar el sensor a la App

1. Pulsa el botón y mantenlo presionado durante **3 segundos**, el LED parpadeará con una frecuencia de 1 s. Utiliza la App para conectar el sensor en 1 minuto; de lo contrario, el dispositivo se apagará o reiniciará.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"/></div>

2. Selecciona "S2100 Data Logger".

Haz clic en el botón "User" para entrar en User Settings y luego haz clic en "Bluetooth Configuration" para comenzar a escanear el Bluetooth del sensor.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/50.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/51.png"/></div>

3. Selecciona el sensor por S/N (el S/N está en la etiqueta frontal del sensor). Luego, se mostrará la información básica del sensor después de entrar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/52.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/53.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/54.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/55.png"/></div>

4. Entra en el modo de configuración después de que la conexión Bluetooth sea exitosa: el LED parpadea con una frecuencia de 2 s.

## Configurar parámetros básicos a través de la App

### Seleccionar la plataforma y la frecuencia

Los sensores S210x se fabrican para admitir un plan de frecuencia universal de 863MHz ~928MHz en un solo SKU. Es decir, cada dispositivo individual puede admitir 7 planes de frecuencia.

Aquí seleccionamos "SenseCAP for Helium" o "SenseCAP for TTN". El plan de frecuencia se basa en tu situación real.

**\*Nota:** El registrador de datos puede subir datos cuando hay una red Helium alrededor del usuario. Funciona en la consola privada Helium de SenseCAP. Los usuarios no necesitan crear un dispositivo en la consola Helium;

La plataforma SenseCAP for TTN necesita utilizarse con la [gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html) LoRaWAN exterior de SenseCAP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/56.png"/></div>

### Establecer el intervalo

El modo de funcionamiento del dispositivo: despertar el dispositivo en cada intervalo y recopilar valores de medición y subirlos a través de LoRa.

Por ejemplo, el dispositivo recopila y sube datos **cada 5 minutos de forma predeterminada**.

### Establecer la política de paquetes

La estrategia de paquetes de subida del sensor tiene tres modos, aquí seleccionamos 1N o puedes elegir según tu propio requisito.

| **Parámetro** | **Descripción** |
| --- | --- |
| 2C+1N (predeterminado) | 2C+1N (2 paquetes confirmados y 1 no confirmado) es la mejor estrategia, el modo puede minimizar la tasa de pérdida de paquetes, sin embargo el dispositivo consumirá la mayor cantidad de paquetes de datos en TTN, o créditos de datos en la red Helium. |
| 1C | 1C (1 confirmado) el dispositivo se dormirá después de recibir 1 paquete de confirmación del servidor. |
| 1N | 1N (1 no confirmado) el dispositivo solo envía el paquete y luego comienza a dormir, sin importar si el servidor recibió los datos o no. |

### Restaurar la configuración de fábrica

Al seleccionar la plataforma SenseCAP, debes usar el EUI/App EUI/App Key fijos. Por lo tanto, necesitas restaurar la configuración de fábrica antes de volver a la plataforma SenseCAP desde otras plataformas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/57.png"/></div>

Cuando cometamos un error o queramos restablecer todo, podemos hacer clic en el botón. El dispositivo se restaurará a la configuración predeterminada de fábrica.

**\*Nota:** La función "Restore Factory" solo puede restablecer la Configuración Básica.

## Configurar el sensor GPIO mediante la App

Selecciona el "Protocol" como "GPIO". Luego configura los siguientes parámetros por turno.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"/></div>

1. Selecciona el voltaje de alimentación del sensor. Es compatible con 3V/5V/12V. Aquí seleccionamos **5V**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"/></div>

2. Configura el "Sensor Warm-up time"; el tiempo de calentamiento indica el tiempo que tarda el sensor en alcanzar su máxima precisión o nivel de rendimiento una vez que se ha aplicado la alimentación. Introducimos **50(ms)** aquí.
2. Selecciona el tipo de entrada:

| Modo de nivel | Se recoge la señal de nivel de entrada, el nivel alto es 1, el nivel bajo es 0 |
| --- | --- |
| Modo contador | Se recoge la señal de pulso y se registra el número de pulsos |

Seleccionamos **Counter Mode** aquí.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"/></div>

### Configurar el sensor contador

Selecciona el "Counter Mode" como tipo de entrada. Luego configura los siguientes parámetros por turno.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"/></div>

| Entrada digital | Establece el tipo de pulso de entrada. Pull High: Válido cuando se detecta un flanco ascendente. Pull Low: Válido cuando se detecta un flanco descendente. Seleccionamos **Pull High** aquí. |
| --- | --- |
| Filtro digital | Cuando el ancho de pulso supera los 10 ms, se recomienda habilitarlo. Está habilitado de forma predeterminada. **Habilítalo** aquí. |
| Reiniciar para borrar el conteo | Cuando se produce un reinicio del Datalogger, el conteo se borra a 0. Está deshabilitado de forma predeterminada. **Deshabilítalo** aquí. |
| Y= Ax + B | "Y": Es el valor que el Datalogger subirá. "x": Es el valor original del contador. Factory A: Valores personalizados que se pueden escalar hacia arriba o hacia abajo por múltiplos de "x". Factory B: Un valor personalizado que incrementa o disminuye el valor de "x". Al configurar los valores de A y B, puedes calcular el valor deseado. Configura **A=0.2** y **B=0**. |
| Recopilación por unidad de tiempo | Habilitar esta función aumenta la subida con un valor: cantidad acumulada por hora. Por ejemplo, si el valor de Y dentro de una hora es 1000, se subirá 1000/h. **Deshabilítalo** aquí. |

Una vez completada la información de configuración, haz clic en "Back to Home" (en este momento, el nodo y el Bluetooth de la APP se desconectarán automáticamente), y el Data Logger intentará conectarse a la red (el indicador LED parpadea en rojo lentamente cuando intenta conectarse a la red y parpadea en verde rápidamente después de que la red se haya conectado correctamente);

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"/></div>

# Comprobar datos en el portal SenseCAP

## Vincular el sensor al portal SenseCAP

Por favor, abre la SenseCAP Mate App.

1. Escanear código QR

2. Haz clic en "Add device" en la esquina superior derecha de la página del dispositivo para entrar en la página de vinculación del dispositivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"/></div>

3. Escanea el código QR del dispositivo para vincular el dispositivo a tu cuenta. Si no lo configuras en un grupo designado, el dispositivo se colocará en el grupo "default".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"/></div>

4. Rellenar manualmente el EUI

Si la pegatina del código QR está dañada, puedes rellenar manualmente el EUI del dispositivo para vincular el dispositivo a tu cuenta. Asegúrate de introducir el EUI en el formato sugerido por el sistema y luego haz clic en "confirm".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"/></div>

## Comprobar datos en el portal SenseCAP

En la SenseCAP App o en el sitio web [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) , puedes comprobar el estado en línea del dispositivo y los datos más recientes. En la lista de cada sensor, puedes comprobar su estado en línea y la hora de su última subida de datos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"/></div>

Además, puedes comprobar los datos en la SenseCAP Mate APP.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"/></div>
