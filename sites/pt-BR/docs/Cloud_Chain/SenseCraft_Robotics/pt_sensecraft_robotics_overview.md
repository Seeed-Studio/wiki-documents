---
title: Visão geral do software SenseCraft Robotics
description: Explore o SenseCraft Robotics, combinações de braços compatíveis, instalação do software e configuração de conta, fluxos de trabalho de projetos, configurações, créditos e cobrança.
keywords:
  - SenseCraft Robotics
  - robótica
  - braço robótico
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sensecraft-robotics-official-website-en.webp
slug: /sensecraft_robotics
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

## 1. Introdução ao software

SenseCraft™ Robotics é uma plataforma de treinamento e execução para tarefas de braços robóticos no mundo real. Ela fornece um fluxo de trabalho integrado que abrange conexão de dispositivos, calibração, coleta de dados, treinamento de modelos e validação, ajudando usuários em educação, pesquisa e aplicações de robótica a avançar mais rapidamente dos dados de demonstração para ações físicas.

![Site oficial do SenseCraft Robotics](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sensecraft-robotics-official-website-en.webp)

### 1.1 Visão geral do software

O fluxo de trabalho principal da plataforma é o seguinte:

1. **Configuração do dispositivo**: Selecione o modelo de braço robótico, vincule o braço Líder, o braço Seguidor e as câmeras, depois conclua a calibração e a verificação de teleoperação.
2. **Coleta de dados**: Use o braço Líder para controlar o braço Seguidor durante as demonstrações de tarefas e registre vários segmentos de dados.
3. **Biblioteca de ações**: Registre, gerencie e reproduza segmentos de ação executáveis de forma independente.
4. **Gerenciamento de conjuntos de dados**: Visualize vídeos e repare, mescle ou envie conjuntos de dados.
5. **Treinamento**: Selecione um conjunto de dados e realize treinamento em nuvem ou local.
6. **Execução**: Selecione um modelo treinado e realize inferência local ou em nuvem para que o braço robótico possa executar tarefas de forma autônoma.

### 1.2 Principais recursos

- **Fluxo de trabalho guiado**: Conclua a configuração do dispositivo, coleta de dados, treinamento e verificação de execução passo a passo.
- **Treinamento em nuvem**: Envie as principais tarefas de treinamento para a nuvem para reduzir os requisitos de computação local.
- **Gerenciamento de projetos**: Gerencie projetos, conjuntos de dados e modelos em um só lugar para reutilização e iteração contínua.

Entrada oficial: [SenseCraft Robotics](https://sensecraft.seeed.cc/en?utm_source=sensecraft_wiki&utm_medium=socil)

### 1.3 Casos de uso

- **Organizações de educação e treinamento / educação STEM**: Organizar cursos de robótica com IA, aprendizagem baseada em projetos e demonstrações de projetos de estudantes.
- **Universidades / instituições de pesquisa / laboratórios**: Apoiar inteligência incorporada, aprendizado por imitação, coleta de dados robóticos e validação de modelos.
- **Centros de inovação / equipes de demonstração e soluções**: Construir protótipos demonstráveis de aplicações de robótica com IA para educação pública, experiências de clientes e design de soluções baseadas em cenários.

<span id="supported-devices"></span>

## 2. Dispositivos compatíveis

### 2.1 Braços robóticos compatíveis

![Três recomendações de seleção de braços robóticos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/device-model-selection.webp)

Escolha um dispositivo de acordo com seus objetivos: selecione um modelo de nível de entrada para aprendizado introdutório e desenvolvimento básico; escolha um modelo avançado quando forem necessárias maior capacidade de desempenho e de desenvolvimento secundário; selecione um modelo de aplicação de alta precisão quando a precisão de posicionamento e a estabilidade de movimento forem importantes.

| Modelo | Combinação de dispositivos (Líder + Seguidor) | Link de compra | Guia dedicado |
|---|---|---|---|
| 01 | SO-ARM101 + SO-ARM101 | [Buy now](https://www.seeedstudio.com/SO-101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html?utm_source=sensecraft_wiki&utm_medium=socil) | [Guia SO-ARM101](/pt-br/sensecraft_robotics_so_arm101/) |
| 02 | reBot Arm 102 + B601 DM | [Buy now](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html?utm_source=sensecraft_wiki&utm_medium=socil) | [Guia DM](/pt-br/sensecraft_robotics_rebot_arm_102_b601_dm/) |
| 03 | reBot Arm 102 + B601 RS | [Buy now](https://www.seeedstudio.com/reBot-Arm-B601-RS-Assembled-Kit-with-Gripper-p-6865.html?utm_source=sensecraft_wiki&utm_medium=socil) | [Guia RS](/pt-br/sensecraft_robotics_rebot_arm_102_b601_rs/) |

> Este artigo descreve o fluxo de trabalho de software comum para as três combinações de dispositivos. Para instalação do braço robótico, cabeamento e requisitos de energia, consulte o guia dedicado para a combinação de dispositivos aplicável.

### 2.2 Requisitos de computador e software

- Um computador Windows ou macOS.
- Uma conexão de rede estável para login, gerenciamento de projetos, treinamento em nuvem e verificação de inferência.
- A versão mais recente do cliente SenseCraft Robotics.
- Uma conta SenseCraft registrada. Consulte a página oficial de download do software para requisitos específicos de sistema operacional e hardware.

<span id="download-and-account"></span>

## 3. Download e instalação do software

![Download do software](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/software-overview-en.webp)

### 3.1 Baixar o software

Abra a [página oficial do SenseCraft Robotics](https://sensecraft.seeed.cc/en?utm_source=sensecraft_wiki&utm_medium=socil), vá para a seção de download do software e selecione o instalador para o seu sistema operacional.

### 3.2 Instalar o software

Execute o instalador e siga o assistente de instalação. Após a instalação, inicie o cliente SenseCraft Robotics. Recomendamos reservar espaço em disco suficiente para vídeos, conjuntos de dados e arquivos de modelo.

### 3.3 Criar uma conta

No centro do usuário, selecione **Sign up** ou **Create account** e siga as instruções na tela para verificar seu endereço de e-mail e definir uma senha. Após o registro, retorne ao cliente SenseCraft Robotics.

![Registro de conta](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sign-up-en.webp)

### 3.4 Fazer login no software

O cliente SenseCraft Robotics abre o centro de usuário SenseCraft no navegador do seu sistema para concluir o login. O próprio cliente não coleta diretamente sua senha.

1. Inicie o cliente SenseCraft Robotics e clique em **Log in** na janela de login.
2. O navegador do sistema abre o centro de usuário SenseCraft. Faça login com seu endereço de e-mail registrado e senha e conclua quaisquer etapas de verificação ou autorização de conta exibidas.
3. Após fazer login, você entrará na página **Projects**, onde poderá criar um novo projeto ou abrir um existente.



## 4. Visão geral do software

<span id="home"></span>

### 4.1 Início

A página Início fornece acesso à plataforma, ao status do projeto e a recursos usados com frequência. Ao usar a plataforma pela primeira vez, você pode entrar em um projeto ou visualizar informações de ajuda a partir da página Início.

![Visão geral da página Início](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/overview-en.webp)

<span id="projects"></span>

### 4.2 Projetos

Um projeto é um espaço de trabalho unificado para gerenciar dispositivos, tarefas, conjuntos de dados e modelos. Após fazer login, siga estas etapas para o primeiro uso:

1. Crie um projeto e selecione uma combinação de braços robóticos.
2. Conecte o braço Líder, o braço Seguidor e as câmeras.
3. Conclua a calibração do dispositivo e a verificação de teleoperação.
4. Registre um segmento de dados de demonstração.
5. Verifique o conjunto de dados e envie-o ou use-o para treinamento.
6. Selecione um modelo para verificação de execução.

![Configurações do projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/project-settings-en.webp)

<span id="settings"></span>

### 4.3 Configurações

Clique em **Settings** na barra de navegação superior para abrir a página de Configurações. Ela contém principalmente os três módulos a seguir:

- **Informações pessoais**: Visualize e **edite** suas informações básicas de conta, incluindo avatar, nome de usuário, endereço de e-mail vinculado e ocupação.
- **Configurações de senha**: Altere a senha da sua conta. Insira sua **senha atual** para verificar sua identidade e, em seguida, defina e confirme uma **nova senha**.
- **Software e serviços**:
  - **Conexões de serviço**: Gerencie conexões autorizadas a plataformas de IA de terceiros, como Hugging Face.
  - **Gerenciamento de versão**: Veja a versão atual do software e verifique se há atualizações. Você pode **Check for updates**, **Download update** ou **Restart and update**. Se ocorrerem problemas de verificação, use o aviso para visitar a página oficial de download.

![Configurações](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/software-settings-en.webp)

<span id="credits"></span>

## 5. Créditos e cobrança

### 5.1 Modelo de cobrança

SenseCraft Robotics usa um modelo baseado em créditos no qual o uso de GPU é cobrado de acordo com o uso real.

> Os preços dos créditos, datas de expiração, momento da cobrança, regras de reembolso e ofertas educacionais podem variar por região, versão do software e promoção. Esta seção é fornecida apenas para referência funcional. Para as regras mais recentes, consulte a página de cobrança atual do SenseCraft Robotics, a página de confirmação de tarefas e os termos de serviço.

- Créditos comprados ou resgatados podem ser usados para tarefas de treinamento e inferência.
- As cobranças são baseadas no modelo de GPU selecionado e no tempo de execução real.
- Fila de espera e preparação de recursos geralmente não geram cobranças; a cobrança começa quando a tarefa realmente é executada.
- Consulte a página atual da plataforma para preços específicos.

### 5.2 Adição de créditos

Os usuários podem obter créditos por meio de recargas na plataforma, códigos de resgate ou códigos de cursos educacionais.

- Valores de recarga mais altos podem incluir mais créditos de bônus.
- Novos usuários podem receber um bônus de créditos único.
- Usuários de educação podem usar créditos compartilhados fornecidos por uma escola ou organização por meio de um código de curso.
- Diferentes tipos de créditos podem ter diferentes regras de expiração e reembolso.

### 5.3 Cobranças de treinamento e inferência

Quando uma tarefa é criada, a plataforma estima o consumo esperado com base no tipo de tarefa, modelo de GPU e número de etapas de treinamento. A cobrança final é liquidada de acordo com o tempo de execução real.

- Tarefas de treinamento estimam o tempo de execução com base no número de etapas de treinamento.
- Tarefas de inferência são cobradas de acordo com o tempo de execução real.
- A cobrança final pode ser menor ou maior do que a estimativa.
- Se o saldo for insuficiente, a tarefa poderá parar automaticamente. A conta não ficará com saldo de créditos negativo.

### 5.4 Reembolsos e expiração de créditos

- Créditos comprados, de bônus e de educação são gerenciados de acordo com as regras da plataforma.
- Se uma tarefa não conseguir iniciar ou ocorrer um problema com a plataforma ou GPU, os créditos não utilizados geralmente poderão ser devolvidos.
- Se um usuário cancelar uma tarefa, a parte que já foi executada é cobrada de acordo com o uso real.
- Créditos usados geralmente não são reembolsáveis.
- Consulte as informações atuais da plataforma para regras específicas de expiração e reembolso.
