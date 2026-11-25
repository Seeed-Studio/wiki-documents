---
description: Instale e use a skill oficial de desenvolvimento C++ para reCamera 2002 com agentes de codificação em IA para criar esqueleto de projetos, converter modelos, cross-compilar, implantar e verificar aplicações SG200X.
title: Usar a Skill
keywords:
  - reCamera
  - reCamera 2002
  - AI coding agent
  - Agent Skills
  - SG200X
  - RISC-V
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_2002_development_cpp_skill
sidebar_position: 6
last_update:
  date: '2026-11-20'
  author: Go
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/pt-br/recamera_2002_development_cpp_skill/
---

# Usar a Skill para Desenvolver Aplicações na reCamera 2002

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp" alt="reCamera 2002 AI coding agent skill" /></div>

## Introdução

O [reCamera 2002 C++ Dev Toolkit](https://github.com/Seeed-Projects/recamera-2002-cpp-dev) empacota um fluxo de trabalho C++ reprodutível para a reCamera 2002 (SG200X) em uma Agent Skill. Após a instalação, seu agente de codificação pode gerar um workspace de demonstração, preparar modelos, cross-compilar binários RISC-V, executar smoke tests no host, empacotar artefatos, implantar via SSH e coletar evidências.

A skill é orientada por configuração: `demo.json` descreve o que a demo deve fazer, cada estágio é um comando e os estágios offline precisam passar antes que um dispositivo seja envolvido.

:::note
Esta skill é voltada para **reCamera 2002 com o SoC SG200X** (OS >= 0.2.4). Ela **não** é para reCamera Pro / RV1126B / RKNN. Para reCamera Pro, use a [skill reCamera Pro](/pt-br/recamera_pro_development_cpp_skill/).
:::

## O que a skill pode fazer

- **Gerar um workspace de demonstração** a partir de `demo.json`: estrutura de diretórios, scripts de build e código inicial
- **Buscar ou converter modelos**: modelos hospedados pela Seeed ou ONNX → `.cvimodel` com TPU-MLIR
- **Cross-compilar** demos C/C++ RISC-V com a toolchain Xuantie e o SDK SG200X
- **Executar smoke tests no host** sem um dispositivo, para que erros de lógica falhem antes da implantação
- **Empacotar** artefatos determinísticos com hashes para entrega reprodutível
- **Implantar via SSH**, sondar o dispositivo e diagnosticar falhas
- **Iniciar um visualizador ao vivo** com vídeo UDP H.264, sobreposições de detecção e ajuste de parâmetros
- **Capturar evidências** e pontuar a saída em relação a uma linha de base

## Ambiente suportado

| Item | Configuração suportada |
| --- | --- |
| Dispositivo | Seeed reCamera 2002 (SG200X), OS >= 0.2.4 |
| SoC | SG200X |
| Arquitetura alvo | riscv64 Linux |
| Formato de modelo | `.cvimodel` (TPU-MLIR / CVI) |
| Host | Linux x86_64 (macOS para validação no host; Windows via WSL2) |
| Agentes suportados | Claude Code, Codex, Gemini CLI |
| Não suportado | reCamera Pro / RV1126B / RKNN |

## Instalar a Skill

Clone o repositório do toolkit e depois copie o diretório da skill para o diretório de skills do seu agente:

```bash
git clone https://github.com/Seeed-Projects/recamera-2002-cpp-dev.git ~/src/recamera-2002-cpp-dev

# Claude Code
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.claude/skills/

# OpenAI Codex
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.codex/skills/

# Gemini CLI
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.gemini/skills/
```

Após a instalação, mantenha o nome do diretório da skill como `recamera-2002-cpp-dev`. O mesmo diretório pode atender a vários agentes. Se a skill não aparecer na sua sessão atual, reinicie o agente.

## Usar a Skill: Passo a passo de Contagem de Pessoas

Depois de instalar a skill, você não precisa executar cada script manualmente. Descreva o objetivo para o seu agente de codificação e ele seguirá o fluxo de trabalho da skill. Abaixo está uma sessão real de desenvolvimento secundário de contagem de pessoas.

### 1. Descreva a tarefa

Digite isto no Claude Code / Codex:

```text
Use the recamera-2002-cpp-dev skill to implement people counting in the camera view.
```

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_begin.png" alt="Starting a people counting task with the recamera-2002-cpp-dev skill" />
  <p><em>O agente cuida automaticamente da validação, cross-compilação, empacotamento, implantação e do visualizador ao vivo</em></p>
</div>

A partir daqui você não precisa executar nenhum script manualmente. O agente segue a skill desde a geração do workspace até a visualização ao vivo no dispositivo e então imprime `LIVE_URL`.

### 2. Implantar e abrir a página ao vivo

O agente executa probe → install → start automaticamente, abre o visualizador no host e imprime `LIVE_URL`.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_count.png" alt="People counting count" />
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_result.png" alt="People counting result in the reCamera Live page" />
  <p><em>reCamera Live: visualização ao vivo, caixas de pessoa, linha de contagem, painel de parâmetros e log do dispositivo</em></p>
</div>

A página mostra a visualização ao vivo, caixas de pessoa e contagens de entrada/saída; alterações na linha de contagem e na ROI entram em vigor imediatamente.

### 3. Iterar

Continue a conversa:

```text
Move the counting line up and shrink the ROI to the lower half of the frame.
```

```text
Increase the track confirmation frames from 2 to 3 to reduce false counts.
```

```text
Publish the current count and in/out totals to Home Assistant over MQTT.
```

O agente modifica o projeto, recompila, reimplanta e reutiliza o mesmo fluxo de verificação.

## Referência de Comandos

Apenas os dois pontos de entrada mais comuns são mantidos aqui. Para o conjunto completo de comandos, parâmetros e observações, consulte o repositório oficial:

- [README.md](https://github.com/Seeed-Projects/recamera-2002-cpp-dev/blob/main/README.md)
- [SKILL.md](https://github.com/Seeed-Projects/recamera-2002-cpp-dev/blob/main/SKILL.md)

```bash
# Create a workspace with the live transport skeleton
python3 scripts/new_demo.py --name my_live --task detection --live udp --out ~/reCamera_demo

# Deploy and open the live page
python3 scripts/launch_demo.py --demo-dir ~/reCamera_demo/my_live --host <device-ip>
```

## Fluxo de trabalho de desenvolvimento

1. **Gerar** o workspace a partir de `demo.json`.
2. **Validar** a configuração do projeto offline.
3. **Build** do binário RISC-V e registro do lock da toolchain.
4. **Smoke test** da lógica no host sem um dispositivo.
5. **Empacotar** um arquivo determinístico com hashes de artefatos.
6. **Implantar** via SSH e sondar o dispositivo.
7. **Capturar evidências** e pontuar o resultado em relação a uma linha de base.

Por padrão, a skill compila e inspeciona artefatos localmente. Transferência de arquivos, alterações de serviço e execução no dispositivo só acontecem quando você solicita e autoriza explicitamente.

## Solução de Problemas

| Problema | Possível causa | Solução |
| --- | --- | --- |
| A skill não está listada | O agente não recarregou o diretório de skills | Reinicie o agente e verifique o caminho de instalação mostrado acima |
| A cross-compilação falha | Falta Xuantie GCC 10.2.0, SG200X SDK ou `SG200X_SDK_PATH` | Use um host Linux/WSL2 e execute novamente a verificação de ambiente |
| A conversão de modelo falha | TPU-MLIR ou o pacote `onnx` está ausente, ou o contrato do modelo é incompatível | Instale as dependências opcionais e inspecione primeiro a entrada/saída do modelo |
| A implantação via SSH falha | O dispositivo não está acessível ou a senha não está definida | Verifique a conexão USB/RNDIS e defina `RECAMERA_PASSWORD` |
| O binário roda no host mas não no dispositivo | Arquitetura errada ou biblioteca C incompatível | Verifique se o ELF é riscv64 e corresponde ao sysroot SG200X |
| A visualização ao vivo não mostra detecções | A seção `live` está incompleta ou a detecção não está implementada | Corrija a demo antes de declarar sucesso; relate `placeholder` ou `degraded` de forma honesta |

## Recursos

- Repositório do [reCamera 2002 C++ Dev Toolkit](https://github.com/Seeed-Projects/recamera-2002-cpp-dev)
- [Desenvolva na reCamera com C/C++](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_c_cpp/)
- [Especificações de hardware da reCamera 2002](https://wiki.seeedstudio.com/pt-br/recamera_2002_series_hardware_and_specs/)
- [Skill de Desenvolvimento para reCamera Pro](https://wiki.seeedstudio.com/pt-br/recamera_pro_development_cpp_skill/)

## Perguntas e Respostas

### Posso usar esta skill com a reCamera Pro?

Não. Esta skill é voltada apenas para **reCamera 2002 (SG200X)**. Para reCamera Pro (RV1126B / RKNN), use a [Skill de Desenvolvimento para reCamera Pro](/pt-br/recamera_pro_development_cpp_skill/).

### Como exportar logs para solução de problemas?

Se a implantação ou a visualização ao vivo falhar, colete os logs da demo no host e os logs do dispositivo em um único arquivo compactado:

```bash
# On the host: pack the demo workspace logs and evidence
cd ~/reCamera_demo/my_live
tar -czf recamera-2002-host-logs.tar.gz logs/ evidence/ 2>/dev/null || true

# Collect device-side logs over SSH
ssh recamera@<device-ip> "dmesg > /tmp/dmesg.log; tar -czf /tmp/recamera-2002-device-logs.tar.gz -C /var/log . /tmp/dmesg.log 2>/dev/null" || true
scp recamera@<device-ip>:/tmp/recamera-2002-device-logs.tar.gz .
```

Envie os arquivos compactados junto com uma descrição do problema, o modelo do seu hardware e a versão do reCamera OS para **techsupport@seeed.io**.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
