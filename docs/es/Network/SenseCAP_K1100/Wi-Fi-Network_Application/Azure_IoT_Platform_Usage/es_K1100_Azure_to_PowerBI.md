---
description: Visualización de datos con Power BI
title: Visualización de datos con Power BI
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_Azure_to_PowerBI
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Visualización de datos IoT de Microsoft Azure con Power BI

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
        <font color="white" size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Datos</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. y Humedad del Aire</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. y Humedad del Aire y CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y Temp. del Suelo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y Temp. del Suelo y EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación Meteorológica 8 en 1</strong></a></td>
    </tr>
  </tbody></table>

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) es una colección de servicios en la nube administrados por Microsoft que conectan, monitorean y controlan miles de millones de activos IoT. Incluye seguridad y sistemas operativos para dispositivos y equipos, junto con datos y análisis que ayudan a las empresas a construir, implementar y administrar aplicaciones IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Power BI

Conecta y analiza todo tu patrimonio de datos combinando Power BI con servicios de análisis de Azure, incluyendo Azure Synapse Analytics y Azure Data Lake Storage. Analiza petabytes de datos, usa capacidades avanzadas de IA, aplica protección adicional de datos y comparte más fácilmente información en toda tu organización.

Convierte tus datos en una ventaja competitiva usando Power BI y Azure juntos para conectar, combinar y analizar todo tu patrimonio de datos.

En este tutorial, configuras tu aplicación IoT Central para exportar telemetría recopilada de los dispositivos. Luego usas Power BI para crear un panel personalizado para que el gerente de la tienda visualice las perspectivas derivadas de la telemetría.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

En este tutorial, aprendes cómo:

- Configurar una aplicación IoT Central para exportar telemetría a un centro de eventos.
- Usar Logic Apps para enviar datos desde un centro de eventos a un conjunto de datos de transmisión de Power BI.
- Crear un panel de Power BI para visualizar datos en el conjunto de datos de transmisión.

## Preparación preliminar

Para completar este tutorial, necesitas:

- Una suscripción de Azure. Si no tienes una suscripción de Azure, crea una [cuenta gratuita](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) antes de comenzar.
- Una cuenta de Power BI. Si no tienes una cuenta de Power BI, regístrate para una [prueba gratuita de Power BI Pro](https://app.powerbi.com/signupredirect?pbi_source=web) antes de comenzar.
- En cualquiera de los siguientes wikis, has subido exitosamente datos a Azure IoT Central.
  - [Conectar SenseCAP a Azure IoT Central vía Node-RED](https://wiki.seeedstudio.com/es/K1100_SenseCAP_to_Azure_IoT_Central/)
  - [Conectar Wio Terminal a Microsoft Azure IoT Central (WiFi)](https://wiki.seeedstudio.com/es/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## Crear un Grupo de Recursos

Antes de crear tu centro de eventos y aplicación lógica, necesitas crear un **grupo de recursos** para administrarlos. El grupo de recursos debe estar en la misma ubicación que tu aplicación IoT Central de análisis en tienda - checkout. Para crear un grupo de recursos:

**Paso 1.** Inicia sesión en el [portal de Azure](https://portal.azure.com/).

**Paso 2.** En la navegación izquierda, selecciona **Grupos de recursos**. Luego selecciona **Crear**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/1.png" /></div>

- Para **Suscripción**, selecciona el nombre de la suscripción de Azure que usaste para crear tu aplicación IoT Central.
- Para el nombre del **Grupo de recursos**, ingresa **retail-store-analysis**.
- Para la **Región**, selecciona la misma región que elegiste para la aplicación IoT Central.

**Paso 3.** Selecciona Revisar + Crear.

En la página Revisar + Crear, selecciona Crear.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/2.png" /></div>

Ahora tienes un grupo de recursos llamado retail-store-analysis en tu suscripción.

## Configurar un Event Hub

Antes de poder configurar la aplicación de monitoreo minorista para exportar telemetría, necesitas crear un event hub para recibir los datos exportados. Los siguientes pasos te muestran cómo crear tu event hub:

**Paso 4.** En el [portal de Azure](https://portal.azure.com/), selecciona **Crear un recurso** en la parte superior izquierda de la pantalla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

**Paso 5.** En Buscar en el Marketplace, ingresa Event Hubs, y luego presiona Enter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/4.png" /></div>

**Paso 6.** Crear un event hub

En la página de Event Hubs, selecciona Crear. En la página Crear Namespace, sigue estos pasos:

- Selecciona la misma **Suscripción** que usaste para crear tu aplicación de IoT Central.
- Selecciona el grupo de recursos **retail-store-analysis**.
- Ingresa un nombre único para el namespace como **k1100-retail-store-analysis**.
- Selecciona la misma ubicación que usaste para tu aplicación de IoT Central.
- Elige el nivel de precios Basic.

Selecciona **Revisar + crear**. Es posible que tengas que esperar unos minutos para que el sistema aprovisione los recursos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/5.png" /></div>

**Paso 7.** Obtener una clave compartida de Event Hubs.

En el [portal de Azure](https://portal.azure.com/), navega al grupo de recursos **retail-store-analysis**.

Espera a que se complete la implementación. Es posible que necesites seleccionar Actualizar para actualizar el estado de la implementación. También puedes verificar el estado de la creación del namespace del event hub en las Notificaciones.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/6.png" /></div>

En el grupo de recursos **retail-store-analysis**, selecciona el **Event Hubs Namespace**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/7.png" /></div>

Verás la página de inicio de tu Event Hubs Namespace en el portal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/8.png" /></div>

Necesitas una **cadena de conexión** con permisos de envío para conectarte desde IoT Central. Para crear una cadena de conexión:

- En tu namespace de Event Hubs en el portal de Azure, selecciona **Políticas de acceso compartido**. Selecciona **+ Agregar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/9.png" /></div>

- Ingresa **SendPolicy** como el nombre de la política, selecciona **Enviar**, y luego selecciona Crear.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/10.png" /></div>

- Selecciona **SendPolicy** en la lista de políticas. Toma nota del valor de **Cadena de conexión-clave principal**. La usarás cuando configures el destino de exportación en IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/11.png" /></div>

**Paso 8.** Obtener una clave de administración y escucha de Event Hubs.

Necesitas una cadena de conexión con permisos de administración y escucha para conectarte al event hub desde tu aplicación lógica. Para recuperar una cadena de conexión:

- En tu namespace de Event Hubs en el portal de Azure, selecciona Políticas de acceso compartido.

- Selecciona **RootManageSharedAccessKey** en la lista de políticas.
Toma nota del valor de **Cadena de conexión-clave principal**. La usarás cuando configures la aplicación lógica para obtener telemetría de tu event hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/12.png" /></div>

**Paso 8.** Crear un event hub para usar.

Ahora que tienes un Event Hubs Namespace, puedes crear un event hub para usar con tu aplicación de IoT Central:

- En la página de inicio de tu Event Hubs Namespace en el portal, selecciona **+ Event Hub**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/13.png" /></div>

- En la página Crear Event Hub, ingresa **store-telemetry** como el nombre, y luego selecciona **Crear**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/14.png" /></div>

Ahora tienes un event hub que puedes usar cuando configures la exportación de datos desde tu aplicación de IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/15.png" /></div>

## Configurar exportación de datos

Ahora que tienes un centro de eventos, puedes configurar tu Aplicación IoT Central para exportar telemetría desde los dispositivos conectados. Los siguientes pasos te muestran cómo configurar la exportación.

**Paso 1.** Inicia sesión en tu [Aplicación IoT Central](https://apps.azureiotcentral.com/home).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/16.png" /></div>

**Paso 2.** Exportación de datos

Selecciona **Exportación de datos** en el panel izquierdo. Selecciona **+ Nueva exportación**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/18.png" /></div>

- Ingresa **Exportación de telemetría** como el nombre de la exportación.
- Selecciona **Telemetría** como tipo de datos a exportar.
- En la sección Destinos, selecciona **crear uno nuevo**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/19.png" /></div>

- Nuevo destino
  - Ingresa **Centro de eventos de almacenamiento de datos** como el **Nombre del destino**.
  - Selecciona **Azure Event Hubs** como el **Tipo de destino**.
  - Selecciona **Cadena de conexión** como la **Autorización**.
  - Pega la cadena de conexión para la **SendPolicy** que guardaste cuando creaste el centro de eventos.
  - Ingresa store-telemetry como el Event Hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/20.png" /></div>

Selecciona **Crear** y luego **Guardar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/21.png" /></div>

En la página de exportación de telemetría, espera a que el estado de exportación cambie a Saludable.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/22.png" /></div>

La exportación de datos puede tomar unos minutos para comenzar a enviar telemetría a tu centro de eventos. Puedes ver el estado de la exportación en la página de Exportaciones de datos.

## Crear los conjuntos de datos de Power BI

Tu panel de Power BI mostrará datos de tu aplicación de monitoreo minorista. En esta solución, usas conjuntos de datos de transmisión de Power BI como la fuente de datos para el panel de Power BI. En esta sección, defines el esquema de los conjuntos de datos de transmisión para que la aplicación lógica pueda reenviar datos desde el centro de eventos. Los siguientes pasos te muestran cómo crear dos conjuntos de datos de transmisión para los sensores ambientales y un conjunto de datos de transmisión para el sensor de ocupación:

**Paso 1.** Inicia sesión en tu [cuenta de Power BI](https://app.powerbi.com/).

**Paso 2.** Crear un espacio de trabajo.

Selecciona **Espacios de trabajo**, y luego selecciona **Crear un espacio de trabajo**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

En la página Crear un espacio de trabajo, ingresa **Análisis en tienda - checkout** como el Nombre del espacio de trabajo. Selecciona **Guardar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**Paso 3.** Crear un conjunto de datos de transmisión.

En la página del espacio de trabajo, selecciona **+ Nuevo** > **Conjunto de datos de transmisión**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

En la página Nuevo conjunto de datos de transmisión, elige API, y luego selecciona Siguiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

Ingresa **Sensor** como el nombre del conjunto de datos.

Ingresa los tres Valores de transmisión en la siguiente tabla:

| Nombre del valor          | Tipo de valor                |
|---------------------------|------------------------------|
| Timestamp                 | DataTime                     |
| Light                     | Number                       |
| Acceleration X            | Number                       |
| Acceleration Y            | Number                       |
| Acceleration Z            | Number                       |
| Sound                     | Number                       |

Ahora tienes un conjunto de datos de transmisión. La aplicación lógica enrutará la telemetría desde el Wio Terminal conectado a tu aplicación de análisis en tienda - checkout al conjunto de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/27.png" /></div>

## Crear una aplicación lógica

En esta solución, la aplicación lógica lee la telemetría desde el centro de eventos, analiza los datos y luego los envía a los conjuntos de datos de transmisión de Power BI que creaste.

Antes de crear la aplicación lógica, necesitas el ID del dispositivo del Wio Terminal que conectaste a tu aplicación de IoT Central.

**Paso 1.** Anota el ID del dispositivo.

- Inicia sesión en tu [aplicación de IoT Central](https://apps.azureiotcentral.com/myapps). Selecciona **Devices** en el panel izquierdo. Luego selecciona **Seeed Wio Terminal**.

Anota el **Device ID**. En la siguiente captura de pantalla, el ID es **k1100**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/28.png" /></div>

**Paso 2.** Crear la aplicación lógica

- Inicia sesión en el [portal de Azure](https://portal.azure.com/) y selecciona **Create a resource** en la parte superior izquierda de la pantalla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

- En Search the Marketplace, ingresa **Logic App** y luego presiona Enter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/29.png" /></div>

En la página de creación de Logic App:

- Selecciona la misma **Subscription** que usaste para crear tu aplicación de IoT Central.
- Selecciona el grupo de recursos **retail-store-analysis**.
- Ingresa un nombre único para tu aplicación lógica como **tunombre-retail-store-analysis**.
- Selecciona la misma ubicación que usaste para tu aplicación de IoT Central.
- Selecciona el Type como **Consumption**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/30.png" /></div>

Selecciona Create. Es posible que tengas que esperar unos minutos para que el sistema aprovisione los recursos.

**Paso 2.** Configurar Logic Apps Designer

En el portal de Azure, navega a tu nueva aplicación lógica. En la página de Logic Apps Designer, desplázate hacia abajo y selecciona **Blank Logic App**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/31.png" /></div>

- En **Search connectors and triggers**, ingresa **Event Hubs**.
- En **Triggers**, selecciona **When events are available in Event Hub**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/32.png" /></div>

- Ingresa **Store telemetry** como el **Connection name**.
- Selecciona **Access key** como el **Authentication Type**.
- Pega la cadena de conexión del centro de eventos para la política **RootManageSharedAccessKey** que anotaste anteriormente, y selecciona **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/33.png" /></div>

En la acción When events are available in Event Hub:

- En **Event Hub name**, selecciona **store-telemetry**.
- En **Content type**, selecciona **application/json**.
- Establece el Interval en tres y la Frequency en seconds
- Selecciona Save para guardar tu aplicación lógica.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/34.png" /></div>

Para añadir la lógica a tu diseño de aplicación lógica, selecciona **Code view**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/35.png" /></div>

Reemplaza `"actions: {},"` con el siguiente JSON. Luego reemplaza el marcador de posición `[YOUR RUUVITAG DEVICE ID]` con el ID de tu Wio Terminal.

```JSON
"actions": {
            "Initialize_Device_ID_variable": {
                "inputs": {
                    "variables": [
                        {
                            "name": "DeviceID",
                            "type": "String"
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
            },
            "Parse_Telemetry": {
                "inputs": {
                    "content": "@triggerBody()?['ContentData']",
                    "schema": {
                        "properties": {
                            "deviceId": {
                                "type": "string"
                            },
                            "enqueuedTime": {
                                "type": "string"
                            },
                            "telemetry": {
                                "properties": {
                                    "accelX": {
                                        "type": "number"
                                    },
                                    "accelY": {
                                        "type": "number"
                                    },
                                    "accelZ": {
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "templateId": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    }
                },
                "runAfter": {
                    "Initialize_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "ParseJson"
            },
            "Set_Device_ID_variable": {
                "inputs": {
                    "name": "DeviceID",
                    "value": "@body('Parse_Telemetry')?['deviceId']"
                },
                "runAfter": {
                    "Parse_Telemetry": [
                        "Succeeded"
                    ]
                },
                "type": "SetVariable"
            },
            "Switch_by_DeviceID": {
                "cases": {
                    "Occupancy": {
                        "actions": {},
                        "case": "Occupancy"
                    },
                    "Sensor_environment": {
                        "actions": {},
                        "case": "k1100"
                    }
                },
                "default": {
                    "actions": {}
                },
                "expression": "@variables('DeviceID')",
                "runAfter": {
                    "Set_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "Switch"
            }
        },
```

Selecciona **Guardar** y luego selecciona **Diseñador** para ver la versión visual de la lógica que agregaste.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/36.png" /></div>

Selecciona **Cambiar por DeviceID** para expandir la acción. Luego selecciona **Entorno del sensor** y selecciona **Agregar una acción**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/37.png" /></div>

En **Buscar conectores y acciones**, ingresa **Agregar filas a un conjunto de datos**. Selecciona la acción **Power BI Agregar filas a un conjunto de datos**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/38.png" /></div>

Selecciona **Iniciar sesión** y sigue las indicaciones para iniciar sesión en tu cuenta de Power BI. Después de que se complete el proceso de inicio de sesión, en la acción Agregar filas a un conjunto de datos:

- Selecciona **In-store analytics - checkout** como el **Espacio de trabajo**.
- Selecciona **Sensor** como el **Conjunto de datos**.
- Selecciona **RealTimeData** como la **Tabla**.
- Selecciona **Agregar nuevo parámetro** y luego selecciona los campos **Timestamp**, **Light**, **Acceleration X**, **Acceleration Y**, **Acceleration Z** y **Sound**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/40.png" /></div>

- Selecciona el campo **Timestamp** y luego selecciona **enqueuedTime** de la lista de contenido dinámico.
- Selecciona el campo **Light** y luego selecciona **Ver más** junto a Parse Telemetry. Luego selecciona Light.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/41.png" /></div>

- Selecciona el campo **Acceleration X** y luego selecciona **Ver más** junto a Parse Telemetry. Luego selecciona accelX.
- Selecciona el campo **Acceleration Y** y luego selecciona **Ver más** junto a Parse Telemetry. Luego selecciona accelY.
- Selecciona el campo **Acceleration Z** y luego selecciona **Ver más** junto a Parse Telemetry. Luego selecciona accelZ.
- Selecciona el campo **Sound** y luego selecciona **Ver más** junto a Parse Telemetry. Luego selecciona Sound.

Selecciona **Guardar** para guardar tus cambios. La acción Entorno del sensor se ve como la siguiente captura de pantalla.

Selecciona la acción Zone 2 environment y selecciona Agregar una acción.

En Buscar conectores y acciones, ingresa Agregar filas a un conjunto de datos.

La aplicación lógica se ejecuta automáticamente. Para ver el estado de cada ejecución, navega a la página Información general de la aplicación lógica en el portal de Azure y selecciona Historial de ejecuciones. Selecciona Actualizar para actualizar la lista de ejecuciones.

## Crear un panel de Power BI

Ahora tienes telemetría fluyendo desde tu aplicación IoT Central a través de tu centro de eventos. Luego tu aplicación lógica analiza los mensajes del centro de eventos y los agrega a un conjunto de datos de transmisión de Power BI. Ahora puedes crear un panel de Power BI para visualizar la telemetría:

**Paso 1.** Inicia sesión en tu [cuenta de Power BI](https://app.powerbi.com/).

**Paso 2.** Selecciona **Espacios de trabajo** > **In-store analytics - checkout**.

**Paso 3.** Selecciona **+ Nuevo** > **Panel**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

Ingresa **Store analytics** como el nombre del panel y selecciona **Crear**.

### Agregar gráficos de líneas

Agrega mosaicos de gráfico de líneas para mostrar el Tri-eje de los sensores integrados del Wio Terminal. Usa la información de la siguiente tabla para crear los mosaicos. Para agregar cada mosaico, comienza seleccionando **Editar** > **Agregar un mosaico**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

Selecciona **Datos de transmisión personalizados** y luego selecciona **Siguiente**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

Configura la coordenada horizontal para mostrar la marca de tiempo y la coordenada vertical para mostrar los valores de datos en los ejes X, Y y Z.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/53.png" /></div>

Cuando el flujo de datos comience a transferirse, podrás ver el panel como un gráfico de líneas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/55.png" /></div>

<!--### Add cards to show environmental data

### Add tiles to show checkout occupancy data-->

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
