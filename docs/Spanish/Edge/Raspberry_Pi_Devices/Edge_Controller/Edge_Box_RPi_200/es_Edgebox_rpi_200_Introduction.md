---
description: Introducción a Edge Controller
title: Primeros pasos con Edge Box RPI-200
keywords:
- Raspberry pi
- Controlador Perimetral
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edge_Box_introduction
last_update:
  date: 02/13/2025
  author: Erick González
---

## Introducción

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:400, height:'auto'}}/></div>

La serie EdgeBox-RPI-200 funciona como un controlador industrial de computación perimetral todo en uno basado en Raspberry Pi, diseñado para diversas aplicaciones industriales. Con alta escalabilidad y hardware robusto, se integra sin problemas con el extenso ecosistema de software industrial de Raspberry Pi. Esto la convierte en una elección óptima para soluciones de automatización inteligente y de Internet Industrial de las Cosas (IIoT).

Los controladores perimetrales, como alternativas versátiles a los PLC y PAC tradicionales, abordan tanto las necesidades de tecnología operacional (OT) como de tecnología de la información (IT) a través de sistemas operativos cuidadosamente diseñados. Garantizan un tiempo de ejecución determinista y proporcionan un entorno de computación para tareas avanzadas como análisis, mejorando la utilidad en diversos escenarios industriales. Con la fuerza laboral contemporánea familiarizada con lenguajes de programación modernos y entornos de kits de desarrollo debido a la era de los smartphones, la serie EdgeBox-RPI-200 ofrece una interfaz fácil de usar. Su factor de forma compacto permite operación en tiempo real y control multiproceso, sirviendo a una amplia variedad de propósitos industriales, incluidos PLC, PAC, puertas de enlace IIoT, servidores OPC UA y computadoras industriales.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

**Controlador Todo-en-Uno:** Integra funciones de PLC, PAC, puerta de enlace IIoT, servidor OPC UA y computadora industrial.

**Procesadores Potentes:** Raspberry Pi Compute Module 4 con 4GB de RAM, 16GB eMMC. Operación en tiempo real y soporte multiproceso.

**Abundantes E/S e Interfaces:** Admite varios protocolos industriales.

**Capacidades de Comunicación:** Conectividad inalámbrica, Ethernet Gigabit. Compatible con múltiples servicios en la nube.

**Diseño de Hardware Robusto:** Disipador de aluminio, montaje en riel DIN de 35 mm, montaje en pared.

**Ecosistema Raspberry Pi:** Compatible con Codesys, Node Red, MQTT, OPC UA, Ignition, etc.

## Especificaciones

| Parámetros                 | Detalles                                     |
|----------------------------|----------------------------------------------|
|**Básico**                  |                                              |
| Núcleo de CPU             | 4 núcleos Raspberry Pi CM4                   |
| Memoria                    | 1GB 2GB 4GB 8GB                              |
| Almacenamiento            | 8GB 16GB 32GB                                |
| Inalámbrico               | WiFi                                         |
|                           | 2.4 GHz, 5.0 GHz IEEE 802.11 b/g/n/ac equipado|
| Bluetooth                 | Bluetooth 5.0, BLE equipado                  |
| Celular                   | Ranura Mini-PCIe con soporte 4G LTE (Quectel EC20/EC25 comprobado) |
| LoRa®                     | Ranura Mini-PCIe con soporte LoRaWAN® (Seeed WM1302 comprobado) |
| **Interfaz**              |                                              |
| Ethernet                  | RJ45 1000M *1                                |
| HDMI                      | HDMI 2.0 hasta 4k@60fps                      |
| USB                       | USB2.0 A*2                                   |
| Serie RS                  | RS485 *1 (aislado)                           |
|                           | RS232 *1                                     |
| Ranura M.2                | Tarjeta SSD NVME 2242                        |
| DI                        | 2 (aisladas)                                 |
|                           | Voltaje de entrada - 24V, Corriente - 1000mA |
| DO                        | 2 (aisladas)                                 |
|                           | Voltaje de salida - menos de 60V, capacidad de corriente - 500mA |
| **Extras**                |                                              |
| Fuente de Alimentación    | DC 12V - 36V                                 |
| RTC                       | Reloj de tiempo real                         |
| Temporizador Watch Dog    | Independiente                                |
| Chip de Cifrado           | Atecc608a (opcional)                         |
| Fuente de Poder Ininterrumpida | UPS (opcional)                          |
| Temperatura de Operación  | -20 a +60 °C                                 |
| Certificación             | RoHS, CE, FCC, TELEC, UKCA                   |

## Ecosistema de Software Industrial de Raspberry Pi

Gracias al gran ecosistema de software industrial de Raspberry Pi, descubrirás que EdgeBox cuenta con abundante soporte de software y plataformas autónomas.
- [**Codesys**](https://wiki.seeedstudio.com/Edgebox-rpi-200-codesys/)
- [**Ignition**](https://wiki.seeedstudio.com/Edgebox-rpi-200-ignition-edge/)
- [**N3uron**](https://wiki.seeedstudio.com/Edgebox-rpi-200-n3uron/)
- [**balena**](https://wiki.seeedstudio.com/Edgebox-rpi-200-balena-OS-setup/)
- **Node Red**

## Descripción de Hardware

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/interfaces.PNG" /></center>

## Diagrama de Bloques

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/blockdiagram.PNG" /></center>

## Conector Phoenix Multifunción

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/pinout.PNG" /></center>

## Primer Encendido

**Paso 01:** Conecta las líneas de alimentación a los pines número 1 y 2. El pin número 1 es para la alimentación y el pin número 2 es para tierra.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/power.PNG" /></center>

:::note
La señal PE es opcional. Si no existe interferencia electromagnética (EMI), la conexión PE puede dejarse abierta.
:::

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/EMI.PNG" /></center>

**Paso 02**: A continuación, conecta un cable Ethernet. La configuración final podría verse así:

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/connection.jpg" /></center>

**Paso 03:** Después, puede que necesites identificar la dirección IP. Para ello, considera usar un software de escaneo de IP o la interfaz web de tu router. Una vez localizada, utiliza SSH para comunicarte con el Edge Box 200.

:::note
El nombre de usuario es `pi` y la contraseña es `raspberry`
:::

Edge Box-200 viene con Raspberry Pi OS preinstalado. Puedes usar un cable HDMI o conectar tu monitor y usar la interfaz gráfica de usuario. Para mayor simplicidad, podemos usar VNC Server.

Para ello, en la línea de comando escribe:

```sh
sudo raspi-config
```

:::note
Para una instalación nueva del sistema operativo, necesitarás adquirir una placa de desarrollo mínima que incluya la función de seleccionar el modo de arranque para la Raspberry Pi CM4. [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) es perfecta para este propósito.
:::

**Paso 04:** Luego selecciona la opción de interfaz

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig.PNG" /></center>

**Paso 05:** A continuación selecciona VNC y actívalo

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig2.PNG" /></center>

**Paso 06:** Reinicia EdgeBox

```sh
sudo reboot
```

Después, usando tu red local y tu PC con Real VNC instalado, puedes interactuar directamente con la interfaz gráfica de EdgeBox 200 RPi.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/edgebox_vnc.PNG" /></center>

## Interfaces

### Puertos Serie (RS232 y RS485)

A veces, puede que necesites comunicarte con protocolos RS232 o RS485 con un cliente. El EdgeBox RPI 200 tiene puertos separados para comunicación serie. Las conexiones se muestran a continuación:

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/serial.PNG" /></center>

:::note
La resistencia de terminación de 120 Ohm para RS485 está instalada internamente. La señal RS485_GND está aislada de la señal “GND”. Si se usa un cable de par trenzado blindado, el RS485_GND se conecta a la pantalla.
:::

### DI & DO

Se pueden conectar dos entradas digitales aisladas y dos salidas digitales al dispositivo EdgeBox RPI 200. El pinout se muestra a continuación.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital.PNG" /></center>

Para entender más sobre estas conexiones, revisa el siguiente diagrama:

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital1.PNG" /></center>

:::note
- El voltaje DC para la entrada es 24V (±10%).
- El voltaje DC para la salida debe ser menor de 60V, con capacidad de corriente de 500mA.
- El canal 0 y el canal 1 de entrada están aislados entre sí.
- El canal 0 y el canal 1 de salida están aislados entre sí.
:::

## Recursos Adicionales

- [Hoja Informativa de EdgeBox](https://files.seeedstudio.com/wiki/Edge_Box/Seeed_Studio_Edgebox-RPi-200.pdf)
- [Manual de Usuario de EdgeBox](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf)
- [Archivo 3D de EdgeBox](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox_RPi_200_3D_file.stp)

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
