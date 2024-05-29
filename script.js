
function generateDynamicIframeSource(x){

    document.getElementById("supposeriframe").innerHTML = '<link rel="stylesheet" href="iframestyle.css" />';

    switch (x) {
        case "b1":
        var dynamicSource = "kissas/a.pdf";
        break;
        case "b2":
        var dynamicSource = "kissas/b.pdf";
        break;
        case "b3":
        var dynamicSource = "kissas/c.pdf";
        break;
        case "b5":
        var dynamicSource = "kissas/d.pdf";
        break;
        case "b6":
        var dynamicSource = "kissas/e.pdf";
        break;
        case "b7":
        var dynamicSource = "kissas/q.pdf";
        break;
        case "b8":
        var dynamicSource = "kissas/r.pdf";
        break;
        case "b9":
        var dynamicSource = "kissas/f.pdf";
        break;
        case "b10":
        var dynamicSource = "kissas/g.pdf";
        break;
        case "b11":
        var dynamicSource = "kissas/h.pdf";
        break;
        case "b12":
        var dynamicSource = "kissas/i.pdf";
        break;
        case "b13":
        var dynamicSource = "kissas/j.pdf";
        break;
        case "b14":
        var dynamicSource = "kissas/k.pdf";
        break;
        case "b15":
        var dynamicSource = "kissas/l.pdf";
        break;
        case "b16":
        var dynamicSource = "kissas/m.pdf";
        break;
        case "b17":
        var dynamicSource = "kissas/n.pdf";
        break;
        case "b18":
        var dynamicSource = "kissas/o.pdf";
        break;
        case "b19":
        var dynamicSource = "kissas/p.pdf";
        break;
        case "b20":
        var dynamicSource = "kissas/s.pdf";
        break;
        case "b21":
        var dynamicSource = "kissas/t.pdf";
        break;
        case "b22":
        var dynamicSource = "kissas/u.pdf";
        break;
        case "b23":
        var dynamicSource = "kissas/v.pdf";
        break;
        case "b24":
        var dynamicSource = "kissas/w.pdf";
        break;
        case "b25":
        var dynamicSource = "kissas/x.pdf";
        break;
    }

    document.getElementById("dynamicIframe").src = dynamicSource;

}

function formSubmit(){
    document.ourform.submit();
    document.ourform.reset();
    return false;
}

feather.replace();
