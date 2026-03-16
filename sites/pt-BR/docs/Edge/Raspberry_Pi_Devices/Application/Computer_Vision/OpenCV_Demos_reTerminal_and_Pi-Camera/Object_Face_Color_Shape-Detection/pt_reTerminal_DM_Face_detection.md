---
description: Detecção de rosto com reTerminal e câmera Pi com OpenCV
title: Detecção de rosto com reTerminal e câmera Pi com OpenCV
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Face-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Face_detection
last_update:
  date: 11/7/2023
  author: Kasun Thushara
createdAt: '2023-11-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Face_detection/
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" /></center>

## Introdução

A detecção de rosto usando o **método Haar Cascade** é uma técnica fundamental em visão computacional, empregando um modelo de aprendizado de máquina para reconhecer características faciais. Esse método se baseia em uma cascata de classificadores treinados em características do tipo Haar, permitindo uma identificação rápida e precisa de rostos em imagens e fluxos de vídeo. Sua ampla aplicação se estende a diversos campos, incluindo **tecnologia de reconhecimento facial para fins de segurança e autenticação, sistemas de vigilância por vídeo e até mesmo em softwares de fotografia para marcação automática e organização com base em rostos detectados**. O método Haar Cascade é particularmente valioso devido à sua eficiência computacional, o que o torna **muito adequado para detecção de rosto em tempo real** em vários contextos, contribuindo significativamente para o avanço das tecnologias de análise e identificação facial.

## Começando

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

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

Recomendamos instalar a versão **Bullesye** ou **Bullseye** do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos fortemente conferir nosso tutorial anterior sobre [**Primeiros passos com OpenCV**](https://wiki.seeedstudio.com/pt-br/reTerminal_DM_opencv/), pois este tutorial serve como uma continuação da nossa série.

:::

## O que é o método Haar Cascade?

No OpenCV, o método Haar Cascade é um algoritmo de detecção de rosto baseado em aprendizado de máquina. Ele funciona treinando um classificador em cascata com imagens positivas e negativas, permitindo que ele reconheça padrões e características indicativas de rostos. A cascata é composta por múltiplos estágios, cada um com um conjunto de classificadores fracos que eliminam progressivamente regiões que não são rostos, tornando o processo de detecção eficiente. As características do tipo Haar, que se assemelham a padrões retangulares de áreas claras e escuras, servem como base para o reconhecimento de objetos, como rostos. Uma vez treinada, a cascata pode ser aplicada a imagens ou quadros de vídeo para detectar rostos rapidamente. Esse método é amplamente utilizado por sua precisão e velocidade, tornando-se uma escolha popular em várias aplicações, incluindo detecção e reconhecimento de rosto em tempo real.

Por favor, consulte esta [**documentação**](https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html) se quiser aprender mais.

### Vamos executar o código

Certifique-se de que você está na pasta correta. Caso não esteja

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

Então, ou mesmo, você pode usar a IDE Thonny para executar o script Python.

 ```sh
python facedetection_pi.py
 ```

Para sua referência, forneceremos o trecho de código completo para sua conveniência.

```sh
import cv2
from picamera2 import Picamera2

# Load the pre-trained Haar Cascade classifier for face detection
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

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

        # Convert the image to grayscale for face detection
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

        # Perform face detection
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

        # Draw rectangles around the detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(im, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Display the image with face detection
        cv2.imshow("Face Detection", im)

        # Break the loop when 'q' is pressed
        if cv2.waitKey(1) == ord('q'):
            break

finally:
    # Release resources
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

Se você quiser encontrar mais arquivos XML de Haar Cascades para experimentar, por favor consulte este [**link**](https://github.com/opencv/opencv/tree/master/data/haarcascades).

## Aplicações

Haarcascade, originalmente projetado para detecção de rosto em tempo real, passou por avanços para enfrentar desafios contemporâneos. Inovadores expandiram suas capacidades para incluir **detecção de máscara facial**, crucial para medidas de saúde pública. Além disso, a tecnologia foi otimizada para **detecção de placa de veículo**, particularmente valiosa em ambientes com poucos recursos, onde hardware sofisticado é escasso. Essas adaptações demonstram a versatilidade e eficiência do Haarcascade em atender a necessidades diversas dentro das aplicações de visão computacional.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/FACEMASK.gif" /></center>

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
