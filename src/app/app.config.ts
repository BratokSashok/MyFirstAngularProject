import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(withEventReplay())
    ]
};

bootstrapApplication( AddComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routers)
  ]
}).catch((err) => console.error(err));