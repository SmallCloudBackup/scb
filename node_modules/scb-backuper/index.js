function Backuper() {
  var async = require("async");
  this.start = function () {
    console.log("De-queue next job");
    var job = {};
    this.startJob(job);
  }

  this.startJob = function (job) {
    console.log("Starting job");
  }  
}

module.exports = Backuper;
