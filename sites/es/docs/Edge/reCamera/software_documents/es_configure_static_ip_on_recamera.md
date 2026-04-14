---
description: Esta wiki explica cómo configurar una dirección IP estática en reCamera.
title: Configurar IP estática en reCamera
keywords:
  - Edge
  - reCamera
  - IP estática
  - Red
image: https://files.seeedstudio.com/wiki/reCamera/static_ip_banner.png
slug: /configure_static_ip_on_recamera
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: 9
last_update:
  date: 04/13/2026
  author: Samuel
createdAt: "2026-04-13"
updatedAt: "2026-04-13"
url: https://wiki.seeedstudio.com/es/configure_static_ip_on_recamera/
---

# Configurar IP estática en reCamera

Este documento explica cómo configurar una dirección IP estática en reCamera (sistema Buildroot). La configuración incluye tres pasos: editar el archivo de configuración, establecer parámetros de red estáticos y reiniciar el servicio de red para verificación.

## Configuración de IP estática

### Paso 1: Editar el archivo de configuración de red

Ejecute el siguiente comando en la terminal de reCamera:

```bash
sudo vi /etc/network/interfaces
```

### Paso 2: Establecer parámetros IP estáticos para `eth0`

Configure `eth0` como una interfaz estática. Actualice los valores según su red real y asegúrese de que `address` no duplique ninguna otra dirección IP en la misma LAN:

```bash
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
    address 192.168.2.100
    netmask 255.255.255.0
    gateway 192.168.2.1
```

Si también necesita configurar DNS manualmente:

```bash
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
```

### Paso 3: Reiniciar la red y verificar

Aplique los nuevos ajustes sin reiniciar:

```bash
sudo /etc/init.d/S40network restart
```

Luego verifique la dirección de `eth0`:

```bash
ip addr show eth0
```

[LINE69]Si la salida incluye su `address` configurado, la IP estática se ha configurado con éxito.

[LINE71]<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/static_ip_output.png" /></div>

[LINE73]## Soporte técnico y discusión de productos

[LINE75]¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarle diferentes tipos de soporte para garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarse a diferentes preferencias y necesidades.

[LINE77]<div class="button_tech_support_container">
[LINE78]<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
[LINE79]<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
[LINE80]</div>

[LINE82]<div class="button_tech_support_container">
[LINE83]<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
[LINE84]<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
[LINE85]</div>
