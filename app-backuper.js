/**
 * SmallCloudBackup - Backuper
 *
 * Backuper process is the actual worker that runs individual jobs and performs
 * backup operations.
 *
 * Backuper uses Mongo-stored configuration and RabbitMQ job queues
 */

var backuper = require("scb-backuper");

module.exports = new backuper();
