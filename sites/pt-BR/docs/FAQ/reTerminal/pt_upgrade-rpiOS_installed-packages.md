---
description: reTerminal-FAQ
title: Como atualizar o Raspberry Pi OS e os pacotes instalados
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade-rpiOS_installed-packages
last_update:
  date: 6/21/2023
  author: cheng.tang
createdAt: '2023-06-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/upgrade-rpiOS_installed-packages/
---

<!-- ## Q3: How to upgrade Raspberry Pi OS and the installed packages -->

Vamos atualizar todos os pacotes e também o Raspberry Pi OS para a versão mais recente

### **Passo 1.** Abra uma janela de terminal no reTerminal e digite o seguinte

```sh
sudo apt update
sudo apt full-upgrade
```

### **Passo 2.** Reinstale os cabeçalhos do kernel

```sh
sudo apt install raspberrypi-kernel-headers
```

### **Passo 3.** Reinicie o reTerminal

```sh
sudo reboot
```

Agora o seu Raspberry Pi OS e todos os pacotes necessários estão atualizados!
