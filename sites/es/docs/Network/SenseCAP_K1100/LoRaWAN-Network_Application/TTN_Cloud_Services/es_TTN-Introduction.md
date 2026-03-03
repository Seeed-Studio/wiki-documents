---
description: Introducción a TTN
title: Introducción a TTN
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/TTN-Introduction
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Introducción a TTN

En este capítulo, presentaremos los controles de la consola TTN que utilizamos para obtener una primera impresión de la consola TTN.

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

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

## Usando TTN por primera vez

Si esta es tu primera vez usando TTN, por favor consulta esta sección para completar el registro de tu cuenta de TTN y el uso de los componentes.

### Registrarse para una cuenta de TTN

Ingresa al [sitio web de TTN](https://console.cloud.thethings.network//), haz clic en **Sign up**. Selecciona el plan y la consola que prefieras. Aquí, te recomendamos encarecidamente que elijas **Community** para completar nuestro proyecto, ya que será gratuito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/3.png" /></div>

:::note
Desde enero de 2021, The Things Network ejecuta The Things Stack Community Edition, un despliegue gratuito y basado en la comunidad de The Things Stack.

Esta es una actualización de la anterior The Things Network V2, que viene con un conjunto de características completamente nuevas, integraciones listas para usar, cobertura extendida y experiencia de usuario mejorada.

The Things Stack Community Edition ofrece una forma gratuita y amigable para desarrolladores de familiarizarse con la tecnología LoRaWAN®. Proporciona una red LoRaWAN® comunitaria pública, iniciada por The Things Industries, y respaldada por más de 100k miembros de la comunidad The Things Network de más de 100 países alrededor del mundo.
:::
En la siguiente página, se te pedirá que selecciones tu país y región, por favor elige de acuerdo a tu elección real.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/25.png" /></div>

Después del registro de la cuenta, ingresarás a la página de la consola, las opciones disponibles son **Application** y **Gateway**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/TTN-V3-console.png" /></div>

### Aplicación TTN - Agregar Dispositivo

Para recibir uplinks y enviar downlinks a tu dispositivo final, primero necesitas agregar tu dispositivo en The Things Stack Community Edition.

Los dispositivos se agregan dentro de [aplicaciones](https://www.thethingsnetwork.org/docs/applications-and-integrations/). Las aplicaciones son útiles para agrupar dispositivos por propósito o ubicación, por ejemplo.

Si usas la Consola, puedes agregar un dispositivo manualmente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/19.png" /></div>

En la nueva página, se te pedirá que llenes información como ID de aplicación, nombre de aplicación y descripción. Solo llena la información que sea conveniente para ti.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/21.png" /></div>

Para crear un dispositivo, primero abre la aplicación en la que deseas agregar el dispositivo. Ve a **End devices** en el menú izquierdo y haz clic en **+ Add end device** para llegar a la página de registro del dispositivo final.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/23.png" /></div>

Nuestros dispositivos están contenidos en el repositorio de dispositivos LoRaWAN®, ¡lo que significa menos información para que busques!

Para usar el repositorio de dispositivos, asegúrate de que la pestaña **From the LoRaWAN Device Repository** esté seleccionada. Luego, selecciona la **Brand**, **Model**, **Hardware Version**, **Software Version** y **Region** para tu dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/29.png" /></div>

:::note
 Elige un plan de frecuencia apropiado para tu región. Tu dispositivo y gateway deben usar el mismo plan de frecuencia para comunicarse. Diferentes regiones del mundo usan diferentes [planes de frecuencia](https://www.thethingsindustries.com/docs/reference/frequency-plans/), por ejemplo, 863-870 MHz para Europa, 902-928 MHz para América del Norte, etc.
:::
Ingresa tu **DevEUI**, **AppEUI** y **AppKey**. Grove - Wio-E5 es programable, puedes generar un EUI usando el botón Generate, y programarlo en tu dispositivo.

Dale a tu dispositivo un **End device ID** único. Consulta [restricciones de ID y EUI](https://www.thethingsindustries.com/docs/reference/id-eui-constraints/) para pautas sobre cómo elegir un ID único.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/30.png" /></div>

Haz clic en **Register end device** para crear el dispositivo final.

El dispositivo ahora está activado, y aparecerá como conectado en The Things Stack una vez que envíe un uplink.

- Instrucciones más detalladas para agregar dispositivos están disponibles en la [página oficial de documentación de The Things Stack](https://www.thethingsindustries.com/docs/devices/).
- Consulta [Conectando a TTN](https://wiki.seeedstudio.com/es/Connecting-to-TTN/) para saber cómo agregar el kit K1100 al TTN.

### Aplicación TTN - Integraciones

Dentro de tu aplicación, también puedes crear integraciones para ayudarte con el procesamiento de datos y actuar sobre ellos activando eventos. De esta manera, puedes implementar una solución, por ejemplo, para monitorear o visualizar los datos de tu sensor usando alguna plataforma IoT en la nube, para programar comandos que se envíen a tu dispositivo final, etc.

The Things Stack Community Edition ofrece una serie de integraciones:

- [MQTT](https://www.thethingsindustries.com/docs/integrations/mqtt/) - The Things Stack Community Edition expone un Servidor MQTT, por lo que puedes usar clientes MQTT para suscribirte a mensajes uplink provenientes de tu dispositivo, o para publicar mensajes downlink que se envíen a tu dispositivo.
- [Webhooks](https://www.thethingsindustries.com/docs/integrations/webhooks/) - La característica de HTTP Webhooks permite enviar mensajes relacionados con la aplicación a endpoints HTTP(S) específicos. Incluso puedes contribuir a nuestro repositorio de código abierto de plantillas de Webhook si quieres agregar una nueva plantilla de integración de Webhook por ti mismo.
- [Integración de Almacenamiento](https://www.thethingsindustries.com/docs/integrations/storage) - La Integración de Almacenamiento te permite almacenar mensajes upstream en una base de datos persistente, para que puedas recuperarlos en un momento posterior.
[AWS IoT](https://www.thethingsindustries.com/docs/integrations/aws-iot/) - The Things Stack Community Edition te permite integrarte con AWS IoT y publicar telemetría de aplicación al endpoint de IoT Core. <!-- - AWS IoT链接404-->
- [LoRa Cloud](https://www.thethingsindustries.com/docs/reference/application-packages/lora-cloud-device-and-application-services/) - La integración de LoRa® Cloud aprovecha el protocolo Device & Application Services para permitirte gestionar funcionalidades comunes en la capa de aplicación y geolocalización para dispositivos basados en módem.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/26.png" /></div>

- Consulta la página oficial de documentación de The Things Stack para más [guías de integración paso a paso](https://www.thethingsindustries.com/docs/integrations/).

### Gateway de TTN

Los componentes principales de la red LoRaWAN® comunitaria pública son los gateways. Miles de gateways en todo el mundo ya están conectados a The Things Stack Community Edition, haciendo que la red LoRaWAN® comunitaria esté disponible para uso gratuito.

Para conectar tu gateway a The Things Stack Community Edition, debe configurarse para reenviar correctamente el tráfico hacia él, y también debe agregarse/registrarse en The Things Stack Community Edition.

Se recomienda usar el [protocolo LoRa Basics Station](https://www.thethingsindustries.com/docs/gateways/lora-basics-station/), debido a una serie de problemas de seguridad y escalabilidad relacionados con el [UDP Packet Forwarder](https://www.thethingsindustries.com/docs/gateways/semtech-udp-packet-forwarder/).<!-- - UDP Packet Forwarder链接404-->

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/18.png" /></div>

El despliegue de The Things Stack es capaz de conectarse a [Packet Broker](https://www.thethingsindustries.com/docs/getting-started/packet-broker/), puedes aprovechar la cobertura de The Things Network sin agregar ningún gateway propio. Consulta [Agregar Gateways](https://www.thethingsindustries.com/docs/gateways/adding-gateways/) para instrucciones sobre cómo agregar gateways y para averiguar si tu ubicación tiene gateways cercanos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/overview.png" /></div>

Aunque es posible que ya tengas [cobertura](https://www.thethingsnetwork.org/map) en tu área, aún recomendamos que obtengas un gateway para asegurar una cobertura confiable. Hay muchos gateways con características extensas en el mercado, así que asegúrate de elegir el que mejor se adapte a tus necesidades.

- Si experimentas problemas al agregar gateways a The Things Stack Community Edition, consulta [Solución de problemas](https://www.thethingsindustries.com/docs/gateways/adding-gateways/troubleshooting/).

Para más información sobre el uso y configuración del gateway con TTN, por favor lee las instrucciones del gateway u obtén ayuda del proveedor de quien compraste el gateway.

:::note
Diferentes regiones del mundo usan diferentes [planes de frecuencia](https://www.thethingsindustries.com/docs/reference/frequency-plans/), por ejemplo 863-870 MHz para Europa, 902-928 MHz para América del Norte, etc. ¡Asegúrate de verificar dos veces que el hardware se alinee con la frecuencia de radio de tu región antes de comprar!
:::

Por favor continúa con el siguiente paso del tutorial [Conectando a TTN](https://wiki.seeedstudio.com/es/Connecting-to-TTN/).

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando a TTN</strong><br /><br />Esta sección describe cómo configurar TTN para que los datos del sensor puedan cargarse exitosamente y mostrarse en TTN.<br /><br /><a href="https://wiki.seeedstudio.com/es/Connecting-to-TTN">Comencemos &gt;</a></td>
    </tr></tbody></table>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaración

- La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.
- LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
