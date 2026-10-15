---
description: Introducción a reTerminal DM SenseCraft Edge OS
title: Introducción a reTerminal DM SenseCraft Edge OS
keywords:
  - Edge
  - reTerminal-DM
  - SenseCraft Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-sensecraft-edge-os-intro
last_update:
  date: 04/23/2023
  author: Peter Pan
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/reterminal-dm-sensecraft-edge-os-intro/
---
#  Introducción a reTerminal DM SenseCraft Edge OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/splash.png" alt="pir" width="600" height="auto"/></p>

SenseCraft Edge OS es un sistema operativo de vanguardia meticulosamente diseñado para el dispositivo de Interfaz Humano-Máquina (HMI) de 10.1" de reTerminal DM, que presenta una variedad de funcionalidades integradas que elevan la experiencia del usuario a nuevas alturas. Este innovador SO cuenta con una interfaz intuitiva con funciones de configuración y control integradas, permitiendo a los usuarios configurar y gestionar sus dispositivos sin esfuerzo. Además, se integra perfectamente con el editor Node-RED y Node-RED Dashboard, permitiendo a los usuarios desbloquear capacidades de personalización y automatización sin precedentes. Aprovechando el poder de la programación visual y las herramientas de automatización de Node-RED, este sistema operativo permite a los usuarios crear flujos de trabajo intrincados y desplegar sistemas de control sofisticados con facilidad. Con su fusión incomparable de controles HMI intuitivos y la versatilidad de Node-RED, SenseCraft Edge OS establece un nuevo estándar para funcionalidad mejorada y facilidad de uso sin precedentes en el ámbito de dispositivos HMI en todo tipo de escenarios de casos de uso. El sistema de archivos versionado OSTree integrado proporciona un marco robusto para gestionar y desplegar sistemas operativos basados en Linux de manera escalable y confiable, con un enfoque en atomicidad, inmutabilidad y uso eficiente del almacenamiento.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"2"}> Obtén reTerminal DM Ahora 🖱️</font></span></strong>
    </a>
</div>

:::note
reTerminal DM se enviará con Raspberry Pi OS como sistema operativo predeterminado a partir del próximo lote de productos.
:::

:::note
Este sistema operativo se ha desarrollado actualmente basado en reTerminal DM y solo funciona con la versión de producción de reTerminal DM. Puedes descargar [Sensecraft Edge OS](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)
:::

## Característica

* **Diseño de interfaz de usuario táctil** específicamente adaptado para dispositivos de Interfaz Humano-Máquina (HMI), asegurando una experiencia de usuario intuitiva y fluida.
* **Se integra perfectamente** con el ampliamente popular **entorno de desarrollo "sin código y bajo código" Node-RED**, junto con su componente complementario **Node-RED Dashboard**. Esta integración proporciona a los usuarios potentes capacidades de programación visual y un marco de panel versátil para construir aplicaciones personalizadas sin la necesidad de conocimientos extensos de codificación.
* **Funciones integradas de configuración y control del sistema**, ofreciendo una interfaz integral e intuitiva para configurar y gestionar varios aspectos del reTerminal DM.
* **Centro de Aplicaciones integrado para expansión futura de casos de uso**, sirve como un centro para acceder e instalar una amplia gama de aplicaciones y extensiones, permitiendo a los usuarios personalizar y extender la funcionalidad de su sistema operativo.
* **Servicio configurable integrado** como **MQTT, MySQL y ChirpStack**, proporcionando a los usuarios funcionalidad mejorada y flexibilidad en la construcción de aplicaciones de panel de visualización de datos.
* **Sistema de archivos versionado OSTree** permite **actualizaciones atómicas** de todo el sistema operativo, y permite rastrear y gestionar diferentes versiones del sistema operativo y sus componentes. Esto hace más fácil revertir a una versión anterior si es necesario.
* **Función integrada de Verificación de Salud del Sistema** que permite a los usuarios monitorear la salud general y el rendimiento del reTerminal DM. Esta función proporciona información valiosa sobre el estado del sistema, asegurando funcionalidad óptima e identificando problemas potenciales.


<!-- ## Choose SenseCraft Edge Version -->

<!-- Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="V1.2.0" label="v0.1.8-1.2.0"> -->

## Resumen del Diseño

### Barra de Estado

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/status-bar.png" /></div>

Los elementos clicables y funcionalidad:

<div class="table-center">

| Icono | función | 
|---| ---|
|Control de Energía | Abre una lista desplegable con opciones de "Reiniciar", "Apagar", "Suspender" |
|Conexión Bluetooth | Te lleva a la vista de configuración de Bluetooth |
|Conexión Ethernet|Te lleva a la vista de configuración de Ethernet |
|Conexión WiFi |Te lleva a la vista de configuración de WiFi |

</div>

### Pestaña Dashboard

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" /></div>

La Pestaña Dashboard está renderizando la vista "node-red-dashboard" localmente en reTerminal DM, aquí hay algunas consideraciones de diseño para referencia:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-size.png" /></div>

* Ancho máximo sin desplazamiento: 1075px
* Altura máxima sin desplazamiento: 752px

También puedes acceder a la vista del dashboard en una máquina externa que esté en la misma red que el reTerminal DM, donde simplemente puedes abrir tu navegador web favorito en esa máquina externa y escribir la dirección ip de tu reTerminal DM seguida del puerto predeterminado de Node-RED 1880 y luego seguido de **'/ui/'**, donde la url debería verse así: **"direccionip:1880/ui/"**

> Por Ejemplo: En mi caso, la dirección ip del reTerminal DM es "192.168.49.163" entonces la url es: **"192.168.49.163:1880/ui/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-eg.png" /></div>

### Pestaña Editor Node-RED

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red.png" /></div>

Ten en cuenta que puedes abrir el editor Node-RED en una máquina externa que esté en la misma red que el reTerminal DM, donde simplemente puedes abrir tu navegador web favorito en esa máquina externa y escribir la dirección ip de tu reTerminal DM seguida del puerto predeterminado de Node-RED 1880. Para encontrar la dirección IP de tu reTerminal DM puedes localizar la Dirección IP como se muestra en la imagen a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-ipaddress.png" /></div>

> Por Ejemplo: En mi caso, la dirección ip del reTerminal DM es "192.168.49.163" entonces la url es: **"192.168.49.163:1880/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-editer-eg.png" /></div>

:::note
Puedes descargar el [Default Flow](https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/default-flow.json) como referencia.
:::

Para obtener más información sobre cómo usar Node-RED con reTerminal DM, visite las páginas Wiki de Node-RED:

* [reTerminal DM RS485 Port con Node-RED](/es/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTT con Node-RED](/es/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS con Node-RED](/es/reTerminal-DM-Node-Red-canbus)

### Pestaña de Configuración del Sistema

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/settings.png" /></div>

#### Subpestaña de Red

La sección de Red se utiliza para ver y configurar las funciones de red para Ethernet, WiFi y Bluetooth.

##### Subpestaña de Ethernet

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/network.png" /></div>


##### Subpestaña de WiFi

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/wifi.png" /></div>

Para conectar WiFi, haga clic en el SSID de WiFi al que desea conectarse y luego verá la siguiente ventana emergente, ingrese las credenciales de WiFi y luego haga clic en `Confirmar` para continuar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/connect-wifi.png" /></div>


##### Subpestaña de Bluetooth

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/Bluetooth.png" /></div>

#### Dataset

La sección Dataset se utiliza para habilitar y deshabilitar los servicios relacionados con los controles de dataset. Por ahora tenemos un servidor MySQL integrado y un servidor MQTT.

##### Subpestaña de MySQL

Puede habilitar o deshabilitar el servicio MySQL en esta pestaña, también ver la información del servicio MySQL como la dirección del servidor MySQL y las credenciales de acceso al servidor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mysql.png" /></div>

##### Subpestaña de MQTT

Puede habilitar o deshabilitar el servicio MQTT en esta pestaña, también ver la información del servicio MQTT como la dirección del servidor MQTT y las credenciales de acceso al servicio.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mqtt.png" /></div>

#### General

La sección General se utiliza para obtener información del dispositivo en la pestaña acerca de, controlar la actualización del dispositivo en la pestaña de actualización, ajustar la configuración de pantalla en la pestaña de pantalla, cambiar la configuración local en la pestaña de Idioma y Hora, configurar el PIN de bloqueo de pantalla desde la pestaña PIN por razones de seguridad.

##### Acerca de

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/about.png" /></div>

##### Actualizaciones

:::note

Hay dos cosas que necesitarás actualizar en SenseCraft Edge OS:

**Actualización del Sistema:**

* Se encarga de los componentes del backend del sistema.

**Actualización de SenseCraft Edge:**

* Incluye componentes del backend y frontend, así como la interfaz de usuario relacionada con la aplicación SenseCraft.

Existen dos formas de actualizarlos:

**Actualización Local:**

* Usando un dispositivo de almacenamiento USB que contenga los archivos de actualización.

**Actualización por Red:**

* Actualización a través de la red.

:::


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/updates.png" /></div>

##### Verificar y Actualizar

Puedes hacer clic en el botón `Actualizar Ahora` por separado para actualizar el Sistema o la aplicación SenseCraft Edge.

Si tu sistema está actualizado, recibirás una notificación emergente que dice `La Versión del Sistema es la versión más reciente`.

Para Actualización del Sistema:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/system-update-success.png" /></div>

Para Actualización de SenseCraft Edge:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/app-upgrade-success.png" /></div>

Puedes hacer clic en el botón `Verificar Actualización` para comprobar la última actualización disponible y confirmar la Actualización.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/check-update.png" /></div>

##### Actualización Local

<!-- PASO 1: Por favor descarga los archivos de actualización y guárdalos en un dispositivo de almacenamiento USB -->

PASO 1: Por favor haz clic en el botón `Actualización Local`

Deberías ver la siguiente ventana emergente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

PASO 2: Por favor inserta el dispositivo de almacenamiento USB con los archivos de actualización en el reTerminal DM como se indica en la imagen anterior.

PASO 3: En la ventana emergente haz clic en `siguiente`, por favor ten paciencia cuando hagas clic en `siguiente` ya que esto tomará algo de tiempo para cargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/select-update-file.png" /></div>

:::warning

**Error de USB**

Si ocurre algún problema con el USB, verás el mensaje `No USB flash drive detected`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

Para facilitar la actualización del sistema, asegúrate de tener un buen dispositivo de almacenamiento USB formateado en **FAT32** o **EXT4**, y que su capacidad sea **menor o igual a 64GB**, luego...
:::

PASO 4: Haz clic en Siguiente y espera el proceso de actualización

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-updating.png" /></div>

##### Pantalla

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/screen.png" /></div>

##### Idioma y Hora

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/timezone.png" /></div>

##### PIN

Por defecto el PIN no está configurado, y este pin establece un código de acceso para la [Pestaña del Editor Node-RED](#node-red-editor-tab) y la [Pestaña de Configuración del Sistema](#system-settings-tab)

##### Configurar Código PIN:

Pasos para configurar los pines:

PASO 1: Haz clic y activa el botón Establecer PIN para entrar al proceso de configuración del pin

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/toggle-pin-setting.png" /></div>

PASO 2: Por favor ingresa el código PIN de 8 dígitos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

PASO 3: Por favor repite el código PIN de 8 dígitos para confirmar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>


##### Restablecer el Código PIN:

:::note
Este paso solo es válido si ya tienes configurado un código PIN.
:::

PASO 1: Haz clic en el botón RESET

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/reset-pins.png" /></div>

PASO 2: Por favor ingresa el código PIN actual para confirmar el proceso de reinicio

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/enter-pin-to-reset.png" /></div>

PASO 3: Por favor ingresa el nuevo código PIN de 8 dígitos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

PASO 4: Por favor repite el nuevo código PIN de 8 dígitos para confirmar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### Desbloquear

Una vez que hayas configurado el código PIN, cuando accedas a la [Pestaña del editor Node-RED](#node-red-editor-tab) o [Pestaña de Configuración del Sistema](#system-settings-tab), necesitarás ingresar el código PIN para desbloquear

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/unlock.png" /></div>


#### Centro

La sección Centro se utiliza para controlar las Aplicaciones instaladas, donde la pestaña centro actúa como una tienda de aplicaciones donde puedes instalar, abrir, deshabilitar y también alojar tus propias aplicaciones que se sirven de manera similar a Google Play Store o Apple App Store. Actualmente la función de este centro de aplicaciones es limitada, las nuevas características serán actualizadas, por favor mantente atento y sé paciente, también nos gustaría tus contribuciones al centro de aplicaciones una vez que la función de contribución de la comunidad sea implementada. La pestaña ChirpStack se muestra ya que es la vista de configuración de la aplicación, donde la aplicación ChirpStack está instalada desde el Centro de Aplicaciones.

##### Centro 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/appcenter.png" /></div>

:::note
Actualmente, la funcionalidad de este centro de aplicaciones es limitada. Las nuevas características se actualizarán próximamente, así que mantente atento y ten paciencia. Además, nos gustaría contar con tus contribuciones al centro de aplicaciones una vez que se implemente la función de contribución comunitaria.
:::

##### ChirpStack

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/chirpstack.png" /></div>

<!-- </TabItem>
<TabItem value="DALL·E" label="DALL·E Code">

</TabItem>
</Tabs>

Code END -->

## Recursos Adicionales

*  [Hoja de Datos del reTerminal DM](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
*  [Manual de Usuario del reTerminal DM](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)

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