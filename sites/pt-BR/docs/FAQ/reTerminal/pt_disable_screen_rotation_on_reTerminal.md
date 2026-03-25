---
description: reTerminal-FAQ
title: Como desativar a rotação da tela no reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /disable_screen_rotation_on_reTerminal
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/disable_screen_rotation_on_reTerminal/
---

Se a sua tela for exibida corretamente, mas girar junto com o reTerminal, você pode desativar a rotação automática da tela removendo o acelerômetro, resultando em uma exibição estática em modo paisagem. <br/>
As etapas para desativar a rotação da tela estão descritas abaixo:

- **Passo 1** : Abra o terminal e navegue pelo caminho para localizar e abrir o **raspi-blacklist.conf**.

```
/etc/modprobe.d/raspi-blacklist.conf 
```

- **Passo 2** : Adicione a seguinte linha de código ao **raspi-blacklist.conf**.

```
blacklist lis331dlh_i2c
```

- **Passo 3** : Reinicie o reTerminal

```sh
sudo reboot
```

Seguindo esses passos, você terá uma exibição estática em modo paisagem!
