'use strict'

// generic
// parse url https://gist.github.com/jed/964849
const parseUrl = (function (a){return function(b,c,d){a.href=b;c={};for(d in a)if(""+a[d]===a[d])c[d]=a[d];return c}}(document.createElement("a")))

// http://stackoverflow.com/questions/6139107
const selectElementContents = el => {
  const range = document.createRange()
  range.selectNodeContents(el)

  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
}

const clearSelection = () => {
  if (document.selection) {
    document.selection.empty()
  } else if (window.getSelection) {
    window.getSelection().removeAllRanges()
  }
}

// copieur
const copieur = (src, button, a) => {
  button || (button = document.getElementById('copy-button'))
  a || (a = document.getElementById('copy-alert'))

  function whichTransitionEvent() {
    var t
    var el = document.createElement('fakeelement')
    var transitions = {
      transition:'transitionend',
      OTransition:'oTransitionEnd',
      MozTransition:'transitionend',
      WebkitTransition:'webkitTransitionEnd'
    }

    for (t in transitions) {
      if (el.style[t]) return transitions[t]
    }
  }

  var inPopState = false
  
  function removeAlert() {
    inPopState = false
    a.classList.remove('pop')
    button.classList.remove('pop')
  }

  var transition = whichTransitionEvent()
  
  if (transition) {
    a.addEventListener(transition, removeAlert)
  }

  return button.onclick = function copyOnClick() {
    if (!inPopState) {
      console.log('copyinge')
      
      inPopState = true
      a.classList.add('pop')
      button.classList.add('pop')
      
      if (!transition) {
        setTimeout(removeAlert, 1000)
      }
    }

    var success
    var focusedElement = document.activeElement

    selectElementContents(src)

    try {
      success = document.execCommand('copy')
    } catch (err) {
      success = false
    }

    clearSelection()

    if (!success) {
      prompt('Oldschool copy box for you', src.textContent)
    }

    setTimeout(function() { focusedElement.focus() }, 10);
  }
}


// taken from npm/parse-curl
const scan = (str, pattern, callback) => {
  let result = ""
  
  while (str.length > 0) {
    const match = str.match(pattern)
    
    if (match) {
      result += str.slice(0, match.index)
      result += callback(match)
      str = str.slice(match.index + match[0].length)
    } else {
      result += str
      str = ""
    }
  }
}

// wtf xdd
const splitReg = /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/

const split = line => {
  if (line === undefined) line = ""

  const words = []
  let field = ""

  scan(line, splitReg, ([ raw, word, sq, dq, escape, garbage, seperator ]) => {
    if (garbage !== undefined) throw Error("Unmatched quote")
    field += word || (sq || dq || escape).replace(/\\(?=.)/, "")
    if (seperator !== undefined) {
      words.push(field)
      field = ""
    }
  })

  if (field) {
    words.push(field)
  }

  return words
}

const rewrite = baseArgs => baseArgs.reduce((args, a) => {
  if (a.indexOf('-X') === 0) {
    args.push('-X')
    args.push(a.slice(2))
  } else {
    args.push(a)
  }

  return args
}, [])

const matchKeyValue = /: */
const matchUrl = /^https?:\/\//
const addArg = (currentValue, arg) => currentValue
  ? currentValue +'&'+ arg
  : arg
const parseCurl = s => {
  if (0 != s.indexOf('curl ')) throw Error('Missing curl keyword')
  
  let out = { method: 'GET', header: {} }
  let state = ''
  let urlParams = ''

  rewrite(split(s)).forEach(arg => {
    switch (true) {
      case matchUrl.test(arg):
        out.url = arg
        break

      case arg == '-A' || arg == '--user-agent':
        state = 'user-agent'
        break

      case arg == '-H' || arg == '--header':
        state = 'header'
        break

      case arg == '-d' || arg == '--data' || arg == '--data-ascii':
        state = 'data'
        break

      case arg == '--data-urlencode':
        state = 'url'
        break

      case arg == '-u' || arg == '--user':
        state = 'user'
        break

      case arg == '-I' || arg == '--head':
        out.method = 'HEAD'
        break

      case arg == '-X' || arg == '--request':
        state = 'method'
        break

      case arg == '-b' || arg =='--cookie':
        state = 'cookie'
        break

      case arg == '--compressed':
        out.header['Accept-Encoding'] = out.header['Accept-Encoding'] || 'deflate, gzip'
        break

      case !!arg:
        switch (state) {
          case 'header':
            const delimIndex = arg.indexOf(': ')
            out.header[arg.slice(0, delimIndex)] = arg.slice(delimIndex + 2)
            state = ''
            break
          
          case 'user-agent':
            out.header['User-Agent'] = arg
            state = ''
            break
          
          case 'url':
            urlParams = addArg(urlParams, arg)
            state = ''
            break
          
          case 'data':
            out.header['Content-Type'] = out.header['Content-Type'] || 'application/x-www-form-urlencoded'
            out.body = addArg(out.body, arg)
            state = ''
            break
          
          case 'user':
            out.header['Authorization'] = 'Basic '+ btoa(arg)
            state = ''
            break
          
          case 'method':
            out.method = arg
            state = ''
            break
          
          case 'cookie':
            out.header['Set-Cookie'] = arg
            state = ''
            break
        }
        break
    }
  })

  if (urlParams) {
    out.url = out.url + (parseUrl(out.url).search ? '&' : '?') + urlParams
  }

  return out
}

// specific code
const _id = document.getElementById.bind(document)
const _textArea = _id('input')
const _result = _id('result')
const isNotEmpty = obj => obj && Object.keys(obj).length > 0
const isObj = obj => obj.constructor === Object || !obj.constructor
const _class = (className, text) => `<span class="${className}">${text}</span>`
const _quote = (className, text) =>
  `"<span class="${className}">${JSON.stringify(text).slice(1, -1)}</span>"`
const classes = [ 'keyword', 'key', 'value', 'url' ]


classes.forEach(key => {
  _class[key] = t => _class(key, t)
  _class[key].text = t => _quote(key, t)
})

const _base = _class.keyword('fetch')

/* options :
 - Extra comma
 - referer
 - cookies
 - User-Agent
 - Connection
 - Accept(s)
 - Cache-Control + Pragma
 - always quotes
 //
 * Features
 - highlight url and url options
 - set spacer
*/

const matchLegalChars = /^[a-zA-Z$_][$_a-zA-Z0-9]+$/
const spacer = '  ' // 2 spaces, you know it
const noCase = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase())
const formatOpts = (indent, opts) => '{\n'+ Object.keys(opts).sort(noCase)
  .map(key => {
    const rawVal = opts[key]
    if (!rawVal) return
    const legalKey = matchLegalChars.test(key)
      ? _class.key(key)
      : _class.key.text(key)

    return `${indent}${legalKey}: ${isObj(rawVal)
      ? formatOpts(indent + spacer, rawVal)
      : _class.value.text(rawVal) }`
  }).filter(Boolean).join(',\n') + `\n${indent.slice(spacer.length)}}`

const formatFetch = (url, opts) => isNotEmpty(opts)
  ? `${_base}(${_class.url(JSON.stringify(url))}, ${formatOpts(spacer, opts)})`
  : `${_base}(${_class.url(JSON.stringify(url))})`

const printResult = (url, opts) => _result.innerHTML = formatFetch(url, opts)

let _prevError = ''
let _prevInput = ''
let _prevHeight = 50
let _forceResize = false

const update = () => {
  try {
    const newInput = _textArea.value
    
    if (_prevInput === newInput) return
    if (newInput.length < _prevInput.length) {
      // force resize
      _textArea.style.height = '5px'
      _forceResize = true
    }

    localStorage.save = _prevInput = newInput

    // update height
    const { scrollHeight, style } = _textArea
    if (_forceResize || scrollHeight !== _prevHeight) {
      style.height = (_prevHeight = Math.max(50, scrollHeight)) +'px'
      _forceResize = false
    }

    // update render
    const { method, header, url, body } = parseCurl(newInput)
    const opts = {}
    
    if (method !== 'GET') opts.method = method
    if (isNotEmpty(header)) opts.header = header
    if (isNotEmpty(body)) opts.body = body
    
    printResult(url, opts)
  } catch (err) {
    if (_prevError !== err.message) {
      _prevError = err.message
      
      console.error(err)
    }
    
    _result.innerHTML = `<span class="error">${err.message}</span>`
  }
}

const loop = () => update(requestAnimationFrame(loop))

_textArea.value = localStorage.save
  ? localStorage.save
  : 'curl https://kigiri.github.io/fetch/'

_result.onfocus = () => selectElementContents(_result)
window.onfocus = _textArea.onfocus = () => _textArea.select()
_textArea.onblur = _result.onblur = clearSelection

loop()

copieur(_result)