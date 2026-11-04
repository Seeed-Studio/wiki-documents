---
description: Informe cada vaga de estacionamento como ocupada ou livre com as câmeras IP que você já tem no estacionamento — hardware, implantação, interfaces e dados medidos de múltiplos streams em hosts Jetson e RK
title: Detecção de Ocupação de Estacionamento Baseada em Câmera — Seleção, Implantação e Dados Medidos
sidebar_label: 'Parking Occupancy Detection'
keywords:
  - detecção de ocupação de estacionamento
  - detecção de vaga de estacionamento por câmera
  - orientação de estacionamento
  - placa de vagas livres
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg
slug: /solutions/edge-parking-occupancy
sidebar_position: 22
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/pt-br/solutions/edge-parking-occupancy/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Antes de usar]
As vagas precisam estar visíveis na imagem da câmera: uma vaga totalmente escondida pela vaga vizinha, ou que seja muito pequena e distante, não é avaliada de forma confiável.
:::

## O que esta solução faz

Em vez de um sensor magnético ou ultrassônico em cada vaga, use as câmeras IP que você já tem no estacionamento: todas as vagas que uma câmera consegue ver são verificadas ao mesmo tempo. Você desenha e nomeia uma caixa por vaga em um navegador; o host de borda continua decidindo se há um veículo nela e envia o estado de cada vaga — ocupada, livre ou desconhecida — para o seu sistema, para placas de vagas livres, orientação de estacionamento ou gestão de vagas reservadas.

- Pacote de implantação (Docker Compose e configuração): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_occupancy)
- Seleção e implantação: [página de reference design](https://www.seeed.cc/solutions/reference-designs/parking-space-occupancy-detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Vídeo permanece no local</h3>
                <p>A imagem é analisada no host de borda no local; apenas os estados das vagas saem dele.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Vários streams por host</h3>
                <p>Um reComputer J30 Series executou 6 streams por 620 s sem quadros perdidos; veja "Performance e dados medidos".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Desenhe suas próprias vagas</h3>
                <p>Desenhe e nomeie caixas na imagem ao vivo em um navegador; salvar é aplicado na hora e persiste após reiniciar.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Câmeras perdidas aparecem</h3>
                <p>Cerca de 10 s após um stream de câmera cair, as vagas dela passam a "unknown" em vez de repetir o estado antigo.</p>
            </div>
        </li>
    </ul>
</div>

### Em um dispositivo real

O próprio editor de vagas do host de borda: cada caixa é uma vaga, vermelha para ocupada e verde para livre, com totais e a lista de vagas à direita.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg" alt="Editor de vagas em um reComputer J30 Series: seis vagas, quatro ocupadas e duas livres"/>
</div>

Na captura de tela, P01, P02, P04 e P06 estão ocupadas e P03 e P05 livres. A entrada é um still em loop de um estacionamento descoberto, não imagens reais do local.

## Hardware necessário

Três coisas no local: as câmeras IP do estacionamento, um host de borda e um broker MQTT (por exemplo um Mosquitto existente).

**① Câmeras IP**: câmeras existentes com um stream RTSP H.264; o sub-stream é suficiente.

**② Host de borda**: escolha um; um host recebe várias câmeras, cada uma analisada a um quadro por segundo.

| | Host de borda | Medido | Escolha-o quando |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Jetson Orin Nano, JetPack 6.2 | 6 streams, sem perdas; p50 6,5 ms por quadro | Várias câmeras em um host; escolha padrão |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>Jetson Orin NX, JetPack 6.2 | Mesmo pacote que o J30 | O host também executa outros modelos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU on-board | Um stream; p50 36,6 ms por quadro | O local se padroniza em Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Series](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU on-board | Um stream a 1 fps, sem perdas | Poucas câmeras, custo em primeiro lugar |

Em hosts RK, adicione streams um de cada vez e verifique se cada um continua atualizando.

O host de borda, as câmeras e o broker MQTT compartilham uma LAN, e o host consegue alcançar os endereços RTSP das câmeras (geralmente porta 554). A implantação faz o download do runtime e dos modelos; depois disso, ele roda offline.

## Implantando no local

### 1. Verifique a visão da câmera

:::tip[Olhe de cima, de um ponto alto]
Cada vaga deve estar claramente visível e não totalmente escondida pela vaga vizinha. Desenhe uma caixa por vaga: um veículo precisa cobrir cerca de um terço da caixa para contar como ocupada, e uma caixa grande abrangendo várias vagas nunca conta como ocupada.
:::

### 2. Instale o software: três etapas

As etapas por dispositivo estão na página de reference design; isto é o resumo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/parking-space-occupancy-detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça a implantação 🖱️</font></span></strong>
    </a>
</div><br />

1. **Implante o host de borda**: insira o endereço RTSP de cada câmera e o broker MQTT, depois faça a implantação.
2. **Desenhe as vagas**: abra o editor de vagas na porta 8080, escolha uma câmera, arraste um retângulo em uma área vazia, arraste os cantos para ajustar, insira o ID da vaga (por exemplo B1-023) e salve.
3. **Verifique**: quando uma vaga muda, sua cor no editor acompanha e a mensagem de estado da câmera chega via MQTT.

## Interfaces

Os estados das vagas vão via MQTT para o seu broker, um tópico por câmera.

- **Placas de vagas livres / orientação**: assine o tópico de cada câmera e some as contagens de ocupadas, livres e desconhecidas na mensagem.
- **Vagas reservadas**: desenhe vagas de recarga de VE ou de visitantes como suas próprias caixas e aja com base nos IDs dessas vagas.
- **Home Assistant ou seu próprio sistema**: o mesmo tópico, lido por ID de vaga.

| Tópico / porta | Conteúdo |
|---|---|
| MQTT `<site>/parking/<camera>/slots` | Cada vaga sob esta câmera (`occupied` / `free` / `unknown`) mais as três contagens; enviado sempre que qualquer vaga muda |
| HTTP 8080 `/slots/editor` | Editor de vagas: desenhar, nomear, estado em tempo real |
| HTTP 8099 `/healthz` | Status do serviço |

Os estados são mantidos para que não oscilem de quadro a quadro: uma vaga passa a ocupada cerca de 3 s depois que o veículo se estabiliza e a livre cerca de 5 s depois que ele sai; cerca de 10 s após um stream cair, as vagas dele passam a desconhecidas.

## Performance e dados medidos

### Vários streams e um stream

| Dispositivo | Entrada | Resultado |
|---|---|---|
| reComputer J30 Series (Orin Nano) | 6 streams, 1 fps cada, 620 s | 0 quadros perdidos em cada stream, cerca de 1,0 fps cada (medido) |
| reComputer J30 Series (Orin Nano) | Um stream | 0,988 fps, p50 6,5 ms por quadro, 15 mudanças de estado relatadas por vaga (medido) |
| reComputer RK3588 Series | Um stream | p50 36,6 ms por quadro, 17 mudanças de estado relatadas (medido) |
| reComputer RK3576 Series | Um stream | 1,0 fps, 21 mensagens de estado de vaga recebidas, 0 quadros perdidos (medido) |

A entrada de stream único alterna um still de estacionamento descoberto com quadros escuros para forçar mudanças de ocupado/livre.

Reproduza: `sensecraft-solutions/solutions/edge_parking_occupancy` (pacote de implantação) com o clipe de entrada `slots-occ20-empty20-400s.mp4`

### Stream de câmera perdido

| Dispositivo | Resultado |
|---|---|
| reComputer RK3576 Series | As vagas passaram a `unknown` 9,98 s após o stream parar, cerca de 11 s após o último quadro (medido) |

### Modelos e runtimes

| Dispositivo | Detecção de veículos | Runtime |
|---|---|---|
| reComputer J30 / J40 Series | YOLOX, 640×640, FP16 | TensorRT |
| reComputer RK3588 / RK3576 Series | YOLOX, 640×640, INT8 (w8a8) | RKNN, decodificação de hardware MPP |

Parâmetros que afetam a decisão (pacote de implantação `config/slots*.json`):

- `slot_coverage.occupied_ratio` / `free_ratio`: ocupada acima de 0,3 da área da caixa, livre abaixo de 0,2.
- `slot_coverage.hold_s` / `free_hold_s`: um estado precisa se manter por 3 s / 5 s antes de mudar.
- `unknown_after_s`: baias ficam como desconhecidas 10 s após a queda do stream.

### Degradações conhecidas

- **Distorção de perspectiva grande-angular e oclusão**: Baias próximas ao perímetro de visadas de câmera grande-angular sofrem com alongamento de perspectiva; veículos de perfil alto (SUVs, vans) em primeiro plano podem bloquear baias traseiras adjacentes. Recomenda-se restringir cada câmera a ≤ 30 baias.
- **Condições de transposição de faixa e de limite**: Quando um veículo atravessa as linhas das baias, se ambas as baias caírem dentro da razão de cobertura de transição de 0,2–0,3, pode ocorrer oscilação temporária de estado. Aumentar `hold_s` estabiliza as transições.
- **Reflexos em poças e sombras dinâmicas**: Água parada após chuva ou sombras dinâmicas fortes de pilares/árvores podem degradar a confiança na detecção de bordas. Iluminação funcional básica (iluminância da superfície ≥ 30 Lux) deve ser mantida à noite.

## Fontes de dados e ativos

- Capturas de tela e resultados de stream único usam uma imagem estática de estacionamento em superfície cuja fonte original ainda está a ser confirmada.
- Código do modelo de detecção YOLOX: Apache-2.0.
