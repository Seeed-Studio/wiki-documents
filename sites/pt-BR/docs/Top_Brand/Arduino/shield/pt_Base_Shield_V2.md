---
description: Base_Shield_V2
title: Base Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Base_Shield_V2
sku: 103030000
last_update:
  date: 7/7/2026
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/Base_Shield_V2/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" alt="pir" width={600} height="auto" /></p>

Arduino Uno é até agora a placa Arduino mais popular, porém às vezes é frustrante quando seu projeto exige muitos sensores ou LEDs e seus jumpers ficam uma bagunça. O objetivo de criar a Base Shield é ajudar você a se livrar da protoboard e dos jumpers. Com os ricos conectores Grove na placa base, você pode adicionar todos os módulos Grove ao Arduino Uno de forma conveniente! O pinout da Base Shield V2 é o mesmo do Arduino Uno R3.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/base-shield-v13-p-1378.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Versão

<table align="center">
  <tbody>
  <tr>
    <td><h3>Versão do produto</h3></td>
    <td><h3>Alterações</h3></td>
    <td><h3>Data de lançamento</h3></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.2</h4></td>
    <td><h4>Inicial</h4></td>
    <td><h4>Out 2011</h4></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.3</h4></td>
    <td><h4>Alterar o layout e a quantidade dos conectores Grove</h4></td>
    <td><h4>Ago 2012</h4></td>
  </tr>  
  <tr>
    <td><h4>Base Shield V2.0</h4></td>
    <td><h4>Alterar o layout e a quantidade dos conectores Grove, bem como adicionar uma chave de alimentação para habilitar tanto 3,3V quanto 5V.</h4></td>
    <td><h4>Mar 2014</h4></td>
  </tr>
  </tbody></table>

## Especificação

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parâmetro</h3></td>
    <td><h3>Valor/Faixa</h3></td>
  </tr>
  <tr>
    <td><h4>Tensão de operação</h4></td>
    <td><h4>3.⅗V</h4></td>
  </tr>
  <tr>
    <td><h4>Temperatura de operação</h4></td>
    <td><h4>-25℃ a +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>Portas analógicas</h4></td>
    <td><h4>4</h4></td>
  </tr>  
  <tr>
    <td><h4>Portas digitais</h4></td>
    <td><h4>7</h4></td>
  </tr>
  <tr>
    <td><h4>Portas UART</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Portas I2C</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Tamanho</h4></td>
    <td><h4>69mm x53mm</h4></td>
  </tr>
  </tbody></table>

## Placas compatíveis

A Base Shield foi testada e é totalmente compatível com as seguintes placas:

- Arduino Uno (todas as revisões)/Seeeduino (V4 e V4.2)
- Arduino Mega/Seeeduino Mega
- Arduino Zero (M0)/Seeeduino Lorawan
- Arduino Leonardo/Seeeduino Lite
- Arduino 101
- Arduino Due 3,3V
- Intel Edison 5V
- Linkit One

:::caution
Os pinos I2C padrão da Grove Base Shield são D70/D71, mas o `Wire` I2C padrão do Arduino DUE é definido como D20/D21, portanto, ao usar ambos juntos, você não conseguirá usar corretamente os pinos I2C da placa de expansão se usar a definição `Wire`, sendo necessário usar `Wire1`.
:::

## Visão geral de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/hardware_overview.jpg" alt="pir" width={600} height="auto" /></p>

- **1-Portas analógicas**: inclui 4 portas analógicas, A0, A1, A2 e A3.
- **2-Portas digitais**: inclui 7 portas digitais, D2, D3, D4, D5, D6, D7 e D8.
- **3-Porta UART**: 1 porta UART.
- **4-Portas I2C**: 4 portas I2C.
- **5-Chave de alimentação**: ao usar o Arduino UNO com a Base Shield v2, coloque a chave na posição de 5V; ao usar o Seeeduino Arch com a Base Shield v2, coloque a chave em 3,3V.
- **6-Botão de reset**: reinicia a placa Arduino.
- **7-LED PWR**：O LED verde acende quando ligado.
- **8-P1, P2**：solde os pads P1 e P2 se usar a Base Shield v2 com o Seeeduino V3.
- **Dimensão**: 2,1 * 2,7 polegadas  

## Primeiros passos

### Hardware

- Passo 1. Prepare os itens abaixo:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4.2</h3></td>
    <td><h3>Base Shield</h3></td>
    <td><h3>Grove - Buzzer</h3></td>
    <td><h3>Grove - Button</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Adquira agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Adquira agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>Adquira agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>Adquira agora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Passo 2. Conecte o Grove - Buzzer à porta D3 da Base Shield.
- Passo 3. Conecte o Grove - Button à porta D2 da Base Shield.
- Passo 4. Conecte a Base Shield ao Seeeduino.
- Passo 5. Conecte o Seeeduino ao PC por meio de um cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-3.png" alt="pir" width={600} height="auto" /></p>

### Software

- Passo 1. Copie o código abaixo para a Arduino IDE e faça o upload para o Seeeduino.

```cpp
const int button = 2;       // connect a button
const int buzzer = 3;       // connect a buzzer
void setup()
{
    pinMode(button, INPUT); //set button as an INPUT device
    pinMode(buzzer, OUTPUT);   //set LED as an OUTPUT device
}
void loop()
{
    int btn = digitalRead(button); //read the status of the button
    digitalWrite(buzzer, btn);
    delay(10);
}
```

- Passo 2. Pressione o botão e ouviremos o buzzer.

## FAQ

Clique [aqui](http://support.seeedstudio.com/knowledgebase/articles/1826443-base-shield-v2-sku-103030000) para ver todas as FAQs da Base Shield V2.

## Visualizador online do esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Baixar Wiki em PDF](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
