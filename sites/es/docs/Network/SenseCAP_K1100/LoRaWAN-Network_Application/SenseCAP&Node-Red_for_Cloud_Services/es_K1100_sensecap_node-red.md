---
description: Uso de SenseCAP y Node-RED
title: Uso de SenseCAP y Node-RED
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1100_sensecap_node-red
last_update:
  date: 1/13/2023
  author: shuxu hu
---

# Inicio Rápido de SenseCAP Console con Node-RED

**SenseCAP K1100 - El Kit de Prototipo de Sensores** representa a Seeed Studio concentrando la esencia de la comunicación LoRa® en tecnología y productos de inteligencia de borde, para el despliegue y dominio más fácil de aplicaciones LoRa® e IoT.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

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

**Node-RED** es una herramienta de programación para conectar dispositivos de hardware, APIs y servicios en línea de maneras nuevas e interesantes.

Proporciona un editor basado en navegador que facilita la conexión de flujos utilizando la amplia gama de nodos en la paleta que pueden desplegarse en su tiempo de ejecución con un solo clic.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" /></div>

Para facilitar a nuestros usuarios la conexión de datos desde la plataforma SenseCAP a varias otras plataformas PaaS para un procesamiento de datos más profundo. Haremos una serie de tutoriales para **SenseCAP & Node-RED**.

Este tutorial, el primero de una serie, te guiará a través de la instalación y uso de Node-red y la llamada a la API backend de SenseCAP para conectar con Node-RED.

## Instalar Node.js®

Para instalar Node-RED localmente necesitarás una [versión compatible de Node.js](https://nodered.org/docs/faq/node-versions).

Descarga la última versión LTS 14.x de Node.js desde la [página oficial de Node.js](https://nodejs.org/en/). Te ofrecerá la mejor versión para tu sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
Ejecuta el archivo MSI descargado. Instalar Node.js requiere derechos de administrador local; si no eres administrador local, se te pedirá una contraseña de administrador durante la instalación. Acepta los valores predeterminados al instalar. Después de que se complete la instalación, cierra cualquier símbolo del sistema abierto y vuelve a abrir para asegurar que las nuevas variables de entorno sean reconocidas.
:::
Al instalar Node.js, si estás usando una computadora que no ha tenido ningún entorno de programación instalado, recomendaríamos que marques la casilla para instalar las herramientas necesarias mientras instalas Node.js, lo cual te ahorrará muchos problemas necesarios.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

La forma más fácil de instalar Node-RED es, usando la herramienta de gestión de paquetes de Node, **npm**. Sin embargo, no recomendamos instalar Node-RED con npm 1.x, sino más bien actualizarlo a la última versión **npm 2.x**.

:::note
En **Windows** (Requiere Windows 10 y superior), usa el atajo **Win+R** y escribe `cmd` en la ventana emergente para abrir la terminal y ejecutar el siguiente comando.

Si estás usando **MacOS** o **Linux**, por favor ejecuta el siguiente comando en la terminal y añade `sudo` al frente del comando para usuarios no root.
:::

```sh
npm install -g npm@2.x
```

Una vez instalado, abre un símbolo del sistema y ejecuta el siguiente comando para asegurar que Node.js y npm estén instalados correctamente.

```sh
node --version && npm --version
```

Deberías recibir una salida que se vea similar a:

```sh
> v16.17.0
> 2.15.12
```

## Instalar Node-RED

Instalar Node-RED como un módulo global añade el comando `node-red` a la ruta de tu sistema. Ejecuta lo siguiente en el símbolo del sistema:

```sh
npm install -g --unsafe-perm node-red
```

Si Node-RED está instalado como un paquete npm global, entonces ejecuta el comando node-red directamente:

```sh
node-red
```

Esto enviará el registro de Node-RED al terminal. Debes mantener el terminal abierto para mantener Node-RED funcionando.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

Esto te permitirá ver el editor de Node-RED en http://localhost:1880.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## <span id="jump1">Obtener la API de SenseCAP</span>

Antes de proceder a esta sección, asegúrate de haber vinculado tu dispositivo K1100 en la consola de SenseCAP.

Inicia sesión en la [consola de SenseCAP](https://sensecap.seeed.cc/portal/#/dashboard). En la barra desplegable a la derecha del nombre de usuario en la parte superior del panel, podemos encontrar la **Información de la Organización**, por favor selecciónala.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/5.png" /></div>

En la página de Información de la Organización, puedes ver el **ID de la Organización**, que puedes anotar primero y lo usaremos en los pasos posteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/6.png" /></div>

Luego, también necesitamos obtener la clave API para SenseCAP. Por favor haz clic en **Seguridad -> Claves API de Acceso** en el lado izquierdo del panel. Luego Crea una Clave de Acceso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/11.png" /></div>

Haz clic en el **ID de API** que creaste y obtendrás sus **Claves API de Acceso**, por favor anótala por ahora, la usaremos en los pasos posteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/7.png" /></div>

## Crear un Nodo HTTP

La ventana del editor consta de cuatro componentes:

- El encabezado en la parte superior, que contiene el botón de despliegue, el menú principal y, si la autenticación de usuario está habilitada, el menú de usuario.
- La [paleta](https://nodered.org/docs/user-guide/editor/palette) a la izquierda, que contiene los nodos disponibles para usar.
- El [espacio de trabajo](https://nodered.org/docs/user-guide/editor/workspace) principal en el medio, donde se crean los flujos.
- La [barra lateral](https://nodered.org/docs/user-guide/editor/sidebar) a la derecha.

Sigue los enlaces anteriores para aprender más sobre cada componente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/12.png" /></div>

En este ejemplo, te mostraremos cómo usar nodos MQTT para mostrar los valores de los sensores recibidos por SenseCAP. Antes de eso, aprendamos a entender los nodos que usaremos más en el futuro.

### nodo http

#### nodo http in

El nodo **http in** se puede usar para crear servicios web.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/13.png" /></div>

Arrastra el nodo al espacio de trabajo y haz doble clic en el nodo para acceder a la página de configuración del nodo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/14.png" /></div>

Aquí, necesitamos establecer una URL para el servicio web que has creado para que puedas acceder a la página web que has creado a través de la dirección `http://localhost:1880/<URL>`.

#### nodo http response

El nodo **http response** envía la respuesta de vuelta a la solicitud recibida del nodo de entrada HTTP.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/15.png" /></div>

Usualmente, no necesitamos configurarlo por separado, solo arrastrarlo directamente al banco de trabajo para usarlo.

#### nodo template

El nodo template puede establecer propiedades basadas en la plantilla proporcionada.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/17.png" /></div>

Usaremos este nodo y usaremos un lenguaje HTML simple para completar la configuración del contenido de visualización de nuestra página web.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/18.png" /></div>

Por ejemplo, queremos mostrar "Hello World!".

<div>
  ```html
    <h1>Hello World!</h1>
  ```
</div>

Finalmente, conectamos el **http in** al **template**, y conectamos el **template** al **http response**. Luego hacemos clic en el botón **deploy** en la esquina superior derecha, para que se cree una página web simple, que es el paso básico de operación de Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/19.png" /></div>

En este ejemplo, creamos una URL de datos del sensor, por lo que después del despliegue, podemos ingresar `http://localhost:1880/sensor_data` en la barra de direcciones del navegador para acceder a la página que acabamos de crear.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100-nodered/20.png" /></div>

## Crear un nodo MQTT

En esta sección, describiremos cómo obtener la información de datos de SenseCAP a través del nodo MQTT.

### nodo debug

Muestra las propiedades de mensaje seleccionadas en la pestaña lateral de debug y opcionalmente el registro de tiempo de ejecución. Por defecto muestra msg.payload, pero puede configurarse para mostrar cualquier propiedad, el mensaje completo o el resultado de una expresión JSONata.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/23.png" /></div>

### nodo mqtt

Se conecta a un broker MQTT y se suscribe a mensajes del tema especificado.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100-nodered/26.png" /></div>

**Paso 1.** Agregar un nuevo nodo mqtt-broker.

Arrastra un nodo **mqtt in**, haz doble clic en él para entrar a la página de configuración, luego haz clic en el botón editar después de **Add new mqtt-broker**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/27.png" /></div>

La configuración de mqtt-broker debe completarse de la siguiente manera.

- Server: openstream.api.sensecap.seeed.cc
- Port: 1883
- Protocol: MQTT V3.1.1
- Client ID: El formato es `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Tu ID de organización. Lo hemos obtenido en [Get the SenseCAP API](#jump1).
  - `<Random ID>` usa tus propios números generados aleatoriamente o letras minúsculas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/28.png" /></div>

Luego completamos el campo de opciones de **Security** con el Username y Password.

- Username: El formato es `org-<Organization ID>`
  - `<Orgnization ID>` Tu ID de organización. Lo hemos obtenido en [Get the SenseCAP API](#jump1).
- Password: Completa con las **Access API keys** que obtuvimos en [Get the SenseCAP API](#jump1).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/29.png" /></div>

Finalmente, haz clic en el botón **Add** en la esquina superior derecha para regresar a la página de configuración del nodo **mqtt in**.

- Topic: Configurar un tema en un formato específico determina el tipo de dispositivo y tipo de datos a recibir.

Formato del Topic: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Tu ID de organización. Lo hemos obtenido en <a href="#jump1" target="_blank">Get the SenseCAP API</a>.</td>
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
El contenido de este tutorial solo se aplica al kit K1100, por lo que consulta el contenido dentro del **LoraWAN Dev Kit** para el ID del valor medido y no uses otros ID.
:::
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/k1100-nodered/30.png" /></div>

Por ejemplo, si quiero poder obtener datos del sensor para los valores de luz enviados por Wio Terminal, entonces la información del Topic que debo completar debería ser:

```
/device_sensor_data/424324324324324/2CF7F1C043200002/1/+/4193
```

:::tip
El campo `<OrgID>` es obligatorio, "+" significa que este campo no tiene filtro y puede coincidir con todos. Por lo tanto, "/ + / + / + / +" significa escuchar todos los `<DeviceEUI>`, `<Channel>`, `<Reserved>`, `<MeasurementID>`.

Si quieres escuchar todos los mensajes, entonces el Topic debería ser:

```
    /device_sensor_data/424324324324324/+/+/+/+
```

:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/31.png" /></div>

**Paso 2.** Añadir nodo de depuración

Entonces también podríamos añadir nodos de depuración para facilitar la verificación de que todo esté funcionando.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/34.png" /></div>

**Paso 3.** Enciende el Wio Terminal y comienza a enviar datos a SenseCAP.

Hacemos clic en el botón **Deploy** y si todo está configurado correctamente podrás ver el nodo **mqtt in** mostrando conectado. Una vez que el Wio Terminal comience a encenderse y funcionar y comience a enviar datos a SenseCAP. Verás los datos ya mostrados en la ventana de depuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/33.png" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
