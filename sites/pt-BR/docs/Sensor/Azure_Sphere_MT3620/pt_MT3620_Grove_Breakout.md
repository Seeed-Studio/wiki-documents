---
description: MT3620 Grove Breakout
title: MT3620 Grove Breakout
keywords:
  - Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /MT3620_Grove_Breakout
sku: 103100123, 110061008
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/MT3620_Grove_Breakout/
---


![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-front.jpg)

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-back.jpg)

[Azure Sphere MT3620 Development Kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) e [MT3620 Mini Dev Board](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html) são ambos habilitados pela tecnologia [Microsoft Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/); o MT3620 Grove Breakout é uma placa de expansão projetada para a nova MT3620 Mini Dev Board.
O MT3620 Grove Breakout permite que os usuários apliquem rapidamente módulos de sensores - [SeeedStudio Groves](https://www.seeedstudio.com/grove.html) - em aplicações de prototipagem rápida construídas com base na MT3620 Mini Dev Board.

Como o [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) ainda não oferece suporte a ADC no MT3620, este breakout funciona como uma interface entre a porta I2C do MT3620 e um ADC externo, o que fornece uma maneira de ler dados analógicos a partir da porta analógica. Além da porta analógica, este breakout possui portas UART, SPI, I2C e GPIO.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- ADC de 12 bits, interface serial compatível com I2C
- 8 conectores Grove
  - 2 x UART
  - 2 x I2C
  - 2 x Analógico
  - 2 x Digital (4 GPIO)

## Visão geral do hardware

**Interface**

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/103100123_hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> Extention Header 1:**
24 pinos; consulte o mapa de pinos da placa para obter a definição detalhada dos pinos.

- **<font face="" size="3" font color="ff0000">②</font> Analógico:**
2 portas Grove analógicas; a tensão do sinal de entrada deve ser menor que 3,3 V.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/Analog.png)

- **<font face="" size="3" font color="ff0000">③</font> I2C:**
2 portas Grove I2C; a porta I2C compartilha os mesmos pinos com UART1, portanto você só pode escolher I2C ou UART1 por vez.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C.png)

- **<font face="" size="3" font color="ff0000">④</font> UART:**
2 portas Grove UART; a porta I2C compartilha os mesmos pinos com UART1, portanto você só pode escolher I2C ou UART1 por vez. A porta SPI0 compartilha os mesmos pinos com UART0, portanto você só pode escolher SPI0 ou UART0 por vez.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/UART.png)

- **<font face="" size="3" font color="ff0000">⑤</font> Digital:**
4 portas GPIO digitais; a tensão de operação é 3,3 V.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/GPIO.png)

- **<font face="" size="3" font color="ff0000">⑥</font> Extention Header 2:**
É uma duplicação do Extention Header 1. Você pode soldar fios no conector. Há 2 pinos que não estão conectados ao Extention Header 1. O pino 1 de J5 é conectado diretamente a 3,3 V e o pino 6 de J5 não é conectado.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/extention_header_1.png)

- **<font face="" size="3" font color="ff0000">⑦</font> SPI:** A porta SPI0 compartilha os mesmos pinos com UART0, portanto você só pode escolher SPI0 ou UART0 por vez.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/SPI.png)

- **<font face="" size="3" font color="ff0000">⑧</font> AD7992BRMZ-1:** A MT3620 Mini Dev Board suporta funções SPI, UART, I2C e digitais, mas não suporta a função ADC. Portanto, o MT3620 Grove Breakout inclui o chip [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf), que é um ADC de 12 bits, de baixo consumo, com aproximações sucessivas e interface compatível com I2C. Em seguida, ele é conectado à interface I2C da MT3620 Mini Dev Board.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C_ADC.png)

- **<font face="" size="3" font color="ff0000">⑨</font> Seleção de endereço I2C:**
É uma entrada lógica. Entrada de seleção de endereço que seleciona um de três endereços I2C para o AD7992. Se estiver conectada ao GND, o endereço I2C é 0x23. Se estiver conectada a 3,3 V, o endereço I2C é 0x24.

**Mapa de pinos da placa**

<a href="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png"/></a>

**Dimensões da placa**

C: 57 mm L: 52 mm A: 10 mm

## Aplicações

- Residencial/Construções/Instalações
- Automação
- Segurança
- Gerenciamento de equipamentos
- Serviços públicos
- Segurança pública

:::tip
Para entender como o Azure Sphere funciona em um cenário do mundo real, considere o [cenário da Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Instalar o Azure Sphere

Se você tiver uma MT3620 Mini Dev Board que ainda não foi usada, conclua primeiro [estas etapas](https://docs.microsoft.com/en-us/azure-sphere/install/overview) para começar a utilizá-la.

## Demos da MT3620 Mini Dev Board

Construímos três demonstrações que combinam a MT3620 Mini Dev Board e o [Seeed Grove system](https://wiki.seeedstudio.com/pt-br/Grove_System/).

**Demo nº 1**: a MT3620 Mini Dev Board funciona como um MCU, conectada ao Grove-Button e ao adaptador USB para TTL. Em seguida, você conecta a MT3620 Mini Dev Board e o adaptador USB para TTL às portas USB do PC. Depois de fazer o download do código, pressione o Grove-Button e insira "Hello World!" a partir do adaptador USB para TTL; você receberá "Hello World!" na janela Output do Visual Studio.  

**Demo nº 2**: a MT3620 Mini Dev Board funciona como um MCU, conectada ao Grove-Light Sensor e ao Grove-Rotary Sensor via USB. Em seguida, você conecta a MT3620 Mini Dev Board às portas USB do PC. Depois de fazer o download do código, ao mover a mão sobre o Grove-Light Sensor ou girar o Grove-Rotary Sensor, você poderá ver as saídas analógicas de ambos os sensores na janela Output do Visual Studio.  

**Demo nº 3**: a MT3620 Mini Dev Board funciona como um MCU, conectada ao Grove - OLED Display 1.12". Em seguida, você conecta a MT3620 Mini Dev Board às portas USB do PC. Depois de fazer o download do código, você pressiona o Grove-Button e insere "Hello World!" a partir do adaptador USB para TTL; você receberá "Hello World!" na janela Output do Visual Studio.

### Demo nº 1 Digital e UART

**Lista de peças**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove - Button |USB To Uart 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[Adquira agora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Adquira agora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Adquira agora](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**Conexão de hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

:::caution
Certifique-se de encaixar a MT3620 Mini Dev Board no MT3620 Grove Breakout da maneira correta. Há a serigrafia "USB" no MT3620 Grove Breakout; certifique-se de que ela esteja no mesmo lado da porta USB da MT3620 Mini Dev Board.
:::

- Passo 1. Conecte o Grove-Button ao D1 do MT3620 Grove Breakout.
- Passo 2. Conecte o adaptador USB To Uart à UART0 do MT3620 Grove Breakout por meio do [Grove-Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html).
- Passo 3. Conecte o MT3620 Grove Breakout à MT3620 Mini Dev Board.
- Passo 4. Conecte a MT3620 Mini Dev Board e o adaptador USB para TTL às portas USB do PC.

:::caution
Certifique-se de que a chave de tensão no adaptador USB para TTL esteja ajustada para **5 V**. Conecte o RX do adaptador USB para TTL ao TX do MT3620 Grove Breakout, o TX do adaptador USB para TTL ao RX do MT3620 Grove Breakout e o GND também. Não conecte o 5V.
:::

**Software**

- Passo 1. Baixe o [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Passo 2. Abra **Samples\UART0** em Azure_Sphere_Demo
- Passo 3. Clique duas vezes em **UART0.sln**
- Passo 4. Clique com o botão direito no nome do projeto do seu aplicativo e selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **UART0**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. No projeto do aplicativo, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **UART0** e clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1+Beta1902** se você usar o **Visual Studio Community version**; pule esta etapa se usar a versão Enterprise.
- Passo 8. Clique em **Remote GDB Debugger**.
- Passo 9. Abra a ferramenta de monitoramento da porta COM e selecione a porta serial do adaptador USB para TTL.
- Passo 10. Pressione o Grove-Button e envie "Hello World!" pela ferramenta de monitoramento COM.
- Passo 11. Você verá a mensagem abaixo na janela Output do Visual Studio.

```
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
```

### Demo nº 2 Analógico

**Lista de peças**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-Light Sensor |Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[Adquira agora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Adquira agora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**Conexão de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

:::caution
Certifique-se de conectar a MT3620 Mini Dev Board ao MT3620 Grove Breakout da maneira correta. Há uma serigrafia USB no MT3620 Grove Breakout e certifique-se de que ela fique do mesmo lado da porta USB da MT3620 Mini Dev Board.
:::

- Passo 1. Conecte o Grove-Rotary Angle Sensor ao A0 do MT3620 Grove Breakout.
- Passo 2. Conecte o Grove-Light Sensor ao A1 do MT3620 Grove Breakout.
- Passo 3. Conecte o MT3620 Grove Breakout à MT3620 Mini Dev Board.
- Passo 4. Conecte a MT3620 Mini Dev Board à porta USB do PC.

**Software**

- Passo 1. Baixe o [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Passo 2. Abra o **Samples\AD7991_I2C** em Azure_Sphere_Demo
- Passo 3. Clique duas vezes em **AD7991_I2C.sln**
- Passo 4. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **AD7991_I2C**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. Vá para o projeto do aplicativo, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **AD7991_I2C** e clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1+Beta1902** se você usar a **Visual Studio Community version** e, por favor, pule esta etapa se você usar a versão Enterprise.
- Passo 8. Clique em **Remote GDB Debugger**, mova sua mão sobre o Grove-Light Sensor ou gire o Grove-Rotary Angle Sensor; você poderá ver as saídas analógicas de ambos os sensores na janela Output do Visual Studio.  

```

A0: 192 A1: 2646
A0: 162 A1: 2644
A0: 1489 A1: 2647
A0: 621 A1: 2644
A0: 227 A1: 2648
A0: 33 A1: 2644
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2644
A0: 373 A1: 2643
A0: 885 A1: 2646
A0: 1717 A1: 2647
A0: 2057 A1: 2647
```

### Demo#3 I2C

**Lista de Peças**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-OLED Display 1.12'' V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg)|
|[Adquira agora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Adquira agora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Adquira agora](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**Conexão de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

:::caution
Certifique-se de conectar a MT3620 Mini Dev Board ao MT3620 Grove Breakout da maneira correta. Há uma serigrafia USB no MT3620 Grove Breakout e certifique-se de que ela fique do mesmo lado da porta USB da MT3620 Mini Dev Board.
:::

- Passo 1. Conecte o Grove-OLED Display 1.12'' V2 ao I2C do MT3620 Grove Breakout.
- Passo 2. Conecte o MT3620 Grove Breakout à MT3620 Mini Dev Board.
- Passo 3. Conecte a MT3620 Mini Dev Board à porta USB do PC.

**Software**

- Passo 1. Baixe o [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Passo 2. Abra o **Samples\SeeedOLED_I2C** em Azure_Sphere_Demo
- Passo 3. Clique duas vezes em **SeeedOLED_I2C.sln**
- Passo 4. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **SeeedOLED_I2C**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. Vá para o projeto do aplicativo, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **SeeedOLED_I2C** e clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1+Beta1902** se você usar a **Visual Studio Community version** e, por favor, pule esta etapa se você usar a versão Enterprise.
- Passo 8. Clique em **Remote GDB Debugger**, você verá as informações exibidas no OLED.

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Product]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Library]** [Azure Sphere Demo Library](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[Eagle]** [Esquemático do MT3620 Grove Breakout](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip)
- **[PDF]** [Esquemático do MT3620 Grove Breakout](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.pdf)
- **[DataSheet]** [WF-M620 RSC1 datasheet](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[DataSheet]** [AD7992 datasheet](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/AD7992.pdf)

## Suporte Técnico & Discussão de Produto


Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
