// src/mocks/server.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Dies konfiguriert einen Request Mocking Server mit den angegebenen Request Handlern
export const server = setupServer(...handlers); // die handlers werden in den setupServer gespreaded
