---
description: Apresenta as APIs básicas do equipamento e dos sistemas.
title: Dispositivo e Sistema
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_device-and-system
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_api_device-and-system/
---

# Dispositivo & Sistema

## Visão geral dos endpoints

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/system/device-info` | Obter número de série do dispositivo, versão do firmware, modelo da placa de sensor e da placa base |
| GET | `/system/resource-info` | Obter uso de CPU, NPU, memória e armazenamento |
| GET | `/system/time` | Obter hora do sistema, fuso horário e configuração de NTP |
| PUT | `/system/time` | Definir hora do sistema |
| GET | `/system/battery` | Obter status da bateria |
| GET | `/system/check` | Verificar se é o primeiro login |
| GET | `/system/ssh` | Consultar status de execução do SSH |
| POST | `/system/ssh` | Iniciar ou parar o SSH |
| GET | `/system/secure` | Consultar status do HTTPS |
| POST | `/system/secure` | Ativar ou desativar o HTTPS |
| GET | `/config/export` | Exportar configuração do dispositivo |
| POST | `/config/upload` | Importar configuração do dispositivo |
| POST | `/system/reboot` | Reiniciar o dispositivo |
| POST | `/system/factory-reset` | Restaurar configurações de fábrica |

## Obter informações do dispositivo

```text
GET /system/device-info
```

Resposta:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10",
  "sSensorModel": "SC850SL",
  "sBasePlateModel": "Base Board-V1.0,Expand Board-V1.0"
}
```

| Campo | Descrição |
|---|---|
| `sSerialNumber` | Número de série do dispositivo |
| `sFirmwareVersion` | Versão do firmware |
| `sSensorModel` | Modelo da placa de sensor |
| `sBasePlateModel` | Modelo da placa base |

## Obter status dos recursos do sistema

```text
GET /system/resource-info
```

Resposta:

```json
{
  "iCpuUsage": 12,
  "iNpuUsage": 69,
  "sMem": {
    "iMemTotal": 1.94,
    "iMemUsage": 33,
    "iMemUsed": 0.65
  },
  "sStorage": {
    "iStorageTotal": 11.29,
    "iStorageUsage": 37,
    "iStorageUsed": 4.22
  }
}
```

| Campo | Descrição |
|---|---|
| `iCpuUsage` | Porcentagem de uso da CPU |
| `iNpuUsage` | Porcentagem de uso da NPU |
| `sMem.iMemTotal` | Memória total |
| `sMem.iMemUsed` | Memória utilizada |
| `sMem.iMemUsage` | Porcentagem de uso da memória |
| `sStorage.iStorageTotal` | Armazenamento total |
| `sStorage.iStorageUsed` | Armazenamento utilizado |
| `sStorage.iStorageUsage` | Porcentagem de uso do armazenamento |

## Hora do sistema

### Obter hora do sistema

```text
GET /system/time
```

Resposta:

```json
{
  "sMethod": "ntp",
  "dNtpConfig": {
    "sAddress": "pool.ntp.org",
    "sPort": "123",
    "status": 0
  },
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

| Campo | Descrição |
|---|---|
| `sMethod` | Fonte de tempo, `ntp` ou `manual` |
| `dNtpConfig.sAddress` | Endereço do servidor NTP |
| `dNtpConfig.sPort` | Porta NTP |
| `dNtpConfig.status` | Status do NTP, `0` significa sucesso |
| `iTimestamp` | Timestamp Unix em segundos |
| `sTimezone` | Cidade do fuso horário |
| `sTz` | Fuso horário, por exemplo `UTC+8` |

### Definir hora do sistema

```text
PUT /system/time
```

Corpo da requisição no modo NTP:

```json
{
  "sMethod": "ntp",
  "dNtpConfig": {
    "sAddress": "pool.ntp.org",
    "sPort": "123"
  },
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

Corpo da requisição no modo manual:

```json
{
  "sMethod": "manual",
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

Resposta:

```json
{
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

## Status da bateria

```text
GET /system/battery
```

Resposta:

```json
{
  "isAttached": true,
  "displaySteps": 0,
  "totalSteps": 5,
  "isCharging": false
}
```

| Campo | Descrição |
|---|---|
| `isAttached` | Indica se uma bateria está conectada |
| `displaySteps` | Nível atual da bateria em etapas |
| `totalSteps` | Total de etapas de nível da bateria |
| `isCharging` | Indica se a bateria está carregando |

## Verificar primeiro login

```text
GET /system/check
```

Resposta:

```json
{
  "bFirst": false
}
```

`bFirst=true` indica que o dispositivo está no fluxo de primeiro login e que a senha padrão deve ser alterada.

## SSH

### Consultar status do SSH

```text
GET /system/ssh
```

Resposta:

```json
{
  "bRunning": true
}
```

### Iniciar ou parar SSH

```text
POST /system/ssh
```

Corpo da requisição:

```json
{
  "bRunning": true
}
```

| Campo | Descrição |
|---|---|
| `bRunning` | `true` para iniciar o SSH, `false` para parar |

## HTTPS

### Consultar status do HTTPS

```text
GET /system/secure
```

Resposta:

```json
{
  "sEnable": true
}
```

### Ativar ou desativar HTTPS

```text
POST /system/secure
```

Corpo da requisição:

```json
{
  "sEnable": true
}
```

Resposta:

```json
{
  "code": 0,
  "message": "Settings applied successfully"
}
```

Após ativar o HTTPS, use `https://<DEVICE_IP>` para acessos posteriores.

## Gerenciamento de configuração

### Exportar configuração

```text
GET /config/export
```

Resposta:

```json
{
  "size": 35116544,
  "url": "/download/config.tar"
}
```

| Campo | Descrição |
|---|---|
| `size` | Tamanho do arquivo de configuração |
| `url` | Caminho de download; adicione o IP do dispositivo para obter uma URL completa |

URL de download:

```text
http://<DEVICE_IP>/download/config.tar
```

### Importar configuração

```text
POST /config/upload
```

A importação da configuração substitui as configurações atuais do dispositivo. Exporte primeiro a configuração atual como backup.

## Reiniciar

```text
POST /system/reboot
```

Resposta:

```json
{
  "code": 0,
  "message": "success"
}
```

O dispositivo será reiniciado e a conexão atual será perdida. Aguarde o dispositivo voltar a ficar online antes de continuar.

## Restauração de fábrica

A restauração de fábrica requer confirmação em duas etapas.

Etapa 1:

```text
POST /system/factory-reset
```

Resposta:

```json
{
  "code": 0,
  "sConfirmToken": "adfagghvshf"
}
```

Etapa 2, envie o token de confirmação dentro do seu período de validade:

```text
POST /system/factory-reset
```

Corpo da requisição:

```json
{
  "sConfirmToken": "adfagghvshf"
}
```

Resposta:

```json
{
  "code": 0,
  "message": "success"
}
```

A restauração de fábrica apaga toda a configuração do dispositivo. Certifique-se de ter um backup antes de prosseguir.


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>