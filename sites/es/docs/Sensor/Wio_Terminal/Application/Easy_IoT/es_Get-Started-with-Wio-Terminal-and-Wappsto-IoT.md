---
description: Comenzar con Wio Terminal y Wappsto IoT
title: Comenzar con Wio Terminal y Wappsto IoT
keywords:
- Wio_terminal Easy_IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get-Started-with-Wio-Terminal-and-Wappsto-IoT
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Comenzar con Wio Terminal y Wappsto IoT

## Descripción general

El **Wio Terminal** es un microcontrolador basado en SAMD51 con conectividad inalámbrica alimentado por **Realtek RTL8720DN** que es compatible con Arduino y MicroPython. Actualmente, la conectividad inalámbrica solo es compatible con Arduino. Funciona a **120MHz** (aumenta hasta 200MHz), **4MB** de Flash externo y **192KB** de RAM. Admite tanto Bluetooth como Wi-Fi proporcionando la base para proyectos IoT. El Wio Terminal en sí está equipado con **una pantalla LCD de 2.4", IMU integrado (LIS3DHTR), micrófono, zumbador, ranura para tarjeta microSD, sensor de luz y emisor infrarrojo (IR 940nm).** Además de eso, también tiene dos puertos Grove multifuncionales para el [ecosistema Grove](https://www.seeedstudio.com/grove.html) y 40 pines GPIO compatibles con Raspberry Pi para más complementos.

Wappsto es una aplicación potente e inteligente que se puede configurar fácilmente para extraer automáticamente datos de varias fuentes. Tiene un panel de control estándar integrado para monitorear y analizar sus datos.

Wappsto también ofrece herramientas que permiten a los desarrolladores crear aplicaciones IoT como aplicaciones web con integraciones y automatizaciones. Integrado en Wappsto también hay un mercado, donde desarrolladores y usuarios pueden compartir sus aplicaciones.

Wappsto de Seluxit es una plataforma IoT potente que presenta paneles de control fácilmente personalizables que hace que visualizar datos en vivo o históricos sea muy fácil y muchas otras características incluyendo automatizaciones en la nube.

La aplicación Wappsto para iOS y Android también te permite ver y controlar dispositivos sobre la marcha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" alt="pir" width={500} height="auto" /></p>

## Características de Wappsto

Puedes operar las siguientes funciones mientras te conectas a Wappsto. Para más información, puedes hacer más con tus datos [aquí](https://www.seluxit.com/iot-products/iot-solution-builder/wapps).

### Características del panel de control

#### Tipos de panel de control

1. Panel en blanco - Lienzo limpio estático para mezclar y combinar widgets
2. Gestión de flota - Lienzo limpio dinámico para mezclar y combinar widgets - cambia fácilmente entre dispositivos para obtener una visión general de posibles valores atípicos.
3. Panel de geolocalización - Vista de mapa de dispositivos, posible filtrar basado en alarmas de dispositivos.<br />
![](https://media-exp1.licdn.com/dms/image/C4E22AQEUQmsBHpzjaw/feedshare-shrink_2048_1536/0/1646730023138?e=1651708800&v=beta&t=cTkLbXeXVVgWV9a-Is62CDUlb3s4t-GqqSpBsusyy8A)
<!-- 图片链接有问题 -->

- Geolocalización usando filtro de listas filtradas:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHzGNNMQWDfLw/feedshare-shrink_2048_1536/0/1646902827428?e=1651708800&v=beta&t=hChKemrGzqtM53xwikfvONJu_2DyrCSMX17jMKXuybc)
<!-- 图片链接有问题 -->

#### Widgets de panel en blanco y gestión de flota

1. Lista filtrada - configura límites de valores de dispositivos que activan alarmas y señales visuales en el panel de geolocalización.
 ![](https://media-exp1.licdn.com/dms/image/C4E22AQGPxAJgcCVbKw/feedshare-shrink_2048_1536/0/1646809215991?e=1651708800&v=beta&t=-XvhET6EEvVJetMns_UcJ9AY8hBIcVw_R8XEi0vUZhI)
<!-- 图片链接有问题 -->

2. Widget de ubicación histórica - Dibuja en un mapa basado en ubicaciones de dispositivos dentro de un marco de tiempo configurado. (máximo 1 marca por minuto y mínimo 50 metros entre marcas)
![](https://media-exp1.licdn.com/dms/image/C4E22AQE8TWlSnbBS0Q/feedshare-shrink_2048_1536/0/1647252033404?e=2147483647&v=beta&t=YWuyjUFveAiTut4AwMgXFRZL5BiaqJYKV8MeYcwq31E)

3. Widget de gráfico - Elige y configura múltiples fuentes de datos, marco de tiempo, estilo de gráfico y método de agregación. También se puede alternar para mostrar datos en vivo.
![](https://media-exp1.licdn.com/dms/image/C4E22AQERLllOaWHaeA/feedshare-shrink_1280/0/1647331243930?e=1651708800&v=beta&t=wxkgoFKpxV8A2j-KsXqKRm6t6gnAEorUuR4UaSsu1pk)
<!-- 图片链接有问题 -->

4. Ejemplo de datos en vivo:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHexShrPAZxHw/feedshare-shrink_1280/0/1647856842400?e=1651708800&v=beta&t=CziKwYL3y3drg7PyCN-NcC3t6lRjqTxoMoguKy9h_yE)
<!-- 图片链接有问题 -->

5. Widget de lista de valores - Muestra datos en vivo en una caja junto con valores de control / estado deseado.
![](https://media-exp1.licdn.com/dms/image/C4E22AQHLKi07FF-vjg/feedshare-shrink_1280/0/1647414020945?e=2147483647&v=beta&t=5PjZ0-bA5knscCdfUufKY7b98tXlXbWtpIfFjsZ_ykg)

6. Widget de brújula - Muestra el ángulo de un solo dispositivo con datos en vivo.
![](https://media-exp1.licdn.com/dms/image/C4E22AQH0uYCQd8y7XQ/feedshare-shrink_1280/0/1647522120991?e=2147483647&v=beta&t=9Biv-IoQukTwfiyEd1siexYGwS5EX5uCaVl_dROZYsI)

7. Widget de gráfico líquido - Muestra el nivel relativo de un solo dispositivo con datos en vivo.
![](https://media-exp1.licdn.com/dms/image/C4E22AQEPNSFj-MKSVw/feedshare-shrink_2048_1536/0/1647609902322?e=2147483647&v=beta&t=suXEme0-tfR6PQQIAzU7xw8hD7CBTGLZ8aAOxogm7t0)

8. Widget de medidor - Muestra datos en vivo de un solo valor en un medidor, con esquema de colores y límites configurables.
![](https://media-exp1.licdn.com/dms/image/C4E22AQGwQ7COEUwKwA/feedshare-shrink_1280/0/1647939626856?e=2147483647&v=beta&t=NfZBE7e7R-kUNNRUpEiEyRYVO-xXBwrI13NjtvqZHjU)

9. Widget de ubicación actual - Muestra la ubicación actual de uno o múltiples dispositivos junto con otros widgets.
![](https://media-exp1.licdn.com/dms/image/C4D22AQFCTjZrX8RU4g/feedshare-shrink_2048_1536/0/1648046103353?e=1651708800&v=beta&t=CFn2wQhscrECrcNU65PcI7HpuK7NhHtZKVMXQ9VzoWA)
<!-- 图片链接有问题 -->

10. Widget de lista de registros - Muestra registros de uno o más dispositivos o valores, junto con otros widgets.
![](https://media-exp1.licdn.com/dms/image/C4E22AQEFmHPALVfFhw/feedshare-shrink_2048_1536/0/1648126885539?e=2147483647&v=beta&t=eKmZ70IIQZAq3DR96JXB_nsmSsvBqe8gKIJfG0XZXZs)

### Automatización en la nube y aplicaciones web

1. Integración con Twitter
2. Integración con Hue
3. Integración con Shelly
4. Integración de pronóstico del tiempo (yr.no)
   - Bloques - Automatizaciones en la nube
   - Programación Blockly sin código
   - Programación javascript Blockly
   - Configura automatizaciones e interacciones entre todos los dispositivos y servicios que tienes conectados en Wappsto
   - Ejemplo de automatización cruzada entre Twitter y Wappsto:bit: [https://bit.wappsto.com/project/wappsto-blocks/](https://bit.wappsto.com/project/wappsto-blocks/)

### Características de Wappsto que a veces se pasan por alto

1. Servicio en la nube distribuido con múltiples respaldos
2. Compartir dispositivos
3. Cifrado de extremo a extremo (cifrado de transporte)
4. Seguridad del dispositivo (claves únicas de dispositivo y red)
5. Reenvío de datos
6. Extracción de datos (CSV)
7. Inicio de sesión inteligente entre plataformas (inicio de sesión con email, google, facebook, apple)
8. Multiplataforma: Sitio web + APPs para smartphone.

## Primeros Pasos

### Requisitos de Hardware

- Wio Terminal x 1
- Computadora x 1
- Cable USB Tipo-C x 1

### Requisitos de Software

Por favor revisa este [enlace](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/#software).

## Actualizar el Firmware WiFi del Wio Terminal

Por favor revisa este [enlace](https://wiki.seeedstudio.com/es/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware).

## Prerrequisitos de Wappsto

### Una cuenta en Wappsto

También se asume que has creado una cuenta en [Wappsto](https://wappsto.com/), si no, por favor crea una primero.

### Arduino IDE instalado en tu PC

Si no tienes esto, consulta [https://www.arduino.cc/en/Guide](https://www.arduino.cc/en/Guide)

#### Instalar la librería ArduinoJson

Desde el administrador de librerías necesitas instalar la librería ArduinoJson - consulta [https://arduinojson.org/v6/doc/installation/](https://arduinojson.org/v6/doc/installation/) para más detalles.

#### Instalar esta librería wappsto

Para instalar esta librería en Arduino IDE, descarga este proyecto como un archivo zip, haz clic en "Code" y elige "Download ZIP".
Luego elige "Sketch"->"Include Library"->"Add .Zip Library..." Consulta [https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries) para más detalles.

### Generar certificados e id para un nuevo dispositivo

Para que tu dispositivo físico se identifique hacia Wappsto necesita un id de red, el certificado CA del servidor, y el certificado/clave del cliente - todo esto debe ser generado en Wappsto.com y colocado en (si coincide con los ejemplos) llamado wappsto_config.h.

#### wappsto_config.h

Como ayuda para generar esto puedes usar el **Script de Python** incluido en este repositorio en la carpeta generate_config_header.
Para una primera ejecución, puede que necesites instalar las librerías requeridas

```
cd <path to downloaded arduino_wappstoiot>
cd generate_config_header
pip install -r requirements.txt
```

Para generar un archivo de cabecera:

1. Ve a la carpeta `generate_config_header`:

```
cd generate_config_header
```

2. Usa el comando:

```
python main.py --type arduino
```

3. Luego se te pedirá que inicies sesión usando el correo electrónico y la contraseña de tu usuario en Wappsto.

4. Copia el archivo recién generado `wappsto_config.h` a tu carpeta de sketch de Arduino. Ten en cuenta que si se generó correctamente debería tener un UUID válido (una cadena similar, pero diferente, a esta `"d7fafe76-b020-4594-8f2a-aae11c6b6589"` definida para la línea `const char* network_uuid =`.

Nota, si tienes tanto python2 como python3 instalados puede que necesites usar

```
pip3 install -r requirements.txt
python3 main.py --type arduino
```

Si obtienes un error como el siguiente:

```
ImportError: cannot import name 'soft_unicode' from 'markupsafe' 
```

Lo cual se debe a un cambio en la dependencia de otra biblioteca, se puede solucionar usando este comando.

```
pip install -U MarkupSafe==0.20
```

#### Reclamación y propiedad - No se permite acceder a valores

Si obtienes un error de "no se permite acceder" a los valores en el dispositivo que has creado, es porque no lo has reclamado o la propiedad ha sido restablecida.

Dado que serías el fabricante, aún verás el dispositivo en tu lista de redes, puedes ver que está en línea, pero no podrás ver valores o controlar el dispositivo.

Para reclamar un dispositivo, ve a la pestaña "IoT Devices" en [https://wappsto.com/devices](https://wappsto.com/devices), haz clic en el botón "+ Add an IoT device" en la esquina superior derecha, e ingresa el UUID de la red en la caja.

Si haces clic en el botón eliminar para una red, eliminará la propiedad del dispositivo, para que pueda ser reclamado por otro usuario. Una vez que un dispositivo ha sido reclamado, no puede ser reclamado por otro.

## Esta biblioteca Wappsto

### Estructura requerida

El id de red es generado por [Wappsto](https://wappsto.com/) y está vinculado a los certificados.

```
├── "Network Name"
│   └── "Device 1 name"
│   |   └── "Value 1 name"
│   |   └── "Value 2 name"
|   |   ...
│   └── "Device 2 name"
│       └── "Value 1 name"
│       └── "Value 2 name"
...

```

Ten en cuenta que "name" para el dispositivo y el objeto de valor tienen funcionalidad adicional y reglas.

- Una red no debe tener dispositivos con nombres idénticos.
- Un solo dispositivo no debe tener valores con nombres idénticos. (como en el ejemplo anterior, está permitido usar el mismo nombre bajo un dispositivo diferente.)

La biblioteca preguntará a Wappsto si existe un dispositivo/valor con ese nombre antes de crearlo, por lo que se vinculará al valor correcto. Si nada tiene este nombre, se creará uno nuevo. Si un padre tiene múltiples hijos con el mismo nombre, la biblioteca elegirá el primero disponible.

Si cambias un nombre, se creará uno nuevo, pero el anterior no se eliminará. Esto tendrás que hacerlo tú mismo, por ejemplo, usando [https://wappsto.com/devices](https://wappsto.com/devices)

### Inicializar Wappsto

Wappsto necesita una referencia a WiFiClientSecure cuando se crea, ejemplo.

```c
WiFiClientSecure client;
Wappsto wappsto(&client);
```

#### Establecer la configuración y conectar

```c
#include "wappsto_config.h"
...
wappsto.config(network_uuid, ca, client_crt, client_key);
if(wappsto.connect()) {
    // Connected
} else {
    // Failed to connect
}
```

### Parámetros de configuración opcionales, registro y ping

Además de los comandos obligatorios, también puedes establecer el intervalo de ping y el nivel de registro:

```c
wappsto.config(network_uuid, ca, client_crt, client_key, ping interval in minutes, log level);
```

- El intervalo de ping enviará un paquete corto desde el dispositivo a wappsto para mantener viva la conexión. Si tu dispositivo rara vez envía datos, podría ser una buena idea añadir esto para evitar el timeout en la conexión.
- El nivel de registro puede imprimir información de la biblioteca wappsto al puerto de depuración serie - los siguientes niveles son posibles:

```
   VERBOSE
   INFO
   WARNING
   ERROR
   NO_LOGS <- Default
```

### Crea tu red

```c
myNetwork = wappsto.createNetwork("Network Name");
```

### Crear un dispositivo

```c
DeviceDescription_t myDeviceDescription = {
    .name = "Device name",
    .product = "Product name",
    .manufacturer = "Company name",
    .description = "Description of the product",
    .version = "1.0",
    .serial = "00001",
    .protocol = "Json-RPC",
    .communication = "WiFi",
};

myDevice = myNetwork->createDevice("Device Name", &myDeviceDescription);
```

#### Valores

Los valores son probablemente lo que más te interesa, y pueden ser uno de estos:

- Número - enteros o decimales, estos serán registrados y mostrados como un gráfico.
- Cadena - una cadena legible por humanos (UTF-8)
- Blob - datos, por ejemplo una imagen codificada en base64, valores hexadecimales, etc.
- Xml - un documento xml completo

#### Leer y escribir datos

Cada valor puede tener uno o dos puntos de datos:

- Reporte: Datos leídos en el dispositivo y reportados al servidor [READ]
- Control: Datos enviados desde el servidor al dispositivo para controlarlo [WRITE]

Tu valor puede ser uno de ellos o ambos.

### Parámetros de valor

Para explicar los parámetros, usaremos un ejemplo para un valor de temperatura ubicado en una sala de estar.

- name: Un nombre para el valor, aquí "Living room"
- type: Es una ayuda para la UI para encontrar valores del tipo correcto, aquí "temperature"
- El parámetro PERMISSION_e le dice a la biblioteca si debe crear reporte y/o control para este valor.
  - READ -> estado de reporte
  - WRITE -> estado de control
  - READ_WRITE -> estado de reporte y control
- min: (Solo números) número más bajo (para ser usado por la UI)
- max: Para números el número más alto, para cadena/blob longitud máxima
- step: (Solo números) Tamaño de paso para un número, por ejemplo 1 para enteros, y 0.1 para decimales
- unit: (Solo números) ¿hay una unidad para este número?, en el ejemplo de temperatura es °C

La primera vez que se crea un valor, un número tendrá el valor NA, y la cadena/blob estará vacía, tanto para control como para reporte.

Si el valor existe, los datos del valor no cambiarán. Si quieres que el valor se actualice cuando el dispositivo se reinicie, tienes que llamar a reporte/control.

#### Crear un valor numérico

```c
ValueNumber_t myNumberValueParameters = {   .name = "Living room",
                                            .type = "temperature", // value type
                                            .permission = READ_WRITE,
                                            .min = -20,
                                            .max = 100,
                                            .step = 0.1,
                                            .unit = "°C",
                                            .si_conversion = ""};

myNumberValue = myDevice->createValueNumber(&myNumberValueParameters);
```

#### Crear un valor de cadena

```c
ValueString_t myStringValueParameters = { .name = "Value String Name",
                                          .type = "value type",
                                          .permission = READ_WRITE,
                                          .max = 200,
                                          .encoding = ""};

myStringValue = myDevice->createValueString("Value String Name", "value type", READ_WRITE, &myStringValueParameters);
```

#### Crear un valor blob

```c
ValueBlob_t myBlobValueParameters =  { .name = "Value Blob Name",
                                       .type = "value type",
                                       .permission = READ_WRITE,
                                       .max = 200,
                                       .encoding = ""};

myBlobValue = myDevice->createValueBlob(&myBlobValueParameters);
```

#### Crear un valor xml

```c
ValueXml_t myXmlValueParameters =  { .name = "Value Xml Name",
                                     .type = "value type",
                                     .permission = READ_WRITE,
                                     .xsd = "test",
                                     .namespace = "test"};

myXmlValue = myDevice->createValueXml(&myXmlValueParameters);
```

#### Enviar un reporte de valor

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.report("987");    // You can send numbers as a string you format
myNumberValue.report(myInt);    // Report the number as an int
myNumberValue.report(myDouble); // Report the number as a double


myStringValue.report("Example string");

myBlobValue.report("A5FF2C");

```

#### Establecer un valor de control

Normalmente el valor de control solo se actualizará desde wappsto.com, pero es posible que necesites establecer un valor actual al arrancar o en otras situaciones.
Establecer esto es similar a reportar:

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.control("987");    // You can send numbers as a string you format
myNumberValue.control(myInt);    // Set control as an int
myNumberValue.control(myDouble); // Set control as a double


myStringValue.control("Example string");

myBlobValue.control("A5FF2C");

```

## Añadir wappsto en tu función loop

Para que Wappsto pueda recibir datos (control, actualización y pings), debe incluirse en tu función loop de Arduino - si no lo haces, nunca recibirás ningún callback con datos, y la conexión puede experimentar un timeout.

También se recomienda no bloquear el loop por períodos extendidos de tiempo.

```
wappsto.dataAvailable();
```

### Recibir una solicitud de control de valor

Puedes elegir si quieres que los datos de control se traduzcan a un double, o si quieres la cadena directamente.

```c
// Receive control with a number (double)
void controlNumberCallback(Value *value, double data, String timestamp)
{
    // handle control request
}

// Receive control with a string
void controlStringCallback(Value *value, String data, String timestamp)
{
    // handle control request
}

...
myNumberValue->onControl(&controlNumberCallback);
myStringValue->onControl(&controlStringCallback);
```

### Recibir una solicitud de actualización de valor (solo reportar valor)

```c
void refreshNumberCallback(Value *value)
{
    // handle refresh request
}
...
myNumberValue->onRefresh(&refreshNumberCallback);

```

### Obtener los últimos datos y marca de tiempo del valor

Puedes acceder a los últimos datos recibidos/enviados y la marca de tiempo utilizando estas funciones.
Por ejemplo, después de un nuevo arranque, se recuperará el último estado controlado establecido en Wappsto.com, para que tu programa pueda comenzar con ese estado.

_Nota_ recuperar numberData de un valor vacío devolverá un 0;

```c
String ctrlData = myNumberValue.getControlData();

double ctrlDataNumber = myNumberValue.getControlNumberData();

String ctrlTime = myNumberValue.getControlTimestamp();

String reportData = myNumberValue.getReportData();

double reportDataNumber = myNumberValue.getReportNumberData();

String reportTime = myNumberValue.getReportTimestamp();
```

Para más ejemplos, consulta el código en la carpeta de ejemplos, o ve a 'Archivo -> Ejemplos -> Wappsto' en el IDE de Arduino.

### Demo de Detección de Temperatura

Aquí vamos a usar el ejemplo de temperatura proporcionado y mostrarlo en Wappsto como puedes ver a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto2.png" alt="pir" width={500} height="auto" /></p>

- **Paso 1**. Después de cargar el código, puedes ver que se ha mostrado conectado exitosamente en "Dispositivos IoT" en el sitio web de Wappsto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto3.png" alt="pir" width={800} height="auto" /></p>

- **Paso 2**. Haz clic en la columna "Dashboards" a la izquierda y selecciona "Agregar widget"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto4.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3**. Estos bloques proporcionados pueden mostrar datos de varias maneras, aquí elegimos "Gráfico"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto5.png" alt="pir" width={800} height="auto" /></p>

- **Paso 4**. Selecciona "Ejemplo de Temperatura" como cargamos antes y haz clic en "Siguiente"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto6.png" alt="pir" width={800} height="auto" /></p>

- **Paso 5**. Configura los datos mostrados. Aquí establecemos que los datos se muestren en "Línea"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto7.png" alt="pir" width={800} height="auto" /></p>

- **Paso 6**. Después de toda la configuración, podemos ver la salida de datos en los Dashboards

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto8a.jpeg" alt="pir" width={800} height="auto" /></p>
