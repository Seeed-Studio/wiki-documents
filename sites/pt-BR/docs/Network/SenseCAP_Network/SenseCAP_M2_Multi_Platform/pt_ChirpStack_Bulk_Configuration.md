---
description: Este wiki irá guiá-lo na criação e configuração de instâncias de dispositivos em massa no LNS local do M2 Gateway usando um script em Python.
title: Configuração em Massa do ChirpStack no M2 Gateway
keywords:
  - M2 gateway
  - LoRaWAN
  - Configuration
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /bulk_configuration_chirpstack
sku: 114992982, 114993135, 114992983, 114993088, 114992981, 114993080, 114993079
sidebar_position: 6
last_update:
  date: 6/12/2026
  author: David Du
createdAt: '2026-06-12'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/pt-br/bulk_configuration_chirpstack/
---

Este tutorial irá guiá-lo no uso de um script em Python para adicionar e ativar em lote dispositivos LoRaWAN no modo ABP (Activation By Personalization) por meio da interface gRPC na plataforma ChirpStack integrada ao gateway. Este método é ideal para cenários que exigem a implantação de um grande número de dispositivos (como nós de sensores) de uma só vez, melhorando significativamente a eficiência da configuração.

## 1. Preparação

Antes de começar, certifique-se de que você atende aos seguintes requisitos:

- Um **gateway M2 indoor** executando ChirpStack, e que você saiba o endereço IP dele.

- Você criou pelo menos uma **Application** e obteve o respectivo **Application ID**.

- Você criou um **Device Profile** (tipo ABP) e obteve o respectivo **Device Profile ID**.

- Você preparou um lote de dispositivos a serem configurados e registrou as seguintes informações para cada dispositivo:

    `dev_eui` (identificador exclusivo do dispositivo)

    `name` (nome do dispositivo, opcional)

    `description` (descrição do dispositivo, opcional)

    `dev_addr` (endereço do dispositivo)

    `nwk_s_key` (chave de sessão de rede)

    `app_s_key` (chave de sessão de aplicação)

:::note
Você é responsável por atribuir chaves aos dispositivos ABP. Certifique-se de que o `dev_addr` de cada dispositivo seja exclusivo dentro da rede e de que as chaves estejam em conformidade com a especificação LoRaWAN (uma string hexadecimal de 32 caracteres, ou seja, 16 bytes).
:::

## 2. Configurando o Ambiente

1. **Obter os Arquivos de Script**
Baixe ou crie os dois arquivos a seguir e coloque-os no mesmo diretório:

    `chirpstack-v3-bulk-deploy.py` – Script principal em Python

    `device_list.xlsx` – Arquivo Excel contendo a lista de dispositivos (a ser preenchido posteriormente)

Você também pode baixar os scripts a partir de [AQUI](https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/chirpstack-v3-bulk-deploy.py).

2. **Instalar Dependências do Python**
Este script requer Python 3.7 ou posterior e depende de `grpcio`, `openpyxl` e `chirpstack-api`. Recomendamos usar um ambiente virtual para evitar contaminar a instalação de Python do seu sistema.

**Para usuários macOS/Linux:**

```bash 
# create project directory
mkdir chirpstack-bulk-deploy && cd chirpstack-bulk-deploy

# create virtual environment
python3 -m venv .venv

# activate the virtual environment
source .venv/bin/activate

# install dependencies
pip install chirpstack-api openpyxl
```

**Para usuários Windows:**

```bash 
# create project directory
mkdir chirpstack-bulk-deploy
cd chirpstack-bulk-deploy

# create virtual environment
python -m venv .venv

# activate the virtual environment
.venv\Scripts\activate

# install dependencies
pip install chirpstack-api openpyxl
```

## 3. Preparar a Lista de Equipamentos (arquivo Excel)

Crie um arquivo chamado `device_list.xlsx` usando Excel, WPS ou LibreOffice. A primeira linha deve conter os cabeçalhos das colunas; o script usará esses cabeçalhos para identificar as colunas. Os nomes das colunas (**sensíveis a maiúsculas e minúsculas**) são os seguintes:

|dev_eui|    name|    description|    dev_addr|    nwk_s_key|    app_s_key|
|---|---|---|---|---|---|
|0016c001f0abcde1|abp-device-1|test device|02010101|2B7E151628AED2A6ABF7158809CF4F31|2B7E151628AED2A6ABF7158809CF4F41|
|...|abp-device-2|test device|...|...|...|

<br />

:::note
`dev_eui` deve ser uma string hexadecimal de 16 dígitos (por exemplo, 0101010101010101).

`nwk_s_key` e `app_s_key` devem ser strings hexadecimais de 32 dígitos (ou seja, 16 bytes).

Se o dev_eui de um dispositivo estiver vazio, o script irá pular automaticamente essa linha.

Se name ou description estiver vazio, o script preencherá com uma string vazia.
:::

## 4. Modificar a configuração do script
Abra `chirpstack-v3-bulk-deploy.py` e modifique os parâmetros de configuração no início do arquivo para corresponderem ao seu ambiente real.

```python
# ===== Configuration =====
GRPC_SERVER = "192.168.x.x:8080"   # replace with the real IP of the gateway + ChirpStack gRPC port（default 8080）
API_TOKEN = "YOUR API TOKEN"
APPLICATION_ID = "YOUR APPLICATION ID"
DEVICE_PROFILE_ID = "YOUR DEVICE PROFILE ID"
EXCEL_FILE = "device_list.xlsx"
# =================
```

**Descrição dos Parâmetros:**

- **GRPC_SERVER**: O endereço IP do gateway e a porta gRPC do ChirpStack. A porta gRPC padrão do ChirpStack é 8080. Certifique-se de que o seu computador esteja na mesma sub-rede do gateway ou tenha acesso roteável a ele.

- **API_TOKEN**: Chave de API do ChirpStack. Para obtê-la: Faça login na interface web do ChirpStack → Menu de usuário no canto superior direito → “API Keys” → Crie uma nova chave de API e atribua pelo menos as seguintes permissões: Device: create, Device: activate e Device keys: create.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/get-api.png" style={{width:900, height:'auto'}}/></div></td>

<br />

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/api-token.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **APPLICATION_ID**: O UUID da aplicação de destino. Na interface web do ChirpStack → Applications → selecione sua aplicação.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/application-id.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **DEVICE_PROFILE_ID**: O UUID do perfil de dispositivo. Caminho: Device profiles → Selecione o seu perfil ABP → Obtenha a partir da URL.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/device-profile-id.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **EXCEL_FILE**: O nome do arquivo Excel; por padrão, ele está localizado no mesmo diretório do script.

:::caution
Tokens de API possuem permissões de alto nível; não os divulgue nem os envie para repositórios públicos.
:::

## 5. Executar o script para implantação em massa

Certifique-se de que o ambiente virtual esteja ativo e de que `chirpstack-v3-bulk-deploy.py` e `device_list.xlsx` estejam no mesmo diretório e, em seguida, execute:

```bash
python3 chirpstack-v3-bulk-deploy.py
```

O processo de execução imprime logs em tempo real. Aqui está um exemplo de execução bem-sucedida:

```bash
Starting batch configuration of ABP devices...
✓ Successfully read 2 devices from device_list.xlsx
✓ Device 0101010101010101 created 
✓ Device 0101010101010101 keys configured 
✓ Device 0101010101010101 ABP activated 
----------------------------------------
✓ Device 0202020202020202 created 
✓ Device 0202020202020202 keys configured 
✓ Device 0202020202020202 ABP activated 
----------------------------------------
...
Batch configuration completed.
```

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>