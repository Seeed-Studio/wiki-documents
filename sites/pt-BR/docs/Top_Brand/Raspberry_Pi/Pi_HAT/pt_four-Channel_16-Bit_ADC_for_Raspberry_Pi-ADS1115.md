---
description: Conversor AD de 4 Canais e 16 Bits para Raspberry Pi (ADS1115)
title: Conversor AD de 4 Canais e 16 Bits para Raspberry Pi (ADS1115)
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115
sku: 103030279
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/
---


![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/main.jpg)

O conversor analógico‑digital (ADC) é um acessório comum para Raspberry Pi. Este é um ADC de 4 canais baseado no ADS1115 da Texas Instruments, que é um chip ADC de 16 bits de alta precisão e baixo consumo de energia. Nós o projetamos no formato compacto do Raspberry Pi Zero e integramos um conector analógico Grove para que você também possa usar módulos analógicos Grove com ele.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) | Inicial                                                                                               | Set 2018      |

## Características

- Baixo consumo de corrente:
  - Modo Contínuo: Apenas 150μA
  - Modo de Disparo Único: Desligamento Automático
- Ampla faixa de tensão de alimentação
- Multiplexador de entrada (MUX) que fornece duas entradas diferenciais ou quatro entradas single-ended.
- Comparador programável
- Referência interna de tensão de baixo desvio
- Oscilador interno
- PGA interno
- Taxa de dados programável: 8SPS a 860SPS
- Interface serial compatível com I2C
- Suporte a Raspberry Pi 3B/3B+/4

## Especificação

|Item|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Corrente de entrada analógica|100mA (momentânea)<br />10mA (contínua)|
|Temperatura de armazenamento|-60～150℃|
|Temperatura máxima de junção|150℃|
|Interface|I2C|
|Endereço I2C|0x48 (padrão)<br />0x49~0x4B (configurável)|
|Dimensões|C: 65mm L: 30mm A: 20mm|
|Peso|36,5g|
|Tamanho da embalagem|C: 140mm L: 78mm A: 27mm|
|Peso Bruto|37g|

Há 4 endereços I2C possíveis para este Grove, de 0x48 a 0x4B. O endereço I2C padrão é 0x48. Você pode alterar o endereço I2C fazendo alguma soldagem.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout1.png)

:::note
Se SDA (endereço correspondente 0x4A) for usado como endereço do dispositivo, mantenha a linha SDA em nível baixo por pelo menos 100 ns após a linha SCL ir para nível baixo para garantir que o dispositivo decodifique o endereço corretamente durante a comunicação I2C.
:::

## Aplicações típicas

- Instrumentação portátil
- Bens de consumo
- Monitoramento de bateria
- Medição de temperatura
- Automação industrial e controle de processos

## Visão Geral do Hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout.png)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Hardware

**Materiais necessários**

|Raspberry pi|4-Channel 16-Bit ADC for Raspberry Pi(ADS1115)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)|

### Software

Nesta seção, apresentaremos como instalar o driver e como habilitar o I2C.

**Habilitar I2C**
Como o I2C não vem ativado por padrão, precisamos configurá-lo manualmente.

- **Passo 1**. Ligue o Raspberry Pi.
- **Passo 2**. Abra o raspi-config digitando o seguinte comando no terminal.

```cpp

sudo raspi-config

```

- **Passo 3**. Use a seta para baixo até 5 interfacing Options e pressione "enter" para selecionar.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp1.png)

- **Passo 4**. Use a seta para baixo até P5 I2C e pressione "enter" para selecionar.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp2.png)

- **Passo 4**. Selecione "Yes" para habilitar.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp3.png)

- **Passo 5**. Selecione "Ok".

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp4.png)

- **Passo 6**. Selecione "Finish" para salvar as alterações.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp5.png)

**Instalação**

- Para verificar se o I2C está habilitado no Raspberry Pi.

Navegue até o arquivo `config.txt` executando o seguinte no terminal:

```sh
cd /boot
sudo nano config.txt
```

- Certifique-se de que haja uma linha declarando `dtparam=i2c_arm=on` no arquivo.

- A velocidade I2C padrão é 100 kHz. Você pode aumentá-la para 400 kHz adicionando a seguinte linha ao arquivo de configuração:

```sh
dtparam=i2c_arm_baudrate=400000
```

- Em seguida, para usar o ads1115-overlay, adicione o seguinte ao `config.txt`:

```sh
dtoverlay=ads1115
```

- Depois disso, você precisa fornecer parâmetros ao overlay para configurar o driver. Para habilitar todos os 4 canais do ADC em modo single-ended, adicione o seguinte:

```sh
dtparam=cha_enable
dtparam=chb_enable
dtparam=chc_enable
dtparam=chd_enable
```

- Salve o arquivo e reinicie o seu Raspberry Pi.

Se você reiniciar o sistema com essas alterações no `config.txt`, verá os seguintes módulos de kernel:

- Execute o seguinte para verificar os módulos de kernel:

```sh
lsmod | grep ads
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/1.png"/></div>

:::note
 Observe que o ADS1115 usa o mesmo kernel que o ADS1015.
:::

Podemos ver que o ADS1115 já está disponível e pode ser usado pelo Industrial IO.

- Navegue até a pasta Industrial IO:

```sh
cd /sys/bus/iio/devices/iio\:device0/
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/2.png"/></div>

- Agora você pode acessar facilmente estes arquivos de configuração de hardware:

```sh
cat in_voltage0-voltage1_raw
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/3.png"/></div>

Os canais 0 e 1 usam escala de 0,1875mV. A diferença de potencial medida é **17670 * 0,1875mv = 3,3V**

Esse método de adicionar kernel permite que você desenvolva seu próprio shell ou script em python usando o ADS1115!

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip)

- **[Zip]** [Biblioteca de Software do 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)](https://github.com/Seeed-Studio/pi-hats/archive/master.zip)

- **[PDF]** [Datasheet ADS1115](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/ADS1115.pdf)

## Suporte Técnico & Discussão de Produto

 .

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
