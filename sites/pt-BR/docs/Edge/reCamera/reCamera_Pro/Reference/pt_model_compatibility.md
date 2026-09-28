---
description: Quais formatos de modelo, frameworks, algoritmos e campos de saída a reCamera Pro suporta — um resumo de compatibilidade para implantar seus próprios modelos.
title: Compatibilidade de Modelos e Formatos de Saída
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RV1126B
  - model compatibility
  - inference output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_compatibility
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_model_compatibility/
---

# Compatibilidade de Modelos e Formatos de Saída

Esta página resume o que roda no NPU da reCamera Pro (Rockchip RV1126B, 3 TOPS, INT8/INT16 misto) e o que o pipeline de inferência produz como saída. Use-a como uma verificação rápida antes de investir tempo convertendo ou treinando um modelo.

## Formato de modelo suportado

| Item | Valor |
| --- | --- |
| Formato de modelo no dispositivo | RKNN (`.rknn`), compilado para **RV1126B** |
| Plataforma alvo necessária | `target_platform='rv1126b'` ao compilar com RKNN-Toolkit2 |
| Ferramenta de conversão | [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2**, no host (Linux x86_64 ou WSL 2, Python 3.6–3.12) |
| Alinhamento de runtime | Mantenha a versão do Toolkit alinhada com o RKNN Runtime fornecido no firmware da reCamera Pro |
| Precisão | FP16 (baseline não quantizado) e INT8 (quantizado com um conjunto de calibração) |
| Formatos de origem | ONNX (via RKNN-Toolkit2 ou conversão SenseCraft); checkpoints Ultralytics YOLO (`.pt`) podem exportar diretamente para RKNN |

- **Não** use `rknn-toolkit-lite2` para conversão — ele é uma biblioteca de runtime no dispositivo, não um conversor.
- Um modelo compilado para outro SoC Rockchip (por exemplo, RK3566/RK3588) não será executado no RV1126B.

Tutoriais de conversão: [Conversão com RKNN-Toolkit2](/pt-br/recamera_pro_rknn_model_conversion/) (host, scriptável) e [SenseCraft ONNX-para-RKNN](/pt-br/recamera_pro_sensecraft/) (no navegador, sem código).

## Famílias de modelos integrados e testados

O firmware é fornecido com modelos de detecção integrados, e a lista de Gerenciamento de Modelos na interface Web exibe estes atributos por modelo:

| Campo | Valores típicos |
| --- | --- |
| Framework | RKNN |
| Algoritmo | YOLO, nanodet |
| Tipo | Detecção |

Casos de uso testados/fornecidos incluem detecção de pessoas, detecção de capacete de segurança, detecção de segurança em construção e detecção de veículos.

<!-- TODO(verify): enumerate the exact list of built-in models (names, classes, sizes) shipped with the current firmware; confirm additional supported algorithms beyond YOLO/nanodet (e.g., classification, segmentation support level). -->

## Requisitos do contrato de entrada

Seu modelo ONNX deve ter um contrato de entrada conhecido e estático antes da conversão. O RKNN aplica `(input − mean) / std` uma vez — se a normalização já estiver dentro do grafo ONNX, use valores identidade (`mean=[0,0,0]`, `std=[1,1,1]`).

| Item | Requisito |
| --- | --- |
| Forma de entrada | Estática, batch-1 preferencialmente (por exemplo, `[1, 3, 640, 640]`) |
| Layout | NCHW ou NHWC, correspondendo ao grafo exportado |
| Ordem dos canais | RGB vs BGR deve corresponder ao treinamento — uma troca reduz severamente a acurácia |
| Política de redimensionamento | Esticar, recortar ou letterbox deve ser idêntico em tempo de execução |
| Operadores não suportados | Exporte novamente o modelo ONNX ou use um operador suportado semanticamente equivalente |

Inspecione o contrato com o [Netron](https://netron.app/) ou `model-inspect` antes de converter. Detalhes e solução de problemas: [Conversão com RKNN-Toolkit2](/pt-br/recamera_pro_rknn_model_conversion/).

## Classes personalizadas e pós-processamento

Modelos enviados são configurados na interface Web ([Enviar e Configurar um Modelo RKNN](/pt-br/recamera_pro_rknn_upload/), [Configurar Detecção](/pt-br/recamera_pro_ai_inference/)):

- **Categorias de Detecção** — defina manualmente os nomes das classes de saída ou importe em lote uma lista de categorias a partir de um arquivo TXT; os resultados de inferência então exibem seus próprios rótulos
- **Parâmetros de pós-processamento** — `IOU` (limiar de NMS), `Confidence` (limiar de detecção), `max_obj` (máximo de objetos por quadro)

## Formatos de saída de inferência

A saída de inferência em tempo real (monitoramento na interface Web, logs) usa estes campos:

| Campo | Descrição |
| --- | --- |
| `timestamp` | Timestamp do resultado de inferência |
| `task_type` | Tipo de tarefa atual |
| `class_id` | ID da classe detectada |
| `class_name` | Nome da classe detectada |
| `score` | Confiança da detecção |
| `bbox` | Coordenadas da caixa delimitadora |
| `detection_count` | Número de objetos detectados no quadro atual |

Os resultados podem ser enviados para sistemas externos por três canais, com template de saída e tipo de tarefa configuráveis:

| Canal | Guia |
| --- | --- |
| HTTP | [Enviar Resultados de Detecção via HTTP/UART](/pt-br/recamera_pro_http_uart/) |
| UART | [Enviar Resultados de Detecção via HTTP/UART](/pt-br/recamera_pro_http_uart/) |
| MQTT | [Enviar Resultados de Detecção via MQTT](/pt-br/recamera_pro_mqtt/) |

Gravações também podem ser acionadas diretamente pelos resultados de inferência (categorias, faixa de confiança, áreas de disparo): [Configurar Gravação de Eventos](/pt-br/recamera_pro_record_settings/).

<!-- TODO(verify): document the exact JSON payload schema for HTTP/MQTT output (field names, nesting, configurable template variables) against the shipping firmware. -->

## Inferência nativa (C/C++)

Para aplicações personalizadas fora da interface Web, os modelos são carregados por meio da API C do RKNN Runtime. Configuração de cross-compilation e um aplicativo mínimo: [Configuração do SDK](/pt-br/recamera_pro_sdk_setup/), [Desenvolvimento Nativo](/pt-br/recamera_pro_media_dev/). Um fluxo de trabalho assistido por agente de IA com um template em C++: [Desenvolver com Agentes de Codificação em IA](/pt-br/recamera_pro_development_cpp_skill/).

## Modelos de som

A detecção de eventos sonoros usa um pipeline separado: modelos são visualizados, treinados e alternados no Sound Lab (interface Web), e categorias de som selecionadas podem acionar gravação. Veja [Treinar um Modelo de Som](/pt-br/recamera_pro_acoustic_lab_usage/) e [Captura Acionada por Som](/pt-br/recamera_pro_sound_trigger/).

<!-- TODO(verify): document sound model format and on-device runtime (distinct from RKNN visual models). -->


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
