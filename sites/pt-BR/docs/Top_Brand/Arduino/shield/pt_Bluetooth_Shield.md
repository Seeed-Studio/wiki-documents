---
description: Shield Bluetooth
title: Shield Bluetooth
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bluetooth_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Bluetooth_Shield/
---
<!-- ---
name:  Bluetooth Shield
category: Discontinued
bzurl:
oldwikiname: Bluetooth_Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Bluetooth-Shield
sku: 113030002
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield.jpg)

O Shield Bluetooth integra um módulo Bluetooth Serial. Ele pode ser facilmente usado com Arduino/Seeedstudio para comunicação serial sem fio transparente. Você pode escolher dois pinos do Arduino D0 a D7 como portas Serial por software para se comunicar com o Shield Bluetooth (D0 e D1 são portas Serial por hardware). O shield também possui dois conectores Grove (um Digital e outro Analógico) para você instalar módulos Grove.

Modelo:[SLD63030P](https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=19_21)

## Recursos ##

- Tensão de entrada: 3,3 V

- Taxa de transmissão (baudrate): 9600, 19200, 38400, 57600, 115200, 230400, 460800

- Compatível com Seeeduino/Arduino

- Até 10 m de distância de comunicação em ambiente interno sem obstáculos

- Interface UART (TTL) com taxa de transmissão programável (firmware SPP instalado)

- Taxa de transmissão padrão: 38400, bits de dados: 8, bit de parada: 1, paridade: Sem paridade

- PINCODE padrão: ”0000”

- Conjunto completo de comandos de configuração

- Antena PCB onboard

- Certificado FCC Parte 15

## Função da interface ##

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/BluetoothInterface.jpg)

| Tipo de Pad  |   Descrição |
|---|---|
| PIO1  |   Porta de indicação de status do módulo Bluetooth que pode ser lida pela porta Arduino A1: nível baixo-desconectado, nível alto-conectado. |
|  BT_RX  |  Entrada de dados UART do módulo Bluetooth.  |
|  BT_TX  |   Saída de dados UART do módulo Bluetooth. |
|   Dois conectores Grove |   Um é Digital (D8 e D9), o outro é I2C/Analógico (A4 e A5). |

## Demonstração 1：Conectar Dois Shield Bluetooth ##

Esta demonstração mostrará como conectar dois Shield Bluetooth.

Você precisa de duas placas [Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7), um [Grove - Button](https://www.seeedstudio.com/depot/grove-button-p-766.html?cPath=85_50) e um [Grove - LED](https://www.seeedstudio.com/depot/grove-led-p-767.html?cPath=81_35).

Um Shield Bluetooth será o Master e o outro o Slave, com um botão conectado ao Master e um LED conectado ao Slave.

Quando o botão for pressionado, o LED no Slave irá mudar.

### Instalação de Hardware ###

Primeiro, escolhemos um Shield Bluetooth como Master e conectamos o Grove - Button aos pinos D8, D9 desse Shield Bluetooth.

Para o Slave, conectamos o Grove - LED ao Grove D8, D9 dele. E D7 como TX, D6 como RX, como a seguir:

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_2_connect.jpg)

### Baixar o Código e Fazer o Upload ###

1. Você pode baixar o código no GitHub, clique [aqui](https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code), depois extraia-o para a pasta libraries do Arduino.

2. Abra a Arduino IDE, vá em File -> Examples -> Bluetooth_Shield_Demo_Code -> Master_Button, então você poderá abrir o código do Master

3. Abra a Arduino IDE, vá em File -> Examples -> Bluetooth_Shield_Demo_Code -> Slave_led, então você poderá abrir o código do Slave

4. Clique em Upload para fazer o upload do código; se você tiver qualquer problema sobre como começar a usar o Arduino, clique [aqui](https://seeeddoc.github.io/Getting_Started_with_Seeeduino/) para obter ajuda.

 ![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_ide_1.jpg)

### Verificar o Resultado ###

1. Após terminar de enviar o código tanto para o Master quanto para o Slave, reinicie os dois dispositivos ao mesmo tempo

2. Você verá os LEDs vermelho e verde piscarem, indicando que os dispositivos estão inicializando e conectando.

3. Após alguns segundos, apenas o LED verde piscará, indicando que o Master e o Slave foram conectados.

4. Agora você pode pressionar o botão, então o LED mudará de estado.

**Nota**: Se o fenômeno acima não for observado, tente desconectar a alimentação e reconectar novamente.

## Demonstração 2：Conectar a um Smartphone ##

Esta demonstração mostrará como conectar o Shield Bluetooth a um smartphone.

Precisamos de um Seeeduino V3.0, um Grove - Temperature Sensor e, além disso, um smartphone com função Bluetooth.

Por meio de um aplicativo Bluetooth SPP, enviamos um 't' ao Shield Bluetooth e então ele retornará a temperatura.

### Instalação de Hardware ###

Conecte o Grove - Temperature Sensor ao Grove A4, A5 do Shield Bluetooth.

TX conecta ao D7 enquanto RX conecta ao D6, como a seguir:

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Phone.jpg)

### Baixar o Código e Fazer o Upload ###

1. Você pode baixar o código no GitHub, clique [aqui](https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code), depois extraia-o para a pasta libraries do Arduino.

2. Abra a Arduino IDE, File -> Examples -> Bluetooth_Shield_Demo_Code -> Slave_Temperature, então você poderá abrir o código

3. Clique em Upload para fazer o upload do código; se você tiver qualquer problema sobre como começar a usar o Arduino, clique [aqui](https://seeeddoc.github.io/Getting_Started_with_Seeeduino/) para obter ajuda.

 ![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Demo2.jpg)

### Baixar um App SSP ###

Aqui usamos um telefone Android, o meu é um Xiaomi 2A; abra a Google Play, pesquise por bluetooth spp e você encontrará muitos resultados.

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Find_spp.png)

A maioria desses aplicativos é útil; basta escolher um e experimentar.

### Obter a Temperatura ###

Depois de instalar um app SPP, tente conectá-lo ao SeeedBTSlave, o código PIN é: "0000"

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_App_1.png)

Quando a conexão estiver ok, envie 't' para o SeeedBTSlave e você poderá obter a temperatura:

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_get_temp.png)

## Projetos Relacionados ##

É uma pena que ainda não tenhamos nenhum demo sobre o Shield Bluetooth no [Recipe](https://www.seeedstudio.com/recipe/).

Publique seu projeto incrível sobre o CAN BUS Shield para ganhar um cupom de US$ 100! Sinta-se à vontade para entrar em contato conosco: [recipe@seeed.cc](mailto:recipe@seeed.cc)

Aqui apresentamos alguns projetos sobre [Serial port bluetooth module](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html).

### O que é o Serial Port Bluetooth Module ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Serial_Port_Bluetooth_Module_.jpg)

Serial port Bluetooth, substituição imediata para conexões seriais com fio, uso transparente. Você pode usá-lo simplesmente como um substituto de porta serial para estabelecer conexão entre um MCU e um GPS, um PC e seu projeto embarcado etc.

### Demo do Serial Port Bluetooth Module ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Control_Multiple_servo_Motor_From_android_app.jpg)

Este é um tutorial completo sobre como controlar vários motores de servo a partir de um aplicativo Android através do Serial Port Bluetooth Module.

[Quero fazer isso](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html).

### Compartilhe Seus Projetos Incríveis Conosco ###

Nascido com o espírito de fazer e compartilhar, é isso que acreditamos que faz um maker.

E só por causa disso a comunidade de código aberto pode ser tão próspera como é hoje.

Não importa quem você é e o que você fez, hacker, maker, artista ou engenheiro.

Desde que você comece a compartilhar seus trabalhos com outras pessoas, você já faz parte da comunidade de código aberto e está fazendo suas contribuições.

Agora compartilhe seus projetos incríveis conosco no [Recipe](https://www.seeedstudio.com/recipe/) e ganhe a chance de se tornar um Usuário Core da Seeed.

- Usuários Core são aqueles que mostram grande interesse nos produtos Seeed e fazem contribuições significativas no Recipe.

- Nós cooperamos com nossos Usuários Core no desenvolvimento de nosso novo produto; em outras palavras, os Usuários Core terão a chance de experimentar qualquer novo produto da Seeed antes de seu lançamento oficial e, em troca, esperamos deles feedback valioso para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E, na maioria dos casos, quando nossos Usuários Core têm boas ideias para fazer coisas, oferecemos peças de hardware, serviços de PCBA e também suporte técnico. Além disso, uma cooperação comercial adicional com os Usuários Core é altamente possível.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[EAGLE]**[Esquemático e layout em formato Eagle](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip)
- **[PDF]**[BlueTooth Shield SCH](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20SCH.pdf)
- **[PDF]**[BlueTooth Shield PCB](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20PCB.pdf)
- **[Library]**[Biblioteca do Bluetooth Shield para Arduino 1.0](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BluetoothShieldDemoCode_For_Arduino1.0.zip)
- **[Instruction]**[Instruções do software Bluetooth](https://seeeddoc.github.io/Bluetooth_Shield/res/BTSoftware_Instruction.pdf)
- **[Datasheet]**[Bluetooth - módulo Datasheet](https://seeeddoc.github.io/Bluetooth_Shield/res/Bluetooth_module.pdf)
- **[Connections]** [Configurar conexões entre dois BluetoothBee passo a passo](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
