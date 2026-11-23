---
description: Esta FAQ explica como atualizar o software do Jetson sem substituir os drivers da carrier board da Seeed e como reparar o JetPack 5.1.3 ou JetPack 6.2 após uma atualização incorreta do nvidia-l4t.
title: Atualizar pacotes de software para Jetson
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade_software_packages_for_jetson
last_update:
  date: 10/16/2026
  author: Youjiang/Dayu
createdAt: '2025-02-11'
updatedAt: '2026-10-16'
url: https://wiki.seeedstudio.com/pt-br/upgrade_software_packages_for_jetson/
---

#### Como posso atualizar pacotes de software se vocês disseram que não posso executar apt upgrade? Haverá riscos de segurança se eu não atualizar o software?

R: Não execute `sudo apt upgrade` ou `sudo apt full-upgrade` em uma imagem Jetson da Seeed. Uma atualização normal de aplicativo está ok, mas uma atualização NVIDIA não supervisionada pode substituir o kernel, a árvore de dispositivo e os pacotes de driver `nvidia-l4t` da Seeed por pacotes padrão da NVIDIA. O dispositivo pode então deixar de inicializar ou os periféricos da carrier board podem parar de funcionar.

Para pacotes de aplicativos que não dependem de `nvidia-l4t`, instale apenas o pacote de que você precisa:

```bash
sudo apt update
sudo apt-get install <your-package>
```

Para a maioria dos softwares de código aberto, outra opção segura é baixar o código-fonte e compilá-lo você mesmo. Uma imagem completa de BSP da Seeed ou JetPack ainda é a forma preferida de atualizar o kernel, o bootloader e os drivers da carrier board em conjunto.

## Reparar uma atualização incorreta de nvidia-l4t

Pacotes de reparo estão disponíveis para as duas versões do JetPack que ainda não contêm a proteção de apt:

| JetPack | Jetson Linux | Pacote de reparo |
| --- | --- | --- |
| JetPack 5.1.3 | R35.5.0 | [seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBHzK-usznrT72e9lsjdzvnAZf8tB1ohV93_-vjlazshYQ?e=ljS4tL) |
| JetPack 6.2 | R36.4.3 | [seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCTqH9GsRQWSI-PhfPuJeycAR_oaUGvZc7jBTgcMMWS-fc?e=jV1YJF) |

O JetPack 7 e firmwares posteriores da Seeed já mantêm o kernel e os pacotes de driver da NVIDIA, portanto o `apt` não pode substituí-los por engano. Não há pacote de reparo para essas versões. Se um sistema com JetPack 7 ou posterior já estiver danificado, reflashe a imagem correspondente da Seeed.

:::caution
Execute o reparo no próprio Jetson e use apenas o pacote que corresponde a `cat /etc/nv_tegra_release`. O script restaura os pacotes de kernel e driver da Seeed. Ele não instala o pacote de bootloader a menos que você adicione explicitamente `--with-bootloader`.
:::

### JetPack 5.1.3 / L4T R35.5.0

Confirme a versão primeiro:

```bash
cat /etc/nv_tegra_release
```

A primeira linha deve conter `R35 (release), REVISION: 5`. Baixe `seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip`, copie-o para o Jetson e execute:

```bash
unzip -o seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip
cd seeed-jetson-linux-r35.5.0-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

Adicione `--with-bootloader` somente quando o próprio bootloader precisar ser reparado. Após a reinicialização, verifique os pacotes restaurados:

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-display-kernel
cat /etc/nv_boot_control.conf
dpkg --audit
```

Os quatro pacotes devem estar instalados ou retidos, e suas versões devem conter `+seeed1`. `dpkg --audit` não deve imprimir nada. O log de reparo é `/var/log/seeed-linux-bsp-r35.5.0-repair.log`.

### JetPack 6.2 / L4T R36.4.3

Confirme a versão primeiro:

```bash
cat /etc/nv_tegra_release
```

A saída deve conter `R36` e `REVISION: 4.3`. Baixe `seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip`, copie-o para o Jetson e execute:

```bash
unzip -o seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip
cd seeed-jetson-linux-r36.4.3-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

Se o script não conseguir identificar a carrier board, pare e execute-o novamente com o nome do produto Seeed:

```bash
sudo ./seeed-linux-bsp-repair.sh --board recomputer-orin-super-j401
```

Substitua `recomputer-orin-super-j401` pelo nome da carrier board ou produto Seeed que está sendo reparado. Use `--auto` somente quando o nome da placa detectada já estiver correto e o comando precisar ser executado sem interação. Adicione `--with-bootloader` apenas quando o reparo de firmware for necessário. O pacote de reparo R36.4.3 não contém um capsule de bootloader para Orin Super, portanto verifique o módulo e o firmware antes de usar essa opção em hardware Orin Super.

Após a reinicialização, verifique:

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-kernel-oot-modules nvidia-l4t-display-kernel
uname -r
dpkg --audit
```

As versões dos pacotes devem conter `+seeed1`, e `uname -r` deve informar `5.15.148-tegra`. O log de reparo é `/var/log/seeed-linux-bsp-r36.4.3-repair.log`, e o backup do script é `/opt/nvidia/l4t-packages/seeed-r36.4.3-repair-backup`.


## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
