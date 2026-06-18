---
description: Conecta cámaras de red y cámaras industriales a reServer Industrial a través de puertos PoE
title: Uso de cámara PoE con reServer Industrial
keywords:
  - reServer
  - PoE
  - IP camera
  - RTSP
  - industrial camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_industrial_poe_camera_usage
last_update:
  date: 06/17/2026
  author: HaoChen
sku: 114110247
createdAt: '2026-06-15'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/es/reserver_industrial_poe_camera_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Uso de cámara PoE en reServer Industrial

reServer Industrial está diseñado como un NVR de IA perimetral con **4 puertos Ethernet PoE PSE (LAN1–LAN4)** y **1 puerto de subida (LAN0)**. Puedes alimentar y conectar **cámaras IP de red** (RTSP/ONVIF) y **cámaras industriales PoE** directamente mediante un único cable Ethernet, sin necesidad de un adaptador de alimentación separado.

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

:::info
Para una visión completa de todos los puertos Ethernet y las especificaciones PoE, consulta [Uso de la interfaz de hardware de reServer Industrial — Conectores Gigabit Ethernet](https://wiki.seeedstudio.com/es/reserver_industrial_hardware_interface_usage/#conectores-gigabit-ethernet).
:::

## Descripción general de los puertos

| Puerto | Función | Salida PoE | Uso típico |
| :--- | :--- | :--- | :--- |
| **LAN1 – LAN4** | Cámara | Sí (802.3af, 15 W máx. cada uno) | Cámara IP, cámara industrial PoE |
| **LAN0** | Uplink | No | Router/switch para Internet y gestión |

La **etiqueta física en el chasis** (LAN0–LAN4) es fija. El **nombre de la interfaz Linux** (`eth0`, `enP1p1s0`, etc.) depende de la versión de JetPack y del kernel — **no des por hecho un mapeo fijo**. Usa el Paso 2 para hacer coincidir cada puerto físico con su interfaz.

Cada puerto PoE debe usar una **subred separada** al conectar varias cámaras, para que las direcciones de fábrica predeterminadas no entren en conflicto (consulta la tabla en el Paso 3).

## Paso 1: Habilitar la alimentación PoE

Habilita la salida PoE en los cuatro puertos PSE **antes** de conectar una cámara PoE. El procedimiento coincide con [Uso de la interfaz de hardware — Gigabit Ethernet](https://wiki.seeedstudio.com/es/reserver_industrial_hardware_interface_usage/#conectores-gigabit-ethernet).

<Tabs>
<TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

```sh
sudo -i
cd /sys/class/gpio
echo 315 > export
cd gpio315
echo "out" > direction
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

```sh
sudo apt update
sudo apt install gpiod
gpioset gpiochip2 15=1
```

</TabItem>
</Tabs>

:::info
Si `gpiochip2` no se encuentra, el nombre del chip GPIO puede variar según la imagen o el kernel. Ejecuta `gpioinfo` y localiza la línea usada para el control PoE (gpio-315 en el expansor I2C en `i2c/1-0021` en muchas unidades reServer Industrial). Usa ese nombre de chip y desplazamiento de línea en `gpioset` en su lugar. Consulta la tabla GPIO en [Uso de la interfaz de hardware](https://wiki.seeedstudio.com/es/reserver_industrial_hardware_interface_usage/#gpio).
:::

Para deshabilitar PoE, establece el valor GPIO en `0` en lugar de `1`.

:::tip
Para habilitar PoE automáticamente en cada arranque, añade los comandos anteriores a un servicio systemd o a `/etc/rc.local` (antes de `exit 0`).
:::

## Paso 2: Mapear puertos físicos a interfaces Linux

Cada puerto físico PoE se asigna a una interfaz Linux (`eth0`, `eth1`, …). El estado de enlace es visible en `ip -br link` **sin** configurar primero una IP — la interfaz que muestra `UP` con `LOWER_UP` es la que tiene un cable conectado.

Mapea **un puerto físico a la vez** para mantener las variables controladas:

**Paso 1.** Con PoE habilitado y **ninguna cámara conectada** a los puertos PoE, lista las interfaces:

```bash
ip -br link
```

Ignora interfaces virtuales como `lo`, `docker0`, `l4tbr0`, `rndis0` y `usb0`.

**Paso 2.** Conecta la cámara a **un solo** puerto físico (por ejemplo **LAN1**).

**Paso 3.** Ejecuta `ip -br link` de nuevo. La interfaz que cambió a `UP` / `LOWER_UP` es la interfaz Linux para ese puerto físico. Registra el mapeo (por ejemplo **LAN1** → `eth0`).

**Paso 4.** Desconecta la cámara y repite los Pasos 2–3 para **LAN2**, **LAN3** y **LAN4**.

| Puerto físico | Interfaz Linux | Notas |
| :--- | :--- | :--- |
| LAN1 | _rellenar_ | |
| LAN2 | _rellenar_ | |
| LAN3 | _rellenar_ | |
| LAN4 | _rellenar_ | |
| LAN0 | _rellenar_ | Uplink — normalmente conectado a un router |

Mantén **LAN0** conectado a tu router o switch cuando se requiera acceso a Internet en reServer Industrial.

## Paso 3: Configurar IP en reServer

La interfaz de reServer y la cámara deben tener cada una una dirección IP en la **misma subred** para comunicarse. Obtén la dirección de la cámara de su documentación o etiqueta de fábrica (muchas cámaras se envían con un valor fijo predeterminado como `192.168.1.64`). Si se desconoce la dirección, puedes ejecutar `tcpdump` en la interfaz mapeada mientras apagas y enciendes la cámara; algunos modelos emiten su IP una vez al arrancar.

Asigna una IP estática en el lado de reServer para cada puerto PoE. Ejemplo para **LAN1** (`eth0`), cámara `192.168.1.64`, reServer `192.168.1.10/24`:

```bash
sudo nmcli connection add type ethernet ifname eth0 con-name POE1
sudo nmcli connection modify POE1 ipv4.addresses 192.168.1.10/24
sudo nmcli connection modify POE1 ipv4.method manual
sudo nmcli connection up POE1
```

Para varias cámaras, usa **una cámara por puerto PoE** y una **subred diferente en cada puerto**:

| Puerto PoE | Nombre de la conexión | IP de reServer de ejemplo | Subred de cámara de ejemplo |
| :--- | :--- | :--- | :--- |
| LAN1 | POE1 | 192.168.1.10/24 | 192.168.1.0/24 |
| LAN2 | POE2 | 192.168.2.10/24 | 192.168.2.0/24 |
| LAN3 | POE3 | 192.168.3.10/24 | 192.168.3.0/24 |
| LAN4 | POE4 | 192.168.4.10/24 | 192.168.4.0/24 |

Sustituye `eth0`, los nombres de conexión y las direcciones para que coincidan con tu mapeo de puertos y la documentación de la cámara.

## Paso 4: Verificar la conectividad

```bash
ping -c 4 192.168.1.64
```

Sustituye la dirección por la IP de tu cámara. Un `ping` satisfactorio significa que el enlace PoE y la configuración IP en reServer Industrial son correctos.

Una vez confirmada la conectividad, consulta la documentación del fabricante de tu cámara para los siguientes pasos — por ejemplo URLs de flujo RTSP, configuración ONVIF, integración con SDK industrial o ingestión en NVR. Para canalizaciones de IA con múltiples cámaras en reServer Industrial, consulta [AI NVR con reServer Jetson](https://wiki.seeedstudio.com/es/ai_nvr_with_jetson/).

## Solución de problemas

| Problema | Posible causa | Solución |
| :--- | :--- | :--- |
| `gpiochip2` no encontrado (JetPack 6) | El nombre del chip GPIO difiere según la imagen | Ejecuta `gpioinfo`; usa el chip y la línea para PoE (gpio-315). Consulta la [tabla GPIO](https://wiki.seeedstudio.com/es/reserver_industrial_hardware_interface_usage/#gpio) |
| La cámara no enciende | GPIO de PoE no habilitado | Vuelve a ejecutar el Paso 1; confirma que el valor GPIO es `1` |
| La cámara se reinicia repetidamente | El consumo de energía supera 15 W | Usa una cámara certificada para 802.3af (≤ 15 W) o una fuente de alimentación externa |
| No se puede identificar qué interfaz está UP | Varios cables conectados | Desconecta todos los puertos PoE; mapea un puerto físico a la vez (Paso 2) |
| No se puede hacer ping a la cámara | Subred no coincidente o interfaz incorrecta | Confirma que la IP de reServer está en la misma subred que la cámara; verifica el mapeo de puertos del Paso 2 |
| IP de la cámara desconocida | No documentada en la etiqueta | Ejecuta `sudo tcpdump -i <poe-interface> -n` en la interfaz mapeada y luego apaga y enciende la cámara |
| Conflicto entre varias cámaras | Misma IP predeterminada | Usa un puerto PoE por cámara con subredes aisladas (consulta la tabla del Paso 3) |

## Recursos relacionados

- [Guía de inicio de reServer Industrial](https://wiki.seeedstudio.com/es/reServer_Industrial_Getting_Started/)
- [Uso de la interfaz de hardware de reServer Industrial](https://wiki.seeedstudio.com/es/reserver_industrial_hardware_interface_usage/)
- [AI NVR con reServer Jetson](https://wiki.seeedstudio.com/es/ai_nvr_with_jetson/)
- [Hoja de datos de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
