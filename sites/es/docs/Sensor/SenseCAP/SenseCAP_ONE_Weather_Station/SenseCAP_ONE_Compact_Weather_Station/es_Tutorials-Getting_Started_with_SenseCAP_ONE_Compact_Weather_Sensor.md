---
description: Primeros pasos con el sensor meteorológico compacto SenseCAP ONE
title: Primeros pasos con el sensor meteorológico compacto SenseCAP ONE
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
sku: 101990787,101990693,101990784,101990902,101990961,101991022,101991021,101991023,101991024,101991044,101991102,101991050,101991232,101991141
last_update:
  date: 03/18/2026
  author: Kian
createdAt: '2023-04-13'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/es/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor/
---
# Primeros pasos con el sensor meteorológico compacto SenseCAP ONE

# Preinstalación

## Instalación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png" /></div>

# Instalación

### Introducción a la interfaz del dispositivo

Hay dos conectores en la parte inferior del dispositivo.

- La interfaz USB Type-C te permite conectar tu ordenador al dispositivo con un cable USB Type-C normal para su configuración.

- La interfaz principal de datos se puede conectar al cable M12 de 8 pines, admitiendo múltiples protocolos de bus

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png" /></div>

#### Estaciones meteorológicas V1 vs V2

Las estaciones meteorológicas V1 y V2 se pueden identificar por **el SKU en la etiqueta blanca** o por el diseño de la base.

Además, el puerto USB Type-C está ubicado de forma diferente: en la V1, está en el mismo lado que la etiqueta blanca, mientras que en la V2 está en el lado opuesto.

:::tip
Las siguientes estaciones meteorológicas se han actualizado a V2: S500, S700 y S1000.
:::

| Nombre del producto | SKU V1   | SKU V2    |
| -----------  | --------  | --------- |
| S200         |    Ninguno   | 101991044 |
| S500         | 101990693 | 101991021 |
| S600-A       |    Ninguno   | 101991232 |
| S700         | 101990787 | 101991022 |
| S700-A       |    Ninguno   | 101991050 |
| S700-B       |    Ninguno   | 101991102 |
| S700-C       |    Ninguno   | 101991141 |
| S800         |    Ninguno   | 101991023 |
| S900         | 101990784 |    Ninguno   |
| S1000        | 101990902 | 101991024 |

:::info
- ¿Cuál es la diferencia entre SenseCAP ONE V2 y V1?
  - La función de software no ha cambiado, V2 es totalmente compatible para reemplazar a V1.
  - Optimización parcial del rendimiento, como la medición del viento.
  - Se ha eliminado la interfaz RS422/RS232.
:::

#### Distribución de la interfaz del dispositivo V1

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/V1.png" /></div>

#### Distribución de la interfaz del dispositivo V2

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3_V2.png" /></div>

### Conectar con cable USB

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png" /></div>

### Cable M12

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png" /></div>

El dispositivo adopta un conector M12 de 8 pines; los pines de diferentes colores proporcionan alimentación y comunicación de datos (como se muestra en el diagrama anterior).

Cuando se trabaja con RS-485, puedes conectar solo 4 cables (sin usar la función de calefacción), y el resto se puede envolver individualmente con cinta para evitar cortocircuitos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png" /></div>
A continuación se muestra el esquema de cableado del conector M12 para tu referencia.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/M12_connector_faces_p1_p2.png" /></div>

La siguiente imagen es un diagrama de definición de cableado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/wiring-definition.png" /></div>

Los orificios del cable y los pines del conector del dispositivo deben estar alineados cuando se enchufa el cable.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png" /></div>

Conecta el cable y apriétalo en el sentido de las agujas del reloj

Nota: el cable debe estar orientado hacia la parte inferior antes de insertarlo en la parte inferior. De lo contrario, si los pines quedan torcidos puede causar una comunicación anormal.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png" /></div>

Cuando se utiliza el dispositivo con función de calefacción, se requiere una fuente de alimentación de 24V independiente (se recomienda 24V@1A). El cable gris 5 se conecta al negativo de la fuente de alimentación y el cable rosa 6 se conecta al polo positivo de la fuente de alimentación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png" /></div>

### Instalar el dispositivo

Hay dos métodos principales de instalación: montado en un poste con una manga o en una plataforma con una placa de brida.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

El tamaño de la manga se muestra a continuación.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png" /></div>

Se recomienda que el diámetro del poste sea menor o igual a 75 cm.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png" /></div>

La dimensión de la placa de brida se muestra a continuación.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png" /></div>

> Nota: Para obtener los datos de dirección del viento más precisos posibles, asegúrate de la orientación física hacia el norte durante la instalación alineando la **flecha** en la base directamente hacia el norte verdadero. De lo contrario, habilita la brújula electrónica durante la configuración.

# Modo de funcionamiento del dispositivo

Después de la instalación, puedes encender el dispositivo, configurarlo y recopilar datos del dispositivo.

El dispositivo tiene dos modos de funcionamiento, **modo de configuración y modo de trabajo.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png" /></div>

### Configurar el dispositivo a través del puerto USB

Hay una tapa redonda impermeable en la parte inferior del dispositivo. Gírala en sentido antihorario para quitar esta tapa y podrás ver un conector USB Type-C y un botón de configuración.

Conecta el dispositivo a tu ordenador con un cable USB Type-C. El ordenador instalará automáticamente el controlador del dispositivo. Después de que el controlador se instale correctamente, podrás ver un puerto serie en el administrador de dispositivos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png" /></div>

Si el controlador no se instala automáticamente, haz clic en este enlace para [descargar manualmente](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) e [instalar](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) el [controlador](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers).（La versión es CP210x Windows Drivers）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png" /></div>

**Hay dos métodos para configurar el dispositivo:**

- SenseCAP ONE Configuration Tool

- Herramienta de depuración serie

### SenseCAP ONE Configuration Tool

SenseCAP ONE Configuration Tool ofrece una interfaz gráfica para que configures el dispositivo. Y puedes descargar la herramienta desde el siguiente enlace de GitHub:

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

Selecciona el software para el sistema operativo correspondiente, Windows, macOS o Linux según tus necesidades.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

La siguiente imagen muestra la interfaz principal de SenseCAP ONE Configuration Tool.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

1. Abre el software, haz clic en el cuadro desplegable en el puerto serie y selecciona el puerto serie correspondiente del dispositivo.

2. Establece la tasa de baudios en 9600.

3. Haz clic en conectar; si la conexión es correcta, el área de datos del sensor a la derecha mostrará las mediciones correspondientes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png" /></div>

Haz clic en Settings para entrar en los ajustes del dispositivo y haz clic en "Read From Device" para obtener información sobre el dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png" /></div>

1. Selecciona el protocolo de comunicación. En el ejemplo aquí elegimos RS-485 Modbus RTU.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png" /></div>

2. Modifica la dirección Modbus: escribe la dirección en la dirección Modbus y luego haz clic en "Write to Device".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png" /></div>

En la página de configuración, puedes modificar lo siguiente: nombre del dispositivo, tipo de datos e intervalo de carga de datos. Después de cualquier modificación, deberás hacer clic en "Write to Device" para que los cambios surtan efecto.

En los ajustes de la aplicación, puedes establecer el ciclo para que la herramienta lea los datos del sensor, con un mínimo de 2S, y un rango de puntos para la curva.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png" /></div>

Haz clic en "Firmware Update" para actualizar el firmware del dispositivo. Ponte en contacto con ventas o soporte técnico en (sensecap@seeed.cc) para obtener el firmware.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png" /></div>

En la página de actualización, deberás elegir actualizar el firmware de la placa principal o el firmware de la placa controladora. Selecciona el archivo de firmware en tu repositorio local y haz clic en "Update Now". Si hay un corte de energía inesperado durante el proceso de actualización, la actualización no se ejecutará. Deberás repetir el mismo proceso para actualizar el firmware.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png" /></div>

#### Actualización de firmware

1. Abre `SenseCAP One Configuration Tool`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. Conecta el dispositivo a tu ordenador mediante el cable Type-C

3. Abre el software, selecciona el puerto `COM` correcto para el dispositivo y haz clic en `"Connect"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. Después de conectar, haz clic en `"Firmware Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. Selecciona la placa de destino y el archivo de firmware correspondiente

- Selecciona la `Master board`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- Haz clic en `"Local File"` y navega hasta la carpeta del firmware

- Haz clic en `"Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. Pulsa el botón Reset en el dispositivo (situado junto al puerto Type-C) después de hacer clic en `"Update"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

El proceso de actualización comenzará unos segundos después de pulsar el botón.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. Una vez completada la actualización, pulsa de nuevo el botón Reset y luego haz clic en `"OK"` en la pantalla.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. Repite los pasos anteriores para grabar otro firmware en la `Slave Board 1`.

9. Cierra la ventana de Firmware Update después de finalizar y haz clic en `"Disconnect"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

Con esto se completan todos los pasos de actualización de firmware para la estación meteorológica.

### Herramienta de depuración serie

La configuración de comunicación es la siguiente:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png" /></div>

- En el Serial Debug Assistant, selecciona el puerto COM correspondiente.

- Marca la casilla "click Enter to start a new line".

- Ajusta la velocidad en baudios a 9.600.

- Envía en el área de envío.

- Si recibes el mensaje 0XA correspondiente en la ventana de recepción serie, la configuración se ha realizado correctamente. Si no, comprueba el puerto COM y la velocidad en baudios.

Consulta el comando ASIIC detallado en el siguiente capítulo.

# Protocolos de comunicación

El dispositivo es compatible con los siguientes protocolos de comunicación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png" /></div>

## Protocolo Modbus-RTU

**Parámetros de comunicación del protocolo**

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/DefaultDeviceAddress.png" /></div>

### Formato de mensaje del protocolo Modbus-RTU

Los datos del sensor se almacenan en el Input Register y son de solo lectura.

La dirección del dispositivo y la velocidad en baudios de RS-485 se almacenan en el Holding Register y se pueden modificar.

Cada registro es de 16 bits y ocupa 2 bytes.

**Leer el mensaje desde el input register.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png" /></div>

**Leer y escribir el holding register.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png" /></div>

### Definición de dirección de registro

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png" /></div>

### Lectura Modbus-RTU

Aquí hay un ejemplo de la **herramienta Modbus Poll**

(descarga desde &lt;https://www.modbustools.com/download.html&gt;).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png" /></div>

Configura los parámetros de conexión: velocidad en baudios 9600 bps, 8 bits de datos,
sin paridad, 1 bit de parada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png" /></div>

Lee el registro de temperatura del aire 0x0000 a 0x0001, haz clic en Setup y selecciona Read/Write Definition

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png" /></div>

Configura el ID de esclavo predeterminado (5-en-1 es 10, 7-en-1 es 20, 9-en-1 es 38), código de función 04, dirección inicial 0, cantidad (5-en-1 es 6, 7-en-1 es
28, 9-en-1 es 32);

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png" /></div>

Ahora el ordenador lee los datos del sensor cada 1 segundo, y la medición (línea 0 y línea 1) se muestra en la imagen siguiente; después de dividir la medición entre 1000, se obtiene el valor real de temperatura, 28300/1000 = 28,3 °C

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png" /></div>

A la derecha, puedes comprobar los paquetes de datos enviados y recibidos en bruto.

Cuando la temperatura es positiva:

1. El host envía 01 04 00 00 00 02 71 CB

2. El esclavo responde 01 04 04 00 00 6E 8C D6 41

3. Devuelve los datos de temperatura 0x00006E8C (Hex), convertidos a decimal = 28300, se obtiene la temperatura del aire correspondiente dividiéndola entre 1000, temperatura del aire = 28300/1000 = 28,3 °C

**Cuando la temperatura es negativa**

Es necesario obtener la temperatura mediante un cálculo de complemento.

1. El host envía 01 04 00 00 00 02 71 CB

2. El esclavo responde 01 04 04 FF FF FC 18 D6 41

3. Datos de temperatura devueltos FFFFFC18H (complemento Hex).

4. El código original es - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8(Hex) = -1000 (Decimal).

5. Entonces la medición de temperatura es -1000/1000 = -1°

**Decodificación S500**

Lee el registro 0x0000~0x0005.

Enviar comando: 0A 04 00 00 00 06 71 73 (Check code);

Respuesta: 26 04 40 00 00 70 80 (Temperature) 00 00 95 10 (Humidity) 06 07 94 40 (Air pressure) 99 09 (Check code); Lee el registro 0x0008~0x0013. Enviar comando: 0A 04 00 08 00 0C 70 B6 (Check code);

Respuesta: 0A 04 0C 00 00 00 00 (Min wind direction) 00 03 6E 84 (Max wind direction) 00 03 C8 C0 (Avg wind direction) 00 00 00 00 (Min wind speed) 00 00 04 BC (Max wind speed) 00 00 02 10 (Avg wind speed) BC 78 (Check code)

**Decodificación S600**

Lee el registro 0x0000~0x0013

Enviar comando: 45 03 00 00 00 13 0B 43

Respuesta: 45 04 40 00 00 70 80 (Temperature) 00 00 95 10 (Humidity) 06 07 94 40 (Air pressure) 00 00 00 00 (Light) 00 00 00 00 (Min wind direction) 00 00 00 00 (Max wind speed) 00 00 00 00 (Avg wind direction) 00 00 00 00 (Min wind speed) 00 00 00 00 (Max wind speed) 00 00 00 00 (Avg wind speed) 77FD (Check code)

**Decodificación S700**

Lee el registro 0x0000-0x001F y 0x0030-0x0033.

Enviar comando: 14 04 00 00 00 20 F3 06

Respuesta: 14 04 40 00 00 70 80 (Temperature) 00 00 95 10 (Humidity) 06 07 94 40 (Air pressure) 00 00 00 00 (Light) 00 00 00 00 (Min wind direction) 00 00 00 00 (Max wind direction) 00 00 00 00 (Avg wind direction) 00 00 00 00 (Min wind speed) 00 00 00 00 (Max wind speed) 00 00 00 00 (Avg wind speed) 00 00 00 00 (Accumulated rainfall) 00 00 00 00 (Accumulated rainfall duration) 00 00 00 00 (Rain intensity) 00 00 00 00 (Maximum rainfall intensity) 00 00 6A 7C (Heating Temperature) 00 00 00 00 (The dumping of state) 99 09 (Check code)

**Decodificación S900**

Lee el registro 0x0000-0x001F y 0x0030-0x0033.

Enviar comando: 26 04 00 00 00 20 F7 05

Respuesta: 26 04 40 00 00 70 80 (Temperature) 00 00 95 10 (Humidity) 06 07 94 40 (Air pressure) 00 00 00 00 (Light) 00 00 00 00 (Min wind direction) 00 00 00 00 (Max wind direction) 00 00 00 00 (Avg wind direction) 00 00 00 00 (Min wind speed) 00 00 00 00 (Max wind speed) 00 00 00 00 (Avg wind speed) 00 00 00 00 (Accumulated rainfall) 00 00 00 00 (Accumulated rainfall duration) 00 00 00 00 (Rain intensity) 00 00 00 00 (Maximum rainfall intensity) 00 00 6A 7C (Heating Temperature) 00 00 00 00 (The dumping of state) 99 09 (Check code)

PM2.5 y PM10 deben leerse por separado:

Enviar comando: 26 04 00 30 00 04 F7 11

Respuesta: 26 04 08 00 00 90 88 (PM2.5) 00 00 A4 10 (PM10) 13 FA (Check code)

**Decodificación S1000**

Lee el registro 0x0000-0x001F y 0x0030-0x0033.

Enviar comando: 2B 04 00 00 00 20 F6 18

Devolución: 2B 04 40 00 00 70 80 (Temperatura) 00 00 95 10(Humedad) 06 07 94 40(Presión atmosférica) 00 00 00 00(Luz) 00 00 00 00(Dirección mínima del viento) 00 00 00 00(Dirección máxima del viento) 00 00 00 00(Dirección media del viento) 00 00 00 00 (Velocidad mínima del viento) 00 00 00 00(Velocidad máxima del viento) 00 00 00 00(Velocidad media del viento) 00 00 00 00(Lluvia acumulada) 00 00 00 00(Duración de la lluvia acumulada) 00 00 00 00(Intensidad de lluvia) 00 00 00 00(Intensidad máxima de lluvia)00 00 6A 7C(Temperatura de calefacción) 00 00 00 00(El estado de vuelco) 99 09(Código de comprobación)

PM2.5, PM10 y CO2 deben leerse por separado：

Enviar comando: 2B 04 00 30 00 04 F6 0C

Devolución: 2B 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(Código de comprobación)

Leer registro 0x0040~0x0041.

Enviar comando:2B 04 00 40 00 02 77 D5

Devolución:2B 04 04 00 0C EC 98 （CO2） FD 2F （Código de comprobación）；

### Sensor de ruido

El sensor de ruido se utiliza como un sensor RS485 independiente, que está en paralelo con otras unidades de medición en el mismo bus RS-485, por lo que debe leerse y configurarse por separado.

Especificación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png" /></div>

Protocolo de lectura de datos y configuración:

El protocolo de comunicación adopta el protocolo estándar RS485 Modbus-RTU y los parámetros de comunicación del protocolo son los siguientes:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png" /></div>

Consulta de los datos del sensor de ruido (dirección: 40, 0x28) :

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png" /></div>

Si la consulta se realiza correctamente, se devuelve la siguiente información:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png" /></div>

DB real = valor del registro /100

El valor del registro de ruido es 0x128E=4750, y el valor es =4750/100=47.5dB

## Protocolo ASCII

### Definición de comando

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png" /></div>

### Formato de comando de consulta

Los comandos vienen en dos formatos:

**1.** **Un comando sin =** **se refiere al método básico de consulta.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png" /></div>

*Ejemplo: `?<CR><LF>` indica consultar la dirección del dispositivo*

**2.** Un comando **con = se refiere a una consulta con un argumento**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png" /></div>

*Ejemplo: 0XA;BD=`?<CR><LF>` indica consultar la velocidad en baudios del dispositivo*

### Formato de comando de configuración

**Establecer un parámetro especificado, como configurar una velocidad en baudios.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png" /></div>

*Ejemplo: 0XA;BD=96`<CR><LF>` indica consultar la velocidad en baudios del dispositivo*

### Lista de comandos

Por favor, consulta:
[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## SDI-12

La comunicación SDI-12 adopta tres cables, dos de los cuales son cables de alimentación del sensor y el otro es el cable de señal SDI-12.

Cada sensor en el bus SDI-12 tiene una dirección única, que se puede configurar en '0', '1' ~ '9', 'A' ~ 'Z', 'A' ~ 'Z'. La dirección SDI-12 del SenseCAP ONE es por defecto '0'. Las instrucciones admitidas por este sensor se muestran en el siguiente capítulo, donde cada instrucción cumple con SDI-12 v1.4.

El sensor se alimenta con una fuente de alimentación de CC de 3.6~16V. Después de que el sensor se enciende, entrará inmediatamente en modo de suspensión y esperará a que el equipo de adquisición de datos dé instrucciones. SDI-12 utiliza una velocidad en baudios de 9600bps, 1 bit de inicio (nivel alto), 7 bits de datos (alto 0 y bajo 1, lógica inversa), 1 bit de paridad par y 1 bit de parada.

La secuencia de cada byte enviado se muestra en la siguiente figura:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png" /></div>

### Comando y respuesta SDI-12

Por favor, consulta [SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

### Lectura SDI-12

**Cableado del SDI-12**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png" /></div>

**Usar un depurador USB a SDI-12 para comunicarse con el dispositivo**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png" /></div>

**Los ajustes de comunicación:**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png" /></div>

Conecta el cable verde (GND Data) y el cable amarillo (SDI-12 Data) al depurador **USB to SDI-12**.

Y conecta el cable rojo (Vin+ alimentación positiva) y el cable marrón (Vin- tierra de alimentación) a la fuente de alimentación de 12V.

Descarga el asistente de depuración de puerto serie:
&lt;https://github.com/Neutree/COMTool&gt;, y luego abre la herramienta de depuración de puerto serie.

- Elige el número de puerto correcto

- Configura la velocidad en baudios a la velocidad en baudios del depurador USB to SDI-12 (ten en cuenta que no es la velocidad en baudios del protocolo SDI-12)

- Marca "CRLF"

- Haz clic para abrir el puerto serie.

- Envía el comando de consulta de dirección del dispositivo "?!", si puedes ver la respuesta "0", significa que la conexión es correcta.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png" /></div>

**Iniciar medición**

Leer temperatura del aire, humedad del aire, presión barométrica, intensidad de la luz

Envía el "comando de inicio de medición 0M!", el sensor primero responde con "00024", lo que significa que el comando "0M!" tarda 2 segundos en medir y devuelve 4 valores medidos. Después de 2 segundos, el sensor responde con su propia dirección "0", indicando que la medición se ha completado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png" /></div>

Luego envía " Comando de lectura de valor de medición 0D0!" para obtener los 4 valores medidos de esta medición, que son temperatura del aire +27.01℃, humedad del aire 64.74%, presión barométrica 100720Pa e intensidad de la luz 10Lux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png" /></div>

Usa el comando de medición extendida 0M1! para leer dirección mínima del viento, dirección máxima del viento, dirección media del viento, velocidad mínima del viento, velocidad máxima del viento y velocidad media del viento. El dispositivo responde con "00056", lo que significa que el comando "0M1!" tarda 5 segundos en medir y devuelve 6 valores medidos. Después de 5 segundos, el dispositivo responde con su propia dirección "0", indicando que la medición se ha completado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png" /></div>

Luego envía "Comando de lectura de valor de medición 0D0!" para obtener los 6 valores medidos de esta medición, que son dirección mínima del viento 345.9 grados, dirección máxima del viento 347.5 grados, dirección media del viento 346.3 grados, velocidad mínima del viento 2.8m/s y velocidad máxima del viento 2.8m/s, velocidad media del viento 2.8m/s.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png" /></div>

Luego envía "comando de medición continua 0R2! el dispositivo devuelve 4 valores medidos: lluvia acumulada 1.2mm, duración de la lluvia acumulada 20 segundos, intensidad de lluvia 1.2mm/h, intensidad máxima de lluvia 72.0mm/h.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png" /></div>

## Código de error

### Código de error Modbus

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png" /></div>

### Código de error ASCII

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png" /></div>

### Código de error SDI-12

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png" /></div>

## Recurso

[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## Preguntas frecuentes

**¿Cómo se calculan la velocidad y la dirección media del viento?**

La ventana de tiempo promedio predeterminada es de 5 s. Dentro de esta ventana, el dispositivo recopilará datos de velocidad y dirección del viento cinco veces y devolverá un valor promedio.
