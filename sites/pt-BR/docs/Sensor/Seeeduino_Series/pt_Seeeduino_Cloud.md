---
description: Seeeduino Cloud
title: Seeeduino Cloud
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Cloud
sku: 102010021
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Cloud/
---

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_cover.jpg)

Seeeduino Cloud é uma placa microcontroladora baseada no [módulo Dragino WiFi IoT HE](http://www.dragino.com/products/linux-module/item/87-he.html) e no ATmega32u4. HE é um módulo WiFi 2.4G de 150M, alto desempenho e baixo custo, que significa “núcleo” em chinês e possui um sistema Open Source OpenWrt interno. Seeeduino Cloud também é uma placa compatível com Arduino, 100% compatível com Grove, shield e IDEs (Arduino IDE 1.5.3 e posterior). Exceto pela interface normal do Arduino, o Seeeduino Cloud possui Ethernet e WiFi integrados, uma porta USB-A que o torna muito adequado para aqueles projetos de prototipagem que precisam de conexão de rede e armazenamento em massa. Também é uma boa ideia usar o Seeeduino Cloud como um gateway IoT.

[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html)

## Ideias de Aplicação

* Internet das Coisas  
* Casa Inteligente
* Aprendizado

Aqui estão alguns projetos divertidos para sua referência.

|Mensageiro Wi-Fi Simples|Enviar dados para o Google Docs|Sistema de Monitoramento de Painel Solar|
|--------|----------|---------|
|![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_1.jpg)|![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_2.jpg)|![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_3.jpg)|
|[Faça agora](https://www.instructables.com/id/Arduino-Yun-Messager/)|[Faça agora](https://www.instructables.com/id/Google-Docs-and-the-Arduino-Y%C3%BAn/)|[Faça agora](https://www.instructables.com/id/Arduino-Yun-Solar-Panel-Monitoring-System/)|

## Recursos

* Compatível com Arduino Yun
* Baseado no módulo Dragino WiFi IoT HE
* Sistema Open Source OpenWrt interno
* Suporta WiFi 2.4Ghz, 802.11 b/g/n
* Suporta Ethernet
* Suporta USB 2.0
* Conectores Grove on-board

## Especificação

Como o Seeeduino Cloud possui dois processadores, esta seção mostra as características de cada um em duas tabelas separadas.

**Módulo Dragino HE**

|Parâmetro|Valor|
|------------|------------|
|CPU|ATHEROS AR9331|
|Velocidade de Clock|400MHz|
|RAM|64MB|
|Flash|16MB|
|SO|OpenWrt|
|Interfaces|2 x RJ45, 1 x USB Host, 1 x UART, 14 GPIOs multiplexados|
|Alimentação|Entrada de Alimentação 3,3V|
|WiFi|Suporta WiFi 150M 2,4Ghz, 802.11 b/g/n|

**Microcontrolador AVR Arduino**

|Parâmetro|Valor|
|------------|-------------|
|Microcontrolador|ATmega32u4|
|Memória Flash|32KB|
|SRAM|2,5kB|
|EEPROM|1kB|
|Velocidade de Clock|16MHz|
|Tensão de Operação|5V|
|Pinos Digitais de E/S|20|
|Canais PWM|7|
|Canais de Entradas Analógicas|12|

## Visão Geral do Hardware

As imagens abaixo mostram uma visão geral dos recursos de hardware do Seeeduino Cloud. O diagrama de pinagem e funções alternativas de vários pinos do Seeeduino Cloud é mostrado no diagrama de pinagem. Isso pode ser usado como uma referência rápida.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_hardware.png)

* **Porta Ethernet RJ45**
A porta LAN é conectada ao ATHEROS AR9331 e possui seu próprio endereço IP que pode ser usado para conexão com a Internet e gerenciamento do dispositivo.
* **Entrada USB**
A porta USB é usada para conectar a placa ao seu PC para programação e alimentação. Micro USB é a versão onipresente do USB, encontrada na maioria dos telefones Android e outros dispositivos. Você provavelmente tem dezenas desses cabos espalhados pela sua casa.
* **USB HOST**
O Seeeduino Cloud fornece capacidade de host USB que permite conectá-lo a vários dispositivos USB, como webcams, unidades USB, teclados, joysticks e muito mais.
* **32U4 RST**
Pressionar o botão de Reset do 32U4 irá reiniciar o MCU ATmega32U4. Normalmente, ele é usado para reiniciar o seu sketch.
* **SYS RST**
Pressionar o botão de Reset do Sistema irá reiniciar o sistema Linux.
* **Wi-Fi RST**
O botão de Reset do Wi-Fi suporta apenas pressionamento longo. Quando pressionado e solto após 5 segundos, ele irá redefinir as configurações de WiFi. Outras configurações serão mantidas. Se o botão for pressionado e solto após 30 segundos, ele irá redefinir TODAS as configurações para o padrão de fábrica.
* **Conectores Grove**
A SeeedStudio possui uma variedade de sensores/dispositivos que podem usar essa conexão I2C ou UART. Além disso, vendemos conectores Grove independentes para ajudá-lo a fazer suas próprias conexões de sensores. O conector Grove I2C também está conectado aos pinos analógicos A4 e A5 para SDA e SCL, respectivamente, se você quiser usar esses pinos em vez disso. O conector Grove UART está conectado aos pinos digitais 0 e 1 para RX e TX, respectivamente.
* **ICSP**
Esta é a conexão ICSP para o ATmega32U4, localizada na posição padrão ICSP/SPI para hardware compatível com Arduino Uno, Due, Mega e Leonardo (por exemplo, shields) que possam usar esse conector. Os pinos SPI nesta porta: MISO, SCK e MOSI, também estão conectados aos pinos digitais 12, 13 e 11, respectivamente, assim como no Arduino Uno.
* **Conector I-PEX**
Este é um Conector I-PEX para uma antena externa.
* **Pinos**
Não é possível acessar os pinos de E/S do Atheros AR9331. Todas as linhas de E/S estão ligadas ao ATmega32U4.
Cada um dos 20 pinos digitais do 32U4 pode ser usado como entrada ou saída, usando as funções pinMode(), digitalWrite() e digitalRead(). Eles operam em 5 volts. Cada pino pode fornecer ou receber um máximo de 40 mA e possui um resistor de pull-up interno (desconectado por padrão) de 20-50 kOhms.
Além disso, alguns pinos têm funções especializadas:
  * Serial: 0 (RX) e 1 (TX). Usados para receber (RX) e transmitir (TX) dados seriais TTL usando o recurso de serial de hardware do ATmega32U4. Observe que no Seeeduino Cloud, a classe Serial refere-se à comunicação USB (CDC); para serial TTL nos pinos 0 e 1, use a classe Serial1. As seriais de hardware do ATmega32U4 e do AR9331 no Seeeduino Cloud estão conectadas entre si e são usadas para comunicar entre os dois processadores. Como é comum em sistemas Linux, na porta serial do AR9331 é exposto o console para acesso ao sistema, o que significa que você pode acessar os programas e ferramentas oferecidos pelo Linux a partir do seu sketch.
  * TWI: 2 (SDA) e 3 (SCL). Suportam comunicação TWI usando a biblioteca Wire.
  * Interrupções Externas: 3 (interrupção 0), 2 (interrupção 1), 0 (interrupção 2), 1 (interrupção 3) e 7 (interrupção 4). Esses pinos podem ser configurados para disparar uma interrupção em um nível baixo, uma borda de subida ou descida, ou uma alteração de valor. Veja a função attachInterrupt() para detalhes. Não é recomendado usar os pinos 0 e 1 como interrupções porque eles também são a porta serial de hardware usada para se comunicar com o processador Linux. O pino 7 está conectado ao processador AR9331 e pode ser usado como sinal de handshake no futuro. Recomenda-se ter cuidado com possíveis conflitos se você pretende usá-lo como interrupção.
  * PWM: 3, 5, 6, 9, 10, 11 e 13. Fornecem saída PWM de 8 bits com a função analogWrite().
  * SPI: no conector ICSP. Esses pinos suportam comunicação SPI usando a biblioteca SPI. Observe que os pinos SPI não estão conectados a nenhum dos pinos digitais de E/S como estão no Uno, eles estão disponíveis apenas no conector ICSP. Isso significa que se você tiver um shield que use SPI, mas NÃO tenha um conector ICSP de 6 pinos que se conecte ao cabeçalho ICSP de 6 pinos do Seeeduino Cloud, o shield não funcionará. Os pinos SPI também estão conectados aos pinos gpio do AR9331, onde foi implementada em software a interface SPI. Isso significa que o ATMega32u4 e o AR9331 também podem se comunicar usando o protocolo SPI.
  * Entradas Analógicas: A0 - A5, A6 - A11 (nos pinos digitais 4, 6, 8, 9, 10 e 12). O Seeeduino Cloud possui 12 entradas analógicas, rotuladas de A0 a A11, todas as quais também podem ser usadas como E/S digitais. Os pinos A0-A5 aparecem nas mesmas posições que no Uno; as entradas A6-A11 estão nos pinos de E/S digitais 4, 6, 8, 9, 10 e 12, respectivamente. Cada entrada analógica fornece 10 bits de resolução (ou seja, 1024 valores diferentes). Por padrão, as entradas analógicas medem de terra a 5 volts, embora seja possível alterar o limite superior de sua faixa usando o pino AREF e a função analogReference().
  * AREF. Tensão de referência para as entradas analógicas. Usado com analogReference().

## Primeiros Passos

O Seeeduino Cloud possui dois processadores na placa. Um é um ATmega32U4 como no Leonardo. O outro é um Atheros 9331, executando Linux e a pilha sem fio OpenWRT, o que permite que a placa se conecte a redes WiFi e Ethernet. Com a [Yun Bridge Library](https://www.arduino.cc/en/Reference/YunBridgeLibrary), é possível chamar programas ou scripts personalizados no sistema Linux através do Arduino para se conectar a vários serviços de internet.

### Programar no lado do ATmega32U4

O ATmega32U4 é programado usando o [Arduino Software (IDE)](https://www.arduino.cc/en/Main/Software?setlang=en); se você ainda não o instalou, clique [aqui](https://www.arduino.cc/en/Guide/HomePage) para obter instruções de instalação.

**Instalar o Driver**

Antes de tudo, você precisa:

* **Obter um cabo Micro-USB**
  * Primeiro você precisa de um cabo Micro-USB; o cabo de dados de um telefone Android servirá bem.
Se você não conseguir encontrar um, pode comprar um [aqui](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

:::caution
Manuseie o soquete micro USB com cuidado, ou você pode acabar quebrando-o.
:::

* **Conectar a placa**
  * O Seeeduino Cloud obtém automaticamente energia tanto da conexão USB com o computador quanto de uma fonte de alimentação externa. Conecte a placa Arduino ao seu computador usando o cabo USB. O LED verde de alimentação (rotulado **PWR**) deve acender.

**Para Windows**

A versão para Windows do Arduino Software (IDE) já contém os drivers adequados. Quando você o instalou, permitiu que o sistema operacional os instalasse. Conecte seu Seeeduino Cloud e os drivers serão instalados automaticamente.

**Para MAC**

Quando você conecta um Seeeduino Cloud a um Mac pela primeira vez, o "Keyboard Setup Assistant" será iniciado. Não há nada para configurar no Seeeduino Cloud; você pode fechar esta caixa de diálogo clicando no botão vermelho no canto superior esquerdo da janela.

**Para Linux**

Não é necessário instalar drivers para Ubuntu 10.0.4 e posteriores, mas certifique-se de que a porta 5353 não esteja sendo bloqueada por um firewall.

**Abra seu primeiro sketch**

Abra o sketch de exemplo de piscar LED: File > Examples >01.Basics > Blink.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Load_Blink.jpg)

**Selecione o tipo de placa e a porta**

Você precisará selecionar o item no menu Tools > Board que corresponde à sua placa Arduino ou Genuino.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelBoard.jpg)

Selecione o dispositivo serial da placa no menu Tools | Serial Port. Provavelmente será COM3 ou superior (COM1 e COM2 geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino ou Genuino. Reconecte a placa e selecione essa porta serial. Quando sua placa estiver devidamente configurada no WiFi, você a encontrará na lista Port, como na nossa captura de tela.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelPort.jpg)

**Envie o programa**

Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos - você deverá ver os LEDs RX e TX na placa piscando. Se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Upload.png)

Alguns segundos após o término do envio, você deverá ver o LED(D13) na placa começar a piscar (em verde). Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

### Programar no lado ATHEROS AR9331

**Configurar Rede**

O Seeeduino Cloud possui uma interface WiFi e uma porta LAN. Qualquer uma delas possui um endereço IP que pode ser usado para conexão à internet e gerenciamento do dispositivo.

**1. Modo Wi-Fi AP**

Quando você liga o Seeeduino Cloud pela primeira vez, haverá uma rede WiFi não segura chamada SeeeduinoCloud-AXXXX exibida nas conexões WiFi.
Você pode conectar seu computador a essa rede como mostrado abaixo. Seu computador obterá um IP dessa rede **192.168.240.xxx**. O Seeeduino Cloud tem um endereço IP padrão de **192.168.240.1**.

**2. Modo Wi-Fi STA**

Depois de conectar a SeeeduinoCloud-AXXXX, digite 172.31.255.254 ou 192.168.240.1 na caixa de pesquisa do navegador e você se conectará ao Seeeduino Cloud com a interface web. A senha padrão é "seeeduino", então clique em LOG IN.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_login.png)

Clique em "SYSTEM", selecione sua rede Wi-Fi, insira a senha e clique em "CONFIGURE & RESTART".

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_sta.png)

**3. Ethernet onboard**

Quando você conecta o Seeeduino Cloud a uma rede cabeada com um cabo ethernet, ele tentará se conectar automaticamente via DHCP. A placa aparecerá no menu de portas assim como apareceria via WiFi.

### Firmware Sysupgrade

Abaixo está detalhado como usar o navegador para atualizar o novo firmware.

* Grave File -> Examples -> Birdge -> YunSerialTerminal.ino no Seeeduino Cloud

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YunSerialTerminal.png)

* Encontre o IP do Seeeduino Cloud digitando `ifconfig` no putty que pode se comunicar com o Seeeduino Cloud

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/putty_configure.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/inet_addr.png)

* Visite o Seeeduino Cloud digitando o IP do Seeeduino Cloud no navegador. e a senha é `seeeduino`

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/password.png)

* Obtenha [newest_Firmware](http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/)

* Atualize através do botão de upgrade.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade_configure.png)

### Terminal

Você pode acessar o terminal do Seeeduino Cloud via SSH para programar ou configurar no lado ATHEROS AR9331.

* Baixe um cliente SSH, como o [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
* Use o endereço IP do Seeeduino Cloud e execute o cliente SSH.

```
username: root
password: seeeduino
```

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_terminal.png)

### Biblioteca Yun Bridge

A Bridge Library simplifica a comunicação entre a placa Arduino e o Dragino HE. Os comandos Bridge vindos do AVR (placa Arduino) são interpretados em Python no HE.
Sua função é

* executar programas no lado GNU/Linux quando solicitado pelo Arduino,
* fornecer um espaço de armazenamento compartilhado para compartilhar dados como leituras de sensores entre o Arduino e a Internet
* receber comandos da Internet e passá-los diretamente para o Arduino.
Existem explicações detalhadas e muitos exemplos que mostram como usar a Bridge no [site oficial do Arduino](https://www.arduino.cc/en/Reference/YunBridgeLibrary). A seguir estão alguns exemplos que utilizam a Bridge Library.

**Exemplo 1: Diga olá ao Linux**

Este exemplo é um teste de olá entre o Arduino e o Seeeduino Cloud. O exemplo pode ser encontrado na Arduino IDE--> File --> Examples --> Bridge --> ConsoleRead. Um tutorial deste exemplo pode ser encontrado [aqui](https://www.arduino.cc/en/Tutorial/ConsoleRead). Você pode ver o código abaixo com alguns detalhes adicionais para entendê-lo com o Seeeduino Cloud:

```
#include <Console.h>

String name;

void setup() {
    // Initialize Console and wait for port to open:
    Bridge.begin();
    Console.begin();

    // Wait for Console port to connect
    while (!Console);

    Console.println("Hi, what's your name?");
}

void loop() {
    if (Console.available() > 0) {
        char c = Console.read(); // read the next char received
        // look for the newline character, this is the last character in the string
        if (c == '\n') {
            //print text with the name received
            Console.print("Hi ");
            Console.print(name);
            Console.println("! Nice to meet you!");
            Console.println();
            // Ask again for name and clear the old name
            Console.println("Hi, what's your name?");
            name = "";  // clear the name string
        }
        else {       // if the buffer is empty Cosole.read() returns -1
            name += c; // append the read char from Console to the name string
        }
    }
}

```

**Exemplo 2: Registrar dados em pen drive USB**

Este exemplo mostra como registrar dados em um pen drive USB. O sketch usado neste exemplo é o mesmo que [aqui](http://wiki.dragino.com/index.php?title=Arduino_Yun_examples#Log_sensor_data_to_USB_flash). E o código-fonte pode ser encontrado lá.
O Seeeduino Cloud irá montar automaticamente o pen drive USB no diretório /mnt/sda1. E o sketch irá acrescentar os dados do sensor ao arquivo /mnt/sda1/data/datalog.csv. Portanto, certifique-se de que exista esse arquivo no pen drive USB antes de executar o sketch.

```
#include <FileIO.h>     //FileIO class allow user to operate Linux file system
#include <Console.h>    //Console class provide the interactive between IDE and Yun Shield
void setup() {
    // Initialize the Console
    Bridge.begin();
    Console.begin();
    FileSystem.begin();
    while(!Console);   // wait for Serial port to connect.
    Console.println("Filesystem datalogger\n");
}
void loop () {
    // make a string that start with a timestamp for assembling the data to log:
    String dataString;
    dataString += getTimeStamp();
    dataString += " , ";
    // read three sensors and append to the string:
    for (int analogPin = 0; analogPin < 3; analogPin++) {
        int sensor = analogRead(analogPin);
        dataString += String(sensor);
        if (analogPin < 2) {
            dataString += ",";    // separate the values with a comma
        }
    }
    // open the file. note that only one file can be open at a time,
    // so you have to close this one before opening another.
    // The USB flash card is mounted at "/mnt/sda1" by default
    File dataFile = FileSystem.open("/mnt/sda1/data/datalog.csv", FILE_APPEND);
    // if the file is available, write to it:
    if (dataFile) {
        dataFile.println(dataString);
        dataFile.close();
        // print to the serial port too:
        Console.println(dataString);
    }
    // if the file isn't open, pop up an error:
    else {
        Console.println("error opening datalog.csv");
    }
    delay(15000);  //Write every 15 seconds
}
// getTimeStamp function return a string with the time stamp
// Yun Shield will call the Linux "date" command and get the time stamp
String getTimeStamp() {
    String result;
    Process time;
    // date is a command line utility to get the date and the time
    // in different formats depending on the additional parameter
    time.begin("date");
    time.addParameter("+%D-%T");   // parameters: D for the complete date mm/dd/yy
    //              T for the time hh:mm:ss
    time.run();   // run the command
    // read the output of the command
    while(time.available()>0) {
        char c = time.read();
        if(c != '\n')
        result += c;
    }
    return result;
}

```

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/500px-SeeeduinoCloud_Sketch_USB.png)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **Esquemático**
  * [Arquivo Eagle do Seeeduino Cloud](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip)
  * [Arquivo PDF do Seeeduino Cloud](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_PDF.pdf)

* **Firmware**
  * [Firmware do Seeeduino Cloud](http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/)

* **Referências**
  * [Primeiros Passos com Arduino](https://www.arduino.cc/en/Guide/HomePage)
  * [Referência da Linguagem Arduino](https://www.arduino.cc/en/Reference/HomePage)
  * [Baixar o Software Arduino (IDE)](https://www.arduino.cc/en/Main/Software)
  * [Perguntas Frequentes do Arduino (FAQ)](https://www.arduino.cc/en/Main/FAQ)
  * [Introdução ao Arduino](https://www.arduino.cc/en/guide/introduction)
  * [Página da Wikipédia sobre Arduino](https://en.wikipedia.org/wiki/Arduino)
  * [Arduino Yun Wiki](https://www.arduino.cc/en/Main/ArduinoBoardYun)
  * [Primeiros passos com Arduino Yun](https://www.arduino.cc/en/Guide/ArduinoYun#toc2)
  * [Biblioteca Yun Bridge](https://www.arduino.cc/en/Reference/YunBridgeLibrary)

## FAQ

* O que é a Biblioteca Yun Bridge?

A Biblioteca Yun Bridge é o mecanismo utilizado no Arduino Yun para comunicação entre um MPU e um MCU. O Seeeduino Cloud oferece suporte à Biblioteca Yun Bridge para facilitar para os usuários de Arduino a criação de seus projetos de IoT.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
