import { suite } from 'playwright-test/taps'
import { KV } from '../src/index.js'
import { IDBStorageAdapter } from '../src/adapters/idb.js'
import { baseTests } from './base.js'

const kv = new KV({
  store: new IDBStorageAdapter(),
})

baseTests(kv, suite('IDB'))
