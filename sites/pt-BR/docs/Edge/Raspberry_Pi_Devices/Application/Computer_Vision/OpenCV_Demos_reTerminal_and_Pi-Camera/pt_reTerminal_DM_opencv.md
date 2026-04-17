---
description: Introdução ao reTerminal e à câmera Pi com OpenCV
title: Introdução ao reTerminal e à câmera Pi com OpenCV
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_opencv
sku: 110070048
last_update:
  date: 11/7/2023
  author: Kasun Thushara
createdAt: '2023-11-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_DM_opencv/
---

## Introdução

Neste tutorial, vamos guiá-lo pelo processo de configuração do reTerminal com um **Raspberry Pi OS Bullseye ou BookWorm OS recém-instalado**. Nosso objetivo é interagir com a **PiCam** e realizar atividades de processamento de imagem e deep learning usando a biblioteca **OpenCV**.

## OpenCV

**OpenCV (Open Source Computer Vision Library)**: OpenCV é uma poderosa biblioteca de visão computacional de código aberto, projetada para tarefas de visão computacional em tempo real. Ela fornece um conjunto abrangente de ferramentas e funções que permitem aos desenvolvedores trabalhar com imagens e vídeos, oferecendo soluções para tarefas como processamento de imagem, detecção de objetos, reconhecimento facial e muito mais. Amplamente utilizada tanto na academia quanto na indústria, a OpenCV oferece suporte a várias linguagens de programação, tornando-se uma escolha versátil para aplicações de visão computacional em diferentes plataformas. Sua flexibilidade e extensa documentação a tornam um recurso inestimável para qualquer pessoa envolvida em desenvolvimento de visão computacional.

## Primeiros Passos

Antes de iniciar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Preparação de software

Recomendamos instalar a versão **Bullesye** ou a versão **Bookworm** do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)

## Instalar OpenCV

 Sinta-se à vontade para pular o processo de instalação detalhado; temos um atalho para você. Siga estas etapas simplificadas se você estiver usando o **Bullseye OS**:

- **Passo 1** Primeiro, clone este repositório Git no seu Raspberry Pi assim:

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **Passo 2** Em seguida, utilize nosso script para instalar facilmente os pacotes Python necessários e baixar o modelo EfficientDet-Lite. Navegue até esta pasta.

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
```

- **Passo 3** O script instala as dependências necessárias e baixa os modelos TFLite para esta série de tutoriais.

```sh
sh setup.sh
```

Siga estas etapas se você estiver usando o **Bookworm OS**:

- **Passo 1** No seu Terminal, execute o seguinte comando para instalar

```sh
sudo apt-get install libopencv-dev python3-opencv
```

- **Passo 2** Em seguida, clone este repositório Git no seu Raspberry Pi assim:

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

## Capturar um stream de vídeo

Em uma nova janela de terminal, navegue até **Opencv_and_piCam**

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
 ```

Neste tutorial, vamos começar com um programa "Hello World" usando a PiCam e o OpenCV no nosso reTerminal. Você pode localizar o arquivo **captureimages.py** em nosso repositório clonado. Vamos explorar um stream de vídeo ao vivo e, se você pressionar 'q', o stream será encerrado de forma suave. Você também pode usar a IDE Thonny para executar o script em Python.

```sh
python captureimages.py
```

Você verá um stream de vídeo como o abaixo.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" /></center>

Para sua referência, forneceremos todo o trecho de código para sua conveniência.

```sh
import cv2
from picamera2 import Picamera2
picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280,720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()
while True:
    im= picam2.capture_array()
    cv2.imshow("Camera", im)
    if cv2.waitKey(1)==ord('q'):
        break
cv2.destroyAllWindows()
```

## Capturar uma foto e salvá-la

Aqui, vamos capturar uma imagem estática usando a PiCam e o OpenCV no nosso ReTerminal. Encontre o arquivo **saveimage.py** em nosso repositório clonado. Faremos o streaming de vídeo ao vivo e, se você pressionar 's', uma foto será capturada. Você também pode usar a IDE Thonny para executar o script em Python.

```sh
python saveimage.py
```

Você encontrará uma imagem capturada no mesmo diretório.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/capturedimage.PNG" /></center>

Para sua referência, forneceremos todo o trecho de código para sua conveniência.

```sh
import cv2
from picamera2 import Picamera2

picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280, 720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()

try:
    while True:
        im = picam2.capture_array()
        cv2.imshow("Camera", im)

        # Save an image when a key is pressed (e.g., 's')
        key = cv2.waitKey(1)
        if key == ord('s'):
            # Save the image using OpenCV
            cv2.imwrite("captured_image.jpg", im)
            print("Image saved!")

        # Exit the loop when 'q' is pressed
        elif key == ord('q'):
            break

finally:
    # Release resources
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
