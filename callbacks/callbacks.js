const wall = {
  isBuilt: false,
  isPlanished: false,
  isPainted: false
};

function built(wallToBuild, callback) {
  console.log("build");

  setTimeout(() => {
    wallToBuild.isBuilt = true;
    const error = wallToBuild.isBuilt ? null : "cannot build";
    callback(error, wallToBuild);
  }, 3000);
}

function planish(wallToPlanish, callback) {
  console.log("planish");

  setTimeout(() => {
    wallToPlanish.isPlanished = true;
    const error = wallToPlanish.isPlanished ? null : "cannot build";
    callback(error, wallToPlanish);
  }, 2000);
}

function paint(wallToPaint, callback) {
  console.log("paint");
  
  setTimeout(() => {
    wallToPaint.isPainted = true;
    const error = wallToPaint.isPainted ? null : "cannot build";
    callback(error, wallToPaint);
  }, 4000);
}

built(wall, (error, wallBuilt) => {
  if (error) return console.error("Error in build");
  planish(wallBuilt, (planisherror, wallToPlanish) => {
    if (error) return console.error("Error in planish");
    paint(wallToPlanish, (planisherror, wallToPaint) => {
      if (error) return console.error("Error in Paint");
      console.log(wallToPaint);
    });
  });
});
