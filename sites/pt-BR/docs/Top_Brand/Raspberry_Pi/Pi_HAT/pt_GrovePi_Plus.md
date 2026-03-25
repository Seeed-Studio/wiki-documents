---
description: GrovePi Plus
title: GrovePi Plus
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /GrovePi_Plus
sku: 110060161, 103010002
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/GrovePi_Plus/
---

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/110060049%2010_02.jpg)

[GrovePi](http://www.dexterindustries.com/GrovePi/) é uma placa adicional que traz [Grove Sensors](#/Grove_System-"Grove-System") para o [Raspberry Pi](https://www.seeedstudio.com/depot/s/Raspberry%2520Pi.html?search_in_description=0). Como uma nova versão do [GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html).
Ela adiciona suporte aos novos RaspberryPi Model B+ e Model A+.
Há três furos de montagem que podem combinar perfeitamente com todas as versões do Raspberry Pi. Orifício de saída para o cabo da câmera.
Ela também melhora os subcircuitos de conversão de nível de tensão.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/GrovePi-p-2241.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

---

* 7 portas digitais

* 3 portas analógicas

* 3 portas I2C

* 1 porta Serial conectada ao GrovePi

* 1 porta Serial conectada ao Raspberry Pi

* Tensão de saída Vcc do conector Grove: 5Vdc

## Primeiros Passos

---

**<big>Bem-vindo ao Guia de Início Rápido do GrovePi+.</big>**

Se você quiser saber mais sobre como ele funciona, pode encontrar todos os arquivos de projeto no [Github Repository](https://github.com/DexterInd/GrovePi) do desenvolvedor.

**GrovePi Plus para Raspberry Pi vs. GrovePi+**

| Parâmetro                    | [GrovePi Plus for Raspberry Pi](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/pt-br/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Tensão de Trabalho          | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Portas Grove                | 6 Digitais(3.3V)   4 Analógicas(3.3V)   3 I2C(3.3V)   1 PWM(3.3V)  1 RPISER(UART) conectada ao Raspberry Pi(3.3V)  1 SWD | 7 Digitais(5V)  3 Analógicas(5V)  3 I2C(5V)  1 SERIAL: Conectada aos pinos digitais D0/1 do ATMEGA328P(5V)  1 RPISER: Conectada ao Raspberry Pi(3.3V)  1 ISP |
| Grove-Digital               | Conectar diretamente ao Raspberry Pi                                                                              | Conectar aos pinos digitais do ATMEGA328P e transferir para sinal I2C, depois através de conversor de nível para o Raspberry Pi  |
| Grove-Analog                | Conectar ao STM32F030F4P6(ADC de 12 bits) e depois transferir para sinal I2C, roteando diretamente para o Raspberry Pi | Conectar aos pinos analógicos do ATMEGA328P(ADC de 10 bits) e depois transferir para sinal I2C, depois através de conversor de nível para o Raspberry Pi |
| Grove-I2C                   | Conectar diretamente ao Raspberry Pi                                                                              | Conectar através de conversor de nível ao Raspberry Pi                                                                          |
| Grove-PWM                   | Conectar diretamente ao Raspberry Pi                                                                              | N/A                                                                                                                              |
| RPISER                      | Conectar diretamente ao Raspberry Pi                                                                              | Conectar diretamente ao Raspberry Pi                                                                                             |
| SERIAL                      | N/A                                                                                                               | Conectar aos pinos digitais D0/D1 do ATMEGA328P e transferir para sinal I2C, depois através de conversor de nível para o Raspberry Pi |
| SWD                         | Gravar firmware no STM32F030F4P6                                                                                  | N/A                                                                                                                              |
| ISP                         | N/A                                                                                                               | Gravar firmware no ATMEGA328P                                                                                                    |
| Pinos do Conector Raspberry Pi | 40                                                                                                               | 26                                                                                                                               |

### Conectar o GrovePi ao Raspberry Pi

Primeiro, monte o GrovePi no Raspberry Pi. O GrovePi desliza sobre o Raspberry Pi como mostrado na figura abaixo.

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/GrovePiPlus_wiki_3.jpg)

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/GrovePi_Wiki_1.JPG)

Certifique-se de que os pinos estejam devidamente alinhados ao empilhar o GrovePi.

### Configurar o software no Raspberry Pi

Em seguida, vamos instalar o software no Raspberry Pi. Há duas opções de instalação:

* Você pode usar nossa imagem BrickPi.

* Usar sua própria imagem. Se você já tiver sua própria distribuição de Linux em execução no Raspberry Pi, pode usar nosso script bash para configurar o GrovePi.

**Usando a imagem BrickPi**

* Baixe a imagem Brick Pi e instale a imagem no seu cartão SD. [Aqui está o link para a página do BrickPi com as etapas para configurar o cartão SD](http://www.dexterindustries.com/BrickPi/getting-started/pi-prep/). Você precisará de um cartão SD de no mínimo 4GB para esta instalação.

* Clone o repositório Github em um local apropriado no Raspbian

```
git clone https://github.com/DexterInd/GrovePi.git
```

* Execute o script bash na pasta Scripts para configurar o Raspbian. [Aqui está o tutorial para configurar com o Script.](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)

* Reinicie o seu Raspberry Pi.

**Configurando sua própria imagem**

* Clone o repositório Github em um local apropriado

```
git clone https://github.com/DexterInd/GrovePi.git
```

* Execute o script bash na pasta Scripts para configurar o Raspbian. [aqui](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) está o tutorial para configurar com o Script.

* Reinicie o Raspberry Pi e comece a usar o Grove Pi.

### Testando o GrovePi

Depois que o seu Raspberry Pi estiver configurado para funcionar com o GrovePi, é hora de vê-lo em ação.

Desenvolvemos três projetos simples para ilustrar como o GrovePi funciona.

## Produtos Suportados

---

### Lista Grove

* [1. Grove - Button](https://wiki.seeedstudio.com/pt-br/Grove-Button#Com-Raspberry-Pi)

* [2. Light Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Light_Sensor#Com-Raspberry-Pi)

* [3. Buzzer](https://wiki.seeedstudio.com/pt-br/Grove-Buzzer#Com-Raspberry-Pi)

* [4. Sound Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Sound_Sensor#Com-Raspberry-Pi)

* [5. Grove - Red LED](https://wiki.seeedstudio.com/pt-br/Grove-Red_LED#Com-Raspberry-Pi)

* [6. LCD RGB Backlight](https://wiki.seeedstudio.com/pt-br/Grove-LCD_RGB_Backlight#Com-Raspberry-Pi)

* [7. Rotary Angle Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Rotary_Angle_Sensor#Com-Raspberry-Pi)

* [8. Grove-Temperature_and_Humidity_Sensor_Pro](https://wiki.seeedstudio.com/pt-br/Grove-Temperature_and_Humidity_Sensor_Pro/#Com-Raspberry-Pi)

* [9. Ultrasonic Ranger Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Ultrasonic_Ranger#Com-Raspberry-Pi)

* [10. Relay](https://wiki.seeedstudio.com/pt-br/Grove-Relay#Com-Raspberry-Pi)

* [11. Grove-4-Digit Display](https://wiki.seeedstudio.com/pt-br/Grove-4-Digit-Display#Com-Raspberry-Pi)

* [12. Grove-6-Axis_AccelerometerAndCompass_V2.0](https://wiki.seeedstudio.com/pt-br/Grove-6-Axis_AccelerometerAndCompass_V2.0#Com-Raspberry-Pi)

* [13. Grove - Barometer (High-Accuracy)](https://wiki.seeedstudio.com/pt-br/Grove-Barometer(High-Accuracy)#Com-Raspberry-Pi)

* [14. Grove-Barometer_Sensor-BMP180](https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BMP180#Com-Raspberry-Pi)

* [15. Grove-Dust_Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Dust_Sensor#Com-Raspberry-Pi)

* [16. Grove-Electricity_Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Electricity_Sensor#Com-Raspberry-Pi)

* [17. Grove-Electromagnet](https://wiki.seeedstudio.com/pt-br/Grove-Electromagnet#Com-Raspberry-Pi)

* [18. Grove-Flame_Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Flame_Sensor#Com-Raspberry-Pi)
* [19. Grove-Gas_Sensor-MQ2](https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-MQ2#Com-Raspberry-Pi)
* [20. Grove-Gesture_v1.0](https://wiki.seeedstudio.com/pt-br/Grove-Gesture_v1.0#Com-Raspberry-Pi)
* [21. Grove-GPS](https://wiki.seeedstudio.com/pt-br/Grove-GPS#Com-Raspberry-Pi)
* [22. Grove-High_Temperature_Sensor](https://wiki.seeedstudio.com/pt-br/Grove-High_Temperature_Sensor#Com-Raspberry-Pi)
* [23. Grove-Infrared_Reflective_Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Reflective_Sensor#Com-Raspberry-Pi)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2BEagle%20FIle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* **[Eagle]** [Arquivo Eagle do GrovePi_Plus V3.0](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2BEagle%20FIle.zip)
* **[PDF]** [Arquivo PDF de esquemáticos do GrovePi_Plus V3.0](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2B%20v3.0%20Sch.pdf)
* **[PDF]** [Arquivo PDF da PCB do GrovePi_Plus V3.0](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2B%20v3.0%20PCB.pdf)
* **[Document]** [Configuração_de_Software_para_o_GrovePi](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/Setting_Up_Software_for_GrovePi.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

