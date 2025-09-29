---
description: MT3620 Ethernet Shield v1.0
title: MT3620 Ethernet Shield v1.0
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/MT3620_Ethernet_Shield_v1.0
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/product_picture.png)

El [Azure Sphere MT3620 Development kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) viene con cuatro conectores de 2.54mm para la extensión de recursos de hardware del MT3620. El MT3620 Ethernet Shield es una placa de expansión complementaria diseñada para el kit de desarrollo MT3620. El shield ethernet de Azure Sphere habilita soporte únicamente para conexión LAN privada. Por favor consulte [aquí](https://docs.microsoft.com/en-us/azure-sphere/network/connect-private-network) para más detalles.

Microsoft Azure Sphere es una solución para crear dispositivos altamente seguros, conectados y alimentados por MCU. Azure Sphere reúne lo mejor de la experiencia de Microsoft en la nube, software y silicio, resultando en un enfoque único de seguridad que comienza en el silicio y se extiende hasta la nube. Juntos, los MCU certificados de Azure Sphere, el SO Azure Sphere y el Servicio de Seguridad Azure Sphere le proporcionan la confianza y el poder para reimaginar su negocio y crear el futuro.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
Se requiere Wi-Fi externo para acceso a internet y servicios de Azure Sphere. Azure Sphere no soporta enrutamiento o puente entre la LAN privada y la interfaz Wi-Fi.
:::

## Características

- Procesador: Microchip, ENC28J60
- Controlador Ethernet Compatible con IEEE 802.3TM
- Totalmente Compatible con Redes 10/100/1000Base-T
- MAC Integrado y PHY 10Base-T
- Soporta Un Puerto 10Base-T con Detección y Corrección Automática de Polaridad
- Soporta Modos Full y Half-Duplex
- Interfaz SPI con Velocidades de Reloj hasta 20 MHz
- Temperatura de Operación(℃): 0 ~ +70℃

:::note
Si necesita que funcione bajo -40 ~ +85℃, por favor contacte iot@seeed.cc para personalización.
:::

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> J1**: Interfaz RJ45, está conectada al ENC28J60.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J1.png)

- **<font face="" size="3" font color="ff0000">②</font> LED1**: LED Rojo de Alimentación 3.3V, cuando alimenta la placa, el led se encenderá.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/led.png)

- **<font face="" size="3" font color="ff0000">③</font> U1**: ENC28J60, Controlador Ethernet Independiente con Interfaz SPI, que convierte SPI a interfaz Ethernet.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/U1.png)

- **<font face="" size="3" font color="ff0000">④</font> H4**: Azure Sphere(Placa de Desarrollo MT3620), Conector de Extensión, H4

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H4.png)

- **<font face="" size="3" font color="ff0000">⑤</font> H3**: Azure Sphere(Placa de Desarrollo MT3620), Conector de Extensión, H3

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H3.png)

- **<font face="" size="3" font color="ff0000">⑥</font> H2**: Azure Sphere(Placa de Desarrollo MT3620), Conector de Extensión, H2

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H2.png)

- **<font face="" size="3" font color="ff0000">⑦</font> H1**: Azure Sphere(Placa de Desarrollo MT3620), Conector de Extensión, H1

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H1.png)

- **<font face="" size="3" font color="ff0000">⑧</font> J2**: Conector de Pines UART3, está conectado a los GPIO66~GPIO69 del MT3620.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J2.png)

**Distribución de Pines**

- Los H1/H2/H3/H4 son iguales a la distribución de pines de la placa Azure Sphere.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**Dimensiones**

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing1.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing2.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing3.png)

## Ideas de Aplicación

- Hogar/Edificios/Instalaciones
- Automatización
- Seguridad
- Gestión de Equipos
- Servicios Públicos
- Seguridad Pública

:::tip
Para entender cómo funciona Azure Sphere en un entorno del mundo real, considera [el escenario de Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Primeros Pasos

### Prerrequisitos

**Instalar Azure Sphere**

Si tienes un kit de desarrollo de Azure Sphere que aún no se ha usado, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primero para ponerte en marcha.

**Biblioteca MT3620 Ethernet Shield**

Esta aplicación C de muestra demuestra cómo puedes [conectar un dispositivo Azure Sphere a una red Ethernet privada](https://docs.microsoft.com/azure-sphere/network/connect-private-network). <!-- 链接404 -->Configura el dispositivo Azure Sphere para ejecutar un servidor DHCP y un servidor SNTP, y también implementa un servidor TCP básico. Los pasos a continuación muestran cómo verificar esta funcionalidad conectando tu computadora a esta red privada.

Los servidores DHCP y SNTP son gestionados por el SO de Azure Sphere, según la configuración proporcionada por la aplicación. Estos servidores se iniciarán solo después de que la aplicación lo solicite, pero continuarán ejecutándose incluso si la aplicación se detiene.

El servidor TCP se ejecuta en el proceso de la aplicación misma y se detendrá cuando la aplicación se detenga. Ten en cuenta que esta implementación de servidor TCP de muestra es básica, solo para ilustración, y no autentica ni cifra conexiones: deberías reemplazarla con tu propia lógica de producción.

La muestra utiliza las siguientes bibliotecas de Azure Sphere e incluye [APIs beta](https://docs.microsoft.com/azure-sphere/app-development/use-beta).

|Biblioteca   |Propósito  |
|---------|---------|
|log     |  Muestra mensajes en la ventana de Salida del Dispositivo de Visual Studio durante la depuración  |
|networking    | Obtiene y establece la configuración de la interfaz de red |

:::note
Actualmente el MT3620 Ethernet Shield no soporta la conexión a internet debido a que el software de Microsoft no está listo. Solo soporta conexión a PC.
:::

**Conexión de Hardware**

| Kits de desarrollo MT3620 | MT3620 Ethernet Shield |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/ethernet_s.png)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html)|

- Paso 1. Conecta el MT3620 Ethernet Shield a la placa de desarrollo Azure Sphere MT3620.
- Paso 2. Conecta el cable USB a la placa de desarrollo Azure Sphere MT3620 y al PC.
- Paso 3. Conecta el cable de red entre la placa MT3620 Ethernet y el PC.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/stack_with_azuresphere.png)

**Para compilar y ejecutar la muestra**

- Configura tu dispositivo Azure Sphere y el entorno de desarrollo como se describe en la [documentación de Azure Sphere](https://docs.microsoft.com/azure-sphere/install/install).<!-- 链接404 -->
- Incluso si has realizado esta configuración anteriormente, asegúrate de tener la versión 19.02 o superior del SDK de Azure Sphere. En un símbolo del sistema para desarrolladores de Azure Sphere, ejecuta **azsphere show-version** para verificar. Descarga e instala el [SDK más reciente](https://aka.ms/AzureSphereSDKDownload) según sea necesario.
- Conecta tu dispositivo Azure Sphere a tu PC por USB.
- Habilita el [desarrollo de aplicaciones](https://docs.microsoft.com/azure-sphere/quickstarts/qs-blink-application#prepare-your-device-for-development-and-debugging), <!-- 链接404 -->si aún no lo has hecho:

   `azsphere device prep-debug`

- Empaqueta e implementa la [imagen de configuración de placa](https://docs.microsoft.com/azure-sphere/network/connect-private-network)<!-- 链接404 --> para el chip Ethernet Microchip ENC286J60:

   `azsphere image package-board-config --preset lan-enc28j60-isu0-int5 --output enc28j60-isu0-int5.imagepackage`

   `azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage`

- Clona el repositorio de [muestras de Azure Sphere](https://github.com/Azure/azure-sphere-samples) y encuentra la muestra PrivateEthernet.
- En Visual Studio, abre PrivateEthernet.sln y presiona F5 para compilar y construir la solución y cargarla en el dispositivo para depuración.
- Deja la aplicación ejecutándose mientras realizas los siguientes pasos.

**Solución de problemas**

Si ves numerosos errores en la Lista de errores de Visual Studio relacionados con encabezados faltantes e identificadores indefinidos, o si al compilar la aplicación, ves el siguiente error en la Salida de compilación de Visual Studio:

   `error MSB6004: The specified task executable location "C:\Program Files (x86)\Microsoft Azure Sphere SDK\\SysRoot\tools\gcc\arm-poky-linux-musleabi-gcc.exe" is invalid.`

Entonces es probable que tengas una versión anterior del SDK de Azure Sphere instalada; asegúrate de tener la versión 19.02 o más reciente.

**Configurar la conexión Ethernet en tu computadora**

- Abre Configuración y luego haz clic en **Red e Internet** > **Cambiar opciones del adaptador**.  
- Haz clic derecho en tu adaptador Ethernet y selecciona **Propiedades**.
- En la ventana **Propiedades de Ethernet**, deshabilita todos los elementos excepto **Protocolo de Internet versión 4 (TCP/IPv4)**.
- Selecciona **Protocolo de Internet versión 4 (TCP/IPv4)**, y luego haz clic en el botón **Propiedades** para abrir la ventana **Propiedades del Protocolo de Internet versión 4 (TCP/IPv4)**.
- Verifica que "Obtener dirección IP automáticamente" esté seleccionado. (Las versiones anteriores de esta muestra requerían la configuración de una dirección IP estática en este punto. Eso ya no es necesario porque la aplicación ahora proporciona un servidor DHCP.)
- Haz clic en **Aceptar** para cerrar la **ventana de propiedades IPv4**, luego cierra la ventana **Propiedades de Ethernet**.
- Conecta un cable Ethernet del ENC286J60-H a la conexión Ethernet de tu computadora.

:::note
Si tu computadora está administrada por políticas que impiden que se conecte a múltiples interfaces de red a la vez, es posible que necesites deshabilitar otras interfaces de red mientras usas esta muestra.
:::

:::note
Las muestras usan el rango de direcciones IP 192.168.100.xxx. Si tienes otro adaptador de red usando el mismo rango, entonces necesitarás modificar la muestra o deshabilitar el otro adaptador de red temporalmente.
:::

**Probar el servidor DHCP del dispositivo**

Abre un símbolo del sistema en tu computadora y escribe **ipconfig**. Deberías ver que el servidor DHCP ha asignado la dirección IP 192.168.100.11 a tu PC para su conexión Ethernet:

```sh
Ethernet adapter <name>:

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::8c67:be24:4d9a:d4bb%9
   IPv4 Address. . . . . . . . . . . : 192.168.100.11
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . :
```

También podrías encontrar, descargar y usar una herramienta de prueba de cliente DHCP en tu PC para inspeccionar la respuesta del servidor DHCP con más detalle - por ejemplo, para ver la(s) dirección(es) del servidor NTP devueltas.

**Probar el servidor SNTP del dispositivo**

- Asegúrate de que el dispositivo esté [conectado a Wi-Fi](https://docs.microsoft.com/azure-sphere/install/configure-wifi), para que pueda obtener la hora de un servidor NTP público. El propio servidor SNTP del dispositivo no responderá hasta que conozca la hora actual.
- Abre un símbolo del sistema en tu computadora y escribe **w32tm /stripchart /computer:192.168.100.10 /dataonly /samples:1**. Esto invoca la [herramienta de Tiempo de Windows](https://docs.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings) para consultar el servidor SNTP del dispositivo y mostrar la diferencia calculada entre la hora de tu computadora y la hora del dispositivo:

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:18:09.
   14:18:09, +00.0349344s
   ```

- Si el servidor SNTP no está ejecutándose o no responde, entonces puedes ver la siguiente salida. Verifica que la aplicación esté ejecutándose y que Wi-Fi esté configurado.

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:16:50.
   14:16:50, error: 0x800705B4
   ```

**Probar el servidor TCP de la aplicación**

Asegúrate de que la aplicación de ejemplo siga ejecutándose en tu dispositivo Azure Sphere. Luego, en tu computadora, usa una aplicación de terminal para abrir una conexión TCP sin procesar al servidor TCP de la aplicación Azure Sphere en 192.168.100.10 puerto 11000. Puedes abrir esta conexión con una aplicación de terminal de terceros como PuTTY (usando un tipo de conexión "raw"), o con el cliente Telnet integrado para Windows.

Para usar el cliente Telnet integrado para Windows:

- Abre el Panel de Control y haz clic en **Programas y características** > **Activar o desactivar las características de Windows** para abrir la ventana **Características de Windows**.
- Asegúrate de que **Cliente Telnet** esté seleccionado y haz clic en **Aceptar**.
- Abre un símbolo del sistema y escribe **telnet 192.168.100.10 11000**.

Los caracteres que escribas se mostrarán en la consola de depuración en Visual Studio–ya sea inmediatamente o cuando ingreses una nueva línea–mostrando que han sido recibidos por el servidor TCP de ejemplo en el MT3620. Además, cuando ingreses una nueva línea, el MT3620 enviará una cadena de vuelta al terminal, que dice:

   ```sh
   Received "<last-received-line>"
   ```

Ten en cuenta que este servidor de muestra tiene un búfer de entrada simple de 16 caracteres. Si envías más que esto, entonces la ventana de Salida en Visual Studio puede mostrar: "Desbordamiento de datos de entrada. Descartando 16 caracteres."

**Solución de problemas**

- Si ejecutas la muestra sin el ENC28J60 conectado (o conectado incorrectamente), entonces la aplicación de muestra se cerrará inmediatamente. La salida de depuración mostrará un error como "ERROR: Networking_SetStaticIp: 5 (Error de E/S)" justo antes de cerrarse. Si posteriormente conectas o arreglas la conexión al ENC28J60, entonces también debes reiniciar el MT3620.
- Si ejecutas la muestra sin que la configuración de la placa esté cargada en el dispositivo, entonces la aplicación de muestra se cerrará inmediatamente. La salida de depuración mostrará un error como "ERROR: Networking_SetStaticIp: 2 (No existe el archivo o directorio)" justo antes de cerrarse.

**Eliminando la configuración de la placa Ethernet**

Si ya no requieres Ethernet, por ejemplo porque deseas usar tu placa para un proyecto diferente, debes eliminar manualmente la imagen de configuración de la placa Ethernet:

- Encuentra la imagen instalada con tipo 'Board config', y anota su ID de componente:

   `azsphere device image list-installed`

- Elimina esta imagen:

   `azsphere device sideload delete --componentid <component ID>`

- Presiona el botón de reinicio en la placa de desarrollo MT3620.

**Nota:** Esta muestra usa ISU0 (puerto I2C/SPI/UART 0) en el MT3620, que también es usado por otras muestras. Otras muestras pueden adaptarse para usar un puerto ISU diferente. Por ahora, no es posible adaptar esta muestra de Ethernet Privada para usar otro puerto ISU.

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/MT3620%20Ethernet%20Shield_v1.0_SCH_181220.pdf)
- **[Eagle]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip)
- **[Dibujo Mecánico]** [Dibujo Mecánico MT3620 Ethernet Shield](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/103990403%2C%20MT3620%20Ethernet%20Shield%20v1.0.pdf)
<!-- - **[Library]** [MT3620 Ethernet Shield Library](https://github.com/Azure/azure-sphere-samples/tree/master/Samples/PrivateEthernet)链接缺失 -->
- **[Hoja de Datos]** [Hoja de Datos ENC28J60](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/ENC28J60.pdf)
- **[FAQ Web]** [Foro Azure Sphere](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Problemas Github Azure Sphere](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
