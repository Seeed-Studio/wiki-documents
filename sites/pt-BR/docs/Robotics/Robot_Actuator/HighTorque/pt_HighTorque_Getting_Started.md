---
description: Introdução aos HighTorque Motors
title: Introdução aos HighTorque Motors
keywords:
  - atuador
  - motor
  - braço
  - robótica
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /hightorque_getting_started
last_update:
  date: 12/04/2025
  author: Tienjuiwong
createdAt: '2025-12-04'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/hightorque_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note Compatibilidade de Versão

Este manual se aplica ao **High Torque Commissioning Assistant v0.11.1** e versões superiores.
O High Torque Commissioning Assistant é aplicável para firmware de motor **v3.1.0** e versões superiores.

:::

## 1. Diretrizes de Uso do Motor

### 🔌 Fiação de Hardware do Motor

:::warning Aviso Importante de Segurança
Sempre certifique-se de que a alimentação esteja desconectada antes de fazer qualquer conexão.
:::

| **Especificação** | **Valor** |
|---|---|
| **Tensão Nominal** | 24VDC |
| **Comunicação** | FDCAN (via módulo USB-C) |
| **Modelos de Motor** | 5047, 4438, etc. |

#### Etapas de Conexão

1. **Conexão de Alimentação** 🔌
   Conecte a fonte de alimentação de 24V ao módulo FDCAN

2. **Interface do Motor** 🔌
   Conecte a interface XT30 (2+2) do motor ao módulo FDCAN usando o **cabo GH1.25-3P**

3. **Conexão com o PC** 💻
   Conecte o módulo FDCAN ao computador via **USB-C**

![Visão Geral da Conexão do Motor](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_1_1_1.png)

![Guia Detalhado de Fiação](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_1_1_2.png)

## 2. Uso e Instruções do High Torque Motor Commissioning Assistant

### 🎛️ Funções Comuns

| **Função** | **Descrição** |
|---|---|
| **🔄 Reconnect USBCAN Device** | Faz a varredura e conecta o dispositivo USBCAN e detecta os motores conectados |
| **🆔 Motor ID** | Seletor suspenso para o motor conectado no momento |
| **⚙️ Motor Calibration** | Recalibra o motor (⚠️ **O motor deve estar sem carga**) |
| **🎯 Reset Current Motor Zero** | Define a posição atual como referência zero |
| **💾 Update Motor Firmware** | Baixa e grava o novo firmware no motor |
| **📊 Output Information** | Console de registro em tempo real para eventos e erros |

:::danger ⚠️ Alerta Crítico
A **Motor Calibration** deve ser realizada com **NENHUMA CARGA** conectada ao motor. Não seguir isso resultará em cálculo incorreto do deslocamento do encoder.
:::

![Interface de Funções Comuns](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_1.png)

:::info Guia de Operação
Use **Read Parameters** para buscar as configurações atuais e **Write Parameters** para salvar as alterações no motor.
:::

| **Grupo de Parâmetros** | **Descrição** |
|---|---|
| **📋 Informações Básicas** | Exibe Modelo, Pares de Polos, Taxa de Redução, Versão de Firmware |
| **🛡️ Proteção do Motor** | Limites de sobretensão (V) e sobretemperatura (°C) |
| **⚖️ Ajuste de PID** | Coeficientes Kp, Ki, Kd + i_limit (limite integral) |
| **🆔 Modificar ID do Motor** | Altera o ID do motor (requer nova identificação) |
| **📍 Faixa de Posição do Motor** | Limites MAX/MIN de posição (defina como `nan` para infinito) |
| **🚀 Limites de Rotação** | Limites de velocidade (rev/s), aceleração (rev/s²) e corrente (A) |

:::warning Observação
Defina os valores como `nan` para operação ilimitada nas seções Faixa de Posição e Limites de Rotação.
:::

![Configurações de Parâmetros - Básico](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_2_1.png)

![Configurações de Parâmetros - Avançado](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_2_2.png)

### 🔧 Depuração do Motor

Depure com diferentes modos de operação (visão detalhada em [Motor Running Modes](#Motor-Running-Modes)).

| **Recurso** | **Descrição** |
|---|---|
| **📈 Motor Running Mode** | Clique em **"Add Waveform"** para visualizar Posição, Velocidade, Torque e Temperatura em tempo real |
| **📊 Status do Motor** | Informações de quadros FDCAN (float, int16, int32, quadro CAN) |
| **🛠️ Generate Frame** | Cria quadros CAN personalizados para desenvolvimento |
| **🛑 Stop & Brake** | Controla o comportamento de parada do motor |

#### Tipos de Geração de Quadros

<Tabs>
  <TabItem value="numeric" label="Tipos Numéricos">
    **float, int16, int32**

    Para exemplos de implementação e tratamento de tipos de dados, consulte os exemplos de protocolo FDCAN nesta seção
  </TabItem>
  <TabItem value="can" label="Quadro CAN">
    **CAN Frame**

    Para exemplos de geração e tratamento de quadros CAN, consulte os guias de implementação do protocolo
  </TabItem>
</Tabs>

#### Controle de Stop & Brake

| **Controle** | **Comportamento** |
|---|---|
| **🛑 Stop** | Desconecta todas as três fases - o motor desliza até parar pela inércia |
| **⚡ Brake** | Curto-circuita as três fases para o terra - o motor para **imediatamente** |

![Depuração - Visão de Forma de Onda](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_3_1.png)

![Depuração - Monitoramento de Status](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_3_2.png)

### 🎮 Modos de Operação do Motor

<Tabs>
  <TabItem value="position" label="1️⃣ Modo de Posição">
    **Modo de Posição** 🎯

    Fornece controle angular preciso do eixo do motor. Insira a posição de destino em rotações e clique em enviar. O motor se moverá para a posição exata especificada usando controle PID em malha de posição.

    **Ideal para:** Juntas robóticas, máquinas CNC, sistemas de atuadores

    ![Interface do Modo de Posição](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_1.png)
  </TabItem>

  <TabItem value="velocity" label="2️⃣ Modo de Velocidade">
    **Modo de Velocidade** 🔄

    Mantém uma velocidade de rotação constante independentemente de variações de carga (dentro da capacidade). Insira a velocidade de destino em rev/s e clique em enviar. O motor irá acelerar até a velocidade especificada usando o limite de aceleração configurado.

    **Ideal para:** Esteiras transportadoras, ventiladores, mesas rotativas

    ![Interface do Modo de Velocidade](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_2.png)
  </TabItem>

  <TabItem value="torque" label="3️⃣ Modo de Torque">
    **Modo de Torque** 💪

    Controla diretamente o torque de saída. O motor tentará manter o valor de torque especificado independentemente da velocidade. Se a resistência externa exceder o torque definido, o motor entrará em estol para proteger o sistema.

    **Unidades:** Newton-metro (Nm)

    **Ideal para:** Sistemas de tensionamento, operações de prensagem, manutenção de carga

    ![Interface do Modo de Torque](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_3.png)
  </TabItem>

  <TabItem value="voltage" label="4️⃣ Modo de Tensão">
    **Modo de Tensão** ⚡

    Fornece controle direto sobre a tensão do eixo Q aplicada ao motor. Este modo avançado permite algoritmos de controle personalizados e é normalmente usado em aplicações de pesquisa ou sistemas de controle especializados.

    **Unidades:** Volts (V)

    ![Interface do Modo de Tensão](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_4.png)
  </TabItem>

  <TabItem value="current" label="5️⃣ Modo de Corrente">
    **Modo de Corrente** 🔋

    Controla a corrente do eixo Q que flui pelos enrolamentos do motor. Este modo fornece um controle mais direto sobre a geração de torque do que o modo de torque, pois a corrente é o fator fundamental da intensidade do campo magnético.

    **Unidades:** Ampères (A)

    **Ideal para:** Aplicações de controle de torque de alta precisão

    ![Interface do Modo de Corrente](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_5.png)
  </TabItem>

  <TabItem value="position-speed-torque" label="6️⃣ Posição+Velocidade+Torque">
    **Posição, Velocidade, Torque Máximo** 🎛️

    Modo híbrido que combina controle de posição com limitação de velocidade e torque para um movimento seguro e controlado. O motor se moverá para a posição especificada na velocidade desejada garantindo que o torque de saída nunca exceda o limite máximo.

    **Ideal para:** Garras robóticas, atuadores de porta, aplicações com limitação de força

    Defina o torque máximo como `nan` se não desejar limitação de torque.

    ![Interface do Modo Posição+Velocidade+Torque](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_6.png)
  </TabItem>

  <TabItem value="trapezoidal" label="7️⃣ Controle Trapezoidal">
    **Controle Trapezoidal** 📈

    Gera trajetórias suaves em curva-S com fases controladas de aceleração e desaceleração. O motor irá: 1) acelerar uniformemente até a velocidade máxima, 2) manter velocidade constante e, então, 3) desacelerar uniformemente até parar precisamente na posição de destino.

    **Ideal para:** Operações pick-and-place, posicionamento CNC, automação de precisão

    ![Interface do Controle Trapezoidal](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_7.png)
  </TabItem>

  <TabItem value="motion-control" label="8️⃣ Controle de Movimento">
    **Modo de Controle de Movimento** 🤖

    Modo avançado de controle baseado em PID usando a fórmula:

    **Torque de Saída do Motor = Kp × Position_Error + Kd × Speed_Error + FeedForward_Torque**

    Este modo combina erro de posição (termo P) e erro de velocidade (termo D) para um controle de movimento sofisticado.

    **Ideal para:** Aplicações de alta precisão, prensas servo, montagem com controle de força

    ![Interface do Modo de Controle de Movimento](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_8.png)
  </TabItem>
</Tabs>

---

## 3. 🔌 Análise do Protocolo FDCAN

:::info Referência de Protocolo
Esta seção abrange as informações essenciais do protocolo FDCAN para operações básicas de controle do motor. Para mapeamento completo de registradores e detalhes avançados do protocolo, consulte a documentação de controle do motor.
:::

### Exemplo: Quadro de Dados int32 em Modo de Velocidade

Tome o **int32 Data Frame Velocity Mode** como exemplo:

```hex
01000a0a2000000080204e0000
```

---

### **1️⃣ Sub-frame 1** - Configuração do Modo do Motor

Este subquadro configura o modo de operação do motor.

| **Campo** | **Valor** | **Descrição** |
|---|---|---|
| **0x01** | Cabeçalho | Início do primeiro subquadro |
| **Bits 7-4** | `0000` | Operação de escrita nos registradores do motor |
| **Bits 3-0** | `0001` | Tipo de dado **int8_t**, 1 unidade de dado |
| **0x00** | Endereço de Registrador | Registrador de **Configuração do Modo do Motor** |
| **0x0a** | Dado | Define o motor para **Velocity Mode** |

---

### **2️⃣ Sub-frame 2** - Parâmetros de Movimento

Este subquadro configura os parâmetros de movimento (alvos de posição e velocidade).

| **Campo** | **Valor** | **Descrição** |
|---|---|---|
| **0x02** | Cabeçalho | Início do segundo subquadro |
| **Bits 7-4** | `0000` | Operação de escrita |
| **Bits 3-0** | `0010` | Tipo de dado **int32_t**, 2 unidades de dados |
| **0x20** | Início do Registrador | Registrador de Alvo de Posição (0x20) |
| **0x00 0x00 0x00 0x80** | Dados de Posição | **0x80000000** = Posição **ilimitada/NaN** |
| **0x20 0x4e 0x00 0x00** | Dados de Velocidade | **0x00004e20** = **20000** (decimal) |

:::success Conversão de Unidades
**Cálculo de Velocidade:**
- **Valor Decimal:** 20000
- **Peso do LSB:** 0.00001 rev/s por unidade
- **Velocidade Alvo:** 20000 × 0.00001 = **0.2 rev/s**
:::

---

## 📚 Apêndice

### ⚠️ Referência de Código de Erro do Motor

:::info Código de Status 0 = Operação Normal
Um valor diferente de zero indica um erro. Consulte a tabela abaixo para causas e soluções específicas.
:::

| **Código** | **Nome do Erro** | **Descrição** | **Solução** |
|---|---|---|---|
| **32** | 🔧 Falha de Calibração | O encoder não consegue detectar o ímã durante a calibração | Certifique-se de que o ímã está instalado corretamente; recalibre sem carga |
| **33** | ⚡ Falha no Driver do Motor | Subtensão ou corrente insuficiente | Verifique a tensão e a capacidade de corrente da fonte de alimentação |
| **34** | 🔺 Sobretensão | A tensão do barramento excedeu o limite | Verifique a especificação de tensão da fonte de alimentação |
| **35** | 📡 Falha do Encoder | Erro de leitura do encoder | Verifique as conexões e a fiação do encoder |
| **36** | 🚫 Motor Não Calibrado | O motor não foi calibrado | Execute o procedimento de calibração sem carga |
| **37** | 📊 Limite de Ciclo PWM Excedido | Erro interno de firmware | Contate o suporte técnico |
| **38** | 🌡️ Superaquecimento | A temperatura excedeu o limite máximo | Deixe o motor esfriar; verifique a refrigeração |
| **39** | 🎯 Fora dos Limites | Controle de posição fora dos limites definidos | Ajuste os parâmetros de faixa de posição |
| **40** | 🔋 Baixa Tensão | Tensão de alimentação muito baixa | Verifique a fonte de alimentação e as conexões |
| **41** | ⚙️ Configuração Alterada | Configuração crítica alterada durante a operação | Pare o motor antes de alterar parâmetros |
| **42** | 🔄 Ângulo Inválido | Nenhum encoder de comutação válido | Verifique o funcionamento e as conexões do encoder |
| **43** | 📍 Posição Inválida | Nenhum encoder de saída válido | Verifique as conexões do encoder de saída |

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
