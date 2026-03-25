---
description: Grove - Medidor de Sensor de Turbidez para Arduino V1.0
title: Grove - Medidor de Sensor de Turbidez para Arduino V1.0
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0
sku: 101020752
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg" alt="pir" width={600} height="auto" /></p>

O sensor de turbidez Grove pode medir a turbidez da água (a quantidade de partículas suspensas).

O sensor óptico deste módulo pode medir a densidade de água turva e a concentração de matérias estranhas usando a refração do comprimento de onda entre o fototransistor e o diodo. Usando um transistor óptico e diodos ópticos, um sensor óptico mede a quantidade de luz que vai da fonte de luz até o receptor de luz, a fim de calcular a turbidez da água.

O modo de saída pode ser selecionado ajustando o interruptor na placa. Suporta saída analógica e digital. A sensibilidade pode ser ajustada pelo potenciômetro on-board.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)

## Recursos

- Baixo consumo de energia
- Tamanho pequeno: módulo Grove de 2,0cm x 4,0cm
- Apenas 3 pinos necessários, economiza recursos de E/S
- Fácil de usar: conector Grove, plug and play
- Modo de saída opcional, suporta saída analógica e saída digital

:::tip

    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificação

|Parâmetro|Valor/Faixa|
|---|---|
| Tensão de Operação | 3.3V/5V DC |
| Interface de Saída  | Analógica / Digital |
| Conector | 1 Grove / 1 interface de alimentação |
| Tamanho   | 20*40mm |

## Aplicações típicas

- Medir o grau de poluição da água em máquinas de lavar, como lava-louças, para determinar o tempo ideal de lavagem e o número de enxágues.
- Controle em locais industriais.
- Tratamento de águas residuais ambientais.

## Visão Geral do Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg" alt="pir" width={600} height="auto" /></p>
- **Chave Digital para Analógico**

- "D" é a saída digital, o limiar dos níveis alto e baixo pode ser ajustado pelo potenciômetro on-board.
- "A" é a saída analógica, o valor de saída diminuirá com o aumento da turbidez do líquido.

## Plataformas Suportadas

| Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={200} height="auto" /></p> |

:::caution  

    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

:::note

    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

**Materiais necessários**

| Seeeduino V4.2 | Grove - Turbidity Sensor | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

:::note

 **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar. 

 **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Saída Analógica

##### Conexão de Hardware

- **Passo 1.** O interruptor no sensor deve selecionar **A**.

- **Passo 1.** Conecte o Grove - Turbidity Sensor à porta **A0** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note

    Se não tivermos o Grove Base Shield, também podemos conectar o Grove - Turbidity Sensor diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove - Turbidity Sensor|
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| Não conectado | Branco                  |
| A0            | Amarelo                 |

##### Software

- **Passo 1.** Copie o código abaixo para a IDE do Arduino e faça o upload. Se você não sabe como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
void setup() {

  Serial.begin(9600); //Baud rate: 9600
}

void loop() {
  int sensorValue = analogRead(A0);// read the input on analog pin 0:
  float voltage = sensorValue * (5.0 / 1024.0); // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  Serial.println(voltage); // print out the value you read:
  delay(500);
}

```

- **Passo 2.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor** ou pressionando as teclas **Ctrl+Shift+M** ao mesmo tempo. Defina o baud rate para **9600**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.**  Agora você pode usar este sensor, e a saída será assim:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png" alt="pir" width={600} height="auto" /></p>

#### Saída Digital

##### Conexão de Hardware

- **Passo 1.** O interruptor no sensor deve selecionar **D**.

- **Passo 1.** Conecte o Grove - Turbidity Sensor à porta **D2** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

:::note

    Se não tivermos o Grove Base Shield, também podemos conectar o Grove - Turbidity Sensor diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove - Turbidity Sensor|
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| Não conectado | Branco                  |
| D2            | Amarelo                 |

##### Software

- **Passo 1.** Copie o código abaixo para a IDE do Arduino e faça o upload. Se você não sabe como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
int ledPin = 3;               
int sensor_in = 2;                 // Turbidity sensor on Digital Pin 2

void setup(){
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);      // Set ledPin as output mode
  pinMode(sensor_in, INPUT);       //Set Turbidity sensor pin to input mode
}

void loop(){
   int sensorValue = digitalRead(sensor_in);
   Serial.println(sensorValue);
   if(sensorValue==HIGH){       //Read sensor signal 
        digitalWrite(ledPin, HIGH);   // if sensor is LOW, then turn on
     }else{
        digitalWrite(ledPin, LOW);    // if sensor is HIGH, then turn off the led
     }
    delay(500);
}
```

- **Passo 2.** Usamos a saída digital e aumentamos ou diminuímos o gatilho ajustando o potenciômetro para fazer o LED ligar e desligar.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />

## Recursos

- **[ZIP]** [Diagrama Esquemático](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip)

- **[PDF]** [LMV358 Datasheet](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/LMV358-Datasheet.pdf)

- **[PDF]** [MPX5700AP Datasheet](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Turbidity-Sensor-Datasheet.pdf)

## Suporte Técnico e Discussão de Produto

## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria integrada de 19 Ah e o poderoso suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial bem-sucedido.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
