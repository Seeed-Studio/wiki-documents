---
description: Getting Started with Wi-Fi HaLow Mini PCIe Module 
title: Introducción al Módulo Mini PCIe Wi-Fi HaLow 
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/0.webp
slug: /es/getting_started_with_wifi_halow_mini_pcie_module
last_update:
  date: 05/14/2025
  author: Guillermo
---

# Introducción al Módulo Mini PCIe Wi-Fi HaLow

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-mini-PCIe-Module-p-6394.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

Esta guía te mostrará cómo configurar y utilizar el módulo Mini PCIe Wi-Fi HaLow para construir una puerta de enlace (gateway) Wi-Fi HaLow. Su factor de forma Mini PCIe facilita la integración de conectividad Wi-Fi HaLow en sistemas existentes, permitiendo crear gateways IoT capaces de conectar numerosos dispositivos de bajo consumo a largas distancias.

## Visión general

El módulo Mini PCIe Wi-Fi HaLow está diseñado para habilitar conectividad inalámbrica de largo alcance en aplicaciones IoT. Ofrece:

- Interfaz estándar Mini PCIe para una integración sencilla
- Compatibilidad con el protocolo Wi-Fi HaLow IEEE 802.11ah
- Alcance de hasta 1 km en línea de vista
- Bajo consumo energético
- Capacidad para conectar miles de dispositivos IoT

## ¿Qué es Wi-Fi HaLow?

Wi-Fi HaLow (IEEE 802.11ah) es una tecnología de red inalámbrica diseñada específicamente para aplicaciones del Internet de las Cosas (IoT). Al operar en la banda de frecuencia sub-1 GHz, ofrece varias ventajas clave:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

### Beneficios clave

- **Alcance extendido**: Puede alcanzar hasta 1 kilómetro en condiciones de línea de vista, superando ampliamente al Wi-Fi tradicional
- **Mejor penetración**: Las señales de baja frecuencia atraviesan paredes y obstáculos con mayor eficacia
- **Eficiencia energética**: Optimizado para dispositivos IoT alimentados por batería
- **Alta escalabilidad**: Soporta miles de dispositivos conectados por punto de acceso
- **Compatibilidad IP nativa**: Integración fluida con redes IP existentes

### Aplicaciones

Wi-Fi HaLow es ideal para:

- Agricultura inteligente
- IoT industrial
- Ciudades inteligentes
- Automatización de edificios
- Monitoreo ambiental
- Rastreo de activos

### ¿Por qué es importante?

Wi-Fi HaLow aborda desafíos críticos en las implementaciones de IoT:

1. **Brecha de cobertura**: Llena el vacío entre redes Wi-Fi de corto alcance y redes celulares
2. **Duración de la batería**: Permite años de funcionamiento con alimentación por batería
3. **Costo de implementación**: Reduce los costos de infraestructura en comparación con soluciones celulares
4. **Estandarización**: Basado en estándares Wi-Fi conocidos para facilitar su adopción
5. **Seguridad**: Incorpora seguridad de nivel empresarial con WPA3

Al combinar largo alcance, bajo consumo energético y alta densidad de dispositivos, Wi-Fi HaLow está bien posicionado para convertirse en una tecnología clave para implementaciones IoT a gran escala en múltiples industrias.

## Introducción a OpenWrt

El módulo Mini PCIe Wi-Fi HaLow funciona con OpenWrt, un sistema operativo Linux altamente extensible diseñado principalmente para dispositivos embebidos como routers. Estas son las razones por las que OpenWrt es una excelente plataforma para gateways Wi-Fi HaLow:

### ¿Qué es OpenWrt?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:800, height:'auto'}}/></div>

OpenWrt es un sistema operativo basado en Linux que ofrece:

- Un sistema de archivos completamente escribible con gestión de paquetes  
- Alta modularidad que permite personalizar su funcionalidad  
- Compatibilidad con una amplia gama de dispositivos embebidos  
- Comunidad de desarrollo activa y actualizaciones regulares  
- Amplias capacidades de red  

### Beneficios para implementaciones Wi-Fi HaLow

OpenWrt es una plataforma ideal para gateways Wi-Fi HaLow debido a:

- **Estabilidad**: Base sólida de Linux para funcionamiento continuo 24/7  
- **Flexibilidad**: Personalización sencilla para requerimientos específicos de IoT  
- **Rendimiento**: Pila de red optimizada para un manejo eficiente de datos  
- **Seguridad**: Funciones de seguridad de nivel empresarial integradas  
- **Comunidad**: Gran ecosistema de desarrolladores y usuarios  

La combinación de OpenWrt y Wi-Fi HaLow crea una base potente para construir redes IoT robustas que pueden escalar desde pequeñas implementaciones hasta instalaciones industriales de gran escala.

## Materiales necesarios

A continuación, se enlistan los materiales requeridos para seguir este tutorial.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Raspberry Pi 4 Model B</th>
            <th>Modulo WiFi HaLow Mini PCIe</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/raspberrypi4b.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-mini-PCIe-Module-p-6394.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>


Además, necesitarás los siguientes elementos:

- **[Adaptador Mini PCIe a PCIe](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)** – Para conectar el módulo Mini PCIe Wi-Fi HaLow a una Raspberry Pi.  
- **Disipador de calor para Raspberry Pi** – Recomendado para la gestión térmica durante el funcionamiento continuo.  
- **Tarjeta MicroSD (8 GB o mayor)** – Para almacenar el firmware de OpenWrt.  
- **Lector de tarjetas MicroSD** – Para leer la tarjeta MicroSD.  
- **Cable Ethernet** – Utilizado para conectar con la computadora anfitriona y configurar el Wi-Fi HaLow de la Raspberry Pi.  
- **Fuente de alimentación para Raspberry Pi**  
- **Computadora** – Para flashear el firmware y configurar el Wi-Fi HaLow de la Raspberry Pi.  
- **Antena** – Para ampliar el alcance del módulo Mini PCIe Wi-Fi HaLow. Aquí se indican los modelos de antena verificados y recomendados.  

<div class="table-center">
    <table align="center">
        <tr>
            <th>Kit de Antena para Interiores de Largo Alcance</th>
            <th>Antena de Largo Alcance 2.6dBi</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Para conectar la antena al módulo Wi-Fi HaLow, también podrías necesitar adquirir el **cable de antena SMA a I-PEX**.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Cable de antena SMA a I-PEX</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Si estás utilizando el módulo por primera vez, puedes consultar el siguiente video para la instalación de la antena.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_pcie_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


## Instalación de Wi-Fi HaLow en OpenWrt para Raspberry Pi

Esta sección te guiará en la configuración de una Raspberry Pi 4 como gateway Wi-Fi HaLow utilizando una imagen de firmware OpenWrt precompilada.

### Descargar firmware

Descarga la imagen precompilada de OpenWrt con soporte para Wi-Fi HaLow desde:


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Wvirgil123/openwrt/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga la Imagen</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Flashea Firmware a la memoria MicroSD

1. Descarga e instala **[balenaEtcher](https://www.balena.io/etcher/)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/balenaEtcher.png" style={{width:1000, height:'auto'}}/></div>

2. Inserta tu tarjeta MicroSD en tu computadora.  
3. Abre balenaEtcher.  
4. Haz clic en "Flash from file" y selecciona el firmware de OpenWrt que descargaste.  
5. Selecciona tu tarjeta MicroSD como destino.  
6. Haz clic en "Flash!" y espera a que se complete el proceso.

### Configuración e inicio por primera vez

1. Inserta la tarjeta MicroSD ya flasheada en tu Raspberry Pi 4  
2. Conecta un cable Ethernet entre tu computadora y la Raspberry Pi  
3. Enciende la Raspberry Pi  
4. Espera aproximadamente 2-3 minutos para que el sistema arranque  

### Acceso a la interfaz del gateway

1. Configura la interfaz Ethernet de tu computadora para usar DHCP, o asigna una IP estática en el rango 10.42.0.x 
2. Abre un navegador web  
3. Navega a: http://10.42.0.1/
4. Deberías ver la página de inicio de sesión de Morse Micro


:::note
Las credenciales de inicio de sesión por defecto son:
- Username: root
- No es necesario ingresar una contraseña
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si no puedes acceder a la interfaz:
- Verifica tu conexión Ethernet
- Revisa que tu computadora este recibiendo una dirección IP
- Intenta hacer ping a 10.42.0.1 para verificar la conectividad
:::

## Configurar la Raspberry Pi como un punto de acceso

Inicia sesión en la interfaz de Morse Micro. En la página de bienvenida, sigue el ejemplo de la imagen que aparece a continuación para configurar tu país.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Actualmente, este dispositivo soporta uso en los Estados UNidos, no soporta otros países o regiones.
:::

Después de configurar tu país, puedes establecer el **Nombre del host (Hostname)** y la **Contraseña** según tu situación. Por favor, guarda esta información en un lugar seguro, ya que necesitarás esta contraseña para acceder al dispositivo más adelante mediante **SSH**. Luego, haz clic en el botón **Next** en la esquina inferior derecha.

En la nueva página, selecciona la opción **Access Point**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/3.png" style={{width:1000, height:'auto'}}/></div>

Luego, haz clic en el botón **Next**, y en la nueva página configura las credenciales de la red Wi-Fi HaLow. Por favor, recuerda estos datos, ya que tus dispositivos cliente los necesitarán para conectarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/4.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en el botón **Next** nuevamente, luego selecciona **Ethernet** en la nueva página y elige la opción **Bridge**. Configurar la red de esta manera permite una comunicación fluida entre los dispositivos conectados por Ethernet y por Wi-Fi, lo que genera una experiencia de red unificada para todos los dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/5.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, espera a que la configuración de red surta efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/6.png" style={{width:1000, height:'auto'}}/></div>

Cuando aparezca la siguiente interfaz, puedes desconectar la Raspberry Pi de la computadora y conectar el cable Ethernet entre tu router y la Raspberry Pi. Luego, verifica la dirección IP de la Raspberry Pi desde la página de administración de tu router.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/7.png" style={{width:1000, height:'auto'}}/></div>

En mi caso, la dirección IP es: <strong>192.168.1.168</strong>. Al ingresar esta dirección en el navegador, podrás acceder a la página de administración del gateway Wi-Fi HaLow.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/8.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Guía del Usuario del Kit de Evaluación UG MM6108 2.6 - v18](https://files.seeedstudio.com/wiki/wifi_halow/res/UG_MM6108_Eval_Kit_User_Guide_2.6-v18.pdf)
- **[PDF]** [Especificación del Módulo de Corto Alcance Quectel_FGH100M-H_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)
- **[PDF]** [Esquemático en PDF del Módulo WiFi-HaLow Mini PCIe](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30_SCH_20241107.pdf)
- **[KiCAD]** [Archivo PCB en KiCAD del Módulo WiFi-HaLow Mini PCIe](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30.kicad_pcb)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
