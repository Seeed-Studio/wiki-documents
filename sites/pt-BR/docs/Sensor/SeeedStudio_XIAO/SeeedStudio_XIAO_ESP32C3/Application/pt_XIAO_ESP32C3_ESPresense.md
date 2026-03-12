---
description: O nó de detecção de presença baseado no XIAO ESP32-C3 pode funcionar com o componente MQTT Room do Home Assistant para habilitar o posicionamento interno.
title: Implantando ESPresense no Seeed Studio XIAO ESP32-C3 com Home Assistant
keywords:
  - ESPresense
  - XIAO
  - Home Assistant
  - MQTT
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image132.webp
slug: /xiao-esp32c3-espresense
sku: 113991054
last_update:
  date: 01/16/2026
  author: Carla Guo
createdAt: '2026-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao-esp32c3-espresense/
---

# Implantando ESPresense no Seeed Studio XIAO ESP32-C3 com Home Assistant


Este documento descreve como integrar o sistema de detecção de presença Bluetooth de código aberto, **ESPresense**, com o **Seeed Studio XIAO ESP32-C3**. O nó de detecção de presença baseado no XIAO ESP32-C3 pode funcionar com o [componente MQTT Room](https://www.home-assistant.io/components/sensor.mqtt_room/) do Home Assistant para habilitar o posicionamento interno.



## Visão Geral do Projeto

**ESPresense** é um sistema de detecção de presença Bluetooth Low Energy (BLE) de código aberto, projetado para funcionar com o **Home Assistant** usando **MQTT**.

Nesta migração:

### 1. Adicionado Ambiente de Build para XIAO ESP32-C3

A configuração `.ini` foi atualizada para adicionar um ambiente de build dedicado para o **Seeed Studio XIAO ESP32-C3**.

```ini
[env:seeed_xiao_esp32c3]
extends = esp32c3-cdc            ; XIAO ESP32-C3 uses native USB CDC
board = seeed_xiao_esp32c3
board_build.filesystem = spiffs
lib_deps =
  ${esp32c3.lib_deps}
  ${sensors.lib_deps}
build_flags =
  -D CORE_DEBUG_LEVEL=1
  -D FIRMWARE='"xiao-esp32c3"'   ; Firmware identifier
  -D SENSORS
  ${esp32c3-cdc.build_flags}
```

### 2. Melhoria na Responsividade dos Relatórios

Para tornar os relatórios de dados mais responsivos, vários parâmetros em `defaults.h` foram ajustados da seguinte forma:

#### A. Aumento da Sensibilidade de Movimento

O limiar de distância que aciona um relatório antecipado foi reduzido de **0,5 m** para **0,1 m**. Mesmo pequenos movimentos agora ativarão a lógica de "relatório antecipado".

```cpp
#define DEFAULT_SKIP_DISTANCE 0.1  // changed from 0.5
```

#### B. Redução do Intervalo de Relatório Forçado

O intervalo máximo de relatório foi reduzido de **5 segundos** para **1–2 segundos**, garantindo atualizações de dados mais oportunas mesmo quando o movimento é mínimo.

```cpp
#define DEFAULT_SKIP_MS 1000       // changed from 5000, now is 1 second
```

#### C. Melhoria na Coexistência de Wi-Fi e BLE (2,4 GHz)

Ao usar Wi-Fi de 2,4 GHz (chips não-C5), a varredura Bluetooth é ajustada para evitar monopolizar a antena compartilhada. A janela de varredura BLE é definida ligeiramente menor que o intervalo de varredura, permitindo ao Wi-Fi tempo de antena suficiente para conexões MQTT e transmissão de dados.

```cpp
#define BLE_SCAN_INTERVAL 0x80  // 128
#define BLE_SCAN_WINDOW   0x60  // reduced from 0x80 (~75% duty cycle)
```

Esta alteração ajuda a reduzir a contenção interna e minimiza a latência causada pela preempção de recursos de rádio.


## Requisitos de Hardware

* Seeed Studio **XIAO ESP32-C3**
* Cabo USB-C (com capacidade de dados)
* PC (Windows/macOS/Linux)
* Rede Wi-Fi estável (2,4 GHz)
* Instância do Home Assistant


## Software e Ferramentas

| Ferramenta                         | Finalidade                                            |
| ---------------------------------- | ----------------------------------------------------- |
| **PlatformIO**                     | Sistema de build e ferramenta de gravação             |
| Toolchain ESP-IDF (via ESPresense) | Build do firmware                                     |
| Navegador web                      | Configuração do dispositivo                           |
| Home Assistant                     | Integração de presença                                |
| Mosquitto Broker (Add-on do HA)    | Backend MQTT                                          |
| MQTT Explorer (opcional)           | Depuração MQTT                                        |
| nRF Connect (somente Android)      | Publicidade BLE                                       |




## 1. Home Assistant – Configuração do Broker MQTT

### Instalar o Add-on Mosquitto Broker

- Abra o **Home Assistant**

   > Se você ainda não configurou o Home Assistant, consulte este [guia](https://www.home-assistant.io/installation/) para configuração.

- Clique em **Settings → Add-ons → Add-on Store**
- Pesquise por **Mosquitto broker**, instale-o. Após a instalação:
   - Clique em **Start**
   - Habilite:

     - ✔ Start on boot
     - ✔ Watchdog

### Criar Credenciais MQTT

- Vá para **Configuration → Logins → Add**
- Crie um usuário MQTT dedicado (recomendado)
- Anote:

   - Nome de usuário
   - Senha
   - Endereço IP do Home Assistant

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image1.png" style={{width:1000, height:'auto'}}/></div>


    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image2.png" style={{width:1000, height:'auto'}}/></div>





## 2. Build e Gravação do ESPresense

- Baixe os [arquivos de código do ESPresense](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32-C3_BLE_ESPresense), abra o projeto usando o PlatformIO.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image3.png" style={{width:1000, height:'auto'}}/></div>

   > Se você ainda não configurou o Platform IO, consulte este [guia](https://docs.platformio.org/en/latest/integration/ide/vscode.html) para download.

- Aguarde a conclusão da instalação de dependências e configuração do ambiente. Selecione o ambiente **seeed_xiao_esp32c3**, selecione a porta correta, compile e faça o upload.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image4.png" style={{width:1000, height:'auto'}}/></div>

- Aguarde a conclusão da gravação do firmware, pressione o botão Reset para reiniciar o XIAO ESP32-C3.


## 3. Configuração de Wi-Fi e MQTT (Portal Cativo)

- Ligue o XIAO ESP32-C3

- No seu PC ou celular, abra as **configurações de Wi-Fi**, conecte-se ao AP do ESPresense (ex.: `ESPresense-XXXX`)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image5.png" style={{width:400, height:'auto'}}/></div>

- Abra o navegador: `http://192.168.4.1`

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image6.png" style={{width:1000, height:'auto'}}/></div>

- Preencha os seguintes campos na página web:

   | Campo              | Descrição                                      |
   | ------------------ | ---------------------------------------------- |
   | **Room Name**      | Identificador lógico do cômodo (ex.: `room1`)  |
   | **Wi-Fi SSID**     | Rede 2,4 GHz                                   |
   | **Wi-Fi Password** | Senha da rede                                  |
   | **MQTT Broker IP** | IP do Home Assistant                           |
   | **MQTT Port**      | `1883` (padrão)                                |
   | **MQTT Username**  | Da configuração do Mosquitto                   |
   | **MQTT Password**  | Da configuração do Mosquitto                   |

- Clique em **Save**
- Após salvar, reinicie o XIAO ESP32-C3. O dispositivo se conectará automaticamente ao WiFi e ao MQTT.

   > **Recomendação:**
   > Implante **pelo menos dois nós XIAO ESP32-C3** em cômodos diferentes para uma comparação de presença significativa.

- Agora, abra o **Home Assistant**, navegue até **Settings → Devices & Services**


- Os nós ESPresense aparecerão automaticamente, formato do nome do dispositivo:

   ```
   ESPresense + <Room Name>
   ```
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image7.png" style={{width:1000, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image8.png" style={{width:1000, height:'auto'}}/></div>



## 4. Transmissão BLE do Dispositivo

Em seguida, precisamos tornar seu dispositivo pessoal detectável pelo ESPresense via BLE. Em alguns casos, pode ser necessário instalar um aplicativo para habilitar seu dispositivo a transmitir via BLE.

### Dispositivos iOS

Dispositivos Apple emitem várias mensagens de continuidade BTLE, frequentemente identificadas pela impressão digital `apple:100?:*-*`.
>Em residências com vários iPhones, as informações de proximidade podem colidir, levando a impressões digitais duplicadas. Você pode consultar https://espresense.com/devices/apple para resolver o problema.

### Dispositivos Android (Publicidade Manual)

Dispositivos Android geralmente são discretos e precisam de um aplicativo para emitir anúncios BLE. Daí a necessidade de um aplicativo para nos permitir encontrá-los.

- Instale o **nRF Connect** e abra o aplicativo.
- Vá para **ADVERTISER → "+" → ADD RECORD**, selecione **Manufacturer Data**
- Preencha:

   | Campo      | Valor                                                                                                                                    |
   | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
   | Company ID | `0x004C` (Este é o ID fixo da Apple Inc., e todos os iBeacons devem usar este ID de fabricante.)                                         |
   | Data       | `0215E2C56DB5DFFB48D2B060D0F5A71096E000010001C5`                                                                                         |

   **Explicação do Formato dos Dados**

   | Seção           | Descrição       |
   | --------------- | --------------- |
   | `0215`          | Prefixo iBeacon |
   | `E2C56D...96E0` | UUID (16 bytes) |
   | `0001`          | Major           |
   | `0001`          | Minor           |
   | `C5`            | Potência Medida |

- Salve e ative a publicidade **ON**

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image9.png" style={{width:400, height:'auto'}}/><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image10.png" style={{width:400, height:'auto'}}/></div>




### Outros dispositivos suportados:
[https://espresense.com/devices](https://espresense.com/devices)



### Verificação de Dados MQTT

Você pode usar o [**MQTT Explorer**](https://mqtt-explorer.com/) para visualizar todos os tópicos publicados pelo ESPresense.
-  Conecte-se a:
   * Host: IP do HA
   * Porta: 1883
   * Nome de usuário / Senha

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image11.png" style={{width:1000, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image12.png" style={{width:1000, height:'auto'}}/></div>

-  Pesquise usando os **primeiros 8 caracteres do seu UUID**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image13.png" style={{width:1000, height:'auto'}}/></div>






## 5. Presença no Cômodo via Sensor MQTT Room

### Editar `configuration.yaml`

- Vá para **Settings → Add-ons → Terminal**, abra o terminal
-  Execute:

    ```bash
    ls /config
    ```
    Confirme que `configuration.yaml` existe.

- Edite o arquivo:

    ```bash
    nano /config/configuration.yaml
    ```
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image14.png" style={{width:1000, height:'auto'}}/></div>

- Acrescente:

    ```yaml
    sensor:
      - platform: mqtt_room
        device_id: "iBeacon:e2c56db5-dffb-48d2-b060-d0f5a71096e0-1-1"
        name: "My iBeacon"
        state_topic: "espresense/devices/iBeacon:e2c56db5-dffb-48d2-b060-d0f5a71096e0-1-1"
        timeout: 60
        away_timeout: 120
    ```
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image15.png" style={{width:1000, height:'auto'}}/></div>

>⚠ **A indentação YAML é crítica**
>* Use apenas espaços
>* Não use TAB

- Salve:

   * `Ctrl + O` → Enter
   * `Ctrl + X`



### Validar e Reiniciar

- Vá para **Settings → System → Developer Tools**
- Abra a aba **YAML**, clique em **Check Configuration**, se válido, clique em **Restart**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image16.png" style={{width:1000, height:'auto'}}/></div>



## 6. Adicionar entidades ao seu painel

Após reiniciar:

- Vá para **Developer Tools → States**
- Pesquise por:

    ```
    sensor.my_ibeacon
    ```

- Se a entidade for atualizada com os nomes dos cômodos, a configuração está completa

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image17.png" style={{width:1000, height:'auto'}}/></div>

    >A inicialização do sensor pode levar algum tempo. Se o status mostrar not_home, aguarde pacientemente por um momento. Se ainda não houver atualização de estado após um período prolongado, recomendamos usar o MQTT Explorer para verificar se o ESPresense ficou offline ou para confirmar que seu dispositivo pessoal pode ser detectado com sucesso.

- Adicione a entidade ao seu **Dashboard**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image18.png" style={{width:1000, height:'auto'}}/></div>




## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
