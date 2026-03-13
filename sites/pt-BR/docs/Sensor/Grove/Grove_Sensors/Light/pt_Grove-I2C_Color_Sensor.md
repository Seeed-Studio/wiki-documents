---
description: Grove - Sensor de Cor I2C
title: Grove - Sensor de Cor I2C
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-I2C_Color_Sensor
sku: 101020341, 101020041
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Color_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" /></div>

Este módulo é baseado no sensor de cor TCS3414CS com saída digital I2C. Com base na matriz de fotodiodos filtrados 8\*2 e conversores analógico‑digitais de 16 bits, você pode medir a cromaticidade de cor da luz ambiente ou a cor de objetos. Dos 16 fotodiodos, 4 têm filtros vermelhos, 4 têm filtros verdes, 4 têm filtros azuis e 4 não têm filtro (claros). Com o pino de entrada de sincronização, uma fonte de luz pulsada externa pode fornecer controle de conversão síncrona precisa.

:::note
Observe que a versão mais recente V2.0 substituiu o CI pelo TCS3472 e a biblioteca antiga também foi atualizada. Se você estiver usando a versão V2.0, use a [nova biblioteca](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472).
:::





Recursos
--------

- Interface compatível com Grove
- Saída digital de 16 bits com I2C
- Entrada SYNC sincroniza o ciclo de integração com fontes de luz moduladas
- Faixa de temperatura de operação de -40°C a 85°C
- Função de interrupção programável com configurações de limite superior e inferior definidas pelo usuário
- Compatível com RoHS

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
-------------

| Parâmetro | Valor/Faixa            |
|-----------|------------------------|
| Tamanho da PCB  | 2,0 cm \* 4,0 cm       |
| Interface | Conector tipo pino passo 2,0 mm |
| VCC       | 3,3 - 6,0 V            |
| Velocidade I2C | 400 kHz                |

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Primeiros Passos
---------------

Os documentos a seguir ajudam o usuário a começar a usar o Grove.

- [Prefácio - Primeiros Passos](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [Introdução ao Grove](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

### Conexões de Hardware

Os produtos Grove têm um ecossistema e todos têm o mesmo conector que pode ser encaixado no Grove Base Shield. Conecte este módulo à porta I2C do Base Shield. No entanto, você também pode conectar o Grove - I2C Color Sensor ao Arduino sem o Base Shield usando jumpers.

| Arduino UNO | Grove - I2C Color Sensor |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

Instalação de Software
---------------------

Baixe o Arduino e instale o driver do Arduino

Primeiros Passos com Seeeduino/Arduino

Demonstrações
-----

Este módulo pode ser usado para detectar a cor da fonte de luz ou a cor de objetos. Quando usado para detectar a cor da fonte de luz, o interruptor do LED deve estar desligado e a fonte de luz deve incidir diretamente sobre o sensor. Quando usado para detectar a cor de objetos, o LED deve estar ligado e você deve colocar o objeto bem próximo à parte superior da caixa. A teoria para detectar a cor de objetos é a Teoria de Detecção Refletiva. Como na imagem abaixo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Reflcect.jpg" /></div>

### Biblioteca do Sensor de Cor

Nós criamos uma biblioteca para ajudar você a começar rapidamente a brincar com o Seeeduino/Arduino; nesta seção, mostraremos como configurar a biblioteca.

#### Configuração

1. Baixe o [código da biblioteca como um arquivo zip](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor) da página Grove_I2C_Color_Sensor no GitHub. Se você estiver usando a versão mais recente V2.0 (o CI é TCS3472), use esta [nova biblioteca](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
2. Descompacte o arquivo baixado em …/arduino/libraries.
3. Renomeie a pasta descompactada para "Color_Sensor"
4. Inicie a IDE do Arduino (ou reinicie se ela já estiver aberta).

#### Descrição da função

Esta é a função mais importante/útil da biblioteca; convidamos você a olhar os arquivos .h e .cpp para ver todas as funções disponíveis.

##### Ler dados RGB por meio da função da biblioteca

**readRGB(int \*red, int \*green, int \*blue)**

- **red:** O endereço da variável para salvar R.
- **green:** O endereço da variável para salvar G.
- **blue:** O endereço da variável para salvar B.

```
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
    }
}
```

### Exemplos/Aplicações do Sensor de Cor

Este exemplo mostra como usar recursos do Grove - I2C Color Sensor e exibir a cor detectada com um [Grove LED RGB Encadeável](/pt-br/Grove-Chainable_RGB_LED/).

:::note
Se você ainda não baixou a <a href="https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED">biblioteca Grove-Chainable RGB LED</a> para sua IDE do Arduino, baixe e configure a biblioteca primeiro.
:::

- Abra File->Examples->Color_Sensor->example->ColorSensorWithRGB-LED para um exemplo completo ou copie e cole o código abaixo em um novo sketch do Arduino.

**Descrição**: Este exemplo pode medir a cromaticidade de cor da luz ambiente ou a cor de objetos e, por meio do Grove LED RGB Encadeável, exibir a cor detectada.

Você também pode usar outros módulos de exibição para mostrar a cor detectada pelo Grove - I2C Color Sensor.

```
#include <Wire.h>
#include <GroveColorSensor.h>
#include <ChainableLED.h>

#define CLK_PIN   7
#define DATA_PIN  8
#define NUM_LEDS  1            //The number of Chainable RGB LED

ChainableLED leds(CLK_PIN, DATA_PIN, NUM_LEDS);

void setup()
{
    Serial.begin(9600);
    Wire.begin();
}

void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
        for(int i = 0; i<NUM_LEDS; i++)
        {
            leds.setColorRGB(i, red, green, blue);
        }
    }
}
```

- Carregue o código na placa de desenvolvimento.
- Em seguida, o Grove_-_Chainable_RGB_LED exibirá a cor que for detectada.

### Brincar com Raspberry Pi 

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove-I2C_Color_Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-I2C-Color-Sensor-p-854.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove-I2C_Color à porta **I2C** do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/Color.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Entre no ambiente virtual relevante.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Passo 3**. Execute o comando abaixo para rodar o código.

- O seguinte é para verificar o código thegrove_i2c_color_sensor_v2.py.

```
less grove_i2c_color_sensor_v2.py
```

```python
import time
from grove.i2c import Bus


_CMD      = 0x80
_AUTO     = 0x20

_ENABLE   = 0x00
_ATIME    = 0x01
_WTIME    = 0x03
_AILT     = 0x04
_AIHT     = 0x06
_PERS     = 0x0C
_CONFIG   = 0x0D
_CONTROL  = 0x0F
_ID       = 0x12
_STATUS   = 0x13
_CDATA    = 0x14
_RDATA    = 0x16
_GDATA    = 0x18
_BDATA    = 0x1A

_AIEN       = 0x10
_WEN        = 0x08
_AEN        = 0x02
_PON        = 0x01

_GAINS  = (1, 4, 16, 60)


class GroveI2cColorSensorV2:
    """Driver for Grove I2C Color Sensor (TCS34725)"""

    def __init__(self, bus=1, address=0x29):
        self.address = address
        self.bus = Bus(bus)

        self.awake = False

        if self.id not in (0x44, 0x4D):
            raise ValueError('Not find a Grove I2C Color Sensor V2')

        self.set_integration_time(24)
        self.set_gain(4)

    def wakeup(self):
        enable = self._read_byte(_ENABLE)
        self._write_byte(_ENABLE, enable | _PON | _AEN)
        time.sleep(0.0024)

        self.awake = True

    def sleep(self):
        enable = self._read_byte(_ENABLE)
        self._write_byte(_ENABLE, enable & ~_PON)

        self.awake = False

    def is_awake(self):
        return self._read_byte(_ENABLE) & _PON

    def set_wait_time(self, t):
        pass

    @property
    def id(self):
        return self._read_byte(_ID)

    @property
    def integration_time(self):
        steps = 256 - self._read_byte(_ATIME)
        return steps * 2.4

    def set_integration_time(self, t):
        """Set the integration time of the sensor"""
        if t < 2.4:
            t = 2.4
        elif t > 614.4:
            t = 614.4

        steps = int(t / 2.4)
        self._integration_time = steps * 2.4
        self._write_byte(_ATIME, 256 - steps)

    @property
    def gain(self):
        """The gain control. Should be 1, 4, 16, or 60.
        """
        return _GAINS[self._read_byte(_CONTROL)]

    def set_gain(self, gain):
        if gain in _GAINS:
            self._write_byte(_CONTROL, _GAINS.index(gain))

    @property
    def raw(self):
        """Read RGBC registers
        return 16 bits red, green, blue and clear data
        """

        if not self.awake:
            self.wakeup()

        while not self._valid():
            time.sleep(0.0024)

        data = tuple(self._read_word(reg) for reg in (_RDATA, _GDATA, _BDATA, _CDATA))
        return data

    @property
    def rgb(self):
        """Read the RGB color detected by the sensor.  Returns a 3-tuple of
        red, green, blue component values as bytes (0-255).
        """
        r, g, b, clear = self.raw
        if clear:
            r = int(255 * r / clear)
            g = int(255 * g / clear)
            b = int(255 * b / clear)
        else:
            r, g, b = 0, 0, 0
        return r, g, b

    def _valid(self):
        """Check if RGBC is valid"""
        return self._read_byte(_STATUS) & 0x01

    def _read_byte(self, address):
        command = _CMD | address
        return self.bus.read_byte_data(self.address, command)

    def _read_word(self, address):
        command = _CMD | _AUTO | address
        return self.bus.read_word_data(self.address, command)

    def _write_byte(self, address, data):
        command = _CMD | address
        self.bus.write_byte_data(self.address, command, data)

    def _write_word(self, address, data):
        command = _CMD | _AUTO | address
        data = [(data >> 8) & 0xFF, data & 0xFF]
        self.bus.write_i2c_block_data(self.address, command, data)


Grove = GroveI2cColorSensorV2


def main():
    sensor = GroveI2cColorSensorV2()

    print('Raw data of red-filtered, green-filtered, blue-filtered and unfiltered photodiodes')
    while True:
        # r, g, b = sensor.rgb
        r, g, b, clear = sensor.raw
        print((r, g, b, clear))
        time.sleep(1.0)

if __name__ == '__main__':
    main()
```
- Execute este código
```

python grove_i2c_color_sensor_v2.py

```

Se tudo correr bem, você verá o seguinte fenômeno.😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/color_result.png" alt="pir" width={600} height="auto" /></p>







Outras Referências
---------------

Este módulo é baseado no sensor de cor TCS3414CS. O sensor de cor digital TCS3414CS retorna dados de quatro canais: vermelho (R), verde (G), azul (B) e claro (C) (não filtrado). A resposta dos canais vermelho, verde e azul (RGB) pode ser usada para determinar as coordenadas de cromaticidade (x, y) de uma determinada fonte. Esses padrões são definidos pela Commission Internationale de l’Eclairage (CIE). A CIE é a principal organização internacional responsável por cor e medição de cor. Para adquirir a cor de um determinado objeto usando o TCS3414CS, devemos primeiro mapear a resposta do sensor (RGB) para os valores tristímulos da CIE (XYZ). Em seguida, é necessário calcular as coordenadas de cromaticidade (x, y).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Coordinates_transform.png" /></div>

Visão Geral do Processo de Cálculo de Cromaticidade

As equações para fazer a transformação:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Equations.png" /></div>

Equações de Transformação

- Quando obtivermos as coordenadas (x, y), consulte a figura abaixo para obter a cor recomendada.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Chromaticity_Diagram.jpg" /></div>

## FAQs

**P1: Como entender os comandos? Por exemplo, REG_GREEN_LOW = 0xD0**

R1: A partir da imagem anexada, você pode ver o que há no comando. Ao usar comando de protocolo de byte, ele deve ser como 0x80+ADDRESS. Por exemplo, REG_TIMING( 01h ) = 0x81
Para leitura de byte e bloco, o comando deve ser 0xC0+ADDRESS, REG_GREEN_LOW( 10h ) = 0xD0.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Color%20sensor%20register.png" /></div>

# Grove-I2C Color Sensor Eagle File V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-I2C Color Sensor Eagle File V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Resources

---------

- **[Library]**[Library for Grove - I2C Color Sensor V1.2](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)
- **[Library]**[Library for Grove - I2C Color Sensor V2.0](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
- **[Eagle]**[Grove-I2C Color Sensor Eagle File V1.2](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip)
- **[Eagle]**[Grove-I2C Color Sensor Eagle File V2.0](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip)
- **[Datasheet]**[TCS3414-A Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3404_TCS3414-A.pdf)
- **[Datasheet]**[TCS3472 Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3472%20Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Color_Sensor -->

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

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
