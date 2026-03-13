---
description: Treinamento para Assistente de Modelo
title: Detecção de Pontos-chave - PFLD
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Tutorials_Training_PFLD
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Tutorials_Training_PFLD/
---

# Detecção de Pontos-chave - PFLD

Esta seção descreve como treinar o modelo PFLD no conjunto de dados de medidores PFLD. O modelo PFLD é apresentado no artigo [PFLD: A Practical Facial Landmark Detector](https://arxiv.org/pdf/1902.10859.pdf).

## Preparar Conjuntos de Dados

SSCMA usa por padrão [Custom Meter Datasets](/pt-br/ModelAssistant_Tutorials_Datasets#SSCMA) para treinar o modelo PFLD; consulte as etapas a seguir para concluir a preparação dos conjuntos de dados.

1. Consulte [Internet Datasets - SSCMA - Custom Meter Dataset](/pt-br/ModelAssistant_Tutorials_Datasets#SSCMA) para baixar e descompactar o conjunto de dados.

2. Lembre-se do **caminho da pasta** (por exemplo, `datasets\meter`) dos conjuntos de dados descompactados; você poderá precisar usar esse caminho de pasta mais tarde.

## Escolher uma Configuração

Vamos escolher um arquivo de configuração apropriado dependendo do tipo de tarefa de treinamento que precisamos executar, o que já apresentamos em [Config](/pt-br/ModelAssistant_Tutorials_Config), para uma breve descrição das funções, estrutura e princípios do arquivo de configuração.

Para o exemplo de modelo PFLD de medidor, usamos `pfld_mbv2n_112.py` como arquivo de configuração, que está localizado na pasta sob o diretório raiz do SSCMA `configs/pfld` e adicionalmente herda o arquivo de configuração `default_runtime_pose.py`.

Para iniciantes, recomendamos prestar atenção primeiro aos parâmetros `data_root` e `epochs` neste arquivo de configuração.

<details>

<summary> pfld_mbv2n_112.py </summary>

```python
_base_='../_base_/default_runtime_pose.py'

num_classes=1
model=dict(type='PFLD',
             backbone=dict(type='PfldMobileNetV2',
                           inchannel=3,
                           layer1=[16, 16, 16, 16, 16],
                           layer2=[32, 32, 32, 32, 32, 32],
                           out_channel=16),
             head=dict(type='PFLDhead',
                       num_point=num_classes,
                       input_channel=16,
                       loss_cfg=dict(type='L1Loss')))

# dataset settings
dataset_type='MeterData'

data_root=''
height=112
width=112
batch_size=32
workers=4

train_pipeline=[
    dict(type="Resize", height=height, width=width, interpolation=0),
    dict(type='ColorJitter', brightness=0.3, p=0.5),
    dict(type='GaussNoise'),
    dict(type='MedianBlur', blur_limit=3, p=0.3),
    dict(type='HorizontalFlip'),
    dict(type='VerticalFlip'),
    dict(type='Rotate'),
    dict(type='Affine', translate_percent=[0.05, 0.1], p=0.6)
]

val_pipeline=[dict(type="Resize", height=height, width=width)]

train_dataloader=dict(
    batch_size=32,
    num_workers=2,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='default_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 index_file=r'train/annotations.txt',
                 pipeline=train_pipeline,
                 test_mode=False),
)

val_dataloader=dict(
    batch_size=1,
    num_workers=1,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='default_collate'),
    sampler=dict(type='DefaultSampler', shuffle=False, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 index_file=r'val/annotations.txt',
                 pipeline=val_pipeline,
                 test_mode=True),
)
test_dataloader=val_dataloader

lr=0.0001
epochs=300
evaluation=dict(save_best='loss')
optim_wrapper=dict(
    optimizer=dict(type='Adam', lr=lr, betas=(0.9, 0.99), weight_decay=1e-6))
optimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2))
val_evaluator=dict(type='PointMetric')
test_evaluator=val_evaluator
find_unused_parameters=True
train_cfg=dict(by_epoch=True, max_epochs=500)

# learning policy
param_scheduler=[
    dict(type='LinearLR', begin=0, end=500, start_factor=0.001,
         by_epoch=False),  # warm-up
    dict(type='MultiStepLR',
         begin=1,
         end=500,
         milestones=[350, 400, 450, 490],
         gamma=0.1,
         by_epoch=True)
]
```

</details>

## Treinando o Modelo

O treinamento do modelo requer o uso do nosso ambiente de trabalho SSCMA previamente configurado; se você seguiu o guia de [Installation](/pt-br/ModelAssistant_Introduce_Installation) usando o Conda para instalar o SSCMA em um ambiente virtual chamado `sscma`, certifique-se primeiro de que você está atualmente no ambiente virtual.

Então, no diretório raiz do projeto SSCMA, executamos o seguinte comando para treinar um modelo PFLD de medidor de ponta a ponta.

```sh
python3 tools/train.py \
    configs/pfld/pfld_mbv2n_112.py \
    --cfg-options \
        data_root='datasets/meter' \
        epochs=50
```

Durante o treinamento, os pesos do modelo e as informações de log relacionadas são salvos por padrão no caminho `work_dirs/pfld_mbv2n_112`, e você pode usar ferramentas como [TensorBoard](https://www.tensorflow.org/tensorboard/get_started) para monitorar o treinamento.

```sh
tensorboard --logdir work_dirs/pfld_mbv2n_112
```

Após a conclusão do treinamento, o caminho do arquivo mais recente de pesos do modelo FOMO é salvo no arquivo `work_dirs/pfld_mbv2n_112/last_checkpoint`. Por favor, anote o caminho do arquivo de pesos, pois ele é necessário ao converter o modelo para outros formatos.

:::tip

Se você tem um ambiente virtual configurado, mas não ativado, pode ativá-lo com o seguinte comando.

```sh
conda activate sscma
```

:::

## Teste e Avaliação

### Teste

Depois de terminar o treinamento do modelo PFLD, você pode especificar pesos específicos e testar o modelo usando o comando a seguir.

```sh
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --cfg-options \
        data_root='datasets/meter'
```

:::tip

Se você quiser uma visualização em tempo real durante o teste, pode adicionar um parâmetro `--show` ao comando de teste para mostrar os resultados previstos. Para mais parâmetros opcionais, consulte o código-fonte `tools/test.py`.

:::

### Avaliação

Para testar e avaliar ainda mais o modelo em um dispositivo real de computação de borda, você precisa exportar o modelo. No processo de exportação do modelo, o SSCMA fará algumas otimizações no modelo, como poda de modelo, destilação, etc. Você pode consultar a seção [Export](/pt-br/ModelAssistant_Tutorials_Export_Overview) para saber mais sobre como exportar modelos.

### Implantação

Após exportar o modelo, você pode implantá-lo no dispositivo de computação de borda para teste e avaliação. Você pode consultar a seção [Deploy](/pt-br/ModelAssistant_Deploy_Overview) para saber mais sobre como implantar modelos.
