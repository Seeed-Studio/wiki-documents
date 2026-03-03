---
description: Desarrollar en Microsoft Azure IoT Central
title: Desarrollar en Microsoft Azure IoT Central
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Develop-in-Microsoft-Azure-IoT-Central
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Desarrollar en Microsoft Azure IoT Central

### Agregar una Regla para Enviar un Correo Electrónico

Las reglas en IoT Central sirven como una herramienta de respuesta personalizable que se activa con eventos monitoreados activamente desde dispositivos conectados.
Por ejemplo, en esta demostración, podemos configurar IoT Central para enviar un correo electrónico cuando el nivel de intensidad de luz esté por debajo de 50.

- **PASO 1:** Haz clic en **Rules** desde el menú de navegación izquierdo en Azure IoT Central.

- **PASO 2:** Haz clic en **+New** o **Create a rule**

- **PASO 3:** Ingresa un nombre para la regla

- **PASO 4:** Bajo **Device template**, selecciona **Seeed Wio Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **PASO 5:** Bajo **Conditions**, activa **time aggregation** y selecciona una **time window** de tu elección. Aquí la configuraremos como **5 minutes**

**Nota:** Cada **xx** minutos, la regla evalúa una vez los últimos **xx** minutos de datos

- **PASO 6:** Bajo **Telemetry**, selecciona la telemetría de tu elección. Aquí la configuraremos como **Light intensity**

- **PASO 7:** Bajo **Aggregation**, selecciona **Average**. Esto tomará el valor promedio durante la **time window** configurada anteriormente

- **PASO 8:** Bajo **Operator**, selecciona una condición de tu elección. Aquí usaremos la condición **is less than**

- **PASO 9:** Bajo **Value**, escribe un valor. Aquí escribiremos **50**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>

- **PASO 10:** Bajo **Actions**, haz clic en **Email**

- **PASO 11:** Escribe un **Display name**, **To address** y **Note** para el correo electrónico

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>

**Nota:** Ten en cuenta que la **dirección de correo electrónico** aquí debe agregarse a esta **Aplicación de Azure IoT Central** y también haber iniciado sesión al menos una vez.

- Navega a `Administration > Users`, haz clic en **Assign user**, completa el **Email**, asigna un **Role** y haz clic en **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>

- **PASO 12:** Haz clic en **Done**

- **PASO 13:** Finalmente, haz clic en **Save**

Ahora hemos creado exitosamente una regla para enviar un correo electrónico

### Controlar Hardware desde Microsoft Azure IoT Central

No solo puedes ver los datos de telemetría en Azure IoT Central, sino también usarlo para controlar hardware. En esta demostración, podremos controlar el zumbador integrado en el Wio Terminal y especificar una duración de tiempo en la cual el zumbador sonará

- **PASO 1:** Haz clic en la pestaña **Command**

- **PASO 2:** Ingresa un **valor** dentro de la columna bajo **Duration**

**Nota:** los valores están en unidades de milisegundos. ej: 1000 = 1000ms = 1s

- **PASO 3:** Cuando hagas clic en **Run**, podrás escuchar un sonido de pitido del zumbador durante la duración de tiempo especificada arriba

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## ¿Cómo Agregar Otros Sensores?

Puedes agregar cualquier sensor al Wio Terminal y enviar datos de telemetría desde el sensor conectado a Azure IoT Central. ¡Conectaremos un [Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) al Wio Terminal y enviaremos datos de temperatura y humedad a Azure IoT Central para visualizarlos en paneles!

### Configuración de Microsoft Visual Studio Code

#### Descargar, Instalar y Configurar Visual Studio Code

Si queremos agregar más sensores al Wio Terminal para enviar datos de telemetría a Azure IoT Central, no podemos usar fácilmente el archivo .uf2 como lo hicimos antes. Porque los códigos ya están compilados dentro de ese archivo .uf2. Entonces, si queremos agregar más códigos a la demostración, necesitamos usar un IDE llamado Microsoft Visual Studio Code, agregar los códigos necesarios y finalmente subirlos al Wio Terminal.

Así que ahora, procedamos a instalar Microsoft Visual Studio Code en la computadora

- **PASO 1:** Visita code.visualstudio.com y haz clic en **Download**

**Nota:** Elige el instalador según tu sistema operativo

- **PASO 2:** Sigue el asistente de instalación y completa la instalación

- **PASO 3:** Abre Visual Studio Code

- **PASO 4:** Haz clic en **Extensions** desde el menú de navegación izquierdo y escribe **platformIO** en el cuadro de búsqueda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>

- **PASO 5:** Haz clic en **install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>

#### Código para la Demostración en Visual Studio Code

- **PASO 1:** Visita [este enlace](https://github.com/SeeedJP/wioterminal-aziot-example/releases) para encontrar las versiones disponibles dentro del [repositorio SeeedJP/wioterminal-aziot-example](https://github.com/SeeedJP/wioterminal-aziot-example)

- **PASO 2:** Navega a la **Última versión** y bajo **Assets**, haz clic en **Source code (zip)**. Esto descargará el código fuente como un archivo .zip

- **PASO 3:** Extrae el **archivo .zip**

- **PASO 4:** Regresa a Visual Studio Code y navega a `File > Open Folder...`

- **PASO 5:** Elige la carpeta que extrajimos antes y haz clic en **Select Folder**

- **PASO 6:** Navega a `wioterminal-aziot-example-0.10 > include > config.h` desde el menú de navegación izquierdo

- **PASO 7:** Una vez que **config.h** esté abierto, busca **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** y cámbialo a **"dtmi:local:wioterminal_aziot_example;5"**

**Nota:** **dtmi:local:wioterminal_aziot_example;5** es el Model ID

- **PASO 8:** Navega a `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json` desde el menú de navegación izquierdo

- **PASO 9:** Una vez que **seeedkk-wioterminal-wioterminal_aziot_example.json** esté abierto, busca **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** y cámbialo a **"dtmi:local:wioterminal_aziot_example;5"** también

**Nota:** **seeedkk-wioterminal-wioterminal_aziot_example.json** es el modelo DTDL que hemos mencionado antes

Actualmente el modelo está definido para datos de **aceleración, intensidad de luz y conteo de botones**. Procederemos a agregar **temperatura y humedad** a este modelo DTDL.

- **PASO 10:** Agrega los siguientes códigos debajo de **"contents": [**:

```sh
  "contents": [
    {
      "@type": [
        "Telemetry",
        "Temperature"
      ],
      "name": "temp",
      "unit": "degreeCelsius",
      "displayName": {
        "en": "Temperature (C)",
        "ja": "温度"
      },
      "schema": "integer"
    },
    {
      "@type": "Telemetry",
      "name": "humi",
      "displayName": {
        "en": "Humidity (%RH)",
        "ja": "湿度"
      },
      "schema": "integer"
    },
```

**Nota:** Aquí, **name** es lo que usaremos para identificar datos de telemetría específicos más adelante en los códigos, **unit** es la unidad correspondiente a los datos, **displayName** es el nombre que se muestra en Azure IoT Central ("en" para inglés/ "ja" para japonés) y **schema** es el tipo de datos

- **PASO 11:** Navega a `wioterminal-aziot-example-0.10 > platformio.ini` desde el menú de navegación izquierdo

- **PASO 12:** Una vez que **platformio.ini** esté abierto, bajo **lib_deps**, añade **https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor**

```sh
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```

**Nota:** Esta es la biblioteca para Grove - Sensor de Temperatura y Humedad (DHT11)

- **PASO 13:** Navega a `wioterminal-aziot-example-0.10 > src > main.cpp` desde el menú de navegación izquierdo

- **PASO 14:** Una vez que **main.cpp** esté abierto, añade la biblioteca DHT11 después de la línea **#include "CliMode.h"**

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **PASO 15:** Añade las definiciones del DHT11 y las inicializaciones después de la línea
**LIS3DHTR  AccelSensor;**

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //Define signal pin of DHT sensor 
// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */
#define DHTTYPE DHT11 //Define DHT sensor type 
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor
```

**Nota:** El sensor DHT11 puede conectarse a ambos puertos Grove en el Wio Terminal. Si se usa el **Puerto Digital**, el pin puede definirse como **0** y si se usa el **puerto I2C**, el pin puede definirse como **PIN_WIRE_SCL**. El diagrama del puerto se mostrará más adelante en este documento

- **PASO 16:** Añade los siguientes códigos bajo la función **SendTelemetry()** para analizar el archivo json junto con los datos de telemetría

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; //assign variable to store temperature
    int humi; //assign variable to store humidity
    temp = dht.readTemperature(); //read temperature
    humi = dht.readHumidity(); //read humidity

    char telemetry_topic[128];
    if (az_result_failed(az_iot_hub_client_telemetry_get_publish_topic(&HubClient, NULL, telemetry_topic, sizeof(telemetry_topic), NULL)))
    {
        Log("Failed az_iot_hub_client_telemetry_get_publish_topic" DLM);
        return AZ_ERROR_NOT_SUPPORTED;
    }

    az_json_writer json_builder;
    char telemetry_payload[200];
    AZ_RETURN_IF_FAILED(az_json_writer_init(&json_builder, AZ_SPAN_FROM_BUFFER(telemetry_payload), NULL));
    AZ_RETURN_IF_FAILED(az_json_writer_append_begin_object(&json_builder));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("temp")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, temp));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("humi")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, humi));
```

- **PASO 17:** Añade los siguientes códigos después de la línea **ntp.begin**, para iniciar el sensor DHT11

```cpp
dht.begin(); //start DHT sensor
```

Ahora hemos completado todos los códigos para esta demostración.

- **PASO 18:** Haz clic en el **icono de PlatformIO** desde el menú de navegación izquierdo y haz clic en **Build**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>

Si ves el siguiente mensaje, has compilado exitosamente el código:

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Configuración de Microsoft Azure IoT Central

Ahora necesitamos crear una plantilla de dispositivo personalizada para que los datos del Wio Terminal puedan visualizarse en el Panel de Control de Azure IoT Central

#### Creando una Nueva Plantilla de Dispositivo

- **PASO 1:** Visita Azure IoT Central y haz clic en `Device templates` desde el menú de navegación izquierdo

- **PASO 2:** Haz clic en **+ New**, haz clic en **IoT device** y haz clic en **Next:Customize**

- **PASO 3:** Escribe un nombre dentro del cuadro **Device template name** y haz clic en **Next:Review**

- **PASO 4:** Haz clic en **Create**

#### Importando un Modelo de Dispositivo Personalizado

- **PASO 1:** Haz clic en **Import a model**

- **PASO 2:** Navega a la carpeta **wioterminal-aziot-example-0.10** que usamos antes, encuentra el archivo **seeedkk-wioterminal-wioterminal_aziot_example.json** y haz clic en él

- **PASO 3:** Haz clic en **Open**

- **PASO 4:** Haz clic en **Views** desde el menú izquierdo y haz clic en **Generate default views**

- **PASO 5:** Haz clic en **Generate default dashboard view(s)**

- **PASO 6:** Navega a **Overview** desde el menú izquierdo y personaliza el panel de control según tu preferencia.

**Nota:** Hemos mencionado previamente en este documento, cómo personalizar el panel de control

- **PASO 7:** Sigue la siguiente configuración

| Nombre del Mosaico | Tamaño del Mosaico | Visualización del Mosaico |
|-|-|-|
| Light Intensity | 2 x 2 | Line chart |
| Light Intensity | 1 x 1 | Last Known Value |
| Temperature (C), Humidity (%RH) | 2 x 2 | Line chart |
| Temperature (C) | 1 x 1 | Last Known Value |
| Humidity (%RH) | 1 x 1 | Last Known Value |
| Left button | 1 x 1 | KPI |
| Middle button | 1 x 1 | KPI |
| Right button | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>

- **PASO 8:** Haz clic en **Save** y **Publish**

### Configuración del Wio Terminal

#### Configuración del Hardware

- Conecta el **Grove - Temperature and Humidity Sensor (DHT11)** al **Grove Digital Port** en el Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### Configuración del Software

##### Subir Código al Wio Terminal

Ahora necesitamos subir el código al Wio Terminal para enviar los datos de telemetría a Azure IoT Central

- **PASO 1:** Regresa a VS Code, haz clic en el **icono de PlatformIO** y haz clic en **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>

##### Configuración de Wi-Fi y Azure IoT

A continuación, pasemos a configurar la conexión Wi-Fi y Azure IoT tal como lo hicimos antes

- **PASO 1:** Mantén presionados los 3 botones y ENCIENDE el Wio Terminal para entrar al modo de configuración

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **PASO 2:** Abre una aplicación de consola serial como [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **PASO 3:** Escribe el **Puerto COM** serial correcto, establece **9600** como la velocidad de baudios e ingresa al Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **PASO 4:** Presiona **ENTER** en el teclado y escribe **help** en la terminal serial para ver el uso de la configuración

**Nota:** Ahora no necesitamos ingresar el SSID y contraseña de WiFi porque ya están guardados de la configuración anterior

- **PASO 5:** Establece la información de conexión de Azure IoT visitando la aplicación creada previamente en [Azure IoT Central](https://apps.azureiotcentral.com)

- **PASO 6:** Navega a `Administration > Device Connection` desde el menú de navegación izquierdo, y **copia el ID scope** en el **bloc de notas**

- **PASO 7:** Haz clic en **SAS-IoT-Devices** y copia la **primary key** en el **bloc de notas**

- **PASO 8:** Visita la terminal serial abierta previamente y escribe **set_az_iotc** `tu_ID_scope` `tu_primary_key` `tu_nombre_de_dispositivo`

**Nota:** Asegúrate de agregar un solo espacio entre cada campo y puedes decidir un `nombre de dispositivo` de tu elección.

- **PASO 9:** Reinicia el Wio Terminal deslizando el interruptor hacia abajo alejándolo de la posición ON y liberándolo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Ahora podrás ver la pantalla LCD del Wio Terminal mostrando que se está conectando a Wi-Fi y luego a Azure IoT Hub. Después de eso, mostrará los datos de telemetría siendo enviados a Azure IoT Central.

### Visualizar en Azure IoT Central

Regresa a Azure IoT Central y desde el menú de navegación izquierdo, haz clic en **Devices**, haz clic en tu **Device name**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

¡Ahora podrás visualizar todos los datos del sensor del Wio Terminal en el Dashboard de Microsoft Azure IoT Central!
