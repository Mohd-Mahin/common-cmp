// cosmos.global loaded before every fixture

const sheet = document.createElement("style");
sheet.innerHTML = `
@import url('https://cdn.jsdelivr.net/combine/npm/normalize.css@8.0.1,npm/nprogress@0.2.0/nprogress.min.css,npm/noty@3.2.0-beta/lib/noty.min.css,npm/noty@3.2.0-beta/lib/themes/relax.min.css');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
html { box-sizing: border-box;  }
*, *:before, *:after { box-sizing: inherit }
`;
document.body.appendChild(sheet);
