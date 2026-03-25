---
description: Este wiki descreve passo a passo como usar ferramentas de desktop remoto VNC no reComputer Jetson.
title: Usando VNC no reComputer Jetson
tags:
  - Deploy de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /vnc_for_recomputer
last_update:
  date: 9/30/2024
  author: YaoHui Zhu
createdAt: '2024-09-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/vnc_for_recomputer/
---

# Como usar ferramentas de desktop remoto VNC no reComputer Nvidia Jetson

## Introdução

VNC é uma ferramenta de desktop remoto que permite controlar remotamente o seu reComputer Nvidia Jetson a partir de outros dispositivos de PC, com acesso em tempo real ao desktop gráfico. Este wiki descreve como instalar e usar VNC no reComputer Nvidia Jetson.

## Pré-requisitos

- Um dispositivo Jetson: adequado para [todos os dispositivos Nvidia da Seeed Stuido](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

- [Um Hdmi Dummy Plug](https://www.cytron.io/p-full-size-hdmi-dummy-plug-for-headless-setup).

:::note
Se você não quiser conectar um monitor, deve usar um **`HDMI Dummy Plug`** para habilitar o controle de desktop remoto.
:::

<div align="center">
    <img width={300}
     src="https://static.cytron.io/image/cache/catalog/products/CA-HDMI-DMP/HDMI%20USB%20(a)-800x800.png" />
</div>

## Primeiros Passos

### Instalar VNC

 **Passo 1.** Instale o VNC no Jetson:

 ```bash
  sudo apt update
  sudo apt install vino
 ```

 **Passo 2.** Habilite o servidor VNC para iniciar toda vez que você fizer login:

 ```bash
  cd /usr/lib/systemd/user/graphical-session.target.wants
  sudo ln -s ../vino-server.service ./.
 ```

 **Passo 3.** Configure o servidor VNC

 ```bash
  gsettings set org.gnome.Vino prompt-enabled false
  gsettings set org.gnome.Vino require-encryption false
 ```

 **Passo 4.** Defina uma senha para acessar o servidor VNC

 ```bash
 # Replace thepassword with your desired password
  gsettings set org.gnome.Vino authentication-methods "['vnc']"
  gsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)
 ```

 **Passo 5.** Edite `org.gnome` para adicionar um parâmetro para a `enabled key`

 ```bash
  cd /usr/share/glib-2.0/schemas
  sudo cp org.gnome.Vino.gschema.xml org.gnome.Vino.gschema.xml.old
  sudo vi org.gnome.Vino.gschema.xml 
 ```

Cole o código a seguir no local abaixo, garantindo que o formato seja o mesmo que o de baixo.

  ```bash
  <key name='enabled' type='b'>
        <summary>Enable remote access to the desktop</summary>
        <description>
                If true, allows remote access to the desktip via the RFB
                protocol. Users on remote machines may then connect to the
                desktop using a VNC viewer.
        </description>
        <default>false</default>
      </key>
  ```

<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig1.png" />
  </div>

### Compilar e iniciar

 Compilar:

 ```bash
  sudo glib-compile-schemas /usr/share/glib-2.0/schemas
  sudo reboot
 ```

 iniciar:

 ```bash
  /usr/lib/vino/vino-server
 ```

## Conectando ao serviço VNC a partir de outro computador

Você precisará saber o endereço IP do seu kit de desenvolvimento Jetson para se conectar a partir de outro computador. Execute o comando ifconfig no seu kit de desenvolvimento e anote o endereço IP atribuído à interface eth0 se estiver usando ethernet, à interface wlan0 se estiver usando conexão sem fio, ou à l4tbr0 se estiver usando a conexão Ethernet no modo de dispositivo USB. Em seguida, você precisa conectar um HDMI Dummy Plug ao Jetson.

- Windows:
  - Passo 1: Baixe e instale o VNC Viewer a partir [daqui](https://www.realvnc.com/en/connect/download/viewer/).
  - Passo 2: Inicie o VNC Viewer e digite o endereço IP do seu kit de desenvolvimento.
  - Passo 3: Se você tiver configurado o servidor VNC para autenticação, forneça a senha VNC.

- MacOS:
  - Passo 1. Abra o Finder e escolha Go | Go to Folder na barra de menu.
  - Passo 2: Digite “/System/Library/CoreServices/Applications” e clique em Go.
  - Passo 3: Abra o app chamado Screen Sharing e insira as informações de conexão. Por exemplo: username@.
  - Passo 4: Clique em connect.
  - Passo 5: Se você tiver configurado o servidor VNC para autenticação, forneça a senha VNC.

- Linux: O exemplo abaixo usa gvncviewer, porém qualquer um dos seus clientes VNC favoritos também deve funcionar. Uma alternativa popular é o remmina.
  - Passo 1. Instale o gvncviewer executando os seguintes comandos:

    ```bash
    sudo apt update
    sudo apt install gvncviewer
    ```

  - Passo 2: Inicie o gvncviewer.

      ```bash
    gvncviewer 
    ```

  - Passo 3: Se você tiver configurado o servidor VNC para autenticação, forneça a senha VNC.

## Habilitar o servidor VNC para iniciar toda vez que você fizer login

**Passo 1.** Pesquise por `Startup Application Preferences` no aplicativo.
<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig2.png" />
  </div>

**Passo 2.** Clique no botão `Add`, e você pode preencher os campos `Name` e `Comment` com qualquer texto. No campo `Command`, adicione a seguinte instrução:

```bash
nohup /usr/lib/vino/vino-server > /dev/null 2>&1 &
```

<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig3.png" />
  </div>

Clique em `Save` e reinicie o reComputer. Desconecte o monitor e conecte o **HDMI Dummy Plug** ao Jetson. Agora, você pode verificar através do VNC.

<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig4.png" />
  </div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
