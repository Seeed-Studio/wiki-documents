---
description: Faça o deploy de modelo de IA com Lumeo em dispositivos NVIDIA Jetson
title: Primeiros Passos com Lumeo
tags:
  - Deploy de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Lumeo-Jetson-Getting-Started
sku: 110110144,110110146,110110184,110110185,110110186,110110187
last_update:
  date: 03/10/2023
  author: Lakshantha
createdAt: '2023-03-10'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Lumeo-Jetson-Getting-Started/
---

# Primeiros Passos com Lumeo em Dispositivos NVIDIA® Jetson

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com) é uma plataforma de análise de vídeo sem código que permite projetar, implantar e monitorar rapidamente análises de vídeo personalizadas e outras aplicações habilitadas por visão com IA.

Este wiki irá mostrar passo a passo como você pode instalar facilmente o Lumeo na plataforma NVIDIA Jetson e configurá-lo como um gateway, para que você possa executar pipelines e processar vídeo a partir de Streams, câmeras IP na mesma rede ou câmeras USB conectadas.

## Hardware suportado

Lumeo é suportado pelas seguintes plataformas:

- NVIDIA Jetson
- Servidor x86 com GPU Nvidia
- Instância com GPU na AWS, GCP, Azure, etc.

No entanto, neste wiki vamos nos concentrar apenas em como fazer o deploy do Lumeo na plataforma NVIDIA Jetson

## Pré-requisitos

- Dispositivo NVIDIA Jetson executando NVIDIA JetPack com todos os componentes do SDK instalados e conectado à internet

  - Testamos este wiki com o [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) executando o [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- PC host com Windows, Linux ou Mac e conectado à internet

## Crie uma Conta Lumeo

**Passo 1:** Visite [esta página](https://console.lumeo.com/register), insira email, senha, clique na caixa de seleção para concordar com os termos e clique em **Sign up**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**Passo 2:** Depois de criar uma nova conta, você pode entrar na sua conta com o email e a senha criados anteriormente acessando [esta página](https://console.lumeo.com/login)

**Passo 3:** Digite um **nome de organização** e **nome de workspace** e clique em **Start using Lumeo**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

Agora você verá o console Lumeo como a seguir

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## Instalar Lumeo Gateway no NVIDIA Jetson

**Passo 1:** Execute o script de instalação dentro do dispositivo Jetson

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

Responda aos prompts no script de instalação de acordo com suas necessidades. Você pode manter tudo no padrão aqui

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

Se você vir a saída abaixo, isso significa que o instalador foi concluído com sucesso

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>

**Passo 2:** Digite **Install** ao lado do prompt **Enter the command:** para instalar um novo contêiner que inclui o gateway

```
Enter the command: 
install
```

**Nota:** Uma conta gratuita do Lumeo permite apenas que um gateway seja implantado. Portanto, você primeiro precisa excluir o gateway em nuvem padrão que vem com o Lumeo antes de implantar o seu próprio gateway no dispositivo Jetson. Simplesmente entre no gateway em nuvem pré-carregado e clique em **Delete** para excluir esse gateway.

**Passo 3:** Digite um nome para o contêiner quando solicitado e faça login com as credenciais da sua conta Lumeo quando solicitado

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**Passo 4:** Após a conclusão da instalação do contêiner, digite **list** para listar o contêiner que você acabou de instalar

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**Passo 5:** Digite **exit** para sair do script em execução

Agora você instalou com sucesso o Lumeo Gateway no NVIDIA Jetson. Se você for ao console Lumeo e navegar até **Gateways**, verá o gateway recém-implantado alimentado por Jetson.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**Passo 3:** Clique no Gateway para ver informações adicionais sobre o gateway

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## Adicionar câmeras ao gateway

Agora vamos adicionar câmeras ao gateway que já configuramos no dispositivo Jetson

**Passo 1:** Conecte uma câmera USB a uma das portas USB do dispositivo Jetson ou conecte uma câmera ONVIF à mesma rede do dispositivo Jetson

**Passo 2:** No Gateway que configuramos antes, clique em **Add Camera**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**Passo 3:** Ele tentará descobrir automaticamente todas as câmeras USB conectadas e as câmeras ONVIF na mesma rede. Clique em **Link** ao lado de uma câmera para adicioná-la ao gateway

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

Se nenhuma das câmeras conectadas for detectada, clique em Discover para iniciar novamente o processo de detecção automática. Se isso também falhar, clique em **+ Manually add cameras** e configure todas as suas câmeras

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**Passo 4:** Digite um **nome de câmera**, forneça as credenciais da câmera se forem necessárias pela câmera e, por fim, clique em **Connect camera**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

Agora você verá a câmera vinculada com sucesso

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**Passo 5:** Clique na câmera vinculada para gerar uma imagem de pré-visualização como a seguir

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**Passo 6:** Se você quiser adicionar streams RTSP ou HTTP, pode navegar até **Deploy > Streams**, clicar em **Add input stream** e configurar o stream

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## Criar um pipeline de detecção de pessoas

Lumeo oferece muitas soluções diferentes prontas para uso com pipelines pré-configurados e modelos pré-carregados. Vamos tentar criar uma aplicação simples de detecção de pessoas usando o Lumeo.

**Passo 1:** Selecione **Basics - Detect Objects** dentro da seção **Design > Solutions**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

Agora você verá o modelo criado para você em um estilo baseado em blocos que permite adicionar mais personalizações e recursos à solução. Aqui você pode adicionar, modificar ou remover blocos de acordo com sua preferência

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**Passo 2:** Este modelo por padrão carrega um modelo de **detecção de pessoas**, rastreia os objetos, codifica o vídeo e transmite via WebRTC. Manteremos todos os blocos configurados como padrão e clicaremos em **Deploy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**Passo 3:** Em **Select Gateway**, escolha o gateway que você implantou no Jetson, selecione a câmera que você configurou anteriormente e clique em **Deploy** para começar a implantar a aplicação no dispositivo Jetson

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

Se o deploy for bem-sucedido, você verá um ícone verde chamado **running** como a seguir

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**Passo 4:** Clique no **botão de play** para visualizar o stream de saída via WebRTC

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## Saiba mais

Lumeo oferece documentação muito detalhada e abrangente. Portanto, é altamente recomendável consultá-la [aqui](https://docs.lumeo.com).

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
