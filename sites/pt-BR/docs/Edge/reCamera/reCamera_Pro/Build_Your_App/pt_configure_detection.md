---
description: Escolha qual modelo de IA executar, configure classes de detecção, defina limites de confiança e IOU, controle a frequência de inferência e monitore a saída em tempo real na reCamera Pro.
title: "Configurar Detecção: Classes, Limiares e Frequência"
keywords:
  - reCamera
  - reCamera Pro
  - AI inference
  - detection
  - confidence
  - IOU
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_inference
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_ai_inference/
---

# Configurar Detecção: Classes, Limiares e Frequência

A reCamera Pro possui uma página integrada de gerenciamento de inferência de IA na interface Web. Você pode gerenciar modelos, enviar modelos, converter modelos, configurar parâmetros de inferência e monitorar resultados de inferência em tempo real — tudo sem usar a linha de comando.

Após fazer login, clique em **AI Inference** no menu à esquerda.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

## Visão geral de recursos

A página AI Inference possui estes módulos:

- **Model Management** — visualizar, configurar, excluir ou enviar arquivos de modelo
- **SenseCraft Model Conversion** — converter modelos ONNX para RKNN
- **Inference Configuration** — selecionar o modelo em execução, ativar/desativar a inferência, definir a frequência de inferência
- **Real-time Inference Monitoring** — visualizar a saída do modelo enquanto ele é executado
- **Inference Output Configuration** — enviar resultados para sistemas externos via HTTP, MQTT ou UART

## Gerenciamento de modelos

A área Model Management lista os modelos que são integrados ou enviados para o dispositivo. Campos comuns:

| Campo | Descrição |
|---|---|
| Model File | Nome do arquivo no dispositivo |
| Model Name | Nome de exibição |
| Framework | Framework de execução, por exemplo, RKNN |
| Algorithm | Tipo de algoritmo, por exemplo, YOLO, nanodet |
| Type | Tipo de tarefa, por exemplo, Detecção |
| Version | Versão do modelo |
| Size | Tamanho do arquivo |
| Operations | Configurar ou excluir |

A reCamera Pro oferece suporte a modelos de detecção integrados e modelos personalizados enviados pelo usuário. Para detecção de objetos, você pode escolher modelos para detecção de pessoas, detecção de capacete de segurança, segurança em construção, detecção de veículos etc.

### Enviar um modelo

Clique em **Upload Model** para enviar arquivos de modelo locais. A janela de envio oferece suporte a arrastar e soltar ou seleção manual.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

A página atualmente oferece suporte ao envio de arquivos de modelo RKNN. Após o envio, o modelo aparece em Model Management, onde você pode configurar seu nome, categorias e parâmetros de pós-processamento.

### Configurar um modelo

Cada modelo possui uma página **Configure** para informações básicas, categorias de detecção e parâmetros de pós-processamento.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

| Item de configuração | Descrição |
|---|---|
| Model Name | Nome de exibição |
| Framework | Framework de execução, por exemplo, RKNN |
| Version | Versão do modelo |
| Type | Tipo de tarefa, por exemplo, Detecção de Objetos |
| Algorithm | Algoritmo, por exemplo, YOLOv5 |
| Author | Informações do autor |
| Description | Descrição do modelo |
| Detection Categories | Nomes das categorias de saída do modelo |
| Post-processing Configuration | IOU, Confidence, max_obj |

As categorias de detecção podem ser adicionadas manualmente ou importadas em lote a partir de um arquivo TXT. Após configurar as categorias, os resultados de inferência são exibidos e enviados usando os nomes de categoria definidos por você.

**Parâmetros de pós-processamento** controlam como os resultados de detecção são filtrados:

| Parâmetro | Descrição |
|---|---|
| IOU | Limite de Intersection over Union para supressão não máxima de caixas delimitadoras |
| Confidence | Limite de confiança para detecção de objetos |
| max_obj | Número máximo de objetos enviados por quadro |

Confiança menor = mais detecções (mais falsos positivos). IOU maior = menos caixas duplicadas. Ajuste esses valores para o seu cenário.

{/* TODO(verify): document recommended confidence/IOU ranges for common scenarios, and confirm max_obj upper limit on production firmware */}

Clique em **Save** para aplicar.

## Configuração de inferência

A área Inference Configuration controla se a inferência de IA está em execução e qual modelo está ativo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

| Parâmetro | Descrição |
|---|---|
| Inference Enable | Ativar ou desativar a inferência de IA |
| Running Model | Selecionar qual modelo executar |
| Inference Frequency (FPS) | Quantos quadros por segundo executar a inferência |
| Inference Status | Se a tarefa de inferência está em execução no momento |
| Real-time Inference FPS | Taxa de quadros de inferência real |

Selecione um modelo, defina a frequência de inferência com o controle deslizante e clique em **Save Configuration**. O lado direito mostra o status atual (por exemplo, **Running**) e o FPS real.

{/* TODO(verify): confirm maximum supported inference frequency and behavior when FPS exceeds model throughput */}

## Monitoramento de inferência em tempo real

A página fornece um log em tempo real da saída de inferência para depurar coordenadas de caixas delimitadoras, IDs de classe, escores de confiança e carimbos de data e hora.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

| Campo | Descrição |
|---|---|
| timestamp | Carimbo de data e hora do resultado de inferência |
| task_type | Tipo de tarefa atual |
| class_id | ID da classe detectada |
| class_name | Nome da classe detectada |
| score | Confiança da detecção |
| bbox | Coordenadas da caixa delimitadora |
| detection_count | Número de objetos detectados no quadro atual |

A área de monitoramento oferece suporte a desativar, pausar e limpar o log.

## Conectar detecção à gravação e saída

Depois que a detecção estiver configurada, você poderá usar os resultados de inferência para:

- **Acionar gravações** — consulte [Configurar Gravação de Eventos](/pt-br/recamera_pro_record_settings/) (AI Inference Trigger)
- **Enviar resultados via MQTT** — consulte [Enviar Resultados de Detecção via MQTT](/pt-br/recamera_pro_mqtt/)
- **Enviar resultados via HTTP ou UART** — consulte [Enviar Resultados de Detecção via HTTP/UART](/pt-br/recamera_pro_http_uart/)

## Páginas relacionadas

- [Enviar e Configurar um Modelo RKNN](/pt-br/recamera_pro_rknn_upload/)
- [Conversão SenseCraft de ONNX para RKNN](/pt-br/recamera_pro_sensecraft/)
- [Qualidade de Imagem e Baixa Luminosidade](/pt-br/recamera_pro_image_quality/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
