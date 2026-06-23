---
description: Desmontar la carcasa del reComputer Mini J501 e instalar o reemplazar un módulo Wi‑Fi en la ranura M.2 Key E
title: Instalación del módulo WiFi en reComputer Mini J501
keywords:
  - reComputer Mini
  - J501
  - WiFi
  - SSD
  - NVMe
  - M.2 Key E
  - M.2 Key M
  - AGX Orin
  - Jetson AGX Orin
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_mini_j501_wifi_module_installation
last_update:
  date: 06/17/2026
  author: HaoChen
sku: 100042928, 114993556, 100020039
createdAt: '2026-06-15'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/es/recomputer_mini_j501_wifi_module_installation/
---

## Introducción

En este documento, aprenderás cómo desmontar el **reComputer Mini J501** e instalar o reemplazar un **módulo Wi‑Fi** (M.2 Key E).

La ranura Wi‑Fi se encuentra en la parte inferior de la **placa carrier reComputer Mini J501**. La **placa de expansión trasera** cubre la ranura **M.2 Key E** y debe retirarse para el servicio de Wi‑Fi. La **placa de expansión superior** tiene recortes que dejan expuestos los tornillos de montaje de la placa carrier, por lo que no es necesario retirarla durante el servicio. Los mismos pasos de desmontaje mediante la extracción de la placa carrier también se aplican al reemplazar la **SSD NVMe** (M.2 Key M): la placa de expansión trasera no cubre esa ranura.

:::warning
Apaga el dispositivo y desconecta todos los cables (incluidos la entrada de CC y el Ethernet) antes de desmontarlo. Utiliza un manejo seguro frente a ESD al tocar la placa carrier y los módulos M.2.
:::

## reComputer Mini (J501)

El **reComputer Mini J501** utiliza la **placa carrier Robotics J501 Mini** con módulos **NVIDIA Jetson AGX Orin** (32GB/64GB), ofreciendo hasta **275 TOPS** de rendimiento de IA en una carcasa industrial compacta. La placa carrier proporciona Ethernet dual, USB 3.2, DisplayPort y ranuras de expansión M.2, incluida **M.2 Key E** para Wi‑Fi/BT.

<div align="center">
  <img width ="600" alt="reComputer Mini J501 carrier board for Jetson AGX Orin" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_08.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span>
    </strong>
  </a>
</div>
<br />

Para especificaciones del dispositivo, flasheo de JetPack y uso de interfaces, consulta [Robotics J501 Mini carrier board Hardware and Getting Started](https://wiki.seeedstudio.com/es/recomputer_j501_mini_getting_started/).

## Módulo Wi‑Fi

Recomendamos utilizar un módulo Realtek M.2 Key E Wi‑Fi/BT que sea compatible con Jetson (por ejemplo, RTL8852BE).

<div align="center">
  <img width ="600" alt="Realtek M.2 Key E WiFi and Bluetooth module for Jetson" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_07.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span>
    </strong>
  </a>
</div>

## Conexión de hardware

:::info
Esta guía se centra en la instalación del **módulo Wi‑Fi**. Para reemplazar la **SSD NVMe**, sigue solo los Pasos 2–3 y omite el Paso 4 (retirada de la placa de expansión trasera).
:::

**Paso 1.** Prepara todos los materiales que se utilizarán.

- Carcasa reComputer Mini J501 (apagada)
- Módulo Wi‑Fi/BT M.2 Key E compatible
- Cable(s) de antena IPEX (normalmente incluidos con el módulo Wi‑Fi)
- Destornillador Phillips

### Desmontar la carcasa del J501

**Paso 2.** Retira la tapa superior de la carcasa.

<div align="center"><img width ="800" alt="reComputer Mini J501 with top enclosure cover removed" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_01.png?v=2"/></div>

**Paso 3.** Retira la placa carrier principal.

Retira los **cuatro tornillos de montaje de las esquinas** de la placa carrier (marcados en rojo abajo).

<div align="center"><img width ="800" alt="Four corner mounting screws on the J501 carrier board marked in red" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_02.png"/></div>

- Levanta con cuidado la placa carrier y sáquela del chasis.
- Coloca la placa sobre una superficie limpia y no conductora.

<div align="center"><img width ="800" alt="J501 carrier board removed from the chassis and placed on a work surface" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_03.png"/></div>

**Paso 4.** Retira la placa de expansión **trasera** *(solo para instalación de Wi‑Fi)*.

Gira la placa carrier de modo que la **parte inferior** quede hacia arriba. Una **placa de expansión trasera** está unida a la parte posterior mediante conectores placa a placa y bloquea el acceso a la ranura **M.2 Key E**. Omite este paso si solo estás reemplazando la SSD NVMe en la ranura **M.2 Key M**.

<div align="center"><img width ="800" alt="J501 carrier board flipped over with rear expansion board still attached via board-to-board connectors" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_04.png"/></div>

- Tira suavemente de la placa de expansión trasera alejándola de los conectores de la placa carrier.
- Deja la placa de expansión trasera a un lado.

La ranura **M.2 Key E** (WiFi/BT) ahora está accesible. Los pasos siguientes cubren la instalación del módulo Wi‑Fi.

<div align="center"><img width ="800" alt="M.2 Key E WiFi slot behind the rear expansion board area and M.2 Key M NVMe SSD slot accessible on the back of the J501 carrier board" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_05.png"/></div>

### Instalar el módulo Wi‑Fi

**Paso 5.** Inserta el módulo inalámbrico en el puerto **M.2 Key E** con el ángulo correcto (normalmente 30°), luego presiónalo hacia abajo y fíjalo con el tornillo de montaje.

**Paso 6.** Conecta el **cable (o cables) de antena IPEX** al módulo. Encamina los cables lejos de blindajes metálicos y orificios de tornillos para que no queden atrapados durante el reensamblaje.

<div align="center">
  <img width ="1000" alt="WiFi module installed in M.2 Key E slot with IPEX antenna cable connected on the J501 carrier board" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_06.png"/>
</div>

### Volver a montar la carcasa del J501

**Paso 7.** Vuelve a montar el dispositivo en orden inverso:

1. Si la retiraste, vuelve a acoplar la placa de expansión trasera a la parte posterior de la placa carrier.
2. Coloca la placa carrier de nuevo en el chasis y aprieta los cuatro tornillos de las esquinas.
3. Vuelve a colocar la tapa superior de la carcasa.

## Configuración de software (instalación del controlador)

Si estás utilizando un módulo **RTL8852BE**, sigue:

- [RTL8852BE Wireless Module for Jetson](https://wiki.seeedstudio.com/es/rtl8852be_wireless_module_for_jetson/)

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
