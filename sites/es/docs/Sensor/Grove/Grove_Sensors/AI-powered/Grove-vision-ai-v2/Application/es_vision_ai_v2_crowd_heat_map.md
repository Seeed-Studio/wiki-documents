---
description: Construyendo un mapa de calor de multitudes basado en Grove Vision AI V2 y Home Assistant.
title: Construyendo una densidad de multitudes basada en Grove Vision AI V2 y Home Assistant
keywords:
  - matter
  - XIAO
  - light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /vision_ai_v2_crowd_heat_map
last_update:
  date: 05/22/2024
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/vision_ai_v2_crowd_heat_map/
---

# Construyendo una densidad de multitudes basada en Grove Vision AI V2 y Home Assistant

En la era de los hogares inteligentes e IoT, la integración de sensores y dispositivos inteligentes en sistemas de automatización del hogar se ha vuelto cada vez más popular. [Home Assistant](https://www.home-assistant.io/), una poderosa plataforma de automatización del hogar de código abierto, ofrece una amplia gama de posibilidades para crear soluciones personalizadas adaptadas a necesidades individuales. En este tutorial, exploraremos cómo construir un sistema avanzado de detección ambiental utilizando el Grove Vision AI V2 y XIAO ESP32C3, integrado sin problemas con Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/2.png" style={{width:900, height:'auto'}}/></div>

El Grove Vision AI V2, un sensor de visión de vanguardia, combinado con el versátil microcontrolador XIAO ESP32C3, proporciona una base ideal para crear un sistema de detección ambiental rico en características y altamente capaz. Al aprovechar el poder de estos dispositivos, podemos implementar una amplia gama de funcionalidades, incluyendo reconocimiento multi-modelo, configuraciones personalizadas, velocidad de fotogramas en tiempo real, vista en vivo, seguimiento de objetivos, mapa de calor de objetivos y conteo de área cruzada.

A lo largo de este tutorial, te guiaremos a través del proceso paso a paso de configurar el hardware, configurar el software e integrar el sistema con Home Assistant. Ya seas un principiante o un usuario experimentado, este tutorial tiene como objetivo proporcionarte el conocimiento y las herramientas necesarias para crear un sofisticado sistema de detección ambiental que mejore tu experiencia de hogar inteligente.

Prepárate para embarcarte en un emocionante viaje mientras desbloqueamos el potencial del Grove Vision AI V2 y XIAO ESP32C3, y descubre cómo pueden revolucionar la forma en que monitoreas e interactúas con tu entorno doméstico usando Home Assistant. ¡Sumerjámonos y comencemos a construir tu propio sistema inteligente de detección ambiental!

## Preparación del Hardware

Antes de que comience el contenido del tutorial de este artículo, es posible que necesites tener el siguiente hardware listo.

### Materiales Requeridos

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
   <th>XIAO ESP32C3</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Home Assistant Green es la forma más fácil y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente por defecto. Esta placa se beneficia del próspero ecosistema de Home Assistant y será mejorada cada mes por código abierto.

Recomendamos usar Home Assistant Green como el host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con un Supervisor.

Una vez que tengas el Grove Vision AI V2 y la cámara listos para usar, entonces puedes conectarlos a través del cable de conexión CSI. Al conectar, por favor presta atención a la dirección de la fila de pines y no los conectes al revés.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:400, height:'auto'}}/></div>

Luego necesitas conectar el XIAO y el Grove Vision AI V2 a través de la fila de pines (o usar la placa de expansión y la interfaz Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:400, height:'auto'}}/></div>

Y hemos asumido que has subido un modelo de reconocimiento para el dispositivo.

### Flashear Firmware de Transparencia de Red para XIAO ESP32C3

Conecta el XIAO ESP32C3 a tu computadora usando un cable USB-C adecuado. Asegúrate de que los controladores del dispositivo estén instalados correctamente.

Abre la [Herramienta SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) en tu navegador web.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

Luego selecciona **XIAO ESP32S3** y haz clic en **Connect**.

:::caution
¡Ten en cuenta que aunque se selecciona el XIAO ESP32S3 aquí, todavía estamos usando el XIAO ESP32C3!
:::

Haz clic en el botón de abajo para descargar el archivo de firmware y haz clic en el botón **Add File** en la página web para flashear el firmware `sscma_xiao_c3_network_v1.1.0.bin` para la dirección `0x0`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/sscma_xiao_c3_network_v1.1.0.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Descargar el archivo</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, haz clic en el botón **Flash** y espera a que el programa se suba exitosamente antes de desconectar el XIAO ESP32C3 de la computadora.

## Instalación de complementos en Home Assistant

Antes de comenzar a construir nuestro sistema de detección de entorno, necesitamos instalar algunos complementos esenciales en Home Assistant. Estos complementos proporcionarán la funcionalidad y herramientas necesarias para integrar el Grove Vision AI V2 y XIAO ESP32C3 con Home Assistant. Los complementos requeridos son **EMQX**, **Advanced SSH & Web Terminal**, y **Node-RED**. Vamos a revisar el proceso de instalación para cada complemento.

### Paso 1. Instalando EMQX

Abre tu interfaz web de Home Assistant y navega al menú **Settings**. Haz clic en la opción **Add-ons** para acceder a la página de gestión de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/4.png" style={{width:900, height:'auto'}}/></div>

En la esquina inferior derecha de la página, haz clic en el botón **ADD-ON STORE** para abrir la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/5.png" style={{width:900, height:'auto'}}/></div>

En la barra de búsqueda de la tienda de complementos, escribe **EMQX** y presiona enter para buscar el complemento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/6.png" style={{width:900, height:'auto'}}/></div>

Localiza el complemento **EMQX** en los resultados de búsqueda y haz clic en él para ver sus detalles. Haz clic en el botón **INSTALL** para comenzar el proceso de instalación. Home Assistant descargará e instalará el complemento EMQX. Espera a que la instalación se complete.

### Paso 2. Instalando Advanced SSH & Web Terminal

En la "Tienda de Complementos" de Home Assistant, busca **Advanced SSH & Web Terminal**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/7.png" style={{width:900, height:'auto'}}/></div>

Localiza el complemento **Advanced SSH & Web Terminal** y haz clic en él para ver sus detalles. Haz clic en el botón **Install** para iniciar el proceso de instalación. Home Assistant descargará e instalará el complemento Advanced SSH & Web Terminal.

### Paso 3. Instalando Node-RED

Nuevamente, en la "Tienda de Complementos" de Home Assistant, busca **Node-RED**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/8.png" style={{width:900, height:'auto'}}/></div>

Encuentra el complemento **Node-RED** y haz clic en él para acceder a sus detalles. Haz clic en el botón "Install" para iniciar el proceso de instalación. Permite que Home Assistant descargue e instale el complemento Node-RED.

## Desplegando pysscma vía Docker en Home Assistant

En este paso, descargaremos y configuraremos el servidor Python SSCMA (Seeed Studio Cross-platform Modular API) usando el complemento Advanced SSH & Web Terminal en Home Assistant. Este servidor permitirá la comunicación entre el Grove Vision AI V2 y Home Assistant. Sigue los pasos detallados a continuación:

### Paso 4. Accediendo al Advanced SSH & Web Terminal

Abre tu interfaz web de Home Assistant y navega al menú **Settings**. Haz clic en la opción **Add-ons** para acceder a la página de gestión de complementos. Localiza el complemento **Advanced SSH & Web Terminal** y haz clic en él para abrir su página de detalles.

Por favor, desactiva el **Protection mode** en esta página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/9.png" style={{width:900, height:'auto'}}/></div>

Haz clic en el botón **START** si el complemento no está ya ejecutándose. Una vez que el complemento esté funcionando, haz clic en el botón **OPEN WEB UI** para acceder a la interfaz del terminal.

:::note
La primera vez que ejecutes este plugin puede que necesites completar `username`, `password` y `authorized_key` en la página de configuración de la página de detalles del plugin. Para información detallada de configuración, por favor lee la documentación proporcionada con el plugin.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/10.png" style={{width:900, height:'auto'}}/></div>
:::

### Paso 5. Descargando el paquete pysscma.tar

En el Advanced SSH & Web Terminal, navega al directorio raíz ejecutando el siguiente comando:

```
cd /
```

Descarga el paquete **pysscma.tar** ejecutando el siguiente comando:

```
wget -O pysscma.tar https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/pysscma.tar
```

Espera a que se complete la descarga. El paquete **pysscma.tar** se guardará en el directorio raíz.

### Paso 6. Cargando la imagen de Docker

Una vez finalizada la descarga, ejecuta el siguiente comando para cargar la imagen de Docker desde el paquete pysscma.tar:

```
docker load -i pysscma.tar
```

Docker cargará la imagen, y verás el ID de la imagen una vez que el proceso esté completo.

Para iniciar el servidor Python SSCMA, ejecuta el siguiente comando:

```
docker run -itd --net host --name pysscma_server --restart on-failure --privileged python-sscma:latest server --host 0.0.0.0
```

Este comando creará e iniciará un contenedor de Docker llamado "pysscma_server" con las configuraciones necesarias.

Para verificar si el contenedor de Docker se está ejecutando correctamente, ejecuta el siguiente comando:

```
docker ps
```

Deberías ver el contenedor "pysscma_server" listado con un estado de "Up".

### Paso 7. Obtener la dirección IP

Para obtener la dirección IP del contenedor de Docker, ejecuta el siguiente comando:

```
ifconfig | grep docker -A 10
```

Busca el campo "inet" en la salida y anota la dirección IP asociada con él (por ejemplo, 172.30.232.1).

Esta dirección IP se utilizará en los pasos posteriores para configurar la comunicación entre el Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/1.png" style={{width:900, height:'auto'}}/></div>

## Configurar el Broker MQTT

En este paso, configuraremos el complemento EMQX en Home Assistant para establecer la autenticación de usuario para la comunicación segura entre el Grove Vision AI V2 y Home Assistant.

### Paso 8. Crear una Base de Datos Integrada y Usuario

Abre tu interfaz web de Home Assistant y navega al menú "Settings". Haz clic en la opción "Add-ons" para acceder a la página de gestión de complementos. Localiza el complemento "EMQX" y haz clic en él para abrir su página de detalles. Haz clic en el botón "START" si el complemento no está ejecutándose ya. Una vez que el complemento esté ejecutándose, haz clic en el botón "OPEN WEB UI" para acceder al Panel de Control de EMQX.

En la página de inicio de sesión del Panel de Control de EMQX, introduce el nombre de usuario y contraseña predeterminados.

- Nombre de usuario predeterminado: **admin**
- Contraseña predeterminada: **public**

Haz clic en el botón "Login" para acceder al Panel de Control de EMQX.

En el Panel de Control de EMQX, navega a la sección **Authentication** desde el menú de la barra lateral izquierda. Haz clic en la pestaña **Databases**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

Haz clic en el botón **Create**. En el menú desplegable **Mechanism**, selecciona **Password-Based**, En el menú desplegable **Backend**, selecciona **Built-in Database**. Haz clic en el botón "Create" para crear la Base de Datos Integrada.

Después de crear la Base de Datos Integrada, haz clic en la pestaña **Users** en la sección "Authentication". Haz clic en el botón "Add User".

- En el campo "Username", introduce "seeed".
- En el campo "Password", introduce "seeed".

Regresa a la pestaña "Databases" en la sección "Authentication". Localiza la base de datos creada anteriormente en la lista de bases de datos.

Haz clic en el interruptor junto a la base de datos para habilitarla. El estado de la base de datos debería cambiar a "Enabled".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

### Paso 9. Configurar la red para Grove Vision AI V2

Conecta el Grove Vision AI V2 a tu computadora y abre la [página de configuración del Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/config).

Después de hacer clic en la esquina superior derecha para conectar al Grove Vision AI V2, por favor activa el botón MQTT e introduce la siguiente información que necesitas completar en la página.

- **SSID & Password**: El dispositivo necesita estar en la misma LAN que el host donde está instalado Home Assistant. Así que por favor configura la red bajo la misma LAN. XIAO solo soporta WiFi de 2.4G, la red de 5G no está disponible.
- **Encryption**: Selecciona **AUTO**.
- **Host**: Dirección IP del host donde está instalado Home Assistant.
- **Port**: `1883`.
- **clientId**: Para el número de identificación del dispositivo, por favor añade el prefijo `grove_vision_ai_v2_` seguido del número de ID personalizado.
- **username**: El nombre de la base de datos EMQX que acabas de crear.
- **password**: La contraseña de la base de datos EMQX que acabas de crear.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/13.png" style={{width:900, height:'auto'}}/></div>

Luego haz clic en el botón Save de abajo. Después de guardar, **no significa que el Grove Vision AI V2 haya sido escrito correctamente**, por favor regresa a **Process** en la barra de menú izquierda y verifica si la dirección IP del dispositivo ha aparecido y si el estado de la conexión MQTT es correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Cuando se muestra la Dirección IP, significa que no hay problema con WIFI, y el Estado del servicio debe ser el texto en la figura para representar normalidad, nota que si WIFI no es normal, MQTT definitivamente no es normal; cuando acabas de cambiar, puede mostrar desconectado, y necesitas esperar unos 10s aproximadamente, no necesitas refrescar para ver el estado, y mostrará el estado más nuevo después del cambio de estado automáticamente.
:::

Si la conexión está funcionando, teóricamente puedes ver el flujo de datos en EMQX.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/3.png" style={{width:900, height:'auto'}}/></div>

:::note
Dado que las conexiones de Node-RED aún no han sido configuradas, deberías ver solo una All Connections en EMQX.
:::

## Configurar Node-RED

En este paso, configuraremos el complemento Node-RED en Home Assistant para crear los flujos necesarios para integrar el Grove Vision AI V2 con Home Assistant.

### Paso 10. Configurar y ejecutar Node-RED

Abre tu interfaz web de Home Assistant y navega al menú "Settings". Haz clic en la opción "Add-ons" para acceder a la página de gestión de complementos. Localiza el complemento "Node-RED" y haz clic en él para abrir su página de detalles. Haz clic en la pestaña "Configuration".

En la configuración de Node-RED, localiza la opción **ssl**. Desactiva la opción **ssl**. Haz clic en el botón **SAVE** para aplicar los cambios de configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/14.png" style={{width:900, height:'auto'}}/></div>

Haz clic en el botón "START" para iniciar el complemento Node-RED. Espera a que el complemento se inicie correctamente. Puedes revisar los registros para monitorear el progreso. Una vez que el complemento Node-RED esté ejecutándose, haz clic en el botón "OPEN WEB UI" para acceder al Editor de Node-RED.

### Paso 11. Instalar el nodo `msg-speed`

En el Editor de Node-RED, haz clic en el menú hamburguesa (tres líneas horizontales) en la esquina superior derecha. Selecciona **Manage palette** del menú.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/15.png" style={{width:900, height:'auto'}}/></div>

En la barra lateral **Palette**, haz clic en la pestaña **Install**. En el cuadro de búsqueda, escribe **msg-speed** y presiona Enter. Localiza el nodo **msg-speed** en los resultados de búsqueda y haz clic en el botón **Install** junto a él. Espera a que se complete la instalación, luego cierra la barra lateral "Palette".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/16.png" style={{width:900, height:'auto'}}/></div>

### Paso 12. Importar el JSON del Flujo

Por favor descarga nuestro archivo JSON preparado `crowd_density.json` para el Flujo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/crowd_density.json" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Descargar el archivo</font></span></strong>
    </a>
</div>

En el Editor de Node-RED, haz clic en el menú hamburguesa nuevamente. Selecciona "Import" del menú. En el diálogo "Import nodes", haz clic en el botón "select a file to import". Navega y selecciona el archivo JSON proporcionado que contiene el flujo de Node-RED preconfigurado. Haz clic en el botón "Import" para importar el flujo a Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/17.png" style={{width:900, height:'auto'}}/></div>

Entonces podrás ver nuestro Flujo de Node-RED preparado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/18.png" style={{width:900, height:'auto'}}/></div>

### Paso 13. Configurar el nodo del Broker MQTT

En el flujo importado, localiza el nodo **mqtt-broker**. Haz doble clic en el nodo para abrir su configuración.

En el campo "Server", ingresa la dirección IP del broker EMQX (por ejemplo, localhost o la dirección IP de la instancia de Home Assistant).

En el campo "Username", ingresa el nombre de usuario que creaste en la Base de Datos EMQX (por ejemplo, "seeed").

En el campo "Password", ingresa la contraseña que estableciste para el usuario en la Base de Datos EMQX (por ejemplo, "seeed"). Haz clic en el botón "Done" para guardar la configuración del broker MQTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/19.png" style={{width:900, height:'auto'}}/></div>

### Paso 14. Verificar la URL del nodo POST

En el flujo importado, localiza el nodo "POST". Haz doble clic en el nodo para abrir su configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/20.png" style={{width:900, height:'auto'}}/></div>

Verifica que el campo "URL" contenga la dirección IP correcta del contenedor Docker pysscma que obtuviste en el **[Paso 7](#step-7-obtaining-the-ip-address)**. Si es necesario, actualiza la URL para que coincida con la dirección IP del Docker pysscma. Haz clic en el botón "Done" para guardar la configuración del nodo POST.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/21.png" style={{width:900, height:'auto'}}/></div>

### Paso 15. Desplegar el Flujo

Haz clic en el botón **Deploy** en la esquina superior derecha del Editor de Node-RED para desplegar el flujo. El flujo ahora debería estar activo y listo para manejar datos del Grove Vision AI V2.

## Configuración del Panel de Densidad de Multitudes

En este paso, accederemos al panel de Node-RED para monitorear e interactuar con los datos del dispositivo Grove Vision AI V2.

Abre un navegador web en tu computadora o dispositivo móvil. En la barra de direcciones, ingresa la URL en el siguiente formato:

```
http://homeassistant:1880/endpoint/ui/
```

Ahora puedes monitorear el flujo de datos e interactuar con los nodos en el panel de Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/22.png" style={{width:900, height:'auto'}}/></div>

En primer lugar, por favor ingresa tu clientId en la esquina superior izquierda. Luego haz clic en el botón **REFRESH** y comienza a invocar. Entonces las imágenes del Grove Vision AI V2 se transmiten en tiempo real. Puedes habilitar o deshabilitar las siguientes funciones según tus necesidades reales.

- **region**: Habilitar esta función inicia la función de Conteo de Área Cruzada. Por defecto, cuando esta función está activada, la imagen se dividirá en dos áreas, área A y área B, a lo largo de la línea naranja en el medio. Cuando un marco de identificación viaja desde el área a cruzando la línea naranja hacia el área b, entonces el **COUNT (A to B)** en el lado izquierdo del centro se incrementa en 1. Por el contrario, el **COUNT (B to A)** en el lado derecho se incrementa en 1.

  - **pos1**: Esto se usa para establecer la posición del punto final izquierdo (superior) del segmento de línea que divide el área.

  - **pos2**: Esto se usa para establecer la posición del punto final derecho (inferior) del segmento de línea que divide el área.

  - **vertical**: Por defecto, el segmento de línea que divide el área es la línea horizontal. Cuando este botón está activado, los segmentos de línea se convierten en líneas verticales.

- **box**: Por defecto, el cuadro de reconocimiento está cerrado. Cuando el botón está activado, el cuadro de reconocimiento se muestra en tiempo real en la pantalla central.

- **track**: Por defecto, la funcionalidad de Seguimiento de Objetivo está desactivada. Si la función está activada, entonces la ruta tomada por el objeto reconocido se traza como una línea verde delgada en la imagen central.

- **label**: Por defecto, la etiqueta de reconocimiento está cerrada. Cuando el botón está activado, la etiqueta de reconocimiento se muestra en tiempo real en la pantalla central.

- **heatmap**: Por defecto, el Mapa de Calor de Objetivo está desactivado. Cuando el botón está activado, se muestra la densidad de multitud del área actualmente detectada. Mientras más rojo sea el color de un área, más ocurrencias históricas de objetos monitoreados se detectan en esa área, y mientras más azul, menos.

**Performance** en el extremo derecho es la velocidad de fotogramas en tiempo real, Image es la velocidad de fotogramas de la transferencia de pantalla, y Overlay es la velocidad de fotogramas de la pantalla con varias funciones activadas.

La pantalla en el centro muestra la pantalla de vista previa en vivo con las diversas funciones activadas, y la ventana pequeña a la derecha muestra la pantalla original.

## Solución de problemas

### P1: ¿Qué modelos soporta este proyecto?

Actualmente el proyecto solo soporta modelos para reconocimiento de objetivos, es decir, la clase de modelos con marcos de reconocimiento, y no soporta, por ejemplo, modelos como Detección de Pose Humana y Detección de Pose de Mano.

### P2: ¿Por qué el panel no responde después de que he activado los botones para ciertas funciones?

Como esta página está construida en Node-RED, la página puede no actualizarse en tiempo real en algunos casos debido a la optimización del núcleo del navegador. Puedes intentar actualizar la pantalla haciendo clic en el botón REFRESH y el botón invoke, o actualizando la página web actual.

## Recursos

- **[GITHUB]** [Código fuente para pysscma](https://github.com/Seeed-Studio/python-sscma/tree/feat/supervision?tab=readme-ov-file#sample)

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
