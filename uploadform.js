var n_files=1;

function addFileRow(evt){
    evt=evt||event;
    // Don't submit the form!
    if (evt)  fdjtUI.cancel(evt);
    n_files++;
    var file_input=fdjtDOM("INPUT");
    file_input.type="FILE";
    file_input.name="FILE"+n_files;
    var hidden_input=fdjtDOM("INPUT");
    hidden_input.type="HIDDEN";
    hidden_input.name="FILES";
    hidden_input.value="FILE"+n_files;
    var row=
	fdjtDOM("TR",fdjtDOM("TH",n_files),
		fdjtDOM("TD",hidden_input,file_input),
		fdjtDOM("TD"));
    var last_row=fdjtID("LASTROW");
    last_row.parentNode.insertBefore(row,last_row);}

    