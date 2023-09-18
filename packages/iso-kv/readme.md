# iso-kv [![NPM Version](https://img.shields.io/npm/v/iso-kv.svg)](https://www.npmjs.com/package/iso-kv) [![License](https://img.shields.io/npm/l/iso-kv.svg)](https://github.com/hugomrdias/iso-repo/blob/main/license) [![iso-kv](https://github.com/hugomrdias/iso-repo/actions/workflows/iso-kv.yml/badge.svg)](https://github.com/hugomrdias/iso-repo/actions/workflows/iso-kv.yml)

> iso-key is a simple key-value storage with support for multiple backend adapters (localstorage, indexeddb, memory, sql, json file, etc)

## Features

- Fully typed
- TTL (time to live) for keys
- Multiple backend adapters (localstorage, indexeddb, memory, sql, json file, etc)
- Validation of keys and values using zod
- On change hooks
- Custom codecs for values
- Easy to implement new adapters
- SQL adapter uses [kysely](https://kysely.dev/)
- Works directly with [conf](https://github.com/sindresorhus/conf)

## Install

```bash
pnpm install iso-kv
```

## Todo

- [] namespacing
- [] codecs for json with buffer, dates etc

## Docs

Check <https://hugomrdias.github.io/iso-repo/modules/iso_kv.html>

## License

MIT © [Hugo Dias](http://hugodias.me)