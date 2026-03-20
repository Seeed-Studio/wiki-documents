---
description: Este wiki fornece tutoriais de montagem e inicialização para o StackForce Mini Wheeled Legged Robot, bem como materiais de aprendizado e links necessários para seu desenvolvimento.
title: StackForce Mini Wheeled Legged Robot
keywords:
  - StackForce
  - Robótica
image: https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/mini_wheeled_legged_robot.webp
slug: /stackforce_mini_wheeled_legged_robot
last_update:
  date: 12/8/2025
  author: LiShanghang
translation:
  skip:
    - zh-CN
createdAt: '2025-12-10'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/pt-br/stackforce_mini_wheeled_legged_robot/
---

# Introdução ao uso do Robô Bípedo de Duas Rodas baseado na Plataforma de Desenvolvimento StackForce

:::tip
Este tutorial fornece apenas instruções de montagem e depuração para ajudar os desenvolvedores a construir o mais rápido possível um robô completo com rodas e pernas. Se você precisar aprender os princípios fundamentais dos robôs com rodas e pernas, consulte o [**vídeo tutorial de código aberto de DengGe no Bilibili**](https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc). Para desenvolvimento secundário, você pode procurar tutoriais em outros sites ou fóruns.
:::

<div class="video-container">
<iframe width="900" height="500" src="https://www.youtube.com/embed/8e2Q981ezBs?si=1n8j0nSHaYcwFrgX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introdução

O robô bípedo de duas rodas StackForce é desenvolvido com base na plataforma leve de desenvolvimento de robótica StackForce. Seu hardware central é composto pela placa de controle principal da série StackForce, placa de acionamento de motor e placa de acionamento de servo.

O robô inclui um modelo cinemático de corpo inteiro e um algoritmo de autoestabilização adaptativo ao estado. Com o poder de computação em tempo real da plataforma StackForce, ele suporta controle de múltiplas posturas, autoestabilização em terrenos complexos, descida de escadas e movimento estável em vários declives. A plataforma oferece suporte a transmissores RC, Bluetooth, comunicação serial e controle sem fio. Os usuários podem programar e ajustar o sistema conforme necessário. O produto fornece tutoriais completos de instalação e cursos em vídeo, tornando-o um robô bípedo de duas rodas de mesa com ótimo custo-benefício.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/mini_wheeled_legged_robot.webp" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/StackForce-Mini-Wheeled-Legged-Robot-p-6710.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Links técnicos

- **Vídeo tutorial de código aberto de DengGe no Bilibili:** [https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc](https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc)

- **Código aberto para o curso do robô com rodas e pernas:** [https://gitee.com/StackForce/bipedal_wheeled_robot](https://gitee.com/StackForce/bipedal_wheeled_robot)

- **Documentação da plataforma leve de desenvolvimento de robótica StackForce:** [http://stackforce.cc/#/](http://stackforce.cc/#/)

- **Projetos de robótica de código aberto para a plataforma leve de desenvolvimento de robótica StackForce:** [https://gitee.com/StackForce](https://gitee.com/StackForce)

- **Aprendizado de teoria e código do robô com rodas e pernas StackForce Mini** [https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_Mini_Wheeled_Legged_Robot/English/README.md](https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_Mini_Wheeled_Legged_Robot/English/README.md)

## Principais recursos

1. **Código aberto e baixo custo**: Segue uma licença de código aberto; todo o código-fonte e arquivos de projeto estão totalmente disponíveis, permitindo que desenvolvedores estudem, modifiquem e façam desenvolvimento secundário livremente.
2. **Controle de motor de alto desempenho**: Equipado com tecnologia FOC (Field-Oriented Control), oferecendo suporte a controle de velocidade, posição e torque em malha aberta/fechada para controle de movimento preciso.
3. **Poderoso suporte de hardware**: Utiliza um controlador principal ESP32 com interfaces ricas como I2C, SPI e PWM, permitindo expansão flexível de recursos.
4. **Capacidades abrangentes**: Suporta autoequilíbrio, movimento em alta velocidade, estabilização de postura e controle sem fio, adaptando-se a vários terrenos complexos.
5. **Fácil de aprender e usar**: Acompanha código de exemplo completo e tutoriais em vídeo, reduzindo significativamente a barreira de aprendizado para iniciantes.

## Especificações

| Especificação      | Detalhes                                                   |
|--------------------|-----------------------------------------------------------|
| Placa de Controle Principal | Placa de controle principal StackForce                  |
| Placa de Driver de Motor | Driver de motor brushless de canal duplo 5A (baixa potência) |
| Motores             | Motores brushless de gimbal 2208                        |
| Placa de Driver de Servo | Driver de servo multicanal com IMU integrada           |
| Fonte de alimentação       | Bateria de polímero de lítio 12,6V                     |
| Encoder            | Encoder magnético de alta precisão MT6701 de 14 bits     |
| Controle sem fio   | Controle remoto WiFi + controle sem fio Bluetooth PS4    |
| Peso total         | 540 g                                                     |
| Dimensões          | 10,5 × 21,0 cm (C × L), Altura 12,0–21,0 cm              |

## Lista de materiais (BOM)

[Download da BOM](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/BOM.xlsx)

| Nome do item | Quantidade | Unidade | Especificações | Observações/Padrões |
|-----------|----------|------|----------------|------------------|
| | | | | |
| **Componentes eletrônicos** | | | | |
| Placa de Controle Principal StackForce | 1 | pc | StackForce | |
| Placa Driver StackForce 5A de Baixa Potência | 1 | pc | StackForce | |
| Placa de Servo StackForce | 1 | pc | StackForce | |
| Encoder MT6701 | 2 | pc | StackForce | |
| Motor de Gimbal 2208 | 2 | pc | | |
| Servo DS041MG 500–2500 | 4 | pc | | |
| Controle Remoto MC6C-MINI | 1 | pc | | |
| Receptor MC7RBv2 | 1 | pc | | |
| Bateria Li-Polymer 12V | 1 | pc | 19×34×42mm | |
| Conector de Motor MR30-U | 2 | pc | | Para motor |
| Cabo de Encoder SH1.0-5P | 2 | set | | Para encoder |
| Fio Dupont 3P (Fêmea-Fêmea) | 1 | set | | Para receptor |
| | | | | |
| **Ferragens mecânicas** | | | | |
| Porca Travante M3 | 4 | pc | M3 | GB889.1-86 |
| Porca M3 | 4 | pc | M3 | DIN934 |
| Espaçador de Nylon | 4 | pc | 5×3.2×9mm | ABS |
| Arruela M3 | 4 | pc | M3 | Aço inox 304 |
| Ímã Radial | 2 | pc | 6×2.5mm | |
| Parafuso de Cabeça Redonda M2×4 | 24 | pc | M2×4 | GB/T845 |
| Parafuso de Cabeça Redonda M2×10 | 12 | pc | M2×10 | GB/T845 |
| Parafuso de Cabeça Redonda M3×6 | 4 | pc | M3×6 | GB/T845 |
| Parafuso de Cabeça Redonda M3×8 | 4 | pc | M3×8 | GB/T845 |
| Parafuso de Cabeça Redonda M3×16 | 4 | pc | M3×16 | GB/T845 |
| Parafuso de Cabeça Redonda M4×18 | 2 | pc | M4×18 | GB/T845 |
| Parafuso Autoatarraxante M2×6 | 16 | pc | M2×6 | GB/T845 |
| Parafuso de Cabeça Chata M2×6 | 46 | pc | M2×6 | Aço inox 304 |
| Parafuso de Cabeça Chata M3×6 | 16 | pc | M3×6 | Aço inox 304 |
| Espaçador de Cobre M3×7+4 | 4 | pc | M3×7+4 | Cobre / GB |
| Rolamento 6704ZZ | 4 | pc | Ø27×Ø20×4mm | |
| Rolamento 6701ZZ | 6 | pc | Ø18×Ø12×4mm | |
| | | | | |
| **Componentes estruturais** | | | | |
| Peças Impressas em 3D | 29 | pc | | |
| Pneus 1:10 6030-6085 Resistentes ao Desgaste | 2 | pc | | |

## Sumário

- [Tutorial da Versão Montada](https://wiki.seeedstudio.com/pt-br/stackforce_mini_wheeled_legged_robot/#Tutorial%20da%20Versão%20Montada)
- [Tutorial da Versão em Kit 1 - Montagem](https://wiki.seeedstudio.com/pt-br/stackforce_mini_wheeled_legged_robot/#Tutorial%20da%20Versão%20em%20Kit%201%20-%20Montagem)
- [Tutorial da Versão em Kit 2 - Calibração](https://wiki.seeedstudio.com/pt-br/stackforce_mini_wheeled_legged_robot/#Tutorial%20da%20Versão%20em%20Kit%202%20-%20Calibração)

## Tutorial da Versão Montada

[Manual Básico de Operação do StackForce Wheeled_Legged_Robot (PDF)](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Wheeled_Legged_Robot_Operation_Manual.pdf)

Você pode controlar o robô remotamente simplesmente iniciando-o na ordem especificada no documento em PDF.

## Tutorial da Versão em Kit 1 - Montagem

[Documento de instalação do Mini-Wheeled-legged robot.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Mini-Wheeled-legged%20robot%20installation%20document.pdf)

:::tip
A montagem possui muitas etapas, portanto, siga o guia com atenção. Alguns furos são feitos para parafusos autoatarraxantes, e é normal que os parafusos do pacote sejam diferentes dos do tutorial. Isso não afetará a montagem, e você pode usar parafusos de substituição adequados, se necessário.
:::

:::caution
Durante a montagem, preste atenção ao aperto dos parafusos. Não os aperte demais para evitar espanar ou danificar as roscas.
:::

## Tutorial da Versão em Kit 2 - Calibração

Primeiro, faça o download dos [arquivos de código necessários para a calibração](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Calibration_code.7z).

### Configuração do ambiente

**Passo 1:** Baixe o [Visual Studio Code](https://code.visualstudio.com/download).

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/1_1.png" />
</div>

**Passo 2:** Abra o Visual Studio Code, depois pesquise e instale a extensão **PlatformIO IDE** no Extensions Marketplace.

Após clicar em instalar, o PlatformIO fará automaticamente o download dos componentes adicionais necessários.
Em alguns casos, o MinGW pode estar ausente, o que impedirá você de criar novas pastas.
Se isso acontecer, será necessário instalar o **MinGW-w64** manualmente.

<details>

<summary> Step 3：Download MinGW-w64 </summary>

[**Link de download do pacote de ferramentas do Wheeled-Legged Robot**](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Tool_Collection.zip)（Inclui MinGW-w64）

Após baixar o arquivo, extraia-o e encontre a `mingw64 folder` dentro do pacote de ferramentas.
Extraia-a e instale-a em um diretório que use apenas caracteres em inglês.
Abra a `extracted folder` → abra a `bin folder` → copie o `path of the bin directory`
(por exemplo: D:\ming\mingw64\bin).

Configuração do ambiente:
Pesquise e abra `Advanced System Settings` no seu computador → `Environment Variables` → `System variables` → `Path` → `New` → cole o `bin path` copiado anteriormente → clique em `OK`.

- 1: Pesquise e abra `Advanced System Settings`.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_1.png" />
</div>

- 2: Clique em `Environment Variables`.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_2.png" />
</div>

- 3: Clique duas vezes em `Path` em Variáveis de sistema.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_3.png" />
</div>

- 4: Crie uma nova entrada de variável de ambiente.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_4.png" />
</div>

</details>

Etapa 4: Instruções dos Botões de Compilar e Upload

(**√**: Compilar o programa →: Fazer upload do programa para o hardware&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Auto**: Selecionar a porta serial)

:::tip
A seguir são explicados os botões de upload. Ainda não faça o upload do programa. Desenvolvedores podem revisar aqui primeiro o processo de upload.
:::

Após conectar o computador ao hardware, clique em `Auto` (opcional).
O sistema detectará e recomendará automaticamente uma porta serial.
Depois de selecionar a porta serial, clique em `Compile` (opcional) e `Upload` para gravar o programa no hardware.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/4_1.png" />
</div>

### Gravação e Depuração do S1

#### Conectando o Chip S1

Conecte o cabo USB. `O lado com o vão` do conector USB deve ficar para cima e `o lado sem o vão` deve ficar para baixo. `Solte o botão branco` para alternar para o chip S1 (a `luz amarela` acenderá).

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/烧录1.png" />
</div>

:::tip
**Observação: Por que existe um lado superior e um inferior?**

Como a placa possui dois chips — S1 para o programa do motor e S3 para o programa de controle dos servos — o conector Type-C usa duas fileiras de pinos separadas para comunicação. Cada chip usa uma fileira diferente para gravação. O botão branco alterna qual chip o computador irá gravar.
:::

#### Gravando o Programa do S1

Método 1: De acordo com o programa de controle do motor S1 pré-gravado, você pode pular para `Vofa Serial Assistant Download and Usage Guide`.

<details>
<summary>Método 2: Regravar o programa de controle do motor S1 (não recomendado)</summary>

Abra o projeto `BLDC_Control` no VS Code.

Isso permite que o PlatformIO instale automaticamente as bibliotecas necessárias, portanto **não arraste a pasta do projeto diretamente para o VS Code**. Em vez disso, abra uma nova janela do VS Code e use `File` → `Open Folder`.

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/1.png" />
</div>

Localize a pasta onde o `programa do S1` está armazenado e clique em Select Folder.  

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/2.png" />
</div>

Antes de gravar, você precisa modificar o `código de registro` e o `modo de comunicação`:

**Modificar o código de registro:**

Cada placa possui um código de registro exclusivo.  
Seu código de registro está impresso na `etiqueta` anexada à `embalagem da placa de controle principal`.  
Insira esse código no `campo correspondente`.  
Você também pode ler o `código de registro` a partir da `saída serial do S1` (explicado anteriormente no guia de instalação).

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3.png" />
</div>

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/4.png" />
</div>

**Modificar o modo de comunicação:**

Altere o valor na posição mostrada na imagem para `ONBOARD`. (`USB` = comunicação serial entre o chip S1 e o computador,  `ONBOARD` = comunicação entre os chips S1 e S3.)

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/5.png" />
</div>

Após fazer as alterações, clique no ícone `→` no canto inferior esquerdo para gravar o programa.

:::tip
**Problemas comuns durante a gravação e como resolvê-los:**

1. Resultado de gravação bem-sucedida

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_1.png" />
</div>

2. Este é o chip S3, que não corresponde ao programa S1

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_2.png" />
</div>

Solução:  
Verifique se o cabo USB está conectado invertido — o lado `sem o vão deve ficar para cima`.  
Verifique se o botão branco está solto. Quando solto, o `LED amarelo` acende, indicando que a placa está em `modo de gravação S1`.

3. Porta serial ocupada

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_3.png" />
</div>

Solução:  
Verifique se outro programa está usando a porta serial.  
Certifique-se de que o monitor serial do Vofa esteja `fechado`.  
Verifique se todos os outros assistentes seriais liberaram a porta.
:::

</details>

**Guia de Download e Uso do Vofa Serial Assistant**

Em seguida, abra o assistente serial e defina o baud rate para `115200` para verificar a saída serial. Link de download do Vofa Serial Assistant: [Download Center | VOFA-Plus](https://www.vofa.plus/)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/vofa.png" />
</div>

**Depuração do Programa de Controle do Motor S1 – Calibração do Número de Pares de Polos**

Segure o robô de forma que as rodas fiquem fora do chão e pressione o `botão de reset do S1`.  
As informações de pares de polos aparecerão no Vofa. Aguarde as rodas terminarem a rotação de autoteste.  
Se o valor detectado de pares de polos for `7`, a calibração foi bem-sucedida, conforme mostrado abaixo:

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/极对数校准.png" />
</div>

:::tip
Se o valor de pares de polos mostrar `inf` ou outro texto, verifique se a alimentação está ligada, confirme a fiação e certifique-se de que o ímã esteja instalado corretamente.

Se o valor detectado for 6, 8 ou qualquer outro diferente de 7, a roda pode estar montada muito apertada  
(consulte o guia de instalação das pernas com rodas e pesquise por `motor bearing installation` para reinstalar).  

A roda também pode estar tocando o chão ou outro objeto.  
Sempre que o robô for ligado ou o S1 for reiniciado, as rodas devem estar fora do chão para que o autoteste seja executado corretamente.

Repita o processo e pressione o `botão de reset do S1` até que o número de pares de polos mostre **7**.
:::

### Aquisição do Valor de Offset do S3

Depois de concluir a gravação do S1, alterne para o `chip S3` e grave o programa do S3. (Certifique-se de que o vão da porta USB fique voltado para baixo. Pressione o botão mostrado na imagem — quando a luz ficar `verde`, isso indica que o sistema mudou para o S3.)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/切换.png" />
</div>

:::caution
Certifique-se de remover o conjunto da coxa antes de gravar o programa.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/拆大腿.png" />
</div>
:::

- 1. No VSCode, abra a **pasta bipedal_calibrate (programa de calibração de valores de offset)**, grave o programa diretamente e depois abra o Vofa e defina o baud rate para `115200`.  
  Você verá uma saída serial como `0,0,0,0`, que representa os valores de offset dos `servos 1, 2, 3 e 4`.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_1.png" />
</div>

- 2. Ligue a bateria. Depois que os servos terminarem de girar, instale as pernas de modo que fiquem o mais perpendiculares possível ao chão.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_2.png" />
</div>

- 3. No terminal serial, insira comandos como `1,2,3,4` para controlar os servos até que as pernas fiquem perfeitamente verticais.  
  **Guia de direção:** Quando a perna estiver voltada para você, o sentido horário é negativo e o anti-horário é positivo.

Por exemplo: Na imagem acima, o servo 1 está levemente inclinado para a esquerda e o servo 2 ligeiramente para a direita.  
Digite `5,-6,0,0` para corrigir os servos 1 e 2 de volta à vertical. (`5` significa girar o servo 1 no sentido anti-horário em 5 unidades; `-6` significa girar o servo 2 no sentido horário em 6 unidades.)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_3.png" />
</div>

Ajuste os servos 3 e 4 usando o mesmo método:  
Use `0,0,x,0` para controlar o servo 3 e `0,0,0,x` para controlar o servo 4.  
Depois de terminar todos os ajustes de offset, aperte os parafusos pretos dentro da carcaça do servo para fixar as pernas.

:::tip
*Registre os valores de offset atuais — eles precisam ser escritos no programa de controle dos servos S3 abaixo.*
:::

### Calibração e Depuração do S3

[StackForce Wheeled_Legged_Robot Basic Operation Manual (PDF)](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/遥控器.png" />
</div>

#### 1. Modificar Valores de Offset

Abra a pasta `bipedal` (programa de controle de servo) no VS Code.  
No arquivo `bipedal_data.h`, atualize os valores de offset em `OFFSET`.  
Insira os valores de offset obtidos no programa anterior nas posições correspondentes mostradas abaixo.

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/4_01.png" />
</div>

#### 2. Depuração dos Servos

- Após gravar o programa, desconecte o USB.  
  `Pressione o 5 por longo tempo` para ligar o controle remoto.  
  Ajuste as chaves: `A (superior esquerda) para o meio`, `B (inferior esquerda) para baixo`, `C (superior direita) para baixo`.
- Segure o robô e mantenha-o nivelado para que a calibração do giroscópio e a calibração do motor possam prosseguir.  
  Pressione o botão de alimentação para ligar o robô.
- Aguarde cerca de 10 segundos para o autoteste ser concluído.  
  Coloque `A no meio` para habilitar os servos. Eles retornarão à posição inicial.  
  Coloque `C no meio` para sair da calibração dos servos.  
  Deslize **B** para ajustar a altura das pernas (coordenada **Y** da roda).  
  Deslize **D** para mover as rodas para frente/trás (coordenada **X** da roda).
- Observação sobre o movimento do robô com rodas-pernas:  
  Quando **D** é empurrado **para frente**, os servos giram para mover a coordenada **X** da roda **para trás**. O robô com rodas-pernas se inclina para frente, fazendo com que o **robô se mova para frente**.

#### 3. Configurar SpdDir

Defina uma direção de rotação fixa para os motores. No arquivo **main**, procure por `motors.setTargets` e defina o `torque` de `motor 0` e `motor 1` como `2`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir01.png" />
</div>

Use o Vofa para visualizar as velocidades dos motores. Defina a taxa de transmissão do Vofa para `921600` e conecte a `S3`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir02.png" />
</div>

Grave o programa na S3, abra o Vofa (taxa de transmissão `921600`), defina o `A switch up` do controle remoto para habilitar os motores, ligue a alimentação e segure o robô enquanto ele conclui a **autoverificação**. (Você pode primeiro verificar com Vofa–S1 para confirmar se a autoverificação foi concluída com sucesso.)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/设置SpdDir03.png" />
</div>

Verifique a rotação dos motores:

- Motor esquerdo: a rotação para frente deve mostrar velocidade **positiva**.  
  Se o terceiro valor (velocidade M1) for negativo, inverta `motorStatus.M1SpdDir`. Se for positivo, nenhuma alteração é necessária.

- Motor direito: a rotação para trás deve mostrar velocidade **negativa**.  
  Se o segundo valor (velocidade M0) for negativo, nenhuma alteração é necessária. Se for positivo, inverta `motorStatus.M0SpdDir`.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir04.png" />
</div>

:::tip
Se a explicação acima ainda não estiver clara, consulte as regras simplificadas abaixo:

Se a roda girar **para frente** e o Vofa mostrar um valor **negativo**, `invert` o **dir** de feedback.

Se a roda girar **para frente** e o Vofa mostrar um valor **positivo**, `not` altere o **dir** de feedback.

Se a roda girar **para trás** e o Vofa mostrar um valor **positivo**, `invert` o **dir** de feedback.

Se a roda girar **para trás** e o Vofa mostrar um valor **negativo**, `not` altere o **dir** de feedback.
:::

#### 4. Configurar o `dir` de Controle do Motor (procure `motors.setTargets`)

Descomente a linha de controle do motor conforme mostrado na imagem e comente a linha abaixo dela, depois grave o programa.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置电机控制dir01.png" />
</div>

Ligue o robô. Após a conclusão do reset, incline o robô para frente enquanto o segura. Se ambas as rodas girarem para frente, a direção de equilíbrio está correta.  
Se a roda esquerda girar para trás, `invert M1Dir`. A roda direita é ajustada da mesma forma.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置电机控制dir02.png" />
</div>

Depois de concluir essas etapas, o robô já pode ser controlado. A seguir é descrito como operá-lo. Você também pode consultar o documento [StackForce Wheeled_Legged_Robot Basic Operation Manual (PDF)](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf).

Joysticks frontais:

- **Etapa 1:**
  Coloque a chave superior esquerda em `middle`, a chave superior direita em `down` e o stick inferior esquerdo na posição `lowest`. Segure o robô, deixe as pernas penduradas naturalmente, mantenha as rodas fora do chão e o corpo nivelado.

  Ligue a alimentação, aguarde cerca de `10 seconds`, depois coloque o robô no chão e mantenha-o na posição vertical.

- **Etapa 2:**
  Coloque a chave superior direita em `middle`, empurre o stick inferior esquerdo `slightly up` e coloque a chave superior esquerda em `up`. O robô entra no modo de autoequilíbrio.

  Use o stick inferior direito `forward/back` para mover para frente/trás e `left/right` para virar à esquerda/direita.

  Use o stick inferior esquerdo `up/down` para ajustar a altura das pernas.

  Quando a chave superior direita estiver na posição `top`, mova o stick inferior esquerdo `left/right` para controlar o rolamento. Desligue a alimentação para sair do modo de rolamento.

## Demonstração ao Vivo

(Vídeo de demonstração real a ser adicionado)

## Citação

[中文文档](https://wiki.seeedstudio.com/cn/stackforce_mini_wheeled_legged_robot)

[gitee](https://gitee.com/StackForce/bipedal_wheeled_robot)

[StackForce Wheeled_Legged_Robot Basic Operation Manual (PDF)](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Wheeled_Legged_Robot_Operation_Manual.pdf)

[Mini-Wheeled-legged robot installation document.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Mini-Wheeled-legged%20robot%20installation%20document.pdf)

[Conjunto completo de esquemáticos da placa de controle](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Schematic_diagram.7z)

[Projetos de exemplo para o kit de desenvolvimento](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Sample_Code_Documentation.7z)

[Aquisição de código de registro do cliente](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Registration_code.7z)

[urdf & stl](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/SF_bipedalWheel.zip)

[BOM](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/BOM.xlsx)

[Pacote de Ferramentas do Robô com Rodas-pernas](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Tool_Collection.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
