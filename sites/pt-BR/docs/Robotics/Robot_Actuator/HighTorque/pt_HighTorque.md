---
description: Este documento apresentará como começar rapidamente a usar os motores da linha HighTorque.
title: Motor da Linha HighTorque
keywords:
  - Módulo de Junta
  - Motor
  - Robótica
  - Braço Robótico
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /hightorque_series
sku: 114090071,114090072
last_update:
  date: 06/24/2025
  author: ZhuYaoHui
createdAt: '2025-06-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/hightorque_series/
---

# Manual do Usuário do Motor da Linha HighTorque

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a className="nav-item">
      <img width={100}  src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438.png" className="nav-icon" alt="4438-32"/>
      <span className="text">4438-32</span>
      <div className="hover-effect"></div>
    </a>
    <a className="nav-item">
      <img width={100} src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047-3.png" className="nav-icon" alt="5047-36"/>
      <span className="text">5047-36</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>

# Guia de Início Rápido do Motor da Linha HighTorque

Este documento apresentará como começar rapidamente a usar os motores da linha HighTorque.

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque.png" />
</div>

## Especificações Técnicas

### Tabela Comparativa de Parâmetros do Módulo de Junta Planetária

| **Download de Especificações Técnicas** | **[HTDW-5047-36-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-5047-36-NE.pdf)** |  **[HTDW-4438-32-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-4438-32-NE.pdf)** |  
|------------------------|------------------|---------------------|
| **Relação de Redução**    | 36               | 30                  |
| **Torque de Pico (Nm)**   | 16               | 6                   |
| **Torque Nominal (Nm)**  | 4                | 1.5                 |
| **Torque de Travamento (Nm)**  | 24               | 10                  |
| **Velocidade Nominal (RPM)**  | 40               | 36                  |
| **Velocidade em Vazio (RPM)**| 60               | 75                  |
| **Potência Nominal (W)**    | 17               | 13                  |
| **Constante de Torque (Nm/A)** | 0.062        | 0.039               |
| **Pares de Polos**         | 14               | -                   |
| **Tensão Nominal (V)**  | 12-48            | 12-48               |
| **Corrente Nominal (A)**  | 2                | 1                   |
| **Corrente de Pico (A)**   | 10               | 5                   |
| **Precisão de Controle de Torque** | ±10%         | ±20%                |
| **Precisão de Controle de Velocidade** | ±8%           | ±10%                |
| **Tempo de Resposta (μs)** | ≤200             | ≤200                |
| **Resolução do Encoder de Alta Velocidade** | 14bit | 14bit               |
| **Resolução do Encoder de Baixa Velocidade** | 12bit  | 12bit               |
| **Taxa de Baud de Comunicação (Mbps)** | 5 | 5                   |
| **Frequência de Controle (Hz)** | 3k      | 3k                  |

### Dimensões de Instalação do Motor

- **HTDM-4438-32**:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438_install.png" />
</div>

- **HTDM-5047-36**:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047_install.png" />
</div>

**Preparação do PC com Windows**

- Baixar [Motor Debugging Assistant v1.2.1](https://www.hightorque.cn/wp-content/uploads/2025/03/%E9%AB%98%E6%93%8E%E7%94%B5%E6%9C%BA%E8%B0%83%E8%AF%95%E5%8A%A9%E6%89%8Bv1.2.1.zip)
- Baixar [PC Debugging Manual](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/Hightorque_Motor_Debugging_Manual_EN.pdf)
- Comprar placa controladora CAN-USB

<details>
<summary>Análise de Protocolo</summary>

# Análise de Protocolo

## 1.1 Instruções Relacionadas a CAN

1. Taxa de baud do CAN:
   - Segmento de arbitragem: 1 Mbps
   - Segmento de dados: 1 Mbps
2. ID: Consiste em 16 bits, onde 0x7F é o endereço de broadcast.
   - 8 bits altos: Representam o endereço de origem:
     - O bit mais alto é 1: Requer resposta, atuando como uma chave geral de resposta. Ativá-lo sem enviar um comando de consulta retornará um quadro com comprimento do segmento de dados igual a 0.
     - O bit mais alto é 0: Não é necessária resposta.
     - Os 7 bits restantes: Endereço da fonte do sinal.
   - 8 bits baixos: Representam o endereço de destino:
     - O bit mais alto é 0.
     - Os 7 bits restantes representam o endereço de destino.

Por exemplo:

1. ID: 0x8001
   - O endereço da fonte do sinal é 0.
   - O endereço de destino é 1.
   - O bit mais alto é 1, indicando que é necessária uma resposta, ou seja, a chave geral de resposta está ligada.
2. ID: 0x100
   - O endereço da fonte do sinal é 1.
   - O endereço de destino é 0.
   - O bit mais alto é 0, indicando que não é necessária resposta, ou seja, a chave geral de resposta está desligada.

## 1.2 Instruções de Modo

### 1.2.1 Modo Normal (posição e velocidade não podem ser controladas simultaneamente)

```bash
uint8_t cmd[] = {0x07, 0x07, pos1, pos2, val1, val2, tqe1, tqe2};
```

O protocolo normal é composto por: bits de comando (2 bytes) + posição (2 bytes) + velocidade (2 bytes) + torque (2 bytes), totalizando 8 bytes.

0x07 0x07: Modo normal, que pode controlar velocidade e torque, ou posição e torque (ver [[#2.1-Modo-Normal]]).

Os dados de posição, velocidade e torque no protocolo estão em modo little-endian, ou seja, o byte baixo é enviado primeiro, seguido pelo byte alto. Por exemplo, se pos = 0x1234, então pos1 = 0x34 e pos2 = 0x12.

Este modo pode ser dividido em dois métodos de controle:

- Controle de posição e torque (neste caso, val = 0x8000, indicando sem limite).
- Controle de velocidade e torque (neste caso, pos = 0x8000, indicando sem limite).

### 1.2.2 Modo de Torque

```bash
uint8_t cmd[] = {0x05, 0x13, tqe1, tqe2};
```

O protocolo do modo de torque consiste em: bits de comando (2 bytes) + torque (2 bytes).

0x05 0x13: Modo de torque puro, seguido por dois bytes de dados de torque (ver [[#2.3-Modo-de-Torque]]).

Os dados de torque no protocolo estão em modo little-endian, ou seja, o byte baixo é enviado primeiro, seguido pelo byte alto. Por exemplo, se tqe = 0x1234, então tqe1 = 0x34 e tqe2 = 0x12.

### 1.2.3 Modo de Controle Cooperativo (posição, velocidade e torque podem ser controlados simultaneamente)

```bash
uint8_t cmd[] = {0x07, 0x35, val1, val2, tqe1, teq2, pos1, pos2};
```

O protocolo do modo de controle cooperativo: bits de comando (2 bytes) + velocidade (2 bytes) + torque (2 bytes) + posição (2 bytes), totalizando 8 bytes.

0x07 0x35: Modo de controle cooperativo, que especifica girar a uma velocidade determinada até uma posição determinada e limitar o torque máximo.

Neste modo, usar o parâmetro 0x8000 indica sem limite (sem limite de velocidade e torque significa valor máximo). Por exemplo, val = 5000, tqe = 1000, pos = 0x8000: Isso significa que o motor gira a uma velocidade de 0,5 rotações por segundo, com torque máximo de 0,1 NM.

Os dados de posição, velocidade e torque no protocolo estão todos em modo little-endian, ou seja, o byte baixo é enviado primeiro, seguido pelo byte alto. Por exemplo, se pos = 0x1234, então pos1 = 0x34 e pos2 = 0x12.

## 1.3 Leitura de Dados de Status do Motor

1. O protocolo para leitura da parte de status do motor é o mesmo que o protocolo em CAN-FD, com a única diferença de que o CAN é limitado por um segmento de dados de 8 bytes.
2. Para o endereço de registrador e instruções de função, consulte o arquivo "Register Function, Motor Operation Mode, Error Code Instructions.xlsx".
3. Devido à limitação do segmento de dados de 8 bytes do CAN, um único quadro CAN pode retornar uma quantidade limitada de informações do motor:
   - Uma informação de motor de tipo float ou int32_t em um registrador.
   - Três informações consecutivas de motor de tipo int16_t.
   - Seis informações consecutivas de motor de tipo int8_t.
4. O programa de exemplo fornece funções de amostra para consultar informações de posição, velocidade e torque do motor do tipo int16_t e para análise das informações do motor (o programa de exemplo usa uma união em linguagem C para copiar diretamente os dados do 3º ao 8º byte no CAN).

### 1.3.1 Instruções de Envio de Protocolo

```bash
uint8_t tdata[] = {cmd, addr, cmd1, addr1, cmd2, add2};
```

O significado geral é: Ler cmd[0, 1] quantidade de dados do tipo cmd[3, 2] a partir de addr.

cmd:

- Quatro bits altos [7, 4]: 0001 indica leitura.
- Bits 2-3 [3, 2]: Indicam o tipo.
  - 00: tipo int8_t.
  - 01: tipo int16_t.
  - 10: tipo int32_t.
  - 11: tipo float.
- 2 bits baixos [1, 0]: Indicam a quantidade.
  - 01: Um dado.
  - 10: Dois dados.
  - 11: Três dados.

addr: O endereço inicial a ser adquirido.

Vários cmds e addrs podem ser concatenados para ler, de uma só vez, dados com endereços descontínuos e tipos diferentes.

### 1.3.2 Instruções de Recebimento de Protocolo

Assuma que os dados adquiridos são uint16_t.

```bash
uint8_t rdata[] = {cmd, addr, a1, a2, b1, b2, ..., cmd1, addr1, c1, c2, c3, c4}
```

cmd:

- Quatro bits altos [7, 4]: 0010 indica resposta.
- Bits 2-3 [3, 2]: Indicam o tipo.
  - 00: tipo int8_t.
  - 01: tipo int16_t.
  - 10: tipo int32_t.
  - 11: tipo float.
- 2 bits baixos [1, 0]: Indicam a quantidade.
  - 01: Um dado.
  - 10: Dois dados.
  - 11: Três dados.

addr: O endereço inicial a ser adquirido.

a1, a2: Dado 1, em modo little-endian.

b1, b2: Dado 2, em modo little-endian.

### 1.3.3 Exemplo

1. Precisamos ler dados de posição, velocidade e torque.
2. Pela tabela de registradores em Excel, sabemos que os endereços de dados de posição, velocidade e torque são: 01, 02, 03.
3. Disso, podemos ver que podemos ler 3 dados consecutivos a partir do endereço 01. Considerando que o CAN pode transmitir no máximo 8 bytes de dados por vez, e cmd + addr ocupam dois bytes, o tipo de dado pode ser no máximo do tipo int16_t.
4. Pelo exposto, o binário de cmd é: 0001 0111, e o hexadecimal é: 0x17.
5. É necessário começar a leitura a partir do endereço 01, então addr é 0x01.
6. Os dados totais a serem enviados são uint8_t tdata[] = {0x17, 0x01}.

O código de exemplo é o seguinte:

```c
/**
* @brief Read the motor
* @param id
*/
void motor_read(uint8_t id)
{
static uint8_t tdata[8] = {0x17, 0x01};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}

uint8_t cmd[] = {0x17, 0x01};
```

O significado geral é: Começar a partir do endereço 0x01 e ler 3 registradores int16_t (conforme a tabela, os registradores nos endereços de 0x01 a 0x03 representam, respectivamente, posição, velocidade e torque). Portanto, este comando serve para consultar as informações de posição, velocidade e torque do motor.

0x17: O binário de 0x17[7:4] é 0001: indicando leitura. O binário de 0x17[3:2] é 01: indicando que o tipo de dado é int16_t. O binário de 0x17[1:0] é 11: indicando que a quantidade de dados é 3. 0x01: Começar a partir do endereço 0x01.

Exemplo correspondente de dados recebidos:

```bash
uint8_t rdata[] = {0x27, 0x01, 0x38, 0xf6, 0x09, 0x00, 0x00, 0x00};
```

0x27: Correspondente ao 0x17 enviado. 0x01: Começar a partir do endereço 0x01. 0x38 0xf6: Dados de posição: 0xf638, ou seja, -2505. 0x09 0x00: Dados de velocidade: 0x0009, ou seja, 9. 0x00 0x00: Dados de torque: 0x0000, ou seja, 0.

## 1.4 Parada do Motor

Instruções:

1. Parar o motor.
2. Corresponde ao comando d stop do computador host.

```c
/**
* @brief Stop the motor
*/
void motor_stop(uint8_t id)
{
uint8_t tdata[] = {0x01, 0x00, 0x00};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.5 Redefinir Posição Zero do Motor

Instruções:

1. Definir a posição atual como a posição zero do motor.
2. Esta instrução apenas a modifica na RAM e precisa ser usada com a instrução conf write para salvá-la na flash.
3. Recomenda-se enviar a instrução conf write cerca de 1s após utilizar esta instrução.

```c
void rezero_pos(uint8_t id)
{
uint8_t tdata[] = {0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
HAL_Delay(1000); // It is recommended to delay for 1s
conf_write(id); // Save the settings
}
```

## 1.6 Salvar Configurações do Motor (conf write)

Instruções:

1. Salvar as configurações do motor na RAM para a flash.
2. Recomenda-se desligar e religar a alimentação do motor após utilizar esta instrução.

```c
void conf_write(uint8_t id)
{
uint8_t tdata[] = {0x05, 0xb3, 0x02, 0x00, 0x00};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.7 Ler Status do Motor

Instruções:

1. Ler uma vez os dados de posição, velocidade e torque do motor.
2. Para a análise dos dados de informação de status de retorno do motor, consulte o código na função de interrupção HAL_FDCAN_RxFifo0Callback no exemplo.

```c
* @brief Instruction to read motor position, speed, and torque
* @param id Motor ID
*/
void motor_read(CAN_HandleTypeDef *hcan, uint8_t id)
{
static uint8_t tdata[8] = {0x17, 0x01};
can_send(hcan, 0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.8 Retorno Periódico de Dados de Status do Motor

Instruções:

1. Retornar periodicamente os dados de posição, velocidade e torque do motor.
2. O formato dos dados retornados é o mesmo dos obtidos usando a instrução 0x17, 0x01 (ou seja, 1.7 Leitura do Status de Posição).
3. A unidade do período é ms.
4. O período mínimo é 1ms.
5. Para parar o retorno periódico dos dados, defina o período como 0 ou desligue a alimentação do motor.
6. Para a análise dos dados de informação de status de retorno do motor, consulte o código na função de interrupção HAL_FDCAN_RxFifo0Callback no exemplo.

```c
void timed_return_motor_status(uint8_t id, int16_t t_ms)
{
uint8_t tdata[] = {0x05, 0xb4, 0x02, 0x00, 0x00};
*(int16_t *)&tdata[3] = t_ms;
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 2. Funções de Exemplo

### 2.1 Modo Normal

#### 2.1.1 Controle de Posição

```c
/**
* @brief Position control
* @param id Motor ID
* @param pos Position: Unit 0.0001 circle, e.g., pos = 5000 means rotating to the position of 0.5 circle.
* @param torque
*/
void motor_control_Pos(uint8_t id,int32_t pos,int16_t tqe)
{
uint8_t tdata[8] = {0x07, 0x07, 0x0A, 0x05, 0x00, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[2] = pos;
*(int16_t *)&tdata[6] = tqe;
uint32_t ext_id = (0x8000 | id);
CAN_Send_Msg(ext_id, tdata, 8);
}
```

#### 2.1.2 Controle de Velocidade

```c
/**
* @brief Speed control
* @param id Motor ID
* @param vel Speed: Unit 0.00025 rotations/second, e.g., val = 1000 means 0.25 rotations/second
* @param tqe Torque
*/
uint8_t tdata[8] = {0x07, 0x07, 0x00, 0x80, 0x20, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[4] = vel;
*(int16_t *)&tdata[6] = tqe;
uint32_t ext_id = (0x8000 | id);
CAN_Send_Msg(ext_id, tdata, 8);
}
```

### 2.3 Modo de Torque

```c
/**
* @brief Torque mode
* @param id Motor ID
* @param tqe Torque
*/
void motor_control_tqe(uint8_t id,int32_t tqe)
{
uint8_t tdata[8] = {0x05, 0x13, 0x00, 0x80, 0x20, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[2] = tqe;
CAN_Send_Msg(0x8000 | id, tdata, 4);
}
```

### 2.4 Modo de Controle Cooperativo

```c
/**
* @brief Motor position-speed-feedforward torque (maximum torque) control, int16 type
* @param id Motor ID
* @param pos Position: Unit 0.0001 circle, e.g., pos = 5000 means rotating to the position of 0.5 circle.
* @param val Speed: Unit 0.00025 rotations/second, e.g., val = 1000 means 0.25 rotations/second
* @param tqe Maximum torque
*/
void motor_control_pos_val_tqe(uint8_t id, int16_t pos, int16_t val, int16_t tqe)
{
static uint8_t tdata[8] = {0x07, 0x35, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
*(int16_t *)&tdata[2] = val;
*(int16_t *)&tdata[4] = tqe;
*(int16_t *)&tdata[6] = pos;
CAN_Send_Msg(0x8000 | id, tdata, 8);
}
```

### 2.5 Modo de Tensão DQ

Instruções:

1. Pode controlar a tensão da fase Q, unidade: 0,1v, por exemplo, vol = 10 significa que a tensão da fase Q é 1V.

```c
void motor_control_volt(FDCAN_HandleTypeDef *hfdcanx, uint8_t id, int16_t vol)
static uint8_t tdata[7] = {0x01, 0x00, 0x08, 0x05, 0x1b, 0x00, 0x00};
*(int16_t *)&tdata[5] = vol;
can_send(hfdcanx, 0x8000 | id, tdata, sizeof(tdata));
}
```

### 2.6 Modo de Corrente DQ

Instruções:

1. Pode controlar a corrente da fase Q, unidade: 0,1A, por exemplo, cur = 10 significa que a tensão da fase Q é 1A.

```c
void motor_control_cur(FDCAN_HandleTypeDef *hfdcanx, uint8_t id, int16_t cur)
{
static uint8_t tdata[7] = {0x01, 0x00, 0x09, 0x05, 0x1c, 0x00, 0x00};
*(int16_t *)&tdata[5] = cur;
can_send(hfdcanx, 0x8000 | id, tdata, sizeof(tdata));
}
```

### 2.7 Freio

Instruções:

1. Frenagem do motor; ao girar o motor haverá amortecimento.

```c
/**
* @brief Motor brake
* @param fdcanHandle &hfdcanx
* @param motor id Motor ID
*/
void set_motor_brake(FDCAN_HandleTypeDef *fdcanHandle, uint8_t id)
static uint8_t cmd[] = {0x01, 0x00, 0x0f};
can_send(fdcanHandle, 0x8000 | id, cmd, sizeof(cmd));
}
```

### 2.8 Parar

Instruções:

1. O motor para e perde a força para manter a posição.

```c
/**
* @brief Stop the motor. Note: The motor must be stopped before resetting the zero position, otherwise it will be invalid.
* @param fdcanHandle &hfdcanx
* @param motor id Motor ID
*/
void set_motor_stop(FDCAN_HandleTypeDef *fdcanHandle, uint8_t id)
{
static uint8_t cmd[] = {0x01, 0x00, 0x00};
can_send(fdcanHandle, 0x8000 | id, cmd, sizeof(cmd));
}
```

## 3. Instruções para Tipos Comuns (Unidades)

### 3.1 Corrente (A)

| Tipo de Dado | LSB | Real (A) |
| --- | --- | --- |
| int8 | 1 | 1 |
| int16 | 1 | 0,1 |
| int32 | 1 | 0,001 |
| float | 1 | 1 |

### 3.2 Tensão (V)

| Tipo de Dado | LSB | Real (V) |
| --- | --- | --- |
| int8 | 1 | 0,5 |
| int16 | 1 | 0,1 |
| int32 | 1 | 0,001 |
| float | 1 | 1 |

### 3.3 Torque (Nm)

Torque real = k * tqe + d

#### 3.3.1 Torque 5046 (Nm)

| Tipo de Dado | Inclinação (k) | Deslocamento (d) |
| --- | --- | --- |
| int16 | 0.005397 | -0.455107 |
| int32 | 0.000528 | -0.414526 |
| float | 0.533654 | -0.519366 |

#### 3.3.2 Torque 4538 (Nm)

| Tipo de Dado | Inclinação (k) | Deslocamento (d) |
| --- | --- | --- |
| int16 | 0.004587 | -0.290788 |
| int32 | 0.000445 | -0.234668 |
| float | 0.493835 | -0.473398 |

#### 3.3.2 5047/6056 (Bipolar, Relação de Engrenagem 36) Torque (Nm)

| Tipo de Dado | Inclinação (k) | Deslocamento (d) |
| --- | --- | --- |
| int16 | 0.004563 | -0.493257 |
| int32 | 0.000462 | -0.512253 |
| float | 0.465293 | -0.554848 |

#### 3.3.3 5047 (Unipolar, Relação de Engrenagem 9) Torque (Nm)

| Tipo de Dado | Inclinação (k) | Deslocamento (d) |
| --- | --- | --- |
| int16 | 0.005332 | -0.072956 |
| int32 | 0.000533 | -0.034809 |
| float | 0.547474 | -0.150232 |

### 3.4 Temperatura (℃)

| Tipo de Dado | LSB | Real (℃) |
| --- | --- | --- |
| int8 | 1 | 1 |
| int16 | 1 | 0,1 |
| int32 | 1 | 0,001 |
| float | 1 | 1 |

### 3.5 Tempo (s)

| Tipo de Dado | LSB | Real (s) |
| --- | --- | --- |
| int8 | 1 | 0,01 |
| int16 | 1 | 0,001 |
| int32 | 1 | 0,000001 |
| float | 1 | 1 |

### 3.6 Posição (rotações)

| Tipo de Dado | LSB | Real (rotações) | Real (°) |
| --- | --- | --- | --- |
| int8 | 1 | 0,01 | 3,6 |
| int16 | 1 | 0,0001 | 0,036 |
| int32 | 1 | 0,00001 | 0,0036 |
| float | 1 | 1 | 360 |

### 3.7 Velocidade (rotações/segundo)

| Tipo de Dado | LSB | Real (rotações/segundo) |
| --- | --- | --- |
| int8 | 1 | 0,01 |
| int16 | 1 | 0,00025 |
| int32 | 1 | 0,00001 |
| float | 1 | 1 |

### 3.8 Aceleração (rotações/segundo²)

| Tipo de Dado | LSB | Real (rotações/segundo²) |
| --- | --- | --- |
| int8 | 1 | 0,05 |
| int16 | 1 | 0,001 |
| int32 | 1 | 0,00001 |
| float | 1 | 1 |

### 3.9 Escala de PWM (sem unidade)

| Tipo de Dado | LSB | Real |
| --- | --- | --- |
| int8 | 1 | 1/127 - 0.007874 |
| int16 | 1 | 1/32767 - 0.000030519 |
| int32 | 1 | (1/2147483647) - 4.657^10 |
| float | 1 | 1 |

### 3.10 Escala de Kp, Kd (sem unidade)

| Tipo de Dado | LSB | Real |
| --- | --- | --- |
| int8 | 1 | 1/127 - 0.007874 |
| int16 | 1 | 1/32767 - 0.000030519 |
| int32 | 1 | (1/2147483647) - 4.657^10 |
| float | 1 | 1 |

</details>

## Exemplo em C++

O controle em C++ requer uma placa controladora CAN-USB adicional. Consulte [livelybot_hardware_sdk](https://github.com/HighTorque-Robotics/livelybot_hardware_sdk)

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/USB-CAN.png" />
</div>

## Controlando Motores com [reComputer Mini Jetson Orin](/pt-br/recomputer_jetson_mini_getting_started)

Atualmente, as interfaces de comunicação CAN para motores mais comumente usadas no mercado são conectores XT30(2+2) e JST. Nossos dispositivos **reComputer Mini Jetson Orin** e **reComputer Robotics** vêm equipados com portas duplas XT30(2+2) e interfaces CAN baseadas em JST, proporcionando compatibilidade perfeita.

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

Para mais detalhes sobre o uso de CAN, consulte este [wiki](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_hardware_interfaces_usage/#Comunicação-CAN).

### Habilitando a Interface CAN

**Passo 1:** Antes de usar CAN0 e CAN1, remova a tampa inferior e coloque ambos os resistores de terminação de 120Ω na posição ON.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**Passo 2:** Conecte o motor diretamente ao CAN0 do reComputer Mini por meio da interface XT30(2+2).

:::tip
Os pinos H/L da interface CAN do reComputer Mini são opostos aos do motor, portanto as conexões H/L no chicote XT30 2+2 precisam ser invertidas.
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/reComputer_mini_control.png" />
</div>

:::danger
Esta solução de alimentação é adequada apenas para aprendizagem e testes com um único motor. Para aplicações com múltiplos motores, projete uma placa de alimentação independente para isolar a fonte de alimentação do Jetson da fonte de alimentação do motor, a fim de evitar que correntes elevadas passem diretamente pelo Jetson.
:::

#### Habilitando a Comunicação CAN do Jetson

Abra um terminal e insira o seguinte comando para colocar o pino GPIO em nível alto e ativar o CAN0:

```bash
gpioset --mode=wait 0 43=0
```

Se estiver usando o CAN1 da interface JST, coloque o pino 106 em nível alto:

```bash
gpioset --mode=wait 0 106=0
```

Mantenha este terminal aberto e crie um novo terminal para configurar o CAN0:

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Controle em Python

- **Instalar Ambiente Python**  

```bash
pip install python-can numpy
```

- **Criar Diretório de Scripts**  

```bash
mkdir -p ~/hightorque/scripts
```

- **Criar Arquivo hightorque_motor.py**

```bash
cd ~/hightorque/scripts
touch hightorque_motor.py
```

Copie o código a seguir para o arquivo hightorque_motor.py.

<details>
<summary>hightorque_motor.py</summary>

```python
import can
import numpy as np
from time import sleep
from enum import IntEnum

class MotorType(IntEnum):
    """Motor Type Enum"""
    HT5046 = 0  # 5046 Motor
    HT4538 = 1  # 4538 Motor
    HT5047_36 = 2  # 5047/6056 Dual-pole 36 Reduction Ratio
    HT5047_9 = 3  # 5047 Single-pole 9 Reduction Ratio

class ControlMode(IntEnum):
    """Control Mode Enum"""
    NORMAL = 0  # Normal Mode
    TORQUE = 1  # Torque Mode
    COOPERATIVE = 2  # Cooperative Control Mode

class Motor:
    def __init__(self, motor_type: MotorType, slave_id: int, master_id: int):
        """
        Initialize Motor Object
        :param motor_type: Motor Type
        :param slave_id: Slave ID
        :param master_id: Master ID
        """
        self.motor_type = motor_type
        self.slave_id = slave_id
        self.master_id = master_id
        self.position = 0
        self.velocity = 0
        self.torque = 0
        self.temperature = 0

        # Set Torque Conversion Parameters Based on Motor Type
        if motor_type == MotorType.HT5046:
            self.torque_k = 0.005397
            self.torque_d = -0.455107
        elif motor_type == MotorType.HT4538:
            self.torque_k = 0.004587
            self.torque_d = -0.290788
        elif motor_type == MotorType.HT5047_36:
            self.torque_k = 0.004563
            self.torque_d = -0.493257
        elif motor_type == MotorType.HT5047_9:
            self.torque_k = 0.005332
            self.torque_d = -0.072956

    def update_status(self, position: float, velocity: float, torque: float, temperature: float):
        """Update Motor Status"""
        self.position = position
        self.velocity = velocity
        self.torque = torque
        self.temperature = temperature

class MotorControl:
    def __init__(self, channel: str, bitrate: int = 1000000):
        """
        Initialize Motor Controller
        :param channel: CAN Channel
        :param bitrate: CAN Baud Rate
        """
        self.bus = can.interface.Bus(channel=channel, bustype='socketcan', bitrate=bitrate)
        self.motors = {}

    def add_motor(self, motor: Motor):
        """Add Motor to Controller"""
        self.motors[motor.slave_id] = motor

    def __send_data(self, motor_id: int, data: bytes):
        """
        Send CAN Data
        :param motor_id: Motor ID
        :param data: Data to Send
        """
        msg = can.Message(
            arbitration_id=0x8000 | motor_id,
            data=data,
            is_extended_id=True
        )
        self.bus.send(msg)

    def enable(self, motor: Motor):
        """Enable Motor"""
        data = bytes([0x01, 0x00, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def disable(self, motor: Motor):
        """Disable Motor"""
        data = bytes([0x01, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def set_zero_position(self, motor: Motor):
        """Set Motor Zero Position"""
        data = bytes([0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a])
        self.__send_data(motor.slave_id, data)
        sleep(1.0)  # Wait 1 second
        self.save_settings(motor)

    def save_settings(self, motor: Motor):
        """Save Motor Settings to Flash"""
        data = bytes([0x05, 0xb3, 0x02, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)

    def control_position(self, motor: Motor, position: float, torque: float):
        """
        Position Control
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param torque: Torque Limit
        """
        pos_bytes = int(position).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07]) + pos_bytes + bytes([0x80, 0x00]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_velocity(self, motor: Motor, velocity: float, torque: float):
        """
        Velocity Control
        :param motor: Motor Object
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07, 0x00, 0x80]) + vel_bytes + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_torque(self, motor: Motor, torque: float):
        """
        Torque Control
        :param motor: Motor Object
        :param torque: Target Torque
        """
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x05, 0x13]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_cooperative(self, motor: Motor, position: float, velocity: float, torque: float):
        """
        Cooperative Control (Position, Velocity, Torque Simultaneous Control)
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        pos_bytes = int(position).to_bytes(2, 'little')
        data = bytes([0x07, 0x35]) + vel_bytes + tqe_bytes + pos_bytes
        self.__send_data(motor.slave_id, data)

    def read_motor_status(self, motor: Motor):
        """Read Motor Status"""
        data = bytes([0x17, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.01)  # Wait for Data Reception

        # Receive and Parse Data
        msg = self.bus.recv(timeout=0.1)
        if msg and msg.arbitration_id == (0x8000 | motor.slave_id):
            data = msg.data
            if len(data) >= 8 and data[0] == 0x27:
                position = int.from_bytes(data[2:4], 'little')
                velocity = int.from_bytes(data[4:6], 'little')
                torque = int.from_bytes(data[6:8], 'little')
                motor.update_status(position, velocity, torque, 0)

    def periodic_read_status(self, motor: Motor, period_ms: int):
        """
        Set Periodic Motor Status Reading
        :param motor: Motor Object
        :param period_ms: Period (milliseconds)
        """
        period_bytes = int(period_ms).to_bytes(2, 'little')
        data = bytes([0x05, 0xb4, 0x02, 0x00]) + period_bytes
        self.__send_data(motor.slave_id, data)

    def close(self):
        """Close CAN Bus"""
        self.bus.shutdown() 
```

</details>

- **Criar Arquivo hightorque_test.py**

Copie o código a seguir para o arquivo hightorque_test.py.

<details>
<summary>hightorque_test.py</summary>

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import math
import numpy as np
from hightorque_motor import Motor, MotorControl, MotorType

# Configuration Parameters
NUM_MOTORS = 2  # Number of Motors to Control
CAN_INTERFACE = "can0"  # CAN Interface Name
CAN_BITRATE = 1000000  # CAN Baud Rate
MOTOR_TYPE = MotorType.HT5047_36  # Motor Type

# Sine Wave Parameters
FREQUENCY = 0.1  # Frequency (Hz)
AMPLITUDE = 2500  # Amplitude (0.0001 turns)
OFFSET = 2500    # Offset to Ensure Positive Position
DURATION = 60.0  # Run Duration (s)

def main():
    # Create Motor Control Object
    controller = MotorControl(channel=CAN_INTERFACE, bitrate=CAN_BITRATE)

    try:
        # Create and Add Motors
        motors = []
        for i in range(NUM_MOTORS):
            motor = Motor(MOTOR_TYPE, slave_id=i+1, master_id=0)
            controller.add_motor(motor)
            motors.append(motor)

            # Enable Motor
            print(f"Enabling Motor {i+1}...")
            controller.enable(motor)
            time.sleep(1)  # Wait for Motor Enable

            # Set Zero Position
            print(f"Setting Motor {i+1} Zero Position...")
            controller.set_zero_position(motor)
            time.sleep(1)

            # Save Settings to Flash
            print(f"Saving Motor {i+1} Settings...")
            controller.save_settings(motor)
            time.sleep(1)

            # Read Initial Status
            controller.read_motor_status(motor)
            print(f"Motor {i+1} Initial Status:")
            print(f"Position: {motor.position * 0.0001:.4f} turns")
            print(f"Velocity: {motor.velocity * 0.00025:.4f} turns/second")
            print(f"Torque: {motor.torque * motor.torque_k + motor.torque_d:.4f} Nm")

        # Start Sine Wave Position Control
        print("\nStarting Sine Wave Position Control...")
        start_time = time.time()
        while time.time() - start_time < DURATION:
            current_time = time.time() - start_time

            # Calculate Sine Wave Position with Offset to Ensure Positive
            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time) + OFFSET

            # Control All Motors
            for motor in motors:
                # Use Position Control Mode with Max Torque of 1000
                controller.control_position(motor, position=int(position), torque=1000)

            # Control Frequency
            time.sleep(0.001)  # 1kHz Control Frequency

    except KeyboardInterrupt:
        print("\nProgram Interrupted by User")
    finally:
        # Disable All Motors
        for motor in motors:
            print(f"Disabling Motor {motor.slave_id}...")
            controller.disable(motor)

        # Close CAN Bus
        controller.close()
        print("CAN Bus Closed")

if __name__ == "__main__":
    main() 

```

</details>

- **Execute hightorque_test.py**

```bash
python hightorque_test.py
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/iwE-8klCB2Q?si=QYcVnxF8YpYSYxvl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Oferecemos vários canais de suporte para garantir que você tenha a melhor experiência.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

<style>{`
/* 导航容器 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card-container {
  margin: 0.1rem 0;
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Dark模式 - 导航容器 */
html[data-theme='dark'] .quick-nav-container {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* 导航主体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap; /* 关键属性 */
  justify-content: left; /* 可选居中 */
}

/* 导航项 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(20% - 20px);
  margin-bottom: 20px;
  align-items: center;
  text-decoration: none !important;
  color: #333;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  z-index: 1;
}

/* Dark模式 - 导航项 */
html[data-theme='dark'] .nav-item {
  color: #e5e7eb;
  background: #374151;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* 图标样式 */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* 文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 悬浮特效 */
.nav-item .hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px;
  transition: height 0.3s ease;
  z-index: -1;
}

/* 悬浮动画 */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

/* Dark模式 - 悬浮动画 */
html[data-theme='dark'] .nav-item:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.6);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

.nav-item img {
  pointer-events: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quick-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-item {
    flex-direction: row;
    justify-content: start;
    padding: 0.8rem 1rem;
  }
  .nav-item .icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
}
`}</style>

<style>{`
/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.category-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
}

/* Dark模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background: #374151;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark模式 - 悬浮特效 */
html[data-theme='dark'] .category-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* Dark模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark模式 - 链接悬浮 */
html[data-theme='dark'] .category-card a:hover {
  color: #60a5fa;
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

/* Dark模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

/* 标签样式增强 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable {
  background: #e6f4ea;
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark模式 - Stable标签 */
html[data-theme='dark'] .stable {
  background: #065f46;
  color: #a7f3d0;
  box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended {
  background: #fce8e6;
  color: #a50e0e;
  box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark模式 - Recommended标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>
