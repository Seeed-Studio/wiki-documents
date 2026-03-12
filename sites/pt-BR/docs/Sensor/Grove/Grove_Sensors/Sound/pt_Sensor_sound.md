---
title: Sensor - Sound (introdução)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Sensor_sound/
slug: /Sensor_sound
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Sensor_sound/
---

# Guia de Seleção de Sensores de Som da Seeed

Lançamos vários tipos de sensores de som nos últimos anos. Pode ser difícil para você fazer uma escolha entre eles. Entendemos sua dor; vamos dar uma olhada mais de perto neles e descobrir qual é o mais adequado para você!

Para todos os sensores de som em nosso bazar, clique em [Bazaar Sound tag](https://www.seeedstudio.com/tag/Sound.html) para conferir.

## O que é um sensor de som

Os sons existem amplamente em nossa vida diária, e podemos usá‑los para fazer diversos controles interativos, como luzes ativadas por voz em corredores. Por meio do sensor de som, batendo palmas na frente da cabeça de detecção preta (Mic) ou falando em voz alta, você consegue controlar a luz por meio do som. O sensor de som é equivalente a um microfone. Ele pode sentir o som e convertê‑lo em um sinal analógico correspondente na saída. É amplamente utilizado em telefones celulares, gravadores, iluminação ativada por voz, equipamentos médicos, medição em mar profundo, monitoramento de ruído de tráfego, detecção de ruído em empresas industriais etc.

Com o desenvolvimento do sensor de som, surgem produtos cada vez mais criativos e promissores com sensores de som. Por exemplo, você talvez já tenha ouvido falar de uma câmera que pode capturar luz invisível aos olhos humanos, ou de uma câmera térmica, mas já ouviu falar de uma câmera que pode “fotografar” o som? Exatamente: cientistas coreanos desenvolveram uma câmera capaz de sentir a área da foto e marcá‑la com cor; não é muito interessante?

Essa “câmera de som” exclusiva é chamada SeeSV-S205, com uma câmera comum no meio, mas cercada por sofisticados sensores de som; ela pode tornar a captura de som tão simples quanto a captura de luz. Você só precisa segurá‑la voltada para a fonte sonora, e poderá ver a posição da fonte de som na imagem final.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/sound sensor.jpg" />
  <figcaption><b>Figura 1</b>. <i>Câmera de Som SeeSV-S205 (Imagem de SinaTech, 2013)</i></figcaption>
</div>

### Como funciona um sensor de som

O sensor de som possui um microfone de eletreto de condensador embutido, sensível ao som. As ondas sonoras fazem o filme de eletreto no microfone vibrar, resultando em uma mudança de capacitância e em uma pequena tensão correspondente a essa mudança. Essa tensão é então convertida em uma tensão de 0‑5 V, que é aceita pelo coletor de dados após a conversão A/D e transmitida ao computador.

#### Bolo Interativo de Som e Luz

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/birthday cake.png" />
  <figcaption><b>Figura 2</b>. <i> Princípio de funcionamento de um Bolo Interativo de Som &amp; Luz (Imagem de Dfrobot, 2019)</i></figcaption>
</div>

Há uma cabeça de captação preta (MIC) no sensor de som. Quando a música de aniversário toca alto em frente à cabeça de captação preta, o sensor de som consegue sentir a vibração do som, o que gera sinais elétricos e acende as luzes no bolo.

## Campo de Aplicações

Há inúmeros usos para esses sensores de som. Em particular, usando esse tipo de sensor, seres humanos podem ser monitorados, beneficiados ou até salvos de diferentes situações. Portanto, os sensores de som desempenham papéis importantes em vários setores, que incluem vida diária, indústria, medicina, área militar etc.

| Campo de aplicação                                          | Conteúdo |
|--------------------------------|-----------------------------------------|
| Vida diária  | O sensor amostra o sinal sonoro e o aplica a microfones, gravadores, telefones celulares e outros dispositivos. A lâmpada de controle de áudio é equipada com um sensor de áudio. Contanto que alguém faça um som de fricção por 1 segundo, a arandela acenderá automaticamente por cerca de dez segundos; a TV com controle por voz pode armazenar as vozes de duas pessoas.|
| Indústria | O sensor de onda acústica utiliza o efeito piezoelétrico direto e reverso da conversão entre energia elétrica e energia mecânica da cerâmica piezoelétrica de titanato zirconato de chumbo (PZT) para medir distância. Um sinal elétrico é aplicado à cerâmica piezoelétrica, ela gera vibração mecânica e emite ultrassom. Quando encontra um obstáculo no caminho, o ultrassom é refletido de volta imediatamente, e haverá um sinal elétrico de saída quando atuar sobre a cerâmica. Consequentemente, a distância entre o carro e o obstáculo é calculada e exibida medindo‑se as diferenças de tempo.  |
| Tratamento médico| O princípio de funcionamento dos aparelhos auditivos tradicionais é: o microfone converte o sinal sonoro recebido em um sinal elétrico e o envia ao amplificador. O amplificador amplifica o sinal elétrico e o envia ao receptor (fone de ouvido), que converte o sinal elétrico em sinal sonoro. O sinal sonoro, nesse momento, é muito mais forte do que o sinal recebido pelo microfone, de modo que a perda auditiva da pessoa surda pode ser compensada em graus variados.|
| Área militar | O sensor de som usa ondas sonoras para determinar a composição química do material em um recipiente fechado para reforçar a segurança do porto; o sistema de sensor de som pode localizar e classificar o poder de fogo de franco‑atiradores e fornecer azimute, elevação, alcance, calibre e distância de erro.|

## Sensores de Som na Seeed

### Qual é a sua preferência

|Nome|Miniatura|Tensão de operação|Faixa de medição|Sensibilidade|Saída|Frequência do sinal|Clique para comprar|
|----|-----|-----|------|------|------|-----|------|
|[Grove - Sound Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Sound_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small.jpg"/>|5V|/|48dB-52dB|/|16kHz-20 kHz|[Compre agora](https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM386-amplifier-Arduino-Compatible.html)|
|[Grove - Speech Recognizer](https://wiki.seeedstudio.com/pt-br/Grove-Speech_Recognizer/)|<img src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg" />|3V-5V|/|-43dB-(-37dB)|/|32.768MHz-50MHz|[Compre agora](https://www.seeedstudio.com/Grove-Speech-Recognizer.html)|
|[Grove - Loudness Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Loudness_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg" />|3.5V-10VDC|/|-48dB~66 dB|Sinal analógico|50Hz~2000 Hz|[Compre agora](https://www.seeedstudio.com/Grove-Loudness-Sensor.html)|
|[Grove - Heelight Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Heelight_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight sensor.png" />|3.3V-5V|0.1m-10m|/|Nível lógico TTL|/|[Compre agora](https://www.seeedstudio.com/Grove-Heelight-Sensor.html)|
|[Grove - Sound Recorder](https://wiki.seeedstudio.com/pt-br/Grove-Sound_Recorder/)|<img src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sound recorder.png" />|3V-5.5V|±1.5g|/|/|/|[Compre agora](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)|

### Aviso amigável

A tabela acima mostra vários atributos de cada sensor de som, com diferentes faixas de medição, sensibilidades e frequências de sinal; você pode escolher aquele que for mais adequado para você.

Para informações mais detalhadas de cada produto, visite suas próprias páginas por meio dos links à esquerda das imagens dos produtos.

## Recurso

- Referência
  - [Câmera de som mágica: composta por câmera e sensor de som](http://tech.sina.com.cn/digi/dc/2013-05-14/00188334966.shtml)
  - [Boson:Sound Sensor](http://wiki.dfrobot.com.cn/index.php?title=%E5%A3%B0%E9%9F%B3%E4%BC%A0%E6%84%9F%E5%99%A8)

## Projeto

**Hackeando a Escada no Novo Escritório da Seeed**: Transforme a escada do escritório em uma instalação interativa e até em uma forma bacana de transmitir a mensagem "STAFF ONLY" aos visitantes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**O Código Da Vinci**: A obra combina arte e eletrônica. A parte artística faz o esqueleto e consiste em 11 camadas de MDF (placa de fibra de média densidade).

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Disponibilizamos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
