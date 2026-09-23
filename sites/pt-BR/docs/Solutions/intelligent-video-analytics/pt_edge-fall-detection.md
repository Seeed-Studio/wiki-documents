---
description: Construindo um sistema local de alerta de quedas para cuidados com idosos, residências assistidas e atendimento domiciliar — quais dispositivos você precisa, como configurá-lo, dados medidos em sete dispositivos e detalhes de implementação para engenheiros
title: 'Detecção de Quedas com IA na Borda: Criação, Implantação e Resultados Medidos'
keywords:
  - sistema de detecção de quedas
  - alerta de queda
  - alerta de queda em casa de repouso
  - IA na borda
  - estimativa de pose
  - detecção de quedas
  - edge AI
  - reCamera
  - reComputer
  - Jetson
  - Hailo-8
  - MQTT
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png
slug: /solutions/edge-fall-detection
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: seeed-solutions-hub
createdAt: '2026-09-01'
updatedAt: '2026-09-22'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Este é um **alerta assistivo**, não um dispositivo médico ou de segurança de vida certificado. Ele não oferece garantia contra detecções perdidas e não substitui rondas presenciais. O desempenho no mundo real depende da posição da câmera e da população real — verifique com imagens locais antes de uma implantação em produção.
:::

## O que esta solução faz

Instale uma câmera no quarto. Quando alguém cai, uma mensagem chega a quem precisa vê-la — o posto de enfermagem, o Home Assistant de um familiar, o NVR na recepção ou o seu próprio sistema — em poucos segundos. Feito para ambientes de quarto fixo: casas de repouso, centros de reabilitação, atendimento domiciliar, dormitórios de ocupante único.

- Implementação open source: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Escolhendo uma configuração e implantando: [página de reference design](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>O vídeo nunca sai do local</h3>
                <p>Detecção, decisão e envio de mensagens acontecem todos no dispositivo local. A única coisa que atravessa a rede é uma mensagem de texto com algumas centenas de bytes — o vídeo nunca sai do local.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>1,4 s de latência média do alerta</h3>
                <p>Medido em um conjunto de dados público em seis configurações congeladas: 95,8% de recall de quedas e uma média de 1,4 segundos entre a queda e o envio da mensagem. Os resultados completos estão no apêndice ao final da página.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>De um quarto a mais de uma dúzia de streams</h3>
                <p>A unidade tudo-em-um atende um quarto; troque pela caixa Hailo-8 e um único host pode executar mais de uma dúzia de câmeras com exatamente a mesma lógica de decisão.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Funciona offline, sem assinatura</h3>
                <p>Sem inferência em nuvem significa sem assinatura em nuvem por câmera. A internet só é necessária se você encaminhar eventos para algum lugar externo.</p>
            </div>
        </li>
    </ul>
</div>

### Demonstração ao vivo

O que o dispositivo realmente gera: um esqueleto sobreposto à pessoa, uma caixa rotulada com o id de rastreamento e o estado atual dessa pessoa e, no canto superior direito, quantos dos três recursos de decisão atualmente se aplicam.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png" alt="Uma queda confirmada em reComputer J30 / J40 — esqueleto, estado de rastreamento e contagem de evidências vêm da mensagem MQTT em tempo real"/>
</div>

`#12 FALLEN` é o id de rastreamento e o estado atual dessa pessoa; `Evidence: 2/3` no canto superior esquerdo significa que dois dos três recursos de decisão se aplicam. A transição de estado animada está [nas etapas de configuração abaixo](#step-2-install-the-software).

## De que hardware você precisa

Duas coisas estão no local: a câmera que produz a imagem e o host que executa a detecção.

**① Câmera** — Já tem uma câmera IP? Use-a como está via RTSP; nada no lado da câmera precisa mudar. Caso contrário, a reCamera 2002 / Pro combina câmera e computação em uma única unidade — é só conectar e ela está pronta.

**② Host detector** — O dispositivo que executa a detecção e a tomada de decisão; ele também determina quantos streams você pode executar e qual será o custo. Com uma câmera existente, isto é uma caixa separada; com a reCamera, a câmera é o host detector.

| | Host detector | Streams por unidade | Quando escolher |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera 2002 / Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Câmera e computação em uma única unidade | 1 | Um quarto, a forma mais rápida de colocar um único alerta em funcionamento |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3576 / RK3588](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html) | 1 | Já padronizou em placas Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 16 | Precisa que uma única caixa lide com muitos streams |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Orin Nano / Orin NX | 7 / 8 | Vários quartos e deseja margem para crescer |

As contagens de streams são derivadas da vazão medida; apenas um único stream foi medido de ponta a ponta — faça um teste de carga no seu próprio local antes de se comprometer com um número.

Além disso, tudo o que você precisa é de uma rede — o dispositivo e o receptor só precisam estar na mesma LAN; não é necessário acesso à internet.

## Como implantar no local

Dois passos: primeiro acerte a posição da câmera, depois instale o software.

### Etapa 1: instalar a câmera — o posicionamento define o limite máximo {#step-1-mount-the-camera}

:::tip[O posicionamento da câmera importa mais do que o hardware]
Fixe a montagem, a 2–3 m da pessoa, de lado ou em um ângulo, com ombros e quadris visíveis. A própria queda precisa acontecer na câmera — se a pessoa já estiver deitada quando o dispositivo iniciar, ele apenas relata a pose e não dispara um alerta. Ângulos retos de cima para baixo, tomadas amplas de corredores longos e móveis bloqueando a maior parte da pessoa prejudicam visivelmente a precisão.
:::

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/camera-placement-be3fb598.svg" alt="Posicionamento da câmera: uma montagem lateral ou oblíqua a 2–3 m funciona; tomadas retas de cima, planos abertos e vistas ocluídas não funcionam"/>
</div>

### Etapa 2: instalar o software — quatro passos {#step-2-install-the-software}

Instruções passo a passo para cada dispositivo estão na página de reference design — escolha ali uma configuração para o seu local e baixe o pacote de aplicativo correspondente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e baixe o pacote do aplicativo 🖱️</font></span></strong>
    </a>
</div><br />

O fluxo geral:

1. **Escolha uma configuração** — Responda a três perguntas na página de reference design (se você tem uma câmera, a que distância da zona de queda, quantos streams) e ela retorna uma combinação de dispositivos correspondente.
2. **Instale o pacote do aplicativo** — Baixe o pacote para esse dispositivo e instale-o. O modelo, o runtime e os limiares de decisão são enviados congelados no pacote — as mesmas configurações avaliadas nos dados medidos abaixo — portanto, não há treinamento ou ajuste a fazer.
3. **Preencha duas configurações** — o endereço da fonte de vídeo (ignore isto com a reCamera) e um nome de dispositivo. O nome do dispositivo é o primeiro segmento do tópico da mensagem; nomeie por quarto ou leito para que vários dispositivos no mesmo receptor nunca se sobrescrevam. A captura de tela abaixo é a página de gerenciamento de dispositivos na plataforma de implantação: escolha "Embedded" e depois preencha o IP do dispositivo e a porta ADB.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/recamera-pro-firmware-update-a9539b3d.gif" alt="Gerenciamento de dispositivos → Embedded → reCamera Pro, expandido para preencher endereço e porta ADB"/>
</div>

4. **Verifique a pré-visualização para confirmar o enquadramento** — Depois de instalado, o app mostra um feed ao vivo com um esqueleto e o estado sobrepostos à pessoa. Confirme que a câmera realmente vê o que precisa antes de configurar as notificações. A captura de tela abaixo é a página de pré-visualização do reCamera Pro, usada para demonstrar as transições de estado do painel — **o rótulo de status é uma reprodução, não evidência de avaliação**; veja "dados medidos" abaixo para os números reais.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="A transição de estado de normal para caído, mostrada na pré-visualização do App Center do reCamera Pro"/>
</div>

Da instalação à execução: cerca de meia hora para a reCamera. Jetson leva mais tempo, porque o mecanismo de inferência precisa ser construído no dispositivo na primeira vez (461 segundos ou mais, medidos).

## Como conectá-lo ao seu próprio sistema

O dispositivo publica eventos para o broker MQTT em execução nele próprio (porta 1883); seu sistema apenas se inscreve. Três maneiras de se conectar:

- **Home Assistant** — Nenhuma configuração necessária. O dispositivo transmite via o protocolo de descoberta automática, e quatro entidades aparecem diretamente no HA: um sensor de queda, estado atual, id do evento e presença — conecte-as às suas automações.
- **NVR / sistemas de chamada de enfermagem** — Inscreva-se em `<device>/fall-detection/results`. Se tudo o que você quer saber é "alguém caiu", observe `fall_event` no payload — ele é definido apenas uma vez, no momento em que o estado entra em "fallen", então uma queda o aciona uma vez, não repetidamente enquanto a pessoa estiver no chão.
- **Sistema personalizado / API** — Inscreva-se da mesma forma; o payload também carrega `person_count`, `fallen_count` e o `track_id` / `state` / `bbox` de cada pessoa — o suficiente para construir seu próprio painel. A reCamera adicionalmente expõe RTSP 8554 `/live0` para o feed ao vivo.

`<device>` é o nome que você preencheu anteriormente — nomeie por quarto ou leito para que vários dispositivos no mesmo broker nunca se sobrescrevam.

### Tópicos completos e payload

| Tópico / porta | Payload | Retido |
|---|---|---|
| `<device>/fall-detection/results` (multi-stream: `.../results/{stream_id}`) | Um JSON por frame: `state`, `fall_detected`, `fall_event`, `event_id`, `person_count`, `fallen_count`, além de `track_id` / `state` / `bbox` para cada entrada em `persons[]` | Não |
| `<device>/fall-detection/status` | `online` / `offline`, publicado via o last will do MQTT | Sim |
| `homeassistant/` | Configuração de descoberta automática — sensor de queda, estado, id do evento, presença | Sim |
| RTSP 8554 `/live0` (reCamera) | Vídeo ao vivo para pré-visualização e NVR | — |

O id do stream também é escrito no payload, então consumidores a jusante não precisam analisar o tópico para saber a origem. `fall_event` é definido apenas uma vez, no momento da transição de estado, então uma automação dispara uma vez por queda em vez de repetidamente enquanto a pessoa estiver no chão.

O broker também reside no host do detector: a reCamera usa o broker embutido, e toda configuração de reComputer sobe `eclipse-mosquitto:2` ao lado do detector — a porta 1883 é servida pelo próprio host. Nenhum broker externo é necessário, e nenhuma etapa nessa cadeia requer acesso à internet.

## Para engenheiros: detalhes de implementação

O código-fonte inclui conversão de modelo por plataforma, orquestração Docker e scripts de treinamento de pesos de decisão.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

O que segue é o que você precisa saber sem ler o código-fonte.

### Estimativa de pose: um modelo, quatro runtimes

Cada plataforma executa a mesma família de modelos de pose 640² com limiares idênticos (`score_threshold` 0.35, `keypoint_threshold` 0.25, `nms_threshold` 0.45, `max_fps` 15). O que difere é o runtime e como o modelo chega ao dispositivo:

| Host do detector | Modelo de pose | Precisão | Runtime | Entrega do modelo |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | NPU da câmera | Instalado a partir do console como um app de câmera |
| reComputer J30 / J40 | YOLO11s (Orin Nano) / YOLO11m (Orin NX) | FP16 | TensorRT | O engine é **construído no dispositivo** — vinculado àquela arquitetura de GPU e versão do TensorRT, então não pode ser distribuído pré-compilado. Medido no Orin Nano: 461 s para YOLO11s |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` é distribuído por placa; um modelo compilado para RK3588 não carrega em RK3576 |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | HEF oficial pré-compilado, verificado contra um digest fixo |

Os números de acurácia foram produzidos em um Orin Nano (JetPack 6.2, TensorRT 10.3, CUDA 12.6, SM87). A imagem Jetson é distribuída sem CUDA, TensorRT, OpenCV e GStreamer — as cópias do host são montadas como somente leitura, razão pela qual a imagem tem cerca de 206 MB em vez de vários GB. A imagem RK monta `librknnrt.so` a partir do host. A implantação Hailo é travada em ABI para **HailoRT 4.21**: plugin GStreamer, biblioteca de usuário e driver de kernel devem corresponder.

### Lógica de decisão: por que sentar-se rapidamente não dispara um falso alarme

A saída de pose sozinha não consegue separar "uma queda" de "sentar-se rapidamente". A camada de decisão é rastreamento por pessoa mais uma máquina de estados, idêntica em design em todas as plataformas:

| Estágio | Gatilho | Valor configurado |
|---|---|---|
| Associação de trilha | IoU ou distância do centro para uma trilha existente | `iou_threshold` 0.20, `center_distance_threshold` 0.25, `max_missed_frames` 8 |
| normal → suspeito | Pelo menos 2 recursos se mantêm simultaneamente | ângulo do torso > 55°, razão de aspecto da bbox > 1.25, velocidade de queda do quadril > 0.25 dentro de uma janela de 0.75 s |
| suspeito → caído | Os recursos continuam se mantendo **e o modelo temporal confirma** | `confirmation_sec` 0.80, `temporal_confirmation_required` true; se eles pararem de se manter, o estado expira após `suspected_timeout_sec` 1.50 |
| Oclusão | A trilha sobrevive a um breve desaparecimento | `occlusion_grace_sec` 0.75 |
| caído → recuperando | De volta a uma pose em pé | ângulo do torso < 35° e razão de aspecto < 1.10, mantidos por 2.00 s |
| Supressão de repetição | Uma queda conta uma vez | `cooldown_sec` 3.00; `fall_event` dispara apenas na transição de entrada |

Um pequeno modelo temporal fica em cima desses recursos. Seus pesos são **reextraídos e recongelados por plataforma** a partir da própria saída de pose real daquela plataforma (`temporal_profile: auto`) — nunca emprestados entre plataformas, porque um modelo de pose diferente produz trilhas diferentes.

**Recursos geométricos sozinhos não podem confirmar uma queda.** A configuração distribuída define `fall.temporal_confirmation_required: true`: recursos geométricos só podem avançar o estado para "suspeito" e conduzir a recuperação; entrar em "fallen" requer um positivo do modelo temporal em uma trilha ativa. Uma trilha perdida ou expirada não pode disparar um evento, e uma pessoa já deitada no primeiro frame também não conta. Este é o principal mecanismo que mantém os falsos positivos baixos — desligue-o, e recursos geométricos confirmarão quedas por conta própria.

## Apêndice: dados medidos

Esta seção é para quem quiser conferir os números — você pode pulá-la e as etapas de implantação ainda funcionarão. Tudo abaixo é medido em um conjunto de dados público. **Não é uma certificação médica ou de segurança de vida** — o desempenho no mundo real depende da posição da câmera e da população real. Relatórios brutos por clipe e checksums estão no repositório em [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation) — cada número nesta página remete a uma execução específica registrada lá.

### Resultados de acurácia

Média de seis configurações congeladas: **acurácia 85,8%, recall de queda 95,8%, especificidade 77,8%, F1 85,7%, latência média de alerta 1,4 s**. Configurações individuais ficam entre 81,5% e 88,9%.

Essas seis configurações são Jetson YOLO11s, Jetson YOLO11m, reCamera Pro, RK3576, RK3588 e Hailo-8, cada uma com sua própria configuração congelada. A baseline v0.2 da reCamera 2002 (74,1% de acurácia) é excluída da média — ela executa uma geração anterior de pesos temporais. Detalhes por configuração estão na [tabela unificada de acurácia](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表) do repositório.

**Como foi medido**

- Conjunto de dados [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos) (MIT), dividido por sujeito.
- Os Sujeitos 1–2 treinam o modelo temporal; o Sujeito 3 sozinho seleciona recursos, largura da camada oculta, regularização, o limiar de probabilidade e a contagem de frames de confirmação; depois que a configuração é congelada, os pesos são reajustados nos Sujeitos 1–3.
- O Sujeito 4 é o conjunto de teste reservado e é **lido exatamente uma vez**. Dez clipes usados anteriormente para testes rápidos do pipeline foram removidos, restando **27 clipes** (12 quedas / 15 atividades da vida diária).
- Todo o vídeo é reamostrado para 15 FPS, com rastreamento e estado temporal reiniciados antes de cada clipe.
- Um alerta disparado mais de 0,5 s antes do início da queda anotada conta como falso positivo, não como acerto.
- Cada plataforma reextrai trilhas, retreina e congela os pesos de decisão a partir da sua própria saída real de pose — nada é compartilhado entre plataformas, porque um modelo de pose diferente produz trilhas diferentes.
- Reproduza com: `platforms/jetson/tools/evaluate_videos.py`. O conjunto de dados não é distribuído com o repositório — obtenha-o você mesmo.

**Por que não há comparação de acurácia entre dispositivos**: o conjunto de teste de 27 clipes tem uma resolução de 3,7 pontos percentuais — um clipe é um passo — e RK3576, RK3588 e Hailo chegam exatamente na mesma pontuação (88,9%). O tamanho do modelo também não se correlaciona com a pontuação. **Escolha um dispositivo pela contagem de streams, hardware existente e fonte de vídeo — não pela acurácia.**

### Quais dispositivos testamos

Sete dispositivos, quatro aceleradores. "End-to-end" significa que todo o caminho desde a ingestão do stream até um alerta foi executado e pontuado no conjunto de teste; "inference benchmark" significa que apenas a velocidade de detecção foi medida.

| Dispositivo | Acelerador | Modelo enviado | End-to-end | Inference benchmark |
|---|---|---|:-:|:-:|
| reCamera 2002 | NPU integrada | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | NPU integrada (RK) | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | NPU RK3576 | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | NPU RK3588 | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 Series | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | GPU Orin Nano | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | GPU Orin NX | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

A latência por quadro por dispositivo, throughput multi-stream e escopo de medição estão em [resultados detalhados de desempenho](#性能实测详表) abaixo.

### Resultados detalhados de desempenho {#性能实测详表}

#### Quão rápido é cada dispositivo

O mesmo modelo em dispositivos diferentes: **YOLO11n-Pose, entrada 640²**. Os valores por quadro são apenas de inferência no acelerador (sem decodificação RTSP, sem pós-processamento); o throughput agregado é a maior taxa total de quadros medida entre 1–6 contextos concorrentes. Precisões diferentes nunca são comparadas na mesma tabela. As linhas de Hailo-8 foram medidas em um bench Raspberry Pi 5 + Hailo-8 M.2; as tabelas nomeiam R2035-12, o modelo reComputer R2000 Series que carrega o mesmo Hailo-8 (26 TOPS).

FP16:

| Plataforma | Modelo de pose | Por quadro | Agregado | Streams limitados por inferência | Streams recomendados |
|---|---|---:|---:|---:|---:|
| reComputer RK3576 | YOLO11n | 56,1 ms | 29,2 FPS | 1 | 1 |
| reComputer RK3588 | YOLO11n | 51,4 ms | 51,4 FPS | 3 | 1 |
| reComputer J30 Series (J3011) | YOLO11n | 3,7 ms | 270,7 FPS | 18 | 7 |
| reComputer J40 Series (J4012) | YOLO11n | 3,3 ms | 306,2 FPS | 20 | 8 |

INT8:

| Plataforma | Modelo de pose | Por quadro | Agregado | Streams limitados por inferência | Streams recomendados |
|---|---|---:|---:|---:|---:|
| reCamera 2002 | YOLO11n | 53,0 ms | 10,0 FPS | 1 | 1 |
| reCamera Pro | YOLO11n | 35,9 ms | 18,1 FPS | 1 | 1 |
| reComputer RK3576 | YOLO11n | 36,2 ms | 42,1 FPS | 2 | 1 |
| reComputer RK3588 | YOLO11n | 29,8 ms | 90,4 FPS | 6 | 2 |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s ▲ | 6,9 ms | 393,9 FPS | 26 | 16 |
| reComputer J30 Series (J3011) | YOLO11n ＊ | 2,7 ms | 363,9 FPS | 24 | 9 |
| reComputer J40 Series (J4012) | YOLO11n ＊ | 2,5 ms | 408,0 FPS | 27 | 10 |

**▲ A linha de Hailo usa o tamanho s porque o tamanho n é mais lento nesse acelerador.** O diretório hailo8 do Model Zoo oficial v2.15 envia apenas `yolov8s_pose` e `yolov8m_pose` — nenhum modelo de pose tamanho n. Nós mesmos compilamos um YOLO11n-Pose com Hailo Dataflow Compiler 3.31.0 (640², INT8, calibração GMDCSA de 64 quadros) e medimos **9,01 ms / 92,2 FPS** na mesma placa, contra 6,87 ms / 393,9 FPS para o tamanho s: a latência por quadro é da mesma ordem (+31%), mas o throughput difere em 4,3×. O compilador dividiu o 11n em **3 contextos**, trocando pesos a cada quadro; o modelo s do Model Zoo é de contexto único com pesos residentes. Aos 15 FPS de que esse design precisa por stream, 92,2 FPS ainda deixam cerca de 6× de folga — a diferença só aparece na densidade multi-stream. Esse resultado reflete a compilação do HEF, não o teto do YOLO11n no Hailo-8.

**＊ O INT8 no Jetson não é implantável hoje; é apenas uma referência de velocidade.** O engine é construído diretamente de `trtexec --int8` sem calibrador e sem conjunto de calibração, então as faixas dinâmicas são arbitrárias: a velocidade do kernel é real, as detecções não são utilizáveis. O `build_engine.sh` upstream passa apenas `--fp16`. O INT8 da RK é o oposto — calibrado em 240 quadros GMDCSA, e em quadros fora do conjunto de calibração sua contagem de detecções por quadro corresponde exatamente ao FP16, então é implantável.

#### Filmagens reais rodam mais devagar

Ambas as tabelas acima recebem **quadros sintéticos em branco 640** e medem apenas a inferência no acelerador. Filmagens reais são mais lentas, porque qualquer coisa no quadro precisa passar por decodificação do raw head, DFL, keypoints e NMS:

| Plataforma | Modelo de pose | Acelerador | Pipeline em quadro real | Delta de pré/pós |
|---|---|---:|---:|---:|
| reCamera 2002 | YOLO11n INT8 | 52,74 ms ◇ | 53,23 ms | 0,012 ms |
| reCamera Pro | YOLO11n INT8 | 35,2 ms ✦ | 36,6 ms | 1,4 ms |
| reComputer RK3576 | YOLO11n FP16 | 69,6 ms | 70,8 ms | 1,2 ms |
| reComputer RK3588 | YOLO11n FP16 | 54,4 ms | 54,8 ms | 0,4 ms |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s INT8 | 6,9 ms | 8,77 ms | 1,9 ms |
| reComputer J30 Series (J3011) | YOLO11n FP16 | 3,7 ms ◆ | 5,57 ms | 1,9 ms |
| reComputer J40 Series (J4012) | YOLO11n FP16 | 3,3 ms ◆ | 5,18 ms | 1,9 ms |

"Pipeline" = inferência + pré-processamento + decodificação do raw head / DFL / keypoints / NMS. Ele **exclui** decodificação RTSP, rastreamento, o MLP temporal e MQTT. O valor de 5,18 ms do Orin NX vem de 400 quadros medidos, os 5,57 ms do Orin Nano de 1359, e os 8,77 ms do Hailo de 1951 (dos quais a inferência em hardware é 6,87 ms e a decodificação mais NMS respondem por apenas 0,052 ms).

- **◇ O reCamera 2002 não consegue separar uma coluna "apenas acelerador"**: ele expõe um único temporizador cujo escopo é exatamente a definição de pipeline desta tabela, então 52,74 ms já incluem pré e pós-processamento (250 quadros medidos, com e sem uma pessoa em cena são quase idênticos).
- **✦ A linha do reCamera Pro é medida com clocks travados** (NPU 950 MHz, CPU em governor performance). O governor padrão `rknpu_ondemand` foi medido estabilizando em 800 MHz e 43,1 ms — uma diferença de 23% na mesma placa apenas pelo governor de frequência. RK3576 / RK3588 foram medidos sempre rodando no seu passo máximo e não são afetados.
- **◆ A coluna Jetson é `trtexec` computação pura de GPU** (sem cópias para o host), enquanto a coluna RK é `rknnlite.inference()`; os dois escopos diferem por definição. A coluna comparável é a do pipeline. Com base nisso o Jetson é cerca de 11× mais rápido que o RK3588 e cerca de 14× mais rápido que o RK3576.

#### Como ler as contagens de streams

"Streams limitados por inferência" = throughput agregado ÷ 15 FPS. Ele conta apenas o acelerador e é um teto teórico. "Streams recomendados" desconta isso — o throughput end-to-end medido na RK atinge apenas 28%–44% do teto de inferência, porque a decodificação RTSP, o rastreamento, a máquina de estados e o MQTT também consomem CPU e largura de banda de memória. Com outras cargas ainda rodando na placa, o throughput end-to-end medido foi de cerca de 8,6 FPS no RK3588 e cerca de 4,9 FPS no RK3576.

**Condições de medição**: ambos os Jetsons foram medidos com cargas co-residentes paradas. Esse passo é necessário — se uma carga co-residente ocupa o acelerador os números se invertem: o Orin NX mediu 264,9 FPS enquanto rodava sua própria carga de inferência, menor que o Orin Nano e o oposto do seu compute relativo; com ela parada, 306,2 FPS. O Orin Nano mediu de forma idêntica nos dois casos (270,5 vs 270,7) porque sua carga não toca a GPU.

### Limites conhecidos

- **O enquadramento decide a acurácia.** Os números acima vêm de uma câmera fixa, enquadramento de médio alcance, em ambiente interno, com ombros e quadris visíveis. Uma montagem lateral ou oblíqua a 2–3 m funciona; tomadas de cima para baixo, de corredor longo e amplo e com forte oclusão por móveis têm desempenho pior.
- **Um conjunto de dados diferente reduz o recall.** No conjunto de dados externo independente RealBiomFall (34 clipes, todas quedas), o recall medido cai para 58,8% no reCamera e 52,9% para o YOLO11m implantado no reComputer J30 / J40 — o fator limitante é a taxa de detecção de pessoas do modelo de pose, não a decisão de queda. Antes de um rollout em produção, reextraia trilhas de filmagens no local, retreine e recongele os pesos temporais.
- **A própria queda precisa acontecer na câmera.** Se alguém já estiver deitado quando o detector começar, ele relata a pose mas não produz evento.
- **Apenas single-stream foi medido end-to-end.** As contagens de streams acima são valores derivados — faça teste de carga no seu próprio local para qualquer coisa além de um stream.

## Painel de alarme (mesclado a partir do design aposentado Eldercare Alarm)

O painel de alarme é enviado como parte deste design: incluído no stack do compose nos presets reComputer J30 / J40, RK e R2000, e um host extra opcional nos dois presets de reCamera. Tudo abaixo foi escrito para a página independente Eldercare Alarm e se aplica sem mudanças ao painel aqui.

:::caution[Aviso de uso]
Este é um **alarme assistivo**, não um dispositivo médico e não um produto certificado de resposta a emergências. Ele não diagnostica, trata ou substitui o julgamento de um cuidador, e não oferece garantia contra alarmes perdidos. Um alarme é um aviso; a decisão e a resposta permanecem com uma pessoa. Veja o [Apêndice: dados medidos](#appendix-measured-data) para saber o que os números cobrem antes de citar qualquer um deles.
:::

### O que esta solução faz

Um detector de quedas já publica eventos. Isto adiciona a parte entre "a câmera viu algo" e "uma pessoa lidou com isso": cada quarto é uma zona com suas próprias regras, um alarme é aberto, alguém de plantão o confirma ou descarta em um console de uma página, e o alerta confirmado sai como um webhook ou uma mensagem MQTT com o nome do operador. Construído para residências assistidas, cuidados domiciliares e qualquer local onde um alarme precise ser defensável depois.

- Implementação open source: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Escolhendo uma configuração e fazendo o deploy: [reference design page](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Três tipos de alarme, definidos por zona</h3>
                <p>Um evento de queda vindo do detector; uma zona vazia além do seu <code>no_person_timeout</code>; uma pessoa cujo centro da bbox não se moveu além do seu <code>no_motion_timeout</code>. Um banheiro e um quarto recebem timeouts diferentes.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Uma etapa de confirmação, não apenas um push</h3>
                <p>Janela de evidência de 5 s, depois 60 s para um operador. Confirmar e descartar são ambos registrados em nome de quem pressionou.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Entrega que você pode auditar</h3>
                <p>Um alarme confirmado que não for notificado em 5 s passa para escalado e tenta novamente a cada 30 s. Medido em replay local: 3 de 3 alarmes em fila recuperados após uma interrupção de 4 s, 0 duplicados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Sem vídeo na notificação</h3>
                <p>Id do alarme, tipo, zona, id do stream, timestamp, operador, chave de idempotência. A captura de snapshot é uma opção que vem desativada por padrão.</p>
            </div>
        </li>
    </ul>
</div>

#### O que o console mostra

O console de confirmação é toda a superfície do operador: a lista de alarmes com o estado atual de cada um, o veredito da checagem por voz quando essa opção está ativada, e botões de confirmar/descartar que gravam o nome do operador na trilha de auditoria. É um app React em `@sensecraft/ui-kit`, servido pelo próprio serviço de alarme em HTTP 8080.

A captura de tela publicada desse console foi **feita contra dados de demonstração reproduzidos** — `evaluation/replay/replayer.py --scenario fall` gerando dados sintéticos de bbox e de trilhas. Não há filmagem de câmera nela e nenhuma pessoa real ou derivada de dataset. Trate-a como uma referência de UI, não como evidência de desempenho em campo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-en-97ba47b3.png" alt="Tela inicial do console de confirmação: lista de quartos à esquerda, fluxo de alarmes à direita, cada alarme com tipo, zona e estado atual"/>
</div>

Abrir um alarme mostra todo o seu histórico — horário do evento, transições de estado e quem pressionou confirmar.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-en-ba109d0a.png" alt="Detalhe de um único quarto: configuração de zonas, ocupação atual e o histórico de alarmes para esse quarto"/>
</div>

### De que hardware você precisa

Três coisas: o que quer que produza os eventos de detecção, um host que decide o que se torna um alarme e o que quer que receba a notificação. O terceiro é o seu próprio sistema, então a escolha é realmente sobre os dois primeiros.

**① A fonte de eventos** — ou câmeras RTSP que você já possui, caso em que o detector é implantado no host de alarme e aponta para o seu stream, ou câmeras reCamera que já executam o próprio detector, caso em que nada na detecção muda.

**② O host de alarme** — é a máquina que executa zonas, timeouts, a máquina de estados, o repositório de auditoria em SQLite, a página de confirmação e a fila de entrega. Em dois dos três pacotes ele também executa o detector.

| | Host de alarme | Onde o detector roda | Quando escolher |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Detector, serviço de alarme, broker e console em um único Jetson | Nesta máquina, o engine TensorRT é construído no primeiro deploy | As câmeras já existem e o local ainda não tem gateway. Suporta mais streams dos três pacotes |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Mesma pilha, modelo de pose maior | Nesta máquina, YOLO11m em vez de YOLO11s | Mais quartos do que um único J3011 consegue monitorar, ou se quiser um modelo de pose maior. Mesmo pacote, uma opção diferente no formulário de deploy |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Gabinete industrial sem ventoinha | Nesta máquina, caminho crítico em C++ nativo, HEF pré-compilado | O host vai em um rack ou shaft: sem ventoinha, ampla faixa de temperatura, montagem em trilho DIN ou parede |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Câmera de IA tudo-em-um; o serviço de alarme roda em uma máquina que você já possui | Na câmera | Ainda não há câmeras, ou as câmeras já estão detectando. O serviço de alarme é iniciado manualmente — o formulário de deploy não tem classe de dispositivo para um gateway fornecido por você |

**Como ler a alegação de capacidade.** “Suporta mais streams dos três” vem da descrição do pacote upstream, não de uma medição feita aqui — nenhum teste de carga multi-stream foi executado em nenhum dos três dispositivos. Dimensione o host a partir do seu próprio teste de carga.

Outros pré-requisitos: um broker MQTT acessível na porta 1883 (os pacotes Orin e Hailo sobem um; o pacote reCamera pode usar aquele para o qual as câmeras já publicam), uma visão interna fixa nos pacotes Orin e Hailo e um endpoint de webhook ou um assinante MQTT que receberá as notificações.

### Como fazer o deploy no local

Duas partes: colocar as câmeras onde as zonas funcionarão e depois instalar e configurar.

#### 1. Câmeras e zonas

:::tip[Zonas são retângulos normalizados sobre o frame da câmera]
Mover ou redirecionar uma câmera invalida o layout de zonas **sem gerar qualquer erro**. O retângulo ainda existe; ele apenas cobre uma parte diferente do cômodo. Verifique novamente cada zona após qualquer alteração física em uma câmera.
:::

Nos pacotes Orin e Hailo você também precisa de uma visão interna fixa em que uma pessoa permaneça visível ao longo do caminho esperado de queda — o detector subjacente é o mesmo detector EdgeFallKit documentado no wiki de detecção de quedas, com as mesmas restrições de posicionamento (uma visão lateral ou de canto a 2–3 m, ombros e quadris visíveis).

Duas decisões de modelagem de zonas determinam quanto ruído o local produz:

- **`no_motion` será acionado durante o sono** a menos que a zona exclua a cama ou o timeout seja maior que um cochilo normal. Movimento é o deslocamento do centro da bbox de uma pessoa rastreada acima de `motion_threshold`, não fluxo óptico ou velocidade de keypoints, então pequenos movimentos sob um cobertor não contam.
- **Oclusão pode gerar um falso `no_person`.** Uma zona só é rearmada depois que a pessoa é vista novamente, então uma oclusão produz um alarme em vez de uma série repetida — mas ainda assim produz um.

#### 2. Software: quatro etapas

As etapas por dispositivo estão na reference design page, onde responder a algumas perguntas sobre o local também fornece o pacote de aplicação correspondente para download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />


1. **Escolha uma configuração** — o configurador pergunta o que há na parede e onde o host ficará, e retorna um dos três pacotes.
2. **Instale o pacote** — os pacotes Orin e Hailo implantam o detector e o serviço de alarme juntos. O pacote reCamera não instala nada para detecção; o serviço de alarme é iniciado manualmente em um gateway que você fornece.
3. **Preencha a configuração** — zonas e seus `no_person_timeout` / `no_motion_timeout`, as janelas da máquina de estados, a URL do webhook e o nome do dispositivo que forma o primeiro segmento do tópico. As zonas são desenhadas diretamente na imagem e entram em vigor ao salvar:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-draw-zone-d715c416.gif" alt="Desenhando uma zona na visualização ao vivo; ela ainda está no lugar após salvar e recarregar"/>
</div>

A página de configuração mostra a visualização ao vivo daquele cômodo à esquerda e os dois timeouts da zona à direita. Quando a câmera está offline, a visualização volta para o último snapshot e a configuração ainda é editável.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/config-live-view-en-e238b3a7.png" alt="Página de configuração da zona: visualização ao vivo à esquerda, timeouts de ausência de pessoa e de ausência de movimento à direita"/>
</div>
4. **Verifique** — dispare um alarme de teste e observe-o completar: o alarme aparece no console, uma ação do operador é registrada para ele, e o endpoint do webhook recebe um POST com uma chave de idempotência. Abaixo, um alarme injetado vai de aparecendo a confirmado:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/alarm-trigger-c29807f5.gif" alt="Um alarme de queda injetado aparece no console, entra na janela do operador e muda para notificado quando confirmado"/>
</div>

O estado do detector e do serviço no próprio host está no console do dispositivo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/device-console-en-76e94f0c.jpg" alt="Console do dispositivo no host de alarme: estado de execução do detector e do serviço de alarme"/>
</div>

<!-- TODO image: on-site installation photo (camera mounted in a room) — needs a field shoot -->

O tempo estimado é de **45 minutos**, classificado como **intermediário**. O pacote Orin é o mais demorado porque a primeira implantação constrói um mecanismo TensorRT no dispositivo.

:::caution[The alarm service image is not published yet]
No momento do empacotamento, ele existe apenas como uma build local a partir do `docker/Dockerfile` do projeto upstream. Construa e retague, ou faça o push, antes que uma implantação Orin ou Hailo possa ser bem-sucedida. Os digests da imagem do detector estão registrados como pendentes em `eldercare-alarm/release/PINNING.md`.
:::

### Como conectá-lo ao seu próprio sistema

O serviço de alarme é a única coisa com a qual você integra, e ele é executado no host de alarme. Três caminhos de entrada, dependendo do que você já tem:

- **Um sistema de chamada de enfermagem ou um serviço de paging** — use o webhook. Um POST por alarme confirmado, carregando o id do alarme, tipo, zona, id do stream, timestamp e operador. Faça a desduplicação com base na chave de idempotência, não no timestamp.
- **Um site baseado em MQTT** — ligue o barramento de alarme e assine `eldercare/alarm/<zone-id>`. Mesmo payload do webhook. Ele vem desligado por padrão.
- **Seu próprio dashboard ou sistema de registro** — faça polling ou leia `GET /api/alarms` em HTTP 8080 para os registros completos de alarme, incluindo histórico de estados e o operador em cada um.

**Nomenclatura.** `<device-name>` é o primeiro segmento do tópico de resultados do detector e é definido por você no formulário de implantação. Dê nome por cômodo, andar ou site para que vários dispositivos em um broker permaneçam separáveis. `stream_id` é lido do payload da mensagem e nunca extraído do tópico, então uma reescrita de broker ou um prefixo de bridge não podem redirecionar uma zona silenciosamente.

#### Tópicos e payloads completos

| Tópico / porta | Payload | Padrão |
|---|---|---|
| HTTP 8080 `GET /api/alarms`, página em `/` | Registros de alarme: `id`, `kind`, `zone_id`, `stream_id`, `state`, `event_timestamp`, `operator`. A mesma página atende confirmar e descartar | On |
| HTTP POST para sua URL de webhook | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}` mais um cabeçalho de idempotência. Sem snapshot, sem vídeo | On assim que a URL é definida |
| MQTT 1883 `eldercare/alarm/<zone-id>` | Mesmo payload do webhook | Off |
| MQTT 1883 `<device-name>/fall-detection/results/<stream-id>` | O stream `fall_result_v1` que este serviço consome: `stream_id`, `person_count`, `fall_event`, bbox por pessoa | Input, publicado pelo detector |

**O campo mais facilmente mal utilizado é `state`.** `escalated` significa que o prazo de notificação foi perdido; ele não volta para `notified` quando uma tentativa posterior é bem-sucedida. Um dashboard que trata `escalated` como um estado de falha mostrará alarmes que, na verdade, foram entregues — esse é o objetivo do campo.

O broker é executado no host de alarme nos pacotes Orin e Hailo, e nas câmeras ou no gateway no pacote reCamera. Nada no caminho precisa da internet. O broker incluído permite conexões anônimas para comissionamento em uma LAN confiável; coloque credenciais e TLS nele antes que o dispositivo seja acessível de qualquer outro lugar.

### Para engenheiros: detalhes de implementação

O serviço de alarme é o próprio código do projeto upstream; o detector abaixo dele é o EdgeFallKit, consumido apenas por meio de seu contrato de saída publicado.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong>
    </a>
</div><br />

#### Uma camada de decisão, três runtimes abaixo

A lógica de alarme é idêntica nos três pacotes — mesma máquina de estados, mesmo esquema SQLite, mesma fila de entrega. O que difere é onde o detector é executado e o que o executa.

| Host de alarme | Localização do detector | Modelo de pose | Runtime | Entrega do modelo |
|---|---|---|---|---|
| reComputer J30 (Orin Nano 8GB) | Mesmo host | YOLO11s-Pose | TensorRT | Engine construída no dispositivo durante a primeira implantação |
| reComputer J40 (Orin NX 16GB) | Mesmo host | YOLO11m-Pose | TensorRT | Engine construída no dispositivo durante a primeira implantação |
| reComputer R2000 Series industrial (R2035-12) | Mesmo host | YOLOv8s-Pose | HailoRT 4.21, hot path nativo em C++ | HEF pré-compilado baixado, não construído no dispositivo |
| Gateway que você fornece | Nas câmeras reCamera | O que quer que o detector do App Center da câmera forneça | NPU da câmera | Não gerenciado por este pacote |

Restrições de plataforma que vale a pena conhecer antes de você se comprometer:

- **Hailo é travado em ABI para HailoRT 4.21** — plugin, biblioteca de usuário e driver se movem juntos, e nenhum outro processo pode manter o acelerador.
- **O detector Jetson deve publicar frames vazios.** Seu padrão é não enviar nada quando ninguém está em cena, o que deixa o timeout de `no_person` sem entrada. O pacote Orin define `publish_empty_frames: true`; se você substituir a configuração de detector fornecida pela própria do dispositivo, defina isso novamente. O runtime Hailo não tem tal chave e não precisa dela.
- **Confirme os formatos exatos de tópico e payload da reCamera no seu próprio dispositivo**, juntamente com o comportamento de publicação por frame do Hailo e a substituição do Jetson acima.

#### A máquina de estados: por que um evento não é uma notificação

Um `fall_event` bruto não é um alarme. A camada entre eles é o que torna a saída defensável.

| Estágio | Gatilho | Valor configurado |
|---|---|---|
| Janela de evidência | Alarme abre, frames adicionais do detector são coletados antes que alguém seja acionado | `statemachine.evidence_sec` 5.0 |
| Janela do operador | Console mostra o alarme e aguarda confirmação ou descarte | `statemachine.confirm_window_sec` 60.0 |
| Comportamento de timeout | Ninguém respondeu dentro da janela do operador | `statemachine.confirm_timeout_action` — padrão é tratar como real e notificar |
| Prazo de notificação | Alarme confirmado deve ser entregue dentro disso ou será escalado | `notify_deadline_sec` 5.0 |
| Retry | Alarmes `escalated` continuam tentando novamente e permanecem `escalated` | `retry_interval_sec` 30.0 |
| Zona: vazia | `person_count` permanece 0 além do timeout da zona | `no_person_timeout`, por zona |
| Zona: imóvel | O deslocamento do centro da bbox rastreada permanece abaixo do limite além do timeout da zona | `no_motion_timeout` por zona, `motion_threshold` 0.02 normalizado |

**O gate necessário é a chave de idempotência**, não nenhuma das janelas. Ela é `zone:kind:event_timestamp:global_event_id`, e tanto a tabela de alarmes quanto a tabela de notificações possuem índices únicos sobre ela. Remova isso e um stream de eventos reproduzido produz alarmes duplicados e entregas duplicadas; todo o resto na tabela acima apenas altera o tempo.

A retenção é de 90 dias para eventos, transições de estado, operadores e recibos de entrega; 7 dias com uma limpeza diária para mídia, se a mídia for habilitada em algum momento.

#### Check-in por voz (opcional, desligado)

Quando habilitado, um alarme de queda acionado faz o serviço falar um prompt no cômodo e ouvir por alguns segundos, **em paralelo com** a janela de evidência em vez de depois dela. A assimetria é deliberada: um pedido de ajuda, nenhuma resposta ou uma resposta ilegível confirma o alarme imediatamente e pula o restante da janela do operador, enquanto "I'm fine" *não* fecha o alarme por padrão — ele o marca para revisão e deixa o tempo normal continuar. Um "I'm fine" mal ouvido suprimiria uma queda real; um alarme confirmado que ninguém precisava custa ao operador alguns segundos.

O hardware de áudio é um microfone e alto-falante USB no box de computação na LAN, além de uma instância OpenVoiceStream para TTS e ASR em streaming. As câmeras não são o caminho de áudio — nenhum modelo de reCamera tem um microfone utilizável confirmado, e o SG2002 não pode hospedar ASR local de forma alguma.

**Privacidade.** O áudio nunca é gravado em disco. O PCM bruto vive na memória por uma janela de escuta e é liberado quando o veredito é produzido. O que é persistido são o veredito, a confiança, a latência e o texto transcrito; `store_transcript: false` descarta o texto também.

### Apêndice: dados medidos {#appendix-measured-data}

Esta seção é para quem quiser conferir os números; ignorá-la não afeta a implantação. **Nada aqui constitui certificação médica ou de segurança.**

#### O caminho do alarme, medido em reprodução local {#alarm-path-measured}

Tudo nesta tabela foi medido em um laptop com um replayer no lugar das câmeras — **reprodução local, não um dispositivo**.

| Métrica | Valor | Condições | Registro de origem |
|---|---:|---|---|
| Latência do alerta, do timestamp do evento até o envio da notificação | P50 2061 ms / P95 2093 ms | 5 reproduções de queda, 15 FPS × 12 s cada, 1 s de evidência + 1 s de confirmação automática, zona única, fluxo único, webhook em loopback | `boundary.alert_latency.yaml` |
| Atraso da detecção de ausência de pessoa em relação ao tempo limite configurado | P50 65 ms / P95 77 ms de atraso | 3 reproduções, 10 FPS × 11 s, timeout de 5 s, tick de 0,1 s, em processo, sem broker | `boundary.inactivity.yaml` |
| Recuperação de indisponibilidade, entregas bem-sucedidas únicas sobre as enfileiradas | 3 de 3, 0 duplicadas, primeira entrega 96 ms após a recuperação | Endpoint de webhook retornando 503 por 4 s, 3 alarmes enfileirados, intervalo de nova tentativa de 2 s | `boundary.offline_recovery.yaml` |
| Falsos alarmes | 0 em 0,02 horas de câmera | 72 s de reprodução silenciosa | Não é uma taxa — a execução pretendida é de 24 h |

**Como foi medido**

- Data 2026-09-05, diretório de execução `evaluation/runs/2026-09-05-smoke/` no projeto eldercare-alarm. Saídas brutas em `raw/`, condições em `conditions.yaml`, um `boundary.<metric>.yaml` por linha.
- Host: MacBook, macOS 15 (Darwin 25.5.0), arm64. Rede de loopback. Sem contêiner — o serviço foi executado diretamente.
- Os scripts dirigem o `AlarmService` real — máquina de estados real, SQLite real, webhook HTTP real — com apenas a câmera substituída por um replayer. Portanto, os números descrevem o caminho do alarme e **excluem o tempo de inferência e qualquer rede entre máquinas**.
- As janelas da máquina de estados foram encurtadas para a execução: 1 s de evidência + 1 s de confirmação automática em vez dos 5 s + 60 s fornecidos. A latência do alerta é, portanto, uma propriedade dessa configuração, não de um site — com os padrões, o mesmo caminho leva pouco mais de um minuto, por projeto e não por sobrecarga.
- Cada `boundary.*.yaml` tem valores apenas no nível `stable`. `degrading` e `failure` são `null`: nada foi carregado até o ponto de degradação, portanto nenhum limite foi encontrado.
- `reproduced_by: null` — uma pessoa, uma execução, não reproduzido de forma independente.

A latência do alerta é essencialmente a soma das duas janelas configuradas mais cerca de 60 ms de despacho. Leia a linha de falsos alarmes pelo que ela é: 72 segundos de silêncio, listados para que não possam ser citados como uma taxa.

#### Uma sessão de dispositivo, não um site

Em 2026-09-06 o loop foi fechado uma vez em uma reCamera One padrão (não PoE) via USB-RNDIS: quadros MQTT reais de `fall-detection`, um alarme de queda injetado e um alarme real de 60 s sem atividade chegaram a um webhook através do próprio broker mosquitto do dispositivo. A latência do alerta nos primeiros 5 de 10 testes injetados foi **P50 2487 ms / P95 2751 ms**; a partir do 6º, o próprio limitador de taxa do notificador (5 por 10 minutos) silenciosamente interrompeu novos envios — por projeto, não por falha. A rota de rede direta foi interceptada por uma ferramenta de rede local, então o tráfego passou por um túnel SSH; isso é um artefato do ambiente do host, não um problema do dispositivo. A recuperação após desconexão de USB não foi tentada. Registro: `eldercare-alarm/evaluation/runs/2026-09-06-recamera-one/results.md`.

Esta é uma sessão de laboratório em um único dispositivo. É evidência de que o caminho funciona de ponta a ponta; não é uma caracterização de desempenho e não diz nada sobre os pacotes Orin e Hailo.

#### Uma execução com Hailo-8 com inferência real no loop

Em 2026-09-08 o pacote Hailo foi executado de ponta a ponta uma vez em uma bancada com Raspberry Pi 5 + Hailo-8 M.2 (nomeada nesta página como reComputer R2000 Series, R2035-12, Hailo-8). O contêiner `fall-detection` executou inferência real com o YOLOv8s-Pose HEF oficial em HailoRT 4.21.0, alimentado por uma reprodução RTSP de GMDCSA-24 `subject-4/Fall/01.mp4` (640×640, 15 FPS, 4,68 s, em loop); o serviço de alarme entregou para um sink HTTP mínimo no mesmo dispositivo.

| Métrica | Valor | Condições | Registro de origem |
|---|---:|---|---|
| Queda até recebimento do webhook, inferência real Hailo-8 no loop | P50 2830 ms / P95 3061 ms (mín 2102 ms) | 10 alarmes independentes `kind=fall` de um único clipe em loop; 1 s de evidência + 1 s de confirmação automática + 2 s de rearmar; zona única, fluxo único; sink no mesmo dispositivo, portanto sem relógio entre máquinas | `eldercare-alarm/evaluation/runs/2026-09-08-harvest-pi-acceptance/results.md`, `boundary.hailo_alarm.yaml` |

- A latência é o tempo de relógio de chegada do webhook menos `payload.event_timestamp_ms`, a mesma definição de `evaluation/measure_alert_latency.py`. Todos os 10 alarmes foram concluídos dentro de `notify_deadline_sec` (5 s); nenhum entrou na fila de nova tentativa.
- As janelas foram encurtadas em relação aos 5 s / 60 s / 120 s fornecidos. Com os padrões, o mesmo caminho tem um piso de cerca de 65 s; isso não foi medido.
- Implantado manualmente via SSH, não pelo instalador, e o broker existente do dispositivo na porta 1883 foi usado em vez do incluído.
- Os alarmes chegaram em rajadas: 5 em cerca de 45 s, depois cerca de 9 minutos sem nenhum, depois 5 em cerca de 40 s. A causa não foi localizada.

#### A precisão de detecção é a do projeto base

Este design não detecta nada por si só, então sua precisão é o que o detector EdgeFallKit subjacente alcançar. Esses números — GMDCSA-24 v2.1, divididos por sujeito, Subject 4 mantido de fora e lido uma vez, 27 clipes — são publicados no projeto de referência de Detecção de Quedas, onde a precisão congelada por plataforma varia de **74,1% a 88,9%** e a latência média de alerta de **1,22 s a 1,75 s**. Cite-os como dados base com suas condições anexadas. Eles não são remensurados aqui, e a camada de alarme adiciona suas próprias janelas de confirmação em cima dessa latência de detecção.

#### O que não foi mostrado de forma alguma

- **Confirme no seu próprio dispositivo**: o override Jetson `publish_empty_frames`, o comportamento de publicação por quadro do Hailo e os formatos exatos de tópico e payload da reCamera.
- **"Aceita mais fluxos" é uma afirmação em nível de pacote** da descrição upstream, não uma capacidade medida — dimensione-a com sua própria execução.
- **A taxa de falsos alarmes vem do seu próprio site**; a execução pretendida é de 24 horas de silêncio.
- **Nenhum limite.** Nada foi carregado até o ponto de degradação, então os níveis `degrading` e `failure` de cada arquivo de limite são `null`.

Trate cada implantação como um exercício de comissionamento até ter observado um alarme real ser concluído no seu próprio site.

#### Escopo dos números acima

- **O caminho do alarme** — máquina de estados, SQLite, entrega de webhook e recuperação de indisponibilidade: medidos em reprodução local com um replayer no lugar das câmeras, não em um dispositivo.
- **Um único loop fechado de reCamera One** — uma sessão de laboratório, 2026-09-06, não um site.
- **Precisão de detecção** — é o número do projeto base EdgeFallKit, não deste design.
- **Falsos alarmes** — 0 em 0,02 horas de câmera (72 s de reprodução silenciosa). A execução pretendida é de 24 h de silêncio; execute-a no seu próprio site antes de citar uma taxa.
- **Robustez sob escurecimento e oclusão** — o script existe e precisa de clipes GMDCSA mais inferência no dispositivo para ser executado.
- **Uma única execução com Hailo-8** — 2026-09-08, um dispositivo de bancada, um clipe reproduzido, janelas de confirmação encurtadas; não é um site.
- **Os três pacotes em seu próprio hardware** — os três dispositivos-alvo estavam offline na data de medição 2026-09-05; meça-os em suas próprias unidades.

## Fontes de dados e recursos

- **GMDCSA-24 v2.1** — Tanto a avaliação de precisão quanto as imagens de demonstração nesta página vêm deste conjunto de dados, [ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos), licença MIT. Rostos nas imagens de demonstração foram pixelados e desfocados com Gaussiana: a licença cobre o direito autoral do autor, não os direitos de imagem dos sujeitos.
- **RealBiomFall** — O subconjunto de teste usado para o teste de generalização externa, 34 clipes, todas quedas, portanto apenas revocação (recall) e latência são reportadas.
- Nenhum dos conjuntos de dados é distribuído com o repositório `edgefallkit` — obtenha-os você mesmo para reproduzir a avaliação.
- O diagrama de posicionamento da câmera é desenhado internamente para esta solução.
