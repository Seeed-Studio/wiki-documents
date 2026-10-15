---
description: YOLOv5 do treinamento à implantação
title: Treinar e implantar o modelo de detecção de objetos YOLOv5
keywords:
  - YOLOv5
  - we2
  - detecção de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ma_deploy_yolov5
last_update:
  date: 04/02/2024
  author: Jack Mu
createdAt: '2024-04-07'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ma_deploy_yolov5/
---


# Implantar modelo de detecção de objetos YOLOv5

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov5.png" style={{width:600, height:'auto'}}/></div>

Este wiki apresentará como treinar o modelo oficial de detecção de alvos YOLOv5 e implantar o modelo treinado em dispositivos `Grove Vision AI(V2)` ou `XIAO ESP32S3`.

## Preparação do conjunto de dados

Recomenda-se usar a plataforma [roboflow](https://universe.roboflow.com/) para conjuntos de dados. Esta plataforma pode realizar anotação de conjuntos de dados e algumas estratégias de aumento de dados, além de suportar a exportação em múltiplos formatos de conjuntos de dados. Você pode consultar a [Introdução](https://docs.ultralytics.com/zh/yolov5/tutorials/train_custom_data/) à preparação de conjuntos de dados do yolov5

## Clonar o repositório oficial do YOLOv5

- Por padrão, você já possui o ambiente Python e a ferramenta de gerenciamento de pacotes pip e python>=3.8.

```bash
# Clone YOLOv5 official repository
git clone https://github.com/ultralytics/yolov5
```

- Instale o ambiente necessário

```bash
# Cut to the YOLOv5 folder
cd yolov5
# Use pip to install required dependencies
pip install -r requirements.txt
```

## Treinar

- Execute o seguinte comando para iniciar o treinamento do modelo

```bash
python train.py  --weights yolov5n.pt --data ${dataset yaml file path} --imgsz 192
```

## Exportar modelo para tflite

- Após o treinamento, o modelo estará na pasta `runs/train/exp*/weights/`. Certifique-se de que os indicadores de avaliação do seu modelo atendem às suas necessidades.
- Primeiro exporte o modelo em formato saved_model usando o seguinte comando

```bash
python export.py --weights ${Your trained model path (.pt format)}  --imgsz 192 --include saved_model
```

- Em seguida, use o código a seguir para quantificar e converter o modelo saved_model exportado em formato de modelo tflite

```python
import tensorflow as tf
import os.path as osp



converter = tf.lite.TFLiteConverter.from_saved_model(r'Your saved_model folder path')

tflite_model = converter.convert()

def representative_dataset():
  for _ in range(100):
    yield [
        tf.random.uniform((1, 192, 192
                           , 3))
    ]

converter.optimizations = [
    tf.lite.Optimize.DEFAULT
]
converter.target_spec.supported_ops = [
    tf.lite.OpsSet.TFLITE_BUILTINS_INT8
]
converter.inference_input_type = tf.int8
converter.inference_output_type = tf.int8
converter.representative_dataset = representative_dataset

tflite_quant_model = converter.convert()

with open(osp.join(r'The location path to be saved','yolov5n_int8.tflite'), 'wb') as f:
    f.write(tflite_quant_model)

```

- Depois disso, você verá um arquivo de modelo `yolov5n_int8.tflite` na pasta do caminho de salvamento da placa. Este arquivo de modelo pode ser implantado em dispositivos `Grove Vision AI(V2)` ou `XIAO ESP32S3`.

### Otimização do grafo do modelo

- O Grove Vision AI (V2) suporta modelos otimizados com vela e também pode acelerar a inferência do modelo. Primeiro, execute o seguinte comando para instalar a ferramenta de linha de comando vela (o dispositivo `XIAO ESP32S3` ainda não é suportado).

```bash
pip3 install ethos-u-vela
```

- Depois disso, você precisa [baixar](https://files.seeedstudio.com/sscma/configs/vela_config.ini) o arquivo de configuração relacionado ao `vela`, ou copiar o conteúdo a seguir para um arquivo, que pode ser nomeado `vela_config.ini`

```bash
; file: my_vela_cfg.ini ; ----------------------------------------------------------------------------- 
; Vela configuration file ; ----------------------------------------------------------------------------- 
; System Configuration 

; My_Sys_Cfg 
[System_Config.My_Sys_Cfg] 
core_clock=400e6 
axi0_port=Sram 
axi1_port=OffChipFlash 
Sram_clock_scale=1.0 
Sram_burst_length=32 
Sram_read_latency=16 
Sram_write_latency=16 
Dram_clock_scale=0.75 
Dram_burst_length=128 
Dram_read_latency=500 
Dram_write_latency=250 
OnChipFlash_clock_scale=0.25 
OffChipFlash_clock_scale=0.015625 
OffChipFlash_burst_length=32 
OffChipFlash_read_latency=64 
OffChipFlash_write_latency=64 
; ----------------------------------------------------------------------------- 
; Memory Mode 
; My_Mem_Mode_Parent 
[Memory_Mode.My_Mem_Mode_Parent] 
const_mem_area=Axi1 
arena_mem_area=Axi0 
cache_mem_area=Axi0
```

- Por fim, use o seguinte comando para otimizar o grafo

```bash
vela --accelerator-config ethos-u55-64 \ 
    --config vela_config.ini \
    --system-config My_Sys_Cfg \
    --memory-mode My_Mem_Mode_Parent \
    --output-dir ${Save path of the optimized model} \
    ${The path of the tflite model that needs to be optimized}
```

## Implantar

- O arquivo de modelo que precisa ser implantado é o arquivo `tflite` exportado acima. Você pode gravar o arquivo de modelo no dispositivo de destino de acordo com o tutorial a seguir.

- Recomendamos fortemente usar nossa ferramenta web para gravar o modelo tflite treinado no dispositivo. Operações detalhadas são fornecidas no [Tutorial de Implantação](https://wiki.seeedstudio.com/pt-br/ModelAssistant_Deploy_Overview/)

`Note:` Como o dispositivo `ESP32S3` não suporta a implantação de modelos após a otimização do grafo com `vela`, você não precisa realizar a otimização do grafo do modelo `tflite` se quiser implantar o modelo no dispositivo `XIAO ESP32S3`.
