---
description: Grove - Sensor de Toque I2C
title: Grove - Sensor de Toque I2C
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-I2C_Touch_Sensor
sku: 101020047
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Touch_Sensor/
---
<!-- ---
name: Grove - I2C Touch Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html
oldwikiname: Grove_-_I2C_Touch_Sensor
prodimagename: Grove-I2C-Touch-Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/P3202380.jpg
surveyurl: https://www.research.net/r/Grove-I2C_Touch_Sensor
sku: 101020047
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/Grove-I2C-Touch-Sensor.jpg)

O Sensor de Toque I2C é baseado no Controlador de Sensor de Toque Capacitivo de Proximidade da FreeScale - MPR121. Ele detecta o toque ou a proximidade de dedos humanos. Este sensor inclui um controlador de Sensor de Toque e 4 sensores de dedo. Pode-se inserir os conectores dos sensores na base do controlador do Sensor e começar a detectar o toque.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-I2C-Touch-Sensor-p-840.html)

Especificações
-------------

| Parâmetro              | Valor/Faixa                         |
|------------------------|-------------------------------------|
| Tensão de operação     | 3~5.5V                              |
| Corrente em modo standby   | 2μA                             |
| Canais de toque        | 12 (incluindo 4 com sensores de toque) |
| Protocolo de comunicação | I2C                               |
| Endereço I2C           | 0x5A                     |

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Sistema Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0030.png)

Existem 12 eletrodos CH0-CH11. CH0-CH3 estão conectados a 4 sensores de toque.

Os CH4-CH11 são para o cliente expandir a função. Se você precisar de mais, pode fazer os sensores por conta própria.

Os fios dos sensores são torcidos para reduzir o impacto do ambiente. O fio preto (terra) pode ser cortado se for necessária alta sensibilidade.

O pino INT precisa ser derivado se os clientes quiserem usar o pino de interrupção do MPR121.

Primeiros Passos
---------------

### **Grove - Ajuda**

Os seguintes documentos ajudam o usuário a começar a usar o Grove.

- [Prefácio - Primeiros Passos](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [Introdução ao Grove](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

:::note
Como cada eletrodo precisa ser autoconfigurado pelo MPR121 durante a energização e não há reset de energia no controlador do sensor de toque, toda vez que você inserir ou remover um sensor, será necessário reiniciar a alimentação do Seeeduino.
:::

Os sensores também podem sentir os dedos humanos com algo entre eles, ou seja, você não precisa realmente tocar nos sensores com os dedos.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0026.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0027.jpg)

Com um cartão de papel com cerca de 3 mm de espessura, o sensor pode sentir o toque dos dedos, tornando-o uma boa solução para muitas aplicações.

### Brinque com o Codecraft

#### Hardware

**Passo 1.** Usando um cabo Grove conecte o Grove - Sensor de Toque I2C à porta I2C do Seeeduino. Se você estiver usando Arduino, aproveite um Base Shield.

**Passo 2.** Conecte o Seeedino/Arduino ao seu PC via um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta for a sua primeira vez usando o Codecraft, consulte também o [Guia para usar o Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/cc_I2C_Touch_Sensor.png)

Carregue o programa para o seu Arduino/Seeeduino.

:::tip
Quando o código terminar de carregar, você verá qual canal você tocou no Serial Monitor.
:::

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- Biblioteca do Sensor de Toque I2C](https://github.com/Seeed-Studio/Grove_I2C_Touch_Sensor)
- [Arquivos eagle do Sensor de Toque I2C (v1.1).zip](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip)
- [Sensor de Toque I2C PDF](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Grove-I2C_Color_sensor_v1.2.pdf)
- [Como detectar toque de dedo?](/pt-br/How_to_detect_finger_touch)
- [Folha de Dados do Sensor de Toque I2C](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Freescale_Semiconductor;MPR121QR2.pdf)
- [Arquivo CDC do Codecraft](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Grove_I2C_Touch_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Touch_Sensor -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
