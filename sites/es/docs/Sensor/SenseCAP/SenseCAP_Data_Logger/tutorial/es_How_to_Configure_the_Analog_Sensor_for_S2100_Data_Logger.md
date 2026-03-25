---
description: Configurar el sensor analógico
title: Configurar el sensor analógico
keywords:
  - SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger
last_update:
  date: 3/18/2026
  author: Kian
createdAt: '2023-02-24'
updatedAt: '2026-03-18'
url: https://wiki.seeedstudio.com/es/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger/
---

# Primeros pasos con el S2100 y el sensor de entrada analógica

Comencemos aprendiendo cómo usar el S2100 con un sensor de entrada analógica. Una vez que lo tengamos claro, pasaremos a lo básico de la aplicación del S2100. Esto te dará una buena idea de cómo conectar tu propio sensor personalizado en el futuro.

## Prepara estos elementos

- Data logger
- Sensor de luz (como ejemplo)
- Destornillador de cruz (ranura en cruz n.º 2)
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"/></div>

# Conectar la sonda del sensor

Primero, tenemos que hacer el cableado. Sigue los pasos a continuación.

## Desmontar el Data Logger

1. Desatornilla tres tornillos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. Retira la tapa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. Retira la tapa roscada y pásala a través del cable del sensor, pásala a través de la tapa inferior y conéctala al terminal de cableado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>

## Descripción del terminal de cableado

| **N.º** | **Pin** | **Descripción** |
| --- | --- | --- |
| 1 | 12V | Tensión de entrada externa de 12V. El Data Logger puede alimentarse con una fuente de alimentación externa de 12V CC. Cuando se utiliza una fuente de alimentación de 12V, la batería servirá como fuente de alimentación de respaldo. |
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

## Resolución

| **Interfaz**                    | **Valor**                   |
| -------------------------------- | --------------------------- |
| Entrada de corriente	           |  4 a 20 mA (2 canales)      |
| Resolución de entrada de corriente (I1/I2) |  0.001 mA                   |
| Entrada de tensión               |	0 a 10V (2 canales)        |
| Resolución de entrada de tensión (V1/V2) |  0.01 mV                    |

## Opciones de alimentación del sensor

El Data Logger admite dos modos de alimentación; elegimos el modo de batería integrada ya que el sensor de luz solo necesita una alimentación de 5V:

| **Modo** | **Descripción** |
| --- | --- |
| Batería integrada | El Data Logger y los sensores se alimentan con baterías. En este caso, el Data Logger se puede conectar a un sensor de 5V. |

## Conectar al Datalogger

Secuencia de cables del Datalogger:

| **Tipo de cable** | **Descripción** |
| --- | --- |
| Cable rojo | 5V |
| Cable negro | GND (cualquier puerto está bien). |
| Cable amarillo | IO |

1. Pasa el cable de 8 pines a través de la tapa inferior y conéctalo a la base del Data Logger de acuerdo con los requisitos de la secuencia de cables;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"/></div>

2. Conecta la tapa superior, la junta de goma y la tapa roscada en secuencia

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"/></div>

3. **Aprieta los tornillos y las tapas roscadas****para comprobar la estanqueidad al agua**. Si el diámetro del cable es demasiado fino, añade cinta impermeable para el enrollado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"/></div>

**\*Nota:** Al montar el dispositivo, es necesario instalar la almohadilla impermeable del Data Logger y de la caja adaptadora, y apretar la tapa roscada y el tornillo; de lo contrario, ¡se puede ver afectada la estanqueidad al agua del dispositivo!

Si el diámetro del cable es demasiado pequeño, se puede envolver con cinta impermeable, como se muestra a continuación:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"/></div>

Hemos terminado el cableado en este punto. Ahora, configuremos el S2100 y lo configuraremos en nuestra APP.

# Configurar el S2100

## Conectar el sensor a la App

1. Mantén pulsado el botón durante **3 segundos**; el LED parpadeará con una frecuencia de 1 s. Utiliza la App para conectar el sensor en el plazo de 1 minuto; de lo contrario, el dispositivo se apagará o se reiniciará.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"/></div>

2. Selecciona "S2100 Data Logger".

Haz clic en el botón "Setup" para activar el Bluetooth y haz clic en "Scan" para empezar a escanear el Bluetooth del sensor.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"/></div>

3. Selecciona el sensor por S/N (el S/N está en la etiqueta frontal del sensor). A continuación, se mostrará la información básica del sensor después de entrar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"/></div>

4. Entra en el modo de configuración después de que la conexión Bluetooth sea correcta: el LED parpadea con una frecuencia de 2 s.

## Configurar parámetros básicos a través de la App

### Seleccionar la plataforma y la frecuencia

Los sensores S210x se fabrican para admitir un plan de frecuencia universal de 863MHz ~928MHz en un solo SKU. Es decir, cada dispositivo individual puede admitir 7 planes de frecuencia.

Aquí seleccionamos "SenseCAP for Helium" o "SenseCAP for TTN". El plan de frecuencia se basa en tu situación real.

**\*Nota:** El Data Logger puede subir datos cuando hay una red Helium alrededor del usuario. Funciona en la consola privada Helium de SenseCAP. Los usuarios no necesitan crear un dispositivo en la consola Helium;

La plataforma SenseCAP for TTN debe utilizarse con la pasarela exterior SenseCAP LoRaWAN (https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"/></div>

### Establecer el intervalo

El modo de funcionamiento del dispositivo: despierta el dispositivo en cada intervalo y recoge los valores de medición y los sube a través de LoRa.

Por ejemplo, el dispositivo recoge y sube datos **cada 60 minutos de forma predeterminada**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"/></div>

### Establecer la política de paquetes

La estrategia de paquetes de subida del sensor tiene tres modos; aquí seleccionamos 1N o puedes elegir según tu propia necesidad.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"/></div>

| **Parámetro** | **Descripción** |
| --- | --- |
| 2C+1N (predeterminado) | 2C+1N (2 paquetes confirmados y 1 no confirmado) es la mejor estrategia; este modo puede minimizar la tasa de pérdida de paquetes; sin embargo, el dispositivo consumirá la mayor cantidad de paquetes de datos en TTN, o créditos de datos en la red Helium. |
| 1C | 1C (1 confirmado): el dispositivo entrará en reposo después de recibir 1 paquete de confirmación del servidor. |
| 1N | 1N (1 no confirmado): el dispositivo solo envía el paquete y luego empieza a dormir, sin importar si el servidor recibió los datos o no. |

### Restaurar la configuración de fábrica

Al seleccionar la plataforma SenseCAP, debes utilizar el EUI/App EUI/App Key fijos. Por lo tanto, debes restaurar la configuración de fábrica antes de volver a cambiar a la plataforma SenseCAP desde otras plataformas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"/></div>

Cuando cometamos un error o queramos restablecer todo, podemos hacer clic en el botón. El dispositivo se restaurará a la configuración predeterminada de fábrica.

**\*Nota:** La función "Restore Factory" solo puede restablecer la configuración básica.

## Configurar el sensor analógico mediante la App

Selecciona el “Protocol” como “Analog Input”. Luego configura los siguientes parámetros por turno.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"/></div>

Selecciona el tipo de alimentación como **Periodical power**.

| Tensión de alimentación | Seleccionamos **5V** aquí. |
| --- | --- |
| Tiempo de calentamiento del sensor | El tiempo de calentamiento indica el tiempo que tarda el sensor en alcanzar su máxima precisión o nivel de rendimiento una vez que se ha aplicado la alimentación. Introducimos **200(ms)** aquí. |
| Rango de tensión | 0-10V (el Data Logger puede recoger señales de tensión dentro de 0~10V y ajustar automáticamente el límite superior para aumentar la precisión). Seleccionamos **Voltage** aquí. |
| Interfaz V1 | El Data Logger admite dos señales de tensión analógica. Cuando el cable del sensor está conectado a V1/V2, se puede habilitar la configuración. Habilitamos **Interface V1** aquí. |
| Interfaz V2 |
| Y= Ax + B | "Y": es el valor que el Data Logger subirá. "x": es el valor de corriente original. Factor A: valores personalizados que pueden escalarse hacia arriba o hacia abajo por múltiplos de "x". Factor B: un valor personalizado que incrementa o disminuye el valor de "x". Al configurar los valores de A y B, puedes calcular el valor deseado. Establecemos A como **100** y B como **0** aquí. |

Una vez completada la información de configuración, haz clic en "Back to Home" (en este momento, el nodo y el Bluetooth de la APP se desconectarán automáticamente), y el Data Logger intentará conectarse a la red (el indicador LED parpadea en rojo lentamente cuando intenta conectarse a la red y parpadea en verde rápidamente después de que la conexión a la red se haya realizado correctamente);

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"/></div>

# Comprobar los datos en el Portal SenseCAP

## Vincular el sensor al Portal SenseCAP

Por favor, abre la aplicación SenseCAP Mate.

1. **Escanear código QR**

1. Haz clic en "Add device" en la esquina superior derecha de la página del dispositivo para entrar en la página de vinculación del dispositivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"/></div>

1. Escanea el código QR del dispositivo para vincularlo a tu cuenta. Si no lo asignas a un grupo designado, el dispositivo se colocará en el grupo "default".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"/></div>

1. **Rellenar manualmente el EUI**

Si la pegatina del código QR está dañada, puedes rellenar manualmente el EUI del dispositivo para vincularlo a tu cuenta. Asegúrate de introducir el EUI en el formato sugerido por el sistema y luego haz clic en "confirm".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"/></div>

## Comprobar datos en la APP SenseCAP Mate

Finalmente, en la aplicación SenseCAP o en el sitio web [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/), puedes comprobar el estado en línea del dispositivo y los datos más recientes. En la lista de cada sensor, puedes comprobar su estado en línea y la hora de su última carga de datos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"/></div>

También puedes comprobar la fecha en la APP SenseCAP Mate.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"/></div>
