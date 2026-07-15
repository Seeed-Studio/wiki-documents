---
description: Ferramenta de Depuração de Engrenagem de Direção para SO-ARM no Lerobot.
title: Ferramenta de Depuração de Engrenagem de Direção para SO-ARM no Lerobot
keywords:
  - Lerobot
  - SO-ARM
  - Robótica
  - Servo
  - Calibração
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/pt-br/lerobot_steering_gear_debugging_tool/
---

# Ferramenta de Depuração de Engrenagem de Direção para SO-ARM no Lerobot

## Introdução

A Ferramenta de Depuração de Engrenagem de Direção (Seeed_RoboController) é uma ferramenta gráfica de depuração para braços robóticos Lerobot/SO-ARM. Com esta ferramenta, você pode detectar rapidamente o status dos servos, recalibrar IDs de servos, gravar valores neutros, controlar servos individuais e gerenciar arquivos de calibração do braço robótico, facilitando a montagem, depuração e manutenção dos braços líder e seguidor.

## 1. Instalação

Para sistemas Windows, Ubuntu e Mac.

1\. Primeiro, clone o repositório.

```Plain
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

2\. Recomenda-se instalar a ferramenta no ambiente virtual do Lerobot. Se você preferir uma instalação independente, crie um novo ambiente virtual para evitar poluir o Python do sistema.

```Plain
pip install -r requirements.txt
```

3\. Verifique o ambiente. Se retornar `[OK] Environment check passed`, o projeto está pronto para ser executado.

```Plain
python setup.py
```

4\. Inicie a ferramenta.

Execute o seguinte comando para iniciar a seleção interativa de porta.

```Plain
python -m src.gui.factory_calibration_tool
```

(Opcional) Especifique manualmente as portas se elas estiverem ocupadas.

```Plain
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

## 2. Primeiros Passos (Aplicável ao Braço Líder e ao Braço Seguidor)

### 1. Verificar se os Servos Estão Normais

Se os servos 1-6 forem todos detectados com sucesso, significa que os servos são reconhecidos normalmente e as funções básicas estão funcionando.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

Se alguns servos forem exibidos como não detectados, primeiro verifique se a fiação está correta, feche a página e reabra. Se ainda não forem detectados, os IDs dos servos podem estar duplicados (possivelmente porque o comando de calibração do braço robótico foi inserido acidentalmente como o comando de calibração dos servos). Nesse caso, os IDs desses servos precisam ser recalibrados.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

### 2. Remover os Chicotes de Fios dos Servos

Primeiro remova o chicote de fios de conexão entre o servo 6 e o servo 5.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" />
</div>

Em seguida, remova o chicote de fios de conexão entre o servo 5 e o servo 4.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" />
</div>

Remova o chicote de fios de conexão entre o servo 4 e o servo 3.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" />
</div>

Remova o chicote de fios de conexão entre o servo 3 e o servo 2.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" />
</div>

Remova o chicote de fios de conexão entre o servo 2 e o servo 1.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" />
</div>

Remova o chicote de fios de conexão entre o servo 1 e a placa de controle.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" />
</div>

### 3. Recalibrar IDs dos Servos

Certifique-se de que apenas um servo esteja conectado ao braço robótico.

(Ao gravar um ID em um servo, como os servos compartilham um barramento serial, se existirem IDs duplicados — por exemplo, alterar o ID 4 para 6 — todos os servos com ID 4 no barramento serão alterados para 6. Portanto, todos os servos devem ser removidos e reprogramados um por um.)

Por exemplo, você pode conectar o servo nº 6 à placa controladora conforme mostrado abaixo. Outros servos são conectados de forma semelhante, assim você pode evitar desmontar o braço robótico.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

Conforme mostrado na figura, apenas o servo nº 4 é reconhecido, mas o servo realmente conectado é o nº 6. Isso indica que o ID do servo está errado e precisa ser alterado de volta para 6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

Neste ponto, você pode clicar no servo nº 4 e alterar seu ID para 6. Repita a mesma operação para os outros servos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

Após a conclusão da calibração dos servos, você pode reconectar os fios um por um para finalizar.

### 4. Gravar o Valor Neutro no Servo

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1\. Clique em **Serial Port Neutral Test** para verificar se a posição neutra do braço robótico é como mostrado acima. Se for aproximadamente a mesma, o valor neutro do braço robótico está normal.

2\. Caso contrário, mova o braço robótico para a posição neutra e clique em **Serial Port Neutral Calibration**. O braço robótico gravará a posição atual como o valor neutro no servo.

3\. Clique em **Serial Port Disable Motors**, e o braço robótico ficará solto; você precisará sustentá-lo com a mão.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### 5. Controle de Servo Único

Por padrão, todos os servos na página estão em suas posições neutras, como mostrado na figura.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

Primeiro habilite o torque. Você pode habilitar todos os torques com um clique ou habilitar o torque para um único servo e, em seguida, deslizar o controle deslizante para mover o servo para a posição correspondente. No entanto, certifique-se de mover lentamente. Como as peças impressas do braço robótico bloqueiam fisicamente certas posições, o braço não pode realmente alcançar as posições de borda; existem limites máximos e mínimos de movimento, portanto, não deslize o controle deslizante para 0 nem para o máximo. Após desabilitar o torque, o braço robótico ficará solto.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" />
</div>

Como mostrado acima, após habilitar o torque, o movimento do servo correspondente mudará.

Pos: Posição

V: Tensão

T: Temperatura

Spd: Velocidade

Load: Torque

Cur: Corrente

Mov: Status de Movimento

Model: Modelo, Autoridade

Status: O status mostrará Normal, Overcurrent ou Overload

### 6. Ferramentas Avançadas

Você pode ler os dados do endereço de registrador correspondente e gravar os dados correspondentes.

A taxa de transmissão (baud rate) pode ser modificada.

As configurações de fábrica podem ser restauradas.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>

### 7. Gerenciamento de Arquivos de Calibração do Braço Robótico

Você pode selecionar o arquivo de calibração correspondente do braço seguidor ou do braço líder para executar, modificar ou excluir.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" />
</div>

### 8. Criar um Novo Arquivo de Calibração do Braço Robótico

Clique em **GUI Calibration Wizard** e selecione o braço robótico e o número da porta correspondentes.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" />
</div>

Você pode realizar calibração mínima, máxima e neutra para cada servo.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" />
</div>

Primeiro, registre o valor neutro de cada servo. Coloque cada servo na posição mostrada na figura e clique em **Record Neutral Value** para os servos 1-6, um de cada vez.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" />
</div>

Em seguida, clique em **Start Recording Range** para cada servo, gire o servo até os intervalos máximo e mínimo e clique em **Stop Recording Range**. Repita a operação acima para cada servo, depois nomeie o arquivo de calibração e salve-o.
