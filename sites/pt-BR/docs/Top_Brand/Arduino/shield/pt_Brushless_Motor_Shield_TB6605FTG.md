---
description: Brushless_Motor_Shield_TB6605FTG
title: Shield de Motor Brushless TB6605FTG
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Brushless_Motor_Shield_TB6605FTG
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Brushless_Motor_Shield_TB6605FTG/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/105030027-preview-wiki.jpg" alt="pir" width={600} height="auto" /></p>

O Brushless Motor Shield (TB6605FTG) é um driver de motor brushless para sistema compatível com Arduino. Ele suporta entrada DC de 9V ~ 24V e pode fornecer continuamente uma grande corrente para acionar o motor brushless. Com o potenciômetro onboard, você pode ajustar a velocidade do motor facilmente. Este shield oferece uma variedade de modos para escolher, você pode usar as quatro chaves onboard para alternar funções.  

Com a interface Grove I2C onboard, você pode trabalhar com outros módulos Grove facilmente usando este shield, por exemplo, você pode usar um [Grove - LCD RGB Backlight](Grove - LCD RGB Backlight) para exibir a velocidade do motor.

Nós também lançamos o [TB6605 BLDC Motor Kit for Arduino](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html), que é baseado neste shield e contém um LCD e um motor brushless de alta qualidade para exibir a velocidade do motor.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Ampla faixa de tensão de entrada: 9V ~ 24V
- Interface I2C
- Controle de velocidade ajustável por hardware (potenciômetro onboard)
- Múltiplos modos disponíveis: CW/CWW, Freio/Normal, Onda senoidal/Onda quadrada

## Especificação

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parâmetro</h3></td>
    <td><h3>Valor</h3></td>
  </tr>
  <tr>
    <td><h4>Tensão de alimentação</h4></td>
    <td><h4>3.3V / 5V</h4></td>
  </tr>
  <tr>
    <td><h4>Entrada de alimentação DC</h4></td>
    <td><h4>9V ~ 24V</h4></td>
  </tr>  
  <tr>
    <td><h4>Corrente máxima de saída</h4></td>
    <td><h4>0.02A</h4></td>
  </tr>
    <tr>
    <td><h4>Modo de acionamento</h4></td>
    <td><h4>Onda senoidal/Onda quadrada</h4></td>
  </tr>
    <tr>
    <td><h4>Interface do motor</h4></td>
    <td><h4>Bornes parafuso</h4></td>
  </tr>
    <tr>
    <td><h4>Interface Grove externa</h4></td>
    <td><h4>I2C</h4></td>
  </tr>
  </tbody></table>

## Visão geral do hardware

### Pinout

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" /></a></p>

### Definição dos bornes parafuso

<table align="center">
  <tbody>
  <tr>
    <td><h3>Brushless Motor Shield</h3></td>
    <td><h3>Motor Brushless</h3></td>
    <td><h3>cor do fio</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>Positivo da alimentação lógica</h4></td>
    <td><h4>Vermelho</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>Terra da alimentação lógica</h4></td>
    <td><h4>Preto</h4></td>
  </tr>  
  <tr>
    <td><h4>HU+</h4></td>
    <td><h4>Sensor Hall Fase U</h4></td>
    <td><h4>Laranja</h4></td>
  </tr>
  <tr>
    <td><h4>HV+</h4></td>
    <td><h4>Sensor Hall Fase V</h4></td>
    <td><h4>Verde escuro</h4></td>
  </tr>
  <tr>
    <td><h4>HW+</h4></td>
    <td><h4>Sensor Hall Fase W</h4></td>
    <td><h4>Azul escuro</h4></td>
  </tr>
  <tr>
    <td><h4>U</h4></td>
    <td><h4>Bobina Fase U</h4></td>
    <td><h4>Amarelo</h4></td>
  </tr>
  <tr>
    <td><h4>V</h4></td>
    <td><h4>Bobina Fase V</h4></td>
    <td><h4>Verde claro</h4></td>
  </tr>
  <tr>
    <td><h4>W</h4></td>
    <td><h4>Bobina Fase W</h4></td>
    <td><h4>Azul claro</h4></td>
  </tr>
  </tbody></table>

<div align="center"><b>Tabela 1.</b><i>Mapa de fiação</i></div>

:::tip
A cor da fiação pode ser diferente se você não estiver usando o motor brushless 42BLF01, conecte de acordo com a situação específica
:::

## Primeiros passos

### Materiais necessários

- [Brushless Motor Shield (TB6605FTG) x1](https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html)
- [Grove - LCD RGB Backlight x1](Grove - LCD RGB Backlight)
- [Arduino ou Seeedunio x1](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- Motor Brushless x1

Ou você pode simplesmente usar o nosso [TB6605FTG Brushless Motor Kit for Arduino](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html), este kit contém o Brushless Motor Shield, motor brushless 42BLF01 e um Grove - LCD RGB Backlight.

### Conexão de hardware

- **Passo 1.** Conecte o motor Brushless ao borne parafuso do Brushless Motor Shield, consulte a **Tabela 1.**

- **Passo 2.** Conecte o Grove - LCD RGB Backlight à porta Grove I2C no Brushless Motor Shield.

- **Passo 3.** Conecte o Brushless Motor Shield ao seu Arduino ou Seeeduino.

- **Passo 4.** Alimente o shield com o conector DC e o Arduino via cabo USB.

  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" /></a></p>

### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.**  
Baixe a biblioteca [BLDC Motor Shield (TB6605) lib](https://github.com/Seeed-Studio/BLDC_Motor_Shield_TB6605) do Github.
Baixe a biblioteca [Grove-LCD RGB Backlight Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo, você pode abri-lo pelo caminho: **File --> Examples -->BLDC Motor Shield (TB6605)--> TB6605_demo**.

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" /></a></p>

- **Passo 4.** Envie o demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
Se tudo correr bem, você verá o motor DC funcionar e o LCD exibirá a velocidade. Agora você pode girar o potenciômetro para controlar a velocidade do motor.  
:::

## Visualizador online do esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [BLDC Motor Shield (TB6605) Arquivos Eagle](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip)

- **[PDF]** [42BLF01 Brushless Motor-Especificações](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/42BLF01-Specification.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
