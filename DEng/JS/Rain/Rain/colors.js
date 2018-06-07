var colors = {};

var originalColorMap = {
    "red": {"red": 255, "green": 0, "blue": 0},
    "orange": { "red": 255, "green": 153, "blue": 0 },
    "yellow": { "red": 153, "green": 153, "blue": 0 },
    
    "green": { "red": 0, "green": 255, "blue": 0 },
    "blue": { "red": 0, "green": 0, "blue": 255 },
    "purple": { "red": 153, "green": 0, "blue": 153 },

    "brown": { "red": 102, "green": 51, "blue": 0 },
    "grey": { "red": 153, "green": 153, "blue": 153 },
    "gray": { "red": 153, "green": 153, "blue": 153 },

    "cyan": { "red": 0, "green": 255, "blue": 255 }
};

var colorMap = {};

colors.colorForWord = function(word){
    word = word.toLowerCase();
    if (!colorMap[word])
        return;
    return makeNSColor(colorMap[word]);
};


colors.shuffle = function(){
    var colors = Object.keys(originalColorMap);
    var i = colors.length;
    while( --i ){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = colorMap[colors[i]];
        colorMap[colors[i]] = colorMap[colors[j]];
        colorMap[colors[j]] = temp;
    }
    
};



colors.reset = function(){
    for (var color in originalColorMap){
        
        colorMap[color] = originalColorMap[color];
    }
    
};





color.reset();



