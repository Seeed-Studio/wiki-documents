---
description: Grove - Display OLED Amarelo&Azul 0,96(SSD1315) - SPI/IIC -3.3V/5V
title: Grove - Display OLED Amarelo&Azul 0,96(SSD1315) - SPI/IIC -3.3V/5V
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0
sku: 104020249
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png" alt="pir" width={600} height="auto" /></p>

O Grove - Display OLED Amarelo&Azul 0,96 (SSD1315) é um display de duas cores **azul e amarelo** com resolução de 128*64. Em comparação com LCDs, há muitas vantagens em OLED (Organic Light Emitting Diode), como autoemissão, alta taxa de contraste, perfil fino/delgado, amplo ângulo de visão e baixo consumo de energia. O display funciona tanto com 3,3 V quanto com 5 V de tensão de alimentação. Você pode usar a interface **I2C** ou **SPI** para acender o display com o seu microcontrolador e exibir palavras, imagens e o que quiser.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)
## Características

- Compatível com alimentação de 3,3 V/5 V
- Endereço I2C modificável
- Suporte a SPI
- Baixo consumo de energia
- Duas cores amarelo e azul, 128×64 pixels
- Alto contraste, alto brilho
- Ampla faixa de temperatura de operação: -40℃ ~ +85 ℃

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img//10402049_Feature-02.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Feature-02.png" /></a></p>
  </figure>
</div>


## Especificações

|Parameter|Value|
|---|---|
|Input voltage|3.3V / 5V|
|Output Voltage| 0 ~ 2.3V |
|Pixels|128 x 64|
|Temperature Range|-40℃ ~ +85 ℃|
|Interface|I2C/SPI|

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Brincar com Arduino


**Materiais necessários**


| Seeeduino V4.2 | Base Shield | Grove - OLED Yellow&Blue Display 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Baseshield.

#### Conexão de Hardware (**I2C**)

- **Passo 1.** Conecte o Grove - OLED Yellow&Blue Display 0.96" à porta **I2C** do Grove - Base Shield usando o cabo Grove.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino a um PC via cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg" alt="pir" width={600} height="auto" /></p>

#### Software (**I2C**)

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.**  Acesse **Sketch** -> **Include Library** -> **Manage Libraries...** e procure e instale a biblioteca [**U8g2**](https://github.com/olikraus/u8g2) no **Library Manager**.

- **Passo 2.**  Abra a IDE do Arduino e crie um novo arquivo, depois copie o código a seguir para o novo arquivo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Software I2C

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_luBIS08_tf);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Seeed!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Studio!");    // write something to the internal memory
  u8g2.drawStr(0,50,"Hello World!");    // write something to the internal memory
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(100);  
}
```

- **Passo 3.** Faça o upload do demo. Se você não souber como fazer upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** O Display OLED deve ficar assim:

<div align="center"><img src="./hd1.jpg" /></div>

#### **Conexão de Hardware (SPI)**

- **Passo 1.** Solde o conector macho e conecte os fios.

- **Passo 2.** Siga a linha **AMARELA** para cortar o fio na placa e siga a linha **BRANCA** para soldar os painéis SPI e os painéis do meio um por um.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::caution
    Por favor, **tenha cuidado** para cortar os fios um por um seguindo as linhas **AMARELAS**, caso contrário você danificará todo o display. Recomendamos que você corte os fios sob uma lupa.
:::
**Atenção**: Este é o método errado de cortar fios!

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Siga a figura para conectar o display e o Seeeduino com fios.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Conecte o Seeeduino a um PC via cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software (**SPI**)

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.**  Acesse **Sketch** -> **Include Library** -> **Manage Libraries...** e procure e instale a biblioteca [**U8g2**](https://github.com/olikraus/u8g2) no **Library Manager**.

- **Passo 2.**  Abra a IDE do Arduino e crie um novo arquivo, depois copie o código a seguir para o novo arquivo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 12, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8); // Software SPI
void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_luBIS08_tf);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Seeed!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Studio!");    // write something to the internal memory
  u8g2.drawStr(0,50,"Hello World!");    // write something to the internal memory
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(100);  
}
```

- **Etapa 3.** Envie o demo. Se você não souber como fazer upload do código, confira [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Etapa 4.** O Display OLED deve se parecer com isto:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi2.jpg" /></div>


### Brincar com RaspberryPi


**Materiais necessários**


| Raspberry pi | Grove Base Hat para Raspberry Pi | Grove - OLED Yellow&Blue Display 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Adquira agora](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

#### **Conexão de Hardware (I2C)**

- **Etapa 1.** Conecte o OLED Yellow&Blue Display 0.96" à porta **I2C** do Grove - Base Hat.

- **Etapa 2.** Conecte o Grove - Base Hat ao RaspberryPi.

- **Etapa 3.** Conecte o RaspberryPi a um PC via Serial ou SSH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Etapa 1.**  Habilite I2C no RaspberryPi

```shell
sudo apt-get install -y python-smbus
sudo apt-get install -y i2c-tools
sudo raspi-config
```

Siga as figuras para habilitar I2C no seu RaspberryPi.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

E então reinicie o seu RaspberryPi

```shell
sudo reboot
```

- **Etapa 2.** Instale as bibliotecas necessárias

```shell
sudo apt-get install git
sudo apt-get install python-pip python3-pip
sudo apt-get install python-pil python3-pil
sudo pip install Adafruit-BBIO
sudo pip3 install Adafruit-BBIO
sudo pip install Adafruit-SSD1306
sudo pip3 install Adafruit-SSD1306
```

Depois faça o clone do **Seeed_Python_SSD1315** a partir do GitHub

```shell
git clone https://github.com/IcingTomato/Seeed_Python_SSD1315.git
```

Podemos usar `stats.py` como demo.

```shell
cd ~/Adafruit_Python_SSD1306/example/
sudo python stats.py
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg" alt="pir" width={600} height="auto" /></p>

## Introdução à Biblioteca U8g2

U8g2 é uma biblioteca gráfica monocromática para dispositivos embarcados. U8g2 oferece suporte a OLEDs e LCDs monocromáticos, que incluem o nosso chip SSD1315.

A biblioteca Arduino U8g2 pode ser instalada a partir do gerenciador de bibliotecas da Arduino IDE. U8g2 também inclui a biblioteca U8x8:

**U8g2**

- Inclui todos os procedimentos gráficos (desenho de linha/caixa/círculo).
- Suporta muitas fontes. (Quase) sem restrição na altura da fonte.
- Requer alguma memória no microcontrolador para renderizar o display.

**U8x8**

- Dispositivo apenas para saída de texto (caracteres).
- Somente fontes permitidas que caibam em uma grade de 8x8 pixels.
- Escreve diretamente no display. Nenhum buffer é necessário no microcontrolador.

Aqui fornecemos o [**U8g2 Library wiki**](https://github.com/olikraus/u8g2/wiki) bem como a página de [U8g2 API Reference](https://github.com/olikraus/u8g2/wiki/u8g2reference).

## FAQ

**P1#** O exemplo não funciona com outras placas?

**R1:** O U8g2 possui modos diferentes durante a inicialização; em vez de I2C por hardware, ele também pode usar I2C por software. Se não estiver funcionando, tente usar Software I2C. Para mais informações, visite [u8g2](https://github.com/olikraus/U8g2_Arduino). Alguns exemplos e breves introduções também são fornecidos [aqui](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0).

## Visualizador Online de Esquemático


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)_V1.0 Arquivo de Esquemático](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip)
- **[PDF]** [Folha de Dados do Módulo OLED](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/0.96-30PIN-ZJY096-2864KSWPG01.pdf)
- **[PDF]** [Folha de Dados do SSD1315](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/SSD1315.pdf)

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>