// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

import { server } from './mocks/server'
// API-Mocking vor allen Tests einrichten
beforeAll(() => server.listen())

// Setzt alle Request-Handler zurück, die wir während der Tests hinzufügen können, damit sie sich nicht auf andere Tests auswirken können
afterEach(() => server.resetHandlers())

// Säubert nach Abschluss der Tests
afterAll(() => server.close())
