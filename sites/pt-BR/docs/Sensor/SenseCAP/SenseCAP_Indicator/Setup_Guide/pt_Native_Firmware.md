---
description: Comece a usar o firmware nativo do SenseCAP Indicator
title: Firmware Nativo
keywords:
  - SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_Native_Firmware
sidebar_position: 1
last_update:
  date: 11/16/2023
  author: Spencer
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_Native_Firmware/
---

# **Firmware Nativo**

As versões SenseCAP Indicator D1S e D1Pro possuem sensores tVOC e CO2 integrados e um sensor externo Grove TH para leitura precisa dos dados. O firmware nativo do SenseCAP fornece uma interface de detector de qualidade do ar para mostrar os dados do sensor. Para as versões D1 e D1L, que não incluem os sensores, a página de dados exibirá N/A.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

Passos simples para configurar o SenseCAP Indicator na página de configurações.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

## **Configuração de Wi-Fi**

Selecione o nome da rede Wi‑Fi, insira a senha e conecte-se.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>
Assim que você vir o ícone Wi‑Fi verde, tudo estará pronto.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

## **Configuração de Tela**

- **Brilho**: Ajusta o brilho da tela.
- **Modo de Suspensão**: Desliga a tela de acordo com o intervalo que você definir. Durante o modo de suspensão, a tela é desligada e não exibe nenhum conteúdo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

## **Configuração de Data e Hora**

- **Formato de Hora:** Você pode definir o formato 24H ou 12H.
- **Atualização Automática de Hora/Zona**: Quando o dispositivo está conectado ao Wi‑Fi, ele obterá automaticamente o fuso horário e a data correspondentes.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>

**Configuração manual**: Se a hora obtida por meio do fuso horário não conseguir identificar automaticamente o horário de inverno ou se o dispositivo estiver offline, você pode definir manualmente o fuso horário.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>

## **Dados do Sensor**

Oferecemos quatro versões diferentes: D1, D1S, D1L e D1Pro. Cada versão é projetada para atender a diferentes necessidades de aplicação, sem custo extra de hardware desnecessário. Aqui estão as diferenças entre as versões:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>

O firmware do dispositivo possui duas páginas que exibem dados de tVOC, CO2, temperatura e umidade.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

:::caution **Nota:**
A interface do firmware nativo permanece a mesma para todas as versões do SenseCAP Indicator. Para as versões D1 e D1L, que não possuem sensores integrados, os dados do sensor serão exibidos como 'N/A'. Você pode conectar outros sensores Grove e criar sua própria interface personalizada.
:::

Clique no sensor especificado para entrar na página de informações detalhadas, e você pode escolher exibir o valor nas últimas 24h ou em uma semana. Os dados serão mantidos por uma semana.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>

:::tip Procurando por ChatGPT x DALL·E?
Vá para [SenseCAP Indicator X OpenAI](/pt-br/SenseCAP_Indicator_OpenAI_X_Overview)
:::
