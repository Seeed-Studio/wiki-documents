---
description: OpenWrt-FAQ
title: ¿Cómo cambiar la IP de puerta de enlace predeterminada en OpenWrt?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/change_default_gateway_IP
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q1: ¿Qué pasa si conecto el router OpenWrt a mi router existente que tiene una IP de puerta de enlace predeterminada de 192.168.2.1? -->

La imagen OpenWrt de Seeed viene preconfigurada con la configuración de red necesaria. Es posible que solo necesites cambiar una configuración de red para el escenario que involucra la Placa Portadora Dual Gigabit Ethernet para Raspberry Pi CM4 conectándose a tu router existente, y el router tiene la IP de puerta de enlace predeterminada configurada en 192.168.2.1 que es la misma que la IP de puerta de enlace predeterminada para OpenWrt. En este escenario, necesitas cambiar la IP predeterminada de la interfaz LAN en OpenWrt de la siguiente manera:

- **Paso 1.** Abre un navegador web e inicia sesión en el portal OpenWrt escribiendo **192.168.2.1**

- **Paso 2.** Navega a **System > TTYD Terminal** e inicia sesión con **root** como nombre de usuario

- **Paso 3.** Abre el siguiente archivo

```sh
vi /etc/config/network
```

- **Paso 4.** Cambia la dirección IP estática en la interfaz LAN de la siguiente manera

```sh
config interface 'lan'
        option type 'bridge'
        option ifname 'eth0'
        option proto 'static'
        option ipaddr '192.168.3.1'
        option netmask '255.255.255.0'
        option ip6assign '60'
```

**Nota:** Aquí la IP estática se cambia a **192.168.3.1**. Sin embargo, puedes escribir cualquier dirección IP de tu elección

- **Paso 4.** Reinicia el router

```sh
reboot
```