---
description: Rastreamento de objetos com reTerminal e câmera Pi com OpenCV
title: Rastreamento de objetos com reTerminal e câmera Pi com OpenCV
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Object Tracking
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Face-tracking
last_update:
  date: 11/7/2023
  author: Kasun Thushara
createdAt: '2023-12-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Face-tracking/
---

## Uma introdução

O rastreamento de objetos é o processo de localizar consistentemente um objeto específico em quadros consecutivos de um vídeo. No campo dos rastreadores de objeto único, o quadro inicial serve como referência, com o objeto-alvo marcado por um retângulo delimitador. Os quadros subsequentes então utilizam algoritmos de rastreamento para seguir e traçar o movimento do objeto. Normalmente, esses rastreadores são utilizados juntamente com detectores de objetos em aplicações do mundo real, combinando os pontos fortes de ambas as tecnologias para obter maior precisão e eficiência.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" /></center>

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

Recomendamos instalar a versão **Bullesye** ou **Bookworm** do Raspberry Pi OS 64 bits a partir do site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [**guia**](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos fortemente conferir nosso tutorial anterior sobre [**Começando com OpenCV**](https://wiki.seeedstudio.com/pt-br/reTerminal_DM_opencv/), pois este tutorial serve como continuação da nossa série.

:::

## Rastreamento vs. Detecção

Em wikis anteriores, abordamos [**detecção de rosto**](https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Face_detection/) e [**detecção de cor**](https://wiki.seeedstudio.com/pt-br/reTerminal_DM_Color_detection/), mas notamos sua natureza intermitente. Aqui está uma comparação rápida:

1. **Vantagem de velocidade:**
O rastreamento é mais rápido do que a detecção. Ao aproveitar os dados do quadro anterior, os algoritmos de rastreamento prevêem as localizações dos objetos, enquanto os algoritmos de detecção geralmente começam do zero em cada quadro.
2. **Tratamento de falhas:**
Se um detector de rosto falhar devido à oclusão, os algoritmos de rastreamento se destacam. Eles podem lidar com obstrução parcial, oferecendo desempenho robusto quando a detecção falha.
3. **Persistência de identidade:**
A detecção de objetos fornece retângulos dos objetos detectados, mas não mantém a persistência de identidade. O rastreamento se destaca em manter a identidade consistente do objeto entre os quadros, algo crucial para muitas aplicações do mundo real.

## Quais são os algoritmos no domínio de rastreamento?

Aqui estão alguns dos principais algoritmos de rastreamento de objetos com seus prós e contras

**BOOSTING**

- Prós: Simples e em tempo real. Tem bom desempenho com movimento consistente.
- Contras: Tem dificuldades com padrões de movimento complexos e oclusões.
- Velocidade: Rápida.
- Precisão: Moderada.

**MIL (Multiple Instance Learning)**

- Prós: Eficaz no tratamento de oclusões e mudanças na aparência do objeto.
- Contras: Pode ser sensível a ruído e à desordem de fundo.
- Velocidade: Moderada.
- Precisão: Boa.

**KCF (Kernelized Correlation Filter)**

- Prós: Alto desempenho em velocidade. Robusto contra variações de escala.
- Contras: Sensível a cenários fora de visão.
- Velocidade: Rápida.
- Precisão: De Moderada a Alta.

**TLD (Tracking, Learning, and Detection)**

- Prós: Autoatualizável e capaz de redetectar objetos perdidos.
- Contras: Propenso a desvio e pode ter dificuldades com movimento rápido.
- Velocidade: Moderada.
- Precisão: Moderada.

**MEDIANFLOW**

- Prós: Robusto no tratamento de mudanças abruptas de movimento e oclusões.
- Contras: Pode ter dificuldades com mudanças significativas na aparência do objeto.
- Velocidade: Rápida.
- Precisão: Moderada.

**MOSSE (Minimum Output Sum of Squared Error)**

- Prós: Extremamente rápido e adequado para aplicações em tempo real.
- Contras: Robustez limitada em condições desafiadoras.
- Velocidade: Muito rápida.
- Precisão: Moderada.

**CSRT (Channel and Spatial Reliability Tracker)**

- Prós: Alta precisão e robustez em cenários desafiadores.
- Contras: Computacionalmente mais caro.
- Velocidade: Moderada.
- Precisão: Alta.

## Vamos executar o código

Certifique-se de que você está na pasta correta. Caso não esteja

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

Então, ou até mesmo, você pode usar o Thonny IDE para executar o script em Python.

 ```sh
python Tracking.py
 ```

O script Python acima foi projetado para rastrear rostos. O seguinte trecho de código lida com o cenário em que o rastreamento falha, fazendo com que o sistema inicie um novo processo de detecção e vice-versa.

 ```sh
python DetectandTrack.py
 ```

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
