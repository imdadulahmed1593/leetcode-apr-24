// Callback to control the flow of asynchronous tasks can lead to "callback hell" or "pyramid of doom".
// This happens when you have multiple nested callbacks, making the code hard to read and maintain.
// const task1 = (callback) => {
//   setTimeout(() => {
//     console.log("one");
//     callback();
//   }, 1000);
// };
// const task2 = (callback) => {
//   setTimeout(() => {
//     console.log("two");
//     callback();
//   }, 1500);
// };
// const task3 = () => {
//   setTimeout(() => {
//     console.log("three");
//   }, 100);
// };

// task1(() => {
//   task2(() => {
//     task3();
//   });
// });

/////////////////////// USING PROMISES ///////////////////////
// const task1 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("one");
//     }, 1000);
//   });
// };

// const task2 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("two");
//     }, 1500);
//   });
// };

// const task3 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("three");
//     }, 100);
//   });
// };

// task1()
//   .then((result1) => {
//     console.log(result1);
//     return task2();
//   })
//   .then((result2) => {
//     console.log(result2);
//     return task3();
//   })
//   .then((result3) => {
//     console.log(result3);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

/////////////////////// USING ASYNC/AWAIT ///////////////////////
// const runTasks = async () => {
//   try {
//     const result1 = await task1();
//     console.log(result1);

//     const result2 = await task2();
//     console.log(result2);

//     const result3 = await task3();
//     console.log(result3);
//   } catch (err) {
//     console.error(err);
//   }
// };

// runTasks();

////////////////////////////////// another example of using promises and async/await ///////////////////////////////////
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Tech meeting",
      location: "Google Meet",
      time: "10:00 AM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting is already scheduled!"));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} is scheduled in ${meetingDetails.location} at ${meetingDetails.time}`;

  return Promise.resolve(calendar);
};

// meeting
//   .then((res) => addToCalendar(res))
//   .then((calender) => {
//     console.log(calender);
//   })
//   .catch((err) => {
//     console.log(`Error is: ${err.message}`);
//   });

async function myMeeting() {
  try {
    const meetingDetails = await meeting; // wait for the meeting promise to resolve
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);
  } catch (err) {
    console.log(err);
  }
}

myMeeting();
