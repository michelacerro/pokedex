(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{82:function(n,e,t){"use strict";t.r(e);var r,c,o,i,a,s,d,b,j,p,l,x,u,h,f,O,m,g,v,y,w,E,k,F,T,A,D,_,C,L,S,R,z,P,N,B,I,M,W,Y,X,G,q,H,J,V,K,Q,U,Z,$,nn,en,tn,rn,cn,on,an,sn,dn,bn,jn,pn,ln,xn,un,hn,fn=t(2),On=t.n(fn),mn=t(23),gn=t.n(mn),vn=t(6),yn=t(25),wn=t(11),En=t(7),kn=t(3),Fn=t(4),Tn=Object(Fn.a)(r||(r=Object(kn.a)(["\n    * {\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -o-user-select: none;\n        user-select: none;\n\n        -ms-overflow-style: none;\n        scrollbar-width: none; \n        ::-webkit-scrollbar {display: none;}\n\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        font-family: 'Roboto', sans-serif;\n        color: #4F4C59;\n    }\n\n\n\n    // TEXT\n    h2, h4 {text-transform: capitalize;}\n    h4 {font-size: 16px;}\n\n    h5 {\n        color: #3F61A6;\n        font-weight: bold;\n        text-align: right;\n    }\n"]))),An=Tn,Dn=t(12),_n=t.n(Dn),Cn=t(17),Ln=t(19),Sn=t(14),Rn=t(20),zn=t.n(Rn),Pn=t(16),Nn=Fn.b.div(c||(c=Object(kn.a)(["\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 20vh;\n\n    background: radial-gradient(#CAC7D9, transparent);\n"]))),Bn=Fn.b.div(o||(o=Object(kn.a)(["\n    text-align: right;\n"]))),In=Fn.b.h1(i||(i=Object(kn.a)(["\n    font-size: 11vw;\n    font-family: 'Press Start 2P', cursive;\n    color: #F2B705;\n    text-shadow: 1vw 1vw #3F61A6, -1vw 1vw #3F61A6, -1vw -1vw #3F61A6, 1vw -1vw #3F61A6,\n                1vw 0vw #3F61A6, -1vw 0vw #3F61A6, 0vw 1vw #3F61A6, 0vw -1vw #3F61A6;\n\n    @media only screen and (min-width: 800px) {font-size: 9vw;}\n"]))),Mn=Object(Fn.b)(wn.b)(a||(a=Object(kn.a)(["\n    text-decoration: none;\n    font-family: 'Press Start 2P', cursive;\n    font-size: 12px;\n    color: #4F4C59;\n    padding-right: 1vw;\n\n    span {color: #3F61A6;}\n    span:hover {color: #F2B705;}\n\n    animation: show 5s step-end;\n    @keyframes show {\n        0% {opacity: 0%;} 100% {opacity: 100%;}\n    }\n\n    @media only screen and (min-width: 800px) {font-size: 3vw;}\n"]))),Wn=function(n){return{type:"ADD_ELEMENT",data:n}},Yn=function(n){return{type:"CLOSE_FILTER",data:n}},Xn=Fn.b.div(s||(s=Object(kn.a)(["\n    position: absolute;\n    bottom: 7%;\n    left: 7%;\n\n    width: 35vw;\n    max-width: 250px;\n    height: 35vw;\n    max-height: 250px;\n    border-radius: 50%;\n    overflow: hidden;\n\n    transform-origin: center bottom;\n    animation: \n        enter 1.1s ease-in,\n        move 5s infinite 1.1s;\n\n    @keyframes enter {\n        0% {transform: translate(-50vw, -70vh) scale(0.4);}\n        95% {transform: translate(0) scale(1);}\n    }\n    @keyframes move {\n        0%, 15% {transform: rotate(0deg)}\n        18% {transform: rotate(-20deg);}\n        23% {transform: rotate(19deg);} \n        29% {transform: rotate(-15deg);}\n        36% {transform: rotate(14deg);}\n        44% {transform: rotate(-10deg);}\n        53% {transform: rotate(9deg);}\n        63% {transform: rotate(-5deg);}\n        74% {transform: rotate(4deg);}\n        86% {transform: rotate(0deg);}\n    }\n"]))),Gn=Fn.b.div(d||(d=Object(kn.a)(["\n    position: relative;\n\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    overflow: hidden;\n"]))),qn=Fn.b.div(b||(b=Object(kn.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 50%;\n    background: linear-gradient(to right, #D9436B, #73162F);\n"]))),Hn=Fn.b.div(j||(j=Object(kn.a)(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n    width: 100%;\n    height: 50%;\n    background: linear-gradient(to right, #F2F2F2, #CAC7D9);\n"]))),Jn=Fn.b.div(p||(p=Object(kn.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    width: 36%;\n    height: 36%;\n    border-radius: 50%;\n    background-color: #4F4C59;\n    transform: translate(-50%, -50%);\n"]))),Vn=Fn.b.div(l||(l=Object(kn.a)(["\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 10%;\n    transform: translateY(-50%);\n    background-color: #4F4C59;\n"]))),Kn=Fn.b.div(x||(x=Object(kn.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 22%;\n    height: 22%;\n    border-radius: 50%;\n    background: linear-gradient(to right, #F2F2F2, #CAC7D9);\n    transform: translate(-50%, -50%);\n"]))),Qn=Fn.b.div(u||(u=Object(kn.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 14%;\n    height: 14%;\n    border-radius: 50%;\n    border: 1px solid #CAC7D9;\n    transform: translate(-50%, -50%);\n"]))),Un=Fn.b.div(h||(h=Object(kn.a)(["\n    position: absolute;\n    bottom: 5%;\n    left: 7%;\n    width: 35vw;\n    max-width: 250px;\n    height: 20px;\n    background: rgb(0, 0, 0, 0.5);\n    border-radius: 50%;\n    filter: blur(15px);\n    z-index: -1;\n"]))),Zn=t(1),$n=function(){return Object(Zn.jsxs)(Zn.Fragment,{children:[Object(Zn.jsxs)(Xn,{children:[Object(Zn.jsx)(qn,{}),Object(Zn.jsx)(Hn,{}),Object(Zn.jsx)(Jn,{}),Object(Zn.jsx)(Vn,{}),Object(Zn.jsx)(Kn,{}),Object(Zn.jsx)(Qn,{})]}),Object(Zn.jsx)(Un,{})]})},ne=function(){var n=Object(vn.b)();n({type:"DELETE_LIST"}),n({type:"DELETE_TEXT"}),n({type:"DELETE_WARNING"}),n({type:"DELETE_TYPE"});var e=Object(fn.useState)([]),t=Object(Sn.a)(e,2),r=t[0],c=t[1];return Object(fn.useEffect)((function(){function n(){return(n=Object(Ln.a)(_n.a.mark((function n(){var e,t,r;return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=function(){return(r=Object(Ln.a)(_n.a.mark((function n(e){return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.forEach(function(){var n=Object(Ln.a)(_n.a.mark((function n(e){var t;return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,zn.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e.name)).catch((function(n){return alert(n)}));case 2:t=n.sent,c((function(n){return[].concat(Object(Cn.a)(n),[t.data])}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)},t=function(n){return r.apply(this,arguments)},n.next=4,zn.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151").catch((function(n){return alert(n)}));case 4:e=n.sent,t(e.data.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),n({type:"CREATE_LIST",data:r}),Object(Zn.jsxs)(Nn,{children:[Object(Zn.jsxs)(Bn,{children:[Object(Zn.jsx)(In,{children:"Pok\xe9mon"}),Object(Zn.jsx)("br",{}),Object(Zn.jsx)("br",{}),Object(Zn.jsxs)(Mn,{to:"/pokedex/pokedex",children:[Object(Zn.jsx)(Pn.b,{}),Object(Zn.jsx)(Pn.b,{}),Object(Zn.jsx)(Pn.a,{})," ",Object(Zn.jsx)("span",{children:"Pok\xe9dex"})]})]}),Object(Zn.jsx)($n,{})]})},ee=Fn.b.div(f||(f=Object(kn.a)(["\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n"]))),te=Fn.b.div(O||(O=Object(kn.a)(["\n    width: 100%;\n    padding: 10px;\n\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]))),re=t(15),ce=t(31),oe=Fn.b.button(m||(m=Object(kn.a)(["\n    position: fixed;\n    top: 15px;\n    left: 10px;\n\n    border: none;\n    background-color: transparent;\n    color: #3F61A6;\n    font-size: 25px;\n  \n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n\n    z-index: 10;\n"]))),ie=Fn.b.div(g||(g=Object(kn.a)(["\n    display: none;\n\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 300px;\n    height: 300px;\n    border-radius: 20px;\n    background-color: #F2B705;\n    border: 4px solid #3F61a6; \n\n    font-size: 25px;\n    font-family: 'Press Start 2P', cursive;\n    color: #3F61A6;\n\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),ae=Object(Fn.b)(wn.b)(v||(v=Object(kn.a)(["\n    color: inherit;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 10px;\n\n    &:hover {\n        transform: scale(1.1, 1.1);\n    }\n"]))),se=function(){var n=Object(fn.useState)(!1),e=Object(Sn.a)(n,2),t=e[0],r=e[1];return Object(Zn.jsxs)(Zn.Fragment,{children:[Object(Zn.jsx)(oe,{onClick:function(){r(!t),document.querySelector("#menu-box").style.display=t?"none":"flex"},children:t?Object(Zn.jsx)(re.c,{}):Object(Zn.jsx)(re.b,{})}),Object(Zn.jsxs)(ie,{id:"menu-box",children:[Object(Zn.jsx)(ae,{to:"/pokedex",children:"Home"}),Object(Zn.jsx)(ce.a,{}),Object(Zn.jsx)(ae,{to:"/pokedex/pokedex",children:"Pok\xe9dex"}),Object(Zn.jsx)(ce.a,{}),Object(Zn.jsx)(ae,{to:"/pokedex/my-team",children:"My Team"})]})]})},de=Fn.b.div(y||(y=Object(kn.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: ",";\n"])),(function(n){return n.justify})),be=Fn.b.button(w||(w=Object(kn.a)(["\n    --grass: #90BF2A;\n    --poison: #AE7EF2;\n    --fire: #F20519;\n    --flying: #222A59;\n    --water: #4878D9;\n    --bug: #367334;\n    --normal: #6C6F73;\n    --electric: #F2D750;\n    --ground: #A64F03;\n    --fairy: #F2AEE0;\n    --fighting: #D96F32;\n    --psychic: #F244C4;\n    --rock: #592B02;\n    --steel: #89888C;\n    --ice: #38BDF2;\n    --ghost: #73346F;\n    --dragon: #8C0F26;\n\n    background-color: var(",");\n    border-radius: 15px;\n    border: none;\n    min-height: 30px;\n    min-width: 30px;\n\n    margin: 3px;\n    padding: 10px;\n    color: #ffffff;\n    text-transform: capitalize;\n\n    &:hover, :visited {\n        transform: scale(1.05, 1.05);\n    }\n    &:focus {\n        font-weight: bold;\n    }\n\n    @media only screen and (min-width: 401px) {margin: 5px;}\n"])),(function(n){return"--"+n.type})),je=Fn.b.button(E||(E=Object(kn.a)(["\n    position: fixed;\n    top: 55px;\n    left: 10px;\n\n    border: none;\n    background-color: transparent;\n    color: #3F61A6;\n    font-size: 25px;\n\n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n"]))),pe=Fn.b.div(k||(k=Object(kn.a)(["\n    display: none;\n\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 100%;\n    height: 100%;\n    background-color: #CAC7D9;\n\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),le=Fn.b.button(F||(F=Object(kn.a)(["\n    position: fixed;\n    top: 10px;\n    left: 10px;\n\n    border: none;\n    background-color: transparent;\n    color: #3F61A6;\n    font-size: 25px;\n\n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n"]))),xe=Fn.b.p(T||(T=Object(kn.a)(["\n    font-family: 'Press Start 2P', cursive;\n    text-align: center;\n    font-size: 12px;\n\n    @media only screen and (min-width: 401px) and (max-width: 900px) {\n        font-size: 17px;\n        margin: 5px;\n    }\n    @media only screen and (min-width: 901px) {font-size: 20px;}\n    "]))),ue=Fn.b.form(A||(A=Object(kn.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 15px;\n\n    transform: scale(0.9, 0.9);\n\n    @media only screen and (min-width: 800px) {margin-bottom: 40px;}\n"]))),he=Fn.b.input(D||(D=Object(kn.a)(["\n    width: 80vw;\n    max-width: 600px;\n    height: 2em;\n\n    border: none;\n    border-radius: 20px;\n    box-shadow: 2px 2px 10px #f2f2f2;\n    background-color: rgb(255, 255, 255, 75%);\n\n    color: #4F4C59;\n    font-size: 16px;\n    padding: 15px;\n\n    &:focus {\n        outline: none;\n        background-color: rgb(255, 255, 255);\n    }\n"]))),fe=Fn.b.button(_||(_=Object(kn.a)(["\n    height: 2em;\n    margin-left: 5px;\n    border: none;\n    background-color: transparent;\n    color: #3F61A6;\n    font-size: 20px;\n\n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n"]))),Oe=Fn.b.div(C||(C=Object(kn.a)(["\n    min-width: 250px;\n    max-width: 600px;\n    width: 90vw;\n\n    transform: scale(0.9, 0.9);\n"]))),me=Fn.b.button(L||(L=Object(kn.a)(["\n    border: none;\n    background-color: transparent;\n    color: inherit;\n    font-size: 14px;\n    text-decoration: underline;\n    margin-top: 15px;\n\n    &:hover {\n        cursor: pointer;\n        color: #F2f2f2;\n    }\n"]))),ge=function(){var n=Object(vn.b)(),e=Object(fn.useState)([]),t=Object(Sn.a)(e,2),r=t[0],c=t[1];Object(fn.useEffect)((function(){function n(){return(n=Object(Ln.a)(_n.a.mark((function n(){var e;return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,zn.a.get("https://pokeapi.co/api/v2/type").catch((function(n){return alert(n)}));case 2:e=n.sent,c(e.data.results.filter((function(n){return"dark"!==n.name&&"shadow"!==n.name&&"unknown"!==n.name})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var o=Object(vn.c)((function(n){return n.listReducer.pokemon})),i=Object(fn.useState)(""),a=Object(Sn.a)(i,2),s=a[0],d=a[1],b=[],j=[],p=function(e){n({type:"DELETE_TEXT"}),n({type:"DELETE_WARNING"}),n({type:"DELETE_TYPE"}),o.map((function(n){return n.map((function(n){var t=n;return n.types.map((function(n){return n.type.name===e.target.textContent?j.push(t):""})),t}))})),n({type:"ADD_TYPE",data:j}),n(Yn(!1)),document.querySelector("#filter-box").style.display="none"};return Object(Zn.jsxs)("div",{children:[Object(Zn.jsx)(je,{onClick:function(){n({type:"OPEN_FILTER",data:!0}),document.querySelector("#filter-box").style.display="flex"},children:Object(Zn.jsx)(re.a,{})}),Object(Zn.jsxs)(pe,{id:"filter-box",children:[Object(Zn.jsx)(le,{onClick:function(){n(Yn(!1)),document.querySelector("#filter-box").style.display="none"},children:Object(Zn.jsx)(re.f,{})}),Object(Zn.jsx)(xe,{children:"Search for name"}),Object(Zn.jsxs)(ue,{onSubmit:function(e){if(e.preventDefault(),""===s.trim())return alert("Please, write something");n({type:"DELETE_TEXT"}),n({type:"DELETE_WARNING"}),n({type:"DELETE_TYPE"}),o.map((function(e){return e.map((function(e){var t=e;return e.name.includes(s)?b.push(t):n({type:"SAVE_WARNING",data:s}),t}))})),n({type:"ADD_TEXT",data:b}),d(""),n(Yn(!1)),document.querySelector("#filter-box").style.display="none"},children:[Object(Zn.jsx)(he,{type:"text",value:s,onChange:function(n){return d(n.target.value)}}),Object(Zn.jsx)(fe,{children:Object(Zn.jsx)(re.e,{})})]}),Object(Zn.jsx)(xe,{children:"Search for type"}),Object(Zn.jsx)(Oe,{children:Object(Zn.jsx)(de,{justify:"center",children:r.map((function(n){return Object(Zn.jsx)(be,{type:n.name,onClick:p,children:n.name},n.name)}))})}),Object(Zn.jsx)(me,{onClick:function(){n({type:"DELETE_TEXT"}),n({type:"DELETE_WARNING"}),n({type:"DELETE_TYPE"}),n(Yn(!1)),document.querySelector("#filter-box").style.display="none"},children:"Remove filters"})]})]})},ve=t(47),ye=Object(Fn.b)(wn.b)(S||(S=Object(kn.a)(["\n    text-decoration: none;\n    color: inherit;\n"]))),we=Fn.b.div(R||(R=Object(kn.a)(["\n    width: 200px;\n    background-color: #f2f2f2;\n    border-radius: 10px;\n    margin: 10px;\n    padding: 30px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    &:hover {transform: scale(1.05, 1.05);}\n\n"]))),Ee=Fn.b.img(z||(z=Object(kn.a)(["\n    width: 120px;\n    height: 120px;\n"]))),ke=Fn.b.div(P||(P=Object(kn.a)(["\n    padding-top: 30px;\n    width: 100%;\n"]))),Fe=Fn.b.div(N||(N=Object(kn.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    font-size: 30px;\n    color: #D9436B;\n"]))),Te=Fn.b.div(B||(B=Object(kn.a)(["\n    min-width: 70%;\n"]))),Ae=function(n){return Object(Zn.jsxs)(Te,{children:[Object(Zn.jsxs)("h5",{children:["# ",1===n.id.length?"00"+n.id:2===n.id.length?"0"+n.id:n.id]}),Object(Zn.jsx)("h2",{children:n.name})]})},De=function(n){var e=n.data,t=Object(vn.c)((function(n){return n.teamReducer.pokemon})),r=Object(fn.useState)([]),c=Object(Sn.a)(r,2),o=c[0],i=c[1];Object(fn.useEffect)((function(){i(t.map((function(n){return n.id})))}),[t]);var a=Object(vn.b)();return Object(Zn.jsx)(ye,{to:"/pokedex/pokemon/".concat(e.name),children:Object(Zn.jsxs)(we,{onClick:function(){a({type:"DELETE_ELEMENT"}),a(Wn(e))},children:[Object(Zn.jsx)(Ee,{src:e.sprites.other.dream_world.front_default,alt:e.name}),Object(Zn.jsxs)(ke,{children:[Object(Zn.jsx)(Ae,{id:e.id.toString(),name:e.name}),Object(Zn.jsx)("br",{}),Object(Zn.jsxs)(Fe,{children:[Object(Zn.jsx)(de,{children:e.types?e.types.map((function(n){return Object(Zn.jsx)(be,{type:n.type.name},n.type.name)})):Object(Zn.jsx)("div",{})}),o.includes(e.id.toString())?Object(Zn.jsx)(ve.a,{}):Object(Zn.jsx)("div",{})]})]})]})})},_e=function(){var n=Object(vn.c)((function(n){return n.listReducer.pokemon})),e=Object(vn.c)((function(n){return n.textReducer.pokemon})),t=Object(vn.c)((function(n){return n.warningReducer.warning})),r=Object(vn.c)((function(n){return n.typeReducer.pokemon})),c=Object(vn.c)((function(n){return n.filterReducer.state}));return Object(Zn.jsxs)(ee,{children:[Object(Zn.jsx)(te,{children:e.length>0?e.map((function(n){return n.map((function(n){return Object(Zn.jsx)(De,{data:n},n.id)}))})):t.length>0?Object(Zn.jsx)("div",{children:t}):r.length>0?r.map((function(n){return n.map((function(n){return Object(Zn.jsx)(De,{data:n},n.id)}))})):n.map((function(n){return n.map((function(n){return Object(Zn.jsx)(De,{data:n},n.id)}))}))}),c?Object(Zn.jsx)("div",{}):Object(Zn.jsx)(se,{}),Object(Zn.jsx)(ge,{})]})},Ce=Fn.b.div(I||(I=Object(kn.a)(["\n    display: flex;\n    align-items: center;\n"]))),Le=Fn.b.p(M||(M=Object(kn.a)(["\n    width: 170px;\n    text-transform: capitalize;\n    margin: 0 15px 5px 0;\n    text-align: right;\n"]))),Se=Fn.b.div(W||(W=Object(kn.a)(["\n    background-color: #3F61A6;\n    border-radius: 8px;\n    height: 15px;\n    width: 90%;\n"]))),Re=Fn.b.div(Y||(Y=Object(kn.a)(["\n    background-color: #1B3059;\n    border-radius: 8px;\n    height: 15px;\n    width: ",";\n"])),(function(n){return 100*n.stat/250+"%"})),ze=Fn.b.div(X||(X=Object(kn.a)(["\n    width: 100vw;\n    min-height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),Pe=Fn.b.div(G||(G=Object(kn.a)(["\n    width: 100%;\n\n    @media only screen and (min-width: 800px) {\n        display: flex;\n        align-items: flex-end;\n    }\n"]))),Ne=Fn.b.div(q||(q=Object(kn.a)(["\n    width: 100%;\n\n    @media only screen and (min-width: 800px) {width: 50%;}\n"]))),Be=Fn.b.div(H||(H=Object(kn.a)(["\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Ie=Fn.b.img(J||(J=Object(kn.a)(["\n    width: 200px;\n    height: 200px;\n    margin-bottom: 20px;\n"]))),Me=Fn.b.button(V||(V=Object(kn.a)(["\n    margin-top: 40px;\n    width: 100%;\n    border: none;\n    background-color: transparent;\n\n    font-size: 12px;;\n    text-align: right;\n    color: #3F61A6;\n    padding-right: 1vw;\n\n    span {text-decoration: underline;}\n\n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n"]))),We=Fn.b.div(K||(K=Object(kn.a)(["\n    background-color: #f2f2f2;\n    border-radius: 10px;\n\n    margin: 40px 20px;\n    padding: 0 20px 20px 20px;\n"]))),Ye=Fn.b.h2(Q||(Q=Object(kn.a)(["\n    font-family: 'Press Start 2P', cursive;\n    font-size: 20px;\n    text-transform: uppercase;\n    color: #F2B705;\n    text-shadow: 2px 2px #3F61A6, -2px 2px #3F61A6, -2px -2px #3F61A6, 2px -2px #3F61A6,\n                2px 0px #3F61A6, -2px 0px #3F61A6, 0px 2px #3F61A6, 0px -2px #3F61A6;\n\n    position: relative;\n    top: -11px;\n    left: -5px;\n"]))),Xe=Fn.b.div(U||(U=Object(kn.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    padding: 2px;\n    text-transform: capitalize;\n"]))),Ge=Fn.b.div(Z||(Z=Object(kn.a)(["\n    width: 70px;\n    height: 100%;\n"]))),qe=Fn.b.button($||($=Object(kn.a)(["\n    position: fixed;\n    top: 50%;\n    left: 10px;\n\n    border: none;\n    background-color: transparent;\n    font-size: 30px;\n    color: #3F61A6;\n\n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n"]))),He=Fn.b.button(nn||(nn=Object(kn.a)(["\n    position: fixed;\n    top: 50%;\n    right: 10px;\n\n    border: none;\n    background-color: transparent;\n    font-size: 30px;\n    color: #3F61A6;\n\n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n"]))),Je=function(){var n=Object(vn.c)((function(n){return n.listReducer.pokemon})),e=Object(vn.c)((function(n){return n.elementReducer.pokemon})),t=Object(vn.c)((function(n){return n.teamReducer.pokemon})),r=Object(vn.b)(),c=Object(En.f)();return Object(Zn.jsxs)(ze,{children:[Object(Zn.jsx)(Ge,{children:Object(Zn.jsx)(qe,{onClick:function(){1===e.id?n.map((function(n){return n.map((function(n){return 151===n.id&&(r({type:"DELETE_ELEMENT"}),r(Wn(n)),c.push("/pokedex/pokemon/".concat(n.name))),n}))})):n.map((function(n){return n.map((function(n){return n.id===e.id-1&&(r({type:"DELETE_ELEMENT"}),r(Wn(n)),c.push("/pokedex/pokemon/".concat(n.name))),n}))}))},children:Object(Zn.jsx)(Pn.c,{})})}),Object(Zn.jsxs)(Pe,{children:[Object(Zn.jsxs)(Ne,{children:[Object(Zn.jsxs)(Be,{children:[Object(Zn.jsx)(Ie,{src:e.sprites.other.dream_world.front_default,alt:e.name}),Object(Zn.jsx)(Ae,{id:e.id.toString(),name:e.name}),Object(Zn.jsxs)(Me,{onClick:function(){t.length>=6?alert("You can't withdraw other Pok\xe9mon. First you have to deposit some."):r({type:"ADD_TEAM",data:{id:e.id.toString(),name:e.name,image:e.sprites.other.dream_world.front_default}}),c.push("/pokedex/my-team")},children:[Object(Zn.jsx)(re.d,{})," ",Object(Zn.jsx)("span",{children:"Withdraw"})]})]}),Object(Zn.jsxs)(We,{children:[Object(Zn.jsx)(Ye,{children:"info"}),Object(Zn.jsxs)(Xe,{children:[Object(Zn.jsx)("p",{children:"Height "})," ",Object(Zn.jsxs)("h3",{children:[e.height/10," m"]})]}),Object(Zn.jsxs)(Xe,{children:[Object(Zn.jsx)("p",{children:"Weight "})," ",Object(Zn.jsxs)("h3",{children:[e.weight/10," kg"]})]}),Object(Zn.jsxs)(Xe,{children:[Object(Zn.jsx)("p",{children:"Base experience "})," ",Object(Zn.jsx)("h3",{children:e.base_experience})]})]})]}),Object(Zn.jsxs)(Ne,{children:[Object(Zn.jsxs)(We,{children:[Object(Zn.jsx)(Ye,{children:"types"}),Object(Zn.jsx)(de,{children:e.types?e.types.map((function(n){return Object(Zn.jsx)(be,{type:n.type.name,children:n.type.name},n.type.name)})):Object(Zn.jsx)("div",{})})]}),Object(Zn.jsxs)(We,{children:[Object(Zn.jsx)(Ye,{children:"abilities"}),e.abilities?e.abilities.map((function(n){return Object(Zn.jsx)(Xe,{children:n.ability.name},n.ability.name)})):Object(Zn.jsx)("div",{})]}),Object(Zn.jsxs)(We,{children:[Object(Zn.jsx)(Ye,{children:"stats"}),e.stats?e.stats.map((function(n){return Object(Zn.jsxs)(Ce,{children:[Object(Zn.jsx)(Le,{children:n.stat.name}),Object(Zn.jsx)(Se,{children:Object(Zn.jsx)(Re,{stat:n.base_stat})})]},n.stat.name)})):Object(Zn.jsx)("div",{})]})]})]}),Object(Zn.jsx)(Ge,{children:Object(Zn.jsx)(He,{onClick:function(){151===e.id?n.map((function(n){return n.map((function(n){return 1===n.id&&(r({type:"DELETE_ELEMENT"}),r(Wn(n)),c.push("/pokedex/pokemon/".concat(n.name))),n}))})):n.map((function(n){return n.map((function(n){return n.id===e.id+1&&(r({type:"DELETE_ELEMENT"}),r(Wn(n)),c.push("/pokedex/pokemon/".concat(n.name))),n}))}))},children:Object(Zn.jsx)(Pn.d,{})})}),Object(Zn.jsx)(se,{})]})},Ve=t(48),Ke=Fn.b.div(en||(en=Object(kn.a)(["\n    width: 100vw;\n    min-height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: #f2f2f2;\n"]))),Qe=Fn.b.div(tn||(tn=Object(kn.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n"]))),Ue=Fn.b.div(rn||(rn=Object(kn.a)(["\n    width: 190px;\n    height: 230px;\n    margin: 25px 10px;\n    padding: 5px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Ze=Fn.b.div(cn||(cn=Object(kn.a)(["\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    background-color: #ffffff;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),$e=Fn.b.img(on||(on=Object(kn.a)(["\n    width: 85px;\n    height: 85px;\n"]))),nt=Fn.b.button(an||(an=Object(kn.a)(["\n    margin-top: 30px;\n    width: 100%;\n    border: none;\n    background-color: transparent;\n\n    font-size: 12px;;\n    text-align: right;\n    color: #3F61A6;\n    padding-right: 1vw;\n\n    span {text-decoration: underline;}\n\n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n"]))),et=Object(Fn.b)(wn.b)(sn||(sn=Object(kn.a)(["\n    position: fixed;\n    top: 55px;\n    left: 10px;\n\n    border: none;\n    background-color: transparent;\n    color: #3F61A6;\n    font-size: 25px;\n\n    &:hover {\n        cursor: pointer;\n        color: #F2B705;\n    }\n"]))),tt=function(n){var e=Object(vn.b)();return Object(Zn.jsxs)(Ue,{children:[Object(Zn.jsx)(Ze,{children:Object(Zn.jsx)($e,{src:n.data.image,alt:n.data.name})}),Object(Zn.jsx)(Ae,{id:n.data.id,name:n.data.name}),Object(Zn.jsxs)(nt,{onClick:function(n){e({type:"DELETE_TEAM",id:n.target.id})},children:[Object(Zn.jsx)(re.c,{})," ",Object(Zn.jsx)("span",{id:n.data.id,children:"Deposit"})]})]})},rt=function(){return Object(Zn.jsxs)(Gn,{children:[Object(Zn.jsx)(qn,{}),Object(Zn.jsx)(Hn,{}),Object(Zn.jsx)(Jn,{}),Object(Zn.jsx)(Vn,{}),Object(Zn.jsx)(Kn,{}),Object(Zn.jsx)(Qn,{})]})},ct=function(){return Object(Zn.jsxs)(Ue,{children:[Object(Zn.jsx)(rt,{}),Object(Zn.jsx)(Ae,{id:"0",name:"Not defined"})]})},ot=function(){var n=Object(vn.c)((function(n){return n.teamReducer.pokemon}));return Object(Zn.jsxs)(Ke,{children:[0===n.length?Object(Zn.jsxs)(Qe,{children:[Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{})]}):1===n.length?Object(Zn.jsxs)(Qe,{children:[n.map((function(n){return Object(Zn.jsx)(tt,{data:n},n.id)})),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{})]}):2===n.length?Object(Zn.jsxs)(Qe,{children:[n.map((function(n){return Object(Zn.jsx)(tt,{data:n},n.id)})),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{})]}):3===n.length?Object(Zn.jsxs)(Qe,{children:[n.map((function(n){return Object(Zn.jsx)(tt,{data:n},n.id)})),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{})]}):4===n.length?Object(Zn.jsxs)(Qe,{children:[n.map((function(n){return Object(Zn.jsx)(tt,{data:n},n.id)})),Object(Zn.jsx)(ct,{}),Object(Zn.jsx)(ct,{})]}):5===n.length?Object(Zn.jsxs)(Qe,{children:[n.map((function(n){return Object(Zn.jsx)(tt,{data:n},n.id)})),Object(Zn.jsx)(ct,{})]}):Object(Zn.jsx)(Qe,{children:n.map((function(n){return Object(Zn.jsx)(tt,{data:n},n.id)}))}),Object(Zn.jsx)(se,{}),Object(Zn.jsx)(et,{to:"/pokedex/pokedex",children:Object(Zn.jsx)(Ve.a,{})})]})},it=Fn.b.div(dn||(dn=Object(kn.a)(["\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),at=Fn.b.div(bn||(bn=Object(kn.a)(["\n    width: 80vw;\n    height: 80vh;\n    padding: 40px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    background-color: #f2f2f2;\n    border-radius: 20px;\n"]))),st=Fn.b.div(jn||(jn=Object(kn.a)(["\n    width: 100%;\n    min-height: 8vw;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n"]))),dt=Fn.b.p(pn||(pn=Object(kn.a)(["\n    font-family: 'Press Start 2P', cursive;\n    font-size: 3.2vw;\n"]))),bt=Fn.b.div(ln||(ln=Object(kn.a)(["\n    overflow: hidden;\n    white-space: nowrap;\n    border-right: 1vw solid #CAC7D9;\n    \n    animation:\n        typing 2s steps(15, end),\n        blink-border .5s step-end 16,\n        hide-border 1000000s 2.5s; \n\n    @keyframes typing {\n        from {width: 0;} to {width: 100%;}\n    }\n    @keyframes blink-border {\n        from, to {border-color: transparent;}\n        50% {border-color: #CAC7D9;}\n    }\n    @keyframes hide-border {\n        0% {border-color: transparent;}\n}\n"]))),jt=Fn.b.div(xn||(xn=Object(kn.a)(["\n    overflow: hidden;\n    white-space: nowrap;\n    border-right: 1vw solid #CAC7D9;\n        \n    animation:\n        show 2.5s step-end,\n        typing 2.4s steps(17, end) 2.5s,\n        blink-border .5s step-end infinite;\n\n    @keyframes show {\n        0% {opacity: 0%;} 100% {opacity: 100%;}\n    }\n    @keyframes typing {\n        from {width: 0;} to {width: 100%;}\n    }\n    @keyframes blink-border {\n        from, to {border-color: transparent;}\n        50% {border-color: #CAC7D9;}\n    }\n"]))),pt=Object(Fn.b)(wn.b)(un||(un=Object(kn.a)(["\n    text-decoration: none;\n    color: #3F61A6;\n\n    &:hover {color: #F2B705;}\n"]))),lt=Fn.b.img(hn||(hn=Object(kn.a)(["\n    height: 40vh;\n    max-width: 40vw;\n"]))),xt=function(){var n=Object(fn.useState)(""),e=Object(Sn.a)(n,2),t=e[0],r=e[1];return Object(fn.useEffect)((function(){function n(){return(n=Object(Ln.a)(_n.a.mark((function n(){var e,t;return _n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Math.floor(152*Math.random())+1,n.next=3,zn.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e)).catch((function(n){return alert(n)}));case 3:t=n.sent,r(t.data.sprites.other.dream_world.front_default);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(Zn.jsx)(it,{children:Object(Zn.jsxs)(at,{children:[Object(Zn.jsxs)(st,{children:[Object(Zn.jsx)("div",{children:Object(Zn.jsx)(bt,{children:Object(Zn.jsx)(dt,{children:"Page not found."})})}),Object(Zn.jsx)("div",{children:Object(Zn.jsx)(jt,{children:Object(Zn.jsxs)(dt,{children:[Object(Zn.jsx)(Pn.a,{})," Return to ",Object(Zn.jsx)(pt,{to:"/pokedex",children:"Home"}),"."]})})})]}),Object(Zn.jsx)(lt,{src:t,alt:""})]})})},ut=function(){return Object(Zn.jsxs)(wn.a,{children:[Object(Zn.jsxs)(En.c,{children:[Object(Zn.jsx)(En.a,{exact:!0,path:"/pokedex",component:ne}),Object(Zn.jsx)(En.a,{exact:!0,path:"/pokedex/podekex",component:_e}),Object(Zn.jsx)(En.a,{exact:!0,path:"/pokedex/pokemon/:name",component:Je}),Object(Zn.jsx)(En.a,{exact:!0,path:"/pokedex/my-team",component:ot}),Object(Zn.jsx)(En.a,{component:xt})]}),Object(Zn.jsx)(An,{})]})},ht=t(5),ft=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pokemon:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE_LIST":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:[e.data]});case"DELETE_LIST":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:[]});default:return n}},Ot=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pokemon:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TEXT":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:[e.data].concat(Object(Cn.a)(n.pokemon))});case"DELETE_TEXT":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:[]});default:return n}},mt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{warning:""},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SAVE_WARNING":return{warning:e.data};case"DELETE_WARNING":return{warning:""};default:return n}},gt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pokemon:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TYPE":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:[e.data].concat(Object(Cn.a)(n.pokemon))});case"DELETE_TYPE":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:[]});default:return n}},vt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pokemon:{}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ELEMENT":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:e.data});case"DELETE_ELEMENT":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:{}});default:return n}},yt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pokemon:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TEAM":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:[e.data].concat(Object(Cn.a)(n.pokemon.filter((function(n){return n.id!==e.data.id}))))});case"DELETE_TEAM":return Object(ht.a)(Object(ht.a)({},n),{},{pokemon:n.pokemon.filter((function(n){return n.id!==e.id}))});default:return n}},wt=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"OPEN_FILTER":case"CLOSE_FILTER":return{state:e.data};default:return n}},Et=Object(yn.a)({listReducer:ft,textReducer:Ot,warningReducer:mt,typeReducer:gt,elementReducer:vt,teamReducer:yt,filterReducer:wt}),kt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),o(n),i(n)}))},Ft=Object(yn.b)(Et);gn.a.render(Object(Zn.jsx)(On.a.StrictMode,{children:Object(Zn.jsx)(vn.a,{store:Ft,children:Object(Zn.jsx)(ut,{})})}),document.getElementById("root")),kt()}},[[82,1,2]]]);
//# sourceMappingURL=main.9d00ebae.chunk.js.map