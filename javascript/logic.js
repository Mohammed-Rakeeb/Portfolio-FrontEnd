// Code credits: this code was written by Dr. Pavol Federl for the SENG 513 course at the UofC
// https://codepen.io/pfederl/pen/JEMKwB


function getStats(txt) {
    // you need to write your own code here
    let lowerCase = txt.toLowerCase();
    let nChar = lowerCase.length;
    let spchar = /[&\/\\#^+()|$~%.'":*?<>{}!@,]/g;
    let noSpcharStr = lowerCase.replace(spchar, "");
    console.log(noSpcharStr);
    const arr = noSpcharStr.split(/\s/g);
    const noSpaceStr = arr.filter(e => e);
    const noNumStr = new Array();
    const larr = new Array();



    console.log("Initrial Array : ");

    console.log(noSpaceStr);








    var hasNum = /\d/;
    // parsing number in this big loop 
    // example 1hello1 = 1, hello ,1 
    //          hell11o = hell, 11 , o 
    //          1hello = 1, hello 
    //          hello1 = hello, 1 
    // all this type ofcase is handeled here 

    for (var m = 0; m < noSpaceStr.length; m++) {

        var i = 0;
        var j = 0;
        var newStr = noSpaceStr[m];
        console.log("now testing this element " + newStr);
        //if the word contains a number
        if (hasNum.test(newStr)) {

            console.log("has nummber:  " + newStr);
            while (j < newStr.length) {
                var index = 0;

                //this cases handes all the cases like hello1world or 1hello1 
                if ((newStr.charAt(j) >= '0' && newStr.charAt(j) <= '9') && !(newStr.charAt(i) >= '0' && newStr.charAt(i) <= '9')) {

                    larr.push(newStr.slice(i, j));
                    //last character
                } else if ((!(newStr.charAt(j) >= '0' && newStr.charAt(j) <= '9') && (newStr.charAt(i) >= '0' && newStr.charAt(i) <= '9')) && j == newStr.length - 1) {

                    if ((j - i) >= 1) {

                        larr.push(newStr.slice(i + 1, j + 1));

                    }
                } else if ((newStr.charAt(j) >= '0' && newStr.charAt(j) <= '9') && (newStr.charAt(i) >= '0' && newStr.charAt(i) <= '9')) {
                    if ((j - i) > 1) {

                        larr.push(newStr.slice(i + 1, j));

                    }

                }


                //this handles for the repeating numbers like he11111111111111llllo or hi1hi11111hi 
                if ((newStr.charAt(j) >= '0' && newStr.charAt(j) <= '9') && !(newStr.charAt(i) >= '0' && newStr.charAt(i) <= '9')) {

                    if ((j != newStr.length - 1) && !(newStr.charAt(j + 1) >= '0' && newStr.charAt(j + 1) <= '9')) {

                        //  noSpaceStr.splice(noSpaceStr.indexOf(newStr), 1);
                        larr.push(newStr.slice(j, j + 1));
                    } else {
                        var k = j + 1;

                        var str = newStr.charAt(j);
                        //this the loop for repating number to make a single word
                        while ((newStr.charAt(k) >= '0' && newStr.charAt(k) <= '9')) {

                            str += newStr.charAt(k);

                            k++;
                        }


                        larr.push(str);
                        j = k - 1;

                    }


                } else if ((newStr.charAt(j) >= '0' && newStr.charAt(j) <= '9') && (newStr.charAt(i) >= '0' && newStr.charAt(i) <= '9')) {

                    if ((j == 0 && !(newStr.charAt(j + 1) >= '0' && newStr.charAt(j + 1) <= '9')) || (j == newStr.length - 1 && !(newStr.charAt(j - 1) >= '0' && newStr.charAt(j - 1) <= '9'))) {

                        larr.push(newStr.charAt(j));
                    } else if ((i == 0) && (j != newStr.length - 1) && !(newStr.charAt(j + 1) >= '0' && newStr.charAt(j + 1) <= '9')) {

                        larr.push(newStr.slice(j, j + 1));
                    } else {
                        var k = j + 1;

                        var str = newStr.charAt(j);
                        //this the loop for repating number to make a single word
                        while ((newStr.charAt(k) >= '0' && newStr.charAt(k) <= '9')) {
                            console.log("mamamiaaa ");
                            str += newStr.charAt(k);
                            k++;

                        }

                        larr.push(str);
                        j = k - 1;

                    }


                }





                if ((newStr.charAt(j) >= '0' && newStr.charAt(j) <= '9')) {
                    i = j;

                }

                j++;
            }
        } else {
            noNumStr.push(noSpaceStr[m]);
        }
    }


    const finalStrArr = noNumStr.concat(larr);

    console.log(" process arr");
    console.log(larr);

    console.log("no Num Array :  ");
    console.log(noNumStr);
    console.log("below is final array ");
    console.log(finalStrArr);


    let noOfWords = finalStrArr.length;
    let noOfLines = noSpcharStr.split(/\r\n|\r|\n/).length;




    let emptyLines = txt ? (txt.match(/^[ \t]*$/gm) || []).length : 0;

    let non_emptyLines = noOfLines - emptyLines;
    console.log("no of non empty lines : " + non_emptyLines);
    console.log("No of line : " + noOfLines);



    var avg_count = 0.0;
    for (var i = 0; i < finalStrArr.length; i++) {
        avg_count += finalStrArr[i].length;
    }


    let avgWordLen = (avg_count / finalStrArr.length).toFixed(2);
    console.log(" avg word len : " + avgWordLen);

    line_len = 0;
    var lines = txt.split(/\r\n|\r|\n/);
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].length > line_len) {
            line_len = lines[i].length;
        }
    }

    console.log(" max line len : " + line_len);

    console.log("all words");
    console.log(finalStrArr);

    const dummy_arr = new Array();

    for (var i = 0; i < finalStrArr.length; i++) {
        dummy_arr.push(finalStrArr[i]);

    }
    const long_words = dummy_arr.sort((a, b) => (b.length - a.length || a.localeCompare(b)));

    console.log("longest  words");
    console.log(long_words);

    const long_10_words = long_words.splice(0, 10);

    console.log("check how many  words");
    console.log(long_10_words);


    const freq_word = new Array();



    const word_keys = [];



    for (var i = 0; i < finalStrArr.length; i++) {
        if (!word_keys.includes(finalStrArr[i])) {
            console.log("all words");
            word_keys.push(finalStrArr[i]);
        }
    }


    console.log("all words");
    console.log(word_keys);

    for (var i = 0; i < word_keys.length; i++) {
        var count = 0;
        for (var j = 0; j < finalStrArr.length; j++) {
            if (word_keys[i] === finalStrArr[j]) {
                count++;
            }
            console.log("here");
        }
        var str = word_keys[i] + "(" + count + ")";
        freq_word.push(str);
    }




    const freq_10_words = freq_word.splice(0, 10);

    console.log("10 most frequent of word");
    console.log(freq_10_words);

    return {
        nChars: nChar,
        nWords: noOfWords,
        nLines: noOfLines,
        nNonEmptyLines: non_emptyLines,
        averageWordLength: avgWordLen,
        maxLineLength: line_len,
        tenLongestWords: long_10_words,
        tenMostFrequentWords: freq_10_words
    };

}