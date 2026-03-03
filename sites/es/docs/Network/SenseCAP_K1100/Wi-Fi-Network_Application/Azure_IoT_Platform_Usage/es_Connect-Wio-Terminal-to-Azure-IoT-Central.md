---
description: Primeros pasos con Microsoft Azure IoT Central
title: Primeros pasos con Microsoft Azure IoT Central
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connect-Wio-Terminal-to-Azure-IoT-Central
last_update:
  date: 1/12/2023
  author: shuxu hu
---
# Conectar Wio Terminal a Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Introducción

En este tutorial, te guiaremos a través del proceso de conectar el Wio Terminal a Microsoft Azure IoT Central y enviar datos de telemetría desde los sensores/hardware integrados en el Wio Terminal, como el acelerómetro de 3 ejes, sensor de luz, 3 botones a Microsoft Azure IoT Central. Luego podrás visualizar los datos del sensor en paneles interactivos. También podrás usar Azure IoT Central para controlar hardware como hacer sonar el zumbador integrado en el Wio Terminal. Microsoft Azure IoT Central soporta protocolos HTTP, MQTT y AMQP para comunicación, pero utilizaremos el protocolo MQTT en este tutorial.

### ¿Qué es Microsoft Azure?

[Microsoft Azure](https://azure.microsoft.com) es la plataforma de computación en la nube pública de Microsoft. Puedes usar Microsoft Azure para construir, probar, desplegar y gestionar aplicaciones y servicios a través de centros de datos gestionados por Microsoft.

También proporciona una gama de servicios en la nube, incluyendo computación, análisis, almacenamiento y redes. Microsoft Azure proporciona software como servicio (SaaS), plataforma como servicio (PaaS), infraestructura como servicio (IaaS) y sin servidor. Finalmente, soporta muchos lenguajes de programación, herramientas y marcos de trabajo diferentes.

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

Los dispositivos certificados IoT Plug and Play eliminan la molestia de configurar dispositivos en Azure IoT Central, como crear plantillas y añadir características e interfaces.

### Dispositivos Certificados IoT Plug and Play

Los Dispositivos Certificados IoT Plug and Play son dispositivos listados en el [Catálogo de Dispositivos Certificados Azure](https://devicecatalog.azure.com) con la insignia IoT Plug and Play.

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

**Paso 1.** Inicia sesión en Azure IoT Central.

Por favor ve al sitio web oficial de [Azure IoT Central](https://apps.azureiotcentral.com/home), haz clic en **Build** desde el menú de navegación de la izquierda, y haz clic en **Custom apps**.

Si aún no has iniciado sesión en Azure IoT Central, se te pedirá completar un registro/inicio de sesión en este punto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**Paso 2.** Completa el **Application name** y elige **Standard 0** bajo el **Pricing plan**. La URL de la aplicación se creará automáticamente cuando completes el nombre de la aplicación. En este ejemplo, lograremos esta tarea con el costo mínimo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
Si eres un nuevo usuario de Azure IoT Central, recomendamos que selecciones **Free** ya que esto no consumirá tus tarifas.
:::
    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**Paso 3.** Crear una plantilla de dispositivo

Por favor crea una nueva plantilla de dispositivo haciendo clic en **Device templates** en la barra de menú de la izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

Por favor selecciona **Wio Terminal** como nuestra plantilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

Luego simplemente haz clic en **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

Entonces, se crea una plantilla lista para usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**Paso 5.** Crear un dispositivo

Haz clic en **Devices -> Seeed Wio Terminal** bajo la barra de menú de la izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

Haz clic en **New**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

Haz clic en el botón **Create** para completar la creación del dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

Una vez que hayas creado el dispositivo, verás el dispositivo que acabamos de crear bajo **Device**, por favor toca el dispositivo y haz clic en el botón **Connect** en la esquina superior izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

Aquí necesitamos la información que está ahí.

```
ID scope
Device ID
Primary key
```

Por favor toma nota de esta información, que usaremos en los siguientes pasos.

### Configurar Wio Terminal

**Paso 1.** Descarga el firmware a tu computadora

Nuestro segundo lanzamiento de firmware, SenseCraft, soportará Azure IoT Central de la manera más fácil posible.

Bajo **Latest release**, haz clic en **SenseCraft-vx.x.uf2** para descargar el archivo .uf2.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Paso 2.** Sube el firmware al Wio Terminal

Conecta el Wio Terminal a la PC y enciéndelo, Entra al **Modo Bootloader** deslizando hacia abajo el interruptor de encendido más lejos de la posición "ON", suelta, desliza nuevamente y suelta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Una vez que el Wio Terminal esté en modo Bootloader, el LED azul comenzará a respirar de una manera diferente al parpadeo.
:::
Abre el Explorador de Archivos en tu PC y verás una nueva unidad externa, llamada **Arduino**, arrastra el **archivo .uf2** previamente descargado a esta **unidad Arduino**.

Ahora hemos subido exitosamente el firmware al Wio Terminal.

**Paso 3.** Configuración de Wi-Fi y Azure IoT

Cuando usamos el firmware **SenseCraft**, una memoria USB aparece tan pronto como el Wio Terminal se conecta a la computadora.

:::note
Esto significa que la memoria USB aparece cuando el Wio Terminal se conecta a la computadora, **¡sin necesidad de presionar el botón lateral dos veces adicionales**!
:::
En este punto, habrá un archivo **config.txt** dentro de la memoria USB. Por favor ábrelo con un editor de texto adecuado y añade la configuración requerida.

```
SSID=WiFi_Name                        // Put your Wifi name here
PASSWORD=WiFi_Password                // Put your wifi password here          
ID_SCOPE=Default_ID_Scope             // Put your ID Scope here
DEVICE_ID=Device_ID                   // Put your device ID here
PRIMARY_KEY=Primary_Key               // Put your device Primary key here
```

Una vez que hayas completado lo anterior, guárdalo. Reinicia Wio Terminal para que surta efecto.

### Mostrar Datos de Telemetría en Microsoft Azure IoT Central

**Paso 1.** Conectar Wio Terminal a WiFi

Ingresa a la pestaña **Network** y selecciona **WiFi**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

Ahora esperará a que se cargue la configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

Una vez que se recoja la configuración WiFi cargada, primero se conectará con la red WiFi y luego con Azure IoT Central. Si la conexión con Azure IoT Central es exitosa, mostrará lo siguiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**Paso 2.** Analizar datos de Wio Terminal

Necesitamos cambiar el estilo de plantilla mostrado en la **template**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

Para adaptar el tipo de datos de SenseCraft y lograr una presentación de datos adecuada, aquí necesitamos llenar los datos sin procesar según la tabla a continuación.

| Display name    | Name       | Capability type   | Semantic type   |
|-----------------|------------|-------------------|-----------------|
| Acceleration X  | IMU0       | Telemetry         | None            |
| Acceleration Y  | IMU1       | Telemetry         | None            |
| Acceleration Z  | IMU2       | Telemetry         | None            |
| Light           | Light      | Telemetry         | None            |
| Sound           | Sound      | Telemetry         | None            |
| Temperature     | Temp_Humi0 | Telemetry         | None            |
| Humidity        | Temp_Humi1 | Telemetry         | None            |
| CO2             | CO2_VOC0   | Telemetry         | None            |
| VOC             | CO2_VOC1   | Telemetry         | None            |
| Soil Moisture   | Soil       | Telemetry         | None            |
| Vision AI 1     | Vision0    | Telemetry         | None            |
| Vision AI 2     | Vision1    | Telemetry         | None            |
| Vision AI 3     | Vision2    | Telemetry         | None            |
| Vision AI 4     | Vision3    | Telemetry         | None            |
| Vision AI 5     | Vision4    | Telemetry         | None            |
| Vision AI 6     | Vision5    | Telemetry         | None            |
| Vision AI 7     | Vision6    | Telemetry         | None            |
| Vision AI 8     | Vision7    | Telemetry         | None            |
| Vision AI 9     | Vision8    | Telemetry         | None            |
| Vision AI 10    | Vision9    | Telemetry         | None            |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/68.png" /></div>

Una vez que hayas completado el formulario, por favor haz clic en el botón **Save**.

Haz clic en **Overview** en el menú de navegación izquierdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

Despliega el menú desplegable **select a telemetry** y selecciona la telemetría que deseas visualizar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

Haz clic en **Add tile** y verás el mosaico agregado al Panel de Control de Azure IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/71.png" /></div>

**Nota:** Puedes redimensionar o cambiar la visualización de los mosaicos según tu preferencia

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_azure_central/19.png" /></div>

Haz clic en **Save** y luego en **Publish**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/27.png" /></div>

Abre el Panel de Control de Azure IoT Central que visitaste antes. Haz clic en **Devices** desde el menú de navegación izquierdo. Verás **Seeed Wio Terminal** aparecer bajo Devices. Haz clic en él.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/14.png" /></div>

Haz clic en la entrada con el **device name** que configuraste antes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/23.png" /></div>

También puedes hacer clic en la pestaña **Raw data** para ver todos los datos de telemetría en tiempo real.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/28.png" /></div>

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
