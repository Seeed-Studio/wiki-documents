---
description: Conectar el Sensor S210X a Microsoft Azure IoT Central a través de Node-RED
title: Conectar el Sensor S210X a Microsoft Azure IoT Central a través de Node-RED
keywords:
- SenseCAP LoRaWAN Sensor& Microsoft Azure IoT Central
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central
last_update:
  date: 7/26/2023
  author: Jessie
---


SenseCAP S210X es una serie de sensores inalámbricos LoRaWAN®. Puede cubrir un rango de transmisión de 2km en escenas urbanas y 10km en escenas de línea de vista mientras mantiene un menor consumo de energía durante el proceso de transmisión. Junto con una batería reemplazable que soporta hasta 10 años de uso y una carcasa industrial IP66. Soporta temperatura de funcionamiento de -40 ~ 85℃ y puede ser desplegado en entornos hostiles. SenseCAP S210X es compatible con el protocolo LoRaWAN® V1.0.3 y puede trabajar con gateway LoRaWAN®. Los usuarios pueden instalar el dispositivo, vincularlo usando el código QR y configurar la red, luego los datos pueden ser visualizados desde el portal SenseCAP, que soporta protocolos IoT populares como HTTP y MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/001.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/catalogsearch/result/?q=S210x" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

En este tutorial, introduciremos cómo conectar los sensores de la serie S210X a Microsoft Azure IoT Central a través de Node-RED.

## SenseCAP & Node-RED

Este capítulo, el primero de una serie, te guía a través de la instalación y uso de Node-red y la llamada a la API de SenseCAP para conectar a Node-RED.

Este capítulo es para facilitar a nuestros usuarios la conexión de datos desde la plataforma SenseCAP a varias otras plataformas Paas para un procesamiento de datos más profundo.

**Node-RED**

Node-RED es una herramienta de programación para conectar dispositivos de hardware, APIs y servicios en línea de maneras nuevas e interesantes. Proporciona un editor basado en navegador que facilita la conexión de flujos usando la amplia gama de nodos en la paleta que pueden ser desplegados a su tiempo de ejecución con un solo clic.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/002.png" alt="pir" width={600} height="auto" /></p>

### Instalar Node.Js

Para instalar Node-RED localmente necesitarás una versión soportada de Node.js.

Node-RED actualmente recomienda [Node 14.x LTS](https://nodejs.org/en/).

### Instalando Node-RED con npm

Para instalar Node-RED puedes usar el comando npm que viene con node.js:

```cpp
sudo npm install -g --unsafe-perm node-red
```

:::info Nota
Si estás usando Windows, no inicies el comando con "sudo".
:::

Este comando instalará Node-RED como un módulo global junto con sus dependencias.
Una vez instalado como módulo global, puedes usar este comando para iniciar Node-RED en tu terminal.

```cpp
node-red
```

![IMG_258](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/003.png)

Luego puedes acceder al editor de Node-RED dirigiendo tu navegador a [http://localhost:1880](http://localhost:1880/).

### Obtener la API de SenseCAP

Antes de proceder a esta sección, asegúrate de haber vinculado tu dispositivo S210x en la consola de SenseCAP.

Inicia sesión en la [**consola de SenseCAP**](https://sensecap.seeed.cc/portal/#/dashboard). En la barra desplegable a la derecha del nombre de usuario en la parte superior del panel, podemos encontrar la **Información de la Organización**, por favor selecciónala para obtener el **ID de Organización**

![IMG_259](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/004.png)

Luego, también necesitamos obtener la clave API para SenseCAP. Por favor haz clic en **Security -> Access API keys** en el lado izquierdo del panel. Luego Crea una Clave de Acceso.

![IMG_260](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/005.png)

Haz clic en el **API ID** que creaste y obtendrás sus **Access API keys**, por favor cópialas junto con el **ID de Organización**, los usaremos en los pasos posteriores.

![IMG_261](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/006.png)

### Configuración de Node-RED

![IMG_262](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/007.png)

- **Paso 1.** Agregar un nuevo nodo mqtt-broker

Arrastra un nodo **mqtt in**, haz doble clic en él para entrar a la página de configuración, luego haz clic en el botón editar después de **Add new mqtt-broker**.

![IMG_263](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/008.png)

La configuración del mqtt-broker debe completarse de la siguiente manera:

Server：openstream.api.sensecap.seeed.cc

Port：1883

Protocol: MQTT V3.1.1

Client ID format：**org-"Organization ID" "Random ID"**

**Organization ID:** Obtenido de tu **Organization information**

**Random ID:** Usa tus propios números generados aleatoriamente y letras minúsculas.

Ejemplo:org-43243\*\*\*23-test

![IMG_264](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/009.png)

Luego completamos el campo de opciones de **Security** con el Username y Password:

Username: **org-"Organization ID"**

**Organization ID:** Tu ID de organización. Lo hemos obtenido antes

Password: Completa con las **Access API keys** que obtuvimos antes.
` `![IMG_265](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/010.png)

Agregar **Topic**

Topic: Configurar un topic en un formato específico determina el tipo de dispositivo y tipo de datos a recibir.

Formato del Topic:
**/device_sensor_data/"OrgID"/"DeviceEUI"/"Channel"/"Reserved"/"MeasurementID"**

|OrgID|Puedes encontrar el id en la información de tu organización|
| :-: | :- |
|DeviceEUI|Puedes encontrar el EUI en las Propiedades Básicas del Dispositivo o en la etiqueta del dispositivo|
|Channel|Una interfaz física en el dispositivo para conectar al sensor, por defecto:1|
|Reserved|Campo reservado|
|MeasurementID|[measurement_list](https://sensecap-docs.seeed.cc/measurement_list.html)|

:::info Nota
"+" indica que este campo no tiene condiciones de filtro y puede coincidir con todo. "/+/+/+/+" significa escuchar todos los "DeviceEUI", "Channel", "Reserved", "MeasurementID"
:::

Ejemplo：/device_sensor_data/424988\*\*\*\*44/2CF7F\*\*\*0002/+/+/+

Este tema significa recibir todos los datos de detección remota del dispositivo actual.

![IMG_266](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/011.png)

- **Paso 2.** Agregar nodo de depuración

Arrastra un nodo **debug**, conéctalo al nodo **mqtt-in**, luego haz clic en **Deploy**

Después de que el despliegue sea exitoso, verás "**Connected**" bajo el bloque de construcción **mqtt in**, el intervalo de reporte de datos está determinado por el sensor que conectamos. Después de recibir los datos, la ventana de depuración de la derecha mostrará los datos sin procesar. ![IMG_267](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/012.png)

## **SenseCAP & Node-RED & Azure IoT Central**

[**Microsoft Azure IoT Central**](https://azure.microsoft.com/en-us/services/iot-central) es una solución SaaS (software como servicio) de IoT global completamente administrada que facilita la conexión, monitoreo y gestión de sus activos de IoT a escala. Es altamente segura, escala con su negocio a medida que crece, asegura que sus inversiones sean repetibles y se integra con sus aplicaciones comerciales existentes. También cierra la brecha entre sus aplicaciones comerciales y los datos de IoT. Finalmente, ofrece gestión centralizada para reconfigurar y actualizar sus dispositivos.

El contenido de este capítulo continuará usando el Node-RED introducido anteriormente y facilitará la gestión del conjunto de sensores S210X en Microsoft Azure IoT Central mediante el uso de Node-RED.

### Configuración de Microsoft Azure IoT Central

- **Paso 1.** Iniciar sesión en Azure IoT Central.

Por favor visita el sitio web de [**Azure IoT Central**](https://apps.azureiotcentral.com/home), haz clic en **Build** desde el menú de navegación de la izquierda, y haz clic en **Custom apps**. ![IMG_268](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/013.png)

- **Paso 2.** Completa el **Application name** y elige el **Pricing plan**. La URL de la aplicación se creará automáticamente cuando completes el nombre de la aplicación.

![IMG_269](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/014.png)

Nota: Si eres un nuevo usuario de Azure IoT Central, recomendamos que selecciones Free ya que esto no consumirá tus tarifas.

![IMG_270](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/015.png)

- **Paso 3.** Haz clic en **Create** para crear la nueva aplicación. ¡Ahora has configurado exitosamente Azure IoT Central!

![IMG_271](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/016.png)

- **Paso 4.** Crear una Plantilla de Dispositivo

Por favor crea una nueva plantilla de dispositivo haciendo clic en **Device templates** en la barra de menú de la izquierda.

![IMG_272](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/017.png)

Nombra tu plantilla de dispositivo y haz clic en **create**

![IMG_273](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/018.png)

![IMG_274](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/019.png)

- **Paso 5.** Crear un Dispositivo

Haz clic en **Devices -> S2103** bajo la barra de menú de la izquierda. ![IMG_275](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/020.png)

![IMG_276](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/021.png)

Una vez que hayas creado el dispositivo, verás el dispositivo que acabamos de crear bajo **Device**, por favor toca el dispositivo y haz clic en el botón **Connect** en la esquina superior izquierda.

Por favor toma nota de esta información, que usaremos en los siguientes pasos.

![IMG_277](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/022.png)

### **Configuración de Node-RED**

- **Paso 1.** Instalar Paletas de Azure IoT

Haz clic en la barra de menú superior derecha y selecciona Settings ![IMG_278](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/023.png)

Busca e instala "node-red-contrib-azure-iot-central" en **Paletts - Install** ![IMG_279](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/024.png)

- **Paso 2.** Configurar el nodo de Azure IoT Central

Arrastra el nodo **Azure IoT Central** desde la barra **function** de la izquierda, haz doble clic en él para entrar a la página de configuración, luego haz clic en el botón de edición para editar el nodo **Azure IoT Central**

![IMG_280](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/025.png)

La configuración debe completarse de la siguiente manera:

Transport: MQTT

Authentication: SAS

Scope ID/Device ID/Primary Key: Los hemos obtenido anteriormente

![IMG_281](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/026.png)

- **Paso 3.** Configurar el nodo de función

El reporte de datos a Azure IoT Central necesita seguir un formato de datos específico, por lo que es necesario agregar un bloque de construcción de función para procesar el formato de datos.

Arrastra el nodo **function** desde la barra de función de la izquierda, haz doble clic en él para entrar a la página de edición, luego copia el código a **On Message.**

![IMG_282](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/027.png)

**Código**:

```cpp
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var body = {}
        var value = payload.value
        if (measurementId == 4097) {
            body.AirTemperature = value
        } else if (measurementId == 4098) {
            body.AirHumidity = value
        } else if (measurementId == 4100) {
            body.CO2 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

Si deseas ver la información de registro de los datos, puedes agregar un nodo de depuración después del nodo de función.

![IMG_283](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/028.png)

Una vez que el Sensor S210X comience a encenderse y funcionar y comience a enviar datos al servidor SenseCAP PaaS, entonces podemos verificar los datos en Azure IoT Central.

### **Presentación de Datos**

Los datos visibles en la columna **Datos sin procesar** se colocan en **Datos sin modelar**, por lo que necesitamos analizar los datos según el código anterior.

Agrega la capacidad que necesites, luego haz clic en **guardar** y **publicar**

![IMG_284](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/029.png)

![IMG_285](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/030.png)

Entonces podemos verificar claramente los datos sin procesar cargados por el sensor. ![IMG_286](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/031.png)

Si deseas enriquecer tu página de panel de datos, también puedes configurarla para que se muestre en Resumen.

Haz clic en **Resumen** en el menú de navegación izquierdo.

![IMG_287](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/032.png)

Colapsa el menú desplegable **comienza con dispositivos** y selecciona la telemetría que deseas visualizar.

![IMG_288](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/033.png)

Haz clic en **Agregar mosaico** y verás el mosaico agregado al Panel de Azure IoT Central.

![IMG_289](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/034.png)

¡Así que a continuación, personaliza tu panel de monitoreo de datos del sensor a tu gusto!

Después de terminar tus cambios, simplemente haz clic en **guardar** y **publicar**

![IMG_290](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/035.png)

![IMG_291](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/036.png)

¡Ahora puedes ver los datos de tu sensor a través de tu panel personalizado! ![IMG_292](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/037.png)
