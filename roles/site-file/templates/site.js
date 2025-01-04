
//////////
// site //
//////////

function addGlow($input) {
  $input.classList.add('glowSuccess');
  $input.classList.remove('glowError');
}

function removeGlow($input) {
  $input.classList.remove('glowSuccess');
  $input.classList.remove('glowError');
}

function addError($input) {
  $input.classList.remove('glowSuccess');
  $input.classList.add('glowError');
}

function paramChange(classSimpleName, input, div) {
	if(input.value)
		div.innerText = input.getAttribute('data-var') + "=" + encodeURIComponent(input.value);
	else
		div.innerText = "";
	searchPage(classSimpleName);
}

function qChange(classSimpleName, input, div) {
	if(input.value)
		div.innerText = "q=" + input.getAttribute('data-var') + ":" + encodeURIComponent(input.value);
	else
		div.innerText = "";
	searchPage(classSimpleName);
}

function fqChange(classSimpleName, elem) {
	if(elem.value)
		document.querySelector("#pageSearchVal-" + elem.getAttribute("id")).innerText = "fq=" + elem.getAttribute('data-var') + ":" + encodeURIComponent(elem.value);
	else
		document.querySelector("#pageSearchVal-" + $(elem).getAttribute("id")).innerText = "";
	searchPage(classSimpleName);
}

function fqReplace(classSimpleName, elem) {
	var $fq = document.querySelector('#fq' + elem.getAttribute('data-class') + '_' + elem.getAttribute('data-var'));
	$fq.val(elem.getAttribute('data-val'));
	fqChange(classSimpleName, $fq[0]);
}

function facetFieldChange(classSimpleName, elem) {
	if(elem.getAttribute("data-clear") === "false") {
		document.querySelector("#pageSearchVal-" + elem.getAttribute("id")).innerText = "facet.field=" + elem.getAttribute('data-var');
		elem.setAttribute("data-clear", "true");
	} else {
		document.querySelector("#pageSearchVal-" + elem.getAttribute("id")).innerText = "";
		elem.setAttribute("data-clear", "false");
	}
	searchPage(classSimpleName);
}

function sort(classSimpleName, sortVar, sortOrder) {
	if(sortOrder == '') {
		document.querySelector("#pageSearchVal-pageSort-" + classSimpleName + "-" + sortVar).innerText = "";
	} else {
		document.querySelector("#pageSearchVal-pageSort-" + classSimpleName + "-" + sortVar).innerText = "sort=" + encodeURIComponent(sortVar) + " " + sortOrder;
	}
	searchPage(classSimpleName);
}

function facetRangeStartChange(classSimpleName, elem, classSimpleName) {
	facetRangeVal = document.querySelector("input[name='pageFacetRange']:checked").value;
	if(facetRangeVal) {
		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "facet.range.start=" + encodeURIComponent(document.querySelector("#pageFacetRangeStart-" + classSimpleName).value + ":00.000[" + timeZone + "]");
	} else {
		document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "";
	}
	searchPage(classSimpleName);
}

function facetRangeEndChange(classSimpleName, elem, classSimpleName) {
	facetRangeVal = document.querySelector("input[name='pageFacetRange']:checked").value;
	if(facetRangeVal) {
		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "facet.range.end=" + encodeURIComponent(document.querySelector("#pageFacetRangeEnd-" + classSimpleName).value + ":00.000[" + timeZone + "]");
	} else {
		document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "";
	}
	searchPage(classSimpleName);
}

function facetRangeChange(classSimpleName, facetRangeVal) {
	if(facetRangeVal) {
		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		document.querySelector("#pageSearchVal-pageFacetRangeVar-" + classSimpleName).innerText = "facet.range={!tag=r1}" + encodeURIComponent(facetRangeVal);
	} else {
		document.querySelector("#pageSearchVal-pageFacetRangeVar-" + classSimpleName).innerText = "";
	}
	searchPage(classSimpleName);
}

function facetPivotChange(classSimpleName, elem) {
	var $listHidden = document.querySelector("#pageSearchVal-Pivot" + classSimpleName + "Hidden");
	if(elem.is(":checked")) {
		var div = document.createElement("div");
		div.setAttribute("id", "pageSearchVal-Pivot" + classSimpleName + "Hidden_" + elem.value);
		div.setAttribute("class", "pageSearchVal-Pivot" + classSimpleName + "Hidden ");
		div.innerText = elem.value;
		$listHidden.appendChild(div);
	} else {
		document.querySelector("#pageSearchVal-Pivot" + classSimpleName + "Hidden_" + elem.value).remove();
	}
	document.querySelector("#pageSearchVal-Pivot" + classSimpleName + "_1").remove();
	var $list = document.querySelector("#pageSearchVal-Pivot" + classSimpleName);
	var $listHidden = document.querySelector("#pageSearchVal-Pivot" + classSimpleName + "Hidden");
	if($listHidden.children().length > 0) {
		var pivotVal = '';
		$listHidden.children().each(function(index, pivotElem) {
			if(pivotVal)
				pivotVal += ",";
			pivotVal += pivotElem.innerText;
		});
		var div = document.createElement("div");
		div.setAttribute("id", "pageSearchVal-Pivot" + classSimpleName + "_1")
		div.setAttribute("class", "pageSearchVal pageSearchVal-Pivot" + classSimpleName + " ")
		div.innerText = "facet.pivot={!range=r1}" + pivotVal;
		$list.appendChild(div);
	}
	searchPage(classSimpleName);
}

function facetFieldListChange(classSimpleName, elem) {
	var $listHidden = document.querySelector("#pageSearchVal-FieldList" + classSimpleName + "Hidden");
	if(elem.is(":checked")) {
		var div = document.createElement("div");
		div.setAttribute("id", "pageSearchVal-FieldList" + classSimpleName + "Hidden_" + elem.value);
		div.setAttribute("class", "pageSearchVal-FieldList" + classSimpleName + "Hidden ");
		div.innerText = elem.value;
		$listHidden.appendChild(div);
	} else {
		document.querySelector("#pageSearchVal-FieldList" + classSimpleName + "Hidden_" + elem.value).remove();
	}
	document.querySelector("#pageSearchVal-FieldList" + classSimpleName + "_1").remove();
	var $list = document.querySelector("#pageSearchVal-FieldList" + classSimpleName);
	var $listHidden = document.querySelector("#pageSearchVal-FieldList" + classSimpleName + "Hidden");
	if($listHidden.children().length > 0) {
		var div = document.createElement("div");
		div.setAttribute("id", "pageSearchVal-FieldList" + classSimpleName + "_1");
		div.setAttribute("class", "pageSearchVal pageSearchVal-FieldList" + classSimpleName + " ");
		div.innerText = "fl=" + $listHidden.children().toArray().map(elem => elem.innerText).join(",");
		$list.append(div);
	}
	searchPage(classSimpleName);
}

function facetStatsChange(classSimpleName, elem) {
	var $list = document.querySelector("#pageSearchVal-Stats" + classSimpleName);
	if(elem.is(":checked")) {
		var div = document.createElement("div");
		div.setAttribute("id", "pageSearchVal-Stats" + classSimpleName + "_" + elem.value);
		div.setAttribute("class", "pageSearchVal pageSearchVal-Stats" + classSimpleName + "_" + elem.value + " ");
		div.innerText = "stats.field=" + elem.value;
		$list.append(div);
	} else {
		document.querySelector("#pageSearchVal-Stats" + classSimpleName + "_" + elem.value).remove();
	}
	searchPage(classSimpleName);
}

function searchPage(classSimpleName, success, error) {
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};
	var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
	var uri = location.pathname + queryParams;
	fetch(uri).then(response => {
		response.text().then((body) => {
			//var template = document.createElement("template");
			//template.innerHTML = body.substring(body.indexOf("<body"), body.indexOf("</html>"));
			var templateStr = body.substring(body);
			var template = new DOMParser().parseFromString(body, "text/html");
			//var template = document.createElement("<template>" + body.substring(body.indexOf("<body"), body.indexOf("</html>")) + "</template>");
			document.querySelectorAll('.pageFacetField').forEach((facetField, index) => {
				facetField.replaceWith(template.querySelector("." + facetField.getAttribute("id")));
			});
			document.querySelectorAll('.pageStatsField').forEach((statsField, index) => {
				statsField.replaceWith(template.querySelector("." + statsField.getAttribute("id")));
			});
			document.querySelector(".pageContent").replaceWith(template.querySelector(".pageContent"));
			window['pageGraph' + classSimpleName](classSimpleName)
			success(document.querySelector(".pageContent"));
		});
	});
	window.history.replaceState('', '', uri);
}

function searchEscapeQueryChars(s) {
	var sb = "";
	for (let i = 0; i < s.length; i++) {
		var c = s[i];
		// These characters are part of the query syntax and must be escaped
		if (c == '\\' || c == '+' || c == '-' || c == '!' || c == '(' || c == ')' || c == ':' || c == '^'
				|| c == '[' || c == ']' || c == '\"' || c == '{' || c == '}' || c == '~' || c == '*' || c == '?'
				|| c == '|' || c == '&' || c == ';' || c == '/' || /\s/.test(c)) {
			sb += '\\';
		}
		sb += c;
	}
	return sb;
}

///*
//jQuery deparam is an extraction of the deparam method from Ben Alman's jQuery BBQ
//http://benalman.com/projects/jquery-bbq-plugin/
//*/
function deparam(params, coerce) {
  var obj = [],
    coerce_types = { 'true': !0, 'false': !1, 'null': null };
  
  // Iterate over all name=value pairs.
  params.replace(/\+/g, ' ').split('&').forEach(function (v,j) {
  	var param = v.split('='),
  	    key = decodeURIComponent(param[0]),
  	    val,
  	    cur = obj,
  	    i = 0,
	
  	    // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
  	    // into its component parts.
  	    keys = key.split(']['),
  	    keys_last = keys.length - 1;
	
  	// Basic 'foo' style key.
  	keys_last = 0;
  
  	// Are we dealing with a name=value pair, or just a name?
  	if (param.length === 2) {
  	  val = decodeURIComponent(param[1]);
	
  	  // Coerce values.
  	  if (coerce) {
  	    val = val && !isNaN(val)              ? +val              // number
  	        : val === 'undefined'             ? undefined         // undefined
  	        : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
  	        : val;                                                // string
  	  }
  
  	  // Simple key, even simpler rules, since only scalars and shallow
  	  // arrays are allowed.
  
  	  // val is a scalar.
  	  obj.push({name: key, 'value': val});
  	} else if (key) {
  	  // No value was defined, so set something meaningful.
  	  obj.push({name: key, value: (coerce ? undefined : '')});
  	}
  });

return obj;
}

function quoteattr(s, preserveCR) {
    preserveCR = preserveCR ? '&#13;' : '\n';
    return ('' + s) /* Forces the conversion to string. */
        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        /*
        You may add other replacements here for HTML only 
        (but it's not necessary).
        Or for XML, only if the named entities are defined in its DTD.
        */
        .replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
        .replace(/[\r\n]/g, preserveCR);
        ;
}
//
//function unpack(rows, key) {
//    return rows.map(function(row) { return row[key]; });
//}
//
