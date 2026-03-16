---
description: Placa de Desenvolvimento MT3620 Mini
title: Placa de Desenvolvimento MT3620 Mini
keywords:
  - Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /MT3620_Mini_Dev_Board
sku: 103990049,102110267
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/MT3620_Mini_Dev_Board/
---


![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product.png)

A Placa de Desenvolvimento MT3620 Mini é uma versão simplificada do anterior [Azure Sphere MT3620 Development Kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) da Seeed. Para uma introdução ao Azure Sphere, consulte este link [Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/).

Desenvolvemos esta placa para atender às necessidades de desenvolvedores que precisam de tamanhos menores, mais escalabilidade e custos mais baixos. Esta placa de desenvolvimento é baseada no módulo MT3620, o que simplifica bastante a dificuldade de design de hardware. O [módulo MT3620](https://www.seeedstudio.com/MT3620-Module-AI-Link-WF-M620-RSC1-p-2920.html) é desenvolvido pelo nosso parceiro [AI-Link](http://www.ilinkthings.com/microsoft). Os desenvolvedores podem reutilizar facilmente este design em seus próprios projetos. A placa de desenvolvimento usa dois cabeçalhos de pinos de fileira simples para fácil conexão em outras placas-mãe ou placas de expansão. Diferente do Azure Sphere MT3620 Development Kit completo, esta placa de desenvolvimento otimiza o design reduzindo alguns recursos periféricos de hardware do sistema e fornece apenas os recursos de hardware necessários aos desenvolvedores. Em termos de especificações de hardware, oferecemos suporte apenas a Wi‑Fi de 2,4G e reduzimos I2S e algumas portas GPIO.  

**O que há de novo na Placa de Desenvolvimento MT3620 Mini?**

- Baseada no módulo MT3620 (WF-M620-RSA1)
- Reduz o tamanho da placa de 50mm*80mm*16mm para 34mm*60mm*19mm
- Mantém o LED indicador e botões necessários
- O formato da placa é mais fácil para uso como add-on

A figura mostra a comparação de tamanho entre a placa de desenvolvimento completa e a nova placa de desenvolvimento mini:

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/compare.png)

O sistema operacional Azure Sphere vem pré-instalado no MT3620 e foi projetado para funcionar com o Azure Sphere Security Service para criar uma plataforma de IoT segura. Juntos, o Azure Sphere OS e o serviço de segurança oferecem:

- autenticação de dispositivo baseada em certificado para qualquer serviço web
- atestação de software e inicialização segura
- detecção de ameaças por meio de relatórios de falhas
- atualizações contínuas de segurança
- uma solução IoT integrada, segura e fim a fim

O desenvolvimento de software para o MT3620 é suportado usando o poderoso IDE Microsoft Visual Studio: instale o Visual Studio e a extensão Azure Sphere, conecte a placa de desenvolvimento a um PC via USB e comece a desenvolver aplicações IoT com níveis de segurança sem precedentes.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution

1. Política de devolução: Este produto só pode ser ativado uma vez. A Seeed não aceitará devolução depois que a embalagem tiver sido aberta. Verifique a Garantia & Devoluções aqui. Se houver qualquer problema de qualidade após abrir a embalagem, entre em contato com a Equipe de Suporte da Seeed em support@seeed.cc.

2. Licenças de Código Aberto: O software incluído neste produto contém software protegido por direitos autorais que é licenciado sob GPL, LGPL ou outras licenças de código aberto, listadas em ataka.ms/AzureSphereSDK. Você pode obter o código‑fonte do software aplicável em aka.ms/AzureSphereSDK ou enviando um e‑mail para order@seeed.cc.
:::

## Recursos

- Azure Sphere: Segurança fim a fim para dispositivos IoT.
- Wi-Fi 802.11 b/g/n.
- Microcontrolador tri-core com RAM e flash integrados.
- Ambiente de desenvolvimento Microsoft Visual Studio.
- Autenticação online e atualizações durante todo o ciclo de vida do dispositivo.
- Expande recursos de UART, I2C, SPI, ADC, GPIO no cabeçalho de pinos.

## Especificação

**Hardware**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-c3ow{border-color:inherit;:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <th class="tg-0pky">Descrição</th>
    <th class="tg-0pky">Valor</th>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="2">MCU<br />(usando módulo MT3620)</td>
    <td class="tg-0pky">1 *núcleo ARM Cortex A7 @500MHz , 4MB RAM</td>
  </tr>
  <tr>
<td class="tg-0pky">2* núcleos ARM Cortex M4 @200MHz , 64KB RAM</td>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="4">ISU</td>
    <td class="tg-0pky">ISU 0 configurado como SPI0 ou UART0 ou I2C0, ISU 1 configurado como SPI1 ou UART1 ou I2C1</td>
  </tr>
  <tr>
    <td class="tg-0pky">- I2C funciona em até 1MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- SPI funciona em até 40MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- UART funciona em até 3Mbps</td>
  </tr>
  <tr>
    <td class="tg-0pky">Conectividade</td>
    <td class="tg-0pky">802.11 b/g/n Wi-Fi</td>
  </tr>
  <tr>
    <td class="tg-0pky">ADC</td>
    <td class="tg-0pky">3 *entradas de E/S ADC de 12 bits</td>
  </tr>
  <tr>
    <td class="tg-0pky">RTC</td>
<td class="tg-0pky">1* RTC com suporte para bateria CR1220 3V</td>
  </tr>
  <tr>
    <td class="tg-0pky">USB</td>
    <td class="tg-0pky">1 *porta Micro USB para alimentação e depuração, 5V/1A</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="3">LED</td>
<td class="tg-0pky">1* LED VERMELHO -&gt; Energia</td>
  </tr>
  <tr>
    <td class="tg-0lax">1 *LED VERDE -&gt; status FTDI</td>
  </tr>
  <tr>
<td class="tg-0lax">1* LED VERDE -&gt; controlado pelo usuário (pode ser configurado como status do Wi‑Fi ou para outro uso)</td>
  </tr>
  <tr>
    <td class="tg-0lax">Botão</td>
    <td class="tg-0lax">1*Botão de Reset</td>
  </tr>
  <tr>
    <td class="tg-0pky">Temperatura de Operação</td>
    <td class="tg-0pky">-40~85°C</td>
  </tr>
  <tr>
    <td class="tg-0pky">Dimensões</td>
    <td class="tg-0pky">C:34mm*L:60mm*A:19mm<br /></td>
  </tr>
  <tr>
    <td class="tg-0pky">Certificação</td>
    <td class="tg-0pky">CE / FCC / MIC / RoHS<br /></td>
  </tr>
</table>

**Software**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">Sistema</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">Linguagem de Programação</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## Suportes

Agora é possível programar todos os itens a seguir ao criar um aplicativo em tempo real.

- I2C
- 2xARM Cortex-M4 com FPU
- ADC
- PWM
- I2S （consulte [M4 with FPU](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf)）

Se estiver criando um aplicativo de SO de alto nível, é possível usar ADC e PWM.

## Visão Geral do Hardware

**Diagrama da Placa**

<a href="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg"/></a>

**Pinagem da Placa**

<a href="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg" target="_blank"><img src="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg"/></a>

## Aplicações

- Residencial/Prédios/Instalações
- Automação
- Segurança
- Gerenciamento de Equipamentos
- Serviços Públicos
- Segurança Pública

:::tip
Para entender como o Azure Sphere funciona em um cenário do mundo real, considere o [cenário da Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Instalar Azure Sphere

Se você tem uma Placa de Desenvolvimento MT3620 Mini que ainda não foi usada, conclua [estas etapas](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primeiro para começar a utilizá‑la.

## Demos da Placa de Desenvolvimento MT3620 Mini

Criamos três demonstrações que combinam a Placa de Desenvolvimento MT3620 Mini e o [sistema Seeed Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/).

**Demo#1**: A Placa de Desenvolvimento MT3620 Mini atua como um MCU, que se conecta ao Grove-Button e ao adaptador USB para TTL. Em seguida, você conecta a Placa de Desenvolvimento MT3620 Mini e o adaptador USB para TTL às portas USB do PC. Depois de baixar o código, pressione o Grove-Button e insira "Hello World!" a partir do adaptador USB para TTL, você pode receber "Hello World!" na janela Output do Visual Studio.  

**Demo#2**: A Placa de Desenvolvimento MT3620 Mini atua como um MCU, que se conecta ao Grove-Light Sensor e ao USB para Grove-Rotary Sensor. Em seguida, você conecta a Placa de Desenvolvimento MT3620 Mini às portas USB do PC. Depois de baixar o código, ao mover a mão sobre o Grove-Light Sensor ou girar o Grove-Rotary Sensor, você pode ver saídas analógicas de ambos os sensores na janela Output do Visual Studio.  

**Demo#3**: A Placa de Desenvolvimento MT3620 Mini atua como um MCU, que se conecta ao Grove - OLED Display 1.12". Em seguida, você conecta a Placa de Desenvolvimento MT3620 Mini às portas USB do PC. Depois de baixar o código, ao pressionar o Grove-Button e inserir "Hello World!" a partir do adaptador USB para TTL, você pode receber "Hello World!" na janela Output do Visual Studio.

**MT3620 Grove Breakout**：A Placa de Desenvolvimento MT3620 Mini oferece suporte a funções SPI, UART, I2C, Digitais, mas não oferece suporte à função ADC. Portanto, o MT3620 Grove Breakout inclui o chip [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf), que é um ADC de 12 bits, baixo consumo e aproximações sucessivas com interface compatível com I2C. Em seguida, conecte‑o à interface I2C da Placa de Desenvolvimento MT3620 Mini.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/adc_i2c.png)

### Demo#1 Digital e UART

**Lista de Peças**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove - Button |USB To Uart 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[Get One Now](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Get One Now](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Get One Now](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Get One Now](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**Conexão de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

- Passo 1. Conecte o Grove-Button ao D1 do MT3620 Grove Breakout.
- Passo 2. Conecte o adaptador USB To Uart à UART0 do MT3620 Grove Breakout através do [Grove-Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html).
- Passo 3. Conecte o MT3620 Grove Breakout ao MT3620 Mini Dev Board.
- Passo 4. Conecte o MT3620 Mini Dev Board e o adaptador USB to TTL às portas USB do PC.

:::caution
Certifique-se de que a chave de tensão no adaptador USB to TTL esteja ajustada para **5v**. Conecte o RX do adaptador USB to ttl ao TX do MT3620 Grove Breakout, o TX do adaptador USB to ttl ao RX do MT3620 Grove Breakout e o GND também. Não conecte o 5V.
:::

**Software**

- Passo 1. Baixe o [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Passo 2. Abra o **Samples\UART0** em Azure_Sphere_Demo
- Passo 3. Clique duas vezes em **UART0.sln**
- Passo 4. Clique com o botão direito no nome do projeto da sua aplicação, selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **UART0**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. Vá para o projeto da aplicação, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **UART0** e depois clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto da sua aplicação, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1+Beta1902** se você usar o **Visual Studio Community version** e por favor pule esta etapa se você usar a versão Enterprise.
- Passo 8. Clique no **Remote GDB Debugger**.
- Passo 9. Abra a ferramenta de monitoramento da porta COM e selecione a porta serial do adaptador USB to TTL
- Passo 10. Pressione o Grove-Button e envie "Hello World!" a partir da ferramenta de monitoramento COM.
- Passo 11. Você pode ver a mensagem abaixo na janela de saída do Visual Studio.

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

### Demo#2 Analógico

**Lista de Peças**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-Light Sensor |Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[Get One Now](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Get One Now](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Get One Now](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[Get One Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**Conexão de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

- Passo 1. Conecte o Grove-Rotary Angle Sensor ao A0 do MT3620 Grove Breakout.
- Passo 2. Conecte o Grove-Light Sensor ao A1 do MT3620 Grove Breakout.
- Passo 3. Conecte o MT3620 Grove Breakout ao MT3620 Mini Dev Board.
- Passo 4. Conecte o MT3620 Mini Dev Board à porta USB do PC.

**Software**

- Passo 1. Baixe o [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Passo 2. Abra o **Samples\AD7991_I2C** em Azure_Sphere_Demo
- Passo 3. Clique duas vezes em **AD7991_I2C.sln**
- Passo 4. Clique com o botão direito no nome do projeto da sua aplicação, selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **AD7991_I2C**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. Vá para o projeto da aplicação, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **AD7991_I2C** e depois clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto da sua aplicação, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1+Beta1902** se você usar o **Visual Studio Community version** e por favor pule esta etapa se você usar a versão Enterprise.
- Passo 8. Clique no **Remote GDB Debugger**, mova sua mão sobre o Grove-Light Sensor ou gire o Grove-Rotary Angle Sensor, você poderá ver saídas analógicas para ambos os sensores na janela Output do Visual Studio.  

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
|[Get One Now](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Get One Now](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Get One Now](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**Conexão de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

- Passo 1. Conecte o Grove-OLED Display 1.12'' V2 ao I2C do MT3620 Grove Breakout.
- Passo 2. Conecte o MT3620 Grove Breakout ao MT3620 Mini Dev Board.
- Passo 3. Conecte o MT3620 Mini Dev Board à porta USB do PC.

**Software**

- Passo 1. Baixe o [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Passo 2. Abra o **Samples\SeeedOLED_I2C** em Azure_Sphere_Demo
- Passo 3. Clique duas vezes em **SeeedOLED_I2C.sln**
- Passo 4. Clique com o botão direito no nome do projeto da sua aplicação, selecione **Properties > C/C++ > General > Additional Include Directories**
- Passo 5. Clique nos ícones **down arraw >  Edit... > New Line**, modifique o caminho de **SeeedOLED_I2C**, clique em **Select Folder** > **OK** > **OK**
- Passo 6. Vá para o projeto da aplicação, clique com o botão direito em **References** > **Add References**, selecione **Projets**, marque a caixa de seleção de **SeeedOLED_I2C** e depois clique em **OK**
- Passo 7. Clique com o botão direito no nome do projeto da sua aplicação, selecione **General** > **Target API Set**, marque a caixa de seleção e defina como **1+Beta1902** se você usar o **Visual Studio Community version** e por favor pule esta etapa se você usar a versão Enterprise.
- Passo 8. Clique no **Remote GDB Debugger**, você verá as informações exibidas no oled.

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## Projeto de Controle Remoto de Porta

Este é o Azure Sphere Secure Lock Demo. Construímos esta caixa com o novo MT3620 Mini Dev Board e sua placa Grove Breakout. O MT3620 funciona como um microcontrolador de dispositivo e fornece acesso seguro à nuvem.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure_Sphere_Demo_Secure_Lock.jpg)

<div align="center">Diagrama do Secure Lock<b></b><i></i></div>

**1. Vamos descobrir como o hardware funciona:**

Na parte superior da caixa há uma luz de aviso, que piscará quando a porta estiver aberta. O MT3620 lê o estado do micro switch e sabe se a porta está aberta ou não. A porta é trancada por um interruptor eletromagnético. Há dois relés, ambos acionados pelos GPIOs do MT3620. Um relé controla a fonte de alimentação do eletroímã; ao abrir o relé, o eletroímã será desligado. O outro relé controla a luz de aviso.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo4.jpg)

<div align="center"><b>Vista Frontal</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo2.jpg)

<div align="center"><b>Vista Superior</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo5.jpg)

<div align="center"><b>Vista Lateral</b><i></i></div>

**2. MT3620 Mini Dev Board**

- Passo 1. Baixe o [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo).
- Passo 2. Siga os Quickstarts para Azure Sphere para abrir o projeto **Azure_Sphere_Demo\Demostrations\RemoteControlDoor\RemoteControlDoor.sln**.
- Passo 3. Abra o main.c em Source Files.
- Passo 4. Modifique wifiSsid e wifiPsk nas linhas 28 e 29.
- Passo 5. Conecte o demo ao Azure IoT.
- Passo 6. Clique em Build -> Rebuild Solution diretamente para o dispositivo.
- Passo 7. Use a Remote Debug Tool para acessar o dispositivo.  
- Passo 8. Siga o vídeo para operar o exemplo de 3 maneiras diferentes.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NgH3Ot9pM1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Recursos

<!-- - **[Product]** [MT3620 Mini Dev Board Product Brief](https://files.seeedstudio.com/products/102110267/document/MT3620_Mini_Dev_Board_Product_Brief-2019-03-15.pdf)链接有误 -->
- **[Product]** [Bem-vindo ao Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Library]** [Biblioteca de Demonstração do Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[PDF]** [Esquemático da MT3620 Mini Dev Board](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MT3620%20Dev%20Board%20V2.pdf)
- **[DataSheet]** [Resumo do Produto MediaTek MT3620](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [Datasheet WF-M620 RSC1](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[FAQ Web]** [Fórum do Azure Sphere](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Problemas do Azure Sphere no Github](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

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
