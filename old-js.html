<!DOCTYPE html>
<html>
<head>
  <title>cURL to Fetch</title>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEQAAAAAAAAERAAAAAAAAAREAAAAAAAARERAAAAAAAREREQAAAAARERERAAAAARERAREAARERERAAAAABERERAAAAAAERERAAAAAAAAAREAAAAAAAABEQAAAAAAAAERAAAAAAAAAAAAAAAAD//wAA/48AAP8HAAD/BwAA/wcAAP4DAAD8AQAA+AEAAIABAAAAIwAAAH8AAAD/AACA/wAA4P8AAOD/AADx/wAA" rel="icon" type="image/x-icon" />
  <style type="text/css">
html {
  background: #282A36;
  color: #6272A4;
  font-family: monospace;
}

#copy-alert {
  width: 120px;
  text-align: center;
  margin: 0px auto;
  transform: translateY(-40px);
  opacity: 0;
  animation-duration: 1s;
}

#copy-alert.pop {
  animation-name: slidein;
}

#copy-button {
  cursor: pointer;
  color: #FF79C6;
  background: #1c1d24;
  padding: 10px;
  width: 120px;
  text-align: center;
  margin: 0 auto;
}

#copy-button.pop {
  color: #6272A4;
}

@keyframes slidein {
  from {
    transform: translateY(10px);
    opacity: 100;
  }
  to {
    transform: translateY(-40px);
    opacity: 0;
  }
}
pre {
  width: 540px;
  color: #BFBEB8;
  margin: 0 auto 32px;
  text-shadow: 0 0 11px #2A2A33, 1px 1px 1px #141419;
}
.pop, .ui, h2 {
  cursor: default;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

body {
  padding-top: 60px;
  max-width: 960px;
  margin: 0 auto;
}

#input, #result {
  background: #1C1D24;
  border-radius: 2px;
  padding: 10px;
}

#input {
  box-sizing: border-box;
  width: 100%;
  resize: none;
  overflow: hidden;
  min-height: 50px;
  border: 0;
  color: #6272A4;
}

.error { color: #FF79C6; }
#result {
  word-break: break-all;
  white-space: pre-wrap;
  color: grey;
  outline: none;
}

textarea::selection {
  color: white;
}
::selection, #result span::selection {
  background: #9b99b7;
}

.keyword { color: #50FA7B; }
.value { color: #F1FA8C; }
.key { color: #FFB86C; }
.url { color: #66d9ef; }
.var { color: #f8f8f2;  }
.op { color: #ff79c6;  }
.keyword::selection { color: #abffc0; }
.value::selection { color: #f7fbd1; }
.key::selection { color: #ffd9b1; }
.url::selection { color: #acf2ff; }


</style>
</head>
<body>
<h2>&lt;&lt;&lt;&lt; from cURL...</h2>
<textarea tabindex=1 id="input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
<h2 style="text-align: right;">...to fetch &gt;&gt;&gt;&gt;</h2>
<pre id="error"></pre>
<div id="result" tabindex=2></div>
<div id="copy-alert">copied !</div>
<div id="copy-button" class="ui">copy</div>
<script>'use strict';
// generic
// parse url https://gist.github.com/jed/964849

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var parseUrl = function (a) {
  return function (b, c, d) {
    a.href = b;c = {};for (d in a) {
      if ("" + a[d] === a[d]) c[d] = a[d];
    }return c;
  };
}(document.createElement("a"));

// http://stackoverflow.com/questions/6139107
var selectElementContents = function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
};

var clearSelection = function clearSelection() {
  if (document.selection) {
    document.selection.empty();
  } else if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }
};

// copieur
var copieur = function copieur(src, button, a) {
  button || (button = document.getElementById('copy-button'));
  a || (a = document.getElementById('copy-alert'));

  function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t]) return transitions[t];
    }
  }
  var inPopState = false;
  function removeAlert() {
    inPopState = false;
    a.classList.remove('pop');
    button.classList.remove('pop');
  }

  var transition = whichTransitionEvent();
  if (transition) {
    a.addEventListener(transition, removeAlert);
  }

  return button.onclick = function copyOnClick() {
    if (!inPopState) {
      console.log('copyinge');
      inPopState = true;
      a.classList.add('pop');
      button.classList.add('pop');
      if (!transition) {
        setTimeout(removeAlert, 1000);
      }
    }
    var success;
    var focusedElement = document.activeElement;
    selectElementContents(src);
    try {
      success = document.execCommand('copy');
    } catch (err) {
      success = false;
    }
    clearSelection();
    if (!success) {
      prompt('Oldschool copy box for you', src.textContent);
    }
    setTimeout(function () {
      focusedElement.focus();
    }, 10);
  };
};

// adapted from npm/parse-curl
var scan = function scan(str, pattern, callback) {
  var result = "";
  while (str.length > 0) {
    var match = str.match(pattern);
    if (match) {
      result += str.slice(0, match.index);
      result += callback(match);
      str = str.slice(match.index + match[0].length);
    } else {
      result += str;
      str = "";
    }
  }
};

var splitReg = /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/;

var split = function split(line) {
  if (line === undefined) line = "";

  var words = [];
  var field = "";
  scan(line, splitReg, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 7),
        raw = _ref2[0],
        word = _ref2[1],
        sq = _ref2[2],
        dq = _ref2[3],
        escape = _ref2[4],
        garbage = _ref2[5],
        seperator = _ref2[6];

    if (garbage !== undefined) throw Error("Unmatched quote");
    field += word || (sq || dq || escape).replace(/\\(?=.)/, "");
    if (seperator !== undefined) {
      words.push(field);
      field = "";
    }
  });
  if (field) {
    words.push(field);
  }
  return words;
};

var rewrite = function rewrite(baseArgs) {
  return baseArgs.reduce(function (args, a) {
    if (a.indexOf('-X') === 0) {
      args.push('-X');
      args.push(a.slice(2));
    } else {
      args.push(a);
    }

    return args;
  }, []);
};

var matchUrl = /((^https?:\/\/)|(^(?:[0-9]{1,3}\.){3}[0-9]{1,3})|localhost)/;
var addArg = function addArg(currentValue, arg) {
  return currentValue ? currentValue + '&' + arg : arg;
};

var capitalize = function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
var forbidden = ['Accept-Charset', 'Accept-Encoding', 'Access-Control-Request-Headers', 'Access-Control-Request-Method', 'Connection', 'Content-Length', 'Cookie', 'Cookie2', 'Date', 'DNT', 'Expect', 'Host', 'Keep-Alive', 'Origin', 'Referer', 'TE', 'Trailer', 'Transfer-Encoding', 'Upgrade', 'Via'];

var parseCurl = function parseCurl(s, clean) {
  if (0 != s.indexOf('curl ')) throw Error('Missing curl keyword');
  var out = { method: 'GET', headers: {} };
  var state = '';
  var urlParams = '';
  var fallbackUrl = '';
  var formString = '';
  rewrite(split(s)).forEach(function (arg) {
    switch (true) {
      case !out.url && matchUrl.test(arg):
        out.url = arg;
        break;

      case arg == '-A' || arg == '--user-agent':
        state = 'user-agent';
        break;

      case arg == '-H' || arg == '--header':
        state = 'header';
        break;

      case arg == '-F' || arg == '--form' || arg == '--form-data':
        state = 'form';
        break;

      case arg == '--form-string':
        state = 'form-string';
        break;

      case arg == '-d' || arg == '--data' || arg == '--data-ascii' || arg == '--data-binary':
        state = 'data';
        break;

      case arg == '--data-urlencode':
        state = 'url';
        break;

      case arg == '-u' || arg == '--user':
        state = 'user';
        break;

      case arg == '-I' || arg == '--head':
        out.method = 'HEAD';
        break;

      case arg == '-X' || arg == '--request':
        state = 'method';
        break;

      case arg == '-b' || arg == '--cookie':
        state = 'cookie';
        break;

      case arg == '--compressed':
        out.headers['Accept-Encoding'] || (out.headers['Accept-Encoding'] = 'deflate, gzip');
        break;

      case !!arg:
        switch (state) {
          case 'header':
            var delimIndex = arg.indexOf(':');
            var headerKey = arg.slice(0, delimIndex).split('-').map(capitalize).join('-');

            if (headerKey === 'Cookie') {
              out.credentials = 'include';
            } else {
              out.headers[headerKey] = arg.slice(delimIndex + 1).trim();
            }
            state = '';
            break;
          case 'user-agent':
            out.headers['User-Agent'] = arg;
            state = '';
            break;
          case 'url':
            urlParams = addArg(urlParams, arg);
            state = '';
            break;
          case 'data':
          case 'data-binary':
            out.headers['Content-Type'] || (out.headers['Content-Type'] = 'application/x-www-form-urlencoded');
            out.body = state === 'data' ? addArg(out.body, arg) : out.body;
            state = '';
            break;
          case 'form-string':
            formString = arg;
            break;
          case 'form':
            out.headers['Content-Type'] || (out.headers['Content-Type'] = 'multipart/form-data');(out.formData || (out.formData = [])).push([arg.slice(0, arg.indexOf('=')), arg.slice(arg.indexOf('=') + 1)]);
            break;
          case 'user':
            out.headers['Authorization'] = 'Basic ' + btoa(arg);
            state = '';
            break;
          case 'method':
            out.method = arg;
            state = '';
            break;
          case 'cookie':
            out.headers['Set-Cookie'] = arg;
            state = '';
            break;
        }
        break;
      default:
        fallbackUrl = arg;
        break;
    }
  });

  if (urlParams) {
    out.url = out.url + (parseUrl(out.url).search ? '&' : '?') + urlParams;
  }

  var forbiddenKeys = forbidden.filter(function (key) {
    return key in out.headers;
  }).map(function (key) {
    delete out.headers[key];return key;
  });

  if (forbiddenKeys.length) {
    var msg = forbiddenKeys.length > 1 ? forbiddenKeys.join(', ') + " are forbidden headers" : forbiddenKeys + " is a forbidden header";
    console.log(msg + " in fetch, so they are skipped (see https://fetch.spec.whatwg.org/#terminology-headers)");
  }

  if (formString) {
    out.headers['Content-Type'] += '; boundary=' + formString;
  }

  if (clean) {
    // http2 pseudo header
    delete out.headers.Authority;
    delete out.headers.Scheme;
    delete out.headers.Method;
    delete out.headers.Path;
    // automaticaly added
    delete out.headers['Accept-Language'];
    delete out.headers['User-Agent'];
  }

  if (out.body && out.method.toLowerCase() === 'get') {
    out.method = 'POST';
  }

  return out;
};
// specific code
var _id = document.getElementById.bind(document);
var _textArea = _id('input');
var _result = _id('result');
var _clean = _id('clean');
var isNotEmpty = function isNotEmpty(obj) {
  return obj && Object.keys(obj).length > 0;
};
var isObj = function isObj(obj) {
  return obj.constructor === Object || !obj.constructor;
};
var _class = function _class(className, text) {
  return "<span class=\"" + className + "\">" + text + "</span>";
};
var _quote = function _quote(className, text) {
  return "\"<span class=\"" + className + "\">" + JSON.stringify(text).slice(1, -1) + "</span>\"";
};
var classes = ['keyword', 'key', 'value', 'url', 'op', 'var'];

classes.forEach(function (key) {
  _class[key] = function (t) {
    return _class(key, t);
  };
  _class[key].text = function (t) {
    return _quote(key, t);
  };
});

var _base = _class.keyword('fetch');

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
var matchLegalChars = /^[a-zA-Z$_][$_a-zA-Z0-9]+$/;
var spacer = '  '; // 2 spaces, you know it
var noCase = function noCase(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
};
var VariableSymbol = Symbol('variable');
var formatOpts = function formatOpts(indent, opts) {
  return '{\n' + Object.keys(opts).sort(noCase).map(function (key) {
    var rawVal = opts[key];
    if (!rawVal) return;
    if (rawVal[VariableSymbol]) return _class.var(spacer + rawVal[VariableSymbol]);
    var legalKey = matchLegalChars.test(key) ? _class.key(key) : _class.key.text(key);

    return "" + indent + legalKey + ": " + (isObj(rawVal) ? formatOpts(indent + spacer, rawVal) : _class.value.text(rawVal));
  }).filter(Boolean).join(',\n') + ("\n" + indent.slice(spacer.length) + "}");
};

var formatFetch = function formatFetch(url, opts) {
  return isNotEmpty(opts) ? _base + "(" + _class.url(JSON.stringify(url)) + ", " + formatOpts(spacer, opts) + ")" : _base + "(" + _class.url(JSON.stringify(url)) + ")";
};

var printResult = function printResult(url, opts, extra) {
  return _result.innerHTML = extra ? extra + '\n' + formatFetch(url, opts) : formatFetch(url, opts);
};

var _prevError = '';
var _prevInput = '';
var _prevHeight = 50;
var _forceResize = false;
var update = function update() {
  try {
    var newInput = _textArea.value + _clean.checked;
    if (_prevInput === newInput) return;
    if (newInput.length < _prevInput.length) {
      // force resize
      _textArea.style.height = '5px';
      _forceResize = true;
    }
    localStorage.save = _textArea.value;
    _prevInput = newInput;

    // update height
    var scrollHeight = _textArea.scrollHeight,
        style = _textArea.style;

    if (_forceResize || scrollHeight !== _prevHeight) {
      style.height = (_prevHeight = Math.max(50, scrollHeight)) + 'px';
      _forceResize = false;
    }

    // update render

    var _parseCurl = parseCurl(_textArea.value, _clean.checked),
        method = _parseCurl.method,
        headers = _parseCurl.headers,
        url = _parseCurl.url,
        body = _parseCurl.body,
        formData = _parseCurl.formData;

    var opts = {};
    if (method !== 'GET') opts.method = method;
    if (isNotEmpty(headers)) opts.headers = headers;
    if (isNotEmpty(body)) opts.body = body;
    if (isNotEmpty(formData)) {
      opts.body = _defineProperty({}, VariableSymbol, 'body');
      printResult(url, opts, formData.reduce(function (acc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        return "" + acc + _class.var('body') + "." + _class.keyword('append') + "(" + _class.value.text(key) + ", " + _class.value.text(value) + ")\n";
      }, _class.url('const') + " " + _class.var('body') + " " + _class.op('= new') + " " + _class.url('FormData') + "\n"));
    } else {
      printResult(url, opts);
    }
  } catch (err) {
    if (_prevError !== err.message) {
      _prevError = err.message;
      console.error(err);
    }
    _result.innerHTML = "<span class=\"error\">" + err.message + "</span>";
  }
};

var loop = function loop() {
  return update(requestAnimationFrame(loop));
};

_textArea.value = localStorage.save ? localStorage.save : 'curl https://kigiri.github.io/fetch/';

_result.onfocus = function () {
  return selectElementContents(_result);
};
window.onfocus = _textArea.onfocus = function () {
  return _textArea.select();
};
_textArea.onblur = _result.onblur = clearSelection;

loop();

copieur(_result);
</script>
</body>
</html>
