---
description: SenseCAP M4 Inicio Rápido
title: SenseCAP M4 Inicio Rápido
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

**Inicio Rápido de SenseCAP M4 Square**
========================================

**SenseCAP M4 Square** proporciona la forma más fácil de desplegar The Next Generation Computational Network(FluxNode). Sin comandos de Linux, sin necesidad de construir un entorno, y solo 4 pasos para completar el despliegue.

**Prerrequisitos**

*   Red con velocidad de subida suficiente para desplegar un FluxNode CUMULUS **(Mínimo 25Mbps de Subida**)
    
*   Un nuevo FluxNode CUMULUS creado
    

lo que necesitas
================

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png)

Apostar Nodo Flux CUMULUS
==========================

El tutorial toma Binance como ejemplo

Paso1 Ve al exchange para comprar Flux
---------------------------------------

1 Descarga la [App de Binance](https://www.binance.com/zh-CN/download) y registra una cuenta

2 Flux no se puede comprar con moneda fiat. Por favor compra USDT primero, luego convierte USDT a Flux

4 En la página de Trade, selecciona spot y en el Market selecciona FLUX/USDT

5 Ingresa el número de USDT y asegúrate de que el Flux convertido sea mayor a 1000

6 Haz clic en el botón Buy, Ahora has comprado flux exitosamente

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg)

Paso2 Descarga la App Zelcore y registra tu cuenta
---------------------------------------------------

1 Descarga [Zelcore App](https://zelcore.io/) e inicia sesión en tu cuenta de Zelcore

2 En la página Portfolio, haz clic en el botón Add Assets para agregar el activo FLUX BSC (cartera de pagos)

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png)

Paso3 Retira Flux de Binance a la Cartera Zelcore
---------------------------------------------------

1 Abre la App de Binance y visita la página Wallet

2 Visita Flux, haz clic en Withdraw y selecciona Send via Crypto Network

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200)

3 Ingresa la información de retiro y envía

*   Address: Abre la App Zelcore, Copia la dirección de recepción FLUX BSC, y pégala en Binance
    

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908)

*   Network: Selecciona BB Smart Chain (BEP20)
    
*   Amount: 1000+ flux
    
*   Send From: Spot&Funding Wallet
    

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200)

4 Verifica tu información de retiro y envía a Zelcore

Paso4 Crea un nuevo Nodo Flux Cumulus
--------------------------------------

1 Abre la App Zelcore, y verifica que tu Flux haya sido enviado a tu activo FLUX BSC (cartera de pagos)

2 Visita la página Apps, y abre Fusion para intercambiar FLUX BSC a Flux(cartera de pagos).

*   Sell Asset: Selecciona FLUX BSC
    
*   Buy Asset: Selecciona FLUX
    

Nota: Asegúrate de tener suficiente BNB para cubrir la tarifa de intercambio

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200)

3 Envía el Flux desde la cartera de pagos a otra cartera como el activo Flux de Mining

4 ¡Ahora puedes desplegar el nuevo nodo Flux Cumulus en SenseCAP M4 Square!

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882)

Desplegar FluxNode en SenseCAP M4 Square
=========================================

**Paso1 Encender y conectar a internet**
-----------------------------------------

1 Conecta el adaptador de corriente de 12V/2A proporcionado al conector de alimentación DC-IN.

2 Conecta el cable de red al Ethernet2.

3 El dispositivo se configurará automáticamente. El color naranja fijo en L3 indica que la configuración y conexión a internet son exitosas.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png)

**Paso2 Instalar SenseCAP Hotspot App y Zelcore App**
------------------------------------------------------

1 SenseCAP Hotspot App está diseñada para configurar y gestionar dispositivos. Por favor escanea el siguiente código QR para instalar SenseCAP Hotspot App.

2 Regístrate en la cuenta SenseCAP con tu email o inicia sesión directamente.

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png)](https://app.sensecapmx.com/)

3 Zelcore App es lanzada por Flux para encontrar, gestionar, comerciar, y verdaderamente poseer tus activos digitales, **FluxNode**, e información, Por favor haz clic en la siguiente imagen para instalar Zelcore App.

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png)](https://zelcore.io/)

**Paso3 Configurar SenseCAP M4**
---------------------------------

1 Presiona el dedal en la parte inferior izquierda del dispositivo, y la tapa final se levanta luego retírala.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png)

2 Presiona el botón B1 por 5s hasta que el indicador L2 parpadee azul para activar el modo de configuración Bluetooth.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png)

3 Selecciona Flux y haz clic en Setup en SenseCAP Hotspot App

*   Escanea el dispositivo vía Bluetooth
    
*   Selecciona el dispositivo para Conectar
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg)

4 La App se conecta al dispositivo exitosamente. ahora haz clic en el botón install para instalar flux dApp en el dispositivo.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png)

**Paso4 Desplegar Nodo Flux**
------------------------------

1 La instalación de flux dApp está completa, ahora haz clic en el botón Open y comienza a desplegar CUMULUS FluxNode.

**Nota: Por favor compra 1000 Flux como colateral y transfiérelo a tus carteras Zelcore Flux para la configuración de CUMULUS FluxNode.**

**Guía**

*   [Guía de Configuración de FluxNode](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)

*   [Guía de Video Tutorial de Configuración de Flux Light Node (El tutorial de configuración de Zelcore y depósito de Flux es desde 8:07 hasta 12:30)](https://www.youtube.com/watch?v=RT1uaSrurv4)
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png)

2 Ingresa Identity Key, Collateral TX ID, Output Index, Zel ID, y Kadena Address desde la APP Zelcore, por favor descarga Zelcore para más información.

>     **Identity Key**：haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en edit en el menú expandido > haz clic en Identity Key para copiarlo
> 
>     **Collateral TX ID**：haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en Edit en el menú expandido > haz clic en Collateral TX ID para copiarlo
> 
>     **Output Index**：haz clic en Apps > haz clic en FluxNodes en la página Apps > haz clic en tu FluxNode > haz clic en Edit en el menú expandido > haz clic en Output Index para copiarlo
> 
>     **Zel ID**：haz clic en Apps > haz clic en Zel ID en la página Apps > haz clic en código QR para copiar Zel IDdsdsdsssddss
> 
>     **Kadena Address**：NIMBUS y STRATUS pueden ingresar la dirección Kadena para obtener recompensas KDA adicionales. si despliegas CUMULUS no necesitas ingresarla.   haz clic en Portfolio > haz clic en Show Zero Sum en la página > haz clic en Kadena > haz clic en Details > haz clic en la acción Receive > haz clic en código QR para copiar la dirección Kadena

3 Haz clic en Start Deploy, entonces SenseCAP M4 desplegará FluxNode automáticamente. El tiempo de despliegue depende de la red del dispositivo, por favor asegúrate de que el dispositivo tenga una buena red. Ahora la App puede desconectarse del SenseCAP M4 o seguir monitoreando el progreso del despliegue con la App.

**Nota：Asegúrate de que la red de tu dispositivo tenga una IP pública y DownloadSpeed >= 25 Mb/s y UploadSpeed >= 25 Mb/s. De lo contrario, el benchmark de Flux fallará.**

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png)

4 cuando comience la sincronización de la cadena Flux, Por favor ve a la App Zelcore e ingresa la IP pública y el nombre en tu FluxNode. Luego haz clic en el botón Start para iniciar tu FluxNode.

Si tu FluxNode está funcionando bien y está pasando los benchmarks. Tomará 1 bloque para ser minado para que el estado de tu FluxNode cambie a Started y 1-10 bloques (2 a 20 minutos) para obtener Confirmed. Confirmed es el estado final. Puedes verificar en FluxOS refrescando la página de inicio si el nodo obtiene Confirmed, lo dirá en la página Status.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png)

**Características Avanzadas**
=============================

Configuración UPnP
-------------------

UPnP significa universal plug and play que esencialmente permite a los dispositivos en tu red solicitar que los puertos sean abiertos por tu router para tráfico entrante. UPNP puede ser una solución más fácil si tu router es compatible y se adhiere a los estándares upnp apropiados.

Si quieres desplegar múltiples SenseCAP M4 Squares en una sola dirección IP externa, asegúrate de que **el router donde el dispositivo está conectado soporte UPnP y lo tenga activado.**

Nota: una sola dirección IP externa **máximo soporta desplegar 8 FluxNodes**.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

*   1 SenseCAP M4 Square ha desplegado FluxNode
    
*   2 SenseCAP Hotspot App Conecta M4 vía Bluetooth
    
*   3 Haz clic en el ícono de configuración y UPnP Setting
    
*   4 Habilita UPnP y elige un puerto que no esté en uso
    
*   5 Haz clic en confirm y envía la configuración
    
*   6 Ahora el M4 UPnP está habilitado el estado UPnP es ENABLE
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Configuración Fractus
---------------------

El nodo Fractus nació para aumentar el almacenamiento de la red Flux. Un nodo Fractus es un nodo de nivel Cumulus que proporciona al menos 10TB de almacenamiento. Los nodos Fractus ganarán un 15% adicional de Flux además de la recompensa nativa de bloque Flux.

Requisitos mínimos para ejecutar nodos Fractus：

*   Un colateral de 1000 Flux.
*   2 Núcleos de CPU.
*   4 Hilos de CPU.
*   240 Eventos de CPU Por Segundo.
*    9250 GB de almacenamiento en una sola partición (Raid permitido).
*    80MB/s Velocidad de Escritura de Disco.
*   100Mb/s Descarga/Subida.

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

*   1 SenseCAP M4 Square ha desplegado FluxNode
*   2 Conecta una unidad de 10TB al USB3.1 del SenseCAP M4 Square
*   3 SenseCAP Hotspot App Conecta M4 vía Bluetooth
*   4 Haz clic en el ícono de configuración y Fractus Setting
*   5 Activa Fractus y haz clic en Confirm para enviar la configuración
*   6 Ahora el M4 Fractus está abierto y el estado Fractus es True

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

Agregar al Dashboard
--------------------

Para más información sobre tu SenseCAP M4 Square, Por favor agrégalo al dashboard de SenseCAP.

*   Agregar directamente: En la página FluxNode, haz clic en el ícono + e ingresa el nombre personalizado y SN(en la etiqueta del dispositivo) para agregar tu dispositivo al DashboardAgregar vía Bluetooth
    
*   Agregar vía Bluetooth: si tu M4 ha desplegado FluxNode, conecta M4 con SenseCAP Hotspot App vía Bluetooth. y luego agrégalo al dashboard.
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

Restaurar Bloque
----------------

Conecta M4 con SenseCAP Hotspot App vía Bluetooth. y luego abre la app Flux y haz clic en el botón Restore Block.M4 restaurará bloques automáticamente y no necesita otros pasos. El tiempo de restauración depende de la red del dispositivo, por favor asegúrate de que el dispositivo tenga una buena red.

Eliminar
--------

**¡Por favor opera cuidadosamente!** Elimina el FluxNode CUMULUS que ha sido desplegado en SenseCAP M4. Conecta M4 con SenseCAP Hotspot App vía Bluetooth. y luego abre la app Flux y haz clic en el botón Delete para eliminar FluxNode.

Redesplegar
-----------

**¡Por favor opera cuidadosamente!** Redesplegar eliminará automáticamente el FluxNode desplegado primero. Conecta M4 con SenseCAP Hotspot App vía Bluetooth. y luego abre la app Flux y haz clic en el botón Redeploy e ingresa nueva información de FluxNode para redesplegar.

**Lista de Aplicaciones Descentralizadas Soportadas**
=====================================================

*   Flux Cumulus Node
    
*   Flux Cumulus Fractus (TBD)
    

**Configuración de Red de Flux Cumulus Node**
=============================================

Para asegurar el funcionamiento adecuado de tu Nodo Flux, asegúrate de configurar tu red apropiadamente. A continuación cubriremos los requisitos de red para nodos únicos y múltiples.

**Requisitos**

*   Una dirección IP externa. El número máximo de nodos Flux soportados en una sola dirección IP externa es 8. Si tienes más de ocho dispositivos, puedes necesitar más direcciones IP externas
    
*   Entorno de red cableada estable, ≥25 Mbps de ancho de banda
    
*   El router soporta UPNP y funciones de reenvío de puertos, para reenviar puertos al dispositivo.
    

**Configurar Nodo Único**

[Consulta la documentación oficial de flux](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**Configurar Multi-nodo**

SenseCAP M4 Square no soporta múltiples FluxNodes