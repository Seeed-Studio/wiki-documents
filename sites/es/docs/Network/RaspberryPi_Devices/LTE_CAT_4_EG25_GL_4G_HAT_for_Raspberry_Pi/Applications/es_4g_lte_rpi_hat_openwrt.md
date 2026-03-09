---
description: Disfruta de acceso confiable a internet en cualquier lugar con una Raspberry Pi 5, OpenWrt y un HAT 4G LTE. Aprende cómo crear un hotspot portátil de alto rendimiento para el hogar, viajes y ubicaciones remotas.
title: Configuración de OpenWrt en Raspberry Pi 5 con un Módulo 4G LTE
keywords:
  - Raspberry Pi Hat
  - Getting started
  - Hotspot
  - Mobile Data
  - 4G LTE
  - OpenWRT
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.webp
slug: /4g_lte_hat_and_raspberry_pi_router_with_openwrt
last_update:
  date: 12/25/2024
  author: Kasun Thushara
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/4g_lte_hat_and_raspberry_pi_router_with_openwrt/
---

## Introducción

La Raspberry Pi 5, combinada con **OpenWrt** y un HAT 4G LTE, ofrece una solución potente y flexible para crear un hotspot portátil. Esta configuración es ideal para proporcionar acceso a internet en ubicaciones remotas, soportar dispositivos IoT o crear una red inalámbrica personal sobre la marcha. La personalización de OpenWrt asegura una integración perfecta con módulos 4G LTE, permitiendo a los usuarios aprovechar todo el potencial de la Raspberry Pi 5 como un router inalámbrico confiable y de alto rendimiento. Ya sea para uso doméstico, viajes o profesional, esta guía te ayudará a transformar tu Raspberry Pi 5 en un hotspot completamente funcional alimentado por OpenWrt y conectividad 4G LTE.

## Prerrequisitos

### Requisitos de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Construir la Imagen de OpenWrt

### Elegir el Snapshot de OpenWrt

Para trabajar con un módulo 4G LTE, se requieren ciertas dependencias. El Selector de Firmware de OpenWrt proporciona la flexibilidad para incluir estas dependencias durante el proceso de creación de la imagen, permitiéndote compilar un firmware personalizado. Sin este enfoque, necesitarías una fuente de internet alternativa para instalar las dependencias en la Raspberry Pi después de la configuración. Por lo tanto, se recomienda construir una imagen de firmware que ya incluya las dependencias necesarias.

- **Ve al [selector de firmware de OpenWrt](https://firmware-selector.openwrt.org/?version=SNAPSHOT&target=bcm27xx%2Fbcm2712&id=rpi-5) y elige la versión snapshot.**

- Los snapshots se actualizan frecuentemente y son ideales para usuarios avanzados.

- Haz clic en `Customize installed packages and/or first boot script`.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build-1.PNG"
    style={{ width: 500}}
  />
</div>

Asegúrate de que los siguientes paquetes estén incluidos durante el proceso de construcción personalizada:

- kmod-usb-net-cdc-ether
- kmod-usb-serial-option
- picocom
- minicom

### Pasos para Construir

- Añade los paquetes requeridos a tu archivo de configuración.
- Compila el firmware de OpenWrt.
- Descarga la imagen de fábrica generada después de la compilación.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build.PNG"
    style={{ width: 500}}
  />
</div>

## Instalar OpenWrt en Raspberry Pi 5

- Graba la imagen compilada en una tarjeta SD usando herramientas como **Balena Etcher**.
- Inserta la tarjeta SD en la Raspberry Pi 5.
- Conecta tu Raspberry Pi a un módulo 4G LTE

### Verificar la Conexión del Dispositivo

Accede a la Raspberry Pi usando SSH:

```bash
ssh root@192.168.1.1
```

### Verificar Detalles del Dispositivo

- Usa dmesg para verificar dispositivos conectados:

```bash
dmesg | grep usb
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-dmsg.PNG"
    style={{ width: 500}}
  />
</div>

- Ver detalles USB:

```bash
cat/sys/kernel/debug/usb/devices
```

:::note
Esto mostrará información sobre el fabricante, producto y otros detalles específicos del dispositivo. Asegúrese de que el módulo esté encendido.
:::

## Configurar el Módulo LTE

### Usar Minicom para Ajustar la Configuración

Abrir **Minicom**

```bash
minicom -s
```

Encontrarás este tipo de interfaz. Selecciona Serial port setup usando las teclas de flecha

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-serial.PNG"
    style={{ width: 500}}
  />
</div>

Configura los ajustes:

- Establece la velocidad de baudios para que coincida con tu módulo 4G (ej., 9600).
- Selecciona el puerto COM correcto (ej., /dev/ttyUSB2).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom.PNG"
    style={{ width: 500}}
  />
</div>

- Y guarda la configuración como predeterminada

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-save.PNG"
    style={{ width: 500}}
  />
</div>

### Habilitar Modo ECM / Dial-Up

Envía los siguientes comandos AT para configurar el modo de red USB:

```bash
minicom -D /dev/ttyUSB2
```

```bash
AT+QCFG="usbnet"
AT+QCFG="usbnet",1 
```

### Agregar una Nueva Interfaz de Red

- Inicia sesión en la interfaz web OpenWrt LuCI a través del navegador web **192.168.1.1**.
- Ve a **Network > Interfaces > Add New Interface**.
- Configura la interfaz:
  - Selecciona el dispositivo detectado (**eth1** o **usb0**).
  - Usa el protocolo **DHCP Client**.
  - Nombra la interfaz (ej., **USB_Modem**).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-new-interface.PNG"
    style={{ width: 500}}
  />
</div>

- Configura los ajustes del firewall:
  - Asigna la interfaz a la zona WAN.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-firewall-interface.PNG"
    style={{ width: 500}}
  />
</div>

- En DHCP Server, habilita Ignore Interface.

### Configurar un Punto de Acceso Inalámbrico

- En la interfaz web LuCI, navega a **Network > Wireless > Add**.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless.PNG"
    style={{ width: 500}}
  />
</div>

- Configura la nueva interfaz inalámbrica:
  - **SSID**: Mantén el predeterminado o personalízalo.
  - **Mode**: Access Point.
  - **Network**: LAN.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless-settings.PNG"
    style={{ width: 500}}
  />
</div>

- Para **Wireless Security**
  - Establece el cifrado a **WPA2**.
  - Crea una contraseña segura.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-password-wireless.PNG"
    style={{ width: 500}}
  />
</div>

- Reinicia el dispositivo.

### Probar la Red Inalámbrica

- Tu SSID inalámbrico ahora debería ser visible en dispositivos cercanos.
- Conéctate usando la contraseña configurada para acceder al internet 4G LTE.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-connection.PNG"
    style={{ width: 500}}
  />
</div>

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.png"
    style={{ width: 500}}
  />
</div>

## Recursos

- **[Página Web]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Página Web]** [OpenWRT Uses cdc_ether driver based dongles for WAN connection](https://openwrt.org/docs/guide-user/network/wan/wwan/ethernetoverusb_cdc)

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
