---
description: Verifique se um modelo personalizado é executado corretamente na reCamera Pro — confira o status da inferência, FPS, saída de detecção e uso de recursos.
title: Validar Desempenho do Modelo
keywords:
  - reCamera
  - reCamera Pro
  - validação de modelo
  - inferência
  - FPS
  - desempenho
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_validate
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_model_validate/
---

# Validar Desempenho do Modelo

Depois de enviar ou converter um modelo personalizado, verifique se ele é executado corretamente na reCamera Pro antes de implantá-lo em produção.

## Etapa 1: Iniciar a inferência

1. Na interface Web, vá para **AI Inference** → **Inference Configuration**.
2. Ative a inferência.
3. Selecione seu modelo como **Running Model**.
4. Defina a frequência de inferência.
5. Clique em **Save Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## Etapa 2: Verificar o monitoramento em tempo real

Vá para **Real-time Inference Monitoring** para observar:

| Métrica | O que verificar |
|---|---|
| Status da inferência | Em execução ou parada |
| FPS | Quadros por segundo — quanto maior, melhor |
| Resultados de detecção | Nomes de classes, escores de confiança, caixas delimitadoras |
| Contagem de detecções | Número de objetos por quadro |

{/* TODO(verify): confirm exact field names displayed in Real-time Inference Monitoring (e.g. whether FPS, CPU usage, NPU usage, or memory usage are shown) */}

## Etapa 3: Validar a precisão da detecção

1. Aponte a câmera para objetos de teste que correspondam às suas categorias de detecção.
2. Observe se as detecções aparecem com os nomes de classe corretos e escores de confiança razoáveis.
3. Verifique falsos positivos (objetos detectados que não estão presentes) e falsos negativos (objetos presentes, mas não detectados).

### Ajustando parâmetros de pós-processamento

Se a qualidade da detecção estiver ruim, volte para [Configuração do Modelo](/pt-br/recamera_pro_rknn_upload/):

| Parâmetro | Efeito |
|---|---|
| Limite de IOU | Menor → menos caixas duplicadas; maior → mais caixas sobrepostas mantidas |
| Limite de confiança | Menor → mais detecções (incluindo falsos positivos); maior → menos detecções, porém mais confiáveis |
| max_obj | Número máximo de objetos relatados por quadro |

## Etapa 4: Verificar o uso de recursos

Monitore o uso de recursos do dispositivo durante a inferência via SSH:

```bash
# CPU and memory
top -bn1 | head -5

# NPU usage (if available)
# TODO(verify): confirm the command to check RKNN NPU utilization on reCamera Pro
```

{/* TODO(verify): confirm exact SSH commands for monitoring NPU/RKNN utilization and memory consumption during inference */}

## Problemas comuns

| Sintoma | Possível causa | Correção |
|---|---|---|
| Falha ao carregar o modelo | Operador incompatível ou formato de quantização incompatível | Reconverta com RKNN-Toolkit2; consulte [Compatibilidade de Modelo](/pt-br/recamera_pro_model_compatibility/) |
| FPS muito baixo | Modelo muito grande ou complexo | Use um modelo mais leve ou reduza a resolução de entrada |
| Nenhuma detecção | Configuração de categoria incorreta ou limite muito alto | Verifique se as categorias de detecção correspondem à saída do modelo; reduza o limite de confiança |
| Nomes de classes ilegíveis | Lista de categorias incompatível | Importe novamente o arquivo TXT de categorias correto em Configuração do Modelo |

## Páginas relacionadas

- [Escolher um Caminho de Implantação de Modelo](/pt-br/recamera_pro_model_path/)
- [Enviar e Configurar um Modelo RKNN](/pt-br/recamera_pro_rknn_upload/)
- [Configurar Detecção](/pt-br/recamera_pro_ai_inference/)
- [Compatibilidade de Modelo](/pt-br/recamera_pro_model_compatibility/)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
