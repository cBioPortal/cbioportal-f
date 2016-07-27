SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.8.0',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.10.2',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.10'
    },
    'packages': {
      'npm:babel-plugin-transform-flow-strip-types@6.8.0': {
        'map': {
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.10.2': {
        'map': {
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.11.4'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-syntax-flow@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-syntax-decorators@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      },
      'npm:babel-plugin-syntax-class-properties@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.9.2'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel',
  babelOptions: {
    'plugins': [
      'babel-plugin-transform-es2015-typeof-symbol',
      'babel-plugin-angular2-annotations',
      'babel-plugin-transform-decorators-legacy',
      'babel-plugin-transform-class-properties',
      'babel-plugin-transform-flow-strip-types'
    ]
  },
  map: {
    'iviz': 'github:zhx828/iViz@mc-jspm'
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'd3/d3': 'github:d3/d3@4.1.1',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    '@angular/common': 'npm:@angular/common@2.0.0-rc.4',
    '@angular/compiler': 'npm:@angular/compiler@2.0.0-rc.4',
    '@angular/core': 'npm:@angular/core@2.0.0-rc.4',
    '@angular/http': 'npm:@angular/http@2.0.0-rc.4',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0-rc.4',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0-rc.4',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel': 'npm:babel-core@6.11.4',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'es6-promise': 'npm:es6-promise@3.2.1',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.6',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'ui-router-ng2': 'npm:ui-router-ng2@1.0.0-alpha.5',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'vue': 'npm:vue@1.0.26',
    'zhx828/iViz': 'github:zhx828/iViz@mc-jspm',
    'zone.js': 'npm:zone.js@0.6.12'
  },
  packages: {
    'npm:babel-core@6.11.4': {
      'map': {
        'path-exists': 'npm:path-exists@1.0.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.0',
        'shebang-regex': 'npm:shebang-regex@1.0.0',
        'slash': 'npm:slash@1.0.0',
        'babel-template': 'npm:babel-template@6.9.0',
        'babel-register': 'npm:babel-register@6.9.0',
        'babel-helpers': 'npm:babel-helpers@6.8.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'json5': 'npm:json5@0.4.0',
        'private': 'npm:private@0.1.6',
        'babel-traverse': 'npm:babel-traverse@6.11.4',
        'convert-source-map': 'npm:convert-source-map@1.2.0',
        'debug': 'npm:debug@2.2.0',
        'babel-types': 'npm:babel-types@6.11.1',
        'babel-generator': 'npm:babel-generator@6.11.4',
        'minimatch': 'npm:minimatch@3.0.2',
        'babylon': 'npm:babylon@6.8.4',
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'lodash': 'npm:lodash@4.13.1',
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'github:zhx828/iViz@mc-jspm': {
      'bootstrap': 'github:twbs/bootstrap@3.3.7',
      'bootstrap-sass': 'github:twbs/bootstrap-sass@3.3.7',
      'chosen': 'github:harvesthq/chosen@1.6.1',
      'dc-js/dc.js': 'github:dc-js/dc.js@1.7.5',
      'desandro/draggabilly': 'github:desandro/draggabilly@2.1.1',
      'metafizzy/packery': 'github:metafizzy/packery@2.1.1',
      'qTip2/qTip2': 'github:qTip2/qTip2@3.0.3',
      'underscore': 'npm:underscore@1.8.3',
      'map': {
        'underscore': 'npm:underscore@1.8.3',
        'qTip2/qTip2': 'github:qTip2/qTip2@3.0.3',
        'bootstrap-sass': 'github:twbs/bootstrap-sass@3.3.7',
        'desandro/draggabilly': 'github:desandro/draggabilly@2.1.1',
        'metafizzy/packery': 'github:metafizzy/packery@2.1.1',
        'dc-js/dc.js': 'github:dc-js/dc.js@1.7.5',
        'chosen': 'github:harvesthq/chosen@1.6.1',
        'bootstrap': 'github:twbs/bootstrap@3.3.7'
      }
    },
    'npm:babel-template@6.9.0': {
      'map': {
        'babel-traverse': 'npm:babel-traverse@6.11.4',
        'babel-types': 'npm:babel-types@6.11.1',
        'babylon': 'npm:babylon@6.8.4',
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'lodash': 'npm:lodash@4.13.1'
      }
    },
    'npm:babel-register@6.9.0': {
      'map': {
        'babel-core': 'npm:babel-core@6.11.4',
        'path-exists': 'npm:path-exists@1.0.0',
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'lodash': 'npm:lodash@4.13.1',
        'home-or-tmp': 'npm:home-or-tmp@1.0.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map-support': 'npm:source-map-support@0.2.10',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:babel-helpers@6.8.0': {
      'map': {
        'babel-template': 'npm:babel-template@6.9.0',
        'babel-runtime': 'npm:babel-runtime@6.9.2'
      }
    },
    'npm:babel-traverse@6.11.4': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-types': 'npm:babel-types@6.11.1',
        'debug': 'npm:debug@2.2.0',
        'babylon': 'npm:babylon@6.8.4',
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'lodash': 'npm:lodash@4.13.1',
        'invariant': 'npm:invariant@2.2.1',
        'globals': 'npm:globals@8.18.0'
      }
    },
    'npm:babel-types@6.11.1': {
      'map': {
        'babel-traverse': 'npm:babel-traverse@6.11.4',
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'lodash': 'npm:lodash@4.13.1',
        'to-fast-properties': 'npm:to-fast-properties@1.0.2',
        'esutils': 'npm:esutils@2.0.2'
      }
    },
    'npm:babel-generator@6.11.4': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-types': 'npm:babel-types@6.11.1',
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'lodash': 'npm:lodash@4.13.1',
        'source-map': 'npm:source-map@0.5.6',
        'detect-indent': 'npm:detect-indent@3.0.1'
      }
    },
    'npm:babel-messages@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2'
      }
    },
    'npm:babel-code-frame@6.11.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'esutils': 'npm:esutils@2.0.2',
        'js-tokens': 'npm:js-tokens@2.0.0',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:babylon@6.8.4': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'npm:source-map-support@0.2.10': {
      'map': {
        'source-map': 'npm:source-map@0.1.32'
      }
    },
    'npm:minimatch@3.0.2': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:babel-runtime@6.9.2': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:home-or-tmp@1.0.0': {
      'map': {
        'os-tmpdir': 'npm:os-tmpdir@1.0.1',
        'user-home': 'npm:user-home@1.1.1'
      }
    },
    'npm:invariant@2.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:detect-indent@3.0.1': {
      'map': {
        'minimist': 'npm:minimist@1.2.0',
        'get-stdin': 'npm:get-stdin@4.0.1',
        'repeating': 'npm:repeating@1.1.3'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'has-ansi': 'npm:has-ansi@2.0.0',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:loose-envify@1.2.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@1.0.3'
      }
    },
    'npm:source-map@0.1.32': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:repeating@1.1.3': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.1'
      }
    },
    'npm:is-finite@1.0.1': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.0'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.7.1'
      }
    },
    'npm:buffer@4.7.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.6',
        'base64-js': 'npm:base64-js@1.1.2'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.4'
      }
    },
    'npm:readable-stream@2.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'isarray': 'npm:isarray@1.0.0',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'core-util-is': 'npm:core-util-is@1.0.2'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.3.0'
      }
    },
    'npm:stream-http@2.3.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.4',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    },
    'github:harvesthq/chosen@1.6.1': {
      'map': {
        'jquery': 'npm:jquery@3.1.0'
      }
    },
    'github:twbs/bootstrap@3.3.7': {
      'map': {
        'jquery': 'npm:jquery@2.2.4'
      }
    },
    'npm:vue@1.0.26': {
      'map': {
        'envify': 'npm:envify@3.4.1'
      }
    },
    'npm:envify@3.4.1': {
      'map': {
        'jstransform': 'npm:jstransform@11.0.3',
        'through': 'npm:through@2.3.8'
      }
    },
    'npm:jstransform@11.0.3': {
      'map': {
        'base62': 'npm:base62@1.1.1',
        'esprima-fb': 'npm:esprima-fb@15001.1.0-dev-harmony-fb',
        'commoner': 'npm:commoner@0.10.4',
        'source-map': 'npm:source-map@0.4.4',
        'object-assign': 'npm:object-assign@2.1.1'
      }
    },
    'npm:commoner@0.10.4': {
      'map': {
        'detective': 'npm:detective@4.3.1',
        'iconv-lite': 'npm:iconv-lite@0.4.13',
        'glob': 'npm:glob@5.0.15',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'graceful-fs': 'npm:graceful-fs@4.1.5',
        'private': 'npm:private@0.1.6',
        'q': 'npm:q@1.4.1',
        'commander': 'npm:commander@2.9.0',
        'recast': 'npm:recast@0.10.43'
      }
    },
    'npm:source-map@0.4.4': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:detective@4.3.1': {
      'map': {
        'defined': 'npm:defined@1.0.0',
        'acorn': 'npm:acorn@1.2.2'
      }
    },
    'npm:recast@0.10.43': {
      'map': {
        'esprima-fb': 'npm:esprima-fb@15001.1001.0-dev-harmony-fb',
        'source-map': 'npm:source-map@0.5.6',
        'private': 'npm:private@0.1.6',
        'ast-types': 'npm:ast-types@0.8.15'
      }
    },
    'npm:glob@5.0.15': {
      'map': {
        'minimatch': 'npm:minimatch@3.0.2',
        'path-is-absolute': 'npm:path-is-absolute@1.0.0',
        'inflight': 'npm:inflight@1.0.5',
        'once': 'npm:once@1.3.3',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:inflight@1.0.5': {
      'map': {
        'once': 'npm:once@1.3.3',
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:commander@2.9.0': {
      'map': {
        'graceful-readlink': 'npm:graceful-readlink@1.0.1'
      }
    },
    'npm:once@1.3.3': {
      'map': {
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:brace-expansion@1.1.6': {
      'map': {
        'balanced-match': 'npm:balanced-match@0.4.2',
        'concat-map': 'npm:concat-map@0.0.1'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'randombytes': 'npm:randombytes@2.0.3',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'create-hash': 'npm:create-hash@1.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'sha.js': 'npm:sha.js@2.4.5',
        'ripemd160': 'npm:ripemd160@1.0.1'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.5'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'bn.js': 'npm:bn.js@4.11.5',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.5',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.5',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.5',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'asn1.js': 'npm:asn1.js@4.8.0'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.5',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:elliptic@6.3.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'bn.js': 'npm:bn.js@4.11.5',
        'brorand': 'npm:brorand@1.0.5',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.8.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'bn.js': 'npm:bn.js@4.11.5',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    }
  }
});
