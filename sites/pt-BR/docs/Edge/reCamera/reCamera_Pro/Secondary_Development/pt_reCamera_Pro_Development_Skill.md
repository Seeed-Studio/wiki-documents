---
title: Desenvolva aplicações reCamera Pro com agentes de codificação em IA
description: Instale e use a reCamera Pro Development Skill para converter modelos ONNX, criar aplicações nativas RKNN e desenvolver fluxos de trabalho de câmera, áudio, GStreamer e RTSP por meio de conversas em linguagem natural.
keywords:
  - reCamera
  - reCamera Pro
  - agente de codificação em IA
  - Agent Skills
  - RKNN
  - RV1126B
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/cpp_skill/recamera_skill.png
slug: /recamera_pro_development_cpp_skill
sidebar_position: 3
last_update:
  date: 2026-08-14
  author: yylin
createdAt: '2026-08-14'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_development_cpp_skill/
---

# Desenvolva aplicações reCamera Pro com agentes de codificação em IA

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/cpp_skill/recamera_skill.png" alt="Fluxo de trabalho da reCamera Pro Development Skill" /></div>

## Introdução

A [reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) empacota instruções específicas da reCamera Pro, scripts, referências técnicas e um template de aplicação nativa em C++ para agentes de codificação em IA. Depois de instalá-la, você pode descrever uma aplicação em linguagem natural e deixar que o agente prepare o fluxo de trabalho de conversão de modelo e desenvolvimento nativo.

Por exemplo, você pode pedir ao agente para:

- Converter um modelo ONNX para RKNN para o NPU RV1126B
- Criar ou modificar uma aplicação nativa C/C++ com RKNN Runtime
- Capturar frames de câmera com GStreamer
- Adicionar captura de microfone ou reprodução em alto-falante
- Desenvolver um pipeline de inferência RTSP
- Inspecionar o host, o compilador cruzado, o sysroot, as bibliotecas de destino e os arquivos ELF gerados

O repositório fornece edições para OpenAI Codex, Claude Code, GitHub Copilot, Cursor e Gemini CLI. Cada edição usa o mesmo conhecimento de desenvolvimento da reCamera Pro, com instruções de instalação e invocação específicas para cada agente.

:::note
Esta skill é projetada especificamente para **reCamera Pro com o SoC RV1126B e Linux aarch64**. Ela não se destina à plataforma reCamera SG2002/riscv64.
:::

## Preparação de hardware

- Uma reCamera Pro
- Um computador Linux ou computador Windows com WSL para conversão de modelo e compilação cruzada
- Uma conexão de rede para baixar o repositório e as dependências de desenvolvimento necessárias

<div align="center">
<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>
</div>

## Ambiente de desenvolvimento suportado

A skill usa o seguinte contrato de destino ao desenvolver aplicações nativas de IA:

| Item | Configuração suportada |
| --- | --- |
| Dispositivo | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| Arquitetura de destino | Linux aarch64 |
| Formato de modelo | ONNX como entrada, RKNN como saída |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| Framework de câmera | GStreamer |
| Linguagem da aplicação nativa | C/C++ |

## Instalar a Skill

### Selecione seu agente de codificação em IA

Clone o branch que corresponde ao agente que você usa:

| Agente de codificação em IA | Branch | Diretório de skill em nível de usuário |
| --- | --- | --- |
| OpenAI Codex | `main` | `~/.agents/skills/recamera-rknn-dev` |
| Claude Code | `claude-code` | `~/.claude/skills/recamera-rknn-dev` |
| GitHub Copilot | `github-copilot` | `~/.copilot/skills/recamera-rknn-dev` |
| Cursor | `cursor` | `~/.cursor/skills/recamera-rknn-dev` |
| Gemini CLI | `gemini-cli` | `~/.gemini/skills/recamera-rknn-dev` |

### Método 1: Peça ao agente para instalá-la

Se o seu agente suportar instalar skills a partir de um repositório Git, envie a seguinte solicitação:

```text
Install the reCamera Pro development skill from:
https://github.com/Seeed-Projects/recamera-pro-development-skill.git
```

Mencione o agente que você usa para que ele selecione o branch e o diretório de instalação correspondentes.

### Método 2: Instalar manualmente

O exemplo a seguir instala a edição para OpenAI Codex:

```bash
git clone --branch main --single-branch \
  https://github.com/Seeed-Projects/recamera-pro-development-skill.git
cd recamera-pro-development-skill
./scripts/install_skill.sh
```

Para usar outro agente suportado, substitua `main` pelo nome do branch na tabela acima. O script de instalação específico do branch copia a skill para o diretório de skills em nível de usuário desse agente.

Reinicie o agente após a instalação se a skill não aparecer na sessão atual.

:::tip
Mantenha o repositório clonado. Para atualizar a skill depois, faça pull das alterações mais recentes do mesmo branch do agente e siga o README e as instruções de instalação desse branch.
:::

## Usar a Skill

Você pode mencionar explicitamente a skill no seu prompt:

```text
Use the reCamera Pro development skill to check whether my computer is ready
to cross-compile native applications for reCamera Pro.
```

Depois que a skill estiver instalada, você também pode descrever a tarefa de forma natural. O agente carregará as orientações relevantes de conversão de modelo, compilação cruzada, câmera, áudio ou streaming.

### Converter um modelo ONNX

```text
Use the reCamera Pro development skill to inspect model.onnx and convert it
to an RKNN model for RV1126B. Use representative images in calibration/images
for INT8 calibration and compare the RKNN output with the ONNX output.
```

O agente verifica o contrato de entrada e saída do modelo, configura o RKNN-Toolkit2 2.3.2 para `rv1126b` e mantém os metadados de pré-processamento e conversão junto com o modelo gerado.

:::warning
Não adivinhe o pré-processamento, a ordem de cores, a normalização ou a semântica de saída de um modelo. Forneça a fonte original do modelo e imagens de calibração representativas ao solicitar quantização INT8.
:::

### Criar uma aplicação nativa de câmera

```text
Use the reCamera Pro development skill to create a C++ application that
captures /dev/video13 with GStreamer and runs my RKNN detection model.
Cross-compile it with my reCamera Pro sysroot and inspect the resulting ELF file.
```

A skill inclui um template mínimo de aplicação com RKNN Runtime e GStreamer. O agente adapta o pré-processamento e o pós-processamento ao modelo em vez de tratar o template como um detector completo.

### Adicionar áudio ou RTSP

```text
Add microphone capture and speaker playback to my reCamera Pro application.
Check the device's ALSA configuration before changing the code.
```

```text
Create an RTSP inference application for reCamera Pro and identify the target
GStreamer dependencies required by the cross build.
```

### Diagnosticar um projeto existente

```text
Diagnose why this binary does not run on reCamera Pro. Check its architecture,
ELF interpreter, shared-library dependencies, runtime search path, and ABI
compatibility with the board sysroot.
```

## Fluxo de trabalho de desenvolvimento

O agente segue este fluxo de trabalho geral:

1. Inspecionar o host Linux ou WSL, a instalação do Conda, o compilador cruzado, o sysroot e os arquivos locais do RKNN Runtime.
2. Inspecionar o contrato do modelo ONNX e registrar sua origem, licença, layout de entrada, normalização, ordem de cores e semântica de saída.
3. Converter o modelo com RKNN-Toolkit2 2.3.2 para `rv1126b`; usar dados de calibração representativos para INT8.
4. Comparar a saída RKNN com o modelo ONNX de origem antes de integrá-lo em uma aplicação.
5. Criar ou adaptar a aplicação nativa em C/C++ e compilá-la cruzadamente contra um sysroot compatível com a reCamera Pro.
6. Verificar se o executável gerado é aarch64 e se seus caminhos de RKNN, GStreamer, libc, ABI de C++ e runtime são compatíveis com o dispositivo.
7. Preparar o executável, o modelo RKNN, o comando de execução e o contrato de entrada/saída esperado para implantação.

Por padrão, a skill cria e inspeciona artefatos localmente. A transferência de arquivos e a execução na reCamera Pro são realizadas somente quando você as solicita e autoriza explicitamente.

Por padrão, depois que o agente gera uma saída, você precisa enviá-la manualmente para o dispositivo para executá-la. O agente fornecerá o comando de execução correspondente, e a saída geralmente é um arquivo executável binário e um arquivo de modelo rknn.

## Observações importantes

- Use a API C do RKNN Runtime para aplicações nativas em C/C++. `rknn-toolkit-lite2` não é usado neste fluxo de trabalho.
- Não faça link de bibliotecas x86_64 do computador de desenvolvimento em uma aplicação de destino aarch64.
- Não alimente bytes de câmera NV12 diretamente em um modelo RGB ou BGR. O pipeline ou a aplicação deve realizar o pré-processamento exato exigido pelo modelo.
- Uma conversão de modelo bem-sucedida não garante inferência correta. Compare as saídas numéricas e o pré-processamento com o framework de origem.
- A aplicação faz link contra um RKNN Runtime compatível com a placa e usa o runtime existente do dispositivo; ela não deve substituir o RKNN Runtime instalado na reCamera Pro.

## Solução de problemas

| Problema | Possível causa | Solução |
| --- | --- | --- |
| A skill não está listada | O agente não recarregou seu diretório de skills em nível de usuário | Reinicie o agente e verifique se a skill foi instalada no diretório mostrado acima |
| A plataforma errada foi selecionada | Instruções para a reCamera SG2002/riscv64 foram misturadas na tarefa | Informe que o alvo é reCamera Pro, RV1126B e aarch64 |
| A conversão RKNN falha | A versão do Toolkit, o suporte a operadores ONNX ou o contrato de entrada do modelo é incompatível | Peça ao agente para inspecionar primeiro o modelo ONNX e usar o RKNN-Toolkit2 2.3.2 |
| A precisão em INT8 é ruim | As imagens de calibração estão ausentes ou não são representativas | Crie um conjunto de dados representativo e liste um caminho de imagem por linha |
| O executável é x86-64 | O compilador do host foi usado em vez do compilador cruzado aarch64 | Reconstrua com um compilador compatível com o alvo e o sysroot da reCamera Pro |
| O binário não consegue carregar uma biblioteca | O sysroot, o ABI ou o caminho de busca do runtime não corresponde à placa | Peça ao agente para inspecionar as dependências ELF e comparar cada biblioteca de destino com o dispositivo |
| Os frames da câmera têm cores incorretas ou resultados de inferência errados | A conversão NV12-para-RGB/BGR ou a normalização não correspondem ao modelo | Verifique novamente o contrato do modelo e torne o pré-processamento explícito |

## Recursos

- [Repositório da reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill)
- [Página do produto reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [Wiki da reCamera Pro](https://wiki.seeedstudio.com/pt-br/recamera_pro_getting_started/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
