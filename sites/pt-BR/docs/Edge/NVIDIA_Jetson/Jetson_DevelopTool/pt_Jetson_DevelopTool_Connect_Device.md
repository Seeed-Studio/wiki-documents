---
description: Como conectar seu dispositivo Seeed Jetson ao PC host usando o Seeed Jetson DevelopTool via USB ou Ethernet.
title: Conectar dispositivo
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - connect device
  - SSH
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_connect_device
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/jetson_developtool_connect_device/
---

O Seeed Jetson DevelopTool se conecta ao seu dispositivo Jetson de duas maneiras, dependendo da tarefa:

| Tipo de conexão | Usado para |
|-----------------|------------|
| **USB (Modo de recuperação)** | Gravação de firmware via Flash Center |
| **Ethernet / SSH** | Gerenciamento de dispositivo, desenvolvimento remoto, App Market, Skills, compartilhamento de rede do PC |

## Conexão USB (Modo de recuperação)

O modo de recuperação é necessário para gravar o firmware. Para entrar no modo de recuperação:

1. Desligue o dispositivo Jetson.
2. Mantenha pressionado o botão **Recovery** no dispositivo.
3. Enquanto mantém o botão Recovery pressionado, conecte o cabo USB-C entre o dispositivo e o PC host (ou ligue o dispositivo).
4. Solte o botão Recovery após 2 segundos.

No DevelopTool, abra o **Flash Center** e clique em **Detect Device** para confirmar que a conexão USB foi reconhecida.

:::tip
No Linux, você pode verificar se o dispositivo aparece com:

```bash
lsusb | grep NVIDIA
```

Você deverá ver uma entrada como `NVIDIA Corp. APX`.
:::

:::caution
No Windows, o encaminhamento de USB via WSL2 requer a ferramenta `usbipd`. O uso de Linux nativo é recomendado para uma gravação confiável.
:::

## Conexão Ethernet / SSH

Para todos os recursos que não envolvem gravação de firmware, o DevelopTool se conecta ao Jetson via SSH por Ethernet (ou Wi-Fi, se configurado).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-device-connection.png" style={{width:800, height:'auto'}}/></div>

**Etapas:**

1. Conecte o Jetson e o PC host à mesma rede ou use um cabo Ethernet direto com o [PC Network Sharing](/pt-br/jetson_developtool_remote_development) habilitado.
2. No DevelopTool, abra a aba **Remote Dev**.
3. Insira o endereço IP do Jetson, o nome de usuário SSH e a senha no painel **Device Connection**.
4. Clique em **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-device-connection.png" style={{width:800, height:'auto'}}/></div>

Depois de conectado, o painel de status do dispositivo mostra informações em tempo real de CPU, GPU, memória e temperatura.

:::tip
Se você não souber o endereço IP do seu Jetson, use o assistente serial [Jetson Init](/pt-br/jetson_developtool_remote_development) na primeira inicialização para configurar a rede e exibir o IP atribuído.
:::

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
