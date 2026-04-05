const recordService = require('../services/record.service');

const createRecord = async (req, res) => {
  try {
    const userId = req.user.id; // match from token

    const record = await recordService.createRecordService(
      req.body,
      userId
    );

    res.status(201).json({
      message: "Record created successfully",
      record
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const getRecords = async (req, res) => {
  try {
    const userId = req.user.id;

    const records = await recordService.getRecordsService(
      req.query,
      userId
    );

    res.status(200).json({
      message: "Records fetched successfully",
      records
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await recordService.getDashboardService(userId);

    res.status(200).json({
      message: "Dashboard data fetched",
      data
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  createRecord,
  getRecords,
  getDashboard
};