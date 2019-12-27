import moods from '../../database/moods.js';
import movies from '../../database/movies.js';
import series from '../../database/series.js';
import musics from '../../database/musics.js';
import media from '../../database/media.js';
import {isChristmasPeriod, isHalloweenPeriod, isNewYearPeriod, isValentinePeriod} from "../utilities/datesPeriod";

export function determineResults(mood, time, medias) {
    let tabMedias = {};

    if (medias.includes("movies")) {
        tabMedias["movies"] = movies;
    }
    if (medias.includes("series")) {
        tabMedias["series"] = series;
    }
    if (medias.includes("musics")) {
        tabMedias["musics"] = musics;
    }
    if (medias.includes("media")) {
        tabMedias["medias"] = media;
    }

    let result = {};
    let [tags, t] = determineTags(mood, time);

    for (const key in tabMedias) {
        if (tabMedias.hasOwnProperty(key)) {
            let element1 = tabMedias[key];
            // tabMedias.forEach(element1 => {
            let tab = [];

            element1.forEach(element2 => {

                if ((element2["tags"].filter(value => t.includes(value))).length !== 0 || element1 === musics) {
                    let cpt = 0;

                    element2["tags"].forEach(element3 => {

                        if (tags.includes(element3)) {
                            cpt++;
                        }
                    });

                    let tabTemp = [cpt, element2];
                    tab.push(tabTemp);
                }
            });

            tab.sort().reverse();

            if (tab.length > 3) {
                tab.length = 3;
            }

            let tabTemp2 = [];

            tab.forEach(element3 => {
                tabTemp2.push(element3[1]);
            });

            result[key] = tabTemp2;
        }
    }

    return result;
}

export function determineTags(mood, time) {
    /// MOOD
    let tags = moods[mood];

    /// DATE
    const date = new Date();

    if (isChristmasPeriod(date)) {
        console.log("christmas");
        tags.push("christmas");
    } else if (isHalloweenPeriod(date)) {
        console.log("halloween");
        tags.push("halloween");
    } else if (isValentinePeriod(date)) {
        console.log("valentine's day");
        tags.push("valentine's day");
    } else if (isNewYearPeriod(date)) {
        console.log("new year's eve");
        tags.push("new year's eve");
    }

    /// TIME

    if (time === "999") {
        time = ["20", "45", "60", "120", "999"]
    }
    if (time === "120") {
        time = ["20", "45", "60", "120"]
    }
    if (time === "60") {
        time = ["20", "45", "60"]
    }
    if (time === "45") {
        time = ["20", "45"]
    }
    if (time === "20") {
        time = ["20"]
    }

    return [tags, time];
}