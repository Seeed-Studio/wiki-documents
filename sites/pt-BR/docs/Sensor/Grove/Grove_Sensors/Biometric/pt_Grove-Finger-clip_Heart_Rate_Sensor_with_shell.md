---
description: Grove - Sensor de Frequência Cardíaca com Clipe de Dedo e Invólucro
title: Grove - Sensor de Frequência Cardíaca com Clipe de Dedo e Invólucro
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Finger-clip_Heart_Rate_Sensor_with_shell
sku: 101020082
last_update:
  date: 1/6/2023
  author: jianjing Huang
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell.JPG" /></div>

O Grove - Sensor de Frequência Cardíaca com Clipe de Dedo e Invólucro é baseado no PAH8001EI-2G, um sensor óptico CMOS de alto desempenho e baixo consumo de energia com LED verde e DSP integrados, servindo como um sensor de Detecção de Frequência Cardíaca (HRD). Este módulo é baseado em tecnologia óptica que mede a variação do movimento do sangue humano nos vasos. O baixo consumo de energia e o modo flexível de economia de energia o tornam adequado para dispositivos vestíveis. Como o chip do sensor de frequência cardíaca precisa de alta velocidade de processamento para o algoritmo dos dados de frequência cardíaca, este módulo integra um STM32; a interface SWD reservada permite que os usuários reprogramem o STM32. Este módulo vem com um invólucro e duas tiras que permitem aos usuários fixar o módulo facilmente no dedo, pulso ou braço.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificação

---

* Consumo de energia ultrabaixo, modo de economia de energia durante o período sem movimento de toque

* Controle flexível da taxa de sono

* STM32F103 integrado

* Interface I2C

* Área do sensor de frequência cardíaca de apenas 3,0 x 4,7 mm

* Interface SWD reservada

* equipado com invólucro e tiras

* Temperatura de trabalho: -20 a +60℃

## Função da Interface

---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg" /></div>
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg" /></div>

* 1: Interface Grove

* 2: Interface SWD reservada para programação do STM32

* 3: Sensor de frequência cardíaca

## Uso

---
Aqui forneceremos um exemplo para mostrar como usar este sensor.

### Instalação de Hardware

Conecte o sensor à porta I2C do Seeeduino com um cabo Grove.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell_connect.jpg" /></div>

Ao usar a tira para fixar este módulo no seu dedo ou pulso, mantenha a área do sensor em bom contato com a pele e permaneça sem movimento, exatamente como na imagem.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_touch.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_touch2.JPG" /></div>

### Parte de Software

### Com Arduino

Copie o código a seguir para um novo sketch do Arduino e faça o upload do sketch; então você poderá obter a frequência cardíaca a partir do Serial Monitor.
Pode levar cerca de um minuto para obter uma frequência cardíaca válida depois que você encostar o dedo no sensor.

```
#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

### Com Mbed

Leia um byte do dispositivo I2C 0xA0 (endereço de 8 bits); este é a frequência cardíaca.

```
#include "mbed.h"

I2C i2c(I2C_SDA, I2C_SCL);
const int addr = 0xA0;

int main() {
    char heart_rate;
    while (1) {
        i2c.read(addr, &heart_rate, 1);
        printf("heart rate: = %d\r\n", heart_rate);
    }
}
```

#### Atualizar firmware

Podemos atualizar o firmware do sensor de frequência cardíaca através do seu bootloader.

* O bootloader está localizado em 0x08000000 - 0x08002000

* A aplicação está localizada em 0x08002000 - 0x08020000

* Para inicializar no bootloader, conecte SWDIO ao GND e faça reset para executar

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_boot_set.jpg" /></div>

* Interface: UART (o conector Grove suporta I2C e UART); ao atualizar o firmware, a interface Grove funciona no modo UART.

VCC  -  VCC

GND  -  GND

SDA  -  TX

SCL  -  RX

* Taxa de transmissão UART: 115200

* Protocolo: ymodem (a ferramenta recomendada é Tera Term)

:::note
O Grove - Sensor de Frequência Cardíaca com Clipe de Dedo fornece medições de frequência cardíaca. No entanto, ele não é um dispositivo médico. Para usar o sensor de detecção de frequência cardíaca no seu pulso, dedo ou palma, você deve:
:::

* (1) Prender o sensor firmemente para que faça contato justo com a sua pele e permanecer estável (sem movimento) durante a medição para adquirir uma frequência cardíaca precisa. Se o sensor não entrar em bom contato com a pele ou houver movimento extremo durante a medição, a frequência cardíaca não será medida corretamente.
* (2) O desempenho do sensor é otimizado com maior fluxo sanguíneo. Em dias frios ou quando os usuários têm má circulação (por exemplo: mãos, dedos e pés frios), o desempenho do sensor (precisão da frequência cardíaca) pode ser afetado devido ao menor fluxo sanguíneo na posição de medição.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - Arquivo eagle do Sensor de Frequência Cardíaca com Clipe de Dedo](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar)

* [Grove - Arquivo bin do Sensor de Frequência Cardíaca com Clipe de Dedo](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

