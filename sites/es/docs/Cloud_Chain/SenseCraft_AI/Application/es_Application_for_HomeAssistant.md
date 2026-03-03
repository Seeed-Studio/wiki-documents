---
description: Introduciendo cómo conectar Grove Vision AI V2 a HomeAssistant.
title: Aplicación para HomeAssistant
keywords:
- vision AI
- home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/application-for-homeassistant
aliases:
  - /es/connect_vision_ai_v2_to_ha
sidebar_position: 1
last_update:
  date: 01/10/2024
  author: Citric
---

# Conectar Grove Vision AI V2 a Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

Integrar Grove Vision AI V2 en Home Assistant puede elevar tu configuración de hogar inteligente agregando capacidades avanzadas de detección visual. Esta integración permite análisis ambiental en tiempo real y automatización personalizada, haciendo que tu entorno doméstico sea más inteligente y receptivo.

Para facilitar esta integración, el plugin SenseCraft-HomeAssistant, accesible a través de la tienda HACS, conecta tu Grove Vision AI V2 a Home Assistant a través de la Plataforma de Datos SenseCraft. Este proceso es simplificado y fácil de usar, requiriendo solo un inicio de sesión de cuenta SenseCraft para traer tu dispositivo y datos de sensores al ecosistema de Home Assistant, listo para que personalices y controles.

A continuación se presenta el marco de contenido principal de este artículo.

1. [Instalando el plugin HACS](#instalando-el-plugin-hacs): Instalar la Tienda Comunitaria de Home Assistant (HACS) para habilitar la instalación del plugin SenseCraft de Seeed Studio dentro de Home Assistant.
2. [Instalando el plugin SenseCraft](#instalando-el-plugin-sensecraft): Instalar el plugin SenseCraft de Seeed Studio, que permite el despliegue rápido de productos de Seeed Studio en Home Assistant.
3. [Preparando el modelo para Grove Vision AI V2](#preparando-el-modelo-para-grove-vision-ai-v2): Seleccionar y desplegar el modelo que deseas usar para el Grove Vision AI V2, y posteriormente, Home Assistant recibirá la información de la escena de reconocimiento y resultados del Vision AI.
4. [Construyendo Servicios MQTT en Home Assistant](#construyendo-servicios-mqtt-en-home-assistant): Aprovechar un servicio MQTT local para transmitir datos del Grove Vision AI V2 y XIAO a Home Assistant.
5. [Integrar Grove Vision AI V2 en Home Assistant](#integrar-grove-vision-ai-v2-en-home-assistant): Integrar Grove Vision AI V2 en Home Assistant y configurar un panel visual para la configuración.

## Primeros Pasos

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Home Assistant Green es la forma más fácil y enfocada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente por defecto. Esta placa se beneficia del próspero ecosistema de Home Assistant y será mejorada cada mes por código abierto.

Recomendamos usar Home Assistant Green como el host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con un Supervisor.

Luego necesitas conectar el XIAO y Grove Vision AI V2 a través de la fila de pines (o usar la placa de expansión e interfaz Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## Instalando el plugin HACS

### Paso 1. Abrir Modo Avanzado en Home Assistant

Para desbloquear todo el potencial de Home Assistant y obtener acceso a características avanzadas, puedes habilitar el "Modo Avanzado" en la interfaz de usuario.

Navega a tu [interfaz web de Home Assistant](http://homeassistant.local:8123). Haz clic en el ícono de tu perfil en la esquina inferior izquierda de la barra lateral de Home Assistant. En tu página de perfil, desplázate hacia abajo para encontrar el interruptor de **Modo Avanzado**. Cambia el interruptor a la posición de encendido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Instalar Terminal & SSH

Haz clic en **Configuración** en la barra lateral para acceder al menú de configuración. Haz clic en **Complementos** para acceder a la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Usa la barra de búsqueda o navega a través de los complementos disponibles para encontrar **Terminal & SSH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

Una vez que hayas localizado **Terminal & SSH**, haz clic en él para ver los detalles. En la página del complemento, verás una descripción general, documentación y opciones de configuración. Para instalar el complemento, haz clic en el botón **Instalar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Instalar HACS

Encuentra el **Terminal & SSH** recientemente descargado en la barra lateral. En el terminal, navega al directorio config, que es la raíz de tu configuración de Home Assistant:

```
cd /config
```

Ejecuta el siguiente comando para descargar y ejecutar el script de instalación de HACS:

```
wget -q -O - https://install.hacs.xyz | bash -
```

Después de que el script de instalación haya terminado, necesitas reiniciar Home Assistant para aplicar los cambios. Puedes reiniciar Home Assistant a través de la interfaz yendo a **Settings > System > Restart**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

Después del reinicio, haz clic en **Settings** en la barra lateral para abrir el menú de configuración. Dentro del menú de configuración, navega a **Devices & Services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **ADD INTEGRATION** para agregar una nueva integración a tu configuración de Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

En la barra de búsqueda, escribe **HACS** para buscar la integración de Home Assistant Community Store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

Si se encuentra HACS, debería aparecer en la lista de integraciones disponibles. Haz clic en él para iniciar el proceso de instalación.

Puede aparecer un acuerdo de licencia o términos de servicio. Lee el acuerdo cuidadosamente, y si estás de acuerdo con los términos, marca todas las casillas para indicar tu acuerdo. Haz clic en **SUBMIT** para proceder con la instalación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

A continuación, se te pedirá que inicies sesión con tu cuenta de GitHub. Esto es necesario porque HACS se integra con GitHub para gestionar la instalación de integraciones y plugins creados por la comunidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

Sigue las instrucciones para autorizar a Home Assistant a acceder a tu cuenta de GitHub. Esto típicamente involucrará ingresar un código de verificación proporcionado por GitHub para confirmar tu identidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Una vez que hayas autorizado a Home Assistant a usar tu cuenta de GitHub, HACS terminará de instalarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

Puede que necesites reiniciar Home Assistant para que HACS se integre completamente en tu sistema.

## Instalando el plugin SenseCraft

### Paso 4. Instalación del plugin SenseCraft a través de HACS

Busca HACS en la barra lateral y haz clic en él para abrir la interfaz de HACS. En la esquina inferior derecha, encontrarás un botón de menú (tres puntos o un signo más, dependiendo de tu versión de HACS). Haz clic en **Custom repositories**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

Aparecerá un cuadro de diálogo pidiéndote que ingreses la URL del repositorio. Aquí, ingresarás la URL del repositorio personalizado para la integración SenseCraft. Después de ingresar la URL, selecciona la categoría (para la integración SenseCraft, seleccionarías **Integration**).

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **Add**. El repositorio ahora está agregado a tu HACS, y deberías poder encontrar la integración SenseCraft en la lista bajo **Integrations**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

Localiza la integración SenseCraft y haz clic en "DOWNLOAD".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

En este punto, hemos completado exitosamente la instalación del plugin SenseCraft.

## Preparando el modelo para Grove Vision AI V2

### Paso 5. Flashear Firmware para XIAO ESP32C3

Conecta el XIAO ESP32C3 a tu computadora usando un cable USB-C adecuado. Asegúrate de que los controladores del dispositivo estén instalados correctamente.

Abre la [Herramienta SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) en tu navegador web.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Herramienta SenseCraft AI</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

Luego selecciona **XIAO ESP32S3** y haz clic en **Connect**.

:::caution
¡Ten en cuenta que aunque aquí se selecciona el XIAO ESP32S3, todavía estamos usando el XIAO ESP32C3!
:::

Haz clic en el botón de abajo para descargar el archivo de firmware y haz clic en el botón **Add File** en la página web para flashear el firmware `SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin` para la dirección `0x0`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Descargar el archivo</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, haz clic en el botón **Flash** y espera a que el programa se cargue exitosamente antes de desconectar el XIAO ESP32C3 de la computadora.

### Paso 6. Conectar el Grove Vision AI V2 al Asistente de Modelo AI de SenseCraft

Primero, necesitamos abrir la página principal de SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir a SenseCraft AI</font></span></strong></a>
</div>
<br />

Haz clic en **Vision Workspace -> Grove Vision AI V2** en el menú de navegación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

Por favor usa un cable tipo Type-C para conectar **Grove Vision AI V2** a tu computadora.

Luego haz clic en el botón **Connect** en la esquina superior izquierda y selecciona el número de puerto del dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### Paso 7. Cargar un modelo adecuado

Luego, por favor selecciona el modelo apropiado que deseas usar después de hacer clic en **Select Model** para cargarlo al Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

Espera de 1 a 2 minutos para que el modelo se cargue.

### Paso 8. Observaciones

Una vez que el modelo se cargue exitosamente, podrás ver la transmisión en vivo de la cámara Grove Vision AI V2 en la Vista Previa de la derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

Podemos ver que en la Configuración de Vista Previa del lado derecho, hay dos opciones de configuración que se pueden cambiar para optimizar la precisión de reconocimiento del modelo.

:::tip
Si no hay pantalla mostrada en Vista Previa o no hay información en la información del modelo, puede haber un problema con el modelo y necesitas reseleccionar el modelo o cargarlo nuevamente.
:::

## Construyendo Servicios MQTT en Home Assistant

### Paso 9. Instalar EMQX

Haz clic en **Settings** en la barra lateral para acceder al menú de configuración. Haz clic en **Add-ons** para acceder a la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Usa la barra de búsqueda o navega a través de los complementos disponibles para encontrar **emqx**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

Una vez que hayas localizado **EMQX**, haz clic en él para ver los detalles. En la página del complemento, verás una descripción general, documentación y opciones de configuración. Para instalar el complemento, haz clic en el botón **Install**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el Complemento EMQX esté instalado, activa los interruptores **Start on boot**, **Watchdog** y **Show in sidebar**. Haz clic en **Start** para iniciar EMQX.

En la página de inicio de sesión del Panel de EMQX, ingresa el nombre de usuario y contraseña predeterminados.

- Nombre de usuario predeterminado: **admin**
- Contraseña predeterminada: **public**

Haz clic en el botón "Login" para acceder al Panel de EMQX.

En el Panel de EMQX, navega a la sección **Authentication** desde el menú de la barra lateral izquierda. Haz clic en la pestaña **Databases**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

Haz clic en el botón **Create**. En el menú desplegable **Mechanism**, selecciona **Password-Based**, En el menú desplegable **Backend**, selecciona **Built-in Database**. Haz clic en el botón "Create" para crear la Base de Datos Integrada.

Después de crear la Base de Datos Integrada, haz clic en la pestaña **Users** en la sección "Authentication". Haz clic en el botón "Add User".

- En el campo "Username", ingresa "seeed".
- En el campo "Password", ingresa "seeed".

Regresa a la pestaña "Databases" en la sección "Authentication". Localiza la base de datos creada previamente en la lista de bases de datos.

Haz clic en el interruptor junto a la base de datos para habilitarla. El estado de la base de datos debería cambiar a "Enabled".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## Integrar Grove Vision AI V2 en Home Assistant

### Paso 10. Configurar la red para Grove Vision AI V2 y XIAO

Conecta el Grove Vision AI V2 a tu computadora y abre la página de configuración del Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

Después de hacer clic en la esquina superior izquierda para conectar al Grove Vision AI V2, por favor activa el botón MQTT e ingresa la siguiente información que necesitas completar en la página.

- **SSID y Password**: El dispositivo necesita estar en la misma LAN que el host donde está instalado Home Assistant. Así que por favor configura la red bajo la misma LAN. XIAO solo soporta WiFi 2.4G, la red 5G no está disponible.
- **Encryption**: Selecciona **AUTO**.
- **Host**: Dirección IP del host donde está instalado Home Assistant.
- **Port**: `1883`.
- **clientId**: Para el número de identificación del dispositivo, por favor usa el prefijo `grove_vision_ai_v2_` seguido del número de ID personalizado.
- **username**: El nombre de la base de datos EMQX que acabas de crear.
- **password**: La contraseña de la base de datos EMQX que acabas de crear.

Luego haz clic en el botón **Apply** de abajo. Después de guardar, **no significa que Grove Vision AI esté conectado a la red**, por favor regresa a **Process** en la barra de menú izquierda y verifica si la dirección IP del dispositivo ha aparecido y si el estado de la conexión MQTT es correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Cuando se muestra la dirección IP, significa que no hay problema con WIFI, y el estado del servicio debe ser el texto en la figura para representar normalidad, nota que si WIFI no es normal, MQTT definitivamente no es normal; cuando acabas de cambiar, puede mostrar desconectado, y necesitas esperar alrededor de 10s más o menos, no necesitas refrescar para ver el estado, y mostrará el estado más nuevo después del cambio de estado automáticamente.
:::

### Paso 11. Integración en Home Assistant

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="Escenario 1. Si el dispositivo ha sido encontrado">

En este punto, normalmente, ya puedes buscar Grove Vision AI V2 dentro de **Settings->Devices & services** en Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

Por favor haz clic en el botón **Configure** para establecer la información relevante, y habrás terminado de agregar el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

En **Settings->Devices & services**, podrás ver los detalles del dispositivo y mostrar las pestañas soportadas, puedes agregar tantas pestañas como quieras mostrar en la vista general.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note

1. Si configuraste un nombre de usuario y contraseña en los pasos anteriores, puede que se te pida ingresarlos cuando agregues un dispositivo.
2. Si tienes más de un dispositivo Vision AI para agregar a Home Assistant, mantente atento al número de ID del dispositivo, que sirve como marca distintiva entre las diferentes banderas Grove.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="Escenario 2. Si el dispositivo no es encontrado">

Si hay demasiados dispositivos en tu hogar, puede que no sean directamente buscables por Home Assistant a veces. Entonces en este momento puede que necesites agregar dispositivos manualmente.

En la página **Settings**, elige **Devices & Services**.

Luego haz clic en el botón **ADD INTEGRATION** en la esquina inferior derecha y busca **SenseCraft**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en SenseCraft y selecciona Action como **Add device using host/id**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

Haz clic en **SUBMIT**, luego selecciona tu tipo de dispositivo del menú desplegable, como `Grove Vision AI V2`, y haz clic en **SUBMIT** nuevamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

En el siguiente campo de entrada, ingresa el ID exacto de tu dispositivo. Este ID usualmente se encuentra en el dispositivo mismo o en el sitio web SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

El siguiente paso es configurar el servicio MQTT. Ingresa la información que coincida con los detalles del servicio MQTT que has configurado en el sitio web. Si no has configurado un nombre de usuario y contraseña previamente, no necesitas llenarlos aquí. Luego haz clic en **SUBMIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: La dirección IP de Home Assistant.
- **Port**: `1883`.
- **clientId**: Para el número de identificación del dispositivo, por favor prefíjalo con `grove_vision_ai_v2_` seguido del número de ID personalizado.
- **username**: El nombre de la base de datos EMQX que acabas de crear.
- **password**: La contraseña de la base de datos EMQX que acabas de crear.

</TabItem>

</Tabs>

Si la configuración es exitosa, el sistema usualmente te pedirá seleccionar una ubicación para tu dispositivo. Elige la habitación o área apropiada basada en tu situación actual y haz clic en **Finish**.

Una vez que la configuración esté completa, puedes ver tu dispositivo y su estado en la página "Overview" de Home Assistant.

Siguiendo estos pasos deberías poder agregar exitosamente el dispositivo "SenseCraft" a tu instancia de Home Assistant y configurarlo para usar el servicio MQTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## Solución de Problemas

### P1: ¿Qué debo hacer si nunca veo los mensajes de datos en HA nuevamente después de que Grove Vision AI V2 se desconecte?

Puede que necesites eliminar el dispositivo y volver a agregarlo en SenseCraft. Después de eliminarlo puede que no sea capaz de ser buscado automáticamente nuevamente y necesitarás agregar manualmente el dispositivo. Por favor consulta los **[pasos aquí](#paso-11-integración-en-home-assistant)** para volver a agregar el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

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
