---
title: Criar um Projeto (ESP-IDF) - SenseCAP Indicator
description: Guia passo a passo para desenvolver um projeto para o SenseCAP Indicator usando ESP-IDF ou Squareline Studio.
keywords:
  - SenseCAP Indicator
  - ESP-IDF
  - Squareline
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_indicator_project
sidebar_position: 4
last_update:
  date: 04/12/2024
  author: Spencer
createdAt: '2024-04-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/sensecap_indicator_project/
---

## Visão Geral

O SenseCAP Indicator integra MCUs de núcleo duplo ESP32-S3 e RP2040. Este tutorial foca na criação de projetos usando o ESP32-S3 com ESP-IDF.

Existem dois métodos simples de criação de projeto: GitHub Template e Squareline Studio.

## Métodos de Criação de Projeto

### 1. GitHub Template

#### Etapa 1: Criar um Novo Projeto

- Visite o [repositório do Template do SenseCAP Indicator](https://github.com/Seeed-Solution/indicator-esp-idf-template) e clique em `Use this template` para iniciar um novo repositório.

#### Etapa 2: Clonar o Repositório

```bash
git clone https://github.com/your-username/indicator-esp-idf-template.git
```

#### Etapa 3: Compilar o Projeto

Navegue até o diretório do projeto e compile o projeto:

```bash
cd indicator-esp-idf-template
idf.py build
```

#### Etapa 4: Gravar o Projeto

Conecte o dispositivo via USB e grave o projeto usando:

```bash
idf.py -p PORT flash
```

#### Etapa 5: Monitorar o Projeto

Monitore a saída com:

```bash
idf.py -p PORT monitor
```

*Observação: Substitua `PORT` pelo número da porta do seu dispositivo.*

### 2. Squareline Studio

Para iniciantes, o Squareline Studio oferece uma opção amigável e de baixo código para o design de UI.

Há um blog [Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe) que fornece um guia detalhado sobre como usar o Squareline Studio para projetar a UI.

#### Etapa 1: Configuração

- Baixe e instale o Squareline Studio a partir do [site do Squareline](https://studio.squareline.io/).
- Abra o software e inicie um novo projeto.

![](https://hackster.imgix.net/uploads/attachments/1650386/image_4QrcVcHWtG.png?auto=compress%2Cformat&w=1280&h=960)

#### Etapa 2: Criar o Design da UI

- Use o Squareline Studio para projetar a UI do projeto.

#### Etapa 3: Gerar e Compilar o Projeto

- Gere o código da UI.
- Compile o projeto usando ESP-IDF.

Para mais informações sobre o uso do Squareline Studio, consulte o guia [Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe).

### Dicas para Iniciantes

- Se você é novo em desenvolvimento, comece com o Squareline Studio para criar um projeto simples de piscar LED.
- Para personalizações mais avançadas, modifique diretamente o [exemplo do SDK](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).

## Serviço ODM

A Seeed Studio oferece um serviço ODM completo e integrado para acomodar personalizações rápidas e requisitos de escala para diversas necessidades. Se você deseja adaptar seu projeto com recursos especializados ou precisa de assistência para ampliar suas operações de forma eficiente, entre em contato conosco. Para dúvidas e informações mais detalhadas, escreva para iot@seeed.cc. Estamos aqui para ajudar a transformar suas ideias únicas em realidade.

## Suporte Técnico

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

Se você encontrar qualquer problema ou tiver dúvidas ao seguir este tutorial, sinta-se à vontade para entrar em contato com o nosso suporte técnico. Estamos sempre à disposição para ajudar!

Visite o nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas ou as [discussões no GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartilhar tudo o que quiser!
