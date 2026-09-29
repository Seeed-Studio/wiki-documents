---
description: Controle de acesso facial para uma porta sem atendimento — quais hardwares você precisa, como implantá-los, quais interfaces ele expõe e tempos medidos de ativação da biblioteca facial, abertura da porta e rejeições
title: 'Acesso Facial para Loja Não Tripulada: Hardware, Distribuição da Biblioteca Facial e Limites Medidos'
keywords:
  - controle de acesso facial para loja não tripulada
  - acesso à porta por reconhecimento facial
  - prova de vida passiva anti-spoofing
  - distribuição versionada de biblioteca facial
  - destravamento por relé MQTT
  - log de auditoria encadeado por hash
  - relé GPIO da reCamera Pro
  - nó de relé MQTT XIAO ESP32-S3
  - licenciamento InsightFace buffalo_l
  - projeto de referência de controle de acesso
image: https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg
slug: /solutions/unmanned-store-face-access
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/solutions/unmanned-store-face-access/
generated_from: sensecraft-solutions@e1864ef
---

:::caution[Aviso de uso]
Não é um produto de segurança certificado nem um sistema de segurança de vida. Os pesos faciais de referência (InsightFace `buffalo_l`) são licenciados apenas para pesquisa não comercial; uma implantação comercial precisa de um modelo com licença comercial.
:::

## O que esta solução faz

Uma câmera em uma porta atrás da qual não há ninguém reconhece um rosto, exige que uma verificação de prova de vida passiva seja aprovada, verifica a pessoa em relação à biblioteca facial atual, ao cronograma e à lista de bloqueio e — somente se tudo isso for atendido — aciona um pulso em um relé que comuta uma fechadura alimentada por sua própria fonte de 12/24 V. Cada decisão, permitida e negada, é publicada em MQTT e anexada a um log de auditoria encadeado por hash que o console pode verificar.

Ela se encaixa na entrada de funcionários, no estoque ou na porta dos fundos de uma loja não tripulada ou parcialmente atendida; em um escritório compartilhado onde a escala muda semanalmente e o cadastro precisa ser autoatendido; em uma sala de equipamentos onde o registro de quem passou importa mais do que a vazão; e em um local que já tenha câmeras RTSP na porta e não queira substituí-las.

- Seleção e implantação: [página do projeto de referência](https://www.seeed.cc/solutions/reference-designs/unmanned_store_access)
- Repositório upstream: não publicado; o código está em um repositório interno.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Abre offline (três de cinco predefinições)</h3>
                <p>Reconhecimento, prova de vida, decisão e destravamento acontecem todos na porta. Um dispositivo que perde a nuvem continua abrindo com a última biblioteca facial que carregou com sucesso. Nas duas predefinições com relé MQTT, o sinal de destravamento atravessa a rede até o relé.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Biblioteca facial distribuída e verificada automaticamente</h3>
                <p>Os dispositivos verificam se há novas versões, fazem download em blocos, checam o SHA-256 de cada arquivo e a assinatura do manifesto e então alternam de forma atômica. Qualquer falha mantém a versão anterior. Ativação medida em uma reCamera padrão: p50 491,6 ms.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Rollback não pode restaurar uma pessoa excluída</h3>
                <p>Remover alguém produz uma nova versão sem essa pessoa e grava uma barreira de exclusão. Um rollback para qualquer versão que ainda contenha essa pessoa é recusado pelo nome.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Cada decisão é auditada</h3>
                <p>Decisões permitidas e negadas vão tanto para o MQTT quanto para um log de auditoria encadeado por hash. Editar qualquer registro passado quebra a cadeia, e a verificação de cadeia do console relata isso.</p>
            </div>
        </li>
    </ul>
</div>

### O que o dispositivo na porta vê

Reconhecimento em uma reCamera Pro: a caixa do rosto carrega o ID da pessoa correspondente e a decisão para aquele quadro. Sem ninguém à sua frente, a visualização é apenas o enquadramento.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg" alt="Visão de aplicação da reCamera Pro: caixa do rosto e a decisão para aquele quadro"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-no-person-5ee3d054.jpg" alt="A mesma montagem sem ninguém presente, usada para verificar enquadramento e exposição"/>
</div>

## De que hardware você precisa

Três funções de dispositivo na porta, mais um host em nuvem ou on-prem.

**① A câmera na porta.** Pode ser o próprio sensor do dispositivo (reCamera Pro ou reCamera padrão) ou uma câmera RTSP existente alimentando um host separado. Monte-a aproximadamente na altura do rosto, enquadrada de forma que um rosto preencha uma parte utilizável do quadro na distância em que as pessoas realmente param. Portas contra a luz e reflexos em vidro são causas comuns de falha de reconhecimento.

**② O elemento que reconhece e decide.**

| Host de reconhecimento | Onde o reconhecimento roda | Forma de instalação |
|---|---|---|
| reCamera Pro (RV1126B) | Na câmera, ao lado de seu aplicativo de reconhecimento facial existente | Instalado na câmera, sem container (Buildroot, sem Docker) |
| reCamera padrão (SG2002 / CV181x) | Na câmera, em um único processo nativo — detecção, embedding, prova de vida e correspondência | Um pequeno daemon copiado para a câmera, sem container |
| reComputer Industrial J20 | Em containers, a partir de um stream RTSP existente | Containers via SSH |
| reComputer J30 / J40 / R2000 | Em containers, a partir de um stream RTSP existente | Containers via SSH |

**③ O relé.** A fechadura deve ficar atrás de um relé ou contato seco, em sua própria fonte de 12/24 V, separada da placa de computação. Uma fechadura consome de 300 mA a 1 A; um pino GPIO e uma saída digital opto-isolada conduzem miliamperes. Quatro configurações — `active_high`, `pulse_ms`, `relay_contact` e `fail_mode` — são definidas por instalação e não têm valores padrão: uma fechadura magnética fail-safe ligada através do contato normalmente aberto fica permanentemente aberta, e nada mostra isso até que a porta seja testada.

**④ O host em nuvem ou on-prem.** Qualquer máquina Linux amd64 ou arm64 com Docker; sem GPU. Ela executa o serviço de biblioteca facial, o console de gerenciamento e o broker MQTT. Ela deve ser alcançável por todos os dispositivos de porta, e seu relógio deve estar correto: dispositivos sem RTC obtêm a correção de horário do cabeçalho HTTP `Date`.

## Como implantar no local

Duas partes, e a ordem importa.

### Um: faça a fiação da porta — LED, depois relé, depois fechadura

Confirme polaridade e largura de pulso em um LED. Confirme que o contato aciona no relé. Só então coloque uma fechadura nele. Uma fechadura magnética fail-safe passa por COM e NC; uma fechadura fail-secure passa por COM e NO. Inverter isso deixa a porta permanentemente aberta, por isso `relay_contact` não tem valor padrão.

**Verifique se o pino GPIO está livre.** Uma reCamera Pro pesquisada tinha o `gpio131` já exportado e acionado por outro aplicativo. O atuador se recusa a iniciar em um pino cujo estado atual discorde do estado inativo configurado e não assumirá o controle de um pino a menos que seja instruído explicitamente. Na baseboard reCamera 2002 HQ PoE, o conector de 6 pinos carrega três linhas de IO — D1 = sysfs 490 (a única que não é multiplexada), CLK = 487, SMD = 488 — mas a polaridade de nível do conector e a corrente de acionamento disponível não estão na documentação do fornecedor, portanto não conecte uma fechadura ali antes que um multímetro e um LED as tenham confirmado. No J20, a especificação de projeto coloca DO1–DO4 em sysfs 463/464/465/462; se a imagem de destino os expõe dessa forma ou via `Jetson.GPIO` ainda não foi confirmado em hardware.

### Dois: suba primeiro o lado em nuvem, depois o lado do dispositivo

Etapas completas por predefinição estão na página do projeto de referência, onde responder a algumas perguntas sobre o local também fornece o pacote de aplicação correspondente para download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

O lado em nuvem é o serviço de biblioteca facial, o console e um broker, a partir dos arquivos compose em `assets/cloud/`. O console se recusa a iniciar sem um token configurado. **Um token compartilhado sobre HTTP simples não é autenticação**; termine o TLS em um proxy reverso à sua frente. A configuração do broker incluída é texto simples anônimo e serve apenas para testes; produção precisa de TLS, identidades por dispositivo e ACLs de tópico, nada disso está na configuração incluída.

O lado do dispositivo difere por predefinição: containers via SSH nos presets reComputer e uma cópia de um daemon em ambas as reCameras.

Quando o lado em nuvem estiver ativo, verifique na página de dispositivos do console se o dispositivo da porta está online, enviando pulsos de vida e na versão esperada da biblioteca de rostos:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-devices-en-f978d0b3.png" alt="Página de dispositivo do console: estado online, pulso de vida, versão atual da biblioteca de rostos e integridade do atuador"/>
</div>

Em seguida, registre as pessoas que podem passar na página de pessoas. O registro gera uma nova versão da biblioteca de rostos, que o dispositivo obtém na próxima consulta.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-persons-en-8c8db34d.png" alt="Página de pessoas do console: pessoas registradas e o ponto de entrada para registro"/>
</div>

Abaixo está uma passagem completa: registrar uma pessoa, publicar a versão, o dispositivo busca e alterna, a porta a reconhece.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-flow-7a02b8a9.gif" alt="Do registro até o dispositivo buscar a nova biblioteca de rostos e reconhecer a pessoa na porta"/>
</div>

Antes de instalar uma fechadura, confirme na placa base PoE que a linha GPIO pode realmente ser acionada:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/poe-activation-2de5d904.png" alt="Inicialização do atuador em uma reCamera 2002 HQ PoE, reivindicando a linha GPIO D1"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/gpio-relay-check-ad22020d.png" alt="Leitura de nível na mesma linha (sysfs 490) após uma decisão de permissão"/>
</div>

<!-- TODO imagem: a própria porta (câmera, relé e fechadura conforme instalados) — precisa de sessão de fotos em campo -->

Uma URL de biblioteca em texto simples `http://` é permitida em uma LAN, mas somente com uma assinatura HMAC-SHA256 sobre o manifesto; sem uma chave o dispositivo se recusa a iniciar. A assinatura protege contra adulteração em trânsito; qualquer chave de dispositivo vazada pode ser usada para forjar uma biblioteca.

## Quais interfaces ele expõe

A interface é composta por cinco tópicos MQTT e duas superfícies HTTP.

| Tópico / endpoint | Payload | Retido |
|---|---|---|
| `access/v1/events` (MQTT 8883, QoS 1) | Um JSON por decisão — veja abaixo | Não |
| `access/v1/status/{device_id}` | Pulso de vida a cada 30 segundos: integridade do atuador, versão da biblioteca e tag do modelo, se o liveness está carregado | Apenas o último testamento |
| `access/v1/commands/{door_id}` | `unlock`, `hold_open`, `lock` | **Nunca** |
| `access/v1/receipts/{command_id}` | O estado final de um comando | Não |
| `access/v1/relay/{relay_id}/set` e `/state` | Somente presets de relé via MQTT; `state` relata o contato físico e não reflete se a porta está aberta | `set` não, `state` sim |
| `GET /v1/facedb/current`, `GET /v1/facedb/{version}` (HTTP 8080) | Toda a superfície de distribuição da biblioteca. `Range` para downloads em partes e retomáveis | — |
| `/api/events`, `/api/devices`, `/api/persons`, `/api/audit/verify` (HTTP 8088) | API do console atrás do portão de token de três papéis. Nenhuma leitura anônima | — |

Os três papéis de token do console: viewer lê, operator emite `unlock` / `hold_open` / `lock`, admin registra, exclui e faz rollback. `/api/audit/verify` verifica a cadeia de hash do log de auditoria: o log é NDJSON somente de acréscimo, cada registro carrega o hash do registro anterior, e qualquer alteração em um registro histórico é relatada.

### O payload do evento

```json
{
  "schema": "access-event/v1",
  "event_id": "6f1a2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
  "time": "2026-09-06T03:20:11Z",
  "device_id": "door-front-01",
  "person_id": "p_alice",
  "anonymous_id": null,
  "score": 0.7412,
  "threshold": 0.62,
  "liveness": { "passed": true, "score": 0.958 },
  "decision": { "allow": true, "reason": "allowed" },
  "door_action": "pulse",
  "actuator_id": "door-front",
  "facedb_version": 3,
  "model_sha": "3a7f...",
  "clock": { "valid": true, "reason": null, "offset_ms": 12 }
}
```

Três campos para observar ao integrar. **`facedb_version` é `null` antes da primeira sincronização bem-sucedida**, o que significa que o dispositivo ainda não tem biblioteca (não é o mesmo que versão 0); o motivo da negação é relatado separadamente como `no_facedb`. **`threshold` é o valor em vigor para aquela decisão**, então uma mudança de limiar aparece no fluxo de eventos. **`clock.valid`** indica se o carimbo de data e hora corrigido pode ser confiável; os dispositivos nunca ajustam seu relógio de sistema, eles apenas carregam um deslocamento. Um resultado de liveness `null` significa que a verificação não foi executada; ele é tratado como falha e relatado como `liveness_unknown`.

### O portão de comandos

Um comando deve carregar um conjunto de campos exato, um UUIDv4 `command_id`, um `issued_at` RFC3339 com fuso horário e um TTL dentro dos limites, e é verificado contra uma tabela de replay por identidade. Um comando reenviado **não abre a porta uma segunda vez**; o dispositivo retorna o recibo original para o chamador conciliar. Um comando expirado retorna como `TTL_EXPIRED`. Uma identidade anônima é recusada.

Os tópicos `set` e de comando nunca são retidos. Um unlock retido é reproduzido a cada reconexão, então a porta se abriria sozinha após uma queda de energia.

### Distribuição da biblioteca de rostos

O dispositivo consulta `current`, compara versões e busca arquivos somente quando a versão mudou, com fragmentação e retomada via `Range` padrão. Cada arquivo é verificado com SHA-256 e a assinatura do manifesto é verificada antes de uma troca atômica; uma falha em qualquer etapa mantém a versão antiga. Remover uma pessoa produz uma nova versão sem ela mais uma barreira de exclusão, e qualquer rollback posterior para uma versão que ainda a contenha é recusado pelo nome.

O manifesto de cada versão carrega cinco campos de licença — `license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256` — para que os termos de licença viajem com o artefato.

## Desempenho e dados medidos

### Latência de ativação da biblioteca de rostos

O tempo desde a publicação de uma nova versão da biblioteca até o dispositivo estar rodando nela.

| Plataforma | Ativação completa | Condições |
|---|---|---|
| reCamera padrão (SG2002 / CV181x riscv64, firmware 0.2.2) | **p50 491,6 ms, p95 507,8 ms** (n=20) | USB-RNDIS, 2 pessoas, biblioteca de 16,5 KB. Viagem de ida e volta `op:reload` p50 100,0 ms (n=25) |
| reCamera Pro (RV1126B, Buildroot 2023.02.6) | 62,2 ms (v1), 45,4 ms (v2); rodada no-op atualizada 6,2 ms | Ethernet, 1–2 pessoas, biblioteca abaixo de 20 KB |

**Escalonamento com o tamanho da biblioteca.** Dois pontos de escala na reCamera padrão, uma execução cada: 402 pessoas / 2,86 MB em 9 801,7 ms, e 1502 pessoas / 10,66 MB em 22 278,7 ms. O tempo de ativação cresce com o tamanho da biblioteca; use essas duas medidas para planejar a primeira sincronização de uma biblioteca grande.

Reprodução: no repositório upstream `unmanned-store-access`, `evaluation/runs/2026-09-06-recamera-std-p3-r2/results.md` e `evaluation/runs/2026-09-07-recamera-pro-p1/results.md`.

### Tempo de abertura da porta (reCamera Pro, vídeo reproduzido)

Do primeiro quadro reproduzido entregue ao app até o pino GPIO ser acionado para seu nível ativo, passando por captura, detecção, liveness, correspondência, política e escrita do pino. p50, p95 entre parênteses, 12 execuções por ponto (com n=12 leia a coluna p95 como um limite superior).

| Câmera / host | 10 pessoas | 1 000 pessoas |
|---|---|---|
| reCamera Pro (RV1126B), f1-access 0.1.1 | **0,62 s** (0,67) | **0,66 s** (0,68) |

Condições: quadros 1280x720 reproduzidos a 12,5 fps, liveness ligado, rosto mínimo 40 px, limiar de correspondência 0,40; a sonda é um clipe de vídeo padrão reproduzido pelo próprio pipeline do dispositivo, não uma pessoa ao vivo. O pino foi acionado em 24 de 24 execuções. A sustentação de contato de 1 500 ms após a escrita do pino não é contada; nenhum relé e nenhuma fechadura estão conectados, portanto esses valores não incluem resposta mecânica.

### Rejeições (reCamera Pro, vídeo reproduzido)

20 execuções por linha, mesmo dispositivo e app.

| Execução | Biblioteca de rostos | Pino acionado |
|---|---|---|
| Pessoa não registrada | 9 identidades sintéticas | 0 / 20 |
| Pessoa não registrada | 999 identidades sintéticas | 0 / 20 |
| Reprodução em tela de telefone, clipe A | 10, template construído a partir do clipe de ataque | 0 / 20 |
| Reprodução em tela de telefone, clipe B | 10, template construído a partir do clipe de ataque | 0 / 20 |
| Imagem estática de tela | 10, template construído a partir do clipe de ataque | 0 / 20 |

Condições: nas duas linhas de pessoa não registrada a biblioteca contém apenas vetores sintéticos, então a pessoa no clipe não está registrada; nas três linhas de tela o template é construído a partir do próprio clipe de ataque, então o rosto na biblioteca e o rosto na tela são da mesma pessoa; a linha de tela estática é um quadro de exibição mantido parado.

### Outras medições

| Métrica | Valor | Condições |
|---|---|---|
| Evento de reconhecimento até leitura de retorno do pino GPIO | p50 1,448 ms, p95 2,709 ms (n=22) | reCamera Pro, eventos de reconhecimento sintéticos injetados, leitura de retorno via sysfs, nenhum circuito externo; um limite superior em um elo do caminho de software, ação da porta não incluída |
| Serviço de reconhecimento, um quadro: caixa de rosto + veredito de liveness + embedding 512-d | 24–26 ms de tempo de servidor, 30,3 ms p50 sobre HTTP (12 requisições) | reComputer J40 Series (Orin NX 16 GB, JetPack 6), um quadro de um stream RTSP 1280x720 |
| Primeira inicialização do serviço de reconhecimento | Engines TensorRT construídos no equipamento em 61 s + 62 s + 73 s; endpoint de saúde responde 214 s após o início | reComputer J40 Series (Orin NX 16 GB, JetPack 6) |

A leitura de retorno de `gpio130` na reCamera Pro é de um dos pinos UART4 M0 da porta de expansão reconfigurado como GPIO — a família de 3,3 V, não uma das duas saídas nativas de 12–21 V da placa.

Reprodução (leitura de retorno GPIO): `evaluation/runs/2026-09-07-recamera-pro-p1/results.md`.

### Tempos de execução e parâmetros principais

| Host de reconhecimento | Modelo de reconhecimento e onde ele é executado |
|---|---|
| reCamera Pro | O próprio modelo de reconhecimento do dispositivo, `rv1126b:scrfd500m+mbf512@fp16` |
| reCamera padrão | Um processo nativo no dispositivo faz detecção, embedding, liveness e correspondência |
| Presets reComputer | Um serviço de reconhecimento em um contêiner; engines TensorRT são construídos no equipamento na primeira inicialização |

A verificação de vivacidade é aplicada: se o serviço de reconhecimento não informar que a vivacidade foi carregada, o adaptador se recusa a executar.

Parâmetros que alteram o comportamento de implantação:

- Intervalo de sondagem da biblioteca de faces (padrão 30 s) — o dispositivo verifica novas versões nesse intervalo, portanto a latência de ativação da biblioteca depende dele.
- Limite de correspondência — o limite fornecido é um valor inicial; defina-o varrendo pares positivos e negativos na câmera instalada. O `threshold` do evento informa o valor em vigor para cada decisão.
- As quatro configurações de relé `active_high`, `pulse_ms`, `relay_contact`, `fail_mode` — sem padrões; configuradas por instalação.

### Degradações conhecidas

- **Cadastro para reCamera Pro.** O `buffalo_l` usado para cadastro em nuvem e o próprio `rv1126b:scrfd500m+mbf512@fp16` do dispositivo estão em espaços de modelo cuja similaridade cosseno é aproximadamente zero, portanto o fluxo de cadastro incluído ainda não consegue produzir uma biblioteca utilizável em produção para este dispositivo. A reCamera padrão calcula embeddings no dispositivo e não é afetada.
- **Vivacidade no backend RKNN não está implementada upstream.** Presets em execução no RKNN não conseguem atender a "vivacidade aplicada".
- **Alterar o backbone de face implica reconstruir todas as versões da biblioteca de faces.** Embeddings não são comparáveis entre modelos, portanto todas as versões antigas se tornam inutilizáveis; a proteção `model_tag` no manifesto impede que um dispositivo carregue uma delas por engano.

### Próximas etapas

- Um teste de loopback de contato com um Grove Relay na reCamera Pro (20 ciclos), registrando a latência de fechamento do contato e o tempo de retenção, antes que um controlador de porta seja conectado.

## Fontes de dados e recursos

**Licenciamento.** O código no pacote da solução e no repositório upstream é Apache-2.0. **Os pesos do modelo não são.** A detecção de faces e o embedding usam o `buffalo_l` do InsightFace; a própria declaração do InsightFace é que o código é MIT sem limitação de uso comercial, mas que os dados de treinamento — e os modelos treinados com esses dados — estão disponíveis apenas para fins de pesquisa não comercial. `buffalo_l` é um desses modelos: `license_id: non-commercial`, `use_scope: non-commercial`, `redistributable: false`. O pacote da solução não inclui os pesos, e uma implantação comercial deve substituir o backbone de face por um com licença comercial.

O modelo de vivacidade passiva, Silent-Face-Anti-Spoofing da MiniVision, é Apache-2.0: `use_scope: commercial`, redistribuível, usado sem modificações.

- Termos de licença: `gallery/ATTRIBUTION.md` no pacote da solução, e a seção de licenciamento da descrição do pacote.
- Lacuna de espaço de modelo de registro: upstream `docs/user-guide.md` §5.1.
- Os quadros de reconhecimento da porta vêm de uma reCamera Pro; a pessoa neles é um membro do projeto que fez a captura.
- As capturas de tela do console são **dados de demonstração sintéticos**; as pessoas, pontuações e eventos não são resultados de campo.
