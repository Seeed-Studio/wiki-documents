---
description: Lista de comandos
title: Lista de comandos do módulo sem fio Wio-S3
keywords:
  - wio
  - module
  - LoRa
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.webp
slug: /wio-s3_wireless_module_command_list
sku: 100020327,100079384
sidebar_position: 2
last_update:
  date: 6/9/2026
  author: Janet Zhang
createdAt: '2026-06-09'
updatedAt: '2026-06-10'
url: https://wiki.seeedstudio.com/pt-br/wio-s3_wireless_module_command_list/
---

## Lista de comandos de depuração serial

### Comando de sistema

**1. `help [<string>] [-v <0|1>]`**

Imprime o resumo de todos os comandos registrados se nenhum argumento for fornecido, caso contrário imprime o resumo do comando fornecido.

| Item | Descrição | Dados |
|------|-------------|------|
| `<string>` | Nome do comando | Opcional. Se fornecido, exibe a descrição do comando especificado |
| `-v, --verbose=<0\|1>` | Se especificado, lista os comandos do console com o nível de verbosidade fornecido | 0 ou 1 |

**Exemplos:**
- `help` : Mostrar todos os comandos disponíveis.
- `help lora_tx` : Mostrar informações detalhadas para o comando `lora_tx`.
- `help -v 1` : Mostrar a lista completa de comandos com o modo detalhado habilitado.



### Comando LoRa

**1. `lora_tx [-f <f>] [-s <6-12>] [-b <0|1|2>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>] [-n <n>]`**

Enviar pacotes de dados LoRa com parâmetros de rádio configuráveis.

| Item | Descrição | Dados |
|------|-------------|------------------|
| `-f, --freq=<f>` | Define a frequência de rádio em Hz | 415000000 ~ 940000000 Hz, <br />padrão: 868000000 |
| `-s, --sf=<6-12>` | Define o SF do LoRa | 6 ~ 12, padrão: 7 |
| `-b, --bw=<0\|1\|2>` | Define a largura de banda LoRa | 0:125KHz, 1:250KHz, 2:500KHz, <br />padrão: 0 |
| `-c, --cr=<1\|2\|3\|4>` | Define a taxa de codificação LoRa | 1:CR_4_5, 2:CR_4_6, 3:CR_4_7, 4:CR_4_8, padrão: 1 |
| `-p, --power=` | Define a potência de rádio | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, padrão: 10 |
| `--crc=<0\|1>` | Define o CRC do LoRa | 0:DISABLE, 1:ENABLE, padrão: 1 |
| `--iq=<0\|1>` | Define o modo IQ do LoRa | 0:STANDARD, 1:INVERTED, padrão: 0 |
| `--net=<0\|1>` | Define a rede pública | 0:Rede privada, 1:Rede pública, padrão: 0 |
| `-i, --interval=<t>` | Define o intervalo de TX (ms) | padrão: 0 |
| `-d, --txt=<d>` | Define os dados de texto a serem enviados | padrão: hello |
| `-n, --num=<n>` | Número de pacotes enviados | 0: continuar enviando, padrão: 1 |

**Exemplo:** `lora_tx -f 868000000 -s 7 -b 0 -c 1 -p 10 -d hello`  
Enviar um pacote LoRa com frequência de 868000000 Hz, SF7, largura de banda de 125 kHz, taxa de codificação 4/5 e enviar "hello" com potência de TX de 10 dB.


**2. `lora_rx [-f <f>] [-s <6~12>] [-b <0|1|2>] [-c <1|2|3|4>] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [--boosted=<0|1>]`**

Receber pacotes LoRa com parâmetros de rádio configuráveis.

| Item | Descrição | Dados |
|------|-------------|------------------|
| `-f, --freq=<f>` | Define a frequência de rádio em Hz | 415000000 ~ 940000000 Hz, padrão: 868000000 |
| `-s, --sf=<6~12>` | Define o SF do LoRa | 6 ~ 12, padrão: 7 |
| `-b, --bw=<0\|1\|2>` | Define a largura de banda LoRa | 0:125KHz, 1:250KHz, 2:500KHz, padrão: 0 |
| `-c, --cr=<1\|2\|3\|4>` | Define a taxa de codificação LoRa | 1:CR_4/5, 2:CR_4/6, 3:CR_4/7, 4:CR_4/8, padrão: 1 |
| `--crc=<0\|1>` | Define o CRC do LoRa | 0:DISABLE, 1:ENABLE, padrão: 1 |
| `--iq=<0\|1>` | Define o modo IQ do LoRa | 0:STANDARD, 1:INVERTED, padrão: 0 |
| `--net=<0\|1>` | Define a rede pública | 0:Rede privada, 1:Rede pública, padrão: 0 |

**Exemplo:** `lora_rx -f 868000000 -s 7 -b 0`  
Receber pacotes LoRa na frequência de 868000000 Hz, SF7, largura de banda de 125 kHz no modo RX normal.


**3. `lora_cw [-f <f>] [-p] [-o]`**

Transmitir um sinal de onda contínua para teste de RF e medição de espectro.

| Item | Descrição | Dados |
|------|-------------|------------------|
| `-f, --freq=<f>` | Define a frequência de rádio em Hz | 415000000 ~ 940000000 Hz, padrão: 868000000 |
| `-p, --power=<f>` | Define a potência de rádio | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, padrão: 10 |
| `-o, --ocp=<f>` | Define o passo do limite de corrente | 0 ~ 63, passo 2.5mA, padrão: 24 |

**Exemplo:** `lora_cw -f 868000000 -p 10 -o 24`  
Transmitir sinal de onda contínua em 868 MHz com potência de TX de 10 dB e limite de corrente OCP de 60 mA para teste de RF.


**4. `lora_fcc_fhss [-m <0|1>] [-s <6~12>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>]`**

Transmitir pacotes LoRa usando modo de salto de frequência (frequency hopping) para conformidade com a FCC e testes de certificação de RF.

| Item | Descrição | Dados |
|------|-------------|------------------|
| `-m, --mode=<0\|1>` | Define o modo FHSS | 0: FHSS_125K_MODE, 1: FHSS_500K_MODE, padrão: 0 |
| `-s, --sf=<6~12>` | Define o SF do LoRa | 6 ~ 12, padrão: 10 |
| `-c, --cr=<1\|2\|3\|4>` | Define a taxa de codificação LoRa | 1:CR_4/5, 2:CR_4/6, 3:CR_4/7, 4:CR_4/8, padrão: 1 |
| `-p, --power=<f>` | Define a potência de rádio | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, padrão: 10 |
| `--crc=<0\|1>` | Define o CRC do LoRa | 0:DISABLE, 1:ENABLE, padrão: 1 |
| `--iq=<0\|1>` | Define o modo IQ do LoRa | 0:STANDARD, 1:INVERTED, padrão: 0 |
| `--net=<0\|1>` | Define a rede pública | 0:Rede privada, 1:Rede pública, padrão: 0 |
| `-i, --interval=<t>` | Define o intervalo de TX (ms) | padrão: 0 |
| `-d, --txt=<d>` | Define os dados de texto a serem enviados | padrão: hello seeed! 1234567 |

**Exemplo:** `lora_fcc_fhss -m 1 -s 10 -c 1 -p 14 --crc=1 --iq=0 --net=0 -i 1000 -d test`  
Transmitir pacotes LoRa FHSS usando FHSS_500K_mode, SF10, taxa de codificação 4/5, potência de TX de 14 dB, CRC habilitado, modo IQ padrão, modo de rede privada e enviar o payload "test" a cada 1000 ms.


### Comando GPIO

**1. `gpio [-p <0~48>] [-d <0|1>] [-v <0|1>]`**

Controlar pinos GPIO para teste de entrada/saída e validação de hardware.

| Item | Descrição | Dados |
|------|-------------|------------------|
| `-p, --pin=<0~48>` | Número do pino GPIO | 0 ~ 48, padrão: 0 |
| `-d, --direction=<0\|1>` | Define a direção do GPIO | 0: INPUT, 1: OUTPUT, padrão: 1 |
| `-v, --value=<0\|1>` | Define o valor de saída do GPIO | 0: LOW, 1: HIGH, padrão: 0 |

**Exemplo:** `gpio -p 10 -d 1 -v 1`  
Configurar o GPIO 10 como modo de saída e conduzir o pino para nível alto.


### Comando Flash

**1. `flash [-b <100~1000>]`**

Testar o desempenho de leitura e gravação da memória flash usando operações em bloco.

| Item | Descrição | Dados |
|------|-------------|------------------|
| `-b, --block=<100~1000>` | Número de blocos para executar o teste de leitura/gravação | 100 ~ 1000, padrão: 100 |

**Exemplo:** `flash -b 500`  
Executar teste de leitura/gravação da memória flash usando 500 blocos de dados.


### Comando WiFi

**1. `ap_set <ssid> [<pass>] [-a <authmode>] [-n <channel>] [-m <max_conn>]`**

Configurar o dispositivo para operar no modo WiFi AP com SSID, senha, tipo de autenticação e configurações de canal personalizados.

| Item | Descrição | Dados |
|------|-------------|------|
| `<ssid>` | SSID do AP | Obrigatório |
| `<pass>` | Senha do AP | Opcional |
| `-a, --authmode=<authmode>` | Tipo de autenticação WiFi | open / wep / wpa2 / wpa2_enterprise |
| `-n, --channel=<channel>` | Canal WiFi | Opcional |
| `-m, --max_conn=<max_conn>` | Número máximo de estações | padrão: 2 |

**Exemplo:** `ap_set MyAP 12345678 -a wpa2 -n 6 -m 4`  
Criar um AP WiFi WPA2 chamado "MyAP" no canal 6 com no máximo 4 conexões de clientes.


**2. `ap_query`**

Exibir a configuração atual do AP e desconectar a conexão em modo estação.

**Exemplo:** `ap_query`


**3. `wifi <action> [--espnow_enc=<int>] [--storage=<str>]`**

Ações de operação WiFi.

| Item | Descrição | Dados |
|------|-------------|------|
| `<action>` | Ação de operação WiFi | init / deinit / start / stop / restart / status |
| `--espnow_enc=<int>` | Criptografia ESP-NOW | apenas para init / restart |
| `--storage=<str>` | Tipo de armazenamento WiFi | flash / ram |

**Exemplo:** `wifi init --storage=flash`  
Inicializar o subsistema WiFi e armazenar a configuração na memória flash.


**4. `wifi_count [<action>]`**

Estatísticas de contagem de WiFi.

| Item | Descrição | Dados |
|------|-------------|------|
| `<action>` | Operação do contador| query(padrão) / clear |

**Exemplo:** `wifi_count clear` : Limpar as estatísticas atuais de contagem de WiFi.


**5. `wifi_mode <mode>`**

Definir o modo WiFi.

| Item | Descrição | Dados |
|------|-------------|------|
| `<mode>` | Modo WiFi | ap / sta / apsta |

**Exemplo:** `wifi_mode apsta` : Habilitar simultaneamente os modos AP e Station.


**6. `wifi_protocol [<protocol>] [--2g=<2g_proto>] [--5g=<5g_proto>] [-i <interface>]`**

Configurar o protocolo WiFi suportado pela interface selecionada (AP ou STA).

**Duas formas de configuração estão disponíveis**:
- `<protocol>`: Configurar o protocolo WiFi usando `esp_wifi_set_protocol()`
- `--2g / --5g`: Configurar protocolos separadamente para as bandas de 2,4 GHz e 5 GHz usando `esp_wifi_set_protocols()`

**Observação**:
- `esp_wifi_set_protocol()` e `esp_wifi_set_protocols()` não podem ser usados simultaneamente.
- Se nenhum parâmetro for fornecido, a configuração atual de protocolo WiFi será exibida.


| Item | Descrição | Dados |
|------|-------------|------|
| `<protocol>` | Configurar o protocolo WiFi usando esp_wifi_set_protocol() | Exemplo: b, b/g, b/g/n <br />g/n é inválido. |
| `--2g=<2g_proto>` | Configurar o protocolo de 2,4 GHz usando esp_wifi_set_protocols() | API: esp_wifi_set_protocols. <br />String de protocolo: 'lr', 'b', 'g', 'n', 'ax'<br />Combinar com modo lr: 'lr/b', 'lr/g', etc.<br />Valor de bitmap de protocolo: valor bruto de bitmap em hex, por exemplo: 0x40
 |
| `--5g=<5g_proto>` | Configurar o protocolo de 5 GHz | Mesmo formato que --2g |
| `-i, --interface=<interface>` | Selecionar a interface WiFi | ap, sta, padrão: sta |

**Exemplo:** `wifi_protocol --2g=lr/b/g/n -i sta`  
Configurar a interface STA para suportar os protocolos LR, 802.11b, 802.11g e 802.11n na banda de 2,4 GHz.


**7. `wifi_bandwidth [<cbw>] [--2g=<2g_cbw>] [--5g=<5g_cbw>] [-i <interface>]`**

Configurar a largura de banda do WiFi.

**Duas formas de configuração estão disponíveis**:
- `<cbw>`: Configurar a largura de banda usando `esp_wifi_set_bandwidth()`
- `--2g / --5g`: Configurar a largura de banda separadamente para as bandas de 2,4 GHz e 5 GHz usando `esp_wifi_set_bandwidths()`

**Observação**:
- `esp_wifi_set_bandwidth()` e `esp_wifi_set_bandwidths()` não podem ser usados simultaneamente.
- Se nenhum parâmetro for fornecido, a configuração atual de largura de banda WiFi será exibida.

| Item | Descrição | Dados |
|------|-------------|------|
| `<cbw>` | Largura de banda usando esp_wifi_set_bandwidth() | 20, 40 |
| `--2g=<2g_cbw>` | Largura de banda de 2,4 GHz usando esp_wifi_set_bandwidths() | 20, 40 |
| `--5g=<5g_cbw>` | Largura de banda de 5 GHz usando esp_wifi_set_bandwidths() | 20, 40 |
| `-i, --interface=<interface>` | Selecionar a interface WiFi | ap, sta, padrão: sta |

**Exemplo:** `wifi_bandwidth --2g=20 -i sta`  
Configurar a banda de 2,4 GHz para usar uma largura de banda de canal de 20 MHz.


**8. `wifi_ps <type>`**

Definir o modo de energia do WiFi. Este comando configura o modo de economia de energia do WiFi do dispositivo. Modos diferentes equilibram de forma distinta o consumo de energia e o desempenho da rede.

| Tipo | Modo | Latência | Descrição |
|------|------|---------|-------------|
| 0 | WIFI_PS_NONE | Mais baixa | Sem economia de energia, desempenho máximo |
| 1 | WIFI_PS_MIN_MODEM | Média | Economia de energia e desempenho equilibrados |
| 2 | WIFI_PS_MAX_MODEM | Mais alta | Economia máxima de energia, maior atraso |

**Exemplo:** `wifi_ps 1` : Define o modo de economia de energia do WiFi para economia mínima de energia do modem.


**9. `wifi_country [<code>] [-s <int>] [-n <int>] [-p <str>]`**

Definir ou obter a configuração de país do WiFi. Este comando configura o domínio regulatório do WiFi, incluindo canais permitidos e regras de transmissão com base nas regulamentações do país.

| Item | Descrição | Dados |
|------|-------------|------|
| `<code>` | Configuração do código de país (ou consulta o país atual se não for fornecido) | CN / US / JP / etc. |
| `-s, --schan=<int>` | Número inicial do canal WiFi | Inteiro (ex.: 1) |
| `-n, --nchan=<int>` | Número total de canais suportados | Inteiro (ex.: 13) |
| `-p, --policy=<str>` | Modo de política de país | auto (padrão) / manual |

**Exemplo:** `wifi_country CN -s 1 -n 13 -p auto`  
Define o país do WiFi como CN, habilita os canais 1-13 e usa a política regulatória automática.


**10. `sta_connect <ssid> [<pass>] [-b <bssid>] [-n <channel>] [-no-disconnect] [-no-reconnect] [-full-scan] [-failure_retry=<int>] [-5g-offset=<rssi_5g_offset>]`**

Conectar o dispositivo em modo STA a um ponto de acesso WiFi especificado.
| Item | Descrição | Dados |
| :--- | :--- | :--- |
| `<ssid>` | SSID do AP WiFi | String (nome do WiFi) |
| `<pass>` | Senha do AP | String (senha do WiFi) |
| `-b, --bssid=<bssid>` | Endereço MAC específico do AP | Endereço MAC (xx:xx:xx:xx:xx:xx) |
| `-n, --channel=<channel>` | Canal WiFi do AP | Inteiro |
| `--no-disconnect` | Para teste: não executar `esp_wifi_disconnect` antes de conectar | / |
| `--no-reconnect` | Desabilitar reconexão automática no manipulador de desconexão do WiFi | / |
| `--full-scan` | Habilitar varredura de canal completa durante a conexão STA | / |
| `--failure_retry=<int>` | Número de tentativas após falha de conexão | Inteiro |
| `--5g-offset=<rssi_5g_offset>` | Valor de offset para SSID 5G ao fazer conexão com varredura completa | Inteiro |

**Exemplo:** `sta_connect MyWiFi 12345678 -n 6 --failure_retry=3 --full-scan` : 
Conectar em modo STA ao AP WiFi especificado com controle opcional de varredura, tentativas e comportamento de conexão.


**11. `sta_disconnect`**

Desconectar o dispositivo do AP WiFi atual ou parar a reconexão.

**Exemplo:** `sta_disconnect`


**12. `sta_scan [-h] [<ssid>] [-b <bssid>] [-n <int>] [--max=<int>] [--min=<int>] [--passive] [--passive-time=<int>] [--dwell=<int>] [-2 <int/hex>] [-5 <int/hex>] [--count-only]`**

Escanear pontos de acesso WiFi disponíveis em modo estação.

| Item | Descrição | Dados |
| :--- | :--- | :--- |
| `<ssid>` | SSID do AP WiFi | String (nome do WiFi) |
| `-b, --bssid=<bssid>` | BSSID do AP | Endereço MAC (xx:xx:xx:xx:xx:xx) |
| `-n, --channel=<int>` | Canal do AP | Inteiro |
| `-h, --show-hidden` | Mostrar APs ocultos | / |
| `--max=<int>` | Tempo máximo de varredura ativa | Inteiro (ms) |
| `--min=<int>` | Tempo mínimo de varredura ativa | Inteiro (ms) |
| `--passive` | Definir tipo de varredura como passiva | / |
| `--passive-time` | Tempo de varredura passiva | Inteiro (ms) |
| `--dwell=<int>` | Tempo de permanência no canal doméstico | Inteiro (ms) |
| `-2, --bitmap-2g=<int/hex>` | Bitmap de varredura de canais 2,4GHz | Hex/int (ex.: 0x842 para ch1/6/11) |
| `-5, --bitmap-5g=<int/hex>` | Bitmap de varredura de canais 5GHz | Hex/int (ex.: 0x6 para ch36/40) |
| `--count-only` | Para teste: contar apenas o número de APs escaneados. | / |

**Exemplo:** `sta_scan -h --passive --passive-time=120 --dwell=30 -2 0x842 -5 0x6`  
Executar uma varredura WiFi passiva completa mostrando APs ocultos, escaneando canais 2,4GHz e 5GHz selecionados.


**13. `wifi_txpower [-u <unit>] [--reset]`**

Definir a potência de transmissão do WiFi ou restaurar para o padrão.

| Item | Descrição |
|------|-------------|
| `-u, --unit` | Valor de potência de TX, cada unidade = 0,25 dBm (ex.: 8 = 2 dBm) |
| `--reset` | Restaurar a potência de TX para o valor padrão da configuração do SDK |

**Exemplo:** `wifi_txpower -u 8` : Definir a potência de transmissão do WiFi para 2 dBm.


### Comando de Rede

**1. `ping [-W <timeout>] [-i <interval>] [-s <size>] [-c <count>] [-Q <n>] [host] [--abort]`**

Enviar pacotes ICMP ECHO_REQUEST para um host de rede.

| Item | Descrição | Dados |
| :--- | :--- | :--- |
| `-W, --timeout=<timeout>` | Tempo de espera pela resposta | Inteiro (segundos) |
| `-i, --interval=<interval>` | Intervalo entre o envio de pacotes | Float/Inteiro (segundos) |
| `-s, --packetsize=<size>` | Usar `<size>` como número de bytes de dados a serem enviados | Inteiro (bytes) |
| `-c, --count=<count>` | Número de pacotes a enviar, parar após `<count>` respostas | Inteiro, padrão: 5 |
| `-Q, --tos=<n>` | Valor do campo IP Type of Service | Inteiro |
| `host` | Endereço IP de destino ou nome de domínio | String |
| `--abort` | Parar o processo de ping em execução | ping abort -> esp_ping_stop |


**Exemplo:** `ping -c 4 8.8.8.8` : Enviar 4 solicitações ICMP echo para 8.8.8.8.


**2. `iperf [-suV] [-c <host>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>] [-f <format>] [--abort]`**

Medir o desempenho da rede (throughput, largura de banda e latência) usando TCP ou UDP.

| Item | Descrição | Dados |
| :--- | :--- | :--- |
| `-c, --client` | Executar em modo cliente e conectar ao servidor | IP/domínio |
| `-s, --server` | Executar em modo servidor | / |
| `-u, --udp` | Usar UDP em vez de TCP | / |
| `-V, --ipv6_domain` | Usar protocolo IPv6 | / |
| `-p, --port=<port>` | Número da porta do servidor | Inteiro |
| `-l, --len=<length>` | Tamanho do buffer para transmissão | Inteiro (bytes), Padrões: TCP=16384, IPv4 UDP=1470, IPv6 UDP=1450 |
| `-i, --interval=<interval>` | Segundos entre relatórios periódicos de largura de banda | Float/Inteiro (segundos) |
| `-t, --time=<time>` | Duração do teste | Inteiro (segundos), padrão 10s |
| `-b, --bandwidth=<bandwidth>` | Largura de banda alvo | Mbits/s |
| `-f, --format=<format>` | Formato de saída | String, k = Kbits/s, m = Mbits/s |
| `--abort` | Parar o teste iperf em execução | / |

**Exemplo:** `iperf -c 192.168.1.10 -t 10 -i 1`: 
Executar um teste de largura de banda TCP por 10 segundos contra o servidor 192.168.1.10, relatando resultados a cada 1 segundo.


### Comando BLE

**1. `ble [-a <0|1>]`**

Controlar o estado de advertising BLE para teste e descoberta Bluetooth.

| Item | Descrição | Dados |
| :--- | :--- | :--- |
| `-a, --adv=<0\|1>` | Controle de advertising BLE | 0: Advertising Stop, 1: Advertising Begin, padrão: 0 |

**Exemplo:** `ble -a 1` : Iniciar o modo de advertising BLE para descoberta do dispositivo.


### Comando de Modo de Energia

**1. `sleep [-m <0|1|2>]`**

Configurar o modo de suspensão do dispositivo para testes de baixo consumo.

| Item | Descrição | Dados |
| :--- | :--- | :--- |
| `-m, --mode=<0\|1\|2>` | Configurar o modo de suspensão do dispositivo para testes de baixo consumo. | 0: standby, 1: light sleep, 2: deep sleep, padrão: 0 |

**Exemplo:** `sleep -m 2` : Colocar o dispositivo em modo de deep sleep.


## Suporte Técnico & Discussão de Produtos

Envie qualquer problema técnico para o nosso [fórum](http://forum.seeedstudio.com/).

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>