---
title: Sistema de monitorización remota inalámbrica con IA y Wifi HaLow
description: Esta página wiki presenta una demo de un sistema de monitorización remota inalámbrica con IA y Wifi Halow. Una guía paso a paso para construir el propio sistema del usuario.
keywords:
  - Wifi Halow
  - reCamera
  - detección perimetral con IA
slug: /ai_remote_wireless_monitor_system_bak
sku: 102991897, 110070108
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 2
last_update:
  date: 2025-11-19
  author: John Xiang
createdAt: '2025-11-21'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/application/ai_remote_wireless_monitor_system_bak/
---

# Sistema de monitorización remota inalámbrica con IA basado en reCamera y Wifi Halow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/6.gif" /></div>

Si eres un entusiasta de las actividades al aire libre, ¿a menudo te ves afectado por la falta de red en la naturaleza, la cobertura limitada del WiFi tradicional y la imposibilidad de que la cámara transmita imágenes en tiempo real a larga distancia? A través de este Wiki, puedes implementar tu propio **sistema de monitorización remota inalámbrica con IA**, basado en la **serie reCamera** y el módulo de transmisión de imágenes **Wifi Halow**. Por supuesto, puedes tener más imaginación, incluyendo, entre otros, los siguientes casos:

- Quieres monitorización inalámbrica para toda tu propiedad sin necesidad de cableado ni routers, con IA integrada a bordo que detecte actividades sospechosas.

- Tienes un camión y quieres detectar cualquier persona sospechosa cerca del vehículo, pero la red es inestable durante todo el año y no puede subir vídeo en tiempo real o las cámaras normales deben depender de la nube.

- Cuando estás explorando el bosque, quieres recibir en cualquier momento las imágenes de la cámara fija del campamento para identificar si hay osos u otros animales peligrosos, pero la distancia inalámbrica normal es demasiado corta.

**Entonces, ¿por qué reCamera y Wifi Halow pueden hacer realidad el sistema?** En primer lugar, reCamera proporciona IA en el extremo con una potencia de cálculo de 1 Tops. Así que puede ejecutar IA dentro del dispositivo sin depender de otros dispositivos de computación perimetral.

También se integra con Node-RED y hace que el proceso de desarrollo sea muy cómodo y eficiente. Si quieres que `rtsp` envíe flujo o usar `WebSocket` para mandar datos, solo necesitas arrastrar el nodo para implementarlo, y no necesitas construir una gran cantidad de programas desde cero. Consulta el enlace para más detalles: [Tutorial de Node-RED en reCamera](https://wiki.seeedstudio.com/es/recamera_develop_with_node-red/)

Aquí tienes un ejemplo de desarrollo con Node-RED: simplemente arrastra 3 nodos para construir un flujo de trabajo de visión con IA:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_1.png" /></div>

En cuanto a Wi-Fi HaLow, es una tecnología inalámbrica de baja frecuencia diseñada para el Internet de las Cosas, que ofrece las ventajas de largo alcance, bajo consumo de energía y gran ancho de banda. En la banda de frecuencia de 902–928 MHz, puede alcanzar una velocidad máxima de transmisión de aproximadamente 16 Mbps bajo un ancho de banda de 8 MHz, con una distancia de comunicación de hasta 1 km.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.png" /></div>

En comparación con el Wi-Fi tradicional de 2.4G/5G, HaLow proporciona una penetración más fuerte y una cobertura más amplia; y en comparación con otros métodos de comunicación de largo alcance como LoRa y Sub-GHz, HaLow ofrece un mayor ancho de banda, capaz de soportar la transmisión de diversos medios, incluyendo texto, audio, imágenes e incluso flujos de vídeo simultáneamente.

| Característica | Wi-Fi (2.4/5GHz) | **Wi-Fi HaLow (802.11ah)** | LoRaWAN |
|---------|------------------|-----------------------------|----------|
| Banda de frecuencia | 2.4GHz / 5GHz | **Sub-GHz (902–928MHz)** | Sub-GHz (p. ej., 868/915MHz) |
| Alcance de cobertura | 50–100 m | **Hasta ~1 km** | 2–15 km (dependiendo del entorno) |
| Capacidad de penetración | Media | **Fuerte (mejor penetración de paredes)** | Muy fuerte |
| Velocidad de datos típica | Cientos de Mbps a Gbps | **Hasta ~16 Mbps (canal de 8 MHz)** | Muy baja (0.3–50 kbps) |
| Latencia | Baja | **Baja (soporta imágenes/vídeo)** | Alta (segundos) |
| Consumo de energía | Medio–Alto | **Más bajo que el Wi-Fi tradicional** | Muy bajo|
| Escenarios adecuados | Redes locales, vídeo HD/4K | **Vídeo de largo alcance, monitorización remota, IoT industrial** | Detección de largo alcance, telemetría, IoT de ultra bajo consumo |

Por lo tanto, este sistema puede reducir el umbral técnico para que desarrolles un sistema de monitorización inteligente, de modo que los usuarios no profesionales puedan empezar fácilmente. En concreto, proporciona:

1. **Modelo de IA en el borde**: No necesitas construir tu propia arquitectura de IA desde cero, no necesitas un equipo de IA, no necesitas entender el algoritmo, úsalo cuando lo enciendas.

2. **Potencia de cálculo integrada**: No depende de portátiles, ordenadores de sobremesa u otros dispositivos de computación perimetral

3. **Herramienta de programación gráfica Node-RED**: No es necesario dominar la programación de front-end y back-end, ni profundizar en redes informáticas, integración de sistemas y otros conocimientos profesionales

4. **Conexión inalámbrica remota**: No se necesita cableado complejo, ni switches/routers

## Arquitectura general

La estructura del sistema es muy sencilla. Los dos módulos HaLow utilizan cable Ethernet para conectar la reCamera y la reTerminal respectivamente. Después de eso, los dos dispositivos se comunican de forma inalámbrica a través de Wifi HaLow.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1.png" /></div>

## Preparación de hardware

Para completar este proyecto, necesitarás cualquiera de las tres reCamera: reCamera - reCamera 2002 Serie, reCamera HQ PoE, reCamera Gimbal.

### 📦 reCamera

<table align="center">

<tbody><tr>

<th>Seeed Studio reCamera 2002W 8GB/64GB</th>

<th>Seeed Studio reCamera 2002HQ PoE 64GB</th>

<th>Seeed Studio reCamera Gimbal</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver más🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver más🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### reTerminal y placas de expansión

Si quieres mover la aplicación, puedes usar la reTerminal con una placa de expansión dedicada, la cual integra dos baterías 18650.

:::note

La reTerminal aquí puede ser reemplazada por cualquier dispositivo de computación perimetral con un puerto de red y una pantalla. Incluyendo, entre otros, portátiles, ordenadores de sobremesa, placas de desarrollo, etc. Te animamos a probar más. Solo usamos reTerminal para la demostración en este tutorial; reTerminal es un dispositivo terminal Raspberry Pi CM4 con múltiples interfaces como puertos de red.

:::

<table align="center">

<tbody><tr>

<th>Seeed Studio reTerminal - 5'' HMI CM4108032</th>

<th>Seeed Studio reTerminal E10-1 Expansion Board(Optional)</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-CM4108032-p-5712.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver más🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### Módulo de transmisión de imágenes Wifi Halow

Este es el módulo Wifi Halow que utilizamos en el proyecto. La banda de frecuencia de funcionamiento es 902-928 MHz, el ancho de banda es de 8 MHz, la velocidad máxima es de 16 Mbps, la distancia máxima de comunicación puede alcanzar 1 km y la potencia de transmisión es de 20 dBm. El dispositivo proporciona interfaz de antena IPEX, puerto de red de 10/100 Mbps, puerto serie TTL (hasta 350 kbps), soporta cifrado WPA2-PSK AES, alimentación de 5V/12V y funcionamiento fiable de -20 °C a 70 °C, con un consumo medio de energía de 1.5 W.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.jpg" /></div>

## Preparación de herramientas

- **PC**: Se utiliza para conectar la reCamera para depuración. Las operaciones posteriores necesitan iniciar sesión en el back-end de la reCamera y flashear el sistema operativo de Raspberry Pi para la reTerminal. Al mismo tiempo, la depuración será más conveniente si hay problemas en el PC, y todo tipo de herramientas de software estarán completas.

- **3 cables USB-C**:

Una conexión es de reCamera al PC para suministrar energía, y los otros dos se utilizan para alimentar el módulo Wifi Halow.

- **Teclado/ratón**: Conectar a la reTerminal para depuración.

- **Adaptador de corriente USB-C 5V3A** La misma fuente de alimentación que Raspberry Pi 4/5 para alimentar la reTerminal. Enlace de compra: [5V3A USB-C Power Supply](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)

- **(Opcional) Fuente de alimentación de 12V CC** Se utiliza para alimentar la placa de expansión de reTerminal. Enlace de compra: [12V DC Power Supply(US/EU)](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)

- **(Opcional) Soporte triangular para reCamera** Enlace de compra: [Mini Tripod](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)

:::note

No tienes que preocuparte por la fuente de alimentación del dispositivo, la fuente de alimentación de Raspberry Pi 4/5 se puede usar con reTerminal al mismo tiempo si piensas utilizar la placa de expansión, solo fuente de alimentación de 12V CC, ya no se necesita alimentación USB-C de 5V3A, porque el reTerminal puede obtener energía directamente de la placa de expansión.

:::

## Tutorial detallado: Configuración del módulo Wifi Halow de reCamera Configuración de reTerminal

La idea general de todo el sistema es permitir que la reCamera forme una red con el equipo terminal a través de Wifi HaloW. Primero, configura IP estática en el equipo terminal (reTerminal) y en la reCamera, porque en aplicaciones al aire libre o móviles no puede haber routers, no hay servicio DHCP y la IP debe asignarse manualmente.

Después de asignar la IP, estos dispositivos forman una "red de área local" y pueden accederse entre sí a través de la IP. En este momento, crea nodos de flujo y nodos WebSocket en la reCamera mediante Node-RED, envía el flujo de vídeo en forma de flujo de subida rtsp y envía el resultado de la detección de yolo a través de WebSocket.

Finalmente, se accede al flujo de vídeo y a los resultados de detección de IA en el dispositivo terminal, como VLC Media Player en Windows/Linux. Este tutorial mostrará cómo obtener el flujo de subida rtsp mediante ffplay en Linux.

### Fase 1: Configurar reCamera

#### Paso 1.1 Iniciar sesión en reCamera

Conecta la reCamera al ordenador con un cable USB-C. El dispositivo tarda algún tiempo en iniciarse justo después de encenderse. Después de esperar 1-2 minutos, abre cualquier navegador web e introduce ** 192.68.42.1 ** para entrar en el sistema de reCamera.

Necesitas configurar tu propia contraseña en el primer inicio de sesión. Por favor, recuerda tu contraseña y úsala más tarde. Después de entrar en el sistema de reCamera, deberías ver esta página:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t2.png" /></div>

:::note

Si no ves esta página, actualiza tu navegador.

Si tu dispositivo se ha utilizado o configurado antes, es posible que salte directamente al Workspace. En este momento, la dirección web es: 'http:// 192.168.42.1/#/workspace' Por favor, salta al siguiente paso. En cualquier caso, solo entra en el Workspace.

Si la actualización aún no lo resuelve, restablece el dispositivo o ponte en contacto con el soporte técnico para resolverlo.

:::

#### Paso 1.2 Configurar el nodo de la cámara

Haz clic en el botón verde en la esquina inferior derecha de la página para entrar en el Workspace.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3.png" /></div>

Pantalla de la página Workspace

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_0.png" /></div>

Haz doble clic en el nodo de la cámara para entrar en la página de configuración. Para garantizar la fluidez, configuramos el nodo de la cámara como **480P, 5 fotogramas**. Puedes probar una resolución o una tasa de fotogramas más alta, pero la latencia puede ser mayor.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_1.png" /></div>

#### Paso 1.3 Configurar el nodo de flujo

Como se mencionó anteriormente, necesitamos configurar el flujo de subida rtsp en Node-RED. En la lista de nodos de la izquierda, busca el nodo 'stream' o desliza la rueda del ratón hacia abajo hasta el final para encontrar el nodo Stream. Para el método de configuración, consulta: [Node-Red Stream Node Configuration](https://wiki.seeedstudio.com/es/recamera_develop_with_node-red/#nodo-de-flujo)Después de la configuración, deberías obtener el siguiente resultado:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_3.png" /></div>

Sigue completamente el tutorial de Node-RED para asegurarte de que tu salida sea a sscma, y el flujo de vídeo final se emitirá a: rtsp:// admin:admin@192.168.xxx.xxx:554/live, donde 192.168.xxx.xxx es la dirección IP estática de la reCamera. La IP estática se puede configurar libremente. Aquí se utiliza 192.168.10.100 para la demostración.

#### Paso 1.4.1 Configurar el nodo WebSocket

Para mostrar los resultados detectados por yolo en el equipo terminal, necesitamos enviar los resultados de la detección a través de WebSocket. El tipo de nodo WebSocket debe configurarse como 'connect' en lugar de 'listen'.

Al configurar la URL del nodo WebSocket aquí, debe configurarse como ws://192.168.
nnn.nnn:9000 De hecho, 192.168.nnn.nnn es la dirección IP estática del reTerminal o de tu propio otro equipo terminal, no la dirección IP estática de reCamera mencionada arriba. Aquí se utiliza 192.168.10.3 para la demostración. El resultado final es el siguiente:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_5.png" /></div>

#### Paso 1.5. Entrar en la página de ajustes

O en la página Workspace en la que acabas de modificar Node RED, haz clic en "Setting" en la esquina superior izquierda'

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t4_1.png" /></div>

> Figura 4: Marco de configuración de Workspace

#### Paso 1.6 Entrar en el terminal de reCamera

Después de entrar en la página de ajustes, selecciona 'Terminal' para entrar en la línea de comandos de reCamera

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t5.png" /></div>

> Figura 5: Marco de la página de Terminal de ajustes

Después de hacer clic en Terminal, necesitas iniciar sesión de nuevo, introduce el nombre de usuario: 'recamera', y luego introduce la contraseña establecida para usar el Terminal. el efecto es el siguiente. si olvidas tu contraseña, consulta el siguiente tutorial para restablecer el dispositivo: [reCamera Factory Reset](https://wiki.seeedstudio.com/es/recamera_getting_started/#restablecimiento-de-fábrica)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t6.png" /></div>

> Figura 6: Efecto de la página de Terminal después de iniciar sesión

#### Paso 1.7 Configurar IP estática de reCamera

En la reCamera, necesitamos configurar la red a través del sistema de red tradicional de Linux (ifupdown). El método es muy sencillo. Solo necesitamos entrar en el archivo de configuración de red y configurar el puerto Ethernet en la reCamera a la IP estática que quieras: 192.168.xxx.xxx.xxx. Aquí configuro la IP estática

102.168.10.100 Primero entra en el archivo de configuración de red a través del editor vi e introduce el siguiente comando en el terminal de reCamera:

```bash
sudo vi /etc/network/interfaces
```

Por favor, añade al final del archivo:

```bash
auto eth0
iface eth0 inet static
address 192.168.10.100
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_0.png" /></div>

Este código configura el puerto Ethernet de la reCamera de configuración como IP estática 192.168.10.100, la máscara de subred es 255.255.255.0 y la puerta de enlace es 192.168.10.1. Por supuesto, puedes usar 192.168.3.xxx o 192.168.42.xxx para una configuración libre de IP específica. Sin embargo, asegúrate de que esté en el mismo segmento de red que tu reTerminal o equipo terminal. Por ejemplo, tu reCamera es 192.168.33, entonces el reTerminal debe configurarse como 192.168.33.nnn. Si la IP estática del reTerminal se convierte en 192.168.32.nnn o 192.168.34.nnn, no se podrá comunicar.

Después de añadir el código anterior, introduce ''':wq''' para salir del editor vi y volver al terminal de reCamera. Luego introduce '''sudo reboot ''' para reiniciar la reCamera.

:::note

Cabe señalar que después de configurar la IP estática, la reCamera debe conectarse al PC con un cable de red. Al mismo tiempo, se debe configurar la IP estática en el PC antes de iniciar sesión de nuevo en la reCamera. Se utiliza la nueva IP estática de reCamera configurada al iniciar sesión. Aquí se utiliza Windows para configurar la IP estática como demostración. De nuevo, para todos los dispositivos configurados con IP estática, se debe garantizar que estén en el mismo segmento de red, como reCamera-192.168.10.100 y reTerminal-192.168.10.3, portátil (Windows)-192.168.10.2 De lo contrario, no podrán comunicarse entre sí. La configuración de referencia en Windows es la siguiente:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/tx.png" /></div>

:::

#### Paso 1.8 Comprobar la configuración de IP estática

Repite el paso 1.5 para volver a los ajustes de reCamera y comprobar si la IP estática se ha configurado correctamente:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_1.png" /></div>

Bien, ahora tenemos una IP estática configurada en la reCamera, ahora pasemos a la siguiente etapa

### Fase 2: Configurar el módulo de transmisión de imagen Wifi HaLow

#### Paso 2.1 Establecer el modo de funcionamiento de los dos módulos HaLow

Primero, configura uno de los módulos Wifi HaloW en modo AP y el otro en modo STA. No te preocupes por si el módulo AT o STA está conectado a la reCamera/equipo terminal. El orden no es importante, pero se garantiza al menos un módulo en modo STA y uno en modo AP.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t8.png" /></div>

#### Paso 2.2 Emparejar el módulo HaLow

Ahora pulsa el botón de emparejamiento en ambos módulos al mismo tiempo:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t9.png" /></div>
Después de eso, el LED verde de los dos módulos parpadeará. Cuando el parpadeo se detenga y el LED verde permanezca siempre encendido, el emparejamiento del módulo se habrá realizado correctamente.

¡Muy bien! Has emparejado con éxito dos módulos Wifi Halow, ahora pueden verse como ambos extremos de un cable de red y pueden usarse para conectar reCamera y el equipo terminal.

### Fase 3: Configurar dispositivos finales (reTerminal)

Ahora vamos a configurar IP estática en el reTerminal. Teóricamente, hay muchos métodos, como NetworkManager. NetworkManager es un demonio de gestión de red en el sistema Linux, que te ayuda automáticamente a gestionar todas las herramientas de conexión de red como Wi-Fi/Ethernet/dirección IP/DHCP/punto de acceso/enrutamiento. Puedes intentar usar NetworkManager. Sin embargo, para reducir el coste de aprendizaje, utilizamos el mismo método que en reCamera, configurar una dirección IP estática a través de '/etc/network/interfaces.

:::note

De nuevo, el reTerminal se puede sustituir por cualquier dispositivo de computación (edge) con un puerto de red y pantalla, incluidos, entre otros, portátiles, ordenadores de sobremesa, placas de desarrollo, etc. Para monitorización en ubicación fija, se pueden utilizar portátiles/PCs con Windows. Para despliegues móviles, se pueden usar dispositivos finales basados en Raspberry Pi con pantalla. Este tutorial utiliza la placa de expansión reTerminal reTerminal E10 (placa de expansión para alimentación en exteriores). Puedes elegir tu propia fuente de alimentación.

:::

#### Paso 3.1 Iniciar reTerminal

El reTerminal viene de fábrica con el sistema, en teoría puedes entrar directamente en Raspbian. Sin embargo, si el LED verde en la esquina inferior izquierda se enciende/parpadea pero la pantalla permanece en negro después de encender, consulta el siguiente tutorial para volver a grabar el sistema. Este paso requiere depuración con pantalla externa. [Tutorial de inicialización de reTerminal](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-with-drivers-from-seeed-to-emmc)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t10.jpg" /></div>

#### Paso 3.2 Desactivar el servicio NetworkManager

Conecta el teclado y el ratón al reTerminal y pulsa **Ctrl Alt T** para abrir la terminal. Debido a que NetworkManager entra en conflicto con el método anterior, necesitamos desactivar el servicio NetworkManager. Ejecuta en la terminal del reTerminal:

```bash
sudo systemctl stop NetworkManager
sudo systemctl disable NetworkManager
```

#### Paso 3.3 Configurar IP estática del reTerminal

Al igual que en el paso 1.7, en la terminal del reTerminal:

```bash
sudo nano /etc/network/interfaces
```

Ve al archivo de configuración de red y añade lo siguiente al final del archivo. Aquí la IP estática del reTerminal se establece en **192.168.10.3**:

```bash
auto eth0
iface eth0 inet static
address 192.168.10.3
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t11.jpg" /></div>

:::note

Si quieres volver a usar NetworkManager en el futuro, solo necesitas borrar las 4 líneas nuevas de 'auto eth0' en '/etc/network/interfaces', en total 5 líneas.

Luego ejecuta:

```bash
sudo systemctl enable NetworkManager
sudo systemctl restart NetworkManager
```

:::

Guarda con ctrl s, ctrl x y sal. Luego introduce '''reboot''' para reiniciar el reTerminal.

#### Paso 3.4 Verificar la configuración de IP estática

Vuelve a la terminal del reTerminal y ejecuta el siguiente comando: '''ifconfig''' para verificar si la dirección IP estática se ha configurado correctamente.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t12.png" /></div>

Si ves IP = **192.168.10.3** en 'eth0', significa que ha tenido éxito.

¡Perfecto! Todo el equipo está configurado, ahora puedes pasar a la siguiente fase :)

### Fase 4: Conectar y Reproducir

¿Recuerdas que configuramos el nodo de envío de flujo rtsp en el paso 1.2? Ya hay un flujo de vídeo rtsp en: '''rtsp:// admin:admin@192.168.xxx.xxx:554/live''' aquí '192.168.xxx.xxx' es la **IP estática de reCamera** que configuraste manualmente en el paso 1.6, no la IP estática del reTermnial. En mi caso, el flujo de envío rtsp correspondiente es:

```
rtsp://admin:admin@192.168.10.100:554/live
```

De hecho, puedes usar cualquier método de software para abrir el flujo de vídeo, como **VLC Player**.

Sin embargo, para facilitar el uso, utilizamos el **comando ffplay** en ffmpeg para abrir directamente el flujo de vídeo rtsp en la terminal.

#### Paso 4.1 Instalar la placa de expansión del reTerminal

Tutorial de referencia: [Guía de instalación de reTerminal E10](https://wiki.seeedstudio.com/es/reTerminal_Mount_Options/)

Después de instalar la placa de expansión, puedes usar el puerto usbc del reTerminal para alimentar el módulo HaLow, y los dos puertos usba se pueden conectar al ratón y al teclado.

#### Paso 4.2 Instalar el módulo de transmisión de imagen Wifi HaLow

Instala los dos módulos de transmisión de imagen emparejados en la reCamera y el reTerminal

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_1.jpg" /></div>

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_2.jpg" /></div>

#### Paso 4.3 Instalar ffmpeg y nmap en reTerminal

ffmpeg se utiliza para obtener el flujo de envío rtsp, nmap se utiliza para listar. ejecuta en la terminal del reTerminal:

```bash
sudo apt install ffmpeg
sudo apt install nmap
```

#### Paso 4.4 Reproducir el flujo de vídeo rtsp

Ejecuta el comando ffplay para obtener el flujo rtsp de la reCamera (pertenece al comando ffmpeg):

```bash
ffplay -rtsp_transport udp -max_delay 20000 -probesize 2M rtsp://admin:admin@192.168.10.100:554/live
```

Aquí hay una explicación de los parámetros en el comando ffplay:

-'-rtsp_transport udp': Especifica usar el protocolo de transporte UDP, porque la reCamera usa transmisión UDP por defecto.

-'-max_delay 20000': Establece el retraso máximo en 20 segundos para manejar retrasos de red.

-'-probesize 2M': Establece el tamaño de sondeo en 2 MB para aumentar la velocidad de reproducción del flujo de vídeo.

-'rtsp:// admin:admin@192.168.10.100:554/live': Esta es la dirección de ingesta rtsp de la reCamera. Sustitúyela por tu propia dirección.

En este momento aparecerá una nueva ventana, el flujo de vídeo rtsp se mostrará dentro, haciendo doble clic en la ventana se puede reproducir a pantalla completa.

:::note
Como alternativa, puedes usar VLC Player o GStreamer para abrir el flujo de vídeo rtsp. Ejecuta el siguiente comando en la terminal del reTerminal para instalar GStreamer:

```bash
sudo apt update
sudo apt install -y \
    gstreamer1.0-tools \
    gstreamer1.0-plugins-base \
    gstreamer1.0-plugins-good \
    gstreamer1.0-plugins-bad \
    gstreamer1.0-plugins-ugly \
    gstreamer1.0-libav \
    gstreamer1.0-rtsp \
    gstreamer1.0-x \
    gstreamer1.0-gl \
    gstreamer1.0-alsa \
    gstreamer1.0-pulseaudio

```

Luego ejecuta el comando para reproducir el flujo de vídeo rtsp:

```bash
gst-launch-1.0 rtspsrc location=rtsp://admin:admin@192.168.10.100:554/live latency=2000 ! rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! autovideosink
```

:::
bus

#### Paso 4.5 Monitorizar los resultados de prueba de Yolo

Pulsa **Ctrl + Alt + T** para abrir una nueva terminal en el reTerminal. Iniciaremos un servidor WebSocket para recibir los resultados de detección de IA. Ejecuta el siguiente comando:

```bash
wscat -l 9000
```

Cuando el servidor se inicie, mostrará:

```bash
Listening on port 9000 (press CTRL+C to quit)
```

Mantén esta terminal abierta para mostrar los resultados de detección enviados desde la reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t15.jpg" /></div>
La imagen de arriba muestra la transmisión RTSP a través de GStreamer y los resultados de detección de IA en texto a través de WebSocket.

La terminal de la izquierda demuestra los resultados de detección:

```bash
< counts=person:1; person(682,359,1175,704)
< counts=person:1; person(649,359,1247,704)
< counts=person:1; person(678,359,1188,704)
< counts=person:1; person(652,359,1240,704)
< counts=person:1; person(656,359,1227,704)
< counts=person:1; person(648,359,1236,704)
< counts=person:1; person(648,359,1243,704)
< counts=person:1; person(650,359,1227,703)
< counts=person:1; person(652,359,1241,704)
< counts=person:1; person(646,359,1246,704)
< counts=person:1; person(647,359,1244,704)
< counts=person:1; person(653,359,1252,704)
< counts=person:1; person(650,359,1238,704)
```

**¡Felicidades! Has implementado tu propio sistema remoto de detección con IA.**

## Explora lo que es posible

Como se mencionó al principio, este proyecto es solo un ejemplo sencillo de detección remota con IA. Puedes ampliarlo a escenarios más complejos. Presentaremos algunos ejemplos aquí. Todos estos ejemplos se actualizarán en Github más adelante.

### Caso 1: Sistema de alerta de osos en campamento salvaje

Sube un modelo de detección de osos a la reCamera y despliega el dispositivo en una posición fija en un campamento forestal para detectar posibles intrusiones de osos. Puedes monitorizar la zona a distancia a través del reTerminal u otros dispositivos, ayudándote a evitar acercarte demasiado a la fauna salvaje y reduciendo el riesgo de peligro.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/ta_1.jpg" /></div>

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
