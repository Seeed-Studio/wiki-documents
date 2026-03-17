---
description: Detecção de Objetos com reTerminal e câmera Pi com OpenCV
title: Detecção de Objetos com reTerminal e câmera Pi
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Object Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Object_detection
last_update:
  date: 12/7/2023
  author: Kasun Thushara
createdAt: '2023-11-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Object_detection/
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## Introdução

A detecção de objetos em computadores de borda tornou-se um campo fundamental em visão computacional, permitindo que dispositivos percebam e respondam autonomamente ao seu entorno. **EfficientDet**, um modelo de detecção de objetos de última geração, ocupa o centro das atenções nesse domínio. Projetado para ser **eficiente em recursos, ele equilibra precisão e demanda computacional, tornando-o particularmente adequado para implantação em dispositivos de borda com poder de processamento limitado**. A detecção de objetos em computadores de borda, exemplificada pelo EfficientDet, encontra aplicações em cenários que vão de câmeras inteligentes de vigilância e veículos autônomos a dispositivos de Internet das Coisas (IoT). Sua capacidade de identificar e localizar múltiplos objetos em tempo real o torna um elemento-chave para aprimorar a autonomia e a inteligência de sistemas de computação de borda.

## Iniciando

Antes de iniciar este projeto, você precisa preparar seu hardware e software com antecedência, conforme descrito aqui.

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

Recomendamos instalar a versão **Bullesye** ou **Bookworm** do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos fortemente que você confira nosso tutorial anterior sobre [**Primeiros passos com OpenCV**](https://wiki.seeedstudio.com/pt-br/reTerminal_DM_opencv/), pois este tutorial é uma continuação da nossa série. Este guia é especificamente para **Bulleseye OS** e **Bookworm OS**. Observe as dependências de instalação, pois há dois métodos distintos descritos aqui.

:::

## TinyML

TinyML revoluciona o aprendizado de máquina ao permitir que modelos leves sejam executados em dispositivos de borda com recursos mínimos. No contexto de detecção de objetos, o TensorFlow Lite, uma estrutura fundamental em TinyML, otimiza modelos para eficiência, permitindo que sejam implantados em dispositivos como microcontroladores e sistemas embarcados. Essa integração facilita o processamento em tempo real e no próprio dispositivo para tarefas como reconhecimento de objetos, tornando TinyML com [**TensorFlow Lite**](https://www.tensorflow.org/lite) ideal para aplicações em sensores inteligentes, wearables e dispositivos IoT sem a necessidade de conectividade constante com a nuvem.

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070) é um modelo de detecção de objetos altamente eficiente e preciso que se destaca por seu desempenho em dispositivos de borda. Desenvolvido pelo Google, o EfficientDet otimiza o equilíbrio entre precisão do modelo e eficiência computacional, tornando-o bem adequado para implantação em ambientes com recursos limitados, como dispositivos de borda e plataformas móveis. Ele utiliza um método de escala composta para aumentar de forma eficiente os parâmetros do modelo e alcançar melhor precisão sem comprometer a velocidade. A arquitetura do EfficientDet inclui uma rede de recursos para capturar recursos de imagem de forma eficaz e um método de escala composta para equilibrar a precisão do modelo e a eficiência computacional. Seu sucesso reside em alcançar um desempenho impressionante em vários benchmarks de detecção de objetos enquanto mantém uma estrutura leve, tornando-o uma opção preferida para aplicações que exigem detecção de objetos em tempo real em dispositivos de borda.

## Vamos executar o código no Bullseye OS

Certifique-se de que você está na pasta correta. Caso não esteja

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
 ```

Certifique-se de instalar as dependências e o modelo EfficientDet. Se você já concluiu esta etapa em nosso [**primeiro tutorial**](https://wiki.seeedstudio.com/pt-br/Getting-start-opencv/), não precisa se preocupar.

 ```sh
sh setup.sh
 ```

Execute o código

 ```sh
python3 detect_mod.py
 ```

## Vamos executar o código no BookWorm OS

- **Passo 1** Para isso, você precisa criar um ambiente virtual.

:::note

Em versões anteriores do sistema operacional, as bibliotecas Python podiam ser instaladas diretamente em todo o sistema usando o pip, o instalador de pacotes do Python. No entanto, no Bookworm e versões posteriores, ocorreu uma mudança. Para mitigar possíveis problemas durante a instalação, agora é necessário instalar pacotes via pip em um ambiente virtual Python usando venv.

:::

Execute estes comandos um por um e você terá um ambiente virtual.

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

- **Passo 2** Em seguida, clone este repositório Git no ambiente virtual do seu Raspberry Pi desta forma

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **Passo 3** Em seguida, utilize nosso script para instalar facilmente os pacotes Python necessários e fazer o download do modelo EfficientDet-Lite. Navegue até esta pasta.

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```

- **Passo 3** O script instala as dependências necessárias e faz o download dos modelos TFLite para esta série de tutoriais.

```sh
sh setup.sh
```

Execute o código

 ```sh
python3 detect_picam.py
 ```

## Suporte técnico

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
