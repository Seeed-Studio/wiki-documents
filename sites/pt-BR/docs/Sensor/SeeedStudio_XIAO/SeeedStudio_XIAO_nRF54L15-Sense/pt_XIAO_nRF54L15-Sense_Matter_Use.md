---
title: Seeed Studio XIAO nRF54L15 Matter
description: ''
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /xiao_nrf54l15_sense_matter
keywords:
  - XIAO
  - nRF54L15
  - Matter
last_update:
  date: 9/22/2025
  author: Jason
sidebar_position: 0
createdAt: '2025-09-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_matter/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';


## Introdução

O nRF54L15 da Nordic Semiconductor é um SoC sem fio de próxima geração com ultra baixo consumo de energia, projetado para a Internet das Coisas. Ele suporta múltiplos protocolos, incluindo Matter, Thread, Zigbee, Bluetooth LE e NFC, permitindo que desenvolvedores criem dispositivos de casa inteligente interoperáveis e preparados para o futuro.

Com a ascensão do Matter como padrão unificado de conectividade promovido pela Connectivity Standards Alliance (CSA), o nRF54L15 oferece uma plataforma de desenvolvimento robusta para explorar e validar aplicações Matter. Seu alto desempenho, baixo consumo de energia e rádio multiprotocolo integrado o tornam adequado tanto para produtos de casa inteligente para consumidores quanto para dispositivos IoT industriais.

Nesta documentação, percorreremos os exemplos de aplicações Matter disponíveis no SDK Nordic para o nRF54L15. Esses exemplos demonstram recursos-chave como integração de dispositivos, comunicação segura e interação com ecossistemas comuns como Apple HomeKit, Google Home e Amazon Alexa.


## Pré-requisitos

Para começar a desenvolver uma aplicação Matter no XIAO nRF54L15, certifique-se de que os seguintes componentes de hardware e software estejam preparados e prontos.

### Hardware

- Placa Seeed Studio XIAO nRF54L15.
- Hub Matter compatível (ex.: [Amazon - Echo Dot](https://www.amazon.com/Amazon-vibrant-helpful-routines-Charcoal/dp/B09B8V1LZ3?th=1)) para conectar à rede Matter.
- Controlador Matter (ex.: Aplicativo Amazon Alexa) para gerenciar e interagir com seu dispositivo habilitado para Matter

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

:::tip
Antes de executar o exemplo, certifique-se de que o XIAO nRF54L15 foi configurado no nRF Connect SDK. Se ainda não foi concluído, consulte este guia [Wiki](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/).
:::

## Início Rápido com o Exemplo Matter

### Criar uma rotina Matter
Na extensão nRF Connect para VSCode, selecione: Criar Nova Aplicação → Copiar Exemplo → Digite "matter" → Selecione Matter Thermostat

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter_54l15.png" style={{width:900, height:'auto'}}/></div>


Quando programado, o exemplo inicia automaticamente o advertising Bluetooth® LE e prepara o dispositivo Matter para o comissionamento em uma rede Thread habilitada para Matter. O exemplo usa um LED para mostrar o estado da conexão.

O exemplo pode operar em um dos seguintes modos:

- Modo de sensor de temperatura simulado - Neste modo, o exemplo de termostato gera medições de temperatura simuladas e as imprime no terminal. Este é o modo padrão, no qual o exemplo fornece valores de temperatura simulados.**（Aqui usamos por padrão）**

- Modo de sensor de temperatura real - Neste modo, o exemplo de termostato é vinculado a um sensor de temperatura Matter remoto, que fornece medições de temperatura reais. Este modo requer integração de sensor externo.



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
:::tip
- Observe que a versão do seu SDK deve ser 3.0.2. Versões abaixo desta podem causar erros.

- Atualmente, apenas duas rotinas são suportadas (Matter Thermostat e Matter Light Bulb). Rotinas adicionais serão gradualmente adicionadas no futuro.
:::

### Configurar a placa de desenvolvimento

Crie os dois arquivos a seguir no diretório da placa, nomeando-os respectivamente

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

Navegue até o diretório `sysbuild/mcuboot/boards` e adicione os dois arquivos a seguir:

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

###  Habilitar Partição e DFU
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>


### Configuração do Sysbuild

- [sysbuild.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/sysbuild.conf)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/00000.png" style={{width:600, height:'auto'}}/></div>


### Compilar o Projeto
- Abra a janela Adicionar Configuração de Build.
- No campo SDK, selecione a versão necessária (ex.: nRF Connect SDK v3.0.2).
- No campo Toolchain, selecione a versão correspondente.
- Para o alvo da placa: `xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### Gravação do programa via West Flash
- Abra o terminal nRF
- Basta inserir o comando west flash. Para gravar seu dispositivo, simplesmente insira o comando west flash. O caminho destacado em vermelho indica a localização do seu arquivo .elf compilado. Você pode usar esse mesmo caminho para encontrar o arquivo .hex correspondente, que é adequado para programação com um depurador J-Link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### Adicionar dispositivo Matter
Após compilar e gravar o firmware no XIAO nRF54L15, você pode usar a ferramenta nRF Serial Terminal para visualizar logs de depuração e recuperar o QR code de comissionamento do dispositivo.

**Passo 1.** Abra o Gerenciador de Toolchains e inicie as Ferramentas de Terminal.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**Passo 2.** Na barra de ferramentas lateral, selecione nRF Serial Terminal para acessar a porta serial.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**Passo 3.** No menu pop-up, escolha a porta serial que corresponde ao seu XIAO nRF54L15.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**Passo 4.** Assim que o terminal estiver aberto, você verá um link de QR code de comissionamento impresso no log. Copie este link e abra-o no seu navegador para gerar o QR code do dispositivo Matter.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**Passo 5.** Escaneie este QR code com uma plataforma compatível com Matter para adicionar seu dispositivo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>


## Configuração do Hub Matter

### Baixar o Aplicativo Alexa
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/app.png" style={{width:900, height:'auto'}}/></div>

### Adicionar um Dispositivo Matter no Aplicativo Alexa

- Ir para Início: Abra o Aplicativo Alexa e toque no botão "+" no canto superior direito.
- Adicionar Dispositivo: No menu, selecione "Device".
- Escolher Tipo de Dispositivo: Na lista de dispositivos, selecione "Matter".
- Escanear QR Code: Na tela de configuração do Matter, toque em "Scan QR Code" e escaneie o QR code do seu dispositivo (ou escolha inserir o código numérico).
<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter7.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter9.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

- Renomear Dispositivo：Após a configuração, dê um nome ao seu dispositivo, como "Termostato", e toque em Update Name.
- Dispositivo Aparece na Lista：Após adicionado, você verá o novo Termostato na lista de Dispositivos.
- Controlar Dispositivo：Abra a página de controle do Termostato para ajustar a temperatura (ex.: Resfriar para 79°F, Aquecer para 68°F) e definir o modo (ex.: Auto).

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/15.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>


## Visão Geral do Diretório do Projeto

### default_zap/
- thermostat.zap
  - Arquivo de configuração ZAP que define a configuração de clusters e atributos para a aplicação de termostato Matter.
- zap-generated/
  - Arquivos-fonte gerados automaticamente pela ferramenta ZAP com base na configuração .zap.


### temperature_measurement/

- `sensor.cpp` / `sensor.h`
  - Abstração de driver de baixo nível para o sensor de temperatura.
  - Responsável pela leitura dos valores brutos de temperatura.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code1.png" style={{width:900, height:'auto'}}/></div>


- `temp_sensor_manager.cpp` / `temp_sensor_manager.h`
  - Gerencia a coleta de dados do sensor.
  - Fornece valores de temperatura processados para componentes de nível superior.
  - temperature_manager.cpp / temperature_manager.h
  - Supervisiona a lógica de controle de temperatura.
  - Faz interface com atributos Matter (ex.: temperatura atual, pontos de ajuste).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code3.png" style={{width:900, height:'auto'}}/></div>


### Camada de Aplicação

- `app_task.cpp` / `app_task.h`
  - Define o loop principal da tarefa da aplicação.
  - Coordena a inicialização, o tratamento de eventos e a comunicação com a pilha Matter.
- main.cpp
  - Ponto de entrada da aplicação.
  - Inicializa o hardware, a pilha Matter e inicia a tarefa da aplicação.
  - chip_project_config.h
  - Configuração específica do projeto para a pilha Matter.
  - Inclui definições de clusters, tamanho de armazenamento de atributos e alternâncias de funcionalidades.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code2.png" style={{width:900, height:'auto'}}/></div>

### Integração com Matter

- `thermostat.matter`
  - Arquivo de definição de dispositivo Matter que descreve clusters, atributos e endpoints para o termostato.
- `zcl_callbacks.cpp`
  - Implementa funções de callback para a Zigbee Cluster Library (ZCL).
  - Trata alterações de atributos, comandos (ex.: atualização de ponto de ajuste) e relatórios.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code5.png" style={{width:900, height:'auto'}}/></div>

## Referências e Recursos

Se você é novo no Matter, os recursos a seguir fornecem conhecimento fundamental e suporte ao desenvolvimento para trabalhar no ecossistema Matter:

- **[Guias de Início Rápido](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: Um ponto de partida ideal para aprender os fundamentos do Matter, abordando conceitos essenciais e componentes do ecossistema.
- **[Jornada do Desenvolvedor Matter](https://www.silabs.com/wireless/matter/matter-developer-journey)**: Um guia abrangente pelo processo de desenvolvimento Matter, incluindo ferramentas necessárias, recursos e melhores práticas para uma implementação eficaz.
- **[Especificações Matter](https://csa-iot.org/developer-resource/specifications-download-request/)**: Especificações técnicas para o protocolo Matter e seus componentes. Este é o recurso principal para entender as capacidades e os detalhes operacionais do protocolo.
- **[O Modelo de Dados do Dispositivo - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: Uma explicação aprofundada do modelo de dados do dispositivo, que padroniza como as funcionalidades e capacidades dos dispositivos são representadas no ecossistema Matter.

## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
