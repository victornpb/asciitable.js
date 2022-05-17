/**
 * Create a ASCII table based on a bi-dimensional array of strings
 * @param  {Array}   m                                   bi-dimensional array of strings
 * @param  {Object}  [options]                           Options object
 * @param  {Object}  [options.row]                       Row options
 * @param  {String}  [options.row.paddingLeft="|"]       String added before the first column
 * @param  {String}  [options.row.paddingRight="|"]      String added after the last column
 * @param  {String}  [options.row.colSeparator="|"]      String added between columns
 * @param  {String}  [options.row.lineBreak="\n"]        String used to break rows
 * @param  {Object}  [options.cell]                      Cell options
 * @param  {String}  [options.cell.paddingLeft=" "]      String added before the cell content
 * @param  {String}  [options.cell.paddingRight=" "]     String added after the cell content
 * @param  {Number}  [options.cell.defaultAlignDir="-1"]  Define the default alignment when not specified (-1=left, 0=center, 1=right)
 * @param  {Object}  [options.hr]                        Horizontal Line options
 * @param  {String}  [options.hr.str="-"]                String that will be repeated to make the Horizontal Line
 * @param  {String}  [options.hr.colSeparator="|"]       String added between columns
 * @return {string}                                      The final ASCII table
 * @author github.com/victornpb
 * @date   2016-12-28
 */
export default function matrixToAsciiTable(m, options) {
  options = defaultArgs({
    row: {
      paddingLeft: '|', // before first column
      paddingRight: '|', // after last column
      colSeparator: '|', // between each column
      lineBreak: '\n'
    },
    cell: {
      paddingLeft: ' ',
      paddingRight: ' ',
      defaultAlignDir: -1 // left=-1 center=0 right=1
    },
    hr: {
      str: '-',
      colSeparator: '|'
    }
  }, options);

  function repeatStr(width, str = ' ') {
    const result = (width > 0) ? Array(Math.ceil(width / str.length) + 1).join(str) : '';
    return result.length > width ? result.substr(0, width) : result;
  }

  function alignText(txt, width) {
    function pad(txt, width, dir) {
      const p = width - txt.length;
      const pL = (dir > 0) ? p : (p / 2) << 0;
      const pR = (dir < 0) ? p : pL + (p - (pL * 2));
      return p > 0 ? (dir >= 0 ? Array(pL + 1).join(' ') : '') + txt + (dir <= 0 ? Array(pR + 1).join(' ') : '') : txt;
    }
    txt = `${txt}`; // toString
    switch (txt.charAt(0)) {
    case '<':
      return pad(txt.substr(1), width, -1); // align left
    case '^':
      return pad(txt.substr(1), width, 0); // align center
    case '>':
      return pad(txt.substr(1), width, 1); // align right
    default:
      return pad(txt, width, options.cell.defaultAlignDir);
    }
  }

  function calcColumnsWidth(matrix) {
    // calculate columns width
    const colsWidth = [];
    for (let r = 0, rLen = matrix.length; r < rLen; r++) {
      if (!matrix[r]) continue; // separator
      for (let c = 0, cLen = matrix[r].length; c < cLen; c++) {
        if (!colsWidth[c]) colsWidth[c] = 0;
        colsWidth[c] = Math.max(colsWidth[c], (`${matrix[r][c]}`).length);
      }
    }
    return colsWidth;
  }

  const paddingLength = options.cell.paddingLeft.length + options.cell.paddingRight.length;
  const hrSeparator = repeatStr(options.row.colSeparator.length, options.hr.colSeparator || options.hr.str);
  const colsWidth = calcColumnsWidth(m);

  // create table
  const table = [];
  for (let r = 0, rLen = m.length; r < rLen; r++) {
    const cols = [];

    if (m[r]) { // create columns
      for (let c = 0; c < colsWidth.length; c++) {
        cols.push(options.cell.paddingLeft + alignText(m[r][c], colsWidth[c]) + options.cell.paddingRight);
      }
      table.push([options.row.paddingLeft, cols.join(options.row.colSeparator), options.row.paddingRight].join(''));
    }
    else { // create horizontal line
      for (let c = 0; c < colsWidth.length; c++) {
        cols.push(repeatStr(colsWidth[c] + paddingLength, options.hr.str));
      }
      table.push([options.row.paddingLeft, cols.join(hrSeparator), options.row.paddingRight].join(''));
    }
  }
  return table.join(options.row.lineBreak);
}

function defaultArgs(defaults, options) {
  function isObj(x) { return x !== null && typeof x === 'object'; }
  function hasOwn(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }

  if (isObj(options)) for (let prop in defaults) {
    if (hasOwn(defaults, prop) && hasOwn(options, prop) && options[prop] !== undefined) {
      if (isObj(defaults[prop])) defaultArgs(defaults[prop], options[prop]);
      else defaults[prop] = options[prop];
    }
  }
  return defaults;
}
