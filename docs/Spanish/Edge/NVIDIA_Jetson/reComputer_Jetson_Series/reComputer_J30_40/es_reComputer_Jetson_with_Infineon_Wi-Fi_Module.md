---
description: Utiliza el módulo Wi-Fi de Infineon en una reComputer
title: Utiliza el módulo Wi-Fi de Infineon en una reComputer
keywords:
- reComputer
- Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 01/10/2024
  author: Youjiang
---

## Introducción

En este documento, aprenderás cómo utilizar el módulo Wi-Fi 6/6E de Infineon con la reComputer J4012.

## reComputer

La reComputer J4012 está potenciada por la Jetson Orin NX de 16 GB, una placa de desarrollo inteligente, potente y compacta para llevar hasta 100 TOPS de rendimiento de IA moderna al borde, que ofrece hasta 5 veces el rendimiento de Jetson Xavier NX y hasta 3 veces el rendimiento de Jetson AGX Xavier. Combinando la arquitectura de GPU NVIDIA Ampere™ con capacidad operativa de 64 bits, Orin NX integra procesamiento avanzado de imágenes y vídeo multifunción y aceleradores de aprendizaje profundo NVIDIA.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## Módulo Wi-Fi Infineon

La solución Wi-Fi de Infineon admite funciones Wi-Fi 6/6E y tiene capacidad tribanda (2,4G, 5G, 6G). Sus características mejoran el alcance, la eficiencia energética, la solidez de la red y la seguridad, al tiempo que reducen el costo total de la lista de materiales y el espacio en la placa. La solución ofrece una transmisión de video/audio de alta calidad excepcional y una experiencia de conectividad perfecta en entornos de red congestionados y reduce significativamente la latencia al operar en el espectro 6G.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">(Imagen de Embedded Artists: el módulo 2EA M.2, desarrollado conjuntamente por Embedded Artists y Murata, está diseñado para evaluación, integración y facilidad de uso).</div>


## Conexión de Hardware
**Step 1.** Prepara todos los materiales que se utilizarán:
- reComputer J4012 con Jetpack 5.1.2 instalado
- Módulo Wi-Fi Infineon
- 2 x Adaptador de antena externa IPEX a SMA hembra y antena SMA macho para módulo WIFI
- Destornillador y tornillos

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**Paso 2.** Inserta el módulo inalámbrico en el puerto M.2 Key E. E inserta 2 enchufes IPEX en las tomas correspondientes del módulo inalámbrico.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## Instala el controlador del software

**Paso 1.** Descarga y carga el [controlador WiFi](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQzCwQWQOwhNhhW-VHhKqogBYhan7liy9UY44QE4vhq95A?e=qq0ANC) de Infineon a la reComputer.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**Paso 2.** Ejecuta el siguiente comando para ejecutar el controlador WiFi de Infineon.

Para Jetpack 5.1.x:

```sh
sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

Para Jetpack 6:

```sh
sudo rm /lib/modules/5.15.136-tegra/build

sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build

sudo dpkg -i cyw55573-nvidia-jetson-v5.15.58-backports-2.0-1-arm64.deb
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/install_driver.png"/></div>

El controlador tarda un poco en compilarse.

Luego, necesitas reiniciar la reComptuer:

```sh
sudo reboot
```

**Paso 3.** Utiliza el siguiente comando para comprobar si la interfaz wlan0 está disponible:

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>

:::Precaución
  Si instalaste los controladores inalámbricos Intel a través de `sudo apt-get install iwlwifi-modules -y` anteriormente, debes desinstalar este paquete antes de continuar. Existe un problema conocido con las compatibilidades de backport.

  Tanto el controlador inalámbrico de Intel como el de Infineon utilizaron el módulo de compatibilidad de backport, no puedes instalarlos todos; de lo contrario, el kernel generará un error de compat: exports duplicate symbol backport dependency symbol (owned by iwlwifi compat)`.

  Al desinstalar los controladores inalámbricos de Intel, puedes utilizar el controlador inalámbrico de Infineon:

  ```sh
  sudo apt-get remove backport-iwlwifi-dkms
  ```
  Al desinstalar el controlador inalámbrico de Infineon, puedes utilizar los controladores inalámbricos de Intel:
  ```sh
  sudo dpkg -r cyw55573-nvidia-jetson-v5.15.58-backports
  ```

:::

**Paso 4.** Conéctate a la red Wi-Fi

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## Pruebas de viabilidad
Utiliza el navegador para abrir una página web y comprobar si la red funciona correctamente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>