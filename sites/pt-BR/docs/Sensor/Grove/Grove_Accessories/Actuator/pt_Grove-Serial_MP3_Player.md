---
title: Grove - Reprodutor MP3 Serial
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Serial_MP3_Player/
slug: /Grove-Serial_MP3_Player
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Serial_MP3_Player/
---

[![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3sensor_02.jpg)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Grove-Serial MP3 Player é um tipo de reprodutor MP3 simples cujo design é baseado em um chip de áudio MP3 de alta qualidade — WT5001. Ele pode suportar frequências de amostragem de 8KHZ~44,1kHZ e os formatos de arquivo MP3 e WAV. Este produto possui várias portas periféricas: uma interface Grove UART padrão, um conector de fone de ouvido estéreo, uma interface externa e também uma interface para cartão Micro SD. Você pode controlar o estado de reprodução do MP3 enviando comandos para o módulo via ferramentas de porta serial, como trocar de música, alterar o volume, o modo de reprodução e assim por diante. Parece um módulo simples, mas possui funções bem poderosas. Quer saber como é a qualidade do som? Venha e experimente!

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Recursos
--------

- Interface Grove padrão
- Modo de reprodução controlado por porta serial assíncrona
- Indicador de ocupado
- Botão de reset
- Interface de cartão Micro SD padrão
- Suporte aos sistemas de arquivos FAT16 e FAT32

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3_interface.jpg)

- ①: Interface Grove do canal esquerdo.
- ②: Interface de headset: fones de ouvido de 3,5 mm
- ③: Interface Grove do canal direito.
- ④: WT5001
- ⑤: Indicador LED: o LED fica aceso quando a música está tocando.
- ⑥: Interface Grove UART
- ⑦: Cartão SD: cartão micro SD (≤2GB)

## Brincar com Arduino

### Hardware

O Grove - Serial MP3 Play pode ser controlado por Arduino/Seeeduino. E há um código de teste Serial_MP3 para você usar. Acredito que você possa começar facilmente. Para informações mais detalhadas, consulte a descrição a seguir. A instalação de hardware:

- Conecte o Grove - Serial MP3 Play à porta Digital 2 do Arduino/Seeeduino. Observe que você pode alterar o número do pino como quiser, apenas certifique-se de fazer as alterações correspondentes no código. Em seguida, conecte seu Arduino/Seeeduino ao PC com um cabo USB.
- Conecte um fone de ouvido ao Grove - Serial MP3 Play. Agora a parte de hardware foi concluída.

### Software

- **Passo 1.** Baixe o [Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) no Github.
- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Você pode selecionar o exemplo **Seeed_Serial_MP3_Player/examples/WT2003S_Terminal_Player** e fazer o upload para o Arduino. Se você não sabe como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).
- **Passo 4.** Veremos as informações no terminal COM como abaixo.

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

- **Passo 5.** Digite o comando correspondente para reproduzir a música.

:::tip
    A biblioteca oferece suporte a dispositivos AVR/SAMD/STM32F4, tanto serial por hardware quanto por software.
:::

Existem 2 tipos de portas seriais. Uma é a COMSerial, que representa a porta de comunicação (conectada ao módulo Grove-MP3). A outra é a ShowSerial, que representa a porta de exibição de informações seriais (conectada ao PC).

A maioria das placas Arduino possui pelo menos uma Serial e algumas possuem múltiplas seriais (o Arduino Mega tem 4 Serials). Ela se comunica nos pinos digitais 0 (RX) e 1 (TX), bem como com o computador via USB. Portanto, se você conectar um dispositivo UART no pino D0 e no pino D1, será necessário removê-lo antes de baixar o programa via USB. Caso contrário, isso causará falha no upload. Às vezes você precisa de mais portas seriais do que o número de portas seriais de hardware disponíveis. Se este for o caso, você pode usar uma Software Serial que utiliza software para emular o hardware serial. A Software Serial requer bastante ajuda do controlador Arduino para enviar e receber dados, portanto não é tão rápida ou eficiente quanto a serial por hardware. Para mais informações sobre Serial, consulte [Seeed Arduino Serial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Serial/).

- **AVR:** No exemplo abaixo, definimos a Software Serial como COMSerial (conectada ao módulo Grove-MP3). Nem todos os pinos digitais podem ser usados para software serial. Você pode consultar [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) para ver os pinos em detalhes. Definimos a Serial de hardware como ShowSerial (conectada ao PC). Se você usar um Arduino Mega, pode conectar a Serial de hardware à ShowSerial e a outra Serial1/Serial2/Serial3 à COMSerial. Assim, você pode consultar a configuração do AVR Mega.

- **SAMD:** No exemplo abaixo, o SAMD não suporta software serial. Usamos a serial por hardware **Serial1** para se comunicar com o módulo Grove-MP3 e **SerialUSB** para imprimir mensagens no PC.

- **STM32F4:** No exemplo abaixo, usamos a serial por hardware **Serial** para se comunicar com o módulo Grove-MP3 e **SerialUSB** para imprimir mensagens no PC.

:::note
    Para mais informações sobre Serial, consulte [Seeed Arduino Serial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Serial/).
:::

```
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

WT2003S<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

WT2003S<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

WT2003S<HardwareSerial> Mp3Player;
#endif
```

- Agora você pode ouvir as músicas armazenadas no seu cartão SD. E, no modo de reprodução, o indicador D1 fica aceso. Se estiver no modo de pausa, o indicador piscará. Mais experiências estão esperando por você!

Há outra maneira de controlar o modo de reprodução do MP3 via ferramenta serial. Nesse caso, você precisa de um [UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=63_66) para conectar o MP3 ao PC. A instalação de hardware é mostrada abaixo:
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Using_UartSBee_to_Control_MP3.jpg)

Após concluir a conexão, abra a ferramenta serial para enviar comandos. Sobre os comandos específicos, consulte a parte de referência!
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Serial_tool_to_send_commands.jpg)

Mais experiências estão esperando por você!

Referências
----------

Descrição dos comandos comuns:

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Nome do comando
</th>
<th scope="col">
Formato do comando
</th>
<th scope="col">
Descrição
</th>
</tr>
<tr>
<th scope="row">
Pause
</th>
<td>
7E 02 A3 7E
</td>
<td>
A música irá parar quando você enviar este comando pela primeira vez. Após reenviar este comando, ela continuará.
</td>
</tr>
<tr>
<th scope="row">
Stop
</th>
<td>
7E 02 A4 7E
</td>
<td>
Este comando é capaz de acionar a reprodução da próxima música ou acionar a reprodução da primeira se o player estiver tocando a última.
</td>
</tr>
<tr>
<th scope="row">
Next
</th>
<td>
7E 02 A5 7E
</td>
<td>
Este comando é capaz de acionar a reprodução da próxima música ou acionar a reprodução da primeira se o player estiver tocando a última.
</td>
</tr>
<tr>
<th scope="row">
Previous
</th>
<td>
7E 02 A6 7E
</td>
<td>
Este comando pode acionar a reprodução da música anterior. Enviar este comando pode acionar a reprodução da última música quando você estiver ouvindo a primeira.
</td>
</tr>
<tr>
<th scope="row">
Controle de volume
</th>
<td>
7E 03 A7 1F 7E
</td>
<td>
Existem 32 níveis de volume de 00 a 31. 00 é mudo e 31 é o volume máximo.
</td>
</tr>
<tr>
<th rowspan="4" scope="row">
Modo de reprodução atribuído
</th>
<td rowspan="4">
7E 03 A9 XX 7E
</td>
<td>
XX=00 significa tocar uma única faixa sem repetição (padrão)
</td>
</tr>
<tr>
<td>
XX=01 significa o modo de repetição de uma única faixa
</td>
</tr>
<tr>
<td>
XX=02 significa que é o modo de repetição de todas as faixas.
</td>
</tr>
<tr>
<td>
XX=03 representa o modo aleatório.
</td>
</tr>
</table>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Grove - Serial MP3 Play Eagle File](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip)
- [Grove - Serial MP3 Play Schematic in PDF format](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-Serial_MP3_Player.pdf)
- [Código de demonstração no GitHub](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- [WT5001 Datasheet](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/WT5001_datasheet_V1.5.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_MP3_Player -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
