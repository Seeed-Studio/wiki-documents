---
description: Grove - Sensor UV I2C (VEML6070)
title: Grove - Sensor UV I2C (VEML6070)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-I2C_UV_Sensor-VEML6070
sku: 101020600
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_UV_Sensor-VEML6070/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/perspective.jpg" /></div>

O Grove - I2C UV Sensor (VEML6070) é um sensor avançado de luz ultravioleta (UV) com interface de protocolo I2C. A luz ultravioleta (UV) é uma radiação eletromagnética com comprimento de onda de 10 nm a 400 nm, menor que o da luz visível, mas maior que o dos raios X. Este sensor detecta luz de 320–410 nm de forma mais eficaz e converte a intensidade da luz UV solar em dados digitais.

Este módulo é baseado no VEML6070, que possui sensibilidade linear à luz UV solar e é facilmente ajustado por um resistor externo.

Além disso, o recurso de reconhecimento ativo (ACK) com configuração de janelas de limite permite que o sensor UV envie uma mensagem de alerta de UVI. Em uma condição de forte UVI solar, o sinal ACK inteligente pode ser facilmente implementado por programação de software.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Excelente desempenho de medição de radiação UV sob longa exposição à luz UV solar
- Excelente sensibilidade e linearidade UV
- Excelente compensação de temperatura
- Alta resolução de detecção dinâmica
- Suporte ao recurso de reconhecimento (ACK)

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|3.3V / 5V|
|Faixa de sensibilidade espectral|320 ~ 410 nm|
|Sensibilidade de pico|355 nm|
|Sensibilidade UVA|5 μW/cm2/passo (típico) |
|Interface|I2C|
|Endereço I2C|0x38(Data LSB) / 0x39(Data MSB)|

:::caution
        Na verdade, este sensor possui 3 endereços I2C, cada endereço
:::

## Aplicações típicas

- Indicador de UV solar
- Produto portátil cosmético / esportes ao ar livre
- Produtos de consumo

## Visão geral de hardware

### Pinagem

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out_back.jpg" /></div>

## Plataformas suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - I2C UV Sensor (VEML6070) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank">Adquira agora</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove acompanha um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - I2C UV Sensor (VEML6070) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/connect.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - I2C UV Sensor (VEML6070) |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V ou 3.3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Faça o download da biblioteca [Seeed_VEML6070](https://github.com/Seeed-Studio/Seeed_VEML6070) no Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri-lo das seguintes três maneiras：
    1. Abra-o diretamente na IDE do Arduino pelo caminho: **File --> Examples --> Seeed_VEML6070 --> INT_mode**.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_1.jpg" /></div>

    2. Abra-o no seu computador clicando em **INT_mode.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_VEML6070-master\examples\INT_mode**, em que **XXXX** é o local onde você instalou a IDE do Arduino.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_2.jpg" /></div>

    3. Ou você pode simplesmente clicar no ícone ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE do Arduino.

```cpp
#include "Seeed_VEML6070.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

VEML6070 sensor;

char *UV_str[]={"low level","moderate level","high_level","very high","extreme"};

err_t read_UV()
{
    err_t ret=NO_ERROR;
    u16 step;
    sensor.wait_for_ready();
    CHECK_RESULT(ret,sensor.read_step(step));
    SERIAL.print("UV step = ");
    SERIAL.println(step);
    RISK_LEVEL level=sensor.convert_to_risk_level(step);
    SERIAL.print("UV level is ");
    SERIAL.println(UV_str[level]);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    return ret;
}



void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    delay(1000);
    if(sensor.init())
    {
      SERIAL.println("init failed!!!");
    }
    /*threshold is 145 steps*/
    /*enable*/
    sensor.set_interrupt(INT_145_STEP,ENABLE);
}


void loop()
{
    if(read_UV())
    {
      SERIAL.print("read UV sensor failed!!");
    }
    //sensor.enable();
    //sensor.disable();
    delay(1000);
}
```

:::note
**Há 2 demos na biblioteca:**  
**basic_demo.ino**
        >Este exemplo pode obter o índice UV e o nível de UV a partir da porta serial, consultando os dados.

**INT_mode.ino**  
        >há um pad INT no módulo do sensor que se conecta ao pino ACK do VEML6070. Você pode definir o limite de UV em 102 passos ou 145 passos (apenas duas opções). O pino INT gera nível baixo quando o valor de UV ultrapassa o limite. Você pode conectar o pino INT a um pino de interrupção do host para melhorar a eficiência da operação do programa.  
:::

:::caution
O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Passo 4.** Envie o demo. Se você não souber como enviar o código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **115200**.

:::tip
Se tudo correr bem, quando você usar luz UV para iluminar este módulo, você verá informações como:
:::

```
4serial start!!
cmd reg=32
UV step = 20
UV level is low level



UV step = 125
UV level is low level



UV step = 511
UV level is low level

```

#### Função de Alerta

Como podemos ver na parte de Visão Geral do hardware, há um pino ACK para o usuário usar como sinal de interrupção. A boa notícia é que há dois limiares de 102 passos e 145 passos para escolher, a má é que você não pode definir seu próprio número, apenas 102 e 145 são válidos. O pino ACK tem saída baixa por padrão, assim que o valor UV ultrapassar o limiar que você definiu, o pino ACK terá saída Alta. Vamos voltar ao código de exemplo **INT_mode.ino**.

Na linha 46, a configuração padrão do limiar é 145, se você quiser usar 102, basta alterar o código como abaixo:

```cxx title="old.ino"
sensor.set_interrupt(INT_145_STEP,ENABLE); //change this line 
```

```cxx title="modify.ino"
sensor.set_interrupt(INT_102_STEP,ENABLE); // modified
```

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - I2C UV Sensor (VEML6070)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div> |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div> |
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove - I2C UV Sensor (VEML6070) à porta **I2C** do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/UV_Hat.jpg" /></div>

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento e instalar o grove.py no seu Raspberry Pi.
- **Passo 2**. Execute os comandos abaixo para rodar o código.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_uv_sensor
```

A seguir está o código grove_uv_sensor.py.

```python
from __future__ import print_function
from grove.i2c import Bus
import time


# I2C address of the device
VEML6070_DEFAULT_ADDRESS				= 0x38

# VEML6070 Command Set
VEML6070_CMD_ACK_DISABLE				= 0x00 # Acknowledge Disable
VEML6070_CMD_ACK_ENABLE					= 0x20 # Acknowledge Enable
VEML6070_CMD_ACK_THD_102				= 0x00 # Acknowledge threshold 102 Steps
VEML6070_CMD_ACK_THD_145				= 0x10 # Acknowledge threshold 145 Steps
VEML6070_CMD_IT_1_2T					= 0x00 # Integration time = 1/2T
VEML6070_CMD_IT_1T						= 0x04 # Integration time = 1T
VEML6070_CMD_IT_2T						= 0x08 # Integration time = 2T
VEML6070_CMD_IT_4T						= 0x0C # Integration time = 4T
VEML6070_CMD_RESERVED					= 0x02 # Reserved, Set to 1
VEML6070_CMD_SD_DISABLE					= 0x00 # Shut-down Disable
VEML6070_CMD_SD_ENABLE					= 0x01 # Shut-down Enable
VEML6070_CMD_READ_LSB					= 0x38 # Read LSB of the data
VEML6070_CMD_READ_MSB					= 0x39 # Read MSB of the data

class VEML6070():
	def __init__(self, address = VEML6070_DEFAULT_ADDRESS):
		self._addr = address
		self._bus  = Bus()
		self.write_command()

	def write_command(self):
		"""Select the UV light command from the given provided values"""
		COMMAND_CONFIG = (VEML6070_CMD_ACK_DISABLE | VEML6070_CMD_IT_1_2T | VEML6070_CMD_SD_DISABLE | VEML6070_CMD_RESERVED)
		self._bus.write_byte(VEML6070_DEFAULT_ADDRESS, COMMAND_CONFIG)

	def read_uvlight(self):
		"""Read data back VEML6070_CMD_READ_MSB(0x73) and VEML6070_CMD_READ_LSB(0x71), uvlight MSB, uvlight LSB"""
		data0 = self._bus.read_byte(VEML6070_CMD_READ_MSB)
		data1 = self._bus.read_byte(VEML6070_CMD_READ_LSB)

		# Convert the data
		uvlight = data0 * 256 + data1

		return {'u' : uvlight}


def main():

	veml6070 = VEML6070()

	## Exit handlers ##
	# This function stops python from printing a stacktrace when you hit control-C
	def SIGINTHandler(signum, frame):
		raise SystemExit

	# This function lets you run code on exit, including functions from abpdrrt005pg2a5
	def exitHandler():
		print("Exiting")
		sys.exit(0)

	while True:
		light = veml6070.read_uvlight()
		print("UV Value: {0}".format(light['u']))
		print(" *********************************** ")
		time.sleep(1)

if __name__ == '__main__':
	main()
```

:::tip
Se tudo correr bem, você conseguirá ver o seguinte resultado
:::

```python

(env)pi@raspberrypi:~ grove_uv_sensor
UV Value: 0
UV Value: 0
UV Value: 0
UV Value: 0
^CExiting

```

Você pode sair deste programa simplesmente pressionando `ctrl`+`c`.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - I2C UV Sensor (VEML6070) Eagle Files](https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip)

- **[Zip]** [Seeed VEML6070 Library](https://github.com/Seeed-Studio/Seeed_VEML6070/archive/master.zip)

- **[PDF]** [Datasheet VEML6070](https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/VEML6070.pdf)

- **[PDF]** [VEML6070 Application Note](https://github.com/Seeed-Studio/Seeed_VEML6070/raw/master/doc/designingveml6070.pdf)

## Projeto

Este é o vídeo de introdução deste produto, demonstrações simples, você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
