var t = ((window.getSelection&&window.getSelection())||(document.getSelection&&document.getSelection())||(document.selection&&document.selection.createRange&&document.selection.createRange().text)).toString()||document.body.innerText;
var f = document.createElement("form");
f.action = "https://gengo.com/order/receive_job_post/";
f.method = "post";
f.style.display = "none";
var i = document.createElement("input");
i.type = "text";
i.name = "body_src";
i.value = t;
f.appendChild(i);
document.body.appendChild(f);
f.submit();
