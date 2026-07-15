---
description: Grove - Kit Integrado de Sensor de Pressão
title: Grove - Kit Integrado de Sensor de Pressão
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Integrated-Pressure-Sensor-Kit
sku: 110020248
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Integrated-Pressure-Sensor-Kit/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-wiki.jpg" alt="pir" width={600} height="auto" /></p>

O kit integrado de sensor de pressão Grove (MPX5700AP) adota o avançado sensor de pressão de silício integrado MPX5700AP, que apresenta as vantagens de alta precisão, boa confiabilidade e ausência de necessidade de calibração. É muito adequado para a construção de um sistema de medição de pressão com Arduino, capaz de medir a pressão do ar na faixa de 15Kpa a 700Kpa. Incluímos uma seringa e um tubo de borracha no kit.  

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html)

## Recursos

- 2,5% de erro máximo entre 0° e 85°C
- Disponível em configurações Absoluta, Diferencial e Manométrica
- Extensômetro de tensão por cisalhamento de silício patenteado
- Elemento monocasco em epóxi durável

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Sistema Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificação

|Parâmetro|Valor/Faixa|
|---|---|
|Tensão de operação| 3.3V/5V DC|
| interface de saída | analógica |
|Faixa de medição|15Kpa-700Kpa|
|Tamanho de aparência|&lt;20*40mm|

## Visão Geral de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-pin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-pin.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Suportadas

<!-- | Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

| Arduino | Raspberry Pi | BeagleBone | Wio | LinkIt ONE |
|---------|--------------|------------|-----|------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" /></p> |<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" /></p>  |

:::caution  

    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

:::note

    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que consulte [Começando com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

**Materiais necessários**

| Seeeduino V4.2 | Grove-Integrated-Pressure-Sensor-Kit | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-210-157.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

:::note

 **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tem certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 

 **2** Cada módulo Grove acompanha um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove Integrated Pressure Sensor à porta **A0** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC via cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-con.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-con.jpg" alt="pir" width={600} height="auto" /></p>

:::note

    Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-Integrated-Pressure-Sensor-Kit ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove-Integrated-Pressure-Sensor-Kit |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| Não Conectado | Branco                  |
| A0            | Amarelo                 |

#### Software

:::note

    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que consulte [Começando com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Copie o código abaixo para a Arduino IDE e faça o upload. Se você não sabe como enviar o código, verifique [como enviar código](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
int rawValue; // A/D readings
int offset = 410; // zero pressure adjust
int fullScale = 9630; // max pressure (span) adjust
float pressure; // final pressure
#define SERIAL Serial

void setup() {
  SERIAL.begin(9600);
}

void loop() {
  rawValue = 0;
  for (int x = 0; x < 10; x++) rawValue = rawValue + analogRead(A0);
  pressure = (rawValue - offset) * 700.0 / (fullScale - offset); // pressure conversion

  SERIAL.print("Raw A/D is  ");
  SERIAL.print(rawValue);
  SERIAL.print("   Pressure is  ");
  SERIAL.print(pressure, 1); // one decimal places
  SERIAL.println("  kPa");
  delay(1000);
}
```

- **Passo 2.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina o baud rate para **9600**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.**  Agora você pode usar este sensor, e a saída será assim:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result2.png" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove-Integrated-Pressure-Sensor-Kit-(MPX5700AP).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Diagrama esquemático do Grove Integrated Pressure Sensor](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove-Integrated-Pressure-Sensor-Kit-(MPX5700AP).zip)

- **[PDF]** [LMV358 Datasheet](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/LMV358_datasheet.pdf)

- **[PDF]** [MPX5700AP Datasheet](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/MPX5700AP_datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
