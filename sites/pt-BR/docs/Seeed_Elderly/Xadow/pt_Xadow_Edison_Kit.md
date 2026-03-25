---
description: Kit Xadow - Edison
title: Kit Xadow - Edison
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Edison_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Edison_Kit/
---
![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/110040001%201.jpg)

O Kit Xadow - Edison é baseado no Intel® Edison, que foi projetado para reduzir as barreiras de entrada para qualquer pessoa que faça protótipos e produza produtos de computação vestível e IoT. Ele apresenta alto desempenho e baixo consumo de energia, o que torna seu projeto pequeno e portátil, especialmente adequado para projetos vestíveis. O Kit Xadow - Edison inclui uma placa principal Xadow - Edison que contém duas interfaces compatíveis com Xadow, uma interface SD, uma interface de Programador e uma interface de Bateria, um Programador Xadow - Edison e Xadow - Edison SD. Com o Xadow - Edison você poderá usar muitos módulos Xadow por meio da interface Xadow padrão.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Edison-Kit-p-2444.html)

## Recurso
---
- Projetado para Intel® Edison.
- Fonte de alimentação USB (4,75~5,25V).
- Interfaces compatíveis com Xadow.
- Conector para cartão SD.
- Ponte USB para UART do dispositivo com conector USB micro Tipo-B.
- USB OTG com conector USB Micro Tipo-AB.
- Carregador de bateria.
- Entrada de botão de energia/repouso/recuperação de firmware

## Especificação
---
- Fonte de alimentação USB: 4,75V ~ 5,25V
- 2 interfaces Xadow padrão
- 1 conector para cartão SD.
- 1 conector USB micro Tipo-B
- 1 conector USB Micro Tipo-AB
- 1 interface de bateria
- 1 botão para Energia/repouso; 1 botão para recuperação de firmware
- Dimensões 30,0 × 40,0 × 7,0 mm
- Temperatura de operação de 32 a 104°F (0 a 40°C)


## Diagrama de Blocos
---
Usando cabos FFC fazendo as seguintes conexões:

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Connection.png)

:::note
    Ao conectar outros módulos Xadow ao Xadow - Edison, você deve se preocupar com a direção da conexão. O método de conexão é que o canto não preenchido de um módulo Xadow precisa se conectar ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
## Instalando o Edison Arduino IDE
---

Consulte o site oficial do Intel Edison: Guia de Introdução Edison [Getting Started Guide](https://software.intel.com/en-us/get-started-edison-windows)

1. Baixe o Edison Arduino IDE. (Observação: selecione seu sistema operacional.)

2. Navegue até a pasta onde você baixou o .zip do Edison Arduino IDE

3. Clique com o botão direito no arquivo .7z, destaque “7-zip” e selecione “Extract to “arduino-…””

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_Extract_7z.png)

4. Clique na pasta que foi criada até você ver o arquivo do IDE “arduino.exe”. Clique duas vezes neste arquivo e esta janela deverá ser aberta.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_ArduinoIDE.png)

## Instale os drivers necessários
---
1. Baixe os [drivers FTDI](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/CDM%20v2.10.00%20WHQL%20Certified.exe).
2. Clique com o botão direito no arquivo .exe que você baixou, que deve se chamar “CDM…” e selecione “Run as administrator”.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver.jpg)

3. Clique em “Extract”.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install.jpg)

4. Clique em “Next”.
5. Clique em “Finish” quando você vir esta tela.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install_ok.jpg)

6. Baixe os [Drivers Intel Edison](https://downloadcenter.intel.com/product/83267) para instalar os drivers RNDIS, CDC e DFU necessários.
7. Clique duas vezes no arquivo .exe para iniciar a instalação.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Intel_Edison_Driver.jpg)

## Exemplo
---
1. Abra o site: [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos) para baixar todo o projeto.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Github_Xadow_Edison_Demos.png)

2. Clique em Tools > Serial Port e selecione a porta COM # à qual o Intel Edison está conectado

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Import_Indoor_Kit_Demo.png)

3. Clique em Sketch>Import Library…>Add Library e importe a biblioteca baixada na etapa 1

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Add_Library.png)

4. Clique em File > Examples > Xadow_Edison_Demos > Edison_Pedometer_with_OLED e selecione o demo

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Select_Pedometer_Demo.png)

5. Usando cabos FFC fazendo as seguintes conexões:

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Pedometer.jpg)

6. Clique no ícone de upload.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_upload.png)


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recurso
---
- [Edison Getting Started Guide](https://software.intel.com/en-us/get-started-edison-windows)
- [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos)
- [Xadow-Edison_sch_v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_sch_v1.0.pdf)
- [Xadow - Edison Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_v1.0_sch%26pcb.zip)
- [Xadow - Edision Programmer sch v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_sch_v1.0.pdf)
- [Xadow - Edision Programmer Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip)
- [Xadow - Edison_SD_sch_v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_sch_v1.0.pdf)
- [Xadow - Edison_SD Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_v1.0_sch%26pcb.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
