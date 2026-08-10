---
description: Implantação do modelo de detecção de objetos YOLO26
title: Treinar e implantar o modelo de detecção de objetos YOLO26
keywords:
  - YOLO26
  - Grove Vision AI V2
  - detecção de objetos
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /ma_deploy_yolov26
last_update:
  date: 08/07/2026
  author: Carla
createdAt: '2026-08-07'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/pt-br/ma_deploy_yolov26/
---

# Treinar e implantar o modelo de detecção de objetos YOLO26

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/yolo26_GV2/result.jpg" style={{width:800, height:'auto'}}/></div>

Este wiki apresenta um fluxo de trabalho recomendado para implantar um modelo de detecção de objetos YOLO26 personalizado no Grove Vision AI V2.

Para manter a saída estável e reprodutível, recomendamos preparar o pacote de conjunto de dados com antecedência, executar o notebook do Google Colab fornecido e, em seguida, implantar o modelo `best_full_integer_quant_vela.tflite` gerado no Grove Vision AI V2.

## Preparação do conjunto de dados

Antes de executar o notebook, prepare um pacote de conjunto de dados chamado `custom_data.zip`.

Se você é novo na preparação de conjuntos de dados de detecção de objetos, pode consultar o tutorial do YouTube da Edje Electronics: [How to Train YOLO Object Detection Models in Google Colab (YOLO26, YOLO11, YOLOv8)](https://www.youtube.com/watch?v=r0RspiLG260).

Baixe o arquivo de pesos pré-treinados YOLO26 nano e coloque-o na raiz de `custom_data/`:

[Download yolo26n.pt](https://files.seeedstudio.com/yolo26_GV2/yolo26n.pt)

Empacote seus arquivos com a seguinte estrutura:

```text
custom_data/
|-- data/
|   |-- train/
|   |   |-- images/
|   |   `-- labels/
|   `-- validation/
|       |-- images/
|       `-- labels/
|-- data.yaml
`-- yolo26n.pt
```

Após o empacotamento, envie o `custom_data.zip` para o seu Google Drive.

## Executar o notebook do Colab

Baixe o [yolo26_GV2.ipynb](https://files.seeedstudio.com/yolo26_GV2/yolo26_GV2.ipynb) e abra-o no Google Colab.

No Colab, execute todas as células em ordem. O notebook usará o pacote `custom_data.zip` do seu Google Drive, treinará o modelo YOLO26, exportará o modelo TFLite e aplicará a otimização Vela para o Grove Vision AI V2.

Após a conclusão do notebook, baixe o arquivo de modelo gerado:

```text
best_full_integer_quant_vela.tflite
```

O modelo gerado pode ser encontrado no navegador de arquivos do Colab em `runs/detect/train/weights/`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/yolo26_GV2/model_file.jpg" style={{width:600, height:'auto'}}/></div>

## Implantar no Grove Vision AI V2

Antes de implantar o modelo no Grove Vision AI V2, envie seu modelo personalizado para o SenseCraft AI. Vá para `Models`, abra `My Models`, clique em `Add Model`, depois preencha as informações do modelo, adicione as classes de detecção e envie o `best_full_integer_quant_vela.tflite` como arquivo de modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/yolo26_GV2/my_model.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/yolo26_GV2/deploy.jpg" style={{width:600, height:'auto'}}/></div>

Depois que o modelo personalizado for enviado, implante o `best_full_integer_quant_vela.tflite` no Grove Vision AI V2 seguindo o tutorial de implantação do Model Assistant:

[Tutorial de Implantação](https://wiki.seeedstudio.com/pt-br/ModelAssistant_Deploy_Overview/)

Após a implantação, você pode usar a janela de visualização no Model Assistant para verificar o resultado da detecção.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/yolo26_GV2/result.jpg" style={{width:600, height:'auto'}}/></div>

Este fluxo de trabalho recomendado é o caminho mais estável para gerar um modelo YOLO26 implantável para o Grove Vision AI V2. Usuários avançados podem adaptar o processo para outros ambientes de treinamento, mas os resultados da implantação podem variar dependendo do ambiente, das versões dos pacotes, das configurações de exportação e do comportamento de quantização.

`Tip:` Se o modelo `invoke fails`, verifique se a conexão entre o Grove Vision AI V2 e o módulo de câmera está firme.
## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>