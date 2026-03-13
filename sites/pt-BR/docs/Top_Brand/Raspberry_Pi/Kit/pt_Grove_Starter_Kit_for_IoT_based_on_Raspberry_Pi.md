---
description: Kit Inicial Grove para IoT baseado em Raspberry Pi
title: Kit Inicial Grove para IoT baseado em Raspberry Pi
keywords:
  - Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi
sku: 110060482
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi/
---
<!-- ---
name: Grove Starter Kit for IoT based on Raspberry Pi
category: Raspberry Pi
bzurl: https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html
prodimagename: cover.jpg
sku: 110060482
--- -->

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg)

Construir um projeto de IoT no seu Raspberry Pi nunca foi uma tarefa fácil para muitos desenvolvedores. Isso se deve às conexões de hardware confusas envolvidas e à programação de software complicada. A Seeed e a Microsoft trabalharam juntas para aliviar alguns desses desafios introduzindo o Microsoft IoT Grove Kit.

A cape GrovePi+ incluída no kit é totalmente compatível com seu Raspberry Pi 3 e Raspberry Pi 2 que ambos executam Windows 10 IoT Core. Com o sistema Grove fácil de usar, agora você pode conectar até 15 módulos Grove ao seu Raspberry Pi simplesmente através das interfaces Grove no GrovePi+.

Além dos sensores e atuadores de alto desempenho, o kit contém um Display HDMI de 5 polegadas e um LCD RGB com luz de fundo. O Microsoft IoT Grove Kit é uma plataforma poderosa para você iniciar sua exploração na Internet das Coisas.

Observe que este kit NÃO inclui a placa Raspberry Pi. Visite [here](https://www.seeedstudio.com/Boards-for-Raspberry-pi-c-25.html) para comprá-la separadamente.

:::note
GrovePi+ e parte do código foram projetados pela [Dexter Industry](http://www.dexterindustries.com/).  Clique para obter mais informações sobre a Dexter.
:::

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html)

## Recursos

* GrovePi+ fácil de usar que é compatível com Raspberry Pi B/B+/A+/2/3
* Módulos Grove plug-n-play para prototipagem rápida

## Lista de Peças

| SKU | Nome da Peça | Qtde | Link |
|------|--------------|------|-------|
|103010002 | GrovePi+ | 1 | [Get One Now](https://www.seeedstudio.com/GrovePi.html) |
|104990243| Display HDMI de 5 Polegadas com Tela de Toque USB | 1 | [Get One Now](https://www.seeedstudio.com/5-Inch-HDMI-Display-with-USB-TouchScreen-p-2638.html) |
|103020005| Grove - Relé | 1 | [Get One Now](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|101020011| Grove - Sensor de Temperatura e Umidade| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html) |
|101020010| Grove - Sensor Ultrassônico | 1 | [Get One Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|104020006| Barra de LED Grove v2.0 | 1 | [Get One Now](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|101020048| Grove - Sensor de Ângulo Rotativo(P)| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor%28P%29-p-1242.html) |
|107020000| Grove - Buzzer| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|101020023| Grove - Sensor de Som| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020014 | Grove - Sensor de Luz v1.2 | 1 | [Get One Now](https://www.seeedstudio.com/Grove-%E2%80%93-Light-Sensor-%28P%29-v1.1-p-2693.html) |
|101020003| Grove - Botão| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|104030001| Grove - LCD RGB com Luz de Fundo| 1 | [Get One Now](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html) |
|109990056| Cabo HDMI| 1 | [Get One Now](https://www.seeedstudio.com/Flat-HDMI-Male-to-Male-Cable-1M,Support-3D-For-HDTV-computer-&-tablets-cable-p-2142.html) |
|321010007| Cabo Micro USB - 48cm| 1 | [Get One Now](https://www.seeedstudio.com/Micro-USB-Cable-1200px-p-1475.html) |

## Conexão de hardware para GrovePi+

**1.1 Conectando o GrovePi+ ao Raspberry Pi**

Primeiro, monte seu GrovePi+ no Raspberry Pi. O GrovePi+ desliza sobre o topo do
Raspberry Pi como mostrado na figura abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_1_1.png)

Certifique-se de que os pinos estejam devidamente alinhados ao empilhar o GrovePi+.

**Ligando o Raspberry Pi**

Para alimentar o GrovePi+ e o Raspberry Pi, você pode usar a porta de alimentação micro USB no Raspberry Pi.
Lembre-se de usar um bom adaptador de energia capaz de fornecer 2A a 5V. Se você quiser executar o GrovePi+ em uma configuração independente, talvez ache útil um power bank USB.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_2_1.png)

## Instalar a biblioteca GrovePi C# para Raspberry Pi

O GrovePi pode ser programado em C#, mas primeiro você deve instalar a biblioteca de driver Windows 10 IoT C# para o GrovePi. Há duas maneiras de fazer isso: instalar o pacote NuGet e usar o código da biblioteca GrovePi C# desenvolvido pela Dexter.

**Instalar o pacote NuGet**

O pacote NuGet do GrovePi para a versão atual está disponível.
Para instalar o GrovePi para Windows IoT siga os seguintes passos.

**PASSO1.**

No menu Tools, selecione Library Package Manager e, em seguida, clique em Package Manager Console.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_1.png)

A **janela Package Manager Console** é exibida.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_2.png)

**PASSO2.**

Execute o seguinte comando no Package Manager Console.

    PM> Install-Package GrovePi

Mais detalhes em [https://www.nuget.org/packages/GrovePi/](https://www.nuget.org/packages/GrovePi/).

**Usar o código da biblioteca GrovePi C#**

Se você é um programador experiente ou não consegue instalar o pacote NuGet do GrovePi com sucesso, pode baixar o código da biblioteca clicando neste link [https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp).

**PASSO1.**

Mova os dois projetos de biblioteca C# “GrovePi” e “Driver” para a pasta onde seu projeto está localizado. E adicione-os ao seu projeto no Solution Explorer.
Por exemplo, clique com o botão direito no Solution “GrovePiExamples ”, Add | Existing Project, como mostrado abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_1.png)

Em seguida, adicione “GrovePi” e “Driver” ao Solution Explorer.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_2.png)

**PASSO2.**

Defina a biblioteca C# como projetos de referência. Clique com o botão direito em References e clique em Add References

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_3.png)

Clique em Projects | Solution e marque a caixa conforme mostrado no retângulo vermelho abaixo. Em seguida, clique em OK.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_4.png)

Agora, você já instalou a biblioteca GrovePi C# com sucesso.

Todos os sensores compatíveis estão disponíveis por meio da classe DeviceFactory.

**Exemplos**

A seguir estão alguns exemplos simples de como usar a biblioteca.

* **Medir Distância**

Sensor ultrassônico conectado ao pino digital 2 (D2)

    var distance = DeviceFactory.Build.UltraSonicSensor(Pin.DigitalPin2).MeasureInCentimeters();

* **Exibir Hello World**

       DeviceFactory.Build.RgbLcdDisplay().SetText("Hello World").SetBacklightRgb(0, 255, 255);

* **Acionar o buzzer**

Acionar o buzzer conectado ao pino digital 2 (D2).

    DeviceFactory.Build.Buzzer(Pin.DigitalPin2).ChangeState(SensorStatus.On);

## Executando exemplos Win10 IoT no Rpi3

Aqui temos uma lista de projetos de exemplo que mostram como é fácil iniciar um projeto com o Raspberry Pi. Esses projetos de Raspberry Pi combinam sensores Grove fáceis de usar com o poderoso Raspberry Pi.
Você pode clicar [here](https://github.com/Seeed-Studio/GrovePiExamples_win10) para baixar o código de exemplo GrovePi para win10. Você precisará pressionar o botão verde “Clone or download” à direita e escolher “Download ZIP”. Em seguida, você precisa extrair o ZIP em um local de sua escolha.
Abra o GrovePiExamples(win10).sln com o seu Visual Studio 2015, você pode ver que há 12 projetos no Solution Explorer, como a figura abaixo mostra.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_0_1.png)

Antes de começar, compile primeiro o projeto **GrovePi**. Isso porque os outros projetos dependem dele.

**Hello World do LCD RGB**

Este exemplo é para ser o seu primeiro projeto com o GrovePi+. Todas as partes usadas neste projeto estão disponíveis no GrovePi+ Starter Kit. Uma vez dominado, você pode seguir para projetos mais complicados, como conectar um display ou outros sensores ao Raspberry Pi.

* **Passo1:** Defina o projeto HelloWorld(LCD) como StartUp Project.
* **Passo2:** Conexão de hardware.

Conecte o LCD RGB à porta I2C-1 e ligue o Raspberry Pi usando o conector de fio Grove.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_1.png)

* **Passo3:**  Faça o deploy do seu aplicativo.

1) Com o aplicativo aberto no Visual Studio, defina a arquitetura no menu suspenso da barra de ferramentas. Selecione ARM.

2) Em seguida, na barra de ferramentas do Visual Studio, clique no menu suspenso Local Machine e selecione Remote Machine.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_2.png)

3) Neste ponto, o Visual Studio apresentará a caixa de diálogo Remote Connections. Se você usou anteriormente o [PowerShell](http://ms-iot.github.io/content/en-US/win10/samples/PowerShell.htm) <!-- 源文件链接有误 -->para definir um nome exclusivo para o seu dispositivo, você pode inseri-lo aqui (neste exemplo, estamos usando my-device). Caso contrário, use o endereço IP do seu dispositivo Windows IoT Core. Depois de inserir o nome/IP do dispositivo, selecione None para Windows Authentication e clique em Select.

![enter image description here](https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_3.png)

4) Você pode verificar ou modificar esses valores navegando até as propriedades do projeto (selecione Properties no Solution Explorer) e escolhendo a guia Debug à esquerda.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo HelloWorld será implantado e iniciado no dispositivo Windows IoT, e você verá o HelloWorld a partir do Grove RGB LCD.

**Grove Rotary Angle Sensor**

Este exemplo pode ser configurado da mesma forma que o HelloWorld(LCD).

* **Step1:** Defina o projeto GroveAngleSensor como StartUp Project.
* **Step2:** Conexão de hardware.
Conecte o Grove Angle Sensor à porta A0 e conecte o Raspberry Pi à tela LCD pelo cabo HDMI.
* **Step3:** Faça o deploy do seu aplicativo. Consulte o exemplo HelloWorld(LCD) do Step3.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo GroveAngleSensor será implantado e iniciado no dispositivo Windows IoT. Você pode ver o valor do Grove Angle Sensor na tela LCD.

**Grove LED Bar**

Este exemplo pode ser configurado da mesma forma que o HelloWorld(LCD).

* **Step1:** Defina o projeto GroveLedBar como StartUp Project.
* **Step2:** Conexão de hardware.
Conecte o Grove Led Bar à porta D5.
* **Step3:** Faça o deploy do seu aplicativo. Consulte o exemplo HelloWorld(LCD) do Step3.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo GroveLedBar será implantado e iniciado no dispositivo Windows IoT. Você pode ver o Grove Led Bar acender em ciclo.

**Grove - Light Sensor**

Este exemplo tem o mesmo uso que o HelloWorld(LCD).

* **Step1**: Defina o projeto GroveLightSensor como StartUp Project.
* **Step2**: Conexão de hardware.
Conecte o Grove Light Sensor à porta A2 e conecte o Raspberry Pi à tela LCD pelo cabo HDMI.
* **Step3**: Faça o deploy do seu aplicativo. Consulte o exemplo HelloWorld(LCD) do Step3.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo GroveLightSensor será implantado e iniciado no dispositivo Windows IoT. Você pode ver o valor do Grove Light Sensor na tela LCD.

**Grove - Relay**

Este exemplo tem o mesmo uso que o HelloWorld(LCD).

* **Step1**: Defina o projeto GroveRelay como StartUp Project.
* **Step2**: Conexão de hardware.
Conecte o Grove Relay à porta D2.
* **Step3**: Faça o deploy do seu aplicativo. Consulte o exemplo HelloWorld(LCD) do Step3.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo GroveRelay será implantado e iniciado no dispositivo Windows IoT. Você pode ver o Grove Relay abrir e fechar a cada 1 segundo.

**Grove - Sound Sensor**

Este exemplo tem o mesmo uso que o HelloWorld(LCD).

* **Step1**: Defina o projeto GroveSoundSensor como StartUp Project.
* **Step2**: Conexão de hardware.
Conecte o Grove Sound Sensor à porta A1 e conecte o Raspberry Pi à tela LCD pelo cabo HDMI.
* **Step3**: Faça o deploy do seu aplicativo. Consulte o exemplo HelloWorld(LCD) do Step3.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo GroveSoundSensor será implantado e iniciado no dispositivo Windows IoT. Você pode ver o valor do Grove Sound Sensor na tela LCD.

**Grove - Temperature and Humidity Sensor**

Este exemplo tem o mesmo uso que o HelloWorld(LCD).

* **Step1**: Defina o projeto GroveTempAndHumi como StartUp Project.
* **Step2**: Conexão de hardware.
Conecte o Grove Temp & Humi Sensor à porta D3 e conecte o Raspberry Pi à tela LCD pelo cabo HDMI.
* **Step3**: Faça o deploy do seu aplicativo. Consulte o exemplo HelloWorld(LCD) do Step3.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo GroveTempAndHumi será implantado e iniciado no dispositivo Windows IoT. Você pode ver o valor de temperatura e umidade na tela LCD.

**Grove - Ultrasonic Ranger**

Este exemplo tem o mesmo uso que o HelloWorld(LCD).

* **Step1**: Defina o projeto GroveUltrasonicSensor como StartUp Project.
* **Step2**: Conexão de hardware.
Conecte o Grove Ultrasonic Ranger à porta D4 e conecte o Raspberry Pi à tela LCD pelo cabo HDMI.
* **Step3**: Faça o deploy do seu aplicativo. Consulte o exemplo HelloWorld(LCD) do Step3.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo GroveUltrasonicSensor será implantado e iniciado no dispositivo Windows IoT. Você pode ver o valor da distância na tela LCD.

**Home Weather Display**

Este exemplo tem o mesmo uso que o HelloWorld(LCD).

* **Step1**: Defina o projeto HomeWeatherDisplay como StartUp Project.
* **Step2**: Conexão de hardware.
Conecte o Grove Temp and Humi Sensor à porta D3, o RGB LCD à porta I2C usando o conector de fio Grove.
* **Step3**: Faça o deploy do seu aplicativo. Consulte o exemplo Blink do Step5.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo Home Weather Display será implantado e iniciado no dispositivo Windows IoT, e você poderá ver a temperatura no RGB LCD.

**All Modules in One Project**

Este exemplo tem o mesmo uso que o HelloWorld(LCD).

* **Step1**: Defina o projeto All_in_One como StartUp Project.
* **Step2**: Conexão de hardware.
  * Grove - Relay > D2
  * Grove - Temp&Humi Sensor > D3
  * Grove - Ultrasonic Ranger > D4
  * Grove - LED Bar V2.0 > D5
  * Grove - Buzer > D6
  * Grove - Button > D7
  * Grove - Rotary Angle Sensor > A0
  * Grove - Sound Sensor > A1
  * Grove - Light Sensor > A2

Conecte os módulos Grove ao GrovePi+ como mostra a tabela. E conecte o Raspberry Pi à tela LCD pelo cabo HDMI.

* **Step3**: Faça o deploy do seu aplicativo. Consulte o exemplo HelloWorld(LCD) do Step3.

Quando tudo estiver configurado, você deverá conseguir pressionar F5 no Visual Studio. Se houver algum pacote ausente que você não tenha instalado durante a configuração, o Visual Studio poderá solicitar que você o obtenha agora.
O aplicativo All_in_One será implantado e iniciado no dispositivo Windows IoT.
Você pode ver o valor de distância, som, luz e o estado do relé na tela LCD. O sensor de ângulo será mostrado como um gráfico na tela. A Led Bar indica o valor do sensor de ângulo. Pressione o botão e mantenha-o pressionado, o Grove Relay será aberto.

## Veja Também

* [Windows Dev Center](https://dev.windows.com/en-us/iot)
* [GrovePi C# Library Code](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp)
* [Example Code](https://github.com/Seeed-Studio/GrovePiExamples_win10)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
