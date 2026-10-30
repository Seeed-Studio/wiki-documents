---
description: Hub de dados industrial multiprotocolo em um gateway de borda — fontes OPC UA, Modbus TCP/RTU, BACnet/IP e MQTT unificadas em um único modelo de pontos, lidas e controladas por meio de um único contrato MQTT versionado, com store-and-forward para o norte
title: 'Hub de Dados Industrial Multiprotocolo: Hardware, Implantação e Resultados Medidos'
sidebar_label: 'Hub Industrial Multiprotocolo'
keywords:
  - gateway de protocolo industrial
  - hub de dados multiprotocolo
  - OPC UA
  - Modbus TCP
  - Modbus RTU
  - BACnet/IP
  - broker MQTT
  - modelo de pontos unificado
  - store and forward
  - publicação para o norte
  - reComputer R1000
  - reComputer R1100
  - reTerminal DM
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/industrial-protocol-gateway
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/pt-br/solutions/industrial-protocol-gateway/
generated_from: sensecraft-solutions@multi_protocol_gateway
---

:::caution[Aviso de uso]
Esta é uma **camada de integração de protocolos e hub de dados**, não um sistema certificado de controle ou medição.
:::

## O que esta solução faz

Um integrador de gestão predial, de energia ou de equipamentos chega ao local e descobre que os dados já existem —
por trás de um controlador OPC UA, de um medidor Modbus, de um manuseador de ar BACnet/IP e de um gateway de sensores MQTT, quatro
esquemas de endereçamento diferentes e quatro modos de falha diferentes. Esta solução coloca todos os quatro em **um único registro de pontos
em um único host de borda**, e fornece ao sistema acima um único contrato MQTT de leitura/gravação. Em um novo local você
conecta os controladores e faz o mapeamento dos pontos; a camada de protocolo permanece como está.

Implante o contêiner, adicione uma fonte, deixe a descoberta propor candidatos, confirme os pontos desejados, verifique
a qualidade deles e então publique — localmente na porta 1883, para o norte em um broker em nuvem na 8883, ou ambos.

- Seleção e implantação: [página de design de referência](https://www.seeed.cc/solutions/reference-designs/multi_protocol_gateway)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Dispositivos existentes conectam como estão</h3>
                <p>Dispositivos que já falam OPC UA, Modbus, BACnet/IP ou MQTT não são substituídos. Eles chegam a um único registro de pontos em um único host de borda, e a camada acima recebe um único contrato MQTT de leitura/gravação.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Descubra e depois confirme</h3>
                <p>Navegação OPC UA, varredura de unidades Modbus, BACnet Who-Is e observação de tópicos MQTT propõem pontos candidatos; um ponto passa a ser gerenciado quando você o confirma. Onde a descoberta for incompleta, insira pontos manualmente.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>2.000 pontos a 349,99 eventos/s</h3>
                <p>Quatro fontes de 500 pontos cada, com intervalos de varredura de 5/10 s, medidos em uma execução de loopback de 180 s em uma série reComputer R2000.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Fluxo para o norte recompõe após uma queda</h3>
                <p>Eventos são armazenados localmente durante uma queda de 300 s do broker em nuvem; ao reconectar, o backfill fica completo (1,000) contra um broker persistente e 0,9839 contra um em memória.</p>
            </div>
        </li>
    </ul>
</div>

### O que o console mostra

A página Access lista cada fonte configurada com seu estado de runtime em tempo real — depois que o primeiro controlador é
conectado, esta é a página que indica se ele realmente conectou:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-list-en-9837244f.png" alt="Página Access: protocolo, endereço e estado de runtime em tempo real para cada fonte"/>
</div>

A página Points é uma tabela para cada ponto gerenciado, com qualidade, filtragem e controle por ponto:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/points-en-477df2ca.png" alt="Página Points: valor atual, unidade, qualidade e última atualização para cada ponto gerenciado"/>
</div>

A página Data Service configura o broker embutido e mostra o contrato de tópicos que ele publica:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/dataservice-en-2d03bdb5.png" alt="Página Data Service: configuração do broker embutido e o contrato de tópicos que ele publica"/>
</div>

Essas capturas mostram o console em execução contra controladores simulados e de bancada. No local, pontos gerenciados e telemetria em tempo real são preenchidos diretamente a partir dos mapas de registradores dos controladores configurados.

O gateway vem em um gabinete industrial robusto para trilho DIN que se encaixa diretamente em um trilho padrão de 35 mm dentro de shafts elétricos ou painéis de planta, alimentado por 24 V DC.

## De que hardware você precisa

Duas coisas: os dispositivos de campo que já estão instalados e um host que consiga alcançar cada uma de suas
redes.

**① Dispositivos de campo** — qualquer coisa que já fale OPC UA, Modbus (TCP ou RTU), BACnet/IP ou MQTT. Nada no
lado da planta é substituído. O que você precisa ter por fonte: o endpoint e as credenciais OPC UA; o
ID da unidade Modbus, mapa de registradores, ordem de bytes e de palavras; uma interface de rede na sub-rede BACnet com broadcasts
chegando até ela; e, para MQTT, um mapeamento explícito de tópico para ponto. Modbus RTU também precisa de um
adaptador USB-para-RS-485, a menos que o host tenha RS-485 integrado.

**② O host do hub de dados** — um host Docker simples, x86-64 ou arm64, que determina quais interfaces de campo você obtém
sem adaptador e se alguém consegue operar o sistema sem um laptop no local:

| | Host | I/O de campo on-board | Quando escolhê-lo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/113991294-2_1.jpeg" alt="reComputer R1000" width="110" /> | [reComputer R1000 Series](https://www.seeedstudio.com/reComputer-R1024-10-p-5923.html)<br/>Gateway IoT baseado em CM4 | RS-485, Ethernet RJ45 | Tudo está em Ethernet, com no máximo uma linha RS-485 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 Series](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>Gateway e controlador IoT baseado em CM4 | RS-485, RS-232, DI/DO, Ethernet Gigabit, CAN | O local possui dispositivos RS-232 ou contatos secos DI/DO também |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image1.jpeg" alt="reTerminal DM" width="110" /> | [reTerminal DM Series](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)<br/>IHM de 10,1 polegadas com os mesmos serviços | RS-485, CAN, Ethernet (a variante CM4104032 adiciona RS-232, DI/DO, bloco de terminais) | Não há computador permanente na sala de máquinas; configuração e verificações diárias acontecem no próprio dispositivo |

O limite de pontos de software é o mesmo nos três: **2.000 pontos, 50 deles graváveis**, imposto em código.
Uma carga de trabalho de 2.000 pontos não passou no teste de capacidade na plataforma classe CM4 do R1000 (configuração de 2 GB,
testada em uma placa de desenvolvimento), portanto escolha o R1100 ou o reTerminal DM nessa escala; para implantações menores com o R1000
ainda não há contagem de pontos medida. O tamanho da eMMC determina quanto buffer de falha para o norte
e histórico de recebimento de comandos permanece na caixa; o serviço em si precisa de cerca de 4 GB livres.

Outros pré-requisitos: Docker Engine 20.10 ou mais recente, portas 8280 e 1883 livres (ou escolha portas não utilizadas antes de
implantar) e alcance de rede do host para cada rede de protocolo.

### Limites de seleção negativa

- **Interfaces e contagem de pontos**: Se o local exigir RS-232, sinais DI/DO ou exceder 1.000 pontos, evite o R1000 (único RS-485); escolha R1100 ou reTerminal DM.
- **Headless vs UI no dispositivo**: Se a sala de máquinas não tiver um PC e os operadores precisarem de configuração no local, evite gateways headless e selecione o reTerminal DM de 10,1 polegadas.

## Como implantar no local

### Um: instalar hardware — montagem em gabinete, alimentação e fiação de barramento

1. **Montagem em trilho DIN e fonte de alimentação**:
   - Fixe o gateway em um trilho DIN padrão de 35 mm dentro do painel de controle ou caixa de passagem usando seu suporte de montagem integrado.
   - Fonte de alimentação: DC industrial regulada 12V/24V (faixa ampla de entrada DC 9–36V suportada).
   - **Aterramento contra surtos**: Conecte o terminal de proteção de terra (PE) do chassi do gateway ao barramento de equipotencial de terra do gabinete usando um fio de aterramento (≥2,5mm²) para suprimir ruído eletromagnético de motores e inversores de frequência (VFDs).

2. **Rede e sub-rede BACnet/IP**:
   :::tip[O host precisa de uma interface na sub-rede BACnet]
   A descoberta BACnet/IP é baseada em broadcast. O host precisa de uma interface na sub-rede BACnet, e os broadcasts não devem ser filtrados pelos switches de rede. Implantações Linux remotas devem usar rede em modo host (`network_mode: host`). Configurações em bridge no Docker Desktop podem descartar broadcasts UDP; nesse caso, especifique manualmente os IPs dos dispositivos de destino.
   :::

3. **Fiação Modbus RTU / RS-485 e passagem de porta serial**:
   - **Fiação do barramento**: Use cabos par trançado blindado (STP). Conecte A+ e B- aos terminais correspondentes do controlador. Aterre a folha de blindagem apenas no lado do gateway. Mantenha uma topologia em cadeia (daisy-chain) sem ramificações em estrela; termine as duas extremidades do barramento com resistores de 120Ω.
   - **Passagem de serial no Docker**: A configuração padrão do Docker não monta dispositivos seriais do host. Ao usar um adaptador USB-para-RS-485 ou porta serial on-board, mapeie explicitamente o nó de dispositivo em `docker-compose.yml`:
     ```yaml
     services:
       gateway:
         devices:
           - "/dev/ttyUSB0:/dev/ttyUSB0"  # Or /dev/ttyAMA0 for on-board port
         group_add:
           - "20"  # dialout GID to allow non-root container serial access
     ```
   Antes de habilitar escritas em produção, verifique o readback com IDs de escravo reais e endereços de registrador no console local.

### Dois: instale o software e traga a primeira fonte

As etapas por dispositivo e os pacotes de aplicação estão na página do design de referência; escolha uma configuração para
seu site e faça o download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/multi_protocol_gateway" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

1. **Implantar** — o alvo local é instalado na máquina que executa o SenseCraft Solution; o alvo remoto
   é instalado via SSH em um reComputer R2000 series ou reTerminal DM na rede do controlador.
2. **Crie o primeiro administrador** — nenhum token de registro é necessário na primeira execução.
3. **Adicione uma fonte** — OPC UA, Modbus, BACnet/IP ou MQTT, depois execute a descoberta onde estiver disponível: navegação OPC UA,
   varredura de unidades Modbus TCP, BACnet Who-Is, observação de tópicos MQTT. Cada uma produz **candidatos**.
   O assistente solicita endereço e intervalo de sondagem por protocolo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-wizard-step1-en-7a3d57a8.png" alt="Primeira etapa do assistente de acesso: escolha o protocolo, preencha o endereço e o intervalo de sondagem"/>
</div>

4. **Confirme os pontos** — apenas candidatos confirmados se tornam pontos gerenciados. Onde a descoberta for incompleta ou
   indisponível, insira os pontos manualmente.
5. **Verifique a qualidade antes de conceder acesso de escrita** — verifique valores em tempo real e qualidade por ponto na página
   Points primeiro.
6. **Configure o serviço de dados** — o broker incorporado e, opcionalmente, o publicador northbound.

Dificuldade **intermediária**, cerca de **15 minutos** até um console em execução; trazer o primeiro controlador e
verificar a qualidade de seus dados leva mais tempo.

## Interfaces disponíveis

Os dados saem do host por três interfaces:

- **Operadores** — o console no navegador em HTTP **8280**: gerenciamento de fontes, tabela de pontos, recibos
  de comandos, gerenciamento de plugins.
- **Sistemas locais (SCADA, plataforma de energia, seu próprio serviço)** — assine o broker incorporado na porta
  **1883**. A telemetria de pontos chega em `missionpack/v1/{gateway}/points/{point_id}`, com tópicos de presença,
  comando e recibo sob o mesmo contrato.
- **Nuvem ou sistemas centrais** — habilite a publicação northbound para um broker externo na porta **8883**. A telemetria
  é agrupada em lotes com QoS 1, o estado de integridade por fonte e o status de last-will são retidos, e um heartbeat em QoS 0
  é executado em paralelo. **A imagem publicada atualmente não possui publicador northbound.**

`{gateway}` é o ID do gateway que você definiu no momento da implantação, então vários hubs podem publicar em um único broker sem
colidir.

### O contrato de tópicos

| Tópico / porta | Payload | Retido |
|---|---|---|
| HTTP `8280` `/` | Console no navegador | — |
| `missionpack/v1/{gateway}/points/{point_id}` (1883) | Telemetria de ponto versionada — valor, qualidade, carimbos de tempo, revisões | Não |
| tópicos de presença / comando / recibo no mesmo prefixo (1883) | Presença de fonte e gateway, comandos emitidos e o recibo de cada um | Presença retida |
| `missionpack/v1/{gateway}/telemetry` (8883) | Envelope de telemetria em lotes northbound, QoS 1 | Não |
| tópicos de integridade por fonte e last-will (8883) | Integridade da fonte e status do gateway | Sim |

O envelope northbound é `missionpack.northbound.v1`:

```json
{
  "schema_version": "missionpack.northbound.v1",
  "message_id": "0f3a...",
  "gateway_id": "gw-01",
  "created_at": "2026-09-05T05:01:19.045514Z",
  "samples": [
    {
      "source_id": "ahu-bacnet",
      "point_id": "analog-value:12",
      "ts": "2026-09-05T05:01:18.900000Z",
      "quality": "good",
      "value": 23.5,
      "source_revision": 4,
      "point_revision": 7
    }
  ]
}
```

**`source_revision` e `point_revision`**: a revisão muda quando um ponto é remapeado, o que diferencia uma
mudança de configuração de uma mudança de valor de campo. Um consumidor que não as verifica junta dados de
antes e depois de uma mudança de configuração em uma única série.

Dois limites do contrato:

- **O protocolo é MissionPack v1; esta versão não é compatível com Sparkplug B**, então um aplicativo host
  Sparkplug precisa de uma etapa de tradução.
- **MQTT puro é apenas para telemetria.** Habilite TLS e uma identidade de controle autorizada antes de permitir
  comandos remotos.

### Escopo dos protocolos southbound

| Protocolo | Descoberta | Leitura | Escrita | Não implementado |
|---|---|---|---|---|
| OPC UA | Navegação do espaço de endereços | Sim | Sim | — |
| Modbus TCP | Varredura de unidades | Sim | Sim | — |
| BACnet/IP | Who-Is | ReadProperty | WriteProperty com prioridade, liberação com `Null` | Assinatura COV, registro BBMD / Foreign-Device, BACnet MS-TP |
| MQTT (como fonte) | Observação de tópicos | Sim, via mapeamento explícito de tópico para ponto | — | Mapeamento implícito; tópicos devem ser mapeados manualmente |

## Desempenho e dados medidos {#dados-medidos}

A carga foi gerada por um **simulador de quatro protocolos** e medida em loopback em um dispositivo por camada; não há dados de implantação em site real.

### Ciclo de atualização em 2.000 pontos

Condições para as três camadas: 2.000 pontos em 4 fontes (500 cada), duração conforme indicado, apenas loopback, em um reComputer R2000 series (arm64).

| Camada | Intervalos de amostragem | Resultado |
|---|---|---|
| Estável | OPC UA/Modbus 5 s, BACnet 10 s, execução de 180 s | **349,99 eventos/s** contra uma meta de 350,0 (99,99%), previsão 0,939 ciclo/s, pico de RSS do grupo de processos 217,3 MiB, pico de CPU em 1 minuto 22,1%, 0 deltas de amostras com falha |
| Degradando | OPC UA/Modbus 2 s, BACnet 4 s | Executou os 900 s completos a **718,9 eventos/s** (99,1%), mas a previsão caiu para 0,872 ciclo/s e o gate falhou com `PREDICTION_CYCLE_RATE_LOW` |
| Falha | OPC UA/Modbus 1 s, BACnet 2 s | `PREDICTION_WRITE_CHAIN_TIMEOUT` em **148,2 s** contra uma meta de 900 s; 2 pontos de entrada Modbus já estavam ausentes no primeiro ciclo de aquecimento |

Reprodução: commit upstream `b5fe4cc` com o simulador de quatro protocolos; os registros brutos de execução são citados em `description.md` do pacote upstream

### Recuperação de falha northbound

Condições: uma falha de 300 s do broker em nuvem (um processo ou contêiner de broker encerrado, não um link degradado) em cerca de 350 eventos/s, limites de spool 512 MB / 86.400 s, execução de 1.800 s, em um host arm64.

| Métrica | Valor | Condições |
|---|---|---|
| Crescimento do spool durante a falha | 60,1 KB/s de bytes enfileirados; 18,33 MB / 325 lotes no pico | Esvaziado até zero após reconexão |
| Reinício do broker até a primeira mensagem reproduzida | 1,2–2,2 s | Medido de reinício até a primeira reprodução, um limite superior de CONNACK até a primeira reprodução |
| Integralidade da reprodução, broker persistente | 1,000 | Sessão de assinante durável, interseção do conjunto de IDs de mensagem |
| Integralidade da reprodução, broker em memória | 0,9839 ▲ | Mesma falha de 300 s |

▲ Todas as 58 mensagens ausentes chegaram 0,496–1,058 s após o reinício do broker, antes do SUBACK do assinante de teste em 1,069 s — uma janela cega antes de a assinatura existir; o gateway não as descartou.

Reprodução: commit upstream `f831bae`; os registros brutos de execução são citados em `description.md` do pacote upstream

### Runtime e parâmetros principais

O runtime é distribuído como uma imagem de contêiner (x86-64 e arm64) a partir de `sensecraft-missionpack.seeed.cn`; ainda não há repositório público de código-fonte.

- **Limite de pontos**: 2.000 pontos gerenciados, 50 deles graváveis, imposto em código.
- **Intervalo de amostragem**: decide se 2.000 pontos rodam de forma estável, veja a tabela acima: OPC UA/Modbus 5 s com BACnet 10 s passa, enquanto 2 s / 4 s já falha.
- **Spool northbound**: os limites de tamanho e idade (512 MB / 86.400 s nas execuções medidas) definem por quanto tempo de falha o host pode absorver; o tamanho do lote e o heartbeat em QoS 0 também são configuráveis.

### Degradação conhecida

- **Cada passo de amostragem mais apertado** move o resultado de aprovado para degradado e depois abortado; as métricas de falha vêm todas do plugin de previsão (`PREDICTION_*`).
- **O plugin de previsão tem um limite estrutural de taxa (ainda não corrigido)**: o loop dorme um intervalo fixo após cada ciclo, então sua taxa é `1/(1.0 + t_cycle)`. Em 2.000 pontos `t_cycle` é cerca de 0,119 s, colocando o limite próximo de 0,894 ciclo/s, abaixo do gate de 0,90 que o teste de resistência exige.

### Próximas etapas

- Leitura/escrita com readback independente em dispositivos reais OPC UA, Modbus TCP, Modbus RTU (USB-para-RS-485) e BACnet/IP em um reComputer R10 series ou reTerminal DM.
- Uma execução não supervisionada de 72 horas nos mesmos hosts alvo, com exercícios de recuperação de rede, broker, processos e dispositivos durante a execução.

## Fontes de dados e ativos

- **Resultados medidos** — carga do simulador de quatro protocolos, em um reComputer R2000 series (arm64) e uma estação de trabalho Linux x86_64, commits upstream `b5fe4cc` e `f831bae`. Reproduzido a partir de
  `description.md` do próprio pacote upstream; os registros brutos de execução ficam com o projeto upstream.
- **Imagens e links de produtos** — catálogo de produtos Seeed (`media-cdn.seeedstudio.com`), SKUs correspondendo aos
  bundles na página do design de referência.
- **Diagrama de arquitetura** — desenhado a partir da topologia `solution.yaml` upstream; é um
  esquema de composição de dispositivos, não uma captura de tela.
- A imagem de contêiner do runtime é distribuída a partir de `sensecraft-missionpack.seeed.cn`, não deste wiki.
