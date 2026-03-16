---
description: Aprenda como configurar e ajustar o Home Assistant em um reComputer R1000
title: reComputer R1000 com Home Assistant
keywords:
  - Home Assistant
  - reComputer R1000
  - Automação Residencial
  - Bookworm
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_home_automation
last_update:
  date: 08/02/2024
  author: Kasun Thushara
createdAt: '2024-08-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_home_automation/
---

## Introdução

O reComputer r1000, projetado para Sistemas de Automação Predial, possui vários canais RS485 isolados que suportam comunicação em alta e baixa velocidade. Ele é compatível com os protocolos BACnet, Modbus RTU e Modbus TCP/IP, tornando-o versátil para diversas necessidades de automação. Este guia fornece uma introdução concisa à instalação do Home Assistant no reComputer r1000, permitindo a integração e o controle perfeitos dos seus dispositivos de casa inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png" style={{width:400}}/></div>

[Home Assistant](https://www.home-assistant.io/) é um software gratuito e de código aberto para automação residencial, servindo como um sistema de controle central ou hub de casa inteligente para vários dispositivos. Projetado com foco no controle local, ele garante que o seu Sistema de Gerenciamento Predial (BMS) opere de forma independente de servidores remotos ou conexões à internet, aumentando a segurança e a confiabilidade. Isso significa que o seu BMS pode funcionar 24/7 sem as vulnerabilidades associadas a dispositivos conectados à nuvem, oferecendo uma solução de automação robusta e segura.

## Primeiros Passos

Antes de iniciar este projeto, talvez seja necessário preparar o hardware com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

:::note
Durante o processo de instalação do HA, testamos usando conectividade sem fio.
:::

### Preparação de Software

O reComputer vem com a versão Bookworm 64 bits pré-instalada. Este guia aborda as etapas para **instalar o Home Assistant Supervised** nesse sistema.

## Por que Home Assistant Supervised?

Existem alguns métodos para instalar o Home Assistant no seu reComputer. Você pode optar por uma instalação completa do Home Assistant ou, se planeja executar o Home Assistant juntamente com outros aplicativos sobre o seu sistema operacional, o método supervised é o ideal. Outra opção é usar Docker, mas isso exige a configuração de contêineres Docker separados como complementos. Este guia se concentra no processo de instalação mais complexo do **método Supervised**. Não se preocupe — vamos guiá‑lo passo a passo.

## Instalação do Home Assistant Supervised - Bookworm

#### Etapa 1: Atualizar e instalar dependências

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### Etapa 2: Iniciar e habilitar o Network Manager

Verifique o status do Network Manager

```bash
sudo systemctl status NetworkManager.service
```

Se o NetworkManager não iniciar, inicie e habilite

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### Etapa 3: Modificar parâmetros de boot

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

#### Etapa 4: Instalar o Docker

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### Etapa 5: Instalar o OS Agent

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### Etapa 6: Instalar o Home Assistant Supervised

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

Após a correção bem-sucedida, aparecerá uma tela azul, permitindo que você selecione o modelo **Raspberry Pi4 64**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

Após alguns minutos, a instalação começará.

Em seguida, você poderá visualizar a interface do painel do Home Assistant em um navegador da web usando `<your_recomputer_ip>:8123`.

Levará algum tempo para concluir o processo de inicialização inicial. Quando a inicialização for concluída, crie uma conta e siga as instruções de configuração inicial

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
Se houver avisos nas notificações, reinicie o reComputer.
:::

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
