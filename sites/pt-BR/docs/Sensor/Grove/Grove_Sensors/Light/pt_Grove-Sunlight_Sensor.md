---
description: Grove - Sensor de Luz Solar
title: Grove - Sensor de Luz Solar
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Sunlight_Sensor
sku: 101020089
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Sunlight_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_sensor_view.jpg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor-p-2530.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - Sunlight Sensor é um sensor de luz digital multicanal, que tem a capacidade de detectar luz UV, luz visível e luz infravermelha.

Este dispositivo é baseado no SI1151, um novo sensor da SiLabs. O Si1151 é um sensor de baixa potência, baseado em reflectância, de proximidade infravermelha, índice UV e luz ambiente, com interface digital I2C e saída de interrupção por evento programável. Este dispositivo oferece excelente desempenho sob uma ampla faixa dinâmica e uma variedade de fontes de luz, incluindo luz solar direta.

Grove - Sunlight Sensor inclui um conector Grove on-board, que ajuda você a conectá-lo facilmente ao seu Arduino. Você pode usar este dispositivo para fazer algum projeto que precise detectar a luz, como um detector UV simples.

O chip principal do dispositivo foi atualizado para SI1151, o tutorial para SI1145 ainda permanece.

## Versão

| Versão do Produto               | Alterações                                                         | Data de Lançamento |
|----------------------------------|--------------------------------------------------------------------|--------------------|
| Grove - Sunlight Sensor v1.0     | Inicial                                                            | 12 Fev 2020        |
| Grove - Sunlight Sensor v2.0     | substitui Si1145 por Si1151-AB00-GMR                               | 27 Jul 2021        |

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x fornecem uma experiência pronta para uso para monitoramento ambiental. Consulte o Sensor Sem Fio de Intensidade de Luz S2102 com desempenho e robustez superiores para detecção de intensidade de luz. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td align="center"><strong>Sensor Industrial SenseCAP</strong></td></tr>
    <tr>
      <td>
      <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 Light</strong></a></td>
    </tr>
  </tbody></table>

## Recursos

---

- Sensor de luz digital
- Faixa de detecção de espectro ampla para melhorar a precisão.
- Configuração programável que o torna versátil para várias aplicações.
- Detecta luz solar diretamente
- Compatível com Grove
- Interface I2C (7-bit)

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Sistema Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificação

---
|||
|---|---|
|Tensão de Operação |3,0-5,5V|
|Corrente de operação |3,5mA|
|Comprimento de onda |280-950nm|
|Endereço I2C Padrão| 0x60|
|Temperatura de Operação| -45-85℃|

## Visão Geral do Hardware

---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Hardware_overview.jpg" /></div>

- Conector Grove - uma interface de 4 pinos, contendo VCC, GND, SDA e SCL
- LED - pino do driver de LED
- INT - uma saída de interrupção programável
- SI1151 - CI

## Primeiros Passos

---
Após esta seção, você poderá fazer o Grove - Sunlight Sensor funcionar com apenas alguns passos.

### SI1145 - Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 |Grove - Sunlight Sensor|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
Se esta é a sua primeira vez usando Arduino, coloque a mão [aqui](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Seeeduino) para iniciar sua jornada com Arduino.
:::

**Conectando o hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
Se você precisar conectar mais módulos na placa de controle principal, talvez precise de um [Grove base shield](https://wiki.seeedstudio.com/pt-br/Base_Shield_V2/) que facilitará seu trabalho.
:::

**Download**

Clique [aqui](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master) para baixar a biblioteca e depois [adicioná-la](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) ao Arduino.

Abra a Arduino IDE e clique em **File>Examples>Grove_Sunlight_Sensor>SI1145DEMO** para abrir o código de teste.

```cpp
/*
    This is a demo to test Grove - Sunlight Sensor library

*/

#include <Wire.h>

#include "Arduino.h"
#include "SI114X.h"

SI114X SI1145 = SI114X();

void setup() {

    Serial.begin(115200);
    Serial.println("Beginning Si1145!");

    while (!SI1145.Begin()) {
        Serial.println("Si1145 is not ready!");
        delay(1000);
    }
    Serial.println("Si1145 is ready!");
}

void loop() {
    Serial.print("//--------------------------------------//\r\n");
    Serial.print("Vis: "); Serial.println(SI1145.ReadVisible());
    Serial.print("IR: "); Serial.println(SI1145.ReadIR());
    //the real UV value must be div 100 from the reg value , datasheet for more information.
    Serial.print("UV: ");  Serial.println((float)SI1145.ReadUV() / 100);
    delay(1000);
}

```

Clique em Tools>Board para escolher Arduino UNO e selecione a porta serial correspondente.

Agora clique em Upload(CTRL+U) para gravar o código de teste. Consulte [**aqui**](https://wiki.seeedstudio.com/pt-br/Arduino_Common_Error) para qualquer mensagem de erro.

**Revisar Resultados**

Após o upload ser concluído, abra o Serial Monitor da sua Arduino IDE, você poderá obter os dados:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - luz visível, unidade em lm
    IR - luz infravermelha, unidade em lm
    UV - índice UN
:::

Agora, coloque o Grove - Sunlight Sensor sob o sol para ver se é um bom dia.

### SI1151 - Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 |Grove - Sunlight Sensor|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
Se esta é a sua primeira vez usando Arduino, coloque a mão [aqui](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Seeeduino) para iniciar sua jornada com Arduino.
:::

**Conectando o hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
Se você precisar conectar mais módulos na placa de controle principal, talvez precise de um [Grove base shield](https://wiki.seeedstudio.com/pt-br/Base_Shield_V2/) que facilitará seu trabalho.
:::

**Download**

Clique [aqui](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master) para baixar a biblioteca e depois [adicioná-la](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) ao Arduino.

Abra a Arduino IDE e clique em **File>Examples>Grove_Sunlight_Sensor>SI1151** para abrir o código de teste.

```cpp
#include "Si115X.h"

Si115X si1151;

/**
 * Setup for configuration
 */
void setup()
{
    Wire.begin();
    Serial.begin(115200);
    if (!si1151.Begin()) {
        Serial.println("Si1151 is not ready!");
        while (1) {
            delay(1000);
            Serial.print(".");
        };
    }
    else {
        Serial.println("Si1151 is ready!");
    }
}

/**
 * Loops and reads data from registers
 */
void loop()
{
    Serial.print("IR: ");
    Serial.println(si1151.ReadIR());
    Serial.print("Visible: ");
    Serial.println(si1151.ReadVisible());

    delay(500);
}
```

Clique em Tools>Board para escolher Arduino UNO e selecione a porta serial correspondente.

Agora clique em Upload(CTRL+U) para gravar o código de teste. Consulte [**aqui**](https://wiki.seeedstudio.com/pt-br/Arduino_Common_Error) para qualquer mensagem de erro.

**Revisar Resultados**

Após o upload ser concluído, abra o Serial Monitor da sua Arduino IDE, você poderá obter os dados:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - luz visível, unidade em lm
    IR - luz infravermelha, unidade em lm
    UV - índice UN
:::

Agora, coloque o Grove - Sunlight Sensor sob o sol para ver se é um bom dia.


### SI1145 - Brincar com Raspberry Pi

**Materiais necessários**

| Raspberry Pi 4 Model B |Grove - Base Hat para Raspberry Pi|Grove - Sunlight Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**Conectando o hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**Passo 1.** Conecte o Grove - Sunlight Sensor à porta **I2C** do Grove - Base Hat para Raspberry Pi, conectado ao Raspberry Pi 4 Model B. Em seguida, conecte o Raspberry Pi 4 Model B a um PC.

**Passo 2.** Após acessar o sistema do Raspberry Pi, faça git clone de **[Seeed_Python_SI114X](https://github.com/Seeed-Studio/Seeed_Python_SI114X)** e instale **grove.py** inserindo o seguinte comando:

```shell
pip3 install Seeed-grove.py
```

Ou, em sistemas GNU/Linux compatíveis como o Raspberry Pi, você pode instalar o driver localmente a partir do PyPI:

```Shell
pip3 install seeed-python-si114x
```

**Passo 3.** Para instalar em todo o sistema (isso pode ser necessário em alguns casos):

```Shell
sudo pip3 install seeed-python-si114x
```

E você pode inserir o seguinte comando para atualizar o driver localmente a partir do PyPI:

```Shell
pip3 install --upgrade seeed-python-si114x
```

**Software**

```python
import seeed_si114x
import time
import signal
def handler(signalnum, handler):
    print("Please use Ctrl C to quit")
def main():
    SI1145 = seeed_si114x.grove_si114x()
    print("Please use Ctrl C to quit")
    signal.signal(signal.SIGTSTP, handler) # Ctrl-z
    signal.signal(signal.SIGQUIT, handler) # Ctrl-\
    while True:
        print('Visible %03d UV %.2f IR %03d' % (SI1145.ReadVisible , SI1145.ReadUV/100 , SI1145.ReadIR),end=" ")
        print('\r', end='')
        time.sleep(0.5)
if __name__  == '__main__':
    main()
```

Antes de executar o código de demonstração, você deve verificar o número i2c correspondente da placa:

```Shell
ls /dev/i2c*
```

Se o dispositivo i2c funcionar corretamente, haverá:

```Shell
/dev/i2c-1
```

**SE NÃO**, use o comando **sudo raspi-config** e reinicie para habilitar o dispositivo i2c:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**Passo 4.** Execute a demonstração com o seguinte comando:

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 examples/BasicRead.py 
```

:::tip
O resultado será exibido como a seguir se tudo correr bem:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/outcome.png" /></div>

:::note
**Visible** refere-se à **luz visível do ambiente** e **UV** refere-se ao **Índice Ultravioleta (UV)** enquanto **IR** significa **luz infravermelha do ambiente**.
:::

### SI1151 - Brincando com Raspberry Pi

**Materiais necessários**

| Raspberry Pi 4 Model B |Grove - Base Hat para Raspberry Pi|Grove - Sunlight Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**Conectando o hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**Passo 1.** Conecte o Grove - Sunlight Sensor à porta **I2C** do Grove - Base Hat para Raspberry Pi, conectado ao Raspberry Pi 4 Model B. Em seguida, conecte o Raspberry Pi 4 Model B a um PC.

**Passo 2.** Após acessar o sistema do Raspberry Pi, faça git clone da **[biblioteca Grove_Sunlight_Sensor](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/Si1151)**

```Shell
git clone git clone git@github.com:Seeed-Studio/Grove_Sunlight_Sensor.git -b Si1151 Si1151_library
```

Antes de executar o código de demonstração, você deve verificar o número i2c correspondente da placa:

```Shell
ls /dev/i2c*
```

Se o dispositivo i2c funcionar corretamente, haverá:

```Shell
/dev/i2c-1
```

**SE NÃO**, use o comando **sudo raspi-config** e reinicie para habilitar o dispositivo i2c:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**Passo 3.** Execute a demonstração com o seguinte comando:

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 seeed_si115x.py
```

:::tip
O resultado será exibido como a seguir se tudo correr bem:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/Sunlighttu.png" /></div>

:::note
**Visible** refere-se à **luz visível do ambiente** e **UV** refere-se ao **Índice Ultravioleta (UV)** enquanto **IR** significa **luz infravermelha do ambiente**.
:::

## Referências

**Espectro**

O conteúdo deste capítulo foi obtido da [**Wikipédia - Spectrum**](https://en.wikipedia.org/wiki/Spectrum), clique para ver a página original.

Um espectro (plural spectra ou spectrums[1]) é uma condição que não se limita a um conjunto específico de valores, mas pode variar infinitamente dentro de um contínuo. A palavra foi usada cientificamente pela primeira vez no campo da óptica para descrever o arco-íris de cores na luz visível quando separada usando um prisma. À medida que a compreensão científica da luz avançou, passou a se aplicar a todo o espectro eletromagnético.

Desde então, o termo espectro tem sido aplicado por analogia a tópicos fora da óptica. Assim, pode-se falar sobre o espectro de opinião política, ou o espectro de atividade de um medicamento, ou o espectro do autismo. Nesses usos, os valores dentro de um espectro podem não estar associados a números ou definições precisamente quantificáveis. Tais usos implicam uma ampla gama de condições ou comportamentos agrupados e estudados sob um único título para facilitar a discussão.

Na maioria dos usos modernos de espectro há um tema unificador entre extremos em cada extremidade. Alguns usos mais antigos da palavra não tinham um tema unificador, mas levaram aos modernos por meio de uma sequência de eventos descrita abaixo. Os usos modernos em matemática evoluíram a partir de um tema unificador, mas isso pode ser difícil de reconhecer.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_spectrum.jpg" /></div>

**Lúmen**

O conteúdo deste capítulo foi obtido da [**Wikipédia - Lumen (unit)**](https://en.wikipedia.org/wiki/Lumen_(unit)), clique para ver a página original.

O lúmen (símbolo: lm) é a unidade derivada do SI de fluxo luminoso, uma medida da quantidade total de luz visível “emitida” por uma fonte. O fluxo luminoso difere da potência (fluxo radiante) porque as medições de fluxo luminoso refletem a sensibilidade variável do olho humano a diferentes comprimentos de onda da luz, enquanto as medições de fluxo radiante indicam a potência total de todas as ondas eletromagnéticas emitidas, independentemente da capacidade do olho de percebê-las. Lumens estão relacionados a lux, pois um lux é um lúmen por metro quadrado.

**Índice ultravioleta**

O conteúdo deste capítulo foi obtido da [**Wikipédia - Ultraviolet index**](https://en.wikipedia.org/wiki/Ultraviolet_index), clique para ver a página original.

O índice ultravioleta ou Índice UV é uma medida padrão internacional da intensidade da radiação ultravioleta (UV) que causa queimaduras solares em um determinado local e horário. A escala foi desenvolvida por cientistas canadenses em 1992, depois adotada e padronizada pela Organização Mundial da Saúde da ONU e pela Organização Meteorológica Mundial em 1994. É usada principalmente em previsões diárias voltadas ao público em geral e está cada vez mais disponível também como previsão horária.

O Índice UV é concebido como uma escala linear de extremidade aberta, diretamente proporcional à intensidade da radiação UV que causa queimaduras solares na pele humana. Por exemplo, se uma pessoa de pele clara (sem protetor solar ou bronzeado) começa a se queimar em 30 minutos com Índice UV 6, então essa pessoa deve esperar se queimar em cerca de 15 minutos com Índice UV 12 – o dobro de UV, o dobro de rapidez.

O objetivo do Índice UV é ajudar as pessoas a se protegerem de forma eficaz da radiação UV, que traz benefícios à saúde com moderação, mas em excesso causa queimaduras solares, envelhecimento da pele, danos ao DNA, câncer de pele, imunossupressão[1] e danos aos olhos, como catarata (veja a seção Efeitos da radiação ultravioleta relacionados à saúde humana). Organizações de saúde pública recomendam que as pessoas se protejam (por exemplo, aplicando protetor solar na pele e usando chapéu e óculos escuros) se passarem muito tempo ao ar livre quando o Índice UV for 3 ou superior; veja a tabela abaixo para recomendações mais detalhadas.

Quando o Índice UV previsto para o dia estiver dentro de vários intervalos numéricos, as recomendações de proteção são as seguintes:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/uv%20index.png" /></div>

**Notas de cautela**

Ao interpretar o Índice UV e as recomendações, esteja ciente de que:

- A intensidade da radiação UV que atinge a superfície da Terra depende do ângulo do sol no céu. Todos os dias, o sol atinge seu ângulo mais alto (maior intensidade, sombras mais curtas) ao meio-dia solar, que apenas aproximadamente corresponde a 12:00 nos relógios. Isso se deve às diferenças entre a hora solar e a hora local em um determinado fuso horário. Em geral, o risco de UV é alto quando o sol está suficientemente acima da cabeça de modo que as sombras das pessoas sejam mais curtas do que sua altura.
- Da mesma forma, a intensidade de UV pode ser maior ou menor para superfícies em diferentes ângulos em relação à horizontal. Por exemplo, se as pessoas estiverem caminhando ou em pé ao ar livre, a exposição UV aos olhos e às superfícies verticais da pele, como o rosto, pode ser ainda mais severa quando o sol está mais baixo, como no fim de um dia de verão ou em tardes de inverno em uma trilha de esqui. Isso é em parte consequência do fato de que o equipamento de medição sobre o qual o índice é baseado é uma superfície horizontal plana.
A intensidade de UV pode quase dobrar com a reflexão da neve ou de outras superfícies claras como água, areia ou concreto.
- As recomendações fornecidas são para adultos médios com pele levemente bronzeada. Aqueles com pele mais escura têm maior probabilidade de suportar maior exposição ao sol, enquanto cuidados extras são necessários para crianças, idosos, adultos particularmente de pele clara e aqueles que têm maior sensibilidade ao sol por motivos médicos ou por exposição a UV em dias anteriores. (A recuperação da pele após a radiação UV geralmente leva dois dias ou mais para se completar.)
- Devido à forma como o Índice UV é calculado, ele expressa tecnicamente o risco de desenvolver queimaduras solares, que são causadas principalmente pela radiação UVB. No entanto, a radiação UVA também causa danos (fotoenvelhecimento, melanoma). Em algumas condições, incluindo a maioria das camas de bronzeamento, o nível de UVA pode ser desproporcionalmente mais alto do que o descrito pelo Índice UV. O uso de protetor solar de amplo espectro (UVA/UVB) pode ajudar a lidar com essa preocupação.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Esquemático em PDF](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0.pdf)
- [Esquemático em arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip)
- [Folha de dados Si1145](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Si1145-46-47.pdf)
- [Repositório Github para Grove - Sunlight Sensor](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor)
- [Espectro](https://en.wikipedia.org/wiki/Spectrum)
- [Lúmen (unidade)](https://en.wikipedia.org/wiki/Lumen_(unit))
- [Índice ultravioleta](https://en.wikipedia.org/wiki/Ultraviolet_index)
- [Grove - Sunlight Sensor v2.0](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/Grove-SunlightSensorv2.0.zip)
- [Folha de dados SI1151-AB00-GMR](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/SI1151-AB00-GMR.pdf)

## Projeto

**The Environment Cube! Know the Land Beneath You!** Um cubo com todos os sensores necessários, adequado para uma ampla gama de aplicações como agricultura. Conheça a terra sob seus pés!

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed" width="350"></iframe>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

