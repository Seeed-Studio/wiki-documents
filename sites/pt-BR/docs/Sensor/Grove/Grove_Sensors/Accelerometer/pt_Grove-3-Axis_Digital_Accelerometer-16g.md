---
description: Grove - Acelerômetro Digital de 3 Eixos (±16g)
title: Grove - Acelerômetro Digital de 3 Eixos (±16g)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Accelerometer-16g
sku: 101020054
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer-16g/
---

---
<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove-3-Axis_16g_v1.3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove-3-Axis_16g_v1.3.jpg" alt="pir" width={600} height="auto" /></p>


O Acelerômetro Digital de 3 Eixos é a parte-chave em projetos como detecção de orientação, detecção de gestos e detecção de movimento. Este Acelerômetro Digital de 3 Eixos (±16g) é baseado no CI de baixo consumo de energia ADXL345. Ele apresenta até 10.000g de alta capacidade de suportar choques e taxa configurável de amostras por segundo. Para aplicações gerais que não exigem uma faixa de medição muito grande, esta é uma ótima escolha porque é durável, economiza energia e é econômica.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)



## Especificações
---
- Tensão de operação: 3,0 - 5,5 V
- Faixa de teste: ±16
- Sensibilidade: 3,9 mg / LSB
- Corrente em standby: 0,1 μA (em modo de espera Vcc = 2,5 V (típico))
- 10000 g de alta capacidade de suportar choques
- ECOPACK® compatível com RoHS e “Verde”
- Biblioteca compatível com Suli

:::tip
    - Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Demonstração
---
**Com Arduino**

Cada acelerômetro foi testado individualmente antes de ser enviado para você. Mas, em casos raros, talvez você precise redefinir o deslocamento de zero por conta própria.
Abaixo mostramos como ler os dados brutos e obter dados na unidade de g, também conhecida como força g, deste acelerômetro.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove_-_3-Axis_Digital_Accelerometer_ADXL345_connect_photo.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove_-_3-Axis_Digital_Accelerometer_ADXL345_connect_photo.JPG" alt="pir" width={600} height="auto" /></p>

- **Passo 1:** Conecte-o à porta I2C do seu Grove - Base Shield.
- **Passo 2:** Baixe o arquivo .zip da [Biblioteca Digital Accelerometer(±16g)](https://github.com/Seeed-Studio/Accelerometer_ADXL345) e descompacte-o em arduino-1.0\libraries na pasta de instalação do Arduino. Se você não sabe como instalar uma biblioteca para Arduino, siga o tutorial [How to install an Arduino library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/)
- **Passo 3：** Se você já tiver a biblioteca instalada, abra o código de demonstração diretamente pelo caminho:
** File(文件) -> Example(示例) ->DigitalAccelerometer_ADXL345->ADXL345_demo_code. **
- **Passo 4：** Faça o upload do código e abra o monitor serial (geralmente ele fica no canto superior direito). Consulte o tutorial [Upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/) se você não souber como fazer o upload.
- **Passo 5：** O resultado será mostrado no formato da imagem abaixo, agite o Grove e você verá os números mudando.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Digital_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Digital_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

As saídas deste sensor consistem em duas partes: dados brutos e informação de aceleração de 3 eixos convertida na unidade de gravidade, "g".

### Brincar com o Codecraft

#### Hardware

**Passo 1.** Use um cabo Grove para conectar o Grove - Acelerômetro Digital de 3 Eixos (±16g) à porta I2C do Seeeduino. Se você estiver usando um Arduino, aproveite um Base Shield.

**Passo 2.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/img/cc_3_Axis_Digital_Accelerometer.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/img/cc_3_Axis_Digital_Accelerometer.png" alt="pir" width={600} height="auto" /></p>

Carregue o programa no seu Arduino/Seeeduino.

:::success
    Quando o código terminar de ser carregado, você verá a aceleração exibida no Serial Monitor. 
:::
**Com Raspberry Pi**

- **Passo 1:** Você deve ter um Raspberry Pi e um GrovePi ou GrovePi+.

- **Passo 2:** Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](https://wiki.seeedstudio.com/pt-br/GrovePi_Plus/#Introducing_the_GrovePi.2B).

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9-create-tab.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9-create-tab.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9_newfile.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9_newfile.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 3:** Conexão
   - Conecte o sensor ao soquete grovepi i2c-x(1~3) usando um cabo Grove.

- **Passo 4:** Navegue até o diretório de demonstrações:

```python
cd yourpath/GrovePi/Software/Python/
```
Para ver o código

```
  nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```python
import smbus
from time import sleep

# select the correct i2c bus for this revision of Raspberry Pi
revision = ([l[12:-1] for l in open('/proc/cpuinfo','r').readlines() if l[:8]=="Revision"]+['0000'])[0]
bus = smbus.SMBus(1 if int(revision, 16) >= 4 else 0)

# ADXL345 constants
EARTH_GRAVITY_MS2   = 9.80665
SCALE_MULTIPLIER    = 0.004

DATA_FORMAT         = 0x31
BW_RATE             = 0x2C
POWER_CTL           = 0x2D

BW_RATE_1600HZ      = 0x0F
BW_RATE_800HZ       = 0x0E
BW_RATE_400HZ       = 0x0D
BW_RATE_200HZ       = 0x0C
BW_RATE_100HZ       = 0x0B
BW_RATE_50HZ        = 0x0A
BW_RATE_25HZ        = 0x09

RANGE_2G            = 0x00
RANGE_4G            = 0x01
RANGE_8G            = 0x02
RANGE_16G           = 0x03

MEASURE             = 0x08
AXES_DATA           = 0x32

class ADXL345:

    address = None

    def __init__(self, address = 0x53):
        self.address = address
        self.setBandwidthRate(BW_RATE_100HZ)
        self.setRange(RANGE_2G)
        self.enableMeasurement()

    def enableMeasurement(self):
        bus.write_byte_data(self.address, POWER_CTL, MEASURE)

    def setBandwidthRate(self, rate_flag):
        bus.write_byte_data(self.address, BW_RATE, rate_flag)

    # set the measurement range for 10-bit readings
    def setRange(self, range_flag):
        value = bus.read_byte_data(self.address, DATA_FORMAT)

        value &= ~0x0F;
        value |= range_flag;
        value |= 0x08;

        bus.write_byte_data(self.address, DATA_FORMAT, value)

    # returns the current reading from the sensor for each axis
    #
    # parameter gforce:
    #    False (default): result is returned in m/s^2
    #    True           : result is returned in gs
    def getAxes(self, gforce = False):
        bytes = bus.read_i2c_block_data(self.address, AXES_DATA, 6)

        x = bytes[0] | (bytes[1] << 8)
        if(x & (1 << 16 - 1)):
            x = x - (1<<16)

        y = bytes[2] | (bytes[3] << 8)
        if(y & (1 << 16 - 1)):
            y = y - (1<<16)

        z = bytes[4] | (bytes[5] << 8)
        if(z & (1 << 16 - 1)):
            z = z - (1<<16)

        x = x * SCALE_MULTIPLIER
        y = y * SCALE_MULTIPLIER
        z = z * SCALE_MULTIPLIER

        if gforce == False:
            x = x * EARTH_GRAVITY_MS2
            y = y * EARTH_GRAVITY_MS2
            z = z * EARTH_GRAVITY_MS2

        x = round(x, 4)
        y = round(y, 4)
        z = round(z, 4)

        return {"x": x, "y": y, "z": z}

if __name__ == "__main__":
    # if run directly we'll just create an instance of the class and output
    # the current readings
    adxl345 = ADXL345()

    axes = adxl345.getAxes(True)
    print "ADXL345 on address 0x%x:" % (adxl345.address)
    print "   x = %.3fG" % ( axes['x'] )
    print "   y = %.3fG" % ( axes['y'] )
    print "   z = %.3fG" % ( axes['z'] )
```

5. Execute a demonstração.

```
    sudo python grove_tilt_switch.py
```

**Com Beaglebone Green**

Para começar a editar programas que estão no BBG, você pode usar o Cloud9 IDE.
Como um exercício simples para se familiarizar com o Cloud9 IDE, criar uma aplicação simples para piscar um dos 4 LEDs programáveis pelo usuário no BeagleBone é um bom começo.

Se esta é a sua primeira vez usando o Cloud9 IDE, siga este link.

- Passo 1: Defina o soquete Grove - UART como um soquete Grove - GPIO, basta seguir este link.

- Passo 2: Clique no "+" no canto superior direito para criar um novo arquivo.

- Passo 3: Copie e cole o seguinte código na nova aba.

```python
import smbus
import time

bus = smbus.SMBus(1)

# ADXL345 device address
ADXL345_DEVICE = 0x53

# ADXL345 constants
EARTH_GRAVITY_MS2   = 9.80665
SCALE_MULTIPLIER    = 0.004

DATA_FORMAT         = 0x31
BW_RATE             = 0x2C
POWER_CTL           = 0x2D

BW_RATE_1600HZ      = 0x0F
BW_RATE_800HZ       = 0x0E
BW_RATE_400HZ       = 0x0D
BW_RATE_200HZ       = 0x0C
BW_RATE_100HZ       = 0x0B
BW_RATE_50HZ        = 0x0A
BW_RATE_25HZ        = 0x09

RANGE_2G            = 0x00
RANGE_4G            = 0x01
RANGE_8G            = 0x02
RANGE_16G           = 0x03

MEASURE             = 0x08
AXES_DATA           = 0x32

class ADXL345:

    address = None

    def __init__(self, address = ADXL345_DEVICE):
        self.address = address
        self.setBandwidthRate(BW_RATE_100HZ)
        self.setRange(RANGE_2G)
        self.enableMeasurement()

    def enableMeasurement(self):
        bus.write_byte_data(self.address, POWER_CTL, MEASURE)

    def setBandwidthRate(self, rate_flag):
        bus.write_byte_data(self.address, BW_RATE, rate_flag)

    # set the measurement range for 10-bit readings
    def setRange(self, range_flag):
        value = bus.read_byte_data(self.address, DATA_FORMAT)

        value &= ~0x0F;
        value |= range_flag;
        value |= 0x08;

        bus.write_byte_data(self.address, DATA_FORMAT, value)

    # returns the current reading from the sensor for each axis
    #
    # parameter gforce:
    #    False (default): result is returned in m/s^2
    #    True           : result is returned in gs
    def getAxes(self, gforce = False):
        bytes = bus.read_i2c_block_data(self.address, AXES_DATA, 6)

        x = bytes[0] | (bytes[1] << 8)
        if(x & (1 << 16 - 1)):
            x = x - (1<<16)

        y = bytes[2] | (bytes[3] << 8)
        if(y & (1 << 16 - 1)):
            y = y - (1<<16)

        z = bytes[4] | (bytes[5] << 8)
        if(z & (1 << 16 - 1)):
            z = z - (1<<16)

        x = x * SCALE_MULTIPLIER
        y = y * SCALE_MULTIPLIER
        z = z * SCALE_MULTIPLIER

        if gforce == False:
            x = x * EARTH_GRAVITY_MS2
            y = y * EARTH_GRAVITY_MS2
            z = z * EARTH_GRAVITY_MS2

        x = round(x, 4)
        y = round(y, 4)
        z = round(z, 4)

        return {"x": x, "y": y, "z": z}

if __name__ == "__main__":
    # if run directly we'll just create an instance of the class and output
    # the current readings
    adxl345 = ADXL345()

    while True:
        axes = adxl345.getAxes(True)
        print "ADXL345 on address 0x%x:" % (adxl345.address)
        print "   x = %.3fG" % ( axes['x'] )
        print "   y = %.3fG" % ( axes['y'] )
        print "   z = %.3fG" % ( axes['z'] )
        time.sleep(2)
```

- Passo 4: Salve o arquivo clicando no ícone de disco com a extensão .py.

- Passo 5: Conecte o Grove - 3-Axis Digital Accelerometer(±16g) ao soquete Grove I2C no BBG.

- Passo 6: Execute o código. Você verá que o terminal exibe informações de gravidade a cada 2 segundos.


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/202000067_PCBA-Grove-3-Axis-Digital-Accelerometer=16g-v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Arquivo Eagle.zip](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/202000067_PCBA-Grove%203%20Axis%20Digital%20Accelerometer%C2%B116g%20v1.2.zip)
- [Biblioteca compatível com Suli](https://github.com/Seeed-Studio/ACC_Adxl345_Suli)
- [Folha de dados ADXL345.pdf](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/res/ADXL345_datasheet.pdf)
- [Repositório do GitHub para 3-Axis Digital Accelerometer(±16g)](https://github.com/Seeed-Studio/Accelerometer_ADXL345)
- [Grove - 3-Axis Digital Accelerometer(±16g)](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/DigitalAccelerometer_ADXL345.zip)
- [Arquivo CDC do Codecraft](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/res/Grove_3_Axis_Digital_Acceleromete_CDC_File.zip)

## Projetos

**Grove - Introdução ao 3-Axis Digital Accelerometer**: Como usar um acelerômetro digital de 3 eixos.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed' width='350'></iframe>


## Suporte Técnico e Discussão de Produtos
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
