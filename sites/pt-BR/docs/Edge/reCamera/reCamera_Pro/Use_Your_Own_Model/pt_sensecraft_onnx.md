---
description: Converta modelos ONNX para o formato RKNN usando a plataforma SenseCraft e, em seguida, faça o deploy na reCamera Pro sem ferramentas locais.
title: "Conversão SenseCraft de ONNX para RKNN"
keywords:
  - reCamera
  - reCamera Pro
  - SenseCraft
  - ONNX
  - RKNN
  - model conversion
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sensecraft
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_sensecraft/
---

# Conversão SenseCraft de ONNX para RKNN

A reCamera Pro inclui um ponto de entrada integrado para o **SenseCraft**, uma plataforma em nuvem que converte modelos ONNX para o formato RKNN. Isso permite que você faça o deploy de modelos personalizados sem instalar o RKNN-Toolkit2 localmente.

## Acessar o SenseCraft

1. Na interface Web, vá para **AI Inference**.
2. Clique em **View SenseCraft Models**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

## Fluxo de trabalho de conversão

1. Clique em **View SenseCraft Models** para abrir a interface de conversão.
2. Selecione o **arquivo de modelo ONNX** a ser convertido.
3. Opcionalmente, envie um **conjunto de dados de quantização**. Se nenhum for fornecido, o sistema usa um conjunto de dados padrão.
4. Clique em **Start Conversion**.
5. Após a conclusão da conversão, o modelo RKNN gerado pode ser implantado na reCamera Pro.

{/* TODO(verify): confirm whether SenseCraft conversion supports INT8 quantization, FP16, or both, and the maximum model file size */}

## Quando usar SenseCraft vs RKNN-Toolkit2

| Fator | SenseCraft | RKNN-Toolkit2 |
|---|---|---|
| Configuração | Nenhuma (nuvem) | Ambiente Python local |
| Controle de quantização | Básico (conjunto de dados padrão ou personalizado) | Completo (INT8/FP16, calibração personalizada, controle em nível de camada) |
| Velocidade | Enviar + aguardar | Conversão local |
| Melhor para | Deploy rápido | Otimização para produção |

Para controle total de quantização, consulte [Conversão com RKNN-Toolkit2](/pt-br/recamera_pro_rknn_model_conversion/).

## Páginas relacionadas

- [Escolher um caminho de deploy de modelo](/pt-br/recamera_pro_model_path/)
- [Enviar e configurar um modelo RKNN](/pt-br/recamera_pro_rknn_upload/)
- [Conversão com RKNN-Toolkit2](/pt-br/recamera_pro_rknn_model_conversion/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
