---
title: Conectar Wio Terminal a Microsoft Azure IoT Central
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/
slug: /es/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Conectar Wio Terminal a Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## Introducción

En este tutorial, te guiaremos a través del proceso de conectar el Wio Terminal a Microsoft Azure IoT Central y enviar datos de telemetría desde los sensores/hardware integrados en el Wio Terminal, como el acelerómetro de 3 ejes, sensor de luz, 3 botones a Microsoft Azure IoT Central. Luego podrás visualizar los datos del sensor en paneles interactivos. También podrás usar Azure IoT Central para controlar hardware como hacer sonar el zumbador integrado en el Wio Terminal. Microsoft Azure IoT Central soporta los protocolos HTTP, MQTT y AMQP para comunicación, pero utilizaremos el protocolo MQTT en este tutorial.

### ¿Qué es Microsoft Azure?

[Microsoft Azure](https://azure.microsoft.com) es la plataforma de computación en la nube pública de Microsoft. Puedes usar Microsoft Azure para construir, probar, desplegar y gestionar aplicaciones y servicios a través de centros de datos gestionados por Microsoft.

Además, proporciona una gama de servicios en la nube, incluyendo computación, análisis, almacenamiento y redes. Microsoft Azure proporciona software como servicio (SaaS), plataforma como servicio (PaaS), infraestructura como servicio (IaaS) y sin servidor. Finalmente, soporta muchos lenguajes de programación, herramientas y marcos de trabajo diferentes.

### ¿Qué es Microsoft Azure IoT?

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) es una colección de servicios en la nube gestionados por Microsoft que conectan, monitorean y controlan miles de millones de activos IoT. Incluye seguridad y sistemas operativos para dispositivos y equipos, junto con datos y análisis que ayudan a las empresas a construir, desplegar y gestionar aplicaciones IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### ¿Qué es Microsoft Azure IoT Central?

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) es una solución SaaS (software como servicio) IoT global completamente gestionada que facilita conectar, monitorear y gestionar tus activos IoT a escala. Es altamente segura, escala con tu negocio a medida que crece, asegura que tus inversiones sean repetibles y se integra con tus aplicaciones empresariales existentes. También cierra la brecha entre tus aplicaciones empresariales y los datos IoT. Finalmente ofrece gestión centralizada para reconfigurar y actualizar tus dispositivos.

### ¿Qué es IoT Plug and Play?

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) permite a los constructores de soluciones integrar dispositivos inteligentes con sus soluciones sin ninguna configuración manual. En el núcleo de IoT Plug and Play, está un modelo de dispositivo que un dispositivo usa para anunciar sus capacidades a una aplicación habilitada para IoT Plug and Play. Contiene:

- Propiedades: representa el estado de solo lectura o escribible de un dispositivo u otra entidad
- Telemetría: datos enviados por un dispositivo
- Comandos: describe una función u operación que se puede realizar en un dispositivo

Los dispositivos certificados IoT Plug and Play eliminan la molestia de configurar dispositivos en Azure IoT Central, como crear plantillas y agregar características e interfaces.

### Dispositivos Certificados IoT Plug and Play

Los Dispositivos Certificados IoT Plug and Play son dispositivos listados en el [Catálogo de Dispositivos Certificados de Azure](https://devicecatalog.azure.com) con la insignia IoT Plug and Play.

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) es un Dispositivo Certificado IoT Plug and Play.

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

Para ser Certificado IoT Plug and Play, necesitarás cumplir algunos criterios, uno de los cuales es publicar un modelo DTDL (Lenguaje de Definición de Gemelos Digitales) que define las capacidades del dispositivo en [Azure/iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) en GitHub.

Esto permite que los servicios en la nube que usan Dispositivos Certificados IoT Plug and Play aprendan sobre las capacidades del dispositivo desde este repositorio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## Conectando Wio Terminal a Microsoft Azure IoT Central vía MQTT

Como se explicó anteriormente, utilizaremos MQTT para la comunicación entre el Wio Terminal y Microsoft Azure IoT Central. Sin embargo, también puedes usar el puente HTTP si ese es tu requerimiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Configuración de Microsoft Azure IoT Central

Primero, necesitas visitar Microsoft Azure IoT Central, iniciar sesión en tu cuenta de Microsoft y crear una nueva aplicación para tu proyecto.

- **PASO 1:** Visita [aquí](https://apps.azureiotcentral.com) para crear una nueva aplicación

- **PASO 2:** Haz clic en **Build** desde el menú de navegación de la izquierda, y haz clic en **Custom apps**

**Nota:** Inicia sesión en tu cuenta de Microsoft si se te solicita

- **PASO 3:** Completa el **Application name** y elige **Free** bajo el **Pricing plan**.

**Nota:** La URL de la aplicación se creará automáticamente cuando completes el nombre de la aplicación

- **PASO 4:** Haz clic en **Create** para crear la nueva aplicación

¡Ahora has configurado exitosamente Azure IoT Central!

### Configurar Wio Terminal

#### Actualizar Firmware RTL8720

Necesitamos actualizar el firmware para el núcleo inalámbrico Realtek RTL8720 en el Wio Terminal. Sigue [esta wiki](https://wiki.seeedstudio.com/es/Wio-Terminal-Network-Overview) para actualizar el firmware RTL8720.

**Nota:** Asegúrate de actualizar el [firmware](https://github.com/SeeedJP/wioterminal-aziot-example/releases) según la versión especificada bajo la descripción del lanzamiento.

#### Descargar y Subir Código Demo al Wio Terminal

Primero usaremos un código demo que envía datos de telemetría desde los sensores integrados en el Wio Terminal a Microsoft Azure IoT Central.

##### Descargar el Código Demo

- **PASO 1:** Navega a [este repositorio](https://github.com/SeeedJP/wioterminal-aziot-example) en GitHub
- **PASO 2:** Haz clic en **Releases**
- **PASO 3:** Bajo el **Latest release**, haz clic en **wioterminal-aziot-example.uf2** para descargar el archivo .uf2

##### Subir el Código Demo al Wio Terminal

- **PASO 1:** Conecta el Wio Terminal a la PC y enciéndelo
- **PASO 2:** Entra al **Bootloader Mode** deslizando hacia abajo el interruptor de encendido más lejos de la posición "ON", suelta, desliza nuevamente y suelta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

**Nota:** Una vez que el Wio Terminal esté en modo Bootloader, el LED azul comenzará a respirar de una manera diferente al parpadeo

- **PASO 3:** Abre el Explorador de Archivos en tu PC y verás una nueva unidad externa, llamada **Arduino**

- **PASO 4:** Arrastra el **archivo .uf2** previamente descargado a esta **unidad Arduino**.

- **PASO 5:** Apaga el Wio Terminal

Ahora hemos subido exitosamente el código demo al Wio Terminal

##### Configuración de Wi-Fi y Azure IoT

A continuación, pasemos a configurar la conexión Wi-Fi y Azure IoT

- **PASO 1:** Mantén presionados los 3 botones y enciende el Wio Terminal para entrar al modo de configuración

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **PASO 2:** Abre una aplicación de consola serial como [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **PASO 3:** Escribe el **puerto COM** serial correcto, establece **9600** como la velocidad de baudios y entra al Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **PASO 4:** Presiona **ENTER** en el teclado y escribe **help** en la terminal serial para ver el uso de la configuración

- **PASO 5:** Establece el SSID de Wi-Fi escribiendo **set_wifissid** `nombre_de_tu_red_Wi-Fi`

**Nota:** Asegúrate de agregar un solo espacio entre los campos

- **PASO 6:** Establece la contraseña de Wi-Fi escribiendo **set_wifipwd** `contraseña_de_tu_red_Wi-Fi`

**Nota:** Asegúrate de agregar un solo espacio entre los campos

- **PASO 7:** Establece la información de conexión de Azure IoT visitando la aplicación previamente creada en [Azure IoT Central](https://apps.azureiotcentral.com)

- **PASO 8:** Navega a `Administration > Device Connection` desde el menú de navegación izquierdo, y **copia el ID scope** en el **bloc de notas**

- **PASO 9:** Haz clic en **SAS-IoT-Devices** y copia la **primary key** en el **bloc de notas**

- **PASO 10:** Visita la terminal serial previamente abierta y escribe **set_az_iotc** `tu_ID_scope` `tu_primary_key` `tu_nombre_de_dispositivo`

**Nota:** Asegúrate de agregar un solo espacio entre cada campo y puedes decidir un `nombre de dispositivo` de tu elección.

- **PASO 11:** Reinicia el Wio Terminal deslizando hacia abajo el interruptor más lejos de la posición ON y soltando

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Ahora podrás ver la pantalla LCD del Wio Terminal mostrando que se está conectando a Wi-Fi y luego a Azure IoT Hub. Después de eso mostrará los datos de telemetría siendo enviados a Azure IoT Central.

### Mostrar Datos de Telemetría en Microsoft Azure IoT Central

Pasaremos a mostrar los datos de telemetría entrantes del acelerómetro de 3 ejes, sensor de luz y 3 botones del Wio Terminal en el Dashboard de Azure IoT Central.

- **PASO 1:** Abre el Dashboard de Azure IoT Central que visitaste antes

- **PASO 2:** Haz clic en **Devices** desde el menú de navegación izquierdo

- **PASO 3:** Verás **Seeed Wio Terminal** aparecer bajo Devices. Haz clic en él

- **PASO 4:** Haz clic en la entrada con el **nombre de dispositivo** que configuraste antes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/wio_demo.png" alt="pir" width={800} height="auto" /></p>

Ahora podrás visualizar los datos del acelerómetro de 3 ejes integrado en un panel interactivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/accel_demo.png" alt="pir" width={800} height="auto" /></p>

Esta es la vista predeterminada y necesitamos hacer algunos cambios para mostrar también los otros datos de telemetría.

- **PASO 5:** Haz clic en **Plantillas de dispositivo** desde el menú de navegación izquierdo y haz clic en **Seeed Wio Terminal** para configurar la plantilla

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/device_template.png" alt="pir" width={400} height="auto" /></p>

- **PASO 6:** Haz clic en **Resumen** en el menú de navegación izquierdo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview.png" alt="pir" width={400} height="auto" /></p>

- **PASO 7:** Despliega el menú desplegable **seleccionar una telemetría** y selecciona la telemetría que deseas visualizar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview_edit.png" alt="pir" width={800} height="auto" /></p>

- **PASO 8:** Haz clic en **Agregar mosaico** y verás el mosaico agregado al Panel de Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_add.png" alt="pir" width={300} height="auto" /></p>

**Nota:** Puedes redimensionar o cambiar la visualización de los mosaicos según tu preferencia

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/resize.png" alt="pir" width={400} height="auto" /></p>

- **PASO 9:** Repite lo mismo para los 3 botones (izquierdo, central, derecho)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/draft_visual.png" alt="pir" width={850} height="auto" /></p>

**Nota:** Aquí hemos configurado lo siguiente:

| Nombre del Mosaico | Tamaño del Mosaico | Visualización del Mosaico |
|-|-|-|
| Intensidad de Luz | 2 x 2 | Gráfico de líneas |
| Botón izquierdo | 1 x 1 | KPI |
| Botón derecho | 1 x 1 | KPI |
| Botón central | 2 x 2 | KPI |

- **PASO 10:** Haz clic en **Save** y **Publish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/save.png" alt="pir" width={600} height="auto" /></p>

- **PASO 11:** Regresa al panel de control de Azure IoT Central y podrás visualizar todos los datos que llegan desde el Wio Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/final.png" alt="pir" width={750} height="auto" /></p>

- **PASO 12:** También puedes hacer clic en la pestaña **Raw data** para ver todos los datos de telemetría en tiempo real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/raw_data.png" alt="pir" width={700} height="auto" /></p>

#### Agregar una Regla para Enviar un Correo Electrónico

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

- **PASO 2:** Ingresa un **value** dentro de la columna bajo **Duration**

**Nota:** los valores están en unidades de milisegundos. ej: 1000 = 1000ms = 1s

- **PASO 3:** Cuando hagas clic en **Run**, podrás escuchar un sonido de pitido del zumbador durante la duración de tiempo especificada arriba

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## ¿Cómo Agregar Otros Sensores?

Puedes agregar cualquier sensor al Wio Terminal y enviar datos de telemetría desde el sensor conectado a Azure IoT Central. ¡Conectaremos un [Grove - Sensor de Temperatura y Humedad (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) al Wio Terminal y enviaremos datos de temperatura y humedad a Azure IoT Central para visualizarlos en paneles!

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

**Nota:** **dtmi:local:wioterminal_aziot_example;5** es el ID del Modelo

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

- **PASO 15:** Añade las definiciones del DHT11 y las inicializaciones después de la línea **LIS3DHTR AccelSensor;**

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

- **PASO 8:** Haz clic en **Guardar** y **Publicar**

### Configuración del Wio Terminal

#### Configuración del Hardware

- Conecta el **Grove - Sensor de Temperatura y Humedad (DHT11)** al **Puerto Digital Grove** en el Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### Configuración del Software

##### Cargar Código al Wio Terminal

Ahora necesitamos cargar el código al Wio Terminal para enviar los datos de telemetría a Azure IoT Central

- **PASO 1:** Regresa a VS Code, haz clic en el **icono de PlatformIO** y haz clic en **Cargar**

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

- **PASO 6:** Navega a `Administración > Conexión de Dispositivos` desde el menú de navegación izquierdo, y **copia el ámbito de ID** en el **bloc de notas**

- **PASO 7:** Haz clic en **SAS-IoT-Devices** y copia la **clave primaria** en el **bloc de notas**

- **PASO 8:** Visita la terminal serial abierta previamente y escribe **set_az_iotc** `tu_ámbito_de_ID` `tu_clave_primaria` `tu_nombre_de_dispositivo`

**Nota:** Asegúrate de agregar un solo espacio entre cada campo y puedes decidir un `nombre de dispositivo` de tu elección.

- **PASO 9:** Reinicia el Wio Terminal deslizando hacia abajo el interruptor más alejado de la posición ON y liberándolo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Ahora podrás ver la pantalla LCD del Wio Terminal mostrando que se está conectando a Wi-Fi y luego a Azure IoT Hub. Después de eso, mostrará los datos de telemetría siendo enviados a Azure IoT Central.

### Visualizar en Azure IoT Central

Regresa a Azure IoT Central y desde el menú de navegación izquierdo, haz clic en **Dispositivos**, haz clic en tu **Nombre de Dispositivo**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

¡Ahora podrás visualizar todos los datos del sensor del Wio Terminal en el Panel de Control de Microsoft Azure IoT Central!

## Soporte Técnico y Discusión de Productos

 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
