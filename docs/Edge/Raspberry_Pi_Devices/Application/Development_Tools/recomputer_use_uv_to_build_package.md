---
description: This wiki will show you how to use uv to manange your python object
title: Use uv on reComputer
keywords:
  - Edge
  - RasberryPi 5
  - python
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/recomputer_r2145.webp
slug: /use_uv_to_build_package_on_recomputer
last_update:
  date: 08/21/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Use uv on reComputer

## Introduction

This wiki explains how to use the [uv](https://github.com/astral-sh/uv) on reComputer box. uv is a fast, modern, and lightweight package manager and resolver for Python. It is designed to be a drop-in replacement for traditional Python package management tools like ```pip``` and ```pip-tools```, offering significant improvements in speed, efficiency, and usability.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_speed.png" style={{width:600, height:'auto'}}/></div>

## Prepare Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Prepare software

### update the system

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Install uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Use uv

### Init the project

Here, we use `uv_test` as an example to demonstrate the usage of `uv`.
> **Note:** Please make different project name make sure it is different from any package on PyPI.

```bash
uv init uv_test --package
cd uv_test
```

Check the structure of the project

```bash
ls -la
tree
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_tree.png" style={{width:600, height:'auto'}}/></div>

### Creat a python environment

Here you can creat a python environmet

```bash
uv venv 
source .venv/bin/activate
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_environment.png" style={{width:600, height:'auto'}}/></div>

### Add dependencies

Use `numpy` to build funcation:

```bash
uv add numpy
```

### Creat funcation

Use NumPy to write an `add` function on `add.py` as an example:

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

The results are as follows:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/pytest.png" style={{width:800, height:'auto'}}/></div>

### Build the package

To build the project into a usable `.whl` file, modify the `toml` file as follow:

Build the package:

```bash
uv build
ls -a
```

The results are as follows：

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_build.png" style={{width:800, height:'auto'}}/></div>

### Test the package

Install the package as below:

```
uv pip install dist/uv_test-0.1.0-py3-none-any.whl 
```

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_install.png" style={{width:800, height:'auto'}}/></div>

Use `python` script to test the packag:

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

### Push the package to PyPi

If you don't have a PyPI account, please register an [account](https://pypi.org/account/register/) and get creat [token](https://pypi.org/manage/account/token/).

```
uv publish
```

The result is like as below, and input your token:

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_pubilsh.png" style={{width:800, height:'auto'}}/></div>

## Result

Finally, you can see your uploaded project on PyPI.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_result.png" style={{width:800, height:'auto'}}/></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
