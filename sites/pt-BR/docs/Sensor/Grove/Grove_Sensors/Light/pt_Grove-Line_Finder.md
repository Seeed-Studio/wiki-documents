---
description: Grove - Localizador de Linha
title: Grove - Localizador de Linha V1.1
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Line_Finder
sku: 101020172,10102000
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Line_Finder/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/Grovelinefinder1.jpg" /></div>

O Grove-Line finder é projetado para robôs seguidores de linha. Ele possui um LED emissor de IR e um fototransistor sensível a IR. Ele pode enviar sinal digital para um microcontrolador para que o robô possa seguir uma linha preta em um fundo branco, ou vice-versa.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/300px-Get_One_Now_Banner.png" /></a></p>

## Versão

| Versão do Produto              | Mudanças                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Line Finder V1.0| Inicial                                                                                                                                                                                    | 29 Jan 2010      |
| Grove-Line Finder V1.1 | Adicionados pontos de teste                                                                                                                                                                                 | 28 Dec 2015      |

## Especificação

| Parâmetro              | Valor/Faixa                                                   |
|------------------------|---------------------------------------------------------------|
| Fonte de alimentação           | 5                                                             |
| Modo de saída digital    | TTL (Alto quando preto é detectado, Baixo quando branco é detectado) |
| Conector              | Interface Grove com trava de 4 pinos                                 |
| Dimensão              | 20mm*20mm                                                     |
| ROHS                   | Sim                                                           |
| Diodo foto reflexivo | RS-06WD                                                       |
| Comparador             | MV358                                                         |

!!!Tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)

## Plataforma Suportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

- Passo 1. Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Adquira Agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira Agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira Agora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- Passo 2. Conecte o Grove-line finder à porta D3 do Grove-Base Shield.
- Passo 3. Conecte o Grove - Base Shield ao Seeeduino.
- Passo 4. Conecte o Seeeduino ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/seeeduino_line_finder.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar o Grove-Line finder diretamente ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove-Line finder |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Não Conectado | Branco                   |
| D3            | Amarelo                  |

#### Software

- Passo 1. Copie o código para o Arduino IDE e faça o upload.

```c
//------------------------------------------------------------
//Name: Line finder digital mode
//Function: detect black line or white line
//Parameter:   When digital signal is HIGH, black line
//             When digital signal is LOW, white line
//-------------------------------------------------------------
int signalPin =  3;    // connected to digital pin 3
void setup()   {
  pinMode(signalPin, INPUT); // initialize the digital pin as an output:
  Serial.begin(9600);  // initialize serial communications at 9600 bps:
}
// the loop() method runs over and over again,
// as long as the Arduino has power
void loop()
{
  if(HIGH == digitalRead(signalPin))
    Serial.println("black");
  else  Serial.println("white");  // display the color
  delay(1000);                  // wait for a second
}
```

- Passo 2. Abra a porta serial e veremos "black" quando colocar o sensor sobre linhas pretas e "white" quando estiver na área branca.

```
white
white
white
black
black
black
black
black
```

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Line Finder à porta D3 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta for a sua primeira vez usando o Codecraft, veja também o [Guia para Codecraft usando Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/cc_Line_Finder.png" /></div>

Carregue o programa no seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser carregado, você verá se a linha foi encontrada ou não no Monitor Serial.
:::

### Brincar com Raspberry Pi

#### Hardware

- Passo 1. Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove - Line Finder |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Adquira AGORA](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira AGORA](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- Passo 2. Conecte o GrovePi_Plus ao Raspberry.
- Passo 3. Conecte o Grove-Line Finder à porta D7 do GrovePi_Plus.
- Passo 4. Conecte o Raspberry ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/rasp_line_finder.jpg" /></div>

#### Software

- Passo 1. Siga o [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- Passo 2. Faça o git clone do repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Passo 3. Execute os comandos abaixo.

```
cd ~/GrovePi/Software/Python
python grove_line_finder.py
```

Aqui está o código grove_line_finder.py.

```python
import time
import grovepi

# Connect the Grove Line Finder to digital port D7
# SIG,NC,VCC,GND
line_finder = 7

grovepi.pinMode(line_finder,"INPUT")

while True:
    try:
        # Return HIGH when black line is detected, and LOW when white line is detected
        if grovepi.digitalRead(line_finder) == 1:
            print ("black line detected")
        else:
            print ("white line detected")

        time.sleep(.5)

    except IOError:
        print ("Error")
```

- Etapa 4. Veremos a linha preta detectada quando o sensor estiver em cima da linha preta.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_line_finder.py 
black line detected
black line detected
white line detected
white line detected

```

# Esquemático do Grove-Line Finder V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Esquemático do Grove-Line Finder V1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Esquemático do Grove-Line Finder V1.0](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip)
- **[Eagle&PDF]** [Esquemático do Grove-Line Finder V1.1](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip)
- **[Datasheet]** [LMV358.PDF](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/Lmv358.pdf)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/Grove_Line_Finder_CDC_File.zip)

## Suporte Técnico e Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A caixa com classificação IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do aplicativo tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
