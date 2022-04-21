# asciitable.js

![Node](https://img.shields.io/node/v/asciitable.js.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/asciitable.js.svg?style=flat-square)](https://www.npmjs.com/package/asciitable.js)
[![Travis](https://img.shields.io/travis/username/asciitable.js/master.svg?style=flat-square)](https://travis-ci.org/username/asciitable.js)
[![David](https://img.shields.io/david/username/asciitable.js.svg?style=flat-square)](https://david-dm.org/username/asciitable.js)
[![Coverage Status](https://img.shields.io/coveralls/username/asciitable.js.svg?style=flat-square)](https://coveralls.io/github/username/asciitable.js)
[![NPM](https://img.shields.io/npm/dt/asciitable.js.svg?style=flat-square)](https://www.npmjs.com/package/asciitable.js)

Generate a ASCII Table from a bidimensional array of strings

Live Test: https://jsfiddle.net/Victornpb/3j7wt2a1/show/

```
| ID |  Price   | Amount  |          Column D           | Column E  |
|————|——————————|—————————|—————————————————————————————|———————————|
|  1 | $ 100.00 |       0 | Very long text on this cell |     1     |
|  2 | $ 100.00 |      10 | Left aligned                |    123    |
|  3 | $ 100.00 |     100 |          Centered           |   12345   |
|  4 | $ 100.00 |    1000 |               Right aligned | 123456789 |
```


Source

    var m = [
        ['ID', '^Price', '^Amount', '^Column D', '^Column E'], //header
        null, //horizontal line
        ['1', '$ 100.00', '0', 'Very long text on this cell', '^1'],
        ['2', '$ 100.00', '10', '<Left aligned', '^123'],
        ['3', '$ 100.00', '100', '^Centered', '^12345'],
        ['4', '$ 100.00', '1000', '>Right aligned', '123456789'],
    ];
    
    var table = matrixToAsciiTable(m);
    
## Installation

### NPM

    npm install asciitable.js
### [Yarn](https://github.com/yarnpkg/yarn)

    yarn add asciitable.js

### CDN

    <script type="text/javascript" src="https://unpkg.com/asciitable.js/"></script>

## Packages

<!-- Output table (auto generated do not modify) -->

|                    File | Module Type | Transpiled | Source Maps |
|-------------------------|-------------|------------|-------------|
| dist/asciitable.esm.mjs |         esm |         No |          No |
|  dist/asciitable.cjs.js |         cjs |        Yes |         Yes |
|  dist/asciitable.esm.js |         esm |        Yes |         Yes |
|      dist/asciitable.js |         umd |        Yes |         Yes |

<!-- END -->

# Examples 

https://jsfiddle.net/Victornpb/3j7wt2a1/

        | ID |  Price   | Amount  |          Column D           | Column E  |
        |————|——————————|—————————|—————————————————————————————|———————————|
        |  1 | $ 100.00 |       0 | Very long text on this cell |     1     |
        |  2 | $ 100.00 |      10 | Left aligned                |    123    |
        |  3 | $ 100.00 |     100 |          Centered           |   12345   |
        |  4 | $ 100.00 |    1000 |               Right aligned | 123456789 |



        ID| Price  |Amount |         Column D          |Column E 
        --|--------|-------|---------------------------|---------
         1|$ 100.00|      0|Very long text on this cell|    1    
         2|$ 100.00|     10|Left aligned               |   123   
         3|$ 100.00|    100|         Centered          |  12345  
         4|$ 100.00|   1000|              Right aligned|123456789
         
        

        |ID| Price  |Amount |         Column D          |Column E |
        |--+--------+-------+---------------------------+---------|
        | 1|$ 100.00|      0|Very long text on this cell|    1    |
        | 2|$ 100.00|     10|Left aligned               |   123   |
        | 3|$ 100.00|    100|         Centered          |  12345  |
        | 4|$ 100.00|   1000|              Right aligned|123456789|
        
        
        
        │ ID │  Price   │ Amount  │          Column D           │ Column E  │
        │────┼──────────┼─────────┼─────────────────────────────┼───────────│
        │  1 │ $ 100.00 │       0 │ Very long text on this cell │     1     │
        │  2 │ $ 100.00 │      10 │ Left aligned                │    123    │
        │  3 │ $ 100.00 │     100 │          Centered           │   12345   │
        │  4 │ $ 100.00 │    1000 │               Right aligned │ 123456789 │
        
        
        
        ║ ID │  Price   │ Amount  │          Column D           │ Column E  ║
        ║────┼──────────┼─────────┼─────────────────────────────┼───────────║
        ║  1 │ $ 100.00 │       0 │ Very long text on this cell │     1     ║
        ║  2 │ $ 100.00 │      10 │ Left aligned                │    123    ║
        ║  3 │ $ 100.00 │     100 │          Centered           │   12345   ║
        ║  4 │ $ 100.00 │    1000 │               Right aligned │ 123456789 ║



        ID    Price     Amount             Column D             Column E  
        ──── ────────── ───────── ───────────────────────────── ───────────
          1   $ 100.00         0   Very long text on this cell       1     
          2   $ 100.00        10   Left aligned                     123    
          3   $ 100.00       100            Centered               12345   
          4   $ 100.00      1000                 Right aligned   123456789 
          
          
          
         ID    Price     Amount             Column D             Column E  

          1   $ 100.00         0   Very long text on this cell       1     
          2   $ 100.00        10   Left aligned                     123    
          3   $ 100.00       100            Centered               12345   
          4   $ 100.00      1000                 Right aligned   123456789 


        | ID '  Price   ' Amount  '          Column D           ' Column E  |
        |'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''|
        |  1 ' $ 100.00 '       0 ' Very long text on this cell '     1     |
        |  2 ' $ 100.00 '      10 ' Left aligned                '    123    |
        |  3 ' $ 100.00 '     100 '          Centered           '   12345   |
        |  4 ' $ 100.00 '    1000 '               Right aligned ' 123456789 |



         ID |  Price   | Amount  |          Column D           | Column E  
        ~~~~+~~~~~~~~~~+~~~~~~~~~+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+~~~~~~~~~~~
          1 | $ 100.00 |       0 | Very long text on this cell |     1     
          2 | $ 100.00 |      10 | Left aligned                |    123    
          3 | $ 100.00 |     100 |          Centered           |   12345   
          4 | $ 100.00 |    1000 |               Right aligned | 123456789 



        | ID |  Price   | Amount  |          Column D           | Column E  |
        |````|``````````|`````````|`````````````````````````````|```````````|
        |  1 | $ 100.00 |       0 | Very long text on this cell |     1     |
        |  2 | $ 100.00 |      10 | Left aligned                |    123    |
        |  3 | $ 100.00 |     100 |          Centered           |   12345   |
        |  4 | $ 100.00 |    1000 |               Right aligned | 123456789 |



        || ID ||  Price   || Amount  ||          Column D           || Column E  ||
        ||====||==========||=========||=============================||===========||
        ||  1 || $ 100.00 ||       0 || Very long text on this cell ||     1     ||
        ||  2 || $ 100.00 ||      10 || Left aligned                ||    123    ||
        ||  3 || $ 100.00 ||     100 ||          Centered           ||   12345   ||
        ||  4 || $ 100.00 ||    1000 ||               Right aligned || 123456789 ||



        :║[ ID ]||[  Price   ]||[ Amount  ]||[          Column D           ]||[ Column E  ]║:
        :║-=-=-=┼┼-=-=-=-=-=-=┼┼-=-=-=-=-=-┼┼-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-┼┼-=-=-=-=-=-=-║:
        :║[  1 ]||[ $ 100.00 ]||[       0 ]||[ Very long text on this cell ]||[     1     ]║:
        :║[  2 ]||[ $ 100.00 ]||[      10 ]||[ Left aligned                ]||[    123    ]║:
        :║[  3 ]||[ $ 100.00 ]||[     100 ]||[          Centered           ]||[   12345   ]║:
        :║[  4 ]||[ $ 100.00 ]||[    1000 ]||[               Right aligned ]||[ 123456789 ]║:



## Horizontal Line

You can add a horizontal line, by just adding a `null` row.

## Alignment

You can align text right, left, and center.
Just prepend the string with one of the following characters:

 - `<` to align Left
 - `>` to align Right
 - `^` to align Center
 
 Example 
 
       "<I'm aligned left"
       ">I'm aligned right"
       "^I'm centered"


# Customizations

Check out the Theme generator fiddle -> https://jsfiddle.net/Victornpb/3j7wt2a1/show/ 

## Options

It does allow a fairly amount of customization, by changing the defaults via options parameter.

Defaults:

    {
        row: {
            paddingLeft: "|", //before first column
            paddingRight: "|", //after last column
            colSeparator: "|", //between each column
            lineBreak: "\n"
        },
        cell: {
            paddingLeft: " ",
            paddingRight: " ",
            defaultAlignDir: 1 //left=-1 center=0 right=1
        },
        hr: { //horizontal line
            str: "—",
            colSeparator: "|"
        }
    }




## Dependencies

This module does not depend on anything. You can use it on a browser or node enviroment.

### Compability

It should work on anything that supports ECMAScript3 or above. Including IE6.

## Suggestions / Questions

File a [issue](https://github.com/victornpb/asciitable.js/issues) on this repository.
