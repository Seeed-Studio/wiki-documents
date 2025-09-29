---
description: Configuración del Modo de Bajo Consumo de Datos (para versión 4G)
title: Configuración del Modo de Bajo Consumo de Datos (para versión 4G)
keywords:
- SenseCAP_M2
- Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/sensecap_m2.jpg
slug: /es/traffic_saving_config
last_update:
  date: 12/4/2024
  author: Jessie
---


Este tutorial guiará a los usuarios para configurar el modo de bajo consumo de datos para el Gateway M2 Multi-Platform **versión 4G**. En este modo, se espera que el tráfico por mes sea de alrededor de **60M**. El tráfico específico depende de los paquetes de los nodos, etc.


:::caution note
1. La visualización del estado de la APP puede tener retraso
2. El cambio de red y la luz indicadora RGB cambiarán después de 5 minutos
:::


### Verificar Versión del Firmware


Antes de configurar el modo de bajo consumo de datos, verifique primero la versión del OS y firmware.

:::tip
La versión del OS necesita ser más nueva que 0.9.5<br/>
La versión del firmware necesita ser más nueva que 1.1.6
:::

Consulte la [Guía de Inicio Rápido](https://wiki.seeedstudio.com/es/quick_start_with_M2_MP/) para iniciar sesión en la página Luci.

Navegue a `Status` -> `Overview`, verifique la versión actual del OS y firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/version-check.png" alt="pir" width={800} height="auto" /></p>


#### Actualizar OS


El firmware se actualizará automáticamente, pero el usuario necesita actualizar la versión del OS manualmente.


Navegue a `System` -> `Backup/Flash Firmware`, haga clic en `Update`.

:::danger
Mantenga la conexión de alimentación durante el período de actualización.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/online-update.png" alt="pir" width={800} height="auto" /></p>


### Configuración de Lista Blanca


Esta pestaña se utiliza para filtrar nodos que no necesita para ahorrar tráfico.

* Para el Modo `SenseCAP`, los nodos que no sean SenseCAP serán filtrados automáticamente, no necesita configuración adicional.

* Para el Modo `Packet Forwarder` y `Basic Station`, necesita habilitar el Modo de Lista Blanca.
 
 :::tip
 Si está usando la plataforma AWS, puede omitir este paso, solo configure la lista blanca en la consola de AWS.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/aws-white-list.png" alt="pir" width={600} height="auto" /></p>
 :::

 `OUI List`: Los primeros tres bytes del EUI del nodo.    *Usado para filtrar paquetes join-request*.<br/>
  ej. para nodo SenseCAP, el OUI es '2CF7F1'

  `Network ID List`/`DevAddr`:  *Usado para filtrar paquetes uplink*.<br/>
 ej. para nodo SenseCAP, el NetID es '000013', DevAddr es '27000000 - 27FFFFFF'

  Más detalles consulte [Asignaciones de Prefijo NetID y DevAddr](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/)
  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/white-list-config.png" alt="pir" width={800} height="auto" /></p>


### Configurar Parámetros PING


Usado para verificar si el enlace está activo, déjelo en blanco para asumir que la interfaz está siempre en línea.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mwan3.png" alt="pir" width={800} height="auto" /></p>


### Habilitar Modo de Bajo Consumo de Datos

Habilite el `Modo de Bajo Consumo de Datos`, y configure el `tiempo de vida`, por defecto en la Plataforma SenseCAP: 86400.

Después de la configuración, por favor reinicie el gateway para aplicar los cambios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mode-enable.png" alt="pir" width={800} height="auto" /></p>