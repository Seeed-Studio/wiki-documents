---
description: Plataforma IoT AWS Integrada
title: Plataforma IoT AWS Integrada
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connect_AWS_via_helium
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Conectar AWS IOT Core a través de Helium

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/AWS_IOT_Monitor.png" /></div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

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

## Introducción a AWS IoT Core

AWS IoT Core proporciona los servicios en la nube que conectan tus dispositivos IoT a otros dispositivos y servicios en la nube de AWS. AWS IoT proporciona software de dispositivos que puede ayudarte a integrar tus dispositivos IoT en soluciones basadas en AWS IoT. Si tus dispositivos pueden conectarse a AWS IoT, AWS IoT puede conectarlos a los servicios en la nube que AWS proporciona.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/what-is-aws-iot.png" /></div>

AWS IoT te permite seleccionar las tecnologías más apropiadas y actualizadas para tu solución. Para ayudarte a gestionar y dar soporte a tus dispositivos IoT en el campo, AWS IoT Core soporta estos protocolos:

- MQTT (Message Queuing and Telemetry Transport)
- MQTT over WSS (Websockets Secure)
- HTTPS (Hypertext Transfer Protocol - Secure)
- LoRaWAN® (Long Range Wide Area Network)

AWS IoT Core es una oferta poderosa que permite a los desarrolladores construir aplicaciones y servicios basados en dispositivos en la Nube de AWS. Y esta Integración a través de Helium Console automatiza la complejidad de conectar de forma segura tus dispositivos a AWS IoT Core.

:::note
Es posible que necesites pagar por AWS IoT Core para experimentar el contenido completo de este tutorial. Una lista detallada de pagos y costos que puedes aproximar [aquí](https://calculator.aws/#/estimate).

Basado en la frecuencia de envío del código que hemos proporcionado (enviando datos a intervalos de aproximadamente 15 segundos), se enviarán aproximadamente 178,560 mensajes en un mes, con un tamaño de mensaje de aproximadamente 3 a 4 KB y un costo mensual de 0.18 USD.
<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/K1100/66.png"/></div>
:::

## Registrarse en AWS IoT Core

Por favor ve al [sitio web de AWS IoT Core](https://portal.aws.amazon.com/billing/signup#/start/email) y registra una cuenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/45.png" /></div>

Completa un email con tu dirección de correo electrónico registrada y un nombre de usuario y recibirás un email de AWS con el código de verificación de seis dígitos requerido para registrarte.

Ingresa tu código de verificación y el registro está completo. Inicia sesión en AWS IoT Core con la dirección de correo electrónico que acabas de completar.

Después de iniciar sesión, necesitarás continuar completando información personal como contraseñas y contactos. Luego se te requerirá vincular una tarjeta de crédito para verificar tu información personal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/46.png" /></div>

Cuando iniciamos sesión en la consola de AWS IoT Core, simplemente seleccionamos el **Root user** para iniciar sesión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/48.png" /></div>

## Crear acceso a AWS IoT Core

Crea un nuevo usuario con permisos limitados que esta Integración usará en AWS.

1. Abre la [Consola de AWS](https://console.aws.amazon.com/).

2. Haz clic en el menú Services en la parte superior izquierda, ve a **Security, Identity, & Compliance**, luego haz clic en **IAM**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/47.png" /></div>

Ahora vamos a crear un nuevo **User**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/49.png" /></div>

Establece el nombre de usuario y selecciona solo **Acess key - Programmatic access**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/50.png" /></div>

En la siguiente página, selecciona **Attach existing policies directly** y escribe **AWSIoTConfigAccess** en la caja **Filter Policies** y marca la casilla a la izquierda de la fila.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/55.png" /></div>

Para otras páginas dejamos el valor predeterminado o lo dejamos vacío y simplemente seguimos haciendo clic en **Next** en la esquina inferior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/51.png" /></div>

Ahora adjuntamos una política al usuario recién creado que define qué permisos tienen.
  
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/52.png" /></div>

:::note

¡Asegúrate de registrar y almacenar estas claves de forma segura, ya que no tendrás otra oportunidad de acceder a ellas nuevamente!
:::
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/56.png" /></div>

## Agregar integración de AWS IoT Core en Helium

Podemos volver a la [consola de Helium](https://console.helium.com/integrations) y crear la integración de AWS IoT Core a Helium.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/43.png" /></div>

Haz clic en **Add Integration** en la nueva página.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/44.png" /></div>

Completa la integración de Helium AWS IoT Core con la Access Key y Secret Key respectivamente, que se generaron en el contenido de **Crear acceso a AWS IoT Core**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/57.png" /></div>

En Region, necesitas completar el mismo código de región que la dirección donde se encuentra el servidor de AWS IoT Core. Esto está en la esquina superior derecha de la consola de AWS IoT Core junto al nombre de usuario.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100/61.png" /></div>

El área resaltada puede ser ajustada por el usuario. Aquí, por ejemplo, he seleccionado la región donde se encuentra el servidor como **US East (N. Virginia)** y el código de región como **us-east-1**. Correspondientemente, en la Region de Helium necesito completar **us-east-1**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/62.png" /></div>

El campo Topic es el tema MQTT de AWS IoT al que esta integración publicará mensajes de enlace ascendente, desde dispositivos.

Finalmente, le damos un nombre a nuestra nueva Integration y hacemos clic en Create Integration. Tu nueva Integration ahora está lista para usar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/58.png" /></div>

## Conectar Integraciones a Dispositivos

Ahora, usa la interfaz de hacer clic y arrastrar en la Consola de Helium para conectar el dispositivo a la función (Decoder) a AWS IoT Core como se muestra [anteriormente](https://wiki.seeedstudio.com/es/Helium-Introduction/#helium-console-flows).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/59.png" /></div>

En este punto, sigue los [pasos anteriores](https://wiki.seeedstudio.com/es/Connecting-to-Helium/#upload-code-send-data-to-helium) para subir el código nuevamente, y Wio Terminal se reconectará a Helium y subirá los datos.

También podemos averiguar sobre el éxito del envío de datos verificando los datos devueltos por el monitor serie.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

En la consola de AWS IoT Core, busca **IoT Core** para acceder a la interfaz de gestión de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/60.png" /></div>

- En el panel **Monitor** puedes ver y configurar varios paneles de detección de datos para ver de manera más visual cómo se están recibiendo los datos del sensor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_1.png" /></div>

- En **AWS IOT core -> All devices -> Things** puedes ver la información de ID del dispositivo actual y también el estado de actividad de los datos en **AWS IOT core -> All devices -> Things -> Activity**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/63.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Connect_AWS_via_Helium/Final_4.png" /></div>

- Los mensajes de enlace ascendente para los datos puedes verlos en **AWS IOT core -> MQTT test client**.

En la pestaña **Subscribe to a topic**, ingresa el topicName para suscribirte al tema en el que tu dispositivo publica. Para la aplicación de muestra de introducción, suscríbete a **#**, que se suscribe a todos los temas de mensajes.

Se abre la página de registro de mensajes del tema, **#** y **#** aparece en la lista de **Subscriptions**. Si el dispositivo que configuraste en Configure your device está ejecutando el programa de ejemplo, deberías ver los mensajes que envía a AWS IoT en el registro de mensajes **#**. Las entradas del registro de mensajes aparecerán debajo de la sección Publish cuando AWS IoT reciba mensajes con el tema suscrito.

Los mensajes publicados a temas suscritos aparecen en el registro de mensajes a medida que se reciben, con el mensaje más reciente primero.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/64.png" /></div>

El mensaje recibido es similar al que se muestra a continuación. Los datos que nos son útiles generalmente son el contenido que sigue al **payload**, que muestra los valores de los sensores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/65.png" /></div>

En este punto, hemos completado la totalidad de la integración de Helium en AWS IoT Core. Si quieres hacer más con tus datos a través de AWS IoT Core, puedes consultar el [Centro de Documentación de AWS IoT Core](https://docs.aws.amazon.com/iot/index.html) para continuar aprendiendo más en profundidad.

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
