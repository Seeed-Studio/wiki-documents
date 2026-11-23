---
title: Referência de Comandos do Firmware de Fábrica
description: 'Referência completa de comandos seriais para o firmware de fábrica do Wio-LR2021 Dev Kit'
keywords:
  - comando serial
  - firmware de fábrica
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_command_reference
sku: 100038329
sidebar_position: 2
last_update:
  date: 11/05/2026
  author: David Du
createdAt: '2026-11-05'
updatedAt: '2026-11-05'
url: https://wiki.seeedstudio.com/pt-br/wio_lr2021_dev_kit_command_reference/
---

## Convenções de Símbolos

| Símbolo | Significado | Exemplo |
| --- | --- | --- |
| `[ ]` | Parâmetro opcional; o padrão é aplicado quando omitido | `[-p <port>]` |
| `< >` | Um valor concreto que você deve fornecer | `-g <gpio>` |
| `\|` | Escolha um dos valores listados | `<0\|1>` |
| Palavras sem colchetes | Obrigatório | `ping <host>` |
| `cmd>` | Prompt do firmware; não o digite | `cmd> help` |

Os valores são sempre escritos como `-flag value`, por exemplo `gpio_set -g 4 -l 1`. Quando o firmware também registra uma forma longa, a forma longa é listada ao lado da forma curta na tabela de parâmetros.

## Índice de Comandos

| Categoria | Comandos | O que verifica | Seção |
| --- | --- | --- | --- |
| Geral | 1 | Link serial e ajuda no dispositivo | [General](#general) |
| LoRa / RF | 7 | Transmissão, recepção, CW e FLRC em Sub-GHz e 2,4 GHz | [LoRa / RF](#lora-rf) |
| BLE | 2 | Estado de advertising e status de conexão | [BLE](#ble) |
| Wi-Fi e rede | 14 | Modos STA e AP, varredura, versão de protocolo, ping | [Wi-Fi & network](#wifi-network) |
| Expansor de IO | 8 | Níveis de pino, varredura de barramento e trilhos comutados | [IO expander](#io-expander) |
| Bateria | 1 | Tensão da célula e estimativa de carga | [Battery](#battery) |
| OLED | 3 | Padrões de exibição e integridade do painel | [OLED](#oled) |
| Câmera | 5 | Inicialização, status e pré-visualização HTTP | [Camera](#camera) |
| Áudio | 7 | Gravar, reproduzir e transmitir | [Audio](#audio) |
| Flash | 3 | ID JEDEC, velocidade e endurance | [Flash](#flash) |

## General {#general}

### 1. help

Lista todos os comandos registrados com uma descrição de uma linha.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
help
```

## LoRa / RF {#lora-rf}

Estes sete comandos controlam o transceptor LR2021 on-board por meio de dois esquemas de modulação: LoRa para alcance e FLRC para velocidade. Todo comando de transmissão precisa de uma antena no conector correspondente: `SUB-1G` para frequências de portadora sub-GHz e `LR-2.4G` para a faixa de 2400 ~ 2500 MHz. Um teste de link entre duas placas precisa de parâmetros de rádio idênticos em ambos os lados.

**Nota**: `lora_rx`, `flrc_rx`, `lora_tx -n 0` e `flrc_tx -c 0` rodam até você pressionar `Ctrl+C`.

### 1. lora_tx

**`lora_tx [-f <freq_hz>] [-s <5-12>] [-b <0-9>] [-c <1-7>] [-p <dbm>] [--crc <0|1>] [--hdr <0|1>] [--iq <0|1>] [--net <0|1>] [-i <interval_ms>] [-d <text>] [-n <count>] [-hp <n>] [-dc <n>] [-lf <n>]`**

Envia pacotes LoRa com a frequência, spreading factor e potência configurados.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-f <freq_hz>` | Frequência de transmissão | `150000000 ~ 2500000000` Hz; padrão: `868000000` |
| `-s <5-12>` | Spreading factor | `5 ~ 12`; valores maiores são mais lentos e alcançam mais longe; padrão: `7` |
| `-b <0-9>` | Índice de largura de banda | `0`=31k, `1`=41k, `2`=62k, `3`=125k (padrão), `4`=200k, `5`=250k, `6`=400k, `7`=500k, `8`=800k, `9`=1000k |
| `-c <1-7>` | Taxa de codificação | `1 ~ 7`; `1`=4/5 é a mais rápida, `4`=4/8 a mais robusta; padrão: `1` |
| `-p <dbm>` | Potência de transmissão | Sub-GHz `-10 ~ +22` dBm, 2,4 GHz `-17 ~ +12` dBm; padrão: `10` |
| `--crc <0\|1>` | Verificação CRC | `0`=desligado, `1`=ligado; padrão: `1` |
| `--hdr <0\|1>` | Tipo de cabeçalho | `0`=implícito, `1`=explícito; padrão: `1` |
| `--iq <0\|1>` | Modo IQ | `0`=padrão, `1`=invertido; padrão: `0` |
| `--net <0\|1>` | Tipo de rede e sync word | `0`=privada (sync word `0x12`), `1`=pública (sync word `0x34`); padrão: `1` |
| `-i <interval_ms>` | Intervalo entre pacotes | Milissegundos; padrão: `200`; `0`=back-to-back |
| `-d <text>` | Texto de payload | Padrão: `hello` |
| `-n <count>` | Número de pacotes | `0`=enviar até `Ctrl+C`; padrão: `10` |
| `-hp <n>` | Registrador de meia potência do PA | Apenas depuração; deixe sem definir no uso normal |
| `-dc <n>` | Registrador de duty cycle do PA | Apenas depuração; deixe sem definir no uso normal |
| `-lf <n>` | Registrador de fatia de baixa frequência do PA | Apenas depuração; deixe sem definir no uso normal |

**Exemplo:**

```bash
lora_tx -f 868000000 -s 7 -b 3 -p 14 -d hello -n 10
```

:::note
Conecte a antena primeiro e inicie `lora_rx` com os mesmos valores de `-f`, `-s`, `-b`, `-c`, `--hdr`, `--crc`, `--iq` e `--net` na segunda placa. Um valor fora da faixa imprime um aviso `out of bounds` e o comando volta ao padrão: `-f` para a frequência padrão, `-s` para `7`, `-b` para `3`, `-c` para `1`; `-p` é limitado ao máximo da faixa. Um `-f` não numérico, ou um `-i` ou `-n` negativo, aborta o comando e não envia nada.
:::

### 2. lora_rx

**`lora_rx [-f <freq_hz>] [-s <5-12>] [-b <0-9>] [-c <1-7>] [--crc <0|1>] [--hdr <0|1>] [--plen <0-255>] [--iq <0|1>] [--net <0|1>]`**

Recebe pacotes LoRa continuamente e os conta.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-f <freq_hz>` | Frequência de recepção | `150000000 ~ 2500000000` Hz; padrão: `868000000` |
| `-s <5-12>` | Spreading factor | `5 ~ 12`; padrão: `7` |
| `-b <0-9>` | Índice de largura de banda | `0`=31k, `3`=125k (padrão), `9`=1000k |
| `-c <1-7>` | Taxa de codificação | `1 ~ 7`; padrão: `1` |
| `--crc <0\|1>` | Verificação CRC | `0`=desligado, `1`=ligado; padrão: `1` |
| `--hdr <0\|1>` | Tipo de cabeçalho | `0`=implícito, `1`=explícito; padrão: `1` |
| `--plen <0-255>` | Comprimento de payload que o receptor espera | Bytes; `0`=qualquer comprimento em modo explícito, modo implícito assume `5` quando omitido; padrão: `0` |
| `--iq <0\|1>` | Modo IQ | `0`=padrão, `1`=invertido; padrão: `0` |
| `--net <0\|1>` | Tipo de rede e sync word | `0`=privada (`0x12`), `1`=pública (`0x34`); padrão: `1` |

**Exemplo:**

```bash
lora_rx -f 868000000 -s 7 -b 3
```

:::note
O comando bloqueia o console até `Ctrl+C`, que imprime `rx_done`, `rx_hdr_err` e `rx_crc_err`. Ambas as placas devem usar o mesmo valor de `--hdr`; implícito em um lado e explícito no outro nunca recebe. No modo implícito defina `--plen` para o comprimento de payload do transmissor: um valor maior acrescenta lixo ao final e um menor o descarta. O modo implícito com `--crc 1` produziu falhas de CRC nos testes, então combine `--hdr 0` com `--crc 0`. Séries longas de `hdr err` a curta distância significam que os pacotes chegam back-to-back; aumente o `-i` do transmissor para `100` ~ `200` e mantenha-o maior que o tempo no ar de um pacote.
:::

### 3. lora_cw

**`lora_cw [-f <freq_hz>] [-p <dbm>]`**

Transmite uma onda contínua não modulada para medições de potência de RF.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-f <freq_hz>` | Frequência da portadora | `150000000 ~ 2500000000` Hz; padrão: `868000000`; um valor fora da faixa ou não numérico aborta o comando |
| `-p <dbm>` | Potência de transmissão | Sub-GHz `-10 ~ +22` dBm, 2,4 GHz `-17 ~ +12` dBm; padrão: `10`; limitado ao máximo da faixa |

**Exemplo:**

```bash
lora_cw -f 868000000 -p 10
```

:::note
A portadora continua até que `lora_cw_stop` seja digitado. Para mudar a potência ou a frequência no meio do teste, execute `lora_cw` novamente com o novo valor; a configuração é reiniciada automaticamente.
:::

### 4. lora_cw_pa

**`lora_cw_pa [-f <freq_hz>] [-p <dbm>] [-h <n>] [-d <0-31>] [-l <0-15>]`**

Transmite uma onda contínua com controle direto dos registradores do PA.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-f <freq_hz>` | Frequência da portadora | `150000000 ~ 2500000000` Hz; padrão: `868000000` |
| `-p <dbm>` | Potência de transmissão | Sub-GHz `-10 ~ +22` dBm, 2,4 GHz `-17 ~ +12` dBm; padrão: `10` |
| `-h <n>` | Valor de meia potência do PA | Passos de 0,5 dB; sub-GHz `-19 ~ 44`, 2,4 GHz `-39 ~ 24` |
| `-d <0-31>` | Duty cycle do PA | `0 ~ 31` |
| `-l <0-15>` | Fatias de baixa frequência do PA | `0 ~ 15` |

**Exemplo:**

```bash
lora_cw_pa -f 868000000 -h 22 -d 0 -l 0
```

:::note
Fornecer qualquer um de `-h`, `-d` ou `-l` alterna o comando para o modo de parâmetro direto e substitui a tabela de potência. Valores fora da faixa são limitados ao máximo da banda com um aviso `out of bounds`. Pare a portadora com `lora_cw_stop`.
:::

### 5. lora_cw_stop

**`lora_cw_stop`**

Interrompe uma onda contínua iniciada por `lora_cw` ou `lora_cw_pa`.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
lora_cw_stop
```

### 6. flrc_tx

**`flrc_tx [-f <freq_hz>] [-p <dbm>] [-b <0-7>] [-l <1-255>] [-c <count>]`**

Envia pacotes FLRC com um payload incremental, um pacote por segundo.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-f <freq_hz>` | Frequência de transmissão | `415000000 ~ 940000000` Hz; padrão: `915000000`; fora da faixa volta ao padrão |
| `-p <dbm>` | Potência de transmissão | `-10 ~ +22` dBm; padrão: `22`; limitado ao máximo |
| `-b <0-7>` | Combinação de taxa e largura de banda | `0`=2,6 Mbps (mais rápida) até `7`=0,26 Mbps; padrão: `0`; fora da faixa volta para `7` |
| `-l <1-255>` | Comprimento do pacote | Bytes; padrão: `200`; fora da faixa volta ao padrão |
| `-c <count>` | Número de pacotes | Padrão: `100`; `0`=enviar até `Ctrl+C`; valores acima de `500` são limitados a `500` |

**Exemplo:**

```bash
flrc_tx -f 868000000 -p 14 -l 200 -c 100
```

:::note
Um pacote sai a cada segundo, então uma execução de um minuto envia cerca de sessenta pacotes. Defina `-c 0` para transmitir sem parada até `Ctrl+C`.
:::

### 7. flrc_rx

**`flrc_rx [-f <freq_hz>] [-b <0-7>]`**

Recebe pacotes FLRC e conta pacotes bons, erros de cabeçalho e erros de CRC.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-f <freq_hz>` | Frequência de recepção | `415000000 ~ 940000000` Hz; padrão: `915000000`; fora da faixa volta ao padrão |
| `-b <0-7>` | Combinação de taxa e largura de banda | `0 ~ 7`; padrão: `0`; fora da faixa volta para `7` |

**Exemplo:**

```bash
flrc_rx -f 868000000 -b 0
```

:::note
`Ctrl+C` interrompe o receptor e imprime os contadores.
:::

## BLE {#ble}

O Bluetooth não é iniciado na inicialização. O primeiro `ble -a 1` inicializa a pilha BLE e começa a fazer advertising; `ble -a 0` para o advertising e descarrega a pilha para liberar sua memória. O nome do dispositivo começa com `wio-lr2021-` e o anúncio aceita conexões.

### 1. ble

**`ble -a <0|1>`**

Liga ou desliga o advertising Bluetooth.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-a <0\|1>` | Chave de advertising | `1`=iniciar advertising (inicializa a pilha no primeiro uso), `0`=parar advertising e liberar a pilha; obrigatório |

**Exemplo:**

```bash
ble -a 1
```

:::note
Procure por `wio-lr2021-` em um telefone com o nRF Connect; o dispositivo está saudável quando aparece na lista. Após a conexão, o app pode enviar comandos para o dispositivo e ler as linhas de log que ele imprime.
:::

### 2. ble_status

**`ble_status`**

Imprime o nome do dispositivo, endereço MAC, potência de TX, parâmetros de advertising e estado da conexão.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
ble_status
```

:::note
Se o Bluetooth não tiver sido inicializado, o comando pede para você executar `ble -a 1` primeiro.
:::

## Wi-Fi e rede {#wifi-network}

O Wi-Fi é inicializado e iniciado automaticamente na inicialização, portanto nenhum desses comandos precisa de um `wifi init` manual. A maioria deles encapsula o componente de teste de Wi-Fi da Espressif e possui muitas opções; as tabelas de parâmetros abaixo listam as documentadas. Entrar em um roteador requer seu próprio ponto de acesso de 2,4 GHz e sua senha.

### 1. wifi

**`wifi <status|stop|start|restart|init|deinit>`**

Consulta o estado do Wi-Fi ou inicia, para e reinicializa o rádio.

| Item | Descrição | Dados |
| --- | --- | --- |
| `status` | Mostra o estado de inicialização e informações de conexão | Consulta mais comum |
| `stop, start` | Para ou inicia o rádio, driver mantido | Testes de energia e remoção de interferência |
| `restart` | Reinicialização completa: stop, deinit, init, start | Recuperação após `deinit` |
| `init, deinit` | Inicializa ou descarrega o driver | Apenas para depuração de P&D |

**Exemplo:**

```bash
wifi status
```

:::note
Executar `wifi init` em um sistema já inicializado é ignorado com um único aviso `WiFi already initialise.`. `wifi deinit` para o rádio primeiro quando ele ainda está em execução, e `wifi status` imprime `initialized` e `started` separadamente.
:::

### 2. wifi_count

**`wifi_count [query|clear]`**

Imprime ou reinicia os contadores de pacotes transmitidos e recebidos do Wi-Fi.

| Item | Descrição | Dados |
| --- | --- | --- |
| `query` | Imprime os contadores | Padrão quando nenhum argumento é fornecido |
| `clear` | Zera ambos os contadores | — |

**Exemplo:**

```bash
wifi_count
```

### 3. wifi_mode

**`wifi_mode <sta|ap|apsta>`**

Define o papel de Wi-Fi do dispositivo.

| Item | Descrição | Dados |
| --- | --- | --- |
| `sta` | Entrar em outro hotspot, como um telefone | — |
| `ap` | Atuar como um hotspot | — |
| `apsta` | Ambos os papéis ao mesmo tempo | — |

**Exemplo:**

```bash
wifi_mode sta
```

### 4. wifi_protocol

**`wifi_protocol [protocol] [-i <ap|sta>]`**

Consulta ou define a combinação de protocolos 802.11.

| Item | Descrição | Dados |
| --- | --- | --- |
| `<protocol>` | Combinação de protocolos | `b`, `b/g`, `b/g/n`; padrão: consulta o valor atual |
| `-i <ap\|sta>` | Interface à qual aplicar a configuração | `ap` ou `sta`; padrão: `sta` |

**Exemplo:**

```bash
wifi_protocol b/g/n
```

### 5. wifi_bandwidth

**`wifi_bandwidth [20|40] [-i <ap|sta>]`**

Consulta ou define a largura de banda do canal.

| Item | Descrição | Dados |
| --- | --- | --- |
| `<20\|40>` | Largura de banda do canal em MHz | `20` ou `40`; padrão: consulta o valor atual |
| `-i <ap\|sta>` | Interface à qual aplicar a configuração | `ap` ou `sta`; padrão: `sta` |

**Exemplo:**

```bash
wifi_bandwidth 20
```

### 6. wifi_ps

**`wifi_ps <0|1|2>`**

Define o nível de economia de energia do Wi-Fi.

| Item | Descrição | Dados |
| --- | --- | --- |
| `0` | Sem economia de energia, desempenho máximo | Obrigatório |
| `1` | Economia moderada | — |
| `2` | Economia máxima | — |

**Exemplo:**

```bash
wifi_ps 0
```

### 7. wifi_country

**`wifi_country [code] [-s <start_channel>] [-n <channel_count>] [-p <auto|manual>]`**

Consulta ou define o código do país e a faixa de canais utilizáveis.

| Item | Descrição | Dados |
| --- | --- | --- |
| `<code>` | Código de país de duas letras | Por exemplo `US`; padrão: consulta o valor atual |
| `-s <start_channel>` | Primeiro canal da faixa permitida | Número do canal; padrão: não definido |
| `-n <channel_count>` | Número de canais na faixa | Quantidade; padrão: não definido |
| `-p <auto\|manual>` | Seleção do plano de canais | `auto` ou `manual`; padrão: não definido |

**Exemplo:**

```bash
wifi_country US
```

### 8. ap_set

**`ap_set <ssid> [pass] [-a <authmode>] [-n <channel>] [-m <max_conn>]`**

Transforma o dispositivo em um hotspot Wi-Fi para que um telefone ou PC possa se conectar a ele.

| Item | Descrição | Dados |
| --- | --- | --- |
| `<ssid>` | Nome do hotspot | Obrigatório |
| `<pass>` | Senha do hotspot | Pelo menos 8 caracteres; opcional |
| `-a <authmode>` | Modo de segurança | `open`, `wep`, `wpa2`; um nome não reconhecido é relatado e o hotspot volta para `open`; padrão: não definido |
| `-n <channel>` | Canal do hotspot | Número do canal; padrão: não definido |
| `-m <max_conn>` | Máximo de clientes simultâneos | Padrão: `2` |

**Exemplo:**

```bash
ap_set MyTestAP 12345678
```

**Alias**: `ap` (igual a `ap_set`).

:::note
Altere a senha antes de deixar o hotspot ativo em uma rede compartilhada e pare-o quando o teste terminar.
:::

### 9. ap_query

**`ap_query`**

Mostra a configuração atual do hotspot e quantos clientes estão conectados.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
ap_query
```

### 10. sta_connect

**`sta_connect <ssid> <pass> [-n <channel>]`**

Entra em um hotspot Wi-Fi que você fornece, como estação.

| Item | Descrição | Dados |
| --- | --- | --- |
| `<ssid>` | Nome do hotspot | Obrigatório |
| `<pass>` | Senha do hotspot | Obrigatório |
| `-n <channel>` | Canal no qual entrar | Opcional; um canal conhecido acelera a conexão |

**Exemplo:**

```bash
sta_connect MyHomeWiFi 12345678
```

**Saída esperada:**

```bash
got ip:192.168.<x>.<y>
```

O endereço IP muda em cada rede; o critério de sucesso é a linha `got ip:`, que aparece entre as linhas de log da conexão.

**Alias**: `sta` (igual a `sta_connect`).

:::note
O Wi-Fi deve estar inicializado e iniciado, que é o estado na inicialização. Após `wifi stop` ou `wifi deinit`, o comando é recusado com uma dica para executar `wifi restart` primeiro. Execute `sta_disconnect` antes de entrar em uma rede diferente.
:::

### 11. sta_disconnect

**`sta_disconnect`**

Desconecta da rede atual e interrompe o auto-reconectar.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
sta_disconnect
```

**Alias**: `disconnect` (igual a `sta_disconnect`).

### 12. sta_scan

**`sta_scan [<ssid>] [-n <channel>] [-h]`**

Faz uma varredura por hotspots próximos e imprime nome, intensidade do sinal e canal.

| Item | Descrição | Dados |
| --- | --- | --- |
| `<ssid>` | Mostra apenas o hotspot com este nome | Filtro opcional |
| `-n <channel>` | Varre um único canal | Número do canal; opcional |
| `-h` | Inclui redes ocultas; a forma longa `--show-hidden` faz o mesmo | Sem valor |

**Exemplo:**

```bash
sta_scan
```

**Aliases**: `wifi_scan` e `scan` (igual a `sta_scan`).

:::note
Uma varredura é a verificação mais rápida da antena de Wi-Fi e do caminho de recepção: uma lista vazia significa que o rádio não está recebendo.
:::

### 13. wifi_txpower

**`wifi_txpower [-u <value>] [--reset]`**

Lê ou define a potência de transmissão do Wi-Fi.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-u <value>` | Potência de transmissão em unidades de 0,25 dBm | Por exemplo `80` = 20 dBm; padrão: lê o valor atual |
| `--reset` | Restaura a potência padrão | Sem valor |

**Exemplo:**

```bash
wifi_txpower -u 68
```

### 14. ping

**`ping <host> [-c <count>] [-i <interval_s>] [-s <bytes>] [-W <timeout_s>] [--abort]`**

Envia requisições ICMP echo para um host e relata a latência.

| Item | Descrição | Dados |
| --- | --- | --- |
| `<host>` | Endereço IP ou domínio de destino | Obrigatório |
| `-c <count>` | Número de requisições echo | Padrão: `5` |
| `-i <interval_s>` | Segundos entre requisições | Padrão: `1` |
| `-s <bytes>` | Tamanho do payload por requisição | Padrão: `64` |
| `-W <timeout_s>` | Tempo limite de resposta em segundos | Padrão: não definido |
| `--abort` | Interrompe um ping em execução | Sem valor |

**Exemplo:**

```bash
ping 192.168.1.1 -c 4 -i 1
```

:::note
O Wi-Fi é inicializado na inicialização; execute `sta_connect` primeiro para que o dispositivo tenha um endereço e uma rota.
:::

## Expansor de IO {#io-expander}

Os números de GPIO são números de GPIO do ESP32-S3; as funções dos pinos estão listadas no [Wio-LR2021 Dev Kit Pin Map](/pt-br/wio_lr2021_dev_kit_getting_started). O expansor de IO é o PCA9535 no endereço I²C `0x21`. Ele expõe 16 pinos numerados de 0 a 15; quatro deles comutam os trilhos da câmera, áudio, OLED e Grove.

:::note
Um pino que nenhum periférico reivindica permanece como entrada flutuante após a energização (resistores de pull desligados), portanto um `gpio_get` bruto lê ruído. Execute `gpio_config` primeiro: `-m 0` para entrada com um pull opcional, `-m 1` para saída push-pull, `-m 2` para saída open-drain.
:::

### 1. gpio_set

**`gpio_set -g <gpio> -l <0|1>`**

Força um GPIO em nível alto ou baixo.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-g <gpio>` | Número do GPIO | Obrigatório |
| `-l <0\|1>` | Nível de saída | `1`=alto (cerca de 3,3 V), `0`=baixo (0 V); obrigatório |

**Exemplo:**

```bash
gpio_set -g 4 -l 1
```

:::note
Configure a direção com `gpio_config -m 1` antes de acionar o pino e verifique o nível com um multímetro ou um fio de loopback em outro GPIO.
:::

### 2. gpio_get

**`gpio_get -g <gpio>`**

Lê o nível atual de um GPIO.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-g <gpio>` | Número do GPIO | Obrigatório |

**Exemplo:**

```bash
gpio_get -g 4
```

### 3. gpio_config

**`gpio_config -g <gpio> -m <0|1|2> [-p <0|1|2|3>]`**

Define a direção e os resistores de pull de um GPIO.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-g <gpio>` | Número do GPIO | Obrigatório |
| `-m <0\|1\|2>` | Direção | `0`=entrada, `1`=saída, `2`=saída open-drain; obrigatório |
| `-p <0\|1\|2\|3>` | Resistores de pull | `0`=flutuante (padrão), `1`=pull-up, `2`=pull-down, `3`=ambos ativados |

**Exemplo:**

```bash
gpio_config -g 5 -m 0 -p 1
```

### 4. i2c_scan

**`i2c_scan [-b <0|1>]`**

Faz uma varredura em um ou ambos os barramentos I²C e lista os endereços que respondem.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-b <0\|1>` | Número do barramento a ser verificado | `0` ou `1`; padrão: verificar ambos |

**Exemplo:**

```bash
i2c_scan -b 0
```

:::note
Em uma placa saudável, o barramento 0 mostra o PCA9535 em `0x21` e, quando o trilho do display está ligado, o OLED em `0x3D`. Um endereço ausente significa que o chip não está soldado, não está alimentado ou não está respondendo.
:::

### 5. io_exp_set

**`io_exp_set -i <0-15> -l <0|1>`**

Coloca um pino do expansor de IO em nível alto ou baixo.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-i <0-15>` | Número do pino do expansor | `0 ~ 15`; obrigatório |
| `-l <0\|1>` | Nível de saída | `1`=alto, `0`=baixo; obrigatório |

**Exemplo:**

```bash
io_exp_set -i 3 -l 1
```

:::note
Os pinos `0 ~ 3` comutam trilhos de periféricos; acioná-los altera o estado de energia da câmera, áudio, OLED e conectores Grove.
:::

### 6. io_exp_get

**`io_exp_get -i <0-15>`**

Lê um pino do expansor de IO.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-i <0-15>` | Número do pino do expansor | `0 ~ 15`; obrigatório |

**Exemplo:**

```bash
io_exp_get -i 3
```

### 7. io_exp_config

**`io_exp_config -i <0-15> -m <0|1>`**

Configura um pino do expansor de IO como entrada ou saída.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-i <0-15>` | Número do pino do expansor | `0 ~ 15`; obrigatório |
| `-m <0\|1>` | Direção | `0`=entrada, `1`=saída; obrigatório |

**Exemplo:**

```bash
io_exp_config -i 3 -m 1
```

### 8. io_exp_print

**`io_exp_print`**

Imprime a direção e o nível de todos os 16 pinos do expansor em uma tabela.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
io_exp_print
```

## Bateria {#battery}

### 1. battery_get

**`battery_get`**

Lê a tensão da célula em milivolts e estima o estado de carga.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
battery_get
```

:::note
Uma célula deve estar conectada ao conector `BAT-3.7V` para uma leitura significativa; o carregador informa seu próprio estado nos pinos 11 e 12 do expansor.
:::

## OLED {#oled}

O primeiro comando OLED de uma sessão energiza o trilho do display e inicializa o painel, portanto não é necessário um passo de preparação separado. O painel tem 128 × 64 pixels e está no barramento I²C interno em `0x3D`.

### 1. oled_test

**`oled_test -m <mode>`**

Desenha um padrão de teste no painel OLED.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-m <mode>` | Padrão a desenhar | `clear`=todos os pixels desligados<br />`solid`=todos os pixels ligados<br />`checker`=xadrez<br />`stripes`=listras verticais<br />`border`=fundo preto com uma borda<br />`text`=texto de status como `OLED OK` e a resolução<br />`scan`=linhas de varredura; obrigatório |

**Exemplo:**

```bash
oled_test -m text
```

:::note
`-m text` é o teste mais rápido de aprovação/reprovação do painel: o padrão de texto é desenhado pelo mesmo driver que desenha todos os outros padrões.
:::

### 2. oled_line_demo

**`oled_line_demo -m <checker|scan>`**

Atualiza o painel segmento por segmento através de um pequeno buffer de linha.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-m <checker\|scan>` | Padrão a atualizar | `checker`=xadrez, `scan`=linhas de varredura; obrigatório |

**Exemplo:**

```bash
oled_line_demo -m checker
```

### 3. oled_cycle

**`oled_cycle [-d <dwell_ms>]`**

Reproduz seis padrões de teste em sequência e termina por conta própria.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-d <dwell_ms>` | Tempo que cada padrão permanece na tela | Milissegundos; padrão: `800` |

**Exemplo:**

```bash
oled_cycle -d 1500
```

:::note
A sequência é clear, border, text, checkerboard, stripes e scan lines. Uma passagem cobre todo o painel, por isso a linha de produção a utiliza para inspeção visual.
:::

## Câmera {#camera}

A câmera é a GC2145 de 2 MP no Media HAT; o firmware de fábrica a lê como RGB565 e transmite quadros JPEG. `camera_http_start` é a verificação ponta a ponta mais curta porque ativa o hotspot, a câmera e o servidor web com um único comando.

### 1. camera_start

**`camera_start [-q <1-100>] [-r <qqvga|qvga|vga>] [-F <hz>]`**

Liga e inicializa a câmera.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-q <1-100>` | Qualidade de compressão JPEG | `1 ~ 100`; padrão: `80` |
| `-r <qqvga\|qvga\|vga>` | Resolução de captura | `qqvga`=160×120, `qvga`=320×240 (padrão), `vga`=640×480 |
| `-F <hz>` | Clock do barramento de controle da câmera (I²C) | Hz; padrão: `100000` |

**Exemplo:**

```bash
camera_start -r vga
```

:::note
Executar `camera_start` novamente com um `-r` ou `-F` diferente reinicia a câmera e altera a configuração. Os primeiros quadros após a inicialização são descartados como aquecimento. O comando também é a forma mais rápida de confirmar que a câmera inicializa.
:::

### 2. camera_stop

**`camera_stop`**

Para a câmera e a desliga.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
camera_stop
```

### 3. camera_http_start

**`camera_http_start [-s <ssid>] [-p <pwd>] [-c <1-13>] [-q <1-100>] [-f <1-30>] [-P <port>] [-r <qqvga|qvga|vga>] [-F <hz>]`**

Inicia o hotspot, a câmera e a pré-visualização web MJPEG com um único comando.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-s <ssid>` | Nome do hotspot | Padrão: `wio-lr2021-camera` |
| `-p <pwd>` | Senha do hotspot | 8 ~ 63 caracteres, vazio para uma rede aberta; padrão: `12345678` |
| `-c <1-13>` | Canal do hotspot | `1 ~ 13`; padrão: `1` |
| `-q <1-100>` | Qualidade JPEG | Maior é mais nítido e usa mais banda; padrão: `80` |
| `-f <1-30>` | Limite de taxa de quadros | Quadros por segundo; padrão: `20` |
| `-P <port>` | Porta do servidor web | O fluxo de vídeo usa esta porta mais um; alterá-la enquanto estiver em execução reinicia o serviço web, e um valor fora da faixa gera aviso e volta ao padrão; padrão: `80` |
| `-r <qqvga\|qvga\|vga>` | Resolução do fluxo | Padrão: `qvga` |
| `-F <hz>` | Clock do barramento de controle da câmera (I²C) | Hz; padrão: `100000` |

**Exemplo:**

```text
camera_http_start -q 60 -f 10
```

:::note
Depois de alterar `-s`, `-p` ou `-c` e executar o comando novamente, desconecte e reconecte o telefone ou PC do hotspot. Caso contrário, o cliente ainda mostra uma conexão enquanto a placa está inacessível.
:::

**Uso**: conecte-se ao hotspot `wio-lr2021-camera` com a senha `12345678`, depois abra `http://192.168.4.1` em um navegador. Uma imagem ao vivo significa que a câmera e o caminho Wi-Fi estão funcionando.

:::note
A página web não tem autenticação. Mantenha o hotspot fora de qualquer rede compartilhada ou corporativa e feche-o com `camera_http_stop`.
:::

### 4. camera_http_stop

**`camera_http_stop`**

Para o servidor web e desliga a câmera e o hotspot.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
camera_http_stop
```

### 5. camera_status

**`camera_status`**

Imprime o estado da câmera, do hotspot e do servidor web, resolução e qualidade.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
camera_status
```

## Áudio {#audio}

Um slot de áudio é um buffer de gravação na RAM, portanto nenhum cartão SD é necessário: grave no slot, depois reproduza ou transmita para um PC pelo hotspot do dispositivo.

### 1. audio_init

**`audio_init`**

Liga o circuito de áudio e inicializa o codec e o microfone.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
audio_init
```

:::note
O firmware executa isto uma vez na inicialização; use-o para recuperar após `audio_deinit`.
:::

### 2. audio_deinit

**`audio_deinit`**

Desliga o circuito de áudio.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
audio_deinit
```

:::note
Gravação e reprodução permanecem indisponíveis até que `audio_init` seja executado novamente. Use-o para medições de consumo de energia. Se o áudio nunca tiver sido inicializado desde a inicialização, o comando é recusado, portanto um segundo `audio_deinit` em sequência não faz nada.
:::

### 3. audio_slot_record

**`audio_slot_record [-d <100-60000>] [-m <20.0-37.5>]`**

Grava do microfone para o slot de áudio.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-d <100-60000>` | Duração da gravação | Milissegundos; `100 ~ 60000`; padrão: `10000` |
| `-m <20.0-37.5>` | Ganho do microfone | dB; `20.0 ~ 37.5`; padrão: `37.5` (máximo) |

**Exemplo:**

```bash
audio_slot_record -d 5000 -m 30
```

:::note
O slot contém dados brutos do microfone sem processamento por software. Fale perto do microfone durante a gravação. O áudio é inicializado na inicialização; após `audio_deinit`, execute `audio_init` primeiro ou o comando será recusado.
:::

### 4. audio_slot_play

**`audio_slot_play [-v <0-100>]`**

Reproduz o slot gravado pelo alto-falante.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-v <0-100>` | Volume de reprodução | `0 ~ 100`; padrão: manter o volume atual |

**Exemplo:**

```bash
audio_slot_play -v 80
```

:::note
Conecte um alto-falante ao conector `SPK` no Media HAT. O comando reproduz o que o slot contém no momento, portanto grave primeiro; ele é recusado quando o áudio não está inicializado ou o slot está vazio.
:::

### 5. audio_slot_send

**`audio_slot_send [-p <port>]`**

Transmite o slot pelo hotspot do dispositivo para um PC como um arquivo WAV.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-p <port>` | Porta TCP à qual o PC se conecta | Padrão: `3444` |

**Exemplo:**

```bash
audio_slot_send
```

**Uso**: conecte-se ao hotspot `wio-lr2021-audio` (senha `12345678`) a partir do PC, depois execute `python tools/recv_wav_from_device.py -o slot.wav`. O script se conecta a `192.168.4.1:3444`, lê um cabeçalho de 8 bytes (magic `AUDF` mais o comprimento do áudio) e depois os bytes de áudio; o arquivo pode ser reproduzido assim que for gravado.

:::note
O comando retorna imediatamente e a transferência ocorre em segundo plano. O hotspot não é fechado quando a transferência termina, portanto várias gravações podem ser enviadas em sequência; pare-o com `audio_slot_stop`.
:::

### 6. audio_slot_stop

**`audio_slot_stop`**

Interrompe qualquer transferência em execução e fecha o hotspot de áudio.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
audio_slot_stop
```

:::note
Seguro para executar sem transferência em andamento; o único efeito é fechar o hotspot.
:::

### 7. audio_slot_info

**`audio_slot_info`**

Imprime o estado do slot: se existe uma gravação, seu tamanho, taxa de amostragem, canais, duração e memória livre.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
audio_slot_info
```

## Flash {#flash}

Os testes de resistência e velocidade da flash funcionam apenas dentro da partição dedicada `flashtest`, portanto a imagem de firmware e os dados do usuário nunca são tocados. `flash_endurance` é executado como uma tarefa em segundo plano e continua gravando enquanto o console permanece utilizável.

### 1. flash_info

**`flash_info`**

Lê o ID JEDEC da flash, fornecedor e capacidade e verifica o início e o fim da partição de teste.

Este comando não recebe parâmetros.

**Exemplo:**

```bash
flash_info
```

:::note
O código de retorno `0` significa aprovado; a verificação de gravação de limite detecta um chip flash com capacidade superestimada.
:::

### 2. flash_endurance

**`flash_endurance -a <start|stop|status> [-m <minutes>] [-s <sectors>] [-d <ms>]`**

Execute um teste prolongado de apagar, gravar e ler de volta na partição de teste da flash.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-a <start\|stop\|status>` | Ação | `start`, `stop` ou `status`; obrigatório |
| `-m <minutes>` | Duração da execução | Minutos; `0` executa até ser interrompido; padrão: `1440` |
| `-s <sectors>` | Setores gravados por rodada | `0`=toda a partição de teste; padrão: `0` |
| `-d <ms>` | Atraso entre setores | Milissegundos; `0`=velocidade máxima; padrão: `0` |

**Exemplo:**

```bash
flash_endurance -a start -m 60
```

:::note
O comando retorna imediatamente e o teste prolongado é executado em segundo plano; verifique o progresso com `-a status` e finalize com `-a stop`. Cada rodada desgasta a flash, portanto execute em amostras em vez de em todas as placas.
:::

### 3. flash_speed

**`flash_speed [-t <kb>]`**

Meça o tempo de programação de página, o tempo de apagamento de setor e a taxa de transferência de leitura/gravação.

| Item | Descrição | Dados |
| --- | --- | --- |
| `-t <kb>` | Quantidade de dados usada para o teste de taxa de transferência | KB; padrão: `64` |

**Exemplo:**

```bash
flash_speed -t 128
```

:::note
O código de retorno `0` significa que todas as medições estão dentro dos limites do datasheet.
:::

## Apelidos

Cinco apelidos de compatibilidade são registrados. Eles chamam exatamente a mesma função que o comando primário; use o nome primário em scripts e documentação.

| Apelido | Comando primário | Observação |
| --- | --- | --- |
| `ap` | `ap_set` | Mesma função; prefira o nome primário. |
| `sta` | `sta_connect` | Mesma função; prefira o nome primário. |
| `disconnect` | `sta_disconnect` | Mesma função; prefira o nome primário. |
| `wifi_scan` | `sta_scan` | Mesma função; prefira o nome primário. |
| `scan` | `sta_scan` | Mesma função; prefira o nome primário. |

## Strings de Resultado e Códigos de Retorno

O firmware relata resultados como linhas de texto simples na porta serial e então retorna ao prompt `cmd>`. Os marcadores abaixo são os documentados para o firmware V2.1.0; o inventário completo de prefixos de log está pendente de uma captura serial em hardware.

| Marcador | Onde aparece | Significado |
| --- | --- | --- |
| `cmd>` | Todo comando | Prompt; o firmware está pronto para o próximo comando |
| `got ip:` | `sta_connect` | A estação obteve um endereço; a conexão foi bem-sucedida |
| Código de retorno `0` | `flash_info`, `flash_speed` | Todas as verificações foram aprovadas; qualquer outro código é uma falha |
| `AUDF` | Cabeçalho do receptor `audio_slot_send` | Magic no início do cabeçalho de 8 bytes, seguido pelo comprimento do áudio |
| `Alias of` | Listagem de `help` | A entrada é um apelido de compatibilidade, não um comando separado |
| `out of bounds` | Avisos de parâmetro | O valor foi limitado ou substituído; o comando ainda é executado |
| `rx_done` / `rx_hdr_err` / `rx_crc_err` | Saída de `lora_rx` | Contadores de recepção impressos após `Ctrl+C` |
| `WiFi already initialise.` | `wifi init` | O driver já estava inicializado, portanto a chamada é ignorada |

Um valor que não pode ser analisado aborta o comando e imprime uma linha de erro em inglês; um valor fora do intervalo geralmente registra `out of bounds` e volta para um padrão documentado. A redação difere por comando, portanto corrija o valor sinalizado e execute o comando novamente em vez de fazer correspondência com a frase.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
