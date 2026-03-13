---
description: Sensor - Acelerômetro
title: Sensor - Acelerômetro
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor_accelerometer
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Sensor_accelerometer/
---
# Guia de Seleção de Acelerômetros Seeed

Lançamos vários tipos de sensores de Acelerômetro nos últimos anos. Você pode achar difícil fazer uma escolha entre eles. Nós entendemos o seu problema; vamos dar uma olhada de perto neles e descobrir qual é o mais adequado para você!

Para todos os sensores de Acelerômetro em nosso bazar, clique em [Bazaar Accelerometer tag](https://www.seeedstudio.com/tag/Accelerometer.html) para conferir.

## O que é um Acelerômetro

Um acelerômetro é um sensor capaz de medir a aceleração de objetos. Durante o processo de movimento, o valor da aceleração é obtido medindo-se a força inercial da massa e a Segunda Lei de Newton. De acordo com os diferentes elementos sensíveis do sensor, os sensores de aceleração comuns incluem capacitivos, indutivos, de deformação, piezoresistivos, piezoelétricos etc. Ao medir a aceleração devido à gravidade, você pode calcular o ângulo de inclinação do dispositivo em relação à horizontal. E você também pode determinar os movimentos do dispositivo analisando a aceleração dinâmica.

Por exemplo, recentemente uma senhora americana de noventa anos disse que, após sofrer um acidente de trânsito, a função de detecção de queda de um relógio inteligente salvou sua vida com sucesso. Quando ela saiu da loja e estava indo para casa, uma motorista a atropelou. Naquele momento, a idosa não conseguiu encontrar o telefone para ligar para o serviço de emergência, mas o relógio inteligente que ela usava detectou que ela havia caído e começou a pedir ajuda à família. Graças a uma nova geração de sensor de aceleração MEMS de três eixos e tecnologia de chip giroscópio, alguns relógios inteligentes agora são capazes de reconhecer uma variedade de posturas de queda.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Accelerometer.png" />
  <p><b>Figura 1</b>. <i>Relógio inteligente com um acelerômetro de 3 eixos (Imagem de Sensorexpert, 2015)</i></p>
</div>

### Como funciona um acelerômetro

Existem duas maneiras pelas quais um acelerômetro funciona: efeito piezoelétrico e variação de capacitância. A seguir está a ilustração:

#### Efeito piezoelétrico

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Piezoelectric effect.png" />
  <p><b>Figura 2</b>. <i>Princípio de funcionamento do efeito piezoelétrico (Imagem de explainthatstuff, 2019)</i></p>
</div>

Como mostrado no modelo na figura acima, acelerômetros contêm estruturas cristalinas microscópicas que geram tensões quando ocorrem vibrações, e então a tensão gerada cria uma leitura de quanta aceleração existe.

#### Variação de Capacitância

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Change in Capacitance.png" />
  <p><b>Figura 3</b>. <i>Princípio de funcionamento da variação de capacitância (Imagem de explainthatstuff, 2019)</i></p>
</div>

Este método utiliza a fórmula para encontrar a aceleração. Como sabemos que Força = Massa x Aceleração, para encontrar a aceleração, é preciso pegar a Força presente / Massa de um objeto.

É assim que o efeito de capacitância em um acelerômetro MEMS funciona:

1. Estão presentes 2 placas capacitivas.
2. A massa de um objeto pressiona uma das placas do capacitor, alterando a capacitância e permitindo que a força seja medida.
3. Com a força e a massa do objeto conhecidas, a aceleração é finalmente medida.

## Campo de Aplicações

Há inúmeros usos para esses sensores de acelerômetro. Em particular, usando esses tipos de sensores, os seres humanos podem ser monitorados e se beneficiar ou até ser salvos de diferentes condições. Portanto, os sensores de acelerômetro desempenham papéis importantes em vários setores, que incluem indústria, área médica, aplicações sociais e aplicações domésticas para monitorar movimentos de diversos objetos.

| Campo de aplicação                                          | Função |
|--------------------------------|-----------------------------------------|
| Segurança automobilística  | O sensor de aceleração é usado principalmente no desempenho de segurança de airbags de automóveis, sistemas de freio anti-bloqueio, sistemas de controle de tração etc. | Frequência cardíaca, EMG, GSR|
| Controle de jogos | O sensor de aceleração pode detectar a mudança do ângulo de inclinação para cima, para baixo, para a esquerda e para a direita, portanto é muito simples controlar a direção para frente, para trás, esquerda e direita dos objetos no jogo inclinando o dispositivo portátil para frente e para trás. |
| Giro automático de imagem| Use o sensor de aceleração para detectar a rotação e a direção do dispositivo portátil, a fim de obter a normalização da imagem a ser exibida.|
| Função anti-tremor | Use o sensor de aceleração para detectar a amplitude de vibração/tremor do dispositivo portátil. Quando a amplitude de vibração/tremor é muito grande, trave o obturador da câmera para que a imagem capturada esteja sempre nítida|
| Correção de inclinação da bússola eletrônica | O sensor magnético determina a direção medindo a magnitude do fluxo magnético. Quando o sensor magnético é inclinado, o fluxo geomagnético que passa pelo sensor magnético mudará, resultando em um erro na direção. O princípio de que o sensor de aceleração pode medir o ângulo de inclinação pode compensar a inclinação da bússola eletrônica.|
| Função pedômetro| O sensor de aceleração pode detectar o sinal CA e a vibração do objeto. Quando uma pessoa caminha, é gerada uma certa vibração regular, e o sensor de aceleração pode detectar a passagem por zero da vibração, de modo a calcular o número de passos dados pela pessoa ou o número de passos dados pelo corredor. Assim, calcula-se o deslocamento que a pessoa percorre. E usando uma certa fórmula é possível calcular o consumo de calorias.|
| Compensação de ponto cego do sistema de navegação GPS | O sistema GPS determina a posição do objeto recebendo três sinais de satélite distribuídos a 120 graus. Em algumas ocasiões e relevo especiais, como túneis, prédios altos e áreas de floresta, o sinal de GPS ficará fraco ou até completamente perdido. Este é o chamado ponto cego. E, instalando um sensor de aceleração e usando a navegação inercial que utilizamos anteriormente, o ponto cego do sistema pode ser medido. Integrando o sensor de aceleração uma vez, obtém-se a quantidade de variação de velocidade por unidade de tempo, medindo assim o movimento de objetos na zona de sombra.|

## Sensores de Acelerômetro na Seeed

Há diversos acelerômetros na Seeed e a imagem a seguir ilustra um típico Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400):

![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg)
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### Qual é a sua preferência

|Nome|Miniatura|Tensão de operação|Faixa de medição|Sensibilidade|Interface de entrada|Consumo de energia|Clique para comprar|
|----|-----|-----|------|------|------|-----|------|
|[Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400)](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer%C2%B116g_Ultra-low_Power-BMA400/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg"/>|3.3V-5V|±2g,±4g,±8g,±16g|1024LSB/g@±2g 512LSB/g@±4g 256LSB/g@±8g 128LSB/g@±16g|I2C|18uA@5V 14uA@3.3V|[Comprar agora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g-Ultra-low-Power-BMA400.html)|
|[Grove - 3 Axis Digital Accelerometer(±16g)](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer-16g/)|<img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Thumb.png" />|3V-5.5V|±16g|3.9mg / LSB|I2C|/|[Comprar agora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html)|
|[Grove - 3-Axis Compass V1.0](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Compass_V1.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/thumbnail.jpg" />|3.3V-5V|/|/|I2C|/|[Comprar agora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass.html)|
|[Grove - 3-Axis Digitial Compass v2.0](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digitial_Compass_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" />|3.3V-5V|/|/|I2C, SPI|/|[Comprar agora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2.html)|
|[Grove - 3-Axis Digital Accelerometer(±1.5g)](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer-1.5g/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />|3V-5.5V|±1.5g|21LSB/g|I2C|47μA@1 ODR|[Comprar agora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)|
|[Grove - 3-Axis Digital Accelerometer(±400g)](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer-400g/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/45d_small.jpg" />|3.3V-5V|±100g,±200g,±400g|/|I2C|300μA@3.3V|[Comprar agora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-400g.html)|
|[Grove - 3-Axis Analog Accelerometer](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Analog_Accelerometer/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/thumb1.png" />|3V-5V|±3g|/|Analógica|350μA@3V|[Comprar agora](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)|
| [Grove - 3-Axis Digital Gyro](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Gyro/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Thumb3.png" />|3.3V-5V|/|14 LSBs por °/s|I2C|/|[Comprar agora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro.html)|
|[Grove - 6-Axis Accelerometer&Gyroscope](https://wiki.seeedstudio.com/pt-br/Grove-6-Axis_AccelerometerAndGyroscope/)|<img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Thumb4.png" />|3.3V-5V|±2,±4,±8,±16g|0.061(FS=±2) 0.122(FS=±4) 0.244(FS=±8) 0.488(FS=±16)mg/LSB|I2C|0.9μA3.3V 1.25μA@5V|[Comprar agora](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Gyroscope.html)|
|[Grove - 6-Axis Accelerometer&Compass V2.0](https://wiki.seeedstudio.com/pt-br/Grove-6-Axis_AccelerometerAndCompass_V2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" />|5V|±2g,±4g,±8g,±16g|/|I2C,SPI|/|[Comprar agora](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Compass-v2-0.html)|
|[Grove - IMU 9DOF v2.0](https://wiki.seeedstudio.com/pt-br/Grove-IMU_9DOF_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" />|3.3V-5V|±2,±4,±8,±16g|/|I2C,SPI|/|[Comprar agora](https://www.seeedstudio.com/Grove-IMU-9DOF-v2-0.html)|
|[Grove - IMU 10DOF](https://wiki.seeedstudio.com/pt-br/Grove-IMU_10DOF/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" />|3.3V-5V|±2,±4,±8,±16g|/|I2C|/|[Comprar agora](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|[Grove - IMU 10DOF v2.0](https://wiki.seeedstudio.com/pt-br/Grove-IMU_10DOF_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" />|3.3V-5V|±2g,±4g,±8g,±16g|/|I2C|2.7μA@1Hz|[Comprar agora](https://www.seeedstudio.com/Grove-IMU-10DOF-v2-0.html)|

### Aviso Importante

O gráfico acima apresenta diversos atributos de cada acelerômetro, com diferentes faixas de medição, sensibilidades e consumos de energia; você pode escolher aquele que for mais adequado para você. Além disso, se a interface de comunicação for uma das considerações ao fazer a escolha, sugerimos que a comunicação SPI pode operar mais rápido do que I2C, o que pode ser uma vantagem em algumas situações.

Para obter informações mais detalhadas de cada um, visite suas próprias páginas por meio dos links ao lado das imagens dos produtos.

## Recursos

- Referências
  - [Histórico de aplicação de sensor de aceleração de 3 eixos na contagem de passos de produtos eletrônicos.](http://old.sensorexpert.com.cn/Article/qiantansanzhoujiasud_1.html)
  - [Acelerômetros](https://www.explainthatstuff.com/accelerometers.html)

## Projeto

**Plug 'n Play Remote Control Sailboat**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed' width='350'></iframe>

**Aplicativo de Dados para Motocicleta**: Aprenda com a sua pilotagem como um profissional! Equipes de corrida de motocicletas usam dados de IMU há anos; com RideData+Arduino é fácil para você fazer o mesmo.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
