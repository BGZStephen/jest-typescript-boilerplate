afterAll(() => {
  jest.resetAllMocks(); // Resets all the mocks usage data and the mock implementation
  jest.restoreAllMocks(); // Restores the implementation of spies only to their original implementation
});

afterEach(() => {
  jest.clearAllMocks(); // Resets all the mocks usage data, not their implementation
  jest.useRealTimers(); // Resets time back to real time in case jest.useFakeTimers() was called
});
