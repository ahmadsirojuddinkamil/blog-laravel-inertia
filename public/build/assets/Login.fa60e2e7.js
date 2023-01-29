import{j as s,a as e,u as f,r as g,F as h,H as x,L as b}from"./app.68638bcf.js";import{B as w}from"./Button.b6afb9c6.js";import{c as y}from"./clsx.m.256e9345.js";import{G as N}from"./Guest.52531c05.js";import{I as l}from"./Input.0d6a16b9.js";import{L as n}from"./Label.6cfbfb62.js";import{V as v}from"./ValidationErrors.fdc4ddfe.js";import"./ApplicationLogo.def15032.js";function k({className:r,label:o,...t}){return s("label",{className:y("flex items-center gap-x-2.5",r),children:[e("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-blue-600 shadow-sm focus:ring-0 focus:ring-offset-0"}),e("span",{className:"select-none text-gray-600",children:o})]})}function L({status:r,canResetPassword:o}){const{data:t,setData:i,post:c,processing:u,errors:d,reset:p}=f({email:"",password:"",remember:""});g.exports.useEffect(()=>()=>{p("password")},[]);const m=a=>{i(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return s(h,{children:[e(x,{title:"Log in"}),r&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e(v,{errors:d}),s("form",{onSubmit:a=>{a.preventDefault(),c(route("login"))},children:[s("div",{children:[e(n,{forInput:"email",value:"Email"}),e(l,{type:"text",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:m})]}),s("div",{className:"mt-6",children:[e(n,{forInput:"password",value:"Password"}),e(l,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:m})]}),e(k,{className:"mt-6",name:"remember",label:"Remember me",value:t.remember,onChange:m}),s("div",{className:"flex items-center justify-end mt-6",children:[o&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Forgot your password?"}),e(w,{className:"ml-4",processing:u,children:"Log in"})]})]})]})}L.layout=r=>e(N,{children:r});export{L as default};
