---
description: Formato de Payload do Tracker SenseCAP T2000
title: Formato de Payload
keywords:
  - Tracker
  - SenseCAP
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /t2000_payload_format
last_update:
  date: 3/12/2026
  author: Janet
createdAt: '2026-03-12'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/t2000_payload_format/
---

# Formato de Payload

## Análise de Pacote de Uplink

O protocolo de dados do tracker fornece pacotes diferentes para corresponder a diferentes informações, e o número de bytes de cada pacote pode variar. A estrutura do quadro é mostrada na imagem abaixo. O conteúdo do quadro é enviado em **ordem de bytes big-endian**.

|ID de Dados|Valor de Dados|
| - | :- |
|1 byte|50 bytes (Máx)|

**ID de Dados**: Número de função.<br />
**Valor de Dados**: Posição, dados de sensor e outras informações.

### Pacote de Inicialização (0x27)

O pacote de inicialização é enviado pelo dispositivo imediatamente após a inicialização. Ele contém os parâmetros de configuração atuais e o status do dispositivo. O ID do quadro é `0x27`, e o comprimento total é de 46 bytes.

| 0x27 | Byte2 | Byte3~4 | Byte5~6 | Byte7 | Byte8 | Byte9~10 | Byte11~12 |
| :--: | :---: | :-----: | :-----: | :--: | :--: | :------: | :-------: |
| ID | Nível de Bateria | Versão de Software | Versão de Hardware | Modo de Trabalho | Estratégia de Posicionamento | Intervalo de Heartbeat | Intervalo de Uplink em Modo Periódico |

| Byte13~14 | Byte15 | Byte16 | Byte17 | Byte18 | Byte19~20 | Byte21~22 |
| :-------: | :----: | :----: | :----: | :----: | :-------: | :-------: |
| Intervalo de Uplink em Modo de Evento | Ativar Acelerômetro de 3 Eixos | Ativar Alarme de Desmontagem | Tempo Limite de Varredura GNSS | Ativar Evento de Movimento | Limite de Movimento em 3 Eixos | Intervalo de Uplink em Movimento |

| Byte23 | Byte24~25 | Byte26 | Byte27~28 | Byte29 | Byte30 | Byte31~46 |
| :----: | :-------: | :----: | :-------: | :----: | :----: | :-------: |
| Ativar Evento de Imobilidade | Tempo Limite de Imobilidade | Ativar Evento de Impacto | Limite de Impacto em 3 Eixos | Tempo Limite de Varredura iBeacon (s) | Bytes Válidos do Filtro de UUID | Filtro de UUID (16 Bytes) |

**Exemplo de Payload Bruto**

`27 56 0100 0101 01 08 02d0 003c 003c 00 01 3c 00 001e 0005 00 0168 00 012c 03 00 00000000000000000000000000000000`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de Quadro | uint8 | 27 | 27 é o ID do pacote |
| 2 | Nível de Bateria | uint8 | 56 | `0x56` = 86(DEC)<br /> O nível de bateria é 86% |
| 3~4 | Versão de Software | uint16 | 0100 | `0x0100` = v1.0<br /> A versão de software é v1.0 |
| 5~6 | Versão de Hardware | uint16 | 0101 | `0x0101` = v1.1<br /> A versão de hardware é v1.1 |
| 7 | Modo de Trabalho | uint8 | 01 | 01 = Modo Periódico<br />`00`: Modo de Espera<br />`01`: Modo Periódico<br />`02`: Modo de Evento |
| 8 | Estratégia de Posicionamento | uint8 | 00 | 07 = 0x07, significa que o dispositivo usa a estratégia de posicionamento Bluetooth + Wi‑Fi + GNSS <br />`00`: Somente GNSS<br />`01`: Somente Wi‑Fi<br />`02`: Wi‑Fi + GNSS<br />`03`: GNSS + Wi‑Fi<br />`04`: Somente Bluetooth<br />`05`: Bluetooth + Wi‑Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi‑Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 9~10 | Intervalo de Heartbeat | uint16 | 02d0 | `0x02D0` = 720 minutos |
| 11~12 | Intervalo de Uplink em Modo Periódico | uint16 | 003c | `0x003C` = 60 minutos |
| 13~14 | Intervalo de Uplink em Modo de Evento | uint16 | 003c | `0x003C` = 60 minutos |
| 15 | Ativar Acelerômetro de 3 Eixos | uint8 | 00 | `00`: Desativar<br />`01`: Ativar |
| 16 | Ativar Alarme de Desmontagem | uint8 | 01 | `00`: Desativar<br />`01`: Ativar |
| 17 | Tempo Limite de Varredura GNSS | uint8 | 3c | `0x3C` = 60 segundos |
| 18 | Ativar Evento de Movimento | uint8 | 00 | `00`: Desativar<br />`01`: Ativar |
| 19~20 | Limite de Movimento em 3 Eixos | uint16 | 001e | `0x001e` = 30 mg |
| 21~22 | Intervalo de Uplink em Movimento | uint16 | 0005 | `0x05` = 5 minutos |
| 23 | Ativar Evento de Imobilidade | uint8 | 00 | `0x00`: Desativar<br />`0x01`: Ativar |
| 24~25 | Tempo Limite de Imobilidade | uint16 | 0168 | `0x0168` = 360 minutos |
| 26 | Ativar Evento de Impacto | uint8 | 00 | `00`: Desativar<br />`01`: Ativar |
| 27~28 | Limite de Impacto em 3 Eixos | uint16 | 012c | `0x012c` = 300 mg |
| 29 | Tempo Limite de Varredura iBeacon (s) | uint8 | 03 | `0x03` = 3 segundos |
| 30 | Bytes Válidos do Filtro de UUID | uint8 | 00 | Número de bytes válidos no filtro de UUID (0–16) |
| 31~46 | Filtro de UUID | 16 bytes | 0000000000000000<br />0000000000000000 | Filtro de UUID Bluetooth de 16 bytes. Somente os primeiros N bytes (definidos pelo byte30) são significativos |

### Pacote em Modo Periódico (0x28)

O pacote de parâmetros do modo periódico contém a configuração atual do modo de trabalho. O ID do quadro é `0x28`, e o comprimento total é de 30 bytes.

| 0x28 | Byte2 | Byte3 | Byte4~5 | Byte6~7 | Byte8~9 | Byte10 | Byte11 | Byte12 | Byte13 | Byte14 | Byte15~30 |
| :--: | :---: | :---: | :-----: | :-----: | :-----: | :----: | :----: | :----: | :----: | :----: | :-------: |
| ID | Modo de Trabalho | Estratégia de Posicionamento | Intervalo de Heartbeat | Intervalo de Uplink | Intervalo de Uplink em Modo de Evento | Ativar Acelerômetro de 3 Eixos | Ativar Alarme de Desmontagem | Tempo Limite de Varredura GNSS | Tempo Limite de Varredura iBeacon | Bytes Válidos do Filtro de UUID | Filtro de UUID (16 Bytes) |

**Exemplo de Payload Bruto**

`28 01 07 02d0 003c 003c 01 00 3c 0a 10 00000000000000000000000000000000`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de Quadro | uint8 | 28 | 28 é o ID do pacote |
| 2 | Modo de Trabalho | uint8 | 01 | 01 = Modo Periódico<br />`00`: Modo de Espera<br />`01`: Modo Periódico<br />`02`: Modo de Evento |
| 3 | Estratégia de Posicionamento | uint8 | 07 | 07 = 0x07, significa que o dispositivo usa a estratégia de posicionamento Bluetooth + Wi‑Fi + GNSS <br />`00`: Somente GNSS<br />`01`: Somente Wi‑Fi<br />`02`: Wi‑Fi + GNSS<br />`03`: GNSS + Wi‑Fi<br />`04`: Somente Bluetooth<br />`05`: Bluetooth + Wi‑Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi‑Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 4~5 | Intervalo de Heartbeat | uint16 | 02d0 | `0x02D0` = 720 minutos |
| 6~7 | Intervalo de Uplink | uint16 | 003c | `0x003C` = 60 minutos |
| 8~9 | Intervalo de Uplink em Modo de Evento | uint16 | 003c | `0x003C` = 60 minutos <br />Quando nenhum evento é acionado, os dados serão enviados a cada 60 minutos.<br />|
| 10 | Ativar Acelerômetro de 3 Eixos | uint8 | 01 | `00`: Desativar<br />`01`: Ativar |
| 11 | Ativar Alarme de Desmontagem | uint8 | 00 | `00`: Desativar<br />`01`: Ativar |
| 12 | Tempo Limite de Varredura GNSS | uint8 | 3c | `0x3C` = 60 segundos |
| 13 | Tempo Limite de Varredura iBeacon | uint8 | 0a | `0x0A` = 10 segundos |
| 14 | Bytes Válidos do Filtro de UUID | uint8 | 10 | Número de bytes válidos no filtro de UUID (0–16) |
| 15~30 | Filtro de UUID | 16 bytes | 0000000000000000<br />0000000000000000 | Filtro de UUID Bluetooth de 16 bytes. Somente os primeiros N bytes (definidos pelo byte14) são significativos |

### Pacote em Modo de Evento (0x29)

O pacote de parâmetros de evento contém as configurações de evento de movimento, imobilidade e impacto. O ID do quadro é `0x29`, e o comprimento total é de 12 bytes.

| 0x29 | Byte2 | Byte3~4 | Byte5~6 | Byte7 | Byte8~9 | Byte10 | Byte11~12 |
| :--: | :---: | :-----: | :-----: | :--: | :-----: | :----: | :-------: |
| ID | Ativar Evento de Movimento | Limite de Movimento em 3 Eixos | Intervalo de Uplink em Movimento | Ativar Evento de Imobilidade | Tempo Limite de Imobilidade | Ativar Evento de Impacto | Limite de Impacto em 3 Eixos |

**Exemplo de Payload Bruto**

`29 01 0064 001e 01 012c 00 012c`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de Quadro | uint8 | 29 | 29 é o ID do pacote |
| 2 | Ativar Evento de Movimento | uint8 | 01 | `00`: Desativar<br />`01`: Ativar |
| 3~4 | Limite de Movimento em 3 Eixos | uint16 | 0064 | `0x0064` = 100 mg |
| 5~6 | Intervalo de Uplink em Movimento | uint16 | 001e | `0x001E` = 30 minutos |
| 7 | Ativar Evento de Imobilidade | uint8 | 01 | `0x00`: Desativar<br />`0x01`: Ativar |
| 8~9 | Tempo Limite de Imobilidade | uint16 | 012c | `0x012C` = 300 minutos |
| 10 | Ativar Evento de Impacto | uint8 | 00 | `0x00`: Desativar<br />`0x01`: Ativar |
| 11~12 | Limite de Impacto em 3 Eixos | uint16 | 0000 | `0x012c` = 300 mg |

### Pacote de Heartbeat (0x2A)

O pacote de heartbeat é enviado periodicamente pelo dispositivo para relatar seu status atual. Ele contém informações básicas do dispositivo e estados dos sensores. O ID do quadro é `0x2A`, e o comprimento total é de 6 bytes.

| 0x2A | Byte2 | Byte3 | Byte4 | Byte5 | Byte6 |
| :--: | :---: | :---: | :---: | :---: | :---: |
| ID | Nível de Bateria | Modo de Trabalho | Estratégia de Posicionamento | Ativar Acelerômetro de 3 Eixos | Ativar Alarme de Desmontagem |

**Exemplo de Payload Bruto**

`2a 56 01 07 01 00`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de Quadro | uint8 | 2A | 2A é o ID do pacote |
| 2 | Nível de Bateria | uint8 | 56 | `0x56` = 86(DEC)<br /> O nível de bateria é 86% |
| 3 | Modo de Trabalho | uint8 | 01 | 01 = Modo Periódico<br />`00`: Modo de Espera<br />`01`: Modo Periódico<br />`02`: Modo de Evento |
| 4 | Estratégia de Posicionamento | uint8 | 07 | 07 = 0x07, significa que o dispositivo usa a estratégia de posicionamento Bluetooth + Wi‑Fi + GNSS <br />`00`: Somente GNSS<br />`01`: Somente Wi‑Fi<br />`02`: Wi‑Fi + GNSS<br />`03`: GNSS + Wi‑Fi<br />`04`: Somente Bluetooth<br />`05`: Bluetooth + Wi‑Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi‑Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 5 | Ativar Acelerômetro de 3 Eixos | uint8 | 01 | `00`: Desativar<br />`01`: Ativar |
| 6 | Ativar Alarme de Desmontagem | uint8 | 00 | `00`: Desativar<br />`01`: Ativar |

### Pacote de Dados de Localização GNSS (Acelerômetro Ativado, 0x2B)

O pacote de dados de localização GPS contém dados de posicionamento GNSS juntamente com informações de acelerômetro e bateria. O ID do quadro é `0x2B`, e o comprimento total é de 23 bytes.

| 0x2B | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15~18 | Byte19~22 | Byte23 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :------: | :------: | :---: |
| ID | Status de Evento | ID de Movimento | Timestamp UTC | Acelerômetro X | Acelerômetro Y | Acelerômetro Z | Longitude | Latitude | Nível de Bateria |

**Exemplo de Payload Bruto**

`2b 0100 00 694b3dc6 032f fffe 0241 06ca5098 01587ee4 62`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de Quadro | uint8 | 2B | 2B é o ID do pacote |
| 2~3 | Status de Evento | uint16 | 0100 | `0x0100` = evento de desmontagem<br />Bit 0: falso<br />Bit 1: Evento de início de movimento<br />Bit 2: Evento de fim de movimento<br />Bit 3: Evento de imobilidade<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento de SOS<br />Bit 8: Evento de pressionar uma vez<br />Bit 9: Evento de desmontagem <br /><br />Converter para hexadecimal:<br />`0x0001`: Evento de início de movimento<br />`0x0002`: Evento de fim de movimento<br />`0x0004`: Evento de imobilidade<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento de SOS<br />`0x0080`: Evento de pressionar uma vez<br />`0x0100`: Evento de desmontagem |
| 4 | ID de Movimento | uint8 | 00 | `0`: Não precisa ser registrado como um movimento específico.<br />`1~255`: Dados de posicionamento reportados sob o mesmo status de movimento (o mesmo ID refere-se ao mesmo movimento) |
| 5~8 | Timestamp UTC | uint32 | 694b3dc6 | `0x694B3DC6` = 1766538694(DEC) segundos<br /><br />Converter para Hora UTC:<br /> 2025-12-24 01:11:34 |
| 9~10 | Acelerômetro X | int16 | 032f | `0x032F` = 815 mg |
| 11~12 | Acelerômetro Y | int16 | fffe | `0xFFFE` = -2 mg |
| 13~14 | Acelerômetro Z | int16 | 0241 | `0x0241` = 577 mg |
| 15~18 | Longitude | uint32 | 06ca5098 | `0x06CA5098` = 113.922.200 → 113,922200° |
| 19~22 | Latitude | uint32 | 01587ee4 | `0x01587EE4` = 22.576.868 → 22,576868° |
| 23 | Nível de Bateria | uint8 | 62 | `0x62` = 98% |

### Pacote de Dados de Localização por Wi‑Fi (Acelerômetro Ativado, 0x2C)

O pacote de localização por Wi‑Fi contém resultados de varredura de Wi‑Fi juntamente com informações do acelerômetro e da bateria. O ID do quadro é `0x2C`, e o comprimento total é dinâmico com base no número de pontos de acesso Wi‑Fi varridos (23 + (n-1) * 7 bytes, onde n é o número de pares MAC‑RSSI).

| 0x2C | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 | Byte16 | Byte17+(n-1)*7 ~ Byte23+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :---: | :---: | :---------------------------: |
| ID | Status do Evento | ID de Movimento | Carimbo de Tempo UTC | Acelerômetro X | Acelerômetro Y | Acelerômetro Z | Nível de Bateria | Contagem MAC‑RSSI (n) | Pares MAC‑RSSI (n) |

**Formato MAC‑RSSI**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| Endereço MAC (6 bytes) | RSSI (int8) |

**Exemplo de Payload Bruto**

`2c 0000 00 69685f82 0004 0015 03e5 64 05 107c61841bf8 e4 3447d468f627 e1 a4ba70bc229d d3 9483c46d5dfc d2 4c10d567b467 d0`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID do Quadro | uint8 | 2C | 2C é o ID do pacote |
| 2~3 | Status do Evento | uint16 | 0000 |`0x0000` = Nenhum evento disparado <br />Bit 0: falso<br />Bit 1: Evento de início de movimento<br />Bit 2: Evento de fim de movimento<br />Bit 3: Evento de imóvel<br />Bit 4: Evento de choque<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento de SOS<br />Bit 8: Evento de pressionar uma vez<br />Bit 9: Evento de desmontagem <br /><br />Converter para hexadecimal:<br />`0x0001`: Evento de início de movimento<br />`0x0002`: Evento de fim de movimento<br />`0x0004`: Evento de imóvel<br />`0x0008`: Evento de choque<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento de SOS<br />`0x0080`: Evento de pressionar uma vez<br />`0x0100`: Evento de desmontagem|
| 4 | ID de Movimento | uint8 | 00 | `0`: Não precisa ser registrado como um movimento específico.<br />`1~255`: Dados de posicionamento reportados sob o mesmo status de movimento (o mesmo ID se refere ao mesmo movimento) |
| 5~8 | Carimbo de Tempo UTC | uint32 | 69685f82 | `0x69685F82` = 1768447874(DEC) segundos<br /><br />Converta para Hora UTC:<br /> 2026-01-15 03:31:14 |
| 9~10 | Acelerômetro X | int16 | 0004 | `0x0004` = 4 mg |
| 11~12 | Acelerômetro Y | int16 | 0015 | `0x0015` = 21 mg |
| 13~14 | Acelerômetro Z | int16 | 03e5 | `0x03E5` = 997 mg |
| 15 | Nível de Bateria | uint8 | 64 | `0x64` = 100% |
| 16 | Contagem MAC‑RSSI (n) | uint8 | 05 | Número de pontos de acesso Wi‑Fi detectados (n = 5) |
| 17~23 | Par MAC‑RSSI 1 | 7 bytes | 107c61841bf8 e4 | MAC: `10:7C:61:84:1B:F8`, RSSI: `0xE4` = -28 (int8) |
| 24~30 | Par MAC‑RSSI 2 | 7 bytes | 3447d468f627 e1 | MAC: `34:47:D4:68:F6:27`, RSSI: `0xE1` = -31 (int8) |
| 31~37 | Par MAC‑RSSI 3 | 7 bytes | a4ba70bc229d d3 | MAC: `A4:BA:70:BC:22:9D`, RSSI: `0xD3` = -45 (int8) |
| 38~44 | Par MAC‑RSSI 4 | 7 bytes | 9483c46d5dfc d2 | MAC: `94:83:C4:6D:5D:FC`, RSSI: `0xD2` = -46 (int8) |
| 45~51 | Par MAC‑RSSI 5 | 7 bytes | 4c10d567b467 d0 | MAC: `4C:10:D5:67:B4:67`, RSSI: `0xD0` = -48 (int8) |

### Pacote de Dados de Localização BLE (Acelerômetro Ativado,0x2D)

O pacote de localização BLE contém resultados de varredura de Bluetooth juntamente com informações do acelerômetro e da bateria. O ID do quadro é `0x2D`, e o comprimento total é dinâmico com base no número de dispositivos Bluetooth varridos (23 + (n-1) * 7 bytes, onde n é o número de pares MAC‑RSSI, máximo n = 5).

| 0x2D | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 | Byte16 | Byte17+(n-1)*7 ~ Byte23+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :---: | :---: | :---------------------------: |
| ID | Status do Evento | ID de Movimento | Carimbo de Tempo UTC | Acelerômetro X | Acelerômetro Y | Acelerômetro Z | Nível de Bateria | Contagem MAC‑RSSI (n) | Pares MAC‑RSSI (n) |

**Formato MAC‑RSSI**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| Endereço MAC (6 bytes) | RSSI (int8) |

**Exemplo de Payload Bruto**

`2d 0000 00 69686032 fff9 0015 03df 64 05 c30000564b3b ce c20303003f00 ce 588c81a0fbf2 cc c20303003f03 cb c30000564af2 c7`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID do Quadro | uint8 | 2D | 2D é o ID do pacote |
| 2~3 | Status do Evento | uint16 | 0000 |`0x0000` = Nenhum evento disparado <br />Bit 0: falso<br />Bit 1: Evento de início de movimento<br />Bit 2: Evento de fim de movimento<br />Bit 3: Evento de imóvel<br />Bit 4: Evento de choque<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento de SOS<br />Bit 8: Evento de pressionar uma vez<br />Bit 9: Evento de desmontagem <br /><br />Converter para hexadecimal:<br />`0x0001`: Evento de início de movimento<br />`0x0002`: Evento de fim de movimento<br />`0x0004`: Evento de imóvel<br />`0x0008`: Evento de choque<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento de SOS<br />`0x0080`: Evento de pressionar uma vez<br />`0x0100`: Evento de desmontagem|
| 4 | ID de Movimento | uint8 | 00 | `0`: Não precisa ser registrado como um movimento específico.<br />`1~255`: Dados de posicionamento reportados sob o mesmo status de movimento (o mesmo ID se refere ao mesmo movimento) |
| 5~8 | Carimbo de Tempo UTC | uint32 | 69686032 | `0x69686032` = 1768448050(DEC) segundos<br /><br />Converta para Hora UTC:<br /> 2026-01-15 03:34:10 |
| 9~10 | Acelerômetro X | int16 | fff9 | `0xFFF9` = -7 mg |
| 11~12 | Acelerômetro Y | int16 | 0015 | `0x0015` = 21 mg |
| 13~14 | Acelerômetro Z | int16 | 03df | `0x03DF` = 991 mg |
| 15 | Nível de Bateria | uint8 | 64 | `0x64` = 100% |
| 16 | Contagem MAC‑RSSI (n) | uint8 | 05 | Número de dispositivos Bluetooth detectados (n = 5, máximo 5) |
| 17~23 | Par MAC‑RSSI 1 | 7 bytes | c30000564b3b ce | MAC: `C3:00:00:56:4B:3B`, RSSI: `0xCE` = -50 (int8) |
| 24~30 | Par MAC‑RSSI 2 | 7 bytes | c20303003f00 ce | MAC: `C2:03:03:00:3F:00`, RSSI: `0xCE` = -50 (int8) |
| 31~37 | Par MAC‑RSSI 3 | 7 bytes | 588c81a0fbf2 cc | MAC: `58:8C:81:A0:FB:F2`, RSSI: `0xCC` = -52 (int8) |
| 38~44 | Par MAC‑RSSI 4 | 7 bytes | c20303003f03 cb | MAC: `C2:03:03:00:3F:03`, RSSI: `0xCB` = -53 (int8) |
| 45~51 | Par MAC‑RSSI 5 | 7 bytes | c30000564af2 c7 | MAC: `C3:00:00:56:4A:F2`, RSSI: `0xC7` = -57 (int8) |

### Pacote de Dados de Localização GNSS (Acelerômetro Desativado, 0x2E)

O pacote de dados de localização GNSS contém dados de posicionamento GPS juntamente com informações da bateria. O ID do quadro é `0x2E`, e o comprimento total é de 17 bytes.

| 0x2E | Byte2~3 | Byte4 | Byte5~8 | Byte9~12 | Byte13~16 | Byte17 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :----: |
| ID | Status do Evento | ID de Movimento | Carimbo de Tempo UTC | Longitude | Latitude | Nível de Bateria |

**Exemplo de Payload Bruto**

`2e 0100 01 64f1a2b3 06ca5098 01587ee4 62`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID do Quadro | uint8 | 2E | 2E é o ID do pacote |
| 2~3 | Status do Evento | uint16 | 0000 |`0x0000` = Nenhum evento disparado <br />Bit 0: falso<br />Bit 1: Evento de início de movimento<br />Bit 2: Evento de fim de movimento<br />Bit 3: Evento de imóvel<br />Bit 4: Evento de choque<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento de SOS<br />Bit 8: Evento de pressionar uma vez<br />Bit 9: Evento de desmontagem <br /><br />Converter para hexadecimal:<br />`0x0001`: Evento de início de movimento<br />`0x0002`: Evento de fim de movimento<br />`0x0004`: Evento de imóvel<br />`0x0008`: Evento de choque<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento de SOS<br />`0x0080`: Evento de pressionar uma vez<br />`0x0100`: Evento de desmontagem|
| 4 | ID de Movimento | uint8 | 00 | `0`: Não precisa ser registrado como um movimento específico.<br />`1~255`: Dados de posicionamento reportados sob o mesmo status de movimento (o mesmo ID se refere ao mesmo movimento) |
| 5~8 | Carimbo de Tempo UTC | uint32 | 64f1a2b3 | `0x64f1a2b3` = 1693557427(DEC) segundos<br /><br />Converta para Hora UTC:<br /> 2023-09-01 08:37:07 |
| 9~12 | Longitude | uint32 | 06ca5098 | `0x06CA5098` = 113.922.200 → 113,922200° |
| 13~16 | Latitude | uint32 | 01587ee4 | `0x01587EE4` = 22.576.868 → 22,576868° |
| 17 | Nível de Bateria | uint8 | 62 | `0x62` = 98% |

### Pacote de Dados de Localização por Wi‑Fi (Acelerômetro Desativado, 0x2F)

O pacote de dados de localização por Wi‑Fi contém resultados de varredura de Wi‑Fi juntamente com informações da bateria. O ID do quadro é `0x2F`, e o comprimento total é dinâmico com base no número de pontos de acesso Wi‑Fi varridos (17 + (n-1) * 7 bytes, onde n é o número de pares MAC‑RSSI, máximo n = 5).

| 0x2F | Byte2~3 | Byte4 | Byte5~8 | Byte9 | Byte10 | Byte11+(n-1)*7 ~ Byte16+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :---: | :----: | :---------------------------: |
| ID | Status do Evento | ID de Movimento | Carimbo de Tempo UTC | Nível de Bateria | Contagem MAC‑RSSI (n) | Pares MAC‑RSSI (n) |

**Formato MAC‑RSSI**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| Endereço MAC (6 bytes) | RSSI (int8) |

**Exemplo de Payload Bruto**

`2f 0000 00 69685f82 64 05 107c61841bf8 e4 3447d468f627 e1 a4ba70bc229d d3 9483c46d5dfc d2 4c10d567b467 d0`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID do Quadro | uint8 | 2F | 2F é o ID do pacote |
| 2~3 | Status do Evento | uint16 | 0000 |`0x0000` = Nenhum evento disparado <br />Bit 0: falso<br />Bit 1: Evento de início de movimento<br />Bit 2: Evento de fim de movimento<br />Bit 3: Evento de imóvel<br />Bit 4: Evento de choque<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento de SOS<br />Bit 8: Evento de pressionar uma vez<br />Bit 9: Evento de desmontagem <br /><br />Converter para hexadecimal:<br />`0x0001`: Evento de início de movimento<br />`0x0002`: Evento de fim de movimento<br />`0x0004`: Evento de imóvel<br />`0x0008`: Evento de choque<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento de SOS<br />`0x0080`: Evento de pressionar uma vez<br />`0x0100`: Evento de desmontagem|
| 4 | ID de Movimento | uint8 | 00 | `0`: Não precisa ser registrado como um movimento específico.<br />`1~255`: Dados de posicionamento reportados sob o mesmo status de movimento (o mesmo ID se refere ao mesmo movimento) |
| 5~8 | Carimbo de Tempo UTC | uint32 | 69685f82 | `0x69685F82` = 1768447874(DEC) segundos<br /><br />Converta para Hora UTC:<br /> 2026-01-15 03:31:14 |
| 9 | Nível de Bateria | uint8 | 64 | `0x64` = 100% |
| 10 | Contagem MAC‑RSSI (n) | uint8 | 05 | Número de pontos de acesso Wi‑Fi detectados (n = 5, máximo 5) |
| 11~17 | Par MAC‑RSSI 1 | 7 bytes | 107c61841bf8 e4 | MAC: `10:7C:61:84:1B:F8`,<br /> RSSI: `0xE4` = -28 (int8) |
| 18~24 | Par MAC‑RSSI 2 | 7 bytes | 3447d468f627 e1 | MAC: `34:47:D4:68:F6:27`,<br /> RSSI: `0xE1` = -31 (int8) |
| 25~31 | Par MAC‑RSSI 3 | 7 bytes | a4ba70bc229d d3 | MAC: `A4:BA:70:BC:22:9D`,<br /> RSSI: `0xD3` = -45 (int8) |
| 32~38 | Par MAC‑RSSI 4 | 7 bytes | 9483c46d5dfc d2 | MAC: `94:83:C4:6D:5D:FC`,<br /> RSSI: `0xD2` = -46 (int8) |
| 39~45 | Par MAC‑RSSI 5 | 7 bytes | 4c10d567b467 d0 | MAC: `4C:10:D5:67:B4:67`,<br /> RSSI: `0xD0` = -48 (int8) |

### Pacote de Dados de Localização BLE (Acelerômetro Desligado, 0x30)

O pacote de dados de localização BLE contém resultados da varredura Bluetooth juntamente com informações da bateria. O ID do frame é `0x30`, e o comprimento total é dinâmico com base no número de dispositivos Bluetooth escaneados (17 + (n-1) * 7 bytes, onde n é o número de pares MAC-RSSI, máximo n = 5).

| 0x30 | Byte2~3 | Byte4 | Byte5~8 | Byte9 | Byte10 | Byte11+(n-1)*7 ~ Byte16+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :---: | :----: | :---------------------------: |
| ID | Status do Evento | ID de Movimento | Timestamp UTC | Nível da Bateria | Contagem de MAC-RSSI (n) | Pares MAC-RSSI (n) |

**Formato MAC-RSSI**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| Endereço MAC (6 bytes) | RSSI (int8) |

**Exemplo de Payload Bruto**

`30 0000 00 69686032 64 05 c30000564b3b ce c20303003f00 ce 588c81a0fbf2 cc c20303003f03 cb c30000564af2 c7`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID do Frame | uint8 | 30 | 30 é o ID do pacote |
| 2~3 | Status do Evento | uint16 | 0000 |`0x0000` = Nenhum evento disparado <br />Bit 0: falso<br />Bit 1: Evento de início de movimento<br />Bit 2: Evento de fim de movimento<br />Bit 3: Evento imóvel<br />Bit 4: Evento de choque<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pressionar uma vez<br />Bit 9: Evento de desmontagem <br /><br />Converter para hexadecimal:<br />`0x0001`: Evento de início de movimento<br />`0x0002`: Evento de fim de movimento<br />`0x0004`: Evento imóvel<br />`0x0008`: Evento de choque<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pressionar uma vez<br />`0x0100`: Evento de desmontagem|
| 4 | ID de Movimento | uint8 | 00 | `0`: Não precisa ser registrado como um movimento específico.<br />`1~255`: Dados de posicionamento reportados sob o mesmo status de movimento (o mesmo ID se refere ao mesmo movimento) |
| 5~8 | Timestamp UTC | uint32 | 69686032 | `0x69686032` = 1768448050(DEC) segundos<br /><br />Converta para Hora UTC:<br /> 2026-01-15 03:34:10 |
| 9 | Nível da Bateria | uint8 | 64 | `0x64` = 100% |
| 10 | Contagem de MAC-RSSI (n) | uint8 | 05 | Número de dispositivos Bluetooth detectados (n = 5, máximo 5) |
| 11~17 | Par MAC-RSSI 1 | 7 bytes | c30000564b3b ce | MAC: `C3:00:00:56:4B:3B`,<br /> RSSI: `0xCE` = -50 (int8) |
| 18~24 | Par MAC-RSSI 2 | 7 bytes | c20303003f00 ce | MAC: `C2:03:03:00:3F:00`,<br /> RSSI: `0xCE` = -50 (int8) |
| 25~31 | Par MAC-RSSI 3 | 7 bytes | 588c81a0fbf2 cc | MAC: `58:8C:81:A0:FB:F2`,<br /> RSSI: `0xCC` = -52 (int8) |
| 32~38 | Par MAC-RSSI 4 | 7 bytes | c20303003f03 cb | MAC: `C2:03:03:00:3F:03`,<br /> RSSI: `0xCB` = -53 (int8) |
| 39~45 | Par MAC-RSSI 5 | 7 bytes | c30000564af2 c7 | MAC: `C3:00:00:56:4A:F2`,<br /> RSSI: `0xC7` = -57 (int8) |

### Pacote de Status de Posicionamento com Acelerômetro (0x31)

O pacote de status de posicionamento contém o status de posicionamento juntamente com dados do acelerômetro, status do evento e informações da bateria. O ID do frame é `0x31`, e o comprimento total é 15 bytes.

| 0x31 | Byte2 | Byte3~4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 |
| :--: | :---: | :-----: | :-----: | :------: | :-------: | :-------: | :---: |
| ID | Status de Posicionamento | Status do Evento | Timestamp UTC | Acelerômetro X | Acelerômetro Y | Acelerômetro Z | Nível da Bateria |

**Exemplo de Payload Bruto**

`31 00 0100 694b3db0 003a 039d fe84 62`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID do Frame | uint8 | 31 | 31 é o ID do pacote |
| 2 | Status de Posicionamento | uint8 | 00 |`0x00`: localização bem-sucedida.<br />`0x01`: O scan GNSS expirou.<br />`0x02`: O scan Wi‑Fi expirou.<br />`0x03`: O scan Wi‑Fi + GNSS expirou.<br />`0x04`: O scan GNSS + Wi‑Fi expirou.<br />`0x05`: O scan Bluetooth expirou.<br />`0x06`: O scan Bluetooth + Wi‑Fi expirou.<br />`0x07`: O scan Bluetooth + GNSS expirou.<br />`0x08`: O scan Bluetooth + Wi‑Fi + GNSS expirou.<br />`0x09`: O Location Server falhou ao analisar a localização GNSS.<br />`0x0A`: O Location Server falhou ao analisar a localização Wi‑Fi.<br />`0x0B`: O Location Server falhou ao analisar a localização Bluetooth.<br />`0x0C`: Falha ao analisar a localização devido à baixa precisão.<br />`0x0D`: Falha na sincronização de tempo.<br />`0x0E`: Falha devido ao Almanac antigo.<br />`0x0F`: O scan GNSS + Bluetooth expirou. |
| 3~4 | Status do Evento | uint16 | 0000 |`0x0000` = Nenhum evento disparado <br />Bit 0: falso<br />Bit 1: Evento de início de movimento<br />Bit 2: Evento de fim de movimento<br />Bit 3: Evento imóvel<br />Bit 4: Evento de choque<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pressionar uma vez<br />Bit 9: Evento de desmontagem <br /><br />Converter para hexadecimal:<br />`0x0001`: Evento de início de movimento<br />`0x0002`: Evento de fim de movimento<br />`0x0004`: Evento imóvel<br />`0x0008`: Evento de choque<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pressionar uma vez<br />`0x0100`: Evento de desmontagem |
| 5~8 | Timestamp UTC | uint32 | 694B3DB0 | `0x694B3DB0` = 1766538672(DEC) segundos<br /><br />Converta para Hora UTC:<br /> 2025-12-24 01:11:12 |
| 9~10 | Acelerômetro X | int16 | 003a | `0x003A` = 58 mg |
| 11~12 | Acelerômetro Y | int16 | 039d | `0x039D` = 925 mg |
| 13~14 | Acelerômetro Z | int16 | fe84 | `0xFE84` = -380 mg |
| 15 | Nível da Bateria | uint8 | 62 | `0x62` = 98% |

### Pacote de Status de Posicionamento (Acelerômetro Desligado, 0x32)

O pacote de status de posicionamento contém o status de posicionamento juntamente com o status do evento e informações da bateria. O ID do frame é `0x32`, e o comprimento total é 9 bytes.

| 0x32 | Byte2 | Byte3~4 | Byte5~8 | Byte9 |
| :--: | :---: | :-----: | :-----: | :---: |
| ID | Status de Posicionamento | Status do Evento | Timestamp UTC | Nível da Bateria |

**Exemplo de Payload Bruto**

`32 00 0100 694b3db0 62`

| Byte | Valor | Tipo | Dados Brutos | Descrição |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID do Frame | uint8 | 32 | 32 é o ID do pacote |
| 2 | Status de Posicionamento | uint8 | 00 |`0x00`: localização bem-sucedida.<br />`0x01`: O scan GNSS expirou.<br />`0x02`: O scan Wi‑Fi expirou.<br />`0x03`: O scan Wi‑Fi + GNSS expirou.<br />`0x04`: O scan GNSS + Wi‑Fi expirou.<br />`0x05`: O scan Bluetooth expirou.<br />`0x06`: O scan Bluetooth + Wi‑Fi expirou.<br />`0x07`: O scan Bluetooth + GNSS expirou.<br />`0x08`: O scan Bluetooth + Wi‑Fi + GNSS expirou.<br />`0x09`: O Location Server falhou ao analisar a localização GNSS.<br />`0x0A`: O Location Server falhou ao analisar a localização Wi‑Fi.<br />`0x0B`: O Location Server falhou ao analisar a localização Bluetooth.<br />`0x0C`: Falha ao analisar a localização devido à baixa precisão.<br />`0x0D`: Falha na sincronização de tempo.<br />`0x0E`: Falha devido ao Almanac antigo.<br />`0x0F`: O scan GNSS + Bluetooth expirou. |
| 3~4 | Status do Evento | uint16 | 0100 | `0x0000` = Nenhum evento disparado <br />Bit 0: falso<br />Bit 1: Evento de início de movimento<br />Bit 2: Evento de fim de movimento<br />Bit 3: Evento imóvel<br />Bit 4: Evento de choque<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pressionar uma vez<br />Bit 9: Evento de desmontagem <br /><br />Converter para hexadecimal:<br />`0x0001`: Evento de início de movimento<br />`0x0002`: Evento de fim de movimento<br />`0x0004`: Evento imóvel<br />`0x0008`: Evento de choque<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pressionar uma vez<br />`0x0100`: Evento de desmontagem |
| 5~8 | Timestamp UTC | uint32 | 694B3DB0 | `0x694B3DB0` = 1766538672(DEC) segundos<br /><br />Converta para Hora UTC:<br /> 2025-12-24 01:11:12 |
| 9 | Nível da Bateria | uint8 | 62 | `0x62` = 98% |

## Pacote Downlink, FPort=5

O rastreador oferece suporte a LoRaWAN para fazer downlink de alguns comandos para ajustar parâmetros. Se o dispositivo estiver hibernando, o comando de downlink entra em vigor na próxima vez que o dispositivo acordar para enviar dados. 

Devido à Classe A do LoRaWAN, em que as janelas de downlink só são abertas após um uplink, os comandos não são em tempo real. Por exemplo, se o intervalo de reporte estiver definido para 10 minutos, pode levar até 10 minutos para o dispositivo receber o comando de downlink durante sua próxima janela de transmissão.

**Nota: FPort=5**

### Pacote de Solicitação de Status do Dispositivo (0x8F)

|0x8F|
| - |
|ID|

Exemplo:

8F: Solicitar o status mais recente do dispositivo e o pacote de localização.

### Configurando Modo de Trabalho & Estratégia de Posicionamento (0x90)

|0x90|Byte2|Byte3|Byte4~5|Byte6~7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Modo de Trabalho|Estratégia de Posicionamento|Intervalo de Heartbeat|Intervalo de Uplink em Modo Periódico|Intervalo de Uplink em Modo de Evento|

|Byte10|Byte11|Byte12|Byte13|Byte14|Byte15~30|
| - | - | - | - | - | :- |
|Habilitar Acelerômetro de 3 Eixos|Habilitar Alarme de Desmontagem|Tempo de Expiração do Scan GNSS(S)|Tempo de Expiração do Scan iBeacon(S)|Bytes Válidos do Filtro UUID|Filtro UUID|

Nota:  
Unidade de Intervalo de Heartbeat / Intervalo de Uplink em Modo Periódico / Intervalo de Uplink em Modo de Evento: **minutos**

Exemplo:

`90 01 01 02d0 0014 0005 01 01 1e 0a 10 00000000000000000000000000000000`


|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Frame|uint8|90|90 é o ID do pacote|
|2|Modo de Trabalho|uint8|01|01 = Modo Periódico<br />`00`: Modo Standby<br />`01`: Modo Periódico<br />`02`: Modo de Evento|
|3|Estratégia de Posicionamento|uint8|01|`00`: Somente GNSS<br />`01`: Somente Wi‑Fi<br />`02`: Wi‑Fi + GNSS<br />`03`: GNSS + Wi‑Fi<br />`04`: Somente Bluetooth<br />`05`: Bluetooth + Wi‑Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi‑Fi + GNSS<br />`08`: GNSS + Bluetooth |
|4~5|Intervalo de Heartbeat | uint16 | 02d0 | `0x02D0` = 720 minutos|
|6~7|Intervalo de Uplink em Modo Periódico|uint16|0014|`0x0014` = 20 minutos |
|8~9|Intervalo de Uplink em Modo de Evento|uint16|0005|`0x0005` = 5 minutos<br />Quando nenhum evento é disparado, os dados serão enviados a cada 5 minutos.<br />|
|10|Habilitar Acelerômetro de 3 Eixos|uint8|01|`00`: Desabilitar<br />`01`: Habilitar|
|11|Habilitar Alarme de Desmontagem|uint8|01|`00`: Desabilitar<br />`01`: Habilitar|
|12|Tempo de expiração do scan GNSS|uint8|1E|`0x1E` = 30 segundos |
|13|Tempo de expiração do scan iBeacon|uint8|0A|`0x0A` = 10 segundos |
|14|Bytes Válidos do Filtro UUID|uint8|10| Número de bytes válidos no filtro UUID (0–16)|
|15~30|Filtro UUID| 16 bytes | 0000000000000000<br />0000000000000000 | Filtro Bluetooth UUID de 16 bytes. Somente os primeiros N bytes (definidos pelo byte30) têm significado|


### Configurando o Limite do Modo de Evento (0x91)

|0x91|Byte2|Byte3~4|Byte5~6|Byte7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Habilitar Evento de Movimento|Limite de Movimento em 3 Eixos|Intervalo de Uplink em Movimento|Habilitar Evento de Imobilidade|Tempo Limite de Imobilidade|

|Byte10|Byte11~12|
| - | :- |
|Habilitar Evento de Impacto|Limite de Impacto em 3 Eixos|


Exemplo:

`91 01 001e 0005 01 01 2c`

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|91|91 é o ID do pacote|
|2|Habilitar Evento de Movimento|uint8|01|`00`: Desativar<br />`01`: Ativar|
|3~4|Limite de Movimento em 3 Eixos|uint16|001e|`0x001E` = 30 mg<br />Quando a aceleração exceder 30 mg, o dispositivo determina que está em movimento<br />|
|5~6|Intervalo de Uplink em Movimento|uint16|0005|`0x0005` = 5 minutos<br />Quando o movimento for detectado, o intervalo de relatório será de 5 minutos<br />|
|7|Habilitar Evento de Imobilidade|uint8|01|`00`: Desativar<br />`01`: Ativar|
|8~9|Tempo Limite de Imobilidade|uint16|012c|`0x012C` = 300 minutos<br />Se o dispositivo permanecer parado por mais de 300 minutos, um evento de imobilidade será disparado<br />|
|10|Habilitar Evento de Impacto|uint8|01|`00`: Desativar<br />`01`: Ativar|
|11~12|Limite de Impacto em 3 Eixos|uint16|012c|`0x012C` = 300 mg<br />Quando a aceleração exceder 300 mg, o evento de impacto será disparado<br />|

### Solicitar Pacote de Status do Dispositivo (0x92)

|0x92|
| - |
|ID|

Exemplo:

92: Forçar uma correção de localização GNSS.

### Configurando o Modo de Trabalho, Estratégia de Posicionamento e Limite do Modo de Evento (0x97)

|0x97|Byte2|Byte3|Byte4~5|Byte6~7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Modo de Trabalho|Estratégia de Posicionamento|Intervalo de Heartbeat|Intervalo de Uplink no Modo Periódico|Intervalo de Uplink no Modo de Evento|

|Byte10|Byte11|Byte12|Byte13|Byte14|Byte15~30|
| - | :- | :- | :- | :- | :- |
|Habilitar Acelerômetro de 3 Eixos|Habilitar Alarme de Desmontagem|Tempo Limite de Varredura GNSS |Tempo Limite de Varredura iBeacon |Bytes Válidos do Filtro UUID|Filtro UUID|

#### Configurações de Evento de Movimento
|Byte31|Byte32~33|Byte34~35|
| - | :- | :- |
|Habilitar Evento de Movimento|Limite de Movimento em 3 Eixos|Intervalo de Uplink em Movimento|

#### Configurações de Evento de Imobilidade
|Byte36|Byte37~38|
| - | :- |
|Habilitar Evento de Imobilidade|Tempo Limite de Imobilidade|


#### Configurações de Evento de Impacto
|Byte39|Byte40~41|
| - | :- |
|Habilitar Evento de Impacto|Limite de Impacto em 3 Eixos|

Exemplo:

`97 01 02 003c 001e 000a 01 01 0a 05 10 00000000000000000000000000000000 01 001e 0005 01 012c 01 012c`

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|97|97 é o ID do pacote|
|2|Modo de Trabalho|uint8|01|`00`: Modo de Espera<br />`01`: Modo Periódico<br />`02`: Modo de Evento|
|3|Estratégia de Posicionamento|uint8|02|`00`: Apenas GNSS<br />`01`: Apenas Wi-Fi<br />`02`: Wi-Fi + GNSS<br />`03`: GNSS + Wi-Fi<br />`04`: Apenas Bluetooth<br />`05`: Bluetooth + Wi-Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi-Fi + GNSS<br />`08`: GNSS + Bluetooth |
|4~5|Intervalo de Heartbeat|uint16|003c|`0x003C` = 60 segundos|
|6~7|Intervalo de Uplink no Modo Periódico|uint16|001e|`0x001E` = 30 segundos|
|8~9|Intervalo de Uplink no Modo de Evento|uint16|000a|`0x000A` = 10 minutos<br />Quando nenhum evento for disparado, os dados serão enviados a cada 10 minutos.<br />|
|10|Habilitar Acelerômetro de 3 Eixos|uint8|01|`00`: Desativar<br />`01`: Ativar|
|11|Habilitar Alarme de Desmontagem|uint8|01|`00`: Desativar<br />`01`: Ativar|
|12|Tempo Limite de Varredura GNSS|uint8|0a|`0x0A` = 10 segundos|
|13|Tempo Limite de Varredura iBeacon|uint8|05|`0x05` = 5 segundos|
|14|Bytes Válidos do Filtro UUID|uint8|10|`0x10` = 16 bytes|
|15~30|Filtro UUID|byte[16]|0000000000000000<br />0000000000000000|Valor do filtro UUID (16 bytes)<br />|
|31|Habilitar Evento de Movimento|uint8|01|`00`: Desativar<br />`01`: Ativar|
|32~33|Limite de Movimento em 3 Eixos|uint16|001e|`0x001E` = 30 mg |
|34~35|Intervalo de Uplink em Movimento|uint16|0005|`0x0005` = 5 minutos<br />Quando o movimento for detectado, o intervalo de relatório será de 5 minutos|
|36|Habilitar Evento de Imobilidade|uint8|01|`00`: Desativar<br />`01`: Ativar|
|37~38|Tempo Limite de Imobilidade|uint16|012c|`0x012C` = 300 minutos |
|39|Habilitar Evento de Impacto|uint8|01|`00`: Desativar<br />`01`: Ativar|
|40~41|Limite de Impacto em 3 Eixos|uint16|012c|`0x012C` = 300 mg |

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>