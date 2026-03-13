---
description: reTerminal-FAQ
title: Como instalar o Ubuntu no reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install-ubuntu-on-reterminal
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/install-ubuntu-on-reterminal/
---

<!-- Q10: How can I install Ubuntu on reTerminal? -->

Se você quiser instalar o Ubuntu no reTerminal, siga os passos abaixo, um por um:

- **Passo 1.** Grave o [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) no armazenamento eMMC do reTerminal

:::note
Consulte as instruções de gravação [aqui](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). Depois de abrir o **Raspberry Pi Imager**, vá para `CHOOSE OS > Use custom` e selecione a imagem acima para gravar
:::

- **Passo 2.** Acesse o reTerminal via SSH e execute os seguintes comandos um após o outro. Certifique-se de usar **ubuntu** como nome de usuário e **ubuntu** como senha

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **Passo 3.** Agora, o reTerminal iniciará no Ubuntu Desktop, mas na orientação errada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 4.** Clique no **ícone de energia** no canto superior direito e clique em **Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **Passo 5.** Selecione **Displays** e escolha **Portrait Left** em **Orientation** e clique em **Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

Por fim, você verá o Ubuntu Desktop na orientação correta!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>
