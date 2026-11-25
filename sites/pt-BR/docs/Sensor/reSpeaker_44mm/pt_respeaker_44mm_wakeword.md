---
description: Transforme o reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus em um satélite de voz JARVIS — WakeNet "Jarvis" e nove comandos rodam offline na placa, um cérebro em Python no PC aciona um HUD do Homem de Ferro no navegador.
title: Palavra de ativação no reSpeaker XVF3800 44mm (JARVIS)
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - XIAO ESP32-S3 Plus
  - palavra de ativação
  - WakeNet
  - MultiNet
  - ESP-SR
  - JARVIS
  - XMOS
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/jarvis.jpg
slug: /respeaker_44mm_wakeword
sku: 100066841,100065276
last_update:
  date: 11/24/2026
  author: Kasun Thushara
createdAt: '2026-11-24'
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/pt-br/respeaker_44mm_wakeword/
---

# Satélite de voz Edge AI: KWS e MultiNet NLU com reSpeaker XVF3800 44mm

## Introdução

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/_1fvV75W3ds"
          title="reSpeaker 44mm XIAO ESP32S3 Plus — KWS and NLU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

Diga **“Jarvis”**. O anel pisca em verde menta, um breve sino toca e, pelos **6,5 segundos** seguintes, o XIAO escuta um entre nove comandos. A palavra de ativação e cada comando rodam **na placa** com o Espressif ESP-SR; nenhum áudio é enviado e nenhuma conta é necessária.

O que sai da placa é uma única linha legível via UDP:

```text
JARVIS 0042 3
```

Um pequeno cérebro em Python no seu PC transforma essa linha em uma ação — tocar música, contar uma piada, ler a previsão do tempo, mover a cabeça do personagem — e aciona um HUD de **Homem de Ferro / JARVIS** em tela cheia no navegador. A resposta é sintetizada no PC e reproduzida pelo próprio alto-falante do reSpeaker.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/jarvis.jpg" alt="poster" width={700} height="auto" /></p>

```text
4 mics ─► XVF3800 DSP ─► I²S 16 kHz ─► XIAO ESP32-S3 Plus (WakeNet + MultiNet)
                                             │  UDP :9001  "JARVIS <seq> <id>"
                                             ▼
                                PC brain.py ── HTTP :8080 / SSE ──► browser HUD
                                             └── UDP :9100  PCM ────► reSpeaker speaker
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={400} height="auto" /></p>

## O que você diz, o que acontece

| momento | na placa | no PC |
| --- | --- | --- |
| ocioso | anel em modo DOA, fraco, segue as vozes | HUD em espera; `LINKED` quando a página alcança o cérebro |
| “Jarvis” | flash em verde menta, sino de ~0,7 s, codec reduz de 70 % → 30 % | — |
| +0,8 s | janela de comando abre por 6,5 s (MultiNet só pontua os primeiros 5,8 s) | — |
| comando correspondido | animação no anel, `JARVIS <seq> <id>` enviado, ACK esperado em 2,5 s | ação é executada, cartão + log de eventos + resposta falada |
| nada correspondido | piscar âmbar duplo | log: `no command heard (wake fired, phrase not matched)` |

## Por que ele é construído desta forma

| decisão | motivo |
| --- | --- |
| palavra de ativação e comandos rodam **no XIAO** | funciona mesmo com o WiFi do local fora do ar, sem latência, sem questão de privacidade, sem conta na nuvem |
| **9** comandos, não trinta | o MultiNet se confunde à medida que a tabela cresce; nove frases, cada uma com um verbo diferente, são reconhecidas de forma confiável |
| um pacote de **texto** por comando | um comando é `JARVIS 0042 3` — 14 bytes, legível no Wireshark, trivial de retransmitir |
| palavra de ativação vive na **partição de modelo** | pacotes WakeNet têm ~3,3 MB; eles vão na partição `esp_sr_16`, não no sketch |
| HUD no **PC** | o XIAO não tem tela, e um navegador é o display 1080p mais barato |

## Pré-requisitos

**Hardware**

| item | recomendação | por quê |
| --- | --- | --- |
| reSpeaker **XVF3800 44mm** com XIAO | SKU 100066841 ou 100065276 (com case) | microfones, DSP XVF3800, anel de LED, codec, amplificador e fiação I²S estão na placa |
| Seeed **XIAO ESP32-S3 Plus** | 16 MB flash / 8 MB PSRAM, pré-soldado | a partição de modelo precisa de 4 MB e o anel de áudio vive na PSRAM |
| cabo USB-C **de dados** | não apenas de carga | você grava a porta do XIAO, não a porta XMOS |
| alto-falante | o módulo de 5 W 4 Ω no conector JST | respostas e música saem do robô |
| WiFi 2,4 GHz | WPA2, **sem isolamento de clientes** | o ESP32-S3 não tem rádio de 5 GHz, e o isolamento bloqueia PC ↔ placa |
| PC | Windows 10/11 para respostas faladas, Chrome ou Edge | roda o cérebro e o HUD |

**Software**

| software | versão | observação |
| --- | --- | --- |
| Arduino IDE 2 ou `arduino-cli` | 1.5.1 | ESP_SR vem dentro do core, sem etapa no Library Manager |
| core esp32 | **3.3.11** | a API ESP-SR e a partição `esp_sr_16` estão vinculadas a esta versão |
| Python | **3.11** | cérebro |
| `numpy`, `soundfile`, `scipy` | recentes | decodificam MP3 para PCM 16 kHz para o alto-falante do robô |
| Git | 2.50+ | clonar o projeto |

:::note
O array deve estar rodando o **firmware I²S de 16 kHz** (`respeaker_44mm_i2s_c16k2ch_v1.0.0.bin`, XVF3800 como mestre I²S, 2 canais). Com a imagem de 48 kHz o XIAO vê silêncio ou lixo e o ESP-SR nunca carrega. Atualize a partir de [Atualizar Firmware](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/#atualizar-firmware) e confirme com o sketch `firmware/audio_rms` do projeto: a fala deve mostrar RMS nas centenas no canal esquerdo.
:::

Orçamento de tempo em uma máquina nova: toolchain 20 min, verificação XMOS 10 min, palavras-chave e primeiro flash 15 min, cérebro e HUD 5 min, verificação ao vivo 10 min.

## Configure a IDE

Instale o core **explicitamente**; “latest” não é a versão contra a qual este firmware foi construído.

```powershell
arduino-cli core update-index
arduino-cli core install esp32:esp32@3.3.11
arduino-cli board list
```

`board list` deve mostrar sua porta com o core S3 anexado. Não espere que ele nomeie um XIAO: o core não tem essa entrada, então imprime algo como

```text
COM9 serial Serial Port (USB) ESP32 Family Device esp32:esp32:esp32_family
                             Ozobot DRVKit        esp32:esp32:ozobot_drvkit
```

O nome da placa é cosmético — o FQBN abaixo é o que decide o build. Feche qualquer monitor serial antes de gravar.

Em seguida, clone o projeto:

```powershell
git clone https://github.com/KasunThushara/reSpeaker_44_wakeword.git
cd reSpeaker_44_wakeword
```

O FQBN não é opcional. O core instalado não tem entrada de placa `XIAO_ESP32S3_Plus`, e somente o esquema `esp_sr_16` tem a partição de modelo.

```powershell
$cli  = "C:\Users\<you>\AppData\Local\Programs\Arduino IDE\resources\app\lib\backend\resources\arduino-cli.exe"
$fqbn = "esp32:esp32:esp32s3:FlashSize=16M,PSRAM=opi,PartitionScheme=esp_sr_16,CDCOnBoot=cdc"

& $cli compile --fqbn $fqbn --output-dir build\wake_demo firmware\wake_demo
```

| opção | motivo |
| --- | --- |
| `FlashSize=16M,PSRAM=opi` | XIAO ESP32-S3 **Plus**: 16 MB flash, 8 MB PSRAM octal (o anel de áudio de 3 s) |
| `PartitionScheme=esp_sr_16` | cria a partição de modelo de ~4 MB para o pacote ESP-SR de 3,3 MB |
| `CDCOnBoot=cdc` | `Serial` precisa sair do USB nativo, porque o GPIO43 (UART0 RX) é o pino de dados I²S |
| alvo `esp32s3` | o XIAO é um ESP32-S3 simples, não uma variante Plus com seu próprio arquivo de placa |

Na IDE, selecione **ESP32S3 Dev Module** e defina Flash Size 16 MB, PSRAM **OPI PSRAM**, Partition Scheme **ESP SR 16MB**, USB CDC On Boot **Enabled** — estes devem corresponder exatamente ao FQBN.

## Defina as palavras-chave

Duas coisas diferentes são chamadas de “keyword” aqui:

| o quê | onde vive | mudar isso exige |
| --- | --- | --- |
| a palavra de ativação **“Jarvis”** | pacote de modelo `build/srmodels_jarvis.bin` | um reflash do modelo |
| os **nove comandos** | `sr_commands[]` em `firmware/wake_demo/wake_demo.ino` | um rebuild e reflash |

### A palavra de ativação

A palavra está no modelo, não no sketch. Esta build usa `wakenet9l_tts1h8_Jarvis_3_0.627_0.632`, medido em 4/4 a 30–50 cm e 3/3 a 1,5–2 m. Os pacotes commitados em `build/` são:

| pacote | tamanho | uso |
| --- | --- | --- |
| `srmodels_jarvis.bin` | 3.340.189 B | **o que deve ser gravado** — “Jarvis”, limiares `0.627_0.632` |
| `srmodels_stock_backup.bin` | 3.340.296 B | “Hi ESP” de fábrica, rollback de último recurso |

Uma palavra de ativação diferente significa um modelo WakeNet diferente — seja outro pacote do zoológico de modelos da Espressif ou um que você treine — e nada no sketch muda. Os números no nome do modelo são seus limiares de detecção; eles vivem dentro do pacote, então a sensibilidade é ajustada refazendo o pacote, não editando o sketch.

:::note Outras palavras de ativação, outras listas de palavras-chave
O mesmo repositório traz um segundo demo com uma palavra de ativação diferente e sua própria lista de oito frases — veja [`pc_brain_walle/`](https://github.com/KasunThushara/reSpeaker_44wakeword/tree/main/pc_brain_walle) (frases como “go straight ahead” e “charge your battery”) e seu próprio pacote em `build/`. Ler isso é a forma mais rápida de ver como outro conjunto de palavras-chave é ligado — mas esta página permanece em **Jarvis** e nos nove comandos abaixo, porque esse par é o que o HUD, os ids do cérebro e `build/srmodels_jarvis.bin` usam em conjunto.
:::

### Os comandos

Abra `firmware/wake_demo/wake_demo.ino` e substitua as duas tabelas perto do topo por este bloco. Os ids devem permanecer idênticos a `COMMANDS` em `pc_brain/brain.py`; eles são o contrato entre placa, cérebro e HUD, e **não** são índices de array.

```cpp
static const sr_cmd_t sr_commands[] = {
  {1, "play some music"},
  {2, "stop the music"},
  {3, "move your head"},
  {4, "tell me a joke"},
  {5, "change the mood"},
  {6, "show me the weather"},
  {7, "open my tasks"},
  {8, "shut it down"},
  {9, "ask the model"},
};

static const char *PHRASE_TEXT[] = {
  "play some music", "stop the music", "move your head", "tell me a joke",
  "change the mood", "show me the weather", "open my tasks", "shut it down",
  "ask the model"
};
```

O clone traz uma tabela de oito frases de placeholder para que o sketch compile logo de cara; substitua-a literalmente pelo bloco acima. Nada mais no sketch conhece as frases.

Regras de frases aprendidas da maneira difícil:

- **três ou mais palavras, um verbo distinto em cada** — play / stop / move / tell / change / show / open / shut / ask
- evite pares mínimos (“show me the weather” e “show me the time” roubam as correspondências uma da outra)
- evite formas em `-ing` e palavras fora do vocabulário; “todo” não pode ser pronunciado pelo G2P do MultiNet, e é por isso que a frase é **“open my tasks”** e não “show my todo”
- uma nova frase com um id que não existe em `brain.py` é inofensiva, mas não faz nada
- **9 frases é o limite confortável** para esta tabela

:::note O anel ainda acende, mas não diferencia os comandos
`animForId()` no mesmo sketch mapeia animações por **intervalo de id**, um resquício da demo para a qual o sketch foi escrito. Com os nove ids acima, **1–6** todos tocam a roda de cores de “tocar alguma música” e **7–9** tocam o arco-íris da piada; `A_WEATHER`, `A_SHUT` e `A_ASK` nunca são alcançados. Isso é apenas cosmético — o flash de despertar, o sino e o pacote não são afetados. Se a demo precisar de uma animação diferente por comando, substitua `animForId()` por uma tabela de nove entradas em vez do switch por intervalo.
:::

### Personalizar o log (opcional)

O pacote e o sketch são compartilhados com a outra demo do repositório, então as strings que a placa imprime na inicialização ainda nomeiam essa demo. Nada funcional depende delas — mas o log de boot nesta página diz JARVIS, e combiná-lo torna a solução de problemas muito mais fácil. Três lugares em `wake_demo.ino`:

Substitua as quatro linhas de `Serial.println` que abrem `setup()`:

```cpp
  Serial.println(F("=== wake_demo jarvis: Jarvis -> chime -> action -> PC + LED -> DOA ==="));
  Serial.println(F("say \"Jarvis\", then one of the 9 voice actions:"));
  Serial.println(F("  play some music / stop the music / move your head"));
  Serial.println(F("  tell me a joke / change the mood / show me the weather"));
  Serial.println(F("  open my tasks / shut it down / ask the model"));
```

a linha `ready -` logo após `ESP_SR: ok`:

```cpp
  Serial.println(F("ready - say Jarvis, then a command right away"));
```

e o banner de despertar:

```cpp
    Serial.printf("\n[%6lu ms] *** \"HI JARVIS\" #%lu ***\n",
```

Se pular isto, a placa funciona de forma idêntica — ela apenas registra `walle`, `Hi Walle`, `8 voice actions` e `*** "HI WALLE" #1 ***`, o que é confuso se você estiver fazendo diff com o exemplo abaixo.

### Colocar o modelo no diretório de build

O hook pós-build do core copia `srmodels.bin` apenas se encontrar `{build.path}\libraries\ESP_SR` — o que nunca acontece, porque o ESP-SR é compilado no lugar. Copie o pacote manualmente antes de fazer o upload, ou a placa inicializa com o pacote de fábrica “Hi ESP”.

```powershell
Copy-Item build\srmodels_jarvis.bin build\wake_demo\srmodels.bin -Force
```

## Adicionar WiFi, o endereço do PC e as portas

Edite o bloco acima de `setup()`:

```cpp
#define WIFI_SSID "YOUR_2G_SSID"
#define WIFI_PASS "YOUR_PASSWORD"
#define PC_IP     "192.168.7.217"
#define PC_PORT   9001
```

O clone vem com `WIFI_SSID` e `WIFI_PASS` **vazios**, e um par vazio não é um caminho de erro que você possa corrigir depois: a placa inicializa apenas local, imprime `WiFi: no credentials - edit WIFI_SSID / WIFI_PASS` e nunca envia um pacote. Preencha ambos antes do primeiro flash.

- **apenas 2,4 GHz**, WPA2, ambos os dispositivos na mesma sub-rede, sem isolamento AP/cliente.
- Dê ao PC um endereço **fixo** (reserva DHCP). O cérebro aprende o endereço da placa a partir dos pacotes recebidos, mas a placa precisa do endereço do PC na inicialização.
- Não há portal de configurações: mudar o WiFi ou o endereço do PC significa reconstruir e regravar.

:::note Não use ping para verificar o link
Em uma rede de local com mais de um ponto de acesso, a placa pode cair na outra metade da sub-rede — uma bridge `/23` distribuindo `192.168.6.x` para o rádio de 2,4 GHz e `192.168.7.x` para o de 5 GHz é normal. ICMP entre dois clientes sem fio geralmente é descartado mesmo quando o UDP flui bem, então `ping` relata “Destination host unreachable” em um link que funciona.

Avalie o link pelo próprio log da placa: `-> PC  JARVIS 0001 4` seguido de `<- ACK 1` significa que ambas as direções estão ativas. Se o ACK nunca chegar, olhe então para o firewall.
:::

:::caution O endereço do PC também é escrito como octetos
`PC_IP` é usado apenas na linha de log. O alvo UDP são três chamadas separadas a `IPAddress(192, 168, 7, 217)` — o datagrama de aquecimento de ARP, `sendCommand()` e `resendCommand()`. Substitua os octetos em todas as três, ou a placa falará com o PC errado enquanto o log imprime o endereço certo.
:::

| direção | protocolo | porta | usado para |
| --- | --- | --- | --- |
| placa → PC | UDP | **9001** | `JARVIS <seq> <id>`, ACK retorna para a porta de origem da placa |
| PC → placa | UDP | **9100** | música PCM 16 kHz e TTS, mais pacotes de volume `JV <pct>` |
| navegador → PC | TCP | **8080** | HUD, API, SSE |

Abra as portas uma vez, no PowerShell como Administrador:

```powershell
New-NetFirewallRule -DisplayName "JARVIS UDP in"  -Direction Inbound -Protocol UDP -LocalPort 9001,9100 -Action Allow -Profile Private
New-NetFirewallRule -DisplayName "JARVIS HTTP in" -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow -Profile Private
```

Em uma rede que o Windows já confia, isso muitas vezes é redundante — na primeira vez que `python.exe` fizer bind em 9001, aparece um prompt e “Allow” é suficiente. Adicione as regras se esse prompt foi dispensado, se o perfil da LAN for Público ou se a placa registrar `no ACK` enquanto o PC não mostra nada.

## Gravar (Flash)

Compile → copie o modelo → faça o upload, como uma sequência. Fazer upload com um diretório de build desatualizado grava um app *e* um modelo desatualizados.

```powershell
$cli  = "C:\Users\<you>\AppData\Local\Programs\Arduino IDE\resources\app\lib\backend\resources\arduino-cli.exe"
$fqbn = "esp32:esp32:esp32s3:FlashSize=16M,PSRAM=opi,PartitionScheme=esp_sr_16,CDCOnBoot=cdc"

& $cli compile --fqbn $fqbn --output-dir build\wake_demo firmware\wake_demo
Copy-Item build\srmodels_jarvis.bin build\wake_demo\srmodels.bin -Force
& $cli upload -p COM9 --fqbn $fqbn --input-dir build\wake_demo
```

Substitua `COM9` pela sua porta (`/dev/cu.usbmodem*` no macOS, `/dev/ttyACM*` no Linux). Se a gravação não conseguir conectar, segure **BOOT**, toque **RESET**, solte **BOOT** e tente novamente.

Abra o monitor em **115200**. O que importa:

```text
=== wake_demo jarvis: Jarvis -> chime -> action -> PC + LED -> DOA ===
say "Jarvis", then one of the 9 voice actions:
  play some music / stop the music / move your head
  tell me a joke / change the mood / show me the weather
  open my tasks / shut it down / ask the model
WiFi: joining YOUR_2G_SSID......
WiFi: ip=192.168.7.205 rssi=-52 dBm -> PC 192.168.7.217:9001
volume: 70% (-3.0 dB, DAC 0x06) boot
i2s full duplex: ok
audio: ring 96000 bytes (ok)
audio: listening on 9100
audio tuning: AGCMAXGAIN=64, ASROUTGAIN=1.5, ASR on
  -> DOA idle (boot)
MC Quantized vadnet1:vadnet1_mediumv1_Speech_1_0.5_0.1, min speech:128 ms, min noise:992 ms, mode:0, threshold:0.500, channel:1, tigger:v1
MC Quantized wakenet9: wakenet9l_tts1h8_Jarvis_3_0.627_0.632, tigger:v4, mode:0, p:0
Build fst from commands.
Quantized MultiNet7:rnnt_ctc_2.0, name:mn7_en
Quantized MultiNet7 search method: 2, time out:5.8 s
Build fst from commands.
ESP_SR: ok
ready - say Jarvis, then a command right away
  DOA 183 deg
```

- `WiFi: ip=…` — se isso falhar, as credenciais ou a banda estão erradas
- a **linha wakenet** deve dizer `Jarvis` e `0.627_0.632`; se disser `Hi ESP`, a etapa de cópia do modelo foi pulada
- `ESP_SR: ok` — se travar ou reiniciar aqui, o modelo está ausente do diretório de build
- `DOA … deg` continua se repetindo cerca de dez vezes por segundo; isso é o anel rastreando vozes, não um erro. O log é verboso por projeto

Diga **“Jarvis”** uma vez. O anel pisca, o sino toca e o log imprime `*** "HI JARVIS" #1 ***`. Diga um comando imediatamente depois e a placa responde com a frase que ela correspondeu:

```text
[197851 ms] *** "HI JARVIS" #1 ***
[198520 ms] chime done
[198671 ms] command mode open
[198997 ms] listening for a command (6.5 s)
[200773 ms] raw id=4 phrase=4 -> "tell me a joke" -> cmd 4
[200774 ms] -> PC  JARVIS 0001 4
     <-     ACK 1
```

Se o seu log disser `HI WALLE` em vez disso, você pulou a etapa de branding — o despertar e os comandos estão corretos de qualquer forma.

| sintoma | causa | correção |
| --- | --- | --- |
| `Sketch too big` | esquema de partição errado | use `PartitionScheme=esp_sr_16` |
| sem saída serial | `CDCOnBoot` não definido | adicione `CDCOnBoot=cdc`, regrave |
| `ESP_SR: FAILED` ou loop de reboot | modelo ausente de `build\wake_demo` | copie `srmodels_jarvis.bin` novamente |
| desperta com “Hi ESP” | pacote padrão gravado | repita a etapa de cópia, verifique a linha wakenet |
| wake dispara, nada acontece no PC | frases ou ids diferentes dos nove acima | corrija `sr_commands[]` e `brain.py` juntos |
| `no ACK for seq …` no log da placa | octetos do PC ou firewall | corrija todas as três chamadas `IPAddress(...)`, permita UDP 9001 |
| HUD ativo mas o log de eventos nunca atualiza | um `brain.py` mais antigo ainda possui 9001/8080 | pare todo processo python, inicie um único brain |

## Abrir a interface

Instale o lado Python e então execute o launcher:

```powershell
py -3.11 -m pip install numpy soundfile scipy
cd reSpeaker_44_wakeword\pc_brain
.\start_demo.bat
```

`start_demo.bat` inicia o cérebro e abre o Chrome (Edge como fallback) em modo kiosk em **http://localhost:8080** com autoplay permitido, então o primeiro som não precisa de clique. Rota manual: `python brain.py`, depois abra a mesma URL. **Alt+F4** sai do modo kiosk; feche a janela minimizada “JARVIS brain” para parar o UDP.

:::caution Apenas um brain pode rodar por vez
O launcher não procura por uma instância existente. Um `brain.py` deixado de uma execução anterior mantém o UDP 9001 e o TCP 8080, a nova cópia pega qualquer porta que ainda esteja livre, e o HUD continua silenciosamente servindo o *processo antigo* — a página parece ativa, o log de eventos nunca atualiza e os pacotes vão para o brain errado. Antes de uma demo, feche a janela anterior “JARVIS brain” ou:

```powershell
Get-Process python | Stop-Process -Force
```
:::

{/* TODO(image): adicionar uma captura de tela do HUD aqui — busto do Homem de Ferro, reator arc, nove botões de comando, log de eventos. */}

Na tela:

- o **busto wireframe do Homem de Ferro** com um reator arc que pulsa com a música
- **à esquerda**: nove botões de comando rotulados com a frase exata a dizer; as teclas **1–9** enviam os mesmos ids, que é como você testa sem falar
- **canto superior esquerdo**: status e a frase que a placa ouviu; **canto superior direito**: `LINKED` / `NO LINK`, o endereço do PC e um relógio
- **canto inferior direito**: log de eventos, do mais recente para o mais antigo; **centro inferior**: cartões para clima, tarefas, piadas e respostas do modelo

Sem placa em mãos? O cérebro pode ser acionado diretamente:

```powershell
python sim.py 1        # play music
python sim.py 4        # tell a joke
python sim.py demo     # 1 -> 2 -> 4 -> 5 with pauses
```

`config.json` contém as configurações do local: `esp_ip` (último endereço conhecido da placa, atualizado automaticamente), `audio_sink` (`speaker` transmite para o robô, `pc` reproduz localmente), `default_track`, `weather_lat` / `weather_lon` e `openrouter_key` — deixe a chave vazia e as piadas/respostas usarão frases prontas. Prefira a variável de ambiente `OPENROUTER_API_KEY` em vez de escrevê-la no arquivo.

A lista de modelos fornecida é toda de rotas `:free`, e elas são muito disputadas: `HTTP 429 … rate-limited upstream` no log é normal, não é uma chave inválida. O cérebro percorre `openrouter_model` → `openrouter_fallbacks` → uma frase pronta, então **“perguntar ao modelo” pode levar de 15 a 25 s** antes de responder, e às vezes responde a partir da lista offline. Verifique a própria chave com `curl` em `https://openrouter.ai/api/v1/key` em vez de observar uma única resposta.

:::note Respostas faladas precisam de Windows
O cérebro sintetiza fala com o **System.Speech** do Windows e transmite o WAV para o reSpeaker. No macOS ou Linux, a palavra de ativação, os comandos, os cartões, o log e a música ainda funcionam — mas o JARVIS não falará.
:::

## Limites

- **Apenas inglês** — o modelo MultiNet nesta compilação é `mn7_en`.
- **16 kHz em todos os lugares** — cerca de uma faixa de áudio de 8 kHz; adequado para fala e sinais, não para hi-fi.
- **Um fluxo por vez** — um novo som interrompe o anterior.
- **WiFi é necessário na inicialização** para qualquer coisa que chegue ao PC; a placa ainda acorda e pisca offline, mas nenhuma ação chega.
- **O modelo de ativação é treinado para TTS** e é mais sensível à pronúncia do que “Hi ESP”. Recalibre os limiares para um ambiente barulhento.

## Recursos

- Projeto (firmware, cérebro e HUD): [KasunThushara/reSpeaker_44_wakeword](https://github.com/KasunThushara/reSpeaker_44_wakeword)
- Introdução à placa e atualização de firmware: [reSpeaker XVF3800 44mm](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/)
- Imagens de firmware XMOS: [reSpeaker_XVF3800_4MIC_44mm](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- Configuração do XIAO: [Introdução ao XIAO ESP32-S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/)
- Modelos ESP-SR e API: [espressif/esp-sr](https://github.com/espressif/esp-sr)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
