---
description: Controle de acesso facial para uma porta sem atendimento — o hardware que cada opção de fiação precisa, como a biblioteca facial versionada é distribuída e verificada, os contratos MQTT e HTTP, e exatamente quais limites foram medidos em hardware e quais não foram
title: 'Acesso Facial para Loja Não Tripulada: Hardware, Distribuição da Biblioteca Facial e Limites Medidos'
keywords:
  - controle de acesso facial para loja não tripulada
  - acesso à porta por reconhecimento facial
  - prova de vida passiva anti-spoofing
  - distribuição de biblioteca facial versionada
  - desbloqueio de relé via MQTT
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/unmanned-store-face-access/
generated_from: sensecraft-solutions@e1864ef
---

:::caution[Aviso de uso]
Este **não é um produto de segurança certificado e não é um sistema de segurança de vida**. A precisão do reconhecimento e a rejeição de spoofing de prova de vida dependem do modelo facial que você implantar e das suas próprias imagens de cadastro — meça-os no local. Os pesos faciais de referência (InsightFace `buffalo_l`) são licenciados apenas para pesquisa não comercial. Trate isto como uma implementação sobre a qual construir e medir você mesmo, não como um produto que você possa instalar e no qual possa confiar.

:::

## O que esta solução faz

Uma câmera em uma porta atrás da qual não há ninguém reconhece um rosto, exige que uma verificação de prova de vida passiva seja aprovada, verifica a pessoa em relação à biblioteca facial atual, ao cronograma
e à lista de bloqueio e — somente se tudo isso for verdadeiro — aciona um pulso em um relé que comuta uma fechadura
alimentada por sua própria fonte de 12/24 V. Cada decisão, permitida e negada, é publicada
em MQTT e anexada a um log de auditoria encadeado por hash que o console pode verificar.

Ela se encaixa na entrada de funcionários, sala de estoque ou porta dos fundos de uma loja não tripulada ou parcialmente atendida;
em um escritório compartilhado onde a escala muda semanalmente e o cadastro precisa ser autoatendido; em uma
sala de equipamentos onde o registro de quem passou importa mais do que a vazão; e em um
local que já tenha câmeras RTSP na porta e não queira substituí-las.

- Seleção e implantação: [página de projeto de referência](https://www.seeed.cc/solutions/reference-designs/unmanned_store_access)
- Repositório upstream: não publicado. O pacote não traz `intro.links.github`; o código vive em um repositório interno no momento do empacotamento.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
    </div>
        <div class="info-content">
            <h3>O desbloqueio fica fora da rede em três dos cinco presets</h3>
                <p>Reconhecimento, prova de vida e decisão acontecem todos na porta. Um dispositivo que perde a nuvem continua abrindo com a última biblioteca facial que carregou com sucesso. Os dois presets de relé via MQTT fazem explicitamente a escolha oposta.</p>
            </div>
            </li>
                <li class="info-item">
                <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
        </div>
        <div class="info-content">
            <h3>A biblioteca facial é versionada, puxada e verificada, nunca enviada por push</h3>
                <p>Polling, download em blocos, SHA-256 por arquivo, uma assinatura sobre o manifesto e então uma troca atômica. Qualquer falha deixa a versão anterior no lugar. Ativação medida em uma reCamera padrão: p50 491,6 ms.</p>
            </div>
            </li>
                <li class="info-item">
                <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
        </div>
        <div class="info-content">
            <h3>Uma pessoa excluída permanece excluída</h3>
                <p>Remover alguém produz uma nova versão sem essa pessoa e grava uma barreira de exclusão. Um rollback para qualquer versão que ainda contenha essa pessoa é recusado pelo nome.</p>
            </div>
            </li>
                <li class="info-item">
                <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
        </div>
        <div class="info-content">
            <h3>Uma de sete métricas de limite foi medida</h3>
                <p>A latência de ativação da biblioteca facial tem números em dois dispositivos. FAR/FRR de reconhecimento, rejeição de spoofing de prova de vida, ambas as latências de desbloqueio, resistência offline e um teste de imersão de 72 horas ainda estão pendentes, cada um com um motivo declarado.</p>
            </div>
            </li>
                </ul>
                </div>

        ### O que o dispositivo na porta vê

Reconhecimento em uma reCamera Pro: a caixa do rosto carrega o id da pessoa correspondente e a decisão para aquele quadro. Sem ninguém na frente dela, a visualização é apenas o enquadramento.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg" alt="Visão de aplicação da reCamera Pro: caixa do rosto e a decisão para aquele quadro"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-no-person-5ee3d054.jpg" alt="A mesma montagem sem ninguém presente, usada para verificar enquadramento e exposição"/>
</div>

Ambos os quadros vêm da sessão de laboratório com a reCamera Pro de 2026-09-07; a pessoa neles é um membro do projeto que fez a captura.


## De que hardware você precisa

Três papéis de dispositivo mais um host, e uma regra que não se dobra.

**① A câmera na porta.** Ou o próprio sensor do dispositivo (reCamera Pro ou reCamera
padrão) ou uma câmera RTSP existente alimentando um host separado. Monte-a aproximadamente na altura do rosto, enquadrada de forma que um rosto preencha uma parte utilizável do quadro
na distância em que as pessoas realmente param. Portas contra a luz e reflexos em vidro são os modos de falha usuais — verifique a posição de montagem em relação a ambos.

**② A coisa que reconhece e decide.**

| Host de reconhecimento | Onde o reconhecimento roda | Forma de instalação | Estado do hardware |
|---|---|---|---|
| reCamera Pro (RV1126B) | Na câmera, ao lado do seu aplicativo de reconhecimento facial existente | Um conjunto plano de módulos Python da biblioteca padrão sob `/userdata/f1-access`. Buildroot: sem Docker, sem dpkg, sem systemd | Caminho da biblioteca e leitura de retorno de GPIO de evento sintético exercitados |
| reCamera padrão (SG2002 / CV181x) | Na câmera, em um único processo nativo — detecção, embedding, prova de vida de textura de duas cabeças com fusão de piscar, correspondência | Um pequeno daemon da biblioteca padrão, copiado manualmente. Sem contêiner | Caminho da biblioteca exercitado em duas execuções de sondagem |

**③ O relé, e esta é a regra.** A fechadura está sempre atrás de um relé ou contato seco,
sempre em sua própria fonte de 12/24 V, separada da placa de computação. Uma fechadura consome de 300 mA
a 1 A; um pino GPIO e uma saída digital opto-isolada conduzem miliamperes. Quatro configurações —
`active_high`, `pulse_ms`, `relay_contact` e `fail_mode` — são definidas por
instalação e deliberadamente não têm valores padrão, porque uma fechadura magnética fail-safe ligada
através do contato normalmente aberto fica permanentemente aberta e parece uma
instalação funcionando até que alguém a teste.

**④ A nuvem ou host on-premises.** Qualquer máquina Linux amd64 ou arm64 com Docker; sem GPU. Ela executa
o serviço de biblioteca facial, o console de gerenciamento e o broker MQTT. Ela deve ser alcançável
por todos os dispositivos de porta, e seu relógio deve estar correto: dispositivos sem RTC obtêm sua correção de horário
do cabeçalho HTTP `Date`. Nenhuma das imagens de contêiner foi enviada para um
registro ainda — os arquivos de compose nomeiam as tags que elas terão e dizem isso no topo.

## Como implantar no local

Duas partes, e a ordem importa.

### Um: faça a fiação da porta — LED, depois relé, depois fechadura

Confirme a polaridade e a largura de pulso em um LED. Confirme que o contato aciona no relé. Só
então coloque uma fechadura nele. Uma fechadura magnética fail-safe passa por COM e NC; uma
fechadura elétrica fail-secure passa por COM e NO. Inverter isso deixa a porta permanentemente aberta, o que
é o motivo de `relay_contact` não ter valor padrão.

**Não presuma que um pino GPIO está livre.** A reCamera Pro inspecionada tinha o `gpio131` já
exportado e acionado por outro aplicativo. O atuador se recusa a iniciar em um pino cujo
estado atual discorda do estado inativo configurado e não assumirá o controle de um pino
a menos que seja instruído explicitamente. Na baseboard reCamera 2002 HQ PoE o conector de 6 pinos carrega
três linhas de IO — D1 = sysfs 490 (a única que não é multiplexada), CLK = 487, SMD = 488 — mas
a polaridade de nível do conector e a corrente de acionamento disponível não estão na documentação do fornecedor,
portanto nenhuma fechadura pode ser ligada ali antes que um multímetro e um LED as tenham confirmado.
No J20 a especificação de projeto coloca DO1–DO4 em sysfs 463/464/465/462; se a imagem de destino
os expõe dessa forma ou através de `Jetson.GPIO` ainda precisa ser confirmado em hardware.

### Dois: suba primeiro o lado da nuvem, depois o lado do dispositivo

Etapas completas por preset estão na página de projeto de referência, onde responder a algumas perguntas sobre o local também fornece o pacote de aplicativo correspondente para download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />

O lado em nuvem é o serviço de biblioteca de rostos, o console e um broker, a partir dos arquivos compose em `assets/cloud/`. O console se recusa a iniciar sem um token configurado, e seu gate de token compartilhado tem três funções: viewer lê, operator emite `unlock` / `hold_open` / `lock`, admin faz cadastro, exclusões e rollback. **Um token compartilhado sobre HTTP simples não é autenticação** — termine o TLS na frente dele. A configuração de broker incluída é texto simples anônimo e é para bancada; o projeto prevê TLS, identidades por dispositivo e ACLs de tópico, e nenhum dos três está na configuração incluída.
files in `assets/cloud/`. The console refuses to start with no token configured, and its
shared-token gate has three roles: viewer reads, operator issues `unlock` / `hold_open` /
`lock`, admin enrols, deletes and rolls back. **A shared token over plain HTTP is not
authentication** — terminate TLS in front of it. The bundled broker configuration is
anonymous plaintext and is for a bench; the design calls for TLS, per-device identities
and topic ACLs, and none of the three is in the bundled configuration.

O lado do dispositivo difere por preset — contêineres via SSH nos presets de reComputer, uma cópia manual de um daemon em ambas as reCameras. As etapas completas por preset estão no guia de implantação na página do design de referência.
manual copy of a daemon on both reCameras. The full per-preset steps are in the
deployment guide on the reference design page.

Quando o lado em nuvem estiver ativo, verifique na página de dispositivos do console se o dispositivo da porta está online, enviando heartbeat e na versão esperada da biblioteca de rostos:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-devices-en-f978d0b3.png" alt="Página de dispositivos do console: estado online, heartbeat, versão atual da biblioteca de rostos e integridade do atuador"/>
</div>

Em seguida, cadastre as pessoas que podem passar na página de pessoas. O cadastro gera uma nova versão da biblioteca de rostos, que o dispositivo obtém na próxima sondagem.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-persons-en-8c8db34d.png" alt="Página de pessoas do console: pessoas cadastradas e o ponto de entrada para cadastro"/>
</div>

Abaixo está um ciclo completo: cadastrar uma pessoa, publicar a versão, o dispositivo baixa e alterna, a porta a reconhece.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-flow-7a02b8a9.gif" alt="Cadastro até o dispositivo baixar a nova biblioteca de rostos e reconhecer a pessoa na porta"/>
</div>

Antes de instalar uma fechadura, confirme na placa base PoE que a linha GPIO pode realmente ser acionada:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/poe-activation-2de5d904.png" alt="Inicialização do atuador em uma reCamera 2002 HQ PoE, reivindicando a linha GPIO D1"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/gpio-relay-check-ad22020d.png" alt="Leitura de nível na mesma linha (sysfs 490) após uma decisão de permissão"/>
</div>

<!-- TODO image: the door itself (camera, relay and lock as installed) — needs a field shoot -->

Uma URL de biblioteca em texto simples `http://` é permitida em uma LAN, mas somente com uma assinatura HMAC-SHA256 sobre o manifesto; sem uma chave o dispositivo se recusa a iniciar. Essa assinatura impede adulteração em trânsito. Ela não impede alguém que tenha aberto um dispositivo: qualquer chave de dispositivo vazada pode forjar uma biblioteca.
signature over the manifest; without a key the device refuses to start. That signature
stops tampering on the wire. It does not stop someone who has opened a device: any leaked
device key can forge a library.

## Como conectá-lo ao seu próprio sistema

A interface é composta por cinco tópicos MQTT e duas superfícies HTTP.

| Tópico / endpoint | Payload | Retido |
|---|---|---|
| `access/v1/events` (MQTT 8883, QoS 1) | Um JSON por decisão — veja abaixo | Não |
| `access/v1/status/{device_id}` | Heartbeat a cada 30 segundos: integridade do atuador, versão da biblioteca e tag do modelo, se liveness está carregado | Apenas last will |
| `access/v1/commands/{door_id}` | `unlock`, `hold_open`, `lock` | **Nunca** |
| `access/v1/receipts/{command_id}` | O estado final de um comando | Não |
| `access/v1/relay/{relay_id}/set` and `/state` | Somente presets de MQTT-relay; `state` relata o contato físico, não se a porta está aberta | `set` não, `state` sim |
| `GET /v1/facedb/current`, `GET /v1/facedb/{version}` (HTTP 8080) | Toda a superfície de distribuição da biblioteca. `Range` para downloads segmentados e retomáveis | — |
| `/api/events`, `/api/devices`, `/api/persons`, `/api/audit/verify` (HTTP 8088) | API do console atrás do gate de token de três funções. Nenhuma leitura anônima | — |

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

Três campos determinam a maioria das integrações. **`facedb_version` é `null` antes da primeira sincronização bem-sucedida** — isso é "nenhuma biblioteca", algo diferente da versão 0, e é relatado como seu próprio motivo de negação `no_facedb` em vez de como uma não correspondência. **`threshold` é o valor em vigor para aquela decisão**, então uma mudança de limiar é visível no fluxo de eventos em vez de apenas em um arquivo de configuração. **`clock.valid`** indica se o timestamp corrigido pode ser confiável; os dispositivos nunca ajustam seu relógio de sistema, eles apenas mantêm um deslocamento.
successful sync** — that is "no library at all", a different thing from version 0, and it
is reported as its own denial reason `no_facedb` rather than as a non-match. **`threshold`
is the value in force for that decision**, so a threshold change is visible in the event
stream rather than only in a config file. **`clock.valid`** says whether the corrected
timestamp can be trusted; devices never set their system clock, they only carry an offset.

### O gate de comandos

Um comando deve trazer um conjunto de campos exato, um UUIDv4 `command_id`, um `issued_at` RFC3339 com fuso horário e um TTL dentro dos limites, e é verificado contra uma tabela de replay por identidade. Um comando reenviado **não abre a porta uma segunda vez** — ele reproduz o recibo original, de modo que o chamador ainda obtenha algo para conciliar. Um comando expirado retorna como `TTL_EXPIRED`. Uma identidade anônima é recusada.
with a timezone, and a TTL within bounds, and it is checked against a per-identity replay
table. A redelivered command **does not open the door a second time** — it replays the
original receipt, so the caller still gets something to reconcile against. An expired one
comes back as `TTL_EXPIRED`. An anonymous identity is refused.

O tópico `set` e o tópico de comandos nunca são retidos. Um unlock retido é reproduzido a cada reconexão, então a porta se abriria sozinha após uma queda de energia.
every reconnect, so the door would open by itself after a power cut.

## Para engenheiros: detalhes de implementação

### Distribuição da biblioteca de rostos: dois endpoints, sem push

Os dispositivos consultam `current`, comparam a versão e só então buscam arquivos, com `Range` para downloads segmentados e retomáveis. A latência de ativação, portanto, é igual ao período de sondagem — 30 s por padrão. Esse é o preço pago por um lado de dispositivo que não precisa de nada além de um cliente HTTP, e por nunca haver um estado de "notificação perdida, mas biblioteca alterada".
chunked and resumable downloads. Activation latency therefore equals the poll period —
30 s by default. That is the price paid for a device side that needs nothing but an HTTP
client, and for never having a "notification lost but library changed" state.

A sequência completa: sondar → comparar → download segmentado → SHA-256 por arquivo → assinatura do manifesto → carregar o novo matcher → **troca atômica** → gravação da galeria → ack de `op:reload`. Uma falha em qualquer etapa mantém a versão anterior. Em ambas as unidades de hardware, uma versão com um byte alterado em `gallery.json` e um manifesto assinado com a chave errada foi rejeitada no dispositivo, que permaneceu na versão anterior; um download interrompido foi retomado.
signature → load the new matcher → **atomic switch** → gallery write → `op:reload` ack.
A failure at any step leaves the previous version in place. On both hardware units a
version with one byte changed in `gallery.json` and a manifest signed with the wrong key
were rejected on the device, which stayed on the previous version; an interrupted download
resumed.

O manifesto de cada versão traz cinco campos de licença — `license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256` — de modo que os termos viajem com o artefato em vez de existirem apenas em um documento. Uma licença ainda em confirmação é registrada como `license_id: unverified` com `use_scope: internal-only`; ela nunca é escrita como permissiva e corrigida depois.
`redistributable`, `source_revision`, `sha256` — so the terms travel with the artefact
rather than living only in a document. A licence still being confirmed is recorded as
`license_id: unverified` with `use_scope: internal-only`; it is never written as
permissive and corrected later.

### Barreiras de exclusão e por que um rollback não é suficiente

Remover uma pessoa gera uma nova versão sem ela e grava uma barreira de exclusão. Fazer rollback para qualquer versão que ainda a contenha é recusado pelo nome. Sem a barreira, um único rollback readmite silenciosamente todos que já foram removidos — que é o modo de falha que torna uma biblioteca versionada perigosa em vez de útil.
back to any version that still contains them is refused by name. Without the barrier, one
rollback quietly re-admits everyone who has ever been removed — which is the failure mode
that makes a versioned library dangerous rather than useful.

### Liveness não pode ser desligado silenciosamente

O serviço de reconhecimento upstream degrada para "continuar reconhecendo, pular liveness" quando o arquivo de modelo está ausente. Para uma porta, essa degradação é uma porta aberta, então o adaptador sonda `/health` na inicialização e se recusa a executar a menos que liveness seja relatado como carregado. Um valor `live` de `null` é tratado como uma **falha**, não como aprovação: significa que a verificação não foi executada, e isso aparece como o motivo distinto `liveness_unknown`.
model file is missing. For a door that degradation is an open door, so the adapter probes
`/health` at startup and refuses to run unless liveness reports as loaded. A `live` value
of `null` is treated as a **failure**, not a pass: it means the check did not run, and it
surfaces as the distinct reason `liveness_unknown`.

Uma lacuna de cobertura registrada. O liveness do backend RKNN não é implementado upstream, então um preset em execução em RKNN não pode satisfazer "liveness aplicado" e seu limite de liveness não deve ser preenchido a partir desse caminho.
so a preset running on RKNN cannot satisfy "liveness enforced" and its liveness boundary
must not be filled from that path.

### O log de auditoria

NDJSON somente-apêndice, cada registro trazendo o hash do registro anterior. Alterar uma decisão passada de negada para permitida quebra a cadeia, e `/api/audit/verify` relata isso. No loop de software, uma cadeia de 13 registros foi verificada e falhou depois que uma negação foi editada para aprovação.
decision from denied to allowed breaks the chain, and `/api/audit/verify` reports it. In
the software loop a 13-record chain verified, and failed after one denial was edited into
an approval.

### Cadastro e a lacuna de espaço de modelo na reCamera Pro

O `buffalo_l` de `face_rec_api` é o embedder errado para a Pro operacionalmente, independentemente da licença: o próprio reconhecedor do dispositivo executa `rv1126b:scrfd500m+mbf512@fp16`, e a similaridade de cosseno entre os dois espaços de modelo é aproximadamente zero. Nenhum embedder em nuvem hoje produz vetores no espaço de modelo do dispositivo, então **o caminho de cadastro empacotado ainda não produz uma biblioteca de rostos utilizável em produção nesse dispositivo**. Corrigir isso exige ou um embedder em nuvem reconciliado com o espaço de modelo do dispositivo ou um caminho de cadastro assistido pelo dispositivo. O upstream está migrando para a segunda forma — enviando imagens e recomputando o embedding no dispositivo — mas a versão empacotada distribui vetores computados em nuvem, e é isso que esta página descreve. O caminho padrão da reCamera não é afetado: ele faz embedding no dispositivo e não cadastra por meio deste console.
of licence: the device's own recognizer runs `rv1126b:scrfd500m+mbf512@fp16`, and cosine
similarity between the two model spaces is approximately zero. No cloud-side embedder
today produces vectors in the device's model space, so **the packaged registration path
does not yet produce a face library usable in production on that device**. Fixing it needs
either a cloud embedder reconciled to the device's model space or a device-assisted
enrolment path. Upstream is moving to the second shape — sending images and recomputing
the embedding on the device — but the packaged version distributes cloud-computed vectors,
and that is what this page describes. The standard reCamera path is not affected: it
embeds on-device and does not enrol through this console.

## Apêndice: dados medidos {#appendix-measured-data}

### O que foi medido e o que não foi

Sete métricas de limite são definidas upstream. Uma é medida; seis trazem `status: pending` com todos os níveis vazios, cada uma com o motivo registrado.

| Métrica de limite | Estado | Por que está em aberto |
|---|---|---|
| Ativação da biblioteca de rostos | **medida** | Executada em uma reCamera padrão (duas execuções de sondagem) e em uma reCamera Pro (uma execução) |
| FAR / FRR de reconhecimento | pending | Nenhum modelo de rosto real no loop de software; nenhum par positivo/negativo; ninguém em frente a nenhuma das lentes |
| Rejeição de spoof de liveness / falso negativo de vivo | pending | Precisa de amostras reais de spoof — fotografias, telas, máscaras — e Silent-Face realmente em execução |
| Latência p95 de desbloqueio por caminho direto | pending | Precisa da cadeia completa câmera‑para‑relé em hardware |
| Latência p95 de desbloqueio via MQTT-relay | pending | Nenhum relé foi conectado ao gateway |
| Resistência offline | pending | Precisa de um dispositivo em execução desconectado por um longo período |
| Soak de 72 horas: aberturas indevidas / falhas | pending | Precisa de 72 horas de operação ininterrupta em hardware |
| 72-hour soak: wrong opens / crashes | pending | Needs 72 hours of uninterrupted operation on hardware |

### Latência de ativação da biblioteca de rostos

**Este é o tempo entre uma nova versão da biblioteca ser publicada e o dispositivo passar a executá-la.
Não é a latência de abertura da porta.** O tempo de abertura da porta é medido separadamente abaixo.

| Plataforma | Ativação completa | Condições |
|---|---|---|
| reCamera padrão (SG2002 / CV181x riscv64, firmware 0.2.2) | **p50 491,6 ms, p95 507,8 ms** (n=20) | USB-RNDIS, 2 pessoas, biblioteca de 16,5 KB. Viagem de ida e volta de `op:reload` p50 100,0 ms (n=25) |
| reCamera Pro (RV1126B, Buildroot 2023.02.6) | 62,2 ms (v1), 45,4 ms (v2); rodada no-op atualizada 6,2 ms | Ethernet, 1–2 pessoas, biblioteca abaixo de 20 KB. Portão de consistência `problems: []` |
| reCamera PoE | — | Hardware pendente; o código no dispositivo foi apenas auto-testado |
| Loop de software no macOS | 11,6 ms mais lento de três (v1/v2/v3: 11,6 / 3,7 / 3,5 ms) | HTTP loopback, sem TLS, sem autenticação, perda zero, 4 pessoas × 3 embeddings de 128 dimensões, execução única. **Não é um valor do lado do dispositivo** |

**Como isso escala.** Dois pontos de escala na reCamera padrão, uma execução cada: 402 pessoas /
2,86 MB em 9 801,7 ms, e 1502 pessoas / 10,66 MB em 22 278,7 ms. A ativação acompanha
o tamanho da biblioteca, então uma biblioteca grande é uma primeira sincronização lenta — planeje a primeira implantação de acordo
em vez de assumir que o valor de 491,6 ms se mantém em escala.

### Evento de reconhecimento até leitura do pino GPIO (reCamera Pro)

n=22, p50 1,448 ms, p95 2,709 ms. **Leia isso como um limite superior em um elo, não como um
número de porta.** A entrada foram eventos sintéticos de reconhecimento injetados em vez de uma pessoa, a
leitura de retorno é via sysfs, então os valores são um limite superior apenas para o caminho de software, e nenhum
circuito externo foi conectado. A identidade física de `gpio130` é confirmada por evidência de pinctrl
na device tree como um dos pinos UART4 M0 da porta de expansão reconfigurado como GPIO — da
família de 3,3 V, não uma das duas saídas nativas de 12–21 V da placa — e seu nível e
corrente de acionamento disponível são medidos na sua própria unidade; os limiares carregam
`calibration = pending`.

### Tempo de abertura da porta e rejeições (reCamera Pro, vídeo reproduzido)

**Tempo de abertura da porta** — do primeiro quadro reproduzido entregue ao app até o pino GPIO ser
acionado para seu nível ativo, passando por captura, detecção, liveness, correspondência, política e
gravação no pino, em função do tamanho da biblioteca de rostos. p50, p95 entre parênteses, 12 execuções por ponto — com n=12 leia a
coluna p95 como um limite superior.

| Câmera / host | 10 pessoas | 1 000 pessoas |
|---|---|---|
| reCamera Pro (RV1126B), f1-access 0.1.1 | **0,62 s** (0,67) | **0,66 s** (0,68) |

O pino foi acionado em 24 de 24 execuções. Condições: reCamera Pro executando o próprio app
`f1-access` 0.1.1, quadros 1280x720 reproduzidos a 12,5 fps, liveness ligado, rosto mínimo 40 px,
limiar de correspondência 0,40; a sonda é um clipe de vídeo padrão reproduzido pelo próprio
pipeline do dispositivo, não uma pessoa ao vivo. A sustentação de contato de 1 500 ms que se segue à escrita no pino não é
contabilizada. Nenhum relé e nenhuma fechadura estão conectados, então esses valores não incluem
resposta mecânica. A diferença medida de p50 entre a biblioteca de 10 pessoas e a de 1 000 pessoas é de
37 ms.

**Rejeições** — 20 execuções por linha, mesmo dispositivo e app. 40 execuções são uma pessoa não registrada;
60 são uma tela segurada em frente à lente.

| Execução | Biblioteca de rostos | Pino acionado |
|---|---|---|
| Pessoa não registrada | 9 identidades sintéticas | 0 / 20 |
| Pessoa não registrada | 999 identidades sintéticas | 0 / 20 |
| Reprodução em tela de telefone, clipe A | 10, template construído a partir do clipe de ataque | 0 / 20 |
| Reprodução em tela de telefone, clipe B | 10, template construído a partir do clipe de ataque | 0 / 20 |
| Imagem de tela estática | 10, template construído a partir do clipe de ataque | 0 / 20 |

Nas duas linhas de pessoa não registrada a biblioteca contém apenas vetores sintéticos, então a pessoa
no clipe não está cadastrada. Nas três linhas de tela o template é construído a partir do próprio clipe
de ataque, então o rosto na biblioteca e o rosto na tela são da mesma pessoa. A
linha de tela estática é um quadro de exibição mantido parado; nenhuma fotografia impressa foi testada.

**Serviço de reconhecimento no host de IA (reComputer J40 Series).** Em um Orin NX 16 GB com JetPack 6 o
serviço de reconhecimento constrói seus engines TensorRT na própria máquina em 61 s + 62 s + 73 s e responde
ao seu endpoint de saúde 214 s após a inicialização. Um quadro de um stream RTSP 1280x720 retorna com uma
caixa de rosto, um veredito de liveness e um embedding de 512 dimensões em 24–26 ms de tempo de servidor (30,3 ms p50
sobre HTTP, 12 requisições). A reCamera padrão e o host de IA não têm valor de abertura de porta: o
reconhecedor da câmera padrão é um processo nativo fechado sem forma de fornecer um quadro a ele, e
a caixa de teste do host de IA não tem um segundo pino de cabeçalho para ler o retorno do contato do relé.

### O que o loop de software estabeleceu

Em uma máquina de desenvolvimento macOS, com um atuador falso, um broker em memória e um reconhecedor
falso: 52 de 52 verificações aprovadas em três versões de biblioteca construídas, publicadas,
baixadas, verificadas por SHA e trocadas atomicamente; a política negando uma fotografia
(`liveness_failed`), um resultado de liveness nulo (`liveness_unknown`), uma pessoa em lista de bloqueio,
um estranho abaixo do limiar, um quadro vazio e uma repetição dentro da janela de debounce; exatamente
dois pulsos de desbloqueio em dez quadros, ambos nos 1500 ms configurados; um rollback para duas
versões diferentes recusado pela barreira de exclusão com a versão atual inalterada; um
desbloqueio remoto aceito e executado, um expirado rejeitado com `TTL_EXPIRED`, uma repetição
retornando o recibo original sem um segundo pulso, e uma identidade anônima recusada;
um last will retido entregue após uma queda; uma cadeia de auditoria de 13 registros verificando e falhando
depois que uma negação foi editada para uma aprovação; e os três papéis do console se comportando.

Nada disso mede quão bem o sistema reconhece rostos ou rejeita falsificações. Isso mede
se o protocolo e a máquina de estados fazem o que afirmam.

### Licenciamento

O código neste pacote e no repositório upstream é Apache-2.0. **Os pesos do modelo
não são.** A detecção de rostos e o embedding usam o `buffalo_l` do InsightFace; a própria
declaração do InsightFace é que o código é MIT sem limitação de uso comercial, mas que os
dados de treinamento — e modelos treinados com esses dados — estão disponíveis apenas para fins de pesquisa
não comercial. `buffalo_l` é um desses modelos: `license_id: non-commercial`,
`use_scope: non-commercial`, `redistributable: false`. Os pesos não são distribuídos aqui.

Duas consequências que vale declarar antes que sejam descobertas tarde. Uma implantação comercial
deve substituir o backbone de rosto por um backbone com licença comercial. E substituí-lo significa
**reconstruir todas as versões da biblioteca de rostos**, porque embeddings não são comparáveis entre
modelos — uma biblioteca construída com um backbone tem pontuação aproximadamente zero contra outro, então
versões antigas ficam mortas em vez de apenas obsoletas. A proteção `model_tag` no manifesto é
o que impede que um dispositivo carregue uma por engano.

O modelo de liveness passivo, Silent-Face-Anti-Spoofing da MiniVision, é Apache-2.0:
`use_scope: commercial`, redistribuível, usado sem modificações.

### O que isto não pode lhe dizer

- **Se ele reconhecerá as pessoas na sua porta.** O limiar fornecido é um ponto de partida; varra pares positivos e negativos na câmera instalada e defina-o a partir disso.
- **Se ele rejeitará uma fotografia.** O liveness nunca foi exercitado contra amostras reais de spoof.
- **Quão rápido a porta abre com um relé e uma fechadura ligados.** O valor de abertura de porta acima para na ativação do pino; a resposta do relé e da fechadura não está incluída.
- **Se ele sobrevive a uma semana.** A resistência offline e o soak de 72 horas ainda estão em aberto.

## Fontes de dados e assets

Todos os caminhos abaixo estão no repositório upstream `unmanned-store-access`.

- Ativação da biblioteca de rostos, reCamera padrão: `evaluation/runs/2026-09-06-recamera-std-p3-r2/results.md` §2 e `boundary.facedb-activation.yaml` ao lado
- Ativação da biblioteca de rostos e leitura de retorno do GPIO, reCamera Pro: `evaluation/runs/2026-09-07-recamera-pro-p1/results.md` e os dois `boundary.*.yaml` ao lado
- Loop de software e as seis fronteiras pendentes: `evaluation/runs/2026-09-06-c1-software/results.md` e `boundary.{recognition,liveness,latency-direct,latency-p3,offline,soak72h}.yaml`
- Lacuna de espaço de modelo no registro: upstream `docs/user-guide.md` §5.1 e `evaluation/runs/2026-09-07-recamera-pro-p1/results.md` §9.2
- Termos de licença: `gallery/ATTRIBUTION.md` no pacote da solução, e a seção de licenciamento da descrição do pacote
- Capturas de tela do console na página de design de referência são **dados de demonstração sintéticos** — as pessoas, pontuações e eventos são fixos, não resultados de campo
