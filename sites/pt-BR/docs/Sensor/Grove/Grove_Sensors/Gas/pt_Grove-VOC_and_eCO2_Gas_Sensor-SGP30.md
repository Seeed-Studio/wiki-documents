---
description: Sensor de Gás Grove-VOC e eCO2 (SGP30)
title: Sensor de Gás Grove-VOC e eCO2 (SGP30)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-VOC_and_eCO2_Gas_Sensor-SGP30
sku: 101020512
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg" alt="pir" width={600} height="auto" /></p>

O Sensor de Gás Grove-VOC e eCO2 (SGP30) é um sensor de detecção de qualidade do ar. Este módulo Grove é baseado no SGP30, nós fornecemos saída de TVOC (Compostos Orgânicos Voláteis Totais) e CO2eq para este módulo.

O SGP30 é um sensor de gás digital multi-pixel projetado para fácil integração em purificadores de ar, ventilação controlada por demanda e aplicações de IoT. A tecnologia CMOSens® da Sensirion oferece um sistema de sensor completo em um único chip, apresentando uma interface digital I2C, uma micro-resistência aquecida controlada por temperatura e dois sinais de qualidade de ar interno pré-processados. Como o primeiro sensor de gás de óxido metálico com múltiplos elementos sensores em um único chip, o SGP30 fornece informações mais detalhadas sobre a qualidade do ar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::tip
Lançamos o [Guia de Seleção de Sensores de Gás da Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), ele vai ajudar você a escolher o sensor de gás que melhor atende às suas necessidades.
:::

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A série de sensores industriais SenseCAP S210x oferece uma experiência pronta para uso para detecção ambiental. Consulte o Sensor Sem Fio de CO2, Temperatura e Umidade S2103 com maior desempenho e robustez para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center">
        <font size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
          <strong>S2103 Temp. do Ar &amp; Umidade &amp; CO2</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Recursos

- Sensor de gás multi-pixel para aplicações de qualidade do ar interno
- Excelente estabilidade em longo prazo
- Interface I2C com sinais de saída de TVOC e CO2eq
- Baixo consumo de energia
- Módulo em chip embalado em fita e carretel, soldável por refusão

## Especificação

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-eh2d{background-color:#ffffff;border-color:inherit;vertical-align:top}
.tg .tg-xf7g{background-color:#444444;border-color:inherit;:center}
.tg .tg-f5ry{background-color:#ffffff;border-color:inherit}
.tg .tg-28l8{background-color:#ffffff;border-color:inherit;:center}
.tg .tg-3xi5{background-color:#ffffff;border-color:inherit;:center;vertical-align:top}
.tg .tg-3we0{background-color:#ffffff;vertical-align:top}
.tg .tg-i81m{background-color:#ffffff;:center;vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 529px">
<colgroup>
<col style="width: 143px">
<col style="width: 98px">
<col style="width: 288px">
</colgroup>
  <tr>
    <th class="tg-xf7g">Parameter</th>
    <th class="tg-xf7g">Signal</th>
    <th class="tg-xf7g">Values</th>
  </tr>
  <tr>
    <td class="tg-f5ry">Working Voltage</td>
    <td class="tg-f5ry" colspan="2">                           3.3V/5V</td>
  </tr>
  <tr>
    <td class="tg-f5ry" rowspan="2">Output range</td>
    <td class="tg-f5ry">TVOC</td>
    <td class="tg-28l8">    0 ppb to 60000ppb</td>
  </tr>
  <tr>
    <td class="tg-eh2d">CO₂eq</td>
    <td class="tg-3xi5">    400 ppm to 60000 ppm</td>
  </tr>
  <tr>
    <td class="tg-eh2d" rowspan="2"><br><br>Sampling rate</td>
    <td class="tg-eh2d">TVOC</td>
    <td class="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td class="tg-eh2d">CO₂eq</td>
    <td class="tg-3xi5">1HZ</td>
  </tr>
  <tr>
    <td class="tg-3we0" rowspan="7"><br><br><br><br><br><br><br>Resolution<br></td>
    <td class="tg-3we0" rowspan="3"><br><br>TVOC</td>
    <td class="tg-i81m">0 - 2008 ppb / 1 ppb</td>
  </tr>
  <tr>
    <td class="tg-i81m">2008 - 11110 ppb / 6 ppb</td>
  </tr>
  <tr>
    <td class="tg-i81m">11110 - 60000 ppb / 32 ppb</td>
  </tr>
  <tr>
    <td class="tg-3we0" rowspan="4"><br><br><br>CO₂eq</td>
    <td class="tg-i81m">400 - 1479 ppm / 1 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">1479 -5144 ppm / 3 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">5144 - 17597 ppm / 9 ppm</td>
  </tr>
  <tr>
    <td class="tg-i81m">17597 - 60000 ppm / 31 ppm</td>
  </tr>
  <tr>
    <td class="tg-3we0">Default I2C address</td>
    <td class="tg-i81m" colspan="2">0X58</td>
  </tr>
</table> -->

<table border="2" style={{ width: 529}}>
  <colgroup>
    <col style={{width: 143}}/>
    <col style={{width: 98}}/>
    <col style={{width: 288}}/>
  </colgroup>
  <tr>
    <th>Parâmetro</th>
    <th>Sinal</th>
    <th>Valores</th>
  </tr>
  <tr>
    <td>Tensão de operação</td>
    <td colspan="2">3.3V/5V</td>
  </tr>
  <tr>
    <td rowspan="2">Faixa de saída</td>
    <td>TVOC</td>
    <td>0 ppb a 60000 ppb</td>
  </tr>
  <tr>
    <td>CO₂eq</td>
    <td>400 ppm a 60000 ppm</td>
  </tr>
   <tr>
    <td rowspan="2">Taxa de amostragem</td>
    <td>TVOC</td>
    <td>1HZ</td>
  </tr>
  <tr>
    <td>CO₂eq</td>
    <td>1HZ</td>
  </tr>
  <tr>
    <td rowspan="7">Resolução</td>
    <td rowspan="3">TVOC</td>
    <td>0 - 2008 ppb / 1 ppb</td>
  </tr>
  <tr>
    <td>2008 - 11110 ppb / 6 ppb</td>
  </tr>
  <tr>
    <td>11110 - 60000 ppb / 32 ppb</td>
  </tr>
  <tr>
    <td rowspan="4">CO₂eq</td>
    <td>400 - 1479 ppm / 1 ppm</td>
  </tr>
  <tr>
    <td>1479 -5144 ppm / 3 ppm</td>
  </tr>
  <tr>
    <td>5144 - 17597 ppm / 9 ppm</td>
  </tr>
  <tr>
    <td>17597 - 60000 ppm / 31 ppm</td>
  </tr>
  <tr>
    <td>Endereço I2C padrão</td>
    <td colspan="2">0X58</td>
  </tr>
</table>

## Aplicações

- Purificador de ar
- Ventilação controlada por demanda
- Aplicações de IoT
- Monitor de condição do ar de casa nova

## Visão Geral de Hardware

### Mapa de Pinos

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg" alt="pir" width={600} height="auto" /></p>

### Esquemático

**Alimentação**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg" alt="pir" width={600} height="auto" /></p>

A tensão de operação típica do SGP30 é 1,8 V, usamos um chip de conversão de energia *XC6206P182MR* para fornecer um estável 3,3 V para o MCP9600.

**Circuito de conversor de nível bidirecional**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg" alt="pir" width={600} height="auto" /></p>

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferentes de um barramento I^2^C. O barramento I<sup>2</sup>C deste sensor usa 1,8 V; se o barramento I<sup>2</sup>C do Arduino usar 5 V ou 3,3 V, este circuito será necessário. No esquemático acima, **Q7** e **Q8** são MOSFETs de canal N [BSS138LT3G](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf), que atuam como uma chave bidirecional. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Suportadas
<!-- 

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de hardware ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que você veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove-VOC and eCO2 Gas Sensor(SGP30) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtenha um agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtenha um agora</a>|<a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">Obtenha um agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove-VOC and eCO2 Gas Sensor(SGP30) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-VOC and eCO2 Gas Sensor(SGP30) ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove-VOC and eCO2 Gas Sensor(SGP30) |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

- **Passo 1.** Baixe a [biblioteca Seeed SGP30](https://github.com/Seeed-Studio/SGP30_Gas_Sensor) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Extraia o arquivo `SGP30_Gas_Sensor-master.zip` que você acabou de baixar, na pasta `examples` você verá 3 subpastas:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png" alt="pir" width={600} height="auto" /></p>

O `absolute_humidity_example` requer calibração externa de sensor de umidade

O `base_example` está simplesmente coletando dados sem qualquer calibração

O `baseline_operation_example` pode salvar o valor de base dos dados na memória flash. O software coleta automaticamente os valores de base e os armazena.

Recomendamos usar o `baseline_operation_example` , depois clique no arquivo `xxx.ino` para abrir o exemplo.

- **Passo 4.** Envie o demo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá o resultado.

O resultado deve ser assim:

```

318
tVOC  Concentration:74ppb
CO2eq Concentration:506ppm
319
tVOC  Concentration:80ppb
CO2eq Concentration:509ppm
320
tVOC  Concentration:66ppb
CO2eq Concentration:500ppm
321
tVOC  Concentration:69ppb
CO2eq Concentration:511ppm
322
tVOC  Concentration:70ppb
CO2eq Concentration:511ppm
323
tVOC  Concentration:60ppb
CO2eq Concentration:493ppm
324
tVOC  Concentration:72ppb
CO2eq Concentration:502ppm

```

:::tip
        1- ppm: partes por milhão. 1 ppm = 1000 ppb (partes por bilhão)

        2- O resultado é baseado em `baseline_operation_example.ino`

        3- Nós testamos este demo em nossa sala de escritório, de acordo com o seu ambiente de teste, os resultados podem ser diferentes
:::

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove-VOC and eCO2 Gas Sensor(SGP30)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg" alt="pir" width={500} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove-VOC and eCO2 Gas Sensor(SGP30) à porta I2C do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note

     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_Python_SGP30.git

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd Seeed_Python_SGP30
sudo python3 setup.py install
cd examples
python3 sgp30_simpleread.py
```

**Erro**

Isso pode causar alguns erros, mas não devemos nos preocupar com isso.

Nós copiamos o caminho para o arquivo de erro.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png" alt="pir" width={600} height="auto" /></p>

Aqui está o caminho que é mostrado como exemplo:  “/usr/local/lib/python3.7/dist-packages/sgp30-0.1.6-py3.7.egg/sgp30"

Use o comando "cd" para ir até esse caminho e use seu compilador para alterar o código de "sgp30.py", por exemplo: “sudo nano sgp30.py”.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png" alt="pir" width={600} height="auto" /></p>

Nós apagamos "SMBusWrapper" na segunda linha e então salvamos.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png" alt="pir" width={600} height="auto" /></p>

Volte para a pasta “Seeed_Python_SGP30/examples”，execute "python3 sgp30_simpleread.py" e tudo ficará bem。

A seguir está o código sgp30_simpleread.py.

```python
import seeed_sgp30
from grove.i2c import Bus

sgp30 = seeed_sgp30.grove_sgp30(Bus())
while True:
  data = sgp30.read_measurements()
  co2_eq_ppm, tvoc_ppb = data.data
  print("\r  tVOC = {} ppb CO2eq = {}  ".format(
                               tvoc_ppb, co2_eq_ppm))
```

:::success
    Se tudo correr bem, você conseguirá ver o seguinte resultado.
:::

```python

pi@raspberrypi:~/Seeed_Python_SGP30/examples $ python3 sgp30_simpleread.py
  tVOC = 9 ppb CO2eq = 943  
  tVOC = 9 ppb CO2eq = 931  
  tVOC = 10 ppb CO2eq = 920  
  tVOC = 14 ppb CO2eq = 904  
  tVOC = 12 ppb CO2eq = 888  
  tVOC = 13 ppb CO2eq = 873  
  tVOC = 11 ppb CO2eq = 865  
  tVOC = 11 ppb CO2eq = 842  
  tVOC = 9 ppb CO2eq = 828  
  tVOC = 10 ppb CO2eq = 814  
  tVOC = 11 ppb CO2eq = 794  
  tVOC = 14 ppb CO2eq = 786  
  tVOC = 9 ppb CO2eq = 764  
  tVOC = 12 ppb CO2eq = 744  
  tVOC = 11 ppb CO2eq = 739  
  tVOC = 12 ppb CO2eq = 715  
  tVOC = 15 ppb CO2eq = 688  
  tVOC = 13 ppb CO2eq = 669  

```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

## Aviso

- O SGP30 usa um algoritmo de compensação dinâmica de linha de base e parâmetros de calibração em chip para fornecer dois sinais complementares de qualidade do ar. A linha de base deve ser armazenada na EEPROM. Quando não houver valor de linha de base na EEPROM na primeira energização ou o registro de linha de base for mais antigo que sete dias, o sensor precisa operar por 12 horas até que a linha de base possa ser armazenada. Você pode consultar o fluxograma do programa abaixo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png" alt="pir" width={600} height="auto" /></p>

- Os sinais H2_Signal e Ethanol_signal, ambos podem ser usados para calcular concentrações de gás c relativas a uma concentração de referência cref por ln(C/Cref)=(Sref-Sout)/a com a = 512, sref sendo a saída de H2_signal ou Ethanol_signal na concentração de referência, e sout = Sout_H2 ou Sout = Sout_EthOH.

- Para uma medição mais precisa, você pode definir a compensação de umidade absoluta, o valor padrão é 11,57 g/m3. Um pouco incômodo é que você deve obter o valor de umidade relativa do ambiente por outro meio, porque não há parte de medição de umidade integrada no SGP30.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png" alt="pir" width={600} height="auto" /></p>

Felizmente, isso não é muito necessário em uma situação normal

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivo eagle do Grove-VOC and eCO2 Gas Sensor(SGP30)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip)
- **[PDF]** [Datasheet do SGP30](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)
- **[PDF]** [Datasheet do BSS138L](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf)
- **[PDF]** [Guia de Integração do Driver SGP30 HW I2C](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Driver-Integration-Guide_HW_I2C.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
