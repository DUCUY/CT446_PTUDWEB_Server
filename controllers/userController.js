import { users } from "../models/user.js";

const getAllUser = async (req, res) => {
  try {
    const user = await users.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await users.findOne({ email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password, name, mssv, type } = req.body;
    const check = await users.findOne({ email });
    if (check) {
      res.status(400).json({ state: "failure" });
    } else {
      const user = new users({ email, password, name, mssv, type });
      await user.save();
      res.status(200).json({ state: "success" });
    }
  } catch (error) {
    res.status(500)
  }
};

const deletee = async (req, res) => {
  try {
    const idReq = req.params.id;
    await productModel.findByIdAndDelete(idReq)
    res.status(200).json({ message: "user was deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const deleteeAll = async (req, res) => {
  try {
    const user = await productModel.deleteMany()
    res.status(200).json(
      { message: `${user.deletedCount} users were deleted successfully` }
    );
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const compareUser = async (req, res) => {

    const { email, password } = req.body;
    const user = await users.findOne({ email });
    // console.log(user);
    if (user) {
      if (user.email === email && user.password === password) {
        res.json({ state: "success" , user: user }); 

      } else { 
        res.json({ state: "that bai" });

      }
    } 
  
};

export { createUser, compareUser, getAllUser, deletee, deleteeAll, getUser };
