---
description: Grove - IMU 9DOF(lcm20600+AK09918)
title: Grove - IMU 9DOF(lcm20600+AK09918)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-IMU_9DOF-lcm20600+AK09918
sku: 101020585
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-IMU_9DOF-lcm20600+AK09918/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg" alt="pir" width={600} height="auto" /></p>

 O Grove - IMU 9DOF (lcm20600+AK09918) é uma unidade de medição inercial de 9 graus de liberdade [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (Inertial measurement unit) que combina giroscópio, acelerômetro e bússola eletrônica. Usamos dois chips LCM20600+AK09918 para implementar essas 3 funções.

 O LCM20600 é um dispositivo MotionTracking de 6 eixos que combina um giroscópio de 3 eixos e um acelerômetro de 3 eixos. O [Giroscópio](https://en.wikipedia.org/wiki/Gyroscope) é um dispositivo usado para medir ou manter a orientação e a velocidade angular; normalmente, usamos para medir rotação e torção. O [Acelerômetro](https://en.wikipedia.org/wiki/Accelerometer) é um dispositivo que mede a aceleração própria.

 O AK09918 é um CI de [bússola eletrônica](https://en.wikipedia.org/wiki/Magnetometer) de 3 eixos com tecnologia de sensor Hall de alta sensibilidade. Usamos uma bússola eletrônica para medir a força magnética, o que pode nos fornecer informações de direção.

 Como o nome sugere, basta usar este único pequeno módulo e você pode medir 9 graus de liberdade: rotação angular nos eixos x/y/z, aceleração nos eixos x/y/z e força magnética nos eixos x/y/z.

 Que módulo incrível! Use este módulo para construir seu próprio sistema de movimento e orientação😄

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html)

## Recursos

- Giroscópio de 3 eixos com FSR programável de ±250 dps, ±500 dps, ±1000 dps e ±2000 dps
- Acelerômetro de 3 eixos com FSR programável de ±2g, ±4g, ±8g e ±16g
- Bússola eletrônica de 3 eixos com sensibilidade de 0,15 μT/LSB (típ.)
- Interrupções programáveis pelo usuário
- Resolução de ADC de 16 bits e filtros programáveis para medições de aceleração
- Resolução de ADC de 16 bits para medições magnéticas
- Buffer FIFO de 1 KB permite que o processador de aplicações leia os dados em rajadas (LCM20600)
- Sensor de temperatura incorporado
- Função de monitor de saturação do sensor magnético
- Oscilador integrado para fonte de clock interna

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|3.3V / 5V|
|Temperatura de operação|-30°C a +85°C|
|Faixa de escala completa do giroscópio|±250 dps, ±500 dps, ±1000 dps, ±2000 dps|
|Fator de escala de sensibilidade do giroscópio|131 LSB/(dps)@±250 dps 65.5 LSB/(dps)@±500 dps 32.8 LSB/(dps)@±1000 dps 16.4 LSB/(dps)@±2000 dps|
|Faixa de escala completa do acelerômetro|±2g, ±4g, ±8g, ±16g|
|Fator de escala de sensibilidade do acelerômetro|16384 LSB/g@±2g / 8192 LSB/g@±4g / 4096 LSB/g@±8g  /  2048 LSB/g@±16g|
|Faixa de medição do sensor magnético|±4912μT (típico)|
|Sensibilidade do sensor magnético|0.15μT (típico)|
|Interface|I^2^C|
|Endereço I^2^C|**LCM20600** /  0x69(padrão) /  0x68(opcional) /  **AK09918**  /  0x0C|

## Aplicações

- Smartphones e tablets
- Sensores vestíveis

## Visão geral do hardware

### Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg" alt="pir" width={600} height="auto" /></p>

:::danger
        O endereço I2C padrão do LCM20600 é 0x69, você pode alterá-lo para 0x68. O pad central está conectado ao fio de endereço; você pode alterar o endereço I2C cortando o fio e refazendo a solda. Para a sua segurança e a dos outros, tenha cuidado com a faca ou com o ferro de solda que você possa usar.
:::

### Esquemático

**Alimentação**
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg" alt="pir" width={600} height="auto" /></p>

Como a faixa de tensão de operação do LCM20600 é de 1,71V a 3,45V, e a faixa de tensão de operação do AK09918 é de 1,65V a 1,95V, usamos um chip de conversão de energia **XC6206P182MR** para fornecer 1,8V estáveis para ambos os chips.

**Circuito de conversor de nível bidirecional**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferente de um barramento I^2^C. O barramento I<sup>2</sup>C dos dois chips usa 1,8V; se o barramento I<sup>2</sup>C do Arduino usar 5V ou 3,3V, este circuito será necessário. No esquemático acima, **Q1** e **Q2** são MOSFETs de canal N [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf), que atuam como uma chave bidirecional. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas compatíveis

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas bibliotecas de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira Agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira Agora</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Adquira Agora</a>|

:::note
    **1** Conecte o cabo USB cuidadosamente, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - IMU 9DOF (lcm20600+AK09918) à porta **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC via cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove - IMU 9DOF       |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove - IMU 9DOF (lcm20600+AK09918)](https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo, você pode abri-lo das seguintes três maneiras：
    1. Abra-o diretamente na IDE do Arduino pelo caminho: **File --> Examples --> Grove IMU 9DOF ICM20600 AK09918 --> compass**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg" alt="pir" width={600} height="auto" /></p>

    2. Abra-o no seu computador clicando em **compass.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Seeed_ICM20600_AK09918-master\examples\compass**, onde **XXXX** é o local em que você instalou a IDE do Arduino.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

    3. Ou você pode simplesmente clicar no ícone
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>no canto superior direito do bloco de código para copiar o seguinte código para um novo sketch na IDE do Arduino.

```cpp
#include "AK09918.h"
#include "ICM20600.h"
#include <Wire.h>

AK09918_err_type_t err;
int32_t x, y, z;
AK09918 ak09918;
ICM20600 icm20600(true);
int16_t acc_x, acc_y, acc_z;
int32_t offset_x, offset_y, offset_z;
double roll, pitch;
// Find the magnetic declination at your location
// http://www.magnetic-declination.com/
double declination_shenzhen = -2.2;

void setup()
{
    // join I2C bus (I2Cdev library doesn't do this automatically)
    Wire.begin();

    err = ak09918.initialize();
    icm20600.initialize();
    ak09918.switchMode(AK09918_POWER_DOWN);
    ak09918.switchMode(AK09918_CONTINUOUS_100HZ);
    Serial.begin(9600);

    err = ak09918.isDataReady();
    while (err != AK09918_ERR_OK) 
    {
        Serial.println("Waiting Sensor");
        delay(100);
        err = ak09918.isDataReady();
    }

    Serial.println("Start figure-8 calibration after 2 seconds.");
    delay(2000);
    calibrate(10000, &offset_x, &offset_y, &offset_z);
    Serial.println("");
}

void loop()
{
    // get acceleration
    acc_x = icm20600.getAccelerationX();
    acc_y = icm20600.getAccelerationY();
    acc_z = icm20600.getAccelerationZ();

    Serial.print("A:  ");
    Serial.print(acc_x);
    Serial.print(",  ");
    Serial.print(acc_y);
    Serial.print(",  ");
    Serial.print(acc_z);
    Serial.println(" mg");

    Serial.print("G:  ");
    Serial.print(icm20600.getGyroscopeX());
    Serial.print(",  ");
    Serial.print(icm20600.getGyroscopeY());
    Serial.print(",  ");
    Serial.print(icm20600.getGyroscopeZ());
    Serial.println(" dps");

    ak09918.getData(&x, &y, &z);
    x = x - offset_x;
    y = y - offset_y;
    z = z - offset_z;

    Serial.print("M:  ");
    Serial.print(x);
    Serial.print(",  ");
    Serial.print(y);
    Serial.print(",  ");
    Serial.print(z);
    Serial.println(" uT");

    // roll/pitch in radian
    roll = atan2((float)acc_y, (float)acc_z);
    pitch = atan2(-(float)acc_x, sqrt((float)acc_y*acc_y+(float)acc_z*acc_z));
    Serial.print("Roll: ");
    Serial.println(roll*57.3);
    Serial.print("Pitch: ");
    Serial.println(pitch*57.3);

    double Xheading = x * cos(pitch) + y * sin(roll) * sin(pitch) + z * cos(roll) * sin(pitch);
    double Yheading = y * cos(roll) - z * sin(pitch);


    double heading = 180 + 57.3*atan2(Yheading, Xheading) + declination_shenzhen;

    Serial.print("Heading: ");
    Serial.println(heading);
    Serial.println("--------------------------------");

    delay(500);

}

void calibrate(uint32_t timeout, int32_t *offsetx, int32_t *offsety, int32_t*offsetz)
{
  int32_t value_x_min = 0;
  int32_t value_x_max = 0;
  int32_t value_y_min = 0;
  int32_t value_y_max = 0;
  int32_t value_z_min = 0;
  int32_t value_z_max = 0;
  uint32_t timeStart = 0;

  ak09918.getData(&x, &y, &z);

  value_x_min = x;
  value_x_max = x;
  value_y_min = y;
  value_y_max = y;
  value_z_min = z;
  value_z_max = z;
  delay(100);

  timeStart = millis();

  while((millis() - timeStart) < timeout)
  {
    ak09918.getData(&x, &y, &z);

    /* Update x-Axis max/min value */
    if(value_x_min > x)
    {
      value_x_min = x;
      // Serial.print("Update value_x_min: ");
      // Serial.println(value_x_min);

    } 
    else if(value_x_max < x)
    {
      value_x_max = x;
      // Serial.print("update value_x_max: ");
      // Serial.println(value_x_max);
    }

    /* Update y-Axis max/min value */
    if(value_y_min > y)
    {
      value_y_min = y;
      // Serial.print("Update value_y_min: ");
      // Serial.println(value_y_min);

    } 
    else if(value_y_max < y)
    {
      value_y_max = y;
      // Serial.print("update value_y_max: ");
      // Serial.println(value_y_max);
    }

    /* Update z-Axis max/min value */
    if(value_z_min > z)
    {
      value_z_min = z;
      // Serial.print("Update value_z_min: ");
      // Serial.println(value_z_min);

    } 
    else if(value_z_max < z)
    {
      value_z_max = z;
      // Serial.print("update value_z_max: ");
      // Serial.println(value_z_max);
    }

    Serial.print(".");
    delay(100);

  }

  *offsetx = value_x_min + (value_x_max - value_x_min)/2;
  *offsety = value_y_min + (value_y_max - value_y_min)/2;
  *offsetz = value_z_min + (value_z_max - value_z_min)/2;
}
```

:::note
        Existem 3 demos na biblioteca:  
        **test_6axis**
        >Este exemplo mostra como obter dados de giroscópio e aceleração do ICM20600.  

        **test_magnet**  
        >Este exemplo mostra como obter dados magnéticos do AK09918.  

        **compass**  
        >Este exemplo obtém dados magnéticos e de aceleração, para calcular pitch e roll, e criar uma aplicação de bússola.
:::

- **Passo 4.** Faça o upload do demo. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de baud para **9600**.

:::success
     Se tudo correr bem, quando você abrir o Serial Monitor, o aviso aparecerá -- *Start figure-8 calibration after 2 seconds.*  O que significa que, para calibrar este módulo, você deve movê-lo e desenhar a trajetória do número 8 no ar. Quando "......." aparecer, você pode iniciar a calibração.
:::

```cpp
Start figure-8 calibration after 2 seconds.
.......................................................................
A:  -362,  -205,  738 mg
G:  -45,  12,  -1 dps
M:  -6,  -23,  -33 uT
Roll: -15.53
Pitch: 25.30
Heading: 23.99
--------------------------------
A:  -269,  583,  61 mg
G:  102,  377,  -2 dps
M:  18,  -21,  -18 uT
Roll: 84.03
Pitch: 24.65
Heading: 215.58
--------------------------------
A:  -495,  229,  37 mg
G:  -43,  -231,  201 dps
M:  7,  -30,  6 uT
Roll: 80.83
Pitch: 64.90
Heading: 21.76
--------------------------------

```

:::note
        Como você pode ver, o resultado do exemplo da bússola inclui três parâmetros: roll, pitch e Heading. Estes são a terminologia de **[Euler angles](https://en.wikipedia.org/wiki/Euler_angles)** (clique para verificar mais informações).
:::

#### Fuction table

|Function|Description|
|---|---|
|**ICM20600**||
|initialize()|Inicializa o chip LCM20600, por padrão: a faixa de medição do giroscópio é ±2000 dps / a faixa de medição do acelerômetro é ±16g|
|setGyroScaleRange(gyro_scale_type_t range)|Após a inicialização, você pode definir a faixa do giroscópio para atender às suas próprias necessidades, a lista de parâmetros gyro_scale_type_t range: **RANGE_250_DPS** / **RANGE_500_DPS** / **RANGE_1K_DPS** / **RANGE_2K_DPS**  / por exemplo /  **icm20600.setGyroScaleRange(RANGE_1K_DPS);** / esta linha de código irá alterar a faixa de medição do giroscópio para ±1000dps|
|setAccScaleRange(acc_scale_type_t range)|Após a inicialização, você pode definir a faixa do acelerômetro para atender às suas próprias necessidades, a lista de parâmetros acc_scale_type_t range: **RANGE_2G** / **RANGE_4G** / **RANGE_8G** / **RANGE_16G**  / por exemplo /  **icm20600.setAccScaleRange(RANGE_8G);** / esta linha de código irá alterar a faixa de medição do acelerômetro para ±8g|
|getGyroscope(int16_t*x, int16_t* y, int16_t* z))|Você pode usar esta função para obter os dados X/Y/Z de 3 eixos do giroscópio ao mesmo tempo, e a unidade dos dados é **dps**|
|getGyroscopeX(void)  getGyroscopeY(void)  getGyroscopeZ(void)|Ou você pode obter os dados X/Y/Z de 3 eixos do giroscópio separadamente usando essas três funções, e a unidade dos dados é **dps** |
|getRawGyroscopeX(void)  getRawGyroscopeX(void)  getRawGyroscopeX(void)|Essas três funções obtêm os dados brutos diretamente do registrador do ICM20600 sem converter a unidade de dados para **dps**|
|getAcceleration(int16_t*x, int16_t* y, int16_t* z)|Você pode usar esta função para obter a aceleração X/Y/Z de 3 eixos ao mesmo tempo, e a unidade dos dados é **mg**|
|getAccelerationX(void)  getAccelerationY(void)  getAccelerationZ(void)|Ou você pode obter a aceleração X/Y/Z de 3 eixos separadamente usando essas três funções, e a unidade dos dados é **mg** |
|getRawAccelerationX(void)  getRawAccelerationY(void)  getRawAccelerationZ(void)|Essas três funções obtêm os dados brutos diretamente do registrador do ICM20600 sem converter a unidade de dados para **mg**|
|getTemperature(void)|Você pode usar esta função para obter a temperatura|
|**AK09918**||
|getData(int32_t *axis_x, int32_t*axis_y, int32_t *axis_z)  |Você pode usar esta função para obter a força magnética dos 3 eixos.|

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - IMU 9DOF (lcm20600+AK09918)](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip)

- **[Zip]** [Biblioteca Seeed ICM20600+AK09918](https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918/archive/master.zip)

- **[PDF]** [Folha de dados do ICM-20600](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/ICM-20600.pdf)

- **[PDF]** [Folha de dados do AK09918](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/AK09918.pdf)

- **[PDF]** [Folha de dados do CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demonstrações simples, que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
