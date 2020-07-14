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

/*
build({})
  .then((builtWall) => {
    console.log("builtWall: ", builtWall);
    planish(builtWall)
      .then((planishedWall) => {
        console.log("planishedWall: ", planishedWall);
        paint(planishedWall)
          .then((paintedWall) => {
            console.log("paintedWall: ", paintedWall);
            console.log("Completed work");
          })
          .catch((error) => {
            console.error("paint error: ", error);
          });
      })
      .catch((error) => {
        console.error("planish error", error);
      });
  })
  .catch((error) => {
    console.error("build error", error);
  });
*/

build({})
  .then((builtWall) => {
    console.log("builtWall: ", builtWall);
    return planish(builtWall);
  })
  .then((planishedWall) => {
    console.log("planishedWall: ", planishedWall);
    return paint(planishedWall);
  })
  .then((paintedWall) => {
    console.log("paintedWall: ", paintedWall);
    return paint(paintedWall);
  })
  .catch((error) => {
    console.error("error", error);
  });
