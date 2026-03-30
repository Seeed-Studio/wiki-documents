---
description: Este guia ajudará você a configurar e ajustar as conexões de rede para o seu SenseCAP Watcher Agent
title: Guia de Configuração de Rede do Dispositivo
sidebar_position: 2
keywords:
  - SenseCAP
  - Watcher Agent
  - Configuração de Rede
  - Configuração de IoT
  - Configuração de WiFi
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /device_network_setup
sku: 100051523
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip:
    - zh-CN
createdAt: '2025-05-07'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/device_network_setup/
---

# Guia de Configuração de Rede do Dispositivo

Este documento irá guiá-lo através do processo de configuração de rede para o seu SenseCAP Watcher Agent. Siga estas etapas para conectar facilmente o seu dispositivo à rede e começar a usá-lo.

O vídeo a seguir serve como um tutorial passo a passo sobre como configurar o seu dispositivo usando o Painel de Controle Web.
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Pré-requisitos

Antes de iniciar a configuração, certifique-se de que você tenha o seguinte:

- SenseCAP Watcher com firmware Agent instalado
- Rede Wi-Fi de 2,4 GHz disponível (exceto redes que exigem autenticação secundária, por exemplo, redes corporativas)
- Dispositivo móvel ou computador para configuração

## Etapas de Configuração de Rede

### Configuração Inicial

Etapa 1. Ligue o seu dispositivo
- Conecte o dispositivo a uma fonte de alimentação ou mantenha pressionado o botão da roda de rolagem no canto superior direito por 5 segundos e depois solte.
:::tip Nota
Se a configuração iniciar imediatamente após gravar o firmware, use um clipe ou pino para pressionar suavemente o botão de reset.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:200, height:'auto'}}/></div>
:::
- O dispositivo será ligado e entrará no modo de configuração de Wi-Fi



### Configuração de WiFi

Etapa 1. Conectar ao Hotspot do Dispositivo
- No seu dispositivo móvel ou computador, procure por uma rede WiFi chamada "Watcher-XXXX"
- Conecte-se a essa rede
- Aguarde alguns segundos para que a conexão seja estabelecida
- Uma interface de configuração deve abrir automaticamente no seu navegador
:::note
Se a página de configuração não abrir automaticamente, verifique se você ainda está conectado à rede "Watcher-XXXX" e navegue manualmente para `http://192.168.4.1` no navegador.
:::

Etapa 2. Configurar Conexão WiFi
- Aguarde aproximadamente 5 segundos para que a varredura de WiFi seja concluída
- Na lista de redes de 2,4 GHz disponíveis, selecione a sua rede Wi-Fi doméstica
- O SSID será preenchido automaticamente
- Digite a senha da rede WiFi selecionada
- Clique no botão "Connect" para enviar

:::note
Somente redes de 2,4 GHz são suportadas
Se estiver usando um hotspot de iPhone, ative a opção "Maximum Compatibility"
A página de varredura de WiFi pode levar cerca de 5 segundos para carregar - por favor, não feche nem cancele a página
:::

Etapa 3. Concluir o Processo de Conexão
- Se as credenciais de WiFi estiverem corretas, o dispositivo será conectado automaticamente
- Um ícone de marca de seleção verde aparecerá, indicando que a configuração de rede foi concluída com sucesso
- O dispositivo será reiniciado automaticamente após 3 segundos
- Após reiniciar, o dispositivo se conectará automaticamente à rede WiFi configurada

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20done.jpeg" style={{width:500, height:'auto'}}/></div> 


### Registro do Dispositivo

Etapa 1. O dispositivo exibe um código de verificação
- Ouça/Veja o código de verificação de 6 dígitos
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

Etapa 2. Registrar Dispositivo
- Acesse a [plataforma SenseCraft AI-Watcher Agent](https://sensecraft.seeed.cc/ai/watcher-agent)
- Configure seu Agent de acordo com este [WiKi](https://wiki.seeedstudio.com/pt-br/watcher_web_control_panel/)

### Operações Básicas

1. Ligar
   - Mantenha pressionada a roda de rolagem por 3–5 segundos e depois solte

2. Desligar
   - Desconecte a fonte de alimentação
   - Mantenha pressionada a roda de rolagem por 3 segundos e depois solte

3. Reiniciar
   - Use um clipe ou pino para pressionar suavemente o botão de reset

4. Restaurar Padrões de Fábrica
   - Mantenha pressionada a roda de rolagem por 10 segundos

5. Reentrar no Modo de Configuração de Rede
   - Quando o dispositivo exibir o estado "Scanning Wi-Fi"
   - Pressione a roda de rolagem uma vez
   - O dispositivo voltará ao modo de configuração de rede

## Solução de Problemas

Se você encontrar problemas de conexão:

1. Problemas Comuns
   - Verifique novamente o nome e a senha da rede Wi-Fi
   - Certifique-se de que está se conectando a uma rede de 2,4 GHz


## FAQ

**P: Por que não consigo encontrar a rede Watcher-XXXX?**

R: Tente usar um clipe ou pino para pressionar suavemente o botão de reset novamente para reiniciar o dispositivo e entrar no modo de configuração.
Se você já tiver pareado com uma rede anteriormente, reinicie o dispositivo e pressione a roda de rolagem uma vez enquanto o dispositivo estiver exibindo "Scanning Wi-Fi" para reentrar no modo de pareamento

**P: O que devo fazer se a página de configuração não carregar automaticamente?**

R: Acesse manualmente `http://192.168.4.1` no navegador enquanto estiver conectado à rede Watcher-XXXX.

**P: Como acessar outras redes Wi-Fi?**

R: Quando "Scanning Wi-Fi" for exibido na inicialização, pressione a roda de rolagem para entrar no modo de configuração de wifi. A rede wifi configurada será salva.

## Suporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>