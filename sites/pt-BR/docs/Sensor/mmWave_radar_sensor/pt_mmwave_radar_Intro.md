---
description: Introdução ao Sensor de Radar mmWave
title: Introdução ao Sensor de Radar mmWave
keywords:
  - Grove
  - mmWave Radar Sensor
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /mmwave_radar_Intro
last_update:
  date: 03/28/2025
  author: Hugo
createdAt: '2023-07-20'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/mmwave_radar_Intro/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp" style={{width:'auto', height:'auto'}}/></div>

Bem-vindo à descoberta dos Sensores de Radar mmWave da Seeed Studio. Esta página foi criada para ser uma fonte abrangente de informações, guiando você por todos os aspectos desses sensores.

Aqui, você pode encontrar detalhes sobre parâmetros de produto, incluindo frequências de operação, potência de transmissão, alcances de movimento e de presença e ângulos de detecção. Também apresentamos métodos de instalação simples, como montagem superior, montagem lateral e instalação inclinada. Além disso, exploramos vários cenários de aplicação em segurança automotiva, casa inteligente e assistência à saúde. Nossos Sensores de Radar mmWave são adequados para uma ampla gama de projetos, oferecendo soluções de detecção confiáveis.

## Princípio do Radar mmWave

O radar de Ondas Milimétricas (mmWave) utiliza técnicas de radar de Onda Contínua Modulada em Frequência (FMCW) para detectar objetos e sua velocidade, distância e ângulo. O radar FMCW transmite continuamente um sinal modulado em frequência e recebe os sinais refletidos pelos objetos. Ao analisar a diferença entre as frequências transmitida e recebida, o radar pode determinar a distância (alcance) e a velocidade relativa (velocidade) dos objetos. Esse princípio permite que o radar mmWave detecte movimentos sutis, forneça alta precisão e funcione de forma eficaz em diversas condições ambientais, como chuva, neblina ou poeira.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/Principle.png" style={{width:'auto', height:'auto'}}/></div>

<center>  
Diagrama Esquemático da Faixa de Frequência de Ondas Milimétricas, crédito: <a href="https://www.everythingrf.com/community/what-are-millimeter-waves">EverythingRF</a>
</center>

## Diferentes tipos de Sensores de Radar mmWave

Sensores de radar de ondas milimétricas (mmWave) são capazes de detectar objetos, medir sua distância, velocidade e ângulo, e podem penetrar vários materiais, como plástico, roupas e drywall, tornando-os adequados para uma ampla variedade de aplicações.
Na Seeed, aproveitamos o poder do mmWave para desenvolver vários sensores que podem realizar diversas ações, como detecção de quedas e monitoramento da respiração durante o sono.

Nossa linha de Sensores de Radar mmWave é mostrada abaixo, cada um com diferentes recursos e funções.

<table align="center">
 <tr>
  <th>Sensor de Detecção de Queda Humana XIAO 60GHz mmWave MR60FDA2</th>
  <th>Sensor de Respiração e Batimentos Cardíacos Humanos XIAO 60GHz mmWave MR60BHA2</th>
  <th>Sensor de Presença Estática Humana 24Ghz mmWave para XIAO</th>
  <th>Kit de Sensor de Detecção Humana mmWave MR24HPC1</th>
        <th>Módulo de Sensor de Presença Estática Humana 24GHz mmWave MR24HPC1 Lite</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
        </div></td>
 </tr>
</table>

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60fda2_mmwave_kit/">Sensor de Detecção de Queda Humana XIAO 60GHz mmWave <strong>MR60FDA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60bha2_mmwave_kit/">Sensor de Respiração e Batimentos Cardíacos Humanos XIAO 60GHz mmWave <strong>MR60BHA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/pt-br/mmwave_for_xiao/">Sensor de Presença Estática Humana 24Ghz mmWave para XIAO</a></th>
        <th><a href="https://wiki.seeedstudio.com/pt-br/mmwave_human_detection_kit/">Kit de Sensor de Detecção Humana mmWave <strong>MR24HPC1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/pt-br/Radar_MR24HPC1/">Módulo de Sensor de Presença Estática Humana 24GHz mmWave <strong>MR24HPC1 Lite</strong></a></th>
    </tr>
    <tr>
        <th>Função Principal</th>
        <td>Detecção de quedas</td>
        <td>Detecção de respiração e batimentos cardíacos</td>
        <td>Detecção de presença humana</td>
        <td>Detecção de presença humana</td>
        <td>Detecção de presença humana</td>
    </tr>
    <tr>
        <th>Frequência de Operação</th>
        <td>60GHz</td>
        <td>60GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
    </tr>
    <tr>
        <th>Potência de Transmissão</th>
        <td>/</td>
        <td>/</td>
        <td>/</td>
        <td>8dBm</td>
        <td>8dBm</td>
    </tr>
    <tr>
        <th>Número de transmissões e recepções</th>
        <td>Duas transmissões e duas recepções</td>
        <td>Duas transmissões e duas recepções</td>
        <td>Uma transmissão e uma recepção</td>
        <td>Uma transmissão e uma recepção</td>
        <td>Uma transmissão e uma recepção</td>
    </tr>
    <tr>
        <th>Alcance de Movimento</th>
        <td>6m</td>
        <td>6m</td>
        <td>6m</td>
        <td>5m</td>
        <td>5m</td>
    </tr>
    <tr>
        <th>Alcance de Presença</th>
        <td>3m</td>
        <td>1.5m</td>
        <td>4m</td>
        <td>4m</td>
        <td>4m</td>
    </tr>
    <tr>
        <th>Ângulo de Detecção</th>
        <td>120x100°</td>
        <td>120x100°</td>
        <td>60×60°</td>
        <td>90×60°</td>
        <td>90×60°</td>
    </tr>
    <tr>
        <th>Tensão de Operação</th>
        <td>5V</td>
        <td>5V</td>
        <td>5V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
    </tr>
    <tr>
        <th>Espaçamento dos Pinos</th>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.00mm</td>
        <td>2.00mm</td>
    </tr>
    <tr>
        <th>Tamanho (LxA)</th>
        <td>30x48mm</td>
        <td>30x48mm</td>
        <td>22x18mm</td>
        <td>35x30mm</td>
        <td>35x30mm</td>
    </tr>
    <tr>
        <th>Método de Instalação</th>
        <td>Instalação superior</td>
        <td>Instalação lateral ou instalação inclinada</td>
        <td>Sem requisitos</td>
        <td>Sem requisitos</td>
        <td>Sem requisitos</td>
    </tr>
    <tr>
        <th>Suporte ESPHome</th>
        <td><a href="https://github.com/limengdu/MR60FDA2_ESPHome_external_components">Suporte Nativo de Firmware</a></td>
        <td><a href="https://github.com/limengdu/MR60BHA2_ESPHome_external_components">Suporte Nativo de Firmware</a></td>
        <td><a href="https://wiki.seeedstudio.com/pt-br/mmwave_for_xiao/">Guia</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
    </tr>
    <tr>
       <th>Categoria</th>
       <td>Sensor com XIAO ESP32C6 como MCU</td>
       <td>Sensor com XIAO ESP32C6 como MCU</td>
       <td>Módulo, compatível com XIAO (pino a pino)</td>
       <td>Sensor com XIAO ESP32C3 como MCU</td>
       <td>Módulo, compatível com XIAO, Arduino (via fio jumper)</td>
    </tr>
    <tr>
        <th>Disponibilidade</th>
        <td><a href="https://www.seeedstudio.com/"><strong>\$24.9</strong> na Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/"><strong>\$24.9</strong> na Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html"><strong>\$4.49</strong> na Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html"><strong>\$26.99</strong> na Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html"><strong>\$6.9</strong> na Seeed Studio</a></td>
    </tr>
</font>
</table>

<!-- ### 60GHz mmWave Fall Detection Sensor Kit with XIAO ESP32C6 (MR60FDA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>The MR60FDA2 Sensor Kit utilizes 60GHz mmWave technology for reliable fall detection and human presence sensing. It includes light level sensing, an RGB LED for customizable interaction, and supports additional sensors and actuators for enhanced automation. Powered by the XIAO ESP32C6, the kit features pre-flashed ESPHome firmware and wireless connectivity options, including Wi-Fi, Bluetooth Low Energy (BLE), Zigbee, and Thread. This no-code, plug-and-play integration with Home Assistant allows users to easily customize detection zones, making it ideal for applications in healthcare monitoring, safety, elderly care, and home automation. </font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Adquira agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/pt-br/getting_started_with_mr60fda2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Saiba mais</font></span></strong>
    </a>
</div>

### Kit de Sensor de Detecção de Respiração e Batimentos Cardíacos mmWave de 60GHz com XIAO ESP32C6 (MR60BHA2)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>O Kit de Sensor MR60BHA2 utiliza tecnologia mmWave de 60GHz para detecção confiável de respiração, batimentos cardíacos e presença humana. Ele possui detecção de nível de luz, um LED RGB personalizável e suporta sensores e atuadores adicionais para automação avançada. Alimentado pelo XIAO ESP32C6, este kit vem com firmware ESPHome pré‑gravado, permitindo integração plug‑and‑play fácil com o Home Assistant usando Wi‑Fi, Bluetooth Low Energy (BLE), Zigbee e Thread. É uma solução ideal para monitoramento de saúde, segurança, cuidado com idosos e automação residencial, permitindo que os usuários personalizem zonas de detecção sem necessidade de código. </font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Adquira agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/pt-br/getting_started_with_mr60bha2_mmwave_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Saiba mais</font></span></strong>
    </a>
</div>

### Kit de Sensor de Detecção Humana mmWave de 24GHz com XIAO ESP32C3 (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Alimentado pelo XIAO ESP32C3 da Seeed Studio, ele suporta conectividade WiFi/BLE e detecção humana precisa por meio de sensores mmWave. Conecte módulos Grove para recursos adicionais e configure o Home Assistant em 1–2 minutos com atualizações OTA. Seus sensores mmWave substituíveis permitem uso versátil, ideal para automação residencial inteligente, detecção de intrusão e monitoramento de idosos.</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Adquira agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/pt-br/mmwave_human_detection_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Saiba mais</font></span></strong>
    </a>
</div>

### Seeed Studio 24GHz mmWave para XIAO

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>O Sensor mmWave de 24GHz para XIAO - Human Static Presence é uma placa de expansão para a série Seeed Studio XIAO. É um sensor de radar mmWave integrado à antena e de alta sensibilidade, baseado no princípio FMCW. Combinado com processamento de sinais de radar e algoritmos precisos de detecção do corpo humano, ele pode identificar corpos humanos em estados de movimento e estacionário.</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Adquira agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/pt-br/mmwave_for_xiao/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Saiba mais</font></span></strong>
    </a>
</div>

### Sensor mmWave de 24GHz - Módulo Lite de Presença Humana Estática (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>O Sensor mmWave de 24GHz - Módulo Lite de Presença Humana Estática é um sensor de radar mmWave integrado à antena e amigável à saúde que aplica tecnologia de medição de distância FMCW, operando em 24GHz, para implementação de detecção de presença humana estática, independentemente de influências ambientais. Este também é um radar personalizável em que os usuários podem configurar seus parâmetros subjacentes para determinar as funções de detecção. </font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Adquira agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/pt-br/Radar_MR24HPC1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Saiba mais</font></span></strong>
    </a>
</div> -->

## Comparação de Diferentes Parâmetros de Sensores de Radar mmWave

### Comparação das Funções de Detecção de Presença Humana entre Sensores de Radar mmWave e Outros Sensores

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>Sensor de Radar mmWave</th>
        <td>Câmera</td>
        <td>Sensor Ultrassônico</td>
        <td>LiDAR (Radar a Laser)</td>
        <td>Sensor Infravermelho Passivo (PIR)</td>
    </tr>
    <tr>
        <th>Privacidade</th>
        <th>Detecção não visual, faixa de frequência de sinal oculta, baixo risco de vazamento de dados</th>
        <td>Coleta imagens contendo grande quantidade de informações privadas, propensas a vazamento</td>
        <td>Não envolve a coleta de imagens privadas, mas o sinal é facilmente detectável</td>
        <td>Os dados escaneados podem expor informações do cenário, com risco de vazamento</td>
        <td>Não envolve a coleta de imagens privadas, mas o sinal é facilmente detectável</td>
    </tr>
    <tr>
        <th>Custo</th>
        <th>Moderado</th>
        <td>O custo varia de acordo com a resolução e funções, com alguns tipos sendo relativamente altos</td>
        <td>Baixo custo</td>
        <td>Alto custo de equipamento e manutenção</td>
        <td>Baixo custo</td>
    </tr>
    <tr>
        <th>Precisão</th>
        <th>Alta precisão, capaz de detectar com exatidão a distância, velocidade e ângulo do alvo</th>
        <td>Fortemente afetada pela iluminação e resolução</td>
        <td>Precisão limitada na detecção de curta distância</td>
        <td>Imagem 3D de alta precisão, mas afetada pelo ambiente</td>
        <td>Baixa precisão de detecção, só pode determinar movimento</td>
    </tr>
    <tr>
        <th>Estabilidade</th>
        <th>Não é afetado por iluminação e temperatura, com desempenho estável</th>
        <td>Limitado pelas condições de iluminação, desempenho ruim em pouca luz</td>
        <td>Facilmente afetado por ruído ambiental</td>
        <td>Fortemente afetado por condições climáticas adversas</td>
        <td>Facilmente afetado por fatores ambientais, como fontes de calor</td>
    </tr>
</font>
</table>

A tabela comparativa destaca as vantagens do radar mmWave em relação a câmeras, sensores ultrassônicos, LiDAR e sensores PIR. Ele oferece desempenho estável em ambientes diversos, tornando-o eficaz para detecção de quedas, monitoramento da respiração e da frequência cardíaca e detecção de presença humana. Além disso, o radar mmWave protege a privacidade por não capturar imagens identificáveis, garantindo a confidencialidade do usuário.

### Comparação entre 24 GHz e 60 GHz

Os radares de ondas milimétricas de 24 GHz e 60 GHz diferem significativamente em suas características. O radar de 24 GHz oferece forte penetração e maior alcance de detecção, tornando-o eficaz para detecção de presença humana, especialmente em sistemas de radar automotivo. Em contraste, o radar de 60 GHz, com penetração mais fraca porém maior resolução angular, é ideal para aplicações precisas como detecção de quedas e monitoramento da frequência cardíaca, comumente encontrado em dispositivos de casa inteligente. Em última análise, a escolha da frequência adequada depende das necessidades específicas da aplicação, incluindo o alcance de detecção e as características do alvo.

### Comparação das funções de detecção de presença humana entre sensores de radar mmWave

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th>Suporta detecção de presença humana</th>
        <th>Comparação do efeito da detecção de presença humana</th>
    </tr>
    <tr>
        <th>24GHz mmWave for XIAO</th>
        <td>✅</td>
        <td>Este produto oferece detecção de presença humana e está pronto para uso imediato, atendendo às necessidades básicas. Os usuários podem obter rapidamente um efeito de detecção relativamente estável</td>
    </tr>
    <tr>
        <th>MR24HPC1 Lite</th>
        <td>✅</td>
        <td>Este produto possui detecção de presença humana, permitindo que usuários com habilidades práticas ajustem parâmetros subjacentes para desempenho ideal em cenários complexos. No entanto, sua precisão de detecção é ligeiramente inferior à do 24GHz mmWave for XIAO quando operado diretamente</td>
    </tr>
    <tr>
        <th>MR60FDA2</th>
        <td>✅</td>
        <td>A função de detecção de presença humana não é a função principal; ela é usada principalmente como auxiliar para suportar a detecção de quedas</td>
    </tr>
    <tr>
        <th>MR60BHA2</th>
        <td>✅</td>
        <td>A função de detecção de presença humana não é a função principal; ela é usada principalmente como auxiliar para suportar a detecção da frequência respiratória e da frequência cardíaca</td>
    </tr>
</font>
</table>

O **24GHz mmWave for XIAO** é projetado para usuários que buscam conveniência e acesso rápido. Ele oferece recursos como detecção de presença humana e detecção de movimento, todos controláveis por meio de um aplicativo móvel Bluetooth. Pronto para uso imediato, ele simplifica a configuração e permite que os usuários se beneficiem rapidamente de seus recursos. Aqui está a interface do aplicativo Bluetooth:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

O **MR24HPC1 Lite** é projetado para usuários práticos, apresentando detecção de presença humana, movimento e velocidade, com foco em ajustes personalizáveis de parâmetros para vários cenários. Os usuários podem obter resultados de detecção ideais ajustando os parâmetros corretos, mas devem ler cuidadosamente a documentação para utilizar totalmente suas opções de personalização. Abaixo está a interface de operação de seu computador host:

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

## Sensor de radar mmWave: cenários típicos de aplicação em nossa vida

Sensores de radar mmWave são utilizados em uma variedade de projetos inovadores em diferentes setores. Aqui estão alguns exemplos:

- Sistemas de segurança automotiva: aprimorando os sistemas de assistência ao motorista com recursos como controle de cruzeiro adaptativo, frenagem automática de emergência e detecção de ponto cego.
- Dispositivos de casa inteligente: usando sensores de radar para reconhecimento de gestos, detecção de presença e monitoramento de sinais vitais sem contato físico.
- Automação industrial: implementando radar para monitoramento de máquinas, detecção de presença humana em áreas perigosas e melhoria da segurança em ambientes automatizados.
- Aplicações em saúde: monitorando sinais vitais de pacientes, detectando quedas e fornecendo ferramentas de diagnóstico não invasivas.
- Navegação de drones: permitindo que drones evitem obstáculos, naveguem de forma autônoma e realizem pousos de precisão.

Esses projetos demonstram a versatilidade e o potencial da tecnologia de radar mmWave na transformação de vários campos por meio de capacidades aprimoradas de detecção e automação.

Certamente, você também pode conectar nosso módulo de sensor de radar mmWave ao HomeAssistant. Aqui estão alguns exemplos de uso:

- [MR60FDA2 Fall detection Sensor with Home Assistant](https://wiki.seeedstudio.com/pt-br/ha_with_mr60fda2/)
- [MR60BHA2 Breath-Heartbeat Sensor with Home Assistant](https://wiki.seeedstudio.com/pt-br/ha_with_mr60bha2/)
- [mmWave Kit And Grove Connect To ESPHome](https://wiki.seeedstudio.com/pt-br/mmWave_Kit_And_Grove_Connect_To_ESPHome/)
- [mmWave for XIAO to Home Assistant via Bluetooth](https://wiki.seeedstudio.com/pt-br/mmwave_for_xiao_to_ha_bt/)

## Método de instalação dos sensores de radar mmWave

**Método 1: instalação superior.** Suspenso no topo, com altura de 2,2–3,0 m, raio máximo de detecção de 2 m; o lado com o sensor mmWave precisa estar alinhado com a direção de detecção.

Aplicável a: MR60FDA2, MR24HPC1, 24GHz mmWave XIAO

:::note
O limite de altura de instalação do MR60FDA2 é entre 2,4 e 3,0 metros, e o limite de altura para detecção de quedas é entre 0 e 0,6 metros.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>

**Método 2: instalação lateral.** Montado lateralmente, recomenda-se que a altura de instalação do radar seja consistente com a altura do peito da pessoa a ser medida, e que a posição do módulo e a posição do peito sejam ≤ 1,5 m.

Aplicável a: MR60BHA2, MR24HPC1, 24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/side_mounting.png" style={{width:600, height:'auto'}}/></div>

**Método 3: instalação inclinada.** Para necessidades de detecção da respiração durante o sono e da frequência cardíaca, pode ser adotado um método de instalação inclinada. Exige-se que o radar seja instalado a uma altura de 1 m diretamente acima da cabeceira da cama, inclinado para baixo a 45° em direção ao meio da cama, e que a distância entre o radar e a cavidade torácica seja controlada dentro de 1,5 m. A direção normal do radar deve estar alinhada com a principal posição de detecção para garantir que o radar possa detectar dados de respiração e batimentos cardíacos.

Aplicável a: MR60BHA2, MR24HPC1, 24GHz mmWave XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
Use este módulo em um espaço aberto e evite os seguintes cenários dentro do alcance de detecção para prevenir interferências no módulo:

- Vários radares instalados muito próximos uns dos outros  
- Vento movendo cortinas e balançando plantas
- Fluxo de água e película de água  
- Grandes áreas de metal e reflexos de espelhos  
- Detecção através de vidro e tábuas finas de madeira  
- Local de instalação sujeito a vibrações  
- Uso de fontes de alimentação de baixa qualidade  

:::

## Código aberto dos sensores de radar mmWave da Seeed Studio

### Materiais de código aberto do kit mmWave MR60FDA2 da Seeed Studio

- **STL**: [mmWave 3D Case](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositório GitHub**: Acesse todo o código-fonte e documentação na [página Seeed mmWave Library no GitHub](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentação ESPHome**: Para maior personalização e integração, consulte a [documentação do ESPHome](https://esphome.io/).
- **Ferramenta de atualização de firmware do MR60FDA2**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **Firmware MR60FDA2 v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **Software GUI do MR60FDA2**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificação técnica do módulo MR60FDA2**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **Manual da interface Tiny Frame do MR60FDA2**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)

### Materiais de código aberto do kit mmWave MR60BHA2 da Seeed Studio

- **STL**: [mmWave 3D Case](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositório GitHub**: Acesse todo o código-fonte e documentação na [página Seeed mmWave Library no GitHub](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentação ESPHome**: Para maior personalização e integração, consulte a [documentação do ESPHome](https://esphome.io/).
- **Ferramenta de atualização de firmware do MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)
- **Software GUI do MR60BHA2**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificação técnica do módulo MR60BHA2**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **Manual da interface Tiny Frame do MR60BHA2**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)

### Materiais Open-Source do mmWave de 24GHz da Seeed Studio para XIAO

- **Especificação Técnica do mmWave de 24GHz para XIAO**: [24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **Manual do Usuário do mmWave de 24GHz para XIAO**: [24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **SCH do mmWave de 24GHz para XIAO**: [24GHz-mmWave-for-xiao-SCH.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

### Materiais Open-Source do kit mmWave MR24HPC1 da Seeed Studio

- **Repositório GitHub**: Acesse todo o código-fonte e documentação em [Project open source](https://github.com/limengdu/mmwave-kit-external-components).
- **Modelo de Configuração Rápida do Módulo MR24HPC1**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **Especificação Técnica do Módulo MR24HPC1**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **Manual do Usuário do Módulo MR24HPC1 V1.5**: [MR24HPC1_User_Manual-V1.5.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

#### Versão 1

- **SCH&PCB do Módulo MR24HPC1 V1.0**: [mmWare-kit_sch&pcb.zip](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **SCH do Módulo MR24HPC1 V1.0**: [sch_mmware_kit.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

#### Versão 2

- **SCH&PCB do Módulo MR24HPC1 V2.0**: [Human_Detection_Sensor_Board_V2.zip](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **SCH do Módulo MR24HPC1 V2.0**: [mmwave_kit_sch_V2.pdf](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

### Materiais Open-Source do Sensor mmWave de 24GHz MR24HPC1 da Seeed Studio

- **Modelo de Configuração Rápida do Módulo MR24HPC1**: [MR24HPC1_Quick_Setup_Template-V1.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **Especificação Técnica do Módulo MR24HPC1**: [24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **Manual do Usuário do Módulo MR24HPC1 V2.0**: [MR24HPC1_User_Manual-V2.0.pdf](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **Software de Computador de Superfície do Módulo MR24HPC1**: [Human-Radar-Open-Protocol_2.0.exe](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **Documentos de Certificação CE do Módulo MR24HPC1**: [101991030_CE.zip](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

:::note
Os dados brutos e os algoritmos nos Sensores de Radar mmWave da Seeed Studio não são open-source. Agradecemos a sua compreensão e apoio!
:::

## ✨ Projeto de Contribuidores

- Temos uma lista de tarefas para atualizar esta página, que está categorizada em nosso [projeto de contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), pois somos dedicados a aprimorar a experiência do usuário e fornecer melhor suporte por meio do desenvolvimento da nossa plataforma wiki.
- [A sua contribuição para esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962026) é essencial para nós! Valorizamos muito a sua opinião e apreciaríamos imensamente a sua ajuda na geração de ideias.

## Suporte Técnico & Discussão de Produtos

 <br />

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
