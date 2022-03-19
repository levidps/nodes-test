import { trigger, state, transition, style, animate } from '@angular/animations';

export const slideInFromRight = trigger('slideInFromRight', [
  state('*', style({})),

  transition(':enter', [
    style({
      opacity: 0,
      webkitTransform: 'translateX(15px)',
      transform: 'translateX(15px)',
    }),

    animate(
      '.3s 500ms cubic-bezier(.25,.1,.25,1)',
      style({
        opacity: 1,
        webkitTransform: 'translateX(0px)',
        transform: 'translateX(0px)',
      }),
    ),
  ]),

  transition(':leave', [
    style({
      opacity: 1,
      webkitTransform: 'translateX(0px)',
      transform: 'translateX(0px)',
    }),

    animate(
      '.3s cubic-bezier(.25,.1,.25,1)',
      style({
        opacity: 0,
        webkitTransform: 'translateX(15px)',
        transform: 'translateX(15px)',
      }),
    ),
  ]),
]);
