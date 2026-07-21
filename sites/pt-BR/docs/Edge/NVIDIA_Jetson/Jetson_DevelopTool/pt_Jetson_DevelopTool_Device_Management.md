---
description: Use o módulo Device Management no Seeed Jetson DevelopTool para executar diagnósticos, detectar periféricos e monitorar o status do dispositivo em tempo real.
title: Device Management
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - gerenciamento de dispositivo
  - diagnósticos
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_device_management
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/pt-br/jetson_developtool_device_management/
---

O módulo **Device Management** fornece um painel rápido para entender o estado atual do seu dispositivo Jetson conectado — diagnósticos de hardware, detecção de periféricos e métricas do sistema em tempo real — tudo isso sem abrir um terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-devices.png" style={{width:800, height:'auto'}}/></div>

## Conectando a um dispositivo

Insira o endereço IP do Jetson, o nome de usuário SSH e a senha no painel de conexão e clique em **Connect**. Consulte [Connect Device](/pt-br/jetson_developtool_connect_device) para detalhes de configuração de rede.

## Recursos

### Informações do sistema

Depois de conectado, o painel exibe:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-info-cards.png" style={{width:800, height:'auto'}}/></div>

| Info | Descrição |
|------|-------------|
| Modelo do dispositivo | por exemplo, reComputer Super J4012s |
| Versão do JetPack / L4T | Versão atual do firmware |
| Uso de CPU | Utilização por núcleo em tempo real |
| Uso de GPU | Percentual de carga atual da GPU |
| Memória | RAM usada / total |
| Disco | Armazenamento usado / total |
| Temperatura | Zonas térmicas da CPU, GPU e placa |

### Detecção de periféricos

Clique em **Detect Peripherals** para verificar o hardware conectado:

- Dispositivos USB (câmeras, adaptadores Wi-Fi, armazenamento)
- Unidades NVMe / M.2
- Saídas de vídeo
- Interfaces GPIO / I2C / SPI

### Diagnósticos rápidos

Clique em **Run All Checks** para executar uma verificação de integridade com um clique. A ferramenta verifica automaticamente Rede, GPU / Torch, Docker, jtop, câmera USB, disco de boot e outros componentes principais, exibindo cada resultado em linha com um status de aprovado / reprovado e atalhos para correções rápidas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-diagnostics-full.png" style={{width:800, height:'auto'}}/></div>

### Detecção de periféricos

Clique em **Peripherals Only** para verificar o hardware conectado — USB-WiFi, módulo 5G, Bluetooth, SSD NVMe, câmeras e monitor HDMI — sem executar o conjunto completo de diagnósticos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-peripherals.png" style={{width:800, height:'auto'}}/></div>

### Instalar PyTorch

Se a verificação **GPU / Torch** mostrar "Not installed", clique no botão **Install PyTorch** para abrir o assistente de instalação. A ferramenta detecta automaticamente a sua versão do JetPack e seleciona o wheel NVIDIA PyTorch correspondente. Você também pode escolher o ambiente de destino do Python (Python do sistema ou um novo ambiente conda Miniforge).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-install-pytorch.png" style={{width:600, height:'auto'}}/></div>

Clique em **Start Install** para começar. A instalação é executada em segundo plano — clique em **Run in Background** para continuar usando a ferramenta enquanto ela é concluída.

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
