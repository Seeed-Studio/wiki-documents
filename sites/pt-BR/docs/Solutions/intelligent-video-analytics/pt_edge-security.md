---
description: Crie um sistema local de alerta de zona restrita, cruzamento de linha e permanência para uma planta, armazém ou porta de sala de servidores — quais hardwares você precisa, como implantá-lo, quais interfaces ele expõe e medições de tempo e throughput em três hosts.
title: "Alertas de Segurança na Borda: Zonas Restritas, Cruzamento de Linha e Permanência na Borda"
keywords:
  - segurança de borda
  - detecção de intrusão
  - segurança perimetral
  - detecção de cruzamento de linha
  - detecção de permanência
  - detecção de pessoas
  - IA de borda
  - reComputer
  - Jetson
  - RK3588
  - Hailo-8
  - MQTT
  - RTSP
image: https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-4up-en-25c00317.png
slug: /solutions/edge-security
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-security/
generated_from: sensecraft-solutions@edge_security
---

:::caution[Antes de depender disto]
Apenas alerta assistivo. Não é um produto de segurança certificado e não substitui rondas ou um sistema de controle de acesso.
:::

## O que esta solução faz

Desenhe uma zona restrita ou um fio de disparo na visualização da câmera; entrar ou cruzar gera um alerta, e permanecer dentro por muito tempo adiciona um alerta de permanência. A detecção, o veredito, a evidência e a distribuição acontecem todos no host de borda no local. O vídeo nunca sai, e ele continua funcionando sem conexão à internet; o editor de regras e o painel também obtêm sua imagem do dispositivo local, com o navegador falando com o host local.

![Três pessoas ficam dentro da zona restrita vermelha no fim do corredor enquanto uma quarta cruza a linha âmbar, cuja seta marca a direção em que a regra conta](https://files.seeedstudio.com/wiki/reference-design/edge_security/corridor-overlay-63abe979.jpg)

As três regras:

| Regra | Dispara quando |
|---|---|
| Zona restrita | o centróide de uma pessoa rastreada entra no polígono que você desenhou |
| Permanência | essa pessoa permanece dentro além do tempo de permanência que você definiu — ele **se soma** ao alerta de intrusão em vez de substituí-lo |
| Cruzamento de linha | a trilha dessa pessoa cruza a linha que você desenhou; a linha pode contar apenas em uma direção, então a passagem inversa permanece silenciosa |

As regras são armazenadas em coordenadas normalizadas, então uma mudança de resolução não exige redesenho. Mover a câmera exige, porque as regras são desenhadas sobre aquela visualização.

O sistema são dois processos. O **detector** faz detecção de pessoas e rastreamento por pessoa, e publica via MQTT em um formato de mensagem publicado. O **hub** assina, julga as regras, armazena alertas e serve a bancada de trabalho. Uma nova placa precisa apenas de um novo detector, sem nada mudar no lado do veredito.

Escopo: apenas pessoas — veículos, pacotes e ferramentas precisam de um modelo de detecção diferente e uma nova validação. Cada alerta armazena um quadro, não um clipe de vídeo; não há gravação em nível de evidência.

- Implementação open source: [github.com/suharvest/edge-security-kit](https://github.com/suharvest/edge-security-kit)
- Seleção de hardware e implantação: [página de design de referência](https://www.seeed.cc/solutions/reference-designs/edge_security)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Vereditos na borda, vídeo permanece no local</h3>
                <p>Detecção, rastreamento e vereditos de zona acontecem na caixa local. Alertas e snapshots cruzam o cabo; o vídeo bruto nunca sai.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Câmeras RTSP existentes são aproveitadas</h3>
                <p>Recebe streams RTSP H.264 padrão. Implemente sem substituir o hardware de câmera existente ou puxar novos cabos.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Autocontido, sem servidor em nuvem</h3>
                <p>Broker, mecanismo de regras e bancada web rodam na caixa. Gerencie via navegador local sem assinaturas ou servidores em nuvem.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Multiplataforma e open source</h3>
                <p>Suporta Jetson (TensorRT), RK3588 (RKNN) e Hailo-8 (HailoRT). Container compose e scripts de modelo são totalmente abertos.</p>
            </div>
        </li>
    </ul>
</div>

### A bancada de trabalho

**Parede de vídeo**: a imagem ao vivo de cada stream é colocada em uma grade, com caixas de detecção (id de trilha e pontuação), o polígono da zona e a linha direcionada desenhados por cima; uma faixa abaixo conta streams online e alertas pendentes e reconhecidos.

![Parede com quatro quadros: caixas de sobreposição e formas de regras em cada quadro, um controle deslizante de confiança por stream e um quadro offline sob seu véu](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-4up-en-25c00317.png)

*Captura de demonstração: a fonte de vídeo é a fonte de barras de cor do repositório, usada para mostrar a interface, sobreposições e números.*

A grade se adapta à contagem de streams, indo para 3x3 acima de quatro.

![Parede com nove quadros](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-9up-zh-0b724776.png)

*Captura de demonstração.*

Pressione `F` para tela cheia: a barra superior recolhe e os quadros preenchem a tela, para um monitor HDMI em uma sala de controle.

![Modo de tela cheia: a barra superior desapareceu e nove quadros preenchem a tela](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-fullscreen-zh-2509b6e9.png)

*Captura de demonstração.*

**Desenhando regras**: o pano de fundo da página de regras é a própria imagem da câmera, feita proxy pelo hub a partir do endpoint de pré-visualização do detector, então o limite que você desenha e o quadro que o detector julga compartilham o mesmo espaço de coordenadas. Clique várias vezes para fechar um polígono (uma zona restrita) ou duas vezes para traçar uma linha; uma linha conta nos dois sentidos, apenas para frente ou apenas para trás. Permanência é o tempo de permanência definido na zona. O botão Simular executa um alerta por toda a cadeia (armazenado e enviado); alertas simulados são marcados e ignoram o cooldown.

![Editor de regras: fechando um polígono de zona restrita e traçando uma linha direcionada sobre a imagem ao vivo](https://files.seeedstudio.com/wiki/reference-design/edge_security/rules-editor-4c1e3847.jpg)

**Reajustando a confiança**: o limiar de cada stream é alterado na parede, sem editar um arquivo de configuração e reiniciar. 200 significa que o detector já está usando; uma recusa explícita é 409; nenhum ack em tempo é 504, e a interface não redesenha como se tivesse funcionado.

![Um controle deslizante de confiança em meio à mudança, com quatro streams lendo quatro valores diferentes](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-confidence-en-1f517542.png)

*Captura de demonstração.*

**Adicionando uma câmera**: a caixa de diálogo Add Camera anexa um novo stream em tempo de execução, sem nova implantação. O hub bloqueia um id de stream duplicado antes de qualquer coisa ser enviada; um detector de stream único responde com `ok:false` e a interface relata 409 com o motivo; quando nenhum ack chega, a caixa de diálogo permanece aberta e diz que o resultado é desconhecido.

![A caixa de diálogo de adicionar câmera, com a senha RTSP mascarada na linha de eco](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-add-camera-en-aff6fa40.png)

*Captura de demonstração.*

![Tempo limite ao adicionar câmera: o detector não respondeu, então a caixa de diálogo permanece aberta e diz que o resultado é desconhecido](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-add-camera-timeout-zh-99ae7cc2.png)

*Captura de demonstração.*

**Trabalhando os alertas**: a lista roda do mais recente para o mais antigo, cada linha com o quadro capturado quando disparou mais dispositivo, stream, nome da regra, id de trilha e pontuação. Reconhecer registra o operador e a hora; a lista é filtrada por dispositivo, stream, nome da regra e intervalo de tempo, e as linhas filtradas são exportadas para CSV.

![Bancada de alertas: a lista de alertas com controles de disposição e a barra de desfazer](https://files.seeedstudio.com/wiki/reference-design/edge_security/workbench-alerts-9a0d30e9.jpg)

![Detalhe do alerta: o quadro capturado em tamanho completo e todos os campos daquela linha](https://files.seeedstudio.com/wiki/reference-design/edge_security/alert-detail-bd474e60.jpg)

## De que hardware você precisa

### A câmera

Uma câmera IP de montagem fixa por stream, e ela **deve produzir H.264** — o caminho de decodificação de cada rota é construído para isso. RTSP padrão, então câmeras que você já possui permanecem onde estão.

### O host

Uma máquina é suficiente — detecção, vereditos e a bancada de trabalho rodam todos nela.

| | Host | Acelerador | Decodificação de vídeo | Portas usadas | Disco livre |
|---|---|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Módulo Jetson Orin | GPU Jetson (TensorRT) | Decodificação NVDEC por hardware | 8090 / 1883 / 8099 | ~10 GB, incluindo build do engine |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Rockchip NPU | Rockchip NPU (RKNN) | Decodificação por hardware MPP on-board | 8090 / 1883 / 8099 | ~6 GB |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Caixa industrial fanless | Hailo-8 (HailoRT) | Decodificação por software na CPU | 8090 / 1883 / 8099 | ~6 GB |

Pré-requisitos específicos da rota:

- **Jetson**: o detector carrega um mecanismo TensorRT criado no dispositivo de destino, e a primeira implantação o compila lá — medido em 361 s. A decodificação é em NVDEC, então um host que não seja Jetson falha nas verificações iniciais e não faz fallback para decodificação por software.
- **RK3588**: a placa precisa de `/usr/lib/librknnrt.so`, de um `python3` que consiga importar `rknn_toolkit_lite2`, e do nó de decodificação por hardware `/dev/mpp_service`. Se qualquer um faltar, a etapa de implantação falha logo no início.
- **Hailo-8**: o HailoRT deve corresponder ao driver (medido em 4.21.0). Contextos do acelerador são exclusivos: nenhum outro processo pode manter `/dev/hailo0`.

**Uma lista de alertas para vários sites**: implante o preset de hub compartilhado — broker, mecanismo de regras e workbench em uma máquina sempre ligada, sem detector próprio — e então aponte o `mqtt_host` de cada detector para ele. Os detectores não precisam ser iguais.

O hub não precisa de um servidor dedicado: foi medido em 3,7% de um núcleo e 52,8 MB de RSS em uma placa RK3588 que também estava executando um detector.

### Limites de seleção negativa

- **Quantidade de streams e carga**: para mais de 8 canais de 1080p ou 16 canais de 720p com rastreamento em quadro completo, evite o J3011 de entrada; escolha J4012 ou RK3588 com decodificadores de vídeo por hardware.
- **Risco do link sem fio**: análise de vídeo de perímetro é sensível a perda de pacotes; evite Wi‑Fi de banda única para uplinks RTSP com múltiplos streams e garanta Ethernet Gigabit cabeada.

## Como implantar no local

Instalação: a porta, corredor ou área que você está protegendo fica totalmente dentro do quadro, e uma pessoa que passa não fica escondida atrás de estantes, gabinetes ou um pilar por muito tempo. Depois de ajustada, a câmera não deve se mover.

Todos os quatro presets (Jetson caixa única, RK3588 caixa única, Hailo caixa única, hub compartilhado) são dois passos: implantar o stack e depois abrir o workbench. Opções completas de configuração e pacotes estão na página do design de referência:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_security" target="_blank">
        <strong>Ver seleção completa e etapas de implantação na página de design de referência</strong>
    </a>
</div>

### Passo 1: implantar o stack

Informe o endereço do host e a URL RTSP da câmera. Três contêineres sobem: `mosquitto` (broker), `hub` (mecanismo de regras e workbench) e `detector`.

A etapa imprime a resposta de saúde do hub e a senha de administrador gerada na primeira inicialização — **não há padrão fixo**. A senha gerada também é gravada em `/data/initial-password.txt` dentro do contêiner do hub. Em seguida, imprime o caminho de decodificação que o detector realmente negociou; decodificação por hardware é o que você quer: `mppvideodec` em RK3588, `nvv4l2decoder` em Jetson.

### Passo 2: abrir o workbench

Acesse `http://<host>:8090`, faça login como `admin` com a senha impressa e defina uma nova quando solicitado.

![Página de dispositivos: uma linha por detector com disponibilidade, o caminho de decodificação realmente em uso e a versão do modelo](https://files.seeedstudio.com/wiki/reference-design/edge_security/devices-table-a04ae23a.jpg)

Na página **Devices**, confirme que o host está online e que a coluna de decodificação mostra `hw`. O detector lê esse valor a partir dos caps do GStreamer negociados pelo pipeline ao vivo, não de um arquivo de configuração.

## Quais interfaces ele expõe

Três formas de acesso:

- **Usar o workbench** — a sala de controle observa o vídeo na parede e trabalha os alertas; a lista de alertas filtrada é exportada para CSV (`/api/alerts/export.csv`).
- **Puxar alertas para um sistema de negócios** — chame o endpoint REST do hub `GET /api/alerts`, filtrando por estado, dispositivo, stream, nome da regra e intervalo de tempo; `after_id` busca de forma incremental.
- **Trazer seu próprio detector ou assinar detecções** — detectores publicam `sensecraft.detection/1` via MQTT; o controle em tempo de execução usa `cmd/control` / `cmd/ack`.

Nos presets de caixa única o broker está vinculado ao loopback. Um assinante externo precisa que a porta seja aberta e que um arquivo de senha seja adicionado; ambos são obrigatórios.

### O uplink de detecção

Todo detector publica `sensecraft.detection/1`: coordenadas são `frame_norm` (normalizadas para o quadro original); `track_id` começa em 1 e, como permanência e cruzamento são estado por trilha, um detector sem rastreamento não pode alimentar regras do lado do hub; `session_id` muda a cada inicialização de processo, para que o hub possa identificar um dispositivo reiniciado e redefinir o estado de suas regras.

```json
{
  "version": "1.0",
  "device_id": "edge-sec-j4012-01",
  "stream_id": "camera_gate_north",
  "session_id": "sess_8f2a9c10",
  "timestamp": 1729000000.123,
  "detections": [
    {
      "track_id": 14,
      "class": "person",
      "confidence": 0.92,
      "bbox_norm": [0.42, 0.35, 0.58, 0.82]
    }
  ]
}
```

### O downlink de controle em tempo de execução

A confiança de um stream e as câmeras que um detector observa podem ser alteradas em tempo de execução sem reinicialização. Os comandos trafegam como `sensecraft.command/1` em `cmd/control` e são respondidos com `sensecraft.ack/1` em `cmd/ack`.

| `command` | `params` obrigatórios | Efeito |
|---|---|---|
| `set_conf_threshold` | `stream_id`, `conf_threshold` (0-1) | o detector do stream passa a operar no novo limiar a partir do próximo quadro |
| `add_stream` | `stream_id`, `source`; opcionais `name`, `rtsp_transport` | um novo stream inicia e aparece na próxima mensagem de status |
| `remove_stream` | `stream_id` | esse stream é interrompido e sai da mensagem de status |

Semântica de ack:

- **`ok: true` significa que a alteração está em vigor**; uma alteração que só entra em vigor após reinicialização responde com `ok: false` e o motivo.
- **Requisições e acks são casados por `request_id`**; um `request_id` repetido é aplicado uma vez e confirmado duas, então um comando QoS 1 retransmitido não adiciona um stream duas vezes.
- **`applied` é autoritativo**: o detector relata o que realmente fez; `persisted` indica se a alteração foi gravada de volta na configuração e sobrevive a uma reinicialização.
- **Nenhuma resposta conta como falha**: a camada REST do hub responde 504. `cmd/control` é opcional, então um detector sem o canal de controle ainda pode se conectar; um detector que implementa apenas alguns comandos confirma os outros com `ok: false`, informando a capacidade ausente.

### A REST API do hub

| Método | Caminho | Notas |
|---|---|---|
| GET | `/api/alerts` | Filtrar por `state`, `device_id`, `stream_id`, `event_type`, `rule_name` e um intervalo de datas; 50 linhas por padrão, mais recentes primeiro. Com `after_id` retorna ids maiores em ordem ascendente, para que um WebSocket ao reconectar possa se atualizar |
| GET | `/api/alerts/export.csv` | A mesma análise de parâmetros, como CSV UTF-8 com BOM |
| PUT | `/api/rules/{device_id}/{stream_id}` | Salvar regras; `rev` é incrementado |
| POST | `/api/rules/{device_id}/{stream_id}/simulate` | Executar um alerta marcado como simulado por toda a cadeia, ignorando o cooldown e sem solicitar snapshot |
| PUT | `/api/devices/{device_id}/streams/{stream_id}/conf` | Retunar o limiar, com as semânticas 200 / 409 / 504 acima |
| POST | `/api/devices/{device_id}/streams` | Anexar um stream em tempo de execução; 201 em caso de sucesso |
| DELETE | `/api/devices/{device_id}/streams/{stream_id}` | Desanexar um stream |
| GET | `/api/devices/{device_id}/streams/{stream_id}/preview.jpg` | Proxy de pré-visualização de quadro único, em cache por 1,5 s. Um dispositivo inalcançável ou um corpo que não seja JPEG resulta em 502, não em um placeholder cinza |

Tudo, exceto `/api/health` e a rota de login, requer uma sessão de cookie. A tabela de sessões é persistida, então sessões que ainda não expiraram sobrevivem a uma reinicialização do hub.

## Desempenho e dados medidos

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edge-security-kit" target="_blank">
        <strong>Ver código-fonte e arquivos Compose no GitHub</strong>
    </a>
</div>

### Temporização das regras

| Host de detecção | Erro de cruzamento de linha | Erro de zona restrita | Erro de permanência | Direção | Snapshots |
|---|---|---|---|---|---|
| reComputer J40 Series (J4012, Orin NX 16GB) | 0,109-0,268 s | 0,090 s | 0,090-0,290 s | 8/8 corretos | 8/8 decodificáveis |
| reComputer RK3588 Series | 0,085-0,248 s | 0,056-0,057 s | 0,080-0,233 s | 8/8 corretos | 8/8 decodificáveis |
| reComputer R2000 Series (R2135-12, Hailo-8) | 0,006-0,189 s | 0,001 s | 0,004-0,200 s | 8/8 corretos | 8/8 decodificáveis |

Condições: todos os três hosts executaram a mesma fonte de verdade H.264 1280x720 a 5 fps ao longo de uma janela de observação de 130 s; o erro é o intervalo entre o alerta e o instante de verdade, com tolerância de +/-0,5 s. Nenhum host disparou na direção errada.

Reproduzir: [edge-security-kit](https://github.com/suharvest/edge-security-kit).

| Métrica | Valor | Condições |
|---|---|---|
| Quadro julgado até alerta armazenado | p50 **23,8 ms** / p95 206,2 ms | reComputer R2000 Series |
| Quadro julgado até alerta armazenado | p50 **117,4 ms** / p95 297,0 ms | reComputer J40 Series |
| Alinhamento de trajetória (caixas normalizadas em relação à trajetória de verdade) | média 0,00115, máximo 0,00298 | reComputer J40 Series |
| Alinhamento de trajetória (caixas normalizadas em relação à trajetória de verdade) | média 0,00204, p95 0,00322, máximo 0,00463 | reComputer RK3588 Series |

### Vazão de stream único

| Host de detecção | Inferência p50 | p95 | Pipeline completo p50 | CPU do detector | RSS | Decodificação |
|---|---:|---:|---:|---:|---:|---|
| reComputer J40 Series (J4012, Orin NX 16GB) | 4,16 ms | 4,19 ms | 6,99 ms | 5,5% de um núcleo | 310 MB | NVDEC, confirmado em kernel |
| reComputer RK3588 Series | 36,2-44,5 ms | 55,8-56,2 ms | 38,1-46,3 ms | 16,4-17,9% de um núcleo | 214 MB | Rockchip MPP, confirmado em kernel |
| reComputer R2000 Series (R2135-12, Hailo-8) | 7,7 ms | 8,4 ms | 9,5 ms | 8,7-13,0% de um núcleo | 127-131 MB | Decodificação por software na CPU |

Condições: 30 s de aquecimento e depois uma amostra de 120 s; `inference_time_ms` e `pipeline_ms` são lidos dos campos da mensagem, com definições idênticas em todas as plataformas; CPU é a porcentagem de um núcleo em janelas de 5 s. O reComputer R2000 Series não tem decodificador H.264 por hardware, então seus números de pipeline completo e CPU incluem decodificação por software: a coluna de inferência é comparável com os outros dois hosts, a coluna de pipeline completo não é, e a diferença aumenta com a resolução. A latência de um benchmark em loop contínuo parece otimista: o loop é 8% mais rápido que o pipeline real em Jetson e 6-66% mais rápido em RK3588.

Reproduzir: [edge-security-kit](https://github.com/suharvest/edge-security-kit).

### Multi-stream

O reComputer RK3588 Series foi medido até 32 streams:

| Streams (720p @ 5 fps) | Resultado |
|---|---|
| 16 | **Taxa total da fonte**, pior p95 46,9 ms, NPU em 41% de sua capacidade de três núcleos, 1,4 de oito núcleos de CPU, 7,3 GB de RAM livre |
| 24 | 119,9 inferências/s, quatro streams perdendo de um a três frames; os três núcleos da NPU leram 79,5 / 61,3 / 42,6% |
| 32 | 157 de 160 exigidas entregues, quatorze streams perdem frames, a p50 de inferência sobe de 33 para 99 ms |

- **O RGA satura antes da NPU.** A perda de frames em 32 streams é `RGA_BLIT fail` no escalonador em tempo de decodificação, e a contagem de falhas por stream corresponde às streams que perdem frames. A decodificação por hardware nunca fez fallback; todas as 32 streams rodaram em `mppvideodec`.
- **Implantações multi-stream são limitadas por memória.** Processos novos ocupam 173-226 MB, mas ciclos de referência do rknnlite fazem um processo crescer: um detector que havia rodado por dois dias mediu 1839 MB, e dezesseis desses não cabem em 16 GB. Use o backend ctypes ou um `gc.collect()` periódico para multi-stream.
- Dois detectores concorrentes é a maior configuração medida em um hub compartilhado.

### Tempos de execução e parâmetros principais

O runtime e o caminho de decodificação de cada host estão na tabela de hosts em "De que hardware você precisa". Parâmetros que alteram o comportamento da implantação:

- `require_hw_decode` (ativado por padrão) — o detector recusa decodificação na CPU. Uma página de dispositivo mostrando decodificação `sw` significa que ele foi desativado.
- `conf_threshold` por stream (0-1, ajustável na parede em tempo de execução) — quando um modelo int8 produz caixas extras de baixa confiança, aumente primeiro o limiar e volte para fp16 somente se isso não for suficiente.
- `preview_advertise_host` — deve ser o endereço LAN do host para que o hub possa fazer proxy de um frame da porta 8099; caso contrário, o fundo da página de regras fica cinza.

### Degradações conhecidas

- A p50 de inferência do reComputer RK3588 Series varia cerca de 8 ms entre execuções; a p95 é reprodutível.
- Quando o detector não consegue acompanhar o stream, o rastreador continua emitindo novos IDs de rastreamento e uma pessoa parada gera alertas repetidos. Compare a taxa de detecção na página do dispositivo com a taxa de frames da câmera.

## Fontes de dados e ativos

- O clipe de verdade de temporização de regras é composto por um script a partir de uma trajetória definida em segundos, de modo que os instantes reais de cruzamento e entrada são conhecidos antes da execução.
- A fonte de vídeo nas capturas de tela da bancada de trabalho é a fonte de teste de barras de cor do repositório.
- O código de runtime pode ir para um produto comercial, mas os modelos de detecção de pessoas mantêm seus próprios termos. Confirme se a licença dos pesos de detecção que você usa é adequada ao seu produto ou substitua por um modelo com licença compatível.
