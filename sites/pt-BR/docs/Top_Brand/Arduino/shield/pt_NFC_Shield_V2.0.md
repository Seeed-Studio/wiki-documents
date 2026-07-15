---
description: NFC_Shield_V2.0
title: NFC Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /NFC_Shield_V2.0
sku: 113030001
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/NFC_Shield_V2.0/
---

<table align="center">
  <tbody>
    <tr>
        <td>
          <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_front.png" alt="pir" width={200} height="auto" /></p>
        </td>
        <td>
          <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_back.png" alt="pir" width={200} height="auto" /></p>
        </td>
    </tr>
  </tbody>
</table>

NFC (Near Field Communication) é uma tecnologia amplamente utilizada. Algumas aplicações de NFC incluem sistemas de controle de acesso sem fio (por exemplo, portas e fechaduras sem chave) e pagamentos por dispositivos móveis (por exemplo, caixas de lojas que recebem informações de pagamento por meio de um aplicativo de telefone).

O NFC Shield possui um módulo transceptor, PN532, que lida com a comunicação sem fio em 13,56MHz. Isso significa que você pode ler e gravar uma tag de 13,56MHz com este shield ou implementar troca de dados ponto a ponto (P2P) entre o shield e um smartphone.

Para esta nova versão do shield, criamos uma área de antena PCB separada e independente, o que permite que você estenda mais facilmente a interface NFC para fora do gabinete principal do seu circuito.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/NFC-Shield-V2.0-p-1370.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

Ideias de Aplicação
-----------------

Se você quiser fazer alguns projetos incríveis com o NFC Shield V2.0, aqui estão alguns projetos para referência.

### Demonstração do NFC Shield

***Paper Man, um objeto interessante para interagir com Android***

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Seeed-recipe-paper_man.jpg" alt="pir" width={600} height="auto" /></p>

[Make it NOW!](https://www.seeedstudio.com/recipe/40-paper-man-an-interesting-object-to-interact-with-android.html)

[***Mais Projetos Incríveis com NFC Shield V2.0***](https://www.seeedstudio.com/recipe/index.php?query=NFC+Shield)

Recursos
--------

- Uso do conector ICSP para SPI. Isso significa que o shield funciona com as seguintes placas de desenvolvimento Arduino: Uno, Mega, Leonardo
- Comunicação NFC sem fio em 13,56MHz
- Protocolo SPI – interface que economiza pinos e requer apenas 4 pinos
- Tensão de entrada: 5V a partir do pino de 5V do Arduino
- Corrente típica: 100mA
- Alcance efetivo máximo de 5cm
- Suporta comunicação P2P
- Suporta protocolos ISO14443 Tipo A e Tipo B

Visão Geral de Hardware
-----------------

Os pinos e outros terminais do NFC shield são descritos abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Pn532-nfc-shield-pin-description.png" alt="pir" width={600} height="auto" /></p>

**Interface do NFC shield**

- D10 e D9 são usados para seleção de chip SPI (CS/SS). D10 está conectado por padrão; para conectar D9 é necessário soldar o pad SS ao pad D9 e raspar a conexão entre SS e D10.
- D2 pode ser usado para receber o sinal do pino de requisição de interrupção (IRQ) do shield. A interrupção não está conectada por padrão; é necessário soldar os pads "D2/INT0" e "IRQ".
- O shield obtém sua interface SPI (pinos SPI MOSI, MISO e SCK) diretamente do conector ICSP do Arduino, isso significa que o shield funciona com os seguintes Arduinos: Uno, Mega e Leonardo.
- O terminal ANT1 é onde a antena NFC (incluída com o shield) é conectada.
- O shield é alimentado com 5V da placa Arduino.

A antena do NFC shield, incluída com o shield, é um módulo PCB separado que é conectado ao shield por meio de um cabo. A antena é a área usada para receber e transmitir informações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_Antanna_28x30.5.jpg" alt="pir" width={600} height="auto" /></p>

**Fixação da PCB da antena NFC**

Configuração do NFC Shield
----------------

### Instalação de Hardware

1. Conecte a Antena NFC ao shield.
2. Empilhe o NFC Shield na sua placa de desenvolvimento Arduino e conecte a placa a um PC usando um cabo USB.

### Instalação das Bibliotecas de Software

- **Passo 1.**  Baixe a [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC).

- **Passo 2.**  Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca **Seeed Arduino NFC** para Arduino.

- **Passo 3.**  Abra o código “WriteTag” pelo caminho: **File --> Examples --> WriteTag**.

- **Passo 4.**  Modifique o código como abaixo para habilitar a comunicação SPI.

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif

void setup() {
    SERIAL.begin(9600);
    SERIAL.println("NDEF Writer");
    nfc.begin();
}
```

**Menu de bibliotecas disponíveis do Arduino**

Exemplos/Aplicações do NFC Shield
--------------------------------

### Exemplo: NFC WriteTag

Este exemplo mostrará como usar o NFC shield para escanear uma tag NFC e exibir suas informações/dados.

Na IDE do Arduino copie, cole e, em seguida, faça o upload do código abaixo para sua placa.

#### Código

```cpp
#include <NfcAdapter.h>
#include <PN532/PN532/PN532.h>
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif

void setup() {
    SERIAL.begin(9600);
    SERIAL.println("NDEF Writer");
    nfc.begin();
}

void loop() {
    SERIAL.println("\nPlace a formatted Mifare Classic or Ultralight NFC tag on the reader.");
    if (nfc.tagPresent()) {
        NdefMessage message = NdefMessage();
        message.addUriRecord("http://arduino.cc");

        bool success = nfc.write(message);
        if (success) {
            SERIAL.println("Success. Try reading this tag with your phone.");
        } else {
            SERIAL.println("Write failed.");
        }
    }
    delay(5000);
}
```

Para testar o código:

1. Abra a janela do monitor Serial do Arduino
2. Defina o baudrate para 115200
3. Segure uma tag NFC sobre a área da antena NFC
4. O NFC shield irá escanear a tag e você deverá conseguir ver o UID da tag NFC, o tipo de tag e a mensagem (se disponível) na janela do monitor serial. Veja a figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Nfc-pn532-output-example-1.png" alt="pir" width={600} height="auto" /></p>

<!-- **Saída da janela de comunicação serial do Exemplo #1 ao escanear uma tag NFC.** -->

<!--  ### Example #2: NFC(keyless) Door Lock

This example will show you how to use an NFC tag as a key to unlock a door or a lock. The door/lock mechanism will be left to your imagination, we'll only cover the NFC part of the code.

1.  Do Example #1: NFC Tag Scan, above, to get your NFC tag's UID.
2.  Optional Step - connect a green LED to pin 3 as shown in the figure/schematic below. We'll use this LED to signal a successful match in keys.
3.  Optional Step – connect a red LED to pin 4 as shown in the figure/schematic below. We'll use this LED to signal a mismatched key.
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-2-red-green-led-nfc-alarm.PNG" alt="pir" width={600} height="auto" /></p>

    **NFC lock circuit**
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-2-red-green-led-nfc-alarm-real.png" alt="pir" width={600} height="auto" /></p>

    **NFC lock circuit**

4.  In the Arduino IDE create a new sketch and copy, paste, and upload the code below to your Arduino board replacing the myUID string constant with your tag’s UID obtained from Example \#1.

#### Code
```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    String const myUID = "1B B3 C6 EF"; // replace this UID with your NFC tag's UID
    int const greenLedPin = 3; // green led used for correct key notification
    int const redLedPin = 4; // red led used for incorrect key notification

    void setup(void) {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm

        // make LED pins outputs
        pinMode(greenLedPin,OUTPUT);
        pinMode(redLedPin,OUTPUT);

        // turn off the LEDs
        digitalWrite(greenLedPin,LOW);
        digitalWrite(redLedPin,LOW);
    }

    void loop(void) {

        Serial.println("Scanning...");
        if (nfc.tagPresent()) // check if an NFC tag is present on the antenna area
        {
            NfcTag tag = nfc.read(); // read the NFC tag
            String scannedUID = tag.getUidString(); // get the NFC tag's UID

            if( myUID.compareTo(scannedUID) == 0) // compare the NFC tag's UID with the correct tag's UID (a match exists when compareTo returns 0)
            {
              // The correct NFC tag was used
              Serial.println("Correct Key");
              // Blink the green LED and make sure the RED led is off
              digitalWrite(greenLedPin,HIGH);
              digitalWrite(redLedPin,LOW);

              delay(500);
              digitalWrite(greenLedPin,LOW);
              delay(500);
              digitalWrite(greenLedPin,HIGH);
              delay(500);
              digitalWrite(greenLedPin,LOW);
              // put your here to trigger the unlocking mechanism (e.g. motor, transducer)
            }else{
              // an incorrect NFC tag was used
              Serial.println("Incorrect key");
              // blink the red LED and make sure the green LED is off
              digitalWrite(greenLedPin,LOW);
              digitalWrite(redLedPin,HIGH);

              delay(500);
              digitalWrite(redLedPin,LOW);
              delay(500);
              digitalWrite(redLedPin,HIGH);
              delay(500);
              digitalWrite(redLedPin,LOW);
              // DO NOT UNLOCK! an incorrect NFC tag was used.
              // put your code here to trigger an alarm (e.g. buzzard, speaker) or do something else
            }
        }
        delay(2000);
    }
```

Para testar o código/aplicativo:

1.  Abra a janela do monitor serial do Arduino
2.  Segure a tag NFC com a chave correta na área da antena.
3.  O LED verde deve acender e a janela serial deve exibir "Correct Key"
4.  Agora segure uma tag NFC diferente na área da antena
5.  O LED vermelho deve acender e a janela serial deve exibir "Incorrect Key"
 -->
<!-- ### Exemplo nº 3: Como usar o pino de interrupção (Exemplo nº 2: revisitado)

Embora o código no Exemplo nº 2 acima faça o que precisamos, há uma abordagem mais elegante para lidar com detecções de tags NFC. Neste exemplo, mostraremos como usar o pino de interrupção no shield NFC para que, em vez de fazer polling no shield (perguntando "há uma tag presente?"), esperemos que o shield avise o Arduino de que uma tag está disponível para ser lida. Por que você iria querer fazer isso? Há muitos motivos e interrupções são um tópico completamente diferente, mas um motivo que pode te convencer é que seu projeto/circuito economizará bateria, já que não estamos acionando o circuito do shield continuamente.

#### Modificação de hardware

O pino de interrupção (IRQ) do shield NFC está desconectado do pino digital 2 (D2) do Arduino; para conectar o IRQ e o pino D2, vá em frente e solde o pad no shield rotulado "D2/INT0 IRQ".

#### Código

Envie o seguinte código para sua placa Arduino:

Para testar o código/aplicativo:

1.  Se desejar, conecte os LEDs como mostrado no Exemplo nº 2 acima.
2.  Abra a janela do monitor serial do Arduino
3.  Segure a tag NFC com a chave correta na área da antena.
4.  O LED verde deve acender e a janela serial deve exibir "Correct Key"
5.  Agora segure uma tag NFC diferente na área da antena
6.  O LED vermelho deve acender e a janela serial deve exibir "Incorrect Key"

A janela serial do nosso teste deste código é mostrada abaixo, a sua deve ser semelhante.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-3-nfc-pn532-shield-interrupt-example.png" alt="pir" width={600} height="auto" /></p>

**Saída da janela de comunicação serial do exemplo 3.**

<!-- ### Exemplo nº 4: Gravar uma mensagem NDEF em uma tag

Tags NFC são capazes de armazenar dados; a quantidade de dados depende de cada tag. Neste exemplo, armazenaremos duas strings/mensagens em uma tag; você então poderá ler essa mensagem com o código em *Exemplo nº 6: Ler uma mensagem NDEF de uma tag*.

Envie o seguinte código para sua placa de desenvolvimento Arduino.

:::note
Se sua tag NFC não estiver formatada corretamente ("Message write failed" será exibido na janela de comunicação serial), você precisará verificar se sua tag pode ser formatada com o código em 
:::

#### Código
```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm
    }

    void loop(void)
    {
      Serial.println("Place a formatted Mifare Classic NFC tag on the reader.");
      if(nfc.tagPresent())
      {
        NdefMessage message = NdefMessage();
        message.addUriRecord("Hello, world!");
        message.addUriRecord("How are you today?");

        bool success = nfc.write(message);
        if(success)
        {
          Serial.println("The message was successfully written to the tag.");Ho
        }else{
          Serial.println("Message write failed.");
        }
      }

      delay(5000);
    }
```

Para testar o código acima:

1.  Abra uma janela de comunicação serial do Arduino
2.  Segure a tag NFC sobre a área da antena do shield NFC e espere pela mensagem de sucesso ou falha aparecer, como mostrado na figura abaixo.
3.  Remova a tag NFC da área da antena assim que a mensagem de sucesso for exibida para evitar uma nova gravação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-4-write-ndef-message-to-tag.png" alt="pir" width={600} height="auto" /></p>

**Janela de comunicação serial para o exemplo de gravação de mensagem NDEF no cartão.**

<!-- ### Exemplo nº 5: Formatar uma tag como NDEF

Sua tag NFC novinha pode não estar formatada como NDEF inicialmente. Para formatar uma tag como NDEF, envie o seguinte código para sua placa de desenvolvimento Arduino:

#### Código
```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm
    }

    void loop(void)
    {
        Serial.println("Place an unformatted Mifare Classic tag on the reader.");
        if (nfc.tagPresent()) {

            bool success = nfc.format();
            if (success) {
              Serial.println("Success, tag formatted as NDEF.");
            } else {
              Serial.println("Format failed.");
            }

        }
        delay(5000);
    }
```

Para testar/executar o código:

1.  Abra a janela de comunicação serial do Arduino.
2.  Segure a tag NFC que você deseja formatar sobre a área da antena do shield NFC.
3.  Espere pela mensagem de sucesso ou falha aparecer, como mostrado na figura abaixo.
4.  Remova a tag NFC da área da antena para evitar uma re-formatação.

<div class="admonition note">
<p class="admonition-title">Note</p>
Se sua tag não for formatada, tente novamente. Se continuar falhando, sua tag não é capaz de ser formatada como NDEF.
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-5-format-nfc-tag-as-ndef.png" alt="pir" width={600} height="auto" /></p>

**Saída da janela de comunicação serial ao formatar uma tag NFC para NDEF.**
 -->
<!-- ### Exemplo nº 6: Ler uma mensagem NDEF de uma tag

Como você viu nos exemplos acima, o shield NFC é capaz de gravar mensagens em tags NFC. O NFC também é capaz de ler mensagens NDEF de tags; neste exemplo mostraremos como.

#### Código

Envie o seguinte código para sua placa de desenvolvimento Arduino.

```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // start serial comm
        Serial.println("NDEF Reader");
        nfc.begin(); // begin NFC comm
    }

    void loop(void)
    {
      Serial.println("\nScan an NFC tag\n");
      if (nfc.tagPresent()) // Do an NFC scan to see if an NFC tag is present
      {
          NfcTag tag = nfc.read(); // read the NFC tag
          if(tag.hasNdefMessage())
          {
            NdefMessage message = tag.getNdefMessage();
            for(int i=0;i<message.getRecordCount();i++)
            {
              NdefRecord record = message.getRecord(i);
              int payloadLength = record.getPayloadLength();
              byte payload[payloadLength];
              record.getPayload(payload);
              Serial.write(payload,payloadLength);
            }
          }
      }
      delay(500); // wait half a second (500ms) before scanning again (you may increment or decrement the wait time)
    }
```

Para testar o código acima:

1.  Abra uma janela de comunicação serial do Arduino
2.  Segure uma tag NFC com uma mensagem NDEF sobre a área da antena do shield NFC.
3.  A mensagem NDEF gravada na tag deve ser exibida, como mostrado na figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-6-read-ndef-message.png" alt="pir" width={600} height="auto" /></p>

**Saída da janela de comunicação serial para leitura de mensagem NDEF**
 -->
<!-- ### Exemplo nº 7: Como mudar o pino Chip Select de D10 para D9

#### Modificação de hardware

1.  Raspe a conexão dos pads rotulados "SS" e "D10" no shield
2.  Conecte/solde os pads "SS" e "D9" no shield.

Você pode então usar o mesmo código dos exemplos acima, mas com o pino 9 em vez de 10 para a interface PN532:

#### Código

    PN532_SPI interface(SPI, 9); // create a SPI interface for the shield with the SPI CS terminal at digital pin 9
 -->
<!-- ### Exemplo nº 8: Usar dois shields NFC com uma placa Arduino

#### Modificação de hardware

1.  Faça a modificação de hardware descrita no Exemplo nº 7 em um dos dois shields.
2.  Empilhe ambos os shields na placa Arduino.

Agora você pode criar dois objetos NFC separados, um para cada shield, como segue:

#### Código
```cpp
	#if 1 // use SPI
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi1(SPI, 10); //create a SPI interface for the shield with the SPI CS terminal at digital pin 10
	NfcAdapter nfc1 = NfcAdapter(pn532spi1); create an NFC adapter object for shield one
	PN532_SPI pn532spi2(SPI, 9); //create a SPI interface for the shield with the SPI CS terminal at digital pin 9
	NfcAdapter nfc2 = NfcAdapter(pn532spi2); create an NFC adapter object for shield two

	#elif 0 // use hardware serial

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // use software serial

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else //use I2C

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

``` 
 -->

## FAQs

**P1: Qual é o comprimento do cabo? E qual pode ser o comprimento se eu quiser um mais longo?**

R1: O cabo que vendemos com o NFC shield tem 12cm. Se você quiser um mais longo, não ultrapasse 15cm com um conector IPX/U.FL.

**P2: Podem ser adicionadas duas ou mais antenas ao NFC Shield V2.0 (SKU: 113030001)?**

R2: O NFC shield v2 é baseado no chip PN532. Observe que o projeto suporta apenas uma antena.

## Visualizador Online do Esquemático do Arquivo Eagle do NFC Shield v2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_V2.0b_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do Arquivo Eagle do NFC Shield v2.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Esquemático do NFC Shield v2.0](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_Schematic.pdf)
- [Arquivo Eagle do NFC Shield v2.0](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_V2.0b_Eagle_files.zip)
- [Esquemático do NFC Shield v2.1](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1.pdf)
- [Arquivo Eagle do NFC Shield v2.1](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1_Eagle_File.zip)
- [Folha de Dados do PN532](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/PN532.pdf)
- [FAQ do NFC Shield](http://support.seeedstudio.com/knowledgebase/articles/462025-nfc-shield-sku-sld01097p)
- [Biblioteca Seeed Arduino NFC](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)
- [Biblioteca PN532](https://github.com/Seeed-Studio/PN532)aaa

## Projeto

**Paper Man** Uma maneira interessante de se comunicar com seu dispositivo Android por meio da tecnologia NFC.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/xiaobo__/paper-man-0a6833/embed" width={350} />

**Carrinho de Controle Remoto Controlado por Cartão NFC** Desafie sua coordenação: construa seu próprio carrinho controlado por NFC

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/litliao/nfc-card-controlled-remote-car-af27c9/embed" width={350} />

<!-- Este arquivo Markdown foi criado a partir de https://www.seeedstudio.com/wiki/NFC_Shield_V2.0 -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
