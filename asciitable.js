/**
 * Create a ASCII table based on a bi-dimensional array of strings
 * @param  {Array}   m bi-dimensional array of strings
 * @return {string}     The final ASCII table
 * @author Victor N. wwww.victorborges.com
 * @date   2016-12-28
 */
function matrixToAsciiTable(m, options) {

    options = defaults({
        row: {
            paddingLeft: "|", //before first column
            paddingRight: "|", //after last column
            colSeparator: "|", //between each column
            lineBreak: "\n"
        },
        cell: {
            paddingLeft: "",
            paddingRight: "",
            defaultAlignDir: 1 //left=-1 center=0 right=1
        },
        hr: {
            str: "—",
            colSeparator: "|"
        }
    }, options);


    function defaults(c, b) {
        for (var a in b) {
            b.hasOwnProperty(a) && (c[a] && typeof b[a] === "object" ? defaults(c[a], b[a]) : c[a] = b[a]);
        }
        return c;
    }

    function repeatStr(width, str) {
        str = str || " ";
        var result = (width > 0) ? Array(Math.ceil(width / str.length) + 1).join(str) : "";
        return result.length > width ? result.substr(0, width) : result;
    }

    function alignText(txt, width) {
        function pad(txt, width, dir) {
            var p = width - txt.length;
            var pL = (dir > 0) ? p : (p / 2) << 0;
            var pR = (dir < 0) ? p : pL + (p - (pL * 2));
            return p > 0 ? (dir >= 0 ? Array(pL + 1).join(" ") : '') + txt + (dir <= 0 ? Array(pR + 1).join(" ") : '') : txt;
        }
        txt = "" + txt; //toString
        switch (txt.charAt(0)) {
            case '<':
                return pad(txt.substr(1), width, -1); //align left
            case '^':
                return pad(txt.substr(1), width, 0); //align center
            case '>':
                return pad(txt.substr(1), width, 1); //align right
            default:
                return pad(txt, width, options.cell.defaultAlignDir);
        }
    }

    function calcColumnsWidth(matrix) {
        //calculate columns width
        var colsWidth = [];
        rows: for (var r = 0, rLen = matrix.length; r < rLen; r++) {
            if (!matrix[r]) continue; //separator
            cols: for (var c = 0, cLen = matrix[r].length; c < cLen; c++) {
                if (!colsWidth[c]) colsWidth[c] = 0;
                colsWidth[c] = Math.max(colsWidth[c], ("" + matrix[r][c]).length);
            }
        }
        return colsWidth;
    }

    var paddingLength = options.cell.paddingLeft.length + options.cell.paddingRight.length;
    var hrSeparator = repeatStr(options.row.colSeparator.length, options.hr.colSeparator || options.hr.str);
    var colsWidth = calcColumnsWidth(m);

    //create table
    var table = [];
    for (var r = 0, rLen = m.length; r < rLen; r++) {
        var cols = [];

        if (m[r]) { //create columns
            for (c = 0; c < colsWidth.length; c++) {
                cols.push(options.cell.paddingLeft + alignText(m[r][c], colsWidth[c]) + options.cell.paddingRight);
            }
            table.push([options.row.paddingLeft, cols.join(options.row.colSeparator), options.row.paddingRight].join(''));
        }
        else { //create horizontal line
            for (c = 0; c < colsWidth.length; c++) {
                cols.push(repeatStr(colsWidth[c] + paddingLength, options.hr.str));
            }
            table.push([options.row.paddingLeft, cols.join(hrSeparator), options.row.paddingRight].join(''));
        }
    }
    return table.join(options.row.lineBreak);
}
