---
description: Primeros pasos con el Módulo Wi-Fi HaLow Mini PCIe
title: Primeros pasos con el Módulo Wi-Fi HaLow Mini PCIe
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/0.webp
slug: /es/getting_started_with_wifi_halow_mini_pcie_module
last_update:
  date: 02/12/2025
  author: Citric
---

# Primeros pasos con el Módulo Wi-Fi HaLow Mini PCIe

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
</div><br />

Esta guía te llevará a través de la configuración y uso del Módulo Wi-Fi HaLow Mini PCIe para construir una puerta de enlace Wi-Fi HaLow. El factor de forma Mini PCIe facilita la integración de conectividad Wi-Fi HaLow en sistemas existentes y la creación de puertas de enlace IoT que pueden conectar numerosos dispositivos de bajo consumo a largas distancias.

## Descripción general

El Módulo Wi-Fi HaLow Mini PCIe está diseñado para habilitar conectividad inalámbrica de largo alcance para aplicaciones IoT. Proporciona:

- Interfaz Mini PCIe estándar para fácil integración
- Soporte para el protocolo Wi-Fi HaLow IEEE 802.11ah
- Alcance hasta 1km en línea de vista
- Bajo consumo de energía
- Capacidad para conectar miles de dispositivos IoT

## ¿Qué es Wi-Fi HaLow?

Wi-Fi HaLow (IEEE 802.11ah) es una tecnología de redes inalámbricas diseñada específicamente para aplicaciones de Internet de las Cosas (IoT). Operando en la banda de frecuencia sub-1 GHz, ofrece varias ventajas clave:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

### Beneficios Clave

- **Alcance Extendido**: Puede alcanzar hasta 1 kilómetro en condiciones de línea de vista, superando ampliamente el Wi-Fi tradicional
- **Mejor Penetración**: Las señales de menor frecuencia pueden penetrar paredes y obstáculos más efectivamente
- **Eficiencia Energética**: Optimizado para dispositivos IoT alimentados por batería
- **Alta Escalabilidad**: Soporta miles de dispositivos conectados por punto de acceso
- **Soporte IP Nativo**: Integración perfecta con redes IP existentes

### Aplicaciones

Wi-Fi HaLow es ideal para:

- Agricultura Inteligente
- IoT Industrial
- Ciudades Inteligentes
- Automatización de Edificios
- Monitoreo Ambiental
- Seguimiento de Activos

### Por qué es Importante

Wi-Fi HaLow aborda desafíos críticos en implementaciones IoT:

1. **Brecha de Cobertura**: Cierra la brecha entre Wi-Fi de corto alcance y redes celulares
2. **Duración de Batería**: Permite años de operación con alimentación por batería
3. **Costo de Implementación**: Reduce costos de infraestructura comparado con soluciones celulares
4. **Estandarización**: Basado en estándares Wi-Fi familiares para adopción más fácil
5. **Seguridad**: Incorpora seguridad WPA3 de grado empresarial

Al combinar capacidades de largo alcance, bajo consumo y alta densidad de dispositivos, Wi-Fi HaLow está posicionado para convertirse en una tecnología clave para implementaciones IoT a gran escala en varias industrias.

## Descripción General de OpenWrt

El Módulo Wi-Fi HaLow Mini PCIe funciona con OpenWrt, un sistema operativo Linux altamente extensible diseñado principalmente para dispositivos embebidos como routers. Esto es lo que hace de OpenWrt una plataforma excelente para gateways Wi-Fi HaLow:

### ¿Qué es OpenWrt?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:800, height:'auto'}}/></div>

OpenWrt es un sistema operativo basado en Linux que proporciona:

- Un sistema de archivos completamente escribible con gestión de paquetes
- Alta modularidad que permite personalizar la funcionalidad
- Soporte para una amplia gama de dispositivos embebidos
- Comunidad de desarrollo activa y actualizaciones regulares
- Capacidades de red extensas

### Beneficios para Despliegues Wi-Fi HaLow

OpenWrt proporciona una plataforma ideal para gateways Wi-Fi HaLow porque:

- **Estabilidad**: Base Linux sólida como una roca para operación 24/7
- **Flexibilidad**: Personalización fácil para requisitos específicos de IoT
- **Rendimiento**: Pila de red optimizada para manejo eficiente de datos
- **Seguridad**: Características de seguridad de nivel empresarial integradas
- **Comunidad**: Gran ecosistema de desarrolladores y usuarios

La combinación de OpenWrt y Wi-Fi HaLow crea una base poderosa para construir redes IoT robustas que pueden escalar desde pequeños despliegues hasta grandes instalaciones industriales.

## Materiales Requeridos

Aquí están los materiales necesarios para ejecutar este tutorial.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Raspberry Pi 4 Model B</th>
            <th>Módulo WiFi HaLow Mini PCIe</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/raspberrypi4b.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Además, necesitarás los siguientes elementos:

- **[Adaptador Mini PCIe a PCIe](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)** - Para conectar el Módulo Mini PCIe Wi-Fi HaLow a Raspberry Pi.
- **Disipador de calor para Raspberry Pi** - Recomendado para la gestión térmica durante el funcionamiento continuo.
- **Tarjeta MicroSD (8GB o mayor)** - Para almacenar el firmware OpenWrt.
- **Lector de tarjetas MicroSD** - Para leer la tarjeta MicroSD.
- **Cable Ethernet** - Usado para conectar al ordenador host y configurar el WiFi-Halow de Raspberry Pi.
- **Fuente de alimentación para Raspberry Pi**
- **Ordenador** - para flashear el firmware y configurar el WiFi-Halow de Raspberry Pi.
- **Antena** - Para extender el alcance del Módulo Mini PCIe Wi-Fi HaLow. Aquí están los modelos de antena verificados y recomendados.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Kit de Antena Interior de Largo Alcance</th>
            <th>Antena de Largo Alcance 2.6dBi</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Para conectar la antena al módulo WiFi-Halow, también puede que necesites comprar el **Cable de Antena SMA a I-PEX**.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Cable de Antena SMA a I-PEX</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Si lo estás usando por primera vez, puedes consultar el siguiente video para la instalación de la antena.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_pcie_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Instalación de WiFi Halow para OpenWrt en Raspberry Pi

Esta sección te guiará a través de la configuración de una Raspberry Pi 4 como puerta de enlace Wi-Fi HaLow usando una imagen de firmware OpenWrt precompilada.

### Descargar Firmware

Descarga la imagen OpenWrt precompilada con soporte Wi-Fi HaLow desde:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Wvirgil123/openwrt/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Imagen</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Grabar Firmware en Tarjeta MicroSD

1. Descarga e instala **[balenaEtcher](https://www.balena.io/etcher/)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/balenaEtcher.png" style={{width:1000, height:'auto'}}/></div>

2. Inserta tu tarjeta MicroSD en tu computadora.
3. Ejecuta balenaEtcher.
4. Haz clic en "Flash from file" y selecciona el firmware OpenWrt descargado.
5. Selecciona tu tarjeta MicroSD como destino.
6. Haz clic en "Flash!" y espera a que el proceso se complete.

### Configuración y Primer Arranque

1. Inserta la tarjeta MicroSD grabada en tu Raspberry Pi 4
2. Conecta un cable Ethernet entre tu computadora y la Raspberry Pi
3. Enciende la Raspberry Pi
4. Espera aproximadamente 2-3 minutos para que el sistema arranque

### Acceso a la Interfaz de la Puerta de Enlace

1. Configura la interfaz Ethernet de tu computadora para usar DHCP, o establece una IP estática en el rango 10.42.0.x
2. Abre un navegador web
3. Navega a: http://10.42.0.1/
4. Deberías ver la página de inicio de sesión de Morse Micro

:::note
Las credenciales de inicio de sesión predeterminadas son:

- Nombre de usuario: root
- No es necesario introducir contraseña

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si no puedes acceder a la interfaz:

- Verifica tu conexión Ethernet
- Comprueba que tu computadora esté recibiendo una dirección IP
- Intenta hacer ping a 10.42.0.1 para verificar la conectividad

:::

## Configurar la Raspberry Pi como Punto de Acceso

Inicia sesión en la interfaz de Morse Micro. En la página de bienvenida, por favor sigue el ejemplo en la imagen de abajo para configurar tu país.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Actualmente, este dispositivo solo soporta Estados Unidos y no soporta otros países o regiones.
:::

Después de configurar tu país, puedes establecer el **Hostname** y **Password** según tu situación actual. Por favor mantén esta información segura, ya que necesitarás usar esta contraseña para acceder al dispositivo (ssh) más tarde. Luego haz clic en el botón **Next** en la esquina inferior derecha.

Por favor selecciona la opción **Access Point** en la nueva página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/3.png" style={{width:1000, height:'auto'}}/></div>

Luego haz clic en el botón **Next**, y en la nueva página, establece las credenciales de la red Wi-Fi HaLow. Por favor recuérdalas, ya que tus dispositivos cliente las necesitarán para conectarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/4.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en el botón **Next**, luego selecciona **Ethernet** en la nueva página y elige **Bridge**. Configurar la red de esta manera permite una comunicación fluida entre dispositivos en las redes Ethernet y Wi-Fi, habilitando una experiencia de red unificada para los dispositivos conectados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/5.png" style={{width:1000, height:'auto'}}/></div>

Luego espera a que la configuración de red tome efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/6.png" style={{width:1000, height:'auto'}}/></div>

Cuando aparezca la siguiente interfaz, puedes desconectar la Raspberry Pi de la computadora y conectar el cable Ethernet entre tu router y la Raspberry Pi. Luego, verifica la dirección IP de la Raspberry Pi a través de la página de administración del router.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/7.png" style={{width:1000, height:'auto'}}/></div>

Para mi dispositivo, la dirección IP es: <strong>192.168.1.168</strong>. Ingresar esta dirección en el navegador te permitirá acceder a la página de backend del gateway Wi-Fi HaLow.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/8.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [UG MM6108 Eval Kit User Guide 2.6 - v18](https://files.seeedstudio.com/wiki/wifi_halow/res/UG_MM6108_Eval_Kit_User_Guide_2.6-v18.pdf)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)
- **[PDF]** [WiFi-Halow Mini PCIe Module SCH PDF](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30_SCH_20241107.pdf)
- **[KiCAD]** [WiFi-Halow Mini PCIe Module KiCAD PCB File](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30.kicad_pcb)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
