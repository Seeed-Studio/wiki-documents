---
description: Conectando à rede e possíveis soluções de problemas
title: FAQs
keywords:
  - Edge
  - reCamera
  - network
  - network troubleshoot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recamera_network_connection
sidebar_position: 6
last_update:
  date: 04/08/2025
  author: Parker Hu
createdAt: '2024-09-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recamera_network_connection/
---

# Perguntas Frequentes

Se você encontrar uma situação em que o dispositivo conectado via USB não reconhece a reCamera durante a configuração de rede da reCamera, bem como o problema de falha na conexão de rede após configurar a rede, consulte este artigo.

É necessário modificar e configurar o ambiente de rede do computador, incluindo instalar drivers no sistema Windows, consultar placas de rede no sistema Linux e configurar prioridades de rede no sistema Mac.

## Configurar o ambiente de trabalho

### Configuração de USB NET

Para usar rede via USB, habilitamos UsbNcm e DHCP por padrão no sistema.
UsbNcm é sem driver em Linux, macOS e nos sistemas Windows mais recentes. Você pode fazer login diretamente no terminal da reCamera usando `ssh recamera@192.168.42.1` ,`passwd = recamera` .

- [Windows](#jump1)
- [Linux](#jump2)
- [MacOS](#jump3)

### <span id="jump1"> Windows </span>

Certifique-se de que o driver Ncm esteja corretamente instalado no seu computador, como mostrado na imagem. Você pode verificar isso acessando: Gerenciador de Dispositivos -> Adaptadores de rede.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/002.png" /></div>

Se a sua máquina não tiver esse driver, siga as etapas abaixo para instalar o Ncm.

#### Instalar NCM para Windows

**passo1**:
Pressione `win+x` e selecione `Device Manager`.
Encontre o dispositivo não reconhecido em `other devices` e selecione `Update driver`.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/003.png" /></div>

**passo2**:
Selecione `Browse my computer for drivers`

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/004.png" /></div>

**passo3:**:
Selecione `Let me pick from a list of available drivers on my computer`  

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/005.png" /></div>

**passo4:**:
Selecione `Network adapters` e então clique em `next`

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/014.png" /></div>

**passo5**: Selecione `Microsoft` -> `UsbNcm Host Device` e depois clique em Next.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**passo6**: Quando a barra de alerta aparecer, selecione `Yes`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**passo7**: Digite ping 192.168.42.1 em uma janela de terminal.
<br />
A saída a seguir mostra que você conectou com sucesso à reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>

### <span id="jump2"> Linux </span>

Sem configuração extra, apenas conecte um cabo USB. Digite `ifconfig`, e você verá o adaptador de rede usb1. Por exemplo: 192.168.42.89. O IP do dispositivo é 192.168.42.1

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

Verifique o adaptador de rede usb em Configurações do Sistema -> Rede. O IP do dispositivo é 192.168.42.1

## Erro de rede do computador

### Windows

Se o seu computador com sistema Windows 10 tiver problemas de acesso à rede após usar a rede USB da reCamera.
Pressione `win+x` clique em Painel de Controle. Selecione Todos os Itens do Painel de Controle -> Conexões de Rede.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

Clique com o botão direito do mouse em UsbNcm Host Device. Selecione `Properties` -> `TCP/IPv4` -> `Properties` -> `Advanced` -> Desmarque `Automatic metric` -> Digite `255` no campo `Interface metric` -> clique em `ok`
<br />

Então sua rede voltará a funcionar.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

### MAC

Se o seu computador estiver executando MacOS, você só precisa definir a prioridade da placa de rede do computador deixando a placa de rede UsbNcm por último

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>

As configurações específicas são as seguintes:

**passo1**: Selecione `System Settings`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/015.png" /></div>

**passo2**: Você verá esta ordem, e nós vamos alterá-la.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/016.png" /></div>

**passo3**: Arraste até o final e clique nela.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/017.png" /></div>

**passo4**: Selecione `Set Service Order`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/018.png" /></div>

**passo5**: Arraste NCM para baixo de Wi-Fi e então clique em `ok`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/019.png" /></div>

**passo6**: Por fim, você deverá ver as configurações mostradas

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/020.png" /></div>

## Recursos

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera Série](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
