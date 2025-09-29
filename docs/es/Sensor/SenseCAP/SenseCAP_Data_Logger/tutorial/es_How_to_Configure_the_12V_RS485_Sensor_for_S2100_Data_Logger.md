---
description: Configurar el Sensor de 12V RS485
title: Configurar el Sensor de 12V RS485
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg
slug: /es/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger
keywords: [SenseCAP data logger, data logger, collector]
last_update:
  date: 08/17/2024
  author: Yvonne
---

# Primeros Pasos con el S2100 y un Sensor de 12V RS485

Esta guía te ayudará a comenzar con el S2100 y un sensor de 12V RS485. Después de completar esto, entenderás cómo conectar tu propio sensor personalizado en el futuro.

## Paso 1: Reunir los Elementos Necesarios

- Data Logger
- UNA Estación Meteorológica Compacta (como ejemplo)
- Caja de conexiones
- Cable M12
- Cable de 8 pines (40cm)
- Destornillador de cruz (Cruz No.2)
- Aplicación SenseCAP Mate

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## Paso 2: Conectar el Sensor

Sigue los pasos a continuación para completar el proceso de cableado.

### Paso 2.1: Desmontar el Data Logger

1. Desenrosca los tres tornillos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Retira la cubierta.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Retira la tapa roscada, pasa el cable del sensor a través de la tapa y la cubierta inferior, y conéctalo al terminal de cableado.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Paso 2.2: Descripción del Terminal de Cableado

|**No.**|**Pin**|**Descripción**|
| - | - | - |
| 1 | 12V | Voltaje de entrada externo de 12V. El Data Logger puede ser alimentado por una fuente de alimentación externa de 12V DC. Cuando se usa una fuente de 12V, la batería servirá como fuente de alimentación de respaldo. |
| 2 | 5V  | Voltaje de salida de 5V, proporcionando voltaje de 5V al sensor. |
| 3 | 3V  | Voltaje de salida de 3V, proporcionando voltaje de 3V al sensor. |
| 4 | IO  | Adquisición de nivel o entrada de pulso. |
| 5 | V1  | Se recolecta entrada de voltaje de 0 a 10V. |
| 6 | V2  | Se recolecta entrada de voltaje de 0 a 10V. |
| 7 | A   | RS485 A/+ |
| 8 | B   | RS485 B/- |
| 9 | I1  | Recolecta la entrada de corriente de 4 a 20mA. |
| 10 | I2 | Recolecta la entrada de corriente de 4 a 20mA. |
| 11 | GND| Pin de tierra. |
| 12 | GND| Pin de tierra. |

### Paso 2.3: Opciones de Suministro de Energía para el Sensor

El Data Logger admite dos modos de suministro de energía. Aquí utilizaremos el modo de CC Externa de 12V:

| **Modo** | **Descripción** |
| - | - |
| Batería Incorporada | El Data Logger y los sensores son alimentados por baterías. En este caso, el Data Logger puede conectarse a un sensor de 5V. |
| CC Externa de 12V | Suministra energía al Data Logger y al sensor a través de una fuente de alimentación externa de 12V. Si la CC externa de 12V se desconecta, el sistema cambia a alimentación por batería. Cuando se utiliza una fuente de alimentación externa de 12V, úsala junto con la caja de conexiones para garantizar el rendimiento impermeable del dispositivo. |

### Paso 2.4: Conectar a la Caja de Conexiones

Secuencia de cables del cable M12:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Cuando su sensor requiere alimentación de 12V, la batería sola no puede alimentar el sensor. Por lo tanto, es necesaria una fuente de alimentación externa de 12V.

1. Prepare los siguientes elementos: Adaptador DC de 12V, Caja de conexiones y cable de 8 pines (solo se necesitan 4 pines).
2. Conecte el terminal del Data Logger.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

   Coloque la tapa, el anillo de goma y la tapa roscada en secuencia.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Conecte el terminal de la caja de conexiones.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Conecte el cable del sensor M12 a la caja de conexiones.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

5. Conecte el adaptador DC de 12V a la fuente de alimentación.

## Paso 3: Conectar al Sensor

Ahora que ha conectado exitosamente la caja de conexiones al S2100, procederemos a conectar el sensor.

### Paso 3.1: Aprender la Secuencia de Cables del Sensor ONE Compact Weather Station

El dispositivo utiliza un conector M12 de 8 pines. Los pines de diferentes colores proporcionan alimentación y comunicación de datos como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Cuando trabaje con RS-485, puede conectar solo 4 cables (sin usar la función de calefacción). El resto debe envolverse individualmente con cinta para prevenir cortocircuitos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Asegúrese de que los orificios del cable y los pines del conector del dispositivo **se alineen correctamente** al conectar el cable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Conecte el cable y apriételo en sentido horario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Finalmente, complete el ensamblaje.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**Apriete los tornillos y las tapas roscadas** para asegurar la impermeabilización. Si el diámetro del cable es demasiado delgado, añada cinta impermeable para enrollar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**\*Nota:** Al ensamblar el dispositivo, asegúrese de que la almohadilla impermeable del Data Logger y la caja adaptadora esté instalada, y que la tapa roscada y los tornillos estén apretados. De lo contrario, la impermeabilización del dispositivo puede verse comprometida. Si el diámetro del cable es demasiado pequeño, envuélvalo con cinta impermeable, como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

En este punto, el cableado está completo. Ahora, configuremos el S2100 y configurémoslo usando nuestra aplicación.

## Paso 4: Configurar el S2100

### Paso 4.1: Conectar al Sensor a través de la App

1. Presiona el botón y mantén presionado por **3 segundos**. El LED parpadeará con una frecuencia de 1s. Usa la app para conectarte al sensor dentro de 1 minuto; de lo contrario, el dispositivo se apagará o reiniciará.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Selecciona "S2100 Data Logger".

   Activa Bluetooth haciendo clic en el botón "Setup", luego haz clic en "Scan" para comenzar a escanear el Bluetooth del sensor.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Selecciona el sensor por S/N (S/N está en la etiqueta frontal del sensor). Se mostrará la información básica del sensor.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Entra al modo de configuración después de que la conexión Bluetooth sea exitosa. El LED parpadeará con una frecuencia de 2s.

### Paso 4.2: Configurar Parámetros Básicos a través de la App

#### Seleccionar la Plataforma y Frecuencia

Los Sensores S210x soportan un plan de frecuencia universal de 863MHz a 928MHz. Cada dispositivo puede soportar siete planes de frecuencia.

Aquí, selecciona "SenseCAP for Helium" o "SenseCAP for TTN" basado en tu situación actual.

**\*Nota:** El Data Logger puede subir datos cuando hay una red Helium cercana. Funciona en la Consola Helium privada de SenseCAP, por lo que los usuarios no necesitan crear un dispositivo en la Consola Helium.

La plataforma SenseCAP for TTN necesita ser usada con el [gateway exterior LoRaWAN de SenseCAP](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### Establecer el Intervalo

El dispositivo recolecta y sube datos **cada 60 minutos por defecto**. Puedes ajustar este intervalo basado en tus necesidades.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### Establecer la Política de Paquetes

Selecciona la estrategia de paquetes de enlace ascendente basada en tus requerimientos. Seleccionaremos 1N aquí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **Parámetro** | **Descripción** |
| - | - |
| 2C+1N (por defecto) | 2C+1N (2 paquetes de confirmación y 1 sin confirmación) minimiza la pérdida de paquetes, pero consume la mayor cantidad de paquetes de datos en TTN o créditos de datos en la red Helium. |
| 1C | 1C (1 confirmación) hará que el dispositivo entre en suspensión después de recibir 1 paquete confirmado del servidor. |
| 1N | 1N (1 sin confirmación) enviará el paquete y luego comenzará a suspenderse, independientemente de si el servidor recibió los datos. |

#### Restaurar Configuración de Fábrica

Si estás cambiando de vuelta a la plataforma SenseCAP desde otras plataformas, restaura la configuración de fábrica. Esto restablece la configuración básica del dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Paso 4.3: Configurar Sensor RS485 Modbus-RTU a través de la App

Selecciona "Protocolo" como "RS485 Modbus RTU" y configura los siguientes parámetros en orden.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **Velocidad de Baudios** | Velocidad de baudios de comunicación con el sensor. Selecciona **9600**. |
| - | - |
| **Dirección Modbus** | La dirección predeterminada es 10 para Five in ONE, 20 para Seven in ONE, 38 para Nine in ONE, y 43 para Ten in ONE. La dirección esclava del sensor va de 1 a 247. Ingresa **20** aquí. |
| **Tipo de Alimentación** | Selecciona **Siempre encendido**. La alimentación periódica reduce el consumo de energía y aumenta la vida útil de la batería al alimentar el sensor solo antes de la recolección de datos. |
| **Voltaje de Alimentación** | Selecciona el voltaje de suministro **12V** al sensor. |
| **Tiempo de Calentamiento del Sensor** | El tiempo que tarda el sensor en alcanzar su mayor precisión o nivel de rendimiento después de aplicar la alimentación. Ingresa **200ms**. |
| **Tiempo de Espera de Respuesta** | Tiempo que el Data Logger espera una respuesta después de enviar una solicitud de lectura de datos al sensor. Si se excede, el comando será reenviado. **5(\*100ms)** es adecuado. |
| **Tiempo de Inicio** | Tiempo para que el sensor comience a comunicarse con Modbus después de ser encendido. **10\*(100ms)** es adecuado. |
| **Número de Mediciones** | Recolectar de 0 a 10 mediciones en modo RS485. Dado que el sensor tiene siete tipos de registros de sensor, selecciona **7**. |
| **Modo de Trabajo** | Selecciona modo **Recolección periódica**: Recolectar y cargar datos periódicamente. |
| **Configuración de Medición** | Configura el registro del valor de medición y otras configuraciones. |

#### Configuración de Medición

Configure cada medición por turnos. Medición1 (**Temperatura del aire**)

|Dirección de Registro|La dirección de registro del valor medido en el sensor, que es un entero. La dirección de registro de temperatura del aire es 0. Ingrese **0** aquí.|
| - | - |
|Código de Función|Código de función Modbus, seleccione **03** aquí.|
|Tipo de Datos|<p>El tipo de datos determina el número de registros leídos del sensor y cómo los datos deben analizar el valor. </p><p>Seleccione **Entero con signo de 32 bits, 0xABCD** aquí.</p>|
|Precisión|<p>Precisión del valor. Puede elegir el lugar decimal del valor de medición. Si se selecciona 1, se reserva un lugar decimal.</p><p>Seleccione **2, #.##** aquí.</p>|
|Y= Ax + B|<p>"Y": Es el valor que el Data Logger subirá. </p><p>"x": Es el valor actual original. </p><p>Factor A: Valores personalizados que pueden escalar hacia arriba o hacia abajo por múltiplos de la "x". </p><p>Factor B: Un valor personalizado que incrementa o disminuye el valor de la "x".</p><p>Al establecer los valores de A y B, puede calcular el valor deseado. Si solo se suben valores sin procesar, establezca A=1 y B=0.</p><p>**El Factor A es 0.001 y el Factor B es 0.**</p>|
|Estrategia de Escritura|<p>Esta función está habilitada solo para algunos sensores especiales y generalmente está deshabilitada por defecto</p><p>Después de leer el valor del registro, se pueden emitir instrucciones especiales al sensor, como la instrucción para vaciar el registro después de leer el registro 0.</p><p>Ninguna: Desactivada por defecto.</p><p>Después de Leer: Enviar el comando RS485 al sensor después de leer el registro.</p><p>En Datos Nuevos: Enviar el comando RS485 al sensor cada 24 horas.</p><p>No necesitamos estrategia de escritura, así que seleccionamos **Ninguna** aquí.</p>|
Medición2 (**Humedad del aire**)

|Dirección de Registro|Ingrese **2** aquí.|
| - | - |
|Código de Función|Seleccione **03** aquí.|
|Tipo de Datos|Seleccione **Entero con signo de 32 bits, 0xABCD** aquí.|
|Precisión|Seleccione **2, #.##** aquí.|
|Y= Ax + B|**A de fábrica es 0.001 y B de fábrica es 0.**|
|Estrategia de Escritura|No necesitamos estrategia de escritura, así que seleccionamos **Ninguna** aquí.|

Medición3 (**Presión barométrica**)

|Dirección de Registro|Ingrese **4** aquí.|
| - | - |
|Código de Función|Seleccione **03** aquí.|
|Tipo de Datos|Seleccione **Entero con signo de 32 bits, 0xABCD** aquí.|
|Precisión|Seleccione **0, #** aquí.|
|Y= Ax + B|**A de fábrica es 0.001 y B de fábrica es 0.**|
|Estrategia de Escritura|No necesitamos estrategia de escritura, así que seleccionamos **Ninguna** aquí.|

Measurement4 (**Intensidad de luz**)

|Register Address|Ingresa **6** aquí.|
| - | - |
|Function Code|Selecciona **03** aquí.|
|Data Type|Selecciona **Signed 32bit integer, 0xABCD** aquí.|
|Precision|Selecciona **0, #** aquí.|
|Y= Ax + B|**Factory A es 0.001 y Factory B es 0.**|
|Write Strategy|No necesitamos estrategia de escritura, así que seleccionamos **None** aquí.|

Measurement5 (**Dirección promedio del viento**)

|Register Address|Ingresa **12** aquí.|
| - | - |
|Function Code|Selecciona **03** aquí.|
|Data Type|Selecciona **Signed 32bit integer, 0xABCD** aquí.|
|Precision|Selecciona **1, #.#** aquí.|
|Y= Ax + B|**Factory A es 0.001 y Factory B es 0.**|
|Write Strategy|No necesitamos estrategia de escritura, así que seleccionamos **None** aquí.|

Measurement6 (**Velocidad promedio del viento**)

|Register Address|Ingrese **18** aquí.|
| - | - |
|Function Code|Seleccione **03** aquí.|
|Data Type|Seleccione **Signed 32bit integer, 0xABCD** aquí.|
|Precision|Seleccione **1, #.#** aquí.|
|Y= Ax + B|**Factory A es 0.001 y Factory B es 0.**|
|Write Strategy|No necesitamos estrategia de escritura, así que seleccionamos **None** aquí.|

Measurement7 (**Intensidad de lluvia**)

|Register Address|Ingrese **24** aquí.|
| - | - |
|Function Code|Seleccione **03** aquí.|
|Data Type|Seleccione **Signed 32bit integer, 0xABCD** aquí.|
|Precision|Seleccione **1, #.#** aquí.|
|Y= Ax + B|**Factory A es 0.001 y Factory B es 0.**|
|Write Strategy|No necesitamos estrategia de escritura, así que seleccionamos **None** aquí.|

Después de configurar estas mediciones, haz clic en **"Back to Home"**. El nodo y la aplicación Bluetooth se desconectarán automáticamente. El Data Logger intentará conectarse a la red. El indicador LED parpadeará en rojo lentamente mientras intenta conectarse y parpadeará en verde rápidamente una vez que la conexión de red sea exitosa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## Paso 5: Verificar Datos en el Portal SenseCAP

### Paso 5.1: Vincular Sensor al Portal SenseCAP

Abre la aplicación SenseCAP Mate.

1. **Escanear Código QR**: Haz clic en **"Add device"** en la esquina superior derecha de la página del dispositivo para ingresar a la página de vinculación del dispositivo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Escanea el código QR en el dispositivo para vincularlo a tu cuenta. Si no lo asignas a un grupo designado, el dispositivo se colocará en el grupo **"default"**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. **Llenar manualmente el EUI**: Si la etiqueta del código QR está dañada, puedes llenar manualmente el EUI del dispositivo para vincularlo a tu cuenta. Asegúrate de que el EUI se ingrese en el formato sugerido por el sistema, luego haz clic en **"confirm"**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Paso 5.2: Verificar Datos en el Portal SenseCAP

En la aplicación SenseCAP Mate o en el [Portal SenseCAP](http://sensecap.seeed.cc/), puedes verificar el estado en línea del dispositivo y los datos más recientes. La lista para cada sensor mostrará su estado en línea y la hora de su última carga de datos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

También puedes verificar los datos en la aplicación SenseCAP Mate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
