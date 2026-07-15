---
description: Guia para usar a expansão Grove com a ferramenta MCP
title: Estendendo Grove com MCP
sidebar_position: 6
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - IIC
  - Model
  - Context
  - protocol
  - Grove
  - MCP
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /extending_grove_with_mcp
last_update:
  date: 10/22/2025
  author: Twelve
createdAt: '2025-10-22'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/extending_grove_with_mcp/
---
# Estendendo MCP com Grove

## Visão Geral

Este documento descreve como usar o sensor de temperatura e umidade DHT20 por meio da interface Grove na placa de desenvolvimento SenseCAP Watcher baseada em ESP32-S3.

## Preparação de Hardware

<table align="center">
  <tr>
    <th>SenseCAP Watcher para XiaoZhi</th>
    <th>Grove - Sensor de Temperatura e Umidade V2.0 (DHT20)</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove3.png" style={{width:200, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Definição da Interface Grove (J5)

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove1.png" style={{width:400, height:'auto'}}/></div>

De acordo com o diagrama de hardware, a interface Grove usa os seguintes pinos:

| Pino Grove | Função | Conexão ESP32-S3 |
|-----------|------|---------------|
| Pino 1     | SCL  | GPIO48 (I2C0_SCL) |
| Pino 2     | SDA  | GPIO47 (I2C0_SDA) |
| Pino 3     | VCC  | GROVE_3.3V (Alimentação 3,3V) |
| Pino 4     | GND  | GND |

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove2.png" style={{width:400, height:'auto'}}/></div>

## Sensor DHT20

- Endereço I2C: 0x38 (fixo, não pode ser alterado)
- Tensão de Alimentação: 2,0V - 5,5V (use 3,3V)
- Protocolo de Comunicação: I2C (até 400kHz)
- Faixa de Medição:
    - Temperatura: -40°C a +80°C (Precisão: ±0,5°C)
    - Umidade: 0% a 100% UR (Precisão: ±3% UR)

## Resultado da Execução

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove5.png" style={{width:800, height:'auto'}}/></div>

## Estrutura de Arquivos

### Código Original:
- [Repositório de Código do Firmware Xiaozhi](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

### Novos arquivos:

- [dht20.h](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.h)
- [dht20.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.cc)

- Você deve colocar os dois arquivos acima no seguinte local:

    - localização do arquivo
        ```text
        main/boards/sensecap-watcher/
        ├── dht20.h              # DHT20 driver header
        └── dht20.cc             # DHT20 driver implementation
        ```

### Arquivos modificados

- [sensecap_watcher.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/sensecap_watcher.cc)

- Consulte [Funcionalidade Principal (Interface Interna da Ferramenta MCP)](#Core-Functionality(Internal-MCP-Tool-Interface)) para a parte de código modificada.

- Você deve substituir o arquivo acima no seguinte local:

    - localização do arquivo
        ```text
        main/boards/sensecap-watcher/
        └── sensecap_watcher.cc  # Integrates DHT20 sensor and MCP tool
        ```

:::caution Note
O código de exemplo acima é apenas para referência. Você deve modificá-lo de acordo com o modelo específico do seu sensor, ambiente de desenvolvimento e versão do firmware para garantir a integração correta e a compilação bem-sucedida.

- Sensores Grove I2C podem ser conectados diretamente ao barramento I2C.  
- Sensores não I2C podem ser conectados por meio de pinos GPIO disponíveis, permitindo a integração flexível de vários tipos de sensores.
:::

## Funcionalidade Principal (Sensor DHT20)

### 1. Inicialização do Sensor
O driver do DHT20 implementa o processo completo de inicialização:
    - Passo 1. Reiniciar o sensor: enviar comando 0xBA de reset
    - Passo 2. Configuração do sistema: escrever [0x08, 0x00] no registrador 0xE1
    - Passo 3. Verificação de calibração: verificar o bit[3] do registrador de status para garantir que o sensor esteja calibrado
    - Passo 4. Mecanismo de nova tentativa: tentar novamente até 5 vezes se a calibração falhar
    ```cpp
    esp_err_t ret = dht20_sensor_->Initialize();
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "DHT20 initialized successfully");
    }
    ```

### 2. Leitura de Temperatura e Umidade

Processo de leitura:
    - Passo 1. Disparar medição: enviar comando [0xAC, 0x33, 0x00]
    - Passo 2. Aguardar a medição: atraso de 80ms
    - Passo 3. Ler 8 bytes: [status, umidade Alta, Média, Baixa | temperatura Alta, Média, Baixa, CRC]
    - Passo 4. Análise de dados:
        - Umidade = (valor bruto de 20 bits) × 100 / 2^20
        - Temperatura = (valor bruto de 20 bits) × 200 / 2^20 - 50

    ```cpp
    float temperature, humidity;
    esp_err_t ret = dht20_sensor_->ReadTempAndHumidity(temperature, humidity);
    if (ret == ESP_OK) {
        printf("Temperature: %.2f°C, Humidity: %.2f%%\n", temperature, humidity);
    }
    ```

### 3. Protocolo de Comunicação I2C

    | Função | Comando/Registrador | Dados |
    |-----|-----------|------|
    | Reiniciar Sensor | 0xBA | - |
    | Registrador de Configuração | 0xE1 | [0x08, 0x00] |
    | Disparar Medição | - | [0xAC, 0x33, 0x00] |
    | Ler Status | - | 1 byte |
    | Ler Dados | - | 7 bytes |

### 4. Definição do Byte de Status

    | Bit | Função | Valor |
    |---|-----|---|
    | bit[7] | Status de Medição | 1=Medindo, 0=Ocioso |
    | bit[6:4] | Reservado | - |
    | bit[3] | Status de Calibração | 1=Calibrado, 0=Não Calibrado |
    | bit[2:0] | Reservado | - |

### 5. Algoritmo de Análise de Dados

```cpp
// Humidity data (20 bits)
uint32_t humidity_raw = (data[1] << 12) | (data[2] << 4) | (data[3] >> 4);
float humidity = humidity_raw * 100.0f / 1048576.0f;

// Temperature data (20 bits)
uint32_t temperature_raw = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5];
float temperature = temperature_raw * 200.0f / 1048576.0f - 50.0f;
```

## Funcionalidade Principal (Interface Interna da Ferramenta MCP)

### 1. Descrição da Função

- Nome da ferramenta : `self.grove.get_temperature_humidity`
- Aplicação da ferramenta : Ler a temperatura e a umidade atuais do sensor DHT20 conectado via Grove

### 2. Exemplo de Chamada

A IA pode chamá-la da seguinte forma:

```cpp
result = call_tool("self.grove.get_temperature_humidity", {})
```

### 3. Formato de Retorno

- Sucesso:
    ```cpp
    {
        "temperature": 25.32,
        "humidity": 65.47,
        "status": "ok"
    }
    ```

- Falha:

    ```cpp
    {
        "error": "DHT20 sensor not initialized"
    }
    ```

    ou

    ```cpp
    {
        "error": "Failed to read DHT20: ESP_ERR_TIMEOUT"
    }
    ```

<a id="modified-code-part-and-explanation"></a>

### 4. Parte do Código Modificada e Explicação

#### Inclusão de Arquivos de Cabeçalho Adicionados

- Adicione as seguintes declarações `include` no início de `sensecap_watcher.cc`:

    ```cpp
    #include "dht20.h"
    #include "mcp_server.h"
    ```
- Finalidade

    - dht20.h — Introduz as APIs do driver para o sensor DHT20, permitindo a leitura de temperatura e umidade.

    - mcp_server.h — Fornece APIs relacionadas ao servidor MCP interno, permitindo a comunicação e o registro de ferramentas MCP.

#### Variável Membro Adicionada

- Adicione a seguinte variável membro na classe `SensecapWatcher`:

    ```cpp
    DHT20* dht20_sensor_ = nullptr;
    ```

- Finalidade

    - `dht20_sensor_` — Um ponteiro para o objeto do sensor DHT20 conectado via interface Grove.  
      Ele é usado para inicializar, armazenar e acessar o sensor de temperatura e umidade durante todo o ciclo de vida da instância de `SensecapWatcher`.  
    - Ele é atribuído em `InitializeDHT20()` e usado pelas ferramentas MCP para ler os dados do sensor.  
    - Inicializado como `nullptr` para indicar que o sensor ainda não foi configurado, com verificações de nulo realizadas antes da leitura.

#### Inicialização do DHT20 e Ferramenta MCP Adicionadas

- Adicione a seguinte função membro na classe `SensecapWatcher`:

    ```cpp
    void InitializeDHT20() {
        ESP_LOGI(TAG, "Initialize DHT20 sensor on Grove port");

        // Create DHT20 sensor instance
        dht20_sensor_ = new DHT20(i2c_bus_);

        // Initialize and calibrate the sensor
        esp_err_t ret = dht20_sensor_->Initialize();
        if (ret != ESP_OK) {
            ESP_LOGE(TAG, "DHT20 initialization failed: %s", esp_err_to_name(ret));
            delete dht20_sensor_;
            dht20_sensor_ = nullptr;
            return;
        }

        ESP_LOGI(TAG, "DHT20 sensor initialized successfully");

        // Register MCP tool for reading temperature and humidity
        auto& mcp_server = McpServer::GetInstance();
        mcp_server.AddTool("self.grove.get_temperature_humidity",
            "Read temperature and humidity from the Grove-connected DHT20 sensor.\n"
            "Return format: {\"temperature\": value(°C), \"humidity\": value(%), \"status\": \"ok\"}\n"
            "If reading fails, returns an error message.",
            PropertyList(),
            [this](const PropertyList&) -> ReturnValue {
                if (!dht20_sensor_) {
                    return "{\"error\": \"DHT20 sensor not initialized\"}";
                }

                float temperature = 0.0f;
                float humidity = 0.0f;

                esp_err_t ret = dht20_sensor_->ReadTempAndHumidity(temperature, humidity);
                if (ret != ESP_OK) {
                    std::string error_msg = "{\"error\": \"Failed to read DHT20: ";
                    error_msg += esp_err_to_name(ret);
                    error_msg += "\"}";
                    return error_msg;
                }

                // Format response as JSON
                char buffer[128];
                snprintf(buffer, sizeof(buffer),
                        "{\"temperature\": %.2f, \"humidity\": %.2f, \"status\": \"ok\"}",
                        temperature, humidity);
                return std::string(buffer);
            });

        ESP_LOGI(TAG, "DHT20 MCP tool registered: self.grove.get_temperature_humidity");
    }
    ```

- Adicionar chamada de inicialização do DHT20 no construtor

    ```cpp
    SensecapWatcher() {
        ...
        InitializeCamera();
        InitializeDHT20();  // Initialize Grove DHT20 sensor
    }
    ```

- Objetivo

    - `InitializeDHT20()` — Inicializa o sensor DHT20 na interface Grove e registra uma ferramenta MCP para permitir acesso interno aos dados de temperatura e umidade.  
    - A função cria a instância `DHT20`, faz a calibração e verifica erros de inicialização.  
    - Se a inicialização for bem-sucedida, registra a ferramenta MCP `self.grove.get_temperature_humidity` para leitura dos dados do sensor via JSON.  
    - Chamada no construtor de `SensecapWatcher` para garantir que o sensor esteja pronto quando a placa iniciar:



## Solução de Problemas

### Problemas Comuns

1. **Falha na Inicialização do Sensor**
- Possíveis Causas:
    - Interface Grove não alimentada corretamente
    - Problemas na conexão I2C
    - Sensor não conectado ou danificado
- Solução
    ```cpp
    uint32_t grove_power = esp_io_expander_get_level(io_exp_handle, BSP_PWR_GROVE);
    ESP_LOGI(TAG, "Grove power status: %d", grove_power);
    ```
2. **Tempo de Leitura Esgotado (Timeout)**
- Possíveis Causas:
    - Sensor ocupado
    - Conflito no barramento I2C
- Solução
    - Garantir intervalo ≥1s entre leituras
    - Verificar outros dispositivos no I2C

3. **Dados Inválidos**
- Possíveis Causas:
    - Sensor não calibrado
    - Verificação de CRC falhou (não implementada na versão atual)
- Solução:
    - Reinicializar o sensor
    - Considerar implementar verificação de CRC (data[6])

## Referências

- [DHT20 Datasheet](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/DHT20.pdf)
- [Esquemático do SenseCAP Watcher](https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher/tree/main/Hardware)
- [Especificação da Interface Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/)

## Manutenção

o código reside em `main/boards/sensecap-watcher/`, não afeta outras placas.

## Suporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>