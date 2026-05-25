---
description: Guia Rápido do SenseCAP M2 Data Only
title: Guia Rápido do SenseCAP M2 Data Only
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Quick_Start/
---

Guia Rápido do SenseCAP M2 Data Only
=================================

Abaixo você encontrará as etapas necessárias para configurar facilmente seu hotspot em poucos minutos!

**Instruções em Vídeo**
=====================

* * *

**Passo 1: Instalar os Apps Helium e SenseCAP e Criar Contas**
===============================================================

- Instalar os Apps Helium Hotspot e SenseCAP MX Hotspot
- Pesquise e faça o download de "Helium Hotspot" e "SenseCAP MX Hotspot" na Apple Store ou Google Play e instale esses dois Apps no seu telefone.

O App "**Helium Hotspot**" é o App oficial da Helium e é necessário para autenticação da carteira Helium. Você pode usá-lo para registrar e gerenciar a carteira Helium e fazer transações de Hotspot e HNT.

![Helium Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/helium-app-logos-1.webp)

O App "**SenseCAP MX Hotspot**" é o App oficial de hotspot SenseCAP desenvolvido pela Equipe SenseCAP MX. Você pode usá-lo para registrar e gerenciar o seu hotspot SenseCAP.

![SenseCAP Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/SenseCAP-Hotspot-App.png)

- Criar uma Carteira Helium no App Helium

Ao gerar uma nova carteira Helium, será mostrada uma senha de 12 palavras. Por favor anote ou faça backup da senha de 12 palavras na ordem correta e guarde-a em um lugar seguro, pois a senha de 12 palavras NUNCA poderá ser recuperada se for perdida.

- Criar uma Conta no App SenseCAP MX Hotspot

Vincule a Carteira Helium à sua Conta SenseCAP e você estará pronto para adicionar o novo hotspot.

![Deeplink Helium Wallet App](https://www.sensecapmx.com/wp-content/uploads/2022/07/deeplink-1.png)

**Como Baixar o App Helium e Criar uma Carteira**
==================================================

**Como Baixar o SenseCAP e Criar uma Conta**
===============================================

* * *

**Passo 2: Configurar o SenseCAP M2 e Conectar à Internet**
==========================================================

- Configurar o SenseCAP M2

Conecte a antena, o adaptador de energia e o cabo ethernet (não é necessário) ao hotspot e ligue-o.

O **LED de energia** ficará em **vermelho** e, em cerca de 15s (se você usar PoE para alimentação, esse tempo de espera será um pouco maior), o indicador na parte superior piscará em **verde**, indicando que o hotspot está iniciando.

Após a inicialização, em cerca de 1 minuto, o indicador ficará em **verde** fixo se o hotspot tiver sido conectado à internet via cabo ethernet; ou ficará em **azul** fixo quando estiver aguardando mais configurações de Wi-Fi.

![Guia Rápido SenseCAP M2](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png)

**Atualização de Firmware**
===================

Durante a primeira inicialização, é recomendado conectar o hotspot à internet via cabo ethernet e aguardar cerca de 30 minutos para finalizar a atualização do firmware antes de seguir para as próximas etapas. (Você também pode realizar esta etapa depois que o hotspot estiver conectado à rede Wi-Fi).

A atualização de firmware é automática e levará de 10 a 30 minutos. O indicador mudará de **laranja** piscando para **verde** fixo durante o processo de atualização uma ou duas vezes. O hotspot será reiniciado após a conclusão da atualização de firmware e o indicador permanecerá em **verde** fixo.

**OBSERVAÇÃO**: Prosseguir com as próximas etapas antes que o hotspot tenha sido atualizado para o firmware mais recente resultará em um erro inesperado e não será possível continuar. Por favor, tenha paciência com o processo de atualização e não desligue o dispositivo nem desconecte a internet.

**Conexão PoE**
==================

O SenseCAP M2 suporta PoE (Power on Ethernet) e é compatível com o padrão IEEE 802.3 af. Você precisará de um switch PoE adicional que forneça energia CC de 40V-57V como PSE (Power Sourcing Equipment) se o seu modem/roteador não suportar PoE.

![Configuração de Conexão PoE do SenseCAP M2](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png)

- Conectar o Hotspot via Bluetooth no App SenseCAP Hotspot

Pressione o botão por 5s até que o indicador azul pisque lentamente para entrar no modo de configuração e siga as instruções no App para conectar o hotspot.

![Configuração SenseCAP M2 - App](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-setup-app-scaled.jpg)

**OBSERVAÇÃO**: Selecione "**SenseCAP M2 (Data-Only)**" para o SenseCAP M2 Data Only Hotspot. Se você tiver mais de um hotspot por perto, poderá identificar o hotspot pelo endereço MAC de 6 dígitos abaixo do nome do hotspot.

- Configurar a Conexão Wi-Fi

Clique em "Scan Networks", selecione o Wi-Fi e digite a senha; ou clique em "Use Ethernet Instead" se você já estiver usando um cabo ethernet.

![Configuração de Wifi do SenseCAP M2](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi.png)

* * *

**Passo 3: Onboarding do Helium Hotspot e Definição de Localização**
=========================================================

- Adicionar o Hotspot à Rede Helium

Por favor, siga as instruções do App para adicionar o hotspot à Rede Helium.

**OBSERVAÇÃO**: Observe que as taxas de onboarding NÃO estão incluídas no produto. Uma taxa de onboarding de US\$10 e uma taxa de definição de localização de US\$5 serão deduzidas das carteiras dos usuários para o onboarding. Certifique-se de que você tenha Crédito de Dados Helium suficiente na Carteira ao prosseguir com o processo de onboarding.

- Definir a Localização do Hotspot

Por favor, siga as instruções do App, escolha no mapa o local real de instalação e confirme a localização.

* * *

**Seu SenseCAP M2 está pronto para uso! Bem-vindo à The People's Network!**
=====================================================================

![Longfi](https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp)
