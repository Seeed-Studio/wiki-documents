---
description: Comenzando con reTerminal DM SenseCraft Edge OS
title: Comenzando con reTerminal DM SenseCraft Edge OS
keywords:
  - Edge
  - reTerminal-DM
  - SenseCraft Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reterminal-dm-sensecraft-edge-os-intro
last_update:
  date: 04/06/2025
  author: Erick González
---
# Comenzando con reTerminal DM SenseCraft Edge OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/splash.png" alt="pir" width="600" height="auto"/></p>

SenseCraft Edge OS es un sistema operativo de última generación, meticulosamente diseñado para el dispositivo HMI (Interfaz Hombre-Máquina) de 10,1" de reTerminal DM, que ofrece una serie de funcionalidades integradas que elevan la experiencia del usuario a nuevos niveles. Este revolucionario sistema operativo cuenta con una interfaz intuitiva con funciones integradas de configuración y control, permitiendo a los usuarios configurar y gestionar sus dispositivos sin esfuerzo. Además, se integra de manera fluida con el editor Node-RED y el Dashboard de Node-RED, permitiendo desbloquear capacidades incomparables de personalización y automatización. Aprovechando la potencia de las herramientas de programación visual y automatización de Node-RED, este sistema operativo faculta a los usuarios para crear flujos de trabajo complejos y desplegar sistemas de control sofisticados con facilidad. Con su fusión inigualable de controles intuitivos para HMI y la versatilidad de Node-RED, SenseCraft Edge OS establece un nuevo estándar en cuanto a funcionalidad mejorada y facilidad de uso en el ámbito de los dispositivos HMI para cualquier escenario de aplicación. El sistema de archivos versionado OSTree incorporado proporciona un marco robusto para gestionar y desplegar sistemas operativos basados en Linux de forma escalable y fiable, con un enfoque en la atomicidad, inmutabilidad y un uso eficiente del almacenamiento.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"2"}> Consigue reTerminal DM Ahora 🖱️</font></span></strong>
    </a>
</div>

:::note
reTerminal DM se enviará con Raspberry Pi OS como sistema operativo predeterminado en el próximo lote de productos.
:::

:::note
Este sistema operativo se desarrolla actualmente basado en reTerminal DM y solo funciona con la versión de producción de reTerminal DM, puedes descargar [Sensecraft Edge OS](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)
:::

## Características

* **Diseño de interfaz táctil** específicamente adaptado para dispositivos de Interfaz Hombre-Máquina (HMI), asegurando una experiencia de usuario intuitiva y fluida.
* **Integración fluida** con el popular entorno de desarrollo **"sin código y con bajo código" Node-RED**, junto con su componente complementario **Node-RED Dashboard**. Esta integración proporciona a los usuarios potentes capacidades de programación visual y un marco de dashboard versátil para construir aplicaciones personalizadas sin necesidad de conocimientos extensos en programación.
* **Funciones integradas de configuración y control del sistema**, que ofrecen una interfaz completa e intuitiva para configurar y gestionar diversos aspectos del reTerminal DM.
* **Centro de Aplicaciones incorporado para la expansión de casos de uso futuros**, que actúa como un hub para acceder e instalar una amplia gama de aplicaciones y extensiones, permitiendo a los usuarios personalizar y ampliar la funcionalidad de su sistema operativo.
* **Servicios configurables integrados** como **MQTT, MySQL y ChirpStack**, que proporcionan a los usuarios funcionalidad y flexibilidad mejoradas para construir aplicaciones de dashboard de visualización de datos.
* **Sistema de archivos versionado OSTree** que permite **actualizaciones atómicas** de todo el sistema operativo, permitiéndote rastrear y gestionar diferentes versiones del sistema operativo y sus componentes. Esto facilita volver a una versión anterior si es necesario.
* **Función de Comprobación de Salud del Sistema** incorporada que permite a los usuarios monitorizar el estado general y el rendimiento del reTerminal DM. Esta función proporciona información valiosa sobre el estado del sistema, asegurando un funcionamiento óptimo e identificando posibles problemas.

## Descripción General del Diseño

### Barra de Estado

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/status-bar.png" /></div>

Los elementos clicables y su función:

<div class="table-center">

| Ícono | Función | 
|---| ---|
|Control de energía | Abre una lista desplegable con las opciones "Reiniciar", "Apagar", "Suspender" |
|Conexión Bluetooth | Te lleva a la vista de configuración de Bluetooth |
|Conexión Ethernet | Te lleva a la vista de configuración de Ethernet |
|Conexión WiFi | Te lleva a la vista de configuración de WiFi |

</div>

### Pestaña del Dashboard

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" /></div>

La pestaña del Dashboard muestra la vista "node-red-dashboard" localmente en reTerminal DM, aquí se presentan algunas consideraciones de diseño para referencia:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-size.png" /></div>

* Ancho máximo sin desplazamiento: 1075px
* Altura máxima sin desplazamiento: 752px

También puedes acceder a la vista del dashboard desde una máquina externa que esté en la misma red que el reTerminal DM; solo abre tu navegador web favorito en esa máquina externa y escribe la dirección IP de tu reTerminal DM seguida del puerto por defecto de Node-RED 1880 y luego **'/ui/'**, de modo que la URL se vea así: **"ipaddress:1880/ui/"**

> Por ejemplo: En mi caso, la dirección IP de reTerminal DM es "192.168.49.163" por lo que la URL es: **"192.168.49.163:1880/ui/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-eg.png" /></div>

### Pestaña del Editor Node-RED

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red.png" /></div>

Ten en cuenta que puedes abrir el editor Node-RED desde una máquina externa que esté en la misma red que el reTerminal DM; solo abre tu navegador web favorito en esa máquina externa y escribe la dirección IP de tu reTerminal DM seguida del puerto por defecto de Node-RED 1880. Para encontrar la dirección IP de tu reTerminal DM, puedes localizarla como se muestra en la imagen a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-ipaddress.png" /></div>

> Por ejemplo: En mi caso, la dirección IP de reTerminal DM es "192.168.49.163" y la URL es: **"192.168.49.163:1880/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-editer-eg.png" /></div>

:::note
Puedes descargar el [Flujo Predeterminado](https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/default-flow.json) para referencia.
:::

Para más información sobre cómo utilizar Node-RED con reTerminal DM, por favor visita las páginas Wiki de Node-RED:

* [Puerto RS485 de reTerminal DM con Node-RED](/reTerminal-DM-Node-Red-RS485)
* [MQTT de reTerminal DM con Node-RED](/reTerminal-DM-Node-Red-mqtt)
* [CAN BUS de reTerminal DM con Node-RED](/reTerminal-DM-Node-Red-canbus)

### Pestaña de Configuración del Sistema

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/settings.png" /></div>

#### Subpestaña de Red

La sección de Red se utiliza para visualizar y configurar funciones de red para Ethernet, WiFi y Bluetooth.

##### Subpestaña de Ethernet

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/network.png" /></div>

##### Subpestaña de WiFi

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/wifi.png" /></div>

Para conectarte a una red WiFi, haz clic en el SSID de WiFi al que deseas conectarte; aparecerá una ventana emergente en la que deberás ingresar las credenciales de WiFi y luego hacer clic en `Confirmar` para continuar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/connect-wifi.png" /></div>

##### Subpestaña de Bluetooth

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/Bluetooth.png" /></div>

#### Dataset

La sección Dataset se utiliza para habilitar y deshabilitar los servicios relacionados con el control de conjuntos de datos; actualmente tenemos incorporado el servidor MySQL y el servidor MQTT.

##### Subpestaña de MySQL

Puedes habilitar o deshabilitar el servicio MySQL en esta pestaña, además de ver la información del servicio MySQL, como la dirección del servidor MySQL y las credenciales de acceso.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mysql.png" /></div>

##### Subpestaña de MQTT

Puedes habilitar o deshabilitar el servicio MQTT en esta pestaña, además de ver la información del servicio MQTT, como la dirección del servidor MQTT y las credenciales de acceso.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mqtt.png" /></div>

#### General

La sección General se utiliza para obtener información sobre el dispositivo en la pestaña Acerca de, controlar la actualización del dispositivo en la pestaña Actualizaciones, ajustar la configuración de la pantalla en la pestaña Pantalla, cambiar la configuración local en la pestaña Idioma y Hora, y configurar un PIN en la pestaña PIN por razones de seguridad.

##### Acerca de

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/about.png" /></div>

##### Actualizaciones

:::note
Hay dos aspectos que necesitarás actualizar para SenseCraft Edge OS.

Actualización del Sistema:

* Se encarga de los componentes de backend del sistema.

Actualización de SenseCraft Edge:

* Componentes de backend y frontend, así como la interfaz de usuario relacionada con la aplicación SenseCraft.

Existen dos formas de actualizarlos.

Actualización Local:

* Utilizando un dispositivo de almacenamiento USB que contenga los archivos de actualización.

Actualización por Red:

* Actualización a través de la red.
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/updates.png" /></div>

##### Comprobar y Actualizar

Puedes hacer clic por separado en el botón `Actualizar Ahora` para actualizar el Sistema o la aplicación SenseCraft Edge.

Si tu sistema está actualizado, verás una notificación emergente que dice `La versión del Sistema es la última versión`.

Para la Actualización del Sistema:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/system-update-success.png" /></div>

Para la Actualización de SenseCraft Edge:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/app-upgrade-success.png" /></div>

Puedes hacer clic en el botón `Comprobar Actualización` para verificar la última actualización disponible y confirmar la actualización.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/check-update.png" /></div>

##### Actualización Local

STEP 1: Haz clic en el botón `Actualización Local`

Verás la siguiente ventana emergente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

STEP 2: Inserta el dispositivo de almacenamiento USB con los archivos de actualización en el reTerminal DM, como se indica en la imagen anterior.

STEP 3: En la ventana emergente, haz clic en `Siguiente`. Ten paciencia ya que, al hacer clic en `Siguiente`, tomará un tiempo cargar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/select-update-file.png" /></div>

:::warning
**Error de USB**

Si hay algún error con el USB verás el mensaje `No se detectó ninguna unidad flash USB`, 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

Para facilitar la actualización del sistema, asegúrate de tener un buen dispositivo de almacenamiento USB formateado a FAT32 o EXT4, y que el tamaño del dispositivo no exceda los 64GB.
:::

STEP 4: Haz clic en `Siguiente` y espera a que finalice el proceso de actualización.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-updating.png" /></div>

##### Pantalla

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/screen.png" /></div>

##### Idioma y Hora

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/timezone.png" /></div>

##### PIN

Por defecto, el PIN no está configurado, y este PIN establece un bloqueo de código de acceso para la [Pestaña del editor Node-RED](#node-red-editor-tab) y la [Pestaña de Configuración del Sistema](#pestaña-de-configuración-del-sistema).

##### Configurar Código PIN:

Pasos para configurar el PIN:

STEP 1: Haz clic y activa el botón "Establecer PIN" para iniciar el proceso de configuración del PIN

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/toggle-pin-setting.png" /></div>

STEP 2: Ingresa el código PIN de 8 dígitos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

STEP 3: Vuelve a ingresar el código PIN de 8 dígitos para confirmarlo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### Restablecer el Código PIN

:::note
Este paso solo es válido si ya tienes configurado un código PIN.
:::

STEP 1: Haz clic en el botón `Resetear`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/reset-pins.png" /></div>

STEP 2: Ingresa el PIN actual para confirmar el proceso de restablecimiento

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/enter-pin-to-reset.png" /></div>

STEP 3: Ingresa el nuevo código PIN de 8 dígitos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

STEP 4: Vuelve a ingresar el nuevo código PIN de 8 dígitos para confirmarlo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### Desbloquear

Una vez configurado el código PIN, al acceder a la [Pestaña del editor Node-RED](#node-red-editor-tab) o a la [Pestaña de Configuración del Sistema](#pestaña-de-configuración-del-sistema) deberás ingresar el código PIN para desbloquear.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/unlock.png" /></div>

#### Centro

La sección Centro se utiliza para controlar las aplicaciones instaladas, actuando como una tienda de aplicaciones en la que puedes instalar, abrir, desactivar e incluso alojar tus propias aplicaciones, funcionando de manera similar a Google Play Store o Apple App Store. Actualmente, la funcionalidad de este centro de aplicaciones es limitada; se implementarán nuevas características próximamente. También esperamos tus contribuciones al centro de aplicaciones una vez que se habilite la función de contribución comunitaria. La pestaña ChirpStack se muestra tal cual, ya que es la vista de configuración de la aplicación ChirpStack, la cual se instala desde el Centro de Aplicaciones.

##### Centro

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/appcenter.png" /></div>

:::note
Actualmente, la funcionalidad de este centro de aplicaciones es limitada; se actualizarán nuevas características, por lo que te pedimos estar atento y ser paciente. También agradeceremos tus contribuciones al centro de aplicaciones una vez que se implemente la función de contribución comunitaria.
:::

##### ChirpStack

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/chirpstack.png" /></div>

## Recursos Adicionales

*  [Hoja de Datos de reTerminal DM](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
*  [Manual de Usuario de reTerminal DM](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diversos canales de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
