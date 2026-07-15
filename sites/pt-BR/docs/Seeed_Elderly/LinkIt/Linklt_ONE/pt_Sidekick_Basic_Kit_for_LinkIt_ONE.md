---
description: Kit Básico Sidekick para LinkIt ONE
title: Kit Básico Sidekick para LinkIt ONE
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sidekick_Basic_Kit_for_LinkIt_ONE
sku: 110060038
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Sidekick_Basic_Kit_for_LinkIt_ONE/
---

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE/img/SKP-0.jpg)


##   Início Rápido com LinkIt ONE

Aqui vamos falar sobre como usar o LinkIt ONE

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Sidekick-Basic-Kit-for-LinkIt-ONE-p-2027.html)

##   O Básico

Vamos montar um circuito simples usando um transistor, um LED e uma chave de alavanca. O Diodo Emissor de Luz (LED) transforma energia elétrica em luz visível. O transistor é um componente fundamental em eletrônica que atua como uma chave ou um amplificador de corrente. Aqui, usamos uma chave para LIGAR e DESLIGAR o LED indiretamente usando o transistor.

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-The_Basics) to see the full tutorial. -->

##   Lição 2: Hello World

Na seção anterior tivemos uma ideia de como controlar um LED com componentes eletrônicos, mas vamos fazer alguns truques com software para o controle automático do LED. Você só precisa fazer o upload do código que está disponível nesta seção. O código escrito inicialmente LIGA o LED, após um atraso de 3 s ele o DESLIGA. Vamos começar a usar a placa LinkIt.

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-Hello_World) to see the full tutorial. -->

##   Lição 3: Botão de Pressão

Agora já temos uma noção de como software e hardware funcionam, a partir do capítulo anterior. Neste capítulo vamos aprender como integrar software e hardware para o controle do LED. Faça as conexões na protoboard como mostrado na Fig 3.2 e faça o upload do código. Agora este circuito opera como uma chave de duas vias: quando você pressiona o botão de pressão do lado esquerdo o LED acende, e quando o botão de pressão do lado direito é pressionado o LED é DESLIGADO.

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-Push_Button) to see the full tutorial. -->

##   Lição 4: Marquee

Os experimentos nas seções anteriores usaram apenas um LED, mas para mostrar efeitos de luz deslumbrantes vamos usar três LEDs. Faça as conexões como mostrado na Fig 4.2 e faça o upload do código dado abaixo e observe as mudanças que acontecem.

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-Marquee) to see the full tutorial. -->

##   Lição 5: Mundo Colorido

Agora sabemos como controlar os LEDs, vamos combiná‑los com a ideia básica de combinar cores. O R-Vermelho, G-Verde e B-Azul são as cores primárias; essas cores, quando misturadas em diferentes proporções, produzem cores diferentes. Um LED RGB consiste em quatro pinos: o terminal longo é o terminal positivo e os outros três terminais servem para controlar as cores RGB. Faça as conexões como mostrado na Fig5.2 e faça o upload do código.

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-Colorful_World) to see the full tutorial. -->

##   Lição 6: Interface Analógica

Nas seções anteriores, aprendemos como controlar a entrada e a saída do circuito usando interface digital. Nesta seção, vamos aprender como variar a saída usando um dispositivo analógico chamado potenciômetro (também conhecido como resistor variável). Um potenciômetro é usado para variar a tensão na faixa de 0 ~ 5 V. A MPU lê o valor de tensão na faixa de 0 a 1023. Isso pode ser usado para controlar o brilho do LED (interface de saída de simulação PWM). Se o potenciômetro for girado no sentido horário, o LED fica gradualmente mais brilhante. Se for girado no sentido anti‑horário, a luminosidade diminui.

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-Analog_Interface) to see the full tutorial. -->

##   Lição 7: Mini Servo

O motor de servo (servo) é comumente usado em pequenos robôs e outras máquinas para controlar a posição angular. Ele é envolvido por uma pequena caixa de engrenagens e posicionado por pulsos de controle temporizados. Nesta seção controlamos a posição angular do mini servo com a ajuda de um potenciômetro.

<!-- Click [here](/pt-br/LinkIt-ONE-Tutorial---Mini-Servo) to see the full tutorial. -->

##   Lição 8: Sensor de Luz

É hora de conhecer novos sensores que podem tornar nossos projetos ainda mais interessantes. Um fotorresistor (resistor dependente de luz ou célula fotoelétrica) é um sensor de luz que varia seu valor de resistência com base na intensidade da luz ambiente. Um buzzer é um dispositivo eletroacústico usado para gerar um tom padrão quando é conectado à fonte de alimentação. Vamos usar ambos os componentes em nossos experimentos.

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-Light-Sensor) to see the full tutorial. -->

##   Lição 9: Controle do LED por SMS

Nesta seção, alcançamos uma função bem legal. A característica marcante do LinkIt One é ser integrado com o módulo de comunicação. Estamos utilizando o módulo de comunicação GSM para transmitir mensagens, fazendo com que o estado da chave seja enviado para mudar o LED. Isso será empolgante. Primeiro conecte a antena e, em seguida, insira um SIMCARD no slot do LinkIt One; depois, conecte o circuito de acordo com o esquema. Use um telefone celular com GSM, edite o conteúdo da mensagem como ON ou OFF, envie para o número especificado (o número do SIM) e agora você pode controlar o estado da chave do LED, com sincronização global.

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-SMS_control_the_LED) to see the full tutorial. -->

##   Lição 10: Obter temperatura com Página Web

O LinkIt One possui função de comunicação Wi‑Fi. Coletamos alguns dados através do LinkIt One. Como o AP da Internet para suportar o acesso aos dados fornecendo um Servidor Web. O acesso ao endereço IP correspondente permite obter os dados com um navegador. O próximo passo é conectar o circuito, para aquisição de dados a partir do sensor de temperatura. Em seguida, com as antenas Wi‑Fi devidamente conectadas à rede, escolha a rede e preencha três parâmetros: o nome da rede (WiFi_AP), a senha de acesso (WIFI_PASSWORD) e o modo de transmissão do roteador (opções LWIFI_OPEN, LWIFI_WPA, LWIFI_WEP). Por fim, o código é carregado para o LinkIt One. Usando um dispositivo terminal com acesso à rede, abra o navegador e insira o endereço IP para obter os dados de temperatura. (Acesse o endereço IP atribuído via acesso ao roteador DHCP)

<!-- Click [here](/pt-br/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) to see the full tutorial. -->

##   Recursos

*   [Repositório Github para o Kit Básico Sidekick para LinkIt ONE](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
