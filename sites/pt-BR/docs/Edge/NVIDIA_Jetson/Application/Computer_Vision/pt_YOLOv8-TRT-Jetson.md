---
description: Implantar YOLOv8 no NVIDIA Jetson usando TensorRT - Rotulagem de Dados, Treinamento de Modelo de IA, Implantação de Modelo de IA
title: Implantar YOLOv8 com TensorRT
tags:
  - Rotulagem de Dados
  - Treinamento de modelo de IA
  - Implantação de modelo de IA
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /YOLOv8-TRT-Jetson
last_update:
  date: 07/17/2023
  author: Lakshantha
createdAt: '2023-07-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/YOLOv8-TRT-Jetson/
---

# Implantar YOLOv8 no NVIDIA Jetson usando TensorRT

Este guia da wiki explica como implantar um modelo YOLOv8 na Plataforma NVIDIA Jetson e realizar inferência usando TensorRT. Aqui usamos TensorRT para maximizar o desempenho de inferência na plataforma Jetson.

Diferentes tarefas de visão computacional serão apresentadas aqui, tais como:

- Detecção de Objetos
- Segmentação de Imagem
- Classificação de Imagem
- Estimativa de Pose
- Rastreamento de Objetos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/8.gif
" style={{width:1000, height:'auto'}}/></div>

## Pré-requisitos

- PC Host Ubuntu (nativo ou VM usando VMware Workstation Player)
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) ou qualquer outro dispositivo NVIDIA Jetson executando JetPack 5.1.1 ou superior

:::note
Esta wiki foi testada e verificada em um [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) e reComputer Industrial J4012[https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html] com módulo NVIDIA Jetson orin NX 16GB
:::

## Gravar o JetPack no Jetson

Agora você precisa se certificar de que o dispositivo Jetson está gravado com um sistema [JetPack](https://developer.nvidia.com/embedded/jetpack). Você pode usar o NVIDIA SDK Manager ou a linha de comando para gravar o JetPack no dispositivo.

Para guias de gravação dos dispositivos Jetson da Seeed, consulte os links abaixo:

- [reComputer J1010 | J101](https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/pt-br/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/pt-br/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack)
- [Placa Carrier A203](https://wiki.seeedstudio.com/pt-br/reComputer_A203_Flash_System)
- [Placa Carrier A205](https://wiki.seeedstudio.com/pt-br/reComputer_A205_Flash_System)
- [Kit Jetson Xavier AGX H01](https://wiki.seeedstudio.com/pt-br/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Kit Jetson AGX Orin 32GB H01](https://wiki.seeedstudio.com/pt-br/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

:::note
Certifique-se de gravar o JetPack versão 5.1.1, porque essa é a versão que verificamos para esta wiki
:::

## Implantar YOLOV8 no Jetson com Uma Linha de Código

Depois de gravar o dispositivo Jetson com JetPack, você pode simplesmente executar os comandos abaixo para rodar modelos YOLOv8. Isso primeiro irá baixar e instalar os pacotes necessários, dependências, configurar o ambiente e baixar modelos pré-treinados do YOLOv8 para realizar tarefas de detecção de objetos, segmentação de imagem, estimativa de pose e classificação de imagens!

```sh
wget files.seeedstudio.com/YOLOv8-Jetson.py && python YOLOv8-Jetson.py
```

:::note
O código-fonte para o script acima pode ser encontrado [aqui](https://github.com/yuyoujiang/Run-YOLOv8-in-One-Line-on-Jetson)
:::

## Usar modelos pré-treinados

A maneira mais rápida de começar com YOLOv8 é usar modelos pré-treinados fornecidos pelo YOLOv8. No entanto, estes são modelos PyTorch e, portanto, só utilizarão a CPU ao fazer inferência no Jetson. Se você quiser o melhor desempenho desses modelos no Jetson enquanto utiliza a GPU, você pode exportar os modelos PyTorch para TensorRT seguindo esta seção da wiki.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="detec" label="Detecção de Objetos">

YOLOv8 oferece 5 pesos de modelos PyTorch pré-treinados para detecção de objetos, treinados no conjunto de dados COCO com tamanho de imagem de entrada 640x640. Você pode encontrá-los abaixo

<table>
  <thead>
    <tr>
      <th>Modelo</th>
      <th>tamanho<br />(pixels)</th>
      <th>mAPval<br />50-95</th>
      <th>Velocidade<br />CPU ONNX<br />(ms)</th>
      <th>Velocidade<br />A100 TensorRT<br />(ms)</th>
      <th>parâmetros<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n.pt" target="_blank" rel="noopener noreferrer">YOLOv8n</a></td>
      <td>640</td>
      <td>37.3</td>
      <td>80.4</td>
      <td>0.99</td>
      <td>3.2</td>
      <td>8.7</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt" target="_blank" rel="noopener noreferrer">YOLOv8s</a></td>
      <td>640</td>
      <td>44.9</td>
      <td>128.4</td>
      <td>1.20</td>
      <td>11.2</td>
      <td>28.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m.pt" target="_blank" rel="noopener noreferrer">YOLOv8m</a></td>
      <td>640</td>
      <td>50.2</td>
      <td>234.7</td>
      <td>1.83</td>
      <td>25.9</td>
      <td>78.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l.pt" target="_blank" rel="noopener noreferrer">YOLOv8l</a></td>
      <td>640</td>
      <td>52.9</td>
      <td>375.2</td>
      <td>2.39</td>
      <td>43.7</td>
      <td>165.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x.pt" target="_blank" rel="noopener noreferrer">YOLOv8x</a></td>
      <td>640</td>
      <td>53.9</td>
      <td>479.1</td>
      <td>3.53</td>
      <td>68.2</td>
      <td>257.8</td>
    </tr>
  </tbody>
</table>

Referência: https://docs.ultralytics.com/tasks/detect

Você pode escolher e baixar o modelo desejado na tabela acima e executar o comando abaixo para rodar a inferência em uma imagem

```sh
yolo detect predict model=yolov8n.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aqui, para o modelo, você pode mudar para yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt e ele fará o download do modelo pré-treinado correspondente

Você também pode conectar uma webcam e executar o comando abaixo

```sh
yolo detect predict model=yolov8n.pt source='0' show=True
```

:::note
Se você encontrar quaisquer erros ao executar os comandos acima, tente adicionar "device=0" ao final do comando
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
O acima é executado em um reComputer J4012/ reComputer Industrial J4012 e usa o modelo YOLOv8s treinado com entrada 640x640 e TensorRT com precisão FP16.
:::

</TabItem>
<TabItem value="classfiy" label="Classificação de Imagem">

YOLOv8 oferece 5 pesos de modelos PyTorch pré-treinados para classificação de imagem, treinados no ImageNet com tamanho de imagem de entrada 224x224. Você pode encontrá-los abaixo

<table>
  <thead>
    <tr>
      <th>Modelo</th>
      <th>tamanho<br />(pixels)</th>
      <th>acc<br />top1</th>
      <th>acc<br />top5<br /></th>
      <th>Velocidade<br />CPU ONNX<br />(ms)<br /></th>
      <th>Velocidade<br />A100 TensorRT<br />(ms)<br /><br /></th>
      <th>parâmetros<br />(M)<br /></th>
      <th>FLOPs<br />(B) em 640</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>YOLOv8n-cls</td>
      <td>224</td>
      <td>66.6</td>
      <td>87.0</td>
      <td>12.9</td>
      <td>0.31</td>
      <td>2.7</td>
      <td>4.3</td>
    </tr>
    <tr>
      <td>YOLOv8s-cls</td>
      <td>224</td>
      <td>72.3</td>
      <td>91.1</td>
      <td>23.4</td>
      <td>0.35</td>
      <td>6.4</td>
      <td>13.5</td>
    </tr>
    <tr>
      <td>YOLOv8m-cls</td>
      <td>224</td>
      <td>76.4</td>
      <td>93.2</td>
      <td>85.4</td>
      <td>0.62</td>
      <td>17.0</td>
      <td>42.7</td>
    </tr>
    <tr>
      <td>YOLOv8l-cls</td>
      <td>224</td>
      <td>78.0</td>
      <td>94.1</td>
      <td>163.0</td>
      <td>0.87</td>
      <td>37.5</td>
      <td>99.7</td>
    </tr>
    <tr>
      <td> YOLOv8x-cls</td>
      <td>224</td>
      <td>78.4</td>
      <td>94.3</td>
      <td>232.0</td>
      <td>1.01</td>
      <td>57.4</td>
      <td>154.8</td>
    </tr>
  </tbody>
</table>

Referência: https://docs.ultralytics.com/tasks/classify

Você pode escolher o modelo desejado e executar o comando abaixo para rodar a inferência em uma imagem

```sh
yolo classify predict model=yolov8n-cls.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aqui, para o modelo, você pode mudar para yolov8s-cls.pt, yolov8m-cls.pt, yolov8l-cls.pt, yolov8x-cls.pt e ele fará o download do modelo pré-treinado correspondente

Você também pode conectar uma webcam e executar o comando abaixo

```sh
yolo classify predict model=yolov8n-cls.pt source='0' show=True
```

:::note
Se você encontrar quaisquer erros ao executar os comandos acima, tente adicionar "device=0" ao final do comando
:::

(atualizar com inferência 224)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/5.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
O acima é executado em um reComputer J4012/ reComputer Industrial J4012 e usa o modelo YOLOv8s-cls treinado com entrada 224x224 e TensorRT com precisão FP16. Além disso, certifique-se de passar o argumento **imgsz=224** dentro do comando de inferência com exports TensorRT porque o mecanismo de inferência aceita tamanho de imagem 640 por padrão ao usar modelos TensorRT.
:::

</TabItem>
<TabItem value="segment" label="Segmentação de Imagem">

YOLOv8 oferece 5 pesos de modelos PyTorch pré-treinados para segmentação de imagem, treinados no conjunto de dados COCO com tamanho de imagem de entrada 640x640. Você pode encontrá-los abaixo

<table>
  <thead>
    <tr>
      <th>Modelo</th>
      <th>tamanho<br />(pixels)</th>
      <th>mAPbox<br />50-95</th>
      <th>mAPmask<br />50-95</th>
      <th>Velocidade<br />CPU ONNX<br />(ms)</th>
      <th>Velocidade<br />A100 TensorRT<br />(ms)</th>
      <th>parâmetros<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-seg.pt">YOLOv8n-seg</a></td>
      <td>640</td>
      <td>36.7</td>
      <td>30.5</td>
      <td>96.1</td>
      <td>1.21</td>
      <td>3.4</td>
      <td>12.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-seg.pt">YOLOv8s-seg</a></td>
      <td>640</td>
      <td>44.6</td>
      <td>36.8</td>
      <td>155.7</td>
      <td>1.47</td>
      <td>11.8</td>
      <td>42.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-seg.pt">YOLOv8m-seg</a></td>
      <td>640</td>
      <td>49.9</td>
      <td>40.8</td>
      <td>317.0</td>
      <td>2.18</td>
      <td>27.3</td>
      <td>110.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-seg.pt">YOLOv8l-seg</a></td>
      <td>640</td>
      <td>52.3</td>
      <td>42.6</td>
      <td>572.4</td>
      <td>2.79</td>
      <td>46.0</td>
      <td>220.5</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-seg.pt">YOLOv8x-seg</a></td>
      <td>640</td>
      <td>53.4</td>
      <td>43.4</td>
      <td>712.1</td>
      <td>4.02</td>
      <td>71.8</td>
      <td>344.1</td>
    </tr>
  </tbody>
</table>

Referência: https://docs.ultralytics.com/tasks/segment

Você pode escolher o modelo desejado e executar o comando abaixo para rodar a inferência em uma imagem

```sh
yolo segment predict model=yolov8n-seg.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aqui, para o modelo, você pode mudar para yolov8s-seg.pt, yolov8m-seg.pt, yolov8l-seg.pt, yolov8x-seg.pt e ele fará o download do modelo pré-treinado relevante

Você também pode conectar uma webcam e executar o comando abaixo

```sh
yolo segment predict model=yolov8n-seg.pt source='0' show=True
```

:::note
Se você encontrar algum erro ao executar os comandos acima, tente adicionar "device=0" ao final do comando
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/3.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
O exemplo acima é executado em um reComputer J4012/ reComputer Industrial J4012 e usa o modelo YOLOv8s-seg treinado com entrada 640x640 e usando precisão TensorRT FP16.
:::

</TabItem>
<TabItem value="pose" label="Estimativa de Pose">

YOLOv8 oferece 6 pesos de modelos PyTorch pré-treinados para estimativa de pose, treinados no conjunto de dados de keypoints COCO com tamanho de imagem de entrada 640x640. Você pode encontrá-los abaixo

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>mAPpose<br />50-95</th>
      <th>mAPpose<br />50</th>
      <th>Speed<br />CPU ONNX<br />(ms)</th>
      <th>Speed<br />A100 TensorRT<br />(ms)</th>
      <th>params<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-pose.pt">YOLOv8n-pose</a></td>
      <td>640</td>
      <td>50.4</td>
      <td>80.1</td>
      <td>131.8</td>
      <td>1.18</td>
      <td>3.3</td>
      <td>9.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-pose.pt">YOLOv8s-pose</a></td>
      <td>640</td>
      <td>60.0</td>
      <td>86.2</td>
      <td>233.2</td>
      <td>1.42</td>
      <td>11.6</td>
      <td>30.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-pose.pt">YOLOv8m-pose</a></td>
      <td>640</td>
      <td>65.0</td>
      <td>88.8</td>
      <td>456.3</td>
      <td>2.00</td>
      <td>26.4</td>
      <td>81.0</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-pose.pt">YOLOv8l-pose</a></td>
      <td>640</td>
      <td>67.6</td>
      <td>90.0</td>
      <td>784.5</td>
      <td>2.59</td>
      <td>44.4</td>
      <td>168.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose.pt">YOLOv8x-pose</a></td>
      <td>640</td>
      <td>69.2</td>
      <td>90.2</td>
      <td>1607.1</td>
      <td>3.73</td>
      <td>69.4</td>
      <td>263.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose-p6.pt">YOLOv8x-pose-p6</a></td>
      <td>1280</td>
      <td>71.6</td>
      <td>91.2</td>
      <td>4088.7</td>
      <td>10.04</td>
      <td>99.1</td>
      <td>1066.4</td>
    </tr>
  </tbody>
</table>

Referência: https://docs.ultralytics.com/tasks/pose

Você pode escolher o modelo desejado e executar o comando abaixo para rodar a inferência em uma imagem

```sh
yolo pose predict model=yolov8n-pose.pt source='https://ultralytics.com/images/bus.jpg'
```

Aqui, para o modelo, você pode mudar para yolov8s-pose.pt, yolov8m-pose.pt, yolov8l-pose.pt, yolov8x-pose.pt, yolov8x-pose-p6 e ele fará o download do modelo pré-treinado relevante

Você também pode conectar uma webcam e executar o comando abaixo

```sh
yolo pose predict model=yolov8n-pose.pt source='0'
```

:::note
Se você encontrar algum erro ao executar os comandos acima, tente adicionar "device=0" ao final do comando
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/4.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="track" label="Rastreamento de Objetos">

O rastreamento de objetos é uma tarefa que envolve identificar a localização e a classe dos objetos e, em seguida, atribuir um ID exclusivo a essa detecção em fluxos de vídeo.

Basicamente, a saída do rastreamento de objetos é a mesma da detecção de objetos com um ID de objeto adicional.

Referência: https://docs.ultralytics.com/modes/track

Você pode escolher o modelo desejado com base em detecção de objetos/ segmentação de imagem e executar o comando abaixo para rodar a inferência em um vídeo

```sh
yolo track model=yolov8n.pt source="https://youtu.be/Zgi9g1ksQHc"
```

Aqui, para o modelo, você pode mudar para yolov8n.pt, yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt, yolov8n-seg.pt, yolov8s-seg.pt, yolov8m-seg.pt, yolov8l-seg.pt, yolov8x-seg.pt, e ele fará o download do modelo pré-treinado relevante

Você também pode conectar uma webcam e executar o comando abaixo

```sh
yolo track model=yolov8n.pt source="0"
```

:::note
Se você encontrar algum erro ao executar os comandos acima, tente adicionar "device=0" ao final do comando
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/6.gif
" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/7.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

<!-- Code END -->

---

## Use TensorRT para Melhorar a Velocidade de Inferência

Como mencionamos antes, se você quiser melhorar a velocidade de inferência no Jetson executando modelos YOLOv8, primeiro você precisa converter os modelos PyTorch originais em modelos TensorRT.

Siga as etapas abaixo para converter modelos YOLOv8 PyTorch em modelos TensorRT.

:::note
Isso funciona para todas as quatro tarefas de visão computacional que mencionamos antes
:::

- **Etapa 1.** Execute o comando de exportação especificando o caminho do modelo

```sh
yolo export model=<path_to_pt_file> format=engine device=0
```

Por exemplo:

```sh
yolo export model=yolov8n.pt format=engine device=0
```

:::note
Se você encontrar um erro sobre cmake, pode ignorá-lo. Por favor, seja paciente até que a exportação para TensorRT seja concluída. Pode levar alguns minutos
:::

Depois que o arquivo de modelo TensorRT (.engine) for criado, você verá a saída a seguir

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/1.jpg
" style={{width:800, height:'auto'}}/></div>

- **Etapa 2.** Se você quiser passar argumentos adicionais, pode fazê-lo seguindo a tabela abaixo

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Value</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>imgsz</td>
    <td>640</td>
    <td>Tamanho da imagem como escalar ou lista (h, w), ou seja, (640, 480)</td>
  </tr>
  <tr>
    <td>half</td>
    <td>False</td>
    <td>Quantização FP16</td>
  </tr>
  <tr>
    <td>dynamic</td>
    <td>False</td>
    <td>Eixos dinâmicos</td>
  </tr>
  <tr>
    <td>simplify</td>
    <td>False</td>
    <td>Simplificar modelo</td>
  </tr>
  <tr>
    <td>workspace</td>
    <td>4</td>
    <td>Tamanho do workspace (GB)</td>
  </tr>
</tbody>
</table>

Por exemplo, se você quiser converter seu modelo PyTorch em um modelo TensorRT com quantização FP16, execute assim

```sh
yolo export model=yolov8n.pt format=engine half=True device=0
```

Depois que o modelo for exportado com sucesso, você pode simplesmente substituir esse modelo pelo argumento **model=** dentro do comando **predict** do **yolo** ao executar todas as 4 tarefas de detecção, classificação, segmentação e estimativa de pose.

Por exemplo, com detecção de objetos:

```sh
yolo detect predict model=yolov8n.engine source='0' show=True
```

## Traga Seu Próprio Modelo de IA

### Coleta e Rotulagem de Dados

Se você tem uma aplicação específica de IA e quer trazer seu próprio modelo de IA que seja adequado para sua aplicação, você pode coletar seu próprio conjunto de dados, rotulá-los e então treinar usando YOLOv8.

Se você não quiser coletar dados por conta própria, também pode escolher conjuntos de dados públicos que já estão disponíveis. Você pode baixar vários conjuntos de dados disponíveis publicamente, como o [conjunto de dados COCO](https://cocodataset.org), [conjunto de dados Pascal VOC](http://host.robots.ox.ac.uk/pascal/VOC) e muitos outros. O [Roboflow Universe](https://universe.roboflow.com) é uma plataforma recomendada que oferece uma grande variedade de conjuntos de dados e possui [mais de 90.000 conjuntos de dados com mais de 66 milhões de imagens](https://blog.roboflow.com/computer-vision-datasets-and-apis) disponíveis para criar modelos de visão computacional. Além disso, você pode simplesmente pesquisar conjuntos de dados de código aberto no Google e escolher entre uma variedade de conjuntos de dados disponíveis.

Se você tiver seu próprio conjunto de dados e quiser anotar as imagens, recomendamos que use a ferramenta de anotação fornecida pelo [Roboflow](https://roboflow.com). Por favor, siga [esta parte do wiki](https://wiki.seeedstudio.com/pt-br/YOLOv5-Object-Detection-Jetson/#anotar-conjunto-de-dados-usando-roboflow) para saber mais sobre isso. Você também pode seguir [este guia](https://docs.roboflow.com/annotate/use-roboflow-annotate) do Roboflow sobre anotação.

### Treinamento

Aqui temos 3 métodos para treinar um modelo.

1. A primeira maneira seria usar o [Ultralytics HUB](https://ultralytics.com/hub). Você pode integrar facilmente o Roboflow ao Ultralytics HUB para que todos os seus projetos do Roboflow fiquem prontamente disponíveis para treinamento. Aqui é oferecido um notebook do Google Colab para iniciar facilmente o processo de treinamento e também visualizar o progresso do treinamento em tempo real.

2. A segunda maneira seria usar um workspace do Google Colab criado por nós para facilitar o processo de treinamento. Aqui usamos a Roboflow API para baixar o conjunto de dados a partir do projeto do Roboflow.

3. A terceira maneira seria usar um PC local para o processo de treinamento. Aqui você precisa se certificar de que possui uma GPU suficientemente potente e também precisa baixar o conjunto de dados manualmente.

<!-- Code -->

<Tabs>
<TabItem value="Ultralytics" label="Ultralytics HUB + Roboflow + Google Colab">

Aqui usamos o Ultralytics HUB para carregar o projeto do Roboflow e depois treinar no Google Colab.

- **Passo 1.** Visite [este URL](https://hub.ultralytics.com/signup) e registre-se para uma conta Ultralytics

- **Passo 2.** Depois de fazer login com a conta recém‑criada, você verá o seguinte painel

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 3.** Visite [este URL](https://app.roboflow.com/login) e registre-se para uma conta Roboflow

- **Passo 4.** Depois de fazer login com a conta recém‑criada, você verá o seguinte painel

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/11.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 5.** Crie um novo workspace e crie um novo projeto dentro do workspace seguindo [este guia wiki](https://wiki.seeedstudio.com/pt-br/YOLOv5-Object-Detection-Jetson/#anotar-conjunto-de-dados-usando-roboflow) que preparamos. Você também pode [ver aqui](https://blog.roboflow.com/getting-started-with-roboflow) para aprender mais na documentação oficial do Roboflow.

- **Passo 6.** Depois que você tiver alguns projetos dentro do seu workspace, ele ficará como mostrado abaixo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/12.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 7.** Vá para **Settings** e clique em **Roboflow API**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/13.jpg
" style={{width:300, height:'auto'}}/></div>

- **Passo 8.** Clique no botão **copy** para copiar a **Private API Key**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/14.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 9.** Volte para o painel do Ultralytics HUB, clique em **Integrations**, cole a API Key que copiamos antes na coluna vazia e clique em **Add**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/15.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 10** Se você vir o nome do seu workspace listado, isso significa que a integração foi bem‑sucedida

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/16.jpg
" style={{width:550, height:'auto'}}/></div>

- **Passo 11** Navegue até **Datasets** e você verá todos os seus projetos do Roboflow aqui

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/17.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 12** Clique em um projeto para verificar mais detalhes sobre o conjunto de dados. Aqui selecionei um conjunto de dados que pode detectar maçãs saudáveis e danificadas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/18.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 13** Clique em **Train Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/19.jpg
" style={{width:500, height:'auto'}}/></div>

- **Passo 14** Selecione a **Architecture**, defina um **Model name (optional)** e clique em **Continue**. Aqui selecionamos YOLOv8s como arquitetura do modelo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/22.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 15** Em **Advanced options**, configure as definições de acordo com a sua preferência, copie e cole o código do Colab (ele será colado depois no workspace do Colab) e clique em **Open Google Colab**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/24.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 16** Faça login na sua conta Google se ainda não tiver feito

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/25.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 17** Navegue até `Runtime > Change runtime type`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/26.jpg
" style={{width:500, height:'auto'}}/></div>

- **Passo 18** Selecione **GPU** em **Hardware accelerator**, o mais alto disponível em **GPU type** e clique em **Save**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/27.jpg
" style={{width:500, height:'auto'}}/></div>

- **Passo 19** Clique em **Connect**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/28.jpg
" style={{width:250, height:'auto'}}/></div>

- **Passo 20** Clique no botão **RAM, Disk** para verificar o uso de recursos de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/31.jpg
" style={{width:600, height:'auto'}}/></div>

- **Passo 21** Clique no botão **Play** para executar a primeira célula de código

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/29.jpg
" style={{width:750, height:'auto'}}/></div>

- **Passo 22** Cole a célula de código que copiamos anteriormente do Ultralytics HUB na seção **Start** e execute‑a para iniciar o treinamento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/30.jpg
" style={{width:650, height:'auto'}}/></div>

- **Passo 23** Agora, se você voltar ao Ultralytics HUB, verá a mensagem **Connected**. Clique em **Done**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/32.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 24** Aqui você verá **Box Loss, Class Loss e Object Loss** em tempo real enquanto o modelo está sendo treinado no Google Colab

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/33.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 25** Depois que o treinamento terminar, você verá a seguinte saída no Google Colab

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/34.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 26** Agora volte para o Ultralytics HUB, vá até a aba **Preview** e envie uma imagem de teste para verificar como o modelo treinado está se comportando

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/35.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 26** Finalmente vá até a aba **Deploy** e baixe o modelo treinado no formato que você preferir para fazer inferência com o YOLOv8. Aqui escolhemos PyTorch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/36.png
" style={{width:1000, height:'auto'}}/></div>

Agora você pode usar este modelo baixado com as tarefas que explicamos anteriormente neste wiki. Você só precisa substituir o arquivo de modelo pelo seu modelo.

Por exemplo:

```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="Roboflow" label="Roboflow + Google Colab">

Aqui usamos um ambiente Google Colaboratory para realizar o treinamento na nuvem. Além disso, usamos a Roboflow api dentro do Colab para baixar facilmente nosso conjunto de dados.

- **Passo 1.** Clique [aqui](https://colab.research.google.com/gist/lakshanthad/9fbe33058cb7cab49ac8fc345143d849/yolov5-training-for-jetson.ipynb) para abrir um workspace do Google Colab já preparado e siga as etapas mencionadas no workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/39.jpg
" style={{width:800, height:'auto'}}/></div>

Depois que o treinamento terminar, você verá uma saída como a seguir:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/40.jpg
" style={{width:800, height:'auto'}}/></div>

- **Passo 2.** Na aba Files, se você navegar até `runs/train/exp/weights`, verá um arquivo chamado **best.pt**. Este é o modelo gerado a partir do treinamento. Baixe este arquivo e copie‑o para o seu dispositivo Jetson, pois este é o modelo que vamos usar depois para inferência no dispositivo Jetson.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/41.jpg
" style={{width:500, height:'auto'}}/></div>

Agora você pode usar este modelo baixado com as tarefas que explicamos anteriormente neste wiki. Você só precisa substituir o arquivo de modelo pelo seu modelo.

Por exemplo:

```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="PC" label="Roboflow + Local PC">

Aqui você pode usar um PC com um sistema operacional Linux para treinamento. Usamos um PC com Ubuntu 20.04 para este wiki.

- **Passo 1.** Instale o pip se você não tiver o pip no seu sistema

```sh
sudo apt install python3-pip -y
```

- **Passo 2.** Instale Ultralytics juntamente com as dependências

```sh
pip install ultralytics
```

- **Passo 3.** No Roboflow, dentro do seu projeto, vá para **Versions**, selecione **Export Dataset**, selecione **Format** como **YOLOv8**, escolha **download zip to computer** e clique em **Continue**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/42.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Passo 4.** Extraia o arquivo zip baixado

- **Passo 5.** Execute o seguinte comando para iniciar o treinamento. Aqui você precisa substituir **path_to_yaml** pelo local do arquivo .yaml que está dentro do arquivo zip extraído anteriormente

```sh
yolo train data=<path_to_yaml> model=yolov8s.pt epochs=100 imgsz=640 batch=-1
```

:::note
Aqui o tamanho da imagem é definido como 640x640. Usamos o batch-size como -1 porque isso determinará automaticamente o melhor tamanho de batch. Você também pode alterar o epoch de acordo com sua preferência. Aqui você pode mudar o modelo pré-treinado para qualquer modelo de detecção, segmentação, classificação ou pose.
:::

Depois que o treinamento for concluído, você verá uma saída como a seguir:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/43.png
" style={{width:1000, height:'auto'}}/></div>

- **Passo 6.** Dentro de **runs/detect/train/weights**, você verá um arquivo chamado **best.pt**. Este é o modelo gerado a partir do treinamento. Baixe este arquivo e copie-o para o seu dispositivo Jetson porque este é o modelo que usaremos depois para inferência no dispositivo Jetson.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/44.png
" style={{width:500, height:'auto'}}/></div>

Agora você pode usar este modelo baixado com as tarefas que explicamos anteriormente neste wiki. Você só precisa substituir o arquivo de modelo pelo seu modelo.

Por exemplo:

```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
</Tabs>

<!-- Code END -->

---

## Testes de Desempenho

### Preparação

Realizamos testes de desempenho para todas as tarefas de visão computacional suportadas pelo YOLOv8 rodando no reComputer J4012/ reComputer Industrial J4012 com módulo NVIDIA Jetson Orin NX 16GB.

Incluído no diretório de samples há uma ferramenta de linha de comando chamada [trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec). trtexec é uma ferramenta para usar TensorRT sem precisar desenvolver sua própria aplicação. A ferramenta trtexec tem três principais finalidades:

- Fazer benchmark de redes com dados de entrada aleatórios ou fornecidos pelo usuário.
- Gerar engines serializadas a partir de modelos.
- Gerar um cache de temporização serializado a partir do builder.

Aqui podemos usar a ferramenta trtexec para rapidamente fazer benchmark dos modelos com diferentes parâmetros. Mas antes de tudo, você precisa ter um modelo onnx e podemos gerar esse modelo onnx usando ultralytics yolov8.

- **Passo 1.** Construir o ONNX usando:

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **Passo 2.** Construir o arquivo de engine usando trtexec da seguinte forma:

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

Por exemplo:

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

Isso produzirá resultados de desempenho como a seguir juntamente com um arquivo .engine gerado. Por padrão, ele converterá ONNX em um arquivo otimizado TensorRT em precisão FP32 e você poderá ver a saída como a seguir

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/46.jpg
" style={{width:1000, height:'auto'}}/></div>

Se você quiser precisão **FP16**, que oferece melhor desempenho do que **FP32**, você pode executar o comando acima da seguinte forma

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --fp16 --saveEngine=/home/nvidia/yolov8s.engine 
```

No entanto, se você quiser precisão **INT8**, que oferece melhor desempenho do que **FP16**, você pode executar o comando acima da seguinte forma

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

### Resultados

Abaixo resumimos os resultados que obtivemos de todas as quatro tarefas de visão computacional rodando no reComputer J4012/ reComputer Industrial J4012.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/45.png
" style={{width:1000, height:'auto'}}/></div>

## Demo Extra: Detector e Contador de Exercícios com YOLOv8

Nós construímos um aplicativo demo de estimativa de pose para detecção e contagem de exercícios com YOLOv8 usando o modelo YOLOv8-Pose. Você pode conferir o projeto [aqui](https://github.com/yuyoujiang/Exercise-Counter-with-YOLOv8-on-NVIDIA-Jetson) para saber mais sobre este demo e implantá-lo no seu próprio dispositivo Jetson!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/9.gif
" style={{width:1000, height:'auto'}}/></div>

## Configuração Manual do YOLOv8 para NVIDIA Jetson

Se o script de uma linha que mencionamos antes apresentar alguns erros, você pode seguir os passos abaixo um por um para preparar o dispositivo Jetson com YOLOv8.

### Instalar o Pacote Ultralytics

- **Passo 1.** Acesse o terminal do dispositivo Jetson, instale o pip e faça o upgrade

```sh
sudo apt update
sudo apt install -y python3-pip -y
pip3 install --upgrade pip
```

- **Passo 2.**  Instale o pacote Ultralytics

```sh
pip3 install ultralytics
```

- **Passo 3.**  Atualize a versão do numpy para a mais recente

```sh
pip3 install numpy -U
```

- **Passo 4.** Reinicie o dispositivo

```sh
sudo reboot
```

### Desinstalar Torch e Torchvision

A instalação do ultralytics acima instalará Torch e Torchvision. No entanto, esses 2 pacotes instalados via pip não são compatíveis para rodar na plataforma Jetson, que é baseada na **arquitetura ARM aarch64**. Portanto, precisamos instalar manualmente o pacote pré-compilado do PyTorch (wheel pip) e compilar/ instalar o Torchvision a partir do código-fonte.

```sh
pip3 uninstall torch torchvision
```

### Instalar PyTorch e Torchvision

Visite [esta página](https://forums.developer.nvidia.com/t/pytorch-for-jetson) para acessar todos os links de PyTorch e Torchvision.

Aqui estão algumas das versões suportadas pelo JetPack 5.0 e superior.

**PyTorch v2.0.0**

Suportado por JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) com Python 3.8

**file_name:** torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
**URL:** https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl

**PyTorch v1.13.0**

Suportado por JetPack 5.0 (L4T R34.1) / JetPack 5.0.2 (L4T R35.1) / JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) com Python 3.8

**file_name:** torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v502/pytorch/torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl

- **Passo 1.** Instale o torch de acordo com a sua versão do JetPack no seguinte formato
pip3

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

Por exemplo, aqui estamos executando **JP5.1.1** e, portanto, escolhemos **PyTorch v2.0.0**

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl -O torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```

- **Passo 2.** Instale torchvision dependendo da versão do PyTorch que você instalou. Por exemplo, escolhemos PyTorch v2.0.0, o que significa que precisamos escolher Torchvision v0.15.2

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone https://github.com/pytorch/vision torchvision
cd torchvision
git checkout v0.15.2
python3 setup.py install --user
```

Aqui está uma lista da versão correspondente do torchvision que você precisa instalar de acordo com a versão do PyTorch:

- PyTorch v2.0.0 - torchvision v0.15
- PyTorch v1.13.0 - torchvision v0.14

Se você quiser uma lista mais detalhada, por favor consulte [este link](https://github.com/pytorch/vision).

### Instalar ONNX e Fazer Downgrade do Numpy

Isso só é necessário se você quiser converter os modelos PyTorch para TensorRT

- **Passo 1.** Instale ONNX, que é um requisito

```sh
pip3 install onnx
```

- **Passo 2.** Faça downgrade para uma versão inferior do Numpy para corrigir um erro

```sh
pip3 install numpy==1.20.3
```

## Recursos

- [Documentação do YOLOv8](https://docs.ultralytics.com)
- [Documentação do Roboflow](https://docs.roboflow.com)
- [Documentação do TensorRT](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
