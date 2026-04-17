---
description: Guia para gravar firmware no seu SenseCAP Watcher Agent
title: Acionamento Visual e Flash de IA
sidebar_position: 4
keywords:
  - SenseCAP
  - Watcher
  - Agent
  - Firmware
  - Flash
  - Visual
  - Activate
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /visual_trigger_and_ai_flash
last_update:
  date: 12/04/2025
  author: Twelve
translation:
  skip:
    - zh-CN
createdAt: '2025-10-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/visual_trigger_and_ai_flash/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Gravando Modelos de IA no SenseCAP Watcher

## Visão Geral

Agradecimentos especiais ao [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por suas contribuições de código aberto que tornaram este projeto possível.

Este guia se concentra em como gravar no SenseCAP Watcher o firmware de Conversação Acionada por Reconhecimento Visual e em como substituir ou atualizar o modelo de IA no dispositivo. Ele é destinado como um guia prático e instrucional para essas operações.

Para uma introdução completa aos recursos, aplicações e casos de uso do Watcher, consulte: [SenseCAP Watcher - AI Assistant that actively interacts with the world](https://wiki.seeedstudio.com/pt-br/solutions/hello_watcher_llms/)

## Pré-requisitos

### Hardware Necessário

- Dispositivo SenseCAP Watcher  
- Cabo de dados USB Tipo-C  
- PC com Windows  

:::note
Se você estiver gravando o **Firmware de Ativação Visual** e o modelo do seu dispositivo Watcher **não for -EN**, você também precisará gravar manualmente o arquivo de autenticação para o uso normal (necessário apenas uma vez).  
Para instruções detalhadas, consulte o [Guia de Gravação de Firmware do Watcher Agent](https://wiki.seeedstudio.com/pt-br/flash_watcher_agent_firmware/).
:::

## Processo de Gravação de Firmware

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI" default>

<!-- :::caution Note
The following guide is for an internal testing website that has not yet been released.
The official version will be available soon.
Please use another method to flash the firmware for now.
::: -->

- Pré-requisitos

  - [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

- Etapa 1. Abra nossa plataforma e selecione SenseCAP Watcher em Workspace

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>

- Etapa 2. Conecte-se à nossa plataforma pela porta serial

  -  Clique em `Connect` 

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

  - Selecione a porta serial correta (terminando com “A”)

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

  :::note
  Se você estiver usando macOS ou Linux, escolha a porta com o número menor.
  :::

  - Clique em `Connect`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

- Etapa 3. Verificar e Atualizar a Versão do Dispositivo

  - Clique em `Update`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI9.png" style={{width:500, height:'auto'}}/></div>

  - Selecione a porta serial correta (terminando com "B")
  :::note
  Se você estiver usando macOS ou Linux, escolha a porta com o número maior.
  :::

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI10.png" style={{width:500, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div> 

  - Clique em 'Connect'

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI11.png" style={{width:500, height:'auto'}}/></div>

  - Selecione a versão que você deseja gravar e clique em `Confirm`

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI12.png" style={{width:500, height:'auto'}}/></div>

  - Aguarde o processo de atualização e reinicialização

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI13.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher1" label="Flash Download Tool">

- Pré-requisitos

  - **Firmware de Acionamento Visual v2.0.4**: [Link para Download](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 ou posterior)

- Etapa 1. Conecte ao dispositivo (porta Type-C na parte inferior do dispositivo) e abra o seu Flash Download Tool

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

- Etapa 2. Configurar as Definições de Firmware

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

- Etapa 3. Selecionar Porta COM e Configurações de Gravação

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

  - Se a gravação não iniciar após clicar em START, clique em STOP e confirme se você selecionou a porta COM terminando com “B”.
    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

- Etapa 4. Apagar e Gravar
  - Clique no botão `ERASE` para limpar o firmware existente
  - Aguarde a conclusão do processo de apagamento
  - Clique no botão `START` para iniciar a gravação
  - Você deverá ver informações de progresso na janela de log
  - Se não houver progresso ou ocorrer falha, tente a outra porta COM

- Etapa 5. Verificar o Sucesso

  - O processo de gravação é concluído quando você vê a mensagem de sucesso na janela de log.

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

- Etapa 6. Reiniciar o Dispositivo

  - Localize o orifício de reset no seu dispositivo Watcher
  - Use um pino para pressionar gentilmente o botão de reset
  - O dispositivo será reiniciado com o novo firmware

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher2" label="Command Line" default>

- Pré-requisitos

  - **Firmware de Acionamento Visual v2.0.4**: [Link para Download](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [esptool.py](https://github.com/espressif/esptool)

- Etapa 1. Extraia o pacote de firmware baixado e use o esptool.py para realizar a gravação

  ```shell
  esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
  ```
  *(Observação: ajuste a porta `/dev/ttyACM0` de acordo com o seu sistema, por exemplo, `COM3` no Windows)*

- Etapa 2. Reiniciar o Dispositivo

  - Localize o orifício de reset no seu dispositivo Watcher
  - Use um pino para pressionar gentilmente o botão de reset
  - O dispositivo será reiniciado com o novo firmware

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="compile" label="Compile from Source (For Developers)">
- Pré-requisitos

  - [ESP-IDF v5.5.1](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html#manual-installation)

  - [Repositório Open-Source (Colaboração Xiaozhi AI)](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

- Etapa 1. Abra o ESP-IDF CMD e navegue até a pasta do projeto
  ```shell
  cd xiaozhi-esp32
  ```

- Etapa 2. Defina o chip de destino
  ```shell
  idf.py set-target esp32s3
  ```

- Etapa 3. Abrir o menu de configuração
  ```shell
  idf.py menuconfig
  ```

- Etapa 4. Definir o Tipo de Placa como SenseCAP Watcher

  - Selecione o Xiaozhi Assistant

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig1.png" style={{width:700, height:'auto'}}/></div>

  - Selecione o Tipo de Placa

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig2.png" style={{width:700, height:'auto'}}/></div>

  - Selecione SenseCAP Watcher

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig3.png" style={{width:700, height:'auto'}}/></div>

- Etapa 5. Configurar Definições Adicionais de Acordo com Suas Necessidades (Opcional)

  - Idioma de exibição padrão e AEC (Cancelamento Automático de Eco / tratamento de interrupção de voz)

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig4.png" style={{width:700, height:'auto'}}/></div>

  - Palavras de ativação e gatilhos

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig5.png" style={{width:700, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig6.png" style={{width:700, height:'auto'}}/></div>

  - Outros parâmetros opcionais específicos para a sua aplicação

  - Após concluir sua configuração, salve e saia do menu

- Etapa 7. Compilar e gravar o firmware
  ```shell
  idf.py build flash
  ```

</TabItem>
</Tabs>

:::note
Apenas firmware na versão 1.8.8 ou superior oferece suporte à funcionalidade de despertar visual.
Firmware acima da versão v2.0.3 requer dizer “Turn on the inference switch” para Xiaozhi para habilitar a detecção visual.
:::

## Processo de Gravação do Modelo de IA

### Pré-requisitos
- [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

### Etapa 1. Abra nossa plataforma e selecione SenseCAP Watcher em Workspace

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>

### Etapa 2. Conecte-se à nossa plataforma pela porta serial

- Clique em `Connect` 
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- Selecione a porta serial correta (terminando com “A”)
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>
:::note
Se você estiver usando macOS ou Linux, escolha a porta com o número menor.
:::

- Clique em `Connect`
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

### Etapa 3. Ver o modelo existente e alterar para um novo modelo

- Ver o nome do modelo e a versão do modelo

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI5.png" style={{width:500, height:'auto'}}/></div>

- Clique em `Select Model...` e clique no modelo que você deseja gravar

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI6.png" style={{width:500, height:'auto'}}/></div>

- Clique em `Confirm`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI7.png" style={{width:500, height:'auto'}}/></div>

### Etapa 4. Visualizar o efeito e ajustar o parâmetro  

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI8.png" style={{width:400, height:'auto'}}/></div>

A função atual de despertar visual oferece as seguintes opções de configuração:

- **ID de Alvo** (`target`): Especifica o ID do alvo a ser detectado. Esse ID depende do modelo visual usado; o valor padrão é 0.
- **Duração da Detecção** (`duration`): A unidade é segundos, usada para ajustar a sensibilidade do despertar visual. O padrão é 1 segundo (esse padrão não inclui o processamento de debounce de 1 segundo).
- **Limite de Confiança** (`threshold`): O limite inferior de confiança para o modelo visual reconhecer um objeto, usado para ajustar a sensibilidade da detecção. Representado como uma porcentagem, o padrão é 75%.
- **Período de Resfriamento** (`interval`): A unidade é segundos, indicando o tempo de espera necessário após o término de uma conversa antes de disparar novamente, usado para evitar interrupções frequentes pelo mesmo objeto. O padrão é 8 segundos.

Por exemplo, você pode ajustar a sensibilidade do modelo modificando o parâmetro `threshold`. Se você achar que o limite atual está muito rigoroso, basta dizer ao Watcher: "Please set the confidence threshold to 60%".

## Solução de Problemas

### Problemas Comuns

1. **Nenhuma porta COM detectada**
   - Certifique-se de que você está usando a porta Type-C inferior
   - Tente usar um cabo USB diferente
   - Verifique se os drivers USB estão instalados corretamente

2. **Falha ao gravar**
   - Ao gravar o Himax, selecione a porta COM terminando com “A”.
   - Ao gravar o ESP32-S3, selecione a porta COM terminando com “B”.

3. **O dispositivo não responde**
   - Use um pino para pressionar suavemente o botão de reset
   - Tente apagar antes de gravar

4. **O dispositivo não acorda com detecção visual**
   - Verifique se há mensagens de log relevantes na saída serial.
   - A versão de firmware v2.0.3 exige dizer “Turn on inference switch” para Xiaozhi para habilitar essa função.

5. **O serial mostra logs de reconhecimento visual, mas o dispositivo ainda não consegue acordar**
   - Vá para a plataforma SenseCraft AI e grave o modelo Person no chip de IA.

## Perguntas Frequentes (FAQ)

**P: Posso gravar outros modelos de IA no Himax?**

R: No momento, apenas os modelos Face e Person são compatíveis. A gravação de outros modelos ainda não é suportada e estará disponível em uma atualização futura.

## Suporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>