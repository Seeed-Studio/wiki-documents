---
description: Primeiros passos com reCamera HQ POE
title: Guia de Início Rápido
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_getting_started
sku: 100018917, 100041077, 100029708, 100074316
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
createdAt: '2023-02-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recamera_hq_poe_getting_started/
---
# Guia de Introdução ao reCamera HQ POE

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## Introdução

Bem-vindo ao reCamera HQ POE! O reCamera 2002 HQ PoE é equipado com um sensor CMOS avançado para imagens mais nítidas e claras. Ele possui uma montagem de lente M12 — flexível para substituir a lente padrão por qualquer lente M12 2MP compatível. Também suporta PoE (Power over Ethernet): não é necessária alimentação separada USB/DC, apenas um cabo Ethernet para um switch PoE para energia e dados.

Este guia ajudará você a configurar rapidamente seu dispositivo e começar a usá-lo para desbloquear poderosos recursos de Visão com IA. Seja você iniciante ou usuário experiente, este passo a passo o guiará pela instalação, configuração e primeiro uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱</font></span></strong>
    </a>
</div>
## Desembalagem

Comece desembalando o seu reCamera HQ POE. Dentro da caixa, você deverá encontrar:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/6-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

- reCamera HQ POE.
- Manual do usuário (dentro da caixa)
- USB Type C ([Purchase lini](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Cabo Ethernet

### Configurar o dispositivo e fazer login

**Passo 1:** Conecte o cabo USB do reCamera HQ POE ao seu PC. Acesse `192.168.42.1` no navegador e altere a senha padrão. Se você estiver usando Ethernet POE, acesse consultando o endereço IP atribuído no seu roteador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
Lembre-se da sua senha, caso contrário todos os logs serão apagados para redefinir o dispositivo. Se você esquecer a senha, por favor faça o [reset de fábrica](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#factory-reset) do dispositivo.
:::

:::note
O nome de usuário e a senha padrão são ambos `recamera`. Se você executar um reset de fábrica ou estiver usando um dispositivo novo (não configurado), estes são o nome de usuário e senha a serem usados.
:::

**Passo 2:** Conecte o cabo USB do reCamera ao seu PC, então você poderá acessar **192.168.42.1** para visualizar a página de carregamento do reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Se você quiser usar a porta Ethernet, pode conectar o cabo de dados incluído ao seu roteador. O dispositivo pode ser alimentado usando apenas **PoE (Power over Ethernet)**. Você pode desparafusar a parte de trás da câmera e conectar pela porta.

Após a conexão, você pode encontrar o **endereço IP do reCamera** no painel de administração do seu roteador e então acessar a **interface web** e a **plataforma Node-RED**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

**Passo 3:** Você será levado ao painel de visualização do reCamera HQ POE, onde poderá usar os controles do painel para experimentar alguns dos recursos do reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-1.png" /></div>

## Acesso Web Básico

URLs web:

- Página de Pré-visualização: ip_address/#/dashboard
- Página Inicial: ip_address/#/init
- Espaço de Trabalho: ip_address/#/workspace
- Configuração de Rede: ip_address/#/network
- Segurança: ip_address/#/security
- Terminal: ip_address/#/terminal
- Sistema: ip_address/#/system
- Energia: ip_address/#/power
- Node-RED Original: ip_address:1880

### Início Rápido com o Painel do reCamera HQ POE

**Passo 1:** Acesse a página web via **192.168.42.1**, e você entrará na **interface de pré-visualização ao vivo**.

**Passo 2:** Você pode ajustar o limite de ``IoU`` e ``Confidence`` para obter um resultado mais preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

#### Parâmetros do Modelo de IA

**Confidence**: A confiança no modelo YOLO representa a probabilidade de que uma caixa delimitadora prevista contenha um objeto e quão precisa é a previsão. É um valor entre 0 e 100.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoU é uma métrica usada para avaliar a sobreposição entre a caixa delimitadora prevista e a caixa delimitadora real (ground truth). É calculada como a razão entre a área de interseção das duas caixas e a área de união das duas caixas. O valor de IoU normalmente está na faixa de 0 a 1. Nós o padronizamos para uma escala de 0 a 100; um valor de IoU de 0 representa nenhuma sobreposição entre a caixa prevista e a caixa real. Um valor de 100 indica uma correspondência perfeita, significando que as duas caixas se sobrepõem completamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### Início rápido com o Fluxo do Painel do reCamera HQ POE

Se você quiser saber como o painel é feito com nós do Node-RED, clique no canto inferior direito ou visite `ip_address/#/workspace` para acessar o workspace Node-RED do Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-2.png" /></div>

Então você verá o fluxo de painel padrão do gimbal, você pode dar um clique duplo em cada nó para ver os detalhes do nó. O fluxo do painel será assim:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-3.png" /></div>

**Configurações do Modelo**:

- Nós de controle deslizante permitem ajustar o IoU (Intersection over Union) e o limite de confiança para o modelo de IA YOLO.

**Exibição da Interface do Painel**:

- O nó de modelo de interface (UI template) exibe texto mostrando as configurações atuais do modelo.
- Ele também renderiza a imagem em base64 da câmera, incluindo caixas de detecção para objetos identificados pelo YOLO.

**Subfluxo Básico de Web Iframe**:

- Um subfluxo de iframe exibe páginas web básicas como configurações de rede, informações do sistema e informações do dispositivo.
- Observe que isso pode consumir recursos de CPU, pois renderiza a página com múltiplos nós. Pode ser excluído se não for necessário.

## Aplicar gerenciamento em nuvem e backup

Se você quiser criar um novo aplicativo ou salvar aplicativos no serviço em nuvem SenseCraft, pode fazer login na conta sensecraft no canto inferior esquerdo e depois clicar no ícone de sinal + para adicionar um novo aplicativo. Em seguida, você pode começar a trabalhar no seu fluxo.

Se você quiser criar um novo aplicativo ou salvar aplicativos no serviço em nuvem SenseCraft, pode fazer login na conta sensecraft no canto inferior esquerdo e depois clicar no ícone `+` para adicionar um novo aplicativo. Em seguida, você pode começar a trabalhar no seu fluxo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

Você pode visualizar e gerenciar seus apps em [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

Você precisa registrar uma conta antes de poder fazer login pela plataforma para sincronizar seus aplicativos.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## Lista de Portas

A seguir são listadas as portas usadas pelo reCamera Gimbal:

- **Porta 22**: Utilizada para login remoto por SSH e está fechada.
- **Porta 53**: Associada à resolução de nomes de domínio DNS e é essencial para redirecionamento web. Ela é aberta por padrão.
- **Porta 80**: Serve como interface de painel web para exibição HTTP da aplicação Node-RED.
- **Porta 554**: Empregada para streaming de vídeo RTSP.
- **Porta 9090**: Destinada ao acesso ao terminal web, que requer uma senha para login.
- **Porta 1880**: Dedicada às operações do Node-RED.

## Atualização de SO via OTA

Por favor, consulte as [Instruções de Atualização OTA](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

## Reset de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-4.jpg" /></div>

Se você quiser redefinir o dispositivo, por exemplo, por ter esquecido o código de acesso do dispositivo, pode manter pressionado o botão **User** e então conectar o dispositivo à alimentação. Quando a `luz vermelha` do dispositivo estiver **constantemente acesa** em vez de piscando, solte o botão User.

## Recursos

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
