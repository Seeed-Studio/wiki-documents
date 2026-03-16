---
description: Camera_Shield
title: Camera Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Camera_Shield
sku: 103990057
last_update:
  date: 01/10/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Camera_Shield/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield.jpg" alt="pir" width={600} height="auto" /></p>

Camera Shield é a primeira placa shield que suporta fotografia. Ela é baseada na solução **VC0706 + OV7725**; o primeiro é um processador de câmera de alto desempenho com funções aprimoradas de processamento de imagem e codec JPEG por hardware integrado, e o segundo é uma câmera VGA de 1/4 de polegada, monocristal, com processador de imagem em um encapsulamento de tamanho reduzido. Escrevemos nossa biblioteca para controlar a Camera Shield via UART/SPI, o que torna possível tirar fotos facilmente com a sua placa Arduino. Vamos lá, use-a para tirar uma foto!

## Especificação

---

* Totalmente compatível com Arduino ou Seeeduino

* Resolução de foto: (640x480) saída JPEG

* Barramento serial de alta velocidade para controle: UART/SPI

* Interface de cartão MicroSD integrada

* Alimentação: 5 V

## Interface de Hardware

---
A Camera Shield pode ser controlada via interface SPI ou UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface2.png" alt="pir" width={600} height="auto" /></p>

## Primeiros Passos

---
Aqui está uma breve introdução sobre como usar a Camera Shield.

1. Baixe o arquivo da [biblioteca Camera Shield](https://github.com/Seeed-Studio/Camera_Shield_VC0706) do GitHub e extraia o arquivo da biblioteca para a pasta de bibliotecas do seu Arduino.

2. Abra a pasta de exemplos em libraries/Camera_Shield_VC0706; você encontrará o sketch de exemplo snapshot. Clique duas vezes no arquivo snapshot.ino para abri-lo com a IDE do Arduino.

3. Organizamos a biblioteca para tornar possível controlar a Camera Shield via Software Serial/Hardware Serial/SPI; você pode fazer sua escolha modificando o código.

```cpp
#include "SoftwareSerial.h"
#include <VC0706_UART.h>
#include <SD.h>
#include <SPI.h>
#define SS_SD  10

//use software serial
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
//use hardware serial
//VC0706 cam = VC0706(&Serial1);

void setup()
{
    Serial.begin(9600);
    Serial.println("VC0706 Camera Snapshot Test ...");

    if (!SD.begin(SS_SD)) {
        Serial.println("SD Card init failed...");
        return;
    }
    if(true == cameraInit()){
        snapShot();
    }else{
        Serial.println("camera init error...");
    }
}

void loop()
{
    //nothing to do
}

bool cameraInit()
{
    cam.begin(BaudRate_19200);
    char *reply = cam.getVersion();
    if (reply == 0) {
        Serial.println("Failed to get version");
        return false;
    } else {
        Serial.println("version:");
        Serial.println("-----------------");
        Serial.println(reply);
        Serial.println("-----------------");
        return true;
    }
}

void snapShot()
{
    Serial.println("Snap in 3 secs...");
    delay(3000);
    if (! cam.takePicture()){
        Serial.println("Failed to snap!");
    }else {
        Serial.println("Picture taken!");
    }
    // Create an image with the name IMAGExx.JPG
    char filename[13];
    strcpy(filename, "IMAGE00.JPG");
    for (int i = 0; i < 100; i++) {
        filename[5] = '0' + i/10;
        filename[6] = '0' + i%10;
        // create if does not exist, do not open existing, write, sync after write
        if (! SD.exists(filename)) {
            break;
        }
    }
    // Open the file for writing
    File imgFile = SD.open(filename, FILE_WRITE);
    Serial.print("create ");
    Serial.println(filename);
    uint16_t jpglen = cam.getFrameLength();
    Serial.print("wait to fetch ");
    Serial.print(jpglen, DEC);
    Serial.println(" byte image ...");
    int32_t time = millis();
    cam.getPicture(jpglen);
    uint8_t *buffer;
    while(jpglen != 0){
        uint8_t bytesToRead = min(32, jpglen);
        buffer = cam.readPicture(bytesToRead);
        imgFile.write(buffer, bytesToRead);
        //Serial.print("Read ");  Serial.print(bytesToRead, DEC); Serial.println(" bytes");
        jpglen -= bytesToRead;
    }
    imgFile.close();
    time = millis() - time;
    Serial.println("Done!");
    Serial.print("Took "); Serial.print(time); Serial.println(" ms");
    cam.resumeVideo();
}
```

**use Hardware Serial or Software Serial for communication**

we use Serial(Software Serial or Hardware serial) to communicate with Camera Shield, you can generate your applicance like below:

```cpp
//use software serial
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
```

or if you want to use the hardware serial, you can do it like below:

```cpp
//use hardware serial
VC0706 cam = VC0706(&Serial1);
```

We use the software serial by default. If hardware serial is your choise, you need to modify the code in VC0706_UART head file. Change

```cpp
#define USE_SOFTWARE_SERIAL         1
```

to

```cpp
#define USE_SOFTWARE_SERIAL         0
```

**Use UART or SPI for data transmission**

Usually, you can take a picture by the following steps:

```cpp
cam.takePicture();
uint16_t jpglen = cam.getFrameLength();
cam.getPicture(jpglen);
buffer = cam.readPicture(bytesToRead);
```

and we allow you to read data via two mode:

* 1. UART —— slower mode. Software Serial only support 9600/19200 baud rate. Hardware Serial can be 115200/38400/19200/9600. It will take about 30s to get a picture if you choose the uart mode and at 19200 baud rate.
* 2. SPI —— faster mode. It will only take about 1s or 2s to get the whole picture back.

You can choose your mode in VC0706_UART header file. We use the SPI mode by default.

```cpp
#define TRANSFER_BY_SPI             1
```

change it to

```cpp
#define TRANSFER_BY_SPI             0
```

to use the UART mode.

4. Empilhe a Camera Shield sobre o Arduino e insira um cartão micro‑SD na Camera Shield; você deve prestar atenção aos jumpers seriais que definiu no seu código.

5. Compile o sketch e faça o upload para a sua placa Arduino. Abra a porta Serial da IDE do Arduino; você poderá ver as informações de depuração exibidas pela porta Serial, e o LED de status do cartão SD piscará rapidamente durante a transferência de dados.

6. Quando o programa terminar, retire o cartão SD e insira-o no seu computador; você poderá ver suas fotos. Divirta-se

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Biblioteca Camera Shield no GitHub](https://github.com/Seeed-Studio/Camera_Shield_VC0706)

* [Esquemático da Camera Shield](https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
