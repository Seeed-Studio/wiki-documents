---
description: Grove - Sensor de Oxigênio Pro(GGC2330-O2)
title: Grove - Sensor de Oxigênio Pro(GGC2330-O2)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Oxygen-Sensor-Pro
sku: 101020912
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Oxygen-Sensor-Pro/
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png" alt="pir" width={600} height="auto" /></p>

Grove - Oxygen Sensor Pro(GGC2330-O2) é um tipo de sensor para testar a concentração de oxigênio no ar, que é baseado no princípio de funcionamento original da célula eletroquímica. Quando começa a funcionar, ele produzirá uma corrente proporcional à concentração de oxigênio, então você pode determinar a concentração de oxigênio medindo o tamanho da corrente.

Grove - Oxygen Sensor Pro(GGC2330-O2) é uma versão aprimorada do Grove - Oxygen Sensor(GG2020-O2). Em comparação com o Grove - Oxygen Sensor(GG2020-O2), ele possui um sensor de temperatura integrado para fazer compensação de temperatura, o que pode corrigir o erro de medição causado pela diferença de temperatura e tornar a medição mais precisa. Além disso, é equipado com um microprocessador de alto desempenho, que permite que ele tenha capacidades de saída digital e de tensão analógica ao mesmo tempo, tornando o sensor mais fácil de usar e calibrar e encurtando o período de desenvolvimento.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)

:::tip
    Lançamos o [Guia de Seleção de Sensores de Gás da Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), ele ajudará você a escolher o sensor de gás que melhor se adapta às suas necessidades.
:::

## Características

- Pré-calibração (com MCU e sensor de temperatura integrados)
- Alta precisão e resolução
- Longa vida útil, baixo consumo de energia
- Forte capacidade de anti-interferência
- Boa estabilidade
- Saída de sinal UART

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Sistema Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificação

|Itens  | Parâmetro |
|-------|---------------|
|Gás Alvo | O2 |
|Resolução| 0,1%VOL |
|Faixa de Medição  | 0-25%VOL |
|Tensão de Operação  | DC 5±0.1V DC |
|Corrente de Operação | ＜ 10 mA |
|Saída| Saída UART (nível elétrico TTL, 3V) tensão analógica (consulte a Tabela 2 para o sinal original amplificado do sensor) |
|Condições de Operação| -20～25℃/15～90%RH(sem condensação) |
|Condições de Armazenamento|  -20～50℃/15～90%RH(sem condensação) |
|Tamanho | ø23.5mm*24.5mm |
|Vida Útil Esperada    | 2 anos (no ar)|

:::note
    O tempo de envelhecimento após ligar não é inferior a 5 min; 
    Evite contato de longo prazo com solventes orgânicos voláteis; 
    O ambiente de uso ou armazenamento não pode ser um ambiente ácido ou básico.
:::

## Aplicações

* Detector de gás portátil
- Alarme e detector de gás fixo

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------| -->
<!-- | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Este capítulo é baseado em Win10 e Arduino IDE 1.7.9
:::
Este novo método de uso do Grove - Oxygen Sensor Pro(GGC2330-O2) não é o mesmo que o do Grove - Oxygen Sensor(GG2020-O2) [GG2020-O2](https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-O2-MIX8410/).

Aqui mostraremos como este Grove - Oxygen Sensor Pro(GGC2330-O2) funciona através de uma demonstração simples. Antes de tudo, você precisa preparar os seguintes itens:

| Seeeduino Cortex-M0+ | Grove - Oxygen Sensor Pro(GGC2330-O2) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki210x158.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/Grove_Oxygen_Sensor_Pro_Preview-07-210x157.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={500} height="auto" /></p>|
|[Adquira um Agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira um Agora](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)|[Adquira um Agora](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### Conexão

Graças à vantagem dos módulos da série Grove, você não precisa fazer soldagem ou usar protoboard, o que você precisa fazer é conectar os módulos à porta correta do Base Shield. Para esta demonstração, temos apenas um módulo Grove.

- Grove - Oxygen Sensor Pro(GGC2330-O2) é um módulo de entrada analógica, nós o conectamos à **UART** nesta demonstração.

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg" alt="pir" width={600} height="auto" /></p>

### Envie o código para o Arduino

Copie o código abaixo para a Arduino IDE.

```
void setup() {
  Serial.begin(9600);
  Serial2.begin(9600);
}
void loop() {
  if (Serial2.available()){
    uint8_t begin_code = Serial2.read();
    delay(10);
    uint8_t state_code = Serial2.read();
    delay(10);
    uint8_t high_code = Serial2.read();
    delay(10);
    uint8_t low_code = Serial2.read();
    delay(10);
    uint8_t check_code = Serial2.read();
    delay(10);
    uint8_t checkk_code = Serial2.read();
    delay(10);
    uint8_t checkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkkk_code = Serial2.read();
    delay(10);

    if(begin_code == 255 && state_code == 134){

      float O2_val = ((high_code * 256) + low_code) * 0.1 ;
      Serial.print("O2: ");
      Serial.print(O2_val);
      Serial.println(" %");
      }
    }
    while(Serial2.read()>=0);    //clear buffer
}
```

Em seguida, escolha a placa e a porta COM corretas e clique no botão Upload; esse processo leva alguns segundos.

### Obter dados

Abra o monitor serial da sua Arduino IDE e você obterá os dados agora.

:::warning
    É necessário cerca de 20~30 minutos para pré-aquecer o sensor, caso contrário você obterá um valor maior.
 :::
<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Folha de Dados do Grove - Oxygen Sensor Pro](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GGC2330-O2-1.0.pdf)
- [Esquemático em Arquivo Eagle](http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip)
- [Repositório Github deste Documento](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
- [PDF SCH](#files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GroveOxygenSensorProv1.0sch.pdf)

## Projetos

**LoRa IoTea**: Um sistema automático de coleta de informações aplicado a plantações de chá. Ele faz parte da coleta inteligente de informações agrícolas.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Uma Caixa de Plantas com Iluminação e Chuva** Você nunca viu uma forma assim de regar sua planta.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustes [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O gabinete IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do aplicativo tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial bem-sucedido.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
