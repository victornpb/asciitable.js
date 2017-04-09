# asciitable.js
Generate a ASCII Table from a bidimensional array os strings


    var m = [
        ['^Column A', '^Column B', '^Column C', '^Column D', '^Column E'],
        null,
        ['1', '$ 100.00', '0', 'Very long text on this cell', '^1'],
        ['2', '$ 100.00', '10', '<Left aligned', '^123'],
        ['3', '$ 100.00', '1', '^Centered', '^12345'],
        ['4', '$ 100.00', '1000', '>Right aligned', '123456789'],
    ];
    
    var table = matrixToAsciiTable(m);


Will output

```
| Column A  | Column B  | Column C  |          Column D           | Column E  |
|———————————|———————————|———————————|—————————————————————————————|———————————|
|         1 |  $ 100.00 |         0 | Very long text on this cell |     1     |
|         2 |  $ 100.00 |        10 | Left aligned                |    123    |
|         3 |  $ 100.00 |         1 |          Centered           |   12345   |
|         4 |  $ 100.00 |      1000 |               Right aligned | 123456789 |
```


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


## Options

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
        hr: {
            str: "—",
            colSeparator: "|"
        }
    }
