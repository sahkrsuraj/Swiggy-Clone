## When and why do we need lazy()?

The lazy() function is used for code splitting or dynamic bundling. This allows the bundle to split in chunks and load them on demand. When the application is huge and router are not immediately required on initial load of the application. Lazy Loading can defer their loading until required this reduce the initial bundle size and speeds up initial rendering of the application.

## What is suspense?

Suspense is a React component used in conjunction with code splitting and lazy loading. When component is asynchronously loaded with lazy loading, there might be a brief moment when the component is being loaded but there is nothing to available to render, potentially leading to errors. Suspense helps solve this issue by allowing developers to wrap asynchronous components in a Suspense component. During the loading process, Suspense renders a fallback UI provided by the developer until the component is fully loaded and ready to be rendered.

## Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

We get this error when asynchronous operation is initiated in response to synchronous event. Which means that an async operation is carried out within synchronous event or life cycle method, this is expected to be handled but as it is not handled properly React can't not determine whether the operation will complete quickly or might take some time. So it stop rendering the UI and instead displays a loading indicator.

To fix this error suspense is wrapped along with startTransition. This tells React that the async operation is not urgent and can be batched or defered if necessary thus preventing the error.

## Advantages and disadvantages of using this code splitting pattern?

Advantages of using code splitting pattern is that lazy-loading of components reduces the initial bundle size which significantly improves the initial load-time and hence user-experirnce. As the bundle sizes are small the components are loaded only when required and thus leading to faster parsing and execution of JavaScript. 

Disadvantages of using code splitting pattern is that as the app grows bundel also grows, in slower and unreliable network this might increase the load time and potential error handling is not done efficiently it might disrupt user interface. As from development perspective, codebase complexity increases and dependencies are to be managed to reduce unnecessary code bloat. State management becomes complex expecially  when components that share state are loaded asynchronously.

## When do we and why do we need suspense?

Suspense is used with code splitting or lazy loading. When component is asynchronously loaded with lazy loading, there might be a brief moment when the component is being loaded but there is nothing to available to render, potentially leading to errors. Suspense helps solve this issue by allowing developers to wrap asynchronous components in a Suspense component. During the loading process, Suspense renders a fallback UI provided by the developer until the component is fully loaded and ready to be rendered.