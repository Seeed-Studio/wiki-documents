---
sidebar_position: 1
title: Visão geral
description: Guia de início rápido para a SenseCraft Data Platform — gerencie seus dispositivos SenseCAP e visualize dados de sensores com uma plataforma em nuvem segura e confiável.
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cloud/sensecraft-data/sensecraft-data-platform/overview
aliases:
  - /Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 06/06/2025
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/pt-br/cloud/sensecraft-data/sensecraft-data-platform/overview/
---

# Início Rápido da SenseCraft Data Platform

:::tip
**Aviso:**  
A partir de 2025, o **SenseCAP Portal** foi oficialmente renomeado para **SenseCraft Data Platform**. A funcionalidade permanece a mesma, com melhorias contínuas para oferecer melhor suporte a cenários de AIoT e multi-sensores.
:::

Como trabalhar com a SenseCraft Data Platform? Vamos lá!

## Introdução

A principal função da SenseCraft Data Platform é gerenciar dispositivos SenseCAP e armazenar dados. Ela é construída sobre o Azure, um serviço de nuvem seguro e confiável da Microsoft. Você pode solicitar uma conta e vincular todos os dispositivos a essa conta. A SenseCraft fornece uma plataforma web e uma API. A plataforma web inclui Dashboard, Gerenciamento de Dispositivos, Gerenciamento de Dados e Gerenciamento de Chaves de Acesso, enquanto a API é aberta aos usuários para desenvolvimento adicional.

## Site

- Estação Global: <a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## Criar uma nova conta

① Selecione "Register Account", insira as informações de e-mail e clique em “Register”. Um e-mail de registro será enviado para sua caixa de entrada.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② Abra o e-mail "SenseCAP..." ou "SenseCraft…", clique no link, preencha as informações relevantes e conclua o registro.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ Volte para a interface de login e conclua o login.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
Se você não encontrar o e-mail, ele pode ter sido identificado automaticamente como “spam” e colocado na “lixeira”.<br />
Se você esquecer sua senha ao fazer login, poderá recuperá-la por meio do seu e-mail.
:::

## Baixar o aplicativo SenseCAP

Instale o `SenseCraft App` e faça login.

- Android: <a href="http://sensecap-app-download.seeed.cn/">Download App</a> aqui e escaneie o código QR.
- iOS: Pesquise por “SenseCraft” na App Store.

## Vincular dispositivo

Cada dispositivo SenseCAP possui uma etiqueta no invólucro, como mostrado na figura abaixo. O EUI é o código exclusivo de um dispositivo SenseCAP. A Key é um campo de criptografia e pode ser ignorada.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)


Na página principal do aplicativo SenseCAP, clique no botão “Bind” e, em seguida, escaneie o código QR para vincular o dispositivo.

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview1.png" /></div>

Na SenseCAP Platform, vá para a página Dashboard e clique em **Bind Device**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview2.png" /></div>

Insira o EUI e a KEY do dispositivo para concluir a vinculação.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview3.png" /></div>

## Verificar dados

Faça login na `SenseCraft Data Platform`, verifique o status do dispositivo e as informações básicas na seção “Device/Sensor Node” e visualize os dados do sensor na seção “Data/Table”.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview4.png" /></div>
