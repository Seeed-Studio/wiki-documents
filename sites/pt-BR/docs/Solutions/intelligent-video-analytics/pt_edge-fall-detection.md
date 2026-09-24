---
description: Construindo um sistema local de alerta de quedas para cuidados a idosos, residências assistidas e atendimento domiciliar — quais dispositivos você precisa, como implantá-lo, quais interfaces ele expõe e dados medidos em sete dispositivos
title: 'Detecção de Quedas com IA no Dispositivo: Construção, Implantação e Resultados Medidos'
keywords:
  - sistema de detecção de quedas
  - alerta de queda
  - alerta de queda em casa de repouso
  - IA no dispositivo
  - estimativa de pose
  - detecção de quedas
  - IA de borda
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Apenas alerta assistivo. Não é um dispositivo médico ou de segurança de vida certificado, e não substitui rondas presenciais.
:::

## O que esta solução faz

Instale uma câmera no quarto. Quando alguém cai, uma mensagem chega a quem precisa vê-la — o posto de enfermagem, o Home Assistant de um familiar, o NVR na recepção ou o seu próprio sistema — em poucos segundos. Feito para ambientes de quarto fixo: casas de repouso, centros de reabilitação, atendimento domiciliar, dormitórios de ocupação única. Medido em um conjunto de dados público: 95,8% de recall de quedas e 1,4 s em média entre a queda e o envio da mensagem (detalhes em "Desempenho e dados medidos" abaixo).

- Implementação open source: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Escolhendo uma configuração e implantando: [página de design de referência](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Roda localmente, sem vídeo na nuvem</h3>
                <p>Detecção, decisão e envio de mensagens rodam todas no dispositivo local; apenas uma mensagem de texto de algumas centenas de bytes atravessa a rede. Os alertas continuam funcionando offline e não há assinatura em nuvem por câmera.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Funciona pronto para uso</h3>
                <p>Instale o pacote do app para o seu dispositivo e os alertas começam. O modelo, o runtime e os limiares de decisão são enviados congelados no pacote; não é necessário treinamento nem ajuste fino.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Use as câmeras e sistemas que você já tem</h3>
                <p>Câmeras IP existentes conectam via RTSP sem nenhuma alteração na câmera. Os alertas são enviados via MQTT: o Home Assistant os recebe por auto-descoberta, e um NVR ou sistema de chamada de enfermagem assina um único tópico.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Open source</h3>
                <p>Conversão de modelo por plataforma, orquestração Docker e scripts de treinamento de pesos de decisão estão todos no repositório, para que você possa retreinar os pesos de decisão com imagens do seu próprio local.</p>
            </div>
        </li>
    </ul>
</div>

### Demonstração ao vivo

O que o dispositivo realmente gera: um esqueleto sobreposto à pessoa, uma caixa rotulada com o id de trilha dessa pessoa e o estado atual, e no canto superior direito, quantos dos três recursos de decisão atualmente se aplicam.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png" alt="Uma queda confirmada no reComputer J30 / J40 — esqueleto, estado de rastreamento e contagem de evidências vêm da mensagem MQTT em tempo real"/>
</div>

`#12 FALLEN` é o id de trilha dessa pessoa e seu estado atual; `Evidence: 2/3` no canto superior esquerdo significa que dois dos três recursos de decisão se aplicam. A transição de estado animada está [nas etapas de configuração abaixo](#etapa-2-instalar-o-software).

### Painel de alarme (componente opcional)

O painel de alarme vem incluído na pilha compose nos presets reComputer J30 / J40, RK e R2000. Nos dois presets reCamera ele é um componente opcional em um host separado.

Depois que o detector de quedas publica eventos, o painel de alarme cuida do que vem a seguir: cada quarto é uma zona com suas próprias regras, um alarme é aberto, alguém de plantão o confirma ou descarta em um console de uma página, e o alarme confirmado é enviado como um webhook ou uma mensagem MQTT com o nome do operador. Feito para residências assistidas, atendimento domiciliar e qualquer local onde cada alarme precise ser rastreável a uma pessoa depois.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Três tipos de alarme, definidos por zona</h3>
                <p>Um evento de queda vindo do detector; uma zona vazia além do seu <code>no_person_timeout</code>; uma pessoa cujo centro da bbox não se moveu além do seu <code>no_motion_timeout</code>. Um banheiro e um quarto recebem tempos limite diferentes.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Operador confirma antes de notificar</h3>
                <p>Janela de evidência de 5 s, depois 60 s para um operador. Confirmar e descartar são ambos registrados contra quem pressionou os botões.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Entrega que você pode auditar</h3>
                <p>Um alarme confirmado que não for notificado em 5 s passa para escalonado e tenta novamente a cada 30 s. Medido em reprodução local: 3 de 3 alarmes em fila recuperados após uma interrupção de 4 s, 0 duplicados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Sem vídeo na notificação</h3>
                <p>Id do alarme, tipo, zona, id do stream, carimbo de data/hora, operador, chave de idempotência. A captura de snapshot é uma opção que vem desativada por padrão.</p>
            </div>
        </li>
    </ul>
</div>

#### O que o console mostra

O operador trabalha apenas a partir do console de confirmação: a lista de alarmes com o estado atual de cada um, o veredito da checagem de voz quando essa opção está ativada e os botões de confirmar/descartar que gravam o nome do operador na trilha de auditoria. O serviço de alarme serve o console em HTTP 8080.

As capturas de tela do console abaixo usam **dados reproduzidos**: dados sintéticos de bbox e trilhas, sem imagens de câmera e sem pessoas no quadro.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-en-97ba47b3.png" alt="Tela inicial do console de confirmação: lista de quartos à esquerda, fluxo de alarmes à direita, cada alarme com tipo, zona e estado atual"/>
</div>

Abrir um alarme mostra todo o seu histórico — horário do evento, transições de estado e quem pressionou confirmar.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-en-ba109d0a.png" alt="Detalhe de um único quarto: configuração da zona, ocupação atual e o histórico de alarmes para esse quarto"/>
</div>

## De que hardware você precisa

Duas coisas ficam no local: a câmera que produz a imagem e o host que executa a detecção.

**① Câmera** — Já tem uma câmera IP? Use-a como está via RTSP; nada do lado da câmera precisa mudar. Se não, a reCamera 2002 / Pro combina câmera e computação em uma única unidade — é só conectar e está pronta.

**② Host do detector** — O dispositivo que executa a detecção e a tomada de decisão; ele também define quantos streams você pode executar e qual será o custo. Com uma câmera existente, isso é uma caixa separada; com a reCamera, a câmera é o host do detector.

| | Host do detector | Streams por unidade | Quando escolher |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera 2002 / Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Câmera e computação em uma única unidade | 1 | Um cômodo, a forma mais rápida de colocar um único alerta para funcionar |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3576 / RK3588](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html) | 1 | Já padronizou em placas Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 16 | Precisa de uma única caixa para lidar com muitos streams |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Orin Nano / Orin NX | 7 / 8 | Vários cômodos e deseja margem para crescer |

As contagens de streams são derivadas da vazão medida do acelerador (veja "Stream counts" abaixo).

Além disso, tudo o que você precisa é de uma rede — o dispositivo e o receptor só precisam estar na mesma LAN; não é necessário acesso à internet.

### Host do painel de alarme

Três coisas: o que quer que produza os eventos de detecção, um host que decide o que se torna um alarme e o que quer que receba a notificação. O terceiro é o seu próprio sistema, então a escolha é basicamente sobre os dois primeiros.

**① A fonte de eventos** — ou câmeras RTSP que você já possui, caso em que o detector é implantado no host de alarme e aponta para o seu stream, ou câmeras reCamera que já executam o detector por conta própria, caso em que nada na detecção muda.

**② O host de alarme** — esta é a caixa que executa zonas, timeouts, a máquina de estados, o repositório de auditoria SQLite, a página de confirmação e a fila de entrega. Em dois dos três pacotes ele também executa o detector.

| | Host de alarme | Onde o detector roda | Quando escolher |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Detector, serviço de alarme, broker e console em um único Jetson | Nesta caixa, o mecanismo TensorRT é construído na primeira implantação | As câmeras já existem e o local ainda não tem gateway. Suporta mais streams dos três pacotes |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Mesma pilha, modelo de pose maior | Nesta caixa, YOLO11m em vez de YOLO11s | Mais cômodos do que um único J3011 consegue monitorar, ou é desejado um modelo de pose maior. Mesmo pacote, uma opção diferente no formulário de implantação |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Gabinete industrial sem ventoinha | Nesta caixa, HEF pré-compilado | O host vai em um rack ou shaft: sem ventoinha, ampla faixa de temperatura, montagem em trilho DIN ou parede |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Câmera de IA tudo-em-um; o serviço de alarme roda em uma máquina que você já possui | Na câmera | Ainda não há câmeras, ou as câmeras já estão detectando. O serviço de alarme é levantado manualmente — o formulário de implantação não tem classe de dispositivo para um gateway fornecido por você |

Outros pré-requisitos: um broker MQTT acessível na porta 1883 (os pacotes Orin e Hailo sobem um; o pacote reCamera pode usar aquele para o qual as câmeras já publicam), uma visão interna fixa nos pacotes Orin e Hailo e um endpoint de webhook ou um assinante MQTT que receberá as notificações.

#### Check-in por voz (opcional, desativado por padrão)

Quando ativado, um alarme de queda acionado faz o serviço falar um prompt no cômodo e ouvir por alguns segundos, em paralelo com a janela de evidências. Um pedido de ajuda, nenhuma resposta ou uma resposta ilegível confirmam o alarme imediatamente; "I'm fine" não fecha o alarme por padrão, apenas o marca para revisão.

Hardware necessário: um microfone e um alto-falante USB em uma caixa de computação na LAN, além de uma instância OpenVoiceStream para TTS e ASR em streaming. O áudio não passa pelas câmeras: nenhum modelo de reCamera tem um microfone utilizável confirmado, e a SG2002 não consegue executar ASR local. O áudio nunca é gravado em disco; apenas o veredito, a confiança, a latência e o texto transcrito são persistidos, e `store_transcript: false` descarta o texto também.

## Como implantar no local

Dois passos: primeiro acerte a posição da câmera, depois instale o software.

### Passo 1: instalar a câmera {#step-1-mount-the-camera}

:::tip[Requisitos de posicionamento]
Fixe a montagem, a 2–3 m da pessoa, de lado ou em um ângulo, com ombros e quadris visíveis. A própria queda precisa acontecer na câmera: se a pessoa já estiver deitada quando o dispositivo iniciar, ele apenas relata a pose e não dispara um alerta. Ângulos verticais diretamente de cima, planos abertos de corredores longos e móveis bloqueando a maior parte da pessoa reduzem visivelmente a precisão.
:::

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/camera-placement-be3fb598.svg" alt="Posicionamento da câmera: uma montagem lateral ou oblíqua a 2–3 m funciona; tomadas verticais de cima, planos abertos e vistas ocluídas não funcionam"/>
</div>

### Passo 2: instalar o software — quatro etapas {#step-2-install-the-software}

Instruções passo a passo para cada dispositivo estão na página do design de referência — escolha ali uma configuração para o seu local e baixe o pacote de aplicativo correspondente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e baixe o pacote do aplicativo 🖱️</font></span></strong>
    </a>
</div><br />

O fluxo geral:

1. **Escolha uma configuração** — Responda a três perguntas na página do design de referência (se você já tem uma câmera, a que distância da zona de queda, quantos streams), e ela retorna uma combinação de dispositivos correspondente.
2. **Instale o pacote do aplicativo** — Baixe o pacote para esse dispositivo e instale-o. O modelo, o runtime e os limiares de decisão são enviados congelados no pacote — as mesmas configurações avaliadas nos dados medidos abaixo — portanto não há treinamento nem ajuste a fazer.
3. **Preencha duas configurações** — o endereço da fonte de vídeo (ignore isso com reCamera) e um nome de dispositivo. O nome do dispositivo é o primeiro segmento do tópico da mensagem; nomeie por cômodo ou leito para que vários dispositivos no mesmo receptor nunca se sobrescrevam. A captura de tela abaixo é a página de gerenciamento de dispositivos na plataforma de implantação: escolha "Embedded" e depois preencha o IP do dispositivo e a porta ADB.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/recamera-pro-firmware-update-a9539b3d.gif" alt="Gerenciamento de dispositivo → Embedded → reCamera Pro, expandido para preencher endereço e porta ADB"/>
</div>

4. **Verifique o preview para confirmar o enquadramento** — Depois de instalado, o aplicativo mostra um feed ao vivo com um esqueleto e o estado sobrepostos à pessoa. Confirme que a câmera realmente vê o que precisa antes de configurar as notificações. A captura de tela abaixo é a página de preview da reCamera Pro. **Os rótulos de status vêm de um replay, não de uma execução medida**; os números medidos estão em "Desempenho e dados medidos".

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="A transição de estado de normal para caído, mostrada no preview do reCamera Pro App Center"/>
</div>

Do momento da instalação até estar em execução: cerca de meia hora para a reCamera. O Jetson leva mais tempo, porque o mecanismo de inferência precisa ser construído no dispositivo na primeira vez (461 segundos ou mais, medidos).

### Painel de alarme: zonas e instalação

Duas partes: coloque as câmeras onde as zonas funcionarão, depois instale e configure.

#### 1. Câmeras e zonas

:::tip[Zonas são retângulos normalizados sobre o frame da câmera]
Mover ou redirecionar uma câmera invalida o layout de zonas **sem erro**: o retângulo ainda existe, mas cobre uma parte diferente do cômodo. Verifique novamente todas as zonas após qualquer alteração física em uma câmera.
:::

Nos pacotes Orin e Hailo você também precisa de uma visão interna fixa em que uma pessoa permaneça visível ao longo do caminho esperado da queda. O detector é o mesmo detector EdgeFallKit, com os mesmos requisitos de posicionamento descritos acima (uma visão lateral ou de canto a 2–3 m, ombros e quadris visíveis).

Dois pontos ao desenhar zonas, ou o local produzirá alarmes extras:

- **`no_motion` será acionado durante o sono** a menos que a zona exclua a cama ou o timeout seja maior do que um cochilo normal. Motion é o deslocamento do centro da bbox de uma pessoa rastreada acima de `motion_threshold`, não fluxo óptico ou velocidade de keypoints, então pequenos movimentos sob um cobertor não contam.
- **Oclusão gera um `no_person` falso.** Uma zona só é rearmada depois que a pessoa é vista novamente, então uma oclusão produz um único alarme.

#### 2. Software: quatro etapas

As etapas por dispositivo estão na mesma página de design de referência acima, onde você pode escolher uma configuração e baixar o pacote de aplicativo correspondente.

1. **Escolha uma configuração** — o configurador pergunta o que há na parede e onde o host ficará, e retorna um dos três pacotes.
2. **Instale o pacote** — os pacotes Orin e Hailo implantam o detector e o serviço de alarme juntos. O pacote reCamera não instala nada para detecção; o serviço de alarme é iniciado manualmente em um gateway fornecido por você.
3. **Preencha a configuração** — zonas e seus `no_person_timeout` / `no_motion_timeout`, as janelas da máquina de estados, a URL do webhook e o nome do dispositivo que forma o primeiro segmento do tópico. As zonas são desenhadas diretamente na imagem e entram em vigor ao salvar:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-draw-zone-d715c416.gif" alt="Desenhando uma zona na visualização ao vivo; ela ainda está no lugar depois de salvar e recarregar"/>
</div>

A página de configuração mostra a visualização ao vivo daquele cômodo à esquerda e os dois timeouts da zona à direita. Quando a câmera está offline, a visualização volta para o último snapshot e a configuração continua editável.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/config-live-view-en-e238b3a7.png" alt="Página de configuração da zona: visualização ao vivo à esquerda, timeouts de ausência de pessoa e de ausência de movimento à direita"/>
</div>
4. **Verifique** — dispare um alarme de teste e acompanhe até o fim: o alarme aparece no console, uma ação do operador é registrada para ele, e o endpoint do webhook recebe um POST com uma chave de idempotência. Abaixo, um alarme injetado vai de aparecido a confirmado:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/alarm-trigger-c29807f5.gif" alt="Um alarme de queda injetado aparece no console, entra na janela do operador e muda para notificado quando é confirmado"/>
</div>

O estado do detector e do serviço no próprio host está no console do dispositivo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/device-console-en-76e94f0c.jpg" alt="Console do dispositivo no host de alarme: estado de execução do detector e do serviço de alarme"/>
</div>

<!-- TODO imagem: foto da instalação no local (câmera montada em um quarto) — precisa de sessão de fotos em campo -->

O tempo estimado é de **45 minutos**, classificado como **intermediário**. O pacote Orin é o mais demorado porque a primeira implantação gera um mecanismo TensorRT no dispositivo.

## Quais interfaces ele expõe

O dispositivo publica eventos para o broker MQTT em execução nele mesmo (porta 1883); seu sistema apenas assina. Três maneiras de se conectar:

- **Home Assistant** — Nenhuma configuração necessária. O dispositivo transmite via o protocolo de descoberta automática, e quatro entidades aparecem diretamente no HA: um sensor de queda, estado atual, id do evento e presença — conecte-as às suas automações.
- **NVR / sistemas de chamada de enfermagem** — Assine `<device>/fall-detection/results`. Se tudo o que você precisa saber é "alguém caiu", observe `fall_event` no payload — ele é definido apenas uma vez, no momento em que o estado entra em "fallen", então uma queda o aciona uma vez, não repetidamente enquanto a pessoa estiver no chão.
- **Sistema personalizado / API** — Assine da mesma forma; o payload também carrega `person_count`, `fallen_count` e o `track_id` / `state` / `bbox` de cada pessoa — o suficiente para construir seu próprio painel. A reCamera expõe adicionalmente RTSP 8554 `/live0` para o feed ao vivo.

`<device>` é o nome que você preencheu anteriormente — nomeie por cômodo ou leito para que vários dispositivos no mesmo broker nunca se sobrescrevam.

### Tópicos e payload completos

| Tópico / porta | Payload | Retido |
|---|---|---|
| `<device>/fall-detection/results` (multi-stream: `.../results/{stream_id}`) | Um JSON por frame: `state`, `fall_detected`, `fall_event`, `event_id`, `person_count`, `fallen_count`, além de `track_id` / `state` / `bbox` para cada entrada em `persons[]` | Não |
| `<device>/fall-detection/status` | `online` / `offline`, publicado via o último testamento do MQTT | Sim |
| `homeassistant/` | Config de descoberta automática — sensor de queda, estado, id do evento, presença | Sim |
| RTSP 8554 `/live0` (reCamera) | Vídeo ao vivo para pré-visualização e NVR | — |

O id do stream também é escrito no payload, então consumidores downstream não precisam analisar o tópico para saber a origem.

O broker também roda no host do detector: a reCamera usa o broker interno, e toda configuração reComputer sobe `eclipse-mosquitto:2` ao lado do detector, servindo a porta 1883 a partir do host. Nenhum broker externo é necessário, e nada na cadeia precisa de acesso à internet.

### Interfaces do painel de alarme

O serviço de alarme é a única coisa com a qual você integra, e ele roda no host de alarme. Três formas de acesso, dependendo do que você já tem:

- **Um sistema de chamada de enfermagem ou um serviço de paging** — use o webhook. Um POST por alarme confirmado, carregando o id do alarme, tipo, zona, id do stream, timestamp e operador. Faça deduplicação pela chave de idempotência, não pelo timestamp.
- **Um site baseado em MQTT** — ligue o barramento de alarme e assine `eldercare/alarm/<zone-id>`. Mesmo payload do webhook. Ele vem desligado por padrão.
- **Seu próprio painel ou sistema de registro** — faça polling ou leia `GET /api/alarms` em HTTP 8080 para os registros completos de alarme, incluindo histórico de estados e o operador em cada um.

A chave de idempotência é `zone:kind:event_timestamp:global_event_id`. `stream_id` é lido do payload da mensagem e nunca extraído do tópico, então uma reescrita de broker ou um prefixo de bridge não podem redirecionar silenciosamente uma zona. Registros de alarme (eventos, transições de estado, operadores e recibos de entrega) são mantidos por 90 dias.

#### Tópicos e payloads completos

| Tópico / porta | Payload | Padrão |
|---|---|---|
| HTTP 8080 `GET /api/alarms`, página em `/` | Registros de alarme: `id`, `kind`, `zone_id`, `stream_id`, `state`, `event_timestamp`, `operator`. A mesma página serve para confirmar e descartar | Ativo |
| HTTP POST para sua URL de webhook | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}` mais um header de idempotência. Sem snapshot, sem vídeo | Ativo depois que a URL é definida |
| MQTT 1883 `eldercare/alarm/<zone-id>` | Mesmo payload do webhook | Desativado |
| MQTT 1883 `<device-name>/fall-detection/results/<stream-id>` | O stream `fall_result_v1` que este serviço consome: `stream_id`, `person_count`, `fall_event`, bbox por pessoa | Entrada, publicado pelo detector |

**O campo `state`**: `escalated` significa que o prazo de notificação foi perdido; ele não volta para `notified` quando uma tentativa posterior é bem-sucedida. Não mostre `escalated` como falha de entrega em um painel; isso só significa que o prazo passou.

O broker roda no host de alarme nos pacotes Orin e Hailo, e nas câmeras ou no gateway no pacote reCamera; nada no caminho precisa de internet. O broker incluído permite conexões anônimas e é destinado a uma LAN confiável; adicione credenciais e TLS antes que o dispositivo fique acessível de fora dela.

## Desempenho e dados medidos {#appendix-measured-data}

Tudo abaixo é medido em dispositivos contra um dataset público. Relatórios brutos por clipe e checksums estão no repositório em [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation). A fonte inclui conversão de modelo por plataforma, orquestração Docker e scripts de treinamento de pesos de decisão.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Resultados de acurácia

Média em seis configurações congeladas: **acurácia 85,8%, recall de queda 95,8%, especificidade 77,8%, F1 85,7%, latência média de alerta 1,4 s**. Configurações individuais ficam entre 81,5% e 88,9%.

Essas seis configurações são Jetson YOLO11s, Jetson YOLO11m, reCamera Pro, RK3576, RK3588 e Hailo-8, cada uma com sua própria configuração congelada. A baseline v0.2 da reCamera 2002 (74,1% de acurácia) é excluída da média — ela roda uma geração anterior de pesos temporais. Detalhes por configuração estão na [tabela unificada de acurácia](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表) do repositório.

Condições: dataset [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos) (MIT), dividido por sujeito; o Sujeito 4, mantido de fora, é avaliado uma vez, 27 clipes (12 quedas / 15 atividades da vida diária); todos os vídeos a 15 FPS; um alerta mais de 0,5 s antes do início da queda anotada conta como falso positivo; cada plataforma retreina e congela pesos de decisão a partir de sua própria saída de pose, nada é compartilhado entre plataformas.

Reprodução: `platforms/jetson/tools/evaluate_videos.py` (o dataset não é distribuído com o repositório — obtenha-o você mesmo).

**A precisão não diferencia os dispositivos**: em um conjunto de teste de 27 clipes, um clipe vale 3,7 pontos percentuais, e RK3576, RK3588 e Hailo atingem a mesma pontuação (88,9%). O tamanho do modelo também não se correlaciona com a pontuação. Escolha um dispositivo pela contagem de streams, hardware existente e fonte de vídeo.

### Dispositivos testados

Sete dispositivos, quatro aceleradores. "End-to-end" significa que todo o caminho desde a ingestão do stream até um alerta foi executado e pontuado no conjunto de teste; "inference speed" significa que apenas a velocidade de detecção foi medida.

| Dispositivo | Acelerador | Modelo enviado | End-to-end | Inference speed |
|---|---|---|:-:|:-:|
| reCamera 2002 | NPU integrada | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | NPU integrada (RK) | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | NPU RK3576 | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | NPU RK3588 | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 Series | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | GPU Orin Nano | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | GPU Orin NX | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

A latência por quadro por dispositivo, o throughput multi-stream e as condições de teste estão em [resultados de desempenho detalhados](#性能实测详表) abaixo.

### Resultados de desempenho detalhados {#性能实测详表}

#### Latência por quadro e throughput

O mesmo modelo em dispositivos diferentes: **YOLO11n-Pose, entrada 640²**. Os valores por quadro são apenas de inferência no acelerador (sem decodificação RTSP, sem pós-processamento); o throughput agregado é a maior taxa total de quadros medida entre 1–6 contextos concorrentes. FP16 e INT8 estão em tabelas separadas. As linhas de Hailo-8 foram medidas em reComputer R2000 Series + módulo Hailo-8 M.2 (26 TOPS).

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

**▲ A linha de Hailo usa o tamanho s: o tamanho n é mais lento nesse acelerador.** O diretório hailo8 do Model Zoo oficial v2.15 envia apenas `yolov8s_pose` e `yolov8m_pose` — nenhum modelo de pose tamanho n. Nós mesmos compilamos um YOLO11n-Pose com Hailo Dataflow Compiler 3.31.0 (640², INT8, calibração GMDCSA de 64 quadros) e medimos **9,01 ms / 92,2 FPS** na mesma placa, contra 6,87 ms / 393,9 FPS para o tamanho s: a latência por quadro é da mesma ordem (+31%), mas o throughput difere em 4,3×. O compilador dividiu o 11n em **3 contextos**, trocando pesos a cada quadro; o modelo s do Model Zoo é de contexto único com pesos residentes. A 15 FPS por stream, 92,2 FPS ainda deixam cerca de 6× de folga; a diferença só afeta a densidade multi-stream. O resultado se aplica à compilação deste único HEF.

**O INT8 do Jetson usa engines calibrados e é listado separadamente.** As linhas INT8 acima são todas YOLO11n; os engines INT8 calibrados do Jetson até agora existem apenas para YOLOv8s / YOLOv8m-Pose (calibração por entropia em quadros GMDCSA — 64 para s, 494 para m — com fallback em FP16 para camadas que não têm implementação INT8), portanto não são o mesmo modelo que nas outras plataformas:

| Plataforma | Modelo de pose | Precisão | Por quadro | Agregado |
|---|---|---|---:|---:|
| reComputer J30 (Orin Nano Super) | YOLOv8s-Pose | INT8 | 3,75 ms | 266 FPS |
| reComputer J40 (Orin NX Super) | YOLOv8s-Pose | INT8 | 3,34 ms | 300 FPS |
| reComputer J30 (Orin Nano Super) | YOLOv8m-Pose | Misto (neck + head FP16) | 8,11 ms | 123 FPS |
| reComputer J40 (Orin NX Super) | YOLOv8m-Pose | Misto (neck + head FP16) | 7,18 ms | 139 FPS |

Condições: 640², batch 1, mediana de três execuções de 120 s, apenas computação de GPU. YOLOv8s INT8 é 1,57× mais rápido que FP16 no mesmo dispositivo. O YOLOv8m totalmente INT8 perde sua saída de fall, daí a precisão mista para m. Avaliação de implantação em GMDCSA-24 Subject 4 (27 clipes): YOLOv8s INT8 F1 66,7%, YOLOv8m precisão mista 87,0%. Os presets ainda enviam YOLO11s / YOLO11m FP16.

Reproduzir: `tools/build_calibrated_int8.py`.

O INT8 da RK foi calibrado em 240 quadros GMDCSA; em quadros fora do conjunto de calibração sua contagem de detecções por quadro corresponde exatamente à de FP16, portanto é implantável.

#### Latência do pipeline em quadros reais

Ambas as tabelas acima recebem **quadros sintéticos em branco 640** e medem apenas a inferência no acelerador. Filmagens reais são mais lentas, porque qualquer coisa no quadro precisa passar por decodificação do raw-head, DFL, keypoints e NMS:

| Plataforma | Modelo de pose | Acelerador | Pipeline em quadro real | Delta de pré/pós |
|---|---|---:|---:|---:|
| reCamera 2002 | YOLO11n INT8 | 52,74 ms ◇ | 53,23 ms | 0,012 ms |
| reCamera Pro | YOLO11n INT8 | 35,2 ms ✦ | 36,6 ms | 1,4 ms |
| reComputer RK3576 | YOLO11n FP16 | 69,6 ms | 70,8 ms | 1,2 ms |
| reComputer RK3588 | YOLO11n FP16 | 54,4 ms | 54,8 ms | 0,4 ms |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s INT8 | 6,9 ms | 8,77 ms | 1,9 ms |
| reComputer J30 Series (J3011) | YOLO11n FP16 | 3,7 ms ◆ | 5,57 ms | 1,9 ms |
| reComputer J40 Series (J4012) | YOLO11n FP16 | 3,3 ms ◆ | 5,18 ms | 1,9 ms |

"Pipeline" = inferência + pré-processamento + decodificação do raw-head / DFL / keypoints / NMS. Ele **exclui** decodificação RTSP, tracking, o MLP temporal e MQTT. O valor de 5,18 ms do Orin NX vem de 400 quadros medidos, os 5,57 ms do Orin Nano de 1359, e os 8,77 ms do Hailo de 1951 (dos quais a inferência em hardware é 6,87 ms e a decodificação mais NMS respondem por apenas 0,052 ms).

- **◇ O reCamera 2002 não consegue separar uma coluna "apenas acelerador"**: ele expõe um único temporizador cujo escopo é exatamente a definição de pipeline desta tabela, então 52,74 ms já incluem pré e pós-processamento (250 quadros medidos, com e sem uma pessoa em cena são quase idênticos).
- **✦ A linha do reCamera Pro é medida com clocks travados** (NPU 950 MHz, CPU em governor performance). O governor padrão `rknpu_ondemand` foi medido estabilizando em 800 MHz e 43,1 ms — uma diferença de 23% na mesma placa apenas pelo governor de frequência. RK3576 / RK3588 foram medidos sempre rodando em seu passo máximo e não são afetados.
- **◆ A coluna Jetson é `trtexec` de computação pura de GPU** (sem cópias para o host), enquanto a coluna RK é `rknnlite.inference()`; os dois medem coisas diferentes, então compare entre plataformas usando a coluna de pipeline. Por essa coluna o Jetson é cerca de 11× mais rápido que o RK3588 e cerca de 14× mais rápido que o RK3576.

Reproduzir: [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation).

#### Contagem de streams

"Streams limitados por inferência" = throughput agregado ÷ 15 FPS. Ele considera apenas o acelerador e é um teto teórico. "Streams recomendados" desconta isso — o throughput end-to-end medido em RK atinge apenas 28%–44% do teto de inferência, porque decodificação RTSP, tracking, a máquina de estados e MQTT também consomem CPU e largura de banda de memória. Com outras cargas ainda rodando na placa, o throughput end-to-end medido foi de cerca de 8,6 FPS no RK3588 e cerca de 4,9 FPS no RK3576.

### Runtimes e parâmetros principais

Todas as plataformas executam a mesma família de modelos de pose 640². O que difere é o runtime e como o modelo chega ao dispositivo:

| Host do detector | Modelo de pose | Precisão | Runtime | Entrega do modelo |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | NPU da câmera | Instalado a partir do console como um app de câmera |
| reComputer J30 / J40 | YOLO11s (Orin Nano) / YOLO11m (Orin NX) | FP16 | TensorRT | O engine é **construído no dispositivo** — atrelado àquela arquitetura de GPU e versão do TensorRT, portanto não pode ser enviado precompilado. Medido no Orin Nano: 461 s para YOLO11s |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` é enviado por placa; um modelo compilado para RK3588 não carrega em RK3576 |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | HEF oficial precompilado, verificado contra um digest fixo |

A implantação em Hailo é travada em **HailoRT 4.21**: plugin GStreamer, biblioteca de usuário e driver de kernel devem corresponder, e nenhum outro processo pode manter o acelerador.

Parâmetros que alteram o comportamento da implantação (padrão enviado entre parênteses):

- `max_fps` (15) — taxa de processamento por stream; as contagens de streams acima são derivadas dela.
- `fall.temporal_confirmation_required` (true) — entrar em "fallen" exige confirmação do modelo temporal, o principal mecanismo que mantém os falsos positivos baixos; defina como false e recursos geométricos podem confirmar uma queda sozinhos.
- `cooldown_sec` (3.00) — uma queda conta uma vez; `fall_event` dispara apenas na entrada no estado fallen.

Painel de alarme:

- `statemachine.evidence_sec` (5.0) / `statemachine.confirm_window_sec` (60.0) — a janela de evidência e a janela do operador; juntas definem a maior parte do tempo do alarme até a notificação.
- `statemachine.confirm_timeout_action` (tratar como real e notificar) — o que acontece quando ninguém responde dentro da janela do operador.
- `publish_empty_frames` (true no pacote Orin) — o detector Jetson publica quadros vazios quando ninguém está em cena; sem eles o timeout de `no_person` não recebe entrada. Defina novamente se você substituir a configuração de detector enviada pela própria do dispositivo; o runtime Hailo não tem tal chave e não precisa.

### Dados medidos do painel de alarme {#alarm-path-measured}

O serviço de alarme não faz detecção por conta própria; a precisão de detecção está em "Accuracy results" acima. A latência do alarme se soma à latência de detecção (média por plataforma de 1,22–1,75 s).

| Métrica | Valor | Condições |
|---|---:|---|
| Latência do alerta, timestamp do evento até notificação enviada | P50 2061 ms / P95 2093 ms | Reprodução local, um replayer fazendo o papel das câmeras, excluindo inferência e rede entre máquinas; 5 replays de queda, 15 FPS × 12 s cada; 1 s de evidência + 1 s de auto-confirmação; zona única, stream único, webhook em loopback |
| Atraso da detecção de ausência de pessoa em relação ao timeout configurado | P50 65 ms / P95 77 ms | Reprodução local, 3 execuções, 10 FPS × 11 s, timeout de 5 s, tick de 0,1 s, sem broker |
| Recuperação de falha, entregas únicas bem-sucedidas sobre enfileiradas | 3 de 3, 0 duplicatas, primeira entrega 96 ms após a recuperação | Reprodução local, endpoint de webhook retornando 503 por 4 s, 3 alarmes enfileirados, intervalo de retry de 2 s |
| Falsos alarmes | 0 em 0,02 horas de câmera | 72 s de reprodução silenciosa, muito pouco para uma taxa |
| Queda até recebimento do webhook | P50 2487 ms / P95 2751 ms | reCamera One (USB-RNDIS), frames reais de `fall-detection` + alarmes de queda injetados através do broker do próprio dispositivo; primeiros 5 de 10 injeções (o restante foi bloqueado pelo limite de taxa de notificação, ver degradação conhecida); um alarme real de 60 s de inatividade também foi entregue |
| Queda até recebimento do webhook, com inferência Hailo-8 | P50 2830 ms / P95 3061 ms (mín 2102 ms) | reComputer R2000 Series + módulo Hailo-8 M.2, HEF oficial YOLOv8s-Pose, HailoRT 4.21.0; replay RTSP de um clipe de queda GMDCSA-24 (640×640, 15 FPS); 10 alarmes, 1 s de evidência + 1 s de auto-confirmação + 2 s de re-arm; zona única, stream único; todos os 10 dentro do prazo de notificação de 5 s |

A latência do alerta é aproximadamente a soma das duas janelas mais cerca de 60 ms de despacho. As janelas nesta tabela foram encurtadas; com os padrões enviados (5 s de evidência, 60 s de operador) o mesmo caminho começa em cerca de 65 s (derivado).

Reprodução: os três diretórios de execução datados de 2026-09-05, 2026-09-06 e 2026-09-08 em `eldercare-alarm/evaluation/runs/`; a definição de latência está em `evaluation/measure_alert_latency.py`.

### Degradação conhecida

- **Posicionamento da câmera.** Os números acima vêm de uma câmera fixa, enquadramento de médio alcance, em ambiente interno, com ombros e quadris visíveis. Uma montagem lateral ou oblíqua a 2–3 m funciona; tomadas de cima para baixo, em corredores longos e amplos, e forte oclusão por móveis reduzem a precisão.
- **Um conjunto de dados diferente reduz o recall.** No conjunto de dados externo RealBiomFall (34 clipes, todas quedas), o recall medido é de 58,8% na reCamera e 52,9% para o YOLO11m implantado no reComputer J30 / J40; a maioria das falhas vem do modelo de pose não detectar a pessoa. Em um novo local, extraia novamente as trilhas a partir de filmagens no local, depois retreine e congele novamente os pesos de decisão.
- **A vazão cai quando outra carga de trabalho mantém a GPU ocupada.** Os números do Jetson acima foram medidos com as cargas de trabalho co-residentes paradas; com sua própria carga de inferência em execução, o Orin NX mediu apenas 264,9 FPS agregados (306,2 FPS parado), abaixo do Orin Nano. O Orin Nano mediu o mesmo de qualquer forma (270,5 / 270,7 FPS) porque sua carga de trabalho não usa a GPU.
- **As notificações têm limite de taxa.** No máximo 5 por 600 s; alarmes além disso não são notificados e não geram erro (a partir da 6ª injeção na reCamera One).

### Próximas etapas

- Executar a avaliação externa RealBiomFall nas rotas RK e Hailo.
- Gravar vídeo de campo e rastros de pose na reCamera e usar reprodução anotada para avaliar os limiares de decisão e retreinar o perfil temporal.

## Fontes de dados e recursos

- **GMDCSA-24 v2.1** — Tanto a avaliação de precisão quanto as filmagens da demonstração vêm deste conjunto de dados, [ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos), licença MIT. Os rostos nas imagens de demonstração foram pixelados e desfocados com Gaussiano: a licença cobre os direitos autorais do autor, não os direitos de imagem dos sujeitos retratados.
- **RealBiomFall** — O subconjunto de teste usado para o teste de generalização externa, 34 clipes, todas quedas, portanto apenas recall e latência são reportados.
- Nenhum dos conjuntos de dados é distribuído com o repositório `edgefallkit` — obtenha-os você mesmo para reproduzir a avaliação.
- O diagrama de posicionamento da câmera foi desenhado internamente.
