---
description: Grove - Sensor TDS
title: Grove - Sensor TDS
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-TDS-Sensor
sku: 101020753
last_update:
  date: 7/12/2024
  author: Harrison Xu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-TDS-Sensor/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg" alt="pir" width={600} height="auto" /></p>
O Grove - TDS Sensor detecta os níveis de Sólidos Totais Dissolvidos (TDS) na água, que podem ser usados para indicar a qualidade da água. O Grove - TDS Sensor pode ser aplicado em aplicações de qualidade da água, como medidor de TDS, poços de água, aquários, hidroponia, etc.

Ele suporta tensão de entrada de 3,3 / 5V e Tensão de Saída de 0 ~ 2,3V, o que o torna facilmente compatível com todas as placas Arduino. O sensor também fornece uma sonda à prova d'água, tornando o processo de teste muito mais fácil de manusear.
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)
## Características

- Sinal analógico, fácil de implementar
- Suporta Tensão de Entrada de 3,3 / 5V
- Boa compatibilidade com Arduino, onde a Tensão de Saída de 0 ~ 2,3V pode ser facilmente implementada em sistemas de controle de 3,3 / 5V
- Sonda TDS à prova d'água

## Especificações

|Parâmetro|Valor|
|---|---|
|Tensão de entrada|3.3V / 5V|
|Tensão de saída| 0 ~ 2.3V |
|Corrente de trabalho| 3 ~ 6 mA|
|Faixa de medição de TDS|0 ~ 1000ppm|
|Interface de conexão|Grove 4-Pin / XHB 2.54mm 2P|
|Interface|Analógica|
|Comprimento do cabo|60cm|
|Interface de conexão|XHB 2.54mm 2P|

## Visão geral de hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" /></a></p>
  </figure>
</div>



## Plataformas suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros passos

### Brincar com Arduino


#### Materiais necessários


| Seeeduino V4.2 | Base Shield | Grove - TDS Sensor|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Adquira AGORA](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira AGORA](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação do Seeeduino V4.2 e do Baseshield.

#### Conexão de hardware

- **Passo 1.** Conecte o Grove - TDS Sensor à porta **A0** do Grove - Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino a um PC via cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.**  Abra a IDE do Arduino e crie um novo arquivo, depois copie o código a seguir para o novo arquivo.

```cpp showLineNumbers
#define SERIAL Serial
#define sensorPin A0

int sensorValue = 0;
float tdsValue = 0;
float Voltage = 0;

void setup() {
    SERIAL.begin(9600);
}
void loop() {
    sensorValue = analogRead(sensorPin);
    Voltage = sensorValue*5/1024.0; //Convert analog reading to Voltage
    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convert voltage value to TDS value
    SERIAL.print("TDS Value = "); 
    SERIAL.print(tdsValue);
    SERIAL.println(" ppm");
    delay(1000);
}
```

- **Passo 3.** Envie o demo. Se você não sabe como enviar o código, por favor verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de baud para **9600**.

- **Passo 5.** O resultado deve ser assim quando a sonda estiver na água:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Results.gif" /></div>



### Brincar com Raspberry Pi

#### Materiais necessários

| Raspberry Pi | Grove Base Hat for RasPi | Grove - TDS Sensor|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Adquira AGORA](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

- **Passo 2.** Conecte o Grove Base Hat ao Raspberry Pi.

- **Passo 3.** Conecte o Grove - TDS sensor à porta **A0** do Base Hat.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Conecte o Raspberry Pi ao PC através de um cabo USB.

#### Software

- **Passo 1.** Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.

- **Passo 2.** Baixe o arquivo-fonte clonando a biblioteca grove para python.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Passo 3.** Execute os comandos abaixo para criar o código em python.

```sh
cd grove.py/grove/
nano TDS.py
```

- **Passo 4.** Copie o código a seguir para o arquivo:

```py showLineNumbers
import math
import sys
import time
from grove.adc import ADC

class GroveTDS:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def TDS(self):
        value = self.adc.read(self.channel)
        if value != 0:
            voltage = value*5/1024.0
            tdsValue = (133.42*voltage*voltage*voltage-255.86*voltage*voltage+857.39*voltage)*0.5
            return tdsValue
        else:
            return 0

Grove = GroveTDS

def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveTDS(int(sys.argv[1]))
    print('Detecting TDS...')

    while True:
        print('TDS Value: {0}'.format(sensor.TDS))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

- **Passo 5.** Use **Ctrl+O** para salvar e **Ctrl+X** para sair.

- **Passo 6**. Execute o seguinte para rodar:

```sh
python TDS.py 0
```

Se tudo correr bem, você poderá ver o seguinte resultado:

```sh
pi@raspberrypi:~/grove.py/grove$ python TDS.py 0
Detecting TDS...
TDS Value: 0
TDS Value: 0
TDS Value: 0
TDS Value: 0
TDS Value: 2.41591963768
TDS Value: 28.5884239197
TDS Value: 33.2677587509
TDS Value: 30.9311414242
TDS Value: 30.9311414242
```



## FAQ

**Q1:** Limitações do Grove - TDS Sensor/Medidor para Qualidade da Água (Sólidos Totais Dissolvidos)?

**A1:** As limitações são as seguintes:

- A sonda TDS à prova d'água não pode ser usada em água acima de 70°C.
- O sensor não pode ser usado para medir água corrente.
- O sensor não pode ser usado para medir água com alta concentração de poluição.
- O próprio sensor Grove não é à prova d'água.

## Visualizador Online de Esquemático


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Arquivo esquemático do Grove - TDS Sensor/Meter para Qualidade da Água (Sólidos Totais Dissolvidos)](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip)
- **[PDF]** [Datasheet do LMV324](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/LMV324-Datasheet.pdf)
- **[PDF]** [Datasheet do CD4060BM](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/CD4060BM-Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais
Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte via aplicativo tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


