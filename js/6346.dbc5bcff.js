"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[6346],{11245:function(e){e.exports=function(e){if(e&&e.length)for(const s of e){let e;switch(s.keyword){case"additionalItems":case"items":e="";var a=s.params.limit;e+="non dovrebbe avere più di "+a+" element",e+=1==a?"o":"i";break;case"additionalProperties":e="non deve avere attributi aggiuntivi";break;case"anyOf":e='deve corrispondere ad uno degli schema in "anyOf"';break;case"const":e="deve essere uguale alla costante";break;case"contains":e="deve contentere un elemento valido";break;case"dependencies":case"dependentRequired":e="";a=s.params.depsCount;e+="dovrebbe avere ",e+=1==a?"l'":"gli ",e+="attribut",e+=1==a?"o":"i",e+=" "+s.params.deps+" quando l'attributo "+s.params.property+" è presente";break;case"discriminator":switch(s.params.error){case"tag":e='il tag "'+s.params.tag+'" deve essere di tipo stringa';break;case"mapping":e='il valore del tag "'+s.params.tag+'" deve essere nei oneOf';break;default:e='deve essere valido secondo il criterio "'+s.keyword+'"'}break;case"enum":e="deve essere uguale ad uno dei valori consentiti";break;case"false schema":e="lo schema booleano è falso";break;case"format":e='deve corrispondere al formato "'+s.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":e="";var r=s.params.comparison+" "+s.params.limit;e+="deve essere "+r;break;case"formatMinimum":case"formatExclusiveMinimum":e="";r=s.params.comparison+" "+s.params.limit;e+="deve essere "+r;break;case"if":e='deve corrispondere allo schema "'+s.params.failingKeyword+'"';break;case"maximum":case"exclusiveMaximum":e="";r=s.params.comparison+" "+s.params.limit;e+="deve essere "+r;break;case"maxItems":e="";a=s.params.limit;e+="non deve avere più di "+a+" element",e+=1==a?"o":"i";break;case"maxLength":e="";a=s.params.limit;e+="non deve essere più lungo di "+a+" caratter",e+=1==a?"e":"i";break;case"maxProperties":e="";a=s.params.limit;e+="non deve avere più di "+a+" attribut",e+=1==a?"o":"i";break;case"minimum":case"exclusiveMinimum":e="";r=s.params.comparison+" "+s.params.limit;e+="deve essere "+r;break;case"minItems":e="";a=s.params.limit;e+="non deve avere meno di "+a+" element",e+=1==a?"o":"i";break;case"minLength":e="";a=s.params.limit;e+="non deve essere meno lungo di "+a+" caratter",e+=1==a?"e":"i";break;case"minProperties":e="";a=s.params.limit;e+="non deve avere meno di "+a+" attribut",e+=1==a?"o":"i";break;case"multipleOf":e="deve essere un multiplo di "+s.params.multipleOf;break;case"not":e='non deve essere valido in base allo schema di "non"';break;case"oneOf":e='deve corrispondere esattamente ad uno degli schema in "oneOf"';break;case"pattern":e='deve corrispondere al formato "'+s.params.pattern+'"';break;case"patternRequired":e='deve avere un attributo che corrisponda al formato "'+s.params.missingPattern+'"';break;case"propertyNames":e="il nome dell'attritbuto non è valido";break;case"required":e="deve avere l'attributo obbligatorio "+s.params.missingProperty;break;case"type":e="deve essere di tipo "+s.params.type;break;case"unevaluatedItems":e="";a=s.params.len;e+="non deve avere più di "+a+" elementi",e+=1==a?"o":"i";break;case"unevaluatedProperties":e="non deve avere attributi non valutati";break;case"uniqueItems":e="non deve avere duplicati (gli elementi ## "+s.params.j+" e "+s.params.i+" sono uguali)";break;default:e='deve essere valido secondo il criterio "'+s.keyword+'"'}s.message=e}}},66346:function(e,a,r){r.r(a),a["default"]=r(11245)}}]);
//# sourceMappingURL=6346.dbc5bcff.js.map