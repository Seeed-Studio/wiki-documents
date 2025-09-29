---
description: Usar el Módulo Wi-Fi de Infineon en reComputer
title: Usar el Módulo Wi-Fi de Infineon en reComputer
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

En este documento, aprenderás cómo usar el módulo Wi-Fi 6/6E de Infineon en reComputer J4012.

## reComputer

reComputer J4012 está construido con Jetson Orin NX 16GB, una caja inteligente de borde potente y compacta que aporta hasta 100 TOPS de rendimiento de IA moderna al borde, ofreciendo hasta 5 veces el rendimiento de Jetson Xavier NX y hasta 3 veces el rendimiento de Jetson AGX Xavier. Combinando la arquitectura GPU NVIDIA Ampere™ con capacidad operativa de 64 bits, Orin NX integra procesamiento avanzado de video e imagen multifunción, y Aceleradores de Aprendizaje Profundo de NVIDIA.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## Módulo Wi-Fi de Infineon

La solución Wi-Fi de Infineon soporta características Wi-Fi 6/6E, es capaz de tri-banda (2.4G, 5G, 6G). Sus características mejoran el alcance, la eficiencia energética, la robustez de la red y la seguridad, mientras reducen el costo total de la Lista de Materiales y el espacio de la placa. La solución ofrece una experiencia excepcional de transmisión de video/audio de alta calidad y conectividad sin interrupciones en entornos de red congestionados y reduce significativamente la latencia al operar en el espectro 6G.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">(Imagen de Embedded Artists: El módulo 2EA M.2, co-desarrollado por Embedded Artists y Murata, está diseñado para evaluación, integración y facilidad de uso.)</div>


## Conexión de hardware
**Paso 1.** Prepara todos los materiales que se utilizarán.
- reComputer J4012 equipado con Jetpack 5.1.2
- Módulo Wi-Fi de Infineon
- 2 x Adaptador de Antena Externa IPEX a SMA Hembra y Antena Macho SMA para Módulo WIFI
- Destornillador Phillips y tornillos

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**Paso 2.** Inserta el módulo inalámbrico en el puerto M.2 Key E. E inserta 2 conectores IPEX en los enchufes correspondientes del módulo inalámbrico.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## Instalar el controlador de software

**Paso 1.** Descarga y sube el [controlador WiFi](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQzCwQWQOwhNhhW-VHhKqogBYhan7liy9UY44QE4vhq95A?e=qq0ANC) de Infineon a reComputer.

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

Toma un tiempo para que el controlador se compile.

Luego, necesitas reiniciar el reComputer:

```sh
sudo reboot
```

**Paso 3.** Usa el siguiente comando para verificar si la interfaz wlan0 está disponible:

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>

:::caution
  Si instalaste previamente los controladores inalámbricos de Intel mediante `sudo apt-get install iwlwifi-modules -y`, necesitas desinstalar este paquete antes de proceder. Hay un problema conocido con las compatibilidades de backport.

  Tanto los controladores inalámbricos de Intel como de Infineon usan el módulo compat de backport, no puedes instalar todos ellos, de lo contrario el kernel generará un error de `compat: exports duplicate symbol backport dependency symbol (owned by iwlwifi compat)`.

  Al desinstalar los controladores inalámbricos de Intel, puedes usar el controlador inalámbrico de Infineon:

  ```sh
  sudo apt-get remove backport-iwlwifi-dkms
  ```
  Al desinstalar el controlador inalámbrico de Infineon, puedes usar los controladores inalámbricos de Intel:
  ```sh
  sudo dpkg -r cyw55573-nvidia-jetson-v5.15.58-backports
  ```

:::

**Paso 4.** Conectar a la red Wi-Fi

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## Prueba de viabilidad
Usa el navegador para abrir una página web y probar si la red está funcionando correctamente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## Soporte Técnico

Por favor no dudes en enviar problemas a nuestro [foro](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>