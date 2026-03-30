---
description: XIAO ESP32-C3 iBeacon com Sensor BME680 Usando ESP-IDF
title: XIAO ESP32-C3 iBeacon com Sensor BME680 Usando ESP-IDF
keywords:
  - ESP-IDF
  - XIAO
image: https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp
slug: /xiao-c3-ibeacon
last_update:
  date: 04/14/2025
  author: Priyanshu Roy
createdAt: '2025-04-14'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao-c3-ibeacon/
---

# XIAO ESP32-C3 iBeacon com Sensor BME680 Usando ESP-IDF

Neste tutorial, vamos construir um sistema de monitoramento de temperatura de baixo consumo que transmite dados ambientais usando Bluetooth Low Energy (BLE) no formato iBeacon. Usaremos o Seeed Studio XIAO ESP32-C3, a placa de expansão XIAO e um sensor ambiental Grove BME680. Este projeto demonstra como construir aplicações embarcadas robustas usando ESP-IDF — o framework de desenvolvimento oficial da Espressif.

## Visão Geral

Nosso sistema irá:

1. Ler temperatura, umidade e pressão do sensor BME680
2. Empacotar esses dados em pacotes de anúncio BLE
3. Acordar periodicamente, realizar medições, anunciar dados e voltar ao modo de suspensão para economizar energia da bateria

### Fluxograma do Sistema

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/1.png" style={{width:300, height:800}}/></div>

Este fluxograma ilustra o ciclo de operação principal do nosso sistema, desde o despertar até o retorno ao modo de suspensão profunda.

## Requisitos de Hardware

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base para XIAO</th>
    <th>Sensor Ambiental Grove BME680</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- Cabo USB Tipo-C
- Computador com ESP-IDF instalado

## Requisitos de Software

- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) (v5.0 ou posterior)
- Git
- [Repositório GitHub do Projeto](https://github.com/Priyanshu0901/xiao_ibeacon)

## Passo 1: Configuração do Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/2.webp" style={{width:800, height:'auto'}}/></div>

1. **Conecte o sensor BME680 à Placa de Expansão XIAO**:

   - Conecte o sensor Grove BME680 a uma das portas I2C da Placa de Expansão XIAO.
   - O sensor se comunica via I2C, portanto qualquer porta Grove compatível com I2C funcionará.

2. **Monte o XIAO ESP32-C3 na placa de expansão**:

   - Alinhe cuidadosamente e insira o módulo XIAO ESP32-C3 na placa de expansão.
   - Certifique-se de que os pinos estejam corretamente alinhados e o módulo esteja firmemente encaixado.

3. **Conecte ao seu computador**:
   - Use um cabo USB Tipo-C para conectar a placa de expansão XIAO ao seu computador.

## Passo 2: Configurando o Ambiente de Desenvolvimento

1. **Instale o ESP-IDF**:
   Siga as [instruções oficiais de instalação](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) para o seu sistema operacional.

   Para Linux, você pode usar:

   ```bash
   mkdir -p ~/esp
   cd ~/esp
   git clone --recursive https://github.com/espressif/esp-idf.git
   cd esp-idf
   ./install.sh
   . ./export.sh
   ```

2. **Clone o repositório do projeto**:

   ```bash
   cd ~/Desktop
   git clone --recurse-submodules https://github.com/Priyanshu0901/xiao_ibeacon.git
   cd xiao_ibeacon
   ```

   :::caution
   O flag `--recurse-submodules` é fundamental, pois o projeto depende de bibliotecas externas incluídas como submódulos Git. Sem isso, a compilação falhará.

   Se você já clonou sem os submódulos, execute:

   ```bash
   git submodule update --init --recursive
   ```

   :::

## Passo 3: Estrutura do Projeto e Compreensão dos Componentes

O projeto consiste em três componentes principais:

1. **Componente do Sensor BME680 (`sensor_t_a_h`)**:

   - Gerencia a comunicação com o sensor BME680
   - Gerencia a inicialização, leitura e processamento de dados do sensor
   - Fornece dados de temperatura, umidade e pressão

2. **Componente BLE Beacon (`ble_beacon`)**:

   - Configura a pilha BLE
   - Cria e transmite anúncios BLE com dados do sensor
   - Gerencia a inicialização e limpeza do BLE

3. **Componente de Gerenciamento de Energia (`power_manager`)**:
   - Gerencia a funcionalidade de suspensão profunda
   - Gerencia a operação eficiente em termos de energia
   - Controla as fontes de despertar e a duração do sono

### Interação entre Componentes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/3.png" style={{width:800, height:'auto'}}/></div>

Este diagrama mostra como os diferentes componentes de software interagem com os elementos de hardware do sistema.

## Passo 4: Compreendendo a Configuração

Antes de compilar, vamos entender as configurações principais:

1. **Configurações da Aplicação Principal** (em `main.c`):

   - `ADV_TIME_MS`: Duração do anúncio BLE (500ms)
   - `POLL_INTERVAL_MS`: Com que frequência consultar o sensor (150ms)
   - `TIMEOUT_MS`: Tempo máximo de espera pelas leituras do sensor (2000ms)
   - `SLEEP_TIME_MS`: Quanto tempo dormir entre as medições (~29,3 segundos)

2. **Configuração do Sensor** (em `components/sensor_t_a_h/Kconfig`):

   ```
   menu "BME68X Configuration"
       config BME68X_I2C_ADDR
           hex "BME68X I2C Address"
           default 0x76
           help
               I2C address of the BME68X sensor. Default is 0x76.
               Use 0x77 if SDO pin is pulled high.

       choice BME68X_INTERFACE
           prompt "BME68X Interface"
           default BME68X_USE_I2C
           help
               Select the interface to use with BME68X sensor.

           config BME68X_USE_I2C
               bool "I2C Interface"

           config BME68X_USE_SPI
               bool "SPI Interface"
       endchoice

       if BME68X_USE_I2C
           config BME68X_I2C_PORT
               int "I2C Port Number"
               range 0 1
               default 0
               help
                   I2C port number for BME68X.

           config BME68X_I2C_SDA_PIN
               int "I2C SDA GPIO"
               range 0 48
               default 12
               help
                   GPIO pin for I2C SDA.

           config BME68X_I2C_SCL_PIN
               int "I2C SCL GPIO"
               range 0 48
               default 13
               help
                   GPIO pin for I2C SCL.

           config BME68X_I2C_CLOCK_SPEED
               int "I2C Clock Frequency (Hz)"
               range 100000 400000
               default 100000
               help
                   I2C clock frequency for BME68X. Standard mode (100 KHz) or Fast mode (400 KHz).
       endif
   endmenu
   ```

3. **Configuração BLE** (em `components/ble_beacon/common.h`):
   O nome do dispositivo BLE é definido no arquivo `common.h`:

   ```c
   #define DEVICE_NAME "Xiao_TempSensor"
   ```

### Modificando Parâmetros de Configuração

#### Usando a Ferramenta menuconfig do ESP-IDF

O framework ESP-IDF fornece uma poderosa ferramenta de configuração chamada **menuconfig**, que oferece uma interface de usuário baseada em texto para modificar as configurações do projeto. Esta ferramenta é baseada no Kconfig, o mesmo sistema de configuração usado pelo kernel Linux.

Para iniciar a interface de configuração:

```bash
idf.py menuconfig
```

Isso exibirá uma interface de usuário baseada em texto com categorias de configuração:

```
    Application Configuration  --->
    ESP-IDF Components         --->
    SDK tool configuration     --->
    Compiler options          --->
    Component config          --->
    Bootloader config         --->
    Serial flasher config     --->
```

**Navegação no menuconfig:**

- Use as setas `↑` e `↓` para navegar
- Pressione `Enter` para entrar em um submenu
- Pressione `Esc` para voltar
- Pressione `Space` para alternar opções
- Pressione `Y` para 'Sim' e `N` para 'Não' em opções booleanas
- Pressione `?` para obter ajuda sobre a opção atualmente selecionada
- Pressione `Q` ou `Esc` várias vezes para sair, depois `Y` para salvar as alterações

**Encontrando a Configuração do Sensor:**

1. Navegue até `Component config`
2. Role para baixo para encontrar `BME68X Configuration`
3. Pressione `Enter` para visualizar as configurações do sensor

**Encontrando a Configuração BLE:**

1. Navegue até `Component config`
2. Encontre e entre em `Bluetooth`
3. Selecione `NimBLE Options`
4. Aqui você pode configurar vários parâmetros BLE

##### Configurando os Pinos I2C para o BME680

Para configurar os pinos I2C para o sensor BME680:

1. No menuconfig, navegue até: `Component config` → `BME68X Configuration`
2. Selecione `I2C SDA GPIO` para alterar o pino SDA
3. Insira o número do GPIO para SDA (o padrão é 12, mas para o XIAO ESP32-C3 com a placa de expansão, use 6)
4. Selecione `I2C SCL GPIO` para alterar o pino SCL
5. Insira o número do GPIO para SCL (o padrão é 13, mas para o XIAO ESP32-C3 com a placa de expansão, use 7)
6. Se o seu sensor tiver um endereço I2C diferente, selecione `BME68X I2C Address` e modifique-o

##### Configurando Parâmetros BLE via menuconfig

Embora o nome do dispositivo seja definido no código, outros parâmetros BLE podem ser configurados via menuconfig:

1. Navegue até: `Component config` → `Bluetooth` → `NimBLE Options`
2. Aqui você pode modificar:
   - Número máximo de conexões simultâneas
   - Função BLE (Central/Periférico/Observador/Transmissor)
   - Configurações de segurança
   - Parâmetros GAP e GATT
   - Alocações de memória para a pilha BLE

##### Opções Avançadas de Configuração

Para usuários avançados, opções adicionais de configuração estão disponíveis:

1. **Gerenciamento de Energia:**

   - Navegue até: `Component config` → `Power Management`
   - Ativar/desativar sleep leve automático
   - Configurar DFS (Escalonamento Dinâmico de Frequência)

2. **Criptografia de Flash:**

   - Navegue até: `Security features`
   - Configurar opções de criptografia de flash para implantações seguras

3. **Tabela de Partições:**

   - Navegue até: `Partition Table`
   - Modificar o particionamento de flash para diferentes necessidades de aplicação

4. **Registro de Log:**
   - Navegue até: `Component config` → `Log output`
   - Configurar níveis de log de depuração e destinos de saída

Após fazer suas alterações, pressione `Q` para sair e `Y` para salvar as alterações. Em seguida, reconstrua o projeto com:

```bash
idf.py build
```

#### Alterando o Nome do Dispositivo BLE

Para alterar o nome do dispositivo BLE, você precisa modificar a macro `DEVICE_NAME` em `components/ble_beacon/common.h`:

1. Abra o arquivo:

   ```bash
   nano components/ble_beacon/common.h
   ```

2. Encontre a definição de `DEVICE_NAME` e altere para o nome desejado:

   ```c
   #define DEVICE_NAME "MyCustomSensor"
   ```

3. Salve o arquivo e reconstrua o projeto.

## Passo 5: Compilando e Gravando o Projeto

1. **Navegue até o diretório do projeto**:

   ```bash
   cd ~/Desktop/xiao_ibeacon
   ```

2. **Configure o projeto**:

   ```bash
   idf.py set-target esp32c3
   idf.py menuconfig
   ```

   Navegue pelo menu para verificar ou ajustar as configurações:

   - Component Config → BME680 Sensor Settings
   - Component Config → BLE Beacon Settings
   - Component Config → Power Management

3. **Compile o projeto**:

   ```bash
   idf.py build
   ```

4. **Grave o projeto no XIAO ESP32-C3**:

   ```bash
   idf.py -p /dev/ttyUSB0 flash
   ```

   Nota: Sua porta pode ser diferente (Windows: COM3, COM4, etc.)

5. **Monitore a saída** (opcional):

   ```bash
   idf.py -p /dev/ttyUSB0 monitor
   ```

   Pressione Ctrl+] para sair do monitor.

## Passo 6: Testando o iBeacon

1. **Baixe um aplicativo de Scanner BLE** no seu smartphone:

   - iOS: "LightBlue" ou "nRF Connect"
   - Android: "nRF Connect" ou "BLE Scanner"

2. **Abra o aplicativo e escaneie dispositivos BLE**:

   - Procure por um dispositivo chamado "Xiao_TempSensor"
   - Selecione o dispositivo para visualizar seus dados de anúncio

3. **Entenda os Dados de Anúncio**:
   O anúncio BLE contém:

   - Temperatura (em graus Celsius, escalonada por 100)
   - Umidade (em porcentagem)
   - Pressão (em hPa, escalonada por 10)

4. **Comportamento Esperado**:
   - O dispositivo acorda aproximadamente a cada 30 segundos
   - Realiza leituras do sensor BME680
   - Transmite esses dados por 500ms
   - Em seguida, entra em deep sleep para economizar energia

### Scripts de Teste em Python

O projeto inclui scripts Python para ajudar a testar e validar a funcionalidade do beacon BLE. Vamos explorá-los:

#### Configurando o Ambiente Python

1. Navegue até o diretório de scripts de teste:

   ```bash
   cd ~/Desktop/xiao_ibeacon/test_scripts
   ```

2. Execute o script de configuração para criar e configurar um ambiente virtual:

   ```bash
   # On Linux/macOS
   chmod +x setup_venv.sh
   ./setup_venv.sh

   # On Windows
   setup_venv.bat
   ```

3. Ative o ambiente virtual:

   ```bash
   # On Linux/macOS
   source venv/bin/activate

   # On Windows
   venv\Scripts\activate
   ```

O script de configuração instalará os pacotes necessários:

- `bleak`: Para comunicação BLE
- `colorama`: Para saída colorida no terminal

#### Usando o Script de Scanner BLE

O script de scanner BLE (`ble_beacon_scanner.py`) escaneia anúncios BLE e exibe dados do sensor do nosso beacon.

Principais funcionalidades do scanner:

- Procura por um dispositivo chamado "Xiao_TempSensor"
- Decodifica os dados específicos do fabricante para extrair temperatura, umidade e pressão
- Exibe os valores em uma interface de terminal formatada
- Atualiza continuamente conforme novos anúncios são recebidos

Para executar o scanner:

```bash
python ble_beacon_scanner.py
```

O script exibirá uma saída bem formatada com as leituras mais recentes do sensor:

```
╔═══════════════════════════════════════════════╗
║ Xiao Temperature Sensor Beacon Scanner        ║
╠═══════════════════════════════════════════════╣
║ Last Update: 15:42:27                         ║
║ Signal Strength: -63 dBm                      ║
╠═══════════════════════════════════════════════╣
║ Temperature: 23.45 °C                         ║
║ Humidity: 48 %                                ║
║ Pressure: 1013.2 hPa                          ║
╠═══════════════════════════════════════════════╣
║ Press Ctrl+C to exit                          ║
╚═══════════════════════════════════════════════╝
```

Se você ativar o modo de depuração no script definindo `DEBUG_MODE = True`, verá informações adicionais sobre os anúncios BLE e a análise de dados.

#### Formato dos Dados do Beacon

O beacon transmite dados em um formato comprimido para caber dentro das limitações do anúncio BLE:

1. ID da Empresa: 0x02E5 (Espressif Systems)
2. Temperatura: inteiro com sinal de 16 bits, escalonado por 100 (divida por 100 para obter °C)
3. Umidade: inteiro sem sinal de 8 bits (valor percentual direto)
4. Pressão: inteiro sem sinal de 16 bits, escalonado por 10 (divida por 10 para obter hPa)

O script Python decodifica esse formato e exibe os valores reais.

#### Fluxo do Processo de Teste

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/4.png" style={{width:600, height:'auto'}}/></div>

## Passo 7: Como Funciona - Análise Detalhada

### Inicialização e Leitura do Sensor

O sensor BME680 é inicializado com as seguintes etapas:

1. **Configuração I2C**: Configura a comunicação I2C nos pinos apropriados (para XIAO ESP32-C3 com a placa de expansão, GPIO6/GPIO7 para SDA/SCL)
2. **Inicialização do Sensor**: Configura o sensor BME680 com ajustes para medições de temperatura, umidade, pressão e gás
3. **Processo de Leitura**: Inicia uma medição e aguarda os dados ficarem prontos
4. **Processamento de Dados**: Converte os valores brutos do sensor em medições legíveis por humanos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/5.png" style={{width:800, height:'auto'}}/></div>

### Anúncio BLE

A funcionalidade BLE opera da seguinte forma:

1. **Inicialização da Pilha BLE**: Configura a pilha BLE do ESP32
2. **Configuração de Anúncio**: Configura os parâmetros de anúncio (intervalo, formato de dados)
3. **Empacotamento de Dados**: Recebe as leituras do sensor e as empacota em dados específicos do fabricante
4. **Início/Parada do Anúncio**: Controla o tempo de anúncio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/6.png" style={{width:800, height:'auto'}}/></div>

### Gerenciamento de Energia

O sistema de gerenciamento de energia utiliza as capacidades de sleep integradas do ESP32-C3:

1. **Configuração de Deep Sleep**: Usa a API de sleep do ESP-IDF (`esp_sleep_enable_timer_wakeup()`) para configurar o temporizador de despertar
2. **Fonte de Despertar**: Configura o temporizador como única fonte de despertar (o sistema acordará após uma duração especificada)
3. **Entrada em Sleep**: Desliga com segurança os periféricos ativos antes de entrar em deep sleep com `esp_deep_sleep_start()`
4. **Processo de Despertar**: Quando o temporizador expira, o sistema realiza um reset e reinicia a aplicação desde o início

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/7.png" style={{width:800, height:'auto'}}/></div>

O componente de gerenciamento de energia (`power_manager.c`) fornece uma interface simples para lidar com modos de sleep:

```c
// Initialize power manager
power_manager_init();

// Later, when it's time to sleep:
power_manager_enter_deep_sleep(30000); // Sleep for 30 seconds
```

Quando o dispositivo entra em deep sleep, o consumo de energia cai drasticamente (para cerca de 10-20 μA), permitindo uma longa vida útil da bateria. O dispositivo desliga completamente e reiniciará quando o temporizador expirar, portanto, qualquer estado que precise ser preservado deve ser armazenado na memória RTC ou em armazenamento não volátil.

### Perfil de Consumo de Energia

#### Configuração de Perfilamento de Energia

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp" style={{width:600, height:'auto'}}/></div>

#### Perfis de Energia

O sistema possui fases distintas de uso de energia, conforme mostrado no perfil de energia abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/9.png" style={{width:800, height:'auto'}}/></div>

**Fases de Energia:**

1. **Fase de Sleep**: ~150μA no modo deep sleep (controlador RTC do ESP32-C3 ativo + sleep do bme680)
2. **Despertar e Inicializar**: ~40mA durante a inicialização e inicialização do sensor
3. **Publicidade BLE Ativa**: pico de ~16mA durante a transmissão BLE
4. **Limpeza e Entrada em Sleep**: ~5mA durante a limpeza de recursos antes da entrada em sleep

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/10.png" style={{width:800, height:'auto'}}/></div>

**Cálculo de Vida Útil da Bateria:**

- Corrente média em deep sleep (28 seg): 150μA
- Corrente média durante a fase ativa (2 seg): ~40mA
- Corrente média efetiva: 3,92 mA (medida ao longo de 1 minuto)
- Com uma bateria Li-Ion típica de 1500 mAh:
  - 1500 mAh ÷ 3,92 mA ≈ 382 horas ≈ 15,9 dias

**Dicas de Otimização de Energia:**

- Reduza o tempo de anúncio para minimizar os períodos de alta corrente
- Use a menor potência de anúncio viável
- Desative periféricos não utilizados
- Otimize o processo de leitura do sensor
- Considere estender a duração do sleep

## Passo 8: Personalizando o Projeto

Você pode personalizar vários aspectos do projeto:

1. **Alterar a Duração do Sleep**:

   - Edite `SLEEP_TIME_MS` em `main.c` para ajustar a frequência das leituras

2. **Modificar Configurações do Sensor**:

   - Use `idf.py menuconfig` para alterar taxas de amostragem, filtros, etc. do sensor

3. **Ajustar Parâmetros BLE**:

   - Altere o nome do dispositivo ou o intervalo de anúncio no componente de beacon BLE

4. **Adicionar Sensores Adicionais**:
   - Estenda o componente de sensor para incluir outros sensores Grove

### Adicionando Seu Próprio Sensor

Para integrar um sensor diferente neste projeto, siga estas etapas:

1. **Criar um Novo Componente de Sensor**:

   ```bash
   # Create component directory structure
   mkdir -p components/my_new_sensor/include
   touch components/my_new_sensor/CMakeLists.txt
   touch components/my_new_sensor/Kconfig
   touch components/my_new_sensor/my_new_sensor.c
   touch components/my_new_sensor/include/my_new_sensor.h
   ```

2. **Implementar a Interface do Componente**:

   - Defina a função de inicialização
   - Crie funções de leitura de dados
   - Configure qualquer configuração necessária

   Exemplo de arquivo de cabeçalho (`my_new_sensor.h`):

   ```c
   #pragma once
   #include <stdbool.h>
   #include "esp_err.h"

   typedef struct {
       float value1;
       float value2;
       // Additional sensor values
   } my_sensor_data_t;

   /**
    * @brief Initialize the sensor
    * @return ESP_OK on success
    */
   esp_err_t my_sensor_init(void);

   /**
    * @brief Read data from the sensor
    * @param data Pointer to structure to store readings
    * @return ESP_OK on success
    */
   esp_err_t my_sensor_read(my_sensor_data_t *data);
   ```

3. **Configurar o Sistema de Build**:
   Exemplo de `CMakeLists.txt`:

   ```cmake
   idf_component_register(
       SRCS "my_new_sensor.c"
       INCLUDE_DIRS "include"
       REQUIRES driver
   )
   ```

4. **Atualizar a Aplicação Principal**:

   - Adicione seu componente às dependências da aplicação principal
   - Inicialize seu sensor no fluxo da aplicação principal
   - Inclua as leituras do seu sensor nos dados de anúncio BLE

   Exemplo de integração em `main.c`:

   ```c
   #include "my_new_sensor.h"

   void app_main(void) {
       // Initialize other components
       // ...

       // Initialize your new sensor
       ESP_ERROR_CHECK(my_new_sensor_init());

       // Read from your sensor
       my_sensor_data_t sensor_data;
       ESP_ERROR_CHECK(my_sensor_read(&sensor_data));

       // Modify BLE data to include your sensor readings
       // ...
   }
   ```

5. **Estender os Dados de Anúncio BLE**:

   - Atualize o componente de beacon BLE para incluir os dados do seu sensor nos anúncios
   - Atribua IDs de tipo de dados apropriados para suas novas medições

6. **Atualizar a Configuração**:
   - Adicione opções Kconfig para seu sensor em `components/my_new_sensor/Kconfig`
   - Isso permite que os usuários configurem seu sensor através do menuconfig

Seguindo essa abordagem estruturada, você pode integrar sensores adicionais de forma contínua, mantendo a arquitetura modular do projeto.

## Solução de Problemas

### Dicas Importantes

:::tip
**Sem Saída Serial Durante a Operação Normal**  
Para eficiência energética ideal, o dispositivo não exibe informações de depuração pela porta serial durante a operação normal. O LED também não piscará quando o dispositivo estiver em modo de deep sleep. Isso é intencional para minimizar o consumo de energia.

**Regravando o Dispositivo**  
Para regravar o dispositivo:

1. Pressione o botão de reset na placa XIAO quando iniciar o processo de gravação
2. Sincronize seu comando de gravação com o breve período ativo (quando o dispositivo não está em deep sleep)
3. Alternativamente, mantenha o botão de reset pressionado, inicie o comando de gravação e solte o botão de reset quando a gravação começar

**Reativando a Saída de Depuração para Desenvolvimento**  
Ao desenvolver seus próprios módulos ou depurar, você pode reativar a saída serial:

1. Execute `idf.py menuconfig`
2. Navegue até `Component config` → `Log output`
3. Defina o nível de log padrão como `INFO` ou `DEBUG`
4. Configure o destino de saída do log como `UART0`
5. Lembre-se de desativar o log detalhado novamente antes de implantar para preservar a vida útil da bateria

:::

### Sensor Não Detectado

Se você encontrar problemas com a detecção do sensor:

1. **Verificar Conexões**:

   - Certifique-se de que o cabo Grove está corretamente conectado ao sensor e à placa de expansão
   - Verifique se você está usando uma porta Grove I2C

2. **Problemas de Endereço I2C**:

   - O endereço I2C padrão para o BME680 é 0x76. Alguns módulos podem usar 0x77.
   - Edite o endereço I2C na configuração se necessário

3. **Problemas de Energia**:
   - Certifique-se de que o XIAO está recebendo energia suficiente
   - Tente um cabo USB ou porta diferente

### BLE Não Está Anunciando

Se os anúncios BLE não forem detectados:

1. **Verificar o Aplicativo de Scanner BLE**:

   - Tente um aplicativo de scanner BLE diferente
   - Certifique-se de que o Bluetooth está ativado no seu telefone

2. **Monitorar a Saída de Depuração**:

   - Use `idf.py monitor` para verificar mensagens de erro

3. **Duração do Anúncio**:
   - A configuração padrão anuncia apenas por 500ms. Se você perder, aumente `ADV_TIME_MS` em `main.c`

### Falhas de Build ou Gravação

Se você encontrar problemas de build ou gravação:

1. **Versão do ESP-IDF**:

   - Certifique-se de estar usando ESP-IDF v5.0 ou mais recente
   - Execute `. $IDF_PATH/export.sh` (Linux/macOS) ou `%IDF_PATH%\export.bat` (Windows) antes dos comandos

2. **Conexão USB**:

   - Verifique se a conexão USB está estável
   - Tente pressionar o botão de reset na placa de expansão XIAO antes de gravar

3. **Problemas de Porta**:
   - Identifique a porta correta com `ls /dev/tty*` (Linux/macOS) ou Gerenciador de Dispositivos (Windows)
   - Use a flag `-p` com a porta correta

## Conclusão

Você construiu um sistema de monitoramento ambiental eficiente em energia que usa BLE para transmitir dados de temperatura, umidade, pressão e qualidade do ar. Este projeto demonstra vários conceitos importantes:

1. **Integração de Sensores**: Trabalhando com sensores I2C no ESP-IDF
2. **Comunicação BLE**: Criando e gerenciando anúncios BLE
3. **Gerenciamento de Energia**: Implementando deep sleep para operação eficiente em bateria
4. **Desenvolvimento ESP-IDF**: Usando o framework oficial da Espressif para desenvolvimento ESP32

### Arquitetura Geral do Sistema

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/11.png" style={{width:800, height:'auto'}}/></div>

Esta base pode ser estendida para criar nós de sensores IoT mais complexos, sistemas de monitoramento ambiental ou soluções de rastreamento de ativos.

## Recursos

- [Guia de Programação ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/)
- [Wiki do XIAO ESP32-C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/)
- [Datasheet do BME680](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme680/)
- [Repositório GitHub do Projeto](https://github.com/Priyanshu0901/xiao_ibeacon)

## ✨ Projeto de Contribuidor

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial a [Priyanshu Roy](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=106309063&issue=Seeed-Studio%7Cwiki-documents%7C2422) pelo seu esforço dedicado. Seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

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
