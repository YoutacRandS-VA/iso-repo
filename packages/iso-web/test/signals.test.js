import { assert, test } from 'playwright-test/taps'
import { anySignal } from '../src/signals.js'
import delay from 'delay'

test('should abort from any signal', async (t) => {
  const controllers = Array.from({ length: 5 }).map(() => new AbortController())
  const signals = controllers.map((c) => c.signal)
  const signal = anySignal(signals)

  assert.equal(signal.aborted, false)

  controllers[0].abort()

  assert.equal(signal.aborted, true)
  assert.equal(signals[0].aborted, true)
  assert.equal(signals[1].aborted, false)
  assert.equal(signals[2].aborted, false)
})

test('should ignore non signal', async (t) => {
  const controllers = Array.from({ length: 5 }).map(() => new AbortController())
  const signals = controllers.map((c) => c.signal)
  // @ts-ignore
  const signal = anySignal([...signals, { reason: 'test' }])

  assert.equal(signal.aborted, false)

  controllers[0].abort()

  assert.equal(signal.aborted, true)
})

test('should abort only once', async (t) => {
  const controllers = Array.from({ length: 5 }).map(() => new AbortController())
  const signals = controllers.map((c) => c.signal)
  const signal = anySignal(signals)

  let count = 0
  signal.addEventListener('abort', () => {
    count++
  })

  for (const controller of controllers) {
    controller.abort()
  }

  for (const controller of controllers) {
    controller.abort()
  }

  await delay(100)

  assert.equal(count, 1)

  assert.equal(signal.aborted, true)
})

test('should abort with an AbortSignal.timeout', async (t) => {
  const controllers = Array.from({ length: 5 }).map(() => new AbortController())
  const signals = controllers.map((c) => c.signal)
  const signal = anySignal([...signals, AbortSignal.timeout(100)])

  await delay(101)

  assert.equal(signal.reason.name, 'TimeoutError')
  assert.equal(signal.aborted, true)
})

test('should abort if any signal already aborted', (t) => {
  const controllers = Array.from({ length: 5 }).map(() => new AbortController())
  const signals = controllers.map((c) => c.signal)
  const signal = anySignal([...signals, AbortSignal.abort('test')])

  assert.equal(signal.aborted, true)
})
