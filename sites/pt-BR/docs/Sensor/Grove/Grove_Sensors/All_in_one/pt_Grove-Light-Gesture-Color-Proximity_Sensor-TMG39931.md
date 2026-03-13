---
description: Grove - Sensor de Luz, Gestos, Cor e Proximidade (TMG39931)
title: Grove - Sensor de Luz, Gestos, Cor e Proximidade (TMG39931)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931
sku: 101020580
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/main.jpg" /></div>

O sensor Grove - Light & Gesture & Color & proximity é um produto baseado no TMG39931, que apresenta detecção avançada de gestos, detecção de proximidade, detecção digital de luz ambiente (ALS), detecção de cor (RGBC) e geração/transmissão de padrões ópticos para broadcast. Este sensor quatro‑em‑um permite coletar dados do ambiente ao redor e transferi‑los pelo barramento I2C.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [data logger S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a linha SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A série de sensores industriais SenseCAP S210x oferece uma experiência pronta para uso para medição ambiental. Consulte o Sensor Sem Fio de Intensidade de Luz S2102, com maior desempenho e robustez para detecção de intensidade luminosa. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8‑em‑1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 Light</strong></a></td>
    </tr>
  </tbody>
</table>

## Características

- Solução óptica integrada em um único dispositivo
- Detecção de luz ambiente
- Filtros de bloqueio UV e IV
- Detecção de gestos complexos
- Ideal para operação atrás de vidro escuro - alta sensibilidade
- Detecção de proximidade
- Geração e transmissão de padrões de código de barras
- Uso duplo de um único LED interno
- Ajustado para fornecer leitura consistente

## Especificação

|Item|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura de operação| -30～85℃|
|Temperatura de armazenamento| -40～85℃|
|Lux máx. [klx]|60|
|Interface|I2C|
|Endereço I2C|0x39|

## Aplicações típicas

- Detecção de gestos
- Detecção de cor
- Detecção de luz ambiente
- Desativação de tela sensível ao toque de celular
- Substituição de interruptor mecânico
- Emulação de código de barras impresso

## Princípio de Funcionamento

**Detecção de gestos**

A detecção de gestos utiliza quatro fotodiodos direcionais para detectar a energia IR refletida (proveniente do LED integrado) e converter informações de movimento físico em informações digitais.

**Detecção de proximidade**

Os recursos de detecção de proximidade fornecem detecção de objetos por meio da detecção, via fotodiodo, da energia IR refletida (proveniente do LED integrado).

**Detecção Digital de Luz Ambiente e Cor**

O recurso de detecção de cor e ALS fornece dados de intensidade de luz vermelha, verde, azul e clara. Cada um dos canais R, G, B, C possui um filtro de bloqueio UV e IR e um conversor de dados dedicado que produz dados de 16 bits simultaneamente. Esta arquitetura permite que as aplicações meçam com precisão a luz ambiente e detectem a cor, o que possibilita aos dispositivos calcular iluminância e temperatura de cor, controlar a luz de fundo do display e a cromaticidade.

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Light&Gesture&Color&Proximity Sensor(TMG39931)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com)|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/withard.jpg" /></div>

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

:::tip
A funcionalidade de gestos ainda não é suportada, pois essa funcionalidade precisa de algoritmos fornecidos pela AMS. Atualizaremos esta biblioteca assim que obtivermos suporte da AMS.
:::

**Exemplo 1**

- **Passo 1.** Baixe a biblioteca [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri‑lo das três formas a seguir：
    1. Abra diretamente na IDE do Arduino pelo caminho: **File --> Examples -->Seeed TMG3993(Grove - Light&Gesture&Color&Proximity Sensor)-->Example1-ProximityPullRaw**.

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard1.png" /></div>

    2. Abra no seu computador clicando em **basic_demo.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_TMG3993-master⁩\⁨examples⁩\Example1-ProximityPullRaw⁩⁩\Example1-ProximityPullRaw.ino**, em que **XXXX** é o local onde você instalou a IDE do Arduino.

    ![](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard2.png)

    3. Ou, você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir em um novo sketch na IDE do Arduino.

```cpp
#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Proximity Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setupRecommendedConfigForProximity();
  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_PVALID)
  {
    uint8_t proximity_raw = tmg3993.getProximityRaw();  //read the Proximity data will clear the status bit
    Serial.print("Proximity Raw: ");
    Serial.println(proximity_raw);
  }
  delay(1);
}


```

:::caution
O arquivo da biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

:::tip
Se tudo correr bem, os dados brutos (uint16_t) do sensor de proximidade deverão poder ser lidos a partir do Serial Monitor.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg1.png" /></div>

Se você quiser executar outros exemplos, pode seguir processos semelhantes.

**Exemplo 2**

Este exemplo também é usado para detectar proximidade, mas de forma interrompida.

Dois limiares precisam ser configurados - baixo e alto. Qualquer valor de proximidade que esteja dentro dessa faixa não acionará nada, mas o valor fora dessa faixa acionará eventos. Em detalhe, quando os valores do sensor de proximidade estiverem abaixo do limiar baixo mais de 10 vezes, um evento de proximidade removida será emitido; quando os valores do sensor de proximidade estiverem acima do limiar alto mais de 10 vezes, um evento de proximidade detectada será emitido. As 10 vezes aqui podem ser configuradas via setInterruptPersistenceReg (veja setupRecommendedConfigForProximity para um exemplo).

- **Passo 1.** Baixe a biblioteca [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo, da mesma forma que no Exemplo 1, mas desta vez escolha "Example2-ProximityInterrupt" em vez de "Example1". Ou copie o código a seguir para a IDE do Arduino:

```cpp


#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;
int last_interrupt_state = -1;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Proximity Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setupRecommendedConfigForProximity();
  tmg3993.setProximityInterruptThreshold(25, 150);  //less than 5cm will trigger the proximity event
  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_PINT)
  {
    uint8_t proximity_raw = tmg3993.getProximityRaw();  //read the Proximity data will clear the status bit

    if (proximity_raw >= 150 && last_interrupt_state != 1) {
      Serial.println("Proximity detected!!!");
      Serial.print("Proximity Raw: ");
      Serial.println(proximity_raw);
      last_interrupt_state = 1;
    } else if (proximity_raw <= 25 && last_interrupt_state != 0) {
      Serial.println("Proximity removed!!!");
      Serial.print("Proximity Raw: ");
      Serial.println(proximity_raw);
      last_interrupt_state = 0;
    }

    // don't forget to clear the interrupt bits
    tmg3993.clearProximityInterrupts();
  }
  delay(10);
}

```

:::caution
O arquivo da biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

Você deverá ver algo como isto no Serial Monitor depois de enviar o código para o Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg2.png" /></div>

**Exemplo 3**

Este exemplo lê os valores dos sensores R, G, B, C. C é definido como o canal claro sem filtro de cor no datasheet do chip. Este exemplo também calcula o valor de Lux para a luz ambiente com base na equação na Application Note deste sensor.

- **Passo 1.** Baixe a biblioteca [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo, da mesma forma que no Exemplo 1, mas desta vez escolha "Example3-Color-Light" em vez de "Example1". Ou copie o código a seguir para a IDE do Arduino:

```cpp


#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Color Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setADCIntegrationTime(0xdb); // the integration time: 103ms
  tmg3993.enableEngines(ENABLE_PON | ENABLE_AEN | ENABLE_AIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_AVALID)
  {
    uint16_t r,g,b,c;
    int32_t lux, cct;
    tmg3993.getRGBCRaw(&r, &g, &b, &c);
    lux = tmg3993.getLux(r, g, b, c);
    //the calculation of CCT is just from the `Application Note`,
    //from the result of our test, it might have error.
    cct = tmg3993.getCCT(r, g, b, c);

    Serial.print("RGBC Data: ");
    Serial.print(r);
    Serial.print("\t");
    Serial.print(g);
    Serial.print("\t");
    Serial.print(b);
    Serial.print("\t");
    Serial.println(c);

    Serial.print("Lux: ");
    Serial.print(lux);
    Serial.print("\tCCT: ");
    Serial.println(cct);
    Serial.println("----");

    // don't forget to clear the interrupt bits
    tmg3993.clearALSInterrupts();
  }
  delay(100);
}

```

:::caution
O arquivo da biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

Você deverá ver algo como isto no Serial Monitor depois de enviar o código para o Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg3.png" /></div>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) Arquivos Eagle](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip)

- **[Zip]** [Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) Biblioteca](https://github.com/Seeed-Studio/Seeed_TMG3993/archive/master.zip)

- **[PDF]** [Datasheet TMG39931](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/TMG3993.pdf)

- **[PDF]** [Versão em PDF da WIKI](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.pdf)

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
