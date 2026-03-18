---
description: Seeed BLE Shield v1
title: Seeed BLE Shield v1
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeed_BLE_Shield
sku: 113030013
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeed_BLE_Shield/
---

<!-- ---
name: Seeed BLE Shield v1
category: Shield
bzurl: https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html
oldwikiname:   Seeed BLE Shield v1
prodimagename:  Seeed_BLE-4.png
surveyurl: https://www.research.net/r/Seeed_BLE_Shield_v1
sku:  113030013
--- -->
![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-4.png)

Este Seeed BLE Shield utiliza um módulo HM-11 para fornecer ao seu Arduino/Seeeduino a função BLE serial. Ele usa apenas dois pinos do microcontrolador para comunicar seu dispositivo com este shield. Com suporte para o APK BLE ComAssistant, este BLE Shield pode se comunicar com seu telefone celular mais facilmente, sem emparelhamento. Você pode usá‑lo em muitas situações, como controle de robôs ou equipamentos de controle remoto, etc. Preparamos um conjunto de comandos fácil e conveniente para este shield, para que você possa usar um código limpo e conciso para executar a função.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html)

## Especificações

---
<table>
  <tr>
    <th>Especificações</th>
    <th>Valor</th>
  </tr>
  <tr>
    <td width="300px">Versão BT</td>
    <td width="500px">Especificação Bluetooth V4.0 BLE</td>
  </tr>
  <tr>
    <td>Frequência de trabalho</td>
    <td>Banda ISM de 2,4GHz</td>
  </tr>
  <tr>
    <td>Corrente de trabalho</td>
    <td>&lt; 15 mA</td>
  </tr>
  <tr>
    <td>Corrente de fornecimento</td>
    <td>&lt; 30 mA</td>
  </tr>
  <tr>
    <td>Corrente em modo de espera</td>
    <td>&lt; 3 mA</td>
  </tr>
  <tr>
    <td>Método de modulação</td>
    <td>GFSK (Gaussian Frequency Shift Keying)</td>
  </tr>
  <tr>
    <td>Potência de RF</td>
    <td>-23dbm, -6dbm, 0dbm, 6dbm, pode ser modificada através do comando AT AT+POWE</td>
  </tr>
  <tr>
    <td>Velocidade</td>
    <td>Assíncrona: 6K Bytes, Síncrona: 6K Bytes</td>
  </tr>
  <tr>
    <td>Sensibilidade</td>
    <td>≤-84dBm em 0,1% BER</td>
  </tr>
  <tr>
    <td>Segurança</td>
    <td>Autenticação e criptografia</td>
  </tr>
  <tr>
    <td>Serviço</td>
    <td>UUID Central &amp; Peripheral FFE0, FFE1</td>
  </tr>
  <tr>
    <td>Alimentação</td>
    <td>5v</td>
  </tr>
  <tr>
    <td>Temperatura de trabalho</td>
    <td>–5 ~ +65 graus Celsius</td>
  </tr>
  <tr>
    <td>Tamanho</td>
    <td>68mm x 43mm</td>
  </tr>
  <tr>
    <td>Código PIN</td>
    <td>000000 (por padrão)</td>
  </tr>
</table>

## Visão geral do hardware

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/BLE_Shield.png)

* HM-11: O módulo básico é o HM-11; para mais informações, você pode consultar este wiki do [HM-11](/pt-br/Bluetooth_V4.0_HM_11_BLE_Module).

* Lâmpada de sinal: A lâmpada piscará se ninguém estiver conectado ao BLE, mas permanecerá acesa depois que o BLE for conectado.

* Conectores Grove: Há dois conectores Grove no BLE Shield; você pode conectar produtos Grove na placa de forma conveniente.

* Porta Hard ou Softserial: Você pode escolher dois dos sete pinos digitais como canal de comunicação. Basta encaixar os jumpers nos headers. **Há dois erros na serigrafia, por favor considere "WIFI_TX" e "WIFI_RX" como "BLE_TX" e "BLE_RX".**

* Pinos reservados do HM-11: Há alguns pinos reservados do módulo HM-11, como CTS1, RTS1 e PIO2, etc.

* Botão de reset: Pressione o botão de reset se precisar reiniciar o BLE Shield. No entanto, esse botão de reset não afeta o estado da placa principal (como o Arduino Uno) se o BLE Shield estiver conectado à placa principal.

## Aplicações

---

### Conexão de hardware

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-2.png)

Conecte o Seeed BLE Shield diretamente ao Arduino/Seeeduino. **Por favor, preste atenção à posição dos jumpers no BLE Shield.**

### Comunicação via SoftwareSerial

O Seeed BLE Shield pode atuar como mestre ou escravo; você pode usar qualquer um deles por meio de diferentes demos. **Se você for usar o seguinte programa SoftwareSerial, consulte a forma de conexão na figura anterior. BLE_TX--&gt;D2, BLE_RX--&gt;D3.**

Abra a IDE do Arduino, copie o programa a seguir e faça o upload para a placa Arduino/Seeeduino. Depois disso, dois BLE Shields podem se comunicar um com o outro.

**Demo : BLE Slave**

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
        if(BLE.available()){//check if there's any data sent from the remote BLE shield
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

**Demo : BLE Master**

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
        if(BLE.available()){//check if there's any data sent from the remote BLE shield
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

### Comunicação via HardwareSerial

Além disso, você pode usar o BLE Shield por meio de comandos AT sem nenhum programa, **mas você precisa mudar as posições dos dois jumpers. BLE_TX--&gt;D1, BLE_RX--&gt;D0.**

Em seguida, abra uma ferramenta de porta serial, como CoolTerm ou outra. A seguir estão algumas configurações: **Baudrate: 9600 (padrão), Data Bits: 8, Parity: none, Stop Bits: 1.**

Primeiro, você pode enviar um (ou alguns) comando(s) "AT" para o BLE Shield para fazer um teste. Se ele retornar um "OK", então você pode executar as etapas seguintes. **Se não, você pode fazer o upload de um programa em branco para o Arduino/Seeeduino** e verificar se consegue obter resposta da ferramenta de porta serial através da operação anterior.

```
void setup()
{
}

void loop()
{
}
```

Em seguida, envie um comando "AT+ROLE0" para o BLE Shield; ele retornará um "OK+Set:0", o que significa que agora o BLE Shield está pronto para atuar como escravo.

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-3.png)

### Comandos AT

Para mais informações sobre os comandos AT, consulte o data sheet do módulo BLE. Você pode baixá‑lo no espaço de recursos.

## Leituras relacionadas

---

* [FAQ sobre o Seeed BLE Shield](/pt-br/Seeed_BLE_Shield). _Além disso, você pode acessar a página de FAQ clicando no botão "FAQ", que fica no lado direito da página wiki do produto._

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

[Esquemático do Seeed BLE Shield](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip)

[BLE_apk_for_Android](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/HMBLEComAssistant.rar)

[DataSheet do módulo BLE](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/Bluetooth4_en.pdf)

## Suporte técnico & discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
