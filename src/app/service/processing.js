import moods from '../../database/moods.js';
import movies from '../../database/movies.js';
import series from '../../database/series.js';
import musics from '../../database/musics.js';
import media from '../../database/media.js';

export function determineResults(mood,time,medias) {

    var tabMedias = [];

    if(medias.includes("movies")) {tabMedias.push(movies);}
    if(medias.includes("series")) {tabMedias.push(series);}
    if(medias.includes("musics")) {tabMedias.push(musics);}
    if(medias.includes("media")) {tabMedias.push(media);}

    console.log(movies==tabMedias[0])
    var result = [];
    var [tags,time] = determineTags(mood,time);
    
    tabMedias.forEach(element1 => {
        var tab = [];
        
        element1.forEach(element2 => {

            if((element2["tags"].filter(value => time.includes(value))).length!=0 || element1==musics)
            {
                var cpt = 0;

                element2["tags"].forEach(element3 => {
                
                    if(tags.includes(element3))
                    {
                        cpt++;
                    }
                })
                
                var tabTemp=[cpt,element2];
                tab.push(tabTemp);
            }
        })

        tab.sort().reverse();
        
        if(tab.length>3)
        {
            tab.length=3;
        }

        var tabTemp2 = [];

        tab.forEach(element3 => {
            tabTemp2.push(element3[1]);
        })
        result.push(tabTemp2);
    });
    
    return result;
}

export function determineTags(mood,time) {

    /// MOOD
    var tags = moods[mood];

    /// DATE
    var date = new Date();

    // Christmas dates
    var dateStartChristmas = new Date(date.getFullYear(),11,1);
    var dateEndChritmas = new Date(date.getFullYear(),21,26);

    // Halloween dates
    var dateStartHalloween = new Date(date.getFullYear(),9,15);
    var dateEndHalloween = new Date(date.getFullYear(),10,15);

    // Valentine's day dates
    var dateStartValentine = new Date(date.getFullYear(),9,15);
    var dateEndValentine = new Date(date.getFullYear(),10,15);

    // New year's eve dates
    var dateStartNewYear = new Date(date.getFullYear(),1,10);
    var dateEndNewYear = new Date(date.getFullYear(),1,17);

    if(date >= dateStartChristmas && date <= dateEndChritmas)
    {
        console.log("christmas");
        tags.push("christmas");
    }
    else if(date >= dateStartHalloween && date <= dateEndHalloween)
    {
        console.log("halloween");
        tags.push("halloween");
    }
    else if(date >= dateStartValentine && date <= dateEndValentine)
    {
        console.log("valentine's day");
        tags.push("valentine's day");
    }
    else if(date >= dateStartNewYear && date <= dateEndNewYear)
    {
        console.log("new year's eve");
        tags.push("new year's eve");
    }

    /// TIME

    if(time==="999") {time=["20","45","60","120","999"]}
    if(time==="120") {time=["20","45","60","120"]}
    if(time==="60") {time=["20","45","60"]}
    if(time==="45") {time=["20","45"]}
    if(time==="20") {time=["20"]}

    return [tags,time];
}