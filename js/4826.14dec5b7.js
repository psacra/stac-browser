"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[4826],{32293:function(a){a.exports=function(a){if(a&&a.length)for(const r of a){let a;switch(r.keyword){case"additionalItems":case"items":a="";var e=r.params.limit;a+="は"+e+"以上あってはいけない";break;case"additionalProperties":a="追加してはいけない";break;case"anyOf":a='"anyOf"のスキーマとマッチしなくてはいけない';break;case"const":a="must be equal to constant";break;case"contains":a="must contain a valid item";break;case"dependencies":case"dependentRequired":a=r.params.property+"がある場合、";e=r.params.depsCount;a+="は"+r.params.deps+"をつけなければいけない";break;case"discriminator":switch(r.params.error){case"tag":a='tag "'+r.params.tag+'" must be string';break;case"mapping":a='value of tag "'+r.params.tag+'" must be in oneOf';break;default:a='must pass "'+r.keyword+'" keyword validation'}break;case"enum":a="事前に定義された値のいずれかに等しくなければいけない";break;case"false schema":a="boolean schema is false";break;case"format":a='"'+r.params.format+'"形式に揃えなければいけない';break;case"formatMaximum":case"formatExclusiveMaximum":a="";var s=r.params.comparison+" "+r.params.limit;a+="must be "+s;break;case"formatMinimum":case"formatExclusiveMinimum":a="";s=r.params.comparison+" "+r.params.limit;a+="must be "+s;break;case"if":a='must match "'+r.params.failingKeyword+'" schema';break;case"maximum":case"exclusiveMaximum":a="";s=r.params.comparison+" "+r.params.limit;a+=s+"でなければいけない";break;case"maxItems":a="";e=r.params.limit;a+="は"+e+"個以上であってはいけない";break;case"maxLength":a="";e=r.params.limit;a+="は"+e+"文字以上であってはいけない";break;case"maxProperties":a="";e=r.params.limit;a+="は"+e+"個以上のプロパティを有してはいけない";break;case"minimum":case"exclusiveMinimum":a="";s=r.params.comparison+" "+r.params.limit;a+=s+"でなければいけない";break;case"minItems":a="";e=r.params.limit;a+="は"+e+"個以下であってはいけない";break;case"minLength":a="";e=r.params.limit;a+="は"+e+"文字以下であってはいけない";break;case"minProperties":a="";e=r.params.limit;a+="は"+e+"個以下のプロパティを有してはいけない";break;case"multipleOf":a=r.params.multipleOf+"の倍数でなければいけない";break;case"not":a='"not"のスキーマに従って有効としてはいけない';break;case"oneOf":a='"oneOf"のスキーマと完全に一致しなくてはいけない';break;case"pattern":a='"'+r.params.pattern+'"のパターンと一致しなければいけない';break;case"patternRequired":a='must have property matching pattern "'+r.params.missingPattern+'"';break;case"propertyNames":a="property name is invalid";break;case"required":a="必要なプロパティ"+r.params.missingProperty+"がなければいけない";break;case"type":a=r.params.type+"でなければいけない";break;case"unevaluatedItems":a="";e=r.params.len;a+="must NOT have more than "+e+" item",1!=e&&(a+="s");break;case"unevaluatedProperties":a="must NOT have unevaluated properties";break;case"uniqueItems":a="重複するアイテムがあってはいけない（"+r.params.j+"と"+r.params.i+"は同じである）";break;default:a='must pass "'+r.keyword+'" keyword validation'}r.message=a}}},14826:function(a,e,s){s.r(e),e["default"]=s(32293)}}]);
//# sourceMappingURL=4826.14dec5b7.js.map