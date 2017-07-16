function bm_display_update()
{
  /* This is a kludge to get around the fact that the latest
     Safari seems to have problems updating the display when
     attributes are changed. */
  
  fdjtRedisplay($$(".subpage"));
  fdjtRedisplay($$("A",$("LEFTCOL")));
}

function bm_leftcol_mouseover(evt)
{
  var target=evt.target;
  var body=document.body;
  while (target)
    if ((target.hasAttribute) && (target.hasAttribute('subpage')))
      break;
    else target=target.parentNode;
  /* Not over an actual entry */
  if (target==null) return;
  var subpage=target.getAttribute('subpage');
  if (subpage==null) return;
  if (subpage==(body.getAttribute('seepage'))) return;
  body.setAttribute('preview','yes');
  body.setAttribute('seepage',subpage);
  bm_display_update();
}

function bm_leftcol_mouseout(evt)
{
  var target=evt.target;
  var body=document.body;
  var subpage=body.getAttribute('curpage');
  var seepage=body.getAttribute('curpage');
  if (subpage!=seepage)
    document.body.setAttribute('seepage',subpage);
  body.removeAttribute('preview');
  bm_display_update();
}

function bm_leftcol_click(evt)
{
  var target=evt.target;
  var body=document.body;
  while (target)
    if ((target.hasAttribute) && (target.hasAttribute('subpage')))
      break;
    else target=target.parentNode;
  // Not over an actual entry
  if ((target==null)) return true;
  // This all make sure that the browser follows the HREF if
  // the page doesn't contain the content it would otherwise
  // simply reveal.
  var subpage=target.getAttribute('subpage');
  // fdbMessage('subpage='+subpage);
  if (subpage==null) return true;
  body.setAttribute('curpage',subpage);
  body.setAttribute('seepage',subpage);
  body.removeAttribute('preview');
  bm_display_update();
  // evt.preventDefault(); evt.cancelBubble=true;
  // return false;
  return false;
}



