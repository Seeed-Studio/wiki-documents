---
description: Controle de setpoint supervisório para HVAC central em um gateway de borda — um modelo de ponto único sobre OPC UA, Modbus e BACnet/IP mais um medidor de energia SDM630, previsão de setpoint por KNN e um caminho de escrita que verifica cada escrita lendo o ponto de volta
title: 'Controle de Setpoint de HVAC em um Gateway de Borda: Hardware, Implantação e Resultados Medidos'
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
  - previsão por KNN
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/solutions/hvac-setpoint-control/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Este é um **recomendador de setpoint supervisório**, não um sistema de controle certificado para segurança: os intertravamentos e controles de segurança próprios da planta têm precedência, e nenhum valor de economia de energia é fornecido.
:::

## O que esta solução faz

Uma planta central de HVAC em um escritório, shopping ou fábrica normalmente opera com um cronograma fixo: o mesmo setpoint esteja o andar cheio ou vazio. Esta solução coloca um gateway ao lado da planta que lê o controlador de HVAC e um medidor de energia em **um modelo de ponto único**, aprende uma recomendação de setpoint a partir dos próprios dados históricos daquele edifício e a escreve de volta no controlador; uma escrita só conta como aplicada depois que o valor tiver sido lido de volta do campo e corresponder ao que foi enviado.

Ela é usada em planta central: chillers, unidades de tratamento de ar e os controladores à frente deles. Não é para aparelhos de ar-condicionado tipo split e não está no circuito de segurança.

- Seleção e implantação: [página de design de referência](https://www.seeed.cc/solutions/reference-designs/smart_hvac_control)
- Repositório de código-fonte: não publicado. `github.com/Seeed-Solution/Solution_HVAC_SmartControl` não é acessível publicamente.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Controladores e medidores existentes conectam como estão</h3>
                <p>Controladores que falam OPC UA, Modbus TCP, Modbus RTU sobre RS-485 ou BACnet/IP não são substituídos, e o medidor SDM630 tem um modelo integrado. Até 2.000 pontos, dos quais até 50 podem ser graváveis.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Cada escrita é lida de volta e verificada</h3>
                <p>Valor, qualidade, carimbo de data/hora e prioridade de último-valor-válido são congelados antes da escrita; o ponto é relido após um atraso de estabilização e comparado dentro de uma tolerância. Uma leitura de retorno cuja qualidade não seja boa não é aprovada.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Rollback automático e alarmes em falhas</h3>
                <p>Incompatibilidade na leitura de retorno, fonte offline, previsão desativada, abortar pelo operador e um lote parcialmente aplicado todos disparam um rollback. Alarmes são indexados pela causa, então uma falha recorrente reutiliza o alarme aberto.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Capacidade medida: 2.000 pontos a 349,99 eventos/s</h3>
                <p>Contra uma meta de 350,0, medido em uma execução de loopback de 180 s em um reComputer série R2000. As condições estão no apêndice.</p>
            </div>
        </li>
    </ul>
</div>

### O que o console mostra

O console em execução renderiza a tabela de pontos com qualidade por ponto, a página de acesso com cada fonte e sua contagem de pontos registrados, e um livro-razão de recebimento de comandos. É no livro-razão que o caminho de escrita fica visível: cada linha traz o valor solicitado, o valor efetivo, o ator, o reconhecimento do protocolo e — após o atraso de estabilização — o resultado da leitura de retorno. Uma escrita cujo registrador foi alterado fora de banda lê `mismatched, compensated` com o valor que foi encontrado, e o comando de compensação emitido por `plugin:prediction:rollback` aparece como a próxima linha.

A página de acesso lista cada fonte com sua contagem de pontos registrados; este é o primeiro lugar onde a fiação aparece como funcionando:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-list-en-9837244f.png" alt="Página de acesso: protocolo, endereço, estado online e contagem de pontos registrados para cada fonte"/>
</div>

A tabela de pontos traz a qualidade por ponto, então um ponto que não está lendo `good` fica visível aqui:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/points-en-477df2ca.png" alt="Tabela de pontos: nome, valor atual, unidade, qualidade e última atualização"/>
</div>

A página de runtime de previsão mostra os setpoints recomendados desta rodada, a janela de histórico por trás deles e o modo de controle atual:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/prediction-runtime-en-9217f059.png" alt="Página de runtime de previsão: setpoints recomendados desta rodada, janela de histórico e modo de controle"/>
</div>

O caminho de escrita é visível no livro-razão de recebimento de comandos — valor solicitado, valor efetivo, ator, reconhecimento do protocolo e leitura de retorno recebem cada um uma coluna:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/control-step2-en-ae5581de.png" alt="Etapa dois do despacho de comando: confirmar o valor a escrever, o ponto de destino e os limites de segurança"/>
</div>

As capturas acima estão conectadas aos próprios simuladores de protocolo do pacote, não a um medidor ou controlador físico; o lado do gateway executa o software fornecido.

## De que hardware você precisa

Três coisas: um controlador que você já tem, um medidor e um host Docker.

**① O controlador de HVAC** — qualquer que já esteja à frente da planta, desde que fale OPC UA, Modbus TCP/RTU ou BACnet/IP. Para um teste em seco sem planta conectada, o pacote traz um simulador OPC UA na porta 4841.

**② O medidor de energia** — um Eastron SDM630 no mapa de registradores Modbus V2, via Modbus TCP, um gateway Modbus TCP ou RS-485. Dez pontos somente leitura: tensão e corrente trifásicas, potência ativa total (kW), fator de potência total, frequência, energia ativa importada (kWh).

**③ O host do gateway** — o único dispositivo que você precisa escolher. O serviço é uma carga de trabalho Docker em x86-64 ou arm64, então uma máquina Linux já na rede da planta é um alvo suportado.

| | Gateway | Armazenamento | Quando escolhê-lo |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991374.jpg" alt="reComputer R1124-10" width="110" /> | [reComputer R1124-10](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)<br/>4 GB RAM, RS-485 / RS-232 / DI / DO na placa | 16 GB eMMC | O histórico fica em um servidor; o gateway mantém uma janela local curta |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>mesma placa, eMMC maior | 32 GB eMMC | Meses de histórico de operação permanecem no gateway; o conjunto de treinamento pode ser reimportado localmente |

A série R1100 traz RS-485 na placa, então um medidor em RS-485 não precisa de adaptador USB. O **serviço em si precisa de cerca de 1 GB de disco**; o armazenamento decide quanto histórico você pode consultar localmente sem um servidor.

Outros pré-requisitos: Docker Engine 20.10 ou mais recente, portas 8280 e 4841 livres no host e pelo menos uma semana de operação histórica em CSV ou Excel com colunas de carimbo de data/hora, setpoint, temperatura medida e consumo de energia.

## Como implantar no local

### 1. Instale o hardware: fiação

:::tip[Verifique primeiro a ordem de bytes e palavras do medidor]
O modelo SDM630 integrado usa por padrão bytes e palavras big-endian, conforme o padrão publicado pelo fornecedor. Leia um registrador com um valor físico conhecido e compare com o próprio visor do medidor. Tensão e frequência que são próximas mas incorretas, ou energia importada que salta para trás, geralmente significam um erro na configuração da ordem de palavras; verifique a ordem de palavras antes da fiação.
:::

Coloque o gateway na mesma rede que o controlador e o medidor (ou seu gateway Modbus TCP). Para Modbus RTU, faça a taxa de baud, paridade e id da unidade corresponderem ao que o medidor está configurado; uma incompatibilidade mostra apenas como um tempo limite, sem mensagem de erro. Use o **perfil de implantação serial-device**: o perfil padrão do Docker não anexa nenhum dispositivo serial do host, portanto não há `/dev/ttyUSB0` dentro do contêiner.

### 2. Software: três etapas

Os campos de formulário por etapa e os pacotes de aplicação estão na página do design de referência; escolha uma configuração para o seu site e faça o download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_hvac_control" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

Resumo:

1. **Implante o serviço** — implantação em Docker, seja na máquina que executa a ferramenta de implantação ou via SSH para um dispositivo na rede da planta. O formulário carrega o transporte do medidor, o endpoint OPC UA, os limites de segurança, o modo de controle e os limiares de alarme.
2. **Abra o console** — crie o primeiro administrador e confirme que ambas as fontes estão online com suas contagens de pontos esperadas. O assistente de acesso solicita endereço e intervalo de sondagem por protocolo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-wizard-step1-en-7a3d57a8.png" alt="Primeira etapa do assistente de acesso: escolha o protocolo, preencha o endereço e o intervalo de sondagem"/>
</div>

3. **Comissione** — registre o medidor, execute previsões em modo observe, injete falhas de propósito e só então habilite escritas. Antes que um lote seja enviado, confirme na página de seleção exatamente quais pontos ele cobre:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/batch-select-en-9bd95ba4.png" alt="Seleção de despacho de lote: os pontos cobertos por este lote e seus valores atuais"/>
</div>

<!-- TODO imagem: gateway instalado na sala de máquinas ao lado da unidade — precisa de sessão de fotos em campo -->
<!-- TODO imagem: um medidor físico e controlador conforme cabeamento (cada captura aqui está por trás de um simulador de protocolo) — precisa de sessão de fotos em campo -->

**Deixe Control Mode em `observe` e deixe Safety Baseline Approved By em branco.** Enquanto o aprovador estiver em branco, a linha de base aparece como não aprovada; inserir um nome significa que esse engenheiro aprova os limites de segurança.

A estimativa até um console em execução com leitura de pontos é de cerca de **60 minutos**. O comissionamento leva mais tempo, porque inclui um ciclo completo de ocupação de previsões em modo observe revisadas por quem opera a planta.

:::caution[O que a imagem publicada cobre]
A imagem publicada `missionpack-knn:v1.6.5` **não** inclui o template SDM630, o coordenador de rollback nem o envelope de alarme. Na v1.6.5 as subetapas de modo observe ainda se aplicam; as subetapas de medidor, rollback e alarme não podem ser concluídas.
:::

## Interfaces disponíveis

Tudo o que a implantação expõe fica atrás de uma porta HTTP no host gateway. Nada sai da rede da planta a menos que a publicação para o norte seja ativada.

- **Operadores** — o console no navegador em `8280`: tabela de pontos com qualidade por ponto, registro de medidor, execuções de previsão, recibos de comando, faixa de alarmes.
- **Monitoramento** — `GET /system/runtime-metrics`. Com a publicação para o norte ativada, ele inclui `northbound.spool.queued` e `northbound.spool.dropped`; `queued` voltando para 0 com `dropped` inalterado é a verificação solicitada na etapa de comissionamento.
- **Seu próprio sistema** — a mesma superfície de API do console atrás de `8280`, além do endpoint de saúde que a implantação aguarda na inicialização.

### Lista completa de endpoints

| Porta / endpoint | O que atende | Precisa de internet |
|---|---|---|
| `8280` `/` | Console no navegador | Não |
| `8280` `/system/runtime-metrics` | Contadores de runtime, contadores de spool para o norte | Não |
| `8280` `/api/v1/health` | Verificação de saúde; a inicialização permite 30 s | Não |
| `4841` | Simulador OPC UA embutido, para um dry run | Não |

**Em um recibo de comando, leia a coluna de readback**: `protocol_acknowledged` só significa que o controlador aceitou o quadro. A coluna de readback (`matched`, ou `mismatched, compensated` com o valor encontrado) é o que o campo realmente contém. Uma compensação emitida pelo coordenador de rollback aparece como seu próprio recibo imediatamente após a escrita que ele desfez, de modo que o trilho de auditoria fica em ordem sem juntar duas tabelas.

Os logs do contêiner fazem rotação a cada 10 MB com quatro backups (`docker logs missionpack_knn`). Exporte o trilho de auditoria de comandos, o diário de rollback e o histórico de alarmes antes que expirem.

### Escopo do protocolo para o sul

Todos os pontos ficam em um único registro, limitado a **2.000 pontos**, dos quais no máximo **50 podem ser graváveis**. Os 10 pontos do medidor SDM630 são somente leitura; eles contam para os 2.000 e não para os 50.

| Transporte | Papel | Restrições |
|---|---|---|
| OPC UA | Leitura e escrita no controlador de HVAC | Endpoint definido por implantação; simulador embutido em 4841 |
| Modbus TCP | Medidor e controladores | ID de unidade e porta por fonte; direto ou por meio de um gateway TCP |
| Modbus RTU (RS-485) | Medidor | Precisa do perfil de implantação serial-device; o perfil padrão não anexa dispositivos seriais do host |
| BACnet/IP | Leitura e escrita em unidades de tratamento de ar | Escritas usam uma prioridade e liberação com `Null`. **Assinatura COV, registro BBMD e MS-TP não estão implementados** |

## Desempenho e dados medidos {#dados-medidos}

Tudo aqui foi medido contra o simulador de protocolo em loopback; não há dados de um prédio real, e cada valor vem de uma única execução, salvo indicação em contrário.

### Capacidade

| Métrica | Valor | Condições |
|---|---:|---|
| Vazão de amostragem | 349,99 eventos/s (99,99% da meta de 350,0) | 2.000 pontos, 4 fontes de protocolo |
| Taxa de previsão | 0,939 ciclo/s | Mesma execução |
| Pico de RSS do grupo de processos | 217,3 MiB | Mesma execução |

Condições para todas as três linhas: 2.000 pontos em 4 fontes de protocolo, OPC UA e Modbus amostrados a cada 5 s, BACnet a cada 10 s, apenas loopback, execução de **180 s**, em um reComputer série R2000 (arm64).

Reproduzir: upstream `b5fe4cc`, captura `capacity-smoke` r14

### Latência

| Métrica | Valor | Condições |
|---|---:|---|
| Latência do ciclo de previsão | 46,27 ms máx | n = 4 ciclos, sem carga |
| Latência de admissão de controle | 1,41 ms máx | n = 2 ciclos, sem carga |

Ambas refletem apenas o custo do próprio caminho de código.

Reproduzir: upstream `f831bae`, baseline de runtime de `northbound-smoke`

### Runtime e parâmetros principais

O modelo de previsão é KNN, treinado no próprio histórico operacional do prédio (CSV ou Excel com colunas de timestamp, setpoint, temperatura medida e potência); o serviço é uma carga de trabalho Docker em x86-64 ou arm64. Cada previsão pode ser revisada no console antes de ir para o controlador.

- **Modo de controle e limites de segurança**: o modo de controle é fornecido como `observe`, portanto nenhum ponto é escrito até que um operador o altere. O mínimo / máximo de setpoint de 18 / 30 °C, a mudança máxima de 1,0 °C por 300 s e a lista permitida de modos off / fan / cool / heat / auto são todos **marcadores de posição**; preencha-os para a planta.
- **A verificação de write-back vem desativada por padrão**: a configuração de execução de previsão (criada no console) deve declarar `"rollback": { "enabled": true, "settle_seconds": 2.5 }` explicitamente; uma configuração sem seção `rollback` é tratada como `enabled: false`.
- **`settle_seconds`** (0–30, padrão 1,0) **deve ser maior que o intervalo de amostragem da fonte**, ou o readback verá o valor pré-escrita e reportará uma divergência que não existe.

### Degradação conhecida

- **A taxa de previsão tem um teto estrutural (ainda não corrigido)**: o loop de previsão dorme um intervalo fixo após cada ciclo, então sua taxa é `1/(1.0 + t_cycle)`. Em 2.000 pontos `t_cycle` é cerca de **0,119 s**, o que coloca o teto perto de **0,894 ciclo/s**, abaixo do limite de 0,90 exigido pelo teste de soak.
- **Apenas escritas Modbus são verificadas por readback**: uma saída BACnet não tem prioridade de escrita disponível e é ignorada.
- **Ordem de bytes**: até ser verificada em relação ao próprio display do medidor, os pontos do medidor são decodificados com a ordem de palavras padrão do fornecedor (big-endian) e podem estar errados.

### Próximas etapas

- Leitura/escrita com readback independente contra dispositivos reais OPC UA, Modbus TCP, Modbus RTU (USB-para-RS-485) e BACnet/IP em um reComputer série R10 ou reTerminal DM.
- Uma execução ininterrupta de 72 horas nos mesmos hosts de destino, com exercícios de recuperação de rede, broker, processos e dispositivos durante a execução.

## Fontes de dados e ativos

- **Mapa de registradores SDM630** — documento publicado pela Eastron sobre o protocolo Modbus (mapa de registradores Modbus V2, registradores de entrada float32 IEEE-754). Os endereços seguem esse documento; a ordem de bytes e palavras big-endian é o padrão do fornecedor.
- **Dados históricos de operação** — fornecidos pelo site que faz a implantação. Nada é distribuído com o pacote, e nenhum conjunto de dados público é usado ou exigido.
- **Capturas do console** — capturas de tela originais do software empacotado em execução contra os próprios simuladores de protocolo do pacote. A configuração do simulador, o host de captura e os checksums são registrados em `gallery/ATTRIBUTION.md` do pacote. Nenhum ativo de terceiros, marca registrada ou imagem de banco de imagens é incluído.
- **Diagrama de arquitetura** — desenhado a partir de um IR de arquitetura estruturado; trabalho original, nenhuma arte de terceiros.
