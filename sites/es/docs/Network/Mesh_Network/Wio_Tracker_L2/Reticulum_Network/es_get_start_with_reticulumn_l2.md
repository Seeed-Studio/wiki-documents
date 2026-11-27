---
description: Esta guía explica la instalación de Reticulous para conectarse a la red mallada Reticulum utilizando el Seeed Studio L2 Pro.
title: Primeros pasos con Reticulous
keywords:
    - reticulum
    - L2 Pro
    - reticulous
    - red mallada
    - pila de red
    - malla LoRa
    - independiente del transporte
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /reticulum_l2_pro_reticulous
sku: 100029766
sidebar_position: 1
last_update:
  date: 11/27/2026
  author: Michelle Huang
createdAt: '2026-11-27'
updatedAt: '2026-11-27'
url: https://wiki.seeedstudio.com/es/reticulum_l2_pro_reticulous/
---

# Reticulum en el L2 Pro con Reticulous

## ¿Qué es Reticulum?

[Reticulum](ihttps://reticulum.network/) es una pila de _red_ mallada independiente del transporte, que permite redes malladas que van mucho más allá del mero uso de LoRa: con Reticulum, los nodos se interconectan mediante LoRa, Wifi, bluetooth BLE, cualquier otro tipo de radio disponible (FM, AM, UHF, etc.), pero también a través de internet, o cualquier cosa que pueda aparecer en el futuro, _todo al mismo tiempo_. 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/reticulumdescription.png" style={{width:900, height:'auto'}}/>
</div>

Reticulum también es diferente de intentos anteriores de redes malladas solo LoRa, ya que es una _pila de red_ completa, no solo un protocolo de mensajería. Se pueden crear y utilizar protocolos y aplicaciones sin límites _encima_ del propio Reticulum. Reticulum es realmente una nueva [filosofía](https://reticulum.network/manual/zen.html) para redes malladas y comunicaciones, para redes _posinternet_.

La pila de red Reticulum (RNS) tiene un inmenso conjunto de posibilidades que ahora apenas empieza a explorarse. Su [documentación](https://reticulum.network/manual/index.html) es extensa, y es el lugar donde empezar para cualquiera que quiera comprenderla en profundidad y construir sobre ella. 

Cualquiera que desee explorar Reticulum puede hacerlo utilizando cualquier ordenador que ejecute cualquier sistema operativo. Usar un gestor de paquetes (apt, pip, pipx) para instalar fácilmente el paquete base _reticulum_ y su aplicación de terminal complementaria _nomadnet_ o el programa gráfico _sideband_ es un buen comienzo. Algunos pueden preferir formas más modernas e integradas de conectarse a Reticulum, como [ratspeak](https://ratspeak.org/) o [meshchatX](https://meshchatx.com/). Existen muchas de estas aplicaciones para permitir que teléfonos y ordenadores se conecten a la red Reticulum, por ejemplo mediante wifi local o internet.

## Reticulous.

Una forma sencilla e integrada de conectarse a Reticulum que requiere pocos o ningún conocimiento técnico previo es [Reticulous](https://reticulous.net/), que es el objeto de este breve tutorial. 

Reticulous es una suite totalmente integrada para la serie de microcontroladores ESP32, que ejecuta una pila completa de Reticulum, un sistema operativo gráfico (incluida una interfaz web) y numerosas aplicaciones fáciles de usar para enviar mensajes, navegar por páginas de nomadnet, realizar llamadas de voz, participar en conferencias de voz y mucho, mucho más, utilizando lora, bluetooth y wifi.

Reticulous es desarrollado principalmente por Rop Gonggrijp, un pionero holandés de internet. Ha sido cuidadosamente diseñado y programado exclusivamente mediante el uso de LLM.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/1_reticulous-website.png" style={{width:900, height:'auto'}}/>
</div>

### Instalación de Reticulous en el L2 Pro


1. Utiliza un navegador web compatible con el protocolo _WebSerial_. Es decir, FireFox con una versión posterior a la v.151 (las versiones anteriores requieren la instalación de un [complemento Webserial](https://addons.mozilla.org/en-US/firefox/addon/webserial-for-firefox/).), o cualquier navegador basado en Chrome.

2. Conecta tu navegador al [sitio web de reticulous](https://reticulous.net), haz clic en _"flashing"_ y en el enlace [open flashmon](https://reticulous.net/flashmon/), o conéctate directamente a [flashmon](https://reticulous.net/flashmon/), la aplicación de flasheo para Reticulous.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_reticulous-flashing.png" style={{width:600, height:'auto'}}/>
</div>

3. Asegúrate de que tu dispositivo esté conectado por USB. Es posible que tengas que autorizar al navegador a _acceder al puerto serie_ de diferentes maneras, dependiendo del navegador y de tu sistema operativo. 

Para usuarios de sistemas operativos basados en linux, tu usuario debe añadirse al grupo _dialout_, ejecutando el comando:

```
sudo adduser [name-of-your-user] dialout
``` 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_L2-usb-connect.jpg" style={{width:600, height:'auto'}}/>
</div>

4. El dispositivo debe ponerse en modo DFU para que el flasheo sea posible. Pulsa el botón _user_ ("U/B"), situado en el centro a la derecha del dispositivo y mantenlo pulsado mientras enciendes el dispositivo, o mientras pulsas el botón de _reset_ si ya estaba encendido. La pantalla se quedará en negro; el dispositivo está ahora en modo DFU, listo para el flasheo.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/3_reticulous-flashing-detecting.png" style={{width:600, height:'auto'}}/>
</div>

5. Reticulous Flashmon debería detectar el modelo correcto de dispositivo y mostrarte un cuadro de diálogo. Pulsa _"Flash Reticulous to seeed-l2pro"_.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/4_reticulous-flashing-in-progress.png" style={{width:600, height:'auto'}}/>
</div>

6. Espera a que termine el flasheo y el dispositivo se reiniciará.


### Configuración de Reticulous

Tras el flasheo correcto, hay varias formas de configurar Reticulous:

#### A través de la app de incorporación en pantalla

La pantalla del dispositivo te invitará a configurar parámetros básicos: conectarte a una red wifi, elegir una contraseña maestra para el dispositivo, introducir algunos parámetros de LoRa.

#### A través de la WebUI

Una característica útil de Reticulous es su WebUI. Desde un navegador web se pueden controlar todas las funciones de reticulous, con más facilidad y más espacio que en la propia pantalla del dispositivo. Esto también puede utilizarse de forma remota (en el caso de dispositivos integrados como un Xiao colocado en una caja en una azotea o un balcón) y para dispositivos (como el Xiao) que ni siquiera tienen pantalla o interfaz.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-webui-LXMF.png" style={{width:900, height:'auto'}}/>
</div>

Durante los primeros 10 minutos tras el arranque, reticulous creará una red wifi con un nombre que empieza por _"reticulous_". Conéctate a ella y abre tu navegador web en https://reticulous.local (puede que se queje del certificado, esto es normal, simplemente conéctate de todos modos).

Aquí se te presentarán las mismas opciones de incorporación que si estuvieras en el propio dispositivo: contraseña maestra, configuración de wifi, parámetros de LoRa, etc. 


#### Interfaces

Una noción clave en Reticulum es la noción de _interfaces_. Como Reticulum es independiente del transporte, significa que puede conectarse mediante cualquier medio posible. Cada _interface_ es un medio de conexión. Debe configurarse correctamente y entonces Reticulum enrutará la información sin problemas a través de todas las interfaces, dependiendo de dónde se encuentre un destino. Cuando una interfaz cae, el tráfico continuará a través de las interfaces restantes.

Las interfaces pueden configurarse en el menú "settings" / "reticulum mesh" / "interfaces", y pueden ser de muchos tipos diferentes:

- _TCP_: un tipo de interfaz que se conecta a Reticulum a través de Internet. Es un buen punto de partida si quieres conectarte a una parte más amplia de la red Reticulum. Encuentra direcciones que usar como interfaces TCP en el [directorio de recetas de RNS](https://directory.rns.recipes/)

- _auto_: la interfaz "auto" utiliza la conectividad disponible (wifi, bluetooth BLE) para conectarse automáticamente a otros dispositivos dentro del alcance que tengan una interfaz "auto" conectada. Es la forma más sencilla de conectar dos dispositivos en una red local.

- _LoRa_: configurar ajustes compartidos para LoRa como una frecuencia base, un ancho de banda y un factor de dispersión (SF) permite que varios dispositivos se conecten entre sí a largas distancias. Estos ajustes deben ser objeto de un consenso local, dependiendo de las normativas locales, la ocupación de frecuencia y tus necesidades específicas.

- _Bluetooth_: si se activa, el dispositivo puede conectarse a otros dispositivos con interfaces bluetooth activadas. Es bastante limitado en comparación con wifi o LoRa, pero puede ser útil en algunos casos (los dispositivos basados en nRF52, por ejemplo, no tienen conexión bluetooth...)

- _rnode_: un tipo especial de interfaz que conecta un dispositivo con capacidad LoRa a otro dispositivo que NO tiene capacidad LoRa, para proporcionarle capacidad LoRa (como una especie de "módem LoRa"). Reticulous permite esta función, por lo que tu dispositivo L2 Pro puede utilizarse para proporcionar una interfaz _rnode_ a un portátil o a un teléfono, permitiéndole conectarse a Reticulum mediante LoRa, a través de un cable USB o mediante una conexión Bluetooth. Puedes proporcionar conectividad a un dispositivo (portátil, teléfono) usando una interfaz rnode, mientras utilizas al mismo tiempo todas las demás funcionalidades de Reticulous. 


### Uso de Reticulous

#### A través de la webUI

Una vez que se haya configurado tu red wifi, puedes volver a la pantalla de configuración de wifi (yendo al menú _"settings"_, luego al submenú _"wifi"_) para comprobar la dirección IP del L2 Pro, y escribir su dirección IP en tu navegador web desde un ordenador conectado a la misma red, para acceder a la WebUI.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-wifi-settings.png" style={{width:300, height:'auto'}}/>
</div>

Después de introducir tu _contraseña maestra_ podrás acceder a todas las funcionalidades de Reticulous en tu navegador, en un entorno con ventanas.

#### En el dispositivo usando la pantalla táctil

Reticulous presenta una interfaz "similar a un teléfono", con un conjunto de aplicaciones dedicadas para utilizar diferentes protocolos sobre la red Reticulum. Pulsa cada app para usarla y utiliza el botón _user_ (en el centro a la derecha del dispositivo) para volver al _cajón de aplicaciones_ en cualquier momento. Aquí tienes algunos ejemplos de aplicaciones:


<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-main-menu.png" style={{width:300, height:'auto'}}/>
</div>


##### LXMF

LXMF (el Lightweight Extensible Message Format) es el protocolo utilizado para enviar mensajes cifrados mediante Reticulum. Introduce la dirección LXMF de alguien, o espera a que su destino sea anunciado y mostrado en la sección _"on the mesh"_ de la app LXMF, ¡y empieza a chatear!

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-LXMF.png" style={{width:300, height:'auto'}}/>
</div>


##### Nomadnet

Algunos nodos en Reticulum son Nodos Nomadnet, que sirven páginas muy simples basadas en texto, usando el marcado _Micron_. Usa la app Nomadnet para introducir manualmente el _destination_ de una de esas páginas (por ejemplo, la página Aleph Rngit es donde el código fuente principal de Reticulum está siendo distribuido por su autor, Mark Qvist, en el siguiente destino: "a8d24177d946de4f1f0a0fe1af9a1338"), o espera a que algunos destinos aparezcan como _announces_ en la sección _on the mesh_ de la app Nomadnet.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/6_reticulous-webui-Nomadnet.png" alt="Navegador Nomad mostrando una sala de chat en la interfaz web de Reticulous" style={{width:900, height:'auto'}} />
</div>

##### RRC

RRC es el Reticulum Relay Chat, un protocolo similar al antiguo protocolo IRC usado en Internet, que permite chats de grupo en salas. 

Añade el destino de un _hub_ conocido (por ejemplo, el destino del popular hub _rnscommunity_ es "28c7c1a68c735693aa8e6b8193ed44b2"), o espera a que uno aparezca anunciado en la sección _on the mesh_ de la app, luego conéctate a él y selecciona una sala a la que unirte, o crea la tuya propia.


##### ¡El único límite es el cielo!

Explora muchas otras aplicaciones dentro del conjunto Reticulous, aprende más sobre Reticulum y sus infinitas posibilidades, únete a una comunidad de miles de usuarios, convoca encuentros locales públicos con tus amigos y sé testigo del nacimiento de la red post‑internet. Puede que quieras desarrollar tus propios protocolos y aplicaciones para Reticulum... pero eso estaría fuera del alcance de este tutorial.


### Conectar con otros dispositivos

Para conectarte localmente a otros dispositivos, o para construir una red mallada (esté conectada o no al resto de la red Reticulum), debes asegurarte de lo siguiente:

1. El software original de Reticulum es tan mínimo y frugal que puede ejecutarse en cualquier ordenador de menos de 20 años. Usa cualquier portátil viejo o una Raspberry Pi antigua o cualquier otra SBC como nodo. Cualquier teléfono serviría. Cualquier otro dispositivo basado en microcontrolador, como otro L2 Pro o un Xiao, también sería un nodo Reticulum perfecto...

2. Instala Reticulum en el otro dispositivo (o Reticulous si es un dispositivo basado en ESP32);

3. Asegúrate de que ambos dispositivos tienen parámetros LoRa similares si quieres usar LoRa, o de que ambos están usando Wifi en redes que estén interconectadas, o de que ambos están usando la interfaz _"auto"_ y tienen su wifi o bluetooth activados, o de que ambos tienen una interfaz TCP que los conecte a Internet;

4. Espera hasta que ambos dispositivos hayan _announced_ su _destination_ mutuamente, y usa la aplicación LXMF en un dispositivo para hacer clic en el destino del otro dispositivo, una vez que haya aparecido en la lista "on the mesh", para iniciar un chat;

CONSEJO: La pila de red Reticulum se basa para su enrutamiento en _announces_ de los nodos de su _destination_, y en _path requests_ enviadas por un nodo a sus vecinos para intentar encontrar una _path_ hacia un destino específico. Para conectarte a otro dispositivo que ejecute Reticulum, asegúrate de que ambos dispositivos han _announced_ su destino a sus vecinos. Normalmente se hace automáticamente cuando Reticulous arranca, y luego cada 30 minutos.

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>