---
title: Wio Node
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio_Node/
slug: /Wio_Node
sku: 102110057
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Wio_Node/
---

Construir projetos de IoT é empolgante, pois você pode conectar praticamente tudo ao seu redor e controlá-los. Porém, às vezes não é fácil criar aplicações de IoT, já que isso exige muito trabalho pesado, como hardware, programação, jumpers e soldagem etc. Mesmo um usuário bem treinado gastaria horas para lidar com todo o trabalho, quanto mais iniciantes. Para simplificar o desenvolvimento de projetos de IoT, a Seeed lançou o **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** no **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** e acabou sendo um grande sucesso. O slogan no Kickstarter definiu muito bem a principal característica do Wio Link:

**3 passos. 5 minutos. Construa suas próprias aplicações de IoT!**

É muito simples, a construção é rápida, porém não é ideal para todas as situações.
E se precisarmos de apenas 2 conectores Grove? E se houver espaço limitado na aplicação, mas o Wio Link for grande demais? E se quisermos reduzir o custo? Assim, logo após lançarmos o Wio Link, uma solução micro e econômica entrou no cronograma; por meses os engenheiros da Seeed redesenharam e otimizaram a placa Wi-Fi e aqui está ela, o novo membro da família Wio — **Wio Node**.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Assim como o significado do seu nome, o Wio Node é realmente um nó Wi‑Fi que conecta coisas em projetos de IoT. Se o Wio Link é o irmão mais velho, o Wio Node deve ser o irmão caçula da família Wio, pois esse carinha fofo tem apenas um quarto do tamanho do Wio Link enquanto integra todas as funções básicas do Wio Link.

O ecossistema do Wio Node também é composto pelo Hardware Aberto **Wio Node board**, pelo **Open Source Wio Link Mobile App** e pela **implementação de Servidor de IoT Open Source**. Portanto, a plataforma de software do Wio Link também está disponível para o Wio Node.

[![Adquira agora](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)

:::caution
A função Wio IFTTT está em fim de vida (EOL). Mas o Wio APP continua disponível. Você pode usar a API do Wio APP para ler o status dos sensores e controlar o atuador.
:::

## Recursos

----

- Sem necessidade de programação de hardware, sem protoboard, sem jumpers, sem soldagem.
- Muitos módulos Grove são suportados (verifique a lista no App móvel).
- Módulos Grove Plug‑n‑Play
- Configuração visual em vez de programação de microcontrolador.
- Atualização automática via compilação em nuvem e OTA.
- Leve o mundo real para a plataforma virtual. Todos os sensores se tornam API RESTful virtuais.
- Apps Android e iOS para gerenciar o Wio Node.
- IFTTT suportado pelo Canal da Seeed
- Certificação CE/FCC/TELEC para o módulo central ESP-WROOM-02

## Especificações

----

|Geral|Valor|Gerenciamento de Energia|Valor|
|:---|---|:---|---:|
|**Tamanho**|28mm * 28mm|**Corrente DC por pino de I/O**|12mA|
|**Cristal**|26MHz|**Tensão de Entrada (Micro USB)**| 5V|
|**Memória Flash**|4MBytes (W25Q32B)|**Tensão de Entrada (suporte de bateria)**|3.4~4.2V|
|**Protocolo de Rede Wi‑Fi**|802.11b/g/n|**Corrente DC de Saída**|1000mA MÁX
|**Tecnologia de Criptografia Wi‑Fi**|WEP/TKIP/AES|**Tensão de Operação**|3.3V|
|**Conector de Expansão Grove1**|UART0/I2C0/D0 |**Corrente de Carga**|500mA MÁX|
|**Conector de Expansão Grove2**|Analógico/I2C1/D1|

## Ideias de Aplicação

----
O Wio Node foi bem projetado para fornecer soluções Wi‑Fi simples e econômicas para projetos como:

- Casa Inteligente
- Monitoramento ambiental inteligente
- Brinquedos divertidos
- Web das Coisas
- Internet das Coisas

Na verdade, há muitos projetos em nossa [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio); venha visitá-la para encontrar alguns projetos interessantes ou até compartilhar seus próprios projetos, tenho certeza de que isso lhe trará muitos fãs.

|Sistema de controle de irrigação |A internet do muro de LEDs | Máquina de alimentação para cães|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Monitor do Kickstarter|Monitor de chamadas perdidas|Tecla do chefe|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
Algumas das receitas são feitas com Wio Link; você pode substituí-lo por um Wio Node.
:::

## Visão Geral de Hardware

----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|Nº|Nome|Função|
|---|----|--------|
|1  |Function|Definir o modo de operação do Wio Node|
|2  |ESP8266|Microcontrolador baseado em ESP8266|
|3  |Reset|Reiniciar o dispositivo|
|4  |Micro USB|Alimentar o dispositivo e carregar a bateria|
|5  | Battery Holder|Um conector jst2.0, conecte uma bateria Li de 3,7V|
|6  | Analog/I2C1/D1|Porta Grove, você pode conectar um módulo Grove dos tipos Digital/I2C/Analógico|
|7  | UART/I2C0/D0|Porta Grove, você pode conectar um módulo Grove dos tipos UART/I2C/Digital|

### LEDs de Status

Perto do botão FUNCTION há 2 LEDs de status, um azul e um vermelho. O LED AZUL é o LED indicador de status de rede. Ele possui os seguintes padrões de piscar:

- respirando no modo de configuração
- pisca duas vezes rapidamente e depois fica apagado por 1s solicitando endereço IP do roteador
- pisca uma vez rapidamente e depois fica apagado por 1s conectando ao servidor
- aceso por 1s e depois apagado por 1s quando o nó está online
- aceso continuamente quando o nó está travado por não obter IP ou não se conectar ao servidor.
- pisca rapidamente (aceso 100ms e apagado 100ms) OTA

:::note
O LED AZUL está ligado ao GPIO2, que também é o pino TX da UART1. Ao baixar o firmware, a UART1 descarrega os dados transmitidos na UART0 por padrão. Portanto, o LED AZUL piscará enquanto o firmware estiver sendo baixado. Após a inicialização, o GPIO2 será configurado como um GPIO e não mais como TX da UART1.
:::
O LED VERMELHO é outro LED de status que indica o status de alimentação dos módulos Grove. Todas as seis interfaces Grove têm seus VCC reunidos e podem ser controlados com o GPIO 15. Quando o nó está em modo de deep sleep, todos os módulos Grove também perdem sua alimentação. O LED VERMELHO acenderá quando os módulos Grove estiverem alimentados e se apagará quando os módulos Grove não estiverem alimentados.

### Bônus

O Wio Node possui um carregador de bateria LiPo embutido, então você pode carregar uma bateria LiPo de 3,7V através da porta JST 2.0 quando o USB estiver conectado.

:::note

- Manuseie o conector USB micro tipo‑B com cuidado, ou você pode quebrar o conector da placa.

- A bateria não está incluída no pacote. Mas nós disponibilizamos muitas opções para você no [Bazaar](https://www.seeedstudio.com/s/battery.html).

:::

## Primeiros Passos

----
Vamos criar uma aplicação de LED bem básica com o Wio Node; nesta aplicação você poderá controlar o LED pelo seu smartphone em cerca de 5 minutos. Antes de começarmos, certifique-se de ter os itens abaixo em mãos:

|Wio Node|Grove - LED|Cabo Micro USB|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[Adquira agora](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note

- Um smartphone também é necessário (Android OS versão 4.1 ou superior, iOS versão 7 ou superior)

- O Grove - LED já inclui um cabo Grove

:::

### **PASSO 1:** Instalar o App Android/iOS

Você precisa instalar o Wio Link App para gerenciar e configurar seus dispositivos Wio Node.

Baixe e instale o App para Android ou iOS. Ou você pode ir à App Store da Apple ou à Google Play Store e buscar por "Wio Link"; você irá encontrá-lo.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Obter App Android](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Obter App iOS](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
Certifique-se de que a versão do Android OS seja 4.1 ou superior e a versão do iOS seja 7 ou superior.
:::

### **PASSO 2:** Criar sua Conta

- Se for a primeira vez que você usa o Wio APP, ele pode solicitar autorização de GPS; por favor, aprove e depois faça o cadastro.
- Se você já tem uma conta, verifique a localização do servidor antes de fazer login.

:::note
Por favor, preste atenção à localização do servidor, pois uma localização incorreta levará a falhas ao conectar ao Wio Node.
:::
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **PASSO 3**: Conectar o Wio Node à Internet

- Pressione e segure o botão CONFIG até que o LED azul entre em modo de respiração (isto é, piscando com efeito de fade in & fade out). Isso significa que o Wio Node entrou com sucesso no modo de configuração e pode ser detectado pelo Wio App.
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Confiture%20button.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Confiture%20button.png)
- Toque em "Add your first Device".
- Escolha Wio Node
- "Go to Wi-Fi list" levará você para a interface de configuração de Wi‑Fi do seu smartphone.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)

- Se você conseguiu fazer o LED azul entrar no modo de respiração, você encontrará o Wio Node na lista de Wi-Fi, conecte-se a ele! (Normalmente ele não é chamado de Wio Node na lista de Wi-Fi, no exemplo, o meu é Wio_091016, você pode encontrar um chamado wio_xxxxxx na sua lista.)
- Uma vez conectado, você receberá uma notificação, então poderá voltar ao aplicativo
- O próximo passo é conectar ao Wi-Fi da sua casa ou empresa

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)

- Se houver senha do Wi-Fi ao qual você deseja se conectar, pode ser que seja necessário inserir a senha
- Considerando que você pode precisar conectar mais de 1 Wio Node no futuro, um nome especial permitirá que você os distinga facilmente uns dos outros.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)

### **ETAPA 4:** Interconectar virtualmente módulos com Wio Node e atualizar o firmware

- Clique no Wio Node e você estará na interface principal.
- Existem 2 conectores Grove, selecione o da esquerda (D0).
- Como o LED é um dispositivo de saída, escolha a categoria de saída
- Encontre o ícone que parece uma lâmpada e escolha-o.
- Então você verá que o botão retangular inferior fica vermelho e "View API" se torna "Update Firmware". Escolha "Update Firmware"

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)

- Como você selecionou a porta D0 para conectar o LED no APP, você também precisa conectar o Grove-LED real à porta D0 do Wio Node.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)

### **ETAPA 5**: Testar aplicação usando APIs

- Agora que você conectou com sucesso o LED ao Wio Node, clique em "View API" para verificar a API do Wio Node
- Digite "1" ou "0" na área "Test Request" e clique no botão "Post" para ver o que acontece.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)

## Comece com IFTTT & DoButton

-----
Não sabe programar? Não se preocupe, com a ajuda do [IFTTT](https://en.wikipedia.org/wiki/IFTTT), mesmo que você não saiba nada sobre programação, ainda é possível criar alguns projetos simples.

IFTTT é uma abreviação de "If This Then That", é um serviço gratuito baseado na web que permite aos usuários criar cadeias de instruções condicionais simples, chamadas de "recipes", que são disparadas com base em mudanças em outros serviços web, como Gmail, Facebook, Instagram. Como o IFTTT funciona com Wio Node? Como você pode ver nas figuras abaixo, a Seeed fornece serviço em nuvem em wio.seeed.io, que pode trocar dados e enviar instruções para o IFTTT e o Wio Node. Assim, criando algumas recipes simples, você consegue hackear coisas sem programar.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/WioLink-Workshop.png)

Se você não tem uma conta IFTTT, clique [aqui](https://ifttt.com/join) para se inscrever.

Se você já tem uma conta IFTTT, clique [aqui](https://ifttt.com/recipes/search?q=seeed) para conectar-se à Seeed, ou pesquise por Seeed no site do IFTTT. Lá você encontrará 9 recipes da Seeed para ensinar como usar o IFTTT.
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)
O que é DoButton? DoButton é um dos aplicativos do IFTTT que permite criar seu próprio botão personalizado com apenas um toque, ele é muito adequado para construir projetos de IoT e controlá-los pelo seu smartphone, aqui estão dois exemplos para mostrar como usar IFTTT & DoButton para fazer aplicações úteis.

### Exemplo

|**IFTTT**|**DoButton**|
|:---|:---|
|**[Recipe]**[DIY um Sistema Automático de Irrigação de Jardim sem programar](https://community.seeedstudio.com/project_detail.html?id=1080)|**[Recipe]**[Como alimentar seus animais de estimação quando você não está em casa](https://community.seeedstudio.com/project_detail.html?id=1066)|
|**[Video]**[Como usar o ITFFF](https://vimeo.com/148590984)|**[Video]**[Como usar o DoButton](https://vimeo.com/146988454)|

## Guia Avançado

----
Achou esses exemplos simples demais? Quer fazer projetos mais complicados? Aqui estão os melhores guias para usuários avançados hackearem coisas com Wio Node. Com esses guias, usuários avançados podem conhecer informações mais detalhadas sobre o Wio Node, implantar servidor privado e até escrever driver de módulo para o Wio Node.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

O guia abrange:

- Referência de API
- Guia de Implantação de Servidor
- Guia de Usuário Avançado
- Como escrever driver de módulo para Wio Link?

:::note
    O guia é escrito para Wio Link, mas também se aplica ao Wio Node.
:::

## Lista de Suporte Grove

|SKU       |Name                                        |Interface |Driver                 |Link       |
|----------|--------------------------------------------|----------|-------------------    |-----------|
|101020008 |    Grove - Moisture Sensor                 |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - Light Sensor                    |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - Temperature Sensor              |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - Rotary Angle Sensor             |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - Light Sensor(P)                 |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - Sound Sensor                    |Analog    |ifself                 | [link](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - Electricity Sensor              |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - Slide Potentiometer             |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - 80cm Infrared Proximity Sensor  |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - UV Sensor                       |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - Rotary Angle Sensor(P)          |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - Loudness Sensor                 |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - Luminance Sensor                |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - Air quality sensor v1.3         |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
|101020003 |    Grove - Button                          |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|101020004 |    Grove - Switch(P)                       |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html) |
|101020005 |    Grove - Collision Sensor                |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html) |
|101020009 |    Grove - Line Finder                     |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html) |
|101020018 |    Grove - Water Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html) |
|101020020 |    Grove - PIR Motion Sensor               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html) |
|101020025 |    Grove - Tilt Switch                     |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html) |
|101020037 |    Grove - Touch Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html) |
|101020038 |    Grove - Magnetic Switch                 |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html) |
|101020046 |    Grove - Hall Sensor                     |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Hall-Sensor-p-965.html) |
|101020049 |    Grove - Flame Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html) |
|111020000 |    Grove - Button(P)                       |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Button(P)-p-1243.html) |
|101020073 |    Grove - Electromagnet                   |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html) |
|101020090 |    Grove - Water Atomization v1.0          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/s/101020090.html#) |
|103020004 |    Grove - Solid State Relay               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html) |
|103020005 |    Grove - Relay                           |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|103020008 |    Grove - MOSFET                          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html) |
|103020010 |    Grove - 2-Coil Latching Relay           |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) |
|103020014 |    Grove - Dry-Reed Relay                  |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html) |
|104020001 |    Grove - Variable Color LED              |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html) |
|104020002 |    Grove - Purple LED (3mm)                |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Purple-LED-(3mm)-p-1143.html) |
|104020005 |    Grove - LED String Light                |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
|104030005 |    Grove - Red LED                         |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) |
|104030007 |    Grove - Green LED                       |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html) |
|104030009 |    Grove - White LED                       |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) |
|104030010 |    Grove - Blue LED                        |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html) |
|104030014 |    Grove - Multi Color Flash LED (5mm)     |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-(5mm)-p-1141.html) |
|105020003 |    Grove - Vibration Motor                 |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html) |
|105020004 |    Grove - Mini Fan                        |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html) |
|105020005 |    Grove - EL Driver                       |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html) |
|107020000 |    Grove - Buzzer                          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|107020001 |    Grove - Speaker                         |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Speaker-p-1445.html) |
|101020034 |    Grove - 3-Axis Digital Compass          |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - 3-Axis Digital Accelerometer(±1.5g) |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - 3-Axis Digital Gyro             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
|101020072 |    Grove - Barometer Sensor (BMP180)       |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html) |
|101020083 |    Grove - Gesture                         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Gesture-p-2463.html) |
|101020088 |    Grove - Multichannel Gas Sensor         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
|103020013 |    Grove - I2C ADC                         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) |
|104030008 |    Grove - OLED Display 1.12''             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|104030011 |    Grove - OLED Display 0.96''             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|105020001 |    Grove - I2C Motor Driver                |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html) |
|107020006 |    Grove - I2C FM Receiver                 |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html) |
|101020192 |    Grove - Barometer(BMP280)               |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html) |
|101020193 |Grove - Temp&Humi&Barometer Sensor(BME280)  |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Temp%26Humi%26Barometer-Sensor-(BME280)-p-2653.html) |
|101020010 |    Grove - Ultrasonic Ranger               |Ditital   |itself                 | [link](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|101020016 |    Grove - Infrared Receiver               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html) |
|101020019 |    Grove - Temperature&Humidity Sensor Pro |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html) |
|101020026 |    Grove - Infrared Emitter                |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html) |
|101020029 |    Grove - Infrared Reflective Sensor      |Others    |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html) |
|101020030 |    Grove - Digital Light Sensor            |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - IR Distance Interrupter         |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - Recorder                        |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - LED Bar v2.0                    |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - 4-Digit Display                 |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - Servo                           |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - CO2 Sensor                      |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

## FAQ

----
Aqui estão algumas perguntas que geralmente recebemos de novos usuários. Se você tiver quaisquer outros problemas ao usar Wio Node ou outros produtos Wio, seja bem-vindo à [Community of Wio](https://community.seeedstudio.com/topics.html?t=Wio) onde há muitos usuários profissionais esperando para lhe dar conselhos e também muitos usuários avançados fornecendo várias ideias sobre como usar os produtos Wio!

**P1. Qual é a diferença entre Wio Node e Wio Link?**

>Wio Node é como um mini Wio Link, ele tem apenas um quarto do tamanho do Wio Link e é muito mais barato. Apesar do tamanho e do preço, Wio Node ainda possui todas as funções do Wio Link. Para aqueles que preferem um tamanho menor em vez de mais conectores Grove, Wio Node é a melhor escolha.

**2. O que devo fazer se não conseguir conectar ao servidor?**

>Saia da conta e verifique se você escolheu o servidor errado antes de entrar. Se você não estiver na China Continental, escolha o servidor global.

**3. Falha ao configurar Wio Node e não consigo encontrar Wio Node na lista de Wi‑Fi?**

>Preste atenção ao LED azul. Certifique-se de que ele esteja no modo de respiração (pisca com efeito de fade in & fade out, é um modo muito exclusivo, muito fácil de reconhecer) antes de qualquer etapa adicional. Somente quando o LED estiver no modo de respiração o Wio Node poderá ser encontrado na lista de Wi‑Fi.

**4. Se eu quiser conectar mais de 1 dispositivo I2C, o que devo fazer?**

>Não podemos conectar 2 dispositivos Grove-I2C às 2 portas Grove-I2C do Wio Node ao mesmo tempo. O [Grove-I2C hub](https://www.seeedstudio.com/s/I2C%20hub.html) pode ramificar 1 porta I2C em 4. Venha ao [Bazaar](https://www.seeedstudio.com/s/I2C%20hub.html) para pegar um!

**5. Posso colocar o Wio Node em modo de suspensão?**

>Sim, verifique a última API, onde você pode colocar o Wio Node em modo de suspensão por comando.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

----

- **Documentação e referências**
  - [Referência da API](https://seeed-studio.github.io/Wio_Link/)
  - [Guia de Deploy do Servidor](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
  - [Como escrever driver de módulo para Wio Link](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- **Software**
  - [Código-fonte no **Github**](https://github.com/Seeed-Studio/Wio_Link)
- **Hardware**
  - [Arquivo de Esquemático em **PDF**](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio%20Node%20v1.0.pdf)
  - [Arquivo de Esquemático em **Eagle**](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip)
- **Certificação**
  - [Certificado CE/FCC/TELEC (apenas) para o módulo core ESP-WROOM-02](https://files.seeedstudio.com/wiki/Wio_Node/Recources/CE-FCC-TELEC_Certified(only)_for_core_module_ESP-WROOM-02.zip)

## Projetos

**Casa Inteligente com Wio Link/Wio Node e aplicativo Telegram**: Construindo uma casa inteligente com seeedstudio Wio-Link/Wio-Node e conectando-a a um bot do Telegram.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/smart-home-with-wio-link-wio-node-and-telegram-app-831f78/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
