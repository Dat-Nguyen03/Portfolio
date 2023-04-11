import Project from "../models/project";
import Joi from "joi";

export const getAllProject = async (req, res) => {
  try {
    const data = await Project.find();
    if (data.length === 0) {
      return res.status(200).json({
        message: "Không tìm thấy projects nào!",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getOneProject = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Project.findById(id);
    if (!data) {
      return res.status(400).json({
        message: "Không tìm thấy project nào!",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const body = req.body;
    const data = await Project.create(body);
    if (!data) {
      return res.status(200).json({
        message: "Tạo project thất bại!",
      });
    }
    return res.status(200).json({
      message: "Tạo project thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Project.findByIdAndDelete(id);
    if (!data) {
      return res.status(400).json({
        message: "Xóa không thành công",
      });
    }
    return res.status(200).json({
      message: "Xóa thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await Project.findByIdAndUpdate(id, body);
    if (!data) {
      return res.status(400).json({
        message: "Cập nhật thất bại",
      });
    }
    return res.status(200).json({
      message: "Cập nhật thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
