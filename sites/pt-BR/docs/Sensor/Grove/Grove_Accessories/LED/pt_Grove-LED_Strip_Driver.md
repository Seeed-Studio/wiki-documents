---
description: Grove - Driver para Fita de LED
title: Grove - Driver para Fita de LED
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-LED_Strip_Driver
sku: 105020002
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-LED_Strip_Driver/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg" alt="pir" width={600} height="auto" /></p>

O Driver para Fita de LED com interface Grove de 4 pinos fornece conectividade fácil ao seu dispositivo Arduino padrão ou Seeed Stalker. Ele pode ajudar você a controlar a luminância de uma fita de LED de cor única, bem como a cor e a luminância de uma fita de LED RGB por meio de um Arduino ou Seeeduino.

Ele possui 2 terminais e 2 interfaces Grove. A alimentação para a fita de LED entra através do terminal de 2 pinos. E as tensões de controle dos LEDs saem através do terminal de 4 pinos. As 2 interfaces Grove são, respectivamente, serigrafadas como “IN” (para entrada de dados de controle) e “OUT” (para dados de controle compartilhados com o próximo driver de fita).

Ele pode acionar uma fita de LED de 1 a 2 metros de comprimento com 9 V, enquanto de 1 a 5 metros de comprimento com 12 V. O driver em conjunto com as fitas de LED coloridas pode adicionar um efeito maravilhoso para usos internos ou externos.

*   Grove - LED Strip Driver V1.1：
 1. SI5904 é usado para conversão de nível.
 2. 78M05 é um regulador de tensão, a tensão de saída é 5V.

*   Grove - LED Strip Driver V1.2:

 1. substituir SI5904 por dois 2N7002.
 2. O encapsulamento dos capacitores de 100nF é 0603, não 0402.
 3. Resistores discretos de 3,3K mudam para exclusão.

:::note
    O clock/dados de IO requer nível lógico de 5V.
:::
<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html)
##   Especificações
---
<table >
<tr>
<td width="150"> **Fonte de alimentação**</td>
<td width="150"> **Fita de LED**</td>
<td width="100"> **Cor do LED**</td>
<td width="100"> **Comprimento(m)**</td>
<td width="150"> **Corrente máxima(mA)**</td>
</tr>
<tr>
<td rowspan="5"> 12V/5A</td>
<td rowspan="5"> Fita de LED RGB</td>
<td rowspan="5"> Branco</td>
<td> 1</td>
<td> 1032</td>
</tr>
<tr>
<td> 2</td>
<td> 1822</td>
</tr>
<tr>
<td> 3</td>
<td> 2430</td>
</tr>
<tr>
<td> 4</td>
<td> 2800</td>
</tr>
<tr>
<td> 5</td>
<td> 3000</td>
</tr>
<tr>
<td rowspan="2"> 9V/1A</td>
<td rowspan="2"> Fita de LED RGB</td>
<td rowspan="2"> Branco</td>
<td> 1</td>
<td> 365</td>
</tr>
<tr>
<td> 2</td>
<td> 627</td>
</tr>
</table>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg" alt="pir" width={600} height="auto" /></p>

 **Fonte de alimentação de 12V** – Terminal de parafuso para fonte de alimentação de 9~12V.

 **Entrada em cascata** – Conectada ao Grove - Base Shield] ou à saída em cascata de outro driver. Definição dos pinos: **CLK DIN NC GND**.

 **Saída em cascata** – Conectada à entrada em cascata de outro driver. Definição dos pinos: **CLK DOUT NC GND**

 **Interface da fita de LED** – Terminais de parafuso para a fita de LED. Definição dos pinos: **+ B R G**

**Nota**: O VCC do Arduino/Seeeduino não está conectado à interface Grove.

##   Demonstração
---
###   Instalação de hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg" alt="pir" width={600} height="auto" /></p>

1.Conecte o soquete Grove marcado como "IN" no Driver para Fita de LED e a porta digital 2 no Base Shield com um cabo Grove.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg" alt="pir" width={600} height="auto" /></p>

2.Conecte a fita de LED ao terminal de 4 pinos do Grove - LED Strip Driver. Certifique-se de que o fio marcado **"+12v"** da fita de LED entre no conector marcado com **"+"** do terminal, e **"B"** em **"B"**, **"R"** em **"R"** e **"G"** em **"G"**. A maioria das fitas de LED que estamos vendendo tem 4 fios, como na imagem acima, exceto a [White LED Flexi-Strip - 60 LED - 1m](https://www.seeedstudio.com/depot/white-led-flexistrip-60-led1m-p-1122.html?cPath=207). Se este é o tipo que você vai usar, as etapas de conexão podem ser um pouco diferentes. Ainda conecte o fio marcado **"+12V"** ao conector marcado **"+"**, mas o outro fio pode ir para qualquer conector de **"B"**, **"R"** e **"G"**. E execute o código de demonstração chamado **"DemoForWhiteLEDStrip"** nas etapas de software a seguir.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg" alt="pir" width={600} height="auto" /></p>

3.Conecte os fios de alimentação de 12V CC ou 9V CC ao terminal de 2 pinos.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg" alt="pir" width={600} height="auto" /></p>

4.Nos casos em que você quiser utilizar o recurso de cascata, prepare primeiro outro driver e fita. Em seguida, use um cabo Grove para conectar o soquete Grove marcado como "out" na primeira placa e o soquete Grove marcado como "IN" na segunda placa. Pronto. As duas fitas brilharão em sincronia agora.

###   Programação de software

1.Baixe [a Biblioteca do LED Strip Driver](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip). Descompacte e importe-a para as bibliotecas do Arduino-1.0: ..\arduino-1.0\libraries.

2.Envie o código de demonstração SingleLEDStrip se você usar apenas um único driver.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

3.No caso de duas fitas de LED, envie em vez disso o código de demonstração DualLEDStrip.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

# Arquivos eagle do LED Strip driver V1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Arquivos eagle do LED Strip driver V1.2
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Recursos
---
*   [Arquivos eagle do LED Strip driver V1.1](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip)

*   [Arquivos eagle do LED Strip driver V1.2](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip)

*   [Esquemático V1.1 em PDF](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver.pdf)

*   [Esquemático V1.2 em PDF](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/Grove-LED_Strip_driver_V1.2.pdf)

*   [P9813 Datasheet](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/P9813_datasheet.pdf)

*   [N-MOSFET DMN3016LK3 Datasheet](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/N-MOSFET_DMN3016LK3_Datasheet.pdf)

*   [Biblioteca LED Strip Driver](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip)

*   [Biblioteca Suli](https://github.com/Seeed-Studio/LED_Strip_Suli)

## Suporte Técnico & Discussão sobre o Produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
