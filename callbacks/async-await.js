//
function build(wallToBuild) {
  console.log("build starts");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      wallToBuild.isBuilt = true;
      wallToBuild.isBuilt ? resolve(wallToBuild) : reject("cannot build");
    }, 3000);
  });
}

function planish(wallToPlanish) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      wallToPlanish.isPlanished = true;
      wallToPlanish.isPlanished
        ? resolve(wallToPlanish)
        : reject("cannot planish");
    }, 2000);
  });
}

function paint(wallToPaint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      wallToPaint.isPainted = true;
      wallToPaint.isPainted ? resolve(wallToPaint) : reject("cannot paint");
    }, 4000);
  });
}

async function main() {
  const builtWall = await build({});
  const planishedWall = await planish(builtWall);
  const paintedWall = await paint(planishedWall);
  //console.log("paintedWall", paintedWall);
  return paintedWall;
}

/*main()
  .then((resultado) => {
    console.log("DONE: ", resultado);
  })
  .catch((error) => {
    console.error("error: ", error);
  });
*/
/* Proceso de inscripcion */

function interview(koder) {
  console.log("Starts ");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koder.isInterviewed = true;
      koder.isInterviewed ? resolve(koder) : reject("Cannot interview");
    }, 2000);
  });
}

function sendOffer(koderInterview) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderInterview.isSentOffer = true;
      koderInterview.isSentOffer
        ? resolve(koderInterview)
        : reject("Cannot send offer");
    }, 3000);
  });
}

function pay(koderPay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderPay.isPaid = true;
      koderPay.isPaid ? resolve(koderPay) : reject("Cannot send offer");
    }, 5000);
  });
}

function goClass(koderGoToClass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderGoToClass.isWentToClass = true;
      koderGoToClass.isWentToClass
        ? resolve(koderGoToClass)
        : reject("Koder didn't go to Class");
    }, 3000);
  });
}

async function mainKoder() {
  const interviewKoder = await interview({});
  const sendOfferKoder = await sendOffer(interviewKoder);
  const payKoder = await pay(sendOfferKoder);
  const goToClassKoder = await goClass(payKoder);
  return goToClassKoder;
}

mainKoder()
  .then((resultado) => {
    console.log("DONE: ", resultado);
  })
  .catch((error) => {
    console.error("error: ", error);
  });
