---
description: Seeeduino Ethernet
title: Seeeduino Ethernet
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Ethernet
sku: 102010000
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Ethernet/
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-2.jpg)

Seeeduino Ethernet é uma plataforma de desenvolvimento compacta e multifuncional, que reúne registro e processamento de dados, controle de dispositivos e comunicação Ethernet em um único produto. Ela é equipada com um chip MEGA328P e um Wiz5100: o primeiro fornece um estilo de controle tipo Arduino e o segundo fornece capacidade de comunicação Ethernet TCP e UDP. Além do módulo de cartão SD integrado, é conveniente e organizado para registro remoto de dados, processamento ou transferência via rede.

Nesta versão, reduzimos a altura do RJ45 para equilibrá-lo com os headers. Além disso, com uma porta Grove I2C e uma UART populadas, é conveniente conectar os módulos Grove correspondentes a esta placa.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Ethernet-p-1231.html)

## Especificação

---

* Tensão: 6,2–13 V

* Corrente: 140–550 mA

* Tipo de cartão compatível: cartão Micro SD(<font color="red">**deve ser SanDisk**</font>), FAT/FAT32 (mais de 2G não é garantido)

* Conexões compatíveis: TCP/UDP

* Peso líquido: 23±2 g
*
* Conector Ethernet: RJ45 padrão

## Demonstração

---
Vamos testar as funções do Seeeduino Ethernet de gravar ou ler informações do cartão SD e enviar dados A/D para a rede.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-1.jpg)

### Etapa 1: Instalar o hardware

Primeiro, instale o hardware. Temos duas alternativas para conectar a alimentação.

**Método 1**: você pode usar um [Passive PoE Cable Set](https://www.seeedstudio.com/depot/passive-poe-cable-set-p-1175.html?cPath=207) para fornecer alimentação e conexão Ethernet ao mesmo tempo, como na imagem abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-3.jpg)

**Método 2**:  usar cabo de alimentação e cabo Ethernet separados.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-4.jpg)

### Etapa 2: Programação

Após a instalação do hardware, vamos continuar e testar o código de exemplo.
Este programa foi escrito para testar as funções de gravação ou leitura de dados do cartão SD e de envio de dados A/D para a rede.
Este código de demonstração pode ser usado como um programa de teste, bem como referência caso você queira explorar mais funções da placa.

<font color="red">AVISO: </font>

1. Todos os arquivos ".h" necessários já foram pré-instalados na Arduino IDE(1.0).

2. Instale um cartão Micro SD. Certifique-se de que o cartão Micro SD não esteja cheio e de que o formato seja FAT ou FAT32.

```
/*
  SD card read/write

 This example shows how to read and write data to and from an SD card file
 The circuit:
 * SD card attached to SPI bus as follows:
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 4

   Web Server

 A simple web server that shows the value of the analog input pins.
 using an Arduino Wiznet Ethernet shield.

 Circuit:
 * Ethernet shield attached to pins 10, 11, 12, 13
 * Analog inputs attached to pins A0 through A5 (optional)

 created 18 Dec 2009
 by David A. Mellis
 modified 4 Sep 2010
 by Tom Igoe

 */

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>

// Enter a MAC address and IP address for your controller below.
// The IP address will be dependent on your local network:
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192,168,1,177);

// Initialize the Ethernet server library
// with the IP address and port you want to use
// (port 80 is default for HTTP):
EthernetServer server(80);

File myFile;

void setup()
{
    Serial.begin(9600);
    Serial.print("Initializing SD card...");
    // On the Ethernet Shield, CS is pin 4. It's set as an output by default.
    // Note that even if it's not used as the CS pin, the hardware SS pin
    // (10 on most Arduino boards, 53 on the Mega) must be left as an output
    // or the SD library functions will not work.
    pinMode(10, OUTPUT);
    // pinMode(4,OUTPUT);
    if (!SD.begin(4)) {
        Serial.println("initialization failed!");
        return;
    }
    Serial.println("initialization done.");

    // open the file. note that only one file can be open at a time,
    // so you have to close this one before opening another.

    myFile = SD.open("test.txt",FILE_WRITE);
    // if the file opened or created okay, write to it:
    if (myFile) {
        Serial.print("Writing to test.txt...");
        myFile.println("testing 1, 2, 3.");
        // close the file:
        myFile.close();
        Serial.println("done.");
    } else {
        // if the file didn't open, print an error:
        Serial.println("error opening test.txt");
    }

    // re-open the file for reading:
    myFile = SD.open("test.txt");
    if (myFile) {
        Serial.println("test.txt:");

        // read from the file until there's nothing else in it:
        while (myFile.available()) {
            Serial.write(myFile.read());
        }
        // close the file:
        myFile.close();
    } else {
        // if the file didn't open, print an error:
        Serial.println("error opening test.txt");
    }
    // start the Ethernet connection and the server:
    Ethernet.begin(mac, ip);
    server.begin();
}
unsigned char buff[6];
void loop()
{
    EthernetClient client = server.available();
    if (client) {
        // an http request ends with a blank line
        boolean currentLineIsBlank = true;
        while (client.connected()) {
            if (client.available()) {
                char c = client.read();
                // if you've gotten to the end of the line (received a newline
                // character) and the line is blank, the http request has ended,
                // so you can send a reply
                if (c == '\n' && currentLineIsBlank) {
                    // send a standard http response header
                    client.println("HTTP/1.1 200 OK");
                    client.println("Content-Type: text/html");
                    client.println();

                    // output the value of each analog input pin
                    for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
                        client.print("analog input ");
                        client.print(analogChannel);
                        client.print(" is ");
                        client.print(analogRead(analogChannel));
                        client.println("<br />");
                        buff[analogChannel] = analogRead(analogChannel);
                    }
                    break;
                }
                if (c == '\n') {
                    // you're starting a new line
                    currentLineIsBlank = true;
                }
                else if (c != '\r') {
                    // you've gotten a character on the current line
                    currentLineIsBlank = false;
                }
            }
        }
        // give the web browser time to receive the data
        delay(1);
        // close the connection:
        client.stop();
        myFile = SD.open("test.txt", FILE_WRITE);
        if (myFile) {
            Serial.println("test.txt:");
            for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
                myFile.print("analog input ");
                myFile.print(analogChannel);
                myFile.print(" is ");
                myFile.println(analogRead(analogChannel));
            }
            // read from the file until there's nothing else in it:
            myFile.close();
        }
        else {
            // if the file didn't open, print an error:
            Serial.println("error opening test.txt");
        }

        myFile = SD.open("test.txt");
        if (myFile) {
            Serial.println("test.txt:");

            // read from the file until there's nothing else in it:
            while (myFile.available()) {
                Serial.write(myFile.read());
            }
            // close the file:
            myFile.close();
        }
        else {
            // if the file didn't open, print an error:
            Serial.println("error opening test.txt");
        }
    }
}
```

### Etapa 3: Fazer o download do programa

Como não há conector USB na placa, o Seeeduino Ethernet requer um [UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) para fazer o download do programa.

Conecte o UartSBee ao Seeeduino Ethernet como abaixo:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-11.jpg)

 ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-5.jpg)

:::note
Selecione Seeeduino V3.0 como placa no menu Tool para fazer o download do programa.
:::

### Etapa 4: Teste de resultado

<font color="red">AVISO:</font> Certifique-se de que o Seeeduino Ethernet e o seu computador estejam na mesma rede local.
Depois que o programa for baixado, abra o Serial Monitor. Você irá verificar o status da placa.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-9.jpg)

Abra um navegador web e digite o endereço:192.168.1.177, então você poderá verificar os dados enviados pelo Seeeduino Ethernet:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Ethernet_shield2.jpg)

## Visualizador online do esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Arquivos Eagle do Seeeduino Ethernet](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip)

* [Seeeduino Ethernet Schematic.pdf](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeeduino_Ethernet_.pdf)

* Esta documentação é licenciada sob a Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html); consulte os arquivos de código-fonte para mais detalhes.

* Reformate o cartão SD para FAT/FTA32. Se ainda assim não funcionar, recomendamos baixar o [SD Formatter](https://www.sdcard.org/downloads/formatter_3/) e reformatar o cartão SD com este software.

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
