---
description: Configuração para Model Assistant
title: Configuração
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Tutorials_Config
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Tutorials_Config/
---


# Configuração

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) usa o sistema de processamento de configuração fornecido por [OpenMMLab - MMEngine](https://github.com/open-mmlab/mmengine) com um design modular e herdável que oferece aos usuários uma interface unificada de acesso à configuração para vários testes e validações de diferentes redes neurais.

## Estrutura de Diretórios

Os arquivos de configuração usados pelo [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) estão localizados no diretório `configs`, que são usados para treinar diferentes modelos em diferentes tarefas. E nós criamos muitas subpastas de acordo com diferentes tarefas, e em cada subpasta são armazenados diferentes parâmetros de pipeline de treinamento de múltiplos modelos.

```sh
configs
├── _base_
│   ├── datasets
│   │   └── coco_detection.py
│   ├── default_runtime_cls.py
│   ├── default_runtime_det.py
│   ├── default_runtime_pose.py
│   └── schedules
│       ├── schedule_1x.py
│       ├── schedule_20e.py
│       └── schedule_2x.py
├── classification
│   ├── base.py
│   ├── mobnetv2_1.0_1bx16_300e_custom.py
│   └── mobnetv3_small_1bx16_300e_custom.py
├── fomo
│   ├── fomo_efficientnet_b0_x8_abl_coco.py
│   ├── fomo_mobnetv2_0.35_x8_abl_coco.py
│   └── fomo_squeezenet_0.1_x8_abl_coco.py
├── pfld
│   ├── pfld_dan_fpn_x8_192.py
│   ├── pfld_mbv2n_112.py
│   ├── pfld_mbv3l_192.py
│   └── README.md
└── swift_yolo
    ├── base_arch.py
    └── swift_yolo_tiny_1xb16_300e_coco.py
└── <Other Tasks...>
```

:::tip

A pasta de tarefa chamada `_base_` é um objeto de herança para outras tarefas. Para mais detalhes sobre herança de arquivos de configuração, consulte [MMEngine - Configuration File Inheritance](https://mmengine.readthedocs.io/en/latest/advanced_tutorials/config.html#id3).

:::

## Estrutura da Configuração

Tomando o arquivo de configuração `fomo_mobnetv2_0.35_x8_abl_coco.py` como exemplo, apresentamos diferentes campos neste arquivo de configuração de acordo com os diferentes módulos funcionais.

### Parâmetros Importantes

Ao alterar a configuração de treinamento, geralmente é necessário modificar os seguintes parâmetros. Por exemplo, os fatores `height` e `width` são geralmente para o tamanho da imagem. Portanto, recomendamos definir esses parâmetros separadamente no arquivo de configuração.

```python
height=96       # Input image height
width=96        # Input image width
batch_size=16   # Batch size of a single GPU during validation
workers=4       # Worker to pre-fetch data for each single GPU during validation
epoches=300     # Maximum training epochs: 300 epochs
lr=0.001        # Learn rate
```

### Configuração do Modelo

No arquivo de configuração do modelo FOMO, usamos model para configurar os componentes do algoritmo de detecção, incluindo componentes de rede neural como backbone, neck, etc. Parte da configuração do modelo é mostrada abaixo:

```python
num_classes=2                                   # Number of class
model=dict(
    type='Fomo',                                # The name of detector
    backbone=dict(
        type='MobileNetV2',
        widen_factor=0.35,
        out_indices=(2, )),                     # The config of backbone
    head=dict(
        type='Fomo_Head',                       # The config of head
        input_channels=16,                      # The input channels, this is consistent with the input channels of neck
        num_classes=num_classes,                # Number of classes for classification
        middle_channels=[96, 32],               # The output channels for head conv
        act_cfg='ReLU6',                        # The config of activation function
        loss_cls=dict(type='BCEWithLogitsLoss', # This loss combines a Sigmoid layer and the BCELoss in one single class
                      reduction='none',
                      pos_weight=40),
        loss_bg=dict(type='BCEWithLogitsLoss', reduction='none'),
        cls_weight=40)                          # Parameter for pos_weight
)
```

### Configuração de Dataset e Avaliador

Dataset e pipeline de dados precisam ser configurados para construir o dataloader. Devido à complexidade desta parte, usamos variáveis intermediárias para simplificar a escrita das configurações de dataloader. Métodos de argumentação de dados mais complexos podem ser encontrados no caminho `sscma/datasets/pipelines`.

Mostraremos aqui o pipeline de treinamento e teste para FOMO, que usa o [Dataset Custom COCO_MASK](/pt-br/ModelAssistant_Tutorials_Datasets):

```python
dataset_type='FomoDatasets'   # Dataset type, this will be used to define the dataset
data_root=''                  # Root path of data
train_pipeline=[              # Training data loading pipeline
    dict(type='RandomResizedCrop', height=height, width=width, scale=(0.90, 1.1),
         p=1),                                 # RandomResizedCrop augmentation in albumentation for fomo
    dict(type='Rotate', limit=20),             # Rotate transform with limit degree 20
    dict(type='RandomBrightnessContrast',      # RandomBrightnessContrast augmentation in albumentation
         brightness_limit=0.2,                 # Factor range for changing brightness
         contrast_limit=0.2,                   # Factor range for changing contrast
         p=0.5),                               # Probability of applying the transform
    dict(type='HorizontalFlip', p=0.5),        # Flip the input horizontally around the y-axis
]
test_pipeline=[dict(type='Resize', height=height, width=width,
                    p=1)]                      # Resize the input to the given height and width

data=dict(samples_per_gpu=batch_size,          # Batch size of a single GPU during training
          workers_per_gpu=workers,             # Worker to pre-fetch data for each single GPU during training
          train_dataloader=dict(collate=True), # Flag of merging a list of samples to form a mini-batch
          val_dataloader=dict(collate=True),
          train=dict(type=dataset_type,
                     data_root=data_root,
                     ann_file='annotations/person_keypoints_train2017.json',
                     img_prefix='train2017',   # Path of annotation file and prefix of image path
                     pipeline=train_pipeline),
          val=dict(type=dataset_type,
                   data_root=data_root,
                   test_mode=True,             # Enable test mode of the dataset to avoid filtering annotations or images
                   ann_file='annotations/person_keypoints_val2017.json',
                   img_prefix='val2017',
                   pipeline=test_pipeline),
          test=dict(type=dataset_type,
                    data_root=data_root,
                    test_mode=True,
                    ann_file='annotations/person_keypoints_val2017.json',
                    img_prefix='val2017',
                    pipeline=test_pipeline))
```

Os avaliadores são usados para calcular as métricas do modelo treinado nos conjuntos de dados de validação e teste. A configuração dos avaliadores consiste em uma ou uma lista de configurações de métricas:

```python
evaluation=dict(interval=1, metric=['mAP'], fomo=True) # Validation metric for evaluate mAP
find_unused_parameters=True
```

### Configuração do Otimizador

```python
optimizer=dict(type='Adam', lr=lr, weight_decay=0.0005)         # Adam gradient descent optimizer with base learning rate and weight decay
optimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2)) # Config used to build the optimizer hook
```

:::tip

Para mais detalhes sobre a aplicação de Hook, consulte [MMEngine - Hook](https://mmengine.readthedocs.io/en/latest/tutorials/hook.html).

:::

### Herança de Arquivo de Configuração

O diretório `config/_base_` contém o arquivo de configuração padrão, e o arquivo de configuração é composto pelos componentes em `_base_`, o que é chamado de primitivo.

Para facilitar os testes, recomendamos que os usuários herdem os arquivos de configuração existentes. Por exemplo, o arquivo de configuração de treinamento de um modelo FOMO com `_base_='. /_base_/default_runtime_det.py'`, e então, com base no arquivo herdado, modificamos os campos necessários no arquivo de configuração.

```python
_base_='../_base_/default_runtime_det.py
checkpoint_config=dict(interval=5) # Config to set the checkpoint hook
log_config=dict(                   # Config to register logger hook
            interval=150,          # Interval to print the log
            hooks=[
                dict(type='TextLoggerHook', ndigits=4),       # TXT logger
                dict(type='TensorboardLoggerHook', ndigits=4) # Tensorboard logger
            ])                                                # The logger used to record the training process
epochs=300
runner=dict(type='EpochBasedRunner',  # Type of runner to use (i.e. IterBasedRunner or EpochBasedRunner)
            max_epochs=epochs)        # Runner that runs the workflow in total max_epochs. For IterBasedRunner use `max_iters`
dist_params=dict(backend='nccl')      # Parameters to setup distributed training, the port can also be set
log_level = 'INFO'                    # The level of logging
load_from = None                      # Load models as a pre-trained model from a given path, this will not resume training
resume_from = None                    # Resume checkpoints from a given path, the training will be resumed from the epoch when the checkpoint's is saved
workflow = [('train', 1)]             # Workflow for runner. [('train', 1)] means there is only one workflow and the workflow named 'train' is executed once. The workflow trains the model by 300 epochs according to the total_epochs
opencv_num_threads = 1                # Disable OpenCV multi-threads to save memory
work_dir = './work_dirs'              # Directory to save the model checkpoints and logs for the current experiments
```

## Configuração Parametrizada

Ao enviar um job usando `tools/train.py` ou `tools/test.py` do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), você pode especificar `--cfg-options` para sobrescrever temporariamente a configuração.

:::tip

Você pode especificar opções de configuração na ordem das chaves do dicionário na configuração original e atualizar a cadeia de dicionários das chaves de configuração. Por exemplo, `--cfg-options data_root='. /dataset/coco'` altera o diretório raiz de dados do conjunto de dados.

:::

## FAQs

- O arquivo de configuração de diferentes modelos será diferente, como posso entendê-lo?

  Para mais detalhes, consulte [MMDet Config](https://mmdetection.readthedocs.io/en/latest/tutorials/config.html), [MMPose Config](https://mmpose.readthedocs.io/en/latest/tutorials/0_config.html) e [MMCls Config](https://mmclassification.readthedocs.io/en/latest/tutorials/config.html).
