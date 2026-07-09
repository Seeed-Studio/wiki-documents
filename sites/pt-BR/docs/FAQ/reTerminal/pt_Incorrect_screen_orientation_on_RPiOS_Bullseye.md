---
description: reTerminal-FAQ
title: A orientação da tela está incorreta após instalar o Raspberry Pi OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Incorrect_screen_orientation_on_RPiOS_Bullseye
last_update:
  date: 11/24/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Incorrect_screen_orientation_on_RPiOS_Bullseye/
---

<!-- Q11: The screen orientation is incorrect after installing Raspberry Pi OS Bullseye -->
### Raspberry Pi OS Bullseye

Se você notar uma orientação de tela incorreta após instalar o **Raspberry Pi OS Bullseye**, faça o seguinte:

- **Passo 1.** Depois de gravar o **Raspberry Pi OS Bullseye** na eMMC do reTerminal, siga [este guia](https://wiki.seeedstudio.com/pt-br/reTerminal/#instalar-drivers-do-reterminal-apos-gravar-novo-raspberry-pi-os-ubuntu-os-ou-outro-os) para instalar os drivers necessários

- **Passo 2.** Crie um novo arquivo chamado **monitors.xml** no diretório **.config**

```sh
sudo vi ~/.config/monitors.xml
```

- **Passo 3.** Copie o seguinte conteúdo para o arquivo acima para definir explicitamente o display LCD (DSI-1) e salve o arquivo digitando **:wq** após pressionar **ESC**

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **Passo 4.** Abra **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Passo 5.** Adicione o seguinte no arquivo

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **Passo 6.** Reinicie o reTerminal

```sh
sudo reboot
```

Agora a tela será exibida na orientação correta no Raspberry Pi OS Bullseye!

### Raspberry Pi OS Bookworm

Se você notar uma orientação de tela incorreta após instalar o **Raspberry Pi OS Bookworm**, faça o seguinte:

- **Passo 1.** Depois de gravar o **Raspberry Pi OS Bookworm** na eMMC do reTerminal, siga [este guia](https://wiki.seeedstudio.com/pt-br/reTerminal/#instalar-drivers-do-reterminal-apos-gravar-novo-raspberry-pi-os-ubuntu-os-ou-outro-os) para instalar os drivers necessários


Se você configurou um usuário diferente de root e a imagem Bookworm de 24 de julho, descobri que era necessário fazer:
```sh
sudo chown $USER ~/.config
sudo chgrp $USER ~/.config
sudo chmod u+rwx ~/.config
```

- **Passo 2.** Abra .config/wayfire.ini

```sh
sudo vi ~/.config/wayfire.ini
```

- **Passo 3.** Copie o seguinte conteúdo para o arquivo acima para definir explicitamente o display LCD (DSI-1) e salve o arquivo digitando **:wq** após pressionar **ESC**

```sh
[output:DSI-1]
mode = 720x1280@60
transform = 270
```


- **Passo 4.** Abra **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Passo 5.** Adicione o seguinte no arquivo

```sh
dtoverlay=reTerminal
```

- **Passo 6.** Reinicie o reTerminal

```sh
sudo reboot
```

Agora a tela será exibida na orientação correta no Raspberry Pi OS Bookworm!
