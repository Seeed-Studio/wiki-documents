---
description: Formato de Payload do Rastreador SenseCAP T1000
title: Formato de Payload
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /T1000_payload
last_update:
  date: 2/21/2023
  author: Jessie
createdAt: '2024-02-21'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/T1000_payload/
---

## Análise de Pacote de Uplink

O protocolo de dados do Rastreador fornece diferentes pacotes para corresponder a diferentes informações, e o número de bytes de cada pacote pode variar. A estrutura do quadro é mostrada na imagem abaixo. O conteúdo do quadro é enviado em **ordem de bytes big-endian**.

|ID de Dados|Valor de Dados|
| - | :- |
|1 byte|50 bytes (Máx.)|

**ID de Dados**: Número de função.
**Valor de Dados**: Posição, dados do sensor e outras informações.

### Pacote de Status do Dispositivo -Modo de Evento 0x01

O Pacote de Status do Dispositivo é enviado ao ingressar na rede LoRaWAN. O Pacote de Status do Dispositivo possui dois formatos de pacote em diferentes modos de funcionamento:

1) Modo de Evento, ID=0x01

1) Modo Periódico, ID= 0x02

### Pacote de Status do Dispositivo -Modo de Evento: 0x01

|0x01|Byte2|Byte3~4|Byte5~6|Byte7|Byte8|Byte9~10|Byte11~12|
| - | :- | :- | :- | :- | :- | :- | :- |
|ID|Nível de bateria|Versão de software|Versão de hardware|Modo de trabalho|Estratégia de posicionamento|Intervalo de heartbeat|Intervalo de uplink|

|Byte13~14|Byte15|Byte16|Byte17|Byte18~19|Byte20~21|
| :- | :- | :- | :- | :- | :- |
|Intervalo de uplink no modo de evento|Interruptor de temperatura e luz|Modo SOS|Habilitar evento de movimento|Limite de movimento em 3 eixos|Intervalo de início de movimento|

|<a name="ole_link1"></a>Byte22|Byte23~24|Byte25|Byte26~27|Byte28|Byte29~30|
| :- | :- | :- | :- | :- | :- |
|Habilitar evento de imobilidade|Tempo limite de imobilidade|Habilitar evento de impacto|Limite de impacto em 3 eixos|Habilitar evento de temperatura|Intervalo de uplink de evento de temperatura|

|Byte31~32|Byte33~34|Byte35~36|Byte37|Byte38|Byte39~40|
| :- | :- | :- | :- | :- | :- |
|Intervalo de amostragem de temperatura|Limite máximo de temperatura|Limite mínimo de temperatura|Tipo de aviso de temperatura|Habilitar evento de luz|Intervalo de uplink de evento de luz|

|Byte41~42|Byte43~44|Byte45~46|Byte47|
| :- | :- | :- | :- |
|Intervalo de amostragem de luz|Limite máximo de luz|Limite mínimo de luz|Tipo de aviso de luz|

**O payload bruto:**

0153010501050207001e00050005010000001e000500016801012c000005001e025800000000000500010064000000

|**Byte**|**Valor**|**Tipo**|**Dado Bruto**|**Descrição**|
| - | - | - | - | - |
|1|ID de quadro|uint8|01|01 é o ID do pacote.|
|2|Nível de bateria|uint8|53|<p>53 é 0x53 = 83(DEC)</p><p>O nível de bateria é 83%</p>|
|3~4|Versão de software|uint16|0105|<p>0105 é 0x0105 == v1.5</p><p>A versão de software é v1.5</p>|
|5~6|Versão de hardware|uint16|0105|<p>0105 é 0x0105 == v1.5</p><p>A versão de hardware é v1.5</p>|
|7|Modo de trabalho|uint8|02|<p>02 é 0x02, significa que o dispositivo usa “Modo de Evento”.</p><p>00: Modo de espera</p><p>01: Modo periódico</p><p>02: Modo de evento</p>|
|8|Estratégia de posicionamento|uint8|07|<p>07 é 0x07, significa que o dispositivo usa a estratégia de posicionamento Bluetooth + Wi-Fi + GNSS.</p><p>00: Somente GNSS</p><p>01: Somente Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Somente Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|9~10|Intervalo de heartbeat|uint16|001e|001e é 0x001E = 30(DEC), o intervalo de heartbeat é 30 minutos. |
|11~12|Intervalo de uplink|uint16|0005|0005 é 0x0005 = 5(DEC), o intervalo de uplink é 5 minutos.|
|13~14|Intervalo de uplink no modo de evento|uint16|0005|0005 é 0x0005 = 5(DEC), o intervalo de uplink no modo de evento é 5 minutos.|
|15|Interruptor de temperatura e luz|uint8|01|<p>01 significa ativar o sensor de temperatura e luz.</p><p>00: Desativar o sensor de temperatura e luz.</p><p>01: Ativar o sensor de temperatura e luz.</p>|
|16|Modo SOS|uint8|00|<p>00 significa usar o modo SOS único.</p><p>00: usar modo SOS único.</p><p>01: usar modo SOS contínuo.</p>|
|17|Habilitar evento de movimento|uint8|00|<p>00 significa desabilitar o modo de evento.</p><p>00: desabilitar modo de evento.</p><p>01: habilitar modo de evento.</p>|
|18~19|Limite de movimento em 3 eixos|uint16|001e|<p>001e é 0x001E=30(DEC) mg</p><p>Quando a aceleração excede 30mg, determina-se que o dispositivo está em movimento; quando fica 2 minutos abaixo deste valor, determina-se que o dispositivo está em imobilidade.</p>|
|20~21|Intervalo de início de movimento|uint16|0005|0005 é 0x0005 = 5(DEC), quando o dispositivo está em movimento, o intervalo é de 5 minutos.|
|22|Habilitar evento de imobilidade|uint8|00|<p>00 significa desabilitar evento de imobilidade.</p><p>00: desabilitar evento de imobilidade.</p><p>01: habilitar evento de imobilidade.</p>|
|23~24|Tempo limite de imobilidade|uint16|0168|0168 é 0x0168 = 360(DEC), quando o dispositivo permanece estacionário em um local por mais de 360 minutos, um evento de tempo limite de imobilidade é acionado.|
|25|Habilitar evento de impacto|uint8|01|<p>01 significa habilitar evento de impacto.</p><p>00: desabilitar evento de impacto.</p><p>01: habilitar evento de impacto.</p>|
|26~27|Limite de impacto em 3 eixos|uint16|012c|<p>012c é 0x012C=300(DEC) mg</p><p>Quando a aceleração excede 300mg, o evento de impacto é acionado.</p>|
|28|Habilitar evento de temperatura|uint8|00|<p>00 significa habilitar evento de impacto.</p><p>00: desabilitar evento de impacto.</p><p>01: habilitar evento de impacto.</p>|
|29~30|Intervalo de uplink de evento de temperatura|uint16|0005|0005 é 0x0005 = 5(DEC), quando a temperatura excede o limite, a localização e os dados do sensor serão enviados a cada 5 minutos.|
|31~32|Intervalo de amostragem de temperatura|uint16|001e|<p>001e é 0x001E=30(DEC) segundos</p><p>A temperatura é detectada a cada 30 segundos. Quando o limite é acionado, são enviados a localização e os dados do sensor.</p>|
|33~34|Limite máximo de temperatura|int16|0258|<p>0258 é 0x0258 = 600(DEC),</p><p>Limite máximo =600/10=60,0 ℃</p>|
|35~36|Limite mínimo de temperatura|int16|0000|<p>0000 é 0x0000 = 0(DEC), </p><p>Limite mínimo=0/10=0,0 ℃</p>|
|37|Regra de limite de temperatura|uint8|00|<p>00 significa que quando temperatura ≤ limite mínimo, o dispositivo enviará localização e evento de temperatura.</p><p>00: temp ≤ limite mínimo</p><p>01: temp ≥ limite máximo</p><p>02: temp ≤ limite mínimo e temp ≥ limite máximo</p><p>03: limite mínimo≤ temp ≤limite máximo</p>|
|38|Habilitar evento de luz|uint8|00|<p>00 significa desabilitar evento de luz.</p><p>00: desabilitar evento de luz.</p><p>01: habilitar evento de luz.</p>|
|39~40|Intervalo de uplink de evento de luz|uint16|0005|0005 é 0x0005 = 5(DEC), quando a luz excede o limite, a localização e os dados do sensor serão enviados a cada 5 minutos.|
|41~42|Intervalo de amostragem de luz|uint16|0001|<p>0001is 0x0001=1(DEC) segundos</p><p>A temperatura é detectada a cada 1 segundo. Quando o limite é acionado, são enviados a localização e os dados do sensor.</p>|
|43~44|Limite máximo de luz|uint16|0064|<p>0064 é 0x0064 = 100(DEC) %</p><p>Limite máximo =100%</p>|
|45~46|Limite mínimo de luz|uint16|0000|<p>0000 é 0x0000 = 0(DEC) %</p><p>Limite mínimo=0%</p>|
|47|Tipo de aviso de luz|uint8|00|<p>00 significa que quando luz ≤ limite mínimo, o dispositivo enviará localização e evento de luz.</p><p>00: luz ≤ limite mínimo</p><p>01: luz ≥ limite máximo</p><p>02: luz ≤ limite mínimo e luz ≥ limite máximo</p><p>03: limite mínimo≤ luz ≤limite máximo</p>|

1. ### <a name="_toc145487499"></a>**Pacote de Status do Dispositivo -Modo Periódico 0x02**

O Pacote de Status do Dispositivo é enviado ao ingressar na rede LoRaWAN. O Pacote de Status do Dispositivo possui dois formatos de pacote em diferentes modos de funcionamento:

1) Modo de Evento, ID=0x01

1) Modo Periódico, ID= 0x02

### Pacote de Status do Dispositivo -Modo Periódico: 0x02

|0x02|Byte2|Byte3~4|Byte5~6|Byte7|Byte8|Byte9~10|Byte11~12|
| - | :- | :- | :- | :- | :- | :- | :- |
|ID|nível de bateria|versão de software|versão de hardware|modo de trabalho|estratégia de posicionamento|intervalo de heartbeat|intervalo de uplink|

|Byte13~14|Byte15|Byte16|
| :- | :- | :- |
|intervalo de uplink no modo de evento|interruptor de temperatura e luz|modo SOS|

**O payload bruto:**

025601050105010002d0003c003c0000

|**Byte**|**Valor**|**Tipo**|**Dado Bruto**|**Descrição**|
| - | - | - | - | - |
|1|ID de quadro|uint8|02|02 é o ID do pacote.|
|2|Nível de bateria|uint8|56|<p>56 é 0x56 = 86(DEC)</p><p>O nível de bateria é 86%</p>|
|3~4|Versão de software|uint16|0105|<p>0105 é 0x0105 == v1.5</p><p>A versão de software é v1.5</p>|
|5~6|Versão de hardware|uint16|0105|<p>0105 é 0x0105 == v1.5</p><p>A versão de hardware é v1.5</p>|
|7|Modo de trabalho|uint8|01|<p>01 é 0x01, significa que o dispositivo usa “Modo Periódico”.</p><p>00: Modo de espera</p><p>01: Modo periódico</p><p>02: Modo de evento</p>|
|8|Estratégia de posicionamento|uint8|00|<p>00 é 0x01, significa que o dispositivo usa estratégia de posicionamento “Somente GNSS”.</p><p>00: Somente GNSS</p><p>01: Somente Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Somente Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|9~10|Intervalo de heartbeat|uint16|02d0|02d0 é 0x02D0 = 720(DEC) minutos, o intervalo de heartbeat é 720 minutos. |
|11~12|Intervalo de uplink|uint16|003c|003c é 0x003C = 60(DEC) minutos, o intervalo de uplink é 60 minutos.|
|13~14|Intervalo de uplink no modo de evento|uint16|003c|003c é 0x003C = 60(DEC), o intervalo de uplink no modo de evento é 60 minutos.|
|15|Interruptor de temperatura e luz|uint8|00|<p>00 significa ativar o sensor de temperatura e luz.</p><p>00: Desativar o sensor de temperatura e luz.</p><p>01: Ativar o sensor de temperatura e luz.</p>|
|16|Modo SOS|uint8|00|<p>00 significa usar o modo SOS único.</p><p>00: usar modo SOS único.</p><p>01: usar modo SOS contínuo.</p>|

### Pacote de Heartbeat -0x05

Quando nenhum dado é enviado pelo dispositivo dentro do intervalo de heartbeat, um pacote de heartbeat será acionado. Este pacote contém apenas informações de bateria.

|0x05|Byte2|Byte3|Byte4|Byte5|
| - | :- | :- | :- | :- |
|ID|nível de bateria|modo de trabalho|estratégia de posicionamento|modo SOS|

**O payload bruto:**

0564010001

|**Byte**|**Valor**|**Tipo**|**Dado Bruto**|**Descrição**|
| - | - | - | - | - |
|1|ID de quadro|uint8|05|05 é o ID do pacote.|
|2|Nível de bateria|uint8|64|<p>64 é 0x64 = 100(DEC)</p><p>O nível de bateria é 100%</p>|
|3|Modo de trabalho|uint8|01|<p>01 é 0x01, significa que o dispositivo usa “Modo Periódico”.</p><p>00: Modo de espera</p><p>01: Modo periódico</p><p>02: Modo de evento</p>|
|4|Estratégia de posicionamento|uint8|00|<p>00 é 0x01, significa que o dispositivo usa estratégia de posicionamento “Somente GNSS”.</p><p>00: Somente GNSS</p><p>01: Somente Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Somente Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|5|Modo SOS|uint8|00|<p>00 significa usar o modo SOS único.</p><p>00: usar modo SOS único.</p><p>01: usar modo SOS contínuo.</p>|

### Pacote de Localização GNSS e Sensor -0x06

O ID 0x06 é usado para enviar localização GNSS, dados de sensor e bateria.

|0x06|Byte2~4|Byte5|Byte6~9|Byte10~13|Byte14~17|
| - | :- | :- | :- | :- | :- |
|ID|status do evento|número do segmento de movimento|hora UTC|longitude|latitude|

|Byte18~19|Byte20~21|Byte22|
| - | :- | :- |
|Temperatura|Luz|nível de bateria|

**A carga útil bruta:**

06000008006462248d06ca502801587ec6<a name="ole_link3"></a>00fe000057

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|06|06 é o ID do pacote.|
|2~4|status do evento|uint24|000008|<p>000008 é 0x000008, 0x0000XX é reservado e 0x08 é o status do evento. Este byte tem 8 bits, cada um representando um evento.</p><p>Bit1: Evento de início de movimento.</p><p>Bit2: Evento de fim de movimento.</p><p>Bit3: Evento de imobilidade.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento de SOS.</p><p>Bit8: Evento de pressionar uma vez.</p><p></p><p>Converter para hexadecimal:</p><p>0x000000: nenhum evento</p><p>0x000001: Evento de início de movimento.</p><p>0x000002: Evento de fim de movimento.</p><p>0x000004: Evento de imobilidade.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento de SOS.</p><p>0x000080: Evento de pressionar uma vez.</p>|
|5|Número do segmento de movimento|uint8|00|<p>00 é 0x00 == 0.</p><p>Quando o movimento começa, a contagem aumenta em 1. Registrar que isto é um movimento.</p>|
|6~9|hora UTC|uint32|6462248d|<p>6462248d é 0x6462248D = 1684153485(DEC) segundos.</p><p>Converta para Hora de Pequim: 2023-05-15 20:24:45</p>|
|10~13|Longitude|int32|06ca5028|06ca5028 é 0x06CA5028 = 113922088(DEC), a longitude = 113922088/1000000=113.922088|
|14~17|Latitude|int32|01587ec6|01587ec6 é 0x01587EC6 = 22576838(DEC), a latitude = 22576838/1000000=22.576838|
|18~19|Temperatura|int16|00fe|00fe é 0x00FE = 254(DEC), temperatura=254/10=25,4℃|
|20~21|Luz|uint16|0000|0000 é 0x0000 = 0(DEC) minutos, a luz=0=0%|
|22|Nível de bateria|uint8|57|<p>57 é 0x57 = 87(DEC)</p><p>O nível de bateria é 87%</p>|

1. ### <a name="_toc145487502"></a>**Pacote de Localização Wi-Fi e Sensor - 0x07**

O ID 0x07 é usado para enviar endereços MAC de Wi-Fi, dados de sensores e bateria.

|0x07|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|status do evento|número do segmento de movimento|hora UTC|endereço MAC 1|O RSSI do endereço MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~36|Byte37|
| :- | :- | :- | :- | :- | :- |
|endereço MAC 2|O RSSI do endereço MAC 2, int8|endereço MAC 3|O RSSI do endereço MAC 3, int8|endereço MAC 4|O RSSI do endereço MAC 4, int8|

|Byte38~39|Byte40~41|Byte42|
| - | :- | :- |
|Temperatura|Luz|nível de bateria|

**A carga útil bruta:**

070000080064622472487397162234bb3ccd5798fd2ebc74cf002f3ad0a9ec26ca022958b900fe000057

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|07|07 é o ID do pacote.|
|2~4|status do evento|uint24|000008|<p>000008 é 0x000008, 0x0000XX é reservado e 0x08 é o status do evento. Este byte tem 8 bits, cada um representando um evento.</p><p>Bit1: Evento de início de movimento.</p><p>Bit2: Evento de fim de movimento.</p><p>Bit3: Evento de imobilidade.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento de SOS.</p><p>Bit8: Evento de pressionar uma vez.</p><p></p><p>Converter para hexadecimal:</p><p>0x000000: nenhum evento</p><p>0x000001: Evento de início de movimento.</p><p>0x000002: Evento de fim de movimento.</p><p>0x000004: Evento de imobilidade.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento de SOS.</p><p>0x000080: Evento de pressionar uma vez.</p>|
|5|Número do segmento de movimento|uint8|00|<p>00 é 0x00 == 0.</p><p>Quando o movimento começa, a contagem aumenta em 1. Registrar que isto é um movimento.</p>|
|6~9|hora UTC|uint32|64622472|<p>64622472 é 0x64622472 = 1684153458 (DEC) segundos.</p><p>Converta para Hora de Pequim: 2023-05-15 20:24:18</p>|
|10~15|endereço MAC 1|----|487397162234|<p>487397162234 </p><p>o endereço MAC (HEX)= 48:73:97:16:22:34</p>|
|16|O RSSI do endereço MAC 1|int8|bb|<p>bb é 0xBB = -69(DEC), o tipo é int8</p><p>o RSSI = -69</p>|
|17~22|endereço MAC 2|----|3ccd5798fd2e|<p>3ccd5798fd2e </p><p>o endereço MAC (HEX)= 3C:CD:57:98:FD:2E</p>|
|23|O RSSI do endereço MAC 2|int8|bc|<p>bc é 0xBC = -68(DEC), o tipo é int8</p><p>o RSSI = -68</p>|
|24~29|endereço MAC 3|----|74cf002f3ad0|<p>74cf002f3ad0</p><p>o endereço MAC (HEX)= 74:CF:00:2F:3A:D0</p>|
|30|O RSSI do endereço MAC 3|int8|a9|<p>a9 é 0xA9 = -87(DEC), o tipo é int8</p><p>o RSSI = -87</p>|
|31~36|endereço MAC 4|----|ec26ca022958|<p>ec26ca022958</p><p>o endereço MAC (HEX)= EC:26:CA:02:29:58</p>|
|37|O RSSI do endereço MAC 4|int8|b9|<p>b9 é 0xA9 = -71(DEC), o tipo é int8</p><p>o RSSI = -71</p>|
|38~39|Temperatura|int16|00fe|00fe é 0x00FE = 254(DEC), temperatura=254/10=25,4℃|
|40~41|Luz|uint16|0000|0000 é 0x0000 = 0(DEC) minutos, a luz=0=0%|
|42|nível de bateria|uint8|57|<p>57 é 0x57 = 87(DEC)</p><p>O nível de bateria é 87%</p>|

### Pacote de Localização Bluetooth e Sensor - 0x08

O ID 0x08 é usado para enviar endereços MAC de Beacon Bluetooth, dados de sensores e bateria.

|0x08|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|status do evento|número do segmento de movimento|hora UTC|endereço MAC 1|O RSSI do endereço MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~32|Byte33~34|Byte 35|
| :- | :- | :- | :- | :- | :- | :- |
|endereço MAC 2|O RSSI do endereço MAC 2, int8|endereço MAC 3|O RSSI do endereço MAC 3, int8|Temperatura|luz|nível de bateria|

**A carga útil bruta:**

0800000800646225bb5162d2c1b9d3ca1b5bd2afeae5c0d0e2d70529e8c900fa000057

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|08|08 é o ID do pacote.|
|2~4|status do evento|uint24|000008|<p>000008 é 0x000008, 0x0000XX é reservado e 0x08 é o status do evento. Este byte tem 8 bits, cada um representando um evento.</p><p>Bit1: Evento de início de movimento.</p><p>Bit2: Evento de fim de movimento.</p><p>Bit3: Evento de imobilidade.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento de SOS.</p><p>Bit8: Evento de pressionar uma vez.</p><p></p><p>Converter para hexadecimal:</p><p>0x000000: nenhum evento</p><p>0x000001: Evento de início de movimento.</p><p>0x000002: Evento de fim de movimento.</p><p>0x000004: Evento de imobilidade.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento de SOS.</p><p>0x000080: Evento de pressionar uma vez.</p>|
|5|Número do segmento de movimento|uint8|00|<p>00 é 0x00 == 0.</p><p>Quando o movimento começa, a contagem aumenta em 1. Registrar que isto é um movimento.</p>|
|6~9|hora UTC|uint32|646225bb|<p>646225bb é 0x646225BB = 1684153787 (DEC) segundos.</p><p>Converta para Hora de Pequim: 2023-05-15 20:29:47</p>|
|10~15|endereço MAC 1|-----|5162d2c1b9d3|<p>5162d2c1b9d3</p><p>o endereço MAC (HEX)=51:62:D2:C1:B9:D3</p>|
|16|O RSSI do endereço MAC 1|int8|c0|<p>c0 é 0xC0 = -64(DEC), o tipo é int8</p><p>o RSSI = -64</p>|
|17~22|endereço MAC 2|-----|1b5bd2afeae5|<p>1b5bd2afeae5</p><p>o endereço MAC (HEX)= 1B:5B:D2:AF:EA:E5</p>|
|23|O RSSI do endereço MAC 2|int8|bc|<p>bc é 0xBC = -68(DEC), o tipo é int8</p><p>o RSSI = -68</p>|
|24~29|endereço MAC 3|-----|d0e2d70529e8|<p>d0e2d70529e8</p><p>o endereço MAC (HEX)= D0:E2:D7:05:29:E8</p>|
|30|O RSSI do endereço MAC 3|int8|c9|<p>c9 é 0xC9 = -55(DEC), o tipo é int8</p><p>o RSSI = -55</p>|
|31~32|Temperatura|int16|00fa|00fa é 0x00FA = 250(DEC), temperatura=254/10=25,0℃|
|33~34|Luz|uint16|0000|0000 é 0x0000 = 0(DEC) minutos, a luz=0=0%|
|35|nível de bateria|uint8|57|<p>57 é 0x57 = 87(DEC)</p><p>O nível de bateria é 87%</p>|

### Pacote Somente de Localização GNSS - 0x09

Quando o sensor está desligado, o dispositivo não envia o valor de medição do sensor. Somente os dados de localização são enviados.

|0x09|Byte2~4|Byte5|Byte6~9|Byte10~13|Byte14~17|Byte18|
| - | :- | :- | :- | :- | :- | :- |
|ID|status do evento|número do segmento de movimento|hora UTC|longitude|latitude|nível de bateria|

**A carga útil bruta:**

09000000006463186806ca506801587e4c56

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|09|09 é o ID do pacote.|
|2~4|status do evento|uint24|000000|<p>000000 é 0x000008, 0x0000XX é reservado e 0x08 é o status do evento. Este byte tem 8 bits, cada um representando um evento.</p><p>Bit1: Evento de início de movimento.</p><p>Bit2: Evento de fim de movimento.</p><p>Bit3: Evento de imobilidade.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento de SOS.</p><p>Bit8: Evento de pressionar uma vez.</p><p></p><p>Converter para hexadecimal:</p><p>0x000000: nenhum evento</p><p>0x000001: Evento de início de movimento.</p><p>0x000002: Evento de fim de movimento.</p><p>0x000004: Evento de imobilidade.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento de SOS.</p><p>0x000080: Evento de pressionar uma vez.</p>|
|5|Número do segmento de movimento|uint8|00|<p>00 é 0x00 == 0.</p><p>Quando o movimento começa, a contagem aumenta em 1. Registrar que isto é um movimento.</p>|
|6~9|hora UTC|uint32|64631868|<p>64631868 é 0x64631868 = 1684215912 (DEC) segundos.</p><p>Converta para Hora de Pequim: 2023-05-16 13:45:12</p>|
|10~13|Longitude|int32|06ca5068|06ca5068 é 0x06CA5068 = 113922152 (DEC), a longitude = 113922152/1000000=113.922152|
|14~17|Latitude|int32|01587e4c|01587e4c é 0x01587E4C = 22576716 (DEC), a latitude = 22576716/1000000=22.576716|
|18|Nível de bateria|uint8|56|<p>56 é 0x56 = 86(DEC)</p><p>O nível de bateria é 86%</p>|

### Pacote Somente de Localização Wi-Fi - 0x0A

|0x0A|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|status do evento|número do segmento de movimento|hora UTC|endereço MAC 1|O RSSI do endereço MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~36|Byte37|Byte38|
| :- | :- | :- | :- | :- | :- | :- |
|endereço MAC 2|O RSSI do endereço MAC 2, int8|endereço MAC 3|O RSSI do endereço MAC 3, int8|endereço MAC 4|O RSSI do endereço MAC 4, int8|nível de bateria|

**A carga útil bruta:**

0A0000080064622472487397162234bb3ccd5798fd2ebc74cf002f3ad0a9ec26ca022958b957

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|0A|0A é o ID do pacote.|
|2~4|status do evento|uint32|000008|<p>000008 é 0x000008, 0x0000XX é reservado e 0x08 é o status do evento. Este byte tem 8 bits, cada um representando um evento.</p><p>Bit1: Evento de início de movimento.</p><p>Bit2: Evento de fim de movimento.</p><p>Bit3: Evento de imobilidade.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento de SOS.</p><p>Bit8: Evento de pressionar uma vez.</p><p></p><p>Converter para hexadecimal:</p><p>0x000000: nenhum evento</p><p>0x000001: Evento de início de movimento.</p><p>0x000002: Evento de fim de movimento.</p><p>0x000004: Evento de imobilidade.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento de SOS.</p><p>0x000080: Evento de pressionar uma vez.</p>|
|5|Número do segmento de movimento|uint8|00|<p>00 é 0x00 == 0.</p><p>Quando o movimento começa, a contagem aumenta em 1. Registrar que isto é um movimento.</p>|
|6~9|hora UTC|uint32|64622472|<p>64622472 é 0x64622472 = 1684153458 (DEC) segundos.</p><p>Converta para Hora de Pequim: 2023-05-15 20:24:18</p>|
|10~15|endereço MAC 1|-----|487397162234|<p>487397162234 </p><p>o endereço MAC (HEX)= 48:73:97:16:22:34</p>|
|16|O RSSI do endereço MAC 1|int8|bb|<p>bb é 0xBB = -69(DEC), o tipo é int8</p><p>o RSSI = -69</p>|
|17~22|endereço MAC 2|-----|3ccd5798fd2e|<p>3ccd5798fd2e </p><p>o endereço MAC (HEX)= 3C:CD:57:98:FD:2E</p>|
|23|O RSSI do endereço MAC 2|int8|bc|<p>bc é 0xBC = -68(DEC), o tipo é int8</p><p>o RSSI = -68</p>|
|24~29|endereço MAC 3|-----|74cf002f3ad0|<p>74cf002f3ad0</p><p>o endereço MAC (HEX)= 74:CF:00:2F:3A:D0</p>|
|30|O RSSI do endereço MAC 3|int8|a9|<p>a9 é 0xA9 = -87(DEC), o tipo é int8</p><p>o RSSI = -87</p>|
|31~36|endereço MAC 4|-----|ec26ca022958|<p>ec26ca022958</p><p>o endereço MAC (HEX)= EC:26:CA:02:29:58</p>|
|37|O RSSI do endereço MAC 4, int8|int8|b9|<p>b9 é 0xA9 = -71(DEC), o tipo é int8</p><p>o RSSI = -71</p>|
|38|nível de bateria|uint8|57|<p>57 é 0x57 = 87(DEC)</p><p>O nível de bateria é 87%</p>|

### Pacote Somente de Localização por Bluetooth -0x0B

|<a name="ole_link4"></a>0x0B|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|status do evento|número do segmento de movimento|hora UTC|endereço MAC 1|O RSSI do endereço MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31|
| :- | :- | :- | :- | :- |
|endereço MAC 2|O RSSI do endereço MAC 2, int8|endereço MAC 3|O RSSI do endereço MAC 3, int8|nível de bateria|

**O payload bruto:**

0B00000800646225bb5162d2c1b9d3ca1b5bd2afeae5c0d0e2d70529e8c957

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|0B|0B é o ID do pacote.|
|2~4|status do evento|uint24|000008|<p>000008 é 0x000008, 0x0000XX é reservado e 0x08 é o status do evento. Este byte tem 8 bits, cada um representando um evento.</p><p>Bit1: evento de início de movimento.</p><p>Bit2: evento de fim de movimento.</p><p>Bit3: evento de imobilidade.</p><p>Bit4: evento de choque.</p><p>Bit5: evento de temperatura.</p><p>Bit6: evento de luz.</p><p>Bit7: evento de SOS.</p><p>Bit8: evento de pressionar uma vez.</p><p></p><p>Converter para hexadecimal:</p><p>0x000000: nenhum evento</p><p>0x000001: evento de início de movimento.</p><p>0x000002: evento de fim de movimento.</p><p>0x000004: evento de imobilidade.</p><p>0x000008: evento de choque.</p><p>0x000010: evento de temperatura.</p><p>0x000020: evento de luz.</p><p>0x000040: evento de SOS.</p><p>0x000080: evento de pressionar uma vez.</p>|
|5|Número do segmento de movimento|uint8|00|<p>00 é 0x00 == 0.</p><p>Quando o movimento começa, a contagem aumenta em 1. Registre que isso é um movimento.</p>|
|6~9|hora UTC|uint32|646225bb|<p>646225bb é 0x646225BB = 1684153787 (DEC) segundos.</p><p>Converta para Hora de Pequim: 2023-05-15 20:29:47</p>|
|10~15|endereço MAC 1|-----|5162d2c1b9d3|<p>5162d2c1b9d3</p><p>o endereço MAC (HEX)=51:62:D2:C1:B9:D3</p>|
|16|O RSSI do endereço MAC 1, int8|int8|c0|<p>c0 é 0xC0 = -64(DEC), o tipo é int8</p><p>o RSSI = -64</p>|
|17~22|endereço MAC 2|-----|1b5bd2afeae5|<p>1b5bd2afeae5</p><p>o endereço MAC (HEX)= 1B:5B:D2:AF:EA:E5</p>|
|23|O RSSI do endereço MAC 2, int8|int8|bc|<p>bc é 0xBC = -68(DEC), o tipo é int8</p><p>o RSSI = -68</p>|
|24~29|endereço MAC 3|-----|d0e2d70529e8|<p>d0e2d70529e8</p><p>o endereço MAC (HEX)= D0:E2:D7:05:29:E8</p>|
|30|O RSSI do endereço MAC 3, int8|int8|c9|<p>c9 é 0xC9 = -55(DEC), o tipo é int8</p><p>o RSSI = -55</p>|
|31|nível de bateria|uint8|57|<p>57 é 0x57 = 87(DEC)</p><p>O nível de bateria é 87%</p>|

### Pacote de Código de Erro -0x0D

O pacote de ID 0x0D é usado para fazer upload do código de erro.

**O payload bruto:**

0D00000001

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|0D|0D é o ID do pacote.|
|2~5|Código de erro|uint32|00000001|<p>0x00000001: falha na aquisição do horário UTC</p><p>0x00000002: almanaque muito antigo</p><p>0x00000003: erro de Doppler</p>|

### Pacote de Status de Posicionamento e Sensor -0x11

O ID 0x11 é usado para fazer upload do status de posicionamento, dos dados do sensor e da bateria.

**O payload bruto:**

110100000064a763a0014100002f

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|11|11 é o ID do pacote.|
|2|Status de posicionamento|uint8|01|<p>00: Posicionamento bem-sucedido</p><p>01: A varredura GNSS excedeu o tempo limite e falhou em obter a localização.</p><p>02: A varredura Wi-Fi excedeu o tempo limite e falhou em obter a localização.</p><p>03: A varredura Wi-Fi + GNSS excedeu o tempo limite e falhou em obter a localização.</p><p>04: A varredura GNSS + Wi-Fi excedeu o tempo limite e falhou em obter a localização.</p><p>05: A varredura Bluetooth excedeu o tempo limite e falhou em obter a localização.</p><p>06: A varredura Bluetooth + Wi-Fi excedeu o tempo limite e falhou em obter a localização.</p><p>07: A varredura Bluetooth + GNSS excedeu o tempo limite e falhou em obter a localização.</p><p>08: A varredura Bluetooth + Wi-Fi + GNSS excedeu o tempo limite e falhou em obter a localização.</p><p>09: O Location Server falhou ao analisar a localização GNSS.</p><p>0A: O Location Server falhou ao analisar a localização Wi-Fi.</p><p>0B: O Location Server falhou ao analisar a localização Bluetooth.</p><p>0C: Falha ao analisar a localização GNSS devido à baixa precisão.</p><p>0D: Falha na sincronização de horário.</p><p>0E: Falha em obter o posicionamento devido ao almanaque antigo.</p>|
|3～5|Status do evento|uint24|000000|<p>000000 é 0x000000, 0x0000XX é reservado e 0x00 é o status do evento. Este byte tem 8 bits, cada um representando um evento.</p><p>Bit1: evento de início de movimento.</p><p>Bit2: evento de fim de movimento.</p><p>Bit3: evento de imobilidade.</p><p>Bit4: evento de choque.</p><p>Bit5: evento de temperatura.</p><p>Bit6: evento de luz.</p><p>Bit7: evento de SOS.</p><p>Bit8: evento de pressionar uma vez.</p><p></p><p>Converter para hexadecimal:</p><p>0x000000: nenhum evento</p><p>0x000001: evento de início de movimento.</p><p>0x000002: evento de fim de movimento.</p><p>0x000004: evento de imobilidade.</p><p>0x000008: evento de choque.</p><p>0x000010: evento de temperatura.</p><p>0x000020: evento de luz.</p><p>0x000040: evento de SOS.</p><p>0x000080: evento de pressionar uma vez.</p>|
|6～9|Timestamp UTC|uint32|64a763a0|<p>64a763a0 é 0x64a763a0 = 1688691616 (DEC) segundos.</p><p>Converta para Hora de Pequim: 2023-07-07 09:00:16</p>|
|10～11|Temperatura|int16|0141|0141 é 0x0141 = 321(DEC), temperatura=321/10=32,1℃|
|12～13|Luz|uint16|0000|0000 é 0x0000 = 0(DEC) minutos, a luz=0=0%|
|14|Nível de bateria|uint8|2F|<p>2F é 0x2F = 47(DEC)</p><p>O nível de bateria é 47%</p>|

## Pacote Downlink, FPort=5

O rastreador suporta LoRaWAN para enviar alguns comandos em downlink para ajustar parâmetros. Se o dispositivo estiver em hibernação, o comando de downlink entra em vigor na próxima vez que o dispositivo acordar para enviar dados.

**Nota: FPort=5**

### Configurando o Modo SOS -0x80

|0x80|Byte2|
| - | :- |
|ID|<p>Modo SOS</p><p>0: modo único</p><p>1: modo contínuo</p>|

8000: configurar SOS para modo único.

8001: configurar SOS para modo contínuo.

### Configurando o Intervalo de Uplink -0x81

|0x81|Byte2~3|Byte4~5|Byte6~7|
| - | :- | :- | :- |
|ID|<p>Intervalo de uplink de heartbeat</p><p>0000: Manter a configuração atual</p><p>Unidade: minutos</p>|<p>Intervalo de uplink em modo periódico</p><p>0000: Manter a configuração atual</p><p>Unidade: minutos </p>|<p>Intervalo de uplink em modo de evento</p><p>0000: Manter a configuração atual</p><p>Unidade: minutos</p>|

**Exemplo**: definir o intervalo do modo periódico para 30 minutos

Comando: 810000001E0000

### Ligar o buzzer -0x82

Após enviar este comando, um tom de alarme do buzzer será ativado depois que o dispositivo acordar e continuará a soar por 1 minuto.

|0x82|Byte2|
| - | :- |
|ID|<p>Ligar o buzzer.</p><p>00: desligar</p><p>01: ligar</p>|

8200: desligar o buzzer<br/>
8201: ligar o buzzer<br/>

### Configurando o Modo de Trabalho -0x83

|0x83|Byte2|
| - | :- |
|ID|<p>Ligar o buzzer.</p><p>00: modo de espera</p><p>01: modo periódico</p><p>02: modo de evento</p>|

8300: definir modo de trabalho para modo de espera<br/>
8301: definir modo de trabalho para modo periódico <br/>
8302: definir modo de trabalho para modo de evento

### Configurando o Modo de Trabalho -0x84

|0x84|Byte2|Byte3~4|Byte5~6|Byte7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|habilitar evento de movimento|limite de movimento de 3 eixos|intervalo de início de movimento|habilitar evento de imobilidade|tempo limite de imobilidade|

|Byte10|Byte11~12|Byte13|Byte14~15|Byte16~17|Byte18~19|
| - | - | - | - | :- | :- |
|habilitar evento de choque|limite de choque de 3 eixos|habilitar evento de temperatura|intervalo de uplink do evento de temperatura|intervalo de amostragem de temperatura|limite máximo de temperatura|

|Byte20~21|Byte22|Byte23|Byte24~25|Byte26~27|Byte28~29|
| - | - | - | - | :- | :- |
|Limite mínimo de temperatura|Tipo de aviso de temperatura|Habilitar evento de luz|intervalo de uplink do evento de luz|intervalo de amostragem de luz|limite máximo de luz|

|Byte30~31|Byte32|
| - | - |
|limite mínimo de luz|tipo de aviso de luz|

**O comando:**

8400001e000500016801012c000005001e025800000000000500010064000000

|**Byte**|**Valor**|**Tipo**|**Dados Brutos**|**Descrição**|
| - | - | - | - | - |
|1|ID do Quadro|uint8|84|84 é o ID do pacote.|
|2|Habilitar evento de movimento|uint8|00|<p>00 significa desabilitar o modo Evento.</p><p>00: desabilitar o modo Evento.</p><p>01: habilitar o modo Evento.</p>|
|3~4|Limite de movimento de 3 eixos|uint16|001e|<p>001e é 0x001E=30(DEC) mg</p><p>Quando a aceleração exceder 30mg, determina-se que o dispositivo está em movimento; quando ficar 2 minutos abaixo deste valor, determina-se que o dispositivo está em imobilidade.</p>|
|5~6|Intervalo de início de movimento|uint16|0005|0005 é 0x0005 = 5(DEC), quando o dispositivo está em movimento, o intervalo é de 5 minutos.|
|7|Habilitar evento de imobilidade|uint8|00|<p>00 significa desabilitar evento de imobilidade.</p><p>00: desabilitar evento de imobilidade.</p><p>01: habilitar evento de imobilidade.</p>|
|8~9|Tempo limite de imobilidade|uint16|0168|0168 é 0x0168 = 360(DEC), quando o dispositivo estiver parado em um local por mais de 360 minutos, um evento de tempo limite de imobilidade é acionado.|
|10|Habilitar evento de choque|uint8|01|<p>01 significa habilitar evento de choque.</p><p>00: desabilitar evento de choque.</p><p>01: habilitar evento de choque.</p>|
|11~12|Limite de choque de 3 eixos|uint16|012c|<p>012c é 0x012C=300(DEC) mg</p><p>Quando a aceleração exceder 300mg, o evento de choque é acionado.</p>|
|13|Habilitar evento de temperatura|uint8|00|<p>00 significa habilitar evento de choque.</p><p>00: desabilitar evento de choque.</p><p>01: habilitar evento de choque.</p>|
|14~15|Intervalo de uplink do evento de temperatura|uint16|0005|0005 é 0x0005 = 5(DEC), quando a temperatura exceder o limite, os dados de localização e do sensor serão enviados a cada 5 minutos.|
|16~17|Intervalo de amostragem de temperatura|uint16|001e|<p>001e é 0x001E=30(DEC) segundos</p><p>A temperatura é detectada a cada 30 segundos. Quando o limite é acionado, envie os dados de localização e do sensor.</p>|
|18~19|Limite máximo de temperatura|int16|0258|<p>0258 é 0x0258 = 600(DEC),</p><p>Limite máximo =600/10=60,0 ℃</p>|
|20~21|Limite mínimo de temperatura|int16|0000|<p>0000 é 0x0000 = 0(DEC), </p><p>Limite mínimo=0/10=0,0 ℃</p>|
|22|Regra de limite de temperatura|uint8|00|<p>00 significa que quando temperatura ≤ limite mínimo, o dispositivo enviará localização e evento de temperatura.</p><p>00: temp ≤ limite mínimo</p><p>01: temp ≥ limite máximo</p><p>02: temp ≤ limite mínimo e temp ≥ limite máximo</p><p>03: limite mínimo≤ temp ≤limite máximo</p>|
|23|Habilitar evento de luz|uint8|00|<p>00 significa desabilitar evento de luz.</p><p>00: desabilitar evento de luz.</p><p>01: habilitar evento de luz.</p>|
|24~25|Intervalo de uplink do evento de luz|uint16|0005|0005 é 0x0005 = 5(DEC), quando a luz exceder o limite, os dados de localização e do sensor serão enviados a cada 5 minutos.|
|26~27|Intervalo de amostragem de luz|uint16|0001|<p>0001is 0x0001=1(DEC) segundos</p><p>A temperatura é detectada a cada 1 segundos. Quando o limite é acionado, envie os dados de localização e do sensor.</p>|
|28~29|Limite máximo de luz|uint16|0064|<p>0064 é 0x0064 = 100(DEC) %</p><p>Limite máximo =100%</p>|
|30~31|Limite mínimo de luz|uint16|0000|<p>0000 é 0x0000 = 0(DEC) %</p><p>Limite mínimo=0%</p>|
|32|Tipo de aviso de luz|uint8|00|<p>00 significa que quando luz ≤ limite mínimo, o dispositivo enviará localização e evento de luz.</p><p>00: luz ≤ limite mínimo</p><p>01: luz ≥ limite máximo</p><p>02: luz ≤ limite mínimo e luz ≥ limite máximo</p><p>03: limite mínimo≤ luz ≤limite máximo</p>|

### Solicitar Localização -0x85

O rastreador de requisições inicia a localização e os envios com base na configuração atual. Ele é normalmente usado no modo de espera.

|0x85|
| - |
|ID|

Exemplo:

85: solicitar localização.

### Definir Estratégia de Posicionamento -0x86

|0x86|Byte2|
| - | :- |
|ID|<p>Estratégia de posicionamento</p><p>00: Apenas GNSS</p><p>01: Apenas Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Apenas Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|

Exemplo:

8600: definir a estratégia de posicionamento para “Apenas GNSS”.

### Solicitar Parâmetros de Evento -0x87

|0x87|
| - |
|ID|

Exemplo:

87: solicitar parâmetros de evento.

### Solicitar Pacote de Status do Dispositivo -0x88

|0x88|
| - |
|ID|

Exemplo:

88: solicitar pacote de Status do Dispositivo (0x01 ou 0x02).

### Reiniciar Dispositivo -0x89

|0x89|
| - |
|ID|

Exemplo:

89: Após o envio do comando, o dispositivo é reiniciado e ingressa novamente na rede. Use este comando com cautela.

### Habilitar Sensor de Temperatura e Luz -0x8C

Habilita a coleta e o envio de dados para o sensor de temperatura e luz.

|0x8C|Byte2|
| - | :- |
|ID|<p>Abrir o sensor de temperatura e luz.</p><p>00: Fechar o sensor de temperatura e luz.</p><p>01: Abrir o sensor de temperatura e luz.</p>|

Exemplo:

8C00: Fechar o sensor de temperatura e luz.<br/>
8C01: Abrir o sensor de temperatura e luz.

### Habilitar Alarme SOS -0x8D

Habilita o modo contínuo SOS, enviando posicionamento rapidamente, uma vez por minuto, parando após 30 vezes consecutivas, acompanhado de alarme sonoro e luminoso.

Desligue o SOS fechando o comando ou clicando duas vezes na tecla.

|0x8D|Byte2|
| - | :- |
|ID|<p>Abrir o SOS.</p><p>00: Fechar.</p><p>01: Abrir.</p>|

Exemplo:

8D00: Fechar o alarme SOS.<br/>
8D01: Abrir o alarme SOS.
