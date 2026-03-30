---
description: Presentación de cómo conectar Grove Vision AI V2 a HomeAssistant.
title: Aplicación para HomeAssistant
keywords:
  - visión AI
  - home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/application-for-homeassistant
aliases:
  - /connect_vision_ai_v2_to_ha
sidebar_position: 2
last_update:
  date: 01/10/2024
  author: Citric
createdAt: '2024-01-11'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/application/application-for-homeassistant/
---
# Conectar Grove Vision AI V2 a Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

Integrar Grove Vision AI V2 en Home Assistant puede elevar tu configuración de hogar inteligente al añadir capacidades avanzadas de detección visual. Esta integración permite un análisis ambiental en tiempo real y automatizaciones personalizadas, haciendo que tu entorno doméstico sea más inteligente y receptivo.

Para facilitar esta integración, el plugin SenseCraft-HomeAssistant, accesible a través de la tienda HACS, conecta tu Grove Vision AI V2 a Home Assistant mediante la plataforma de datos SenseCraft. Este proceso está optimizado y es fácil de usar, requiriendo solo el inicio de sesión en una cuenta SenseCraft para incorporar tus dispositivos y datos de sensores en el ecosistema de Home Assistant, listo para que lo personalices y controles.

A continuación se muestra el marco de contenido principal de este artículo.

1. [Instalar el plugin HACS](#instalar-el-plugin-hacs): Instala la Home Assistant Community Store (HACS) para habilitar la instalación del plugin SenseCraft de Seeed Studio dentro de Home Assistant.
2. [Instalar el plugin SenseCraft](#instalar-el-plugin-sensecraft): Instala el plugin SenseCraft de Seeed Studio, que permite el despliegue rápido de los productos de Seeed Studio en Home Assistant.
3. [Preparar el modelo para Grove Vision AI V2](#preparar-el-modelo-para-grove-vision-ai-v2): Selecciona y despliega el modelo que deseas usar para Grove Vision AI V2 y, a partir de entonces, Home Assistant recibirá la información de la escena de reconocimiento y los resultados de Vision AI.
4. [Crear servicios MQTT en Home Assistant](#crear-servicios-mqtt-en-home-assistant): Aprovecha un servicio MQTT local para transmitir datos desde Grove Vision AI V2 y XIAO a Home Assistant.
5. [Integrar Grove Vision AI V2 en Home Assistant](#integrar-grove-vision-ai-v2-en-home-assistant): Integra Grove Vision AI V2 en Home Assistant y configura un panel visual para la configuración.

## Introducción

Antes de comenzar con el contenido del tutorial de este artículo, es posible que necesites tener preparado el siguiente hardware.

### Materiales necesarios

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Home Assistant Green es la forma más sencilla y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente de forma predeterminada. Esta placa se beneficia del próspero ecosistema de Home Assistant y se mejorará cada mes gracias al código abierto.

Recomendamos usar Home Assistant Green como el host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con Supervisor.

A continuación, debes conectar el XIAO y Grove Vision AI V2 mediante la hilera de pines (o usar la placa de expansión y la interfaz Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## Instalar el plugin HACS

### Paso 1. Activar el Modo Avanzado en Home Assistant

Para desbloquear todo el potencial de Home Assistant y acceder a las funciones avanzadas, puedes habilitar el "Advanced Mode" en la interfaz de usuario.

Navega a tu [interfaz web de Home Assistant](http://homeassistant.local:8123). Haz clic en el icono de tu perfil en la esquina inferior izquierda de la barra lateral de Home Assistant. En la página de tu perfil, desplázate hacia abajo para encontrar el interruptor de **Advanced Mode**. Cambia el interruptor a la posición de encendido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Instalar Terminal & SSH

Haz clic en **Settings** en la barra lateral para acceder al menú de configuración. Haz clic en **Add-ons** para acceder a la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Utiliza la barra de búsqueda o navega por los complementos disponibles para encontrar **Terminal & SSH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

Una vez que hayas localizado **Terminal & SSH**, haz clic en él para ver los detalles. En la página del complemento, verás una descripción general, documentación y opciones de configuración. Para instalar el complemento, haz clic en el botón **Install**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Instalar HACS

Busca el **Terminal & SSH** descargado recientemente en la barra lateral. En la terminal, navega al directorio `config`, que es la raíz de tu configuración de Home Assistant:

```
cd /config
```

Ejecuta el siguiente comando para descargar y ejecutar el script de instalación de HACS:

```
wget -q -O - https://install.hacs.xyz | bash -
```

Después de que el script de instalación haya finalizado, debes reiniciar Home Assistant para aplicar los cambios. Puedes reiniciar Home Assistant a través de la interfaz de usuario yendo a **Settings > System > Restart**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

Después del reinicio, haz clic en **Settings** en la barra lateral para abrir el menú de configuración. Dentro del menú de configuración, navega a **Devices & Services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **ADD INTEGRATION** para añadir una nueva integración a tu configuración de Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

En la barra de búsqueda, escribe **HACS** para buscar la integración Home Assistant Community Store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

Si se encuentra HACS, debería aparecer en la lista de integraciones disponibles. Haz clic en él para iniciar el proceso de instalación.

Es posible que aparezca un acuerdo de licencia o términos de servicio. Léelo detenidamente y, si estás de acuerdo con los términos, marca todas las casillas para indicar tu conformidad. Haz clic en **SUBMIT** para continuar con la instalación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

A continuación, se te pedirá que inicies sesión con tu cuenta de GitHub. Esto es necesario porque HACS se integra con GitHub para gestionar la instalación de integraciones y plugins creados por la comunidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

Sigue las instrucciones para autorizar a Home Assistant a acceder a tu cuenta de GitHub. Esto normalmente implicará introducir un código de verificación proporcionado por GitHub para confirmar tu identidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Una vez que hayas autorizado a Home Assistant a usar tu cuenta de GitHub, HACS terminará de instalarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

Es posible que necesites reiniciar Home Assistant para que HACS se integre completamente en tu sistema.

## Instalar el plugin SenseCraft

### Paso 4. Instalación del plugin SenseCraft a través de HACS

Busca HACS en la barra lateral y haz clic en él para abrir la interfaz de HACS. En la esquina inferior derecha encontrarás un botón de menú (tres puntos o un signo más, dependiendo de tu versión de HACS). Haz clic en **Custom repositories**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

Aparecerá un cuadro de diálogo pidiéndote que introduzcas la URL del repositorio. Aquí deberás introducir la URL del repositorio personalizado para la integración SenseCraft. Después de introducir la URL, selecciona la categoría (para la integración SenseCraft, deberás seleccionar **Integration**).

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **Add**. El repositorio ahora se ha añadido a tu HACS y deberías poder encontrar la integración de SenseCraft en la lista bajo **Integrations**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

Localiza la integración de SenseCraft y haz clic en "DOWNLOAD".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

Hasta este punto, hemos completado con éxito la instalación del plugin SenseCraft.

## Preparar el modelo para Grove Vision AI V2

### Paso 5. Grabar el firmware para XIAO ESP32C3

Conecta el XIAO ESP32C3 a tu ordenador usando un cable USB-C adecuado. Asegúrate de que los controladores del dispositivo estén instalados correctamente.

Abre la [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) en tu navegador web.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI Tool</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

Luego selecciona **XIAO ESP32S3** y haz clic en **Connect**.

:::caution
Ten en cuenta que aunque aquí se selecciona el XIAO ESP32-S3, ¡seguimos utilizando el XIAO ESP32-C3!
:::

Haz clic en el botón de abajo para descargar el archivo de firmware y haz clic en el botón **Add File** en la página web para grabar el firmware `SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin` en la dirección `0x0`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Por último, haz clic en el botón **Flash** y espera a que el programa se cargue correctamente antes de desconectar el XIAO ESP32C3 del ordenador.

### Paso 6. Conectar el Grove Vision AI V2 al SenseCraft AI Model Assistant

Primero, necesitamos abrir la página principal de SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>
<br />

Haz clic en **Vision Workspace -> Grove Vision AI V2** en el menú de navegación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

Utiliza un cable tipo Type-C para conectar **Grove Vision AI V2** a tu ordenador.

Luego haz clic en el botón **Connect** en la esquina superior izquierda y selecciona el número de puerto del dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### Paso 7. Cargar un modelo adecuado

A continuación, selecciona el modelo apropiado que quieras utilizar después de hacer clic en **Select Model** para cargarlo en Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

Espera de 1 a 2 minutos para que el modelo se cargue.

### Paso 8. Observaciones

Una vez que el modelo se haya cargado correctamente, podrás ver la transmisión en vivo de la cámara Grove Vision AI V2 en la vista previa de la derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

Podemos ver que en los ajustes de vista previa del lado derecho hay dos opciones de configuración que se pueden cambiar para optimizar la precisión de reconocimiento del modelo.

:::tip
Si no se muestra ninguna pantalla en Preview o no hay información en la información del modelo, puede haber un problema con el modelo y necesitas volver a seleccionarlo o cargarlo de nuevo.
:::

## Crear servicios MQTT en Home Assistant

### Paso 9. Instalar EMQX

Haz clic en **Settings** en la barra lateral para acceder al menú de configuración. Haz clic en **Add-ons** para acceder a la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Utiliza la barra de búsqueda o navega por los complementos disponibles para encontrar **emqx**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

Una vez que hayas localizado **EMQX**, haz clic en él para ver los detalles. En la página del complemento verás una descripción general, documentación y opciones de configuración. Para instalar el complemento, haz clic en el botón **Install**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

Una vez instalado el complemento EMQX, activa los interruptores **Start on boot**, **Watchdog** y **Show in sidebar**. Haz clic en **Start** para iniciar EMQX.

En la página de inicio de sesión del panel de EMQX, introduce el nombre de usuario y la contraseña predeterminados.

- Nombre de usuario predeterminado: **admin**
- Contraseña predeterminada: **public**

Haz clic en el botón "Login" para acceder al panel de EMQX.

En el panel de EMQX, navega a la sección **Authentication** desde el menú de la barra lateral izquierda. Haz clic en la pestaña **Databases**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

Haz clic en el botón **Create**. En el desplegable **Mechanism**, selecciona **Password-Based**, en el desplegable **Backend**, selecciona **Built-in Database**. Haz clic en el botón "Create" para crear la base de datos integrada.

Después de crear la base de datos integrada, haz clic en la pestaña **Users** en la sección "Authentication". Haz clic en el botón "Add User".

- En el campo "Username", introduce "seeed".
- En el campo "Password", introduce "seeed".

Vuelve a la pestaña "Databases" en la sección "Authentication". Localiza la base de datos creada anteriormente en la lista de bases de datos.

Haz clic en el interruptor junto a la base de datos para activarla. El estado de la base de datos debería cambiar a "Enabled".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## Integrar Grove Vision AI V2 en Home Assistant

### Paso 10. Configurar la red para Grove Vision AI V2 y XIAO

Conecta el Grove Vision AI V2 a tu ordenador y abre la página de configuración de Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

Después de hacer clic en la esquina superior izquierda para conectarte a Grove Vision AI V2, enciende el botón MQTT e introduce la siguiente información que necesitas rellenar en la página.

- **SSID & Password**: El dispositivo debe estar en la misma LAN que el host donde está instalado Home Assistant. Así que configura la red bajo la misma LAN. XIAO solo soporta WiFi de 2,4G, la red de 5G no está disponible.
- **Encryption**: Selecciona **AUTO**.
- **Host**: Dirección IP del host donde está instalado Home Assistant.
- **Port**: `1883`.
- **clientId**: Para el número de identificación del dispositivo, pon el prefijo `grove_vision_ai_v2_` seguido del número de ID personalizado.
- **username**: El nombre de la base de datos EMQX que acabas de crear.
- **password**: La contraseña de la base de datos EMQX que acabas de crear.

Luego haz clic en el botón **Apply** de abajo. Después de guardar, **no significa que Grove Vision AI esté conectado a la red**, vuelve a **Process** en la barra de menú de la izquierda y comprueba si ha aparecido la dirección IP del dispositivo y si el estado de la conexión MQTT es correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Cuando se muestra la dirección IP, significa que no hay problema con el WIFI, y el estado de Service debe ser el texto de la figura para representar que es normal; ten en cuenta que si el WIFI no es normal, MQTT definitivamente no será normal; cuando acabas de cambiar, puede mostrar sin conexión, y necesitas esperar unos 10 s aproximadamente, no necesitas actualizar para ver el estado, y mostrará automáticamente el estado más reciente después de que cambie.
:::

### Paso 11. Integración en Home Assistant

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="Escenario 1. Si se ha encontrado el dispositivo">

Hasta este punto, normalmente, ya puedes buscar Grove Vision AI V2 dentro de **Settings->Devices & services** en Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en el botón **Configure** para establecer la información relevante y habrás terminado de añadir el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

En **Settings->Devices & services**, podrás ver los detalles del dispositivo y mostrar las pestañas compatibles; puedes añadir tantas pestañas como quieras para mostrarlas en la vista general.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note

1. Si configuraste un nombre de usuario y una contraseña en los pasos anteriores, es posible que se te pida que los introduzcas cuando añadas un dispositivo.
2. Si tienes más de un dispositivo Vision AI para añadir a Home Assistant, presta atención al número de ID del dispositivo, que sirve como marca distintiva entre las diferentes banderas Grove.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="Escenario 2. Si no se encuentra el dispositivo">

Si hay demasiados dispositivos en tu casa, a veces Home Assistant puede no encontrarlos directamente mediante búsqueda. En ese caso, puede que necesites añadir los dispositivos manualmente.

En la página de **Settings**, elige **Devices & Services**.

Luego haz clic en el botón **ADD INTEGRATION** en la esquina inferior derecha y busca **SenseCraft**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en SenseCraft y selecciona Acción como **Add device using host/id**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

Haz clic en **SUBMIT**, luego selecciona el tipo de tu dispositivo en el menú desplegable, como `Grove Vision AI V2`, y haz clic en **SUBMIT** de nuevo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

En el siguiente campo de entrada, introduce el ID exacto de tu dispositivo. Este ID suele encontrarse en el propio dispositivo o en el sitio web de SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

El siguiente paso es configurar el servicio MQTT. Introduce la información que coincida con los detalles del servicio MQTT que has configurado en el sitio web. Si no has configurado un nombre de usuario y una contraseña previamente, no necesitas rellenarlos aquí. Luego haz clic en **SUBMIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: La dirección IP de Home Assistant.
- **Port**: `1883`.
- **clientId**: Para el número de identificación del dispositivo, por favor antepón `grove_vision_ai_v2_` seguido del número de ID personalizado.
- **username**: El nombre de la base de datos EMQX que acabas de crear.
- **password**: La contraseña de la base de datos EMQX que acabas de crear.

</TabItem>

</Tabs>

Si la configuración es correcta, el sistema normalmente te pedirá que selecciones una ubicación para tu dispositivo. Elige la habitación o zona adecuada según tu situación real y haz clic en **Finish**.

Una vez completada la configuración, puedes ver tu dispositivo y su estado en la página "Overview" de Home Assistant.

Seguir estos pasos debería permitirte añadir correctamente el dispositivo "SenseCraft" a tu instancia de Home Assistant y configurarlo para usar el servicio MQTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## Solución de problemas

### P1: ¿Qué debo hacer si dejo de ver los mensajes de datos en HA después de que Grove Vision AI V2 se desconecte?

Es posible que necesites eliminar el dispositivo y volver a añadirlo en SenseCraft. Después de eliminarlo, puede que no pueda ser buscado automáticamente de nuevo y tendrás que añadir el dispositivo manualmente. Consulta los **[pasos aquí](#paso-11-integración-en-home-assistant)** para volver a añadir el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
