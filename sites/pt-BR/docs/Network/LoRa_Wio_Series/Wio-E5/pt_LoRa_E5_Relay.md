---
description: Instruções da função de repetidor LoRaWAN do Wio-E5.
title: Função de Repetidor do Wio-E5
keywords:
  - wio
  - docusaurus
slug: /lora-e5_relay
sku: 317990687,317990829
last_update:
  date: 03/28/2026
  author: David Du
createdAt: '2026-03-28'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/pt-br/lora-e5_relay/
---
<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-Tape-Reel-p-5302.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br />

> LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.

# Guia da Função de Repetidor LoRaWAN do Wio-E5

**Hardware aplicável**: Módulo LoRa® Wio-E5

**Firmware**: Firmware personalizado (por favor, consulte antes de fazer o pedido)

**Versão do documento**: V1.0

**Suporte de servidor**: ChirpStack / The Things Network (TTN) 

> Clique [Aqui](https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/rhf0m055-v5.1.2-20250319.ebin.bin) para baixar o firmware da Função de Repetidor LoRaWAN do Wio-E5.

## 1. Visão geral

A função de repetidor do Wio-E5 é baseada na [Especificação de Repetidor LoRaWAN](https://resources.lora-alliance.org/technical-specifications/ts011-1-0-0-relay), permitindo que dispositivos em áreas sem cobertura direta de gateway acessem a rede LoRaWAN por meio de um dispositivo **Relay Master**.

### Conceitos principais

| Função | Descrição | Conexão de rede |
|:---:|:---|:---|
| **Relay Master** | Atua como um dispositivo de ponte, ouvindo e encaminhando pacotes do `Slave` para o gateway real | Conexão direta com a rede LoRaWAN (OTAA) |
| **Relay Slave** | Localizado em áreas sem sinal, acessa a rede indiretamente via `Master` | Conexão indireta via `Master` |
| **WOR** <br /> (Wake-on-Radio) | `Slave` envia periodicamente quadros de wake-up, `Master` escuta e responde | - |

### Destaques do fluxo de trabalho
- **Detecção CAD**: O Master abre uma janela de detecção de atividade de canal (Channel Activity Detection) a cada 1 segundo para ouvir o Slave
- **Sincronização de tempo**: Após a comunicação inicial, o Slave sincroniza o tempo com o Master, reduzindo os símbolos de preâmbulo de **259 para 15**, reduzindo significativamente o consumo de energia e a ocupação de canal
- **Janela RXR**: O Slave usa a terceira janela de recepção (RX Window 3) para receber dados downstream

---

## 2. Pré-requisitos

### 2.1 Lista de hardware
- **Módulo Wio-E5** × 2 (um como Master, outro como Slave)
- **Gateway LoRaWAN** (por exemplo, SenseCAP M2 Multi-Platform)
- **Ferramenta USB-para-Serial** (taxa de baud: **9600**)
- **Computador** com ferramenta de depuração serial instalada (por exemplo, XCOM, Putty)

### 2.2 Seleção do ambiente de servidor

| Fase | Plataforma recomendada | Observações |
|:---|:---|:---|
| **Teste** | **ChirpStack** | Suporte nativo a Relay, interface Web para vinculação de dispositivos |
| **Produção** | **TTN** | Requer configuração com ferramenta TTN CLI. O TTN atualmente aceita mensagens de repetidor, mas não possui interface Web completa de gerenciamento de Relay |

---

## 3. Configuração do dispositivo (comandos AT)

:::note 
Todos os comandos AT devem ser inseridos via ferramenta serial com taxa de baud ajustada para **9600**, terminados por retorno de carro (`<CR><LF>`).
:::

### 3.1 Configuração do Relay Slave

```bash
# 1. Set to OTAA mode
AT+MODE=OTAA

# 2. Set frequency band (EU868 example)
AT+DR=EU868

# 3. Set channels (0-2)
AT+CH=NUM,0-2

# 4. Enable Slave mode (Critical)
AT+STDRELAY=MODE,SLAVE

# 5. Get device ID information (record DevEUI and AppEUI)
AT+ID

# 6. Set AppKey (generated on server side)
AT+KEY=APPKEY,"your_app_key_here"
```

### 3.2 Configuração do Relay Master

```bash
# 1. Basic network settings (same as Slave)
AT+MODE=OTAA
AT+DR=EU868
AT+CH=NUM,0-2

# 2. Initially disable Relay mode (enabled via server downlink)
AT+STDRELAY=MODE,OFF

# 3. Set AppKey
AT+KEY=APPKEY,"your_app_key_here"

# 4. Enable debug logs (to observe forwarding process)
AT+LOG=DEBUG
```

## 4. Configuração do servidor (ChirpStack)

### 4.1 Registrar gateway e aplicação

1. Registrar gateway: Gateways → Add gateway → Inserir o EUI do gateway
2. Criar aplicação: Applications → Add application → Inserir nome (por exemplo, relay-app)

### 4.2 Criar perfis de dispositivo

#### Perfil do Slave
- Geral: Selecionar região (EU868), LoRaWAN 1.0.4
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-1.png" alt="pir" width={600} height="auto" /></p>


- Aba Relay:
    - Device is a Relay ❌
    - Device is a Relay capable end-device ✅
    - Only use Relay ✅


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-2.png" alt="pir" width={600} height="auto" /></p>


#### Perfil do Master

- Geral: Igual ao acima
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-1.png" alt="pir" width={600} height="auto" /></p>


- Aba Relay:
    - Device is a Relay ✅
    - Relay enabled ✅
    - Device is a Relay capable end-device ❌

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-2.png" alt="pir" width={600} height="auto" /></p>

### 4.3 Registrar dispositivos e vincular

**Passo 1: Registrar dispositivo Slave**
- Ir para relay-app → Devices → Add
- Preencher: Device EUI, Join EUI, selecionar o Perfil de Dispositivo Slave
- Inserir AppKey em OTAA Keys

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-tx-1.png" alt="pir" width={600} height="auto" /></p>

**Passo 2: Registrar dispositivo Master**
- Igual ao acima, selecionar o Perfil de Dispositivo Master

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-rx-1.png" alt="pir" width={600} height="auto" /></p>

**Passo 3: Vincular relacionamento (Crítico)**
1. Entrar na lista de dispositivos em relay-app
2. Selecionar dispositivo Slave → clicar em Selected devices → Add to relay
3. Selecionar o dispositivo Master correspondente como relay host na janela pop-up
4. Verificar: ir para a aba Relays, o Slave deve aparecer listado sob o Master

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-2.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-3.png" alt="pir" width={600} height="auto" /></p>

## 5. Configuração do servidor (TTN)

:::note
O TTN requer **Command Line Interface (CLI)** para configuração de Relay. A interface Web só oferece suporte ao registro básico de dispositivos.
:::

### 5.1 Registro básico
1. Registrar gateway: `Gateways` → `Register gateway` → Inserir EUI e plano de frequência
2.  Aplicação: `Applications` → `Add application` → Definir ID (**relay-app**)
3. Registrar dispositivos:
    - Slave: Definir ID (**relay-tx**), inserir `DevEUI`/`JoinEUI`/`AppKey`
    - Master: Definir ID (**relay-rx**), inserir `DevEUI`/`JoinEUI`/`AppKey`

### 5.2 Configuração via CLI (exemplo em Windows)

```bash
# 1. Download and configure CLI (version 3.32.2+)
ttn-lw-cli.exe use "eu1.cloud.thethings.network"

# 2. Login to TTN (opens browser for authorization)
ttn-lw-cli.exe login

# 3. Enable Relay Master (serving mode)
ttn-lw-cli.exe relays create relay-app relay-rx --mode.serving

# 4. Enable Relay Slave and associate with Master (always via Master)
ttn-lw-cli.exe relays create relay-app relay-tx \
  --mode.served.mode.always \
  --mode.served.serving-device-id relay-rx

# 5. Create uplink forwarding rule (index 0)
ttn-lw-cli.exe relays uplink-forwarding-rules create relay-app relay-rx 0 --device-id relay-tx
```

> Para mais informações, consulte a [Documentação Oficial do TTN](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/).


## 6. Testes de validação

### 6.1 Iniciar o Relay Master

Abra a ferramenta de porta serial e selecione a porta serial correspondente com taxa de baud de **9600** para monitorar o log.

```bash
# 1. Turn on log output:
AT+LOG=DEBUG

# 2. Reset device
AT+RESET

# 3. The Relay Master is turned on and off by the server downlink control, turn off the Relay mode first 
AT+STDRELAY=MODE,OFF

# 4. Join network (observe logs until +JOIN:Done)
AT+JOIN

# 5. Trigger uplink to receive Relay Config MAC command from server
AT+MSG

# Logs should show:
# +LOG: DEBUG ... MACCMD, RX, 0219010350FF00010640002000000042400043007F07
# Then CAD window opens every 1 second: 
# +LOG: DEBUG 211708 LORA   CAD, 865100000, SF9, 125KHz
```

Neste ponto, o `Relay Master` está pronto para acordar e encaminhar usando o Relay Slave.

### 6.2 Iniciar o Relay Slave

```bash
# 1. Ensure Slave mode is set
AT+STDRELAY=MODE,SLAVE

# 2. Reset and enable logs
AT+RESET
AT+LOG=DEBUG

# 3. Attempt network join (via Master forwarding)
AT+MODE=OTAA
AT+JOIN

# Logs should show:
# +JOIN: Network joined
# +JOIN: NetID 000000 DevAddr 00:C9:F4:5F
# +JOIN: Done
```
### 6.3 Verificação de sincronização de tempo e otimização

```bash
# Set retry count to 1
AT+RETRY=1

# Send confirmed packet (first time)
AT+CMSGHEX=AA

# +LOG: DEBUG 872489 LORA   TX, 865100000, SF9, 125KHz, 259, 22
# +LOG: DEBUG 872490 LORA   TX, 015FF4C90054066CFF01006A3A2EA8
# Observe: WOR_ACK received, preamble length ~259

# At this point, WOR_ACK will be received and time synchronization will be performed, and the number of subsequent preamble derived from the calculation will be greatly reduced.

# Send again (synchronized)
AT+CMSGHEX=AA

# +LOG: DEBUG 141852 LORA   TX, 865100000, SF9, 125KHz, 15, 22
# Observe: Preamble reduced to ~15, latency decreased
```

### 7. Observações importantes

1. Seleção de servidor: Atualmente o TTN só oferece suporte à configuração de Relay via CLI. O ChirpStack oferece suporte completo via interface Web. Recomenda-se usar ChirpStack para testes.

2. Otimização de Energia: Após a sincronização de tempo, o preâmbulo do quadro WOR do Slave é reduzido de 259 para 15, reduzindo significativamente o consumo de energia. Recomendado para implantações estáveis.

3. Requisito de Firmware: Certifique-se de que o firmware do Wio-E5 oferece suporte ao conjunto de comandos AT+STDRELAY.

4. Teste de Alcance: Mantenha uma distância entre o Slave e o Master (por exemplo, 50–500 metros) durante o teste para verificar a eficácia do encaminhamento por repetição.

## Recursos

- **📄[PDF]** [Wio-E5 LoRaWAN Relay Function Instruction Manual](http://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/E5%20relay%20function%20Instruction%20v1.0%20.pdf)