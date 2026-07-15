---
description: Detecção de Cores com reTerminal e câmera Pi com OpenCV
title: Detecção de Cores com reTerminal e câmera Pi com OpenCV
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Color-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Color_detection
last_update:
  date: 11/28/2023
  author: Kasun Thushara
createdAt: '2023-11-28'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Color_detection/
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" /></center>

## Introdução

A detecção de cores, um componente central da visão computacional, envolve identificar e analisar cores em imagens ou vídeos digitais. Amplamente aplicada em diversos setores, ela viabiliza tarefas como reconhecimento de objetos em **robótica, controle de qualidade na fabricação e até desempenha um papel na restauração de obras de arte**. Os algoritmos por trás da detecção de cores contribuem para avanços na tecnologia, influenciando áreas como **veículos autônomos, imagens médicas e estética visual em cinema e fotografia**. Em essência, a detecção de cores é uma ferramenta versátil que amplia nossa capacidade de interpretar e interagir com o mundo visual de inúmeras maneiras significativas.

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

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

### Preparação de Software

Recomendamos instalar a versão **Bullesye** ou **Bookworm** do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos fortemente consultar nosso tutorial anterior sobre [**Primeiros passos com OpenCV**](https://wiki.seeedstudio.com/pt-br/reTerminal_DM_opencv/), pois este tutorial serve como uma continuação da nossa série.

:::

## Explorando Espaços de Cor no OpenCV

Os espaços de cor são fundamentais no processamento de imagens, e o OpenCV oferece suporte a vários deles, cada um com finalidades específicas. Vamos explorar três espaços de cor comuns no OpenCV: CMYK, BGR e HSV.

### Espaço de Cor CMYK

CMYK (Ciano, Magenta, Amarelo, Key/Preto) é um espaço de cor subtrativo usado em impressão colorida.
As cores são criadas subtraindo diferentes percentuais de ciano, magenta, amarelo e preto da luz branca.

### Espaço de Cor BGR

O espaço de cor padrão do OpenCV é RGB, mas internamente ele armazena as cores em BGR (Azul, Verde, Vermelho).
BGR é um modelo de cor aditivo, no qual diferentes intensidades de azul, verde e vermelho se combinam para formar diferentes tonalidades.

**Faixa de Componentes:**

- Azul (0-255): Intensidade da cor azul.
- Verde (0-255): Intensidade da cor verde.
- Vermelho (0-255): Intensidade da cor vermelha.

### Espaço de Cor HSV

HSV (Hue, Saturation, Value) representa as cores em um modelo cilíndrico derivado de pontos de cor RGB.
Ele imita a percepção humana de cores, com componentes de matiz, saturação e valor.

**Faixa de Componentes:**

- Hue (0-179): Tipo de cor em graus.
- Saturation (0-255): Intensidade ou vivacidade da cor.
- Value (0-255): Brilho da cor.

## Por que o HSV é importante no problema de detecção de cores?

HSV (Hue, Saturation, Value) é crucial em tarefas de detecção de cores devido à sua capacidade de separar efetivamente as informações de cor. Diferente de RGB ou BGR, HSV isola o tipo de cor (Hue) de sua intensidade (Saturation) e brilho (Value), oferecendo uma representação mais intuitiva. Essa separação se mostra robusta a mudanças de iluminação, tornando a segmentação baseada em cor menos sensível a condições de luz variáveis. Além disso, a representação natural das cores em HSV simplifica o processo de definição de limiares de cor, facilitando critérios precisos para identificar objetos ou regiões específicos em uma imagem. Seu amplo uso em tarefas de visão computacional, como rastreamento e segmentação de objetos baseados em cor, destaca sua importância para alcançar resultados precisos e confiáveis.

## Como Usar os Trechos de Código

No primeiro código, você tem a flexibilidade de ajustar interativamente barras deslizantes, permitindo identificar visualmente os limiares de cor ideais. Ao experimentar com essas barras, você pode localizar a cor específica de seu interesse e anotar os valores mínimos e máximos correspondentes em HSV. Essa abordagem prática oferece uma maneira intuitiva para que as pessoas ajustem finamente os parâmetros de cor, garantindo uma experiência de identificação de cor mais personalizada e precisa

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

Então

 ```sh
python hsvtest.py
 ```

Você também pode usar a IDE Thonny para executar o script Python.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colortrack.PNG" /></center>

Aqui está o código para ajuste de HSV

  ```sh
import cv2
import numpy as np

def empty(a):
    pass

def stackImages(scale,imgArray):
    rows = len(imgArray)
    cols = len(imgArray[0])
    rowsAvailable = isinstance(imgArray[0], list)
    width = imgArray[0][0].shape[1]
    height = imgArray[0][0].shape[0]
    if rowsAvailable:
        for x in range ( 0, rows):
            for y in range(0, cols):
                if imgArray[x][y].shape[:2] == imgArray[0][0].shape [:2]:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (0, 0), None, scale, scale)
                else:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (imgArray[0][0].shape[1], imgArray[0][0].shape[0]), None, scale, scale)
                if len(imgArray[x][y].shape) == 2: imgArray[x][y]= cv2.cvtColor( imgArray[x][y], cv2.COLOR_GRAY2BGR)
        imageBlank = np.zeros((height, width, 3), np.uint8)
        hor = [imageBlank]*rows
        hor_con = [imageBlank]*rows
        for x in range(0, rows):
            hor[x] = np.hstack(imgArray[x])
        ver = np.vstack(hor)
    else:
        for x in range(0, rows):
            if imgArray[x].shape[:2] == imgArray[0].shape[:2]:
                imgArray[x] = cv2.resize(imgArray[x], (0, 0), None, scale, scale)
            else:
                imgArray[x] = cv2.resize(imgArray[x], (imgArray[0].shape[1], imgArray[0].shape[0]), None,scale, scale)
            if len(imgArray[x].shape) == 2: imgArray[x] = cv2.cvtColor(imgArray[x], cv2.COLOR_GRAY2BGR)
        hor= np.hstack(imgArray)
        ver = hor
    return ver


path = 'captured_image.jpg'
cv2.namedWindow("TrackBars")
cv2.resizeWindow("TrackBars",640,240)
cv2.createTrackbar("Hue Min","TrackBars",0,179,empty)
cv2.createTrackbar("Hue Max","TrackBars",19,179,empty)
cv2.createTrackbar("Sat Min","TrackBars",110,255,empty)
cv2.createTrackbar("Sat Max","TrackBars",240,255,empty)
cv2.createTrackbar("Val Min","TrackBars",153,255,empty)
cv2.createTrackbar("Val Max","TrackBars",255,255,empty)

while True:
    img = cv2.imread(path)
    img= cv2.resize(img, (300, 300))
    imgHSV = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    h_min = cv2.getTrackbarPos("Hue Min","TrackBars")
    h_max = cv2.getTrackbarPos("Hue Max", "TrackBars")
    s_min = cv2.getTrackbarPos("Sat Min", "TrackBars")
    s_max = cv2.getTrackbarPos("Sat Max", "TrackBars")
    v_min = cv2.getTrackbarPos("Val Min", "TrackBars")
    v_max = cv2.getTrackbarPos("Val Max", "TrackBars")
    print(h_min,h_max,s_min,s_max,v_min,v_max)
    lower = np.array([h_min,s_min,v_min])
    upper = np.array([h_max,s_max,v_max])
    mask = cv2.inRange(imgHSV,lower,upper)
    imgResult = cv2.bitwise_and(img,img,mask=mask)


    cv2.imshow("Original",img)
    cv2.imshow("HSV",imgHSV)
    cv2.imshow("Mask", mask)
    cv2.imshow("Result", imgResult)

    #imgStack = stackImages(0.6,([img,imgHSV],[mask,imgResult]))
    #cv2.imshow("Stacked Images", imgStack)

    cv2.waitKey(1)
 ```

Depois que você determinar os valores mínimos e máximos de HSV usando as barras deslizantes no primeiro trecho de código, poderá **substituir esses valores numéricos** pelo **nome da cor** correspondente e seu intervalo identificado no segundo trecho.

 ```sh
python colordetector.py
 ```

Aqui está o código completo para Detecção de Cores

```sh
import cv2
import numpy as np
from picamera2 import Picamera2

Your_color = "Green"

def detect_single_color(imageFrame, color_name, lower_range, upper_range, color_display):
    hsvFrame = cv2.cvtColor(imageFrame, cv2.COLOR_BGR2HSV)
    color_mask = cv2.inRange(hsvFrame, lower_range, upper_range)

    kernel = np.ones((5, 5), "uint8")
    color_mask = cv2.dilate(color_mask, kernel)
    result = cv2.bitwise_and(imageFrame, imageFrame, mask=color_mask)

    contours, hierarchy = cv2.findContours(color_mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for pic, contour in enumerate(contours):
        area = cv2.contourArea(contour)
        if area > 800:
            x, y, w, h = cv2.boundingRect(contour)
            imageFrame = cv2.rectangle(imageFrame, (x, y), (x + w, y + h), color_display, 2)
            cv2.putText(imageFrame, f"{color_name} Colour", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, color_display)

    return imageFrame

# Initialize PiCamera
picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280, 720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()

# Define your color range
my_color_lower = np.array([49, 105, 0], np.uint8)
my_color_upper = np.array([94, 255, 255], np.uint8)

# Start a while loop
while True:
    im = picam2.capture_array()

    # Example: Detecting your specified color
    result_frame = detect_single_color(im, Your_color, my_color_lower, my_color_upper, (0, 255, 0))  # Change the color display accordingly

    # Program Termination
    cv2.imshow("Single Color Detection in Real-Time", result_frame)
    if cv2.waitKey(10) & 0xFF == ord('q'):
        picam2.stop()
        cv2.destroyAllWindows()
        break

 ```

## Aplicação

A detecção de cores desempenha um papel fundamental em diversas aplicações, desde visão computacional e manufatura até **imagem médica** e arte. Na visão computacional, ela possibilita o reconhecimento e o rastreamento de objetos, contribuindo para tarefas como **navegação robótica e vigilância**. As indústrias utilizam a detecção de cores para **classificação e controle de qualidade, garantindo que os produtos atendam aos padrões**. A imagem médica depende da segmentação baseada em cor para uma análise precisa, enquanto os setores de entretenimento a empregam na correção de cor de filmes e na restauração de obras de arte. Desde o **reconhecimento de sinais de trânsito até a identificação biométrica e o monitoramento ambiental**, a capacidade de detectar e interpretar cores é fundamental, moldando os avanços em tecnologia, automação e vários campos. Usando técnicas simples como detecção de cor e detecção de forma da biblioteca de visão computacional OpenCV, podemos contar facilmente as vagas de estacionamento e detectar cenários anormais de estacionamento de carros.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/carpark.gif" /></center>

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
