---
description: SenseCAP & Node-RED to InfluxDB
title: SenseCAP & Node-RED to InfluxDB
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_influxdb
last_update:
  date: 1/13/2023
  author: shuxu hu
---

# Conectando SenseCAP a InfluxDB a través de Node-RED

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

## Acerca de InfluxDB

**InfluxDB** es una base de datos de series temporales de código abierto, que se enfoca en lectura de alto rendimiento, escritura de alto rendimiento, almacenamiento eficiente y análisis en tiempo real de datos masivos de series temporales. Además de protocolos nativos como HTTP y UDP, también es compatible con protocolos de comunicación de componentes como CollectD, Graphite, OpenTSDB y Prometheus. Ampliamente utilizado en monitoreo DevOps, monitoreo IoT, análisis en tiempo real y otros escenarios.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/1.png" /></div>

El contenido de este capítulo continuará utilizando Node-RED introducido anteriormente y facilitará la gestión del kit K1100 en InfluxDB mediante el uso de Node-RED.

Si no has instalado o no sabes qué es Node-RED, consulta [Tutoriales de Node-RED y SenseCAP](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/).

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal y abre un navegador e ingresa la dirección [http://localhost:1880](http://localhost:1880) en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Utilizamos el nodo **Network -> mqtt in** y configuramos mqtt en el formato de la API de SenseCAP como se solicita en el [tutorial anterior](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/#mqtt-node).

- Server: openstream.api.sensecap.seeed.cc
- Port: 1883
- Protocol: MQTT V3.1.1
- Client ID: El formato es `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Tu ID de organización. Lo hemos obtenido en [Obtener la API de SenseCAP](/es/K1100_sensecap_node-red#get-the-sensecap-api).
  - `<Random ID>` utiliza tus propios números generados aleatoriamente o letras minúsculas.

- Topic Format: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Tu ID de organización. Lo hemos obtenido en Obtener la API de SenseCAP.</td>
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

## Configurar InfluxDB

**Paso 1.** Registrarse o iniciar sesión en InfluxDB

Si ya se ha registrado en InfluxDB, entonces inicie sesión en el [sitio web de InfluxDB](https://www.influxdata.com/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/2.png" /></div>

Si no usa o no se ha registrado en InfluxDB, entonces complete su registro e inicie sesión [aquí](https://cloud2.influxdata.com/signup).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/3.png" /></div>

:::tip
Al registrarse, puede aparecer una página pidiéndole que elija el proveedor, puede elegir según su preferencia, o simplemente seleccionar uno.
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/4.png" /></div>

**Paso 2.** Obtener API Token

Como se muestra a continuación, haga clic en **Bucket**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/5.png" /></div>

Luego haga clic en CREATE BUCKET.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/6.png" /></div>

Ingrese el nombre en la nueva ventana emergente y seleccione el período de retención de datos gratuito - 30 días.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/7.png" /></div>

Luego, como se muestra a continuación, haga clic en **API Tokens**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100_influxdb/8.png" /></div>

Entonces elegimos crear un **Custom API Token**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/9.png" /></div>

Otorgue permisos de **lectura** y **escritura** a los Buckets que acabamos de crear y haga clic en el botón Create a continuación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/10.png" /></div>

Una vez que se haya creado, puede guardarlo copiando el API Token al portapapeles. Guárdelo en un lugar seguro por ahora, lo usaremos en un paso posterior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/11.png" /></div>

:::note
Si cierra la ventana aquí, no podrá obtener este API Token nuevamente.
:::

## Configurar Node-RED

**Paso 1.** Descargar Paletas de InfluxDB

Haga clic en la barra de menú superior derecha y seleccione Settings.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busque e instale **node-red-contrib-influxdb** en **Paletts -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

Agregue **influx.batch** desde la barra de almacenamiento de la izquierda, haga doble clic en él para ingresar a la página de configuración, luego haga clic en el botón de edición para editar el nodo **influx.batch**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**Paso 2.** Editar nodo **influx.batch**:

- **Version**: 2.0.
- **URL**: Obtenido desde **Settings** -> **Orgnization Profile**.
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_influxdb/14.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/15.png" /></div>

- **TOKEN**: El que generó en la sección **Obtener API Token**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/16.png" /></div>

Cuando haya terminado, haga clic en el botón **Add** en la esquina superior derecha para regresar a la página de propiedades del influx batch, en este punto complete su Orgnization (Por defecto es la dirección de correo electrónico que usa para registrarse en InfluxDB) y el nombre del Bucket.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**Paso 3.** Configurar el nodo de función

El reporte de datos a InfluxDB necesita seguir un formato de datos específico, por lo que es necesario agregar un nodo de función para procesar el formato de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastre el nodo de función desde la barra de funciones de la izquierda, haga doble clic en él para ingresar a la página de edición, luego copie el código a On Message.

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

Una vez que el Wio Terminal comience a encenderse y funcionar y empiece a enviar datos al servidor SenseCAP PaaS, entonces podemos verificar los datos en el registro de depuración de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## Configurar paneles visuales de InfluxDB

Para obtener una vista más visual de los datos del sensor, podemos dibujar algunos gráficos de líneas.

Regresa a InflucDB Cloud y haz clic en **CREATE DASHBOARD** para **ADD CELL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/19.png" /></div>

Si SenseCAP ha comenzado a enviar mensajes de datos a InfluxDB, entonces puedes ver la etiqueta del sensor en esta página. Para el contenido de los datos que quieres mostrar, simplemente marcamos la casilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/23.png" /></div>

## Solución de problemas

> P1: ¿Por qué no puedo encontrar la Paleta en Node-RED?

R: Si no puedes encontrar la Paleta en la configuración, verifica tu terminal para un mensaje de error cuando inicies Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

El escenario más común es que tu versión de npm es demasiado antigua para iniciar el editor de Paleta.

Si tu situación es como se describe arriba, ejecuta **Powershell como administrador** e ingresa el siguiente comando para actualizar npm.

```sh
npm install -g npm
```

Luego simplemente reinicia Node-RED.

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
