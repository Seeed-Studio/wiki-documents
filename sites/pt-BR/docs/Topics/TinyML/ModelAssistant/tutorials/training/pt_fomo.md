---
description: Treinamento para Model Assistant
title: Detecção de Objetos - FOMO
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Tutorials_Training_FOMO
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Tutorials_Training_FOMO/
---

# Detecção de Objetos - FOMO

Esta seção descreve como treinar o modelo de detecção de máscara FOMO nos conjuntos de dados COCO MASK. As implementações do modelo de detecção de máscara FOMO são baseadas no MobileNet V2 e MobileNet V3 (a rede neural real selecionada depende do perfil de modelo que você escolher).

Para mais informações sobre o MobileNet, consulte o artigo [MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications](https://arxiv.org/pdf/1704.04861.pdf).

## Preparar conjuntos de dados

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) usa por padrão os [Conjuntos de Dados COCO_MASK](/pt-br/ModelAssistant_Tutorials_Datasets#SSCMA) para treinar o modelo FOMO, consulte as etapas a seguir para concluir a preparação dos conjuntos de dados.

1. Consulte [Conjuntos de Dados da Internet](/pt-br/ModelAssistant_Tutorials_Datasets#SSCMA) para baixar e descompactar o conjunto de dados.

2. Lembre-se de seu **caminho da pasta** (por exemplo, `datasets\mask`) dos conjuntos de dados descompactados, pois você poderá precisar usar esse caminho de pasta mais tarde.

## Escolher uma configuração

Vamos escolher um arquivo de configuração apropriado dependendo do tipo de tarefa de treinamento que precisamos executar, o que já apresentamos em [Config](/pt-br/ModelAssistant_Tutorials_Config), para uma breve descrição das funções, estrutura e princípios do arquivo de configuração.

Para o exemplo de modelo FOMO, usamos `fomo_mobnetv2_0.35_x8_abl_coco.py` como arquivo de configuração, que está localizado na pasta sob o diretório raiz do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) `configs/fomo` e herda adicionalmente o arquivo de configuração `default_runtime_det.py`.

Para iniciantes, recomendamos prestar atenção primeiro aos parâmetros `data_root` e `epochs` neste arquivo de configuração.

<details>

<summary> fomo_mobnetv2_0.35_x8_abl_coco.py </summary>

```python
_base_='../_base_/default_runtime_det.py'
default_scope='sscma'
custom_imports=dict(imports=['sscma'], allow_failed_imports=False)

num_classes=2
model=dict(type='Fomo',
           backbone=dict(type='mmdet.MobileNetV2', widen_factor=0.35, out_indices=(2,)),
           head=dict(type='FomoHead',
                     input_channels=[16],
                     num_classes=num_classes,
                     middle_channel=48,
                     act_cfg='ReLU6',
                     loss_cls=dict(type='BCEWithLogitsLoss',
                                   reduction='none',
                                   pos_weight=40),
                     loss_bg=dict(type='BCEWithLogitsLoss', reduction='none'),
           ),
)

# dataset settings
dataset_type='FomoDatasets'
data_root=''
height=96
width=96
batch_size=16
workers=1

train_pipeline=[
    dict(type='RandomResizedCrop',
         height=height,
         width=width,
         scale=(0.80, 1.2),
         p=1),
    dict(type='Rotate', limit=30),
    dict(type='RandomBrightnessContrast',
         brightness_limit=0.3,
         contrast_limit=0.3,
         p=0.5),
    dict(type='HorizontalFlip', p=0.5),
]
test_pipeline=[dict(type='Resize', height=height, width=width, p=1)]

train_dataloader=dict(
    batch_size=batch_size,
    num_workers=workers,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='fomo_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 ann_file='train/_annotations.coco.json',
                 img_prefix='train',
                 pipeline=train_pipeline),
)
val_dataloader=dict(
    batch_size=1,
    num_workers=1,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='fomo_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 ann_file='valid/_annotations.coco.json',
                 img_prefix='valid',
                 pipeline=test_pipeline))
test_dataloader=val_dataloader

# optimizer
lr=0.001
epochs=300
find_unused_parameters=True
optim_wrapper=dict(optimizer=dict(type='Adam', lr=lr, weight_decay=5e-4,eps=1e-7))

#evaluator
val_evaluator=dict(type='FomoMetric')
test_evaluator=val_evaluator
train_cfg=dict(by_epoch=True, max_epochs=70)

# learning policy
param_scheduler=[
    dict(type='LinearLR', begin=0, end=30, start_factor=0.001, by_epoch=False),  # warm-up
    dict(type='MultiStepLR',
         begin=1,
         end=500,
         milestones=[100, 200, 250],
         gamma=0.1,
         by_epoch=True)
]
```

</details>

## Treinar o modelo

Treinar o modelo requer usar nosso ambiente de trabalho do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) previamente configurado; se você seguiu nosso guia de [Instalação](/pt-br/ModelAssistant_Introduce_Installation) utilizando o Conda para instalar o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) em um ambiente virtual chamado `sscma`, primeiro certifique-se de que você está atualmente nesse ambiente virtual.

Em seguida, no diretório raiz do projeto [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), executamos o seguinte comando para treinar um modelo de detecção de máscara FOMO.

```sh
python3 tools/train.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    --cfg-options \
        data_root='datasets/mask' \
        epochs=50
```

Durante o treinamento, os pesos do modelo e as informações de log relacionadas são salvos por padrão no caminho `work_dirs/fomo_mobnetv2_0.35_x8_abl_coco`, e você pode usar ferramentas como o [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) para monitorar o treinamento.

```sh
tensorboard --logdir work_dirs/fomo_mobnetv2_0.35_x8_abl_coco
```

Após a conclusão do treinamento, o caminho do arquivo de pesos mais recente do modelo FOMO é salvo no arquivo `work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint`. Anote o caminho do arquivo de pesos, pois ele será necessário ao converter o modelo para outros formatos.

:::tip

Se você tiver um ambiente virtual configurado, mas não ativado, poderá ativá-lo com o seguinte comando.

```sh
conda activate sscma
```

:::

## Teste e Avaliação

### Teste

Depois de concluir o treinamento do modelo FOMO, você pode especificar pesos específicos e testar o modelo usando o seguinte comando.

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --cfg-options \
        data_root='datasets/mask'
```

:::tip

Se você quiser uma visualização em tempo real durante o teste, pode adicionar um parâmetro `--show` ao comando de teste para mostrar os resultados previstos. Para mais parâmetros opcionais, consulte o código-fonte `tools/test.py`.

:::

### Avaliação

Para testar e avaliar ainda mais o modelo em um dispositivo real de computação de borda, você precisa exportar o modelo. No processo de exportação do modelo, o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) fará algumas otimizações no modelo, como poda de modelo, destilação, etc. Você pode consultar a seção [Export](/pt-br/ModelAssistant_Tutorials_Export_Overview) para saber mais sobre como exportar modelos.

### Implantação

Depois de exportar o modelo, você pode implantá-lo no dispositivo de computação de borda para testes e avaliação. Você pode consultar a seção [Deploy](/pt-br/ModelAssistant_Deploy_Overview) para saber mais sobre como implantar modelos.
