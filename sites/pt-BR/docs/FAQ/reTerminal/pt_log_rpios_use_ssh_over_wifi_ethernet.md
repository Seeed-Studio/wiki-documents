---
description: reTerminal-FAQ
title: Fazer login no Raspberry Pi OS/ Ubuntu OS ou outro SO usando SSH via Wi‑Fi/ Ethernet
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /log_rpios_use_ssh_over_wifi_ethernet
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/log_rpios_use_ssh_over_wifi_ethernet/
---

<!-- Fazer login no Raspberry Pi OS/ Ubuntu OS ou outro SO usando SSH via Wi-Fi/ Ethernet -->

Se você deseja fazer login no Raspberry Pi OS usando **SSH via Wi‑Fi/ Ethernet**, pode seguir as etapas abaixo. Primeiro configure o Wi‑Fi/Ethernet no reTerminal e depois use SSH a partir do Windows/Mac/Linux.

## Etapa 1: Configurar Wi‑Fi/Ethernet no reTerminal

:::caution
Se você configurou o WiFi e habilitou o SSH usando o Raspberry Pi Imager, pode pular a etapa 1
:::

- **1.** Se você **tem uma conexão Wi‑Fi**, clique no **ícone de Wi‑Fi** no canto superior direito da Área de Trabalho do Raspberry Pi OS, selecione sua rede Wi‑Fi e insira a senha usando o teclado virtual na tela

**Nota:** A localização da configuração de Wi‑Fi pode ser diferente em outros SO

- **2.** Se você **não tem uma conexão Wi‑Fi**, pode conectar um cabo ethernet do seu roteador à porta ethernet do reTerminal

**Nota:** Certifique‑se de que o reTerminal e o seu computador estejam conectados à mesma rede

- **3.** Toque no ícone do Raspberry Pi no canto superior esquerdo, navegue até `Preferences > Raspberry Pi Configuration` e clique na aba **Interfaces**

- **4.** Selecione **Enable** que está ao lado de **SSH** e clique em **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

Agora vamos configurar o software no computador. Siga de acordo com o seu sistema operacional

## Etapa 2: Configurar SSH usando Windows/Mac/Linux

### Para Windows

- **1.** Abra o **Command Prompt** e digite o seguinte

```sh
ssh pi@raspberrypi.local
```

- **2.** Digite **yes** quando for solicitado

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **3.** Insira a senha da seguinte forma

```sh
raspberry
```

- **4.** Se você fez login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

### Para Mac/Linux

- **1.** Abra o **Terminal** no computador e digite o seguinte

```sh
ssh pi@raspberrypi.local
```

- **2.** Digite **yes** para a seguinte mensagem

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **3.** Quando for solicitada a senha, digite o seguinte

```sh
raspberry
```

- **4.** Se você fez login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>
