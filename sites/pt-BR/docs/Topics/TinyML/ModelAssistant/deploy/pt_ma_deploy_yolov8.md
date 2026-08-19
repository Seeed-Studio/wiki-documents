---
description: YOLOv8 do treinamento à implantação
title: Treinar e implantar o modelo de detecção de objetos YOLOv8
keywords:
  - YOLOv8
  - we2
  - detecção de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ma_deploy_yolov8
last_update:
  date: 04/02/2024
  author: Jack Mu
createdAt: '2024-04-07'
updatedAt: '2025-07-11'
url: https://wiki.seeedstudio.com/pt-br/ma_deploy_yolov8/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Implantar modelo de detecção de objetos YOLOv8

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/sscma/static/detection_person_yolov8.png" style={{width:600, height:'auto'}}/></div>

Este wiki apresentará como treinar o modelo oficial de detecção de alvos YOLOv8 e implantar o modelo treinado no dispositivo Grove Vision AI (V2) ou em dispositivos `XIAO ESP32S3`.

## Preparação do conjunto de dados

Recomenda-se usar a plataforma [roboflow](https://universe.roboflow.com/) para conjuntos de dados. Esta plataforma pode realizar anotação de conjuntos de dados e algumas estratégias de aumento de dados, além de suportar a exportação em vários formatos de conjuntos de dados.

## Instalar a ferramenta de linha de comando YOLOv8

- Por padrão, você já possui o ambiente `python` e a ferramenta de gerenciamento de pacotes `pip`, e python>=3.8.

<Tabs>

<TabItem value="pip installation" label="pip">

Instale o pacote `ultralytics`, executando `pip install -U ultralytics`. Visite o Python Package Index (PyPI) para saber mais sobre o pacote `ultralytics` em [https://pypi.org/project/ultralytics/](https://pypi.org/project/ultralytics/).

```bash
# Install using pip
pip install ultralytics==8.2.8
# Chinese users can use mirror acceleration
# pip install ultralytics==8.2.8 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

</TabItem>

<TabItem value="conda installation" label="conda">

`Conda` é um gerenciador de pacotes alternativo ao `pip` e também pode ser usado para instalação. Visite o Anaconda para mais detalhes: [https://anaconda.org/conda-forge/ultralytics](https://anaconda.org/conda-forge/ultralytics). O repositório feedstock `Ultralytics` para atualização de pacotes `conda` está localizado em [https://github.com/conda-forge/ultralytics-feedstock/](https://github.com/conda-forge/ultralytics-feedstock/).

```bash
# Install using conda
conda install -c conda-forge ultralytics=8.2.8
```

</TabItem>

<TabItem value="Git installation" label="Git">

Clone `ultralytics` se você estiver interessado em participar do desenvolvimento ou desejar experimentar o código-fonte mais recente, visite o repositório. Após clonar, navegue até o diretório e instale o pacote em modo de desenvolvimento usando o parâmetro `-e`.

```bash
# Clone the official repository
git clone -b v8.2.8 https://github.com/ultralytics/ultralytics

# Go into the cloned folder
cd ultralytics

# Install in developer mode
pip install -e .
```

</TabItem>

</Tabs>

`Tips:` Se você não estiver familiarizado com o código do YOLOv8, é recomendável usar pip ou conda para instalá-lo.

- Você pode usar o comando de consulta de versão para testar se a ferramenta de linha de comando `yolo` foi instalada com sucesso.

```bash
# version query
yolo -v
```

## Treinar

- Primeiro, vá para a pasta do conjunto de dados baixado

- Execute o seguinte comando para iniciar o treinamento do modelo

```bash
yolo train detect model=yolov8n.pt data=./data.yaml imgsz=192
```

## Exportar modelo para tflite

- Após o treinamento, o modelo estará na pasta `runs/train/exp*/weights/`. Certifique-se de que os indicadores de avaliação do seu modelo atendam às suas necessidades.
- Use o seguinte comando para exportar o modelo `tflite`

```bash
yolo export model=${your model path}  format=tflite imgsz=192 int8
```

- Em seguida, você verá uma pasta `yolov8n_saved_model` na pasta atual, que contém o arquivo de modelo `yolov8n_full_integer_quant.tflite`. Este arquivo de modelo pode ser implantado em dispositivos `Grove Vision AI(V2)` ou `XIAO ESP32S3`.

### Otimização do grafo do modelo

- Grove Vision AI (V2) suporta modelos otimizados com vela e também pode acelerar a inferência do modelo. Primeiro, execute o seguinte comando para instalar a ferramenta de linha de comando vela (o dispositivo `XIAO ESP32S3` ainda não é suportado)

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

Após a execução, um modelo tflite com grafo otimizado será gerado no caminho especificado por `--output-dir`.

## Implantar

- O arquivo de modelo que precisa ser implantado é o arquivo `tflite` exportado acima. Você pode gravar o arquivo de modelo no dispositivo de destino de acordo com o seguinte tutorial.

- Recomendamos fortemente o uso da nossa ferramenta web para gravar o modelo tflite treinado no dispositivo. Operações detalhadas são fornecidas no [Tutorial de Implantação](https://wiki.seeedstudio.com/pt-br/ModelAssistant_Deploy_Overview/)

`Note:` Como o dispositivo `ESP32S3` não suporta implantação de modelo após a otimização de grafo `vela`, você não precisa realizar a otimização de grafo do modelo `tflite` se quiser implantar o modelo no dispositivo `XIAO ESP32S3`.
