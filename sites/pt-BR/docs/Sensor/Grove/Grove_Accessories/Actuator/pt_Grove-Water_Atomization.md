---
title: Grove - Atomização de Água
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Water_Atomization/
slug: /Grove-Water_Atomization
sku: 101020090
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Water_Atomization/
---

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg)

Grove - Water Atomization é um excelente módulo Grove para você desenvolver facilmente um atomizador ou um módulo de atomização em suas aplicações. Com alguns passos simples, você pode prototipar um atomizador. Ele possui interface Grove, o que o torna facilmente aplicável a muitas aplicações. Um umidificador é uma aplicação básica que pode ser construída com ele; você pode desenvolver objetos mais avançados e interessantes com tecnologia de aroma digital e qualquer outra situação em que a atomização seja necessária.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Water-Atomization-v10-p-2542.html)

Recursos
--------

- Aquece com ultrassom.
- Fácil de prototipar uma nova aplicação.
- Bem aplicado a vastas aplicações.
- Para diversas aplicações interessantes, inteligentes e modernas.

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Ideias de aplicação
-----------------

- Umidificador.
- Emissor de aromas em diferentes situações.
- Para aplicações de casa inteligente.
- Para objetos inteligentes em produtos eletrônicos de consumo.

Especificações
--------------

| Parâmetro            | Valor          |
|----------------------|----------------|
| Tensão de operação   | 5.0V(DC)       |
| Ripple(na potência máx.) | ≤100 mV        |
| Potência máxima      | 2W             |
| Tensão de pico de saída | 65±5V          |
| Frequência de operação | 105±5kHz       |
| CIs                   | ETA1617, NE555 |

Plataformas suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever a própria biblioteca de software.
:::

Visão geral de hardware
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_overview_1200.jpg) -->

**Interface Grove**
Conecte a placa de controle principal, como a placa Seeeduino, à placa driver.

**Interface do transdutor**
Conecte o transdutor ultrassônico à placa driver.

**Cabo Grove**
Conecte a placa de controle principal à placa driver.

### **Lista de peças**

| Nome da peça                | Quantidade |
|-----------------------------|-----------|
| Placa driver                | 1PC       |
| Cabo Grove                  | 1PC       |
| Placa do transdutor ultrassônico | 1PC       |

Primeiros passos
-----------

### **Material necessário**

Seeeduino v4.2 x 1

Grove - Base shield v2 x 1

Grove - Wire x 1

### **Preparativos**

Consulte os seguintes guias para montar uma IDE apropriada:

:::note
Nós escolhemos o Seeeduino neste caso.
:::

- Primeiros passos no Windows
- Primeiros passos no Mac OS X

### **Conexões de hardware**

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

### **Uma pequena demonstração**

:::note
  Também precisamos de um Grove - Touch Sensor nesta demonstração e conectá-lo também ao D5.
:::

1.Copie o código abaixo para o editor da IDE Arduino.

```
/*
  Demo code for grove  atomization.
  Touch to start atomizing.
  Last modified by he
  by xiaohe
*/

// the setup function runs once when you press reset or power the board
void setup() {
    // initialize digital pin 13 as an output.
    pinMode(A5, OUTPUT);// Set A5 as OUTPUT
    pinMode(5, INPUT); // Use digital pin 5 as output port
}

// the loop function runs over and over again forever
void loop() {
    int D2Sig = digitalRead(5);// read pin 5 signal
    if (D2Sig == 1)
    {
        /* code */
        digitalWrite(A5, HIGH);   // atomize
        delay(10000);              // wait for 10 seconds
        digitalWrite(A5, LOW);    // atomization stopped

    }
}
```

2.Coloque um pouco de papel toalha em um copo de papel cortado cheio de água e ponha o transdutor ultrassônico sobre o papel.

:::note
  O lado inferior é o lado com cavidade, que deve ficar voltado para baixo. Deixe o fundo da placa do transdutor submergir na água e mantenha o lado superior acima da água. A função do papel é conduzir a água até o transdutor e manter a parte superior do transdutor acima da água.
:::

3.Envie o código para a placa de controle principal.

4.Agora, se você tocar no sensor de toque Grove, verá o vapor sendo produzido.

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

:::caution
  Não toque diretamente nos pinos da interface do transdutor, pois a tensão de pico de saída da placa driver pode ser de 65V.
:::

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg)

:::caution
  O indutor <span style={{fontWeight: 'bold'}}>L2</span> (marcado no retângulo vermelho acima) será aquecido. Portanto, não o toque diretamente.
:::

### Brinque com o Codecraft

#### Hardware

**Passo 1.** Conecte o Grove - Water Atomization à porta D2 e conecte o Grove - Button à porta D5 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/cc_Water_Atomization.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
    Quando o código terminar de ser enviado, a atomização de água começará a atomizar quando você pressionar o botão.
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivos de esquemático em Eagle](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip)
- [Arquivos de esquemático em PDF](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip)
- [Arquivo CDC do Codecraft](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Grove_Water_Atomization_CDC_File.zip)

## Projeto

**Umidificador inteligente** Deixe seu quarto confortável no inverno.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/smart-humidifier-dac66f/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Water_Atomization -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
