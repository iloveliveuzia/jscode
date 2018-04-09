'use strict';
console.log("start");
const LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('./input/dataSet.csv');//chtec

const data = [];//dannue
const top10word = {};
const top10twits = [];
const top10aut = {};
const top10county = {};

lr.on('error', function (err) {
    // 'err' contains error object
});

function compareRTS(a, b) {
  return b.rts - a.rts;
}


function compareC(a, b) {
  return b.c - a.c;
}
let b = 0;
lr.on('line', function (line) {
    // pause emitting of lines...
    lr.pause();

    // ...do your asynchronous line processing..
    setTimeout(function () {
        // ...and continue emitting lines.
		let mas = line.split(';');
		if (mas[6]!=undefined){
		let word = mas[6].split(/[-@!?:; ,.\n\s]/);
			/*calculating words*/
			for (let i=0;i<word.length;i++){
				top10word[word[i]]=word[i] in top10word?top10word[word[i]]+1:0;//koroche schetchik
			}
		}
		top10twits.push({'id':mas[0],'rts':mas[8]})
		top10aut[mas[3]]=mas[3] in top10aut?top10aut[mas[3]]+mas[8]:0;
        data.push(line);
        lr.resume();
    }, 100);
});

lr.on('end', function () {
    // All lines are read, file is closed now.
    main();
});

function main () {
	let amas = [];
	for (let i in top10aut){
		amas.push({'w':i,'c':top10aut[i]});
	}
	let wmas = [];
	for (let i in top10word){
		wmas.push({'w':i,'c':top10word[i]});
	}
	amas.sort(compareC);
	wmas.sort(compareC);
	console.log('words:');
	for (let i=0;i<10;i++){
		console.log(wmas[i]);
	}
	console.log('twits');
	top10twits.sort(compareRTS);
	for (let i=0;i<10;i++){
		console.log(top10twits[i]);
	}
	console.log('authors:');
	for (let i=0;i<10;i++){
		console.log(amas[i]);
	}
	
	console.log("flush end");
}