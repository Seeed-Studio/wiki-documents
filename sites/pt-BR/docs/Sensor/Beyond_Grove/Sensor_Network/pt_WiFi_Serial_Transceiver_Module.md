---
title: Módulo Transceptor Serial WiFi
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/WiFi_Serial_Transceiver_Module/
slug: /WiFi_Serial_Transceiver_Module
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/WiFi_Serial_Transceiver_Module/
---
![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/WiFi%20Serial%20Transceiver%20Module.jpg)

Neste tutorial, usaremos um seeeduino para controlar o módulo WiFi ESP8266 para requisitar uma página estática da internet. Este é um uso básico de soquete TCP, para outros usos, consulte o guia de comandos AT do módulo.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)

**Lista de materiais:**

- [Seeeduino V3](https://www.seeedstudio.com/Seeeduino-V30-Atmega-328P-p-669.html) / Arduino Uno
- [Módulo WiFi Serial ESP8266](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)
- [UartSBee v4](https://www.seeedstudio.com/UartSBee-V4-p-688.html) / outro conversor USB para TTL

!!!Note
    Usamos uma serial de software para imprimir algumas informações de depuração, pois há apenas uma serial de hardware na placa seeeduino. Mas a limitação da serial de software é que ela não consegue se comunicar em uma taxa de baud maior que 19200. Portanto, parte da saída do módulo ESP será perdida porque a taxa de baud 57600 do módulo ESP é maior do que a da serial de software. Se você tiver uma placa com mais de uma serial de hardware (por exemplo, Arduino Mega 2560), o caso será mais simples.

## Passo a Passo
---
- **Passo 1**: conecte o módulo como na figura a seguir

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Wifi_connection.jpg)

- **Passo 2**: Programe a placa seeeduino.

   - Abra a IDE do Arduino e crie um novo sketch;
   - Copie e cole o código a seguir no editor de sketch (é necessário modificar as macros SSID e PASS de acordo com a sua situação);

```c
#include <SoftwareSerial.h>
   #define SSID "xxxxxxxx"
   #define PASS "xxxxxxxx"
   #define DST_IP "220.181.111.85" //baidu.com
   SoftwareSerial dbgSerial(10, 11); // RX, TX
   void setup()
   {
     // Open serial communications and wait for port to open:
     Serial.begin(57600);
     Serial.setTimeout(5000);
     dbgSerial.begin(9600); //can't be faster than 19200 for softserial
     dbgSerial.println("ESP8266 Demo");
     //test if the module is ready
     Serial.println("AT+RST");
     delay(1000);
     if(Serial.find("ready"))
     {
       dbgSerial.println("Module is ready");
     }
     else
     {
       dbgSerial.println("Module have no response.");
       while(1);
     }
     delay(1000);
     //connect to the wifi
     boolean connected=false;
     for(int i=0;i<5;i++)
     {
       if(connectWiFi())
       {
         connected = true;
         break;
       }
     }
     if (!connected){while(1);}
     delay(5000);
     //print the ip addr
     /*Serial.println("AT+CIFSR");
     dbgSerial.println("ip address:");
     while (Serial.available())
     dbgSerial.write(Serial.read());*/
     //set the single connection mode
     Serial.println("AT+CIPMUX=0");
   }
   void loop()
   {
     String cmd = "AT+CIPSTART=\"TCP\",\"";
     cmd += DST_IP;
     cmd += "\",80";
     Serial.println(cmd);
     dbgSerial.println(cmd);
     if(Serial.find("Error")) return;
     cmd = "GET / HTTP/1.0\r\n\r\n";
     Serial.print("AT+CIPSEND=");
     Serial.println(cmd.length());
     if(Serial.find(">"))
     {
       dbgSerial.print(">");
       }else
       {
         Serial.println("AT+CIPCLOSE");
         dbgSerial.println("connect timeout");
         delay(1000);
         return;
       }
       Serial.print(cmd);
       delay(2000);
       //Serial.find("+IPD");
       while (Serial.available())
       {
         char c = Serial.read();
         dbgSerial.write(c);
         if(c=='\r') dbgSerial.print('\n');
       }
       dbgSerial.println("====");
       delay(1000);
     }
     boolean connectWiFi()
     {
       Serial.println("AT+CWMODE=1");
       String cmd="AT+CWJAP=\"";
       cmd+=SSID;
       cmd+="\",\"";
       cmd+=PASS;
       cmd+="\"";
       dbgSerial.println(cmd);
       Serial.println(cmd);
       delay(2000);
       if(Serial.find("OK"))
       {
         dbgSerial.println("OK, Connected to WiFi.");
         return true;
         }else
         {
           dbgSerial.println("Can not connect to the WiFi.");
           return false;
         }
       }
```

- **Passo 3**: Abra o Serial Monitor e pressione o botão de reset da placa seeeduino, você verá a saída.

Por fim, boa hackeação! :)

## Projetos Relacionados
---
[Recipe Community](https://www.seeedstudio.com/recipe/) é um lugar incrível onde makers compartilham aqui seus trabalhos surpreendentes. Nossos makers fizeram muitos projetos incríveis com o esp8266, dê uma olhada!

**WiFi Scanner - Conheça o Sinal WiFi ao seu redor**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-WiFi_Scanner-Know_the_WiFi_Signal_around_you.jpg)

Construa seu próprio Wifi Scanner com alguns passos simples, tudo o que você precisa fazer é preparar:

- Uma placa de desenvolvimento NodeMcu
- Um OLED I2C.
- Alguns cabos
- E, mais importante, um CORAÇÃO QUENTE NO ESP8266

[Então, por que não fazer um para você?](https://community.seeedstudio.com/project_detail.html?id=220)


**Primary IoT Make with NodeMcu &gt;ESP8266&lt;**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-Primary_IoT_Make_with_NodeMcu--ESP8266--.jpg)

Um Monitor online de Temperatura & Umidade feito com:

- Uma placa de desenvolvimento NodeMcu
- Grove - Temp&Humi Sensor
- Alguns cabos



Outro truque fácil, [por que não fazer um para você?](https://community.seeedstudio.com/project_detail.html?id=232)

Ainda não é suficiente? Mais [Projetos Incríveis com ESP8266](https://community.seeedstudio.com/discover.html?t=wio).

Ainda mais Projetos Incríveis em [Recipe](https://community.seeedstudio.com/projects.html#recipe)

## Suporte Técnico & Discussão de Produtos
 se você tiver qualquer problema técnico.  envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>