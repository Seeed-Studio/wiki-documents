---
description: Grove - Kit de Sensor de PH (E-201C-Blue)
title: Grove - Kit de Sensor de PH (E-201C-Blue)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-PH-Sensor-kit
sku: 110020291
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-PH-Sensor-kit/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/04.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/04.png" alt="pir" width={600} height="auto" /></p>



<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html)

Você está tentando encontrar um sensor/medidor de PH fácil de usar e com bom custo-benefício? Você quer usar um sensor/medidor de PH com Arduino ou Raspberry Pi? Bem, este novo Grove - PH Sensor vai atender a todas as suas necessidades. O sensor de PH mede a atividade de íons de hidrogênio em soluções à base de água, normalmente o usamos para medir o PH de um líquido. Ele é amplamente utilizado na indústria química, na indústria farmacêutica, na indústria de corantes e em pesquisas científicas onde é necessário testar acidez e alcalinidade. A placa de acionamento neste kit suporta sistemas de 3,3 V e 5 V. E com a interface padrão de sonda BNC e o conector Grove, é muito conveniente trabalhar com Arduino e Raspberry Pi.

:::note
    Este produto não possui certificação RoHS.
:::
## Características

- Tamanho compacto para fácil implantação.  
- Compatível tanto com Arduino quanto com Rasberry Pi.
- Bom custo-benefício.

## Especificações
|Items|Values|
|---|---|
|Operating voltage	|3.3V/5V|
|Range	|0-14PH|
|Resolution	|±0.15PH（STP）|
|Response time	|＜1min|
|Probe Interface|	BNC|
|Measure temperature	|0-60℃|
|Internal resistance|	≤250MΩ（25℃）|
|Alkali error	|0.2PH（1mol/L）Na+，PH14)（25℃）|

## Plataformas Suportadas
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

#### Materiais Necessários

| Seeeduino Lotus | Grove-PH Sensor kit | 
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>| <p><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/thumb.png" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html)|

#### Conexão de Hardware


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/PH_Connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    Conecte gentilmente o cabo USB e a interface do Grove-PH Sensor na interface da placa Seeeduino Lotus, caso contrário, você poderá danificar a porta.
:::
- **Passo 1.** Conecte o Grove-PH Sensor na interface **A2** da placa Seeeduino Lotus com um cabo Grove.

- **Passo 2.** Conecte o Seeeduino Lotus ao PC por meio de um cabo USB.

- **Passo 3.** Baixe o código, consulte a parte de software.

- **Passo 4.** Execute o código e o resultado será exibido na tela do **Serial Monitor** na sua IDE do Arduino.


#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::



- **Passo 1.** Baixe o [código de demonstração](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip).

- **Passo 2.** Copie todo o arquivo **Grove-PH_Sensor_kit** e cole-o na pasta de bibliotecas da sua IDE do Arduino.

- **Passo 3.** Abra o arquivo **pH_meter_V1_1** com a sua IDE do Arduino.

- **Passo 4.** Faça o upload da demonstração. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

#### Código de Software
```cpp
/*
  # This sample code is used to test the pH meter V1.1.
  # Editor : YouYou
  # Date   : 2014.06.23
  # Ver    : 1.1
  # Product: analog pH meter
  # SKU    : SEN0161
*/
#define SensorPin A2            //pH meter Analog output to Arduino Analog Input 0
#define Offset 41.02740741      //deviation compensate
#define LED 13
#define samplingInterval 20
#define printInterval 800
#define ArrayLenth  40    //times of collection
#define uart  Serial
int pHArray[ArrayLenth];   //Store the average value of the sensor feedback
int pHArrayIndex = 0;
void setup(void)
{
  pinMode(LED, OUTPUT);
  uart.begin(9600);
  uart.println("pH meter experiment!");    //Test the uart monitor
}
void loop(void)
{
  static unsigned long samplingTime = millis();
  static unsigned long printTime = millis();
  static float pHValue, voltage;
  if (millis() - samplingTime > samplingInterval)
  {
    pHArray[pHArrayIndex++] = analogRead(SensorPin);
    if (pHArrayIndex == ArrayLenth)pHArrayIndex = 0;
    voltage = avergearray(pHArray, ArrayLenth) * 5.0 / 1024;
    pHValue = -19.18518519 * voltage + Offset;
    samplingTime = millis();
  }
  if (millis() - printTime > printInterval)  //Every 800 milliseconds, print a numerical, convert the state of the LED indicator
  {
    uart.print("Voltage:");
    uart.print(voltage, 2);
    uart.print("    pH value: ");
    uart.println(pHValue, 2);
    digitalWrite(LED, digitalRead(LED) ^ 1);
    printTime = millis();
  }
}
double avergearray(int* arr, int number) {
  int i;
  int max, min;
  double avg;
  long amount = 0;
  if (number <= 0) {
    uart.println("Error number for the array to avraging!/n");
    return 0;
  }
  if (number < 5) { //less than 5, calculated directly statistics
    for (i = 0; i < number; i++) {
      amount += arr[i];
    }
    avg = amount / number;
    return avg;
  } else {
    if (arr[0] < arr[1]) {
      min = arr[0]; max = arr[1];
    }
    else {
      min = arr[1]; max = arr[0];
    }
    for (i = 2; i < number; i++) {
      if (arr[i] < min) {
        amount += min;      //arr<min
        min = arr[i];
      } else {
        if (arr[i] > max) {
          amount += max;  //arr>max
          max = arr[i];
        } else {
          amount += arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount / (number - 2);
  }//if
  return avg;
}
```


:::note

     - Antes de detectar a solução alvo, o sensor **DEVE** ser calibrado com o fluido de calibração indicado, e também **DEVE** ser colocado em um tampão indicado (PH=7) ou em água limpa antes de detectar um novo tipo de solução e ser limpo.

     - Antes de ser medida, o eletrodo deve ser calibrado com uma solução tampão padrão de valor de PH conhecido. Para obter resultados mais precisos, o valor de PH conhecido deve ser confiável e próximo ao valor medido.

     - Quando a medição for concluída, a tampa protetora do eletrodo deve ser colocada. Uma pequena quantidade de solução de cloreto de potássio 3,3 mol/L deve ser colocada na tampa protetora para manter o bulbo do eletrodo úmido.

     - A extremidade condutora do eletrodo deve ser mantida limpa e seca para evitar absolutamente curto-circuitos nas duas extremidades da saída, caso contrário, isso levará a resultados de medição imprecisos ou inválidos.

     - Após o uso prolongado do eletrodo, se você notar que o gradiente está ligeiramente impreciso, pode mergulhar a extremidade inferior do eletrodo em 4% de HF (ácido fluorídrico) por 3-5 segundos, lavá-lo com água destilada e depois mergulhá-lo em solução de cloreto de potássio para que fique como novo.

     - O sensor **NÃO DEVE** ficar mergulhado no líquido de detecção por um longo período de tempo.
:::

- **Passo 5.** Quando o sensor é colocado em um fluido de calibração indicado (PH=9,18), haverá uma tensão e um valor de PH:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** De forma semelhante, quando o sensor é colocado em um fluido de calibração indicado (PH=4), haverá uma tensão e um valor de PH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration2.png" alt="pir" width={600} height="auto" /></p>

- **Etapa 7.** Um valor de k e um valor de Offset podem ser calculados devido à característica linear da detecção de pH e, em seguida, insira o valor de Offset e o valor de k (igual a pHValue) na **Linha 10** e **Linha 34** no Código de Software:

:::tip

    \$k= (PH2-PH1)/(V2-V1)\$

    \$Offset=[(PH2+PH1)-k*(V1+V2)]/2\$

    Há uma [Planilha de Cálculo](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx) para ajudar ainda mais na calibração.
:::
- **Etapa 8.** Finalmente, você está pronto para detectar seu líquido.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/202002811_Grove-PH_Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Biblioteca de Código de Demonstração](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip)
- **[XLSX]** [Calibração para k&offset](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx)

## Suporte Técnico & Discussão de Produto
Envie qualquer problema técnico para o nosso [fórum](http://forum.seeedstudio.com/).

## Atualizável para Sensores Industriais
Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na criação de protótipos, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade da luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

