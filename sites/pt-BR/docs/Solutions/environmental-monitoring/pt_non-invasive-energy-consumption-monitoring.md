---
description: Monitoramento de energia doméstica/escritório sem fiação e sem dor de cabeça
title: Monitoramento de Energia CA Não Invasivo com Home Assistant
keywords:
  - CT
  - monitoramento de consumo de energia
  - Home Assistant
slug: /non_invasive_ct_energy_consumption
sidebar_position: 2
last_update:
  date: 08/18/2025
  author: Spencer
createdAt: '2025-08-08'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/non_invasive_ct_energy_consumption/
---

## 1. Visão Geral da Solução

Este guia descreve uma solução para implementar um sistema de medição de energia CA **não invasivo** usando módulos de hardware comuns e a plataforma de casa inteligente Home Assistant.

### Objetivos e Valor

Na busca moderna por gestão granular de energia e automação residencial inteligente, medidores de parede tradicionais ou tomadas inteligentes apresentam limitações claras. Um medidor de concessionária padrão fornece apenas um total "de baixa granularidade" do consumo de energia de uma residência. Embora uma tomada inteligente possa monitorar um aparelho individual, sua natureza "invasiva" (exigindo que ela seja colocada entre o dispositivo e a tomada) restringe seu uso, especialmente para aparelhos cabeados ou em locais de difícil acesso.

Esta solução foi projetada para lidar com esses pontos problemáticos. Seu valor central está em:

- **Implantação Não Invasiva**: Não é necessário cortar a energia ou modificar circuitos elétricos existentes. Basta fixar o transformador de corrente (CT) de núcleo dividido em **apenas um** fio de energia do aparelho-alvo para iniciar a medição. Isso reduz drasticamente a complexidade de instalação e os riscos de segurança.
- **Medição Granular**: Alcance monitoramento de energia em "nível de dispositivo" para aparelhos CA específicos como ar-condicionadores, bombas de água ou impressoras 3D. Obtenha dados precisos em tempo real, incluindo corrente, potência e consumo total de energia.
- **Baixo Custo e Alta Integração**: Utiliza o econômico módulo **XIAO ESP32-C6** e sensores CT padrão. Integra-se perfeitamente com ecossistemas IoT populares como o Home Assistant via ESPHome, permitindo visualização de dados, automação e alertas remotos.

### Público-Alvo

Este guia é destinado principalmente a:

- **Entusiastas de Casas Inteligentes**: Pessoas que desejam integrar dados de energia de aparelhos críticos ou de alto consumo ao Home Assistant para automações avançadas e estratégias de economia de energia.
- **Desenvolvedores e Integradores de Sistemas**: Profissionais que precisam fornecer soluções personalizadas de monitoramento de energia em nível de dispositivo para clientes.
- **Makers e Operadores de Pequenas Oficinas**: Usuários que desejam monitorar o status operacional e o consumo de energia de equipamentos como impressoras 3D e cortadoras a laser.
- **Auditores de Energia e Engenheiros de Manutenção**: Profissionais que realizam auditorias energéticas para descobrir "vampiros de energia" (alto consumo em standby) ou que usam monitoramento de corrente anormal para manutenção preditiva de equipamentos.

### Resultado Esperado

Os usuários construirão um pipeline completo de dados do mundo físico até uma aplicação digital, alcançando o seguinte:

1. **Monitoramento de Dados em Tempo Real**: Visualizar corrente instantânea, potência ativa e consumo total de energia de um ou mais dispositivos-alvo em tempo real no Home Assistant ou em qualquer plataforma compatível com MQTT.
2. **Dados Locais ou em Nuvem**: Transmitir com segurança os dados de monitoramento via Wi-Fi para um servidor local (como um Raspberry Pi ou NUC rodando Home Assistant) ou para uma plataforma IoT em nuvem.
3. **Automação Inteligente**: Criar cenários poderosos de automação no Home Assistant com base em dados precisos de potência e corrente. Por exemplo:
    - Quando o consumo de energia de uma impressora 3D cair abaixo de 5W por mais de um minuto, determinar que a impressão terminou, desligar automaticamente sua alimentação e enviar uma notificação para o celular.
    - Se a corrente de uma bomba de água permanecer consistentemente acima de sua faixa normal, enviar um alerta de possível travamento, prevenindo danos ao motor.

### Arquitetura do Sistema

![xx](https://mermaid.ink/svg/pako:eNqNVc1u00AQfpXVcgHJblLbcVwLVTIuKEiEFhp-BOGwsceJhb0brTdNS-kLoEpFgDhwgR54AC4IibfhBeARGHvd1C6_e9rZnfnmm_nG60MaiRioT6eSzWfk1t0xJ7iKxUQfzMSigMdj-uP9yQcyEDl0tpMkjYBc53upFDwHrsb0iY4qV5xKiFQqOBldOz8NQsT49u6UWFb3PlpkRyxBtgNhD3GrVK--khGTU1AkmM-zlPEIrk5kZ_PyTti5IdN4Cp0gvNKKRkjT3KxB9DHwWG8ulJQLniohq0yvX5ChNlM-JQMm4yWT8B8FhaMq_s0x7sgu8EJITTHMWD6HmKA_IwWiZkCWCNGm-_BmsK0JnFZ7bCfI6QEZgoIa6Prujm2ZodsOxGxlnWXM36vkoJZCPq2SHL8kt7VJRpLxIk-LAgtqAUuxwNSa02fyIDVvpORudbZy-1OqSHAlRVbFvv34_csJCfUJCXE6Lsr823YOAj1jp9WMkQD5FYpxpVuxmzOp9M1OxlQiZN7uSsyK2USgepr_J3KvAElulskTdjY8QzFJUQwcqc4DmLQBBoEenzOc3xash4uYa-bm8zENF1JieZX4KPOYPkdxtGOlqFl56UaWYlYfz_DOaHSldNXt1u56XwfcEhHLzuQqPQdBk0OUsaLYgqQms6sOsKQkzTL_UpKAC65RYOefQmk6uGrTXKaxmvnWfP8CTP0xNHHATewkWeE4juetzHOcXwjVA9di1E28BiPPi6J_M6qnqV1Z0m1VxtgfcRpodY8MfBsa3Wo6hCOj0qrZheZ9rUyztOb1IDBWE9PiTQ18T9OY-kouwKA5yJyVJj0sw8dUzSDHV8bHbcxKmcf8CGPmjD8SIj8Lw-zTGfUTlhVoLeYxU7CVMvzo8tUpjmAMMhQLrqi_7lYY1D-k-9Q3e-vOWt_uez3X7dme3e0b9ID6tr2xZq13-xt9y-451kbvyKDPqqzra57juF1rw7Ec1-3bPc-gEJeNGep_RPWrOPoJefADGA)

**Fluxo de Dados Explicado:**

1. **Sensoriamento Físico**: O aparelho-alvo opera normalmente, puxando corrente CA através de seu cabo de energia (especificamente, o fio de **Fase**).
2. **Aquisição de Sinal**: O sensor CT é fixado de forma não invasiva ao redor desse único fio de energia. Por meio de indução eletromagnética, ele gera uma pequena corrente secundária precisamente proporcional à corrente principal.
3. **Conversão A/D e Cálculo**: O XIAO Wi-Fi Energy Meter recebe o sinal analógico do sensor CT. Seu chipset de medição de energia integrado amostra e converte esse sinal, calculando valores RMS de corrente, potência e outras métricas.
4. **Transmissão Sem Fio**: O chip **ESP32-C6** integrado se conecta à rede Wi-Fi local e publica os dados processados usando a API nativa do ESPHome ou o protocolo MQTT.
5. **Consumo e Aplicação de Dados**: Um servidor Home Assistant assina esses dados, apresentando-os como entidades de sensores, registrando seu histórico e usando-os para acionar automações e notificações.

## 2. Seleção de Hardware

Para especificações detalhadas, visite o wiki do produto：[Seeed Studio 2-Channel Wi-Fi AC Energy Meter Wiki](/pt-br/2_channel_wifi_ac_energy_meter)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/pt-br/2_channel_wifi_ac_energy_meter/">
            <strong><span><font color={'FFFFFF'} size={"4"}> Visite o Wiki do produto 🖱️</font></span></strong>
    </a>
</div>

### Transformador de Corrente (CT) Não Invasivo

O sensor CT é a pedra angular do nosso sistema de medição "não invasivo". Ele funciona como um "estetoscópio" para circuitos elétricos, permitindo "ouvir" o fluxo de corrente sem fazer contato físico direto com o condutor.

#### Como Funciona

Ele opera com base no princípio de **indução eletromagnética**, idêntico a um transformador.

1. **Enrolamento Primário**: Quando você prende o sensor CT ao redor de um fio de energia, esse fio em si atua como o "enrolamento primário" com uma única espira (N=1).
2. **Campo Magnético**: À medida que a corrente alternada flui pelo fio, ela gera um campo magnético alternado ao seu redor.
3. **Enrolamento Secundário**: Dentro do sensor CT há um núcleo de ferrite e uma bobina de fio de cobre finamente enrolado. Isso forma o "enrolamento secundário".
4. **Corrente Induzida**: O campo magnético alternado do fio primário passa pelo núcleo e, de acordo com a Lei de Indução de Faraday, induz uma corrente CA pequena, mas precisamente proporcional, no enrolamento secundário.

**Vantagem Principal**: Todo o processo envolve apenas acoplamento magnético, sem conexão elétrica física. Isso o torna "não invasivo", seguro e conveniente.

#### Diretrizes de Instalação

Instalação incorreta é o motivo mais comum para leituras imprecisas ou zeradas.

:::danger Segurança em Primeiro Lugar!

Antes de prender ou ajustar qualquer sensor CT, você deve desligar o disjuntor correspondente. Use um testador de tensão para confirmar que o fio-alvo está completamente desenergizado. A segurança é sempre a principal prioridade.

:::

- **Direcionalidade**

  A carcaça do sensor CT geralmente possui uma seta (->) ou uma marca P1 -> P2 para indicar a direção "positiva" do fluxo de corrente. Para leituras precisas de potência ativa (que levam em conta o fator de potência), garanta que todos os sensores sejam instalados na mesma direção em relação à fonte de corrente (por exemplo, corrente fluindo de P1 para P2).

- **Posição de Fixação**

  Esta é a etapa mais crítica e suscetível a erros.

  - **Método Correto**: Certifique-se de que o sensor CT esteja preso ao redor de **apenas um** dos fios isolados — ou o fio de **Fase** ou o fio **Neutro**.
  - **Método Incorreto**: Nunca prenda o sensor CT ao redor de todo o cabo de alimentação que contém múltiplos condutores (Fase, Neutro e Terra).
  - **Por quê?**: Em um circuito CA monofásico, a corrente nos fios de Fase e Neutro é igual em magnitude, mas oposta em direção em qualquer momento. Se você prender ambos, seus campos magnéticos se cancelarão perfeitamente. O campo magnético líquido será zero, e o sensor não induzirá corrente alguma, resultando em uma leitura constantemente zerada.

  **Diagrama:**

  ```plaintext
  // CORRECT Installation
  // Clamp around the Live wire ONLY
         Power Cable
  ------------------ L (Live) ----->>> Current Flow
  /`---\
  | CT | --[ CLAMPED ]--
  \`---/
  ------------------ N (Neutral)----

  // INCORRECT Installation
  // Clamped around the entire cable
         Power Cable Jacket
  /`------------------`\
  |    --- L --->      |
  /`---\  (Magnetic fields cancel out)
  | CT | --[ CLAMPED ]--
  \`---/  <--- N ---      |
  \`------------------`/
  // Result: Reading is 0
  ```

### XIAO 2-Channel Wi-Fi AC Energy Meter

Se o sensor CT é o "órgão sensorial", o XIAO Wi-Fi Energy Meter é o "cérebro" e o "hub de comunicações" do sistema.

#### Principais Vantagens

- **Ultra Compacto e de Canal Duplo**: Herdando o minúsculo formato de "selo" da série Seeed Studio XIAO, é extremamente fácil de integrar em quadros elétricos ou gabinetes de dispositivos com espaço limitado. O design de canal duplo significa que um único módulo pode monitorar independentemente dois circuitos CA separados, tornando-o altamente econômico.
- **Conectividade Poderosa e Integração IoT**: Ele possui um núcleo **ESP32-C6** de alto desempenho, oferecendo suporte nativo para **Wi-Fi 6, Bluetooth 5, Zigbee e Thread**. Isso permite que ele se conecte facilmente à sua rede local e envie dados sem interrupções para plataformas IoT como o Home Assistant por meio de protocolos padrão como ESPHome e MQTT. Ele também está preparado para o futuro ecossistema **Matter**.
- **Baseado em uma Plataforma Matura**: O medidor de energia pode ser configurado e gravado diretamente usando ESPHome. ESPHome é um projeto open source poderoso e maduro que abstrai a programação de baixo nível complexa em simples arquivos de configuração YAML. Os usuários podem definir sensores, configurar rede e integrar com o Home Assistant sem escrever código C++, reduzindo significativamente a barreira de entrada.

## 3. Casos de Uso e Exemplos

Agora que integramos com êxito os dados do dispositivo ao Home Assistant, esses números deixam de ser valores isolados e passam a ser acionadores poderosos para infinitas ideias de automação.

:::note

Lembre-se de substituir os valores de exemplo de entity_id pelos seus próprios.

:::

### Cenário 1: Auditoria de Energia Residencial para Caçar “Vampiros de Energia”

- **Problema**: Sua conta mensal de energia elétrica está alta, mas não está claro quais aparelhos são os culpados, especialmente aqueles que consomem energia no modo de espera.

- **Solução**: Prender sequencialmente o sensor TC nos cabos de alimentação de dispositivos de alto consumo ou sempre ligados, como geladeiras, aparelhos de ar condicionado, centros de entretenimento doméstico e computadores, por vários dias para coletar dados.

- **Implementação**:

  1. **Análise de Tendência de Longo Prazo**: Use o **Painel de Energia** integrado do Home Assistant para visualizar claramente o consumo total de cada dispositivo ao longo de um dia, semana ou mês. Isso facilita a identificação dos maiores desperdiçadores de energia.
  2. **Identificação de Energia em Standby**: Examinando o gráfico histórico do sensor de potência, você pode identificar exatamente o consumo de energia em standby de um dispositivo. Por exemplo, você pode descobrir que seu sistema de home theater consome 15W continuamente mesmo quando está “desligado”.

- **Exemplo de Automação** (Alerta Inteligente):

  ```YAML
  # Home Assistant Automation: High Standby Power Alert
  alias: High Standby Power Alert
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_1_active_power
      above: 10 # Power threshold in Watts
      for: "00:10:00" # For a duration of 10 minutes
  condition:
    - condition: time
      after: "02:00:00"
      before: "06:00:00"
  action:
    - service: notify.mobile_app_your_phone_name # Replace with your notification service
      data:
        title: "High Standby Power Detected"
        message: "The entertainment center's standby power has been above 10W for 10 minutes. Consider unplugging it."
  ```

### Cenário 2: Monitoramento Inteligente de Dispositivos para Oficina ou Makerspace

- **Problema**: Tarefas longas como impressão 3D ou corte a laser exigem verificações manuais frequentes para saber se foram concluídas ou falharam.

- **Solução**: Monitorar o consumo de energia em tempo real da impressora 3D ou do cortador a laser. Esses dispositivos têm perfis de consumo distintos: um pico durante o pré-aquecimento, flutuações estáveis durante a operação e uma queda para um nível de standby muito baixo ao final.

- **Exemplo de Automação** (Notificação de Conclusão de Tarefa e Desligamento Automático):

  ```YAML
  # Home Assistant Automation: 3D Print Job Finished
  alias: 3D Print Job Finished
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_1_active_power
      below: 8 # Power threshold for a completed job in Watts
      for: "00:03:00" # For 3 minutes to confirm stable state
  condition:
    # Ensure the device's power dropped from a higher working state
    - condition: template
      value_template: "{{ trigger.from_state.state | float(0) > 50 }}"
  action:
    # 1. Send a mobile notification
    - service: notify.mobile_app_your_phone_name
      data:
        title: "3D Print Complete!"
        message: "Your 3D print job has finished. The printer will power down in 15 minutes."
    # 2. Wait for the print to cool down
    - delay: "00:15:00"
    # 3. Turn off the smart plug connected to the printer
    - service: switch.turn_off
      target:
        entity_id: switch.3d_printer_plug
  ```

### Cenário 3: Manutenção Preditiva para Equipamentos Críticos

- **Problema**: A falha de equipamentos críticos, como uma bomba de aquário ou um ventilador de refrigeração de servidor, pode causar danos dispendiosos.

- **Solução**: Monitorar continuamente a **corrente** consumida por esses dispositivos acionados por motor. Durante a operação normal, a corrente permanece dentro de uma faixa previsível. Se ocorrer um travamento mecânico ou falha de rolamento, a carga do motor aumenta drasticamente, causando um pico anormal de corrente.

- **Exemplo de Automação** (Alerta de Travamento da Bomba):

  ```YAML
  # Home Assistant Automation: Water Pump Stall Alert
  alias: Water Pump Stall Alert
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_2_current
      above: 1.5 # Set a danger threshold (e.g., normal is 0.8A)
      for: "00:00:05" # For 5 seconds to filter out initial startup spikes
  action:
    # 1. Send a high-priority notification
    - service: notify.mobile_app_your_phone_name
      data:
        title: "‼️ URGENT ALERT: Pump May Be Stalled ‼️"
        message: "Pump current is abnormally high at {{ trigger.to_state.state }}A. Please check immediately!"
    # 2. (Optional) Cut power to the pump to prevent motor burnout
    - service: switch.turn_off
      target:
        entity_id: switch.water_pump_plug
  ```

### Cenário 4: Submedição Justa para Espaços Compartilhados

- **Problema**: Em um espaço de co-working ou makerspace, como cobrar de forma justa os membros pelo uso de equipamentos de alta potência, como uma máquina CNC ou um grande cortador a laser.
- **Solução**: Utilizar o sensor de consumo total de energia, que registra com precisão o uso do dispositivo em quilowatt-hora (kWh).
- **Implementação**:
  1. **Registro de Dados**: O Home Assistant registra automaticamente o histórico de dados dos sensores.
  2. **Ciclos de Cobrança**: Usando as ferramentas do Home Assistant (por exemplo, o helper utility meter), você pode criar facilmente ciclos de cobrança diários, semanais, mensais ou manuais.
  3. **Cálculo de Custo**: Ao final de cada ciclo de cobrança, o administrador lê o total de kWh consumidos durante aquele período e multiplica pela tarifa local de energia elétrica para determinar o valor devido.

## 4. FAQ

<details>
<summary>P1: Esta solução pode monitorar energia trifásica?</summary>

**Não.** O hardware e o software deste guia foram projetados para **energia CA monofásica**, que é o tipo mais comum de serviço elétrico em locais residenciais e pequenos estabelecimentos comerciais. O monitoramento de energia trifásica requer hardware especializado, capaz de medir de forma síncrona três canais de corrente e tensão e processar diferenças de fase, o que está além do escopo desta solução.

</details>

<details>
<summary>P2: E se eu precisar monitorar um aparelho que consome mais de 5A? (por exemplo, um ar-condicionado ou um circuito de cozinha)</summary>

Com certeza. Você só precisa atualizar o sensor TC e recalibrar o software:

1. **Atualizar o Hardware**: Substitua o sensor TC padrão de 5A por um TC de núcleo dividido com classificação maior, como 20A, 50A ou até 100A (para monitorar uma alimentação principal). Ao comprar, certifique-se de que o novo TC seja do tipo **saída de corrente** (por exemplo, `100A:50mA`) para manter a compatibilidade com a porta de entrada do XIAO Energy Meter.

2. **Recalibrar o Software**: Um novo TC tem uma razão de transformação diferente, portanto você deve atualizar os parâmetros de calibração no seu arquivo de configuração ESPHome.
    - **Método de Calibração**: Consulte a documentação oficial do Componente de Sensor do ESPHome para obter instruções de calibração.

</details>

<details>
<summary>P3: O que devo fazer se a conexão Wi-Fi estiver instável e o dispositivo ficar offline com frequência?</summary>

Problemas de Wi-Fi normalmente podem ser resolvidos verificando duas áreas: o ambiente físico e a configuração de software:

1. **Verifique o Ambiente Físico**:
    - **Força do Sinal**: A localização do dispositivo, especialmente dentro de uma caixa elétrica de metal, pode ter recepção Wi-Fi fraca. Use seu telefone para verificar a intensidade do sinal perto do dispositivo. Considere mover o roteador para mais perto ou adicionar um repetidor Wi-Fi ou nó de rede mesh.
    - **Posicionamento da Antena**: Certifique-se de que a antena integrada do **ESP32-C6** não esteja completamente obstruída por partes metálicas.

2. **Otimizar a Configuração de Software**: Você pode adicionar várias opções ao seu arquivo YAML do ESPHome para melhorar a estabilidade da rede.

```yaml
wifi:
  ssid: "Your_WiFi_SSID"
  password: "Your_WiFi_Password"

  # -- Stability Enhancements --
  # 1. Set a static IP to avoid issues with DHCP leases
  manual_ip:
    static_ip: 192.168.1.100
    gateway: 192.168.1.1
    subnet: 255.255.255.0

  # 2. Disable Wi-Fi power-saving mode to keep the connection active (this slightly increases power consumption)
  power_save_mode: none

# If the device can't connect to the API or Wi-Fi for 30 mins, 
# it will automatically reboot to try and recover.
api:
  reboot_timeout: 30min

ota:
  # ...
```

</details>
