---
description: Primeros pasos con el Sensor Meteorológico Compacto SenseCAP ONE
title: Primeros pasos con el Sensor Meteorológico Compacto SenseCAP ONE
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
last_update:
  date: 4/14/2023
  author: Yvonne
---
# Primeros pasos con el Sensor Meteorológico Compacto SenseCAP ONE

# Pre-instalación

## Diagrama

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png" /></div>

# Instalación

### Introducción a la Interfaz del Dispositivo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3.png" /></div>

Hay dos conectores en la parte inferior del dispositivo.

- La interfaz USB Type-C te permite conectar tu computadora con un cable USB Type-C normal al dispositivo para configuración.

- La interfaz principal de datos puede conectarse al cable M12 de 8 pines, soportando múltiples protocolos de bus

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png" /></div>

### Conectar con Cable USB

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png" /></div>

### Cable M12

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png" /></div>

El dispositivo adopta un conector M12 de 8 pines, los pines de diferentes colores proporcionan alimentación y comunicación de datos (como se muestra en el diagrama anterior).

Cuando trabajas con RS-485, puedes conectar solo 4 cables (sin usar función de calentamiento), y el resto puede ser envuelto individualmente con cinta para prevenir cortocircuitos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png" /></div>

Los orificios del cable y los pines del conector del dispositivo deben estar alineados cuando se conecta el cable.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png" /></div>

Conecta el cable y apriétalo en sentido horario

Nota: el cable debe apuntar hacia la parte inferior antes de insertarlo en la parte inferior. De lo contrario, los pines sesgados pueden causar que la comunicación sea anormal.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png" /></div>

Cuando uses el dispositivo con función de calentamiento, se requiere una fuente de alimentación separada de 24V (se recomienda 24V@1A). El cable gris 5 se conecta al
negativo de la fuente de alimentación, y el cable rosa 6 se conecta al polo positivo de la fuente de alimentación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png" /></div>

### Instalar el dispositivo

Hay dos métodos principales de instalación, ya sea montado en un poste con un manguito o en una plataforma con una placa de brida.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

El tamaño del manguito se muestra a continuación.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png" /></div>

Se recomienda que el diámetro del poste sea menor o igual a 75cm.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png" /></div>

La dimensión de la placa de brida se muestra a continuación.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png" /></div>

# Modo de Funcionamiento del Dispositivo

Después de la instalación, puedes encender el dispositivo, configurarlo y recopilar datos del dispositivo.

El dispositivo tiene dos modos de funcionamiento, **modo de configuración y**
**modo de trabajo.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png" /></div>

## Configurar el dispositivo a través del puerto USB

Hay una cubierta redonda impermeable en la parte inferior del dispositivo. Gírala en sentido antihorario para quitar esta cubierta, y podrás ver un conector USB Type-C y un botón de configuración.

Conecta el dispositivo a tu computadora con un cable USB Type-C. La computadora instalará automáticamente el controlador del dispositivo. Después de que el controlador
se instale exitosamente, podrás ver un puerto serie en el administrador del dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png" /></div>

Si el controlador no se instala automáticamente, haz clic en este enlace para [descargar manualmente](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) e [instalar](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) el [controlador](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers).（La
versión es CP210x Windows Drivers）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png" /></div>

**Hay dos métodos para configurar el dispositivo:**

- Herramienta de Configuración SenseCAP ONE

- Herramienta de depuración serie

## Herramienta de Configuración SenseCAP ONE

La Herramienta de Configuración SenseCAP ONE ofrece una interfaz gráfica para que configures el dispositivo. Y puedes descargar la herramienta desde el enlace de GitHub a continuación:

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

Selecciona el software para el sistema operativo respectivo, Windows, macOS, o Linux según tus necesidades.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

La siguiente imagen muestra la interfaz principal de la Herramienta de Configuración SenseCAP ONE.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

1. Abre el software, haz clic en el cuadro desplegable en el puerto serie, y selecciona el puerto serie correspondiente del dispositivo.

2. Establece la velocidad de baudios a 9600.

3. Haz clic en conectar, si la conexión es exitosa, el área de datos del sensor a la derecha mostrará las mediciones correspondientes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png" /></div>

Haz clic en Configuración para entrar a la configuración del dispositivo, y haz clic en "Leer del Dispositivo" para obtener información sobre el dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png" /></div>

1. Selecciona el protocolo de comunicación. En el ejemplo aquí elegimos el RS-485 Modbus RTU.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png" /></div>

2. Modifica la dirección Modbus: escribe la dirección en la dirección Modbus, y luego haz clic en "Escribir al Dispositivo".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png" /></div>

En la página de configuración, puedes modificar lo siguiente: nombre del dispositivo, tipo de datos, e intervalo de carga de datos. Después de cualquier modificación, necesitarás hacer clic en "Escribir al Dispositivo" para que los cambios surtan efecto.

En la configuración de aplicación, puedes establecer el ciclo para que la herramienta lea los datos del sensor, con el mínimo como 2S, y un rango de puntos para la curva.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png" /></div>

Haz clic en "Actualización de Firmware" para actualizar el firmware del dispositivo. Por favor contacta a ventas o soporte técnico en (sensecap@seeed.cc) para obtener el firmware.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png" /></div>

En la página de actualización, necesitarás elegir actualizar el firmware de la placa principal o el firmware de la placa controladora. Selecciona el archivo de firmware en tu repositorio local, y haz clic en "Actualizar Ahora". Si hay un corte de energía inesperado durante el proceso de actualización, la actualización no se ejecutará. Necesitarás pasar por el mismo proceso para actualizar el firmware.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png" /></div>

## Herramienta de depuración serie

La configuración de comunicación es la siguiente:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png" /></div>

- En el Asistente de Depuración Serie, seleccione el puerto COM correspondiente.

- Marque la casilla "hacer clic en Enter para iniciar una nueva línea".

- Configure la velocidad de baudios a 9,600.

- Envíe en el área de envío.

- Si recibe el mensaje 0XA correspondiente en la ventana de recepción serie, la configuración es exitosa. Si no, por favor verifique el puerto COM y la velocidad de baudios.

Por favor revise el comando ASIIC detallado en el siguiente capítulo.

# Protocolos de Comunicación

El dispositivo soporta los siguientes protocolos de comunicación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png" /></div>

## Protocolo Modbus-RTU

**Parámetros de comunicación del protocolo**

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image31.png" /></div>

### Formato de Mensaje del Protocolo Modbus-RTU

Los datos del sensor se almacenan en el Registro de Entrada y son de solo lectura.

La dirección del dispositivo y la velocidad de baudios de comunicación de RS-485 se almacenan en el Registro de Retención y pueden modificarse.

Cada registro es de 16 bits y ocupa 2 bytes.

**Leer el mensaje del registro de entrada.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png" /></div>

**Leer y escribir el registro de retención.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png" /></div>

### Definición de Dirección de Registro

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png" /></div>

### Lectura Modbus-RTU

Aquí hay un ejemplo de la **herramienta Modbus Poll**

(descargar desde &lt;https://www.modbustools.com/download.html&gt;).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png" /></div>

Configurar parámetros de conexión: Velocidad de baudios 9600bps, 8 bits de datos,
Sin paridad, 1 bit de parada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png" /></div>

Leer el registro de temperatura del aire 0x0000 a 0x0001, hacer clic en Setup, y seleccionar Read/Write Definition

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png" /></div>

Configurar el ID de esclavo predeterminado (5-en-1 es 10，7-en-1 es 20，9-en-1 es 38), código de función 04, dirección inicial 0, cantidad (5-en-1 es 6，7-en-1 es
28，9-en-1 es 32);

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png" /></div>

Ahora la computadora lee los datos del sensor cada 1 segundo, y la medición (línea 0 y línea 1) se muestra en la imagen de abajo, después de dividir la medición por 1000, es el valor real de temperatura, 28300/1000 = 28.3 °C

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png" /></div>

A la derecha, puede verificar los paquetes de datos enviados y recibidos sin procesar.

Cuando la temperatura es positiva:

1. El host envía 01 04 00 00 00 02 71 CB

2. El esclavo responde 01 04 04 00 00 6E 8C D6 41

3. Devuelve datos de temperatura 0x00006E8C (Hex), convertido a decimal = 28300, obtiene la temperatura del aire correspondiente dividiéndolo por 1000, temperatura del aire = 28300/1000 = 28.3 °C

**Cuando la temperatura es negativa:**

La temperatura necesita obtenerse a través de un cálculo de complemento.

1. El host envía 01 04 00 00 00 02 71 CB

2. El esclavo responde 01 04 04 FF FF FC 18 D6 41

3. Datos de temperatura devueltos FFFFFC18H (complemento Hex).

4. El código original es - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8(Hex) = -1000 (Decimal).

5. Entonces la medición de temperatura es -1000/1000 = -1°

**Decodificación S500:**

Leer registro 0x0000~0x0005.

Enviar comando：0A 04 00 00 00 06 71 73（Código de verificación）；

Retorno：26 04 40 00 00 70 80（Temperatura）00 00 95 10（Humedad） 06 07 94 40（Presión del aire）99 09（Código de verificación）；Leer registro 0x0008~0x0013. Enviar comando：0A 04 00 08 00 0C 70 B6（Código de verificación）；

Retorno：0A 04 0C 00 00 00 00（Dirección mínima del viento）00 03 6E 84（Dirección máxima del viento）00 03 C8 C0（Dirección promedio del viento）00 00 00 00（Velocidad mínima del viento）00 00 04 BC（Velocidad máxima del viento）00 00 02 10（Velocidad promedio del viento）BC 78（Código de verificación）

**Decodificación S700:**

Leer registro 0x0000~0x001F y 0x0030~0x0033.

Enviar comando: 14 04 00 00 00 20 F3 06

Retorno: 14 04 40 00 00 70 80（Temperatura） 00 00 95 10（Humedad） 06 07 94 40（Presión del aire） 00 00 00 00（Luz） 00 00 00 00（Dirección mínima del viento） 00 00 00 00（Dirección máxima del viento） 00 00 00 00（Dirección promedio del viento） 00 00 00 00 （Velocidad mínima del viento）00 00 00 00（Velocidad máxima del viento) 00 00 00 00（Velocidad promedio del viento） 00 00 00 00（Precipitación acumulada） 00 00
00 00（Duración de precipitación acumulada） 00 00 00 00（Intensidad de lluvia） 00 00 00 00（Intensidad máxima de lluvia） 00 00 6A 7C（Temperatura de calentamiento） 00 00 00 00（El estado de volcado） 99 09（Código de verificación）

**Decodificación S900:**

Leer registro 0x0000~0x001F y 0x0030~0x0033.

Enviar comando: 26 04 00 00 00 20 F7 05

Retorno: 26 04 40 00 00 70 80 (Temperatura) 00 00 95 10(Humedad) 06 07 94 40(Presión del aire) 00 00 00 00(Luz) 00 00 00 00(Dirección mínima del viento)
00 00 00 00(Dirección máxima del viento) 00 00 00 00(Dirección promedio del viento) 00 00 00 00 (Velocidad mínima del viento) 00 00 00 00(Velocidad máxima del viento) 00 00 00 00(Velocidad promedio del
viento) 00 00 00 00(Precipitación acumulada) 00 00 00 00(Duración de precipitación acumulada) 00 00 00 00(Intensidad de lluvia) 00 00 00 00(Intensidad máxima de lluvia)00 00 6A 7C(Temperatura de calentamiento) 00 00 00 00(El estado de volcado) 99 09(Código de verificación)

PM2.5 y PM10 necesitan ser leídos por separado：

Enviar comando: 26 04 00 30 00 04 F7 11

Retorno: 26 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(Código de verificación)

**Decodificación S1000:**

Leer registro 0x0000~0x001F y 0x0030~0x0033.

Enviar comando: 2B 04 00 00 00 20 F6 18

Retorno: 2B 04 40 00 00 70 80 (Temperatura) 00 00 95 10(Humedad) 06 07 94 40(Presión del aire) 00 00 00 00(Luz) 00 00 00 00(Dirección mínima del viento)
00 00 00 00(Dirección máxima del viento) 00 00 00 00(Dirección promedio del viento) 00 00 00 00 (Velocidad mínima del viento) 00 00 00 00(Velocidad máxima del viento) 00 00 00 00(Velocidad promedio del
viento) 00 00 00 00(Precipitación acumulada) 00 00 00 00(Duración de precipitación acumulada) 00 00 00 00(Intensidad de lluvia) 00 00 00 00(Intensidad máxima de precipitación)00 00 6A 7C(Temperatura de calentamiento) 00 00 00 00(El estado de volcado) 99 09(Código de verificación)

PM2.5, PM10, y CO2 necesitan ser leídos por separado：

Enviar comando: 2B 04 00 30 00 04 F6 0C

Retorno: 2B 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(Código de verificación)

Leer registro 0x0040~0x0041.

Enviar comando:2B 04 00 40 00 02 77 D5

Retorno:2B 04 04 00 0C EC 98 （CO2） FD 2F （Código de verificación）；

### Sensor de ruido

El sensor de ruido se utiliza como un sensor RS485 independiente, que está
en paralelo con otras unidades de medición en el mismo bus RS-485, por lo que necesita
ser leído y configurado por separado.

Especificación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png" /></div>

Protocolo de lectura de datos y configuración:

El protocolo de comunicación adopta el protocolo estándar RS485 Modbus-RTU y los parámetros de comunicación del protocolo son los siguientes:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png" /></div>

Consultando los datos del sensor de ruido (dirección: 40, 0x28) :

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png" /></div>

Si la consulta es exitosa, se devuelve la siguiente información:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png" /></div>

DB real = valor del registro /100

El valor del registro de ruido es 0x128E=4750, y el valor es =4750/100=47.5dB

## Protocolo ASCII

### Definición de comandos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png" /></div>

### Formato de Comando de Consulta

Los comandos vienen en dos formatos:

**1.** **Un comando sin = se refiere al método de consulta básico.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png" /></div>

*Ejemplo: `?<CR><LF>` indica consultar la dirección del dispositivo*

**2.** Un comando **con = se refiere a una consulta con un argumento**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png" /></div>

*Ejemplo: 0XA;BD=`?<CR><LF>` indica consultar la velocidad de baudios del dispositivo*

### Formato de Comando de Configuración

**Establecer un parámetro específico, como configurar una velocidad de baudios.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png" /></div>

*Ejemplo: 0XA;BD=96`<CR><LF>` indica consultar la velocidad de baudios del dispositivo*

### Lista de Comandos

Por favor consulte:
&lt;https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf&gt;

## SDI-12

La comunicación SDI-12 adopta tres cables, dos de los cuales son cables de alimentación del sensor y el otro es el cable de señal SDI-12.

Cada sensor en el bus SDI-12 tiene una dirección única, que puede configurarse como '0', '1' ~ '9', 'A' ~ 'Z', 'A' ~ 'Z'. La dirección SDI-12 del SenseCAP ONE es '0' por defecto. Las instrucciones soportadas por este sensor se muestran en el siguiente capítulo, donde cada instrucción cumple con el
SDI-12 v1.4.

El sensor es alimentado por una fuente de alimentación DC de 3.6~16V. Después de que el sensor se enciende, entrará inmediatamente en modo de suspensión y esperará a que el equipo de adquisición de datos proporcione instrucciones. SDI-12 utiliza una velocidad de baudios de 9600bps, 1 bit de inicio (nivel alto), 7 bits de datos (alto 0 y bajo 1, anti-lógica), 1 bit de paridad par, y 1 bit de parada.

La secuencia de cada byte enviado se muestra en la siguiente figura:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png" /></div>

### Comando y respuesta SDI-12

Por favor consulte:
&lt;https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf&gt;

### Lectura SDI-12

**Cableado del SDI-12**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png" /></div>

**Usar depurador USB a SDI-12 para comunicarse con el dispositivo**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png" /></div>

**La configuración de comunicación:**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png" /></div>

Conecte el cable verde (GND Data) y el cable amarillo (SDI-12 Data) al
depurador **USB a SDI-12**.

Y conecte el cable rojo (Vin+ positivo de alimentación) y el cable marrón (Vin- tierra de alimentación) a la fuente de alimentación de 12V.

Descargue el asistente de depuración de puerto serie:
&lt;https://github.com/Neutree/COMTool&gt;, y luego abra la herramienta de depuración de puerto serie.

- Elija el número de puerto correcto

- Configure la velocidad de baudios a la velocidad de baudios del depurador USB a SDI-12 (note que no es la velocidad de baudios del protocolo SDI-12)

- Marque "CRLF"

- Haga clic para abrir el puerto serie.

- Envíe el comando de consulta de dirección del dispositivo "?!", si puede ver la respuesta "0", significa que la conexión está bien.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png" /></div>

**Iniciar Medición**

Leer temperatura del aire, humedad del aire, presión barométrica, intensidad de luz

Envíe el "comando de inicio de medición 0M!", el sensor primero responde con "00024", lo que significa que el comando "0M!" toma 2 segundos para medir y devuelve 4 valores medidos. Después de 2 segundos, el sensor responde con su propia dirección "0", indicando que la medición se ha completado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png" /></div>

Luego envíe "comando de lectura de valor de medición 0D0!" para obtener los 4 valores medidos de esta medición, que son temperatura del aire +27.01℃, humedad del aire 64.74%, presión barométrica 100720Pa, e intensidad de luz 10Lux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png" /></div>

Use el comando de medición extendida 0M1! para leer dirección mínima del viento, dirección máxima del viento, dirección promedio del viento, velocidad mínima del viento,
velocidad máxima del viento, y velocidad promedio del viento. El dispositivo responde con "00056", lo que significa que el comando "0M1!" toma 5 segundos para medir y devuelve 6 valores medidos. Después de 5 segundos, el dispositivo responde con su propia dirección "0", indicando que la medición se ha completado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png" /></div>

Luego envíe "comando de lectura de valor de medición 0D0!" para obtener los 6 valores medidos de esta medición, que son dirección mínima del viento 345.9 grados, dirección máxima del viento 347.5 grados, dirección promedio del viento 346.3 grados, velocidad mínima del viento 2.8m/s, y velocidad máxima del viento 2.8m/s, velocidad promedio del viento 2.8m/s.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png" /></div>

Luego envíe "comando de medición continua 0R2! el dispositivo devuelve 4 valores medidos: precipitación acumulada 1.2mm, duración de precipitación acumulada 20 segundos, intensidad de precipitación 1.2mm/h, intensidad máxima de precipitación 72.0mm/h.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png" /></div>

# Código de error

## Código de error Modbus

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png" /></div>

## Código de error ASCII

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png" /></div>

## Código de error SDI-12

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png" /></div>
