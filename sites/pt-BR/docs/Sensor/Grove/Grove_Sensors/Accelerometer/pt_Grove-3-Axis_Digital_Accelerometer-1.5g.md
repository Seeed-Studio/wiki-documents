---
description: Grove - Acelerômetro Digital de 3 Eixos (±1,5g)
title: Grove - Acelerômetro Digital de 3 Eixos (±1,5g)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Accelerometer-1.5g
sku: 101020039
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer-1.5g/
---

<div>
  <table>
    <colgroup>
      <col width="50%" />
      <col width="50%" />
    </colgroup>
    <tbody>
      <tr className="odd">
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />
            </div>
          </div></td>
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_v1.3.jpg" />
            </div>
          </div></td>
      </tr>
      <tr className="even">
        <td><div style={{}}>
            Grove - Acelerômetro Digital de 3 Eixos v1.2
          </div></td>
        <td><div style={{}}>
            Grove - Acelerômetro Digital de 3 Eixos v1.2b
          </div></td>
      </tr>
    </tbody>
  </table>
  O Acelerômetro Digital de 3 Eixos é a parte-chave em projetos como detecção de orientação, detecção de gestos e detecção de movimento. Este Acelerômetro Digital de 3 Eixos (±1,5g) é baseado no módulo de baixo consumo de energia da Freescale, MMA7660FC. Ele apresenta até 10.000g de alta suportabilidade a choques e taxa configurável de amostras por segundo. Para aplicações gerais que não exigem uma faixa de medição muito grande, esta é uma ótima escolha, pois é durável, economiza energia e é econômica.
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html)

Specifications
--------------

- Tensão de operação: 3,0 - 5,5V
- Corrente no modo Off: 0,4μA
- Corrente no modo Standby: 2μA
- Corrente no modo ativo: 47 μA em 1 ODR
- Faixa de teste: ±1,5g
- Sensibilidade: 21LSB/g
- Biblioteca compatível com Suli

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Platforms Supported
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Demonstration
-------------

### Com Arduino

Aqui vamos mostrar como obter dados brutos e dados medidos em "g" a partir deste sensor.

Conecte este módulo à porta I2C do Grove - Base Shield via um cabo Grove.

<div class="admonition note">
<p class="admonition-title">Note</p>
Se você quiser ativar a função de interrupção deste módulo, precisa conectar a ilha de solda INT que deixamos exposta na placa a um pino do Arduino que seja capaz de rotina de serviço de interrupção.
</div>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg" alt="pir" width={600} height="auto" /></p>

Instale a biblioteca que fornecemos na seção de recursos.

Abra o código diretamente pelo caminho: File -> Example ->DigitalAccelerometer_MMA7660FC ->MMA7660FC_Demo.

Neste programa, as informações de aceleração são enviadas do sensor para o Seeeduino via barramento I2C e então o Seeeduino as imprime no monitor serial.
Abra o monitor serial para verificar o resultado.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg" alt="pir" width={600} height="auto" /></p>

As saídas deste sensor consistem em duas partes: dados brutos e informações de aceleração de 3 eixos convertidas na unidade de gravidade, "g".

### Com Raspberry Pi

1. Você deve ter um Raspberry Pi e um GrovePi ou GrovePi+.

2. Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](/pt-br/GrovePi_Plus/).

3. Conexão

- Conecte o sensor ao soquete grovepi i2c-x(1~3) usando um cabo Grove.

4. Navegue até o diretório de demonstrações:

       cd yourpath/GrovePi/Software/Python/

- Para ver o código

```
    nano grove_i2c_accelerometer.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Accelerometer (+/- 1.5g) to any I2C port eg. I2C-1
    # Can be found at I2C address 0x4c
    # SCL,SDA,VCC,GND

    while True:
        try:
            print grovepi.acc_xyz()
            time.sleep(.5)

        except IOError:
            print "Error"
```

5. Execute a demonstração.

```
    sudo python grove_i2c_accelerometer.py
```

Reference
---------

Abaixo estão duas figuras que ajudam você a entender o significado físico do resultado.

A primeira figura mostra a direção de cada eixo:
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg" alt="pir" width={600} height="auto" /></p>

A segunda figura fornece alguns exemplos:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Datasheet do MMA7660FC](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/MMA7660FC.pdf)
- [Arquivo Eagle do Grove - Acelerômetro Digital de 3 Eixos](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip)
- [Repositório GitHub para o Acelerômetro Digital de 3 Eixos (±1,5g)](https://github.com/Seeed-Studio/Accelerometer_MMA7660)

## Projeto

**Tilt Activated Spinning Fan Light Stick** Bastão de luz portátil com LEDs coloridos que reage ao seu movimento de agitação. Com ventilador e alarme extras.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/chuartdo/tilt-activated-spinning-fan-light-stick-e05cec/embed" width={350} />

**Lean Green RC Sailing Machine**
Um dispositivo conectado à Internet que controla servomotores e envia atualizações de sensores (GPS/giroscópio/acelerômetro/bússola) em tempo real por meio de um link de celular GSM.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/anemoi/lean-green-rc-sailing-machine-2cdde5/embed" width={350} />

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±1.5g) -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
