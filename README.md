gengo-bookmarklet
=================
This bookmarklet captures a selected text (or the entire text if not selected) on the browser
and post it to the page of the Gengo order form.
The text will appear as an entry of the order list.

## How do I install it?

1. Show the bookmark bar of your browser.
2. Drag
<pre>
<a href='javascript:(function(){var t=((window.getSelection&&window.getSelection())||(document.getSelection&&document.getSelection())||(document.selection&&document.selection.createRange&&document.selection.createRange().text)).toString()||document.body.innerText;var f=document.createElement("form");f.action="https://gengo.com/order/receive_job_post/";f.method="post";var i=document.createElement("input");i.type="text";i.name="body_src";i.value=t;f.appendChild(i);document.body.appendChild(f);f.submit();})();'>this link</a>
</pre>
to the bookmark bar.

## How do I use it?

1. Select text in your browser. Select nothing if you mean all the text.
2. Click the bookmarklet on the bookmark bar.

set_order_form.js is the content of the bookmarklet.
