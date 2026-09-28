---
description: Envie um arquivo de modelo RKNN para a reCamera Pro, configure categorias de detecção e defina parâmetros de pós-processamento.
title: Enviar e Configurar um Modelo RKNN
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - model upload
  - detection categories
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_upload
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_rknn_upload/
---

# Enviar e Configurar um Modelo RKNN

Se você já tem um arquivo de modelo `.rknn` (veja [Escolher um Caminho de Implantação de Modelo](/pt-br/recamera_pro_model_path/)), envie-o para a reCamera Pro e configure-o pela interface Web.

## Enviar um modelo

1. Na interface Web, vá para **AI Inference** → **Model Management**.
2. Clique em **Upload Model**.
3. Arraste e solte ou selecione seu arquivo `.rknn`.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

Após o envio, o modelo aparece na lista de Model Management.

{/* TODO(verify): confirm maximum model file size limit and whether multiple models can be stored simultaneously */}

## Campos do modelo

| Campo | Descrição |
|---|---|
| Model File | Nome do arquivo no dispositivo |
| Model Name | Nome de exibição |
| Framework | Framework de execução (RKNN) |
| Algorithm | Tipo de algoritmo, por exemplo YOLO, nanodet |
| Type | Tipo de tarefa, por exemplo Detecção |
| Version | Versão do modelo |
| Size | Tamanho do arquivo |
| Operations | Configurar ou excluir |

## Configurar o modelo

Cada modelo tem uma página **Configure** para definir informações básicas, categorias de detecção e parâmetros de pós-processamento.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

| Item de configuração | Descrição |
|---|---|
| Model Name | Nome de exibição |
| Framework | Framework de execução, por exemplo RKNN |
| Version | Versão do modelo |
| Type | Tipo de tarefa, por exemplo Detecção de Objetos |
| Algorithm | Algoritmo, por exemplo YOLOv5 |
| Author | Informações do autor |
| Description | Descrição do modelo |
| Detection Categories | Nomes das categorias de saída do modelo |
| Post-processing Configuration | IOU, Confidence, max_obj |

### Categorias de detecção

As categorias podem ser adicionadas manualmente ou importadas em lote a partir de um arquivo TXT. Após configurar as categorias, os resultados de inferência são exibidos e gerados usando os nomes das suas categorias.

### Parâmetros de pós-processamento

| Parâmetro | Descrição |
|---|---|
| IOU | Limite de Intersection over Union para supressão não máxima de caixas delimitadoras |
| Confidence | Limite de confiança para detecção de objetos |
| max_obj | Número máximo de objetos gerados por quadro |

{/* TODO(verify): confirm recommended IOU/Confidence defaults for common detection models (YOLOv5, nanodet) on reCamera Pro */}

Clique em **Save** para aplicar.

## Executar o modelo

1. Vá para **AI Inference** → **Inference Configuration**.
2. Ative a inferência, selecione o modelo enviado como **Running Model** e defina a frequência de inferência.
3. Clique em **Save Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## Páginas relacionadas

- [Escolher um Caminho de Implantação de Modelo](/pt-br/recamera_pro_model_path/)
- [Conversão SenseCraft ONNX-para-RKNN](/pt-br/recamera_pro_sensecraft/)
- [Configurar Detecção](/pt-br/recamera_pro_ai_inference/)
- [Validar Desempenho do Modelo](/pt-br/recamera_pro_model_validate/)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
