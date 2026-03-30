---
description: Adicionando mais módulos Grove ao Builder
title: Adicionando mais módulos Grove ao Builder
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /list_of_supported_grove_n_adding_more
last_update:
  date: 11/24/2023
  author: Matthew
createdAt: '2023-11-20'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/list_of_supported_grove_n_adding_more/
---

# Visão geral

Neste wiki, apresentamos como adicionar mais módulos Grove ao SenseCAP S2110 Sensor Builder e listamos todos os módulos compatíveis.

## Adicionar Grove - Sensor de Corrente CC/CA ±5A (ACS70331) ao builder e aplicar

### 1. Criar novas bibliotecas usando o código-fonte do GitHub

O conteúdo aqui está no [GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_S2110), onde mantemos o código.

- **Passo 1:** Adicione um arquivo `sensorNew.hpp` à pasta `src\sensor` para o novo sensor.

- **Passo 2:** Defina a classe do sensor e implemente as funções `init()` e `sample()`.

 A classe do sensor deve herdar da classe `sensorClass` e implementar as funções `init()` e `sample()`. 
   A função `init()` é usada para inicializar o sensor e então retorna um valor de deslocamento de registro para comunicação Modbus.
   A função `sample()` é usada para ler os dados do sensor, retornando true quando os dados são válidos e false quando os dados são inválidos.

- **Passo 3:** Inclua o arquivo `sensorNEW.hpp` e chame-o.

 Adicione a linha `#include "sensorNew.hpp"` ao arquivo `src\sensor\sensorBuilder.hpp`.
 Na função `setup()` do arquivo `sensorBuilder.ino`, crie o novo objeto de classe de sensor e chame a função `SensorBuilder.addSensor()` com ele como argumento. 

Consulte o código a seguir:

```cpp
void setup()
{
  Serial.begin(9600);
  SensorBuilder.check_grove();

  /* sensor list */
  sensorUltrasonic *ultrasonic = new sensorUltrasonic();
  SensorBuilder.addSensor(ultrasonic);

  // add new sensor to sensor list
  sensorNew *newSensor = new sensorNew();
  SensorBuilder.addSensor(newSensor);

  SensorBuilder.begin();
}
```

:::note
O endereço de registro Modbus para o novo sensor começará em `0x0034`; a largura de bits de registro para cada valor de medição é 32, portanto o deslocamento de endereço de registro entre dois valores de medição adjacentes é 2.
:::

### 2. Conhecimento da Tabela de Registros Modbus

Os endereços de registro Modbus de 0x0000 a 0x0003 são reservados para armazenar informações do sistema do módulo, onde 0x0000 é o endereço Modbus com um valor padrão de 1 e valor máximo de 247, 0x0001 é a taxa de baud da porta serial com valor padrão de 96 (correspondente a 9600) e 0x0002 a 0x0003 são para a versão do software.

<table>
  <thead>
    <tr>
      <th>Nome do Sensor Grove</th>
      <th>Nome do Registro</th>
      <th>Endereço de Registro<br />(Hexadecimal)</th>
      <th>Endereço de Registro<br />(Decimal)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={3}>Grove - Sensor de CO2 &amp; Temperatura &amp; Umidade (SCD41)</td>
      <td>Temperatura</td>
      <td>0x0004</td>
      <td>04</td>
    </tr>
    <tr>
      <td>Umidade</td>
      <td>0x0006</td>
      <td>06</td>
    </tr>
    <tr>
      <td>CO2</td>
      <td>0x0008</td>
      <td>08</td>
    </tr>
    <tr>
      <td>Grove - Sensor de Luz v1.2</td>
      <td>Luz</td>
      <td>0x000A</td>
      <td>10</td>
    </tr><tr>
      <td>Grove - Sensor de Chama</td>
      <td>Chama</td>
      <td>0x000C</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Grove - Sensor de Oxigênio (MIX8410)</td>
      <td>Oxigênio</td>
      <td>0x000E</td>
      <td>14</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove - Sensor de Luz Solar (SI1151)</td>
      <td>Intensidade de Luz</td>
      <td>0x0010</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Luz Visível</td>
      <td>0x0012</td>
      <td>18</td>
    </tr>
    <tr>
      <td>UV</td>
      <td>0x0014</td>
      <td>20</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove Sensor de Temperatura e Barômetro (BMP280)</td>
      <td>Temperatura Barométrica</td>
      <td>0x0016</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Pressão Atmosférica</td>
      <td>0x0018</td>
      <td>24</td>
    </tr>
    <tr>
      <td>Altura</td>
      <td>0x001A</td>
      <td>26</td>
    </tr>
    <tr>
      <td rowSpan={4}>Grove - Sensor de Temperatura Umidade Pressão Gás (BME680)</td>
      <td>Temperatura</td>
      <td>0x001C</td>
      <td>28</td>
    </tr>
    <tr>
      <td>Pressão Atmosférica</td>
      <td>0x001E</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Umidade</td>
      <td>0x0020</td>
      <td>32</td>
    </tr>
    <tr>
      <td>Qualidade do Ar (VOC)</td>
      <td>0x0022</td>
      <td>34</td>
    </tr>
    <tr>
      <td rowSpan={4}>Grove - Sensor de Gás V2 (Multicanal)</td>
      <td>N02</td>
      <td>0x0024</td>
      <td>36</td>
    </tr>
    <tr>
      <td>C2H50H</td>
      <td>0x0026</td>
      <td>38</td>
    </tr>
    <tr>
      <td>VOC</td>
      <td>0x0028</td>
      <td>40</td>
    </tr>
    <tr>
      <td>CO</td>
      <td>0x002A</td>
      <td>42</td>
    </tr><tr>
      <td>Grove - Sensor UV</td>
      <td>Intensidade UV</td>
      <td>0x002C</td>
      <td>44</td>
    </tr>
    <tr>
      <td>Grove - Medidor de Turbidez V1.0</td>
      <td>Turbidez</td>
      <td>0x002E</td>
      <td>46</td>
    </tr>
    <tr>
      <td>Grove - Sensor TDS</td>
      <td>TDS</td>
      <td>0x0030</td>
      <td>48</td>
    </tr>
    <tr>
      <td>Grove - Sensor Ultrassônico</td>
      <td>Distância</td>
      <td>0x0032</td>
      <td>50</td>
    </tr>
  </tbody>
</table>

### 3. Conhecimento da Conexão de Hardware

Conecte o pino SIG (sinal) do sensor a um dos pinos analógicos de qualquer microcontrolador, forneça 5V–3,3V para VCC e GND para o terra do microcontrolador.  

O sensor Grove vem com um potenciômetro montado nele, que permite ao usuário ajustar finamente o ganho, tornando-o ajustável para se adequar a diferentes tensões de entrada. Isso ajuda a alterar a sensibilidade do sensor.

<div align="center"><img width={600} src="https://media-cdn.seeedstudio.com/media/wysiwyg/__16696942484712.png"/></div>


### 4. A partir dos passos acima, podemos ter a biblioteca para o sensor AC Grove:

Seguindo os passos acima, temos a biblioteca para aplicar o sensor AC Grove.

```cpp
#ifndef _SENSOR_AC_H
#define _SENSOR_AC_H

#include "sensorClass.hpp"

#define AC_ADC_PIN A2
#define ADC_BITS 12
#define ADC_COUNTS (1<<ADC_BITS)

class sensorAC : public sensorClass
{
  public:
  sensorAC(): sensorClass("AC"){};
  ~sensorAC(){};

  uint16_t init(uint16_t reg, bool i2c_available);
  bool connected();
  bool sample();

  enum
  {
    AC = 0,
    MAX
  };
  private:
  	double voltCal = 523.56;
  	double phaseCal = 1.7;
  	unsigned int cycles = 20;
  	unsigned int timeout = 2000;
  	int SupplyVoltage = 3300;
  	int sampleV;
  	double lastFilteredV,filteredV;
  	double offsetV = ADC_COUNTS >> 1;
  	double phaseShiftedV;
  	double sqV,sumV;
  	int startV;
  	boolean lastVCross,checkVCross;
};

uint16_t sensorAC::init(uint16_t reg, bool i2c_available){
  uint16_t t_reg = reg; 

  for (uint16_t i = 0; i < sensorAC::MAX; i++)
    {
        sensorClass::reg_t value;
        value.addr = t_reg;
        value.type = sensorClass::regType_t::REG_TYPE_S32_ABCD;
        value.value.s32 = 0;
        t_reg += sensorClass::valueLength(value.type);
        m_valueVector.emplace_back(value);
    }

    _connected = i2c_available ? false : true;
    //_connected = true;
    return t_reg - reg;
}

bool sensorAC::sample()
{

  GROVE_SWITCH_ADC;
  pinMode(AC_ADC_PIN, INPUT);

  unsigned int crossCount = 0;
  unsigned int numberOfSamples = 0;

  unsigned long start = millis();

  while(1){
	int startV = analogRead(AC_ADC_PIN);
	if((startV<(ADC_COUNTS*0.51)) && (startV>(ADC_COUNTS*0.49)))
		break;
	if((millis()-start)>timeout)	
		break;
  }

  start = millis();

  while((crossCount<cycles) && ((millis()-start)<timeout))
  {
  	numberOfSamples++;
  	lastFilteredV = filteredV;

  	sampleV = analogRead(AC_ADC_PIN);
  	offsetV = offsetV + ((sampleV - offsetV)/ADC_COUNTS);
  	filteredV = sampleV - offsetV;

  	sqV = filteredV * filteredV;
  	sumV += sqV;

  	phaseShiftedV = lastFilteredV + phaseCal * (filteredV - lastFilteredV);

  	lastVCross = checkVCross;
  	if(sampleV>startV)
  		checkVCross = true;
  	else 
  		checkVCross = false;
  	if(numberOfSamples == 1)
  		lastVCross = checkVCross;
  	if(lastVCross !=checkVCross)
  		crossCount++;
  }

  double V_RATIO = voltCal * ((SupplyVoltage/1000.0)/(ADC_COUNTS));
  float value = V_RATIO * sqrt(sumV/numberOfSamples);
  m_valueVector[AC].value.s32 = value * SCALE;
  //Serial.println(value);
  sumV = 0; 

  return true;
}

bool sensorAC::connected()
{
  return _connected;
}

#endif
```

### 5. Usar o Arduino para programar e testar primeiro

O programa recebe alguns parâmetros que precisam ser inicializados antes de executar o programa. Isso garante que o programa esteja rodando corretamente com o sensor e obtenha valores precisos.

Primeiro grave o programa no microcontrolador e depois calibre os parâmetros para ajustar às leituras.

```cpp
#define AC_ADC_PIN A2				//here pin A2 is used
#define ADC_BITS 12					//depends on microcontroller to microcontroller
#define Calibration_Value 523.56	//depends on the calibration result
#define Phase_Shift 1.7 			//depends on the calibration result

void setup() {
  Serial.begin(115200);
  pinMode(AC_ADC_PIN, INPUT);
}

int ADC_COUNTS = (1<<ADC_BITS);
double voltCal = Calibration_Value;
double phaseCal = Phase_Shift;
unsigned int cycles = 10;			//Number of AC Cycles you want to measure
unsigned int timeout = 500;			//Timeout 
int SupplyVoltage = 3300;
int sampleV;
double lastFilteredV,filteredV;
double offsetV = ADC_COUNTS >> 1;
double phaseShiftedV;
double sqV,sumV;
int startV;
boolean lastVCross,checkVCross;

void loop() {
  unsigned int crossCount = 0;
  unsigned int numberOfSamples = 0;

  unsigned long start = millis();

  while(1){
  int startV = analogRead(AC_ADC_PIN);
  if((startV<(ADC_COUNTS*0.51)) && (startV>(ADC_COUNTS*0.49)))
    break;
  if((millis()-start)>timeout)  
    break;
  }

  start = millis();

  while((crossCount<cycles) && ((millis()-start)<timeout))
  {
    numberOfSamples++;
    lastFilteredV = filteredV;

    sampleV = analogRead(AC_ADC_PIN);
    offsetV = offsetV + ((sampleV - offsetV)/ADC_COUNTS);
    filteredV = sampleV - offsetV;

    sqV = filteredV * filteredV;
    sumV += sqV;

    phaseShiftedV = lastFilteredV + phaseCal * (filteredV - lastFilteredV);

    lastVCross = checkVCross;
    if(sampleV>startV)
      checkVCross = true;
    else 
      checkVCross = false;
    if(numberOfSamples == 1)
      lastVCross = checkVCross;
    if(lastVCross !=checkVCross)
      crossCount++;
  }

  double V_RATIO = voltCal * ((SupplyVoltage/1000.0)/(ADC_COUNTS));
  float value = V_RATIO * sqrt(sumV/numberOfSamples);
  Serial.println(value);
  sumV = 0; 

}
```

### 6. Obter valor de calibração

Inicialmente, o pino Analógico é definido como o pino A2, podendo ser alterado de acordo com sua necessidade, usando o parâmetro AC_ADC_PIN.
Os valores de Calibration_Value e Phase_Shift precisam ser alterados sempre que você mudar a fonte de tensão, pois a tensão AC varia de país para país ou, às vezes, até de tomada para tomada.

O programa envia o valor do sensor para o monitor serial. Também é possível abrir o serial plotter para visualizar o gráfico de tensão vs tempo.

- Etapa 1: Pegue o multímetro, meça a tensão AC e anote o valor.
- Etapa 2: Da mesma forma, anote a tensão mostrada no monitor serial.

No meu caso, a leitura do multímetro é 220 V de tensão RMS, enquanto o sensor mostra 718,87 V no monitor serial. Para obter um valor de calibração preciso, precisamos fazer um cálculo simples, usando a seguinte fórmula.

![Mains Voltage / x = Sensor voltage / Initial Calibration](https://s0.wp.com/latex.php?latex=+%5Cdfrac%7BMains+Voltage%7D%7Bx%7D+%3D+%5Cdfrac%7BSensor+voltage%7D%7BInitail+Calibration%7D&bg=ffffff&fg=000&s=0&201002)

- Etapa 3: Encontre o valor de x e substitua-o por Calibration_Value no programa e grave o programa no microcontrolador.

![x = (mains voltage × initial calibration) / Sensor voltage](https://s0.wp.com/latex.php?latex=+x+%3D+%5Cdfrac%7Bmains+voltage+%5Ctimes+initial+calibration%7D%7BSensor+voltage%7D&bg=ffffff&fg=000&s=0&c=20201002)
Você pode alterar outros parâmetros como Phase_Shift, número de ciclos de AC e timeout de acordo com sua configuração ou mantê-los como padrão.

### Referência

- Você pode consultar a [Grove AC-Voltage Sensor Library](https://github.com/mcmchris/mcm-grove-voltage-sensor) para mais informações.
- Mais detalhes sobre o cálculo podem ser encontrados [aqui](https://bestengineeringprojects.com/how-to-ac-voltage-measurement-using-arduino-without-transformer/)

## A lista de módulos Grove suportados para SenseCAP S2110 Sensor Builder

Atualmente, SenseCAP S2110 Sensor Builder oferece suporte aos seguintes módulos Grove prontos para uso para se comunicar com o SenseCAP Data Logger e enviar os dados do sensor para a plataforma SenseCAP via LoRa.

- [Grove - Sensor de Temperatura e Barômetro (BMP280)](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)
- [Grove - Sensor de Oxigênio (MIX8410)](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)
- [Grove - Sensor de CO2 & Temperatura & Umidade - SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)
- [Grove - Sensor de Luz Solar - SI1151](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)
- [Grove - Sensor de Luz v1.2 - Fototransistor LS06-S](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - Sensor de Chama](https://www.seeedstudio.com/Grove-Flame-Sensor.html)
- [Grove - Sensor de Gás (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - Sensor de Gás Multicanal v2](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html?queryID=e92bca5d79e17a6d5bf1447be36e2ee2&objectID=4569&indexName=bazaar_retailer_products)
- [Grove - Sensor / Medidor de TDS para Qualidade da Água (Sólidos Totais Dissolvidos)](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html?queryID=9f138cfc508f141092493577c1ca83bb&objectID=4400&indexName=bazaar_retailer_products)
- [Grove - Sensor UV](https://www.seeedstudio.com/Grove-UV-Sensor.html?queryID=07ecb93f63b4035df7dfa9aea8b1e498&objectID=1345&indexName=bazaar_retailer_products)
- [Grove - Sensor de Distância Ultrassônico](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html?queryID=ebe18a5e13611be3b60f176e7bfabde7&objectID=2281&indexName=bazaar_retailer_products)
- [Grove - Sensor de Turbidez](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html?queryID=42f9c89339bce9fbff617e5c8a0328eb&objectID=4399&indexName=bazaar_retailer_products)
- [Grove - Sensor de Relâmpago](https://www.hackster.io/jojang2u/use-the-as3935-to-detect-lightning-to-predict-the-weather-9170e7)
- [Grove - Sensor de Corrente DC/AC ±5A (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Agradecimentos aos [esforços de Mohammed Adnan Khan](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904) e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).


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
