# Improve Readability of Your MicroPython Code with Pylint and Black

![](https://files.seeedstudio.com/wiki/Pylint/banner.png)

When you write MicroPython codes for the [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) while using [ArduPy](https://wiki.seeedstudio.com/ArduPy/), it's better to follow some rules that are established for Python coding, so that the code can be made to look in the best quality possible. In this way, the code becomes better in readability as well. Many of these rules are included in [PEP-8](https://www.python.org/dev/peps/pep-0008/) style guide and it's good to follow them as a good coding practice. These include using explicit names and documentation for class functions, and some are syntax related as well. We can use tools such as [Pylint](https://www.pylint.org/) and [Black](https://black.readthedocs.io/en/stable/) to easily improve your codes' readability to make it comply with the basic rules. 

## What is Pylint?
[Pylint](https://www.pylint.org/) is a code analysis tool to identify basic stylistic errors in Python code and helps programmers enforce good coding style. It only checks that the code looks better and has better readability, rather than verifying that the code works or not. The coding style that Pylint applies to the code is known as PEP8. 

## Install Pylint

Installing Pylint is very simple. Once you install Pylint, it will include Pylint along with the required dependencies as well. 

### Configure and Install `Pylint` on Windows/ Mac/ Linux

- **STEP 1:** Open Command Prompt/ Terminal 

**Note:** Command Prompt on Windows and Terminal on Mac/ Linux 

- **STEP 2:** Verify that python is installed

```sh
python --version
```

- **STEP 3:** Verify that pip is installed

```sh
pip --version
```

**Note:** If you don't have Python installed, you can click [here](https://www.python.org/downloads/) to download and install Python on your computer

- **STEP 4:** Install Pylint by typing the following command

```sh
pip install pylint
```

Now you have successfully installed Pylint on your system.

## .pylintrc file

Pylint is highly configurable, having an extensive configuration file to control its errors and warnings from within your code. This configuration file is named as `.pylintrc` and you can use this file to ignore certain checks that you don't need in your code for your specific application. It is also possible to write your own plugins for adding your own checks and extending the functionality of Pylint. 

### Download .pylintrc file

You can download the `.pylintrc` file from [here](https://github.com/lakshanthad/Pylint_config/blob/main/.pylintrc) which has the suitable checks for basic MicroPython codes. Also make sure to place this file in the same folder that contains the example code that you want to check.

### Configure .pylintrc file

Once you open the `.pylintrc` file using a text editor of your choice, the section that you want to configure the most is the codes under `[MESSAGES CONTROL]`. You can disable specific checks under this section. 

**Note:** Click [here](https://pylint.readthedocs.io/en/latest/technical_reference/features.html) to learn more about these checks, and also [here](http://pylint-messages.wikidot.com/) to learn about different messages. 

By following the above documentation, you can configure your own `.pylintrc` file by adding or removing the checks that are suitable for your application.

## Run Pylint on your code

After you have installed Pylint, downloaded and configured `.pylintrc` file, now it's time to run Pylint on your Python/ MicroPython files!


- **STEP 1:** Download the example code provided [here](https://github.com/lakshanthad/Pylint_test/blob/main/pylint_test.py) and place it in the same folder as your `.pylintrc` file.

- **STEP 2:** Open Command Prompt/ Terminal and navigate to the folder containing `pylint_example.py` and `.pylintrc`.

```python
# Example
# C:\Users\user\Desktop>
```
- **STEP 3:** Run the following command 

```sh
pylint pylint_test.py
```
## Understand and resolve Pylint errors

Once you run the above command, you will be presented with an output including a series of errors, if there is any. However, before resolving any error, let's first understand the standard format of the Pylint output.

### Standard format of Pylint output 

The standard format of a Pylint output looks like below:
```sh
C:\Users\user\Desktop>pylint pylint_test.py
************* Module pylint_test
pylint_test.py 5: Trailing whitespace (trailing-whitespace)
pylint_test.py 46: Final newline missing (missing-final-newline)
pylint_test.py 26: More than one statement on a single line (multiple-statements)
pylint_test.py 3: standard import "import time" should be placed before "from arduino import grove_dht" (wrong-import-order)

------------------------------------------------------------------
Your code has been rated at 8.75/10 (previous run: 8.75/10, +0.00)
```

#### File Name 

Once you execute the command for Pylint, the first line of the output will contain the name of the file that you are running Pylint on. In the above example, it is "pylint_test". This line will begin with several asterisks, end with the text "Module" and the name of the file without the ".py" file extension. Also, if you are running Pylint on multiple files, the output will display all the files that Pylint is running on.
```sh
************* Module pylint_test
```

#### Error List 

After displaying the file name, it will display all the checks that didn't pass when running Pylint. Let's take the first error displayed on the Pylint output above and understand the standard format of a Pylint error.

The standard format of a Pylint output looks like below:
```sh
pylint_test.py 5: Trailing whitespace (trailing-whitespace)
```

A Pylint error is normally made up of the following components:
- File name: `pylint_test.py`
- Line number with the error: `5:`
- Error details: `Trailing whitespace`
- Name of the Pylint check: `(trailing-whitespace)`

The error details and the name of the Pylint check are not always similar like above. Also, sometimes the error details will tell you how to resolve the error as below:
```sh
pylint_test.py 3: standard import "import time" should be placed before "from arduino import grove_dht" (wrong-import-order)
```

#### Code Rating 

The final line of the Pylint output will display the code rating which is a rating out of 10. This line will be displayed after all the errors are displayed and after a line is formed by a series of dashes (-).

```sh
pylint_test.py 3: standard import "import time" should be placed before "from arduino import grove_dht" (wrong-import-order)

------------------------------------------------------------------
Your code has been rated at 8.75/10
```
Each and every error that Pylint finds will have a negative point and the final code rating will be a subtraction of these negative points from 10. As you fix each and every error, your code rating will increase. 

**Note:** If you have a syntax error in your code, Pylint will not display the code rating until that error is resolved

When you run Pylint multiple times, the code rating from your previous run will also be displayed and tell you how much of an increase or decrease of points is now compared to its previous run. 

```sh
Your code has been rated at 9.06/10 (previous run: 8.75/10, +0.31)
```
Now that we have understood about the Pylint output, let's proceed to resolving errors and improving the code.

### Resolve Pylint errors 

#### syntax-error 

once you run Pylint on the [example code](https://github.com/lakshanthad/Pylint_test/blob/main/pylint_test.py) included above, you will be presented with a syntax error at first. When the code has a syntax error, the Pylint output will not display the other errors in the code until the syntax error is resolved.

```sh
C:\Users\user\Desktop>pylint pylint_test.py
************* Module pylint_test
pylint_test.py 42: Missing parentheses in call to 'print'. Did you mean print("temperature:",t,"C", end ="     ")? (<unknown>, line 42) (syntax-error)
```

Here the syntax error is on `line 42` and it tells that the `print` command is missing parentheses. Here the `print` command is written in Python 2 format, but we are running Python 3. So we need to include paranthesis after the print command to resolve this error.

**Note:** Here the error detail tells you how to resolve the error as well

#### trailing-whitespace

After the syntax error is resolved, run pylint again. Then it will display an error as `trailing-whitespace`.

```sh
C:\Users\user\Desktop>pylint pylint_test.py
************* Module pylint_test
pylint_test.py 5: Trailing whitespace (trailing-whitespace)
```

This is due to the extra space after the text in line 5. Once you delete this extra space, the error will be fixed. 

#### missing-final-newline

This error is displayed if there is no new line created at the very end of the code.

```sh
pylint_test.py 46: Final newline missing (missing-final-newline)
```

To resolve this error, go to the bottom of the code and create a new line after the end of the code.

#### multiple-statements

```sh
pylint_test.py 26: More than one statement on a single line (multiple-statements)
```
If your code has multiple statements on a single line, separated by a semicolon `;`, then this error will be displayed.

```python
t = dht.temperature; h = dht.humidity
```

To resolve this error, delete the semicolon `;` and bring the second statement to a new line as follows

```python
t = dht.temperature
h = dht.humidity
```
#### wrong-import-order

```sh
pylint_test.py 3: standard import "import time" should be placed before "from arduino import grove_dht" (wrong-import-order)
```

If your code has libraries included and they are imported in the incorrect order, this error will be displayed. 

```python
from arduino import grove_dht
from machine import LCD, Sprite
import time
```
To fix this error, you can follow the instructions included inside the details. It says, the `import time` on line 3 should be placed above `from arduino import grove_dht`.

```python
import time
from arduino import grove_dht
from machine import LCD, Sprite
```

Now let's run Pylint again.

```sh
C:\Users\user\Desktop>pylint pylint_test.py

-------------------------------------------------------------------
Your code has been rated at 10.00/10 (previous run: 9.69/10, +0.31)
```

As you can see, we have successfully resolved all the errors from Pylint and got the maximum code rating as 10. 

## What is Black?

[Black](https://black.readthedocs.io/en/stable/) is a Python code formatter and it reformats the code for better code readability. By using Black, you can review code much faster.

Black can be run in two different ways.
- Check if there is any code that needs formatting 
- Reformat the code 

### Install Black

- **STEP 1:** Open Command Prompt/ Terminal 

**Note:** Command Prompt on Windows and Terminal on Mac/ Linux 

- **STEP 2:** Verify that python is installed

```sh
python --version
```

- **STEP 3:** Verify that pip is installed

```sh
pip --version
```

**Note:** If you don't have Python installed, you can click [here](https://www.python.org/downloads/) to download and install Python on your computer

- **STEP 4:** Install Black by typing the following command

```sh
pip install black
```

Now you have successfully installed Black on your system.

### Run Black

After you have installed Black, now it's time to run Black on your Python/ Micropython files!

- Open Command Prompt/ Terminal and navigate to the folder containing `pylint_example.py` that we have resolved all the Pylint errors before. 

```python
# Example
# C:\Users\user\Desktop>
```

#### Method 1 - Check if there is any code that needs formatting 

- Run the following command 

```sh
black --check --target-version=py35 .
```
**Note:** If you don't want every `.py` file to be checked by Black, you can replace `.` with the files that you want to check.

After running the above command, the output will look like below:

```sh
C:\Users\user\Desktop>black --check --target-version=py35 pylint_test.py
would reformat pylint_test.py
Oh no! 💥 💔 💥
1 file would be reformatted.
```
This tells us that the `pylint_test.py` needs to be reformatted.

#### Method 2 - Reformat the code

Let's go ahead and follow the second method to actually reformat the code by using Black.

- Run the following command

```sh
black --target-version=py35 .
```
**Note:** If you don't want every `.py` file to be reformatted by Black, you can replace `.` with the files that you want to reformat.

After running the above command, the output will look like below:

```sh
C:\Users\user\Desktop>black --target-version=py35 pylint_test.py
reformatted pylint_test.py
All done! ✨ 🍰 ✨
1 file reformatted.
```
Black has now reformatted the above file.

### Things to consider when running Black

Black is not correct always. Black will sometimes make a change that will not look good. Specially when dealing with long lists.

For example, if you have a list like below:

```python
new_list = [
    0, 1, 2, 
    3, 4, 5,   
    6, 7, 8]    
```
Black will make each element of the list on a new line as below:
 
```python
new_list = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
]   
```
However you can disable Black from reformatting certain parts of the code by adding `# fmt: off` at the beginning of the section that you don't want reformatting and `# fmt: on` if you want to enable formatting again.

```python
# fmt: off
new_list = [
    0, 1, 2, 
    3, 4, 5,   
    6, 7, 8]    
# fmt: on
```

**Note:** After running Black, it's better to run Pylint again to check whether the changes from Black are agreed by the Pylint checks. 

Start linting and reformatting your code now!

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

