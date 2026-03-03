---
description: Configurar el Sensor Analógico
title: Configurar el Sensor Analógico
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
---

# Comenzando con S2100 usando Sensor de Entrada Analógica
Comencemos aprendiendo cómo usar el S2100 con un sensor de entrada analógica. Una vez que dominemos eso, pasaremos a los conceptos básicos de la aplicación del S2100. Esto te dará una buena idea de cómo conectar tu propio sensor personalizado en el futuro.
## Prepara estos elementos

- Registrador de datos
- Sensor de luz (como ejemplo)
- Destornillador de cruz (Cruz No.2)
- Aplicación SenseCAP Mate

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"/></div>

# Conectar la Sonda del Sensor
Primero, necesitamos hacer el cableado. Por favor sigue los pasos a continuación.

## Desarmar el Registrador de Datos

1. Desatornilla tres tornillos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. Retira la cubierta.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. Retira la tapa roscada y pasa a través de ella el cable del sensor, pásalo a través de la cubierta inferior, y conéctalo al terminal de cableado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>
## Descripción del terminal de cableado

| **No.** | **Pin** | **Descripción** |
| --- | --- | --- |
| 1 | 12V | Voltaje de entrada externo de 12V. El Registrador de Datos puede ser alimentado por una fuente de alimentación DC externa de 12V. Cuando se usa alimentación de 12V, la batería servirá como fuente de alimentación de respaldo. |
| 2 | 5V | Voltaje de salida de 5V, proporcionando voltaje de 5V al sensor. |
| 3 | 3V | Voltaje de salida de 3V, proporcionando voltaje de 3V al sensor. |
| 4 | IO | Adquisición de nivel o entrada de pulso |
| 5 | V1 | Se recopila la entrada de voltaje de 0 a 10V |
| 6 | V2 | Se recopila la entrada de voltaje de 0 a 10V |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | Recopilar la entrada de corriente de 4 a 20mA |
| 10 | I2 | Recopilar la entrada de corriente de 4 a 20mA |
| 11 | GND | Pin de tierra |
| 12 | GND | Pin de tierra |

## Opciones de alimentación del sensor

El Data Logger admite dos modos de alimentación, elegimos el modo de Batería Incorporada ya que el sensor de luz solo necesita una alimentación de 5v:

| **Modo** | **Descripción** |
| --- | --- |
| Batería Incorporada | El Data Logger y los sensores son alimentados por baterías. En este caso, el Data Logger puede conectarse a un sensor de 5V. |


## Conectar al Datalogger

Secuencia de cables del Datalogger:

| **Tipo de Cable** | **Descripción** |
| --- | --- |
| Cable Rojo | 5V |
| Cable Negro | GND(Cualquier puerto estaría bien.) |
| Cable Amarillo | IO |

1. Pase el cable de 8 pines a través de la cubierta inferior y conéctelo a la base del Data Logger según los requisitos de secuencia de cables;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"/></div>


2. Conecte la cubierta superior, el anillo de goma y la tapa roscada en secuencia

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"/></div>

3. **Apriete los tornillos y las tapas roscadas** **para verificar la impermeabilización**. Si el diámetro del cable es demasiado delgado, agregue cinta impermeable para enrollar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"/></div>

**\*Nota:** Al ensamblar el dispositivo, es necesario instalar la almohadilla impermeable del Data Logger y la caja adaptadora, y apretar la tapa roscada y el tornillo, ¡de lo contrario el efecto impermeable del dispositivo puede verse afectado!

Si el diámetro del cable es demasiado pequeño, se puede envolver con cinta impermeable, como se muestra a continuación:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"/></div>

Hemos terminado el cableado en este punto. Ahora, configuremos el S2100 y configurémoslo en nuestra APP.
# Configurar el S2100

## Conectar el Sensor a la App

1. Presione el botón y manténgalo presionado durante **3 segundos**, el LED parpadeará con una frecuencia de 1s. Por favor use la App para conectar el sensor dentro de 1 minuto; de lo contrario, el dispositivo se apagará o reiniciará.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"/></div>

2. Por favor seleccione "S2100 Data Logger".

Por favor haga clic en el botón "Setup" para activar Bluetooth y haga clic en "Scan" para comenzar a escanear el Bluetooth del sensor.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"/></div>

3. Seleccione el Sensor por S/N (S/N está en la etiqueta frontal del sensor). Luego, la información básica del sensor se mostrará después de ingresar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"/></div>

4. Ingrese al modo de configuración después de que la conexión Bluetooth sea exitosa: LED parpadea con una frecuencia de 2s.

## Configurar Parámetros Básicos a través de la App

### Seleccionar la Plataforma y Frecuencia

Los Sensores S210x están fabricados para soportar un plan de frecuencia universal de 863MHz ~928MHz en un SKU. Es decir, cada dispositivo individual puede soportar 7 planes de frecuencia.

Aquí seleccionamos "SenseCAP for Helium" o "SenseCAP for TTN". El Plan de Frecuencia basado en su situación actual.

**\*Nota:** El Data Logger puede cargar datos cuando hay una red Helium alrededor del usuario. Funciona en SenseCAP private Helium Console. Los usuarios no necesitan crear un dispositivo en Helium Console;

La plataforma SenseCAP for TTN necesita ser usada con el gateway LoRaWAN exterior SenseCAP (https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"/></div>

### Establecer el Intervalo

El modo de trabajo del dispositivo: despertar el dispositivo cada intervalo y recopilar valores de medición y cargarlos a través de LoRa.

Por ejemplo, el dispositivo recopila y carga datos **cada 60 minutos por defecto**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"/></div>

### Establecer la Política de Paquetes

La estrategia de paquetes de enlace ascendente del sensor tiene tres modos, seleccionamos 1N aquí o puede según su propio requerimiento.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"/></div>

| **Parámetro** | **Descripción** |
| --- | --- |
| 2C+1N (predeterminado) | 2C+1N (2 paquetes de confirmación y 1 sin confirmación) es la mejor estrategia, el modo puede minimizar la tasa de pérdida de paquetes, sin embargo el dispositivo consumirá la mayor cantidad de paquetes de datos en TTN, o créditos de datos en la red Helium. |
| 1C | 1C (1 confirmación) el dispositivo dormirá después de obtener 1 paquete de confirmación recibido del servidor. |
| 1N | 1N (1 sin confirmación) el dispositivo solo envía el paquete y luego comienza a dormir, sin importar si el servidor recibió los datos o no. |

### Restaurar Configuración de Fábrica

Al seleccionar la plataforma SenseCAP, debe usar el EUI/App EUI/App Key fijo. Por lo tanto, necesita restaurar la configuración de fábrica antes de cambiar de vuelta a la plataforma SenseCAP desde otras plataformas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"/></div>

Cuando cometemos un error o queremos restablecer todo, podemos hacer clic en el botón. El dispositivo será restaurado a la configuración predeterminada de fábrica.

**\*Nota:** La función "Restaurar Fábrica" solo puede restablecer la Configuración Básica.

## Configurar Sensor Analógico a través de la App
Seleccione el "Protocolo" como "Entrada Analógica". Luego configure los siguientes parámetros en orden.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"/></div>

Seleccione el Tipo de Alimentación como **Alimentación periódica**.

| Voltaje de Alimentación | Seleccionamos **5V** aquí. |
| --- | --- |
| Tiempo de Calentamiento del Sensor | El tiempo de calentamiento denota la cantidad de tiempo que toma para que el sensor alcance su nivel más alto de precisión o rendimiento una vez que se ha aplicado el suministro de voltaje. Ingresamos **200(ms)** aquí. |
| Rango de Voltaje | 0-10V (El Registrador de Datos puede recopilar señales de voltaje dentro de 0~10V y ajustar automáticamente el límite superior para aumentar la precisión). Seleccionamos **Voltaje** aquí. |
| Interfaz V1 | El Registrador de Datos soporta dos señales de voltaje analógico. Cuando el cable del sensor está conectado a V1/V2, la configuración puede ser habilitada. Habilitamos **Interfaz V1** aquí. |
| Interfaz V2 |
| Y= Ax + B | "Y": Es el valor que el Registrador de Datos subirá. "x": Es el valor de corriente original. Factor A: Valores personalizados que pueden escalar hacia arriba o hacia abajo por múltiplos de la "x". Factor B: Un valor personalizado que incrementa o disminuye el valor de la "x". Al establecer los valores de A y B, puede calcular el valor deseado. Establecemos A como **100** , B como **0** aquí. |

Después de completar la información de configuración, haga clic en "Back to Home" (en este momento, el nodo y el Bluetooth de la APP se desconectarán automáticamente), y el Data Logger intentará conectarse a la red (el indicador LED parpadea en rojo lentamente cuando intenta conectarse a la red, y parpadea en verde rápidamente después de que la red se conecte exitosamente);

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"/></div>

# Verificar datos en el Portal SenseCAP

## Vincular Sensor al Portal SenseCAP

Por favor abra la App SenseCAP Mate.

1. **Escanear Código QR**

1. Haga clic en "Add device" en la esquina superior derecha de la página del dispositivo para ingresar a la página de vinculación del dispositivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"/></div>

1. Escanee el código QR en el dispositivo para vincular el dispositivo a su cuenta. Si no lo configura en un grupo designado, el dispositivo se colocará en el grupo "default".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"/></div>

1. **Llenar manualmente el EUI**

Si la etiqueta del código QR está dañada, puede llenar manualmente el EUI del dispositivo para vincular el dispositivo a su cuenta. Por favor asegúrese de ingresar el EUI en el formato sugerido por el sistema y luego haga clic en "confirm".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"/></div>

## Verificar Datos en la APP SenseCAP Mate

Finalmente, en la App SenseCAP o en el sitio web [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) , puede verificar el estado en línea del dispositivo y los datos más recientes. En la lista de cada Sensor, puede verificar su estado en línea y la hora de su última carga de datos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"/></div>

También, puede verificar la fecha en la APP SenseCAP Mate.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"/></div> 

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"/></div> 

