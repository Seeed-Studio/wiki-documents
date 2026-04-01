---
description: Exportar para Model Assistant
title: PyTorch para TFLite
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Tutorials_Export_PyTorch_2_TFLite
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite/
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PyTorch para TFLite

Este capítulo descreverá como converter e exportar modelos PyTorch para modelos TFLite.

## Preparação

### Configuração do Ambiente

Assim como na etapa de [Training](/pt-br/ModelAssistant_Tutorials_Training_Overview), recomendamos que você faça isso em um **ambiente virtual** durante a fase de exportação do modelo. No ambiente virtual `sscma`, certifique-se de que a etapa [Installation - Prerequisites - Install Extra Dependencies](/pt-br/ModelAssistant_Introduce_Installation#step-4-install-extra-dependencies-optional) foi concluída.

:::tip

Se você já configurou um ambiente virtual, mas não o ativou, pode ativá-lo com o seguinte comando.

```sh
conda activate sscma
```

:::

### Modelos e Pesos

Você também precisa preparar o modelo PyTorch e seus pesos antes de exportar o modelo. Para o modelo, você pode encontrá-lo na seção [Config](/pt-br/ModelAssistant_Tutorials_Config), onde já o pré-configuramos. Para os pesos, você pode consultar as etapas a seguir para obter os pesos do modelo.

- Consulte a seção [Training](/pt-br/ModelAssistant_Tutorials_Training_Overview), escolha um modelo e treine para obter os pesos do modelo.

- Ou faça o download dos pesos oficiais pré-treinados do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) no nosso [GitHub Releases - Model Zoo](https://github.com/Seeed-Studio/ModelAssistantreleases/tag/model_zoo).

:::tip

Exportar o modelo TFLite requer um conjunto de treinamento como conjunto de dados representativo; se ele não for encontrado, o programa irá baixá-lo automaticamente. Entretanto, para alguns conjuntos de dados grandes, isso pode levar muito tempo, portanto, seja paciente.

:::

## Exportar Modelo

Para a transformação do modelo (converter e exportar), os comandos relevantes com alguns parâmetros comuns são listados.

```sh
python3 tools/export.py \
    "<CONFIG_FILE_PATH>" \
    "<CHECKPOINT_FILE_PATH>" \
    --target tflite
```

### Exemplos de Exportação para TFLite

Aqui estão alguns exemplos de conversão de modelo (precisão `int8`) para referência.

<Tabs>

<TabItem value="FOMO Model Conversion" label="Conversão de Modelo FOMO">

```sh
python3 tools/export.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --target tflite \
    --cfg-options \
        data_root='datasets/mask'

```

</TabItem>

<TabItem value="PFLD Model Conversion" label="Conversão de Modelo PFLD">

```sh
python3 tools/export.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --target tflite \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="PFLD Model Conversio" label="Conversão de Modelo PFLD">

```sh
python3 tools/export.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --target tflite
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>


## Validação do Modelo

Como no processo de exportação do modelo o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) fará algumas otimizações no modelo usando algumas ferramentas, como poda de modelo, destilação, etc., embora tenhamos testado e avaliado os pesos do modelo durante o processo de treinamento, recomendamos que você valide o modelo exportado novamente.

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

Aqui estão alguns exemplos para validar o modelo convertido (precisão `int8`), somente para referência.

<Tabs>

<TabItem value="FOMO Model Validation" label="Validação de Modelo FOMO">

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/mask'
```

</TabItem>

<TabItem value="PFLD Model Validation" label="Validação de Modelo PFLD">

```sh
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/meter'
```

</TabItem>

<TabItem value="SWIFT-YOLO Model Validation" label="Validação de Modelo PFLD">

```sh
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint | sed -e 's/.pth/_int8.tflite/g')" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

</TabItem>

</Tabs>
