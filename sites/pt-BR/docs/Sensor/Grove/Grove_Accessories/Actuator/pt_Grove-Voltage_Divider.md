---
title: Grove - Divisor de Tensão
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Voltage_Divider//
slug: /Grove-Voltage_Divider
sku: 104020000
last_update:
  date: 11/30/2023
  author: gunengyu
createdAt: '2023-11-30'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Voltage_Divider/
---

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_01.jpg)

O Grove – Divisor de Tensão fornece uma interface para medir tensão externa, eliminando a necessidade de conectar um resistor à interface de entrada. Além disso, o ganho de tensão pode ser selecionado pelo chave DIP. Eles são fáceis de usar.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Voltage-Divider-p-1472.html)


## Características
---
- Interface de Tensão Externa e Interface Grove
- Fácil de usar
- Pode ajustar o ganho

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificação
---

|Item|Mín|Típico|Máx|Unidade|
|---|---|---|---|---|
|Tensão de Trabalho|4.7|5.0|5.3|VCC|
|Precisão de Medição|-|&lt;=1|-|%|
|Faixa de Tensão Externa (selecionar 3)|0.3|-|12.9|V|
|Faixa de Tensão Externa (Selecionar 10)|1.0|-|43|V|
|Dimensão|-|24X20|-|mm|

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos
---
Ao medir a tensão externa, conecte a tensão externa ao J1 e, em seguida, conecte o conector Grove on-board à porta analógica do Arduino/Seeeduino:
- Conecte o módulo à porta A0 do [Grove - Base Shield](https://wiki.seeedstudio.com/pt-br/Base_Shield_V2) com um Cabo Grove universal.
- Conecte o [Grove - Base Shield](https://wiki.seeedstudio.com/pt-br/Base_Shield_V2) ao Arduino/Seeeduino.

Para testar a precisão deste módulo, testei algumas tensões de entrada e obtive os seguintes dados:

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_Test_Score.jpg)

- Como você pode ver, quando as entradas estavam na faixa de medição, o divisor de tensão tem uma alta precisão (&lt;1%, que marquei como "OK"). Mas quando as entradas não estavam na faixa, a precisão fica baixa (marquei como "NO"). Consulte [Especificação](https://wiki.seeedstudio.com/pt-br/Grove-Voltage_Divider/#specification) sobre a faixa de medição específica.

E quando a tensão de saída do divisor de tensão é maior que a VCC (a Tensão de Operação do Grove e referência da leitura analógica), um indicador acenderá para mostrar o erro.

- Usando o monitor serial do Arduino, você pode medir o valor da tensão de entrada. Código de demonstração conforme mostrado abaixo:

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    long  sensorValue=analogRead(A0);
    long  sum=0;
    for(int i=0;i<1000;i++)
    {
        sum=sensorValue+sum;
        sensorValue=analogRead(A0);
        delay(2);
    }
    sum=sum/1000;

    Serial.print("if you set the Gain to 10,the input voltage:");
    Serial.println(10*sum*4980/1023.00);

    Serial.print("if you set the Gain to 3,the input voltage:");
    Serial.println(3*sum*4980/1023.00);

    delay(1000);
}
```

### Brincar com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Divisor de Tensão à porta A0 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta é a sua primeira vez usando o Codecraft, consulte também o [Guia para usar Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado ao final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/cc_Voltage_Divider.png)

Carregue o programa no seu Arduino/Seeeduino.

:::success
Quando o código terminar de ser carregado, você verá a tensão no Serial Monitor.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Grove - Divisor de Tensão](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip)
- [LMV358ID Datasheet](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/LMV358ID_Datasheet.pdf)
- [Arquivo CDC do Codecraft](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove_Voltage_Divider_CDC_File.zip)

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