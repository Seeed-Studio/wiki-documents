---
description: Como instalar o Home Assistant no reTerminal
title: Primeiros Passos com Home Assistant
image: https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4
slug: /reTerminal_Home_Assistant
sku: E23010426,E24121301,E2025081502,E2025081503
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2022-11-30'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant/
---

# Primeiros passos com Home Assistant no reTerminal

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/94.jpg" /></center>

## Introdução

Este wiki irá guiá-lo passo a passo sobre como você pode transformar sua casa comum em uma casa inteligente usando apenas um reTerminal! Ao final deste wiki, você poderá visualizar um belo painel no LCD do reTerminal e será capaz de controlar seus eletrodomésticos e visualizar outras informações, como dados de sensores, bem na ponta dos dedos. Então, vamos começar!

## O que é Home Assistant?

[Home Assistant](https://www.home-assistant.io) é um software gratuito e de código aberto para automação residencial, projetado para ser um sistema de controle central para dispositivos de casa inteligente, que pode ser referido como um hub de casa inteligente. Ele oferece automação residencial sem necessidade da nuvem, o que significa que seu sistema de automação residencial não depende de servidores remotos ou de uma conexão com a internet. Esse controle local significa que você pode ter uma segurança muito melhor do que com dispositivos conectados à nuvem. Além disso, oferece maior confiabilidade quando se trata de mantê-lo em funcionamento 24x7.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></center>

É flexível de usar e muito fácil de começar, mesmo para iniciantes, graças à ótima documentação oferecida pelo Home Assistant. Além disso, há uma comunidade ativa no [Home Assistant Forum](https://community.home-assistant.io) com muitos membros que estarão lá para ajudá-lo se você encontrar quaisquer problemas ao criar e executar o Home Assistant.
Depois de configurar o Home Assistant, ele pode ser acessado por meio de uma interface de usuário baseada na web usando aplicativos complementares para Android e iOS, ou por comandos de voz por meio de um assistente virtual compatível, como Google Assistant ou Amazon Alexa.
Se você quiser experimentar rapidamente uma demonstração no seu navegador da web, por favor [clique aqui](https://demo.home-assistant.io).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></center>

## Diferentes métodos de instalação

Home Assistant é compatível para ser executado em diferentes hardwares, como um Raspberry Pi, ODROID, ASUS Tinkerboard, Intel NUC, PCs com Windows/ Linux/ Mac. E com isso, vêm diferentes métodos de instalação em diferentes hardwares. Para saber mais sobre todos esses métodos de instalação, visite [esta página](https://www.home-assistant.io/installation).
Como você pode ver abaixo, existem 4 principais tipos de métodos de instalação e nem todos os recursos do Home Assistant são suportados por todos os métodos de instalação.

<center><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></center>

## Método de instalação para reTerminal

De acordo com o Home Assistant, os dois métodos recomendados de instalação do Home Assistant são **OS e método Container**. No entanto, não usaremos esses 2 métodos para instalar no reTerminal. Por que isso?

### Por que não Home Assistant Operating System?

Se instalarmos o Home Assistant Operating System no reTerminal, não poderemos visualizar a interface do painel do Home Assistant no LCD do reTerminal. Isso porque o Home Assistant OS apenas exibirá uma interface de CLI em qualquer tela conectada, como abaixo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/5.png" /></center>

Assim, a interface do painel só pode ser acessada via **homeassistant.local:8123** em outro dispositivo. No entanto, se você quiser instalar dessa forma e não quiser visualizar o painel no LCD do reTerminal, você pode seguir [este guia](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system). Ele segue os mesmos métodos de instalação de um Raspberry Pi porque o reTerminal é baseado no Raspberry Pi Compute Module 4.

### Por que não Home Assistant Container?

Se instalarmos o Home Assistant Container no reTerminal, perderemos vários recursos do Home Assistant. Portanto, vamos pular essa instalação. No entanto, se você quiser explorar esse método de instalação, pode seguir [este guia](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container). Ele segue os mesmos métodos de instalação de um Raspberry Pi porque o reTerminal é baseado no Raspberry Pi Compute Module 4.

### Por que Home Assistant Supervised?

Se instalarmos o Home Assistant Supervised no reTerminal, poderemos usar todos os recursos do Home Assistant e também visualizar a interface do painel no LCD do reTerminal! Porém, a instalação disso envolverá mais etapas em comparação com os métodos OS e Container. No entanto, se você seguir cuidadosamente este wiki, conseguirá realizar isso com sucesso!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Method 1" label="Bullseye">

## Vamos construir isso

:::note
Em algumas etapas, se você estiver conectado via Wi-Fi, poderá perder a conexão. É recomendável usar uma conexão LAN em vez disso.

:::

Agora vamos passar pelo processo de instalação do Home Assistant Supervised no reTerminal.

- **Passo 1.** Prepare um reTerminal com Raspberry Pi OS já instalado. O reTerminal vem com o RPi OS 32-bit pré-instalado. No entanto, se você quiser instalá-lo novamente, siga [este wiki](https://wiki.seeedstudio.com/pt-br/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

**Nota:** Certifique-se de usar a versão de 32 bits porque a interface do painel do Home Assistant no LCD do reTerminal será muito mais fluida na versão de 32 bits.

- **Passo 2.** Atualize a lista do gerenciador de pacotes

```sh
sudo apt update
```

- **Passo 3.** Instale as dependências

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **Passo 4.** Corrija instalações quebradas

```sh
sudo apt --fix-broken install
```

- **Passo 5.** Reinicie o reTerminal

```sh
sudo reboot
```

- **Passo 6.** Baixe o script oficial do Docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
```

- **Passo 7.** Execute o script do Docker

```sh
sudo sh get-docker.sh
```

- **Passo 8.** Adicione o usuário do Docker ao sistema

```sh
sudo usermod -aG docker pi
```

- **Passo 9.** Verifique se o Docker está funcionando corretamente

```sh
docker --version
```

Se você vir uma saída como abaixo, isso significa que o Docker está instalado corretamente

```
Docker version 20.10.18, build b40c2f6
```

:::note

A compatibilidade do Home Assistant Supervisor depende de um Docker CGroup v1 específico. Para garantir essa compatibilidade, as seguintes alterações precisam ser feitas:

:::

- **Abra este arquivo usando um editor**

```sh
sudo nano /etc/default/grub
```

- **Adicione esta linha e salve.**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **Abra este arquivo**

```sh
sudo nano /boot/cmdline.txt
```

- **Adicione esta linha ao final da frase e salve.**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

- **Passo 10.** Visite a [página do Home Assistant OS Agent](https://github.com/home-assistant/os-agent/releases), sob a versão mais recente, clique com o botão direito no arquivo que termina com ***linux_armv7.deb** e copie o link

:::note
A versão estável e testada que funciona para o Home Assistant Agent até agora para o reTerminal(CM4) é a V1.3.0.
:::

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/4.jpg" /></center>

- **Passo 11.** Baixe o arquivo digitando no seguinte formato

```sh
wget <copied_link>
```

Por exemplo:

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_armv7.deb
```

- **Passo 12.** Instale o Home Assistant OS Agent

```sh
sudo dpkg -i os-agent_<version_number>_linux_armv7.deb
```

Por exemplo:

```sh
sudo dpkg -i os-agent_1.3.0_linux_armv7.deb
```

- **Passo 13.** Baixe o script de instalação do Home Assistant-Supervised

:::note
Da mesma forma, a versão estável e testada que funciona para o Home Assistant-Supervised até agora para o reTerminal(CM4) também é a V1.3.0.
:::

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

- **Passo 14.** Instale o Home Assistant-Supervised

```sh
sudo dpkg -i homeassistant-supervised.deb
```

- **Passo 15.** Se houver quaisquer erros na instalação, execute o comando abaixo para corrigir instalações quebradas

```sh
sudo apt --fix-broken install
```

- **Passo 16.** Na janela **Package configuration**, selecione **raspberrypi4** e pressione **ENTER**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/6.png" /></center>

A saída será a seguinte

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/7.png" /></center>

:::note

Se você encontrar problemas de conectividade Wi-Fi após reiniciar, siga estas etapas

:::

- Para habilitar o 'dhcpcd', execute o seguinte comando:

```sh
sudo systemctl enable dhcpcd
```

- Desabilite o serviço de rede com o comando:

```sh
sudo systemctl disable networking
```

- Reinicie o Raspberry Pi para aplicar as alterações:

```sh
sudo reboot
```

:::note

Para resolver os "Network Manager issues",(encontre em settings) você pode corrigir a situação iniciando e, em seguida, habilitando o Network Manager. Utilize o seguinte comando para fazer isso:

:::

```sh
sudo systemctl enable NetworkManager
```

## Visualizar a interface do painel do Home Assistant no navegador

- **Passo 1.** Em um navegador da web, digite o seguinte URL

```sh
homeassistant.local:8123
```

Levará algum tempo para finalizar o processo de inicialização inicial

- **Passo 2.** Quando terminar a inicialização, crie uma conta e siga as instruções de configuração inicial

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></center>

Depois disso, você verá seu painel de boas-vindas como a seguir

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></center>

## Visualizar a interface do painel do Home Assistant em modo Kiosk no reTerminal

Para poder visualizar a interface do painel do Home Assistant no LCD do reTerminal, usaremos o navegador web Chromium, que já vem com o Raspberry Pi OS. Vamos configurar o Chromium para que ele inicie automaticamente em modo de tela cheia após a inicialização do reTerminal.

- **Passo 1.** Navegue até o seguinte diretório

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **Passo 2.** Abra o arquivo **autostart** com o **editor de texto nano**

```sh
sudo nano autostart
```

- **Passo 3.** Adicione a seguinte linha ao final do arquivo

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **Passo 4.** Reinicie o reTerminal

```sh
sudo reboot 
```

Agora, quando o reTerminal inicializar, a interface do painel do Home Assistant será aberta em uma janela em tela cheia!

## Bônus

Após integrar lâmpadas inteligentes, sensores de temperatura e umidade, CFTV e mais, um painel completo de Casa Inteligente no Home Assistant ficará como abaixo

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></center>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>
<br />

</TabItem>

<TabItem value="Method 2" label="Bookworm">

:::note
Durante o processo de instalação do HA, testamos usando conectividade sem fio.
:::

## Instalação Supervisionada do Home Assistant - Bookworm

#### Passo 1: Atualizar e instalar dependências

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### Passo 2: Iniciar e ativar o Network Manager

Verifique o status do Network Manager

```bash
sudo systemctl status NetworkManager.service
```

Se o NetworkManager não iniciar, inicie e ative

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### Passo 3: Modificar parâmetros de boot

Edite o arquivo `cmdline.txt`:

```bash
sudo nano /boot/firmware/cmdline.txt
```

Adicione o seguinte ao final da linha:

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

Reinicie o sistema:

```bash
sudo reboot
```

#### Passo 4: Instalar o Docker

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### Passo 5: Instalar o OS Agent

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### Passo 6: Instalar o Home Assistant Supervisionado

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

Após a correção bem-sucedida, aparecerá uma tela azul, permitindo que você selecione o modelo **Raspberry Pi4 64**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

Depois de alguns minutos, a instalação começará.

Você poderá então visualizar a interface do painel do Home Assistant em um navegador da web usando `<your_reTerminal_ip>:8123`.

Levará algum tempo para concluir o processo inicial de inicialização. Depois que a inicialização for concluída, crie uma conta e siga as instruções de configuração inicial

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
Se houver avisos nas notificações, reinicie o reTerminal.
:::

</TabItem>

</Tabs>

## Suporte Técnico

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
