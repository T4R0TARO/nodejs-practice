const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  // find all jobs associated to the user id
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  // success response
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  // nested destructuring obj
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  // findOne()
  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });
  // error handler
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  // success response
  res.status(StatusCodes.OK).json({ job });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId; // add key `createBy` and have value be the user ID
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  // destructure values
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req;
  // error handler
  if (company === "" || position === "") {
    throw new BadRequestError("Company or Postion fields cannot be empty");
  }
  // findByIdAndUpdate()
  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  // error handler
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  // success response
  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  // destructure values
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  // findByIdAndDelete()
  // ! findByIdAndRemove() does not work...
  const job = await Job.findByIdAndDelete({
    _id: jobId,
    createdBy: userId,
  });

  // error handler
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  // success response
  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
