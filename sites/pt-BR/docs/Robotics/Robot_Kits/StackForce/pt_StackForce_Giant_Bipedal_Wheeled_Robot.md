---
description: Guia de Desenvolvimento Profissional do Robô Gigante Bípede sobre Rodas StackForce, incluindo recursos avançados, tutoriais de desenvolvimento aprofundados, documentação de API e casos de aplicação prática
title: StackForce Giant Bipedal Wheeled Robot
keywords:
  - StackForce
  - Robô sobre Rodas e Pernas
  - Desenvolvimento Profissional
  - Robótica Avançada
  - Inteligência Artificial
  - Navegação Autônoma
slug: /stackforce_giant_bipedal_wheeled_robot
last_update:
  date: 12/12/2025
  author: TienjuiWong
translation:
  skip:
    - zh-CN
createdAt: '2025-12-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/stackforce_giant_bipedal_wheeled_robot/
---

# Guia de Desenvolvimento do StackForce Giant Bipedal Wheeled Robot

:::tip
Este guia foi projetado para desenvolvedores profissionais e pesquisadores, oferecendo uma solução completa desde a configuração básica até o desenvolvimento de aplicações avançadas. Se você é iniciante, recomendamos começar pela versão Mini.
:::

## 📋 Índice

- [Visão Geral do Produto](#visão-geral-do-produto)
- [BOM Lista de Materiais](#bom-lista-de-materiais)
- [Recursos Principais](#recursos-principais)
- [Início Rápido](#início-rápido)
- [Guia de Operação por Controle Remoto](#guia-de-operação-por-controle-remoto)
- [Guia de Depuração do Sistema](#guia-de-depuração-do-sistema)
- [Montagem de Hardware](#montagem-de-hardware)

## Visão Geral do Produto

### Posicionamento do Produto

O StackForce Giant Bipedal Wheeled Robot é um sistema de robô sobre rodas e pernas de nível profissional construído sobre a plataforma leve de desenvolvimento de robôs StackForce. Em comparação com a versão Mini, a versão completa apresenta melhorias significativas em configuração de hardware, funcionalidade de software e capacidade de expansão, sendo especificamente projetada para desenvolvimento profissional, pesquisa acadêmica e aplicações comerciais.

<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=114001333722578&bvid=BV1MhKKeBEJX&cid=28481814826&p=1"
  width="100%"
  height="480"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  style={{borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
</iframe>

### Arquitetura Técnica Central

#### Sistema de Controle Colaborativo de Dois Chips
- **Chip de Controle Principal S1**: Responsável pelo controle de motor, execução do algoritmo FOC e controle de movimento
- **Chip Coprocessador S3**: Responsável pelo controle de servo, fusão de sensores e comunicação sem fio

#### Modelo de Cinemática Omnidirecional
- Algoritmo de cálculo de atitude baseado em quaternions
- Solução de cinemática inversa em tempo real

#### Algoritmo Inteligente de Equilíbrio
- Controle PID adaptativo
- Ajuste dinâmico do centro de gravidade
- Estabilização adaptativa em terrenos complexos

## BOM Lista de Materiais

### Lista de Materiais da Estrutura de Grande Roda-Perna

| Nome do Item | Quantidade | Observações |
|-----------|----------|-------|
| **Componentes Eletrônicos** | | |
| Placa de Controle Principal StackForce | 1 | |
| Placa de Alta Corrente StackForce A | 1 | |
| Placa de Alta Corrente StackForce B | 1 | |
| Placa de Servo StackForce | 1 | |
| Placa CAN StackForce | 1 | |
| Placa de Expansão IO StackForce | 1 | |
| Placa Hall StackForce | 1 | |
| **Peças Estruturais de Fibra de Carbono** | | |
| Painel Lateral | 2 | Espessura de 5mm |
| Estrutura Base do Painel Lateral | 2 | Espessura de 3mm |
| Guia Frontal | 4 | Espessura de 5mm |
| Defletor | 2 | Espessura de 3mm |
| **Peças Impressas em 3D em PLA** | | |
| Perna Superior | 4 | |
| Perna Inferior | 4 | |
| Painel Frontal/Traseiro | 4 | |
| Conector de Painel Frontal/Traseiro | 4 | |
| Conector de Defletor | 4 | |
| Base de Controle Principal | 1 | |
| Tampa do Motor | 4 | |
| Placa de Cobertura V1 | 2 | |
| Placa de Cobertura V2 | 2 | |
| Compartimento da Bateria | 1 | |
| Tampa da Bateria | 1 | |
| **Peças Usinadas em CNC** | | |
| Conector de Perna 30 | 2 | |
| Conector de Perna 40 | 2 | |
| **Perfil de Alumínio** | | |
| 40*30*100 espessura 1mm | 4 | Requer perfuração |
| 60*20*320mm espessura 1mm | 2 | Requer perfuração |
| **Fixadores** | | |
| M2*10 | 1 | Cabeça arredondada preta |
| M3*8 | 4 | Cabeça arredondada |
| M3*8 | 32 | Preta, sextavada interna |
| M3*10 | 12 | Preta, sextavada interna |
| M3*14 | 16 | Preta, sextavada interna |
| M3*20 | 12 | Preta, sextavada interna |
| M3*25 | 24 | Preta, sextavada interna |
| M3*40 | 16 | Preta, sextavada interna |
| M3*45 | 8 | Preta, sextavada interna |
| M3*50 | 8 | Preta, sextavada interna |
| M3*50 | 8 | Preta, cabeça chata |
| M4*30 | 44 | Preta, sextavada interna |
| M4*30 | 2 | Cabeça arredondada preta |
| Pilar de Cobre | 22 | M3*8+4 |
| Prisioneiro | 4 | 10*M8*30 |
| Porca M3 | 10 | Preta |
| Porca Travante M3 | 54 | Preta |
| Porca Travante M4 | 20 | Preta |
| Porca Travante M6 | 4 | |
| Porca Travante M8 | 4 | |
| Rolamento com Rosca Externa | 4 | 9C2L15M6 |
| Rolamento F6000ZZ | 8 | 10*26*8 |
| **Motores** | | |
| Motor de Cubo 5,5 polegadas 24v | 2 | |
| GIM6010-8-Standard Version | 4 | |

## Recursos Principais

### 1. 🚀 Plataforma de Hardware de Alto Desempenho

#### Sistema de Controle Principal
- **Arquitetura de Dois Chips**: Processamento colaborativo S1 + S3
- **Desempenho em Tempo Real**: Tempo de resposta em nível de microssegundos
- **Interfaces de Expansão**: Interfaces ricas I2C, SPI, PWM

#### Sistema de Controle de Movimento
- **Controle Vetorial FOC**: Controle de torque preciso

### 2. 🧠 Sistema de Percepção Inteligente

#### Configuração de Sensores
- **IMU de Alta Precisão**: Fusão de sensores de 9 eixos
- **Encoder Magnético**: Realimentação de posição com precisão de 14 bits

### 3. 🌐 Poderosas Capacidades de Comunicação

#### Comunicação Sem Fio
- **WiFi 6**: Transmissão de dados em alta velocidade
- **Bluetooth 5.2**: Conexão de baixo consumo de energia
- **Protocolo Personalizado**: Pilha de protocolo de comunicação eficiente para conexão com controle remoto

#### Interfaces Com Fio
- **USB Type-C**: Depuração serial
- **Barramento CAN**: Acionamento de motor

### 4. 🔧 Suporte Flexível ao Desenvolvimento

#### Cadeia de Ferramentas de Desenvolvimento
- **PlatformIO**: Ambiente profissional de desenvolvimento embarcado
- **ROS/ROS2**: Compatibilidade com o Sistema Operacional de Robôs

#### Ecossistema Open Source
- **Totalmente Open Source**: Código de controle é open source
- **Design Modular**: Facilita a expansão de funcionalidades

## Início Rápido

### Requisitos de Sistema

#### Requisitos de Hardware
- Kit de Robô Versão Completa StackForce
- Computador com Ubuntu 20.04+ ou Windows 10+ instalado
- Pelo menos 8GB de RAM, 100GB de espaço de armazenamento disponível

#### Requisitos de Software
- Visual Studio Code
- Extensão PlatformIO IDE


## Guia de Operação por Controle Remoto

### 1. Fiação do Receptor

O diagrama abaixo mostra a sequência de fios de saída do receptor; apenas os três fios a seguir são necessários: **CH1/PPM**, **GND**, **VCC**.

O receptor faz a saída na seguinte ordem: **CH1/PPM**, **GND**, **VCC**

A placa de expansão possui 40 pinos, com GND e 3V3 na fileira do meio, conforme mostrado no diagrama abaixo.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_01.png" />
</div>

### 2. Pareamento de Frequência entre Receptor e Controle Remoto

Antes de fazer o pareamento de frequência, primeiro desligue o controle remoto, depois ligue e desligue o receptor três vezes em até 10 segundos para entrar no modo de pareamento. O indicador do receptor acenderá e apagará após um segundo.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_02.png" />
</div>

Em seguida, mova a chave de habilitação do controle remoto para baixo para ativar a transmissão de sinal, mova o joystick esquerdo do controle remoto para a posição mais baixa e então ligue o controle remoto. O pareamento de frequência será bem-sucedido. Após o pareamento bem-sucedido, o indicador do receptor apagará.

### 3. Instruções Básicas de Uso do Controle Remoto

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_03.png" />
</div>

#### Funções dos Joysticks e Chaves

| Controlador | Função | Descrição |
|------------|----------|-------------|
| **Joystick de Habilitação** | Se o controle remoto envia sinal ou não | Deve ser acionado antes de controlar o robô |
| **Joystick Esquerdo (cima/baixo)** | Controlar a altura do robô | Para cima eleva, para baixo abaixa |
| **Joystick Esquerdo (esquerda/direita)** | Controlar a altura de ambos os lados das pernas do robô | Precisa habilitar a função de balanço do ombro |
| **Joystick Direito (cima/baixo)** | Controlar o movimento para frente/para trás do robô | Para cima move para frente, para baixo move para trás |
| **Joystick Direito (esquerda/direita)** | Controlar a virada para esquerda/direita do robô | Vira para a esquerda, vira para a direita |

#### Uso do Joystick Esquerdo com o Botão Esquerdo

- **Quando o botão esquerdo é girado no sentido horário até o topo**: Mover o joystick esquerdo para baixo habilita a função de balanço do ombro; mover para cima desabilita
- **Quando o botão esquerdo é girado no sentido anti-horário até o fundo**: Mover para baixo faz o robô pular, mover para cima desabilita o pulo

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_04.png" />
</div>

#### Joystick Direito e Botão Direito

- **O joystick direito possui três posições**:
  - Posição superior: Desabilitar motor de cubo
  - Posição intermediária: Habilitar motor de cubo
  - Posição inferior: Ativar mecanismo autoestabilizante

- **Botão direito**: Ajustar o desvio de equilíbrio

### 4. Etapas de Operação de Ligar o Robô

#### Processo Detalhado de Operação

1. **Preparação do Controle Remoto**
   - Mova o joystick esquerdo do controle remoto até a posição mais baixa e então ligue o controle remoto
   - Certifique-se de que as pernas do robô estejam suspensas e paralelas ao solo
   - As pernas do robô devem ficar penduradas naturalmente, garantindo rotação suave das rodas para calibração

2. **Ligar o Robô**
   - Ligue a chave de alimentação do robô
   - Aguarde a conclusão da calibração do motor de cubo

3. **Reset da Placa de Controle Principal**
   - Mova o joystick esquerdo completamente para cima para resetar o chip S3 na placa de controle principal
   - Aguarde a conclusão da calibração

4. **Recolhimento das Pernas**
   - Mova o joystick esquerdo completamente para baixo para recolher as pernas do robô
   - Coloque o robô no chão

5. **Ativação do Motor de Cubo**
   - Mova o joystick direito para a posição intermediária para iniciar o motor de cubo
   - Se o robô não conseguir manter o equilíbrio, faça um ajuste fino no botão direito do controle remoto até que o robô mantenha o equilíbrio

:::warning
**Lembretes Importantes**:
- Não descarregue demais a bateria do controle remoto
- Você pode usar um multímetro para medir a tensão da bateria
- A faixa normal de descarga é geralmente de 25-21V
- Se a tensão cair abaixo de 21V, carregue a bateria a tempo
- Se você não entender as etapas acima, pode entrar em contato com a equipe técnica para assistir ao vídeo de operação de ligar o robô!
:::

## Guia de Depuração do Sistema

:::tip
Esta seção usa o número de ID da placa do motor de junta como rótulo para explicação. Conecte estritamente de acordo com o diagrama de fiação.
:::

### 1. Guia de Fiação

:::tip
**Diagrama de Fiação** - Faça a fiação estritamente de acordo com o diagrama para garantir que cada conexão esteja correta
:::

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_01.png" alt="Overall wiring diagram" />
</div>

#### 1. Fiação do Motor de Cubo

**Fiação da linha trifásica do motor de cubo e da linha trifásica Hall:**
- Sequência de soldagem dos fios trifásicos do motor de cubo (da esquerda para a direita): **Verde, Amarelo, Azul**
- Sequência dos fios do encoder (da esquerda para a direita): **Amarelo, Verde, Azul, Preto, Vermelho**

**Diagrama detalhado de fiação:**

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_02.png" alt="Motor wiring detail image 1" />
        <p>Figura 1: Fiação da linha trifásica do motor</p>
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_03.png" alt="Motor wiring detail image 2" />
        <p>Figura 2: Detalhes da fiação do encoder</p>
      </td>
    </tr>
  </table>
</div>

**Distribuição da fiação dos motores de cubo esquerdo e direito:**
- **Motor de cubo esquerdo**:
  - Linha trifásica → Placa de alta corrente B
  - Linha do encoder Hall → Porta M0 da placa Hall

**Esquema detalhado de fiação das rodas esquerda e direita:**

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_04.png" alt="Left hub motor wiring" />
        <p>Esquema de fiação do motor de cubo esquerdo</p>
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_05.png" alt="Right hub motor wiring" />
        <p>Esquema de fiação do motor de cubo direito</p>
      </td>
    </tr>
  </table>
</div>

### 2. Gravação do Firmware S1

#### Preparação antes da gravação

:::warning
**Lembrete Importante** - A direção de inserção do cabo USB é crucial, a inserção incorreta pode causar danos ao dispositivo
:::

1. Insira a ponta tipo-c do cabo USB **com o lado da emenda voltado para baixo** na interface tipo-c da placa de controle principal
2. Verifique o LED indicador da placa de controle principal:
   - Se a placa de controle principal **acender amarela** → Normal, pode gravar diretamente
   - Se a placa de controle principal **acender verde** → Pressione o botão branco de travamento automático ao lado para alternar para a luz amarela

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_06.png" alt="USB cable insertion direction diagram"  />
  <p>⚠️ Observe a direção de inserção do cabo USB</p>
</div>

#### Etapas de gravação

**Passo 1: Abrir a ferramenta de gravação**
1. Clique duas vezes para abrir a ferramenta `flash_download_tool_3.9.2.exe`
2. Após a ferramenta abrir, uma caixa de diálogo aparecerá, selecione **ESP32**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_07.png" alt="Flashing tool startup interface"  />
</div>

**Passo 2: Selecionar o arquivo de firmware**
1. Clique nos três pontos (ícone 📁) na primeira linha
2. Na pasta que abrir, selecione o arquivo `target.bin`

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_08.png" alt="Firmware file selection interface"  />
</div>

**Passo 3: Configurar os parâmetros de gravação**

:::info
**Lista de Verificação de Configuração de Parâmetros** - Configure de acordo com os seguintes parâmetros para garantir a gravação bem-sucedida
:::

Configure os seguintes parâmetros:
1. ✅ **Selecionar caminho do arquivo** (exibido automaticamente)
2. ✅ **Marcar seleção**
3. ✅ **Endereço de escrita**: `0x00`
4. ✅ **Frequência de clock**: `80MHz`
5. ✅ **Modo de flash**: `QIO`
6. ✅ **Seleção de porta serial**: Verifique a porta correspondente ao CH340 através do Gerenciador de Dispositivos
7. ✅ **Taxa de baud**: `921600`

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_09.png" alt="Flashing parameter configuration 1"  />
        <p>📋 Etapa 1 de configuração de parâmetros</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_10.png" alt="Flashing parameter configuration 2"  />
        <p>📋 Etapa 2 de configuração de parâmetros</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_11.png" alt="Flashing parameter configuration 3"  />
        <p>📋 Etapa 3 de configuração de parâmetros</p>
      </td>
    </tr>
  </table>
</div>

**Passo 4: Verificar resultados da gravação**
Após a gravação bem-sucedida:
1. Monte a placa e conecte os fios
2. Abra o assistente serial (VOFA) e selecione a porta correspondente
3. Ligue o robô:
   - Primeiro ligue o controle remoto
   - Empurre o joystick esquerdo do controle remoto para cima
   - Empurre a alavanca superior direita para cima (posição L)
4. Pressione o botão de reset do chip S1 (posição marcada com caixa vermelha)

:::success
**Etapas de Verificação** - Verifique de acordo com as seguintes etapas após a conclusão da gravação
:::

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_12.png" alt="S1 chip reset button position"  />
        <p>✅ Posição do botão de reset do chip S1</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_14.png" alt="Serial debugging assistant interface"  />
        <p>📊 Interface do assistente de depuração serial</p>
      </td>
    </tr>
  </table>
</div>

Se as informações impressas na serial forem como mostrado na figura abaixo, significa que a fiação do motor de cubo está correta e o firmware S1 foi gravado com sucesso.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_13.png" alt="Flashing success verification information"  />
  <p>🎉 Gravação bem-sucedida! Ver esta mensagem indica que tudo está normal</p>
</div>


### 3. Verificando a Resistência de Terminação

#### Números de ID da Placa Controladora do Motor de Junta

As placas controladoras dos motores de junta têm firmware gravado antes do envio e são etiquetadas com rótulos que são os números de CAN ID:

| Posição da Junta | Número CAN ID |
|----------------|---------------|
| Placa controladora do motor da junta dianteira esquerda | 0x04 |
| Placa controladora do motor da junta dianteira direita | 0x03 |
| Placa controladora do motor da junta traseira esquerda | 0x02 |
| Placa controladora do motor da junta traseira direita | 0x01 |

#### Conexão e Configurações de Resistência de Terminação

1. **Usar cabo XT30 (2+2) para conexão**:
   - Conecte as quatro placas controladoras de motor de junta em série
   - Só é necessário **abrir a resistência de terminação de uma das placas controladoras de motor** na fiação
   - As outras três não precisam abrir resistência de terminação

2. **Verificação da Resistência de Terminação da Placa CAN**:
   - Verifique se a resistência de terminação na placa CAN está aberta
   - Use o modo de resistência de um multímetro para medir a resistência dos terminais H e L da placa CAN
   - A resistência normal deve ser **em torno de 60Ω**

3. **Solução de Problemas**:
   - Se a resistência estiver incorreta, verifique se os interruptores de resistência de terminação na parte de trás das outras três placas controladoras de motor de junta estão fechados
   - Certifique-se de que apenas uma resistência de terminação esteja em estado aberto


### 4. Calibrando a Posição Zero

#### Passo 1: Modificar Configurações de Código

**No arquivo can.cpp:**
1. Role para baixo para encontrar a função `CAN_control()`

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_15.png" alt="CAN_control function in can.cpp file"  />
  <p>📝 Localização do código-chave em can.cpp</p>
</div>

**No arquivo main.cpp:**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_16.png" alt="posInit function in main.cpp file"  />
  <p>📝 Localização do código-chave em main.cpp</p>
</div>

#### Passo 2: Preparação de Hardware e Gravação

1. **Preparação do robô**:
   - Primeiro deixe as pernas do motor de junta penduradas naturalmente para baixo na vertical
   - Insira o cabo USB na placa de controle principal (observe que o lado da interface tipo-c com a emenda fica para baixo, o lado sem emenda fica para cima)
   - Após a inserção, a porta serial S3 da placa de controle principal deve acender **luz verde**
   - Se acender amarela, pressione o botão branco na placa de controle principal para alternar para o chip S3

2. **Gravação do Programa**:
   - Grave o programa modificado

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_17.png" alt="Hardware preparation completed diagram"  />
  <p>🔧 Estado de conclusão da preparação de hardware</p>
</div>

3. **Teste de Energização**:
   - Abra o assistente serial após gravar o programa
   - Ligue o robô (empurre a alavanca superior direita do controle remoto para cima (L))
   - Redefina o chip S3
   - Observe que os ângulos iniciais dos motores de junta impressos pela porta serial estão todos próximos de 0

4. **Verificar Dados de Ângulo**:
   - Balance um dos grandes braços do robô
   - Os dados que mudarem correspondem aos dados de ângulo daquela posição do grande braço

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_18.png" alt="Serial output angle data verification"  />
  <p>📊 Saída serial - verificação de dados de ângulo</p>
</div>

#### Passo 3: Concluir Configurações da Posição Zero

**No arquivo main.cpp:**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_19.png" alt="main.cpp zero position setting completed"  />
  <p>✅ Configuração da posição zero em main.cpp concluída</p>
</div>

**No arquivo can.cpp:**
1. Após comentar `posInit()`, você precisa **remover o comentário** do envio de comandos CAN na função `CAN_Control()` no arquivo can.cpp
2. **Comente** a impressão do ângulo elétrico do motor de junta

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_20.png" alt="can.cpp final configuration"  />
  <p>✅ configuração final de can.cpp concluída</p>
</div>

#### Etapa 4: Ajuste Final

1. **Regrave o programa** no chip S3
2. **Teste de Controle**:
   - Ligar o robô
   - Controlar o joystick de altura das pernas
   - Observar se as mudanças na altura das pernas seguem o controle do joystick esquerdo
3. **Ajuste de Balanceamento de Altura**:
   - Colocar o robô no chão
   - Recolher as pernas do robô ao mínimo
   - Observar se as alturas em ambos os lados do plano do robô são consistentes
   - Se não forem consistentes, ajustar os valores `leftY` e `rightY` no arquivo robot.cpp

**Diagrama de Ajuste de Balanceamento de Altura:**

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_21.png" alt="Height adjustment before and after comparison 1"  />
        <p>⚖️ Diagrama de ajuste de altura - antes do ajuste</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_22.png" alt="Height adjustment before and after comparison 2"  />
        <p>⚖️ Diagrama de ajuste de altura - depois do ajuste</p>
      </td>
    </tr>
  </table>
</div>

### 5. Depuração de Valores de Parâmetros PID

#### Preparação para Depuração

**Interface de Depuração de Parâmetros PID:**

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_23.png" alt="PID parameter debugging step 1"  />
        <p>🔧 Etapas de depuração PID - comentários de função</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_24.png" alt="PID parameter debugging step 2"  />
        <p>🔧 Etapas de depuração PID - impressão de parâmetros</p>
      </td>
    </tr>
  </table>
</div>

#### Etapas de Depuração

**Depurar parâmetros PID em três valores de altura:**

| Valor de Altura | Posição Correspondente | Preencher Parâmetros |
|-----------------|------------------------|----------------------|
| 0 | Ponto mais baixo | pid0 |
| 100 | Ponto médio | pid1 |
| 200 | Ponto mais alto | pid2 |

**Cada parâmetro pid inclui:**
- Kp do loop de velocidade
- Kp do loop de verticalidade
- Kd do loop de verticalidade
- Kp do eixo X do robô

#### Processo de Depuração

1. **Depurar cada altura individualmente**:
   - Depurar os valores de parâmetros PID para três diferentes valores de altura separadamente
   - Garantir que o robô possa manter o equilíbrio em cada altura

2. **Preencher parâmetros**:
   - Preencher os parâmetros PID depurados dos três valores de altura na função de ajuste linear PID em ordem
   - Preencher os valores de parâmetros PID do ponto mais baixo em pid0
   - Preencher os valores de parâmetros PID do ponto médio em pid1
   - Preencher os valores de parâmetros PID do ponto mais alto em pid2

3. **Verificação final**:
   - Após concluir a depuração, **remova o comentário** da função de ajuste linear PID
   - Gravar o programa no S3
   - Ligar o robô de acordo com as etapas de energização do robô
   - Verificar em solo se os parâmetros PID atendem ao equilíbrio de movimento e aos requisitos operacionais do robô

:::tip
Se você precisar consultar vídeos de operação, pode entrar em contato com a equipe técnica no grupo para obter o vídeo de operação de energização do robô!
:::

## Montagem de Hardware

### Guia Detalhado de Montagem

#### Documentos e Vídeos de Montagem

##### 📄 Documentos de Montagem
- [📗 Manual Detalhado de Montagem (Versão em Inglês)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLegRobot_NewVersion_Controller_Instructions.en.docx)
- [📘 Manual Detalhado de Montagem (Versão em Chinês)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/LargeWheelLegRobot_NewVersion_Controller_Instructions.zh.docx)
- [📋 Lista de Materiais BOM (Versão em Chinês)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLeg_BOM_Chinese.xlsx)
- [📋 Lista de Materiais BOM (Versão em Inglês)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLeg_BOM_English.xlsx)

##### 🔧 Ferramentas de Desenvolvimento
- [⚙️ Tutorial de Configuração de Ambiente VSCode + PIO](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/VScode_PIO_environment_tutorial/Environment%20Configuration%20Tutorial.docx)
- [📦 Kit de Ferramentas MingW64](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/VScode_PIO_environment_tutorial/mingw64.7z)
- [🔌 Guia de Instalação do Driver CH340](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/ch340_driver_installation/CH340_install.docx)
- [💾 Pacote de Driver CH340](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/ch340_driver_installation/CH341SER.ZIP)

##### 💻 Firmware e Programas
- [⚡ Ferramenta de Gravação de Firmware S1](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/S1_Firmware_Flashing_Tool.zip)
- [🔧 Programa de Controle Mais Recente](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/ESP32S3_SF_Bipedal_Wheel_New_version.zip)
- [🔧 Programa de Depuração de Junta](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/ESP32S3_SF_Bipedal_Wheel_lagency.zip)
- [🖼️ Capturas de Tela de Depuração de Programa](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/picture/)

##### 📚 Documentação Técnica
- [🔩 Descrição do Controle do Motor de Junta](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/joint_motor_documentation/SF-MOTOR_CONTROL.md)
- [📦 Pacote de Documentação do Motor de Junta](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/joint_motor_documentation/SF_Motor.zip)

##### 🗂️ Modelos 3D e Esquemáticos
- [📐 Modelo 3D do Robô (Formato STP)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/large_wheel_leg_robot_model_files/stackforce000_asm.stp)
- [🔌 Esquemático da Placa de Controle Principal](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/StackForce_Main_Control_Board.pdf)
- [🔌 Esquemático da Placa de Expansão CAN/485](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/SCH_StackForce_CAN_485.pdf)
- [🔌 Esquemático do Módulo Servo IMU](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/Multi_Servo_IMU_Module.pdf)

##### 🎥 Tutoriais em Vídeo

<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=114124914695505&bvid=BV12c9RYuEzw&cid=28754184592&p=2"
  width="100%"
  height="480"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  style={{borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
</iframe>


### Etapas Detalhadas de Montagem

#### Fase 1: Construção da Estrutura Mecânica
- Montar a estrutura da base
- Instalar os componentes de roda-perna
- Conectar a estrutura do corpo principal

#### Fase 2: Integração do Sistema Eletrônico
- Instalar o sistema de controle principal (placas S1/S3)
- Configurar módulos de sensores
- Configurar interfaces de comunicação

#### Fase 3: Depuração do Sistema
- Executar auto-verificação de hardware
- Verificar a funcionalidade do sistema

## Conclusão

O Robô Gigante Bípede com Rodas StackForce representa o mais recente nível de desenvolvimento da tecnologia de robôs roda-perna. Estamos empenhados em fornecer aos desenvolvedores as ferramentas mais poderosas e o suporte mais abrangente para promover conjuntamente o desenvolvimento da tecnologia de robôs.

Seja você estudante, pesquisador ou engenheiro, StackForce pode oferecer uma plataforma inovadora com possibilidades ilimitadas. Esperamos ver você criar aplicações incríveis!

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
