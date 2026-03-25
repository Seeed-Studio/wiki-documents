---
title: Grove - Sensor de Distância Time of Flight VL53L0X
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/
slug: /Grove-Time_of_Flight_Distance_Sensor-VL53L0X
sku: 101020532
last_update:
  date: 03/01/2023
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/
---

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/main.JPG)

Grove - Time of Flight Distance Sensor-VL53L0X é um sensor de distância de alta velocidade, alta precisão e longo alcance baseado no VL53L0X.

O VL53L0X é um módulo de medição a laser Time-of-Flight (ToF) de nova geração, alojado no menor encapsulamento disponível atualmente no mercado, fornecendo medição de distância precisa qualquer que seja a refletância do alvo, ao contrário das tecnologias convencionais. Ele pode medir distâncias absolutas de até 2 m, estabelecendo um novo padrão em nível de desempenho de medição, abrindo caminho para diversas novas aplicações.

O VL53L0X integra uma matriz SPAD (Single Photon Avalanche Diodes) de ponta e incorpora a tecnologia patenteada FlightSenseTM de segunda geração da ST.

O emissor VCSEL de 940 nm (VerticalCavity Surface-Emitting Laser) do VL53L0X é totalmente invisível ao olho humano e, combinado com filtros físicos internos de infravermelho, permite maiores distâncias de medição, maior imunidade à luz ambiente e melhor robustez contra crosstalk óptico no vidro de proteção.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- **Módulo miniatura totalmente integrado**

  - VCSEL a laser de 940 nm
  - Driver de VCSEL
  - Sensor de medição com microcontrolador avançado incorporado

- **Medição de distância rápida e precisa**
  - Mede distância absoluta de até 2 m
  - A distância informada é independente da refletância do alvo
  - Compensação óptica avançada de crosstalk incorporada para simplificar a seleção do vidro de proteção

- **Seguro para os olhos**
  - Dispositivo a laser Classe 1 em conformidade com o padrão mais recente IEC 60825-1:2014 - 3ª edição

- **Fácil integração**
  - Único componente compatível com refluxo
  - Sem óptica adicional
  - Única fonte de alimentação
  - Interface I2C para controle do dispositivo e transferência de dados
  - Xshutdown (reset) e interrupção GPIO
  - Endereço I2C programável

## Especificação

Feature|Detail
---|---
Operating voltage|3.3V/5V
Operating temperature|-20℃ - 70℃
Recommed measure distance|30mm-1000mm
Resolution|1mm
Infrared emitter|940 nm
Bus rate|Up to 400 kHz (FAST mode) serial bus
IIC Address|0x29

## Aplicações

- Detecção de usuário para computadores pessoais/laptops/tablets e IoT (economia de energia)
- Robótica (detecção de obstáculos)
- Eletrodomésticos (detecção de mão em torneiras automáticas, dispensadores de sabão etc.)
- Reconhecimento de gestos 1D.
- Autofoco assistido por laser. Melhora e acelera o desempenho do sistema de autofoco da câmera, especialmente em cenas difíceis (baixos níveis de luz, baixo contraste) ou em modo de vídeo com movimento rápido.

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - Time of Flight Distance Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Adquira agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar 
:::

- **Etapa 1.** Conecte o Grove - Time of Flight Distance Sensor à porta **IIC** do Grove-Base Shield.

- **Etapa 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Etapa 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/connect.jpg)

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.
:::

| Seeeduino       | Grove - Time of Flight Distance Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| SDA            | White                   |
| SCL            | Yellow                  |

#### Software

- **Etapa 1.** Baixe a [VL53L0X Library](https://github.com/Seeed-Studio/Grove-Ranging-sensor-VL53L0X) do Github.

- **Etapa 2.** Extraia o arquivo `Grove-Ranging-sensor-VL53L0X-master.zip` para a `Arduino library folder`.

:::note
  Por exemplo, faço o download desta biblioteca em `D:\Software\WorkWork\arduino-1.8.5\libraries`, então só preciso extrair o arquivo zip aqui. Em resumo, certifique-se de que a pasta `Grove-Ranging-sensor-VL53L0X-master` esteja na sua pasta de bibliotecas do Arduino, como na imagem abaixo.
:::

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/folder.png)

- **Etapa 3.** Abra a pasta `Grove-Ranging-sensor-VL53L0X-master\examples` que você acabou de extrair; você verá cinco subpastas:

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/examples.png)

Escolha exemplos diferentes de acordo com suas próprias necessidades. Depois, clique duas vezes no arquivo `xxx.ino` para abrir a IDE do Arduino.

:::note
  Usamos `high_accuracy_ranging.ino` neste demo.
:::

- **Etapa 4.** Carregue o demo. Se você não souber como carregar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Etapa 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá o resultado.

O resultado deve ser parecido com:

```
time of mesurement: 205
Measured distance:115 mm
time of mesurement: 205
Measured distance:117 mm
time of mesurement: 205
Measured distance:120 mm
time of mesurement: 205
Measured distance:125 mm
time of mesurement: 204
Measured distance:130 mm
time of mesurement: 205
Measured distance:138 mm
time of mesurement: 205
Measured distance:143 mm
time of mesurement: 205
Measured distance:144 mm
time of mesurement: 205
Measured distance:152 mm

```

## Visualizador Online do Esquemático

<div>
  className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip" style={'{'}{'{'}borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'{'}'}{'}'}&gt;
</div>

## Recursos

- **[ZIP]** [Arquivos Eagle do Grove-Time of Flight Distance Sensor VL53L0X](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip)
- **[PDF]** [Manual do Usuário VL53L0X](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/software-flow.pdf)
- **[PDF]** [Datasheet do VL53L0X](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/vl53l0x-datasheet.pdf)

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
