---
description: Como escolher o cabo correto
title: Como escolher o cabo correto
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_To_Choose_The_Right_Cable
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/How_To_Choose_The_Right_Cable/
---
<!-- ---
name: How To Choose The Right Cable
category: Tutorial
title:  How To Choose The Right Cable
prodimagename:
surveyurl: https://www.research.net/r/How_To_Choose_The_Right_Cable
--- -->

## Um mau exemplo

Aqui iremos apresentar uma variedade de cabos que a Seeed oferece. Quando você faz um demo, é difícil evitar fazer um jumper de fio. Para ser honesto, eu odeio fazer jumper de fio, é realmente uma bagunça. Mas às vezes você precisa fazer um jumper de fio, você não consegue fazer uma PCB para uma aplicação simples.

Temos que admitir que fazer jumper de fio é necessário, então por que não escolher alguns cabos certos para deixar nosso demo mais organizado.
A imagem a seguir mostra um mau exemplo de jumpers.

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/How_to_choose_cable_1.jpg)

Você sente que é apenas uma bagunça?

Então, vamos começar a jornada dos cabos!

## Cabo Grove

O cabo Grove é o cabo mais comum no sistema Grove. Ele é usado para conectar um [Base Shield](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=98_16) a um sensor, atuador ou dispositivo Grove. Como os Grove Shields suportam conexões a vários dispositivos ao mesmo tempo, os projetos podem exigir mais de um cabo Grove.

Os cabos Grove estão disponíveis em vários comprimentos diferentes, de 5 cm (cerca de 2") até 50 cm (cerca de 20"). Escolha um comprimento com base em quanto espaço livre está disponível na sua área de prototipagem ou de projeto, ou em quão apertados você precisa agrupar seus dispositivos Grove ou seu sistema embarcado. Abaixo estão alguns links diretos para as páginas de produto dos vários comprimentos de cabos Grove. Os cabos Grove são adequados para conexões ponto a ponto, por exemplo conectando um Grove Shield a um dispositivo Grove. Existem outros tipos de cabos Grove para outras aplicações.

Os cabos Grove possuem quatro fios codificados por cor e dois conectores modulares tipo macho. Normalmente, uma extremidade é conectada ao Grove Shield e a outra ao dispositivo Grove. Os conectores modulares são chaveados, o que significa que têm um formato exclusivo e só podem ser inseridos no conector correspondente no shield ou dispositivo de uma única maneira. Ao conectar os conectores do cabo Grove em um shield ou dispositivo, certifique-se de exercer pressão suficiente para travar os dois no lugar.

Os cabos Grove são ligados em linha reta. Isto é, o pino 1 no conector A é conectado ao pino 1 no conector B, o pino 2 ao pino 2, e assim por diante. Os fios também são codificados por cor. O pino 1 é amarelo, o pino 2 é branco, o pino 3 é vermelho e o pino 4 é preto. Normalmente, os pinos 1 e 2 são sinal, por exemplo A1/A2 ou D1/D2, enquanto os pinos 3 e 4 são alimentação e terra.

- [5cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack.html)

- [20cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack.html)

- [30cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-30cm-Cable-5-PCs-Pack.html)

- [40cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-40cm-Cable-5-PCs-Pack.html)

- [50cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-50cm-Cable-5-PCs-Pack.html)

## Grove - Branch Cable

[[Link](https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html)]

O Grove Branch Cable é um cabo usado no sistema Grove. Ele consiste em três conectores de trava tipo macho e quatro fios codificados por cor. Os Grove Branch Cables podem ser usados para suportar o encadeamento em série (daisy-chain) de vários dispositivos Grove a um Grove Shield. Normalmente, uma extremidade é conectada a um Grove Shield, e o segundo e o terceiro conectores são ligados a dois dispositivos Grove.

Como em outros membros da família de cabos Grove, os conectores macho são chaveados. Isso significa que eles têm um formato exclusivo e se encaixam de uma única maneira em seus conectores correspondentes em shields e dispositivos. Além disso, ao conectar os conectores a shields ou dispositivos, certifique-se de pressionar firmemente para acoplar os conectores macho do Grove Branch Cable com os receptáculos fêmea no Grove Shield ou nos dispositivos Grove. Como os Grove Branch Cables têm travas (às vezes chamadas de "buckles" ou "buckled cables"), quando a trava se fecha, você ouvirá um pequeno som e deverá ver a trava se fechando sobre sua parte correspondente.

Essas travas (ou buckles) melhoram as conexões e são especialmente úteis em ambientes com muita vibração ou de produção, já que é necessário usar alguma força ao desconectar o cabo. Ao mover seu dispositivo Grove ou trocá-lo, você também deve aplicar um pouquinho de pressão para liberar a trava do conector do Grove Branch Cable e então puxar para removê-lo do receptáculo ou soquete.

Tenha cuidado extra ao conectar vários dispositivos usando o Grove Branch Cable. Esteja ciente de que o pino analógico ou digital no Grove Shield será compartilhado pelos dois dispositivos Grove. Tais configurações podem ser inadequadas para dois dispositivos analógicos. Usar um Grove Branch Cable para conectar um dispositivo Grove analógico e um digital pode não funcionar de forma alguma.

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg)

Alguns exemplos de aplicações incluem:

- Conectar ou encadear em série dois ou mais dispositivos I2C. Vários cabos branch podem ser usados para estender barramentos I2C.

- Conectar dois dispositivos que precisam funcionar ao mesmo tempo. Por exemplo, um [LED](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html) e um [Relay](https://www.seeedstudio.com/Grove-Relay.html) podem ser conectados a um Grove Shield usando um único Grove Branch Cable. Assim seria possível desligar ou ligar simultaneamente tanto o LED quanto o Relay, já que os dois dispositivos seriam controlados por um único pino digital.

## Grove - Branch Cable for Servo

[[Link](https://www.seeedstudio.com/Grove-Branch-Cable-for-Servo-5PCs-pack.html)]

O Grove Branch Cable for Servos é outro tipo de cabo Grove e é usado principalmente para conectar um ou dois servos ao seu projeto. Ele consiste em três conectores: um conector macho chaveado de quatro pinos adequado para conexão a um Grove Shield, e dois conectores macho de pinos tipo poste de três pinos. Nesta configuração, alimentação e terra (pinos 3 e 4 do conector macho de quatro pinos) são levados para ambos os conectores macho de três pinos. O pino 1 (amarelo) do conector de quatro pinos é conectado a um dos pinos do Arduino capaz de PWM e é levado a um dos conectores macho de três pinos. O pino 2 (fio branco) do conector de quatro pinos também é conectado a um segundo pino do Arduino com capacidade de PWM e é levado ao segundo conector macho de três pinos.

O conector chaveado de quatro pinos do Grove Branch Cable for Servos normalmente será conectado a um soquete digital do Grove Shield, como D2-D9. Ao conectar servos, anote a cor do fio do cabo PWM digital (amarelo ou branco) para saber qual pino digital corresponde à entrada do servo.

Observe que o Arduino UNO suporta PWM nos pinos 3, 5, 6, 9, 10 e 11. No Arduino Mega, funciona nos pinos 2 - 13 e 44 - 46. Placas Arduino mais antigas com ATmega8 só suportam analogWrite() nos pinos 9, 10 e 11.

Aqui está um link para alguns dos nossos [Servos](https://www.seeedstudio.com/catalogsearch/result/?q=servos).

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/4pinto2x3pin500.jpg)

## Grove para jumper fêmea de 4 pinos

Você pode usá-lo para:

- Conectar dispositivo Grove a outros MCUs, por exemplo, se você quiser conectar o [Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) a um [Raspberry Pi](http://www.raspberrypi.org/).

- Usar o Base Shield para controlar algum dispositivo que não seja Grove

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/4p254.jpg)

## Alguns outros cabos

Existem alguns outros cabos para usos diferentes, clique [aqui](https://www.seeedstudio.com/catalogsearch/result/?q=Cables) para encontrar mais informações.

## Suporte técnico e discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
