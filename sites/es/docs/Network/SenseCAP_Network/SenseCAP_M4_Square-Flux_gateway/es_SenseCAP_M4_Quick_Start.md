---
description: Guía de inicio rápido de SenseCAP M4
title: Guía de inicio rápido de SenseCAP M4
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-06-25'
url: https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start/
---

# Guía de inicio rápido de SenseCAP M4 Square

**SenseCAP M4 Square** proporciona la forma más sencilla de desplegar la red computacional de próxima generación (FluxNode). Sin comandos de Linux, sin necesidad de crear un entorno y solo 4 pasos para finalizar el despliegue.

## Requisitos previos

- Velocidad de carga de red suficiente para desplegar un CUMULUS FluxNode **(25 Mbps de carga como mínimo)**
- Un nuevo CUMULUS FluxNode creado

## Qué necesitas

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png" alt="quick-start" width={600} height="auto" /></div>

## Hacer stake de un nodo Flux CUMULUS

Este tutorial toma Binance como ejemplo

### Paso 1 Ir al exchange para comprar Flux

1. Descarga la [Binance App](https://www.binance.com/zh-CN/download) y registra una cuenta

2. Flux no se puede comprar con moneda fiduciaria. Primero compra USDT y luego convierte USDT a Flux

3. En la página Trade, selecciona spot y en Market selecciona FLUX/USDT

4. Introduce la cantidad de USDT y asegúrate de que el Flux convertido sea superior a 1000

5. Haz clic en el botón Buy, ahora has comprado Flux correctamente

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg" alt="stake-flux" width={600} height="auto" /></div>

### Paso 2 Descarga la app Zelcore y registra tu cuenta

1. Descarga [Zelcore App](https://zelcore.io/) e inicia sesión en tu cuenta de Zelcore

2. En la página Portfolio, haz clic en el botón Add Assets para añadir el activo FLUX BSC (Payments portfolio)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png" alt="zelcore" width={600} height="auto" /></div>

### Paso 3 Retirar Flux de Binance a la billetera Zelcore

1. Abre la Binance App y ve a la página Wallet

2. Ve a Flux, haz clic en Withdraw y selecciona Send via Crypto Network

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200" alt="binance" width={600} height="auto" /></div>

3. Introduce la información de retiro y envía

- Address: Abre Zelcore App, copia la dirección de recepción de FLUX BSC y pégala en Binance

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908" alt="withdraw" width={600} height="auto" /></div>

- Network: Selecciona BB Smart Chain (BEP20)
- Amount: 1000+ Flux
- Send From: Spot&Funding Wallet

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200" alt="send" width={600} height="auto" /></div>

4. Revisa tu información de retiro y envía a Zelcore

### Paso 4 Crear un nuevo nodo Flux Cumulus

1. Abre Zelcore App y comprueba que tu Flux se ha enviado a tu activo FLUX BSC (Payments portfolio)

2. Ve a la página Apps y abre Fusion para intercambiar FLUX BSC por Flux (Payments portfolio).

- Sell Asset: Selecciona FLUX BSC
- Buy Asset: Selecciona FLUX

Nota: Asegúrate de tener suficiente BNB para cubrir la comisión del intercambio

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200" alt="swap" width={600} height="auto" /></div>

3. Envía el Flux desde el Payments portfolio a otro portfolio.

4. ¡Ahora puedes desplegar el nuevo nodo Flux Cumulus en SenseCAP M4 Square!

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882" alt="deploy" width={600} height="auto" /></div>

## Desplegar FluxNode en SenseCAP M4 Square

### Paso 1 Encender y conectar a internet

1. Conecta el adaptador de corriente de 12 V/2 A proporcionado al conector de alimentación DC-IN.

2. Conecta el cable de red al Ethernet2.

3. El dispositivo se configurará automáticamente. La luz naranja fija en L3 indica que la configuración y la conexión a internet se han realizado correctamente.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png" alt="power" width={600} height="auto" /></div>

### Paso 2 Instalar SenseCAP Hotspot App y Zelcore App

1. SenseCAP Hotspot App está diseñada para configurar y gestionar dispositivos. Escanea el siguiente código QR para instalar SenseCAP Hotspot App.

2. Regístrate en una cuenta SenseCAP con tu correo electrónico o inicia sesión directamente.

<div style={{textAlign: 'center'}}><a href="https://app.sensecapmx.com/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png" alt="app" width={600} height="auto" /></a></div>

3. Zelcore App es publicada por Flux para encontrar, gestionar, intercambiar y ser realmente dueño de tus activos digitales, **FluxNode** e información. Haz clic en la siguiente imagen para instalar Zelcore App.

<div style={{textAlign: 'center'}}><a href="https://zelcore.io/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png" alt="zelcore" width={600} height="auto" /></a></div>

### Paso 3 Configurar SenseCAP M4

1. Presiona el pulsador en la parte inferior izquierda del dispositivo y la tapa terminal se levantará; luego retírala.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png" alt="setup1" width={600} height="auto" /></div>

2. Mantén pulsado el botón B1 durante 5 s hasta que el indicador L2 parpadee en azul para activar el modo de configuración por Bluetooth.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png" alt="setup2" width={600} height="auto" /></div>

3. Selecciona Flux y haz clic en Setup en SenseCAP Hotspot App

- Escanea el dispositivo mediante Bluetooth
- Selecciona el dispositivo para Connect

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg" alt="setup3" width={600} height="auto" /></div>

4. La app se conecta al dispositivo correctamente. Ahora haz clic en el botón install para instalar la dApp de Flux en el dispositivo.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png" alt="setup4" width={600} height="auto" /></div>

### Paso 4 Desplegar Flux Node

1. La instalación de la dApp de Flux se ha completado, ahora haz clic en el botón Open y comienza a desplegar el CUMULUS FluxNode.

**Nota: Compra 1000 Flux como colateral y transfiérelos a tus billeteras Flux de Zelcore para la configuración del CUMULUS FluxNode.**

**Guía**

- [Guía de configuración de FluxNode](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
- [Guía en video del tutorial de configuración de Flux Light Node (el tutorial de configuración de Zelcore y depósito de Flux es de 8:07 a 12:30)](https://www.youtube.com/watch?v=RT1uaSrurv4)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png" alt="deploy1" width={600} height="auto" /></div>

2. Introduce Identity Key, Collateral TX ID, Output Index, Zel ID y Kadena Address desde Zelcore APP, descarga Zelcore para obtener más información.

> **Identity Key**: haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en edit en el menú desplegable > haz clic en Identity Key para copiarla
>
> **Collateral TX ID**: haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en Edit en el menú desplegable > haz clic en Collateral TX ID para copiarla
>
> **Output Index**: haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en Edit en el menú desplegable > haz clic en Output Index para copiarlo
>
> **Zel ID**: haz clic en Apps > haz clic en Zel ID en la página Apps > haz clic en el código QR para copiar Zel ID
>
> **Kadena Address**: NIMBUS y STRATUS pueden introducir la dirección de Kadena para obtener recompensas adicionales en KDA. Si despliegas CUMULUS no es necesario introducirla. Haz clic en Portfolio > haz clic en Show Zero Sum en la página > haz clic en Kadena > haz clic en Details > haz clic en Receive action > haz clic en el código QR para copiar la dirección de Kadena

3. Haz clic en Start Deploy, entonces SenseCAP M4 desplegará FluxNode automáticamente. El tiempo de despliegue depende de la red del dispositivo, asegúrate de que el dispositivo tenga una buena conexión de red. Ahora la app puede desconectarse del SenseCAP M4 o seguir monitorizando el progreso del despliegue con la app.

**Nota: Asegúrate de que la red de tu dispositivo tenga una IP pública y DownloadSpeed >= 25 Mb/s y UploadSpeed >= 25 Mb/s. De lo contrario, el benchmark de Flux fallará.**

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png" alt="deploy2" width={600} height="auto" /></div>

4. Cuando comience la sincronización de la cadena de Flux, ve a Zelcore App e introduce la IP pública y el nombre en tu FluxNode. Luego haz clic en el botón Start para iniciar tu FluxNode.

Si tu FluxNode está funcionando bien y supera los benchmarks, tomará 1 bloque procesado para que el estado de tu FluxNode cambie a Started y de 1 a 10 bloques (de 2 a 20 minutos) para obtener el estado Confirmed. Confirmed es el estado final. Puedes comprobarlo en FluxOS actualizando la página de inicio; si el nodo obtiene el estado Confirmed, se mostrará en la página Status.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png" alt="deploy3" width={600} height="auto" /></div>

## Funciones avanzadas

Configuración UPnP
------------

UPnP significa universal plug and play, lo que básicamente permite que los dispositivos de tu red soliciten que tu router abra puertos para el tráfico entrante. UPnP puede ser una solución más sencilla si tu router es compatible y se ajusta a los estándares UPnP adecuados.

Si quieres desplegar múltiples SenseCAP M4 Square en una sola dirección IP externa, asegúrate de que **el router al que está conectado el dispositivo sea compatible con UPnP y lo tenga activado.**

Nota: una sola dirección IP externa **admite como máximo el despliegue de 8 FluxNodes**.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

- 1 SenseCAP M4 Square ha desplegado FluxNode

- 2 SenseCAP Hotspot App se conecta al M4 mediante Bluetooth

- 3 Haz clic en el icono de configuración y en UPnP Setting

- 4 Habilita UPnP y elige un puerto que no esté en uso

- 5 Haz clic en confirmar y envía la configuración

- 6 Ahora el M4 UPnP está habilitado y el estado de UPnP es ENABLE

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Configuración de Fractus
---------------

El nodo Fractus nació para aumentar el almacenamiento de la red Flux. Un nodo Fractus es un nodo de nivel Cumulus que proporciona al menos 10 TB de almacenamiento. Los nodos Fractus ganarán un 15% adicional de Flux además de la recompensa nativa de bloque de Flux.

Requisitos mínimos para ejecutar nodos Fractus：

- Un colateral de 1000 Flux.
- 2 núcleos de CPU.
- 4 hilos de CPU.
- 240 eventos de CPU por segundo.
- 9250 GB de almacenamiento en una sola partición (se permite RAID).
- 80 MB/s de velocidad de escritura en disco.
- 100 Mb/s de descarga/carga.

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

- 1 SenseCAP M4 Square ha desplegado FluxNode
- 2 Conecta una unidad de 10 TB al USB3.1 de SenseCAP M4 Square
- 3 Conecta la SenseCAP Hotspot App al M4 vía Bluetooth
- 4 Haz clic en el icono de configuración y en Configuración de Fractus
- 5 Activa Fractus y haz clic en Confirm para enviar la configuración
- 6 Ahora el M4 Fractus está abierto y el estado de Fractus es True

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

Añadir al panel
----------------

Para obtener más información sobre tu SenseCAP M4 Square, añádelo al panel de SenseCAP.

- Añadir directamente: en la página de FluxNode, haz clic en el icono + e introduce el nombre personalizado y el SN (en la etiqueta del dispositivo) para añadir tu dispositivo al panel

- Añadir vía Bluetooth: si tu M4 ha desplegado FluxNode, conecta el M4 con la SenseCAP Hotspot App vía Bluetooth y luego añádelo al panel.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

Restaurar bloques
-------------

Conecta el M4 con la SenseCAP Hotspot App vía Bluetooth y luego abre la app Flux y haz clic en el botón Restore Block. El M4 restaurará los bloques automáticamente y no se necesitan otros pasos. El tiempo de restauración depende de la red del dispositivo, asegúrate de que el dispositivo tenga una buena conexión de red.

Eliminar
------

**¡Opera con cuidado!** Elimina el CUMULUS FluxNode que se ha desplegado en el SenseCAP M4. Conecta el M4 con la SenseCAP Hotspot App vía Bluetooth y luego abre la app Flux y haz clic en el botón Delete para eliminar FluxNode.

Reimplementar
--------

**¡Opera con cuidado!** Reimplementar eliminará automáticamente primero el FluxNode desplegado. Conecta el M4 con la SenseCAP Hotspot App vía Bluetooth y luego abre la app Flux y haz clic en el botón Redeploy e introduce la nueva información de FluxNode para reimplementar.

**Lista de aplicaciones descentralizadas compatibles**
====================================

- Nodo Flux Cumulus

- Flux Cumulus Fractus (TBD)

**Configuración de red del nodo Flux Cumulus**
===========================================

Para garantizar el correcto funcionamiento de tu Flux Node, asegúrate de configurar tu red adecuadamente. A continuación cubriremos los requisitos de red para nodos únicos y múltiples.

**Requisitos**

- Una dirección IP externa. El número máximo de nodos Flux admitidos en una sola dirección IP externa es 8. Si tienes más de ocho dispositivos, es posible que necesites más direcciones IP externas

- Entorno de red cableada estable, ancho de banda ≥25 Mbps

- El router admite funciones de UPNP y reenvío de puertos, para reenviar puertos al dispositivo.

**Configurar nodo único**

[Refer to the flux official documentation](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**Configurar multinodo**

SenseCAP M4 Square no admite múltiples FluxNodes
