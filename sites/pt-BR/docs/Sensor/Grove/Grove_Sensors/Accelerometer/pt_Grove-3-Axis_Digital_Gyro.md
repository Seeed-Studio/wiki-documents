---
description: Grove - Giroscópio Digital de 3 Eixos
title: Grove - Giroscópio Digital de 3 Eixos
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Gyro
sku: 101020050
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Gyro/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg" alt="pir" width={600} height="auto" /></p>


O módulo Grove - 3-Axis Digital Gyro é baseado no ITG 3200. Ele é o primeiro giroscópio de processamento de movimento MEMS de 3 eixos, com saída digital e chip único do mundo, otimizado para jogos, mouses 3D e aplicações de controle remoto baseadas em movimento para TVs Digitais conectadas à Internet e Set Top Boxes. O ITG-3200 apresenta três conversores analógico‑digitais (ADCs) de 16 bits para digitalizar as saídas do giroscópio, uma largura de banda do filtro passa‑baixa interno selecionável pelo usuário e uma interface I2C Fast‑Mode (400 kHz).

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)

Características
--------

-   Tensão de alimentação: 3,3 V, 5 V
-   Corrente de operação: 6,5 mA
-   Corrente em standby: 5 μA
-   Sensibilidade: 14 LSBs por °/s
-   Faixa de escala total: ±2000°/s
-   Aceleração: 10.000 g por 0,3 ms
-   Interface I2C
-   Faixa de escala total de ±2000°/s e sensibilidade de 14,375 LSBs por °/s
-   Três ADCs integrados de 16 bits
-   Sensor de temperatura integrado no chip
-   Amplificadores integrados e filtros passa‑baixa
-   Hermeticamente selado para resistência a temperatura e umidade
-   Compatível com RoHS e Green

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Plataformas Compatíveis
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, nós fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários terão que escrever sua própria biblioteca de software.
:::
Demonstração
-------------

Esta demonstração mostrará como obter dados deste giroscópio digital; os dados estão na unidade de rad/s.

Aqui precisamos de um Grove - 3-Axis Digital Gyro e de um Seeeduino V3.0.

### Instalação de Hardware

A instalação de hardware é muito fácil, porque há um Grove I2C no Seeeduino,

Então, o que precisamos fazer é conectá-lo ao Grove I2C por meio de um cabo Grove.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG" alt="pir" width={600} height="auto" /></p>


### Baixar Código e Fazer Upload

Você pode baixar a biblioteca no GitHub, clique [aqui](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro/), depois extraia‑a para a pasta libraries do Arduino.

Em seguida, abra File -> examples -> Grove_3_Digital_Gyro -> ITG3200_gyro para abrir o código de demonstração.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg" alt="pir" width={600} height="auto" /></p>


<!-- Click Upload to upload the code, if you have any problem about how to start Arduino, please click [here](/pt-br/Getting_Started_with_Seeeduino) for some help. -->



### Verificar o resultado

Agora você pode abrir o monitor serial para verificar o resultado.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg" alt="pir" width={600} height="auto" /></p>

Referência
---------

O diagrama abaixo mostra as orientações dos 3 eixos. Você pode usá‑lo para entender os significados físicos do resultado.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg" alt="pir" width={600} height="auto" /></p>


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Recursos
---------

-   [Datasheet do ITG-3200.](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/ITG-3200.pdf)
-   [Arquivo Eagle do Grove - 3-Axis Digital Gyro](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip)
-   [Biblioteca Digital Gyro](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Gyro -->

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
