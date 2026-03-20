---
description: Grove - Sensor de CO2, Temperatura e Umidade (SCD30)
title: Grove - Sensor de CO2, Temperatura e Umidade (SCD30)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-CO2_Temperature_Humidity_Sensor-SCD30
sku: 101020634
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-CO2_Temperature_Humidity_Sensor-SCD30/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/main.jpg" /></div>

O Grove - CO2 & Temperature & Humidity Sensor (SCD30) é um sensor de dióxido de carbono de alta precisão, baseado no Sensirion SCD30. A faixa de medição deste sensor é de 0 ppm-40'000 ppm, e a precisão de medição pode chegar a ±(30 ppm + 3%) entre 400 ppm e 10'000 ppm.  

Além da tecnologia de medição de Infravermelho Não Dispersivo (NDIR) para detecção de CO2, o SCD30 integra sensores de umidade e temperatura Sensirion no mesmo módulo de sensor.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira um agora 🖱️</font></span></strong>
    </a>
</div>


## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x proporcionam uma experiência pronta para uso em sensoriamento ambiental. Consulte o Sensor Sem Fio S2103 de CO2, Temperatura e Umidade, com desempenho e robustez superiores para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade luminosa, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2103 Temperatura do Ar, Umidade &amp; CO2</strong></a></td>
    </tr>
  </tbody>
</table>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - CO2 & Temperature & Humidity Sensor (SCD30) V1.0 | Inicial                                                                                               | Dez 2018      |

## Ideias de Aplicação

- Purificador de ar
- Monitoramento ambiental
- Monitoramento ambiental de plantas

## Características

- Tecnologia de sensor de CO2 NDIR
- Sensor de temperatura e umidade integrado
- Melhor relação desempenho-preço
- Detecção de canal duplo para estabilidade superior
- Interface digital I2C
- Baixo consumo de energia
- Vida útil ultra longa do sensor (15 anos)

## Especificação

|Parâmetro|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura de operação| 0 – 50℃|
|Temperatura de armazenamento|- 40°C – 70°C|
|Condições de operação de umidade|0 – 95 %RH|
|Vida útil do sensor|15 anos|
|Interface|I2C|
|Endereço I2C|0x61|
|Tamanho|C: 61mm L: 42mm A: 19mm|
|Peso|19.7g|
|Tamanho da embalagem|C: 110mm L: 70mm A: 40mm|
|Peso bruto| 27g|

<div align="center"><b>Tabela 1.</b><i>Especificações gerais</i></div>

|Parâmetro|Condições|Valor|
|---|---|----|
|Faixa de medição de CO2||0 – 40’000 ppm|
|Precisão| 400ppm – 10'000ppm| ± (30 ppm + 3%)|
|Repetibilidade|400ppm – 10'000ppm|10ppm|
|Tempo de resposta|τ63%|20 s|

<div align="center"><b>Tabela 2.</b><i>Especificações do Sensor de CO2</i></div>

|Parâmetro|Condições|Valor|
|---|---|----|
|Faixa de medição de umidade||0 %RH – 100 %RH|
|Precisão| 0 – 50°C, 0 – 100%RH| ±2 %RH|
|Repetibilidade||0.1 %RH|
|Tempo de resposta|τ63%|8 s|

<div align="center"><b>Tabela 3.</b><i>Especificações do Sensor de Umidade</i></div>

|Parâmetro|Condições|Valor|
|---|---|----|
|Faixa de medição de temperatura||-40°C – 120°C|
|Precisão| 0 – 50°C| ±0.5°C|
|Repetibilidade||0.1°C|
|Tempo de resposta|τ63%|> 2 s|

<div align="center"><b>Tabela 4.</b><i>Especificações do Sensor de Temperatura</i></div>

|Parâmetro|Condições|Valor|
|---|---|----|
|Corrente média|Intervalo de atualização 2 s|19 mA|
|Corrente máx.| Durante a medição| 75 mA|
|Consumo de energia|1 medição|120 mJ|

<div align="center"><b>Tabela 5.</b><i>Especificações Elétricas</i></div>

## Visão Geral do Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center' }}><a href="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" /></a></p>
</figure>
</div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove-CO2 & T&H SCD30|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação do Seeeduino V4.2 e do Baseshield.

:::note
  **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos de 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

  **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

**Conexão de Hardware**

- **Passo 1.** Conecte o Grove - CO2 & Temperature & Humidity Sensor (SCD30) à porta **I2C** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/connect.png" /></div>

#### Software

:::caution
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed SCD30 Library](https://github.com/Seeed-Studio/Seeed_SCD30) no Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo; você pode abri-lo das seguintes três maneiras：
    a. Abra-o diretamente na Arduino IDE pelo caminho: **File --> Examples -->Grove_scd30_co2_sensor-->SCD30_Example**.

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c1.jpg" /></div>

    b. Abra-o no seu computador clicando em **SCD30_Example.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_SCD30-master\examples\SCD30_Example**, onde **XXXX** é o local em que você instalou a Arduino IDE.

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c3.jpg" /></div>

    c. Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na Arduino IDE.

```cpp
#include "SCD30.h"

#if defined(ARDUINO_ARCH_AVR)
 #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
 #define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.") 
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
 #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
 #define SERIAL SerialUSB
#else
 #pragma message("Not found any architecture.")
 #define SERIAL Serial
#endif



void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    SERIAL.println("SCD30 Raw Data");
    scd30.initialize();
}

void loop()
{
    float result[3] = {0};

    if(scd30.isAvailable())
    {
        scd30.getCarbonDioxideConcentration(result);
        SERIAL.print("Carbon Dioxide Concentration is: ");
        SERIAL.print(result[0]);
        SERIAL.println(" ppm");
        SERIAL.println(" ");
        SERIAL.print("Temperature = ");
        SERIAL.print(result[1]);
        SERIAL.println(" ℃");
        SERIAL.println(" ");
        SERIAL.print("Humidity = ");
        SERIAL.print(result[2]);
        SERIAL.println(" %");
        SERIAL.println(" ");
        SERIAL.println(" ");
        SERIAL.println(" ");
    }

    delay(2000);
}

```

:::caution
        O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Step 4.** Faça o upload do demo. Se você não sabe como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
  Se tudo correr bem, os dados brutos do Grove - CO2 & Temperature & Humidity Sensor (SCD30) poderão ser lidos no Serial Monitor.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c2.jpg" /></div>

## Calibração e Posicionamento

Para obter resultados mais precisos em um cenário prático, você precisa prestar atenção aos dois pontos a seguir:  

- 1. O posicionamento correto  
- 2. Calibração

### Posicionamento

Consulte o [SCD30 Design-In Guidelines](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf) para o posicionamento correto.

### Calibração

Quando ativado pela primeira vez, é necessário um período mínimo de 7 dias para que o algoritmo possa encontrar seu conjunto inicial de parâmetros para ASC. O sensor deve ser exposto ao ar fresco por pelo menos 1 hora todos os dias. Além disso, durante esse período, o sensor não pode ser desconectado da fonte de alimentação, caso contrário o procedimento para encontrar os parâmetros de calibração será interrompido e terá de ser reiniciado desde o início. Os parâmetros calculados com sucesso são armazenados na memória não volátil do SCD30, com o efeito de que, após uma reinicialização, os parâmetros encontrados anteriormente para ASC ainda estarão presentes. Para mais detalhes sobre a calibração, consulte o [Interface Description Sensirion SCD30 Sensor Module](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

Existem dois exemplos ino na pasta da biblioteca SCD30, você pode executar o `SCD30_auto_calibration.ino` para iniciar a calibração.

### Brincar com Raspberry Pi 

#### Hardware

- **Step 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove-CO2 & T&H SCD30 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **Step 2**. Conecte o Grove Base Hat ao Raspberry.
- **Step 3**. Conecte o Grove-CO2 à porta **I2C** do Base Hat.
- **Step 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/C02.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, terá que usar esta linha de comando **apenas com Python3**.
:::

- **Step 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Step 2**. Entre no ambiente virtual relevante.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Step 3**. Execute o comando abaixo para rodar o código.

- O seguinte é para verificar o código grove_co2_scd30.py.

```
less grove_co2_scd30.py
```

```python

from typing import NoReturn
from grove.i2c import Bus
import struct
import time


class GroveCo2Scd30(object):
    __COMMAND_TRIGGER_CONTINUOUS_MEASUREMENT = 0x0010
    __COMMAND_STOP_CONTINUOUS_MEASUREMENT = 0x0104
    __COMMAND_SET_MEASUREMENT_INTERVAL = 0x4600
    __COMMAND_GET_DATA_READY_STATUS = 0x0202
    __COMMAND_READ_MEASUREMENT = 0x0300
    __COMMAND_ACTIVATE_ASC = 0x5306
    __COMMAND_SET_FRC = 0x5204
    __COMMAND_SET_TEMPRATURE_OFFSET = 0x5403
    __COMMAND_ALTITUDE_COMPENSATION = 0x5102
    __COMMAND_READ_FIRMWARE_VERSION = 0xd100
    __COMMAND_SOFT_RESET = 0xd304

    def __init__(self, address=0x61, bus=1):
        self.address = address
        self.bus = Bus(bus)

        self.set_measurement_interval(2)
        self.trigger_continuous_measurement()

    @staticmethod
    def _calc_crc(data: list) -> int:
        crc = 0xff

        for d in data:
            crc ^= d

            for _ in range(8):
                if crc & 0x80:
                    crc = ((crc << 1) ^ 0x31) & 0xff
                else:
                    crc = (crc << 1) & 0xff

        return crc

    def _write(self, cmd: int, data: list):
        write_data = list(struct.pack(">H", cmd))
        if data is not None:
            for d in data:
                write_data.extend(struct.pack(">H", d))
                write_data.append(GroveCo2Scd30._calc_crc(struct.pack(">H", d)))

        write_msg = self.bus.msg.write(self.address, write_data)
        self.bus.i2c_rdwr(write_msg)

    def _read(self, address: int, data_number: int) -> list:
        write_data = list(struct.pack(">H", address))

        write_msg = self.bus.msg.write(self.address, write_data)
        self.bus.i2c_rdwr(write_msg)

        read_msg = self.bus.msg.read(self.address, 3 * data_number)
        self.bus.i2c_rdwr(read_msg)

        result = []
        for i in range(data_number):
            d = read_msg.buf[i*3:i*3+2]
            if GroveCo2Scd30._calc_crc(d) != read_msg.buf[i*3+2][0]:
                raise ValueError("CRC mismatch")

            result.append(struct.unpack(">H", d)[0])

        return result

    def trigger_continuous_measurement(self, pressure: int = 0):
        self._write(self.__COMMAND_TRIGGER_CONTINUOUS_MEASUREMENT, [pressure])

    def stop_continuous_measurement(self):
        self._write(self.__COMMAND_STOP_CONTINUOUS_MEASUREMENT, None)

    def set_measurement_interval(self, interval: int):
        self._write(self.__COMMAND_SET_MEASUREMENT_INTERVAL, [interval])

    def get_measurement_interval(self) -> int:
        data = self._read(self.__COMMAND_SET_MEASUREMENT_INTERVAL, 1)

        return data[0]

    def get_data_ready_status(self) -> bool:
        data = self._read(self.__COMMAND_GET_DATA_READY_STATUS, 1)

        return True if data[0] == 1 else False

    def read_measurement(self) -> tuple:
        data = self._read(self.__COMMAND_READ_MEASUREMENT, 6)

        data_bytes = struct.pack(">HHHHHH", data[0], data[1], data[2], data[3], data[4], data[5])
        data_floats = struct.unpack(">fff", data_bytes)
        co2 = data_floats[0]
        temp = data_floats[1]
        humi = data_floats[2]

        return co2, temp, humi

    def set_forced_recalibration(self, co2: float):
        self._write(self.__COMMAND_SET_FRC, [int(co2)])

    def set_automatic_self_calibration(self, activate: bool):
        self._write(self.__COMMAND_ACTIVATE_ASC, [1 if activate else 0])

    def get_automatic_self_calibration(self) -> bool:
        data = self._read(self.__COMMAND_ACTIVATE_ASC, 1)

        return True if data[0] == 1 else False

    def set_temperature_offset(self, offset: float):
        self._write(self.__COMMAND_SET_TEMPRATURE_OFFSET, [int(offset * 100)])

    def get_temperature_offset(self) -> float:
        data = self._read(self.__COMMAND_SET_TEMPRATURE_OFFSET, 1)

        return float(data[0]) / 100

    def set_altitude_compensation(self, altitude: int):
        self._write(self.__COMMAND_ALTITUDE_COMPENSATION, [altitude])

    def get_altitude_compensation(self) -> int:
        data = self._read(self.__COMMAND_ALTITUDE_COMPENSATION, 1)

        return data[0]

    def read(self) -> tuple:
        if not self.get_data_ready_status():
            return None

        return self.read_measurement()


def main() -> NoReturn:
    sensor = GroveCo2Scd30()

    while True:
        if sensor.get_data_ready_status():
            co2, temperature, humidity = sensor.read()
            print(f"CO2 concentration is {co2:.1f} ppm")
            print(f"Temperature in Celsius is {temperature:.2f} C")
            print(f"Relative Humidity is {humidity:.2f} %")

        time.sleep(1)


if __name__ == "__main__":
    main()
```
- Execute este código
```
python grove_co2_scd30.py

```

Se tudo correr bem, você verá o seguinte fenômeno.😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/co2_result.png" alt="pir" width={600} height="auto" /></p>






### Brincar com Wio Terminal (ArduPy)

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Wio Terminal | Grove-CO2 & T&H SCD30 |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira agora](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **Passo 2.** Conecte o Grove-CO2 & T&H SCD30 à porta Grove **I2C** do Wio Terminal.

- **Passo 3.** Conecte o Wio Terminal ao PC por meio de um cabo USB Tipo-C.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/WT-SCD30.png"/></div>

#### Software

- **Passo 1.** Siga o [**Guia de Introdução ao ArduPy**](https://wiki.seeedstudio.com/pt-br/ArduPy/) para configurar o ambiente de desenvolvimento ArduPy no Wio Terminal.

- **Passo 2.** Certifique-se de que o firmware ArduPy esteja gravado no Wio Terminal. Para mais informações, siga [**aqui**](https://wiki.seeedstudio.com/pt-br/ArduPy/#Guia-de-introdução-ardupy-aip-cli).

```sh
aip install Seeed-Studio/seeed-ardupy-scd30
aip build
aip flash
```

- **Passo 3.** Copie o código a seguir e salve-o como `ArduPy-scd30.py`:

```python
from arduino import grove_scd30
from machine import LCD
from machine import Sprite
import time

scd30 = grove_scd30()
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("SCD30 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- CO2 Level: ", 20, 50)
        spr.drawString("- Temperature: ", 20, 80)
        spr.drawString("- Humidity: ", 20, 110)

        if(scd30.isAvailable()):
            data = scd30.getCarbonDioxideConcentration()
            spr.drawFloat(data[0], 2,220,50) # CO2
            spr.drawFloat(data[1], 2, 220,80)
            spr.drawFloat(data[2], 2, 220,110)
            spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("\nCarbon Dioxide Concentration:", data[0])
        print("Temperature:", data[1])
        print("Humidity:", data[2])

if __name__ == "__main__":
    main()
```

- **Passo 4.** Salve o `ArduPy-scd30.py` em um local que você conheça. Execute o seguinte comando e **substitua** `<YourPythonFilePath>` pelo local do seu `ArduPy-scd30.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
```

- **Passo 5.** Veremos os 3 valores de dados exibidos no terminal como abaixo, e exibidos na tela LCD do Wio Terminal.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy
Carbon Dioxide Concentration: 2360.639
Temperature: 29.18707
Humidity: 66.88538

Carbon Dioxide Concentration: 2360.639
Temperature: 29.18707
Humidity: 66.88538

Carbon Dioxide Concentration: 2500.573
Temperature: 29.17372
Humidity: 66.61072
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/Ardupy-SCD30.png"/></div>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo esquemático do Grove - CO2 & Temperature & Humidity Sensor (SCD30)](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip)
- **[PDF]** [Diretriz de Design do SCD30](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)
- **[PDF]** [Folha de Dados do SCD30](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf)
- **[PDF]** [Descrição da Interface do SCD30](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

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

