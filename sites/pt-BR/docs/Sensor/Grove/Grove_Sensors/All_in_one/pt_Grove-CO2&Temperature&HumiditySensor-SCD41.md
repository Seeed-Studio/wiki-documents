---
description: Grove - Sensor de CO2, Temperatura e Umidade (SCD41)
title: Grove - Sensor de CO2, Temperatura e Umidade (SCD41)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41
sku: 101020952
last_update:
  date: 12/30/2022
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41/
---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/101020952_Preview-07.png" /></div>

O Grove - Sensor de CO2, Temperatura e Umidade - SCD41 é um módulo pequeno, mas poderoso, fabricado pela Sensirion. É um sensor multifuncional que pode medir temperatura, pressão, umidade e CO2 ao mesmo tempo. Ele é baseado no módulo SCD41 e você pode usar este sensor no seu GPS, dispositivos de IoT ou em qualquer outro dispositivo que precise desses quatro parâmetros.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- 3 em 1 para múltiplas medições
- baixo consumo de energia
- Ampla faixa de medição
- Interface I2C
- Ampla faixa de alimentação

## Especificações

|Item|Valor|
|---|---|
|Tensão de trabalho|2.4V~5V|
|Faixa de operação|-10~+60℃; 0-100% U.R.; 0-40.000ppm|
| I2C Address | 0x62 |

## Visão geral de hardware

### Mapa de pinos

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/1111.jpg" /></div>

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como compatíveis são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas bibliotecas de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Sensor de CO2, Temperatura e Umidade - SCD41 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/thumbnail.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">Adquira agora</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Temperature&Humidity&Pressure&Gas Sensor (BME680) à porta **I2C** do Grove - Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/2222.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove-BME680           |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [arduino-i2c-scd4x](https://github.com/Sensirion/arduino-i2c-scd4x) e a dependência [arduino-core](https://github.com/Sensirion/arduino-core) no GitHub.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo **Sensirion I2c SCD4x** pelo caminho: **File --> Examples --> Sensirion I2c SCD4x --> exampleUsage**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/6267778524616.png" /></div>

- **Passo 4.** Envie o código de demonstração. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá o resultado.

O resultado deve ser como:

```c
Serial: 0x6A565F073B88
Waiting for first measurement... (5 sec)
Co2:868 Temperature:33.08 Humidity:49.40
Co2:845 Temperature:32.72 Humidity:50.13
Co2:852 Temperature:32.28 Humidity:51.54
```

:::note
- Para obter valores estáveis e precisos, você precisa deixar o Arduino rodar o código por cerca de 2 horas. O resultado será muito mais confiável depois disso.
:::

## Brincar no RaspberryPi

**Materiais necessários**

| Raspberry pi | Grove Base Hat para Raspberry Pi | Grove - OLED Display 1.12" V3.0|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/thumbnail.png" /></div>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Adquira agora](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### Prepare-se para o RaspberryPi

#### Conexão I2C

- **Passo 1.** Conecte o Grove - Sensor de CO2, Temperatura e Umidade - SCD41 à porta **I2C** do Grove - Base Hat.

- **Passo 2.** Conecte o Grove - Base Hat ao RaspberryPi.

- **Passo 3.** Conecte o RaspberryPi a um PC via Serial ou SSH.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/9dfb870f961902feae92f4bde5bdeaf.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/GPIO-Pinout-Diagram.png" /></div>

#### Software

- **Passo 1.**  Habilite o I2C no RaspberryPi

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

Siga as imagens para habilitar I2C e SPI no seu RaspberryPi.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" /></div>

E então reinicie o seu RaspberryPi

```shell
sudo reboot
```

- **Passo 2.** Instale as bibliotecas necessárias

```shell
sudo apt-get install wget gcc make unzip -y
```

Instale a biblioteca WiringPi

*Se você usar WiringPi, precisa atualizar o WiringPi para a versão 2.52. Esta biblioteca pode não ser atualizada. Outras bibliotecas são recomendadas*

```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

Instale bcm2835

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

Para mais informações e as bibliotecas mais recentes, consulte o site: [bcm2835](http://www.airspayce.com/mikem/bcm2835/)

- **Etapa 3.** Baixe o driver na [Página Sensirion no GitHub](https://github.com/Sensirion/raspberry-pi-i2c-scd4x/tags) e extraia o `.zip` no seu Raspberry Pi

- **Etapa 4.** Compile o driver

**1**.Abra um terminal

**2**.Navegue até o diretório do driver. Ex.: cd ~/raspberry-pi-i2c-scd4x

**3**.Execute o comando make para compilar o driver

Saída:

```shell
rm -f scd4x_i2c_example_usage
cc -Os -Wall -fstrict-aliasing -Wstrict-aliasing=1 -Wsign-conversion -fPIC -I. -o scd4x_i2c_example_usage  scd4x_i2c.h scd4x_i2c.c sensirion_i2c_hal.h sensirion_i2c.h sensirion_i2c.c \
sensirion_i2c_hal.c sensirion_config.h sensirion_common.h sensirion_common.c scd4x_i2c_example_usage.c
```

- **Etapa 5.** Teste o sensor conectado

Execute `./scd4x_i2c_example_usage` no mesmo diretório que você usou para compilar o driver.

Saída:

```c
serial: 0xbff79f073b51
CO2: 799
Temperature: 20.92
Humidity: 35.95
CO2: 900
Temperature: 20.92
Humidity: 36.47
CO2: 926
Temperature: 20.81
Humidity: 36.85
...
```

Para mais informações, confira [Sensirion/raspberry-pi-i2c-scd4x no GitHub](https://github.com/Sensirion/raspberry-pi-i2c-scd4x).

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Datasheet dos Sensores de CO2 Sensirion SCD4x](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/Sensirion_CO2_Sensors_SCD4x_Datasheet.pdf)
- **[STEP]** [Arquivo STEP dos Sensores de CO2 Sensirion SCD4x](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/Sensirion_CO2_Sensors_SCD4x_STEP_file.step)
- **[ZIP]** [Grove - CO2 & Temperature & Humidity Sensor - Arquivo da Placa SCD41](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>