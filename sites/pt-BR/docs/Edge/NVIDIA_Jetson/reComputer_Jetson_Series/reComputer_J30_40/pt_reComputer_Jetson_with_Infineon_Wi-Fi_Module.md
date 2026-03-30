---
description: Use Infineon Wi-Fi Module on reComputer
title: Use Infineon Wi-Fi Module on reComputer
keywords:
  - reComputer
  - Wifi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Use_Infineon_Wifi_Module_on_reComputer
last_update:
  date: 01/10/2024
  author: Youjiang
createdAt: '2024-01-10'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Use_Infineon_Wifi_Module_on_reComputer/
---

## Introdução 

Neste documento, você aprenderá como usar o módulo Wi‑Fi 6/6E da Infineon no reComputer J4012.

## reComputer

O reComputer J4012 é construído com Jetson Orin NX 16GB, uma poderosa e compacta caixa de borda inteligente que traz até 100 TOPS de desempenho de IA moderna para a borda, oferecendo até 5 vezes o desempenho do Jetson Xavier NX e até 3 vezes o desempenho do Jetson AGX Xavier. Combinando a arquitetura de GPU NVIDIA Ampere™ com capacidade operacional de 64 bits, o Orin NX integra processamento avançado de vídeo e imagem multifuncional, e aceleradores de Deep Learning da NVIDIA.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>


## Módulo Wi‑Fi Infineon

A solução Wi‑Fi da Infineon suporta recursos Wi‑Fi 6/6E, é compatível com três bandas (2.4G, 5G, 6G). Seus recursos melhoram o alcance, a eficiência de energia, a robustez da rede e a segurança, ao mesmo tempo em que reduzem o custo total da lista de materiais (Bill of Materials) e o espaço na placa. A solução oferece uma experiência excepcional de streaming de vídeo/áudio de alta qualidade e conectividade contínua em ambientes de rede congestionados e reduz significativamente a latência ao operar no espectro de 6G.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/wifi_module.png"/></div>

<div align="center">(Imagem da Embedded Artists: O módulo 2EA M.2, desenvolvido em conjunto pela Embedded Artists e Murata, é projetado para avaliação, integração e facilidade de uso.)</div>


## Conexão de hardware
**Passo 1.** Prepare todos os materiais que serão utilizados.
- reComputer J4012 equipado com Jetpack 5.1.2
- Módulo Wi‑Fi Infineon
- 2 x adaptadores de antena externa IPEX para SMA fêmea e antena SMA macho para o módulo WIFI
- Chave de fenda Phillips e parafusos

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware.jpg"/></div>

**Passo 2.** Insira o módulo sem fio na porta M.2 Key E. E conecte 2 plugs IPEX nos soquetes correspondentes do módulo sem fio.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/hardware_connection.jpg"/></div>

## Instalar o driver de software

**Passo 1.** Baixe e envie o [driver WiFi](https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQzCwQWQOwhNhhW-VHhKqogBYhan7liy9UY44QE4vhq95A?e=qq0ANC) da Infineon para o reComputer.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/download_package.png"/></div>

**Passo 2.** Execute o seguinte comando para executar o driver WiFi da Infineon.

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

Leva algum tempo para o driver ser compilado.

Em seguida, você precisa reiniciar o reComputer:

```sh
sudo reboot
```

**Passo 3.** Use o seguinte comando para verificar se a interface wlan0 está disponível:

```sh
ifconfig
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/ifconfig.png"/></div>

:::caution
  Se você instalou os drivers sem fio da Intel via `sudo apt-get install iwlwifi-modules -y` anteriormente, você precisa desinstalar este pacote antes de continuar. Há um problema conhecido com compatibilidades de backport. 

  Tanto o driver sem fio da Intel quanto o da Infineon usam o módulo compat de backport, você não pode instalar todos eles, caso contrário o kernel exibirá um erro de `compat: exports duplicate symbol backport dependency symbol (owned by iwlwifi compat)`.

  Ao desinstalar os drivers sem fio da Intel, você pode usar o driver sem fio da Infineon:

  ```sh
  sudo apt-get remove backport-iwlwifi-dkms
  ```
  Ao desinstalar o driver sem fio da Infineon, você pode usar os drivers sem fio da Intel:
  ```sh
  sudo dpkg -r cyw55573-nvidia-jetson-v5.15.58-backports
  ```

:::

**Passo 4.** Conecte‑se à rede Wi‑Fi

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/></div>


## Teste de viabilidade
Use o navegador para abrir uma página da web e testar se a rede está funcionando corretamente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/test.png"/></div>

## Suporte Técnico

Não hesite em enviar problemas em nosso [fórum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>