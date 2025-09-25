---
description: SenseCAP & Node-RED to Power BI
title: SenseCAP & Node-RED to Power BI
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_PowerBI
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Conectando SenseCAP a Power BI a través de Node-RED

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

## Power BI

Conecta y analiza todo tu patrimonio de datos combinando Power BI con servicios de análisis de Azure, incluyendo Azure Synapse Analytics y Azure Data Lake Storage. Analiza petabytes de datos, utiliza capacidades avanzadas de IA, aplica protección adicional de datos y comparte más fácilmente información en toda tu organización.

En este tutorial te guiaremos sobre cómo importar datos de sensores desde **SenseCAP** hacia **Power BI** para un procesamiento de datos más profundo utilizando Node RED.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

## Preparación preliminar

Para completar este tutorial, necesitas:

- Si no has instalado o no sabes qué es Node-RED, por favor consulta [Tutoriales de Node-RED y SenseCAP](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/).
- Una cuenta de Power BI. Si no tienes una cuenta de Power BI, regístrate para una [prueba gratuita de Power BI Pro](https://app.powerbi.com/signupredirect?pbi_source=web) antes de comenzar.
- En cualquiera de los siguientes wikis, has subido exitosamente datos a SenseCAP.
  - [Enviar datos de sensores a SenseCAP vía LoRa®](https://wiki.seeedstudio.com/es/K1100-quickstart/#send-sensor-data-to-sensecap-via-lora)

<!--## Crear nodo SenseCAP

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en el terminal y abre un navegador. Ingresa la dirección **http://localhost:1880** en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Instalar el nodo SenseCAP

Haz clic en la barra de menú superior derecha y selecciona Configuración.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/6.png"/></div>

Busca e instala **node-red-sensecap-paas** en **Paleta -> Instalar**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/1.png"/></div>

**Paso 3.** Configurar nodo SenseCAP

Agrega **sensecap.OpenStream** desde la barra de almacenamiento a la izquierda, haz doble clic sobre él para entrar en la página de configuración y luego haz clic en el botón de edición para editar el nodo **sensecap.OpenStream**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/2.png"/></div>

Por favor edita tu cuenta.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/7.png"/></div>

En la nueva página, rellena los siguientes campos:

- Nombre: Asigna un nombre a esta cuenta.
- ID de Organización: Desde la sección **Información de la Organización**, copia el ID de la organización.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/8.png"/></div>

- Clave API: Haz clic en **Seguridad** -> **Acceder a claves API** en el lado izquierdo del panel. Luego crea una clave de acceso.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/9.png"/></div>

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/10.png"/></div>

Luego simplemente haz clic en el botón **Actualizar** o **Guardar**.

En la pantalla de configuración de nodos, rellena los siguientes campos:
- Nombre: Nombra tu nodo.
- EUI: Ingresa el EUI de tu dispositivo, que puedes encontrar en la consola de SenseCAP.
- ID de Medición: Número del sensor. La información sobre los números de sensores se puede encontrar en el [Centro de Documentación de SenseCAP](https://sensecap-docs.seeed.cc/sensor_types_list.html).
- Formato de Salida: Selecciona **Power BI**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/5.png"/></div>

!!!Nota
    Nuestra recomendación es completar el ID de Medición, ya que este será un valor de sensor cada vez que se transmita a Power BI. Si se deja en blanco, se transmitirán múltiples valores de sensores al mismo tiempo y Power BI obtendrá datos desordenados.
    Si necesitas analizar valores de múltiples sensores al mismo tiempo, puedes usar múltiples nodos SenseCAP.-->

## Crear Nodo MQTT

**Paso 1.** Iniciar Node-RED

Inicia Node-RED escribiendo el comando `node-red` en la terminal y abre un navegador e introduce la dirección [http://localhost:1880](http://localhost:1880) en la barra de direcciones para acceder al editor de Node-RED.

**Paso 2.** Crear Nodo MQTT

Usamos el nodo **Network -> mqtt in** y configuramos mqtt en el formato de la API de SenseCAP como se solicita en el [tutorial anterior](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc
- Puerto: 1883
- Protocolo: MQTT V3.1.1
- ID de Cliente: El formato es `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Tu ID de organización. Lo hemos obtenido en [Obtener la API de SenseCAP](/es/K1100_sensecap_node-red#get-the-sensecap-api).
  - `<Random ID>` usa tus propios números generados aleatoriamente o letras minúsculas.

- Formato del Tema: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

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

:::note
Recomendamos que un nodo mqtt in solo transmita los valores de un único sensor para evitar confusión de datos causada por transmitir los valores de múltiples sensores al mismo tiempo.
:::
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/20.png" /></div>

**Paso 3.** Validar nodos MQTT

Una vez configurado, por favor haga clic en el botón **Deploy** en la esquina superior derecha para verificar si la configuración fue exitosa. Si está completado correctamente, entonces se mostrará la palabra **Connected**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar nodo de función

El reporte de datos a Power BI necesita seguir un formato de datos específico, por lo que es necesario agregar un nodo de función para procesar el formato de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastre el nodo de función desde la barra de funciones de la izquierda, haga doble clic en él para ingresar a la página de edición, luego copie el código a On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
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
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4103) {
            body.soilmoisture = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4150) {
            body.accelX = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4151) {
            body.accelY = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4152) {
            body.accelZ = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4192) {
            body.soundintensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4193) {
            body.lightIntensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4195) {
            body.tvoc = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4097) {
            body.airtemperature = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4098) {
            body.airhumidity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4175) {
            body.AIdetection_1 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4176) {
            body.AIdetection_2 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4177) {
            body.AIdetection_3 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4178) {
            body.AIdetection_4 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4179) {
            body.AIdetection_5 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4180) {
            body.AIdetection_6 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4181) {
            body.AIdetection_7 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4182) {
            body.AIdetection_8 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4183) {
            body.AIdetection_9 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4184) {
            body.AIdetection_10 = value
            body.timestamp = msg.payload.timestamp
        }
        msg.payload = body;
    }
    return msg;
}
```

:::tip
    El código anterior es común a todos los sensores y puedes elegir pegarlo todo en un nodo de función o interceptar una sección de uno de los sensores que estés usando para utilizar.
    Vale la pena señalar que el nombre del sensor en el programa necesita coincidir con el nombre establecido posteriormente en Power BI para que el flujo de datos se transfiera exitosamente. Por ejemplo, en el programa anterior el sensor de luz tiene el nombre del valor: **lightIntensity**.
:::

## Crear los conjuntos de datos de Power BI

**Paso 1.** Inicia sesión en tu [cuenta de Power BI](https://app.powerbi.com/).

**Paso 2.** Crea un espacio de trabajo.

Selecciona **Espacios de trabajo**, y luego selecciona **Crear un espacio de trabajo**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

En la página Crear un espacio de trabajo, ingresa **Análisis en tienda - checkout** como el Nombre del espacio de trabajo. Selecciona **Guardar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**Paso 3.** Crea un conjunto de datos de transmisión.

En la página del espacio de trabajo, selecciona **+ Nuevo** > **Conjunto de datos de transmisión**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

En la página Nuevo conjunto de datos de transmisión, elige API, y luego selecciona Siguiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

Ingresa **Light-Sensor** como el Nombre del conjunto de datos.

Ingresa los valores de Luz desde la transmisión en la siguiente tabla:

| Nombre del valor          | Tipo de valor                |
|---------------------------|------------------------------|
| Timestamp                 | DataTime                     |
| lightIntensity            | Number                       |

:::tip
El nombre del Valor debe ser el mismo que el nombre del programa de función en Node RED.
:::
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/21.png" /></div>

Ahora tienes un conjunto de datos de transmisión. Por favor, toma nota de la **URL de Push** que obtienes aquí, la usaremos en el siguiente paso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/22.png" /></div>

## Configurar el nodo de solicitud http

Añade **http request** desde la barra de almacenamiento de la izquierda, haz doble clic en él para entrar a la página de configuración, luego haz clic en el botón editar para editar el nodo **http request**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/16.png" /></div>

Por favor, copia la URL obtenida en la sección anterior en la URL en la página de solicitud http.

Solo cambia el método a **POST** y guárdalo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/17.png" /></div>

## Desplegar y observar datos

**Paso 1.** Desplegar

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy** y si todo está configurado correctamente podrás ver el nodo mqtt in mostrando conectado.

Si quieres ver la información de registro de los datos, puedes añadir un nodo debug después del nodo de función.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/18.png" /></div>

Una vez que el Wio Terminal comience a encenderse y funcionar y comience a enviar datos al servidor SenseCAP PaaS, entonces podemos verificar los datos en el registro de depuración de Node-RED.

**Paso 2.** Configurar paneles de Power BI

Selecciona **Workspaces** > **In-store analytics - checkout**.

Selecciona **+ New** > **Dashboard**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

Ingresa **Store analytics** como el nombre del panel, y selecciona **Create**.

### Añadir gráficos de líneas

Añade mosaicos de gráfico de líneas para mostrar el valor de Luz de los sensores integrados del Wio Terminal. Usa la información en la siguiente tabla para crear los mosaicos. Para añadir cada mosaico, comienza seleccionando **Edit** > **Add a tile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

Selecciona **Custom Streaming Data**, y luego selecciona **Next**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

Configura la coordenada horizontal para mostrar la marca de tiempo y la coordenada vertical para mostrar los valores de datos en el valor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/15.png" /></div>

Cuando el flujo de datos comience a transferirse, podrás ver el panel como un gráfico de líneas.

También puedes añadir más gráficos o análisis de datos para satisfacer tus necesidades.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/19.png" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaración

- La Marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.
- LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
