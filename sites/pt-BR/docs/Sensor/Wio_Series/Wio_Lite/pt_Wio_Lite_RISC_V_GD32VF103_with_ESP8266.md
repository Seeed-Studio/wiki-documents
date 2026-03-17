---
title: Wio Lite RISC V GD32VF103 com ESP8266
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/
slug: /Wio_Lite_RISC_V_GD32VF103_with_ESP8266
sku: 102991310
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/
---


<!-- ！[](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png" alt="pir" width={600} height="auto" /></p>

Wio Lite RISC-V é uma placa de desenvolvimento RISC-V com formato feather baseada em GD32VF103, com o ESP8266 Wio Core onboard, ela também oferece função WiFi.

GD32VF103CBT6 é um núcleo Bumblebee baseado na Nuclei System Technology. Suporta o conjunto de instruções RV32IMAC e a função de interrupção rápida ECLIC. O consumo de energia do núcleo é apenas 1/3 do de um Cortex-M3 tradicional.

O núcleo WiFi ESP8266 onboard e o circuito de carregamento Lipo fazem dela uma placa de controle perfeita para IoT. Há também um slot para micro SD na parte traseira desta placa, que pode expandir os recursos do sistema.

Enquanto isso, como uma placa Wio Lite, a Wio Lite RISC-V definitivamente pode funcionar com o [Grove Shield for Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html). Com este shield, [mais de 200 sensores, atuadores e displays Grove](https://www.seeedstudio.com/grove.html) estão à sua disposição. Por exemplo, você pode escolher qualquer [Grove OLED](https://www.seeedstudio.com/catalogsearch/result/?cat=&q=grove+OLED) que quiser para transformá-la em uma placa de desenvolvimento visual.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Recursos

- MCU RISC-V GD32VF103CBT6
- ESP8266 WiFi Wio Core
- Fator de forma Feather
- Porta JST2.0 Lipo
- Slot SD onboard
- USB Tipo C

## Visão geral do hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/hardware.png)

### Plataformas compatíveis

| PlatformIO                                                                                            | Arduino                                                                                             | Raspberry Pi                                                                                      |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/products/102991310/img/platformio-logo.png) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) |

## Primeiros passos

### Primeiros passos com PlatformIO

#### Hardware

**Materiais necessários**

- [Wio Lite RISC-V (GD32VF103) - Com ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
- [Cabo USB 3.1 Tipo C para A](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)

- **Etapa 1** Conecte a Wio Lite ao seu PC com o cabo USB Tipo C para A para alimentação e porta serial de download.

#### Software

:::note
 RISC-V GD32 já é compatível com a IDE PlatformIO com framework Arduino, mas ainda não é compatível com a IDE Arduino.
:::

- **Etapa 1**

Configure a IDE PlatformIO; a IDE PlatformIO é baseada no Visual Studio Code.
Baixe o [Visual Studio Code](https://code.visualstudio.com/).
Clique no ícone "Extensions"; você pode encontrá-lo no lado esquerdo do Visual Studio Code.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)

Digite "platformIO" no mecanismo de busca para instalá-lo.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

- **Etapa 2**

Abra a IDE PlatformIO e clique em "New project" para criar o projeto. Digite o nome do projeto e escolha GD32VF103V-EVAL(Sipeed) para a placa. O framework é Arduino. Clique em "finish".

- **Etapa 3**

Edite seu código do framework Arduino, clique no botão de compilação na parte inferior do Visual Studio Code.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)

- **Etapa 4**

O código é compilado em um arquivo binário. Você pode usar a [ferramenta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) para fazer o download do arquivo binário para a placa. Além disso, você precisa instalar o firmware DFU para permitir que a placa faça o download do código via DFU. O firmware DFU está no mesmo documento da [ferramenta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar).

- **Etapa 5**

Pressione o botão de reset na Wio Lite com a chave de boot à esquerda e a ferramenta DFU reconhecerá sua placa depois que você instalar o firmware da ferramenta DFU.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)

Agora coloque a chave de boot para a direita, localize seu arquivo binário compilado e faça o download para a flash da placa. Clique em "Leave DFU" para que a placa se desconecte da ferramenta DFU e seu código será gravado corretamente na placa.

### Demo de controle do LED de usuário onboard pelo site

#### Hardware

**Materiais necessários**

- [Wio Lite RISC-V (GD32VF103) - Com ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
- Qualquer adaptador USB para TTL como [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5.html)
- [Cabo USB 3.1 Tipo C para A](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)

- **Etapa 1** Use o adaptador USB para TTL para conectar à porta serial da Wio Lite. (A porta serial da Wio Lite é o pino PA9-TX. PA10-RX)
- **Etapa 2** Use outro adaptador USB para TTL para conectar à porta serial do ESP8266 (se você quiser monitorar a transmissão de dados do ESP8266)
- **Etapa 3** Conecte a Wio Lite ao seu PC com o cabo USB Tipo C para A para alimentação e porta serial de download.

#### Código de software

```
#include <Arduino.h>
const bool printReply = true;
const char line[] = "-----\n\r";
int loopCount=0;

char html[50];
char command[20];
char reply[500]; // you wouldn't normally do this

char ipAddress [20];
char LED[30];
int lenHtml = 0;
char temp[5];

void getReply(int wait)
{ 
    int tempPos = 0;
    long int time = millis();
    while( (time + wait) > millis())
    {   
        while(Serial1.available()>0)
        {   
            char c = Serial1.read(); 
            if (tempPos < 500) { reply[tempPos] = c; tempPos++;   }
        }
        reply[tempPos] = 0;
    } 

    if (printReply) { Serial.println( reply );  Serial.println(line);     }
}
void setup() 
{
  Serial.begin(115200);  //serial port of GD32
  Serial1.begin(115200);  //serial port of ESP8266
  pinMode(LED_BUILTIN, OUTPUT);

  delay(3000);

  Serial1.println("AT+CWQAP");
  getReply(2000);

  Serial1.println("AT+CWMODE=1");
  getReply(2000);

  Serial1.println("AT+CWJAP=\"Your WiFi SSID\",\"Password\""); // add your own wifi
  getReply(5000);

  Serial1.print("AT+CIFSR\r\n");
  getReply(2000);

   int len = strlen( reply ); 
      bool done=false;
      bool error = false;
      int pos = 0;
      while (!done)
      {
           if ( reply[pos] == 34) { done = true;} 
           pos++;
           if (pos > len) { done = true;  error = true;}
      }

      if (!error)
      {
            int buffpos = 0;
            done = false;
            while (!done)
            {
               if ( reply[pos] == 34 ) { done = true; }
               else { ipAddress[buffpos] = reply[pos];    buffpos++; pos++;   }
            }
            ipAddress[buffpos] = 0;
      }
      else { strcpy(ipAddress,"ERROR"); }


      Serial.println(ipAddress);

      Serial1.print("AT+CIPMUX=1\r\n");
      getReply( 1500 );

      Serial1.print("AT+CIPSERVER=1,80\r\n");
      getReply( 1500 );


}

void loop()
{
          if(Serial1.available()) // check if the ESO8266 is sending data
        {
          // this is the +IPD reply - it is quite long. 
          // normally you would not need to copy the whole message in to a variable you can copy up to "HOST" only
          // or you can just search the data character by character as you read the serial port.

          getReply( 2000 );      


          bool foundIPD = false;
          for (int i=0; i<strlen(reply); i++)
          {
               if (  (reply[i]=='I') && (reply[i+1]=='P') && (reply[i+2]=='D')   ) { foundIPD = true;    }
          }




          if ( foundIPD  )  
          {

              loopCount++;
              // Serial.print( "Have a request.  Loop = ");  Serial.println(loopCount); Serial.println(""); 

            bool LEDstate = false;
            int LEDstatepos = 0;
              for (int i=0; i<strlen(reply); i++)
              {
                   if (!LEDstate) // just get the first occurrence of name
                   {
                         if ( (reply[i]=='L') &&  (reply[i+1]=='E')&&  (reply[i+2]=='D')&&  (reply[i+3]=='=')) 
                         { 
                             LEDstate = true;
                             LEDstatepos = i+4;

                         }

                   }     
              }

                  if (LEDstate)
              {
                    int tempPos = 0;
                    bool finishedCopying = false;
                    for (int i= LEDstatepos; i<strlen(reply); i++)
                    {
                         if ( (reply[i]==' ') && !finishedCopying )  { finishedCopying = true;   } 
                         if ( !finishedCopying )                     { LED[tempPos] = reply[i];   tempPos++; }
                    }              
                    //LED[tempPos] = 0;
              }

              if (LEDstate) { Serial.print( "LED state = ");  Serial.println(LED); Serial.println("");

              } 
              else          { Serial.println( "format incorrect");   Serial.println("");           }

              Serial.println("111");
              Serial.println(LED);
              Serial.println("000");
                  if(strcmp(LED,"on")==0){digitalWrite(LED_BUILTIN, HIGH); }
                  if(strcmp(LED ,"off")==0){digitalWrite(LED_BUILTIN, LOW); }
            strcpy(html,"<html><head></head><body>");
            strcpy(command,"AT+CIPSEND=0,25\r\n");
            Serial1.print(command);
            getReply(2000);
            Serial1.print(html);
            getReply(2000);


            strcpy(html,"<h1>LED Test</h1>");
            strcpy(command,"AT+CIPSEND=0,17\r\n");
            Serial1.print(command); 
            getReply(2000);      
            Serial1.print(html);
            getReply(2000);

            strcpy(html,"<p>LED Statment</p>");
            strcpy(command,"AT+CIPSEND=0,19\r\n");
            Serial1.print(command);  
            getReply(2000);     
            Serial1.print(html);
            getReply(2000);



                if (LEDstate)
             {
                  // write name
                  strcpy(html,"<p>LED state is "); strcat(html, LED ); strcat(html,"</p>");

                  // need the length of html for the cipsend command
                  lenHtml = strlen( html );
                  strcpy(command,"AT+CIPSEND=0,"); __itoa( lenHtml, temp, 10); strcat(command, temp); strcat(command, "\r\n");
                  Serial1.print(command);
                  getReply( 2000 );          
                  Serial1.print(html);
                  getReply( 2000 );                           
             }


              strcpy(html,"<form action=\""); strcat(html, ipAddress); strcat(html, "\" method=\"GET\">"); strcat(command, "\r\n");

              lenHtml = strlen( html );
              __itoa( lenHtml, temp, 10);
              strcpy(command,"AT+CIPSEND=0,"); 
              __itoa( lenHtml, temp, 10); 
              strcat(command, temp);  
              strcat(command, "\r\n");

              Serial1.print(command);
              getReply( 2000 );          
              Serial1.print(html);
              getReply( 2000 );          

              strcpy(html,"LEDstate:<br><input type=\"text\" name=\"LED\">");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );
              Serial1.print(html);         
              getReply( 2000 );         

              strcpy(html,"<input type=\"submit\" value=\"Submit\"></form>");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );       
              Serial1.print(html);
              getReply( 2000 );   



            strcpy(html,"</body></html>");
            strcpy(command,"AT+CIPSEND=0,14\r\n");
            Serial1.print(command);
            getReply( 2000 ); 
            Serial1.print(html);
            getReply( 2000 ); 

            Serial1.print( "AT+CIPCLOSE=0\r\n" );
            getReply( 1500 ); 

          } // if(espSerial.find("+IPD"))
      } //if(espSerial.available())

      for (int i=0; i<3 ;i++)
      {LED[i]=NULL;}
      delay (100);

      // drop to here and wait for next request.
}


```

- **Passo 1** Crie um framework Arduino no PlatformIO como acima, copie este código e compile-o. Use a ferramenta DFU para baixá-lo na placa.

- **Passo 2** Use um assistente Serial como o Mobaxterm, configure a taxa de transmissão correta e a porta serial.

- **Passo 3** Pressione o botão de reset, você verá o "AT command" impresso no assistente Serial.

- **Passo 4** Após imprimir "AT+CIPSERVER=1,80"; defina o endereço IP do seu ESP8266 como o endereço do site e abra-o, você verá um site para controlar o LED on-board depois que a Serial imprimir "AT+CIPCLOSE=0".

![](https://files.seeedstudio.com/products/102991310/img/wiki2.png)

- **Passo 5** Digite "on" ou "off" e envie; o LED de usuário on-board será ligado ou desligado. E o estado do LED será impresso no site. E o seu LED on-board seguirá esse estado.

![](https://files.seeedstudio.com/products/102991310/img/wiki3.png)

![](https://files.seeedstudio.com/products/102991310/img/wiki4.png)

## Recursos

- **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
- **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
- **[Zip]** [DFU Tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)

## Suporte Técnico & Discussão de Produto

 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
