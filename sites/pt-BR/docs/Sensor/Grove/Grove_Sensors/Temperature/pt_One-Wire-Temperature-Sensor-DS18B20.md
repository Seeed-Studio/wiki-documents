---
description: Sensor de Temperatura One Wire DS18B20
title: Sensor de Temperatura One Wire DS18B20
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /One-Wire-Temperature-Sensor-DS18B20
sku: 101990019
last_update:
  date: 1/4/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/One-Wire-Temperature-Sensor-DS18B20/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/one-wire.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Este sensor de temperatura One Wire de 2 m de comprimento possui uma sonda à prova d'água e fio longo, adequado para detecção de temperatura por imersão. O chip dentro deste sensor é o **DS18B20**, que é amplamente adotado. O modelo original inclui três fios internos, sendo necessário adicionar um resistor extra para que ele funcione. Para este sensor, nós o ajustamos para uma porta Grove e adicionamos um resistor pré-montado internamente, para que você possa usá-lo como um sensor Grove comum. Este artigo vai ilustrar o uso do sensor no Raspberry Pi e se divertir!

## Atualizável para Sensores Industriais

Com o [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x fornecem uma experiência pronta para uso para sensoriamento ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101, com maior desempenho e robustez, para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8-em-1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temperatura &amp; Umidade do Ar</strong></a></td>
    </tr>
  </tbody>
</table>

## Recursos

---

- Requer apenas um fio para interface de dados
- À prova d'água
- Compatível com Grove
- Aceita fonte de alimentação de 3,0 V a 5,5 V
- Ampla faixa de temperatura: -55°C a +125°C
- Alta precisão: ±0,5°C ( -10°C a +85°C)

:::caution
A parte do cabo não pode ser colocada sob temperatura superior a 70°C por muito tempo.
:::

## Especificação

|||
|--------|---------|
|Tensão de Operação |3,0-5,5 V|
|Chip|DS18B20|
|Comprimento |2 m|
|Temperatura de Operação| -55°C a +125°C |

## Plataforma Suportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Primeiros Passos

---
Após esta seção, você poderá fazer o Sensor de Temperatura One Wire funcionar com apenas alguns passos.

### Brincar com Arduino

#### Materiais Necessários

| Seeeduino Lotus V1.1 |Sensor de Temperatura One Wire|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Get ONE Now](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### Conexão de Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/hardware-1-wire.jpg" /></div>

:::tip
Por favor conecte o cabo USB e o conector do Sensor de Temperatura One Wire na interface do Seeeduino Lotus V1.1 com cuidado, caso contrário você pode danificar a porta.
:::

- **Passo 1.** Conecte o Sensor de Temperatura One Wire na interface **D2** do Seeeduino Lotus V1.1 com um cabo Grove.

- **Passo 2.** Conecte o Seeeduino Lotus V1.1 ao PC por meio de um cabo USB.

- **Passo 3.** Baixe o código, consulte a parte de software.

- **Passo 4.** Execute o código e o resultado será exibido na tela do **Serial Monitor** na sua Arduino IDE.

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a [Library for Onewire](https://github.com/PaulStoffregen/OneWire/archive/master.zip) e a [Library for Arduino Temperature Control](https://github.com/milesburton/Arduino-Temperature-Control-Library/archive/master.zip)

- **Passo 2.** Copie todos os arquivos **OneWire** e **Arduino-Temperature-Control-Library** e cole-os na pasta de bibliotecas da sua Arduino IDE.

- **Passo 3.** Envie o código de demonstração a partir de **Software Code** abaixo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

**Software Code**

```cpp
// Include the libraries we need
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire is plugged into port 2 on the Arduino
#define ONE_WIRE_BUS 2


// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature sensors(&oneWire);

/*
 * The setup function. We only start the sensors here
 */
void setup(void)
{
  // start serial port
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // Start up the library
  sensors.begin();
}

/*
 * Main function, get and show the temperature
 */
void loop(void)
{ 
  // call sensors.requestTemperatures() to issue a global temperature 
  // request to all devices on the bus
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures(); // Send the command to get temperatures
  Serial.println("DONE");
  // After we got the temperatures, we can print them here.
  // We use the function ByIndex, and as an example get the temperature from the first sensor only.
  float tempC = sensors.getTempCByIndex(0);

  // Check if reading was successful
  if(tempC != DEVICE_DISCONNECTED_C) 
  {
    Serial.print("Temperature for the device 1 (index 0) is: ");
    Serial.println(tempC);
  } 
  else
  {
    Serial.println("Error: Could not read temperature data");
  }
}
```

:::tip
  Se tudo correr bem, você pode ir ao **Serial Monitor** para ver um resultado como o seguinte:
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/outcome-1-wire.png" alt="1-wire'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

### Brincar com Raspberry Pi

#### Materiais Necessários

| Raspberry Pi 4 Model B |Grove - Base Hat para Raspberry Pi|Sensor de Temperatura One Wire|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Get One Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get One Now](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### Conectando o hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/connection.jpg" /></div>

**Passo 1.** Conecte o Sensor de Temperatura One Wire à porta **D5** do Grove - Base Hat para Raspberry Pi, encaixado no Raspberry Pi 4 Model B. Em seguida, conecte o Raspberry Pi 4 Model B a um PC.

**Passo 2.** Depois de acessar o sistema do Raspberry Pi, faça o git clone de **[Seeed_Python_DS18B20](https://github.com/Seeed-Studio/Seeed_Python_DS18B20.git)** e instale **grove.py** inserindo o seguinte comando:

```shell
pip3 install Seeed-grove.py
```

Ou, em sistemas GNU/Linux compatíveis, como o Raspberry Pi, você pode instalar o driver localmente a partir do PyPI:

```Shell
pip3 install seeed-python-Ds18b20
```

**Passo 3.** Para instalar em todo o sistema (isso pode ser necessário em alguns casos):

```Shell
sudo pip3 install seeed-python-Ds18b20
```

E você pode inserir o seguinte comando para atualizar o driver localmente a partir do PyPI:

```Shell
pip3 install --upgrade seeed-python-Ds18b20
```

#### Software

```python
import seeed_ds18b20
import time

def main():
    DS18B20 = seeed_ds18b20.grove_ds18b20()
    print("Please use Ctrl C to quit")
    while True:
        temp_c,temp_f = DS18B20.read_temp
        print('temp_c %.2f C   temp_f %.2f F' % (temp_c,temp_f),end=" ")
        print('\r', end='')
        time.sleep(0.5)

if __name__ == "__main__":
    main()   
```

:::caution
Ao executar o código de demonstração no Raspberry Pi, você **PODE** ser lembrado de habilitar a interface **1-Wire**. Então você deve usar o comando **sudo raspi-config** e reiniciar para habilitar o dispositivo 1-Wire:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/1.png" /></div>

**Passo 4.** Execute a demonstração com o seguinte comando:

```Shell
cd Seeed_Python_DS18B20
```

```Shell
python3 examples/BasicRead.py 
```

:::tip
          O resultado será exibido da seguinte forma se tudo correr bem:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/TEM.png" /></div>

## Recurso

**[PDF]** [DS18B20-Datasheet](https://files.seeedstudio.com/wiki/One-Wire-Temperature/res/DS18B20-Datasheet.pdf).

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

