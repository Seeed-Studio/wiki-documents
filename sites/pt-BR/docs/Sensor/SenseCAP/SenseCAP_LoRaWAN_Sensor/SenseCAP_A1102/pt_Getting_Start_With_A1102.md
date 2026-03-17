---
description: Primeiros passos com o SenseCAP Vision AI V2
title: Primeiros passos com o SenseCAP Vision AI V2
keywords:
  - SenseCAP A1102 - LoRaWAN® Vision AI Sensor
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /sensecap_a1102
sidebar_position: 1
last_update:
  date: 3/12/2025
  author: Zeke
createdAt: '2025-01-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecap_a1102/
---

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_shop.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

Modelos TinyML de IA localmente, transmitindo apenas os resultados das inferências via LoRaWAN® (863-928MHz) para maior privacidade e eficiência energética. Operando em resolução de 480×480 com 10 FPS, vem com três modelos pré-implantados para detecção de pessoas, contagem de pessoas e leitura de medidores, além de oferecer acesso sem código a mais de 300 modelos pré-treinados ou treinamento de modelos personalizados por meio da plataforma [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home). Também oferece suporte à implantação de modelos a partir dos frameworks [TensorFlow Lite](https://www.tensorflow.org/) e [PyTorch](https://pytorch.org/). Os usuários podem configurar o dispositivo e as faixas de frequência por meio do [SenseCraft App](https://sensecap-mate-download.seeed.cn/) e implantar o sensor com classificação IP66 em ambientes internos ou externos severos. Com uma bateria integrada, é ideal para várias aplicações de IA que exigem comunicação de longa distância.

## Recursos

- Câmera avançada de IA de borda: Equipada com um poderoso processador de câmera de visão baseado em MCU que executa inferência local em resolução de 480×480 a 10 FPS. Ao transmitir apenas os resultados das inferências, garante a privacidade dos dados e minimiza o uso de largura de banda da rede.

- Implantação e treinamento de modelos de IA sem código: Pré-carregada com três modelos de IA no dispositivo (detecção de pessoas, contagem de pessoas e leitura de medidores) para aplicações de visão prontas para uso. Integra-se nativamente com o SenseCraft AI, uma plataforma baseada na web que oferece mais de 300 modelos pré-treinados para implantação instantânea e um fluxo de trabalho simples em 3 etapas para treinamento de modelos de classificação e detecção. Isso possibilita treinamento e implantação rápidos de modelos sem necessidade de conhecimento em programação. Além disso, os dispositivos também suportam modelos de IA personalizados convertidos a partir dos frameworks TensorFlow e PyTorch para implantação na borda.

- Conectividade LoRaWAN®: Suporta faixas de frequência globais (863-928 MHz) com alcance de transmissão de até 10 km em condições ideais, permitindo comunicação confiável a longas distâncias.

- 2 opções de alimentação e vida útil da bateria: Equipado com uma bateria SOCl2 tamanho D de 19Ah e também compatível com fonte de alimentação DC externa por meio de uma caixa de derivação opcional.

- Durabilidade ambiental com classificação IP66: Possui proteção IP66 contra entrada de poeira e jatos fortes de água. Opera de forma confiável em temperaturas de 0°C a 70°C, adequado para diversas implantações internas e externas.

- Integração com SenseCraft Cloud: Inclui o aplicativo móvel SenseCraft Mate e o portal web para fácil configuração do dispositivo, gerenciamento de dispositivos e visualização rápida de dados. Conta com suporte a API aberta e acesso GRATUITO de teste por 3 meses, sendo compatível com plataformas de IoT de terceiros.

## Especificação

<table align="center">
 <tr>
     <th>Modelo do Produto</th>
        <th>SenseCAP A1102</th>
 </tr>
 <tr>
     <th>Microcontrolador</th>
        <td align="center">
            <strong>Vision AI:</strong>Himax-6538 <br></br>
            <strong>Rede LoRaWAN:</strong>Wio-E5 (STM32WLE5JC)<br></br>
            <strong>Bluetooth:</strong> XIAO ESP32C3<br></br>
        </td>
 </tr>
    <tr>
        <th>Câmera</th>
        <td align="center">
            <strong>Módulo:</strong>OV5647<br />
            <strong>Tamanho da lente:</strong>1/4"<br />
            <strong>Comprimento focal:</strong>3,4 mm (ajustável)<br />
            <strong>Resolução:</strong> 2592 × 1944 pixels<br />
            <strong>Tamanho do pixel:</strong> 1,4 µm × 1,4 µm<br />
            <strong>Taxa máxima de quadros:</strong> 1080p @ 30 fps, 720p @ 60 fps<br />
            <strong>FOV:</strong>62°
        </td>
    </tr>
    <tr>
     <th>Execução e inferência de modelo</th>
        <th>480 * 480  >10 fps</th> 
    </tr>
    <tr>
        <th>Transmissão LoRaWAN®</th>
        <td align="center">
        <strong>Protocolo:</strong> LoRaWAN v1.0.3 Classe A<br />
        <strong>Frequência LoRaWAN®:</strong> IN865/EU868/US915/AU915/ AS923<br />
        <strong>Distância de comunicação:</strong> 2 a 10km (dependendo do ambiente)<br />
        <strong>Potência máxima transmitida:</strong> 19dBm<br />
        </td>
    </tr>
    <tr>
        <th>Fonte de alimentação</th>
        <td align="center">
        Bateria interna ou DC 12V/1A (com fiação por caixa de derivação externa)
        </td>
    </tr>
 <tr>
     <th>Consumo de energia</th>
        <th>102mA</th>
 </tr>
 <tr>
       <th>Bateria</th>
        <td align="center">
        <strong>Capacidade:</strong> 19Ah (não recarregável)<br />
        <strong>Tipo:</strong> Bateria SOCl2 padrão tamanho D<br />
        </td>
 </tr>
 <tr>
     <th>Memória de armazenamento local</th>
        <th>Cartão MicroSD de 8GB (Classe 10) para armazenar até 20.000 imagens com carimbo de data e hora e suporta exportação </th>
 </tr>
 <tr>
     <th>Grau de proteção IP</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>Temperatura de operação</th>
        <th>0-70 °C</th>
 </tr>
 <tr>
     <th>Umidade de operação</th>
        <th>0-100% RH (sem condensação)</th>
 </tr>
 <tr>
     <th>Comprimento do cabo</th>
        <th>2 metros</th>
 </tr>
 <tr>
     <th>Peso do dispositivo</th>
        <th>719g</th>
 </tr>
 <tr>
     <th>Dimensões do dispositivo</th>
        <td align="center">
        <strong>Câmera:</strong>180mm*75mm*70mm<br />
        <strong>DTU: </strong> 144,5mm*63mm*57mm<br />
        </td>
 </tr>
</table>

## Opções de fonte de alimentação

- Opção 1: O SenseCAP A1102 opera em modo cíclico usando uma bateria interna Li-SOCl2 tipo D de 19Ah. A bateria está comercialmente disponível para fácil substituição e permite implantação autônoma ao ar livre sem necessidade de alimentação externa.

- Opção 2: O SenseCAP A1102 suporta operação constante por meio de conexão a uma fonte de alimentação DC de 12V. É necessária uma caixa de derivação adicional correspondente para instalação e montagem simplificadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/39.png" style={{width:900, height:'auto'}}/></div>

## Visão geral de hardware

- Foto da placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/38.png" style={{width:900, height:'auto'}}/></div>

## Conectar ao LoraWAN®

LoRaWAN® (Long Range Wide Area Network) é um protocolo de comunicação sem fio projetado para comunicações de baixo consumo de energia e longo alcance entre dispositivos IoT (Internet das Coisas) e gateways. Ele usa espectro de rádio não licenciado na faixa Industrial, Científica e Médica (ISM), tipicamente em 868 MHz na Europa e 915 MHz nos Estados Unidos. O LoRaWAN® fornece uma solução de baixo custo e eficiência energética para conectar dispositivos IoT a longas distâncias. A tecnologia permite comunicação bidirecional entre dispositivos e gateways e oferece suporte a uma variedade de taxas de dados para acomodar diferentes tipos de aplicações.

## Como selecionar gateway e LoraWAN®

A cobertura da rede LoRaWAN® é necessária ao usar sensores; existem duas opções.
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## Como usar o sensor

Além de conectar diretamente a um computador para visualizar dados de detecção em tempo real, você também pode transmitir esses dados por meio do LoraWAN® e, por fim, carregá-los na [plataforma em nuvem SenseCAP](https://sensecap.seeed.cc/) ou em uma plataforma em nuvem de terceiros. Na plataforma em nuvem SenseCAP, você pode visualizar os dados em ciclo e exibi-los graficamente por meio do seu celular ou computador. A plataforma em nuvem SenseCAP e o aplicativo SenseCAP Mate usam o mesmo sistema de contas.

Como nosso foco aqui é descrever o processo de treinamento de modelos, não entraremos em detalhes sobre a exibição de dados na plataforma em nuvem. Mas, se você estiver interessado, sempre pode visitar a plataforma em nuvem SenseCAP para tentar adicionar dispositivos e visualizar dados. É uma ótima maneira de obter uma compreensão melhor dos recursos da plataforma!

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## Perguntas frequentes (FAQ)

**Quais são as configurações ideais da câmera para captura de imagens?**

- Para uma câmera de 5 megapixels, recomenda-se capturar imagens dentro de uma faixa de 1 m a 5 m para obter qualidade de imagem ideal. Durante a captura de imagens, certifique-se de que a câmera esteja diretamente voltada para o objeto, com iluminação suficiente (sem reflexos ou superexposição) e evite movimentos ou vibrações significativos.

**A que distância a câmera SenseCAP Vision AI pode detectar objetos e obter bons resultados?**

- Com base em nossos testes com um modelo de detecção de pessoas, a câmera pode atingir um nível de confiança de 70% para resultados dentro de uma faixa de 1 m a 5 m.

**É possível substituir a câmera ou ter uma versão personalizada do sensor SenseCAP Vision AI?**

- Sim, se você tiver uma demanda de grande volume, entre em contato conosco em sensecap@seeed.cc.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
