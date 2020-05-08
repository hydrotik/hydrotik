# Hydrotik

## Website code for **hydrotik.github.io/hydrotik/** using:

- **Next.js** Node/React framework
- **TypesScript** Strongly typed JavaScript
- **Tailwind** CSS framework
- **Victory** Visualization framework for React
- **Lighthouse** Performance and a11y tool
- lodash, pdf-reader, moment.js, papaparse

A quick and simple POC that consists of a collection of tools for me to test out some project boilerplate.

Need Lighthouse CLI installed first:
```bash
npm install -g lighthouse
# or use yarn:
# yarn global add lighthouse
```

Then...

```bash
npm install
npm run dev
```
To deploy static site to Github pages, have a branch setup in Github such as **gh-pages** and run:
```bash
npm run build:gh-pages
```
To deploy to production which includes the API functionality push to master with the Zeit integration, or run:
```bash
npm run build:zeit
```

- ```npm run dev``` Run local instance on http://localhost:3000
- ```npm run build:zeit``` Deploy to production on Zeit
- ```npm run build:preview``` Export static site and run locally on http://localhost:3000
- ```npm run build:gh-pages``` Export static site and deploy to Github Pages
- ```npm run start``` Start local server from 'out' folder
- ```npm run test``` Run Unit Tests
- ```npm run test:watch``` Run Unit Tests and listen for changes
- ```npm run test:coverage``` Run Test Coverage in Jest
- ```npm run coverage``` Run Test Coverage using NYC
- ```npm run lighthouse:dev``` Run Lighthouse analysis on dev on http://localhost:3000
- ```npm run lighthouse:preview``` Run Lighthouse analysis on Nginix on http://localhost:3030
- ```npm run lighthouse:prod``` Run Lighthouse analysis on Github Pages
 
 ## Some To Do's
 - [ ] Implement Hapi Server with Next.js

## License

Copyright 2020 Hydrotik LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.