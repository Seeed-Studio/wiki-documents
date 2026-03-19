---
description: Aprenda como usar o chat com IA do Cursor para desenvolver aplicações Zigbee com o XIAO ESP32C6 e sensores
title: Usando o Cursor para Criar Projetos Zigbee com XIAO ESP32C6
image: https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.webp
slug: /use_cursor_create_zigbee_prj
last_update:
  date: 03/04/2025
  author: Citric
createdAt: '2025-03-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/use_cursor_create_zigbee_prj/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Usando o Cursor para Criar Projetos Zigbee com XIAO ESP32C6

Este guia mostrará como usar o chat com IA do Cursor para desenvolver aplicações Zigbee com o XIAO ESP32C6 e sensores. Ao final deste tutorial, você será capaz de usar de forma independente o Chat do Cursor para desenvolver aplicações Zigbee com sua placa XIAO e sensores.

## O que é o Cursor?

Cursor é um editor de código com IA, construído sobre o Visual Studio Code. Ele integra poderosos recursos de IA que podem ajudar você a escrever, entender e depurar código com mais eficiência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor.png" style={{width:600, height:'auto'}}/></div>

### Por que usar o Cursor para desenvolvimento embarcado?

Cursor oferece várias vantagens para o desenvolvimento de software embarcado:

1. **Geração de código**: o Cursor pode gerar código com base em seus requisitos, economizando tempo e esforço.
2. **Assistência ciente de contexto**: o Cursor entende a estrutura do seu projeto e pode fornecer sugestões relevantes.
3. **Ajuda na depuração**: o Cursor pode ajudar a identificar e corrigir bugs no seu código.
4. **Ferramenta de aprendizado**: para iniciantes, o Cursor pode explicar conceitos complexos e fornecer insights educacionais.
5. **Eficiência**: o Cursor pode ajudá-lo a navegar por grandes bases de código e entender rapidamente bibliotecas desconhecidas.

Para sistemas embarcados como o XIAO ESP32C6, o Cursor pode ajudar você a entender APIs específicas de hardware, gerar código boilerplate para interações com sensores e solucionar problemas de integração hardware–software.

## Materiais necessários

Para este tutorial, você vai precisar de:

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C6</th>
   <th>Sensor de Temperatura e Umidade Grove DHT11</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- Cabos Grove
- Cabo USB-C
- Computador com Arduino IDE instalado
- Aplicativo Cursor (vamos instalá-lo na próxima seção)

:::tip
Este tutorial usa o Sensor de Temperatura e Umidade DHT11 como exemplo. Se você tiver outros sensores, sinta-se à vontade para experimentá-los também. Para a melhor experiência, recomendamos o uso de tipos de sensores atualmente suportados pelo [ESP Zigbee SDK](https://github.com/espressif/esp-zigbee-sdk). Isso garantirá compatibilidade e uma implementação mais tranquila ao criar seus projetos Zigbee.
:::

## Instalando o Cursor

Siga estas etapas para instalar o Cursor em seu sistema operacional:

<Tabs>
<TabItem value="Windows" label="Windows" default>

1. Visite a [página de download do Cursor](https://cursor.sh/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/windows_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. Clique em "Windows".
3. Execute o instalador baixado.
4. Siga as instruções na tela para concluir a instalação.

</TabItem>
<TabItem value="MACOS" label="MACOS">

1. Visite a [página de download do Cursor](https://cursor.sh/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/mac_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. Clique em "MacOS".
3. Abra o arquivo .dmg baixado.
4. Arraste o app Cursor para a pasta Applications.
5. Abra o Cursor a partir da pasta Applications.

</TabItem>
</Tabs>

## Assinatura do Cursor

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor_price.png" style={{width:1000, height:'auto'}}/></div>

O Cursor oferece diferentes níveis de assinatura para atender a várias necessidades dos usuários:

**Plano Free Hobby**

O Cursor pode ser baixado e usado gratuitamente com o plano Hobby, que inclui:

- 2000 completions
- 50 slow premium requests
- Um teste de duas semanas dos recursos Pro

Este nível gratuito é suficiente para começar e explorar os recursos do Cursor.

**Planos pagos**

Para recursos mais avançados e limites de uso maiores, o Cursor oferece opções de assinatura paga:

**Plano Pro (US$ 20/mês)**

- Completions ilimitadas
- 500 fast premium requests por mês
- slow premium requests ilimitadas

**Plano Business (US$ 40/usuário/mês)**

- Todos os recursos do Pro
- Aplicar o modo de privacidade em toda a organização
- Faturamento de equipe centralizado
- Dashboard de administração com estatísticas de uso
- SSO SAML/OIDC

Você pode ver todos os detalhes de preços na [página de preços do Cursor](https://www.cursor.com/pricing).

É importante observar que, independentemente de qual plano você use, todo o código gerado no Cursor pertence a você e pode ser usado como quiser, inclusive para fins comerciais.

## Configurando o Cursor

Após instalar o Cursor, siga estas etapas para configurá-lo:

1. Inicie o Cursor
2. Faça login com sua conta ou crie uma nova
3. Verifique se o painel de Chat está acessível (geralmente no lado direito da interface)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/1.png" style={{width:1000, height:'auto'}}/></div>

## Abrindo os exemplos Zigbee

Ao usar o Cursor para gerar código para o seu projeto, fornecer código de exemplo pode melhorar significativamente a precisão do projeto gerado. Os exemplos servem como um ponto de referência para o Cursor, permitindo que ele entenda a estrutura, a sintaxe e os requisitos específicos do seu projeto. Ao analisar esses exemplos, o Cursor pode gerar um código mais preciso e relevante, adaptado às suas necessidades.

No contexto do nosso projeto Zigbee, encontrar o exemplo certo ajuda o Cursor a:

- Entender as funcionalidades específicas necessárias
- Identificar as bibliotecas e funções apropriadas a serem usadas
- Gerar código compatível com o hardware e as interfaces que você está usando

Ao fornecer um exemplo relevante, você garante que o código gerado tenha mais chances de funcionar corretamente e atender aos requisitos do seu projeto, economizando tempo e esforço em depuração e modificações.

Agora, vamos localizar e abrir os exemplos Zigbee fornecidos pelo pacote ESP32 Arduino:

1. Primeiro, certifique-se de ter instalado o **pacote de placas ESP32 mais recente** no Arduino IDE:

- Abra o Arduino IDE
- Vá em **Tools > Board > Boards Manager**
- Procure por **esp32**
- Encontre **esp32 by Espressif Systems**
- Clique em **Install** ou **Update** para obter a versão mais recente
- Aguarde a conclusão da instalação

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/3.png" style={{width:1000, height:'auto'}}/></div>

2. Navegue até o diretório de exemplos Zigbee:

Os seguintes caminhos usam a versão 3.1.3 do pacote de placas ESP32 como exemplo. Substitua `3.1.3` pelo número da versão instalada, se for diferente:

- No Windows:

```
C:\Users\[YourUsername]\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.1.3\libraries\Zigbee\
```

- No macOS:

```
/Users/[YourUsername]/Library/Arduino15/packages/esp32/hardware/esp32/3.1.3/libraries/Zigbee/
```

3. Abra o Cursor e selecione **Open Folder** no menu File.

4. Navegue até o caminho do diretório Zigbee da etapa 2 e clique em **Open**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/4.png" style={{width:1000, height:'auto'}}/></div>

## Selecionando o exemplo correto

Antes de usar o Chat do Cursor para gerar seu código, você precisa identificar o exemplo mais apropriado para usar como ponto de partida:

### Determinando o tipo do seu dispositivo

Os dispositivos Zigbee geralmente se enquadram em duas categorias principais, e entender isso é crucial para selecionar o código de exemplo correto:

1. **Sensores**:
   - Sensores são dispositivos que "sentem" o ambiente e coletam dados
   - Eles convertem informações físicas do mundo real em sinais eletrônicos
   - Sensores apenas "leem" dados e depois os transmitem para a rede

   - **Exemplos**:
     - Sensores de temperatura: medem a temperatura ao redor
     - Sensores de umidade: medem os níveis de umidade no ar
     - Sensores de luz: detectam a intensidade da luz ambiente
     - Sensores de movimento: detectam se objetos estão se movendo nas proximidades
     - Sensores de gás: detectam concentrações de gases específicos

2. **Atuadores**:
   - Atuadores são dispositivos que "executam ações"
   - Eles recebem comandos e afetam o mundo físico
   - Atuadores são responsáveis por "mudar" o estado de algo

   - **Exemplos**:
     - Interruptores de luz: ligam ou desligam luzes
     - Controladores de motor: controlam a rotação do motor
     - Relés: controlam dispositivos elétricos de alta potência
     - Controladores de válvula: controlam o fluxo de água ou ar
     - Fechaduras de porta: trancam ou destrancam portas

**Como determinar o tipo do seu dispositivo**:

- Se o seu dispositivo coleta principalmente dados (lê informações), ele é um sensor
- Se o seu dispositivo executa principalmente ações (muda estados), ele é um atuador
- Alguns dispositivos podem ter ambas as funcionalidades; nesse caso, você deve escolher com base na função principal

No nosso exemplo, o DHT11 é um sensor típico porque lê dados de temperatura e umidade, mas não muda o ambiente.

### Identificando o tipo de interface

Em seguida, determine o tipo de interface que seu sensor usa:

- **GPIO**: pinos digitais ou analógicos simples
- **I2C**: interface de dois fios para comunicação
- **SPI**: Serial Peripheral Interface
- **UART**: comunicação serial

O DHT11 usa uma interface GPIO simples com uma única linha de dados.

### Verificando o Suporte a Dispositivos Zigbee

Antes de prosseguir, é importante verificar se o tipo de dispositivo desejado é suportado pelo ESP Zigbee SDK. Você pode verificar os tipos de dispositivos suportados em:

- [ESP Zigbee Device Types](https://github.com/espressif/esp-zigbee-sdk/blob/main/components/esp-zigbee-lib/include/esp_zigbee_type.h)

Este arquivo de cabeçalho contém todos os tipos de dispositivos atualmente suportados pela implementação Zigbee da ESP. Revise este arquivo para:

1. Confirmar se o seu tipo de dispositivo é suportado
2. Anotar o ID específico do dispositivo e os IDs de cluster de que você precisará
3. Entender quais capacidades estão disponíveis para o seu tipo de dispositivo

Se o seu tipo de dispositivo não estiver listado, você pode precisar:

- Escolher um tipo de dispositivo similar suportado que atenda às suas necessidades
- Considerar implementar um tipo de dispositivo personalizado (avançado)
- Contatar o suporte da ESP para obter orientação

### Encontrando o Exemplo Mais Próximo

Navegue pelos exemplos na biblioteca Zigbee e encontre um que corresponda da forma mais próxima possível às suas necessidades. Para o nosso sensor DHT11, procure por exemplos como:

- `ZigbeeTemperatureSensor`
- `ZigbeeHumiditySensor`
- Qualquer exemplo que demonstre leitura de um sensor via GPIO

Felizmente, a ESP fornece um exemplo "Zigbee_Temp_Hum_Sensor_Sleepy" em seus exemplos Zigbee, que corresponde perfeitamente às nossas necessidades para criar um projeto de sensor de temperatura e umidade. Este exemplo demonstra:

- Como implementar um dispositivo sensor de temperatura e umidade
- Como configurar o dispositivo como um end device sleepy para economizar energia
- Como reportar leituras do sensor periodicamente
- Como lidar com rede Zigbee e transmissão de dados

Você pode encontrar este exemplo em:
`zigbee/example/Zigbee_Temp_Hum_Sensor_Sleepy`

Este exemplo servirá como um excelente ponto de partida para o nosso projeto de sensor Zigbee baseado em DHT11.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/5.png" style={{width:1000, height:'auto'}}/></div>

## Determinando as Conexões dos Pinos

Para o XIAO ESP32C6 e o sensor DHT11, precisamos decidir quais pinos usar:

1. O sensor DHT11 requer um único pino de dados.

2. Vamos conectá-lo ao pino D0 (GPIO1) no XIAO ESP32C6.

:::tip
Para exemplos do XIAO, apenas dispositivos GPIO (Digital/Analógico) e de protocolo SPI exigem configuração manual de pinos. Para dispositivos I2C e UART, as definições de pinos já estão pré-configuradas no pacote de placas do XIAO, então você pode pular esta etapa.
:::

## Reunindo a Documentação Técnica

Ter a documentação técnica do seu sensor é crucial. Se você estiver usando produtos da Seeed, pode encontrar documentação detalhada e recursos para o seu sensor ou atuador na **[Wiki oficial da Seeed Studio](https://wiki.seeedstudio.com/pt-br/)**. A seção de recursos da wiki também contém folhas de dados (datasheets) para produtos Grove que você pode fornecer ao Cursor. Por exemplo, para o sensor DHT11 usado neste projeto:

- [Página Wiki do Grove DHT11](https://wiki.seeedstudio.com/pt-br/Grove-TemperatureAndHumidity_Sensor/)

Se você estiver usando sensores de outros fabricantes, entre em contato diretamente com eles para obter a documentação técnica necessária.

## Usando o Chat do Cursor para Gerar Código

Agora que temos todas as informações necessárias, podemos usar o Chat do Cursor para gerar nosso código de aplicação Zigbee.

Agora é a hora de você criar um prompt para o Chat do Cursor.

### Modelo de Projeto de Sensor

Se você, como eu, optar por usar um sensor como dispositivo, pode se referir ao prompt a seguir.

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Sensor details:
- Type: [sensor model]
- Connections: [pin connections]

Sensing specifications:
- Parameters to measure: [measurement values]
- Transmission frequency: [sending interval]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

Vamos detalhar como preencher o modelo de prompt e fornecer um exemplo usando o sensor DHT11:

1. **Nome do projeto**: Escolha um nome descritivo para o seu projeto
2. **Detalhes do sensor**:
   - Tipo: Especifique o modelo exato do sensor
   - Conexões: Liste todas as conexões de pinos entre o sensor e o XIAO ESP32C6
3. **Especificações de medição**:
   - Parâmetros: Liste o que você quer medir (temperatura, umidade, etc.)
   - Frequência de transmissão: Com que frequência você quer enviar dados (por exemplo, a cada 5 segundos)
4. **Materiais de referência**: Inclua links para folhas de dados ou documentação

Aqui está um prompt completo para um projeto de sensor de temperatura e umidade com DHT11:

```
Please refer to the code and then create an Arduino sensor project with ESP32-C6 using Zigbee protocol.

Project name: Zigbee_DHT11_XIAO

Sensor details:
- Type: DHT11 Temperature and Humidity Sensor
- Connections: DHT11 data pin connected to D2 of XIAO ESP32C6

Sensing specifications:
- Parameters to measure: Temperature (°C) and Relative Humidity (%)
- Transmission frequency: Every 1 hour

Reference materials:
- Documentation: 
  - DHT11 Sensor: https://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/
  - XIAO ESP32C6: https://wiki.seeedstudio.com/xiao_pin_multiplexing_esp32c6/

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

### Modelo de Projeto de Atuador

Se você quiser trabalhar com um atuador em vez disso, pode usar o seguinte modelo de prompt. Vamos ver como estruturar um prompt para um projeto de atuador:

```
Please refer to the code and then create an Arduino actuator project with ESP32-C6 using Zigbee protocol.

Project name: [project name]

Actuator details:
- Type: [actuator model]
- Connections: [pin connections]

Control specifications:
- Default behavior: [startup state]

Reference materials:
- Documentation: [documentation links]

Generate a complete project in the Example directory. Name the main file [project name with spaces replaced by underscores].ino with comprehensive code comments.
```

:::tip
Ao construir seu primeiro projeto com o Cursor, é recomendável começar com funcionalidades simples e básicas, em vez de lógica e requisitos complexos. Essa abordagem reduz significativamente a probabilidade de o Cursor gerar código incorreto. Primeiro, deixe o Cursor criar um programa básico funcional que você possa verificar que está funcionando corretamente. Depois que você tiver uma base sólida, poderá adicionar gradualmente mais recursos e complexidade para aprimorar seu projeto. Essa abordagem iterativa leva a um código mais confiável e de mais fácil manutenção.
:::

Depois de preparar seu prompt com todos os detalhes específicos sobre o seu projeto, siga estas etapas:

1. Abra o painel de Chat do Cursor (geralmente clicando no ícone de chat na barra lateral).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/6.png" style={{width:1000, height:'auto'}}/></div>

2. Localize o código de exemplo que melhor corresponda aos requisitos do seu projeto. Para o nosso projeto de sensor de temperatura e umidade com DHT11, usaremos o exemplo "Zigbee_Temp_Hum_Sensor_Sleepy".

3. Arraste e solte o(s) arquivo(s) de código de exemplo do diretório de exemplos Zigbee na janela do Chat do Cursor. Isso ajuda o Cursor a entender a estrutura e os requisitos das implementações de sensores Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/7.png" style={{width:1000, height:'auto'}}/></div>

4. Copie e cole nosso prompt pré-escrito no campo de entrada do chat e pressione Enter. Aguarde o Cursor gerar seu projeto com base no prompt e no código de exemplo.

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/9.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

5. Clique no botão **Accept** para salvar o código gerado. Isso criará os arquivos do projeto no seu workspace.

## Revisar o Código Gerado

Depois que o Cursor gerar o código, é importante revisá-lo cuidadosamente antes de fazer o upload para o seu dispositivo. Aqui estão os principais aspectos a verificar:

1. Configuração de Pinos

- Verifique se todas as atribuições de pinos correspondem às suas conexões físicas
- Verifique se os pinos especificados estão realmente disponíveis no XIAO ESP32C6
- Garanta que não existam conflitos de pinos (por exemplo, o mesmo pino usado para múltiplas finalidades)
- Confirme se os pinos suportam as funções necessárias (analógica, digital, I2C, etc.)

2. Verificação de Funcionalidade

Compare o código gerado com seus requisitos:

- Ele implementa todos os recursos solicitados?

Por exemplo, no programa que ele me forneceu, os pinos estão definidos em termos de numeração GPIO, o que pode exigir a leitura da wiki e depois verificar se a numeração A/D do XIAO corresponde à numeração GPIO correta, o que é mais trabalhoso. Para isso, podemos pedir ao Cursor para usar os pinos da mesma forma que A/D.

<details>

<summary>Clique aqui para visualizar o código completo</summary>

```cpp
/**
 * @brief DHT11 Temperature and Humidity Sensor with Zigbee for XIAO ESP32C6
 * 
 * This example demonstrates how to create a Zigbee end device that measures temperature
 * and humidity using a DHT11 sensor and reports the data every hour.
 * 
 * Hardware Requirements:
 * - XIAO ESP32C6 board
 * - DHT11 Temperature and Humidity Sensor
 * 
 * Connections:
 * - DHT11 Data Pin -> D2 (GPIO8) of XIAO ESP32C6
 * - DHT11 VCC -> 3.3V
 * - DHT11 GND -> GND
 * 
 * The device operates as a Zigbee end device and goes into deep sleep between measurements
 * to conserve power.
 */

#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"
#include "DHT.h"

/* Pin Definitions */
#define DHT_PIN 8  // D2 on XIAO ESP32C6
#define BOOT_BUTTON 9  // Boot button on XIAO ESP32C6

/* DHT11 Sensor Configuration */
#define DHT_TYPE DHT11
DHT dht(DHT_PIN, DHT_TYPE);

/* Zigbee Configuration */
#define TEMP_SENSOR_ENDPOINT_NUMBER 10

/* Sleep Configuration */
#define uS_TO_S_FACTOR 1000000ULL  // Conversion factor for micro seconds to seconds
#define TIME_TO_SLEEP  3600        // Sleep for 1 hour (3600 seconds)

/* Global Variables */
ZigbeeTempSensor zbTempSensor = ZigbeeTempSensor(TEMP_SENSOR_ENDPOINT_NUMBER);

/************************ Sensor Functions *****************************/
void measureAndSleep() {
  // Read temperature and humidity from DHT11
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // Check if readings are valid
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT11 sensor!");
    delay(1000);
    return;
  }

  // Update temperature and humidity values in Temperature sensor EP
  zbTempSensor.setTemperature(temperature);
  zbTempSensor.setHumidity(humidity);

  // Report temperature and humidity values
  zbTempSensor.report();
  Serial.printf("Reported temperature: %.2f°C, Humidity: %.2f%%\r\n", temperature, humidity);

  // Add small delay to allow the data to be sent before going to sleep
  delay(100);

  // Put device to deep sleep
  // Serial.println("Going to sleep for 1 hour");
  // esp_deep_sleep_start();
}

/********************* Arduino Setup **************************/
void setup() {
  Serial.begin(115200);

  // Initialize DHT11 sensor
  dht.begin();

  // Init button switch
  pinMode(BOOT_BUTTON, INPUT_PULLUP);

  // Configure the wake up source
  // esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);

  // Set Zigbee device information
  zbTempSensor.setManufacturerAndModel("Seeed", "XIAO_DHT11_Sensor");

  // Set temperature measurement range (-20°C to 60°C for DHT11)
  zbTempSensor.setMinMaxValue(-20, 60);

  // Set tolerance for temperature measurement (±2°C accuracy for DHT11)
  zbTempSensor.setTolerance(2);

  // Configure humidity sensor (20-90% RH range for DHT11, ±5% RH accuracy)
  zbTempSensor.addHumiditySensor(20, 90, 5);

  // Set power source to battery (assuming battery-powered operation)
  zbTempSensor.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);

  // Add endpoint to Zigbee Core
  Zigbee.addEndpoint(&zbTempSensor);

  // Create Zigbee configuration for End Device
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  zigbeeConfig.nwk_cfg.zed_cfg.keep_alive = 60000; // 60 second keep-alive

  // Start Zigbee
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee failed to start!");
    Serial.println("Rebooting...");
    ESP.restart();
  }

  Serial.println("Connecting to Zigbee network");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nSuccessfully connected to Zigbee network");

  // Allow time for connection establishment
  delay(1000);
}

/********************* Arduino Loop **************************/
void loop() {
  // Check boot button for factory reset
  if (digitalRead(BOOT_BUTTON) == LOW) {
    delay(100); // Debounce
    int startTime = millis();
    while (digitalRead(BOOT_BUTTON) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.println("Factory reset initiated. Rebooting in 1s...");
        delay(1000);
        Zigbee.factoryReset();
      }
    }
  }

  // Measure sensor data and go to sleep
  measureAndSleep();
} 
```

</details>

Tudo o que você precisa fazer é selecionar a parte que deseja alterar, digitar a palavra de prompt e pressionar Enter.

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/11.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Verificar e Enviar o Programa

Agora que o Cursor gerou o código do nosso projeto Zigbee, precisamos verificar se ele funciona corretamente. A melhor maneira de fazer isso é usando o Arduino IDE, que fornece excelentes ferramentas para compilar e enviar código para nossa placa XIAO ESP32C6. Vamos mudar para o Arduino IDE e passar pelo processo de verificação:

1. Abra o arquivo principal no Arduino IDE.
2. Selecione a placa **XIAO ESP32C6** no menu Boards.
3. Selecione a porta apropriada.
4. Clique em **Verify** para compilar o código.
5. Se houver algum erro, volte ao Chat do Cursor e peça ajuda para corrigi-los.
6. Quando o código for compilado com sucesso, envie-o para o seu XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/10.png" style={{width:1000, height:'auto'}}/></div>

Se tudo correr bem, você agora deverá ter um dispositivo Zigbee que pode ser descoberto pelo Home Assistant (desde que você tenha um gateway Zigbee na sua configuração do Home Assistant).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/12.png" style={{width:1000, height:'auto'}}/></div>

## Solução de Problemas com o Cursor

Se você encontrar problemas com o código gerado, pode pedir ajuda ao Cursor:

1. Descreva o erro específico ou o problema que você está enfrentando
2. Inclua quaisquer mensagens de erro do Arduino IDE
3. Peça ao Cursor para sugerir correções ou melhorias
4. Implemente as alterações sugeridas e teste novamente

A IA do Cursor é particularmente boa em depuração e muitas vezes pode identificar problemas que podem ser difíceis de detectar manualmente.

Por exemplo, se você estiver usando a funcionalidade Zigbee pela primeira vez ou encontrar um erro de compilação como

```
#error Zigbee end device mode is not selected in Tools->Zigbee mode
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/15.png" style={{width:1000, height:'auto'}}/></div>

devido a descuido, você sempre pode pedir orientação ao Cursor. Basta digitar:

***I got a compilation error in Arduino IDE saying 'Compilation error: #error Zigbee end device mode is not selected in Tools->Zigbee mode'. What should I do?***

O Cursor provavelmente sugerirá verificar o menu Tools no Arduino IDE e selecionar o modo Zigbee apropriado:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/16.png" style={{width:400, height:'auto'}}/></div>

Você pode perguntar ao Cursor sobre quaisquer erros que encontrar, e ele ajudará a orientá-lo durante o processo de resolução. Alguns outros problemas comuns sobre os quais você pode querer perguntar incluem:

- Problemas de instalação de biblioteca
- Erros de configuração de pinos
- Problemas de conexão de sensores
- Configuração de protocolo de comunicação
- Questões de gerenciamento de energia

Basta descrever o problema claramente no seu prompt, e o Cursor fornecerá sugestões e soluções relevantes.

## Aprimorando Seu Programa com o Cursor

Depois de fazer a funcionalidade básica Zigbee funcionar, você pode usar o Cursor para adicionar mais recursos e melhorias ao seu programa. Vamos ver um exemplo de como aprimorar o código adicionando uma verificação de inicialização da porta serial.

Isso é particularmente útil durante o desenvolvimento e a depuração, pois garante que você não perca nenhuma saída serial ao aguardar que a porta serial esteja pronta antes de prosseguir com o setup.

1. Abra seu projeto no Cursor e localize a função `setup()` no seu código.

2. No painel de Chat, descreva o que você deseja adicionar. Por exemplo:
   "Add code to wait for serial port to be ready before proceeding with setup"

3. O Cursor sugerirá modificações como esta:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.png" style={{width:1000, height:'auto'}}/></div>

Além desses pequenos aprimoramentos, podemos maximizar o valor do Zigbee implementando recursos de economia de energia em cima da funcionalidade básica. Uma das principais vantagens do Zigbee é sua capacidade de baixo consumo de energia, que pode ser ainda mais otimizada por meio da implementação adequada de modos de sono.

Veja como você pode pedir ao Cursor para adicionar funcionalidade de deep sleep ao seu projeto de sensor:

1. Abra o painel de Chat e solicite a implementação de deep sleep:

***Modify the programme so that the temperature and humidity values are reported once every three hours. Deep sleep the rest of the time to save power.***

2. O Cursor sugerirá modificações de código que incluem:

- Atualizar a duração do sono
- Atualizar a mensagem de sono para um feedback melhor
- Atualizar a documentação para refletir o novo intervalo de envio de dados.
- Voltar para deep sleep por 3 horas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/14.png" style={{width:1000, height:'auto'}}/></div>

Essa otimização de energia é particularmente valiosa para nós de sensores alimentados por bateria, potencialmente estendendo a vida útil da bateria de dias para meses ou até anos, dependendo da frequência de envio de dados e do tipo de sensor.

O Cursor pode ajudá-lo a implementar todos esses recursos - apenas seja específico em seus requisitos ao pedir assistência.

## Conclusão

Agora você aprendeu como usar o chat com IA do Cursor para desenvolver aplicações Zigbee para o XIAO ESP32C6 com sensores. Essa abordagem pode acelerar significativamente o seu processo de desenvolvimento e ajudá-lo a superar desafios técnicos.

À medida que você se familiariza mais com o Cursor, descobrirá maneiras adicionais de aproveitar seus recursos em seus projetos embarcados. Lembre-se de que a qualidade dos seus prompts afeta muito a qualidade do código gerado, portanto seja específico e detalhado ao descrever seus requisitos.

Este tutorial representa um passo importante para tornar o desenvolvimento embarcado mais acessível. Ao combinar ferramentas de IA como o Cursor com hardwares poderosos como o XIAO ESP32C6, estamos reduzindo as barreiras de entrada para o desenvolvimento de IoT e redes de sensores. Isso é particularmente valioso para:

- Iniciantes que estão apenas começando sua jornada em sistemas embarcados
- Desenvolvedores experientes que desejam acelerar seu processo de prototipagem
- Educadores que ensinam conceitos de IoT e comunicação sem fio
- Makers e hobbistas que desejam criar soluções de casa inteligente

A integração de ferramentas de desenvolvimento assistidas por IA com a tecnologia Zigbee abre novas possibilidades para criar redes de sensores sem fio eficientes em energia e confiáveis. Essa combinação de tecnologias permite ciclos de desenvolvimento mais rápidos, mantendo alta qualidade de código e, em última análise, ajudando a impulsionar a inovação no espaço de IoT.

:::tip
Este artigo foi escrito por Citric com assistência do Cursor.
:::

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
