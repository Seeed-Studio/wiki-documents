---
description: Guia-de-Seleção-de-Módulos-GPS
title: Guia de Seleção de Módulos GPS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /GPS-Modules-Selection-Guide
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/GPS-Modules-Selection-Guide/
---

Lançamos vários tipos de módulos GPS nos últimos anos. Vamos dar uma olhada mais de perto neles e descobrir qual é o mais adequado para você!

Para todos os módulos GPS ou de Comunicação em nosso bazar, clique em [Seeed Studio Bazaar](https://www.seeedstudio.com/) para conferir.

## Introdução a GPS e Módulos GPS

Um dos dispositivos do sistema de posicionamento global (GPS) utiliza dados de satélites para localizar um ponto específico na Terra em um processo chamado trilateração. Enquanto isso, um receptor GPS mede as distâncias até os satélites usando sinais de rádio para realizar a trilateração. E a trilateração é semelhante à triangulação, que mede ângulos, conforme mostrado nesta ilustração (Tim Gunther, 2020). Os módulos GPS contêm pequenos processadores e antenas que recebem diretamente os dados enviados pelos satélites por meio de frequências de RF dedicadas. A partir daí, ele receberá a marca de tempo de cada satélite visível, juntamente com outros dados. Se a antena do módulo conseguir detectar 4 ou mais satélites, será capaz de calcular com precisão sua posição e horário.

Os quatro conhecidos Sistemas Globais de Navegação por Satélite incluem GPS, BDS (Beidou), GLONASS e GALILEO, quatro sistemas de navegação por satélite. O que surgiu mais cedo nos Estados Unidos é o GPS (Global Positioning System), que é a tecnologia mais completa neste estágio. BDS, GLONASS e GALILEO tornaram-se os outros maiores sistemas de navegação por satélite do mundo e estão atualmente em processo de modernização.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/28251.jpg" /><figcaption><b>Figura 1</b>. <i> Ilustração de um globo com três satélites triangulando uma localização precisa. ( Tim Gunther, 2020 ) </i></figcaption></div>

Vamos apresentar e comparar estes dois módulos GPS:

- [Grove – GPS Module](https://wiki.seeedstudio.com/pt-br/Grove-GPS/)  
- [Grove – GPS(Air530)](https://wiki.seeedstudio.com/pt-br/Grove-GPS-Air530/)

Esses módulos GPS são compatíveis com Arduino e Raspberry Pi, facilitando para você começar a experimentá-los. O módulo Air 530 no **Grove - GPS(Air530)** é um módulo de navegação e posicionamento por satélite multimodo, altamente integrado e de alto desempenho. Ele suporta GPS / Beidou / Glonass / Galileo / QZSS / SBAS, o que o torna adequado para aplicações de posicionamento GNSS, como navegação automotiva, dispositivos vestíveis inteligentes e drones. E o módulo Air530 também é compatível com o protocolo NMEA 0183 V4.1 e com versões anteriores.

Enquanto isso, a série de módulos E-1612-UB do **Grove - GPS Module** é uma família de receptores GPS independentes com o poderoso motor de posicionamento u-blox 5. O motor de posicionamento u-blox 5 de 50 canais possui um Tempo-Para-Primeira-Fixação (TTFF) de menos de 1 segundo. O mecanismo de aquisição dedicado, com mais de 1 milhão de correlacionadores, é capaz de buscas massivas paralelas nos espaços de tempo/frequência, permitindo encontrar satélites instantaneamente.

## Princípio de Funcionamento

Você deve conhecer os princípios dos módulos GPS antes de comprar, e a tabela abaixo fornece algumas informações.

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-q854{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-uxnu{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
<!-- <table class="tg" style="undefined;table-layout: fixed; width: 791px">
<colgroup>
<col style="width: 200px">
<col style="width: 591px">
</colgroup>
<thead>
  <tr>
    <th class="tg-5hs1">Term of GPS Modules</th>
    <th class="tg-5hs1">Operating principle</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-q854"><br><br>DGPS<br></td>
    <td class="tg-uxnu">DGPS is a differential GPS reference station that uses known accurate three-dimensional coordinates to obtain the pseudorange correction amount or position correction amount, and then sends this correction amount to the user (GPS navigator in real time or afterwards) to correct the user's measurement data to improve GPS positioning accuracy.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>Channels</td>
    <td class="tg-uxnu">The number of channels that the GPS module runs will affect your time to first fix (TTFF). Since the module does not know that it is looking at the satellite, it can check more frequencies/channels at a time, and it can accordingly find repairs faster. After the module is locked or repaired, some modules will close the extra channel blocks to save power.</td>
  </tr>
  <tr>
    <td class="tg-q854">TTFF</td>
    <td class="tg-uxnu">Time to first fix. A specification detailing time required for a GPS receiver to acquire a position after power-on.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br><br>NMEA</td>
    <td class="tg-uxnu">NMEA is a standard format developed by the National Marine Electronics Association for marine electronic equipment.NMEA data is displayed in sentences and sent out of the GPS modules serial transmit (TX) pin."GGA" is the most commonly used format, it includes positioning time, latitude, longitude, altitude, the number of satellites used for positioning, DOP value, differential status and correction period, etc.</td>
  </tr>
  <tr>
    <td class="tg-q854">Update Rate</td>
    <td class="tg-uxnu">Update rate refers to how often the GPS module recalculates and reports its position.</td>
  </tr>
  <tr>
    <td class="tg-q854">Baud Rate</td>
    <td class="tg-uxnu">Baud Rate refers to how fast data is sent over a serial line. And higher the baud rate allows for faster GPS data to be sent.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Sensitivity</td>
    <td class="tg-uxnu">dBm figure dictates how prone the gps module is able to capture the frequency. Higher dbm indicates that the module is able to better pickup satalite signals.</td>
  </tr>
  <tr>
    <td class="tg-q854">Power Requirements</td>
    <td class="tg-uxnu">GPS modules can consume a substantial amount of power. Average being 30mA at 3.3V.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Antennas<br></td>
    <td class="tg-uxnu">Each antenna is designed to pickup GPS L1 frequency of 1.5752 GHz. Position and design of antenna is crucial for optimal performance of GPS.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Accuracy<br></td>
    <td class="tg-uxnu">Lower the distance it can get down to = Higher accuracy. Usually able to find out your location within 30 seconds, down to +/- 10m and most modules can get it down to +/-3m.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>Hot Start<br></td>
    <td class="tg-uxnu">It means that there has not been too much movement in the place where the power was turned off last time, and the time from the last positioning is less than 2 hours. When positioning again, the GPS chip can continue to use the previous ephemeris to quickly search for stars through software, to achieve second positioning.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Warm Start</td>
    <td class="tg-uxnu">Refers to the situation where the positioning time is more than 2 hours from the last positioning time, and the search time is between cold start and hot start.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Cold Start<br></td>
    <td class="tg-uxnu">If the module power is turned off for a long time, and the backup capacitor disappears, the data will be lost. Next time you power up, GPS will need to download new almanac and ephemeris data.</td>
  </tr>
</tbody>
</table> -->

## Campo de Aplicações

Existem inúmeras utilizações de módulos GPS. Em particular, muitas atividades sociais podem ser desenvolvidas por meio de aplicações desses módulos GPS. Portanto, os módulos GPS desempenham papéis importantes em vários setores, incluindo Medição Ambiental, Transporte, Resgate de Emergência, Agricultura, Entretenimento etc.
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-5z8m{background-color:#FFF;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-ut4k{background-color:#FFF;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
<table className="tg" style={{tableLayout: 'fixed', width: 792}}>
  <colgroup>
    <col style={{width: 201}} />
    <col style={{width: 591}} />
  </colgroup>
  <thead>
    <tr>
      <th className="tg-5hs1">Campo de aplicação</th>
      <th className="tg-5hs1">Função</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-5z8m"><br /><br />Medição<br /></td>
      <td className="tg-ut4k">Utiliza tecnologia diferencial de fase de portadora (RTK) para processar em tempo real a fase da portadora de duas estações de observação com precisão em nível de centímetro. Os resultados de medição são unificados em coordenadas WGS84, as informações são recebidas e armazenadas automaticamente, reduzindo o elo intermediário de processamento trabalhoso.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Transporte<br /></td>
      <td className="tg-ut4k">Módulos GPS podem ser usados para navegação autônoma, gerenciamento de portos e orientação de entrada, gerenciamento de tráfego de rotas, rastreamento e monitoramento. Equipamentos veiculares usam GPS para posicionamento preciso, combinado com mapas eletrônicos e condições de tráfego em tempo real, correspondendo automaticamente à rota ideal e implementando navegação autônoma do veículo.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br /><br />Resgate de Emergência<br /></td>
      <td className="tg-ut4k">Utilizando a tecnologia de posicionamento GPS, o despacho de emergência de bombeiros, ambulâncias e polícia pode ser realizado, e a eficiência de resposta do departamento de emergência a incêndios, cenas de crime, acidentes de trânsito, engarrafamentos e outros eventos de emergência pode ser melhorada. Um barco de pesca equipado com um módulo GPS pode localizar-se e disparar um alarme rapidamente quando ocorre uma situação perigosa, para que possa obter resgate de forma mais rápida e oportuna.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Agricultura<br /><br /></td>
      <td className="tg-ut4k">Um módulo GPS é usado para localizar e adquirir informações sobre a área agrícola, incluindo monitoramento de rendimento, coleta de amostras de solo etc. O sistema de computador determina as medidas de manejo das parcelas de cultivo analisando e processando os dados, e carrega as informações de rendimento e estado do solo no equipamento GPS. No pulverizador, ele pode adubar e pulverizar a área agrícola com precisão.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Entretenimento<br /></td>
      <td className="tg-ut4k">Por meio de módulos GPS, as pessoas podem encontrar rapidamente seu destino em uma cidade desconhecida e podem viajar pela rota ideal; campistas carregam receptores GPS para encontrar rapidamente locais adequados para acampar, sem se preocupar em se perder; até mesmo alguns videogames de alto nível utilizam tecnologia de simulação de GPS.</td>
    </tr>
  </tbody>
</table>

## Módulos GPS na Seeed

| Nome| Miniatura| Tamanho |Taxa de Atualização| Taxa de Baud| Sensibilidade de Navegação|Requisitos de Energia|Número de Canais| Tempo para a primeira partida | Antenas |Precisão |Clique para Comprar|
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|--------------------------|
| [Grove – GPS Module](https://wiki.seeedstudio.com/pt-br/Grove-GPS/) | ![Grove GPS](https://files.seeedstudio.com/wiki/Grove-GPS/img/gps-module.jpg) | `40mm x 20mm x 13mm` | `1Hz, max 10Hz` | `9,600bps – 115,200bps` | `-160dBm` | `3.3V - 5V` | `22 tracking, 66 channels` | `Cold start: 13s; Warm start: 1-2s; Hot start: <1s` | Antena incluída | `2.5m GPS Horizontal Position Accuracy` | [Order Now](https://www.seeedstudio.com/Grove-GPS-Module.html?utm_source=blog&utm_medium=blog) |
| [Grove – GPS (Air530)](https://wiki.seeedstudio.com/pt-br/Grove-GPS-Air530/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/03_11.png"/>|40mm x 20mm x 13mm|/|Default 9,600bps|-148dB|3.3V - 5V|/|Cold start: 27s; Warm start: 4s;|Antena incluída|2.5m Horizontal positioning accuracy|[Order Now](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

### Qual módulo GPS é melhor

#### Melhor consumo de energia

O **Grove – GPS (Air530)** possui um consumo de energia ultra baixo de apenas 31uA, modo de baixa potência de 0,85 mA, o que o torna o melhor GPS com menor consumo de energia.

#### Escalabilidade

Com uma taxa máxima de atualização mais alta, o **Grove - GPS** pode ser usado em projetos que envolvem objetos que se deslocam em maior velocidade. Além disso, ao ter mais canais disponíveis para outras aplicações, o **Grove- GPS (Air 530)** possui posicionamento e navegação por satélite em modo múltiplo e suporta mais de 6 satélites ao mesmo tempo.

#### Precisão

Apresentando precisão de posicionamento horizontal de 2,5 m, alta precisão de posicionamento de 3,5 m, precisão de velocidade de 0,1 m/s e precisão de transferência de tempo de 30 ns, o **Grove -GPS (Air530)** é capaz de se posicionar rápida e precisamente mesmo em condições de sinal ruim.

## Projetos

**Project of GPS/GPRS Tracker**: Neste novo projeto apresentaremos nosso Rastreador GPS conectado usando a técnica GPRS e o protocolo MQTT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

**Vehicle Tracking System**: Agora que você acabou de escolher seu módulo GPS, aqui estão alguns projetos que você pode fazer com o seu Arduino e módulo GPS. Visite [aqui](https://create.arduino.cc/projecthub/muchika/vehicle-tracking-system-based-on-gps-and-gsm-57b814?ref=tag&ref_id=gps&offset=15) para informações detalhadas.

<iframe frameborder='560' height='327.5' scrolling='no' src='https://hackster.imgix.net/uploads/attachments/1038379/FZNOC7NK0MP38U3.jpg?auto=compress%2Cformat&w=900&h=675&fit=min' width='350'></iframe>

**LED Bike Speedometer**: Quer saber quão rápido você está pedalando? Com este velocímetro de bicicleta DIY, usando tecnologia GPS para detecção de velocidade, você pode saber quão rápido está indo! Ele também possui um LED RGB para indicar a velocidade ao ciclista. Visite [aqui](https://create.arduino.cc/projecthub/JeremySCook/gps-led-bike-speedometer-c8f956?ref=tag&ref_id=gps&offset=26) para informações detalhadas.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=CeStrH-5Llo&feature=emb_rel_end" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Assistente Pessoal de GPS**: Este projeto é um dispositivo que permite monitorar pessoas e coisas e informar continuamente sua localização e os valores dos sensores conectados a ele. Um dos recursos permite definir valores limite para os sensores e, quando estes são excedidos, um alerta por SMS é enviado a você. Você também pode definir restrições para alguns locais, em que alertas serão enviados quando o dispositivo sair da área. Também é possível se comunicar com o dispositivo por SMS, a fim de obter informações sobre ele.

Visite [aqui](https://create.arduino.cc/projecthub/Momy93/sandro-your-personal-gps-assistant-26dfa3?ref=tag&ref_id=gps&offset=32) para informações detalhadas.

<div class="video-container">
<iframe width="560" height="315" src="https://youtu.be/3lcP4YtxlCg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Recursos

**[Reference]** [Triangulation from Tim Gunther, National Geographic (2020)](https://www.nationalgeographic.org/photo/triangulation-sized/)

**[ZIP]** [E-1612-UB Datasheets](https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf)

**[ZIP]** [Air530 Datasheets](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)

## Suporte Técnico & Discussão sobre Produtos

 If you have any technical issue. submit the issue into our [forum](http://forum.seeedstudio.com/).

<br />
Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
