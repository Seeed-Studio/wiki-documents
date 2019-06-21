# Lua Syntax

------


## Lexical convention

variables are named with sequences of letters, underlines or numbers that begin with letters or underlines. Please do not use token that starts with combination of underline and capitalized letter, for it is how the reserved token of Lua is constructed. 

These are the reserved words of Lua, you can't use them as variables.

![lua](..\img\lua.jpg)

Caution: Lua is case sensitice. For example, 'and' is a reserved word, but 'And' and 'AND' aren't.

 When you enter a reserved word in SciTE, it will automatically turn into a blue bold black body.


## Code specification

* Code specification

  Lua does not require any delimiters between multiple statements, liek the C language semicolon (;), where line breaks also do not function as statements. Therefore the following writing is legal. 

```lua
a = 1
b = a * 2

a = 1;
b = a * 2;

a = 1; b = a * 2;
a = 1  b = a * 2
```

* Comments

  There are 2 kinds of comments in Lua:

  The first one is single line comment, like:

```lua
-- single line comment


--[[

mulitiple line comment

--]]

```

## Variables

Lua variables are divided into **global** variables and **local** variables.

You don't need to declare a global variable, once you assigned a value to the variable, the global variable is going to work in the whole file. Accessing a variable that is not initialized won't go wrong, but the outcome you;ll get is nil.

```lua
print(b)								--> nil
b = 10 
print(b)								-->10
--if you want to delete a global variable, you only need to change the value assigned to it to nil
b = nil
print(b)								--> nil 

```

Use local to declare a local variable. Different with global variable, local variable is valid only in the code block it is declared. Code block: refers to a control structure, a function body, or a chunk (the file or text string whose variable is declared).

```lua
local m = 9			

if m <= 10 then
	local m = 5						-- local variable valid within 'then' and 'end'
print(m)
end
--the result is 5

local m = 9			

if m <= 10 then
	print(m)						-- this m is the local variable declared in the start
end
--the result is 9.

```

In addition, Lua is a dynamically typed language, and you should not define a type when declaring a variable. The type of the variable is the same as the type of the currently assigned value. We can get the type information of the variable or value through the type function, and the type information will be returned as a string.

```lua
local k = 1							-- k is a local variable
print(type(k))						--> number

k = "today is Friday"				-- assign a string to k
print(type(k))						--> string

k = {1,2}							-- assign a table to k
print(type(k))						--> table

local d								-- d is local variable, it is not assigned during declaration
print(type(d))						--> nil
d = 11								-- d is assigned after
print(type(d))						--> number

h = 9								-- h is a global variable
print(type(h))						--> number
```

## Values and Types
 
There are 8 types of value in Lua:nil, boolean, number, string, userdata, function, thread, and table.

* nil

  The special type in Lua with only one possible value: nil. It's major function is to differentiate itself from other values. When a global variable is not assgined with a value, the default value is nil; assign a global variable with nil would delete the variable. Lua use nil to represent a state that is not valid.

* boolean

  This type has two optional values: false and true. But be aware that all values ​​in Lua can be used as conditions. In Lua, only when the values ​​are false and nil are considered "false", other values ​​are considered true, such as the number zero and the empty string, which is different from the C language.

* number

  Represents a real number. Due to resource limitations, the module Lua development platform provided by our company does not support fractional and floating-point number types. Currently, only integers are supported.

* string

  Refers to the sequence of characters. Lua is an 8-bit byte, so a string can contain any numeric character, including the embedded 0. This means you can store arbitrary binary data in a string. 
  
```lua
m = "abc"
n = "\97\98\99"					-- the value of "a" is 97((decimal),"b" is 98,"c" is 99
print(m,n)							--> abc  abc
print(“\09798”) 					--> a98
```

  String Like other objects, Lua automatically allocates and allocates memory. A string can contain only one letter or a book. Lua can handle long strings efficiently. 1M strings are very common in Lua. You can enclose a string of characters in single or double quotes to represent a string:

```lua
a = "hello"
b = 'world'
```

For uniform style, it is best to use one. For example, double quotes are always used to represent strings. If there is a single quotation mark between the double quotation marks, the system will automatically recognize the single quotation mark; if there are double quotation marks between the double quotation marks, the double quotation marks inside need to be distinguished by the escape character \:

```lua
print("one line\nnext line\n\"in quotes\", 'in quotes'")
--[[
the result is：
one line
next line
"in quotes", 'in quotes'
]]
```

Also remember: The strings in Lua are constant. The String.sub function and other string manipulation functions in Lua do not change the value of the string, but instead return a new string. a normal mistake is :`string.sub(s, 2, -2)`

You may think the above function will change the value of the string s. Actually it won't. If you want to modify the value of a string variable, you must assign the variable to a new string：`s = string.sub(s, 2, -2)`

* table

  table is the only data structure in Lua, Lua uses table to implement some other data structures like array, matrix, linked list, and queue which are provided by other programming languages.

  In Lua, the key of table could be any type except nil. When an element in a table is accessed by an integer subscript, it is an array. In addition, the table has no fixed size, you can dynamically add any number of elements to a table.

```lua
local t = {32,"jeep", name = "cherry"}
local p = {["name"] = "peach"}
print(t[1])							--> 32
print(t[2])							--> jeep
print(t["name"],t.name)			--> cherry  cherry
print(p["name"],p.name)			--> peach  peach
```

* function

  function is the first type of value, meaning that a function can be stored in a variable, either as a function argument or as a function's return value. This feature gives the language a lot of flexibility.

* userdata

  Userdata can store C data in Lua variables. Userdata has no predefined user data in Lua except for assignment and equality comparison. It is used to describe the application or a new type created by C.

## Expressions

Expressions in Lua include numbers, strings, unary and binary operators, and function calls. It can also be a non-traditional table construction.

* Arithmetic Expressions

  An arithmetic expression is an expression consisting of an arithmetic operator and its operands. The operand of the arithmetic operator in Lua is a real number.

  Arithmetic operator in Lua includes:

  binary operators: +-*/^(exponents)%(module)

  unary operators:   -(negative)

* Relational Expressions

  An expression consisting of a relational operator and its action object is a relational expression. The result of all relational expressions is either true or false.

  Relational operators supported by Lua are：>、<、>=、<=、==、~=。

  Few tips：

  **== and ~= could be used with any two types of value**

  if the types of two are not the same, Lua treat them as different. nil is the same as itself.

```lua
print("0" == 0)						-->false
print(nil == false)					-->false
--In particular, tables, userdata, and functions are compared by reference. In other words, they are considered equal only when they refer to the same object. For example:

a = {x=1,y=2}
b = {x=1,y=2}
c = a
print(a==c)						-->true
print(b==c)						-->false
```

Lua compares numbers by the traditional number size, comparing strings in alphabetical order, but the alphabetical order depends on the local environment.

```lua
print( 3 < 25)						-->true
print( “3” <"25")					-->false (alphabetical order!)
```

When a string or number is compared with a different type of value with >, <, >=, <=, an error is reported.

```lua
print( 3 <“25”)						--> attempt to compare number with string
print(5>=false)					-->attempt to compare boolean with number
```

* Logical Expressions

  A meaningful expression that joins relational expressions or logical quantities with logical operators is called a logical expression.

  There are 3 logical operators: and or not

  Logical operators consider false and nil to be false (false), others are true, and 0 is true.

  The operations of and and or are not necessarily true and false, but are related to its two operands.

```lua
--[[
    a and b 							-- if a is false, return a, otherwise, return b
    a or b								-- if a is true, return a, otherwise, return b
]]--

print(4 and 5)          			--> 5
print(nil and 13)        			--> nil
print(false and 13)     				--> false
print(4 or 5)            			--> 4
print(false or 5)       				--> 5
print(true and false)				--> false
print(true or false)					--> true
```

* String Connection

  String operator is .. 

  In string connection, if the operator is number, Lua will transfer the number into string.

```lua
print (“hello” .. “everyone”)			-->hello everyone
print ( 2 .. “apples”)				--> 2  apples
s = 2 .. 3
print(s , type(s))					--> 23    string
```

* Construction of Table

  The table constructor is an expression used to create and initialize a table. The simplest constructor is the empty constructor {}, which is used to create empty tables.


```lua
b = {x = 0, y = 1,"Monday", 109}
print(b[1],b[2],b.x,b.y)			-->Monday	109	0	1
```

## Function

The function has two uses:

1. Complete the specified task, in which case the function is used as a call statement. For example,

```lua
print(8*9,“star” )					--> 72  star
print(os.date())		-->07/30/14 15:17:36调用函数的时候，如果参数列表为空，必须使用()表明是函数调用
```

2. calculate and return the value, under this situation, function serves as expression in assignment statement. For example,

```lua
l = string.len(“1234567”)
print(l)								--> 7
```

* The matching of Lua function arguments and formal parameters is similar to the assignment statement. The excess is ignored and the missing part is complemented by nil.

```lua
function f(a, b)
	return a and b 
end
c = f(3)d = f(3,4)e= f(3,4,5)
print(c, d, e)						--> nil  4  4
```

* Lua function supports returning multiple result values

```lua
function foo0 () end 				-- returns no results
function foo1 () return 'a' end 		-- returns 1 result
function foo2 () return 'a','b' end	-- returns 2 results
```

1. When calling the last parameter of the expression or only one parameter, return as many values ​​as possible according to the variable number function, which is insufficient to fill the nil.

```lua
x,y = foo2() 						-- x='a', y='b'
x = foo2() 							-- x='a', 'b' is discarded
x,y,z = 10,foo2() 					-- x=10, y='a', z='b'
x,y = foo0()						-- x=nil, y=nil
x,y = foo1() 						-- x='a', y=nil
x,y,z = foo2() 						-- x='a', y='b', z=nil
```

2. Under other situation, the function call only return the first value(if no return value is nil)

```lua
x,y = foo2(), 20 					--  x='a', y=20
x,y = foo0(), 20, 30 				--  x='nil', y=20, 30 is discarded
print(foo2(), 1) 					--> a 1
print(foo2() .. "x") 					--> ax
a = {foo0(), foo2(), 4} 			-- a[1] = nil, a[2] = 'a', a[3] = 4
```

* Variable Parameter of Function

  The Lua function can accept a variable number of arguments, and the function parameter has three points (...) to indicate that the function has variable parameters. Lua puts the variable arguments of the function in a table called arg. In addition to the arguments, there is a field n in the arg table that represents the number of arguments.

  In function parameters, fixed and variable parameters can be declared together, but fixed parameters must be declared before the variable length parameter.

```lua
function test(arg1,arg2,...)
	--...
end

```

## Basic Syntax

* Assignment Statement

  The assignment statements in Lua are basically the same as other programming languages, the only difference being that Lua supports "multiple assignments".

```lua
local x,y = “test”, 12				-- “test” is assigned to x, 12 is assigned to y
```

* Local variables and blocks

  You can use local to define local variables, for example: `local a = "china" `. Local is a reserved word indicating that the variable is a local variable. Unlike global variables, the scope of a local variable is limited to the block in which it resides. The program in Lua can be the execution body of the control structure, the function execution body, or a program block.


```lua
local x =12

if x >10 then
	local x = 0
	print(“x=”,x)					-- print out result is： x = 0, but not 12
end
```

* Control statement

1. if statement

  The if statement has three structures:


  ```lua
  if condition then
    statements
  end

  if condition then
    statements
  else
    statements
  end

  if condition1 then
    statements
  elseif condition2 then
    statements
  …									-- many elseif
    statements
  end
```

2. while statement

  the syntax of while statement is： 

  ```lua
  while condition do
    statements
  end
  ```

3. for loop

  The for loop statement in the Lua programming language can repeat the specified statement, and the number of repetitions can be controlled in the for statement.

  There are two main types of for statements in the Lua programming language:

  * Numerical for loop
  * Generic for loop

Numerical for loop

 ```lua
for var=exp1,exp2,exp3 do  
    <Executive body>  
end 
 ```

var changes from exp1 to exp2, incrementing var in increments of exp3 for each change, and executing an "execution". Exp3 is optional. If not specified, the default is 1.


Generic for loop

The generic for loop loops through all the values ​​through an iterator function, similar to the foreach statement in java.

 Generic for loop syntax format in Lua programming language:

 ```lua
--print all values in a
for i,v in ipairs(a) 
    do print(v) 
end  
 ```

i is the index of array, v is the value corresponding to index. ipairs is a iterater function Lua offers, it is used to iterate array.

4. break and continue

Break breaks out of the inner loop, continue does not jump out of the loop, but will end this judgment.<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>