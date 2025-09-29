---
description: SenseCAP & Node-RED a Microsoft Azure IoT Central
title: SenseCAP & Node-RED a Microsoft Azure IoT Central
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_SenseCAP_to_Azure_IoT_Central
last_update:
  date: 1/12/2023
  author: shuxu hu
---


# Conectando SenseCAP a Azure IoT Central a través de Node-RED

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

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) es una colección de servicios en la nube administrados por Microsoft que conectan, monitorean y controlan miles de millones de activos IoT. Incluye seguridad y sistemas operativos para dispositivos y equipos, junto con datos y análisis que ayudan a las empresas a construir, implementar y administrar aplicaciones IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Microsoft Azure IoT Central

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) es una solución SaaS (software como servicio) IoT global completamente administrada que facilita la conexión, monitoreo y administración de sus activos IoT a escala. Es altamente segura, escala con su negocio a medida que crece, asegura que sus inversiones sean repetibles y se integra con sus aplicaciones comerciales existentes. También cierra la brecha entre sus aplicaciones comerciales y los datos IoT. Finalmente, ofrece administración centralizada para reconfigurar y actualizar sus dispositivos.

El contenido de este capítulo continuará usando el Node-RED introducido anteriormente y facilitará la administración del kit K1100 en Microsoft Azure IoT Central mediante el uso de Node-RED.

Si no ha instalado o no sabe qué es Node-RED, consulte [Tutoriales de Node-RED y SenseCAP](https://wiki.seeedstudio.com/es/K1100_sensecap_node-red/).

## Instalar el SenseCraft

**SenseCraft** es una plataforma de software de código abierto para construir sensores inteligentes sin código. Ofrece una solución completa lista para usar para detectar el mundo real, procesar datos y enviar los datos a la nube de la manera más fácil y rápida posible sin experiencia en codificación en absoluto. Ahora es compatible con Wio Terminal.

Al usar SenseCraft, podemos transferir valores de sensores del kit K1100 directamente a la plataforma SenseCAP sin programación. Esto se logra, por supuesto, a través de **LoRaWAN**®.

:::note
Si desea acceder a Azure IoT Central a través de **WiFi (MQTT)**, consulte esta [Wiki](https://wiki.seeedstudio.com/es/Connect-Wio-Terminal-to-Azure-IoT-Central/).
:::
**Paso 1.** Descargue el firmware a su computadora

Bajo **Latest release**, haga clic en **SenseCraft-vx.x.uf2** para descargar el archivo .uf2.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Cargue el firmware al Wio Terminal

Conecte el Wio Terminal a la PC y enciéndalo, ingrese al **Modo Bootloader** deslizando hacia abajo el interruptor de encendido más lejos de la posición "ON", suelte, deslice nuevamente y suelte.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Una vez que Wio Terminal esté en modo Bootloader, el LED azul comenzará a respirar de una manera diferente al parpadeo.
:::
Abra el Explorador de archivos en su PC y verá una nueva unidad externa, llamada **Arduino**, arrastre el **archivo .uf2** descargado previamente a esta **unidad Arduino**.

Ahora hemos cargado exitosamente el SenseCraft en el Wio Terminal.

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

## Configurar Microsoft Azure IoT Central

**Paso 1.** Iniciar sesión en Azure IoT Central.

Vaya al sitio web oficial de [Azure IoT Central](https://apps.azureiotcentral.com/home), haga clic en **Build** desde el menú de navegación de la izquierda, y haga clic en **Custom apps**.

Si aún no ha iniciado sesión en Azure IoT Central, se le pedirá que complete un registro/inicio de sesión en este punto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**Paso 2.** Complete el **Application name** y elija **Standard 0** bajo el **Pricing plan**. La URL de la aplicación se creará automáticamente cuando complete el nombre de la aplicación. En este ejemplo, lograremos esta tarea con el costo mínimo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
Si es un nuevo usuario de Azure IoT Central, recomendamos que seleccione **Free** ya que esto no consumirá sus tarifas.
:::
    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**Paso 3.** Haga clic en **Create** para crear la nueva aplicación. ¡Ahora ha configurado exitosamente Azure IoT Central!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/3.png" /></div>

**Paso 4.** Crear una plantilla de dispositivo

Cree una nueva plantilla de dispositivo haciendo clic en **Device templates** en la barra de menú de la izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

Seleccione **Wio Terminal** como nuestra plantilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

Luego simplemente haga clic en **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

Entonces, se crea una plantilla lista para usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**Paso 5.** Crear un dispositivo

Haga clic en **Devices -> Seeed Wio Terminal** bajo la barra de menú de la izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

Haga clic en **New**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

Haga clic en el botón **Create** para completar la creación del dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

Una vez que haya creado el dispositivo, verá el dispositivo que acabamos de crear bajo **Device**, ingrese al dispositivo y haga clic en el botón **Connect** en la esquina superior izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

Aquí necesitamos la información que está allí.

```
ID scope
Device ID
Primary key
```

Por favor toma nota de esta información, que usaremos en los siguientes pasos.

## Configurar Node-RED

**Paso 1.** Descargar Paletas de IoT de Azure

Haz clic en la barra de menú superior derecha y selecciona Configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Busca e instala **node-red-contrib-azure-iot-central** en **Paletas -> Instalar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/12.png" /></div>

**Paso 2.** Configurar el nodo de Azure Iot Central

Arrastra el nodo de Azure Iot Central desde la barra de funciones de la izquierda, haz doble clic en él para entrar a la página de configuración, luego haz clic en el botón editar para editar el nodo de Azure Iot Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/14.png" /></div>

La configuración debe completarse de la siguiente manera:

- Transporte: MQTT
- Autenticación: SAS
- ID de Ámbito
- ID de Dispositivo
- Clave Primaria

Los últimos tres son exactamente los que obtenemos en **Configurar Microsoft Azure IoT Central**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/15.png" /></div>

**Paso 3.** Configurar el nodo de función

El reporte de datos a Azure Iot Central necesita seguir un formato de datos específico, por lo que es necesario agregar un nodo de función para procesar el formato de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/16.png" /></div>

Arrastra el nodo de función desde la barra de funciones de la izquierda, haz doble clic en él para entrar a la página de edición, luego copia el código a On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if(length>=2){
        var measurementId = strs[length-1]
        var body = {}
        var value = payload.value
        if(measurementId==4100){
            body.co2 = value
        }else if(measurementId==4103){
            body.soilmoisture= value
        }else if(measurementId==4150){
            body.accelX= value
        }else if(measurementId==4151){
            body.accelY = value
        }else if(measurementId==4152){
            body.accelZ = value
        }else if(measurementId==4192){
            body.soundintensity = value
        }else if(measurementId==4193){
            body.lightIntensity = value
        }else if(measurementId==4195){
            body.tvoc = value
        }else if(measurementId==4097){
            body.airtemperature = value
        }else if(measurementId==4098){
            body.airhumidity = value
        }else if(measurementId==4175){
            body.AIdetection_1 = value
        }else if(measurementId==4176){
            body.AIdetection_2 = value
        }else if(measurementId==4177){
            body.AIdetection_3 = value
        }else if(measurementId==4178){
            body.AIdetection_4 = value
        }else if(measurementId==4179){
            body.AIdetection_5 = value
        }else if(measurementId==4180){
            body.AIdetection_6 = value
        }else if(measurementId==4181){
            body.AIdetection_7 = value
        }else if(measurementId==4182){
            body.AIdetection_8 = value
        }else if(measurementId==4183){
            body.AIdetection_9 = value
        }else if(measurementId==4184){
            body.AIdetection_10 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

Luego conectamos todos los nodos y hacemos clic en el botón **Deploy** y si todo está configurado correctamente podrás ver el nodo mqtt in mostrando conectado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/18.png" /></div>

Si quieres ver la información de registro de los datos, puedes agregar un nodo debug después del nodo function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/19.png" /></div>

Una vez que el Wio Terminal comience a encenderse y funcionar y comience a enviar datos al servidor SenseCAP PaaS, entonces podemos verificar los datos en Azure IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/21.png" /></div>

## Presentación de Datos

Sin embargo, como no hemos establecido el tipo del sensor, los datos visibles en la columna **Raw data** se colocan en **Unmodeled data**, por lo que necesitamos analizar los datos según el código anterior.

Necesitamos cambiar el estilo de plantilla mostrado en la **template**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

Una vez que hayas hecho tus cambios, por favor simplemente haz clic en **Save** y luego haz clic en **Publish**. Todos los cambios en la **Device template** necesitarán ser guardados y publicados siguiendo este procedimiento antes de que surtan efecto.

:::tip
Por favor completa el **Display name** aquí según el nombre del código JavaScript proporcionado anteriormente.
:::
Por supuesto, si quieres enriquecer tu página de panel de datos, también puedes configurarlo para que se muestre en Overview.

Haz clic en **Overview** en el menú de navegación izquierdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

Despliega el menú desplegable **select a telemetry** y selecciona la telemetría que quieres visualizar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

Haz clic en **Add tile** y verás el mosaico agregado al Panel de Azure IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/23.png" /></div>

**Nota:** Puedes redimensionar o cambiar la visualización de los mosaicos según tu preferencia

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/24.png" /></div>

¡Así que a continuación, personaliza tu panel de monitoreo de datos del sensor a tu gusto!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/25.png" /></div>

## Solución de Problemas

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
