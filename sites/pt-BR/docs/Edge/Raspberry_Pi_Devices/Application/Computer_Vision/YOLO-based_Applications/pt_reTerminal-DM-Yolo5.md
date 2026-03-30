---
description: Treine seu próprio conjunto de dados com Yolov5 e faça o deploy no reTerminal DM
title: Treine seu próprio conjunto de dados com Yolov5 e faça o deploy no reTerminal DM
keywords:
  - Edge
  - Aplicativo reTerminal DM
  - Embedded_ML
  - yolov5
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Yolo5
sku: 114070201,114070221,E23010420,114070262
last_update:
  date: 9/7/2023
  author: Kasun Thushara
createdAt: '2023-09-07'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM-Yolo5/
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif" /></center>

## Introdução

A detecção de objetos, um aspecto fundamental da visão computacional, envolve identificar objetos em imagens e encontra aplicação em inúmeros campos, como vigilância, saúde e carros autônomos. Os Single-Stage Object Detectors são uma categoria específica de modelos que simplificam essa tarefa ao prever diretamente as categorias de objetos e as coordenadas das bounding boxes, sem exigir uma etapa inicial de proposta de região. Essa abordagem simplificada é especialmente valiosa em aplicações em tempo real. Notavelmente, a família de modelos YOLO (You Only Look Once) exemplifica essa eficiência, oferecendo detecção rápida de objetos sem comprometer a precisão.

## Primeiros Passos

Antes de iniciar este projeto, você precisa preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparação de software

Recomendamos instalar a versão mais recente do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [guia](https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/).

### Roboflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png" alt="pir" width="200" height="auto"/></p>

[Roboflow](https://universe.roboflow.com/) é uma plataforma abrangente de visão computacional que oferece uma ampla gama de ferramentas e serviços para simplificar o processo de desenvolvimento e implantação de modelos de visão computacional. Um de seus recursos de destaque é o forte suporte a conjuntos de dados personalizados com anotações. Os usuários podem facilmente fazer upload de seus próprios conjuntos de dados, completos com anotações, para treinar e ajustar modelos de visão computacional. Portanto, crie uma conta nele.

### Ultralytics

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png" alt="pir" width="200" height="auto"/></p>

[Ultralytics](https://ultralytics.com/) é uma plataforma de ponta e organização de pesquisa que se especializa em visão computacional e deep learning. Ela é conhecida por suas contribuições para a área, particularmente no desenvolvimento da família de modelos de detecção de objetos YOLO (You Only Look Once), como o YOLOv5. A Ultralytics oferece uma variedade de ferramentas de última geração e software open source para detecção de objetos, classificação de imagens e muito mais, tornando a visão computacional avançada acessível a pesquisadores e desenvolvedores. Sua dedicação à inovação e a soluções orientadas por desempenho tem recebido atenção e reconhecimento significativos na comunidade de visão computacional, tornando a Ultralytics um recurso de referência para quem busca expandir os limites do que é possível no campo do deep learning e do reconhecimento visual.

## Escolha um conjunto de dados no Roboflow

- **Passo 1** Acesse o site fornecido e navegue até o conjunto de dados de sua escolha usando a função de busca. [Roboflow](https://universe.roboflow.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG" alt="pir" width="800" height="auto"/></p>

- **Passo 2** Depois de selecionar um conjunto de dados, clique em **Download this Dataset**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG" alt="pir" width="800" height="auto"/></p>

- **Passo 3** Selecione o formato de download YOLOv5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG" alt="pir" width="400" height="auto"/></p>

- **Passo 4** Selecione **show download code** e pressione Continue.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG" alt="pir" width="400" height="auto"/></p>

- **Passo 5** Na seção "Jupyter", você encontrará um trecho de código. Copie esse trecho para a área de transferência.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG" alt="pir" width="400" height="auto"/></p>

## Treine seu conjunto de dados personalizado

- **Passo 1** Acesse o link do GitHub fornecido e clique em **Open in Colab** [Github Link](https://github.com/KasunThushara/yoloV5n_RPI/tree/main)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG" alt="pir" width="800" height="auto"/></p>

<a target="_blank" href="https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

:::note

Antes de implantar um modelo em dispositivos com recursos limitados, como o Raspberry Pi, geralmente é essencial realizar a conversão e quantização do modelo para garantir desempenho ideal. Esse processo envolve várias etapas: converter um modelo PyTorch (no formato .pt) para um modelo TensorFlow Lite (TFLite) com quantização, especificamente para o tipo de dado uint8. Você pode treinar seu conjunto de dados personalizado e convertê-lo em um modelo TFLite usando este notebook do Colab. Nós descrevemos um processo passo a passo para treinamento dentro do ambiente Colab. Siga essas instruções, obtenha o arquivo **data.yaml** e o arquivo **best-int8.tflite** e retorne a este wiki para mais orientações.

:::

## Prepare seu reTerminal DM

- **Passo 1**  No Terminal, execute estes comandos um por um.

```sh
sudo git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt 
sudo apt-get install python3-tflite-runtime
```

- **Passo 2** Cole o arquivo Data.yaml e o arquivo best-int8.tflite dentro da pasta yolov5

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG" alt="pir" width="800" height="auto"/></p>

## Inferência com detect.py

- **Passo 1** Abra o reTerminal e navegue até a pasta yolov5

```sh
cd yolov5
```

- **Passo 2** Inferência com detect.py

```sh
python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

:::note
Você pode explorar o site oficial do Ultralytics no GitHub em [https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5) para aprender como usar o script `detect.py` e descobrir as várias fontes que você pode utilizar para fornecer imagens ou fluxos de vídeo ao modelo YOLOv5.
:::

## Execute no Edge TPU

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" /></center>

A implantação do modelo YOLOv5n em um Edge TPU representa uma sinergia dinâmica entre detecção de objetos de última geração e computação de borda de alto desempenho. Essa combinação potencializa aplicações em IA de borda, como reconhecimento de objetos em tempo real em ambientes com recursos limitados, tornando-se inestimável para tarefas como vigilância de segurança, análise de varejo e sistemas autônomos. O design eficiente do YOLOv5n se harmoniza perfeitamente com a aceleração de hardware do Edge TPU, oferecendo detecção de objetos rápida e precisa na borda da rede, onde baixa latência e processamento em tempo real são fundamentais.

- Inferência com detect.py

```sh
python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

## Recursos

- **[Web Page]** [Documentação Oficial do Yolov5](https://github.com/ultralytics/yolov5)

- **[Web Page]** [Roboflow](https://universe.roboflow.com/)

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
