(()=>{"use strict";const t=(t,n=null,o=null)=>{let s=[];return{title:t,color:n,icon:o,uid:e(),addTask:function(t){const n=e(s);t.uid=n,s.push(t)},getTasks:function(){return s},removeTask:function(t){const e=s.findIndex((e=>e.uid===t));console.log({index:e}),e>=0&&s.splice(e,1)}}};function e(t){let n="i";if(n+=function(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let t=0;t<6;t++)n+=e[(61*Math.random()).toFixed()];return n}(),s=n,!(o=t)||o.every((t=>t.id!==s)))return n;var o,s;e(t)}const n=(t,e="",n,o=0)=>{const s=function(){let t=[];return{getComments:function(){return t},addComment:function(e){t.push(e)}}}(),r=function(){let t=null;return{setDueDate:function(e){const n=new Date(e);!function(t){return!isNaN(t)}(n)?console.warn("Date not set: Invalid date"):t=n},getDueDate:function(){return t}}}();return r.setDueDate(n),Object.assign({title:t,description:e,isDone:!1,priority:o},s,r)};function o(t){if(!t.hasOwnProperty("type"))return;const e=document.createElement(t.type);for(const n in t)"type"!==n&&Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}const s=o({type:"div",classList:["new-folder card"]});s.append(function(t){const e=document.createElement("ion-icon");return e.classList.add("md","hydrated"),e.setAttribute("role","img"),e.setAttribute("name",t),e}("add-outline"),o({type:"span",textContent:"New Folder",classList:["subtitle"]}));const r=o({type:"header"});r.append(o({type:"img",src:"https://img.logoipsum.com/246.svg"}),o({type:"span",textContent:"TO DEW"}));const a=o({type:"nav"});a.append(o({type:"span",textContent:"My Folders"}));let i=o({type:"main"});function c(t){i.replaceWith(t),i=t}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function d(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){d(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===u(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function p(t){d(1,arguments);var e=l(t);return e.setHours(0,0,0,0),e}function f(t){const e=document.createElement("main"),n=function(t){const e=document.createElement("section");return e.id="task-list",t.forEach((t=>{const n=function(t){const e=document.createElement("div");return e.classList.add("card"),e.append(o({type:"h3",classList:["title"],textContent:t.title}),o({type:"span",classList:["subtitle"],textContent:m(50,t.description)}),function(t){const e=document.createElement("div");return t?(e.textContent=function(t){return function(t){return d(1,arguments),l(t).getTime()<Date.now()}(t)?"Past Due":function(t){return d(1,arguments),function(t,e){d(2,arguments);var n=p(t),o=p(e);return n.getTime()===o.getTime()}(t,Date.now())}(t)?"Due today":"Due by MMMM dddd"}(t),e):(e.textContent="No due date",e)}(t.getDueDate())),e}(t);e.append(n)})),e}(t.getTasks());return e.append(n),e}function m(t,e=""){if(e)return e.substring(0,t-3)+"..."}document.body.append(r,a,i);const y=n("Task 1","","2023-12-05"),g=n("Task 2","This is a very long text that resembles a description"),b=t("Example 1"),h=t("Example 2");b.addTask(y),b.addTask(g);let D=[b,h];const v=document.querySelector("nav"),w=function(t){const e=o({type:"main"});return e.classList.add("dashboard"),e.append(s),t?(t.forEach((t=>{const n=function(t){const e=o({type:"div",classList:["folder card"]});e.dataset.uid=t.uid;let n=t.getTasks().length;return e.append(o({type:"h3",textContent:t.title,classList:["title"]}),o({type:"span",classList:["subtitle"],textContent:(s=n,`${s} ${1===s?"task":"tasks"}`)})),e;var s}(t);e.append(n)})),e):e}([b,h]);c(w),document.querySelectorAll(".folder").forEach((t=>{t.addEventListener("click",(()=>{var e;!function(t){const e=document.createElement("span");e.textContent=t.title,e.dataset.uid=t.uid,v.append(e);c(f(t))}((e=t.dataset.uid,D.find((t=>t.uid===e))))}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTdCaUJDLENBQWdCSixHQUM3QnhELEVBQUtULE9BQVF3QyxFQUFLLElBR2IvQixHQVBjQSxDQVF2QixDVVhrQjZELENBQWMsQ0FBQ1YsRUFBU0MsSUFDMUNuRCxFQUFnQnNELEdBRUl2RSxTQUFTOEUsaUJBQWlCLFdBQ2xDaEMsU0FBU0YsSUFDbkJBLEVBQU9tQyxpQkFBaUIsU0FBUyxLQWlCbkMsSUFBeUI1RyxHQVZ6QixTQUF5QnlFLEdBQ3ZCLE1BQU1vQyxFQUFTaEYsU0FBU0MsY0FBYyxRQUN0QytFLEVBQU9wRSxZQUFjZ0MsRUFBT25HLE1BQzVCdUksRUFBT1AsUUFBUTVILElBQU0rRixFQUFPL0YsSUFFNUIsRUFBTzBELE9BQVF5RSxHQUVmL0QsRUFEbUIwQixFQUFnQkMsR0FFckMsQ0FaSXFDLEVBY3FCOUcsRUFoQlZ5RSxFQUFPNkIsUUFBUTVILElBaUJyQndILEVBQVFhLE1BQU1oRSxHQUFZQSxFQUFRckUsTUFBUXNCLEtBZnZCLEdBQ3pCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5L2RvbS11dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5L2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkvZm9sZGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBGb2xkZXIgfVxuXG5jb25zdCBGb2xkZXIgPSAodGl0bGUsIGNvbG9yID0gbnVsbCwgaWNvbiA9IG51bGwpID0+IHtcblxuICBsZXQgdGFza3MgPSBbXVxuICBjb25zdCB1aWQgPSBnZW5lcmF0ZVVpZCgpXG5cbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdWlkID0gZ2VuZXJhdGVVaWQoIHRhc2tzICk7XG4gICAgdGFzay51aWQgPSB1aWQ7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2soIHRhc2tVaWQgKXtcbiAgICBjb25zdCBpc1RhcmdldCA9ICh0YXNrKSA9PiAgdGFzay51aWQgPT09IHRhc2tVaWQ7XG4gICAgY29uc3QgaW5kZXggPSB0YXNrcy5maW5kSW5kZXgoIGlzVGFyZ2V0IClcbiAgICBjb25zb2xlLmxvZyh7aW5kZXh9KVxuICAgIGlmIChpbmRleCA+PSAwKSB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRUYXNrcygpe1xuICAgIHJldHVybiB0YXNrc1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBjb2xvcixcbiAgICBpY29uLFxuICAgIHVpZCxcbiAgICBhZGRUYXNrLFxuICAgIGdldFRhc2tzLFxuICAgIHJlbW92ZVRhc2tcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0lkQXZhaWxhYmxlKCBhcnJheSwgaWQgKXtcbiAgaWYgKCFhcnJheSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGFycmF5LmV2ZXJ5KCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCApO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVpZCggaWRBcnJheSApe1xuICBsZXQgb3V0cHV0ID0gJ2knXG4gIG91dHB1dCs9IHJhbmRvbVN0cmluZyg2KTtcblxuICBpZiggaXNJZEF2YWlsYWJsZShpZEFycmF5LCBvdXRwdXQpICl7XG4gICAgcmV0dXJuIG91dHB1dFxuICB9IGVsc2Uge1xuICAgIGdlbmVyYXRlVWlkKCBpZEFycmF5IClcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21TdHJpbmcoIGxlbmd0aCApe1xuICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgbGV0IG91dHB1dCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKGNoYXJhY3RlcnMubGVuZ3RoLTEpIDtcbiAgICBjb25zdCBpbmRleCA9IHJhbmRvbS50b0ZpeGVkKCk7XG4gICAgb3V0cHV0ICs9IGNoYXJhY3RlcnNbaW5kZXhdXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59IiwiZXhwb3J0IHsgVGFzayB9IFxuXG5jb25zdCBUYXNrID0gKCB0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSwgcHJpb3JpdHkgPSAwICkgPT4ge1xuXG4gIGNvbnN0IGNvbW1lbnRNYW5hZ2VyID0gQ29tbWVudE1hbmFnZXIoKVxuICBjb25zdCBkYXRlTWFuYWdlciA9IERhdGVNYW5hZ2VyKClcbiAgZGF0ZU1hbmFnZXIuc2V0RHVlRGF0ZSggZHVlRGF0ZSApXG5cbiAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpc0RvbmUsXG4gICAgcHJpb3JpdHlcbiAgICB9LFxuICAgIGNvbW1lbnRNYW5hZ2VyLFxuICAgIGRhdGVNYW5hZ2VyXG4gIClcbn1cblxuZnVuY3Rpb24gQ29tbWVudE1hbmFnZXIoKSB7XG4gIGxldCBjb21tZW50cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldENvbW1lbnRzKCl7XG4gICAgcmV0dXJuIGNvbW1lbnRzXG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tZW50KCBjb21tZW50ICl7XG4gICAgY29tbWVudHMucHVzaCggY29tbWVudCApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldENvbW1lbnRzLFxuICAgIGFkZENvbW1lbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBEYXRlTWFuYWdlcigpe1xuICBsZXQgZHVlRGF0ZSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc2V0RHVlRGF0ZSggaW5wdXQgKXtcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoIGlucHV0ICk7XG5cbiAgICBpZiggZGF0ZUlzVmFsaWQobmV3RGF0ZSkgKSB7XG4gICAgICBkdWVEYXRlID0gbmV3RGF0ZVxuICAgIH0gZWxzZSBjb25zb2xlLndhcm4oJ0RhdGUgbm90IHNldDogSW52YWxpZCBkYXRlJyk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGdldER1ZURhdGUoKXtcbiAgICByZXR1cm4gZHVlRGF0ZVxuICB9XG5cbiAgZnVuY3Rpb24gZGF0ZUlzVmFsaWQoIGlucHV0ICl7XG4gICAgcmV0dXJuICFpc05hTiggaW5wdXQgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0RHVlRGF0ZSxcbiAgICBnZXREdWVEYXRlXG4gIH1cbn0iLCJleHBvcnQgeyBtYWtlRWxlbWVudCwgbWFrZUljb24gfVxuXG5mdW5jdGlvbiBtYWtlRWxlbWVudCggb2JqICl7XG4gIGlmKCFvYmouaGFzT3duUHJvcGVydHkoJ3R5cGUnKSkgcmV0dXJuXG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIG9iai50eXBlIClcblxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoIGtleSA9PT0gJ3R5cGUnICkgY29udGludWVcbiAgICBpZiAoIU9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgY29udGludWVcbiAgICBvdXRwdXRba2V5XSA9IG9ialtrZXldO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5mdW5jdGlvbiBtYWtlSWNvbiggbmFtZSApe1xuICBpZighbmFtZSkgdGhyb3cgbmV3IEVycm9yKCdObyBpY29uIG5hbWUgcHJvdmlkZWQnKVxuXG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdtZCcsJ2h5ZHJhdGVkJylcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdpbWcnKVxuICBvdXRwdXQuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSlcblxuICByZXR1cm4gb3V0cHV0XG59IiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQsIG1ha2VJY29uIH0gZnJvbSBcIi4vZG9tLXV0aWxpdHlcIlxuXG5leHBvcnQgeyBtYWtlRGFzaGJvYXJkIH1cblxuY29uc3QgYnV0dG9uTmV3Rm9sZGVyID0gbWFrZUVsZW1lbnQoe1xuICB0eXBlOiAnZGl2JyxcbiAgY2xhc3NMaXN0OiBbJ25ldy1mb2xkZXIgY2FyZCddXG59KVxuXG5idXR0b25OZXdGb2xkZXIuYXBwZW5kKFxuICBtYWtlSWNvbignYWRkLW91dGxpbmUnKSxcbiAgbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6ICdzcGFuJyxcbiAgICB0ZXh0Q29udGVudDogJ05ldyBGb2xkZXInLFxuICAgIGNsYXNzTGlzdDogWydzdWJ0aXRsZSddXG4gIH0pLFxuKVxuXG5mdW5jdGlvbiBtYWtlRGFzaGJvYXJkKCBmb2xkZXJzICl7XG4gIGNvbnN0IG1haW4gPSBtYWtlRWxlbWVudCh7dHlwZTogJ21haW4nfSlcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdkYXNoYm9hcmQnKVxuICBtYWluLmFwcGVuZCggYnV0dG9uTmV3Rm9sZGVyIClcblxuICBpZiAoIWZvbGRlcnMpIHJldHVybiBtYWluXG5cbiAgZm9sZGVycy5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICBjb25zdCBjYXJkID0gbWFrZUZvbGRlckNhcmQoIGl0ZW0gKVxuICAgIG1haW4uYXBwZW5kKCBjYXJkIClcbiAgfSk7XG5cbiAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gbWFrZUZvbGRlckNhcmQoIGZvbGRlciApe1xuICBjb25zdCBvdXRwdXQgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogJ2RpdicsXG4gICAgY2xhc3NMaXN0OiBbJ2ZvbGRlciBjYXJkJ11cbiAgfSlcbiAgXG4gIG91dHB1dC5kYXRhc2V0LnVpZCA9IGZvbGRlci51aWRcbiAgbGV0IGl0ZW1Db3VudCA9IGZvbGRlci5nZXRUYXNrcygpLmxlbmd0aFxuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2gzJyxcbiAgICAgIHRleHRDb250ZW50OiBmb2xkZXIudGl0bGUsXG4gICAgICBjbGFzc0xpc3Q6IFsndGl0bGUnXVxuICAgIH0pLFxuICAgIG1ha2VFbGVtZW50KHtcbiAgICAgIHR5cGU6ICdzcGFuJyxcbiAgICAgIGNsYXNzTGlzdDogWydzdWJ0aXRsZSddLFxuICAgICAgdGV4dENvbnRlbnQ6IGZvcm1hdEl0ZW1Db3VudChpdGVtQ291bnQpXG4gICAgfSlcbiAgKVxuICByZXR1cm4gb3V0cHV0XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEl0ZW1Db3VudCggY291bnQgKXtcbiAgY29uc3Qgc3VmZml4ID0gY291bnQgPT09IDEgPyAndGFzaycgOiAndGFza3MnXG4gIHJldHVybiBgJHtjb3VudH0gJHtzdWZmaXh9YFxufSIsImltcG9ydCB7IG1ha2VEYXNoYm9hcmQgfSBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcbmltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxpdHlcIjtcbmV4cG9ydCB7IGxvYWRQYWdlLCBzZXRQYWdlQ29udGVudCB9XG5cbmNvbnN0IGhlYWRlciA9IG1ha2VFbGVtZW50KHt0eXBlOiAnaGVhZGVyJ30pO1xuaGVhZGVyLmFwcGVuZChcbiAgbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6ICdpbWcnLCBcbiAgICBzcmM6ICdodHRwczovL2ltZy5sb2dvaXBzdW0uY29tLzI0Ni5zdmcnXG4gIH0pLFxuICBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogJ3NwYW4nLCBcbiAgICB0ZXh0Q29udGVudDogJ1RPIERFVydcbiAgfSlcbilcblxuY29uc3QgbmF2QmFyID0gbWFrZUVsZW1lbnQoe3R5cGU6ICduYXYnfSk7XG5uYXZCYXIuYXBwZW5kKFxuICBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogJ3NwYW4nLFxuICAgIHRleHRDb250ZW50OiAnTXkgRm9sZGVycydcbiAgfSlcbilcblxubGV0IG1haW4gPSBtYWtlRWxlbWVudCh7dHlwZTogJ21haW4nfSk7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChcbiAgICBoZWFkZXIsXG4gICAgbmF2QmFyLFxuICAgIG1haW5cbiAgKVxufVxuXG5mdW5jdGlvbiBzZXRQYWdlQ29udGVudCggZWxlbWVudCApIHtcbiAgbWFpbi5yZXBsYWNlV2l0aCggZWxlbWVudCApXG4gIG1haW4gPSBlbGVtZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdywgZm9ybWF0UmVsYXRpdmUsIGlzRnV0dXJlLCBpc1Bhc3QsIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxpdHlcIlxuXG5leHBvcnQgeyBtYWtlRm9sZGVyVmlldyB9XG5cbmZ1bmN0aW9uIG1ha2VGb2xkZXJWaWV3KCBmb2xkZXIgKXtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuXG4gIGNvbnN0IHRhc2tMaXN0ID0gbWFrZVRhc2tMaXN0RGlzcGxheSggZm9sZGVyLmdldFRhc2tzKCkgKTtcbiAgbWFpbi5hcHBlbmQodGFza0xpc3QpXG5cbiAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gbWFrZVRhc2tMaXN0RGlzcGxheSggdGFza0xpc3QgKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAndGFzay1saXN0J1xuICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBtYWtlVGFza0NhcmQoIHRhc2sgKVxuICAgIG91dHB1dC5hcHBlbmQoY2FyZClcbiAgfSk7XG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gbWFrZVRhc2tDYXJkKCB0YXNrICkge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ2gzJyxcbiAgICAgIGNsYXNzTGlzdDogWyd0aXRsZSddLFxuICAgICAgdGV4dENvbnRlbnQ6IHRhc2sudGl0bGVcbiAgICB9KSxcbiAgICBtYWtlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnc3BhbicsXG4gICAgICBjbGFzc0xpc3Q6IFsnc3VidGl0bGUnXSxcbiAgICAgIHRleHRDb250ZW50OiBsaW1pdENoYXJhY3RlcnMoNTAsIHRhc2suZGVzY3JpcHRpb24pXG4gICAgfSksXG4gICAgZGlzcGxheUR1ZURhdGUoIHRhc2suZ2V0RHVlRGF0ZSgpIClcbiAgKVxuICByZXR1cm4gb3V0cHV0XG59XG5cbmZ1bmN0aW9uIGxpbWl0Q2hhcmFjdGVycyggbWF4TGVuZ3RoLCBzdHJpbmcgPSAnJyl7XG4gIGlmKCFzdHJpbmcpIHJldHVyblxuICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBtYXhMZW5ndGgtMykgKyAnLi4uJ1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RHVlRGF0ZSggZGF0ZSApIHtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBpZiggIWRhdGUgKXtcbiAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnTm8gZHVlIGRhdGUnXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgb3V0cHV0LnRleHRDb250ZW50ID0gZ2V0RGF0ZURlc2NyaXB0b3IoIGRhdGUgKVxuICByZXR1cm4gb3V0cHV0XG59XG5cbmZ1bmN0aW9uIGdldERhdGVEZXNjcmlwdG9yKCBkYXRlICl7XG4gIGlmKCBpc1Bhc3QoZGF0ZSkgKXtcbiAgICByZXR1cm4gJ1Bhc3QgRHVlJ1xuICB9IGVsc2UgaWYoIGlzVG9kYXkoZGF0ZSkgKXtcbiAgICByZXR1cm4gJ0R1ZSB0b2RheSdcbiAgfSBlbHNlIGlmKCBpc1RoaXNXZWVrKGRhdGUpICl7XG4gICAgcmV0dXJuIGBEdWUgYnkgJHtkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KX1gXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBEdWUgYnkgTU1NTSBkZGRkYFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVGhpc1dlZWsoIGRhdGUgKXtcbiAgcmV0dXJuIGZhbHNlXG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGFzdChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCkgPCBEYXRlLm5vdygpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBGb2xkZXIgfSBmcm9tIFwiLi9sb2dpYy9mb2xkZXJcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9sb2dpYy90YXNrXCI7XG5pbXBvcnQgeyBsb2FkUGFnZSwgc2V0UGFnZUNvbnRlbnQgfSBmcm9tIFwiLi9kaXNwbGF5L2hvbWVcIjtcbmltcG9ydCB7IG1ha2VEYXNoYm9hcmQgfSBmcm9tIFwiLi9kaXNwbGF5L2Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgbWFrZUZvbGRlclZpZXcgfSBmcm9tIFwiLi9kaXNwbGF5L2ZvbGRlci12aWV3XCI7XG5pbXBvcnQgeyBtYWtlRWxlbWVudCB9IGZyb20gXCIuL2Rpc3BsYXkvZG9tLXV0aWxpdHlcIjtcblxubG9hZFBhZ2UoKVxuXG4vLyBoYXJkY29kZWQgdGFza3MvZm9sZGVyc1xuY29uc3QgdGFzazEgPSBUYXNrKCdUYXNrIDEnLCAnJywgJzIwMjMtMTItMDUnKTtcbmNvbnN0IHRhc2syID0gVGFzaygnVGFzayAyJywgJ1RoaXMgaXMgYSB2ZXJ5IGxvbmcgdGV4dCB0aGF0IHJlc2VtYmxlcyBhIGRlc2NyaXB0aW9uJylcbmNvbnN0IGZvbGRlcjEgPSBGb2xkZXIoJ0V4YW1wbGUgMScpO1xuY29uc3QgZm9sZGVyMiA9IEZvbGRlcignRXhhbXBsZSAyJyk7XG5mb2xkZXIxLmFkZFRhc2sodGFzazEpXG5mb2xkZXIxLmFkZFRhc2sodGFzazIpXG5sZXQgZm9sZGVycyA9IFtmb2xkZXIxLCBmb2xkZXIyXTtcblxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JylcblxuY29uc3QgZGFzaGJvYXJkID0gbWFrZURhc2hib2FyZChbZm9sZGVyMSwgZm9sZGVyMl0pXG5zZXRQYWdlQ29udGVudCggZGFzaGJvYXJkIClcblxuY29uc3QgZm9sZGVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9sZGVyJyk7XG5mb2xkZXJDYXJkcy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgZm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gZm9sZGVyLmRhdGFzZXQudWlkXG4gICAgY29uc3QgX2ZvbGRlciA9IGZpbmRGb2xkZXJCeUlkKGlkKVxuICAgIG9wZW5Gb2xkZXJWaWV3KCBfZm9sZGVyIClcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9wZW5Gb2xkZXJWaWV3KCBmb2xkZXIgKXtcbiAgY29uc3QgbmF2VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIG5hdlRhYi50ZXh0Q29udGVudCA9IGZvbGRlci50aXRsZVxuICBuYXZUYWIuZGF0YXNldC51aWQgPSBmb2xkZXIudWlkXG5cbiAgbmF2QmFyLmFwcGVuZCggbmF2VGFiIClcbiAgY29uc3QgZm9sZGVyVmlldyA9IG1ha2VGb2xkZXJWaWV3KCBmb2xkZXIgKTtcbiAgc2V0UGFnZUNvbnRlbnQoIGZvbGRlclZpZXcgKVxufVxuXG5mdW5jdGlvbiBmaW5kRm9sZGVyQnlJZCggaWQgKXtcbiAgcmV0dXJuIGZvbGRlcnMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC51aWQgPT09IGlkKVxufSJdLCJuYW1lcyI6WyJGb2xkZXIiLCJ0aXRsZSIsImNvbG9yIiwiaWNvbiIsInRhc2tzIiwidWlkIiwiZ2VuZXJhdGVVaWQiLCJhZGRUYXNrIiwidGFzayIsInB1c2giLCJnZXRUYXNrcyIsInJlbW92ZVRhc2siLCJ0YXNrVWlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwiaWRBcnJheSIsIm91dHB1dCIsImxlbmd0aCIsImNoYXJhY3RlcnMiLCJpIiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJyYW5kb21TdHJpbmciLCJpZCIsImFycmF5IiwiZXZlcnkiLCJUYXNrIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJjb21tZW50TWFuYWdlciIsImNvbW1lbnRzIiwiZ2V0Q29tbWVudHMiLCJhZGRDb21tZW50IiwiY29tbWVudCIsIkNvbW1lbnRNYW5hZ2VyIiwiZGF0ZU1hbmFnZXIiLCJzZXREdWVEYXRlIiwiaW5wdXQiLCJuZXdEYXRlIiwiRGF0ZSIsImlzTmFOIiwiZGF0ZUlzVmFsaWQiLCJ3YXJuIiwiZ2V0RHVlRGF0ZSIsIkRhdGVNYW5hZ2VyIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNEb25lIiwibWFrZUVsZW1lbnQiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJrZXkiLCJjYWxsIiwiYnV0dG9uTmV3Rm9sZGVyIiwiY2xhc3NMaXN0IiwiYXBwZW5kIiwibmFtZSIsImFkZCIsInNldEF0dHJpYnV0ZSIsIm1ha2VJY29uIiwidGV4dENvbnRlbnQiLCJoZWFkZXIiLCJzcmMiLCJuYXZCYXIiLCJtYWluIiwic2V0UGFnZUNvbnRlbnQiLCJlbGVtZW50IiwicmVwbGFjZVdpdGgiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJyZXF1aXJlZEFyZ3MiLCJyZXF1aXJlZCIsImFyZ3MiLCJUeXBlRXJyb3IiLCJ0b0RhdGUiLCJhcmd1bWVudCIsImFyZ3VtZW50cyIsImFyZ1N0ciIsInRvU3RyaW5nIiwiZ2V0VGltZSIsIkVycm9yIiwic3RhY2siLCJOYU4iLCJzdGFydE9mRGF5IiwiZGlydHlEYXRlIiwiZGF0ZSIsInNldEhvdXJzIiwibWFrZUZvbGRlclZpZXciLCJmb2xkZXIiLCJ0YXNrTGlzdCIsImZvckVhY2giLCJjYXJkIiwibGltaXRDaGFyYWN0ZXJzIiwibm93IiwiaXNQYXN0IiwiZGlydHlEYXRlTGVmdCIsImRpcnR5RGF0ZVJpZ2h0IiwiZGF0ZUxlZnRTdGFydE9mRGF5IiwiZGF0ZVJpZ2h0U3RhcnRPZkRheSIsImlzU2FtZURheSIsImlzVG9kYXkiLCJnZXREYXRlRGVzY3JpcHRvciIsImRpc3BsYXlEdWVEYXRlIiwibWFrZVRhc2tDYXJkIiwibWFrZVRhc2tMaXN0RGlzcGxheSIsIm1heExlbmd0aCIsInN0cmluZyIsInN1YnN0cmluZyIsImJvZHkiLCJ0YXNrMSIsInRhc2syIiwiZm9sZGVyMSIsImZvbGRlcjIiLCJmb2xkZXJzIiwicXVlcnlTZWxlY3RvciIsImRhc2hib2FyZCIsIml0ZW0iLCJkYXRhc2V0IiwiaXRlbUNvdW50IiwiY291bnQiLCJtYWtlRm9sZGVyQ2FyZCIsIm1ha2VEYXNoYm9hcmQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdlRhYiIsIm9wZW5Gb2xkZXJWaWV3IiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=