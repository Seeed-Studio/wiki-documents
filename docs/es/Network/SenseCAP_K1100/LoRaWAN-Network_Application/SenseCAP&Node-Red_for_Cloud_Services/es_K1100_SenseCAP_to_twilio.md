---
description: SenseCAP & Node-RED to Twilio
title: SenseCAP & Node-RED to Twilio
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_twilio
last_update:
  date: 1/13/2023
  author: shuxu hu
---

# Conectando SenseCAP a Twilio a través de Node-RED

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

## Twilio

Twilio es una plataforma de participación del cliente utilizada por cientos de miles de empresas y más de diez millones de desarrolladores en todo el mundo para crear experiencias únicas y personalizadas para sus clientes.

Twilio es conocido por democratizar canales como voz, texto, chat, video y correo electrónico a través de APIs, facilitando que cada organización construya interacciones significativas con los clientes en los canales que prefieren.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/1.jpg" alt="pir" width={700} height="auto" /></p>

Esta sección utilizará el kit SenseCAP K1100 así como la consola SenseCAP, Node-RED, para completar la tarea de activar un envío de mensaje de Twilio bajo ciertas condiciones.

Si no has instalado o no sabes qué es Node-RED, por favor consulta [Tutoriales de Node-RED y SenseCAP](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/).

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

## Configurar Twilio

**Paso 1.** Registrarse o iniciar sesión en Twilio

Si ya se ha registrado con Twilio, entonces inicie sesión en el [sitio web de Twilio](https://www.twilio.com/login).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/3.png" /></div>

Si no usa o no se ha registrado con Twilio, entonces complete su registro e inicie sesión [aquí](https://www.twilio.com/try-twilio).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/2.png" /></div>

**Paso 2.** Obtener la información necesaria

Podemos probar usando un servicio gratuito que envía mensajes SMS al teléfono móvil que verificamos durante el registro.

Haga clic en **Get a trial phone number** en la pantalla principal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/4.png" /></div>

Twilio generará automáticamente un número de teléfono de Twilio para usted.

En la parte inferior de la pantalla principal, bajo **Account Info**, encontrará lo que necesitamos para construir una conexión a Twilio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/5.png" /></div>

Anote el **Account SID**, **Auth Token** y **My Twilio phone number**, que usaremos más tarde en Node RED.

## Configurar Node-RED

**Paso 1.** Descargar Paletas de Twilio

Haga clic en la barra de menú superior derecha y seleccione Settings.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busque e instale **node-red-node-twilio** en **Paletts -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/6.png" /></div>

Agregue **twilio out** desde la barra de almacenamiento de la izquierda, haga doble clic en él para ingresar a la página de configuración, luego haga clic en el botón editar para editar el nodo **twilio out**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/7.png" /></div>

**Paso 2.** Editar nodo **twilio out**

Complete los campos correspondientes con la información que obtuvimos en la configuración previa de Twilio. Luego simplemente haga clic en el botón Add en la esquina superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/8.png" /></div>

Luego, complete el número de teléfono móvil que ha registrado con Twilio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/9.png" /></div>

:::note
Tenga en cuenta que necesita agregar el prefijo "**+ código de país**" al número de teléfono móvil que complete aquí.
:::
**Paso 3.** Configurar el nodo de función

El contenido del SMS se puede definir en el bloque de función, y las condiciones de activación pueden ser que los datos reportados por la plataforma PaaS activen ciertas reglas, todo lo cual se puede personalizar en el bloque de construcción de función.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arrastre el nodo de función desde la barra de función de la izquierda, haga doble clic en él para ingresar a la página de edición, luego copie el código a On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

Por ejemplo, en esta sección, cuando se recibe un valor de sensor, el valor del sensor se envía al teléfono y el código se puede escribir así.

```javascript
var payload = msg.payload;
var topic = msg.topic;
var strs = topic.split("/");
var length = strs.length
if (length >= 2) {
    var measurementId = strs[length - 1]
    var value = payload.value
    if (measurementId == 4100) {
        msg.payload = "CO2:" + value
    } else if (measurementId == 4103) {
        msg.payload = "soilmoisture:" + value
    } else if (measurementId == 4150) {
        msg.payload = "accelX:" + value
    } else if (measurementId == 4151) {
        msg.payload = "accelY:" + value
    } else if (measurementId == 4152) {
        msg.payload = "accelZ:" + value
    } else if (measurementId == 4192) {
        msg.payload = "sound:" + value
    } else if (measurementId == 4193) {
        msg.payload = "light:" + value
    } else if (measurementId == 4195) {
        msg.payload = "tvoc:" + value
    } else if (measurementId == 4097) {
        msg.payload = "temperature:" + value
    } else if (measurementId == 4098) {
        msg.payload = "humidity:" + value
    } else if (measurementId == 4175) {
        msg.payload = "AIdetection_1:" + value
    } else if (measurementId == 4176) {
        msg.payload = "AIdetection_2:" + value
    } else if (measurementId == 4177) {
        msg.payload = "AIdetection_3:" + value
    } else if (measurementId == 4178) {
        msg.payload = "AIdetection_4:" + value
    } else if (measurementId == 4179) {
        msg.payload = "AIdetection_5:" + value
    } else if (measurementId == 4180) {
        msg.payload = "AIdetection_6:" + value
    } else if (measurementId == 4181) {
        msg.payload = "AIdetection_7:" + value
    } else if (measurementId == 4182) {
        msg.payload = "AIdetection_8:" + value
    } else if (measurementId == 4183) {
        msg.payload = "AIdetection_9:" + value
    } else if (measurementId == 4184) {
        msg.payload = "AIdetection_10:" + value
    }
}
return msg;
```

:::note
Por favor, mantén un ojo en el saldo de tu cuenta, el código anterior enviará un SMS de sensor diferente cada cinco minutos. ¡Esto puede agotar rápidamente tu saldo si usas el código anterior directamente! Recomendamos programar para un sensor particular en lugar de enviar cada valor de sensor una vez.
:::
**Paso 4.** Desplegar

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy** y si todo está configurado correctamente podrás ver el nodo mqtt in mostrando conectado.

Si quieres ver la información de registro de los datos, puedes añadir un nodo debug después del nodo function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/10.png" /></div>

Una vez que el Wio Terminal comience a encenderse y funcionar y comience a enviar datos al servidor SenseCAP PaaS, entonces podemos verificar los datos en el registro de depuración de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/11.png" /></div>

Si todo va bien, también recibirás un mensaje de texto de Twilio con los valores de datos del sensor.

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
