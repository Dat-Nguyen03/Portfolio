import ProjectCategory from "../models/projectCategory";

export const getAllProjectCategory = async (req, res) => {
  try {
    const data = await ProjectCategory.find().populate("projects");
    if (data.length === 0) {
      return res.status(400).json({
        message: "Khong co category",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const body = req.body;
    const data = await ProjectCategory.create(body);
    if (!data) {
      return res.status(400).json({
        message: "Them category that bai",
      });
    }
    return res.status(200).json({
      message: "Them category thanh cong",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
