---
description: recamera_pro_ai_inference
title: Inferência de IA
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_ai_inference_legacy
draft: true
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_ai_inference_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Build_Your_App/configure_detection.md (https://wiki.seeedstudio.com/pt-br/recamera_pro_ai_inference/), which now serves the original slug /recamera_pro_ai_inference. This file is kept for history as a draft (slug /recamera_pro_ai_inference_legacy) and is excluded from production builds. Do not link here. -->

## Índice de Migração de Conteúdo (Página Legada)

| Seção original | Novo local |
| --- | --- |
| Visão geral de recursos, Configuração de modelo, Configuração de inferência, Monitoramento em tempo real | [Configure Detection](https://wiki.seeedstudio.com/pt-br/recamera_pro_ai_inference/) (este slug) |
| Gerenciamento de modelo, Enviar modelo | [Upload and Configure an RKNN Model](https://wiki.seeedstudio.com/pt-br/recamera_pro_rknn_upload/) |
| Conversão de modelo SenseCraft | [SenseCraft ONNX-to-RKNN](https://wiki.seeedstudio.com/pt-br/recamera_pro_sensecraft/) |
| Configuração de saída de inferência | [HTTP/UART Results](https://wiki.seeedstudio.com/pt-br/recamera_pro_http_uart/), [MQTT](https://wiki.seeedstudio.com/pt-br/recamera_pro_mqtt/) |
| Resumo de formato/compatibilidade de modelo | [Model Compatibility and Output Formats](https://wiki.seeedstudio.com/pt-br/recamera_pro_model_compatibility/) |
| Referência de campos da Web UI | [Web UI Reference](https://wiki.seeedstudio.com/pt-br/recamera_pro_webui_reference/) |

A reCamera Pro fornece uma página integrada de gerenciamento de inferência de IA, permitindo que os usuários gerenciem modelos diretamente, façam upload de modelos, convertam modelos, configurem parâmetros de inferência, visualizem o status de inferência em tempo real e configurem a saída dos resultados de inferência dentro da Web UI. Esta página é adequada para cenários como detecção de objetos, reconhecimento industrial, monitoramento de segurança, acionamento de eventos e desenvolvimento de aplicações de IA de borda.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

Após entrar na Web UI, clique em **AI Inference** no menu lateral esquerdo para acessar a página de configuração de inferência de IA.

## Visão Geral de Recursos

A página de Inferência de IA inclui principalmente os seguintes módulos funcionais:

- **Model Management**: visualizar, configurar, excluir ou enviar arquivos de modelo.
- **SenseCraft Model Conversion**: converter modelos ONNX em modelos RKNN que a reCamera Pro pode executar.
- **Inference Configuration**: selecionar o modelo a ser executado, definir habilitação/desabilitação da inferência e configurar a frequência de inferência.
- **Real-time Inference Monitoring**: visualizar resultados de saída do modelo e status de inferência em tempo real.
- **Inference Output Configuration**: enviar resultados de inferência para sistemas externos via HTTP, MQTT ou UART.

Por meio desta página, os usuários podem concluir a implantação do modelo e a configuração de inferência sem usar a linha de comando.

## Gerenciamento de Modelo

A área de Gerenciamento de Modelo é usada para exibir modelos de IA que já foram enviados ou que são integrados ao dispositivo atual. A lista mostrará o arquivo de modelo, nome do modelo, framework de inferência, tipo de algoritmo, tipo de tarefa, versão, tamanho do arquivo e operações disponíveis.

As descrições de campos comuns são as seguintes:

| Campo        | Descrição                               |
| ------------ | ----------------------------------------- |
| Model File   | O nome de arquivo do modelo atual no dispositivo |
| Model Name   | O nome de exibição do modelo               |
| Framework    | O framework de execução do modelo, por exemplo, RKNN   |
| Algorithm    | O tipo de algoritmo do modelo, por exemplo, YOLO, nanodet |
| Type         | O tipo de tarefa do modelo, por exemplo, Detection      |
| Version      | Informações de versão do modelo                   |
| Size         | Tamanho do arquivo de modelo                           |
| Operations   | Suporta configuração ou exclusão de modelo    |

A reCamera Pro pode usar modelos de detecção integrados e também suporta o envio de modelos personalizados pelos usuários. Para cenários de detecção de objetos, os usuários podem escolher diferentes modelos com base em suas necessidades de aplicação, como detecção de pessoas, detecção de capacete de segurança, detecção de segurança em construção, detecção de veículos, etc.

## Upload de Modelo

Os usuários podem clicar no botão **Upload Model** para enviar arquivos de modelo locais para a reCamera Pro. A janela de upload suporta arrastar e soltar arquivos ou selecionar arquivos manualmente.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

A página atual suporta o envio de arquivos de modelo RKNN. Após o upload, o modelo aparecerá na lista de Gerenciamento de Modelo, e os usuários poderão continuar configurando informações do modelo, categorias e parâmetros de pós-processamento.

O upload de modelos é adequado para os seguintes cenários:

- Uso de modelos de detecção treinados pelo usuário
- Substituição de modelos padrão
- Implantação de modelos específicos de setor
- Adição de novas categorias de reconhecimento com base nos requisitos do projeto

## Conversão de Modelo SenseCraft

A página de Inferência de IA fornece uma entrada para **View SenseCraft Models**. Os usuários podem entrar na interface de conversão de modelo SenseCraft para converter modelos ONNX em modelos RKNN que a reCamera Pro pode executar.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

Na interface de conversão de modelo, os usuários podem criar tarefas de conversão, enviar arquivos de modelo ONNX e, opcionalmente, enviar um conjunto de dados de quantização. Se nenhum conjunto de dados de quantização for fornecido, o sistema pode usar um conjunto de dados padrão para concluir a conversão.

O processo de conversão é o seguinte:

1. Clique em **View SenseCraft Models**.
2. Selecione o arquivo de modelo ONNX a ser convertido.
3. Envie um conjunto de dados de quantização conforme necessário.
4. Clique em **Start Conversion**.
5. Após a conclusão da conversão, implante o modelo RKNN gerado na reCamera Pro para execução.

Este recurso reduz a barreira para os usuários implantarem modelos, permitindo que convertam rapidamente modelos ONNX auto-treinados em modelos executáveis no dispositivo.

## Configuração de Modelo

Cada modelo pode acessar a página **Configure** para definir informações básicas do modelo, categorias de detecção e parâmetros de pós-processamento.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

A configuração de modelo oferece suporte aos seguintes itens:

| Item de configuração | Descrição                               |
| ------------------ | ----------------------------------------- |
| Model Name         | Definir o nome de exibição do modelo         |
| Framework          | Selecionar o framework de execução do modelo, por exemplo, RKNN |
| Version            | Definir as informações de versão do modelo           |
| Type               | Definir o tipo de tarefa do modelo, por exemplo, Object Detection |
| Algorithm          | Selecionar o algoritmo do modelo, por exemplo, YOLOv5 |
| Author             | Inserir informações do autor do modelo            |
| Description        | Adicionar descrição do modelo                     |
| Detection Categories | Definir os nomes das categorias de saída do modelo |
| Post-processing Configuration | Definir parâmetros como IOU, Confidence, max_obj |

Para modelos de detecção definidos pelo usuário, as categorias de detecção podem ser adicionadas manualmente na página de configuração ou uma lista de categorias pode ser importada em lote por meio de um arquivo TXT. Após configurar as categorias, os resultados de inferência serão exibidos e enviados de acordo com os nomes de categorias definidos pelo usuário.

Os parâmetros de pós-processamento são usados para controlar a filtragem e a saída dos resultados de detecção, por exemplo:

| Parâmetro   | Descrição                                     |
| ----------- | ----------------------------------------------- |
| IOU         | Limite de Intersection over Union para supressão não máxima de caixas delimitadoras |
| Confidence  | Limite de confiança para detecção de objetos           |
| max_obj     | Número máximo de objetos a serem enviados por quadro   |

Após a configuração, clique em **Save** para aplicar a configuração do modelo.

## Configuração de Inferência

A área de Configuração de Inferência é usada para controlar o status de execução e o modelo selecionado da tarefa de inferência de IA.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

Os usuários podem configurar os seguintes parâmetros:

| Parâmetro         | Descrição                               |
| ----------------- | ----------------------------------------- |
| Inference Enable  | Habilitar ou desabilitar a função de inferência de IA   |
| Running Model     | Selecionar o modelo a ser executado atualmente         |
| Inference Frequency (FPS) | Definir a frequência de inferência do modelo       |
| Inference Status  | Exibir se a tarefa de inferência atual está em execução |
| Real-time Inference FPS | Exibir a taxa de quadros de inferência real atual |

Os usuários podem selecionar um modelo da lista de modelos como o modelo em execução no momento e definir a frequência de inferência usando um controle deslizante. Após a configuração, clique em **Save Configuration** para iniciar ou atualizar a tarefa de inferência.

O lado direito da página exibe o status de inferência atual, como **Running**, e mostra a taxa de quadros de inferência real atual, facilitando para os usuários determinar se o modelo está sendo executado normalmente.

## Monitoramento de Inferência em Tempo Real

A página de Inferência de IA fornece uma área de monitoramento de saída de inferência em tempo real para visualização dos resultados de inferência do modelo. Os resultados de inferência são exibidos em tempo real como logs, facilitando para os desenvolvedores depurar a saída do modelo, verificar coordenadas de caixas delimitadoras, IDs de classe, pontuações de confiança e carimbos de tempo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

A saída em tempo real normalmente inclui as seguintes informações:

| Campo              | Descrição                     |
| ------------------ | ------------------------------- |
| timestamp          | Carimbo de tempo do resultado de inferência      |
| task_type          | Tipo de tarefa atual               |
| class_id           | ID da classe detectada               |
| class_name         | Nome da classe detectada             |
| score              | Confiança da detecção            |
| bbox               | Coordenadas da caixa delimitadora        |
| detection_count    | Número de objetos detectados no quadro atual |

A página fornece funções de controle de saída em tempo real, como desabilitar monitoramento, pausar a exibição em tempo real, limpar logs, etc., tornando conveniente para os usuários observar e gerenciar o conteúdo de saída durante a depuração.

## Configuração de Saída de Inferência

Além de visualizar logs de inferência em tempo real na interface Web, a reCamera Pro também oferece suporte à saída de resultados de inferência para sistemas externos. Os usuários podem selecionar o modelo de saída, o tipo de tarefa e o método de saída em **Configuração de Saída de Inferência**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

Os métodos de saída suportados incluem:

- HTTP
- MQTT
- UART

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
