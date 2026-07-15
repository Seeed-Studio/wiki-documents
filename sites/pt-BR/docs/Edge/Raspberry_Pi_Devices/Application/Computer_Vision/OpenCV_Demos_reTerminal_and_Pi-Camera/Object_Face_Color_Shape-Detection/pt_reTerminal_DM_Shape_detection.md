---
description: Detecção de Formas com reTerminal e câmera Pi usando OpenCV
title: Detecção de Formas com reTerminal e câmera Pi usando OpenCV
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Shape-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Shape_detection
last_update:
  date: 2/5/2023
  author: Kasun Thushara
createdAt: '2024-02-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Shape_detection/
---

## Introdução

A detecção de formas usando OpenCV é uma técnica de visão computacional que envolve identificar e analisar formas geométricas em imagens. **O OpenCV fornece um conjunto abrangente de ferramentas para essa tarefa, incluindo detecção de contornos, detecção de bordas e aproximação poligonal**. O processo normalmente começa com etapas de pré-processamento de imagem, como conversão para tons de cinza, desfoque e limiarização para melhorar a visibilidade das formas. Os contornos extraídos da imagem processada são então analisados, e o número de vértices em cada contorno é usado para classificar formas como **círculos, triângulos e retângulos**. A versatilidade do OpenCV na detecção de formas o torna uma ferramenta poderosa para aplicações que vão desde o reconhecimento de objetos em robótica até o controle de qualidade na manufatura.

## Primeiros Passos

Antes de começar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

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

Recomendamos fortemente conferir nosso tutorial anterior sobre [**Primeiros passos com OpenCV**](https://wiki.seeedstudio.com/pt-br/reTerminal_DM_opencv/), pois este tutorial serve como uma continuação da nossa série.

:::

**Vamos discutir alguns Termos Técnicos sobre detecção de formas.**

## Contornos

Contornos em visão computacional são como contornos ou limites que nos ajudam a identificar a forma dos objetos em uma imagem. Pense nos contornos como as bordas das coisas – as linhas que definem onde um objeto termina e outro começa. Em termos mais simples, se você imaginar traçar o contorno de um objeto com uma caneta, você estaria seguindo o seu contorno. Em visão computacional, usamos algoritmos para encontrar e representar automaticamente esses contornos, facilitando o entendimento e a análise das formas presentes em uma imagem. Antes de detectar contornos, é comum pré-processar a imagem para realçar características e tornar a detecção de contornos mais eficaz. Etapas comuns de pré-processamento incluem:

### Conversão para tons de cinza

A conversão para tons de cinza é como transformar uma imagem colorida em uma versão em preto e branco. Em uma imagem colorida, cada pixel tem três canais de cor (vermelho, verde e azul). A conversão para tons de cinza combina esses canais em um único canal, representando a intensidade da luz. As variações de brilho na imagem agora são expressas usando tons de cinza em vez de cores. Isso simplifica a imagem, mas mantém informações importantes para várias tarefas de visão computacional.

### Suavização/Desfoque

Aplique um filtro de suavização ou desfoque para reduzir o ruído na imagem. O desfoque Gaussiano é uma técnica comum em processamento de imagem em que cada pixel da imagem é em média com seus pixels vizinhos, ponderados mais fortemente em direção ao pixel central. Isso ajuda a reduzir o ruído de alta frequência e detalhes finos, resultando em uma imagem mais suave. A quantidade de suavização é controlada pelo desvio padrão do kernel **Gaussian**. É amplamente utilizado em tarefas como detecção de bordas e busca de contornos.

### Limiarização

A limiarização é uma técnica fundamental de processamento de imagem que transforma uma imagem em tons de cinza em uma imagem binária definindo um valor de limiar. Pixels acima do limiar assumem uma cor, geralmente branco, enquanto aqueles abaixo assumem outra, normalmente preto. Amplamente usada para segmentação de objetos e distinção de fundo, a limiarização simplifica imagens para análise. A limiarização adaptativa se ajusta dinamicamente com base em variações locais de pixels, melhorando sua eficácia em diversas condições de imagem e tornando-a uma ferramenta valiosa em aplicações de visão computacional.

### Detecção de bordas

A detecção de bordas é uma técnica fundamental em processamento de imagem voltada para identificar limites dentro de uma imagem. Ela destaca mudanças abruptas de intensidade, representando as bordas onde um objeto termina e outro começa. Algoritmos populares, como o **Canny edge detector**, usam informações de gradiente para localizar essas transições, fornecendo uma etapa fundamental para tarefas como reconhecimento de objetos e análise de formas em aplicações de visão computacional. A detecção de bordas é essencial para evidenciar características-chave, permitindo uma melhor compreensão e interpretação dos dados visuais.

## Vamos pular para o código

Execute estes comandos um por um no terminal.

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
python shapedetect.py
 ```

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png" /></center>

## Aplicações

A detecção de formas tem diversas aplicações em vários domínios. Uma aplicação notável que **vamos demonstrar agora é a contagem de moedas**, onde as formas são utilizadas para identificar e diferenciar moedas com base em suas distintas características geométricas. Na manufatura e no controle de qualidade, a detecção de formas é empregada para inspecionar e classificar produtos com base em suas formas, garantindo consistência e conformidade com padrões. Em **robótica, detectar e reconhecer formas ajuda na manipulação de objetos e navegação**. A imagiologia médica depende da detecção de formas para tarefas como identificação de tumores e segmentação de órgãos. Além disso, no campo de **veículos autônomos, a detecção de formas desempenha um papel crucial na identificação de sinais de trânsito e obstáculos**, contribuindo para uma navegação segura. No geral, a detecção de formas é uma ferramenta versátil com aplicações que vão da automação industrial à saúde e além.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG" /></center>

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
