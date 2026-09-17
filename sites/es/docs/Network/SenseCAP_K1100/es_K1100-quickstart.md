---
description: Inicio rápido y sin código con SenseCraft
title: Inicio rápido y sin código con SenseCraft
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-quickstart
sku: 110991748
last_update:
  date: 1/12/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/K1100-quickstart/
---

# Inicio rápido con SenseCAP K1100 - El kit de prototipos de sensores

## Introducción

**SenseCAP K1100 - The Sensor Prototype Kit** representa la concentración por parte de Seeed Studio de la esencia de la comunicación LoRa® en tecnología y productos de inteligencia perimetral, para el despliegue y dominio más sencillo de aplicaciones LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/004(1).jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

Estamos orgullosos de presentarte **SenseCraft**, que permite a nuestros usuarios experimentar una mejor forma de enviar datos a la nube en el menor tiempo posible y con muy poco esfuerzo práctico.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" /></div>

Esto solo es posible con la ayuda de nuestra plataforma **SenseCAP** completamente diseñada internamente. SenseCAP proporciona una plataforma en la nube fácil de usar. Los usuarios pueden escanear el código QR con la **SenseCAP Mate App** para vincular el dispositivo con su cuenta correspondiente y gestionar los dispositivos, en un entorno con cobertura de red LoRaWAN®, y comprobar los datos del nodo sensor en el SenseCAP Portal. SenseCAP Portal proporciona API para que los usuarios puedan seguir desarrollando basándose en los datos del Portal.

Si por el momento no tienes cobertura LoRaWAN® a tu alrededor, no te preocupes, puedes cambiar libremente entre WiFi y LoRa®, y también puedes transferir datos a **Ubidots**/**Microsoft Azure IoT Central** para un procesamiento de datos adicional a través de WiFi.

Estamos deseando compartir contigo el progreso actual de nuestro proyecto, ¡y damos la bienvenida a todos los usuarios a que lo prueben!

## Actualizable a sensores industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, la configuración por Bluetooth, la compatibilidad con la red LoRaWAN® global, la batería integrada de 19 Ah y la potente compatibilidad con la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de la luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de datos</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temperatura y humedad del aire</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temperatura y humedad del aire y CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y temperatura del suelo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y temperatura del suelo y EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación meteorológica 8 en 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Descripción general

Dado que la funcionalidad IoT es una de las características del kit SenseCAP K1100, es necesario echar un vistazo a la lógica de su implementación antes de empezar.

En resumen, ofrecemos dos caminos para que nuestros usuarios experimenten IoT, uno es LoRa® y el otro es WiFi.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/lora.png" /></div>

Si quieres usar LoRa®, entonces tendrás que preparar de antemano un gateway LoRa® adecuado y conectar los datos a la plataforma SenseCAP utilizando un módulo Grove Wio E5, conectado a una red LoRaWAN®.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/wifi.png" /></div>

Si quieres usar WiFi, entonces necesitas tener una cobertura de red WiFi estable en tu entorno. Simplemente introduce tu WiFi y contraseña en el perfil, junto con información como la clave proporcionada por la plataforma IoT, para lograr una experiencia IoT excepcional.

## Preparación preliminar

Antes de comenzar, te recomendamos encarecidamente que actualices a la última versión de SenseCraft para garantizar la experiencia más estable.

Puedes descargar y actualizar la última versión en nuestra **distribución de SenseCraft** haciendo clic en el icono de abajo.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Por supuesto, también puedes descargar directamente el último archivo .uf2 haciendo clic aquí.

<table align="center">
  <tbody><tr>
      <td align="center">SenseCraft-v0.2-20220907.uf2</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/K1100-quick-start/SenseCraft-v0.2-20220907.uf2" target="_blank">Download</a></td>
    </tr>
  </tbody></table>

Después de descargar SenseCraft en tu disco local, sigue las instrucciones a continuación para flashearlo en el Wio Terminal.

Conecta el Wio Terminal al PC y enciéndelo, entra en el **modo Bootloader** deslizando el interruptor de encendido hacia abajo, alejándolo aún más de la posición "ON", suéltalo, deslízalo de nuevo y suéltalo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

:::note
Una vez que el Wio Terminal esté en modo Bootloader, el LED azul comenzará a respirar de una manera diferente al parpadeo.
:::

Abre el Explorador de archivos en tu PC y verás una nueva unidad externa llamada **Arduino**; arrastra el archivo **.uf2** descargado anteriormente a esta unidad **Arduino**.

Una vez que el flasheo de SenseCraft se complete, la memoria externa llamada Arduino aparecerá automáticamente y el programa SenseCraft empezará a funcionar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/38.png" /></div>

## Navegar por la interfaz usando los botones

Antes de empezar a aprender la interfaz de operación, necesitas acostumbrarte a la lógica de los botones que hemos diseñado para Wio Terminal. De esta manera, podrás seleccionar y operar las páginas con mucha fluidez de acuerdo con la lógica fija de los botones.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/button.png" /></div>

Primero están los tres botones situados encima del Wio Terminal. Corresponden a las pantallas de las tres funciones principales. Son **Sense**, **Process** y **Uplink** respectivamente.

No importa dónde estés, cuando pulses los tres botones de la parte superior, podrás volver a estas tres pantallas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/101.png" /></div>

Luego está el botón direccional de cinco vías situado en la parte inferior derecha del Wio Terminal, que te permite realizar las siguientes operaciones:

- **Izquierda/ Derecha:** Desplazarse por las páginas/ menús hacia la izquierda y la derecha
- **Centro:** Hacer una selección
- **Arriba:** Volver a la página anterior

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/40.png" /></div>

Cuando aparece un cuadro verde en la página, indica que el contenido está en estado seleccionado.

## Lógica de las páginas

Como se mencionó anteriormente, hemos preparado tres páginas para SenseCraft, que representan los tres módulos funcionales principales de SenseCraft, a saber, **Sense**, **Process** y **Uplink**.

### Sense

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

La función principal de la página **Sense** es la visualización de los datos de los sensores. Puedes observar el estado de funcionamiento y los valores de los sensores integrados en Wio Terminal desde la página Sense.

Por supuesto, si intentas conectar los sensores Grove del kit al conector Grove en el lado **derecho** del Wio Terminal, verás que el Wio Terminal detectará automáticamente el tipo de sensores y leerá sus valores.

### Process

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/41.png" /></div>

La función principal de la página **Process** es mostrar el proceso de tratamiento de datos. Actualmente hemos desarrollado la salida de registros para esta página para el reconocimiento y el procesamiento de modelos del módulo Grove Vision AI.

En el futuro, dotaremos al Wio Terminal de capacidades más potentes de filtrado y procesamiento de datos para esta página.

### Uplink

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

La función principal de la página **Uplink** es subir datos a la nube. En esta página los usuarios pueden configurar qué método de IoT quieren usar, LoRa® o WiFi.

Aquí puedes configurar libremente tus funciones exclusivas de IoT, cambiar libremente entre diferentes redes y plataformas, y crear valor para este conjunto de dispositivos.

## Visualización de datos de los sensores integrados

Después de flashear **SenseCraft** en Wio Terminal y encenderlo, espera unos segundos y podrás ver los valores de los sensores integrados directamente en la página **Sense**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/39.png" /></div>

Wio Terminal tiene tres sensores integrados: un sensor de luz, un sensor de nivel de sonido y un sensor de tres ejes.

En este momento no necesitas hacer nada, el valor del sensor integrado se actualizará automáticamente una vez por segundo, y podrás observar de forma muy natural el entorno actual de luz, nivel de sonido y datos de tres ejes.

## Enviar datos de sensores a SenseCAP mediante LoRa®

**Paso 1.** Pulsa el botón superior más a la derecha para entrar en la pestaña **Network**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/42.png" /></div>

Notarás que LoRa® ya está resaltado.

**Paso 2.** Pulsa el **botón central** para seleccionar **LoRa®** y conecta **Grove-Wio E5** al conector Grove del lado izquierdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/44.png" /></div>

**Paso 3.** Desplázate por las bandas de frecuencia LoRaWAN® que se muestran en la pantalla y selecciona la banda de frecuencia de acuerdo con tu región.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/45.png" /></div>

Ahora se te pedirá que vincules el Wio-E5 con la plataforma SenseCAP.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/46.png" /></div>

Ofrecemos dos formas de vincular tu dispositivo en la plataforma SenseCAP.

- **Opción 1. Vincular el dispositivo en la APP móvil**

Si quieres usar tu teléfono móvil para escanear y vincular tu dispositivo, o ver algunos de los datos de los sensores de forma remota, entonces descarga por tu cuenta la SenseCAP Mate APP según el siguiente enlace.

- [SenseCAP Mate APP para iOS](https://apps.apple.com/cn/app/sensecap-mate/id1619944834) en App Store
- [SenseCAP Mate APP para Android](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public) en Google Play Store

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/K1100/2.jpg" /></div>

Abre la SenseCAP Mate APP después de descargar la versión correspondiente de la APP según todos los sistemas móviles que utilices. Si es la primera vez que usas la plataforma SenseCAP, regístrate primero para obtener una cuenta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/7.jpg" /></div>

:::note
    Selecciona la versión **Global** al registrarte.
:::

En la página de relleno de información de registro, los campos con * son obligatorios, y los que no tienen * se pueden rellenar de forma opcional. Haz clic en el botón Register después de completar todo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/8.jpg" /></div>

Luego utiliza la cuenta que acabas de registrar para iniciar sesión en la APP.

Selecciona Device directory en la parte inferior de la interfaz principal, donde podrás ver la información de todos los dispositivos SenseCAP que has vinculado.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/9.jpg" /></div>

Haz clic en el **+** en la esquina superior derecha y selecciona **Add device** para vincular el Grove - Wio-E5.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1100-quick-start/10.jpg" /></div>

Alinea el recuadro en el centro de la cámara con el código QR **en la parte posterior de** Grove - Wio-E5 para escanear el código y vincular tu kit. **Ten en cuenta que no se debe escanear el código QR de la parte frontal del Wio E5**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100-quick-start/49.png" /></div>

Después de una vinculación exitosa usando la SenseCAP Mate App, verás los datos de los sensores mostrados en la app.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1100/104.jpg" /></div>

:::tip
 La SenseCAP Mate App no actualizará automáticamente la información de los datos, tendrás que desplazarte manualmente hacia abajo en la página del sensor para actualizar los datos.
 Si no ves datos nuevos durante más de 10 minutos, puedes intentar reiniciar el Wio Terminal moviendo hacia abajo el botón lateral una vez.
:::

- **Opción 2. Vincular el dispositivo en la plataforma web SenseCAP**

Utiliza tu navegador para abrir la [SenseCAP Console](https://sensecap.seeed.cc/portal/#/login). Si es la primera vez que utilizas nuestra plataforma, regístrate primero para obtener una cuenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/3.png" /></div>

Luego inicia sesión en la consola SenseCAP usando la cuenta que acabas de registrar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/4.png" /></div>

Selecciona la pantalla **Dashboard** y haz clic en **Bind Device**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/5.png" /></div>

Luego, en la siguiente página, tendrás que rellenar el **EUI**, **Code/KEY** y **Device Name**, e incluso puedes establecer la ubicación del dispositivo. (Grove - Wio-E5 no tiene función de ubicación)

Parte de la información requerida se puede encontrar en la pegatina de la parte posterior de Grove - Wio-E5. Rellena el nombre del dispositivo según tus necesidades.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/6.png" /></div>

Después de rellenar el contenido anterior, haz clic en el botón **Confirm** de abajo para completar la vinculación del dispositivo.

Después de una vinculación exitosa usando la plataforma web, verás los datos de los sensores mostrados en la plataforma.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/105.png" /></div>

:::tip
 SenseCAP en la web tampoco tiene actualización automática de datos y tendrás que actualizar tu navegador para ver los datos más recientes.
:::

Una vez que hayas seleccionado la banda, tendrás que esperar un poco a que el Grove Wio E5 termine de inicializarse.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/47.png" /></div>

Si la conexión LoRaWAN® con la plataforma SenseCAP tiene éxito, verás lo siguiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/48.png" /></div>

Si no estás conectado al Grove Wio E5 o si LoRaWAN® se desconecta en medio del proceso, se mostrará un fallo de transmisión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/50.png" /></div>

## Enviar datos de sensores a Microsoft Azure IoT Central mediante WiFi

Aquí el dispositivo utilizará comunicación WiFi para enviar los datos de los sensores a la nube. ¡Microsoft Azure IoT Central se utilizará para visualizar los datos procedentes de los sensores conectados a Wio Terminal mediante WiFi!

Por razones de espacio, pasa a este enlace para la introducción a esta parte del capítulo.

- [Conectar Wio Terminal a Microsoft Azure IoT Central](https://wiki.seeedstudio.com/es/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## Enviar datos de sensores a Ubidots vía WiFi

Aquí el dispositivo utilizará comunicación WiFi para enviar los datos del sensor a la nube. ¡La plataforma Ubidots se utilizará para visualizar los datos procedentes de los sensores conectados a Wio Terminal vía WiFi!

**Paso 1.** Regístrate e inicia sesión en Ubidots

Si es la primera vez que utilizas Ubidots, ve al [sitio web de Ubidots](https://ubidots.com/) y registra tu propia cuenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/3.png" /></div>

Una vez que te hayas registrado, inicia sesión en Ubidots usando tu cuenta registrada.

**Paso 2.** Asigna tu **TOKEN de Ubidots** único

Cada solicitud a Ubidots requiere un TOKEN. La forma más sencilla de obtener el tuyo es haciendo clic en **API Credentials** desde el menú desplegable de usuario.

Ve a tu menú desplegable de usuario y haz clic en API credentials:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/k1100_ubidots/4.png" /></div>

**Tokens**: Claves temporales y revocables que se usarán en tus solicitudes de API. Por favor guarda el TOKEN por ahora, lo usaremos más tarde.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/5.png" /></div>

:::caution
Todas las llamadas a la API solo aceptan tu **TOKEN**. ¡No intentes usar tu API Key, no funcionará! También puedes acceder a todas tus API Keys de Ubidots en la sección My Profile de la configuración en tu menú desplegable de usuario. Selecciona **My Profile** –> **API Credentials** para revisar la lista de API TOKENS relacionadas con tu cuenta específica de Ubidots.
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/6.png" /></div>

**Paso 3.** Prepárate con la información necesaria

Para establecer una conexión MQTT, necesitaremos preparar la siguiente información de antemano.

- **Nombre de WiFi**
  - Rellena el nombre del WiFi al que Wio Terminal puede conectarse. Wio Terminal buscará WiFi a su alrededor e intentará conectarse.
- **Contraseña del WiFi**
  - Rellena la contraseña del WiFi al que Wio Terminal puede conectarse.
- **Nombre de cliente MQTT**
  - Esto es especial porque es el ID con el que tu dispositivo será identificado por el broker, por lo que **DEBE** ser único. Si tu dispositivo intenta conectarse con el mismo ID que ya ha sido tomado por otro dispositivo, la conexión será rechazada. Crea tu propio nombre de cliente MQTT alfanumérico de 8-12+ caracteres e introdúcelo en el código en consecuencia.
 ¿Necesitas ayuda para crear un nombre de cliente MQTT único? Revisa este [generador ascii aleatorio](https://www.random.org/strings/), o simplemente usa la dirección MAC de tu dispositivo, ya que cada dirección MAC es globalmente única.

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_ubidots/7.png" /></div>

- **TOKEN de Ubidots**
  - Este es el TOKEN generado en el **paso 2**.
- **Etiqueta de dispositivo**
  - Este es el nombre del dispositivo y el nombre del dispositivo proporcionado por el usuario será utilizado por Ubidots para identificar el dispositivo. Si la etiqueta de dispositivo no existe antes de que se envíe el primer punto, Ubidots la creará automáticamente.

Ten preparada la información anterior, ya que la utilizaremos en el siguiente paso.

**Paso 4.** Configura **config.txt**.

Cuando usamos SenseCraft, aparece una unidad externa en cuanto el Wio Terminal se conecta al ordenador.

:::caution
Esto significa que la memoria USB aparece cuando el Wio Terminal está conectado al ordenador, **¡sin necesidad de accionar el botón lateral dos veces adicionales**!
:::
Normalmente hay un archivo llamado **config.txt** en la unidad externa, así que ábrelo.

Contiene la información necesaria sobre la conexión de red, que podemos modificar para lograr la configuración automática al encender. El contenido del archivo **config.txt** tiene el siguiente formato.

```
SSID=WiFi_Name
PASSWORD=WiFi_Password
MQTT_CLIENT_NAME=Topic
TOKEN=Default_Token
DEVICE_LABEL=Device_Name
```

Rellena los campos requeridos de arriba, correspondientes a la información que obtuvimos en el **paso 3**. Una vez completado, el contenido de tu archivo config.txt debería verse similar al siguiente ejemplo.

```
SSID=CHCK
PASSWORD=123456
MQTT_CLIENT_NAME=al49mw880j
TOKEN=BBFF-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DEVICE_LABEL=Wio-Terminal
```

:::caution
Una vez que hayas hecho tus cambios, **guarda** el archivo config.txt y **reinicia** Wio Terminal moviendo el botón lateral hacia abajo una vez.
:::
**Paso 5.** Entra en la pestaña **Network** y selecciona **WiFi**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

Ahora esperará a que se cargue la configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

Una vez que se haya leído la configuración de WiFi cargada, primero se conectará a la red WiFi y luego a la plataforma Ubidots. Si la conexión con Ubidots es satisfactoria, mostrará lo siguiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**Paso 6.** Ver datos en Ubidots

Una vez que los datos se hayan enviado correctamente a Ubidots, podrás ver la información de los datos en tu dispositivo Ubidots.

Ubidots tiene una interfaz muy sencilla y, si quieres ver información sobre tu dispositivo, puedes seleccionar **Devices** en la parte superior del panel.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/16.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_ubidots/11.png" /></div>

Haz clic en el nombre de tu dispositivo aquí para poder ver todas las pestañas de historial.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/54.png" /></div>

:::note
La versión gratuita de Ubidots solo admite la creación de **un TOKEN** y **diez etiquetas**. Una vez que tengas más de diez etiquetas, las etiquetas que hayas subido, así como los datos, se descartarán.
:::
:::note
Si deseas utilizar Ubidots para un desarrollo independiente más avanzado, consulta nuestros [tutoriales sobre Ubidots](https://wiki.seeedstudio.com/es/Getting_started_with_Ubidots/).
:::

## Conecta los otros sensores Grove del kit

Además de los sensores integrados, las posibilidades de SenseCraft son infinitas. El sensor Grove del kit también puede acceder al Wio Terminal y se reconoce automáticamente.

### Conectar un sensor Grove al Wio Terminal

En la versión actual de SenseCraft solo admitimos la conexión simultánea de un sensor para su uso (excepto el Grove Wio E5).

Al conectar, puedes usar el cable Grove incluido en el kit para conectar uno de los sensores que quieras usar al conector Grove en la parte inferior derecha del Wio Terminal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

El diagrama anterior muestra el Grove Vision AI como ejemplo, indicando cómo se conectan los sensores del kit. Por supuesto, lo mismo se aplica a otros sensores (excepto el Grove Wio E5).

:::caution
No conectes el sensor Grove del kit al conector Grove del lado izquierdo del Wio Terminal. El conector Grove del lado izquierdo está diseñado actualmente para la conexión del Grove Wio E5.
:::

### Ver los valores del sensor Grove

Una vez que hayas conectado el sensor Grove, podrás ver los valores del sensor Grove en la página Sense.

Solo necesitas pulsar el botón de flecha **derecha** en la página **Sense** hasta que aparezca el valor del sensor externo. Normalmente, el valor del sensor externo aparecerá después del **sensor IMU**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/56.png" /></div>

### Subir datos de los sensores Grove a la nube

La detección del sensor por parte de SenseCraft es totalmente automática, por lo que no necesitamos que el usuario haga nada adicional. Por supuesto, todo esto incluye la subida de datos después de insertar el nuevo sensor Grove.

- Del mismo modo, si quieres enviar datos de tus sensores Grove a través de LoRaWAN®, solo necesitas **conectar tu Grove Wio E5 en el lado izquierdo** al mismo tiempo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/57.png" /></div>

Luego, sigue los pasos de **[Enviar datos de sensores a SenseCAP vía LoRa®](https://wiki.seeedstudio.com/es/K1100-quickstart/#enviar-datos-de-sensores-a-sensecap-vía-lora)**.

- Si quieres enviar datos vía WiFi, entonces no necesitas conectar nada más, continúa consultando el contenido de **[Enviar datos de sensores a Ubidots vía WiFi](https://wiki.seeedstudio.com/es/K1100-quickstart/#enviar-datos-de-sensores-a-ubidots-vía-wifi)** para actuar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/58.png" /></div>

## Juego avanzado

Hemos diseñado varias formas muy interesantes y avanzadas de jugar con SenseCraft, y puedes obtener una visión rápida y utilizar estas funciones con esta sección.

### Análisis en tiempo real de Vision AI

Esta es una función diseñada para Grove Vision AI. Los usuarios pueden observar el registro de ejecución de Vision AI en esta interfaz, lo que es conveniente para observar el reconocimiento de Vision AI en tiempo real, ajustar la imagen de la cámara, etc.

**Paso 1.** Conecta el Grove Vision AI

Conecta tu Grove Vision AI al conector Grove del lado **derecho** del Wio Terminal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/55.png" /></div>

**Paso 2.** Accede a la interfaz de análisis en tiempo real de Vision AI

Haz clic en el segundo botón situado encima del Wio Terminal para acceder a la pantalla **Process**.

La selección predeterminada en la pantalla Process es **Vision AI real-time analysis**, en este punto simplemente **presiona el centro** del botón de 5 direcciones para entrar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/59.png" /></div>

Entonces podrás ver el registro de Vision AI en esta página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/61.png" /></div>

### Ejemplo de TinyML

Esta es una función diseñada para Wio Terminal en aprendizaje automático embebido. En esta página, los usuarios pueden escanear la serie de cursos de TinyML que hemos preparado para experimentar las potentes capacidades de aprendizaje automático de Wio Terminal y Vision AI.

**Paso 1.** Haz clic en el segundo botón encima del Wio Terminal para acceder a la pantalla de **Process**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/60.png" /></div>

**Paso 2.** Accede a la interfaz de TinyML Example

Pulsa la flecha derecha del botón de cinco direcciones para seleccionar TinyML Example. Simplemente **pulsa en el centro** del botón de cinco direcciones para entrar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/62.png" /></div>

### Visualización de gráficas

Hemos proporcionado al Wio Terminal una visualización en gráfico de líneas para que puedas observar cómo cambian los datos en los valores de cada sensor.

Tomemos como ejemplo un gráfico de líneas de los valores de luz.

Dado que la columna Light ya está resaltada, **pulsa en el centro** del botón de cinco direcciones para entrar en el modo de visualización de gráficas para los datos del sensor de luz.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/63.png" /></div>

### Guardar en tarjeta TF

Teniendo en cuenta que los usuarios pueden tener la necesidad de guardar datos sin conexión en una tarjeta TF y solo requerir un filtrado o análisis de datos posterior, también hemos diseñado el Wio Terminal con la capacidad de guardar datos en una tarjeta TF.

Cuando estés en el modo de visualización de gráficas como se describió antes, **pulsa en el centro** de nuevo para ver esta página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/65.png" /></div>

Aquí es donde los datos del sensor se pueden guardar en una tarjeta TF. Primero inserta una tarjeta TF en el Wio Terminal.

Después de eso, pulsa el **botón central** para seleccionar **Save to TF card** y se mostrará el mensaje **Saving has been started**. Una vez que este mensaje desaparezca, el guardado habrá finalizado y se guardarán los datos como un **archivo .csv**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/64.png" /></div>

Si el almacenamiento de la tarjeta TF está lleno, se notificará de la siguiente manera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/66.png" /></div>

## ¿Qué puedo hacer a continuación?

Enhorabuena por completar con éxito los pasos enumerados en esta guía de inicio rápido, ¡acabamos de observar los datos transferidos desde el dispositivo sensor a la vista de SenseCAP Console / Ubidots en el menor tiempo posible!

A continuación, si quieres profundizar más en la programación de sensores, así como en LoRaWAN®, plataformas en la nube y más, continúa con nuestra [SenseCAP - The Sensor Prototype Kit Overview](https://wiki.seeedstudio.com/es/K1100-Getting-Started/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/41.png" /></div>

## Recursos

- **[GitHub]**[Código fuente de Seeed_Arduino_K1100](https://github.com/Seeed-Studio/Seeed_Arduino_K1100)

## Solución de problemas

> P1: ¿Por qué el contenido de los datos de la plataforma SenseCAP difiere de los datos mostrados en el Wio Terminal?

R: Porque los datos se leen cada cinco minutos y luego se envían en un plazo de tres minutos. Así que el valor del sensor obtenido puede ser el valor leído una vez en algún intervalo de cinco minutos con cierto retraso. Mientras que los datos del Wio Terminal son en tiempo real, lo que puede dar lugar a inconsistencias entre ambos.

> P2: ¿Por qué no puedo conectarme a LoRaWAN®?

R: Si nunca puedes conectarte a LoRaWAN®, asegúrate de que haya una señal lo suficientemente fuerte y una cobertura de red LoRaWAN estable en el entorno circundante. Recomendamos que tengas tu propia pasarela LoRaWAN para experimentar el proceso completo. El Grove - Wio-E5 es solo un prototipo, por lo que la potencia de su antena no es comparable a la de un gran dispositivo LoRa®.

> P3: ¿Por qué a veces algunos datos de sensores en un conjunto de contenido no aparecen en SenseCAP?

R: Podría ser que Grove - Wio-E5 esté experimentando pérdida de paquetes. En general, la pérdida de paquetes es una situación normal y no es necesario preocuparse en exceso. Si hay una pérdida de paquetes muy grave, puedes intentar reiniciar el Wio Terminal.
Si tienes requisitos muy altos de datos en tiempo real y estabilidad, quizá quieras echar un vistazo a los dispositivos de la serie SenseCAP de grado industrial.

> P4: No compré el kit para K1101, ¿puedo usar el firmware para experimentar esta rutina?

R: Si no eres un cliente que compró este kit, es posible que no puedas experimentar el acceso completo a SenseCAP. El Grove - Wio-E5 del kit es una edición especial, y los productos comprados por separado no tienen acceso a SenseCAP.

> P5: Si uso otro programa, ¿puedo recuperar el firmware?

R: Puedes grabar este firmware para el Wio Terminal en cualquier momento y, en teoría, siempre puedes usar esta rutina mientras no destruya el firmware original del Grove - Wio-E5. El método para grabar el firmware es el siguiente.
Desliza el interruptor dos veces muy rápido, como se muestra a continuación:

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

En este punto aparecerá en tu ordenador un disco llamado **Arduino**, simplemente copia el firmware (archivo .uf2) a este disco. Una vez instalado el firmware, el disco se expulsará automáticamente y el Wio Terminal se reiniciará en la interfaz de Setup Band.

> P6: Si cambio el Dev EUI, App EUI, App Key de Grove - Wio-E5, ¿hay alguna forma de recuperarlos?

R: Hemos abierto la interfaz de consulta a nuestros usuarios, de modo que cuando hayas cambiado la información de los tres códigos para adaptarla a tu proyecto, también puedas acceder a ellos en cualquier momento con la información de la pegatina en la parte posterior del Grove - Wio-E5.

```
https://sensecap.seeed.cc/makerapi/device/view_device_info?nodeEui=<your_eui>&deviceCode=<your_code>
```

Utiliza la información de **EUI** y **Code** marcada en la parte posterior del Grove - Wio-E5 para rellenar la posición correspondiente en el sitio web anterior y averiguar los tres códigos correspondientes de tu dispositivo abriendo el sitio web en tu navegador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/36.png" /></div>

**Por favor, cuida bien los tres códigos; cualquier pérdida causada por la pérdida de los códigos será responsabilidad del usuario.**

> P7: ¿Es posible usar el DevEUI, AppEUI y AppKey de SenseCAP en otras plataformas? ¿Por ejemplo TTN?

R: La respuesta a esto es no. El triple código de SenseCAP no se puede usar para vincularse a otras plataformas, de lo contrario existe un alto riesgo de anomalías de datos en diferentes plataformas.

## Soporte técnico y debate sobre el producto


Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaración

- La marca LoRa® es una marca registrada de Semtech Corporation o sus filiales.
- LoRaWAN® es una marca utilizada bajo licencia de la LoRa Alliance®.
