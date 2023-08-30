(()=>{"use strict";const t=(t,n=null,o=null)=>{let s=[];return{title:t,color:n,icon:o,uid:e(),addTask:function(t){const n=e(s);t.uid=n,s.push(t)},getTasks:function(){return s},removeTask:function(t){const e=s.findIndex((e=>e.uid===t));console.log({index:e}),e>=0&&s.splice(e,1)}}};function e(t){let n="i";if(n+=function(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let t=0;t<6;t++)n+=e[(61*Math.random()).toFixed()];return n}(),s=n,!(o=t)||o.every((t=>t.id!==s)))return n;var o,s;e(t)}function n(t){if(!t.hasOwnProperty("type"))return;const e=document.createElement(t.type);for(const n in t)"type"!==n&&Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}const o=n({type:"div",classList:["new-folder card"]});o.append(function(t){const e=document.createElement("ion-icon");return e.classList.add("md","hydrated"),e.setAttribute("role","img"),e.setAttribute("name",t),e}("add-outline"),n({type:"span",textContent:"New Folder",classList:["subtitle"]}));const s=n({type:"header"});s.append(n({type:"img",src:"https://img.logoipsum.com/246.svg"}),n({type:"span",textContent:"TO DEW"}));const i=n({type:"nav"});i.append(n({type:"span",textContent:"My Folders"}));let a=n({type:"main"});function c(t){a.replaceWith(t),a=t}document.body.append(s,i,a);const r=((t,e="",n,o=0)=>{const s=function(){let t=[];return{getComments:function(){return t},addComment:function(e){t.push(e)}}}(),i=function(){let t=null;return{setDueDate:function(e){const n=new Date(e);!function(t){return!isNaN(t)}(n)?console.warn("Date not set: Invalid date"):t=n},getDueDate:function(){return t}}}();return i.setDueDate(n),Object.assign({title:t,description:e,isDone:!1,priority:o},s,i)})("Task 1"),u=t("Example 1"),d=t("Example 2");u.addTask(r);let l=[u,d];const p=document.querySelector("nav"),f=function(t){const e=n({type:"main"});return e.append(o),t?(t.forEach((t=>{const o=function(t){const e=n({type:"div",classList:["folder card"]});e.dataset.uid=t.uid;let o=t.getTasks().length;return e.append(n({type:"h3",textContent:t.title,classList:["title"]}),n({type:"span",classList:["subtitle"],textContent:(s=o,`${s} ${1===s?"task":"tasks"}`)})),e;var s}(t);e.append(o)})),e):e}([u,d]);c(f),document.querySelectorAll(".folder").forEach((t=>{t.addEventListener("click",(()=>{var e;!function(t){const e=document.createElement("span");e.textContent=t.title,e.dataset.uid=t.uid,p.append(e);const o=function(t){return n({type:"main",textContent:`Hello ${t.title}`})}(t);c(o)}((e=t.dataset.uid,l.find((t=>t.uid===e))))}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRUEsTUFBTUEsRUFBUyxDQUFDQyxFQUFPQyxFQUFRLEtBQU1DLEVBQU8sUUFFMUMsSUFBSUMsRUFBUSxHQW9CWixNQUFPLENBQ0xILFFBQ0FDLFFBQ0FDLE9BQ0FFLElBdkJVQyxJQXdCVkMsUUF0QkYsU0FBaUJDLEdBQ2YsTUFBTUgsRUFBTUMsRUFBYUYsR0FDekJJLEVBQUtILElBQU1BLEVBQ1hELEVBQU1LLEtBQUtELEVBQ2IsRUFtQkVFLFNBVkYsV0FDRSxPQUFPTixDQUNULEVBU0VPLFdBbEJGLFNBQXFCQyxHQUNuQixNQUNNQyxFQUFRVCxFQUFNVSxXQURGTixHQUFVQSxFQUFLSCxNQUFRTyxJQUV6Q0csUUFBUUMsSUFBSSxDQUFDSCxVQUNUQSxHQUFTLEdBQUdULEVBQU1hLE9BQU9KLEVBQU8sRUFDdEMsRUFjQSxFQVFGLFNBQVNQLEVBQWFZLEdBQ3BCLElBQUlDLEVBQVMsSUFHYixHQUZBQSxHQVNGLFNBQXVCQyxHQUNyQixNQUFNQyxFQUFhLGlFQUNuQixJQUFJRixFQUFTLEdBRWIsSUFBSyxJQUFJRyxFQUFJLEVBQUdBLEVBYk0sRUFhTUEsSUFHMUJILEdBQVVFLEdBRnFCLEdBQWhCRSxLQUFLQyxVQUNDQyxXQUl2QixPQUFPTixDQUNULENBcEJXTyxHQVBvQkMsRUFTRlIsSUFUTFMsRUFTSlYsSUFQWFUsRUFBTUMsT0FBT3JCLEdBQVNBLEVBQUttQixLQUFPQSxJQVF2QyxPQUFPUixFQVZYLElBQXdCUyxFQUFPRCxFQVkzQnJCLEVBQWFZLEVBRWpCLENDL0NBLFNBQVNZLEVBQWFDLEdBQ3BCLElBQUlBLEVBQUlDLGVBQWUsUUFBUyxPQUNoQyxNQUFNYixFQUFTYyxTQUFTQyxjQUFlSCxFQUFJSSxNQUUzQyxJQUFLLE1BQU1DLEtBQU9MLEVBQ0gsU0FBUkssR0FDQUMsT0FBT0wsZUFBZU0sS0FBS1AsRUFBS0ssS0FDckNqQixFQUFPaUIsR0FBT0wsRUFBSUssSUFHcEIsT0FBT2pCLENBQ1QsQ0NUQSxNQUFNb0IsRUFBa0JULEVBQVksQ0FDbENLLEtBQU0sTUFDTkssVUFBVyxDQUFDLHFCQUdkRCxFQUFnQkUsT0RNaEIsU0FBbUJDLEdBR2pCLE1BQU12QixFQUFTYyxTQUFTQyxjQUFjLFlBS3RDLE9BSkFmLEVBQU9xQixVQUFVRyxJQUFJLEtBQUssWUFDMUJ4QixFQUFPeUIsYUFBYSxPQUFRLE9BQzVCekIsRUFBT3lCLGFBQWEsT0FBUUYsR0FFckJ2QixDQUNULENDZEUwQixDQUFTLGVBQ1RmLEVBQVksQ0FDVkssS0FBTSxPQUNOVyxZQUFhLGFBQ2JOLFVBQVcsQ0FBQyxlQ1ZoQixNQUFNTyxFQUFTakIsRUFBWSxDQUFDSyxLQUFNLFdBQ2xDWSxFQUFPTixPQUNMWCxFQUFZLENBQ1ZLLEtBQU0sTUFDTmEsSUFBSyxzQ0FFUGxCLEVBQVksQ0FDVkssS0FBTSxPQUNOVyxZQUFhLFlBSWpCLE1BQU1HLEVBQVNuQixFQUFZLENBQUNLLEtBQU0sUUFDbENjLEVBQU9SLE9BQ0xYLEVBQVksQ0FDVkssS0FBTSxPQUNOVyxZQUFhLGdCQUlqQixJQUFJSSxFQUFPcEIsRUFBWSxDQUFDSyxLQUFNLFNBVTlCLFNBQVNnQixFQUFnQkMsR0FDdkJGLEVBQUtHLFlBQWFELEdBQ2xCRixFQUFPRSxDQUNULENBVkVuQixTQUFTcUIsS0FBS2IsT0FDWk0sRUFDQUUsRUFDQUMsR0NwQkosTUFBTUssRUNSTyxFQUFFdEQsRUFBT3VELEVBQWMsR0FBSUMsRUFBU0MsRUFBVyxLQUUxRCxNQUFNQyxFQWlCUixXQUNFLElBQUlDLEVBQVcsR0FVZixNQUFPLENBQ0xDLFlBVEYsV0FDRSxPQUFPRCxDQUNULEVBUUVFLFdBTkYsU0FBcUJDLEdBQ25CSCxFQUFTbkQsS0FBTXNELEVBQ2pCLEVBTUYsQ0FoQ3lCQyxHQUNqQkMsRUFpQ1IsV0FDRSxJQUFJUixFQUFVLEtBa0JkLE1BQU8sQ0FDTFMsV0FqQkYsU0FBcUJDLEdBQ25CLE1BQU1DLEVBQVUsSUFBSUMsS0FBTUYsSUFXNUIsU0FBc0JBLEdBQ3BCLE9BQVFHLE1BQU9ILEVBQ2pCLENBWE1JLENBQVlILEdBRVRyRCxRQUFReUQsS0FBSyw4QkFEbEJmLEVBQVVXLENBRWQsRUFZRUssV0FWRixXQUNFLE9BQU9oQixDQUNULEVBVUYsQ0F4RHNCaUIsR0FLcEIsT0FKQVQsRUFBWUMsV0FBWVQsR0FJakJwQixPQUFPc0MsT0FBTyxDQUNuQjFFLFFBQ0F1RCxjQUNBb0IsUUFMVyxFQU1YbEIsWUFFQUMsRUFDQU0sRUFDRixFRFJZWSxDQUFLLFVBQ2JDLEVBQVU5RSxFQUFPLGFBQ2pCK0UsRUFBVS9FLEVBQU8sYUFDdkI4RSxFQUFRdkUsUUFBUWdELEdBQ2hCLElBQUl5QixFQUFVLENBQUNGLEVBQVNDLEdBRXhCLE1BQU0sRUFBUzlDLFNBQVNnRCxjQUFjLE9BRWhDQyxFRkFOLFNBQXdCRixHQUN0QixNQUFNOUIsRUFBT3BCLEVBQVksQ0FBQ0ssS0FBTSxTQUdoQyxPQUZBZSxFQUFLVCxPQUFRRixHQUVSeUMsR0FFTEEsRUFBUUcsU0FBU0MsSUFDZixNQUFNQyxFQU9WLFNBQXlCQyxHQUN2QixNQUFNbkUsRUFBU1csRUFBWSxDQUN6QkssS0FBTSxNQUNOSyxVQUFXLENBQUMsaUJBR2RyQixFQUFPb0UsUUFBUWxGLElBQU1pRixFQUFPakYsSUFDNUIsSUFBSW1GLEVBQVlGLEVBQU81RSxXQUFXVSxPQWNsQyxPQVpBRCxFQUFPc0IsT0FDTFgsRUFBWSxDQUNWSyxLQUFNLEtBQ05XLFlBQWF3QyxFQUFPckYsTUFDcEJ1QyxVQUFXLENBQUMsV0FFZFYsRUFBWSxDQUNWSyxLQUFNLE9BQ05LLFVBQVcsQ0FBQyxZQUNaTSxhQU1vQjJDLEVBTlNELEVBUTFCLEdBQUdDLEtBRGUsSUFBVkEsRUFBYyxPQUFTLGNBSi9CdEUsRUFHVCxJQUEwQnNFLENBRjFCLENBN0JpQkMsQ0FBZ0JOLEdBQzdCbEMsRUFBS1QsT0FBUTRDLEVBQUssSUFHYm5DLEdBUGNBLENBUXZCLENFWmtCeUMsQ0FBYyxDQUFDYixFQUFTQyxJQUMxQzVCLEVBQWdCK0IsR0FFSWpELFNBQVMyRCxpQkFBaUIsV0FDbENULFNBQVNHLElBQ25CQSxFQUFPTyxpQkFBaUIsU0FBUyxLQWlCbkMsSUFBeUJsRSxHQVZ6QixTQUF5QjJELEdBQ3ZCLE1BQU1RLEVBQVM3RCxTQUFTQyxjQUFjLFFBQ3RDNEQsRUFBT2hELFlBQWN3QyxFQUFPckYsTUFDNUI2RixFQUFPUCxRQUFRbEYsSUFBTWlGLEVBQU9qRixJQUU1QixFQUFPb0MsT0FBUXFELEdBQ2YsTUFBTUMsRUVoQ1IsU0FBeUJULEdBS3ZCLE9BSmF4RCxFQUFZLENBQ3ZCSyxLQUFNLE9BQ05XLFlBQWEsU0FBU3dDLEVBQU9yRixTQUdqQyxDRjBCcUIrRixDQUFnQlYsR0FDbkNuQyxFQUFnQjRDLEVBQ2xCLENBWklFLEVBY3FCdEUsRUFoQlYyRCxFQUFPQyxRQUFRbEYsSUFpQnJCMkUsRUFBUWtCLE1BQU05QyxHQUFZQSxFQUFRL0MsTUFBUXNCLEtBZnZCLEdBQ3pCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5L2RvbS11dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5L2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS9mb2xkZXItdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBGb2xkZXIgfVxuXG5jb25zdCBGb2xkZXIgPSAodGl0bGUsIGNvbG9yID0gbnVsbCwgaWNvbiA9IG51bGwpID0+IHtcblxuICBsZXQgdGFza3MgPSBbXVxuICBjb25zdCB1aWQgPSBnZW5lcmF0ZVVpZCgpXG5cbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdWlkID0gZ2VuZXJhdGVVaWQoIHRhc2tzICk7XG4gICAgdGFzay51aWQgPSB1aWQ7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2soIHRhc2tVaWQgKXtcbiAgICBjb25zdCBpc1RhcmdldCA9ICh0YXNrKSA9PiAgdGFzay51aWQgPT09IHRhc2tVaWQ7XG4gICAgY29uc3QgaW5kZXggPSB0YXNrcy5maW5kSW5kZXgoIGlzVGFyZ2V0IClcbiAgICBjb25zb2xlLmxvZyh7aW5kZXh9KVxuICAgIGlmIChpbmRleCA+PSAwKSB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRUYXNrcygpe1xuICAgIHJldHVybiB0YXNrc1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBjb2xvcixcbiAgICBpY29uLFxuICAgIHVpZCxcbiAgICBhZGRUYXNrLFxuICAgIGdldFRhc2tzLFxuICAgIHJlbW92ZVRhc2tcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0lkQXZhaWxhYmxlKCBhcnJheSwgaWQgKXtcbiAgaWYgKCFhcnJheSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGFycmF5LmV2ZXJ5KCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCApO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVpZCggaWRBcnJheSApe1xuICBsZXQgb3V0cHV0ID0gJ2knXG4gIG91dHB1dCs9IHJhbmRvbVN0cmluZyg2KTtcblxuICBpZiggaXNJZEF2YWlsYWJsZShpZEFycmF5LCBvdXRwdXQpICl7XG4gICAgcmV0dXJuIG91dHB1dFxuICB9IGVsc2Uge1xuICAgIGdlbmVyYXRlVWlkKCBpZEFycmF5IClcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21TdHJpbmcoIGxlbmd0aCApe1xuICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgbGV0IG91dHB1dCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKGNoYXJhY3RlcnMubGVuZ3RoLTEpIDtcbiAgICBjb25zdCBpbmRleCA9IHJhbmRvbS50b0ZpeGVkKCk7XG4gICAgb3V0cHV0ICs9IGNoYXJhY3RlcnNbaW5kZXhdXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59IiwiZXhwb3J0IHsgbWFrZUVsZW1lbnQsIG1ha2VJY29uIH1cblxuZnVuY3Rpb24gbWFrZUVsZW1lbnQoIG9iaiApe1xuICBpZighb2JqLmhhc093blByb3BlcnR5KCd0eXBlJykpIHJldHVyblxuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBvYmoudHlwZSApXG5cbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKCBrZXkgPT09ICd0eXBlJyApIGNvbnRpbnVlXG4gICAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIGNvbnRpbnVlXG4gICAgb3V0cHV0W2tleV0gPSBvYmpba2V5XTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gbWFrZUljb24oIG5hbWUgKXtcbiAgaWYoIW5hbWUpIHRocm93IG5ldyBFcnJvcignTm8gaWNvbiBuYW1lIHByb3ZpZGVkJylcblxuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnbWQnLCdoeWRyYXRlZCcpXG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnaW1nJylcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpXG5cbiAgcmV0dXJuIG91dHB1dFxufSIsImltcG9ydCB7IG1ha2VFbGVtZW50LCBtYWtlSWNvbiB9IGZyb20gXCIuL2RvbS11dGlsaXR5XCJcblxuZXhwb3J0IHsgbWFrZURhc2hib2FyZCB9XG5cbmNvbnN0IGJ1dHRvbk5ld0ZvbGRlciA9IG1ha2VFbGVtZW50KHtcbiAgdHlwZTogJ2RpdicsXG4gIGNsYXNzTGlzdDogWyduZXctZm9sZGVyIGNhcmQnXVxufSlcblxuYnV0dG9uTmV3Rm9sZGVyLmFwcGVuZChcbiAgbWFrZUljb24oJ2FkZC1vdXRsaW5lJyksXG4gIG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiAnc3BhbicsXG4gICAgdGV4dENvbnRlbnQ6ICdOZXcgRm9sZGVyJyxcbiAgICBjbGFzc0xpc3Q6IFsnc3VidGl0bGUnXVxuICB9KSxcbilcblxuZnVuY3Rpb24gbWFrZURhc2hib2FyZCggZm9sZGVycyApe1xuICBjb25zdCBtYWluID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdtYWluJ30pXG4gIG1haW4uYXBwZW5kKCBidXR0b25OZXdGb2xkZXIgKVxuXG4gIGlmICghZm9sZGVycykgcmV0dXJuIG1haW5cblxuICBmb2xkZXJzLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBtYWtlRm9sZGVyQ2FyZCggaXRlbSApXG4gICAgbWFpbi5hcHBlbmQoIGNhcmQgKVxuICB9KTtcblxuICByZXR1cm4gbWFpblxufVxuXG5mdW5jdGlvbiBtYWtlRm9sZGVyQ2FyZCggZm9sZGVyICl7XG4gIGNvbnN0IG91dHB1dCA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiAnZGl2JyxcbiAgICBjbGFzc0xpc3Q6IFsnZm9sZGVyIGNhcmQnXVxuICB9KVxuICBcbiAgb3V0cHV0LmRhdGFzZXQudWlkID0gZm9sZGVyLnVpZFxuICBsZXQgaXRlbUNvdW50ID0gZm9sZGVyLmdldFRhc2tzKCkubGVuZ3RoXG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICBtYWtlRWxlbWVudCh7XG4gICAgICB0eXBlOiAnaDMnLFxuICAgICAgdGV4dENvbnRlbnQ6IGZvbGRlci50aXRsZSxcbiAgICAgIGNsYXNzTGlzdDogWyd0aXRsZSddXG4gICAgfSksXG4gICAgbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogJ3NwYW4nLFxuICAgICAgY2xhc3NMaXN0OiBbJ3N1YnRpdGxlJ10sXG4gICAgICB0ZXh0Q29udGVudDogZm9ybWF0SXRlbUNvdW50KGl0ZW1Db3VudClcbiAgICB9KVxuICApXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gZm9ybWF0SXRlbUNvdW50KCBjb3VudCApe1xuICBjb25zdCBzdWZmaXggPSBjb3VudCA9PT0gMSA/ICd0YXNrJyA6ICd0YXNrcydcbiAgcmV0dXJuIGAke2NvdW50fSAke3N1ZmZpeH1gXG59IiwiaW1wb3J0IHsgbWFrZURhc2hib2FyZCB9IGZyb20gXCIuL2Rhc2hib2FyZFwiO1xuaW1wb3J0IHsgbWFrZUVsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbGl0eVwiO1xuZXhwb3J0IHsgbG9hZFBhZ2UsIHNldFBhZ2VDb250ZW50IH1cblxuY29uc3QgaGVhZGVyID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdoZWFkZXInfSk7XG5oZWFkZXIuYXBwZW5kKFxuICBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogJ2ltZycsIFxuICAgIHNyYzogJ2h0dHBzOi8vaW1nLmxvZ29pcHN1bS5jb20vMjQ2LnN2ZydcbiAgfSksXG4gIG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiAnc3BhbicsIFxuICAgIHRleHRDb250ZW50OiAnVE8gREVXJ1xuICB9KVxuKVxuXG5jb25zdCBuYXZCYXIgPSBtYWtlRWxlbWVudCh7dHlwZTogJ25hdid9KTtcbm5hdkJhci5hcHBlbmQoXG4gIG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiAnc3BhbicsXG4gICAgdGV4dENvbnRlbnQ6ICdNeSBGb2xkZXJzJ1xuICB9KVxuKVxuXG5sZXQgbWFpbiA9IG1ha2VFbGVtZW50KHt0eXBlOiAnbWFpbid9KTtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKFxuICAgIGhlYWRlcixcbiAgICBuYXZCYXIsXG4gICAgbWFpblxuICApXG59XG5cbmZ1bmN0aW9uIHNldFBhZ2VDb250ZW50KCBlbGVtZW50ICkge1xuICBtYWluLnJlcGxhY2VXaXRoKCBlbGVtZW50IClcbiAgbWFpbiA9IGVsZW1lbnRcbn1cbiIsImltcG9ydCB7IEZvbGRlciB9IGZyb20gXCIuL2xvZ2ljL2ZvbGRlclwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL2xvZ2ljL3Rhc2tcIjtcbmltcG9ydCB7IGxvYWRQYWdlLCBzZXRQYWdlQ29udGVudCB9IGZyb20gXCIuL2Rpc3BsYXkvaG9tZVwiO1xuaW1wb3J0IHsgbWFrZURhc2hib2FyZCB9IGZyb20gXCIuL2Rpc3BsYXkvZGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBtYWtlRm9sZGVyVmlldyB9IGZyb20gXCIuL2Rpc3BsYXkvZm9sZGVyLXZpZXdcIjtcbmltcG9ydCB7IG1ha2VFbGVtZW50IH0gZnJvbSBcIi4vZGlzcGxheS9kb20tdXRpbGl0eVwiO1xuXG5sb2FkUGFnZSgpXG5cbi8vIGhhcmRjb2RlZCB0YXNrcy9mb2xkZXJzXG5jb25zdCB0YXNrMSA9IFRhc2soJ1Rhc2sgMScpO1xuY29uc3QgZm9sZGVyMSA9IEZvbGRlcignRXhhbXBsZSAxJyk7XG5jb25zdCBmb2xkZXIyID0gRm9sZGVyKCdFeGFtcGxlIDInKTtcbmZvbGRlcjEuYWRkVGFzayh0YXNrMSlcbmxldCBmb2xkZXJzID0gW2ZvbGRlcjEsIGZvbGRlcjJdO1xuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxuXG5jb25zdCBkYXNoYm9hcmQgPSBtYWtlRGFzaGJvYXJkKFtmb2xkZXIxLCBmb2xkZXIyXSlcbnNldFBhZ2VDb250ZW50KCBkYXNoYm9hcmQgKVxuXG5jb25zdCBmb2xkZXJDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2xkZXInKTtcbmZvbGRlckNhcmRzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICBmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBmb2xkZXIuZGF0YXNldC51aWRcbiAgICBjb25zdCBfZm9sZGVyID0gZmluZEZvbGRlckJ5SWQoaWQpXG4gICAgb3BlbkZvbGRlclZpZXcoIF9mb2xkZXIgKVxuICB9KVxufSlcblxuZnVuY3Rpb24gb3BlbkZvbGRlclZpZXcoIGZvbGRlciApe1xuICBjb25zdCBuYXZUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgbmF2VGFiLnRleHRDb250ZW50ID0gZm9sZGVyLnRpdGxlXG4gIG5hdlRhYi5kYXRhc2V0LnVpZCA9IGZvbGRlci51aWRcblxuICBuYXZCYXIuYXBwZW5kKCBuYXZUYWIgKVxuICBjb25zdCBmb2xkZXJWaWV3ID0gbWFrZUZvbGRlclZpZXcoIGZvbGRlciApO1xuICBzZXRQYWdlQ29udGVudCggZm9sZGVyVmlldyApXG59XG5cbmZ1bmN0aW9uIGZpbmRGb2xkZXJCeUlkKCBpZCApe1xuICByZXR1cm4gZm9sZGVycy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnVpZCA9PT0gaWQpXG59IiwiZXhwb3J0IHsgVGFzayB9IFxuXG5jb25zdCBUYXNrID0gKCB0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSwgcHJpb3JpdHkgPSAwICkgPT4ge1xuXG4gIGNvbnN0IGNvbW1lbnRNYW5hZ2VyID0gQ29tbWVudE1hbmFnZXIoKVxuICBjb25zdCBkYXRlTWFuYWdlciA9IERhdGVNYW5hZ2VyKClcbiAgZGF0ZU1hbmFnZXIuc2V0RHVlRGF0ZSggZHVlRGF0ZSApXG5cbiAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpc0RvbmUsXG4gICAgcHJpb3JpdHlcbiAgICB9LFxuICAgIGNvbW1lbnRNYW5hZ2VyLFxuICAgIGRhdGVNYW5hZ2VyXG4gIClcbn1cblxuZnVuY3Rpb24gQ29tbWVudE1hbmFnZXIoKSB7XG4gIGxldCBjb21tZW50cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldENvbW1lbnRzKCl7XG4gICAgcmV0dXJuIGNvbW1lbnRzXG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tZW50KCBjb21tZW50ICl7XG4gICAgY29tbWVudHMucHVzaCggY29tbWVudCApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldENvbW1lbnRzLFxuICAgIGFkZENvbW1lbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBEYXRlTWFuYWdlcigpe1xuICBsZXQgZHVlRGF0ZSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc2V0RHVlRGF0ZSggaW5wdXQgKXtcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoIGlucHV0ICk7XG5cbiAgICBpZiggZGF0ZUlzVmFsaWQobmV3RGF0ZSkgKSB7XG4gICAgICBkdWVEYXRlID0gbmV3RGF0ZVxuICAgIH0gZWxzZSBjb25zb2xlLndhcm4oJ0RhdGUgbm90IHNldDogSW52YWxpZCBkYXRlJyk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGdldER1ZURhdGUoKXtcbiAgICByZXR1cm4gZHVlRGF0ZVxuICB9XG5cbiAgZnVuY3Rpb24gZGF0ZUlzVmFsaWQoIGlucHV0ICl7XG4gICAgcmV0dXJuICFpc05hTiggaW5wdXQgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0RHVlRGF0ZSxcbiAgICBnZXREdWVEYXRlXG4gIH1cbn0iLCJpbXBvcnQgeyBtYWtlRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlsaXR5XCJcblxuZXhwb3J0IHsgbWFrZUZvbGRlclZpZXcgfVxuXG5mdW5jdGlvbiBtYWtlRm9sZGVyVmlldyggZm9sZGVyICl7XG4gIGNvbnN0IG1haW4gPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogJ21haW4nLFxuICAgIHRleHRDb250ZW50OiBgSGVsbG8gJHtmb2xkZXIudGl0bGV9YFxuICB9KVxuICByZXR1cm4gbWFpblxufSJdLCJuYW1lcyI6WyJGb2xkZXIiLCJ0aXRsZSIsImNvbG9yIiwiaWNvbiIsInRhc2tzIiwidWlkIiwiZ2VuZXJhdGVVaWQiLCJhZGRUYXNrIiwidGFzayIsInB1c2giLCJnZXRUYXNrcyIsInJlbW92ZVRhc2siLCJ0YXNrVWlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwiaWRBcnJheSIsIm91dHB1dCIsImxlbmd0aCIsImNoYXJhY3RlcnMiLCJpIiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJyYW5kb21TdHJpbmciLCJpZCIsImFycmF5IiwiZXZlcnkiLCJtYWtlRWxlbWVudCIsIm9iaiIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImtleSIsIk9iamVjdCIsImNhbGwiLCJidXR0b25OZXdGb2xkZXIiLCJjbGFzc0xpc3QiLCJhcHBlbmQiLCJuYW1lIiwiYWRkIiwic2V0QXR0cmlidXRlIiwibWFrZUljb24iLCJ0ZXh0Q29udGVudCIsImhlYWRlciIsInNyYyIsIm5hdkJhciIsIm1haW4iLCJzZXRQYWdlQ29udGVudCIsImVsZW1lbnQiLCJyZXBsYWNlV2l0aCIsImJvZHkiLCJ0YXNrMSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiY29tbWVudE1hbmFnZXIiLCJjb21tZW50cyIsImdldENvbW1lbnRzIiwiYWRkQ29tbWVudCIsImNvbW1lbnQiLCJDb21tZW50TWFuYWdlciIsImRhdGVNYW5hZ2VyIiwic2V0RHVlRGF0ZSIsImlucHV0IiwibmV3RGF0ZSIsIkRhdGUiLCJpc05hTiIsImRhdGVJc1ZhbGlkIiwid2FybiIsImdldER1ZURhdGUiLCJEYXRlTWFuYWdlciIsImFzc2lnbiIsImlzRG9uZSIsIlRhc2siLCJmb2xkZXIxIiwiZm9sZGVyMiIsImZvbGRlcnMiLCJxdWVyeVNlbGVjdG9yIiwiZGFzaGJvYXJkIiwiZm9yRWFjaCIsIml0ZW0iLCJjYXJkIiwiZm9sZGVyIiwiZGF0YXNldCIsIml0ZW1Db3VudCIsImNvdW50IiwibWFrZUZvbGRlckNhcmQiLCJtYWtlRGFzaGJvYXJkIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZUYWIiLCJmb2xkZXJWaWV3IiwibWFrZUZvbGRlclZpZXciLCJvcGVuRm9sZGVyVmlldyIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9