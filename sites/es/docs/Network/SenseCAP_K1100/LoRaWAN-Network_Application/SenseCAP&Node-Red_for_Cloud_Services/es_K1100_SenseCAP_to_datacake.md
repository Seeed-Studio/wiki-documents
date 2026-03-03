---
description: SenseCAP & Node-RED to Datacake
title: SenseCAP & Node-RED to Datacake
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_datacake
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Conectando SenseCAP a Datacake a través de Node-RED

**SenseCAP K1100 - El Kit de Prototipo de Sensores** representa a Seeed Studio concentrando la esencia de la comunicación LoRa® en tecnología y productos de inteligencia de borde, para el despliegue y dominio más fácil de aplicaciones LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Datos</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. y Humedad del Aire</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. y Humedad del Aire y CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y Temp. del Suelo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y Temp. del Suelo y EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación Meteorológica 8 en 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Datacake

Datacake es una plataforma IoT multipropósito y de bajo código que no requiere habilidades de programación y tiempo mínimo para crear aplicaciones IoT personalizadas.

El contenido de este capítulo continuará usando el Node-RED introducido anteriormente y facilitará la gestión del kit K1100 en Datacake a través del uso de Node-RED.

Si no has instalado o no sabes qué es Node-RED, por favor consulta [Tutoriales de Node-RED y SenseCAP](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/1.png" alt="pir" width={600} height="auto" /></p>

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal y abre un navegador e ingresa la dirección [http://localhost:1880](http://localhost:1880) en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos mqtt en el formato de la API de SenseCAP como se solicita en el [tutorial anterior](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/#mqtt-node).

- Server: openstream.api.sensecap.seeed.cc
- Port: 1883
- Protocol: MQTT V3.1.1
- Client ID: El formato es `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Tu ID de organización. Lo hemos obtenido en [Obtener la API de SenseCAP](/es/K1100_sensecap_node-red#get-the-sensecap-api).
  - `<Random ID>` usa tus propios números generados aleatoriamente o letras minúsculas.

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
      <td align="center">Una interfaz física en el dispositivo a la cual está conectado el sensor. Para el kit K1100, el valor predeterminado aquí es 1.</td>
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

## Configurar Datacake

**Paso 1.** Registrarse o iniciar sesión en Datacake

Si ya se ha registrado en Datacake, entonces inicie sesión en el [sitio web de Datacake](https://datacake.co/).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/3.png" /></div>

Si no usa o no se ha registrado en Datacake, entonces complete su registro e inicie sesión [aquí](https://app.datacake.de/signup).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/2.png" /></div>

**Paso 2.** Nuevo espacio de trabajo

Una vez que haya iniciado sesión en Datacake, haga clic en el nombre de su cuenta en la esquina superior izquierda y seleccione **Add Workspace**. Y cree un nombre para su espacio de trabajo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/8.png" /></div>

**Paso 3.** Nuevo dispositivo

Después de ingresar al espacio de trabajo recién creado, entonces cree un nuevo dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/9.png" /></div>

Seleccione **API**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/4.png" /></div>

Seleccione **New Product**. Y nombre el producto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/5.png" /></div>

En esta sección, elegiremos la opción gratuita para completar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/7.png" /></div>

**Paso 4.** Configurar el dispositivo

Haga clic en el nuevo dispositivo que acaba de crear y seleccione **Configuration**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/10.png" /></div>

Localice "Fields" y haga clic en **Add Field**. Luego ingrese el nombre de los datos que desea administrar en Datacake.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/11.png" /></div>

:::note
 Tenga en cuenta que los campos IDENTIFIER están todos en mayúsculas, y en el nodo de función de Node RED que se configura más adelante, el contenido pasado también necesita estar en mayúsculas.
:::
**Paso 5.** Obtener el token de API

Haga clic en el nombre de su cuenta en la esquina superior izquierda y seleccione **Edit Profile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/12.png" /></div>

Luego guarde el **API token** en la API, que usaremos en Node RED en un momento.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/13.png" /></div>

## Configurar Node-RED

**Paso 1.** Descargar Paletas de Datacake

Haga clic en la barra de menú superior derecha y seleccione Settings.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busque e instale **node-red-contrib-datacake** en **Paletts -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/14.png" /></div>

Agregue **datacake - out** desde la barra de almacenamiento de la izquierda, haga doble clic en él para ingresar a la página de configuración, luego haga clic en el botón editar para editar el nodo **datacake - out**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/15.png" /></div>

**Paso 2.** Editar nodo **datacake - out**

Complete el **API Token** con el token de API que obtuvimos en la configuración anterior de Datacake. Luego simplemente haga clic en el botón Add en la esquina superior derecha.

Luego seleccione el nombre del espacio de trabajo que creamos anteriormente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/16.png" /></div>

El dispositivo se actualizará automáticamente al nuevo dispositivo recién creado y el cuadro desplegable de campo mostrará el nuevo campo recién creado. Si no desea establecer un campo aquí, también puede modificar el fieldName del payload para configurar el campo a través de código.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/17.png" /></div>

**Paso 3.** Configurar el nodo de función

El reporte de datos a Datacake necesita seguir un formato de datos específico, por lo que es necesario agregar un nodo de función para procesar el formato de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastre el nodo de función desde la barra de función de la izquierda, haga doble clic en él para ingresar a la página de edición, luego copie el código a On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        msg.payload = payload.value
        if (measurementId == 4150) {
            msg.fieldName = "ACCELX"
        } else if (measurementId == 4151) {
            msg.fieldName = "ACCELY"
        } else if (measurementId == 4152) {
            msg.fieldName = "ACCELZ"
        } else if (measurementId == 4192) {
            msg.fieldName = "VOLUME"
        } else if (measurementId == 4193) {
            msg.fieldName = "LIGHTINTENSITY"
        } else if (measurementId == 4103) {
            msg.fieldName = "SOILMOISTURE"
        } else if (measurementId == 4195) {
            msg.fieldName = "TVOC"
        } else if (measurementId == 4100) {
            msg.fieldName = "CO2"
        } else if (measurementId == 4097) {
            msg.fieldName = "AIRTEMPERATURE"
        } else if (measurementId == 4098) {
            msg.fieldName = "AIRHUMIDITY"
        } else if (measurementId == 4175) {
            msg.fieldName = "AIDETECTION1"
        } else if (measurementId == 4176) {
            msg.fieldName = "AIDETECTION2"
        } else if (measurementId == 4177) {
            msg.fieldName = "AIDETECTION3"
        } else if (measurementId == 4178) {
            msg.fieldName = "AIDETECTION4"
        } else if (measurementId == 4179) {
            msg.fieldName = "AIDETECTION5"
        } else if (measurementId == 4180) {
            msg.fieldName = "AIDETECTION6"
        } else if (measurementId == 4181) {
            msg.fieldName = "AIDETECTION7"
        } else if (measurementId == 4182) {
            msg.fieldName = "AIDETECTION8"
        } else if (measurementId == 4183) {
            msg.fieldName = "AIDETECTION9"
        } else if (measurementId == 4184) {
            msg.fieldName = "AIDETECTION10"
        }
    }
    return msg;
}
```

**Paso 4.** Desplegar

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy** y si todo está configurado correctamente podrás ver el nodo mqtt in mostrando conectado.

Si quieres ver la información de registro de los datos, puedes añadir un nodo debug después del nodo function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/18.png" /></div>

Una vez que el Wio Terminal comience a encenderse y funcionar y empiece a enviar datos al servidor SenseCAP PaaS, entonces podemos verificar los datos en el registro de depuración de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/19.png" /></div>

De vuelta en el panel de Datacake, puedes ver toda la información de datos en la sección **History** de este dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/20.png" /></div>

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
