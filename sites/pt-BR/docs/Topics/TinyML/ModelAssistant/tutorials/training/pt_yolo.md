---
description: Treinamento para Assistente de Modelo
title: Detecção de Objetos - SWIFT-YOLO
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Tutorials_Training_YOLO
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Tutorials_Training_YOLO/
---

# Detecção de Objetos - SWIFT-YOLO

Esta seção descreve como treinar o modelo de medidor digital nos conjuntos de dados COCO de medidor digital. As implementações do modelo de detecção de medidor digital yolo são baseadas no Swfit-YOLO e alimentadas por [mmyolo](https://github.com/open-mmlab/mmyolo)

## Preparar Conjuntos de Dados

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) usa [Digital Meter Datasets](https://universe.roboflow.com/seeeddatasets/seeed_meter_digit/) por padrão para treinar o modelo Swfit-YOLO, consulte as etapas a seguir para concluir a preparação dos conjuntos de dados.

1. Baixe os conjuntos de dados de medidor digital no modo de conjuntos de dados COCO

2. Lembre-se do seu **caminho da pasta** (por exemplo, `datasets\digital_meter`) dos conjuntos de dados descompactados, você poderá precisar usar esse caminho de pasta mais tarde.

## Escolher uma Configuração

Vamos escolher um arquivo de configuração apropriado dependendo do tipo de tarefa de treinamento que precisamos executar, que já apresentamos em [Config](/pt-br/ModelAssistant_Tutorials_Config), para uma breve descrição das funções, estrutura e princípios do arquivo de configuração.

Para o exemplo de modelo Swfit-YOLO, usamos `swift_yolo_tiny_1xb16_300e_coco.py` como o arquivo de configuração, que está localizado na pasta sob o diretório raiz do SSCMA `configs/swift_yolo` e herda adicionalmente o arquivo de configuração `base_arch.py`.

Para iniciantes, recomendamos prestar atenção primeiro aos parâmetros `data_root` e `epochs` neste arquivo de configuração.

<details>

<summary> swift_yolo_tiny_1xb16_300e_coco.py </summary>

```python
_base_='../_base_/default_runtime_det.py'
_base_ = ["./base_arch.py"]

anchors = [
    [(10, 13), (16, 30), (33, 23)],  # P3/8
    [(30, 61), (62, 45), (59, 119)],  # P4/16
    [(116, 90), (156, 198), (373, 326)]  # P5/32
]
num_classes = 11
deepen_factor = 0.33
widen_factor = 0.15

strides = [8, 16, 32]

model = dict(
    type='mmyolo.YOLODetector',
    backbone=dict(
        type='YOLOv5CSPDarknet',
        deepen_factor=deepen_factor,
        widen_factor=widen_factor,
    ),
    neck=dict(
        type='YOLOv5PAFPN',
        deepen_factor=deepen_factor,
        widen_factor=widen_factor,
    ),
    bbox_head=dict(
        head_module=dict(
            num_classes=num_classes,
            in_channels=[256, 512, 1024],
            widen_factor=widen_factor,
        ),
    ),
)
```

</details>

## Treinando o Modelo

Treinar o modelo requer usar nosso ambiente de trabalho SSCMA configurado anteriormente; se você seguiu nosso guia de [Installation](/pt-br/ModelAssistant_Introduce_Installation) usando Conda para instalar o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) em um ambiente virtual chamado `sscma`, primeiro certifique-se de que você está atualmente no ambiente virtual.

Em seguida, no diretório raiz do projeto [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), executamos o seguinte comando para treinar um modelo de detecção de medidor digital Swfit-YOLO.

```sh
python3 tools/train.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    --cfg-options \
        data_root='datasets/digital_meter' \
        epochs=50
```

Durante o treinamento, os pesos do modelo e as informações de log relacionadas são salvos no caminho `work_dirs/swift_yolo_tiny_1xb16_300e_coco` por padrão, e você pode usar ferramentas como [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) para monitorar o treinamento.

```sh
tensorboard --logdir work_dirs/swift_yolo_tiny_1xb16_300e_coco
```

Após a conclusão do treinamento, o caminho do arquivo de pesos mais recente do modelo Swfit-YOLO é salvo no arquivo `work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint`. Por favor, tome cuidado com o caminho do arquivo de pesos, pois ele é necessário ao converter o modelo para outros formatos.

:::tip

Se você tiver um ambiente virtual configurado, mas não ativado, poderá ativá-lo com o seguinte comando.

```sh
conda activate sscma
```

:::

## Teste e Avaliação

### Teste

Depois de terminar o treinamento do modelo Swfit-YOLO, você pode especificar pesos específicos e testar o modelo usando o seguinte comando.

```sh
python3 tools/inference.py \
    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
    "$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)" \
    --show \
    --cfg-options \
        data_root='datasets/digital_meter'
```

:::tip

Se você quiser uma visualização em tempo real durante o teste, poderá adicionar um parâmetro `--show` ao comando de teste para mostrar os resultados previstos. Para mais parâmetros opcionais, consulte o código-fonte `tools/inference.py`.

:::

### Avaliação

Para testar e avaliar ainda mais o modelo em um dispositivo real de computação de borda, você precisa exportar o modelo. No processo de exportação do modelo, o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) fará algumas otimizações no modelo, como poda de modelo, destilação, etc. Você pode consultar a seção [Export](/pt-br/ModelAssistant_Tutorials_Export_Overview) para saber mais sobre como exportar modelos.

### Implantação

Após exportar o modelo, você pode implantá-lo no dispositivo de computação de borda para teste e avaliação. Você pode consultar a seção [Deploy](/pt-br/ModelAssistant_Deploy_Overview) para saber mais sobre como implantar modelos.
