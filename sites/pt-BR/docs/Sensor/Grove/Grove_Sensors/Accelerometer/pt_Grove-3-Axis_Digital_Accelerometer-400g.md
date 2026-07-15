---
description: Grove - Acelerômetro Digital de 3 Eixos (±400g)
title: Grove - Acelerômetro Digital de 3 Eixos (±400g)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Accelerometer-400g
sku: 101020071
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer-400g/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg" alt="pir" width={600} height="auto" /></p>


O H3LIS331DL é um acelerômetro linear de 3 eixos, de baixo consumo e alto desempenho, pertencente à família “nano”, com saída padrão de interface serial digital I2C. O dispositivo possui modos de operação de consumo ultrabaixo que permitem avançadas funções de economia de energia e de despertar inteligente do modo de espera. O H3LIS331DL possui faixas completas dinamicamente selecionáveis pelo usuário de ±100g/±200 g/±400 g e é capaz de medir acelerações com taxas de dados de saída de 0,5 Hz a 1 kHz.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B1400g)-p-1897.html)

Características
--------

-   Ampla faixa de tensão de alimentação de CC 3,3 V a 5 V
-   Formato Grove
-   Sensor de 3 eixos
-   Invólucro pequeno e de baixo perfil: 3×3×1mm TFLGA
-   Baixo consumo, 300µA a 3,3 V (típico)
-   Faixa completa dinamicamente selecionável de ±100g /±200 g /±400 g
-   Interface de saída digital I2C
-   Alta resistência a choques de 10000 g
-   ECOPACK® compatível com RoHS e “Green”

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Ideias de Aplicação
-----------------

-   Detector de impacto
-   Reconhecimento e registro de impactos
-   Detecção de concussão

Plataformas Suportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Uso
-----

A seguir mostramos como ler os dados brutos deste acelerômetro.

1. Conecte-o à porta I2C do seu [Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134).
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg" alt="pir" width={600} height="auto" /></p>


2. Baixe a [biblioteca Digital Accelerometer(±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL) e descompacte-a em arduino-1.0\\libraries na pasta de instalação do Arduino.

3. Abra o código de demonstração diretamente pelo caminho: File -> Example ->Grove_3Axis_Digital_Accelerometer_H3LIS331DL->H3LIS331DL_AdjVal. É um sketch para ajustar os dados brutos do H3LIS331DL para torná-los mais precisos.

4. Envie o código e abra o monitor serial.

5. Abra o monitor serial para obter o valor de referência ajustado conforme os passos descritos na saída serial.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>


6. Abra o código de demonstração diretamente pelo caminho: File -> Example ->Grove_3Axis_Digital_Accelerometer_H3LIS331DL->H3LIS331DL_Demo. Em seguida, modifique VAL_X_AXIS/VAL_Y_AXIS/VAL_Z_AXIS de acordo com o que você obteve do sketch H3LIS331DL_AdjVal.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>


7. Envie o código, abra o monitor serial e abra o monitor serial novamente para verificar o resultado.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg" alt="pir" width={600} height="auto" /></p>


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
---------

-   [Arquivo Eagle do Grove - 3-Axis Digital Accelerometer(±400g)](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip)
-   [repositório no GitHub para o 3-Axis Digital Accelerometer(±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)
-   [H3LIS331DL Datasheet PDF](http://www.st.com/web/en/resource/technical/document/datasheet/DM00053090.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±400g) -->

## Suporte Técnico e Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
