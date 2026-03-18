---
title: Grove - GPS
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-GPS/
slug: /Grove-GPS
sku: 113020003
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-GPS/
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/Grove-GPS.jpg" /><figcaption><b /><i /></figcaption>
</div>

Este módulo Grove - GPS é um dispositivo programável em campo e com bom custo-benefício, equipado com um SIM28 (u-blox 6 é a versão antiga) e configuração de comunicação serial. Ele possui um receptor GPS com 22 canais de rastreamento / 66 canais de aquisição. A sensibilidade de rastreamento e aquisição chega a -160 dBm, tornando-o uma ótima escolha para projetos de navegação pessoal e serviços de localização, bem como um produto de destaque entre os da mesma faixa de preço.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-GPS-Module.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>


:::tip
Lançamos o [Seeed GPS Modules Selection Guide](https://wiki.seeedstudio.com/pt-br/GPS-Modules-Selection-Guide/), que ajudará você a escolher o módulo GPS que melhor atende às suas necessidades.
:::

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| Grove - GPS V1.2 | Inicial                                                                                                                                                                                    | Out 2015           |

## Recursos

- Suporta protocolos NMEA e u-blox 6. (Até 10 de jan. de 2014, depois disso SIM28 em vez disso)
- Baixo consumo de energia
- Taxas de baud configuráveis
- Interface compatível com Grove

:::tip
 Para mais detalhes sobre os módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

| **Parâmetro**   | **Faixa/Valor**              |
|------------------|------------------------------|
| Tensão de Entrada | 3,3/5V                      |
| BaudRate         | 4800 - 57600(u-blox version) |
| BaudRate         | 9600 - 115200(SIM28 version) |
| BaudRate Padrão  | 9600                         |

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maior parte dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

Este exemplo simplesmente lê do GPS usando software serial e envia de volta pela porta serial.

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - GPS |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-GPS/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-GPS-p-959.html)|

- **Passo 2.** Conecte o Grove - GPS à porta **D2** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/with_ardu.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar o Grove - GPS diretamente ao Seeeduino conforme abaixo.
:::
| Seeeduino     | Grove - GPS |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| D3            | Branco                  |
| D2            | Amarelo                 |

#### Software

:::note
    Observe que o software u-center é apenas para Windows.
:::

- **Passo 1.** Instale o software [u-center](https://www.u-blox.com/en/product/u-center-windows).
- **Passo 2.** Copie o código para a IDE do Arduino e faça o upload. Se você não souber como enviar o código, verifique [como enviar código](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];                   // buffer array for data receive over serial port
int count=0;                                // counter for buffer array
void setup()
{
    SoftSerial.begin(9600);                 // the SoftSerial baud rate
    Serial.begin(9600);                     // the Serial port of Arduino baud rate.
}

void loop()
{
    if (SoftSerial.available())                     // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++]=SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);                 // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();                         // call clearBufferArray function to clear the stored data from the array
        count = 0;                                  // set counter of while loop to zero 
    }
    if (Serial.available())                 // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());        // write it to the SoftSerial shield
}


void clearBufferArray()                     // function to clear buffer array
{
    for (int i=0; i<count;i++)
    {
        buffer[i]=NULL;
    }                      // clear all index of array with command NULL
}
```

- **Passo 3.** Abra o U-center.

- **Passo 4.** Clique em Receiver -> Port e selecione a porta COM que o Arduino está usando.

- **Passo 5.** Clique em Receiver -> Baudrate e certifique-se de que 9600 está selecionado.

- **Passo 6.** Clique em View -> Text Console e você deverá obter uma janela que irá transmitir dados NMEA.

- **Passo 7.** Abra o monitor serial. Você poderá ver como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/GPS_result.jpg)

**Também podemos visualizar dados no Google Earth:**

- **Passo 1.** Clique em File -&gt; Database Export -&gt; Google Earth KML

- **Passo 2.** Isso deverá abrir o Google Earth com o histórico que foi capturado pelo u-center.

- **Passo 3.** Alternativamente, os dados podem ser gravados pressionando o círculo vermelho na barra de ferramentas, que então perguntará onde você deseja salvar o registro.

- **Passo 4.** Quando tivermos capturado dados suficientes, clique no quadrado preto para parar a gravação.

- **Passo 5.** Podemos então converter o arquivo .ubx gerado para KML enviando o arquivo ubx para o [GPSVisualizer](http://www.gpsvisualizer.com/).

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Grove - GPS |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-GPS/img/45d_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o sensor ao soquete **RPISER** do grovepi+ usando um cabo Grove.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/witu_rpi.jpg)

#### Software

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.

- **Passo 2.** Navegue até o diretório de demonstrações:

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
cd GrovePi/Software/Python/grove_gps
```

- **Passo 3.** Para ver o código

```
nano grove_gps_data.py   # "Ctrl+x" to exit #
```

```py
import serial, time
import smbus
import math
import RPi.GPIO as GPIO
import struct
import sys
#import ir_receiver_check

enable_debug=1
enable_save_to_file=0

#if ir_receiver_check.check_ir():
# print("Disable IR receiver before continuing")
# exit()

ser = serial.Serial('/dev/ttyAMA0',  9600, timeout = 0) #Open the serial port at 9600 baud
ser.flush()

def cleanstr(in_str):
 out_str = "".join([c for c in in_str if c in "0123456789.-" ])
 if len(out_str)==0:
  out_str = "-1"
 return out_str

def safefloat(in_str):
 try:
  out_str = float(in_str)
 except ValueError:
  out_str = -1.0
 return out_str

class GPS:
 #The GPS module used is a Grove GPS module https://www.seeedstudio.com/depot/Grove-GPS-p-959.html
 inp=[]
 # Refer to SIM28 NMEA spec file https://www.seeedstudio.com/wiki/images/a/a0/SIM28_DATA_File.zip
 GGA=[]


 #Read data from the GPS
 def read(self): 
  while True:
   GPS.inp=ser.readline()
   if GPS.inp[:6] =='$GPGGA': # GGA data , packet 1, has all the data we need
    break
   time.sleep(0.1)     #without the cmd program will crash
  try:
   ind=GPS.inp.index('$GPGGA',5,len(GPS.inp)) #Sometimes multiple GPS data packets come into the stream. Take the data only after the last '$GPGGA' is seen
   GPS.inp=GPS.inp[ind:]
  except ValueError:
   print ("")
  GPS.GGA=GPS.inp.split(",") #Split the stream into individual parts
  return [GPS.GGA]

 #Split the data into individual elements
 def vals(self):
  if enable_debug:
   print(GPS.GGA)

  time=GPS.GGA[1]

  if GPS.GGA[2]=='':  # latitude. Technically a float
   lat =-1.0
  else:
   lat=safefloat(cleanstr(GPS.GGA[2]))

  if GPS.GGA[3]=='':  # this should be either N or S
   lat_ns=""
  else:
   lat_ns=str(GPS.GGA[3])

  if  GPS.GGA[4]=='':  # longitude. Technically a float
   long=-1.0
  else:
   long=safefloat(cleanstr(GPS.GGA[4]))

  if  GPS.GGA[5]=='': # this should be either W or E
   long_ew=""
  else:
   long_ew=str(GPS.GGA[5])

  fix=int(cleanstr(GPS.GGA[6]))
  sats=int(cleanstr(GPS.GGA[7]))

  if  GPS.GGA[9]=='':
   alt=-1.0
  else:
   # change to str instead of float
   # 27"1 seems to be a valid value
   alt=str(GPS.GGA[9])
  return [time,fix,sats,alt,lat,lat_ns,long,long_ew]

 # Convert to decimal degrees
 def decimal_degrees(self, raw_degrees):
  try:
   degrees = float(raw_degrees) // 100
   d = float(raw_degrees) % 100 / 60
   return degrees + d
  except: 
   return raw_degrees


if __name__ == "__main__":
 g=GPS()
 if enable_save_to_file:
  f=open("gps_data.csv",'w') #Open file to log the data
  f.write("name,latitude,longitude\n") #Write the header to the top of the file
 ind=0
 while True:
  time.sleep(0.01)
  try:
   x=g.read() #Read from GPS
   [t,fix,sats,alt,lat,lat_ns,longitude,long_ew]=g.vals() #Get the individial values

   # Convert to decimal degrees
   if lat !=-1.0:
    lat = g.decimal_degrees(safefloat(lat))
    if lat_ns == "S":
     lat = -lat

   if longitude !=-1.0:
    longitude = g.decimal_degrees(safefloat(longitude))
    if long_ew == "W":
     longitude = -longitude

   # print ("Time:",t,"Fix status:",fix,"Sats in view:",sats,"Altitude",alt,"Lat:",lat,lat_ns,"Long:",long,long_ew)
   try:
    print("Time\t\t: %s\nFix status\t: %d\nSats in view\t: %d\nAltitude\t: %s\nLat\t\t: %f\nLong\t\t: %f") %(t,fix,sats,alt,lat,longitude)
   except:
    print("Time\t\t: %s\nFix status\t: %s\nSats in view\t: %s\nAltitude\t: %s\nLat\t\t: %s\nLong\t\t: %s") %(t,str(fix),str(sats),str(alt),str(lat),str(longitude))

   s=str(t)+","+str(safefloat(lat)/100)+","+str(safefloat(longitude)/100)+"\n" 

   if enable_save_to_file:
    f.write(s) #Save to file
   time.sleep(2)
  except IndexError:
   print ("Unable to read")
  except KeyboardInterrupt:
   if enable_save_to_file:
    f.close()
   print ("Exiting")
   sys.exit(0)
```

- **Passo 4.** Execute a demonstração.

```
sudo python grove_gps_data.py
```

<div class="admonition note">
<p class="admonition-title">Nota</p>
O GPS é melhor utilizado ao ar livre. Recomenda-se colocar seu Raspberry Pi do lado de fora da janela ou em qualquer lugar ao ar livre.
</div>

## Observações sobre o módulo SIM28

- **Passo 1.** O Grove-GPS mudou o módulo para SIM28, que possui o mesmo footprint da versão original.
- **Passo 2.** Devemos usar as ferramentas ["SIMCom GPS DEMO"](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIMCom_GPS_DEMO_V1.07.zip) para receber os dados do módulo SIM28.
- **Passo 3.** Abra as ferramentas SIMCom_GPS_DEMO, vá para Module->properties->module->select SIM28.
- **Passo 4.** SIMCom_GPS_DEMO_V1.07 é apenas para Windows.

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/SIM28_module_select.jpg)

- **Passo 5.** Abra as ferramentas SIMCom_GPS_DEMO, vá para Module->connect. Selecione a porta serial utilizada pelo módulo GPS.

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/SIM28_module_tools_pannel.jpg)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Arquivo Eagle do Grove-GPS](https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.zip)
- **[PDF]** [Esquemático do GPS (PDF)](https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.pdf)
- **[Datasheet]** [Datasheet do E-1612-UB](https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf)
- **[Datasheet]** [Especificação do Protocolo do Receptor U-Blox6](https://files.seeedstudio.com/wiki/Grove-GPS/res/U-blox-6-Receiver-Description-Including-Protocol-Specification.zip)
- **[Software]** [Software de avaliação de GPS U-Blox u-center](https://www.u-blox.com/en/product/u-center-windows)
- **[Document]**  [Arquivo de Dados do SIM28](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIM28_DATA_File.zip)
- **[Document]** [SIMCom_GPS_DEMO_V1.07](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIMCom_GPS_DEMO_V1.07.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_GPS -->

## Projetos

**Projeto de Rastreador GPS/GPRS**: Neste novo projeto, apresentaremos nosso Rastreador GPS conectado usando a técnica GPRS e o protocolo MQTT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
