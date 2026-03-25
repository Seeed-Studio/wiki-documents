---
description: BLE Bee
title: BLE Bee
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BLE_Bee
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BLE_Bee/
---

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Ble_bee.jpg)

O BLE Bee é um módulo no formato XBEE habilitado para Bluetooth Smart baseado no módulo HM-11. O BLE Bee pode ser usado em configurações de hardware onde normalmente é usado um módulo XBEE. Usando um BLE Bee, um sistema embarcado com soquete XBee pode se comunicar com computadores desktop, smartphones, tablets e até outros sistemas embarcados que forneçam Bluetooth Smart, também conhecido como Bluetooth Low Energy (BLE).

## Características ##

- Formato compatível com XBee

- Protocolo Bluetooth: Especificação Bluetooth V4.0 BLE

- Frequência de operação: banda ISM de 2,4 GHz

- Interface: uma porta serial

- Em ambiente aberto, dentro de 30 metros pode realizar comunicação entre módulos

- Sem limite de bytes para enviar e receber entre módulos

- Método de modulação: GFSK (Gaussian Frequency Shift Keying)

- Potência de transmissão: - DBM, 23-6 DBM, 0 DBM, 6 DBM, pode ser modificada pelo comando AT

- usa o chip TI CC2540, espaço de configuração de 256 KB, suporta comando AT, o usuário pode de acordo com a necessidade mudar a função (modo mestre, escravo) e a taxa de baud da porta serial, nome do equipamento, parâmetros de pareamento como senhas, uso ágil.

- alimentação: + 3,3 VCC 50 mA

- temperatura de trabalho: - 5 ~ + 65 graus centígrados

## Especificação ##

 |Specification|Value
 |--|--|
 |Microprocessor|CC2540|
 |Resources|Suporta comandos AT, o usuário pode, conforme a necessidade, mudar a função (modo mestre, escravo) e a taxa de baud da porta serial, nome do equipamento, parâmetros de pareamento como senha, com uso flexível.|
 |PCB size|24.5mmx30.5mmx0.8mm|
 |Outline Dimension|24.5mmx30.5mmx9.77mm|
 |Power supply|3.3V|
 |Communication Protocol|Uart(TTL)|
 |IO counts|2|
 |Key input IO|1|
 |LED Indicators IO|1|
 |Connectivity|Soquete compatível com XBee|

## Características Elétricas ##

| Specification|Min|Typ|Max|Unit
|--|--|--|--|--|
 |Max Input Voltage|-0.3||3.6|V|
 |Working Input Voltage|2.0|3.3|3.6|V|
 |Transmit Current||15|| mA|
 |Receive Current||8.5||mA|
 |Deep Sleep Current||600||uA|
 |Operating Temperature|-40||125|°C|

## Definição dos pinos ##

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/BLE_BEE11.jpg)

Nota: Apenas funções alternativas importantes são listadas, pode haver mais, por favor consulte o datasheet.

## Uso ##

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Ble_bee_user.jpg)

- Conecte o Seeed BLE Shield diretamente ao Arduino/Seeeduino. **Por favor, preste atenção à posição dos jumpers no XBee Shield.**

- Porta Hard ou SoftwareSerial: você pode escolher dois dos sete pinos digitais como canal de comunicação. Basta encaixar os jumpers nos headers.

- Lâmpada de sinal: a lâmpada piscará se ninguém conectar ao BLE, mas a lâmpada permanecerá acesa depois que o BLE estiver conectado.

## Comandos AT e Configuração ##

**1） Consultar o endereço MAC nativo**

Enviar: AT + ADDR?

Após envio bem-sucedido retorna: OK + LADD: endereço MAC (endereço em 12 caracteres)

**2） Consultar a taxa de baud**

Enviar: AT+BAUD?

Após envio bem-sucedido retorna: OK + Get: [para1]

Escopo de para1:0 ~ 8. Os parâmetros correspondem a: 0 representa 9600, 1, 2, representam 9600, 38400, o 3 representa 57600, 4 representa 115200, 5 representa 4800, 6, 7 representam 1200, 8 representa 2400. A taxa de baud padrão é 9600.

**3） Configurar a taxa de baud**

Enviar: AT+BAUD[para1]

Após envio bem-sucedido retorna: OK+Set:[para1]

Exemplo: enviar: AT + BAUD1, retorno: OK + Set: 2. A taxa de baud é configurada para 19200.

Nota: após mudar para 1200, o módulo não irá mais suportar as configurações por comando AT, e ao pressionar o PIO0 em standby, o módulo pode restaurar as configurações de fábrica. Não é recomendado usar essa taxa de baud. Depois de configurar a taxa de baud, o módulo deve ser desligado e ligado novamente para que os novos parâmetros entrem em vigor.

**4） conectar, a partir do dispositivo, ao endereço bluetooth especificado**

Enviar: AT+CON[para1]

Após envio bem-sucedido retorna: OK+CONN[para2]

Intervalo de para2: A, E, F

Exemplo: se o endereço bluetooth de origem é: 0017EA0943AE, enviando AT + CON0017EA0943AE, o módulo retorna: OK + CONNA ou OK + CONNF ou OK + CONNE.

**5） apagar informações de pareamento do dispositivo**

Enviar: AT + CLEAR

Após envio bem-sucedido retorna: OK + CLEAR

Apaga com sucesso as informações de código de endereço de dispositivos que já foram conectados.

**6） consultar modo de operação do módulo**

Enviar: AT + MODE?

Após envio bem-sucedido retorna: OK + Get: [para]

Para: intervalo de 0 ~ 2. 0 representa modo de passagem (passthrough), 1 representa aquisição de PIO + controle remoto + passagem, 2 representa passagem + modo de controle remoto. O padrão é 0.

**7） configurar modo de operação do módulo:**

Enviar: AT + MODE []

Após envio bem-sucedido retorna: OK + Set: [para]

**8） consultar nome do dispositivo**

Enviar: AT + NAME?

Após envio bem-sucedido retorna: OK + NAME [para1]

**9） configurar o nome do dispositivo**

Enviar: AT + NAME [para1]

Após envio bem-sucedido retorna: OK + Set: [para1]

Exemplo: para configurar o nome do dispositivo para Seeed, envie AT + NAMESeeed, retorna OK + Set: Seeed. Neste momento, o nome do módulo bluetooth foi alterado para Seeed.
Nota: após a execução do comando, é necessário desligar e ligar a alimentação para que os parâmetros configurados sejam aplicados.

**10） consultar senha de pareamento**

Enviar: AT + PASS?

Após envio bem-sucedido retorna: OK + PASS: [para1]

O intervalo de para1 é 000000 ~ 999999, o padrão é 000000.

**11） configurar senha de pareamento**

Enviar AT + PASS [para1]

Após envio bem-sucedido retorna: OK + Set: [para1]

**12） restaurar configurações de fábrica**

Enviar AT + RENEW

Após envio bem-sucedido retorna: OK + RENEW

Restaura as configurações padrão de fábrica do módulo, as configurações do módulo serão redefinidas e voltarão ao estado de fábrica padrão; após isso o módulo reiniciará com atraso de 500 ms. Se não houver necessidade, use com cuidado.

**13） reset do módulo**

Enviar: AT + RESET

Após envio bem-sucedido retorna: OK + RESET

Após a execução do comando, o módulo reiniciará com atraso de 500 ms.

**14） configurar o modo mestre-escravo**

Enviar: AT + ROLE [para1]

Após envio bem-sucedido retorna: OK + Set: [para1]

Para mais informações sobre os comandos AT, consulte o datasheet do módulo BLE. Você pode baixá-lo no espaço de Recursos.

## Comunicação via SoftwareSerial ##

O BLE Bee pode atuar como mestre ou escravo, você pode usar cada um deles por meio de diferentes demos. **Se você for usar o seguinte programa com SoftwareSerial, por favor, consulte a forma de conexão na figura anterior. BLE_TX-->D2, BLE_RX-->D3.**

Abra a IDE do Arduino, copie o programa a seguir e faça o upload para a placa Arduino/Seeeduino. Então dois BLE Shields podem se comunicar um com o outro.

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

### Comunicação via HardwareSerial ###

Além disso, você pode usar o BLE Shield via comandos AT sem nenhum programa, **mas você precisa mudar as posições de dois jumpers. BLE_TX-->D1, BLE_RX-->D0.**

Em seguida, abra uma Ferramenta de Porta Serial, como CoolTerm ou outra. As configurações a seguir são: Baudrate: 9600 (padrão), Data Bits: 8, Parity: none, Stop Bits: 1.

Primeiro, você pode enviar um (alguns) comando(s) "AT" para o BLE Shield para fazer um teste. Se ele retornar um "OK", então você pode fazer os passos seguintes. **Se não, você pode fazer upload de um programa em branco para o Arduino/Seeeduino**, e ver se consegue obter resposta da Ferramenta de Porta Serial via a operação anterior.

```

void setup()
{                
}

void loop()
{
}

```

Em seguida, envie um comando "AT+ROLE0" para o BLE Shield; ele retornará "OK+Set:0", o que significa que agora o BLE Shield está pronto para atuar como escravo.

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Seeed_BLE-3.png)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE_Bee_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Schematic]**[Esquemático do BLE_Bee_v1.0](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE_Bee_v1.0.zip)

- **[PDF]**[BLE Bee v1.0 PCB](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE%20Bee%20v1.0%20PCB.pdf)

- **[PDF]**[BLE Bee v1.0 sch](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE%20Bee%20v1.0%20sch.pdf)

- **[APK]**[BLE_apk_for_Android](https://files.seeedstudio.com/wiki/BLE_Bee/res/HMBLEComAssistant.rar)

- **[DataSheet]**[DataSheet do módulo BLE](https://files.seeedstudio.com/wiki/BLE_Bee/res/Bluetooth40_en.pdf)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
