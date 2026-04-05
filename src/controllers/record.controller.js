const recordService = require('../services/record.service');

const createRecord = async (req, res) => {
  try {
    const userId = req.user.id; // match from user specific token

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

const getRecentRecords = async (req, res) => {
  try {
    const userId = req.user.id;

    const records = await recordService.getRecentRecordsService(userId);

    res.status(200).json({
      message: "Recent records fetched",
      records
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const updateRecord = async (req, res) => {
  try {
    const userId = req.user.id;
    const recordId = req.params.id;

    const updatedRecord = await recordService.updateRecordService(
      recordId,
      req.body,
      userId
    );

    res.status(200).json({
      message: "Record updated successfully",
      record: updatedRecord
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const userId = req.user.id;
    const recordId = req.params.id;

    await recordService.deleteRecordService(recordId, userId);

    res.status(200).json({
      message: "Record deleted successfully"
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
  getDashboard,
  updateRecord,
  deleteRecord,
  getRecentRecords
};