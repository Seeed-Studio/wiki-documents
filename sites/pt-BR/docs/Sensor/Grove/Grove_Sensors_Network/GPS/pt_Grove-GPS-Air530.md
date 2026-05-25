---
title: Grove - GPS (Air530 / Air530Z)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-GPS-Air530/
slug: /Grove-GPS-Air530
sku: 109020022
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-GPS-Air530/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/03.png" style={{width:600, height:'auto'}}/></div>


Confuso porque o seu GPS não funciona bem em áreas urbanas ou ao ar livre usando apenas um ou poucos módulos de satélite? Então você não deve perder o nosso novo Grove-GPS (Air530 / Air530Z). É um módulo de posicionamento e navegação por satélite multi‑modo, altamente integrado e com alto desempenho. Ele suporta GPS / Beidou / Glonass / Galileo / QZSS / SBAS, o que o torna adequado para aplicações de posicionamento GNSS, como navegação automotiva, dispositivos vestíveis inteligentes e drones.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>


:::tip
Lançamos o [Seeed GPS Modules Selection Guide](https://wiki.seeedstudio.com/pt-br/GPS-Modules-Selection-Guide/), que ajudará você a escolher o módulo GPS que melhor se adapta às suas necessidades.
:::

## Recursos

- Econômico
- Posicionamento e navegação por satélite multi‑modo altamente integrado
- Tamanho compacto para fácil implantação
- Volume diminuto e baixo consumo de energia

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

| **Parâmetro**    | **Valor**              |
|------------------|------------------------------|
|Tensão de alimentação|3.3V/5V|
|Corrente de trabalho|até 60mA|
|Tempo de inicialização quente| 4s|
|Tempo de inicialização a frio| 30s|

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas possíveis de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

Este exemplo simplesmente lê dados do GPS usando `software serial` e os envia de volta pela porta serial.

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield|  Grove - GPS (Air530 / Air530Z)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/small.png)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

- **Passo 2.** Conecte o Grove - GPS à porta **D2** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/Hardware_conection.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar o Grove - GPS diretamente ao Seeeduino, conforme abaixo.
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

:::note
Recomendamos usar o u-center 2, o software é mais versátil e menos sujeito a travamentos.
:::

- **Passo 2.** Copie o código para a Arduino IDE e faça o upload. Se você não souber como enviar o código, consulte [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

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

- **Passo 7.** Abra o monitor serial. Você poderá ver o seguinte:

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/GPS_result.jpg)

**Também podemos visualizar os dados no Google Earth:**

:::tip
Se você estiver usando o u-center 2, pode pular as etapas a seguir, pois todos esses recursos estão integrados ao u-center 2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/9.png" style={{width:800, height:'auto'}}/></div>

:::

- **Passo 1.** Clique em File -&gt; Database Export -&gt; Google Earth KML

- **Passo 2.** Isso deverá abrir o Google Earth com o histórico que foi capturado pelo u-center.

- **Passo 3.** Como alternativa, os dados podem ser gravados pressionando o círculo vermelho na barra de ferramentas, que então perguntará onde você deseja salvar o registro.

- **Passo 4.** Quando tivermos capturado dados suficientes, clique no quadrado preto para parar a gravação.

- **Passo 5.** Podemos então converter o arquivo .ubx gerado em KML enviando o arquivo ubx para o [GPSVisualizer](http://www.gpsvisualizer.com/), e a localização (ponto vermelho) será exibida no mapa como a seguir:

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/outcome.png)

:::note
Os testes devem ser feitos preferencialmente ao ar livre para evitar imprecisões de localização causadas por má transmissão de sinal.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Grove-GPS_Air530_v1.0_.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Esquemático do GPS (PDF)](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Grove-GPS_Air530_v1.0_.zip)
- **[PDF]** [Air 530 User Booklet](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)
- **[PDF]** [Air 530Z User Manual (CN)](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530Z_Positioning_Module_User_Manual.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_GPS -->

## Projetos

**Projeto de Rastreador GPS/GPRS**: Neste novo projeto apresentaremos nosso rastreador GPS conectado usando a técnica GPRS e o protocolo MQTT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
