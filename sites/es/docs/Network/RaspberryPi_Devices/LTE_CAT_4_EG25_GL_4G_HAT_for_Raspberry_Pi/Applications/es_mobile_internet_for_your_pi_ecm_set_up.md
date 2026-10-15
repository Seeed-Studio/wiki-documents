---
description: Explora el mundo del modo ECM y 4G LTE en Raspberry Pi. Esta guía proporciona instrucciones paso a paso para configurar la conectividad celular usando ECM (Modelo de Control Ethernet), habilitando acceso a internet sin interrupciones para tus proyectos.
title: Internet Móvil para tu Pi - Configuración ECM
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - ECM
  - Mobile Data
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.webp
slug: /raspberry_pi_4g_hat_ecm_mobile_internet
last_update:
  date: 3/14/2024
  author: Kasun Thushara
createdAt: '2025-06-24'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/raspberry_pi_4g_hat_ecm_mobile_internet/
---

## Introducción

**ECM (Modelo de Control Ethernet)** es un protocolo de red USB que permite que dispositivos como el módulo 4G Quectel EG25-G funcionen como una interfaz de red en una Raspberry Pi. Al habilitar el modo ECM, el módulo proporciona conectividad a internet celular, haciéndolo ideal para aplicaciones IoT como routers de internet portátiles, gateways IoT y sistemas de monitoreo remoto. La Raspberry Pi se comunica con el módulo a través de comandos AT para gestionar características como el modo ECM, GNSS y SMS, asegurando acceso confiable a internet en áreas sin redes cableadas o Wi-Fi.

## Preparación del Hardware

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

## La Configuración del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

Configurar una Raspberry Pi para redes a través del modo ECM (Modelo de Control Ethernet) usando **comandos AT** implica usar el Módulo Quectel.

:::note
Si los controladores necesarios para comunicarse con comandos AT no están instalados, necesitarás [instalarlos](https://wiki.seeedstudio.com/es/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).
:::

## Configuración de Red

### Paso 1: Abrir Minicom en Raspberry Pi

```bash
sudo minicom -D /dev/ttyUSB2
AT
```

### Paso 2 : Habilitar Modo ECM

```bash
AT+QCFG="usbnet",1
```

### Paso 3: Verificar el modo

```bash
AT+QCFG="usbnet"?
```

Debería devolver **usbnet,1**, indicando que el modo ECM está activo.

### Paso 4: Verificar Interfaces de Red

```bash
ifconfig
```

Deberías ver una nueva interfaz, usb0 o eth1, que es la interfaz de red del modo ECM. En este caso es usb0.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ifconfig_usb0.PNG"
    style={{ width: 600}}
  />
</div>

### Paso 5: Para configurar la interfaz de red para acceso a internet, usa DHCP

```bash
sudo dhclient usb0
sudo ip link set usb0 up
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb0-dhcp.png"
    style={{ width: 600}}
  />
</div>

### Paso 6: Asegúrate de que tu enrutamiento esté configurado correctamente para el acceso a internet

```bash
sudo ip route add default via 192.168.225.1 dev usb0
```

Cambia la puerta de enlace según tu IP de usb0.

### Paso 7: Añadir entradas DNS para la resolución de nombres

**Edita el archivo /etc/resolv.conf para usar el DNS de Google:**

```bash
sudo nano /etc/resolv.conf
```

### Paso 8: Añade estas 2 líneas y guarda

```bash
nameserver 8.8.8.8
nameserver 8.8.4.4
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/GoogleDNS.PNG"
    style={{ width: 600}}
  />
</div>

### Paso 9: Hacer persistente la configuración DNS

```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
```

### Paso 10: Añadir en [main] y guardar

```bash
dns=none
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/DNS.PNG"
    style={{ width: 600}}
  />
</div>

### Paso 11: Reiniciar NetworkManager

```bash
sudo systemctl restart NetworkManager
```

### Paso 12: Probar la Conexión

```bash
ping -I usb0 8.8.8.8
nslookup google.com
```

Una vez conectado exitosamente a la red móvil usando el 4G LTE HAT, las posibilidades son verdaderamente ilimitadas. Puedes establecer **conexiones MQTT** para mensajería IoT, comunicarte sin problemas con **servicios en la nube** para procesamiento de datos, o configurar un **servidor FTP** para transferencias remotas de archivos. Esta configuración transforma tu Raspberry Pi en una puerta de enlace potente y portátil para diversas aplicaciones en IoT, automatización y más allá.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
