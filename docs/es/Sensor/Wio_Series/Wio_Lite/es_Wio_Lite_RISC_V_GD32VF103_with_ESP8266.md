---
title: Wio Lite RISC V GD32VF103 con ESP8266
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/
slug: /es/Wio_Lite_RISC_V_GD32VF103_with_ESP8266
last_update:
  date: 01/11/2022
  author: gunengyu
---


<!-- ！[](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png" alt="pir" width={600} height="auto" /></p>

Wio Lite RISC-V es una placa de desarrollo RISC-V con factor de forma feather basada en GD32VF103, con el ESP8266 Wio Core integrado, también cuenta con función WiFi.

GD32VF103CBT6 es un núcleo Bumblebee basado en Nuclei System Technology. Soporta el conjunto de instrucciones RV32IMAC y la función de interrupción rápida ECLIC. El consumo de energía del núcleo es solo 1/3 del de un Cortex-M3 tradicional.

El núcleo WiFi ESP8266 integrado y el circuito de carga Lipo lo convierten en una placa de control IoT perfecta. También hay una ranura micro SD en la parte posterior de esta placa, que puede expandir los recursos del sistema.

Mientras tanto, como una placa Wio Lite, Wio Lite RISC-V definitivamente puede funcionar con el [Grove Shield para Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html). Con este shield, [más de 200 sensores, actuadores y pantallas Grove](https://www.seeedstudio.com/grove.html) están a tu disposición. Por ejemplo, puedes elegir cualquier [grove OLED](https://www.seeedstudio.com/catalogsearch/result/?cat=&q=grove+OLED) que te guste para convertirla en una placa de desarrollo visual.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Características

- MCU RISC-V GD32VF103CBT6
- ESP8266 WiFi Wio Core
- Factor de forma Feather
- Puerto Lipo JST2.0
- Ranura SD integrada
- USB Tipo C

## Descripción del Hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/hardware.png)

### Plataformas Soportadas

| PlatformIO                                                                                            | Arduino                                                                                             | Raspberry Pi                                                                                      |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/products/102991310/img/platformio-logo.png) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) |

## Comenzando

### Comenzando con PlatformIO

#### Hardware

**Materiales requeridos**

- [Wio Lite RISC-V (GD32VF103) - Con ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
- [Cable USB 3.1 Tipo C a A](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)

- **Paso 1** Conecta el Wio Lite y tu PC mediante el cable USB Tipo C a A para alimentación y puerto serie de descarga.

#### Software

:::note
 RISC-V GD32 ya es compatible con el IDE PlatformIO con framework Arduino, pero hasta ahora no es compatible con Arduino IDE.
:::

- **Paso 1**

Configura el IDE platformIO, el IDE platformIO está basado en Visual Studio Code.
Descarga [Visual Studio Code](https://code.visualstudio.com/).
Haz clic en el icono "Extensions", puedes encontrarlo en el lado izquierdo de Visual Studio Code.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)

Escribe "platformIO" en el motor de búsqueda para instalarlo.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

- **Paso 2**

Abre el IDE PlatformIO y haz clic en "New project" para crear el proyecto. Escribe el nombre del proyecto y elige GD32VF103V-EVAL(Sipeed) para la placa. El framework es Arduino. haz clic en "finish".

- **Paso 3**

Edita tu código del framework Arduino, haz clic en el botón compilar en la parte inferior de Visual Studio Code.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)

- **Paso 4**

El código se compila a un archivo binario. Puedes usar la [herramienta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) para descargar el archivo binario a la placa. Además necesitas instalar el firmware DFU para permitir que la placa descargue el código mediante DFU. El firmware DFU está en el mismo documento de la [herramienta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar).

- **Paso 5**

Presiona el botón reset en el Wio Lite con el interruptor boot a la izquierda y la herramienta DFU reconocerá tu placa después de que instales el frameware de la herramienta DFU.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)

Ahora gira el interruptor boot a la derecha, encuentra tu archivo binario compilado y descárgalo a la flash de la placa. haz clic en "Leave DFU" para que la placa se desconecte de la herramienta DFU, y tu código se graba correctamente en tu placa.

### Demo de control del LED de usuario integrado mediante el sitio web

#### Hardware

**Materiales requeridos**

- [Wio Lite RISC-V (GD32VF103) - Con ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
- Cualquier adaptador USB a TTL como [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5.html)
- [Cable USB 3.1 Tipo C a A](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)

- **Paso 1** Usa el adaptador USB a TTL para conectar con el puerto serie del Wio Lite.(El puerto serie del Wio Lite es pin PA9-TX. PA10-RX)
- **Paso 2** Usa otro adaptador USB a TTL para conectar con el puerto serie del ESP8266 (Si quieres monitorear la transmisión de datos del ESP8266)
- **Paso 3** Conecta el Wio Lite y tu PC mediante el cable USB Tipo C a A para alimentación y puerto serie de descarga.

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

- **Paso 1** Crea un framework Arduino de PlatformIO como se muestra arriba, copia este código y compílalo. Usa la herramienta DFU para descargarlo en la placa.

- **Paso 2** Usa un asistente serie como Mobaxterm, configura la velocidad de baudios correcta y el puerto serie.

- **Paso 3** Presiona el botón de reset, verás el "comando AT" impreso en el asistente serie.

- **Paso 4** Después de imprimir "AT+CIPSERVER=1,80"; Configura tu dirección IP de tu ESP8266 para la dirección del sitio web y ábrela, verás un sitio web para controlar el LED de la placa después de que el puerto serie imprima "AT+CIPCLOSE=0".

![](https://files.seeedstudio.com/products/102991310/img/wiki2.png)

- **Paso 5** Escribe "on" o "off" y envía, el LED de usuario de la placa se encenderá o apagará. Y el estado del LED se imprimirá en el sitio web. Y tu LED de la placa seguirá el estado.

![](https://files.seeedstudio.com/products/102991310/img/wiki3.png)

![](https://files.seeedstudio.com/products/102991310/img/wiki4.png)

## Recursos

- **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
- **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
- **[Zip]** [Herramienta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)

## Soporte Técnico y Discusión del Producto

 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
