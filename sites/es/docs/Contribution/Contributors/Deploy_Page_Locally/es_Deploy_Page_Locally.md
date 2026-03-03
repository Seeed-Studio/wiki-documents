---
description: Desplegar la Plataforma Wiki Localmente
title: Desplegar la Plataforma Wiki Localmente
keywords:
- Contribution
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Deploy_Page_Locally
last_update:
  date: 3/14/2023
  author: Matthew
---

# Desplegar la Plataforma Wiki Localmente

### 1. Hacer Fork y Descargar el Repositorio

a. Por favor visita el [Repositorio de Github de la Plataforma Wiki de Seeed Studio](https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version) y luego haz `fork` del repositorio 'wiki-documents' en tu cuenta.

![image1](./1.jpg)

b. Descarga los archivos en tu PC local. Si no tienes `git` puedes descargarlo [aquí](https://git-scm.com/).

```
git clone {your repository}
```

![image2](./2.jpg)

### 2. Descargar node.js

Por favor descarga [node.js](https://nodejs.org/en/download/) según tu sistema operativo (Windows, Mac).

Por favor instala la versión `v20.18.1 (LTS)` de nodejs, de lo contrario pueden ocurrir errores durante el proceso de instalación.

### 3. Descargar Visual Studio Code

Por favor descarga [Visual Studio Code](https://code.visualstudio.com/Download) según tu sistema operativo (Windows, Mac).

### 4. Instalar Yarn

Abre "Visual Studio Code" y usa el siguiente comando para instalar Yarn.

```
npm install --global yarn
```

Para más información, por favor consulta [aquí](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

### 5. Instalar automáticamente las dependencias usando Yarn

```
yarn
```

Para personas que usan el sistema operativo Windows, por favor cambia "Powershell" a "Command Prompt(cmd)" y luego ejecuta `yarn`.

### 6. Construir la plataforma wiki localmente usando Yarn

```
yarn start
```

![image3](./3.jpg)

### 7. Ahora Puedes Hacer los Cambios o Agregar los Archivos

- [Pasos completos para PR](/es/full_steps_pull_request)
- [Pasos rápidos para PR](/es/quick_pull_request)
