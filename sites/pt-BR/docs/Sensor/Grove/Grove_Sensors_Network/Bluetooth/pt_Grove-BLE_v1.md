---
title: Grove BLE v1
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-BLE_v1/
slug: /Grove-BLE_v1
sku: 113020007
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-BLE_v1/
---


![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_front.png)![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_Back.png)

Grove - BLE v1 (Grove - Bluetooth Low Energy v1) usa um módulo Bluetooth de baixo consumo -- **HM-11**, baseado no chip TI CC2540, que tem suporte a comandos AT. Como um produto Grove, é conveniente usar o Grove - BLE com uma placa Arduino via Base Shield.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-BLE-p-1929.html)

Parâmetros
----------

| Especificações      | Nome                                                             |
|---------------------|------------------------------------------------------------------|
| Versão BT           | Bluetooth Specification V4.0 BLE                                 |
| Frequência de trabalho   | Banda ISM de 2,4GHz                                             |
| Método de modulação | GFSK(Gaussian Frequency Shift Keying)                            |
| Potência de RF      | -23dbm, -6dbm, 0dbm, 6dbm, pode ser modificada via comando AT AT+POWE |
| Velocidade          | Assíncrona: 6K Bytes, Síncrona: 6K Bytes                         |
| Sensibilidade       | ≤-84dBm a 0,1% BER                                               |
| Segurança           | Autenticação e criptografia                                     |
| Serviço             | Central & Peripheral UUID FFE0,FFE1                              |
| Tensão de alimentação | 3.3v - 5v                                                       |
| Temperatura de trabalho | –5 ~ +65 graus Celsius                                         |
| Tamanho             | 40cm x 20cm                                                      |
| Corrente de trabalho     | &lt; 10 mA                                                       |
| Corrente de fornecimento | &lt; 20 mA                                                       |
| Corrente em modo de espera | &lt; 1 mA                                                     |

<!-- <div class="admonition caution">
<p class="admonition-title">Attention</p> -->
:::note
A tensão de alimentação do HM-11 é 3.3v, mas o Grove - BLE é 3.3V a 5V.
:::

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

### Pinout

O conector Grove tem quatro fios: GND, VCC, RX, TX.

### Características do Projeto

Usamos o chip TD6810 como regulador de tensão, então a faixa da tensão de alimentação pode ser de 3.3v a 5v. Além disso, há um circuito de mudança de nível que garante a precisão da transmissão de dados.

### Comandos AT

**1）Consultar endereço do módulo**

Enviar： AT+ADDR?

Receber：OK+LADD:address

**2） Consultar taxa de baud**

Enviar：AT+BAUD?

Receber：OK+Get:[para1]

Faixa： 0~8; 0--9600，1--19200，2--38400，3--57600，4--115200，5--4800，6--2400，7--1200，8--230400

Padrão: 0--9600.

**Configurar taxa de baud**

Enviar：AT+BAUD[para1]

Receber：OK+Set:[para1]

Ex.：Enviar ：AT+BAUD1 ，Receber：OK+Set:1. A taxa de baud foi configurada para 19200

<!-- <div class="admonition note">
<p class="admonition-title">Note</p> -->
:::note
Se configurar para o valor 7, após a próxima energização, o módulo não aceitará nenhum comando AT até que PIO0 seja pressionado; então o módulo mudará a taxa de baud para 9600.
:::
<!-- </div> -->

**3） Tentar conectar a um endereço**

Enviar：AT+CON[para1]

Receber：OK+CONN[para2]

Faixa ：A,E,F

Ex.：Tentar conectar a um dispositivo cujo endereço MAC é 00:17:EA:09:09:09

Enviar: AT+CON0017EA090909

Pode receber uma resposta: OK+CONNA --> Aceitou a solicitação, conectando ; OK+CONNE --> Erro de conexão ; OK+CONN --> Conectado, se AT+NOTI1 estiver configurado ; OK+CONNF --> Falha na conexão, após 10 segundos

<!-- <div class="admonition note">
<p class="admonition-title">Note</p> -->
:::note
Apenas o papel central é usado. Se o dispositivo remoto já estiver conectado a outro dispositivo ou desligado, “OK+CONNF” será recebido depois de cerca de 10 segundos.
:::
<!-- </div> -->

**4） Limpar endereço do último dispositivo conectado**

Enviar：AT+CLEAR

Receber：OK+CLEAR

**5） Consultar modo de trabalho do módulo**

Enviar：AT+MODE?

Receber：OK+Get:[para]

Faixa： 0~2;

0--Modo de transmissão, 1--Modo de coleta PIO + Modo 0, 2--Modo de controle remoto + Modo 0 .

Padrão: 0

**Configurar modo de trabalho do módulo**

Enviar：AT+MODE[]

Receber：OK+Set:[para]

**6） Consultar nome do módulo**

Enviar：AT+NAME?

Receber：OK+NAME[para1]

**Configurar nome do módulo**

Enviar：AT+NAME[para1]

Receber：OK+Set:[para1]

Ex.：Enviar: AT+NAMESeeed， Receber : OK+Set:Seeed

<!-- <div class="admonition note">
<p class="admonition-title">Note</p> -->
:::note
O nome será alterado após a próxima energização.
:::
<!-- </div> -->

**7） Consultar código PIN**

Enviar：AT+PASS?

Receber：OK+PASS:[para1]

Faixa : 000000~999999.

Padrão : 000000.

**Configurar código PIN**

Enviar: AT+PASS[para1]

Receber：OK+Set:[para1]

**8） Restaurar todos os valores de configuração para os de fábrica**

Enviar：AT+RENEW

Receber：OK+RENEW

**9） Reiniciar módulo**

Enviar：AT+RESET

Receber：OK+RESET

**10）Consultar função de Mestre e Escravo**

Enviar：AT+ROLE[para1]

Receber：OK+Set:[para1]

Faixa : 0~1;

0--Peripheral : 1--Central : Padrão: 0.

Para mais comandos AT, consulte o Datasheet do módulo BLE.

Comunicação SoftwareSerial
----------------------------

![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_connection1.png)

O Grove - BLE pode ser usado como mestre ou escravo, você pode usar qualquer um deles por meio de diferentes demos.**Se você for usar o seguinte programa SoftwareSerial, consulte a forma de conexão na imagem anterior. TX-->D2, RX-->D3.**

Abra o Arduino IDE, copie o programa a seguir e faça o upload para a placa Arduino/Seeeduino. Em seguida, dois módulos BLE podem se comunicar entre si.

**Demo : BLE Escravo**

```
    #include <SoftwareSerial.h>   //Software Serial Port
    #define RxD 2
    #define TxD 3

    #define DEBUG_ENABLED  1

    SoftwareSerial BLE(RxD,TxD);

    void setup()
    {
      Serial.begin(9600);
      pinMode(RxD, INPUT);
      pinMode(TxD, OUTPUT);
      setupBleConnection();

    }

    void loop()
    {
      char recvChar;
      while(1){
        if(BLE.available()){//check if there's any data sent from the remote BLE
          recvChar = BLE.read();
          Serial.print(recvChar);
        }
        if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
          recvChar  = Serial.read();
          BLE.print(recvChar);
        }
      }
    }

    void setupBleConnection()
    {
      BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
      BLE.print("AT+CLEAR"); //clear all previous setting
      BLE.print("AT+ROLE0"); //set the bluetooth name as a slaver
      BLE.print("AT+SAVE1");  //don't save the connect information
    }
```

**Demo : BLE Mestre**

```
    #include <SoftwareSerial.h>   //Software Serial Port
    #define RxD 2
    #define TxD 3

    #define DEBUG_ENABLED  1

    SoftwareSerial BLE(RxD,TxD);

    void setup()
    {
      Serial.begin(9600);
      pinMode(RxD, INPUT);
      pinMode(TxD, OUTPUT);
      setupBleConnection();

    }

    void loop()
    {
      char recvChar;
      while(1){
        if(BLE.available()){//check if there's any data sent from the remote BLE
          recvChar = BLE.read();
          Serial.print(recvChar);
        }
        if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
          recvChar  = Serial.read();
          BLE.print(recvChar);
        }
      }
    }

    void setupBleConnection()
    {
      BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
      BLE.print("AT+CLEAR"); //clear all previous setting
      BLE.print("AT+ROLE1"); //set the bluetooth name as a master
      BLE.print("AT+SAVE1");  //don't save the connect information
    }
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [BLE_apk_for_Android](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/HMBLEComAssistant.rar)
- [Datasheet of BLE module](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Bluetooth4_en.pdf)
- [Schematic](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_BLE_v1 -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
