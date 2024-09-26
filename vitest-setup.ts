import jestSerializer from 'jest-serializer-vue'

// Add Snapshot Serializer
expect.addSnapshotSerializer(jestSerializer)

// Mock window.IntersectionObserver
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})