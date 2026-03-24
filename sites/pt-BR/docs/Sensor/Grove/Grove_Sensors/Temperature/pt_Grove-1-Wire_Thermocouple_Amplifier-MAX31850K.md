---
description: Grove - Amplificador de Termopar 1-Wire (MAX31850K)
title: Grove - Amplificador de Termopar 1-Wire (MAX31850K)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-1-Wire_Thermocouple_Amplifier-MAX31850K
sku: 101020555
last_update:
  date: 1/4/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/main.JPG" /></div>

O Grove - Amplificador de Termopar 1-Wire (MAX31850K) é um conversor de termopar para digital com resolução de 14 bits e compensação de junta fria. Este módulo é projetado para ser usado em conjunto com um termopar tipo K. Os termopares têm uma faixa de medição muito maior do que os termistores. Por exemplo, este [termopar tipo K](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) em nosso site possui uma faixa de medição de -50℃ a +600℃.

Este módulo é baseado no MAX31850K, que integra amplificador, ADC e ROM de 64 bits. Graças à ROM de 64 bits, cada dispositivo possui um código serial único de 64 bits, o que permite que múltiplas unidades funcionem no mesmo barramento 1-Wire. Portanto, é simples usar um microcontrolador (o dispositivo mestre) para monitorar a temperatura de muitos termopares distribuídos por uma grande área.

Novamente, este módulo não pode funcionar sozinho, ele deve funcionar com um termopar tipo K; se você não tiver um, pode considerar o [Thermocouple Temperature Sensor K Type-1M](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) em nosso bazar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                           | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 1-Wire Thermocouple Amplifier (MAX31850K) | Inicial                                                                                               | Ago 2018      |

## Recursos

- Compensação de junta fria integrada
- Ampla faixa de conversão: permite leituras de -270℃ a +1768℃
- Resolução de 14 bits, 0,25℃
- Não funcionará com nenhum outro tipo de termopar exceto o tipo K
- Detecta curto-circuito do termopar para GND ou VDD
- Detecta termopar aberto

:::caution
Embora este módulo possa converter de -270℃ a +1768℃, a faixa de medição de temperatura também é limitada pelo termopar que você usa.
:::

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V/5V |
|Resolução de Temperatura|14 bits|
|Precisão de Temperatura|± 2℃ |
|Faixa de Temperatura de Operação|-40℃ a +125℃|
|Faixa Permitida de Leitura|-270℃ a +1768℃|
|Faixa de Temperatura de Armazenamento|-65℃  a +150℃ |
|Conector de Entrada|DIP Fêmea Azul-2 pinos|
|Interface de Saída|Barramento 1-Wire|
|Tamanho|C: 40mm L: 20mm A: 18mm|
|Peso|4,8g|
|Tamanho da Embalagem|C: 140mm L: 90mm A: 20mm|
|Peso Bruto|11g|

## Aplicações

- Médico
- Eletrodomésticos
- Industrial
- HVAC (Aquecimento, Ventilação e Ar Condicionado)

## Visão Geral de Hardware

### Mapa de Pinos

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map_back.jpg" /></div>

### Esquemático

**Conector de Entrada**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_1.jpg" /></div>

Devido aos pequenos níveis de sinal envolvidos, adotamos muitas medidas para filtrar o ruído.

- **1--L1,L2**  Utilizamos termopares de até 1 metro de comprimento. Fios tão longos podem ser considerados antenas, que receberão interferência de campo elétrico espacial e gerarão ruído de alta frequência. Portanto, usamos duas indutâncias para filtrar o ruído de alta frequência.

- **2--C1**  É fortemente recomendado pelo fabricante do chip adicionar um capacitor diferencial cerâmico SMD de 10nF, colocado entre os pinos T+ e T-, a fim de filtrar o ruído nas linhas do termopar.

- **3--D1** Usamos o supressor de tensão bidirecional duplo SZNUP2105LT3G para proteger este módulo contra ESD (descarga eletrostática).

**Circuito de conversão de nível bidirecional**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_2.jpg" /></div>

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferentes. A parte esquerda, pino **DQ** do MAX31850K usa 3,3V; se o Arduino usar 5V, este circuito será necessário. No esquemático acima, **Q6** é um MOSFET de canal N [2N7002](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que atua como uma chave bidirecional. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf).

:::note
      Nesta seção mostramos apenas parte do esquemático; para o documento completo, consulte os [Resources](https://wiki.seeedstudio.com/pt-br/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#Resources)
:::

### Desenho de Montagem

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/Assembling.jpg" /></div>

:::tip
Por favor, insira o fio <font style={{fontWeight: 'bold', color: '#AE0000'}}>vermelho</font> do termopar na porta **T+** do Grove - 1-Wire Themrocouple Amplifier (MAX31850K), e o fio <font style={{fontWeight: 'bold', color: '#FFFFFF'}}>branco</font> na porta **T-**. Se você não utilizar o termopar tipo K do nosso bazar, a cor pode ser diferente; por favor, confirme o **+ -** com o vendedor.
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - 1-Wire Thermocouple Amplifier x 2|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html" target="_blank">Adquira agora</a>|

|Termopar tipo K x 2|Grove - I2C Hub|
|----|---|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thermocouple.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/12C%20hub.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html" target="_blank">Adquira agora</a>|

:::note
**1-** Oferecemos dois exemplos de software, **simple** e **multiple**; os materiais exigidos acima são para o exemplo **multiple**. Se você quiser testar o exemplo **simple**, então o Grove - I2C Hub não é necessário, e apenas um Grove - 1-Wire Thermocouple Amplifier será suficiente.

**2-** Usamos o I2C Hub aqui não como uma interface I2C, mas apenas como uma interface normal de transferência um-para-dois.
:::

- **Passo 1.** Insira o fio vermelho do termopar tipo K em **T+**, insira o fio branco claro do termopar tipo K em **T-**

- **Passo 2.** Conecte o Grove - I2C Hub à porta **D3** da Base Shield.

- **Passo 3.** Conecte o Grove - 1-Wire Thermocouple Amplifier A e B ao Grove - I2C Hub.

- **Passo 4.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 5.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/connect.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Cabo Grove |Grove - I2C Hub |Grove - 1-Wire Thermocouple Amplifier|
|---------------|-------------------------|----|-----|
| GND            |  Preto                   |G|GND|
| 5V           | Vermelho                   |V|VCC|
| NC            | Branco                   |SDA|NC|
| D3            | Amarelo                  |SCL|DQOUT|

#### Software

:::caution
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar
:::

- **Passo 1.** Baixe a biblioteca [Seeed_MAX31850K](https://github.com/Seeed-Studio/Seeed_MAX31850K) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Descompacte a pasta da biblioteca, siga o caminho para encontrar e abrir **Multiple.ino** ---> **xxxx\Arduino\libraries\Seeed_MAX31850K-master\examples\Multiple**. xxxx é o caminho em que você instalou o seu Arduino.

Esta pasta **\Arduino\libraries\Seeed_MAX31850K-master\examples** contém dois exemplos: **Multiple.ino** e **Simple.ino**.
>Simple.ino--modo simples (um host e um escravo)

>Multiple.ino--modo múltiplo (um host e vários escravos, baseado em endereçamento rom - algoritmo de busca one wire)

Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o seguinte código para um novo sketch na Arduino IDE.

```cpp
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire is plugged into port 2 on the Arduino
#define ONE_WIRE_BUS 3
#define TEMP_RESOLUTION 9

#define MAX_NUM_OF_DEVICE  10

// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature sensors(&oneWire);

// arrays to hold device addresses
DeviceAddress Device_add[MAX_NUM_OF_DEVICE];
DeviceAddress insideThermometer, outsideThermometer;

void setup(void)
{
  // start serial port
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // Start up the library
  sensors.begin();

  // locate devices on the bus
  Serial.print("Locating devices...");
  Serial.print("Found ");
  Serial.print(sensors.getDeviceCount(), DEC);
  Serial.println(" devices.");

  Serial.print("Parasite power is: "); 
  if (sensors.isParasitePowerMode()) Serial.println("ON");
  else Serial.println("OFF");

  for(int i=0;i<sensors.getDeviceCount();i++)
  {
    if(!sensors.getAddress(Device_add[i],i))
    {
      Serial.println("Find device error!!");
    }
    else
    {
      Serial.print("Device [");
      Serial.print(i);
      Serial.print("] addr =");
      printAddress(Device_add[i]);
    }
    Serial.println(" ");
  }

}

// function to print a device address
void printAddress(DeviceAddress deviceAddress)
{
  for (uint8_t i = 0; i < 8; i++)
  {
    // zero pad the address if necessary
    if (deviceAddress[i] < 16) Serial.print("0");
    Serial.print(deviceAddress[i], HEX);
  }
}

// function to print the temperature for a device
void printTemperature(DeviceAddress deviceAddress)
{
  float tempC = sensors.getTempC(deviceAddress);
  Serial.print("Temp C: ");
  Serial.print(tempC);
  Serial.print(" Temp F: ");
  Serial.print(DallasTemperature::toFahrenheit(tempC));
}

// function to print a device's resolution
void printResolution(DeviceAddress deviceAddress)
{
  Serial.print("Resolution: ");
  Serial.print(sensors.getResolution(deviceAddress));
  Serial.println();    
}

// main function to print information about a device
void printData(DeviceAddress deviceAddress)
{
  Serial.print("Device Address: ");
  printAddress(deviceAddress);
  Serial.print(" ");
  printTemperature(deviceAddress);
  Serial.println();
}

void loop(void)
{ 
  // call sensors.requestTemperatures() to issue a global temperature 
  // request to all devices on the bus
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures();
  Serial.println("DONE");

  for(int i=0;i<sensors.getDeviceCount();i++)
  {
     printData(Device_add[i]);
  }

}

```

- **Passo 4.** Envie o demo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Em seguida, defina o baud rate para **115200**.

:::tip
     Se tudo correr bem, você obterá o resultado.
:::

```cpp
DONE
Device Address: 3B23211800ing temperatures... 77.00
Requesting temperatures...DONE
Device Address: 3B2321180000005C Temp C: 25.00 Temp F: 77.00
Requesting temperatures...Dallas Temperature IC Control Library Demo
Locating devices...Found 2 devices.
Parasite power is: OFF
Device [0] addr =3B4C965D06D80C98 
Device [1] addr =3B2321180000005C 
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.00 Temp F: 77.00
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.00 Temp F: 78.80
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.00 Temp F: 78.80
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
```

## Visualizador de Esquemáticos Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos eagle do Grove - 1-Wire Thermocouple Amplifier](https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip)
- **[Zip]** [Biblioteca Seeed_MAX31850K](https://github.com/Seeed-Studio/Seeed_MAX31850K/archive/master.zip)
- **[PDF]** [Datasheet do MAX31850](https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Max31850.pdf)

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

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
