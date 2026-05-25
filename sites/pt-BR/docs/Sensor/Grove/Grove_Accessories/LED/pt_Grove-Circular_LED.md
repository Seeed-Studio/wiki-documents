---
description: Grove - LED Circular
title: Grove - LED Circular
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Circular_LED
sku: 104030013
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Circular_LED/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED.jpg" alt="pir" width={600} height="auto" /></p>

Este é um anel exclusivo – ele tem um corpo florido com 24 LEDs controláveis. Talvez ele desperte em você a inspiração para fazer um anel mágico brilhante! Há um quadrado vazado de 1*1 no meio deste módulo, onde você pode colocar um Grove Encoder e transformá-lo em um encoder rotativo visual!

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)

## Recursos

---
- Formato circular
- 24 LEDs, cerca de 5,5 mA de corrente de acionamento para cada canal.
- LEDs controláveis com efeitos floridos
- Interface Grove.

## Esquemático

---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_schmatic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_schmatic.jpg" alt="pir" width={600} height="auto" /></p>

## Especificação

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item</th>
<th scope="col"> Min</th>
<th scope="col"> Típico</th>
<th scope="col"> Máx</th>
<th scope="col"> Unidade</th>
</tr>
<tr>
<th scope="row"> Tensão</th>
<td> 4.5</td>
<td> 5</td>
<td> 5.5</td>
<td> VDC</td>
</tr>
<tr>
<th scope="row"> Corrente</th>
<td> /</td>
<td> 5.5 para cada LED</td>
<td></td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> Dimensão</th>
<td colspan="3"> Forma de anel: 4.5 de diâmetro</td>
<td> cm</td>
</tr>
<tr>
<th scope="row"> Peso líquido</th>
<td colspan="3"> 12</td>
<td> g</td>
</tr>
</table>

## Interface

---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_Interface.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_Interface.jpg" alt="pir" width={600} height="auto" /></p>

## Primeiros Passos

**Materiais necessários**

| Seeeduino V4.2 | Base Shield |Grove - Circular LED|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/Circular_LED_S.jpg" alt="pir" width={600} height="auto" /></p>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Baseshield.

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que tem, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

### Conexão de Hardware

- **Passo 1.** Conecte o Grove - Circular LED à porta **D6** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Circular LED ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Circular LED |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| D7           | Branco                  |
| D6           | Amarelo                 |

### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a [Grove - LED Bar Library](https://github.com/Seeed-Studio/Grove_LED_Bar) do Github.
- **Passo 2.** Veja [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Abra **Arduino IDE -> File -> Examples -> Grove_LED_Bar -> BasicControl**
- **Passo 4.** Descomente o **define MY9221_LED_NUM 24** e comente **#define MY9221_LED_NUM 10** como abaixo.

```
//#define MY9221_LED_NUM 10
#define MY9221_LED_NUM 24
```

- **Passo 5.** Envie o exemplo para o Arduino. Se você não sabe como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).
- **Passo 6.** Você pode ver o LED rodando de .C, 23 e AB repetidamente.

### Brincando com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Circular LED à porta D5 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/cc_Circular_LED.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/img/cc_Circular_LED.png" alt="pir" width={600} height="auto" /></p>

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o código terminar de ser enviado, você verá o LED rodar em círculo.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove-circular_LED_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Fonte

---

- [Biblioteca CircularLED](https://github.com/Seeed-Studio/Grove_LED_Bar)

- [Arquivo PDF do esquemático do Grove Circular LED](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Circular_LED_v0.9b.pdf)

- [Arquivos eagle do Grove-circular LED](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove-circular_LED_eagle_files.zip)

- [Arquivo Codecraft CDC](https://files.seeedstudio.com/wiki/Grove-Circular_LED/res/Grove_Circular_LED_CDC_File.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
