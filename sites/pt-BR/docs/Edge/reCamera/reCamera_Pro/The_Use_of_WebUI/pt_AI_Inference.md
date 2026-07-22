---
description: recamera_pro_ai_inference
title: Inferência de IA
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_ai_inference
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_ai_inference/
---

A reCamera Pro oferece uma página integrada de gerenciamento de inferência de IA, permitindo que os usuários gerenciem modelos diretamente, façam upload de modelos, convertam modelos, configurem parâmetros de inferência, visualizem o status de inferência em tempo real e configurem a saída dos resultados de inferência na Web UI. Esta página é adequada para cenários como detecção de objetos, reconhecimento industrial, monitoramento de segurança, acionamento de eventos e desenvolvimento de aplicações de IA de borda.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

Após entrar na Web UI, clique em **AI Inference** no menu à esquerda para acessar a página de configuração de inferência de IA.

## Visão geral dos recursos

A página de Inferência de IA inclui principalmente os seguintes módulos funcionais:

- **Gerenciamento de modelos**: visualizar, configurar, excluir ou fazer upload de arquivos de modelo.
- **Conversão de modelos SenseCraft**: converter modelos ONNX em modelos RKNN que a reCamera Pro pode executar.
- **Configuração de inferência**: selecionar o modelo a ser executado, ativar/desativar a inferência e configurar a frequência de inferência.
- **Monitoramento de inferência em tempo real**: visualizar resultados de saída do modelo e status de inferência em tempo real.
- **Configuração de saída de inferência**: enviar resultados de inferência para sistemas externos via HTTP, MQTT ou UART.

Por meio desta página, os usuários podem concluir a implantação do modelo e a configuração de inferência sem usar a linha de comando.

## Gerenciamento de modelos

A área de Gerenciamento de Modelos é usada para exibir modelos de IA que já foram enviados ou que são integrados ao dispositivo atual. A lista exibirá o arquivo do modelo, nome do modelo, framework de inferência, tipo de algoritmo, tipo de tarefa, versão, tamanho do arquivo e operações disponíveis.

As descrições dos campos comuns são as seguintes:

| Campo        | Descrição                               |
| ------------ | ----------------------------------------- |
| Model File   | O nome do arquivo do modelo atual no dispositivo |
| Model Name   | O nome de exibição do modelo               |
| Framework    | O framework de execução do modelo, por exemplo, RKNN   |
| Algorithm    | O tipo de algoritmo do modelo, por exemplo, YOLO, nanodet |
| Type         | O tipo de tarefa do modelo, por exemplo, Detecção      |
| Version      | Informações de versão do modelo                   |
| Size         | Tamanho do arquivo do modelo                           |
| Operations   | Suporta configuração ou exclusão do modelo    |

A reCamera Pro pode usar modelos de detecção integrados e também suporta o envio de modelos personalizados pelos usuários. Para cenários de detecção de objetos, os usuários podem escolher diferentes modelos com base em suas necessidades de aplicação, como detecção de pessoas, detecção de capacetes, detecção de segurança em obras, detecção de veículos, etc.

## Fazer upload de modelo

Os usuários podem clicar no botão **Upload Model** para enviar arquivos de modelo locais para a reCamera Pro. A janela de upload suporta arrastar e soltar arquivos ou selecioná-los manualmente.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

A página atual suporta o envio de arquivos de modelo RKNN. Após o upload, o modelo aparecerá na lista de Gerenciamento de Modelos, e os usuários poderão continuar configurando informações do modelo, categorias e parâmetros de pós-processamento.

O envio de modelos é adequado para os seguintes cenários:

- Uso de modelos de detecção treinados pelo usuário
- Substituição de modelos padrão
- Implantação de modelos específicos de setor
- Adição de novas categorias de reconhecimento com base nos requisitos do projeto

## Conversão de modelos SenseCraft

A página de Inferência de IA fornece uma entrada para **View SenseCraft Models**. Os usuários podem acessar a interface de conversão de modelos SenseCraft para converter modelos ONNX em modelos RKNN que a reCamera Pro pode executar.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

Na interface de conversão de modelos, os usuários podem criar tarefas de conversão, enviar arquivos de modelo ONNX e, opcionalmente, enviar um conjunto de dados de quantização. Se nenhum conjunto de dados de quantização for fornecido, o sistema poderá usar um conjunto de dados padrão para concluir a conversão.

O processo de conversão é o seguinte:

1. Clique em **View SenseCraft Models**.
2. Selecione o arquivo de modelo ONNX a ser convertido.
3. Envie um conjunto de dados de quantização conforme necessário.
4. Clique em **Start Conversion**.
5. Após a conclusão da conversão, implante o modelo RKNN gerado na reCamera Pro para execução.

Esse recurso reduz a barreira para os usuários implantarem modelos, permitindo que convertam rapidamente modelos ONNX treinados por eles em modelos executáveis no dispositivo.

## Configuração de modelo

Cada modelo pode acessar a página **Configure** para definir informações básicas do modelo, categorias de detecção e parâmetros de pós-processamento.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

A configuração de modelo oferece suporte aos seguintes itens:

| Item de configuração | Descrição                               |
| ------------------ | ----------------------------------------- |
| Model Name         | Definir o nome de exibição do modelo         |
| Framework          | Selecionar o framework de execução do modelo, por exemplo, RKNN |
| Version            | Definir as informações de versão do modelo           |
| Type               | Definir o tipo de tarefa do modelo, por exemplo, Detecção de Objetos |
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
| max_obj     | Número máximo de objetos a serem exibidos por quadro   |

Após a configuração, clique em **Save** para aplicar a configuração do modelo.

## Configuração de inferência

A área de Configuração de Inferência é usada para controlar o status de execução e o modelo selecionado da tarefa de inferência de IA.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

Os usuários podem configurar os seguintes parâmetros:

| Parâmetro         | Descrição                               |
| ----------------- | ----------------------------------------- |
| Inference Enable  | Ativar ou desativar a função de inferência de IA   |
| Running Model     | Selecionar o modelo a ser executado atualmente         |
| Inference Frequency (FPS) | Definir a frequência de inferência do modelo       |
| Inference Status  | Exibir se a tarefa de inferência atual está em execução |
| Real-time Inference FPS | Exibir a taxa de quadros de inferência real atual |

Os usuários podem selecionar um modelo da lista de modelos como o modelo em execução no momento e definir a frequência de inferência usando um controle deslizante. Após a configuração, clique em **Save Configuration** para iniciar ou atualizar a tarefa de inferência.

O lado direito da página exibe o status de inferência atual, como **Running**, e mostra a taxa de quadros de inferência real atual, facilitando para os usuários determinar se o modelo está sendo executado normalmente.

## Monitoramento de inferência em tempo real

A página de Inferência de IA fornece uma área de monitoramento de saída de inferência em tempo real para visualizar os resultados de inferência do modelo. Os resultados de inferência são exibidos em tempo real como logs, facilitando para os desenvolvedores depurar a saída do modelo, verificar coordenadas de caixas delimitadoras, IDs de classe, pontuações de confiança e carimbos de tempo.

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

A página oferece funções de controle de saída em tempo real, como desativar o monitoramento, pausar a exibição em tempo real, limpar logs, etc., facilitando para os usuários observar e gerenciar o conteúdo de saída durante a depuração.

## Configuração de saída de inferência

Além de visualizar logs de inferência em tempo real na Web UI, a reCamera Pro também suporta o envio de resultados de inferência para sistemas externos. Os usuários podem selecionar o modelo de saída, tipo de tarefa e método de saída em **Inference Output Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

Os métodos de saída suportados incluem:

- HTTP
- MQTT
- UART

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
