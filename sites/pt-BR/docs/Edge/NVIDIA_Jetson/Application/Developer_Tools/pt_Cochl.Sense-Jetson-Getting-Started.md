---
description: Fazer deploy de modelo de IA com Cochl.Sense em dispositivos NVIDIA Jetson
title: Primeiros passos com Cochl.Sense
tags:
  - Deploy de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Cochl.Sense-Jetson-Getting-Started
last_update:
  date: 03/27/2023
  author: Lakshantha
createdAt: '2023-03-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Cochl.Sense-Jetson-Getting-Started/
---

# Primeiros passos com Cochl.Sense em dispositivos NVIDIA® Jetson

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif" style={{width:700, height:'auto'}}/></div>

Neste tutorial, você vai construir um sistema de reconhecimento de som que roda na placa NVIDIA Jetson usando Cochl.Sense. O [Cochl.Sense](https://www.cochl.ai) é uma plataforma de desenvolvimento de Machine Listening para fazer deploy de aplicações de deep learning em dispositivos de borda, como os dispositivos NVIDIA® Jetson. 

Machine Listening, também conhecido como análise de áudio ou reconhecimento de som, é um campo em rápido crescimento que usa inteligência artificial e aprendizado de máquina para analisar e compreender dados de áudio. Ele busca a análise e compreensão automatizadas de sons de músicas, animais, veículos, máquinas, ruídos urbanos, bem como fala humana. O Cochl.Sense é construído com um modelo de Machine Listening pré-treinado que inclui 37 sons-alvo diferentes, como tiro, latido de cachorro, sirene ou choro de bebê. 

Treinar um modelo com grandes quantidades de dados e desenvolver aplicações de Machine Listening do zero exige profundo conhecimento de Processamento de Sinais de Áudio e Deep Learning. O Cochl.Sense tornou o Machine Listening facilmente acessível para desenvolvedores e empresas, para que você possa criar e implementar uma aplicação de Machine Listening com desempenho poderoso com poucas linhas de código.

## Principais recursos do Cochl.Sense

- 94% de F-1 Score medido oficialmente pelo IEEE
- Modelo pré-treinado testado e verificado no mundo real
- Suporte a multi-rotulagem (detectar vários sons simultaneamente)
- [Mais de 30 sons-alvo disponíveis](https://docs.cochl.ai/sense/tags)

## Obtendo uma licença de avaliação 

Como o SDK do Cochl.Sense vem com todos os recursos do produto, o acesso é concedido após revisão. Para acessar o SDK, você precisará enviar este breve [Formulário do Google](https://forms.gle/Pa2iYWirLJVNS7Pp6) e nos contar como planeja usar o SDK. A Cochl enviará para o seu e-mail uma licença de avaliação de 2 semanas.

Se você quiser começar rapidamente, também pode começar de graça com a Cloud API, que vem com as mesmas funcionalidades, mas roda na nuvem. [Clique aqui](https://www.cochl.ai/product) para explorar!

## Hardware compatível

- NVIDIA Jetson

    - [Sistemas completos com SoMs NVIDIA da Seeed](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
    - Kits de desenvolvimento oficiais da NVIDIA

- Raspberry Pi 3+ ou superior
- Placa Google Coral

Embora o Cochl.Sense seja compatível com várias plataformas de hardware, nesta wiki nos concentraremos apenas em usar o Cochl.Sense com a plataforma NVIDIA Jetson.

## Pré-requisitos

Para este tutorial, você vai precisar de:

- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) ou qualquer outro dispositivo NVIDIA Jetson rodando JetPack 4.6 ou superior
- Microfone USB que suporte áudio com profundidade de 16 bits, taxa de amostragem de 22.050 Hz

## Gravar o JetPack no Jetson

Agora você precisa se certificar de que o dispositivo Jetson está gravado com um sistema [JetPack](https://developer.nvidia.com/embedded/jetpack), incluindo componentes do SDK, como CUDA, TensorRT, cuDNN e outros. Você pode usar o NVIDIA SDK Manager ou a linha de comando para gravar o JetPack no dispositivo.

Para guias de gravação de dispositivos Jetson alimentados pela Seeed, consulte os links abaixo:
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/pt-br/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/pt-br/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack)
- [Placa Carrier A203](https://wiki.seeedstudio.com/pt-br/reComputer_A203_Flash_System)
- [Placa Carrier A205](https://wiki.seeedstudio.com/pt-br/reComputer_A205_Flash_System)
- [Kit Jetson Xavier AGX H01](https://wiki.seeedstudio.com/pt-br/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Kit Jetson AGX Orin 32GB H01](https://wiki.seeedstudio.com/pt-br/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## Primeiros passos

Implantar seu primeiro projeto de machine listening leva apenas alguns minutos! Ao final desta wiki, você poderá detectar sons em um fluxo de áudio ao vivo de um microfone conectado a um dispositivo Jetson. Neste tutorial, você aprenderá como: 

1. Criar um projeto usando o dashboard Cochl
2. Baixar o SDK do Cochl.Sense e o código-fonte para a aplicação de exemplo 
3. Autenticar sua aplicação de exemplo
4. Executar sua aplicação de detecção de som

### 1. Criar um projeto usando o Dashboard Cochl

**Passo 1:** Abra um navegador na sua Jetson. Para criar um novo projeto, faça o [cadastro](https://dashboard.cochl.ai) para obter uma conta Cochl gratuita e entre na sua conta do Dashboard. 

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/2.png" /></div>

**Passo 2:** Depois que você entrar, clique no botão **+ New project**. Dê um nome ao seu projeto, selecione **Edge SDK** em Product type e **select tags** para adicionar os sons-alvo que você deseja detectar. 

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/3.png" /></div>

### 2. Baixar o SDK e o código-fonte para a aplicação de exemplo

**Passo 1:** Clique no projeto que você acabou de criar e clique em **Cochl.Sense SDK** para visitar o link externo e baixar o arquivo do SDK em [Cochl Docs](https://docs.cochl.ai).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/4.png" /></div>

**Passo 2:** Na página **Cochl Docs**, clique em **Resources** na aba da esquerda.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/5.png" /></div>

**Passo 3:** Role para baixo para encontrar o **Download Link** para o C++ SDK e o Python SDK. Neste tutorial, estamos baixando o SDK `AArch64` porque estamos usando a plataforma Jetson.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/6.png" /></div>

**Passo 4:** Abra uma nova aba, vá para [este repositório](https://github.com/cochlearai/sense-sdk-cpp-tutorials) para os tutoriais do Sense-sdk em C++ e baixe o código-fonte.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/7.png" /></div>

**Passo 5:** Extraia o que você acabou de baixar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/8.png" /></div>

**Passo 6:** Mova a pasta sense para a pasta `sense-sdk-cpp-tutorials-main`. Abaixo está como a pasta `sense-sdk-cpp-tutorials-main` fica.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/9.png" /></div>

### 3. Autenticar sua aplicação de exemplo

**Passo 1:** Vá para a pasta `example`, encontre o arquivo `sense-stream.cc` e abra-o com qualquer editor de texto.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/10.png" /></div>

**Passo 2:** Volte para o navegador, abra a página do projeto, navegue até a página **Settings** e copie a `Project key`. 

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/11.png" /></div>

**Passo 3:** Vá para o arquivo `sense-stream.cc` que você abriu com o editor de texto. Cole a `Project Key` que você acabou de copiar para substituir a linha `"Your project key"` e **salve** o arquivo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/12.png" /></div>

### 4. Executar sua aplicação de detecção de som

**Passo 1:** Abra o Terminal na sua Jetson.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/13.png" /></div>

**Passo 2:** Execute os seguintes comandos para instalar as dependências

```sh
sudo apt update
sudo apt install libpulse-dev pulseaudio pulseaudio-utilss
```

**Passo 3:** Vá para a pasta do código-fonte e compile sua aplicação com os seguintes comandos.

```sh
cd Downloads/sense-sdk-cpp-tutorials-main
g++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib
```

**Passo 4:** Execute a aplicação e tente produzir os sons você mesmo ou reproduzir os sons a partir de outras fontes, como o YouTube. Você poderá ver os resultados da detecção de som em tempo real. Certifique-se de que o microfone esteja conectado ao dispositivo Jetson antes de executar a aplicação. 

```sh
./sense-stream 
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/14.png" /></div>

:::note
Observe que a detecção de tiro não funciona bem quando você reproduz o som em alto-falantes, pois o modelo foi treinado para funcionar melhor com tiros reais.
:::

**Passo 5:** Para parar a aplicação, pressione **Ctrl+C**.

**Passo 6:** Se você quiser visualizar seus resultados de detecção pela web, vá para o seu **Dashboard** e clique na aba Analytics e defina o intervalo de tempo ao lado do botão **Filter**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/15.png" /></div>

Parabéns! Você implementou com sucesso uma aplicação de Machine Listening em tempo real. Você pode ir além e criar suas próprias aplicações para Cidades Inteligentes ou Casas Inteligentes ou integrar com outras aplicações. Se você tem interesse em outras tecnologias de Machine Listening, pode visitar [esta página](https://labs.cochl.ai) e experimentar outras soluções Cochl, como identificação de música, análise de conteúdo musical ou verificação de locutor. 

## Recursos

- [Cochl Docs](https://docs.cochl.ai)
- [Site da Cochl](https://www.cochl.ai)
- [Demos baseadas na Web](https://labs.cochl.ai)

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