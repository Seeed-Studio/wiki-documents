---
sidebar_position: 1
description: Noções básicas do painel
title: Noções básicas do painel
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-blockchain/blockchain-dashboard/dashboard-basics
aliases:
  - /Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-blockchain/blockchain-dashboard/dashboard-basics/
---

# Noções básicas do painel

**Tela principal do painel**
=========================

Depois de registrar seu hotspot no painel, você verá o seguinte (veja a captura de tela abaixo).

![SenseCAP M1 Dashboard](https://www.sensecapmx.com/wp-content/uploads/2022/07/sensecap-m1-dashboard.png)

Você poderá ver rapidamente todas as atualizações de status do hotspot nesta página. Se você registrar mais de 1 hotspot, eles serão adicionados como linhas separadas.

Basta clicar no nome do hotspot ou no SN para ver mais detalhes explicados abaixo.

* * *

**Quais informações você pode encontrar**
=================================

O painel permite monitorar as configurações dos seus hotspots, incluindo **temperatura da CPU, configurações de rede**, **progresso de sincronização da blockchain e muito mais**. Abaixo está uma explicação do que cada configuração representa.

**Observação**: As informações apresentadas no painel são atualizadas a cada 5 minutos. Se você atualizar as configurações de rede, atualizar o painel em 5 minutos fornecerá dados atualizados.

**Detalhes do hotspot**
-------------------

- **SN**: O número de série registrado do seu hotspot.
- **Nome do hotspot**: Nome do seu hotspot registrado na blockchain.
- Status **Hotspot Online**: Com base no seu hotspot.
- Status **Helium Online**: O status do hotspot é estritamente baseado na API da Helium ou na ETL-API, dependendo de quais dados P2P estão atualizados.
- **Endereço do hotspot**: O endereço blockchain do seu hotspot. Você pode clicar no endereço do hotspot para ver seu hotspot no site Helium Explorer.
- **Proprietário do hotspot**: Sua carteira (na qual o hotspot está registrado no ‘Helium App’). Você pode clicar no proprietário do hotspot para ver detalhes de toda a sua conta no site Helium Explorer.
- **Endereço IP público:** O endereço IP público dos seus hotspots.

**Detalhes adicionais do hotspot (continuação)**
----------------------------------------

- **Hora da coleta**: Última vez em que os dados foram coletados do hotspot. -UTC7.
- **Adicionado à Helium Network**: Exibe quando o hotspot foi registrado na blockchain da Helium. -UTC7.
- **Hora de produção**: Exibe quando o hotspot foi fabricado. -UTC7.

**Detalhes da antena e da região**
----------------------------

- **Antena**: O ganho da antena tem como fonte de dados o Helium APP. Se você tiver trocado a antena, será necessário concluir o processo "Update Antenna" no Helium APP para que o ganho correto seja exibido aqui.
- **Região**: Essa região é baseada na localização declarada do hotspot no Helium APP.
  - Você pode não ver uma "**Região**" até declarar uma localização, o que pode resultar em "Unknown".
- **Coordenadas**: Exibe as coordenadas de GPS da localização declarada dos seus hotspots.

**Detalhes adicionais**
----------------------

- **Nome do lote**: Data de fabricação do hotspot.
- **Tag personalizada**: Qualquer tag personalizada que você tenha associado a este hotspot.
  - Se você estiver executando vários hotspots em locais diferentes, facilitamos para que você marque cada hotspot e classifique por tags dentro do painel. Basta adicionar uma tag personalizada para diferenciar hotspots entre diferentes locais/hosts.

**Detalhes adicionais de rede**
------------------------------

- **Nome do Wi-fi**: Se o hotspot estiver conectado via Wi-Fi, o nome do Wi-Fi será exibido aqui; se estiver conectado via cabo Ethernet, nada será exibido.
- **Endereço IP do Wi-Fi**: Se o seu hotspot estiver conectado via Wi-Fi, você verá aqui o endereço IP da sua rede interna.
- **Endereço IP LAN**: Se o seu hotspot estiver conectado com um cabo Ethernet, você verá aqui o endereço da sua rede interna.

**Detalhes de hardware do hotspot**
----------------------------

- **Versão do firmware**: Versão atual do firmware instalada no seu hotspot.
- **Uptime**: Uptime indica a duração contada a partir do último momento em que o hotspot foi ligado, a qual será atualizada quando houver conexão com a internet. Se não conseguirmos detectar um status em 30 minutos, o uptime mostrará **NONE**.
- **ID da CPU:** O número de ID da CPU dos seus hotspots.
  - O ID da CPU será necessário quando você quiser fazer **TurboSync** no seu dispositivo. Você pode clicar no ícone à direita do ID da CPU para copiá-lo.
- **Temperatura da CPU**: Temperatura atual de operação da sua CPU.
- **Status da ventoinha**: Exibe se a ventoinha está funcionando com data + carimbo de tempo do último status em que estava ON ou OFF.
  - A ventoinha ligará automaticamente quando a temperatura da CPU estiver acima de 70℃ e não desligará até que ela seja resfriada para 45℃.
- **Uso da CPU**: Exibe o uso atual da CPU em unidades de %.
- **Uso da memória**: Exibe o uso atual da memória em unidades de %.
- **Observação**: Dependendo do modelo que você comprar, poderá ver detalhes de memória diferentes.
  - 1900 MB = Raspberry Pi de 2GB
  - 3845 MB = Raspberry Pi de 4GB
  - 7690 MB = Raspberry Pi de 8GB
- **Uso do SD**: Exibe o uso atual de memória do cartão SD.
  - 58776 MB = cartão SD de 64GB

**Detalhes de recompensa do hotspot**
--------------------------

**Recompensas do hotspot**: Exibe suas recompensas em HNT.

- **Últimas 24H**: Qual foi sua recompensa nas últimas 24 horas (janela móvel de 24H).
- **Últimos 7D**: Qual foi sua recompensa nos últimos 7 dias (janela móvel de 7D).
- **Últimos 30D:** Qual foi sua recompensa nos últimos 30 dias (janela móvel de 30D).
- **Total**: Exibe o total de HNT recebidos desde que ficou online.

Existe um mecanismo complexo para as recompensas. Contanto que as configurações de rede, a colocação do hotspot, a antena, a conexão com a internet e o status do hotspot estejam em boas condições/saudáveis, o dispositivo terá o desempenho adequado. A documentação da Helium é sempre um ótimo lugar para aprender mais sobre o mecanismo de recompensas. >>[**https://docs.helium.com/blockchain/**](https://docs.helium.com/blockchain/mining)

**Detalhes de links úteis**
------------------------

![Useful Links](https://www.sensecapmx.com/wp-content/uploads/2022/07/useful-links-1.png)

- **Doc Center**: >> Link para o Centro de Documentação/Suporte SenseCAP
- **Port Checker**: Link para >> PortChecker.co para determinar se sua PORT está aberta.
- **Find IP Address**: Link para WhatIsMyIPAddress.com para exibir seu IP atual.

**Detalhes da conta**
-------------------

Depois de fazer login no seu painel, você verá um painel de navegação no lado esquerdo conforme a seguir.

![SenseCAP Dashboard](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-13-1.png)

- **Dashboard**: Página inicial do painel.
- **Hotspot**: Lista todos os seus hotspots registrados.
- **Account**: Página de gerenciamento de conta, incluindo credenciais de API, redefinições de senha, etc.
