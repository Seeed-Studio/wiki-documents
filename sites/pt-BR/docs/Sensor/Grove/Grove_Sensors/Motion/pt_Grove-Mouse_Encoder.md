---
description: Grove - Mouse Encoder
title: Grove - Mouse Encoder
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mouse_Encoder
sku: 103020030
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Mouse_Encoder/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mouse Encoder é um tipo de codificador rotativo incremental mecânico com dados de feedback da direção e da velocidade de rotação<sup>\[1\]</sup>. Ele possui uma interface Grove padrão que vai economizar muito trabalho de fiação e programação. Além disso, é bem adaptado para trabalho pesado e ambientes agressivos. Este produto pode ser aplicado em brinquedos, robôs e dispositivos de entrada de consumo.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-%E2%80%93-Mouse-Encoder-p-2607.html)

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  A velocidade de rotação é projetada para ser inferior a 1000 rad/min (radianos por minuto).
</div>


Características
--------

-   Versátil para diferentes ambientes.
-   Bem adaptado para trabalho pesado e ambiente agressivo.
-   Com ressaltos e uma sensação agradável.
-   Interface Grove padrão para facilitar a programação e a fiação.
-   Preciso e confiável.

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Aplicações
------------

É versátil para diferentes aplicações em ambiente agressivo, como brinquedos, robótica e dispositivos de entrada de consumo.

Especificações
--------------

| Item                             | Min. | Típico | Máx. |
|----------------------------------|------|--------|------|
| Tensão de operação (V)          |      | 3.3    | 5.5  |
| Corrente de operação (mA)       |      | 10     | 13   |
| Ciclo de trabalho (velocidade constante) |      | 50%    |      |
| Diferença de fase (velocidade constante) |      | π/4    |      |
| Pulsos por volta                |      | 12     |      |

<div className="admonition note">
  <p className="admonition-title">Notas</p>
  <ol>
    <li>Não há botão incluído na lista de produtos. Porque pensamos que isso tornará este codificador mais versátil para diferentes ambientes.</li>
    <li>Você pode encontrar o arquivo de <a href="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove-Mouse_Encoder_Dimensions.pdf">dimensões</a> em formato PDF, e pode personalizar um botão de acordo com as dimensões.</li>
    <ol></ol>
  </ol>
</div>

<div className="admonition tip">
  <p className="admonition-title">Dica</p>
  Você pode simplesmente usar uma ponta de chave de fenda hexagonal adequada se estiver apenas construindo um protótipo para o seu projeto.
</div>


Visão geral de hardware
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg" alt="pir" width={600} height="auto" /></p>

**Interface Grove**   
Conecte a placa de controle principal, como a placa **Seeeduino**, com a placa de acionamento.

**Abertura hexagonal**   
Uma abertura pela qual você passa um botão.

### **Lista de peças**

| Nome da peça                           | Quantidade |
|------------------------------------------|------------|
| Grove - Mouse Encoder (sem botão incluído) | 1 PC       |
| Cabo Grove - Universal                  | 1 PC       |

Primeiros passos
-----------

Esta seção mostrará como construir um ambiente de IDE para criar aplicações com o Grove - Mouse Encoder.

<!-- 图有问题 Refer to [Seeeduino V4.2](/pt-br/Seeeduino_v4.2#Getting_Started_on_Windows)(It is exchangeable with Arduino board) for how to build a complete an IDE for your applications, or read [Arduino guide](https://www.arduino.cc/en/Guide/HomePage) if you use Arduino original board. -->

<div className="admonition note">
  <p className="admonition-title">Notas</p>
  <ol><li>O ciclo de trabalho será maior se a velocidade de rotação for baixa.</li>
    <li>A largura de pulso (PW) não será a mesma se a velocidade de rotação não for constante.</li>
    <li>A velocidade de rotação deve ser inferior a 1000 rad/min, caso contrário levará a uma largura de pulso de saída muito estreita ou poderá causar danos a este codificador.</li>
    <li>A tensão de saída será incerta (tensão alta ou baixa) em circunstâncias sem rotação, uma vez que a posição do pulso dentro deste codificador não é certa.</li></ol>
</div>


### Demonstração básica

Esta demonstração mostra como detectar posição e direção.

#### Material necessário

-   Seeeduino V4.2
-   Base shield V2.0
-   Cabo USB (tipo A para micro tipo B)

#### Conexões

Conecte os materiais como mostrado abaixo:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg)  -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Código

```
/* Read Quadrature Encoder
* Connect Encoder to Pins encoder0PinA, encoder0PinB, and +5V.
*
* Sketch by max wolf / www.meso.net
* v. 0.1 - very basic functions - mw 20061220
*
*/  


int val; 
int encoder0PinA = 3;
int encoder0PinB = 4;
int encoder0Pos = 0;
int encoder0PinALast = LOW;
int n = LOW;

void setup() { 
    pinMode (encoder0PinA,INPUT);
    pinMode (encoder0PinB,INPUT);
    Serial.begin (115200);
} 

void loop() { 
    n = digitalRead(encoder0PinA);
    if ((encoder0PinALast == LOW) && (n == HIGH)) {
        if (digitalRead(encoder0PinB) == LOW) {
            encoder0Pos--;
        } else {
            encoder0Pos++;
        }
        Serial.println(encoder0Pos);
        Serial.println ("/");
    } 
    encoder0PinALast = n;
}
```

1.  Copie o código e grave-o na placa controladora.
2.  Abra a janela do monitor.
3.  Gire a ponta da chave de fenda para a esquerda ou para a direita para ver o que acontece.

A saída:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png" alt="pir" width={600} height="auto" /></p>


## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
---------

- [Arquivos de esquemático](https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mouser_Encoder -->

## Suporte técnico e discussão de produtos
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
