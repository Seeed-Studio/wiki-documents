---
description: Exportar para Model Assistant
title: PyTorch para ONNX
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Tutorials_Export_PyTorch_2_ONNX
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PyTorch para ONNX

Este capítulo descreve como converter e exportar modelos PyTorch para modelos ONNX.

## Preparação

### Configuração do Ambiente

Assim como na etapa de [Training](/pt-br/ModelAssistant_Tutorials_Training_Overview), recomendamos que você faça isso em um **ambiente virtual** durante a fase de exportação do modelo. No ambiente virtual `sscma`, certifique-se de que a etapa [Installation - Prerequisites - Install Extra Dependencies](/pt-br/ModelAssistant_Introduce_Installation#step-4-install-extra-dependencies-optional) foi concluída.

:::tip

Se você configurou um ambiente virtual, mas não o ativou, pode ativá-lo com o seguinte comando.

```sh
conda activate sscma
```

:::

### Modelos e Pesos

Você também precisa preparar o modelo PyTorch e seus pesos antes de exportar o modelo. Para o modelo, você pode encontrá-lo na seção [Config](/pt-br/ModelAssistant_Tutorials_Datasets), que já foi pré-configurada. Para os pesos, você pode seguir as etapas abaixo para obter os pesos do modelo.

- Consulte a seção [Training](/pt-br/ModelAssistant_Tutorials_Training_Overview), escolha um modelo e treine para obter os pesos do modelo.

- Ou faça o download dos pesos oficiais pré-treinados do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) no nosso [GitHub Releases - Model Zoo](https://github.com/Seeed-Studio/ModelAssistantreleases/tag/model_zoo).

## Exportar Modelo

Para conversão e exportação de modelo, são listados os comandos relevantes com alguns parâmetros comuns.

```sh
python3 tools/export.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --target onnx
```

### Exemplos de Exportação para ONNX

Aqui estão alguns exemplos de conversão de modelo para referência.

<Tabs>

<TabItem value="FOMO Model Conversion" label="Conversão de Modelo FOMO">

```
python3 tools/export.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLD Model Conversion" label="Conversão de Modelo PFLD">

```sh
python3 tools/export.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLO Model Conversion" label="Conversão de Modelo SWIFT">

```sh 
python3 tools/export.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --target onnx \
    --cfg-options \
        data_root='datasets/digital_meter'
```
</TabItem>
</Tabs>

## Validação do Modelo

Como no processo de exportação do modelo o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) fará algumas otimizações no modelo usando algumas ferramentas, como poda de modelo, destilação, etc., embora tenhamos testado e avaliado os pesos do modelo durante o processo de treinamento, recomendamos que você valide novamente o modelo exportado.

```sh
python3 tools/inference.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --show \
    --cfg-options "<CFG_OPTIONS>"
```

:::tip

Para mais parâmetros suportados, consulte o código-fonte `tools/inference.py` ou execute `python3 tools/inference.py --help`.

:::

### Exemplo de Validação de Modelo

<Tabs>

<TabItem value="FOMO Model Validation" label="Validação de Modelo FOMO">

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLD Model Validation" label="Validação de Modelo PFLD">

```sh [PFLD Model Validation]
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLO Model Validation" label="Validação de Modelo SWIFT-YOLO">

```sh [SWIFT-YOLO Model Validation]
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint | sed -e 's/.pth/.onnx/g')" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>


