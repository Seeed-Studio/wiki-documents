---
description: Convierte tu Raspberry Pi en un potente punto de acceso Wi-Fi móvil con esta guía. Conéctate fácilmente a internet desde cualquier lugar con un Raspberry Pi 4G LTE Hat.
title: Configuración de un Punto de Acceso con Raspberry Pi y Hat 4G LTE en Raspberry Pi OS
keywords:
  - Raspberry Pi Hat
  - Getting started
  - Hotspot
  - Mobile Data
  - 4G LTE
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /es/4g_lte_hotspot_on_raspberry_pi_os
last_update:
  date: 06/02/2025
  author: Guillermo
---

## Introducción

Esta guía te guiará paso a paso en el proceso de configuración de un punto de acceso 4G LTE en tu Raspberry Pi utilizando el Hat 4G LTE. Cubriremos los componentes de hardware y software necesarios, incluyendo la Raspberry Pi, el Hat 4G LTE y el sistema operativo Raspberry Pi OS (Bookworm). Aprenderás a configurar el módulo 4G, establecer una red Wi-Fi y compartir de forma segura tu conexión a internet con otros dispositivos.

## Requisitos Previos

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos de Software

- Se requiere una Raspberry Pi con el sistema operativo Bookworm instalado.

- Un módulo LTE 4G Quectel configurado para acceso a internet. Asegúrate de que la conectividad LTE esté correctamente establecida utilizando RNIDS u otras configuraciones similares. [Enlace](https://wiki.seeedstudio.com/raspberry_pi_4g_hat_rndis_mobile_internet/)

## Pasos para Habilitar el Punto de Acceso

### Conectarse a la Red LTE

Asegúrate de que tu módulo LTE Quectel esté conectado y proporcionando acceso a internet. Confirma la conectividad utilizando:

```bash
ping -c 4 google.com
```

### Crear un Punto de Acceso

Para emitir una red de punto de acceso utilizando el módulo Wi-Fi integrado:

- Abre la terminal.
- Ejecuta el siguiente comando, reemplazando `nombre_del_hotspot` y `contraseña_del_hotspot` por el SSID y la contraseña que desees:

```bash
 sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
```

- **ssid**: Establece el nombre de tu red de hotspot.
- **password**: Establece la contraseña para acceder al hotspot.
- **ifname wlan0**: Especifica la interfaz Wi-Fi que se va a usar.

## Administrar el Punto de Acceso

### Desactivar el Punto de Acceso

Para detener el hotspot y restaurar la interfaz Wi-Fi al modo cliente:

```bash
sudo nmcli device disconnect wlan0
```
### Conectarse a Otra Red Wi-Fi

Para conectarte a una red Wi-Fi diferente después de desactivar el punto de acceso:

```bash
sudo nmcli device up wlan0
```
## Notas Adicionales

- Ahora puedes usar tu Raspberry Pi como un router portátil o punto de acceso Wi-Fi.
- Asegúrate de que la fuente de alimentación de tu Raspberry Pi sea estable cuando emita un punto de acceso durante largos períodos de tiempo.
- Puedes consultar este [documento](https://www.raspberrypi.com/tutorials/host-a-hotel-wifi-hotspot/) para más información.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>