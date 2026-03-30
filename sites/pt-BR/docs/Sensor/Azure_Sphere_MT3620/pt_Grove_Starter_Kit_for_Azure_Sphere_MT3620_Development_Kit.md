---
description: Kit Inicial Grove para Azure Sphere MT3620 Development Kit
title: Kit Inicial Grove para Azure Sphere MT3620 Development Kit
keywords:
  - Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit
sku: 110060947, 103990343
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit.jpg)

Este produto é um kit inicial básico para o [Azure Sphere MT3620 Development kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html). O kit integra o módulo pronto para uso mais popular da SeeedStudio – [Grove](https://www.seeedstudio.com/grove.html), com o objetivo de ajudar desenvolvedores a começar rapidamente e experimentar as soluções Azure Sphere.

Microsoft Azure Sphere é uma solução para criar dispositivos conectados com MCU e altamente seguros. Azure Sphere reúne o melhor da experiência da Microsoft em nuvem, software e silício — resultando em uma abordagem exclusiva de segurança que começa no silício e se estende até a nuvem. Juntos, os MCUs certificados Azure Sphere, o Azure Sphere OS e o Azure Sphere Security Service fornecem a você a confiança e o poder para reinventar seu negócio e criar o futuro.

:::caution
Observe que o Azure Sphere MT3620 Development kit é necessário, mas não está incluído neste kit inicial. Você pode comprá-lo [aqui](https://www.seeedstudio.com/s/Azure%20Sphere%20MT3620.html).
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Starter-Kit-for-Azure-Sphere-MT3620-Development-Kit-p-3150.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Recursos

- Azure Sphere: segurança de ponta a ponta para dispositivos IoT
- Ambiente de desenvolvimento Microsoft Visual Studio
- Autenticação on-line e atualizações durante todo o ciclo de vida do dispositivo

## Visão Geral de Hardware

**MT3620 Grove Shield**

Como o [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) ainda não oferece suporte a ADC e I2C no MT3620, este shield serve como uma interface entre a porta UART do MT3620 e dispositivos I2C externos, como o sensor de temperatura I2C. A função básica do shield é ajudar a conectar um dispositivo externo I2C. Usando um chip ADC compatível com I2C, o desenvolvedor também pode ler dados analógicos a partir da porta analógica.

O [MT3620 Grove Shield](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) inclui 2 chips, AD7992 (Anlog para I2C) e SC18IM700 (I2C para UART) para habilitar a função de ADC e I2C pelo lado do hardware. Assim, o sinal dos sensores analógicos passa pelo AD7992 e depois pelo SC18IM700 até a UART da placa de desenvolvimento. Os sensores I2C também passam pelo SC18IM700 até a UART da placa de desenvolvimento.

O [AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) é um ADC de 12 bits, baixo consumo de energia e aproximações sucessivas com uma interface compatível com I2C. Ele transforma o sinal analógico A0, A1 em dados I2C.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

O [SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) foi projetado para servir como uma interface entre a porta UART padrão de um microcontrolador ou microprocessador e o barramento serial I2C; isso permite que o microcontrolador ou microprocessador se comunique diretamente com outros dispositivos de barramento I2C. Ele transforma os sinais SDA/SCL em GPIO26_TXD0 e GPIO28_RXD0.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>Visão geral de hardware do MT3620 Grove Shield</div>

**Lista de Peças**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-xldj{border-color:inherit;:left}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <th class="tg-xldj">Categoria</th>
    <th class="tg-xldj">Módulo</th>
    <th class="tg-0pky">Descrição</th>
  </tr>
  <tr>
    <td class="tg-xldj">Shield</td>
    <td class="tg-xldj">MT3620 Grove shield</td>
    <td class="tg-0pky">Oferece 1 x UART, 2 x I2C, 1 x Analógico, 4 x GPIO</td>
  </tr>
  <tr>
    <td class="tg-xldj" rowspan="2">Entrada Analógica</td>
    <td class="tg-xldj">Grove - Rotary Angle Sensor</td>
    <td class="tg-0pky">Produz um valor analógico, que pode ser lido pelo ADC.</td>
  </tr>
  <tr>
    <td class="tg-xldj">Grove - Light Sensor v1.2</td>
    <td class="tg-0pky">Medição de níveis de luz</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">Saída Digital</td>
    <td class="tg-0pky">Grove – Buzzer</td>
    <td class="tg-0pky">Acionado por um sinal digital e emite um tom</td>
  </tr>
  <tr>
    <td class="tg-0pky">Grove - Relay</td>
    <td class="tg-0pky">Acionado por um sinal digital e comuta tensões muito mais altas</td>
  </tr>
  <tr>
    <td class="tg-0pky">E/S Digital</td>
    <td class="tg-0pky">Grove - Blue LED Button</td>
    <td class="tg-0pky">O botão atua como uma entrada, o LED como um dispositivo de saída</td>
  </tr>
  <tr>
    <td class="tg-0pky">Sensor</td>
    <td class="tg-0pky">Grove - Temp&amp;Humi Sensor(SHT31)</td>
    <td class="tg-0pky">Coleta temperatura e pode ser lido via interface I2C</td>
  </tr>
  <tr>
    <td class="tg-0pky">Display</td>
    <td class="tg-0pky">Grove - OLED Display 1.12'' V2</td>
    <td class="tg-0pky">O OLED pode exibir caracteres e imagens</td>
  </tr>
</table>

## Ideias de Aplicações

- Residências/Prédios/Instalações
- Automação
- Segurança
- Gerenciamento de Equipamentos
- Serviços Públicos
- Segurança Pública

:::tip
Para entender como o Azure Sphere funciona em um ambiente do mundo real, considere o [cenário da Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Primeiros Passos

### Pré-requisitos

**Instalar Azure Sphere**

Se você tem um kit de desenvolvimento Azure Sphere que ainda não foi usado, conclua [estas etapas](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primeiro para começar a usá-lo.

**Biblioteca MT3620 Grove Shield**

Esta é a biblioteca para o MT3620 Grove Shield do Azure Sphere; o shield aprimora o Azure Sphere adicionando interface I2C e entrada analógica. Aqui está o [tourial](https://github.com/Seeed-Studio/MT3620_Grove_Shield/blob/master/README.md) sobre como usar a [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield).

### Entrada Analógica

Aqui está o exemplo de como ler sinal analógico através do MT3620 Base Shield.  

**Conexão de Hardware**

| MT3620 development kits | MT3620 Grove Shield |  Grove - Rotary Angle Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/rotation.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Adquira agora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Rotation_shield.jpg)

- Passo 1. Conecte o Grove - Rotary Angle Sensor à porta analógica do MT3620 Grove Shield.
- Passo 2. Conecte o MT3620 base shield à placa de desenvolvimento Azure Sphere MT3620.
- Passo 3. Conecte o cabo USB à placa de desenvolvimento Azure Sphere MT3620 e ao PC.

**Software**

- Passo 1. Baixe a [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- Passo 2. Abra o **Samples/GroveRotaryAngleSensor** em MT3620 Grove Shield
- Passo 3. Clique duas vezes em **GroveRotaryAngleSensor.sln**
- Passo 4. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **MT3620_Grove_Shield_Library**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. Vá até o projeto do aplicativo, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **MT3620_Grove_Shield_Library** e clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1** se você usar o **Visual Studio Community version** e, por favor, pule esta etapa se você usar a versão Enterprise.
- Passo 8. Clique em **Remote GDB Debugger**, então gire o sensor e você verá a saída como abaixo.

```
Remote debugging from host 192.168.35.1
Application starting
Angle Value 0.85
Angle Value 0.85
Angle Value 0.94
Angle Value 1.00
Angle Value 0.41
Angle Value 0.31
Angle Value 0.00
Angle Value 0.11
Angle Value 0.39
```

### Saída Digital

Aqui está o exemplo de como escrever sinal digital através do MT3620 Base Shield.  

**Conexão de Hardware**

| MT3620 development kits | MT3620 Grove Shield |  Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Adquira agora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer_shield.jpg)

- Passo 1. Conecte o Grove - Buzzer à porta GPIO do MT3620 Grove Shield.
- Passo 2. Conecte o MT3620 base shield na placa de desenvolvimento Azure Sphere MT3620.
- Passo 3. Conecte o cabo USB à placa de desenvolvimento Azure Sphere MT3620 e ao PC.

**Software**

- Passo 1. Baixe a [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- Passo 2. Abra o **Samples/Grove_Buzzer** em MT3620 Grove Shield
- Passo 3. Clique duas vezes em **Grove_Buzzer.sln**
- Passo 4. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **MT3620_Grove_Shield_Library**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. Vá para o projeto do aplicativo, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **MT3620_Grove_Shield_Library** e clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1** se você usar a **Visual Studio Community version** e, por favor, pule esta etapa se você usar a versão Enterprise.
- Passo 8. Clique em **Remote GDB Debugger**, você verá a saída como abaixo.

```
Remote debugging from host 192.168.35.1
Application starting
Relay on
Relay off
Relay on
Relay off
```

### I2C

Aqui está o exemplo de como ler o sinal I2C do Grove - Temp&Humi Sensor(SHT31) através do MT3620 Base Shield.  

**Conexão de Hardware**

| Kits de desenvolvimento MT3620 | MT3620 Grove Shield |  Grove - Temp&Humi Sensor(SHT31) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Adquira agora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/sht31_shield.jpg)

- Passo 1. Conecte o Grove - Temp&Humi Sensor(SHT31) à porta I2C do MT3620 Grove Shield.
- Passo 2. Conecte o MT3620 base shield na placa de desenvolvimento Azure Sphere MT3620.
- Passo 3. Conecte o cabo USB à placa de desenvolvimento Azure Sphere MT3620 e ao PC.

**Software**

- Passo 1. Baixe a [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- Passo 2. Abra o **Samples/Temp_and_Humidity_SHT31** em MT3620 Grove Shield
- Passo 3. Clique duas vezes em **Temp_and_Humidity_SHT31.sln**
- Passo 4. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **MT3620_Grove_Shield_Library**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. Vá para o projeto do aplicativo, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **MT3620_Grove_Shield_Library** e clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto do seu aplicativo, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1** se você usar a **Visual Studio Community version** e, por favor, pule esta etapa se você usar a versão Enterprise.
- Passo 8. Clique em **Remote GDB Debugger**, você verá a saída como abaixo.

```
Remote debugging from host 192.168.35.1
Application starting
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.1C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.8%
```

## Visualizador de Esquema Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [MT3620 Grove Shield v1.0 Sch and PCB](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip)
- **[Library]** [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Product]** [Azure Sphere MT3620 Development Kit Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Product]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[DataSheet]]** [MediaTek MT3620 Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[Mechanical]** [Azure Sphere MT3620 Development Board-2D-Drawing](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[FAQ Web]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

