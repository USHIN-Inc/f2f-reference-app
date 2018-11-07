// 	function hde() {document.getElementById("sm").style.color = "#fbd";}
// 	function out() {document.getElementById("sm").innerHTML = "Hover over shapes to see what they mean.";document.getElementById("sm").style.color = "#9ea";}
// 	function mOver() {document.getElementById("sm").innerHTML = "<b>MERITS:</b><br />User valuations of how well the focus meets stated needs...";hde();}
// 	function aOver() {document.getElementById("sm").innerHTML = "<b>ACTIONS:</b><br />Proposed and current activities prior to completion or rejection, to-dos, tasks...";hde();}
// 	function pOver() {document.getElementById("sm").innerHTML = "<b>PEOPLE:</b><br />Individuals and their chosen groups, identities, communities, companies...";hde();}
// 	function fOver() {document.getElementById("sm").innerHTML = "<b>FACTS:</b><br />Dates, places, things, documents, experiences, accomplishments, completed or rejected actions...";hde();}
// 	function oOver() {document.getElementById("sm").innerHTML = "<b>THOUGHTS:</b><br />Concepts, beliefs, opinions, analyses,  ideas, concerns...";hde();}
// 	function eOver() {document.getElementById("sm").innerHTML = "<b>FEELINGS:</b><br />Sentiments, emotions, states of mind...";hde();}
// 	function nOver() {document.getElementById("sm").innerHTML = "<b>NEEDS:</b><br />Physical, emotional, social, or spiritual necessities for self, group & others...";hde();}
// 	function tOver() {document.getElementById("sm").innerHTML = "<b>TOPICS:</b><br />Projects, issues, subjects, ideas, matters, protocols, transactions...";hde();}

(function($){
	$('.shape').hover(function(e){
		console.log(e);
	}, function(e){
		console.log(e);
	});
})(jQuery);
