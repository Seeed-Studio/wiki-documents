---
description: Kit de Desenvolvimento Azure Sphere MT3620
title: Kit de Desenvolvimento Azure Sphere MT3620
keywords:
  - Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Azure_Sphere_MT3620_Development_Kit
sku: 102991100, 102991099, 102991012
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Azure_Sphere_MT3620_Development_Kit/
---

![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure.jpg)

O Kit de Desenvolvimento Azure Sphere MT3620 é especialmente projetado para suportar a prototipagem rápida e permitir que desenvolvedores experimentem a tecnologia Azure Sphere. O MT3620 é o primeiro MCU certificado pelo Azure Sphere. MCUs certificados pelo Azure Sphere são uma nova classe de microcontroladores crossover conectados e protegidos. O MT3620 possui três núcleos de microcontrolador acessíveis ao usuário: um núcleo ARM Cortex-A7 e dois núcleos ARM Cortex-M4F de uso geral. O MT3620 é projetado para suportar requisitos de tempo real ao interagir com uma variedade de periféricos integrados, incluindo GPIO, UART, I2C, SPI, I2S, PWM e ADC. Ele possui um subsistema de segurança integrado com seu próprio núcleo CM4F dedicado para boot seguro e operação segura do sistema, juntamente com Wi‑Fi 802.11 b/g/n de banda dupla.

O Kit de Desenvolvimento MT3620 expande a maioria dos recursos de hardware do MT3620 nos cabeçalhos de pinos de expansão; conectando a uma protoboard ou adicionando uma placa shield, o usuário pode facilmente conectar outros acessórios de hardware.

O sistema operacional Azure Sphere vem pré-instalado no MT3620 e é projetado para funcionar com o Azure Sphere Security Service para criar uma plataforma de IoT segura. Seus recursos são：

- Autenticação de dispositivo baseada em certificado para qualquer serviço web
- Atestado de software e boot seguro
- Detecção de ameaças via relato de falhas
- Atualizações de segurança contínuas
- Uma solução de IoT integrada, protegida e de ponta a ponta

O desenvolvimento de software para o MT3620 é suportado usando o poderoso IDE Microsoft Visual Studio:

- Instale o [Visual Studio](https://visualstudio.microsoft.com/) (suporta Community, Enterprise ou Professional) e a extensão Azure Sphere, conecte a placa de desenvolvimento a um PC via USB e comece a desenvolver aplicações de IoT com níveis de segurança sem precedentes.
- Para usar a Placa de Desenvolvimento MT3620 para Azure Sphere, você precisará de um PC com Windows 10 com as atualizações mais recentes do Windows, juntamente com o SDK [Azure Sphere software development kit](http://aka.ms/AzureSphereSDK).

<div class="video-container">
<iframe width="600" height="450" src="https://www.youtube.com/embed/iiDF26HNh-Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

|Nome do Produto | Como Comprar|
|----------------|-----------|
|Kit de Desenvolvimento Azure Sphere MT3620 Versão dos EUA|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)|
|Kit de Desenvolvimento Azure Sphere MT3620 Versão JP|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-JP-Version-p-3135.html)|
|Kit de Desenvolvimento Azure Sphere MT3620 Versão UE|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-EU-Version-p-3134.html)|

:::caution
Se você precisar de ajuda na seleção da versão, verifique a [lista de países ou regiões disponíveis](https://view.officeapps.live.com/op/view.aspx?src=https://statics3.seeedstudio.com/document/Available_country.docx) para mais detalhes.
:::

## Recursos

- Azure Sphere: Segurança de ponta a ponta para dispositivos IoT
- 802.11 b/g/n de banda dupla com diversidade de antena
- Microcontrolador de três núcleos com RAM e flash integrados
- Ambiente de desenvolvimento Microsoft Visual Studio
- Autenticação online e atualizações por toda a vida útil do dispositivo

## Especificação

**Hardware**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-amwm{font-weight:bold;:center;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>Descrição</span></th>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>Valor</span></th>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={2}><br />MCU</td>
      <td className="tg-0lax">1 *núcleo ARM Cortex A7 @500MHz , 4MB RAM</td>
    </tr>
    <tr>
      <td className="tg-0lax">2* núcleos ARM Cortex M4 @200MHz, 64KB RAM</td>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={5}><br /><br /><br /><br />ISU</td>
      <td className="tg-0lax">4 *interface serial “ISU” que pode ser configurada como:</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- I2C opera em até 1MHz</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- SPI opera em até 40MHz</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- UART opera em até 3Mbps</td>
    </tr>
    <tr>
      <td className="tg-0lax">ISU é Interface de Comunicação Serial</td>
    </tr>
    <tr>
      <td className="tg-amwm">Conectividade</td>
      <td className="tg-0lax">Wi‑Fi 2,4/5GHz 802.11 b/g/n de banda dupla</td>
    </tr>
    <tr>
      <td className="tg-amwm">I2S</td>
      <td className="tg-0lax">1* I2S com suporte a modo escravo e TDM escravo</td>
    </tr>
    <tr>
      <td className="tg-amwm">ADC</td>
      <td className="tg-0lax">4 *entradas/saídas ADC de 12 bits</td>
    </tr>
    <tr>
      <td className="tg-amwm">RTC</td>
      <td className="tg-0lax">1* RTC com suporte para bateria CR2032 3V</td>
    </tr>
    <tr>
      <td className="tg-amwm">USB</td>
      <td className="tg-0lax">1 *porta Micro USB para alimentação e depuração, 5V/1A</td>
    </tr>
    <tr>
      <td className="tg-amwm">Conector DC</td>
      <td className="tg-0lax">1* conector de alimentação DC 5V/1A</td>
    </tr>
    <tr>
      <td className="tg-amwm">Temperatura de Operação</td>
      <td className="tg-0lax">-40~85°C</td>
    </tr>
    <tr>
      <td className="tg-amwm">Dimensões</td>
      <td className="tg-0lax">C:85mm*L:50mm*A:16mm</td>
    </tr>
    <tr>
      <td className="tg-amwm">Certificação</td>
      <td className="tg-0lax">CE / FCC / MIC / RoHS</td>
    </tr>
  </tbody></table>

**Software**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">Sistema</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">Linguagem de Programação</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## Visão Geral de Hardware

**Diagrama da Placa**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png"/></a>

- **J1**: Tensão de Referência do ADC, On: usando 2,5V internos; Off: conectar 1,8V externos ao Pino 1. Off por padrão.
- **J2**: Isolamento de 3,3V, On: habilita a alimentação de 3,3V do sistema; Off: corta a alimentação de 3,3V do sistema. On por padrão.
- **J3**: Seleção de Alimentação do RTC: 2 pinos à esquerda: usando bateria do RTC (Modelo: CR2032) na parte traseira.
- **4 LEDs RGB de Usuário**: o modelo de LED é LTST-C19HE1WT.
- **Porta USB**: Alimentação (5V/1A) e depuração, conectada ao chip FT4232HQ na parte traseira.
- **4 LEDs de Sistema**: Led1 (próximo à porta USB): verde, LED de Atividade do FTDI. Led2: vermelho, Indicador de Alimentação. Led3: RGB, Status do Wi‑Fi. Led4: RGB, Status do App.
- **Alimentação DC**: 5V/1A
- **3 Botões de Sistema**: Botões A&B (brancos) são botões de usuário. Botão Reset (azul) é o Reset do Sistema.
- **MT3620**：O [MT3620](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf) é um MCU para IoT altamente integrado e de alto desempenho, com o alto nível de segurança necessário para dispositivos modernos robustos conectados à internet. O MT3620 tem como alvo uma ampla gama de aplicações de IoT, incluindo casa inteligente, comercial, industrial e muitos outros domínios, graças ao seu extenso subsistema de periféricos de E/S que permite flexibilidade e liberdade no projeto do dispositivo.
- **FT4232HQ**: O [FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf) é um CI USB 2.0 High Speed (480Mb/s) para UART/MPSSE.

**Pinagem da Placa**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png"/></a>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**Dimensões**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png"/></a>

**Alimentação**

A alimentação para o Kit de Desenvolvimento Azure Sphere MT3620 é fornecida através do conector Micro USB B integrado ou diretamente através do conector DC.

- A tensão de GPIO é 3,3V, com uma margem limitada de apenas 100mA disponível.
- A saída de 5V no conector H3 tem uma margem limitada de apenas 500mA disponível.
- Os 3,3V no conector H3 têm uma margem limitada de apenas 400mA disponível.
- O consumo médio típico de corrente é de 150mA com Wi‑Fi de 5V ligado. A corrente de varredura do Wi‑Fi é tipicamente 330mA.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/power.png)

**Projeto e Fabricação de Hardware**

Para usar I2S, consulte o [M4 User Manual](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf)

:::tip
Para mais informações, consulte [Information and tools for hardware design and manufacture](https://learn.microsoft.com/en-us/azure-sphere/hardware/hardware-manufacturing-overview).
:::

## Manuseio do Produto

**Embalagem**

A embalagem do Azure Sphere MT3620 Development Kit contém o Azure Sphere MT3620 Development Kit e um cabo Micro B USB.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/box.JPG)

**Precauções ESD**

O Azure Sphere MT3620 Development Kit contém circuitos eletrônicos de alta sensibilidade e é um Dispositivo Sensível à Eletricidade Estática (ESD). Manusear o Azure Sphere MT3620 Development Kit sem a devida proteção ESD pode destruí-lo ou danificá-lo permanentemente. Procedimentos adequados de manuseio e embalagem ESD devem ser aplicados durante todo o processo, manuseio e operação de qualquer aplicação que incorpore o Azure Sphere MT3620 Development Kit.

## Aplicações

- Residencial/Prédios/Instalações
- Automação
- Segurança
- Gerenciamento de Equipamentos
- Serviços públicos
- Segurança Pública
:::tip
Para entender como o Azure Sphere funciona em um cenário do mundo real, considere o [cenário da Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Qualificação e aprovações

<div className="method1" style={{width: '16%'}}>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/FCC.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/CE.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mic.jpg" /></a></p>
</div>

<div ><img width="{1000}" src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/RoHS.jpg" /></div>

<!-- <style>
.method1{
  :center;
  float:left;
}
.title{
font-size:1px;
text-indent:1px;
line-height:3px
}
</style> -->

- FCC ID: [Z4T-MT3620DEVB](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- CE ID: [18/0331/SZ](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- MIC ID: [CSRT18207](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)

## Instalar o Azure Sphere

Se você tem um kit de desenvolvimento Azure Sphere que ainda não foi usado, conclua [estas etapas](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primeiro para colocá-lo em funcionamento.

## Demo do Azure Sphere

Construímos duas demos que combinam o kit de desenvolvimento Sphere e o [sistema Seeed Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/).

**Demo1**: A placa de desenvolvimento MT3620 atua como um MCU, que se conecta a um sensor de temperatura (SHT31), relé, ventilador, display e dispositivo analógico. A demo simula um ventilador com conectividade IoT; é possível medir a temperatura ambiente e definir um valor limite para ligar/desligar o ventilador a partir da Azure Cloud. A temperatura será exibida no display de LED. O usuário pode ajustar o resistor para alterar o nível de velocidade do ventilador entre 0,1,2,3 (0 significa desligar o ventilador).

**Demo2**: A placa de desenvolvimento MT3620 funciona como um dispositivo de conectividade de segurança IoT, que será conectada a um aparelho já existente; o aparelho tem seu próprio MCU, que nesta demo usamos um Arduino para simular a placa de controle de um ventilador. A placa pode obter o status dos dados do motor do ventilador e, analisando esses dados, é possível identificar condições de falha e enviar o responsável pela manutenção para consertá-lo. Ao pressionar o botão, isso simula o status de saúde do dispositivo ventilador; quando o botão é pressionado, isso significa que o dispositivo precisa de manutenção.

### Hardware

**Lista de Peças**

| Kits de desenvolvimento MT3620 | Grove-Temperature&Humidity|  Grove - Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/relay.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

| Grove - Slide Potentiometer | Grove - 4-Digit Display |   Grove - Blue LED Button  |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Slide_Potentiometer_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/4_digital_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Grov-Blue_led_button.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|[Adquira agora](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html)|

| MT3620 Grove Shield |Seeeduino V4.2  | Base Shield  |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Adquira agora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

**Diagrama do Sistema**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png"/></a>

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png"/></a>

**MT3620 Grove Shield**

Como o [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) ainda não oferece suporte a ADC e I2C no MT3620, este shield serve como uma interface entre a porta UART do MT3620 e dispositivos I2C externos, como o sensor de temperatura I2C. A função básica do shield é ajudar a conectar a dispositivos externos I2C. Usando um chip ADC compatível com I2C, o desenvolvedor também pode ler dados analógicos a partir da porta analógica.

O [MT3620 Grove Shield](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) inclui 2 chips, AD7992 (Anlog to I2C) e SC18IM700 (I2C to UART), para habilitar as funções de ADC e I2C pelo lado de hardware. Assim, o sinal dos sensores analógicos passa pelo AD7992 e depois pelo SC18IM700 até o UART da placa de desenvolvimento. Os sensores I2C também passam pelo SC18IM700 até o UART da placa de desenvolvimento.

O [AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) é um ADC de 12 bits, de baixo consumo, de aproximações sucessivas, com uma interface compatível com I2C. Ele transforma o sinal analógico A0, A1 em dados I2C.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

O [SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) foi projetado para servir como interface entre a porta UART padrão de um microcontrolador ou microprocessador e o barramento serial I2C; isso permite que o microcontrolador ou microprocessador se comunique diretamente com outros dispositivos do barramento I2C. Ele transforma os sinais SDA/SCL em GPIO26_TXD0 e GPIO28_RXD0.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>Visão Geral de Hardware do MT3620 Grove Shield</div>

**Conexão de Hardware**

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_Front.jpg)

<div style={{textAlign: 'center'}}>Vista frontal da configuração de hardware</div>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_backside.jpg)

<div style={{textAlign: 'center'}}>Vista superior da configuração de hardware</div>

- Passo 1. Conectar o Grove-Blue LED Button à porta 2 do Grove base shield.
- Passo 2. Conectar o sinal PWM do ventilador à porta 5 do Grove base shield.
- Passo 3. Conectar a porta 7 (Software Serial Port) do Grove base shield ao UART3 do MT3620 Grove Shield. Corte o Vcc (cabo vermelho) e deixe apenas TX/RX/GND para a comunicação serial.
- Passo 4. Conectar o Grove-Base shield ao Seeeduino/Arduino.
- Passo 5. Conectar o Grove-4 Digital Display à porta GPIO4 do MT3620 Grove Shield.
- Passo 6. Conectar o Grove-Temperature&Humidity Sensor (SHT31) à porta I2C do MT3620 Grove Shield.
- Etapa 7. Conecte o Grove-Relay à porta GPIO0 do MT3620 Grove Shield e o terminal de saída do Grove-Relay para controlar o ligar/desligar do ventilador.
- Etapa 8. Conecte o Grove-Slide Potentiometer à porta analógica do MT3620 Grove Shield.
- Etapa 9. Conecte o MT3620 base shield à placa de desenvolvimento Azure Sphere MT3620.
- Etapa 10. Conecte o cabo USB à placa de desenvolvimento Azure Sphere MT3620 e ao PC.
- Etapa 11. Conecte o cabo USB ao Ardunio/Seeeduino e ao PC.
- Etapa 12. Conecte a fonte de alimentação ao ventilador.

:::caution
Certifique-se de que o seletor de tensão no Grove base shield esteja ajustado para **3.3v**.
:::

### Software

O software inclui o sistema de simulação de ventilador inteligente e o sistema Azure Sphere MT3620 Development.

- Para o sistema de simulação de ventilador inteligente, use a placa Arduino para ler o sinal de entrada de pressionar/soltar do botão Grove-Blue LED, gerar o PWM para controlar a velocidade do ventilador e também controlar o estado do LED do botão Grove-Blue LED. Depois use a porta 7 para se comunicar com o sistema Azure Sphere MT3620 Development por meio de UART.

- Para o sistema Azure Sphere MT3620 Development, o Grove-4 Digital LED exibe a temperatura do sensor Grove-Temperature&Humidity Sensor(SHT31), o que demonstra a função de shield UART-I2C e a função de saída GPIO do MT3620. Deslize o Grove-Slide Potentiometer para mudar a velocidade do ventilador, o que demonstra a função de entrada de E/S do MT3620. Configure um valor de temperatura limite na Azure Cloud; quando o valor > limite, o Grove-relay liga o ventilador, caso contrário desliga o ventilador. O usuário também pode ajustar o Grove-Slide Potentiometer; quando o estado de funcionamento do ventilador estiver incorreto, o MCU do ventilador enviará a falha para o Azure Sphere via UART, então o relatório de falha irá para a Azure Cloud e aguardará manutenção.

**Sistema de Simulação de Ventilador Inteligente**

- Etapa 1. Abra a Arduino IDE.
- Etapa 2. Copie o [código de Simulação de Ventilador Inteligente para Arduino](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan/blob/master/Arduino_code/Arduino_code.ino) e cole na Arduino IDE.
- Etapa 3. Selecione Arduino/Seeeduino v4 como placa no menu Tools.
- Etapa 4. Selecione a porta COM correspondente no menu Tools.
- Etapa 5. Clique em upload para enviar o código para o Arduino/Seeeduino.

:::note
Se você não souber como fazer o upload do código, consulte [como fazer upload de código](https://wiki.seeedstudio.com/pt-br/Upload_Code/).
:::

**Sistema Azure Sphere MT3620 Development**

- Etapa 1. Baixe o [código Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan).
- Etapa 2. Siga os Quickstarts for Azure Sphere para abrir o projeto **AzureSphereDemo2.vcxproj**.
- Etapa 3. Abra o main.c em Source Files.
- Etapa 4. Modifique wifiSsid e wifiPsk nas linhas 21 e 22.
- Etapa 5. Conecte a demonstração ao Azure IoT.
- Etapa 6. Clique em Build -> Rebuild Solution diretamente para o dispositivo.
- Etapa 7. Use a Remote Debug Tool para acessar o dispositivo.  
- Etapa 8. Veja no console o fluxo de dados de temperatura retornando.
- Etapa 9. Configure o device explorer e vincule os dispositivos físicos e os dispositivos na nuvem.
- Etapa 10. Pressione o sensor de temperatura e veja a mensagem de disparo no console.
- Etapa 11. Pressione o botão para simular o erro do ventilador e veja o status no console.

Para detalhes de operação, consulte o vídeo.

<div class="video-container">
<iframe width="1000" height="669" src="https://www.youtube.com/embed/KXThR9RUNvw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Recurso

- **[Product]** [Azure Sphere MT3620 Development Kit Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Product]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Certification]** [Azure Sphere MT3620 Development Kit-CE](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- **[Certification]** [Azure Sphere MT3620 Development Kit-FCC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- **[Certification]** [Azure Sphere MT3620 Development Kit-MIC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)
- **[Library]** [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Wiki]** [MT3620 Grove Shield](https://wiki.seeedstudio.com/pt-br/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/)
- **[DataSheet]]** [MediaTek MT3620 Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[Mechanical]** [Azure Sphere MT3620 Development Board-2D-Drawing](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[FAQ Web]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

