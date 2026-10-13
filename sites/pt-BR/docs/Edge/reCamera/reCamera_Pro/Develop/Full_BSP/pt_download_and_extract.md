---
description: Baixe, verifique e extraia o pacote completo de código-fonte BSP do reCamera Pro.
title: Baixar e Extrair o Pacote de Código-Fonte
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_download
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_download/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Baixar e Extrair o Pacote de Código-Fonte

Baixe o arquivo compactado aqui: [recamera-pro-sdk-v1.0.10.tar.gz](https://seeedstudio88-my.sharepoint.com/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FreCamera%2Frecamera%2Dpro%2Dsdk%2Dv1%2E0%2E10%2Etar%2Egz&parent=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FreCamera&ga=1). Este é o pacote completo de código-fonte BSP descrito neste guia.

## Informações do Pacote

| Item | Valor |
| --- | --- |
| Nome do arquivo | `recamera-pro-sdk-v1.0.10.tar.gz` |
| Tamanho do arquivo compactado | Cerca de 3,7 GB (3.928.456.385 bytes) |
| Tamanho após extração | Cerca de 12 GB |
| Diretório de nível superior | `recamera-pro-sdk-v1.0.10/` |
| SHA-256 | `0c171f7a65ed87a7112f07eb0408b91b934f456af32d91608f961a4a21bced8a` |

> O valor SHA-256 foi calculado a partir do arquivo de distribuição real quando este Wiki foi escrito. Arquivos recompaktados ou pacotes criados com `./build.sh save` podem ter um checksum diferente; nesse caso, use o checksum do registro de release.

## Requisitos do Host

| Item | Requisito |
| --- | --- |
| Sistema operacional | Ubuntu 64 bits, 20.04 ou posterior recomendado |
| Arquitetura de CPU | x86_64 ou aarch64 |
| Espaço em disco | Pelo menos 20 GB livres na partição do SDK; 100 GB ou mais são recomendados se você mantiver múltiplos resultados de compilação |
| Memória | 16 GB ou mais recomendados; compilações paralelas de mídia e kernel podem usar bastante memória |
| Rede | Necessária na primeira execução de `setup_build_env.sh` para baixar ferramentas e dependências |

Referência medida: em um host com uma partição de SDK de 937 GB (242 GB usados), extrair o arquivo compactado de 3,7 GB para 12 GB levou cerca de 20 segundos com `pigz` paralelo em 24 núcleos. O `gzip` de thread única do sistema pode levar várias vezes mais tempo.

## Verificar o Arquivo Compactado

```bash
sha256sum recamera-pro-sdk-v1.0.10.tar.gz
```

Compare a saída com o checksum acima. Se não corresponder, o download pode ter sido truncado ou recompaktado. **Não continue.**

## Extrair o Arquivo Compactado

A extração paralela com `pigz` é recomendada:

```bash
sudo apt install -y pigz
tar -I "pigz -d -p 16" -xf recamera-pro-sdk-v1.0.10.tar.gz
```

Ou use o comando padrão:

```bash
tar -xzf recamera-pro-sdk-v1.0.10.tar.gz
```

Após a extração, confirme que os principais pontos de entrada existem. Eles são links simbólicos para `project/`:

```bash
cd recamera-pro-sdk-v1.0.10
ls -l build.sh rkflash.sh readme_cn.txt setup_build_env.sh
```

A saída esperada inclui:

```text
build.sh -> project/build.sh
rkflash.sh -> project/rkflash.sh
readme_cn.txt -> project/readme_cn.txt
```

## Precauções Importantes

- **Não extraia nem copie este pacote no Windows.** O SDK depende fortemente de links simbólicos (`build.sh`, `.BoardConfig.mk` e atalhos de PDF em `docs/`) e permissões de execução (`build.sh`, `rkflash.sh` e binários em `tools/`). Sistemas de arquivos do Windows podem perder essas informações, causando falhas de compilação ou comandos ausentes. O arquivo `readme_en.txt` incluído também destaca esse ponto.
- Se você precisar transferir o pacote entre Windows e Linux, mantenha-o como um arquivo tar e extraia-o no Linux, ou use `git` / `repo` para obtê-lo.
- Evite espaços e caracteres não ASCII no caminho de instalação. O Buildroot e alguns Makefiles não lidam bem com espaços.
- Não faça a compilação em uma partição montada com `noexec`; binários como `tools/linux/Linux_Upgrade_Tool/upgrade_tool` precisam de permissão de execução.
- O SDK extraído **não** contém `.repo/`; isto é um snapshot de código-fonte. Ignore as instruções de `repo sync` em `readme_en.txt`, pois elas não se aplicam a este pacote.

## Reparar Permissões de Execução Perdidas (Recuperação)

Se o pacote foi transferido por um ambiente que não preservou as permissões, tente:

```bash
cd recamera-pro-sdk-v1.0.10
chmod +x build.sh rkflash.sh setup_build_env.sh project/build.sh project/rkflash.sh
chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool
find . -name "*.sh" -exec chmod +x {} \;
```

Depois que os links simbólicos forem perdidos, `chmod` não pode restaurá-los; extraia novamente o arquivo tar original.

## Primeiro Passo Após a Extração

```bash
./setup_build_env.sh --check     # Check only; report missing tools without changing anything
```

Consulte [Configurar o Ambiente de Compilação](/pt-br/recamera_pro_bsp_build_environment/) para mais detalhes.

## Suporte Técnico e Discussão sobre o Produto

- Cada release do SDK é um arquivo tar separado. Extraia uma nova versão em um **diretório diferente**; não misture versões.
- Os números de configuração de placa no menu `lunch` são gerados ordenando os nomes de arquivo em `project/cfg/` e podem mudar entre releases. Registre o nome de arquivo completo da configuração na documentação e em scripts; não dependa do número do menu.
- Para migrar sua aplicação, copie todo o diretório `project/app/<your-directory>/` para o mesmo local no novo SDK e, em seguida, habilite a opção correspondente `RK_APP_xxx=y` na nova configuração de placa.

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>