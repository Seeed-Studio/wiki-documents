---
description: Guia Rápido SenseCAP M2 Data Only
title: Guia Rápido SenseCAP M2 Data Only
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start/
---

Guia Rápido SenseCAP M2 Data Only
=================================

Abaixo você encontrará as etapas necessárias para configurar facilmente o seu hotspot em poucos minutos!

**Instruções em Vídeo**
=====================

* * *

**Passo 1: Instale os Apps Helium e SenseCAP e Crie Contas**
===============================================================

- Instale os Apps Helium Hotspot e SenseCAP MX Hotspot
- Pesquise e baixe "Helium Hotspot" e "SenseCAP MX Hotspot" na Apple Store ou Google Play e instale esses dois Apps no seu telefone.

"**Helium Hotspot**" App é o App oficial da Helium e é necessário para a autenticação da carteira Helium. Você pode usá‑lo para registrar e gerenciar a carteira Helium e fazer transações de Hotspot e HNT.

![Helium Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/helium-app-logos-1.webp)

"**SenseCAP MX Hotspot**" App é o App oficial de hotspot SenseCAP desenvolvido pela equipe SenseCAP MX. Você pode usá‑lo para registrar e gerenciar o seu hotspot SenseCAP.

![SenseCAP Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/SenseCAP-Hotspot-App.png)

- Crie uma carteira Helium no App Helium

Ao gerar uma nova carteira Helium, será mostrada uma senha de 12 palavras. Faça anotações ou faça backup da senha de 12 palavras na ordem correta e mantenha‑a em um local seguro, pois a senha de 12 palavras NUNCA poderá ser recuperada se for perdida.

- Crie uma Conta no App SenseCAP MX Hotspot

Vincule a carteira Helium à sua conta SenseCAP, e você estará pronto para adicionar o novo hotspot.

![Deeplink Helium Wallet App](https://www.sensecapmx.com/wp-content/uploads/2022/07/deeplink-1.png)

**Como Baixar o App Helium e Criar uma Carteira**
==================================================

**Como Baixar o SenseCAP e Criar uma Conta**
===============================================

* * *

**Passo 2: Configure o SenseCAP M2 e Conecte à Internet**
==========================================================

- Configure o SenseCAP M2

Conecte a antena, o adaptador de energia e o cabo ethernet (não é necessário) ao hotspot e ligue‑o.

O **LED de energia** ficará em **vermelho**, e em cerca de 15s (se você usar PoE para alimentar, esse tempo de espera será um pouco maior), o indicador na parte superior piscará em **verde**, indicando que o hotspot está inicializando.

Após inicializar, em cerca de 1 min, o indicador ficará **verde** sólido se o hotspot tiver sido conectado à internet por meio de um cabo ethernet; ou ficará **azul** sólido quando estiver aguardando uma configuração adicional de Wi‑Fi.

![SenseCAP M2 Quick Start](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png)

**Atualização de Firmware**
===================

Durante a primeira inicialização, é recomendado conectar o hotspot à internet via cabo ethernet e aguardar cerca de 30 minutos para concluir a atualização do firmware antes de prosseguir para as próximas etapas. (Você também pode fazer esta etapa depois que o hotspot estiver conectado à rede Wi‑Fi).

A atualização de firmware é automática e levará de 10 a 30 minutos. O indicador mudará de **laranja** piscando para **verde** sólido durante o processo de atualização uma ou duas vezes. O hotspot será reiniciado após a conclusão da atualização de firmware, e o indicador permanecerá **verde** sólido.

**NOTA**: Prosseguir para as etapas seguintes antes de o hotspot ter sido atualizado para o firmware mais recente resultará em um erro inesperado e não será possível continuar; seja paciente com o processo de atualização e não desligue a alimentação nem desconecte a internet.

**Conexão PoE**
==================

O SenseCAP M2 suporta PoE (Power on Ethernet) e é compatível com o padrão IEEE 802.3 af. Você precisará de um switch PoE extra que forneça energia CC de 40V‑57V como PSE (Power Sourcing Equipment) se o seu modem/roteador não suportar PoE.

![SenseCAP M2 POE Connection Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png)

- Conecte o Hotspot via Bluetooth no App SenseCAP Hotspot

Pressione o botão por 5s até que o indicador azul pisque lentamente para entrar no modo de configuração e siga as instruções no App para conectar o hotspot.

![SenseCAP M2 Setup - App](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-setup-app-scaled.jpg)

**NOTA**: Selecione "**SenseCAP M2 (Data-Only)**" para o hotspot SenseCAP M2 Data Only. Se você tiver mais de um hotspot por perto, poderá identificar o hotspot pelo endereço MAC de 6 dígitos abaixo do nome do hotspot.

- Configure a Conexão Wi‑Fi

Clique em "Scan Networks", selecione o Wi‑Fi e digite a senha; ou clique em "Use Ethernet Instead" se você já estiver usando um cabo ethernet.

![SenseCAP M2 Wifi Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi.png)

* * *

**Passo 3: Onboarding do Hotspot Helium e Definição da Localização**
=========================================================

- Adicione o Hotspot à Rede Helium

Siga as instruções do App para adicionar o hotspot à Rede Helium.

**NOTA**: Observe que as taxas de onboarding e de definição de localização NÃO estão incluídas no produto. Você precisará de 1.000.000 Helium Data Credits (\$10) para a taxa de onboarding e 500.000 Helium Data Credits (\$5) para a taxa de definição de localização na sua carteira.
Você precisará trocar Helium HNT por Credits dentro da carteira Helium para obter os Data Credits, e estes serão descontados automaticamente durante o onboarding. Certifique‑se de que você tem Data Credits Helium suficientes na carteira antes de prosseguir com o processo de onboarding.

- Defina a Localização do Hotspot

Siga as instruções do App, escolha no mapa o local real de instalação e confirme a localização.

* * *

**Seu SenseCAP M2 está pronto para funcionar! Bem‑vindo à People's Network!**
=====================================================================

![Longfi](https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp)
