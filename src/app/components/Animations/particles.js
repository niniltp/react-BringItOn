import {
    isHalloweenPeriod,
    isNewYearPeriod,
    isNightTime,
    isValentinePeriod,
    isWinterPeriod
} from "../../utilities/datesPeriod";
import {getRandomInt} from "../../utilities/random";

let params = [];

params["winter"] = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.2
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 0.5,
            "direction": "bottom",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            }
        },
        "modes": {
            "bubble": {
                "distance": 200,
                "duration": 10,
                "size": 0,
                "opacity": 0
            }
        }
    }
};

params["halloween"] = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": "#FF8C00"
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "none",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 1
            }
        }
    }
};

params["valentine"] = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": "#B22222"
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "none",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 1
            }
        }
    }
};

params["newYear"] = {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8", "#be2434", "#FFFFFF", "#fee069"]
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "direction": "right",
            "speed": 0.1
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 50,
                "size_min": 0.1,
                "sync": false
            }
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    },
    "retina_detect": true
};

params["night"] = {
    "particles": {
        "number": {
            "value": 300,
            "density": {
                "enable": true,
                "value_area": 2000
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "direction": "right",
            "speed": 0.02
        },
        "size": {
            "value": 1
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
};

params["default"] = {
    "particles": {
        "number": {
            "value": 100
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.5,
            "width": 0.3,
            "distance": 100
        },
        "size": {
            "value": 1
        },
        "opacity": {
            "value": 0.6
        },
        "move": {
            "direction": "none",
            "speed": 2
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 1
            }
        }
    }
};

export function getParams(date) {
    let tags = [];

    if (isWinterPeriod(date)) {
        console.log("winter");
        tags.push("winter");
    }
    if (isHalloweenPeriod(date)) {
        console.log("halloween");
        tags.push("halloween");
    }
    if (isValentinePeriod(date)) {
        console.log("valentine");
        tags.push("valentine");
    }
    if (isNewYearPeriod(date)) {
        console.log("newYear");
        tags.push("newYear");
    }
    if (isNightTime(date.getHours())) {
        console.log("night");
        tags.push("night");
    }

    if(tags.length === 0) tags.push("default");

    const rand = getRandomInt(tags.length);

    // return params["winter"];
    // return params["valentine"];
    // return params["halloween"];
    // return params["newYear"];
    // return params["night"];
    // return params["default"];

    return params[tags[rand]];
}
