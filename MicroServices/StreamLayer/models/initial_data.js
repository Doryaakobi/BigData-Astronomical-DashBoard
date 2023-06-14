const Toppings = ["onion", "olives", "tomato", "corn", "mushrooms"];

const Branches = [
  "Haifa",
  "Karmiel",
  "Tel Aviv",
  "Beer Sheva",
  "Ramat Gan",
  "Yoqneam",
  "Petah Tikva",
  "Jerusalem",
  "Rishon Letzion",
  "Givatayim",
  "Nahariya",
  "Acre",
  "Rehovot",
  "Ariel",
  "Gedera",
  "Sderot",
  "Ashkelon",
  "Ashdod",
  "Afula",
  "Hadera",
  "Netanya",
  "Zichron",
  "Beit Shemesh",
  "Herzliya",
  "Raanana",
];

const toppings = {};
const branchesHandleTime = {};
const branchesStatus = {};

Branches.forEach((branch) => {
  branchesHandleTime[branch] = 0;
});
Branches.forEach((branch) => {
  branchesStatus[branch] = null;
});
Toppings.forEach((topping) => {
  toppings[topping] = 0;
});

let originalData = {
  "Today's Orders": 0,
  "Total Open Orders": 0,
  "Average Handle Time": 0,
  "Open Branches": 0,
  "Branches Status": branchesStatus,
  "Orders By Region": {
    options: {
      labels: ["North", "Center", "South", "Haifa", "Dan"],
    },
    series: [0, 0, 0, 0, 0],
  }, //our data,
  "Orders During Today": {
    options: {
      xaxis: {
        categories: [
          "10:00",
          "12:00",
          "14:00",
          "16:00",
          "18:00",
          "20:00",
          "22:00",
        ], //will be displayed on the x-asis
      },
    },
    series: [
      {
        name: "Orders Amount", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },

  "Top 5 Shortest Handle Time Branches": {
    branchesHandleTime: branchesHandleTime,
    options: {
      xaxis: {
        categories: ["Eilat", "Haifa", "Tel Aviv", "Rishon", "Karmiel"], //will be displayed on the x-asis
      },
    },
    series: [
      {
        name: "Duration (Minutes)", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0],
      },
    ],
  },
  "Top 5 Pizza Toppings": {
    toppings: toppings,
    options: {
      xaxis: {
        categories: ["Corn", "Mushrooms", "Onion", "Olives", "Tomato"], //will be displayed on the x-asis
      },
    },

    series: [
      {
        name: "Amount", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0],
      },
    ],
  },
};

const createTimeList = () => {
  var currentTime = new Date();
  var timeList = [];
  currentTime.setMinutes(Math.round(currentTime.getMinutes() / 20) * 20);
  var startTime = new Date(currentTime.getTime() - 2 * 60 * 60 * 1000);
  while (startTime <= currentTime) {
    var hours = startTime.getHours().toString().padStart(2, "0");
    var minutes = startTime.getMinutes().toString().padStart(2, "0");
    var time = hours + ":" + minutes;
    timeList.push(time);
    startTime.setTime(startTime.getTime() + 20 * 60 * 1000);
  }
  return timeList;
};
const eventData = {
  "Today's Events": 0,
  "Total of close asteroids (monthly)": 0,
  "Total of close asteroids (daily)": 0,
  "Last Event": {
    title: "",
    img: "",
    text: "",
  },
  "Asteroids close to Earth (monthly)": {
    options: {
      labels: [
        "Asteroids < 15 meters",
        "Asteroids between 15 to 20",
        "Asteroids between 20 to 25",
        "Asteroids between 25 to 30",
        "Asteroids > 30 meters",
      ],
    },
    series: [0, 0, 0, 0, 0], /// 0 TO ALL IN THE INIT
  }, //our data,
  "Sun's Activities (X-ray level)": {
    options: {
      xaxis: {
        categories: createTimeList(), //will be displayed on the x-asis
      },
    },
    series: [
      {
        name: "X-ray level", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
  "Sun's Weather (Hourly)": {
    options: {
      xaxis: {
        categories: createTimeList(), //will be displayed on the x-asis
      },
    },
    series: [
      {
        name: "Temperature", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Condition(1 to 5)", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Precip(%)", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Wind(KM/H)", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Humidity(%)", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "UV Level(0-10)", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Cloude(%)", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Rain(cm)", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
  "Events urgency": {
    options: {
      labels: ["urgency 1", "urgency 2", "urgency 3", "urgency 4", "urgency 5"],
    },
    series: [0, 0, 0, 0, 0], /// 0 TO ALL IN THE INIT
  }, //our data
  "Events Distribution": {
    options: {
      xaxis: {
        categories: [
          "GRB",
          "Rise Brightness Apparent",
          "UV (Rise UV)",
          "Rise Ray-X",
          "Comet",
        ], //will be displayed on the x-asis
      },
    },
    series: [
      {
        name: "Amount", //will be displayed on the y-axis
        data: [0, 0, 0, 0, 0],
      },
    ],
  },
  neoTableObject: {
    header: [
      "Neo ID",
      "Asteroid's Name",
      "Absolute Magnitude (H)",
      "Min Estimated Diameter (meters)",
      "Max Estimated Diameter (meters)",
      "Potentially Hazardous",
      "Close Approach Date",
      "Close Approach Time",
      "Miss Distance",
      "Orbiting Body",
    ],
    body: [],
  },
  astroEventTableObject: {
    header: [
      "Astroid's Id",
      "Telescope's Name",
      "Date",
      "Time",
      "Ra",
      "Dec",
      "Event Type",
      "Urgency",
    ],
    body: [],
  },
  brightStars: {
    header: [
      "Harvard Reference Number",
      "RA",
      "DEC",
      "Epoch",
      "RA Proper Motion",
      "DEC Proper Motion",
      "Magnitude",
      "Title HD",
    ],
    body: [],
  },
};

module.exports = eventData;
