---
title: Grove - I2C Motor Driver V1.3
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Motor_Driver_V1.3/
slug: /Grove-I2C_Motor_Driver_V1.3
sku: 105020001
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-I2C_Motor_Driver_V1.3/
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New.jpg)

O Grove - I2C Motor Driver V1.3 (versão mais recente) pode controlar diretamente motor de passo ou motor DC. Seu coração é um chip driver em ponte H de canal duplo (L298N) que pode lidar com corrente de até 2A por canal, controlado por um Atmel ATmega8L que gerencia a comunicação I2C com plataformas como Arduino. Ambos os motores podem ser acionados simultaneamente enquanto configurados com velocidades e direções diferentes. Ele pode alimentar dois motores DC com escovas ou um motor de passo bifásico de 4 fios. Requer uma fonte de alimentação de 6V a 15V para alimentar o motor e possui um regulador de tensão de 5V onboard que pode alimentar o barramento I2C e o Arduino (selecionável por jumper). Todas as linhas do driver são protegidas por diodos contra back-EMF.

Em contraste com o [Grove - I2C motor driver V1.2](https://wiki.seeedstudio.com/pt-br/Grove-I2C_Motor_Driver_V1.2/), o V1.3 permite aos usuários controlar o motor de passo com mais facilidade. Você não precisa mais controlar os steppers o tempo todo; basta enviar um comando para o I2C motor driver V1.3 para acionar um motor de passo, e ele agirá conforme seu comando, o que economizará recursos do Arduino e simplificará seu código.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)

## Versão

| Revisão | Descrições                                     | Lançamento     |
|----------|-------------------------------------------------|----------------|
| v1.0     | Lançamento público inicial                      | 17 de maio, 2012 |
| v1.2     | Modificar o endereço I2C definido por hardware  | 2 de julho, 2012 |
| v1.3     | Modificar o firmware para suportar Stepper off-line | 18 de fevereiro, 2013 |

## Recursos

- Compatível com Grove
- Interface I2C
- Velocidade e direção de rotação do motor ajustáveis
- Endereço escravo alterável por hardware

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr>
<th scope="row">
Tensão de trabalho
</th>
<td>
6
</td>
<td align="center" >
-
</td>
<td>
15
</td>
<td>
VDC
</td>
</tr>
<tr>
<th scope="row">
Corrente máxima de saída por canal
</th>
<td colspan="3" align="center">
0,5
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
Corrente total máxima
</th>
<td colspan="3" align="center" >
1,0
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
Tensão de entrada/saída no barramento I2C
</th>
<td colspan="3" align="center" >
5
</td>
<td>
V
</td>
</tr>
<tr>
<th scope="row">
Protocolo de comunicação
</th>
<td colspan="3" align="center" >
I2C
</td>
<td>
/
</td>
</tr>
</table>

:::note
    Se você quiser usar vários dispositivos I2C, consulte o [Software I2C](https://wiki.seeedstudio.com/pt-br/Arduino_Software_I2C_user_guide/).
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Visão Geral do Hardware

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-1.jpg)

**CI 78M05:** Regulador de tensão de 5V

**CI L298:** Driver de ponte completa dupla

**CI ATmega8:** Controla a rotação do motor.

<div class="admonition note">
<p class="admonition-title">Note</p>
A tensão de entrada nos terminais de parafuso é regulada para 5V e conectada ao I2C +5V através de um jumper (J4). Remova o jumper se forem usados simultaneamente alimentação externa pelos terminais de parafuso e alimentação pelo conector I2C. Use o jumper se os 5V devam ser fornecidos ao barramento I2C.
</div>

## Ideias de Aplicação

- Robôs
- Carrinhos RC caseiros
- Ventoinhas de gabinete
- Iluminação LED de alta potência

<div class="admonition danger">
<p class="admonition-title">Caution</p>
A placa ficará muito quente ao operar acima de 1 Ampere. Mantenha suas mãos longe!
</div>

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Demonstração

O I2C Motor Driver pode controlar motor baseado no chip L298. O L298 não é apenas um driver de motor duplo, é uma ponte H dupla. Uma ponte H é basicamente uma configuração específica de transistores que permite alternar a direção da corrente. Conectando a um motor significa que você pode fazê-lo girar em ambas as direções; e com entrada PWM, você pode usar o Arduino para fazê-los girar em qualquer velocidade. Como o L298 tem 2 pontes H, você pode fazer um robô girar em torno de si mesmo fazendo cada roda girar em direções diferentes e, é claro, ir para frente e para trás.

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield|  Grove - I2C Motor Driver V1.3 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New_small.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)|

- **Passo 2.** Defina o endereço do I2C Motor Driver

- Definir o endereço pelo dial switch é uma nova função adicionada ao novo I2C Motor Driver.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-9.jpg)

- Depois mantenha a configuração de endereço no programa igual à configuração de endereço no I2C motor driver. O endereço padrão configurado no programa é 0x0f.
- **Passo 3.** Conecte o Grove - I2C Motor Driver V1.3 à porta I2C do Grove-Base Shield.
- **Passo 4.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 5.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - I2C Motor Driver V1.3 ao Seeeduino como abaixo.
:::
| Seeeduino       | Grove - I2C Motor Driver V1.3 |
|-----------------|-------------------------|
| 5V              | Vermelho                |
| GND             | Preto                   |
| SDA             | Branco                  |
| SCL             | Amarelo                 |

#### Software

- **Passo 1.** Baixe a [Grove_I2C_Motor_Driver_v1_3 Library](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip) no Github.
- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Copie o código para a IDE do Arduino e faça o upload. Se você não souber como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
// default I2C address is 0x0f
#define I2C_ADDRESS 0x0f

void setup()
{
    Motor.begin(I2C_ADDRESS);
}
```

<div class="admonition note">
<p class="admonition-title">Note</p>
A primeira coisa a notar é que você precisa de uma fonte de alimentação externa para seus motores DC. O pino de 5V no Arduino não pode fornecer energia suficiente para acionar 2 motores; você pode danificar seu Arduino se fizer isso.
</div>

- Existem 2 funções para controlar motores DC:

```c
// Set the speed of a motor, speed is equal to duty cycle here
void speed(unsigned char motor_id, int _speed);

// Stop one motor
void stop(unsigned char motor_id);

```

Com a função speed(), você consegue acionar um motor na velocidade que desejar.

- **motor_id** representa qual motor usar. Você pode preencher MOTOR1 ou MOTOR2.

- **_speed** representa a velocidade que você define para o motor. Você pode preencher -100~100 aqui. Quando _speed&gt;0, o motor DC gira no sentido horário, enquanto _speed&lt;0, o motor DC gira no sentido anti-horário. E quanto maior o valor absoluto de _speed, maior a velocidade do motor DC.

Com a função stop(), você consegue parar um motor DC em funcionamento.

- **motor_id** representa qual motor usar. Você pode preencher MOTOR1 ou MOTOR2.

**Acionar um Motor de Passo**

Tome o [Motor de Passo 24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171) como exemplo. A instalação de hardware é mostrada abaixo:

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg)

A conexão entre o Motor de Passo [24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171) e o I2C Motor Driver é mostrada abaixo:

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg)

- Fornecemos uma função para acionar um motor de passo.

```c
// Drive a stepper motor
void StepperRun(int _step);
```

- **_step** representa os passos que você define para o motor de passo executar. Você pode preencher de -1024~1024. Quando _step&gt;0, o motor de passo gira no sentido horário, enquanto _step&lt;0, o motor de passo gira no sentido anti-horário. Quando _step é 512/-512, o motor de passo dará uma volta completa e, se _step for 1024/-1024, o motor de passo dará 2 voltas. O motor de passo irá parar automaticamente após concluir seus passos.

### Brincar com o Codecraft

#### Hardware

**Passo 1.** Usando um cabo Grove, conecte o Grove - I2C Motor Driver à porta I2C do Seeeduino. Se você estiver usando um Arduino, aproveite um Base Shield.

**Passo 2.** Conecte o Seeedino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta for a sua primeira vez usando o Codecraft, consulte também o [Guia para usar Arduino com Codecraft](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc, que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/cc_I2C_Motor_Driver.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
    Quando o envio do código terminar, você verá que os motores DC conectados ao Motor Driver estarão funcionando.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Diagrama Esquemático do Grove - I2C Motor Driver V1.3](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip)

- **[PDF]** [PCB do Grove - I2C Motor Driver V1.3 em Formato PDF](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b%20PCB.pdf)

- **[PDF]** [Diagrama Esquemático do Grove - I2C Motor Driver V1.3 em Formato PDF](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b.pdf)

- **[Library]** [Biblioteca do Grove - I2C Motor Driver V1.3](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3)

- **[Firmware]** [Firmware On-Chip para o I2C Motor Driver](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/On-Chipfirmware_for_Motor_driver.zip)

- **[Datasheet]** [Datasheet do L298](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/L298datasheet.pdf)

- **[Datasheet]** [Datasheet do 78M05](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/ST_78M05DataSheet.pdf)

- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove_I2C_Motor_Driver_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Motor_Driver_V1.3 -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
