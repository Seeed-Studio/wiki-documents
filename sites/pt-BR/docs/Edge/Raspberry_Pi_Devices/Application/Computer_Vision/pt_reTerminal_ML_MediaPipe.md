---
description: Primeiros passos com o Google MediaPipe
title: Primeiros passos com o Google MediaPipe
keywords:
  - Edge
  - Aplicativo reTerminal
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_ML_MediaPipe
sku: 102110638
last_update:
  date: 1/10/2024
  author: Kasun Thushara
createdAt: '2023-02-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_ML_MediaPipe/
---


# Primeiros passos com o MediaPipe no reTerminal

 MediaPipe é um framework open-source do Google para construir pipelines de ML aplicados multimodais (por exemplo, vídeo, áudio, qualquer dado de série temporal), multiplataforma (isto é, Android, iOS, web, dispositivos de borda). Ele é otimizado para desempenho com inferência fim-a-fim no dispositivo em mente. Mediapipe está atualmente em desenvolvimento ativo e inclui vários demos que podem ser executados imediatamente após instalar o Mediapipe no reTerminal.

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

Recomendamos instalar a versão **Bullesye** ou **Bookworm** do Raspberry Pi OS 64-bit a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Nas versões anteriores do sistema operacional, as bibliotecas Python podiam ser instaladas diretamente em todo o sistema usando o pip, o instalador de pacotes do Python. No entanto, no lançamento do Bookworm ocorreu uma mudança. Para mitigar possíveis problemas durante a instalação, agora é necessário instalar pacotes via pip em um ambiente virtual Python usando venv.

:::

Execute estes comandos um por um e você terá um ambiente virtual ao final.

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

## Soluções de ML no MediaPipe

Comece clonando o repositório GitHub no seu dispositivo reTerminal usando o seguinte comando:

 ```sh
 git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

Navegue até a pasta que contém os recursos necessários. Neste diretório, você encontrará quatro tópicos que iremos abordar.

### Detecção de Rosto

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-faccedetection.gif" /></center>

- **Passo 1** Para o nosso primeiro tópico, vamos instalar as dependências para detecção de rosto. Vá para a seção de detecção de rosto usando os seguintes comandos

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_detector/raspberry_pi
 ```

- **Passo 2** Execute o script de configuração para instalar as dependências necessárias

 ```sh
sh setup.sh
 ```

- **Passo 3** Quando a configuração estiver concluída, você poderá executar o arquivo-fonte para iniciar a detecção de rosto

 ```sh
python3 detect.py
 ```

### Marcador de Pontos Faciais

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-facelandmarks.gif" /></center>

- **Passo 1** Instalar dependências

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_landmarker/raspberry_pi
 ```

- **Passo 2** Execute o script de configuração para instalar as dependências necessárias

 ```sh
sh setup.sh
 ```

- **Passo 3** Quando a configuração estiver concluída, você poderá executar o arquivo-fonte para iniciar o marcador de pontos faciais.

 ```sh
python3 detect.py
 ```

### Marcador de Pontos da Mão

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe_handlandmarks.gif" /></center>

- **Passo 1** Instalar dependências

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/hand_landmarker/raspberry_pi
 ```

- **Passo 2** Execute o script de configuração para instalar as dependências necessárias

 ```sh
sh setup.sh
 ```

- **Passo 3** Quando a configuração estiver concluída, você poderá executar o arquivo-fonte para iniciar o marcador de pontos da mão.

 ```sh
python3 detect.py
 ```

### Marcador de Pose

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe-pose.gif" /></center>

- **Passo 1** Instalar dependências

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/pose_landmarker/raspberry_pi
 ```

- **Passo 2** Execute o script de configuração para instalar as dependências necessárias

 ```sh
sh setup.sh
 ```

- **Passo 3** Quando a configuração estiver concluída, você poderá executar o arquivo-fonte para iniciar o marcador de pose.

 ```sh
python3 detect.py
 ```

## Recursos

- **[Web Page]** [Página oficial do MediaPipe](https://mediapipe.dev/)

- **[Web Page]** [Documentação oficial do MediaPipe](https://google.github.io/mediapipe/)

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
