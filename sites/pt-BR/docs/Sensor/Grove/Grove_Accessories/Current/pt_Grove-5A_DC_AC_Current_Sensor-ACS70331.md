---
description: Grove - Sensor de Corrente CC/CA ±5A (ACS70331)
title: Grove - Sensor de Corrente CC/CA ±5A (ACS70331)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-5A_DC_AC_Current_Sensor-ACS70331
sku: 101020615
last_update:
  date: 1/9/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-5A_DC_AC_Current_Sensor-ACS70331/
---


<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-preview.png" /></div>

O Grove - Sensor de Corrente CC/CA ±5A (ACS70331) é um sensor de corrente CC/CA de alta precisão baseado no ACS70331. O ACS70331EESATR-005B3 é o CI sensor de corrente de alta sensibilidade da Allegro para aplicações de medição de corrente &lt;5 A. Ele incorpora tecnologia magnetorresistiva gigante (GMR) que é 25 vezes mais sensível do que sensores tradicionais de efeito Hall para detectar o campo magnético gerado pela corrente que flui através do condutor primário integrado de baixa resistência.

O Grove - Sensor de Corrente CC/CA ±5A (ACS70331) pode medir tanto corrente contínua quanto corrente alternada até 5 A com uma sensibilidade básica de 200 mV/A.

:::tip
Há uma tabela de dados de medição sobre corrente para sua referência na parte de **[Resources](#jump)** abaixo.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Suporta carga CC e CA
- Largura de banda de 1 MHz com tempo de resposta &lt;550 ns
- Baixo ruído: 8 mA(rms) a 1 MHz
- Resistência do condutor primário de 1,1 mΩ resulta em baixa perda de potência
- Alto PSRR em CC permite uso com fontes de alimentação ou baterias de baixa precisão (funcionamento de 3 a 4,5 V)
- Saída analógica

## Especificação

|Parâmetro|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura ambiente de operação| -40 – 85℃|
|Temperatura de armazenamento|- 65°C – 125°C|
|Tensão de trabalho|&lt;100V|
|Faixa de detecção de corrente|0 – 5A|
|Sensibilidade|200mV/A(Típ.)|
|Interface de saída|Grove Analógico|
|Interface de entrada|Terminal parafuso|

## Princípio de Funcionamento

Existem dois tipos de detecção de corrente: direta e indireta. A classificação é feita principalmente com base na tecnologia usada para medir a corrente.

**Detecção direta:**

- Lei de Ohm

**Detecção indireta:**

- Lei de Indução de Faraday
- Sensores de campo magnético
- Efeito Faraday

O Grove - Sensor de Corrente CC/CA ±5A (ACS70331) usa tecnologia de sensores de campo magnético. E existem três tipos de tecnologia de sensores de campo magnético:

- Efeito Hall
- Sensores de fluxgate
- Sensor de corrente magnetorresistivo

O Grove - Sensor de Corrente CC/CA ±5A (ACS70331) é baseado no princípio do sensor de corrente magnetorresistivo, que também é conhecido como GMR. Um magnetorresistor (MR) é um dispositivo de dois terminais que altera sua resistência de forma parabólica com o campo magnético aplicado. Essa variação da resistência do MR devido ao campo magnético é conhecida como Efeito Magnetorresistivo.

A construção interna do encapsulamento QFN do ACS70331 é mostrada na Figura 2. O chip fica acima do caminho de corrente primário de forma que o campo magnético seja produzido em plano com os elementos GMR no chip. Os elementos GMR 1 e 2 detectam o campo na direção +X para fluxo de corrente IP positivo, e os elementos GMR 3 e 4 detectam o campo na direção –X para fluxo de corrente IP positivo. Isso permite a medição diferencial da corrente e a rejeição de campos externos parasitas.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" /></a></p>
  <figcaption><b>Figure 1</b>. <i>Construção Interna do ACS70331</i></figcaption>
</figure>
</div>

Os quatro elementos GMR são organizados em uma configuração de ponte de Wheatstone, como mostrado na Figura 2, de forma que a saída da ponte seja proporcional ao campo diferencial detectado pelos quatro elementos, rejeitando campos comuns.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" /></a></p>
  <figcaption><b>Figure 2</b>. <i>Configuração da Ponte de Wheatstone</i></figcaption>
</figure>
</div>

## Visão Geral de Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" /></a></p>
  <figcaption><b>Figure 3</b>. <i>Pinagem</i></figcaption>
</figure>
</div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Primeiros Passos

:::caution
É proibido o corpo humano tocar o módulo durante o teste, caso contrário há risco de choque elétrico.
:::

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Sensor de Corrente CC/CA ±5A (ACS70331)|
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Base Shield.

:::note
**1** Conecte o cabo USB suavemente, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Demo CC

##### Conexão de Hardware

- **Passo 1.** Conecte o Grove - Sensor de Corrente CC/CA ±5A (ACS70331) à porta **A0** do Base Shield.

- **Passo 2.** Conecte os polos positivo e negativo do circuito a ser testado aos polos positivo e negativo correspondentes do terminal de parafuso.

:::tip
Se você inverter os polos positivo e negativo, a leitura será invertida. Este sensor precisa de calibração antes do uso, portanto, não ligue o circuito primeiro.
:::

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC via cabo USB.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" /></a></p>
  <figcaption><b>Figure 4</b>. <i>Usamos a fonte de alimentação CC neste demo, por favor ajuste a corrente para 0A ou não a ligue no início</i></figcaption>
</figure>
</div>

##### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor) do Github.

- **Passo 2.** Na pasta /example/, você pode encontrar o código de demonstração. Aqui nós usamos o [Grove - ±5A DC/AC Current Sensor (ACS70331)](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_5A_DC_Current_Sensor/Grove_5A_DC_Current_Sensor.ino) como exemplo. Basta clicar em **Grove_5A_DC_Current_Sensor.ino** para abrir a demo. Ou você pode copiar o código a seguir:

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A5

// Take the average of 500 times

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; //1000mA per 200mV 


float Vref = 1508;

void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // Read the value 500 times:
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // wait 2 milliseconds before the next loop
    delay(2);

  }

  sensorValue = sensorValue / averageValue;


  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 

  // Calculate the corresponding current
  float current = (voltage - Vref) * sensitivity;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // Print display current (mA)
  SERIAL.print(current);
  SERIAL.println("mA");

  SERIAL.print("\n");

  // Reset the sensorValue for the next reading
  sensorValue = 0;
  // Read it once per second
  delay(1000);
}

```

- **Passo 3.** Faça o upload do demo. Se você não souber como fazer o upload do código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Defina o baud rate para **9600**.

- **Passo 5. Calibração**  
        Quando não há corrente fluindo, o sensor ainda terá um pequeno valor de saída. Chamamos esse valor de **offset de zero**.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" /></a></p>
  <figcaption><b>Figura 5</b>. <i>O offset de zero desta placa é 595,70mV, convertido em corrente é -4561,48mA</i></figcaption>
</figure>
</div>

Devido à presença do offset de zero, o sensor também terá uma leitura quando não houver corrente. Então definimos um parâmetro **Vref** para corrigir isso; você pode encontrá-lo no bloco de código acima.

Linha 21:

```cpp
float Vref = 1508;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

No código de demonstração, definimos o Vref para 1508, porém, o valor do offset de zero varia de placa para placa. Como você sabe, a placa que usamos neste demo é 595,70. Então vamos modificar a Linha 21:

```cpp
float Vref = 596;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

Agora vamos fazer o upload do código modificado e verificar o resultado:

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" /></a></p>
  <figcaption><b>Figura 6</b>. <i>Agora o offset de zero da corrente passa a ser 0,02mA</i></figcaption>
</figure>
</div>

Quando a saída de corrente se torna 0mA ou um valor pequeno, você concluiu a calibração.

- **Passo 6.** Agora é com você, você pode energizar a carga de corrente. Sinta-se à vontade para usá-lo, lembre-se de que este é um Sensor de Corrente de 5A, a corrente não pode exceder 5A!  

Se você quiser conhecer a fórmula de cálculo do resultado, consulte o [FAQ Q1](#faq)

#### Demonstração AC

:::caution
Quando você usar energia AC, preste atenção à segurança e evite choque elétrico.
:::

Para a parte de conexão de hardware e calibração, consulte a [Demonstração DC](#Demonstração-DC), a única diferença é o código. Use o código a seguir para carga AC.

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A5

// Take the average of 500 times

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; //1000mA per 200mV 


//float Vref = 244;
float Vref = 1494;

void setup() 
{
  SERIAL.begin(9600);
}
static float tempval;
void loop() 
{

  // Read the value 500 times:
  for(int i=0;i<20;i++)
  {

  for (int i = 0; i < averageValue; i++)
  {
    int temp;
    temp= analogRead(Pin);
    if(temp>sensorValue)
    {
        sensorValue=temp;
    }
    delayMicroseconds(40);
  }
  tempval+=sensorValue;
  }

  sensorValue=tempval/20.0;
  tempval=0;
  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 

  // Calculate the corresponding current
  float current = ((voltage - Vref) * sensitivity)*0.707;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current

  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");


  // Print display current (mA)
  SERIAL.print("current: ")
  SERIAL.print(current);
  SERIAL.println("mA");

  SERIAL.print("\n");


  // Reset the sensorValue for the next reading
  sensorValue = 0;

  // Read it once per second
  delay(1000);
}

```

## FAQ

**Q1#** Qual é a fórmula de cálculo da corrente?

**A1:** Se você acha que a [parte do princípio](#Princípio-de-funcionamento) é muito complicada, vamos colocar de uma forma simples. A corrente no circuito a ser testado excita o campo magnético, o que faz com que o valor de resistência dos elementos GMR mude. E a mudança de resistência na ponte causa uma mudança na tensão na saída do chip. Chamamos a tensão de saída de **V<sub>IOUT</sub>**.

<div><p style={{textAlign: 'center'}}>
  V<sub>IOUT</sub> = Sens × I<sub>p</sub> + V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens é o coeficiente que converte a corrente em uma tensão de saída. Para este módulo é 200mA/V.  
> **I<sub>p</sub>**: I<sub>p</sub> é o valor de corrente no circuito a ser testado, unidade mA.  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> é a tensão de saída quando o I<sub>p</sub> é 0mA (o que significa que não há corrente no circuito a ser testado), unidade mV.

Aqui está o valor da corrente:  

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

Agora, vamos revisar a figura 5, explicaremos por que o valor de corrente da saída não é 0 quando o valor real de corrente no circuito a ser testado é 0. Como você pode ver na figura 5, o **initialValue** é 595,70mV, que é o **V<sub>IOUT</sub>**; a corrente é -4561,48mA, que é o **I<sub>p</sub>**. Quanto ao **V<sub>IOUT(Q)</sub>**, ele é o **Vref** que definimos no código.
Na figura 5, ele é 1508. E o **Sens** é 200mA/V, que é 200mA/1000mV. Agora, é só fazer algumas contas:

<div><p style={{textAlign: 'center'}}>
  {'{'}(595.70mV-1508mV ) / (200mA/1000mV){'}'} = -4561.50mA
</p></div>

Então, na figura 6, quando definimos o **Vref** para 595,70, o **Ip** passa a 0mA.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## <span id="jump">Recursos</span>

- **[ZIP]** [Arquivo esquemático do Grove - ±5A DC/AC Current Sensor (ACS70331)](https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip)
- **[PDF]** [Datasheet do ACS70331](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Current_Sensor_ACS70331.pdf)
- **[PDF]** [Dados de Medição](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove_±5A_DCAC_Current_Sensor_v1.1_measurement_data_20231214.xls)

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
