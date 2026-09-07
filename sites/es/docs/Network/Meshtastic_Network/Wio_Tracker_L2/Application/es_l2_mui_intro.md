---
description: Introducción de MUI. Presenta la definición, las características y el uso de MUI.
title: Introducción a MUI
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png
slug: /l2_mui
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/l2_mui/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## ¿Qué es MUI?

MUI (Meshtastic User Interface) es una interfaz gráfica de código abierto diseñada para dispositivos Meshtastic. Proporciona una forma más intuitiva para que los usuarios interactúen con el dispositivo. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png" alt="pir" width={900} height="auto" /></p>

**Características clave**

- **Mapa interactivo**: MUI muestra las ubicaciones de los nodos directamente en mapas en línea o sin conexión. Consulta los dispositivos cercanos y sus posiciones sin abrir una APP móvil o de escritorio.

- **Configuración conveniente del dispositivo**: Configura los ajustes de Meshtastic directamente en el dispositivo, incluyendo radio, GPS, pantalla y otras opciones comunes. No se requiere una aplicación externa para la configuración rutinaria.

- **Interfaz gráfica intuitiva**: MUI proporciona una interfaz optimizada para pantalla táctil con menús claros y navegación basada en mapas. Las operaciones comunes se pueden completar con solo unos pocos toques, lo que hace que el dispositivo sea más fácil de usar tanto para usuarios nuevos como experimentados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIIntro.gif" alt="pir" width={600} height="auto" /></p>

## Comenzar con MUI basado en Wio Tracker L2


### Cambio de interfaz de usuario

<Tabs>

<TabItem value="1" label="MUI a BaseUI">
Ve a la página Setting **->** Elige `Reboot/Shutdown` **->** Mantén presionado el icono de Bluetooth **->** Haz clic en `OK`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
La ventana emergente de cambio a BaseUI aparece cuando `mantienes presionado` el icono de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

Si solo haces clic en el icono de Bluetooth, entrarás en el modo Bluetooth. Si es así, mantén presionado el icono de Bluetooth que se muestra en la pantalla y el dispositivo se reiniciará automáticamente a MUI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI a MUI">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### Conexión con el teléfono
Ve a la página `Setting`, haz clic en `Reboot/Shutdown` y luego haz clic en el `icono de Bluetooth`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

El dispositivo se reiniciará en modo Bluetooth. El código de emparejamiento Bluetooth se mostrará en la pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

### Configuración de LoRa
Para empezar a comunicarte a través de la malla, debes configurar tu región. Este ajuste controla qué rango de frecuencias utiliza tu dispositivo y debe establecerse de acuerdo con tu ubicación regional.

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para obtener una lista más completa.

:::info
**EU_868** debe cumplir con una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::

<Tabs>

<TabItem value="7" label="Configurar en MUI">

Ve a la página `Setting`, haz clic en `Region`, elige la región y luego haz clic en `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="9" label="Configurar en el teléfono">

<Tabs>
<TabItem value="ios" label="App IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

</TabItem>

</Tabs>

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para adaptarlas a tus necesidades.


### Uso del mapa
<Tabs>

<TabItem value="10" label="Mapa en línea">

**Paso 1. Habilitar GPS**

Necesitas habilitar el GPS para obtener la posición. Esto se puede configurar directamente en el dispositivo `manteniendo presionado el icono de posición`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

También puedes configurarlo en la APP de tu teléfono.

**Paso 2. Preparación de la tarjeta SD**

Necesitas formatear e instalar el mapa en tu tarjeta SD. Para un tutorial detallado sobre el uso de la tarjeta SD, haz clic aquí para verlo.

**Paso 3. Instalar la tarjeta SD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**Paso 4. Ver el mapa**

Espera a que el mapa se cargue. Después de conectarse correctamente a la red Wi‑Fi y obtener la ubicación, el dispositivo mostrará un mapa sin conexión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="Mapa sin conexión">

**Paso 1. Habilitar GPS**

Necesitas habilitar el GPS para obtener la posición. Esto se puede configurar directamente en el dispositivo `manteniendo presionado el icono de posición`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

También puedes configurarlo en la APP de tu teléfono.

**Paso 2. Configurar y habilitar Wifi**

Configura el nombre y la contraseña de la red Wifi. Esto se puede hacer directamente en el dispositivo. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

El Wifi está deshabilitado cuando la IP de wifi está vacía y el icono de wifi es gris. El Wifi está habilitado cuando se muestra la IP de wifi y el icono de wifi es blanco. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

Mantén presionado el icono `Wifi` para cambiar el estado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>

:::tip

La red Wifi conectada debe ser de 2.4G. El Wifi de 5G no puede ser utilizado por el dispositivo.

:::



**Paso 3. Ver el mapa**

Espera a que el mapa se cargue. Después de conectarse correctamente a la red Wi‑Fi y obtener la ubicación, el dispositivo mostrará un mapa en línea.



</TabItem>
</Tabs>


## Interacción avanzada

### Barra de menús
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MenuBarMUII.png" alt="pir" width={600} height="auto" /></p>


### Página de inicio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIHOme.png" alt="pir" width={900} height="auto" /></p>

### Página de nodos

- **Haz clic en cualquier nodo**: Expande la información detallada de los parámetros del nodo

- **Mantén presionado cualquier nodo**: Entra en el chat

- **Mantén presionadas las coordenadas**: Ver la posición del nodo en el mapa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodePaje.png" alt="pir" width={300} height="auto" /></p>

### Página de canales

- **Haz clic en un canal**: Entra en el chat del canal

- **Mantén presionado un canal**: Silencia/activa el sonido del canal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelPage.png" alt="pir" width={300} height="auto" /></p>

:::tip

Solo se puede interactuar con los canales configurados, como el canal con nombre que se muestra en la imagen de la izquierda a continuación. Los canales como el que se muestra en la imagen de la derecha, que no están configurados y solo tienen una etiqueta, no se pueden usar para interactuar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelConfiguration.png" alt="pir" width={300} height="auto" /></p>

:::

### Página de mensajes

- **Haz clic en un chat**: Entra en un chat.

- **Mantén presionado un chat**: Muestra un botón DEL para eliminarlo.

- **Resaltado en naranja**: Indica un nuevo mensaje no leído.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChatInterct.png" alt="pir" width={900} height="auto" /></p>

### Página de configuración

- **Reiniciar**: Elige "Reboot/Shutdown" y haz clic en el icono verde "Reboot".

- **Apagar**: Elige "Reboot/Shutdown" y haz clic en el icono rojo "Turn off".

- **Entrar en modo Bluetooth**: Elige "Reboot/Shutdown" y haz clic en el icono azul "Bluetooth".

- **Cambiar a BaseUI**: Elige "Reboot/Shutdown" y mantén presionado el icono azul "Bluetooth".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SettingMUII.png" alt="pir" width={900} height="auto" /></p>


### Herramienta

- **Mesh Detector**: Muestra los nodos activos detectados
- **Signal Scanner**: Muestra el RSSI y el SNR del nodo seleccionado
- **Trace Route**: Muestra la ruta de enrutamiento del nodo seleccionado
- **Statistic**: Muestra la información de decodificación de paquetes
- **Packet Log**: Muestra el registro del dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TOOLMUI.png" alt="pir" width={500} height="auto" /></p>

## Requisitos del dispositivo MUI

MUI está diseñado para ejecutarse en hardware que sea compatible con Meshtastic y proporcione una pantalla gráfica. Para utilizar todas las funciones de MUI, incluidos los mapas sin conexión, tu dispositivo debe cumplir los siguientes requisitos.

| Componente | Requisito |
|-----------|-------------|
| Pantalla | Pantalla en color con soporte táctil |
| GNSS | Receptor GNSS integrado para servicios de localización |
| LoRa® | Radio LoRa® compatible para comunicación Meshtastic |
| Almacenamiento | Ranura para tarjeta microSD para mapas sin conexión |
| MCU | Se requiere una MCU de alto rendimiento, capaz de soportar tanto la visualización en pantalla como el firmware Meshtastic|


**Seeed Wio Tracker L2** es la plataforma de hardware recomendada para MUI.

Integra todos los componentes necesarios en un solo dispositivo:

- Pantalla táctil a color
- GNSS integrado
- Comunicación LoRa®
- Conectividad Wi-Fi y Bluetooth®
- Ranura para tarjeta microSD para mapas sin conexión
- USB Tipo-C para programación y alimentación

No se requieren placas de expansión adicionales.

## Preguntas frecuentes
### Cómo activar el teclado
Haz clic en el icono del teclado que se muestra a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Keyboardicon.png" alt="pir" width={500} height="auto" /></p>

Entonces podrás introducir números y letras. No todas las páginas tienen un icono de teclado; normalmente solo aparece en las páginas donde se requiere entrada.

### Por qué mi wifi se apaga automáticamente

Cuando entras en el modo de emparejamiento Bluetooth, el wifi del dispositivo se configurará automáticamente como deshabilitado. 
Puedes habilitar el wifi en la aplicación del teléfono cuando el dispositivo esté en modo Bluetooth.

### Cómo enviar mensajes mqtt en MUI

El dispositivo no puede transmitir mensajes mqtt cuando está en MUI. Si quieres transmitir mensajes mqtt, por favor:

**Paso 1**. Entra en el modo de emparejamiento Bluetooth

**Paso 2**. Empareja tu dispositivo con la APP del teléfono

**Paso 3**. Configura mqtt en la APP del teléfono

**Paso 4**. Inicia la transmisión de mensajes

