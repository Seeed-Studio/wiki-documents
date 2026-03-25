---
description: Este wiki demonstra como usar o yolov8n para fazer detecção de objetos com o AI Kit no Raspberry Pi 5, desde o treinamento até a implantação
title: Tutorial do AI Kit com Raspberry Pi 5 sobre detecção de objetos com YOLOv8n
keywords:
  - Edge
  - rpi5
  - Ai kit
  - YOLO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection
last_update:
  date: 08/6/2024
  author: Jiahao
no_comments: false
createdAt: '2024-08-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection/
---

# Tutorial do AI Kit com Raspberry Pi 5 sobre detecção de objetos com YOLOv8n

## Introdução

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versão 8) é a mais popular série YOLO de modelos de detecção de objetos e estimativa de pose em tempo real. Ele se baseia nos pontos fortes de seus predecessores, introduzindo diversos avanços em velocidade, precisão e flexibilidade. O [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) é usado para acelerar a velocidade de inferência, apresentando um acelerador de inferência de rede neural de 13 TOPS construído em torno do chip Hailo-8L.

Este wiki irá guiá‑lo sobre como usar YOLOv8n para detecção de objetos com o AI Kit no Raspberry Pi 5, desde o treinamento até a implantação.

## Preparar Hardware

### Para Hailo8L 13 TOPS

<div class="table-center">
  <table align="center">
    <tr>
      <th>Raspberry Pi5 8GB</th>
      <th>Raspberry Pi AI Kit</th>
    </tr>
        <tr>
          <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
        </tr>
      <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Para Hailo8 26 TOPS

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Instalar Hardware

Por favor, consulte [isto](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

## No Computador Host

:::note
Iremos instalar o software hailo, certifique‑se de que você tenha uma conta hailo.
:::

### Instalar Ultralytics e treinar o modelo

Instale python3.11

```
sudo apt install python3.11
```

Crie yolo_env como seu ambiente virtual

```
python3.11 -m venv yolo_env
```

Ative o ambiente

```
source yolo_env/bin/activate
```

Instale ultralytics

```
pip install ultralytics
```

Treine YOLOv8n usando o conjunto de dados COCO. Se você quiser treinar seu próprio conjunto de dados, pode consultar [isto](https://docs.ultralytics.com) para instruções sobre como fazer isso.

```
mkdir yolomodel && cd yolomodel
yolo detect train data=coco128.yaml model=yolov8n.pt name=retrain_yolov8n epochs=100 batch=16
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train.png" alt="pir" width={1000} height="auto"/></p>

Você obterá o modelo `best.pt` após o treinamento, conforme mostrado abaixo:

```
cd ./runs/detect/retrain_yolov8n/weights/
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train_result.png" alt="pir" width={1000} height="auto"/></p>

Converta o modelo `.pt` para `.onnx`.

```
yolo export model=./best.pt imgsz=640 format=onnx opset=11 
```

Resultado como abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/convert_onnx.png" alt="pir" width={1000} height="auto"/></p>

### Instalar software hailo

Instale python 3.8

```
cd ~
sudo apt install python3.8
```

Crie hailo_env como seu ambiente virtual

```
python3.8 -m venv hailo_env
```

Ative o ambiente

```
source hailo_env/bin/activate
```

Instale o [Hailo Dataflow Compiler 3.27](https://hailo.ai/developer-zone/software-downloads/), aqui você precisa se registrar na Hailo, fazer login e baixar o software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/HDF_install.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_dataflow_compiler-3.27.0-py3-none-linux_x86_64.whl 

```

Instale o [Model zoo](https://hailo.ai/developer-zone/software-downloads/), aqui você precisa se registrar na Hailo, fazer login e baixar o software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_model_zoo-2.11.0-py3-none-any.whl 
```

Teste se `hailo_model_zoo` está funcionando corretamente.

```
hailomz -h
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo_test.png" alt="pir" width={1000} height="auto"/></p>

Instale o arquivo do github `hailo_model_zoo`

```
cd yolomodel/runs/detect/retrain_yolov8n/weights

git clone https://github.com/hailo-ai/hailo_model_zoo.git
```

Instale o conjunto de dados coco para avaliar/otimizar/compilar o modelo yolov8n

```
python hailo_model_zoo/datasets/create_coco_tfrecord.py val2017
python hailo_model_zoo/datasets/create_coco_tfrecord.py calib2017
```

### Use `hailo_model_zoo` para analisar o modelo

```
hailomz parse --hw-arch hailo8l --ckpt ./best.onnx yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/parse_model.png" alt="pir" width={1000} height="auto"/></p>

### Use `hailo_model_zoo` para otimizar o modelo

:::note
Se você executar o seguinte comando, poderá encontrar alguns erros. No entanto, você pode copiar `./hailo_model_zoo/hailo_model_zoo` para a sua biblioteca local. Se o erro indicar que o conjunto de dados não pode ser encontrado, você pode navegar até `~/.hailomz`, localizar o conjunto de dados e copiá‑lo para o diretório local de conjuntos de dados.
:::

```
hailomz optimize --hw-arch hailo8l --har ./yolov8n.har yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/optimize_model.png" alt="pir" width={1000} height="auto"/></p>

### Use `hailo_model_zoo` para compilar o modelo

```
hailomz compile  yolov8n --hw-arch hailo8l --har ./yolov8n.har 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_compile.png" alt="pir" width={1000} height="auto"/></p>

Ao final, você obterá um modelo `hef`, que pode ser usado para implantar no Raspberry Pi 5 com o AI Kit

```
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/compile_result.png" alt="pir" width={1000} height="auto"/></p>

## No Raspberry Pi5

### atualizar o sistema

```
sudo apt update
sudo apt full-upgrade
```

### Definir pcie para gen2/gen3 (gen3 é mais rápido que gen2)

Adicione o seguinte texto em ```/boot/firmware/config.txt```

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
Se você quiser usar `gen2`, comente `dtparam=pciex1_gen=3`
:::

### Instale hailo-all e reinicie

Abra o terminal no Raspberry Pi 5 e insira o seguinte comando para instalar o software Hailo

```
sudo apt install hailo-all
sudo reboot
```

### Verificar Software e Hardware

Abra o terminal no Raspberry Pi 5 e insira o comando a seguir para verificar se o hailo-all foi instalado.

```
hailortcli fw-control identify
```

O resultado correto é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abra o terminal no Raspberry Pi 5 e insira o comando a seguir para verificar se o hailo-8L foi conectado.

```
lspci | grep Hailo
```

O resultado correto é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Clonar o projeto

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

### Copiar seu modelo para o Raspberry Pi 5

Crie um diretório chamado `hailomodel`

```
mkdir hailomodel
```

:::note
O comando abaixo deve ser executado no seu computador host, não no seu Raspberry Pi 5. Certifique-se de que tanto o seu computador host quanto o Raspberry Pi 5 estejam conectados à mesma rede.
:::

```
scp -r ./yolomodel/runs/detect/retrain_yolov8n/weights/yolov8n.hef username@ip /home/pi/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/hailomodel/
```

### Alterar o código

Encontre as linhas 105 e 106 em `object-detection-hailo.py` e altere o código como abaixo:

```
        elif args.network == "yolov8n":
            self.hef_path = os.path.join(self.current_path, './hailomodel/yolov8n.hef')   
```

Encontre a linha 172 em `object-detection-hailo.py` e altere o código como abaixo:

```
    parser.add_argument("--network", default="yolov8n", choices=['yolov6n', 'yolov8s', 'yolox_s_leaky'], help="Which Network to use, defult is yolov6n")
```

### Executar o código

```
bash run.sh object-detection-hailo
```

## Resultado

Aqui está o vídeo em que demonstramos o processo de treinamento do modelo YOLOv8n e sua implantação no Raspberry Pi 5. Definimos o tamanho do lote como 8, o tamanho de entrada como 640x640 e a taxa de quadros do vídeo de entrada como 240 fps. A velocidade de inferência alcançada é de 136,7 fps, o que é excepcionalmente rápido para a maioria dos cenários de aplicação.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/mVNrEVpvvuc" title="YOLOv8n Object Detection on Raspberry Pi 5 with AI Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
