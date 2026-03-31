---
description: Guia SenseCAP K1100 - O Kit de Protótipo de Sensor
title: Guia SenseCAP K1100 - O Kit de Protótipo de Sensor
keywords:
  - SenseCAP Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_K1100_Intro
sku: 110991748
last_update:
  date: 08/07/2024
  author: Frank
createdAt: '2023-07-20'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_K1100_Intro/
---

## Introdução

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/___-1-_-7_1_.png" style={{width:800, height:'auto'}}/></div>

O SenseCAP K1100 é um kit abrangente e de última geração para monitoramento ambiental, projetado para fornecer coleta e análise de dados de forma integrada. Ele integra sensores avançados e opções de conectividade, tornando‑o uma solução versátil para várias aplicações de monitoramento ambiental. Este kit é ideal para desenvolvedores, pesquisadores e entusiastas que desejam prototipar e implementar soluções robustas de IoT com eficiência.

## A Ideia de Verdadeiramente Selvagem

O kit de protótipo SenseCAP K1100 faz a ponte entre o desenvolvimento do conceito inicial e a implantação no mundo real. Ele permite que os usuários criem e testem rapidamente suas soluções de monitoramento ambiental antes de implantá‑las em campo. Essa transição de protótipo para uma solução verdadeiramente em campo garante que os dispositivos sejam confiáveis, duráveis e capazes de suportar diversas condições ambientais.

## Primeiros Passos com o SenseCAP K1100

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Introdução ao Kit de Protótipo de Sensor</font></th>
      <th class="table-trnobg"><font size={"4"}>Iniciação Rápida e Sem Código com SenseCraft</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/banner.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Neste tutorial, você poderá experimentar a diversão da coleta e do processamento de dados com o nosso projeto de código aberto no menor tempo possível. </font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Oferecemos dois caminhos para nossos usuários experimentarem IoT, um é LoRa® e o outro é WiFi. Este tutorial irá ensinar como usá‑los.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-quickstart/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Aplicação em Rede LoRaWAN

### Uso Básico de Sensores com Arduino

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Sensor de Luz Wio Terminal</th>
      <th class="table-trnobg">Sensor IMU Wio Terminal</th>
      <th class="table-trnobg">Sensor de Umidade do Solo Grove</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/102.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/162.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Nesta seção, detalharemos como funcionam os sensores de luz, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando Wio Terminal e Grove - Wio-E5. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Nesta seção, detalharemos como funcionam os sensores IMU, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando Wio Terminal e Grove - Wio-E5. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Nesta seção, detalharemos como funcionam os sensores de umidade do solo Grove, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando Wio Terminal e Grove - Wio-E5. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-Light-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-IMU-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Sensor de Gás Grove VOC e eCO2 (SGP30)</th>
      <th class="table-trnobg">Sensor Grove de Temperatura e Umidade (SHT40)</th>
      <th class="table-trnobg">Módulo Grove Vision AI</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Nesta seção, detalharemos como funcionam os sensores de gás Grove VOC e eCO2, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando Wio Terminal e Grove - Wio-E5. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Nesta seção, detalharemos como funcionam os sensores Grove de temperatura e umidade, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando Wio Terminal e Grove - Wio-E5. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Nesta seção, detalharemos como funciona o Módulo Grove Vision AI, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando Wio Terminal e Grove - Wio-E5. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### Serviços em Nuvem

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Serviços em Nuvem Helium</th>
      <th class="table-trnobg">Serviços em Nuvem TTN</th>
      <th class="table-trnobg">SenseCAP e Node-Red para Serviços em Nuvem</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/25.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste capítulo, apresentaremos os controles do console Helium que usamos para obter uma primeira impressão do console Helium.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste capítulo, apresentaremos os controles do console TTN que usamos para obter uma primeira impressão do console TTN. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Node-RED é uma ferramenta de programação para interligar dispositivos de hardware, APIs e serviços online de maneiras novas e interessantes. Faremos uma série de tutoriais para SenseCAP e Node-RED.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Aplicação em Rede Wi‑Fi

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Uso Avançado de Wi‑Fi</th>
      <th class="table-trnobg">Serviço em Nuvem</th>
      <th class="table-trnobg">Uso da Plataforma Azure IoT</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este wiki apresenta alguns dos usos avançados da biblioteca de Wi‑Fi, como as bibliotecas HTTPClient, DNSServer e WebServer. Com essas bibliotecas implementadas, você poderá desenvolver seus projetos de IoT com APIs simples.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste capítulo, vamos guiá-lo na conexão do Ubidots, Blynk e Google Cloud usando o Wio Terminal. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste tutorial, vamos guiá-lo pelo processo de conexão do Wio Terminal ao Microsoft Azure IoT Central e de envio de dados de telemetria dos sensores/ hardware integrados no Wio Terminal, como o acelerômetro de 3 eixos, sensor de luz e 3 botões, para o Microsoft Azure IoT Central. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Advanced-WiFi/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Getting_started_with_Ubidots/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Connect-Wio-Terminal-to-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Aplicação de ML Embarcado

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Sensores Integrados com Edge Impulse</font></th>
      <th class="table-trnobg"><font size={"4"}>Vision AI com Modelos Personalizáveis</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Este artigo mostra uma solução para quem quer usar o edgeimpulse para gerar modelos e conectá-los à nuvem. Em nosso demo, vamos usar o Google Sheets.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Neste wiki, vamos ensinar você a treinar seu próprio modelo de IA para a sua aplicação específica e, em seguida, implantá-lo facilmente no Grove - Vision AI Module. Vamos começar!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1111-Edge-Impulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Vision_AI_with_Customizable_Models/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Seção de Projetos

Além dos tutoriais básicos acima para cada plataforma, preparamos uma variedade de exemplos ricos sobre o uso deste kit, para que você possa ver aqui que o valor do kit é ilimitado!

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>IoT Into the Wild Contest for Sustainable Planet 2022</font></th>
      <th class="table-trnobg"><font size={"4"}>Vision AI com Modelos Personalizáveis</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100_overview/000000.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Temos o prazer de compartilhar com você os projetos que nossos participantes produziram usando este excelente kit. Você também pode consultar os projetos deles para ainda mais possibilidades!</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Neste wiki, vamos mostrar como utilizar o Wio Terminal para conectar o Grove - Wio-E5 e o Grove - Soil Moisture Sensor que estão no kit, conectando-os às plataformas Helium e Azure IoT Central, para construir um monitor de vasos de quintal em tempo real e um lembrete de rega, para uma pequena amostra da Internet das Coisas.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/IoT-into-the-wild-contest/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/K1111-Quick-Start-Guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## ✨ Projeto de Contribuidores

- Temos uma lista de tarefas para atualizar esta página, que está categorizada em nosso [projeto de contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), pois somos dedicados a aprimorar a experiência do usuário e fornecer melhor suporte por meio do desenvolvimento de nossa plataforma wiki.
- [Sua contribuição para esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962909) é essencial para nós! Valorizamos muito sua opinião e apreciaríamos imensamente sua ajuda na geração de ideias.

## Suporte Técnico SenseCAP

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
