import{i as h,a as y,s as k,B as v,t as L,d as E,b as o,M as S,R as w,D as C,S as M}from"./index-D5YswGzd.js";import"./phaser-6efmoyUr.js";const g=9999999,q=`
#dbg-btn{position:fixed;top:1px;right:2px;z-index:2147483000;height:13px;padding:0 5px;border:1px solid #ffe27a;border-radius:7px;background:rgba(12,29,34,.78);color:#ffe27a;font:700 9px/11px ui-monospace,Consolas,monospace;letter-spacing:.06em;cursor:pointer;opacity:.7}
#dbg-btn:hover,#dbg-btn.on{opacity:1}
#dbg-box{position:fixed;top:18px;right:3px;z-index:2147483000;width:244px;box-sizing:border-box;padding:12px;border:2px solid #ffe27a;border-radius:12px;background:rgba(12,29,34,.96);color:#fdf6d8;font:700 13px/1.35 'Nunito',system-ui,sans-serif;display:none;flex-direction:column;gap:8px;box-shadow:0 6px 24px rgba(0,0,0,.5)}
#dbg-box.open{display:flex}
#dbg-box h2{margin:0 0 2px;font-size:13px;color:#ffe27a;letter-spacing:.08em;text-transform:uppercase}
#dbg-box .state{font:600 11px/1.4 ui-monospace,Consolas,monospace;color:#b8d8c8;white-space:pre-line}
#dbg-box button{height:36px;border:0;border-radius:10px;font:800 13px 'Nunito',system-ui,sans-serif;color:#fff;cursor:pointer}
#dbg-box button:active{transform:translateY(1px)}
#dbg-box label{display:flex;align-items:center;gap:8px;min-height:30px;padding:0 4px;color:#fdf6d8;cursor:pointer;user-select:none}
#dbg-box .row{display:flex;gap:6px}
#dbg-box select{flex:1;min-width:0;height:36px;border-radius:10px;border:2px solid #ffe27a;background:#0c1d22;color:#fdf6d8;font:700 13px 'Nunito',system-ui,sans-serif;padding:0 6px}
#dbg-box .row button{flex:none;padding:0 12px}
#dbg-go{background:#8a4fd0}
#dbg-box label input{width:18px;height:18px;margin:0;accent-color:#ffe27a;cursor:pointer}
#dbg-up{background:#2f9e44}#dbg-open{background:#2b78d8}#dbg-flies{background:#e8b830;color:#3a2a00}#dbg-reset{background:#c0392b}#dbg-reset.sure{background:#7a0f0f;outline:2px solid #ffe27a}
`;function x(){const l=document.createElement("style");l.textContent=q,document.head.appendChild(l);const n=document.createElement("button");n.id="dbg-btn",n.type="button",n.textContent="DEBUG",n.setAttribute("aria-label","Debug");const t=document.createElement("div");t.id="dbg-box",t.innerHTML=`
    <h2>Debug</h2>
    <div class="state" id="dbg-state"></div>
    <label for="dbg-iap"><input id="dbg-iap" type="checkbox">Покупки (IAP)</label>
    <div class="row"><select id="dbg-biome" aria-label="Биом"></select><button id="dbg-go" type="button">Старт</button></div>
    <button id="dbg-up" type="button">Прокачать все навыки</button>
    <button id="dbg-flies" type="button">Мух: максимум</button>
    <button id="dbg-open" type="button">Разблокировать всё</button>
    <button id="dbg-reset" type="button">Сбросить всё в ноль</button>`,document.body.append(n,t);const f=t.querySelector("#dbg-state"),m=()=>{const e=o.data;f.textContent=`мух ${e.flies.toLocaleString("ru")}
рекорд ${e.best} м · забегов ${e.runs}
навыки ${Object.values(e.levels).join("/")}`},p=(e=!t.classList.contains("open"))=>{t.classList.toggle("open",e),n.classList.toggle("on",e),e&&m()},s=()=>{o.write(),location.reload()},i=t.querySelector("#dbg-iap");i.checked=y(),i.addEventListener("change",()=>{k(i.checked),location.reload()});const u=t.querySelector("#dbg-biome");let r=0;v.forEach((e,d)=>{const c=document.createElement("option");c.value=String(r+10),c.textContent=`${d+1}. ${L(`b_${e.id}`)} (${r} м)`,u.appendChild(c),r+=e.length}),t.querySelector("#dbg-go").addEventListener("click",()=>{var e,d;p(!1),(d=(e=E).startGame)==null||d.call(e,Number(u.value))}),n.addEventListener("click",()=>p()),t.querySelector("#dbg-up").addEventListener("click",()=>{for(const e of Object.keys(o.data.levels))o.data.levels[e]=S;s()}),t.querySelector("#dbg-flies").addEventListener("click",()=>{o.data.flies=g,o.data.totalFlies=Math.max(o.data.totalFlies,g),s()}),t.querySelector("#dbg-open").addEventListener("click",()=>{const e=o.data;e.best=Math.max(e.best,w),e.menuVisits=Math.max(e.menuVisits,C),e.intro.done=!0,e.race.tickets=Math.max(e.race.tickets,5),e.owned=M.map(d=>d.id),s()});const a=t.querySelector("#dbg-reset");let b=0;a.addEventListener("click",()=>{if(!b){a.classList.add("sure"),a.textContent="Точно? Нажми ещё раз",b=window.setTimeout(()=>{b=0,a.classList.remove("sure"),a.textContent="Сбросить всё в ноль"},3e3);return}o.reset(),location.reload()}),t.addEventListener("keydown",e=>e.stopPropagation())}h()&&(document.body?x():window.addEventListener("DOMContentLoaded",x));export{g as MAX_FLIES};
