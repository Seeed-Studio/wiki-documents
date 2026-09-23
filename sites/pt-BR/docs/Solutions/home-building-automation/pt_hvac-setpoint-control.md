---
description: Controle de setpoint supervisório para HVAC central em um gateway de borda — um modelo de ponto único sobre OPC UA, Modbus e BACnet/IP mais um medidor de energia SDM630, previsão de setpoint com KNN e um caminho de escrita que verifica cada escrita lendo o ponto de volta
title: 'Controle de Setpoint de HVAC em um Gateway de Borda: Construção, Implantação e Resultados Medidos'
keywords:
  - controle de setpoint de HVAC
  - retrofit de energia em edifícios
  - controle supervisório
  - BACnet/IP
  - Modbus TCP
  - Modbus RTU
  - OPC UA
  - Eastron SDM630
  - modelo de medidor de energia
  - previsão com KNN
  - verificação de escrita com leitura de retorno
  - rollback de controle
  - reComputer R1100
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/hvac-setpoint-control
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/hvac-setpoint-control/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Este é um **recomendador de setpoint supervisório**, não um sistema de controle certificado para segurança. Os próprios
intertravamentos e controles de segurança da planta continuam no comando, e cada escrita permanece dentro dos limites aprovados
por um engenheiro de site nomeado. **Nenhum valor de economia de energia é declarado em qualquer lugar deste pacote** — ainda não
existe comparação de linha de base, normalização por clima ou ocupação, nem período de medição definido. Os números medidos
abaixo vêm de simuladores de protocolo em hardware de desenvolvedor, não de um edifício.
:::

## O que esta solução faz

Uma planta central de HVAC em um escritório, shopping ou fábrica geralmente opera com um cronograma fixo: o mesmo setpoint
esteja o andar cheio ou vazio. Esta solução coloca um gateway ao lado da planta que lê o controlador de HVAC
e um medidor de energia em **um modelo de ponto único**, aprende uma recomendação de setpoint a partir dos próprios dados
históricos daquele edifício e a escreve de volta no controlador — mas só considera a escrita aplicada
depois que o valor foi lido de volta do campo e comparado com o que foi enviado.

Ela é usada em planta central: chillers, unidades de tratamento de ar e os controladores à frente deles. Não é para
aparelhos de ar-condicionado tipo split e não está no laço de segurança.

- Seleção e implantação: [página de projeto de referência](https://www.seeed.cc/solutions/reference-designs/smart_hvac_control)
- Repositório upstream: não publicado. O `intro.links.github` do pacote aponta para `github.com/Seeed-Solution/Solution_HVAC_SmartControl`, que não é publicamente acessível (HTTP 404 em 2026-09-22).

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Um modelo de ponto único, quatro protocolos</h3>
                <p>OPC UA, Modbus TCP, Modbus RTU sobre RS-485 e BACnet/IP chegam ao mesmo registro — 2.000 pontos, dos quais até 50 podem ser graváveis.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Uma escrita só é aplicada depois de ser lida de volta</h3>
                <p>Valor, qualidade, carimbo de data/hora e prioridade do último estado conhecido como bom são congelados antes da escrita; o ponto é relido após um atraso de estabilização e comparado dentro de uma tolerância. Uma leitura de retorno cuja qualidade não é boa nunca é considerada verificada.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Rollback em cinco gatilhos, alarmes indexados por causa</h3>
                <p>Incompatibilidade na leitura de retorno, fonte offline, previsão desativada, abortar pelo operador, lote parcialmente aplicado. Cinco tipos de alarme, cada um identificado por sua causa, de modo que uma falha recorrente reutiliza o alarme aberto.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Capacidade medida: 2.000 pontos a 349,99 eventos/s</h3>
                <p>Contra uma meta de 350,0, uma execução de loopback de 180 s em uma série reComputer R2000. As condições são detalhadas no apêndice.</p>
            </div>
        </li>
    </ul>
</div>

### O que o console mostra

O console em execução renderiza a tabela de pontos com qualidade por ponto, a página de acesso com cada fonte e
sua contagem de pontos registrados, e um livro-razão de recebimento de comandos. É no livro-razão que o caminho de escrita fica visível:
cada linha traz o valor solicitado, o valor efetivo, o ator, o reconhecimento do protocolo e —
após o atraso de estabilização — o resultado da leitura de retorno. Uma escrita cujo registrador foi alterado fora de banda é lida como
`mismatched, compensated` com o valor que foi encontrado, e o comando de compensação emitido por
`plugin:prediction:rollback` aparece como a próxima linha.

A página de acesso lista cada fonte com sua contagem de pontos registrados; este é o primeiro lugar onde a fiação aparece como funcionando:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-list-en-9837244f.png" alt="Página de acesso: protocolo, endereço, estado online e contagem de pontos registrados para cada fonte"/>
</div>

A tabela de pontos traz a qualidade por ponto, então um ponto que não está lendo `good` fica visível aqui:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/points-en-477df2ca.png" alt="Tabela de pontos: nome, valor atual, unidade, qualidade e última atualização"/>
</div>

A página de runtime da previsão mostra os setpoints recomendados desta rodada, a janela de histórico por trás deles e o modo de controle atual:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/prediction-runtime-en-9217f059.png" alt="Página de runtime da previsão: setpoints recomendados desta rodada, janela de histórico e modo de controle"/>
</div>

O caminho de escrita é visível no livro-razão de recebimento de comandos — valor solicitado, valor efetivo, ator, reconhecimento do protocolo e leitura de retorno recebem cada um uma coluna:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/control-step2-en-ae5581de.png" alt="Etapa dois do despacho de comando: confirmar o valor a ser escrito, o ponto de destino e os limites de segurança"/>
</div>

Em todas as capturas acima, os dispositivos de campo são os próprios simuladores de protocolo do repositório, não um medidor ou controlador físico — a lógica de gateway por trás deles é real.

## De que hardware você precisa

Três coisas: um controlador que você já tem, um medidor e um host Docker.

**① O controlador de HVAC** — qualquer coisa que já esteja à frente da planta, desde que fale OPC UA, Modbus
TCP/RTU ou BACnet/IP. Para um teste em seco sem planta conectada, o pacote traz um simulador OPC UA na porta
4841.

**② O medidor de energia** — um Eastron SDM630 no mapa de registradores Modbus V2, via Modbus TCP, um gateway
Modbus TCP ou RS-485. Dez pontos somente leitura: tensão e corrente trifásicas, potência ativa total (kW), fator
de potência total, frequência, energia ativa importada (kWh).

**③ O host do gateway** — esta é a única decisão de compra. O serviço é uma carga de trabalho Docker em x86-64 ou
arm64, então uma máquina Linux já na rede da planta é um alvo suportado.

| | Gateway | Armazenamento | Quando escolhê-lo |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991374.jpg" alt="reComputer R1124-10" width="110" /> | [reComputer R1124-10](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)<br/>4 GB RAM, RS-485 / RS-232 / DI / DO on board | 16 GB eMMC | O histórico fica em um servidor; o gateway mantém uma janela local curta |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>mesma placa, eMMC maior | 32 GB eMMC | Meses de histórico de operação permanecem no gateway; o conjunto de treinamento pode ser reimportado localmente |

A série R1100 traz RS-485 on board, então um medidor em RS-485 não precisa de adaptador USB. O **serviço em si
precisa de cerca de 1 GB de disco** — a coluna de armazenamento é sobre até onde você consegue olhar para trás sem um servidor, não
sobre se a aplicação cabe.

Outros pré-requisitos: Docker Engine 20.10 ou mais recente, portas 8280 e 4841 livres no host e pelo menos uma semana de
operação histórica em CSV ou Excel com colunas de carimbo de data/hora, setpoint, temperatura medida e consumo de
energia.

## Como implantar no local

Três etapas, e a terceira é a que decide se a implantação é confiável.

### 1. Fiação: o que decide o sucesso

:::tip[Confirme a ordem de bytes e palavras do medidor antes de acreditar em qualquer valor]
O modelo SDM630 integrado usa por padrão bytes e palavras big-endian porque esse é o padrão publicado pelo fornecedor — **não**
porque ele foi verificado contra um medidor físico. Leia um registrador com um valor físico conhecido e compare com o próprio
display do medidor. Tensão e frequência que parecem plausíveis mas estão erradas, e energia importada que salta para trás, são
ambos sintomas de ordem de palavras, não falhas de fiação.
:::

Coloque o gateway na mesma rede que o controlador e o medidor (ou seu gateway Modbus TCP). Para
Modbus RTU, faça o baud rate, a paridade e o unit id corresponderem ao que está configurado no medidor — uma incompatibilidade é lida
como timeout, não como mensagem de erro — e use o **perfil de implantação serial-device**: o perfil padrão
do Docker não anexa nenhum dispositivo serial do host, então `/dev/ttyUSB0` simplesmente não existirá dentro do contêiner.

### 2. Software: três etapas

Os formulários de cada etapa e seus campos estão na página do reference design, onde responder a algumas perguntas sobre o local também fornece o pacote de aplicação correspondente para download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_hvac_control" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

O resumo é:

1. **Implantar o serviço** — implantação Docker, seja na máquina que executa a ferramenta de implantação ou via
   SSH para um dispositivo na rede da planta. O formulário carrega o transporte do medidor, o endpoint OPC UA,
   os limites de segurança, o modo de controle e os limiares de alarme.
2. **Abrir o console** — criar o primeiro administrador e confirmar que ambas as fontes estão online com suas
   contagens de pontos esperadas. O assistente de acesso solicita endereço e intervalo de pesquisa por protocolo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-wizard-step1-en-7a3d57a8.png" alt="Primeira etapa do assistente de acesso: escolha o protocolo, preencha o endereço e o intervalo de pesquisa"/>
</div>

3. **Comissionar** — registrar o medidor, executar previsões em modo observe, injetar falhas de propósito e só
   então habilitar escritas. Antes que um lote seja enviado, confirme na página de seleção exatamente quais pontos ele cobre:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/batch-select-en-9bd95ba4.png" alt="Seleção de envio em lote: os pontos cobertos por este lote e seus valores atuais"/>
</div>

<!-- TODO image: gateway installed in the plant room next to the unit — needs a field shoot -->
<!-- TODO image: a physical meter and controller as wired (every capture here is behind a protocol simulator) — needs a field shoot -->

**Deixe Control Mode em `observe` e deixe Safety Baseline Approved By em branco.** Um campo de aprovador em branco é
o que mantém a linha de base sendo reportada como não aprovada; preenchê-lo é uma assinatura, não uma formalidade.

A estimativa para chegar a um console em execução com leitura de pontos é de cerca de **60 minutos**. O comissionamento leva mais tempo,
porque inclui um ciclo completo de ocupação de previsões em modo observe revisadas por quem opera a
planta.

:::caution[Verifique primeiro a tag da imagem]
`docker inspect -f '{{.Config.Image}}' missionpack_knn`. A tag publicada `missionpack-knn:v1.6.5`
**não** inclui o template SDM630, o coordenador de rollback nem o envelope de alarme. A imagem que inclui
ainda não foi construída ou enviada, e sua tag imutável ainda será atribuída. Na v1.6.5 as subetapas de modo observe
ainda se aplicam; as subetapas de medidor, rollback e alarme não podem ser concluídas.
:::

## Como conectá-lo ao seu próprio sistema

Tudo o que a implantação expõe fica atrás de uma porta HTTP no host do gateway. Nada sai da rede da planta
a menos que a publicação northbound seja ativada.

- **Operadores** — o console no navegador em `8280`: tabela de pontos com qualidade por ponto, registro de medidor,
  execuções de previsão, recibos de comando, faixa de alarmes.
- **Monitoramento** — `GET /system/runtime-metrics`. Com a publicação northbound ativada, ele inclui
  `northbound.spool.queued` e `northbound.spool.dropped`; `queued` voltando para 0 com `dropped` inalterado é
  a verificação solicitada na etapa de comissionamento.
- **Seu próprio sistema** — a mesma superfície de API do console atrás de `8280`, além do endpoint de saúde que a implantação
  aguarda na inicialização.

### Lista completa de endpoints

| Porta / endpoint | O que atende | Precisa de internet |
|---|---|---|
| `8280` `/` | Console no navegador | Não |
| `8280` `/system/runtime-metrics` | Contadores de runtime, contadores de spool northbound | Não |
| `8280` `/api/v1/health` | Verificação de saúde; a inicialização permite 30 s | Não |
| `4841` | Simulador OPC UA integrado, para um dry run | Não |

**O campo mais frequentemente lido de forma errada é o resultado de readback em um recibo de comando.** `protocol_acknowledged` significa
que o controlador aceitou o frame. Não significa que a planta se moveu. Somente a coluna de readback — `matched`,
ou `mismatched, compensated` com o valor encontrado — informa o que o campo realmente contém. Uma compensação
emitida pelo coordenador de rollback aparece como seu próprio recibo imediatamente após a escrita que ele desfez, de modo que o
rastro de auditoria fique em ordem sem juntar duas tabelas.

Os logs do contêiner fazem rotação a cada 10 MB com quatro backups (`docker logs missionpack_knn`). Exporte o rastro de auditoria de comandos,
o diário de rollback e o histórico de alarmes antes que expirem.

## Para engenheiros: detalhes de implementação

### O modelo de pontos

Um único registro mantém todos os pontos, independentemente de como chegaram. O limite é de **2.000 pontos**, dos quais no
máximo **50 podem ser graváveis**. Os dez pontos do medidor SDM630 são somente leitura e contam para os 2.000, não
para os 50.

| Transporte | Papel neste design | Restrições |
|---|---|---|
| OPC UA | Leitura e escrita do controlador de HVAC | Endpoint configurado por implantação; simulador integrado em 4841 |
| Modbus TCP | Medidor e controlador | Unit id e porta por fonte; direto ou por meio de um gateway TCP |
| Modbus RTU (RS-485) | Medidor | Requer o perfil de implantação serial-device; o perfil padrão não anexa nenhum dispositivo serial do host |
| BACnet/IP | Leitura e escrita do manuseador de ar | Escritas usam uma prioridade e liberam com `Null`. **Assinatura COV, registro BBMD e MS-TP não estão implementados** |

Templates de dispositivo — incluindo o template SDM630 integrado — geram um **CSV estrito limitado a 256 linhas**, e um
template integrado passa pelo mesmo parser que um template escrito manualmente. Um template personalizado que excede
esse limite é recusado por esse mesmo parser.

### O caminho de escrita: congelar, escrever, ler de volta, comparar

A sequência para cada escrita, em ordem:

1. Congelar o último valor bom conhecido, qualidade, timestamp e prioridade BACnet para o ponto.
2. Emitir a escrita pelo caminho de escrita autorizado — sujeito ao sinalizador de habilitação de escrita e à
   política de escrita, aos quais uma compensação também está sujeita.
3. Aguardar `settle_seconds` após a conclusão do lote.
4. Ler o ponto novamente e comparar dentro da `readback tolerance`.
5. Um readback cuja **qualidade não seja `good` nunca verifica**, qualquer que seja o valor que ele contenha.

Readback e compensação são executados **depois** do lote, não dentro dele, portanto não entram na latência do ciclo.
O próximo lote aguarda o anterior atingir um estado terminal, o que mantém no máximo uma
escrita em andamento por ponto.

**Somente pontos Modbus são verificados.** Uma saída BACnet é ignorada, porque o ciclo de produção não fornece
prioridade de escrita para ela e uma compensação não saberia qual prioridade liberar.

### Rollback e alarmes

Cinco gatilhos de rollback: readback mismatch, fonte offline, previsão desativada, abortar pelo operador e um
lote parcialmente aplicado. Pontos BACnet são liberados com `Null` na prioridade em que foram escritos;
pontos Modbus são restaurados na ordem inversa àquela em que foram aplicados.

Cinco tipos de alarme, cada um **identificado por sua causa em vez de pelo evento**, de modo que uma falha recorrente reutiliza
o alarme aberto em vez de abrir um segundo:

| Alarme | Severidade | Motivo |
|---|---|---|
| `source-offline` | aviso | A planta mantém seu setpoint anterior |
| `stale-sample` | aviso | Mesmo |
| `write-failed` | aviso | Mesmo |
| `readback-mismatch` | aviso | Mesmo |
| `compensation-failed` | **crítico** | A planta é deixada em um estado desconhecido |

Reconhecer um alarme registra que um operador o viu; **somente uma recuperação o limpa**, e a recuperação
carrega o id do alarme que ela limpa. Se você vir a mesma falha abrindo um novo alarme a cada vez, os campos de causa
são diferentes — compare os ids de fonte e de ponto.

### Parâmetros e seus valores enviados

Formulário de implantação (`devices/deploy.yaml`):

| Parâmetro | Padrão enviado | Observação |
|---|---|---|
| Control Mode | `observe` | Nada é escrito até que um operador altere isto |
| Minimum / Maximum Setpoint | 18 / 30 °C | **Placeholder** |
| Maximum Change / Change Window | 1.0 °C / 300 s | **Placeholder** |
| Mode whitelist | off / fan / cool / heat / auto | **Placeholder** |
| Safety Baseline Approved By | *(blank)* | Em branco é o que mantém a linha de base sendo reportada como não aprovada |
| Readback Delay | 10 s | |
| Readback Tolerance | 0.05 | |
| Stale Sample Threshold | 60 s | |
| Meter TCP Port / Unit ID | 502 / 1 | |
| Serial device / baud | `/dev/ttyUSB0` / 9600 | 19200 e 38400 também selecionáveis |

Configuração de execução de previsão, criada no console em vez de por meio de uma variável de implantação:

```json
{
  "schema_version": "prediction-run.v3",
  "interval_seconds": 60,
  "rollback": { "enabled": true, "settle_seconds": 2.5 }
}
```

**A verificação de write-back fica desativada, a menos que a configuração de execução a solicite.** Uma configuração sem
seção `rollback` migra para `enabled: false` em vez de ganhar silenciosamente um novo caminho de escrita — defina a
seção explicitamente quando iniciar a execução. `settle_seconds` (0–30, padrão 1.0) **deve ser maior que o
intervalo de coleta da fonte**, ou o readback verá o valor de antes da escrita e reportará um mismatch
que nunca aconteceu.

O modelo de previsão é KNN sobre os próprios dados históricos de operação do prédio, importados como CSV ou Excel
com colunas de timestamp, setpoint, temperatura medida e consumo de energia. Ele aprende a partir daquele prédio
em vez de a partir de uma curva genérica, e as previsões ficam visíveis no console antes que qualquer uma delas seja
permitida a chegar ao controlador.

## Apêndice: dados medidos {#measured-data}

Esta seção é para leitores que estão conferindo os números; ignorá-la não afeta a implantação. Tudo aqui
foi medido com **simuladores de protocolo em hardware de desenvolvedor**, não em um prédio. Cada valor é uma
amostra única, salvo indicação em contrário, e nenhum foi reproduzido de forma independente.

### O que foi medido

| Item | Status |
|---|---|
| Taxa de amostragem em 2.000 pontos | **Medido**, uma execução de 180 s |
| Latência do ciclo de predição | **Medição de fumaça**, n = 4 ciclos |
| Latência de admissão de controle | **Medição de fumaça**, n = 2 ciclos |
| Execução contínua de 24 h | **Pendente.** Um soak foi executado de 2026-09-05 a 2026-09-06 no mesmo host; o veredito ainda não saiu. Nenhuma execução de 7 dias ou 30 dias foi iniciada |
| Rollback e alarmes de ponta a ponta | **Conectados ao ciclo de predição, exercitados apenas contra simuladores de protocolo** |

### Capacidade

| Métrica | Valor | Condições |
|---|---:|---|
| Taxa de amostragem | 349,99 eventos/s (99,99% de uma meta de 350,0) | 2.000 pontos, quatro fontes de protocolo |
| Taxa de predição | 0,939 ciclo/s | Mesma execução |
| Pico de RSS do grupo de processos | 217,3 MiB | Mesma execução |

Condições para todas as três linhas: 2.000 pontos em quatro fontes de protocolo, OPC UA e Modbus amostrados a cada 5 s
e BACnet a cada 10 s, apenas loopback, **180 s**, em um reComputer R2000 series (arm64), captura `capacity-smoke` r14,
upstream `b5fe4cc`. Uma única execução desse comprimento é um teste de capacidade de fumaça, não um resultado de estabilidade.

### Latência

| Métrica | Valor | Condições |
|---|---:|---|
| Latência do ciclo de predição | 46,27 ms máxima | n = 4 ciclos |
| Latência de admissão de controle | 1,41 ms máxima | n = 2 ciclos |

Ambas são métricas de tempo de execução da base de referência do rig `northbound-smoke`, upstream `f831bae`. **Duas e quatro
amostras não descrevem nada sobre um sistema sob carga** — elas limitam o caminho de código, não a implantação.

### Um defeito conhecido e em aberto

O loop de predição dorme um intervalo fixo após cada ciclo, portanto sua taxa é `1/(1.0 + t_cycle)`. Em 2.000
pontos `t_cycle` é cerca de **0,119 s**, o que coloca o teto estrutural próximo de **0,894 ciclo/s** — abaixo do
limite de 0,90 que o harness de soak impõe. Isso se reproduziu em todas as execuções da rodada 3, incluindo uma sem falha
injetada. Ou o loop ou o limite precisa mudar; nenhum mudou.

### Onde será pior do que isto

- **Dispositivos de campo reais, não simuladores.** Cada número acima foi obtido contra os próprios
  simuladores de protocolo deste repositório via loopback. Um controlador real adiciona latência de rede, novas tentativas e timeouts.
- **Ordem de bytes.** Até que uma etapa de comissionamento a confirme em relação ao próprio visor do medidor, os pontos
  de medidor escalonados são apenas tão confiáveis quanto o padrão publicado pelo fornecedor.
- **Rollback e alarmes na sua planta.** Ambos estão conectados ao ciclo de predição upstream, mas um
  simulador que sempre responde não é uma planta que às vezes não responde. Exercite deliberadamente fonte-offline,
  readback-mismatch e stale-sample antes de habilitar gravações.
- **Qualquer coisa além de 180 segundos.** O veredito do soak de 24 h ainda não saiu, e nenhuma execução mais longa foi iniciada.

## Fontes de dados e ativos

- **Mapa de registradores SDM630** — documento publicado pela Eastron sobre o protocolo Modbus (mapa de registradores Modbus V2, registradores de entrada float32
  IEEE-754). Os endereços seguem esse documento; a ordem de bytes e de palavras big-endian é o
  padrão do fornecedor — confirme-a em relação ao seu próprio medidor.
- **Dados históricos de operação** — fornecidos pelo site que está implantando. Nada é distribuído com o pacote,
  e nenhum conjunto de dados público é usado ou exigido.
- **Capturas de console** — capturas de tela originais do software empacotado em execução contra os
  próprios simuladores de protocolo deste repositório. A configuração do simulador, o host de captura e os checksums estão
  registrados em `gallery/ATTRIBUTION.md` do pacote. Nenhum ativo de terceiros, marca registrada ou imagem de banco de imagens é
  incluído.
- **Diagrama de arquitetura** — desenhado para este projeto de referência a partir de um IR de arquitetura estruturada; trabalho
  original, nenhuma arte de terceiros.
