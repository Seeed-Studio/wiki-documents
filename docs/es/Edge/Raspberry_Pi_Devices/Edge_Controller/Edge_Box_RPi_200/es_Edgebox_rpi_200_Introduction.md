---
description: Introducción al Edge Controller 
title: Introducción al Edge Box RPI-200
keywords:
- Raspberry pi
- Edge Controller
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edge_Box_introduction
last_update:
  date: 2/29/2024
  author: Kasun Thushara
---

## Introducción


<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:400, height:'auto'}}/></div>

La serie EdgeBox-RPI-200 funciona como un controlador de computación de borde industrial todo en uno basado en Raspberry Pi, diseñado para diversas aplicaciones industriales. Con alta escalabilidad y hardware robusto, se integra perfectamente con el extenso ecosistema de software industrial de Raspberry Pi. Esto lo convierte en una opción óptima para automatización inteligente y soluciones de Internet Industrial de las Cosas (IIoT).

Los controladores de borde, como alternativas versátiles a los PLCs y PACs tradicionales, abordan tanto las necesidades de tecnología operacional (OT) como de tecnología de la información (IT) a través de sistemas operativos cuidadosamente diseñados. Garantizan tiempo de ejecución determinístico y proporcionan un entorno de computación para tareas avanzadas como análisis, mejorando la utilidad en varios escenarios industriales. Con la fuerza laboral contemporánea familiarizada con lenguajes de programación modernos y entornos de kits de desarrollo debido a la era de los smartphones, los controladores de la serie EdgeBox-RPI-200 ofrecen una interfaz fácil de usar. Su factor de forma compacto permite operación en tiempo real y control multiproceso, sirviendo diversos propósitos industriales, incluyendo PLCs, PACs, Gateways IIoT, Servidores OPC UA, y PCs Industriales.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características 

**Controlador Todo en Uno:**  Integra funciones de PLC, PAC, Gateway IIoT, Servidor OPC UA, y PC Industrial.

**Procesadores Potentes:** Raspberry Pi Compute Module 4 con 4GB RAM, 16GB eMMC. Operación en tiempo real, soporte multiproceso.

**IO e Interfaces Abundantes:** Soporta varios protocolos industriales.

**Capacidades de Comunicación:** Conectividad inalámbrica, Gigabit Ethernet. Compatible con múltiples servicios en la nube.

**Diseño de Hardware Robusto:** Disipador de aluminio, DIN de 35mm, montaje en pared.

**Ecosistema Raspberry Pi:** Compatible con Codesys, Node Red, MQTT, OPC UA, Ignition, etc.


## Especificaciones 


| Parámetros                | Detalle                                     |
|---------------------------|---------------------------------------------|
|**Básico**                 |                        |                                        
| Núcleo CPU                | 4-núcleos Raspberry Pi CM4                  |
| Memoria                   | 1GB 2GB 4GB 8GB                             |
| Almacenamiento            | 8GB16GB 32GB                                |
| Inalámbrico              | WiFi                                        |
|                           | 2.4 GHz, 5.0 GHz IEEE 802.11 b/g/n/ac equipado|
| Bluetooth                | Bluetooth 5.0, BLE equipado                  |
| Celular                  | Mini-PCIe soporta 4G LTE (Quectel EC20/EC25 probado) |
| LoRa®                     | Mini-PCIe soporta LoRaWAN® (Seeed WM1302 probado) |
| **Interfaz**              |                                        |
| Ethernet                 | 1000M RJ45 *1                               |
| HDMI                     | HDMI 2.0 hasta 4k@60fps                      |
| USB                      | USB2.0 A*2                                  |
| Serie RS                 | RS485 *1 (Aislado)                         |
|                           | RS232 *1                                    |
| Socket M.2               | Tarjeta SSD NVME 2242                       |
| DI                        | 2 (Aislado)                                |
|                           | Voltaje de entrada DC - 24V, Corriente - 1000mA    |
| DO                        | 2 (Aislado)                                |
|                           | Voltaje de salida - bajo 60 V, capacidad de corriente - 500 mA |
| **Características Extra**|                                            |
| Fuente de Alimentación    | DC 12V - 36V                                |
| RTC                       | RTC                                         |
| Temporizador Watch Dog    | Independiente                               |
| Chip de Encriptación      | Atecc608a (opcional)                        |
| Fuente de Alimentación Ininterrumpida | UPS (opcional)                              |
| Temperatura de Operación  | -20 a +60 °C                               |
| Certificación             | RoHS, CE, FCC, TELEC, UKCA                  |

## Ecosistema de Software Industrial de Raspberry Pi

Con el gran ecosistema de software industrial de Raspberry Pi, encontrarás que EdgeBox tiene abundante software y plataformas autónomas compatibles.
- [**Codesys**](https://wiki.seeedstudio.com/es/Edgebox-rpi-200-codesys/)
- [**Ignition**](https://wiki.seeedstudio.com/es/Edgebox-rpi-200-ignition-edge/)
- [**N3uron**](https://wiki.seeedstudio.com/es/Edgebox-rpi-200-n3uron/)
- [**balena**](https://wiki.seeedstudio.com/es/Edgebox-rpi-200-balena-OS-setup/)
- **Node Red**

## Descripción General del Hardware

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/interfaces.PNG" /></center>

## Diagrama de Bloques 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/blockdiagram.PNG" /></center>

## Conector Phoenix Multifunción 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/pinout.PNG" /></center>

## Primer Encendido

**Paso 01:** Conecta las líneas de alimentación al pin número 1 y 2. El pin número 1 es para la alimentación y el pin número 2 es para tierra.


<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/power.PNG" /></center>

:::note
La señal PE es opcional. Si no hay EMI presente, la conexión PE se puede dejar abierta.
:::

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/EMI.PNG" /></center>

**Paso 02**: A continuación, conecta un cable Ethernet. La configuración final puede verse así

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/connection.jpg" /></center>

**Paso 03:** Después, es posible que necesites identificar la dirección IP. Para hacer esto, considera usar software de escaneo de IP o puedes usar la interfaz web del router. Una vez localizada, utiliza SSH para establecer comunicación con el Edge Box 200.

:::note
El Nombre de Usuario es pi y la Contraseña es raspberry
:::

Edge Box-200 llega a tus manos con el SO de raspberry pi preinstalado. También puedes usar cable HDMI o conectar tu monitor y usar la interfaz gráfica de usuario. Para simplificar podemos usar servidor VNC.

Para eso en la línea de comandos escribe:

```sh
sudo raspi-config
```

:::note 
Para una instalación nueva del sistema operativo, necesitarás comprar una placa de desarrollo mínima que incluya la función para seleccionar el modo de arranque para la Raspberry Pi CM4. La [Placa Portadora con Dual Gigabit Ethernet NICs](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) es perfecta para este propósito.
:::

**Paso 04:** Luego selecciona la opción de interfaz

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig.PNG" /></center>


**Paso 05:** A continuación selecciona VNC y habilítalo

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig2.PNG" /></center>

**Paso 06:** A continuación reinicia el EdgeBox 

```sh
sudo reboot
```

Luego, usando tu red de área local y tu PC que tiene instalado Real VNC, puedes interactuar directamente con la GUI del Edge-box 200 RPi.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/edgebox_vnc.PNG" /></center>

## Interfaces 

### Puertos Serie (RS232 y RS485)

A veces, es posible que necesites comunicarte con protocolos RS232 o RS485 con un cliente. El EdgeBox RPI 200 tiene puertos separados para comunicación serie. Las conexiones son las siguientes:

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/serial.PNG" /></center>

:::note 
La resistencia de terminación de 120 Ohm para RS485 ha sido instalada en el interior. La señal RS485_GND está aislada de la señal "GND". Si se usa un cable de par trenzado blindado, el RS485 _GND se conecta al blindaje.
:::

### DI&DO

Dos entradas digitales aisladas y dos salidas digitales pueden conectarse al dispositivo EdgeBox RPI 200. La distribución de pines se muestra a continuación

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital.PNG" /></center>

Para entender mejor estas conexiones, por favor consulta el diagrama a continuación

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital1.PNG" /></center>

:::note 
- El voltaje DC para entrada es 24V (+- 10%).
- El voltaje DC para salida debe estar por debajo de 60V, la capacidad de corriente es 500ma.
- El canal 0 y el canal 1 de entrada están aislados entre sí
- El canal 0 y el canal 1 de salida están aislados entre sí
:::

## Recursos Adicionales

- [Hoja Informativa Edgebox](https://files.seeedstudio.com/wiki/Edge_Box/Seeed_Studio_Edgebox-RPi-200.pdf)
- [Manual de Usuario Edgebox](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf)
- [Archivo 3D EdgeBox](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox_RPi_200_3D_file.stp)

## Soporte técnico


¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>