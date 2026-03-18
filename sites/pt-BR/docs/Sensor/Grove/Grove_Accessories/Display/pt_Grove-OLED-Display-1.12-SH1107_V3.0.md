---
description: Grove - Display OLED 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V
title: Grove - Display OLED 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED-Display-1.12-SH1107_V3.0
sku: 104020250
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-OLED-Display-1.12-SH1107_V3.0/
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" />
</div>


O Grove - OLED Display 1.12 V3.0 (SH1107) é um display **monocromático** com resolução de 128*128. Comparado aos LCDs, há muitas vantagens nos OLED (Diodo Emissor de Luz Orgânico), como autoemissão, alta taxa de contraste, perfil fino/estreito, amplo ângulo de visão e baixo consumo de energia. O display funciona tanto com tensão de alimentação de 3.3V quanto de 5V. Você pode usar a interface **I2C** ou **SPI** para acionar o display com o seu microcontrolador e mostrar palavras, imagens e o que mais quiser.

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)
## Recurso

- Compatível com alimentação de 3.3V/5V
- Endereço I2C alterável
- SPI disponível
- Baixo consumo de energia
- monocromático 128×128 pixels
- Alto contraste, alto brilho
- Ampla faixa de temperatura de operação: -40℃ ~ +85 ℃



## Versão
  ---
  | Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
  |------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
  |Grove - OLED Display 1.12" V1.0 | Inicial                                                                                                                                                                                    | Mar 2012      |
  |Grove - OLED Display 1.12" V2.1 | Alterar o CI driver de SSD1327 para SH1107G, atualizar os pixels em escala de cinza de 96X96 para 128X128 | Nov 2015     |
  |Grove - OLED Display 1.12" V3.0 | Alterar o CI driver de SSD1107G para SH1107, atualizar a interface de I2C para I2C/SPI | Julho 2021     |

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas
---

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Hardware

Aqui mostraremos como este Grove - OLED Display funciona por meio de uma demonstração simples. Antes de tudo, você precisa preparar os seguintes itens:

| Seeeduino V4 | Grove - OLED Display 1.12`` V3.0 | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

Este é um módulo fácil de usar; tudo o que você precisa fazer é conectar o módulo à porta I2C de um Base Shield. Há 4 pinos, definidos como abaixo.

|pin|Função  | Observação   | Cor do cabo |
|--------|------|-----|---------------|
|pin1	| SCL | Clock I2C | AMARELO |
|pin2   | SDA| Dados I2C| BRANCO|
|pin3   | VCC  | Alimentação, 5V/3.3V| VERMELHO |
|pin4	| GND  | Terra | PRETO |

**Visão Geral de Hardware (I2C)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2185.JPG" />
</div>


### **Software (I2C)**

- **Passo 1.** Conecte o Grove - OLED Display 1.12'' V3.0
 à porta **I2C** do Base Shield via cabo Grove.

- **Passo 2.** Abra o Arduino IDE e o Library Manager **(Sketch > Include Library > manage Libraries)** para instalar a biblioteca u8g2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **Passo 3.** Digite "**u8g2**" no campo de pesquisa, selecione a versão mais recente e clique no botão "Install".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **Passo 4.** Faça upload do código de demonstração abaixo no seu Arduino IDE.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

:::success
       Haverá um "Hello Seeed!" exibido na tela do Grove - OLED Display 1.12'' se tudo correr bem.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>


:::note
        Se você não tiver um Base Shield, o [Seeeduino Vx Series](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) com **interface I2C** também funciona.
:::

**Visão Geral de Hardware (SPI)**

- **Passo 1.** Solde o conector macho e conecte os fios.

- **Passo 2.** Siga a linha **AMARELA** para cortar o fio na placa e siga a linha **BRANCA** para soldar os pinos SPI e os pinos do meio um por um.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::caution
    Por favor, **tenha cuidado** para cortar os fios um por um seguindo as linhas **AMARELAS**, caso contrário você danificará todo o display. Recomendamos cortar os fios sob uma lupa.
:::
**Atenção**: Este é o método errado de cortar os fios!

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Siga a figura para conectar o display e o Seeeduino com fios.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/wires.png" />
</div>


- **Passo 4.** Conecte o Seeeduino a um PC via cabo USB.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2188.JPG" />
</div>


### Software (**SPI**)

- **Passo 1.** Abra o Arduino IDE e o Library Manager **(Sketch > Include Library > manage Libraries)** para instalar a biblioteca u8g2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **Passo 2.** Digite "**u8g2**" no campo de pesquisa, selecione a versão mais recente e clique no botão "Install".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div]


- **Passo 3.** Faça upload do código de demonstração abaixo no seu Arduino IDE.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

:::success
       Haverá um "Hello Seeed!" exibido na tela do Grove - OLED Display 1.12'' se tudo correr bem.
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>


## Brincar no RaspberryPi

**Materiais necessários**


| Raspberry pi | Grove Base Hat para Raspberry Pi | Grove - OLED Display 1.12" V3.0|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### Prepare-se para o RaspberryPi

#### Conexão I2C

- **Passo 1.** Conecte o OLED Yellow&Blue Display 0.96" à porta **I2C** do Grove - Base Hat.

- **Passo 2.** Conecte o Grove - Base Hat ao RaspberryPi.

- **Passo 3.** Conecte o RaspberryPi a um PC via Serial ou SSH.

#### Conexão SPI

- **Passo 1.** Siga a tabela para conectar os fios no Grove - Base Hat.

| Grove - OLED Display 1.12" V3.0 Pins | Raspberry Pi GPIO |  BCM2835 Code |
|--------------|-------------|-------------|
| VCC | 3.3V | 3.3V |
| GND | GND | GND |
| SI | MOSI | 10 |
| SCL | SCLK | 11 |
| CS | CE0 | 8 |
| DC | GPIO.6 | 25 |
| RES | GPIO.2 | 27 |

- **Passo 2.** Conecte o Grove - Base Hat ao RaspberryPi.

- **Passo 3.** Conecte o RaspberryPi a um PC via Serial ou SSH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG" alt="pir" width={600} height="auto" /></p>

#### Software

- **Passo 1.**  Ative I2C e SPI no RaspberryPi

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

Siga as figuras para ativar I2C e SPI no seu RaspberryPi.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg" alt="pir" width={600} height="auto" /></p>

E então reinicie o seu RaspberryPi

```shell
sudo reboot
```

- **Passo 2.** Instale as bibliotecas necessárias

```shell
sudo apt-get install wget gcc make unzip -y
```

Instalar a biblioteca WiringPi

*Se você usar WiringPi, precisa atualizar o WiringPi para a versão 2.52. Esta biblioteca pode não ser atualizada. Outras bibliotecas são recomendadas*
```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

Instalar bcm2835

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

Para mais informações e as bibliotecas mais recentes, consulte o site：[bcm2835](http://www.airspayce.com/mikem/bcm2835/)

- **Passo 3.** Baixe os códigos de demonstração

**1.** Para [**I2C**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip)

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip
mkdir I2C
unzip RaspberryPiI2C.zip ./I2C/
cd ./I2C/RaspberryPiI2C/c/
sudo chmod 777 test.sh
./test.sh
```

**2.** Para [**SPI**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip)

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip
mkdir SPI
unzip RaspberryPiSPI.zip ./SPI/
cd ./SPI/RaspberryPiSPI/c/
sudo chmod 777 test.sh
./test.sh
```

Se você quiser mais demonstrações, nós também temos um pequeno vídeo.

```shell
sudo chmod 777 badapple.sh
./badapple.sh
```
<iframe width={560} height={315} src="https://www.youtube.com/embed/mHhZgUNkPM0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## Introdução à Biblioteca U8g2

U8g2 é uma biblioteca gráfica monocromática para dispositivos embarcados. U8g2 suporta OLEDs e LCDs monocromáticos, que incluem nossos chips SSD1327/SH1107G.

A biblioteca Arduino U8g2 pode ser instalada a partir do gerenciador de bibliotecas da IDE do Arduino. U8g2 também inclui a biblioteca U8x8:

**U8g2**

- Inclui todos os procedimentos gráficos (desenho de linha/caixa/círculo).
- Suporta muitas fontes. (Quase) nenhuma restrição na altura da fonte.
- Requer alguma memória no microcontrolador para renderizar o display.

**U8x8**

- Dispositivo apenas para saída de texto (caracteres).
- Apenas fontes permitidas que se ajustem a uma grade de 8x8 pixels.
- Escreve diretamente no display. Nenhum buffer é necessário no microcontrolador.

Aqui fornecemos o [**wiki da Biblioteca U8g2**](https://github.com/olikraus/u8g2/wiki) bem como a página de [Referência da API U8g2](https://github.com/olikraus/u8g2/wiki/u8g2reference).



## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---------
* **[Eagle]** [Grove-OLED Display 1.12inch no Eagle](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip)
* **[PDF]** [Grove-OLED Display 1.12inch V3.0 Sch](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.pdf)
* **[Datasheet]** [SH1107_datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/SH1107V2.1.pdf)

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
