---
description: Grove - Acelerômetro&Giroscópio de 6 Eixos
title: Grove - Acelerômetro&Giroscópio de 6 Eixos
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-6-Axis_AccelerometerAndGyroscope
sku: 105020012
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-6-Axis_AccelerometerAndGyroscope/
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Acelerômetro&Giroscópio de 6 Eixos é um sensor integrado e econômico com interface Grove que combina um acelerômetro digital de 3 eixos e um giroscópio digital de 3 eixos.

Com um chip digital LSM6DS3([datasheet](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)) de baixíssimo consumo de energia e regulador de alimentação interno, ele oferece alta sensibilidade, tecnologia verde e baixa interferência de ruído. Pode ser configurado para diferentes níveis de sensibilidade de aceleração e diferentes faixas de medição de taxa angular. Fornecido com SDK detalhado, pode tornar o processo de prototipagem mais rápido e fácil.

Este produto pode ser usado em diferentes aplicações para detecção de inclinação, movimento e toque, como robótica, dispositivos de IoT e dispositivos eletrônicos de consumo.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Gyroscope-p-2606.html)

Recursos
--------

-   Interface Grove e baixo custo.
-   Saída digital para dados de movimento de 6 DOF.
-   Faixa de sensoriamento de aceleração linear em escala total de ±2/±4/±8/±16 g para vários ambientes.
-   Faixa de medição de taxa angular de ±125, ±245, ±500, ±1000, ±2000 graus por segundo (dps), o que o torna versátil.
-   SDK detalhado para programação mais fácil.
-   Fonte de alimentação regulada para coleta de dados confiáveis.
-   Interrupções programadas para diferentes eventos.
-   Buffer de dados de 8 kB.

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Ideias de aplicação
-----------------

-   Robótica
-   Aeronaves de nível de consumo
-   Dispositivos de entrada de computador
-   Dispositivos vestíveis.
-   Dispositivos de IoT

Especificações
--------------

Para informações detalhadas, consulte o [datasheet](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf).

| Parâmetro                            | Valor                                                                                |
|---------------------------------------|--------------------------------------------------------------------------------------|
| Tensão de alimentação analógica:      | 5V/3.3V(DC)                                                                          |
| Consumo de energia:                   | 0.9 mA em modo normal combinado e 1.25 mA em modo combinado de alto desempenho até 1.6 kHz |
| Faixa de medição de aceleração linear | ±2/±4/±8/±16 g em escala total (valor típico)                                        |
| Faixa de medição de taxa angular      | ±125, ±245, ±500, ±1000, ±2000 dps (valor típico)                                    |
| Sensibilidade de aceleração linear    | 0.061(FS = ±2), 0.122(FS = ±4), 0.244(FS = ±8), 0.488(FS = ±16) mg/LSB               |
| Sensibilidade de taxa angular         | 4.375(FS = ±125), 8.75(FS = ±245), 17.50(FS = ±500), 35(FS = ±1000), 70(FS = ±2000)  |

### Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::
Visão geral do hardware
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

**Porta Grove**   
Conecte a placa de controle principal, como a placa Seeeduino, à placa de acionamento.

**LSM6DS3**   
MCU principal.

### **Lista de peças**

| Nome da peça                          | Quantidade |
|----------------------------------------|------------|
| Grove - 6-Axis Accelerometer&Gyroscope | 1PC        |
| Cabo Grove                            | 1PC        |

Primeiros passos
-----------

### **Material necessário**

-   Seeeduino * 1

-   Grove - Base Shield v2

### **Preparações**

Consulte os seguintes guias para criar uma IDE apropriada:

<div class="admonition note">
<p class="admonition-title">Note</p>
Escolhemos o Seeeduino e ele é compatível com Arduino neste caso. Você também pode usar uma placa Arduino em seu lugar.
</div>

- Getting Started on Windows

- Getting Started on Mac OS X

### **Conexões de hardware**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

<div classname="admonition note">
  <p classname="admonition-title">Note</p>
  Conecte o Grove - 6-Axis Accelerometer&amp;Gyroscope à interface I<sup>2</sup>C no Grove - Base shield. Conecte a fonte de alimentação com o cabo USB.
</div>




### **Uma pequena demonstração**

Baixe a [biblioteca](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3) para o Grove - 6-Axis Accelerometer&Gyroscope. Consulte o guia para usar demos baixadas do Github da Seeed para gravar seu código mais rapidamente na placa controladora principal. Existem três exemplos de demonstração no total no subdiretório ***examples***.


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



# Recursos
---------

- **[Eagle]** [Arquivo Eagle Grove - 6-Axis Accelerometer&Gyroscopev 1.0](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip)
-  **[Library]** [Grove-6-Axis_AccelerometerAndGyroscope](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3)
-  **[Datasheet]** [Datasheet do LSM6DS3](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)

## Projeto

**Plug 'n Play Remote Control Sailboat**

<iframe frameBorder="{0}" height="327.5" scrolling="no" src="https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed" width="{350}">
</iframe>



<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer&Gyroscope -->

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
