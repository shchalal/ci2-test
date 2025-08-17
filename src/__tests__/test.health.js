import getHealthStatus from '../health.js';

test('healthy when > 50', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  expect(getHealthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
});

test('wounded for 50..15', () => {
  expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
  expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('critical when < 15', () => {
  expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
  expect(getHealthStatus({ name: 'Маг', health: 1 })).toBe('critical');
});
