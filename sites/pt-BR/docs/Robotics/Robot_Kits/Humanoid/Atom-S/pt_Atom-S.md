---
description: Introdução ao Atom-S.
title: Introdução ao Atom-S
keywords:
  - Humanoide
  - Robótica
  - Atom S
  - XIAO ESP32-S3
  - Servo
image: https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/product_photo.webp
slug: /atom_s
last_update:
  date: 5/22/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/pt-br/atom_s/
---

# Introdução ao Atom-S

## Introdução
O Atom-S é um kit de robô humanóide bípedo open source com 10 DOF (Graus de Liberdade), projetado para desenvolvedores, makers e instituições de ensino. O robô é acionado por dez servos de barramento Fashionstar RA8-U25H-M, possui uma estrutura totalmente impressa em 3D e é equipado com um controlador principal Seeed Studio XIAO ESP32-S3 e uma placa de expansão Grove. Ele vem com firmware de controle completo pré-instalado de fábrica. Seu principal destaque é o editor visual de movimentos baseado na web, dispensando instalação — você pode depurar servos em tempo real, gravar movimentos por ensino e exportar JSON diretamente pelo navegador, facilitando a replicação em plataformas como Arduino, STM32 e Raspberry Pi. A placa adaptadora RUC-01 incluída fornece alimentação regulada de 5 V / 3,3 V e uma interface UART, suportando controle remoto via Bluetooth e web. Pronto para uso imediato, é uma plataforma ideal para desenvolvimento de robótica de mesa e verificação de algoritmos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/product_photo.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Atom-S-p-6711.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## 1. Introdução ao produto

- **Layout de DOF**: O robô possui 10 graus de liberdade cobrindo braços, tronco e pernas.
- **Estrutura e Aparência**: Estrutura totalmente impressa em 3D com arquivos de modelo STP / STL oficialmente open source, facilitando a substituição de peças, o reforço estrutural e o redesign estético.
- **Atuadores das Juntas**: Dez servos de barramento Fashionstar RA8-U25H-M com comunicação em barramento para uma fiação limpa e simplificada.
- **Editor de Movimentos via Web**: Um painel de controle baseado em navegador que suporta depuração de servos em tempo real e programação em modo de ensino. Grupos de movimento concluídos podem ser exportados como arquivos `.json` padrão para fácil análise em plataformas Arduino, STM32 e Raspberry Pi.
- **Pronto para Uso**: Enviado com o Seeed Studio XIAO ESP32-S3 como controlador principal padrão, com programas de demonstração pré-gravados de fábrica.
- **Expansão Multi-Módulo**: Em conjunto com a placa de expansão Seeed Studio XIAO, a interface Grove onboard permite a conexão de sensores e controladores Seeed Grove.
- **Compatibilidade Multiplataforma**: A placa adaptadora RUC-01 fornece saída de energia de 5 V / 3,3 V e uma interface UART; qualquer controlador com capacidade de porta serial pode se comunicar com ela.
- **Extensibilidade do Ecossistema**: Aproveitando as interfaces Grove na placa de expansão Seeed Studio XIAO, sensores de visão, de ambiente e outros sensores e módulos de controle do ecossistema Grove podem ser integrados rapidamente.
- **Compatibilidade Multiplataforma**: A placa adaptadora padrão RUC-01 fornece saída regulada de 5 V / 3,3 V e uma interface de comunicação UART universal, facilitando a conexão a plataformas externas como Raspberry Pi, STM32, Arduino, ESP32 ou PC.

## 2. Especificações

| Parâmetro | Valor |
| --------------- | ---------------------------------------------------------------- |
| Graus de Liberdade (DOF) | 10 |
| Chassi | Impresso em 3D |
| Servos | Servo de Barramento RA8-U25H-M |
| Placa de Alimentação / Interface dos Servos | RUC-01, fornecendo 4 portas de servo de barramento, alimentação de 5 V / 3,3 V para o controlador e serial (Grove) |
| Controlador Principal | Seeed Studio XIAO ESP32-S3 + Placa de Expansão Seeed Studio XIAO |
| Comunicação | Comunicação Serial Assíncrona (UART) |
| Dimensões | 154 × 105 × 283 mm |

## 3. Lista de Materiais

| Item | Qtde |
| ------------------------- | ---- |
| Robô 10-DOF (Montado) | 1 |
| Parafuso KM M2 × 7 mm | 10 |
| Parafuso KB M2 × 7 mm | 10 |
| Parafuso PM M3 × 6 mm | 2 |
| Cabo de Servo 200 mm 3 pinos | 2 |

:::tip
**Conteúdo da Montagem do Robô 10-DOF**

- RA8-U25H-M × 10
- Peças Estruturais (Kit) × 1
- Placa Adaptadora RUC-01 × 1
- Seeed XIAO ESP32-S3 × 1
- Placa de Expansão Seeed XIAO × 1

:::

## 4. Dimensões Externas

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/dimensions.png" />
</div>

---

## 5. Arquitetura de Hardware

### Acionamento e Alimentação (Placa de Interface RUC-01)

Servindo como o hub de alimentação e comunicação de todo o robô, ela lida com o gerenciamento do barramento e a distribuição de energia:

- **Barramento dos Servos**: Quatro portas de servo de barramento onboard com suporte a expansão em cadeia (daisy-chain), transportando sinal e alimentação.
- **Interface de Configuração via PC**: USB Type-C, permitindo conexão direta a um host PC para configuração.
- **Alimentação do Sistema**: Faz a conversão de tensão para fornecer energia estável à placa controladora principal.
- **Interface de Comunicação**: Porta serial UART padrão para receber comandos do controlador principal de nível superior.

### Controlador Lógico e Expansão (MCU + Placa de Expansão Grove)

O "cérebro" do robô, responsável por executar algoritmos de controle e processamento de dados de sensores:

- **MCU Central**: Placa de desenvolvimento da série Seeed Studio XIAO, compacta porém poderosa.
- **Expansão de Ecossistema**: A placa de expansão Grove disponibiliza um conjunto rico de interfaces de E/S.
- **Funções Principais**: Executa programas de cinemática do robô e conecta sensores (ultrassônico, visão, voz etc.) via interfaces Grove para realizar capacidades interativas.

### Fluxo de Dados

**Modo de Depuração / Edição**

```
PC --(USB)--> RUC-01 --(Bus)--> Servos
```

*Descrição: Os ângulos dos servos são ajustados e os grupos de movimento são salvos diretamente via software de PC, sem passar pelo controlador principal XIAO.*

**Modo de Execução Autônoma**

```
Sensor / Remote --(Signal)--> XIAO --(UART Command)--> RUC-01 --(Bus)--> Servos
```

*Descrição: O XIAO controla o robô de forma autônoma com base no feedback dos sensores ou em código pré-armazenado.*

### Referência de Interface de Comunicação Universal (Leitura Obrigatória para Desenvolvimento Multiplataforma)

Embora o kit use o XIAO ESP32S3 como controlador principal padrão, a placa de interface RUC-01 é aberta a qualquer controlador externo. Apenas quatro fios são necessários entre o controlador principal e a RUC-01 para comunicação básica:

- **5 V / 3,3 V**: A RUC-01 pode fornecer de volta alimentação estável ao controlador principal.
- **GND**: Terra comum.
- **RX / TX**: Comunicação serial assíncrona padrão (UART) para envio/recebimento de comandos de controle e leitura do feedback dos servos.


| Nº | Descrição da Interface | Nº | Descrição da Interface |
| ---- | ------------------------------------ | ---- | ----------------------------------------------------- |
| ① | Interruptor Principal de Alimentação | ⑤ | UART de Comunicação da Placa Adaptadora / Interface Grove (conecta ao Controlador Principal ⑧) |
| ② | Porta de Entrada de Alimentação | ⑥ | Porta de Dados Type-C do Controlador Principal ESP32S3 (download de firmware) |
| ③ | Porta de Servo × 4 | ⑦ | Placa Controladora Principal Seeed XIAO ESP32S3 |
| ④ | Porta de Dados Type-C (depuração dos servos, conecta ao PC) | ⑧ | UART de Comunicação do Controlador Principal / Interface Grove (conecta à Placa de Interface RUC-01 ⑤) |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/hardware_interface.webp" />
</div>

:::warning
A chave seletora próxima à porta Type-C ④ na placa de interface RUC-01, bem como as duas portas Type-C mostradas no lado esquerdo do diagrama, são reservadas para outros fins e **não** são usadas neste projeto. Evite operá-las por engano.
:::

## 6. Estrutura Mecânica

- Visão Geral da Estrutura e IDs Padrão dos Servos

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/servo_id_mapping.webp" />
</div>

- Posição de Zero Grau de Todos os Servos

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/zero_pose.png" />
</div>

---

## 7. Desenhos e Download de Modelos

Para obter todos os dados de impressão 3D, visite: [MakerWorld - Atom S](https://makerworld.com/zh/models/2394805-atom-s#profileId-2624069)

:::tip
Forneceremos gradualmente vídeos de montagem mais completos e instruções ilustradas; fique atento às atualizações desta página.
:::

## 8. Executando Sua Primeira Demo

### Guia Rápido Fora da Caixa

:::tip
O Atom S sai de fábrica com o programa básico de controle gravado e a montagem inicial concluída. Basta preparar uma fonte de alimentação e um smartphone para experimentar rapidamente os movimentos do robô e os recursos de controle remoto.
:::

### Preparação de Alimentação de Hardware

Devido a restrições de envio, o kit não inclui uma bateria por padrão. Antes de começar, prepare uma bateria compatível e conecte-a à porta de alimentação na parte de trás do robô:

- **Especificação da Bateria**: Bateria Li-Po (polímero de lítio) 3S 12,6 V
- **Tipo de Conector da Bateria**: T-Plug
- **Verificação de Energização**: Após conectar a alimentação, o LED indicador na placa controladora principal (XIAO ESP32S3) acenderá, indicando que o sistema foi iniciado.

### Conexão ao Controle Remoto via Web

Ative o Bluetooth no seu smartphone ou PC com Bluetooth e escolha um navegador compatível com base no seu sistema operacional. Como o controle remoto web depende da API Web Bluetooth subjacente, a compatibilidade do navegador é crítica:

- **PC (Windows / macOS)**: Use Google Chrome ou Microsoft Edge.
- **Android**: Use Google Chrome; não use o navegador padrão do sistema nem abra via leitura de QR no WeChat.
- **iOS**: Safari, Chrome e Edge não suportam Web Bluetooth. Baixe um navegador de terceiros que suporte o protocolo WebBLE na App Store, como o Bluefy.

**URL de Acesso**: [Remote Controller](https://wiki.fashionrobo.com/ps2v2/)

- Desconectado:

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_disconnected.png" />
</div>

- Toque no botão **SYSTEM LINK** na parte superior da interface para procurar e conectar ao dispositivo:
- Na lista de dispositivos Bluetooth que aparecer, selecione o dispositivo chamado **ESP32_Pro_Remote** e toque em Pair.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_pairing.png" />
</div>

- Conectado: Depois de conectado, o robô executará automaticamente um movimento de "reverência" e retornará à pose padrão em pé, indicando que o sistema está pronto.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_connected.png" />
</div>

### Inicie sua primeira sequência de ensino de movimento contínuo

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/web_remote_layout.webp" />
</div>

Usando o gamepad virtual na web, você pode ensinar rapidamente ao robô uma sequência de movimentos contínuos sem escrever nenhum código:

- **Preparação**: Toque no botão **HOME** no canto superior esquerdo para garantir que o robô esteja na pose inicial padrão em pé.
- **Desbloquear juntas**: Toque no botão **RELAX** no canto superior esquerdo para colocar o robô em modo de amortecimento. Neste ponto, todos os servos ficam desenergizados, permitindo que você mova manualmente cada junta.
- **Registrar o primeiro quadro**: Posicione manualmente o robô e, em seguida, toque na tecla direcional **Esquerda ◀** para registrar a pose atual.
- **Registrar quadros subsequentes**: Continue alterando a pose do robô e toque em **Esquerda ◀** novamente. Repita esse processo para registrar uma sequência de quadros de movimento; até 100 quadros são suportados por padrão.
- **Reproduzir a sequência de movimento**: Depois que todas as poses forem registradas, toque na tecla direcional **Direita ▶**, e o robô reproduzirá suavemente todos os movimentos gravados.
- **Ajustar a velocidade de reprodução**: Se a reprodução estiver muito rápida ou muito lenta, toque em **Cima ▲** (acelerar) ou **Baixo ▼** (desacelerar) para ajustar a velocidade do movimento.
- **Demonstração com um toque**: Toque no botão **Quadrado □** à direita para reproduzir diretamente o movimento de demonstração padrão de fábrica.

:::tip
Se você concluiu a experiência rápida e deseja exportar o JSON de movimento, modificar a lógica do controlador principal ou conectar outros controladores, continue lendo as seções a seguir.
:::

## 9. Fluxo de trabalho principal para desenvolvimento de movimentos personalizados

### Design de poses e exportação de dados (Editor de Movimento Web)

- **Conectar e ler**: Conecte-se à placa de interface RUC-01 por meio de um navegador de PC para ler em tempo real os estados dos servos do robô.

  [Motion Editor](https://wiki.fashionrobo.com/uartbasic/robotstudiopro/)
- **Desbloquear e ensinar**: Desenergize os servos para o modo de amortecimento com um clique, mova o robô manualmente e registre a pose de cada quadro.
- **Organizar e ajustar**: Ajuste o tempo de execução e o intervalo entre quadros-chave e reproduza em tempo real no software para otimizar a fluidez do movimento.
- **Exportar JSON**: Depois de confirmar que o movimento está correto, exporte todo o grupo de movimentos como um arquivo `.json` padrão.

### Integração de dados e gravação de firmware (Controlador principal ESP32)

- **Código aberto**: Abra o código-fonte do projeto do controlador principal ESP32 incluído na Arduino IDE.
- **Substituir código**: Copie integralmente os dados `.json` exportados e substitua o conteúdo da variável `jsonData` existente no arquivo `Robot.ino`.
- **Compilar e gravar**: Recompile o projeto e grave o firmware atualizado na placa controladora principal ESP32S3.

### Controle remoto sem fio e execução acionada (Terminal remoto Web)

- **Conexão sem fio**: Abra o controle remoto da web no telefone em [Remote Controller](https://wiki.fashionrobo.com/ps2v2/) e faça o pareamento com o robô.
- **Acionamento com um toque**: Toque no botão **Quadrado □** na interface (comando `0x10`), e o robô executará de forma autônoma e contínua a sequência de movimentos recém-projetada, sem o cabo de dados.

### Guia do Editor de Movimento

#### Layout do editor

Três módulos principais:

1. Conexão/desconexão da porta serial e status de mensagens
2. Consulta e controle de status/ângulo dos servos
3. Otimização de grupo de movimentos e importação/exportação

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_layout.webp" />
</div>

#### Referência de controle

Conectar / desconectar porta serial

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_connect.png" />
</div>

Página de pose em tempo real

- **Layout**: Arraste cada controle de servo na tela para organizar as partes do robô; os IDs correspondem um a um; clique para bloquear o layout.
- **Scan**: Escaneie novamente todos os servos online.
- **Check**: Proteção contra sobretensão/subtensão, travamento e outros estados anormais.
- **Read Once**: Leia o ângulo atual uma vez.
- **Status Color**: Verde = controle de ângulo; Vermelho = liberado / amortecimento.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_realtime_posture.png" />
</div>

Controle de ângulo por arraste:

- **Leitura em tempo real**: Leia continuamente os ângulos dos servos.
- **Velocidade**: Limite a velocidade durante o arraste para evitar movimentos excessivos.
- **Modo de desbloqueio**: Libere os servos para ensino (liberação com desligamento / liberação em amortecimento).

<div align="center">
    <img width={800}
    src="C:\Users\seeed\Desktop\Atom-S-Final\images2\servo_angle_control.webp" />
</div>

Página de grupo de movimentos

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/action_group_page_1.png" />
</div>

A seguir é apresentada a explicação de cada botão:

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/action_group_page_2.png" />
</div>


#### Do editor ao movimento offline (XIAO ESP32S3 Sense)

- **1.** Clique em "Connect" para abrir a porta serial.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/connect_serial_port.png" />
</div>

- **2.** Selecione a porta serial de destino.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/select_serial_port.webp" />
</div>

- **3.** Escaneie todos os servos do robô.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/scan_all_servos.webp" />
</div>

- **4.** Clique em "Release All" para desenergizar todos os servos para posicionamento manual ou desbloqueie apenas os servos de que você precisa.
- **5.** Defina "Time" e "Interval".
- **6.** Após cada edição, clique em "Add Current" para adicioná-la ao grupo.
- **7.** Reproduza para verificar.

:::info
**Nota**

Cada quadro de movimento pode ser editado individualmente (ângulo, tempo, intervalo) e verificado.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/edit_action_frame.webp" />
</div>

- **8.** Clique em "Export (JSON)" para exportar o grupo de movimentos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/export_action_group.webp" />
</div>

- **9.** Abra o JSON exportado e copie o conteúdo de `frames` (incluindo os `[]` externos).

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/copy_json_frames.webp" />
</div>

- **10.** Substitua o `jsonData` no programa pelo conteúdo copiado; após compilar e gravar, o robô pode ser controlado via gamepad Bluetooth (consulte "Parâmetros de controle do robô" para detalhes).

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/replace_jsondata_code.png" />
</div>

### Parâmetros de controle do robô (ajuste conforme necessário)

#### Valores padrão

- `BAUDRATE`: Taxa de transmissão UART.
- `SERVO_NUM`: Número de servos.

```
#define BAUDRATE               115200     /* Baud rate */
#define SERVO_NUM              10         /* Total number of servos */
```

#### Bluetooth (se usado)

- `BLE_NAME`: Nome do gamepad.
- `BLE_UUID`: UUID do gamepad.

```
/* Bluetooth settings -- modify according to actual conditions */
#define BLE_NAME               "LOOKBON"  /* Bluetooth name */
#define BLE_UUID               "AE02"     /* ID for Bluetooth data reception */
```

#### Controle remoto Web (se usado)

- `SERVICE_UUID`: ID do serviço.
- `CHARACTERSTIC_UUID`: ID da característica.

```
/* ESP32 Service UUID and Characteristic UUID */
#define SERVICE_UUID           "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID    "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

#### Modo de ensino

- `MAX_ACTIONNUM`: Número máximo de quadros de movimento permitidos no modo de ensino.
- `Default_RobotRunSpeed_Demonstration`: Velocidade padrão de execução.
- `MIN_RobotRunSpeed_Demonstration`: Velocidade mínima de execução.
- `MAX_RobotRunSpeed_Demonstration`: Velocidade máxima de execução.
- `Adjust_RobotRunSpeed_Step`: Valor do passo de ajuste de velocidade no modo de ensino (±200 por passo).

```
#define MAX_ACTIONNUM                         100   /* Maximum number of teaching motion frames */
#define Default_RobotRunSpeed_Demonstration   1000  /* "Default" teaching run speed */
#define MIN_RobotRunSpeed_Demonstration       5000  /* "Slowest" teaching run speed */
#define MAX_RobotRunSpeed_Demonstration       500   /* "Fastest" teaching run speed */
#define Adjust_RobotRunSpeed_Step             200   /* Step value for adjusting teaching run speed */
```

#### Campos de dados (personalize conforme necessário)

- `RemoteControl_DefaultDemoAction`: Movimento de demonstração padrão (exportado do editor).
- `RemoteControl_Exe`: Comando de execução do modo de ensino.
- `RemoteControl_Record`: Comando de gravação do modo de ensino.
- `RemoteControl_Damping`: Comando de modo de amortecimento.
- `RemoteControl_Reset`: Comando de reset.
- `RemoteControl_ReduceRunSpeed`: Diminuir a velocidade de execução no modo de ensino.
- `RemoteControl_AddRunSpeed`: Aumentar a velocidade de execução no modo de ensino.

Observação sobre Bluetooth: Os dados reais do controlador dependem do seu dispositivo; defina os botões no código conforme necessário.

```
/* Bluetooth remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
#define RemoteControl_DefaultDemoAction       0xA1   /* Default demonstration motion */
#define RemoteControl_Exe                     0xA2   /* Teaching mode execution command */
#define RemoteControl_Record                  0xA3   /* Record motion command */
#define RemoteControl_Damping                 0xA4   /* Damping mode command */
#define RemoteControl_Reset                   0xA5   /* Robot reset command */
#define RemoteControl_ReduceRunSpeed          0xA6   /* Decrease teaching run speed */
#define RemoteControl_AddRunSpeed             0xA7   /* Increase teaching run speed */
```

Observação sobre o controle remoto via Web: da mesma forma, confirme os dados e o mapeamento dos botões antes da integração.

```
/* Web remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
#define RemoteControl_DefaultDemoAction       0x10   /* Default demonstration motion */
#define RemoteControl_Exe                     0x08   /* Teaching mode execution command */
#define RemoteControl_Record                  0x04   /* Record motion command */
#define RemoteControl_ReduceRunSpeed          0x02   /* Decrease teaching run speed */
#define RemoteControl_AddRunSpeed             0x01   /* Increase teaching run speed */

#define RemoteControl_Damping                 0x04   /* Damping mode command */
#define RemoteControl_Reset                   0x08   /* Robot reset command */
```

#### Resetar Ângulos

- `ROBOT_RESET_POSITION_0` ~ `ROBOT_RESET_POSITION_9`: Posições zero para os IDs de servo 0–9 (pose de reset do robô).

Observação: modifique estes valores de acordo com a pose de reset do seu robô.

```
/* Robot reset angle settings -- modify according to actual conditions */
constexpr float ROBOT_RESET_POSITION_0 = 0;
constexpr float ROBOT_RESET_POSITION_1 = 0;
constexpr float ROBOT_RESET_POSITION_2 = 0;
constexpr float ROBOT_RESET_POSITION_3 = 0;
constexpr float ROBOT_RESET_POSITION_4 = 0;
constexpr float ROBOT_RESET_POSITION_5 = 0;
constexpr float ROBOT_RESET_POSITION_6 = 0;
constexpr float ROBOT_RESET_POSITION_7 = 0;
constexpr float ROBOT_RESET_POSITION_8 = 0;
constexpr float ROBOT_RESET_POSITION_9 = 0;
```

### Referência de Controle Remoto

#### Gamepad Bluetooth

1. Pressione e segure o botão de energia do gamepad para ligá-lo e pareá-lo com o MCU (XIAO_ESP32S3).
2. Após o pareamento bem-sucedido, o robô fará uma reverência e resetará.

Funções de movimento:

- "Run Motion": Executa o movimento integrado.
- "Reset Robot": Retorna à pose de reset.
- "Damping Mode": Entra no estado de ensino, no qual as juntas podem ser movidas livremente.
- "Record Teaching Motion": Grava o movimento atual.
- "Execute Teaching Motion": Executa o movimento gravado (não é limpo por padrão).
- "Decrease Teaching Speed": Diminui a velocidade de execução (o servo do braço direito ID 6 oscila para indicar a velocidade).
- "Increase Teaching Speed": Aumenta a velocidade de execução (o servo do braço direito ID 6 oscila para indicar a velocidade).

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_controller_1.webp" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_controller_2.webp" />
</div>

## 10. Guia de Gravação do Firmware do Controlador Principal Padrão (Baseado no Seeed Studio XIAO ESP32S3)

:::tip
Esta seção se aplica apenas ao ambiente padrão do controlador principal XIAO ESP32S3. Se o seu projeto usar STM32 ou Raspberry Pi, consulte diretamente o SDK de Controle de Servo Fashionstar multiplataforma no apêndice.
:::

### Configuração do Ambiente de Desenvolvimento (Arduino IDE)

Baixe e instale a versão mais recente do Arduino IDE no site oficial do Arduino; recomenda-se o Arduino IDE 2.x.

### Importando o Pacote de Suporte de Hardware ESP32

Primeiro, abra as Preferências do Arduino IDE:

- Windows: `File > Preferences`
- macOS: `Arduino IDE > Settings...` ou `Preferences...`

Insira a seguinte URL em "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduino_preferences.png" />
</div>

### Implantando o Ambiente de Build do ESP32 (Requisito Rigoroso de Versão)

- Abra `Tools > Board > Boards Manager`
- Pesquise por `esp32`
- Localize o pacote fornecido por `Espressif Systems`
- **Selecione manualmente e instale a versão 3.3.5**

:::warning
**Não** instale diretamente a versão mais recente. A combinação atual de Bluetooth e driver de barramento do projeto requer a versão 3.3.5; caso contrário, o Bluetooth ou a comunicação de barramento pode falhar na compilação ou funcionar de forma anormal.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/esp32_board_manager.webp" />
</div>

### Instalando as Bibliotecas Necessárias (ArduinoJson e ArduinoBLE)

O sistema depende das seguintes bibliotecas de terceiros para análise JSON e serviços Bluetooth:

- `ArduinoJson`
- `ArduinoBLE`

Método de instalação:

- Abra `Sketch > Include Library > Manage Libraries...`
- Pesquise e instale `ArduinoJson`
- Pesquise e instale `ArduinoBLE`

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduinojson_library.png" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduinoble_library.png" />
</div>

### Implantando o SDK do Driver Central de Servo Fashion Star

Para garantir a chamada correta do driver de baixo nível, o SDK oficial deve ser instalado manualmente:

- Localize `fashionstar-uart-servo-arduino-sdk-V2.rar` no pacote de materiais incluído
- Extraia o arquivo compactado
- Copie toda a pasta do SDK para o diretório padrão de bibliotecas do Arduino

**Caminho Padrão das Bibliotecas**:

- Windows: `C:\Users\Username\Documents\Arduino\libraries`
- macOS: `~/Documents/Arduino/libraries`

Após copiar, feche completamente e reabra o Arduino IDE para que ele recarregue as bibliotecas locais.

### Selecionando a Placa e Compilando / Gravando

- Conecte o XIAO ESP32S3 ao computador com um cabo de dados Type-C
- Abra `Tools > Board > esp32` e selecione `XIAO_ESP32S3`
- Abra `Tools > Port` e selecione a porta correspondente à placa controladora principal

Os nomes das portas normalmente aparecem como:

- Windows: `COM3`, `COM5`, etc.
- macOS: `/dev/cu.usbmodem...` ou `/dev/cu.usbserial...`

Por fim, abra o código-fonte do projeto (`.ino`) no Arduino IDE, clique no botão Upload no canto superior esquerdo e aguarde o console exibir "Upload successful".

---

## 11. Especificação de Configuração de Parâmetros de Controle de Baixo Nível (Baseada no Controlador Principal Padrão Seeed Studio XIAO ESP32S3)

Após abrir o código-fonte do projeto no Arduino IDE, as seguintes definições de macro e constantes podem ser modificadas de acordo com os requisitos reais do projeto. Confirme o arquivo em que cada parâmetro está localizado para evitar alterações acidentais.

### Parâmetros Básicos de Hardware
Localizado em `Control.h`

- `BAUDRATE`: Taxa de baud serial para comunicação entre o controlador principal e o RUC-01
- `SERVO_NUM`: Número total de servos do robô

```cpp
/* User-modifiable robot data area */
/* define */
#define BAUDRATE 115200 /* Baud rate */
#define SERVO_NUM 10    /* Total number of servos */
```

### Remapeamento de Pinos Físicos UART
Localizado em `Robot.ino`

- `TX_PIN` / `RX_PIN`: Pinos seriais usados para comunicação entre o ESP32S3 e a placa adaptadora RUC-01

```cpp
/* Serial1 -- GPIO D6 = GPIO43 D7 = GPIO44 */
#define TX_PIN 43
#define RX_PIN 44
```

### Parâmetros de Comunicação Bluetooth do Controle Remoto Web
Localizado em `Robot.ino` e `Control.h`

- `BLE_NAME`: Nome de broadcast Bluetooth
- `SERVICE_UUID` / `CHARACTERISTIC_UUID`: UUID de serviço e UUID de característica dos quais o controle remoto web e o controlador principal dependem para estabelecer comunicação

```cpp
/* Set Bluetooth name */
BLE.setLocalName("ESP32_Pro_Remote");
/* ESP32 Service UUID and Characteristic UUID */
#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

### Referência de Parâmetros do Modo de Ensino
Localizado em `Control.h`

- `MAX_ACTIONNUM`: Número máximo de quadros de movimento graváveis no modo de ensino
- `Default_RobotRunSpeed_Demonstration`: Velocidade de execução padrão
- `MIN / MAX_RobotRunSpeed_Demonstration`: Limites superior e inferior para ajuste de velocidade
- `Adjust_RobotRunSpeed_Step`: Valor de passo para cada aumento ou diminuição de velocidade

```cpp
#define MAX_ACTIONNUM 100                        /* Maximum number of teaching motion frames */
#define Default_RobotRunSpeed_Demonstration 1000 /* "Default" teaching run speed */
#define MIN_RobotRunSpeed_Demonstration 5000     /* "Slowest" teaching run speed */
#define MAX_RobotRunSpeed_Demonstration 500      /* "Fastest" teaching run speed */
#define Adjust_RobotRunSpeed_Step 200            /* Step value for adjusting teaching run speed */
```

### Definições de Macros de Dados de Botões e Comandos
Localizado em `Control.h`

Na comunicação remota sem fio, o controle remoto web empacota os estados dos botões em duas variáveis independentes:

- `btn_Main`: Botões da área principal de operação
- `btn_border`: Botões da área de controle do sistema

Portanto, alguns comandos hexadecimais podem aparecer em ambas as áreas, mas correspondem a variáveis diferentes e não entrarão em conflito.

```cpp
/* Bluetooth remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
/* The following commands correspond to btn_Main (red hexadecimal labels in the mapping diagram) */
#define RemoteControl_DefaultDemoAction 0x10 /* Default demonstration motion command (Square button) */
#define RemoteControl_Exe               0x08 /* Teaching mode execution command (D-pad Right) */
#define RemoteControl_Record            0x04 /* Record motion frame command (D-pad Left) */
#define RemoteControl_ReduceRunSpeed    0x02 /* Decrease teaching run speed (D-pad Down) */
#define RemoteControl_AddRunSpeed       0x01 /* Increase teaching run speed (D-pad Up) */

/* The following commands correspond to btn_border (yellow hexadecimal labels in the mapping diagram) */
#define RemoteControl_Damping           0x04 /* Damping / release mode command (RELAX button) */
#define RemoteControl_Reset             0x08 /* Robot reset command (HOME button) */
```

### Área de Montagem de Dados de Grupo de Movimentos
Localizado em `Robot.ino`

Copie os dados `.json` exportados do editor de movimentos para a variável `jsonData`, mantendo o `R(` e `)`;`:

```cpp
/* Default demonstration motion */
const char* jsonData = R"(
[
  // Paste the JSON data exported from the motion editor here, completely replacing this section
  {"angles":[{"id":0,"angle":0},{"id":1,"angle":0} ... ],"time":2000,"delay":500}
]
)";
```

### Tamanho da Alocação do Buffer JSON
Localizado em `Control.cpp`

Se a sequência de movimento for muito longa, isso pode causar memória de execução insuficiente ou falha na análise do JSON. Nesse caso, a capacidade de `DynamicJsonDocument` pode ser aumentada adequadamente:

```cpp
/* Create a JSON document object with sufficient space allocated */
DynamicJsonDocument doc(4096);
```

Aumente para `8192` ou mais, conforme necessário, dependendo da complexidade do movimento.

### Parâmetros de Ângulo de Reset do Robô e Compensação de Ponto Zero
Localizado em `Control.h`

`ROBOT_RESET_POSITION_0 ~ 9`: Correspondem aos ângulos iniciais de zero dos Servos com IDs de 0 a 9, respectivamente

:::tip
Devido às tolerâncias de montagem mecânica, a posição zero absoluta de cada robô pode variar ligeiramente. Recomenda-se ajustar e compensar finamente esses parâmetros após verificar a postura em pé do robô.
:::

```cpp
/* Robot reset angle settings -- modify according to actual conditions */
constexpr float ROBOT_RESET_POSITION_0 = 0;
constexpr float ROBOT_RESET_POSITION_1 = 0;
constexpr float ROBOT_RESET_POSITION_2 = 0;
constexpr float ROBOT_RESET_POSITION_3 = 0;
constexpr float ROBOT_RESET_POSITION_4 = 0;
constexpr float ROBOT_RESET_POSITION_5 = 0;
constexpr float ROBOT_RESET_POSITION_6 = 90;
constexpr float ROBOT_RESET_POSITION_7 = 0;
constexpr float ROBOT_RESET_POSITION_8 = -90;
constexpr float ROBOT_RESET_POSITION_9 = 0;
```

## 12. Dicionário de Funções do Terminal Web Remoto e Mapeamento de Baixo Nível

:::tip
Para compatibilidade de navegador e etapas básicas de pareamento Bluetooth, consulte primeiro o Capítulo 2 deste documento. Este capítulo explica principalmente o layout dos botões na interface de controle e as relações de mapeamento em hexadecimal de baixo nível, para facilitar o desenvolvimento secundário posterior.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/web_remote_keys.webp" />
</div>

### Área de Controle do Sistema
Variável de código correspondente: `btn_border`

Esta área está localizada principalmente na parte superior e nas bordas da interface, sendo usada para controlar o estado global do robô:

- **HOME** (`0x08`): Interrompe o movimento atual, restaura o robô para a postura em pé padrão calibrada e limpa os dados de ensino atualmente na memória
- **RELAX** (`0x04`): Entra no modo de amortecimento / liberação, liberando o torque de sustentação de todos os servos para facilitar o ensino manual
- **Outros botões com rótulo amarelo**: Como `L1`, `L2`, `R1`, `R2`, `L3`, `R3`, etc. Estes não têm nenhum movimento atribuído no demo de fábrica atual e podem ser estendidos pelos desenvolvedores conforme necessário

### Área Principal de Operação
Variável de código correspondente: `btn_Main`

A área principal de operação contém as teclas direcionais e as teclas de função do lado direito, sendo principalmente responsável pela coreografia e execução de movimentos:

- **D-pad Esquerda ◀** (`0x04`): Registra o quadro de movimento atual
- **D-pad Direita ▶** (`0x08`): Reproduz a sequência de movimento atualmente gravada
- **D-pad Cima ▲** (`0x01`): Aumenta a velocidade de execução
- **D-pad Baixo ▼** (`0x02`): Diminui a velocidade de execução
- **Quadrado □** (`0x10`): Executa o movimento `jsonData` padrão pré-armazenado na Flash do controlador principal
- **Outros botões com rótulo vermelho**: Como `△`, `○`, `×`, etc. Estes estão indefinidos no firmware atual e podem ser mapeados no código de baixo nível conforme necessário

## FAQ

> A página do site de origem está em construção; o conteúdo será adicionado quando estiver disponível.

### Perguntas Frequentes

**P1: Que bateria deve ser usada para o Atom-S?**

R: Recomenda-se uma bateria Li-Po (polímero de lítio) padrão 2S ou 3S com conector XT60.

**P2: Outro controlador principal pode substituir o XIAO ESP32-S3?**

R: Este projeto é otimizado para o XIAO ESP32-S3, mas qualquer placa de desenvolvimento ESP32 com GPIO suficiente pode ser usada com apenas pequenas modificações.

**P3: Como atualizo o firmware?**

R: Conecte o XIAO ESP32-S3 ao seu computador via USB, abra o Arduino IDE ou PlatformIO e envie o novo programa.

**P4: Onde está o editor de movimentos?**

R: O editor de movimentos web pode ser acessado por meio de um navegador. Para operação detalhada, consulte o Capítulo 7.1.

---

### Solução de Problemas Comuns

#### Gravação de Firmware Sem Resposta / Estado Travado

- **Sintoma**: O Arduino IDE informa `A fatal error occurred: Failed to connect`, ou o processo de upload fica travado
- **Correção**:
  - Mantenha o cabo USB conectado
  - Pressione e segure o botão BOOT na placa de desenvolvimento
  - Clique no botão **Upload** no IDE
  - Solte o botão BOOT quando o console mostrar `Connecting...` ou começar a exibir o progresso da transferência

#### Terminal Web Não Consegue Enumerar Dispositivos Bluetooth

- **Sintoma**: Após clicar em "Find Device", a lista de dispositivos Bluetooth fica vazia
- **Solução de problemas**:
  - Verifique se você está usando um navegador que suporta a `Web Bluetooth API`
  - Usuários de Windows: confirme se a versão do SO é pelo menos Win10 (1703+)
  - Usuários de macOS: verifiquem as configurações de "Privacidade e Segurança" do sistema para garantir que a permissão de Bluetooth do navegador esteja concedida

#### Articulações Fracas / Incapazes de Manter a Posição

- **Sintoma**: O firmware é executado normalmente e a comunicação é estabelecida, mas o robô não consegue suportar uma carga de forma eficaz
- **Solução de problemas**:
  - Verifique se a capacidade de carga e descarga da bateria 3S é suficiente
  - Verifique se a fiação do barramento está solta ou invertida
  - Se os servos tiverem sido substituídos, confirme se todos os 10 IDs de servo (0–9) correspondem às definições do projeto para evitar conflitos de ID
