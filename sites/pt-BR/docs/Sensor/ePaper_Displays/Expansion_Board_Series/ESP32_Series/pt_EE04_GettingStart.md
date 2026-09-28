---
description: Introdução à XIAO ePaper Display Board(ESP32-S3) - EE04
title: Introdução à EE04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /epaper_ee04
sidebar_position: 3
sku: 104990861,100075670,100064541,E25102101
last_update:
  date: 09/16/2026
  author: Nemo
createdAt: '2025-09-25'
updatedAt: '2026-09-16'
url: https://wiki.seeedstudio.com/pt-br/epaper_ee04/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introdução à XIAO ePaper Display Board - EE04

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO ESP32-S3** Plus, a placa de display EE04 é compatível com displays ePaper de **24 pinos** e **50 pinos**. Ela possui um conector de bateria JST 2,0 mm com chave liga/desliga, CI de carregamento integrado e vem com um botão de reset e três botões de usuário. É ideal para projetos de ePaper de baixo consumo, como sinalização digital, etiquetas eletrônicas e quadros de informação portáteis.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_1.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **Alimentada por XIAO ESP32-S3 Plus:** Funciona imediatamente quando conectada a um display ePaper compatível.
- **Suporte versátil a displays:** Compatível com uma ampla variedade de telas ePaper, suportando interfaces de 24 pinos e 50 pinos, com troca fácil por meio de jumpers.
- **Conector BAT com chave:** Oferece conexão simples de bateria e integra uma chave, permitindo gerenciamento eficiente de energia e economia de consumo.
- **Botões fáceis de usar:** Inclui 1 botão de reset e 3 botões programáveis pelo usuário, oferecendo flexibilidade para acelerar projetos e funções personalizáveis.
- **Design de baixo consumo**: Adequado para aplicações ePaper alimentadas por bateria, com duração típica de 3 meses com carga completa nas configurações padrão.

### Especificações

| Parâmetro | Descrição |
|-----------|-------------|
| Processador | XIAO ESP32-S3 Plus |
| Conector ePaper | FPC 24 pinos 0,5mm<br />FPC 50 pinos 0,5mm |
| Conector de bateria | JST 2,0mm |
| Chave | Alimentação da bateria ON/OFF |
| Fonte de alimentação | - Bateria Li 3,7V<br />- USB Type-C |
| Botão | - 1x botão de reset<br />- 3x botões de usuário |

### Guia de seleção de placa ePaper

| Produto | ePaper Display Board EE04 | [ePaper Breakout](https://wiki.seeedstudio.com/pt-br/XIAO-eInk-Expansion-Board/) | [ePaper Driver Board](https://wiki.seeedstudio.com/pt-br/xiao_eink_expansion_board_v2/) |
|---------|---------------------------|---------------|-----------------|
| Processador | XIAO ESP32-S3 Plus | Série XIAO | Série XIAO |
| Displays ePaper compatíveis | ePaper 24 pinos<br />ePaper 50 pinos | ePaper 24 pinos | ePaper 24 pinos |
| Conector ePaper | FPC 24 pinos, 0,5mm<br />FPC 50 pinos, 0,5mm | FPC 24 pinos 0,5mm | FPC 24 pinos 0,5mm |
| Conector de bateria | JST 2,0mm | / | JST 2,0mm |
| Chave | Alimentação da bateria ON/OFF | / | Alimentação da bateria ON/OFF |
| Botão | 1x botão de reset<br />3x botões de usuário | / | / |
| Porta de E/S de extensão | / | conexão de outros controladores | conexão de sensores adicionais |

### Aplicações

- **Dashboard de casa inteligente**: Exiba informações em tempo real, como atualizações de clima, eventos de calendário e notificações de vários dispositivos de casa inteligente.
- **Monitoramento de energia**: Mostre dados de consumo de energia de medidores inteligentes, ajudando moradores a acompanhar e gerenciar o uso de energia com mais eficiência.
- **Alertas de segurança**: Exiba alertas e notificações sobre eventos de segurança, como detecção de movimento ou ativação de sensores de porta/janela.
- **Display de termostato inteligente**: Mostre níveis de temperatura e umidade, bem como configurações de controle para o seu termostato inteligente.
- **Porta-retratos digital**: Crie um porta-retratos digital com WiFi que possa exibir imagens da sua rede de casa inteligente.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

:::tip

Esta versão XIAO ePaper Display Board(ESP32-S3) - EE04 não oferece suporte à funcionalidade NFC.

:::

### ePaper compatíveis

#### Conector de 24 pinos

- [ePaper de 1,54 polegadas - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [ePaper de 2,13 polegadas - Monocromático 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [ePaper de 2,13 polegadas - Quádruplo 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [ePaper de 2,9 polegadas - Monocromático 296x128](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [ePaper de 2,9 polegadas - Monocromático flexível 296x128](https://www.seeedstudio.com/2-9-Flexible-Monochrome-ePaper-Display-with-296x128-Pixels-p-5780.html)
- [ePaper de 2,9 polegadas - Quádrupla cor 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [ePaper de 4,2 polegadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [ePaper de 4,26 polegadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [ePaper de 5,83 polegadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [ePaper de 7,5 polegadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [ePaper de 7,5 polegadas - Três cores 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
Ao usar a XIAO ePaper Display Board, certifique-se de configurar o jumper de acordo com o tipo de display ePaper:

- Para displays ePaper de 24 pinos → ajuste o jumper para 24 pinos

⚠️ Usar a configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.

:::

#### Conector de 50 pinos

- [ePaper Spectra6 de 7,3 polegadas](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
Ao usar a XIAO ePaper Display Board, certifique-se de configurar o jumper de acordo com o tipo de display ePaper:
- Para displays ePaper de 50 pinos → ajuste o jumper para 50 pinos

⚠️ Usar a configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.

:::

### Botões

A EE04 está equipada com 1 botão de reset e 3 botões programáveis pelo usuário, oferecendo flexibilidade para interação do usuário e personalização de projetos.

| Botão | GPIO | Função |
|--------|------|----------|
| KEY0 | GPIO2_D1/A1 | Botão de usuário (programável) |
| KEY1 | GPIO3_D2/A2 | Botão de usuário (programável) |
| KEY2 | GPIO5_D4/A4 | Botão de usuário (programável) |
| RESET | - | Botão de reset |

:::note
Os botões de usuário são programáveis e podem ser configurados para várias funções, como troca de página, seleção de modo ou acionamento de ações específicas no seu projeto ePaper.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

### Seleção do jumper

A EE04 é compatível com displays ePaper de 24 pinos e 50 pinos. Use o jumper para selecionar a configuração de pinos correta para o seu display:

- **Modo de 24 pinos**: Coloque o jumper no lado de 24 pinos
- **Modo de 50 pinos**: Coloque o jumper no lado de 50 pinos

:::caution
Certifique-se de que o jumper esteja posicionado corretamente de acordo com a contagem de pinos do seu display ePaper. A colocação incorreta do jumper pode causar problemas de exibição ou danificar a tela.
:::

### Conector de bateria

A placa possui um conector de bateria JST 2,0mm com chave de alimentação, permitindo alimentar o dispositivo com uma bateria de lítio de 3,7V para aplicações portáteis. O CI de carregamento integrado permite carregar a bateria via USB Type-C.

Quando o dispositivo é alimentado por bateria, os seguintes fenômenos são comportamentos normais inerentes ao próprio firmware SenseCraft Seeedash.

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações
- A vida útil da bateria depende da frequência de atualização (tipicamente 3 meses com carga completa nas configurações padrão)
- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível da bateria estiver abaixo de 20%

## Introdução ao SenseCraft Seeedash 

Esta seção irá guiá-lo na conexão da sua EE04 à plataforma SenseCraft Seeedash, permitindo atualizar facilmente o conteúdo da tela sem fio.

:::note
**Qual tela este guia utiliza?** Diferente de placas com um único painel, a EE04 é compatível com vários painéis ePaper (consulte a seção **ePaper compatíveis** acima). Este guia usa o **ePaper monocromático de 7,5 polegadas (800 x 480)** como exemplo ao longo do texto — todas as capturas de tela abaixo foram feitas com este painel. Se você tiver uma tela diferente, basta selecionar o modelo do seu próprio painel ao gravar o firmware na Etapa 2; as etapas restantes são exatamente as mesmas.
:::

:::caution
**Nenhuma tela de boas-vindas na primeira energização? Isso é normal.** Como a EE04 é compatível com vários painéis ePaper, o firmware de fábrica não vem pré-gravado para nenhuma tela específica. Quando você conecta uma tela e liga uma placa nova, o display provavelmente permanecerá em branco — isso **não** significa que a placa ou a tela estejam com defeito. Você precisa primeiro gravar o firmware SenseCraft Seeedash correspondente ao modelo da sua tela (Etapa 2 abaixo); as interfaces de boas-vindas e de Configuração de Rede aparecerão após a gravação.
:::
### Instalação do equipamento

**Etapa 1. Conecte a tela e a placa**
Conecte cuidadosamente o cabo FPC da sua tela ePaper ao conector na placa controladora EE04. Certifique-se de que o mecanismo de travamento esteja firme.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/Connect.gif" style={{width:800, height:'auto'}}/></div>

**Etapa 2. Grave o firmware HMI para a sua tela**

Mantenha a placa EE04 conectada ao seu computador com um cabo USB Type-C de **dados** (o mesmo cabo é usado para alimentação e gravação) e então:

1. Acesse a [plataforma SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi) e faça login na sua conta.
2. Abra **Tools** → **Firmware Flasher** no menu à esquerda.
3. Na lista de dispositivos, selecione **XIAO EE04 DIY Kit**.
4. Selecione a entrada de firmware que corresponde ao modelo de tela conectado à sua placa. **Neste guia usamos o Display Monocromático de 7,5" 800 x 480** — escolha aqui o seu próprio painel se for diferente.
5. Clique em **Flash**, escolha a porta serial da sua placa na janela pop-up e aguarde a conclusão da gravação.

:::tip
Se nenhuma porta serial aparecer, pressione o botão **RESET** na placa e tente novamente. Certifique-se também de que o cabo USB-C suporta transferência de dados, e não apenas carregamento.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_7.png" style={{width:800,height:'auto'}}/></div>

**Etapa 3. Entre no modo de configuração de rede**
Quando a gravação do firmware for concluída, a placa será reiniciada automaticamente. A tela primeiro mostra a imagem de boas-vindas e depois atualiza para a interface de Configuração de Rede. Isso indica que o dispositivo está pronto para se conectar ao Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_1.png" style={{width:300,height:'auto'}}/></div>


### Configuração de rede

**Etapa 4. Configure o Wi-Fi pelo celular**
Use o seu celular para escanear o código QR exibido na tela. Siga as instruções no telefone para inserir o SSID e a senha do seu Wi-Fi local para conectar o EE04 à internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**Etapa 5. Obtenha o código de pareamento**
Quando a configuração de rede for concluída com sucesso, a tela será atualizada novamente e exibirá um **código de pareamento** exclusivo. Você precisará desse código na próxima etapa.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_2.png" style={{width:300,height:'auto'}}/></div>

### Vinculação e atualização na plataforma

**Etapa 6. Vincule o dispositivo no SenseCraft Seeedash**
Acesse a [plataforma SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi/device). Faça login na sua conta. Vá para a seção de gerenciamento de dispositivos e selecione "New Device". Insira o código de pareamento exibido na sua tela E-ink.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**Etapa 7. Crie e envie uma nova interface**     
Na plataforma SenseCraft Seeedash, selecione o template adequado para a tela de 7,5 polegadas para criar uma nova interface ou enviar uma imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_5.png" style={{width:500, height:'auto'}}/></div>

**Etapa 8. Aplique suas imagens**
Quando terminar, clique no botão "Apply" e selecione o seu dispositivo EE04.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_6.png" style={{width:800, height:'auto'}}/></div>

**Etapa 9. Exiba na tela**
Por fim, o EE04 receberá os dados e atualizará a tela de 7,5 polegadas com o seu novo conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_4.png" style={{width:300, height:'auto'}}/></div>


## Introdução ao Arduino

### Instalar a biblioteca Seeed GFX2

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e **não** é compatível com ela. Se você instalou a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Baixe e instale a biblioteca Seeed GFX2 a partir do GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

Após baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### Configure e grave o programa

Conforme mostrado na imagem, navegue até o exemplo por meio deste menu:
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → XIAO ePaper Display Board - EE04 → 7.5-inch ePaper - Monochrome 800x480 → 7_5_inch_Monochrome_HelloWorld

:::note
Este guia usa o **ePaper monocromático de 7,5 polegadas (800 x 480)** como exemplo. Se você tiver uma tela diferente, em vez disso abra a pasta de exemplo que corresponde ao modelo do seu próprio painel em `EE04`.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/GFX2_EE04_demo_1.png" style={{width:800, height:'auto'}}/></div>

Depois disso, vá em **Tools** -> **Board** -> **XIAO ESP32S3 Plus** e **Tools** -> **Port** -> **Select the port your board is connected to**. 

Observe que o PSRAM deve estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

Em seguida, clique em **Upload** para enviar o código.
Agora você verá o resultado na sua tela de ePaper! A seguir está o resultado do exemplo HelloWorld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/GFX2_EE04_demo.png" style={{width:300, height:'auto'}}/></div>

## Visão geral do software

### Botões de usuário na XIAO ePaper Display Board(ESP32-S3) - EE04

Esta seção demonstra como ler os estados dos botões e responder aos pressionamentos usando Arduino.
Todos os botões são ativos em nível baixo, o que significa que leem LOW quando pressionados e HIGH quando soltos.
Exemplo básico de leitura de botão
Este exemplo demonstra como detectar pressionamentos de botões e imprimir mensagens no monitor serial.

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 2;   // KEY0 - GPIO2
const int BUTTON_KEY1 = 3;   // KEY1 - GPIO3
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // Wait for serial port to connect
  }

  Serial.println("=================================");
  Serial.println("Press any button to see output");
  Serial.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY1
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial.println("KEY0 (GPIO2) pressed!");
    } else {
      Serial.println("KEY0 (GPIO2) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial.println("KEY1 (GPIO3) pressed!");
    } else {
      Serial.println("KEY1 (GPIO3) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY3
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

### Bateria de usuário na XIAO ePaper Display Board(ESP32-S3) - EE04

Ao operar com alimentação por bateria:

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações

- A vida útil da bateria depende da frequência de atualização (tipicamente 3 meses com carga completa usando as configurações padrão)

- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível da bateria estiver abaixo de 20%

:::tip
Se você quiser escrever algum código por conta própria para ler a tensão da bateria, será mais preciso adicionar um atraso de 10 ms antes da função analogRead().
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04battery.jpg" style={{width:700, height:'auto'}}/></div>

```cpp
#define VOLTAGE_PIN A0 //GPIO1
#define ADC_ENABLE_PIN A5 //GPIO6

void setup() {
  Serial.begin(115200);
  delay(10);

  pinMode(VOLTAGE_PIN, INPUT);
  pinMode(ADC_ENABLE_PIN, OUTPUT);
  digitalWrite(ADC_ENABLE_PIN , HIGH);
}


void loop() {
  analogReadResolution(12); 
  int adcValue = analogRead(VOLTAGE_PIN);
  float voltage = (adcValue / 4096.0) *7.16;
  Serial.print("ADC Value: ");
  Serial.print(adcValue);
  Serial.print(" Voltage: ");
  Serial.print(voltage, 3);
  Serial.println(" V");
  delay(10);
}
```

## Recursos

- **[PDF]** [Esquemático do Seeed Studio XIAO ePaper Display EE04](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Arquivo 3D Grabcad do Seeed Studio XIAO ePaper Display EE04](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [SCH&PCB do Seeed Studio XIAO ePaper Display EE04](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
