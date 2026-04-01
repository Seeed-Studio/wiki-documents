---
title: Sistema de Monitoreo Inalámbrico Remoto con IA y Wifi HaLow
description: La página wiki presenta una demostración del Sistema de Monitoreo Inalámbrico Remoto con IA y Wifi Halow. Una guía paso a paso para construir tu propio sistema.
keywords:
  - Wifi Halow
  - reCamera
  - AI edge sensing
slug: /ai_remote_wireless_monitor_system
sku: 102991897, 110070108
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 2
last_update:
  date: 2025-11-19T00:00:00.000Z
  author: John Xiang
createdAt: '2025-11-21'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/es/ai_remote_wireless_monitor_system/
---

# Sistema de monitoreo inalámbrico remoto con IA basado en reCamera y Wifi Halow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/6.gif" /></div>

Si eres un entusiasta de las actividades al aire libre, ¿te molesta a menudo la falta de red en la naturaleza, la cobertura limitada del WiFi tradicional y la incapacidad de la cámara para transmitir imágenes en tiempo real a largas distancias? A través de este Wiki, puedes implementar tu propio **sistema de monitoreo inalámbrico remoto con IA**, basado en la **serie reCamera** y el módulo de transmisión gráfica **Wifi Halow**. Por supuesto, puedes tener más imaginación, incluyendo lo siguiente pero no limitado a:

- Quieres monitoreo inalámbrico para toda tu propiedad pero sin necesidad de cableado o routers, con IA a bordo detectando actividad sospechosa.

- Tienes un camión y quieres detectar cualquier persona sospechosa cerca del vehículo, pero la red es inestable todo el año y no puede subir video en tiempo real o las cámaras ordinarias deben depender de la nube.

- Cuando estás explorando el bosque, quieres recibir las imágenes de la cámara fija del campamento en cualquier momento para identificar si hay osos u otros animales peligrosos, pero la distancia inalámbrica ordinaria es demasiado corta.

**¿Entonces por qué reCamera y Wifi Halow pueden realizar el sistema?** En primer lugar, reCamera proporciona la IA del lado final con 1Tops de potencia de cómputo. Así que puede ejecutar IA dentro del dispositivo sin depender de otro dispositivo edge.

También se integra con Node-RED y hace que el proceso de desarrollo sea muy conveniente y eficiente. Si quieres rtsp para hacer push stream o usar WebSocket para enviar datos, solo necesitas arrastrar el nodo para implementarlo, y no necesitas construir una gran cantidad de programas desde cero. Consulta el enlace para más detalles: [Tutorial de Node-RED en reCamera](https://wiki.seeedstudio.com/es/recamera_develop_with_node-red/)

Aquí hay un ejemplo de desarrollo con Node-RED: simplemente arrastra 3 nodos para construir un flujo de trabajo de visión con IA:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_1.png" /></div>

En términos de Wi-Fi HaLow, es una tecnología inalámbrica de baja frecuencia diseñada para el Internet de las Cosas, que ofrece las ventajas de largo alcance, bajo consumo de energía y alto ancho de banda. En la banda de frecuencia de 902–928 MHz, puede lograr una tasa de transmisión máxima de aproximadamente 16 Mbps bajo un ancho de banda de 8 MHz, con una distancia de comunicación que alcanza hasta 1 km.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.png" /></div>

Comparado con el Wi-Fi tradicional de 2.4G/5G, HaLow proporciona mayor penetración y cobertura más amplia; y comparado con otros métodos de comunicación de largo alcance como LoRa y Sub-GHz, HaLow ofrece mayor ancho de banda, capaz de soportar la transmisión de varios medios incluyendo texto, audio, imágenes e incluso flujos de video simultáneamente.

| Característica | Wi-Fi (2.4/5GHz) | **Wi-Fi HaLow (802.11ah)** | LoRaWAN |
|---------|------------------|-----------------------------|----------|
| Banda de Frecuencia | 2.4GHz / 5GHz | **Sub-GHz (902–928MHz)** | Sub-GHz (ej., 868/915MHz) |
| Rango de Cobertura | 50–100 m | **Hasta ~1 km** | 2–15 km (dependiente del entorno) |
| Capacidad de Penetración | Media | **Fuerte (mejor penetración de paredes)** | Muy fuerte |
| Tasa de Datos Típica | Cientos de Mbps a Gbps | **Hasta ~16 Mbps (canal de 8 MHz)** | Muy baja (0.3–50 kbps) |
| Latencia | Baja | **Baja (soporta imágenes/video)** | Alta (segundos) |
| Consumo de Energía | Medio–Alto | **Menor que Wi-Fi tradicional** | Muy bajo|
| Escenarios Adecuados | Redes locales, video HD/4K | **Video de largo alcance, monitoreo remoto, IoT industrial** | Sensado de largo alcance, telemetría, IoT de ultra bajo consumo |

Por lo tanto, este sistema puede reducir el umbral técnico para que desarrolles un sistema de monitoreo inteligente, de modo que los usuarios no profesionales puedan comenzar fácilmente. Específicamente, proporciona:

1. **Modelo de IA edge**: No necesitas construir tu propia arquitectura de IA desde cero, no necesitas un equipo de IA, no necesitas entender el algoritmo, úsalo cuando lo enciendas.

2. **Potencia de cómputo integrada**: No depende de laptops, desktops u otros dispositivos de computación edge

3. **Herramienta de programación gráfica Node-RED**: No necesitas dominar la programación front y back end, no necesitas profundizar en la red de computadoras, integración de sistemas y otros conocimientos profesionales

4. **Conexión inalámbrica remota**: No necesitas cableado complejo, no necesitas switches/routers

## Arquitectura general

La estructura del sistema es muy simple. Los dos módulos HaLow usan cable Ethernet para conectar la reCamera y reTerminal respectivamente. Después de eso, los dos dispositivos transmiten de forma inalámbrica a través de Wifi HaLow.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1.png" /></div>

## Preparación de hardware

Para completar este proyecto, necesitarás cualquiera de las tres reCamera - reCamera 2002 Serie, reCamera HQ PoE, reCamera Gimbal.

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

<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver Más🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver Más🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### reTerminal y Placas de Expansión

reTerminal si quieres mover la aplicación, puedes usar el reTerminal con una placa de expansión dedicada, la placa de expansión tiene integradas dos baterías 18650.

:::note

El reTerminal aquí puede ser reemplazado por cualquier dispositivo de computación edge con un puerto de red y una pantalla. Incluyendo pero no limitado a notebooks, desktops, placas de desarrollo, etc. Te animamos a probar más. Solo usa reTerminal para demostrar en este tutorial, reTerminal es un dispositivo terminal Raspberry Pi CM4 con múltiples interfaces como puertos de red.

:::

<table align="center">

<tbody><tr>

<th>Seeed Studio reTerminal - 5'' HMI CM4108032</th>

<th>Seeed Studio reTerminal E10-1 Placa de Expansión(Opcional)</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-CM4108032-p-5712.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver Más🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### Módulo de Transmisión de Imagen Wifi Halow

Este es el módulo Wifi Halow que usamos en el proyecto. La banda de frecuencia de operación es 902-928 MHz, el ancho de banda es 8 MHz, la velocidad máxima es 16 Mbps, la distancia máxima de comunicación puede alcanzar 1km, y la potencia de transmisión es 20 dBm. El dispositivo proporciona interfaz de antena IPEX, puerto de red de 10/100 Mbps, puerto serie TTL (hasta 350 kbps), soporta encriptación WPA2-PSK AES, alimentación de 5V/12V, y operación confiable de -20 C a 70 C, consumo promedio de energía 1.5W.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.jpg" /></div>

## Preparación de herramientas

- **PC**: Usado para conectar la reCamera para depuración. Las operaciones posteriores necesitan iniciar sesión en el back end de la reCamera y flashear el sistema operativo raspberry pi para el reTerminal. Al mismo tiempo, la depuración será más conveniente si hay problemas en la PC, y todas las herramientas de software están completas.

- **3 cables USB-C**:

Una conexión es reCamera a la PC para suministrar energía, y los otros dos se usan para suministrar energía al módulo Wifi Halow.

- **Teclado/Ratón**: Conectar reTerminal para depuración.

- **Adaptador de Energía USB-C 5V3A** Misma fuente de alimentación de Raspberry Pi 4/5 para alimentar reTerminal. Enlace de compra: [Fuente de Alimentación USB-C 5V3A](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)

- **(Opcional) Fuente de Alimentación DC de 12V** Utilizada para alimentar la placa de expansión del reTerminal. Enlace de compra: [Fuente de Alimentación DC de 12V (US/EU)](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)

- **(Opcional) Soporte Triangular para reCamera** Enlace de Compra: [Mini Trípode](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)

:::note

No tienes que luchar con la fuente de alimentación del dispositivo, la fuente de alimentación de Raspberry Pi 4/5 puede ser utilizada por reTerminal al mismo tiempo si tienes la intención de usar la placa de expansión, solo fuente de alimentación DC de 12V, ya no necesitas alimentación USB-C de 5V3A, porque el reTerminal puede obtener energía directamente de la placa de expansión.

:::

## Tutorial Detallado: Configuración del Módulo Wifi Halow de reCamera y Configuración del reTerminal

La idea general de todo el sistema es permitir que la reCamera forme una red con el equipo terminal a través de Wifi HaloW. Primero, configurar IP estática en el equipo terminal (reTerminal) y reCamera, porque las aplicaciones al aire libre o móviles no pueden tener routers, no hay servicio DHCP, y la IP necesita ser asignada manualmente.

Después de que se asigna la IP, estos dispositivos forman una "red de área local", y pueden acceder entre sí a través de IP. En este momento, crear nodos de transmisión y nodos WebSocket en la reCamera a través de Node-RED, enviar el flujo de video en forma de transmisión push rtsp, y enviar el resultado de detección yolo vía WebSocket.

Finalmente, el flujo de video y los resultados de detección de IA se acceden en el dispositivo terminal, como VLC Media Player en Windows/Linux. Este tutorial demostrará cómo obtener transmisión push rtsp a través de ffplay en Linux.

### Fase 1: Configurar reCamera

#### Paso 1.1 Iniciar Sesión en reCamera

Conecta la reCamera a la computadora con un cable USB-C. Toma algo de tiempo iniciar el dispositivo justo después de que se enciende. Después de esperar 1-2 minutos, abre cualquier navegador web e ingresa **192.68.42.1** para entrar al sistema reCamera.

Necesitas configurar tu propia contraseña para el primer inicio de sesión. Por favor recuerda tu contraseña y úsala más tarde. Después de entrar al sistema reCamera, deberías ver esta página:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t2.png" /></div>

:::note

Si no ves esta página, actualiza tu navegador.

Si tu dispositivo ha sido usado o configurado antes, es posible saltar directamente al Workspace. En este momento, el sitio web es: 'http://192.168.42.1/#/workspace' Por favor salta al siguiente paso. De cualquier manera, solo entra al Workspace.

Si la actualización aún no resuelve el problema, por favor reinicia el dispositivo o contacta al soporte técnico para resolverlo.

:::

#### Paso 1.2 Configurar el nodo de cámara

Haz clic en el botón verde en la esquina inferior derecha de la página para entrar al Workspace.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3.png" /></div>

Visualización de la página Workspace

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_0.png" /></div>

Haz doble clic en el nodo de cámara para entrar a la página de configuración. Para asegurar fluidez, configuramos el nodo de cámara como **480P, 5 fotogramas**. Puedes probar una resolución más alta o tasa de fotogramas, pero la latencia puede ser mayor.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_1.png" /></div>

#### Paso 1.3 Configurar el nodo de transmisión

Como se mencionó anteriormente, necesitamos configurar transmisión push rtsp en Node-RED. En la lista de nodos a la izquierda, busca el nodo 'stream' o desliza la rueda del ratón hacia abajo hasta el final para encontrar el nodo Stream. Después del método de configuración, por favor consulta: [Configuración del Nodo Stream de Node-Red](https://wiki.seeedstudio.com/es/recamera_develop_with_node-red/#stream-node) Después de la configuración, deberías obtener los siguientes resultados:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_3.png" /></div>

Por favor sigue completamente el tutorial de Node-RED para asegurar que tu salida sea a sscma, y el flujo de video final será enviado a: rtsp://admin:admin@192.168.xxx.xxx:554/live, donde 192.168.xxx.xxx es la dirección IP estática de la reCamera. La IP estática puede ser configurada libremente. 192.168.10.100 se usa aquí para demostración.

#### Paso 1.4.1 Configurar el nodo WebSocket

Para mostrar los resultados detectados por yolo en el equipo terminal, necesitamos enviar los resultados de detección vía WebSocket. El tipo de nodo WebSocket debe ser configurado como 'connect' en lugar de 'listen'.

Al configurar la URL del nodo WebSocket aquí, necesita ser configurada como ws://192.168.
nnn.nnn:9000 De hecho, 192.168.nnn.nnn es la dirección IP estática del reTerminal o tu propio otro equipo terminal, no la dirección IP estática de reCamera mencionada arriba. 192.168.10.3 se usa aquí para demostración. El resultado final es el siguiente:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_5.png" /></div>

#### Paso 1.5. Entrar a la página de configuración

O en la página Workspace que acabas de modificar Node RED, haz clic en "Setting" en la esquina superior izquierda

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t4_1.png" /></div>

> Figura 4: Marco de Configuración del Workspace

#### Paso 1.6 Entrar al terminal de reCamera

Después de entrar a la página de configuración, selecciona 'Terminal' para entrar a la línea de comandos de reCamera

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t5.png" /></div>

> Figura 5: Marco Terminal de la Página de Configuración

Después de hacer clic en Terminal, necesitas iniciar sesión nuevamente, ingresa el nombre de usuario: 'recamera', y luego ingresa la contraseña establecida para usar el Terminal. el efecto es el siguiente. si olvidas tu contraseña, por favor consulta el siguiente tutorial para reiniciar el dispositivo: [Reinicio de Fábrica de reCamera](https://wiki.seeedstudio.com/es/recamera_getting_started/#factory-reset)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t6.png" /></div>

> Figura 6: Efecto de la página Terminal después del inicio de sesión

#### Paso 1.7 Configurar IP Estática de reCamera

En la reCamera, necesitamos configurar la red a través del sistema de red tradicional de Linux (ifupdown). El método es muy simple. Solo necesitamos entrar al archivo de configuración de red y configurar el puerto Ethernet en la reCamera a la IP estática que desees: 192.168.xxx.xxx.xxx. Aquí configuro la IP estática

192.168.10.100 Primero entra al archivo de configuración de red a través del editor vi e ingresa el siguiente comando en el terminal de reCamera:

```bash
sudo vi /etc/network/interfaces
```

Por favor agrega al final del archivo:

```bash
auto eth0
iface eth0 inet static
address 192.168.10.100
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_0.png" /></div>

Este código establece que el puerto Ethernet de la reCamera de configuración es IP estática 192.168.10.100, la máscara de subred es 255.255.255.0, y la puerta de enlace es 192.168.10.1. Por supuesto, puedes usar 192.168.3.xxx o 192.168.42.xxx para configuración libre de IP específica. Sin embargo, por favor asegúrate de que esté en el mismo segmento de red que tu reTerminal o equipo terminal. Por ejemplo, tu reCamera es 192.168.33, entonces el reTerminal necesita ser configurado como 192.168.33.nnn. Si la IP estática del reTerminal se convierte en 192.168.32.nnn o 192.168.34.nnn, no se puede hacer comunicación.

Después de agregar el código anterior, ingresa ''':wq''' para salir del editor vi y regresar al terminal de reCamera. Luego ingresa '''sudo reboot''' para reiniciar la reCamera.

:::note

Debe notarse que después de que se configura la IP estática, la reCamera debe estar conectada a la PC con un cable de red. Al mismo tiempo, la IP estática debe ser configurada en la PC antes de iniciar sesión en la reCamera nuevamente. La IP estática de reCamera recién configurada se usa al iniciar sesión. Windows se usa para configurar IP estática como demostración aquí. Nuevamente, para todos los dispositivos configurados con IP estática, debe asegurarse de que estén en el mismo segmento de red, como reCamera-192.168.10.100 y reTerminal-192.168.10.3, laptop (Windows)-192.168.10.2 De lo contrario, no pueden comunicarse entre sí. La configuración de referencia en Windows es la siguiente:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/tx.png" /></div>

:::

#### Paso 1.8 Verificar Configuración de IP Estática

Repite el paso 1.5 para regresar a la Configuración de reCamera y verificar si la IP estática se configuró exitosamente:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_1.png" /></div>

Bien, ahora tenemos una IP estática configurada en la reCamera, ahora pasemos a la siguiente etapa

### Fase 2: Configurar Módulo de Transmisión de Imagen Wifi HaLow

#### Paso 2.1 Establecer el modo de trabajo de los dos módulos HaLow

Primero, establece uno de los módulos Wifi HaloW en modo AP y el otro en modo STA. No te preocupes por si el módulo AT o STA está conectado a la reCamera/terminal. El orden no es importante, pero al menos se garantiza un módulo en modo STA y uno en modo AP.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t8.png" /></div>

#### Paso 2.2 Emparejar Módulo HaLow

Ahora presiona el botón de emparejamiento en ambos módulos al mismo tiempo:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t9.png" /></div>
Después de eso, el LED verde en los dos módulos parpadeará. Cuando el parpadeo se detenga y el LED verde esté siempre encendido, el emparejamiento del módulo es exitoso.

¡Muy bien! Has emparejado exitosamente dos módulos Wifi Halow, ahora pueden ser vistos como ambos extremos de un cable de red, pueden ser usados para conectar reCamera y equipo terminal.

### Fase 3: Configurar Dispositivos Finales (reTerminal)

Ahora vamos a configurar IP estática en el reTerminal. Teóricamente, hay muchos métodos, como NetworkManager. NetworkManager es un demonio de gestión de red en el sistema Linux, que automáticamente te ayuda a gestionar todas las herramientas de conexión de red como Wi-Fi/Ethernet/dirección IP/DHCP/hotspot/enrutamiento. Puedes intentar pasar por NetworkManager. Sin embargo, para reducir el costo de aprendizaje, usamos el mismo método que reCamera, configurar una dirección IP estática a través de '/etc/network/interfaces'.

:::note

Nuevamente, el reTerminal puede ser reemplazado por cualquier dispositivo de computación (edge) con puerto de red y pantalla, incluyendo pero no limitado a laptops, computadoras de escritorio, placas de desarrollo, etc. Para monitoreo de ubicación fija, se pueden usar laptops/computadoras de escritorio con Windows. Para despliegue móvil, se pueden usar dispositivos finales basados en Raspberry Pi con pantallas. Este tutorial usa la placa de expansión reTerminal E10 (placa de expansión para suministro de energía exterior). Puedes elegir tu propio suministro de energía.

:::

#### Paso 3.1 Iniciar reTerminal

El reTerminal viene de fábrica con el sistema, puedes ingresar directamente a Raspbian en teoría. Sin embargo, si el LED verde en la esquina inferior izquierda se enciende/parpadea pero la pantalla está negra después del encendido, por favor consulta el siguiente tutorial para volver a grabar el sistema. Este paso requiere depuración con pantalla externa. [Tutorial de Inicialización de reTerminal](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-with-drivers-from-seeed-to-emmc)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t10.jpg" /></div>

#### Paso 3.2 Deshabilitar el Servicio NetworkManager

Conecta el teclado y el mouse al reTerminal, y presiona **Ctrl Alt T** para abrir la terminal. Debido a que NetworkManager entra en conflicto con el método anterior, necesitamos deshabilitar el servicio NetworkManager. Ejecuta en la terminal del reTerminal:

```bash
sudo systemctl stop NetworkManager
sudo systemctl disable NetworkManager
```

#### Paso 3.3 Configurar IP Estática del reTerminal

Como en el paso 1.7, en la terminal del reTerminal:

```bash
sudo nano /etc/network/interfaces
```

Ve al archivo de configuración de red y agrega lo siguiente al final del archivo. Aquí la IP estática del reTerminal se establece en **192.168.10.3**:

```bash
auto eth0
iface eth0 inet static
address 192.168.10.3
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t11.jpg" /></div>

:::note

Si quieres reutilizar NetworkManager en el futuro, solo necesitas eliminar las 4 líneas recién agregadas 'auto eth0' en '/etc/network/interfaces', totalizando 5 líneas.

Luego ejecuta:

```bash
sudo systemctl enable NetworkManager
sudo systemctl restart NetworkManager
```

:::

Guarda ctrl s, ctrl x y sal. Luego ingresa '''reboot''' para reiniciar el reTerminal.

#### Paso 3.4 Verificar la Configuración de IP Estática

Regresa a la terminal del reTerminal y ejecuta el siguiente comando: '''ifconfig''' para verificar si la dirección IP estática se configuró exitosamente.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t12.png" /></div>

Si ves IP = **192.168.10.3** en 'eth0', significa éxito.

¡Perfecto! Todo el equipo está configurado, ahora puedes entrar a la siguiente etapa :)

### Fase 4: Conectar y Jugar

¿Recuerdas que configuramos el nodo de transmisión rtsp en el paso 1.2? Ya hay una transmisión de video rtsp en: '''rtsp://admin:admin@192.168.xxx.xxx:554/live''' aquí '192.168.xxx.xxx' es la **IP estática de reCamera** que configuraste manualmente en el paso 1.6, no la IP estática del reTerminal. En mi caso, la transmisión rtsp correspondiente es:

```
rtsp://admin:admin@192.168.10.100:554/live
```

De hecho, puedes usar cualquier método de software para abrir la transmisión de video, como **VLC Player**.

Sin embargo, para facilidad de uso, usamos el **comando ffplay** en ffmpeg para abrir la transmisión de video rtsp directamente en la terminal.

#### Paso 4.1 Instalar la Placa de Expansión del reTerminal

Tutorial de referencia: [Guía de Instalación de reTerminal E10](https://wiki.seeedstudio.com/es/reTerminal_Mount_Options/)

Después de instalar la placa de expansión, puedes usar el puerto usbc en el reTerminal para suministrar energía al módulo HaLow, y los dos puertos usba pueden conectarse al mouse y teclado.

#### Paso 4.2 Instalar el Módulo de Transmisión de Imagen Wifi HaLow

Instala los dos módulos de transmisión de imagen emparejados en el reCamera y reTerminal

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_1.jpg" /></div>

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_2.jpg" /></div>

#### Paso 4.3 Instalar ffmpeg y nmap en reTerminal

ffmpeg se usa para obtener la transmisión rtsp, nmap se usa para listar. ejecuta en la Terminal del reTerminal:

```bash
sudo apt install ffmpeg
sudo apt install nmap
```

#### Paso 4.4 Reproducir transmisión de video rtsp

Ejecuta el comando ffplay para obtener la transmisión rtsp del reCamera (pertenece al comando ffmpeg):

```bash
ffplay -rtsp_transport udp -max_delay 20000 -probesize 2M rtsp://admin:admin@192.168.10.100:554/live
```

Aquí hay una explicación de los parámetros en el comando ffplay:

-'-rtsp_transport udp': Especifica usar el protocolo de transporte UDP, porque el reCamera usa transmisión UDP por defecto.

-'-max_delay 20000': Establece el retraso máximo a 20 segundos para manejar retrasos de red.

-'-probesize 2M': Establece el tamaño de sondeo a 2MB para aumentar la velocidad de reproducción de la transmisión de video.

-'rtsp://admin:admin@192.168.10.100:554/live': Esta es la dirección de ingesta rtsp del reCamera. Reemplázala con tu propia dirección.

En este momento aparecerá una nueva ventana, la transmisión de video rtsp se mostrará dentro, haz doble clic en la ventana para reproducción en pantalla completa.

:::note
Alternativamente, puedes usar VLC Player o GStreamer para abrir la transmisión de video rtsp. Ejecuta el siguiente comando en la terminal del reTerminal para instalar GStreamer:

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

Luego ejecuta el comando para reproducir la transmisión de video rtsp:

```bash
gst-launch-1.0 rtspsrc location=rtsp://admin:admin@192.168.10.100:554/live latency=2000 ! rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! autovideosink
```

:::
bus

#### Paso 4.5 Monitorear Resultados de Prueba Yolo

Presiona **Ctrl + Alt + T** para abrir una nueva terminal en el reTerminal. Iniciaremos un servidor WebSocket para recibir resultados de detección de IA. Ejecuta el siguiente comando:

```bash
wscat -l 9000
```

Cuando el servidor se inicie, mostrará:

```bash
Listening on port 9000 (press CTRL+C to quit)
```

Mantén esta terminal abierta para mostrar los resultados de detección enviados desde el reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t15.jpg" /></div>
La imagen anterior muestra la transmisión RTSP vía GStreamer y los resultados de detección de IA en texto vía WebSocket.

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

**¡Felicitaciones! Has implementado tu propio sistema de detección de IA remoto.**

## Explora lo que es Posible

Como se mencionó al principio, este proyecto es solo un ejemplo simple de detección de IA remota. Puedes expandirlo a escenarios más complejos. Introduciremos algunos ejemplos aquí. Todos estos ejemplos se actualizarán en Github más tarde.

### Caso 1: Sistema de Alerta de Osos en Campamento Salvaje

Sube un modelo de detección de osos al reCamera y despliega el dispositivo en una posición fija en un campamento forestal para detectar posibles intrusiones de osos. Puedes monitorear el área desde la distancia a través del reTerminal u otros dispositivos, ayudándote a evitar acercarte demasiado a la vida silvestre y reduciendo el riesgo de peligro.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/ta_1.jpg" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
