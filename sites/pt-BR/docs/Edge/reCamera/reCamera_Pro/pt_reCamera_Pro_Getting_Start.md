---
description: Este guia ajudará você a concluir a conexão de hardware, fazer login na interface Web do dispositivo, configurar a rede sem fio e solucionar falhas de conexão comuns.
title: Guia de Início Rápido do reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 
sidebar_position: 12
last_update:
  date: 06/01/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_getting_started/
---

# Guia de Início Rápido do reCamera Pro

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## Introdução

Bem-vindo ao **reCamera Pro**. Este guia ajudará você a concluir a conexão de hardware, fazer login na interface Web do dispositivo, configurar a rede sem fio e solucionar falhas de conexão comuns.

---

## 1. Conexão de Hardware

Antes de iniciar a configuração, certifique-se de que você preparou o seguinte hardware:
* **Cabo de dados**: Um cabo USB Type-C com capacidade de transmissão de dados (não use um cabo que ofereça apenas carregamento).
* **Fonte de alimentação**: Um cabo de alimentação DC (requisitos de especificação: **12V, 1A**, a fonte de alimentação padrão de fábrica é: 12V, 2A).

### Etapas de Conexão

1. Conforme mostrado na figura abaixo, conecte o cabo de alimentação DC de 12V na interface de alimentação do dispositivo, conecte uma extremidade do cabo USB Type-C ao reCamera Pro e conecte a outra extremidade ao seu computador host com Windows (Host PC).
2. Observe o indicador de status do dispositivo. Quando a **luz verde estiver acesa continuamente**, isso indica que o dispositivo foi inicializado com sucesso e entrou em estado de operação.

![Diagrama da luz de status do sistema e conexão dos cabos](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

---

## 2. Fazer Login na Interface Web de Gerenciamento do Dispositivo

O reCamera Pro possui um sistema de gerenciamento Web intuitivo integrado, permitindo que você o configure diretamente por meio de um navegador.

:::note Atenção
Antes de tentar fazer login na interface Web, certifique-se de que o cabo USB Type-C esteja corretamente conectado ao computador e que o dispositivo tenha concluído a inicialização.
:::

### Etapas de Operação

1. Abra um navegador no computador host (recomenda-se o navegador Chrome ou Edge).
2. Digite o endereço IP padrão na barra de endereços: `192.168.42.1` e pressione Enter.
3. Após entrar na interface de login, insira a senha de login do seu dispositivo.
4. Marque as duas opções de conformidade e lembrar abaixo do botão de login e clique em login para entrar na interface principal do sistema do reCamera Pro (por padrão, a página "Real-time Preview").

![Diagrama de login Web e interface principal](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip Solução de Problemas Comuns
Se a página não carregar após digitar `192.168.42.1` no sistema Windows, vá diretamente para a seção [4. Frequently Asked Questions and Troubleshooting (FAQ)](#4-frequently-asked-questions-and-troubleshootingfaq) no final deste documento para realizar uma verificação do adaptador de rede.
:::

---

## 3. Configuração da Rede Sem Fio (Wi-Fi)

Para permitir que o dispositivo acesse a Internet ou possibilitar o gerenciamento sem fio dentro da rede local, configure uma conexão Wi-Fi para ele.

### Etapas de Operação

1. Após fazer login com sucesso na interface Web principal, clique em **Device Info** na barra de navegação à esquerda.
2. No menu secundário ou na área de configuração à direita, clique em **Network Settings**.
3. Ative a função Wi-Fi (se estiver desativada por padrão), e o sistema irá escanear automaticamente as redes sem fio próximas.
4. Selecione o SSID do seu Wi-Fi na lista de redes disponíveis, insira a senha sem fio correta e clique em conectar.

![Diagrama das etapas de configuração da rede sem fio](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

### Conexão Remota Sem Fio (Etapa Opcional)

Após conectar-se com sucesso ao Wi-Fi, você pode clicar no nome do Wi-Fi conectado para visualizar suas informações detalhadas de rede (por exemplo, endereço IP atribuído, endereço MAC, etc.).

![Diagrama de visualização dos detalhes do Wi-Fi](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

:::tip Desconecte o Cabo Type-C para Gerenciamento Sem Fio
Depois de obter o IP da rede local atribuído pelo Wi-Fi (por exemplo, `192.168.4.200`), desde que o seu computador e o reCamera Pro estejam na mesma rede local, você pode digitar diretamente esse endereço IP (por exemplo, `http://192.168.4.200`) no navegador para fazer login no dispositivo.
Neste ponto, você pode **desconectar com segurança o cabo USB Type-C** para obter operação e gerenciamento totalmente sem fio.
:::

---

## 4. Frequently Asked Questions and Troubleshooting (FAQ)

### P1: O que devo fazer se eu não conseguir entrar na interface de login via 192.168.42.1 no sistema Windows?

Se você não conseguir abrir a interface Web após conectar o cabo Type-C, geralmente é porque a placa de rede virtual do sistema Windows não obteve corretamente um endereço IP. Siga estas etapas para solucionar o problema:

1. Abra o **Control Panel** no computador host com Windows.
2. Clique para entrar em **Network and Internet** -> **Network and Sharing Center** -> **Change adapter settings** em sequência.
3. Na lista pop-up de conexões de rede, encontre a placa de rede virtual com um nome semelhante a `Remote NDIS based Internet Sharing Device` ou relacionada ao reCamera (você pode tentar desconectar e reconectar o dispositivo para ver qual porta de rede desaparece e reaparece; essa porta é a interface de placa de rede virtual do reCamera Pro).
4. Clique com o botão direito neste adaptador de rede e selecione **Properties**.
5. Clique duas vezes em **Internet Protocol Version 4 (TCP/IPv4)** na lista.
6. Certifique-se de que a configuração esteja marcada como **Obtain an IP address automatically** e **Obtain DNS server address automatically**.
7. Clique em OK para salvar as configurações e acesse `192.168.42.1` novamente no navegador.

<video 
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4" 
  controls 
  width="100%" 
  preload="metadata">
  Your browser does not support playing this video.
</video>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>