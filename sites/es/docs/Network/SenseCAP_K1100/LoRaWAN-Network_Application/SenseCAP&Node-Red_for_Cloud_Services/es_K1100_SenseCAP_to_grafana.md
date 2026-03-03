---
description: SenseCAP & Node-RED to Grafana
title: SenseCAP & Node-RED a Grafana
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_grafana
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Conectando SenseCAP a Grafana a través de Node-RED

**SenseCAP K1100 - El Kit de Prototipo de Sensores** representa a Seeed Studio concentrando la esencia de la comunicación LoRa® en tecnología y productos de inteligencia de borde, para el despliegue y dominio más fácil de aplicaciones LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}><strong>Sensor Industrial SenseCAP</strong></font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
          <strong>S2100 <br /> Registrador de Datos</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 <br /> Temp. y Humedad del Aire</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
          <strong>S2102 <br /> Luz</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
          <strong>S2103 <br /> Temp. y Humedad del Aire y CO2</strong>
        </a>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
          <strong>S2104 <br /> Humedad y Temp. del Suelo</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 <br /> Humedad y Temp. del Suelo y EC</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
          <strong>S2110 <br /> Controlador LoRaWAN®</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
          <strong>S2120 <br /> Estación Meteorológica 8 en 1</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Grafana

Grafana es una solución de código abierto para ejecutar análisis de datos, obteniendo métricas que dan sentido a la cantidad masiva de datos y para monitorear nuestras aplicaciones con la ayuda de paneles personalizables geniales. Grafana se conecta con todas las fuentes de datos posibles, comúnmente referidas como bases de datos tales como Graphite, Prometheus, Influx DB, ElasticSearch, MySQL, PostgreSQL, etc. Grafana, siendo una solución de código abierto, también nos permite escribir plugins desde cero para la integración con varias fuentes de datos diferentes. La herramienta nos ayuda a estudiar, analizar y monitorear datos durante un período de tiempo, técnicamente llamado análisis de series temporales.

Nos ayuda a rastrear el comportamiento del usuario, el comportamiento de la aplicación, la frecuencia de errores que aparecen en producción o un entorno de pre-producción, el tipo de errores que aparecen y los escenarios contextuales proporcionando datos relativos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/1.png" alt="pir" width={800} height="auto" /></p>

El contenido de este capítulo continuará usando el Node-RED introducido anteriormente y usará Grafana para visualizar datos de su instancia InfluxDB 2.4.

Antes de hacerlo, por favor prepare lo siguiente.

1. Si no ha instalado o no sabe qué es Node-RED, por favor consulte [Tutoriales de Node-RED y SenseCAP](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/).

2. Comience desplegando SenseCAP a InfluxDB's Node RED, cuyos detalles se pueden encontrar en el wiki [Conectar SenseCAP a InfluxDB vía Node-RED](https://wiki.seeedstudio.com/es/K1100_SenseCAP_to_influxdb/).

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicie Node-RED escribiendo el comando `node-red` en la terminal y abra un navegador e ingrese la dirección [http://localhost:1880](http://localhost:1880) en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos mqtt en el formato de la API de SenseCAP como se solicita en el [tutorial anterior](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/#mqtt-node).

- Server: openstream.api.sensecap.seeed.cc
- Port: 1883
- Protocol: MQTT V3.1.1
- Client ID: El formato es `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Su ID de organización. Lo hemos obtenido en [Obtener la API de SenseCAP](/es/K1100_sensecap_node-red#get-the-sensecap-api).
  - `<Random ID>` usa sus propios números generados aleatoriamente o letras minúsculas.

- Topic Format: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Su ID de organización. Lo hemos obtenido en Obtener la API de SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificación única de dispositivos sensores. Esta información se puede encontrar en la etiqueta en la parte posterior del Grove - Wio E5, así como en el dispositivo de la consola SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Una interfaz física en el dispositivo al cual está conectado el sensor. Para el kit K1100, el valor predeterminado aquí es 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos Reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID del valor medido. Este ID se puede encontrar en la sección Measurement IDs de la <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentación de SenseCAP</a></td>
    </tr>
  </tbody></table>

**Paso 3.** Validar nodos MQTT

Una vez configurado, haga clic en el botón **Deploy** en la esquina superior derecha para verificar si la configuración fue exitosa. Si está completado correctamente, entonces se mostrará la palabra **Connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Iniciar InfluxDB OSS

:::tip
 Puede consultar el [tutorial](https://docs.influxdata.com/influxdb/v2.4/install/?t=Windows#start-influxdb) detallado proporcionado por InfuxDB para completar la instalación e implementación de InfluxDB, que es compatible con diferentes sistemas. Lo siguiente guiará la instalación usando un sistema Windows 11 como ejemplo.
:::
**Paso 1.** Descargar InfluxDB v2.4

Haga clic [aquí](https://dl.influxdata.com/influxdb/releases/influxdb2-2.4.0-windows-amd64.zip) para descargar el archivo zip de InfluxDB v2.4.

Extraiga el archivo descargado en `C:\Program Files\InfluxData\` y renombre los archivos si lo desea.

**Paso 2.** Iniciar InfluxDB

En Powershell, navegue a `C:\Program Files\InfluxData\influxdb` e inicie InfluxDB ejecutando el daemon influxd:

```shell
cd -Path 'C:\Program Files\InfluxData\influxdb'
.\influxd
```

:::tip
 Usa Powershell o WSL para ejecutar los comandos influx e influxd. Los ejemplos de línea de comandos en esta documentación usan influx e influxd como si estuvieran instalados en el `PATH` del sistema. Si estos binarios no están instalados en tu `PATH`, reemplaza influx e influxd en los ejemplos proporcionados con `.\influx` y `.\influxd` respectivamente.
:::
Por defecto, InfluxDB usa el puerto TCP `8086` para la comunicación cliente-servidor a través de la [API HTTP de InfluxDB](https://docs.influxdata.com/influxdb/v2.4/reference/api/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/3.png" /></div>

## Configurar InfluxDB

**Paso 1.** Registrar una cuenta de InfluxDB

Continúa con los pasos anteriores y registra una cuenta en la página que se abre.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/11.png" /></div>

Por favor, toma nota del **Nombre de la Organización** que estableces aquí, lo usaremos más tarde en la configuración de Node RED.

**Paso 2.** Obtener URL

Por defecto, InfluxDB usa el puerto TCP `8086` para la comunicación cliente-servidor a través de la API HTTP de InfluxDB.

```
http://localhost:8086/
```

Para esta sección, la URL de InfluxDB es la siguiente, por favor anótala, la usaremos más tarde en la configuración de Node RED.

**Paso 3.** Obtener Token de API

Ve a la página de Tokens de API como se muestra a continuación, crea una nueva interfaz de API para Node RED y anota el Token.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/13.png" /></div>

## Configurar Node-RED

**Paso 1.** Descargar Paletas de InfluxDB

Haz clic en la barra de menú superior derecha y selecciona Configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busca e instala **node-red-contrib-influxdb** en **Paletas -> Instalar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

Añade **influx.batch** desde la barra de almacenamiento de la izquierda, haz doble clic en él para entrar a la página de configuración, luego haz clic en el botón editar para editar el nodo **influx.batch**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**Paso 2.** Editar el nodo **influx.batch**:

- **Versión**: 2.0.
- **URL**: http://localhost:8086/
- **TOKEN**: El que generaste en la sección **Obtener Token de API**.

Cuando hayas terminado, haz clic en el botón **Añadir** en la esquina superior derecha para volver a la página de propiedades del influx batch, en este punto por favor completa tu Nombre de Organización y nombre de Bucket.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**Paso 3.** Configurar el nodo de función

El reporte de datos a InfluxDB necesita seguir un formato de datos específico, por lo que es necesario añadir un nodo de función para procesar el formato de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastra el nodo de función desde la barra de funciones de la izquierda, haz doble clic en él para entrar a la página de edición, luego copia el código a On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
var payload = msg.payload;
var topic = msg.topic;
var strs = topic.split("/");
var length = strs.length
if (length >= 2) {
    var measurementId = strs[length - 1]
    var body = {}
    var value = payload.value
    if (measurementId == 4100) {
        body.co2 = value
        measurement = "co2"
    } else if (measurementId == 4103) {
        body.soilmoisture = value
        measurement = "soilmoisture"
    } else if (measurementId == 4150) {
        body.accelX = value
        measurement = "accelX"
    } else if (measurementId == 4151) {
        body.accelY = value
        measurement = "accelY"
    } else if (measurementId == 4152) {
        body.accelZ = value
        measurement = "accelZ"
    } else if (measurementId == 4192) {
        body.soundintensity = value
        measurement = "soundintensity"
    } else if (measurementId == 4193) {
        body.lightIntensity = value
        measurement = "lightIntensity"
    } else if (measurementId == 4195) {
        body.tvoc = value
        measurement = "tvoc"
    } else if (measurementId == 4097) {
        body.airtemperature = value
        measurement = "airtemperature"
    } else if (measurementId == 4098) {
        body.airhumidity = value
        measurement = "airhumidity"
    } else if (measurementId == 4175) {
        body.AIdetection_1 = value
        measurement = "AIdetection_1"
    } else if (measurementId == 4176) {
        body.AIdetection_2 = value
        measurement = "AIdetection_2"
    } else if (measurementId == 4177) {
        body.AIdetection_3 = value
        measurement = "AIdetection_3"
    } else if (measurementId == 4178) {
        body.AIdetection_4 = value
        measurement = "AIdetection_4"
    } else if (measurementId == 4179) {
        body.AIdetection_5 = value
        measurement = "AIdetection_5"
    } else if (measurementId == 4180) {
        body.AIdetection_6 = value
        measurement = "AIdetection_6"
    } else if (measurementId == 4181) {
        body.AIdetection_7 = value
        measurement = "AIdetection_7"
    } else if (measurementId == 4182) {
        body.AIdetection_8 = value
        measurement = "AIdetection_8"
    } else if (measurementId == 4183) {
        body.AIdetection_9 = value
        measurement = "AIdetection_9"
    } else if (measurementId == 4184) {
        body.AIdetection_10 = value
        measurement = "AIdetection_10"
    }
    msg.payload = [{
        measurement: measurement,
        fields: body,
        tags: {
            device: "SenseCAP K1100"
        },
        timestamp: new Date()
    }];
}
return msg;
```

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy** y si todo está configurado correctamente podrás ver el nodo mqtt in mostrando conectado.

Si quieres ver la información de registro de los datos, puedes añadir un nodo debug después del nodo function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/17.png" /></div>

Una vez que el Wio Terminal comience a encenderse y funcionar y comience a enviar datos al servidor SenseCAP PaaS, entonces podemos verificar los datos en el registro de depuración de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## Configurar Grafana

**Paso 1.** Instalar Grafana

Grafana se puede instalar en muchos sistemas operativos diferentes. Para una lista de los requisitos mínimos de hardware y software, así como instrucciones sobre la instalación de Grafana, consulta [Instalar Grafana](https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/).

Tomando Windows 11 como ejemplo, descarga el paquete de instalación desde el [sitio web de Grafana](https://grafana.com/grafana/download?platform=windows) y haz doble clic para abrirlo para la instalación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/16.png" /></div>

**Paso 2.** Iniciar sesión en Grafana

Abre tu navegador web y ve a `http://localhost:3000/`. El puerto HTTP predeterminado que Grafana escucha es `3000` a menos que hayas configurado un puerto diferente.

En la página de inicio de sesión, ingresa `admin` para el nombre de usuario y contraseña.

Haz clic en **Sign in**. Si es exitoso, verás una solicitud para cambiar la contraseña.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/17.png" /></div>

**Paso 3.** Añadir Fuente de Datos

En la página principal, hacemos clic en el ícono de engranaje en la parte inferior izquierda y luego hacemos clic en **Add data source**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/18.png" /></div>

Selecciona InfluxDB de la lista de fuentes de datos disponibles.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/7.png" /></div>

**Paso 3.** Configurar la Fuente de Datos InfluxDB

En la página de configuración de la Fuente de Datos, ingresa un nombre para tu fuente de datos InfluxDB.

Luego, elige o ingresa lo siguiente:

- **Query Language**: Flux
- Bajo HTTP, haz lo siguiente:
  - **URL**: http://localhost:8086/
- Bajo Auth, haz lo siguiente:
  - Cierra **Basic auth**.
- Bajo InfluxDB Details, haz lo siguiente:
  - **Organization**: ID de organización. El ID de organización se puede ver en la página **About** de InfuxDB.
  - **Token**: Tu token de API de InfluxDB.
  - **Default Bucket**: El bucket predeterminado a usar en las consultas Flux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/14.png" /></div>

Haz clic en **Save & Test**. Grafana intenta conectarse a la fuente de datos InfluxDB 2.4 y devuelve los resultados de la prueba. Si todo va bien, verás el siguiente mensaje de salida.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/15.png" /></div>

## Consultar y visualizar datos

Con tu conexión de InfluxDB configurada, usa Grafana y Flux para consultar y visualizar datos de series temporales almacenados en tu instancia de InfluxDB.

Para más información sobre el uso de Grafana, consulta la [documentación de Grafana](https://grafana.com/docs/). Si estás aprendiendo Flux, consulta [Comenzar con Flux](https://docs.influxdata.com/flux/v0.x/get-started/).

¡También te invitamos a enviarnos tus paneles de datos, y esperamos con interés tu trabajo!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
