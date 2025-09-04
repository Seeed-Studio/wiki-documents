---
description: SenseCAP M4 Inicio Rápido
title: SenseCAP M4 Inicio Rápido
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

# SenseCAP M4 Square Inicio Rápido

**SenseCAP M4 Square** proporciona la forma más fácil de desplegar La Red Computacional de Próxima Generación (FluxNode). Sin comandos de Linux, sin necesidad de construir un entorno, y solo 4 pasos para finalizar el despliegue.

## Prerrequisitos

* Red con velocidad de subida suficiente para desplegar un FluxNode CUMULUS **(Mínimo 25Mbps de Subida)**
* Un nuevo FluxNodes CUMULUS creado

## Lo Que Necesitas

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png" alt="quick-start" width={600} height="auto" /></div>

## Apostar Nodo Flux CUMULUS

El tutorial toma Binance como ejemplo

### Paso1 Ir al exchange para comprar Flux

1. Descargar la [App de Binance](https://www.binance.com/zh-CN/download) y registrar una cuenta

2. Flux no puede comprarse con moneda fiat. Por favor compra USDT primero, luego convierte USDT a Flux

3. En la página de Trade, selecciona spot y en el Mercado selecciona FLUX/USDT

4. Ingresa el número de USDT y asegúrate de que el Flux convertido sea mayor a 1000

5. Haz clic en el botón Buy, Ahora has comprado flux exitosamente

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg" alt="stake-flux" width={600} height="auto" /></div>

### Paso2 Descargar la App Zelcore y registrar tu cuenta

1. Descargar [App Zelcore](https://zelcore.io/) e iniciar sesión en tu cuenta de Zelcore

2. En la página Portfolio, haz clic en el botón Add Assets para agregar el activo FLUX BSC (portafolio de Payments)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png" alt="zelcore" width={600} height="auto" /></div>

### Paso3 Retirar Flux de Binance a la Billetera Zelcore

1. Abrir la App de Binance y visitar la página Wallet

2. Visitar Flux, hacer clic en Withdraw y seleccionar Send via Crypto Network

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200" alt="binance" width={600} height="auto" /></div>

3. Ingresar información de retiro y enviar

* Address: Abrir App Zelcore, Copiar la dirección de recepción FLUX BSC, y pegar en Binance

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908" alt="withdraw" width={600} height="auto" /></div>

* Network: Seleccionar BB Smart Chain (BEP20)
* Amount: 1000+ flux
* Send From: Spot&Funding Wallet

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200" alt="send" width={600} height="auto" /></div>

4. Verificar tu información de retiro y enviar a Zelcore

### Paso4 Crear un nuevo Nodo Flux Cumulus

1. Abrir App Zelcore, y verificar que tu Flux haya sido enviado a tu activo FLUX BSC (portafolio de Payments)

2. Visitar la página Apps, y abrir Fusion para intercambiar FLUX BSC a Flux (portafolio de Payments).

* Sell Asset: Seleccionar FLUX BSC
* Buy Asset: Seleccionar FLUX

Nota: Asegúrate de tener suficiente BNB para cubrir la tarifa de intercambio

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200" alt="swap" width={600} height="auto" /></div>

3. Enviar el Flux del portafolio de Payments a otro portafolio como el activo Flux de Mining

4. ¡Ahora puedes desplegar el nuevo nodo Flux Cumulus en SenseCAP M4 Square!

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882" alt="deploy" width={600} height="auto" /></div>

## Desplegar FluxNode en SenseCAP M4 Square

### Paso 1 Encender y conectar a internet

1. Conecta el adaptador de corriente de 12V/2A proporcionado al conector de alimentación DC-IN.

2. Conecta el cable de red al Ethernet2.

3. El dispositivo se configurará automáticamente. Una luz naranja fija en L3 indica que la configuración y conexión a internet han sido exitosas.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png" alt="power" width={600} height="auto" /></div>

### Paso 2 Instalar la App SenseCAP Hotspot y la App Zelcore

1. La App SenseCAP Hotspot está diseñada para configurar y gestionar dispositivos. Por favor escanea el siguiente código QR para instalar la App SenseCAP Hotspot.

2. Regístrate en la cuenta SenseCAP con tu email o inicia sesión directamente.

<div style={{textAlign: 'center'}}><a href="https://app.sensecapmx.com/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png" alt="app" width={600} height="auto" /></a></div>

3. La App Zelcore es lanzada por Flux para encontrar, gestionar, intercambiar y poseer verdaderamente tus activos digitales, **FluxNode** e información. Por favor haz clic en la siguiente imagen para instalar la App Zelcore.

<div style={{textAlign: 'center'}}><a href="https://zelcore.io/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png" alt="zelcore" width={600} height="auto" /></a></div>

### Paso 3 Configurar SenseCAP M4

1. Presiona el dedal en la parte inferior izquierda del dispositivo, y la tapa final se levanta, luego retírala.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png" alt="setup1" width={600} height="auto" /></div>

2. Presiona el botón B1 durante 5s hasta que el indicador L2 parpadee en azul para activar el modo de configuración Bluetooth.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png" alt="setup2" width={600} height="auto" /></div>

3. Selecciona Flux y haz clic en Setup en la App SenseCAP Hotspot

* Escanea el dispositivo vía Bluetooth
* Selecciona el dispositivo para Conectar

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg" alt="setup3" width={600} height="auto" /></div>

4. La App se conecta al dispositivo exitosamente. Ahora haz clic en el botón install para instalar la dApp flux en el dispositivo.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png" alt="setup4" width={600} height="auto" /></div>

### Paso 4 Desplegar Flux Node

1. La instalación de la dApp Flux está completa, ahora haz clic en el botón Open y comienza a desplegar CUMULUS FluxNode.

**Nota: Por favor compra 1000 Flux como garantía y transfiérelo a tus billeteras Zelcore Flux para la configuración de CUMULUS FluxNode.**

**Guía**

* [Guía de Configuración FluxNode](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
* [Guía de Tutorial en Video de Configuración Flux Light Node (El tutorial de configuración Zelcore y depósito Flux es del 8:07 al 12:30)](https://www.youtube.com/watch?v=RT1uaSrurv4)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png" alt="deploy1" width={600} height="auto" /></div>

2. Ingresa Identity Key, Collateral TX ID, Output Index, Zel ID, y Kadena Address desde la APP Zelcore, por favor descarga Zelcore para más información.

> **Identity Key**: haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en edit en el menú expandido > haz clic en Identity Key para copiarlo
> 
> **Collateral TX ID**: haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en Edit en el menú expandido > haz clic en Collateral TX ID para copiarlo
> 
> **Output Index**: haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en Edit en el menú expandido > haz clic en Output Index para copiarlo
> 
> **Zel ID**: haz clic en Apps > haz clic en Zel ID en la página Apps > haz clic en código QR para copiar Zel ID
> 
> **Kadena Address**: NIMBUS y STRATUS pueden ingresar la dirección Kadena para obtener recompensas KDA adicionales. Si despliegas CUMULUS no necesitas ingresarla. haz clic en Portfolio > haz clic en Show Zero Sum en la página > haz clic en Kadena > haz clic en Details > haz clic en la acción Receive > haz clic en código QR para copiar la dirección Kadena

3. Haz clic en Start Deploy, entonces SenseCAP M4 desplegará FluxNode automáticamente. El tiempo de despliegue depende de la red del dispositivo, por favor asegúrate de que el dispositivo tenga una buena red. Ahora la App puede desconectarse del SenseCAP M4 o seguir monitoreando el progreso del despliegue con la App.

**Nota: Asegúrate de que la red de tu dispositivo tenga una IP pública y VelocidadDescarga >= 25 Mb/s y VelocidadSubida >= 25 Mb/s. De lo contrario, el benchmark de Flux fallará.**

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png" alt="deploy2" width={600} height="auto" /></div>

4. Cuando comience la sincronización de la cadena Flux, por favor ve a la App Zelcore e ingresa la IP pública y el nombre en tu FluxNode. Luego haz clic en el botón Start para iniciar tu FluxNode.

Si tu FluxNode está funcionando bien y está pasando los benchmarks. Tomará 1 bloque para ser minado para que el estado de tu FluxNode cambie a Started y 1-10 bloques (2 a 20 minutos) para obtener Confirmed. Confirmed es el estado final. Puedes verificar en FluxOS refrescando la página de inicio si el nodo obtiene Confirmed, lo dirá en la página Status.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png" alt="deploy3" width={600} height="auto" /></div>

## Características Avanzadas

Configuración UPnP
------------------

UPnP significa plug and play universal, que esencialmente permite a los dispositivos en tu red solicitar que el router abra puertos para el tráfico entrante. UPnP puede ser una solución más fácil si tu router es compatible y se adhiere a los estándares UPnP adecuados.

Si quieres desplegar múltiples SenseCAP M4 Squares en una sola dirección IP externa, asegúrate de que **el router donde está conectado el dispositivo soporte UPnP y lo tenga activado.**

Nota: una sola dirección IP externa **soporta máximo el despliegue de 8 FluxNodes**.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

*   1 SenseCAP M4 Square ha desplegado FluxNode
    
*   2 SenseCAP Hotspot App Conectar M4 vía Bluetooth
    
*   3 Hacer clic en el icono de configuración y Configuración UPnP
    
*   4 Habilitar UPnP y elegir un puerto que no esté en uso
    
*   5 Hacer clic en confirmar y enviar la configuración
    
*   6 Ahora el UPnP del M4 está habilitado, el estado UPnP es HABILITADO
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Configuración Fractus
---------------------

El nodo Fractus nació para aumentar el almacenamiento de la red Flux. Un nodo Fractus es un nodo de nivel Cumulus que proporciona al menos 10TB de almacenamiento. Los nodos Fractus ganarán un 15% adicional de Flux además de la recompensa nativa de bloque Flux.

Requisitos mínimos para ejecutar nodos Fractus：

*   Un colateral de 1000 Flux.
*   2 Núcleos de CPU.
*   4 Hilos de CPU.
*   240 Eventos de CPU Por Segundo.
*   9250 GB de almacenamiento en una sola partición (Raid permitido).
*   80MB/s de Velocidad de Escritura de Disco.
*   100Mb/s de Descarga/Subida.

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

*   1 SenseCAP M4 Square ha desplegado FluxNode
*   2 Conectar una unidad de 10TB al USB3.1 del SenseCAP M4 Square
*   3 SenseCAP Hotspot App Conectar M4 vía Bluetooth
*   4 Hacer clic en el icono de configuración y Configuración Fractus
*   5 Activar Fractus y hacer clic en Confirmar para enviar la configuración
*   6 Ahora el Fractus del M4 está abierto y el estado Fractus es Verdadero

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

Agregar al Panel de Control
---------------------------

Para más información sobre tu SenseCAP M4 Square, por favor agrégalo al panel de control de SenseCAP.

*   Agregar directamente: En la página FluxNode, hacer clic en el icono + e ingresar el nombre personalizado y SN (en la etiqueta del dispositivo) para agregar tu dispositivo al Panel de Control
    
*   Agregar vía Bluetooth: si tu M4 ha desplegado FluxNode, conecta M4 con SenseCAP Hotspot App vía Bluetooth. y luego agrégalo al panel de control.
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

Restaurar Bloque
----------------

Conecta M4 con SenseCAP Hotspot App vía Bluetooth. y luego abre la aplicación Flux y haz clic en el botón Restaurar Bloque. M4 restaurará bloques automáticamente y no necesita otros pasos. El tiempo de restauración depende de la red del dispositivo, por favor asegúrate de que el dispositivo tenga una buena red.

Eliminar
--------

**¡Por favor opera con cuidado!** Elimina el FluxNode CUMULUS que ha sido desplegado en SenseCAP M4. Conecta M4 con SenseCAP Hotspot App vía Bluetooth. y luego abre la aplicación Flux y haz clic en el botón Eliminar para eliminar FluxNode.

Redesplegar
-----------

**¡Por favor opera con cuidado!** Redesplegar eliminará automáticamente el FluxNode desplegado primero. Conecta M4 con SenseCAP Hotspot App vía Bluetooth. y luego abre la aplicación Flux y haz clic en el botón Redesplegar e ingresa nueva información de FluxNode para redesplegar.

**Lista de Aplicaciones Descentralizadas Soportadas**
=====================================================

*   Flux Cumulus Node
    
*   Flux Cumulus Fractus (TBD)
    

**Configuración de Red del Flux Cumulus Node**
==============================================

Para asegurar el funcionamiento adecuado de tu Flux Node, por favor asegúrate de configurar tu red apropiadamente. A continuación cubriremos los requisitos de red para nodos únicos y múltiples.

**Requisitos**

*   Una dirección IP externa, El número máximo de nodos Flux soportados en una sola dirección IP externa es 8. Si tienes más de ocho dispositivos, puedes necesitar más direcciones IP externas
    
*   Entorno de red cableada estable, ≥25 Mbps de Ancho de Banda
    
*   El router soporta UPNP, y funciones de reenvío de puertos, para reenviar puertos al dispositivo.
    

**Configurar Nodo Único**

[Consulta la documentación oficial de flux](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**Configurar Multi-nodo**

SenseCAP M4 Square no soporta múltiples FluxNodes