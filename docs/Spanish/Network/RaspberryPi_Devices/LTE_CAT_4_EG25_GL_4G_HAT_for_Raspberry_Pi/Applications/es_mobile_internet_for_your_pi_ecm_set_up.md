---
description: Explora el mundo del modo ECM y 4G LTE en Raspberry Pi. Esta guía ofrece instrucciones paso a paso para configurar la conectividad celular usando ECM (Ethernet Control Model), permitiendo un acceso a internet fluido para tus proyectos.

title: Internet móvil para tu Pi - Configuración ECM

keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - ECM
  - Mobile Data
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.webp
slug: /es/raspberry_pi_4g_hat_ecm_mobile_internet
last_update:
  date: 06/04/2025
  author: Guillermo
---

## Introducción

**ECM (Ethernet Control Model)** es un protocolo de red por USB que permite que dispositivos como el módulo 4G Quectel EG25-G funcionen como una interfaz de red en una Raspberry Pi. Al habilitar el modo ECM, el módulo proporciona conectividad celular a internet, lo que lo hace ideal para aplicaciones IoT como enrutadores portátiles, gateways IoT y sistemas de monitoreo remoto. La Raspberry Pi se comunica con el módulo mediante comandos AT para gestionar funciones como el modo ECM, GNSS y SMS, garantizando el acceso confiable a internet en áreas sin redes cableadas o Wi-Fi.

## Preparación del hardware

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


## Configuración del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

Configurar una Raspberry Pi para redes mediante el modo ECM (Ethernet Control Model) usando **comandos AT** implica el uso del módulo Quectel.

:::note
Si no tienes instalados los controladores necesarios para comunicarte mediante comandos AT, deberás [instalarlos](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).
:::

## Configuración de Red

### Paso 1: Abrir Minicom en la Raspberry Pi

```bash
sudo minicom -D /dev/ttyUSB2
AT
```

### Paso 2: Habilitar el modo ECM

```bash
AT+QCFG="usbnet",1
```

### Paso 3: Verificar el modo

```bash
AT+QCFG="usbnet"?
```
Debería devolver **usbnet,1**, lo que indica que el modo ECM está activo.

### Paso 4: Verificar las interfaces de red

```bash
ifconfig
```

Deberías ver una nueva interfaz, usb0 o eth1, que corresponde al modo ECM. En este caso, es usb0.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ifconfig_usb0.PNG" 
    style={{ width: 600}} 
  />
</div>

### Paso 5: Para configurar la interfaz de red para acceso a internet, usa DHCP:

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

### Paso 6: Asegúrate de que el enrutamiento esté correctamente configurado para acceso a internet:

```bash
sudo ip route add default via 192.168.225.1 dev usb0
```
Cambia la puerta de enlace (gateway) según la IP de tu interfaz usb0.

### Paso 7: Agrega entradas DNS para la resolución de nombres.

**Edita el archivo /etc/resolv.conf para usar los DNS de Google:**

```bash
sudo nano /etc/resolv.conf
```

### Paso 8: Agrega estas 2 líneas y guarda:

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

### Paso 9: Haz que la configuración DNS sea persistente

```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
```

### Paso 10: Agrega en la sección [main] y guarda:

```bash
dns=none
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/DNS.PNG" 
    style={{ width: 600}} 
  />
</div>

### Paso 11: Reinicia NetworkManager

```bash
sudo systemctl restart NetworkManager
```

### Paso 12: Probar la conexión

```bash
ping -I usb0 8.8.8.8
nslookup google.com
```
Una vez conectado correctamente a la red móvil usando el HAT 4G LTE, las posibilidades son realmente ilimitadas. Puedes establecer conexiones **MQTT** para mensajería IoT, comunicarte sin problemas con **servicios en la nube** para procesamiento de datos, o configurar un **servidor FTP** para transferencias remotas de archivos. Esta configuración transforma tu Raspberry Pi en una potente puerta de enlace portátil para diversas aplicaciones en IoT, automatización y mucho más.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros dispositivos sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>