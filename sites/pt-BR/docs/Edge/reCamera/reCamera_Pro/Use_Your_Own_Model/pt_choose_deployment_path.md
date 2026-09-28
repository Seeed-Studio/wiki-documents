---
description: Escolha como implantar um modelo de IA personalizado no reCamera Pro — envie um modelo RKNN pré-treinado, converta ONNX via SenseCraft ou use o RKNN-Toolkit2 localmente.
title: Escolha um Caminho de Implantação de Modelo
keywords:
  - reCamera
  - reCamera Pro
  - implantação de modelo
  - RKNN
  - SenseCraft
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_model_path/
---

# Escolha um Caminho de Implantação de Modelo

O reCamera Pro oferece suporte à implantação de modelos de IA personalizados para detecção de objetos, classificação e outras tarefas. Esta página ajuda você a escolher o caminho certo com base no formato do seu modelo e no fluxo de trabalho.

## Três caminhos de implantação

| Caminho | Quando usar | Nível de habilidade |
|---|---|---|
| **Enviar um modelo RKNN pré-treinado** | Você já tem um arquivo de modelo RKNN (`.rknn`) | Iniciante |
| **Converter ONNX para RKNN via SenseCraft** | Você tem um modelo ONNX e deseja conversão em nuvem | Iniciante–Intermediário |
| **Converter ONNX para RKNN via RKNN-Toolkit2** | Você quer controle total sobre quantização (INT8/FP16) e calibração | Intermediário–Avançado |

## Caminho 1: Enviar um modelo RKNN pré-treinado

Se você já tem um arquivo de modelo `.rknn`, envie-o diretamente pela interface Web.

→ [Enviar e Configurar um Modelo RKNN](/pt-br/recamera_pro_rknn_upload/)

## Caminho 2: Conversão em nuvem com SenseCraft

A plataforma SenseCraft converte modelos ONNX para o formato RKNN na nuvem, com quantização opcional. Nenhuma ferramenta local é necessária.

→ [Conversão ONNX-para-RKNN com SenseCraft](/pt-br/recamera_pro_sensecraft/)

## Caminho 3: Conversão local com RKNN-Toolkit2

Para controle total sobre parâmetros de quantização, conjuntos de dados de calibração e otimização de modelo, use o RKNN-Toolkit2 no seu PC.

→ [Conversão com RKNN-Toolkit2](/pt-br/recamera_pro_rknn_model_conversion/)

## Depois da implantação

Depois que o seu modelo estiver no dispositivo:

1. [Configurar Detecção](/pt-br/recamera_pro_ai_inference/) — defina classes, limiares e frequência de inferência
2. [Validar Desempenho do Modelo](/pt-br/recamera_pro_model_validate/) — verifique FPS, precisão e uso de recursos
3. [Compatibilidade de Modelo](/pt-br/recamera_pro_model_compatibility/) — operadores suportados e formatos de quantização

## Páginas relacionadas

- [Enviar e Configurar um Modelo RKNN](/pt-br/recamera_pro_rknn_upload/)
- [Conversão ONNX-para-RKNN com SenseCraft](/pt-br/recamera_pro_sensecraft/)
- [Conversão com RKNN-Toolkit2](/pt-br/recamera_pro_rknn_model_conversion/)
- [Validar Desempenho do Modelo](/pt-br/recamera_pro_model_validate/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
