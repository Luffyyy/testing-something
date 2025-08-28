(function () {
    console.log("Running inside page context, Vue =", window.Vue);

    const mountEl = document.createElement("div");
    mountEl.id = "vue-userscript-app";
    document.body.appendChild(mountEl);
 
    const style = document.createElement("style");
    style.textContent = `
      #vue-userscript-app {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        border: 1px solid #ccc;
        padding: 10px;
        z-index: 999999;
      }
   `;
    document.head.appendChild(style);

    const { createApp, ref } = window.Vue;
    const app = createApp({
        setup() {
            const token = 'blablah';
            const ids = [62008, 61765, 61765];
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                <a
                  v-for="id of ids"
                  :href="\`https://info.braude.ac.il/yedion/fireflyweb.aspx?PRGNAME=LOOK_FOR_NOSE&ARGUMENTS=-N206538449,'-N\${window.someToken},-N\${id}\`"
                  :key="id"
                >
                    Course {{id}}
                </a>
            </div>
        `,
    });

    app.mount("#vue-userscript-app");
})();
