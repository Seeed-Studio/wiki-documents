---
description: Este wiki mostrará como usar o uv para gerenciar seus objetos Python
title: Usar uv no reComputer
keywords:
  - Edge
  - RasberryPi 5
  - python
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/recomputer_r2145.webp
slug: /use_uv_to_build_package_on_recomputer
last_update:
  date: 08/21/2025
  author: Jiahao
no_comments: false
createdAt: '2025-08-25'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/use_uv_to_build_package_on_recomputer/
---

# Usar uv no reComputer

## Introdução

Este wiki explica como usar o [uv](https://github.com/astral-sh/uv) no reComputer box. uv é um gerenciador e resolvedor de pacotes para Python rápido, moderno e leve. Ele foi projetado para ser um substituto direto para as ferramentas tradicionais de gerenciamento de pacotes Python, como ```pip``` e ```pip-tools```, oferecendo melhorias significativas em velocidade, eficiência e usabilidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_speed.png" style={{width:600, height:'auto'}}/></div>

## Preparar o hardware

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparar o software

### Atualizar o sistema

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Instalar o uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Usar o uv

### Iniciar o projeto

Aqui, usamos `uv_test` como exemplo para demonstrar o uso de `uv`.
> **Observação:** Use um nome de projeto diferente para garantir que ele seja diferente de qualquer pacote no PyPI.

```bash
uv init uv_test --package
cd uv_test
```

Verifique a estrutura do projeto

```bash
ls -la
tree
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_tree.png" style={{width:600, height:'auto'}}/></div>

### Criar um ambiente Python

Aqui você pode criar um ambiente Python

```bash
uv venv 
source .venv/bin/activate
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_environment.png" style={{width:600, height:'auto'}}/></div>

### Adicionar dependências

Use `numpy` para construir funções:

```bash
uv add numpy
```

### Criar função

Use NumPy para escrever uma função `add` em `add.py` como exemplo:

<details>
  <summary>add.py</summary>

```python
import numpy as np

def add(arr1: np.ndarray, arr2: np.ndarray) -> np.ndarray:
    """
    Adds two NumPy arrays element-wise.

    Parameters:
    arr1 (np.ndarray): The first input array.
    arr2 (np.ndarray): The second input array.

    Returns:
    np.ndarray: The element-wise sum of arr1 and arr2.

    Raises:
    ValueError: If the input arrays have different shapes and cannot be broadcasted.
    """
    # Ensure that both arrays have compatible shapes for element-wise addition
    try:
        result = np.add(arr1, arr2)
    except ValueError:
        raise ValueError("Input arrays have incompatible shapes for element-wise addition.")

    return result

if __name__ == "__main__":
    # Example usage
    arr1 = [1, 2, 3]
    arr2 = [4, 5, 6]
    print("Result of addition:", add(arr1, arr2))     

```

</details>

Os resultados são os seguintes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/pytest.png" style={{width:800, height:'auto'}}/></div>

### Build do pacote

Para construir o projeto em um arquivo `.whl` utilizável, modifique o arquivo `toml` como a seguir:

Faça o build do pacote:

```bash
uv build
ls -a
```

Os resultados são os seguintes：

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_build.png" style={{width:800, height:'auto'}}/></div>

### Testar o pacote

Instale o pacote como abaixo:

```
uv pip install dist/uv_test-0.1.0-py3-none-any.whl 
```

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_install.png" style={{width:800, height:'auto'}}/></div>

Use um script `python` para testar o pacote:

<details>
  <summary>add.py</summary>

```python
from uv_test.add import add

if __name__ == "__main__":
    arr1 = [1, 2, 3]
    arr2 = [4, 5, 6]
    print("Result of addition:", add(arr1, arr2)) 
```  

</details>

### Enviar o pacote para o PyPi

Se você não tiver uma conta no PyPI, registre uma [conta](https://pypi.org/account/register/) e crie um [token](https://pypi.org/manage/account/token/).

```
uv publish
```

O resultado é como abaixo, e insira o seu token:

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_pubilsh.png" style={{width:800, height:'auto'}}/></div>

## Resultado

Por fim, você poderá ver o seu projeto enviado no PyPI.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_result.png" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
