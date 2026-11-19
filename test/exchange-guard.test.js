// node test/exchange-guard.test.js — exchange.html의 LOTOCO 교환 신청 확인 함수만 떼어 가짜 화면으로 5가지 경우 확인
const fs=require('fs'),h=fs.readFileSync(__dirname+'/../skin11/myshop/order/exchange.html','utf8'),a=h.indexOf('<script>/* LOTOCO: 교환 받을'),src=h.slice(a+8,h.indexOf('</script>',a));
function run(items,pending){let alerted=null,applied=0;
 const el=(vis,text='')=>({offsetWidth:vis?10:0,offsetHeight:vis?10:0,getClientRects:()=>vis?[1]:[],textContent:text});
 global.document={querySelectorAll:(sel)=>sel.endsWith('.prdBox')?items.map(v=>el(v)):pending.map(([v,t])=>el(v,t))};
 global.alert=(m)=>{alerted=m;};global.OrderApply={apply:()=>{applied++;}};
 eval(src+';global.f=lotocoExchangeApply;');const r=global.f();return {r,alerted:alerted&&alerted.slice(0,14),applied};}
console.log(JSON.stringify([run([],[]),run([false],[]),run([true],[[true,'옵션을 선택하세요']]),run([true],[[false,'옵션을 선택하세요']]),run([true],[])]));
