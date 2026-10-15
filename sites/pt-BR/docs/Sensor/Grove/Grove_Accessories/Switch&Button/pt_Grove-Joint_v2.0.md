---
description: Grove - Joint v2.0
title: Grove - Joint v2.0
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Joint_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Joint_v2.0/
---
![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint.jpg)

Grove - Joint v2.0 compartilha muitas semelhanças com o Seeeduino Lotus. É uma placa de desenvolvimento de microcontrolador ATMEGA328 em miniatura. Ela usa um Atmel ATMEGA328P-MU e CH340. ATMEGA328P-MU é um microcontrolador AVR de 8 bits de alto desempenho e baixo consumo de energia. CH340 é um chip conversor de barramento USB que pode realizar uma interface USB para serial. Grove - Joint v2.0 possui duas interfaces Grove incluindo porta I<sup>2</sup>C e dois I/Os digitais. Ela também suporta alimentação por bateria. Você pode fazer algumas aplicações simples com ela.



##   Especificações

*   Microcontrolador: ATmega328P-MU

*   Tensão de operação: 5V

*   Pinos de E/S digitais: 2

*   Porta I2C: 1

*   Canais de entrada analógica: 2 (multiplexados com I<sup>2</sup>C)

*   Corrente CC por pino de E/S: 40 mA

*   Memória Flash: 32 KB (ATmega328P-MU)

*   RAM: 2 KB (ATmega328P-MU)

*   EEPROM: 1 KB (ATmega328P-MU)

*   Frequência de clock: 12 MHz

##  Visão geral de hardware

Aqui está o diagrama de blocos do módulo Grove - Joint, que consiste nas seguintes partes.

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_instruction1_.jpg)

*   **Interface de bateria** - Este módulo pode ser alimentado por bateria.
*   **Sensor de luz** - Há um sensor de luz na placa que está conectado ao pino **A0**.
*   **LED de status** - Há 3 LEDs que indicam o status da placa. TX(**D1**), RX(**D0**) e L(**D10**)

*   **Porta INPUT** - A porta INPUT é uma interface Grove I<sup>2</sup>C, bem como dois canais analógicos (**A4** e **A5**).

*   **Porta OUTPUT** - A porta OUTPUT também é uma interface Grove incluindo dois I/Os digitais (**D3** e **D5**).

*   **Botão** - O botão está conectado ao **D2**, ele também pode ser usado como um interruptor.
*   **Porta Micro USB** - Pode ser usada para alimentação e para baixar o código.
*   **LED de alimentação** - O LED+ está conectado ao VCC e o LED- ao **D6**, você pode colocar **D6** em HIGH para desligar este LED e economizar energia.

*   **LED CHRG** - O LED+ está conectado ao VCC e o LED- ao **A3**, você pode colocar **A3** em HIGH para desligar este LED e economizar energia.

##   Ideias de aplicação

*   Brinquedos alimentados por bateria

*   Miniaplicações

*   Eletrônica vestível

*   Babá eletrônica

##   Primeiros passos

Agora, vamos começar a usar a mini placa Arduino.

###   Instalação do driver

Grove - Joint v2.0 usa CH340 para download. É necessário instalar um driver.

#####   Windows/Linux

Totalmente compatível com programa de aplicação serial no sistema operacional Windows do computador

*   1) Conecte-a à porta USB do computador.

*   2) Aguarde até encontrá-la no Gerenciador de Dispositivos.

*   3) Se você não encontrar a porta, faça o download do driver a partir de [Here](http://www.wch.cn/downloads.php?name=pro&amp;proid=5)

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/CH340_Driver.jpg)

#####   Mac OS

Baixe o driver aqui:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

No Mac OS Yosemite:

*   1) Baixe e instale o pacote de driver CH340/CH341

*   2) Abra o programa Terminal (localizado em /Applications/Utilities/)

*   3) Digite o comando: `sudo nvram boot-args="debug=0x146 kext-dev-mode=1"`

*   4) Digite sua senha para sudo

*   5) Reinicie o computador

O driver não é assinado no Yosemite, então você precisa ignorar a verificação de driver assinado.

Se você quiser restaurar as configurações do seu Mac, pode sair do modo desenvolvedor redefinindo o boot-arg para suas configurações anteriores, ou limpar seus boot-args da seguinte forma: `sudo nvram -d boot-args`

Para ver quais são os boot-args atuais, se houver, digite: `sudo nvram boot-args`

###  Preparativos

Agora estamos fazendo uma demonstração para o Grove - Joint v2.0 que requer os seguintes módulos.

*   [Grove Rotary Angle Sensor](https://www.seeedstudio.com/depot/Grove-Rotary-Angle-Sensor-p-770.html)

*   [Digital RGB LED Flexi-Strip](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-60-LED-1-Meter-p-1666.html)

Grove - Joint é compatível com Arduino.
Se esta é a sua primeira vez usando Arduino, coloque a mão em Getting_Started_with_Seeeduino para iniciar sua jornada com Arduino.

###   Instalação de hardware

Grove - Joint possui dois soquetes Grove para conectar os dois módulos acima:
Eles são:

*   Grove Rotary Angle Sensor - conectar à porta de entrada Grove

*   Digital RGB LED Flexi-StripGrove - conectar à porta de saída Grove

Como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint_demo_.jpg)

###   Trabalho de software

Conecte o Grove - Joint ao computador usando um cabo micro USB, se o LED de status não piscar, pressione o botão.

Clique [here](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_demo.rar) para baixar o código de teste e descompacte-o em qualquer pasta (por exemplo, unidade D ou área de trabalho）

<!-- Now you need simple [configurations for Arduino](/pt-br/How_To_Use_Sketchbook) sketchbook. -->

Inicie a IDE Arduino e clique em File&gt;Preferences e adicione o local absoluto do código de teste baixado em Sketchbook location.

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo1.jpg)

Após as configurações, reinicie o Arduino, clique em File&gt;Sketchbook e escolha a demo Grove- Joint, após isso o código de teste irá aparecer.

![](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/img/Grove-Joint-Demo2.jpg)

Clique em Tools&gt;Board para escolher Arduino Fio e selecione a porta serial correspondente.

<!-- Now click Upload(CTRL+U) to burn testing code. Please refer to [here](/pt-br/Arduino_Common_Error "Arduino Common Error") for any error prompt and you can also add comment on [forum](http://forum.seeedstudio.com/) -->

###  Revisar resultados

Após o upload ser concluído, você pode girar o sensor de ângulo e então verá que o LED RBG é aceso um por um.

###  Obter a tensão da bateria

O Battery+ está conectado ao A2. Você pode ler este pino para obter a tensão da bateria.

Envie o código abaixo para obter a tensão da bateria.
```
// Grove - Joint get Battery

const int pinBattery = A2;

int getAnalogData(int pin)
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum+=analogRead(pin);
    }
    return (sum>>5);
}
void setup()
{
    Serial.begin(9600);
    Serial.println("Grove - Joint V2 test - Battery");
}

void loop()
{
    int value = getAnalogData(pinBattery);

    float voltage = value/1023.0*5.0;
    Serial.print(voltage, 2);
    Serial.println(" V");
    delay(1000);
}
```
**Note** que quando você conecta o Grove Joint a um PC, a bateria é carregada, então talvez a tensão que você lê não seja correta.


## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Recursos

*   [Esquemático em Eagle](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_PCB.rar)

*   [Esquemático em PDF](https://files.seeedstudio.com/wiki/Grove-Joint_v2.0/res/Grove-Joint_v2.0_SCH.rar)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
