---
description: 4A_Motor_Shield
title: Shield de Motor 4A
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /4A_Motor_Shield
sku: 105030004
last_update:
  date: 01/11/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/4A_Motor_Shield/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4A_Motor_Shield_top.jpg" alt="pir" width={600} height="auto" /></p>

O Shield de Motor 4A é baseado no CI de potência Freescale MC33932 dual H-Bridge, que pode controlar cargas indutivas com correntes de até 5,0 A de pico por ponte simples. Ele permite que você acione dois motores DC com sua placa Arduino/Seeeduino, controlando a velocidade e a direção de cada um de forma independente. Você também pode medir a corrente consumida de cada motor, entre outros recursos.  
O conversor DC/DC on-board suporta uma faixa muito ampla de tensão de entrada e pode fornecer uma alimentação de 5 V para a placa do microcontrolador com corrente máxima de 100 mA. Assim, você precisa apenas de uma fonte de alimentação para acionar os motores e alimentar o circuito lógico.  

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4A-Motor-Shield-p-1954.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificações

- Tensão de operação: 6 V ~ 28 V  
- Saída do DC/DC: 5 V 100 mA @ pino "5V"  
- Corrente de saída (para cada canal): 2 A (operação contínua) / 5 A (pico)  
- Faixa de duty cycle de saída: 0%~100%  
- Proteção contra curto-circuito na saída (curto para VPWR ou GND)  
- Limitação de sobrecorrente (regulação) via PWM interno de tempo-desligado constante  
- Redução do limite de corrente dependente da temperatura  

## Interface

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4a_motor_shield_top_view.jpeg" alt="pir" width={600} height="auto" /></p>

**①: J1:** Conector de entrada DC.  
**②: J2:** Conector de saída do driver de motor.  
**③: EN,FT:** Jumpers para controle de EN e detecção de sinal de falha. Se você fizer curto no jumper EN, o sinal EN será mapeado para o pino D4; você pode controlar a desativação da saída da ponte H ou resetar o sinal de falha pelo pino D4. Se você fizer curto no jumper FT, o sinal de falha será mapeado para o pino D3; você também pode ler o sinal de falha a partir do pino D3.  
**④: IO:** Jumper de seleção do nível de tensão lógica. Você pode escolher o nível de tensão lógica de controle neste jumper.  
**⑤: IA,IB:** Jumper do sensor de corrente. Se você precisar detectar a corrente do motor, deve fechar estes jumpers. A corrente do motor será convertida em sinal de tensão e poderá ser lida pelos pinos A0 e A1.  

**Fonte de alimentação:** Você deve alimentar o shield pelo conector J1 (entrada DC). A faixa de tensão de entrada pode ser configurada entre 6 Vdc e 28 Vdc. O conversor DC/DC on-board pode converter a tensão DC de entrada em 5 Vdc de saída para alimentar o circuito lógico. O conversor DC/DC também pode alimentar a placa do microcontrolador (Arduino/Seeeduino) a partir do pino "5V" com corrente máxima de 100 mA.  
**Interface do motor:** Out 1 e Out 2 (Out 3 e Out 4) conectam o Motor A (B) para motor DC.  

## Atenção

<span style={{color: 'red'}}>Não toque no CI da ponte H nem na placa de circuito impresso durante o funcionamento. Sua temperatura pode chegar a até 100 graus em condição de operação em plena carga.</span>

## Demonstração

### Acionando motor DC

Conecte o motor DC aos pinos de saída do shield de motor OUT1 & OUT2 (OUT3 & OUT4). E conecte a tensão de acionamento aos terminais de alimentação. A placa driver de motor pode gerar a tensão de alimentação de 5 V para o Seeeduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/Drive_DC_Motor.png" alt="pir" width={600} height="auto" /></p>

Instale a biblioteca que fornecemos na seção Resources na pasta de bibliotecas do Arduino e encontre o exemplo “DCMotorDemo” pelo caminho: File->Example->MotorDrive->DCMotorDemo.  

Esta demonstração faz o motor girar em uma direção por 2 s, fazer uma pausa de 1 s e girar na direção inversa por 2 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/DC_Motor_Code.jpg" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [PDF do esquemático](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.pdf)  
- [Arquivo Eagle](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip)  
- [Biblioteca do Motor Shield](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MotorDriver20121210.zip)
- [Datasheet do MC33932](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MC33932.pdf)  

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
