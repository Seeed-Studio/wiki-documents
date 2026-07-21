---
description: Este wiki presenta las características y especificaciones del módulo inalámbrico RTL8852BE, un módulo inalámbrico Wi‑Fi 6 y Bluetooth M.2 compatible con dispositivos NVIDIA Jetson. El artículo proporciona información detallada sobre sus especificaciones técnicas, la instalación del controlador para JetPack 5 y JetPack 6, y métodos para configurar redes inalámbricas y Bluetooth.
title: Módulo inalámbrico RTL8852BE para Jetson
keywords:
  - Edge
  - reComputer
  - Wifi
  - Wifi 6
  - Bluetooth
  - Wireless
  - RTL8852BE
slug: /rtl8852be_wireless_module_for_jetson
last_update:
  date: 4/14/2026
  author: Zibo
createdAt: '2026-04-14'
updatedAt: '2026-06-23'
sku: 100042928
url: https://wiki.seeedstudio.com/es/rtl8852be_wireless_module_for_jetson/
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/8852be.png"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span>
    </strong>
  </a>
</div>



El RTL8852BE es un módulo inalámbrico M.2 Wi‑Fi 6 (802.11ax) basado en el chipset Realtek. Integra una interfaz PCIe para WLAN y una interfaz USB para Bluetooth, ofreciendo un rendimiento significativamente mayor y una latencia más baja en comparación con los módulos Wi‑Fi 5 de la generación anterior. Es ideal para dispositivos embebidos como [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) que requieren conectividad inalámbrica de alto rendimiento.

## Características

- Soporta banda dual de 2.4 GHz / 5 GHz
- IEEE 802.11 a/b/g/n/ax (Wi‑Fi 6)
- Tasa PHY de hasta 1200 Mbps en la banda de 5 GHz
- Factor de forma: M.2 2230, llave A o llave E
- Alimentación: DC 3.3V
- Soporta Linux (JetPack 5 / JetPack 6), Windows 10/11

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>Chipset</td>
      <td>**RTL8852BE**</td>
    </tr>
    <tr>
      <td>Estándares WLAN</td>
      <td>IEEE 802.11 a/b/g/n/ax (Wi‑Fi 6)</td>
    </tr>
    <tr>
      <td>Especificación BT</td>
      <td>Bluetooth 5.2</td>
    </tr>
    <tr>
      <td>Interfaz de host</td>
      <td>PCIe 2.1/2.0 para WLAN y USB 2.0 para Bluetooth</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>Conexión a antenas externas mediante conector MHF4</td>
    </tr>
    <tr>
      <td>Dimensiones</td>
      <td>M.2 2230 (22 x 30 x 2.15 mm)</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td>DC 3.3V</td>
    </tr>
    <tr>
      <td>Velocidad inalámbrica máxima</td>
      <td>Hasta 1200 Mbps</td>
    </tr>
    <tr>
      <td>Temperatura de operación</td>
      <td>-20°C a +70°C</td>
    </tr>
    <tr>
      <td>Humedad de operación</td>
      <td>10% a 95% HR (sin condensación)</td>
    </tr>
    </table>
</div>

## Dispositivos compatibles

Toda la Serie reComputer

- Toda la Serie reComputer

## Instalación del controlador

Es posible que el módulo RTL8852BE sea detectado por el Jetson como un dispositivo PCIe pero que su controlador no se cargue automáticamente. Deberás instalar el controlador manualmente según tu versión de JetPack.

```bash
lspci | grep -i network
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/lspci.PNG"/>
</div>



### JetPack 5.x

Para JetPack 5, utiliza el controlador [lwfinger/rtw8852be](https://github.com/lwfinger/rtw8852be):

```bash
git clone https://github.com/lwfinger/rtw8852be.git
cd rtw8852be/
sudo apt-get update
sudo apt-get install make gcc linux-headers-$(uname -r) build-essential git
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp5_install.png"/>
</div>

```bash
make
sudo make install
sudo modprobe 8852be
```

### JetPack 6.x

Para JetPack 6, utiliza el controlador [rtw89](https://github.com/a5a5aa555oo/rtw89):

```bash
git clone https://github.com/a5a5aa555oo/rtw89
cd rtw89
```

Edita el `Makefile` para establecer la ruta correcta de los encabezados del kernel:

```diff
# JP 6.2
KDIR ?= /usr/src/linux-headers-5.15.148-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/

# JP 6.0
KDIR ?= /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/makefile.png"/>
</div>

Luego compila e instala:

```bash
make
sudo make install
sudo modprobe rtw89_8852be
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp6_install.png"/>
</div>
## Verificar el módulo inalámbrico
:::info
El nombre de la interfaz puede variar según la versión de JetPack:

- JetPack 5: normalmente `wlan0`
- JetPack 6: puede aparecer como `wlP1p1s0`

Ajusta el nombre de la interfaz en los siguientes comandos según corresponda. Usa el siguiente comando para averiguarlo:
```bash
ifconfig
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/interface.png"/>
</div>

:::

## Configurar la red inalámbrica

### Escanear redes WiFi cercanas

```bash
sudo iw dev wlan0 scan | grep -E "SSID|freq"
```

Sustituye `wlan0` por el nombre real de tu interfaz si es diferente.

### Conectarse a una red WiFi

```bash
sudo nmcli device wifi connect "YOUR_SSID" password "YOUR_PASSWORD" ifname wlan0
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/link_wifi.PNG"/>
</div>

### Verificar la conexión WiFi 6

Comprueba el estado actual del enlace:

```bash
iw dev wlan0 link
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/veryfiy_wifi6.PNG"/>
</div>

La salida mostrará información como:

- **freq**: La frecuencia de operación (por ejemplo, 5180 MHz corresponde a la banda de 5 GHz)
- **HE-MCS**: El esquema de modulación y codificación Wi‑Fi 6 (por ejemplo, MCS 9 representa la mayor eficiencia de codificación)
- **TX/RX rate**: Las velocidades actuales de transmisión y recepción

## Configuración de Bluetooth

La funcionalidad Bluetooth del módulo RTL8852BE se puede configurar usando `bluetoothctl`:

```bash
bluetoothctl
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/bluetooth.png"/>
</div>
## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
