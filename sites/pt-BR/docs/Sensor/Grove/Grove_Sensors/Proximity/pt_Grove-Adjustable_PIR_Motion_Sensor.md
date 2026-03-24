---
title: Grove - Sensor de Movimento PIR Ajustável
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Adjustable_PIR_Motion_Sensor/
slug: /Grove-Adjustable_PIR_Motion_Sensor
sku: 101020617
last_update:
  date: 01/05/2022
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Adjustable_PIR_Motion_Sensor/
---

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/main.jpg)

Grove - Adjustable PIR Motion Sensor é um sensor de movimento infravermelho passivo fácil de usar, que pode detectar movimento de objetos infravermelhos a até 3 metros. Quando qualquer objeto infravermelho se move dentro de sua faixa de detecção, o sensor gera nível ALTO em seu pino SIG. E você pode ajustar o tempo em que o SIG permanece em nível ALTO para até 130s através do potenciômetro; além disso, você pode ajustar a faixa de detecção por meio do outro potenciômetro.

<iframe width={800} height={450} src="https://www.youtube.com/embed/EhZ7uDvoALE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Adjustable PIR Motion Sensor | Inicial                                                                                               | Set 2018      |

## Recursos

- Filtro integrado, alta imunidade a RFI
- Tempo de saída, sensibilidade e faixa de detecção ajustáveis
- Baixa tensão, baixo consumo de energia

## Especificação

<div>
  |Item|Valor|
  |---|---|
  |Tensão de Operação|3.3V / 5V|
  |Temperatura de Operação|-30℃ ~ 70℃|
  |Ângulo de Visão|Posicionamento horizontal 80°<br />Posicionamento vertical 55°|
  |Resposta Espectral de Detecção(λ)|5nm ~ 14nm|
  |Distância de Detecção|0 ~ 3m|
  |Tempo em Nível Alto| &lt;130s|
  |Interface|Digital|
  |Tamanho|C: 40mm L: 20mm A: 15mm|
  |Peso|4.5g|
  |Tamanho da Embalagem|C: 140mm L: 90mm A: 15mm|
  |Peso Bruto|10g|
</div>

## Aplicações típicas

- Detecção de movimento PIR
- Detecção de intrusos
- Detecção de ocupação
- Luzes com sensor de movimento
- Sistema de segurança
- Controle automático

## Visão Geral do Hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout_back.jpg)

:::warning
  A lente Fresnel equipada com o módulo é uma peça de plástico e é proibido aproximá-la de altas temperaturas ou chamas abertas.
:::

### Esquemático

**Alimentação**

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/11.jpg)

A tensão típica do L221D é 3.3V, então usamos o chip [XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para fornecer 3.3V estáveis. A entrada do XC6206P33 varia de 1.8V a 6.0V, então você pode usar este módulo com o seu Arduino tanto em 3.3V quanto em 5V.

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield |Adjustable PIR Motion Sensor | Grove - Blue LED |
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/led.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html" target="_blank">Adquira agora</a>

:::note
    **1** Conecte o cabo USB suavemente, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos com 2 fios não podem transferir dados. Se você não tem certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Adjustable PIR Motion Sensor à porta **D2** do Grove-Base Shield, conecte o Grove - Blue LED à porta **D4** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/connect.jpg)

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - Adjustable PIR Motion Sensor |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V or 3.3V     | Vermelho                | VCC |
| Sem conexão            | Branco              | NC |
| D2           | Amarelo             | SIG |

| Seeeduino      |  Cabo Grove       | Grove - Blue LED |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V or 3.3V     | Vermelho                | VCC |
| Sem conexão            | Branco              | NC |
| D4           | Amarelo             | SIG |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Basta clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na Arduino IDE.

```cpp
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 2//Use pin 2 to receive the signal from the module 
#define LED 4//the Grove - LED is connected to D4 of Arduino

void setup()
{
 pinsInit();
}

void loop() 
{
 if(isPeopleDetected())//if it detects the moving people?
  turnOnLED();
 else
  turnOffLED();
}
void pinsInit()
{
 pinMode(PIR_MOTION_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
/***************************************************************/
/*Function: Detect whether anyone moves in it's detecting range*/
/*Return:-boolean, ture is someone detected.*/
boolean isPeopleDetected()
{
 int sensorValue = digitalRead(PIR_MOTION_SENSOR);
 if(sensorValue == HIGH)//if the sensor value is HIGH?
 {
  return true;//yes,return ture
 }
 else
 {
  return false;//no,return false
 }
}
```

- **Passo 2.** Carregue o demo. Se você não souber como carregar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::success
     Se tudo correr bem, quando alguém se aproximar deste sensor ou quando você se aproximar deste sensor com a mão, o LED acenderá.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - Adjustable PIR Motion Sensor](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip)

- **[PDF]** [Datasheet L221D](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Mini%20SMD%20Digital%20Pyroelectric%20Infrared%20Sensors.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
