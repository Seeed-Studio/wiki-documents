---
description: Grove - Sensor GSR
title: Grove - Sensor GSR
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-GSR_Sensor
sku: 101020052
last_update:
  date: 1/6/2023
  author: Seraphina
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-GSR_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/GSR.jpg" /></div>

GSR significa resposta galvânica da pele, é um método de medir a condutância elétrica da pele. Emoções fortes podem causar estímulo ao seu sistema nervoso simpático, resultando em mais suor sendo secretado pelas glândulas sudoríparas. O Grove - GSR permite que você detecte essas emoções fortes simplesmente conectando dois eletrodos a dois dedos de uma mão. É interessante para criar projetos relacionados a emoções, como monitor de qualidade do sono.

:::caution
O sensor Grove-GSR mede a resistência das pessoas, NÃO a condutividade!
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## Versão

| Versão do Produto                  |  Alterações | Data de Lançamento                                |
|------------------------|----------------|--------------------------------------------|
| Grove - GSR_Sensor V1.0      | Inicial     |  19 de junho de 2013     |
| Grove - GSR_Sensor V1.2  |Adicionar C3 100nf entre M324PW-TSSOP14 e GND  | 31 de julho de 2014 |

## Especificação

| Parâmetro               | Valor/Faixa                    |
|-------------------------|--------------------------------|
| Tensão de operação       | 3,3V/5V                        |
| Sensibilidade             | Ajustável por meio de um potenciômetro |
| Sinal de entrada            | Resistência, NÃO condutividade   |
| Sinal de saída           | Tensão, leitura analógica        |
| Material de contato com o dedo | Níquel                         |

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

- Etapa 1. Precisamos preparar os itens abaixo:

| Seeeduino V4.2 | Base Shield |  Grove - GSR|
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[Obtenha UM Agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtenha UM Agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtenha UM Agora](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- Etapa 2. Conecte o Grove-GSR ao **A0** no Base Shield.
- Etapa 3. Conecte o Base Shield ao Seeeduino-V4.2.
- Etapa 4. Conecte o Seeeduino-V4.2 ao PC usando um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Hardware_connection.jpg" /></div>

:::note
Se não tivermos um Base Shield, não se preocupe, o sensor pode ser conectado diretamente ao seu Arduino. Siga as tabelas abaixo para conectar ao Arduino.
:::

| Seeeduino |Grove-GSR Sensor |
|------------------|---------|
| GND              | Preto  |
| 5V               |  Vermelho   |
| NC               | Branco  |
| A0               | Amarelo |

#### Software

- Etapa 1. Copie o código para a IDE do Arduino e faça o upload.

```
const int GSR=A0;
int sensorValue=0;
int gsr_average=0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  long sum=0;
  for(int i=0;i<10;i++)           //Average the 10 measurements to remove the glitch
      {
      sensorValue=analogRead(GSR);
      sum += sensorValue;
      delay(5);
      }
   gsr_average = sum/10;
   Serial.println(gsr_average);
}

```

- Etapa 2. Não use o sensor GSR.
- Etapa 3. Clique em Tools-> Serial Plotter na IDE do Arduino.
- Etapa 4. Use a chave de fenda para ajustar o resistor até que a saída serial seja minimizada. A essa altura, os dados da porta serial são anotados como Serial_calibration.
- Etapa 5. Use o sensor GSR.
- Etapa 6. Veremos o gráfico abaixo. Respire profundamente e observe as tendências.  

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_Result.png" /></div><br />



**Resistência Humana** = ((1024 + 2 x Serial_Port_Reading) x 10000)/(Serial_calibration - Serial_Port_Reading)

- A unidade é ohm; 
- Serial_Port_Reading é o valor exibido na Porta Serial (entre 0~1023); 
- Serial_calibration vem da Etapa 4 (Use a chave de fenda para ajustar o resistor até que a saída serial seja minimizada. Os dados da porta serial nesse ponto são anotados como Serial_calibration).


### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Etapa 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor GSR|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[Obtenha UM Agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtenha UM Agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtenha UM Agora](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- **Etapa 2**. Conecte o Grove Base Hat ao Raspberry Pi.
- **Etapa 3**. Conecte o Grove - Sensor GSR à porta A0 do Base Hat.
- **Etapa 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/With_Hat.jpg" /></div>

:::note
Na etapa 3 você pode conectar o Grove - sensor GSR a **qualquer Porta Analógica**, mas certifique-se de alterar o comando com o número da porta correspondente.
:::

#### Software

- **Etapa 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Etapa 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Etapa 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
nano grove_gsr_sensor.py

```

Então você deve copiar o código a seguir neste arquivo e pressionar ++ctrl+x++ para sair e salvar.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveGSRSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def GSR(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGSRSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGSRSensor(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('GSR value: {0}'.format(sensor.GSR))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

- **Etapa 4**. Execute o comando abaixo para rodar o código

```

python grove_gsr_sensor.py 0

```

:::tip
Se tudo correr bem, você verá o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_gsr_sensor.py 0
Detecting...
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 383
GSR value: 256
GSR value: 314
GSR value: 348
GSR value: 361
GSR value: 368
GSR value: 371
^CTraceback (most recent call last):
  File "grove_gsr_sensor.py", line 69, in <module>
    main()
  File "grove_gsr_sensor.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

Você pode sair deste programa simplesmente pressionando `ctrl`+`c`.

:::note
Você pode ter notado que, para a porta analógica, a marcação de pinos na serigrafia é algo como **A1, A0**, porém no comando usamos os parâmetros **0** e **1**, exatamente como na porta digital. Portanto, certifique‑se de conectar o módulo na porta correta, caso contrário podem ocorrer conflitos de pinos.
:::

## Perguntas Frequentes (FAQ)

**P1: Qual é a unidade da saída?**

R1:  Medimos o sinal em tensão e o imprimimos na porta COM como (0~1023).

# Grove - GSR v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - GSR v1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Baixar PDF do Wiki](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Sensor_WiKi.pdf)
- **[Eagle]** [Grove - GSR v1.0 Arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip)
- **[Eagle]** [Grove - GSR v1.2 Arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip)
- **[Datasheet]** [LM324 datasheet](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Lm324.pdf)

## Projetos

**eMotion - Rumo a um Futuro Melhor**: Acreditamos que podemos usar sensores biométricos, a segurança da plataforma Helium e a força do Google Cloud para revelar possíveis estados de ansiedade.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed' width='350'></iframe>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe proporcionar diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

