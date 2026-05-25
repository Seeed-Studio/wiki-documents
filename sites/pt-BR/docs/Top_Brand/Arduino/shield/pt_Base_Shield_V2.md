---
description: Base_Shield_V2
title: Base Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Base_Shield_V2
sku: 103030000
last_update:
  date: 01/11/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Base_Shield_V2/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" alt="pir" width={600} height="auto" /></p>

Arduino Uno é até agora a placa Arduino mais popular, porém às vezes é frustrante quando seu projeto exige muitos sensores ou LEDs e seus jumpers ficam uma bagunça. O objetivo de criar o Base Shield é ajudar você a se livrar da protoboard e dos jumpers. Com os ricos conectores Grove na placa base, você pode adicionar todos os módulos Grove ao Arduino Uno de forma conveniente! O pinout do Base Shield V2 é o mesmo do Arduino Uno R3.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/base-shield-v13-p-1378.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Versão

<table align="center">
  <tbody>
  <tr>
    <td><h3>Versão do Produto</h3></td>
    <td><h3>Alterações</h3></td>
    <td><h3>Data de Lançamento</h3></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.2</h4></td>
    <td><h4>Inicial</h4></td>
    <td><h4>Out 2011</h4></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.3</h4></td>
    <td><h4>Alterar o layout e a quantidade de conectores Grove</h4></td>
    <td><h4>Ago 2012</h4></td>
  </tr>  
  <tr>
    <td><h4>Base Shield V2.0</h4></td>
    <td><h4>Alterar o layout e a quantidade de conectores Grove, bem como adicionar uma chave de alimentação para habilitar tanto 3,3 V quanto 5 V.</h4></td>
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

O Base Shield é testado e totalmente compatível com as seguintes placas:

- Arduino Uno (todas as revisões)/Seeeduino (V4 & V4.2)
- Arduino Mega/Seeeduino Mega
- Arduino Zero (M0)/Seeeduino Lorawan
- Arduino Leonardo/Seeeduino Lite
- Arduino 101
- Arduino Due 3.3V
- Intel Edison 5V
- Linkit One

:::caution
Os pinos I2C padrão do Grove Base Shield são D70/D71, mas o `Wire` I2C padrão do Arduino DUE é definido como D20/D21, portanto, ao usar ambos juntos, você não conseguirá usar corretamente os pinos I2C da placa de expansão se usar a definição `Wire`, sendo necessário usar `Wire1`.
:::

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/hardware_overview.jpg" alt="pir" width={600} height="auto" /></p>

- **1-Portas analógicas**: inclui 4 portas analógicas, A0, A1, A2 e A3.
- **2-Portas digitais**: inclui 7 portas digitais, D2, D3, D4, D5, D6, D7 e D8.
- **3-Porta UART**: 1 porta UART.
- **4-Portas I2C**: 4 portas I2C.
- **5-Chave de alimentação**: ao usar Arduino UNO com Base Shield v2, coloque a chave na posição de 5 V; ao usar Seeeduino Arch com Base Shield v2, coloque a chave em 3,3 V.
- **6-Botão de reset**: reinicia a placa Arduino.
- **7-LED PWR**：O LED verde acende quando ligado.
- **8-P1, P2**：solde os pads P1 e P2 se for usar o Base Shield v2 com Seeeduino V3.
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
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>Adquira UM Agora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Passo 2. Conecte o Grove - Buzzer à porta D3 do Base Shield.
- Passo 3. Conecte o Grove - Button à porta D2 do Base Shield.
- Passo 4. Conecte o Base Shield ao Seeeduino.
- Passo 5. Conecte o Seeeduino ao PC por meio de um cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-3.png" alt="pir" width={600} height="auto" /></p>

### Software

- Passo 1. Copie o código abaixo para o Arduino IDE e faça o upload para o Seeeduino.

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

Clique [aqui](http://support.seeedstudio.com/knowledgebase/articles/1826443-base-shield-v2-sku-103030000) para ver todas as FAQs do Base Shield V2.

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Baixar Wiki em PDF](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.pdf)

## Projeto

**Smart Plant IoT**: Irrigação automática da planta e acompanhamento da saúde da planta por meio da Helium e do Microsoft Azure IoT.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/Nyceane/smart-plant-iot-59cbc3/embed" width={350} />

**Kit de monitoramento ambiental alimentado por energia solar**: Um kit de código aberto alimentado por energia solar para monitorar qualidade do ar, nível de ruído, umidade e temperatura.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed" width={350} />

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
