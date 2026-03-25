---
description: Grove - Round Force Sensor FSR402
title: Grove - Round Force Sensor FSR402
keywords:
  - Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Round_Force_Sensor_FSR402
sku: 101020553
last_update:
  date: 1/19/2023
  author: jianjing Huang
createdAt: '2023-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Round_Force_Sensor_FSR402/
---




![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/main.jpg)

O Grove-Round Force Sensor(FSR402) é um módulo sensível à força. Na extremidade do sensor há um resistor redondo sensível à força, cuja resistência depende da pressão aplicada a esse resistor.
Simplificando, quanto maior a pressão, menor a resistência. Entretanto, a saída deste sensor não é estritamente linear, portanto não o recomendamos para medições precisas. Para mais detalhes sobre o diagrama pressão–resistência, consulte o
[FSR402 Datasheet](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf)

Como você pode ver, este módulo é baseado no FSR402. A série Interlink Electronics FSR® 400 faz parte da família de resistores sensíveis à força de zona única (Force Sensing Resistor®). Force Sensing Resistors, ou FSR's, são dispositivos robustos de filme espesso polimérico (PTF) que apresentam uma diminuição da resistência com o aumento da força aplicada à superfície do sensor. Essa sensibilidade à força é otimizada para uso em dispositivos de interface homem–máquina, incluindo eletrônica automotiva, sistemas médicos, controles industriais e robótica.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                           | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-Round Force Sensor(FSR402) | Inicial                                                                                               | Jun 2018      |

## Recursos

- Saída analógica
- Estrutura mecânica confiável  
- Alta durabilidade:

    Testado para 10 milhões de atuações, 1kg, 4Hz / -10% de variação média de resistência

## Especificações

|Item|Valor|
|---|---|
|Tensão de operação|3.3V/5V|
|Faixa de sensibilidade de força|0.2N--20N|
|Resolução de força|Contínua (analógica)|
|Saída analógica|0-650|
|Resistência sem atuação|>10 MΩ|
|Resistência mínima|1 KΩ|
|Tempo de subida do dispositivo|&lt;3 microssegundos|
|Tamanho|C: 75mm L: 20mm A: 11mm|
|Peso|2.5g|
|Tamanho da embalagem|C: 140mm L: 90mm A: 10mm|
|Peso bruto|10g|

:::tip
Se você quiser medir a resistência sem atuação, remova este elemento do sensor
:::

## Aplicações

- eletrônica automotiva
- sistemas médicos
- controles industriais
- robótica.

## Visão geral de hardware

### Mapa de pinos

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/hardware.png)

Este módulo usa um chip DC-DC XC6206P332MR para fornecer 3.3V estáveis, como você pode ver nós o chamamos de 3V3. Você pode considerar o Force Sensor **J1** como uma resistência variável, vamos chamá-la de **R<sub>f<sub></sub></sub>**. Quanto maior a pressão, menor o valor de **R<sub>f<sub></sub></sub>**.

Há duas partes na figura acima, para a parte esquerda:

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>IN</sub> = (3.3 × 30K) / (30K + R<sub>f</sub>)</div>

Para a parte direita, é um seguidor emissor; usamos o amplificador U1 para isolar os circuitos de pré-estágio e pós-estágio.

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>out</sub> = V<sub>IN</sub></div>

Portanto, a saída é:

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>out</sub> = (3.3 × 30K) / (30K + R<sub>f</sub>)</div>

:::tip
Nesta seção mostramos apenas parte do esquemático; para o documento completo, consulte [Resources](#Resources)
:::

### Desenho mecânico

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_A.jpg)
![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_B.jpg)
![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Exploded_View.jpg)

## Plataformas suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários terão que escrever sua própria biblioteca de software.
:::

## Primeiros passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove-Round Force Sensor(FSR402) |Grove-LED|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">Adquira agora</a>|

:::note
 **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove-Round Force Sensor(FSR402) à porta **A0** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove-LED à porta **D3** do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/connect.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove-Round Force Sensor(FSR402)|
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| Não conectado | Branco                  |
| A0           | Amarelo                 |

| Seeeduino     | Grove-LED|
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| Não conectado | Branco                  |
| D3            | Amarelo                 |

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Abra a IDE do Arduino e crie um novo arquivo, depois copie o código a seguir para o novo arquivo.

```cpp
/* How to use a Force sensitive resistor to fade an LED with Arduino
   More info: http://www.ardumotive.com/how-to-use-a-force-sensitive-resistor-en.html
   Dev: Michalis Vasilakis // Date: 22/9/2015 // www.ardumotive.com  */

//Constants:
const int ledPin = 3;     //pin 3 has PWM funtion
const int sensorPin = A0; //pin A0 to read analog input

//Variables:
int value; //save analog value


void setup(){

  pinMode(ledPin, OUTPUT);  //Set pin 3 as 'output'
  Serial.begin(9600);       //Begin serial communication

}

void loop(){

  value = analogRead(sensorPin);       //Read and save analog value from potentiometer
  Serial.println(value);               //Print value
  value = map(value, 0, 1023, 0, 255); //Map value 0-1023 to 0-255 (PWM)
  analogWrite(ledPin,255-value);          //Send PWM value to led
  delay(100);                          //Small delay

}

```

- **Passo 2.** Faça o upload do demo. Se você não sabe como fazer o upload do código, por favor confira [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 3.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá a saída de A0. Além disso, você verá o LED ficar mais claro quando pressionar o Round Force Sensor com mais força.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivo eagle do Grove-Round Force Sensor(FSR402)](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [Datasheet do FSR402](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demos simples, que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/55WQ3ia52JM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão sobre o Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
